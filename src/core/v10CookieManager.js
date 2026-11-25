// ============================================================================
// CHINESE CULTURE EXPLORER — First-Party Functional Cookies & Resume State
// Strict <= 512B budget, zero third-party ad tracking, zero FOUC theme sync
// ============================================================================
(function () {
  "use strict";

  var PREFS_COOKIE = "cce_prefs";
  var RESUME_COOKIE = "cce_resume";
  var DAILY_COOKIE = "cce_daily_pick";
  var PREF_KEYS = { theme: 1, lang: 1, script: 1, font: 1 };

  function isHttps() {
    return typeof window !== "undefined" && window.location && window.location.protocol === "https:";
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getCookie(name) {
    try {
      var list = document.cookie ? document.cookie.split("; ") : [];
      var prefix = name + "=";
      for (var i = 0; i < list.length; i++) {
        if (list[i].indexOf(prefix) === 0) {
          return decodeURIComponent(list[i].slice(prefix.length));
        }
      }
    } catch (_e) {}
    return "";
  }

  function setCookie(name, val, opts) {
    if (typeof document === "undefined") return;
    var o = opts || {};
    var parts = [name + "=" + encodeURIComponent(String(val || ""))];
    parts.push("Path=" + (o.path || "/"));
    if (typeof o.maxAge === "number") {
      parts.push("Max-Age=" + Math.max(0, Math.floor(o.maxAge)));
    } else if (o.expires) {
      parts.push("Expires=" + o.expires);
    }
    parts.push("SameSite=" + (o.sameSite || "Lax"));
    if (isHttps()) parts.push("Secure");
    try {
      document.cookie = parts.join("; ");
    } catch (_e) {}
  }

  function removeCookie(name) {
    setCookie(name, "", { maxAge: 0 });
  }

  function encodePipeMap(obj, maxBytes) {
    var pairs = [];
    Object.keys(obj || {}).forEach(function (k) {
      var v = obj[k];
      if (v === undefined || v === null || v === "") return;
      var cleanKey = String(k).replace(/[|:;=]/g, "");
      var cleanVal = String(v).replace(/[|:=;]/g, " ").trim();
      if (cleanVal.length > 96) cleanVal = cleanVal.slice(0, 96);
      pairs.push(cleanKey + ":" + cleanVal);
    });
    var joined = pairs.join("|");
    while (joined.length > (maxBytes || 220) && pairs.length > 1) {
      pairs.pop();
      joined = pairs.join("|");
    }
    return joined;
  }

  function decodePipeMap(raw) {
    var out = {};
    if (!raw) return out;
    String(raw).split("|").forEach(function (seg) {
      var idx = seg.indexOf(":");
      if (idx <= 0) return;
      var k = seg.slice(0, idx);
      var v = seg.slice(idx + 1);
      if (k && v) out[k] = v;
    });
    return out;
  }

  function syncPrefsFromState(st) {
    if (!st) return;
    var payload = {
      theme: /^(light|dark|sepia)$/.test(st.theme) ? st.theme : "light",
      lang: /^(vi|en|zh-CN|zh-TW)$/.test(st.uiLang) ? st.uiLang : "vi",
      script: /^(both|simplified)$/.test(st.scriptMode) ? st.scriptMode : "both",
      font: /^(sm|md|lg|xl)$/.test(st.articleFontSize) ? st.articleFontSize : "md"
    };
    setCookie(PREFS_COOKIE, encodePipeMap(payload, 120), { maxAge: 31536000 });
  }

  function readPrefs() {
    var map = decodePipeMap(getCookie(PREFS_COOKIE));
    var out = {};
    Object.keys(PREF_KEYS).forEach(function (k) {
      if (map[k]) out[k] = map[k];
    });
    return out;
  }

  function setResume(info) {
    if (!info || !info.id) return;
    var payload = encodePipeMap({
      kind: info.kind || "article",
      id: info.id,
      title: String(info.title || info.id).slice(0, 56),
      chap: info.chap ? String(info.chap) : "",
      pct: info.pct != null ? String(info.pct) : "",
      sub: info.sub ? String(info.sub) : ""
    }, 220);
    setCookie(RESUME_COOKIE, payload, { maxAge: 2592000 });
  }

  function getResume() {
    var map = decodePipeMap(getCookie(RESUME_COOKIE));
    return map && map.id ? map : null;
  }

  function clearResume() {
    removeCookie(RESUME_COOKIE);
  }

  function todayKey() {
    var d = new Date();
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }

  function endOfDayUtc() {
    var d = new Date();
    d.setHours(23, 59, 59, 999);
    return d.toUTCString();
  }

  function getDailyPick(poolLen) {
    var today = todayKey();
    var map = decodePipeMap(getCookie(DAILY_COOKIE));
    var len = Math.max(1, Number(poolLen) || 15);
    if (map.date === today && map.spotIdx !== undefined) {
      var parsed = parseInt(map.spotIdx, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed < len) {
        return { date: today, spotIdx: parsed, heroIdx: parseInt(map.heroIdx || "0", 10) || 0 };
      }
    }
    var sum = 0;
    for (var i = 0; i < today.length; i++) sum = (sum * 31 + today.charCodeAt(i)) % 9973;
    var spotIdx = sum % len;
    var heroIdx = sum % 3;
    setCookie(DAILY_COOKIE, encodePipeMap({ date: today, spotIdx: spotIdx, heroIdx: heroIdx }, 96), {
      expires: endOfDayUtc()
    });
    return { date: today, spotIdx: spotIdx, heroIdx: heroIdx };
  }

  function renderResumePill(enM) {
    var r = getResume();
    if (!r || !r.id) return "";
    var actionAttr = r.kind === "handscroll"
      ? 'data-v10-resume-go="handscroll" data-id="' + esc(r.id) + '"'
      : 'data-action="open-article" data-id="' + esc(r.id) + '"';
    var progressLabel = r.kind === "handscroll" && r.pct
      ? " · " + esc(r.pct) + "%"
      : (r.chap ? " · " + (enM ? "Part " : "Chương ") + esc(r.chap) : "");
    return (
      '<div class="v10-resume-bar" id="v10-cookie-resume-bar" role="region" aria-label="' + (enM ? "Resume reading" : "Đọc tiếp vị trí trước") + '">' +
      '  <button type="button" class="v10-resume-pill" ' + actionAttr + '>' +
      '    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' +
      '    <span><strong>' + (enM ? "Continue reading:" : "Đọc tiếp bài đang dở:") + '</strong> ' + esc(r.title) + progressLabel + '</span>' +
      '    <span aria-hidden="true">→</span>' +
      '  </button>' +
      '  <button type="button" class="v10-resume-dismiss" data-v10-clear-resume="1" title="' + (enM ? "Clear reading shortcut" : "Ẩn gợi ý đọc tiếp") + '" aria-label="' + (enM ? "Dismiss resume pill" : "Đóng gợi ý đọc tiếp") + '">' +
      '    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
      '  </button>' +
      '</div>'
    );
  }

  if (typeof document !== "undefined") {
    document.addEventListener("click", function (e) {
      var clr = e.target && e.target.closest ? e.target.closest("[data-v10-clear-resume]") : null;
      if (clr) {
        clearResume();
        var bar = document.getElementById("v10-cookie-resume-bar");
        if (bar && bar.parentNode) bar.parentNode.removeChild(bar);
        return;
      }
      var goHs = e.target && e.target.closest ? e.target.closest('[data-v10-resume-go="handscroll"]') : null;
      if (goHs) {
        var hsId = goHs.getAttribute("data-id") || "";
        if (window.CCE_V9_HANDSCROLL && typeof window.CCE_V9_HANDSCROLL.setActive === "function" && hsId) {
          window.CCE_V9_HANDSCROLL.setActive(hsId);
        }
        if (window.CCE_V10_DECK && typeof window.CCE_V10_DECK.navigateTo === "function") {
          window.CCE_V10_DECK.navigateTo("paintings", "handscroll");
        }
      }
    });
  }

  window.CCE_COOKIES = {
    get: getCookie,
    set: setCookie,
    remove: removeCookie,
    syncPrefsFromState: syncPrefsFromState,
    readPrefs: readPrefs,
    setResume: setResume,
    getResume: getResume,
    clearResume: clearResume,
    getDailyPick: getDailyPick,
    renderResumePill: renderResumePill
  };
})();
