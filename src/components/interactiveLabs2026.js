// ============================================================================
// INTERACTIVE LABS & FIELD TOOLS 2026 (PROMPT 5 + SECTION 3 INNOVATIONS)
// 1. Dujiangyan 2D Hydro-Engineering Simulator (Flood vs Dry Seasons)
// 2. Ziwu Liuzhu 12-Meridian 24h Biological Clock
// 3. Border-to-Heritage 7-Day Trip Planner & 12306 HSR Route Synthesizer
// 4. Practical Quiz Arena (10 real-world signage, Liushu & B2B questions)
// 5. Hanzi Script Evolution Strip (Oracle -> Bronze -> Seal -> Regular)
// 6. Offline-First Study Passport (.JSON Export / Import)
// Zero external dependencies. Full VI/EN bilingual support & Light/Dark safe.
// ============================================================================

(function () {
  "use strict";

  const MERIDIAN_CLOCK_12 = [
    { id: "zi", branch: "Tý (子时)", branchEn: "Zi (子时)", hours: "23:00–01:00", organVi: "Đởm Kinh (Túi mật)", organEn: "Gallbladder Meridian", elem: "Mộc · Wood", hanzi: "胆经当令", adviceVi: "Giờ âm thịnh nhất — nên ngủ sâu trước 23:00 để Đởm khí khởi phát dương khí cho ngày mới.", adviceEn: "Peak Yin transition — sleep deeply before 11 PM so Gallbladder restores fresh morning Yang energy." },
    { id: "chou", branch: "Sửu (丑时)", branchEn: "Chou (丑时)", hours: "01:00–03:00", organVi: "Can Kinh (Gan)", organEn: "Liver Meridian", elem: "Mộc · Wood", hanzi: "肝经当令", adviceVi: "Máu dồn về gan giải độc và tái tạo; thức khuya giờ này dễ tổn hao Can huyết và thị lực.", adviceEn: "Blood filters back into the Liver for cellular renewal; staying awake drains Liver blood and vision." },
    { id: "yin", branch: "Dần (寅时)", branchEn: "Yin (寅时)", hours: "03:00–05:00", organVi: "Phế Kinh (Phổi)", organEn: "Lung Meridian", elem: "Kim · Metal", hanzi: "肺经当令", adviceVi: "Khởi đầu chu kỳ khí huyết toàn thân — giữ ấm đường hô hấp, tránh gió lạnh đầu sáng.", adviceEn: "Fresh meridian circulation starts anew — keep chest warm during deep pre-dawn sleep." },
    { id: "mao", branch: "Mão (卯时)", branchEn: "Mao (卯时)", hours: "05:00–07:00", organVi: "Đại Trường Kinh (Ruột già)", organEn: "Large Intestine", elem: "Kim · Metal", hanzi: "大肠经当令", adviceVi: "Thức dậy uống một ly nước ấm giúp nhu động đại tràng đào thải độc tố tự nhiên.", adviceEn: "Drink warm water after waking to support healthy bowel clearance and morning hydration." },
    { id: "chen", branch: "Thìn (辰时)", branchEn: "Chen (辰时)", hours: "07:00–09:00", organVi: "Vị Kinh (Dạ dày)", organEn: "Stomach Meridian", elem: "Thổ · Earth", hanzi: "胃经当令", adviceVi: "Giờ hấp thu dinh dưỡng tốt nhất trong ngày — ăn sáng ấm giàu đạm và tinh bột lành.", adviceEn: "Peak digestive fire — prioritize a warm, nourishing breakfast to fuel the entire day." },
    { id: "si", branch: "Tỵ (巳时)", branchEn: "Si (巳时)", hours: "09:00–11:00", organVi: "Tỳ Kinh (Lá lách)", organEn: "Spleen Meridian", elem: "Thổ · Earth", hanzi: "脾经当令", adviceVi: "Tỳ vận hóa thủy cốc nuôi dưỡng não bộ: khung giờ vàng làm việc trí óc & đàm phán tập trung.", adviceEn: "Peak cognitive focus as the Spleen transforms nutrients into clear mental energy for deep work." },
    { id: "wu", branch: "Ngọ (午时)", branchEn: "Wu (午时)", hours: "11:00–13:00", organVi: "Tâm Kinh (Tim)", organEn: "Heart Meridian", elem: "Hỏa · Fire", hanzi: "心经当令", adviceVi: "Giờ dương cực chuyển âm ('Tử Ngọ') — dùng bữa trưa thanh đạm và chợp mắt nghỉ 15–25 phút ('Ngọ thụy').", adviceEn: "Solar zenith shifting toward Yin — enjoy a balanced lunch followed by a brief 20-minute nap ('Wushui')." },
    { id: "wei", branch: "Mùi (未时)", branchEn: "Wei (未时)", hours: "13:00–15:00", organVi: "Tiểu Trường Kinh (Ruột non)", organEn: "Small Intestine", elem: "Hỏa · Fire", hanzi: "小肠经当令", adviceVi: "Phân tách tinh chất ('Phân thanh bí trọc'): nên hoàn tất bữa trưa trước 13:00 để dưỡng chất thẩm thấu sạch.", adviceEn: "Sorts pure nutrients from waste — finish lunch before 1 PM and stay gently hydrated." },
    { id: "shen", branch: "Thân (申时)", branchEn: "Shen (申时)", hours: "15:00–17:00", organVi: "Bàng Quang Kinh", organEn: "Bladder Meridian", elem: "Thủy · Water", hanzi: "膀胱经当令", adviceVi: "Đỉnh cao trí nhớ thứ hai trong ngày & vận động thể chất nhẹ; uống trà thảo mộc ấm thanh lọc cơ thể.", adviceEn: "Second daily peak for memory retention and brisk movement; sip warm herbal tea for detoxification." },
    { id: "you", branch: "Dậu (酉时)", branchEn: "You (酉时)", hours: "17:00–19:00", organVi: "Thận Kinh (Thận)", organEn: "Kidney Meridian", elem: "Thủy · Water", hanzi: "肾经当令", adviceVi: "Thận thu tàng tinh khí: dùng bữa tối nhẹ nhàng, tránh làm việc quá sức hay uống đồ lạnh.", adviceEn: "Kidney stores vital essence — wind down exertion, eat a moderate dinner, and avoid icy drinks." },
    { id: "xu", branch: "Tuất (戌时)", branchEn: "Xu (戌时)", hours: "19:00–21:00", organVi: "Tâm Bào Kinh", organEn: "Pericardium Meridian", elem: "Hỏa · Fire", hanzi: "心包经当令", adviceVi: "Giờ giao hòa cảm xúc êm dịu: tản bộ thư giãn, đọc sách/nghe cổ cầm bảo vệ tâm mạch.", adviceEn: "Unwind emotionally with an evening stroll, light reading, or gentle tea before sleep." },
    { id: "hai", branch: "Hợi (亥时)", branchEn: "Hai (亥时)", hours: "21:00–23:00", organVi: "Tam Tiêu Kinh", organEn: "Triple Burner", elem: "Hỏa · Fire", hanzi: "三焦经当令", adviceVi: "Tam Tiêu thông bách mạch: ngưng thiết bị điện tử trước 22:30 để bước vào giấc ngủ sâu giờ Tý.", adviceEn: "Triple Burner harmonizes all pathways — dim screens by 10:30 PM to enter restorative rest." }
  ];

  const QUIZ_ARENA_QUESTIONS = [
    {
      id: "qa-1",
      topicVi: "Tàu Cao Tốc 12306",
      topicEn: "12306 Rail",
      hanzi: "人工通道",
      questionVi: "Khi cầm hộ chiếu Việt Nam đứng trước cửa soát vé tự động ga cao tốc 12306, bạn phải tìm biển chữ Hán nào?",
      questionEn: "Holding a foreign passport at a 12306 HSR gate, which sign marks the staffed passport lane?",
      optionsVi: ["A. 候车室 (Hòuchēshì)", "B. 人工通道 (Réngōng tōngdào)", "C. 禁止携带 (Jìnzhǐ xiédài)", "D. 退票处 (Tuìpiàochù)"],
      optionsEn: ["A. 候车室 (Waiting Hall)", "B. 人工通道 (Staffed Passport Lane)", "C. 禁止携带 (Prohibited Items)", "D. 退票处 (Ticket Refund Counter)"],
      correctIndex: 1,
      explainVi: "Hộ chiếu giấy không có chip CCCD Trung Quốc nên luôn qua 人工通道 (Nhân công thông đạo — làn nhân viên kiểm tra hộ chiếu trực tiếp).",
      explainEn: "Foreign passports lack Chinese chip IDs, so always queue at 人工通道 (staffed manual passport gate)."
    },
    {
      id: "qa-2",
      topicVi: "Logic Lục Thư",
      topicEn: "Liushu Etymology",
      hanzi: "明",
      questionVi: "Chữ 明 (Minh = Sáng rực) được cấu tạo theo phép Lục thư nào khi ghép 日 (Mặt trời) và 月 (Mặt trăng)?",
      questionEn: "Which Liushu principle creates 明 (bright) by uniting 日 (Sun) and 月 (Moon)?",
      optionsVi: ["A. Tượng hình (象形)", "B. Giả tá (假借)", "C. Hội ý (会意)", "D. Chuyển chú (转注)"],
      optionsEn: ["A. Pictograph", "B. Phonetic Loan", "C. Compound Ideograph (会意)", "D. Reciprocal"],
      correctIndex: 2,
      explainVi: "Hội ý (会意): Nhật (Mặt trời) + Nguyệt (Mặt trăng) hợp ý nghĩa tạo thành ánh sáng rực rỡ cả ngày lẫn đêm.",
      explainEn: "Compound Ideograph (Huiyi): Sun plus Moon visually combines to signify radiance across day and night."
    },
    {
      id: "qa-3",
      topicVi: "Ẩm thực Thực địa",
      topicEn: "Dining Survival",
      hanzi: "不要香菜 · 免辣",
      questionVi: "Tại quán lẩu Trùng Khánh, nếu bạn muốn dặn chủ quán hoàn toàn KHÔNG ớt cay và KHÔNG rau mùi (ngò), nên nói thế nào?",
      questionEn: "In a Chongqing hotpot stall, how do you request ZERO chili and NO cilantro?",
      optionsVi: ["A. 微辣 + 加香菜", "B. 免辣 + 不要香菜", "C. 打包 + 买单", "D. 特辣 + 来两瓶"],
      optionsEn: ["A. Mild spice + Extra cilantro", "B. 免辣 + 不要香菜 (Zero chili + No cilantro)", "C. Takeaway + Check bill", "D. Extra hot + Two bottles"],
      correctIndex: 1,
      explainVi: "Ở Tứ Xuyên/Trùng Khánh, 微辣 (cay ít) vẫn rất cay với nhiều người Việt; cần nói rõ 免辣 / 不辣 và 不要香菜.",
      explainEn: "Even 'Weila' (mild spice) is fiery in Chongqing; ask explicitly for 免辣/不辣 (no spice) and 不要香菜 (no cilantro)."
    },
    {
      id: "qa-4",
      topicVi: "Bảo tàng Quốc gia",
      topicEn: "Museum Protocols",
      hanzi: "实名预约 · 限展书画",
      questionVi: "Biển '限展书画' tại Bảo tàng Cố Cung (Thiên Lý Giang Sơn Đồ, Thanh Minh Thượng Hà Đồ) mang ý nghĩa gì cho người đi tham quan?",
      questionEn: "What does the museum label '限展书画' indicate for silk scroll masterpieces like Qianli Jiangshan Tu?",
      optionsVi: ["A. Tranh mô phỏng được phép chụp flash", "B. Tranh bảo quản đặc biệt chỉ mở 3–10 năm/lần (~40 ngày)", "C. Tranh bán tại cửa hàng Văn sáng", "D. Khu vực gửi hành lý tạm thời"],
      optionsEn: ["A. Replica open for flash photos", "B. Restricted-rotation authentic silk scroll (exhibited rarely once every 3–10 years)", "C. Souvenir replica shop", "D. Temporary luggage counter"],
      correctIndex: 1,
      explainVi: "Hạn triển Thư họa (限展书画) bảo vệ sắc khoáng và lụa 900 năm tuổi: mỗi lần mở tối đa vài tuần rồi niêm kho tối nhiều năm.",
      explainEn: "Restricted Rotation protects millennium-old mineral silk pigments; authentic scrolls rest in dark storage for years between brief shows."
    },
    {
      id: "qa-5",
      topicVi: "Đàm phán & Văn hóa",
      topicEn: "B2B & Etiquette",
      hanzi: "留白 · 信用",
      questionVi: "Trên bàn tiệc giao thương ở Trung Quốc, hành động nào bị coi là cấm kỵ nghiêm trọng nhất?",
      questionEn: "At a formal Chinese dining banquet, which chopstick action is considered strictly taboo?",
      optionsVi: ["A. Gõ nhẹ hai ngón tay lên bàn khi được rót trà", "B. Nâng chén kính thấp hơn mép ly người lớn tuổi", "C. Cắm thẳng đôi đũa dựng đứng lên bát cơm", "D. Quét QR đặt món gọi trước đồ uống ấm"],
      optionsEn: ["A. Finger-tapping when tea is poured", "B. Clinking glass rim below senior partner", "C. Sticking chopsticks vertically upright into rice", "D. Ordering warm beverages via QR code"],
      correctIndex: 2,
      explainVi: "Cắm đũa thẳng đứng giống bát hương cúng người quá cố; ngược lại, gõ nhẹ 2 ngón tay ('Khấu chỉ lễ') là phép lịch sự cảm ơn người rót trà.",
      explainEn: "Vertical chopsticks resemble funerary incense sticks; gently tapping two fingers politely thanks whoever poured your tea."
    },
    {
      id: "qa-6",
      topicVi: "Khẩn cấp Thực địa",
      topicEn: "Emergencies",
      hanzi: "急救 120 · 派出所",
      questionVi: "Số gọi xe CẤP CỨU y tế khẩn cấp tại Trung Quốc đại lục là số nào (khác với 115 ở Việt Nam)?",
      questionEn: "Which emergency telephone number summons an AMBULANCE in mainland China?",
      optionsVi: ["A. 115", "B. 120 (Cảnh sát 110 / Cứu hỏa 119)", "C. 911", "D. 12306"],
      optionsEn: ["A. 115", "B. 120 (Police 110 / Fire 119)", "C. 911", "D. 12306"],
      correctIndex: 1,
      explainVi: "Tại Trung Quốc đại lục: Cảnh sát là 110, Cứu hỏa là 119, và Cấp cứu y tế là 120. Nếu mất hộ chiếu phải tới 派出所 gần nhất lấy giấy xác nhận.",
      explainEn: "In mainland China: Police is 110, Fire is 119, and Medical Ambulance is 120; report lost passports to the nearest 派出所."
    },
    {
      id: "qa-7",
      topicVi: "Kiến trúc Đông Á",
      topicEn: "Architecture",
      hanzi: "斗拱 · 重檐歇山",
      questionVi: "Hệ kết cấu gỗ nào là sáng tạo của Đại Nội Huế thích nghi khí hậu gió bão nhiệt đới khác với Đấu củng nhiều tầng ở Bắc Kinh?",
      questionEn: "Which structural innovation adapts Hue Imperial City architecture to tropical typhoons compared with Beijing's tall Dougong brackets?",
      optionsVi: ["A. Móng đá Hán Bạch Ngọc 3 tầng Tu Di Tọa", "B. Hệ mái đôi 'Trùng thiềm điệp ốc' thông gió & kèo gỗ lim hạ trọng tâm", "C. Sân lát gạch đá không bóng cây rộng 30.000 m²", "D. Tường gạch vữa cao 10 mét bao kín 4 phía"],
      optionsEn: ["A. Three-tier white marble Xumizuo plinths", "B. Ventilated twin-roof 'Trong thiem diep oc' carpentry & low-gravity ironwood trusses", "C. Unshaded 30,000 m² stone courtyard", "D. 10-meter enclosed brick fortress perimeter"],
      correctIndex: 1,
      explainVi: "Cùng trục hướng Nam nhưng Đại Nội Huế thay hệ mái cao khép kín bằng 'Trùng thiềm điệp ốc' tản nhiệt hai lớp và gỗ lim chịu bão cấp 12.",
      explainEn: "While sharing axial alignment, Hue's 'Trong thiem diep oc' twin-roof timber trusses shed tropical heat and resist typhoons."
    },
    {
      id: "qa-8",
      topicVi: "Thương mại 2026",
      topicEn: "2026 Trade Data",
      hanzi: "ACFTA 3.0 · 2026",
      questionVi: "Theo số liệu GACC & Đài Tiếng nói VN (VOV), kim ngạch thương mại Việt–Trung 9 tháng đầu năm 2026 đạt mốc nào?",
      questionEn: "Per GACC statistics and VOV 2026 forecasts, what bilateral trade volume did Vietnam and China reach in the first 9 months of 2026?",
      optionsVi: ["A. $120 tỷ USD", "B. $296,3 tỷ USD (dự báo cả năm vượt $350–$360 tỷ USD)", "C. $95 tỷ USD", "D. $185 tỷ USD"],
      optionsEn: ["A. $120 billion", "B. $296.3 billion (full-year projected >$350–$360B)", "C. $95 billion", "D. $185 billion"],
      correctIndex: 1,
      explainVi: "Tổng kim ngạch 9 tháng 2026 đạt $296,3 tỷ USD (GACC/ChinaData), dự báo cả năm vượt $350–$360 tỷ USD (VOV) dưới khung ACFTA 3.0 (ký 28/10/2025).",
      explainEn: "9M 2026 bilateral trade hit $296.3B (GACC), on pace to pass $350–$360B full-year alongside the Oct 28, 2025 ACFTA 3.0 Upgrade."
    }
  ];

  const BORDER_ENTRIES = [
    { id: "pingxiang", labelVi: "Cửa khẩu Hữu Nghị – Bằng Tường (Đường bộ / Đường sắt)", labelEn: "Friendship Pass – Pingxiang (Road / Rail)" },
    { id: "hekou", labelVi: "Cửa khẩu Lào Cai – Hà Khẩu (Tuyến Vân Nam)", labelEn: "Lao Cai – Hekou Border Gate (Yunnan Corridor)" },
    { id: "dongxing", labelVi: "Cửa khẩu Móng Cái – Đông Hưng (Mũi Đông Bắc VN)", labelEn: "Mong Cai – Dongxing Smart Gate (Coastal)" },
    { id: "flight", labelVi: "Bay thẳng Hà Nội / TP.HCM → Bắc Kinh / Thượng Hải / Quảng Châu / Thành Đô", labelEn: "Direct Flight Hanoi / HCMC → Mainland Hub" }
  ];

  const CORRIDOR_ROUTES = [
    {
      id: "sw-chengyu",
      titleVi: "Tuyến Di Sản & 8D Tây Nam: Nam Ninh → Trùng Khánh → Thành Đô",
      titleEn: "Southwest & Ba-Shu Corridor: Nanning → Chongqing → Chengdu",
      provinces: ["prov-guangxi", "prov-chongqing", "prov-sichuan"],
      stations: ["凭祥站 / 南宁东站 (Nanningdong)", "重庆北站 / 重庆西站 (Chongqingxi)", "成都东站 / 犀浦站 (Dujiangyan/Sanxingdui)"],
      museumsVi: ["Bảo tàng Dân tộc Quảng Tây", "Điêu khắc đá Đại Túc & Hồng Nhai Động (miễn vé)", "Bảo tàng Tam Tinh Đôi & Trại Gấu trúc (đặt WeChat trước 5–7 ngày 20:00)"],
      museumsEn: ["Guangxi Ethnic Museum", "Dazu Rock Carvings & Hongyadong dusk vista", "Sanxingdui Museum & Chengdu Panda Base (strict 5–7 day WeChat passport slot)"],
      hsBridgeVi: "Hành lang Đường bộ–Đường sắt Mới (ILSTC) kết nối Trùng Khánh–Thành Đô (laptop, pin xe điện BYD/Yibin, linh kiện ô tô) qua cửa khẩu Bằng Tường/Khâm Châu về Khu công nghiệp miền Bắc Việt Nam; mã HS nhóm 84/85/87 hưởng ưu đãi ACFTA 3.0.",
      hsBridgeEn: "ILSTC rail–sea corridor links Chengdu–Chongqing laptops, NEV batteries, and auto parts south through Pingxiang/Qinzhou to Northern Vietnam industrial parks under ACFTA 3.0.",
      dayPlanVi: [
        "Ngày 1–2: Nhập cảnh Hữu Nghị Quan → Nam Ninh Đông (12306) → Tàu đi Quế Lâm – Dương Sóc (Ngắm núi đá vôi tờ 20 RMB).",
        "Ngày 3–4: HSR lên Trùng Khánh Tây (Khám phá tàu Monorail Lý Tử Bá xuyên chung cư, Lẩu 9 ngăn · dặn 免辣/微辣).",
        "Ngày 5–7: HSR 1h15 sang Thành Đô Đông → Đô Giang Yển (từ Ga Tê Phố 犀浦站) → Bảo tàng Tam Tinh Đôi & Công viên Nhân Dân."
      ],
      dayPlanEn: [
        "Days 1–2: Enter via Friendship Pass → Nanning East HSR → Guilin & Yangshuo (20-RMB Li River karst vistas).",
        "Days 3–4: HSR to Chongqing West (Ride Line 2 through Liziba residential block; ask for 'Yuanyangguo' mild hotpot).",
        "Days 5–7: 1h15 HSR to Chengdu East → Dujiangyan via Xipu Station → Sanxingdui Bronze Museum & People's Park teahouses."
      ]
    },
    {
      id: "yunnan-tea",
      titleVi: "Tuyến Trà Mã Cổ Đạo & Núi Tuyết: Hà Khẩu → Côn Minh → Đại Lý → Lệ Giang",
      titleEn: "Yunnan Tea-Horse Corridor: Hekou → Kunming → Dali → Lijiang",
      provinces: ["prov-yunnan"],
      stations: ["河口北站 (Hékǒuběi Zhàn)", "昆明南站 (Kūnmíngnán Zhàn)", "大理站 (Dàlǐ) · 丽江站 (Lìjiāng)"],
      museumsVi: ["Bảo tàng Tỉnh Vân Nam", "Tam Tháp Sùng Thánh (Đại Lý)", "Phố cổ Lệ Giang & Núi Tuyết Ngọc Long (đặt cáp treo WeChat trước 7 ngày)"],
      museumsEn: ["Yunnan Provincial Museum", "Three Pagodas of Dali", "Lijiang Old Town & Jade Dragon Snow Mountain cableway (7-day WeChat booking)"],
      hsBridgeVi: "Hành lang kinh tế Côn Minh – Lào Cai – Hà Nội – Hải Phòng kết hợp tuyến đường sắt khổ tiêu chuẩn mới; giao thương mạnh hoa tươi xuất khẩu, dược liệu quý, trà lên men Phổ Nhĩ và nông sản nhiệt đới (HS 07/08/09).",
      hsBridgeEn: "Kunming–Lao Cai–Hanoi–Hai Phong cross-border corridor anchored in fresh horticulture, herbal extracts, Pu'er tea, and tropical agricultural cold chains (HS 07/08/09).",
      dayPlanVi: [
        "Ngày 1–2: Qua cửa khẩu Lào Cai → Ga Hà Khẩu Bắc lên tàu đi Côn Minh Nam → Điền Trì & Chợ hoa Đấu Nam.",
        "Ngày 3–4: Tàu cao tốc đi Đại Lý (2h) — Đạp xe quanh Hồ Nhĩ Hải, uống trà Tam Đạo tộc Bạch.",
        "Ngày 5–7: Tàu lên Lệ Giang — Kênh đá phố cổ, bảo tàng chữ tượng hình Đông Ba Nạp Tây & Ngọc Long."
      ],
      dayPlanEn: [
        "Days 1–2: Cross Lao Cai–Hekou → Board HSR from Hekou North to Kunming South → Dounan Flower Market.",
        "Days 3–4: 2h HSR to Dali — Cycle Erhai Lake & taste Bai ethnic Three-Course Tea.",
        "Days 5–7: Train to Lijiang — Stone canals, Naxi Dongba pictograph archive & Jade Dragon Snow Mountain."
      ]
    },
    {
      id: "gba-tech",
      titleVi: "Tuyến Công Nghệ GBA & Lĩnh Nam: Đông Hưng / Bay → Quảng Châu → Thâm Quyến → Phật Sơn",
      titleEn: "Greater Bay Area Hardware & Lingnan: Guangzhou → Shenzhen → Foshan",
      provinces: ["prov-guangdong", "prov-guangxi"],
      stations: ["广州南站 (Guǎngzhōunán)", "深圳北站 / 福田站 (Shēnzhènběi / Fútián)", "香港西九龙站 (West Kowloon - e-Visa riêng)"],
      museumsVi: ["Bảo tàng Tỉnh Quảng Đông", "Khu Bảo tàng Tam Thế Trần Gia Từ", "Chợ linh kiện Hoa Cường Bắc (không cần vé, kiểm tra supplier NECIPS trước khi ký hợp đồng)"],
      museumsEn: ["Guangdong Museum (WeChat passport reservation)", "Chen Clan Ancestral Hall", "Shenzhen Huaqiangbei Hardware Market (pre-screen OEM suppliers on NECIPS)"],
      hsBridgeVi: "Thủ phủ nguồn hàng B2B số 1 cho doanh nghiệp Việt Nam: Thâm Quyến (mạch điện tử PCB, IoT HS 85), Đông Quản (khuôn mẫu CNC HS 84), Phật Sơn (nội thất & gia dụng HS 94/85), Quảng Châu (Canton Fair & Dệt may Trung Đại).",
      hsBridgeEn: "Vietnam's #1 sourcing ecosystem: Shenzhen Huaqiangbei PCB/IoT (HS 85), Dongguan precision tooling (HS 84), Foshan furniture/appliances (HS 94), and Guangzhou Canton Fair wholesale hubs.",
      dayPlanVi: [
        "Ngày 1–3: Quảng Châu Nam → Thưởng trà Điểm tâm (早茶) phố Tây Quan → Khảo sát chợ vải Trung Đại / Hội chợ Canton Fair.",
        "Ngày 4–5: HSR 29 phút sang Thâm Quyến Bắc → Thực địa Hoa Cường Bắc (tìm mẫu linh kiện) & Bảo tàng Đương đại.",
        "Ngày 6–7: Sang Phật Sơn (thăm lò gốm Thạch Loan & Cụm nội thất Thuận Đức) hoặc về qua cửa khẩu Đông Hưng."
      ],
      dayPlanEn: [
        "Days 1–3: Guangzhou South → Xiguan morning Dim Sum → Zhongda textile market or Canton Fair.",
        "Days 4–5: 29-min HSR to Shenzhen North → Huaqiangbei hardware sourcing floors & Museum of Contemporary Art.",
        "Days 6–7: Foshan Shiwan ceramics & Shunde appliance hubs before return via airport or Dongxing Gate."
      ]
    },
    {
      id: "imperial-jiangnan",
      titleVi: "Tuyến Kinh Đô Cổ Học & Giang Nam: Bắc Kinh → Tô Châu → Hàng Châu → Thượng Hải",
      titleEn: "Imperial Capital & Jiangnan Route: Beijing → Suzhou → Hangzhou → Shanghai",
      provinces: ["prov-beijing", "prov-jiangsu", "prov-zhejiang", "prov-shanghai"],
      stations: ["北京南站 (Běijīngnán)", "苏州站 (Sūzhōu Zhàn)", "杭州东站 · 上海虹桥站 (Hóngqiáo)"],
      museumsVi: ["Tử Cấm Thành & Bảo tàng Quốc gia Bắc Kinh (săn vé WeChat trước 7 ngày lúc 20:00)", "Bảo tàng Tô Châu & Chuyết Chính Viên", "Bảo tàng Thượng Hải Đông Quán"],
      museumsEn: ["Forbidden City & National Museum Beijing (7 days prior at 20:00 sharp)", "Suzhou Museum & Humble Administrator's Garden", "Shanghai Museum East Hall"],
      hsBridgeVi: "Kết hợp học thuật với hành lang thương mại Giang Nam: Cụm tiêu dùng bán buôn lớn nhất thế giới tại Nghĩa Ô (Chiết Giang — 1h tàu từ Hàng Châu), cụm điện tử Côn Sơn (Tô Châu) & Cảng Thượng Hải Dương Sơn.",
      hsBridgeEn: "Blends imperial heritage with Yangtze Delta commerce: Yiwu small-commodities megamarket (1h HSR from Hangzhou), Kunshan electronics, and Shanghai Yangshan ocean freight.",
      dayPlanVi: [
        "Ngày 1–3: Bắc Kinh — Tử Cấm Thành (ngắm trục Ngọ Môn – Thái Hòa Điện – Cảnh Sơn) → Quốc Tử Giám 82 Bia Tiến sĩ → Di Hòa Viên.",
        "Ngày 4–5: Tàu Fuxing Nam → Tô Châu (chú ý 'Tá cảnh' ở Chuyết Chính Viên & Bảo tàng I. M. Pei).",
        "Ngày 6–7: Hàng Châu Tây Hồ (Bảo tàng Trà quốc gia) → Thượng Hải Bến Thượng Hải & Phố Đông Đông Quán."
      ],
      dayPlanEn: [
        "Days 1–3: Beijing — Forbidden City Axis → Guozijian 82 Doctoral Steles → Summer Palace.",
        "Days 4–5: Fuxing HSR south to Suzhou — Humble Administrator's Garden ('Borrowed Scenery') & I. M. Pei's Museum.",
        "Days 6–7: Hangzhou West Lake & China National Tea Museum → Shanghai Bund & East Museum."
      ]
    }
  ];

  // Script evolution glyphs summary (visual calligraphic transformation hints)
  const EVOL_SCRIPT_NOTES = {
    defaultVi: "Khải thư chuẩn nét vuông vắn ngày nay kế thừa trực tiếp quy chuẩn Lục thư chuẩn hóa từ chữ Tiểu Triện đời Tần (221 TCN), rút gọn từ chữ đúc Kim văn Chu và nét khắc xương Giáp Cốt Văn.",
    defaultEn: "Modern Regular script inherits Qin Small Seal's Six-Writings architecture (221 BCE), streamlined across Zhou Bronze inscriptions and Shang Oracle Bone carvings."
  };

  window.CCE_LABS = {
    state: {
      dujiangyanSeason: "flood",
      selectedMeridianIdx: 6, // Ngọ (11:00–13:00) default, user can click 'Giờ hiện tại'
      tripBorderId: "pingxiang",
      tripCorridorId: "sw-chengyu",
      quizIdx: 0,
      quizSelected: null,
      quizScore: 0,
      quizDone: false,
      quizAnsweredMap: {}
    },

    setDujiangyanSeason(mode) {
      this.state.dujiangyanSeason = mode === "dry" ? "dry" : "flood";
    },

    setMeridianByHour(hr) {
      // Zi: 23-01 (idx 0), Chou: 1-3 (1), ..., Wu: 11-13 (6), Hai: 21-23 (11)
      const h = (Number(hr) + 1) % 24;
      this.state.selectedMeridianIdx = Math.floor(h / 2);
    },

    renderDujiangyanLab(enMode) {
      const isFlood = this.state.dujiangyanSeason !== "dry";
      const outerPct = isFlood ? 60 : 40;
      const innerPct = isFlood ? 40 : 60;
      const innerStroke = isFlood ? 8 : 13;
      const outerStroke = isFlood ? 14 : 8;
      return `
        <section class="card" id="lab-dujiangyan" style="margin:1.75rem 0;padding:1.25rem 1.35rem;border-top:4px solid var(--jade-green);background:var(--bg-paper);">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">
            <div>
              <div class="editorial-kicker" style="color:var(--jade-green);margin-bottom:0.2rem;">${enMode ? "INTERACTIVE HYDRAULIC LAB 2D · DUJIANGYAN (256 BCE)" : "PHÒNG LAB MÔ PHỎNG THỦY LỢI KHÔNG ĐẬP ĐÔ GIANG YỂN (都江堰 · 256 TCN)"}</div>
              <h3 style="margin:0;font-family:var(--font-editorial);font-size:1.35rem;">${enMode ? "Self-Regulating River Split: Fish Mouth, Flying Sand Weir & Bottleneck" : "Thử Điều Tiết Mực Nước Lũ vs. Mùa Kiệt Qua 3 Bộ Phận Kỳ Vĩ"}</h3>
            </div>
            <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
              <button type="button" class="btn ${isFlood ? "btn-primary" : "btn-secondary"} btn-sm" data-action="lab-dujiangyan-mode" data-mode="flood">${enMode ? "🌊 Summer Flood (60% Outer Spill)" : "🌊 Mùa Lũ Hạ–Thu (Xả lũ 60%)"}</button>
              <button type="button" class="btn ${!isFlood ? "btn-jade" : "btn-secondary"} btn-sm" data-action="lab-dujiangyan-mode" data-mode="dry">${enMode ? "🌾 Winter Dry (60% Inner Irrigate)" : "🌾 Mùa Kiệt Đông–Xuân (Tưới 60%)"}</button>
            </div>
          </div>

          <div style="border:1px solid var(--hairline);background:#0f1722;padding:0.75rem;border-radius:0;">
            <svg viewBox="0 0 760 280" style="width:100%;height:auto;display:block;" role="img" aria-label="Sơ đồ phân dòng thủy lợi Đô Giang Yển">
              <defs>
                <marker id="flowArr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#7dd3fc"/>
                </marker>
              </defs>
              <rect width="760" height="280" fill="#101822"/>
              <!-- Main Minjiang River -->
              <path d="M 20 140 L 210 140" stroke="#1e40af" stroke-width="46" fill="none"/>
              <path d="M 30 140 L 200 140" stroke="#38bdf8" stroke-width="5" stroke-dasharray="12 10" fill="none" marker-end="url(#flowArr)"/>
              <text x="26" y="106" fill="#e2e8f0" font-size="13" font-weight="700">Sông Mân Giang (岷江 · 100%)</text>

              <!-- Outer River (Waijiang) -->
              <path d="M 205 128 Q 370 65 735 72" stroke="#1d4ed8" stroke-width="${outerStroke * 2.2}" fill="none" opacity="0.85"/>
              <path d="M 225 120 Q 370 72 720 74" stroke="#7dd3fc" stroke-width="${Math.max(3, outerStroke / 2.6)}" stroke-dasharray="14 8" fill="none" marker-end="url(#flowArr)"/>
              <text x="390" y="38" fill="#93c5fd" font-size="13" font-weight="700">${enMode ? `Outer River (${outerPct}%) — Flood Discharge` : `Ngoại Giang (${outerPct}%) — Thoát lũ & Xả cát`}</text>

              <!-- Inner River (Neijiang) -->
              <path d="M 205 154 Q 360 208 555 198 L 735 198" stroke="#0369a1" stroke-width="${innerStroke * 2.2}" fill="none" opacity="0.9"/>
              <path d="M 225 162 Q 360 204 545 198 L 720 198" stroke="#38bdf8" stroke-width="${Math.max(3, innerStroke / 2.6)}" stroke-dasharray="14 8" fill="none" marker-end="url(#flowArr)"/>
              <text x="530" y="250" fill="#6ee7b7" font-size="13" font-weight="700">${enMode ? `Inner Canal (${innerPct}%) → Chengdu Plain` : `Nội Giang (${innerPct}%) → Đồng bằng Thành Đô`}</text>

              <!-- Feishayan Spillway Arrow during Flood -->
              <path d="M 410 195 Q 430 138 450 86" stroke="${isFlood ? "#f59e0b" : "#475569"}" stroke-width="${isFlood ? 8 : 2}" stroke-dasharray="${isFlood ? "6 4" : "3 5"}" fill="none" marker-end="url(#flowArr)"/>
              <rect x="378" y="130" width="124" height="32" fill="#1e293b" stroke="${isFlood ? "#f59e0b" : "#64748b"}" stroke-width="1.5"/>
              <text x="440" y="150" text-anchor="middle" fill="${isFlood ? "#fcd34d" : "#94a3b8"}" font-size="12" font-weight="700">飞沙堰 Phi Sa Yển</text>

              <!-- Yuzui Divider Island -->
              <path d="M 195 140 L 290 112 L 290 168 Z" fill="#b45309" stroke="#fcd34d" stroke-width="2"/>
              <text x="200" y="218" fill="#fcd34d" font-size="12" font-weight="700">1. 鱼嘴 Ngư Chủy (Phân 4/6)</text>

              <!-- Baopingkou Gorge -->
              <rect x="550" y="160" width="24" height="22" fill="#475569" stroke="#cbd5e1"/>
              <rect x="550" y="214" width="24" height="22" fill="#475569" stroke="#cbd5e1"/>
              <text x="562" y="150" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">3. 宝瓶口 Bảo Bình Khẩu</text>
            </svg>
          </div>

          <div class="grid grid-3" style="gap:0.65rem;margin-top:0.85rem;font-size:0.82rem;">
            <div class="flashcard-layer" style="margin:0;"><strong>1. Ngư Chủy (鱼嘴):</strong> ${isFlood ? (enMode ? "Deep outer channel bends flood momentum outward (60% Waijiang / 40% Neijiang)." : "Dòng lũ xoáy mạnh tràn ra Ngoại giang rộng tới 60%, giữ Nội giang chỉ nhận 40% tránh ngập lụt.") : (enMode ? "Low winter water glides smoothly into the deeper Inner canal (60% irrigation)." : "Mùa khô nước chảy êm luồn xuống đáy Nội giang sâu hơn tới 60% cứu hạn toàn Thành Đô.")}</div>
            <div class="flashcard-layer" style="margin:0;"><strong>2. Phi Sa Yển (飞沙堰):</strong> ${isFlood ? (enMode ? "Overflow lip sheds excess flood crests plus ~80% of rolling river silt back out automatically!" : "Mực nước dâng quá bờ đập thấp tự động tràn ngược sang Ngoại giang cuốn trôi >80% sỏi đá bùn cát!") : (enMode ? "Lower weir acts cleanly as a retaining wall keeping precious dry-season water inside." : "Đóng vai trò đê chắn nước giữ trọn nguồn nước quý giá không bị rò ra sông ngoài.")}</div>
            <div class="flashcard-layer" style="margin:0;"><strong>3. Bảo Bình Khẩu (宝瓶口):</strong> ${enMode ? "20m cliff gorge cut through Mount Yulei caps max inflow forever—zero mechanical floodgates needed since 256 BCE." : "Cửa đá đục rộng đúng 20m khống chế vĩnh viễn lưu lượng vào Thành Đô, hoạt động 2.280 năm không dùng cửa van sắt."}</div>
          </div>
        </section>
      `;
    },

    renderZiwuClockLab(enMode) {
      const idx = Math.max(0, Math.min(11, this.state.selectedMeridianIdx));
      const cur = MERIDIAN_CLOCK_12[idx];
      return `
        <section class="card" id="lab-ziwuliuzhu" style="margin:1.75rem 0;padding:1.25rem 1.35rem;border-top:4px solid var(--imperial-red);background:var(--bg-paper);">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">
            <div>
              <div class="editorial-kicker" style="color:var(--imperial-red);margin-bottom:0.2rem;">${enMode ? "ZIWU LIUZHU · 12-MERIDIAN 24H CIRCADIAN CLOCK" : "ĐỒNG HỒ SINH HỌC TỬ NGỌ LƯU CHÚ (子午流注 · 12 CANH GIỜ NỘI KINH)"}</div>
              <h3 style="margin:0;font-family:var(--font-editorial);font-size:1.35rem;">${enMode ? "Tap Any Two-Hour Window or Match Current Clock Hour" : "Chạm Chọn Canh Giờ Dưỡng Sinh Theo Đồng Hồ Cơ Thể Đông Y"}</h3>
            </div>
            <button type="button" class="btn btn-primary btn-sm" data-action="lab-meridian-now">🕒 ${enMode ? "Sync Current Local Hour" : "Chọn theo Giờ Hiện Tại"}</button>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:0.4rem;margin-bottom:0.9rem;">
            ${MERIDIAN_CLOCK_12.map((m, mIdx) => `
              <button type="button" class="filter-pill ${mIdx === idx ? "active" : ""}" data-action="lab-meridian-pick" data-idx="${mIdx}" style="flex-direction:column;align-items:flex-start;padding:0.45rem 0.55rem;line-height:1.25;border-radius:0;">
                <strong style="font-size:0.78rem;">${enMode ? m.branchEn.split(" ")[0] : m.branch.split(" ")[0]}</strong>
                <span style="font-size:0.68rem;opacity:0.85;">${m.hours}</span>
              </button>
            `).join("")}
          </div>

          <div class="card" style="padding:1rem 1.1rem;border-left:4px solid var(--imperial-red);background:var(--bg-surface);">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.45rem;">
              <div>
                <span class="badge badge-gold">${enMode ? cur.branchEn : cur.branch} · ${cur.hours}</span>
                <span class="badge badge-outline">${cur.elem}</span>
              </div>
              <div style="display:flex;align-items:center;gap:0.4rem;">
                <span class="hanzi" style="font-size:1.15rem;color:var(--imperial-red);font-weight:700;">${cur.hanzi}</span>
                <button type="button" class="tts-speak-btn" data-action="speak-zh" data-zh="${cur.hanzi}" title="Listen">🔊</button>
              </div>
            </div>
            <h4 style="margin:0.15rem 0 0.35rem;font-size:1.12rem;">${enMode ? cur.organEn : cur.organVi}</h4>
            <p style="margin:0;font-size:0.88rem;line-height:1.6;color:var(--text-secondary);"><strong>${enMode ? "Huangdi Neijing Regimen:" : "Khuyến nghị Hoàng Đế Nội Kinh:"}</strong> ${enMode ? cur.adviceEn : cur.adviceVi}</p>
          </div>
        </section>
      `;
    },

    renderTripPlannerAndCorridors(enMode) {
      const border = BORDER_ENTRIES.find((b) => b.id === this.state.tripBorderId) || BORDER_ENTRIES[0];
      const route = CORRIDOR_ROUTES.find((r) => r.id === this.state.tripCorridorId) || CORRIDOR_ROUTES[0];
      return `
        <section class="card" id="field-trip-planner" style="margin:1.75rem 0;padding:1.3rem 1.4rem;border-top:4px solid var(--jade-green);background:var(--bg-paper);">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">
            <div>
              <div class="editorial-kicker" style="color:var(--jade-green);margin-bottom:0.2rem;">${enMode ? "3-STAGE FIELD PLANNER · BORDER → HERITAGE → B2B TRADE" : "BẢN ĐỒ 3 CHẶNG HÀNH TRÌNH THỰC ĐỊA: CỬA KHẨU → DI SẢN → THƯƠNG MẠI 2026"}</div>
              <h3 style="margin:0;font-family:var(--font-editorial);font-size:1.45rem;">${enMode ? "Automated 7-Day Itinerary & 12306 High-Speed Rail Corridor Matrix" : "Lập Lịch Trình 7 Ngày Tự Động & Tuyến Tàu Cao Tốc 12306 Từ Việt Nam"}</h3>
            </div>
            <span class="badge badge-jade">ACFTA 3.0 · $296.3B Trade Link</span>
          </div>

          <div class="grid grid-2" style="gap:0.85rem;margin-bottom:1rem;">
            <div>
              <label style="display:block;font-size:0.78rem;font-weight:700;margin-bottom:0.35rem;color:var(--text-muted);">${enMode ? "1. Select Vietnam Departure Gate / Flight:" : "1. Chọn Cửa khẩu Xuất phát từ Việt Nam:"}</label>
              <div style="display:flex;flex-direction:column;gap:0.35rem;">
                ${BORDER_ENTRIES.map((b) => `
                  <button type="button" class="filter-pill ${b.id === border.id ? "active" : ""}" data-action="trip-set-border" data-id="${b.id}" style="justify-content:flex-start;text-align:left;border-radius:0;">
                    ${enMode ? b.labelEn : b.labelVi}
                  </button>
                `).join("")}
              </div>
            </div>
            <div>
              <label style="display:block;font-size:0.78rem;font-weight:700;margin-bottom:0.35rem;color:var(--text-muted);">${enMode ? "2. Select Target 7-Day Corridor in China:" : "2. Chọn Hành lang Đích (7 Ngày):"}</label>
              <div style="display:flex;flex-direction:column;gap:0.35rem;">
                ${CORRIDOR_ROUTES.map((c) => `
                  <button type="button" class="filter-pill ${c.id === route.id ? "active" : ""}" data-action="trip-set-corridor" data-id="${c.id}" style="justify-content:flex-start;text-align:left;border-radius:0;">
                    ${enMode ? c.titleEn : c.titleVi}
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <div class="grid grid-2" style="gap:0.9rem;">
            <div class="flashcard-layer" style="margin:0;">
              <strong style="color:var(--imperial-red);">${enMode ? "7-Day Execution Plan & 12306 Hubs" : "Kế hoạch 7 Ngày & Ga Cao tốc 12306 Trọng yếu"}</strong>
              <div style="font-size:0.78rem;margin:0.4rem 0;color:var(--text-muted);">${enMode ? "Departure:" : "Xuất phát:"} <strong>${enMode ? border.labelEn : border.labelVi}</strong></div>
              <div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-bottom:0.55rem;">
                ${route.stations.map((s) => `<span class="badge badge-outline" style="font-size:0.72rem;">🚄 ${s}</span>`).join("")}
              </div>
              <ul style="margin:0;padding-left:1.1rem;font-size:0.83rem;line-height:1.55;">
                ${(enMode ? route.dayPlanEn : route.dayPlanVi).map((d) => `<li style="margin-bottom:0.25rem;">${d}</li>`).join("")}
              </ul>
            </div>

            <div style="display:flex;flex-direction:column;gap:0.6rem;">
              <div class="flashcard-layer" style="margin:0;">
                <strong style="color:var(--antique-gold);">${enMode ? "WeChat Passport Museum Bookings (提前预约)" : "Bảo tàng Cần Đặt WeChat Trước 5–7 Ngày (护照)"}</strong>
                <ul style="margin:0.35rem 0 0;padding-left:1.1rem;font-size:0.82rem;line-height:1.5;">
                  ${(enMode ? route.museumsEn : route.museumsVi).map((m) => `<li>${m}</li>`).join("")}
                </ul>
              </div>
              <div class="card" style="padding:0.75rem 0.9rem;border-left:4px solid var(--jade-green);background:var(--bg-jade-soft);">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.25rem;">
                  <strong style="font-size:0.82rem;color:var(--jade-green);">${enMode ? "Cross-Platform Bridge: 2026 Supply Chain & Border Gateway" : "Liên Thông Chuỗi Cung Ứng & Cửa Khẩu 2026"}</strong>
                  <button type="button" class="btn btn-jade btn-sm" data-action="navigate" data-page="business">${enMode ? "Open B2B Playbook →" : "Mở Cẩm nang B2B →"}</button>
                </div>
                <p style="margin:0;font-size:0.81rem;line-height:1.5;color:var(--text-secondary);">${enMode ? route.hsBridgeEn : route.hsBridgeVi}</p>
              </div>
            </div>
          </div>

          <div style="display:flex;flex-wrap:wrap;gap:0.45rem;margin-top:0.85rem;align-items:center;">
            <span style="font-size:0.78rem;color:var(--text-muted);font-weight:700;">${enMode ? "Open Province Dossiers on Route:" : "Mở nhanh Hồ sơ 3 Lớp các Tỉnh trên Tuyến:"}</span>
            ${route.provinces.map((pid) => `<button type="button" class="btn btn-secondary btn-sm" data-action="open-province" data-id="${pid}">${pid.replace("prov-", "").toUpperCase()} →</button>`).join("")}
            <button type="button" class="btn btn-primary btn-sm" data-action="go-survival-packs">${enMode ? "Open 6 Survival Hanzi Packs →" : "Ôn 6 Bộ Chữ Hán Sinh Tồn →"}</button>
          </div>
        </section>
      `;
    },

    renderPracticeQuizArena(enMode) {
      const q = QUIZ_ARENA_QUESTIONS[this.state.quizIdx % QUIZ_ARENA_QUESTIONS.length];
      const total = QUIZ_ARENA_QUESTIONS.length;
      const ansMap = this.state.quizAnsweredMap || {};
      const selected = ansMap[q.id];
      const isAnswered = typeof selected === "number";
      const isCorrect = isAnswered && selected === q.correctIndex;
      const best = Number(localStorage.getItem("cce_quiz_arena_best") || "0");
      const curScore = Object.keys(ansMap).filter((qid) => {
        const qObj = QUIZ_ARENA_QUESTIONS.find((x) => x.id === qid);
        return qObj && ansMap[qid] === qObj.correctIndex;
      }).length;

      return `
        <section class="card" id="quiz-arena-box" style="margin-bottom:1.75rem;padding:1.25rem 1.35rem;border-top:4px solid var(--imperial-red);background:var(--bg-paper);">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">
            <div>
              <div class="editorial-kicker" style="color:var(--imperial-red);margin-bottom:0.2rem;">${enMode ? "5-MINUTE FIELD & LIUSHU QUIZ ARENA" : "ĐẤU TRƯỜNG THỰC CHIẾN 5 PHÚT · BIỂN BÁO 12306, LỤC THƯ & B2B"}</div>
              <h3 style="margin:0;font-family:var(--font-editorial);font-size:1.35rem;">${enMode ? `Question ${this.state.quizIdx + 1} / ${total}` : `Câu ${this.state.quizIdx + 1} / ${total} — ${q.topicVi}`}</h3>
            </div>
            <div style="display:flex;gap:0.5rem;align-items:center;">
              <span class="badge badge-jade">${enMode ? `Score: ${curScore}/${total}` : `Điểm: ${curScore}/${total}`}</span>
              <span class="badge badge-gold">${enMode ? `Best: ${best}/${total}` : `Kỷ lục: ${best}/${total}`}</span>
              <button type="button" class="btn btn-ghost btn-sm" data-action="arena-reset">${enMode ? "Restart" : "Chơi lại"}</button>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:0.65rem;flex-wrap:wrap;margin-bottom:0.65rem;">
            <span class="hanzi" style="font-size:1.65rem;font-weight:800;color:var(--imperial-red);">${q.hanzi}</span>
            <button type="button" class="tts-speak-btn" data-action="speak-zh" data-zh="${q.hanzi.split("·")[0].trim()}" title="Speak">🔊</button>
            <span class="badge badge-outline">${enMode ? q.topicEn : q.topicVi}</span>
          </div>

          <p style="font-size:0.95rem;font-weight:600;margin:0 0 0.85rem;color:var(--ink-primary);">${enMode ? q.questionEn : q.questionVi}</p>

          <div class="grid grid-2" style="gap:0.55rem;">
            ${(enMode ? q.optionsEn : q.optionsVi).map((opt, oIdx) => {
              let cls = "btn-secondary";
              if (isAnswered) {
                if (oIdx === q.correctIndex) cls = "btn-jade";
                else if (oIdx === selected) cls = "btn-primary";
              }
              return `
                <button type="button" class="btn ${cls}" data-action="arena-answer" data-qid="${q.id}" data-opt="${oIdx}" style="justify-content:flex-start;text-align:left;padding:0.65rem 0.85rem;">
                  ${opt}
                </button>
              `;
            }).join("")}
          </div>

          ${isAnswered ? `
            <div class="callout-editorial" style="margin:0.85rem 0 0;padding:0.75rem 1rem;border-left-color:${isCorrect ? "var(--jade-green)" : "var(--imperial-red)"};">
              <strong style="color:${isCorrect ? "var(--jade-green)" : "var(--imperial-red)"};">${isCorrect ? (enMode ? "✅ Exact Match!" : "✅ Chính xác tuyệt đối!") : (enMode ? "❌ Review Logic:" : "❌ Lưu ý Logic Thực chiến:")}</strong>
              ${enMode ? q.explainEn : q.explainVi}
            </div>
          ` : ""}

          <div style="display:flex;justify-content:space-between;margin-top:0.85rem;">
            <button type="button" class="btn btn-secondary btn-sm" data-action="arena-step" data-dir="-1">← ${enMode ? "Previous" : "Câu trước"}</button>
            <button type="button" class="btn btn-primary btn-sm" data-action="arena-step" data-dir="1">${enMode ? "Next Question →" : "Câu tiếp theo →"}</button>
          </div>
        </section>
      `;
    },

    renderHanziEvolutionStrip(term, enMode) {
      if (!term || !term.hanzi) return "";
      const ch = Array.from(String(term.hanzi).trim())[0] || "道";
      const stages = [
        { eraVi: "Giáp Cốt Văn (~1300 TCN)", eraEn: "Oracle Bone (~1300 BCE)", style: "font-family:monospace;letter-spacing:0.06em;transform:scaleY(1.12);color:#9f2929;", noteVi: "Nét khắc xương thú", noteEn: "Incised turtle/ox bone" },
        { eraVi: "Kim Văn (~1000 TCN)", eraEn: "Bronze Script (~1000 BCE)", style: "font-family:'Noto Serif TC',serif;font-weight:800;color:#b45309;", noteVi: "Đúc trên Đỉnh đồng Chu", noteEn: "Cast on Zhou bronzes" },
        { eraVi: "Tiểu Triện (221 TCN)", eraEn: "Small Seal (221 BCE)", style: "font-family:'Noto Serif SC',serif;letter-spacing:0.08em;font-weight:700;border:2px solid #9f2929;padding:0.15rem 0.45rem;color:#9f2929;", noteVi: "Thống nhất đời Tần", noteEn: "Qin standardized seal" },
        { eraVi: "Khải Thư (Hôm nay)", eraEn: "Regular Script (Today)", style: "font-family:'Noto Sans SC',sans-serif;font-weight:700;color:var(--ink-primary);", noteVi: "Chuẩn đọc hiện đại", noteEn: "Modern standard form" }
      ];
      return `
        <div class="flashcard-layer" style="margin-bottom:0.85rem;background:var(--bg-paper);">
          <div style="font-size:0.76rem;font-weight:800;color:var(--imperial-red);text-transform:uppercase;margin-bottom:0.45rem;">
            ${enMode ? `Calligraphic Evolution Timeline — Character '${ch}'` : `Dòng Chảy Tiến Hóa Tự Hình (Giáp Cốt → Kim Văn → Triện → Khải) · Chữ "${ch}"`}
          </div>
          <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0.45rem;text-align:center;">
            ${stages.map((s) => `
              <div style="border:1px solid var(--hairline);padding:0.45rem 0.3rem;background:var(--bg-surface);">
                <div class="hanzi" style="font-size:1.5rem;line-height:1.25;display:inline-block;${s.style}">${ch}</div>
                <div style="font-size:0.68rem;font-weight:700;margin-top:0.25rem;">${enMode ? s.eraEn : s.eraVi}</div>
                <div style="font-size:0.65rem;color:var(--text-muted);">${enMode ? s.noteEn : s.noteVi}</div>
              </div>
            `).join("")}
          </div>
          <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:0.45rem;">${enMode ? EVOL_SCRIPT_NOTES.defaultEn : EVOL_SCRIPT_NOTES.defaultVi}</div>
        </div>
      `;
    },

    renderStudyPassportCard(state, enMode) {
      const done = (state.completedArticles || []).length;
      const saved = (state.vocabNotebook || []).length + (state.collectedVocab || []).length;
      const marks = (state.bookmarks || []).length;
      return `
        <section class="card" id="offline-study-passport" style="margin-top:1.5rem;padding:1.2rem 1.35rem;border-left:4px solid var(--antique-gold);background:var(--bg-paper);">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
            <div>
              <div class="editorial-kicker" style="color:var(--antique-gold);margin-bottom:0.2rem;">${enMode ? "OFFLINE-FIRST STUDY PASSPORT (.JSON)" : "HỘ CHIẾU VĂN HIẾN CÁ NHÂN (ĐỒNG BỘ OFFLINE KHÔNG CẦN ĐĂNG NHẬP)"}</div>
              <h4 style="margin:0 0 0.25rem;font-size:1.15rem;">${enMode ? `Portable Study Archive · ${done} Essays · ${saved} Terms · ${marks} Bookmarks` : `Hồ sơ Tự Học Độc Lập · ${done} Bài đã đọc · ${saved} Từ vựng · ${marks} Mục đã lưu`}</h4>
              <p style="margin:0;font-size:0.82rem;color:var(--text-secondary);">${enMode ? "Export your reading log, flashcards, and quiz records as a clean .json file or import onto any device." : "Xuất toàn bộ tiến độ đọc, sổ tay chữ Hán, ghi chú và kỷ lục trắc nghiệm ra file .json để chuyển sang máy khác hoàn toàn offline."}</p>
            </div>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
              <button type="button" class="btn btn-primary btn-sm" data-action="export-study-passport">${enMode ? "Export Passport .JSON" : "Xuất Hộ chiếu .JSON"}</button>
              <label class="btn btn-secondary btn-sm" style="cursor:pointer;margin:0;">
                ${enMode ? "Import .JSON" : "Khôi phục .JSON"}
                <input type="file" accept=".json,application/json" data-action="import-study-passport-file" style="display:none;" />
              </label>
            </div>
          </div>
        </section>
      `;
    }
  };
})();
