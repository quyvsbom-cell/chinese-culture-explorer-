// ============================================================================
// CHINESE CULTURE EXPLORER V9.0 — The Met & Palace Museum RTL Handscroll Viewer
// Spec 4: Right-to-Left Unrolling Scroll + Synced Commentary + Museum Wall Placard
// ============================================================================
(function () {
  "use strict";

  var activeScrollIdx = 0;
  var driftRaf = 0;
  var driftActive = false;

  var SCROLL_SCRIPTS = {
    "qingming-shanghe": {
      cm: "528.7 cm",
      chapters: [
        { pct: 0, vi: "Mép Phải (0%) · Ngoại ô Đông Kinh Biện Lương lúc bình minh: đoàn lạc đà và lừa thồ củi tiến vào cửa thành.", en: "Right Edge (0%) · Bianjing outskirts at dawn: willow groves and pack trains nearing the capital." },
        { pct: 25, vi: "25% · Bờ sông Biện nhộn nhịp bến thuyền lương thực, hàng quán mở cửa đón khách thương.", en: "25% · Busiest riverbank wharves along the Bian Canal unloading grain barges." },
        { pct: 50, vi: "50% · Đỉnh cao kịch tính tại Cầu Hồng Kiều: thuyền buồm hạ cột gập buồm vượt vòm cầu gỗ không trụ.", en: "50% · Rainbow Bridge climax: crew lowering masts in unison to clear the single-span wooden arch." },
        { pct: 75, vi: "75% · Phố thị sầm uất cửa thành Bắc Tống với tửu lâu, tiệm thuốc và người xem bói chữ.", en: "75% · Bustling inner-city avenues lined with wine pavilions, apothecaries, and fortune-tellers." },
        { pct: 100, vi: "Mép Trái (100%) · Kết thúc trường quyển nơi cổng thành và khu quan nha, hoàn chỉnh chu trình xã hội Biện Kinh.", en: "Left Edge (100%) · Concluding gatehouses and official compounds completing Northern Song urban panorama." }
      ]
    },
    "qianli-jiangshan": {
      cm: "1191.5 cm",
      chapters: [
        { pct: 0, vi: "Mép Phải (0%) · Dãy núi khoáng Thạch Thanh – Thạch Lục khởi đầu trên nền lụa khổ rộng hơn 11 mét.", en: "Right Edge (0%) · Opening azurite-malachite peaks rising from tranquil silk washes." },
        { pct: 25, vi: "25% · Cụm thôn xóm thủy tạ bên hồ và cầu gỗ dài nối hai triền đảo.", en: "25% · Waterside hamlets connected by elongated timber boardwalks and footbridges." },
        { pct: 50, vi: "50% · Chủ sơn trùng điệp vươn cao chính giữa quyển, sắc khoáng lam-lục ánh lên chiều sâu không gian.", en: "50% · Towering central mountain massif glowing with layered malachite and azurite minerals." },
        { pct: 75, vi: "75% · Vịnh nước mở rộng theo pháp Bình Viễn, thuyền ngư phủ lướt nhẹ dưới chân vách đá.", en: "75% · Expands into horizontal level-distance bays with solitary fishing skiffs." },
        { pct: 100, vi: "Mép Trái (100%) · Đỉnh sơn lộ thu dần vào sương khói vô tận khép lại kiệt tác tuổi 18 của Vương Hi Mạnh.", en: "Left Edge (100%) · Distant peaks dissolving into silk mist concluding Wang Ximeng's youthful masterpiece." }
      ]
    },
    "fuchun-shanju": {
      cm: "636.9 cm",
      chapters: [
        { pct: 0, vi: "Mép Phải (0%) · Hoàng Công Vọng mở tranh bằng nét khô phóng khoáng tả dải đồi sông Phú Xuân.", en: "Right Edge (0%) · Huang Gongwang begins with dry calligraphic hemp-fiber strokes along the Fuchun River." },
        { pct: 33, vi: "33% · Bút pháp Tích Mặc đan xen khoảng trắng Lưu Bạch tạo cảm giác sương sớm trôi ngang sườn núi.", en: "33% · Accumulated ink layers and breathing negative space evoking morning river mist." },
        { pct: 66, vi: "66% · Nhà tranh ẩn sĩ bên rặng tùng cổ thụ biểu tượng tinh thần văn nhân Nguyên triều.", en: "66% · Reclusive thatched studio under twisted pines embodying Yuan literati detachment." },
        { pct: 100, vi: "Mép Trái (100%) · Đỉnh núi cuối cùng vút lên thanh thoát, chấm dứt 7 năm họa sư thai nghén trường quyển.", en: "Left Edge (100%) · Final soaring summit concluding seven years of unhurried contemplative painting." }
      ]
    }
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  var HANDSCROLL_HI_RES = {
    "qingming-shanghe": "assets/images/handscrolls/qingming-shanghe.jpg",
    "qianli-jiangshan": "assets/images/handscrolls/qianli-jiangshan.jpg",
    "fuchun-shanju": "assets/images/handscrolls/fuchun-shanju.jpg",
    "luoshenfu-tu": "assets/images/handscrolls/luoshenfu-tu.jpg",
    "hanxizai-yeyan": "assets/images/handscrolls/hanxizai-yeyan.jpg",
    "bunian-tu": "assets/images/handscrolls/bunian-tu.jpg"
  };

  function getHandscrollList() {
    var all = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    var preferred = ["qingming-shanghe", "qianli-jiangshan", "fuchun-shanju", "luoshenfu-tu", "hanxizai-yeyan", "bunian-tu"];
    var out = [];
    preferred.forEach(function (id) {
      var found = all.find(function (p) { return p.id === id && p.image; });
      if (found) out.push(found);
    });
    if (!out.length) out = all.filter(function (p) { return p.image; }).slice(0, 4);
    return out;
  }

  function pickCommentary(item, pct, enM) {
    var script = SCROLL_SCRIPTS[item.id];
    if (script && script.chapters && script.chapters.length) {
      var chosen = script.chapters[0];
      script.chapters.forEach(function (ch) {
        if (pct >= ch.pct) chosen = ch;
      });
      return enM ? chosen.en : chosen.vi;
    }
    return enM
      ? "Unrolling Right-to-Left at " + pct + "%: observe spatial progression and rhythmic brush calligraphy without intrusive text overlays."
      : "Đang mở trường quyển Phải → Trái ở mốc " + pct + "%: theo dõi nhịp điệu bố cục tam viễn và bút pháp truyền thống tách biệt khỏi chú giải.";
  }

  function renderSection(enM) {
    var list = getHandscrollList();
    if (!list.length) return "";
    if (activeScrollIdx >= list.length) activeScrollIdx = 0;
    var item = list[activeScrollIdx];
    var dyn = item.dynasty ? (enM ? (item.dynasty.nameEn || item.dynasty.nameVi) : item.dynasty.nameVi) : "";
    var artist = item.artist ? (enM ? (item.artist.nameEn || item.artist.nameVi) : item.artist.nameVi) : "";
    var scriptInfo = SCROLL_SCRIPTS[item.id];
    var physCm = (scriptInfo && scriptInfo.cm) || item.dimensions || "Scroll";
    var scrollSrc = HANDSCROLL_HI_RES[item.id] || item.image;

    return (
      '<section class="v9-exhibition-dark" id="v9-handscroll-stage" aria-label="' + (enM ? "Right-to-Left Handscroll Exhibition" : "Trình trải cuộn trường quyển Phải sang Trái") + '">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;margin-bottom:10px;">' +
      '    <div>' +
      '      <div class="v9-kicker" style="color:#E5A93C;">' + (enM ? "HANDSCROLL GALLERY · RIGHT-TO-LEFT VIEWING" : "KHÔNG GIAN TRƯỜNG QUYỂN · ĐỌC TỪ PHẢI SANG TRÁI") + "</div>" +
      '      <h2 style="margin:0;font-family:var(--font-editorial,serif);font-size:1.48rem;color:#F3EFE6;">' + esc(enM ? (item.titleEn || item.titleVi) : item.titleVi) + ' <span class="zh-text" style="color:#E5A93C;">' + esc(item.titleZh) + "</span></h2>" +
      '    </div>' +
      '    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">' +
      list.map(function (sc, idx) {
        var on = idx === activeScrollIdx;
        return '<button type="button" class="v9-btn v9-btn-sm ' + (on ? "is-primary" : "") + '" data-v9-pick-scroll="' + idx + '">' + esc(sc.titleZh || sc.id) + "</button>";
      }).join("") +
      '      <button type="button" class="v9-btn v9-btn-sm" data-action="open-painting" data-id="' + esc(item.id) + '">' + (enM ? "Inspect Detail" : "Phóng to chi tiết") + "</button>" +
      '    </div>' +
      '  </div>' +
      '  <div class="v9-handscroll-viewport" id="v9-rtl-viewport" data-direction="rtl" tabindex="0">' +
      '    <div class="v9-handscroll-track">' +
      '      <img src="' + esc(scrollSrc) + '" alt="' + esc(enM ? (item.titleEn || item.titleVi) : item.titleVi) + '" draggable="false" onerror="this.onerror=null;this.src=\'' + esc(item.image) + '\';" />' +
      '    </div>' +
      '  </div>' +
      '  <div style="display:flex;align-items:center;gap:12px;margin-top:10px;flex-wrap:wrap;">' +
      '    <button type="button" class="v9-btn v9-btn-sm is-primary" id="v9-rtl-drift-btn" data-v9-toggle-drift="1">' + (driftActive ? (enM ? "Pause Auto-Unroll" : "Tạm dừng trải tranh") : (enM ? "Auto-Unroll R→L" : "Tự động trải Phải → Trái")) + "</button>" +
      '    <label for="v9-rtl-range" style="font-size:0.78rem;color:#CCC5B8;">' + (enM ? "Scroll R→L:" : "Mốc mở Phải → Trái:") + "</label>" +
      '    <input id="v9-rtl-range" type="range" min="0" max="100" value="0" style="flex:1;min-width:160px;accent-color:#E5A93C;" />' +
      '    <span id="v9-rtl-pct-badge" style="font-family:var(--font-mono,monospace);font-size:0.8rem;color:#E5A93C;">0% R→L · ' + esc(physCm) + "</span>" +
      '  </div>' +
      '  <div class="v9-placard-split">' +
      '    <aside aria-label="' + (enM ? "Museum Wall Placard" : "Nhãn tường bảo tàng") + '" style="background:#1D1B18;padding:14px;border:1px solid rgba(229,169,60,0.22);">' +
      '      <div style="font-size:0.72rem;letter-spacing:0.1em;color:#E5A93C;text-transform:uppercase;margin-bottom:6px;">' + (enM ? "CURATORIAL PLACARD" : "THÔNG TIN GIÁM TUYỂN") + "</div>" +
      '      <div style="font-size:0.86rem;line-height:1.65;color:#F3EFE6;">' +
      '        <div><strong>' + (enM ? "Artist:" : "Họa gia:") + "</strong> " + esc(artist) + "</div>" +
      '        <div><strong>' + (enM ? "Period:" : "Niên đại:") + "</strong> " + esc(dyn) + "</div>" +
      '        <div><strong>' + (enM ? "Dimensions:" : "Chiều dài:") + "</strong> " + esc(physCm) + "</div>" +
      '        <div><strong>' + (enM ? "Collection:" : "Lưu trữ:") + "</strong> " + esc(enM ? (item.museumEn || item.museum) : item.museum) + "</div>" +
      '      </div>' +
      '    </aside>' +
      '    <div style="background:#1D1B18;padding:14px;border:1px solid rgba(229,169,60,0.22);">' +
      '      <div style="font-size:0.72rem;letter-spacing:0.1em;color:#E5A93C;text-transform:uppercase;margin-bottom:6px;">' + (enM ? "SCROLL-SYNCED COMMENTARY" : "THUYẾT MINH ĐỒNG BỘ THEO VỊ TRÍ CUỘN") + "</div>" +
      '      <p id="v9-rtl-commentary" style="margin:0;font-size:0.95rem;line-height:1.7;color:#F3EFE6;" aria-live="polite">' + esc(pickCommentary(item, 0, enM)) + "</p>" +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  function renderExhibitionHallBanner(enM) {
    return (
      '<section class="v9-exhibition-dark" style="padding:18px 20px;margin-bottom:20px;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">' +
      '    <div>' +
      '      <div class="v9-kicker" style="color:#E5A93C;">' + (enM ? "EXHIBITION DARK ROOM · 5 ARCHIVAL GALLERIES" : "PHÒNG TRƯNG BÀY ÁNH SÁNG TỐI · 5 HÀNH LANG BẢO VẬT") + "</div>" +
      '      <strong style="font-family:var(--font-editorial,serif);font-size:1.15rem;">' + (enM ? "Contrast-Calibrated Curatorial Display (#141311) — Zero Text Over Relics" : "Không gian chiếu sáng bảo tàng chuẩn WCAG AAA (#141311) — Tách biệt chữ khỏi bề mặt bảo vật") + "</strong>" +
      '    </div>' +
      '    <button type="button" class="v9-btn v9-btn-sm is-primary" data-action="nav" data-page="paintings">' + (enM ? "Open RTL Handscroll Viewer →" : "Mở Trình Trải Cuộn Trường Quyển →") + "</button>" +
      '  </div>' +
      '</section>'
    );
  }

  function initRtlPosition(viewport) {
    if (!viewport) return;
    var maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    viewport.scrollLeft = maxScroll;
  }

  function syncUiFromScroll(viewport, item, physCm, enM) {
    var maxScroll = viewport.scrollWidth - viewport.clientWidth;
    var pct = maxScroll > 0 ? Math.max(0, Math.min(100, Math.round(((maxScroll - viewport.scrollLeft) / maxScroll) * 100))) : 0;
    var range = document.getElementById("v9-rtl-range");
    var badge = document.getElementById("v9-rtl-pct-badge");
    var comm = document.getElementById("v9-rtl-commentary");
    if (range) range.value = String(pct);
    if (badge) badge.textContent = pct + "% R→L · " + physCm;
    if (comm) comm.textContent = pickCommentary(item, pct, enM);
  }

  function stopDrift() {
    driftActive = false;
    if (driftRaf) {
      cancelAnimationFrame(driftRaf);
      driftRaf = 0;
    }
    var btn = document.getElementById("v9-rtl-drift-btn");
    if (btn) btn.textContent = "Tự động trải Phải → Trái";
  }

  function mount(enM) {
    var stage = document.getElementById("v9-handscroll-stage");
    var viewport = document.getElementById("v9-rtl-viewport");
    if (!stage || !viewport) return;
    var list = getHandscrollList();
    var item = list[activeScrollIdx] || list[0];
    if (!item) return;
    var physCm = (SCROLL_SCRIPTS[item.id] && SCROLL_SCRIPTS[item.id].cm) || item.dimensions || "Scroll";

    var imgEl = viewport.querySelector("img");
    var alignRightEdge = function () {
      initRtlPosition(viewport);
      syncUiFromScroll(viewport, item, physCm, enM);
    };
    requestAnimationFrame(alignRightEdge);
    if (imgEl) {
      if (imgEl.complete && imgEl.naturalWidth > 0) alignRightEdge();
      imgEl.addEventListener("load", alignRightEdge);
    }

    if (stage.dataset.v9Bound === "1") return;
    stage.dataset.v9Bound = "1";

    var dragActive = false;
    var dragStartX = 0;
    var dragStartScroll = 0;
    viewport.addEventListener("mousedown", function (e) {
      if (e.button !== 0) return;
      stopDrift();
      dragActive = true;
      dragStartX = e.clientX;
      dragStartScroll = viewport.scrollLeft;
      viewport.classList.add("is-dragging");
    });
    window.addEventListener("mousemove", function (e) {
      if (!dragActive) return;
      viewport.scrollLeft = dragStartScroll - (e.clientX - dragStartX);
    });
    window.addEventListener("mouseup", function () {
      if (!dragActive) return;
      dragActive = false;
      viewport.classList.remove("is-dragging");
    });

    viewport.addEventListener("scroll", function () {
      var curItem = getHandscrollList()[activeScrollIdx] || item;
      var curCm = (SCROLL_SCRIPTS[curItem.id] && SCROLL_SCRIPTS[curItem.id].cm) || curItem.dimensions || "Scroll";
      syncUiFromScroll(viewport, curItem, curCm, enM);
    }, { passive: true });

    viewport.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        viewport.scrollLeft -= e.deltaY * 1.1;
      }
    }, { passive: false });

    stage.addEventListener("input", function (e) {
      if (e.target && e.target.id === "v9-rtl-range") {
        var maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
        var pct = parseFloat(e.target.value) || 0;
        viewport.scrollLeft = maxScroll * (1 - pct / 100);
      }
    });

    stage.addEventListener("click", function (e) {
      var pickBtn = e.target && e.target.closest ? e.target.closest("[data-v9-pick-scroll]") : null;
      if (pickBtn) {
        stopDrift();
        activeScrollIdx = parseInt(pickBtn.getAttribute("data-v9-pick-scroll"), 10) || 0;
        var parent = stage.parentElement;
        if (parent) {
          stage.outerHTML = renderSection(enM);
          mount(enM);
        }
        return;
      }

      var driftBtn = e.target && e.target.closest ? e.target.closest("[data-v9-toggle-drift]") : null;
      if (driftBtn) {
        if (driftActive) {
          stopDrift();
        } else {
          driftActive = true;
          driftBtn.textContent = enM ? "Pause Auto-Unroll" : "Tạm dừng trải tranh";
          var lastTs = performance.now();
          var step = function (now) {
            if (!driftActive) return;
            var dt = Math.min(50, now - lastTs);
            lastTs = now;
            if (viewport.scrollLeft <= 1) {
              stopDrift();
              return;
            }
            viewport.scrollLeft -= dt * 0.055;
            driftRaf = requestAnimationFrame(step);
          };
          driftRaf = requestAnimationFrame(step);
        }
      }
    });
  }

  window.CCE_V9_HANDSCROLL = {
    renderSection: renderSection,
    renderExhibitionHallBanner: renderExhibitionHallBanner,
    mount: mount,
    stopDrift: stopDrift
  };
})();
