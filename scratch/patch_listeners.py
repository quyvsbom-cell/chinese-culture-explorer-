# -*- coding: utf-8 -*-
"""
Patch event listeners in src/app.js for paintings actions, comparison, zoom, and typing debouncing.
"""

with open("src/app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Click actions
click_marker = """      case "zoom-artifact":
        ui.lightboxOpen = true;
        render();
        break;"""

click_additions = """      case "zoom-artifact":
        ui.lightboxOpen = true;
        render();
        break;

      case "open-painting-detail":
        ui.activePaintingId = id;
        ui.searchModalOpen = false;
        ui.heroAutocompleteOpen = false;
        ui.paintingZoomScale = 1;
        render();
        break;

      case "close-painting-detail":
        ui.activePaintingId = null;
        ui.paintingZoomScale = 1;
        render();
        break;

      case "close-painting-backdrop":
        if (e.target.classList.contains("modal-backdrop") || target.getAttribute("data-action") === "close-painting-backdrop") {
          ui.activePaintingId = null;
          ui.paintingZoomScale = 1;
          render();
        }
        break;

      case "set-painting-tab":
        ui.paintingDetailTab = target.getAttribute("data-tab") || "historical";
        render();
        break;

      case "open-painting-zoom":
        if (id) ui.activePaintingId = id;
        ui.paintingZoomOpen = true;
        ui.paintingZoomScale = 1;
        render();
        break;

      case "close-painting-zoom":
        ui.paintingZoomOpen = false;
        ui.paintingZoomScale = 1;
        render();
        break;

      case "zoom-step-in":
        ui.paintingZoomScale = Math.min(3, (ui.paintingZoomScale || 1) + 0.25);
        render();
        break;

      case "zoom-step-out":
        ui.paintingZoomScale = Math.max(0.75, (ui.paintingZoomScale || 1) - 0.25);
        render();
        break;

      case "zoom-step-reset":
        ui.paintingZoomScale = 1;
        render();
        break;

      case "open-paintings-compare":
        ui.paintingCompareOpen = true;
        render();
        break;

      case "close-painting-compare":
        ui.paintingCompareOpen = false;
        render();
        break;

      case "close-compare-backdrop":
        if (e.target.classList.contains("modal-backdrop")) {
          ui.paintingCompareOpen = false;
          render();
        }
        break;

      case "compare-with-this":
        if (id) ui.paintingCompareLeftId = id;
        ui.paintingCompareOpen = true;
        render();
        break;

      case "launch-comparison":
        ui.paintingCompareLeftId = target.getAttribute("data-left") || "xishan-xinglv";
        ui.paintingCompareRightId = target.getAttribute("data-right") || "xiaoxiang-tu";
        ui.paintingCompareOpen = true;
        render();
        break;

      case "filter-painting-era":
        ui.paintingsEraFilter = target.getAttribute("data-era") || "all";
        render();
        break;

      case "filter-painting-genre":
        ui.paintingsGenreFilter = target.getAttribute("data-genre") || "all";
        render();
        break;

      case "clear-paintings-filters":
        ui.paintingsEraFilter = "all";
        ui.paintingsGenreFilter = "all";
        ui.paintingsMuseumFilter = "all";
        ui.paintingsAttributionFilter = "all";
        ui.paintingsQuery = "";
        render();
        break;

      case "set-paintings-view":
        ui.paintingsViewMode = target.getAttribute("data-mode") || "grid";
        render();
        break;

      case "scroll-to-paintings":
        {
          const el = document.getElementById("paintings-collection-anchor");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
        break;

      case "copy-citation":
        {
          const text = target.getAttribute("data-text");
          if (text && navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
              showToast("Đã sao chép trích dẫn học thuật vào bộ nhớ tạm!", "success");
            }).catch(() => {
              showToast("Vui lòng bôi đen và sao chép thủ công.", "info");
            });
          }
        }
        break;"""
assert click_marker in content, "click_marker not found"
content = content.replace(click_marker, click_additions)

# 2. Change listener additions
change_marker = """    if (action === "ui-lang-select") {
      Store.setUiLang(e.target.value);
      showToast(`Đã chuyển giao diện: ${e.target.value.toUpperCase()}`);
    } else if (action === "museum-period-filter") {"""

change_additions = """    if (action === "ui-lang-select") {
      Store.setUiLang(e.target.value);
      showToast(`Đã chuyển giao diện: ${e.target.value.toUpperCase()}`);
    } else if (action === "filter-painting-museum") {
      ui.paintingsMuseumFilter = e.target.value;
      render();
    } else if (action === "filter-painting-attr") {
      ui.paintingsAttributionFilter = e.target.value;
      render();
    } else if (action === "set-paintings-sort") {
      ui.paintingsSort = e.target.value;
      render();
    } else if (action === "select-compare-left") {
      ui.paintingCompareLeftId = e.target.value;
      render();
    } else if (action === "select-compare-right") {
      ui.paintingCompareRightId = e.target.value;
      render();
    } else if (action === "museum-period-filter") {"""
assert change_marker in content, "change_marker not found"
content = content.replace(change_marker, change_additions)

# 3. Input listener: debouncing and jitter fix
input_marker = """  document.addEventListener("input", (e) => {
    const action = e.target.getAttribute("data-action");
    if (action === "dict-search-input") {
      ui.dictQuery = e.target.value;
      render();
    } else if (action === "museum-search-input") {
      ui.museumQuery = e.target.value;
      render();
    } else if (action === "hero-search-input") {
      ui.heroSearchText = e.target.value;
      ui.heroAutocompleteOpen = Boolean(e.target.value.trim());
      const slot = document.getElementById("hero-autocomplete-slot");
      if (slot) {
        slot.innerHTML = renderHeroAutocomplete();
      } else {
        render();
      }
    } else if (action === "global-search-input") {
      ui.searchQuery = e.target.value;
      ui.searchLimit = 18;
      render();
    } else if (action === "quiz-short-input") {
      ui.quizShortAnswers[e.target.getAttribute("data-qid")] = e.target.value;
    } else if (action === "explore-query-input") {
      ui.exploreQuery = e.target.value;
      render();
    } else if (action === "province-query-input") {
      ui.provinceQuery = e.target.value;
      render();
    }
  });"""

input_replacement = """  let searchDebounceTimer = null;
  function debounceSearch(callback, delay = 80) {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(callback, delay);
  }

  document.addEventListener("input", (e) => {
    const action = e.target.getAttribute("data-action");
    if (!action) return;

    if (action === "hero-search-input") {
      ui.heroSearchText = e.target.value;
      const trimmed = e.target.value.trim();
      ui.heroAutocompleteOpen = Boolean(trimmed);
      const slot = document.getElementById("hero-autocomplete-slot");
      if (!trimmed) {
        clearTimeout(searchDebounceTimer);
        if (slot) slot.innerHTML = "";
      } else {
        debounceSearch(() => {
          if (slot) {
            slot.innerHTML = renderHeroAutocomplete();
          }
        }, 70);
      }
    } else if (action === "paintings-search-input") {
      ui.paintingsQuery = e.target.value;
      debounceSearch(() => {
        const slot = document.getElementById("paintings-grid-slot");
        if (slot) {
          slot.innerHTML = renderPaintingsGridContent();
        } else {
          render();
        }
      }, 70);
    } else if (action === "dict-search-input") {
      ui.dictQuery = e.target.value;
      debounceSearch(() => {
        render();
      }, 100);
    } else if (action === "museum-search-input") {
      ui.museumQuery = e.target.value;
      debounceSearch(() => {
        render();
      }, 100);
    } else if (action === "global-search-input") {
      ui.searchQuery = e.target.value;
      ui.searchLimit = 18;
      debounceSearch(() => {
        render();
      }, 100);
    } else if (action === "quiz-short-input") {
      ui.quizShortAnswers[e.target.getAttribute("data-qid")] = e.target.value;
    } else if (action === "explore-query-input") {
      ui.exploreQuery = e.target.value;
      debounceSearch(() => {
        render();
      }, 100);
    } else if (action === "province-query-input") {
      ui.provinceQuery = e.target.value;
      debounceSearch(() => {
        render();
      }, 100);
    }
  });"""
assert input_marker in content, "input_marker not found"
content = content.replace(input_marker, input_replacement)

# 4. Keydown Esc additions
esc_marker = """      } else if (ui.heroAutocompleteOpen) {
        ui.heroAutocompleteOpen = false;
        render();
      }"""

esc_replacement = """      } else if (ui.paintingZoomOpen) {
        ui.paintingZoomOpen = false;
        ui.paintingZoomScale = 1;
        render();
      } else if (ui.paintingCompareOpen) {
        ui.paintingCompareOpen = false;
        render();
      } else if (ui.activePaintingId) {
        ui.activePaintingId = null;
        ui.paintingZoomScale = 1;
        render();
      } else if (ui.heroAutocompleteOpen) {
        ui.heroAutocompleteOpen = false;
        render();
      }"""
assert esc_marker in content, "esc_marker not found"
content = content.replace(esc_marker, esc_replacement)

with open("src/app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Listeners and keyboard handlers successfully patched in src/app.js!")
