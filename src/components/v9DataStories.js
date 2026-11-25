// ============================================================================
// CHINESE CULTURE EXPLORER V9.0 — NYT / The Pudding Interactive Data Stories
// Spec 7: (A) 4,000-Year Capital Shift SVG | (B) Sino-Viet Tone Tree + Audio
//         (C) Maritime Silk Road <-> 2030 Green Supply Corridor SVG
// ============================================================================
(function () {
  "use strict";

  var capIdx = 13;
  var tradeEra = "green2030"; // maritime | green2030
  var activeToneFilter = "all";

  var CAPITALS = [
    { era: "Tây Chu (1046–771 TCN)", capVi: "Hạo Kinh (Tây An)", zh: "镐京", vn: "Hùng Vương / Văn Lang", x: 350, y: 235 },
    { era: "Tần (221–206 TCN)", capVi: "Hàm Dương", zh: "咸阳", vn: "Âu Lạc (An Dương Vương)", x: 342, y: 230 },
    { era: "Tây Hán (202 TCN–8)", capVi: "Trường An", zh: "长安", vn: "Khởi đầu Giao Chỉ", x: 348, y: 234 },
    { era: "Đông Hán (25–220)", capVi: "Lạc Dương", zh: "洛阳", vn: "Khởi nghĩa Hai Bà Trưng (40)", x: 422, y: 232 },
    { era: "Tùy (581–618)", capVi: "Đại Hưng", zh: "大兴", vn: "Nhà Tiền Lý (Vạn Xuân)", x: 350, y: 236 },
    { era: "Đường (618–907)", capVi: "Trường An", zh: "长安", vn: "Phùng Hưng · Khúc Thừa Dụ", x: 350, y: 234 },
    { era: "Bắc Tống (960–1127)", capVi: "Biện Kinh (Khai Phong)", zh: "东京汴梁", vn: "Đinh · Tiền Lê · Lý (Thăng Long 1010)", x: 468, y: 238 },
    { era: "Nam Tống (1127–1279)", capVi: "Lâm An (Hàng Châu)", zh: "临安", vn: "Nhà Lý · Nhà Trần (Bạch Đằng 1288)", x: 590, y: 318 },
    { era: "Nguyên (1271–1368)", capVi: "Đại Đô (Bắc Kinh)", zh: "大都", vn: "Hội nghị Diên Hồng (Nhà Trần)", x: 512, y: 122 },
    { era: "Minh Sơ (1368–1421)", capVi: "Ứng Thiên (Nam Kinh)", zh: "南京", vn: "Nhà Hồ · Khởi nghĩa Lam Sơn", x: 558, y: 274 },
    { era: "Minh Hậu (1421–1644)", capVi: "Bắc Kinh", zh: "北京", vn: "Nhà Lê Sơ · Đại Việt Phồn Thịnh", x: 514, y: 120 },
    { era: "Thanh (1644–1911)", capVi: "Bắc Kinh", zh: "北京", vn: "Tây Sơn · Triều Nguyễn", x: 514, y: 120 },
    { era: "Dân Quốc (1927–1949)", capVi: "Nam Kinh", zh: "南京", vn: "Cách mạng Tháng Tám (1945)", x: 558, y: 274 },
    { era: "Hiện Đại (1949–2026)", capVi: "Bắc Kinh · Đa Cực Kinh Tế", zh: "北京", vn: "Đổi Mới & Đối tác Chiến lược", x: 514, y: 120 }
  ];

  var TONE_RULES = [
    { cls: "binh", mid: "Bình · Ảm (Thanh)", vnTone: "Thanh Ngang (Không dấu)", exZh: "天", py: "tiān", hv: "Thiên" },
    { cls: "binh", mid: "Bình · Dương (Trọc)", vnTone: "Thanh Huyền", exZh: "明", py: "míng", hv: "Minh" },
    { cls: "thuong", mid: "Thượng · Âm", vnTone: "Thanh Hỏi", exZh: "水", py: "shuǐ", hv: "Thủy" },
    { cls: "thuong", mid: "Thượng · Dương", vnTone: "Thanh Ngã / Nặng", exZh: "道", py: "dào", hv: "Đạo" },
    { cls: "khu", mid: "Khứ · Âm", vnTone: "Thanh Sắc", exZh: "政", py: "zhèng", hv: "Chính" },
    { cls: "khu", mid: "Khứ · Dương", vnTone: "Thanh Nặng", exZh: "万", py: "wàn", hv: "Vạn" },
    { cls: "nhap", mid: "Nhập (-p/-t/-k) · Âm", vnTone: "Thanh Sắc (Giữ đuôi tắc)", exZh: "国", py: "guó", hv: "Quốc" },
    { cls: "nhap", mid: "Nhập (-p/-t/-k) · Dương", vnTone: "Thanh Nặng (Giữ đuôi tắc)", exZh: "学", py: "xué", hv: "Học" }
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function renderCapitalShift(enM) {
    var cur = CAPITALS[capIdx] || CAPITALS[0];
    var poly = CAPITALS.slice(0, capIdx + 1).map(function (c) { return c.x + "," + c.y; }).join(" ");
    var dots = CAPITALS.map(function (c, i) {
      var on = i === capIdx;
      return '<circle cx="' + c.x + '" cy="' + c.y + '" r="' + (on ? 10 : 5) + '" fill="' + (on ? "#9E2A2B" : "#A6844E") + '" stroke="#FAF7F2" stroke-width="2" data-v9-cap-idx="' + i + '" style="cursor:pointer;"></circle>';
    }).join("");

    return (
      '<section class="v9-data-story-shell" id="v9-data-story-capitals" aria-roledescription="interactive data story">' +
      '  <div class="v9-kicker">' + (enM ? "INTERACTIVE HISTORICAL MAP" : "BẢN ĐỒ LỊCH SỬ TƯƠNG TÁC") + "</div>" +
      '  <h2 class="v9-lead-heading" id="v9-cap-heading">' + esc(cur.era) + " · " + esc(cur.capVi) + ' <span class="zh-text">' + esc(cur.zh) + "</span></h2>" +
      '  <p class="v9-muted-copy" id="v9-cap-vn" style="margin-bottom:12px;">' + (enM ? "Vietnam parallel: " : "Đồng đại Việt Nam: ") + "<strong>" + esc(cur.vn) + "</strong></p>" +
      '  <div id="v9-cap-svg-wrap"><svg viewBox="160 60 540 320" style="display:block;width:100%;height:auto;background:var(--v9-bg-canvas);border:1px solid var(--v9-border-hairline);">' +
      '    <path d="M220,210 Q400,190 540,215" fill="none" stroke="rgba(166,132,78,0.45)" stroke-width="2"></path>' +
      '    <path d="M250,295 Q420,270 615,285" fill="none" stroke="rgba(45,90,76,0.45)" stroke-width="2.5"></path>' +
      '    <polyline points="' + poly + '" fill="none" stroke="#9E2A2B" stroke-width="2.5" stroke-dasharray="6 4"></polyline>' +
      dots +
      '    <text x="' + (cur.x > 500 ? cur.x - 14 : cur.x + 12) + '" y="' + (cur.y - 10) + '" text-anchor="' + (cur.x > 500 ? "end" : "start") + '" font-size="13" font-weight="700" fill="#9E2A2B">' + esc(cur.capVi) + "</text>" +
      "  </svg></div>" +
      '  <div style="display:flex;align-items:center;gap:12px;margin-top:12px;flex-wrap:wrap;">' +
      '    <label for="v9-cap-slider" style="font-size:0.82rem;font-weight:700;">' + (enM ? "Timeline:" : "Kéo niên đại:") + "</label>" +
      '    <input id="v9-cap-slider" type="range" min="0" max="13" value="' + capIdx + '" style="flex:1;min-width:180px;accent-color:#9E2A2B;" />' +
      '    <span id="v9-cap-step-count" style="font-family:var(--font-mono,monospace);font-size:0.8rem;">' + (capIdx + 1) + " / 14</span>" +
      "  </div>" +
      "</section>"
    );
  }

  function renderToneTree(enM) {
    var rows = activeToneFilter === "all" ? TONE_RULES : TONE_RULES.filter(function (r) { return r.cls === activeToneFilter; });
    return (
      '<section class="v9-data-story-shell" id="v9-data-story-tones" aria-roledescription="interactive data story">' +
      '  <div class="v9-kicker">' + (enM ? "HISTORICAL PHONOLOGY" : "ĐỐI CHIẾU NGỮ ÂM LỊCH SỬ") + "</div>" +
      '  <h2 class="v9-lead-heading">' + (enM ? "How four Middle Chinese tones became six Vietnamese tones" : "Quy luật chuyển đổi từ bốn thanh Hán cổ sang sáu thanh tiếng Việt") + "</h2>" +
      '  <div style="display:flex;gap:6px;flex-wrap:wrap;margin:10px 0 14px;">' +
      [["all", "Tất cả (8 nhánh)"], ["binh", "Bình"], ["thuong", "Thượng"], ["khu", "Khứ"], ["nhap", "Nhập (-p/-t/-k)"]].map(function (t) {
        return '<button type="button" class="v9-btn v9-btn-sm ' + (activeToneFilter === t[0] ? "is-primary" : "") + '" data-v9-tone-filter="' + t[0] + '">' + t[1] + "</button>";
      }).join("") +
      "  </div>" +
      '  <div class="v9-table-scroll"><table style="width:100%;border-collapse:collapse;font-size:0.86rem;">' +
      '    <thead><tr><th style="text-align:left;padding:8px;border-bottom:1px solid var(--v9-border-hairline);">Âm Hán Cổ</th><th style="text-align:left;padding:8px;border-bottom:1px solid var(--v9-border-hairline);">Biến Thành Tiếng Việt</th><th style="text-align:left;padding:8px;border-bottom:1px solid var(--v9-border-hairline);">Chữ Mẫu</th><th style="text-align:left;padding:8px;border-bottom:1px solid var(--v9-border-hairline);">Nghe Đối Chiếu</th></tr></thead>' +
      "    <tbody>" +
      rows.map(function (r) {
        return (
          '<tr>' +
          '  <td style="padding:8px;border-bottom:1px solid var(--v9-border-hairline);">' + esc(r.mid) + "</td>" +
          '  <td style="padding:8px;border-bottom:1px solid var(--v9-border-hairline);"><strong>' + esc(r.vnTone) + "</strong></td>" +
          '  <td style="padding:8px;border-bottom:1px solid var(--v9-border-hairline);"><span class="zh-text" style="font-size:1.15rem;">' + esc(r.exZh) + "</span> (" + esc(r.py) + " · <strong>" + esc(r.hv) + "</strong>)</td>" +
          '  <td style="padding:8px;border-bottom:1px solid var(--v9-border-hairline);"><button type="button" class="v9-btn v9-btn-sm is-jade" data-v9-speak-pair="' + esc(r.exZh + "|" + r.hv) + '">ZH → VI</button></td>' +
          "</tr>"
        );
      }).join("") +
      "    </tbody></table></div>" +
      "</section>"
    );
  }

  function renderTradeFlow(enM) {
    var isGreen = tradeEra === "green2030";
    var nodes = isGreen
      ? [
          { x: 190, y: 210, lbl: "Côn Minh / Lào Cai", desc: "Hành lang đường sắt khổ chuẩn & EV Pin" },
          { x: 350, y: 245, lbl: "Nam Ninh / Lạng Sơn", desc: "Cửa khẩu thông quan số & nông sản ACFTA 3.0" },
          { x: 410, y: 285, lbl: "Hải Phòng – Khâm Châu", desc: "Cảng biển Vịnh Bắc Bộ & linh kiện điện tử" },
          { x: 540, y: 235, lbl: "Thâm Quyến / Quảng Châu", desc: "Trung tâm R&D & Chuỗi cung ứng CBAM" },
          { x: 650, y: 120, lbl: "Thượng Hải / EU 2030", desc: "Xuất khẩu Xanh đạt chuẩn EUDR & ISO Carbon" }
        ]
      : [
          { x: 540, y: 235, lbl: "Quảng Châu (Thế kỷ X–XVII)", desc: "Thương cảng xuất phát Con đường Tơ lụa Trên Biển" },
          { x: 605, y: 195, lbl: "Tuyền Châu / Ninh Ba", desc: "Trung tâm xuất khẩu Gốm Sứ Thanh Hoa & Long Tuyền" },
          { x: 415, y: 285, lbl: "Vân Đồn (Đại Việt)", desc: "Thương cảng Lý–Trần giao dịch gốm Chu Đậu & tơ lụa" },
          { x: 385, y: 345, lbl: "Hội An – Phố Hiến", desc: "Đô thị cảng quốc tế giao thoa thương nhân Hoa–Việt–Nhật" },
          { x: 250, y: 405, lbl: "Eo Biển Malacca", desc: "Cửa ngõ nối sang Ấn Độ Dương" }
        ];

    return (
      '<section class="v9-data-story-shell" id="v9-data-story-trade" aria-roledescription="interactive data story">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:10px;margin-bottom:12px;">' +
      '    <div>' +
      '      <div class="v9-kicker">' + (enM ? "TRADE CORRIDORS ACROSS ERAS" : "HÀNH LANG GIAO THƯƠNG QUA CÁC THỜI KỲ") + "</div>" +
      '      <h2 class="v9-lead-heading">' + (isGreen ? (enM ? "2026–2030 Vietnam–China green supply chain" : "Chuỗi cung ứng xanh và đường sắt Việt – Trung (2026–2030)") : (enM ? "Maritime ceramic and silk route (10th–17th centuries)" : "Hải trình gốm sứ và tơ lụa cổ (thế kỷ X–XVII)")) + "</h2>" +
      "    </div>" +
      '    <div style="display:flex;gap:6px;">' +
      '      <button type="button" class="v9-btn v9-btn-sm ' + (!isGreen ? "is-primary" : "") + '" data-v9-trade-era="maritime">' + (enM ? "Maritime Era" : "Tơ Lụa Trên Biển") + "</button>" +
      '      <button type="button" class="v9-btn v9-btn-sm ' + (isGreen ? "is-primary" : "") + '" data-v9-trade-era="green2030">' + (enM ? "Green 2030" : "Chuỗi Xanh 2030") + "</button>" +
      "    </div>" +
      "  </div>" +
      '  <svg viewBox="140 80 580 350" style="display:block;width:100%;height:auto;background:var(--v9-bg-canvas);border:1px solid var(--v9-border-hairline);">' +
      '    <polyline points="' + nodes.map(function (n) { return n.x + "," + n.y; }).join(" ") + '" fill="none" stroke="' + (isGreen ? "#2D5A4C" : "#A6844E") + '" stroke-width="3" stroke-dasharray="7 4"></polyline>' +
      nodes.map(function (n) {
        return '<g><circle cx="' + n.x + '" cy="' + n.y + '" r="8" fill="#9E2A2B" stroke="#FAF7F2" stroke-width="2"></circle><text x="' + (n.x + 10) + '" y="' + (n.y + 4) + '" font-size="11" font-weight="700" fill="currentColor">' + esc(n.lbl) + "</text></g>";
      }).join("") +
      "  </svg>" +
      '  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;margin-top:10px;">' +
      nodes.map(function (n) {
        return '<div style="padding:8px 10px;background:var(--v9-bg-canvas);border:1px solid var(--v9-border-hairline);font-size:0.8rem;"><strong>' + esc(n.lbl) + "</strong><br/><span>" + esc(n.desc) + "</span></div>";
      }).join("") +
      "  </div>" +
      "</section>"
    );
  }

  function renderForPage(pageId, enM) {
    if (pageId === "history") return renderCapitalShift(enM);
    if (pageId === "sino-vietnam") return renderToneTree(enM);
    if (pageId === "business") return renderTradeFlow(enM);
    return "";
  }

  function mount(pageId, enM) {
    if (pageId === "history") {
      var capEl = document.getElementById("v9-data-story-capitals");
      if (capEl && capEl.dataset.v9Bound !== "1") {
        capEl.dataset.v9Bound = "1";
        var syncCap = function () {
          var cur = CAPITALS[capIdx] || CAPITALS[0];
          var poly = CAPITALS.slice(0, capIdx + 1).map(function (c) { return c.x + "," + c.y; }).join(" ");
          var dots = CAPITALS.map(function (c, i) {
            var on = i === capIdx;
            return '<circle cx="' + c.x + '" cy="' + c.y + '" r="' + (on ? 10 : 5) + '" fill="' + (on ? "#9E2A2B" : "#A6844E") + '" stroke="#FAF7F2" stroke-width="2" data-v9-cap-idx="' + i + '" style="cursor:pointer;"></circle>';
          }).join("");
          var hd = document.getElementById("v9-cap-heading");
          var vn = document.getElementById("v9-cap-vn");
          var cnt = document.getElementById("v9-cap-step-count");
          var wrap = document.getElementById("v9-cap-svg-wrap");
          if (hd) hd.innerHTML = esc(cur.era) + " · " + esc(cur.capVi) + ' <span class="zh-text">' + esc(cur.zh) + "</span>";
          if (vn) vn.innerHTML = (enM ? "Vietnam parallel: " : "Đồng đại Việt Nam: ") + "<strong>" + esc(cur.vn) + "</strong>";
          if (cnt) cnt.textContent = (capIdx + 1) + " / 14";
          if (wrap) {
            wrap.innerHTML =
              '<svg viewBox="160 60 540 320" style="display:block;width:100%;height:auto;background:var(--v9-bg-canvas);border:1px solid var(--v9-border-hairline);">' +
              '  <path d="M220,210 Q400,190 540,215" fill="none" stroke="rgba(166,132,78,0.45)" stroke-width="2"></path>' +
              '  <path d="M250,295 Q420,270 615,285" fill="none" stroke="rgba(45,90,76,0.45)" stroke-width="2.5"></path>' +
              '  <polyline points="' + poly + '" fill="none" stroke="#9E2A2B" stroke-width="2.5" stroke-dasharray="6 4"></polyline>' +
              dots +
              '  <text x="' + (cur.x > 500 ? cur.x - 14 : cur.x + 12) + '" y="' + (cur.y - 10) + '" text-anchor="' + (cur.x > 500 ? "end" : "start") + '" font-size="13" font-weight="700" fill="#9E2A2B">' + esc(cur.capVi) + "</text>" +
              "</svg>";
          }
        };
        capEl.addEventListener("input", function (e) {
          if (e.target && e.target.id === "v9-cap-slider") {
            capIdx = parseInt(e.target.value, 10) || 0;
            syncCap();
          }
        });
        capEl.addEventListener("click", function (e) {
          var node = e.target && e.target.closest ? e.target.closest("[data-v9-cap-idx]") : null;
          if (node) {
            capIdx = parseInt(node.getAttribute("data-v9-cap-idx"), 10) || 0;
            var sld = document.getElementById("v9-cap-slider");
            if (sld) sld.value = String(capIdx);
            syncCap();
          }
        });
      }
    } else if (pageId === "sino-vietnam") {
      var toneEl = document.getElementById("v9-data-story-tones");
      if (toneEl && toneEl.dataset.v9Bound !== "1") {
        toneEl.dataset.v9Bound = "1";
        toneEl.addEventListener("click", function (e) {
          var fb = e.target && e.target.closest ? e.target.closest("[data-v9-tone-filter]") : null;
          if (fb) {
            activeToneFilter = fb.getAttribute("data-v9-tone-filter") || "all";
            toneEl.outerHTML = renderToneTree(enM);
            mount("sino-vietnam", enM);
            return;
          }
          var sb = e.target && e.target.closest ? e.target.closest("[data-v9-speak-pair]") : null;
          if (sb && window.speechSynthesis) {
            var parts = sb.getAttribute("data-v9-speak-pair").split("|");
            window.speechSynthesis.cancel();
            var u1 = new SpeechSynthesisUtterance(parts[0] || "");
            u1.lang = "zh-CN";
            u1.onend = function () {
              setTimeout(function () {
                var u2 = new SpeechSynthesisUtterance(parts[1] || "");
                u2.lang = "vi-VN";
                window.speechSynthesis.speak(u2);
              }, 380);
            };
            window.speechSynthesis.speak(u1);
          }
        });
      }
    } else if (pageId === "business") {
      var trEl = document.getElementById("v9-data-story-trade");
      if (trEl && trEl.dataset.v9Bound !== "1") {
        trEl.dataset.v9Bound = "1";
        trEl.addEventListener("click", function (e) {
          var tb = e.target && e.target.closest ? e.target.closest("[data-v9-trade-era]") : null;
          if (tb) {
            tradeEra = tb.getAttribute("data-v9-trade-era") || "green2030";
            trEl.outerHTML = renderTradeFlow(enM);
            mount("business", enM);
          }
        });
      }
    }
  }

  window.CCE_V9_DATA_STORIES = {
    renderForPage: renderForPage,
    mount: mount
  };
})();
