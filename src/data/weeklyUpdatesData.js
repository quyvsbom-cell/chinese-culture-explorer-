// ============================================================================
// WEEKLY HOT-TOPIC PICKS, SITE CHANGELOG & 7-STEP GMAIL/EMAIL CHANGELOG STUDIO
// Strictly distinguishes [Hot Article] / [New 3D Monograph] / [Website Feature & Data Update]
// ============================================================================

window.CCE_WEEKLY_UPDATES = (function () {
  const hotPicks = [
    {
      id: "pick-forbidden-city-3d",
      badgeVi: "[Chuyên luận 3D Mới]",
      badgeEn: "[New 3D Monograph]",
      kind: "article",
      targetId: "forbidden-city-3d-dissection",
      date: "2026-11-18",
      titleVi: "Giải phẫu 3D Tử Cấm Thành (紫禁城): Đấu Củng, Trục Trung tâm & Đối Sánh Cố Đô Huế",
      titleEn: "3D Dissection of the Forbidden City (紫禁城): Dougong Joinery & Hue Citadel Dialogue",
      summaryVi: "Mô hình Three.js dựng hình Phi Diềm, 3 tầng bệ Tu Di Tọa, nội thất Thái Hòa Điện X-Ray với 3 chế độ bóc tách trực quan & đối sánh Đại Nội Huế.",
      summaryEn: "Interactive Three.js architectural dissection featuring upturned Feiyan eaves, 3-tier marble terraces, X-Ray Dougong framing, and Hue Imperial Citadel comparisons."
    },
    {
      id: "pick-sino-vn-trade",
      badgeVi: "[Bài Đọc Nóng · Kinh doanh B2B]",
      badgeEn: "[Hot Article · B2B Trade]",
      kind: "article",
      targetId: "sino-vietnamese-translation-business",
      date: "2026-11-16",
      titleVi: "Từ Hán–Việt Đồng hình Dị nghĩa & Pháp lý Ngoại thương: Bẫy Định Kim (定金) vs Đính Kim (订金)",
      titleEn: "Sino-Vietnamese False Friends & Trade Law: Statutory Deposit (定金) vs Prepayment (订金)",
      summaryVi: "Phân tích ranh giới pháp lý phạt cọc gấp đôi theo Bộ luật Dân sự và cách lưu thuật ngữ kèm câu trích nguồn vào Sổ tay Ngữ cảnh.",
      summaryEn: "Legal boundary analysis on double-deposit liability alongside live phrase capture directly into your Vocabulary & Reading Notebook."
    },
    {
      id: "pick-v50-platform",
      badgeVi: "[Nâng cấp Hệ thống & Dữ liệu · v5.0]",
      badgeEn: "[Website Feature & Data Update · v5.0]",
      kind: "changelog",
      targetId: "changelog",
      date: "2026-11-22",
      titleVi: "Phát hành v5.0: Khóa học 7 Học phần Tuần tự, 24 Trung Hoa Lão Tự Hiệu & Trọn bộ 6 Gói Dữ liệu Tri thức",
      titleEn: "Release v5.0: 7-Module Sequential Curriculum, 24 Chinese Honored Brands & Full 6-Pack Knowledge Ingestion",
      summaryVi: "Sắp xếp tri thức như một khóa học nối mạch logic, ra mắt chuyên mục Thương hiệu Lâu đời (中华老字号) và nạp trọn 1.093 mục song ngữ – tam ngữ.",
      summaryEn: "Structured progressive 7-module study flow, dedicated Chinese Honored Brands pavilion, 28 historical figure portraits & full 1,093-entry trilingual expansion."
    }
  ];

  const siteChangelog = [
    {
      version: "v5.0.0",
      date: "2026-11-22",
      type: "feature",
      tagVi: "[Phát hành Lớn · Khóa học 7 Học phần Tuần tự & Thương hiệu Lão Tự Hiệu]",
      tagEn: "[Major Release · 7-Module Sequential Curriculum & Honored Brands Pavilion]",
      titleVi: "Phiên bản v5.0: Sắp xếp Khóa học 7 Học phần Mạch lạc, Chuyên mục 24 Trung Hoa Lão Tự Hiệu (中华老字号) & Nạp trọn 6 Gói Dữ liệu Tri thức",
      titleEn: "Release v5.0: Sequential 7-Module Curriculum Architecture, 24 Chinese Honored Brands Pavilion & Full 6-Pack Encyclopedic Ingestion",
      itemsVi: [
        "Kiến trúc Khóa Học 7 Học phần Tuần tự (src/components/v5CourseAcademy.js): nối mạch Địa lý – Lịch sử – Tư tưởng – Âm Dương Ngũ Hành – 10 Studio 3D – HSK 4–9/Du học – Logistics Tam ngữ, kèm thanh 'Mạch Logic Khóa Học — Bước Tiếp Theo' ở cuối mọi chuyên trang.",
        "Chuyên mục Riêng 24 Thương hiệu Trung Hoa Lão Tự Hiệu (src/components/laozihaoPavilionV5.js): Đồng Nhân Đường (1669), Trần Lý Tế (1600), Toàn Tụ Đức, Mao Đài, Ngô Dụ Thái, Vinh Bảo Trai...",
        "Nạp toàn bộ 6 gói dữ liệu bách khoa (1.093 mục): 59 Di sản UNESCO, 24 Thơ Đường–Tống, 100 Thành ngữ Chengyu, 9 Thể chất Đông y, 12 Đại học Du học CSC/UIBE/BUCM + 45 câu phỏng vấn, 100 Thuật ngữ Logistics Tam ngữ, 10 Bài đọc Song hành & 90 Câu Quiz độc lập.",
        "Tinh chỉnh UI/UX từ phản hồi thực tế: chuẩn hóa bản đồ 2D 34 tỉnh không chồng nhãn, lưới ngang 10 Biển hiệu Sinh tồn, ảnh chân dung toàn bộ 28 Danh nhân Lịch đại (và 115 Danh nhân Cố hương), cùng sắp xếp Chuyên luận mới nhất lên đầu."
      ],
      itemsEn: [
        "7-Module Progressive Curriculum (src/components/v5CourseAcademy.js) with persisted module completion and cross-page 'Next Connected Lesson' logic bridges.",
        "Dedicated Chinese Time-Honored Brands Pavilion (中华老字号, src/components/laozihaoPavilionV5.js) showcasing 24 imperial-era pharmacies, culinary houses, tea/spirit estates, and studio crafters.",
        "Full integration of all 6 bilingual/trilingual encyclopedic datasets (1,093 items): 59 UNESCO sites, 24 poems, 100 Chengyu, 9 TCM constitutions, 12 CSC universities + 45 expressions, 100 EU–China logistics terms, 10 parallel trilingual articles & 90 unique Quiz Arena MCQs.",
        "User-driven UI polish: overlap-free 2D vector map with unified East China coloring, horizontal 10-sign survival Hanzi grid, historical portraits for all 28 era figures & 115 provincial luminaries, and newest-first article ordering."
      ]
    },
    {
      version: "v4.0.0",
      date: "2026-11-22",
      type: "feature",
      tagVi: "[Phát hành Lớn · Hệ sinh thái 10 Studio 3D & Học thuật Liên ngành]",
      tagEn: "[Major Release · 10 Interactive 3D Studios & Interdisciplinary Hub]",
      titleVi: "Phiên bản v4.0: 10 Studio 3D WebGL, Giao diện Biên tập Toàn cầu, Kho HSK 4–9 / Đông y–Ngũ Hành / Du học & Logistics Trung–Âu–Việt",
      titleEn: "Release v4.0: 10 WebGL 3D Studios, Global Editorial UX, HSK 4–9 / Yin–Yang–Wuxing / CSC Study & EU–China–Vietnam Logistics Studio",
      itemsVi: [
        "10 Mô hình Tương tác 3D WebGL đồng bộ 1 WebGL context duy nhất (CCE_WEBGL_MGR): Bản đồ Địa hình 3D 34 tỉnh + 12 tuyến HSR, Tử Cấm Thành, Thiên Đàn, 4 Bảo vật Quốc gia, Kết cấu Đấu Củng 4 tầng, Nhà Thổ Lâu/Tứ Hợp Viện/Huy Phái, Con đường Tơ lụa ↔ Trung–Âu 2026, Thủy lợi Đô Giang Yển, Hồn Thiên Nghi & Ngũ Hành, Biên Chung Nhạc Chuông – Thuyền Trịnh Hòa – Tượng Tần.",
        "Giao diện Biên tập Toàn cầu (styles/v4-editorial.css): Thẻ định hướng theo 4 Mục tiêu, Kệ Đọc Gần Đây, Command Palette (Ctrl+K), Chế độ đọc Paper/Sepia/Night, Song ngữ Đối chiếu VI|EN, Bộ sưu tập & Sổ tay Tra nhanh.",
        "Trung tâm Tri thức Chuyên sâu (/explore): Tứ đại Danh tác & 60 Điển cố HSK 4–9, Chuyên luận Ngữ pháp Gốc Âm Dương – Ngũ Hành kết nối Đông y / Phong thủy / Bát Tự / Tử Vi (đặt ranh giới phi lâm sàng), Hồ sơ Du học CSC/UIBE/SUFE/BLCU/BUCM, Chính trị – Kinh tế 2026 & 8 Thái hệ Ẩm thực + Góc nhìn Việt Nam.",
        "Studio Thương mại Tam ngữ Âu–Trung–Việt & Con đường Tơ lụa (/kinh-doanh): 100 thuật ngữ Incoterms/CBAM/ICS2/EUDR, bài tập chống quên Tiếng Anh (Hide EN Recall), 8 cặp email Nhà máy TQ ↔ Trụ sở EU và 12 tình huống phỏng vấn Logistics Châu Âu.",
        "Mở rộng Hầm Luyện Thi lên 180+ câu trắc nghiệm song ngữ và Cẩm nang Hành trang 34 tỉnh (Lịch 12 tháng, 8 Lịch trình, Thẻ Đưa Tài xế)."
      ],
      itemsEn: [
        "Launched 10 Three.js Interactive 3D Studios under strict single-context coordination (CCE_WEBGL_MGR): 34-Province 3D Relief Map, Forbidden City, Temple of Heaven, 4 National Relics, 4-Tier Dougong Joinery, Tulou/Siheyuan/Huizhou Cutaways, Historic Silk Road <-> 2026 CR Express Corridor, Dujiangyan Damless Hydraulics, Celestial Armillary & Wuxing Disk, Bronze Chime Bells & Treasure Ship.",
        "Global Editorial UX (styles/v4-editorial.css): 4 Goal Intent Cards, Recently Viewed Shelf, Ctrl+K Command Palette, Paper/Sepia/Night typography themes, Side-by-Side VI|EN Split-View, My Collection drawer, and QuickRef Pocket.",
        "Interdisciplinary Knowledge Hub (/explore): Four Literary Canons + 60 HSK 4–9 idioms, Non-Clinical Yin–Yang–Five Phases Monograph synthesizing TCM/Fengshui/Bazi/Ziwei, CSC/UIBE/SUFE/BLCU/BUCM Study Abroad Dossiers, 2026 Politics & Macro, and Eight Cuisines.",
        "EU–China–Vietnam Trilingual Trade & Silk Road Studio (/kinh-doanh): 100 Incoterms/CBAM/ICS2/EUDR terms, Hide-EN anti-attrition drills, 8 Factory ZH <-> EU HQ EN email pairs, 12 European Logistics interview scenarios, and Silk Road Historic-to-Modern Continuum.",
        "Expanded Quiz Arena pool to 180+ bilingual MCQs alongside 34-Province Travel Hub (12-Month Calendar, 8 Itineraries, Bilingual Show-to-Driver Cards)."
      ]
    },
    {
      version: "v2.6.0",
      date: "2026-11-18",
      type: "feature",
      tagVi: "[Nâng cấp Hệ thống & Dữ liệu]",
      tagEn: "[Website Feature & Data Update]",
      titleVi: "Mô hình 3D Tử Cấm Thành Đa chi tiết, Mở khóa Đọc tự do & Toàn bộ 65 Chuyên luận Song ngữ VI/EN",
      titleEn: "High-Detail 3D Forbidden City Dissection, 100% Open-Access Monographs & Full 65-Essay VI/EN Parity",
      itemsVi: [
        "Giải phẫu 3D Tử Cấm Thành (src/components/forbiddenCity3D.js) với 4 hệ mái Phi Diềm cong, 10 Linh thú góc mái, 3 tầng Tu Di Tọa, 250 tấn Đan Bệ, Nội Kim Thủy Hà & Ngũ Long Kiều, Cửu Long Bích và nội thất Đấu củng X-Ray đối sánh Cố đô Huế.",
        "Gỡ bỏ cổng chặn đăng nhập khi đọc bài viết: toàn văn 65 chuyên luận, sử liệu gốc 4 lớp và trích dẫn APA/BibTeX đều mở tự do cho độc giả & Google Search.",
        "Bổ sung Sổ tay Từ vựng & Ghi chú Chuyên luận (Text-Selection Popover + xuất CSV/TSV) thay thế màn hình học thẻ độc lập.",
        "Hỗ trợ đầy đủ Tiếng Việt và Tiếng Anh cho toàn bộ 65 chuyên luận lẫn khối Đọc tiếp Chuyên luận Liên quan.",
        "Tích hợp Cẩm nang Ngọa Du -> Hành trang Thực địa 34 tỉnh (Alipay, Ga Cao tốc, 10 biển báo Hán tự) & Thơ Tứ tuyệt 3 ngữ của Nhà sáng lập."
      ],
      itemsEn: [
        "Launched high-detail Three.js Forbidden City architectural treatise with upturned Feiyan eaves, ridge beasts, 3-tier marble terraces, dragon ramp, Inner Golden Water River, Nine-Dragon Screen, X-Ray Dougong/Throne interior, and Hue Citadel comparisons.",
        "Removed full-article Google sign-in gates: all 65 monographs, primary-source layers, and APA/BibTeX citations are 100% open read.",
        "Replaced standalone flashcard UI with the Contextual Vocabulary & Reading Notebook (text selection capture + CSV/TSV export).",
        "Delivered full Vietnamese & English parity across all 65 essays and all Related Articles cards.",
        "Added 34-province Pre-Trip Travel Readiness dossiers, First-Time Survival Hanzi guide, Weekly Updates Bell, and Founder Trilingual Quatrain."
      ]
    },
    {
      version: "v2.5.4",
      date: "2026-11-16",
      type: "content",
      tagVi: "[Bài viết & Nghệ thuật]",
      tagEn: "[Monograph & Gallery Update]",
      titleVi: "Hoàn thiện 54 Kiệt tác Quốc họa, Hotspots tương phản AAA & Bộ lọc Tìm kiếm Ctrl+K",
      titleEn: "54 Master Paintings Registry, WCAG AAA Hotspot Inspector & Global Ctrl+K Search Hardening",
      itemsVi: [
        "Đồng bộ bộ đếm động 54 bức Quốc họa & hiệu chuẩn tọa độ Hotspot trên trường quyển.",
        "Khắc phục triệt để độ tương phản Hotspot #1, độ đục nền Mega-Menu và đồng bộ đường dẫn sạch /phap-ly."
      ],
      itemsEn: [
        "Synchronized dynamic 54-painting counts and curated scroll hotspot coordinates.",
        "Fixed Hotspot #1 contrast inside dark museum frames, opaque Mega-Menu layering, and clean URL routing."
      ]
    }
  ];

  return {
    hotPicks,
    siteChangelog
  };
})();
