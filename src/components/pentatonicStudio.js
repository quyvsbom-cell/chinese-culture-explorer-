// ============================================================================
// CHINESE CULTURE EXPLORER — Pentatonic Web Audio Studio (Wave 3.6)
// Gong-Shang-Jue-Zhi-Yu (C4-D4-E4-G4-A4-C5) across 4 Classical Timbres
// ============================================================================

(function () {
  "use strict";

  var ctx = null;
  var activeTimers = [];
  var state = {
    timbre: "guqin",
    activeNote: null,
    playingMotif: null
  };

  var NOTES = [
    { id: "gong", zh: "宫", pinyin: "Gōng", vi: "Cung (C4)", freq: 261.63 },
    { id: "shang", zh: "商", pinyin: "Shāng", vi: "Thương (D4)", freq: 293.66 },
    { id: "jue", zh: "角", pinyin: "Jué", vi: "Giốc (E4)", freq: 329.63 },
    { id: "zhi", zh: "徵", pinyin: "Zhǐ", vi: "Chủy (G4)", freq: 392.00 },
    { id: "yu", zh: "羽", pinyin: "Yǔ", vi: "Vũ (A4)", freq: 440.00 },
    { id: "gong8", zh: "高宫", pinyin: "Gāogōng", vi: "Cao Cung (C5)", freq: 523.25 }
  ];

  var TIMBRES = [
    { id: "guqin", vi: "Cổ Cầm (Tơ tằm)", en: "Guqin Silk", wave: "triangle", decay: 1.85, overtone: 2.0 },
    { id: "bianzhong", vi: "Biên Chung (Chuông đồng)", en: "Bianzhong Bronze", wave: "sine", decay: 2.6, overtone: 2.41 },
    { id: "dizi", vi: "Địch Tử (Sáo trúc)", en: "Dizi Flute", wave: "sine", decay: 0.75, overtone: 3.0 },
    { id: "pipa", vi: "Tỳ Bà (Gảy phím)", en: "Pipa Plucked", wave: "sawtooth", decay: 0.55, overtone: 2.0 }
  ];

  var MOTIFS = [
    {
      id: "gaoshan",
      nameVi: "Cao Sơn Lưu Thủy (高山流水)",
      nameEn: "High Mountains & Flowing Water",
      seq: [4, 3, 2, 1, 0, 2, 3, 5]
    },
    {
      id: "molihua",
      nameVi: "Mạt Lị Hoa (茉莉花)",
      nameEn: "Jasmine Flower Motif",
      seq: [2, 2, 3, 4, 5, 5, 4, 3]
    },
    {
      id: "yangguan",
      nameVi: "Dương Quan Tam Điệp (阳关三叠)",
      nameEn: "Three Refrains of Yangguan",
      seq: [1, 2, 3, 4, 3, 2, 1, 0]
    }
  ];

  function ensureAudio() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) ctx = new AC();
    if (ctx.state === "suspended") ctx.resume().catch(function () {});
    return ctx;
  }

  function stopMotif() {
    activeTimers.forEach(function (t) { clearTimeout(t); });
    activeTimers = [];
    state.playingMotif = null;
    state.activeNote = null;
  }

  function playNoteIdx(idx, durScale) {
    var note = NOTES[idx] || NOTES[0];
    state.activeNote = note.id;
    var ac = ensureAudio();
    if (!ac) return;
    var tm = TIMBRES.find(function (t) { return t.id === state.timbre; }) || TIMBRES[0];
    var now = ac.currentTime;
    var dur = tm.decay * (durScale || 1);

    var osc = ac.createOscillator();
    var osc2 = ac.createOscillator();
    var filter = ac.createBiquadFilter();
    var gain = ac.createGain();
    var gain2 = ac.createGain();

    osc.type = tm.wave;
    osc.frequency.setValueAtTime(note.freq, now);
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(note.freq * tm.overtone, now);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(state.timbre === "pipa" ? 2400 : 1800, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.24, now + (state.timbre === "dizi" ? 0.09 : 0.015));
    gain.gain.exponentialRampToValueAtTime(0.0008, now + dur);

    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.linearRampToValueAtTime(state.timbre === "bianzhong" ? 0.14 : 0.06, now + 0.02);
    gain2.gain.exponentialRampToValueAtTime(0.0005, now + dur * 0.75);

    osc.connect(filter);
    osc2.connect(gain2);
    filter.connect(gain);
    gain.connect(ac.destination);
    gain2.connect(ac.destination);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + dur + 0.05);
    osc2.stop(now + dur + 0.05);
  }

  function playMotif(motifId) {
    stopMotif();
    var m = MOTIFS.find(function (x) { return x.id === motifId; });
    if (!m) return;
    state.playingMotif = motifId;
    m.seq.forEach(function (noteIdx, step) {
      var id = setTimeout(function () {
        playNoteIdx(noteIdx, 0.72);
        updateVisualDom();
        if (step === m.seq.length - 1) {
          setTimeout(function () {
            state.playingMotif = null;
            state.activeNote = null;
            updateVisualDom();
          }, 420);
        }
      }, step * 380);
      activeTimers.push(id);
    });
  }

  function updateVisualDom() {
    var root = document.getElementById("cce-pentatonic-studio");
    if (!root) return;
    root.querySelectorAll("[data-pnote-id]").forEach(function (b) {
      b.classList.toggle("btn-primary", b.getAttribute("data-pnote-id") === state.activeNote);
      b.classList.toggle("btn-secondary", b.getAttribute("data-pnote-id") !== state.activeNote);
    });
    root.querySelectorAll("[data-pmotif-id]").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-pmotif-id") === state.playingMotif);
    });
  }

  function renderStudio(enM) {
    return (
      '<section id="cce-pentatonic-studio" class="card mb-2" style="border-left:4px solid var(--antique-gold);padding:1.2rem 1.35rem;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--antique-gold);">' + (enM ? "WEB AUDIO ACOUSTIC LAB · 五声音阶体验坊" : "Phòng Âm thanh Ngũ cung (Web Audio) · 五声音阶体验坊") + '</div>' +
      '      <h3 style="margin:0.2rem 0 0;font-size:1.25rem;">' + (enM ? "Playable Chinese Pentatonic Scale (4 Classical Timbres)" : "Thực hành Âm giai Ngũ cung Cổ điển (4 Âm sắc Nhạc khí)") + '</h3>' +
      '    </div>' +
      '    <button type="button" class="btn btn-ghost btn-sm" data-penta-action="stop">' + (enM ? "Mute / Stop" : "Dừng âm") + '</button>' +
      '  </div>' +
      '  <div class="filter-bar" style="margin-bottom:0.85rem;">' +
      TIMBRES.map(function (t) {
        return '<button type="button" class="filter-pill ' + (state.timbre === t.id ? "active" : "") + '" data-penta-action="timbre" data-val="' + t.id + '">' + (enM ? t.en : t.vi) + '</button>';
      }).join("") +
      '  </div>' +
      '  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(115px,1fr));gap:0.5rem;margin-bottom:0.85rem;">' +
      NOTES.map(function (n, idx) {
        return (
          '<button type="button" class="btn ' + (state.activeNote === n.id ? "btn-primary" : "btn-secondary") + ' btn-sm" style="flex-direction:column;padding:0.65rem 0.5rem;height:auto;" data-penta-action="note" data-idx="' + idx + '" data-pnote-id="' + n.id + '">' +
          '  <span class="hanzi" style="font-size:1.3rem;">' + n.zh + '</span>' +
          '  <span style="font-size:0.76rem;">' + (enM ? n.pinyin : n.vi) + '</span>' +
          '</button>'
        );
      }).join("") +
      '  </div>' +
      '  <div style="display:flex;align-items:center;flex-wrap:wrap;gap:0.45rem;">' +
      '    <strong style="font-size:0.8rem;color:var(--text-muted);">' + (enM ? "Classical Motifs:" : "Khúc mẫu Cổ điển:") + '</strong>' +
      MOTIFS.map(function (m) {
        return '<button type="button" class="filter-pill ' + (state.playingMotif === m.id ? "active" : "") + '" data-penta-action="motif" data-id="' + m.id + '" data-pmotif-id="' + m.id + '">' + (enM ? m.nameEn : m.nameVi) + '</button>';
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  function bindEvents() {
    if (window._ccePentaBound || typeof document === "undefined") return;
    window._ccePentaBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-penta-action]") : null;
      if (!el) return;
      var act = el.getAttribute("data-penta-action");
      if (act === "note") {
        stopMotif();
        playNoteIdx(parseInt(el.getAttribute("data-idx"), 10) || 0, 1);
        updateVisualDom();
      } else if (act === "timbre") {
        state.timbre = el.getAttribute("data-val") || "guqin";
        var root = document.getElementById("cce-pentatonic-studio");
        if (root) {
          root.querySelectorAll('[data-penta-action="timbre"]').forEach(function (b) {
            b.classList.toggle("active", b.getAttribute("data-val") === state.timbre);
          });
        }
      } else if (act === "motif") {
        playMotif(el.getAttribute("data-id"));
        updateVisualDom();
      } else if (act === "stop") {
        stopMotif();
        updateVisualDom();
      }
    });
  }

  bindEvents();

  window.CCE_PENTATONIC_STUDIO = {
    renderStudio: renderStudio,
    stop: stopMotif
  };
})();
