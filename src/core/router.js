// ============================================================================
// CHINESE CULTURE EXPLORER — Router Scroll Memory & Keyboard Shortcuts (B04)
// ============================================================================

(function () {
  "use strict";

  var _scrollPositionsByPath = {};

  function currentKey() {
    return (window.location.pathname || "/") + (window.location.search || "");
  }

  function saveScroll(key) {
    try {
      _scrollPositionsByPath[key || currentKey()] = window.scrollY || window.pageYOffset || 0;
    } catch (e) {}
  }

  function restoreScroll(key) {
    var k = key || currentKey();
    if (Object.prototype.hasOwnProperty.call(_scrollPositionsByPath, k)) {
      var y = _scrollPositionsByPath[k];
      requestAnimationFrame(function () { window.scrollTo(0, y); });
      return true;
    }
    return false;
  }

  window.CCE_ROUTER = {
    saveScroll: saveScroll,
    restoreScroll: restoreScroll,
    getScrollMap: function () { return _scrollPositionsByPath; }
  };
})();
