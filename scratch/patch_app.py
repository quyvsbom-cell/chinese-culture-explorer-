# -*- coding: utf-8 -*-
"""
Patcher script to integrate Paintings Exhibition and UX fixes into src/app.js
"""

with open("src/app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Declaration of Paintings
old_decl = "  const Museum = window.CCE_MUSEUM;\n  const EditorialMedia = window.CCE_EDITORIAL_MEDIA;"
new_decl = """  const Museum = window.CCE_MUSEUM;
  const Paintings = window.CCE_PAINTINGS || { masterpieces: [], eras: [], genres: [], comparisons: [], museums: [] };
  const EditorialMedia = window.CCE_EDITORIAL_MEDIA;"""
assert old_decl in content, "old_decl not found"
content = content.replace(old_decl, new_decl)

# 2. Add palette icon to ICONS
old_icons = '    museum: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M4 18h16M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 3l9 5H3l9-5z"/></svg>`,'
new_icons = """    museum: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M4 18h16M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 3l9 5H3l9-5z"/></svg>`,
    palette: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
    scales: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M6 8l6-3 6 3M3 14l3-6 3 6a3 3 0 01-6 0zM15 14l3-6 3 6a3 3 0 01-6 0z"/></svg>`,"""
assert old_icons in content, "old_icons not found"
content = content.replace(old_icons, new_icons)

# 3. Add paintings to NAV_ITEMS
old_nav = '    { id: "traditional", zh: "传统与当代", vi: "Văn hóa Truyền thống", en: "TRADITIONAL CULTURE", zhCN: "传统文化", zhTW: "傳統文化", hasMega: true },'
new_nav = """    { id: "traditional", zh: "传统与当代", vi: "Văn hóa Truyền thống", en: "TRADITIONAL CULTURE", zhCN: "传统文化", zhTW: "傳統文化", hasMega: true },
    { id: "paintings", zh: "国画经典", vi: "Quốc họa Danh tác", en: "MASTERPIECES", zhCN: "国画经典", zhTW: "國畫經典", hasMega: false },"""
assert old_nav in content, "old_nav not found"
content = content.replace(old_nav, new_nav)

# 4. Add paintings state to ui
old_ui = '    activeArtifactId: null,\n    lightboxOpen: false,'
new_ui = """    activeArtifactId: null,
    lightboxOpen: false,
    paintingsEraFilter: "all",
    paintingsGenreFilter: "all",
    paintingsMuseumFilter: "all",
    paintingsAttributionFilter: "all",
    paintingsQuery: "",
    paintingsViewMode: "grid",
    paintingsSort: "chronological",
    activePaintingId: null,
    paintingDetailTab: "historical",
    paintingZoomOpen: false,
    paintingZoomScale: 1,
    paintingCompareOpen: false,
    paintingCompareLeftId: "xishan-xinglv",
    paintingCompareRightId: "zao-chun-tu","""
assert old_ui in content, "old_ui not found"
content = content.replace(old_ui, new_ui)

# 5. Index paintings in performGlobalSearch
old_search_res = """        return match([txt.titleZh, txt.titleVi, txt.titleEn, txt.school, txt.summary, txt.excerptZh, txt.excerptVi]);
      }),
      research: RESEARCH_INDEX.filter((r) => {"""

new_search_res = """        return match([txt.titleZh, txt.titleVi, txt.titleEn, txt.school, txt.summary, txt.excerptZh, txt.excerptVi]);
      }),
      paintings: ((window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || []).filter((p) => {
        if (periodFilter !== "all" && p.eraId !== periodFilter) return false;
        return match([
          p.titleVi,
          p.titleZh,
          p.pinyin,
          p.titleEn,
          p.artist.nameVi,
          p.artist.nameZh,
          p.artist.pinyin,
          p.material,
          p.museum,
          p.genreLabel,
          p.attribution,
          p.analysis.historicalBackground,
          p.analysis.brushwork,
          p.analysis.philosophicalMeaning
        ]);
      }),
      research: RESEARCH_INDEX.filter((r) => {"""
assert old_search_res in content, "old_search_res not found"
content = content.replace(old_search_res, new_search_res)

# 6. Hero Autocomplete: include paintings
old_hero_auto = """    const suggestions = [
      ...res.articles.slice(0, 3).map((a) => ({ label: a.titleVi, meta: `Chuyên luận • ${a.titleZh}`, action: "open-article", id: a.id })),
      ...res.terms.slice(0, 3).map((t) => ({ label: `${t.hanzi} (${t.pinyin}) — ${t.vietnamese}`, meta: "Từ điển", action: "open-term", id: t.id })),"""

new_hero_auto = """    const suggestions = [
      ...(res.paintings || []).slice(0, 2).map((p) => ({ label: `${p.titleVi} (${p.titleZh}) — ${p.artist.nameVi}`, meta: `Quốc họa • ${p.dynasty.nameVi}`, action: "open-painting-detail", id: p.id })),
      ...res.articles.slice(0, 3).map((a) => ({ label: a.titleVi, meta: `Chuyên luận • ${a.titleZh}`, action: "open-article", id: a.id })),
      ...res.terms.slice(0, 2).map((t) => ({ label: `${t.hanzi} (${t.pinyin}) — ${t.vietnamese}`, meta: "Từ điển", action: "open-term", id: t.id })),"""
assert old_hero_auto in content, "old_hero_auto not found"
content = content.replace(old_hero_auto, new_hero_auto)

# 7. Header button: add shortcut to paintings
old_header_btn = """              <button type="button" class="lang-toggle-btn" data-action="nav" data-page="museum" title="Bảo tàng Số (${Museum.artifacts.length} Bảo vật)">
                ${ICONS.museum}
                <span class="search-label">Bảo tàng Số</span>
              </button>"""

new_header_btn = """              <button type="button" class="lang-toggle-btn" data-action="nav" data-page="museum" title="Bảo tàng Số (${Museum.artifacts.length} Bảo vật)">
                ${ICONS.museum}
                <span class="search-label">Bảo tàng Số</span>
              </button>

              <button type="button" class="lang-toggle-btn" data-action="nav" data-page="paintings" title="Triển lãm Kiệt tác Quốc họa Trung Hoa (54 Kiệt tác Toàn bích)">
                ${ICONS.palette}
                <span class="search-label" style="color:var(--imperial-red);font-weight:600;">Quốc họa Danh tác</span>
              </button>"""
assert old_header_btn in content, "old_header_btn not found"
content = content.replace(old_header_btn, new_header_btn)

# 8. Search Modal: push paintings rows
old_search_modal_push = """    pushRows("texts", results.texts, (tx) => ({
      badge: "Kinh điển",
      badgeClass: "badge-gold",
      title: `${tx.titleZh} — ${tx.titleVi}`,
      sub: `${tx.school} • ${tx.era}`,
      btnLabel: "Mở Triết học",
      action: "nav",
      page: "philosophy"
    }));"""

new_search_modal_push = """    pushRows("texts", results.texts, (tx) => ({
      badge: "Kinh điển",
      badgeClass: "badge-gold",
      title: `${tx.titleZh} — ${tx.titleVi}`,
      sub: `${tx.school} • ${tx.era}`,
      btnLabel: "Mở Triết học",
      action: "nav",
      page: "philosophy"
    }));
    pushRows("paintings", results.paintings, (p) => ({
      badge: "Quốc họa",
      badgeClass: "badge-red",
      title: `${p.titleVi} (${p.titleZh}) — ${p.artist.nameVi}`,
      sub: `${p.dynasty.nameVi} • ${p.material} • 🏛️ ${p.museum}`,
      btnLabel: "Khảo cứu Kiệt tác",
      action: "open-painting-detail",
      id: p.id
    }));"""
assert old_search_modal_push in content, "old_search_modal_push not found"
content = content.replace(old_search_modal_push, new_search_modal_push)

# 9. Search Modal tabs
old_search_tabs = """      results.places.length +
      results.texts.length +
      results.research.length;

    const categoryTabs = [
      { id: "all", label: `Tất cả (${totalAllCategories})` },
      { id: "articles", label: `Bài viết (${results.articles.length})` },
      { id: "terms", label: `Từ vựng (${results.terms.length})` },
      { id: "artifacts", label: `Hiện vật (${results.artifacts.length})` },"""

new_search_tabs = """      results.places.length +
      results.texts.length +
      (results.paintings ? results.paintings.length : 0) +
      results.research.length;

    const categoryTabs = [
      { id: "all", label: `Tất cả (${totalAllCategories})` },
      { id: "paintings", label: `Quốc họa (${results.paintings ? results.paintings.length : 0})` },
      { id: "articles", label: `Bài viết (${results.articles.length})` },
      { id: "terms", label: `Từ vựng (${results.terms.length})` },
      { id: "artifacts", label: `Hiện vật (${results.artifacts.length})` },"""
assert old_search_tabs in content, "old_search_tabs not found"
content = content.replace(old_search_tabs, new_search_tabs)

# 10. renderPageContent
old_page_content = """  function renderPageContent(pageId) {
    switch (pageId) {
      case "article": return renderArticlePage();
      case "museum": return renderMuseumPage();"""

new_page_content = """  function renderPageContent(pageId) {
    switch (pageId) {
      case "article": return renderArticlePage();
      case "museum": return renderMuseumPage();
      case "paintings": return renderPaintingsPage();"""
assert old_page_content in content, "old_page_content not found"
content = content.replace(old_page_content, new_page_content)

# 11. render() modals
old_render_modals = """      ${renderArtifactModal()}
      ${renderTermModal()}"""

new_render_modals = """      ${renderArtifactModal()}
      ${renderPaintingDetailModal()}
      ${renderPaintingCompareModal()}
      ${renderPaintingZoomModal()}
      ${renderTermModal()}"""
assert old_render_modals in content, "old_render_modals not found"
content = content.replace(old_render_modals, new_render_modals)

# Load view and modals code
from test_paintings_view import PAINTINGS_JS
from test_paintings_modals import MODALS_JS

# Insert paintings view functions right after renderArtifactModal()
insertion_marker = "  // ==========================================================================\n  // Page 4: HISTORY (14 Periods, Horizontal/Vertical Timeline Toggle + 6 Filters)"
assert insertion_marker in content, "insertion_marker not found"

all_paintings_code = PAINTINGS_JS + "\n" + MODALS_JS + "\n\n"
content = content.replace(insertion_marker, all_paintings_code + insertion_marker)

print("Core structural components replaced successfully!")

with open("src/app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Saved intermediate patched app.js")
