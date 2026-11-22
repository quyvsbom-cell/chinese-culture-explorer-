// ============================================================================
// WEEKLY HOT-TOPIC PICKS, SITE CHANGELOG & PLATFORM ANNOUNCEMENTS (PUBLIC 2.0)
// Strictly distinguishes [Hot Article] / [New 3D Monograph] / [Website Feature & Data Update]
// ============================================================================

window.CCE_WEEKLY_UPDATES = (function () {
  const hotPicks = [
    {
      id: "pick-v20-platform",
      badgeVi: "[Phiên bản 2.0 · Phát hành Chính thức]",
      badgeEn: "[Version 2.0 · Major Platform Release]",
      kind: "changelog",
      targetId: "changelog",
      date: "2026-11-22",
      titleVi: "Phiên bản 2.0: Học viện 10 Học phần Tuần tự, 24 Studio 3D WebGL & 120 Trung Hoa Lão Tự Hào",
      titleEn: "Version 2.0: 10-Module Progressive Academy, 24 Interactive 3D Studios & 120 Chinese Honored Brands",
      summaryVi: "Nâng cấp toàn diện giao diện và dữ liệu được ấp ủ từ trước 21/11: 60 bài giảng nối mạch logic, Đấu trường 600 câu hỏi (kèm 150 câu nhận diện hình ảnh), 16 Hành trình Di sản 240 giờ và kho văn hóa – thương mại tam ngữ.",
      summaryEn: "Major platform overhaul built prior to Nov 21 and launched as Edition 2.0: 60 progressive lessons, 24 WebGL 3D architectural & relic studios, 600 Quiz Arena questions with 150 visual IDs, and 16 240-hour heritage itineraries."
    },
    {
      id: "pick-forbidden-city-3d",
      badgeVi: "[Chuyên luận 3D Nổi bật]",
      badgeEn: "[Featured 3D Monograph]",
      kind: "article",
      targetId: "forbidden-city-3d-dissection",
      date: "2026-11-20",
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
      date: "2026-11-18",
      titleVi: "Từ Hán–Việt Đồng hình Dị nghĩa & Pháp lý Ngoại thương: Bẫy Định Kim (定金) vs Đính Kim (订金)",
      titleEn: "Sino-Vietnamese False Friends & Trade Law: Statutory Deposit (定金) vs Prepayment (订金)",
      summaryVi: "Phân tích ranh giới pháp lý phạt cọc gấp đôi theo Bộ luật Dân sự và cách lưu thuật ngữ kèm câu trích nguồn vào Sổ tay Ngữ cảnh.",
      summaryEn: "Legal boundary analysis on double-deposit liability alongside live phrase capture directly into your Vocabulary & Reading Notebook."
    }
  ];

  const siteChangelog = [
    {
      version: "v2.0.0",
      date: "2026-11-22",
      type: "feature",
      tagVi: "[Phiên bản 2.0 · Phát hành Lớn Toàn Nền Tảng]",
      tagEn: "[Version 2.0 · Full Platform Major Release]",
      titleVi: "Phiên bản 2.0: 10 Học phần Văn minh Tuần tự, 24 Studio 3D WebGL, 120 Lão Tự Hào & Hệ sinh thái Tri thức Tam ngữ",
      titleEn: "Version 2.0: 10-Module Progressive Curriculum, 24 WebGL 3D Studios, 120 Honored Brands & Trilingual Knowledge Ecosystem",
      itemsVi: [
        "Kiến trúc Học viện 10 Học phần – 60 Bài giảng Tuần tự: dẫn dắt mạch lạc từ Địa lý 34 tỉnh thành, Lịch đại 3.600 năm, Bách gia Chư tử, Thư họa Quốc bảo đến Kinh tế – Thương mại Âu–Trung–Việt đương đại.",
        "24 Studio Mô hình 3D WebGL Tương tác & Bảo tàng Số: Bản đồ Địa hình 34 tỉnh, Tử Cấm Thành, Thiên Đàn, Kết cấu Đấu Củng, Thủy lợi Đô Giang Yển, Hồn Thiên Nghi, Nhà Thổ Lâu – Tứ Hợp Viện – Huy Phái, Tuyến Vận tải Tơ lụa ↔ Trung–Âu & 14 Bảo vật Quốc gia.",
        "Chuyên mục 120 Thương hiệu Trung Hoa Lão Tự Hào (中华老字号) & 42 Chỉ dẫn Địa lý (GI): Đồng Nhân Đường (1669), Trần Lý Tế (1600), Toàn Tụ Đức, Mao Đài, Cảnh Đức Trấn, Trà Long Tỉnh Tây Hồ…",
        "Học liệu Tổng hợp Đa ngành: 59 Di sản UNESCO, 36 Cặp Thơ–Họa Đường Tống, 100 Thành ngữ Điển cố HSK 4–9, 60 Vị thuốc Đông y & 20 Ca Âm Dương–Ngũ Hành (kèm ranh giới phi lâm sàng), 36 Đại học Học bổng CSC + 45 mẫu câu phỏng vấn & Studio Ngoại thương Tam ngữ.",
        "16 Hành trình Di sản Miễn thị thực Quá cảnh 240 Giờ, Bản đồ Văn minh Trung–Việt (16 Kỳ quan đối sánh) & Đấu trường 600 Câu hỏi (bao gồm 150 Câu Nhận diện Hình ảnh Thực tế).",
        "Trải nghiệm Thị giác 2.0: Màn hình Chờ Triển lãm Cổ cung hiển thị tức thì ngay từ khung hình đầu tiên, tối ưu hóa toàn bộ khung ảnh chống cắt xén & loại bỏ hoàn toàn ảnh trùng lặp."
      ],
      itemsEn: [
        "10-Module, 60-Lesson Progressive Curriculum connecting Chinese geography, 3,600 years of history, classical philosophy, fine arts, traditional cosmology, and modern EU–China–Vietnam trade.",
        "24 Interactive WebGL 3D Studios covering 34-Province Relief Maps, the Forbidden City, Temple of Heaven, Dougong joinery, Dujiangyan hydraulics, Celestial Armillary Spheres, and Imperial Relics.",
        "Dedicated Pavilion of 120 Chinese Time-Honored Brands (中华老字号) and 42 Protected Geographical Indications spanning imperial apothecaries, tea estates, culinary houses, and craft ateliers.",
        "Expanded Multidisciplinary Vault: 59 UNESCO sites, 36 Poem-Painting pairs, 100 HSK 4–9 idioms, 60 TCM medicinal herbs & 20 non-clinical Wuxing cases, 36 CSC scholarship university dossiers, and EU–China–Vietnam Trilingual Trade Workbench.",
        "16 Visa-Free 240-Hour Heritage Expeditions, 16 Sino–Vietnamese Cultural Landmark comparisons, and a 600-question Quiz Arena featuring 150 visual identification rounds.",
        "Edition 2.0 Visual Refinements: Instant first-paint Palace Pavilion welcome curtain, unified non-destructive aspect framing across every card & zoom viewer, and 100% deduplicated archival imagery."
      ]
    },
    {
      version: "v1.0.0",
      date: "2026-11-18",
      type: "feature",
      tagVi: "[Phiên bản 1.0 · Khởi tạo Nền tảng Khảo cứu]",
      tagEn: "[Version 1.0 · Inaugural Platform Foundation]",
      titleVi: "Phiên bản 1.0: Ra mắt Cổng Tri thức Văn minh Trung Hoa & Đối sánh Việt–Trung (Bắt đầu phát triển trước 21/11)",
      titleEn: "Version 1.0: Launch of the Chinese Culture Explorer & Sino–Vietnamese Comparative Portal",
      itemsVi: [
        "Công bố 65 Chuyên luận khảo cứu song ngữ Việt–Anh chuyên sâu mở khóa tự do toàn văn cùng 4 lớp sử liệu gốc và trích dẫn chuẩn APA/BibTeX.",
        "Ra mắt Hồ sơ 34 Tỉnh/Thành phố trực thuộc, 54 Kiệt tác Quốc họa kèm kính lúp độ phân giải cao & Hotspot tương phản chuẩn AAA.",
        "Xây dựng Giải phẫu 3D Tử Cấm Thành, Cẩm nang Hành trang 34 tỉnh & Sổ tay Từ vựng – Trích dẫn Ngữ cảnh (Ctrl+K Command Palette & xuất CSV/TSV)."
      ],
      itemsEn: [
        "Published 65 open-access bilingual scholarly monographs complete with 4-layer primary source citations and APA/BibTeX export.",
        "Launched 34 provincial cultural profiles and a 54-masterwork Classical Paintings Registry with high-resolution magnification and WCAG AAA hotspots.",
        "Introduced the Interactive 3D Forbidden City architectural treatise, Pre-Trip Travel Readiness dossiers, Global Ctrl+K Command Palette, and Contextual Vocabulary Notebook."
      ]
    }
  ];

  return {
    hotPicks,
    siteChangelog
  };
})();
