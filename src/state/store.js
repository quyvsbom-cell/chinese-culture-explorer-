// ============================================================================
// State Management & Persistence Store (localStorage + SQLite API Sync)
// Stores learning progress, bookmarks, collected vocab, notes, highlights,
// contextual vocabulary notebook entries, changelog email preferences, reading history, and UI preferences.
// ============================================================================

window.CCE_STORE = (function () {
  const STORAGE_KEY = "cce_explorer_state_v1";

  const DEFAULT_STATE = {
    theme: "light",
    uiLang: "vi", // "vi" | "en" | "zh-CN" | "zh-TW"
    scriptMode: "both", // "simplified" | "both"
    articleFontSize: "md", // "sm" | "md" | "lg" | "xl"
    activePage: "home",
    searchHistory: [],
    bookmarks: [],
    completedArticles: [],
    collectedVocab: [],
    customFlashcards: [],
    notes: [],
    highlights: [],
    readingHistory: [],
    quizResults: [],
    flashcardMastered: [],
    vocabNotebook: [],
    emailSubscription: {
      subscribed: false,
      email: "",
      frequency: "weekly",
      topics: ["hot", "articles", "updates"],
      updatedAt: ""
    },
    changelogPublishedLog: [],
    activeJourneyId: null,
    pausedJourneys: [],
    journeyStepMap: {}
  };

  const DEMO_SAMPLE_STATE = {
    searchHistory: ["儒家", "关系", "春节", "万里长城"],
    bookmarks: [
      { type: "article", id: "hundred-schools", title: "Bách Gia Chư Tử: Thời đại Trục tâm của Tư tưởng Trung Hoa", addedAt: "2026-11-15" }
    ],
    completedArticles: ["hundred-schools"],
    collectedVocab: ["wenhua", "guanxi", "yinyang", "wuxing", "chunjie", "hannom"],
    notes: [
      {
        id: "note-sample-1",
        title: "So sánh Sai tự cách cục (Phí Hiếu Thông) và mạng lưới đối tác Thương mại",
        category: "Văn hóa Kinh doanh",
        method: "Comparative Learning",
        content:
          "Điểm cần nhớ theo phương pháp Feynman: Guanxi không phải là đi đêm hối lộ, mà là cơ chế giảm rủi ro giao dịch trong mạng lưới tin cậy cá nhân. Khi làm việc với nhà cung cấp Thâm Quyến hoặc Thượng Hải, phải kết hợp song song lòng tin cá nhân với hợp đồng Incoterms và kiểm toán chất lượng.",
        updatedAt: "2026-11-15"
      },
      {
        id: "note-sample-2",
        title: "Câu hỏi nghiên cứu: Âm Hán-Việt bảo lưu ngữ âm Đường-Tống ra sao?",
        category: "Giao lưu Trung – Việt",
        method: "Research Question",
        content:
          "Tại sao các từ như 'độc lập' (独立 dúlì), 'hợp tác' (合作 hézuò) trong tiếng Việt vẫn còn phụ âm cuối -p, -c trong khi tiếng Phổ thông hiện đại đã mất? Đối chiếu tài liệu của GS. Nguyễn Tài Cẩn và ngữ âm học lịch sử Trung cổ.",
        updatedAt: "2026-11-15"
      }
    ],
    readingHistory: [
      { type: "article", id: "hundred-schools", title: "Bách Gia Chư Tử: Thời đại Trục tâm của Tư tưởng Trung Hoa", viewedAt: "2026-11-15" }
    ],
    flashcardMastered: ["wenhua", "cha"],
    vocabNotebook: [
      {
        id: "vn-sample-1",
        term: "差序格局",
        pinyin: "chàxù géjú",
        hanViet: "Sai tự cách cục",
        meaning: "Differential mode of association (Phí Hiếu Thông 1947)",
        sourceSentence: "Trong mạng lưới thương mại Đông Á, chữ Tín vận hành qua cấu trúc 差序格局 (đồng tâm theo mức độ thân sơ).",
        articleId: "confucianism-society",
        articleTitle: "Nho giáo & Cấu trúc Xã hội Đông Á",
        note: "Khái niệm mấu chốt khi đối chiếu hợp đồng pháp lý phương Tây và mạng lưới tin cậy B2B Trung Quốc.",
        createdAt: "2026-11-18"
      },
      {
        id: "vn-sample-2",
        term: "斗拱 · Đấu củng",
        pinyin: "dǒugǒng",
        hanViet: "Đấu củng",
        meaning: "Interlocking wooden bracket system absorbing seismic energy",
        sourceSentence: "Hệ vì kèo 斗拱 dưới mái hiên Phi Diềm giúp Thái Hòa Điện chịu động đất suốt 600 năm không dùng đinh sắt.",
        articleId: "forbidden-city-3d-dissection",
        articleTitle: "Giải phẫu 3D Tử Cấm Thành (紫禁城): Đấu Củng & Trục Đế Vương",
        note: "Thuật ngữ kiến trúc gỗ cổ truyền — xuất hiện cả trong điện Thái Hòa Cố Cung và Điện Thái Hòa Huế.",
        createdAt: "2026-11-18"
      }
    ],
    activeJourneyId: "journey-01",
    journeyStepMap: {
      "journey-01": [0]
    }
  };

  let state = loadLocal();
  const listeners = new Set();

  function loadLocal() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const fresh = structuredClone(DEFAULT_STATE);
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          fresh.theme = "dark";
        }
        return fresh;
      }
      const parsed = JSON.parse(raw);
      return { ...structuredClone(DEFAULT_STATE), ...parsed };
    } catch {
      return structuredClone(DEFAULT_STATE);
    }
  }

  function saveLocal() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore quota errors
    }
  }

  let backendApiAvailable =
    window.location.protocol !== "file:" &&
    (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost");

  async function syncFromServer() {
    if (!backendApiAvailable) return;
    try {
      const res = await fetch("/api/state", { method: "GET" });
      if (!res.ok) {
        backendApiAvailable = false;
        return;
      }
      const serverData = await res.json();
      if (serverData && serverData.state && Object.keys(serverData.state).length > 0) {
        const localTs = Number(state.updatedAt || 0);
        const serverTs = Number(serverData.state.updatedAt || 0);
        if (localTs >= serverTs && localTs > 0) {
          pushToServer();
          return;
        }
        const preservedPage = state.activePage;
        const preservedLang = localStorage.getItem(STORAGE_KEY) ? state.uiLang : (serverData.state.uiLang || state.uiLang);
        state = {
          ...structuredClone(DEFAULT_STATE),
          ...serverData.state,
          activePage: preservedPage,
          uiLang: preservedLang || "vi"
        };
        document.documentElement.setAttribute("data-theme", state.theme || "light");
        document.documentElement.setAttribute("lang", state.uiLang || "vi");
        saveLocal();
        notify();
      } else {
        await pushToServer();
      }
    } catch {
      backendApiAvailable = false;
    }
  }

  async function pushToServer() {
    if (!backendApiAvailable) return;
    try {
      const res = await fetch("/api/state", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state })
      });
      if (!res.ok) backendApiAvailable = false;
    } catch {
      // Static fallback silently stays on localStorage
    }
  }

  function notify() {
    listeners.forEach((fn) => fn(state));
  }

  function update(mutator) {
    mutator(state);
    state.updatedAt = Date.now();
    saveLocal();
    pushToServer();
    notify();
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  return {
    getState() {
      return state;
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    init() {
      document.documentElement.setAttribute("data-theme", state.theme);
      document.documentElement.setAttribute("lang", state.uiLang || "vi");
      syncFromServer();
    },
    toggleTheme() {
      update((s) => {
        s.theme = s.theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", s.theme);
      });
    },
    setUiLang(lang) {
      update((s) => {
        s.uiLang = lang;
        if (lang === "zh-TW") s.scriptMode = "both";
        document.documentElement.setAttribute("lang", lang);
      });
    },
    setArticleFontSize(size) {
      update((s) => {
        s.articleFontSize = size;
      });
    },
    toggleScriptMode() {
      update((s) => {
        s.scriptMode = s.scriptMode === "both" ? "simplified" : "both";
      });
    },
    setPage(pageId) {
      update((s) => {
        s.activePage = pageId;
      });
    },
    isBookmarked(type, id) {
      return state.bookmarks.some((b) => b.type === type && b.id === id);
    },
    toggleBookmark(type, id, title) {
      let added = false;
      update((s) => {
        const idx = s.bookmarks.findIndex((b) => b.type === type && b.id === id);
        if (idx >= 0) {
          s.bookmarks.splice(idx, 1);
        } else {
          s.bookmarks.unshift({ type, id, title, addedAt: todayStr() });
          added = true;
        }
      });
      return added;
    },
    isArticleCompleted(articleId) {
      return state.completedArticles.includes(articleId);
    },
    toggleArticleCompleted(articleId) {
      update((s) => {
        const idx = s.completedArticles.indexOf(articleId);
        if (idx >= 0) s.completedArticles.splice(idx, 1);
        else s.completedArticles.push(articleId);
      });
    },
    recordReading(type, id, title) {
      update((s) => {
        s.readingHistory = s.readingHistory.filter((h) => !(h.type === type && h.id === id));
        s.readingHistory.unshift({ type, id, title, viewedAt: todayStr() });
        if (s.readingHistory.length > 25) s.readingHistory.pop();
      });
    },
    isVocabCollected(termId) {
      return state.collectedVocab.includes(termId);
    },
    toggleCollectVocab(termId) {
      let added = false;
      update((s) => {
        const idx = s.collectedVocab.indexOf(termId);
        if (idx >= 0) s.collectedVocab.splice(idx, 1);
        else {
          s.collectedVocab.push(termId);
          added = true;
        }
      });
      return added;
    },
    toggleMasteredFlashcard(termId) {
      update((s) => {
        const idx = s.flashcardMastered.indexOf(termId);
        if (idx >= 0) s.flashcardMastered.splice(idx, 1);
        else s.flashcardMastered.push(termId);
      });
    },
    addCustomFlashcard(card) {
      update((s) => {
        const id = "custom-" + Date.now();
        s.customFlashcards.unshift({ id, ...card });
        s.collectedVocab.unshift(id);
      });
    },
    addNote(note) {
      update((s) => {
        s.notes.unshift({
          id: "note-" + Date.now(),
          ...note,
          updatedAt: todayStr()
        });
      });
    },
    updateNote(noteId, patch) {
      update((s) => {
        const idx = s.notes.findIndex((n) => n.id === noteId);
        if (idx >= 0) {
          s.notes[idx] = { ...s.notes[idx], ...patch, updatedAt: todayStr() };
        }
      });
    },
    deleteNote(noteId) {
      update((s) => {
        s.notes = s.notes.filter((n) => n.id !== noteId);
      });
    },
    addSearchHistory(query) {
      const q = String(query || "").trim();
      if (!q) return;
      update((s) => {
        s.searchHistory = [q, ...(s.searchHistory || []).filter((x) => x.toLowerCase() !== q.toLowerCase())].slice(0, 8);
      });
    },
    clearSearchHistory() {
      update((s) => {
        s.searchHistory = [];
      });
    },
    addHighlight(articleId, text) {
      update((s) => {
        s.highlights.unshift({
          id: "hl-" + Date.now(),
          articleId,
          text,
          createdAt: todayStr()
        });
      });
    },
    deleteHighlight(hlId) {
      update((s) => {
        s.highlights = s.highlights.filter((h) => h.id !== hlId);
      });
    },
    recordQuizResult(score, total) {
      update((s) => {
        s.quizResults.unshift({
          id: "quiz-" + Date.now(),
          score,
          total,
          date: todayStr()
        });
      });
    },
    addVocabNotebookEntry(entry) {
      if (!entry || !String(entry.term || "").trim()) return;
      update((s) => {
        if (!Array.isArray(s.vocabNotebook)) s.vocabNotebook = [];
        s.vocabNotebook.unshift({
          id: "vn-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
          term: String(entry.term || "").trim(),
          pinyin: String(entry.pinyin || "").trim(),
          hanViet: String(entry.hanViet || "").trim(),
          meaning: String(entry.meaning || "").trim(),
          sourceSentence: String(entry.sourceSentence || "").trim(),
          articleId: String(entry.articleId || "").trim(),
          articleTitle: String(entry.articleTitle || "").trim(),
          note: String(entry.note || "").trim(),
          createdAt: todayStr()
        });
      });
    },
    updateVocabNotebookEntry(entryId, patch) {
      update((s) => {
        if (!Array.isArray(s.vocabNotebook)) s.vocabNotebook = [];
        const idx = s.vocabNotebook.findIndex((item) => item.id === entryId);
        if (idx >= 0) {
          s.vocabNotebook[idx] = { ...s.vocabNotebook[idx], ...patch, updatedAt: todayStr() };
        }
      });
    },
    deleteVocabNotebookEntry(entryId) {
      update((s) => {
        s.vocabNotebook = (s.vocabNotebook || []).filter((item) => item.id !== entryId);
      });
    },
    setEmailSubscription(patch) {
      update((s) => {
        s.emailSubscription = {
          ...(s.emailSubscription || DEFAULT_STATE.emailSubscription),
          ...patch,
          updatedAt: todayStr()
        };
      });
    },
    addChangelogLog(item) {
      update((s) => {
        if (!Array.isArray(s.changelogPublishedLog)) s.changelogPublishedLog = [];
        s.changelogPublishedLog.unshift({
          id: "log-" + Date.now(),
          ...item,
          publishedAt: todayStr()
        });
      });
    },
    startOrResumeJourney(journeyId) {
      update((s) => {
        s.activeJourneyId = journeyId;
        s.pausedJourneys = (s.pausedJourneys || []).filter((id) => id !== journeyId);
        if (!s.journeyStepMap) s.journeyStepMap = {};
        if (!Array.isArray(s.journeyStepMap[journeyId])) {
          s.journeyStepMap[journeyId] = [];
        }
      });
    },
    pauseJourney(journeyId) {
      update((s) => {
        if (s.activeJourneyId === journeyId) {
          s.activeJourneyId = null;
        }
        if (!Array.isArray(s.pausedJourneys)) s.pausedJourneys = [];
        if (!s.pausedJourneys.includes(journeyId)) {
          s.pausedJourneys.push(journeyId);
        }
      });
    },
    toggleJourneyStep(journeyId, stepIdx) {
      update((s) => {
        if (!s.journeyStepMap) s.journeyStepMap = {};
        if (!Array.isArray(s.journeyStepMap[journeyId])) {
          s.journeyStepMap[journeyId] = [];
        }
        const arr = s.journeyStepMap[journeyId];
        const i = arr.indexOf(stepIdx);
        if (i >= 0) arr.splice(i, 1);
        else arr.push(stepIdx);
      });
    },
    resetProgress() {
      update((s) => {
        const fresh = structuredClone(DEFAULT_STATE);
        fresh.theme = s.theme;
        fresh.uiLang = s.uiLang;
        fresh.scriptMode = s.scriptMode;
        fresh.articleFontSize = s.articleFontSize;
        fresh.activePage = s.activePage;
        Object.assign(s, fresh);
      });
    },
    loadDemoData() {
      update((s) => {
        const demo = structuredClone(DEMO_SAMPLE_STATE);
        s.searchHistory = demo.searchHistory;
        s.bookmarks = demo.bookmarks;
        s.completedArticles = demo.completedArticles;
        s.collectedVocab = demo.collectedVocab;
        s.notes = demo.notes;
        s.readingHistory = demo.readingHistory;
        s.flashcardMastered = demo.flashcardMastered;
        s.activeJourneyId = demo.activeJourneyId;
        s.journeyStepMap = demo.journeyStepMap;
      });
    },
    importPassportSnapshot(payload) {
      if (!payload || typeof payload !== "object") return false;
      const src = payload.storeState && typeof payload.storeState === "object" ? payload.storeState : payload;
      update((s) => {
        const arrayKeys = ["bookmarks", "completedArticles", "collectedVocab", "customFlashcards", "notes", "highlights", "readingHistory", "quizResults", "flashcardMastered", "vocabNotebook", "pausedJourneys"];
        arrayKeys.forEach((k) => {
          if (Array.isArray(src[k])) s[k] = src[k];
        });
        if (src.journeyStepMap && typeof src.journeyStepMap === "object") s.journeyStepMap = src.journeyStepMap;
      });
      if (payload.quizArenaBest != null) {
        try { localStorage.setItem("cce_quiz_arena_best", String(payload.quizArenaBest)); } catch (_e) {}
      }
      return true;
    }
  };
})();
