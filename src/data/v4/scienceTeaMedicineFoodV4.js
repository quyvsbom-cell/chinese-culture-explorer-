// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — Eight Cuisines, Tea & Non-Clinical TCM Study
// Strictly Educational & Historical-Cultural Context Only (Non-Clinical)
// ============================================================================

(function () {
  "use strict";

  var EIGHT_CUISINES = [
    { id: "cui-chuan", zh: "川菜", vi: "Xuyên Thái (Tứ Xuyên)", en: "Sichuan Cuisine", techVi: "Hoa tiêu + ớt (Mala), Đậu tương Tỳ Huyện, đảo chảo nhanh.", techEn: "Mala numbing peppercorn, Pixian doubanjiang fermentation, layered seasoning.", sigVi: "Đậu phụ Ma Bà, Gà Cung Bảo, Lẩu Tứ Xuyên" },
    { id: "cui-yue", zh: "粤菜", vi: "Việt Thái (Quảng Đông)", en: "Cantonese Cuisine", techVi: "Giữ vị tươi nguyên bản (Thanh – Tiên – Hoạt – Nộn), hấp thủy nhiệt, điểm tâm Dimsum.", techEn: "Respecting natural umami via precision steaming, roasting, and Yum Cha dimsum.", sigVi: "Há cảo tôm, Xá xíu mật ong, Cháo sườn Quảng Đông" },
    { id: "cui-lu", zh: "鲁菜", vi: "Lỗ Thái (Sơn Đông)", en: "Shandong Cuisine", techVi: "Đứng đầu Bát đại thái hệ trong cung đình Bắc Kinh; tinh thông hầm nước dùng thanh và hành tây.", techEn: "Imperial North ancestor renowned for crystal consommé broths and seafood Braising.", sigVi: "Hải sâm om hành, Cá chép chua ngọt" },
    { id: "cui-su", zh: "苏菜", vi: "Tô Thái (Giang Tô)", en: "Jiangsu Cuisine", techVi: "Kỹ thuật thái dao tinh xảo (Văn Tư Đậu Phụ), lửa nhỏ hầm nhừ thanh ngọt.", techEn: "Virtuoso knife geometry and slow-braised mild sweetness.", sigVi: "Sư tử đầu (thịt viên), Cá quế Tùng Thử" },
    { id: "cui-zhe", zh: "浙菜", vi: "Chiết Thái (Chiết Giang)", en: "Zhejiang Cuisine", techVi: "Thanh đạm thanh nhã, kết hợp trà Long Tỉnh Hàng Châu & măng non Giang Nam.", techEn: "Delicate river seafood and Hangzhou Longjing tea infusions.", sigVi: "Tôm nõn xào trà Long Tỉnh, Thịt kho Đông Pha" },
    { id: "cui-min", zh: "闽菜", vi: "Mân Thái (Phúc Kiến)", en: "Fujian Cuisine", techVi: "Canh hải sản núi rừng (Phật Khiêu Tường), men rượu hồng cúc.", techEn: "Complex mountain-and-sea stocks accented with red yeast rice wine lees.", sigVi: "Phật Khiêu Tường, Súp cá viên Phúc Châu" },
    { id: "cui-xiang", zh: "湘菜", vi: "Tương Thái (Hồ Nam)", en: "Hunan Cuisine", techVi: "Cay thuần khiết (ớt ngâm muối + xông khói lạp vị).", techEn: "Pure fermented chili heat paired with cured mountain smoked meats.", sigVi: "Đầu cá hấp ớt băm, Thịt xào ớt Hồ Nam" },
    { id: "cui-hui", zh: "徽菜", vi: "Huy Thái (An Huy)", en: "Anhui Cuisine", techVi: "Hầm lửa lớn – nhỏ bằng nồi đất núi Hoàng Sơn (măng khô, giăm bông Kim Hoa).", techEn: "Highland wild-herb stews and cured mountain ham braising.", sigVi: "Cá Quế thối Huy Châu, Vịt hầm măng khô" }
  ];

  var TCM_FOUNDATIONS = {
    disclaimerVi: "Lưu ý nhận thức luận: Phần Đông y (中医) trình bày lịch sử tư tưởng y học cổ truyền, kinh điển và dưỡng sinh văn hóa để tham khảo học thuật. Nội dung KHÔNG thay thế chẩn đoán, kê đơn hay điều trị y khoa chuyên nghiệp.",
    disclaimerEn: "Epistemic Framing: This Traditional Chinese Medicine (中医) section presents historical intellectual foundations, classical texts, and seasonal wellness traditions strictly for cultural education—NOT clinical diagnosis or medical treatment.",
    classics: [
      { id: "tcm-neijing", zh: "《黄帝内经》", vi: "Hoàng Đế Nội Kinh (Tố Vấn & Linh Khu)", en: "Yellow Emperor's Inner Canon", noteVi: "Đặt nền móng lý luận Âm Dương – Ngũ Hành, Tạng Phủ, Kinh Lạc và nguyên tắc 'Trị vị bệnh' (phòng ngừa theo 4 mùa).", noteEn: "Establishes Yin-Yang, Five Phases, Zang-Fu, Meridian frameworks, and seasonal preventative harmony." },
      { id: "tcm-shanghan", zh: "《伤寒杂病论》", vi: "Thương Hàn Tạp Bệnh Luận (Trương Trọng Cảnh)", en: "Treatise on Cold Damage Disorders", noteVi: "Hệ thống hóa Biện chứng Luận trị Lục Kinh và phương thang phối ngũ cổ điển thời Đông Hán.", noteEn: "Codified Six-Channel pattern differentiation and classical herbal formula architecture." },
      { id: "tcm-bencao", zh: "《本草纲目》", vi: "Bản Thảo Cương Mục (Lý Thời Trân · 1578)", en: "Compendium of Materia Medica (1578)", noteVi: "Tổng kết 1.892 vị thảo mộc, khoáng vật và động vật theo phân loại tự nhiên học thời Minh — từng ảnh hưởng lớn tới Hải Thượng Lãn Ông ở Việt Nam.", noteEn: "Ming encyclopedic taxonomy of 1,892 natural substances that strongly engaged Vietnamese medical scholars." }
    ],
    principles: [
      { id: "tcm-p1", zh: "藏象学说 (五脏六腑)", vi: "Học thuyết Tạng Tượng (Ngũ Tạng – Lục Phủ)", en: "Zang-Fu Functional System Model", summaryVi: "Can–Mộc, Tâm–Hỏa, Tỳ–Thổ, Phế–Kim, Thận–Thủy biểu trưng mạng lưới điều phối sinh lý liên kết thay vì chỉ cơ quan giải phẫu tách rời.", summaryEn: "Models Liver-Wood, Heart-Fire, Spleen-Earth, Lung-Metal, Kidney-Water as interconnected physiological networks rather than isolated organs." },
      { id: "tcm-p2", zh: "经络气血", vi: "Hệ Kinh Lạc & Khí Huyết", en: "Meridian Pathways & Qi-Blood Flow", summaryVi: "12 Chính kinh nối kết biểu lý với tạng phủ; là cơ sở khái niệm cho châm cứu, bấm huyệt và thái cực dưỡng sinh.", summaryEn: "Twelve primary pathways linking surface acupoints with internal zang-fu balance in classical acupuncture and Taiji." },
      { id: "tcm-p3", zh: "药食同源 · 节气养生", vi: "Dược Thực Đồng Nguyên & Dưỡng sinh Tiết khí", en: "Food-Medicine Continuity & Seasonal Wellness", summaryVi: "Khẩu vị ẩm thực 4 mùa Đông Á (gừng, kỳ tử, táo đỏ, trà xanh, cúc hoa) phản ánh tri thức thích nghi khí hậu bản địa.", summaryEn: "Everyday East Asian culinary staples (ginger, jujube, chrysanthemum, roasted tea) reflect climate-adaptive food traditions." }
    ]
  };

  window.CCE_SCIENCE_TCM_FOOD_V4 = {
    eightCuisines: EIGHT_CUISINES,
    tcmFoundations: TCM_FOUNDATIONS
  };
})();
