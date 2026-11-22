// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — Japan-Guide & Airbnb Benchmarked Travel Hub
// 1. Pre-Departure Checklist (Alipay/WeChat, 12306 Rail, eSIM, Didi)
// 2. 12-Month Seasonal China Calendar
// 3. 8 Curated Multi-City Itineraries (incl. Vietnam Overland Links)
// 4. Regional Spice & Flavor Explorer Across 34 Provinces (170+ Dishes)
// 5. Show-to-Driver / Restaurant Bilingual High-Contrast Card
// 6. Clean 5-Tab Province Modal Helper
// ============================================================================

(function () {
  "use strict";

  var tState = {
    hubTab: "checklist", // "checklist" | "calendar" | "itineraries" | "flavors" | "driver"
    activeMonth: 4,
    flavorFilter: "all",
    activeDriverId: "station",
    checks: {}
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function renderTrThumb(src, caption, compact) {
    if (!src) return "";
    var styleBox = compact
      ? "width:100%;height:90px;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);margin-bottom:0.45rem;background:var(--bg-surface);cursor:pointer;"
      : "aspect-ratio:16/10;max-height:150px;width:100%;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);margin-bottom:0.5rem;background:var(--bg-surface);cursor:pointer;";
    return (
      '<div class="img-skeleton-bg" style="' + styleBox + '" data-action="open-custom-image" data-src="' + esc(src) + '" data-caption="' + esc(caption || "") + '">' +
      '  <img src="' + esc(src) + '" alt="' + esc(caption || "China Travel") + '" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:50% 35%;display:block;" onerror="this.onerror=null;this.src=\'assets/images/articles/hero-consular-field-guide.jpg\';" />' +
      '</div>'
    );
  }

  function resolveDishThumb(provId, idx) {
    var vis = (window.CCE_PROVINCE_ITEM_VISUALS && provId && window.CCE_PROVINCE_ITEM_VISUALS[provId]) || {};
    var arr = Array.isArray(vis.dishes) ? vis.dishes : [];
    if (arr.length) return arr[Math.abs(Number(idx) || 0) % arr.length];
    return "assets/images/articles/hero-chinese-cuisines.jpg";
  }

  var CHECKLIST = [
    { id: "tr-pay", img: "assets/images/articles/hero-contemporary-china.jpg", titleVi: "1. Thanh toán Số (Alipay & WeChat Pay)", titleEn: "1. Digital Payments (Alipay & WeChat Pay)", noteVi: "Cài sẵn cả 2 ứng dụng trước khi bay, liên kết thẻ Visa/Mastercard và xác thực hộ chiếu; chi tiêu <= 200 RMB/giao dịch thường được miễn phụ phí 3%.", noteEn: "Install both apps pre-flight, bind international cards with passport KYC; single transactions <= 200 RMB waive the 3% foreign card fee." },
    { id: "tr-rail", img: "assets/images/articles/hero-beijing-shanghai.jpg", titleVi: "2. Vé Tàu Cao tốc 12306", titleEn: "2. High-Speed Rail App (Railway 12306)", noteVi: "Xác minh hộ chiếu trực tuyến qua mục English 12306; tại ga đi quét thẳng hộ chiếu ở làn nhân viên (Manual Lane) không cần in vé giấy.", noteEn: "Verify passport in the 12306 English app; board directly with physical passport at staffed station gates—no paper ticket needed." },
    { id: "tr-net", img: "assets/images/articles/hero-consular-field-guide.jpg", titleVi: "3. eSIM Du lịch & Bản đồ Amap (Gaode)", titleEn: "3. Roaming eSIM & Amap (高德地图)", noteVi: "Dùng eSIM quốc tế roaming ổn định để truy cập dịch vụ làm việc; điều hướng đường bộ và ga tàu chính xác nhất tại nội địa là Gaode Maps / Baidu Maps.", noteEn: "Use international roaming eSIMs for seamless connectivity alongside Gaode Maps (Amap) for real-time metro exits and intercity HSR transfers." },
    { id: "tr-didi", img: "assets/images/articles/hero-huaqiangbei-tech.jpg", titleVi: "4. Gọi xe Didi tích hợp & Mã QR Tàu điện", titleEn: "4. Didi In-App Hailing & Metro QR", noteVi: "Mở Didi mini-program ngay trong Alipay (có dịch tự động tin nhắn tài xế); quét mã Transit Metro từng thành phố.", noteEn: "Access Didi inside Alipay with auto-translated driver chat, and activate city-specific Metro QR passes via Alipay Transport." }
  ];

  var MONTHS = [
    { m: 1, img: "assets/images/provinces/heilongjiang-saint-sophia.jpg", nameVi: "Tháng 1", nameEn: "Jan", bestVi: "Cáp Nhĩ Tân · Hải Nam · Bắc Kinh", bestEn: "Harbin · Hainan · Beijing", noteVi: "Lễ hội Băng Đăng Cáp Nhĩ Tân (-20°C) hoặc tránh rét nắng ấm Tam Á – Hải Nam (22°C).", noteEn: "Harbin Ice & Snow World or warm tropical sunshine in Sanya (Hainan)." },
    { m: 2, img: "assets/images/provinces/shaanxi-terracotta-army.jpg", nameVi: "Tháng 2", nameEn: "Feb", bestVi: "Bắc Kinh · Tây An · Nam Ninh", bestEn: "Beijing · Xi'an · Nanning", noteVi: "Không khí Tết Nguyên Đán, hội đèn lồng cố đô Trường An – Khai Phong (tránh cao điểm Xuân Vận nếu đi đường dài).", noteEn: "Lantern Festivals across ancient capitals Xi'an and Kaifeng." },
    { m: 3, img: "assets/images/provinces/zhejiang-hangzhou-westlake.jpg", nameVi: "Tháng 3", nameEn: "Mar", bestVi: "Giang Tô · Chiết Giang · Vân Nam", bestEn: "Jiangsu · Zhejiang · Yunnan", noteVi: "Hoa đào – cải vàng Giang Nam, trà Long Tỉnh hái sớm trước tiết Thanh Minh tại Hàng Châu.", noteEn: "Spring blossoms in Jiangnan gardens and pre-Qingming Longjing tea harvest in Hangzhou." },
    { m: 4, img: "assets/images/provinces/guangxi-guilin-li-river.jpg", nameVi: "Tháng 4", nameEn: "Apr", bestVi: "Lạc Dương · Quế Lâm · Tô Châu", bestEn: "Luoyang · Guilin · Suzhou", noteVi: "Mùa hoa mẫu đơn Lạc Dương, khí hậu dịu mát lý tưởng thăm lâm viên Tô Châu và sông Ly Quế Lâm.", noteEn: "Luoyang Peony Festival and mild sunny days across Suzhou & Guilin." },
    { m: 5, img: "assets/images/provinces/anhui-huangshan-cloudsea.jpg", nameVi: "Tháng 5", nameEn: "May", bestVi: "An Huy (Hoàng Sơn) · Tây Tạng · Tứ Xuyên", bestEn: "Huangshan · Tibet · Sichuan", noteVi: "Biển mây đầu hạ tại Hoàng Sơn và thời tiết khô ráo quang đãng trên cao nguyên Thanh–Tạng.", noteEn: "Clear highland visibility in Tibet and cloud seas atop Mount Huangshan." },
    { m: 6, img: "assets/images/provinces/inner-mongolia-hulunbuir.jpg", nameVi: "Tháng 6", nameEn: "Jun", bestVi: "Thanh Hải · Nội Mông · Tương Tây", bestEn: "Qinghai · Inner Mongolia · Hunan", noteVi: "Thảo nguyên xanh Nội Mông, hồ Thanh Hải và Tết Đoan Ngọ đua thuyền rồng Hồ Nam.", noteEn: "Lush steppes in Inner Mongolia and Dragon Boat races along southern rivers." },
    { m: 7, img: "assets/images/provinces/guizhou-huangguoshu.jpg", nameVi: "Tháng 7", nameEn: "Jul", bestVi: "Cam Túc · Tân Cương (Y Lê) · Quý Châu", bestEn: "Gansu · Xinjiang · Guizhou", noteVi: "Tránh nóng ở cao nguyên Quý Châu mát mẻ hoặc thảo nguyên hoa oải hương thung lũng Y Lê.", noteEn: "Cool alpine relief in Guizhou waterfalls and Xinjiang's Ili lavender valleys." },
    { m: 8, img: "assets/images/provinces/tibet-potala-palace.jpg", nameVi: "Tháng 8", nameEn: "Aug", bestVi: "Tân Cương · Tây Tạng · Cát Lâm", bestEn: "Xinjiang · Tibet · Jilin", noteVi: "Thời điểm đẹp nhất tuyến Độc Khố (Duku) Tân Cương và núi Trường Bạch vùng Đông Bắc.", noteEn: "Peak accessibility along Xinjiang's Duku Highway and Changbai Mountain." },
    { m: 9, img: "assets/images/provinces/xinjiang-kanas-lake.jpg", nameVi: "Tháng 9", nameEn: "Sep", bestVi: "Tân Cương (Kanas) · Bắc Kinh · Thiểm Tây", bestEn: "Xinjiang · Beijing · Shaanxi", noteVi: "Đầu thu vàng rực tại Kanas – Tân Cương, khí hậu khô ráo dễ chịu tại Trường Thành Bắc Kinh.", noteEn: "Golden early autumn at Kanas Lake and crisp clear skies in Beijing." },
    { m: 10, img: "assets/images/provinces/sichuan-jiuzhaigou.jpg", nameVi: "Tháng 10", nameEn: "Oct", bestVi: "Tứ Xuyên (Cửu Trại Câu) · Giang Tây · Sơn Đông", bestEn: "Sichuan (Jiuzhaigou) · Jiangxi · Shandong", noteVi: "Mùa lá đỏ – hồ ngọc bích đỉnh cao tại Cửu Trại Câu & Vụ Nguyên Giang Tây (sau tuần lễ Quốc khánh).", noteEn: "Peak autumn foliage over Jiuzhaigou travertine lakes and Wuyuan villages." },
    { m: 11, img: "assets/images/provinces/shanghai-bund-skyline.jpg", nameVi: "Tháng 11", nameEn: "Nov", bestVi: "Quảng Tây (Quế Lâm) · Thượng Hải · Quảng Đông", bestEn: "Guangxi · Shanghai · Guangdong", noteVi: "Lá ngân hạnh vàng rực công viên Tô – Thượng, khí hậu mát dễ chịu khắp Hoa Nam & Hội chợ CIIE.", noteEn: "Golden ginkgo avenues in Shanghai and comfortable 20°C weather across South China." },
    { m: 12, img: "assets/images/provinces/fujian-tulou.jpg", nameVi: "Tháng 12", nameEn: "Dec", bestVi: "Quảng Đông · Phúc Kiến · Hồng Kông", bestEn: "Guangdong · Fujian · Hong Kong", noteVi: "Tránh rét lý tưởng tại Quảng Châu, Thổ Lâu Phúc Kiến và mùa dimsum – lễ hội cuối năm.", noteEn: "Mild southern winters in Guangzhou, Fujian Tulou, and Hong Kong harbourfront." }
  ];

  var ITINERARIES = [
    { id: "it-1", img: "assets/images/provinces/beijing-temple-of-heaven.jpg", days: "7 Days", routeVi: "Bắc Kinh – Tây An (Trục Đế Vương)", routeEn: "Beijing -> Xi'an Imperial Axis", highVi: "Tử Cấm Thành, Thiên Đàn, Vạn Lý Trường Thành → Binh Mã Dũng, Đại Nhạn Tháp (4h30 tàu G).", highEn: "Forbidden City, Tiantan, Great Wall -> Terracotta Warriors & Muslim Quarter (4.5h HSR)." },
    { id: "it-2", img: "assets/images/academic/suzhou-garden.jpg", days: "6 Days", routeVi: "Thượng Hải – Tô Châu – Hàng Châu (Giang Nam)", routeEn: "Shanghai -> Suzhou -> Hangzhou", highVi: "Bến Thượng Hải, Bảo tàng Thượng Hải → Lâm viên Tô Châu → Tây Hồ, trà Long Tỉnh.", highEn: "The Bund & Shanghai Museum -> Suzhou UNESCO gardens -> West Lake Longjing terraces." },
    { id: "it-3", img: "assets/images/provinces/chongqing-hongyadong.jpg", days: "8 Days", routeVi: "Thành Đô – Đô Giang Yển – Cửu Trại Câu – Trùng Khánh", routeEn: "Chengdu -> Dujiangyan -> Jiuzhaigou -> Chongqing", highVi: "Thủy lợi Đô Giang Yển 2.200 năm, Gấu trúc, Hồ Ngũ Hoa & đường sắt trên cao xuyên nhà Trùng Khánh.", highEn: "Ancient Dujiangyan irrigation, pandas, Jiuzhaigou lakes & Chongqing 3D monorail." },
    { id: "it-4", img: "assets/images/provinces/gansu-dunhuang-mogao.jpg", days: "10 Days", routeVi: "Hành lang Tơ Lụa Hà Tây: Lan Châu – Trương Dịch – Đôn Hoàng", routeEn: "Hexi Silk Road: Lanzhou -> Zhangye -> Dunhuang", highVi: "Miệng núi Đan Hà thất sắc, Hang Mạc Cao Đôn Hoàng & Cửa Ngọc Môn Quan.", highEn: "Rainbow Danxia landforms, Mogao Buddhist grottoes & Yumen Pass." },
    { id: "it-5", img: "assets/images/provinces/guangdong-canton-tower.jpg", days: "6 Days", routeVi: "Đại Vịnh Quảng Đông: Quảng Châu – Phật Sơn – Thâm Quyến – HK", routeEn: "Greater Bay: Guangzhou -> Foshan -> Shenzhen -> HK", highVi: "Khảo sát Hội chợ Canton, Hoa Cường Bắc, gốm Phật Sơn & Bảo tàng Cố Cung Hồng Kông.", highEn: "Canton Fair, Huaqiangbei electronics hub, Foshan kilns & HK Palace Museum." },
    { id: "it-6", img: "assets/images/provinces/yunnan-lijiang-old-town.jpg", days: "7 Days", routeVi: "Vân Nam: Côn Minh – Đại Lý – Lệ Giang – Shangri-La", routeEn: "Yunnan: Kunming -> Dali -> Lijiang -> Shangri-La", highVi: "Tuyến Trà Mã Cổ Đạo, chữ Đông Ba Nạp Tây & tuyết sơn Ngọc Long.", highEn: "Ancient Tea-Horse corridor, Naxi Dongba heritage & Jade Dragon Snow Mountain." },
    { id: "it-7", img: "assets/images/academic/guilin-li-river.jpg", days: "5 Days", routeVi: "Liên vận Đường bộ Việt–Trung: Hà Nội – Hữu Nghị – Nam Ninh – Quế Lâm", routeEn: "Vietnam–China Overland: Hanoi -> Nanning -> Guilin", highVi: "Qua cửa khẩu Hữu Nghị nối tàu cao tốc Nam Ninh → Quế Lâm – Dương Sóc trên sông Ly.", highEn: "Cross Huu Nghi Border Gate directly onto Nanning-Guilin HSR along Li River karst." },
    { id: "it-8", img: "assets/images/provinces/fujian-tulou.jpg", days: "6 Days", routeVi: "Hành trình Di sản Văn hóa Phúc Kiến: Hạ Môn – Thổ Lâu – Tuyền Châu", routeEn: "Fujian Heritage: Xiamen -> Tulou -> Quanzhou", highVi: "Hải cảng Con đường Tơ lụa trên biển Tuyền Châu (UNESCO) & Thổ Lâu Vĩnh Định.", highEn: "UNESCO Maritime Silk Road port of Quanzhou paired with Hakka Yongding Tulou." }
  ];

  var DRIVER_CARDS = [
    { id: "station", cat: "HSR", zh: "请送我去最近的【高铁站】进站口，谢谢！", py: "Qǐng sòng wǒ qù zuìjìn de gāotiězhàn jìnzhànkǒu, xièxie!", vi: "Xin đưa tôi tới cổng vào Ga Tàu Cao tốc gần nhất, cảm ơn!", en: "Please take me to the nearest High-Speed Rail Station entrance, thank you!" },
    { id: "spice", cat: "Dining", zh: "你好！不要香菜，少辣（微辣），谢谢！", py: "Nǐhǎo! Búyào xiāngcài, shǎolà (wēilà), xièxie!", vi: "Chào bạn! Không cho rau mùi, ít cay thôi ạ, cảm ơn!", en: "Hello! No cilantro and mild spice please, thank you!" },
    { id: "fapiao", cat: "Biz", zh: "请帮我开具增值税电子发票（发票）。", py: "Qǐng bāng wǒ kāijù zēngzhíshuì diànzǐ fāpiào.", vi: "Vui lòng xuất giúp tôi hóa đơn điện tử VAT (Fapiao).", en: "Please issue an electronic VAT tax invoice (Fapiao) for this transaction." },
    { id: "factory", cat: "B2B", zh: "我要去这个工业园的【生产车间 / 仓库】装货检验。", py: "Wǒ yào qù zhège gōngyèyuán de shēngchǎn chējiān / cāngkù.", vi: "Tôi cần vào Phân xưởng sản xuất / Kho hàng của khu công nghiệp này để kiểm hàng.", en: "Please direct me to the factory production workshop / warehouse for cargo inspection." },
    { id: "allergy", cat: "Health", zh: "请注意：我对【花生】和【海鲜】严重过敏，请勿加入！", py: "Qǐng zhùyì: Wǒ duì huāshēng hé hǎixiān yánzhòng guòmǐn!", vi: "Xin lưu ý: Tôi dị ứng nặng với Đậu phộng (Lạc) và Hải sản!", en: "Important: I have severe allergies to peanuts and seafood—please exclude them!" }
  ];

  function classifyFlavor(text) {
    var s = String(text || "").toLowerCase();
    if (/cay|tê|ma po|lẩu|tứ xuyên|trùng khánh|hồ nam|sichuan|spicy|mala/i.test(s)) return "mala";
    if (/cừu|hồi|tân cương|ninh hạ|cam túc|lamb|halal|xinjiang/i.test(s)) return "halal";
    if (/trà|ngọt|bánh|dimsum|long tỉnh|chè|hàng châu|thượng hải|sweet|tea/i.test(s)) return "sweet";
    if (/hấp|thanh|hải sản|vịt|bắc kinh|quảng đông|umami|roast|steamed/i.test(s)) return "umami";
    return "mild";
  }

  function collectDishes(RegionsObj) {
    var provs = (RegionsObj && (RegionsObj.provincesDirectory || RegionsObj.provincialDirectory)) || [];
    var rows = [];
    provs.forEach(function (pr) {
      var sigs = (pr.culinaryCulture && pr.culinaryCulture.signatureDishes) || [];
      if (sigs.length) {
        sigs.forEach(function (d) {
          var name = typeof d === "string" ? d : (d.nameVi || d.name || "");
          var note = typeof d === "string" ? "" : (d.flavor || d.notesVi || "");
          rows.push({ provId: pr.id, provVi: pr.nameVi, provEn: pr.nameEn, name: name, zh: d.nameZh || "", note: note, profile: classifyFlavor(name + " " + note) });
        });
      } else if (pr.cuisine) {
        String(pr.cuisine).split(/[,;·]/).forEach(function (part) {
          var clean = part.trim();
          if (clean.length >= 3) rows.push({ provId: pr.id, provVi: pr.nameVi, provEn: pr.nameEn, name: clean, zh: "", note: pr.highlights || "", profile: classifyFlavor(clean) });
        });
      }
    });
    return rows;
  }

  function renderHub(enM, RegionsObj) {
    var dishes = collectDishes(RegionsObj);
    var filteredDishes = tState.flavorFilter === "all" ? dishes : dishes.filter(function (d) { return d.profile === tState.flavorFilter; });
    var visibleDishes = filteredDishes.slice(0, 18);
    var actMonth = MONTHS.find(function (m) { return m.m === tState.activeMonth; }) || MONTHS[3];
    var actCard = DRIVER_CARDS.find(function (c) { return c.id === tState.activeDriverId; }) || DRIVER_CARDS[0];

    var body = "";
    if (tState.hubTab === "checklist") {
      body = '<div class="grid grid-2" style="gap:0.75rem;">' + CHECKLIST.map(function (c) {
        var done = Boolean(tState.checks[c.id]);
        var tTxt = enM ? c.titleEn : c.titleVi;
        return '<div class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.35rem;">' +
          renderTrThumb(c.img, tTxt, true) +
          '<label style="display:flex;gap:0.6rem;align-items:flex-start;cursor:pointer;"><input type="checkbox" ' + (done ? "checked" : "") + ' data-tr-chk="' + c.id + '" style="margin-top:0.2rem;" /><div><strong>' + esc(tTxt) + '</strong><p style="margin:0.25rem 0 0;font-size:0.82rem;color:var(--text-secondary);">' + esc(enM ? c.noteEn : c.noteVi) + '</p></div></label></div>';
      }).join("") + '</div>';
    } else if (tState.hubTab === "calendar") {
      body = '<div class="filter-bar" style="margin-bottom:0.8rem;">' + MONTHS.map(function (m) {
        return '<button type="button" class="filter-pill ' + (m.m === tState.activeMonth ? "active" : "") + '" data-tr-act="month" data-val="' + m.m + '">' + (enM ? m.nameEn : m.nameVi) + '</button>';
      }).join("") + '</div><div class="flashcard-layer" style="background:var(--bg-accent-soft);">' + renderTrThumb(actMonth.img, enM ? actMonth.bestEn : actMonth.bestVi, false) + '<strong>' + (enM ? actMonth.bestEn : actMonth.bestVi) + '</strong><p style="margin:0.35rem 0 0;font-size:0.88rem;">' + esc(enM ? actMonth.noteEn : actMonth.noteVi) + '</p></div>';
    } else if (tState.hubTab === "itineraries") {
      body = '<div class="grid grid-2" style="gap:0.75rem;">' + ITINERARIES.map(function (it) {
        var rTxt = enM ? it.routeEn : it.routeVi;
        return '<div class="flashcard-layer">' + renderTrThumb(it.img, rTxt, false) + '<span class="badge badge-jade" style="margin-bottom:0.3rem;">' + it.days + '</span><br><strong>' + esc(rTxt) + '</strong><p style="margin:0.3rem 0 0;font-size:0.82rem;color:var(--text-secondary);">' + esc(enM ? it.highEn : it.highVi) + '</p></div>';
      }).join("") + '</div>';
    } else if (tState.hubTab === "flavors") {
      body = (
        '<div class="filter-bar" style="margin-bottom:0.75rem;">' +
        [
          { id: "all", lbl: (enM ? "All (" : "Tất cả (") + dishes.length + "+ Dishes)" },
          { id: "mala", lbl: enM ? "Spicy / Mala (麻辣)" : "Cay Tê / Mala" },
          { id: "umami", lbl: enM ? "Roast & Umami" : "Thanh Ngọt & Hấp" },
          { id: "sweet", lbl: enM ? "Tea & Pastry" : "Trà & Điểm tâm" },
          { id: "halal", lbl: enM ? "Silk Road / Halāl" : "Hương vị Tây Bắc / Cừu" }
        ].map(function (f) {
          return '<button type="button" class="filter-pill ' + (tState.flavorFilter === f.id ? "active" : "") + '" data-tr-act="flavor" data-val="' + f.id + '">' + f.lbl + '</button>';
        }).join("") +
        '</div><div class="grid grid-3" style="gap:0.65rem;">' +
        visibleDishes.map(function (d, idx) {
          return '<div class="flashcard-layer" style="font-size:0.81rem;">' + renderTrThumb(resolveDishThumb(d.provId, idx), d.name, true) + '<strong>' + esc(d.name) + '</strong>' + (d.zh ? ' <span class="hanzi">' + esc(d.zh) + '</span>' : "") + '<br><span style="color:var(--jade-green);">' + esc(enM ? d.provEn : d.provVi) + '</span> · <button type="button" class="btn btn-ghost btn-sm" style="padding:0 0.25rem;font-size:0.74rem;" data-action="open-province" data-id="' + esc(d.provId) + '">Hồ sơ →</button></div>';
        }).join("") +
        '</div>'
      );
    } else {
      body = (
        '<div class="filter-bar" style="margin-bottom:0.75rem;">' +
        DRIVER_CARDS.map(function (c) {
          return '<button type="button" class="filter-pill ' + (c.id === tState.activeDriverId ? "active" : "") + '" data-tr-act="driver" data-val="' + c.id + '">' + c.cat + ': ' + esc(enM ? c.en.slice(0, 26) : c.vi.slice(0, 26)) + '...</button>';
        }).join("") +
        '</div><div class="cce-driver-card">' + renderTrThumb("assets/images/articles/hero-consular-field-guide.jpg", actCard.cat + " · " + actCard.vi, false) + '<div class="editorial-kicker">SHOW TO DRIVER / RESTAURANT · 实用汉语出示卡</div><div class="hanzi" style="font-size:1.65rem;line-height:1.35;margin:0.35rem 0;">' + esc(actCard.zh) + ' <button type="button" class="tts-speak-btn" data-action="speak-zh" data-zh="' + esc(actCard.zh) + '" title="Speak zh-CN"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button></div><div class="pinyin" style="font-size:0.95rem;margin-bottom:0.4rem;">' + esc(actCard.py) + '</div><div style="font-size:0.88rem;"><strong>VI:</strong> ' + esc(actCard.vi) + ' · <strong>EN:</strong> ' + esc(actCard.en) + '</div></div>'
      );
    }

    return (
      '<section id="cce-travel-ux-hub" class="card mb-2" style="margin-top:2rem;border-top:3px solid var(--jade-green);">' +
      '  <div class="section-header" style="margin-bottom:0.75rem;"><div><div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "PRACTICAL CHINA FIELD TRAVEL HUB · 赴华实用攻略中心" : "Cẩm nang Thực địa Du lịch & Công tác Trung Quốc · 赴华实用攻略") + '</div><h3 style="margin:0.15rem 0 0;">' + (enM ? "Checklist, 12-Month Calendar, 8 Itineraries, Culinary Explorer &amp; Show-to-Driver Cards" : "Hành trang 12 Tháng, 8 Lịch trình, Khám phá " + dishes.length + "+ Món Vùng miền &amp; Thẻ Đưa Tài xế") + '</h3></div></div>' +
      '  <div class="tabs-bar" style="margin-bottom:1rem;">' +
      [
        { id: "checklist", lbl: enM ? "Pre-Departure Checklist" : "Hành trang Cài App" },
        { id: "calendar", lbl: enM ? "12-Month Calendar" : "Lịch 12 Tháng" },
        { id: "itineraries", lbl: enM ? "8 Curated Itineraries" : "8 Lịch trình Mẫu" },
        { id: "flavors", lbl: (enM ? "Cuisine Explorer (" : "Bản đồ Ẩm thực (") + dishes.length + "+)" },
        { id: "driver", lbl: enM ? "Show-to-Driver Cards" : "Thẻ Đưa Tài xế" }
      ].map(function (t) {
        return '<button type="button" class="tab-btn ' + (tState.hubTab === t.id ? "active" : "") + '" data-tr-act="tab" data-val="' + t.id + '">' + t.lbl + '</button>';
      }).join("") +
      '  </div>' + body +
      '</section>'
    );
  }

  function bind() {
    if (window._cceTravelBound || typeof document === "undefined") return;
    window._cceTravelBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-tr-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-tr-act");
      if (act === "tab") tState.hubTab = el.getAttribute("data-val") || "checklist";
      else if (act === "month") tState.activeMonth = parseInt(el.getAttribute("data-val"), 10) || 4;
      else if (act === "flavor") tState.flavorFilter = el.getAttribute("data-val") || "all";
      else if (act === "driver") tState.activeDriverId = el.getAttribute("data-val") || "station";
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
    document.addEventListener("change", function (e) {
      if (e.target && e.target.getAttribute && e.target.getAttribute("data-tr-chk")) {
        tState.checks[e.target.getAttribute("data-tr-chk")] = Boolean(e.target.checked);
      }
    });
  }
  bind();

  window.CCE_TRAVEL_HUB = { renderHub: renderHub };
})();
