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
  - `src/data/v4/` — Full 6-Pack Gemini Web Knowledge Integration (59 UNESCO sites, 44 ICH, 24 Poems, 100 Chengyu, 9 TCM Constitutions, 12 Ziwu Liuzhu, Non-Clinical Yin–Yang–Wuxing 5×4 Matrix, 12 CSC/C9/UIBE Universities + 45 phrases, 100 EU–China–VN Logistics Terms, 10 Parallel Articles, 90 V4 Quiz Arena items)
  - `src/data/v5/` — Dedicated 24 Chinese Time-Honored Brands (`中华老字号 · laozihaoBrandsV5.js`)
- `src/components/3d/` & `src/components/china3DMap.js` — 10 Interactive Three.js WebGL Studios coordinated by `CCE_WEBGL_MGR` (1 active WebGL context)
- `src/components/visuals.js`, `src/components/v4UXEnhancements.js`, `src/components/v4KnowledgeHub.js`, `src/components/trilingualTradeStudio.js`, `src/components/travelUXHub.js`, `src/components/laozihaoPavilionV5.js`, `src/components/v5CourseAcademy.js` — 7-Module Sequential Course Academy, 24 Chinese Honored Brands Pavilion, SVG/3D Atlas, Command Palette (`Ctrl+K`), Knowledge Hub, and EU–China–VN Trade Studio
- `src/app.js` — SPA router (newest-first & curriculum order), full-text search index, 4-column SRS card builder & CSV/TSV export, quiz engine, and learning journal
- `scripts/full_integrity_gate.py`, `scripts/import_v4_bundles.py`, `scripts/import_v5_bundles.py` — 10 automated QA integrity gates, EN parity audit, SEO shell builder, and V4/V5 Gemini Web bundle importers
