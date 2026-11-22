"""V6 Pack 5 (11 Incoterms 2020, 10 Annotated Trade Docs, 16 Extra Supply Cases -> 40 Total,
10 Sino-Vietnam Comparative Wonders, 24 CSC Universities, 12-Month CSC Gantt, 24 CSC Interviews, 12306 HSR Network)."""

from __future__ import annotations

INCOTERMS_11 = [
    ("EXW", "Ex Works (Tại xưởng TQ)", "Any Mode", 0, 0, "Rủi ro & chi phí chuyển sang người mua ngay tại cửa kho nhà máy TQ. Người mua EU chịu trách nhiệm thuê xe, xuất khẩu tại TQ – dễ kẹt nếu xưởng không có quyền xuất.", "Risk & costs pass at factory gate; high origin export risk if supplier lacks customs broker rights."),
    ("FCA", "Free Carrier (Giao cho người chuyên chở)", "Any Mode", 2, 2, "Chuẩn Vàng khuyên dùng khi đặt container đi Tàu sắt CR Express (ga Trùng Khánh/Tây An) hoặc FOB kho bãi cảng: nhà máy TQ tự thông quan xuất khẩu.", "Recommended gold-standard rule for CR Express rail yards & containerized sea freight."),
    ("CPT", "Carriage Paid To (Cước phí trả tới đích)", "Any Mode", 2, 5, "Người bán trả cước chính tới châu Âu nhưng RỦI RO trên hành trình chuyển sang Người mua ngay khi giao hàng cho nhà vận tải đầu tiên tại TQ!", "Seller pays main carriage to destination, yet transit risk passes at origin first carrier handover."),
    ("CIP", "Carriage & Insurance Paid To (Bảo hiểm ICC A 110%)", "Any Mode", 2, 5, "Giống CPT nhưng bắt buộc người bán mua bảo hiểm mọi rủi ro cao nhất Institute Cargo Clauses (A) 110% giá trị lô hàng.", "Same risk point as CPT plus mandatory maximum ICC (A) 110% cargo insurance coverage."),
    ("DAP", "Delivered at Place (Giao tại địa điểm đích)", "Any Mode", 6, 6, "Người bán chịu trách nhiệm & rủi ro tới tận kho Đức/Hà Lan/Bắc Ninh (chưa dỡ xuống, người mua làm thủ tục nhập khẩu & đóng thuế EU VAT/CBAM).", "Seller bears risk all the way to named EU terminal/factory ready for unloading; buyer clears import."),
    ("DPU", "Delivered at Place Unloaded (Giao tại nơi đã dỡ hàng)", "Any Mode", 6, 6, "Điều kiện duy nhất bắt buộc Người bán chịu rủi ro và chi phí dỡ hàng khỏi toa tàu/container tại bãi đích châu Âu.", "Only rule requiring seller to unload cargo safely at named destination terminal."),
    ("DDP", "Delivered Duty Paid (Giao đã nộp thuế)", "Any Mode", 7, 7, "Rủi ro cực cao cho xưởng TQ vì phải lo cả EORI, nhập khẩu EU VAT và khai CBAM/EUDR (dễ tắc tại Rotterdam nếu xưởng dùng đại lý khai khống).", "Seller bears maximum duty including EU import clearance; high compliance trap if origin forwarder lacks EU EORI."),
    ("FAS", "Free Alongside Ship (Giao dọc mạn tàu)", "Sea Only", 2, 2, "Dùng cho hàng rời/siêu trường xếp cạnh cầu tàu cảng Thượng Hải – Hải Phòng trước khi cẩu qua lan can.", "Bulk or breakbulk cargo placed strictly alongside vessel wharf at port of loading."),
    ("FOB", "Free On Board (Giao lên tàu)", "Sea Only", 3, 3, "Phổ biến nhất cho nguyên cont FCL từ Ninh Ba / Diêm Điền / Hải Phòng đi EU (nên ưu tiên FCA cho cont FCL nếu giao tại CY; rủi ro chuyển khi đặt gọn trên tàu).", "Classic sea-only term; risk passes once goods sit securely on board at Chinese load port."),
    ("CFR", "Cost and Freight (Tiền hàng và Cước)", "Sea Only", 3, 5, "Người bán trả cước tàu tới Rotterdam nhưng rủi ro biển vòng Biển Đỏ – Mũi Hảo Vọng vẫn do Người mua gánh từ lúc xếp lên tàu tại cảng TQ.", "Seller books sea freight to EU port, yet buyer absorbs voyage loss/deviation risks from loading."),
    ("CIF", "Cost, Insurance & Freight (Tiền hàng, Bảo hiểm C & Cước)", "Sea Only", 3, 5, "Giống CFR nhưng kèm bảo hiểm mức tối thiểu ICC (C); lưu ý kiểm soát tránh cước ngầm đích cao bất thường ('CIF Zero-Freight Trap').", "Includes baseline ICC (C) marine cover; watch for inflated destination LCL discharge surcharges.")
]

