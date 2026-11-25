// ============================================================================
// CHINESE CULTURE EXPLORER V9.0 — Trip.com / Lonely Planet Field Itinerary Hub
// Spec 5b: Day-by-Day Planner + 240h Checklist + Driver Card + Print Booklet A4
// ============================================================================
(function () {
  "use strict";

  var KEY = "cce_v9_trip_plan";
  var drawerOpen = false;
  var driverStopId = null;
  var lastDeleted = null;

  var CHECKLIST_240H = [
    { vi: "Hộ chiếu còn hạn trên 6 tháng & 2 trang trống", en: "Passport valid >6 months with 2 blank pages" },
    { vi: "Vé máy bay/tàu nối chuyến đi nước thứ 3 trong 240 giờ", en: "Confirmed onward ticket to 3rd country/region within 240h" },
    { vi: "Xác nhận đặt phòng khách sạn (tốt nhất bản tiếng Trung)", en: "Hotel booking printout with Chinese address" },
    { vi: "Liên kết thẻ Visa/Master vào Alipay & WeChat Pay", en: "Bind international card to Alipay & WeChat Pay" },
    { vi: "Cài sẵn ứng dụng bản đồ Amap/Baidu & Railway 12306", en: "Install Amap navigation & Railway 12306" },
    { vi: "Chuẩn bị eSIM roaming hoặc SIM du lịch không chặn mạng", en: "Activate international roaming eSIM" },
    { vi: "Tờ khai Nhập cảnh Transit 240h & lịch trình in A4", en: "Complete 240h Arrival Card & carry A4 booklet" },
    { vi: "Lưu địa chỉ chữ Hán ga tàu/khách sạn vào Thẻ Tài Xế", en: "Save Chinese driver cards offline" }
  ];

  var STARTER_TEMPLATES = [
    {
      id: "tpl-bj",
      vi: "Bắc Kinh – Thiên Tân Di Sản 5 Ngày",
      en: "Beijing – Tianjin Heritage (5D)",
      days: [
        { dayNumber: 1, stops: [{ id: "prov-beijing", nameVi: "Cố Cung & Đồng Nhân Đường Đại Sách Lan", nameEn: "Forbidden City & Tongrentang Dashilar", nameZh: "故宫博物院 / 北京同仁堂大栅栏", pinyin: "Gùgōng Bówùyuàn / Běijīng Tóngréntáng", slot: "morning" }] },
        { dayNumber: 2, stops: [{ id: "great-wall-mutianyu", nameVi: "Trường Thành Mộ Điền Dụ & Thiên Đàn", nameEn: "Mutianyu Great Wall & Temple of Heaven", nameZh: "慕田峪长城 / 天坛公园", pinyin: "Mùtiányù Chángchéng / Tiāntán", slot: "afternoon" }] },
        { dayNumber: 3, stops: [{ id: "prov-tianjin", nameVi: "Thiên Tân Phố Cổ & Ngũ Đại Đạo", nameEn: "Tianjin Ancient Culture Street", nameZh: "天津古文化街", pinyin: "Tiānjīn Gǔwénhuàjiē", slot: "morning" }] }
      ]
    },
    {
      id: "tpl-jn",
      vi: "Giang Nam Thượng Hải – Tô Châu – Hàng Châu 6 Ngày",
      en: "Jiangnan Shanghai – Suzhou – Hangzhou (6D)",
      days: [
        { dayNumber: 1, stops: [{ id: "prov-shanghai", nameVi: "Bến Thượng Hải & Dự Viên", nameEn: "Shanghai Bund & Yu Garden", nameZh: "上海外滩 / 豫园", pinyin: "Shànghǎi Wàitān / Yùyuán", slot: "morning" }] },
        { dayNumber: 2, stops: [{ id: "prov-jiangsu", nameVi: "Chuyết Chính Viên & Bảo Tàng Tô Châu", nameEn: "Humble Administrator's Garden & Suzhou Museum", nameZh: "苏州拙政园 / 苏州博物馆", pinyin: "Zhuōzhèngyuán / Sūzhōu Bówùguǎn", slot: "morning" }] },
        { dayNumber: 3, stops: [{ id: "prov-zhejiang", nameVi: "Tây Hồ Hàng Châu & Thôn Trà Long Tỉnh", nameEn: "West Lake & Longjing Tea Village", nameZh: "杭州西湖 / 龙井村", pinyin: "Xīhú / Lóngjǐngcūn", slot: "afternoon" }] }
      ]
    },
    {
      id: "tpl-yn",
      vi: "Vân Nam Côn Minh – Đại Lý – Lệ Giang 7 Ngày",
      en: "Yunnan Kunming – Dali – Lijiang (7D)",
      days: [
        { dayNumber: 1, stops: [{ id: "prov-yunnan", nameVi: "Hồ Điền Trì & Rừng Đá Thạch Lâm", nameEn: "Dianchi Lake & Stone Forest", nameZh: "昆明石林风景区", pinyin: "Kūnmíng Shílín", slot: "morning" }] },
        { dayNumber: 2, stops: [{ id: "dali-lijiang", nameVi: "Thành Cổ Đại Lý & Cổ Trấn Lệ Giang", nameEn: "Dali & Lijiang Old Town", nameZh: "大理古城 / 丽江古城", pinyin: "Dàlǐ Gǔchéng / Lìjiāng Gǔchéng", slot: "afternoon" }] }
      ]
    }
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function defaultPlan() {
    return {
      version: 1,
      tripTitle: "Hành Trình Văn Hóa Trung Hoa 240h",
      activeDay: 1,
      checklist: CHECKLIST_240H.map(function () { return false; }),
      days: [{ dayNumber: 1, stops: [] }]
    };
  }

  function loadPlan() {
    var Safe = window.CCE_V9_LOADER && window.CCE_V9_LOADER.SafeStorage;
    var p = Safe ? Safe.getJSON(KEY, null) : null;
    if (!p || !Array.isArray(p.days) || !p.days.length) return defaultPlan();
    if (!Array.isArray(p.checklist) || p.checklist.length !== CHECKLIST_240H.length) {
      p.checklist = CHECKLIST_240H.map(function (_, i) { return Boolean(p.checklist && p.checklist[i]); });
    }
    return p;
  }

  function savePlan(plan) {
    var Safe = window.CCE_V9_LOADER && window.CCE_V9_LOADER.SafeStorage;
    if (Safe) Safe.setJSON(KEY, plan);
    updateFabBadge(plan);
  }

  function totalStopsCount(plan) {
    var sum = 0;
    (plan.days || []).forEach(function (d) { sum += (d.stops || []).length; });
    return sum;
  }

  function updateFabBadge(plan) {
    var fab = document.getElementById("v9-fab-trip");
    if (!fab) return;
    var cnt = totalStopsCount(plan);
    var span = fab.querySelector("span[data-v9-fab-cnt]");
    if (span) span.textContent = String(cnt);
  }

  function addStop(stop, enM) {
    var plan = loadPlan();
    var day = plan.days.find(function (d) { return d.dayNumber === (plan.activeDay || 1); }) || plan.days[0];
    if (!day.stops.some(function (s) { return s.id === stop.id; })) {
      day.stops.push({
        id: stop.id || "stop-" + Date.now(),
        nameVi: stop.nameVi || stop.id,
        nameEn: stop.nameEn || stop.nameVi || stop.id,
        nameZh: stop.nameZh || stop.nameVi || "",
        pinyin: stop.pinyin || "",
        slot: day.stops.length === 0 ? "morning" : (day.stops.length === 1 ? "afternoon" : "evening"),
        note: ""
      });
      savePlan(plan);
    }
    openDrawer(enM);
  }

  function renderFieldConciergeStrip(enM) {
    return (
      '<section class="v9-section-block" id="v9-sino-transit-concierge">' +
      '  <div class="v9-continue-strip" style="margin-bottom:0;">' +
      '    <div>' +
      '      <div class="v9-kicker">' + (enM ? "TRAVEL ITINERARY & 240H TRANSIT" : "SỔ TAY LỊCH TRÌNH VÀ QUÁ CẢNH 240 GIỜ") + "</div>" +
      '      <strong>' + (enM ? "Day-by-day route planner, fullscreen Chinese address card, and A4 booklet" : "Lập lịch trình theo ngày, thẻ chữ Hán đưa tài xế và sổ tay in A4 ngoại tuyến") + "</strong>" +
      "    </div>" +
      '    <div style="display:flex;gap:8px;flex-wrap:wrap;">' +
      '      <button type="button" class="v9-btn v9-btn-sm is-primary" onclick="window.CCE_V9_TRIP_PLANNER && window.CCE_V9_TRIP_PLANNER.openDrawer()">' + (enM ? "Open Trip Drawer" : "Mở Lịch Trình 240h") + "</button>" +
      '      <button type="button" class="v9-btn v9-btn-sm is-jade" onclick="window.CCE_V9_TRIP_PLANNER && window.CCE_V9_TRIP_PLANNER.printBooklet()">' + (enM ? "Print A4 Booklet" : "In Sổ Tay A4") + "</button>" +
      "    </div>" +
      "  </div>" +
      "</section>"
    );
  }

  function speakMandarin(text) {
    try {
      if (!window.speechSynthesis || !text) return;
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "zh-CN";
      u.rate = 0.92;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  function renderDrawerHtml(plan, enM) {
    var activeDay = plan.days.find(function (d) { return d.dayNumber === (plan.activeDay || 1); }) || plan.days[0];
    var doneChecklist = (plan.checklist || []).filter(Boolean).length;

    return (
      '<div class="v9-trip-drawer" role="dialog" aria-modal="true" aria-label="' + (enM ? "Trip Planner & 240h Checklist" : "Trình Lập Lịch Trình & Quá Cảnh 240h") + '">' +
      '  <header style="padding:14px 16px;border-bottom:1px solid var(--v9-border-hairline);display:flex;justify-content:space-between;align-items:center;gap:8px;">' +
      '    <div><div class="v9-kicker" style="margin:0;">' + (enM ? "DAY-BY-DAY PLANNER · 240H VISA-FREE" : "LỊCH TRÌNH DU KHẢO · MIỄN THỊ THỰC 240H") + '</div><strong style="font-size:1.08rem;">' + esc(plan.tripTitle) + "</strong></div>" +
      '    <button type="button" class="v9-btn v9-btn-sm is-primary" data-trip-act="close">×</button>' +
      "  </header>" +
      '  <div style="padding:12px 16px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:14px;">' +
      '    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">' +
      plan.days.map(function (d) {
        var on = d.dayNumber === activeDay.dayNumber;
        return '<button type="button" class="v9-btn v9-btn-sm ' + (on ? "is-primary" : "") + '" data-trip-day="' + d.dayNumber + '">' + (enM ? "Day " : "Ngày ") + d.dayNumber + "</button>";
      }).join("") +
      (plan.days.length < 10 ? '<button type="button" class="v9-btn v9-btn-sm" data-trip-act="add-day">+ ' + (enM ? "Add Day" : "Thêm ngày") + "</button>" : "") +
      "    </div>" +
      (activeDay.stops.length
        ? activeDay.stops.map(function (st, idx) {
            return (
              '<div style="border:1px solid var(--v9-border-hairline);background:var(--v9-bg-surface);padding:10px 12px;border-radius:3px;">' +
              '  <div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start;">' +
              '    <div><span style="font-size:0.72rem;color:var(--v9-accent-jade);font-weight:700;text-transform:uppercase;">#' + (idx + 1) + " · " + esc(st.slot || "day") + '</span><br/><strong>' + esc(enM ? (st.nameEn || st.nameVi) : st.nameVi) + '</strong><div class="zh-text" style="font-size:0.86rem;color:var(--v9-ink-secondary);">' + esc(st.nameZh) + "</div></div>" +
              '    <div style="display:flex;gap:4px;">' +
              '      <button type="button" class="v9-btn v9-btn-sm" data-trip-move="' + idx + '" data-dir="-1" title="Move up">↑</button>' +
              '      <button type="button" class="v9-btn v9-btn-sm" data-trip-move="' + idx + '" data-dir="1" title="Move down">↓</button>' +
              '      <button type="button" class="v9-btn v9-btn-sm" data-trip-del="' + idx + '" title="Remove">×</button>' +
              "    </div>" +
              "  </div>" +
              '  <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;">' +
              '    <button type="button" class="v9-btn v9-btn-sm is-jade" data-trip-driver="' + esc(st.id) + '">' + (enM ? "Show-to-Driver Card" : "Thẻ Đưa Tài Xế ZH") + "</button>" +
              "  </div>" +
              "</div>"
            );
          }).join("")
        : '<div style="padding:12px;border:1px dashed var(--v9-border-hairline);font-size:0.86rem;">' +
          (enM ? "No stops pinned for this day yet. Apply a curated starter route:" : "Ngày này chưa có điểm dừng. Áp dụng nhanh hành trình mẫu:") +
          '<div style="display:flex;flex-direction:column;gap:6px;margin-top:8px;">' +
          STARTER_TEMPLATES.map(function (tpl) {
            return '<button type="button" class="v9-btn v9-btn-sm" data-trip-template="' + tpl.id + '">+ ' + esc(enM ? tpl.en : tpl.vi) + "</button>";
          }).join("") +
          "</div></div>") +
      '    <details open style="border-top:1px solid var(--v9-border-hairline);padding-top:10px;">' +
      '      <summary style="cursor:pointer;font-weight:700;font-size:0.88rem;">' + (enM ? "240h Transit Readiness (" + doneChecklist + "/8)" : "Checklist Chuẩn Bị Quá Cảnh 240h (" + doneChecklist + "/8)") + "</summary>" +
      '      <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px;">' +
      CHECKLIST_240H.map(function (chk, i) {
        var on = Boolean(plan.checklist && plan.checklist[i]);
        return '<label style="display:flex;align-items:flex-start;gap:8px;font-size:0.82rem;cursor:pointer;"><input type="checkbox" data-trip-chk="' + i + '" ' + (on ? "checked" : "") + ' style="min-width:18px;min-height:18px;margin-top:2px;"/><span>' + esc(enM ? chk.en : chk.vi) + "</span></label>";
      }).join("") +
      "      </div>" +
      "    </details>" +
      "  </div>" +
      '  <footer style="padding:10px 16px;border-top:1px solid var(--v9-border-hairline);display:flex;gap:8px;flex-wrap:wrap;">' +
      '    <button type="button" class="v9-btn v9-btn-sm is-primary" data-trip-act="print">' + (enM ? "Print A4 Booklet" : "In Sổ Tay A4") + "</button>" +
      '    <button type="button" class="v9-btn v9-btn-sm" data-trip-act="reset">' + (enM ? "Reset Plan" : "Làm mới") + "</button>" +
      "  </footer>" +
      "</div>"
    );
  }

  function renderPrintBooklet(plan) {
    var box = document.getElementById("v9-print-booklet-root");
    if (!box) {
      box = document.createElement("div");
      box.id = "v9-print-booklet-root";
      box.className = "v9-print-booklet";
      document.body.appendChild(box);
    }
    box.innerHTML =
      "<h1>" + esc(plan.tripTitle) + " — Pocket Field Booklet (A4)</h1>" +
      "<p>Emergency China: Police 110 · Ambulance 120 · Fire 119</p>" +
      (plan.days || []).map(function (d) {
        return (
          '<div class="v9-print-day-card"><h2>Day ' + d.dayNumber + "</h2>" +
          (d.stops.length
            ? d.stops.map(function (s, i) { return "<p><strong>#" + (i + 1) + " " + esc(s.nameVi) + "</strong> — <span class='zh-text'>" + esc(s.nameZh) + "</span> " + esc(s.pinyin) + "</p>"; }).join("")
            : "<p>Free cultural exploration / rest day.</p>") +
          "</div>"
        );
      }).join("");
  }

  function openDriverCard(stopId, enM) {
    var plan = loadPlan();
    var target = null;
    plan.days.forEach(function (d) {
      d.stops.forEach(function (s) { if (s.id === stopId) target = s; });
    });
    if (!target) return;
    driverStopId = stopId;
    var old = document.getElementById("v9-driver-card-modal");
    if (old) old.remove();
    var m = document.createElement("div");
    m.id = "v9-driver-card-modal";
    m.className = "v9-driver-card-modal";
    m.setAttribute("role", "dialog");
    m.setAttribute("aria-modal", "true");
    m.innerHTML =
      '<div style="max-width:780px;">' +
      '  <div class="v9-kicker" style="color:#9E2A2B;">' + (enM ? "SHOW THIS SCREEN TO YOUR TAXI / DIDI DRIVER" : "ĐƯA MÀN HÌNH NÀY CHO TÀI XẾ TAXI / NHÂN VIÊN GA TÀU") + "</div>" +
      '  <p class="v9-driver-hanzi-xl zh-text" lang="zh-Hans">请带我去：' + esc(target.nameZh || target.nameVi) + "</p>" +
      (target.pinyin ? '<p style="font-size:1.1rem;color:#4D4944;margin-bottom:8px;">' + esc(target.pinyin) + "</p>" : "") +
      '  <h2 style="margin:0 0 18px;font-family:var(--font-editorial,serif);">' + esc(enM ? (target.nameEn || target.nameVi) : target.nameVi) + "</h2>" +
      '  <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">' +
      '    <button type="button" class="v9-btn is-jade" id="v9-driver-speak">' + (enM ? "Speak Mandarin (zh-CN)" : "Phát âm Quan Thoại (zh-CN)") + "</button>" +
      '    <button type="button" class="v9-btn is-primary" id="v9-driver-close">' + (enM ? "Close (Esc)" : "Đóng (Esc)") + "</button>" +
      "  </div>" +
      "</div>";
    document.body.appendChild(m);
    document.getElementById("v9-driver-speak").addEventListener("click", function () { speakMandarin("请带我去 " + (target.nameZh || target.nameVi)); });
    document.getElementById("v9-driver-close").addEventListener("click", closeOverlays);
  }

  function openDrawer(enM) {
    drawerOpen = true;
    var old = document.getElementById("v9-trip-drawer-backdrop");
    if (old) old.remove();
    var plan = loadPlan();
    renderPrintBooklet(plan);
    var wrap = document.createElement("div");
    wrap.id = "v9-trip-drawer-backdrop";
    wrap.className = "v9-trip-drawer-backdrop";
    wrap.innerHTML = renderDrawerHtml(plan, Boolean(enM));
    document.body.appendChild(wrap);

    wrap.addEventListener("click", function (e) {
      if (e.target === wrap) { closeOverlays(); return; }
      var el = e.target && e.target.closest ? e.target.closest("[data-trip-act],[data-trip-day],[data-trip-move],[data-trip-del],[data-trip-driver],[data-trip-template]") : null;
      if (!el) return;
      var cur = loadPlan();
      if (el.hasAttribute("data-trip-day")) {
        cur.activeDay = parseInt(el.getAttribute("data-trip-day"), 10) || 1;
        savePlan(cur);
        openDrawer(enM);
      } else if (el.hasAttribute("data-trip-template")) {
        var tid = el.getAttribute("data-trip-template");
        var tpl = STARTER_TEMPLATES.find(function (t) { return t.id === tid; });
        if (tpl) {
          cur.tripTitle = enM ? tpl.en : tpl.vi;
          cur.days = JSON.parse(JSON.stringify(tpl.days));
          cur.activeDay = 1;
          savePlan(cur);
          openDrawer(enM);
        }
      } else if (el.hasAttribute("data-trip-move")) {
        var idx = parseInt(el.getAttribute("data-trip-move"), 10);
        var dir = parseInt(el.getAttribute("data-dir"), 10);
        var dObj = cur.days.find(function (d) { return d.dayNumber === cur.activeDay; }) || cur.days[0];
        var nextIdx = idx + dir;
        if (dObj && nextIdx >= 0 && nextIdx < dObj.stops.length) {
          var tmp = dObj.stops[idx];
          dObj.stops[idx] = dObj.stops[nextIdx];
          dObj.stops[nextIdx] = tmp;
          savePlan(cur);
          openDrawer(enM);
        }
      } else if (el.hasAttribute("data-trip-del")) {
        var dIdx = parseInt(el.getAttribute("data-trip-del"), 10);
        var dayO = cur.days.find(function (d) { return d.dayNumber === cur.activeDay; }) || cur.days[0];
        if (dayO) {
          lastDeleted = dayO.stops.splice(dIdx, 1)[0];
          savePlan(cur);
          openDrawer(enM);
        }
      } else if (el.hasAttribute("data-trip-driver")) {
        openDriverCard(el.getAttribute("data-trip-driver"), enM);
      } else {
        var act = el.getAttribute("data-trip-act");
        if (act === "close") closeOverlays();
        else if (act === "add-day") {
          var nextNum = cur.days.length + 1;
          cur.days.push({ dayNumber: nextNum, stops: [] });
          cur.activeDay = nextNum;
          savePlan(cur);
          openDrawer(enM);
        } else if (act === "reset") {
          savePlan(defaultPlan());
          openDrawer(enM);
        } else if (act === "print") {
          printBooklet();
        }
      }
    });

    wrap.addEventListener("change", function (e) {
      var chk = e.target && e.target.getAttribute ? e.target.getAttribute("data-trip-chk") : null;
      if (chk !== null) {
        var cur = loadPlan();
        cur.checklist[parseInt(chk, 10)] = Boolean(e.target.checked);
        savePlan(cur);
        openDrawer(enM);
      }
    });
  }

  function printBooklet() {
    renderPrintBooklet(loadPlan());
    if (typeof window.print === "function") window.print();
  }

  function closeOverlays() {
    if (driverStopId) {
      driverStopId = null;
      var d = document.getElementById("v9-driver-card-modal");
      if (d) d.remove();
      return;
    }
    drawerOpen = false;
    var w = document.getElementById("v9-trip-drawer-backdrop");
    if (w) w.remove();
  }

  function mountGlobal(activePage, enM) {
    var showFab = activePage === "regions" || activePage === "sino-vietnam" || totalStopsCount(loadPlan()) > 0;
    var oldFab = document.getElementById("v9-fab-trip");
    if (!showFab) {
      if (oldFab) oldFab.remove();
      return;
    }
    if (!oldFab) {
      var btn = document.createElement("button");
      btn.id = "v9-fab-trip";
      btn.type = "button";
      btn.className = "v9-fab-trip v9-no-print";
      btn.innerHTML = (enM ? "Trip Plan" : "Lịch Trình") + ' <span data-v9-fab-cnt="1" style="background:#9E2A2B;color:#FAF7F2;padding:1px 7px;border-radius:9999px;">0</span>';
      btn.addEventListener("click", function () { openDrawer(enM); });
      document.body.appendChild(btn);
    }
    updateFabBadge(loadPlan());
  }

  window.CCE_V9_TRIP_PLANNER = {
    openDrawer: openDrawer,
    addStop: addStop,
    printBooklet: printBooklet,
    closeOverlays: closeOverlays,
    hasOpenOverlay: function () { return Boolean(drawerOpen || driverStopId); },
    renderFieldConciergeStrip: renderFieldConciergeStrip,
    mountGlobal: mountGlobal
  };
})();
