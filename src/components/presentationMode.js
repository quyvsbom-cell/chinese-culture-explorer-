// ============================================================================
// CHINESE CULTURE EXPLORER — Presentation Lecture Slide Mode (Wave 3.6)
// Fullscreen Academic Slide Deck from Any Monograph (ArrowLeft/ArrowRight/F/Esc)
// ============================================================================

(function () {
  "use strict";

  var st = {
    open: false,
    idx: 0,
    slides: [],
    title: ""
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function buildSlides(art, view, enM) {
    var out = [];
    out.push({
      kicker: (view && view.categoryLabel) || "CHINESE CULTURE EXPLORER",
      title: (view && view.title) || (enM ? (art.titleEn || art.titleVi) : art.titleVi),
      subtitle: art.titleZh || "",
      bullets: (view && view.keyTakeaways && view.keyTakeaways.length)
        ? view.keyTakeaways.slice(0, 4)
        : [String((view && view.introduction) || "").slice(0, 280)]
    });
    var sections = (view && view.mainContent) || art.mainContent || [];
    sections.forEach(function (sec, i) {
      var raw = String(sec.body || "").replace(/\*\*([^*]+)\*\*/g, "$1");
      var parts = raw.split(/(?<=[.!?。])\s+/).filter(Boolean);
      out.push({
        kicker: (enM ? "Section " : "Mục ") + (i + 1) + "/" + sections.length,
        title: String(sec.heading || "").replace(/^\d+\.\s*/, ""),
        subtitle: art.titleZh || "",
        bullets: parts.slice(0, 4)
      });
    });
    if (view && view.primaryQuote && view.primaryQuote.zh) {
      out.push({
        kicker: enM ? "Primary Classical Text" : "Nguyên điển Khảo chứng",
        title: view.primaryQuote.source || "Primary Source",
        subtitle: view.primaryQuote.zh,
        bullets: [
          view.primaryQuote.pinyin || "",
          enM ? (view.primaryQuote.en || view.primaryQuote.vi) : view.primaryQuote.vi
        ].filter(Boolean)
      });
    }
    if (view && view.conclusion) {
      out.push({
        kicker: enM ? "Synthesis & Conclusion" : "Tổng kết Học thuật",
        title: enM ? "Key Synthesis" : "Luận giải Kết luận",
        subtitle: art.titleZh || "",
        bullets: String(view.conclusion).replace(/\*\*([^*]+)\*\*/g, "$1").split(/(?<=[.!?。])\s+/).filter(Boolean).slice(0, 4)
      });
    }
    return out;
  }

  function open(art, view, enM) {
    if (!art) return;
    st.slides = buildSlides(art, view, enM);
    st.idx = 0;
    st.open = true;
    st.title = (view && view.title) || art.titleVi || "";
    renderOverlay();
  }

  function close() {
    st.open = false;
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(function () {});
    }
    var el = document.getElementById("cce-slide-deck-overlay");
    if (el) el.remove();
  }

  function step(dir) {
    if (!st.open || !st.slides.length) return;
    st.idx = Math.max(0, Math.min(st.slides.length - 1, st.idx + dir));
    renderOverlay();
  }

  function toggleFullscreen() {
    var el = document.getElementById("cce-slide-deck-overlay");
    if (!el) return;
    if (!document.fullscreenElement && el.requestFullscreen) {
      el.requestFullscreen().catch(function () {});
    } else if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(function () {});
    }
  }

  function renderOverlay() {
    var existing = document.getElementById("cce-slide-deck-overlay");
    if (!st.open) {
      if (existing) existing.remove();
      return;
    }
    var s = st.slides[st.idx] || {};
    var html =
      '<div style="max-width:960px;width:100%;margin:auto;background:#FAF7F2;color:#1C1B19;border:1px solid #C8BFA8;padding:2.2rem 2.4rem;display:flex;flex-direction:column;min-height:460px;justify-content:space-between;box-shadow:0 20px 50px rgba(0,0,0,0.45);">' +
      '  <div>' +
      '    <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #DDD5C5;padding-bottom:0.75rem;margin-bottom:1.25rem;font-family:monospace;font-size:0.82rem;color:#6E675F;">' +
      '      <span>' + esc(s.kicker || "SLIDE") + '</span>' +
      '      <span>' + (st.idx + 1) + ' / ' + st.slides.length + ' · ' + esc(st.title.slice(0, 48)) + '</span>' +
      '    </div>' +
      (s.subtitle ? '<div class="hanzi" style="font-size:1.35rem;color:#9E2A2B;margin-bottom:0.45rem;">' + esc(s.subtitle) + '</div>' : "") +
      '    <h2 style="font-family:Georgia,serif;font-size:1.9rem;line-height:1.25;margin:0 0 1.25rem;color:#111;">' + esc(s.title || "") + '</h2>' +
      '    <ul style="padding-left:1.35rem;font-size:1.06rem;line-height:1.65;color:#2C2A27;margin:0;">' +
      (s.bullets || []).map(function (b) {
        return '<li style="margin-bottom:0.65rem;">' + esc(b) + '</li>';
      }).join("") +
      '    </ul>' +
      '  </div>' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #DDD5C5;padding-top:1rem;margin-top:1.5rem;flex-wrap:wrap;gap:0.5rem;">' +
      '    <div style="font-size:0.78rem;color:#6E675F;">Shortcuts: Left / Right Arrow · F Fullscreen · Esc Exit</div>' +
      '    <div style="display:flex;gap:0.5rem;">' +
      '      <button type="button" class="btn btn-secondary btn-sm" data-slide-act="prev">← Prev</button>' +
      '      <button type="button" class="btn btn-secondary btn-sm" data-slide-act="fs">Fullscreen [F]</button>' +
      '      <button type="button" class="btn btn-primary btn-sm" data-slide-act="next">Next →</button>' +
      '      <button type="button" class="btn btn-ghost btn-sm" data-slide-act="close">Close [Esc]</button>' +
      '    </div>' +
      '  </div>' +
      '</div>';

    if (!existing) {
      existing = document.createElement("div");
      existing.id = "cce-slide-deck-overlay";
      existing.setAttribute("role", "dialog");
      existing.setAttribute("aria-modal", "true");
      existing.setAttribute("aria-label", "Presentation Slide Mode");
      existing.style.cssText = "position:fixed;inset:0;z-index:9990;background:rgba(16,15,14,0.92);display:flex;padding:1.5rem;overflow:auto;";
      document.body.appendChild(existing);
    }
    existing.innerHTML = html;
  }

  function bindEvents() {
    if (window._cceSlideBound || typeof document === "undefined") return;
    window._cceSlideBound = true;

    document.addEventListener("click", function (e) {
      var btn = e.target && e.target.closest ? e.target.closest("[data-slide-act]") : null;
      if (!btn) return;
      var act = btn.getAttribute("data-slide-act");
      if (act === "prev") step(-1);
      else if (act === "next") step(1);
      else if (act === "fs") toggleFullscreen();
      else if (act === "close") close();
    });

    document.addEventListener("keydown", function (e) {
      if (!st.open) return;
      if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
      else if (e.key === "f" || e.key === "F") { e.preventDefault(); toggleFullscreen(); }
      else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); close(); }
    }, true);
  }

  bindEvents();

  window.CCE_SLIDE_MODE = {
    open: open,
    close: close,
    isOpen: function () { return st.open; }
  };
})();
