// ============================================================================
// WAVE 3.4 LEARNING HUB EXPANSION: 64+ HAN-VIET FALSE FRIENDS FLIP STUDIO
// Zero-Build IIFE attached to window.CCE_LEARNING_V3
// ============================================================================

(function () {
  "use strict";

  var ffContext = "all";
  var flippedMap = {};

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderFalseFriendsPanel(enM) {
    var list = window.CCE_FALSE_FRIENDS_V3 || [];
    if (!list.length) return "";
    var visible = ffContext === "all" ? list : list.filter(function (x) { return x.context === ffContext; });
    var ctxTabs = [
      { id: "all", vi: "Tất cả (" + list.length + ")", en: "All (" + list.length + ")" },
      { id: "daily", vi: "Đời sống (" + list.filter(function (x) { return x.context === "daily"; }).length + ")", en: "Daily (" + list.filter(function (x) { return x.context === "daily"; }).length + ")" },
      { id: "b2b", vi: "Thương mại B2B (" + list.filter(function (x) { return x.context === "b2b"; }).length + ")", en: "Business B2B (" + list.filter(function (x) { return x.context === "b2b"; }).length + ")" },
      { id: "travel", vi: "Du lịch (" + list.filter(function (x) { return x.context === "travel"; }).length + ")", en: "Travel (" + list.filter(function (x) { return x.context === "travel"; }).length + ")" }
    ];

    return (
      '<section class="card mt-2" id="cce-false-friends-studio" style="padding:1.25rem 1.35rem;border-top:3px solid var(--antique-gold);">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
          '<div>' +
            '<div class="editorial-kicker" style="color:var(--antique-gold);">' + (enM ? "LINGUISTIC PITFALLS · SINO-VIETNAMESE FALSE FRIENDS" : "CẢNH BÁO NGỮ NGHĨA · TỪ HÁN–VIỆT ĐỒNG HÌNH DỊ NGHĨA (BẠN GIẢ)") + '</div>' +
            '<h3 style="font-family:var(--font-editorial);font-size:1.4rem;margin:0.15rem 0;">' + (enM ? (list.length + " Essential Sino–Vietnamese vs. Modern Mandarin Pairs") : (list.length + " Cặp 'Bạn giả' Hán–Việt Dễ Hiểu Nhầm Khi Giao Tiếp")) + '</h3>' +
          '</div>' +
          '<div style="display:flex;gap:0.35rem;flex-wrap:wrap;">' +
            ctxTabs.map(function (c) {
              return '<button type="button" class="filter-pill ' + (ffContext === c.id ? "active" : "") + '" data-action="v3-ff-ctx" data-ctx="' + c.id + '" style="font-size:0.75rem;padding:0.22rem 0.58rem;">' +
                esc(enM ? c.en : c.vi) +
              '</button>';
            }).join("") +
          '</div>' +
        '</div>' +

        '<div class="grid grid-3" style="gap:0.85rem;">' +
          visible.map(function (it) {
            var isFlip = Boolean(flippedMap[it.id]);
            return (
              '<article class="card interactive" style="padding:0.9rem 1rem;background:var(--bg-surface);border-left:3px solid ' + (isFlip ? "var(--jade-green)" : "var(--imperial-red)") + ';display:flex;flex-direction:column;gap:0.4rem;">' +
                '<div style="display:flex;justify-content:space-between;align-items:center;gap:0.35rem;">' +
                  '<span class="badge badge-outline" style="font-size:0.68rem;">' + esc(it.hanViet) + '</span>' +
                  '<div style="display:flex;gap:0.3rem;">' +
                    '<button type="button" class="btn btn-ghost btn-sm" style="padding:0.15rem 0.4rem;font-size:0.72rem;" data-action="speak-zh" data-zh="' + esc(it.hanzi) + '" aria-label="Listen"><svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.85rem;height:0.85rem;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 010 7.07"/></svg></button>' +
                    '<button type="button" class="btn btn-ghost btn-sm" style="padding:0.15rem 0.45rem;font-size:0.72rem;" data-action="v3-ff-flip" data-id="' + esc(it.id) + '">' + (isFlip ? (enM ? "Front" : "Mặt trước") : (enM ? "Reveal Diff" : "Lật Bẫy Nghĩa")) + '</button>' +
                  '</div>' +
                '</div>' +
                '<div style="display:flex;align-items:baseline;gap:0.5rem;">' +
                  '<strong class="hanzi" style="font-size:1.35rem;color:var(--ink-primary);">' + esc(it.hanzi) + '</strong>' +
                  '<span class="pinyin" style="font-size:0.82rem;color:var(--imperial-red);">' + esc(it.pinyin) + '</span>' +
                '</div>' +
                (!isFlip ? (
                  '<div style="font-size:0.81rem;line-height:1.5;">' +
                    '<div style="color:var(--text-muted);"><strong>' + (enM ? "Vietnamese usage:" : "Hiểu theo tiếng Việt:") + '</strong> ' + esc(it.vietnameseMeaning) + '</div>' +
                    '<div style="color:var(--jade-green);margin-top:0.2rem;"><strong>' + (enM ? "Modern Chinese:" : "Nghĩa Tiếng Trung thực tế:") + '</strong> ' + esc(it.modernChineseMeaning) + '</div>' +
                  '</div>'
                ) : (
                  '<div style="font-size:0.8rem;line-height:1.5;background:var(--bg-paper);padding:0.5rem;border:1px solid var(--hairline);">' +
                    '<div style="color:var(--imperial-red);font-weight:600;margin-bottom:0.25rem;">' + esc(enM ? it.warningEn : it.warningVi) + '</div>' +
                    '<div><span class="hanzi">' + esc(it.exampleZh) + '</span><br><span style="color:var(--text-secondary);">' + esc(enM ? it.exampleEn : it.exampleVi) + '</span></div>' +
                  '</div>'
                )) +
              '</article>'
            );
          }).join("") +
        '</div>' +
      '</section>'
    );
  }

  window.CCE_LEARNING_V3 = {
    renderFalseFriendsPanel: renderFalseFriendsPanel,
    setContext: function (ctx) { ffContext = ctx || "all"; },
    toggleFlip: function (id) { flippedMap[id] = !flippedMap[id]; }
  };
})();