ANNOTATED_DOCS_10 = [
    ("doc-mbl", "Master Ocean Bill of Lading (B/L)", "Vận đơn Đường biển Chính (MBL)", "海运主提单", "Hãng tàu Biển (COSCO / Maersk / ONE)", [
        ("Shipper / Consignee / Notify Party", "发货人 / 收货人 / 通知方", "Người gửi / Người nhận / Bên nhận thông báo", "Phải khớp 100% EORI nhập khẩu & Điều khoản Thư tín dụng L/C; sai 1 ký tự tên công ty châu Âu bị bank đánh lỗi sai biệt.", "Kiểm tra draft B/L 48h trước tàu chạy, đặc biệt yêu cầu Telex Release / Surrendered nếu thanh toán T/T."),
        ("HS Code 6-Digit Description", "6位HS编码与货描", "Mô tả hàng & Mã HS 6 số", "Quy định EU ICS2 Release 3 phạt và giữ cont nếu chỉ ghi chung chung 'Parts' hoặc 'Electronics'.", "Khai rõ chủng loại thương mại + mã HS 6 số chuẩn TARIC."),
        ("Shipped On Board Date", "已装船日期", "Ngày Hàng Xếp Lên Tàu (SOB)", "Quyết định mốc chuyển rủi ro FOB/CIF và hạn giao hàng cuối cùng trên L/C (Latest Shipment Date).", "Đối khớp ngày SOB với lịch tàu thực tế không được trễ ngày chốt L/C."),
        ("Freight Prepaid vs Collect & Gross Weight (VGM)", "运费预付/到付及SOLAS总重", "Điều kiện Cước & Tổng trọng lượng VGM", "Chênh lệch >5% trọng lượng Packing List với VGM/B/L kích hoạt kiểm hóa tại cảng Rotterdam/Hamburg.", "Cân kiểm VGM thực tế tại cầu cảng trước hạn Closing Time.")
    ]),
    ("doc-smgs", "SMGS Rail Consignment Note", "Vận đơn Đường sắt Quốc tế SMGS", "国际铁路货物联运运单 (SMGS)", "Tổng công ty Đường sắt TQ & Bãi CR Express", [
        ("Box 25 — Gauge-Break Border Stations", "第25栏 — 过境国境站代码", "Ô 25 — Cửa khẩu Biên giới & Đổi Khổ Ray", "Ghi sai mã UIC ga Alashankou/Khorgos hoặc Brest/Małaszewicze làm toa hàng đứng bãi chuyển khổ 1.520/1.435mm từ 7–14 ngày.", "Xác nhận mã UIC 4 chữ số trên Booking Note trước lúc xếp cont."),
        ("Seal No. & Container Ownership Type", "铅封号与集装箱箱属", "Số Chì Niêm Phong & Chủ Sở Hữu Container", "Phân biệt cont hãng đường sắt (COC) vs cont thuê mua một chiều (SOC) để tính đúng hạn miễn phí lưu bãi DEM/DET tại Duisburg.", "Khóa rõ thời hạn trả rỗng Depot tại Đức/Ba Lan ngay trên phụ lục hợp đồng."),
        ("Dangerous Goods Declaration (UN38.3)", "危险品/锂电池运输鉴定", "Xác nhận An toàn Pin Lithium / Hóa chất", "Đoàn tàu liên vận qua Belarus/Ba Lan soi cực kỹ pin Li-ion; giấu pin trong kiện thường bị phạt đình chỉ cả lô.", "Kẹp báo cáo UN38.3 + MSDS còn hạn năm hiện tại.")
    ]),
    ("doc-ics2", "EU ICS2 Entry Summary Declaration (ENS)", "Tờ khai An ninh Nhập khẩu Sớm EU ICS2", "欧盟进口控制系统ICS2预报关", "Hãng vận tải & Nhà nhập khẩu EU", [
        ("6-Digit HS Code & Plain-Language Goods Spec", "6位HS税号与清晰品名", "Mã HS 6 chữ số & Tên hàng rõ ràng", "Hệ thống hải quan EU từ chối tự động mọi vận đơn dùng mô tả mơ hồ như 'Consolidated Cargo' hay 'Spare Parts'.", "Đổi toàn bộ sang từ điển mô tả chấp nhận được của DG TAXUD."),
        ("EU Consignee EORI Number", "欧盟收货人EORI税号", "Mã số EORI Doanh nghiệp Nhập khẩu EU", "Thiếu EORI hợp lệ trong hồ sơ ENS trước 24h xếp tàu tại Diêm Điền/Ninh Ba khiến hàng không được phép dỡ tại cảng EU.", "Xác thực EORI trên cổng chính thức EC trước khi duyệt Booking."),
        ("Buyer & Seller Multiple-Filing Link", "买方与卖方分申报关联码", "Khớp Mã Tham Chiếu Hồ Sơ Kép Nhà Nhập Khẩu", "Nếu chọn Multiple Filing, thiếu tham chiếu giao nối giữa House Filing của Forwarder và Master Filing của Hãng tàu sẽ chặn thông quan.", "Chia sẻ Master B/L number ngay sau khi hãng tàu cấp.")
    ]),
    ("doc-forme", "ACFTA Certificate of Origin Form E", "C/O Form E (Hiệp định Trung Quốc – ASEAN)", "中国—东盟自贸区原产地证书 Form E", "Hải quan TQ / CCPIT", [
        ("Box 8 — Origin Criterion (WO / PE / RVC 40%)", "第8栏 — 原产地标准", "Ô 8 — Tiêu chí Xuất xứ (WO / PE / 40% RVC)", "Chỉ cần chọn sai 'WO' thành 'PE' hoặc thiếu % hàm lượng khu vực khi dùng linh kiện ngoài ACFTA -> mất hoàn toàn thuế nhập khẩu 0% ở Hải Phòng.", "Đối chiếu định mức nguyên liệu BOM trước khi nhấn nộp hệ thống e-Form E."),
        ("Box 10 & Third-Party Invoicing Mark", "第10栏发票号与第三方发票勾选", "Ô 10 & Đánh dấu Hóa đơn Bên Thứ Ba", "Khi mua từ công ty thương mại Hồng Kông/Singapore mà nhà máy đóng tại Thâm Quyến xuất hàng -> quên tích 'Third Party Invoicing' là bị Hải quan VN bác C/O.", "Bắt buộc tích ô 13 (Third Party Invoicing) và ghi tên công ty phát hành invoice thương mại tại ô 7."),
        ("Box 3 — Vessel Name & Departure Date", "第3栏 — 船名航次与离港日", "Ô 3 — Tên Tàu / Số Xe & Ngày Rời Bến", "Thông tin tàu trên Form E sai lệch ngày chạy so với B/L thực tế quá 3 ngày có thể bị kiểm tra sau thông quan.", "Xin cấp Form E sau khi đã có tàu chạy ổn định hoặc dùng cấp sau 'Issued Retroactively'.")
    ]),
    ("doc-eur1", "EVFTA Origin Proof (EUR.1 / REX)", "Chứng nhận Xuất xứ EVFTA (EUR.1 / Tự chứng nhận REX)", "欧盟—越南自贸协定原产地证明", "Bộ Công Thương (VN) / Nhà XK đăng ký REX", [
        ("REX Registration Number (Lô hàng > 6.000 EUR)", "欧盟REX注册出口商编号", "Mã số Tự chứng nhận Xuất xứ REX", "Doanh nghiệp EU nhập từ Việt Nam đơn hàng vượt 6.000 EUR chỉ được hưởng thuế 0% EVFTA nếu Invoice ghi đúng câu văn REX kèm mã số hợp lệ.", "Kiểm tra hiệu lực mã REX và ngôn ngữ câu văn tuyên bố đúng Phụ lục EVFTA."),
        ("Origin Rule Compliance (CTH / MaxNOM / Fabric Cumulation)", "原产地加工规则与面料累积", "Quy tắc Xuất xứ Chuyển đổi Mã HS / Cộng gộp vải Hàn", "Dệt may VN dùng vải TQ không được hưởng EVFTA (trừ khi dệt/nhuộm đạt bước chuyển đổi 2 công đoạn tại VN hoặc dùng vải Hàn Quốc theo cộng gộp song phương).", "Kiểm tra hóa đơn vải nguồn gốc trước khi chốt định giá EVFTA."),
        ("Direct Transport & Non-Manipulation Rule", "直运规则与未再加工证明", "Quy tắc Vận tải Thẳng (nếu trung chuyển Singapore)", "Hàng đi tàu feeder từ Hải Phòng qua Singapore/Hồng Kông cần Certificate of Non-Manipulation của hải quan cảng chuyển tải nếu tách seal.", "Giữ nguyên số container và số chì hãng tàu từ Hải Phòng đến Rotterdam.")
    ]),
    ("doc-cbam", "EU CBAM Quarterly / Embedded Emissions Report", "Báo cáo Phát thải Carbon Biên giới EU (CBAM)", "欧盟碳边境调节机制(CBAM)排放报告", "Nhà máy SX Thép / Nhôm / Xi măng & Kiểm toán EU", [
        ("EU CN Code Coverage (Annex I)", "欧盟CN海关编码核对", "Mã Hàng Hóa CN Thuộc Danh Mục CBAM", "Sắt thép (chương 72, bu-lông ốc vít 7318), Nhôm (chương 76) chịu nghĩa vụ báo cáo và mua chứng chỉ CBAM từ năm 2026.", "Kiểm tra ngay mã CN 8 chữ số để không bỏ sót linh kiện gia công bằng thép/nhôm."),
        ("Specific Embedded Direct (Scope 1) Emissions", "单位产品直接排放量", "Phát thải Trực tiếp Tại Lò Luyện (tCO2e/tấn)", "Nếu nhà máy TQ/VN không cung cấp số liệu đo đếm thực tế, Hải quan EU áp mức MẶC ĐỊNH rất cao làm đội giá vốn nhập khẩu.", "Đưa điều khoản cung cấp CBAM XML Communication Template vào hợp đồng mua hàng."),
        ("EU-Accredited Verifier Statement & Carbon Price Paid", "认可核查机构报告与已付碳价抵扣", "Thẩm Định Độc Lập & Khấu Trừ Giá Carbon ETS Đã Nộp", "Chứng minh số tiền carbon đã nộp tại hệ thống ETS Trung Quốc để khấu trừ vào nghĩa vụ mua chứng chỉ tại châu Âu.", "Thuê tổ chức thẩm định được công nhận theo Regulation (EU) 2023/956.")
    ]),
    ("doc-eudr", "EUDR Due Diligence Statement (DDS & GeoJSON)", "Tuyên bố Thẩm định Chống Phá Rừng EU (EUDR)", "欧盟零毁林法案尽职调查声明(DDS)", "EU Operator nhập khẩu qua cổng TRACES NT", [
        ("GeoJSON WGS84 Polygon Coordinates (Thửa đất >= 4 ha)", "WGS84六位小数多边形地理坐标", "Tọa độ Đa Giác WGS84 6 Chữ Số Thập Phân", "Luật EUDR (EU 2023/1115) yêu cầu ranh giới Polygon khép kín (không được chỉ chấm 1 điểm tọa độ nếu thửa >= 4 ha) đối với gỗ, bao bì giấy, cao su, cà phê.", "Chạy kiểm tra tự khép vòng và không tự cắt trên file GeoJSON trước khi nộp TRACES."),
        ("Cut-off Date Compliance (31 December 2020)", "2020年12月31日零毁林截止日", "Xác minh Không Phá Rừng Sau 31/12/2020", "Chỉ 1% nguyên liệu trộn lẫn từ lô đất có dấu vết mất rừng vệ tinh sau mốc 31/12/2020 sẽ khiến toàn bộ container gỗ/cao su bị cấm thông quan EU.", "Tách lô Chain-of-Custody riêng biệt (Segregated FSC/PEFC + Polygons)."),
        ("TRACES DDS Reference & Verification Numbers", "TRACES系统参号与验证码", "Mã Tham Chiếu DDS & Số Bảo Mật Hải Quan", "Phải khai báo trực tiếp hai mã này lên Tờ khai Nhập khẩu Quốc gia EU.", "Lưu trữ báo cáo thẩm định ít nhất 5 năm theo yêu cầu kiểm tra hậu kiểm.")
    ]),
    ("doc-inv", "Commercial Invoice (CI)", "Hóa Đơn Thương Mại Quốc Tế", "商业发票", "Nhà xuất khẩu (Bên bán)", [
        ("Exact Incoterms® 2020 + Named Place", "精确贸易术语及指定地点", "Điều kiện Incoterms® 2020 + Tên Cảng/Kho Rõ Ràng", "Ghi thiếu năm 'Incoterms 2020' hoặc ghi 'CIF Rotterdam Port' chung chung không rõ cảng bốc dỡ dễ tranh chấp khi tính phụ phí địa phương.", "Chuẩn mực: 'FCA Yantian Container Yard, Shenzhen (Incoterms® 2020)'."),
        ("Net Value & Customs Valuation Split", "净货值与运费/保费分列", "Tách Riêng Trị Giá FOB, Cước & Bảo Hiểm (nếu CIF/CIP)", "Tại Hải quan EU, thuế nhập khẩu tính trên trị giá CIF đến biên giới EU; nếu không tách rõ phí nội địa châu Âu (DDP/DAP), hải quan tính thuế chồng lên cả vận tải nội địa Đức.", "Liệt kê tách biệt từng dòng Ex-Works, Inland, Freight & Insurance.")
    ]),
    ("doc-pkl", "Detailed Packing List (PKL)", "Bảng Kê Đóng Gói Chi Tiết", "装箱单", "Kho đóng hàng Nhà máy", [
        ("Carton Marks & Batch traceability", "外箱唛头与生产批次号", "Ký Mã Hiệu Kiện Hàng (Shipping Marks) & Số Lô SX", "Kho logistics tự động ở Hà Lan/Đức đọc mã vạch carton dựa theo Packing List để phân loại SKU; thiếu mã lô gây thất lạc và phí sắp xếp lại rất cao.", "Dán mã GS1 SSCC và ghi rõ dải số thùng từng mã SKU."),
        ("Pallet Dimension (EUR 1200x800 vs ISO 1200x1000) & Stacking", "托盘规格与堆码限制", "Quy Cách Pallet (EUR 1200×800 vs 1200×1000)", "Kho tự động High-Bay Châu Âu chỉ nhận chuẩn Euro Pallet (1200×800mm) cao <= 1.8m; nếu đóng sai cỡ pallet, bên nhập phải thuê người sang pallet bằng tay tốn 35–60 EUR/pallet.", "Khóa chặt bản vẽ đóng pallet EUR trong Purchase Order trước sản xuất.")
    ]),
    ("doc-ispm15", "IPPC ISPM-15 Wood Packaging Stamp & Cert", "Dấu Hun Trùng & Kiểm Dịch Gỗ Đóng Kiện ISPM-15", "IPPC ISPM-15木质包装熏蒸标识", "Đơn vị xử lý nhiệt được cấp phép IPPC TQ/VN", [
        ("Legible Two-Side IPPC Stamp (HT - Heat Treatment)", "清晰HT热处理双面烙印标志", "Dấu Đốt Rõ Nét 2 Mặt Đối Xứng Trên Pallet Gỗ/Thùng Kiện", "Hải quan Đức/Ba Lan bắt gặp 1 thanh gỗ chèn hàng ('Dunnage') không có dấu IPPC hoặc còn dính vỏ cây sống lập tức giữ cont xử lý hun trùng cưỡng bức.", "Chụp ảnh đủ 4 mặt kiện gỗ/thanh chèn khi đóng hàng vào container tại xưởng.")
    ])
]

