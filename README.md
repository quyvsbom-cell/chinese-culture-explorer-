# CHINESE CULTURE EXPLORER – 中国文化探索

**Explore Chinese Civilization, Understand Its Philosophy, Discover Its Culture.**

## Quick Start

Start the local web server with SQLite persistence:

```powershell
uv run python server.py
```

Then open **http://127.0.0.1:8080/** in your browser.

(You can also open `index.html` directly; progress persists via `localStorage` in static mode and syncs to SQLite `data/explorer.db` when `server.py` is running.)

## Project Structure

- `index.html` — Application shell and editorial typography loader
- `server.py` — UTF-8 static server + SQLite `/api/state` persistence endpoint
- `styles/main.css`, `styles/v4-editorial.css` — Modern Chinese Academic Editorial design system (Paper/Sepia/Night reading modes, Light & Dark modes, Command Palette, Print A4 sheets)
- `src/data/` — Multilingual academic & applied datasets:
  - Core modules: `historyData.js`, `philosophyData.js`, `metaphysicsData.js`, `customsArtData.js`, `regionsData.js`, `sinoVietnamData.js`, `businessData.js`, `articlesData.js`, `dictionaryData.js`, `learningAndResearchData.js`
  - `src/data/v3/` — EN parity packs, 64 Sino-Vietnamese False Friends, 24 Concept Pairs, B2B negotiation scenarios, 300+ active-recall checks
  - `src/data/v4/` — UNESCO/ICH encyclopedia, Four Classics + 60 HSK 4–9 briefs, Politics/Macro 2026, Non-Clinical Yin–Yang–Wuxing (TCM/Fengshui/Bazi/Ziwei) & CSC/UIBE Study Dossiers, 100 EU–China–VN Trilingual Logistics terms, and 90 V4 Quiz Arena items (180+ pool)
- `src/components/3d/` & `src/components/china3DMap.js` — 10 Interactive Three.js WebGL Studios coordinated by `CCE_WEBGL_MGR` (1 active WebGL context)
- `src/components/visuals.js`, `src/components/v4UXEnhancements.js`, `src/components/v4KnowledgeHub.js`, `src/components/trilingualTradeStudio.js`, `src/components/travelUXHub.js` — SVG Atlas, Command Palette (`Ctrl+K`), Knowledge Hub, and EU–China–VN Trade Studio
- `src/app.js` — SPA router, full-text search index, 4-column SRS card builder & CSV/TSV export, quiz engine, and learning journal
- `scripts/full_integrity_gate.py` & `scripts/import_v4_bundles.py` — 10 automated QA integrity gates, EN parity audit, SEO shell builder, and Gemini Web knowledge bundle importer
