// ============================================================================
// CALLIGRAPHY MI-ZI-GE (米字格) BRUSH STROKE PRACTICE PAD (WAVE 3.4)
// HTML5 Canvas velocity-sensitive calligraphy pad launched from Dictionary/Gloss/SRS.
// ============================================================================

(function () {
  "use strict";

  var isOpen = false;
  var targetHanzi = "和";
  var targetPinyin = "";
  var strokes = [];
  var currentStroke = null;
  var drawing = false;
  var showGhost = true;

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function redrawCanvas() {
    var canvas = document.getElementById("cce-mizige-canvas");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Paper background
    ctx.fillStyle = "#FAF6ED";
    ctx.fillRect(0, 0, w, h);

    // Mi-Zi-Ge guide lines
    ctx.strokeStyle = "rgba(140, 35, 24, 0.25)";
    ctx.lineWidth = 1;
    ctx.strokeRect(1, 1, w - 2, h - 2);
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
    ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
    ctx.moveTo(0, 0); ctx.lineTo(w, h);
    ctx.moveTo(w, 0); ctx.lineTo(0, h);
    ctx.stroke();
    ctx.setLineDash([]);

    // Ghost reference character
    if (showGhost && targetHanzi) {
      ctx.save();
      ctx.fillStyle = "rgba(120, 110, 95, 0.16)";
      ctx.font = "210px 'Noto Serif SC', 'STKaiti', 'KaiTi', serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(targetHanzi, w / 2, h / 2 + 8);
      ctx.restore();
    }

    // Ink strokes with velocity-based width
    var all = strokes.concat(currentStroke ? [currentStroke] : []);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#1B1A18";

    for (var s = 0; s < all.length; s++) {
      var pts = all[s];
      if (!pts || pts.length < 2) continue;
      for (var i = 1; i < pts.length; i++) {
        var p0 = pts[i - 1];
        var p1 = pts[i];
        var dist = Math.hypot(p1.x - p0.x, p1.y - p0.y);
        var width = Math.max(4, Math.min(13, 12 - dist * 0.22));
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      }
    }
  }

  function bindEvents() {
    var canvas = document.getElementById("cce-mizige-canvas");
    if (!canvas || canvas.dataset.bound) return;
    canvas.dataset.bound = "1";

    function getPos(ev) {
      var rect = canvas.getBoundingClientRect();
      var pt = ev.touches ? ev.touches[0] : ev;
      return {
        x: ((pt.clientX - rect.left) / rect.width) * canvas.width,
        y: ((pt.clientY - rect.top) / rect.height) * canvas.height
      };
    }

    canvas.addEventListener("pointerdown", function (ev) {
      ev.preventDefault();
      drawing = true;
      currentStroke = [getPos(ev)];
      redrawCanvas();
    });
    canvas.addEventListener("pointermove", function (ev) {
      if (!drawing || !currentStroke) return;
      currentStroke.push(getPos(ev));
      redrawCanvas();
    });
    function finishStroke() {
      if (!drawing) return;
      drawing = false;
      if (currentStroke && currentStroke.length >= 1) {
        strokes.push(currentStroke);
      }
      currentStroke = null;
      redrawCanvas();
    }
    canvas.addEventListener("pointerup", finishStroke);
    canvas.addEventListener("pointerleave", finishStroke);
    redrawCanvas();
  }

  function renderModal(enM) {
    if (!isOpen) return "";
    return (
      '<div class="modal-backdrop open" data-action="close-stroke-pad" style="z-index:240;">' +
        '<div class="modal-panel" style="max-width:460px;padding:1.25rem;" role="dialog" aria-modal="true" aria-label="Mi-Zi-Ge Stroke Pad" onclick="event.stopPropagation()">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">' +
            '<div>' +
              '<div class="editorial-kicker" style="color:var(--imperial-red);">米字格 · CALLIGRAPHY PAD</div>' +
              '<h3 style="margin:0.1rem 0 0;font-family:var(--font-editorial);">' +
                '<span class="hanzi" style="font-size:1.5rem;color:var(--imperial-red);">' + esc(targetHanzi) + '</span> ' +
                (targetPinyin ? '<span class="pinyin" style="font-size:0.9rem;color:var(--text-muted);">(' + esc(targetPinyin) + ')</span>' : '') +
              '</h3>' +
            '</div>' +
            '<button type="button" class="modal-close-btn" data-action="close-stroke-pad" aria-label="Close">×</button>' +
          '</div>' +

          '<div style="display:flex;justify-content:center;margin-bottom:0.85rem;">' +
            '<canvas id="cce-mizige-canvas" width="300" height="300" style="width:300px;height:300px;touch-action:none;cursor:crosshair;border:1px solid var(--border-medium);"></canvas>' +
          '</div>' +

          '<div style="display:flex;gap:0.45rem;justify-content:center;flex-wrap:wrap;">' +
            '<button type="button" class="btn btn-secondary btn-sm" data-action="stroke-pad-undo">' + (enM ? "Undo Stroke" : "Hoàn tác Nét") + '</button>' +
            '<button type="button" class="btn btn-secondary btn-sm" data-action="stroke-pad-clear">' + (enM ? "Clear Sheet" : "Xóa viết lại") + '</button>' +
            '<button type="button" class="btn ' + (showGhost ? "btn-primary" : "btn-secondary") + ' btn-sm" data-action="stroke-pad-ghost">' + (showGhost ? (enM ? "Ghost: ON" : "Chữ mờ: BẬT") : (enM ? "Ghost: OFF" : "Chữ mờ: TẮT")) + '</button>' +
            '<button type="button" class="btn btn-jade btn-sm" data-action="speak-zh" data-zh="' + esc(targetHanzi) + '">' + (enM ? "Listen" : "Nghe đọc") + '</button>' +
          '</div>' +
          '<p style="margin:0.65rem 0 0;text-align:center;font-size:0.76rem;color:var(--text-muted);">' +
            (enM ? "Practice stroke balance (Ngũ pháp / Quy tắc thuận bút) over the Mi-Zi-Ge grid." : "Luyện cân đối bộ thủ theo quy tắc thuận bút trên khung chữ Mễ (米字格).") +
          '</p>' +
        '</div>' +
      '</div>'
    );
  }

  window.CCE_STROKE_PAD = {
    open: function (hanzi, pinyin) {
      targetHanzi = String(hanzi || "和").trim().charAt(0) || "和";
      targetPinyin = String(pinyin || "");
      strokes = [];
      currentStroke = null;
      isOpen = true;
    },
    close: function () { isOpen = false; },
    undo: function () { strokes.pop(); redrawCanvas(); },
    clear: function () { strokes = []; currentStroke = null; redrawCanvas(); },
    toggleGhost: function () { showGhost = !showGhost; redrawCanvas(); },
    isOpen: function () { return isOpen; },
    renderModal: renderModal,
    bindIfOpen: function () { if (isOpen) bindEvents(); }
  };
})();
