// ============================================================================
// CHINESE CULTURE EXPLORER V5.0 — Structured 6-Course Sequential Academy
// Organizes the site like a connected university-level curriculum:
// 1. Geo & Hydraulics -> 2. History & Thought -> 3. Yin-Yang-Wuxing & TCM ->
// 4. HSK Classics & Arts -> 5. Cuisine, Travel & CSC Study ->
// 6. Silk Road, Honored Brands (老字号) & EU-China-VN Logistics
// ============================================================================

(function () {
  "use strict";

  var DONE_KEY = "cce_v5_course_done";

  function loadDone() {
    try {
      var raw = JSON.parse(localStorage.getItem(DONE_KEY) || "{}");
      return raw && typeof raw === "object" ? raw : {};
    } catch (_e) {
      return {};
    }
  }

  function saveDone(obj) {
    try { localStorage.setItem(DONE_KEY, JSON.stringify(obj)); } catch (_e) {}
  }

  var CURRICULUM = [
    {
      num: "01",
      page: "regions",
      img: "assets/images/provinces/sichuan-jiuzhaigou.jpg",
      zh: "天时地利 · 地理与水利",
      titleVi: "Học phần 1: Địa lý 3 Bậc Thang, Đô Giang Yển & 34 Tỉnh/Thành",
      titleEn: "Module 1: 3-Step Topography, Dujiangyan & 34 Provinces",
      whyNextVi: "Địa mạo và khí hậu định hình lịch sử thủy lợi, kiến trúc cư trú và đặc sản từng vùng — tiền đề để bước vào dòng chảy Lịch sử & Triết học.",
      whyNextEn: "Topography and hydrology shape dynastic capitals and regional societies—setting the stage for History & Thought.",
      nextPage: "history",
      nextLabelVi: "Học phần 2: Lịch sử 14 Triều đại & Danh nhân Cố hương →",
      nextLabelEn: "Module 2: 14-Dynasty History & Provincial Luminaries →"
    },
    {
      num: "02",
      page: "history",
      img: "assets/images/academic/qin-terracotta.jpg",
      zh: "通古今之变 · 历代与人物",
      titleVi: "Học phần 2: 14 Triều đại, Trục Thiên đô & 28 Danh nhân Lịch đại",
      titleEn: "Module 2: 14 Dynasties, Capital Shift & 28 Key Figures",
      whyNextVi: "Biến động thời Xuân Thu – Chiến Quốc sản sinh Bách Gia Chư Tử, hệ thống tư tưởng Nho – Đạo – Pháp làm xương sống cho văn hóa.",
      whyNextEn: "Spring-Autumn/Warring States upheavals catalyzed the Hundred Schools of Thought that anchored Chinese ethics and aesthetics.",
      nextPage: "philosophy",
      nextLabelVi: "Học phần 3: Nho – Đạo – Phật & Văn ngôn Kinh điển →",
      nextLabelEn: "Module 3: Philosophy & Classical Texts →"
    },
    {
      num: "03",
      page: "philosophy",
      img: "assets/images/articles/hero-confucianism.jpg",
      zh: "百家争鸣 · 儒道墨法",
      titleVi: "Học phần 3: Nho – Đạo – Pháp – Mặc & Văn ngôn Kinh điển",
      titleEn: "Module 3: Confucianism, Daoism & Classical Canons",
      whyNextVi: "Nền tảng Dịch học và Đạo gia kết tinh thành ngữ pháp chung Âm Dương – Ngũ Hành chi phối đồng thời Đông y, Phong thủy, Bát Tự và Tử Vi.",
      whyNextEn: "Daoist and Yijing correlative thinking crystallized into Yin–Yang–Wuxing cosmology underlying TCM and architectural spatial arts.",
      nextPage: "traditional",
      nextLabelVi: "Học phần 4: Kiến trúc Đấu Củng, Phong thủy & Lão Tự Hiệu →",
      nextLabelEn: "Module 4: Architecture, Traditions & Honored Brands →"
    },
    {
      num: "04",
      page: "traditional",
      img: "assets/images/articles/hero-laozihao-craft.jpg",
      zh: "器道合一 · 建筑饮食与老字号",
      titleVi: "Học phần 4: Di sản Kiến trúc, Trà đạo, Ẩm thực & 24 Lão Tự Hiệu",
      titleEn: "Module 4: Timber Architecture, Culinary Arts & Honored Brands",
      whyNextVi: "Khi chuyển sang không gian thị giác và âm thanh thực tế, Quốc họa và Bảo tàng Số 3D giúp quan sát trực tiếp Đấu Củng, Thiên Đàn và Biên Chung.",
      whyNextEn: "Digital Museum 3D Labs and Paintings allow hands-on inspection of Dougong brackets, Temple of Heaven cosmology, and bronze chime bells.",
      nextPage: "museum",
      nextLabelVi: "Học phần 5: Phòng Thí nghiệm 10 Mô hình 3D & Bảo tàng →",
      nextLabelEn: "Module 5: 10 Interactive 3D Labs & Digital Museum →"
    },
    {
      num: "05",
      page: "museum",
      img: "assets/images/museum/taihe-dian.jpg",
      zh: "博物致知 · 三维文物实验室",
      titleVi: "Học phần 5: 10 Studio 3D WebGL & Di sản Quốc họa Cố Cung",
      titleEn: "Module 5: 10 WebGL 3D Studios & National Relics",
      whyNextVi: "Bước từ thưởng ngoạn hiện vật sang hệ thống hóa học thuật: Học viện Chuyên đề trên /explore gom trọn Tây Du Ký, Hồng Lâu Mộng, 60 HSK 4–9, Đông y – Ngũ Hành và Du học CSC.",
      whyNextEn: "Move from artifact inspection to structured interdisciplinary mastery: HSK classics, Yin-Yang-Wuxing matrix, Politics, and CSC Study Abroad.",
      nextPage: "explore",
      nextLabelVi: "Học phần 6: Học viện HSK 4–9, Đông y – Ngũ Hành & Du học →",
      nextLabelEn: "Module 6: HSK Academy, Yin-Yang-Wuxing & CSC Study →"
    },
    {
      num: "06",
      page: "explore",
      img: "assets/images/articles/hero-keju-examinations.jpg",
      zh: "经世致用 · 文史研习与留华",
      titleVi: "Học phần 6: HSK 4–9, Âm Dương Ngũ Hành, Du học CSC & Chính trị 2026",
      titleEn: "Module 6: HSK 4–9, Wuxing Framework, Study Abroad & Macro 2026",
      whyNextVi: "Sau khi nắm văn hóa, Hán tự và bối cảnh vĩ mô, hãy đối chiếu song hành với lịch sử Việt Nam và thực hành Logistics Tam ngữ Anh – Trung – Việt cho công ty Châu Âu.",
      whyNextEn: "Connect Chinese cultural fluency to Vietnam's autonomous heritage and applied European–China–Vietnam trilingual import-export logistics.",
      nextPage: "business",
      nextLabelVi: "Học phần 7 (Thực chiến): Studio Logistics Âu–Trung & Đường Tơ Lụa →",
      nextLabelEn: "Module 7 (Career): EU–China Logistics Studio & Silk Road →"
    },
    {
      num: "07",
      page: "business",
      img: "assets/images/articles/hero-silk-road.jpg",
      zh: "知行合一 · 中欧越三语经贸",
      titleVi: "Học phần 7: Studio Logistics Âu–Trung–Việt, Đường Tơ Lụa & 180+ Đề Thi",
      titleEn: "Module 7: EU–China Trilingual Trade Studio, Silk Road & Quiz Arena",
      whyNextVi: "Hoàn thiện kỹ năng bằng hệ thống lặp lại ngắt quãng SM-2 và 180+ câu trắc nghiệm tổng hợp tại Trung tâm Học tập.",
      whyNextEn: "Consolidate long-term retention in both Business English and Chinese via SM-2 flashcards and the 180+ bilingual Quiz Arena.",
      nextPage: "learning",
      nextLabelVi: "Tổng kết & Luyện thi: Từ điển Lục thư, SRS & Hầm Luyện Thi →",
      nextLabelEn: "Capstone Review: Liushu Lexicon, SM-2 SRS & Quiz Arena →"
    }
  ];

  function renderCourseTracker(enM) {
    var done = loadDone();
    var completedCount = CURRICULUM.filter(function (m) { return Boolean(done[m.page]); }).length;
    var pct = Math.round((completedCount / CURRICULUM.length) * 100);

    return (
      '<section id="cce-v5-course-academy" class="card mb-2" style="margin-top:1.5rem;border-top:3px solid var(--imperial-red);padding:1.15rem 1.25rem;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "STRUCTURED LEARNING PATHWAY · 循序渐进七大课程模块" : "LỘ TRÌNH HỌC TẬP TUẦN TỰ NHƯ MỘT KHÓA HỌC · 循序渐进课程体系") + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;font-size:1.25rem;">' + (enM ? "7-Module Progressive Curriculum: From Geography & History to HSK, Wuxing & EU Trade" : "Khóa Học 7 Học Phần Kết Nối Mạch Lạc: Từ Địa lý – Lịch sử đến HSK, Đông y & Logistics Âu–Trung") + '</h3>' +
      '    </div>' +
      '    <span class="badge badge-jade">' + completedCount + '/' + CURRICULUM.length + ' (' + pct + '%)</span>' +
      '  </div>' +
      '  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0.6rem;">' +
      CURRICULUM.map(function (m) {
        var isDone = Boolean(done[m.page]);
        var mTitle = enM ? m.titleEn : m.titleVi;
        return (
          '<div class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.35rem;padding:0.7rem 0.8rem;' + (isDone ? "border-left:3px solid var(--jade-green);" : "") + '">' +
          (m.img ? '<div class="img-skeleton-bg" style="aspect-ratio:16/9;width:100%;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);background:var(--bg-surface);cursor:pointer;" data-action="open-custom-image" data-src="' + esc(m.img) + '" data-caption="' + esc(mTitle) + '"><img src="' + esc(m.img) + '" alt="' + esc(mTitle) + '" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:50% 35%;display:block;" onerror="this.onerror=null;this.src=\'assets/images/museum/taihe-dian.jpg\';" /></div>' : "") +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.35rem;">' +
          '    <span class="badge ' + (isDone ? "badge-jade" : "badge-outline") + '">Module ' + m.num + '</span>' +
          '    <button type="button" class="btn btn-ghost btn-sm" style="padding:0.05rem 0.35rem;font-size:0.72rem;" data-v5c-toggle="' + m.page + '">' + (isDone ? (enM ? "Done ✓" : "Đã xong ✓") : (enM ? "Mark" : "Đánh dấu")) + '</button>' +
          '  </div>' +
          '  <strong style="font-size:0.83rem;">' + esc(mTitle) + '</strong>' +
          '  <span class="hanzi text-xs" style="color:var(--text-muted);">' + esc(m.zh) + '</span>' +
          '  <button type="button" class="btn btn-secondary btn-sm" style="margin-top:auto;align-self:flex-start;padding:0.18rem 0.5rem;font-size:0.74rem;" data-action="nav" data-page="' + m.page + '">' + (enM ? "Open Module →" : "Học bài này →") + '</button>' +
          '</div>'
        );
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  function renderNextStepBridge(activePage, enM) {
    var mod = CURRICULUM.find(function (m) { return m.page === activePage; });
    if (!mod) {
      if (activePage === "sino-vietnam") mod = CURRICULUM[5];
      else if (activePage === "paintings") mod = CURRICULUM[4];
      else if (activePage === "library") mod = CURRICULUM[2];
      else return "";
    }
    var done = loadDone();
    var isDone = Boolean(done[mod.page]);
    return (
      '<section class="card mt-2 mb-2" id="cce-v5-next-bridge" style="margin:1.5rem auto;max-width:1180px;padding:1rem 1.25rem;border-left:4px solid var(--jade-green);background:var(--bg-surface);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.85rem;">' +
      '    <div style="display:flex;align-items:center;gap:0.85rem;max-width:74ch;">' +
      (mod.img ? '<img src="' + esc(mod.img) + '" alt="' + esc(mod.zh) + '" loading="lazy" decoding="async" style="width:76px;height:52px;object-fit:cover;border-radius:var(--radius);border:1px solid var(--hairline);flex-shrink:0;" />' : "") +
      '      <div>' +
      '        <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? ("COURSE LOGIC BRIDGE · MODULE " + mod.num) : ("MẠCH LOGIC KHÓA HỌC · HỌC PHẦN " + mod.num)) + '</div>' +
      '        <p style="margin:0.25rem 0 0;font-size:0.86rem;color:var(--text-secondary);">' + esc(enM ? mod.whyNextEn : mod.whyNextVi) + '</p>' +
      '      </div>' +
      '    </div>' +
      '    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">' +
      '      <button type="button" class="btn btn-secondary btn-sm" data-v5c-toggle="' + mod.page + '">' + (isDone ? (enM ? "Completed ✓" : "Đã hoàn thành ✓") : (enM ? "Complete Module " + mod.num : "Hoàn thành Học phần " + mod.num)) + '</button>' +
      '      <button type="button" class="btn btn-primary btn-sm" data-action="nav" data-page="' + mod.nextPage + '">' + esc(enM ? mod.nextLabelEn : mod.nextLabelVi) + '</button>' +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function bind() {
    if (window._cceV5CourseBound || typeof document === "undefined") return;
    window._cceV5CourseBound = true;
    document.addEventListener("click", function (e) {
      var btn = e.target && e.target.closest ? e.target.closest("[data-v5c-toggle]") : null;
      if (!btn) return;
      var pg = btn.getAttribute("data-v5c-toggle");
      var done = loadDone();
      done[pg] = !done[pg];
      saveDone(done);
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
  }
  bind();

  window.CCE_V5_ACADEMY = {
    CURRICULUM: CURRICULUM,
    renderCourseTracker: renderCourseTracker,
    renderNextStepBridge: renderNextStepBridge
  };
})();
