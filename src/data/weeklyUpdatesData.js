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
      summaryEn: "Interactive Three.js architectural dissection featuring curved Phi Diềm roofs, 3-tier marble terraces, X-Ray Dougong framing, and Hue Imperial Citadel comparisons."
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
      titleVi: "Phát hành v2.6: Mở khóa 100% Đọc tự do, Sổ tay Ngữ cảnh, Song ngữ EN Toàn bộ 64 Bài & Hành trang Thực địa",
      titleEn: "Release v2.6: 100% Open-Read Monographs, Contextual Vocab Notebook, Full 64-Essay EN Edition & Travel Readiness",
      summaryVi: "Gỡ bỏ hoàn toàn cổng chặn đọc bài viết, thay Anki tĩnh bằng Sổ tay Ghi chú khi bôi đen văn bản, bổ sung Hành trang 34 tỉnh & thơ Tứ tuyệt Sáng lập.",
      summaryEn: "Removed full-text reader gates, replaced standalone Anki panes with live highlighted phrase capture, localized all 64 essays & Related Articles to English, and added 34-province travel dossiers."
    }
  ];

  const siteChangelog = [
    {
      version: "v2.6.0",
      date: "2026-11-18",
      type: "feature",
      tagVi: "[Nâng cấp Hệ thống & Dữ liệu]",
      tagEn: "[Website Feature & Data Update]",
      titleVi: "Mô hình 3D Tử Cấm Thành Đa chi tiết, Mở khóa Đọc tự do & Toàn bộ 64 Chuyên luận Song ngữ VI/EN",
      titleEn: "High-Detail 3D Forbidden City Dissection, 100% Open-Access Monographs & Full 64-Essay VI/EN Parity",
      itemsVi: [
        "Giải phẫu 3D Tử Cấm Thành (src/components/forbiddenCity3D.js) với 4 hệ mái Phi Diềm cong, 10 Linh thú góc mái, 3 tầng Tu Di Tọa, 250 tấn Đan Bệ, Nội Kim Thủy Hà & Ngũ Long Kiều, Cửu Long Bích và nội thất Đấu củng X-Ray đối sánh Cố đô Huế.",
        "Gỡ bỏ cổng chặn đăng nhập khi đọc bài viết: toàn văn 64+ chuyên luận, sử liệu gốc 4 lớp và trích dẫn APA/BibTeX đều mở tự do cho độc giả & Google Search.",
        "Bổ sung Sổ tay Từ vựng & Ghi chú Chuyên luận (Text-Selection Popover + xuất CSV/TSV) thay thế màn hình học thẻ độc lập.",
        "Hỗ trợ đầy đủ Tiếng Việt và Tiếng Anh cho toàn bộ 64 chuyên luận lẫn khối Đọc tiếp Chuyên luận Liên quan.",
        "Tích hợp Cẩm nang Ngọa Du -> Hành trang Thực địa 34 tỉnh (Alipay, Ga Cao tốc, 10 biển báo Hán tự) & Thơ Tứ tuyệt 3 ngữ của Nhà sáng lập."
      ],
      itemsEn: [
        "Launched high-detail Three.js Forbidden City architectural treatise with upturned Phi Diềm eaves, ridge beasts, 3-tier marble terraces, dragon ramp, Inner Golden Water River, Nine-Dragon Screen, X-Ray Dougong/Throne interior, and Hue Citadel comparisons.",
        "Removed full-article Google sign-in gates: all 64+ monographs, primary-source layers, and APA/BibTeX citations are 100% open read.",
        "Replaced standalone flashcard UI with the Contextual Vocabulary & Reading Notebook (text selection capture + CSV/TSV export).",
        "Delivered full Vietnamese & English parity across all 64 essays and all Related Articles cards.",
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

  const emailWorkflowSteps = [
    { step: "1", titleVi: "Phát hiện & Phân loại Thay đổi", titleEn: "Detect & Classify Changes", descVi: "Tách bạch [Bài Đọc Nóng], [Chuyên luận Mới] và [Nâng cấp Hệ thống]." },
    { step: "2", titleVi: "Tổng hợp Diff Tự động", titleEn: "Generate Changelog Diff", descVi: "Gom tên bài mới, mục sửa lỗi và thay đổi lộ trình vào bản ghi phiên bản." },
    { step: "3", titleVi: "Soạn Tiêu đề & Tóm tắt Song ngữ", titleEn: "Draft VI/EN Subject & Digest", descVi: "Chuẩn hóa giọng văn Biên tập Bảo tàng – không giật gân AI." },
    { step: "4", titleVi: "Kiểm tra Liên kết & Nguồn", titleEn: "Verify Links & Attribution", descVi: "Bảo đảm link trỏ đúng URL sạch và giữ nguyên chuẩn trích dẫn học thuật." },
    { step: "5", titleVi: "Xem trước Mẫu Email Responsive", titleEn: "Preview Responsive HTML Digest", descVi: "Kiểm tra trực quan khối HTML tương thích Gmail & Apple Mail." },
    { step: "6", titleVi: "Sao chép HTML vào Gmail / Gửi thử", titleEn: "Copy for Gmail or Dispatch", descVi: "Một chạm sao chép bản HTML chuẩn bảng để dán trực tiếp vào Gmail / Brevo / Buttondown." },
    { step: "7", titleVi: "Lưu Nhật ký Phát hành Công khai", titleEn: "Publish to Site Changelog Log", descVi: "Đồng bộ nhật ký công khai lên chuông Cập nhật để người đọc mới xem lại bất kỳ lúc nào." }
  ];

  function buildDigestSubject(lang = "vi") {
    const latest = siteChangelog[0];
    return lang === "en"
      ? `[Chinese Culture Explorer · ${latest.version}] 3D Forbidden City Dissection, 64 Bilingual Essays & Contextual Vocab Notebook`
      : `[Chinese Culture Explorer · ${latest.version}] Giải phẫu 3D Tử Cấm Thành, 64 Chuyên luận Song ngữ EN/VI & Sổ tay Ngữ cảnh`;
  }

  function buildDigestEmailHtml(lang = "vi", selectedScopes = ["hot", "articles", "updates"]) {
    const enMode = lang === "en";
    const latest = siteChangelog[0];
    const picked = hotPicks.filter((p) => {
      if (selectedScopes.includes("hot") && p.id.includes("trade")) return true;
      if (selectedScopes.includes("articles") && p.id.includes("3d")) return true;
      if (selectedScopes.includes("updates") && p.id.includes("platform")) return true;
      return selectedScopes.length === 0;
    });
    const listItems = (enMode ? latest.itemsEn : latest.itemsVi)
      .map((line) => `<li style="margin:0 0 8px 0;color:#2E2B27;line-height:1.6;">${line}</li>`)
      .join("");

    return `
<div style="font-family:Georgia,'Times New Roman',serif;background:#FAF7F2;color:#1A1918;padding:24px;border:1px solid #D8CFC0;max-width:640px;margin:0 auto;">
  <div style="border-bottom:2px solid #9E2A2B;padding-bottom:12px;margin-bottom:16px;">
    <div style="font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#9E2A2B;text-transform:uppercase;">
      CHINESE CULTURE EXPLORER · 中国文化探索 · ${latest.version}
    </div>
    <h2 style="margin:6px 0 4px 0;font-size:22px;line-height:1.3;color:#1A1918;">
      ${enMode ? latest.titleEn : latest.titleVi}
    </h2>
    <div style="font-family:Arial,sans-serif;font-size:12px;color:#757068;">
      ${enMode ? `Published ${latest.date} by Lê Hưng Thịnh (黎兴盛)` : `Phát hành ngày ${latest.date} · Biên soạn: Lê Hưng Thịnh (黎兴盛)`}
    </div>
  </div>

  <p style="font-size:15px;line-height:1.65;margin:0 0 14px 0;">
    ${enMode
      ? "Greetings from the editorial desk. Below is this week's curated digest of flagship essays, website feature upgrades, and field-readiness tools:"
      : "Thân gửi bạn đọc, dưới đây là bản tin tổng hợp tuần này gồm chuyên luận tiêu điểm, cập nhật tính năng nền tảng và công cụ tra cứu mới:"}
  </p>

  ${picked.map((p) => `
    <div style="background:#FFFFFF;border:1px solid #E4DCCD;border-left:3px solid #9E2A2B;padding:12px 14px;margin-bottom:10px;">
      <div style="font-family:Arial,sans-serif;font-size:11px;font-weight:700;color:#9E2A2B;margin-bottom:4px;">${enMode ? p.badgeEn : p.badgeVi}</div>
      <div style="font-size:16px;font-weight:700;color:#1A1918;margin-bottom:4px;">${enMode ? p.titleEn : p.titleVi}</div>
      <div style="font-family:Arial,sans-serif;font-size:13px;color:#4A4742;line-height:1.55;">${enMode ? p.summaryEn : p.summaryVi}</div>
    </div>
  `).join("")}

  <h3 style="font-size:15px;margin:18px 0 8px 0;color:#9E2A2B;font-family:Arial,sans-serif;text-transform:uppercase;letter-spacing:0.6px;">
    ${enMode ? "Website Changelog Highlights" : "Chi tiết Nâng cấp Nền tảng"}
  </h3>
  <ul style="padding-left:18px;margin:0 0 18px 0;font-family:Arial,sans-serif;font-size:13.5px;">
    ${listItems}
  </ul>

  <div style="border-top:1px solid #D8CFC0;padding-top:12px;font-family:Arial,sans-serif;font-size:11.5px;color:#757068;line-height:1.5;">
    ${enMode
      ? "You received this digest because you explicitly opted into reader updates on Chinese Culture Explorer. Manage frequency or unsubscribe in one click anytime in your account settings."
      : "Bạn nhận được bản tin này vì đã chủ động đăng ký nhận cập nhật từ Chinese Culture Explorer. Bạn có thể thay đổi tần suất hoặc hủy nhận bất cứ lúc nào trong 1 chạm."}
  </div>
</div>`.trim();
  }

  function buildDigestPlainText(lang = "vi") {
    const latest = siteChangelog[0];
    const lines = lang === "en" ? latest.itemsEn : latest.itemsVi;
    return [
      buildDigestSubject(lang),
      "",
      lang === "en" ? latest.titleEn : latest.titleVi,
      "----------------------------------------",
      ...lines.map((l, i) => `${i + 1}. ${l}`),
      "",
      "CHINESE CULTURE EXPLORER — Lê Hưng Thịnh (黎兴盛)"
    ].join("\n");
  }

  return {
    hotPicks,
    siteChangelog,
    emailWorkflowSteps,
    buildDigestEmailHtml,
    buildDigestSubject,
    buildDigestPlainText
  };
})();
