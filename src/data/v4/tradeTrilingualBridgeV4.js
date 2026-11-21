// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — EU–China–Vietnam Trilingual Trade & Silk Road
// 100 Trilingual Terms (EN|ZH|VI), 12 Dialogues/EU Interviews, 8 Email Pairs &
// Silk Road Historic-to-Modern 2026 Logistics Continuum
// ============================================================================

(function () {
  "use strict";

  // 100 Trilingual Import-Export & EU-China Logistics Terms:
  // [cat, en, zh, pinyin, vi, contextVi]
  var RAW_TERMS = [
    // Category A: Incoterms 2020 & Delivery Terms (15)
    ["incoterms", "EXW (Ex Works)", "工厂交货", "Gōngchǎng jiāohuò", "Giao tại xưởng", "Buyer bears full cost and export clearance from seller's gate."],
    ["incoterms", "FCA (Free Carrier)", "货交承运人", "Huòjiāo chéngyùnrén", "Giao cho người chuyên chở", "Preferred over FOB for containerized ocean and CR Express rail freight."],
    ["incoterms", "FOB (Free On Board)", "装运港船上交货", "Zhuāngyùngǎng chuánshàng jiāohuò", "Giao hàng lên tàu", "Risk transfers when container crosses ship's rail at Chinese port."],
    ["incoterms", "CFR (Cost and Freight)", "成本加运费", "Chéngběn jiā yùnfèi", "Tiền hàng và Cước", "Seller pays sea freight to destination port; buyer arranges marine insurance."],
    ["incoterms", "CIF (Cost, Insurance & Freight)", "成本、保险费加运费", "Chéngběn, bǎoxiǎnfèi jiā yùnfèi", "Tiền hàng, Bảo hiểm & Cước", "Seller covers freight + minimum Clause C coverage to EU/VN port."],
    ["incoterms", "CIP (Carriage & Insurance Paid To)", "运费和保险费付至", "Yùnfèi hé bǎoxiǎnfèi fùzhì", "Cước phí và Bảo hiểm trả tới", "Requires broad Institute Cargo Clauses (A) coverage for multimodal/rail."],
    ["incoterms", "CPT (Carriage Paid To)", "运费付至", "Yùnfèi fùzhì", "Cước phí trả tới", "Seller clears export and pays rail/air carrier to EU inland terminal."],
    ["incoterms", "DAP (Delivered At Place)", "目的地交货", "Mùdìdì jiāohuò", "Giao tại nơi đến", "Seller delivers ready for unloading at Duisburg/Hamburg warehouse; buyer clears import."],
    ["incoterms", "DPU (Delivered at Place Unloaded)", "卸货地交货", "Xièhuòdì jiāohuò", "Giao tại nơi đến đã dỡ", "Only rule where seller bears unloading risk at European distribution hub."],
    ["incoterms", "DDP (Delivered Duty Paid)", "完税后交货", "Wánshuìhòu jiāohuò", "Giao hàng đã nộp thuế", "Maximum seller obligation including EU VAT/duties (watch local EORI rules)."],
    ["incoterms", "FAS (Free Alongside Ship)", "船边交货", "Chuánbiān jiāohuò", "Giao dọc mạn tàu", "Used for heavy machinery or bulk steel placed alongside vessel."],
    ["incoterms", "Transfer of Risk", "风险转移点", "Fēngxiǎn zhuǎnyí diǎn", "Điểm chuyển giao rủi ro", "Determines who absorbs cargo loss during sea/rail transit."],
    ["incoterms", "Local Destination Charges", "目的港当地费用", "Mùdìgǎng dāngdì fèiyòng", "Phụ phí cảng đích", "THC, DO fee, CISF—specify caps upfront in CIF quotes."],
    ["incoterms", "Marine Insurance Clause A", "一切险 / 协会货物A条款", "Yīqièxiǎn", "Bảo hiểm Mọi rủi ro", "Highest all-risk cargo protection for electronics and precision goods."],
    ["incoterms", "Subrogation Waiver", "放弃代位追偿权", "Fàngqì dàiwèi zhuīchángquán", "Từ bỏ quyền thế quyền", "Important in bonded European logistics contracts."],

    // Category B: EU Compliance, CBAM, CE, REACH & ICS2 (20)
    ["eu", "EU CBAM (Carbon Border Adjustment)", "欧盟碳边境调节机制", "Ōuméng Tàn Biānjìng Tiáojī Jīzhì", "Cơ chế Điều chỉnh Carbon EU", "Mandatory quarterly embedded emissions reporting on steel, aluminum, cement exports to EU."],
    ["eu", "EU ICS2 (Import Control System 2)", "欧盟进口控制系统二代", "Ōuméng Jìnkǒu Kòngzhì Xìtǒng Èrdài", "Hệ thống Kiểm soát Nhập khẩu EU v2", "Pre-loading Entry Summary Declaration (ENS) 6-digit HS data mandatory for ocean/rail/air."],
    ["eu", "EORI Number", "欧盟经济运营商注册识别号", "Ōuméng Jīngjì Yùnyíngshāng Shìbiéhào", "Mã số Kinh tế EORI EU", "Mandatory EU customs identifier for importers and freight declarants."],
    ["eu", "CE Marking & Declaration of Conformity", "CE认证与符合性声明", "CE Rènzhèng yǔ Fúhéxìng Shēngmíng", "Chứng nhận Hợp chuẩn Châu Âu CE", "Required product safety compliance for machinery, toys, and electronics in EEA."],
    ["eu", "REACH Regulation (SVHC)", "欧盟REACH化学品法规", "Ōuméng REACH Huàxuéphǐn Fǎguī", "Quy định Hóa chất REACH EU", "Restricts Substances of Very High Concern (SVHC >0.1%) in exported articles."],
    ["eu", "RoHS Directive", "限制有害物质指令", "Xiànzhì Yǒuhài Wùzhì Zhǐlìng", "Chỉ thị Hạn chế Chất độc hại RoHS", "Caps lead, mercury, cadmium in Chinese-sourced electronics heading to EU."],
    ["eu", "EUDR (EU Deforestation Regulation)", "欧盟零毁林法案", "Ōuméng Líng Huǐlín Fǎ'àn", "Quy định Chống Phá rừng EU", "Requires polygon geolocation traceability for rubber, wood furniture, coffee, soy."],
    ["eu", "EUR.1 Movement Certificate", "欧盟优惠原产地证书", "Ōuméng Yōuhuì Yuánchǎndì Zhèngshū", "Giấy chứng nhận Xuất xứ EVFTA", "Claims EVFTA tariff preference for qualifying Vietnamese-assembled EU exports."],
    ["eu", "REX System (Registered Exporter)", "欧盟注册出口商系统", "Ōuméng Zhùcè Chūkǒushāng Xìtǒng", "Hệ thống Tự chứng nhận Xuất xứ REX", "Self-certified Origin Statement on invoice exceeding EUR 6,000 under EVFTA."],
    ["eu", "EU General Product Safety (GPSR)", "欧盟通用产品安全法规", "Ōuméng Tōngyòng Chǎnpǐn Ānquán Fǎguī", "Quy định An toàn Sản phẩm Chung EU", "Requires an appointed EU Responsible Person on cross-border consumer parcels."],
    ["eu", "T1 Transit Procedure", "欧盟外部过境程序 T1", "Ōuméng Wàibù Guòjìng Chéngxù", "Thủ tục Quá cảnh Hải quan T1", "Moves non-EU goods bond-free from Rotterdam/Malaszewicze to inland warehouse."],
    ["eu", "Fiscal Representation", "欧盟税务财政代理", "Ōuméng Shuìwù Dàilǐ", "Đại diện Thuế Nhập khẩu EU", "Defers import VAT in Netherlands/Belgium (Article 23 deferment) to optimize cashflow."],
    ["eu", "UKCA Conformity", "英国合格评定标识", "Yīngguó Hégépíngdìng Biāozhì", "Dấu Hợp chuẩn Anh Quốc UKCA", "Parallel regulatory mark alongside CE for Great Britain logistics."],
    ["eu", "Bonded Warehouse (Entrepost)", "保税仓库", "Bǎoshuì Cāngkù", "Kho Ngoại quan", "Stores Chinese buffer stock in Rotterdam/Antwerp without upfront duty payment."],
    ["eu", "Phytosanitary Certificate", "植物检疫证书", "Zhíwù Jiǎnyì Zhèngshū", "Giấy Kiểm dịch Thực vật", "Essential for agricultural goods entering either EU TRACES or GACC."],
    ["eu", "CE Test Report (Notified Body)", "欧盟公告机构检测报告", "Ōuméng Gōnggào Jīgòu Jiǎncè Bàogào", "Báo cáo Thử nghiệm Tổ chức Chỉ định", "Auditing authenticity prevents fake Chinese trading-company PDFs."],
    ["eu", "DPP (Digital Product Passport)", "欧盟数字产品护照", "Ōuméng Shùzì Chǎnpǐn Hùzhào", "Hộ chiếu Sản phẩm Số EU", "Emerging QR traceability requirement for batteries and textiles in EU 2026+."],
    ["eu", "Dual-Use Export Control", "两用物项出口管制", "Liǎngyòng Wùxiàng Chūkǒu Guǎnzhì", "Kiểm soát Xuất khẩu Hàng lưỡng dụng", "Compliance check for dual-use industrial electronics, graphite, rare earths."],
    ["eu", "WEEE Recycling Registration", "欧盟电子废弃物回收注册", "Ōuméng Diànzǐ Fèiqìwù Zhùcè", "Đăng ký Tái chế Rác Điện tử WEEE", "Mandatory German/EU producer registration before selling electrical devices."],
    ["eu", "IOSS / VAT One-Stop Shop", "欧盟进口一站式增值税", "Ōuméng Jìnkǒu Yīzhànshì Shuì", "Khai báo Thuế VAT Một cửa EU", "B2C cross-border e-commerce tax streamline under EUR 150."],

    // Category C: Rail Express (Silk Road 2026), Ocean, Air & Container Ops (35)
    ["freight", "CR Express (China–Europe Railway)", "中欧班列", "Zhōng-Ōu Bānliè", "Tàu Liên vận Đường sắt Trung – Âu", "14–18 day rail bridge via Khorgos/Alashankou → Malaszewicze → Duisburg/Hamburg."],
    ["freight", "SMGS Rail Consignment Note", "国际铁路货物联运运单", "Guójì Tiělù Liányùn Yùndān", "Vận đơn Đường sắt Quốc tế SMGS", "Core legal carriage contract along Eurasian gauge tracks."],
    ["freight", "Break-of-Gauge Transshipment", "边境换装（准轨/宽轨）", "Biānjìng Huànzhuāng", "Chuyển tải Khổ ray (1435mm <-> 1520mm)", "Container lift at Khorgos (CN/KZ) and Malaszewicze (BY/PL) terminals."],
    ["freight", "Master Bill of Lading (MBL)", "海运主提单", "Hǎiyùn Zhǔ Tídān", "Vận đơn Đường biển Gốc (Hãng tàu)", "Issued directly by ocean carrier (Maersk/COSCO/CMA CGM) to NVOCC or BCO."],
    ["freight", "House Bill of Lading (HBL)", "货代分提单", "Huòdài Fēn Tídān", "Vận đơn Thứ cấp (Forwarder)", "Issued by European/Vietnamese freight forwarder managing LCL consolidation."],
    ["freight", "Telex Release / Surrendered B/L", "电放提单", "Diànfàng Tídān", "Vận đơn Giao điện tử (Telex Release)", "Releasing cargo upon electronic surrender so fast rail/short-sea beats mailed originals."],
    ["freight", "Sea Waybill (SWB)", "海运单（不可转让）", "Hǎiyùndān", "Giấy gửi hàng Đường biển", "Non-negotiable instant cargo release between trusted intercompany EU–Asia branches."],
    ["freight", "FCL (Full Container Load)", "整箱货", "Zhěngxiānghuò", "Nguyên Container (FCL)", "Dedicated 20GP / 40GP / 40HQ container booked by single shipper."],
    ["freight", "LCL (Less than Container Load)", "拼箱货", "Pīnxiānghuò", "Hàng Lẻ Ghép Container (LCL)", "Charged per W/M (Weight or Measurement CBM) at CFS warehouse."],
    ["freight", "CFS (Container Freight Station)", "集装箱货运站（拼箱仓）", "Jízhuāngxiāng Huòyùnzhàn", "Kho Gom hàng Lẻ CFS", "Where LCL cargo from Dongguan/Yiwu is consolidated prior to port gate-in."],
    ["freight", "CY (Container Yard)", "集装箱堆场", "Jízhuāngxiāng Duīchǎng", "Bãi Container Tại Cảng CY", "Drop-off and pickup zone for full-container FCL shipments."],
    ["freight", "Demurrage (DEM)", "港内滞箱费 / 滞港费", "Zhìgǎngfèi", "Phí Lưu Container Tại Cảng", "Daily carrier penalty if full container sits in Rotterdam/Hai Phong past Free Time."],
    ["freight", "Detention (DET)", "港外滞箱费", "Zhìxiāngfèi", "Phí Lưu Vỏ Container Ngoài Cảng", "Charged when empty box returns late to depot after unloading at EU consignee."],
    ["freight", "Combined Demurrage & Detention", "合并滞港滞箱天数", "Héìng Miǎnxiāngqī", "Gói Thời gian Miễn lưu Hợp nhất", "Key tender negotiation KPI when contracting European forwarders."],
    ["freight", "Cut-off Time (SI / VGM / CY)", "截单 / 截重 / 截关时间", "Jiédān / Jiézhòng / Jiéguān", "Hạn chót Chứng từ / VGM / Hạ bãi", "Strict Ningbo/Yantian deadlines; missing CY Cut-off rolls box to next vessel."],
    ["freight", "Blank Sailing", "停航 / 空班", "Tíngháng / Kōngbān", "Hủy chuyến Tàu Định kỳ", "Ocean alliance capacity cut inflating spot rates on Asia–North Europe lanes."],
    ["freight", "Roll-over Cargo", "甩柜 / 漏装", "Shuǎiguì", "Rớt Tàu Chuyển Chuyến sau", "Container bumped off overbooked ship onto later week sailing."],
    ["freight", "TEU / FEU", "标准集装箱（20尺/40尺柜）", "Biāozhǔn Jízhuāngxiāng", "Đơn vị Container 20ft / 40ft", "Standard volume metrics for port throughput and carrier allocations."],
    ["freight", "40' High Cube (40HQ)", "40尺超高柜", "Sìshí Chǐ Gāoguì", "Container 40 feet Trần Cao", "Extra 1ft height yielding ~68 CBM usable volume for lightweight EU consumer goods."],
    ["freight", "VGM (Verified Gross Mass)", "集装箱重量验证", "Jízhuāngxiāng Zhòngliàng Yànzhèng", "Xác nhận Khối lượng Toàn phần", "SOLAS mandatory weight declaration before loading on vessel."],
    ["freight", "AWB / MAWB / HAWB", "航空运单（主单/分单）", "Hángkōng Yùndān", "Vận đơn Hàng không", "Air freight carriage contract; Chargeable Weight ratio 1 CBM = 167 kg."],
    ["freight", "Chargeable Weight (CW)", "计费重量", "Jìfèi Zhòngliàng", "Trọng lượng Tính cước", "Greater of actual gross weight vs volumetric weight (L*W*H cm / 6000)."],
    ["freight", "BAF / CAF / PSS / GRI", "燃油/货币/旺季/普遍涨价附加费", "Gèxiàng Hǎiyùn Fùjiāfèi", "Phụ phí Nhiên liệu / Mùa cao điểm", "Must separate ocean Base Rate from volatile carrier surcharges in RFQs."],
    ["freight", "Free Time (e.g. 14 Days Free DEM/DET)", "免用箱期（免滞期）", "Miǎnyòngxiāngqī", "Số ngày Miễn phí Lưu bãi/Vỏ", "Crucial contract cushion preventing costly European port congestion fines."],
    ["freight", "Reefer Container", "冷藏集装箱", "Lěngcáng Jízhuāngxiāng", "Container Lạnh", "Active temperature-controlled unit for Vietnamese fruit & Chinese biologics."],
    ["freight", "Cross-Stuffing / Transshipment Hub", "中转拆拼箱 / 换柜", "Zhōngzhuǎn Huànguì", "Đảo hàng / Chuyển tải Trung chuyển", "Singapore, Port Klang, or Hong Kong hub operations for ASEAN–EU cargo."],
    ["freight", "Rail-Sea Intermodal", "铁海联运", "Tiě-Hǎi Liányùn", "Vận tải Đa phương thức Sắt – Biển", "Connecting inland Chongqing/Chengdu hubs directly with coastal ports."],
    ["freight", "ISPM-15 Heat-Treated Pallet", "IPPC熏蒸热处理木托盘", "Xūnzhēng Mùtuōpán", "Pallet Gỗ Hun trùng Chuẩn Quốc tế", "Prevents immediate EU/Australian quarantine rejection at port of entry."],
    ["freight", "Force Majeure Notice", "不可抗力通知书", "Bùkěkànglì Tōngzhī", "Thông báo Bất khả kháng", "Formal notice template required during Red Sea rerouting or typhoon closures."],
    ["freight", "Cargo Tracking API / EDI Milestones", "货物追踪EDI节点更新", "Huòwù Zhuīzōng Jíshí Jìediǎn", "Theo dõi Hành trình EDI", "Carrier milestone codes (GATE IN, LOADED, ATA, POD DELIVERED) reported to EU HQ."],
    ["freight", "ETA vs ATA / ETD vs ATD", "预计与实际到港/离港时间", "Yùjì yǔ Shíjì Dàogǎng Shíjiān", "Giờ Dự kiến vs Thực tế Tàu cập", "Core KPIs tracked by logistics coordinators in daily EU–Asia visibility sheets."],
    ["freight", "Consignee / Notify Party", "收货人 / 通知人", "Shōuhuòrén / Tōngzhīrén", "Người nhận hàng / Bên được thông báo", "Determines who receives carrier Arrival Notice."],
    ["freight", "THC (Terminal Handling Charge)", "码头操作费", "Mǎtóu Cāozuòfèi", "Phí Xếp dỡ Tại Bến Cảng", "Mandatory origin/destination port lift fee at Yantian, Ningbo, Rotterdam."],
    ["freight", "Sea–Air Multimodal (via Dubai/Almaty)", "海空联运", "Hǎi-Kōng Liányùn", "Đa phương thức Biển – Hàng không", "Balances speed and cost when European retail stock is critically low."],
    ["freight", "Last-Mile FBA / Distribution Center", "末端派送与仓库预约", "Mòduàn Pàisòng yǔ Yùyuē", "Giao chặng cuối Kho Châu Âu", "Appointment scheduling for European distribution centers after customs clearance."],

    // Category D: Customs, HS Classification, Settlement & Factory QC (30)
    ["customs", "HS Code & GRI 1–6", "海关商品编码及归类总规则", "Hǎiguān Biānmǎ yǔ Guīlèi Guīzé", "Mã HS & 6 Quy tắc Phân loại", "6-digit WCO harmonized base extended to 8/10 digits in China/EU/Vietnam."],
    ["customs", "Commercial Invoice & Packing List", "商业发票与装箱单", "Shāngyè Fāpiào yǔ Zhuāngxiāngdān", "Hóa đơn Thương mại & Phiếu Đóng gói", "Core valuation and net/gross weight documents reconciled at customs."],
    ["customs", "Origin Criteria (WO / RVC / CTC)", "原产地标准（完全获得/区域价值/税则归类改变）", "Yuánchǎndì Biāozhǔn", "Tiêu chí Xuất xứ Hàng hóa FTA", "Governs whether goods unlock ACFTA 3.0, RCEP, or EVFTA 0% duty."],
    ["customs", "Non-Manipulation Certificate", "未再加工证明", "Wèi Zàijiāgōng Zhèngmíng", "Chứng nhận Không Gia công thêm", "Issued in Hong Kong/Singapore if vessel transships outside FTA zone."],
    ["customs", "GACC Decree 248 / 249 (CIFER)", "海关总署248/249号令（CIFER注册）", "Hǎiguān Zǒngshǔ 248 Hàolìng", "Lệnh GACC 248/249 Xuất khẩu Thực phẩm TQ", "Food factories shipping into PRC must maintain valid CIFER registration."],
    ["customs", "Irrevocable L/C (UCP 600)", "不可撤销跟单信用证", "Bùkě Chèxiāo Xìnyòngzhèng", "Thư Tín dụng Không hủy ngang", "Bank-backed conditional settlement protecting both exporter and EU buyer."],
    ["customs", "L/C Discrepancy", "信用证不符点", "Xìnyòngzhèng Bùfúdiǎn", "Sai sót Chứng từ L/C", "Even one misspelled port name allows issuing bank to withhold payment."],
    ["customs", "T/T Deposit / Balance (30/70)", "电汇定金与尾款（30%/70%）", "Diànhuì Dìngjīn yǔ Wěikuǎn", "Thanh toán Điện chuyển tiền T/T", "Standard Chinese supplier term; tie 70% balance strictly to passing PSI."],
    ["customs", "D/P & D/A (Documentary Collection)", "付款交单 / 承兑交单", "Fùkuǎn Jiāodān / Chéngduì Jiāodān", "Nhờ thu Kèm Chứng từ", "Bank holds original B/L until buyer pays or accepts timed draft."],
    ["customs", "OA (Open Account · Net 30/60)", "赊销账期结算", "Shēxiāo Zhàngqī", "Ghi sổ Trả chậm (Open Account)", "Standard payment credit demanded by European corporate headquarters."],
    ["customs", "AQL 2.5 PSI (Pre-Shipment Inspection)", "装运前抽样检验 (AQL 2.5)", "Zhuāngyùnqián Chōuyàng Jiǎnyàn", "Giám định Trước Giao hàng AQL 2.5", "ISO 2859-1 statistical sampling gating quality fade at Dongguan/Yiwu factories."],
    ["customs", "DUPRO (During Production Check)", "生产中期检验", "Shēngchǎn Zhōngqī Jiǎnyàn", "Kiểm tra Giữa Dây chuyền", "Catches tooling defects at 30–50% completion before bulk waste."],
    ["customs", "CAPA (Corrective & Preventive Action)", "纠正与预防措施", "Jiūzhèng yǔ Yùfáng Cuòshī", "Hành động Khắc phục & Phòng ngừa", "Formal root-cause methodology expected in European vendor audits."],
    ["customs", "MOQ & Lead Time", "最小起订量与交货周期", "Zuìxiǎo Qǐdìngliàng yǔ Jiāoqī", "Số lượng Tối thiểu & Thời gian Sản xuất", "Primary terms negotiated cleanly in Chinese with factory planners."],
    ["customs", "EXW vs FOB VAT Export Rebate", "出口退税资格", "Chūkǒu Tuìshuì Zīgé", "Hoàn thuế GTGT Xuất khẩu Trung Quốc", "Only Chinese factories holding Export License reclaim 13% VAT rebate."],
    ["customs", "GSXT 18-Digit Credit Code Audit", "国家企业信用信息公示系统核查", "Qǐyè Xìnyòng Xìnxī Héchá", "Tra cứu Pháp nhân Doanh nghiệp TQ", "Mandatory KYC check against shell companies before deposit remittance."],
    ["customs", "Company Seal (公章) & Contract Seal", "公章与合同专用章", "Gōngzhāng yǔ Hétóng Zhuānyòngzhāng", "Con dấu Pháp nhân & Dấu Hợp đồng", "Legal validation on B2B bilingual contracts under PRC Civil Code."],
    ["customs", "NNN Agreement", "不披露、不使用、不规避协议", "NNN Bǎomì Xiéyì", "Thỏa thuận Bảo mật & Chống Vượt mặt NNN", "Stronger IP protection than Western NDA alone when tooling in China."],
    ["customs", "CIETAC / VIAC Arbitration", "国际经济贸易仲裁委员会", "Zhòngcái Wěiyuánhuì", "Trọng tài Thương mại Quốc tế", "Cross-border enforceable award mechanism under 1958 New York Convention."],
    ["customs", "CIFER / PUC / PHC Code", "出口水果果园及包装厂注册号", "Guǒyuán yǔ Bāozhuāngchǎng Zhùcèhào", "Mã số Vùng trồng & Cơ sở Đóng gói", "Required on every Vietnamese agricultural export carton into PRC customs."],
    ["customs", "Incoterms Risk vs Cost Split", "风险与费用分界线", "Fēngxiǎn yǔ Fèiyòng Fēnjièxiàn", "Phân định Rủi ro vs Chi phí", "In CIF/CPT risk transfers at origin port even though seller pays destination freight!"],
    ["customs", "Short Shipment / Short-Landed", "短装 / 溢短装条款", "Duǎnzhuāng", "Giao thiếu hàng / Dung sai (+/-5%)", "Standard bulk cargo tolerance clause in sales contracts."],
    ["customs", "Cargo Claim & Letter of Protest", "货损索赔与海事异议函", "Huòsǔn Suǒpéi", "Khiếu nại Tổn thất Hàng hóa", "Must file notice within 3–7 days of European port unstuffing to preserve insurer rights."],
    ["customs", "RFP / RFQ Carrier Tender", "承运商物流招标与询价", "Wùliú Zhāobiāo yǔ Xúnjià", "Mời thầu Giá cước Quốc tế", "Comparing Maersk/CMA CGM vs forwarder spot allocations per trade lane."],
    ["customs", "KPI On-Time In-Full (OTIF %)", "准时足额交付率 KPI", "Zhǔnshí Zú'é Jiāofùlǜ", "Chỉ số Giao Đúng hẹn Đủ lượng OTIF", "Primary European supply chain performance scorecard."],
    ["customs", "ESG / Scope 3 Freight Emissions", "范围三物流碳排放核算", "Wùliú Tànpáifàng Hésuàn", "Kiểm kê Phát thải Khí nhà kính Vận tải", "CR Express Rail reduces CO2 vs air while ocean slow-steaming leads Scope 3 efficiency."],
    ["customs", "Safety Stock & Buffer Lead Time", "安全库存与缓冲交期", "Ānquán Kùcún", "Tồn kho An toàn & Thời gian Dự phòng", "Required when planning Red Sea Cape diversions or Chinese New Year shutdowns."],
    ["customs", "Vendor Scorecards (QC + Delivery)", "供应商季度绩效评估", "Gōngyìngshāng Jìxiào Pínggū", "Bảng Chấm điểm Nhà cung cấp", "Quarterly review connecting Shenzhen production with EU HQ procurement."],
    ["customs", "Back-to-Back C/O", "背对背原产地证", "Bèiduìbèi Yuánchǎndìzhèng", "Chứng nhận Xuất xứ Giáp lưng C/O", "Supports ASEAN regional distribution hubs splitting bulk shipments."],
    ["customs", "Advance Customs Ruling", "海关预先裁定", "Hǎiguān Yùxiān Cáidìng", "Xác định Trước Mã HS / Xuất xứ", "Locks ambiguous HS tariff classification legally with customs before shipping."],

    // Keep total cleanly at 100 entries: Category E: Career & Workplace Communication Bridges (5 extra key terms = 100 exact)
    ["freight", "Port Congestion Surcharge (PCS)", "港口拥堵附加费", "Gǎngkǒu Yōngdǔ Fùjiāfèi", "Phụ phí Tắc nghẽn Cảng", "Applies unpredictably during peak strikes at Rotterdam/Hamburg."],
    ["customs", "Clean on Board B/L", "清洁已装船提单", "Qīngjié Yǐzhuāngchuán Tídān", "Vận đơn Sạch Đã xếp lên tàu", "Required under UCP 600 L/C verifying intact external packaging at loading."],
    ["eu", "ENS Filing Deadline (24-Hour Rule)", "装船前24小时ENS预报", "Zhuāngchuánqián 24 Xiǎoshí Yùbào", "Khai báo An ninh Hàng hóa 24h", "Failing 24-hour advance manifest filing blocks EU port unloading."],
    ["incoterms", "EXW vs FCA Export Risk", "EXW下买方无法办理中国出口报关风险", "Chūkǒu Bàoguān Fēngxiǎn", "Rủi ro Không tự Xuất khẩu dưới EXW", "Use FCA instead of EXW when buying from Chinese factories without export entity."],
    ["eu", "Dual-Language SOP Standard", "中英双语标准作业流程", "Zhōng-Yīng Shuāngyǔ SOP", "Quy trình Chuẩn Song ngữ Anh–Trung", "Keeps factory floor execution exact while aligning directly with EU ERP systems."]
  ];

  var TERMS = RAW_TERMS.map(function (r, i) {
    return {
      id: "tr-term-" + (i + 1),
      category: r[0],
      en: r[1],
      zh: r[2],
      pinyin: r[3],
      vi: r[4],
      contextEn: r[5]
    };
  });

  // 12 Workplace & EU Logistics Job Interview Dialogues (EN for EU Bosses + ZH for Factories)
  var DIALOGUES = [
    {
      id: "dlg-01",
      role: "EU Freight Forwarder Interview (English)",
      contextVi: "Phỏng vấn vị trí Operations Specialist tại công ty logistics châu Âu (Maersk / DHL / Kuehne+Nagel)",
      promptEn: "Interviewer: 'How do you handle a Chinese supplier insisting on EXW Ningbo while our European consignee requires clean export customs clearance and low port risk?'",
      answerEn: "Candidate: 'I would politely guide the supplier to switch from EXW to FCA Ningbo CY/Terminal. Under FCA, the Chinese factory handles China export customs declaration cleanly using their VAT rebate license, while our European carrier retains full control over sea routing, MBL issuance, and European ICS2 compliance.'",
      zhPartnerBridge: "跟宁波工厂沟通：‘为了方便贵司顺利办理出口退税并节省港前沟通成本，我们欧洲总部建议按 FCA 宁波指定仓库成交，由我方欧线货代对接订舱。’"
    },
    {
      id: "dlg-02",
      role: "Vessel Roll-Over Escalation (ZH -> EN)",
      contextVi: "Xưởng báo rớt tàu tại Diêm Điền (Thâm Quyến) → Bạn chuyển thành báo cáo chuyên nghiệp bằng Tiếng Anh cho Quản lý Châu Âu",
      zhSource: "工厂物流经理：‘不好意思，这批40HQ柜子因为盐田港船公司甩柜（Roll-over），ETD 延后4天到下周二开船，CY Cut-off 也改了，请通知欧洲客户。’",
      reportEn: "'Dear EU Supply Chain Lead, Shipment [REF-408] via Yantian has been rolled over by the ocean carrier due to peak space allocation. Revised ETD is +4 days (next Tuesday); I have requested our forwarder to secure priority booking and confirm adjusted Rotterdam ETA so DC receiving slots are updated without Detention impact.'"
    },
    {
      id: "dlg-03",
      role: "EU CBAM & REACH Compliance Audit (ZH <-> EN)",
      contextVi: "Yêu cầu xưởng Kim loại tại Phật Sơn cấp số liệu phát thải CBAM & báo cáo thử nghiệm RoHS cho khách Đức",
      promptEn: "EU Client (EN): 'Our German distributor requires verified SVHC screening (<0.1%) and Q4 CBAM embedded emissions per metric ton before vessel arrival in Hamburg.'",
      zhPartnerBridge: "对佛山车间说明：‘客户德国总部严格执行欧盟 REACH 与碳关税（CBAM）核查。麻烦安排在装柜前提供具有 CNAS 资质的材质安全报告及单位能耗数据，否则货物将在汉堡港滞留。’"
    },
    {
      id: "dlg-04",
      role: "Demurrage & Detention Negotiation (EN -> Carrier)",
      contextVi: "Đàm phán gia hạn Free Time tại cảng Rotterdam khi hàng từ Ningbo bị kẹt kiểm hóa",
      promptEn: "Operation Note (EN): 'Customs hold at Rotterdam has consumed 5 of our 7 standard Free Days. Write an urgent extension appeal preserving budget.'",
      answerEn: "'Given ongoing customs examination delays beyond consignee control on MBL #9021, we respectfully request an extended combined Free Time window (14 days total DEM/DET) to avoid disproportionate port storage charges while inspection clears.'"
    },
    {
      id: "dlg-05",
      role: "CR Express (中欧班列) Rail Booking (ZH -> EN)",
      contextVi: "Chuyển tuyến từ đường biển 40 ngày qua Biển Đỏ sang Đường sắt Trung – Âu 16 ngày",
      zhSource: "西安场站操作：‘这票急货建议走中欧班列（西安—马拉舍维奇—杜伊斯堡），全程16天左右，需提前锁定 SMGS 运单与欧盟 ICS2 编码。’",
      reportEn: "'To mitigate Cape routing delays for our critical retail launch, I recommend shifting SKU-204 onto China-Europe Railway Express (Xi'an → Duisburg, ~16 days). I have audited HS digits for both SMGS rail waybill and EU ICS2 pre-loading ENS.'"
    },
    {
      id: "dlg-06",
      role: "Quality Fade & CAPA Enforcement (ZH + EN)",
      contextVi: "Chặn lỗi sai màu sơn tại Đông Hoản dựa trên AQL 2.5 trước khi giải ngân 70% T/T",
      promptEn: "EU Quality Lead (EN): 'Does our contract enforce pre-shipment rework before we release the 70% balance transfer?'",
      zhPartnerBridge: "跟东莞厂长明确约定：‘根据双方合同条款，我司委派的第三方质检（PSI）按 AQL 2.5 标准抽检。未通过重工复检前暂缓支付70%尾款，请配合完善 CAPA 改善记录。’"
    },
    {
      id: "dlg-07",
      role: "European Logistics Interview: Anti-Attrition Strength",
      contextVi: "Trả lời câu hỏi phỏng vấn về năng lực giữ cân bằng Tiếng Anh chuẩn và Tiếng Trung thực chiến",
      promptEn: "Interviewer: 'Most candidates are strong in either European reporting OR Chinese factory calls, rarely both. How do you manage both directly?'",
      answerEn: "'I run a dual-register workflow: I translate operational shop-floor updates from WeChat/Chinese ERP into concise, KPI-driven English reports (ETD/ETA, Free Time, CAPA, CBAM) for European HQ, ensuring zero nuance loss and keeping both business English and technical Mandarin active daily.'"
    },
    {
      id: "dlg-08",
      role: "VN + China Hybrid Supply Chain EVFTA Sourcing",
      contextVi: "Giải thích quy tắc cộng gộp/chuyển đổi mã HS cho sếp Châu Âu khi nhà máy Việt Nam dùng nguyên phụ liệu Trung Quốc",
      promptEn: "EU Sourcing Director (EN): 'If our Haiphong supplier imports Chinese fabric rolls, does the finished apparel still qualify for 0% duty under EVFTA?'",
      answerEn: "'Under EVFTA specific rules of origin, apparel generally requires Double Transformation (weaving + making-up) or strict ASEAN/EU cumulation. Simply sewing Chinese woven fabric in Vietnam typically fails EUR.1 origin—we must source Vietnamese or South Korean (under cumulation framework if applicable) fabric or compare MFN duties upfront.'"
    },
    {
      id: "dlg-09",
      role: "Telex Release Timing Confirmation (ZH)",
      contextVi: "Nhắc nhà cung cấp Thượng Hải làm Điện phóng (Telex Release) sau khi nhận Swift T/T",
      zhSource: "我方跟单：‘70%货款水单已发，请贵司财务收到款项后尽快向船公司办理电放（Telex Release），并回传带电放章的提单扫描件以便鹿特丹清关。’",
      reportEn: "'MT103 bank copy transmitted to Shanghai supplier; Telex Release B/L scheduled within 24h so Antwerp broker completes pre-arrival T1 clearance ahead of ETA.'"
    },
    {
      id: "dlg-10",
      role: "Incoterms 2020 DDP VAT Risk Warning (EN)",
      contextVi: "Cảnh báo sếp không để xưởng nhỏ ở Nghĩa Ô tự báo DDP vào Đức khi không có mã EORI",
      promptEn: "Finance Manager (EN): 'The Yiwu vendor offered cheap DDP pricing straight to Munich. Should we accept?'",
      answerEn: "'I advise against accepting DDP from a Chinese supplier lacking a valid German/EU EORI entity. Unregistered grey clearance risks EU customs seizure and invalidates input VAT reclaim. Let us book FCA/FOB under our own European EORI and fiscal broker.'"
    },
    {
      id: "dlg-11",
      role: "L/C UCP 600 Discrepancy Resolution (EN + ZH)",
      contextVi: "Xử lý sai chính tả cảng đích trên chứng từ ngân hàng Trung Quốc",
      zhSource: "单证员确认：‘信用证要求目的港显示 Antwerp Port Belgium，发票误写成 Antwerp Terminal，我司将在交单前重新出具单据消除不符点（Discrepancy）。’",
      reportEn: "'Detected minor port-name discrepancy against UCP 600 Article 14 before bank presentation; corrected commercial invoice re-issued in Ningbo to avoid EUR 150 bank discrepancy fee.'"
    },
    {
      id: "dlg-12",
      role: "GACC 248 vs EU TRACES Comparative Brief",
      contextVi: "So sánh kiểm dịch xuất khẩu thực phẩm Việt Nam đi Trung Quốc và Châu Âu",
      promptEn: "Team Brief (EN + VI): 'Notice the symmetry: shipping agro-goods to China requires GACC Decree 248 CIFER + PUC/PHC codes; shipping to EU requires TRACES NT health certification + EUDR geolocation.'"
    }
  ];

  // 8 Side-by-Side Email Pairs: Factory ZH <-> European HQ EN
  var EMAIL_PAIRS = [
    {
      id: "email-01",
      topic: "1. FOB vs FCA Switch & Booking Confirmation",
      factoryZh: "主题：订单 PO-2026-88 交货条款与订舱确认\n张总您好：\n我司欧洲总部确认该批货将采用 FCA 深圳指定货代仓库交付，请贵司正常办理中国出口报关退税手续，并于周五前提供精确毛重与体积（VGM预估）以便安排欧洲班轮舱位。\n祝商祺！",
      euHqEn: "Subject: Booking & FCA Handover Confirmed — PO-2026-88\nDear Logistics Director,\nSupplier in Shenzhen has agreed to FCA handover at our nominated forwarder's CFS, securing full Chinese export clearance while retaining carrier control on our Antwerp ocean contract. Verified packing list & VGM arrive Friday."
    },
    {
      id: "email-02",
      topic: "2. Urgent Production Delay + Partial Air Split",
      factoryZh: "主题：关于第4批配件交期调整及分批空运方案\n李经理：\n得悉芯片缺料导致大货延迟5天。为避免德国生产线停工，请先行分批发出500套（计费重约320公斤）转走香港空运，余货按原定海运40HQ走船。",
      euHqEn: "Subject: Mitigation Plan for Component Delay — Air/Sea Split\nTeam,\nTo prevent assembly downtime in Munich following a 5-day upstream component slip in Dongguan, I arranged a partial air lift (500 pcs / 320 kg CW via HKG → FRA) landing in 4 days, keeping the remaining bulk volume on our scheduled 40HQ sailing."
    },
    {
      id: "email-03",
      topic: "3. Pre-Shipment Inspection (AQL 2.5) Hold & Rework",
      factoryZh: "主题：PSI抽检结果与返工（Rework）要求\n王厂长您好：\n第三方质检反馈外箱受潮且金属件划痕超出 AQL 2.5 容许范围。请安排车间两天内完成筛选返工及更换防潮包装，复检合格后我司财务即刻打出70%尾款。",
      euHqEn: "Subject: QC Hold & Rework Action — Batch #114 Blocked Prior to Balance Release\nQuality Lead,\nThird-party PSI flagged moisture damage and surface scratches above AQL 2.5. Per contract milestones, 70% balance remittance is frozen until the factory completes carton replacement and passes re-inspection within 48 hours."
    },
    {
      id: "email-04",
      topic: "4. EU ICS2 Pre-Loading HS Code Audit",
      factoryZh: "主题：欧洲新规 ICS2 海关预报六位HS编码核对\n操作员您好：\n自2025/2026年起，发往欧盟所有海运/铁路货物装船前必须提交6位精确HS编码及完整品名（严禁仅填“零件/百货”）。请今日补齐装箱单明细以免影响放行。",
      euHqEn: "Subject: EU ICS2 Pre-Loading Compliance Check Passed\nTrade Compliance Team,\nAll 18 SKUs from our Yiwu consolidation have been scrubbed against 6-digit WCO HS taxonomy and EORI receiver records prior to ENS submission, eliminating ICS2 referral holds."
    },
    {
      id: "email-05",
      topic: "5. Silk Road Rail Express Routing Proposal",
      factoryZh: "主题：西安—杜伊斯堡中欧班列舱位锁定申请\n班列操作：\n请预留下周三西安港发往杜伊斯堡的40尺高柜，随货附合规 CE 声明及非危险品鉴定书（如有锂电池请提前申报UN3481）。",
      euHqEn: "Subject: CR Express Rail Slot Secured (Xi'an → Duisburg)\nPlanning Lead,\nSecured 40HQ block-train allocation departing next Wednesday (transit ~16 days vs 38 days ocean), cutting working-capital tie-up while meeting Scope 3 carbon targets."
    },
    {
      id: "email-06",
      topic: "6. Free Time & Detention Mitigation at Rotterdam",
      factoryZh: "主题：提单修改与目的港免箱期（Free Time）确认\n订舱代理：\n请在 MBL 备注栏显明“14 Days Combined Free Time DEM/DET at Rotterdam”，并核对电放保函抬头无误。",
      euHqEn: "Subject: MBL Audited — 14 Days Combined DEM/DET Locked\nFinance & Port Ops,\nConfirmed 14 combined free days on final MBL #CN99201 entering Rotterdam, shielding our Dutch warehouse team against winter terminal congestion."
    },
    {
      id: "email-07",
      topic: "7. Vietnamese Factory Origin Check under EVFTA",
      factoryZh: "主题：越南工厂辅料采购与原产地合规说明\n东莞采购部：\n因成品需申领越南 EUR.1 优惠产地证免税进驻欧盟，该批面料需严控非原产成分比例不超过EVFTA规则上限。",
      euHqEn: "Subject: EVFTA Origin Threshold Verified for Haiphong Assembly\nEU Customs Desk,\nBill-of-Materials origin audit confirms regional processing exceeds EVFTA value-added thresholds; supplier EUR.1 / REX invoice declaration will unlock 0% import tariff upon arrival in Antwerp."
    },
    {
      id: "email-08",
      topic: "8. Chinese New Year Cutoff & Safety Buffer",
      factoryZh: "主题：春节停工前最后一班船（Cutoff）排产备忘\n各合作厂家：\n距离春节放假仅余三周，请于1月15日前完成大货入仓以便赶上节前末班开船，避免节后复工招工潮引发交期断档。",
      euHqEn: "Subject: CNY Factory Shutdown Buffer & Q1 Safety Stock Plan\nMerchandising Director,\nCompleted final pre-CNY sailings out of Ningbo/Shenzhen covering 6 weeks of European safety stock, bridging the post-holiday labor ramp smoothly."
    }
  ];

  // Silk Road Historic-to-Modern 2026 Continuum Nodes
  var SILK_ROAD_CONTINUUM = [
    {
      eraHub: "Trường An (Tây An) · 长安 → 西安",
      ancientRoleVi: "Kinh đô Đường–Hán xuất phát đoàn lạc đà mang tơ lụa, gốm Tam Thái, giấy qua Hành lang Hà Tây.",
      modernRoleVi: "Cảng cạn Quốc tế Tây An — ga khởi hành số 1 của Tàu Liên vận Trung–Âu (中欧班列) chạy thẳng Ba Lan & Đức.",
      modernRoleEn: "Xi'an International Port anchors CR Express high-frequency block trains into Europe."
    },
    {
      eraHub: "Đôn Hoàng – Tân Cương (Ngọc Môn Quan / Hoắc Nhĩ Quả Tư)",
      ancientRoleVi: "Trạm kiểm soát thương đội, trao đổi phiên dịch đa ngữ (Chữ Hán – Phạn – Túc Đặc – Ba Tư) và hộ chiếu thông hành cổ.",
      modernRoleVi: "Cửa khẩu liên vận đường sắt Hoắc Nhĩ Quả Tư / Alashankou chuyển đổi khổ ray 1435mm ↔ 1520mm & thông quan số.",
      modernRoleEn: "Khorgos & Alashankou execute rapid rail break-of-gauge cranes and digital customs clearance."
    },
    {
      eraHub: "Tuyền Châu – Quảng Châu – Vịnh Bắc Bộ · 海上丝路",
      ancientRoleVi: "Cảng Thị Tống–Nguyên nơi gốm Thanh Hoa, gốm Chu Đậu (Việt Nam) & tơ lụa vượt eo Malacca tới Ba Tư và Địa Trung Hải.",
      modernRoleVi: "Hệ thống Siêu cảng Container (Thượng Hải, Ninh Ba, Thâm Quyến – Diêm Điền, Hải Phòng) nối Kênh đào Suez tới Rotterdam/Antwerp.",
      modernRoleEn: "Mega container ports directly connect Vietnam & South China manufacturing with Northern Europe."
    }
  ];

  window.CCE_TRADE_TRILINGUAL_V4 = {
    terms: TERMS,
    dialogues: DIALOGUES,
    emailPairs: EMAIL_PAIRS,
    silkRoadLogisticsContinuum: SILK_ROAD_CONTINUUM
  };
})();