EXTRA_SUPPLY_16 = [
    ("v6-sc-25", "Yantian-Rotterdam Ocean", "Chuyển hướng Vòng Mũi Hảo Vọng +14 Ngày & Phụ phí LRS", "Red Sea Diversion +14 Days & Contingency Surcharge", "因红海航线改道好望角，船公司通知本航次延误14天并加收紧急附加费(LRS)。", "Delayed EU seasonal retail replenishment by 2 weeks plus USD 1,500–2,800/FEU Emergency Diversion Surcharge risk.", "Kích hoạt đánh giá lịch JIT tồn kho an toàn tại Đức, lọc 20% SKU bán chạy chuyển đường sắt/hàng không và kiểm tra điều khoản cước trên B/L FOB vs CIF.", "EUR 12,000 – 44,000", [("Kiểm tra tồn kho an toàn kho Rotterdam < 14 ngày?", "Chuyển ngay 20% SKU gấp đi Air-Rail từ Thẩm Quyến/Trùng Khánh", "Giữ toàn bộ cont trên biển theo lịch ETA mới cập nhật trên TMS"), ("Hợp đồng ký điều kiện FOB hay CIF?", "Người mua (EU) chịu cước biến động LRS; đàm phán chia sẻ với đối tác bán lẻ", "Yêu cầu nhà cung cấp xuất thông báo tàu chính thức và đối chiếu phụ phí BAF")], "assets/images/articles/hero-supply-chain-rcep.jpg"),
    ("v6-sc-26", "EUDR Traceability", "Lỗi Polygon Đa Giác EUDR Tự Cắt Khi Khai Báo TRACES", "EUDR TRACES Rejection Due to Self-Intersecting GeoJSON Polygon", "欧盟TRACES系统提示供应商提交的GeoJSON多边形边界存在自相交及精度不足错误。", "Automatic blocking of EU import DDS reference number preventing timber/rubber/packaging clearance at EU port.", "Chạy công cụ kiểm tra hình học WGS84 6 chữ số thập phân (Shapely/QGIS Fix Geometries) cùng hợp tác xã nông lâm nghiệp trước ngày tàu cập cảng.", "EUR 24,000 – 88,000", [("Thửa đất cung cấp nguyên liệu >= 4 hecta?", "Bắt buộc xuất đa giác Polygon (>= 4 điểm đỉnh không tự cắt, 6 chữ số thập phân)", "Được phép khai tọa độ Điểm (Point) duy nhất kèm xác nhận ranh giới xã"), ("Vệ tinh kiểm tra không giao cắt mất rừng sau 31/12/2020?", "Cấp ngay Mã DDS TRACES hợp lệ cho tờ khai Hải quan", "Loại bỏ ngay lô nguyên liệu đó khỏi chuỗi sản xuất sang Châu Âu")], "assets/images/articles/hero-vietnam-ai-decree13.jpg"),
    ("v6-sc-27", "EU CBAM Steel/Alu", "Xưởng Thép Hà Bắc Chậm Nộp Số Liệu Scope 1 CBAM Bị Áp Giá Mặc Định", "Missing Mill Scope 1 Data Triggering High Default EU CBAM Liability", "河北钢厂未能按时提供2026年经核查的Scope 1实际碳排放数据，欧盟系统将采用惩罚性默认值。", "Punitive EU default values inflate quarterly CBAM certificate costs by +35% to +65% on imported steel fasteners/profiles.", "Gửi mẫu Excel CBAM Communication chính thức song ngữ, yêu cầu thanh toán giữ lại 5% công nợ đến khi có Verified Report.", "EUR 19,500 – 68,000", [("Mã CN thép/nhôm (72xx, 7318, 76xx) có thuộc Phụ lục CBAM?", "Kích hoạt giữ 5% thanh toán chờ Verification Report hợp lệ", "Không thuộc diện CBAM – xuất thư xác nhận miễn trừ HS cho Forwarder"), ("Nhà máy đã nộp thuế Carbon tại hệ thống ETS TQ chưa?", "Thu thập biên lai thuế ETS TQ để khấu trừ trực tiếp số tiền phải nộp ở EU", "Sử dụng báo cáo đo đạc lò luyện thực tế có chữ ký kiểm toán độc lập EU")], "assets/images/articles/hero-contemporary-china.jpg"),
    ("v6-sc-28", "Ningbo-Hamburg FCL", "Ngân hàng Từ chối Bộ Chứng Từ L/C UCP 600 Vì Sai Tên Cảng & B/L Clean", "Bank L/C Discrepancy Over Unclean Clause & Port Typo (UCP 600)", "开证行指出提单存在三处不符点（装运港拼写微差及包装轻微破损批注），拒付货款。", "Supplier funds frozen + container accruing Hamburg port demurrage daily until Buyer issues Discrepancy Waiver.", "Rà soát ngay danh sách 3 điểm sai biệt theo Điều 14 & 16 UCP 600; nếu là lỗi chính tả nhỏ không ảnh hưởng hàng hóa, yêu cầu Giám đốc Tài chính EU phát hành thư chấp nhận sai biệt sớm để lấy B/L gốc.", "EUR 10,500 – 29,000", [("Lỗi sai biệt có liên quan số lượng hoặc hư hỏng hàng thực tế ('Unclean B/L')?", "Yêu cầu SGS/tổ chức giám định kiểm tra hàng tại cảng trước khi chấp nhận sai biệt", "Là lỗi hành chính chính tả nhỏ (Transposition typo) → Ký Waiver nhanh giải phóng B/L"), ("Thời hạn xuất trình chứng từ vượt quá 21 ngày ('Stale Documents')?", "Đề xuất giảm phí sửa đổi hoặc chuyển sang thanh toán T/T sau nhận hàng", "Gia hạn kỳ hạn thanh toán L/C bình thường trên hệ thống ngân hàng")], "assets/images/articles/hero-b2b-negotiation-table.jpg"),
    ("v6-sc-29", "Huunghi-Haiphong Hybrid", "Kiểm tra Xuất Xứ CTH/MaxNOM Hàng Gia Công Bắc Ninh Xuất EU (EVFTA)", "EVFTA Origin Audit Risk on China-Sourced Electronics Assembled in Vietnam", "欧盟海关怀疑海防出运至鹿特丹的电机组件在中国面料/零部件占比过高，要求提供EVFTA加工工序清单。", "Potential clawback of 4.5%–12% EVFTA tariff savings plus retroactive 3-year OLAF customs audit penalty.", "Kiểm tra lại định mức BOM chứng minh hàng từ TQ nhập qua Hữu Nghị theo Form E đã đạt chuyển đổi mã HS cấp 4 số (CTH) hoặc hàm lượng không xuất xứ MaxNOM trong trần EVFTA tại nhà máy VN.", "EUR 16,000 – 72,000", [("Mã HS thành phẩm xuất EU có khác cấp 4 chữ số (CTH) so với mọi linh kiện TQ?", "Xuất trình bảng BOM đối chiếu CTH chứng minh chuyển đổi đáng kể tại VN", "Chuyển sang kiểm tra tiêu chuẩn Tỷ lệ Trị giá MaxNOM (ví dụ <= 50% EXW)"), ("Các khâu gia công tại VN có vượt mức 'Gia công đơn giản' (Insufficient Operations)?", "Đáp ứng đủ tiêu chuẩn EVFTA EUR.1 / REX 0%", "Điều chỉnh lại tỷ lệ nội địa hóa hoặc khai báo thuế nhập khẩu MFN thông thường")], "assets/images/editorial/map-sino-vietnam-corridors.svg"),
    ("v6-sc-30", "CR Express Rail", "Bão Tuyết Tắc Nghẽn Bãi Đổi Khổ Ray Małaszewicze & Chế Độ Sưởi Pin/Chất Lỏng", "Winter Freezing & Rail Yard Backlog at Brest–Malaszewicze (-18°C)", "波兰马拉舍维奇换装场遭遇零下18度暴雪拥堵，液态胶水与锂电池存在冻损或延误风险。", "Cargo damage from sub-zero freezing in standard unheated steel containers + 10-day rail yard dwell.", "Chuyển toàn bộ hóa chất/chất lỏng nhạy nhiệt sang container có kiểm soát nhiệt (Reefer / Thermal Blanket) từ tháng 11–3; theo dõi trực tuyến số toa SMGS.", "EUR 11,000 – 34,000", [("Lô hàng là chất lỏng / pin / keo nhạy nhiệt dưới 0°C?", "Bắt buộc đặt Thermal Liner / Reefer Rail hoặc chuyển sang tàu biển đường ấm", "An toàn khi chạy tàu khô mùa đông"), ("Bãi chuyển tải Małaszewicze tắc > 7 ngày?", "Chuẩn bị xe tải dự phòng nhận trực tiếp tại Warsaw / Brest hoặc điều chỉnh lịch kho Duisburg", "Tiếp tục hành trình tàu bình thường tới ga Duisburg")], "assets/images/academic/qin-terracotta.jpg"),
    ("v6-sc-31", "Ningbo-Hamburg FCL", "Đóng Sai Cỡ Pallet ISO (1200x1000) Thay Vì EUR (1200x800) Bị Kho Đức Từ Chối", "Warehouse Rejection at Hamburg Due to Non-EUR Pallet Footprint", "宁波工厂误用了1200x1000标准托盘而非欧洲1200x800标准托盘，导致德国自动化立体库拒收。", "Urgent manual re-palletizing fees (EUR 45/pallet) + truck standby penalties at German automated DC.", "Đặt hợp đồng dịch vụ Re-palletizing & quấn màng PE lại ngay tại kho CFS ngoại quan cảng Hamburg trước khi xe tải đưa vào kho trung tâm.", "EUR 7,500 – 22,000", [("Kho tự động đích Đức có chấp nhận sang tải bàn nâng (Slave Pallet) không?", "Chấp nhận đặt lên Slave Pallet tại cổng nhận hàng giảm 50% chi phí", "Phải thuê kho dịch vụ CFS gần cảng sang tay toàn bộ sang Pallet EUR IPPC"), ("Trách nhiệm sai quy cách pallet ghi rõ trong PO hay không?", "Khấu trừ chi phí re-palletizing trực tiếp từ công nợ xưởng Ninh Ba", "Cập nhật ngay Bản vẽ tiêu chuẩn đóng pallet vào Phụ lục Kỹ thuật chung")], "assets/images/articles/hero-beijing-shanghai.jpg"),
    ("v6-sc-32", "Yantian-Rotterdam Ocean", "Chờ Gia Hạn Số Đăng Ký GACC Decree 248/249 Cho Lô Hàng Thực Phẩm Sang TQ", "China Customs Hold Due to Expired GACC Decree 248/249 Registration", "货柜抵达深圳盐田港后，因海外生产企业GACC第248号令在CIFER系统的注册号临期未续期被扣。", "Strict detention at Chinese entry port (DEM/DET + cold-storage electricity charges) or forced re-export.", "Làm việc khẩn với bộ phận tuân thủ nộp gia hạn trên hệ thống Single Window CIFER và bổ sung văn bản xác nhận cơ quan thẩm quyền Việt Nam/EU.", "EUR 14,500 – 52,000", [("Cơ sở sản xuất thuộc nhóm 18 ngành hàng rủi ro cao (Cơ quan nhà nước đề cử CIFER)?", "Liên hệ ngay Cục Chất lượng/Bộ NN hoàn tất xác nhận đẩy lên Cổng GACC", "Doanh nghiệp tự đăng ký trực tuyến tài khoản CIFER trong 5–10 ngày"), ("Cont hàng là container lạnh (Reefer) bảo quản ngắn hạn?", "Thương lượng đưa hàng vào kho lạnh ngoại quan giảm phí DEM/DET hãng tàu", "Giữ nguyên bãi cảng chờ số phê duyệt GACC mới cập nhật")], "assets/images/articles/hero-laozihao-craft.jpg"),
    ("v6-sc-33", "CR Express Rail", "Phát Hiện Hư Hỏng Lô Hàng Trong Quá Trình Vận Chuyển & Lập Biên Bản SMGS Commercial Act", "Cargo Pilferage/Moisture Found at Rail Unloading – SMGS Claims Protocol", "货物在杜伊斯堡场站拆箱时发现车皮水渍/少件，需立即按SMGS规则出具商务记录(Commercial Act)。", "Loss of cargo insurance & railway carrier reimbursement rights if Commercial Act is omitted prior to gate-out.", "Chụp ảnh hiện trường khi chưa bứt niêm phong cont + yêu cầu Trưởng ga đường sắt lập SMGS Commercial Act (Ведомость / Tatbestand) ngay trước khi kéo container ra khỏi ga.", "EUR 13,000 – 48,000", [("Xe tải đã kéo container ra khỏi ranh giới ga Duisburg hay chưa?", "Lập tức thuê Giám định Độc lập (SGS/Lloyd) trong vòng 24h & báo hãng bảo hiểm CIP/ICC A", "Giữ cont tại bãi ga yêu cầu Trưởng ga ký Biên bản Thương mại SMGS ngay tại chỗ"), ("Lô hàng có mua Bảo hiểm Mọi Rủi Ro ICC (A) theo CIP hay không?", "Nộp bộ hồ sơ claim chính thức (Commercial Act + Photos + CI/PKL) tới công ty bảo hiểm", "Khởi kiện/đòi bồi thường giới hạn SDR theo quy ước SMGS/CIM với công ty vận tải")], "assets/images/museum/great-wall-ink.jpg"),
    ("v6-sc-34", "Ningbo-Hamburg FCL", "Kiểm Mẫu Ngẫu Nhiên Đạt AQL 2.5 Nhưng Phát Hiện Chất Cấm REACH SVHC Vượt Ngưỡng", "Pre-Shipment QC Passed AQL 2.5 Visual Check Yet Failed EU REACH SVHC Lab Test", "出货前验货外观AQL 2.5合格，但欧盟口岸抽检出塑料涂层增塑剂邻苯二甲酸酯超标(REACH)。", "Product recall & EU Safety Gate RAPEX alert damaging retail brand reputation across Europe.", "Tạm giữ ngay hàng tại kho xuất/cảng, tách lô kiểm nghiệm hóa học SGS từng Batch sản xuất, dùng nhựa/sơn không Phthalates (DEHP/DBP < 0.1%).", "EUR 28,000 – 95,000", [("Hàng đã lên tàu hay còn đang nằm tại kho xưởng Ninh Ba?", "Gửi mẫu vật tư cùng lô đi lab kiểm SGS trong 72h; nếu trượt tiến hành thu hồi tại cảng đích", "Chặn 100% xuất kho tại xưởng, yêu cầu sản xuất thay thế bằng nguyên liệu đạt REACH SVHC"), ("Hợp đồng OEM có điều khoản Bồi Thường Tuân Thủ Hóa Chất (RoHS/REACH Indemnity)?", "Truy đòi toàn bộ chi phí hủy hàng + thay thế theo hợp đồng", "Bổ sung bắt buộc Test Report hàng năm theo từng mã vật liệu trước đặt cọc")], "assets/images/articles/hero-huaqiangbei-tech.jpg"),
    ("v6-sc-35", "Huunghi-Haiphong Hybrid", "Xe Container Lạnh Đứt Mạch Xếp Hàng Lâu Tại Cửa Khẩu Hữu Nghị Vào Vụ Vải/Sầu Riêng", "Cold-Chain Excursion During Peak Fruit Season Queue at Huu Nghi Border", "适逢荔枝与榴莲旺季，友谊关—凭祥口岸排队长达60小时，冷柜燃油即将耗尽。", "Tropical agricultural cargo shelf-life degradation (>2°C core rise) leading to Pingxiang rejection.", "Phân luồng xe chạy đêm sang cửa khẩu phụ Tân Thanh – Pò Chài hoặc kết hợp tàu lạnh liên vận đường sắt Đồng Đăng – Bằng Tường để giữ ổn định chuỗi lạnh.", "EUR 9,500 – 38,000", [("Nhiệt độ tâm quả (Data Logger) vẫn nằm trong ngưỡng cho phép?", "Bổ sung ngay dầu diesel máy phát lạnh (Genset) di động và tiếp tục chờ thông quan xanh", "Chuyển gấp sang tiêu thụ nội địa gần cửa khẩu để cắt lỗ hoàn toàn"), ("Có đủ mã số Vùng Trồng & Cơ sở Đóng gói được GACC phê duyệt chưa?", "Đủ điều kiện đi Làn Xanh Nông sản ưu tiên thông quan trước", "Khắc phục ngay hồ sơ tem nhãn trước khi xuất phát từ vùng trồng")], "assets/images/editorial/map-sino-vietnam-corridors.svg"),
    ("v6-sc-36", "Yantian-Rotterdam Ocean", "Đình Công Công Nhân Bốc Xếp Cảng Hamburg / Felixstowe – Kịch Bản 'Port Omission'", "Dockworker Strike Triggers Carrier 'Port Omission' Clause at Hamburg", "汉堡港工人罢工导致船东宣布跳过(Omit)靠泊并直接在鹿特丹港卸货，适用提单自由条款。", "Cargo discharged at alternate port (Rotterdam instead of Hamburg) incurring EUR 1,200+/cont inland trucking.", "Đọc kỹ Mặt sau Vận đơn (Clause 19 'Matters Affecting Performance'); đàm phán ngay gói vận chuyển đa phương thức Sà lan (Barge) hoặc Đường sắt nội địa từ Rotterdam về Hamburg.", "EUR 8,000 – 27,000", [("Hợp đồng vận tải ghi đích 'Port of Discharge: Hamburg' theo B/L Standard?", "Hãng tàu có quyền miễn trừ dỡ ở cảng thay thế an toàn gần nhất → Bố trí sà lan Sông Rhine/Elbe đón hàng", "Đánh giá bồi thường nếu là dịch vụ Door-to-Door bao trọn của Forwarder"), ("Hàng có cần thông quan T1 nội khối Châu Âu không?", "Mở chứng từ T1 chuyển cảng hải quan từ Rotterdam về nội địa Đức", "Thông quan nhập khẩu ngay tại Hà Lan (Fiscal Representation) tiết kiệm thời gian")], "assets/images/articles/hero-supply-chain-rcep.jpg"),
    ("v6-sc-37", "EU CBAM Steel/Alu", "Tranh Chấp Số Liệu Điện Năng Gián Tiếp (Scope 2) Khi Nhà Máy TQ Mua Điện Xanh I-REC", "Verification Dispute Over Chinese Wind/Solar PPA & I-REC Claims Under EU CBAM", "国内铝制品厂购买了绿电凭证(I-REC)试图扣减Scope 2间接碳排，欧盟核查员要求直连购电协议证明。", "Disallowance of unbundled I-REC certificates raises reported indirect carbon footprint on aluminum extrusions.", "Làm rõ quy định EU CBAM 2023/956 về tính hợp lệ của Hợp đồng Mua Điện Tái Tạo Trực tiếp (Physical PPA) so với chứng chỉ rời (I-REC) khi tính phát thải gián tiếp.", "EUR 15,000 – 49,000", [("Hợp đồng điện xanh của nhà máy là PPA đấu nối trực tiếp hay mua thẻ I-REC rời?", "PPA đấu nối trực tiếp có cơ sở được kiểm toán viên xem xét giảm phát thải gián tiếp", "Chứng chỉ rời không đủ điều kiện giảm Scope 2 theo quy định EU hiện hành → Dùng hệ số lưới điện khu vực"), ("Có chuyển sang dùng Nhôm Tái Chế (Secondary Scrap Aluminum) được không?", "Giảm >85% phát thải CBAM ngay từ gốc nguyên liệu", "Tiếp tục đàm phán chia sẻ chi phí CBAM với khách hàng EU")], "assets/images/articles/hero-contemporary-china.jpg"),
    ("v6-sc-38", "Ningbo-Hamburg FCL", "Tranh Chấp Quyền Sở Hữu Khuôn Đúc Nhựa (Tooling Mold IP) Khi Chuyển Nhà Máy", "Chinese OEM Refuses Release of Buyer-Paid Injection Molds During Resourcing", "买家决定将注塑件订单从浙江转往越南海防，原浙江厂扣留了买家全额付款的钢制模具。", "Tooling replacement downtime (12–16 weeks) + EUR 45,000 duplicate steel mold fabrication expense.", "Trước khi đặt làm khuôn ở TQ, bắt buộc ký riêng Thỏa thuận Cho mượn Tài sản (Tooling Bailment Agreement) đóng dấu công ty đỏ (公章), khắc biển tên chủ sở hữu lên thân thép khuôn và đóng bảo chứng giữ 30% trước lúc mang khuôn rời xưởng.", "EUR 30,000 – 92,000", [("Hợp đồng khuôn gốc có điều khoản Tooling Bailment đóng dấu Công chương (公章) TQ không?", "Gửi Luật sư TQ phát hành Thư Cảnh báo Khẩn đòi tài sản tại Tòa án Thương mại Chiết Giang", "Đàm phán trả chi phí bảo trì khuôn còn thiếu đổi lấy bàn giao hòa bình trước chuyển sản xuất"), ("Có sẵn bản vẽ kỹ thuật 3D STEP/CAD gốc mới nhất ở trụ sở EU không?", "Đặt gia công khuôn dự phòng song song ngay tại Bắc Ninh / Thâm Quyến tránh đứt hàng", "Yêu cầu lấy mẫu 3D Scan từ sản phẩm chuẩn để tái tạo lại khuôn mới")], "assets/images/articles/hero-b2b-negotiation-table.jpg"),
    ("v6-sc-39", "EUDR Traceability", "Bao Bì Thùng Carton Đóng Gói Hàng Không Phải Hàng Gỗ Vẫn Cần Chuẩn PPWR & EUDR?", "Distinction Between Secondary Corrugated Packing vs Primary EUDR Timber Goods", "欧盟进口商疑惑非木质商品（如五金工具）使用的瓦楞纸箱包装是否触发EUDR零毁林声明义务。", "Over-reporting adds compliance workload while under-reporting true wood HS 44/48 imports triggers fines.", "Phân biệt rõ: Bao bì carton chỉ dùng ĐÓNG GÓI hàng hóa khác (không bán tách rời như mã HS 48/44) được miễn khai EUDR theo Phụ lục I EU 2023/1115 (nhưng vẫn phải tuân thủ chuẩn bao bì tái chế EU PPWR!).", "EUR 4,500 – 18,000", [("Thùng carton / pallet đóng gói có được nhập khẩu làm hàng hóa thương mại độc lập không?", "BẮT BUỘC nộp EUDR DDS kèm GeoJSON đa giác rừng nguyên liệu HS 44/48", "Được miễn trừ khai báo EUDR nếu chỉ làm vật liệu bao gói đi kèm sản phẩm chính"), ("Có đáp ứng quy định Tỉ lệ Tái chế Bao bì EU PPWR & Dấu ISPM-15 (nếu pallet gỗ)?", "Hoàn thiện hồ sơ thông quan xanh EU", "Bổ sung chứng chỉ FSC Recycled & dấu IPPC trên pallet gỗ ngay lập tức")], "assets/images/articles/hero-laozihao-craft.jpg"),
    ("v6-sc-40", "Yantian-Rotterdam Ocean", "Quyết Toán Cuối Năm Chi Phí Lưu Bãi DEM/DET & Chiến Lược Chốt Free-Time 21 Ngày", "Detention & Demurrage Recovery Audit Across 100 Annual TEUs", "年终审计发现Yantian–Rotterdam及海防航线全年滞箱滞港费(DEM/DET)超支，需重构免费期谈判模板。", "Hidden annual DEM/DET leakage wipes out 1.5%–3.0% of net EU–Asia sourcing EBITDA.", "Đàm phán thẳng gói Combined DEM/DET Free Time `14–21 ngày` ngay trên Hãng tàu Service Contract thay vì dùng khung mặc định `5–7 ngày`, đồng thời đặt cảnh báo nhắc trên TMS ở ngày thứ 3.", "EUR 25,000 – 85,000 / năm", [("Đơn hàng có lịch kiểm hóa/thông quan chậm thường xuyên tại cảng đích EU?", "Bắt buộc xin Hãng tàu 'Combined Demurrage & Detention 14–21 Free Days' trước ký Booking", "Dùng khung mặc định 7 ngày và tối ưu hóa lịch drayage giao trả vỏ cont"), ("Đã tách riêng hóa đơn phí DEM (tại bãi cảng) vs DET (giữ vỏ cont ngoài cảng) để đàm phán chưa?", "Xác định đúng điểm nghẽn (bãi cảng hay kho nhận) để áp KPI đúng nhà thầu", "Xây dựng Dashboard theo dõi hạn Free Time theo thời gian thực")], "assets/images/articles/hero-supply-chain-rcep.jpg")
]

