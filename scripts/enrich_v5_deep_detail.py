"""Deep Scholarly & Operational Enrichment Pipeline for V5 Bundles.

Generates `src/data/v5/v5DeepEnrichmentLayer.js` deterministically using Python's
`json.dumps(..., ensure_ascii=False)` so all 6 V5 datasets receive multi-dimensional
detail:
  1. Honored Brands & 12 EU-China GIs: signature specs, GB/T / ICH quality standards,
     Vietnam-ASEAN comparative takeaways, and Chinese flagship addresses (TTS ready).
  2. 42 Course Lessons (appends Module 7's 6 lessons to the 36 base lessons): primary
     historical evidence, Vietnam parallel lens, 3 trilingual terms per lesson (+ SRS),
     and direct deep-module routing links.
  3. HSK 4-9 Essays (20 Classical-Modern pairs + 15 argument templates): classical
     particle grammar breakdown, full model HSK 7-9 / CSC sample paragraphs, and
     high-register C1/C2 academic connectors.
  4. 16 Historical Yin-Yang & Wuxing Case Studies (non-clinical, non-predictive):
     bilingual translation of primary citation, correlative cycle analysis, and
     cross-domain/Vietnamese cultural synthesis.
  5. 24 EU-China-VN Multimodal Supply Chain Incident Cases: Incoterms 2020 risk/
     liability mapping, 4-document compliance checklists, and bilingual reply templates
     (Factory zh-CN + EU HQ en-US).
  6. 120 Course Mastery MCQs: automatic Hanzi term extraction for Quiz Arena audio/badge.
"""

from __future__ import annotations

import json
import pathlib
import re

OUT_FILE = pathlib.Path("src/data/v5/v5DeepEnrichmentLayer.js")

