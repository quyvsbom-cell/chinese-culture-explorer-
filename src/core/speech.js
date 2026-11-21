// ============================================================================
// CHINESE CULTURE EXPLORER — Mandarin Speech & Multi-Language Article TTS Engine
// ============================================================================

(function () {
  "use strict";

  var _rate = 0.92;
  var _ttsQueueActive = false;
  var _ttsSegmentIdx = -1;
  var _ttsPaused = false;
  var _ttsOnStateChange = null;

  function isSupported() {
    return typeof window !== "undefined" && "speechSynthesis" in window && typeof window.SpeechSynthesisUtterance === "function";
  }

  function pickVoice(langPrefix) {
    if (!isSupported()) return null;
    var voices = window.speechSynthesis.getVoices() || [];
    var exact = voices.filter(function (v) { return (v.lang || "").toLowerCase().indexOf(langPrefix.toLowerCase()) === 0; });
    if (!exact.length) return null;
    // Prefer non-compact / local or Microsoft/Google natural voices
    for (var i = 0; i < exact.length; i++) {
      if (/natural|xiaoxiao|yunxi|ting-ting|google|microsoft/i.test(exact[i].name || "")) return exact[i];
    }
    return exact[0];
  }

  function stopAll() {
    _ttsQueueActive = false;
    _ttsPaused = false;
    _ttsSegmentIdx = -1;
    if (isSupported()) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
    if (typeof _ttsOnStateChange === "function") {
      try { _ttsOnStateChange({ playing: false, paused: false, segmentIdx: -1 }); } catch (e) {}
    }
  }

  function speakText(text, langCode, opts) {
    if (!text) return false;
    if (!isSupported()) {
      if (opts && typeof opts.onUnsupported === "function") opts.onUnsupported();
      return false;
    }
    stopAll();
    var targetLang = langCode || "zh-CN";
    var u = new SpeechSynthesisUtterance(String(text).trim());
    u.lang = targetLang;
    u.rate = (opts && opts.rate) ? opts.rate : _rate;
    var voice = pickVoice(targetLang.split("-")[0]);
    if (voice) u.voice = voice;
    if (opts && typeof opts.onEnd === "function") {
      u.onend = opts.onEnd;
      u.onerror = opts.onEnd;
    }
    try {
      window.speechSynthesis.speak(u);
      return true;
    } catch (e) {
      return false;
    }
  }

  function speakChinese(zhText, onUnsupported) {
    return speakText(zhText, "zh-CN", { rate: _rate, onUnsupported: onUnsupported });
  }

  function playSegments(segments, langCode, onStateChange) {
    if (!isSupported() || !Array.isArray(segments) || !segments.length) return false;
    stopAll();
    _ttsQueueActive = true;
    _ttsPaused = false;
    _ttsOnStateChange = onStateChange || null;
    var idx = 0;

    function next() {
      if (!_ttsQueueActive || idx >= segments.length) {
        stopAll();
        return;
      }
      _ttsSegmentIdx = idx;
      if (typeof _ttsOnStateChange === "function") {
        try { _ttsOnStateChange({ playing: true, paused: false, segmentIdx: idx, total: segments.length }); } catch (e) {}
      }
      var u = new SpeechSynthesisUtterance(segments[idx]);
      u.lang = langCode || "vi-VN";
      u.rate = _rate;
      var v = pickVoice((langCode || "vi").split("-")[0]);
      if (v) u.voice = v;
      u.onend = function () {
        idx += 1;
        if (_ttsQueueActive) next();
      };
      u.onerror = function () {
        idx += 1;
        if (_ttsQueueActive) next();
      };
      window.speechSynthesis.speak(u);
    }
    next();
    return true;
  }

  function togglePause() {
    if (!isSupported() || !_ttsQueueActive) return false;
    if (_ttsPaused) {
      window.speechSynthesis.resume();
      _ttsPaused = false;
    } else {
      window.speechSynthesis.pause();
      _ttsPaused = true;
    }
    if (typeof _ttsOnStateChange === "function") {
      try { _ttsOnStateChange({ playing: true, paused: _ttsPaused, segmentIdx: _ttsSegmentIdx }); } catch (e) {}
    }
    return _ttsPaused;
  }

  window.CCE_SPEECH = {
    isSupported: isSupported,
    getRate: function () { return _rate; },
    setRate: function (r) { _rate = Math.max(0.65, Math.min(1.6, Number(r) || 0.92)); },
    speakChinese: speakChinese,
    speakText: speakText,
    playSegments: playSegments,
    togglePause: togglePause,
    stopAll: stopAll,
    getState: function () { return { playing: _ttsQueueActive, paused: _ttsPaused, segmentIdx: _ttsSegmentIdx, rate: _rate }; }
  };
})();