SINO_VIET_WONDERS_10 = [
    ("sv-01", "Hoàng Thành Huế (1804–1833) ↔ Tử Cấm Thành Bắc Kinh (1406–1420)", "Hòa hợp Sông Hương – Núi Ngự Bình nhiệt đới gió mùa, quy mô nhân văn cởi mở vs Hình học khép kín hoành tráng đồng bằng Hoa Bắc.", "assets/images/provinces/beijing-temple-of-heaven.jpg", "assets/images/museum/forbidden-city-imperial-axis-gate.jpg"),
    ("sv-02", "Văn Miếu – Quốc Tử Giám Thăng Long (1070) ↔ Quốc Tử Giám & Khổng Miếu Bắc Kinh", "Khuyến học Trọng Hiền Tài ('Hiền tài là nguyên khí của quốc gia' 1442 Thân Nhân Trung) với 82 bia Tiến sĩ đặt trên rùa đá xanh bản địa.", "assets/images/academic/van-mieu-hanoi.jpg", "assets/images/museum/jinshi-stele.jpg"),
    ("sv-03", "Gốm Hoa Lam Chu Đậu Hải Dương (Thế kỷ XIV–XV) ↔ Sứ Thanh Hoa Cảnh Đức Trấn", "Bình gốm Chu Đậu vẽ họa tiết hoa cúc dây, chim bói cá Việt bằng men tro trấu tự nhiên xuất khẩu tới Bảo tàng Topkapi (Istanbul).", "assets/images/museum/chu-dau-ceramic.jpg", "assets/images/museum/xuande-blue-white-meiping.jpg"),
    ("sv-04", "Áo Giao Lĩnh – Áo Ngũ Thân Lập Lĩnh – Áo Dài ↔ Hán Phục Giao Lĩnh Tống–Minh", "Năm khuy áo tượng trưng Ngũ Thường (Nhân–Nghĩa–Lễ–Trí–Tín) kết hợp tà lượn thanh thoát thích nghi khí hậu Đông Nam Á.", "assets/images/articles/hero-silk-embroidery-hanfu.jpg", "assets/images/paintings/09_daolian_tu.jpg"),
    ("sv-05", "Trống Đồng Ngọc Lũ Đông Sơn ↔ Đỉnh Đồng Hậu Mẫu Mậu Thương Chu", "Hai đỉnh cao kỹ nghệ đúc đồng độc lập cùng thời đại Đông Á: hoa văn Chim Lạc – Mặt Trời 14 tia của Văn Lang vs hoa văn Thao Thiết trên phương đỉnh.", "assets/images/museum/ngoc-lu-bronze-drum.jpg", "assets/images/museum/houmuwu-ding.jpg"),
    ("sv-06", "Gốm Men Ngọc Lý – Trần (Thạp Hoa Sen) ↔ Gốm Nhữ Diêu / Long Tuyền Thanh Từ", "Kỹ nghệ gốm men ngọc Việt Nam đời Lý–Trần mang nét tạo hình hoa sen bản địa khỏe khoắn, đạt Di sản quốc gia độc đáo.", "assets/images/museum/ly-tran-celadon-lotus-jar.jpg", "assets/images/museum/ru-yao-tianqing.jpg"),
    ("sv-07", "Chữ Nôm & Thơ Nôm Quốc Âm (Nguyễn Trãi, Hồ Xuân Hương) ↔ Đường Thi – Tống Từ", "Sáng tạo hệ chữ Nôm ghi tiếng nói thuần Việt theo quy tắc Lục Thư kép (Giả tá âm + Hội ý Việt) nâng tầm văn học dân tộc.", "assets/images/museum/tiangong-kaiwu.jpg", "assets/images/museum/lantingji-xu.jpg"),
    ("sv-08", "Phố Cổ Hội An Nhà Ống Xuyên Phòng ↔ Cổ Trấn Hoành Thôn / Chu Trang Giang Nam", "Giao thương Cảng Thị Đàng Trong thế kỷ XVII kết hợp kết cấu gỗ mộc Việt–Nhật–Hoa thành di sản UNESCO Hội An.", "assets/images/provinces/anhui-hongcun-moonpond.jpg", "assets/images/provinces/zhejiang-hangzhou-westlake.jpg"),
    ("sv-09", "Y Đạo Tuệ Tĩnh & Hải Thượng Lãn Ông ('Nam Dược Trị Nam Nhân') ↔ Lý Thời Trân (*Bản Thảo Cương Mục*)", "Chủ trương bản địa hóa thực dưỡng thảo mộc nhiệt đới phù hợp thể trạng và thổ nhưỡng nước Nam (khảo cứu lịch sử y học).", "assets/images/museum/acupuncture-bronze.jpg", "assets/images/articles/hero-tcm-solar.jpg"),
    ("sv-10", "Hành Lang Kết Nối Lịch Sử Lĩnh Nam – Đại Việt ↔ Hành Lang Biển Tơ Lụa – EVFTA 2026", "Từ tuyến giao thương gốm sứ qua Vịnh Bắc Bộ tiến tới chuỗi công nghiệp liên kết Hải Phòng – Thâm Quyến – Rotterdam ngày nay.", "assets/images/editorial/map-sino-vietnam-corridors.svg", "assets/images/editorial/map-silk-road-maritime-nodes.svg")
]

