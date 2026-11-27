/* ============================================================================
 * CHINESE CULTURE EXPLORER v10.4 — Theme-Safe Bilingual Rich Blocks Renderer
 * Renders Case Studies, Chronology, Specialist Glossary, Comparative Matrix,
 * Historical Figures, Evidence vs. Misconceptions, Field Guide & Discussion.
 * Pure ES5 IIFE — CSS custom properties only (Light / Dark / Sepia AAA safe).
 * ============================================================================ */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderForArticle(art, enM) {
    if (!art || typeof art !== "object") return "";
    var parts = [];
    var i;
    var boxStyle =
      "margin:1.35rem 0;padding:1.1rem 1.25rem;background:var(--bg-surface,#F3EFE6);color:var(--ink-primary,#1A1918);border:1px solid var(--hairline,rgba(26,25,24,0.14));border-top:3px solid var(--imperial-red,#9E2A2B);border-radius:3px;";
    var h3Style =
      "margin:0 0 0.75rem;font-size:1.02rem;letter-spacing:0.03em;color:var(--imperial-red,#9E2A2B);text-transform:uppercase;";
    var subCardStyle =
      "padding:0.62rem 0.8rem;border:1px solid var(--hairline,rgba(26,25,24,0.14));background:var(--bg-paper,#FAF7F2);color:var(--ink-primary,#1A1918);margin-bottom:0.5rem;border-radius:2px;";
    var thStyle =
      "padding:7px 9px;border:1px solid var(--hairline,rgba(26,25,24,0.14));background:var(--bg-muted,#EAE4D8);color:var(--ink-primary,#1A1918);text-align:left;font-weight:700;";
    var tdStyle =
      "padding:7px 9px;border:1px solid var(--hairline,rgba(26,25,24,0.14));color:var(--ink-primary,#1A1918);";

    if (art.caseStudySpotlight && art.caseStudySpotlight.titleVi) {
      var cs = art.caseStudySpotlight;
      var csTitle = enM && cs.titleEn ? cs.titleEn : cs.titleVi;
      var csBody = enM && cs.narrativeEn ? cs.narrativeEn : cs.narrativeVi;
      var csEra = enM && cs.locationAndEraEn ? cs.locationAndEraEn : cs.locationAndEraVi;
      var csMetric = enM && cs.keyMetricOrArtifactEn ? cs.keyMetricOrArtifactEn : cs.keyMetricOrArtifactVi;
      parts.push(
        '<section class="cce-v10-block" style="' + boxStyle + '">' +
        '  <h3 style="' + h3Style + '">' + (enM ? "Landmark Case Study" : "Nghiên cứu Trường hợp Điển hình") + "</h3>" +
        '  <div style="font-weight:700;margin-bottom:0.35rem;">' + esc(csTitle) + (csEra ? ' <span style="font-weight:400;color:var(--text-muted);">(' + esc(csEra) + ")</span>" : "") + "</div>" +
        '  <p style="margin:0 0 0.55rem;line-height:1.65;color:var(--text-secondary);">' + esc(csBody) + "</p>" +
        (csMetric
          ? '  <div style="font-size:0.86rem;padding:0.5rem 0.7rem;background:var(--bg-paper);border-left:3px solid var(--antique-gold,#A6844E);"><strong>' +
            (enM ? "Key Artifact / Metric:" : "Chỉ dấu Trọng yếu:") + "</strong> " + esc(csMetric) + "</div>"
          : "") +
        "</section>"
      );
    }

    if (Array.isArray(art.chronology) && art.chronology.length) {
      var chRows = [];
      for (i = 0; i < art.chronology.length; i++) {
        var ch = art.chronology[i];
        chRows.push(
          '<li style="margin-bottom:0.45rem;line-height:1.55;"><strong>' + esc(ch.year) + "</strong>" +
          (ch.period ? " (" + esc(ch.period) + ")" : "") + ": " +
          esc(enM && ch.eventEn ? ch.eventEn : ch.eventVi) + "</li>"
        );
      }
      parts.push(
        '<section class="cce-v10-block" style="' + boxStyle + '"><h3 style="' + h3Style + '">' +
        (enM ? "Historical Chronology" : "Niên biểu Lịch sử") +
        '</h3><ul style="padding-left:1.2rem;margin:0;color:var(--text-secondary);">' + chRows.join("") + "</ul></section>"
      );
    }

    if (Array.isArray(art.terminologyGlossary) && art.terminologyGlossary.length) {
      var glRows = [];
      for (i = 0; i < art.terminologyGlossary.length; i++) {
        var g = art.terminologyGlossary[i];
        var def = enM && g.definitionEn ? g.definitionEn : g.definitionVi;
        glRows.push(
          '<tr><td class="hanzi" style="' + tdStyle + 'font-weight:700;color:var(--imperial-red);">' + esc(g.hanzi) + "</td>" +
          '<td class="pinyin" style="' + tdStyle + '">' + esc(g.pinyin) + "</td>" +
          '<td style="' + tdStyle + '">' + esc(g.hanViet) + "</td>" +
          '<td style="' + tdStyle + 'color:var(--text-secondary);">' + esc(def) + "</td></tr>"
        );
      }
      parts.push(
        '<section class="cce-v10-block" style="' + boxStyle + '"><h3 style="' + h3Style + '">' +
        (enM ? "Bilingual Specialist Glossary" : "Từ điển Thuật ngữ Chuyên ngành") +
        '</h3><div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:0.88rem;"><thead><tr>' +
        '<th style="' + thStyle + '">' + (enM ? "Hanzi" : "Hán tự") + "</th>" +
        '<th style="' + thStyle + '">Pinyin</th>' +
        '<th style="' + thStyle + '">' + (enM ? "Sino-Viet" : "Hán–Việt") + "</th>" +
        '<th style="' + thStyle + '">' + (enM ? "Definition" : "Giải nghĩa") + "</th>" +
        "</tr></thead><tbody>" + glRows.join("") + "</tbody></table></div></section>"
      );
    }

    if (art.comparativeMatrix && Array.isArray(art.comparativeMatrix.headers) && Array.isArray(art.comparativeMatrix.rows)) {
      var cm = art.comparativeMatrix;
      var cmTitle = enM && cm.titleEn ? cm.titleEn : (cm.titleVi || (enM ? "Comparative Matrix" : "Bảng Đối chiếu Đa chiều"));
      var ths = cm.headers.map(function (h) { return '<th style="' + thStyle + '">' + esc(h) + "</th>"; }).join("");
      var trs = cm.rows.map(function (row) {
        return "<tr>" + (Array.isArray(row) ? row.map(function (cell) { return '<td style="' + tdStyle + '">' + esc(cell) + "</td>"; }).join("") : "") + "</tr>";
      }).join("");
      parts.push(
        '<section class="cce-v10-block" style="' + boxStyle + '"><h3 style="' + h3Style + '">' + esc(cmTitle) +
        '</h3><div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:0.88rem;"><thead><tr>' + ths +
        "</tr></thead><tbody>" + trs + "</tbody></table></div></section>"
      );
    }

    if (Array.isArray(art.keyHistoricalFigures) && art.keyHistoricalFigures.length) {
      var fCards = art.keyHistoricalFigures.map(function (f) {
        return (
          '<div style="' + subCardStyle + '"><strong>' + esc(f.nameVi) + " (" + esc(f.nameZh) +
          (f.lifespan ? ", " + esc(f.lifespan) : "") + ")</strong> — <em>" + esc(enM && f.roleEn ? f.roleEn : f.roleVi) +
          '</em>: <span style="color:var(--text-secondary);">' + esc(enM && f.landmarkContributionEn ? f.landmarkContributionEn : f.landmarkContributionVi) + "</span></div>"
        );
      }).join("");
      parts.push('<section class="cce-v10-block" style="' + boxStyle + '"><h3 style="' + h3Style + '">' + (enM ? "Key Historical Figures" : "Nhân vật Lịch sử Trọng yếu") + "</h3>" + fCards + "</section>");
    }

    if (Array.isArray(art.commonMisconceptions) && art.commonMisconceptions.length) {
      var mCards = art.commonMisconceptions.map(function (m) {
        return (
          '<div style="' + subCardStyle + 'border-left:3px solid var(--imperial-red);">' +
          '<div style="margin-bottom:0.25rem;"><strong>' + (enM ? "Misconception:" : "Ngộ nhận:") + "</strong> " + esc(enM && m.mythEn ? m.mythEn : m.mythVi) + "</div>" +
          '<div style="color:var(--jade-green);"><strong>' + (enM ? "Evidence:" : "Thực chứng:") + "</strong> " + esc(enM && m.realityEn ? m.realityEn : m.realityVi) + "</div></div>"
        );
      }).join("");
      parts.push('<section class="cce-v10-block" style="' + boxStyle + '"><h3 style="' + h3Style + '">' + (enM ? "Common Misconceptions vs. Evidence" : "Giải ảo Ngộ nhận Phổ biến") + "</h3>" + mCards + "</section>");
    }

    if (art.fieldStudyGuide && art.fieldStudyGuide.flagshipSitesVi) {
      var fg = art.fieldStudyGuide;
      parts.push(
        '<section class="cce-v10-block" style="' + boxStyle + '"><h3 style="' + h3Style + '">' +
        (enM ? "Field Study & Museum Guide" : "Cẩm nang Thực địa & Tham quan Bảo tàng") + "</h3>" +
        '<p style="margin:0 0 0.4rem;"><strong>' + (enM ? "Flagship Sites:" : "Địa điểm trọng điểm:") + "</strong> " + esc(fg.flagshipSitesVi) + "</p>" +
        '<p style="margin:0 0 0.4rem;"><strong>' + (enM ? "Highlights:" : "Điểm nhấn cần quan sát:") + "</strong> " + esc(fg.mustSeeHighlightsVi) + "</p>" +
        '<p style="margin:0;color:var(--text-secondary);"><strong>' + (enM ? "Field Tips:" : "Kinh nghiệm thực tế cho độc giả Việt:") + "</strong> " + esc(fg.vietnameseReaderTipsVi) + "</p></section>"
      );
    }

    if (Array.isArray(art.deepReviewQuestions) && art.deepReviewQuestions.length) {
      var qCards = art.deepReviewQuestions.map(function (q, idx) {
        return (
          '<details style="' + subCardStyle + '"><summary style="cursor:pointer;font-weight:700;">' +
          (enM ? "Prompt " : "Câu hỏi ") + (idx + 1) + ": " + esc(enM && q.questionEn ? q.questionEn : q.questionVi) +
          '</summary><p style="margin:0.45rem 0 0;line-height:1.58;color:var(--text-secondary);">' +
          esc(enM && q.modelAnswerEn ? q.modelAnswerEn : q.modelAnswerVi) + "</p></details>"
        );
      }).join("");
      parts.push('<section class="cce-v10-block" style="' + boxStyle + '"><h3 style="' + h3Style + '">' + (enM ? "Academic Discussion & Reflection" : "Câu hỏi Phản biện Học thuật") + "</h3>" + qCards + "</section>");
    }

    if (!parts.length) return "";
    return '<div id="cce-v104-rich-blocks">' + parts.join("") + "</div>";
  }

  window.CCE_V10_RICH_BLOCKS = {
    version: "v10.4",
    renderForArticle: renderForArticle
  };
})();
