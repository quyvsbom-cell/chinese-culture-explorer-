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
      id: "pick-v26-platform",
      badgeVi: "[Nâng cấp Hệ thống & Dữ liệu · v2.6]",
      badgeEn: "[Website Feature & Data Update · v2.6]",
      kind: "changelog",
      targetId: "changelog",
      date: "2026-11-18",
      titleVi: "Phát hành v2.6: Mở khóa 100% Đọc tự do, Sổ tay Ngữ cảnh, Song ngữ EN Toàn bộ 65 Bài & Hành trang Thực địa",
      titleEn: "Release v2.6: 100% Open-Read Monographs, Contextual Vocab Notebook, Full 65-Essay EN Edition & Travel Readiness",
      summaryVi: "Gỡ bỏ hoàn toàn cổng chặn đọc bài viết, thay Anki tĩnh bằng Sổ tay Ghi chú khi bôi đen văn bản, bổ sung Hành trang 34 tỉnh & thơ Tứ tuyệt Sáng lập.",
      summaryEn: "Removed full-text reader gates, replaced standalone Anki panes with live highlighted phrase capture, localized all 65 essays & Related Articles to English, and added 34-province travel dossiers."
    }
  ];

  const siteChangelog = [
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