CSC_UNIVERSITIES_24 = [
    ("csc-01", "清华大学", "ĐH Thanh Hoa (Tsinghua)", "prov-beijing", "10003", "Kỹ thuật AI · Kiến trúc · Chuỗi cung ứng · Chính sách công", "Bắc Kinh"),
    ("csc-02", "北京大学", "ĐH Bắc Kinh (Peking Univ.)", "prov-beijing", "10001", "Hán học · Văn học Sử học · Kinh tế Quang Hoa · Quan hệ Quốc tế", "Bắc Kinh"),
    ("csc-03", "中国人民大学", "ĐH Nhân Dân TQ (RUC)", "prov-beijing", "10002", "Luật Kinh tế · Thương mại Quốc tế · Quản trị Công", "Bắc Kinh"),
    ("csc-04", "对外经济贸易大学", "ĐH Kinh tế & TM Đối ngoại (UIBE)", "prov-beijing", "10036", "Thương mại XNK · Hải quan · Luật WTO & Chuỗi cung ứng", "Bắc Kinh"),
    ("csc-05", "北京语言大学", "ĐH Ngôn ngữ Bắc Kinh (BLCU)", "prov-beijing", "10032", "Giảng dạy Hán ngữ Quốc tế (MTCSOL) · Biên phiên dịch cao cấp", "Bắc Kinh"),
    ("csc-06", "北京中医药大学", "ĐH Trung Y Dược Bắc Kinh (BUCM)", "prov-beijing", "10026", "Lịch sử Y học Đông Á · Nghiên cứu Dược liệu & Văn hóa Dưỡng sinh", "Bắc Kinh"),
    ("csc-07", "复旦大学", "ĐH Phục Đán (Fudan)", "prov-shanghai", "10246", "Kinh tế Thế giới · Báo chí Truyền thông · Văn sử Triết cổ điển", "Thượng Hải"),
    ("csc-08", "上海交通大学", "ĐH Giao thông Thượng Hải (SJTU)", "prov-shanghai", "10248", "Logistics Hàng hải · Công nghệ AI · Quản trị Chuỗi cung ứng", "Thượng Hải"),
    ("csc-09", "上海财经大学", "ĐH Tài chính Kinh tế Thượng Hải (SUFE)", "prov-shanghai", "10272", "Tài chính Quốc tế · Thương mại Số · Thuế quan & Kế toán", "Thượng Hải"),
    ("csc-10", "同济大学", "ĐH Đồng Tế (Tongji)", "prov-shanghai", "10247", "Kiến trúc Cổ–Kim · Quy hoạch Đô thị · Kỹ thuật Kết cấu", "Thượng Hải"),
    ("csc-11", "浙江大学", "ĐH Chiết Giang (Zhejiang Univ.)", "prov-zhejiang", "10335", "Thương mại Điện tử · Khoa học Dữ liệu · Trà học & Nông nghiệp", "Hàng Châu"),
    ("csc-12", "南京大学", "ĐH Nam Kinh (Nanjing Univ.)", "prov-jiangsu", "10284", "Văn sử Giang Nam · Văn tự học · Khoa học Trái đất", "Nam Kinh"),
    ("csc-13", "东南大学", "ĐH Đông Nam (Southeast Univ.)", "prov-jiangsu", "10286", "Nghiên cứu Đấu Củng & Bảo tồn Kiến trúc Cổ Trung Hoa", "Nam Kinh"),
    ("csc-14", "武汉大学", "ĐH Vũ Hán (Wuhan Univ.)", "prov-hubei", "10486", "Luật Biển & Luật Quốc tế · Văn học · Viễn thám Địa lý", "Vũ Hán"),
    ("csc-15", "华中科技大学", "ĐH Khoa học Kỹ thuật Hoa Trung (HUST)", "prov-hubei", "10487", "Kỹ thuật Cơ khí – Chuỗi sản xuất · Tự động hóa công nghiệp", "Vũ Hán"),
    ("csc-16", "中山大学", "ĐH Trung Sơn (Sun Yat-sen Univ.)", "prov-guangdong", "10558", "Kinh tế Vùng Vịnh Lớn · Nhân học Đông Nam Á · Nghiên cứu Lịch sử", "Quảng Châu"),
    ("csc-17", "暨南大学", "ĐH Ký Nam (Jinan Univ.)", "prov-guangdong", "10559", "Hoa kiều học · Thương mại Quảng Đông – ASEAN · Văn hóa Lĩnh Nam", "Quảng Châu"),
    ("csc-18", "厦门大学", "ĐH Hạ Môn (Xiamen Univ.)", "prov-fujian", "10384", "Hải dương học · Nghiên cứu Đông Nam Á · Kinh tế Cảng biển", "Hạ Môn"),
    ("csc-19", "四川大学", "ĐH Tứ Xuyên (Sichuan Univ.)", "prov-sichuan", "10610", "Lịch sử Tây Nam · Đạo giáo học · Đời sống Đô thị & Bảo tàng", "Thành Đô"),
    ("csc-20", "西安交通大学", "ĐH Giao thông Tây An (XJTU)", "prov-shaanxi", "10698", "Hành lang Kinh tế Con đường Tơ lụa · Năng lượng & Logistics Á–Âu", "Tây An"),
    ("csc-21", "山东大学", "ĐH Sơn Đông (Shandong Univ.)", "prov-shandong", "10422", "Nho học Khổng–Mạnh · Khảo cổ học · Kinh tế Cảng Thanh Đảo", "Tế Nam / Thanh Đảo"),
    ("csc-22", "南开大学", "ĐH Nam Khai (Nankai Univ.)", "prov-tianjin", "10055", "Kinh tế Thương mại Bắc Bộ · Lịch sử Minh–Thanh · Hóa học", "Thiên Tân"),
    ("csc-23", "广西大学", "ĐH Quảng Tây (Guangxi Univ.)", "prov-guangxi", "10593", "Hợp tác Cửa khẩu Trung–Việt · Nông lâm nhiệt đới · Biên mậu ASEAN", "Nam Ninh"),
    ("csc-24", "云南大学", "ĐH Vân Nam (Yunnan Univ.)", "prov-yunnan", "10673", "Dân tộc học Tây Nam · Trà Phổ Nhĩ & Tuyến Hành lang Côn Minh–Lào Cai", "Côn Minh")
]

