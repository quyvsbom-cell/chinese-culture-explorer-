// ============================================================================
// WAVE 3.3 GALLERY, MUSEUM, CLASSICS, SOLAR TERMS & READING ROOM MODULE
// - RTL Handscroll Minimap & Seal/Colophon Pixel Loupe
// - Museum 4,000-Year Craft Timeline + Period Quick Filter
// - 4-Column Toggleable Classics Reader + K-Map Category Filter
// - Live Astronomical 24 Solar Terms Calculator
// - Article 2px Reading Progress Bar + Remaining Read Time + ScrollSpy TOC
// ============================================================================

(function () {
  "use strict";

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  var SOLAR_TERMS_24 = [
    { deg: 0, zh: "春分", vi: "Xuân Phân", en: "Spring Equinox", approx: "20/03", noteVi: "Âm Dương quân bình, tiết trời ôn hòa thích hợp khai trà Xuân và du ngoạn Giang Nam.", noteEn: "Day and night equalize; peak spring tea buds and mild Jiangnan canal walks." },
    { deg: 15, zh: "清明", vi: "Thanh Minh", en: "Pure Brightness", approx: "05/04", noteVi: "Tiết tảo mộ tri ân tổ tiên, ngắm liễu Tây Hồ và thưởng trà Long Tỉnh Minh Tiền.", noteEn: "Ancestral remembrance, willow walks by West Lake, and Mingqian Longjing tea." },
    { deg: 30, zh: "谷雨", vi: "Cốc Vũ", en: "Grain Rain", approx: "20/04", noteVi: "Mưa xuân nuôi mầm lúa, thời khắc hái trà Cốc Vũ và mẫu đơn Lạc Dương nở rộ.", noteEn: "Spring rains nourish grains; Luoyang peonies bloom and Grain Rain tea harvests." },
    { deg: 45, zh: "立夏", vi: "Lập Hạ", en: "Start of Summer", approx: "06/05", noteVi: "Khí dương vượng lên, dưỡng tâm an thần, hạn chế đồ quá cay nóng.", noteEn: "Summer begins; nourish Heart Qi with lotus seeds and light seasonal broths." },
    { deg: 60, zh: "小满", vi: "Tiểu Mãn", en: "Grain Buds", approx: "21/05", noteVi: "Hạt lúa bắt đầu mẩy sữa; thanh nhiệt trừ thấp nhẹ bằng bí đao, đậu xanh.", noteEn: "Early grain fill; clear rising humidity with mild cooling greens." },
    { deg: 75, zh: "芒种", vi: "Mang Chủng", en: "Grain in Ear", approx: "06/06", noteVi: "Mùa gặt lúa mì và cấy lúa vụ mùa phương Nam.", noteEn: "Harvest of bearded grains and busy summer rice transplanting." },
    { deg: 90, zh: "夏至", vi: "Hạ Chí", en: "Summer Solstice", approx: "21/06", noteVi: "Ban ngày dài nhất năm ở Bắc bán cầu; dân gian ăn mì mát giải thử.", noteEn: "Longest daylight of the year; seasonal custom of chilled wheat noodles." },
    { deg: 105, zh: "小暑", vi: "Tiểu Thử", en: "Minor Heat", approx: "07/07", noteVi: "Hơi nóng tích tụ trước Tam Phục; thích hợp lên cao nguyên Vân Nam hay Hoàng Sơn tránh nóng.", noteEn: "Heat gathers ahead of mid-summer dog days; ideal season for highland plateaus." },
    { deg: 120, zh: "大暑", vi: "Đại Thử", en: "Major Heat", approx: "23/07", noteVi: "Đỉnh điểm nắng nóng Hoa Trung–Hoa Nam; trọng thực dưỡng thanh thử.", noteEn: "Peak summer heat; emphasize hydration and cooling herbal decoctions." },
    { deg: 135, zh: "立秋", vi: "Lập Thu", en: "Start of Autumn", approx: "07/08", noteVi: "Thu sang trên cao nguyên Tây Bắc và vùng Đông Bắc; thu hoạch sớm.", noteEn: "Autumn arrives first in Northwest plateaus; gradual cooling nights begin." },
    { deg: 150, zh: "处暑", vi: "Xử Thử", en: "End of Heat", approx: "23/08", noteVi: "Nắng gắt rút lui, trời cao mây nhẹ mở đầu mùa du lịch đẹp nhất Bắc Kinh.", noteEn: "Lingering heat recedes, opening crisp northern skies for autumn travel." },
    { deg: 165, zh: "白露", vi: "Bạch Lộ", en: "White Dew", approx: "08/09", noteVi: "Sương đêm đọng trắng trên cỏ; dưỡng phế bằng lê hấp, mật ong, trà Ô Long.", noteEn: "Cool morning dew; moisten lungs in traditional wellness with steamed pear and Oolong." },
    { deg: 180, zh: "秋分", vi: "Thu Phân", en: "Autumn Equinox", approx: "23/09", noteVi: "Ngày đêm bằng nhau lần hai; mùa hoa quế Hàng Châu và thu vàng Cửu Trại Câu.", noteEn: "Second equinox; Osmanthus fragrance in Hangzhou and early golden foliage." },
    { deg: 195, zh: "寒露", vi: "Hàn Lộ", en: "Cold Dew", approx: "08/10", noteVi: "Lá phong Hương Sơn và ngân hạnh Bắc Kinh ngả vàng rực rỡ.", noteEn: "Crisp autumn clarity paints Xiangshan maples and Beijing ginkgo avenues." },
    { deg: 210, zh: "霜降", vi: "Sương Giáng", en: "Frost's Descent", approx: "23/10", noteVi: "Sương muối xuất hiện ở Hoa Bắc; mùa hồng chín và cua lông Dương Trừng.", noteEn: "First northern frost; peak sweet persimmons and Yangcheng hairy crab season." },
    { deg: 225, zh: "立冬", vi: "Lập Đông", en: "Start of Winter", approx: "07/11", noteVi: "Tích trữ dương khí, ăn sủi cảo giữ ấm theo tục phương Bắc.", noteEn: "Winter threshold; traditional northern dumpling custom marking seasonal inward rest." },
    { deg: 240, zh: "小雪", vi: "Tiểu Tuyết", en: "Minor Snow", approx: "22/11", noteVi: "Tuyết đầu mùa rơi nhẹ ở Quan Trung và Bắc Kinh.", noteEn: "Light early snow dusts northern eaves and courtyard pines." },
    { deg: 255, zh: "大雪", vi: "Đại Tuyết", en: "Major Snow", approx: "07/12", noteVi: "Lễ hội băng đăng Cáp Nhĩ Tân chuẩn bị khai hội bên sông Tùng Hoa.", noteEn: "Deep winter frost opens ice harvesting along the Songhua River in Harbin." },
    { deg: 270, zh: "冬至", vi: "Đông Chí", en: "Winter Solstice", approx: "21/12", noteVi: "Đêm dài nhất năm; khởi đầu 'Cửu Cửu Tiêu Hàn', Nam ăn bánh trôi – Bắc ăn sủi cảo.", noteEn: "Shortest day; countdown of Nine Nines toward spring revival." },
    { deg: 285, zh: "小寒", vi: "Tiểu Hàn", en: "Minor Cold", approx: "06/01", noteVi: "Chính đông lạnh giá; cháo Lạp Bát và hoa mai nở sớm miền Giang Nam.", noteEn: "Deep chill pairs with Laba eight-treasure porridge and early winter plum blossoms." },
    { deg: 300, zh: "大寒", vi: "Đại Hàn", en: "Major Cold", approx: "20/01", noteVi: "Tiết cuối vòng tuần hoàn 24 tiết khí, dọn nhà đón Xuân mới.", noteEn: "Final solar term closing the agricultural year before Spring Festival preparation." },
    { deg: 315, zh: "立春", vi: "Lập Xuân", en: "Start of Spring", approx: "04/02", noteVi: "Khởi đầu mùa xuân theo Lục Thập Hoa Giáp cổ lịch.", noteEn: "Solar New Year marking the resurgence of spring warmth and fresh greens." },
    { deg: 330, zh: "雨水", vi: "Vũ Thủy", en: "Rain Water", approx: "19/02", noteVi: "Tuyết tan hóa mưa ấm nhuận đất phương Bắc và đồng bằng Trường Giang.", noteEn: "Gentle rains replace winter frost, awakening Yangtze orchards." },
    { deg: 345, zh: "惊蛰", vi: "Kinh Trập", en: "Awakening of Insects", approx: "06/03", noteVi: "Sấm xuân vang dậy đánh thức vạn vật, hoa đào – hoa cải nở khắp Tứ Xuyên, Vân Nam.", noteEn: "First spring thunder awakens soil life as Sichuan rapeseed terraces bloom." }
  ];

  function computeLiveSolarTerm(dateObj) {
    var d = dateObj || new Date();
    var refEquinox = Date.UTC(d.getUTCFullYear(), 2, 20, 12, 0, 0);
    var daysDiff = (d.getTime() - refEquinox) / 86400000;
    if (daysDiff < 0) {
      refEquinox = Date.UTC(d.getUTCFullYear() - 1, 2, 20, 12, 0, 0);
      daysDiff = (d.getTime() - refEquinox) / 86400000;
    }
    var solarDeg = ((daysDiff / 365.2422) * 360) % 360;
    if (solarDeg < 0) solarDeg += 360;
    var idx = Math.floor(solarDeg / 15) % 24;
    var nextIdx = (idx + 1) % 24;
    var degLeft = ((idx + 1) * 15) - solarDeg;
    var daysUntilNext = Math.max(1, Math.round((degLeft / 360) * 365.2422));
    return {
      current: SOLAR_TERMS_24[idx],
      next: SOLAR_TERMS_24[nextIdx],
      daysUntilNext: daysUntilNext,
      solarLongitude: Math.round(solarDeg * 10) / 10
    };
  }

  function renderLiveSolarTermWidget(enM) {
    var now = new Date();
    var info = computeLiveSolarTerm(now);
    var cur = info.current;
    var nxt = info.next;
    var dateStr = now.toISOString().slice(0, 10);
    return (
      '<div class="card mb-2" style="padding:1.05rem 1.25rem;border-left:4px solid var(--jade-green);background:var(--bg-jade-soft);">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">' +
          '<div>' +
            '<div class="editorial-kicker" style="color:var(--jade-green);">' +
              (enM ? ("LIVE ASTRONOMICAL SOLAR TERM · " + dateStr + " (" + info.solarLongitude + "° Ecliptic)") : ("TIẾT KHÍ THIÊN VĂN HÔM NAY · " + dateStr + " (Hoàng kinh " + info.solarLongitude + "°)")) +
            '</div>' +
            '<h3 style="margin:0.15rem 0;font-family:var(--font-editorial);font-size:1.3rem;">' +
              '<span class="hanzi" style="color:var(--imperial-red);">' + esc(cur.zh) + '</span> · ' +
              esc(enM ? cur.en : cur.vi) + ' <span style="font-size:0.86rem;font-weight:400;color:var(--text-muted);">(' + (enM ? ("Approx. " + cur.approx) : ("Khoảng " + cur.approx)) + ')</span>' +
            '</h3>' +
            '<p style="margin:0.2rem 0 0;font-size:0.84rem;color:var(--text-secondary);">' + esc(enM ? cur.noteEn : cur.noteVi) + '</p>' +
          '</div>' +
          '<div style="border:1px solid var(--hairline);background:var(--bg-paper);padding:0.55rem 0.85rem;font-size:0.8rem;min-width:190px;">' +
            '<div style="color:var(--text-muted);font-weight:700;font-size:0.72rem;text-transform:uppercase;">' + (enM ? "Next Solar Term" : "Tiết khí Tiếp theo") + '</div>' +
            '<div><strong class="hanzi" style="color:var(--imperial-red);">' + esc(nxt.zh) + '</strong> · ' + esc(enM ? nxt.en : nxt.vi) + '</div>' +
            '<div style="color:var(--jade-green);font-weight:600;margin-top:0.15rem;">' + (enM ? ("In ~" + info.daysUntilNext + " days") : ("Còn khoảng " + info.daysUntilNext + " ngày")) + '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  // 4,000-Year Craft Timeline on Museum Page
  var CRAFT_STAGES = [
    { id: "all", periodFilter: "all", era: "~3300 BCE", zh: "良渚玉器", vi: "Ngọc Lương Chử", en: "Liangzhu Jade" },
    { id: "shang-zhou", periodFilter: "shang-zhou", era: "~1600–256 BCE", zh: "商周青铜", vi: "Thanh đồng Thương–Chu", en: "Shang–Zhou Bronze" },
    { id: "qin-han", periodFilter: "qin-han", era: "221 BCE–220 CE", zh: "秦汉漆帛", vi: "Sơn mài & Tơ lụa Hán", en: "Qin–Han Lacquer & Silk" },
    { id: "sui-tang", periodFilter: "tang", era: "581–907 CE", zh: "唐代三彩", vi: "Đường Tam Thải", en: "Tang Sancai" },
    { id: "song", periodFilter: "song", era: "960–1279 CE", zh: "宋代名窑", vi: "Ngũ Đại Danh Diêu Tống", en: "Song Five Great Kilns" },
    { id: "ming-qing", periodFilter: "ming-qing", era: "1368–1911 CE", zh: "景德镇青花", vi: "Thanh Hoa Cảnh Đức Trấn", en: "Ming–Qing Blue & White" }
  ];

  function renderCraftTimeline4000(activePeriod, enM) {
    return (
      '<section class="card mb-2" style="padding:1rem 1.25rem;border-left:4px solid var(--antique-gold);">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;">' +
          '<div>' +
            '<div class="editorial-kicker" style="color:var(--antique-gold);">' + (enM ? "4,000-YEAR ARTISANAL EVOLUTION AXIS" : "TRỤC TIẾN TRÌNH KỸ NGHỆ NGHỆ NHÂN 4.000 NĂM") + '</div>' +
            '<strong style="font-size:0.95rem;">' + (enM ? "Click any material milestone to filter National Treasures by era" : "Nhấp mốc chất liệu để lọc Bảo vật theo kỷ nguyên chế tác") + '</strong>' +
          '</div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:0.45rem;">' +
          CRAFT_STAGES.map(function (st) {
            var isAct = activePeriod === st.periodFilter && st.id !== "all";
            return '<button type="button" class="filter-pill ' + (isAct ? "active" : "") + '" data-action="v3-craft-period" data-period="' + st.periodFilter + '" style="flex-direction:column;align-items:flex-start;text-align:left;padding:0.45rem 0.65rem;border-radius:0;">' +
              '<span style="font-size:0.68rem;opacity:0.8;">' + esc(st.era) + '</span>' +
              '<strong style="font-size:0.8rem;">' + esc(enM ? st.en : st.vi) + '</strong>' +
              '<span class="hanzi" style="font-size:0.75rem;color:var(--imperial-red);">' + esc(st.zh) + '</span>' +
            '</button>';
          }).join("") +
        '</div>' +
      '</section>'
    );
  }

  // Classics 4-Column Toggle State
  var classicCols = { sc: true, tc: true, py: true, tr: true };

  function renderClassicsColToggles(enM) {
    var btns = [
      { k: "sc", vi: "Giản thể 简", en: "Simplified" },
      { k: "tc", vi: "Phồn thể 繁", en: "Traditional" },
      { k: "py", vi: "Pinyin & Hán–Việt", en: "Pinyin & Sino–Viet" },
      { k: "tr", vi: "Dịch & Bình chú", en: "Translation & Notes" }
    ];
    return (
      '<div class="v3-col-toggle-bar" style="display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap;margin-top:0.75rem;padding-top:0.65rem;border-top:1px dashed var(--hairline);">' +
        '<span style="font-size:0.74rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">' + (enM ? "4-Column Reader:" : "Bật/Tắt 4 Cột Đọc:") + '</span>' +
        btns.map(function (b) {
          return '<button type="button" class="filter-pill ' + (classicCols[b.k] ? "active" : "") + '" data-action="v3-toggle-classic-col" data-col="' + b.k + '" aria-pressed="' + (classicCols[b.k] ? "true" : "false") + '" style="font-size:0.74rem;padding:0.22rem 0.55rem;">' +
            esc(enM ? b.en : b.vi) +
          '</button>';
        }).join("") +
      '</div>'
    );
  }

  // Knowledge Map Category Filter
  var kmapCat = "all";
  var KMAP_CATS = [
    { id: "all", vi: "Tất cả Trụ cột", en: "All Pillars" },
    { id: "philosophy", vi: "Triết học & Đạo học", en: "Philosophy" },
    { id: "history", vi: "Sử học & Thể chế", en: "History" },
    { id: "art", vi: "Quốc họa & Mỹ học", en: "Arts" },
    { id: "sino-viet", vi: "Giao thoa Việt–Trung", en: "Sino–Viet" }
  ];

  function renderKMapFilterBar(enM) {
    return (
      '<div style="display:flex;gap:0.35rem;flex-wrap:wrap;margin:0.65rem 0;">' +
        KMAP_CATS.map(function (c) {
          return '<button type="button" class="filter-pill ' + (kmapCat === c.id ? "active" : "") + '" data-action="v3-filter-kmap" data-cat="' + c.id + '" style="font-size:0.75rem;padding:0.22rem 0.6rem;">' +
            esc(enM ? c.en : c.vi) +
          '</button>';
        }).join("") +
      '</div>'
    );
  }

  // Handscroll Pixel Loupe + Compare Sync Zoom state
  var loupeEnabled = false;
  var syncCompareZoom = 1;

  function renderHandscrollHudControls(isScroll, enM) {
    return (
      '<button type="button" class="lightbox-tool-btn ' + (loupeEnabled ? "lightbox-tool-btn-primary" : "") + '" data-action="v3-toggle-loupe" title="' + (enM ? "2.4x Seal & Colophon Loupe" : "Kính lúp soi ấn triện 2.4x") + '">' +
        (enM ? (loupeEnabled ? "Seal Loupe ON" : "Seal Loupe 2.4×") : (loupeEnabled ? "Kính lúp BẬT" : "Soi Triện 2.4×")) +
      '</button>' +
      (isScroll ? '<span style="font-size:0.74rem;color:#E8D2A0;padding:0 0.4rem;">' + (enM ? "← Read RTL (Right to Left)" : "← Đọc trường quyển từ Phải sang Trái") + '</span>' : '')
    );
  }

  // Article ScrollSpy & Reading Progress Bar
  var scrollBound = false;
  function ensureProgressBarEl() {
    var bar = document.getElementById("cce-top-read-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "cce-top-read-bar";
      bar.style.cssText = "position:fixed;top:0;left:0;height:2px;width:0%;background:var(--imperial-red,#8C2318);z-index:990;transition:width 0.08s linear;pointer-events:none;";
      document.body.appendChild(bar);
    }
    return bar;
  }

  function updateReadingProgress() {
    var prose = document.querySelector(".article-prose");
    var bar = ensureProgressBarEl();
    if (!prose) {
      bar.style.width = "0%";
      return;
    }
    var rect = prose.getBoundingClientRect();
    var totalH = Math.max(1, prose.offsetHeight - window.innerHeight * 0.55);
    var scrolled = Math.max(0, Math.min(totalH, -rect.top + window.innerHeight * 0.25));
    var pct = Math.max(0, Math.min(100, Math.round((scrolled / totalH) * 100)));
    bar.style.width = pct + "%";

    var railFill = document.querySelector(".rail-progress-fill");
    if (railFill) railFill.style.width = Math.max(10, pct) + "%";

    var remainEl = document.getElementById("cce-read-remaining");
    if (remainEl) {
      var baseMins = Number(remainEl.getAttribute("data-mins") || "8");
      var leftMins = Math.max(1, Math.ceil((baseMins * (100 - pct)) / 100));
      var isEn = window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en";
      remainEl.textContent = pct >= 95 ? (isEn ? "Complete" : "Hoàn tất") : (isEn ? ("~" + leftMins + " min left (" + pct + "%)") : ("~" + leftMins + " phút còn lại (" + pct + "%)"));
    }

    // ScrollSpy highlight active TOC section
    var headings = prose.querySelectorAll("[id^='sec-']");
    var activeSecId = null;
    for (var i = 0; i < headings.length; i++) {
      var top = headings[i].getBoundingClientRect().top;
      if (top <= 165) activeSecId = headings[i].id;
    }
    if (activeSecId) {
      var links = document.querySelectorAll(".article-toc-link");
      for (var j = 0; j < links.length; j++) {
        var isMatch = links[j].getAttribute("data-target") === activeSecId;
        links[j].classList.toggle("active", isMatch);
      }
    }
  }

  function bindCanvasLoupeAndScroll() {
    var canvas = document.getElementById("painting-zoom-canvas");
    if (canvas && canvas.classList.contains("handscroll-mode") && !canvas.dataset.rtlInit) {
      canvas.dataset.rtlInit = "1";
      // Classic handscroll starts reading from the far RIGHT colophon edge
      canvas.scrollLeft = canvas.scrollWidth;
    }
    if (canvas && !canvas.dataset.loupeBound) {
      canvas.dataset.loupeBound = "1";
      canvas.addEventListener("mousemove", function (ev) {
        var lens = document.getElementById("cce-seal-loupe");
        if (!loupeEnabled) { if (lens) lens.style.display = "none"; return; }
        var img = canvas.querySelector("img");
        if (!img) return;
        if (!lens) {
          lens = document.createElement("div");
          lens.id = "cce-seal-loupe";
          lens.style.cssText = "position:fixed;width:170px;height:170px;border:2px solid #C89B3C;background:#0F1012;background-repeat:no-repeat;pointer-events:none;z-index:995;box-shadow:0 8px 24px rgba(0,0,0,0.65);";
          document.body.appendChild(lens);
        }
        var ir = img.getBoundingClientRect();
        if (ev.clientX < ir.left || ev.clientX > ir.right || ev.clientY < ir.top || ev.clientY > ir.bottom) {
          lens.style.display = "none";
          return;
        }
        var rx = ((ev.clientX - ir.left) / Math.max(1, ir.width)) * 100;
        var ry = ((ev.clientY - ir.top) / Math.max(1, ir.height)) * 100;
        lens.style.display = "block";
        lens.style.left = Math.min(window.innerWidth - 185, ev.clientX + 18) + "px";
        lens.style.top = Math.min(window.innerHeight - 185, ev.clientY + 18) + "px";
        lens.style.backgroundImage = 'url("' + img.currentSrc + '")';
        lens.style.backgroundSize = (ir.width * 2.4) + "px " + (ir.height * 2.4) + "px";
        lens.style.backgroundPosition = rx + "% " + ry + "%";
      });
      canvas.addEventListener("mouseleave", function () {
        var lens = document.getElementById("cce-seal-loupe");
        if (lens) lens.style.display = "none";
      });
    }
    if (!scrollBound) {
      scrollBound = true;
      window.addEventListener("scroll", updateReadingProgress, { passive: true });
    }
    updateReadingProgress();
  }

  window.CCE_GALLERY_V3 = {
    renderLiveSolarTermWidget: renderLiveSolarTermWidget,
    renderCraftTimeline4000: renderCraftTimeline4000,
    renderClassicsColToggles: renderClassicsColToggles,
    getClassicCols: function () { return classicCols; },
    toggleClassicCol: function (k) { if (k && Object.prototype.hasOwnProperty.call(classicCols, k)) classicCols[k] = !classicCols[k]; },
    renderKMapFilterBar: renderKMapFilterBar,
    getKMapCat: function () { return kmapCat; },
    setKMapCat: function (c) { kmapCat = c || "all"; },
    renderHandscrollHudControls: renderHandscrollHudControls,
    toggleLoupe: function () {
      loupeEnabled = !loupeEnabled;
      var lens = document.getElementById("cce-seal-loupe");
      if (lens && !loupeEnabled) lens.style.display = "none";
    },
    getSyncCompareZoom: function () { return syncCompareZoom; },
    stepSyncCompareZoom: function (delta) {
      syncCompareZoom = Math.max(1, Math.min(2.4, Math.round((syncCompareZoom + delta) * 10) / 10));
    },
    resetSyncCompareZoom: function () { syncCompareZoom = 1; },
    afterRender: bindCanvasLoupeAndScroll
  };
})();
