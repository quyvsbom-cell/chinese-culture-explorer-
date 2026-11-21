// ============================================================================
// SM-2 SPACED REPETITION ENGINE (TRILINGUAL ZH / EN / VI — WAVE 3.4 + V4)
// Persists interval, easeFactor, repetitions, nextDue in localStorage.
// ============================================================================

(function () {
  "use strict";

  var STORAGE_KEY = "cce_srs_v3";
  var zeroPinyinMode = false;

  function loadDeck() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_e) {
      return [];
    }
  }

  function saveDeck(cards) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cards || []));
    } catch (_e) {}
  }

  function todayMs() {
    return Date.now();
  }

  function addCard(entry) {
    if (!entry || (!entry.hanzi && !entry.term)) return { added: false, reason: "empty" };
    var hanzi = String(entry.hanzi || entry.term || "").trim();
    var cards = loadDeck();
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].hanzi === hanzi) {
        return { added: false, card: cards[i], duplicate: true };
      }
    }
    var card = {
      id: entry.id || ("srs-" + Date.now() + "-" + Math.floor(Math.random() * 1000)),
      hanzi: hanzi,
      pinyin: String(entry.pinyin || ""),
      hanViet: String(entry.hanViet || ""),
      meaningVi: String(entry.meaningVi || entry.meaning || ""),
      meaningEn: String(entry.meaningEn || entry.en || ""),
      source: String(entry.source || entry.articleTitle || "Studio"),
      repetitions: 0,
      intervalDays: 0,
      easeFactor: 2.5,
      nextDue: todayMs(),
      lastGrade: 0
    };
    cards.unshift(card);
    saveDeck(cards);
    return { added: true, card: card };
  }

  // Quality 1 (Again), 2 (Hard), 3 (Good), 4 (Easy) mapped cleanly to SM-2
  function gradeCard(cardId, gradeNum) {
    var g = Math.max(1, Math.min(4, Number(gradeNum) || 3));
    var smQ = g === 1 ? 1 : g === 2 ? 3 : g === 3 ? 4 : 5;
    var cards = loadDeck();
    var updated = null;
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      if (c.id !== cardId) continue;
      if (smQ < 3) {
        c.repetitions = 0;
        c.intervalDays = 0;
        c.nextDue = todayMs() + 10 * 60 * 1000; // due again in 10 minutes
      } else {
        if (c.repetitions === 0) c.intervalDays = 1;
        else if (c.repetitions === 1) c.intervalDays = 6;
        else c.intervalDays = Math.round(c.intervalDays * c.easeFactor);
        c.repetitions += 1;
        c.easeFactor = Math.max(1.3, c.easeFactor + (0.1 - (5 - smQ) * (0.08 + (5 - smQ) * 0.02)));
        c.nextDue = todayMs() + c.intervalDays * 86400000;
      }
      c.lastGrade = g;
      updated = c;
      break;
    }
    saveDeck(cards);
    return updated;
  }

  function getDueCards() {
    var now = todayMs();
    return loadDeck().filter(function (c) { return (c.nextDue || 0) <= now; });
  }

  function removeCard(cardId) {
    var next = loadDeck().filter(function (c) { return c.id !== cardId; });
    saveDeck(next);
    return next.length;
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function seedFromDictionaryIfEmpty() {
    var cur = loadDeck();
    if (cur.length > 0) return cur;
    var dict = window.CCE_DICTIONARY || [];
    for (var i = 0; i < Math.min(4, dict.length); i++) {
      var d = dict[i];
      if (d) {
        addCard({
          id: "seed-" + (d.id || i),
          hanzi: d.hanzi,
          pinyin: d.pinyin,
          hanViet: d.hanViet || "",
          meaningVi: d.meaningVi || "",
          meaningEn: d.meaningEn || "",
          source: "Starter Core Deck"
        });
      }
    }
    return loadDeck();
  }

  var revealedId = null;

  function renderSrsReviewer(enMode) {
    var allCards = seedFromDictionaryIfEmpty();
    var due = getDueCards();
    var active = due[0] || null;
    var showAns = active && revealedId === active.id;

    return (
      '<section class="card mb-2" id="cce-srs-deck-widget" style="padding:1.25rem 1.35rem;border-top:3px solid var(--imperial-red);">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
          '<div>' +
            '<div class="editorial-kicker" style="color:var(--imperial-red);">' + (enMode ? "SM-2 SPACED REPETITION ENGINE · ZH ↔ EN ↔ VI" : "HỆ THỐNG ÔN TẬP NGẮT QUÃNG SM-2 · ZH ↔ EN ↔ VI") + '</div>' +
            '<h3 style="font-family:var(--font-editorial);font-size:1.4rem;margin:0.15rem 0;">' +
              (enMode ? ("Due Today: " + due.length + " / Total Cards: " + allCards.length) : ("Đến hạn hôm nay: " + due.length + " thẻ · Tổng bộ thẻ: " + allCards.length)) +
            '</h3>' +
          '</div>' +
          '<div style="display:flex;gap:0.45rem;flex-wrap:wrap;">' +
            '<button type="button" class="btn ' + (zeroPinyinMode ? "btn-primary" : "btn-secondary") + ' btn-sm" data-action="srs-toggle-zero-pinyin" aria-pressed="' + (zeroPinyinMode ? "true" : "false") + '">' +
              (zeroPinyinMode ? (enMode ? "Zero-Pinyin: ON" : "Ẩn Pinyin: BẬT") : (enMode ? "Pinyin Visible" : "Hiện Pinyin")) +
            '</button>' +
            '<button type="button" class="btn btn-jade btn-sm" data-action="srs-export-anki">' +
              (enMode ? "Export Anki 4-Col CSV" : "Xuất Anki CSV (4 Cột ZH·EN·VI)") +
            '</button>' +
          '</div>' +
        '</div>' +

        (active ? (
          '<div class="flashcard-layer" style="margin:0;text-align:center;padding:1.5rem 1rem;">' +
            '<div style="font-size:0.74rem;color:var(--text-muted);margin-bottom:0.35rem;">' +
              esc(active.source) + ' · EF ' + Number(active.easeFactor || 2.5).toFixed(2) +
            '</div>' +
            '<div class="hanzi" style="font-size:2.4rem;font-weight:700;color:var(--ink-primary);line-height:1.2;">' + esc(active.hanzi) + '</div>' +
            ((!zeroPinyinMode || showAns) && active.pinyin ? '<div class="pinyin" style="font-size:1rem;color:var(--imperial-red);margin-top:0.3rem;">' + esc(active.pinyin) + '</div>' : '') +
            '<div style="display:flex;justify-content:center;gap:0.45rem;margin:0.75rem 0;">' +
              '<button type="button" class="btn btn-secondary btn-sm" data-action="speak-zh" data-zh="' + esc(active.hanzi) + '">' + (enMode ? "Speak ZH" : "Nghe ZH") + '</button>' +
              '<button type="button" class="btn btn-secondary btn-sm" data-action="open-stroke-pad" data-hanzi="' + esc(active.hanzi.charAt(0)) + '">' + (enMode ? "Write 米字格" : "Tập viết Ô Mễ Tự") + '</button>' +
              (!showAns ? '<button type="button" class="btn btn-primary btn-sm" data-action="srs-reveal" data-id="' + esc(active.id) + '">' + (enMode ? "Reveal Answer" : "Hiện Đáp án") + '</button>' : '') +
            '</div>' +
            (showAns ? (
              '<div style="border-top:1px dashed var(--hairline);padding-top:0.85rem;margin-top:0.5rem;">' +
                (active.hanViet ? '<div style="font-size:0.86rem;color:var(--jade-green);font-weight:700;margin-bottom:0.25rem;">Hán–Việt: ' + esc(active.hanViet) + '</div>' : '') +
                (active.meaningEn ? '<div style="font-size:0.95rem;margin-bottom:0.25rem;"><strong>EN:</strong> ' + esc(active.meaningEn) + '</div>' : '') +
                '<div style="font-size:0.92rem;color:var(--text-secondary);margin-bottom:0.85rem;"><strong>VI:</strong> ' + esc(active.meaningVi) + '</div>' +
                '<div style="display:flex;justify-content:center;gap:0.45rem;flex-wrap:wrap;" role="group" aria-label="SM-2 Rating">' +
                  '<button type="button" class="btn btn-secondary btn-sm" data-action="srs-grade" data-id="' + esc(active.id) + '" data-grade="1">[1] ' + (enMode ? "Again (10m)" : "Quên (10p)") + '</button>' +
                  '<button type="button" class="btn btn-secondary btn-sm" data-action="srs-grade" data-id="' + esc(active.id) + '" data-grade="2">[2] ' + (enMode ? "Hard" : "Khó") + '</button>' +
                  '<button type="button" class="btn btn-jade btn-sm" data-action="srs-grade" data-id="' + esc(active.id) + '" data-grade="3">[3] ' + (enMode ? "Good" : "Nhớ") + '</button>' +
                  '<button type="button" class="btn btn-primary btn-sm" data-action="srs-grade" data-id="' + esc(active.id) + '" data-grade="4">[4] ' + (enMode ? "Easy" : "Thuộc kỹ") + '</button>' +
                '</div>' +
              '</div>'
            ) : '') +
          '</div>'
        ) : (
          '<div class="epistemic-box" style="margin:0;">' +
            '<strong>' + (enMode ? "All due SM-2 cards reviewed for today." : "Đã hoàn thành toàn bộ thẻ SM-2 đến hạn hôm nay.") + '</strong> ' +
            (enMode ? "Highlight Hanzi text in any monograph or click '+ SRS' in Dictionary to grow your deck." : "Bôi đen chữ Hán trong chuyên luận hoặc nhấn '+ SRS' ở Từ điển để nạp thêm thẻ.") +
          '</div>'
        )) +
      '</section>'
    );
  }

  window.CCE_SRS = {
    STORAGE_KEY: STORAGE_KEY,
    loadDeck: loadDeck,
    saveDeck: saveDeck,
    addCard: addCard,
    gradeCard: gradeCard,
    getDueCards: getDueCards,
    removeCard: removeCard,
    reveal: function (id) { revealedId = id; },
    clearReveal: function () { revealedId = null; },
    toggleZeroPinyin: function () { zeroPinyinMode = !zeroPinyinMode; },
    isZeroPinyin: function () { return zeroPinyinMode; },
    renderReviewer: renderSrsReviewer
  };
})();