CSC_GANTT_12 = [
    ("m09", "Tháng 9", "Khảo sát 24 Trường mục tiêu & xác định GS hướng dẫn", "Lập bảng đối chiếu mã ngành (HSK 4–6 hoặc IELTS), kiểm tra hạn nộp Type A (Đại sứ quán) vs Type B (Tự tuyển của Trường)."),
    ("m10", "Tháng 10", "Viết Thư Tháo Từ (套磁信) & Chuẩn bị Portfolio", "Gửi email tiếng Anh + tóm tắt tiếng Trung cho 3–5 Giáo sư tại Bắc Kinh/Thượng Hải/Quảng Châu xin Thư Tiếp Nhận Sơ Bộ (Pre-Acceptance Letter)."),
    ("m11", "Tháng 11", "Hoàn thiện Đề cương Nghiên cứu (Study Plan 800+ chữ)", "Trình bày bài toán nghiên cứu rõ ràng gắn với cầu nối Trung–Việt hoặc Chuỗi cung ứng/Văn hóa, kiểm tra chéo từ khóa học thuật."),
    ("m12", "Tháng 12", "Thi HSK / HSKK & Xin 2 Thư Giới Thiệu Giáo Sư", "Đạt ít nhất HSK 4–5 (hệ Cử nhân/Thạc sĩ Tiếng Trung) hoặc HSK 6 (Văn–Sử–Triết), xin 2 bản Recommendation Letters có chữ ký & đóng dấu."),
    ("m01", "Tháng 1", "Khám sức khỏe Xuất cảnh & Làm Lý lịch Tư pháp Số 1", "Điền mẫu chuẩn 'Foreigner Physical Examination Form' dán ảnh đóng dấu giáp lai bệnh viện được Bộ Y tế công nhận."),
    ("m02", "Tháng 2", "Dịch Công Chứng Hán/Anh & Hợp Pháp Hóa Lãnh Sự (nếu cần)", "Rà soát khớp 100% họ tên không dấu trên hộ chiếu với bảng điểm và bằng tốt nghiệp đại học/THPT."),
    ("m03", "Tháng 3", "Mở tài khoản Nộp Cổng Campus China (CSC) & Cổng Trường", "Kiểm tra chính xác Mã Agency Number, tải file PDF < 2MB rõ nét trước Deadline Type B (thường giữa Tháng 3 đến đầu Tháng 4)."),
    ("m04", "Tháng 4", "Phỏng Vấn Trực Tuyến (15–20 Phút với Hội đồng Trường)", "Luyện phản xạ 24 câu hỏi CSC (giới thiệu 90 giây, giải thích đề tài nghiên cứu, kế hoạch sau tốt nghiệp)."),
    ("m05", "Tháng 5", "Nhận Kết Quả Đỗ Vòng Sơ Tuyển & Xác Nhận Học Bổng", "Theo dõi email cập nhật trạng thái từ Trường lên Hội đồng Quỹ Học bổng Chính phủ CSC Bắc Kinh."),
    ("m06", "Tháng 6", "Nhận Thông Báo Trúng Tuyển & Giấy JW201 Điện Tử", "Tải bản JW201 PDF chính thức do Bộ Giáo dục TQ phát hành phục vụ xin thị thực du học dài hạn."),
    ("m07", "Tháng 7", "Nộp Hồ Sơ Xin Visa Du Học X1 Tại Trung tâm CVASC", "Chuẩn bị Hộ chiếu gốc, Giấy báo nhập học, JW201 và xác nhận lịch hẹn CVASC Hà Nội/TP.HCM/Đà Nẵng."),
    ("m08", "Tháng 8", "Đặt Vé Máy Bay / Tàu Sang Ký Túc Xá & Đăng Ký Tạm Trú 24h", "Nhớ làm Thẻ Cư trú (Residence Permit) trong vòng 30 ngày kể từ ngày nhập cảnh, mở SIM + Alipay + Thẻ ngân hàng trường.")
]

