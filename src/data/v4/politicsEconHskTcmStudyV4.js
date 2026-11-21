// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — Politics, Macro 2026, Yin-Yang-Wuxing
// Unifying Monographs (TCM / Fengshui / Bazi / Ziwei) & Du Hoc Trung Quoc
// Strictly Comparative Intellectual History (Non-Clinical & Non-Predictive)
// ============================================================================

(function () {
  "use strict";

  var POLITICS_ECON = [
    {
      id: "pol-npc-cppcc",
      zh: "全国人大与全国政协 (两会)",
      titleVi: "1. Hệ thống Lưỡng Hội (Nhân Đại & Chính Hiệp) và Quốc Vụ Viện",
      titleEn: "1. Two Sessions (NPC & CPPCC) and State Council Governance",
      summaryVi: "Đại hội Đại biểu Nhân dân Toàn quốc (NPC) là cơ quan quyền lực nhà nước và lập pháp tối cao; Chính Hiệp (CPPCC) giữ vai trò tham vấn chính sách liên giới. Quốc Vụ Viện (State Council) điều hành 26 bộ/ủy ban thực thi ngân sách và cải cách hành chính.",
      summaryEn: "The National People's Congress (NPC) holds supreme statutory legislation while the CPPCC provides multi-sector consultation; the State Council directs ministries implementing macroeconomic and industrial policy."
    },
    {
      id: "pol-fiscal-matrix",
      zh: "中央与地方财税分权制",
      titleVi: "2. Phân cấp Ngân sách Trung ương – Địa phương & Động lực Tỉnh",
      titleEn: "2. Central–Provincial Fiscal Matrix & Regional Industrial Policy",
      summaryVi: "Cải cách Phân thuế chế (1994) phân bổ nguồn thu VAT về Trung ương đồng thời giao trách nhiệm đầu tư hạ tầng và chuyển giao công nghệ cho chính quyền tỉnh/thành — lý giải sự cạnh tranh quyết liệt thu hút chuỗi cung ứng giữa Quảng Đông, Chiết Giang, Giang Tô và Tứ Xuyên.",
      summaryEn: "China's post-1994 tax-sharing framework centralizes VAT receipts while delegating local infrastructure and industrial cluster execution, driving fierce inter-provincial competition from Guangdong to Sichuan."
    },
    {
      id: "econ-fyp-15",
      zh: "“十五五”规划与新质生产力",
      titleVi: "3. Quy hoạch 5 Năm Lần thứ 15 (2026–2030) & 'Sức sản xuất Chất lượng Mới'",
      titleEn: "3. 15th Five-Year Plan Horizon (2026–2030) & New Quality Productive Forces",
      summaryVi: "Trọng tâm vĩ mô giai đoạn 2026–2030 dịch chuyển từ tăng trưởng bất động sản sang tự chủ bán dẫn, AI công nghiệp (DeepSeek/Qwen), pin lưu trữ EV/Năng lượng xanh ('Tân Tam Dạng': Xe điện, Pin Lithium, Pin Mặt trời) và nâng cấp tuyến Trung–Âu (CR Express).",
      summaryEn: "Macro priorities shift toward semiconductor localization, industrial AI, the 'New Three' clean-tech exports (EVs, lithium batteries, solar PV), domestic consumption balancing, and Belt & Road rail corridors."
    },
    {
      id: "econ-trade-triangle",
      zh: "“双循环”与欧盟碳关税 (CBAM)",
      titleVi: "4. Kinh tế Song Tuần hoàn & Tác động Chuẩn Xanh EU (CBAM / EUDR) 2026",
      titleEn: "4. Dual Circulation & EU Green Border Standards (CBAM / EUDR)",
      summaryVi: "Trong khi Bắc Kinh đẩy mạnh nội tiêu và nội địa hóa chuỗi giá trị, các doanh nghiệp xuất khẩu từ Trung Quốc và Việt Nam sang EU đối mặt hàng rào Cơ chế Điều chỉnh Biên giới Carbon (CBAM) và Truy xuất Nguồn gốc (EUDR) — tạo nhu cầu lớn nhân sự XNK hiểu cả chuỗi Hoa Nam lẫn luật EU.",
      summaryEn: "Dual Circulation elevates domestic innovation while exporters shipping from China and Vietnam into Europe must master EU CBAM carbon reporting and EUDR supply-chain traceability."
    }
  ];

  // 4 Unifying Yin-Yang & Five Phases Monographs + 5x4 Cross-Domain Matrix
  var YIN_YANG_WUXING = {
    epistemicBannerVi: "Khung Thẩm định Khoa học: Âm Dương (阴阳) và Ngũ Hành (五行) được trình bày như hệ thống ngữ pháp vũ trụ luận liên ngành kết nối lịch sử tư tưởng Đông y, Phong thủy kiến trúc, Bát Tự và Tử Vi Đẩu Số — KHÔNG phải y học lâm sàng hay tiên tri xác suất.",
    epistemicBannerEn: "Methodological Boundary: Yin–Yang and Five Phases are synthesized here as the shared East Asian intellectual-history grammar underlying TCM, Fengshui, Bazi, and Ziwei Doushu—strictly cultural analysis, neither clinical medicine nor predictive science.",
    monographs: [
      {
        id: "yywx-01-grammar",
        zh: "阴阳消长 · 五行生克图谱",
        titleVi: "Chuyên luận 1: Ngữ pháp Gốc Âm Dương – Ngũ Hành (Tương Sinh, Tương Khắc & Tương Thừa Vũ)",
        titleEn: "Monograph 1: Core Grammar of Yin–Yang Alternation & Five-Phase Dynamics",
        bodyVi: "Khởi nguồn từ Chu Dịch Hệ Từ và Thuyết Âm Dương Gia thời Chiến Quốc (Trâu Diễn), Âm Dương mô hình hóa cặp cực biến thiên tuần hoàn (Đối lập – Hỗ căn – Tiêu trưởng – Chuyển hóa), còn Ngũ Hành (Mộc–Hỏa–Thổ–Kim–Thủy) mã hóa năm pha vận động sinh thái: Sinh (nuôi dưỡng vòng ngoài) và Khắc (kiểm soát cân bằng vòng trong để tránh thái quá)."
      },
      {
        id: "yywx-02-tcm",
        zh: "中医辨证：五脏五行模型",
        titleVi: "Chuyên luận 2: Quy chiếu vào Đông y (Tạng Phủ, Kinh Lạc & Tiết khí Dưỡng sinh)",
        titleEn: "Monograph 2: Mapping Five Phases into Traditional Chinese Medicine",
        bodyVi: "Hoàng Đế Nội Kinh ghép cặp 5 Tạng (Can–Tâm–Tỳ–Phế–Thận) với 5 hành Mộc–Hỏa–Thổ–Kim–Thủy, 5 vị (Chua–Đắng–Ngọt–Cay–Mặn) và 4 mùa để giải thích cơ chế tương hỗ: VD 'Bồi Thổ sinh Kim' (dưỡng hệ tiêu hóa Tỳ-Vị để củng cố hô hấp Phế khí). Giá trị cốt lõi là tư duy hệ thống phòng ngừa theo mùa."
      },
      {
        id: "yywx-03-fengshui",
        zh: "风水理气与峦头方位",
        titleVi: "Chuyên luận 3: Quy chiếu vào Phong thủy Kiến trúc (Phương vị, Khí hậu & Thủy tụ)",
        titleEn: "Monograph 3: Five Phases & Bagua Spatial Geometry in Classical Fengshui",
        bodyVi: "Phái Loan Đầu quan sát thế núi chắn gió bắc ('Tựa Sơn') và dòng nước tụ ẩm phía trước ('Diện Thủy'); phái Lý Khí gắn Bát quái Ngũ hành vào 8 phương vị (Chấn Mộc Đông đón gió xuân mát, Ly Hỏa Nam đón nắng, Khảm Thủy Bắc giữ ẩm) — thực chất là tri thức vi khí hậu và quy hoạch cảnh quan cổ đại."
      },
      {
        id: "yywx-04-bazi-ziwei",
        zh: "八字干支与紫微星宿分类",
        titleVi: "Chuyên luận 4: Quy chiếu vào Bát Tự Tứ Trụ & Tử Vi Đẩu Số (Mã hóa Thời gian & Nhân sinh quan)",
        titleEn: "Monograph 4: Temporal Encoding in Bazi Four Pillars & Ziwei Constellations",
        bodyVi: "Bát Tự chuyển đổi Năm–Tháng–Ngày–Giờ sinh thành 4 trụ Thiên Can (Giáp–Ất Mộc, Bính–Đinh Hỏa...) & Địa Chi để đọc sự thiên lệch Ngũ hành biểu tượng; Tử Vi Đẩu Số an các sao Ngũ hành vào 12 Cung nhân sự (Mệnh, Tài Bạch, Quan Lộc, Thiên Di...). Cả hai phản ánh mỹ học phân loại tính cách và thời vận của Nho–Đạo truyền thống."
      }
    ],
    matrix5x4: [
      { phase: "Mộc (Wood · 木)", seasonDir: "Xuân · Đông (Spring · East)", tcm: "Can – Đởm (Mắt, Gân, Khí uất)", fengshui: "Chấn / Tốn · Thanh Long bên trái (Sinh khí hướng Đông)", bazi: "Giáp / Ất · Dần / Mão (Nhân ái, tăng trưởng thẳng)", ziwei: "Cung Mệnh / Thiên Cơ · Mộc Cục Tam (Khởi phát)" },
      { phase: "Hỏa (Fire · 火)", seasonDir: "Hạ · Nam (Summer · South)", tcm: "Tâm – Tiểu Trường (Lưỡi, Huyết mạch, Thần minh)", fengshui: "Ly Quái · Chu Tước tiền án (Ánh sáng & thông gió Nam)", bazi: "Bính / Đinh · Tỵ / Ngọ (Lễ nghĩa, nhiệt huyết tỏa sáng)", ziwei: "Thái Dương / Liêm Trinh · Hỏa Lục Cục (Lan tỏa)" },
      { phase: "Thổ (Earth · 土)", seasonDir: "Tứ Quý · Trung Tâm (Late Summer · Center)", tcm: "Tỳ – Vị (Miệng, Cơ nhục, Vận hóa thủy cốc)", fengshui: "Khôn / Cấn · Minh Đường trung tâm (Ổn định địa chất)", bazi: "Mậu / Kỷ · Thìn / Tuất / Sửu / Mùi (Chữ Tín, bao dung)", ziwei: "Tử Vi / Thiên Phủ · Thổ Ngũ Cục (Trung tâm điều phối)" },
      { phase: "Kim (Metal · 金)", seasonDir: "Thu · Tây (Autumn · West)", tcm: "Phế – Đại Trường (Mũi, Da lông, Túc giáng)", fengshui: "Đoài / Càn · Bạch Hổ bên phải (Kết cấu đá – kỷ luật)", bazi: "Canh / Tân · Thân / Dậu (Nghĩa khí, quyết đoán thu liễm)", ziwei: "Vũ Khúc / Thất Sát · Kim Tứ Cục (Kỷ cương)" },
      { phase: "Thủy (Water · 水)", seasonDir: "Đông · Bắc (Winter · North)", tcm: "Thận – Bàng Quang (Tai, Xương tủy, Tàng tinh)", fengshui: "Khảm Quái · Huyền Vũ hậu chẩm / Tụ thủy điều hòa", bazi: "Nhâm / Quý · Hợi / Tý (Trí tuệ linh hoạt, thích ứng)", ziwei: "Thiên Đồng / Tham Lang · Thủy Nhị Cục (Mềm dẻo)" }
    ]
  };

  // Study Abroad in China Dossier (CSC / C9 / UIBE / SUFE / BLCU / BUCM)
  var DU_HOC = {
    scholarships: [
      { id: "sch-csc-a", name: "Học bổng Chính phủ Trung Quốc CSC Type A (Hiệp định Chính phủ)", targetVi: "Nộp qua Cục Hợp tác Quốc tế (Bộ GD&ĐT Việt Nam) — miễn học phí, KTX & trợ cấp hàng tháng.", targetEn: "Bilateral government track covering full tuition, dormitory housing, insurance, and monthly stipend." },
      { id: "sch-csc-b", name: "CSC Type B (Nộp trực tiếp Trường Trọng điểm Trung Quốc)", targetVi: "Nộp trực tiếp trên cổng CampusChina + cổng tuyển sinh từng trường (ưu tiên sinh viên có HSK 5–6 hoặc IELTS 6.5+ cho chương trình Tiếng Anh).", targetEn: "Direct university track via CampusChina supporting English-taught or HSK 5–6 bilingual degrees." },
      { id: "sch-cis", name: "Học bổng Giáo viên Tiếng Trung Quốc tế (CIS / Khổng Tử)", targetVi: "Chuyên biệt cho ngành Ngôn ngữ Trung, Giáo dục Hán ngữ Quốc tế & Văn hóa Trung Hoa tại BLCU, Fudan, ECNU.", targetEn: "Dedicated track for Chinese Language, TCFL pedagogy, and Sinology studies." }
    ],
    universities: [
      { id: "uni-uibe", tier: "Double First-Class · Trade & Logistics", zh: "对外经济贸易大学 (UIBE · Bắc Kinh)", vi: "Đại học Kinh tế Đối ngoại Bắc Kinh (UIBE)", en: "Univ. of International Business & Economics", strengthVi: "Số 1 về Kinh doanh Quốc tế, Hải quan, Luật WTO và Thương mại Song ngữ Anh–Trung (đặt tại Bắc Kinh).", strengthEn: "Premier hub for international trade, customs compliance, and bilingual EN/ZH commerce." },
      { id: "uni-sufe", tier: "Double First-Class · Finance & Supply Chain", zh: "上海财经大学 (SUFE · Thượng Hải)", vi: "Đại học Tài chính Kinh tế Thượng Hải (SUFE)", en: "Shanghai Univ. of Finance & Economics", strengthVi: "Trọng điểm về Logistics Cảng biển, Chuỗi cung ứng, Tài chính Quốc tế gắn trực tiếp với cụm cảng Thượng Hải – Ninh Ba.", strengthEn: "Top research university in maritime logistics, finance, and global supply chains in Shanghai." },
      { id: "uni-blcu", tier: "National Key Language Hub", zh: "北京语言大学 (BLCU · Bắc Kinh)", vi: "Đại học Ngôn ngữ Bắc Kinh (BLCU)", en: "Beijing Language & Culture University", strengthVi: "Cái nôi biên soạn giáo trình HSK, đào tạo Biên phiên dịch Hán–Anh–Việt và Hán học.", strengthEn: "Flagship HSK pedagogy institution specializing in multilingual translation and Chinese studies." },
      { id: "uni-bucm", tier: "Double First-Class · TCM", zh: "北京中医药大学 (BUCM · Bắc Kinh)", vi: "Đại học Trung Y Dược Bắc Kinh (BUCM)", en: "Beijing Univ. of Chinese Medicine", strengthVi: "Trường đầu tàu nghiên cứu Kinh điển Nội Kinh – Thương Hàn, Châm cứu và Dược học hiện đại.", strengthEn: "Leading Double First-Class university for Traditional Chinese Medicine classics and pharmacology." },
      { id: "uni-c9", tier: "C9 League (Elite Research)", zh: "北大 · 清华 · 复旦 · 浙大 · 上交", vi: "Liên minh C9 (Bắc Đại, Thanh Hoa, Phục Đán, Chiết Giang, Giao Thông TH)", en: "C9 Elite Research League", strengthVi: "Mạng lưới đại học nghiên cứu hàng đầu về AI, Quản trị Toàn cầu, Kinh tế Vĩ mô và Chính sách công.", strengthEn: "China's elite research network leading in global governance, engineering, AI, and macroeconomics." }
    ],
    studyPlanTemplateEnZh: {
      titleVi: "Mẫu Cấu trúc Study Plan (学习计划) Gây Ấn tượng Hội đồng CSC",
      sections: [
        { headEn: "1. Academic & Career Motivation (Why China + Why This Major)", zh: "一、个人背景与来华研修动机（紧扣中越欧供应链与跨文化沟通桥梁定位）", tipVi: "Nêu rõ lợi thế song ngữ Anh – Trung ứng dụng vào logistics/thương mại Âu–Á hoặc nghiên cứu chuyên sâu thay vì viết chung chung 'yêu văn hóa'." },
        { headEn: "2. 4-Year / Research Milestones (Courses & Thesis Scope)", zh: "二、分阶段课程研习与毕业论文设想（明确核心参考书目与实证方法）", tipVi: "Đề cập tên giáo sư hướng dẫn (导师) tại trường và đề tài thực chứng cụ thể (VD: GACC/CBAM compliance hoặc HSK corpus)." },
        { headEn: "3. Post-Graduation Contribution", zh: "三、毕业后职业规划与区域合作愿景", tipVi: "Trình bày lộ trình làm việc tại doanh nghiệp châu Âu/quốc tế kết nối chuỗi cung ứng Trung – Việt – EU." }
      ]
    },
    interviewQa: [
      { qEn: "How will you balance preserving strong English while mastering Chinese?", qZh: "你如何在学习汉语的同时保持高水平英语职场能力？", aTipVi: "Trả lời: Dùng Tiếng Anh đọc tài liệu nghiên cứu/báo cáo chuẩn Âu–Mỹ và dùng Tiếng Trung giao tiếp thực địa với đối tác/giáo sư, sử dụng công cụ đối chiếu tam ngữ EN–ZH–VI hàng ngày." },
      { qEn: "Why did you apply to our university specifically rather than other provinces?", qZh: "你为什么特别选择我校所在城市及本学院？", aTipVi: "Trả lời: Gắn vị trí địa lý cụm công nghiệp/cảng biển (như Thượng Hải/Quảng Châu/Bắc Kinh) trực tiếp với định hướng Logistics/Xuất nhập khẩu hoặc Đông y của bạn." }
    ]
  };

  window.CCE_V4_DISCIPLINES = {
    politicsEcon2026: POLITICS_ECON,
    yinYangWuxing: YIN_YANG_WUXING,
    studyAbroad: DU_HOC
  };
})();
