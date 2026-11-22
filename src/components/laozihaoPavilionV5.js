// ============================================================================
// CHINESE CULTURE EXPLORER V5.0 — Dedicated Chinese Honored Brands Pavilion
// Interactive Showcase for Zhōnghuá Lǎozìhào (中华老字号) across Business & Craft
// ============================================================================

(function () {
  "use strict";

  var st = {
    cat: "all",
    query: ""
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function spk(zh) {
    if (!zh) return "";
    return '<button type="button" class="tts-speak-btn" data-lzh-speak="' + esc(zh) + '" title="Listen zh-CN"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>';
  }

  function resolveBrandThumb(b, idx) {
    var vis = (window.CCE_PROVINCE_ITEM_VISUALS && b && b.provinceId && window.CCE_PROVINCE_ITEM_VISUALS[b.provinceId]) || {};
    var dishes = Array.isArray(vis.dishes) ? vis.dishes : [];
    var heritage = Array.isArray(vis.heritage) ? vis.heritage : [];
    var i = Math.abs(Number(idx) || 0);
    if (b && b.cat === "culinary") {
      return (dishes.length && dishes[i % dishes.length]) || (heritage.length && heritage[i % heritage.length]) || "assets/images/articles/hero-chinese-cuisines.jpg";
    }
    if (b && b.cat === "tea_spirits") {
      var teaFallback = ["assets/images/articles/hero-six-teas-gongfu.jpg", "assets/images/articles/hero-tea-culture.jpg", "assets/images/articles/hero-chinese-banquet.jpg"];
      return (dishes.length && dishes[(i + 1) % dishes.length]) || (heritage.length && heritage[i % heritage.length]) || teaFallback[i % teaFallback.length];
    }
    if (b && b.cat === "tcm_pharmacy") {
      return (heritage.length && heritage[i % heritage.length]) || "assets/images/museum/acupuncture-bronze.jpg";
    }
    return (heritage.length && heritage[(i + 1) % heritage.length]) || "assets/images/articles/hero-laozihao-craft.jpg";
  }

  function renderLzhThumb(src, title) {
    if (!src) return "";
    return (
      '<div class="img-skeleton-bg" style="position:relative;aspect-ratio:16/10;width:100%;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);margin-bottom:0.45rem;background:var(--bg-surface);cursor:pointer;" data-action="open-custom-image" data-src="' + esc(src) + '" data-caption="' + esc(title) + '">' +
      '  <img src="' + esc(src) + '" alt="' + esc(title) + '" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:50% 35%;display:block;" onerror="this.onerror=null;this.src=\'assets/images/articles/hero-laozihao-craft.jpg\';" />' +
      '</div>'
    );
  }

  function renderPavilion(enM) {
    var data = window.CCE_V5_LAOZIHAO || {};
    var cats = data.categories || [];
    var brands = data.brands || [];
    if (!brands.length) return "";

    var q = st.query.trim().toLowerCase();
    var filtered = brands.filter(function (b) {
      var catOk = st.cat === "all" || b.cat === st.cat;
      var qOk = !q || (b.zh + " " + b.pinyin + " " + b.hanViet + " " + b.nameEn + " " + b.cityVi + " " + b.craftSecretVi).toLowerCase().indexOf(q) !== -1;
      return catOk && qOk;
    });

    return (
      '<section id="cce-laozihao-pavilion" class="card mb-2" style="margin-top:2rem;border-top:3px solid var(--antique-gold);">' +
      '  <div class="section-header" style="margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "CHINESE HONORED BRANDS ARCHIVE · 中华老字号博物馆" : "Chuyên mục Thương hiệu Di sản · 中华老字号 (Trung Hoa Lão Tự Hiệu)") + '</div>' +
      '      <h2 class="section-title" style="font-size:1.55rem;margin:0.15rem 0 0;">' + (enM ? "24 Chinese Time-Honored Brands: Centuries of Craft, Ethics &amp; Supply Chain Heritage" : "24 Thương hiệu Lâu Đời Trăm Năm (中华老字号): Bí quyết Thủ công &amp; Bài học Kinh doanh") + '</h2>' +
      '      <p class="section-subtitle" style="margin-top:0.25rem;">' + (enM ? "Tracing Qing/Ming royal purveyors across TCM pharmacies, culinary masters, tea houses, and scholars' craft studios—and what their quality discipline teaches modern EU–Asia trade." : "Từ hiệu thuốc Đồng Nhân Đường (1669), Trần Lý Tế (1600) đến Toàn Tụ Đức, Mao Đài, Ngô Dụ Thái &amp; Vinh Bảo Trai — đúc kết chữ Tín thương trường và chuẩn hóa nguồn gốc.") + '</p>' +
      '    </div>' +
      '  </div>' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.65rem;margin-bottom:0.85rem;">' +
      '    <input id="cce-lzh-search" type="text" class="form-input" style="max-width:340px;font-size:0.84rem;" value="' + esc(st.query) + '" placeholder="' + (enM ? "Search Tongrentang, Moutai, Bắc Kinh, Lụa..." : "Tìm Đồng Nhân Đường, Toàn Tụ Đức, Mao Đài, 荣宝斋...") + '" />' +
      '    <div class="filter-bar" style="margin:0;">' +
      cats.map(function (c) {
        return '<button type="button" class="filter-pill ' + (st.cat === c.id ? "active" : "") + '" data-lzh-act="cat" data-val="' + c.id + '">' + esc(enM ? c.en : c.vi) + '</button>';
      }).join("") +
      '    </div>' +
      '  </div>' +
      '  <div class="grid grid-3" style="gap:0.85rem;">' +
      filtered.map(function (b, idx) {
        var thumbSrc = resolveBrandThumb(b, idx);
        var thumbCap = (enM ? b.nameEn : b.hanViet) + " (" + b.zh + " · Est. " + b.foundedYear + ")";
        return (
          '<article class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.35rem;padding:0.95rem 1.05rem;">' +
          renderLzhThumb(thumbSrc, thumbCap) +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">' +
          '    <span class="badge badge-gold">Est. ' + esc(b.foundedYear) + ' · ' + esc(b.cityVi) + '</span>' +
          '    <span>' + spk(b.zh) + ' <button type="button" class="btn btn-ghost btn-sm" style="padding:0.1rem 0.38rem;font-size:0.72rem;border:1px solid var(--hairline);" data-lzh-act="srs" data-zh="' + esc(b.zh) + '" data-py="' + esc(b.pinyin) + '" data-hv="' + esc(b.hanViet) + '" data-vi="' + esc(b.hanViet + " (" + b.foundedYear + ")") + '" data-en="' + esc(b.nameEn) + '">+ SRS</button></span>' +
          '  </div>' +
          '  <div style="display:flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;">' +
          '    <strong class="hanzi" style="font-size:1.25rem;color:var(--imperial-red);">' + esc(b.zh) + '</strong>' +
          '    <span class="pinyin text-xs">' + esc(b.pinyin) + '</span>' +
          '  </div>' +
          '  <strong>' + esc(enM ? b.nameEn : b.hanViet) + '</strong>' +
          '  <div style="font-size:0.76rem;color:var(--text-muted);">' + esc(b.dynastyVi) + '</div>' +
          '  <p style="font-size:0.81rem;margin:0.15rem 0;color:var(--text-secondary);">' + esc(enM ? b.craftSecretEn : b.craftSecretVi) + '</p>' +
          '  <div style="font-size:0.77rem;color:var(--jade-green);border-top:1px dashed var(--hairline);padding-top:0.35rem;margin-top:auto;"><strong>' + (enM ? "Brand &amp; Supply Chain Lesson:" : "Góc nhìn Thương mại:") + '</strong> ' + esc(enM ? b.b2bTradeEn : b.b2bTradeVi) + '</div>' +
          '  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.3rem;gap:0.4rem;">' +
          '    <span style="font-size:0.73rem;color:var(--text-muted);">' + esc(b.visitTipVi) + '</span>' +
          '    <button type="button" class="btn btn-secondary btn-sm" style="padding:0.15rem 0.45rem;font-size:0.72rem;flex-shrink:0;" data-action="open-province-detail" data-id="' + esc(b.provinceId) + '">' + (enM ? "Province →" : "Tỉnh →") + '</button>' +
          '  </div>' +
          '</article>'
        );
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  function bind() {
    if (window._cceLzhBound || typeof document === "undefined") return;
    window._cceLzhBound = true;
    document.addEventListener("input", function (e) {
      if (e.target && e.target.id === "cce-lzh-search") {
        st.query = e.target.value || "";
        var pos = e.target.selectionStart;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
        var ni = document.getElementById("cce-lzh-search");
        if (ni) { ni.focus(); try { ni.setSelectionRange(pos, pos); } catch (_e) {} }
      }
    });
    document.addEventListener("click", function (e) {
      var sp = e.target && e.target.closest ? e.target.closest("[data-lzh-speak]") : null;
      if (sp) {
        if (window.CCE_SPEECH && window.CCE_SPEECH.speakChinese) {
          window.CCE_SPEECH.speakChinese(sp.getAttribute("data-lzh-speak"));
        }
        return;
      }
      var el = e.target && e.target.closest ? e.target.closest("[data-lzh-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-lzh-act");
      if (act === "cat") {
        st.cat = el.getAttribute("data-val") || "all";
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "srs" && window.CCE_SRS && window.CCE_SRS.addCard) {
        window.CCE_SRS.addCard({
          id: "lzh-" + el.getAttribute("data-zh"),
          hanzi: el.getAttribute("data-zh"),
          pinyin: el.getAttribute("data-py"),
          hanViet: el.getAttribute("data-hv"),
          meaningVi: el.getAttribute("data-vi"),
          meaningEn: el.getAttribute("data-en"),
          source: "Chinese Honored Brands (老字号)"
        });
        el.textContent = "Saved!";
      }
    });
  }
  bind();

  window.CCE_LAOZIHAO_PAVILION = {
    renderPavilion: renderPavilion
  };
})();
