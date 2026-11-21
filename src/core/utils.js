// ============================================================================
// CHINESE CULTURE EXPLORER — Modular Utilities (window.CCE_UTILS)
// ============================================================================

(function () {
  "use strict";

  function foldVi(str) {
    return String(str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .toLowerCase();
  }

  function stripPinyinTones(str) {
    return String(str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  window.CCE_UTILS = {
    foldVi: foldVi,
    stripPinyinTones: stripPinyinTones,
    escapeHtml: escapeHtml
  };
})();