CSC_INTERVIEW_24 = [
    ("int-01", "请用两分钟用中文做一下自我介绍。", "Hãy tự giới thiệu bản thân trong 2 phút bằng tiếng Trung.", "Họ tên · Quê quán Việt Nam · Nền tảng đại học · Trình độ HSK/IELTS · Định hướng gắn bó chuyên ngành tại Trung Quốc."),
    ("int-02", "你为什么选择来中国学习，而不是留在国内或其他国家？", "Tại sao bạn chọn sang Trung Quốc học tập mà không học trong nước hoặc đi nước khác?", "Nêu chiều sâu học thuật/ngành thế mạnh tại TQ (ví dụ chuỗi cung ứng, thương mại RCEP, di sản Đông Á) và lợi thế cầu nối Việt–Trung thực tế."),
    ("int-03", "为什么选择我们学校和这个专业？", "Tại sao bạn lại chọn đúng trường chúng tôi và chuyên ngành này?", "Dẫn chứng tên Giáo sư, phòng Lab/viện nghiên cứu cụ thể của trường đó và sự khớp nối với bài toán nghiên cứu cá nhân."),
    ("int-04", "请概括一下你的研究计划（Study Plan）的核心问题是什么？", "Hãy tóm tắt ngắn gọn câu hỏi nghiên cứu cốt lõi trong Study Plan của bạn.", "Nêu 1 câu bài toán + 2 phương pháp nghiên cứu (đối chiếu sử liệu / phân tích chuỗi cung ứng) + 1 kết quả đóng góp dự kiến."),
    ("int-05", "你的毕业后职业规划是什么？", "Kế hoạch nghề nghiệp sau khi tốt nghiệp của bạn là gì?", "Kết hợp làm cầu nối giao thương, kiểm toán tuân thủ quốc tế hoặc giảng dạy/nghiên cứu hợp tác Việt–Trung dài hạn."),
    ("int-06", "你在本科期间克服过最大的学术困难是什么？", "Khó khăn học thuật lớn nhất bạn từng vượt qua thời đại học là gì?", "Mô hình STAR: Ngữ cảnh khó khăn → Hành động cụ thể (ví dụ đọc tài liệu song ngữ Anh–Trung) → Kết quả định lượng."),
    ("int-07", "如何面对中国北方冬天干燥寒冷或课堂全中文授课的压力？", "Bạn thích nghi thế nào với khí hậu lạnh miền Bắc TQ hoặc áp lực học 100% bằng tiếng Trung?", "Thể hiện sự chuẩn bị tâm lý tốt, đã quen luyện nghe bài giảng học thuật và sẵn sàng kỷ luật cao."),
    ("int-08", "中越贸易与RCEP合作中，你认为最大的机遇与挑战是什么？", "Trong hợp tác thương mại Việt–Trung và RCEP, đâu là cơ hội và thách thức lớn nhất?", "Nhấn mạnh chuỗi cung ứng bổ trợ sản xuất, hành lang đường sắt Nam Ninh–Hà Nội và yêu cầu chuẩn hóa xuất xứ."),
    ("int-09", "请举例说明你所了解的一个‘中华老字号’及其对当代企业的启发。", "Hãy nêu ví dụ một thương hiệu Lão Tự Hiệu TQ và bài học cho doanh nghiệp đương đại.", "Nêu Đồng Nhân Đường (1669), Mao Đài hoặc Tuyên Chỉ: giữ chuẩn nghề gốc kết hợp chuyển đổi số truy xuất nguồn gốc."),
    ("int-10", "你认为学习汉语最大的难点是什么？你是怎么突破的？", "Điểm khó nhất khi học tiếng Trung đối với bạn là gì và bạn vượt qua ra sao?", "Khéo léo nhắc lợi thế Âm Hán–Việt Cổ/Chuẩn nhưng cảnh giác trước các cặp 'Bạn giả Hán–Việt' như 合同/方案."),
    ("int-11", "如果教授对你的论文初稿提出严厉修改意见，你会怎么办？", "Nếu Giáo sư phê bình gay gắt bản thảo luận văn đầu tiên của bạn, bạn xử lý thế nào?", "Trân trọng phản hồi thẳng thắn, ghi chú cụ thể từng điểm chỉnh sửa logic/dữ liệu và hẹn lịch báo cáo lại đúng hạn."),
    ("int-12", "你觉得自己最大的优势和最大的缺点分别是什么？", "Ưu điểm lớn nhất và nhược điểm cần khắc phục nhất của bạn là gì?", "Ưu điểm gắn kỷ luật/tìm tài liệu; nhược điểm thật thà (như quá cầu toàn chi tiết) kèm giải pháp quản trị thời gian."),
    ("int-13", "谈谈你对中国文化中‘和而不同’的理解。", "Chia sẻ cách hiểu của bạn về triết lý 'Hòa nhi bất đồng' (Luận Ngữ).", "Hợp tác cùng phát triển trong đa dạng bản sắc Đông Á, tôn trọng khác biệt thay vì đồng hóa rập khuôn."),
    ("int-14", "你在研究中使用过哪些定量或定性研究方法？", "Bạn đã sử dụng phương pháp nghiên cứu định lượng hay định tính nào chưa?", "Liệt kê đối chiếu văn bản cổ–kim, khảo sát case study doanh nghiệp XNK hoặc phân tích dữ liệu thống kê."),
    ("int-15", "如果没拿到全额奖学金，你还有其他留学打算吗？", "Nếu chưa đạt học bổng toàn phần lần này, bạn có dự định dự phòng gì không?", "Thể hiện quyết tâm bền bỉ: tiếp tục nâng điểm HSK/nghiên cứu hoặc ứng tuyển học bổng Tỉnh/Thành phố bổ sung."),
    ("int-16", "介绍一本你最喜欢的中国历史、哲学或文学著作。", "Giới thiệu một tác phẩm lịch sử, triết học hoặc văn học Trung Hoa bạn tâm đắc nhất.", "Ví dụ 《Sử Ký》 (Tư Mã Thiên) hoặc 《Thiên Công Khai Vật》 về kỹ nghệ cổ truyền, nêu 1 chi tiết ấn tượng thật sự."),
    ("int-17", "如果导师同时用英文和中文讨论学术问题，你都能适应吗？", "Nếu Giáo sư trao đổi tài liệu chuyên ngành xen kẽ cả tiếng Anh và tiếng Trung, bạn đáp ứng được không?", "Khẳng định thế mạnh Song ngữ / Tam ngữ Anh–Trung–Việt rất thuận lợi khi đọc paper quốc tế lẫn văn bản gốc."),
    ("int-18", "你在实验室或团队项目里通常扮演什么角色？", "Trong nhóm dự án hay phòng nghiên cứu, bạn thường đảm nhận vai trò gì?", "Người tổng hợp dữ liệu, cầu nối giao tiếp rõ ràng giữa các thành viên và giữ kỷ luật tiến độ chung."),
    ("int-19", "如何平衡课程学习、课题研究与在华文化体验？", "Bạn cân bằng thế nào giữa học trên lớp, nghiên cứu đề tài và trải nghiệm văn hóa địa phương?", "Lập kế hoạch theo tuần: ưu tiên ngày trong tuần cho nghiên cứu, cuối tuần đi thực địa bảo tàng/làng nghề."),
    ("int-20", "请谈谈你对一个中国城市（如北京、上海或杭州）的印象。", "Bạn có ấn tượng gì về thành phố nơi trường bạn dự định theo học?", "Nhắc yếu tố di sản kết nối kinh tế hiện đại: ví dụ Hàng Châu kết hợp Tây Hồ–Long Tỉnh với thương mại điện tử toàn cầu."),
    ("int-21", "你的英文论文写作与文献检索能力如何？", "Năng lực đọc tài liệu và viết báo cáo học thuật bằng tiếng Anh của bạn ở mức nào?", "Trình bày điểm IELTS/TOEFL hoặc kinh nghiệm đọc tạp chí quốc tế, viết báo cáo chuẩn Châu Âu."),
    ("int-22", "如果遇到文化冲突或宿舍生活习惯不同，你会怎么处理？", "Nếu gặp khác biệt thói quen sinh hoạt ở ký túc xá đa văn hóa, bạn xử lý ra sao?", "Tôn trọng không gian chung, trao đổi thẳng thắn lịch sự từ sớm và tìm hiểu phong tục bạn bè quốc tế."),
    ("int-23", "对于目前欧洲或全球供应链数字化（如CBAM、EUDR），你怎么看？", "Bạn nhìn nhận ra sao về xu hướng số hóa & tuân thủ xanh chuỗi cung ứng toàn cầu (như CBAM/EUDR)?", "Cơ hội nghiên cứu rất thực tiễn giúp doanh nghiệp Á–Âu chuyển đổi dữ liệu phát thải minh bạch và bền vững."),
    ("int-24", "最后你还有什么想向评审老师提问或补充的吗？", "Cuối cùng, bạn có câu hỏi nào muốn hỏi Hội đồng Tuyển sinh không?", "Nên chuẩn bị 1–2 câu hỏi thông minh về định hướng đề tài trọng tâm của Khoa trong năm học mới hoặc sách nên đọc trước.")
]

