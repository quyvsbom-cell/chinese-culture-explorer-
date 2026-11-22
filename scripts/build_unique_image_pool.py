"""Build verified MD5-unique raster image pool & runtime DOM deduplicator JS module."""

from __future__ import annotations

import hashlib
import json
import pathlib
import re
import struct

ROOT = pathlib.Path(".")
OUT_JS = ROOT / "src" / "data" / "uniqueImagePool.js"

SCAN_DIRS = [
    "assets/images/provinces",
    "assets/images/prov_items",
    "assets/images/articles",
    "assets/images/academic",
    "assets/images/museum",
    "assets/images/paintings",
]

SHADOW_CANONICAL = {
    "assets/images/jiangshan-ruci-duojiao.jpg": "assets/images/paintings/53_jiangshan_duojiao.jpg",
    "assets/images/museum/jiuzhaigou-five-flower-lake.jpg": "assets/images/provinces/sichuan-jiuzhaigou.jpg",
    "assets/images/museum/qianli-jiangshan.jpg": "assets/images/paintings/22_qianli_jiangshan.jpg",
    "assets/images/museum/qingming-scroll.jpg": "assets/images/paintings/21_qingming_shanghe.jpg",
}


def image_dims(data: bytes, ext: str) -> tuple[int, int] | None:
    """Return (width, height) from PNG, JPEG, or WebP headers without external deps."""
    try:
        if ext == ".png" and len(data) >= 24 and data[:8] == b"\x89PNG\r\n\x1a\n":
            w, h = struct.unpack(">II", data[16:24])
            return (w, h) if w > 0 and h > 0 else None
        if ext in (".jpg", ".jpeg") and len(data) >= 4 and data[:2] == b"\xff\xd8":
            i = 2
            n = len(data)
            while i + 3 < n:
                if data[i] != 0xFF:
                    i += 1
                    continue
                marker = data[i + 1]
                while marker == 0xFF and i + 2 < n:
                    i += 1
                    marker = data[i + 1]
                if marker in (0xD8, 0xD9, 0x01) or (0xD0 <= marker <= 0xD7):
                    i += 2
                    continue
                if i + 4 > n:
                    break
                seg_len = struct.unpack(">H", data[i + 2 : i + 4])[0]
                if marker in (0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF):
                    if i + 9 <= n:
                        h, w = struct.unpack(">HH", data[i + 5 : i + 9])
                        return (w, h) if w > 0 and h > 0 else None
                    break
                i += 2 + seg_len
        if ext == ".webp" and len(data) >= 30 and data[:4] == b"RIFF" and data[8:12] == b"WEBP":
            chunk = data[12:16]
            if chunk == b"VP8X" and len(data) >= 30:
                w = 1 + int.from_bytes(data[24:27], "little")
                h = 1 + int.from_bytes(data[27:30], "little")
                return (w, h)
            if chunk == b"VP8 " and len(data) >= 30:
                w = int.from_bytes(data[26:28], "little") & 0x3FFF
                h = int.from_bytes(data[28:30], "little") & 0x3FFF
                return (w, h) if w > 0 and h > 0 else None
            if chunk == b"VP8L" and len(data) >= 25:
                bits = int.from_bytes(data[21:25], "little")
                w = (bits & 0x3FFF) + 1
                h = ((bits >> 14) & 0x3FFF) + 1
                return (w, h)
    except Exception:
        pass
    return None


def classify_bucket(rel: str) -> str:
    low = rel.lower()
    if low.startswith("assets/images/paintings/"):
        return "paintings"
    if low.startswith("assets/images/museum/"):
        return "museum"
    if re.search(r"/prov_items/.*/d\d+\.", low) or any(
        k in low for k in ("cuisine", "tea", "dimsum", "banquet", "hotpot", "liquor", "noodle", "porridge", "medicinal")
    ):
        return "food"
    if re.search(r"/prov_items/.*/f\d+\.", low) or any(
        k in low for k in ("supply", "trade", "silk-road", "logistics", "hsr", "rcep", "negotiation", "huaqiangbei", "maritime")
    ):
        return "trade"
    if low.startswith("assets/images/provinces/") or any(
        k in low for k in ("li-river", "huangshan", "jiuzhaigou", "westlake", "qinghai-lake")
    ):
        return "landscape"
    if any(
        k in low
        for k in ("hanfu", "opera", "calligraphy", "confucian", "yinyang", "tcm", "garden", "zodiac", "festival", "music", "scroll")
    ):
        return "culture"
    return "heritage"