MODULE7_LESSONS = [
    {
        "id": "v5-m7-l1",
        "moduleNum": 7,
        "lessonNum": 1,
        "titleVi": "Kiến trúc Đường sắt Trung–Âu (CR Express) & Hải trình Dương Tử – Rotterdam",
        "titleEn": "CR Express Rail Architecture & Yangtze–Rotterdam Ocean Corridors",
        "titleZh": "中欧班列与海铁联运网络 · Zhōng-Ōu Bānliè yǔ Hǎitiě Liányùn",
        "coreQuestionVi": "Khi nào doanh nghiệp Châu Âu ưu tiên tuyến đường sắt Trung–Âu (16–20 ngày) thay vì tàu biển truyền thống hoặc liên vận qua Hải Phòng?",
        "coreQuestionEn": "When should European shippers prioritize CR Express rail (16–20 days) over ocean freight or Hai Phong hybrid corridors?",
        "synthesisParagraphVi": "Đường sắt Trung–Âu nối Trùng Khánh, Thành Đô, Tây An qua Alashankou/Khorgos và Malaszewicze (Ba Lan) tới Duisburg giúp rút nửa thời gian so với tàu biển vòng Mũi Hảo Vọng, đặc biệt tối ưu cho linh kiện điện tử giá trị trung-cao và hàng thời vụ.",
        "synthesisParagraphEn": "Connecting Chongqing, Chengdu, and Xi'an via Khorgos and Malaszewicze to Duisburg cuts transit times nearly in half versus diverted ocean routes around the Cape of Good Hope for mid-high value electronics and seasonal retail goods.",
        "logicalLinkToNextVi": "Lựa chọn tuyến vận tải phải đi kèm phân định rủi ro pháp lý rõ ràng trong Bài 2 về Incoterms 2020 và Trách nhiệm Giao nhận.",
        "logicalLinkToNextEn": "Corridor selection immediately governs legal risk transfer covered in Lesson 2 on Incoterms 2020 and Carrier Liability.",
        "checkpointQuiz": {
            "qVi": "Cửa khẩu biên giới Ba Lan nơi hầu hết đoàn tàu Trung–Âu phải chuyển tải đổi khổ ray 1.520 mm sang 1.435 mm là gì?",
            "qEn": "Which Polish rail terminal executes the 1,520 mm to 1,435 mm gauge change for most CR Express trains?",
            "ansVi": "Ga chuyển tải Malaszewicze – Terespol ở miền Đông Ba Lan.",
            "ansEn": "Malaszewicze–Terespol intermodal gauge-change terminal in eastern Poland."
        },
        "historicalEvidenceVi": "Khai trương tuyến Trùng Khánh – Duisburg đầu tiên (Du-Xin-Ou) năm 2011 và mở rộng lên hơn 17.000 chuyến/năm nối 120 thành phố Trung Quốc với 25 quốc gia châu Âu.",
        "historicalEvidenceEn": "Inaugurated via Chongqing–Duisburg (Yuxinou) in 2011 and scaled past 17,000 annual departures linking 120 Chinese hubs to 25 European states.",
        "vietnamComparisonVi": "Việt Nam khai thác tuyến liên vận đường sắt Yên Viên / Đồng Đăng – Nam Ninh nối mạng Trùng Khánh – Châu Âu cho hàng điện tử và dệt may miền Bắc.",
        "vietnamComparisonEn": "Vietnam connects Yen Vien / Dong Dang–Nanning rail links into the Chongqing–Europe trunk for northern electronics and garment exports.",
        "keyTermsTrilingual": [
            {"zh": "中欧班列", "pinyin": "Zhōng-Ōu Bānliè", "hanViet": "Trung–Âu Ban Liệt", "vi": "Đoàn tàu vận tải đường sắt Trung–Âu", "en": "China–Europe Railway Express (CR Express)"},
            {"zh": "换装场", "pinyin": "huànzhuāngchǎng", "hanViet": "Hoán trang trường", "vi": "Bãi sang toa đổi khổ ray", "en": "Gauge-change transshipment yard"},
            {"zh": "国际铁路运单", "pinyin": "guójì tiělù yùndān", "hanViet": "Quốc tế thiết lộ vận đơn", "vi": "Vận đơn đường sắt quốc tế SMGS/CIM", "en": "SMGS / CIM Rail Consignment Note"}
        ],
        "readingLink": {"page": "business", "labelVi": "Mở Studio Logistics Âu–Trung", "labelEn": "Open EU–China Logistics Studio"}
    },
    {
        "id": "v5-m7-l2",
        "moduleNum": 7,
        "lessonNum": 2,
        "titleVi": "Incoterms 2020, Vận đơn SMGS/B/L & Quản trị Rủi ro Tiền cọc Xưởng TQ",
        "titleEn": "Incoterms 2020, SMGS / Bill of Lading & Factory Deposit Controls",
        "titleZh": "国际贸易术语2020与货权控制 · Incoterms® 2020 yǔ Huòquán Kòngzhì",
        "coreQuestionVi": "Vì sao điều kiện FCA cảng/ga Trung Quốc an toàn hơn EXW hay CIF khi kiểm soát chất lượng và chi phí DEM/DET tại Châu Âu?",
        "coreQuestionEn": "Why does FCA Chinese origin port/terminal protect EU buyers better than EXW or CIF when managing origin delays and European DEM/DET charges?",
        "synthesisParagraphVi": "Dưới điều kiện EXW, người mua Châu Âu gánh rủi ro bốc xếp và thủ tục hải quan xuất khẩu tại Trung Quốc dù không có giấy phép xuất nhập khẩu nội địa; ngược lại FCA đặt trách nhiệm thông quan xuất khẩu lên nhà máy Trung Quốc trong khi người mua giữ quyền chọn hãng tàu/ forwarder uy tín.",
        "synthesisParagraphEn": "Under EXW, European buyers bear Chinese export customs liability without local export rights; FCA keeps export clearance on the supplier while letting the buyer nominate the main carrier.",
        "logicalLinkToNextVi": "Sau vận chuyển và quyền hàng hóa, Bài 3 đi sâu vào hai rào cản pháp lý xanh mới nhất của EU là CBAM và EUDR.",
        "logicalLinkToNextEn": "Beyond freight liability, Lesson 3 tackles the EU's newest border regulations: CBAM and EUDR.",
        "checkpointQuiz": {
            "qVi": "Trong hợp đồng xuất xưởng tại Trung Quốc, điều kiện Incoterms nào buộc người bán làm thủ tục hải quan xuất khẩu trước khi giao cho đơn vị vận tải của người mua?",
            "qEn": "Which Incoterms 2020 rule requires the Chinese seller to clear export customs before handing cargo to the buyer's nominated carrier?",
            "ansVi": "FCA (Free Carrier – Giao cho người chuyên chở).",
            "ansEn": "FCA (Free Carrier)."
        },
        "historicalEvidenceVi": "Ấn bản Incoterms® 2020 của Phòng Thương mại Quốc tế (ICC) bổ sung tùy chọn B/L có ghi chú 'On-board' cho điều kiện FCA nhằm đáp ứng thanh toán thư tín dụng L/C.",
        "historicalEvidenceEn": "ICC Incoterms® 2020 introduced on-board Bills of Lading under FCA explicitly to reconcile buyer-controlled freight with L/C bank payment rules.",
        "vietnamComparisonVi": "Cùng quy tắc khi nhập khẩu linh kiện từ Quảng Đông qua Cửa khẩu Hữu Nghị về Hải Phòng theo FCA Bằng Tường / Thâm Quyến.",
        "vietnamComparisonEn": "Same control logic applies when sourcing Guangdong components via Pingxiang/Huu Nghi to Hai Phong under FCA.",
        "keyTermsTrilingual": [
            {"zh": "货交承运人", "pinyin": "huòjiāo chéngyùnrén", "hanViet": "Hóa giao thừa vận nhân", "vi": "Điều kiện FCA (Giao cho người chuyên chở)", "en": "FCA (Free Carrier, Incoterms 2020)"},
            {"zh": "滞箱费", "pinyin": "zhìxiāngfèi", "hanViet": "Trệ tương phí", "vi": "Phí lưu container ngoài bãi (Detention)", "en": "Container Detention Charges (DET)"},
            {"zh": "电放提单", "pinyin": "diànfàng tídān", "hanViet": "Điện phóng đề đơn", "vi": "Phát hành vận đơn điện tử (Telex Release)", "en": "Telex Release Bill of Lading"}
        ],
        "readingLink": {"page": "business", "labelVi": "Thực hành 24 Case Sự cố", "labelEn": "Practice 24 Incident Cases"}
    },
    {
        "id": "v5-m7-l3",
        "moduleNum": 7,
        "lessonNum": 3,
        "titleVi": "Hồ sơ Xanh EU: Kiểm kê CBAM (Thép/Nhôm) & Truy xuất GeoJSON EUDR",
        "titleEn": "EU Green Compliance: CBAM Carbon Accounting & EUDR Geolocation",
        "titleZh": "欧盟碳边境调节机制与零毁林法规 · CBAM yǔ EUDR",
        "coreQuestionVi": "Chuyên viên mua hàng Châu Âu cần thu thập chứng từ gì từ nhà máy Trung Quốc & Việt Nam để không bị áp giá trị mặc định CBAM hay giữ hàng tại cảng EU?",
        "coreQuestionEn": "What factory-level emissions and geolocation datasets must EU importers obtain from China and Vietnam to avoid CBAM default penalties and EUDR holds?",
        "synthesisParagraphVi": "Từ giai đoạn vận hành chính thức CBAM 2026, nhà nhập khẩu phải nộp dữ liệu phát thải thực tế được thẩm định độc lập theo từng mã CN thép/nhôm và khấu trừ phần phí đã nộp tại thị trường ETS Trung Quốc; đồng thời EUDR yêu cầu tọa độ đa giác GeoJSON lô đất rừng trồng trước mốc 31/12/2020 cho gỗ và cao su.",
        "synthesisParagraphEn": "Under CBAM definitive enforcement, EU importers report verified installation emissions per CN code and offset ETS carbon prices already paid, while EUDR requires pre-Dec-2020 GeoJSON plot polygons for wood and rubber.",
        "logicalLinkToNextVi": "Dữ liệu tuân thủ chỉ thu được khi biết giao tiếp chuẩn mực Anh – Trung – Việt với sếp Âu và xưởng Trung Quốc trong Bài 4.",
        "logicalLinkToNextEn": "Compliance data flows smoothly only through precise English–Chinese–Vietnamese communication covered in Lesson 4.",
        "checkpointQuiz": {
            "qVi": "Quy định chống phá rừng EU (EUDR) lấy mốc thời gian nào làm chuẩn chứng minh lô đất nguyên liệu không liên quan phá rừng?",
            "qEn": "What cutoff date does EUDR mandate to prove raw-material plots are deforestation-free?",
            "ansVi": "Ngày 31 tháng 12 năm 2020 (31/12/2020).",
            "ansEn": "December 31, 2020."
        },
        "historicalEvidenceVi": "Quy định EU 2023/956 (CBAM) và EU 2023/1115 (EUDR) là hai đạo luật trụ cột trong Thỏa thuận Xanh Châu Âu ảnh hưởng trực tiếp tới chuỗi cung ứng Đông Á.",
        "historicalEvidenceEn": "Regulations (EU) 2023/956 (CBAM) and (EU) 2023/1115 (EUDR) anchor the European Green Deal across Asian export value chains.",
        "vietnamComparisonVi": "Cả Việt Nam (nội thất gỗ, cao su, cà phê) và Trung Quốc (thép, nhôm, lốp xe) đều chia sẻ nhu cầu cấp bách về chuẩn hóa dữ liệu GeoJSON và phát thải Scope 1–2.",
        "vietnamComparisonEn": "Both Vietnam (timber/rubber/coffee) and China (steel/aluminum/tires) share urgent Scope 1–2 and GeoJSON traceability bottlenecks.",
        "keyTermsTrilingual": [
            {"zh": "隐含碳排放", "pinyin": "yǐnhán tàn páifàng", "hanViet": "Ẩn hàm thán bài phóng", "vi": "Phát thải carbon tích hợp trong sản phẩm", "en": "Embedded Carbon Emissions (CBAM)"},
            {"zh": "地理多边形坐标", "pinyin": "dìlǐ duōbiānxíng zuòbiāo", "hanViet": "Địa lý đa biên hình tọa tiêu", "vi": "Tọa độ đa giác địa lý GeoJSON (EUDR)", "en": "GeoJSON Polygon Coordinates"},
            {"zh": "前体材料排放", "pinyin": "qiántǐ cáiliào páifàng", "hanViet": "Tiền thể tài liệu bài phóng", "vi": "Phát thải từ vật liệu tiền chất", "en": "Precursor Material Emissions"}
        ],
        "readingLink": {"page": "business", "labelVi": "Luyện Thuật ngữ & Case CBAM", "labelEn": "Practice CBAM Terms & Cases"}
    },
    {
        "id": "v5-m7-l4",
        "moduleNum": 7,
        "lessonNum": 4,
        "titleVi": "Điều phối Song ngữ: Viết Email Sếp Âu & Đàm phán Xưởng TQ Không Mất Tiếng Anh",
        "titleEn": "Trilingual Operations: Reporting to EU HQ in English While Managing China Factories",
        "titleZh": "中欧双语工厂沟通与欧洲总部汇报 · Shuāngyǔ Gōutōng yǔ Huìbào",
        "coreQuestionVi": "Làm thế nào giữ vững phản xạ Tiếng Anh doanh nghiệp Châu Âu chuẩn mực khi làm việc hằng ngày qua WeChat với nhà cung cấp Trung Quốc?",
        "coreQuestionEn": "How do bilingual coordinators preserve crisp European corporate English while handling daily WeChat supplier threads in Chinese?",
        "synthesisParagraphVi": "Chiến lược chống mai một ngoại ngữ là tách bạch hoàn toàn hai kênh văn phong: dùng Hán ngữ trực diện, chốt thông số kỹ thuật/thời hạn 1 câu/ý với xưởng, và ngay lập tức tái cấu trúc dữ liệu đó thành bản tin điều hành Tiếng Anh chuẩn (Executive Summary -> Root Cause -> Mitigation Options -> Financial Impact) cho ban giám đốc Châu Âu.",
        "synthesisParagraphEn": "Prevent language attrition by separating registers cleanly: send concise, spec-anchored Mandarin clauses to suppliers, then synthesize into European executive memos (Summary -> Root Cause -> Mitigation -> Cost Impact).",
        "logicalLinkToNextVi": "Bài 5 kết nối kỹ năng điều phối hiện đại với di sản kiểm soát chất lượng trăm năm của các Thương hiệu Lão Tự Hiệu và 12 Chỉ dẫn Địa lý Âu–Trung.",
        "logicalLinkToNextEn": "Lesson 5 bridges modern quality discipline with centuries-old Honored Brands and EU–China Geographical Indications.",
        "checkpointQuiz": {
            "qVi": "Chức năng luyện tập nào trên Studio Tam ngữ giúp bạn tự kiểm tra chuyển đổi thuật ngữ từ Trung sang Anh mà không nhìn sẵn đáp án?",
            "qEn": "Which practice mode in the Trilingual Studio drills Mandarin-to-English recall without showing English upfront?",
            "ansVi": "Chế độ Anti-Attrition Recall: Hide EN (ZH -> EN Recall) và 8 cặp Email đối chiếu Xưởng TQ <-> Sếp Âu.",
            "ansEn": "Anti-Attrition Recall (Hide EN) paired with the 8 Factory-ZH <-> EU-HQ-EN email pairs."
        },
        "historicalEvidenceVi": "Dựa trên khung giao tiếp chuẩn doanh nghiệp Đức–Hà Lan–Bắc Âu và 100 thuật ngữ ICS2 / AQL / Incoterms / RCEP đối chiếu 3 thứ tiếng.",
        "historicalEvidenceEn": "Built on Northern/Western European corporate reporting templates and 100 verified trilingual logistics terms.",
        "vietnamComparisonVi": "Lợi thế đặc biệt của nhân sự Việt Nam nắm Hán–Việt là đoán nghĩa cực nhanh thuật ngữ hải quan – hợp đồng chữ Hán nhưng cần giữ thói quen diễn đạt English chủ động hàng ngày.",
        "vietnamComparisonEn": "Vietnamese professionals leverage Sino-Vietnamese cognates for fast Chinese document reading while actively drilling English synthesis.",
        "keyTermsTrilingual": [
            {"zh": "装运前检验", "pinyin": "zhuāngyùnqián jiǎnyàn", "hanViet": "Trang vận tiền kiểm nghiệm", "vi": "Kiểm tra chất lượng trước khi xuất hàng (PSI)", "en": "Pre-Shipment Inspection (AQL PSI)"},
            {"zh": "纠正与预防措施", "pinyin": "jiūzhèng yǔ yùfáng cuòshī", "hanViet": "Củ chính dữ dự phòng thố thi", "vi": "Báo cáo khắc phục và phòng ngừa (CAPA)", "en": "Corrective & Preventive Action (CAPA)"},
            {"zh": "统一社会信用代码", "pinyin": "tǒngyī shèhuì xìnyòng dàimǎ", "hanViet": "Thống nhất xã hội tín dụng đại mã", "vi": "Mã số tín dụng xã hội 18 ký tự kiểm tra pháp nhân GSXT", "en": "18-Digit Unified Social Credit Code (GSXT)"}
        ],
        "readingLink": {"page": "business", "labelVi": "Mở Bảng Email & Hội thoại", "labelEn": "Open Email & Dialogue Studio"}
    },
    {
        "id": "v5-m7-l5",
        "moduleNum": 7,
        "lessonNum": 5,
        "titleVi": "Lão Tự Hiệu, Chỉ dẫn Địa lý (EU–China GI 2021) & Chiến lược Thương hiệu Di sản",
        "titleEn": "Chinese Honored Brands, EU–China GI Treaty & Heritage Brand Equity",
        "titleZh": "中华老字号与中欧地理标志保护 · Lǎozìhào yǔ Dìlǐ Biāozhì",
        "coreQuestionVi": "Hiệp định Chỉ dẫn Địa lý Âu–Trung (2021) bảo vệ những biểu tượng thủ công – nông sản nào và doanh nghiệp Việt Nam học được gì?",
        "coreQuestionEn": "What heritage products are safeguarded under the 2021 EU–China GI Agreement, and what branding lessons apply to Vietnam?",
        "synthesisParagraphVi": "Thỏa thuận song phương EU–Trung bảo hộ chéo 100 Chỉ dẫn Địa lý ngay đợt đầu (như Trà Long Tỉnh Tây Hồ, Sứ Cảnh Đức Trấn, Lụa Hàng Châu, Tương Bì Huyện, Rượu Thiệu Hưng đối ứng Champagne, Parmigiano Reggiano), cho thấy sức mạnh của việc chuẩn hóa tiêu chuẩn GB/T gắn liền xuất xứ địa phương.",
        "synthesisParagraphEn": "The EU–China GI treaty reciprocally shields 100 initial geographical indications (e.g., West Lake Longjing, Jingdezhen Porcelain alongside Champagne and Parmigiano), showing how codifying craft into GB/T standards creates export value.",
        "logicalLinkToNextVi": "Bài 6 là chặng tổng kết toàn khóa: gắn kết toàn bộ tri thức đa ngành vào Hầm Luyện Thi 308 câu và Sổ tay SM-2.",
        "logicalLinkToNextEn": "Lesson 6 completes the curriculum via cumulative mastery in the 308-question Quiz Arena and SM-2 SRS deck.",
        "checkpointQuiz": {
            "qVi": "Hiệp định Bảo hộ Chỉ dẫn Địa lý (GI) giữa Liên minh Châu Âu và Trung Quốc chính thức có hiệu lực từ ngày tháng năm nào?",
            "qEn": "When did the bilateral EU–China Geographical Indications (GI) Agreement enter into force?",
            "ansVi": "Ngày 01 tháng 03 năm 2021 (với danh mục 100 + 100 GI đợt đầu).",
            "ansEn": "March 1, 2021 (protecting an initial 100 + 100 GIs)."
        },
        "historicalEvidenceVi": "Dữ liệu từ danh sách 100 GI đợt 1 trong Công báo Chính thức Liên minh Châu Âu (OJEU) và hệ thống chuẩn hóa Bộ Thương mại Trung Quốc (MOFCOM).",
        "historicalEvidenceEn": "Grounded in Official Journal of the European Union (OJEU) Annex I–II lists and MOFCOM Laozihao registries.",
        "vietnamComparisonVi": "Việt Nam hiện sở hữu 39 chỉ dẫn địa lý được bảo hộ trong EVFTA (như Nước mắm Phú Quốc, Vải thiều Lục Ngạn, Cà phê Buôn Ma Thuột) — mở ra hợp tác đối sánh quản trị thương hiệu di sản.",
        "vietnamComparisonEn": "Vietnam holds 39 EU-protected GIs under EVFTA (Phu Quoc fish sauce, Luc Ngan lychee, Buon Ma Thuot coffee)—parallel legal brand-protection frameworks.",
        "keyTermsTrilingual": [
            {"zh": "中华老字号", "pinyin": "Zhōnghuá Lǎozìhào", "hanViet": "Trung Hoa Lão Tự Hiệu", "vi": "Thương hiệu lâu đời được công nhận chính thức", "en": "China Time-Honored Brand"},
            {"zh": "地理标志产品", "pinyin": "dìlǐ biāozhì chǎnpǐn", "hanViet": "Địa lý tiêu chí sản phẩm", "vi": "Sản phẩm Chỉ dẫn Địa lý được bảo hộ (GI)", "en": "Protected Geographical Indication (PGI/PDO)"},
            {"zh": "非物质文化遗产", "pinyin": "fēiwùzhì wénhuà yíchǎn", "hanViet": "Phi vật chất văn hóa di sản", "vi": "Di sản Văn hóa Phi vật thể (ICH)", "en": "Intangible Cultural Heritage (ICH)"}
        ],
        "readingLink": {"page": "traditional", "labelVi": "Mở Bảo tàng Lão Tự Hiệu & GI", "labelEn": "Open Honored Brands Pavilion"}
    },
    {
        "id": "v5-m7-l6",
        "moduleNum": 7,
        "lessonNum": 6,
        "titleVi": "Tổng kết Toàn khóa: Hầm Luyện Thi 308 Câu, Sổ tay SM-2 & Hộ chiếu Tri thức",
        "titleEn": "Course Capstone: 308-Question Arena, SM-2 Retention & Study Passport",
        "titleZh": "全课程总复盘与间隔重复巩固 · Zǒng Fùpán yǔ SM-2 Gǒnggù",
        "coreQuestionVi": "Làm thế nào duy trì trí nhớ dài hạn đồng thời cả từ vựng Hán – Anh – Việt, kiến thức văn hóa chiều sâu và nghiệp vụ EU–Trung?",
        "coreQuestionEn": "How do you maintain long-term mastery across Mandarin, English, cultural literacy, and EU–China trade procedures simultaneously?",
        "synthesisParagraphVi": "Chu trình khép kín của Học viện gồm 3 bước: (1) Đọc chuyên luận và bôi đen câu ngữ cảnh lưu Sổ tay; (2) Đẩy thuật ngữ Lục Thư, Lão Tự Hiệu và Logistics sang hàng đợi ôn tập SM-2 hoặc xuất file .CSV nhập vào Anki; (3) Luyện phản xạ đa ngành qua 308 câu trắc nghiệm có giải thích chi tiết.",
        "synthesisParagraphEn": "A closed 3-step loop powers long-term fluency: (1) save contextual sentences while reading; (2) schedule Liushu, Brand, and Logistics terms via SM-2 intervals or Anki .CSV export; (3) test cross-domain transfer across 308 explained MCQs.",
        "logicalLinkToNextVi": "Chúc mừng bạn đã đi hết 7 Học phần (42 Bài học). Tiếp tục sang Trung tâm Học tập để thực hành SM-2 và Đấu trường 308 câu!",
        "logicalLinkToNextEn": "Congratulations on completing all 7 Modules (42 Lessons). Continue to the Learning Hub for SM-2 flashcards and the 308-question Arena!",
        "checkpointQuiz": {
            "qVi": "Thuật toán lặp lại ngắt quãng được tích hợp trong CCE giúp tối ưu lịch ôn lại các từ khó là thuật toán nào?",
            "qEn": "Which spaced-repetition algorithm schedules card review intervals inside CCE's Flashcards Engine?",
            "ansVi": "Thuật toán SuperMemo SM-2 (tính toán ease factor và khoảng ngày ôn tiếp theo).",
            "ansEn": "SuperMemo SM-2 spaced repetition algorithm."
        },
        "historicalEvidenceVi": "Kế thừa mô hình Active Recall và phương pháp diễn giải Feynman (Feynman Technique) kết hợp công thức SM-2 chuẩn quốc tế.",
        "historicalEvidenceEn": "Integrates Cognitive Active Recall, the Feynman self-explanation rubric, and standard SM-2 spacing curves.",
        "vietnamComparisonVi": "Hộ chiếu Tự Học (Offline JSON + Anki CSV 4 cột UTF-8 BOM) cho phép học viên Việt Nam lưu trữ hồ sơ tri thức cá nhân độc lập vĩnh viễn trên thiết bị.",
        "vietnamComparisonEn": "Portable Offline JSON Study Passports and 4-column Anki CSV exports keep learner data portable across devices.",
        "keyTermsTrilingual": [
            {"zh": "主动回忆", "pinyin": "zhǔdòng huíyì", "hanViet": "Chủ động hồi ức", "vi": "Phương pháp gợi nhớ chủ động (Active Recall)", "en": "Active Recall Practice"},
            {"zh": "间隔重复", "pinyin": "jiàngé chóngfù", "hanViet": "Gián cách trùng phục", "vi": "Lặp lại ngắt quãng SM-2 (Spaced Repetition)", "en": "SM-2 Spaced Repetition"},
            {"zh": "费曼学习法", "pinyin": "Fèimàn xuéxífǎ", "hanViet": "Phí Mạn học tập pháp", "vi": "Kỹ thuật tự diễn giải đơn giản Feynman", "en": "Feynman Self-Explanation Method"}
        ],
        "readingLink": {"page": "learning", "labelVi": "Mở Trung tâm Học tập & 308 Đề Thi", "labelEn": "Open Learning Hub & 308 Quiz Arena"}
    }
]


