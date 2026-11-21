// ============================================================================
// ANKI UTF-8 BOM CSV/TSV & STUDY PASSPORT JSON BACKUP/RESTORE (WAVE 3.4 + V4)
// Supports 4-column trilingual export (Hanzi | Pinyin | English | Vietnamese)
// so learning Mandarin reinforces Corporate & Academic English simultaneously.
// ============================================================================

(function () {
  "use strict";

  function csvCell(v) {
    var s = String(v == null ? "" : v).replace(/\r?\n/g, " ");
    return '"' + s.replace(/"/g, '""') + '"';
  }

  function downloadFile(filename, content, mimeType) {
    var blob = new Blob(["\uFEFF" + content], { type: mimeType || "text/csv;charset=utf-8;" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      try {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (_e) {}
    }, 250);
  }

  function buildAnkiCsv(cards, delimiter) {
    var sep = delimiter === "\t" ? "\t" : ",";
    var header = ["Hanzi", "Pinyin_HanViet", "English_Meaning", "Vietnamese_Meaning", "Source_Tags"].join(sep);
    var rows = (cards || []).map(function (c) {
      var hanzi = c.hanzi || c.term || "";
      var pyHv = [c.pinyin || "", c.hanViet ? "[" + c.hanViet + "]" : ""].filter(Boolean).join(" ");
      var en = c.meaningEn || c.en || "";
      var vi = c.meaningVi || c.meaning || c.vi || "";
      var src = c.source || "Chinese Culture Explorer";
      return sep === "\t"
        ? [hanzi, pyHv, en, vi, src].map(function (x) { return String(x).replace(/[\t\r\n]+/g, " "); }).join("\t")
        : [hanzi, pyHv, en, vi, src].map(csvCell).join(",");
    });
    return [header].concat(rows).join("\r\n");
  }

  function exportSrsToAnki(fmt) {
    var cards = (window.CCE_SRS && window.CCE_SRS.loadDeck()) || [];
    if (!cards.length) return 0;
    var isTsv = fmt === "tsv";
    var body = buildAnkiCsv(cards, isTsv ? "\t" : ",");
    downloadFile(
      isTsv ? "cce_trilingual_srs_anki.tsv" : "cce_trilingual_srs_anki.csv",
      body,
      (isTsv ? "text/tab-separated-values" : "text/csv") + ";charset=utf-8;"
    );
    return cards.length;
  }

  function exportPassportBackup(storeState) {
    var payload = {
      schema: "cce-passport-v1",
      exportedAt: new Date().toISOString(),
      storeState: storeState || (window.CCE_STORE && window.CCE_STORE.getState()) || {},
      srsDeck: (window.CCE_SRS && window.CCE_SRS.loadDeck()) || [],
      travelChecklist: (function () { try { return JSON.parse(localStorage.getItem("cce_travel_checklist_v4") || "{}"); } catch (_e) { return {}; } })(),
      myCollection: (function () { try { return JSON.parse(localStorage.getItem("cce_my_collection_v4") || "[]"); } catch (_e) { return []; } })()
    };
    downloadFile("cce_study_passport_backup.json", JSON.stringify(payload, null, 2), "application/json;charset=utf-8;");
    return payload;
  }

  function restorePassportBackup(jsonText) {
    var data = JSON.parse(String(jsonText || "{}"));
    if (!data || data.schema !== "cce-passport-v1") {
      throw new Error("Invalid backup file schema");
    }
    if (Array.isArray(data.srsDeck) && window.CCE_SRS && window.CCE_SRS.saveDeck) {
      window.CCE_SRS.saveDeck(data.srsDeck);
    }
    if (data.travelChecklist && typeof data.travelChecklist === "object") {
      try { localStorage.setItem("cce_travel_checklist_v4", JSON.stringify(data.travelChecklist)); } catch (_e) {}
    }
    if (Array.isArray(data.myCollection)) {
      try { localStorage.setItem("cce_my_collection_v4", JSON.stringify(data.myCollection)); } catch (_e) {}
    }
    if (data.storeState && window.CCE_STORE && typeof window.CCE_STORE.importState === "function") {
      window.CCE_STORE.importState(data.storeState);
    }
    return {
      srsCount: Array.isArray(data.srsDeck) ? data.srsDeck.length : 0,
      ok: true
    };
  }

  window.CCE_EXPORTERS = {
    buildAnkiCsv: buildAnkiCsv,
    exportSrsToAnki: exportSrsToAnki,
    exportPassportBackup: exportPassportBackup,
    restorePassportBackup: restorePassportBackup,
    downloadFile: downloadFile
  };
})();