HSR_CORRIDORS_8X8 = [
    ("Bắc Kinh Nam (北京南)", "Thượng Hải Hồng Kiều (上海虹桥)", "Tuyến Kinh–Hỗ (京沪高铁 · 1.318 km)", "4h 18p – 4h 48p (Tàu Fuxing 350km/h)", "Nhanh nhất toàn cầu qua Tế Nam – Nam Kinh – Tô Châu"),
    ("Bắc Kinh Tây (北京西)", "Quảng Châu Nam (广州南)", "Tuyến Kinh–Quảng (京广高铁 · 2.298 km)", "7h 38p – 8h 25p (Qua Thạch Gia Trang – Trịnh Châu – Vũ Hán – Trường Sa)", "Trục xương sống Bắc–Nam dài hàng đầu thế giới"),
    ("Nam Ninh Đông (南宁东)", "Quảng Châu Nam (广州南)", "Tuyến Nam–Quảng (南广高铁 · 577 km)", "2h 50p – 3h 25p (Kết nối trực tiếp từ Bằng Tường/Hà Nội)", "Cửa ngõ đường sắt thuận tiện nhất từ miền Bắc Việt Nam tới Quảng Đông"),
    ("Côn Minh Nam (昆明南)", "Thành Đô Đông (成都东)", "Tuyến Côn–Thành (成昆复线 / 成贵)", "3h 30p – 4h 30p (Qua Lô Châu / Quý Dương)", "Vượt cao nguyên Vân–Quý hướng về bồn địa Tứ Xuyên"),
    ("Thượng Hải Hồng Kiều", "Hàng Châu Đông (杭州东)", "Tuyến Hỗ–Hàng (沪杭高铁 · 159 km)", "45 phút – 55 phút (Mật độ 10–15 phút/chuyến)", "Kết nối siêu đô thị Thương mại Quốc tế và Thủ phủ Trà Long Tỉnh"),
    ("Tây An Bắc (西安北)", "Thành Đô Đông (成都东)", "Tuyến Tây–Thành (西成高铁 · 658 km)", "3h 15p – 3h 55p (Xuyên qua dãy núi Tần Lĩnh)", "Biến 'Thục Đạo Nan' ngàn năm thành tuyến du lịch & kinh tế 3 giờ"),
    ("Trùng Khánh Tây (重庆西)", "Quý Dương Bắc (贵阳北)", "Tuyến Du–Quý (渝贵铁路 · 345 km)", "2h 05p (Qua Tuân Nghĩa / Làng Rượu Quý Châu)", "Nối kho trung chuyển CR Express Trùng Khánh xuống hành lang Tây Nam"),
    ("Hồng Kông Tây Cửu Long", "Thâm Quyến Bắc / Quảng Châu", "Tuyến Quảng–Thâm–Cảng (广深港)", "14 phút (HK ↔ Thâm Quyến) · 48 phút (HK ↔ Quảng Châu)", "Làm thủ tục xuất nhập cảnh một điểm dừng ngay tại Ga ngầm Tây Cửu Long")
]


def build_pack_trade_csc() -> dict:
    incoterms = [
        {"code": r[0], "title": r[1], "mode": r[2], "riskStage": r[3], "costStage": r[4], "summaryVi": r[5], "summaryEn": r[6]}
        for r in INCOTERMS_11
    ]

    docs = []
    for d in ANNOTATED_DOCS_10:
        docs.append({
            "id": d[0], "nameEn": d[1], "nameVi": d[2], "nameZh": d[3], "issuerVi": d[4],
            "hotspots": [
                {"boxNum": idx + 1, "fieldEn": h[0], "fieldZh": h[1], "fieldVi": h[2], "complianceRiskVi": h[3], "auditTipVi": h[4]}
                for idx, h in enumerate(d[5])
            ]
        })

    extra_cases = []
    for sc in EXTRA_SUPPLY_16:
        sid, lane, t_vi, t_en, s_zh, r_en, a_vi, eur, tree_rows, img = sc
        extra_cases.append({
            "id": sid,
            "lane": lane,
            "titleVi": t_vi,
            "titleEn": t_en,
            "scenarioZh": s_zh,
            "riskIdentifiedEn": r_en,
            "actionPlanVi": a_vi,
            "financialImpactRangeEur": eur,
            "imagePath": img,
            "decisionTreeSteps": [
                {"stepNum": idx + 1, "qVi": tr[0], "yesVi": tr[1], "noVi": tr[2]}
                for idx, tr in enumerate(tree_rows)
            ],
            "keyTermsZhEn": [
                {"zh": s_zh[:4] + " (Tuân thủ)", "vi": "Xử lý hồ sơ " + lane, "en": t_en.split(" ")[0] + " Compliance"},
                {"zh": "应急预案 (Yìngjí Yù'àn)", "vi": "Phương án dự phòng JIT", "en": "JIT Contingency SOP"}
            ],
            "incotermsAndLiabilityVi": f"Rà soát chuyển giao rủi ro & bồi thường hợp đồng trên hành lang {lane} theo Incoterms® 2020.",
            "incotermsAndLiabilityEn": f"Contractual risk transfer & indemnity allocation along {lane} under Incoterms® 2020.",
            "documentChecklist": [h for h in ["Invoice & Packing List chuẩn HS", "B/L hoặc SMGS / Form E", "Chứng từ Tuân thủ EU (ICS2/CBAM/EUDR)"]],
            "bilingualReplyTemplate": {
                "toFactoryZh": f"您好，关于【{t_vi}】突发状况，请贵司立即核对合规资料及装运单据，并在今日内反馈确认节点，谢谢！",
                "toEuHqEn": f"Risk Advisory ({t_en}): {r_en} Decision tree triggered with {eur} exposure cap; mitigation workflow underway."
            }
        })

    wonders = [
        {"id": w[0], "pairTitle": w[1], "summaryVi": w[2], "vnImg": w[3], "chinaImg": w[4]}
        for w in SINO_VIET_WONDERS_10
    ]

    csc_unis = [
        {"id": u[0], "zh": u[1], "nameVi": u[2], "provinceId": u[3], "agencyNo": u[4], "majorsVi": u[5], "cityVi": u[6]}
        for u in CSC_UNIVERSITIES_24
    ]

    gantt = [
        {"id": g[0], "month": g[1], "milestone": g[2], "detailVi": g[3]}
        for g in CSC_GANTT_12
    ]

    interviews = [
        {"id": q[0], "zh": q[1], "vi": q[2], "guideVi": q[3]}
        for q in CSC_INTERVIEW_24
    ]

    hsr = [
        {"from": h[0], "to": h[1], "lineName": h[2], "duration": h[3], "highlight": h[4]}
        for h in HSR_CORRIDORS_8X8
    ]

    return {
        "CCE_V6_TRADE_AND_CSC": {
            "incoterms2020_11": incoterms,
            "annotatedTradeDocs10": docs,
            "extraSupplyCases16": extra_cases,
            "sinoVietWonders10": wonders,
            "cscUniversities24": csc_unis,
            "cscGantt12Months": gantt,
            "cscInterview24": interviews,
            "hsrCorridors8x8": hsr
        }
    }
