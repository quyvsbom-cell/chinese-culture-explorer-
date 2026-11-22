(function () {
  "use strict";

  window.CCE_V6_TRADE_VISUAL = {
    annotatedTradeDocs10: [
      {
        id: "doc-mbl-ocean",
        titleVi: "Vận đơn Đường biển Chủ (Master Ocean Bill of Lading — MBL)",
        titleEn: "Master Ocean Bill of Lading (MBL)",
        titleZh: "海运船东提单 (MBL)",
        issuerRoleVi: "Hãng tàu biển (Ocean Carrier) hoặc đại lý chính thức",
        hotspots: [
          { boxNum: 1, fieldNameEn: "Shipper & Consignee (To Order vs Straight)", fieldNameZh: "托运人与收货人栏", fieldNameVi: "Người gửi hàng & Người nhận hàng (Theo lệnh vs Đích danh)", complianceRiskVi: "Ghi đích danh tên người mua khi thanh toán L/C làm mất quyền kiểm soát sở hữu hàng hóa qua ngân hàng.", complianceRiskEn: "Naming buyer directly under L/C forfeits bank title control.", auditTipVi: "Với L/C, ghi 'TO ORDER OF [ISSUING BANK]' theo đúng quy định trường 46A.", auditTipEn: "Match L/C field 46A exactly, typically 'TO ORDER OF ISSUING BANK'." },
          { boxNum: 2, fieldNameEn: "Notify Party (EORI & Contact)", fieldNameZh: "通知方与EORI编码", fieldNameVi: "Bên nhận thông báo hàng đến (Kèm mã EORI EU)", complianceRiskVi: "Thiếu thông tin liên hệ hoặc sai EORI khiến đại lý giao nhận không nhận được Arrival Notice kịp thời, phát sinh lưu bãi DEM.", complianceRiskEn: "Missing contact or EORI delays Arrival Notice and triggers demurrage.", auditTipVi: "Điền đầy đủ tên pháp nhân, email phòng chứng từ và mã EORI tại EU.", auditTipEn: "Include consignee legal name, ops email, and valid EU EORI." },
          { boxNum: 3, fieldNameEn: "Port of Loading (POL) & Port of Discharge (POD)", fieldNameZh: "装运港与卸货港", fieldNameVi: "Cảng xếp hàng & Cảng dỡ hàng", complianceRiskVi: "Sai khác tên cảng giữa B/L và C/O hoặc L/C là lỗi bất hợp lệ phổ biến nhất bị ngân hàng từ chối.", complianceRiskEn: "Port name mismatch across B/L, C/O, and L/C triggers immediate bank discrepancy.", auditTipVi: "Ghi chuẩn mã UN/LOCODE và tên cảng chính thức trên cả B/L, Invoice và C/O.", auditTipEn: "Verify UN/LOCODE and exact official port spelling across all documents." },
          { boxNum: 4, fieldNameEn: "Container No. & Seal No.", fieldNameZh: "集装箱号与铅封号", fieldNameVi: "Số Container & Số Chì Niêm Phong", complianceRiskVi: "Sai số chì giữa B/L và thực tế tại cảng đích dẫn đến nghi ngờ tráo hàng và kiểm hóa 100%.", complianceRiskEn: "Seal mismatch triggers physical customs inspection and tampering investigation.", auditTipVi: "Chụp ảnh đối chiếu 4 bước đóng container kèm ảnh cận cảnh số chì gốc.", auditTipEn: "Cross-check seal number against container stuffing gate-out photos." },
          { boxNum: 5, fieldNameEn: "Shipped on Board Date & Clean Notation", fieldNameZh: "已装船批注与签发日期", fieldNameVi: "Ngày Xếp Hàng Lên Tàu & Ghi chú B/L Sạch", complianceRiskVi: "Ngày Shipped on Board muộn hơn Latest Shipment Date trên L/C hoặc có ghi chú hàng hư hỏng (Claused B/L) sẽ bị từ chối thanh toán.", complianceRiskEn: "Late on-board date or claused remark invalidates L/C compliance.", auditTipVi: "Kiểm tra dấu 'CLEAN ON BOARD' và ngày ký phát khớp trước hạn giao hàng L/C.", auditTipEn: "Confirm Clean On Board notation and date precedes L/C latest shipment date." },
          { boxNum: 6, fieldNameEn: "Freight Prepaid vs Freight Collect", fieldNameZh: "运费预付或到付", fieldNameVi: "Cước Trả Trước (CIF/CFR) vs Trả Sau (FOB)", complianceRiskVi: "Hợp đồng CIF nhưng B/L ghi 'Freight Collect' khiến người mua bị đòi cước hai lần hoặc từ chối nhận bộ chứng từ.", complianceRiskEn: "Marking Freight Collect on a CIF shipment causes double billing and L/C rejection.", auditTipVi: "Đối chiếu Incoterms: FOB → Collect; CFR/CIF/DAP → Prepaid.", auditTipEn: "Align freight term strictly with Incoterms: FOB=Collect, CFR/CIF=Prepaid." }
        ]
      },
      {
        id: "doc-smgs-rail",
        titleVi: "Vận đơn Đường sắt Quốc tế SMGS (Tuyến Trung–Âu CR Express)",
        titleEn: "SMGS Railway Consignment Note (CR Express)",
        titleZh: "国际铁路货物联运运单 (SMGS)",
        issuerRoleVi: "Ga đường sắt khởi hành Trung Quốc (Trùng Khánh/Tây An/Nam Ninh)",
        hotspots: [
          { boxNum: 1, fieldNameEn: "Box 25 — Gauge Change Border Crossing Stations (Alashankou / Brest / Malaszewicze)", fieldNameZh: "第25栏 — 过境国境站与换装场", fieldNameVi: "Ô số 25 — Cửa khẩu Biên giới & Trạm Đổi Khổ Ray (1435mm ↔ 1520mm)", complianceRiskVi: "Ghi sai mã ga quá cảnh Kazakhstan/Belarus làm toa tàu bị giữ tại bãi hoán tải Brest–Malaszewicze phát sinh lưu bãi 8–15 ngày.", complianceRiskEn: "Incorrect transit border station codes strand wagons at Brest–Malaszewicze yards for 8–15 days incurring detention.", auditTipVi: "Đối khớp chính xác mã UIC ga biên giới trên Booking Confirmation trước khi đóng container lên tàu.", auditTipEn: "Verify exact UIC border station codes against carrier booking confirmation prior to gate-in." },
          { boxNum: 2, fieldNameEn: "Box 15 — Description of Goods & NHM/HS Code", fieldNameZh: "第15栏 — 货物品名与NHM/HS编码", fieldNameVi: "Ô số 15 — Mô tả Hàng hóa & Mã NHM/HS 6–8 chữ số", complianceRiskVi: "Thiếu mã NHM đường sắt châu Âu khiến hệ thống quá cảnh Ba Lan từ chối chuyển tiếp CIM/SMGS.", complianceRiskEn: "Missing European NHM railway tariff codes halt CIM/SMGS re-consignment in Poland.", auditTipVi: "Khai đồng bộ cả mã HS 6 số quốc tế và mã NHM tương ứng của vận tải sắt EU.", auditTipEn: "Populate both 6-digit HS code and corresponding EU NHM railway code." },
          { boxNum: 3, fieldNameEn: "Non-Negotiable Nature of SMGS Waybill", fieldNameZh: "铁路运单不可转让属性", fieldNameVi: "Tính chất Không Chuyển Nhượng (Khác với B/L đường biển)", complianceRiskVi: "Vận đơn SMGS không phải chứng từ sở hữu hàng hóa chuyển nhượng được nên ngân hàng không kiểm soát hàng như MBL.", complianceRiskEn: "SMGS is non-negotiable and does not convey transferable title like an ocean B/L.", auditTipVi: "Khi dùng đường sắt với L/C, yêu cầu bản sao số 4 (Duplicate of Consignment Note) để khóa quyền đổi người nhận.", auditTipEn: "Under L/C, require presentation of Duplicate SMGS Sheet 4 to block sender rerouting." },
          { boxNum: 4, fieldNameEn: "Box 20 — Payer Codes for Transit Countries", fieldNameZh: "第20栏 — 过境各国运费付款人代码", fieldNameVi: "Ô số 20 — Mã Bên Thanh Toán Cước từng Quốc gia Quá cảnh", complianceRiskVi: "Thiếu mã payer tại Kazakhstan, Nga hoặc Belarus khiến tàu bị tách toa ngay tại ga biên giới.", complianceRiskEn: "Missing transit payer codes cause wagon detachment at border handover.", auditTipVi: "Xác nhận trước mã đại lý thanh toán của nhà vận hành tuyến trên từng chặng.", auditTipEn: "Confirm transit carrier payer codes for each crossed rail network before dispatch." },
          { boxNum: 5, fieldNameEn: "Box 19 — Gross Weight & Container Tare", fieldNameZh: "第19栏 — 毛重与集装箱自重", fieldNameVi: "Ô số 19 — Tổng Trọng lượng & Tự trọng Container", complianceRiskVi: "Vượt tải trọng trục đường sắt khổ 1520mm hoặc lệch quá 2% so với cân điện tử ga gây phạt nặng.", complianceRiskEn: "Exceeding axle load limits or >2% weight variance triggers border weighing fines.", auditTipVi: "Cân VGM chuẩn tại kho trước khi giao ra ga đường sắt.", auditTipEn: "Submit verified gross mass readings prior to rail terminal gate-in." },
          { boxNum: 6, fieldNameEn: "Box 23 — Attached Customs & Commercial Docs", fieldNameZh: "第23栏 — 随车附带商业与海关文件", fieldNameVi: "Ô số 23 — Danh mục Chứng từ Đính kèm theo Tàu", complianceRiskVi: "Thiếu Packing List hoặc Invoice bản cứng đi kèm túi hồ sơ tàu gây tắc thông quan quá cảnh T1 tại Malaszewicze.", complianceRiskEn: "Omitted physical invoices delay EU T1 transit clearance at Malaszewicze.", auditTipVi: "Liệt kê đầy đủ số Invoice, Packing List và C/O trong ô 23.", auditTipEn: "Itemize invoice, packing list, and certificate numbers explicitly in Box 23." }
        ]
      },
      {
        id: "doc-eu-ics2",
        titleVi: "Tờ khai Tóm tắt Nhập cảnh An ninh EU ICS2 (ENS)",
        titleEn: "EU ICS2 Entry Summary Declaration (ENS)",
        titleZh: "欧盟进口控制系统二期入境摘要申报 (ICS2 ENS)",
        issuerRoleVi: "Hãng tàu / Hãng bay / Forwarder (House Filer) nộp lên EU STI-STP",
        hotspots: [
          { boxNum: 1, fieldNameEn: "6-Digit Harmonized System (HS) Code", fieldNameZh: "6位协调制度税则编码", fieldNameVi: "Mã HS 6 chữ số bắt buộc cho từng dòng hàng", complianceRiskVi: "Thiếu hoặc khai sai mã HS 6 số khiến hệ thống ICS2 trả về lệnh RFI (Request for Information) hoặc Do Not Load.", complianceRiskEn: "Missing or invalid 6-digit HS codes trigger automated RFI or Do Not Load holds.", auditTipVi: "Kiểm tra mã HS 6 số khớp danh mục WCO 2022 trước khi gửi Shipping Instruction.", auditTipEn: "Validate 6-digit WCO HS codes before submitting shipping instructions." },
          { boxNum: 2, fieldNameEn: "Acceptable Goods Description (Anti-Vague Filter)", fieldNameZh: "具体品名描述（禁用笼统词汇）", fieldNameVi: "Mô tả Hàng hóa Cụ thể (Chặn từ mơ hồ)", complianceRiskVi: "Ghi 'Parts', 'Accessories', 'General Cargo', 'Electronics' sẽ bị thuật toán EU từ chối tự động.", complianceRiskEn: "Generic words like 'Parts' or 'General Cargo' fail EU stop-words validation.", auditTipVi: "Mô tả rõ chất liệu + công dụng + sản phẩm (vd: 'Men's 100% Cotton Woven Shirts').", auditTipEn: "State material, function, and exact item name cleanly." },
          { boxNum: 3, fieldNameEn: "Consignee EU EORI Number", fieldNameZh: "欧盟收货人EORI注册号", fieldNameVi: "Mã định danh EORI của Người nhập khẩu EU", complianceRiskVi: "Nhập sai định dạng mã EORI quốc gia thành viên làm treo hồ sơ an ninh.", complianceRiskEn: "Invalid EORI syntax blocks automated customs security clearance.", auditTipVi: "Tra cứu xác thực số EORI trên cổng chính thức của Ủy ban Châu Âu trước khi đặt tàu.", auditTipEn: "Verify consignee EORI validity on the European Commission portal prior to booking." },
          { boxNum: 4, fieldNameEn: "Multiple Filing (Master + House Level)", fieldNameZh: "多层申报（主单与分单关联）", fieldNameVi: "Khai báo Đa tầng (Khớp nối MBL và HBL)", complianceRiskVi: "Forwarder khai HBL chậm hơn hạn 24 giờ trước khi xếp tàu (24-hour rule) khiến container bị rớt tàu.", complianceRiskEn: "Late house-level filing misses the 24-hour pre-loading cutoff, rolling cargo.", auditTipVi: "Khóa dữ liệu House ENS ít nhất 48 giờ trước giờ cắt máng (SI Cutoff).", auditTipEn: "Lock house-level ENS data at least 48 hours before carrier SI cutoff." },
          { boxNum: 5, fieldNameEn: "Buyer & Seller Full Street Address", fieldNameZh: "买卖双方完整街道地址", fieldNameVi: "Địa chỉ đường phố đầy đủ của Người bán & Người mua", complianceRiskVi: "Ghi hộp thư bưu điện (P.O. Box) không được chấp nhận trong cơ sở dữ liệu an ninh ICS2.", complianceRiskEn: "P.O. Box addresses are rejected by ICS2 security screening.", auditTipVi: "Ghi đủ số nhà, tên đường, thành phố, mã bưu chính và mã quốc gia ISO 2 chữ.", auditTipEn: "Provide full street address, postal code, and ISO-2 country code." },
          { boxNum: 6, fieldNameEn: "MRN (Movement Reference Number) Tracking", fieldNameZh: "货物移动参考号 (MRN)", fieldNameVi: "Mã Tham Chiếu Di Chuyển (MRN) cấp sau khi duyệt", complianceRiskVi: "Không lưu mã MRN khiến bước làm thủ tục nhập khẩu chính thức tại cảng dỡ EU bị đứt gãy liên kết.", complianceRiskEn: "Missing MRN breaks linkage with destination import customs declarations.", auditTipVi: "Chuyển ngay mã MRN từ hãng tàu/forwarder cho đại lý hải quan đầu EU.", auditTipEn: "Transmit the issued MRN immediately to the EU destination customs broker." }
        ]
      },
      {
        id: "doc-co-forme",
        titleVi: "Giấy chứng nhận Xuất xứ C/O Form E (ACFTA Trung Quốc – ASEAN)",
        titleEn: "Certificate of Origin Form E (ACFTA China–ASEAN)",
        titleZh: "中国—东盟自贸区原产地证书 (FORM E)",
        issuerRoleVi: "CCPIT hoặc Hải quan Trung Quốc / Bộ Công Thương Việt Nam",
        hotspots: [
          { boxNum: 1, fieldNameEn: "Box 8 — Origin Criterion (WO / PE / RVC 40% / CTH)", fieldNameZh: "第8栏 — 原产地标准", fieldNameVi: "Ô số 8 — Tiêu chí Xuất xứ (WO / PE / tỷ lệ RVC ≥ 40% / CTH)", complianceRiskVi: "Ghi sai tiêu chí xuất xứ so với quy tắc mặt hàng cụ thể (PSR) dẫn đến bác bỏ ưu đãi thuế 0% ACFTA.", complianceRiskEn: "Incorrect origin criterion relative to PSR causes denial of 0% ACFTA tariff.", auditTipVi: "Kiểm tra biểu PSR theo mã HS 6 số; nếu dùng RVC phải ghi chính xác phần trăm đạt được.", auditTipEn: "Verify product-specific rules by 6-digit HS; state exact RVC percentage when applicable." },
          { boxNum: 2, fieldNameEn: "Box 13 — Third-Party Invoicing Tick Box", fieldNameZh: "第13栏 — 第三方发票勾选", fieldNameVi: "Ô số 13 — Đánh dấu Hóa đơn Bên Thứ Ba (Third-Party Invoicing)", complianceRiskVi: "Hóa đơn do công ty thương mại Hồng Kông/Singapore phát hành nhưng quên tick ô 13 và quên ghi tên công ty bên thứ ba tại ô 7 sẽ bị bác C/O.", complianceRiskEn: "Forgetting to tick Third-Party Invoicing when billed via Hong Kong/Singapore voids C/O.", auditTipVi: "Luôn tick 'Third Party Invoicing' ở ô 13 và ghi tên + quốc gia bên phát hành hóa đơn ở ô 7.", auditTipEn: "Tick Box 13 and list third-party issuer name and country in Box 7." },
          { boxNum: 3, fieldNameEn: "Box 13 — Issued Retroactively (>3 Days Post-Shipment)", fieldNameZh: "第13栏 — 补发证书勾选", fieldNameVi: "Ô số 13 — Cấp sau ngày tàu chạy (Issued Retroactively)", complianceRiskVi: "C/O cấp sau quá 3 ngày kể từ ngày xếp hàng mà không tick 'Issued Retroactively' bị hải quan từ chối.", complianceRiskEn: "C/O issued >3 days after shipment without retroactive tick is rejected.", auditTipVi: "Đối chiếu ngày phát hành C/O với ngày Shipped on Board trên vận đơn.", auditTipEn: "Compare C/O issuance date against B/L on-board date before customs filing." },
          { boxNum: 4, fieldNameEn: "Box 9 — Gross Weight / Quantity & FOB Value", fieldNameZh: "第9栏 — 毛重数量与FOB货值", fieldNameVi: "Ô số 9 — Trọng lượng & Trị giá FOB (khi dùng tiêu chí RVC)", complianceRiskVi: "Trọng lượng trên C/O khác Packing List hoặc thiếu trị giá FOB khi áp dụng tiêu chí RVC sẽ bị yêu cầu xác minh.", complianceRiskEn: "Weight discrepancy or omitted FOB value under RVC triggers verification hold.", auditTipVi: "Đảm bảo số kiện, trọng lượng khớp tuyệt đối B/L và Packing List.", auditTipEn: "Reconcile gross weight and package count exactly with B/L and Packing List." },
          { boxNum: 5, fieldNameEn: "Box 10 — Invoice Number & Date", fieldNameZh: "第10栏 — 商业发票号码与日期", fieldNameVi: "Ô số 10 — Số và Ngày Hóa đơn Thương mại", complianceRiskVi: "Ghi số hóa đơn của nhà máy thay vì số hóa đơn của bên thứ ba (nếu có TPI) gây bác bỏ ưu đãi.", complianceRiskEn: "Listing factory invoice number instead of third-party invoice invalidates preference.", auditTipVi: "Khi có bên thứ ba, ô 10 phải ghi số và ngày hóa đơn thương mại dùng khai hải quan nhập khẩu.", auditTipEn: "Under TPI, Box 10 must cite the third-party invoice presented at import." },
          { boxNum: 6, fieldNameEn: "Box 12 — Official Stamp & Authorized Signature Verification", fieldNameZh: "第12栏 — 签证机构印章与签字", fieldNameVi: "Ô số 12 — Con dấu và Chữ ký Cơ quan Cấp phép (Kiểm tra Online)", complianceRiskVi: "Con dấu mờ, thiếu chữ ký hoặc sai mẫu chữ ký đăng ký trong hệ thống chia sẻ Hải quan.", complianceRiskEn: "Unclear seal or unregistered specimen signature triggers origin verification.", auditTipVi: "Quét mã QR hoặc tra số tham chiếu trên cổng xác thực CCPIT / Hải quan TQ trước khi nộp.", auditTipEn: "Verify C/O authenticity online via CCPIT or GACC portal prior to filing." }
        ]
      },
      {
        id: "doc-co-eur1-rex",
        titleVi: "Chứng nhận Xuất xứ EUR.1 & Tự Chứng Nhận REX (EVFTA)",
        titleEn: "EUR.1 Movement Certificate & REX Statement on Origin (EVFTA)",
        titleZh: "越欧自贸协定原产地证 (EUR.1 / REX声明)",
        issuerRoleVi: "Cơ quan cấp C/O Việt Nam (EUR.1) hoặc Nhà xuất khẩu tự khai (REX / ≤6.000 EUR)",
        hotspots: [
          { boxNum: 1, fieldNameEn: "EUR 6,000 Value Threshold Rule", fieldNameZh: "6000欧元货值门槛规则", fieldNameVi: "Ngưỡng trị giá 6.000 EUR phân định EUR.1 và Tự khai Hóa đơn", complianceRiskVi: "Lô hàng trên 6.000 EUR xuất từ VN sang EU tự khai trên hóa đơn khi chưa có cơ chế REX áp dụng cho chiều VN→EU sẽ bị bác bỏ thuế ưu đãi.", complianceRiskEn: "Using self-declaration above EUR 6,000 without applicable REX authorization forfeits EVFTA duty relief.", auditTipVi: "Chiều VN→EU: ≤6.000 EUR tự khai; >6.000 EUR bắt buộc xin C/O mẫu EUR.1 (theo quy định hiện hành).", auditTipEn: "For VN→EU: self-declare ≤EUR 6,000; obtain EUR.1 above EUR 6,000." },
          { boxNum: 2, fieldNameEn: "Exact Verbatim Statement on Origin Text", fieldNameZh: "原产地声明标准法定措辞", fieldNameVi: "Câu văn Tự chứng nhận Xuất xứ Đúng từng Chữ (Annex VI)", complianceRiskVi: "Viết sai dù chỉ một từ trong mẫu câu pháp lý hoặc thiếu mã số REX (chiều EU→VN) làm mất hiệu lực.", complianceRiskEn: "Altering mandatory Annex VI wording invalidates the origin statement.", auditTipVi: "Sao chép nguyên văn mẫu câu chuẩn EVFTA và ghi rõ 'Vietnam' hoặc 'EU' tại trường xuất xứ.", auditTipEn: "Copy verbatim EVFTA Annex VI text and insert exact origin territory." },
          { boxNum: 3, fieldNameEn: "Direct Transport / Non-Alteration Rule", fieldNameZh: "直运与未加工规则", fieldNameVi: "Quy tắc Vận chuyển Trực tiếp / Không thay đổi Nguyên trạng", complianceRiskVi: "Hàng quá cảnh Singapore/Hồng Kông bị tháo đóng lại container mà không có Giấy xác nhận không thao tác (Non-Manipulation Certificate) sẽ mất ưu đãi.", complianceRiskEn: "Transshipment with repacking lacking a Non-Manipulation Certificate voids EVFTA status.", auditTipVi: "Giữ nguyên chì container hoặc xin xác nhận hải quan cảng trung chuyển nếu bắt buộc tách lô.", auditTipEn: "Keep container seals intact or secure customs non-manipulation confirmation at transit hubs." },
          { boxNum: 4, fieldNameEn: "Fabric-Forward Rule for Textiles & Apparel", fieldNameZh: "纺织品从布料开始原产地规则", fieldNameVi: "Quy tắc 'Từ Vải Trở Đi' cho Dệt may (và Cộng gộp Hàn Quốc)", complianceRiskVi: "Dùng vải Trung Quốc cắt may tại Việt Nam không đáp ứng quy tắc 'từ vải trở đi' nếu không thuộc diện cộng gộp được phép.", complianceRiskEn: "Using non-originating Chinese fabric fails EVFTA textile origin rules.", auditTipVi: "Lưu đủ hồ sơ mua vải nội địa VN, vải EU hoặc vải Hàn Quốc (theo cơ chế cộng gộp song phương).", auditTipEn: "Maintain full mill certificates proving Vietnam, EU, or cumulated Korean fabric origin." },
          { boxNum: 5, fieldNameEn: "12-Month Validity Window", fieldNameZh: "12个月有效期限", fieldNameVi: "Thời hạn hiệu lực 12 tháng kể từ ngày cấp", complianceRiskVi: "Nộp chậm quá 12 tháng không được hưởng hoàn thuế ưu đãi hồi tố.", complianceRiskEn: "Filing after 12 months bars retroactive EVFTA tariff preference.", auditTipVi: "Theo dõi lịch gửi bản gốc EUR.1 tới nhà nhập khẩu EU ngay sau khi tàu chạy.", auditTipEn: "Courier original EUR.1 promptly upon sailing to stay well within 12 months." },
          { boxNum: 6, fieldNameEn: "Post-Clearance Audit Record Retention (3–5 Years)", fieldNameZh: "事后核查单证留存义务", fieldNameVi: "Lưu trữ Hồ sơ Chứng minh Xuất xứ Hậu kiểm (3–5 năm)", complianceRiskVi: "Hải quan EU yêu cầu xác minh ngẫu nhiên sau 2 năm; nếu nhà máy mất bảng định mức BOM sẽ bị truy thu toàn bộ thuế.", complianceRiskEn: "Failing EU post-clearance verification triggers full retroactive duty clawback.", auditTipVi: "Lưu số hóa trọn bộ BOM, hóa đơn nguyên liệu và quy trình sản xuất ít nhất 5 năm.", auditTipEn: "Archive digital BOMs, supplier invoices, and production logs for at least 5 years." }
        ]
      },
      {
        id: "doc-eu-cbam",
        titleVi: "Báo cáo Phát thải Hàm chứa EU CBAM (Embedded Emissions Report)",
        titleEn: "EU CBAM Embedded Emissions Report",
        titleZh: "欧盟碳边境调节机制隐含排放报告 (CBAM)",
        issuerRoleVi: "Nhà máy sản xuất (Operator) cung cấp cho Nhà nhập khẩu khai báo EU (Authorized Declarant)",
        hotspots: [
          { boxNum: 1, fieldNameEn: "CN 8-Digit Goods Code Coverage", fieldNameZh: "欧盟8位CN税则号覆盖范围", fieldNameVi: "Mã CN 8 chữ số thuộc 6 ngành CBAM (Thép, Nhôm, Xi măng, Phân bón, Hydro, Điện)", complianceRiskVi: "Bỏ sót linh kiện bu-lông, ốc vít thép (HS 7318) nằm trong phụ lục CBAM dẫn tới phạt 10–50 EUR/tấn CO2 chưa báo cáo.", complianceRiskEn: "Overlooking downstream steel fasteners (CN 7318) incurs EUR 10–50/tCO2 penalties.", auditTipVi: "Đối chiếu toàn bộ danh mục mã CN 8 số trong Phụ lục I Quy định CBAM trước khi xuất hàng.", auditTipEn: "Screen every exported SKU's 8-digit CN code against CBAM Annex I." },
          { boxNum: 2, fieldNameEn: "Direct Emissions (Scope 1 — Production Process)", fieldNameZh: "直接排放（范围一生产工艺）", fieldNameVi: "Phát thải Trực tiếp (Scope 1 — Đốt nhiên liệu & Phản ứng luyện kim)", complianceRiskVi: "Không tách biệt tiêu hao than cốc/khí đốt theo từng dây chuyền khiến dữ liệu không vượt qua thẩm định viên độc lập.", complianceRiskEn: "Unallocated fuel metering across production lines fails third-party verification.", auditTipVi: "Lắp đồng hồ đo nhiên liệu riêng theo từng công đoạn và chuẩn hóa báo cáo theo mẫu Excel CBAM EU.", auditTipEn: "Meter fuel per production route using the official EU CBAM Communication Template." },
          { boxNum: 3, fieldNameEn: "Indirect Emissions (Scope 2 — Electricity Grid Factor)", fieldNameZh: "间接排放（范围二外购电力）", fieldNameVi: "Phát thải Gián tiếp từ Điện năng Tiêu thụ (Scope 2)", complianceRiskVi: "Áp sai hệ số phát thải lưới điện quốc gia hoặc dùng chứng chỉ năng lượng không đạt điều kiện PPA trực tiếp.", complianceRiskEn: "Using ineligible renewable certificates or wrong grid factors invalidates Scope 2 claims.", auditTipVi: "Ghi rõ kWh điện tiêu thụ trên tấn sản phẩm và bằng chứng hợp đồng mua điện trực tiếp (PPA) nếu có.", auditTipEn: "Document exact MWh/tonne electricity intensity and qualifying PPA contracts." },
          { boxNum: 4, fieldNameEn: "Precursor Material Embedded Emissions", fieldNameZh: "上游前驱体材料隐含排放", fieldNameVi: "Phát thải Hàm chứa của Phôi Nguyên liệu Đầu vào (Precursors)", complianceRiskVi: "Nhà máy cán thép Việt Nam mua phôi từ Trung Quốc nhưng không lấy dữ liệu phát thải của lò cao thượng nguồn sẽ bị áp mặc định phạt cao.", complianceRiskEn: "Rerollers omitting upstream billet emissions are hit with punitive EU defaults.", auditTipVi: "Đưa điều khoản bắt buộc cung cấp dữ liệu CBAM của nhà cung cấp phôi ngay vào hợp đồng mua nguyên liệu.", auditTipEn: "Mandate upstream precursor CBAM emission disclosures in raw-material purchase contracts." },
          { boxNum: 5, fieldNameEn: "Third-Party Accredited Verification (2026 Definitive Phase)", fieldNameZh: "欧盟认可第三方独立核查", fieldNameVi: "Xác minh Độc lập bởi Tổ chức được EU Công nhận (Từ 2026)", complianceRiskVi: "Từ giai đoạn thu phí chính thức 2026, số liệu tự khai chưa qua thẩm định viên được công nhận không còn được chấp nhận.", complianceRiskEn: "Unverified self-reported figures are rejected in the 2026 definitive phase.", auditTipVi: "Thuê đơn vị thẩm định đạt chuẩn ISO 14065 được cơ quan công nhận EU chấp thuận.", auditTipEn: "Engage an EU-accredited ISO 14065 verifier early in the reporting cycle." },
          { boxNum: 6, fieldNameEn: "Carbon Price Already Paid in Country of Origin", fieldNameZh: "原产国已支付碳价抵扣证明", fieldNameVi: "Khấu trừ Giá Carbon đã nộp tại Nước Xuất xứ (nếu có)", complianceRiskVi: "Không có biên lai nộp thuế/tín chỉ carbon chính thức (không kèm hoàn trợ cấp) sẽ không được khấu trừ chứng chỉ CBAM.", complianceRiskEn: "Undocumented or rebated local carbon payments cannot reduce CBAM certificate liability.", auditTipVi: "Lưu chứng từ nộp carbon thực tế từ sàn ETS nội địa để giảm trực tiếp số chứng chỉ phải mua tại EU.", auditTipEn: "Retain official ETS compliance receipts to claim legitimate carbon-price deductions." }
        ]
      },
      {
        id: "doc-eudr-dds",
        titleVi: "Tuyên bố Thẩm định Chống Phá rừng EU EUDR (Due Diligence Statement — DDS)",
        titleEn: "EUDR Due Diligence Statement (DDS & WGS84 Polygon)",
        titleZh: "欧盟零毁林法案尽职调查声明 (EUDR DDS)",
        issuerRoleVi: "Nhà nhập khẩu EU (Operator) nộp lên hệ thống EU TRACES NT trước thông quan",
        hotspots: [
          { boxNum: 1, fieldNameEn: "WGS84 Geolocation Coordinates (Point vs Polygon >4ha)", fieldNameZh: "WGS84地理坐标（4公顷以上须多边形）", fieldNameVi: "Tọa độ Địa lý WGS84 (Điểm cho thửa ≤4ha; Đa giác khép kín cho thửa >4ha)", complianceRiskVi: "Nộp tọa độ điểm đơn lẻ cho nông trại cao su/cà phê trên 4 ha hoặc đa giác không khép kín sẽ bị hệ thống EU TRACES từ chối.", complianceRiskEn: "Submitting point coordinates for plots >4ha or unclosed polygons fails TRACES validation.", auditTipVi: "Xuất tệp GeoJSON chuẩn WGS84 độ chính xác 6 chữ số thập phân và kiểm tra chồng lấn bản đồ rừng.", auditTipEn: "Export closed GeoJSON polygons in WGS84 with 6-decimal precision and check forest-loss overlays." },
          { boxNum: 2, fieldNameEn: "Cutoff Date Verification (31 December 2020)", fieldNameZh: "零毁林截止日期核验（2020年12月31日）", fieldNameVi: "Xác minh Không Phá rừng sau mốc 31/12/2020", complianceRiskVi: "Ảnh vệ tinh Sentinel-2 phát hiện mất tán rừng trên thửa đất sau 31/12/2020 khiến toàn bộ lô hàng bị cấm nhập EU.", complianceRiskEn: "Satellite detection of post-2020 canopy loss bars the entire shipment from the EU.", auditTipVi: "Đối chiếu đa giác vùng trồng với dữ liệu ảnh vệ tinh công khai trước khi thu mua gom hàng.", auditTipEn: "Cross-screen plot polygons against historical Sentinel-2 deforestation baselines before buying." },
          { boxNum: 3, fieldNameEn: "Zero Commingling / Physical Segregation", fieldNameZh: "禁止混批与物理隔离仓储", fieldNameVi: "Không Trộn Lẫn Lô Hàng Chưa Định Vị (Segregation)", complianceRiskVi: "Trộn 5% hạt cà phê hoặc gỗ không có tọa độ vào lô 95% đạt chuẩn làm mất tư cách hợp lệ của cả container.", complianceRiskEn: "Mixing even 5% unmapped raw material invalidates the entire container.", auditTipVi: "Thiết lập khu vực kho riêng và mã lô độc lập cho nguyên liệu phục vụ xuất khẩu EU.", auditTipEn: "Enforce dedicated warehouse bays and lot-IDs for EUDR-compliant export flows." },
          { boxNum: 4, fieldNameEn: "Local Legality Compliance (Land Tenure & Labor)", fieldNameZh: "原产国合法性合规（土地权与劳工）", fieldNameVi: "Tuân thủ Pháp luật Nước Sản xuất (Quyền sử dụng đất, thuế, lao động)", complianceRiskVi: "Đất không phá rừng nhưng thiếu giấy chứng nhận quyền sử dụng đất hợp pháp vẫn vi phạm điều kiện kép của EUDR.", complianceRiskEn: "Deforestation-free plots lacking legal land tenure still violate EUDR legality rules.", auditTipVi: "Thu thập bản sao giấy chứng nhận quyền sử dụng đất và biên bản khai thác hợp pháp.", auditTipEn: "Collect legal land-use certificates and harvesting permits alongside geolocation files." },
          { boxNum: 5, fieldNameEn: "DDS Reference Number on Import Customs Declaration", fieldNameZh: "进口报关单关联DDS参考号", fieldNameVi: "Gắn Mã Tham Chiếu DDS lên Tờ khai Hải quan Nhập khẩu EU", complianceRiskVi: "Thiếu mã DDS hợp lệ trên tờ khai hải quan khiến hàng không thể thông quan tự động.", complianceRiskEn: "Import declarations without a valid DDS reference are automatically blocked.", auditTipVi: "Chia sẻ mã tham chiếu và mã xác thực (Verification Number) DDS cho nhà nhập khẩu trước khi tàu cập bến.", auditTipEn: "Share DDS Reference and Verification numbers prior to vessel arrival." },
          { boxNum: 6, fieldNameEn: "7 Covered Commodities & Derived Products", fieldNameZh: "七大类受控商品及其衍生品", fieldNameVi: "7 Nhóm Hàng & Sản Phẩm Phái Sinh (Gỗ, Cao su, Cà phê, Ca cao, Dầu cọ, Đậu nành, Gia súc)", complianceRiskVi: "Bỏ qua sản phẩm phái sinh như lốp xe cao su, đồ gỗ nội thất, giấy in hoặc sô-cô-la.", complianceRiskEn: "Overlooking derived goods like rubber tires, wooden furniture, or printed paper.", auditTipVi: "Kiểm tra Phụ lục I EUDR theo mã HS của từng thành phẩm xuất khẩu.", auditTipEn: "Audit finished-good HS codes against EUDR Annex I before quoting EU clients." }
        ]
      },
      {
        id: "doc-commercial-invoice",
        titleVi: "Hóa đơn Thương mại Quốc tế (Commercial Invoice)",
        titleEn: "Commercial Invoice",
        titleZh: "国际贸易商业发票",
        issuerRoleVi: "Người xuất khẩu (Exporter / Beneficiary)",
        hotspots: [
          { boxNum: 1, fieldNameEn: "Incoterms 2020 Rule + Named Place", fieldNameZh: "国际贸易术语与指定地点", fieldNameVi: "Điều kiện Incoterms 2020 kèm Địa danh Cụ thể", complianceRiskVi: "Ghi chung chung 'CIF' mà không ghi tên cảng đích cụ thể gây tranh chấp chi phí dỡ hàng và tính trị giá hải quan.", complianceRiskEn: "Omitting the named port after CIF/FOB causes customs valuation and cost disputes.", auditTipVi: "Ghi đầy đủ 3 phần: Điều kiện + Địa điểm + Phiên bản (vd: 'CIF Rotterdam, Incoterms 2020').", auditTipEn: "Write full format: Rule + Named Place + Incoterms 2020." },
          { boxNum: 2, fieldNameEn: "Unit Price, Total Amount & Currency Consistency", fieldNameZh: "单价、总金额与币种一致性", fieldNameVi: "Đơn giá, Tổng tiền (Bằng số & Bằng chữ) và Loại tiền tệ", complianceRiskVi: "Sai lệch phép nhân số lượng × đơn giá dù chỉ 0.01 USD là lỗi sai biệt nghiêm trọng trên L/C.", complianceRiskEn: "Even a 0.01 rounding mismatch triggers an L/C discrepancy fee.", auditTipVi: "Kiểm tra công thức cộng dồn và viết chính xác số tiền bằng chữ khớp tuyệt đối.", auditTipEn: "Recalculate line extensions and verify amount-in-words matches exactly." },
          { boxNum: 3, fieldNameEn: "HS Code & Exact Goods Description", fieldNameZh: "税则编码与完整货品描述", fieldNameVi: "Mã HS & Mô tả Hàng hóa Khớp L/C", complianceRiskVi: "Theo UCP 600 Điều 18, mô tả hàng trên Commercial Invoice phải tương ứng chính xác với L/C (chặt hơn các chứng từ khác).", complianceRiskEn: "Under UCP 600 Art. 18, invoice description must correspond strictly to L/C wording.", auditTipVi: "Sao chép chính xác cụm từ mô tả hàng hóa từ trường 45A của L/C.", auditTipEn: "Mirror L/C Field 45A description verbatim on the commercial invoice." },
          { boxNum: 4, fieldNameEn: "Country of Origin Statement", fieldNameZh: "原产国声明", fieldNameVi: "Ghi chú Nước Xuất xứ Hàng hóa", complianceRiskVi: "Thiếu dòng 'Country of Origin' gây chậm trễ kiểm tra thuế suất ưu đãi hoặc chống bán phá giá tại hải quan nhập khẩu.", complianceRiskEn: "Omitting Country of Origin delays preferential tariff and AD/CVD screening.", auditTipVi: "Luôn thể hiện rõ xuất xứ khớp với C/O và nhãn mác trên sản phẩm.", auditTipEn: "State Country of Origin consistently with C/O and physical product markings." },
          { boxNum: 5, fieldNameEn: "Bank Remittance Details & Payment Terms", fieldNameZh: "收款银行信息与付款方式", fieldNameVi: "Thông tin Ngân hàng Thụ hưởng (SWIFT/IBAN) & Điều kiện Thanh toán", complianceRiskVi: "Rủi ro lừa đảo thay đổi tài khoản qua email giả mạo (BEC) nếu không xác thực kênh độc lập.", complianceRiskEn: "Business Email Compromise (BEC) fraud targets altered invoice bank details.", auditTipVi: "Xác nhận số tài khoản ngân hàng qua điện thoại/video chính thức trước khi chuyển T/T lần đầu.", auditTipEn: "Verify beneficiary bank coordinates via an independent voice/video channel." },
          { boxNum: 6, fieldNameEn: "Authorized Signature & Company Seal", fieldNameZh: "授权签字与公司公章", fieldNameVi: "Chữ ký Người có Thẩm quyền & Con dấu Công ty", complianceRiskVi: "Một số hải quan và ngân hàng nhập khẩu yêu cầu chữ ký tay + dấu tròn đỏ công ty trên bản gốc.", complianceRiskEn: "Certain customs regimes and L/Cs reject unsigned computer-printed invoices.", auditTipVi: "Kiểm tra điều khoản L/C về yêu cầu ký sống và đóng dấu mộc.", auditTipEn: "Check L/C clauses for manual signature and wet-ink company stamp requirements." }
        ]
      },
      {
        id: "doc-packing-list",
        titleVi: "Phiếu Đóng Gói Chi Tiết (Detailed Packing List)",
        titleEn: "Detailed Packing List",
        titleZh: "详细装箱单 (Packing List)",
        issuerRoleVi: "Nhà máy / Bộ phận Kho Xuất khẩu",
        hotspots: [
          { boxNum: 1, fieldNameEn: "Net Weight (N.W.) vs Gross Weight (G.W.)", fieldNameZh: "净重与毛重明细", fieldNameVi: "Trọng lượng Tịnh (N.W.) vs Trọng lượng Cả Bì (G.W.)", complianceRiskVi: "N.W. lớn hơn G.W. hoặc tổng G.W. lệch với B/L khiến hải quan nghi ngờ khai sai số liệu và kiểm hóa thực tế.", complianceRiskEn: "N.W. exceeding G.W. or mismatching B/L triggers mandatory physical customs inspection.", auditTipVi: "Kiểm tra từng dòng hàng: G.W. = N.W. + trọng lượng bao bì/pallet; tổng khớp 100% B/L.", auditTipEn: "Confirm G.W. > N.W. per line and total G.W. matches B/L exactly." },
          { boxNum: 2, fieldNameEn: "Total Packages & Outer Packaging Type", fieldNameZh: "总件数与外包装类型", fieldNameVi: "Tổng Số Kiện & Quy cách Đóng gói (Cartons / Pallets / Crates)", complianceRiskVi: "Ghi '10 Pallets' trên B/L nhưng ghi '400 Cartons' không quy đổi trên Packing List gây vướng khi nhận hàng tại kho cảng.", complianceRiskEn: "Unreconciled pallet vs carton counts delay port warehouse release.", auditTipVi: "Ghi rõ cả hai cấp: '10 Pallets (containing 400 Cartons total)'.", auditTipEn: "Show dual hierarchy: '10 Pallets (containing 400 Cartons)'." },
          { boxNum: 3, fieldNameEn: "Carton Dimensions & Total Volume (CBM)", fieldNameZh: "单箱尺寸与总体积 (CBM)", fieldNameVi: "Kích thước Thùng (L×W×H cm) & Tổng Thể tích (m³)", complianceRiskVi: "Tính sai CBM gây tính nhầm cước hàng lẻ LCL (tính theo W/M — tấn hoặc m³ nào lớn hơn).", complianceRiskEn: "Miscalculated CBM inflates LCL freight billing under Weight/Measurement rules.", auditTipVi: "Đo thực tế kích thước ngoài thùng sau khi dán băng keo và nhân chính xác số thùng.", auditTipEn: "Measure external packed carton dimensions and verify total CBM formula." },
          { boxNum: 4, fieldNameEn: "Shipping Marks & Carton Numbering", fieldNameZh: "唛头与箱号序列", fieldNameVi: "Ký mã hiệu Vận chuyển (Shipping Marks) & Thứ tự Thùng (C/No. 1–400)", complianceRiskVi: "Thiếu ký mã hiệu khiến kho gom hàng LCL thất lạc kiện hoặc giao nhầm người nhận.", complianceRiskEn: "Missing shipping marks risk LCL warehouse misrouting or cargo loss.", auditTipVi: "In rõ mã PO, tên người nhận, cảng đích và số thứ tự thùng khớp nguyên văn Packing List.", auditTipEn: "Print PO, consignee, destination port, and carton sequence matching the list." },
          { boxNum: 5, fieldNameEn: "Packing Material Disclosure (Wood vs Non-Wood)", fieldNameZh: "包装材料声明（实木或非木）", fieldNameVi: "Khai báo Vật liệu Đóng gói (Gỗ tự nhiên vs Ván ép/Nhựa)", complianceRiskVi: "Dùng gỗ tự nhiên nhưng quên khai báo dễ bị phạt nặng về kiểm dịch thực vật tại Úc, Mỹ, EU.", complianceRiskEn: "Undeclared solid wood packaging incurs heavy biosecurity fines in EU, US, and Australia.", auditTipVi: "Ghi rõ 'Non-Wood Packaging' hoặc đính kèm chứng nhận ISPM-15 nếu dùng gỗ tự nhiên.", auditTipEn: "Declare 'Non-Wood Packaging' or attach ISPM-15 proof for solid timber." },
          { boxNum: 6, fieldNameEn: "Cross-Reference to Invoice & Contract No.", fieldNameZh: "关联发票号与合同号", fieldNameVi: "Số tham chiếu khớp Hóa đơn & Hợp đồng", complianceRiskVi: "Lệch số tham chiếu hóa đơn khiến bộ chứng từ mất tính liên kết khi kiểm tra ngân hàng.", complianceRiskEn: "Mismatched invoice cross-reference breaks documentary consistency.", auditTipVi: "Đồng bộ số Invoice, ngày phát hành và mã PO trên đầu trang Packing List.", auditTipEn: "Sync Invoice number, date, and PO reference in the document header." }
        ]
      },
      {
        id: "doc-ispm15-phyto",
        titleVi: "Chứng thư Kiểm dịch Thực vật & Hun trùng Bao bì Gỗ ISPM-15",
        titleEn: "Phytosanitary & ISPM-15 Wood Packaging Fumigation Certificate",
        titleZh: "植物检疫证书与ISPM-15木质包装熏蒸证明",
        issuerRoleVi: "Cơ quan Kiểm dịch Thực vật Quốc gia / Đơn vị Hun trùng được ủy quyền",
        hotspots: [
          { boxNum: 1, fieldNameEn: "IPPC Stamp on Physical Wooden Pallets", fieldNameZh: "木托盘实体IPPC麦穗标识", fieldNameVi: "Dấu Khắc Nhiệt IPPC trên ít nhất 2 Mặt Đối diện của Pallet Gỗ", complianceRiskVi: "Có chứng thư giấy nhưng pallet thực tế thiếu dấu khắc IPPC (HT hoặc MB) vẫn bị hải quan EU/Úc buộc tiêu hủy hoặc tái xuất.", complianceRiskEn: "Paper certificates do not excuse missing physical IPPC stamps on solid wood pallets.", auditTipVi: "Kiểm tra trực tiếp dấu bông lúa IPPC rõ nét (mã quốc gia + mã cơ sở + HT/MB) trước khi xếp hàng.", auditTipEn: "Physically inspect legible IPPC stamps (Country-Facility-HT/MB) on two opposite sides." },
          { boxNum: 2, fieldNameEn: "Treatment Method (HT 56°C/30min vs MB)", fieldNameZh: "处理方式（热处理HT与溴甲烷MB）", fieldNameVi: "Phương pháp Xử lý (Sấy nhiệt HT 56°C/30 phút vs Hun thuốc MB)", complianceRiskVi: "Nhiều quốc gia EU hạn chế nghiêm ngặt Methyl Bromide (MB) với hàng thực phẩm/dược phẩm do tồn dư hóa chất.", complianceRiskEn: "EU buyers restrict Methyl Bromide on food and pharma cargo due to chemical residue.", auditTipVi: "Ưu tiên pallet xử lý nhiệt (HT — Heat Treatment) hoặc pallet nhựa/ván ép miễn ISPM-15.", auditTipEn: "Prefer Heat-Treated (HT) pallets or ISPM-15 exempt plywood/plastic pallets." },
          { boxNum: 3, fieldNameEn: "Botanical Name & Quarantine Pest Freedom", fieldNameZh: "植物学名与无检疫性有害生物声明", fieldNameVi: "Tên Khoa học (Latin) & Cam kết Không Sâu bệnh Kiểm dịch", complianceRiskVi: "Ghi sai tên khoa học Latin của nông sản khiến hệ thống TRACES EU từ chối thông quan thực vật.", complianceRiskEn: "Incorrect Latin botanical names trigger EU TRACES phytosanitary rejection.", auditTipVi: "Đối khớp chính xác tên khoa học (vd: Lycium barbarum L.) và yêu cầu bổ sung (Additional Declaration) của nước nhập.", auditTipEn: "Verify exact Latin taxonomy and destination-specific Additional Declarations." },
          { boxNum: 4, fieldNameEn: "14-Day Inspection-to-Export Window", fieldNameZh: "检疫签发至出境14天有效期", fieldNameVi: "Thời hạn 14 ngày từ ngày kiểm dịch đến ngày tàu chạy", complianceRiskVi: "Tàu bị hoãn (roll) quá 14 ngày kể từ ngày cấp Phytosanitary Certificate làm chứng thư hết hiệu lực.", complianceRiskEn: "Vessel rollover exceeding 14 days after inspection invalidates the phytosanitary certificate.", auditTipVi: "Bám sát lịch ETD thực tế trước khi chốt ngày lấy mẫu kiểm dịch.", auditTipEn: "Align phytosanitary inspection timing tightly with confirmed vessel ETD." },
          { boxNum: 5, fieldNameEn: "ePhyto Electronic Hub Transmission", fieldNameZh: "电子植物检疫证书 (ePhyto) 传输", fieldNameVi: "Truyền Dữ liệu Điện tử qua Cổng IPPC ePhyto", complianceRiskVi: "Bản giấy gửi chậm hơn hàng bay/tàu nhanh gây lưu kho lạnh tốn kém.", complianceRiskEn: "Delayed paper certificates strand perishable goods in costly airport cold storage.", auditTipVi: "Sử dụng ePhyto kết nối trực tiếp cơ quan kiểm dịch hai nước khi tuyến hỗ trợ.", auditTipEn: "Leverage IPPC ePhyto digital exchange wherever destination customs supports it." },
          { boxNum: 6, fieldNameEn: "Debarked Wood Requirement", fieldNameZh: "木包装去皮要求", fieldNameVi: "Yêu cầu Bóc Sạch Vỏ Cây trên Gỗ Đóng Kiện", complianceRiskVi: "Pallet còn sót mảng vỏ cây tươi chứa ấu trùng bọ cánh cứng bị giữ kiểm dịch ngay lập tức.", complianceRiskEn: "Residual bark harboring beetle larvae triggers immediate quarantine detention.", auditTipVi: "Kiểm tra trực quan đảm bảo toàn bộ thanh gỗ pallet đã bào nhẵn sạch vỏ.", auditTipEn: "Visually verify all solid wood slats are completely debarked before stuffing." }
        ]
      }
    ],
    extraSupplyCases16: [
      {
        id: "v6-sc-25", lane: "CN-VN-EU Maritime", titleVi: "Tắc Biển Đỏ — Tàu Vòng Mũi Hảo Vọng Làm Lỡ Lịch Dây Chuyền JIT EU", titleEn: "Red Sea Cape Rerouting Threatening EU JIT Assembly Line",
        scenarioZh: "原定经苏伊士运河抵达鹿特丹的两个40尺高柜精密电机被迫绕行好望角，航期骤增13天，欧洲汽车装配厂面临停线索赔。",
        riskIdentifiedEn: "13-day ocean transit delay risking EUR 35,000+ JIT line-stoppage penalty and demurrage cascade.",
        actionPlanVi: "Tách ngay 15% lượng linh kiện lõi chuyển hàng không (Air-Freight) giữ dây chuyền trong 7 ngày, phần còn lại theo dõi AIS và kích hoạt kho đệm Rotterdam.",
        incotermsAndLiabilityVi: "CIF Rotterdam: rủi ro chậm trễ bất khả kháng (Force Majeure) do hãng tàu đổi tuyến thuộc người mua sau khi hàng qua lan can tàu, nhưng cần phối hợp chia sẻ chi phí hàng không khẩn.",
        incotermsAndLiabilityEn: "Under CIF Rotterdam, carrier rerouting risk passes on board at POL, yet buyer-seller cost-sharing preserves the annual contract.",
        documentChecklist: ["Notice of Force Majeure", "Carrier Rerouting Advisory", "Air Waybill (AWB) for Emergency Split", "Revised Arrival Notice"],
        keyTermsZhEn: ["好望角绕行 / Cape Rerouting", "停线索赔 / Line-Stoppage Claim", "应急空运 / Emergency Air Split"],
        replyFactoryZh: "请立即从备品仓调出300台核心电机，24小时内打包安排上海浦东空运直飞阿姆斯特丹，并同步提供商业发票分单。",
        replyEuBossEn: "Vessel rerouted via Cape (+13 days). We are air-freighting 300 critical units tomorrow to bridge your JIT line with zero downtime.",
        financialImpactRangeEur: "EUR 18,000 – 48,000 (chi phí air-freight khẩn + phạt chậm giao nếu không tách lô)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Kho đệm tại EU còn đủ linh kiện chạy dây chuyền trong 14 ngày tới không?", yesBranchVi: "Giữ nguyên đường biển, cập nhật lại lịch nhận kho", noBranchVi: "Tính ngay số ngày thiếu hụt và khối lượng tối thiểu cần cứu tuyến" },
          { stepOrder: 2, qVi: "Nhà máy có sẵn hàng tồn kho dự phòng để bay gấp trong 48 giờ không?", yesBranchVi: "Đặt chỗ bay thẳng PVG/HAN → AMS/FRA và xuất AWB riêng", noBranchVi: "Điều chuyển hàng từ kho trung chuyển khu vực hoặc tăng ca sản xuất" },
          { stepOrder: 3, qVi: "Hợp đồng có điều khoản chia sẻ phụ phí bất khả kháng (Force Majeure) không?", yesBranchVi: "Gửi thông báo chính thức kèm xác nhận hãng tàu để đồng chia chi phí", noBranchVi: "Đề xuất chiết khấu đơn tiếp theo đổi lấy miễn phạt chậm giao" }
        ]
      },
      {
        id: "v6-sc-26", lane: "VN-EU Agri-Export", titleVi: "Container Cà Phê & Cao Su Bị Treo Vì Thiếu Đa Giác WGS84 EUDR", titleEn: "Coffee & Rubber Consignment Held Over Incomplete EUDR WGS84 Polygons",
        scenarioZh: "发往汉堡港的一批越南天然橡胶混入未提供大于4公顷地块多边形坐标的小农原料，欧盟进口商无法在TRACES系统生成DDS编号。",
        riskIdentifiedEn: "Non-compliant geolocation data blocks EUDR DDS issuance, risking port seizure and 4% EU turnover fines.",
        actionPlanVi: "Tạm dừng đóng container lô nghi vấn, tách riêng 100% nguyên liệu từ các nông trại đã có đa giác GeoJSON hợp lệ sau 31/12/2020 và rà soát vệ tinh Sentinel-2.",
        incotermsAndLiabilityVi: "FOB Cát Lái: người bán có nghĩa vụ cung cấp chứng từ tuân thủ đã thỏa thuận trong hợp đồng; thiếu dữ liệu EUDR cấu thành lỗi vi phạm hợp đồng.",
        incotermsAndLiabilityEn: "Under FOB Cat Lai, seller's contractual compliance warranty makes missing EUDR geolocation a seller breach.",
        documentChecklist: ["GeoJSON WGS84 Polygon File", "EUDR Due Diligence Statement (DDS)", "Segregation Warehouse Log", "Land Tenure Proof"],
        keyTermsZhEn: ["零毁林声明 / EUDR DDS", "地块多边形 / Plot Polygon", "物理隔离 / Physical Segregation"],
        replyFactoryZh: "请立即冻结未定位小农批次，仅使用已完成WGS84多边形测绘且核验无毁林记录的隔离仓原料重新配货。",
        replyEuBossEn: "We isolated unmapped smallholder lots and rebuilt the consignment strictly from verified post-2020 deforestation-free GeoJSON plots.",
        financialImpactRangeEur: "EUR 15,000 – 60,000 (phí lưu bãi cảng Hamburg + tái xuất trả hàng nếu thông quan thất bại)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Lô hàng đã có tệp GeoJSON đa giác khép kín cho mọi thửa đất >4 ha chưa?", yesBranchVi: "Chạy kiểm tra chéo bản đồ mất rừng sau 31/12/2020", noBranchVi: "Dừng giao hàng, cử đội GPS đo lại hoặc thay bằng lô đã định vị" },
          { stepOrder: 2, qVi: "Có xảy ra trộn lẫn nguyên liệu chưa định vị trong kho gom không?", yesBranchVi: "Loại bỏ toàn bộ lô trộn khỏi đơn EU, chuyển sang thị trường ngoài EU", noBranchVi: "Cấp biên bản cách ly kho (Segregation Certificate)" },
          { stepOrder: 3, qVi: "Nhà nhập khẩu đã nhận mã tham chiếu DDS trên EU TRACES chưa?", yesBranchVi: "Gắn mã DDS vào bộ chứng từ hải quan và cho tàu chạy", noBranchVi: "Hoàn tất nộp dữ liệu trước khi phát hành vận đơn" }
        ]
      },
      {
        id: "v6-sc-27", lane: "CN-VN-EU Steel", titleVi: "Thép Cán & Bu-lông Bị Áp Giá Trị Mặc Định Phạt Cao EU CBAM 2026", titleEn: "Steel Fasteners Hit by Punitive EU CBAM 2026 Default Emission Values",
        scenarioZh: "越南机械厂使用中国高炉钢坯加工紧固件出口德国，因上游钢厂未提供实测碳排放报告，欧盟申报人面临高额默认值惩罚性碳成本。",
        riskIdentifiedEn: "Missing upstream precursor emissions forces EU default values, inflating landed cost by 15–22%.",
        actionPlanVi: "Yêu cầu nhà cung cấp phôi thép Trung Quốc điền mẫu EU CBAM Communication Template, thuê đơn vị ISO 14065 thẩm định và chuyển dần sang thép lò điện EAF.",
        incotermsAndLiabilityVi: "DDP/DAP Đức hoặc CIF với điều khoản CBAM: bên bán phải cung cấp số liệu phát thải thực tế có xác minh để tránh bị trừ tiền hợp đồng.",
        incotermsAndLiabilityEn: "Under EU supply agreements, failure to deliver verified CBAM data triggers contractual price deductions.",
        documentChecklist: ["EU CBAM Communication Template", "ISO 14065 Verification Statement", "Upstream Billet Mill Emissions Sheet", "Electricity MWh Log"],
        keyTermsZhEn: ["隐含碳排放 / Embedded Emissions", "前驱体材料 / Precursor Material", "电炉短流程 / EAF Route"],
        replyFactoryZh: "请贵钢厂于本周内按欧盟CBAM表格补充高炉/电炉实测碳排数据，并配合第三方机构完成远程核查。",
        replyEuBossEn: "We secured actual Scope 1–2 data from our upstream billet mill and scheduled ISO 14065 verification to eliminate punitive CBAM defaults.",
        financialImpactRangeEur: "EUR 22,000 – 75,000 (chênh lệch tiền mua chứng chỉ CBAM mặc định so với thực tế mỗi quý)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Mã CN 8 chữ số của sản phẩm có nằm trong Phụ lục I CBAM không?", yesBranchVi: "Bắt buộc thu thập dữ liệu Scope 1 + Scope 2 + Precursor", noBranchVi: "Lưu văn bản phân loại mã HS xác nhận ngoài phạm vi CBAM" },
          { stepOrder: 2, qVi: "Nhà cung cấp phôi thép thượng nguồn có cung cấp số liệu đo thực tế không?", yesBranchVi: "Tổng hợp vào bảng CBAM Template và gửi thẩm định viên", noBranchVi: "Đàm phán chuyển sang nguồn phôi lò điện EAF có sẵn báo cáo CBAM" },
          { stepOrder: 3, qVi: "Đơn vị thẩm định có đạt công nhận ISO 14065 của EU không?", yesBranchVi: "Nộp báo cáo xác minh cho nhà nhập khẩu EU trước hạn quý", noBranchVi: "Thuê ngay tổ chức thẩm định được công nhận tránh bị bác báo cáo" }
        ]
      },
      {
        id: "v6-sc-28", lane: "CN-EU Trade Finance", titleVi: "Sai Biệt Chứng Từ L/C UCP 600 Do Lệch Chính Tả Mô Tả Hàng & Cảng Đích", titleEn: "UCP 600 L/C Discrepancy From Invoice Description & Port Typo",
        scenarioZh: "出口商提交的商业发票品名漏写型号后缀且提单卸货港拼写与信用证44F栏不一致，开证行发出拒付通知并收取高额不符点费。",
        riskIdentifiedEn: "Issuing bank formally refuses L/C payment under UCP 600 Art. 14/18, freezing EUR 120,000 receivable.",
        actionPlanVi: "Trong vòng 48 giờ liên hệ người mua xin Chấp nhận Sai biệt (Discrepancy Waiver), đồng thời phát hành Invoice sửa lỗi nếu còn trong hạn xuất trình 21 ngày.",
        incotermsAndLiabilityVi: "L/C trả ngay: bên thụ hưởng chịu phí sai biệt (thường EUR 80–150/lần) và rủi ro người mua ép giảm giá nếu hàng đã tới cảng.",
        incotermsAndLiabilityEn: "Beneficiary bears discrepancy fees and commercial hold-up risk if documents are not cured within the 21-day presentation window.",
        documentChecklist: ["Original L/C SWIFT MT700", "Bank Refusal Notice (MT734)", "Corrected Commercial Invoice", "Buyer Discrepancy Waiver"],
        keyTermsZhEn: ["不符点拒付 / Discrepancy Refusal", "接受不符点 / Discrepancy Waiver", "交单期限 / Presentation Period"],
        replyFactoryZh: "单证出现品名与目的港拼写不符，请财务立即重出与信用证45A栏逐字一致的商业发票并加急寄送议付行。",
        replyEuBossEn: "We identified a minor clerical typo on the invoice and request your bank's discrepancy waiver while dispatching corrected originals today.",
        financialImpactRangeEur: "EUR 1,500 – 120,000 (phí sai biệt + chi phí lưu bãi hoặc rủi ro treo toàn bộ tiền hàng)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Thời hạn hiệu lực L/C và hạn xuất trình 21 ngày sau ngày B/L còn đủ không?", yesBranchVi: "Thay thế chứng từ sai ngay lập tức tại ngân hàng chiết khấu", noBranchVi: "Chuyển sang phương án xin Waiver trực tiếp từ người mua" },
          { stepOrder: 2, qVi: "Lỗi sai nằm ở chứng từ do người bán tự lập (Invoice/PL) hay hãng tàu (B/L)?", yesBranchVi: "Tự phát hành lại bản sửa trong 24 giờ", noBranchVi: "Yêu cầu hãng tàu chỉnh sửa B/L (Manifest Corrector)" },
          { stepOrder: 3, qVi: "Người mua có đồng ý ký Waiver chấp nhận thanh toán không?", yesBranchVi: "Theo dõi ngân hàng phát hành giải ngân T/T", noBranchVi: "Giữ chặt B/L gốc, không phát hành Telex Release cho tới khi chốt thanh toán" }
        ]
      },
      {
        id: "v6-sc-29", lane: "CN-VN-EU Quality", titleVi: "Rớt Kiểm Định Mẫu AQL 1.5 Trước Khi Đóng Container Hàng Điện Tử", titleEn: "Pre-Shipment Inspection Failure Under ISO 2859-1 AQL 1.5",
        scenarioZh: "第三方验货机构按AQL 1.5抽检东莞工厂2000台小家电，检出严重外观划伤与铭牌CE标识缺失共9件，超过拒收阈值。",
        riskIdentifiedEn: "Major defects (9 units) exceed AQL 1.5 rejection limit (Re=6 for sample 125), blocking shipment.",
        actionPlanVi: "Từ chối xuất hàng, ban hành phiếu yêu cầu khắc phục (CAPA), buộc nhà máy kiểm 100% toàn lô, dán bổ sung tem CE chuẩn và chịu phí tái kiểm.",
        incotermsAndLiabilityVi: "FOB Thâm Quyến: nhà máy chịu 100% chi phí phân loại sửa chữa và phí kiểm lại (Re-inspection Fee) theo điều khoản chất lượng PO.",
        incotermsAndLiabilityEn: "Under PO quality terms, vendor bears 100% sorting, rework, and third-party re-inspection costs.",
        documentChecklist: ["PSI Failed Report (ISO 2859-1)", "Corrective Action Plan (CAPA)", "CE Technical Declaration of Conformity", "Re-Inspection Pass Certificate"],
        keyTermsZhEn: ["抽检拒收 / AQL Rejection", "百检返工 / 100% Sorting & Rework", "复检费用 / Re-Inspection Fee"],
        replyFactoryZh: "本次AQL 1.5验货严重缺陷超标，请贵厂立即停装并执行100%全检返工，补齐规范CE铭牌后由贵方承担复检费用。",
        replyEuBossEn: "Our PSI caught 9 major defects before loading. We halted stuffing, enforced 100% factory rework at vendor cost, and booked re-inspection in 72 hours.",
        financialImpactRangeEur: "EUR 8,000 – 35,000 (tránh thiệt hại thu hồi hàng lỗi tại siêu thị Châu Âu)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Có phát hiện lỗi Nghiêm trọng về an toàn điện hoặc thiếu nhãn pháp lý CE không?", yesBranchVi: "Chặn xuất hàng tuyệt đối (Zero Tolerance)", noBranchVi: "Đánh giá tỷ lệ lỗi Major/Minor theo bảng AQL" },
          { stepOrder: 2, qVi: "Nhà máy có thể hoàn tất sửa 100% và tái kiểm trước hạn tàu chạy không?", yesBranchVi: "Giữ booking tàu và đặt lịch tái kiểm sau 48–72 giờ", noBranchVi: "Dời booking sang chuyến kế tiếp (Roll over) tránh phí hủy muộn" },
          { stepOrder: 3, qVi: "Nguyên nhân gốc rễ đã được khắc phục trên dây chuyền sản xuất chưa?", yesBranchVi: "Ký phê duyệt xuất hàng sau khi tái kiểm Đạt", noBranchVi: "Nâng mức kiểm tra lô sau lên Tightened Inspection" }
        ]
      },
      {
        id: "v6-sc-30", lane: "CN-EU Port Ops", titleVi: "Đình Công Cảng Hamburg Gây Ùn Ứ Container Lạnh & Phí Cắm Điện", titleEn: "Hamburg Port Strike Stranding Reefer Containers & Plug-In Charges",
        scenarioZh: "德国汉堡港码头工人突发48小时预警性罢工，导致两柜冷冻水产无法按期提柜，面临高额冷柜插电费与货架期损耗风险。",
        riskIdentifiedEn: "Terminal strike halts gate-out, escalating daily reefer plug-in/demurrage fees and shelf-life erosion.",
        actionPlanVi: "Kích hoạt điều khoản cảng dỡ thay thế (Antwerp/Rotterdam) cho các tàu chưa cập bến; với container đã dỡ, gửi thư xin miễn giảm DEM/DET bất khả kháng.",
        incotermsAndLiabilityVi: "CIF Hamburg: người mua chịu chi phí phát sinh sau khi hàng dỡ tại cảng đích, nhưng đại lý giao nhận cần đàm phán miễn lưu bãi (Free Time Extension).",
        incotermsAndLiabilityEn: "Post-discharge strike costs fall on consignee under CIF, making proactive free-time negotiation vital.",
        documentChecklist: ["Port Authority Strike Notice", "Reefer Temperature Download Log", "Free-Time Extension Request", "Alternate Trucking Dispatch Order"],
        keyTermsZhEn: ["港口罢工 / Port Strike", "冷柜插电费 / Reefer Plug-In Fee", "免箱期延长 / Free-Time Extension"],
        replyFactoryZh: "汉堡港突发罢工，请暂停下周冷柜发运计划两天，待船司确认是否改靠鹿特丹港后再行装柜。",
        replyEuBossEn: "Hamburg terminal strike paused gate-out. We filed for strike-related demurrage relief and pre-booked night-shift reefer drayage upon reopening.",
        financialImpactRangeEur: "EUR 4,500 – 19,000 (phí cắm điện container lạnh + lưu bãi + phụ phí xe tải đêm)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Container lạnh đã dỡ xuống bãi cảng Hamburg chưa?", yesBranchVi: "Yêu cầu cảng xác nhận duy trì nguồn điện liên tục và xin miễn phí lưu bãi", noBranchVi: "Liên hệ hãng tàu xem xét chuyển cảng dỡ sang Rotterdam/Bremerhaven" },
          { stepOrder: 2, qVi: "Hạn sử dụng còn lại của hàng đông lạnh có bị ảnh hưởng bởi trễ 5 ngày không?", yesBranchVi: "Ưu tiên xe tải chạy ca đêm ngay phút đầu cổng cảng mở lại", noBranchVi: "Sắp xếp lịch nhận kho tiêu chuẩn sau đình công" },
          { stepOrder: 3, qVi: "Hãng tàu có chấp nhận gia hạn Free Time do đình công không?", yesBranchVi: "Lưu văn bản xác nhận vào hồ sơ quyết toán", noBranchVi: "Kiểm tra điều khoản bồi hoàn bảo hiểm gián đoạn chuỗi lạnh" }
        ]
      },
      {
        id: "v6-sc-31", lane: "VN-CN Agri-Export", titleVi: "Chậm Gia Hạn Mã Số GACC Lệnh 248 Khiến Lô Thực Phẩm Bị Chặn Cửa Khẩu", titleEn: "Expired GACC Decree 248 Registration Blocking Food Entry at China Border",
        scenarioZh: "越南果干加工厂未在到期前三个月通过CIFER系统提交GACC 248号令续期申请，导致已抵达钦州港的货柜在海关单一窗口报错无法申报。",
        riskIdentifiedEn: "Lapsed 18-digit GACC code triggers automated customs block at Qinzhou Port with forced return risk.",
        actionPlanVi: "Nộp hồ sơ gia hạn khẩn qua cơ quan thẩm quyền Việt Nam và CIFER, tạm đưa container vào kho ngoại quan cảng Khâm Châu chờ kích hoạt lại mã.",
        incotermsAndLiabilityVi: "CIF Khâm Châu: trách nhiệm duy trì mã đăng ký cơ sở xuất khẩu thuộc người bán; toàn bộ phí lưu kho ngoại quan phát sinh do người bán chịu.",
        incotermsAndLiabilityEn: "Maintaining active GACC registration is seller's compliance obligation; bonded storage fees fall on seller.",
        documentChecklist: ["GACC CIFER Renewal Application", "Competent Authority Endorsement", "Bonded Warehouse Entry Notice", "Packaging Label Verification"],
        keyTermsZhEn: ["248号令续期 / Decree 248 Renewal", "保税暂存 / Bonded Temporary Storage", "强制退运 / Forced Return"],
        replyFactoryZh: "因248号令注册号过期，请立即配合主管部门通过CIFER提交加急续期，我司先安排货柜转入钦州保税仓避免退运。",
        replyEuBossEn: "Export facility GACC registration lapsed before arrival. We moved cargo into Qinzhou bonded storage while fast-tracking CIFER renewal.",
        financialImpactRangeEur: "EUR 6,000 – 28,000 (phí lưu kho ngoại quan + nguy cơ tái xuất trả về)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Mã đăng ký 18 số trên hệ thống CIFER đang ở trạng thái Tạm ngừng hay Hết hạn?", yesBranchVi: "Kiểm tra lỗi hồ sơ và nộp bổ sung gia hạn ngay trong 24 giờ", noBranchVi: "Đối chiếu lỗi đánh máy mã số trên tờ khai hải quan" },
          { stepOrder: 2, qVi: "Hàng có thể chuyển tạm vào kho ngoại quan cảng để chờ kích hoạt mã không?", yesBranchVi: "Làm thủ tục chuyển kho ngoại quan cắt phí lưu bãi DEM nặng", noBranchVi: "Lập phương án tái xuất chuyển hướng sang Hồng Kông hoặc thị trường khác" },
          { stepOrder: 3, qVi: "Đã thiết lập lịch cảnh báo tự động trước 6 tháng cho toàn bộ nhà máy đối tác chưa?", yesBranchVi: "Cập nhật vào sổ theo dõi tuân thủ định kỳ", noBranchVi: "Bổ sung quy trình kiểm tra mã GACC trước mỗi lần đặt tàu" }
        ]
      },
      {
        id: "v6-sc-32", lane: "CN-VN OEM Legal", titleVi: "Tranh Chấp Quyền Sở Hữu Khuôn Ép Nhựa (Mold IP) Tại Nhà Máy Gia Công", titleEn: "Injection Mold Ownership & IP Dispute With Chinese OEM Factory",
        scenarioZh: "越南品牌方委托佛山注塑厂开模生产定制配件，换厂时因未签署专门模具所有权与保密协议（NNN），原厂扣留模具并仿制同款低价销售。",
        riskIdentifiedEn: "Factory retains USD 28,000 custom tooling and sells knockoffs due to missing PRC-enforceable NNN agreement.",
        actionPlanVi: "Thu thập hóa đơn thanh toán tiền khuôn, bản vẽ CAD gốc, đăng ký kiểu dáng công nghiệp tại CNIPA và gửi thư cảnh cáo luật sư trước khi thương lượng thu hồi khuôn.",
        incotermsAndLiabilityVi: "Hợp đồng OEM không có điều khoản NNN chuẩn luật Trung Quốc (Non-Use, Non-Disclosure, Non-Circumvention) khiến tòa án khó cưỡng chế nhanh.",
        incotermsAndLiabilityEn: "Standard Western NDAs are weak in PRC courts; a bilingual Chinese-law NNN + Tooling Ownership Agreement is essential.",
        documentChecklist: ["Bilingual PRC-Law NNN Agreement", "Tooling Ownership & Bailment Contract", "CNIPA Design Patent Filing", "Mold Payment Bank Slips"],
        keyTermsZhEn: ["模具所有权 / Tooling Ownership", "NNN保密协议 / NNN Agreement", "外观设计专利 / Design Patent"],
        replyFactoryZh: "该套注塑模具系我司全额出资定制，请依据付款凭证与图纸归属约定于十日内配合办理模具移交，避免进入知识产权仲裁。",
        replyEuBossEn: "We documented tooling payments, initiated CNIPA design registration, and issued a formal PRC legal notice to recover our molds.",
        financialImpactRangeEur: "EUR 25,000 – 90,000 (chi phí làm lại khuôn mới + tổn thất mất thị phần hàng nhái)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Đã có hợp đồng sở hữu khuôn bằng tiếng Trung đóng dấu công ty (公章) của nhà máy chưa?", yesBranchVi: "Yêu cầu bàn giao theo điều khoản phạt vi phạm đã ký", noBranchVi: "Tập hợp toàn bộ email, bản vẽ CAD và chứng từ chuyển tiền mở khuôn" },
          { stepOrder: 2, qVi: "Sản phẩm đã đăng ký bảo hộ kiểu dáng/nhãn hiệu tại Trung Quốc (CNIPA) chưa?", yesBranchVi: "Yêu cầu gỡ bỏ sản phẩm nhái trên 1688/Taobao và phong tỏa hải quan", noBranchVi: "Đăng ký bảo hộ ngay để chặn nhà máy đăng ký ngược (trademark squatting)" },
          { stepOrder: 3, qVi: "Chi phí pháp lý thu hồi khuôn có thấp hơn chi phí chế tạo khuôn mới tại xưởng mới không?", yesBranchVi: "Tiến hành thương lượng có luật sư địa phương hỗ trợ", noBranchVi: "Mở khuôn mới kèm hợp đồng NNN chặt chẽ và lưu mã khắc tài sản lên thép khuôn" }
        ]
      },
      {
        id: "v6-sc-33", lane: "CN-EU Air/Sea", titleVi: "Pin Lithium Không Có Chứng Nhận UN38.3 & MSDS Bị Cấm Xếp Hàng", titleEn: "Lithium-Ion Battery Shipment Rejected for Missing UN38.3 & DGD",
        scenarioZh: "深圳出口至法兰克福的一批便携储能设备因未随附最新版UN38.3测试摘要与海空运危险品声明（DGD），在安检口被直接扣留。",
        riskIdentifiedEn: "Undeclared Class 9 dangerous goods trigger airline/carrier rejection and severe regulatory fines.",
        actionPlanVi: "Lấy ngay báo cáo kiểm thử UN38.3, chứng nhận rơi 1.2m, bảng MSDS 16 mục cập nhật và đóng gói lại theo chuẩn IATA PI 965/966 hoặc IMDG Code.",
        incotermsAndLiabilityVi: "EXW/FOB: người gửi hàng chịu trách nhiệm pháp lý tuyệt đối nếu khai báo sai hàng nguy hiểm (Misdeclared Dangerous Goods).",
        incotermsAndLiabilityEn: "Shipper carries strict legal and financial liability for undeclared or misdeclared Class 9 lithium cargo.",
        documentChecklist: ["UN38.3 Test Summary", "Updated 16-Section MSDS/SDS", "Shipper's Declaration for Dangerous Goods (DGD)", "UN-Certified Packaging Certificate"],
        keyTermsZhEn: ["危险品申报 / DG Declaration", "UN38.3测试摘要 / UN38.3 Summary", "第九类危险品 / Class 9 DG"],
        replyFactoryZh: "请务必于今日提供最新版UN38.3测试报告摘要、1.2米跌落报告及规范MSDS，严禁按普货隐瞒申报锂电池。",
        replyEuBossEn: "We halted non-compliant cargo before screening, secured complete UN38.3/MSDS dossiers, and re-booked under proper Class 9 DG protocols.",
        financialImpactRangeEur: "EUR 10,000 – 40,000 (tiền phạt khai sai hàng nguy hiểm + phí lưu kho sân bay)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Công suất pin vượt 100Wh hay nằm trong thiết bị (PI 966/967)?", yesBranchVi: "Bắt buộc khai báo hàng nguy hiểm Class 9 đầy đủ (Full DG)", noBranchVi: "Kiểm tra điều kiện miễn giảm giới hạn và dán nhãn pin Lithium" },
          { stepOrder: 2, qVi: "Nhà sản xuất pin có cung cấp bản tóm tắt UN38.3 hợp lệ không?", yesBranchVi: "Nộp hồ sơ cho hãng bay/tàu duyệt trước khi đưa hàng ra cảng", noBranchVi: "Chuyển mẫu đi kiểm thử phòng lab đạt chuẩn trước khi xuất" },
          { stepOrder: 3, qVi: "Thùng đóng gói đã đạt chứng nhận UN và dán đủ nhãn cảnh báo chưa?", yesBranchVi: "Xếp hàng đúng quy chuẩn an toàn", noBranchVi: "Đóng gói lại bằng thùng chuẩn UN tại kho chuyên dụng DG" }
        ]
      },
      {
        id: "v6-sc-34", lane: "VN-EU EVFTA", titleVi: "Hải Quan EU Hậu Kiểm Bác C/O EUR.1 Hàng Dệt May Do Dùng Vải Ngoài Khối", titleEn: "EU Post-Clearance Audit Challenging EVFTA Textile Fabric-Forward Origin",
        scenarioZh: "德国海关对两年前享受EVFTA零关税的越南成衣开展事后原产地核查，发现部分订单使用了非累积来源的进口面料。",
        riskIdentifiedEn: "Non-originating fabric breaches EVFTA fabric-forward rule, triggering 12% retroactive MFN duty clawback.",
        actionPlanVi: "Rà soát toàn bộ bảng định mức BOM, hóa đơn mua vải Việt Nam/Hàn Quốc (cộng gộp), giải trình tách riêng các lô đạt chuẩn và chuyển nguồn vải đạt quy tắc cho đơn mới.",
        incotermsAndLiabilityVi: "FOB/CIF: nếu nhà xuất khẩu cung cấp hồ sơ xuất xứ không trung thực dẫn đến bác C/O, người nhập khẩu có quyền khởi kiện đòi bồi hoàn tiền thuế bị truy thu.",
        incotermsAndLiabilityEn: "Importer hit with retroactive 12% duty clawback may claim indemnity from exporter under origin warranty clauses.",
        documentChecklist: ["Fabric Mill Certificates (VN/EU/KR)", "Garment BOM & Cutting Records", "EUR.1 Historical Archive", "Korea-EU Cumulation Declaration"],
        keyTermsZhEn: ["事后核查 / Post-Clearance Audit", "从布料开始 / Fabric-Forward Rule", "双边累积 / Bilateral Cumulation"],
        replyFactoryZh: "出口欧盟订单须严格执行从布料开始原产地规则，请确认面料来源为越南本土、欧盟或适用累积条款的韩国织造厂。",
        replyEuBossEn: "We compiled complete mill certificates and BOM trails for EU customs verification and transitioned future POs exclusively to compliant mills.",
        financialImpactRangeEur: "EUR 30,000 – 120,000 (truy thu 12% thuế MFN cho các lô hàng đã thông quan)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Vải may thành phẩm được dệt tại Việt Nam, EU hay Hàn Quốc (có chứng từ cộng gộp)?", yesBranchVi: "Nộp trọn bộ hồ sơ chứng minh nguồn vải giải trình hải quan EU", noBranchVi: "Đánh giá quy mô lô không đạt chuẩn và lập quỹ dự phòng thuế" },
          { stepOrder: 2, qVi: "Nhà máy có lưu đủ hóa đơn, phiếu xuất kho và định mức cắt may trong 5 năm không?", yesBranchVi: "Đóng gói hồ sơ đối chứng gửi cơ quan cấp C/O phản hồi EU", noBranchVi: "Thu thập xác nhận bổ sung từ nhà cung cấp vải ngay lập tức" },
          { stepOrder: 3, qVi: "Đơn hàng tương lai đã tách luồng vải đạt EVFTA chưa?", yesBranchVi: "Duy trì kiểm tra xuất xứ vải trước khi cắt may", noBranchVi: "Tái cấu trúc danh sách nhà cung cấp vải đạt quy tắc xuất xứ" }
        ]
      },
      {
        id: "v6-sc-35", lane: "CN-VN ACFTA", titleVi: "C/O Form E Hóa Đơn Bên Thứ Ba (Hồng Kông) Bị Hải Quan Việt Nam Bác Ưu Đãi", titleEn: "ACFTA Form E Rejected Over Unchecked Third-Party Invoicing Box",
        scenarioZh: "中国工厂发货至海防港，但商业发票由香港贸易公司开具，FORM E第13栏漏勾第三方发票且第7栏未注明香港公司名称，导致无法享受0%关税。",
        riskIdentifiedEn: "Missing TPI tick and Box 7 company disclosure forfeits 0% ACFTA duty, imposing 10–15% MFN tariff.",
        actionPlanVi: "Tạm nộp thuế theo mức MFN để giải phóng hàng tránh lưu bãi, đồng thời yêu cầu phía Trung Quốc cấp lại C/O Form E bản sửa lỗi (hoặc chứng nhận lại) trong thời hạn cho phép để xin hoàn thuế.",
        incotermsAndLiabilityVi: "CIF Hải Phòng: lỗi lập C/O thuộc bên xuất khẩu; bên bán phải chịu chi phí làm lại C/O và bồi hoàn chênh lệch thuế nếu quá hạn bổ sung.",
        incotermsAndLiabilityEn: "Exporter bears re-issuance costs and tariff differential if defective Form E cannot be rectified in time.",
        documentChecklist: ["Original Defective Form E", "Third-Party Hong Kong Invoice", "Amended / Re-Issued Form E", "Customs Guarantee / Refund Filing"],
        keyTermsZhEn: ["第三方发票 / Third-Party Invoicing", "退税申请 / Duty Refund Claim", "原产地重签 / C/O Re-Issuance"],
        replyFactoryZh: "因发票由香港公司开具而FORM E漏勾第13栏，请立即向贸促会申请更正重签，并在第7栏准确标注香港开票方全称与地区。",
        replyEuBossEn: "We cleared cargo on deposit to stop port storage charges and arranged an amended Form E with proper Box 13/Box 7 TPI details for duty refund.",
        financialImpactRangeEur: "EUR 5,000 – 24,000 (chênh lệch thuế MFN 10–15% nếu không kịp bổ sung C/O hợp lệ)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Hải quan cho phép nợ C/O bổ sung trong 30 ngày hay phải tạm nộp thuế MFN?", yesBranchVi: "Làm thủ tục tạm nộp/bảo lãnh giải phóng hàng ngay cắt phí DEM", noBranchVi: "Chờ bản sửa C/O nếu thời gian cấp lại dưới 3 ngày và hàng chưa quá hạn miễn bãi" },
          { stepOrder: 2, qVi: "Bản C/O sửa lại đã tick ô 13, ghi tên công ty Hồng Kông ở ô 7 và số hóa đơn Hồng Kông ở ô 10 chưa?", yesBranchVi: "Kiểm tra draft kỹ rồi mới in bản gốc ký đóng dấu", noBranchVi: "Yêu cầu sửa lại toàn bộ 3 trường đồng bộ" },
          { stepOrder: 3, qVi: "Đã nộp hồ sơ hoàn thuế trong thời hiệu quy định chưa?", yesBranchVi: "Theo dõi hoàn tiền thuế về tài khoản doanh nghiệp", noBranchVi: "Khẩn trương hoàn thiện hồ sơ trước ngày hết hạn" }
        ]
      },
      {
        id: "v6-sc-36", lane: "CN-EU Rail", titleVi: "Tàu Đường Sắt Trung–Âu Bị Kẹt 12 Ngày Tại Bãi Đổi Khổ Ray Malaszewicze", titleEn: "CR Express Wagons Congested 12 Days at Brest–Malaszewicze Gauge Hub",
        scenarioZh: "旺季中欧班列在白俄罗斯布列斯特与波兰马拉舍维奇换装场积压严重，叠加单证NHM编码缺失导致整柜滞留12天。",
        riskIdentifiedEn: "Border gauge congestion plus missing NHM code stalls train transit and triggers European delivery penalties.",
        actionPlanVi: "Bổ sung ngay mã NHM chuẩn qua đại lý đường sắt tại Ba Lan, đồng thời phân luồng các chuyến tuần sau qua hành lang dự phòng đường sắt biển kết hợp hoặc ga cửa khẩu khác.",
        incotermsAndLiabilityVi: "DAP Duisburg: bên bán chịu chi phí lưu toa nếu lỗi xuất phát từ thiếu mã chứng từ SMGS/NHM.",
        incotermsAndLiabilityEn: "Under DAP Duisburg, seller absorbs wagon detention caused by incomplete SMGS/NHM documentation.",
        documentChecklist: ["SMGS Duplicate Sheet 4", "EU NHM Tariff Classification Sheet", "T1 Transit Bond Reference", "Carrier Congestion Bulletin"],
        keyTermsZhEn: ["换装场拥堵 / Gauge Hub Congestion", "欧洲铁路编码 / NHM Code", "T1过境保函 / T1 Transit Bond"],
        replyFactoryZh: "马拉舍维奇换装场目前拥堵且缺少NHM编码，请立即补充精确8位HS与NHM对照表以便波兰代理办理T1过境放行。",
        replyEuBossEn: "We supplied missing NHM rail codes to clear T1 transit at Malaszewicze and diversified next week's dispatches to avoid the bottleneck.",
        financialImpactRangeEur: "EUR 3,500 – 14,000 (phí lưu container/toa tàu + xe tải giao gấp từ Duisburg)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Nguyên nhân tắc do hạ tầng biên giới hay do thiếu dữ liệu chứng từ SMGS/NHM?", yesBranchVi: "Bổ sung mã NHM và hóa đơn T1 trong 12 giờ cho đại lý Ba Lan", noBranchVi: "Theo dõi hàng đợi chuyển tải hàng ngày từ nhà điều hành tuyến" },
          { stepOrder: 2, qVi: "Hàng có cần chuyển xe tải nhanh (FTL) ngay khi ra khỏi ga Malaszewicze không?", yesBranchVi: "Đặt xe tải thẳng tới kho khách rút ngắn 3 ngày nội địa EU", noBranchVi: "Tiếp tục hành trình đường sắt tới Duisburg/Hamburg" },
          { stepOrder: 3, qVi: "Lô kế tiếp nên chuyển sang tuyến biển nhanh hay giữ đường sắt?", yesBranchVi: "So sánh thời gian thực tế và cước tổng trước khi chốt booking", noBranchVi: "Giữ tàu sắt nhưng khóa bộ chứng từ chuẩn hóa 72 giờ trước giờ chạy" }
        ]
      },
      {
        id: "v6-sc-37", lane: "CN-EU Compliance", titleVi: "Lô Hàng Đồ Gia Dụng Bị Thu Hồi Tại EU Do Vượt Ngưỡng Hóa Chất REACH / RoHS", titleEn: "Consumer Goods Recalled in EU Over REACH Phthalate & RoHS Lead Excess",
        scenarioZh: "出口欧洲的一批塑料外壳小家电在欧盟市场抽检中被检出邻苯二甲酸盐（REACH SVHC）与焊锡铅含量超标，登上Safety Gate预警通报。",
        riskIdentifiedEn: "REACH/RoHS chemical non-compliance triggers mandatory EU market withdrawal and Safety Gate alert.",
        actionPlanVi: "Thu hồi ngay lô hàng liên quan, điều tra nhà cung cấp hạt nhựa tái chế cấp 2, yêu cầu thử nghiệm phòng lab độc lập (SGS/TUV) trước xuất xưởng cho mọi lô kế tiếp.",
        incotermsAndLiabilityVi: "Hợp đồng cung ứng EU quy định trách nhiệm thu hồi sản phẩm (Product Recall Liability) thuộc nhà sản xuất khi vi phạm tiêu chuẩn an toàn hóa chất.",
        incotermsAndLiabilityEn: "Chemical safety non-compliance triggers full vendor recall indemnity under EU product liability contracts.",
        documentChecklist: ["EU Safety Gate Notification", "SGS/TUV REACH & RoHS Test Report", "Raw Resin Supplier CoA", "Lot Recall Traceability Log"],
        keyTermsZhEn: ["化学品合规 / REACH Compliance", "有害物质限制 / RoHS Directive", "市场召回 / Market Recall"],
        replyFactoryZh: "欧洲抽检显示塑壳邻苯与焊点铅超标，请立即追查二级塑料粒与焊锡供应商，严禁混用未检测回收料并重新送检TUV。",
        replyEuBossEn: "We traced the violation to an unauthorized tier-2 resin swap, initiated containment, and mandated pre-shipment SGS REACH/RoHS testing per lot.",
        financialImpactRangeEur: "EUR 40,000 – 150,000 (chi phí thu hồi, tiêu hủy và mất uy tín hệ thống bán lẻ EU)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Đã xác định chính xác số lô sản xuất (Lot Number) bị ảnh hưởng chưa?", yesBranchVi: "Khoanh vùng thu hồi đúng phạm vi lô lỗi, không kéo lan các lô đạt chuẩn", noBranchVi: "Tạm dừng phân phối toàn bộ SKU liên quan để xét nghiệm sàng lọc" },
          { stepOrder: 2, qVi: "Sai phạm xuất phát từ việc nhà máy tự ý đổi nhà cung cấp nguyên liệu cấp 2?", yesBranchVi: "Áp dụng chế tài phạt hợp đồng và khóa danh sách nhà cung cấp được duyệt (AVL)", noBranchVi: "Hiệu chuẩn lại quy trình sản xuất và vệ sinh dây chuyền tránh nhiễm chéo" },
          { stepOrder: 3, qVi: "Đã có báo cáo kiểm nghiệm REACH/RoHS độc lập cho lô thay thế chưa?", yesBranchVi: "Nộp báo cáo khắc phục cho đối tác nhập khẩu EU", noBranchVi: "Chờ kết quả phòng lab đạt 100% mới cho phép xuất xưởng" }
        ]
      },
      {
        id: "v6-sc-38", lane: "CN-VN-EU Security", titleVi: "Lệnh Cấm Xếp Hàng (Do Not Load) Trên Hệ Thống EU ICS2 Do Mô Tả Hàng Mơ Hồ", titleEn: "EU ICS2 Do-Not-Load Hold Caused by Vague Cargo Description",
        scenarioZh: "货代在提交欧盟ICS2入境摘要申报时将品名笼统填报为“机械配件”且漏填收货人EORI号，系统在装船前18小时下达禁止装船指令。",
        riskIdentifiedEn: "ICS2 automated rejection stops container loading, risking vessel rollover and storage fees.",
        actionPlanVi: "Trong vòng 4 giờ gửi ngay bổ sung thông tin (RFI Response) ghi rõ từng mã HS 6 số, tên chi tiết cấu kiện và mã EORI hợp lệ của người nhập khẩu để gỡ lệnh DNL.",
        incotermsAndLiabilityVi: "FOB/CIF: bên cung cấp Shipping Instruction sai (xuất khẩu hoặc forwarder) chịu phí chỉnh sửa khai báo và phí rớt tàu nếu trễ giờ cắt máng.",
        incotermsAndLiabilityEn: "Party submitting inaccurate SI data absorbs amendment fees and rollover storage charges.",
        documentChecklist: ["ICS2 RFI / DNL Alert", "Detailed 6-Digit HS Itemized List", "Verified EU EORI Confirmation", "Amended ENS Filing Receipt (MRN)"],
        keyTermsZhEn: ["禁止装船令 / Do Not Load", "补件指令 / Request for Information", "模糊品名 / Vague Description"],
        replyFactoryZh: "欧盟ICS2拒收“机械配件”笼统品名，请两小时内提供每一项零件的具体英文名称、材质及对应6位HS编码。",
        replyEuBossEn: "We resolved the ICS2 RFI by filing itemized 6-digit HS descriptions and verified EORI details, securing MRN clearance before vessel cutoff.",
        financialImpactRangeEur: "EUR 1,200 – 8,500 (phí chỉnh sửa ENS + phí lưu container nếu bị rớt tàu)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Còn bao nhiêu giờ trước giờ tàu đóng cửa xếp hàng (Vessel Cutoff)?", yesBranchVi: "Nộp bản sửa ENS khẩn ngay để kịp nhận MRN trước cutoff", noBranchVi: "Thông báo hãng tàu giữ chỗ chuyến kế tiếp ngay lập tức" },
          { stepOrder: 2, qVi: "Mọi dòng hàng đã có mô tả cụ thể + mã HS 6 số + mã EORI hợp lệ chưa?", yesBranchVi: "Chuyển dữ liệu chuẩn hóa cho bộ phận khai báo ICS2", noBranchVi: "Rà soát lại hóa đơn thương mại và xác nhận EORI với người mua" },
          { stepOrder: 3, qVi: "Hệ thống EU đã trả về mã MRN trạng thái 'Assessment Complete' chưa?", yesBranchVi: "Xác nhận hãng tàu đưa container vào danh sách xếp tàu", noBranchVi: "Theo dõi phản hồi trực tuyến từng giờ cho đến khi thông qua" }
        ]
      },
      {
        id: "v6-sc-39", lane: "CN-VN-EU Fraud Prevention", titleVi: "Lừa Đảo Giả Mạo Email Thay Đổi Tài Khoản Ngân Hàng (BEC) Khi Thanh Toán T/T", titleEn: "Business Email Compromise (BEC) Fraud Altering T/T Bank Coordinates",
        scenarioZh: "黑客入侵外贸业务员邮箱，在尾款电汇前夕以极其相似的域名发送“银行账户变更通知”，诱导欧洲买方将85,000欧元汇入境外陌生账户。",
        riskIdentifiedEn: "BEC wire-transfer diversion risks irreversible loss of EUR 85,000 balance payment.",
        actionPlanVi: "Tạm dừng chuyển tiền lập tức khi phát hiện thay đổi tài khoản, xác thực bằng cuộc gọi video/điện thoại số cố định đã đăng ký từ đầu hợp đồng và áp dụng xác thực 2 lớp (2FA).",
        incotermsAndLiabilityVi: "Rủi ro tài chính cực lớn: nếu tiền đã chuyển nhầm do không xác minh, tranh chấp trách nhiệm giữa người mua và người bán rất khó thu hồi.",
        incotermsAndLiabilityEn: "Wire funds diverted via spoofed email are rarely recoverable; dual-channel voice verification is mandatory.",
        documentChecklist: ["Original Signed Contract Bank Details", "Official Bank Account Certificate", "Voice/Video Verification Log", "IT Email Security Audit"],
        keyTermsZhEn: ["商业邮件诈骗 / BEC Fraud", "账户变更核验 / Bank Change Callback", "银行回执 / SWIFT MT103"],
        replyFactoryZh: "严正声明：我司收款银行账户从未变更！任何通过邮件通知更改账户的信息均属诈骗，请务必先电话视频核实。",
        replyEuBossEn: "Alert: A spoofed domain attempted to alter our bank details. Our contract IBAN/SWIFT is unchanged—please hold payment until our video callback.",
        financialImpactRangeEur: "EUR 50,000 – 150,000 (nguy cơ mất trắng toàn bộ khoản thanh toán T/T)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Email thông báo đổi tài khoản có khớp tên miền gốc từng ký tự không?", yesBranchVi: "Vẫn bắt buộc gọi xác thực trực tiếp qua kênh độc lập (không gọi số trong email mới)", noBranchVi: "Xác định ngay là giả mạo, báo động IT và đối tác lập tức" },
          { stepOrder: 2, qVi: "Lệnh chuyển tiền SWIFT đã được ngân hàng thực thi chưa?", yesBranchVi: "Gửi lệnh thu hồi khẩn (SWIFT Recall) và trình báo cơ quan chức năng trong vòng 2 giờ", noBranchVi: "Khóa lệnh chuyển tiền ngay tại bộ phận tài chính" },
          { stepOrder: 3, qVi: "Cả hai bên đã bật xác thực 2 lớp (2FA) và ký phụ lục tài khoản cố định chưa?", yesBranchVi: "Khôi phục quy trình thanh toán an toàn", noBranchVi: "Bắt buộc đổi mật khẩu, bật 2FA và quy ước mã xác nhận bằng lời" }
        ]
      },
      {
        id: "v6-sc-40", lane: "CN-VN-EU Packaging", titleVi: "Pallet Gỗ Thiếu Dấu IPPC ISPM-15 Bị Hải Quan Úc & EU Buộc Tái Xuất", titleEn: "Solid Wood Pallets Lacking Physical IPPC Stamp Rejected at Destination",
        scenarioZh: "尽管出口商随货提供了熏蒸证书，但目的港检疫官开箱查验发现木托盘实体未烙印IPPC麦穗标识且残留树皮，下令整柜退运或高价销毁重装。",
        riskIdentifiedEn: "Missing physical IPPC mark and residual bark trigger quarantine detention and mandatory re-export.",
        actionPlanVi: "Thuê đơn vị kiểm dịch tại cảng đích chuyển hàng sang pallet nhựa/ván ép (re-palletizing) và tiêu hủy pallet gỗ lỗi theo giám sát hải quan; chuyển toàn bộ đơn sau sang pallet nhựa/ván ép.",
        incotermsAndLiabilityVi: "FOB/CIF: cung cấp bao bì gỗ không đạt chuẩn kiểm dịch là lỗi của người bán, người bán phải bồi hoàn toàn bộ chi phí chuyển pallet và lưu bãi.",
        incotermsAndLiabilityEn: "Non-compliant export timber packaging is seller's fault, making seller liable for re-palletizing and quarantine fees.",
        documentChecklist: ["Quarantine Detention Notice", "ISPM-15 Compliance Inspection Photos", "Destination Re-Palletizing Invoice", "Plywood/Plastic Pallet Spec Sheet"],
        keyTermsZhEn: ["麦穗标识 / IPPC Stamp", "换托盘作业 / Re-Palletizing", "免熏蒸托盘 / Fumigation-Free Pallet"],
        replyFactoryZh: "目的港查验发现木托盘无IPPC烙印且带树皮导致扣柜，请后续所有出口订单一律改用免熏蒸胶合板或塑料托盘。",
        replyEuBossEn: "We authorized supervised re-palletizing onto clean plastic pallets at port to release cargo quickly and switched all future POs to non-wood pallets.",
        financialImpactRangeEur: "EUR 4,000 – 16,000 (phí tiêu hủy gỗ + phí sang hàng pallet mới + lưu container)",
        decisionTreeSteps: [
          { stepOrder: 1, qVi: "Cơ quan kiểm dịch cảng đích có cho phép sang pallet mới (re-palletizing) tại kho cách ly không?", yesBranchVi: "Thực hiện sang pallet nhựa và tiêu hủy pallet gỗ lỗi để giải phóng hàng", noBranchVi: "Bắt buộc làm thủ tục tái xuất container về cảng đi" },
          { stepOrder: 2, qVi: "Hàng hóa bên trong thùng carton có bị sâu mọt từ gỗ pallet xâm nhập không?", yesBranchVi: "Tiến hành hun trùng kiểm dịch toàn bộ hàng hóa theo chỉ định", noBranchVi: "Thông quan hàng ngay sau khi hoàn tất thay pallet" },
          { stepOrder: 3, qVi: "Đã cập nhật quy cách đóng gói bắt buộc dùng pallet nhựa/ván ép cho hợp đồng sau chưa?", yesBranchVi: "Đưa vào checklist chụp ảnh giám sát đóng container", noBranchVi: "Sửa ngay phụ lục đóng gói của hợp đồng khung" }
        ]
      }
    ],
    b2bTerms150: (function () {
      var raw = [
        ["Letter of Credit (L/C)","信用证","xìnyòngzhèng","Tín dụng chứng","Thư tín dụng","UCP600"],
        ["Strict Compliance","严格相符原则","yángé xiāngfú yuánzé","Nghiêm cách tương phù","Nguyên tắc phù hợp nghiêm ngặt","UCP600"],
        ["Discrepancy","不符点","bùfúdiǎn","Bất phù điểm","Sai biệt chứng từ L/C","UCP600"],
        ["Issuing Bank","开证行","kāizhèngháng","Khai chứng hành","Ngân hàng phát hành","UCP600"],
        ["Advising Bank","通知行","tōngzhīháng","Thông tri hành","Ngân hàng thông báo","UCP600"],
        ["Confirming Bank","保兑行","bǎoduìháng","Bảo đoái hành","Ngân hàng xác nhận","UCP600"],
        ["Negotiating Bank","议付行","yìfùháng","Nghị phó hành","Ngân hàng chiết khấu","UCP600"],
        ["Beneficiary","受益人","shòuyìrén","Thụ ích nhân","Người thụ hưởng (Bên bán)","UCP600"],
        ["Applicant","开证申请人","kāizhèng shēnqǐngrén","Khai chứng thân thỉnh nhân","Người yêu cầu mở L/C (Bên mua)","UCP600"],
        ["Sight L/C","即期信用证","jíqī xìnyòngzhèng","Tức kỳ tín dụng chứng","L/C trả ngay","UCP600"],
        ["Usance L/C","远期信用证","yuǎnqī xìnyòngzhèng","Viễn kỳ tín dụng chứng","L/C trả chậm","UCP600"],
        ["Transferable L/C","可转让信用证","kězhuǎnràng xìnyòngzhèng","Khả chuyển nhượng tín dụng chứng","L/C chuyển nhượng được","UCP600"],
        ["Back-to-Back L/C","背对背信用证","bèiduìbèi xìnyòngzhèng","Bối đối bối tín dụng chứng","L/C giáp lưng","UCP600"],
        ["Standby L/C (SBLC)","备用信用证","bèiyòng xìnyòngzhèng","Bị dụng tín dụng chứng","L/C dự phòng bảo lãnh","UCP600"],
        ["Presentation Period","交单期限","jiāodān qīxiàn","Giao đơn kỳ hạn","Thời hạn xuất trình chứng từ","UCP600"],
        ["Latest Shipment Date","最迟装运期","zuìchí zhuāngyùnqī","Tối trì trang vận kỳ","Ngày giao hàng muộn nhất","UCP600"],
        ["Soft Clause","软条款","ruǎntiáokuǎn","Nhuyễn điều khoản","Điều khoản mềm bất lợi","UCP600"],
        ["Clean Bill of Lading","清洁提单","qīngjié tídān","Thanh khiết đề đơn","Vận đơn sạch không ghi chú lỗi","UCP600"],
        ["Stale Bill of Lading","过期提单","guòqī tídān","Quá kỳ đề đơn","Vận đơn quá hạn xuất trình","UCP600"],
        ["Documents Against Payment (D/P)","付款交单","fùkuǎn jiāodān","Phó khoản giao đơn","Nhờ thu trả tiền trao chứng từ","UCP600"],
        ["Documents Against Acceptance (D/A)","承兑交单","chéngduì jiāodān","Thừa đoái giao đơn","Nhờ thu chấp nhận hối phiếu","UCP600"],
        ["Telegraphic Transfer (T/T)","电汇","diànhuì","Điện hối","Chuyển tiền bằng điện","UCP600"],
        ["Bill of Exchange / Draft","汇票","huìpiào","Hối phiếu","Hối phiếu đòi nợ","UCP600"],
        ["SWIFT MT700","信用证开证报文","xìnyòngzhèng kāizhèng bàowén","Khai chứng báo văn","Điện phát hành L/C chuẩn SWIFT","UCP600"],
        ["SWIFT MT103","电汇付款水单","diànhuì fùkuǎn shuǐdān","Điện hối thủy đơn","Điện xác nhận chuyển tiền T/T","UCP600"],
        ["Ex Works (EXW)","工厂交货","gōngchǎng jiāohuò","Công xưởng giao hóa","Giao hàng tại xưởng","Incoterms"],
        ["Free Carrier (FCA)","货交承运人","huòjiāo chéngyùnrén","Hóa giao thừa vận nhân","Giao cho người chuyên chở","Incoterms"],
        ["Free Alongside Ship (FAS)","船边交货","chuánbiān jiāohuò","Thuyền biên giao hóa","Giao dọc mạn tàu","Incoterms"],
        ["Free On Board (FOB)","装运港船上交货","zhuāngyùngǎng chuánshàng jiāohuò","Trang vận cảng thuyền thượng","Giao lên tàu tại cảng đi","Incoterms"],
        ["Cost and Freight (CFR)","成本加运费","chéngběn jiā yùnfèi","Thành bản gia vận phí","Tiền hàng và cước phí","Incoterms"],
        ["Cost Insurance and Freight (CIF)","成本保险费加运费","chéngběn bǎoxiǎnfèi jiā yùnfèi","Thành bản bảo hiểm vận phí","Tiền hàng, bảo hiểm ICC(C) và cước","Incoterms"],
        ["Carriage Paid To (CPT)","运费付至","yùnfèi fùzhì","Vận phí phó chí","Cước phí trả tới điểm đích","Incoterms"],
        ["Carriage and Insurance Paid To (CIP)","运费和保险费付至","yùnfèi hé bǎoxiǎnfèi fùzhì","Vận phí bảo hiểm phó chí","Cước và bảo hiểm ICC(A) 110% trả tới","Incoterms"],
        ["Delivered at Place (DAP)","目的地交货","mùdìdì jiāohuò","Mục đích địa giao hóa","Giao tại địa điểm đến (chưa dỡ)","Incoterms"],
        ["Delivered at Place Unloaded (DPU)","卸货地交货","xièhuòdì jiāohuò","Tá hóa địa giao hóa","Giao tại địa điểm đã dỡ hàng","Incoterms"],
        ["Delivered Duty Paid (DDP)","完税后交货","wánshuìhòu jiāohuò","Hoàn thuế hậu giao hóa","Giao đã thông quan nộp thuế nhập","Incoterms"],
        ["Institute Cargo Clauses (A)","协会货物一切险","xiéhuì huòwù yīqièxiǎn","Nhất thiết hiểm","Điều khoản bảo hiểm mọi rủi ro","Incoterms"],
        ["Institute Cargo Clauses (C)","协会货物基本险","xiéhuì huòwù jīběnxiǎn","Cơ bản hiểm","Điều khoản bảo hiểm mức tối thiểu","Incoterms"],
        ["General Average","共同海损","gòngtóng hǎisǔn","Cộng đồng hải tổn","Tổn thất chung hàng hải","Incoterms"],
        ["Force Majeure","不可抗力","bùkěkànglì","Bất khả kháng lực","Sự kiện bất khả kháng","Incoterms"],
        ["CBAM Embedded Emissions","碳边境隐含排放","tànbiānjìng yǐnhán páifàng","Ẩn hàm bài phóng","Phát thải carbon hàm chứa CBAM","CBAM"],
        ["CBAM Certificate","CBAM碳凭证","CBAM tànpíngzhèng","Thán bằng chứng","Chứng chỉ carbon CBAM","CBAM"],
        ["Scope 1 Direct Emissions","范围一直接排放","fànwéiyī zhíjiē páifàng","Phạm vi nhất trực tiếp","Phát thải trực tiếp tại nhà máy","CBAM"],
        ["Scope 2 Indirect Emissions","范围二外购电力排放","fànwéi'èr wàigòu diànlì páifàng","Phạm vi nhị gián tiếp","Phát thải gián tiếp từ điện tiêu thụ","CBAM"],
        ["Scope 3 Value Chain Emissions","范围三价值链排放","fànwéisān jiàzhíliàn páifàng","Phạm vi tam giá trị liên","Phát thải toàn chuỗi cung ứng","CBAM"],
        ["Precursor Material","前驱体原料","qiánqūtǐ yuánliào","Tiền khu thể nguyên liệu","Vật liệu đầu vào hàm chứa carbon","CBAM"],
        ["Authorized CBAM Declarant","授权CBAM申报人","shòuquán CBAM shēnbàorén","Thụ quyền thân báo nhân","Người khai báo CBAM được ủy quyền tại EU","CBAM"],
        ["Default Emission Value","默认排放值","mòrèn páifàngzhí","Mặc nhận bài phóng trị","Giá trị phát thải mặc định phạt cao","CBAM"],
        ["Accredited Verifier (ISO 14065)","认可第三方核查机构","rènkě dìsānfāng héchá jīgòu","Đệ tam phương hạch tra","Tổ chức thẩm định khí thải được công nhận","CBAM"],
        ["EU Emissions Trading System (EU ETS)","欧盟碳排放交易体系","Ōuméng tànpáifàng jiāoyì tǐxì","Âu Minh thán giao dịch","Hệ thống giao dịch khí thải EU","CBAM"],
        ["Power Purchase Agreement (PPA)","绿色电力直购协议","lǜsè diànlì zhígòu xiéyì","Lục sắc điện lực hiệp nghị","Hợp đồng mua bán điện tái tạo trực tiếp","CBAM"],
        ["Electric Arc Furnace (EAF)","电弧炉短流程冶炼","diànhúlú duǎnliúchéng yěliàn","Điện hồ lô luyện kim","Luyện thép lò hồ quang điện phát thải thấp","CBAM"],
        ["Blast Furnace (BF-BOF)","高炉长流程冶炼","gāolú chángliúchéng yěliàn","Cao lô luyện kim","Luyện thép lò cao truyền thống dùng than cốc","CBAM"],
        ["Carbon Leakage","碳泄漏","tànxièlòu","Thán tiết lậu","Rò rỉ phát thải carbon xuyên biên giới","CBAM"],
        ["Product Carbon Footprint (PCF)","产品碳足迹","chǎnpǐn tànzújì","Sản phẩm thán túc tích","Dấu chân carbon theo đơn vị sản phẩm","CBAM"],
        ["EU Deforestation Regulation (EUDR)","欧盟零毁林法案","Ōuméng línghuǐlín fǎ'àn","Âu Minh linh hủy lâm","Quy định chống phá rừng của EU","EUDR"],
        ["Due Diligence Statement (DDS)","尽职调查声明","jìnzhí diàochá shēngmíng","Tận chức điều tra thanh minh","Tuyên bố thẩm định chuỗi cung ứng EUDR","EUDR"],
        ["WGS84 Geolocation Polygon","WGS84地块多边形坐标","WGS84 dìkuài duōbiānxíng","Đa biên hình tọa độ","Tọa độ đa giác thửa đất chuẩn WGS84","EUDR"],
        ["Deforestation Cutoff Date","零毁林基准截止日","línghuǐlín jīzhǔn jiézhǐrì","Linh hủy lâm tiệt chỉ nhật","Mốc thời gian cắt ngưỡng 31/12/2020","EUDR"],
        ["Physical Segregation","物理隔离仓储","wùlǐ gélí cāngchǔ","Vật lý cách ly","Tách kho riêng không trộn lô","EUDR"],
        ["EU TRACES NT System","欧盟TRACES追溯系统","Ōuméng TRACES zhuīsù xìtǒng","Truy tố hệ thống","Cổng khai báo kiểm dịch và DDS của EU","EUDR"],
        ["GeoJSON File Format","地理空间矢量格式","dìlǐ kōngjiān shǐliàng géshì","Địa lý không gian cách thức","Định dạng tệp bản đồ tọa độ GeoJSON","EUDR"],
        ["Smallholder Traceability","小农地块溯源","xiǎonóng dìkuài sùyuán","Tiểu nông địa khối tố nguyên","Truy xuất nguồn gốc từng hộ tiểu nông","EUDR"],
        ["Import Control System 2 (ICS2)","欧盟进口控制系统二期","Ōuméng jìnkǒu kòngzhì xìtǒng","Nhập khẩu khống chế hệ thống","Hệ thống kiểm soát an ninh nhập khẩu EU","ICS2"],
        ["Entry Summary Declaration (ENS)","入境摘要报关单","rùjìng zhāiyào bàoguāndān","Nhập cảnh trích yếu đơn","Tờ khai tóm tắt an ninh trước khi vào EU","ICS2"],
        ["EORI Number","欧盟经济运营商注册号","Ōuméng EORI zhùcèhào","Đăng ký doanh nghiệp EU","Mã định danh hải quan doanh nghiệp tại EU","ICS2"],
        ["Movement Reference Number (MRN)","货物移动参考号","huòwù yídòng cānkǎohào","Hóa vật di động tham khảo","Mã tham chiếu di chuyển tờ khai hải quan EU","ICS2"],
        ["Do Not Load (DNL)","禁止装船指令","jìnzhǐ zhuāngchuán zhǐlìng","Cấm chỉ trang thuyền","Lệnh cấm xếp hàng lên tàu/máy bay","ICS2"],
        ["Request for Information (RFI)","海关补件要求","hǎiguān bǔjiàn yāoqiú","Bổ kiện yêu cầu","Yêu cầu bổ sung dữ liệu an ninh ICS2","ICS2"],
        ["Multiple Filing","多层分单申报","duōcéng fēndān shēnbào","Đa tầng phân đơn","Khai báo tách biệt cấp MBL và HBL","ICS2"],
        ["CE Marking","欧盟安全合格标志","Ōuméng ānquán hégé biāozhì","Hợp cách tiêu chí EU","Dấu chứng nhận phù hợp tiêu chuẩn an toàn EU","CE_REACH"],
        ["Declaration of Conformity (DoC)","欧盟符合性声明","Ōuméng fúhéxìng shēngmíng","Phù hợp tính thanh minh","Bản tuyên bố hợp chuẩn CE","CE_REACH"],
        ["REACH Regulation","欧盟化学品注册评估法规","Ōuméng huàxuépǐn fǎguī","Hóa học phẩm pháp quy","Quy định kiểm soát hóa chất EU REACH","CE_REACH"],
        ["SVHC Candidate List","高度关注物质清单","gāodù guānzhù wùzhì","Cao độ quan chú vật chất","Danh mục hóa chất rất đáng quan ngại","CE_REACH"],
        ["RoHS Directive","电子电气有害物质限制指令","yǒuhài wùzhì xiànzhì zhǐlìng","Hữu hại vật chất hạn chế","Chỉ thị hạn chế chất độc hại trong điện tử","CE_REACH"],
        ["EU Battery Passport","欧盟数字电池护照","Ōuméng shùzì diànchí hùzhào","Số tự điện trì hộ chiếu","Hộ chiếu số truy xuất vòng đời pin tại EU","CE_REACH"],
        ["EU Authorized Representative","欧盟授权代表（欧代）","Ōuméng shòuquán dàibiǎo","Âu Minh thụ quyền đại biểu","Đại diện pháp lý được ủy quyền tại EU","CE_REACH"],
        ["Safety Gate (RAPEX)","欧盟非食品快速预警系统","Ōuméng kuàisù yùjǐng xìtǒng","Khoái tốc dự cảnh","Hệ thống cảnh báo thu hồi hàng lỗi EU","CE_REACH"],
        ["OEKO-TEX Standard 100","生态纺织品安全认证","shēngtài fǎngzhīpǐn rènzhèng","Sinh thái phưởng chức","Chứng nhận an toàn hóa chất dệt may","CE_REACH"],
        ["GACC Decree 248","海关总署248号令","Hǎiguān Zǒngshǔ 248 hàolìng","Hải quan Tổng thự 248","Quy định đăng ký cơ sở sản xuất thực phẩm xuất sang TQ","GACC"],
        ["GACC Decree 249","海关总署249号令","Hǎiguān Zǒngshǔ 249 hàolìng","Hải quan Tổng thự 249","Quy định quản lý an toàn thực phẩm xuất nhập khẩu TQ","GACC"],
        ["CIFER Single Window","进口食品注册单一窗口","jìnkǒu shípǐn dānyī chuāngkǒu","Đơn nhất song khẩu","Cổng đăng ký mã cơ sở thực phẩm xuất sang TQ","GACC"],
        ["Phytosanitary Certificate","植物检疫证书","zhíwù jiǎnyì zhèngshū","Thực vật kiểm dịch","Chứng thư kiểm dịch thực vật xuất khẩu","GACC"],
        ["ISPM-15 Wood Packaging","国际木质包装检疫标准","mùzhì bāozhuāng jiǎnyì","Mộc chất bao trang","Tiêu chuẩn xử lý bao bì gỗ xuất khẩu","GACC"],
        ["IPPC Mark","国际植物保护公约标识","IPPC mài suì biāozhì","Thực vật bảo hộ tiêu chí","Dấu bông lúa khắc nhiệt trên pallet gỗ","GACC"],
        ["Heat Treatment (HT 56°C)","热处理熏蒸","rèchǔlǐ xūnzhēng","Nhiệt xử lý","Xử lý nhiệt gỗ đạt 56°C trong 30 phút","GACC"],
        ["Maximum Residue Limit (MRL)","最大农药残留限量","zuìdà nóngcán xiànliàng","Nông tàn hạn lượng","Giới hạn dư lượng thuốc bảo vệ thực vật tối đa","GACC"],
        ["EVFTA Agreement","越欧自由贸易协定","Yuè–Ōu zìmào xiédìng","Việt–Âu tự mậu hiệp định","Hiệp định Thương mại Tự do Việt Nam – EU","FTA"],
        ["EUR.1 Movement Certificate","EUR.1原产地流通证","EUR.1 yuánchǎndìzhèng","Nguyên sản địa chứng","C/O ưu đãi mẫu EUR.1 trong EVFTA","FTA"],
        ["REX Registered Exporter","欧盟注册出口商系统","Ōuméng zhùcè chūkǒushāng","Đăng ký xuất khẩu thương","Hệ thống tự chứng nhận xuất xứ REX","FTA"],
        ["ACFTA 3.0 Upgrade","中国—东盟自贸区3.0版","Zhōngguó–Dōngméng 3.0","Trung Quốc – Đông Minh 3.0","Nâng cấp Hiệp định Thương mại Tự do Trung Quốc – ASEAN","FTA"],
        ["C/O Form E","东盟—中国原产地证","Dōngméng–Zhōngguó Form E","Nguyên sản địa Form E","Giấy chứng nhận xuất xứ ưu đãi ACFTA","FTA"],
        ["RCEP Agreement","区域全面经济伙伴关系协定","RCEP xiédìng","Khu vực toàn diện kinh tế","Hiệp định Đối tác Kinh tế Toàn diện Khu vực","FTA"],
        ["Wholly Obtained (WO)","完全获得标准","wánquán huòdé biāozhǔn","Hoàn toàn hoạch đắc","Tiêu chí xuất xứ thuần túy 100%","FTA"],
        ["Regional Value Content (RVC)","区域价值成分","qūyù jiàzhí chéngfèn","Khu vực giá trị thành phần","Hàm lượng giá trị khu vực (thường ≥40%)","FTA"],
        ["Change in Tariff Heading (CTH)","四位税号改变","sìwèi shuìhào gǎibiàn","Tứ vị thuế hiệu cải biến","Tiêu chí chuyển đổi mã HS cấp 4 số","FTA"],
        ["Product Specific Rules (PSR)","产品特定原产地规则","chǎnpǐn tèdìng guīzé","Đặc định quy tắc","Quy tắc xuất xứ cụ thể từng mặt hàng","FTA"],
        ["Bilateral Cumulation","双边原产地累积","shuāngbiān lěijī","Song biên lũy tích","Cộng gộp xuất xứ song phương","FTA"],
        ["Third-Party Invoicing (TPI)","第三方发票","dìsānfāng fāpiào","Đệ tam phương phát phiếu","Hóa đơn thương mại do bên thứ ba phát hành","FTA"],
        ["Direct Consignment Rule","直接运输规则","zhíjiē yùnshū guīzé","Trực tiếp vận thâu","Quy tắc vận chuyển trực tiếp giữ nguyên xuất xứ","FTA"],
        ["Non-Manipulation Certificate","未再加工证明","wèizài jiāgōng zhèngmíng","Vị tái gia công chứng minh","Giấy xác nhận không thay đổi nguyên trạng tại cảng quá cảnh","FTA"],
        ["Most-Favored-Nation (MFN)","最惠国税率","zuìhuìguó shuìlǜ","Tối huệ quốc thuế suất","Thuế suất ưu đãi tối huệ quốc WTO","FTA"],
        ["Anti-Dumping Duty (ADD)","反倾销税","fǎnqīngxiāoshuì","Phản khuynh tiêu thuế","Thuế chống bán phá giá","FTA"],
        ["Countervailing Duty (CVD)","反补贴税","fǎnbǔtiēshuì","Phản bổ thiếp thuế","Thuế chống trợ cấp","FTA"],
        ["Anti-Circumvention Probe","反规避调查","fǎnguībì diàochá","Phản quy tỵ điều tra","Điều tra chống lẩn tránh thuế phòng vệ thương mại","FTA"],
        ["Advance Ruling","海关预裁定","hǎiguān yùcáidìng","Hải quan dự tài định","Xác định trước mã HS / trị giá / xuất xứ","FTA"],
        ["Acceptable Quality Limit (AQL)","可接受质量限","kějiēshòu zhìliàngxiàn","Khả tiếp thụ chất lượng hạn","Giới hạn chất lượng chấp nhận theo ISO 2859-1","AQL"],
        ["Pre-Shipment Inspection (PSI)","装运前检验","zhuāngyùnqián jiǎnyàn","Trang vận tiền kiểm nghiệm","Kiểm tra chất lượng hàng trước khi xuất","AQL"],
        ["During Production Check (DUPRO)","生产中期检验","shēngchǎn zhōngqī jiǎnyàn","Sản xuất trung kỳ kiểm","Kiểm định giữa dây chuyền sản xuất","AQL"],
        ["Container Loading Supervision (CLS)","监装检验","jiānzhuāng jiǎnyàn","Giám trang kiểm nghiệm","Giám sát đóng hàng vào container","AQL"],
        ["Critical Defect","致命缺陷","zhìmìng quēxiàn","Trí mạng khuyết hãm","Lỗi nghiêm trọng mất an toàn (AQL 0)","AQL"],
        ["Major Defect","严重缺陷","yánzhòng quēxiàn","Nghiêm trọng khuyết hãm","Lỗi chính ảnh hưởng công năng/bán hàng","AQL"],
        ["Minor Defect","轻微缺陷","qīngwēi quēxiàn","Khinh vi khuyết hãm","Lỗi nhỏ không ảnh hưởng sử dụng","AQL"],
        ["Corrective & Preventive Action (CAPA)","纠正与预防措施","jiūzhèng yǔ yùfáng cuòshī","Cứu chính dự phòng","Kế hoạch khắc phục và phòng ngừa lỗi","AQL"],
        ["Factory Social Audit (BSCI/SMETA)","工厂社会责任验厂","shèhuì zérèn yànchǎng","Xã hội trách nhiệm nghiệm xưởng","Đánh giá tuân thủ lao động và an toàn nhà máy","AQL"],
        ["Bill of Materials (BOM)","物料清单","wùliào qīngdān","Vật liệu thanh đơn","Bảng định mức nguyên vật liệu sản xuất","AQL"],
        ["Master Bill of Lading (MBL)","船东主提单","chuándōng zhǔtídān","Thuyền đông chủ đề đơn","Vận đơn gốc do hãng tàu phát hành","Logistics"],
        ["House Bill of Lading (HBL)","货代分提单","huòdài fēntídān","Hóa đại phân đề đơn","Vận đơn thứ cấp do Forwarder phát hành","Logistics"],
        ["Sea Waybill (SWB)","海运单（不可转让）","hǎiyùndān","Hải vận đơn","Giấy gửi hàng đường biển không chuyển nhượng","Logistics"],
        ["Telex Release","电放提单","diànfàng tídān","Điện phóng đề đơn","Giải phóng hàng bằng điện không cần B/L giấy","Logistics"],
        ["Air Waybill (AWB)","航空运单","hángkōng yùndān","Hàng không vận đơn","Vận đơn đường hàng không","Logistics"],
        ["SMGS Consignment Note","国际铁路联运运单","guójì tiělù yùndān","Quốc tế thiết lộ vận đơn","Vận đơn đường sắt quốc tế tuyến Á–Âu","Logistics"],
        ["Full Container Load (FCL)","整箱货","zhěngxiānghuò","Chỉnh tương hóa","Hàng nguyên container","Logistics"],
        ["Less than Container Load (LCL)","拼箱货","pīnxiānghuò","Phanh tương hóa","Hàng lẻ ghép chung container","Logistics"],
        ["Twenty-Foot Equivalent Unit (TEU)","二十尺标准箱","èrshíchǐ biāozhǔnxiāng","Tiêu chuẩn tương 20ft","Đơn vị quy đổi container 20 feet","Logistics"],
        ["Verified Gross Mass (VGM)","核实总重","héshí zǒngzhòng","Hạch thực tổng trọng","Phiếu xác nhận tổng trọng lượng container (SOLAS)","Logistics"],
        ["Demurrage (DEM)","滞港费","zhìgǎngfèi","Trệ cảng phí","Phí lưu container tại bãi cảng quá hạn miễn phí","Logistics"],
        ["Detention (DET)","滞箱费","zhìxiāngfèi","Trệ tương phí","Phí lưu vỏ container ngoài cảng quá hạn trả rỗng","Logistics"],
        ["Terminal Handling Charge (THC)","码头操作费","mǎtóu cāozuòfèi","Mã đầu thao tác phí","Phí xếp dỡ container tại cảng","Logistics"],
        ["Bunker Adjustment Factor (BAF)","燃油附加费","rányóu fùjiāfèi","Nhiên du phụ gia phí","Phụ phí biến động giá nhiên liệu tàu","Logistics"],
        ["Peak Season Surcharge (PSS)","旺季附加费","wàngjì fùjiāfèi","Vượng quý phụ gia phí","Phụ phí mùa cao điểm vận tải","Logistics"],
        ["Estimated Time of Departure (ETD)","预计开航日","yùjì kāihángrì","Dự kế khai hàng nhật","Ngày dự kiến tàu chạy","Logistics"],
        ["Estimated Time of Arrival (ETA)","预计到港日","yùjì dàogǎngrì","Dự kế đáo cảng nhật","Ngày dự kiến tàu cập cảng đích","Logistics"],
        ["Shipping Instruction (SI)","装船指示 / 提单补料","tídān bǔliào","Đề đơn bổ liệu","Hướng dẫn chi tiết để hãng tàu phát hành B/L","Logistics"],
        ["Arrival Notice (A/N)","到货通知书","dàohuò tōngzhīshū","Đáo hóa thông tri","Thông báo hàng đến tại cảng đích","Logistics"],
        ["Delivery Order (D/O)","提货单","tíhuòdān","Đề hóa đơn","Lệnh giao hàng lấy container tại cảng","Logistics"],
        ["Bonded Warehouse","保税仓库","bǎoshuì cāngkù","Bảo thuế thương khố","Kho ngoại quan tạm miễn nộp thuế nhập khẩu","Logistics"],
        ["Multimodal Transport","多式联运","duōshì liányùn","Đa thức liên vận","Vận tải kết hợp nhiều phương thức dưới 1 hợp đồng","Logistics"],
        ["Cold Chain Logistics","冷链物流","lěngliàn wùliú","Lãnh liên vật lưu","Chuỗi logistics kiểm soát nhiệt độ lạnh","Logistics"],
        ["Rollover (Cargo Rolled)","甩柜","shuǎiguì","Suất quỹ","Container bị lùi sang chuyến tàu kế tiếp","Logistics"],
        ["Blank Sailing","停航 / 空班","tíngháng / kōngbān","Đình hàng / không ban","Hãng tàu hủy chuyến định kỳ trên tuyến","Logistics"],
        ["Port Congestion","港口拥堵","gǎngkǒu yōngdǔ","Cảng khẩu ủng đổ","Tình trạng tàu chờ cầu bến kéo dài","Logistics"],
        ["Customs Broker","报关行","bàoguānháng","Báo quan hành","Đại lý làm thủ tục khai báo hải quan","Logistics"],
        ["Harmonized System (HS) Code","协调制度税则号","shuìzé biānmǎ","Thuế tắc biên mã","Mã phân loại hàng hóa hải quan quốc tế","Logistics"],
        ["Commercial Invoice","商业发票","shāngyè fāpiào","Thương nghiệp phát phiếu","Hóa đơn thương mại xuất nhập khẩu","Logistics"],
        ["Packing List","装箱单","zhuāngxiāngdān","Trang tương đơn","Phiếu chi tiết quy cách đóng gói và trọng lượng","Logistics"],
        ["Proforma Invoice (PI)","形式发票","xíngshì fāpiào","Hình thức phát phiếu","Hóa đơn chiếu lệ báo giá chốt đặt cọc","Logistics"],
        ["Purchase Order (PO)","采购订单","cǎigòu dìngdān","Thải cấu đính đơn","Đơn đặt hàng chính thức từ bên mua","Logistics"],
        ["CIETAC Arbitration","贸仲商事仲裁","Màozhòng zhòngcái","Mậu Trọng trọng tài","Trọng tài Thương mại Quốc tế Trung Quốc","Legal"],
        ["NNN Agreement","不泄密不使用不绕开协议","NNN bǎomì xiéyì","Bất tiết mật bất sử dụng","Thỏa thuận bảo mật & chống sao chép chuẩn luật TQ","Legal"]
      ];
      return raw.map(function (r, idx) {
        return { id: "b2b-" + (idx + 1 < 10 ? "00" : idx + 1 < 100 ? "0" : "") + (idx + 1), en: r[0], zh: r[1], pinyin: r[2], hanViet: r[3], vi: r[4], category: r[5] };
      });
    })(),

    aqlAndContainerMatrices: {
      aqlSampleLetters: [
        { lotRange: "151 – 280", codeLetter: "G", sampleSize: 32, aql1_5_AcRe: "1 / 2", aql2_5_AcRe: "2 / 3", aql4_0_AcRe: "3 / 4" },
        { lotRange: "281 – 500", codeLetter: "H", sampleSize: 50, aql1_5_AcRe: "2 / 3", aql2_5_AcRe: "3 / 4", aql4_0_AcRe: "5 / 6" },
        { lotRange: "501 – 1,200", codeLetter: "J", sampleSize: 80, aql1_5_AcRe: "3 / 4", aql2_5_AcRe: "5 / 6", aql4_0_AcRe: "7 / 8" },
        { lotRange: "1,201 – 3,200", codeLetter: "K", sampleSize: 125, aql1_5_AcRe: "5 / 6", aql2_5_AcRe: "7 / 8", aql4_0_AcRe: "10 / 11" },
        { lotRange: "3,201 – 10,000", codeLetter: "L", sampleSize: 200, aql1_5_AcRe: "7 / 8", aql2_5_AcRe: "10 / 11", aql4_0_AcRe: "14 / 15" },
        { lotRange: "10,001 – 35,000", codeLetter: "M", sampleSize: 315, aql1_5_AcRe: "10 / 11", aql2_5_AcRe: "14 / 15", aql4_0_AcRe: "21 / 22" },
        { lotRange: "35,001 – 150,000", codeLetter: "N", sampleSize: 500, aql1_5_AcRe: "14 / 15", aql2_5_AcRe: "21 / 22", aql4_0_AcRe: "21 / 22" },
        { lotRange: "150,001 – 500,000", codeLetter: "P", sampleSize: 800, aql1_5_AcRe: "21 / 22", aql2_5_AcRe: "21 / 22", aql4_0_AcRe: "21 / 22" }
      ],
      containerSpecs: [
        { type: "20' DC (Standard)", internalDimsM: "5.90 × 2.35 × 2.39", maxPayloadKg: 28200, usableCbm: 28, eurPallets120x80: 11, isoPallets120x100: 10 },
        { type: "40' DC (Standard)", internalDimsM: "12.03 × 2.35 × 2.39", maxPayloadKg: 26700, usableCbm: 58, eurPallets120x80: 25, isoPallets120x100: 20 },
        { type: "40' HC (High Cube)", internalDimsM: "12.03 × 2.35 × 2.69", maxPayloadKg: 26500, usableCbm: 68, eurPallets120x80: 25, isoPallets120x100: 20 },
        { type: "40' Reefer HC", internalDimsM: "11.58 × 2.29 × 2.50", maxPayloadKg: 27700, usableCbm: 60, eurPallets120x80: 23, isoPallets120x100: 20 }
      ]
    },

    sinoVietWonders10: [
      { id: "svw-01", vietnamWonder: "Hoàng Thành Huế (1805–1833)", chinaWonder: "Tử Cấm Thành Bắc Kinh (1420)", sharedHeritageVi: "Quy hoạch trục thần đạo đối xứng Bắc–Nam, Ngọ Môn năm cửa và kiến trúc cung điện gỗ sơn son thếp vàng.", distinctAdaptationVi: "Huế sáng tạo mái kép Trùng Thiềm Điệp Ốc thoáng khí chống bão nhiệt đới và xoay trục hướng Đông Nam tựa sông Hương." },
      { id: "svw-02", vietnamWonder: "Văn Miếu – Quốc Tử Giám Thăng Long (1070)", chinaWonder: "Quốc Tử Giám & Khổng Miếu Bắc Kinh (1306)", sharedHeritageVi: "Hệ thống Bia Tiến sĩ đặt trên lưng rùa đá tôn vinh hiền tài khoa cử Nho học.", distinctAdaptationVi: "Thăng Long dựng Khuê Văn Các biểu tượng văn hiến Việt và bảo tồn 82 bia tiến sĩ độc đáo hài hòa cảnh quan hồ Văn – Giếng Thiên Quang." },
      { id: "svw-03", vietnamWonder: "Gốm Hoa Lam Chu Đậu Hải Dương (thế kỷ 14–16)", chinaWonder: "Sứ Thanh Hoa Cảnh Đức Trấn (Nguyên–Minh)", sharedHeritageVi: "Cùng sử dụng men lam coban vẽ phong cảnh, hoa cúc, chim hạc xuất khẩu dọc Con đường Tơ lụa trên biển.", distinctAdaptationVi: "Gốm Chu Đậu nổi bật men rạn ngà, nét vẽ phóng khoáng đời sống đồng quê Việt Nam và bình tỳ bà nổi tiếng tại Bảo tàng Topkapi." },
      { id: "svw-04", vietnamWonder: "Áo Ngũ Thân & Áo Dài Việt Nam", chinaWonder: "Hán Phục (Giao Lĩnh / Mã Diện Quần)", sharedHeritageVi: "Tư duy thẩm mỹ đề cao sự kín đáo, thướt tha và tôn vinh chất liệu tơ lụa thủ công Đông Á.", distinctAdaptationVi: "Áo Ngũ Thân và Áo Dài hiện đại tôn dáng thanh thoát, tà xẻ hai bên linh hoạt phù hợp khí hậu nóng ẩm nhiệt đới." },
      { id: "svw-05", vietnamWonder: "Trống Đồng Đông Sơn (700 TCN – 100 SCN)", chinaWonder: "Đỉnh Đồng Thương–Chu (Hậu Mẫu Mậu / Mao Công Đỉnh)", sharedHeritageVi: "Đỉnh cao kỹ nghệ đúc đồng thau phức tạp gắn liền quyền lực cộng đồng và lễ nghi thiên văn cổ.", distinctAdaptationVi: "Trống Đồng Đông Sơn kết hợp nhạc khí thiêng với hình mặt trời nhiều tia, chim Lạc và thuyền chiến sông nước đặc trưng văn minh Việt cổ." },
      { id: "svw-06", vietnamWonder: "Chùa Một Cột (Diên Hựu Tự, 1049)", chinaWonder: "Tháp Gỗ Ứng Huyện (Phật Cung Tự, 1056)", sharedHeritageVi: "Cùng thời thế kỷ 11, vận dụng nghệ thuật kết cấu gỗ Đấu Củng chịu lực không cần đinh thép.", distinctAdaptationVi: "Chùa Một Cột cô đọng hình tượng đóa sen vươn trên một trụ đá giữa hồ vuông tượng trưng sự thanh tịnh và sáng tạo tối giản." },
      { id: "svw-07", vietnamWonder: "Phố Cổ Hội An (Thương cảng Faifo thế kỷ 16–18)", chinaWonder: "Cổ Trấn Chu Trang / Ô Trấn Giang Nam", sharedHeritageVi: "Đô thị thương cảng sông nước sầm uất kết nối thương nhân Đông Á với các hội quán gỗ chạm trổ tinh xảo.", distinctAdaptationVi: "Hội An hòa quyện độc đáo kiến trúc Việt, Hoa và Nhật Bản (Chùa Cầu) cùng nhà ống hai mặt tiền chống lũ." },
      { id: "svw-08", vietnamWonder: "Chữ Nôm Việt Nam (Thế kỷ 10–19)", chinaWonder: "Hệ thống Chữ Hán Lục Thư", sharedHeritageVi: "Vận dụng nguyên lý Hình thanh và Hội ý của Lục Thư để sáng tạo văn tự ghi âm bản địa.", distinctAdaptationVi: "Chữ Nôm ghép hai thành tố Hán tự để ghi chính xác tiếng Việt nói, tạo nên kiệt tác Truyện Kiều và Quốc Âm Thi Tập." },
      { id: "svw-09", vietnamWonder: "Trà Sen Tây Hồ & Trà Cổ Thụ Shan Tuyết", chinaWonder: "Trà Long Tỉnh Tây Hồ & Phổ Nhĩ Vân Nam", sharedHeritageVi: "Nghệ thuật thưởng trà thanh tao gắn với nước suối, ấm gốm và triết lý đàm đạo văn nhân.", distinctAdaptationVi: "Trà sen Hà Nội ứng dụng kỹ thuật ướp gạo sen Bách Diệp tỉ mỉ nhiều lượt tạo hương thơm thanh khiết riêng biệt." },
      { id: "svw-10", vietnamWonder: "Giấy Dó Làng Bưởi & Tranh Đông Hồ", chinaWonder: "Giấy Tuyên Chỉ Kính Huyện & Tranh Tết Dương Liễu Thanh", sharedHeritageVi: "Kỹ thuật seo giấy thủ công từ vỏ cây tự nhiên bền hàng trăm năm kết hợp in ván khắc gỗ dân gian.", distinctAdaptationVi: "Tranh Đông Hồ sáng tạo nền giấy Điệp lấp lánh từ vỏ sò điệp nghiền mịn và màu tự nhiên từ lá chàm, hoa hòe." }
    ],

    cscUniversities24Atlas: [
      { id: "csc-01", zh: "清华大学", nameVi: "Đại học Thanh Hoa", nameEn: "Tsinghua University", agencyNumber: "10003", provinceId: "prov-beijing", strengthsVi: "Kỹ thuật, AI, Kinh tế Quản trị, Chính sách Công", campusHint: "tsinghua-gate" },
      { id: "csc-02", zh: "北京大学", nameVi: "Đại học Bắc Kinh", nameEn: "Peking University", agencyNumber: "10001", provinceId: "prov-beijing", strengthsVi: "Kinh tế học, Luật Quốc tế, Hán học, Quan hệ Quốc tế", campusHint: "pku-weiming" },
      { id: "csc-03", zh: "对外经济贸易大学", nameVi: "Đại học Kinh tế Thương mại Đối ngoại (UIBE)", nameEn: "University of International Business and Economics", agencyNumber: "10036", provinceId: "prov-beijing", strengthsVi: "Thương mại Quốc tế, Luật WTO, Hải quan & Logistics", campusHint: "uibe-campus" },
      { id: "csc-04", zh: "中国人民大学", nameVi: "Đại học Nhân dân Trung Quốc (RUC)", nameEn: "Renmin University of China", agencyNumber: "10002", provinceId: "prov-beijing", strengthsVi: "Kinh tế ứng dụng, Tài chính, Luật Thương mại", campusHint: "ruc-campus" },
      { id: "csc-05", zh: "复旦大学", nameVi: "Đại học Phúc Đán", nameEn: "Fudan University", agencyNumber: "10246", provinceId: "prov-shanghai", strengthsVi: "Kinh tế Thế giới, Tài chính Quốc tế, Trung văn", campusHint: "fudan-guanghua" },
      { id: "csc-06", zh: "上海交通大学", nameVi: "Đại học Giao thông Thượng Hải (SJTU)", nameEn: "Shanghai Jiao Tong University", agencyNumber: "10248", provinceId: "prov-shanghai", strengthsVi: "Quản trị Chuỗi cung ứng, Kỹ thuật Hàng hải, Tài chính Antai", campusHint: "sjtu-campus" },
      { id: "csc-07", zh: "上海财经大学", nameVi: "Đại học Tài chính Kinh tế Thượng Hải (SUFE)", nameEn: "Shanghai University of Finance and Economics", agencyNumber: "10272", provinceId: "prov-shanghai", strengthsVi: "Kinh tế lượng, Thương mại Quốc tế, Kế toán Tài chính", campusHint: "sufe-campus" },
      { id: "csc-08", zh: "上海海事大学", nameVi: "Đại học Hàng hải Thượng Hải (SMU)", nameEn: "Shanghai Maritime University", agencyNumber: "10254", provinceId: "prov-shanghai", strengthsVi: "Quản lý Cảng biển, Vận tải Biển, Luật Hàng hải", campusHint: "smu-campus" },
      { id: "csc-09", zh: "浙江大学", nameVi: "Đại học Chiết Giang (ZJU)", nameEn: "Zhejiang University", agencyNumber: "10335", provinceId: "prov-zhejiang", strengthsVi: "Thương mại Điện tử, Kinh tế Số, Kỹ thuật Quản trị", campusHint: "zju-campus" },
      { id: "csc-10", zh: "南京大学", nameVi: "Đại học Nam Kinh (NJU)", nameEn: "Nanjing University", agencyNumber: "10284", provinceId: "prov-jiangsu", strengthsVi: "Lịch sử, Văn học Cổ điển, Kinh tế & Khoa học Dữ liệu", campusHint: "nju-campus" },
      { id: "csc-11", zh: "中山大学", nameVi: "Đại học Trung Sơn (SYSU)", nameEn: "Sun Yat-sen University", agencyNumber: "10558", provinceId: "prov-guangdong", strengthsVi: "Quản trị Kinh doanh Lĩnh Nam, Nghiên cứu ASEAN, Tài chính", campusHint: "sysu-campus" },
      { id: "csc-12", zh: "厦门大学", nameVi: "Đại học Hạ Môn (XMU)", nameEn: "Xiamen University", agencyNumber: "10384", provinceId: "prov-fujian", strengthsVi: "Nghiên cứu Đông Nam Á, Tài chính Kinh tế, Luật Biển", campusHint: "xmu-campus" },
      { id: "csc-13", zh: "武汉大学", nameVi: "Đại học Vũ Hán (WHU)", nameEn: "Wuhan University", agencyNumber: "10486", provinceId: "prov-hubei", strengthsVi: "Luật Quốc tế, Kinh tế học, Quản trị Thông tin", campusHint: "whu-cherry" },
      { id: "csc-14", zh: "华中科技大学", nameVi: "Đại học Khoa học Kỹ thuật Hoa Trung (HUST)", nameEn: "Huazhong University of Science and Technology", agencyNumber: "10487", provinceId: "prov-hubei", strengthsVi: "Kỹ thuật Công nghiệp, Quản trị Chuỗi cung ứng, AI", campusHint: "hust-campus" },
      { id: "csc-15", zh: "南开大学", nameVi: "Đại học Nam Khai (NKU)", nameEn: "Nankai University", agencyNumber: "10055", provinceId: "prov-tianjin", strengthsVi: "Kinh tế Quốc tế, Logistics Hiện đại, Lịch sử Trung Hoa", campusHint: "nankai-campus" },
      { id: "csc-16", zh: "天津大学", nameVi: "Đại học Thiên Tân (TJU)", nameEn: "Tianjin University", agencyNumber: "10056", provinceId: "prov-tianjin", strengthsVi: "Kiến trúc Cổ điển, Quản trị Kỹ thuật, Năng lượng Mới", campusHint: "tju-campus" },
      { id: "csc-17", zh: "大连海事大学", nameVi: "Đại học Hàng hải Đại Liên (DMU)", nameEn: "Dalian Maritime University", agencyNumber: "10151", provinceId: "prov-liaoning", strengthsVi: "Vận tải Biển Quốc tế, Luật Hàng hải, Logistics Cảng", campusHint: "dmu-campus" },
      { id: "csc-18", zh: "四川大学", nameVi: "Đại học Tứ Xuyên (SCU)", nameEn: "Sichuan University", agencyNumber: "10610", provinceId: "prov-sichuan", strengthsVi: "Kinh tế Khu vực, Văn học Lịch sử, Nghiên cứu Nam Á–Đông Nam Á", campusHint: "scu-campus" },
      { id: "csc-19", zh: "西安交通大学", nameVi: "Đại học Giao thông Tây An (XJTU)", nameEn: "Xi'an Jiao Tong University", agencyNumber: "10698", provinceId: "prov-shaanxi", strengthsVi: "Quản trị Chuỗi cung ứng, Hành lang Con đường Tơ lụa, Kỹ thuật", campusHint: "xjtu-campus" },
      { id: "csc-20", zh: "重庆大学", nameVi: "Đại học Trùng Khánh (CQU)", nameEn: "Chongqing University", agencyNumber: "10611", provinceId: "prov-chongqing", strengthsVi: "Kiến trúc Đô thị, Logistics Nội địa Á–Âu, Quản trị Kinh doanh", campusHint: "cqu-campus" },
      { id: "csc-21", zh: "广西大学", nameVi: "Đại học Quảng Tây (GXU)", nameEn: "Guangxi University", agencyNumber: "10593", provinceId: "prov-guangxi", strengthsVi: "Kinh tế Biên mậu Trung–Việt, ASEAN, Nông nghiệp Nhiệt đới", campusHint: "gxu-campus" },
      { id: "csc-22", zh: "云南大学", nameVi: "Đại học Vân Nam (YNU)", nameEn: "Yunnan University", agencyNumber: "10673", provinceId: "prov-yunnan", strengthsVi: "Nghiên cứu Tiểu vùng Mê Kông, Dân tộc học, Thương mại Biên giới", campusHint: "ynu-campus" },
      { id: "csc-23", zh: "北京语言大学", nameVi: "Đại học Ngôn ngữ Bắc Kinh (BLCU)", nameEn: "Beijing Language and Culture University", agencyNumber: "10032", provinceId: "prov-beijing", strengthsVi: "Giáo dục Hán ngữ Quốc tế, Biên phiên dịch cao cấp", campusHint: "blcu-campus" },
      { id: "csc-24", zh: "哈尔滨工业大学", nameVi: "Đại học Công nghiệp Cáp Nhĩ Tân (HIT)", nameEn: "Harbin Institute of Technology", agencyNumber: "10213", provinceId: "prov-heilongjiang", strengthsVi: "Kỹ thuật Tự động hóa, Kiến trúc, Khoa học Quản lý", campusHint: "hit-campus" }
    ],

    cscInterviewQuestions24: [
      { id: "ciq-01", qVi: "Hãy giới thiệu bản thân và nền tảng học thuật của bạn trong 2 phút.", qZh: "请用两分钟介绍您的个人背景与学术经历。", qEn: "Introduce yourself and your academic background in two minutes.", outlineVi: "Cấu trúc 3 phần: Đại học & GPA/NCKH → Điểm mạnh kỹ năng định lượng/ngôn ngữ → Lý do chọn trường và giáo sư." },
      { id: "ciq-02", qVi: "Tại sao bạn chọn Trung Quốc và cụ thể là trường chúng tôi?", qZh: "您为什么选择来中国留学，并特别申请我校？", qEn: "Why China and specifically our university?", outlineVi: "Gắn vị thế chuỗi cung ứng Trung–Việt với thế mạnh khoa/viện nghiên cứu cụ thể và công trình của giáo sư." },
      { id: "ciq-03", qVi: "Hãy tóm tắt câu hỏi nghiên cứu cốt lõi trong Đề cương (Research Proposal) của bạn.", qZh: "请概括您研究计划书中的核心研究问题。", qEn: "Summarize the core research question in your Research Proposal.", outlineVi: "Nêu rõ Khoảng trống nghiên cứu (Gap) → Câu hỏi chính → Đóng góp thực tiễn cho thương mại Trung–Việt/EU." },
      { id: "ciq-04", qVi: "Bạn dự định dùng phương pháp định lượng hay định tính nào cho luận văn?", qZh: "您计划在学位论文中采用哪些定量或定性研究方法？", qEn: "What quantitative or qualitative methodology will you apply?", outlineVi: "Nêu rõ mô hình (vd: Structural Gravity PPML, Panel FEM/REM, DID hoặc SEM), nguồn dữ liệu (UN Comtrade, GACC) và công cụ (Stata/Python)." },
      { id: "ciq-05", qVi: "Nguồn dữ liệu thực nghiệm cho đề tài của bạn có khả thi để thu thập không?", qZh: "您选题所需的实证数据来源是否具备可获取性？", qEn: "Is your empirical data realistically accessible?", outlineVi: "Chứng minh đã kiểm tra trước tính sẵn có của cơ sở dữ liệu công khai (UN Comtrade, World Bank, WITS, Hải quan VN–TQ)." },
      { id: "ciq-06", qVi: "Điểm yếu lớn nhất trong Đề cương nghiên cứu hiện tại của bạn là gì?", qZh: "您认为目前研究计划书最大的局限性在哪里？", qEn: "What is the biggest limitation of your current proposal?", outlineVi: "Thẳng thắn nêu 1 hạn chế kỹ thuật (như biến nội sinh hoặc độ trễ dữ liệu) kèm hướng khắc phục (biến công cụ IV/PPML)." },
      { id: "ciq-07", qVi: "Bạn đã đọc những bài báo nào của giáo sư hướng dẫn tiềm năng?", qZh: "您阅读过目标导师的哪些代表性论文？", qEn: "Which papers by your target supervisor have you read?", outlineVi: "Nêu tên chính xác 2 bài báo gần nhất của giáo sư, nhận xét điểm tâm đắc và chỉ ra hướng mở rộng sang dữ liệu ASEAN–Việt Nam." },
      { id: "ciq-08", qVi: "Kinh nghiệm nghiên cứu khoa học sinh viên hoặc khóa luận cử nhân nổi bật nhất của bạn là gì?", qZh: "您本科阶段最具代表性的科研经历或毕业论文是什么？", qEn: "What was your most notable undergraduate research project?", outlineVi: "Trình bày theo STAR: Bối cảnh bài toán → Phương pháp xử lý → Kết quả định lượng → Bài học rút ra." },
      { id: "ciq-09", qVi: "Nếu học bằng tiếng Trung (hoặc tiếng Anh), bạn chuẩn bị năng lực đọc viết học thuật thế nào?", qZh: "面对高强度的中文或英文学术文献写作，您如何应对？", qEn: "How will you handle intensive academic reading and writing?", outlineVi: "Chứng minh điểm HSK/IELTS hiện có, thói quen đọc tạp chí CNKI/SSCI và lộ trình nâng trình độ viết học thuật." },
      { id: "ciq-10", qVi: "Kế hoạch học tập và công bố bài báo của bạn trong 2–3 năm Thạc sĩ là gì?", qZh: "请阐述您在硕士两至三年内的学习与科研发表规划。", qEn: "What is your 2–3 year study and publication roadmap?", outlineVi: "Năm 1: hoàn tất tín chỉ lõi + khảo sát tài liệu; Năm 2: chạy mô hình thực nghiệm + nộp bài hội thảo/tạp chí + bảo vệ luận văn." },
      { id: "ciq-11", qVi: "Bạn nhìn nhận thế nào về nguyên tắc liêm chính học thuật và sử dụng AI trong nghiên cứu?", qZh: "您如何看待学术诚信以及科研中人工智能工具的使用边界？", qEn: "What is your stance on academic integrity and AI boundaries?", outlineVi: "Khẳng định không đạo văn, không bịa dữ liệu; chỉ dùng AI hỗ trợ tra cứu/hiệu đính ngôn ngữ và tự chịu trách nhiệm 100% lập luận." },
      { id: "ciq-12", qVi: "Mục tiêu nghề nghiệp của bạn trong 5 năm sau khi tốt nghiệp là gì?", qZh: "毕业后五年内您的职业发展规划是什么？", qEn: "What are your 5-year career goals after graduation?", outlineVi: "Kết nối chuyên môn chuỗi cung ứng/thương mại xuyên biên giới Việt–Trung với đóng góp thực chất cho doanh nghiệp hoặc nghiên cứu chính sách." },
      { id: "ciq-13", qVi: "Bạn giải thích thế nào về hiện tượng chuyển dịch chuỗi cung ứng Trung Quốc – Việt Nam hiện nay?", qZh: "您如何分析当前中越供应链协同与产业转移趋势？", qEn: "How do you analyze current China–Vietnam supply chain shifts?", outlineVi: "Nhấn mạnh tính bổ trợ chuỗi giá trị (China-input → Vietnam-processing → EU/US export) thay vì cạnh tranh triệt tiêu." },
      { id: "ciq-14", qVi: "Theo bạn, ACFTA 3.0 và EVFTA tạo ra cơ hội và thách thức gì cho doanh nghiệp Việt Nam?", qZh: "ACFTA 3.0与EVFTA为越南企业带来哪些机遇与合规挑战？", qEn: "What opportunities and compliance challenges do ACFTA 3.0 and EVFTA create?", outlineVi: "Cơ hội: giảm thuế và thương mại số; Thách thức: quy tắc xuất xứ (CTH/RVC/fabric-forward), CBAM và EUDR." },
      { id: "ciq-15", qVi: "Bạn có kinh nghiệm làm việc nhóm đa văn hóa hay giải quyết xung đột nhóm chưa?", qZh: "请分享一次您在跨文化或团队合作中解决分歧的经历。", qEn: "Share an experience resolving conflict in a team project.", outlineVi: "Nêu ví dụ cụ thể: lắng nghe nguyên nhân, thống nhất tiêu chí dữ liệu khách quan và phân công lại theo thế mạnh." },
      { id: "ciq-16", qVi: "Điều gì khiến bạn tự tin mình có thể thích nghi tốt với cuộc sống du học tại Trung Quốc?", qZh: "您如何确保自己能顺利适应在中国的留学与科研生活？", qEn: "How will you adapt smoothly to living and studying in China?", outlineVi: "Nhấn mạnh am hiểu văn hóa – ẩm thực – ứng dụng số (WeChat/Alipay), kỷ luật tự học và tinh thần cởi mở." },
      { id: "ciq-17", qVi: "Nếu kết quả mô hình kinh tế lượng không ủng hộ giả thuyết ban đầu, bạn sẽ xử lý ra sao?", qZh: "如果实证回归结果与您原定假设相反，您会如何处理？", qEn: "What if your econometric results contradict your initial hypothesis?", outlineVi: "Tuyệt đối không sửa số liệu; kiểm tra lại đặc tả mô hình, biến bỏ sót và diễn giải trung thực cơ chế kinh tế thực tế." },
      { id: "ciq-18", qVi: "Một điểm yếu cá nhân của bạn là gì và bạn đang cải thiện nó như thế nào?", qZh: "请谈谈您的一个不足之处以及改进措施。", qEn: "Describe one personal weakness and how you are improving it.", outlineVi: "Chọn điểm yếu thực tế (vd: cầu toàn tốn thời gian ở bước tổng quan tài liệu) và nêu công cụ quản trị thời gian đang áp dụng." },
      { id: "ciq-19", qVi: "Nếu không nhận được học bổng CSC toàn phần năm nay, phương án dự phòng của bạn là gì?", qZh: "如果未能获得全额奖学金，您有什么备选计划？", qEn: "What is your backup plan if you do not receive a full scholarship?", outlineVi: "Nêu lộ trình chủ động: nộp học bổng cấp trường/thành phố, tích lũy thêm kinh nghiệm thực tế và nộp lại bản hồ sơ mạnh hơn." },
      { id: "ciq-20", qVi: "Bạn sử dụng thành thạo những công cụ phân tích dữ liệu nào?", qZh: "您熟练掌握哪些数据分析与计量软件工具？", qEn: "Which data analysis and econometric tools are you proficient in?", outlineVi: "Liệt kê rõ mức độ ứng dụng thực tế với Python, Stata, R, Power BI, SPSS/SmartPLS và Excel nâng cao." },
      { id: "ciq-21", qVi: "Hãy kể về một thất bại hoặc trở ngại học thuật lớn và bài học bạn rút ra.", qZh: "请讲述一次学术挫折及您从中获得的成长。", qEn: "Tell us about an academic setback and what you learned.", outlineVi: "Tập trung 20% vào sự cố và 80% vào quy trình khắc phục, kiểm chứng lại kiến thức và kết quả tiến bộ sau đó." },
      { id: "ciq-22", qVi: "Bạn đánh giá thế nào về tác động của EU CBAM lên thương mại thép và nhôm châu Á?", qZh: "您如何评估欧盟CBAM对亚洲钢铁与铝材出口的长期影响？", qEn: "How do you assess EU CBAM's impact on Asian steel and aluminum exports?", outlineVi: "Phân tích chi phí tuân thủ ngắn hạn (dữ liệu Scope 1–2) và động lực chuyển đổi sang công nghệ lò điện xanh dài hạn." },
      { id: "ciq-23", qVi: "Bạn có dự định học tiếp lên Tiến sĩ (PhD) sau chương trình Thạc sĩ không?", qZh: "硕士毕业后您是否有继续攻读博士学位的打算？", qEn: "Do you plan to pursue a PhD after your Master's degree?", outlineVi: "Trả lời chân thành theo định hướng cá nhân: cởi mở với cơ hội Tiến sĩ nếu đề tài Thạc sĩ đạt kết quả công bố triển vọng." },
      { id: "ciq-24", qVi: "Bạn có câu hỏi nào muốn đặt lại cho Hội đồng phỏng vấn không?", qZh: "您还有什么问题想向面试委员会咨询吗？", qEn: "Do you have any questions for the interview committee?", outlineVi: "Chuẩn bị 2 câu hỏi thông minh về định hướng nhóm nghiên cứu của khoa và cơ hội thực tập doanh nghiệp/hội thảo học thuật." }
    ]
  };
})();
