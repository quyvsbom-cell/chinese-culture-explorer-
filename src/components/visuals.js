// ============================================================================
// Custom SVG Museum Artwork, Interactive Regional Map, Five Elements Diagram,
// and Knowledge Graph Component Renderers
// ============================================================================

window.CCE_VISUALS = {
  renderJiangshanInkHTML(sealText = "江山多娇") {
    return `
      <div class="museum-artwork-frame">
        <img
          src="assets/images/jiangshan-ruci-duojiao.jpg"
          alt="Đại họa sơn thủy Giang Sơn Như Thử Đa Kiều (1959) của Phó Báo Thạch & Quan Sơn Nguyệt – 江山如此多娇"
          class="museum-artwork-img"
          loading="eager"
        />
        <span class="museum-artwork-seal">${sealText}</span>
      </div>
    `;
  },

  renderGreatWallInkHTML(sealText = "万里长城") {
    return `
      <div class="museum-artwork-frame">
        <img
          src="assets/images/great-wall-ink.jpg"
          alt="Tranh thủy mặc Vạn Lý Trường Thành giữa biển mây – 万里长城云海水墨图"
          class="museum-artwork-img"
          loading="eager"
        />
        <span class="museum-artwork-seal">${sealText}</span>
      </div>
    `;
  },

  renderInkLandscapeSVG() {
    return `
      <svg viewBox="0 0 540 360" class="w-full" role="img" aria-label="Bức họa thủy mặc sơn thủy và kiến trúc cổ điển">
        <defs>
          <linearGradient id="skyWash" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="currentColor" stop-opacity="0.03"/>
            <stop offset="100%" stop-color="currentColor" stop-opacity="0.09"/>
          </linearGradient>
          <linearGradient id="mountainFar" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#637F72" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#637F72" stop-opacity="0.05"/>
          </linearGradient>
          <linearGradient id="mountainMid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#202020" stop-opacity="0.58"/>
            <stop offset="100%" stop-color="#202020" stop-opacity="0.12"/>
          </linearGradient>
          <linearGradient id="mountainNear" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#202020" stop-opacity="0.88"/>
            <stop offset="100%" stop-color="#202020" stop-opacity="0.35"/>
          </linearGradient>
        </defs>

        <!-- Rice paper frame -->
        <rect x="0" y="0" width="540" height="360" rx="12" fill="url(#skyWash)" />

        <!-- Sun / Red Seal Circle -->
        <circle cx="430" cy="78" r="24" fill="#B63D32" opacity="0.85" />

        <!-- Distant Misty Peaks -->
        <path d="M 0 210 Q 95 95 190 175 T 380 140 T 540 190 L 540 280 L 0 280 Z" fill="url(#mountainFar)" />

        <!-- Midground Peaks -->
        <path d="M 0 250 Q 75 155 155 215 T 315 160 T 465 220 L 540 205 L 540 310 L 0 310 Z" fill="url(#mountainMid)" />

        <!-- Foreground Promontory with Pavilion -->
        <path d="M 0 295 Q 110 235 230 285 T 430 305 L 540 280 L 540 360 L 0 360 Z" fill="url(#mountainNear)" />

        <!-- Classical Chinese Pavilion (亭) on Left Cliff -->
        <g transform="translate(105, 224)">
          <path d="M -22 14 Q 0 -4 22 14 L 16 16 L -16 16 Z" fill="#9F2929" />
          <path d="M -16 4 Q 0 -10 16 4 Z" fill="#202020" />
          <line x1="-11" y1="16" x2="-11" y2="34" stroke="#202020" stroke-width="2.2" />
          <line x1="11" y1="16" x2="11" y2="34" stroke="#202020" stroke-width="2.2" />
          <line x1="-15" y1="34" x2="15" y2="34" stroke="#202020" stroke-width="2.5" />
        </g>

        <!-- Ink Water Ripples -->
        <path d="M 250 322 Q 305 316 360 322 T 470 322" fill="none" stroke="#637F72" stroke-width="1.3" opacity="0.55" />
        <path d="M 285 336 Q 345 331 405 336 T 510 336" fill="none" stroke="#637F72" stroke-width="1.1" opacity="0.45" />

        <!-- Small Scholar Boat -->
        <g transform="translate(335, 310)">
          <path d="M -18 4 Q 0 11 20 3 L 14 7 Q 0 12 -14 7 Z" fill="#202020" />
          <circle cx="-2" cy="0" r="2.3" fill="#9F2929" />
        </g>

        <!-- Vertical Calligraphy Colophon & Seal -->
        <text x="488" y="64" font-family="'Noto Serif SC', serif" font-size="16" fill="currentColor" opacity="0.72" writing-mode="tb" letter-spacing="4">天人合一</text>
        <rect x="478" y="148" width="22" height="22" rx="2" fill="#9F2929" />
        <text x="489" y="164" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="11" fill="#F7F4ED" font-weight="700">文</text>
      </svg>
    `;
  },

  renderChinaMapSVG(activeRegionId, activeCityId, mapMode = "regions", activeProvinceId = null, provinces = [], mapOpts = {}) {
    const enMode = Boolean(mapOpts && mapOpts.enMode);
    const allDefaultHsr = ["hsr-gba", "hsr-sw", "hsr-yn", "hsr-jh", "hsr-jgj", "hsr-silk"];
    const activeHsr = Array.isArray(mapOpts && mapOpts.hsrFilters) && mapOpts.hsrFilters.length
      ? mapOpts.hsrFilters
      : (mapMode === "corridors" ? allDefaultHsr : []);
    const geoMap = (typeof window !== "undefined" && window.CCE_CHINA_GEO) ? window.CCE_CHINA_GEO : null;

    const regionColors = {
      northwest: "#7E5D43",
      north: "#9F2929",
      northeast: "#3F5973",
      southwest: "#A83A2F",
      east: "#1F6E5C",
      central: "#9A6700",
      south: "#9A6700"
    };

    const adminColors = {
      municipality: "#B8292F",
      sar: "#9A6700",
      autonomous: "#1F6E5C",
      province: "#6A5A4D"
    };

    const corridorColors = {
      "Kinh–Tân–Ký (京津冀)": "#9F2929",
      "Châu thổ Trường Giang (长三角)": "#1F6E5C",
      "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)": "#9A6700",
      "Thành Đô–Trùng Khánh (成渝经济圈)": "#B8292F",
      "Hành lang RCEP – Việt Nam": "#1F6E5C",
      "Con đường Tơ lụa & Á–Âu": "#7E5D43",
      "Trung Nguyên & Trung Du Trường Giang": "#3B4D7A",
      "Vành đai Đông Bắc & Hoàn Bột Hải": "#3F5973"
    };

    const macroLabels = [
      { id: "northwest", label: enMode ? "NORTHWEST 西北" : "TÂY BẮC 西北", lx: 225, ly: 130 },
      { id: "north", label: enMode ? "NORTH 华北" : "HOA BẮC 华北", lx: 505, ly: 186 },
      { id: "northeast", label: enMode ? "NORTHEAST 东北" : "ĐÔNG BẮC 东北", lx: 828, ly: 112 },
      { id: "southwest", label: enMode ? "SOUTHWEST 西南" : "TÂY NAM 西南", lx: 250, ly: 452 },
      { id: "east", label: enMode ? "EAST 华东" : "HOA ĐÔNG 华东", lx: 786, ly: 325 },
      { id: "south", label: enMode ? "SOUTH & CENTRAL 华南" : "HOA NAM & TRUNG NAM", lx: 642, ly: 598 }
    ];

    const defaultProvinceCoords = {
      "prov-beijing": { x: 631.2, y: 243.6, regionId: "north", short: "京", cat: "municipality", capitalEra: "Yên · Liêu · Kim · Nguyên · Minh · Thanh", corridor: "Kinh–Tân–Ký (京津冀)" },
      "prov-tianjin": { x: 642.2, y: 255.9, regionId: "north", short: "津", cat: "municipality", capitalEra: "Thương cảng Kinh–Kỳ", corridor: "Kinh–Tân–Ký (京津冀)" },
      "prov-hebei": { x: 604.3, y: 273.2, regionId: "north", short: "冀", cat: "province", capitalEra: "Nước Triệu · Yên cổ", corridor: "Kinh–Tân–Ký (京津冀)" },
      "prov-shanxi": { x: 576.9, y: 276.2, regionId: "north", short: "晋", cat: "province", capitalEra: "Nước Tấn · Bắc Ngụy Bình Thành", corridor: "Kinh–Tân–Ký (京津冀)" },
      "prov-inner-mongolia": { x: 564.5, y: 228.9, regionId: "north", short: "蒙", cat: "autonomous", capitalEra: "Thượng Đô nhà Nguyên", corridor: "Vành đai Đông Bắc & Hoàn Bột Hải" },
      "prov-liaoning": { x: 730.1, y: 213.2, regionId: "northeast", short: "辽", cat: "province", capitalEra: "Thịnh Kinh (Hậu Kim – Sơ Thanh)", corridor: "Vành đai Đông Bắc & Hoàn Bột Hải" },
      "prov-jilin": { x: 756.7, y: 179.8, regionId: "northeast", short: "吉", cat: "province", capitalEra: "Bột Hải Quốc", corridor: "Vành đai Đông Bắc & Hoàn Bột Hải" },
      "prov-heilongjiang": { x: 775.3, y: 149.8, regionId: "northeast", short: "黑", cat: "province", capitalEra: "Thượng Kinh Hội Ninh (Nhà Kim)", corridor: "Vành đai Đông Bắc & Hoàn Bột Hải" },
      "prov-shanghai": { x: 702.5, y: 382.3, regionId: "east", short: "沪", cat: "municipality", capitalEra: "Đô thị Thương cảng Hiện đại", corridor: "Châu thổ Trường Giang (长三角)" },
      "prov-jiangsu": { x: 664.4, y: 369.4, regionId: "east", short: "苏", cat: "province", capitalEra: "Lục Triều · Nam Đường · Sơ Minh (Nam Kinh)", corridor: "Châu thổ Trường Giang (长三角)" },
      "prov-zhejiang": { x: 683.9, y: 397.4, regionId: "east", short: "浙", cat: "province", capitalEra: "Ngô Việt · Nam Tống (Lâm An)", corridor: "Châu thổ Trường Giang (长三角)" },
      "prov-anhui": { x: 643.5, y: 372.2, regionId: "east", short: "皖", cat: "province", capitalEra: "Thọ Xuân (Nước Sở) · Huy Châu", corridor: "Châu thổ Trường Giang (长三角)" },
      "prov-fujian": { x: 672.0, y: 464.7, regionId: "east", short: "闽", cat: "province", capitalEra: "Mân Việt · Đế cảng Tuyền Châu Tống–Nguyên", corridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" },
      "prov-jiangxi": { x: 623.9, y: 423.1, regionId: "east", short: "赣", cat: "province", capitalEra: "Kinh đô Sứ Cảnh Đức Trấn · Hồng Đô", corridor: "Trung Nguyên & Trung Du Trường Giang" },
      "prov-shandong": { x: 639.5, y: 295.1, regionId: "east", short: "鲁", cat: "province", capitalEra: "Nước Lỗ & Nước Tề (Tắc Hạ)", corridor: "Kinh–Tân–Ký (京津冀)" },
      "prov-henan": { x: 592.6, y: 325.8, regionId: "south", short: "豫", cat: "province", capitalEra: "Ân Khư · Lạc Dương · Khai Phong", corridor: "Trung Nguyên & Trung Du Trường Giang" },
      "prov-hubei": { x: 601.5, y: 392.7, regionId: "south", short: "鄂", cat: "province", capitalEra: "Kinh Sở (Dĩnh Đô) · Tân Hợi Vũ Xương", corridor: "Trung Nguyên & Trung Du Trường Giang" },
      "prov-hunan": { x: 582.9, y: 431.0, regionId: "south", short: "湘", cat: "province", capitalEra: "Nước Sở · Trường Sa Vương quốc", corridor: "Trung Nguyên & Trung Du Trường Giang" },
      "prov-guangdong": { x: 587.1, y: 511.9, regionId: "south", short: "粤", cat: "province", capitalEra: "Nam Việt (Phiên Ngung) · Thập Tam Hàng", corridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" },
      "prov-guangxi": { x: 517.3, y: 516.9, regionId: "south", short: "桂", cat: "autonomous", capitalEra: "Quế Lâm – Nam Ninh · Trạm đầu Việt–Trung", corridor: "Hành lang RCEP – Việt Nam" },
      "prov-hainan": { x: 545.6, y: 561.5, regionId: "south", short: "琼", cat: "province", capitalEra: "Cảng Tự do Thương mại Biển Đông", corridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" },
      "prov-chongqing": { x: 491.7, y: 409.5, regionId: "southwest", short: "渝", cat: "municipality", capitalEra: "Nước Ba · Bồi đô 1937–1945", corridor: "Thành Đô–Trùng Khánh (成渝经济圈)" },
      "prov-sichuan": { x: 457.5, y: 391.4, regionId: "southwest", short: "川", cat: "province", capitalEra: "Cổ Thục Tam Tinh Đôi · Thục Hán (Thành Đô)", corridor: "Thành Đô–Trùng Khánh (成渝经济圈)" },
      "prov-guizhou": { x: 494.6, y: 456.7, regionId: "southwest", short: "贵", cat: "province", capitalEra: "Dạ Lang cổ · Vương Dương Minh Long Trường", corridor: "Thành Đô–Trùng Khánh (成渝经济圈)" },
      "prov-yunnan": { x: 438.3, y: 481.4, regionId: "southwest", short: "云", cat: "province", capitalEra: "Điền Quốc · Nam Chiếu · Đại Lý", corridor: "Hành lang RCEP – Việt Nam" },
      "prov-tibet": { x: 275.3, y: 407.4, regionId: "southwest", short: "藏", cat: "autonomous", capitalEra: "Thổ Phồn (Cung Potala Lhasa)", corridor: "Con đường Tơ lụa & Á–Âu" },
      "prov-shaanxi": { x: 526.2, y: 333.8, regionId: "northwest", short: "陕", cat: "province", capitalEra: "Hàm Dương · Trường An (Chu–Tần–Hán–Đường)", corridor: "Con đường Tơ lụa & Á–Âu" },
      "prov-gansu": { x: 453.9, y: 305.0, regionId: "northwest", short: "甘", cat: "province", capitalEra: "Hành lang Hà Tây · Đôn Hoàng", corridor: "Con đường Tơ lụa & Á–Âu" },
      "prov-qinghai": { x: 425.2, y: 296.1, regionId: "northwest", short: "青", cat: "province", capitalEra: "Thổ Dục Hồn · Đền Kumbum", corridor: "Con đường Tơ lụa & Á–Âu" },
      "prov-ningxia": { x: 488.6, y: 266.5, regionId: "northwest", short: "宁", cat: "autonomous", capitalEra: "Kinh đô Tây Hạ (Hưng Khánh Phủ)", corridor: "Con đường Tơ lụa & Á–Âu" },
      "prov-xinjiang": { x: 225.8, y: 181.4, regionId: "northwest", short: "新", cat: "autonomous", capitalEra: "Tây Vực Đô hộ phủ (Hán) · An Tây Tứ Trấn", corridor: "Con đường Tơ lụa & Á–Âu" },
      "prov-taiwan": { x: 703.0, y: 481.4, regionId: "east", short: "台", cat: "province", capitalEra: "Đông Ninh Phủ · Đài Bắc Phủ", corridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" },
      "prov-hongkong": { x: 599.7, y: 524.9, regionId: "south", short: "港", cat: "sar", capitalEra: "Cảng Tự do Quốc tế & Tài chính Châu Á", corridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" },
      "prov-macau": { x: 590.9, y: 526.8, regionId: "south", short: "澳", cat: "sar", capitalEra: "Hào Kính · Giao thương Á–Âu thế kỷ XVI", corridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" }
    };

    const provList = (Array.isArray(provinces) && provinces.length)
      ? provinces
      : Object.keys(defaultProvinceCoords).map((id) => ({ id, regionId: defaultProvinceCoords[id].regionId, adminType: "" }));

    const provNodes = provList.map((p) => {
      const def = defaultProvinceCoords[p.id] || { x: 520, y: 340, regionId: p.regionId || "east", short: "省", cat: "province", capitalEra: "", corridor: "Trung Nguyên & Trung Du Trường Giang" };
      const g = geoMap && geoMap[p.id];
      const x = g ? g.cx : ((p.mapCoordinates && p.mapCoordinates.mapX) || def.x);
      const y = g ? g.cy : ((p.mapCoordinates && p.mapCoordinates.mapY) || def.y);
      const dPath = g ? g.d : "";
      const cat =
        (p.identity && p.identity.adminCategory) ||
        (/Trực thuộc|直辖市/.test(p.adminType || "") ? "municipality" : /Đặc khu|特别行政区/.test(p.adminType || "") ? "sar" : /tự trị|自治区/.test(p.adminType || "") ? "autonomous" : def.cat);
      const short = def.short || "省";
      const capitalEra = (p.mapCoordinates && p.mapCoordinates.historicalCapitalEra) || def.capitalEra;
      const corridor = (p.mapCoordinates && p.mapCoordinates.economicCorridor) || def.corridor;
      const nameVi = enMode ? (p.nameEn || p.nameVi || p.id.replace("prov-", "")) : (p.nameVi || p.id.replace("prov-", ""));
      const nameZh = p.nameZh || "";
      const regId = def.regionId || p.regionId || "east";
      let fillColor = regionColors[regId] || "#9F2929";
      if (mapMode === "admin") fillColor = adminColors[cat] || "#6A5A4D";
      else if (mapMode === "capitals") fillColor = /Kinh đô|Trường An|Lạc Dương|Khai Phong|Nam Kinh|Lâm An|Bắc Kinh|Thịnh Kinh|Tây Hạ|Cổ Thục|Nam Việt/.test(capitalEra) ? "#9A6700" : "#5D564E";
      else if (mapMode === "corridors") fillColor = corridorColors[corridor] || "#1F6E5C";
      return { id: p.id, nameVi, nameZh, short, x, y, dPath, cat, capitalEra, corridor, fillColor, regionId: regId, unesco: (p.unescoList || p.heritageSites || []).length };
    });

    const cityPins = [
      { id: "harbin", name: "Cáp Nhĩ Tân 哈尔滨", x: 775.3, y: 149.8, lx: 800, ly: 142, anchor: "start", leader: true },
      { id: "beijing", name: "Bắc Kinh 北京", x: 631.2, y: 243.6, lx: 678, ly: 224, anchor: "start", leader: true },
      { id: "tianjin", name: "Thiên Tân 天津", x: 642.2, y: 255.9, lx: 682, ly: 258, anchor: "start", leader: true },
      { id: "xian", name: "Tây An 西安", x: 526.2, y: 333.8, lx: 512, ly: 326, anchor: "end" },
      { id: "wuhan", name: "Vũ Hán 武汉", x: 601.5, y: 392.7, lx: 588, ly: 386, anchor: "end" },
      { id: "nanjing", name: "Nam Kinh 南京", x: 664.4, y: 369.4, lx: 648, ly: 356, anchor: "end", leader: true },
      { id: "shanghai", name: "Thượng Hải 上海", x: 702.5, y: 382.3, lx: 742, ly: 378, anchor: "start", leader: true },
      { id: "hangzhou", name: "Hàng Châu 杭州", x: 683.9, y: 397.4, lx: 736, ly: 414, anchor: "start", leader: true },
      { id: "chengdu", name: "Thành Đô 成都", x: 457.5, y: 391.4, lx: 444, ly: 384, anchor: "end" },
      { id: "chongqing", name: "Trùng Khánh 重庆", x: 491.7, y: 409.5, lx: 510, ly: 424, anchor: "start", leader: true },
      { id: "kunming", name: "Côn Minh 昆明", x: 438.3, y: 481.4, lx: 422, ly: 488, anchor: "end" },
      { id: "nanning-pingxiang", name: "Nam Ninh 南宁", x: 517.3, y: 516.9, lx: 500, ly: 512, anchor: "end" },
      { id: "guangzhou", name: "Quảng Châu 广州", x: 587.1, y: 511.9, lx: 572, ly: 506, anchor: "end" }
    ];

    // 12+ High-Speed Rail (12306) Corridors anchored to natural GeoJSON centroids + 3 Vietnam gates
    const hsrLines = [
      { id: "hsr-gba", d: "M 492 534 L 517.3 516.9 L 587.1 511.9 L 599.7 524.9", color: "#B8292F", label: enMode ? "Pingxiang → Nanning → Guangzhou → Shenzhen/HK (~4h)" : "Bằng Tường → Nam Ninh → Quảng Châu → Thâm Quyến/HK (~4h)" },
      { id: "hsr-sw", d: "M 492 534 L 517.3 516.9 L 494.6 456.7 L 491.7 409.5 L 457.5 391.4", color: "#1F6E5C", label: enMode ? "Pingxiang → Nanning → Guiyang → Chongqing → Chengdu (~6.5h)" : "Bằng Tường → Nam Ninh → Quý Dương → Trùng Khánh → Thành Đô (~6.5h)" },
      { id: "hsr-yn", d: "M 438 524 L 438.3 481.4 L 412 464 L 404 446", color: "#9A6700", label: enMode ? "Lao Cai/Hekou → Kunming → Dali → Lijiang (~4.5h)" : "Lào Cai/Hà Khẩu → Côn Minh → Đại Lý → Lệ Giang (~4.5h)" },
      { id: "hsr-mc", d: "M 516 544 L 518 532 L 517.3 516.9", color: "#9E2A2B", label: enMode ? "Mong Cai/Dongxing → Fangchenggang → Nanning (47 min)" : "Móng Cái/Đông Hưng → Phòng Thành Cảng → Nam Ninh (47 phút)" },
      { id: "hsr-jh", d: "M 631.2 243.6 L 642.2 255.9 L 639.5 295.1 L 664.4 369.4 L 702.5 382.3 L 683.9 397.4", color: "#3B4D7A", label: enMode ? "Beijing–Tianjin–Jinan–Nanjing–Shanghai–Hangzhou HSR (4.5h)" : "Cao tốc Kinh–Hộ: Bắc Kinh–Tế Nam–Nam Kinh–Thượng Hải–Hàng Châu (4.5h)" },
      { id: "hsr-jgj", d: "M 631.2 243.6 L 604.3 273.2 L 592.6 325.8 L 601.5 392.7 L 582.9 431.0 L 587.1 511.9 L 599.7 524.9", color: "#9F2929", label: enMode ? "Beijing–Shijiazhuang–Zhengzhou–Wuhan–Changsha–Guangzhou–HK (8h)" : "Cao tốc Kinh–Quảng–Cảng: Bắc Kinh–Vũ Hán–Trường Sa–Quảng Châu–HK (8h)" },
      { id: "hsr-silk", d: "M 592.6 325.8 L 526.2 333.8 L 453.9 305.0 L 425.2 296.1 L 315 245 L 225.8 181.4", color: "#7E5D43", label: enMode ? "Silk Road HSR: Zhengzhou–Xi'an–Lanzhou–Xining–Urumqi" : "Cao tốc Con đường Tơ lụa: Trịnh Châu–Tây An–Lan Châu–Ô Lỗ Mộc Tề" },
      { id: "hsr-yangtze", d: "M 702.5 382.3 L 643.5 372.2 L 601.5 392.7 L 491.7 409.5 L 457.5 391.4", color: "#2D5A4C", label: enMode ? "Yangtze River Corridor: Shanghai–Hefei–Wuhan–Chongqing–Chengdu" : "Cao tốc Duyên Giang: Thượng Hải–Hợp Phì–Vũ Hán–Trùng Khánh–Thành Đô" },
      { id: "hsr-ne", d: "M 631.2 243.6 L 730.1 213.2 L 756.7 179.8 L 775.3 149.8", color: "#3F5973", label: enMode ? "Beijing–Shenyang–Changchun–Harbin Northeast HSR (4.5h)" : "Cao tốc Đông Bắc: Bắc Kinh–Thẩm Dương–Trường Xuân–Cáp Nhĩ Tân (4.5h)" },
      { id: "hsr-coast", d: "M 683.9 397.4 L 672.0 464.7 L 640 498 L 587.1 511.9", color: "#A83A2F", label: enMode ? "Southeast Coastal HSR: Hangzhou–Fuzhou–Xiamen–Shenzhen" : "Cao tốc Duyên Hải Đông Nam: Hàng Châu–Phúc Châu–Hạ Môn–Thâm Quyến" },
      { id: "hsr-xizang", d: "M 457.5 391.4 L 425.2 296.1 L 350 350 L 275.3 407.4", color: "#8C6D46", label: enMode ? "Qinghai–Tibet & Sichuan–Tibet Plateau Corridor" : "Hành lang Cao nguyên Thanh–Tạng & Xuyên–Tạng" },
      { id: "hsr-huabao", d: "M 631.2 243.6 L 564.5 228.9 L 488.6 266.5 L 453.9 305.0", color: "#5D564E", label: enMode ? "North Steppe Rail: Beijing–Hohhot–Yinchuan–Lanzhou" : "Tuyến Thảo nguyên Hoa Bắc: Bắc Kinh–Hô Hòa Hạo Đặc–Ngân Xuyên–Lan Châu" }
    ];

    const vnGates = [
      { code: "VN-LK", label: enMode ? "Lao Cai / Hekou" : "Lào Cai · Hà Khẩu", x: 438, y: 530, lx: 405, ly: 548, anchor: "end" },
      { code: "VN-HN", label: enMode ? "Huu Nghi / Pingxiang" : "Hữu Nghị · Bằng Tường", x: 486, y: 540, lx: 486, ly: 562, anchor: "middle" },
      { code: "VN-MC", label: enMode ? "Mong Cai / Dongxing" : "Móng Cái · Đông Hưng", x: 516, y: 546, lx: 526, ly: 582, anchor: "start" }
    ];

    const smallBadges = [
      { id: "prov-beijing", label: "京 Bắc Kinh", x: 631.2, y: 243.6, bx: 754, by: 244 },
      { id: "prov-tianjin", label: "津 Thiên Tân", x: 642.2, y: 255.9, bx: 754, by: 268 },
      { id: "prov-shanghai", label: "沪 Thượng Hải", x: 702.5, y: 382.3, bx: 754, by: 382 }
    ];

    return `
      <div class="china-map-stage" data-map-stage="true">
        <div class="china-map-zoom-controls" aria-label="${enMode ? "Map zoom controls" : "Điều khiển thu phóng bản đồ"}">
          <button type="button" class="china-map-zoom-btn" data-action="map-zoom-in" title="${enMode ? "Zoom in" : "Phóng to"}">+</button>
          <button type="button" class="china-map-zoom-btn" data-action="map-zoom-out" title="${enMode ? "Zoom out" : "Thu nhỏ"}">−</button>
          <button type="button" class="china-map-zoom-btn" data-action="map-zoom-reset" title="${enMode ? "Reset view" : "Đặt lại"}">1×</button>
        </div>
        <div class="china-map-hover-tooltip" data-map-tooltip="true" hidden></div>
        <div class="china-map-viewport" data-map-viewport="true">
          <svg viewBox="10 10 905 615" data-map-svg="true" class="china-svg-map" style="width:100%;height:auto;max-height:640px;border:1px solid var(--hairline);background:var(--bg-paper);transform-origin:center center;transition:transform 0.2s ease;" role="img" aria-label="${enMode ? "Interactive natural-boundary vector map of 34 Chinese provincial units and 12306 rail corridors" : "Bản đồ địa lý tự nhiên tương tác 34 tỉnh thành Trung Quốc và mạng lưới đường sắt 12306"}">
            <rect x="10" y="10" width="905" height="615" fill="transparent" />

            <!-- Editorial Cartography Coordinate Grid -->
            <g opacity="0.16" stroke="var(--text-muted)" stroke-width="0.7" stroke-dasharray="3 3">
              <line x1="15" y1="150" x2="905" y2="150" />
              <line x1="15" y1="305" x2="905" y2="305" />
              <line x1="15" y1="460" x2="905" y2="460" />
              <line x1="230" y1="15" x2="230" y2="615" />
              <line x1="460" y1="15" x2="460" y2="615" />
              <line x1="690" y1="15" x2="690" y2="615" />
            </g>
            <g opacity="0.45" font-family="var(--font-mono)" font-size="8.5" fill="var(--text-muted)">
              <text x="18" y="146">40°N</text>
              <text x="18" y="301">30°N</text>
              <text x="18" y="456">23.5°N</text>
              <text x="234" y="26">90°E</text>
              <text x="464" y="26">105°E</text>
              <text x="694" y="26">120°E</text>
            </g>

            <!-- 34 Authentic Natural-Boundary GeoJSON Provincial Polygons -->
            <g class="map-provinces-polygons">
              ${provNodes
                .filter((pn) => pn.dPath)
                .map((pn) => {
                  const isSel = activeProvinceId === pn.id;
                  const inActiveRegion = activeRegionId && (pn.regionId === activeRegionId || (activeRegionId === "south" && pn.regionId === "central")) && mapMode === "regions";
                  const fillOp = isSel ? "0.78" : (inActiveRegion ? "0.52" : "0.28");
                  const strokeClr = isSel ? "#181715" : "var(--bg-paper)";
                  const strokeW = isSel ? "1.8" : "0.95";
                  return `<path
                    d="${pn.dPath}"
                    fill="${pn.fillColor}"
                    fill-opacity="${fillOp}"
                    fill-rule="evenodd"
                    stroke="${strokeClr}"
                    stroke-width="${strokeW}"
                    class="map-province-poly ${isSel ? "active" : ""}"
                    data-action="select-map-province"
                    data-id="${pn.id}"
                    data-tip-title="${pn.nameVi} (${pn.nameZh || pn.short})"
                    data-tip-meta="${pn.corridor}${pn.unesco ? " · UNESCO: " + pn.unesco : ""}"
                    style="cursor:pointer;transition:fill-opacity 0.15s ease;"
                  ><title>${pn.nameVi} (${pn.short}) · ${pn.corridor}</title></path>`;
                })
                .join("")}
            </g>

            <!-- Yellow River & Yangtze River Hairline Courses -->
            <path d="M 390 296 Q 485 245 555 280 T 646 286" fill="none" stroke="#9A6700" stroke-width="1.6" stroke-dasharray="5 3" opacity="0.58" style="pointer-events:none;" />
            <path d="M 365 405 Q 490 430 600 392 T 706 380" fill="none" stroke="#1F6E5C" stroke-width="1.6" opacity="0.58" style="pointer-events:none;" />

            <!-- Macro-Region Interactive Badges (shown in Regions layer) -->
            ${mapMode === "regions" ? macroLabels
              .map((r) => {
                const isActive = activeRegionId === r.id;
                const w = Math.max(106, r.label.length * 6.8 + 16);
                return `
                  <g data-action="select-region" data-id="${r.id}" style="cursor:pointer;">
                    <rect x="${r.lx - w / 2}" y="${r.ly - 11}" width="${w}" height="19" rx="0" fill="${isActive ? "#B8292F" : "#181715"}" fill-opacity="0.88" stroke="${isActive ? "#D7BA81" : "#7A7368"}" stroke-width="1" />
                    <text x="${r.lx}" y="${r.ly + 2}" text-anchor="middle" font-size="9.2" font-weight="700" letter-spacing="0.4" fill="#F7F4ED" style="pointer-events:none;font-family:var(--font-mono);">
                      ${r.label}
                    </text>
                  </g>
                `;
              })
              .join("") : ""}

            <!-- Active 12306 HSR Trunk Corridors -->
            ${hsrLines
              .filter((h) => activeHsr.includes(h.id))
              .map((h) => `
                <g style="pointer-events:none;">
                  <title>${h.label}</title>
                  <path d="${h.d}" fill="none" stroke="#FFFFFF" stroke-width="4.2" stroke-linecap="round" opacity="0.82" />
                  <path d="${h.d}" fill="none" stroke="${h.color}" stroke-width="2.4" stroke-dasharray="6 3" stroke-linecap="round" />
                </g>
              `)
              .join("")}

            ${mapMode === "capitals" ? `
              <g fill="none" stroke="#9A6700" stroke-width="1.9" stroke-dasharray="4 3" opacity="0.88" style="pointer-events:none;">
                <path d="M 526.2 333.8 L 592.6 325.8 L 631.2 243.6 L 664.4 369.4 L 683.9 397.4" />
              </g>
            ` : ""}

            <!-- Northern Vietnam 3 Cross-Border Gateways -->
            <g style="pointer-events:none;">
              <rect x="415" y="524" width="126" height="68" rx="0" fill="#1F6E5C" fill-opacity="0.1" stroke="#1F6E5C" stroke-width="0.9" stroke-dasharray="3 2" />
              ${vnGates
                .map((g) => `
                  <g>
                    <rect x="${g.x - 3.5}" y="${g.y - 3.5}" width="7" height="7" fill="#B8292F" stroke="#F7F4ED" stroke-width="1.1" />
                    <text x="${g.lx}" y="${g.ly}" text-anchor="${g.anchor}" font-size="8.2" font-weight="700" fill="var(--ink-primary)" style="paint-order:stroke;stroke:var(--bg-paper);stroke-width:2.5px;">${g.label}</text>
                  </g>
                `)
                .join("")}
            </g>

            <!-- Compact Province Centroid Labels (zero clutter: short Hanzi badges) -->
            ${provNodes
              .filter((pn) => pn.id !== "prov-hongkong" && pn.id !== "prov-macau")
              .map((pn) => {
                const isSel = activeProvinceId === pn.id;
                const rSz = isSel ? 9.5 : 7.5;
                return `
                  <g class="map-province-node ${isSel ? "active" : ""}" data-action="select-map-province" data-id="${pn.id}" data-tip-title="${pn.nameVi} (${pn.nameZh || pn.short})" data-tip-meta="${pn.corridor}" style="cursor:pointer;">
                    <circle cx="${pn.x}" cy="${pn.y}" r="${rSz}" fill="${isSel ? "#B8292F" : "#1A1918"}" fill-opacity="${isSel ? "1" : "0.78"}" stroke="${isSel ? "#D7BA81" : "#F7F4ED"}" stroke-width="${isSel ? "2" : "1"}" />
                    <text x="${pn.x}" y="${pn.y + 3}" text-anchor="middle" font-size="${isSel ? "8.8" : "7.6"}" font-weight="700" fill="#FFFFFF" style="pointer-events:none;font-family:'Noto Serif SC',serif;">${pn.short}</text>
                  </g>
                `;
              })
              .join("")}

            <!-- Leader Callouts for Dense Coast Municipalities & Hong Kong / Macau SARs -->
            ${smallBadges
              .map((sb) => {
                const isSel = activeProvinceId === sb.id;
                return `
                  <g data-action="select-map-province" data-id="${sb.id}" style="cursor:pointer;">
                    <line x1="${sb.x}" y1="${sb.y}" x2="${sb.bx}" y2="${sb.by}" stroke="${isSel ? "#B8292F" : "#757068"}" stroke-width="0.9" stroke-dasharray="2 2" />
                    <rect x="${sb.bx}" y="${sb.by - 8}" width="64" height="16" fill="${isSel ? "#B8292F" : "var(--bg-elevated)"}" stroke="${isSel ? "#D7BA81" : "var(--border-medium)"}" stroke-width="0.9" />
                    <text x="${sb.bx + 4}" y="${sb.by + 3}" font-size="8.2" font-weight="700" fill="${isSel ? "#FFFFFF" : "var(--ink-primary)"}" style="font-family:var(--font-sans);">${sb.label}</text>
                  </g>
                `;
              })
              .join("")}

            <!-- Hong Kong & Macau Pearl River Estuary Inset Boxes -->
            <g class="map-sar-insets">
              <line x1="599.7" y1="524.9" x2="660" y2="546" stroke="#9A6700" stroke-width="1" stroke-dasharray="2 2" />
              <g data-action="select-map-province" data-id="prov-hongkong" style="cursor:pointer;">
                <rect x="660" y="536" width="84" height="22" fill="${activeProvinceId === "prov-hongkong" ? "#B8292F" : "var(--bg-elevated)"}" stroke="#9A6700" stroke-width="1.2" />
                <text x="702" y="550" text-anchor="middle" font-size="8.6" font-weight="700" fill="${activeProvinceId === "prov-hongkong" ? "#FFFFFF" : "var(--ink-primary)"}">HK · 香港 SAR</text>
              </g>
              <line x1="590.9" y1="526.8" x2="660" y2="574" stroke="#9A6700" stroke-width="1" stroke-dasharray="2 2" />
              <g data-action="select-map-province" data-id="prov-macau" style="cursor:pointer;">
                <rect x="660" y="564" width="84" height="22" fill="${activeProvinceId === "prov-macau" ? "#B8292F" : "var(--bg-elevated)"}" stroke="#9A6700" stroke-width="1.2" />
                <text x="702" y="578" text-anchor="middle" font-size="8.6" font-weight="700" fill="${activeProvinceId === "prov-macau" ? "#FFFFFF" : "var(--ink-primary)"}">MO · 澳门 SAR</text>
              </g>
            </g>

            <!-- Priority City Labels (shown only when Regions mode & not cluttered) -->
            ${mapMode === "regions" ? cityPins
              .filter((c) => ["xian", "wuhan", "chengdu", "kunming", "guangzhou", "harbin"].includes(c.id))
              .map((c) => {
                const isActive = activeCityId === c.id;
                return `
                  <g class="map-city-pin ${isActive ? "active" : ""}" data-action="select-city" data-id="${c.id}" style="cursor:pointer;">
                    ${c.leader ? `<line x1="${c.x}" y1="${c.y}" x2="${c.lx}" y2="${c.ly - 2}" stroke="rgba(215, 186, 129, 0.72)" stroke-width="0.9" stroke-dasharray="2 2" />` : ""}
                    <text
                      x="${c.lx}"
                      y="${c.ly}"
                      text-anchor="${c.anchor}"
                      font-size="9.5"
                      font-weight="${isActive ? "700" : "600"}"
                      fill="var(--ink-primary)"
                      style="paint-order:stroke;stroke:var(--bg-paper);stroke-width:3px;stroke-linejoin:round;"
                    >${c.name}</text>
                  </g>
                `;
              })
              .join("") : ""}
          </svg>
        </div>
      </div>
    `;
  },

  renderCapitalMigrationMapSVG(enMode = false) {
    const capitals = [
      { id: "prov-shaanxi", name: enMode ? "Chang'an (Xi'an)" : "Trường An (Tây An)", zh: "长安", eras: "Chu · Tần · Hán · Đường", x: 526, y: 334, lx: 505, ly: 326, anchor: "end" },
      { id: "prov-henan", name: enMode ? "Luoyang & Kaifeng" : "Lạc Dương · Khai Phong", zh: "洛阳 · 开封", eras: "Đông Chu · Đông Hán · Bắc Tống", x: 593, y: 326, lx: 593, ly: 308, anchor: "middle" },
      { id: "prov-beijing", name: enMode ? "Beijing (Yanjing / Dadu)" : "Bắc Kinh (Đại Đô · Yên Kinh)", zh: "北京", eras: "Kim · Nguyên · Minh · Thanh", x: 631, y: 244, lx: 652, ly: 236, anchor: "start" },
      { id: "prov-jiangsu", name: enMode ? "Nanjing (Jiankang)" : "Nam Kinh (Kiến Khang)", zh: "南京", eras: "Lục Triều · Nam Đường · Sơ Minh", x: 664, y: 369, lx: 686, ly: 364, anchor: "start" },
      { id: "prov-zhejiang", name: enMode ? "Hangzhou (Lin'an)" : "Hàng Châu (Lâm An)", zh: "杭州", eras: "Ngô Việt · Nam Tống", x: 684, y: 397, lx: 704, ly: 412, anchor: "start" }
    ];
    return `
      <div class="capital-migration-box">
        <div class="editorial-kicker">${enMode ? "Historical Cartography · Axis of Capitals" : "Bản đồ Lịch sử · Trục Thiên đô Kinh đô Trung Hoa"}</div>
        <h3 style="margin:0.2rem 0 0.5rem;font-size:1.15rem;">${enMode ? "West-to-East & South-to-North Shift of Chinese Imperial Capitals (2070 BCE – Present)" : "Quỹ đạo Dịch chuyển Kinh đô từ Quan Trung ra Hoa Đông & Hoa Bắc"}</h3>
        <svg viewBox="360 190 420 265" style="width:100%;max-height:300px;border:1px solid var(--hairline);background:var(--bg-paper);" role="img" aria-label="${enMode ? "Imperial Capital Migration Map" : "Bản đồ dịch chuyển cố đô Trung Hoa"}">
          <!-- Yellow River & Yangtze & Grand Canal -->
          <path d="M 380 285 Q 490 250 560 295 T 650 285" fill="none" stroke="#9A6700" stroke-width="1.6" stroke-dasharray="5 3" opacity="0.65" />
          <path d="M 380 410 Q 500 425 605 390 T 720 382" fill="none" stroke="#1F6E5C" stroke-width="1.6" opacity="0.65" />
          <path d="M 631 244 Q 655 310 684 397" fill="none" stroke="#3B4D7A" stroke-width="1.4" stroke-dasharray="3 2" opacity="0.7" />
          <!-- Capital Migration Trajectory -->
          <path d="M 526 334 L 593 326 L 684 397 L 664 369 L 631 244" fill="none" stroke="#9E2A2B" stroke-width="2.2" />
          ${capitals.map((c, idx) => `
            <g data-action="open-province-detail" data-id="${c.id}" style="cursor:pointer;">
              <circle cx="${c.x}" cy="${c.y}" r="8" fill="#9E2A2B" stroke="#F7F4ED" stroke-width="1.8" />
              <text x="${c.x}" y="${c.y + 3}" text-anchor="middle" font-size="8.5" font-weight="700" fill="#FFFFFF">${idx + 1}</text>
              <text x="${c.lx}" y="${c.ly}" text-anchor="${c.anchor}" font-size="9.5" font-weight="700" fill="var(--ink-primary)">${c.name} <tspan fill="#9E2A2B">${c.zh}</tspan></text>
              <text x="${c.lx}" y="${c.ly + 11}" text-anchor="${c.anchor}" font-size="7.5" fill="var(--text-muted)">${c.eras}</text>
            </g>
          `).join("")}
        </svg>
      </div>
    `;
  },

  renderFiveElementsSVG(elements, enMode = false) {
    const coords = [
      { x: 200, y: 46 },  // Wood (top)
      { x: 342, y: 146 }, // Fire (right)
      { x: 288, y: 312 }, // Earth (bottom-right)
      { x: 112, y: 312 }, // Metal (bottom-left)
      { x: 58, y: 146 }   // Water (left)
    ];

    return `
      <svg viewBox="0 0 400 365" style="max-width:390px;width:100%;display:block;margin:0 auto;" role="img" aria-label="${enMode ? "Five Phases Generating and Restraining Diagram" : "Sơ đồ Ngũ Hành Tương Sinh Tương Khắc"}">
        <!-- Outer Generative Pentagon (Tương Sinh) -->
        <polygon
          points="${coords.map((c) => `${c.x},${c.y}`).join(" ")}"
          fill="none"
          stroke="#637F72"
          stroke-width="2"
        />
        <!-- Inner Controlling Star (Tương Khắc) -->
        <polygon
          points="${coords[0].x},${coords[0].y} ${coords[2].x},${coords[2].y} ${coords[4].x},${coords[4].y} ${coords[1].x},${coords[1].y} ${coords[3].x},${coords[3].y}"
          fill="none"
          stroke="#9F2929"
          stroke-width="1.4"
          stroke-dasharray="5 4"
        />
        ${elements
          .map((el, i) => {
            const c = coords[i];
            return `
              <g>
                <circle cx="${c.x}" cy="${c.y}" r="32" fill="${el.color}" stroke="var(--ivory-white)" stroke-width="2.5" />
                <text x="${c.x}" y="${c.y - 2}" text-anchor="middle" fill="#F7F4ED" font-family="'Noto Serif SC', serif" font-size="18" font-weight="700">${el.zh}</text>
                <text x="${c.x}" y="${c.y + 15}" text-anchor="middle" fill="#F7F4ED" font-size="10.5" font-weight="600">${enMode ? (el.nameEn || el.nameVi) : el.nameVi}</text>
              </g>
            `;
          })
          .join("")}
        <text x="200" y="352" text-anchor="middle" font-size="11" fill="var(--text-muted)">
          ${enMode ? "Jade pentagon: Generating Cycle (相生) • Dashed red star: Restraining Cycle (相克)" : "Viền ngoài xanh: Tương Sinh (相生) • Ngôi sao đỏ đứt nét: Tương Khắc (相克)"}
        </text>
      </svg>
    `;
  },

  renderKnowledgeGraphSVG(graph, selectedNodeId) {
    const nodeMap = {};
    graph.nodes.forEach((n) => (nodeMap[n.id] = n));

    return `
      <svg viewBox="0 0 1140 425" style="width:100%;height:auto;min-width:880px;" role="img" aria-label="Bản đồ Tri thức Tương tác Văn minh Trung Hoa">
        <defs>
          <marker id="kgArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#B99A62" />
          </marker>
        </defs>
        ${graph.edges
          .map((e) => {
            const a = nodeMap[e.from];
            const b = nodeMap[e.to];
            if (!a || !b) return "";
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const dist = Math.hypot(dx, dy) || 1;
            const x1 = a.x + (dx / dist) * 82;
            const y1 = a.y + (dy / dist) * 28;
            const x2 = b.x - (dx / dist) * 82;
            const y2 = b.y - (dy / dist) * 28;
            const mx = (x1 + x2) / 2;
            const my = (y1 + y2) / 2 - 6;
            return `
              <g>
                <line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#B99A62" stroke-width="1.6" marker-end="url(#kgArrow)" opacity="0.72" />
                <text x="${mx.toFixed(1)}" y="${my.toFixed(1)}" text-anchor="middle" font-size="10" font-weight="600" fill="var(--text-muted)">${e.label}</text>
              </g>
            `;
          })
          .join("")}
        ${graph.nodes
          .map((n) => {
            const active = selectedNodeId === n.id;
            return `
              <g class="kg-node ${active ? "active" : ""}" data-action="select-kg-node" data-id="${n.id}" transform="translate(${n.x - 86}, ${n.y - 29})">
                <rect width="172" height="58" rx="9" />
                <text x="86" y="24" text-anchor="middle" font-size="11.2" font-weight="700" fill="var(--text-primary)">${n.label}</text>
                <text x="86" y="43" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="11.5" fill="var(--imperial-red-text, var(--imperial-red))">${n.zh}</text>
              </g>
            `;
          })
          .join("")}
      </svg>
    `;
  },

  renderArtifactVisualHTML(artifact, isLarge = false) {
    if (!artifact) return "";
    if (artifact.imageUrl) {
      const handscrollKeys = ["qingming-scroll", "hanshi-tie", "qianli-jiangshan", "lantingji-xu"];
      const isScroll = !isLarge && handscrollKeys.some((k) => artifact.imageUrl.includes(k));
      return `
        <div class="museum-artwork-frame ${isLarge ? "museum-artwork-large" : ""} ${isScroll ? "is-handscroll" : ""}">
          <img
            src="${artifact.imageUrl}"
            alt="${artifact.nameVi} – ${artifact.nameZh}"
            class="museum-artwork-img"
            loading="lazy"
            onload="if(${isLarge ? "false" : "true"} && this.naturalWidth / Math.max(1, this.naturalHeight) >= 2.2) { this.parentElement && this.parentElement.classList.add('is-handscroll'); }"
          />
          ${isLarge ? `<span class="museum-artwork-seal">${(artifact.nameZh || "馆藏").slice(0, 4)}</span>` : ""}
        </div>
      `;
    }

    const plateMap = {
      "qianli-jiangshan": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Phác thảo bố cục Thiên Lý Giang Sơn Đồ">
          <defs>
            <linearGradient id="qjBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E7DEC9"/><stop offset="100%" stop-color="#D8CCAE"/></linearGradient>
            <linearGradient id="qjBlue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1E5F6E"/><stop offset="70%" stop-color="#4A8B7A"/><stop offset="100%" stop-color="#C7B68A"/></linearGradient>
          </defs>
          <rect width="600" height="360" fill="url(#qjBg)"/>
          <path d="M0 245 Q90 120 185 180 T360 110 T530 165 L600 140 L600 360 L0 360Z" fill="#637F72" opacity="0.35"/>
          <path d="M0 275 Q110 155 215 215 T410 145 L600 215 L600 360 L0 360Z" fill="url(#qjBlue)"/>
          <path d="M0 295 Q160 275 300 300 T600 285 L600 360 L0 360Z" fill="#9DB6AD" opacity="0.72"/>
          <path d="M210 302 Q300 286 385 305" fill="none" stroke="#8C6239" stroke-width="4"/>
          <text x="40" y="54" font-family="'Noto Serif SC', serif" font-size="20" fill="#202020" opacity="0.82">千里江山 • 青绿山水</text>
        </svg>`,
      "qingming-scroll": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Phác thảo Thanh Minh Thượng Hà Đồ">
          <rect width="600" height="360" fill="#EAE0C8"/>
          <path d="M0 230 Q180 265 340 220 T600 245 L600 325 Q360 290 190 325 T0 300Z" fill="#B8C2BA" opacity="0.85"/>
          <path d="M205 245 Q300 170 395 245" fill="none" stroke="#7A4B2A" stroke-width="11"/>
          <path d="M210 232 Q300 162 390 232" fill="none" stroke="#9F2929" stroke-width="2.5" stroke-dasharray="6 4"/>
          <rect x="65" y="135" width="76" height="58" fill="#D4C5A1" stroke="#4A4236" stroke-width="2"/>
          <polygon points="55,135 103,104 151,135" fill="#4A4236"/>
          <rect x="435" y="128" width="95" height="62" fill="#D4C5A1" stroke="#4A4236" stroke-width="2"/>
          <polygon points="424,128 482,95 540,128" fill="#6D3229"/>
          <ellipse cx="145" cy="278" rx="44" ry="11" fill="#5D4837"/>
          <text x="38" y="48" font-family="'Noto Serif SC', serif" font-size="20" fill="#202020">清明上河 • 汴京虹桥</text>
        </svg>`,
      "lantingji-xu": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Mô phỏng bản giấy thư pháp Lan Đình Tập Tự">
          <rect width="600" height="360" fill="#EFE6CF"/>
          <rect x="24" y="22" width="552" height="316" fill="none" stroke="#B99A62" stroke-width="1.5"/>
          <g font-family="'Noto Serif SC', serif" font-size="22" fill="#202020" opacity="0.85">
            <text x="510" y="68">永</text><text x="510" y="102">和</text><text x="510" y="136">九</text><text x="510" y="170">年</text><text x="510" y="204">岁</text><text x="510" y="238">在</text><text x="510" y="272">癸</text><text x="510" y="306">丑</text>
            <text x="455" y="68">暮</text><text x="455" y="102">春</text><text x="455" y="136">之</text><text x="455" y="170">初</text><text x="455" y="204">会</text><text x="455" y="238">于</text><text x="455" y="272">会</text><text x="455" y="306">稽</text>
            <text x="400" y="68">山</text><text x="400" y="102">阴</text><text x="400" y="136">之</text><text x="400" y="170">兰</text><text x="400" y="204">亭</text><text x="400" y="238">修</text><text x="400" y="272">禊</text><text x="400" y="306">事</text>
            <text x="345" y="68">群</text><text x="345" y="102">贤</text><text x="345" y="136">毕</text><text x="345" y="170">至</text><text x="345" y="204">少</text><text x="345" y="238">长</text><text x="345" y="272">咸</text><text x="345" y="306">集</text>
          </g>
          <rect x="64" y="218" width="42" height="58" rx="3" fill="#9F2929" opacity="0.9"/>
          <text x="85" y="254" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="16" fill="#F7F4ED">神龙</text>
          <text x="64" y="72" font-family="'Noto Serif SC', serif" font-size="26" fill="#9F2929">兰亭集序</text>
          <text x="64" y="102" font-size="13" fill="#4A4843">Vương Hi Chi (353 SCN) • Hành thư</text>
        </svg>`,
      "hanshi-tie": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Mô phỏng thủ bản Hàn Thực Thiếp của Tô Thức">
          <rect width="600" height="360" fill="#EDE4CE"/>
          <g font-family="'Noto Serif SC', serif" fill="#1F1E1C">
            <text x="495" y="74" font-size="24">自</text><text x="495" y="114" font-size="25">我</text><text x="495" y="156" font-size="24">来</text><text x="495" y="198" font-size="27">黄</text><text x="495" y="242" font-size="25">州</text>
            <text x="425" y="84" font-size="26">已</text><text x="425" y="128" font-size="28">过</text><text x="425" y="176" font-size="26">三</text><text x="425" y="226" font-size="30">寒</text><text x="425" y="276" font-size="28">食</text>
            <text x="350" y="80" font-size="27">年</text><text x="350" y="132" font-size="29">年</text><text x="350" y="184" font-size="28">欲</text><text x="350" y="236" font-size="31">惜</text><text x="350" y="290" font-size="29">春</text>
            <text x="272" y="88" font-size="30">春</text><text x="272" y="144" font-size="32">去</text><text x="272" y="204" font-size="29">不</text><text x="272" y="262" font-size="33">容</text><text x="272" y="314" font-size="31">惜</text>
          </g>
          <rect x="70" y="230" width="38" height="38" rx="3" fill="#B63D32"/>
          <text x="89" y="255" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="14" fill="#F7F4ED">东坡</text>
          <text x="68" y="80" font-family="'Noto Serif SC', serif" font-size="26" fill="#202020">寒食帖</text>
          <text x="68" y="110" font-size="13" fill="#4A4843">Tô Thức (1082 SCN) • Thượng Ý Hành thư</text>
        </svg>`,
      "david-vases": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Cặp bình gốm Thanh Hoa Vân Long đời Nguyên">
          <rect width="600" height="360" fill="#F1ECE0"/>
          ${[215, 385].map((cx) => `
            <g transform="translate(${cx}, 45)">
              <path d="M-26 12 L26 12 L19 64 C48 92 52 150 36 205 L28 262 L-28 262 L-36 205 C-52 150 -48 92 -19 64 Z" fill="#FCFDFC" stroke="#224C8A" stroke-width="3"/>
              <path d="M-20 40 C-38 42 -36 66 -20 64 M20 40 C38 42 36 66 20 64" fill="none" stroke="#224C8A" stroke-width="3.5"/>
              <path d="M-32 125 Q0 105 32 125 Q0 148 -32 125 Z" fill="#224C8A" opacity="0.22"/>
              <path d="M-24 115 C-5 98 18 140 28 118" fill="none" stroke="#1E447D" stroke-width="3"/>
              <line x1="-26" y1="220" x2="26" y2="220" stroke="#224C8A" stroke-width="2"/>
              <line x1="-19" y1="64" x2="19" y2="64" stroke="#224C8A" stroke-width="2"/>
            </g>
          `).join("")}
          <text x="300" y="336" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="16" fill="#1E447D">元代青花云龙象耳瓶 (1351 CE)</text>
        </svg>`,
      "chenghua-cup": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Chén Kê Cang Đấu Thái Thành Hóa">
          <rect width="600" height="360" fill="#F2EDE1"/>
          <ellipse cx="300" cy="274" rx="115" ry="18" fill="#DFD7C5"/>
          <path d="M160 120 Q168 250 235 266 L365 266 Q432 250 440 120 Z" fill="#FFFFFF" stroke="#2A4D7C" stroke-width="2.5"/>
          <ellipse cx="300" cy="120" rx="140" ry="24" fill="#FAF8F3" stroke="#2A4D7C" stroke-width="2.5"/>
          <circle cx="268" cy="195" r="14" fill="#B63D32" opacity="0.88"/>
          <circle cx="318" cy="202" r="11" fill="#D9A441" opacity="0.9"/>
          <path d="M350 185 Q372 162 390 198" fill="none" stroke="#637F72" stroke-width="3.5"/>
          <text x="300" y="318" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="17" fill="#202020">明成化斗彩鸡缸杯</text>
        </svg>`,
      "yongle-dadian": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Sách cổ Vĩnh Lạc Đại Điển kẻ khung chu sa">
          <rect width="600" height="360" fill="#E6DEC8"/>
          <rect x="65" y="36" width="470" height="288" fill="#FBF5E6" stroke="#9F2929" stroke-width="4"/>
          <rect x="74" y="45" width="452" height="270" fill="none" stroke="#9F2929" stroke-width="1.2"/>
          <line x1="300" y1="45" x2="300" y2="315" stroke="#9F2929" stroke-width="2.2"/>
          ${[125, 170, 215, 260, 345, 390, 435, 480].map((x) => `<line x1="${x}" y1="45" x2="${x}" y2="315" stroke="#B63D32" stroke-width="0.9" opacity="0.65"/>`).join("")}
          <text x="300" y="182" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="24" fill="#202020" letter-spacing="6">永乐大典</text>
          <text x="300" y="216" text-anchor="middle" font-size="13" fill="#9F2929">Bản Gia Tĩnh • Chu sa kẻ cột cổ tịch</text>
        </svg>`,
      "daming-hunyitu": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Bản đồ cổ Đại Minh Hỗn Nhất Đồ">
          <rect width="600" height="360" fill="#DFD4B8"/>
          <rect x="28" y="24" width="544" height="312" fill="none" stroke="#8C6B43" stroke-width="2"/>
          <path d="M120 110 Q210 60 325 85 Q460 95 495 185 Q475 280 355 275 Q225 305 145 255 Q85 205 120 110 Z" fill="#C9BA94" stroke="#5A462C" stroke-width="2"/>
          <path d="M235 165 Q300 135 375 160 T445 170" fill="none" stroke="#9F2929" stroke-width="2" stroke-dasharray="4 3"/>
          <path d="M210 210 Q310 225 415 200" fill="none" stroke="#2D5E6B" stroke-width="2.5"/>
          <text x="320" y="185" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="22" fill="#202020">大明混一图</text>
          <text x="320" y="210" text-anchor="middle" font-size="12" fill="#4A4843">Bản đồ Á–Âu–Phi năm Hồng Vũ 1389 (Không dùng cho phân định hành chính hiện đại)</text>
        </svg>`,
      "taihe-dian": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Kiến trúc Thái Hòa Điện Tử Cấm Thành">
          <rect width="600" height="360" fill="#ECE6D7"/>
          <rect x="90" y="256" width="420" height="18" fill="#E3DDD0" stroke="#9C9588"/>
          <rect x="65" y="274" width="470" height="22" fill="#DBD3C2" stroke="#9C9588"/>
          <rect x="40" y="296" width="520" height="26" fill="#CFC6B3" stroke="#8B8374"/>
          <rect x="135" y="186" width="330" height="70" fill="#8C2424"/>
          <polygon points="105,186 155,142 445,142 495,186" fill="#C9963B" stroke="#8C6220" stroke-width="2"/>
          <polygon points="145,144 195,96 405,96 455,144" fill="#D9A84E" stroke="#8C6220" stroke-width="2"/>
          <line x1="192" y1="94" x2="408" y2="94" stroke="#8C6220" stroke-width="5"/>
          <text x="300" y="64" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="20" fill="#202020">紫禁城太和殿 • 11 gian Trùng diêm Vũ điện</text>
        </svg>`,
      "houmuwu-ding": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Đỉnh đồng thanh Hậu Mẫu Mậu đời Thương">
          <rect width="600" height="360" fill="#E7E2D4"/>
          <rect x="200" y="110" width="200" height="105" rx="6" fill="#4F635B" stroke="#2C3934" stroke-width="3"/>
          <rect x="215" y="128" width="170" height="68" fill="none" stroke="#89A195" stroke-width="1.5" stroke-dasharray="6 3"/>
          <path d="M215 62 L245 62 L245 110 M355 110 L355 62 L385 62" fill="none" stroke="#4F635B" stroke-width="14"/>
          <rect x="220" y="215" width="24" height="90" rx="8" fill="#4F635B"/>
          <rect x="356" y="215" width="24" height="90" rx="8" fill="#4F635B"/>
          <rect x="268" y="215" width="20" height="82" rx="7" fill="#3B4A44"/>
          <rect x="312" y="215" width="20" height="82" rx="7" fill="#3B4A44"/>
          <text x="300" y="168" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="22" fill="#E7E2D4">后母戊鼎</text>
          <text x="300" y="335" text-anchor="middle" font-size="13" fill="#4A4843">Đồng thanh hậu kỳ Thương (~832,84 kg)</text>
        </svg>`,
      "liangzhu-yucong": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Ngọc Tông Vương Văn hóa Lương Chử">
          <rect width="600" height="360" fill="#EAE6DC"/>
          <rect x="195" y="90" width="210" height="175" rx="8" fill="#9FB29E" stroke="#536854" stroke-width="3"/>
          <ellipse cx="300" cy="90" rx="70" ry="20" fill="#C7D3C5" stroke="#536854" stroke-width="2.5"/>
          <ellipse cx="300" cy="90" rx="34" ry="10" fill="#6F8270"/>
          <line x1="255" y1="98" x2="255" y2="265" stroke="#536854" stroke-width="2" opacity="0.65"/>
          <line x1="345" y1="98" x2="345" y2="265" stroke="#536854" stroke-width="2" opacity="0.65"/>
          <line x1="195" y1="178" x2="405" y2="178" stroke="#536854" stroke-width="2" opacity="0.65"/>
          <text x="300" y="308" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">良渚玉琮王 (~3300–2300 TCN)</text>
        </svg>`,
      "zheng-he-navigation-chart": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Hải đồ Trịnh Hòa và kỹ thuật Quá dương khiên tinh">
          <rect width="600" height="360" fill="#ECE3CE"/>
          <rect x="34" y="28" width="532" height="252" fill="#F6F0E2" stroke="#8C734B" stroke-width="2"/>
          <path d="M50 185 Q125 145 190 170 T330 155 T480 180 L550 165" fill="none" stroke="#637F72" stroke-width="2.5" stroke-dasharray="6,5"/>
          <path d="M70 85 Q140 60 220 95 L250 120 Q160 115 95 130 Z" fill="#DDD2B8" stroke="#7A6543" stroke-width="1.5"/>
          <path d="M355 75 Q435 55 510 90 L495 132 Q425 118 370 128 Z" fill="#DDD2B8" stroke="#7A6543" stroke-width="1.5"/>
          <circle cx="155" cy="210" r="36" fill="none" stroke="#9F2929" stroke-width="1.5" stroke-dasharray="4,3"/>
          <circle cx="155" cy="210" r="18" fill="none" stroke="#B99A62" stroke-width="1.5"/>
          <line x1="155" y1="166" x2="155" y2="254" stroke="#9F2929" stroke-width="1.3"/>
          <line x1="111" y1="210" x2="199" y2="210" stroke="#9F2929" stroke-width="1.3"/>
          <polygon points="155,172 160,210 155,204 150,210" fill="#9F2929"/>
          <path d="M295 215 L395 215 L380 238 L308 238 Z" fill="#5D3A24" stroke="#202020" stroke-width="1.5"/>
          <line x1="330" y1="215" x2="330" y2="148" stroke="#202020" stroke-width="2.5"/>
          <line x1="364" y1="215" x2="364" y2="158" stroke="#202020" stroke-width="2.2"/>
          <path d="M330 152 Q358 170 330 202 Z" fill="#FBF8F1" stroke="#8C734B" stroke-width="1.5"/>
          <path d="M364 162 Q388 176 364 202 Z" fill="#FBF8F1" stroke="#8C734B" stroke-width="1.5"/>
          <circle cx="485" cy="70" r="4" fill="#9F2929"/>
          <line x1="485" y1="70" x2="395" y2="215" stroke="#9F2929" stroke-width="1.2" stroke-dasharray="3,4" opacity="0.7"/>
          <text x="485" y="56" text-anchor="middle" font-family="serif" font-size="11" fill="#9F2929">过洋牵星 · 4指</text>
          <text x="300" y="314" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">《郑和航海图》(Thế kỷ XV · Hải đồ Đông – Tây Dương)</text>
        </svg>`,
      "acupuncture-bronze-figure": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Thiên Thánh Châm Cứu Đồng Nhân thời Bắc Tống">
          <rect width="600" height="360" fill="#F2EDE1"/>
          <rect x="235" y="254" width="130" height="22" rx="4" fill="#5F5038" stroke="#202020" stroke-width="1.5"/>
          <circle cx="300" cy="86" r="26" fill="#B99A62" stroke="#5A482A" stroke-width="2.2"/>
          <path d="M262 120 Q300 112 338 120 L348 192 L326 254 L305 254 L300 198 L295 254 L274 254 L252 192 Z" fill="#C4A56B" stroke="#5A482A" stroke-width="2.2"/>
          <path d="M262 124 L218 178 L230 188 L264 144" fill="#B99A62" stroke="#5A482A" stroke-width="2"/>
          <path d="M338 124 L382 178 L370 188 L336 144" fill="#B99A62" stroke="#5A482A" stroke-width="2"/>
          <line x1="300" y1="62" x2="300" y2="205" stroke="#9F2929" stroke-width="2" stroke-dasharray="4,3"/>
          <path d="M282 122 L282 250 M318 122 L318 250" fill="none" stroke="#637F72" stroke-width="1.8" stroke-dasharray="3,3"/>
          <circle cx="300" cy="148" r="3.5" fill="#9F2929"/>
          <circle cx="300" cy="176" r="3.5" fill="#9F2929"/>
          <circle cx="282" cy="142" r="3.2" fill="#202020"/>
          <circle cx="318" cy="142" r="3.2" fill="#202020"/>
          <circle cx="228" cy="175" r="3.5" fill="#9F2929"/>
          <circle cx="372" cy="175" r="3.5" fill="#9F2929"/>
          <text x="145" y="135" font-family="serif" font-size="13" fill="#5A482A">任脉 · 督脉</text>
          <text x="455" y="135" font-family="serif" font-size="13" fill="#5A482A">十二经脉 354 穴</text>
          <text x="300" y="314" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">天圣针灸铜人 (Bắc Tống 1027 · Vương Duy Nhất)</text>
        </svg>`,
      "han-shipan-astrolabe": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Lục Nhâm Thức Bàn thời Tây Hán">
          <rect width="600" height="360" fill="#EAE3D2"/>
          <rect x="180" y="42" width="240" height="236" rx="10" fill="#3B2B22" stroke="#B99A62" stroke-width="3"/>
          <rect x="194" y="56" width="212" height="208" fill="none" stroke="#B99A62" stroke-width="1.2" opacity="0.8"/>
          <circle cx="300" cy="160" r="88" fill="#241B17" stroke="#B99A62" stroke-width="2.5"/>
          <circle cx="300" cy="160" r="56" fill="none" stroke="#9F2929" stroke-width="1.5" stroke-dasharray="4,3"/>
          <polyline points="274,142 292,140 308,148 320,162 312,178 294,175 292,158" fill="none" stroke="#E5C88B" stroke-width="2"/>
          <circle cx="274" cy="142" r="3" fill="#E5C88B"/>
          <circle cx="292" cy="140" r="3" fill="#E5C88B"/>
          <circle cx="308" cy="148" r="3" fill="#E5C88B"/>
          <circle cx="320" cy="162" r="3" fill="#E5C88B"/>
          <circle cx="312" cy="178" r="3" fill="#E5C88B"/>
          <circle cx="294" cy="175" r="3" fill="#E5C88B"/>
          <circle cx="292" cy="158" r="3" fill="#E5C88B"/>
          <text x="300" y="92" text-anchor="middle" font-family="serif" font-size="12" fill="#E5C88B">天盘 · 二十八宿</text>
          <text x="206" y="74" font-family="serif" font-size="12" fill="#D4B475">巽</text>
          <text x="382" y="74" font-family="serif" font-size="12" fill="#D4B475">坤</text>
          <text x="206" y="256" font-family="serif" font-size="12" fill="#D4B475">艮</text>
          <text x="382" y="256" font-family="serif" font-size="12" fill="#D4B475">乾</text>
          <text x="300" y="314" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">汉代六壬栻盘 (Tây Hán · Thiên viên Địa phương)</text>
        </svg>`,
      "chu-dau-blue-white-ceramic": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Bình gốm Hoa lam Chu Đậu Hải Dương thế kỷ XV">
          <rect width="600" height="360" fill="#ECE9E0"/>
          <ellipse cx="300" cy="264" rx="78" ry="12" fill="#D3CEC0"/>
          <path d="M278 58 L322 58 L314 96 C348 118 366 154 352 198 C340 232 328 248 328 262 L272 262 C272 248 260 232 248 198 C234 154 252 118 286 96 Z" fill="#F9F7F1" stroke="#264B7A" stroke-width="2.5"/>
          <ellipse cx="300" cy="58" rx="22" ry="6" fill="#E5ECF5" stroke="#264B7A" stroke-width="2"/>
          <path d="M276 112 Q300 122 324 112" fill="none" stroke="#264B7A" stroke-width="2"/>
          <path d="M250 155 Q300 170 350 155" fill="none" stroke="#264B7A" stroke-width="2"/>
          <path d="M258 205 Q300 220 342 205" fill="none" stroke="#264B7A" stroke-width="2"/>
          <circle cx="300" cy="182" r="16" fill="none" stroke="#264B7A" stroke-width="2"/>
          <circle cx="300" cy="182" r="6" fill="#264B7A" opacity="0.85"/>
          <path d="M278 182 Q290 165 300 182 Q310 199 322 182" fill="none" stroke="#264B7A" stroke-width="1.8"/>
          <path d="M276 238 L286 226 L296 238 L306 226 L316 238 L324 228" fill="none" stroke="#264B7A" stroke-width="1.8"/>
          <text x="300" y="314" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">越南海阳朱豆青花瓷 (Chu Đậu · Thế kỷ XV)</text>
        </svg>`,
      "ma-dap-phi-yen": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Tượng đồng Mã Đạp Phi Yến thời Đông Hán">
          <rect width="600" height="360" fill="#EAE6DC"/>
          <ellipse cx="305" cy="276" rx="110" ry="12" fill="#CFC9BA"/>
          <path d="M210 250 Q285 262 390 245 Q335 236 270 244 Z" fill="#4B665D"/>
          <path d="M298 250 L306 202 L262 178 Q225 185 198 164 Q188 148 212 135 L285 130 Q332 126 368 96 Q388 78 408 92 Q415 102 398 122 L382 142 Q370 165 344 176 L355 212 L338 228 L330 198 L298 250 Z" fill="#3E5C52" stroke="#1E312A" stroke-width="2.5"/>
          <path d="M200 160 L152 145 L178 168 Z" fill="#3E5C52" stroke="#1E312A" stroke-width="1.8"/>
          <path d="M366 108 L402 106 L385 130" fill="none" stroke="#D7BA81" stroke-width="1.5"/>
          <text x="300" y="324" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">东汉 · 马踏飞燕（武威雷台汉墓）</text>
        </svg>`,
      "mao-gong-ding": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Mao Công Đỉnh khắc 497 chữ Kim văn Tây Chu">
          <rect width="600" height="360" fill="#EAE6DC"/>
          <ellipse cx="300" cy="268" rx="95" ry="12" fill="#CFC8B8"/>
          <rect x="208" y="88" width="18" height="36" rx="6" fill="none" stroke="#45564C" stroke-width="7"/>
          <rect x="374" y="88" width="18" height="36" rx="6" fill="none" stroke="#45564C" stroke-width="7"/>
          <path d="M196 118 Q300 132 404 118 L394 185 Q388 226 300 232 Q212 226 206 185 Z" fill="#4E6055" stroke="#222F27" stroke-width="3"/>
          <path d="M236 220 L226 266 M300 228 L300 272 M364 220 L374 266" stroke="#36463D" stroke-width="11" stroke-linecap="round"/>
          <path d="M210 142 Q300 156 390 142" fill="none" stroke="#D5BA82" stroke-width="2.2" stroke-dasharray="10 6"/>
          <text x="300" y="190" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="14" fill="#EFE8D8" opacity="0.88">铭文 497 字 · 唯周王命</text>
          <text x="300" y="324" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">西周 · 毛公鼎（台北故宫）</text>
        </svg>`,
      "ru-yao-tianqing": `
        <svg viewBox="0 0 600 360" class="museum-artwork-svg" role="img" aria-label="Đĩa gốm Nhữ Diêu Bắc Tống men xanh thiên thanh">
          <rect width="600" height="360" fill="#ECEAE3"/>
          <ellipse cx="300" cy="252" rx="115" ry="14" fill="#D4D1C7"/>
          <ellipse cx="300" cy="176" rx="146" ry="52" fill="#9BB9BE" stroke="#64838A" stroke-width="2.5"/>
          <ellipse cx="300" cy="174" rx="126" ry="40" fill="#ACC8CC" stroke="#7E9BA1" stroke-width="1.5"/>
          <path d="M180 185 Q300 256 420 185 Q395 232 355 244 L245 244 Q205 232 180 185 Z" fill="#89A9AF" stroke="#5B787F" stroke-width="2"/>
          <path d="M250 165 L285 178 L315 162 M268 188 L308 195 L335 175" fill="none" stroke="#D9E7E9" stroke-width="1" opacity="0.7"/>
          <text x="300" y="324" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">北宋 · 汝窑天青釉盘（雨过天青）</text>
        </svg>`,
      "quan-yao-vase": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Nam Tống Quan Diêu Huyền Văn Bình">
          <rect width="600" height="360" fill="#F6F2EA"/>
          <path d="M250,68 L266,68 L268,120 C248,144 218,176 218,224 C218,274 246,300 300,300 C354,300 382,274 382,224 C382,176 352,144 332,120 L334,68 L350,68 L344,74 L334,74 L334,116 C358,142 388,176 388,224 C388,280 356,306 300,306 C244,306 212,280 212,224 C212,176 242,142 266,116 L266,74 L256,74 Z" fill="#9EB4AD" stroke="#3E3631" stroke-width="2"/>
          <path d="M266,68 L334,68" stroke="#5B3A42" stroke-width="5" stroke-linecap="round"/>
          <path d="M258,300 L342,300" stroke="#362E2B" stroke-width="6"/>
          <line x1="256" y1="92" x2="344" y2="92" stroke="#6E847C" stroke-width="2"/>
          <line x1="252" y1="108" x2="348" y2="108" stroke="#6E847C" stroke-width="2"/>
          <path d="M242,188 L272,216 L254,248 M332,176 L310,208 L342,240" fill="none" stroke="#4D423A" stroke-width="1.2" opacity="0.72"/>
          <path d="M276,178 L294,205 L280,236" fill="none" stroke="#B68B4C" stroke-width="1" opacity="0.8"/>
          <text x="300" y="336" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">南宋 · 官窑粉青釉弦纹瓶（紫口铁足）</text>
        </svg>`,
      "ge-yao-incense-burner": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Tống Ca Diêu Song Nhĩ Lư Kim Ti Thiết Tuyến">
          <rect width="600" height="360" fill="#F4EFE6"/>
          <path d="M210,164 C180,160 174,206 208,218" fill="none" stroke="#857E70" stroke-width="12" stroke-linecap="round"/>
          <path d="M390,164 C420,160 426,206 392,218" fill="none" stroke="#857E70" stroke-width="12" stroke-linecap="round"/>
          <path d="M222,148 L378,148 L392,196 C394,246 356,276 300,276 C244,276 206,246 208,196 Z" fill="#CEC5B0" stroke="#463E36" stroke-width="2"/>
          <path d="M244,276 L356,276 L364,294 L236,294 Z" fill="#463E36"/>
          <path d="M246,162 L276,202 L262,252 M304,154 L288,198 L322,258 M346,166 L366,214 L336,246" fill="none" stroke="#2D2621" stroke-width="1.6" opacity="0.85"/>
          <path d="M234,192 L268,184 L292,226 L342,202" fill="none" stroke="#B47C34" stroke-width="1" opacity="0.85"/>
          <text x="300" y="330" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">宋 · 哥窑米黄釉鱼耳炉（金丝铁线）</text>
        </svg>`,
      "ding-yao-bowl": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Bắc Tống Định Diêu Bạch Từ Bát Hoa">
          <rect width="600" height="360" fill="#F7F4EE"/>
          <path d="M168,128 C184,230 232,272 300,272 C368,272 416,230 432,128 Z" fill="#FAF6EB" stroke="#8B7E68" stroke-width="2"/>
          <path d="M168,128 L432,128" stroke="#B79246" stroke-width="5"/>
          <path d="M254,272 L346,272 L340,286 L260,286 Z" fill="#EFE8D6" stroke="#8B7E68" stroke-width="1.5"/>
          <path d="M220,164 C244,194 274,204 300,174 C326,204 356,194 380,164" fill="none" stroke="#C5B594" stroke-width="2"/>
          <circle cx="300" cy="206" r="24" fill="none" stroke="#D3C4A4" stroke-width="1.5"/>
          <path d="M286,206 Q300,190 314,206 Q300,222 286,206 Z" fill="none" stroke="#C5B594" stroke-width="1.5"/>
          <text x="300" y="328" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">北宋 · 定窑白釉刻花萱草碗（覆烧镶金口）</text>
        </svg>`,
      "jun-yao-bowl": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Bắc Tống Quân Diêu Tử Hồng Men Bát">
          <rect width="600" height="360" fill="#F6F2EA"/>
          <defs>
            <linearGradient id="junGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#8A3B56"/>
              <stop offset="52%" stop-color="#7B93B4"/>
              <stop offset="100%" stop-color="#4A749A"/>
            </linearGradient>
          </defs>
          <path d="M180,126 C188,224 236,272 300,272 C364,272 412,224 420,126 Z" fill="url(#junGrad)" stroke="#3D322E" stroke-width="2"/>
          <ellipse cx="300" cy="126" rx="120" ry="18" fill="#829BB8" stroke="#53323B" stroke-width="2"/>
          <path d="M236,154 Q266,172 248,208 M342,146 Q326,184 354,218" fill="none" stroke="#EFE8DC" stroke-width="1.4" opacity="0.55"/>
          <path d="M256,272 L344,272 L338,286 L262,286 Z" fill="#6F5648"/>
          <text x="300" y="328" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">北宋 · 钧窑玫瑰紫釉花盆（入窑一色，出窑万彩）</text>
        </svg>`,
      "siyang-fangzun": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Thương Chu Tứ Dương Phương Tôn Thanh Đồng">
          <rect width="600" height="360" fill="#F2EDE3"/>
          <path d="M204,74 L396,74 L362,138 L374,234 L344,264 L256,264 L226,234 L238,138 Z" fill="#465D51" stroke="#1E2822" stroke-width="2.5"/>
          <path d="M204,74 L396,74 L388,92 L212,92 Z" fill="#597465"/>
          <circle cx="232" cy="180" r="18" fill="#637E6E" stroke="#1E2822" stroke-width="2"/>
          <circle cx="368" cy="180" r="18" fill="#637E6E" stroke="#1E2822" stroke-width="2"/>
          <path d="M214,168 C196,156 196,184 218,186 M386,168 C404,156 404,184 382,186" fill="none" stroke="#223028" stroke-width="5" stroke-linecap="round"/>
          <rect x="256" y="264" width="88" height="34" fill="#364A40" stroke="#1E2822" stroke-width="2"/>
          <path d="M258,158 L342,158 M258,214 L342,214" stroke="#A69973" stroke-width="2" stroke-dasharray="6 4"/>
          <text x="300" y="330" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">商晚期 · 四羊方尊（青铜分铸巅峰重器）</text>
        </svg>`,
      "jinlv-yuyi": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Tây Hán Kim Lũ Ngọc Y">
          <rect width="600" height="360" fill="#F3EFE6"/>
          <g fill="#B9C7B2" stroke="#9C7A33" stroke-width="1.2">
            <rect x="266" y="54" width="68" height="58" rx="18"/>
            <rect x="234" y="114" width="132" height="106" rx="8"/>
            <rect x="164" y="118" width="66" height="38" rx="6"/>
            <rect x="370" y="118" width="66" height="38" rx="6"/>
            <rect x="238" y="224" width="56" height="72" rx="6"/>
            <rect x="306" y="224" width="56" height="72" rx="6"/>
          </g>
          <path d="M234,142 L366,142 M234,170 L366,170 M234,198 L366,198 M270,114 L270,220 M300,114 L300,220 M330,114 L330,220" stroke="#C59D44" stroke-width="1.2"/>
          <text x="300" y="332" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">西汉 · 满城汉墓金缕玉衣（两千四百余片和田玉）</text>
        </svg>`,
      "pingfu-tie": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Tây Tấn Lục Cơ Bình Phục Thiếp">
          <rect width="600" height="360" fill="#E8DFCE"/>
          <rect x="52" y="42" width="496" height="248" fill="#DFD1B9" stroke="#8C7B63" stroke-width="1.5"/>
          <g fill="#26211D" font-family="'Noto Serif SC', serif" font-size="24">
            <text x="486" y="92">彦</text><text x="486" y="128">先</text><text x="486" y="164">侍</text><text x="486" y="200">白</text>
            <text x="424" y="92">恐</text><text x="424" y="128">痛</text><text x="424" y="164">难</text><text x="424" y="200">平</text>
            <text x="362" y="92">夏</text><text x="362" y="128">初</text><text x="362" y="164">复</text><text x="362" y="200">悉</text>
            <text x="300" y="92">以</text><text x="300" y="128">为</text><text x="300" y="164">慰</text><text x="300" y="200">念</text>
          </g>
          <rect x="102" y="88" width="24" height="24" fill="#9E2424" rx="2"/>
          <rect x="102" y="132" width="26" height="36" fill="none" stroke="#9E2424" stroke-width="2"/>
          <text x="115" y="156" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="11" fill="#9E2424">宣和</text>
          <text x="300" y="328" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">西晋 · 陆机《平复帖》（现存最早名家墨迹法帖）</text>
        </svg>`,
      "zhongqiu-tie": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Đông Tấn Vương Hiến Chi Trung Thu Thiếp">
          <rect width="600" height="360" fill="#EFE7D6"/>
          <rect x="64" y="40" width="472" height="252" fill="#EAE0CA" stroke="#968466" stroke-width="1.5"/>
          <g fill="#191614" font-family="'Noto Serif SC', serif" font-size="28" font-style="italic">
            <text x="444" y="102">中</text><text x="444" y="144">秋</text><text x="444" y="186">十</text><text x="444" y="228">二</text>
            <text x="356" y="102">日</text><text x="356" y="144">不</text><text x="356" y="186">殊</text><text x="356" y="228">未</text>
            <text x="268" y="102">果</text><text x="268" y="144">为</text><text x="268" y="186">结</text><text x="268" y="228">力</text>
          </g>
          <rect x="118" y="76" width="38" height="38" fill="none" stroke="#8C1E1E" stroke-width="2.5"/>
          <text x="137" y="100" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="12" fill="#8C1E1E">三希</text>
          <text x="300" y="328" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">东晋 · 王献之《中秋帖》（三希堂法帖一笔书）</text>
        </svg>`,
      "boyuan-tie": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Đông Tấn Vương Tuần Bá Viễn Thiếp">
          <rect width="600" height="360" fill="#F0E9DA"/>
          <rect x="64" y="40" width="472" height="252" fill="#E6DCC6" stroke="#8C7A5C" stroke-width="1.5"/>
          <g fill="#1F1B17" font-family="'Noto Serif SC', serif" font-size="24">
            <text x="462" y="96">珣</text><text x="462" y="136">顿</text><text x="462" y="176">首</text><text x="462" y="216">顿</text><text x="462" y="256">首</text>
            <text x="386" y="96">伯</text><text x="386" y="136">远</text><text x="386" y="176">胜</text><text x="386" y="216">业</text>
            <text x="310" y="96">情</text><text x="310" y="136">群</text><text x="310" y="176">从</text><text x="310" y="216">鄙</text>
          </g>
          <rect x="128" y="176" width="34" height="34" fill="#9E2424"/>
          <text x="145" y="198" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="11" fill="#F9F5EB">王珣</text>
          <text x="300" y="328" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">东晋 · 王珣《伯远帖》（唯一传世东晋王氏真迹）</text>
        </svg>`,
      "daxiguan-ding": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Tây Chu Đại Khắc Đỉnh">
          <rect width="600" height="360" fill="#F4EFE6"/>
          <path d="M214,96 C214,68 232,68 232,96 M368,96 C368,68 386,68 386,96" fill="none" stroke="#36463D" stroke-width="10"/>
          <path d="M188,104 L412,104 C418,188 382,240 300,240 C218,240 182,188 188,104 Z" fill="#415348" stroke="#1C241F" stroke-width="2.5"/>
          <path d="M234,234 L224,296 M300,240 L300,296 M366,234 L376,296" stroke="#303E36" stroke-width="14" stroke-linecap="round"/>
          <path d="M204,132 L396,132 M204,162 L396,162" stroke="#859684" stroke-width="3" stroke-dasharray="10 6"/>
          <text x="300" y="330" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">西周 · 大克鼎（内壁二百九十字金文重器）</text>
        </svg>`,
      "zhaoqing-duanyan-inkstone": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Triệu Khánh Đoan Khê Long Vĩ Nghiên">
          <rect width="600" height="360" fill="#F2EDE3"/>
          <rect x="164" y="68" width="272" height="218" rx="18" fill="#46373C" stroke="#22191C" stroke-width="3"/>
          <rect x="190" y="96" width="220" height="162" rx="10" fill="#35282D" stroke="#6B565D" stroke-width="1.5"/>
          <ellipse cx="300" cy="126" rx="80" ry="18" fill="#181214"/>
          <circle cx="242" cy="176" r="9" fill="#829D7F"/>
          <circle cx="242" cy="176" r="3.5" fill="#1C291B"/>
          <circle cx="358" cy="212" r="8" fill="#829D7F"/>
          <text x="300" y="328" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">名砚之首 · 端溪青花石眼龙尾砚（文房四宝）</text>
        </svg>`,
      "guqin-jiuxiao-huanpei": `
        <svg viewBox="0 0 600 360" role="img" aria-label="Thịnh Đường Cửu Tiêu Hoàn Bội Cổ Cầm">
          <rect width="600" height="360" fill="#F5F0E6"/>
          <path d="M96,154 L476,144 C498,144 508,162 508,180 C508,198 498,216 476,216 L96,206 L96,154 Z" fill="#4B2118" stroke="#1E0C08" stroke-width="2.5"/>
          <g stroke="#E3CF9E" stroke-width="1">
            <line x1="112" y1="164" x2="486" y2="156"/>
            <line x1="112" y1="169" x2="486" y2="162"/>
            <line x1="112" y1="174" x2="486" y2="168"/>
            <line x1="112" y1="179" x2="486" y2="174"/>
            <line x1="112" y1="184" x2="486" y2="180"/>
            <line x1="112" y1="189" x2="486" y2="186"/>
            <line x1="112" y1="194" x2="486" y2="192"/>
          </g>
          <g fill="#F6F2E8">
            <circle cx="150" cy="154" r="2.2"/><circle cx="188" cy="153" r="2.4"/><circle cx="226" cy="152" r="2.6"/><circle cx="264" cy="151" r="2.8"/><circle cx="302" cy="150" r="3"/><circle cx="340" cy="149" r="2.8"/><circle cx="378" cy="148" r="2.6"/><circle cx="416" cy="147" r="2.4"/>
          </g>
          <text x="300" y="328" text-anchor="middle" font-family="'Noto Serif SC', serif" font-size="18" fill="#202020">盛唐 · 九霄环佩七弦古琴（伏羲式蛇腹断纹）</text>
        </svg>`
    };

    if (artifact && artifact.imageUrl) {
      return `
        <div class="museum-artwork-frame ${isLarge ? "museum-artwork-large" : ""} museum-artwork-photo-frame">
          <img
            src="${artifact.imageUrl}"
            alt="${artifact.nameVi} (${artifact.nameZh})"
            class="museum-artwork-img"
            loading="lazy"
            onload="var r=this.naturalWidth/Math.max(1,this.naturalHeight);if(r>=2.2){this.parentElement&&this.parentElement.classList.add('is-handscroll');}else if(r<=0.64){this.parentElement&&this.parentElement.classList.add('is-tall-scroll');}"
          />
          <span class="museum-artwork-seal">${(artifact.nameZh || "馆藏").slice(0, 4)}</span>
        </div>
      `;
    }

    const rawSvg = plateMap[artifact.id] || this.renderInkLandscapeSVG();
    return `
      <div class="museum-artwork-frame ${isLarge ? "museum-artwork-large" : ""}">
        ${rawSvg}
        <span class="museum-artwork-seal">${(artifact.nameZh || "馆藏").slice(0, 4)}</span>
      </div>
    `;
  }
};
