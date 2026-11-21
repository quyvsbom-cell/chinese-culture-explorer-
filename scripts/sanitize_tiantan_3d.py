"""Convert the user-supplied Temple of Heaven 3D HTML file into a clean
assets/interactive/tiantan-3d-heritage.html ready for embedding and standalone
viewing, using local /src/vendor/three.min.js, stripping decorative Unicode
UI emojis, and syncing initial/live language via ?lang= & postMessage.
"""

from __future__ import annotations

import pathlib
import re

SRC = pathlib.Path(r"c:\Users\admin\Downloads\thi_n_n_b_c_kinh_temple_of_heaven_3d_digital_heritage.html")
DST = pathlib.Path("assets/interactive/tiantan-3d-heritage.html")

EMOJI_REPLACEMENTS = {
    "🏛": "◆",
    "📜": "▣",
    "🔊": "◈",
    "⏳": "◷",
    "🔇": "○",
    "🔊": "●",
    "📍": "▲",
    "🦅": "△",
    "🚶": "→",
    "🔍": "◎",
    "📖": "▤",
    "🌸": "•",
    "❄️": "•",
    "☀️": "•",
    "🌇": "•",
    "✂️": "✂",
    "✂": "÷",
    "🏯": "▲",
    "🪵": "▪",
    "🐉": "◈",
    "⭕": "○",
    "🎥": "▶",
    "🌊": "~",
    "👏👏👏": "•••",
    "👏👏": "••",
    "👏": "•",
    "⏸": "||",
    "▶": "›",
}

ALLOWED = set("✓✕☐☑●○□■▪▫▲△▼▽◆◇★☆⚊⚋☰☱☲☳☴☵☶☷→←↑↓↔⇄↗↙↖↘⤢ℹ·•—–−×÷≈≥≤±°©™›‹|~✂")


def main():
    txt = SRC.read_text(encoding="utf-8")
    txt = txt.replace(
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>',
        '<script src="/src/vendor/three.min.js"></script>',
    )
    # Strip emojis strictly via explicit map first, then regex safety pass
    for k, v in EMOJI_REPLACEMENTS.items():
        txt = txt.replace(k + " ", v + " " if v else "").replace(k, v)

    # Remove variation selector FE0F leftover from compound emojis
    txt = txt.replace("\uFE0F", "")

    # Catch any remaining Unicode emojis >= 0x1F300 or misc symbols 0x2600..0x27BF outside allowed/Hanzi
    out_chars = []
    removed = set()
    for ch in txt:
        cp = ord(ch)
        if cp >= 0x1F300 and not (
            0x2E80 <= cp <= 0x9FFF
            or 0xF900 <= cp <= 0xFAFF
            or 0xFE30 <= cp <= 0xFE4F
            or 0xFF00 <= cp <= 0xFFEF
            or 0x20000 <= cp <= 0x323AF
        ):
            removed.add(ch)
            out_chars.append("•")
        elif 0x2600 <= cp <= 0x27BF and ch not in ALLOWED:
            removed.add(ch)
            out_chars.append("•")
        else:
            out_chars.append(ch)
    txt = "".join(out_chars)

    # Sync language from URL query param (?lang=en|vi|zh|zh-CN|zh-TW) and postMessage
    init_target = "buildPins(); renderTimeline(); applyLanguage('vi'); setLighting('spring'); setEra('qing'); animate();"
    init_replacement = """const _initParam = new URLSearchParams(window.location.search).get('lang') || 'vi';
  const _normLang = _initParam.startsWith('zh') ? 'zh' : (_initParam === 'en' ? 'en' : 'vi');
  window.addEventListener('message', (ev) => {
    if (ev && ev.data && ev.data.type === 'cce-lang') {
      const l = String(ev.data.lang || 'vi');
      applyLanguage(l.startsWith('zh') ? 'zh' : (l === 'en' ? 'en' : 'vi'));
    }
  });
  buildPins(); renderTimeline(); applyLanguage(_normLang); setLighting('spring'); setEra('qing'); animate();"""
    assert init_target in txt, "Expected init anchor not found in Tiantan HTML"
    txt = txt.replace(init_target, init_replacement, 1)

    DST.parent.mkdir(parents=True, exist_ok=True)
    DST.write_text(txt, encoding="utf-8")
    print(f"Wrote {DST} ({len(txt)//1024} KB). Stripped extra chars: {sorted(removed)}")


if __name__ == "__main__":
    main()
