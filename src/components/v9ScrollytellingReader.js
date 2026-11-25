// ============================================================================
// CHINESE CULTURE EXPLORER V9.0 — Editorial Scrollytelling Reader & Audio Dock
// Spec 6: 3 Reading Modes (Academic | Focused 65ch | Story Flow 44/52 Sticky)
//         + Viewport-Clamped Popover + Unified Audio Narration Dock
// ============================================================================
(function () {
  "use strict";

  var MODE_KEY = "cce_v9_read_mode";
  var PROG_KEY = "cce_v9_read_progress";
  var sectionObs = null;
  var activeSteps = [];
  var audioState = { playing: false, rate: 1.0, secIdx: 0 };

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function getSavedMode() {
    var Safe = window.CCE_V9_LOADER && window.CCE_V9_LOADER.SafeStorage;
    var m = Safe ? Safe.getJSON(MODE_KEY, "academic") : "academic";
    return (m === "zen" || m === "storyflow" || m === "academic") ? m : "academic";
  }

  function saveMode(mode) {
    var Safe = window.CCE_V9_LOADER && window.CCE_V9_LOADER.SafeStorage;
    if (Safe) Safe.setJSON(MODE_KEY, mode);
  }

  function renderModeToolbar(enM, artId) {
    var mode = getSavedMode();
    return (
      '<div id="v9-reader-modebar" class="v9-reader-modebar v9-no-print" data-art-id="' + esc(artId) + '">' +
      '  <div role="tablist" aria-label="' + (enM ? "Reading layout mode" : "Chế độ đọc chuyên luận") + '" style="display:flex;gap:6px;flex-wrap:wrap;">' +
      '    <button type="button" role="tab" aria-selected="' + (mode === "academic") + '" class="v9-btn v9-btn-sm ' + (mode === "academic" ? "is-primary" : "") + '" data-v9-rmode="academic">' + (enM ? "Academic 3-col" : "Bố cục 3 cột") + "</button>" +
      '    <button type="button" role="tab" aria-selected="' + (mode === "zen") + '" class="v9-btn v9-btn-sm ' + (mode === "zen" ? "is-primary" : "") + '" data-v9-rmode="zen">' + (enM ? "Focused 65ch" : "Đọc tập trung 65ch") + "</button>" +
      '    <button type="button" role="tab" aria-selected="' + (mode === "storyflow") + '" class="v9-btn v9-btn-sm ' + (mode === "storyflow" ? "is-primary" : "") + '" data-v9-rmode="storyflow">' + (enM ? "Story flow" : "Đọc ghim hình") + "</button>" +
      "  </div>" +
      '  <div style="display:flex;gap:6px;align-items:center;">' +
      '    <button type="button" class="v9-btn v9-btn-sm is-jade" data-v9-audio-toggle="1">' + (enM ? "Listen to essay" : "Nghe đọc bài") + "</button>" +
      "  </div>" +
      "</div>"
    );
  }

  function collectMediaPool(artEl) {
    var imgs = [];
    if (!artEl) return imgs;
    artEl.querySelectorAll("img").forEach(function (img) {
      var src = img.getAttribute("src") || img.getAttribute("data-src");
      if (src && !imgs.some(function (x) { return x.src === src; })) {
        imgs.push({ src: src, alt: img.getAttribute("alt") || "Archival Plate" });
      }
    });
    return imgs;
  }

  function applyLayoutMode(mode, artEl, enM) {
    saveMode(mode);
    var shell = document.querySelector(".editorial-reading-layout") || artEl.closest(".article-reader-shell") || artEl.parentElement;
    var leftRail = shell ? shell.querySelector(".editorial-toc-rail, .article-sidebar-left") : null;
    var rightRail = shell ? shell.querySelector(".editorial-context-rail, .article-sidebar-right") : null;

    var oldStage = document.getElementById("v9-storyflow-sticky-stage");
    if (oldStage) oldStage.remove();
    artEl.classList.remove("v9-zen-prose");
    if (shell) {
      shell.classList.remove("v9-story-flow-shell");
      shell.style.gridTemplateColumns = "";
    }

    if (mode === "zen") {
      if (leftRail) leftRail.style.display = "none";
      if (rightRail) rightRail.style.display = "none";
      if (shell) shell.style.gridTemplateColumns = "minmax(0, 1fr)";
      artEl.classList.add("v9-zen-prose");
    } else if (mode === "storyflow") {
      if (leftRail) leftRail.style.display = "none";
      if (rightRail) rightRail.style.display = "none";
      var pool = collectMediaPool(artEl);
      var heads = Array.from(artEl.querySelectorAll("h2, h3, [id^='sec-']")).slice(0, 12);
      activeSteps = heads.map(function (h, i) {
        var m = pool[i % Math.max(1, pool.length)] || { src: "", alt: h.textContent };
        return { el: h, title: (h.textContent || "").trim().slice(0, 72), src: m.src, alt: m.alt };
      });
      if (activeSteps.length && pool.length && shell) {
        shell.style.gridTemplateColumns = "";
        shell.classList.add("v9-story-flow-shell");
        var stage = document.createElement("aside");
        stage.id = "v9-storyflow-sticky-stage";
        stage.className = "v9-sticky-stage";
        stage.innerHTML =
          '<figure class="v9-plate-cinema" style="margin:0;">' +
          '  <img id="v9-stage-active-img" src="' + esc(activeSteps[0].src) + '" alt="' + esc(activeSteps[0].alt) + '" />' +
          "</figure>" +
          '<div style="padding:10px 12px;background:var(--v9-bg-surface);border:1px solid var(--v9-border-hairline);font-size:0.84rem;">' +
          '  <div class="v9-kicker" id="v9-stage-step-kicker">STEP 01 / ' + activeSteps.length + "</div>" +
          '  <strong id="v9-stage-step-caption">' + esc(activeSteps[0].title) + "</strong>" +
          "</div>";
        shell.appendChild(stage);
        bindStoryObserver();
      }
    } else {
      if (leftRail) leftRail.style.display = "";
      if (rightRail) rightRail.style.display = "";
      if (sectionObs) {
        sectionObs.disconnect();
        sectionObs = null;
      }
    }

    var bar = document.getElementById("v9-reader-modebar");
    if (bar) {
      bar.querySelectorAll("[data-v9-rmode]").forEach(function (b) {
        var on = b.getAttribute("data-v9-rmode") === mode;
        b.classList.toggle("is-primary", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
    }
  }

  function bindStoryObserver() {
    if (sectionObs) sectionObs.disconnect();
    if (!("IntersectionObserver" in window) || !activeSteps.length) return;
    sectionObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (ent) {
        if (!ent.isIntersecting) return;
        var idx = activeSteps.findIndex(function (s) { return s.el === ent.target; });
        if (idx < 0) return;
        var step = activeSteps[idx];
        var img = document.getElementById("v9-stage-active-img");
        var kick = document.getElementById("v9-stage-step-kicker");
        var cap = document.getElementById("v9-stage-step-caption");
        if (img && step.src && img.getAttribute("src") !== step.src) img.src = step.src;
        if (kick) kick.textContent = "STEP " + String(idx + 1).padStart(2, "0") + " / " + activeSteps.length;
        if (cap) cap.textContent = step.title;
      });
    }, { rootMargin: "-35% 0px -45% 0px", threshold: 0.01 });
    activeSteps.forEach(function (s) { sectionObs.observe(s.el); });
  }

  function closePopover() {
    var old = document.getElementById("v9-inline-popover");
    if (old) old.remove();
  }

  function openTermPopover(anchorEl, termText, enM) {
    closePopover();
    var rect = anchorEl.getBoundingClientRect();
    var box = document.createElement("div");
    box.id = "v9-inline-popover";
    box.className = "v9-inline-popover";
    box.setAttribute("role", "dialog");
    box.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">' +
      '  <strong class="zh-text" style="font-size:1.15rem;">' + esc(termText) + "</strong>" +
      '  <button type="button" class="v9-btn v9-btn-sm" id="v9-pop-close" style="min-height:32px;min-width:32px;padding:0 8px;">×</button>' +
      "</div>" +
      '<p style="font-size:0.82rem;color:var(--v9-ink-secondary);margin:0 0 8px;">' + (enM ? "Contextual classical/cultural term detected inline. Hear Mandarin pronunciation or pin to SRS." : "Thuật ngữ Hán – Việt nội tuyến. Nghe phát âm Quan Thoại hoặc lưu vào sổ tay.") + "</p>" +
      '<div style="display:flex;gap:6px;">' +
      '  <button type="button" class="v9-btn v9-btn-sm is-jade" id="v9-pop-speak">zh-CN</button>' +
      "</div>";
    document.body.appendChild(box);
    var bw = Math.min(320, window.innerWidth - 24);
    var left = Math.max(12, Math.min(rect.left, window.innerWidth - bw - 12));
    var top = rect.top > 150 ? rect.top - 132 : rect.bottom + 8;
    box.style.left = left + "px";
    box.style.top = top + "px";
    document.getElementById("v9-pop-close").addEventListener("click", closePopover);
    document.getElementById("v9-pop-speak").addEventListener("click", function () {
      try {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        var u = new SpeechSynthesisUtterance(termText);
        u.lang = "zh-CN";
        window.speechSynthesis.speak(u);
      } catch (e) {}
    });
  }

  function renderAudioDock(artEl, enM) {
    var old = document.getElementById("v9-audio-dock");
    if (old) old.remove();
    var dock = document.createElement("div");
    dock.id = "v9-audio-dock";
    dock.className = "v9-audio-dock v9-no-print";
    dock.innerHTML =
      '<button type="button" class="v9-btn v9-btn-sm is-primary" id="v9-dock-play">' + (audioState.playing ? (enM ? "Pause" : "Tạm dừng") : (enM ? "Play Audio" : "Nghe Bài")) + "</button>" +
      '<select id="v9-dock-rate" aria-label="Speech speed" style="min-height:44px;padding:0 8px;background:var(--v9-bg-surface);color:var(--v9-ink-primary);border:1px solid var(--v9-border-hairline);">' +
      '  <option value="0.85">0.85x</option>' +
      '  <option value="1" selected>1.0x</option>' +
      '  <option value="1.15">1.15x</option>' +
      '  <option value="1.25">1.25x</option>' +
      "</select>" +
      '<button type="button" class="v9-btn v9-btn-sm" id="v9-dock-close">×</button>';
    document.body.appendChild(dock);

    document.getElementById("v9-dock-play").addEventListener("click", function () { toggleAudio(artEl, enM); });
    document.getElementById("v9-dock-rate").addEventListener("change", function (e) {
      audioState.rate = parseFloat(e.target.value) || 1.0;
    });
    document.getElementById("v9-dock-close").addEventListener("click", function () {
      stopAudio();
      dock.remove();
    });
  }

  function toggleAudio(artEl, enM) {
    var target = artEl || document.querySelector(".article-prose, .editorial-article-body, main");
    if (!window.speechSynthesis || !target) return;
    if (audioState.playing) {
      stopAudio();
      return;
    }
    var txt = (target.innerText || "").replace(/\s+/g, " ").trim().slice(0, 3200);
    if (!txt) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(txt);
    u.lang = enM ? "en-US" : "vi-VN";
    u.rate = audioState.rate || 1.0;
    u.onend = function () {
      audioState.playing = false;
      var btn = document.getElementById("v9-dock-play");
      if (btn) btn.textContent = enM ? "Play Audio" : "Nghe Bài";
    };
    audioState.playing = true;
    window.speechSynthesis.speak(u);
    var btn = document.getElementById("v9-dock-play");
    if (btn) btn.textContent = enM ? "Pause" : "Tạm dừng";
  }

  function stopAudio() {
    audioState.playing = false;
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
    var btn = document.getElementById("v9-dock-play");
    if (btn) btn.textContent = "Nghe Bài";
  }

  function mount(enM) {
    var bar = document.getElementById("v9-reader-modebar");
    if (!bar) return;
    var artId = bar.getAttribute("data-art-id") || "";
    var main = document.getElementById("main-content");
    var artEl = main ? (main.querySelector(".article-main-col, .editorial-main-col, .article-body, article") || main) : null;
    if (!artEl) return;

    var Safe = window.CCE_V9_LOADER && window.CCE_V9_LOADER.SafeStorage;
    if (Safe && artId) {
      var prog = Safe.getJSON(PROG_KEY, {});
      prog[artId] = prog[artId] || { scrollRatio: 0.25, completed: false, updatedAt: Date.now() };
      prog[artId].updatedAt = Date.now();
      Safe.setJSON(PROG_KEY, prog);
    }

    if (bar.dataset.v9Bound !== "1") {
      bar.dataset.v9Bound = "1";
      bar.addEventListener("click", function (e) {
        var rBtn = e.target && e.target.closest ? e.target.closest("[data-v9-rmode]") : null;
        if (rBtn) {
          applyLayoutMode(rBtn.getAttribute("data-v9-rmode"), artEl, enM);
          return;
        }
        var aBtn = e.target && e.target.closest ? e.target.closest("[data-v9-audio-toggle]") : null;
        if (aBtn) {
          renderAudioDock(artEl, enM);
          toggleAudio(artEl, enM);
        }
      });

      artEl.addEventListener("click", function (e) {
        var trg = e.target && e.target.closest ? e.target.closest(".v9-term-trigger") : null;
        if (trg) openTermPopover(trg, trg.textContent.trim(), enM);
      });
    }

    applyLayoutMode(getSavedMode(), artEl, enM);
  }

  function destroy() {
    stopAudio();
    closePopover();
    if (sectionObs) {
      sectionObs.disconnect();
      sectionObs = null;
    }
    var dock = document.getElementById("v9-audio-dock");
    if (dock) dock.remove();
  }

  window.CCE_V9_READER = {
    renderModeToolbar: renderModeToolbar,
    mount: mount,
    destroy: destroy,
    closePopover: closePopover,
    toggleAudio: toggleAudio
  };
})();