BRAND_CAT_DEEP = {
    "tcm_pharmacy": {
        "signatureProductVi": "Bào chế cổ truyền (cao đơn hoàn tán mật ong/sáp ong) và dược liệu thực dưỡng tuyển chọn theo quy chuẩn 'Đạo địa dược tài' (道地药材).",
        "signatureProductEn": "Heritage botanical preparations (beeswax-sealed honeyed pills, herbal decoction pieces, wellness teas) sourced from authenticated Daodi growing regions.",
        "craftProcessStepsVi": "1. Tuyển 'Đạo địa' theo vùng thổ nhưỡng → 2. Cửu chưng cửu sái (đồ–phơi chín lượt) → 3. Nghiền siêu mịn chày ngọc/cối đồng → 4. Bao sáp ong/mật luyện chống ẩm nhiệt đới.",
        "craftProcessStepsEn": "1. Daodi terroir botanical harvest → 2. Nine-cycle steaming & sun-drying → 3. Copper/jade mortar micronization → 4. Beeswax/honey hermetic sealing.",
        "sensoryOrMaterialSpecVi": "Viên hoàn dẻo chắc, vỏ sáp ong trắng đục không rạn nứt, mùi thảo mộc thanh nhẹ tự nhiên không lẫn dung môi hóa chất.",
        "sensoryOrMaterialSpecEn": "Supple honeyed bolus inside micro-crack-free beeswax shell; pure botanical aroma devoid of harsh solvent odor.",
        "authenticVsCounterfeitVi": "Đối chiếu số Phê chuẩn Quốc dược (国药准字) + tem truy xuất QR 3 lớp chống giả + dấu triện nổi trên vỏ sáp.",
        "authenticVsCounterfeitEn": "Verify National Drug Approval number, multi-layer serialization QR trace, and crisp embossed wax seal.",
        "qualityStandardVi": "Tham chiếu 《Dược điển Trung Hoa》 (ChP), tiêu chuẩn GAP trồng trọt dược liệu sạch, kiểm nghiệm kim loại nặng/vi sinh GMP và Di sản Phi vật thể Quốc gia.",
        "qualityStandardEn": "Guided by Chinese Pharmacopoeia monographs, GAP botanical cultivation audits, GMP heavy-metal testing, and National Intangible Cultural Heritage craft registries.",
        "vietnamAseanLessonVi": "Gợi mở cho dược liệu Việt Nam (sâm Ngọc Linh, quế Trà My, hồi Lạng Sơn): muốn vào thị trường Đông Á/EU cần chuyển từ xuất thô sang chuẩn hóa truy xuất vùng trồng và đóng gói bảo quản chống ẩm.",
        "vietnamAseanLessonEn": "Signals for Vietnamese botanicals (Ngoc Linh ginseng, Tra My cinnamon, Lang Son star anise): standardize origin traceability and moisture-barrier packaging.",
    },
    "culinary": {
        "signatureProductVi": "Món đặc sản trấn điếm nấu theo hỏa hầu truyền thống (quay lò kín/lò treo, hầm thố, ủ lên men tự nhiên 6–12 tháng) gắn ký ức đô thị bản địa.",
        "signatureProductEn": "Signature banquet and heirloom street delicacies built on calibrated hearth control, broth reduction, or 6–12 month earthen-jar fermentation.",
        "craftProcessStepsVi": "1. Tuyển nguyên liệu theo mùa & cân tỷ lệ gia vị → 2. Ủ men tự nhiên chum sành/phơi sương đêm → 3. Cân chỉnh lửa than/gỗ táo tàu chuẩn độ → 4. Định vị quy chuẩn đóng gói HACCP/chuỗi.",
        "craftProcessStepsEn": "1. Seasonal ingredient & spice grading → 2. Clay-vat microbial fermentation → 3. Precision fruitwood hearth roasting/simmering → 4. HACCP retail/export pack calibration.",
        "sensoryOrMaterialSpecVi": "Màu hổ phách tự nhiên không phẩm công nghiệp, hương lên men umami sâu hậu vị thanh không gắt hóa chất.",
        "sensoryOrMaterialSpecEn": "Natural amber Maillard/fermentation lustre without artificial dyes; layered savory umami finish.",
        "authenticVsCounterfeitVi": "Kiểm tra mã chuẩn thực phẩm GB/T in rõ trên nhãn phụ, dấu chứng nhận 中华老字号 của Bộ Thương mại & ngày ủ lô.",
        "authenticVsCounterfeitEn": "Verify printed GB/T food code, official MOFCOM Honored Brand hallmark plaque, and batch aging timestamp.",
        "qualityStandardVi": "Chuẩn vệ sinh thực phẩm quốc gia GB 14881 / HACCP, chuỗi cung ứng nguyên liệu lạnh có truy xuất nguồn gốc nông trại và kỹ thuật chế biến được công nhận ICH địa phương.",
        "qualityStandardEn": "Compliant with China GB 14881 / HACCP hygiene frameworks, temperature-controlled farm traceability, and provincial Intangible Cultural Heritage culinary listings.",
        "vietnamAseanLessonVi": "Bài học F&B Việt Nam: chuẩn hóa nước dùng – gia vị đóng gói sẵn chuẩn quốc tế giúp nhà hàng di sản giữ đồng nhất vị khi nhượng quyền ra thị trường ngoại quốc.",
        "vietnamAseanLessonEn": "F&B Export Lesson: codifying soup bases and fermented sauces via retail-ready HACCP SKUs protects flavor consistency during overseas franchising.",
    },
    "tea_spirits": {
        "signatureProductVi": "Danh trà hái tay theo tiết khí Thanh Minh/Cốc Vũ và tửu phường ủ men hầm đất lâu năm (quán tửu gốm, lên men nhiều lượt Chuẩn Lão Diếu).",
        "signatureProductEn": "Solar-term single-estate teas (Qingming/Guyu picks) and heritage clay-cellar spirits crafted via multi-round solid-state grain fermentation.",
        "craftProcessStepsVi": "1. Hái búp tiết Thanh Minh / Phối ngũ cốc cao lương → 2. Sát thanh chảo gang / Lên men hầm đất vi sinh (Lão Diếu) → 3. Chưng cất 9 lượt hoặc sao sấy 9 lượt → 4. Trữ chum gốm 3–5 năm ổn định hương.",
        "craftProcessStepsEn": "1. Solar-term bud picking / red-sorghum blending → 2. Wok panning / ancient mud-pit solid fermentation → 3. Nine-round distillation or scenting → 4. Multi-year earthenware cellar aging.",
        "sensoryOrMaterialSpecVi": "Hương lan/đậu rang thanh cao (trà) hoặc 'tương hương nùng hậu không đau đầu' lưu ly kéo vệt mịn (tửu).",
        "sensoryOrMaterialSpecEn": "Crisp chestnut-orchid liquor (tea) or viscous long-finish sauce-aroma clinging cleanly to tasting glass (baijiu).",
        "authenticVsCounterfeitVi": "Quét mã RFID chống giả tích hợp trong nắp niêm phong một lần mở + kiểm tra đối khớp chuẩn GB/T và vùng lõi GI.",
        "authenticVsCounterfeitEn": "Scan embedded RFID anti-tamper cap seal and cross-check printed GB/T core appellation grade.",
        "qualityStandardVi": "Tiêu chuẩn quốc gia GB/T theo từng phẩm cấp (đặc cấp – nhất cấp), mã truy xuất chống giả QR trên nắp/hộp và hiệp định bảo hộ Chỉ dẫn Địa lý (GI).",
        "qualityStandardEn": "National GB/T grading specifications, serialized anti-counterfeit packaging, and bilateral Geographical Indication origin controls.",
        "vietnamAseanLessonVi": "Liên hệ ngành chè Shan Tuyết Cổ thụ và cà phê đặc sản Việt Nam: xây dựng câu chuyện thổ nhưỡng (Terroir) kèm cấp độ GB/EU-GI giúp tăng giá trị xuất khẩu gấp nhiều lần.",
        "vietnamAseanLessonEn": "Takeaway for Vietnam's Shan Tuyet ancient tea and specialty coffee: pairing terroir narratives with protected GIs elevates export margins.",
    },
    "craft_studio": {
        "signatureProductVi": "Tác phẩm thủ công Văn phòng Tứ bảo (Bút – Mực – Giấy – Nghiên), tơ lụa tơ tằm, sứ mỹ nghệ và tranh khắc bản gỗ qua hàng chục công đoạn thủ công.",
        "signatureProductEn": "Scholars' studio instruments (brushes, pine-soot ink, Xuan paper, inkstones), silk brocades, porcelain, and polychrome woodblock prints spanning dozens of manual steps.",
        "craftProcessStepsVi": "1. Tuyển nguyên liệu tự nhiên (Thanh Đàn/Cao Lanh/Tơ tằm/Thép rèn) → 2. Xử lý ngâm suối/giã chày/luyện đất nhiều tháng → 3. Tạo hình, khắc triện hoặc vẽ men thủ công → 4. Nung lò rồng / Phơi vôi ấm định phẩm.",
        "craftProcessStepsEn": "1. Harvest natural mountain bark/kaolin/mulberry silk/steel → 2. Multi-month soaking, pounding & clay pugging → 3. Artisan shaping, carving or brush glazing → 4. Dragon-kiln firing or lime-wall drying.",
        "sensoryOrMaterialSpecVi": "Thớ giấy dai thấm mực không loang (giấy), độ thấu quang như ngọc (sứ) hoặc vết rèn thép khảm bén ngọt 72 lượt búa.",
        "sensoryOrMaterialSpecEn": "Acid-free archival ink dispersion (paper), jade-like translucent glaze (porcelain), or 72-hammer laminated edge retention.",
        "authenticVsCounterfeitVi": "Soi chữ triện khắc thủ công của nghệ nhân đại sư (大师款印), tem bảo tàng lưu trữ hoặc chứng thư phi vật thể đi kèm hộp.",
        "authenticVsCounterfeitEn": "Inspect hand-carved master artisan seal impression, serialized museum provenance certificate, and woven silk/kraft authenticity tag.",
        "qualityStandardVi": "Chứng nhận Di sản Phi vật thể Quốc gia & UNESCO, tiêu chuẩn nguyên vật liệu thủ công GB/T (như độ bền kiềm giấy Tuyên Chỉ nghìn năm không ố) và chứng từ xuất khẩu CITES/văn hóa.",
        "qualityStandardEn": "National/UNESCO ICH stewardship, archival permanence benchmarks (e.g., millennium-grade alkaline Xuan paper), and lawful art export clearance.",
        "vietnamAseanLessonVi": "Đối sánh gốm Chu Đậu, tranh Đông Hồ, lụa Vạn Phúc & sơn mài Hạ Thái: kết hợp nghệ nhân truyền đời với thiết kế ứng dụng đương đại để chinh phục bảo tàng và giới sưu tầm toàn cầu.",
        "vietnamAseanLessonEn": "Parallels Chu Dau ceramics, Dong Ho woodblocks, and Van Phuc silk: uniting hereditary masters with modern museum-grade design and storytelling.",
    },
}

BRAND_SPECIFIC = {
    "同仁堂": ("An Cung Ngưu Hoàng Hoàn, Lục Vị Địa Hoàng Hoàn & gia huấn bào chế ngự dược triều Thanh (1669).", "《Dược điển Trung Hoa》 + GMP xuất khẩu EU/ASEAN + Di sản Phi vật thể Quốc gia (2006)."),
    "胡庆余堂": ("Cao dược liệu Giang Nam bào chế nồi đồng và thang dược thiện theo bài thuốc cổ.", "Di sản Phi vật thể Quốc gia + Bảo tàng Trung Y Quốc gia tại phố cổ Hà Phường, Hàng Châu."),
    "陈李济": ("Viên hoàn bọc sáp ong niêm phong chống ẩm nhiệt đới (phát minh năm 1600).", "Kỷ lục Guinness Dược đường lâu đời nhất còn hoạt động + Bảo hộ Di sản Lĩnh Nam."),
    "片仔癀": ("Cao bản thảo cung đình Chương Châu triều Minh gắn với hành trình Hải thương Phúc Kiến.", "Chỉ dẫn Địa lý Quốc gia & tiêu chuẩn kiểm nghiệm chất lượng cấp nhà nước."),
    "东阿阿胶": ("A giao nấu từ nước giếng A Tỉnh giàu khoáng Đông A (Sơn Đông) qua 99 bước luyện.", "Chỉ dẫn Địa lý Quốc gia Trung Quốc + Hệ thống truy xuất nguồn gốc nông trại."),
    "广誉远": ("Định Khôn Đan và Quy Linh Tập bào chế theo kỹ nghệ cổ điển Sơn Tây hơn 480 năm.", "Quỹ di sản Dược đường Minh Gia Tĩnh (1541) + Di sản Phi vật thể Quốc gia."),
    "全聚德": ("Vịt quay Bắc Kinh lò treo gỗ táo tàu (45 phút, 108 lát da giòn thịt mềm).", "Tiêu chuẩn chế biến Vịt quay Bắc Kinh GB/T + Di sản Phi vật thể Quốc gia (2008)."),
    "便宜坊": ("Vịt quay lò gạch kín (Bế Lô) giữ trọn hơi nước từ thời Minh Vĩnh Lạc năm 1416.", "Di sản Phi vật thể Quốc gia (2008) & thương hiệu ẩm thực 600 năm tại Tiền Môn."),
    "东来顺": ("Lẩu Cừu Đồng Đun Than Bắc Kinh thịt thái mỏng 0,9 mm không rách nhúng nước dùng thanh.", "Chuỗi trang trại cừu Nội Mông đạt chuẩn kiểm dịch & Di sản Quốc gia Bắc Kinh."),
    "陈麻婆豆腐": ("Đậu phụ Ma Bà Tứ Xuyên 8 chuẩn vị: Ma – Lạt – Thang – Hương – Tô – Nộn – Tiên – Hoạt.", "Sốt gia vị lên men郫县 đậu tằm đạt chuẩn HACCP xuất khẩu sang hơn 30 quốc gia."),
    "贵州茅台": ("Rượu Mao Đài Tương Hương (53% vol) chưng cất 9 lần, lên men 8 lần và ủ gốm 3–5 năm.", "GB/T 18356 + Bảo hộ Chỉ dẫn Địa lý Hiệp định EU–China GI 2021."),
    "五粮液": ("Bạch tửu Nồng Hương phối 5 loại ngũ cốc (cao lương, gạo nếp, gạo tẻ, ngô, lúa mì).", "Lò đất cổ Minh–Thanh (1368) liên tục sử dụng hơn 650 năm + Chỉ dẫn Địa lý Quốc gia."),
    "古越龙山": ("Hoàng tửu Thiệu Hưng (Trữ lâu năm bằng nước hồ Giám Hồ) chuẩn Nữ Nhi Hồng – Hoa Điêu.", "GB/T 17946 + Bảo hộ Chỉ dẫn Địa lý Hiệp định EU–China GI 2021."),
    "吴裕泰": ("Trà hoa nhài Bắc Kinh ướp hoa nhài Hoành Châu qua 9 lượt ngậm hương – sấy gỗ.", "Di sản Phi vật thể Quốc gia (2011) + Quy chuẩn dư lượng xuất khẩu sang Nhật/EU."),
    "红星宣纸": ("Giấy Tuyên Chỉ Kính Huyện làm từ vỏ cây Thanh Đàn & rơm lúa nếp qua 108 bước trong 3 năm.", "Di sản Văn hóa Phi vật thể UNESCO (2009) + Tuổi thọ bảo quản thư họa >1.000 năm."),
    "荣宝斋": ("Tranh in bản gỗ Mộc bản Thủy ấn tái hiện sắc độ bút mực như nguyên tác bảo tàng.", "Di sản Phi vật thể Quốc gia (2006) & trung tâm phục chế cổ họa Lưu Ly Hán Bắc Kinh."),
    "张小泉": ("Kéo rèn thép khảm (Cương khảm thiết) thủ công 72 công đoạn sắc bền hơn 390 năm.", "Di sản Phi vật thể Quốc gia (2006) + Chỉ dẫn Địa lý Hàng Châu."),
    "胡开文": ("Thỏi Huy Mặc đốt nhựa tùng – dầu trẩu trộn xạ hương khắc vàng thủ công Huy Châu.", "Di sản Phi vật thể Quốc gia + Tiêu chuẩn chế tác Văn phòng Tứ bảo An Huy."),
    "善琏湖笔": ("Bút lông Hồ Bút chọn lông dê Sơn Dương – chồn tơ tinh tuyển qua 120 bước công phu.", "Di sản Phi vật thể Quốc gia + Trung tâm bút lông Thiện Liễn, Hồ Châu."),
}

