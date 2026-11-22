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
    if (b && b.imagePath) return b.imagePath;
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

  function coreZhKey(zh) {
    return String(zh || "")
      .replace(/^(北京|杭州|广州|漳州|成都|宜宾|绍兴|苏州|太谷|东阿|长沙|武汉|上海|天津|济南|重庆|镇江|桂林|扬州|开封|福州|佛山|宜宾|泸州|杏花村|青岛|烟台|黄山|安溪|勐海|凤翔|宿迁|泾县|湖州|安徽|景德镇|沈阳)/, "")
      .replace(/\s*\(.*?\)\s*/g, "")
      .trim();
  }

  function mergeBrands() {
    var seed = (window.CCE_V5_LAOZIHAO && window.CCE_V5_LAOZIHAO.brands) || [];
    var exp = (window.CCE_V5_LAOZIHAO_EXPANDED && window.CCE_V5_LAOZIHAO_EXPANDED.brands60) || [];
    var v6Obj = window.CCE_V6_BRANDS_CRAFT || {};
    var v6Add = (v6Obj.brandsAdditional40 || []).concat(v6Obj.brandsAdditional36 || []);
    var seen = {};
    var out = [];
    seed.concat(exp, v6Add).forEach(function (b) {
      if (!b || !b.zh) return;
      var key = coreZhKey(b.zh) || b.zh;
      if (seen[key]) {
        // Merge any longer/enriched fields into existing item
        var prev = seen[key];
        [
          "signatureProductVi", "signatureProductEn", "qualityStandardVi", "qualityStandardEn",
          "vietnamAseanLessonVi", "vietnamAseanLessonEn", "flagshipAddressZh", "craftProcessStepsVi",
          "craftProcessStepsEn", "sensoryOrMaterialSpecVi", "sensoryOrMaterialSpecEn",
          "authenticVsCounterfeitVi", "authenticVsCounterfeitEn", "exportComplianceChecklistVi",
          "exportComplianceChecklistEn", "mofcomBatch", "imagePath"
        ].forEach(function (k) {
          if (!prev[k] && b[k]) prev[k] = b[k];
        });
        return;
      }
      seen[key] = b;
      out.push(b);
    });
    return out;
  }

  function renderPavilion(enM) {
    var brands = mergeBrands();
    var giBase = (window.CCE_V5_LAOZIHAO_EXPANDED && window.CCE_V5_LAOZIHAO_EXPANDED.giAppellations12) || [];
    var v6B = window.CCE_V6_BRANDS_CRAFT || {};
    var giV6 = v6B.giAdditional18 || [];
    var giList = giBase.concat(giV6);
    var flows12 = v6B.craftProcessFlowcharts12 || [];
    var guilds5 = v6B.merchantGuilds5 || [];
    var dualCompare10 = v6B.lzhDualComparePairs10 || [];
    if (!brands.length) return "";

    var counts = { all: brands.length, tcm_pharmacy: 0, culinary: 0, tea_spirits: 0, craft_studio: 0 };
    brands.forEach(function (b) {
      if (Object.prototype.hasOwnProperty.call(counts, b.cat)) counts[b.cat] += 1;
    });

    var cats = [
      { id: "all", vi: "Tất cả (" + counts.all + " Thương hiệu)", en: "All " + counts.all + " Brands" },
      { id: "tcm_pharmacy", vi: "Đông y & Dược cục (" + counts.tcm_pharmacy + ")", en: "TCM Pharmacies (" + counts.tcm_pharmacy + ")" },
      { id: "culinary", vi: "Ẩm thực Danh điếm (" + counts.culinary + ")", en: "Culinary Houses (" + counts.culinary + ")" },
      { id: "tea_spirits", vi: "Danh trà & Tửu phường (" + counts.tea_spirits + ")", en: "Tea & Spirits (" + counts.tea_spirits + ")" },
      { id: "craft_studio", vi: "Văn phòng Tứ bảo & Thủ công (" + counts.craft_studio + ")", en: "Crafts & Studio (" + counts.craft_studio + ")" }
    ];
    if (giList.length) {
      cats.push({ id: "gi_eu", vi: giList.length + " Chỉ dẫn Địa lý Âu–Trung (中欧地理标志)", en: giList.length + " EU–China GIs" });
    }

    var q = st.query.trim().toLowerCase();
    var filtered = st.cat === "gi_eu" ? [] : brands.filter(function (b) {
      var catOk = st.cat === "all" || b.cat === st.cat;
      var hay = (b.zh + " " + b.pinyin + " " + b.hanViet + " " + b.nameEn + " " + (b.cityVi || "") + " " + (b.craftSecretVi || "") + " " + (b.signatureProductVi || "")).toLowerCase();
      return catOk && (!q || hay.indexOf(q) !== -1);
    });

    var filteredGi = (st.cat === "all" || st.cat === "gi_eu") ? giList.filter(function (g) {
      if (!q) return true;
      var hay = (g.zh + " " + g.pinyin + " " + g.vi + " " + g.en + " " + (g.gbStandardCode || "") + " " + (g.euProtectionNoteVi || "")).toLowerCase();
      return hay.indexOf(q) !== -1;
    }) : [];

    return (
      '<section id="cce-laozihao-pavilion" class="card mb-2" style="margin-top:2rem;border-top:3px solid var(--antique-gold);">' +
      '  <div class="section-header" style="margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "CHINESE HONORED BRANDS ARCHIVE · 中华老字号与中欧地理标志" : "Chuyên mục Thương hiệu Di sản & Chỉ dẫn Địa lý · 中华老字号 (Trung Hoa Lão Tự Hiệu)") + '</div>' +
      '      <h2 class="section-title" style="font-size:1.55rem;margin:0.15rem 0 0;">' + (enM ? brands.length + " Chinese Time-Honored Brands &amp; " + giList.length + " EU–China Protected GIs" : brands.length + " Thương hiệu Lâu Đời Trăm Năm (中华老字号) &amp; " + giList.length + " Chỉ dẫn Địa lý Âu–Trung") + '</h2>' +
      '      <p class="section-subtitle" style="margin-top:0.25rem;">' + (enM ? "Complete heritage dossiers spanning Imperial TCM Pharmacies, Culinary Houses, Tea Estates &amp; Scholar Studios—enriched with GB/T standards, EU-China 2021 GI protection, and Vietnam procurement takeaways." : "Tổng hợp từ Dược đường Đồng Nhân Đường (1669), Quảng Dự Viễn (1541) đến Toàn Tụ Đức, Mao Đài, Hồng Tinh Tuyên Chỉ &amp; 12 Chỉ dẫn Địa lý EU–Trung 2021 — kèm chuẩn chất lượng GB/T và bài học chuỗi cung ứng Việt Nam.") + '</p>' +
      '    </div>' +
      '  </div>' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.65rem;margin-bottom:0.85rem;">' +
      '    <input id="cce-lzh-search" type="text" class="form-input" style="max-width:340px;font-size:0.84rem;" value="' + esc(st.query) + '" placeholder="' + (enM ? "Search Tongrentang, Longjing, Moutai, GB/T..." : "Tìm Đồng Nhân Đường, Long Tỉnh, Mao Đài, Hồng Tinh...") + '" />' +
      '    <div class="filter-bar" style="margin:0;">' +
      cats.map(function (c) {
        return '<button type="button" class="filter-pill ' + (st.cat === c.id ? "active" : "") + '" data-lzh-act="cat" data-val="' + c.id + '">' + esc(enM ? c.en : c.vi) + '</button>';
      }).join("") +
      '    </div>' +
      '  </div>' +
      (filtered.length ? (
        '  <div class="grid grid-3" style="gap:0.85rem;">' +
        filtered.map(function (b, idx) {
          var thumbSrc = resolveBrandThumb(b, idx);
          var thumbCap = (enM ? b.nameEn : b.hanViet) + " (" + b.zh + " · Est. " + b.foundedYear + ")";
          var hasDeep = Boolean(b.signatureProductVi || b.qualityStandardVi || b.vietnamAseanLessonVi || b.flagshipAddressZh || b.craftProcessStepsVi);
          return (
            '<article class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.35rem;padding:0.95rem 1.05rem;">' +
            renderLzhThumb(thumbSrc, thumbCap) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">' +
            '    <span class="badge badge-gold">Est. ' + esc(b.foundedYear) + ' · ' + esc(b.cityVi) + '</span>' +
            '    <span>' + spk(b.zh) + ' <button type="button" class="btn btn-ghost btn-sm" style="padding:0.1rem 0.38rem;font-size:0.72rem;border:1px solid var(--hairline);" data-lzh-act="srs" data-zh="' + esc(b.zh) + '" data-py="' + esc(b.pinyin) + '" data-hv="' + esc(b.hanViet) + '" data-vi="' + esc(b.hanViet + " (" + b.foundedYear + ")") + '" data-en="' + esc(b.nameEn) + '">+ SRS</button></span>' +
            '  </div>' +
            '  <div style="display:flex;align-items:baseline;gap:0.45rem;flex-wrap:wrap;">' +
            '    <strong class="hanzi" style="font-size:1.22rem;color:var(--imperial-red);">' + esc(b.zh) + '</strong>' +
            '    <span class="pinyin text-xs">' + esc(b.pinyin) + '</span>' +
            '  </div>' +
            '  <strong>' + esc(enM ? b.nameEn : b.hanViet) + '</strong>' +
            '  <div style="font-size:0.76rem;color:var(--text-muted);">' + esc(b.dynastyVi) + '</div>' +
            '  <p style="font-size:0.81rem;margin:0.15rem 0;color:var(--text-secondary);">' + esc(enM ? b.craftSecretEn : b.craftSecretVi) + '</p>' +
            '  <div style="font-size:0.77rem;color:var(--jade-green);border-top:1px dashed var(--hairline);padding-top:0.35rem;"><strong>' + (enM ? "Brand &amp; Supply Chain Lesson:" : "Góc nhìn Thương mại:") + '</strong> ' + esc(enM ? b.b2bTradeEn : b.b2bTradeVi) + '</div>' +
            (hasDeep ? (
              '  <details class="ed-details" style="margin-top:0.2rem;font-size:0.78rem;">' +
              '    <summary style="cursor:pointer;font-weight:700;color:var(--imperial-red);">' + (enM ? "Craft Spec, Auth Guide, GB/GMP &amp; VN Lesson →" : "Hồ sơ Kỹ nghệ, Quy trình 4 Bước, Thật–Giả &amp; Bài học VN →") + '</summary>' +
              '    <div style="margin-top:0.45rem;display:grid;gap:0.35rem;padding:0.5rem 0.65rem;background:var(--bg-paper);border:1px solid var(--hairline);">' +
              (b.signatureProductVi ? '<div><strong>' + (enM ? "Flagship Creation:" : "Sản phẩm trấn điếm:") + '</strong> ' + esc(enM ? (b.signatureProductEn || b.signatureProductVi) : b.signatureProductVi) + '</div>' : "") +
              (b.craftProcessStepsVi ? '<div><strong>' + (enM ? "Craft Sequence (4 Stages):" : "Chuỗi Quy trình Chế tác (4 Chặng):") + '</strong> ' + esc(enM ? (b.craftProcessStepsEn || b.craftProcessStepsVi) : b.craftProcessStepsVi) + '</div>' : "") +
              (b.sensoryOrMaterialSpecVi ? '<div><strong>' + (enM ? "Material &amp; Sensory Spec:" : "Định chuẩn Chất liệu &amp; Cảm quan:") + '</strong> ' + esc(enM ? (b.sensoryOrMaterialSpecEn || b.sensoryOrMaterialSpecVi) : b.sensoryOrMaterialSpecVi) + '</div>' : "") +
              (b.authenticVsCounterfeitVi ? '<div style="color:var(--imperial-red);"><strong>' + (enM ? "Authentication &amp; Origin Mark:" : "Nhận diện Chính hãng vs Hàng giả:") + '</strong> ' + esc(enM ? (b.authenticVsCounterfeitEn || b.authenticVsCounterfeitVi) : b.authenticVsCounterfeitVi) + '</div>' : "") +
              (b.qualityStandardVi ? '<div style="color:var(--jade-green);"><strong>' + (enM ? "Quality &amp; ICH Standard:" : "Tiêu chuẩn &amp; Di sản:") + '</strong> ' + esc(enM ? (b.qualityStandardEn || b.qualityStandardVi) : b.qualityStandardVi) + '</div>' : "") +
              (b.exportComplianceChecklistVi ? '<div><strong>' + (enM ? "Export &amp; GACC Checklist:" : "Kiểm soát Xuất khẩu &amp; GACC:") + '</strong> ' + esc(enM ? (b.exportComplianceChecklistEn || b.exportComplianceChecklistVi) : b.exportComplianceChecklistVi) + '</div>' : "") +
              (b.vietnamAseanLessonVi ? '<div><strong>' + (enM ? "Vietnam/ASEAN Benchmark:" : "Đối chiếu Việt Nam/ASEAN:") + '</strong> ' + esc(enM ? (b.vietnamAseanLessonEn || b.vietnamAseanLessonVi) : b.vietnamAseanLessonVi) + '</div>' : "") +
              (b.flagshipAddressZh ? '<div style="color:var(--text-muted);"><strong>' + (enM ? "Original Storefront:" : "Địa điểm gốc:") + '</strong> <span class="hanzi">' + esc(b.flagshipAddressZh) + '</span> ' + spk(b.flagshipAddressZh) + '</div>' : "") +
              '    </div>' +
              '  </details>'
            ) : "") +
            '  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:0.3rem;gap:0.4rem;">' +
            '    <span style="font-size:0.73rem;color:var(--text-muted);">' + esc(b.visitTipVi) + '</span>' +
            '    <button type="button" class="btn btn-secondary btn-sm" style="padding:0.15rem 0.45rem;font-size:0.72rem;flex-shrink:0;" data-action="open-province-detail" data-id="' + esc(b.provinceId) + '">' + (enM ? "Province →" : "Tỉnh →") + '</button>' +
            '  </div>' +
            '</article>'
          );
        }).join("") +
        '  </div>'
      ) : "") +
      (filteredGi.length ? (
        '  <div id="cce-gi-eu-china-grid" style="margin-top:' + (filtered.length ? "2rem" : "0") + ';padding-top:' + (filtered.length ? "1.35rem" : "0") + ';' + (filtered.length ? "border-top:2px solid var(--hairline);" : "") + '">' +
        '    <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "EU–CHINA GEOGRAPHICAL INDICATIONS AGREEMENT (2021) · 中欧地理标志协定" : "HIỆP ĐỊNH CHỈ DẪN ĐỊA LÝ ÂU – TRUNG QUỐC (中欧地理标志保护协定)") + '</div>' +
        '    <h3 style="font-family:var(--font-editorial);font-size:1.32rem;margin:0.2rem 0 0.85rem;">' + (enM ? (giList.length + " EU–China Protected Heritage GIs &amp; EVFTA Benchmarks") : (giList.length + " Sản vật Chỉ dẫn Địa lý Bảo hộ Song phương Âu–Trung &amp; Đối chiếu EVFTA Việt Nam")) + '</h3>' +
        '    <div class="grid grid-3" style="gap:0.85rem;">' +
        filteredGi.map(function (g, idx) {
          var gImg = g.imagePath || resolveBrandThumb({ provinceId: g.provinceId, cat: "tea_spirits" }, idx + 2);
          var gTitle = enM ? (g.en || g.nameEn) : (g.vi || g.nameVi);
          return (
            '<article class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.35rem;padding:0.9rem 1rem;border-top:2px solid var(--jade-green);">' +
            renderLzhThumb(gImg, gTitle + " (" + g.zh + ")") +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">' +
            '    <span class="badge badge-jade">' + esc(g.gbStandardCode || "EU–China GI") + '</span>' +
            '    <span>' + spk(g.zh) + ' <button type="button" class="btn btn-ghost btn-sm" style="padding:0.1rem 0.38rem;font-size:0.72rem;border:1px solid var(--hairline);" data-lzh-act="srs" data-zh="' + esc(g.zh) + '" data-py="' + esc(g.pinyin) + '" data-hv="' + esc(gTitle) + '" data-vi="' + esc(gTitle) + '" data-en="' + esc(g.en || g.nameEn) + '">+ SRS</button></span>' +
            '  </div>' +
            '  <strong class="hanzi" style="font-size:1.15rem;color:var(--imperial-red);">' + esc(g.zh) + ' <span class="pinyin text-xs">' + esc(g.pinyin) + '</span></strong>' +
            '  <strong>' + esc(gTitle) + '</strong>' +
            '  <p style="font-size:0.8rem;margin:0.1rem 0;color:var(--text-secondary);">' + esc(enM ? (g.euProtectionNoteEn || g.protectionRuleEn) : (g.euProtectionNoteVi || g.protectionRuleVi)) + '</p>' +
            (g.terroirAndCraftVi ? '<div style="font-size:0.78rem;background:var(--bg-paper);padding:0.45rem 0.55rem;border:1px solid var(--hairline);"><strong>' + (enM ? "Terroir &amp; Craft:" : "Thổ nhưỡng &amp; Kỹ nghệ:") + '</strong> ' + esc(enM ? (g.terroirAndCraftEn || g.terroirAndCraftVi) : g.terroirAndCraftVi) + '</div>' : "") +
            (g.customsHsAndAuditVi ? '<div style="font-size:0.76rem;color:var(--text-muted);"><strong>' + (enM ? "EU Customs &amp; MRL Audit:" : "Kiểm toán Hải quan EU:") + '</strong> ' + esc(enM ? (g.customsHsAndAuditEn || g.customsHsAndAuditVi) : g.customsHsAndAuditVi) + '</div>' : "") +
            (g.vnEuComparisonVi ? '<div style="font-size:0.77rem;color:var(--jade-green);"><strong>' + (enM ? "EVFTA Parallel:" : "Đối chiếu EVFTA Việt Nam:") + '</strong> ' + esc(enM ? (g.vnEuComparisonEn || g.vnEvftaCounterpartEn) : (g.vnEuComparisonVi || g.vnEvftaCounterpartVi)) + '</div>' : "") +
            '  <button type="button" class="btn btn-secondary btn-sm" style="margin-top:auto;align-self:flex-end;padding:0.15rem 0.45rem;font-size:0.72rem;" data-action="open-province-detail" data-id="' + esc(g.provinceId) + '">' + (enM ? "Province →" : "Tỉnh →") + '</button>' +
            '</article>'
          );
        }).join("") +
        '    </div>' +
        '  </div>'
      ) : "") +
      (flows12.length ? (
        '  <div id="cce-v6-craft-flowcharts" style="margin-top:2rem;padding-top:1.35rem;border-top:2px solid var(--hairline);">' +
        '    <div class="editorial-kicker" style="color:var(--imperial-red);">V6.0 HERITAGE PROCESS DIAGRAMS, NORTH–SOUTH COMPARE &amp; FIVE HISTORIC MERCHANT GUILDS</div>' +
        '    <h3 style="font-family:var(--font-editorial);font-size:1.28rem;margin:0.2rem 0 0.75rem;">' + (enM ? "12 Master Craft Step-by-Step Workflows, 10 North–South Compare Matrices &amp; 5 Guilds" : "12 Quy trình Thủ công Kinh điển, 10 Cặp Đối Sánh Nam–Bắc &amp; Ngũ Đại Thương Bang") + '</h3>' +
        '    <div class="grid grid-2" style="gap:0.8rem;max-height:520px;overflow:auto;margin-bottom:1.15rem;">' +
        flows12.map(function (fl) {
          var steps = fl.steps || [];
          var svgNodes = steps.map(function (step, sIdx) {
            var sx = 12 + sIdx * 98;
            return '<rect x="' + sx + '" y="8" width="84" height="32" rx="4" fill="#FBF9F4" stroke="#8C2318" stroke-width="1.2" />' +
              '<text x="' + (sx + 42) + '" y="22" text-anchor="middle" font-size="8.5" font-weight="700" fill="#8C2318">' + esc(step.stepNum + ". " + (step.labelZh || "").slice(0, 4)) + '</text>' +
              '<text x="' + (sx + 42) + '" y="34" text-anchor="middle" font-size="7" fill="#5F584D">' + esc((step.labelVi || "").slice(0, 14)) + '</text>' +
              (sIdx < steps.length - 1 ? '<line x1="' + (sx + 84) + '" y1="24" x2="' + (sx + 98) + '" y2="24" stroke="#A88940" stroke-width="1.4" />' : "");
          }).join("");
          return (
            '<div class="card" style="padding:0.85rem 0.95rem;font-size:0.79rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong style="color:var(--imperial-red);">' + esc(enM ? fl.titleEn : fl.titleVi) + '</strong>' + spk(fl.brandZh || fl.titleZh) + '</div>' +
            '  <div class="hanzi text-xs" style="color:var(--text-muted);margin-bottom:0.35rem;">' + esc(fl.titleZh) + '</div>' +
            '  <svg viewBox="0 0 ' + Math.max(220, steps.length * 98 + 12) + ' 48" style="width:100%;height:auto;margin-bottom:0.4rem;">' + svgNodes + '</svg>' +
            '  <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">' +
            steps.map(function (step) {
              return '<div style="flex:1 1 130px;padding:0.35rem 0.45rem;background:var(--bg-paper);border:1px solid var(--hairline);border-top:2px solid var(--antique-gold);font-size:0.73rem;"><strong>' + esc(step.stepNum + ". " + (enM ? step.labelEn : step.labelVi)) + '</strong><br><span class="hanzi" style="color:var(--imperial-red);">' + esc(step.labelZh) + '</span><br><span style="color:var(--text-muted);">' + esc(step.specNote || step.tempOrToolNote || "") + '</span></div>';
            }).join("") +
            '  </div>' +
            '</div>'
          );
        }).join("") +
        '    </div>' +
        (dualCompare10.length ? (
          '    <h4 style="margin:0.8rem 0 0.55rem;color:var(--imperial-red);">' + (enM ? "10 Bilateral Regional Honored Brand Comparison Matrices" : "10 Cặp Đối Sánh Song Phương Nam – Bắc &amp; Pháp Lý Sở Hữu Trí Tuệ") + '</h4>' +
          '    <div class="grid grid-2" style="gap:0.8rem;max-height:460px;overflow:auto;margin-bottom:1.15rem;">' +
          dualCompare10.map(function (dc) {
            return (
              '<article class="card" style="padding:0.85rem 0.95rem;font-size:0.78rem;">' +
              '  <strong style="color:var(--imperial-red);">' + esc(enM ? dc.titleEn : dc.titleVi) + '</strong>' +
              '  <div class="text-xs" style="color:var(--text-muted);margin:0.2rem 0 0.4rem;">' + esc(dc.brandA + " vs " + dc.brandB) + '</div>' +
              '  <div style="display:grid;gap:0.25rem;margin-bottom:0.4rem;">' +
              (dc.fiveCriteriaCompare || []).map(function (row) {
                return '<div style="padding:0.3rem 0.45rem;background:var(--bg-paper);border:1px solid var(--hairline);"><strong>' + esc(enM ? row.criterionEn : row.criterionVi) + ':</strong><br><span style="color:var(--imperial-red);">A:</span> ' + esc(row.valueA) + '<br><span style="color:var(--jade-green);">B:</span> ' + esc(row.valueB) + '</div>';
              }).join("") +
              '  </div>' +
              '  <div style="color:var(--jade-green);"><strong>Pháp lý IP:</strong> ' + esc(enM ? dc.legalIpLessonEn : dc.legalIpLessonVi) + '</div>' +
              (dc.vietnamBrandStrategyTakeawayVi ? '<div style="color:var(--text-secondary);margin-top:0.25rem;"><strong>Bài học VN:</strong> ' + esc(enM ? dc.vietnamBrandStrategyTakeawayEn : dc.vietnamBrandStrategyTakeawayVi) + '</div>' : "") +
              '</article>'
            );
          }).join("") +
          '    </div>'
        ) : "") +
        (guilds5.length ? (
          '    <div class="grid grid-3" style="gap:0.7rem;">' +
          guilds5.map(function (gd) {
            return '<div class="flashcard-layer" style="font-size:0.78rem;border-left:3px solid var(--jade-green);"><strong style="color:var(--imperial-red);">' + esc(enM ? gd.nameEn : gd.nameVi) + '</strong> <span class="hanzi">(' + esc(gd.zh) + ')</span><br><span class="badge badge-outline" style="margin:0.2rem 0;">' + esc(gd.era) + '</span><p style="margin:0.25rem 0 0;color:var(--text-secondary);">' + esc(enM ? gd.descEn : gd.descVi) + '</p></div>';
          }).join("") +
          '    </div>'
        ) : "") +
        '  </div>'
      ) : "") +
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
