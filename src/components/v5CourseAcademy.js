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

  var activeModNum = 1;

  var LESSON_IMGS = [
    "assets/images/provinces/sichuan-jiuzhaigou.jpg",
    "assets/images/academic/guilin-li-river.jpg",
    "assets/images/provinces/shaanxi-terracotta-army.jpg",
    "assets/images/paintings/22_qianli_jiangshan.jpg",
    "assets/images/provinces/zhejiang-hangzhou-westlake.jpg",
    "assets/images/articles/hero-supply-chain-rcep.jpg",
    "assets/images/museum/houmuwu-ding.jpg",
    "assets/images/academic/qin-terracotta.jpg",
    "assets/images/articles/hero-tang-dynasty.jpg",
    "assets/images/academic/tang-sancai-camel.jpg",
    "assets/images/museum/taihe-dian.jpg",
    "assets/images/academic/van-mieu-hanoi.jpg",
    "assets/images/articles/hero-hundred-schools.jpg",
    "assets/images/articles/hero-yinyang.jpg",
    "assets/images/articles/hero-traditional-arch.jpg",
    "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
    "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "assets/images/academic/suzhou-garden.jpg",
    "assets/images/articles/hero-calligraphy-five-scripts.jpg",
    "assets/images/paintings/28_libai_hangyin.jpg",
    "assets/images/articles/hero-classical-books-scrolls.jpg",
    "assets/images/museum/lantingji-xu.jpg",
    "assets/images/articles/hero-academy-shuyuan.jpg",
    "assets/images/museum/yongle-dadian.jpg",
    "assets/images/articles/hero-chinese-cuisines.jpg",
    "assets/images/articles/hero-six-teas-gongfu.jpg",
    "assets/images/articles/hero-contemporary-china.jpg",
    "assets/images/articles/hero-beijing-shanghai.jpg",
    "assets/images/articles/hero-keju-examinations.jpg",
    "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "assets/images/articles/hero-silk-road.jpg",
    "assets/images/articles/hero-laozihao-craft.jpg",
    "assets/images/articles/hero-sino-vietnam.jpg",
    "assets/images/articles/hero-huaqiangbei-tech.jpg",
    "assets/images/editorial/infographic-co-forme-incoterms.svg",
    "assets/images/articles/hero-vietnam-ai-decree13.jpg",
    "assets/images/museum/tang-sancai-camel.jpg",
    "assets/images/provinces/guangdong-canton-tower.jpg",
    "assets/images/provinces/fujian-tulou.jpg",
    "assets/images/provinces/shanghai-bund-skyline.jpg",
    "assets/images/museum/zheng-he-chart.jpg",
    "assets/images/academic/sunzi-bamboo-slips.jpg"
  ];

  function spkBtn(zh) {
    if (!zh) return "";
    return '<button type="button" class="tts-speak-btn" data-v5c-speak="' + esc(zh) + '" title="Listen zh-CN"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>';
  }

  function renderLessonGrid(list, enM) {
    if (!Array.isArray(list) || !list.length) return "";
    return (
      '<div class="grid grid-2" style="gap:0.85rem;margin-top:0.85rem;">' +
      list.map(function (ls, idx) {
        var globalIdx = ((Number(ls.moduleNum) || 1) - 1) * 6 + ((Number(ls.lessonNum) || (idx + 1)) - 1);
        var imgSrc = LESSON_IMGS[Math.abs(globalIdx) % LESSON_IMGS.length];
        var isSvg = /\.svg(\?|$)/i.test(imgSrc);
        var lTitle = enM ? (ls.titleEn || ls.titleVi) : ls.titleVi;
        var terms = Array.isArray(ls.keyTermsTrilingual) ? ls.keyTermsTrilingual : [];
        var rLink = ls.readingLink;
        return (
          '<article class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.4rem;padding:0.95rem 1.05rem;">' +
          '  <div class="img-skeleton-bg" style="aspect-ratio:16/9;max-height:148px;width:100%;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);background:var(--bg-surface);cursor:pointer;" data-action="open-custom-image" data-src="' + esc(imgSrc) + '" data-caption="' + esc(lTitle) + '">' +
          '    <img src="' + esc(imgSrc) + '" alt="' + esc(lTitle) + '" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:' + (isSvg ? "contain" : "cover") + ';object-position:50% 35%;display:block;" onerror="this.onerror=null;this.src=\'assets/images/museum/taihe-dian.jpg\';" />' +
          '  </div>' +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">' +
          '    <span class="badge badge-red">Module ' + esc(ls.moduleNum) + ' · ' + (enM ? "Lesson " : "Bài ") + esc(ls.lessonNum) + '</span>' +
          spkBtn((ls.titleZh || "").split("·")[0].trim()) +
          '  </div>' +
          '  <h4 style="margin:0.1rem 0;font-size:1rem;">' + esc(lTitle) + '</h4>' +
          '  <div class="hanzi text-xs" style="color:var(--imperial-red);">' + esc(ls.titleZh || "") + '</div>' +
          '  <div style="font-size:0.81rem;padding:0.45rem 0.6rem;background:var(--bg-paper);border-left:3px solid var(--antique-gold);"><strong>' + (enM ? "Core Question:" : "Câu hỏi Dẫn mạch:") + '</strong> ' + esc(enM ? (ls.coreQuestionEn || ls.coreQuestionVi) : ls.coreQuestionVi) + '</div>' +
          '  <p style="font-size:0.82rem;margin:0;color:var(--text-secondary);line-height:1.5;">' + esc(enM ? (ls.synthesisParagraphEn || ls.synthesisParagraphVi) : ls.synthesisParagraphVi) + '</p>' +
          (ls.historicalEvidenceVi || terms.length ? (
            '  <details class="ed-details" style="font-size:0.79rem;">' +
            '    <summary style="cursor:pointer;font-weight:700;color:var(--jade-green);">' + (enM ? "Sources, Vietnam Parallel &amp; 3 Trilingual Terms →" : "Sử liệu, Đối chiếu Việt Nam &amp; 3 Thuật ngữ Tam ngữ →") + '</summary>' +
            '    <div style="margin-top:0.45rem;display:grid;gap:0.4rem;padding:0.55rem 0.65rem;background:var(--bg-paper);border:1px solid var(--hairline);">' +
            (ls.historicalEvidenceVi ? '<div><strong>' + (enM ? "Evidence &amp; Source:" : "Khảo chứng &amp; Tư liệu:") + '</strong> ' + esc(enM ? (ls.historicalEvidenceEn || ls.historicalEvidenceVi) : ls.historicalEvidenceVi) + '</div>' : "") +
            (ls.primaryTextExcerptZh ? '<div style="padding:0.35rem 0.5rem;background:var(--bg-surface);border-left:2px solid var(--imperial-red);"><strong>' + (enM ? "Primary Excerpt:" : "Nguyên điển Trích dẫn:") + '</strong> <span class="hanzi">' + esc(ls.primaryTextExcerptZh) + '</span> ' + spkBtn(ls.primaryTextExcerptZh) + '<div class="text-xs" style="color:var(--text-secondary);margin-top:0.15rem;">' + esc(enM ? (ls.primaryTextExcerptEn || ls.primaryTextExcerptVi) : ls.primaryTextExcerptVi) + '</div></div>' : "") +
            (ls.visualDiagramSpecVi ? '<div style="padding:0.3rem 0.5rem;background:var(--bg-accent-soft);border:1px dashed var(--antique-gold);"><strong>' + (enM ? "Visual Mental Model:" : "Sơ đồ Tư duy Trực giác:") + '</strong> ' + esc(enM ? (ls.visualDiagramSpecEn || ls.visualDiagramSpecVi) : ls.visualDiagramSpecVi) + '</div>' : "") +
            (ls.vietnamComparisonVi ? '<div style="color:var(--jade-green);"><strong>' + (enM ? "Vietnam Parallel:" : "Đối chiếu Việt Nam:") + '</strong> ' + esc(enM ? (ls.vietnamComparisonEn || ls.vietnamComparisonVi) : ls.vietnamComparisonVi) + '</div>' : "") +
            (terms.length ? '<div style="display:grid;gap:0.3rem;border-top:1px dashed var(--hairline);padding-top:0.35rem;">' + terms.map(function (t) {
              return '<div style="display:flex;justify-content:space-between;align-items:center;gap:0.35rem;flex-wrap:wrap;"><span><strong class="hanzi">' + esc(t.zh) + '</strong> <span class="pinyin">' + esc(t.pinyin) + '</span> · <em>' + esc(t.hanViet) + '</em>: ' + esc(enM ? t.en : t.vi) + '</span><span>' + spkBtn(t.zh) + ' <button type="button" class="btn btn-ghost btn-sm" style="padding:0.05rem 0.35rem;font-size:0.7rem;border:1px solid var(--hairline);" data-v5c-srs data-zh="' + esc(t.zh) + '" data-py="' + esc(t.pinyin) + '" data-hv="' + esc(t.hanViet) + '" data-vi="' + esc(t.vi) + '" data-en="' + esc(t.en) + '">+ SRS</button></span></div>';
            }).join("") + '</div>' : "") +
            '    </div>' +
            '  </details>'
          ) : "") +
          (ls.checkpointQuiz ? (
            '  <details style="font-size:0.78rem;padding:0.4rem 0.55rem;background:var(--bg-accent-soft);border:1px solid var(--hairline);">' +
            '    <summary style="cursor:pointer;font-weight:700;color:var(--imperial-red);">' + (enM ? "Checkpoint: " : "Kiểm tra nhanh: ") + esc(enM ? (ls.checkpointQuiz.qEn || ls.checkpointQuiz.qVi) : ls.checkpointQuiz.qVi) + '</summary>' +
            '    <div style="margin-top:0.3rem;color:var(--jade-green);"><strong>' + (enM ? "Answer:" : "Đáp án:") + '</strong> ' + esc(enM ? (ls.checkpointQuiz.ansEn || ls.checkpointQuiz.ansVi) : ls.checkpointQuiz.ansVi) + '</div>' +
            '  </details>'
          ) : "") +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;margin-top:auto;padding-top:0.35rem;border-top:1px dashed var(--hairline);font-size:0.76rem;color:var(--text-muted);">' +
          '    <span>' + esc(enM ? (ls.logicalLinkToNextEn || ls.logicalLinkToNextVi) : ls.logicalLinkToNextVi) + '</span>' +
          (rLink ? '<button type="button" class="btn btn-secondary btn-sm" style="padding:0.15rem 0.45rem;font-size:0.72rem;flex-shrink:0;" data-action="nav" data-page="' + esc(rLink.page) + '">' + esc(enM ? rLink.labelEn : rLink.labelVi) + '</button>' : "") +
          '  </div>' +
          '</article>'
        );
      }).join("") +
      '</div>'
    );
  }

  function renderCourseTracker(enM) {
    var done = loadDone();
    var completedCount = CURRICULUM.filter(function (m) { return Boolean(done[m.page]); }).length;
    var pct = Math.round((completedCount / CURRICULUM.length) * 100);
    var allLessons = (window.CCE_V5_COURSE_LESSONS && window.CCE_V5_COURSE_LESSONS.lessons36) || [];
    var modLessons = activeModNum === 0 ? allLessons : allLessons.filter(function (l) { return Number(l.moduleNum) === activeModNum; });

    return (
      '<section id="cce-v5-course-academy" class="card mb-2" style="margin-top:1.5rem;border-top:3px solid var(--imperial-red);padding:1.15rem 1.25rem;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "STRUCTURED LEARNING PATHWAY · 循序渐进七大课程模块 (" + allLessons.length + " LESSONS)" : "LỘ TRÌNH HỌC TẬP TUẦN TỰ NHƯ MỘT KHÓA HỌC · 7 HỌC PHẦN · " + allLessons.length + " BÀI HỌC") + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;font-size:1.25rem;">' + (enM ? "7-Module Progressive Curriculum &amp; " + allLessons.length + " Guided Sequential Lessons" : "Khóa Học 7 Học Phần &amp; " + allLessons.length + " Bài Học Liên Kết Logic Từ Nhập Môn Đến Thực Chiến") + '</h3>' +
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
      (allLessons.length ? (
        '  <div id="cce-v5-42-lessons-explorer" style="margin-top:1.35rem;padding-top:1rem;border-top:2px solid var(--hairline);">' +
        '    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.55rem;">' +
        '      <strong style="font-family:var(--font-editorial);font-size:1.1rem;">' + (enM ? "Sequential Lesson Reader (" + allLessons.length + " Lessons · Filter by Module):" : "Bài Giảng Tuần Tự Từng Chặng (" + allLessons.length + " Bài Học · Chọn Học phần):") + '</strong>' +
        '      <div class="filter-bar" style="margin:0;">' +
        CURRICULUM.map(function (m, mIdx) {
          var mn = mIdx + 1;
          return '<button type="button" class="filter-pill ' + (activeModNum === mn ? "active" : "") + '" data-v5c-mod="' + mn + '" style="font-size:0.74rem;">HP ' + m.num + '</button>';
        }).join("") +
        '<button type="button" class="filter-pill ' + (activeModNum === 0 ? "active" : "") + '" data-v5c-mod="0" style="font-size:0.74rem;">' + (enM ? "All " + allLessons.length : "Tất cả " + allLessons.length) + '</button>' +
        '      </div>' +
        '    </div>' +
        renderLessonGrid(modLessons, enM) +
        '  </div>'
      ) : "") +
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
    var modNumber = Number(mod.num) || 1;
    var allLessons = (window.CCE_V5_COURSE_LESSONS && window.CCE_V5_COURSE_LESSONS.lessons36) || [];
    var modLessons = allLessons.filter(function (l) { return Number(l.moduleNum) === modNumber; });
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
      (modLessons.length ? '<details class="ed-details" style="margin-top:0.85rem;"><summary style="cursor:pointer;font-weight:700;color:var(--imperial-red);">' + (enM ? ("Open " + modLessons.length + " Guided Lessons for Module " + mod.num + " ▾") : ("Mở " + modLessons.length + " Bài học Chi tiết thuộc Học phần " + mod.num + " ▾")) + '</summary>' + renderLessonGrid(modLessons, enM) + '</details>' : "") +
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
      var sp = e.target && e.target.closest ? e.target.closest("[data-v5c-speak]") : null;
      if (sp) {
        if (window.CCE_SPEECH && window.CCE_SPEECH.speakChinese) {
          window.CCE_SPEECH.speakChinese(sp.getAttribute("data-v5c-speak"));
        }
        return;
      }
      var sr = e.target && e.target.closest ? e.target.closest("[data-v5c-srs]") : null;
      if (sr && window.CCE_SRS && window.CCE_SRS.addCard) {
        window.CCE_SRS.addCard({
          id: "v5c-" + sr.getAttribute("data-zh"),
          hanzi: sr.getAttribute("data-zh"),
          pinyin: sr.getAttribute("data-py"),
          hanViet: sr.getAttribute("data-hv"),
          meaningVi: sr.getAttribute("data-vi"),
          meaningEn: sr.getAttribute("data-en"),
          source: "V5 42-Lesson Course"
        });
        sr.textContent = "Saved!";
        return;
      }
      var modBtn = e.target && e.target.closest ? e.target.closest("[data-v5c-mod]") : null;
      if (modBtn) {
        activeModNum = parseInt(modBtn.getAttribute("data-v5c-mod"), 10);
        if (isNaN(activeModNum)) activeModNum = 1;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
        return;
      }
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
