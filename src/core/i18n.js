// ============================================================================
// CHINESE CULTURE EXPLORER — Multi-Language UI Bridge (VI / EN / zh-CN / zh-TW)
// Uses src/data/v3/uiI18nZh2026.js dynamically when zh-CN or zh-TW is active.
// ============================================================================

(function () {
  "use strict";

  function getZhPack(uiLang) {
    var pack = window.CCE_UI_I18N_ZH;
    if (!pack) return null;
    if (uiLang === "zh-TW") return pack["zh-TW"] || pack["zh-CN"] || null;
    if (uiLang === "zh-CN") return pack["zh-CN"] || pack["zh-TW"] || null;
    return null;
  }

  function tZh(uiLang, section, key, fallback) {
    var z = getZhPack(uiLang);
    if (!z) return fallback;
    if (section && z[section] && Object.prototype.hasOwnProperty.call(z[section], key)) {
      return z[section][key];
    }
    if (z.nav && Object.prototype.hasOwnProperty.call(z.nav, key)) return z.nav[key];
    if (z.common && Object.prototype.hasOwnProperty.call(z.common, key)) return z.common[key];
    return fallback;
  }

  window.CCE_I18N = {
    isZh: function (uiLang) { return uiLang === "zh-CN" || uiLang === "zh-TW"; },
    getZhPack: getZhPack,
    tZh: tZh
  };
})();