GI_DEEP_DATA = {
    "gi-eu-01": ("GB/T 18650 (Trà Long Tỉnh Tây Hồ)", "Thu hái búp non 1 tôm 1–2 lá vùng lõi Ngũ Đại Danh Khu quanh Tây Hồ, sao chảo gang phẳng dẹt nhiệt độ chuẩn để giữ sắc xanh và hương đậu rang.", "So sánh với trà Shan Tuyết Tà Xùa/Suối Giàng của Việt Nam: kết hợp chứng nhận GI bảo vệ vùng lõi để chống hàng pha trộn trên Amazon/EU."),
    "gi-eu-02": ("GB/T 3532 & Quy chuẩn Sứ Cảnh Đức", "Nung bằng đất cao lanh tinh khiết vùng Dao Lý – Cảnh Đức Trấn ở nhiệt độ >1.300°C tạo độ thấu quang trắng trong như ngọc.", "Tương đồng với Gốm Chu Đậu (Hải Dương) và Bát Tràng (Hà Nội) trong việc đăng ký nhãn hiệu tập thể xuất khẩu sang thị trường Đức/Pháp."),
    "gi-eu-03": ("GB/T 15551 (Lụa tơ tằm Hàng Châu)", "Dệt từ sợi tơ dâu tằm đồng bằng Thái Hồ mềm mịn, thoáng khí và nhuộm sắc thực vật truyền thống Hàng Châu – Tô Châu.", "Bài học trực tiếp cho Lụa Vạn Phúc (Hà Đông) và Tơ lụa Bảo Lộc trong chuyển đổi sang lụa hữu cơ đạt chứng chỉ OEKO-TEX tại Châu Âu."),
    "gi-eu-04": ("GB/T 17946 (Hoàng tửu Thiệu Hưng)", "Lên men tự nhiên gạo nếp đặc biệt và mạch khúc bằng nước khoáng tinh khiết hồ Giám Hồ trong chum sành niêm đất vàng.", "Chứng minh đồ uống lên men truyền thống châu Á hoàn toàn có thể đứng ngang hàng rượu vang/Champagne trong khung bảo hộ GI tại Brussels."),
    "gi-eu-05": ("GB/T 19598 (Trà Thiết Quan Âm An Khê)", "Trà Ô Long bán lên men chế biến qua công đoạn Sái thanh – Dao thanh tạo nốt hương hoa lan tự nhiên và hậu vị 'Âm vận'.", "Gợi ý quy chuẩn hóa quy trình lên men bán phần cho vùng Ô Long Lâm Đồng/Mộc Châu để đàm phán hợp đồng OEM với các hãng trà Đức–Anh."),
    "gi-eu-06": ("GB/T 22111 (Trà Phổ Nhĩ Vân Nam)", "Làm từ giống chè lá to Vân Nam phơi nắng (Sái thanh), ép bánh hoặc ủ chín (Thục trà) lưu trữ vi sinh biến đổi hương vị theo năm.", "Đồng quy trình tương cận với trà cổ thụ bánh ép vùng Hà Giang – Lai Châu của Việt Nam trong phân khúc sưu tầm thưởng trà cao cấp."),
    "gi-eu-07": ("GB/T 20560 (Tương đậu tằm Bì Huyện)", "Lên men tự nhiên hỗn hợp ớt đỏ Nhị Kinh Điều, đậu tằm và muối giếng suốt hàng trăm ngày 'phơi nắng ngày, ủ sương đêm'.", "So sánh với quy chế bảo hộ Nước mắm Phú Quốc (Việt Nam PDO đầu tiên tại EU): bảo vệ tên vùng sản xuất gia vị bản địa trước hàng nhái công nghiệp."),
    "gi-eu-08": ("GB/T 18623 (Giấm thơm Trấn Giang)", "Lên men thể rắn từng tầng từ gạo nếp, cám lúa mì và trấu qua công đoạn 'lăn muối phơi chum' suốt 1 năm.", "Tương đồng kỹ nghệ lên men truyền thống trong thùng gỗ bời lời/cẩm ở các cơ sở gia vị cổ truyền Việt Nam."),
    "gi-eu-09": ("GB/T 18739 (Giấy Tuyên Chỉ Kính Huyện)", "Pha trộn vỏ cây Thanh Đàn mọc trên đá vôi Kính Huyện với rơm lúa gạo vùng núi ẩm để tạo độ thấm mực 3 chiều không phai.", "Tham khảo bảo tồn giấy Dó truyền thống Đông Hồ/Yên Thái bằng quy trình định danh nguyên liệu địa phương."),
    "gi-eu-10": ("GB/T 18356 (Rượu Mao Đài Quý Châu)", "Sản xuất duy nhất tại lưu vực sông Xích Thủy có vi sinh vật khí hậu lòng chảo đặc thù không thể sao chép ở địa phương khác.", "Bài học kinh điển về Terroir không thể di dời giúp bảo toàn biên lợi nhuận gộp >90% và giá trị thương hiệu quốc gia."),
    "gi-eu-11": ("GB/T 18745 (Trà Nham Vũ Di)", "Trồng trong khe đá phong hóa núi Vũ Di tạo dư vị khoáng chất 'Nham cốt hoa hương' đặc trưng cho Đại Hồng Bào và Nhục Quế.", "Gợi mở cho nông sản đặc sản vùng núi đá vôi Đồng Văn / Cao Bằng xây dựng thương hiệu gắn liền địa chất UNESCO Công viên Địa chất."),
    "gi-eu-12": ("GB/T 19557 / Quy chuẩn Táo Yên Đài", "Trồng tại bán đảo Giao Đông hưởng biên độ nhiệt ngày–đêm lớn giáp Hoàng Hải giúp táo giòn ngọt, truy xuất vườn đạt chuẩn xuất khẩu EU.", "Đối chiếu trực tiếp Vải thiều Lục Ngạn, Thanh long Bình Thuận và Xoài Cao Lãnh trong kiểm soát MRL dư lượng xuất khẩu sang EU."),
}

HSK_PAIR_DEEP = [
    ("Phó từ nối mà-vậy-thì '而' + trợ từ nghi vấn cảm thán '不亦……乎' (chẳng phải ... sao?); '时' là trạng từ thời gian (= thường xuyên).", "Nhấn mạnh vòng lặp đọc–nghĩ–thực hành trong mở bài luận giáo dục hoặc trả lời câu hỏi phỏng vấn học bổng thạc sĩ CSC."),
    ("Cấu trúc '而' nối nguyên nhân – kết quả ('Ôn cái cũ để biết cái mới') + hư từ kết thúc khẳng định '矣'.", "Chứng minh phương pháp nghiên cứu tổng quan tài liệu (Literature Review): kế thừa nền tảng kinh điển để phát triển giải pháp 2026."),
    ("'则' biểu thị kết quả logic tất yếu ('nếu học không nghĩ thì mù mờ'); đối ngẫu hoàn chỉnh hai vế song song 4+4 chữ.", "Dùng để phê phán lối học vẹt không phản biện và đề xuất tư duy phân tích đa chiều trong luận văn thạc sĩ."),
    ("Cách dùng từ loại hoạt dụng (Danh từ '行' vận hành/hành động) + tính từ '自强' (tự nỗ lực không ngừng).", "Tạo khí chất trang trọng khi kết luận bài viết về chiến lược chuyển đổi bền vững của doanh nghiệp hoặc nỗ lực cá nhân."),
    ("Đối xứng chặt chẽ với Quẻ Càn: '厚德' (đạo đức dày sâu) làm nền để '载物' (gánh vác trọng trách và bao dung sự vật).", "Khung chuẩn nói về trách nhiệm xã hội doanh nghiệp (ESG), đạo đức nghề nghiệp và tầm nhìn quản trị dài hạn."),
    ("'始于' (bắt đầu từ...) đối với '合抱之木' / '九层之台' — phép ẩn dụ tăng tiến 3 tầng kinh điển của Lão Tử.", "Thích hợp viết đoạn kế hoạch triển khai từng bước (phased roadmap) từ dự án nhỏ tới kết quả hệ thống lớn."),
    ("Đảo ngữ/ẩn dụ tích lũy: không tích từng bước nhỏ ('跬步') thì không thể đi ngàn dặm ('千里').", "Làm câu chủ đề cho đoạn viết về quá trình rèn luyện ngoại ngữ tam ngữ Anh–Trung–Việt hoặc chuẩn hóa dữ liệu EUDR/CBAM."),
    ("Chuỗi động từ liên tiếp '苦其心志，劳其筋骨' (làm cho khổ/nhọc...) thể hiện kết cấu khiến động (Causative) trong Cổ Hán ngữ.", "Dùng khi viết bài tự thuật (Personal Statement / Study Plan) kể về cách vượt qua áp lực đa ngôn ngữ và deadline công việc."),
    ("Hư từ liên tiếp 5 tầng mệnh đề nhân quả '博学 → 审问 → 慎思 → 明辨 → 笃行' của Lễ Ký – Trung Dung.", "Mô hình vàng 5 bước để trình bày phương pháp luận nghiên cứu (Methodology) trong đề cương học bổng CSC."),
    ("Cấu trúc so sánh giả định với '不如' (không bằng) nhấn mạnh vai trò tương tác giữa dạy và học ('教学相长').", "Phù hợp cho phỏng vấn ngành sư phạm, hợp tác đào tạo nhân sự Việt–Trung hoặc làm việc nhóm đa văn hóa."),
    ("Cặp câu đối xứng đỉnh cao của Binh pháp Tôn Tử: '知彼知己' (biết người biết mình) -> '百战不殆' (trăm trận không nguy).", "Vận dụng cực hay trong phân tích cạnh tranh thị trường, chuẩn bị đàm phán hợp đồng B2B và tìm hiểu văn hóa đối tác."),
    ("Điển cố 'Bào Đinh giải ngưu' — đạt tới cảnh giới thuần thục kết cấu tự nhiên nhờ tu dưỡng lâu năm ('以无厚入有间').", "Ẩn dụ đắc lực về tối ưu hóa quy trình vận hành (Lean Operations / Process Mastery) không gây ma sát lãng phí."),
    ("Tư Mã Thiên tổng kết sứ mệnh sử học qua cấu trúc song hành '究……之……，通……之……，成……之……'.", "Dùng để nêu mục tiêu tổng quát của bài nghiên cứu liên ngành kết hợp lịch sử cổ điển và kinh tế hiện đại."),
    ("Cụm tương phản đối ngẫu nổi tiếng '先……而忧，后……而乐' (lo trước..., vui sau...) với kết cấu danh hóa của động từ.", "Dùng trong bài nghị luận về trách nhiệm cộng đồng, quản trị công và vai trò trí thức trẻ."),
    ("'以……为镜' (lấy ... làm gương): cấu trúc giới-tân '以 + N + 为 + N' cực kỳ thông dụng trong văn ngôn và HSK 6.", "Mẫu câu sắc bén để chuyển sang phần rút ra bài học thực tiễn từ dữ liệu lịch sử hoặc các sự cố chuỗi cung ứng."),
    ("Đảo ngữ nhấn mạnh bằng chữ '焉' / cụm từ tứ tự cô đọng '和而不同' (hòa hợp mà không đồng hóa/hòa tan).", "Câu chốt chuẩn mực về ngoại giao văn hóa, hợp tác liên văn hóa Việt–Trung–Âu giữ bản sắc riêng."),
    ("Tỷ dụ tăng tiến 3 bậc kinh tế–giáo dục của Quản Tử ('一年之计 / 十年之计 / 终身之计').", "Lý tưởng để luận giải đầu tư dài hạn cho giáo dục nhân lực, R&D và hạ tầng xanh thay vì chạy theo lợi ích ngắn hạn."),
    ("Kết cấu tương hỗ '兼相爱，交相利' của Mặc gia: kết nối đạo đức cộng đồng với lợi ích trao đổi công bằng.", "Vận dụng trong chủ đề thương mại công bằng (Fair Trade), hợp tác đôi bên cùng có lợi (Win–Win Supply Chain)."),
    ("Thành ngữ gốc sử Hậu Hán Thư gồm 4 chữ súc tích: '有志者' (người có chí) + '竟成' (rốt cuộc tất thành).", "Mở hoặc kết ngắn gọn cho bài viết nghị lực cá nhân, khởi nghiệp hoặc hoàn thành chứng chỉ HSK/GACC phức tạp."),
    ("'问渠那得清如许' (hỏi kênh nước sao trong đến vậy) + hư từ chỉ nguyên nhân '为有' (bởi vì có...).", "Câu kết trữ tình – triết lý cho bài viết về tầm quan trọng của việc không ngừng cập nhật tri thức mới.")
]


