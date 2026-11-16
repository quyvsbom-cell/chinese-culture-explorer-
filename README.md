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
- `styles/main.css` — Modern Chinese Academic Editorial + Traditional Eastern Aesthetics design system (Light & Dark modes)
- `src/data/` — Separated academic datasets:
  - `historyData.js` (14 chronological eras + filterable timeline events)
  - `philosophyData.js` (9 schools × 7 dimensions, 7 classical texts, comparison matrix)
  - `metaphysicsData.js` (11 systems with strict epistemological boundaries, Five Elements & Bagua data)
  - `customsArtData.js` (15 customs, 10 arts/aesthetics, 11 contemporary topics)
  - `regionsData.js` (6 macro-regions + 10 priority city dossiers)
  - `sinoVietnamData.js` (10 Sino-Vietnamese themes separating transmission, adaptation & indigenous growth)
  - `businessData.js` (14 business & supply chain themes + 6 corporate case studies)
  - `articlesData.js` (12 university-level research articles with citations & verification notes)
  - `dictionaryData.js` (34+ bilingual entries with Lục thư radical breakdown, mnemonic & 3 contextual sentences)
  - `learningAndResearchData.js` (Knowledge graph, Active Recall & Feynman quizzes, research library, learning paths)
- `src/state/store.js` — Client state + API/localStorage sync
- `src/components/visuals.js` — Custom ink-wash SVG art, interactive China regional map, Five Elements diagram & Knowledge Graph
- `src/app.js` — SPA router, search engine, Anki Zero-Pinyin flashcard study + CSV/TSV export, quiz engine, and learning journal
