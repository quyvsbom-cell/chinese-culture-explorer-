"""V7 Pack 5 Builder: 50 B2B Terms (->300), 5 Trade Docs (->15), 10 Cases (->50), 6 Sino-Viet Wonders (->16), 12 CSC Unis (->36), 12 Interviews (->36), 8 HSR (->16), 16 Expeditions, 8 240h Concierge."""

from __future__ import annotations

from typing import Any

from .pack_utils import (
    PROVINCE_IMAGES,
    ensure_verified_img,
    load_external_pack,
    merge_positional_enrich,
    merge_unique_by_key,
    sanitize_recursive,
)


def _make_hotspots(specs: list[tuple[int, str, str, str, str, str]]) -> list[dict[str, Any]]:
    return [
        {
            "boxNum": bnum,
            "fieldNameEn": fen,
            "fieldNameZh": fzh,
            "fieldNameVi": fvi,
            "complianceRiskVi": rvi,
            "complianceRiskEn": ren,
            "auditTipVi": rvi,
            "auditTipEn": ren,
            "fieldEn": fen,
            "fieldZh": fzh,
            "fieldVi": fvi,
        }
        for bnum, fen, fzh, fvi, rvi, ren in specs
    ]


def build_pack5() -> dict[str, Any]:
    """Build enriched Pack 5 B2B trade, CSC, and world heritage tourism datasets."""
    ext = load_external_pack(5)

    # 50 B2B Terms (#251-#300)
    term_rows = [
        ("GACC Decree 248 Registration", "海关总署248号令注册", "Hǎiguān Zǒngshǔ èrsìbā hào lìng zhùcè", "Hải Quan Tổng Thự 248 Hiệu Lệnh", "Đăng ký cơ sở sản xuất thực phẩm xuất khẩu sang TQ (Lệnh 248)", "Hải quan GACC"),
        ("GACC Decree 249 Compliance", "海关总署249号令", "Hǎiguān Zǒngshǔ èrsìjiǔ hào lìng", "Hải Quan Tổng Thự 249 Hiệu Lệnh", "Quy định an toàn thực phẩm xuất nhập khẩu TQ (Lệnh 249)", "Hải quan GACC"),
        ("CIFER Single Window", "中国国际贸易单一窗口", "Zhōngguó Guójì Màoyì Dānyī Chuāngkǒu", "Đơn Nhất Song Khẩu", "Cổng Một cửa Đăng ký Doanh nghiệp Thực phẩm CIFER", "Hải quan GACC"),
        ("Registered Orchard Code", "注册果园编码", "zhùcè guǒyuán biānmǎ", "Chú Sách Quả Viên Biên Mã", "Mã vùng trồng nông sản xuất khẩu chính ngạch", "Kiểm dịch Thực vật"),
        ("Packing House Registry Code", "注册包装厂编码", "zhùcè bāozhuāngchǎng biānmǎ", "Chú Sách Bao Trang Xưởng", "Mã cơ sở đóng gói được GACC phê duyệt", "Kiểm dịch Thực vật"),
        ("Electronic Form E (E-CO)", "电子原产地证书Form E", "diànzǐ yuánchǎndìzhèngshū", "Điện Tử Nguyên Sản Địa Chứng", "Chứng nhận xuất xứ ACFTA bản điện tử quét QR", "Xuất xứ ACFTA"),
        ("Pingxiang Bonded Zone", "凭祥综合保税区", "Píngxiáng Zōnghé Bǎoshuìqū", "Bằng Tường Tổng Hợp Bảo Thuế Khu", "Khu Bảo thuế Tổng hợp Bằng Tường (cửa khẩu Hữu Nghị)", "Kho Ngoại Quan"),
        ("Youyiguan Smart Border Port", "友谊关智慧口岸", "Yǒuyìguān Zhìhuì Kǒu'àn", "Hữu Nghị Quan Trí Tuệ Khẩu Ngạn", "Cửa khẩu Thông minh Hữu Nghị – Hữu Nghị Quan không người lái", "Hậu cần Biên giới"),
        ("CIPS Cross-Border RMB", "人民币跨境支付系统", "Rénmínbì Kuàjìng Zhīfù Xìtǒng", "Hệ Thống Thanh Toán CIPS", "Hệ thống thanh toán bù trừ Nhân dân tệ xuyên biên giới", "Thanh toán Tài chính"),
        ("Usance Letter of Credit", "远期信用证", "yuǎnqī xìnyòngzhèng", "Viễn Kỳ Tín Dụng Chứng", "Thư tín dụng L/C trả chậm 30–180 ngày", "Thanh toán Tài chính"),
        ("OEM Process Contract", "代工生产合同", "dàigōng shēngchǎn hétong", "Đại Công Sinh Sản Hợp Đồng", "Hợp đồng gia công sản xuất theo thiết kế gốc OEM", "Pháp lý Thương mại"),
        ("ODM Design Agreement", "原始设计制造协议", "yuánshǐ shèjì zhìzào xiéyì", "Nguyên Thủy Thiết Kế Chế Tạo", "Thỏa thuận sản xuất kèm thiết kế ODM", "Pháp lý Thương mại"),
        ("NNN Confidentiality Covenant", "三不保密协议", "sān bù bǎomì xiéyì", "Tam Bất Bảo Mật Hiệp Nghị", "Thỏa thuận Không tiết lộ – Không sử dụng – Không luồn mặt", "Pháp lý Thương mại"),
        ("Tooling & Mold Ownership", "模具所有权归属", "mójù suǒyǒuquán guīshǔ", "Mô Cụ Sở Hữu Quyền", "Quyền sở hữu pháp lý đối với khuôn đúc đặt làm", "Pháp lý Thương mại"),
        ("CIETAC Arbitration Seat", "贸仲委仲裁裁决", "Màozhòngwěi zhòngcái cáijué", "Mậu Trọng Ủy Trọng Tài", "Phán quyết trọng tài Ủy ban Trọng tài Kinh tế Quốc tế TQ", "Trọng tài Quốc tế"),
        ("1958 New York Convention", "1958年纽约公约", "Niǔyuē Gōngyuē", "Nữu Ước Công Ước", "Công ước New York về công nhận phán quyết trọng tài nước ngoài", "Trọng tài Quốc tế"),
        ("Prevailing Contract Language", "合同优先解释语言", "hétong yōuxiān jiěshì yǔyán", "Ưu Tiên Giải Thích Ngôn Ngữ", "Điều khoản chọn ngôn ngữ ưu tiên khi bản dịch vênh nghĩa", "Pháp lý Thương mại"),
        ("GB 7718 Nutrition Label", "GB 7718预包装食品标签", "yùbāozhuāng shípǐn biāoqiān", "Quốc Tiêu Thực Phẩm Nhãn", "Chuẩn Quốc tiêu TQ bắt buộc về nhãn thực phẩm đóng gói", "Tiêu chuẩn GB"),
        ("LFP Cathode Battery Pack", "磷酸铁锂电池包", "lín suān tiě lǐ diànchíbāo", "Lân Toan Thiết Lý Điện Trì", "Cụm pin xe điện Lithium Sắt Phốt phát (NEV)", "Chuỗi Cung Ứng Xanh"),
        ("UN38.3 Battery Test Report", "锂电池UN38.3认证", "lǐdiànchí rènzhèng", "Lý Điện Trì Nhận Chứng", "Chứng nhận an toàn vận tải hàng không/biển cho pin Lithium", "Vận tải Nguy hiểm"),
        ("Lach Huyen Deep-Water Berth", "海防沥县深水港", "Hǎifáng Lìxiàn Shēnshuǐgǎng", "Hải Phòng Lịch Huyện Cảng", "Cảng nước sâu Lạch Huyện đón tàu mẹ đi thẳng", "Cảng Biển Vận Tải"),
        ("Qinzhou Automated Terminal", "钦州港自动化码头", "Qīnzhōu Gǎng Zìdònghuà Mǎtóu", "Khâm Châu Cảng Tự Động", "Bến cảng tự động Khâm Châu trên Hành lang Đất–Biển Tây", "Cảng Biển Vận Tải"),
        ("Direct Cold-Chain Reefer", "全程冷链集装箱", "quánchéng lěngliàn jízhuāngxiāng", "Toàn Trình Lãnh Liên", "Container lạnh kiểm soát nhiệt độ liên tục từ vườn tới chợ", "Kho Lạnh Nông Sản"),
        ("Quarantine Treatment Fumigation", "检疫熏蒸处理证明", "jiǎnyì xūnzhēng chǔlǐ zhèngmíng", "Kiểm Dịch Huân Chưng", "Chứng thư xử lý hun trùng gỗ pallet & trái cây xuất khẩu", "Kiểm dịch Thực vật"),
        ("Cross-Border Livestream", "跨境电商直播带货", "kuàjìng diànshāng zhíbò", "Khoái Cảnh Điện Thương Trực Bá", "Bán hàng trực tiếp qua nền tảng TMĐT xuyên biên giới", "Kinh tế Số B2B"),
        ("Customs Trademark Recordal", "海关知识产权备案", "hǎiguān zhīshìchǎnquán bèi'àn", "Hải Quan Tri Thức Sản Quyền", "Đăng ký bảo hộ nhãn hiệu tại Tổng cục Hải quan chống hàng nhái", "Sở Hữu Trí Tuệ"),
        ("Pre-Shipment Video Audit", "装柜前视频验货", "zhuāngguì qián shìpín yànhuò", "Trang Quỹ Tiền Thị Tần Nghiệm", "Kiểm tra số lô, độ ẩm và tem nhãn qua video trước đóng công", "Kiểm Định AQL"),
        ("HS Code 6-8 Digit Alignment", "税则号列精准匹配", "shuìzé hàoliè pǐpèi", "Thuế Tắc Hào Liệt", "Đối khớp mã HS 6–8 số giữa Việt Nam, ASEAN và GACC", "Hải quan GACC"),
        ("Detention & Demurrage Cap", "滞箱与滞港费上限", "zhìxiāng yǔ zhìgǎngfèi", "Trệ Tương Trệ Cảng Phí", "Thỏa thuận giới hạn ngày miễn lưu container và lưu bãi cảng", "Hậu cần Biên giới"),
        ("Tax Refund at Border/Port", "出口退税核销单", "chūkǒu tuìshuì héxiāodān", "Xuất Khẩu Thoái Thuế Đơn", "Hồ sơ hoàn thuế giá trị gia tăng hàng xuất khẩu", "Thuế & Tài Chính"),
        ("VAT Special Fapiao Invoice", "增值税专用发票", "zēngzhíshuì zhuānyòng fāpiào", "Tăng Trị Thuế Chuyên Dụng Phát Phiếu", "Hóa đơn GTGT đặc biệt cho giao dịch nội địa công ty TQ", "Thuế & Tài Chính"),
        ("Ex-Works vs FCA Rail", "出厂价与铁路交货价", "chūchǎngjià yǔ tiělù jiāohuò", "Xuất Xưởng vs Đường Sắt Giao", "Phân biệt rủi ro giao hàng tại xưởng và tại ga liên vận", "Incoterms 2020"),
        ("Carbon Footprint Declaration", "产品碳足迹声明", "chǎnpǐn tànzújì shēngmíng", "Sản Phẩm Thán Túc Tích", "Khai báo dấu chân carbon sản phẩm dệt may, thép, pin xuất EU", "Chuỗi Cung Ứng Xanh"),
        ("ESG Factory Social Audit", "工厂社会责任验厂", "shèhuì zérèn yànchǎng", "Xã Hội Trách Nhiệm Nghiệm Xưởng", "Đánh giá tuân thủ lao động, môi trường BSCI / SA8000", "Kiểm Định AQL"),
        ("Back-to-Back C/O Issuing", "背对背原产地证", "bèi duì bèi yuánchǎndìzhèng", "Bối Đối Bối Nguyên Sản Địa", "Cấp chứng nhận xuất xứ giáp lưng khi hàng trung chuyển RCEP", "Xuất xứ ACFTA"),
        ("RCEP Cumulative Origin", "RCEP原产地累积规则", "yuánchǎndì lěijī guīzé", "Lũy Tích Xuất Xứ RCEP", "Cộng gộp hàm lượng nguyên liệu nội khối 15 nước RCEP", "Xuất xứ ACFTA"),
        ("Air FreightULD Consolidation", "航空集装器拼板", "hángkōng jízhāngqì pīnbǎn", "Hàng Không Bính Bản", "Gom hàng mẫu công nghệ cao đi đường bay Shenzhen–Nội Bài", "Vận tải Hàng không"),
        ("Intermodal Rail-Sea Corridor", "西部陆海新通道铁海联运", "lùhǎi xīntōngdào tiěhǎi liányùn", "Thiết Hải Liên Vận", "Kết nối đường sắt liên vận Tây Nam với cảng biển ASEAN", "Cảng Biển Vận Tải"),
        ("Bonded Display & Trading", "保税展示交易机制", "bǎoshuì zhǎnshì jiāoyì", "Bảo Thuế Triển Thị Giao Dịch", "Trưng bày hàng nhập khẩu mẫu trong khu bảo thuế chưa nộp thuế", "Kho Ngoại Quan"),
        ("Third-Party Lab COA", "第三方检测成分分析单", "dīsānfāng jiǎncè bàogào", "Đệ Tam Phương Kiểm Trắc COA", "Chứng thư phân tích hóa lý từ SGS / Intertek / TÜV", "Kiểm Định AQL"),
        ("Cold-Treatment Protocol", "冷处理检疫规程", "lěngchǔlǐ jiǎnyì guīchéng", "Lãnh Xử Lý Quy Trình", "Xử lý hạ nhiệt sâu giữ lạnh liên tục diệt ấu trùng trái cây", "Kiểm dịch Thực vật"),
        ("Anti-Tamper RFID Seal", "电子防伪智能铅封", "diànzǐ zhìnéng qiānfēng", "Điện Tử Trí Năng Duyên Phong", "Kẹp chì container gắn chip RFID định vị GPS xuyên biên giới", "Hậu cần Biên giới"),
        ("Liquidated Damages Cap", "逾期违约金封顶比例", "yúqī wéiyuējīn fēngdǐng", "Du Kỳ Vi Ước Kim", "Điều khoản phạt giao trễ theo tỷ lệ tuần và mức trần tối đa", "Pháp lý Thương mại"),
        ("Force Majeure Border Notice", "口岸拥堵不可抗力通知", "kǒu'àn bùkě kànglì tōngzhī", "Bất Khả Kháng Lực Thông Tri", "Thông báo chính thức trường hợp bất khả kháng tại cửa khẩu", "Pháp lý Thương mại"),
        ("Dual-Use Export Licensing", "两用物项出口许可", "liǎngyòng wùxiàng chūkǒu xǔkě", "Lưỡng Dụng Vật Hạng", "Kiểm soát giấy phép xuất khẩu linh kiện công nghệ lưỡng dụng", "Hải quan GACC"),
        ("Authorized Economic Operator", "AEO海关高级认证企业", "hǎiguān gāojí rènzhèng qǐyè", "Doanh Nghiệp Ưu Tiên AEO", "Chứng nhận doanh nghiệp ưu tiên được miễn giảm kiểm hóa", "Hải quan GACC"),
        ("Sample Counter-Signature", "封样签字确认制度", "fēngyàng qiānzì quèrèn", "Phong Dạng Thiêm Tự", "Lưu mẫu chuẩn ký giáp lai giữa bên đặt hàng và xưởng sản xuất", "Kiểm Định AQL"),
        ("Freight Forwarder House B/L", "货代分提单 HBL", "huòdài fēntídān", "Hóa Đại Phân Đề Đơn", "Vận đơn do đơn vị giao nhận phát hành cho hàng lẻ LCL", "Cảng Biển Vận Tải"),
        ("ASEAN-China Fast Track", "农产品绿色通道优先通关", "nóngchǎnpǐn lǜsè tōngdào", "Lục Sắc Thông Đạo", "Luồng xanh ưu tiên giải phóng xe container trái cây tươi trong ngày", "Hậu cần Biên giới"),
        ("Electronic Signature Trust", "跨境电子签章互认", "kuàjìng diànzǐ qiānzhāng hùrèn", "Điện Tử Thiêm Chương Hộ Nhận", "Công nhận giá trị chữ ký số hợp đồng B2B trên nền tảng số", "Kinh tế Số B2B"),
    ]
    _CAT_EN_MAP = {
        "Hải quan GACC": "GACC Customs & Registration",
        "Kiểm dịch Thực vật": "Phytosanitary Quarantine",
        "Xuất xứ ACFTA": "ACFTA / RCEP Origin Rules",
        "Kho Ngoại Quan": "Bonded Warehouse Fulfillment",
        "Hậu cần Biên giới": "Cross-Border Logistics",
        "Thanh toán Tài chính": "Cross-Border Banking & Settlement",
        "Pháp lý Thương mại": "B2B Contract Law & IP",
        "Trọng tài Quốc tế": "International Arbitration",
        "Tiêu chuẩn GB": "GB Labeling Compliance",
        "Chuỗi Cung Ứng Xanh": "Green EV & Carbon Supply Chain",
        "Vận tải Nguy hiểm": "Dangerous Goods Transport",
        "Cảng Biển Vận Tải": "Deep-Water Maritime Freight",
        "Kho Lạnh Nông Sản": "Cold-Chain Agro Logistics",
        "Kinh tế Số B2B": "Digital E-Commerce & Signatures",
        "Sở Hữu Trí Tuệ": "Customs IP Enforcement",
        "Kiểm Định AQL": "AQL Quality Assurance",
        "Thuế & Tài Chính": "VAT Export Rebate & Tax",
        "Incoterms 2020": "Incoterms 2020 Risk Transfer",
        "Vận tải Hàng không": "Air Freight Consolidation",
    }

    trade_terms_50 = [
        {
            "id": f"b2b-v7-{idx:02d}",
            "en": en,
            "zh": zh,
            "pinyin": py,
            "hanViet": hv,
            "vi": vi,
            "category": cat,
            "v6Tag": "B2B_TRADE",
            "contextVi": f"Dùng trong hồ sơ {cat.lower()} khi làm việc với đối tác và cơ quan hải quan.",
            "contextEn": f"Used in {_CAT_EN_MAP.get(cat, 'cross-border')} documentation between importers, factories, and customs brokers.",
        }
        for idx, (en, zh, py, hv, vi, cat) in enumerate(term_rows, start=1)
    ]

    # 5 Annotated Trade Docs (#11-#15)
    trade_docs_5 = [
        {
            "id": "doc-v7-gacc-cifer",
            "titleVi": "Hồ sơ Đăng ký Doanh nghiệp Nông–Thực phẩm GACC (CIFER Lệnh 248)",
            "titleEn": "GACC Foreign Food Manufacturer Registration (CIFER Decree 248)",
            "titleZh": "海关总署进口食品境外生产企业注册申请表",
            "issuerRoleVi": "Tổng cục Hải quan TQ (GACC) & Cơ quan Thẩm quyền Nước Xuất khẩu",
            "hotspots": _make_hotspots([
                (1, "18-Category Classification", "18类官方推荐品类", "Phân loại 18 nhóm thực phẩm cần Thư giới thiệu Nhà nước", "Gửi sai kênh tự đăng ký cho nhóm thịt/thủy sản/tổ yến sẽ bị hệ thống CIFER tự động bác bỏ.", "Misfiling mandatory-recommendation products under self-registration gets rejected automatically."),
                (2, "Assigned GACC 18-Digit Code", "18位在华注册编号", "Mã đăng ký 18 ký tự in trên bao bì bán lẻ", "Số mã phải in TRỰC TIẾP lên bao bì trong và bao bì ngoài trước khi tàu rời cảng.", "Code must appear printed—not loose-stickered—on inner and outer cartons."),
                (3, "Orchard & Packing House Link", "果园与包装厂双重匹配", "Khớp cặp Mã vùng trồng & Mã cơ sở đóng gói", "Chệch 1 ký tự giữa danh sách CIFER và Chứng thư Kiểm dịch dẫn tới giữ công tại Bằng Tường.", "Single-digit orchard code drift halts reefer clearance at Pingxiang border."),
                (4, "GB 7718 Ingredient Table", "中文营养成分标签", "Nhãn tiếng Trung giản thể theo chuẩn GB 7718", "Phải liệt kê phụ gia đúng danh mục GB 2760 của Trung Quốc trước khi thông quan.", "Additives must conform strictly to China GB 2760 permissible lists."),
                (5, "Valid Period & Renewal Window", "五年有效期与延续期限", "Thời hạn hiệu lực 5 năm & cửa sổ gia hạn 3–6 tháng trước khi hết hạn", "Quên gia hạn đúng cửa sổ 3–6 tháng sẽ mất mã vĩnh viễn và phải xin lại từ đầu.", "Missing the 3–6 month renewal window voids the registration permanently."),
                (6, "Inspection Authority Stamp", "主管当局推荐盖章", "Xác nhận cơ quan kiểm dịch & an toàn thực phẩm", "Chứng thư kiểm dịch điện tử phải gửi nối thẳng qua cổng một cửa hai chính phủ.", "E-certificates transmit directly between bilateral government portals."),
            ]),
            "euVietnamChinaWorkflowVi": "Nông trường chuẩn hóa -> Thẩm định trong nước -> Phê duyệt GACC CIFER -> In mã 18 số lên thùng -> Thông quan Bằng Tường / Khâm Châu.",
            "rejectionCaseStudyVi": "Lỗi phổ biến: Dán tem giấy đè lên bao bì đối với sản phẩm nhóm rủi ro cao vốn bắt buộc phải in trực tiếp từ nhà máy.",
        },
        {
            "id": "doc-v7-oem-nnn",
            "titleVi": "Hợp đồng Gia công Chế tạo OEM/ODM & Thỏa thuận NNN Khuôn mẫu",
            "titleEn": "Bilingual OEM Manufacturing Agreement & NNN Tooling Escrow",
            "titleZh": "中越英涉外OEM代工暨三不保密模具归属协议",
            "issuerRoleVi": "Phòng Pháp chế Doanh nghiệp Bên Đặt hàng & Nhà máy Gia công",
            "hotspots": _make_hotspots([
                (1, "Prevailing Language Clause", "合同优先解释文本", "Điều khoản ngôn ngữ ưu tiên giải thích pháp lý", "Luôn chọn một ngôn ngữ có hiệu lực tối cao kèm bản đối chiếu chuẩn xác.", "Specify single prevailing legal language alongside certified translation."),
                (2, "Tooling Legal Ownership", "定制模具所有权", "Quyền sở hữu pháp lý bộ khuôn đúc đặt làm riêng", "Ghi rõ nhà máy chỉ giữ hộ, không được bán mẫu dư hoặc giữ làm con tin khi kết thúc hợp đồng.", "State buyer holds sole title to paid tooling and restricts unauthorized over-runs."),
                (3, "NNN Covenants (Not NDA)", "三不条款：不披露不用不绕开", "Cam kết Không tiết lộ – Không tự dùng – Không luồn qua mặt", "NDA kiểu Mỹ khó thi hành nếu nhà máy bán sản phẩm tương tự trực tiếp cho khách thứ ba.", "NNN explicitly forbids the factory from competing using your product specs."),
                (4, "AQL 2.5 Pre-Shipment Release", "装船前AQL 2.5验货放行条件", "Điều kiện đạt kiểm định AQL 2.5 mới được giải ngân cọc cuối", "Thanh toán nốt 70% sau khi bên thứ ba xác nhận PASS thay vì chuyển tiền mù.", "Tie final 70% balance release directly to independent PASS inspection certificate."),
                (5, "Liquidated Late Penalties", "交期延误违约金", "Điều khoản phạt chậm tiến độ giao hàng (0.5%–1%/tuần)", "Phạt cụ thể theo tuần giúp nhà máy ưu tiên chuyền sản xuất cho đơn hàng của bạn.", "Escalating weekly liquidated damages prioritize your production line slot."),
                (6, "CIETAC / VIAC Arbitration", "涉外商事仲裁管辖", "Điều khoản Trọng tài thương mại theo Công ước New York 1958", "Trọng tài quốc tế thi hành dễ hơn nhiều so với kiện tại tòa án địa phương.", "Arbitration under 1958 NY Convention simplifies cross-border award enforcement."),
            ]),
            "euVietnamChinaWorkflowVi": "Ký NNN trước khi gửi bản vẽ CAD -> Ký OEM có Tooling Ownership -> Chạy mẫu PP -> Đạt AQL 2.5 -> Giải ngân qua L/C hoặc T/T.",
            "rejectionCaseStudyVi": "Bài học đắt giá: Gửi file thiết kế cho 5 xưởng báo giá trước khi ký NNN dẫn đến sản phẩm xuất hiện trên sàn TMĐT trước khi bạn ra mắt.",
        },
        {
            "id": "doc-v7-phyto-cert",
            "titleVi": "Chứng thư Kiểm dịch Thực vật & Khai báo Vùng Trồng Nông sản",
            "titleEn": "Phytosanitary Certificate & Orchard-Traceability Manifest",
            "titleZh": "植物检疫证书及输华果园溯源清单",
            "issuerRoleVi": "Cục Bảo vệ Thực vật Nước Xuất khẩu / Giám định GACC Cửa khẩu",
            "hotspots": _make_hotspots([
                (1, "Botanical Latin Name", "植物学拉丁学名", "Tên khoa học Latin của loài thực vật/nông sản", "Sai khác tên khoa học với nghị định thư song phương sẽ bị trả container tại cửa khẩu.", "Scientific Latin species must match bilateral import protocol word for word."),
                (2, "Registered Orchard & Packhouse", "批准果园与包装厂码", "Cặp mã PUC (Vùng trồng) & PHC (Đóng gói)", "Hải quan quét QR trên thùng để đối chiếu thời gian thực với danh sách được GACC cấp phép.", "Border officers scan carton QR codes directly against active GACC lists."),
                (3, "No Soil & Pest Zero-Tolerance", "无土壤与重点检疫有害生物", "Xác nhận sạch đất, không rệp sáp/ruồi đục quả", "Một vết đất bám trên rễ/cuống hoặc rệp sáp sống có thể khiến cả lô bị hun trùng tái xuất.", "Even trace soil or live scale insects triggers mandatory fumigation or return."),
                (4, "ISPM-15 Pallet Heat Mark", "ISPM-15木质包装IPPC标识", "Dấu nhiệt hun trùng gỗ pallet không dùng gỗ tươi", "Tất cả pallet kê thùng sầu riêng hoặc máy móc bắt buộc đóng dấu HT/MB rõ nét.", "Every wooden crate/pallet requires legible IPPC HT or MB stamp."),
                (5, "Reefer Temperature Log", "冷链温度持续记录", "Nhật ký nhiệt độ xe lạnh xuyên suốt hành trình", "Gắn thiết bị ghi nhiệt độ USB giúp chứng minh hàng không bị sốc nhiệt khi khiếu nại bảo hiểm.", "USB temperature logger proves unbroken cold-chain integrity."),
                (6, "Border Customs Port Match", "指定进境口岸名称", "Tên cửa khẩu nhập cảnh được chỉ định tiếp nhận trái cây", "Không phải mọi cửa khẩu đều có phòng kiểm dịch trái cây — phải đi đúng cảng chỉ định.", "Verify designated fruit-inspection port approval before dispatch."),
            ]),
            "euVietnamChinaWorkflowVi": "Thu hoạch đúng vùng PUC -> Rửa xịt áp lực -> Đóng thùng in mã PHC -> Cấp Phyto & E-CO Form E -> Luồng xanh Hữu Nghị Quan.",
            "rejectionCaseStudyVi": "Lỗi phổ biến: Thu mua trôi nổi bên ngoài nhưng mượn mã vùng trồng vượt quá sản lượng tối đa trên ha sẽ bị GACC khóa mã ngay lập tức.",
        },
        {
            "id": "doc-v7-usance-lc",
            "titleVi": "Tín dụng Thư Trả Chậm (Usance L/C theo chuẩn UCP 600)",
            "titleEn": "Irrevocable Usance Letter of Credit (ICC UCP 600)",
            "titleZh": "不可撤销远期跟单信用证 (UCP 600)",
            "issuerRoleVi": "Ngân hàng Phát hành (Issuing Bank) & Ngân hàng Thông báo (Advising Bank)",
            "hotspots": _make_hotspots([
                (1, "Field 42C Usance Tenor", "42C远期汇票期限条款", "Trường 42C quy định kỳ hạn trả chậm (90/120 ngày từ B/L)", "Cho phép bên nhập khẩu có dòng tiền bán hàng rồi mới đến hạn thanh toán máy móc/vật tư.", "Gives importer 90–120 days working capital float post-shipment."),
                (2, "Field 44C Latest Shipment", "44C最迟装运日", "Trường 44C Ngày giao hàng chậm nhất lên tàu", "Trễ 1 ngày so với 44C sẽ bị ngân hàng trừ phí bất hợp lệ (Discrepancy Fee).", "Even a 1-day shipment delay creates documentary discrepancy."),
                (3, "Field 46A Documents List", "46A严格单据清单", "Danh mục 100% chứng từ xuất trình (Invoice, PKL, B/L, Form E, Inspection)", "Phải khớp từng dấu chấm phẩy tên công ty và mô tả hàng hóa trong trường 45A.", "Exact textual mirror matching across Invoice, B/L, and Packing List."),
                (4, "Field 47A Soft Clauses Trap", "47A软条款风险识别", "Cảnh giác bẫy 'Điều khoản mềm' (chỉ trả tiền nếu bên mua ký nghiệm thu)", "Tránh bẫy người mua câu giờ không chịu ký biên bản để chặn ngân hàng thanh toán.", "Reject unilateral buyer-signoff soft clauses; use neutral SGS certificates."),
                (5, "Presentation Window 21 Days", "48交单期限规则", "Thời hạn nộp bộ chứng từ trong 21 ngày sau ngày B/L", "Chuẩn bị Form E và B/L kịp trước hạn chót xuất trình tại ngân hàng thương lượng.", "Dispatch original bank pack early enough to meet the 21-day window."),
                (6, "Confirming Bank Shield", "保兑行增信保障", "Ngân hàng xác nhận thanh toán bổ sung nếu cần an toàn tối đa", "Đảm bảo an toàn thanh toán tuyệt đối ngay cả khi ngân hàng nhỏ ở vùng xa chậm xử lý.", "Confirmed L/C eliminates issuing-bank credit delay risk."),
            ]),
            "euVietnamChinaWorkflowVi": "Mở L/C nháp -> Hai bên duyệt bỏ Soft Clauses -> Giao hàng -> Xuất trình bộ chứng từ sạch -> Chấp nhận hối phiếu & Thanh toán đúng hạn.",
            "rejectionCaseStudyVi": "Lỗi phổ biến: Viết sai 1 chữ cái địa chỉ Notify Party trên B/L so với SWIFT MT700 làm tắc thanh toán mất hàng tuần.",
        },
        {
            "id": "doc-v7-cips-settlement",
            "titleVi": "Biên bản Đối soát Thanh toán Xuyên Biên Giới CIPS / SWIFT (CNH–VND)",
            "titleEn": "Cross-Border Settlement & FX Reconciliation Note (CIPS / SWIFT)",
            "titleZh": "跨境人民币 CIPS / 国际电汇双边对账凭证",
            "issuerRoleVi": "Ngân hàng Thương mại Thanh toán Đối ngoại Hai Nước",
            "hotspots": _make_hotspots([
                (1, "CIPS Bank Code vs BIC", "CIPS行号与SWIFT BIC代码", "Mã ngân hàng thanh toán CIPS & mã SWIFT quốc tế", "Điền chuẩn mã ngân hàng đối tác tránh tiền bị treo ở ngân hàng trung gian 5 ngày.", "Verify CIPS participant ID or SWIFT BIC to bypass intermediary bank holds."),
                (2, "Invoice-Customs Value Match", "合同发票与报关金额核销", "Đối khớp giá trị Tờ khai hải quan với lệnh chuyển tiền", "Mọi lệnh chuyển tiền B2B hợp pháp phải khớp với số Tờ khai Hải quan & Invoice.", "Regulatory foreign-exchange audit checks 1:1 customs declaration vs wire amount."),
                (3, "SHA vs OUR Bank Fees", "银行手续费承担方 (OUR/SHA)", "Quy định bên chịu phí chuyển tiền (OUR / SHA / BEN)", "Ghi rõ SHA hoặc OUR trong hợp đồng để nhà máy không kêu thiếu vài chục USD.", "Clarify OUR vs SHA fee coding upfront so net received invoice stays exact."),
                (4, "Hedging FX Lock Window", "远期锁汇与本币结算", "Khóa tỷ giá kỳ hạn giảm biến động VND / CNH / EUR", "Kết hợp giao dịch bản tệ trực tiếp cắt giảm chi phí chênh lệch 2 lần đổi qua USD.", "Direct CNH/VND bank settlement lowers dual-conversion FX slippage."),
                (5, "Beneficiary Exact Account Title", "收款人企业全称", "Tên tài khoản thụ hưởng pháp nhân chính thức (KHÔNG chuyển tài khoản cá nhân)", "Bắt buộc chuyển vào tài khoản công ty đúng tên nhà cung cấp để được hoàn thuế GTGT.", "Always remit to verified corporate account matching tax ID—never personal wallets."),
                (6, "Trade Audit Archive 10 Years", "外贸单证十年合规归档", "Lưu trữ biên bản điện chuyển tiền kèm tờ khai phục vụ thanh tra thuế", "Lưu bộ chứng từ điện tử đồng bộ để hoàn thuế xuất khẩu thuận lợi.", "Archive SWIFT/CIPS MT103 confirmations together with customs release sheets."),
            ]),
            "euVietnamChinaWorkflowVi": "Hoàn tất tờ khai xuất/nhập -> Kiểm tra số tài khoản công ty -> Lệnh chuyển tiền CIPS/SWIFT -> Nhận MT103 đối soát -> Giải phóng Original B/L.",
            "rejectionCaseStudyVi": "Lỗi phổ biến: Đối tác gửi email giả mạo đổi sang tài khoản cá nhân — BẮT BUỘC gọi video xác minh lại khi đổi số tài khoản.",
        },
    ]
    for d in trade_docs_5:
        d["nameVi"] = d["titleVi"]
        d["nameEn"] = d["titleEn"]
        d["nameZh"] = d["titleZh"]
        d["issuerVi"] = d["issuerRoleVi"]

    # 10 Supply Chain Cases (#41-#50)
    case_specs = [
        ("v7-sc-41", "Lạng Sơn – Bằng Tường (Đường bộ Lạnh)", "Xử Lý Nguy Cơ Ùn Tắc Sầu Riêng Tại Cửa Khẩu Hữu Nghị Mùa Cao Điểm", "Peak-Season Durian Border Queue Mitigation at Huu Nghi", "友谊关旺季榴莲冷链通关排期", "Hàng tươi sống tụt độ lạnh hoặc phát hiện rệp sáp khi chờ kiểm dịch lâu.", "Áp dụng đặt lịch thông quan trước trên cổng Cửa khẩu Thông minh, chuyển 30% sản lượng sang đường sắt lạnh Đông Đăng–Nam Ninh và xét nghiệm rệp tại đóng gói.", "FCA Lạng Sơn vs DAP Bằng Tường: phân định rõ rủi ro sau khi xe qua vạch phân giới.", "FCA Border vs DAP Pingxiang risk transfer audit.", ["Phytosanitary Cert", "GACC Orchard Code", "E-CO Form E", "Reefer Temp Log"], "Kê khai từ xa trước 24h -> Kiểm tra sạch rệp tại kho -> Phối hợp tuyến sắt liên vận.", "Pre-clear 24h prior -> Pre-wash orchard check -> Split quota to cold rail.", "请提前安排预申报并优先走农产品绿色通道。", "Pre-booked smart border slots & rail diversion save peak-season perishables."),
        ("v7-sc-42", "Thâm Quyến – Hải Phòng (Đơn hàng OEM)", "Ngăn Chặn Nhà Máy Tự Ý Sao Chép Bán Phá Giá Mẫu Thiết Kế Mới", "Enforcing NNN Clauses & Tooling Title on Custom Electronics OEM", "OEM定制模具防仿冒协议实务", "Sử dụng NDA phương Tây quá chung chung, không ràng buộc quyền sở hữu khuôn mẫu.", "Chuyển hợp đồng sang khuôn khổ NNN tiếng Trung–Việt–Anh hợp pháp, đóng dấu mộc công ty (Công chương) trên từng trang và giữ quyền sở hữu khuôn riêng.", "EXW/FOB Thâm Quyến kèm phụ lục IP Tooling Ownership trị giá 100% giá khuôn.", "FOB Shenzhen paired with legally notarized tooling escrow.", ["Signed NNN Agreement", "Stamped Tooling List", "CAD Spec Annex", "CIETAC Clause"], "Đăng ký bản quyền tại Hải quan TQ -> Ký NNN -> Đóng dấu công chương -> Giữ mã firmware.", "Record IP with China Customs -> Execute NNN -> Stamp corporate chop -> Gate firmware.", "请在每页加盖贵司正式公章并确认模具产权归属我方。", "Chopped NNN covenants and Customs IP recordation stop unauthorized parallel sales."),
        ("v7-sc-43", "Thượng Hải – Lạch Huyện (Máy móc L/C)", "Phát Hiện Điều Khoản Mềm Trên L/C Nhập Khẩu Dây Chuyền Sản Xuất", "Neutralizing Soft Clauses in Machinery Usance L/C Letters", "信用证软条款识别与修改", "Trường 47A cài điều kiện ngân hàng chỉ trả tiền khi có chữ ký nghiệm thu đơn phương của người mua.", "Đàm phán sửa SWIFT MT700: thay chữ ký đơn phương bằng Chứng thư kiểm định độc lập SGS/Intertek tại cảng xếp hàng trước khi tàu chạy.", "CIF Hải Phòng / Usance L/C 90 ngày theo chuẩn UCP 600.", "CIF Haiphong / 90-day UCP 600 compliant Usance L/C.", ["Draft SWIFT MT700", "Amendment Advice", "SGS Report", "Clean On Board B/L"], "Soát từng câu trường 47A -> Yêu cầu tu chỉnh L/C trước sản xuất -> Dùng SGS trung lập.", "Audit 47A lines -> Issue MT707 amendment -> Mandate independent SGS verification.", "请删除单方面买方签字放款条款，改为SGS装船前检验证书。", "Never commence fabrication on an L/C containing unilateral buyer-controlled payment triggers."),
        ("v7-sc-44", "Tô Châu – EU / Việt Nam (Dệt may RCEP)", "Sai Lệch Quy Tắc Cộng Gộp Xuất Xứ Khi Dùng Vải Lụa Nhập Nhiều Nguồn", "Correcting RCEP & EVFTA Fabric Cumulation Origin Calculation", "RCEP原产地累积计算合规", "Tưởng hàng may tại VN tự động hưởng Form E/EUR.1 dù dùng sợi chưa đạt tiêu chuẩn xuất xứ.", "Áp dụng công thức cộng gộp RCEP (RVC >= 40%) hoặc quy tắc 'Từ sợi trở đi' (EVFTA) với bảng kê nguyên phụ liệu chứng minh rõ xuất xứ.", "FOB Hải Phòng / Cảng Cát Lái hưởng thuế suất ưu đãi 0% khi chuẩn nguồn sợi.", "FOB Haiphong / Cat Lai enjoying 0% preferential tariff once fabric origin passes.", ["RCEP Origin Sheet", "Spinner Invoice", "Bill of Materials", "E-CO QR"], "Kiểm tra nguồn sợi trước chốt vải -> Lập bảng tính RVC >= 40% -> Nộp xin E-CO.", "Audit yarn mills upfront -> Compute RVC >= 40% BOM -> Secure E-CO QR certificate.", "请提供纱线与坯布原产地声明以符合RCEP累积标准。", "Trace upstream yarn/fabric origin early to avoid unexpected 12% full-duty bills at destination."),
        ("v7-sc-45", "Đông Quản – Hà Nội (Bao bì & Nhãn GB)", "Hàng Thực Phẩm Chế Biến Bị Kẹt Tại Cảng Vì Thiếu Nhãn Dinh Dưỡng Chuẩn GB 7718", "Preventing Port Detention Caused by Non-Compliant GB 7718 Food Labels", "预包装食品中文标签整改", "Nhãn tiếng Việt hoặc tiếng Anh dịch thiếu bảng năng lượng kJ và thành phần gây dị ứng theo chuẩn Trung Quốc.", "Thiết kế tem nhãn phụ / in sẵn bao bì tiếng Trung Giản thể chuẩn font, đơn vị kilojoule (kJ), ngày sản xuất YYYY/MM/DD và mã CIFER 18 số.", "DDP / DAP kèm kiểm duyệt nhãn dịch vụ trước thông quan.", "DAP with pre-import label audit clearance.", ["GB 7718 Pre-Audit", "kJ Nutrition Panel", "18-Digit Code Print", "COA Assay"], "Gửi thiết kế nhãn kiểm trước -> In trực tiếp chuẩn GB -> Lưu 1 mẫu đối chứng.", "Pre-verify label artwork -> Factory direct print -> Retain archive sample.", "请确认外箱与内袋均按照GB7718标准印制中文标签及千焦标识。", "Compliant kJ energy tables and allergen callouts clear port food inspection first try."),
        ("v7-sc-46", "Ninh Ba – Hải Phòng (Gỗ & Đóng gói ISPM-15)", "Container Máy Móc Bị Phạt Kiểm Hóa Vì Pallet Gỗ Kê Hàng Thiếu Dấu Hun Trùng", "Eliminating Wood-Packaging Quarantine Holds with ISPM-15 Stamps", "木质托盘IPPC熏蒸标识校验", "Dùng pallet gỗ tạp tái chế mất dấu IPPC dẫn tới lệnh hun trùng bắt buộc tốn $1,200 USD.", "Yêu cầu nhà cung cấp chụp ảnh 4 mặt pallet gỗ dán nhựa hoặc pallet gỗ có đóng dấu nhiệt IPPC (HT) rõ nét trước khi kéo cửa container.", "FOB / CIF — trách nhiệm chi phí đóng gói an toàn xuất khẩu thuộc bên bán theo Incoterms.", "Seller bears fit-for-export packaging compliance under all Incoterms.", ["ISPM-15 Heat Stamp", "Packing Photo Audit", "Fumigation Cert", "Packing List"], "Chỉ dùng pallet nhựa hoặc gỗ có dấu HT -> Chụp ảnh lưu hồ sơ -> Khớp số lô.", "Mandate plastic or stamped HT wood pallets -> Archive gate photos.", "请使用免熏蒸托盘或加盖清晰IPPC热处理标识的木托盘。", "Plastic or certified HT pallets eliminate costly border fumigation delays."),
        ("v7-sc-47", "Tây An – Nam Ninh – Hà Nội (Đa phương thức)", "Vận Chuyển Linh Kiện Xe Điện Kịp Tiến Độ Bằng Đường Sắt Liên Vận Quốc Tế", "Synchronizing EV Component Transit via Rail-Road Multimodal Freight", "国际铁路联运应急替代方案", "Tuyến biển chậm 12 ngày do thiếu vỏ container và tắc cảng trung chuyển.", "Chuyển lô linh kiện gấp sang đoàn tàu container liên vận Đồng Đăng – Bằng Tường – Trùng Khánh – Tây An rút ngắn thời gian còn 5 ngày.", "CIP Ga Đồng Đăng / CIF với điều khoản bảo hiểm đa phương thức ICC (A).", "CIP Rail Terminal under ICC (A) all-risk cargo cover.", ["SMGS Rail Waybill", "Customs Seal RFID", "Invoice & PKL", "Insurance Policy"], "Chốt lịch tàu liên vận -> Đóng chì RFID -> Thông quan tại ga đích Đồng Đăng.", "Book SMGS rail slot -> Apply RFID seal -> Clear cargo at Yen Vien rail yard.", "由于海运船期延误，本批急件转走中越国际铁路联运通道。", "Rail-road intermodal routing buffers critical assembly lines against maritime schedule shocks."),
        ("v7-sc-48", "Quảng Châu – TP.HCM (TMĐT CIPS)", "Cảnh Báo Lừa Đảo Đổi Tài Khoản Ngân Hàng Qua Email Trước Ngày Thanh Toán", "Preventing BEC Wire Fraud with CIPS Corporate Verification", "涉外货款账号变更核验规程", "Kẻ gian giả mạo email nhà máy thông báo đổi số tài khoản sang tài khoản tư nhân hoặc ngân hàng lạ ở Hồng Kông.", "Thiết lập quy tắc bất di bất dịch: mọi thay đổi tài khoản BẮT BUỘC xác minh qua video call trực tiếp với Giám đốc Pháp nhân + đối chiếu mã CIPS công ty.", "Điều khoản Bảo mật Tài chính CIPS/SWIFT trong phụ lục hợp đồng thanh toán.", "Dual-factor CIPS/SWIFT corporate account change protocol.", ["Signed Account Annex", "Live Video Verify", "CorporateChop Match", "Bank MT103"], "Khóa cứng tài khoản trên hợp đồng -> Video check khi đổi -> Chuyển thử 100 USD.", "Freeze bank title in signed contract -> Video verify -> Run penny test.", "我司只汇款至合同原定公账，绝不接受邮件临时变更私人账户。", "Two-channel video verification neutralizes cross-border Business Email Compromise."),
        ("v7-sc-49", "Cảnh Đức Trấn – Châu Âu (Gốm Sứ Dễ Vỡ)", "Giảm Tỷ Lệ Nứt Vỡ Xuống Dưới 0.2% Với Kiểm Định Rơi Thùng ISTA 3A", "Cutting Porcelain Breakage Below 0.2% via ISTA 3A Drop Validation", "易碎陶瓷国际包装跌落测试", "Đóng gói xốp thường làm vỡ 6% bát đĩa Thanh Hoa trong hành trình đường biển dài 35 ngày.", "Áp dụng thùng carton 5 lớp sóng đôi BC kết hợp khay giấy ép tổ ong định hình, chạy bài test thả rơi 10 góc chuẩn ISTA 3A trước xuất xưởng.", "FOB Ninh Ba + Bảo hiểm hàng dễ vỡ mở rộng + ảnh chằng buộc container.", "FOB Ningbo with drop-tested packaging specification.", ["ISTA 3A Video Log", "Double-Wall Box", "Moisture Bag", "Pre-Ship Photos"], "Thử nghiệm thả rơi thùng -> Bổ sung túi hút ẩm container -> Chằng dây đai chặt.", "Run 10-point drop test -> Place container desiccant -> Lash pallets securely.", "所有易碎瓷器须通过ISTA 3A跌落测试并放入集装箱干燥剂。", "Engineered honeycomb inner cradles cut shipping breakage near zero."),
        ("v7-sc-50", "Bắc Kinh – Hà Nội (Trọng tài B2B)", "Giải Quyết Tranh Chấp Lô Hàng Sai Thông Số Bằng Điều Khoản Trọng Tài Nhanh", "Resolving Spec Discrepancy Swiftly via Summary Arbitration Clauses", "商事仲裁与和解调解机制", "Lô thép hợp kim giao sai dung sai ±0.3mm khiến dây chuyền ép khuôn dừng chạy, nhà máy né tránh đền bù.", "Kích hoạt chứng thư giám định SGS tại chỗ làm chứng cứ không thể chối cãi, đề nghị thương lượng chiết khấu thay thế kèm thông báo nộp đơn CIETAC nếu quá hạn 14 ngày.", "Công ước New York 1958 + phụ lục dung sai đo lường định lượng bằng mm.", "1958 NY Convention + millimeter tolerance matrix.", ["SGS Defect Assay", "Purchase Order Spec", "14-Day Cure Notice", "Arbitration Draft"], "Lập biên bản SGS -> Gửi thông báo 14 ngày -> Đàm phán thay hàng hoặc trọng tài.", "Collect SGS measurement log -> Serve 14-day cure notice -> Settle or file arbitration.", "依据合同质量附表与SGS实测公差，请于14日内确认换货方案。", "Quantified tolerance tables plus independent SGS inspection speed amicable settlement."),
    ]
    _SC_RISK_EN = {
        "v7-sc-41": ("Perishable fruit loses cold-chain stability or risks mealybug quarantine hold in peak border queues.", "Stage 30% of volume onto Dongdang-Nanning cold rail, use smart pre-clearance slots, and run pre-packing pest screening."),
        "v7-sc-42": ("Generic Western NDAs fail to bind Chinese subcontractors or protect custom mold tooling ownership.", "Switch to bilingual EN-ZH-VI NNN agreements with company red chop on every page and notarized tooling ownership."),
        "v7-sc-43": ("Unilateral buyer acceptance clauses in SWIFT 47A freeze bank payment despite spotless factory shipment.", "Amend MT700 47A upfront to replace buyer signoff with neutral SGS/Intertek pre-shipment inspection certificates."),
        "v7-sc-44": ("Garment exports lose 0% Form E/EUR.1 preferences when upstream yarn or silk fails origin cumulation rules.", "Verify yarn/fabric mill origin statements upfront and document >= 40% RCEP RVC or yarn-forward EVFTA BOM."),
        "v7-sc-45": ("Missing kilojoule (kJ) nutrition panels, allergen declarations, or 18-digit CIFER codes trigger China port holds.", "Pre-audit GB 7718 Simplified Chinese packaging proofs and print CIFER registration numbers directly on retail cartons."),
        "v7-sc-46": ("Unmarked recycled wood pallets lacking IPPC ISPM-15 HT stamps trigger costly forced border fumigation.", "Mandate certified HT-stamped timber or molded plastic pallets and archive 4-side container loading photos."),
        "v7-sc-47": ("Maritime container rollovers delay critical EV component feeding lines by 12 days.", "Divert urgent high-value modules onto SMGS China-Vietnam rail-road intermodal trains with RFID customs seals."),
        "v7-sc-48": ("Business Email Compromise scammers spoof supplier invoices directing wire transfers into private accounts.", "Enforce contract-locked corporate CIPS/SWIFT bank titles and require live legal-rep video verification for any change."),
        "v7-sc-49": ("Standard loose foam packing suffers ~6% porcelain transit breakage on long ocean voyages.", "Specify double-wall BC cartons with molded honeycomb dividers tested to ISTA 3A 10-point drop standards."),
        "v7-sc-50": ("Off-spec alloy tooling tolerances stall assembly lines while the vendor disputes verbal measurements.", "Attach quantified +/- mm tolerance matrices to the PO and enforce neutral SGS assay before CIETAC arbitration."),
    }

    supply_cases_10 = [
        {
            "id": sid,
            "lane": lane,
            "titleVi": tvi,
            "titleEn": ten,
            "scenarioZh": szh,
            "riskIdentifiedEn": _SC_RISK_EN.get(sid, ("Cross-border trade operational risk.", ""))[0],
            "actionPlanVi": actvi,
            "actionPlanEn": _SC_RISK_EN.get(sid, ("", actvi))[1],
            "incotermsAndLiabilityVi": incvi,
            "incotermsAndLiabilityEn": incen,
            "documentChecklist": docs,
            "keyTermsZhEn": docs[:2],
            "replyFactoryZh": rzh,
            "replyEuBossEn": ren,
            "financialImpactRangeEur": "5,000 – 45,000 EUR",
            "decisionTreeSteps": [tvi, actvi, incvi],
            "imagePath": ensure_verified_img("assets/images/articles/hero-supply-chain-rcep.jpg"),
            "bilingualReplyTemplate": f"ZH: {rzh} | EN: {ren}",
            "stepByStepSOPVi": sopvi,
            "stepByStepSOPEn": sopen,
            "clauseDraftingTemplateEn": incen,
            "clauseDraftingTemplateZh": rzh,
        }
        for sid, lane, tvi, ten, szh, rsk, actvi, incvi, incen, docs, sopvi, sopen, rzh, ren in case_specs
    ]

    # 6 Sino-Viet Cultural Wonders (#11-#16 -> 16 total)
    sv_specs = [
        ("svw-v7-01", "Chùa Thiên Mụ (Huế, 1601) — Tháp Phước Duyên 7 Tầng", "Tháp Báo Ân – Đại Báo Ân Tự Nam Kinh & Tháp Lục Hòa Hàng Châu", "Chùa Thiên Mụ & Tháp Bát Giác Đông Á: Hồn Sông Hương Giao Thoa", "Mô hình tháp gạch bát giác nhiều tầng soi bóng xuống dòng sông lớn (Sông Hương vs Sông Tiền Đường / Trường Giang).", "Người Việt điều chỉnh tỷ lệ mái vòm ấm áp và gắn kết trực tiếp với phủ Chúa Nguyễn – văn hóa Đàng Trong mở mang bờ cõi.", "Thế kỷ XVII (Nguyễn Hoàng 1601 / Thiệu Trị xây tháp 1844) song hành cùng truyền thống tháp gạch Nam Kinh.", "assets/images/academic/van-mieu-hanoi.jpg", "assets/images/provinces/zhejiang-hangzhou-westlake.jpg"),
        ("svw-v7-02", "Chùa Bút Tháp (Bắc Ninh) — Cửu Phẩm Liên Hoa Bằng Gỗ", "Tháp Kinh Chuyển Luân & Tín Ngưỡng Hoa Nghiêm Tống–Minh", "Chùa Bút Tháp Bắc Ninh & Cây Hương Đá Cửu Phẩm Liên Hoa", "Trục tháp gỗ xoay 9 tầng Cửu Phẩm Liên Hoa tượng trưng 9 phẩm vãng sinh tịnh độ kết hợp chạm khắc tinh xảo.", "Nghệ nhân Việt thời Lê Trung Hưng kết hợp tượng Quan Âm Thiên Thủ Thiên Nhãn thuần thục nét chạm gỗ mộc bản địa Kinh Bắc.", "Thế kỷ XVII dưới sự bảo trợ của Hoàng thái hậu Trịnh Thị Ngọc Trúc.", "assets/images/academic/van-mieu-hanoi.jpg", "assets/images/provinces/shanxi-hanging-temple.jpg"),
        ("svw-v7-03", "Đô Thị Cổ Phố Hiến (Hưng Yên) & Văn Hiến Chuông Cổ", "Các Bến Sông Đại Vận Hà Tô Châu – Dương Châu Thế Kỷ XVII", "Phố Hiến Hưng Yên ('Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến')", "Phố cảng sông Hồng thế kỷ XVII quy tụ thương điếm Á–Âu và hơn chục chùa miếu bia chữ Hán dựng bên bến thuyền.", "Kiến trúc Việt Nam đồng hóa hài hòa chùa Chuông, đền Mẫu với hội quán Bắc Hòa tạo bản sắc Phố Hiến riêng biệt.", "Thời Lê–Trịnh thế kỷ XVII song hành giao thương biển Đông Bắc Á.", "assets/images/articles/hero-sino-vietnam.jpg", "assets/images/provinces/jiangsu-suzhou-garden.jpg"),
        ("svw-v7-04", "Lăng Khải Định (Huế) — Nghệ Thuật Khảm Sành Sứ Hán–Âu", "Nghệ Thuật Khảm Sứ Tiễn Niên (嵌瓷) Triều Châu – Quảng Đông", "Lăng Khải Định & Tinh Hoa Khảm Sành Sứ Đa Văn Hóa", "Sử dụng hàng nghìn mảnh sứ trắng xanh vỡ khảm nổi tứ linh rồng mây tinh xảo trên bề mặt cột tường công trình.", "Thợ gốm nghệ nhân Huế kết hợp tuyệt hảo khảm sành Á Đông, bê tông cốt thép Pháp và hình khối lăng tẩm truyền thống.", "Đầu thế kỷ XX (1920–1931) — minh chứng đỉnh cao giao thoa nghệ thuật.", "assets/images/articles/hero-traditional-arch.jpg", "assets/images/provinces/guangdong-canton-tower.jpg"),
        ("svw-v7-05", "Văn Miếu Trấn Biên (Đồng Nai, 1715) — Học Đạo Phương Nam", "Các Thư Viện Nhạc Lộc & Văn Miếu Cổ Nam Trung Hoa", "Văn Miếu Trấn Biên: Khai Mở Nền Học Vấn Nam Bộ", "Ngôi Văn Miếu đầu tiên tại Nam Bộ thờ Khổng Tử cùng các danh nhân văn hóa Việt Nam theo trục bia đá khoa bảng.", "Bổ sung thờ Chủ tịch Hồ Chí Minh và các danh sĩ phương Nam (Trịnh Hoài Đức, Bùi Hữu Nghĩa), tôn vinh truyền thống hiếu học Nam Bộ.", "Năm 1715 thời Chúa Nguyễn Phúc Chu, song hành mạng lưới thư viện Thanh sơ.", "assets/images/academic/van-mieu-hanoi.jpg", "assets/images/articles/hero-academy-shuyuan.jpg"),
        ("svw-v7-06", "Nghệ Thuật Múa Lân Sư Rồng Chợ Lớn & Lò Luyện Võ Đô Thị", "Vũ Điệu Tỉnh Sư (醒狮) Phật Sơn Lĩnh Nam & Mai Hoa Thung", "Múa Lân Sư Rồng & Nghệ Thuật Bồi Lân Thủ Công Chợ Lớn", "Kết hợp trống hội Bát Âm, bước nhảy trên cọc Mai Hoa Thung 2m và khung đầu lân đan bằng nan tre phết giấy bản.", "Cộng đồng Chợ Lớn và các lò võ Việt–Hoa sáng tạo kỹ thuật Lân Lên Cây Tre, Lân Khung Rồng 100 người phục vụ Tết và Trung Thu khắp Việt Nam.", "Hình thành từ thế kỷ XIX đến Di sản Nghệ thuật Trình diễn đương đại.", "assets/images/articles/hero-spring-festival.jpg", "assets/images/provinces/guangdong-canton-tower.jpg"),
    ]
    sino_viet_6 = [
        {
            "id": sid,
            "vietnamWonder": vw,
            "chinaWonder": cw,
            "sharedHeritageVi": sh,
            "distinctAdaptationVi": da,
            "vnImg": ensure_verified_img(vimg),
            "chinaImg": ensure_verified_img(cimg),
            "pairTitle": pt,
            "summaryVi": f"{sh} {da}",
            "historicalTimelineCompareVi": tl,
            "architecturalOrCraftAnatomyVi": sh,
            "fieldVisitGuideVi": "Có thể ghé thăm trong nước tại Huế, Bắc Ninh, Hưng Yên, Đồng Nai, TP.HCM kết hợp tra cứu đối chứng trên website.",
        }
        for sid, vw, cw, pt, sh, da, tl, vimg, cimg in sv_specs
    ]

    # 12 CSC Universities (#25-#36)
    csc_specs = [
        ("csc-v7-01", "西安交通大学", "Đại học Giao thông Tây An (XJTU)", "Xi'an Jiaotong University", "10698", "prov-shaanxi", "Tây An (C9)", "Kỹ thuật Cơ khí, Năng lượng, AI, Quản trị, Kinh tế Con đường Tơ lụa", "shaanxi"),
        ("csc-v7-02", "天津大学", "Đại học Thiên Tân (TJU)", "Tianjin University", "10056", "prov-tianjin", "Thiên Tân", "Kiến trúc Gỗ Cổ, Công nghệ Hóa học, Vật liệu Xây dựng Xanh", "tianjin"),
        ("csc-v7-03", "中山大学", "Đại học Trung Sơn (SYSU)", "Sun Yat-sen University", "10558", "prov-guangdong", "Quảng Châu – Châu Hải", "Kinh tế Lĩnh Nam, Ngôn ngữ Đông Nam Á, Khoa học Biển & Dữ liệu", "guangdong"),
        ("csc-v7-04", "华东师范大学", "Đại học Sư phạm Hoa Đông (ECNU)", "East China Normal University", "10269", "prov-shanghai", "Thượng Hải", "Giáo dục Hán ngữ Quốc tế (MTCSOL), Sử học, Tâm lý Giáo dục", "shanghai"),
        ("csc-v7-05", "北京航空航天大学", "Đại học Hàng không Vũ trụ Bắc Kinh (Beihang)", "Beihang University", "10006", "prov-beijing", "Bắc Kinh", "Kỹ thuật Hàng không, Điều khiển Tự động, Khoa học Máy tính", "beijing"),
        ("csc-v7-06", "中国农业大学", "Đại học Nông nghiệp Trung Quốc (CAU)", "China Agricultural University", "10019", "prov-beijing", "Bắc Kinh", "Khoa học Thực phẩm, Kiểm dịch Nông sản GACC, Nông nghiệp Thông minh", "beijing"),
        ("csc-v7-07", "中国海洋大学", "Đại học Hải dương Trung Quốc (OUC)", "Ocean University of China", "10423", "prov-shandong", "Thanh Đảo", "Hải dương học, Thủy sản Công nghệ cao, Kinh tế Biển", "shandong"),
        ("csc-v7-08", "哈尔滨工业大学", "Đại học Công nghiệp Cáp Nhĩ Tân (HIT C9)", "Harbin Institute of Technology", "10213", "prov-heilongjiang", "Cáp Nhĩ Tân – Thâm Quyến", "Robotics, Tự động hóa Công nghiệp, Vật liệu Hàng không (C9)", "heilongjiang"),
        ("csc-v7-09", "重庆大学", "Đại học Trùng Khánh (CQU)", "Chongqing University", "10611", "prov-chongqing", "Trùng Khánh", "Quy hoạch Đô thị Núi, Kỹ thuật Điện & Chuỗi Cung ứng Miền Tây", "chongqing"),
        ("csc-v7-10", "中国政法大学", "Đại học Chính Pháp Trung Quốc (CUPL)", "China University of Political Science and Law", "10053", "prov-beijing", "Bắc Kinh", "Luật Thương mại Quốc tế, Trọng tài CIETAC, Pháp luật Sở hữu Trí tuệ", "beijing"),
        ("csc-v7-11", "北京外国语大学", "Đại học Ngoại ngữ Bắc Kinh (BFSU)", "Beijing Foreign Studies University", "10030", "prov-beijing", "Bắc Kinh", "Phiên dịch Song ngữ Việt–Trung–Anh, Truyền thông Quốc tế", "beijing"),
        ("csc-v7-12", "厦门大学", "Đại học Hạ Môn (XMU)", "Xiamen University", "10384", "prov-fujian", "Hạ Môn", "Nghiên cứu Đông Nam Á, Hóa học Vật liệu, Thương mại Biển", "fujian"),
    ]
    csc_unis_12 = [
        {
            "id": cid,
            "zh": zh,
            "nameVi": nvi,
            "nameEn": nen,
            "agencyNumber": ag,
            "provinceId": pid,
            "strengthsVi": stv,
            "campusHint": cid,
            "agencyNo": ag,
            "majorsVi": stv,
            "cityVi": city,
            "imagePath": ensure_verified_img(PROVINCE_IMAGES.get(pimg, "assets/images/provinces/beijing-temple-of-heaven.jpg")),
            "cscTypeA_vs_TypeB_NoteVi": f"Mã trường nộp CSC Type B (nộp trực tiếp lên cổng trường): {ag}. Nên xin Thư Chấp Thuận Giáo Sư trước tháng 1.",
            "vietnamAlumniCareerTrackVi": f"Mạng lưới cựu lưu học sinh tại {city} cực mạnh trong ngành {stv}.",
            "recommendedHskAndIeltsVi": "Hệ tiếng Trung yêu cầu tối thiểu HSK 5 (>=210); hệ tiếng Anh cần IELTS 6.5 hoặc TOEFL 90.",
        }
        for cid, zh, nvi, nen, ag, pid, city, stv, pimg in csc_specs
    ]

    # 12 CSC Interviews (#25-#36)
    iv_specs = [
        ("ciq-v7-01", "Trình bày tóm tắt Đề cương Nghiên cứu (Study Plan) trong 2 phút bằng tiếng Trung", "请用两分钟中文简述你的研修计划核心问题。", "Present your 1,500-char Study Plan thesis cleanly in 2 minutes.", "Mở bằng Khoảng trống nghiên cứu -> Nêu Câu hỏi trọng tâm -> Nêu Phương pháp & Giá trị ứng dụng cho VN–TQ.", "Nhấn mạnh đề tài có số liệu đối sánh hai nước để chứng minh vai trò cầu nối độc đáo.", "我的研究聚焦中越跨境农产品溯源标准对接，拟通过实证案例对比提出优化路径。", "My research examines harmonizing Vietnam-China traceability rules through empirical supply-chain cases.", "Tránh đọc vẹt thuộc lòng 1 tờ giấy; hãy giao tiếp bằng ánh mắt và tóm gọn thành 3 ý."),
        ("ciq-v7-02", "Vì sao bạn chọn nhóm nghiên cứu (Lab) của Giáo sư tại trường chúng tôi?", "你为什么选择报考我校及本课题组？", "Why did you choose our university and this specific faculty supervisor's lab?", "Chứng minh đã đọc 2–3 bài báo khoa học gần nhất của chính giáo sư hướng dẫn.", "Trích tên đề tài thực tế của giáo sư và nối vào kỹ năng sẵn có của bạn.", "我拜读了教授团队关于古代木构抗震性能的论文，希望能结合越南木建筑数据展开延伸研究。", "I studied your group's papers on historic timber joinery and hope to extend the dataset with Vietnamese pavilions.", "Tuyệt đối tránh trả lời chung chung kiểu 'vì trường rất nổi tiếng và học bổng cao'."),
        ("ciq-v7-03", "Giải thích động lực liên ngành khi chuyển sang chuyên ngành mới (nếu khác bằng Cử nhân)", "跨专业申请时，你如何弥补基础课程差异？", "How will you bridge foundational gaps when pivoting across disciplines?", "Biến nền tảng cũ thành lợi thế hiếm (ví dụ: Ngôn ngữ Trung + Logistics / Luật).", "Chứng minh đã tự học trước môn cơ sở hoặc có kinh nghiệm dự án thực tế.", "虽然我本科主修语言，但两年跨境供应链实战使我具备了行业一线问题意识。", "Although my BA was in languages, two years managing cross-border freight gave me frontline analytical skills.", "Không tỏ ra tự ti hay xin lỗi về bằng cũ."),
        ("ciq-v7-04", "Phương pháp nghiên cứu chính bạn dự định áp dụng cho luận văn Thạc sĩ/Tiến sĩ?", "你的毕业论文主要采用什么研究方法？", "Which primary research methodology will anchor your graduate thesis?", "Phân rõ Định tính (tư liệu cổ văn, phỏng vấn chuyên gia) vs Định lượng (hồi quy, Python, SPSS).", "Nêu rõ nguồn thu thập dữ liệu khả thi ngay năm thứ 2.", "我将采用文献考据与田野调查相结合的方法，并运用Python统计多省口岸数据。", "I will pair archival textual analysis with field surveys analyzed quantitatively in Python.", "Tránh chọn phương pháp mơ hồ không khả thi trong quỹ thời gian 2 năm."),
        ("ciq-v7-05", "Khó khăn lớn nhất về ngôn ngữ học thuật hoặc thích nghi văn hóa và cách bạn vượt qua?", "在全英文或全中文高强度科研环境中，你如何克服语言障碍？", "How will you overcome high-level academic language barriers during lab seminars?", "Nêu thói quen đọc thuật ngữ hàng ngày bằng SRS và làm việc nhóm sớm với nghiên cứu sinh bản địa.", "Thái độ chủ động chuẩn bị trước bài đọc 3 ngày trước giờ seminar.", "我建立了跨学科三语术语库并坚持每周阅读十篇核心期刊摘要。", "I maintain a trilingual scholarly glossary and digest ten core journal abstracts weekly.", "Không nói 'tôi sẽ cố gắng hết sức' suông; hãy đưa ví dụ chứng minh kỷ luật."),
        ("ciq-v7-06", "Nếu kết quả thí nghiệm hoặc khảo sát thực tế trái ngược với giả thuyết ban đầu, bạn làm gì?", "如果实验或调研数据不支持你原本的假设，你会怎么办？", "What do you do if empirical fieldwork invalidates your initial hypothesis?", "Thể hiện tư duy khoa học liêm chính: tôn trọng dữ liệu thật, kiểm tra sai số quy trình và điều chỉnh khung lý thuyết.", "Hội đồng cực kỳ đề cao tính trung thực khoa học không làm đẹp số liệu.", "科研贵在求真。我会先排查样本误差，若数据可靠则据此修正理论模型。", "Research integrity demands honesty; after verifying sampling controls, I refine the hypothesis to follow real evidence.", "Không bao giờ nói 'tôi sẽ tìm dữ liệu khác để chứng minh ý cũ'."),
        ("ciq-v7-07", "Dự định nghề nghiệp sau khi tốt nghiệp hoàn tất chương trình CSC của bạn là gì?", "完成学业回国或留华发展后，你的五年职业规划是什么？", "What is your 5-year career trajectory upon completing the CSC fellowship?", "Gắn với đóng góp học thuật (giảng dạy đại học, viện nghiên cứu) hoặc cầu nối công nghệ–thương mại ASEAN.", "Trình bày kế hoạch thực tế có lộ trình năm 1, năm 3, năm 5.", "我计划投身中越高校及企业研究院，搭建数字化文化遗产与合规经贸桥梁。", "I plan to link Vietnamese and Chinese universities and enterprise R&D centers across heritage tech and compliant trade.", "Giữ mục tiêu nhất quán với Đề cương Study Plan vừa trình bày."),
        ("ciq-v7-08", "Bạn đã công bố bài báo, dự án văn hóa hay giải thưởng nào chứng minh năng lực tự nghiên cứu?", "请介绍一项你主导完成的代表性研究或实践项目。", "Walk us through a flagship project or paper you personally led.", "Dùng mô hình STAR: Bối cảnh -> Nhiệm vụ -> Hành động độc lập -> Kết quả đo lường được.", "Tập trung vào phần việc do chính bạn thực hiện chứ không kể chung công cả nhóm.", "我曾独立梳理60家传统商号的溯源档案并构建三语知识检索页面。", "I independently curated provenance records across 60 heritage craft houses into a trilingual searchable archive.", "Chuẩn bị sẵn câu trả lời cho các câu hỏi xoáy về số liệu dự án đó."),
        ("ciq-v7-09", "Trình độ tin học / công cụ xử lý dữ liệu và trích dẫn tài liệu của bạn hiện tại?", "你熟练使用哪些文献管理与数据分析软件？", "Which academic citation managers and quantitative tools do you command?", "Kể tên thực tế: Zotero/EndNote, CNKI (Tri Võng), Excel Pivot, Python, Three.js hoặc SPSS/R.", "Biết dùng CNKI tra cứu bài báo tiếng Trung là điểm cộng cực lớn.", "我熟练利用中国知网 CNKI 检索前沿文献，并以 Zotero 规范中英文引文。", "I actively search CNKI literature archives and standardize bilingual bibliographies using Zotero.", "Không khai khống phần mềm mình chưa từng chạy."),
        ("ciq-v7-10", "Làm thế nào để giữ cân bằng áp lực học tập cao độ khi sống xa gia đình nhiều năm?", "面对长时间独立科研压力，你如何保持身心高效平衡？", "How do you maintain sustainable focus across multi-year graduate research abroad?", "Chứng minh thói quen sinh hoạt kỷ luật (thể thao, trà đạo, quản lý thời gian khối pomodoro).", "Giáo sư thích nghiên cứu sinh bền bỉ tâm lý ổn định.", "我坚持每日规律运动与时间块管理，习惯按周复盘研究进度。", "I pair structured time-blocking with daily physical exercise and weekly lab milestone reviews.", "Tránh nói những câu tiêu cực về việc dễ chán nản hay bỏ dở."),
        ("ciq-v7-11", "Góc nhìn của bạn về điểm tương đồng và khác biệt văn hóa giúp hợp tác Việt–Trung bền vững hơn?", "结合个人体验，谈谈中越文化交流中最值得深化合作的领域。", "Where do Sino-Vietnamese cultural parallels offer the strongest mutual collaboration?", "Trích dẫn kiến trúc di sản, chữ Hán Nôm, nông nghiệp bền vững và giáo dục đại học số.", "Thể hiện thái độ học hỏi cởi mở, tôn trọng 'Hòa nhi bất đồng'.", "在传统工艺活态保护、数字博物馆及绿色农业标准互认领域合作空间广阔。", "Living craft conservation, digital museum exhibits, and mutual green standards hold tremendous shared promise.", "Luôn dùng ngôn ngữ xây dựng và học thuật khách quan."),
        ("ciq-v7-12", "Bạn có câu hỏi nào dành lại cho Hội đồng Giáo sư trước khi kết thúc phỏng vấn không?", "在面试结束前，你有什么问题想向评审老师请教？", "Do you have any thoughtful questions for the admissions panel?", "Hỏi thông minh: 'Để sẵn sàng gia nhập nhóm trước khi nhập học tháng 9, tôi nên đọc trước giáo trình hoặc chuyên đề nào của Lab?'", "Chứng minh nhiệt huyết bắt tay vào việc ngay lập tức.", "若我有幸被录取，入学前我应优先研读贵课题组的哪几篇核心参考文献？", "If admitted, which foundational papers from your lab should I master before September enrollment?", "Tuyệt đối KHÔNG hỏi 'khi nào có tiền học bổng hàng tháng' ngay câu đầu tiên."),
    ]
    csc_iv_12 = [
        {
            "id": qid,
            "qVi": qvi,
            "qZh": qzh,
            "qEn": qen,
            "outlineVi": out,
            "zh": qzh,
            "vi": qvi,
            "guideVi": guide,
            "modelAnswerZh": mzh,
            "modelAnswerEn": men,
            "commonPitfallToAvoidVi": pit,
        }
        for qid, qvi, qzh, qen, out, guide, mzh, men, pit in iv_specs
    ]

    # 8 HSR Corridors (#9-#16 -> 16 total)
    hsr_8 = [
        {"from": "Thành Đô Đông (成都东)", "to": "Hoàng Long Cửu Trại (黄龙九寨)", "lineName": "Tuyến Xuyên Thanh (川青铁路 · Đường sắt Cao nguyên)", "duration": "1h 39p – 2h 05p", "highlight": "Lên thẳng cao nguyên 3.000m thăm Cửu Trại Câu & Hoàng Long quanh năm", "linkedExpeditionId": "v7-exp-04"},
        {"from": "Nam Ninh Đông (南宁东)", "to": "Quế Lâm – Quý Dương (贵阳北)", "lineName": "Tuyến Quý Nam Cao Tốc (贵南高铁 · 350km/h)", "duration": "2h 10p – 3h 30p", "highlight": "Hành lang Tây Nam sát biên giới Lạng Sơn mở cửa du lịch Quế Lâm–Quý Châu", "linkedExpeditionId": "v7-exp-06"},
        {"from": "Tây An Bắc (西安北)", "to": "Lan Châu – Trương Dịch – Đôn Hoàng", "lineName": "Tuyến Tơ Lụa Bảo Lan & Lan Tân (丝路高铁)", "duration": "7h 30p toàn tuyến (có thể chia chặng)", "highlight": "Theo dấu Hành lang Hà Tây thăm Địa chất Cầu vồng Đan Hà & Mạc Cao", "linkedExpeditionId": "v7-exp-02"},
        {"from": "Hạ Môn Bắc (厦门北)", "to": "Phúc Châu – Vũ Di Sơn (武夷山北)", "lineName": "Tuyến Hợp Phúc Cao Tốc (合福高铁)", "duration": "2h 15p – 2h 50p", "highlight": "Hành trình từ cảng biển Mân Nam lên vùng Nham Trà Đại Hồng Bào", "linkedExpeditionId": "v7-exp-08"},
        {"from": "Hàng Châu Đông (杭州东)", "to": "Hoàng Sơn – Cảnh Đức Trấn (景德镇北)", "lineName": "Tuyến Hàng Xương – Hàng Hoàng (杭黄高铁)", "duration": "1h 45p – 2h 30p", "highlight": "Tuyến 'Đẹp nhất Giang Nam' qua Tây Hồ – Hoành Thôn – Thủ phủ Sứ", "linkedExpeditionId": "v7-exp-03"},
        {"from": "Trịnh Châu Đông (郑州东)", "to": "Lạc Dương Long Môn – Tây An Bắc", "lineName": "Tuyến Từ Lan Cao Tốc (徐兰高铁 · 350km/h)", "duration": "1h 58p", "highlight": "Kết nối cố đô Lạc Dương Hang Long Môn thẳng tới Trường An Tây An", "linkedExpeditionId": "v7-exp-11"},
        {"from": "Côn Minh (昆明)", "to": "Đại Lý – Lệ Giang (丽江)", "lineName": "Tuyến Côn Sở Đại Lệ (昆楚大丽铁路)", "duration": "2h 00p tới Đại Lý / 3h 40p tới Lệ Giang", "highlight": "Cửa ngõ đường sắt từ Hà Khẩu – Lào Cai vươn lên cao nguyên Vân Nam", "linkedExpeditionId": "v7-exp-09"},
        {"from": "Trùng Khánh Bắc (重庆北)", "to": "Nghi Xương Tam Hiệp – Vũ Hán (武汉)", "lineName": "Tuyến Duyên Giang Cao Tốc (沿江高铁)", "duration": "4h 30p – 5h 10p", "highlight": "Chạy dọc hẻm núi Tam Hiệp Trường Giang tới Hoàng Hạc Lâu", "linkedExpeditionId": "v7-exp-12"},
    ]

    # 16 Multi-Day Heritage Expeditions (National Geographic + Lonely Planet + Trip.com Benchmark)
    exp_rows = [
        ("v7-exp-01", "Hoa Bắc Đế Đô", 6, "Bắc Kinh – Thượng Hải", "Thu vàng tháng 9–11 & Xuân 4–5", "$850 – $1,350", "Bắc Kinh Hoàng Thành, Trường Thành Mộ Điền Dụ & Đấu Củng Cố Cung", "Imperial Beijing, Mutianyu Great Wall & Forbidden City 6-Day Study", "北京皇城长城6日文化遗产深度游", "Hành trình trục Thần Đạo Cố Cung – Thiên Đàn – Di Hòa Viên kết hợp thưởng thức nghệ nhân Đồng Nhân Đường và Kinh Kịch.", "Traverse Beijing's Imperial Axis, Temple of Heaven timber cosmology, and Mutianyu Great Wall ridges.", ["Ngọ Môn – Thái Hòa Điện", "Thiên Đàn Kỳ Niên Điện", "Trường Thành Mộ Điền Dụ", "Di Hòa Viên & Hồ Tây", "Phố cổ Tiền Môn Lão Tự Hào"], ["Ngày 1: Đáp Bắc Kinh, dạo Tiền Môn.", "Ngày 2: Cố Cung & Cảnh Sơn.", "Ngày 3: Trường Thành Mộ Điền Dụ.", "Ngày 4: Thiên Đàn & Bảo tàng Quốc gia.", "Ngày 5: Di Hòa Viên & Nghệ thuật Kinh Kịch.", "Ngày 6: Hoàn tất thủ tục & tiễn sân bay."], "assets/images/museum/forbidden-city-imperial-axis-gate.jpg", "w78Yb_aotH0"),
        ("v7-exp-02", "Tây Bắc Tơ Lụa", 10, "Tây An – Lan Châu – Đôn Hoàng", "Tháng 5–6 & Tháng 9–10", "$1,450 – $2,200", "Con Đường Tơ Lụa Huyền Thoại: Tây An – Trương Dịch Đan Hà – Đôn Hoàng", "Silk Road Hexi Corridor: Xi'an, Zhangye Rainbow Hills & Dunhuang (10D)", "丝绸之路河西走廊10日考察", "Khởi hành từ Binh Mã Dũng Tây An dọc Hành lang Hà Tây qua công viên địa chất Đan Hà tới 492 động bích họa Mạc Cao Đôn Hoàng.", "National Geographic-style cross-corridor expedition spanning Qin Terracotta legions, Qilian foothills, and Mogao Cave archives.", ["Lăng Tần Binh Mã Dũng", "Tháp Đại Nhạn Tây An", "Địa chất Đan Hà Trương Dịch", "Gia Dục Quan", "Hang Mạc Cao Đôn Hoàng"], ["Ngày 1-3: Trường An – Binh Mã Dũng – Tường thành Minh.", "Ngày 4-5: Tàu cao tốc tới Lan Châu & Đan Hà Trương Dịch.", "Ngày 6: Gia Dục Quan cửa ải Trường Thành.", "Ngày 7-9: Hang đá Mạc Cao, Minh Sa Sơn & Nguyệt Nha Tuyền.", "Ngày 10: Kết thúc hành trình Hà Tây."], "assets/images/provinces/gansu-dunhuang-mogao.jpg", "R29A0GyLYlE"),
        ("v7-exp-03", "Hoa Đông Giang Nam", 7, "Hàng Châu – Cảnh Đức Trấn", "Tháng 3–5 & Tháng 10–11", "$950 – $1,480", "Thủy Hương Giang Nam Tô Châu – Tây Hồ & Thủ Phủ Sứ Cảnh Đức Trấn", "Jiangnan Water Towns, Suzhou Gardens & Jingdezhen Kiln Trails (7D)", "江南水乡景德镇7日匠心之旅", "Kết hợp vườn cổ Tô Châu Di sản UNESCO, thêu hai mặt Tô Tú, trà Long Tỉnh Hàng Châu và xưởng gốm sáng tạo Đào Khê Xuyên.", "Follow the Grand Canal's poetic heartlands from Suzhou's scholar gardens to Hangzhou's tea valleys and Jingdezhen porcelain kilns.", ["Chuyết Chính Viên Tô Châu", "Cổ trấn Đồng Lý", "Tây Hồ & Trà Long Tỉnh", "Vườn Trà & Bảo tàng Lụa", "Phố Gốm Đào Khê Xuyên"], ["Ngày 1-2: Tô Châu Chuyết Chính Viên & Bảo tàng Bối Duật Minh.", "Ngày 3: Cổ trấn Đồng Lý.", "Ngày 4-5: Hàng Châu Tây Hồ & Làng trà Long Tỉnh.", "Ngày 6-7: Cao tốc tới Cảnh Đức Trấn chuốt gốm Thanh Hoa."], "assets/images/provinces/jiangsu-suzhou-garden.jpg", "xsPOs-yCJ3g"),
        ("v7-exp-04", "Tây Nam Ba Thục", 6, "Thành Đô – Cửu Trại Câu", "Tháng 9–11 (Mùa lá đỏ)", "$980 – $1,550", "Ba Thục Thủy Lợi Đô Giang Yển, Tam Tinh Đôi & Hồ Ngũ Sắc Cửu Trại Câu", "Sichuan Basin: Dujiangyan Hydraulics, Sanxingdui & Jiuzhaigou (6D)", "天府水利三星堆九寨沟6日之旅", "Khám phá bí ẩn văn minh đồng xanh Tam Tinh Đôi, thủy lợi không đập Đô Giang Yển và tuyến tàu cao tốc mới lên Cửu Trại Câu.", "Connect Bronze Age Sanxingdui masks and damless Dujiangyan engineering directly to alpine travertine pools via the new plateau railway.", ["Bảo tàng Tam Tinh Đôi", "Thủy lợi Đô Giang Yển", "Trung tâm Gấu Trúc Thành Đô", "Cửu Trại Câu Hồ Ngũ Hoa", "Ngõ Rộng Hẹp & Văn hóa Trà Ba Thục"], ["Ngày 1: Đến Thành Đô, Phố cổ Cẩm Lý.", "Ngày 2: Bảo tàng Tam Tinh Đôi & Đô Giang Yển.", "Ngày 3-5: Tàu Xuyên Thanh lên Cửu Trại Câu & Hoàng Long.", "Ngày 6: Thưởng trà Xuyên Kịch Thành Đô & khởi hành."], "assets/images/provinces/sichuan-jiuzhaigou.jpg", "arfV94Y9tkE"),
        ("v7-exp-05", "Hoa Đông Huy Châu", 7, "Hàng Châu – Hoàng Sơn", "Tháng 4–6 & Tháng 10–11", "$890 – $1,420", "Biển Mây Hoàng Sơn, Thôn Cổ Hoành Thôn & Văn Phòng Tứ Bảo Huy Châu", "Yellow Mountain Cloud Sea, Hongcun & Huizhou Ink Craft (7D)", "黄山宏村徽墨文房之旅", "Chiêm ngưỡng cảnh quan truyền cảm hứng cho Thủy mặc Tống–Thanh trên đỉnh Hoàng Sơn, thăm thôn hình trâu Hoành Thôn và lò Mực Tùng Yên Hồ Khai Văn.", "Trace Ming–Qing Ink and Xuan Paper guilds inside Hongcun moon-pond courtyards and misty Huangshan granite peaks.", ["Tây Hồ Hàng Châu", "Biển mây đỉnh Hoàng Sơn", "Thôn cổ Hoành Thôn – Tây Đệ", "Xưởng Mực Tùng Yên Đồn Khê", "Làng Giấy Tuyên Kính Huyện"], ["Ngày 1-2: Hàng Châu tới Đồn Khê phố cổ.", "Ngày 3-4: Chinh phục Hoàng Sơn & ngắm bình minh.", "Ngày 5: Hoành Thôn Nguyệt Chiểu & Tây Đệ.", "Ngày 6-7: Tự làm giấy Tuyên & chế mực cổ Huy Châu."], "assets/images/provinces/anhui-hongcun-moonpond.jpg", "GkLhHNTOP3Y"),
        ("v7-exp-06", "Tây Nam Giáp Việt", 5, "Nam Ninh – Quế Lâm – Quý Dương", "Tháng 4–10", "$620 – $980", "Sơn Thủy Quế Lâm – Dương Sóc, Ruộng Bậc Thang Long Tích & Trình Dương", "Guilin Karst Peaks, Longji Terraces & Dong Covered Bridges (5D)", "桂林山水龙脊梯田5日线", "Hành trình cực kỳ thuận tiện cho du khách Việt Nam đi tàu liên vận qua Hữu Nghị – Nam Ninh vươn tới núi đá vôi sông Ly và cầu Mưa Gió dân tộc Đồng.", "Effortless overland rail route from Hanoi/Nanning into Guilin limestone towers, Longji rice terraces, and nail-free Dong timber bridges.", ["Sông Ly Quế Lâm", "Đồi Vòi Voi & Dương Sóc", "Ruộng bậc thang Long Tích", "Cầu Mưa Gió Trình Dương", "Khu bảo tồn dân tộc Đồng"], ["Ngày 1: Hà Nội / Nam Ninh – Quế Lâm.", "Ngày 2: Thuyền ngắm sông Ly tới Dương Sóc.", "Ngày 3: Đạp xe làng cổ & xem Ấn tượng Lưu Tam Tỷ.", "Ngày 4: Ruộng bậc thang Long Tích.", "Ngày 5: Trở về qua Nam Ninh."], "assets/images/provinces/guangxi-guilin-li-river.jpg", "ROFmtJLCq1k"),
        ("v7-exp-07", "Hoa Bắc Sơn Tây", 6, "Thái Nguyên – Bình Dao – Đại Đồng", "Tháng 5–10", "$840 – $1,290", "Kho Báu Kiến Trúc Gỗ Cổ: Bình Dao, Huyền Không Tự & Hang Vân Cương", "Shanxi Timber Pantheon: Pingyao, Hanging Temple & Yungang Caves (6D)", "山西古建平遥悬空寺6日线", "Tỉnh Sơn Tây lưu giữ hơn 70% công trình gỗ cổ trước thời Nguyên của toàn Trung Quốc, từ Tháp gỗ Ứng Huyện 1056 đến thành cổ Bình Dao.", "Architectural pilgrimage through China's richest concentration of Liao–Song timber halls, cliffs-edge temples, and Pingyao merchant banks.", ["Thành cổ Bình Dao", "Ngân hàng cổ Nhật Thăng Xương", "Huyền Không Tự Hằng Sơn", "Tháp gỗ Ứng Huyện 1056", "Hang đá Phật giáo Vân Cương"], ["Ngày 1-2: Thái Nguyên – Thành cổ Bình Dao.", "Ngày 3: Bảo tàng Tư gia Kiều Gia & Phổ Nhị.", "Ngày 4: Chùa Huyền Không & Tháp gỗ Ứng Huyện.", "Ngày 5-6: Hang đá Vân Cương Đại Đồng."], "assets/images/provinces/shanxi-hanging-temple.jpg", "w78Yb_aotH0"),
        ("v7-exp-08", "Đông Nam Phúc Kiến", 7, "Hạ Môn – Vũ Di Sơn", "Tháng 4–6 & Tháng 9–11", "$890 – $1,390", "Cảng Biển Tuyền Châu, Thổ Lâu Đất Nện & Đỉnh Trà Nham Vũ Di Sơn", "Fujian Maritime UNESCO: Quanzhou Port, Earth Tulou & Wuyi Tea (7D)", "福建土楼泉州海丝武夷茶旅", "Kết hợp hành trình hàng hải Tuyền Châu, pháo đài đất nện Thổ Lâu vi khí hậu mùa hè mát và vùng Nham Trà Đại Hồng Bào.", "Bridge Maritime Silk Road wharves in Quanzhou with rammed-earth circular Tulou villages and Wuyishan oolong cliffs.", ["Đảo Cổ Lãng Tự Hạ Môn", "Quần thể Thổ Lâu Nam Tĩnh", "Chùa Khai Nguyên & Cầu Lạc Dương Tuyền Châu", "Vườn Nham Trà Vũ Di Sơn"], ["Ngày 1: Hạ Môn – Cổ Lãng Tự.", "Ngày 2-3: Thổ Lâu Nam Tĩnh – Vĩnh Định.", "Ngày 4-5: Di sản biển Tuyền Châu.", "Ngày 6-7: Cao tốc lên Vũ Di Sơn thưởng Nham trà."], "assets/images/provinces/fujian-tulou.jpg", "TcqR7ORAAEY"),
        ("v7-exp-09", "Tây Nam Vân Nam", 8, "Côn Minh – Đại Lý – Lệ Giang", "Tháng 3–5 & Tháng 9–12", "$990 – $1,580", "Trà Mã Cổ Đạo Vân Nam: Côn Minh – Đại Lý – Lệ Giang – Shangri-La", "Yunnan Ancient Tea-Horse Route: Dali, Lijiang & Shangri-La (8D)", "云南茶马古道丽江香格里拉8日线", "Theo dấu thương đoàn ngựa thồ Trà Phổ Nhĩ từ Hồ Nhĩ Hải Đại Lý lên Phố cổ Lệ Giang hệ thống Tam Nhãn Tỉnh tới cao nguyên Tạng.", "Ascend along the highland Tea-Horse caravans connecting Lake Erhai Bai villages, Lijiang canals, and Tiger Leaping Gorge.", ["Rừng đá Thạch Lâm Côn Minh", "Thành cổ Đại Lý & Tam Tháp", "Phố cổ Lệ Giang & Núi Tuyết Ngọc Long", "Hẻm Hổ Khiêu & Shangri-La"], ["Ngày 1-2: Côn Minh – Thạch Lâm.", "Ngày 3-4: Đại Lý & Trà Đạo dân tộc Bạch.", "Ngày 5-6: Phố cổ Lệ Giang & Ngọc Long Tuyết Sơn.", "Ngày 7-8: Shangri-La Tu viện Tùng Tán Lâm."], "assets/images/provinces/yunnan-lijiang-old-town.jpg", "TcqR7ORAAEY"),
        ("v7-exp-10", "Trung Nam Lưỡng Hồ", 6, "Trường Sa – Trương Gia Giới", "Tháng 4–6 & Tháng 9–11", "$780 – $1,220", "Thư Viện Nhạc Lộc, Cổ Trấn Phượng Hoàng & Rừng Đá Sa Thạch Trương Gia Giới", "Hunan Scholar & Highland Loop: Yuelu Academy, Fenghuang & Zhangjiajie (6D)", "湖南岳麓书院凤凰张家界6日线", "Từ ngôi trường nghìn năm Nhạc Lộc Thư Viện ở Trường Sa lên khu thêu bạc Tương Tây Miêu Tú và thung lũng sa thạch Trương Gia Giới.", "Pair a thousand-year Confucian academy in Changsha with silver-stitch Miao towns and mist-wrapped quartzite pillars.", ["Nhạc Lộc Thư Viện Trường Sa", "Bảo tàng Mã Vương Đôi", "Phượng Hoàng Cổ Trấn Tương Tây", "Công viên Trương Gia Giới – Thiên Môn Sơn"], ["Ngày 1-2: Trường Sa Nhạc Lộc Thư Viện & Mã Vương Đôi.", "Ngày 3-4: Phượng Hoàng Cổ Trấn & Xưởng Miêu Tú.", "Ngày 5-6: Trương Gia Giới & Thiên Môn Sơn."], "assets/images/provinces/hunan-zhangjiajie.jpg", "9wJCltuawSs"),
        ("v7-exp-11", "Trung Nguyên Hoàng Hà", 5, "Trịnh Châu – Lạc Dương – Khai Phong", "Tháng 4 (Hoa Mẫu Đơn) & Tháng 9–10", "$680 – $1,080", "Cái Nôi Hoa Hạ: Ân Khư Giáp Cốt Văn, Hang Đá Long Môn & Biện Kinh Tống", "Central Plains Cradle: Yinxu Oracle Bones, Longmen & Song Kaifeng (5D)", "中原殷墟龙门石窟开封5日线", "Chạm vào chữ Giáp Cốt 3.300 năm ở An Dương, chiêm ngưỡng Hang đá Long Môn Lạc Dương và không gian *Thanh Minh Thượng Hà Đồ* tại Khai Phong.", "Walk directly into Shang oracle-bone inscriptions, Tang monumental caves at Longmen, and Song urban canals in Kaifeng.", ["Kinh đô Thương Ân Khư", "Hang Đá Long Môn Lạc Dương", "Thiếu Lâm Tự Tung Sơn", "Thanh Minh Thượng Hà Viên Khai Phong", "Vũ Châu Quân Diêu"], ["Ngày 1: Trịnh Châu – Bảo tàng Hà Nam.", "Ngày 2: An Dương Ân Khư Giáp Cốt.", "Ngày 3: Hang đá Long Môn Lạc Dương.", "Ngày 4: Khai Phong Thanh Minh Thượng Hà Viên & Gốm Quân Diêu.", "Ngày 5: Tiễn Trịnh Châu."], "assets/images/provinces/henan-longmen-grottoes.jpg", "QfU7sU_iCQM"),
        ("v7-exp-12", "Trùng Khánh – Tam Hiệp", 5, "Trùng Khánh – Nghi Xương", "Tháng 3–5 & Tháng 9–11", "$740 – $1,190", "Đô Thị Núi 8D Trùng Khánh, Tượng Đá Đại Túc & Ký Ức Tam Hiệp Trường Giang", "Chongqing 8D Mountain Metropolis, Dazu Rock Carvings & Three Gorges (5D)", "重庆大足石刻三峡5日探访", "Khám phá hệ thống đường sắt chạy xuyên chung cư tại Trùng Khánh, di sản UNESCO Tượng đá Đại Túc thời Tống và hẻm Cù Đường – Vu Hiệp.", "Experience multilevel cliffside Hongyadong architecture, Song Buddhist grottoes at Dazu, and dramatic Yangtze river gorges.", ["Hồng Nhai Động & Ga Lý Tử Bá", "Di sản Tượng Đá Đại Túc", "Hẻm Tam Hiệp Trường Giang", "Cổ trấn Từ Khí Khẩu"], ["Ngày 1-2: Trùng Khánh Hồng Nhai Động & Ga xuyên tòa nhà.", "Ngày 3: Điêu khắc đá Đại Túc UNESCO.", "Ngày 4-5: Du thuyền Tam Hiệp tới Nghi Xương."], "assets/images/provinces/chongqing-hongyadong.jpg", "9wJCltuawSs"),
        ("v7-exp-13", "Hoa Nam Lĩnh Nam", 5, "Quảng Châu – Thuận Đức – Khai Bình", "Tháng 10–3 (Mát mẻ)", "$690 – $1,050", "Ẩm Thực Quảng Đông, Lụa Bùn Hương Vân Sa Thuận Đức & Điêu Lâu Khai Bình", "Lingnan Culinary & Craft Trail: Guangzhou, Shunde Silk & Kaiping Diaolou (5D)", "岭南美食香云纱开平碉楼5日游", "Hành trình tìm hiểu nghệ thuật Lụa Bùn Thuận Đức (tương đồng Lãnh Mỹ A VN), kiến trúc tháp pháo Điêu Lâu Khai Bình và kinh đô ẩm thực Dim Sum.", "Taste Cantonese culinary mastery while visiting river-mud silk dye yards and fortified Diasporic Diaolou towers.", ["Sa Diện & Trần Gia Từ Quảng Châu", "Xưởng Lụa Bùn Hương Vân Sa Thuận Đức", "Tháp Điêu Lâu Khai Bình UNESCO", "Tháp Quảng Châu về đêm"], ["Ngày 1-2: Quảng Châu Trần Gia Từ & Bảo tàng Nam Việt Vương.", "Ngày 3: Thuận Đức xưởng lụa Hương Vân Sa & Ẩm thực.", "Ngày 4-5: Quần thể Điêu Lâu Khai Bình."], "assets/images/provinces/guangdong-canton-tower.jpg", "fdhAsUBn2x8"),
        ("v7-exp-14", "Tề Lỗ Sơn Đông", 6, "Tế Nam – Khúc Phụ – Thanh Đảo", "Tháng 5–6 & Tháng 9–10", "$760 – $1,180", "Thái Sơn Ngũ Nhạc, Quê Hương Khổng Tử Khúc Phụ & Thành Phố Biển Thanh Đảo", "Confucian Heartland & Coast: Taishan, Qufu Three Kong Sites & Qingdao (6D)", "齐鲁泰山三孔青岛海韵6日游", "Kết hợp hành hương Nho giáo tại Khổng Miếu – Khổng Phủ – Khổng Lâm Khúc Phụ, chinh phục đỉnh Thái Sơn và di sản hải cảng Thanh Đảo.", "Combine UNESCO Confucian complexes at Qufu and sacred Mount Tai stone stairways with historic Qingdao harbor.", ["Hồ Đại Minh & Suối Bảo Đột Tế Nam", "Tam Khổng Khúc Phụ UNESCO", "Đỉnh Thái Sơn Ngọc Hoàng", "Cầu Chiến Kiều Thanh Đảo & Bảo tàng Lão Tự Hào"], ["Ngày 1-2: Tế Nam – Tam Khổng Khúc Phụ.", "Ngày 3-4: Leo hoặc cáp treo Thái Sơn ngắm bình minh.", "Ngày 5-6: Bảo tàng Hải dương & Phố cổ Thanh Đảo."], "assets/images/provinces/shandong-taishan.jpg", "qTrd010vMp8"),
        ("v7-exp-15", "Cao Nguyên Tây Tạng", 7, "Tây Ninh – Lhasa (Tuyến Thanh–Tạng)", "Tháng 5–10 (Thích nghi độ cao)", "$1,380 – $2,100", "Đỉnh Nóc Nhà Thế Giới: Cung Điện Potala Lhasa, Đền Jokhang & Hồ Namtso", "Roof of the World: Potala Palace, Jokhang Temple & Sacred Lake Namtso (7D)", "青藏铁路拉萨布达拉宫7日朝圣", "Trải nghiệm chuyến tàu Thanh Hải–Tây Tạng áp suất oxy, ngắm kiến trúc gỗ–đá Cung Potala và văn hóa giao thoa Tạng–Hán từ thời Công chúa Văn Thành.", "Ascend gently via the Qinghai–Tibet oxygen-pressurized rail to Potala Palace and turquoise alpine lakes.", ["Hồ Thanh Hải", "Cung điện Potala Lhasa UNESCO", "Chùa Đại Chiêu Jokhang & Phố Bát Giác", "Hồ Thánh Namtso 4.718m"], ["Ngày 1-2: Đáp Tây Ninh nghỉ thích nghi, lên tàu Thanh–Tạng.", "Ngày 3-5: Cung Potala, Jokhang & Tu viện Sera.", "Ngày 6: Hồ Namtso hoặc Hồ Yamdrok.", "Ngày 7: Kết thúc hành trình cao nguyên."], "assets/images/provinces/tibet-potala-palace.jpg", "R29A0GyLYlE"),
        ("v7-exp-16", "Liên Vận Việt – Trung", 5, "Hà Nội – Đồng Đăng – Nam Ninh – Quế Lâm", "Quanh năm (Đẹp nhất Xuân – Thu)", "$490 – $790", "Hành Lang Hữu Nghị Xuyên Biên Giới: Hà Nội – Nam Ninh – Khâm Châu – Quế Lâm", "Vietnam–China Rail Friendship Corridor: Hanoi to Nanning & Guilin (5D)", "中越跨境铁路友谊走廊5日行", "Hành trình mẫu thiết kế riêng cho du khách & doanh nhân Việt Nam kết hợp tham quan Quảng Tây, khu Bảo thuế Bằng Tường và thắng cảnh Quế Lâm tiết kiệm chi phí nhất.", "Tailored cross-border overland expedition from Hanoi connecting Pingxiang smart gates, Nanning hubs, and Guilin rivers.", ["Cửa khẩu Hữu Nghị – Bằng Tường", "Bảo tàng Dân tộc Quảng Tây Nam Ninh", "Cảnh Đức Quế Lâm – Sông Ly", "Cảng Khâm Châu Đón Tàu ASEAN"], ["Ngày 1: Hà Nội – Hữu Nghị Quan – Nam Ninh.", "Ngày 2-3: Tàu cao tốc đi Quế Lâm & Dương Sóc.", "Ngày 4: Thăm trung tâm thương mại & văn hóa Nam Ninh.", "Ngày 5: Về lại cửa khẩu Hữu Nghị – Hà Nội."], "assets/images/articles/hero-sino-vietnam.jpg", "ROFmtJLCq1k"),
    ]
    _SEASON_EN_MAP = {
        "Thu vàng tháng 9–11 & Xuân 4–5": "Golden Autumn (Sep–Nov) & Spring (Apr–May)",
        "Tháng 5–6 & Tháng 9–10": "May–Jun & Sep–Oct",
        "Tháng 3–5 & Tháng 10–11": "Mar–May & Oct–Nov",
        "Tháng 9–11 (Mùa lá đỏ)": "Sep–Nov (Crisp Autumn Foliage)",
        "Tháng 4–6 & Tháng 10–11": "Apr–Jun & Oct–Nov",
        "Tháng 4–10": "Apr–Oct (Clear Karst Season)",
        "Tháng 5–10": "May–Oct",
        "Tháng 4–6 & Tháng 9–11": "Apr–Jun & Sep–Nov",
        "Tháng 3–5 & Tháng 9–12": "Mar–May & Sep–Dec",
        "Tháng 4 (Hoa Mẫu Đơn) & Tháng 9–10": "April (Peony Season) & Sep–Oct",
        "Tháng 10–3 (Mát mẻ)": "Oct–Mar (Cool Subtropical Dry Season)",
        "Tháng 5–10 (Thích nghi độ cao)": "May–Oct (Mild Plateau Oxygen Window)",
        "Quanh năm (Đẹp nhất Xuân – Thu)": "Year-Round (Peak Spring & Autumn)",
    }

    _EN_DAY_NOTES = [
        ["Arrive & settle into historic city center evening stroll.", "Imperial Axis museums, timber hall acoustics & park overlook.", "Great Wall highland ridge hike along less crowded watchtowers.", "Temple grounds, artisan guild quarter & traditional tea session.", "Canal-side gardens & classical stage performance.", "Airport HSR connection and departure logistics."],
        ["Arrive Xi'an Tang West Market & City Wall cycling.", "Terracotta Army Pit 1–3 excavation study.", "Big Wild Goose Pagoda & Silk Road manuscripts.", "High-speed rail west across Qilian foothills to Lanzhou.", "Zhangye Danxia mineral strata geological hike.", "Jiayuguan Fortress Ming western frontier gate.", "Arrive Dunhuang evening market & desert dunes.", "Mogao Caves mineral murals & Library Cave curatorial tour.", "Mingsha Sand Dunes & Crescent Lake hydrological study.", "Conclude Hexi corridor study & airport departure."],
        ["Arrive Suzhou Humble Administrator's Garden morning calm.", "Suzhou Museum I.M. Pei geometry & Kunqu courtyard.", "Tongli granite footbridges & living canal alleyways.", "High-speed rail to Hangzhou West Lake willow causeways.", "Longjing green-tea valley plucking & National Tea Museum.", "Bullet train south to Jingdezhen Kaolin porcelain kilns.", "Taoxichuan brick-kiln studios & cobalt brushwork demo."],
        ["Arrive Chengdu Jinli lane & teahouse folk staging.", "Sanxingdui Bronze Masks museum & Dujiangyan levee walk.", "Plateau railway ascent into Jiuzhaigou travertine valleys.", "Emerald alpine pools & calcified travertine waterfalls.", "Huanglong high-elevation mineral pools & valley descent.", "Return to Chengdu teahouse courtyard before departure."],
        ["Arrive Hangzhou and transfer smoothly to Tunxi Old Street.", "Dongxi traditional Hui-style courtyard exploration.", "Ascend Huangshan granite ridges through pine valleys.", "High-mountain sunrise view & West Sea Grand Canyon.", "Hongcun Moon Pond & Xidi horse-head firewall architecture.", "Hu Kaiwen Workshop: inkstone & pine-soot rubbing.", "Jingxian Xuan paper mill vat dipping & departure."],
        ["Cross Hanoi/Friendship Pass overland into Nanning.", "Guilin karst peak cruise along Li River limestone cliffs.", "Yangshuo bamboo-raft countryside & village bike path.", "Longji sculpted terraced paddies & ethnic timber homes.", "Wind-and-Rain Bridge joinery visit & Nanning rail return."],
        ["Arrive Taiyuan Jin Temple ancient water springs & wooden halls.", "Pingyao Ming-Qing bank streets & intact city wall.", "Wang & Qiao merchant courtyard brick carving study.", "Hanging Monastery cliffside cantilevers & Yingxian Wooden Pagoda (1056).", "Yungang sandstone grottoes colossal carvings in Datong.", "Northern Shanxi rail transfer & departure."],
        ["Arrive Xiamen & ferry to Gulangyu historical mansions.", "Yongding earth Tulou passive cooling courtyard stay.", "Nanjing Zhangzhou canal town & tea roasting huts.", "Quanzhou Kaiyuan Temple Twin Pagodas & maritime wharves.", "Luoyang tidal oyster bridge engineering study.", "Hefu HSR climb to Wuyi Mountains.", "Nine-Bend Bamboo Raft & Da Hong Pao cliff tea tasting."],
        ["Arrive Kunming Stone Forest karst geology hike.", "Kunming Green Lake & Flower Market exploration.", "High-speed rail to Dali Erhai lakeside cycling.", "Chongsheng Three Pagodas & Bai tie-dye craft courtyard.", "Lijiang Old Town glacial canal & Three-Eye Well study.", "Jade Dragon Snow Mountain plateau flora excursion.", "Tiger Leaping Gorge canyon walk toward Shangri-La.", "Songzanlin Monastery valley study & departure."],
        ["Arrive Changsha Yuelu Academy thousand-year lecture halls.", "Hunan Museum Mawangdui Han lacquerware & silk archive.", "High-speed rail to Fenghuang stilts over Tuo River.", "Xiangxi Miao silver stitching & indigo dyeing guilds.", "Zhangjiajie quartzite spires natural forest walks.", "Tianmen Mountain cliff walkway & airport departure."],
        ["Arrive Zhengzhou Henan Museum early Yellow River bronzes.", "Anyang Yinxu Ruins oracle-bone pit & Museum.", "Luoyang Longmen Buddhist limestone caves along Yi River.", "Kaifeng Qingming Riverside living Song park & Jun glaze kilns.", "Central Plains rail connection & departure."],
        ["Arrive Chongqing & ride Liziba monorail passing through cliff housing.", "Hongyadong multilevel stilt-house waterfront & river bridges.", "Dazu Baodingshan Song dynasty cliffside stone carvings (UNESCO).", "Board Yangtze cruiser through Qutang & Wu Gorges.", "Disembark at Yichang below Three Gorges lock complex."],
        ["Arrive Guangzhou Shamian & Chen Clan brick carvings.", "Xiguan morning dim sum & Nanyue King jade burial archive.", "Shunde mud-dyed Xiangyunsha silk yard & canal kitchen.", "Kaiping fortified Diaolou countryside watchtowers (UNESCO).", "Pearl River evening architecture study & departure."],
        ["Arrive Jinan spring-fed Baotu pools & Daming Lake.", "Qufu Three Kong sites: Temple, Mansion & Cemetery of Confucius.", "Tai'an Dai Temple & climb southern Heavenly Gate stone steps.", "Sunrise overlooking Yellow River Plains atop Mount Tai.", "Qingdao maritime harbor promenade & Badaguan timber villas.", "Craft beverage museum & historic German-era rail station."],
        ["Arrive Xining high-altitude acclimatization & Kumbum Monastery.", "Board pressurized Qinghai-Tibet railway across Tanglha Pass.", "Lhasa Barkhor circuit walk & Jokhang sanctuary courtyard.", "Potala Palace white-and-ochre timber fortress halls.", "Sera Monastery debate courtyard & willow gardens.", "Day trip across turquoise alpine Lake Yamdrok / Namtso.", "Return down-valley rail or highland air departure."],
        ["Overland Hanoi-Dong Dang-Pingxiang border rail crossing.", "Nanning Guangxi Ethnology Museum & bronze drum gallery.", "Fast rail to Guilin Li River karst bends & Yangshuo.", "Nanning modern ASEAN trade hall exploration.", "Return smoothly across Friendship Pass back into Hanoi."],
    ]

    def _clean_en_days(idx: int, title_en: str, n_days: int) -> list[str]:
        preset = _EN_DAY_NOTES[idx] if idx < len(_EN_DAY_NOTES) else []
        return [
            (preset[i] if i < len(preset) else f"Day {i+1}: Field heritage immersion in {title_en.split(':')[0]}.")
            for i in range(n_days)
        ]

    heritage_expeditions_16 = [
        {
            "id": eid,
            "regionGroup": reg,
            "daysCount": days,
            "hsrRef": hsr_ref,
            "bestSeasonVi": bsvi,
            "bestSeasonEn": _SEASON_EN_MAP.get(bsvi, "Spring & Autumn"),
            "estimatedBudgetUsd": bud,
            "titleVi": tvi,
            "titleEn": ten,
            "titleZh": tzh,
            "summaryVi": svi,
            "summaryEn": sen,
            "stops": stops,
            "dayByDayOutlineVi": dvi,
            "dayByDayOutlineEn": _clean_en_days(exp_idx, ten, len(dvi)),
            "imagePath": ensure_verified_img(img),
            "youtubeId": ytid,
        }
        for exp_idx, (eid, reg, days, hsr_ref, bsvi, bud, tvi, ten, tzh, svi, sen, stops, dvi, img, ytid) in enumerate(exp_rows)
    ]

    # 8 Smart 240h & Digital Concierge Guides
    concierge_8 = [
        {
            "id": "v7-concierge-01", "stepNum": 1,
            "titleVi": "Chính Sách Miễn Thị Thực Quá Cảnh 240 Giờ (10 Ngày) Toàn Cầu",
            "titleEn": "240-Hour (10-Day) Cross-Provincial Visa-Free Transit Rule",
            "titleZh": "240小时过境免签政策实战清单",
            "summaryVi": "Khách quá cảnh tới nước thứ 3 có thể ở lại tối đa 240 giờ (10 ngày) tại 24 tỉnh/thành qua 60 cửa khẩu được chỉ định.",
            "summaryEn": "Eligible transit travelers flying onward to a third country/region enjoy 240 hours across 24 provinces and 60 open ports.",
            "actionChecklistVi": ["Chuẩn bị vé máy bay chặng tiếp theo sang nước/vùng lãnh thổ thứ ba (ví dụ VN -> Bắc Kinh -> Hàn Quốc/Nhật/Hồng Kông).", "Xuất trình booking khách sạn và Hộ chiếu còn hạn trên 6 tháng tại quầy 240h Visa-Free Transit ở sân bay.", "Chỉ du lịch trong phạm vi 24 tỉnh thuộc danh mục quy định (bao gồm Bắc Kinh, Thượng Hải, Tây An, Thành Đô, Quế Lâm...)."],
            "actionChecklistEn": ["Hold confirmed onward ticket to a third country/region (A -> China -> C).", "Present hotel reservations + valid 6-month passport at 240h Transit lane.", "Travel strictly within the 24 permitted provinces during the 240-hour window."],
            "emergencyPhraseZh": "你好，我申请240小时过境免签入境，这是我前往第三国的机票。",
            "emergencyPhrasePinyin": "Nǐhǎo, wǒ shēnqǐng èrbǎi sìshí xiǎoshí guòjìng miǎnqiān rùjìng.",
            "emergencyPhraseMeaningVi": "Xin chào, tôi xin làm thủ tục quá cảnh miễn thị thực 240 giờ, đây là vé đi nước thứ ba của tôi.",
            "emergencyPhraseMeaningEn": "Hello, I am applying for the 240-hour visa-free transit; here is my confirmed ticket to a third country.",
        },
        {
            "id": "v7-concierge-02", "stepNum": 2,
            "titleVi": "Liên Kết Thẻ Visa / Mastercard Việt Nam Vào Alipay & WeChat Pay",
            "titleEn": "Binding Foreign Visa/Mastercard Into Alipay & WeChat Pay (Fee-Free <= 200 RMB)",
            "titleZh": "支付宝与微信绑定外卡免手续费攻略",
            "summaryVi": "Thanh toán QR mọi quán ăn, tàu điện, mua vé thắng cảnh bằng thẻ Visa/Mastercard Việt Nam miễn phí 3% cho đơn <= 200 RMB.",
            "summaryEn": "Scan any merchant QR seamlessly using foreign cards inside Alipay/WeChat Pay with 0% surcharge on orders at or under 200 RMB.",
            "actionChecklistVi": ["Tải Alipay & WeChat bản mới nhất trước khi rời Việt Nam, bật chế độ xác thực danh tính bằng ảnh hộ chiếu (Passport Verification).", "Nhờ ngân hàng phát hành thẻ tại Việt Nam mở khóa thanh toán quốc tế trực tuyến & nhận SMS/App OTP qua eSIM.", "Chia hóa đơn lớn > 200 RMB thành hai lần thanh toán nếu đối tác đồng ý để tránh phí thẻ quốc tế 3%."],
            "actionChecklistEn": ["Verify passport ID in Alipay/WeChat Pay before departure.", "Ensure roaming/eSIM OTP notifications stay active for first-time bank 3DS verification.", "Single QR transactions <= 200 RMB automatically enjoy fee-waiver."],
            "emergencyPhraseZh": "请问可以用支付宝或微信扫码付款吗？",
            "emergencyPhrasePinyin": "Qǐngwèn kěyǐ yòng Zhīfùbǎo huò Wēixìn sǎomǎ fùkuǎn ma?",
            "emergencyPhraseMeaningVi": "Xin hỏi tôi có thể quét mã thanh toán bằng Alipay hoặc WeChat được không?",
            "emergencyPhraseMeaningEn": "Excuse me, may I pay by scanning an Alipay or WeChat QR code?",
        },
        {
            "id": "v7-concierge-03", "stepNum": 3,
            "titleVi": "Đặt Vé Tàu Cao Tốc 12306 & Quét Thẳng Hộ Chiếu Qua Cổng Ga",
            "titleEn": "12306 High-Speed Rail & Automated Passport E-Gate Boarding",
            "titleZh": "12306高铁购票与护照自助进站指南",
            "summaryVi": "Hệ thống Đường sắt 12306 đã dùng vé điện tử gắn thẳng số hộ chiếu; không cần xếp hàng in vé giấy tại quầy.",
            "summaryEn": "12306 paperless e-ticketing maps directly to your passport chip or human-inspection lane without paper printouts.",
            "actionChecklistVi": ["Mua vé trên ứng dụng chính thức Railway 12306 (bản tiếng Anh) hoặc Trip.com bằng đúng chính tả tên trên hộ chiếu.", "Có mặt tại ga trước 30–40 phút kiểm tra an ninh (không mang dao kéo hay bình xịt áp suất quá 150ml).", "Đi vào cổng soát vé có biểu tượng Hộ chiếu / Nhân viên trực để quét trang thông tin hộ chiếu và lên đúng toa tàu."],
            "actionChecklistEn": ["Book using exact passport MRZ spelling on Railway 12306 EN or Trip.com.", "Arrive 35 minutes prior for station baggage X-ray.", "Use Passport Reader / Manual Channel gate at platform entry."],
            "emergencyPhraseZh": "您好，我是用护照买的车票，请问从哪个检票口进站？",
            "emergencyPhrasePinyin": "Nínhǎo, wǒ shì yòng hùzhào mǎi de chēpiào, qǐngwèn cóng nǎge jiǎnpiàokǒu jìnzhàn?",
            "emergencyPhraseMeaningVi": "Xin chào, tôi mua vé bằng hộ chiếu, xin hỏi tôi đi vào từ cổng kiểm vé nào?",
            "emergencyPhraseMeaningEn": "Hello, I booked my ticket with my passport; which boarding gate lane should I enter?",
        },
        {
            "id": "v7-concierge-04", "stepNum": 4,
            "titleVi": "Săn Vé Bảo Tàng Cố Cung – Lăng Tần Trước 7 Ngày Bằng Hộ Chiếu",
            "titleEn": "7-Day Advance Passport Reservation for Forbidden City & Top Museums",
            "titleZh": "故宫博物院及重点文博场馆护照预约法则",
            "summaryVi": "Cố Cung, Bảo tàng Quốc gia, Bảo tàng Tô Châu, Di tích Tam Tinh Đôi không bán vé giấy tại cửa và hết sạch sau vài phút mở bán.",
            "summaryEn": "Major museums ban walk-up sales; passport-bound tickets release exactly 7 days ahead at 20:00 Beijing Time.",
            "actionChecklistVi": ["Đặt nhắc lịch đúng 19:00 giờ Việt Nam (20:00 giờ Bắc Kinh) trước ngày tham quan đúng 7 ngày trên Mini-Program/Web chính thức của Cố Cung.", "Chuẩn bị sẵn số hộ chiếu, họ tên viết hoa không dấu và ảnh chụp hộ chiếu nếu cần xác minh tại cổng.", "Lưu ý tất cả bảo tàng lớn tại Trung Quốc ĐÓNG CỬA THỨ HAI hàng tuần (trừ ngày lễ Quốc khánh/Tết)."],
            "actionChecklistEn": ["Set alarm for 20:00 Beijing time (19:00 VN time) 7 days before visit.", "Pre-save passport numbers for rapid checkout.", "Remember almost all Chinese museums close every Monday."],
            "emergencyPhraseZh": "我已在网上用护照预约了今天上午的门票，请核对护照原件。",
            "emergencyPhrasePinyin": "Wǒ yǐ zài wǎngshàng yòng hùzhào yùyuē le jīntiān shàngwǔ de ménpiào.",
            "emergencyPhraseMeaningVi": "Tôi đã đặt vé buổi sáng hôm nay trực tuyến bằng hộ chiếu, xin kiểm tra hộ chiếu gốc.",
            "emergencyPhraseMeaningEn": "I booked this morning's ticket online using my passport; please verify my original passport.",
        },
        {
            "id": "v7-concierge-05", "stepNum": 5,
            "titleVi": "Thiết Lập eSIM Quốc Tế & Bản Đồ Amap (Cao Đức) / Baidu Ngoại Tuyến",
            "titleEn": "Travel eSIM Connectivity & Offline Amap Navigation Setup",
            "titleZh": "境外漫游 eSIM 与高德离线地图配置",
            "summaryVi": "Sử dụng eSIM chuyển vùng quốc tế giữ nguyên truy cập ứng dụng cần thiết, kết hợp Amap tìm đúng cổng bảo tàng và ga tàu điện ngầm.",
            "summaryEn": "International roaming eSIMs preserve native global apps while Amap (Gaode) shows live metro exits and walkable alley maps.",
            "actionChecklistVi": ["Cài eSIM quốc tế data không giới hạn từ Việt Nam trước khi bay (tự chuyển đổi sang mạng nội địa mượt mà).", "Tải Amap (高德地图 — hiện đã có bản tiếng Anh!) để xem chính xác cửa ra Metro (Exit A/B/C) và thời gian tàu tới từng phút.", "Lưu sẵn tên địa danh bằng chữ Hán phồn/giản thể vào ghi chú ngoại tuyến để đưa tài xế taxi đọc nhanh."],
            "actionChecklistEn": ["Activate international travel eSIM prior to departure.", "Install Amap English UI for real-time metro exit navigation.", "Bookmark Chinese street addresses offline for taxi drivers."],
            "emergencyPhraseZh": "师傅，麻烦送我去这个地址，谢谢！",
            "emergencyPhrasePinyin": "Shīfu, máfan sòng wǒ qù zhège dìzhǐ, xièxie!",
            "emergencyPhraseMeaningVi": "Bác tài ơi, phiền bác chở giúp tôi tới địa chỉ trên màn hình này, xin cảm ơn!",
            "emergencyPhraseMeaningEn": "Driver, please take me to the address shown on this screen, thank you!",
        },
        {
            "id": "v7-concierge-06", "stepNum": 6,
            "titleVi": "Gọi Món Quét Mã QR & Đặt Xe Didi Không Cần Số Điện Thoại TQ",
            "titleEn": "Ordering via Restaurant QR Mini-Programs & Calling Didi Without CN SIM",
            "titleZh": "桌面扫码点餐与无内地手机号打车技巧",
            "summaryVi": "Trong Alipay tích hợp sẵn mục Dịch Thuật thực đơn tiếng Việt–Anh trực tiếp và gọi xe Didi English chỉ với một chạm.",
            "summaryEn": "Built-in Alipay Translate decodes QR table menus instantly while Didi English mini-app dispatches rides without a Chinese mobile number.",
            "actionChecklistVi": ["Mở Alipay -> Mini-program 'Didi Travel' để chọn điểm đón/trả trên bản đồ và tự động trừ tiền từ thẻ quốc tế khi xuống xe.", "Khi quét mã QR trên bàn nhà hàng bằng Alipay, bật nút 'Translate' ở góc phải trên để dịch món ăn kèm ảnh minh họa.", "Nhắn chọn 'ít cay / không rau mùi' (不要辣 / 不要香菜) trực tiếp trong phần ghi chú trước khi gửi bếp."],
            "actionChecklistEn": ["Launch Didi inside Alipay for seamless fare auto-settlement.", "Tap the top-right 'Translate' icon on QR table menus.", "Specify 'Bú yào là' (not spicy) before confirming kitchen order."],
            "emergencyPhraseZh": "请问菜单有带图片或英文的吗？麻烦微辣即可。",
            "emergencyPhrasePinyin": "Qǐngwèn càidān yǒu dài túpiàn huò Yīngwén de ma? Máfan wēilà jíkě.",
            "emergencyPhraseMeaningVi": "Xin hỏi thực đơn có hình ảnh hoặc bản tiếng Anh không? Xin làm cay nhẹ giúp tôi.",
            "emergencyPhraseMeaningEn": "Do you have an illustrated or English menu? Please make it mildly spicy for me.",
        },
        {
            "id": "v7-concierge-07", "stepNum": 7,
            "titleVi": "Quy Trình Hoàn Thuế Du Lịch 11% (Tax Refund) Tại Sân Bay",
            "titleEn": "11% Departure Tax Refund Eligibility at Shops & Airports",
            "titleZh": "离境退税 11% 购物发票与海关核验流程",
            "summaryVi": "Mua sắm từ 500 RMB/cửa hàng có biển Tax Free trở lên trong vòng 90 ngày trước khi xuất cảnh được hoàn ~9–11% thuế.",
            "summaryEn": "Visitors purchasing >= 500 RMB at registered Tax Free stores qualify for up to 11% VAT refund (net ~9% after agency fee).",
            "actionChecklistVi": ["Yêu cầu cửa hàng (cũng áp dụng ở nhiều trung tâm thương mại và Lão Tự Hào lớn) xuất Mẫu Đơn Hoàn Thuế (Tax Refund Form) kèm Hộ chiếu gốc.", "Giữ nguyên niêm phong hàng hóa chưa sử dụng để Hải quan tại sảnh Khởi hành sân bay đối chiếu trước khi gửi hành lý ký gửi.", "Nhận tiền hoàn trả bằng tiền mặt RMB hoặc hoàn thẳng về thẻ tín dụng quốc tế tại quầy Bank of China sau khu vực an ninh."],
            "actionChecklistEn": ["Request official Tax Refund Form + VAT invoice when spending >= 500 RMB per shop.", "Present sealed items to Airport Customs BEFORE checking luggage.", "Collect RMB cash or card credit post-security counter."],
            "emergencyPhraseZh": "您好，请问这里可以开具离境退税申请单吗？",
            "emergencyPhrasePinyin": "Nínhǎo, qǐngwèn zhèlǐ kěyǐ kāijù líjìng tuìshuì shēnqǐngdān ma?",
            "emergencyPhraseMeaningVi": "Xin chào, xin hỏi cửa hàng có xuất giấy đề nghị hoàn thuế xuất cảnh không ạ?",
            "emergencyPhraseMeaningEn": "Hello, does your store issue an overseas departure tax refund application form?",
        },
        {
            "id": "v7-concierge-08", "stepNum": 8,
            "titleVi": "Bộ Câu Giao Tiếp Khẩn Cấp Tại Sân Bay – Ga Tàu – Khách Sạn – Cơ Sở Y Tế",
            "titleEn": "Essential Mandarin Emergency & Concierge Phrasebook with Audio",
            "titleZh": "应急求助常用汉语音频速查卡片",
            "summaryVi": "Bốn mẫu câu quan trọng nhất kèm nút phát âm tiếng Trung chuẩn hỗ trợ xử lý tức thì khi thất lạc đồ, trễ tàu hoặc cần trợ giúp.",
            "summaryEn": "Four indispensable high-clarity Mandarin sentences with instant TTS playback for urgent lost-item, transit, or reception assistance.",
            "actionChecklistVi": ["Đặt hộ chiếu bản chụp mật khẩu riêng và ghi số Đường dây nóng Du lịch 12301 (có hỗ trợ đa ngữ).", "Khẩn cấp 110 (Cảnh sát), 120 (Cấp cứu y tế), 119 (Cứu hỏa) hoạt động miễn phí toàn quốc.", "Sử dụng nút 'Phát âm' bên dưới mỗi thẻ để cho nhân viên phục vụ nghe trực tiếp nếu cần."],
            "actionChecklistEn": ["Keep encrypted passport photo + dial 12301 for multilingual tourism assistance.", "Emergency numbers: 110 Police, 120 Ambulance, 119 Fire.", "Tap the TTS Audio button below whenever you need clear Mandarin speech."],
            "emergencyPhraseZh": "请帮我联系越南驻华使领馆，或拨打12301旅游热线。我的随身物品遗失了。",
            "emergencyPhrasePinyin": "Qǐng bāng wǒ liánxì Yuènán zhù Huá shǐlǐngguǎn, huò bōdǎ 12301 lǚyóu rèxiàn.",
            "emergencyPhraseMeaningVi": "Xin hãy giúp tôi liên hệ Đại sứ quán/Lãnh sự quán Việt Nam hoặc đường dây nóng du lịch 12301.",
            "emergencyPhraseMeaningEn": "Please help me contact the Vietnamese Embassy/Consulate or the 12301 tourism hotline.",
        },
    ]

    if ext.get("tradeTerms50"):
        trade_terms_50 = merge_unique_by_key(trade_terms_50, ext["tradeTerms50"], "id")[:50]

    _HOTSPOT_FIELD_EN_MAP = {
        "Mã số HS 10 chữ số và mã CIQ sản phẩm (HS / CIQ Code)": "HS / CIQ Product Code (10-digit HS & 3-digit CIQ)",
        "Tên pháp nhân và địa chỉ nhà máy sản xuất (Production Facility Address)": "Production Facility Legal Name & Address",
        "Bản cam kết tuân thủ quy định Trung Quốc và sơ đồ quy trình HACCP": "China Regulatory Compliance Pledge & HACCP Flow Diagram",
        "Điều khoản Quyền sở hữu khuôn mẫu và Sở hữu trí tuệ (Tooling & IP Clause)": "Tooling Ownership & Intellectual Property Clause",
        "Phụ lục Tiêu chuẩn kỹ thuật, Mẫu chuẩn Golden Sample và ngưỡng AQL": "Technical Specs, Golden Sample & AQL Tolerance Schedule",
        "Điều khoản Ngôn ngữ ưu tiên và Trọng tài giải quyết tranh chấp": "Prevailing Language & Arbitration Jurisdiction Clause",
        "Mục Khai báo bổ sung (Additional Declaration — PUC & PHC)": "Additional Declaration (PUC Orchard & PHC Packhouse Codes)",
        "Tên khoa học loài thực vật và trọng lượng tịnh (Botanical Name & Net Weight)": "Botanical Scientific Name & Net Weight",
        "Số container, số chì niêm phong và biển số xe lạnh (Conveyance Details)": "Container No., Customs Seal & Reefer Conveyance Details",
        "Trường 42C / 42P: Kỳ hạn hối phiếu và điều khoản thanh toán chậm": "Field 42C / 42P: Usance Draft Tenor & Deferred Terms",
        "Trường 46A: Danh mục chứng từ xuất trình bắt buộc": "Field 46A: Mandatory Presentation Document Schedule",
        "Trường 44C & 48: Ngày giao hàng muộn nhất và thời hạn xuất trình chứng từ": "Fields 44C & 48: Latest Shipment Date & Presentation Window",
        "Mã định danh giao dịch UETR / CIPS Reference & Mã mục đích thanh toán": "UETR / CIPS Transaction Reference & Payment Purpose Code",
        "Tỷ giá quy đổi chốt lệnh và cơ chế chia phí (OUR / SHA / BEN)": "Locked Settlement FX Rate & Fee Allocation (OUR / SHA / BEN)",
        "Đối chiếu số tiền thực nhận với số tờ khai hải quan đã thông quan": "Reconciled Wire Amount vs Cleared Customs Declaration",
    }

    if ext.get("tradeDocs5"):
        trade_docs_5 = merge_positional_enrich(trade_docs_5, ext["tradeDocs5"])
    for d in trade_docs_5:
        d["nameVi"] = d.get("titleVi") or d.get("nameVi", "")
        d["nameEn"] = d.get("titleEn") or d.get("nameEn", "")
        d["nameZh"] = d.get("titleZh") or d.get("nameZh", "")
        d["issuerVi"] = d.get("issuerRoleVi") or d.get("issuerVi", "")
        for h in d.get("hotspots", []):
            if isinstance(h, dict):
                fraw = h.get("field") or ""
                h["fieldVi"] = h.get("fieldVi") or h.get("fieldNameVi") or fraw
                h["fieldEn"] = _HOTSPOT_FIELD_EN_MAP.get(fraw) or h.get("fieldEn") or h.get("fieldNameEn") or fraw
                if not h.get("complianceRiskVi") and h.get("tipVi"):
                    h["complianceRiskVi"] = h["tipVi"]
                if not h.get("complianceRiskEn") and h.get("tipEn"):
                    h["complianceRiskEn"] = h["tipEn"]

    if ext.get("supplyCases10"):
        supply_cases_10 = merge_positional_enrich(supply_cases_10, ext["supplyCases10"])
    if ext.get("sinoVietWonders6"):
        sino_viet_6 = merge_unique_by_key(sino_viet_6, ext["sinoVietWonders6"], "id")[:6]
    if ext.get("cscUniversities12"):
        csc_unis_12 = merge_unique_by_key(csc_unis_12, ext["cscUniversities12"], "id")[:12]
    for u in csc_unis_12:
        u["agencyNo"] = u.get("agencyNumber") or u.get("agencyNo", "")
        u["majorsVi"] = u.get("strengthsVi") or u.get("majorsVi", "")
    if ext.get("cscInterviews12"):
        csc_iv_12 = merge_unique_by_key(csc_iv_12, ext["cscInterviews12"], "id")[:12]
    if ext.get("hsrCorridors4"):
        hsr_8 = merge_positional_enrich(hsr_8[:4], ext["hsrCorridors4"]) + hsr_8[4:]
    if ext.get("heritageExpeditions16"):
        heritage_expeditions_16 = merge_unique_by_key(heritage_expeditions_16, ext["heritageExpeditions16"], "id")[:16]
    if ext.get("digitalTravelConcierge8"):
        concierge_8 = merge_unique_by_key(concierge_8, ext["digitalTravelConcierge8"], "id")[:8]

    return sanitize_recursive({
        "b2bTerms50": trade_terms_50,
        "annotatedTradeDocs5": trade_docs_5,
        "extraSupplyCases10": supply_cases_10,
        "sinoVietWonders6": sino_viet_6,
        "cscUniversities12": csc_unis_12,
        "cscInterviews12": csc_iv_12,
        "hsrCorridors8": hsr_8,
        "heritageExpeditions16": heritage_expeditions_16,
        "digitalTravelConcierge8": concierge_8,
    })
