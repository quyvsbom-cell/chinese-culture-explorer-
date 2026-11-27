---
name: zero-waste-spa-3d-execution
description: >-
  Enforces high-efficiency turn batching, Windows PowerShell hygiene, safe Node vm inspection,
  anti-starvation async lazy-shard hydration, headless Chrome CDP verification, gate-first checking,
  and museum-grade Three.js procedural architecture when building or maintaining vanilla-JS SPAs.
---

# Zero-Waste SPA & 3D Execution Playbook

Project-checked copy of the Antigravity skill distilled from the 5,670-turn audit of `chinese-culture-explorer` (`c:\Website China-Vietnam`).

## 1. Turn-Batching & Read Discipline
- Read whole files up to the 800-line ceiling (`StartLine=1, EndLine=800`) in one call; never chunk a `<800`-line file across sequential turns.
- Batch all independent `read_file`, `edit_file`, and `write_file` calls in parallel in a single turn.
- Use one consolidated Python (`@' ... '@ | uv run python -`) or Node (`node -e`) script instead of multiple exploratory shell commands.
- Do not poll `manage_task` in a loop; rely on automatic system notifications.

## 2. Plan-Mode Boundary Discipline
- Never issue `write_file`, `edit_file`, or mutating commands while Plan Mode is active.
- Finish read-only reconnaissance in 1 parallel turn, then call `exit_plan_mode`.

## 3. Windows PowerShell 5.1 Execution Hygiene
- Never use `&&` in PowerShell; use `;` or pass multiline Python via `@' ... '@ | uv run python -`.
- Use `.cmd` / `.exe` binaries (`npx.cmd`, `npm.cmd`, `C:\Users\admin\.gemini\bin\agy.exe`) to avoid `.ps1` `ExecutionPolicy` blocks (`PSSecurityException`).

## 4. JS Bundle Introspection via Node `vm`
- Inspect ES5 IIFE `window.*` bundles with Node `vm.runInContext`, never Python `re.search` + `json.loads`.

## 5. Async Lazy-Shard Hydration Anti-Starvation
- Maintain both `hydratingPacks` and `hydratedPacks` latches in `v104ViewsBridge.js` / `v12MasterViews.js` / `lazyLoader.js`.
- Gate hydration on missing canonical symbols (`!window.TARGET_SYMBOL`), never raw array length heuristics alone (which cause infinite resolved-Promise microtask loops).
- Mutate canonical global array references in-place (`syncArticlesRef`) and deduplicate merges idempotently by `Set` of IDs rather than one-shot boolean flags.

## 6. Headless Chrome CDP Verification
- Always wrap `ws.onopen = async () =>` in `try { ... } catch (err) { console.error(err); process.exit(1); }` and poll DOM predicates instead of fixed sleeps.
- Capture all target routes and console error assertions in one single-launch CDP script.

## 7. Gate-First Pre-Edit Checklist
- Before editing, verify hard invariants in `scripts/full_integrity_gate.py` and `scripts/de_ai_lint_gate.py`:
  - Zero edits to `src/data/brandIdentityData.js` (Gate 6).
  - Keep `CACHE_VERSION = "cce-v10.4"` in `sw.js` (Gate 10 & 17).
  - Keep exact `6` `\bid:\s*"([^"]+)"` entries in `src/components/3d/v7Masterpieces3D.js` (Gate 13).
  - Zero UI emojis (`>= U+1F300`), zero Gate-19 AI-ese strings, zero `\bmuji\b`, and mandatory non-clinical TCM framing (Gate 9).
- Complete all coordinated edits before running `full_integrity_gate.py` once.

## 8. Non-Toy Museum-Grade Three.js Checklist
- Keep masonry `roughness >= 0.78` and `clearcoat: 0` with `repeatTex` tiled textures.
- Build palace roofs with `CCE_3D_ARCH.createCurvedRoof` (concave *Juzhe* curve + upturned *Feiyan* corners), never plain 4-sided pyramids (`ConeGeometry`).
- Use 16-24 point `THREE.LatheGeometry` profiles for vessels/bronzes/bells and register every canvas via `CCE_WEBGL_MGR.register()`.