def main() -> None:
    seen_md5: set[str] = set()
    buckets: dict[str, list[str]] = {
        "landscape": [],
        "heritage": [],
        "food": [],
        "culture": [],
        "museum": [],
        "trade": [],
        "paintings": [],
    }
    non_painting_all: list[str] = []

    for rel_dir in SCAN_DIRS:
        base = ROOT / rel_dir
        if not base.is_dir():
            continue
        for fp in sorted(base.rglob("*")):
            if not fp.is_file():
                continue
            ext = fp.suffix.lower()
            if ext not in {".jpg", ".jpeg", ".png", ".webp"}:
                continue
            rel = fp.relative_to(ROOT).as_posix()
            if rel in SHADOW_CANONICAL or "/brand/" in rel or "/figures/" in rel or "/monograph/" in rel:
                continue
            raw = fp.read_bytes()
            h_md5 = hashlib.md5(raw).hexdigest()
            if h_md5 in seen_md5:
                continue
            dims = image_dims(raw, ext)
            if dims:
                w, h = dims
                if (w / max(1, h)) < 0.88:
                    continue
            seen_md5.add(h_md5)
            bkt = classify_bucket(rel)
            buckets[bkt].append(rel)
            if bkt != "paintings":
                non_painting_all.append(rel)

    # Interleave non-painting landscape buckets + fallback paintings at tail
    merged_all = list(non_painting_all) + list(buckets["paintings"])
    payload = {
        "shadowCanonical": SHADOW_CANONICAL,
        "buckets": buckets,
        "all": merged_all,
    }

    js_runtime = r"""// ============================================================================
// CHINESE CULTURE EXPLORER — VERIFIED UNIQUE IMAGE POOL & RUNTIME DEDUPLICATOR
// Auto-generated by scripts/build_unique_image_pool.py
// Ensures zero duplicate raster images ever render on the same active view.
// ============================================================================
window.CCE_UNIQUE_IMAGE_POOL = __PAYLOAD__;

(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  var POOL = window.CCE_UNIQUE_IMAGE_POOL || { shadowCanonical: {}, buckets: {}, all: [] };
  var _deduping = false;
  var _rafId = 0;

  function normalizeImgSrc(raw) {
    if (!raw) return "";
    var s = String(raw).trim();
    if (!s || s.indexOf("data:") === 0 || s.indexOf("blob:") === 0) return "";
    try {
      if (s.indexOf("http://") === 0 || s.indexOf("https://") === 0) {
        var u = new URL(s);
        s = u.pathname || "";
      }
    } catch (_e) {}
    s = s.split("?")[0].split("#")[0].replace(/^\/+/, "");
    if (/\.svg$/i.test(s)) return "";
    if (POOL.shadowCanonical && POOL.shadowCanonical[s]) {
      return POOL.shadowCanonical[s];
    }
    return s;
  }

  function pickBucketOrder(normSrc, altText) {
    var s = (normSrc || "").toLowerCase();
    var a = (altText || "").toLowerCase();
    if (s.indexOf("assets/images/paintings/") === 0) {
      return ["paintings", "museum", "culture", "heritage", "all"];
    }
    if (s.indexOf("assets/images/museum/") === 0 || /museum|bảo tàng|đỉnh|đồng|ngọc|sứ|gốm|chuông|relic|artifact|vase|bronze/.test(a)) {
      return ["museum", "heritage", "culture", "landscape", "all"];
    }
    if (/\/d\d+\./.test(s) || /tea|trà|ẩm thực|dish|food|herb|dược|bếp|rượu|soup|noodle/.test(a)) {
      return ["food", "culture", "heritage", "landscape", "all"];
    }
    if (/\/f\d+\./.test(s) || /trade|thương|logistics|supply|rcep|hsr|port|cảng|rail|csc|đại học/.test(a)) {
      return ["trade", "landscape", "heritage", "culture", "all"];
    }
    if (s.indexOf("assets/images/provinces/") === 0 || /tỉnh|thành|sơn|hồ|sông|landscape|city|mountain/.test(a)) {
      return ["landscape", "heritage", "culture", "all"];
    }
    return ["heritage", "culture", "landscape", "museum", "trade", "food", "all"];
  }

  function hashSeed(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function pickReplacement(oldNorm, altText, seedIdx, reservedSet, usedInDom) {
    var order = pickBucketOrder(oldNorm, altText);
    var buckets = POOL.buckets || {};
    var seed = hashSeed((oldNorm || "img") + "|" + seedIdx);

    for (var bi = 0; bi < order.length; bi++) {
      var bName = order[bi];
      var list = bName === "all" ? (POOL.all || []) : (buckets[bName] || []);
      if (!list || !list.length) continue;
      var len = list.length;
      var start = seed % len;
      for (var step = 0; step < len; step++) {
        var cand = list[(start + step) % len];
        var candNorm = normalizeImgSrc(cand);
        if (!candNorm) continue;
        if (!reservedSet[candNorm] && !usedInDom[candNorm]) {
          return cand;
        }
      }
    }
    return "";
  }

  function dedupeImagesInContainer(containerEl) {
    if (_deduping) return 0;
    var root = containerEl || document.getElementById("main-content");
    if (!root || !root.querySelectorAll) return 0;

    _deduping = true;
    var replaced = 0;
    try {
      var imgs = root.querySelectorAll("img");
      if (!imgs || !imgs.length) return 0;

      var reservedSet = Object.create(null);
      var i, img, rawSrc, norm;
      for (i = 0; i < imgs.length; i++) {
        img = imgs[i];
        if (img.closest && img.closest("#cce-modal-root")) continue;
        rawSrc = img.getAttribute("src") || "";
        norm = normalizeImgSrc(rawSrc);
        if (norm) reservedSet[norm] = true;
      }

      var usedInDom = Object.create(null);
      for (i = 0; i < imgs.length; i++) {
        img = imgs[i];
        if (img.closest && img.closest("#cce-modal-root")) continue;
        if (img.getAttribute("data-keep-src") === "true") continue;
        rawSrc = img.getAttribute("src") || "";
        norm = normalizeImgSrc(rawSrc);
        if (!norm) continue;

        if (!usedInDom[norm]) {
          usedInDom[norm] = true;
          continue;
        }

        var altText = img.getAttribute("alt") || "";
        var replacement = pickReplacement(norm, altText, i, reservedSet, usedInDom);
        if (replacement) {
          var repNorm = normalizeImgSrc(replacement);
          usedInDom[repNorm] = true;
          reservedSet[repNorm] = true;
          img.setAttribute("src", replacement);
          var parentAction = img.closest ? img.closest("[data-src]") : null;
          if (parentAction) {
            var pSrc = normalizeImgSrc(parentAction.getAttribute("data-src") || "");
            if (pSrc === norm) {
              parentAction.setAttribute("data-src", replacement);
            }
          }
          replaced += 1;
        }
      }
    } finally {
      _deduping = false;
    }
    return replaced;
  }

  window.CCE_DEDUPE_IMAGES = dedupeImagesInContainer;

  function installObserver() {
    var appEl = document.getElementById("app") || document.body;
    if (!appEl || typeof MutationObserver !== "function") return;
    var mo = new MutationObserver(function (mutations) {
      if (_deduping) return;
      for (var mi = 0; mi < mutations.length; mi++) {
        var tgt = mutations[mi].target;
        var mainEl = document.getElementById("main-content");
        if (mainEl && tgt && (tgt === mainEl || mainEl.contains(tgt))) {
          dedupeImagesInContainer(mainEl);
          return;
        }
      }
    });
    mo.observe(appEl, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installObserver);
  } else {
    installObserver();
  }
})();
"""

    content = js_runtime.replace("__PAYLOAD__", json.dumps(payload, ensure_ascii=False, separators=(",", ":")))
    OUT_JS.parent.mkdir(parents=True, exist_ok=True)
    OUT_JS.write_text(content, encoding="utf-8")
    counts = {k: len(v) for k, v in buckets.items()}
    print(f"BUILT {OUT_JS.as_posix()}: all={len(merged_all)} MD5-unique landscape raster images | buckets={counts}")


if __name__ == "__main__":
    main()