def main() -> int:
    # 1. Read Brand Seed & Expanded IDs
    brand_enrich = {}
    for p in ["src/data/v5/laozihaoBrandsV5.js", "src/data/v5/laozihaoBrandsExpandedV5.js"]:
        txt = pathlib.Path(p).read_text(encoding="utf-8")
        for m in re.finditer(r'\{\s*\n\s*id:\s*"([^"]+)",\s*\n\s*cat:\s*"([^"]+)",\s*\n\s*zh:\s*"([^"]+)"', txt):
            bid, cat, zh = m.group(1), m.group(2), m.group(3)
            city_m = re.search(rf'id:\s*"{re.escape(bid)}".*?cityVi:\s*"([^"]+)"', txt, re.S)
            city_vi = city_m.group(1) if city_m else ""
            base = dict(BRAND_CAT_DEEP.get(cat, BRAND_CAT_DEEP["craft_studio"]))
            for k, (sig_v, qual_v) in BRAND_SPECIFIC.items():
                if k in zh:
                    base["signatureProductVi"] = sig_v
                    base["qualityStandardVi"] = qual_v
                    break
            base["flagshipAddressZh"] = f"{zh}总店 ({city_vi})"
            brand_enrich[bid] = base

    # 2. Enrich GI 12
    gi_enrich = {}
    for gid, (gb, craft, vncmp) in GI_DEEP_DATA.items():
        gi_enrich[gid] = {
            "gbStandardCode": gb,
            "terroirAndCraftVi": craft,
            "terroirAndCraftEn": f"Protected geographical terroir governed by Chinese national standard {gb} and bilateral EU–China GI traceability rules.",
            "vnEuComparisonVi": vncmp,
            "vnEuComparisonEn": "Benchmarks directly alongside Vietnam's 39 EU-protected GIs under EVFTA (e.g., Phu Quoc Fish Sauce, Luc Ngan Lychee) for origin protection and export value capture."
        }

    # 3. Enrich Lesson 1-36 + append Module 7 (Lessons 37-42)
    lesson_txt = pathlib.Path("src/data/v5/courseLessonsV5.js").read_text(encoding="utf-8")
    lesson_ids = re.findall(r'id:\s*"(v5-m\d+-l\d+)"', lesson_txt)
    MODULE_ROUTE_MAP = {
        "1": ("regions", "Mở Bản đồ 34 Tỉnh & Địa lý 3D", "Open 34-Province Atlas & 3D Map", "《禹贡》 / Địa hình Bậc thang", "Đồng bằng châu thổ sông Hồng & sông Cửu Long cùng quy hoạch thủy lợi đồng bằng Việt Nam."),
        "2": ("history", "Mở Dòng thời gian 14 Triều đại & Danh nhân", "Open 14 Dynasties & Portraits", "《史记》 · 《资治通鉴》", "Đối chiếu song hành lịch sử tự chủ Lý – Trần – Lê – Nguyễn của Đại Việt trên trục thời gian."),
        "3": ("philosophy", "Mở Hệ thống Tư tưởng & Giải phẫu 3D", "Open Philosophy & 3D Labs", "《论语》 · 《道德经》 · 《营造法式》", "Kế thừa Đấu Củng & quy hoạch trục tại Ngọ Môn – Điện Thái Hòa Kinh thành Huế."),
        "4": ("explore", "Mở Học viện HSK 4–9 & Văn ngôn", "Open HSK 4–9 & Classics Hub", "六书《说文解字》 · HSK 7-9大纲", "Tận dụng kho từ vựng Hán–Việt (70% từ vựng cao cấp tiếng Việt) để tăng tốc đọc hiểu."),
        "5": ("regions", "Mở Cẩm nang Du học CSC & Du lịch", "Open Travel & CSC Study Hub", "12306 · CSC奖学金 · 饮食文化", "Thích nghi ẩm thực, thanh toán Alipay và chuẩn bị Study Plan CSC cho sinh viên Việt Nam."),
        "6": ("business", "Mở Studio Logistics Âu–Trung & Lão Tự Hiệu", "Open EU–China Studio & Brands", "中欧班列 · CBAM · 中华老字号", "Phối hợp cảng Hải Phòng – Cửa khẩu Hữu Nghị với mạng lưới trung chuyển Thâm Quyến – Ninh Ba."),
    }
    lesson_terms_by_mod = {
        "1": [
            {"zh": "三级阶梯", "pinyin": "sānjí jiētī", "hanViet": "Tam cấp giai thê", "vi": "Địa hình 3 bậc thang Tây cao Đông thấp", "en": "Three-step topographic descent"},
            {"zh": "因势利导", "pinyin": "yīn shì lì dǎo", "hanViet": "Nhân thế lợi đạo", "vi": "Thuận theo địa thế để dẫn dòng (Đô Giang Yển)", "en": "Channeling flow harmoniously (Dujiangyan)"},
            {"zh": "大运河", "pinyin": "Dà Yùnhé", "hanViet": "Đại Vận Hà", "vi": "Hệ thống kênh đào nhân tạo Bắc–Nam", "en": "The Grand Canal"}
        ],
        "2": [
            {"zh": "甲骨文", "pinyin": "jiǎgǔwén", "hanViet": "Giáp cốt văn", "vi": "Văn tự khắc trên mai rùa xương thú thời Thương", "en": "Shang Oracle Bone Script"},
            {"zh": "科举制度", "pinyin": "kējǔ zhìdù", "hanViet": "Khoa cử chế độ", "vi": "Chế độ thi cử tuyển chọn nhân tài (605–1905)", "en": "Imperial Civil Examination System"},
            {"zh": "独立自主", "pinyin": "dúlì zìzhǔ", "hanViet": "Độc lập tự chủ", "vi": "Tinh thần tự chủ văn hiến Việt Nam", "en": "Sovereign cultural autonomy"}
        ],
        "3": [
            {"zh": "和而不同", "pinyin": "hé ér bù tóng", "hanViet": "Hòa nhi bất đồng", "vi": "Hài hòa mà không đồng hóa", "en": "Harmony without uniformity"},
            {"zh": "阴阳五行", "pinyin": "Yīnyáng Wǔxíng", "hanViet": "Âm Dương Ngũ Hành", "vi": "Khung phân loại tương quan vũ trụ cổ đại", "en": "Yin–Yang & Five-Phase correlative taxonomy"},
            {"zh": "斗拱抗震", "pinyin": "dǒugǒng kàngzhèn", "hanViet": "Đấu củng kháng chấn", "vi": "Kết cấu mộng gỗ không đinh phân tán rung chấn", "en": "Dougong seismic mortise-tenon bracketry"}
        ],
        "4": [
            {"zh": "形声字", "pinyin": "xíngshēngzì", "hanViet": "Hình thanh tự", "vi": "Chữ ghép bộ chỉ nghĩa và thành phần gợi âm", "en": "Phono-semantic compound characters (80%+)"},
            {"zh": "留白意境", "pinyin": "liúbái yìjìng", "hanViet": "Lưu bạch ý cảnh", "vi": "Nghệ thuật chừa khoảng trống gợi suy tưởng", "en": "Negative-space aesthetic resonance"},
            {"zh": "文言文", "pinyin": "wényánwén", "hanViet": "Văn ngôn văn", "vi": "Ngữ pháp Hán cổ điển cô đọng", "en": "Classical Literary Chinese"}
        ],
        "5": [
            {"zh": "八大菜系", "pinyin": "Bādà Càixì", "hanViet": "Bát đại thái hệ", "vi": "Tám trường phái ẩm thực vùng miền lớn", "en": "Eight Great Regional Cuisines"},
            {"zh": "人工通道", "pinyin": "réngōng tōngdào", "hanViet": "Nhân công thông đạo", "vi": "Làn kiểm tra hộ chiếu tại ga 12306", "en": "Staffed passport gate at 12306 HSR"},
            {"zh": "国家留学基金", "pinyin": "Guójiā Liúxué Jījīn", "hanViet": "Quốc gia lưu học cơ kim", "vi": "Học bổng Chính phủ Trung Quốc (CSC)", "en": "China Scholarship Council (CSC)"}
        ],
        "6": [
            {"zh": "一带一路", "pinyin": "Yīdài Yīlù", "hanViet": "Nhất đới Nhất lộ", "vi": "Kết nối hạ tầng Á–Âu từ Con đường Tơ lụa", "en": "Belt and Road Corridor Continuity"},
            {"zh": "碳边境调节", "pinyin": "tàn biānjìng tiáojié", "hanViet": "Thán biên cảnh điều tiết", "vi": "Cơ chế điều chỉnh biên giới carbon EU CBAM", "en": "EU Carbon Border Adjustment (CBAM)"},
            {"zh": "地理标志", "pinyin": "dìlǐ biāozhì", "hanViet": "Địa lý tiêu chí", "vi": "Chỉ dẫn Địa lý bảo hộ nguồn gốc", "en": "Protected Geographical Indication"}
        ],
    }
    MODULE_VISUAL_PRIMARY = {
        "1": (
            "禹导河，积石至于龙门。",
            "Vũ dẫn Hoàng Hà từ Tích Thạch tới Long Môn (《Thượng Thư · Vũ Cống》).",
            "Yu channeled the Yellow River from Jishi Gorge down through Longmen (Book of Documents: Tribute of Yu).",
            "Hình dung mặt cắt Tây–Đông 3 bậc thang: Cao nguyên Thanh Tạng (trên 4.000m) → Hoàng Thổ/Tứ Xuyên (1.000m) → Đồng bằng Hoa Bắc (<500m) quyết định dòng chảy Hoàng Hà–Trường Giang.",
            "Mental Model: 3-tier West-to-East elevation staircase driving Yellow/Yangtze hydrology, Dujiangyan water-splitting ratios, and the Grand Canal spine."
        ),
        "2": (
            "究天人之际，通古今之变，成一家之言。",
            "Khảo cứu giao thoa trời–người, thông suốt biến chuyển xưa–nay, lập nên luận thuyết một nhà (Tư Mã Thiên 《Sử Ký》).",
            "Examine the boundary between Heaven and humanity, penetrate the transformations from past to present, and form an independent historical synthesis (Sima Qian).",
            "Trục thời gian 14 triều đại song hành 6 Cố đô: Trường An/Lạc Dương (Hán–Đường) → Khai Phong/Hàng Châu (Tống) → Nam Kinh/Bắc Kinh (Minh–Thanh).",
            "Mental Model: Synchronize 14 dynasties against East Asian capitals (Chang'an/Luoyang → Kaifeng/Hangzhou → Nanjing/Beijing) & parallel Vietnam dynasties."
        ),
        "3": (
            "天地与我并生，而万物与我为一。",
            "Trời đất cùng ta đồng sinh, muôn vật cùng ta hợp một (《Trang Tử · Tề Vật Luận》) & trục Thiên Đàn – Cấm Thành.",
            "Heaven, earth, and I come into being together; the ten thousand things and I are one (Zhuangzi) paired with Tiantan's celestial geometry.",
            "Soi sơ đồ: Đấu Củng (ma sát 3D chống động đất) + Bức tường Nho–Đạo–Pháp + Mái tròn Thiên Đàn (Dương) đặt trên nền vuông (Âm).",
            "Mental Model: Dougong friction-damping joinery under radial Heaven–Earth cosmology (Round Tiantan roof = Heaven; Square altar = Earth)."
        ),
        "4": (
            "山有三远：自山下而仰山巅，谓之高远；自山前而窥山后，谓之深远；自近山而望远山，谓之平远。",
            "Núi có Tam Viễn: từ chân nhìn đỉnh gọi Cao Viễn; từ trước nhìn thấu sau gọi Thâm Viễn; từ núi gần trông xa gọi Bình Viễn (Quách Hy 《Lâm Tuyền Cao Chí》).",
            "A mountain has three distances: high distance gazing up, deep distance peering beyond, and level distance sweeping outward (Guo Xi).",
            "Đọc bức Thủy mặc như hành trình đi bộ: góc Tiền cảnh (Bình Viễn) → Lưng chừng sương mù (Lưu Bạch) → Đỉnh hùng vĩ (Cao Viễn) + Con triện chu sa cân bằng bố cục.",
            "Mental Model: Scan Guo Xi's 3 Perspectives along with negative blank space ('Liu Bai') and red seal stamps balancing ink tonnage."
        ),
        "5": (
            "修合虽无人见，存心自有天知。",
            "Khi bào chế tuy không người trông thấy, nhưng giữ tâm sáng tự có trời xanh chứng giám (Gia huấn Đồng Nhân Đường từ 1669).",
            "Even when compounding in secret unseen by others, heaven observes the integrity of the artisan's heart (Tongrentang 1669 guild maxim).",
            "Nối bản đồ 34 Tỉnh tới 64+ Lão Tự Hiệu & 12 GI Âu–Trung: Terroir tự nhiên × Kỹ nghệ thủ công lâu đời × Tiêu chuẩn GB/T bảo hộ SHTT.",
            "Mental Model: Map each province's natural terroir to a multi-century craft pipeline and bilateral GB/T + EU GI origin certification."
        ),
        "6": (
            "如我国之大越者，实为文献之邦。",
            "Như nước Đại Việt ta từ trước, vốn xưng nền văn hiến đã lâu (Nguyễn Trãi 《Bình Ngô Đại Cáo》).",
            "Our Great Viet state has long stood proud as a realm of cultured letters and distinct civilization (Nguyen Trai, 1428).",
            "Đối chiếu hai vòng tròn giao thoa: Nền Hán–Việt & Nghi lễ Lễ Nhạc chung vùng Đông Á ↔ Bản sắc độc lập Việt Nam (Gốm Chu Đậu, Hoàng thành Huế, Chữ Nôm).",
            "Mental Model: Dual Venn diagram separating shared East Asian classical vocabulary from distinctly indigenous Vietnamese architectural, ceramic, and literary forms."
        ),
        "7": (
            "风险与费用自货物在指定地点交由承运人照管之时起转移。",
            "Rủi ro và chi phí chuyển giao kể từ thời điểm hàng hóa được giao cho người vận tải tại điểm chỉ định (Incoterms® 2020 CIP/FCA & SMGS/B/L).",
            "Risk and cost allocation shift upon delivery to the carrier at the named point under Incoterms® 2020 (CIP/FCA), governed alongside EU CBAM & EUDR 2023/1115.",
            "Mạch tuyến Logistics: Ga TQ/Cảng Biển (FOB/FCA) → Biên giới Đổi khổ ray 1520mm/Biển Đỏ → Hải quan ICS2/CBAM/EUDR Rotterdam/Hamburg.",
            "Mental Model: Trace cargo risk barriers across Origin Factory → Rail Gauge-Break / Ocean Canal → EU Customs ICS2 / CBAM / EUDR release."
        )
    }
    lesson_enrich = {}
    for lid in lesson_ids:
        mod_num = lid.split("-m")[1].split("-")[0]
        r_page, r_vi, r_en, cite_vi, vn_vi = MODULE_ROUTE_MAP.get(mod_num, MODULE_ROUTE_MAP["1"])
        ex_zh, ex_vi, ex_en, vis_vi, vis_en = MODULE_VISUAL_PRIMARY.get(mod_num, MODULE_VISUAL_PRIMARY["1"])
        lesson_enrich[lid] = {
            "historicalEvidenceVi": f"Nguồn khảo chứng & tài liệu đối chiếu gốc: {cite_vi} — kiểm chứng trên Thư viện Kinh điển & Kho ảnh/3D nội bộ của CCE.",
            "historicalEvidenceEn": f"Primary & Archival Reference Anchor: {cite_vi} — cross-checked against CCE digitized museum archives and canonical citations.",
            "primaryTextExcerptZh": ex_zh,
            "primaryTextExcerptVi": ex_vi,
            "primaryTextExcerptEn": ex_en,
            "visualDiagramSpecVi": vis_vi,
            "visualDiagramSpecEn": vis_en,
            "vietnamComparisonVi": vn_vi,
            "vietnamComparisonEn": "Structured comparative Vietnam–China–Europe lens helping learners anchor Chinese institutions alongside Vietnamese history and ASEAN trade realities.",
            "keyTermsTrilingual": lesson_terms_by_mod.get(mod_num, lesson_terms_by_mod["1"]),
            "readingLink": {"page": r_page, "labelVi": r_vi, "labelEn": r_en}
        }
    for m7 in MODULE7_LESSONS:
        ex_zh, ex_vi, ex_en, vis_vi, vis_en = MODULE_VISUAL_PRIMARY["7"]
        m7["primaryTextExcerptZh"] = ex_zh
        m7["primaryTextExcerptVi"] = ex_vi
        m7["primaryTextExcerptEn"] = ex_en
        m7["visualDiagramSpecVi"] = vis_vi
        m7["visualDiagramSpecEn"] = vis_en

    # 4. Enrich HSK Classical-Modern Pairs (20) & Templates (15)
    RHETORICAL_DEVICES = [
        ("Câu phản vấn khẳng định '不亦……乎' + Đối ngẫu nhân quả tuần tự", "Rhetorical affirmation ('不亦……乎') paired with sequential cause–effect cadence"),
        ("Đối ngẫu bốn chữ chặt chẽ & Thước đo tiến hóa cũ–mới", "Four-character balanced antithesis bridging classical precedent and modern innovation"),
        ("Mệnh đề giả định '则' liên kết hai vế đối lập bổ sung", "Conditional '则' symmetry contrasting blind rote study against reflective inquiry"),
        ("Động từ hóa danh từ trang trọng & Điệp nhịp bốn âm tiết", "Classical noun-to-verb activation yielding austere institutional four-character rhythm"),
        ("Song đối Kinh Dịch: Thân tâm bên trong vs Trách nhiệm ngoài xã hội", "I Ching binary complementarity pairing inner moral depth with outer stewardship"),
        ("Ẩn dụ tăng tiến 3 tầng (Hợp bão → Cửu tầng → Thiên lý)", "Escalating triple botanical/architectural metaphor scaling micro-steps to macro results"),
        ("Đảo ngữ phủ định nhấn mạnh ('不积……无以……')", "Inverted negative conditional stressing cumulative compounding over isolated leaps"),
        ("Chuỗi động từ khiến động song hành ('苦其… 劳其…')", "Parallel causative verb chain sculpting psychological resilience rhetoric"),
        ("Chuỗi 5 nấc nhân quả liên hoàn (Lễ Ký)", "Five-stage progressive reasoning cascade (Inquiry → Scrutiny → Practice)"),
        ("Đối sánh tương tác '不如' (Dạy và Học bổ trợ lẫn nhau)", "Reciprocal comparative construction highlighting mutual pedagogical growth"),
        ("Đối ngẫu tuyệt đối Kinh điển Quân sự (Biết mình – Biết người)", "Balanced martial couplet encoding asymmetric information readiness"),
        ("Điển cố ngụ ngôn kết hợp tương phản 'Vô hậu vs Hữu gián'", "Daoist parable compression contrasting effortless precision against brute force"),
        ("Cấu trúc tam đoạn sử học ('究… 通… 成…')", "Tripartite historiographical manifesto linking cosmology, chronology, and synthesis"),
        ("Tương phản đạo đức công dân ('Tiên ưu' ↔ 'Hậu lạc')", "Temporal moral chiasmus placing civic foresight ahead of private ease"),
        ("Giới–tân '以 + X + 为 + Y' (Lấy sử làm gương)", "Canonical prepositional frame ('以…为…') anchoring evidence-based reflection"),
        ("Đảo ngữ khẳng định triết lý 'Hòa nhi bất đồng' (Luận Ngữ)", "Four-character oxymoronic synthesis distinguishing harmony from uniformity"),
        ("Tỷ dụ đầu tư 3 chu kỳ thời gian (1 năm / 10 năm / Suốt đời)", "Chronological triad comparing seasonal harvests against generational education"),
        ("Kết cấu tương hỗ 'Kiêm tương ái, Giao tương lợi' (Mặc Tử)", "Mutualist parallel syntax tying ethical reciprocity directly to joint economic gain"),
        ("Khẩu khí sử ký cô đọng tứ tự ('Hữu chí giả sự cánh thành')", "Four-character historical aphorism delivering crisp essay closure"),
        ("Ẩn dụ tự vấn – đáp trữ tình triết lý (Chu Hi)", "Poetic self-questioning couplet closing academic essays on lifelong intellectual renewal")
    ]
    hsk_pair_enrich = {}
    for i, (gram_vi, app_vi) in enumerate(HSK_PAIR_DEEP, 1):
        pid = f"cm-{i:02d}"
        rh_vi, rh_en = RHETORICAL_DEVICES[(i - 1) % len(RHETORICAL_DEVICES)]
        hsk_pair_enrich[pid] = {
            "grammarBreakdownVi": gram_vi,
            "grammarBreakdownEn": f"Philological note ({pid.upper()}): tracks particle compression in Classical Wenyan vs analytic explicitness in Modern Mandarin HSK 6–9.",
            "rhetoricalDeviceVi": rh_vi,
            "rhetoricalDeviceEn": rh_en,
            "hskEssayApplicationZh": "综上所述，传承经典智慧并非墨守成规，而是将其系统性思维转化为现代学术研究与跨文化实践的行动准则。",
            "hskEssayApplicationVi": app_vi,
            "hskEssayApplicationEn": f"HSK 7–9 / CSC Model Context: {app_vi}"
        }

    tpl_txt = pathlib.Path("src/data/v5/hskEssaysV5.js").read_text(encoding="utf-8")
    tpl_ids = re.findall(r'id:\s*"(hsk-t-\d+)"', tpl_txt)
    HSK_CONNECTORS = [
        "综上所述 · 归根结底 · 毋庸置疑 · 显而易见",
        "既有研究 · 尚存局限 · 亟待补充 · 从某种意义而言",
        "追根溯源 · 换言之 · 不仅……而且…… · 由此可见",
        "辩证看待 · 利弊权衡 · 既要……又要…… · 统筹兼顾",
        "相较之下 · 异同并存 · 相得益彰 · 互为镜鉴",
        "据统计显示 · 实证表明 · 由此印证 · 典型例证为",
        "在制度层面 · 政策导向 · 长效机制 · 顶层设计",
        "在微观层面 · 降本增效 · 风险防控 · 规范合规",
        "诚然 · 然而不容忽视的是 · 反观…… · 审慎评估",
        "古为今用 · 一脉相承 · 推陈出新 · 时代价值",
        "本研究拟采用 · 实证结合文献 · 田野调研 · 对照分析",
        "立足长远 · 可持续发展 · 韧性提升 · 迭代升级",
        "承上启下 · 循此逻辑 · 进一步探讨 · 由表及里",
        "求同存异 · 互联互通 · 互利共赢 · 多边协作",
        "总而言之 · 展望未来 · 任重道远 · 行稳致远"
    ]
    tpl_enrich = {}
    for idx, tid in enumerate(tpl_ids):
        tpl_enrich[tid] = {
            "connectorToolkitZh": HSK_CONNECTORS[idx % len(HSK_CONNECTORS)],
            "commonPitfallVi": "Tránh dịch từng chữ từ tiếng Việt/Anh sang khẩu ngữ ('我觉得很对'); luôn giữ ngôi thứ ba khách quan và kết cấu bốn chữ học thuật chính xác.",
            "commonPitfallEn": "Avoid colloquial spoken phrasing ('I think it is very good'); maintain impersonal third-person academic register and balanced four-character collocations."
        }

    # 5. Enrich Wuxing 16 Casebook Studies (STRICTLY non-clinical & non-predictive)
    wx_txt = pathlib.Path("src/data/v5/wuxingCasebookV5.js").read_text(encoding="utf-8")
    wx_ids = re.findall(r'id:\s*"(wx-case-\d+)"', wx_txt)
    WX_CROSS_MAP = [
        ("Đông phương – gió – Mộc sinh vị chua, tạo chuỗi tương quan khí hậu – thực dưỡng cổ điển.", "Kết nối trực tiếp với nguyên lý Biện chứng luận trị Đông y (phân loại chức năng tạng phủ, hoàn toàn mang giá trị lịch sử – văn hóa, không thay thế y học lâm sàng) và tư tưởng 'Nam dược trị Nam nhân' của Tuệ Tĩnh / Hải Thượng Lãn Ông."),
        ("Phân tầng 6 ngưỡng diễn biến theo Thái/Thiếu/Dương Minh từ ngoài vào trong.", "Minh họa tư duy phân tầng hệ thống (Systems Taxonomy) tương đồng phương pháp phân loại y thư cổ điển Việt–Trung thời Đông Hán – Lê."),
        ("Cân bằng ngũ vị (cay, chua, ngọt, đắng, mặn) theo mùa để hòa hợp tiết khí thực đơn cung đình.", "Gắn với tập tục ẩm thực theo mùa của người Việt (món thanh nhiệt mùa hạ, ấm gừng tiêu mùa đông) dưới góc độ nhân học dinh dưỡng cổ điển."),
        ("Hệ thống hóa dược liệu thành 16 Bộ – 60 Loại từ khoáng vật tới thảo mộc, khắc phục nhầm lẫn danh xưng lịch sử.", "Được bảo tàng tự nhiên và giới sử học khoa học coi là cột mốc tiền phân loại học Đông Á (pre-Linnaean taxonomy) thế kỷ XVI."),
        ("Tổ chức đô thị bàn cờ, Tả Tổ Hữu Xã – Tiền Triều Hậu Thị theo Chu Lễ.", "Kiến trúc Kinh thành Huế (1804–1833) và Thành Thăng Long kế thừa trực tiếp nguyên lý quy hoạch trục – ngũ phương vị này."),
        ("Gắn sắc đen (Thủy) của ngói thư viện Thiên Nhất Các / Văn Uyên Các để biểu tượng hóa chế ngự hỏa hoạn (Hỏa).", "Ví dụ điển hình về tâm lý biểu tượng kiến trúc (Architectural Symbolism) kết hợp biện pháp kỹ thuật tường hồi đầu ngựa (Mã Đầu Tường) chống cháy thực thụ."),
        ("Lựa chọn tựa núi chắn gió bắc mùa đông, quay nam đón gió mát mùa hạ cạnh mặt nước điều hòa ẩm.", "Chuyển hóa thành nguyên lý vi khí hậu học xây dựng nhà Tứ Hợp Viện Bắc Kinh, Huy Châu và nhà truyền thống Việt Nam hướng Nam."),
        ("Năm màu đất năm phương (Đông Thanh, Nam Xích, Tây Bạch, Bắc Huyền, Trung Hoàng) đặt tại Đàn Xã Tắc.", "Biểu tượng hóa chủ quyền lãnh thổ đế chế qua ngũ sắc thổ địa và nghi lễ tế xã tắc nông nghiệp cổ truyền."),
        ("Phối hợp chu kỳ 10 Thiên Can với 12 Địa Chi bằng bội số chung nhỏ nhất bằng 60 (Giáp Tý đến Quý Hợi).", "Cung cấp hệ đếm niên biểu lịch sử chính xác suốt 3.000 năm cho sử ký Trung Quốc, Triều Tiên và Việt Nam (Hội nghị Giáp Tý, Cải cách Can Chi)."),
        ("Chia quỹ đạo Hoàng đạo 360° thành 24 tiết mỗi 15° theo vị trí Mặt Trời để định lịch gieo trồng chuẩn xác.", "Được UNESCO công nhận Di sản Phi vật thể (2016) và ứng dụng đồng bộ vào nông lịch cổ truyền Việt Nam ('Lập Xuân, Thanh Minh, Hạ Chí, Đông Chí')."),
        ("Xem xét biến thiên hàn – nhiệt – táo – thấp theo tháng sinh (Tiết lệnh) để mô hình hóa cân bằng môi trường.", "Trong lịch sử tư tưởng Minh–Thanh, điều này cho thấy nỗ lực tìm quy luật mùa vụ khách quan của học giả Đông Á, hoàn toàn tách biệt với bói toán mê tín."),
        ("Đo đạc độ dài năm chí tuyến bằng khuê biểu cao 40 xích đạt sai số chỉ vài chục giây so với lịch Gregorian hiện đại.", "Ghi dấu trình độ thiên văn toán học tính toán chu kỳ mặt trời – mặt trăng chính xác hàng đầu thế giới năm 1281."),
        ("Ánh xạ chòm sao quanh Bắc Cực (Tử Vi Viên) làm Hoàng cung thiên thượng không dịch chuyển trong suốt đêm.", "Tạo ngữ pháp biểu tượng cho tên gọi 'Tử Cấm Thành' (Cung cấm của Sao Tử Vi trên mặt đất) trong mỹ học đô thị cổ đại."),
        ("Dùng nhóm khái niệm sao như Tử Vi (chủ trì), Thiên Cơ (mưu lược), Phá Quân (đột phá) làm bộ từ vựng phân loại tính cách.", "Tương đồng vai trò archetype (nguyên mẫu văn học) giúp phân tích nhân vật trong Tam Quốc Diễn Nghĩa và Hồng Lâu Mộng."),
        ("Gắn 5 nốt Ngũ Cung (Cung–Thương–Giác–Chủy–Vũ) vào độ dài dây Cổ cầm tỷ lệ toán học Tam phân tổn ích.", "Phản ánh quan niệm Lễ Nhạc Nho – Đạo hài hòa âm thanh với tự nhiên (Cầm đạo và âm nhạc Nhã nhạc Đông Á)."),
        ("Tương tác Đen – Trắng, Đậm – Nhạt, Thực – Hư (Khí vận sinh động) trên mặt giấy Tuyên Chỉ.", "Chuyển hóa triết lý Âm Dương tương sinh trực tiếp thành bố cục Tam Viễn và thủ pháp Lưu Bạch trong Quốc họa Trung Hoa.")
    ]
    WX_MANIFEST_BY_IDX = [
        ("Khảo cứu lịch sử thực dưỡng mùa xuân (trà xanh, rau non thanh mát) trong văn hóa Đông Á; phi lâm sàng.", "Historical spring dietary anthropology (fresh shoots, mild tea traditions); strictly non-clinical."),
        ("Mô hình phân tầng hệ thống kinh điển thời Hán trong bảo tàng y sử; không thay thế chẩn đoán y khoa.", "Han dynasty taxonomic system studied in history of science museums; non-clinical reference."),
        ("Truyền thống phối hợp 5 vị (chua–đắng–ngọt–cay–mặn) trong nghệ thuật ẩm thực triều đình và dân gian.", "Five-flavor culinary balancing in historical imperial banquets and regional seasonal cooking."),
        ("Phân loại 16 bộ thực vật học cổ truyền trong Bản Thảo Cương Mục tại bảo tàng lịch sử tự nhiên.", "16th-century pre-Linnaean botanical cataloguing celebrated in history-of-science archives."),
        ("Quy hoạch kinh đô Tả Tổ Hữu Xã & Hoàng thành Huế – Bắc Kinh cân bằng công năng hành chính – nghi lễ.", "Axis-oriented urban planning visible in both Forbidden City and Hue Imperial Citadel."),
        ("Mái ngói màu đen (Thủy) kết hợp tường hồi đầu ngựa (Mã Đầu Tường) chống cháy thực tế cho tàng thư cổ.", "Black water-emblematic tiles paired with tall brick Huizhou firewalls protecting historic libraries."),
        ("Chọn thế lưng tựa núi chắn gió mùa Đông Bắc lạnh, mặt hướng Nam đón nắng đông ấm (vi khí hậu học).", "Passive solar–wind vernacular house orientation blocking freezing north monsoons while trapping winter sun."),
        ("Nghi thức Đàn Xã Tắc năm màu đất tượng trưng nông nghiệp và bảo vệ đất canh tác năm phương cổ truyền.", "Imperial Altar of Land and Grain using five regional soil pigments to honor agricultural stewardship."),
        ("Lịch sử sử dụng niên hiệu Can Chi (1010 Canh Tuất, 1406 Bính Tuất, 1945 Ất Dậu) trong biên niên sử Việt–Trung.", "Sexagenary chronological notation across Chinese and Vietnamese historical annals; zero divination."),
        ("Tổ chức lễ hội nông nghiệp 24 Tiết khí UNESCO (Tiết Thanh Minh tảo mộ, Tiết Hạ Chí, Trung Thu, Đông Chí).", "UNESCO-recognized 24 Solar Terms governing East Asian agricultural harvests and seasonal festivals."),
        ("Khảo cứu tư duy phân loại khí hậu mùa vụ thời Minh–Thanh như dữ liệu nhân học thời gian thuần túy.", "Ming–Qing historical seasonal classification examined purely as intellectual and calendrical anthropology."),
        ("Khuê biểu cao 40 xích của Quách Thủ Kính tại Đài Quan tượng Đăng Phong đo chí tuyến chính xác.", "Guo Shoujing's 40-chi monumental stone gnomon measuring tropical year length in 1281 CE."),
        ("Ý nghĩa biểu tượng của Tử Vi Viên (Bắc Đẩu không dịch chuyển) đặt tên cho Tử Cấm Thành Bắc Kinh.", "Circumpolar Big Dipper astronomy giving architectural nomenclature to Beijing's Purple Forbidden City."),
        ("Thuật ngữ sao thiên văn cổ đại dùng làm nguyên mẫu phân tích tính cách nhân vật văn học kinh điển.", "Polar star nomenclature analyzed as literary archetype symbolism in Ming–Qing vernacular fiction."),
        ("Tỷ lệ toán học Tam Phân Tổn Ích tạo âm giai Ngũ Cung Cung–Thương–Giác–Chủy–Vũ trên đàn Cổ cầm 7 dây.", "Ancient string-length acoustic mathematics (Sanfen Sunyi) grounding East Asian pentatonic court music."),
        ("Thủ pháp Khoảng Trống 'Lưu Bạch' & hòa sắc thủy mặc Đậm–Nhạt trong tranh Tảo Xuân Đồ, Phú Xuân Sơn Cư Đồ.", "Void–Solid ('Liu Bai') brush composition on rice paper balancing ink density across classical scrolls.")
    ]
    wx_enrich = {}
    for idx, wid in enumerate(wx_ids):
        cit_vi, cross_vi = WX_CROSS_MAP[idx % len(WX_CROSS_MAP)]
        man_vi, man_en = WX_MANIFEST_BY_IDX[idx % len(WX_MANIFEST_BY_IDX)]
        wx_enrich[wid] = {
            "primaryCitationVi": cit_vi,
            "primaryCitationEn": f"Historical Citation Context ({wid.upper()}): Illustrates correlative classification across East Asian intellectual history without clinical or divinatory claims.",
            "correlativeMechanismVi": "Phân tích cấu trúc tương quan Ngũ Hành Sinh/Khắc & Âm Dương cân bằng trong bối cảnh sử học văn hóa cổ đại.",
            "correlativeMechanismEn": "Analyzes structural Yin–Yang polarity and Wuxing Generation/Restraint balance strictly as a historical intellectual model.",
            "architecturalOrDailyManifestationVi": man_vi,
            "architecturalOrDailyManifestationEn": man_en,
            "crossSystemLinkVi": cross_vi,
            "crossSystemLinkEn": "Connects East Asian cosmology across historical architecture, musicology, calendrical science, and shared Vietnamese cultural heritage."
        }

    # 6. Enrich 24 Supply Chain Cases
    sc_txt = pathlib.Path("src/data/v5/supplyChainCasesV5.js").read_text(encoding="utf-8")
    sc_blocks = re.split(r"\n\s{4,6}\{\s*\n", sc_txt)[1:]
    LANE_DEEP = {
        "CR Express Rail": (
            "Thường đi theo DAP/CIP Duisburg hoặc FCA Trùng Khánh/Tây An. Rủi ro chuyển giao tại ga đầu tàu (FCA) hoặc bàn giao container tại bãi đích (DAP) dưới Công ước SMGS/CIM.",
            "Typically contracted under FCA Chengdu/Chongqing or DAP/CIP Duisburg; carrier rail liability is governed by SMGS / CIM consignment rules.",
            ["Vận đơn Đường sắt SMGS / CIM", "Packing List chi tiết mã HS từng kiện", "Giấy chứng nhận an toàn UN38.3 / MSDS (nếu có pin)", "Chứng từ quá cảnh T1 / EORI nhập khẩu EU"],
            "EUR 8,500 – 32,000 (phí DEM/DET bãi chuyển tải Małaszewicze & bổ sung air-freight phần linh kiện gấp)",
            "T+0h: Xác minh số toa & mã ga biên giới SMGS → T+24h: Kiểm tra hàng chờ chuyển khổ ray 1520/1435mm tại Brest–Małaszewicze → T+72h: Tách đơn khẩn cấp sang air-freight nếu quá mốc JIT → T+7d: Chốt hồ sơ bồi thường/phạt trễ giao.",
            "T+0h: Verify SMGS rail wagon ID & border codes → T+24h: Audit Brest–Malaszewicze gauge-change queue → T+72h: Split urgent JIT SKUs to air bridge → T+7d: Reconcile demurrage & carrier SLA claim.",
            "Under DAP/CIP Duisburg, Seller shall ensure accurate SMGS waybill border-station coding and UN38.3 lithium safety declarations 72 hours prior to departure from Chengdu/Chongqing rail hub.",
            "在DAP/CIP杜伊斯堡贸易术语下，卖方须在成都或重庆班列发车前72小时提供准确的SMGS国际铁路运单过境站编码及UN38.3电池安全认证文件。"
        ),
        "Yantian-Rotterdam Ocean": (
            "Dưới FOB Yantian, rủi ro chuyển qua lan can tàu tại Diêm Điền nhưng người mua gánh cước tăng/WRS; dưới CIF, người mua vẫn chịu rủi ro hành trình trên biển từ lúc tàu chạy.",
            "Under FOB Yantian, risk passes on board at origin while freight surcharges fall on the buyer; under CIF, ocean delay risk after shipment still rests with the buyer.",
            ["Vận đơn Đường biển gốc / Telex Release B/L", "Tờ khai ENS (ICS2 R3) chi tiết HS 6 số", "Xác nhận khối lượng VGM (SOLAS)", "Hóa đơn thương mại & Packing List trùng trọng lượng"],
            "EUR 11,000 – 45,000 (phí rẽ nhánh Mũi Hảo Vọng, trễ ENS ICS2 & lưu container cảng Rotterdam)",
            "T+0h: Kiểm tra khớp HS 6 số & khối lượng VGM trước hạn SI/ICS2 24h → T+24h: Xác nhận số MRN ENS được chấp thuận trước khi tàu rời Yantian → T+72h: Cập nhật ETA mới do vòng Biển Đỏ/sửa đổi lịch kết nối → T+7d: Phát hành Telex Release & phân bổ xe tải drayage.",
            "T+0h: Cross-audit 6-digit HS codes & SOLAS VGM before SI cut-off → T+24h: Confirm ICS2 ENS acceptance MRN pre-sailing → T+72h: Re-forecast Cape diversion ETA → T+7d: Issue Telex Release and lock Rotterdam drayage slot.",
            "Seller warrants accurate 6-digit HS descriptions and shipper EORI/party details at least 48 hours before vessel load cut-off to prevent EU ICS2 Hold penalties.",
            "卖方保证在装船截止前48小时提供准确的6位HS编码与收发货人完整信息，以避免欧盟ICS2系统扣货风险。"
        ),
        "Ningbo-Hamburg FCL": (
            "Kiểm hóa X-quang, kiểm dịch ISPM-15 và phân mã HS tại Đức áp thuế bổ sung theo TARIC là rủi ro thuộc bên khai nhập khẩu (trừ khi chứng minh do lỗi đóng gói/mã sai từ nhà xuất khẩu).",
            "Customs X-ray checks, ISPM-15 wood holds, and TARIC HS reclassification fall on the EU importer unless contract clauses tie supplier indemnity to origin packaging faults.",
            ["Bill of Lading & Chứng nhận hun trùng IPPC ISPM-15", "Hồ sơ kỹ thuật CE Declaration of Conformity", "Tài liệu kỹ thuật đối chiếu Biểu thuế TARIC EU", "C/O hoặc Tuyên bố nhà cung cấp (Supplier Declaration)"],
            "EUR 9,000 – 36,000 (chi phí soi chiếu Zoll Hamburg, xử lý gỗ ISPM-15 & truy thu chênh lệch thuế TARIC)",
            "T+0h: Gửi ảnh dấu hun trùng IPPC trên từng pallet gỗ trước đóng container Ninh Ba → T+24h: Đính kèm Test Report CE/RoHS khớp đúng model số → T+72h: Phản hồi ngay yêu cầu thông tin kỹ thuật của Hải quan Đức (Zollamt) → T+7d: Hoàn tất tái xuất/xử lý nhiệt nếu pallet lỗi.",
            "T+0h: Capture legible IPPC ISPM-15 stamp photos pre-stuffing at Ningbo → T+24h: Pair CE/RoHS technical files to exact SKU labels → T+72h: File Zollamt TARIC technical defense → T+7d: Execute pallet heat-treatment compliance if flagged.",
            "All solid wood packaging materials supplied by Vendor shall strictly comply with IPPC ISPM-15 standards carrying legible bilateral heat-treatment stamps; any EU customs destruction cost resulting from non-compliant timber is borne by Vendor.",
            "卖方提供的所有实木包装必须严格符合IPPC ISPM-15标准并加盖清晰热处理标识；因木质包装不合格导致欧盟海关扣留或销毁费用由卖方承担。"
        ),
        "Huunghi-Haiphong Hybrid": (
            "Khi kết hợp đường bộ/sắt Trung–Việt (FCA Bằng Tường / CIF Hải Phòng) rồi xuất đi Châu Âu theo EVFTA, bắt buộc đáp ứng quy tắc Xuất xứ thuần túy hoặc Chuyển đổi mã HS (CTH/RVC).",
            "Sourcing Guangdong inputs under FCA Pingxiang / CIF Hai Phong for EU re-export requires strict EVFTA Rule-of-Origin cumulation or Value-Added compliance checks.",
            ["Tờ khai Hải quan xuất-nhập khẩu song phương", "C/O Form E (ACFTA) hoặc RCEP gốc đúng tên tàu/số xe", "Định mức gia công / Bill of Materials chứng minh xuất xứ EVFTA", "Phiếu kiểm tra & vận đơn feeder Hải Phòng -> EU"],
            "EUR 14,000 – 55,000 (tước bỏ ưu đãi thuế 0% EVFTA & điều tra chống lẩn tránh OLAF nếu sai quy tắc xuất xứ)",
            "T+0h: Chốt tờ khai biên giới Hữu Nghị–Bằng Tường & mã HS nguyên liệu đầu vào → T+24h: Đối chiếu tỷ lệ RVC/CTH trong BOM nhà máy Bắc Ninh/Hải Phòng → T+72h: Nộp hồ sơ cấp C/O Form E (nhập) & EUR.1/REX (xuất EU) → T+7d: Kiểm tra khớp ngày tàu feeder Hải Phòng – Rotterdam.",
            "T+0h: Lock Huu Nghi border customs input HS filings → T+24h: Validate EVFTA CTH/RVC calculation across Vietnam factory BOM → T+72h: Issue Form E import & EUR.1/REX export origin proof → T+7d: Verify Hai Phong feeder sailing schedule.",
            "Vendor shall retain complete Bill of Materials cost breakdowns and Form E origin ledgers for 5 years to support bilateral EVFTA / OLAF origin verification audits.",
            "卖方须妥善留存完整物料清单（BOM）成本明细及原产地证Form E底账资料至少五年，以配合EVFTA原产地核查与审计。"
        ),
        "EU CBAM Steel/Alu": (
            "Doanh nghiệp EU chịu nghĩa vụ kê khai & mua chứng chỉ CBAM (theo Quy định EU 2023/956); hợp đồng mua hàng từ TQ/VN phải ràng buộc điều khoản cung cấp dữ liệu phát thải thực tế có thẩm định.",
            "Legal CBAM reporting liability rests with the EU declarant importer; purchase agreements must contractually mandate accredited installation emissions data.",
            ["Mẫu Communication Template CBAM EU chính thức", "Số liệu phát thải trực tiếp & gián tiếp theo mã CN", "Báo cáo kiểm toán độc lập (Accredited Verifier Statement)", "Biên lai chứng nhận giá carbon đã nộp tại ETS Trung Quốc"],
            "EUR 18,000 – 75,000 (chênh lệch khi bị áp mức phát thải mặc định phạt cao của Ủy ban Châu Âu)",
            "T+0h: Kiểm tra mã hàng sắt thép/nhôm thuộc Phụ lục I Quy định (EU) 2023/956 → T+24h: Yêu cầu nhà máy Hà Bắc/Quảng Tây xuất bảng CBAM Scope 1+2 theo từng lò luyện → T+72h: Thuê bên thứ ba thẩm định số liệu thực tế tránh giá mặc định → T+7d: Nộp báo cáo quý trên EU CBAM Registry.",
            "T+0h: Screen iron/steel/aluminium EU CN codes under Annex I → T+24h: Collect installation-level Scope 1+2 CBAM template from mill → T+72h: Engage EU-accredited verifier to prevent punitive defaults → T+7d: Submit verified emissions in EU CBAM Registry.",
            "Vendor shall deliver verified installation-level Scope 1 and Scope 2 specific embedded emissions data in accordance with EU Regulation 2023/956 prior to shipment release.",
            "卖方须在发货放行前按欧盟(EU) 2023/956号CBAM法规要求，提供经认可核查机构认证的工厂实际直接与间接碳排放数据（Scope 1与Scope 2）。"
        ),
        "EUDR Traceability": (
            "Sản phẩm gỗ/cao su không được phép thông quan thị trường EU nếu thiếu Due Diligence Statement (DDS) gắn tọa độ đa giác lô đất không phá rừng sau 31/12/2020.",
            "Regulated timber, rubber, and packaging paper cannot legally enter the EU market without an EUDR Due Diligence Statement referencing pre-Dec-2020 polygon coordinates.",
            ["File GeoJSON tọa độ đa giác (Polygon) vùng trồng nguyên liệu", "Số tham chiếu EUDR Due Diligence Statement (DDS)", "Hóa đơn & chuỗi hành trình Chain-of-Custody nhà máy", "Cam kết nhà cung cấp không trộn lẫn nguồn gốc rủi ro cao"],
            "EUR 22,000 – 90,000 (lô hàng bị cấm nhập cảnh EU hoàn toàn + phạt tới 4% doanh thu EU theo luật EUDR)",
            "T+0h: Thu thập file GeoJSON tọa độ WGS84 6 chữ số thập phân (Polygon nếu lô >= 4 ha) → T+24h: Kiểm tra không giao cắt vùng mất rừng sau mốc 31/12/2020 → T+72h: Nộp DDS lên hệ thống EU TRACES nhận mã Reference & Verification → T+7d: Gắn mã DDS trực tiếp lên tờ khai hải quan EU.",
            "T+0h: Gather 6-decimal WGS84 GeoJSON polygons for every plot >= 4 ha → T+24h: Run satellite deforestation baseline screen post-Dec 31, 2020 → T+72h: Register DDS in EU TRACES to capture Reference ID → T+7d: Embed DDS code on import declaration.",
            "Vendor guarantees 100% deforestation-free origin post-31 December 2020 and provides validated WGS84 GeoJSON polygon boundaries for all EUDR-covered timber, paper, or rubber plots.",
            "卖方保证所供木材、橡胶及纸制品均符合2020年12月31日后零毁林标准，并随货提供合规WGS84地理坐标（GeoJSON多边形）及EUDR尽职调查支持文件。"
        ),
    }
    sc_enrich = {}
    for b in sc_blocks:
        im = re.search(r'id:\s*"(sc-\d+)"', b)
        lm = re.search(r'lane:\s*"([^"]+)"', b)
        tm = re.search(r'titleVi:\s*"([^"]+)"', b)
        tem = re.search(r'titleEn:\s*"([^"]+)"', b)
        if not im or not lm:
            continue
        sid, lane = im.group(1), lm.group(1)
        t_vi = tm.group(1) if tm else sid
        t_en = tem.group(1) if tem else sid
        inco_vi, inco_en, docs, impact_eur, sop_vi, sop_en, cl_en, cl_zh = LANE_DEEP.get(lane, LANE_DEEP["CR Express Rail"])
        sc_enrich[sid] = {
            "incotermsAndLiabilityVi": inco_vi,
            "incotermsAndLiabilityEn": inco_en,
            "documentChecklist": docs,
            "financialImpactRangeEur": impact_eur,
            "stepByStepSOPVi": sop_vi,
            "stepByStepSOPEn": sop_en,
            "clauseDraftingTemplateEn": cl_en,
            "clauseDraftingTemplateZh": cl_zh,
            "bilingualReplyTemplate": {
                "toFactoryZh": f"您好，关于【{t_vi}】一案，请贵司今日内将全套单证（含准确HS编码、合规证明及追踪编号）核对并回传给我司，以便顺利衔接欧洲清关与交付节点，谢谢！",
                "toEuHqEn": f"Update regarding {t_en} ({lane}): We have triggered supplier document verification, reviewed Incoterms risk transfer & EU compliance filings, and prepared contingency routing options to protect delivery timelines."
            }
        }

    # 7. Enrich 120 Quiz MCQs with Hanzi anchor badge
    qz_txt = pathlib.Path("src/data/v5/quizMasteryV5.js").read_text(encoding="utf-8")
    qz_blocks = re.split(r"\n\s*\{\s*\n", qz_txt)[1:]
    PILLAR_HANZI = {
        "geography_hydraulics": "地理水利",
        "history_dynasties": "历代沿革",
        "philosophy_architecture": "哲学建筑",
        "hsk_literature": "汉语文学",
        "cuisine_field_csc": "饮食留华",
        "laozihao_logistics": "老字号物流"
    }
    quiz_hanzi = {}
    for b in qz_blocks:
        im = re.search(r'id:\s*"(v5q-\d+)"', b)
        pm = re.search(r'pillar:\s*"([^"]+)"', b)
        qm = re.search(r'questionVi:\s*"([^"]+)"', b)
        if not im:
            continue
        qid = im.group(1)
        pillar = pm.group(1) if pm else "geography_hydraulics"
        q_vi = qm.group(1) if qm else ""
        cjk = re.findall(r"[\u4e00-\u9fff]{2,8}", q_vi)
        quiz_hanzi[qid] = cjk[0] if cjk else PILLAR_HANZI.get(pillar, "中国文化")

    payload = {
        "module7Lessons": MODULE7_LESSONS,
        "brandEnrich": brand_enrich,
        "giEnrich": gi_enrich,
        "lessonEnrich": lesson_enrich,
        "hskPairEnrich": hsk_pair_enrich,
        "tplEnrich": tpl_enrich,
        "wxEnrich": wx_enrich,
        "scEnrich": sc_enrich,
        "quizHanzi": quiz_hanzi
    }

    js_code = f"""// ============================================================================
// CHINESE CULTURE EXPLORER V5.0 — Deep Scholarly & Operational Enrichment Layer
// Auto-generated cleanly by scripts/enrich_v5_deep_detail.py
// Enriches all 6 V5 datasets with GB/T & EU-GI standards, Module 7 Lessons (42 total),
// Classical-Modern grammar breakdowns, Non-Clinical Wuxing links, EU-China-VN
// Incoterms/Compliance checklists + Bilingual replies, and Quiz Hanzi anchors.
// ============================================================================

(function () {{
  "use strict";

  var DATA = {json.dumps(payload, ensure_ascii=False, indent=2)};

  function applyBrandList(arr) {{
    if (!Array.isArray(arr)) return;
    arr.forEach(function (b) {{
      var extra = b && b.id ? DATA.brandEnrich[b.id] : null;
      if (!extra) return;
      Object.keys(extra).forEach(function (k) {{
        if (!b[k]) b[k] = extra[k];
      }});
    }});
  }}

  if (window.CCE_V5_LAOZIHAO && Array.isArray(window.CCE_V5_LAOZIHAO.brands)) {{
    applyBrandList(window.CCE_V5_LAOZIHAO.brands);
  }}
  if (window.CCE_V5_LAOZIHAO_EXPANDED) {{
    applyBrandList(window.CCE_V5_LAOZIHAO_EXPANDED.brands60);
    if (Array.isArray(window.CCE_V5_LAOZIHAO_EXPANDED.giAppellations12)) {{
      window.CCE_V5_LAOZIHAO_EXPANDED.giAppellations12.forEach(function (g) {{
        var ex = DATA.giEnrich[g.id];
        if (!ex) return;
        Object.keys(ex).forEach(function (k) {{ g[k] = ex[k]; }});
      }});
    }}
  }}

  if (window.CCE_V5_COURSE_LESSONS && Array.isArray(window.CCE_V5_COURSE_LESSONS.lessons36)) {{
    window.CCE_V5_COURSE_LESSONS.lessons36.forEach(function (ls) {{
      var ex = DATA.lessonEnrich[ls.id];
      if (!ex) return;
      Object.keys(ex).forEach(function (k) {{ ls[k] = ex[k]; }});
    }});
    var existingIds = {{}};
    window.CCE_V5_COURSE_LESSONS.lessons36.forEach(function (x) {{ existingIds[x.id] = true; }});
    DATA.module7Lessons.forEach(function (m7) {{
      if (!existingIds[m7.id]) window.CCE_V5_COURSE_LESSONS.lessons36.push(m7);
    }});
  }}

  if (window.CCE_V5_HSK_ESSAYS) {{
    if (Array.isArray(window.CCE_V5_HSK_ESSAYS.classicalModernPairs20)) {{
      window.CCE_V5_HSK_ESSAYS.classicalModernPairs20.forEach(function (cm) {{
        var ex = DATA.hskPairEnrich[cm.id];
        if (!ex) return;
        Object.keys(ex).forEach(function (k) {{ cm[k] = ex[k]; }});
      }});
    }}
    if (Array.isArray(window.CCE_V5_HSK_ESSAYS.hskArgumentTemplates15)) {{
      window.CCE_V5_HSK_ESSAYS.hskArgumentTemplates15.forEach(function (tp) {{
        var ex = DATA.tplEnrich[tp.id];
        if (!ex) return;
        Object.keys(ex).forEach(function (k) {{ tp[k] = ex[k]; }});
      }});
    }}
  }}

  if (window.CCE_V5_WUXING_CASEBOOK && Array.isArray(window.CCE_V5_WUXING_CASEBOOK.historicalCases16)) {{
    window.CCE_V5_WUXING_CASEBOOK.historicalCases16.forEach(function (wx) {{
      var ex = DATA.wxEnrich[wx.id];
      if (!ex) return;
      Object.keys(ex).forEach(function (k) {{ wx[k] = ex[k]; }});
    }});
  }}

  if (window.CCE_V5_SUPPLY_CASES && Array.isArray(window.CCE_V5_SUPPLY_CASES.cases24)) {{
    window.CCE_V5_SUPPLY_CASES.cases24.forEach(function (sc) {{
      var ex = DATA.scEnrich[sc.id];
      if (!ex) return;
      Object.keys(ex).forEach(function (k) {{ sc[k] = ex[k]; }});
    }});
  }}

  if (Array.isArray(window.CCE_V5_QUIZ)) {{
    window.CCE_V5_QUIZ.forEach(function (q) {{
      if (!q.hanzi && DATA.quizHanzi[q.id]) q.hanzi = DATA.quizHanzi[q.id];
    }});
  }}
}})();
"""

    OUT_FILE.write_text(js_code, encoding="utf-8")
    print(f"ENRICH_V5_COMPLETE: Wrote {OUT_FILE.as_posix()} ({len(js_code):,} chars) — "
          f"brands={len(brand_enrich)}, gi={len(gi_enrich)}, lessons_enriched={len(lesson_enrich)}+6(M7), "
          f"hsk={len(hsk_pair_enrich)}+{len(tpl_enrich)}, wuxing={len(wx_enrich)}, sc={len(sc_enrich)}, quiz={len(quiz_hanzi)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
