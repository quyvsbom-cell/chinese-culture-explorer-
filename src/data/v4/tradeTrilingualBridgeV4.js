(function () {
  "use strict";

  window.CCE_V4_TRADE_BRIDGE = {
    logisticsTerms100: [
      {
        id: "lt-001",
        cat: "incoterms",
        zh: "工厂交货",
        pinyin: "gōngchǎng jiāohuò",
        en: "EXW (Ex Works)",
        vi: "Giao tại xưởng (EXW)",
        contextNoteEn: "Minimum seller obligation; buyer handles export clearance, loading, and main carriage from the factory gate.",
        contextNoteVi: "Nghĩa vụ tối thiểu của người bán; người mua tự chịu thủ tục xuất khẩu, bốc hàng và vận tải chính từ cửa nhà máy."
      },
      {
        id: "lt-002",
        cat: "incoterms",
        zh: "货交承运人",
        pinyin: "huò jiāo chéngyùnrén",
        en: "FCA (Free Carrier)",
        vi: "Giao cho người chuyên chở (FCA)",
        contextNoteEn: "Preferred over FOB for containerized and rail cargo; risk transfers once goods are handed to the nominated carrier.",
        contextNoteVi: "Được ưu tiên hơn FOB cho hàng container và đường sắt; rủi ro chuyển giao khi hàng giao cho người chuyên chở chỉ định."
      },
      {
        id: "lt-003",
        cat: "incoterms",
        zh: "船边交货",
        pinyin: "chuánbiān jiāohuò",
        en: "FAS (Free Alongside Ship)",
        vi: "Giao dọc mạn tàu (FAS)",
        contextNoteEn: "Used strictly for sea and inland waterway bulk cargo placed alongside the vessel at the named port of shipment.",
        contextNoteVi: "Chỉ áp dụng cho vận tải biển và thủy nội địa hàng rời khi đặt hàng dọc mạn tàu tại cảng bốc quy định."
      },
      {
        id: "lt-004",
        cat: "incoterms",
        zh: "装运港船上交货",
        pinyin: "zhuāngyùngǎng chuánshàng jiāohuò",
        en: "FOB (Free On Board)",
        vi: "Giao lên tàu (FOB)",
        contextNoteEn: "Widely used in China export contracts; seller clears export customs and loads cargo on board at the port of loading.",
        contextNoteVi: "Phổ biến trong hợp đồng xuất khẩu Trung Quốc; người bán thông quan xuất khẩu và xếp hàng lên tàu tại cảng đi."
      },
      {
        id: "lt-005",
        cat: "incoterms",
        zh: "成本加运费",
        pinyin: "chéngběn jiā yùnfèi",
        en: "CFR (Cost and Freight)",
        vi: "Tiền hàng và cước phí (CFR)",
        contextNoteEn: "Seller pays ocean freight to the destination port, but risk passes to the buyer once loaded on board at origin.",
        contextNoteVi: "Người bán trả cước biển tới cảng đích, nhưng rủi ro chuyển sang người mua ngay khi hàng xếp lên tàu tại cảng đi."
      },
      {
        id: "lt-006",
        cat: "incoterms",
        zh: "成本、保险费加运费",
        pinyin: "chéngběn, bǎoxiǎnfèi jiā yùnfèi",
        en: "CIF (Cost, Insurance and Freight)",
        vi: "Tiền hàng, bảo hiểm và cước phí (CIF)",
        contextNoteEn: "Seller arranges ocean freight and minimum marine insurance (Clause C) to the named destination port.",
        contextNoteVi: "Người bán thu xếp cước biển và bảo hiểm hàng hải mức tối thiểu (Điều kiện C) tới cảng đến quy định."
      },
      {
        id: "lt-007",
        cat: "incoterms",
        zh: "运费付至",
        pinyin: "yùnfèi fùzhì",
        en: "CPT (Carriage Paid To)",
        vi: "Cước phí trả tới (CPT)",
        contextNoteEn: "Multimodal rule where seller pays freight to destination while risk transfers upon delivery to the first carrier.",
        contextNoteVi: "Quy tắc đa phương thức: người bán trả cước tới đích còn rủi ro chuyển khi giao hàng cho người chuyên chở đầu tiên."
      },
      {
        id: "lt-008",
        cat: "incoterms",
        zh: "运费和保险费付至",
        pinyin: "yùnfèi hé bǎoxiǎnfèi fùzhì",
        en: "CIP (Carriage and Insurance Paid To)",
        vi: "Cước phí và bảo hiểm trả tới (CIP)",
        contextNoteEn: "Under Incoterms 2020, CIP requires all-risks insurance coverage (Institute Cargo Clauses A) for multimodal transport.",
        contextNoteVi: "Theo Incoterms 2020, CIP yêu cầu bảo hiểm mọi rủi ro (Điều kiện A) cho vận tải đa phương thức."
      },
      {
        id: "lt-009",
        cat: "incoterms",
        zh: "目的地交货",
        pinyin: "mùdìdì jiāohuò",
        en: "DAP (Delivered at Place)",
        vi: "Giao tại nơi đến (DAP)",
        contextNoteEn: "Seller delivers cargo ready for unloading at the named European warehouse; buyer handles import customs and duties.",
        contextNoteVi: "Người bán giao hàng sẵn sàng dỡ xuống tại kho Châu Âu chỉ định; người mua tự làm thủ tục và nộp thuế nhập khẩu."
      },
      {
        id: "lt-010",
        cat: "incoterms",
        zh: "卸货地交货",
        pinyin: "xièhuòdì jiāohuò",
        en: "DPU (Delivered at Place Unloaded)",
        vi: "Giao tại nơi đến đã dỡ xuống (DPU)",
        contextNoteEn: "The only Incoterms 2020 rule requiring the seller to bear the cost and risk of unloading cargo at destination.",
        contextNoteVi: "Quy tắc duy nhất trong Incoterms 2020 yêu cầu người bán chịu chi phí và rủi ro dỡ hàng tại điểm đích."
      },
      {
        id: "lt-011",
        cat: "incoterms",
        zh: "完税后交货",
        pinyin: "wánshuì hòu jiāohuò",
        en: "DDP (Delivered Duty Paid)",
        vi: "Giao đã thông quan nhập khẩu (DDP)",
        contextNoteEn: "Maximum seller obligation including import customs clearance, EU VAT, and duties; requires fiscal representation in the EU.",
        contextNoteVi: "Nghĩa vụ tối đa của người bán gồm thông quan nhập khẩu, thuế VAT EU và thuế nhập; đòi hỏi đại diện thuế tại EU."
      },
      {
        id: "lt-012",
        cat: "incoterms",
        zh: "风险转移点",
        pinyin: "fēngxiǎn zhuǎnyí diǎn",
        en: "Point of Risk Transfer",
        vi: "Điểm chuyển giao rủi ro",
        contextNoteEn: "Exact physical milestone where loss or damage liability shifts from exporter to importer under the chosen Incoterm.",
        contextNoteVi: "Mốc vật lý chính xác mà trách nhiệm tổn thất hoặc hư hại hàng hóa chuyển từ nhà xuất khẩu sang nhà nhập khẩu."
      },
      {
        id: "lt-013",
        cat: "incoterms",
        zh: "装运港",
        pinyin: "zhuāngyùngǎng",
        en: "Port of Loading (POL)",
        vi: "Cảng xếp hàng (POL)",
        contextNoteEn: "Origin seaport where export cargo is loaded onto the ocean vessel, such as Ningbo, Yantian, or Hai Phong.",
        contextNoteVi: "Cảng biển xuất phát nơi hàng xuất khẩu được xếp lên tàu biển, như Ninh Ba, Diêm Điền hoặc Hải Phòng."
      },
      {
        id: "lt-014",
        cat: "incoterms",
        zh: "卸货港",
        pinyin: "xièhuògǎng",
        en: "Port of Discharge (POD)",
        vi: "Cảng dỡ hàng (POD)",
        contextNoteEn: "Destination seaport where the ocean carrier unloads containers, such as Rotterdam, Hamburg, or Antwerp.",
        contextNoteVi: "Cảng biển đích nơi hãng tàu biển dỡ container xuống, như Rotterdam, Hamburg hoặc Antwerp."
      },
      {
        id: "lt-015",
        cat: "incoterms",
        zh: "指定目的地",
        pinyin: "zhǐdìng mùdìdì",
        en: "Named Place of Destination",
        vi: "Địa điểm đến quy định",
        contextNoteEn: "Must be specified with street-level precision in C- and D-group contracts to prevent hidden inland haulage disputes.",
        contextNoteVi: "Cần ghi rõ tới địa chỉ cụ thể trong hợp đồng nhóm C và D để tránh tranh chấp chi phí kéo nội địa."
      },
      {
        id: "lt-016",
        cat: "incoterms",
        zh: "出口报关义务",
        pinyin: "chūkǒu bàoguān yìwù",
        en: "Export Formalities Responsibility",
        vi: "Nghĩa vụ thủ tục xuất khẩu",
        contextNoteEn: "Assigned to the seller under all Incoterms 2020 rules except EXW, where the foreign buyer faces local licensing hurdles.",
        contextNoteVi: "Thuộc về người bán trong mọi quy tắc Incoterms 2020 trừ EXW, nơi người mua nước ngoài khó tự khai báo nội địa."
      },
      {
        id: "lt-017",
        cat: "incoterms",
        zh: "进口清关责任",
        pinyin: "jìnkǒu qīngguān zérèn",
        en: "Import Clearance Responsibility",
        vi: "Trách nhiệm thông quan nhập khẩu",
        contextNoteEn: "Borne by the EU importer under all rules except DDP, ensuring compliance with EORI and national customs declarations.",
        contextNoteVi: "Do nhà nhập khẩu EU đảm nhận ở mọi quy tắc trừ DDP, nhằm đáp ứng mã EORI và khai báo hải quan quốc gia."
      },
      {
        id: "lt-018",
        cat: "incoterms",
        zh: "起运前内陆运输",
        pinyin: "qǐyùn qián nèilù yùnshū",
        en: "Pre-Carriage (Origin Drayage)",
        vi: "Vận tải chặng đầu nội địa",
        contextNoteEn: "Trucking or barge movement from an inland Chinese factory to the gateway port or rail hub prior to main haulage.",
        contextNoteVi: "Chặng xe tải hoặc sà lan từ nhà máy nội địa Trung Quốc ra cảng cửa ngõ hoặc ga đường sắt trước chặng chính."
      },
      {
        id: "lt-019",
        cat: "incoterms",
        zh: "目的港内陆转运",
        pinyin: "mùdìgǎng nèilù zhuǎnyùn",
        en: "On-Carriage (Destination Haulage)",
        vi: "Vận tải chặng cuối nội địa",
        contextNoteEn: "Rail, barge, or road delivery from European gateway ports like Rotterdam to inland distribution centers.",
        contextNoteVi: "Vận chuyển bằng tàu hỏa, sà lan hoặc xe tải từ cảng cửa ngõ Châu Âu như Rotterdam tới trung tâm phân phối nội địa."
      },
      {
        id: "lt-020",
        cat: "incoterms",
        zh: "码头操作费",
        pinyin: "mǎtóu cāozuòfèi",
        en: "THC (Terminal Handling Charge)",
        vi: "Phụ phí xếp dỡ tại cảng (THC)",
        contextNoteEn: "Port terminal fee for container lift-on, lift-off, and yard handling; split by origin and destination under FOB terms.",
        contextNoteVi: "Phí cảng bãi cho việc nâng hạ và xử lý container; được phân tách giữa cảng đi và cảng đến theo điều kiện FOB."
      },
      {
        id: "lt-021",
        cat: "ocean_rail",
        zh: "上海洋山深水港",
        pinyin: "Shànghǎi Yángshān shēnshuǐgǎng",
        en: "Shanghai Yangshan Deep-Water Port",
        vi: "Cảng nước sâu Dương Sơn Thượng Hải",
        contextNoteEn: "Flagship automated deep-water terminal of the Port of Shanghai, anchoring Yangtze River Delta exports to Europe.",
        contextNoteVi: "Cảng nước sâu tự động hóa hàng đầu thuộc Cảng Thượng Hải, đầu mối xuất khẩu trọng yếu vùng Đồng bằng Trường Giang đi Châu Âu."
      },
      {
        id: "lt-022",
        cat: "ocean_rail",
        zh: "宁波舟山港",
        pinyin: "Níngbō Zhōushān gǎng",
        en: "Ningbo-Zhoushan Port",
        vi: "Cảng Ninh Ba – Chu Sơn",
        contextNoteEn: "Major Zhejiang deep-water hub handling bulk and containerized exports from Yiwu, Ningbo, and Hangzhou factories.",
        contextNoteVi: "Cảng nước sâu trọng điểm tỉnh Chiết Giang, gom hàng rời và container xuất khẩu từ cụm nhà máy Nghĩa Ô, Ninh Ba và Hàng Châu."
      },
      {
        id: "lt-023",
        cat: "ocean_rail",
        zh: "深圳盐田港",
        pinyin: "Shēnzhèn Yántián gǎng",
        en: "Yantian Port (Shenzhen)",
        vi: "Cảng Diêm Điền (Thâm Quyến)",
        contextNoteEn: "Primary Greater Bay Area deep-water gateway for electronics, e-commerce, and direct ultra-large container vessels to Europe.",
        contextNoteVi: "Cảng cửa ngõ nước sâu chủ lực vùng Vịnh Lớn cho hàng điện tử, thương mại điện tử và tàu mẹ cỡ lớn đi thẳng Châu Âu."
      },
      {
        id: "lt-024",
        cat: "ocean_rail",
        zh: "鹿特丹港",
        pinyin: "Lùtèdān gǎng",
        en: "Port of Rotterdam",
        vi: "Cảng Rotterdam",
        contextNoteEn: "Europe's largest seaport and primary maritime entry point for Asian container loops connecting to the Rhine hinterland.",
        contextNoteVi: "Cảng biển lớn nhất Châu Âu và cửa ngõ đường biển hàng đầu đón tuyến tàu container Á–Âu kết nối nội địa sông Rhine."
      },
      {
        id: "lt-025",
        cat: "ocean_rail",
        zh: "汉堡港",
        pinyin: "Hànbǎo gǎng",
        en: "Port of Hamburg",
        vi: "Cảng Hamburg",
        contextNoteEn: "Germany's leading rail-connected seaport, serving Central and Eastern European industrial supply chains from China.",
        contextNoteVi: "Cảng biển kết nối đường sắt hàng đầu nước Đức, phục vụ chuỗi cung ứng công nghiệp Trung và Đông Âu từ Trung Quốc."
      },
      {
        id: "lt-026",
        cat: "ocean_rail",
        zh: "安特卫普-布鲁日港",
        pinyin: "Āntèwèipǔ-Bùlǔrì gǎng",
        en: "Port of Antwerp-Bruges",
        vi: "Cảng Antwerp-Bruges",
        contextNoteEn: "Key Belgian deep-water and petrochemical logistics hub providing rapid access to Benelux, France, and western Germany.",
        contextNoteVi: "Trung tâm cảng nước sâu và hóa dầu trọng điểm của Bỉ, kết nối nhanh tới khối Benelux, Pháp và miền tây nước Đức."
      },
      {
        id: "lt-027",
        cat: "ocean_rail",
        zh: "海防港",
        pinyin: "Hǎifáng gǎng",
        en: "Hai Phong Port (Lach Huyen)",
        vi: "Cảng Hải Phòng (Lạch Huyện)",
        contextNoteEn: "Northern Vietnam's main international maritime gateway for China-Vietnam component imports and direct EU/US mother vessels.",
        contextNoteVi: "Cửa ngõ hàng hải quốc tế chính miền Bắc Việt Nam đón linh kiện từ Trung Quốc và tàu mẹ đi thẳng Châu Âu, Hoa Kỳ."
      },
      {
        id: "lt-028",
        cat: "ocean_rail",
        zh: "吉莱港",
        pinyin: "Jílái gǎng",
        en: "Cat Lai Port (Ho Chi Minh City)",
        vi: "Cảng Tân Cảng – Cát Lái (TP.HCM)",
        contextNoteEn: "Southern Vietnam's highest-volume container terminal, linking manufacturing parks with Cai Mep deep-water feeder networks.",
        contextNoteVi: "Cảng container có sản lượng lớn nhất miền Nam Việt Nam, kết nối khu công nghiệp với mạng lưới sà lan ra cảng nước sâu Cái Mép."
      },
      {
        id: "lt-029",
        cat: "ocean_rail",
        zh: "中欧班列",
        pinyin: "Zhōng-Ōu bānliè",
        en: "China-Europe Railway Express",
        vi: "Tàu liên vận đường sắt Trung–Âu",
        contextNoteEn: "Cross-border block train network linking hubs such as Chongqing, Xi'an, and Yiwu with Duisburg, Malaszewicze, and Hamburg.",
        contextNoteVi: "Mạng lưới tàu hàng chuyên tuyến kết nối Trùng Khánh, Tây An, Nghĩa Ô với Duisburg, Malaszewicze và Hamburg."
      },
      {
        id: "lt-030",
        cat: "ocean_rail",
        zh: "整箱货 / 拼箱货",
        pinyin: "zhěngxiānghuò / pīnxiānghuò",
        en: "FCL / LCL (Full vs. Less than Container Load)",
        vi: "Hàng nguyên container (FCL) / Hàng lẻ (LCL)",
        contextNoteEn: "FCL dedicates one container to a single shipper; LCL consolidates multiple shippers' cargo inside a shared container.",
        contextNoteVi: "FCL dành riêng container cho một chủ hàng; LCL gom hàng của nhiều chủ hàng trong cùng một container."
      },
      {
        id: "lt-031",
        cat: "ocean_rail",
        zh: "海运提单",
        pinyin: "hǎiyùn tídān",
        en: "Bill of Lading (B/L)",
        vi: "Vận đơn đường biển (B/L)",
        contextNoteEn: "Serves three legal roles: receipt of goods, evidence of contract of carriage, and negotiable document of title.",
        contextNoteVi: "Đảm nhiệm ba chức năng pháp lý: biên lai nhận hàng, bằng chứng hợp đồng vận tải và chứng từ sở hữu hàng hóa."
      },
      {
        id: "lt-032",
        cat: "ocean_rail",
        zh: "电放",
        pinyin: "diànfàng",
        en: "Telex Release (Surrendered B/L)",
        vi: "Điện giao hàng (Telex Release)",
        contextNoteEn: "Electronic instruction from origin agent authorizing cargo release at destination without presenting paper original B/Ls.",
        contextNoteVi: "Chỉ thị điện tử từ đại lý cảng đi cho phép giao hàng tại cảng đến mà không cần xuất trình vận đơn gốc bằng giấy."
      },
      {
        id: "lt-033",
        cat: "ocean_rail",
        zh: "预计离港 / 预计到港",
        pinyin: "yùjì lígǎng / yùjì dàogǎng",
        en: "ETD / ETA (Estimated Time of Departure / Arrival)",
        vi: "Thời gian tàu chạy / tàu đến dự kiến (ETD / ETA)",
        contextNoteEn: "Core schedule benchmarks monitored daily to manage factory readiness, EU inventory buffers, and customs pre-filing.",
        contextNoteVi: "Mốc lịch trình cốt lõi theo dõi hằng ngày để điều phối sản xuất, tồn kho Châu Âu và khai báo hải quan trước."
      },
      {
        id: "lt-034",
        cat: "ocean_rail",
        zh: "截关 / 截单 / 截港",
        pinyin: "jiéguān / jiédān / jiégǎng",
        en: "Cut-off (Customs / SI / CY Gate-in Cut-off)",
        vi: "Giờ cắt máng (Cắt hải quan / Cắt chứng từ / Cắt hạ bãi)",
        contextNoteEn: "Strict carrier and customs deadlines; missing any cut-off rolls the container to the next weekly vessel.",
        contextNoteVi: "Hạn chót nghiêm ngặt của hãng tàu và hải quan; trễ bất kỳ mốc nào khiến container bị rớt sang chuyến tàu tuần sau."
      },
      {
        id: "lt-035",
        cat: "ocean_rail",
        zh: "核实总重",
        pinyin: "héshí zǒngzhòng",
        en: "VGM (Verified Gross Mass)",
        vi: "Khối lượng toàn bộ container đã xác minh (VGM)",
        contextNoteEn: "Mandatory SOLAS declaration of container cargo weight plus tare weight required before vessel stowage planning.",
        contextNoteVi: "Khai báo bắt buộc theo công ước SOLAS gồm trọng lượng hàng cộng vỏ container trước khi lập sơ đồ xếp tàu."
      },
      {
        id: "lt-036",
        cat: "ocean_rail",
        zh: "滞港费",
        pinyin: "zhìgǎngfèi",
        en: "Demurrage",
        vi: "Phí lưu bãi cảng (Demurrage)",
        contextNoteEn: "Charge levied when a full import container remains inside the port terminal beyond the agreed free-time days.",
        contextNoteVi: "Phí phát sinh khi container hàng nhập nằm trong bãi cảng vượt quá số ngày miễn lưu bãi đã thỏa thuận."
      },
      {
        id: "lt-037",
        cat: "ocean_rail",
        zh: "滞箱费",
        pinyin: "zhìxiāngfèi",
        en: "Detention",
        vi: "Phí lưu vỏ container (Detention)",
        contextNoteEn: "Charge incurred when the consignee holds the carrier's container outside the port terminal past the free equipment period.",
        contextNoteVi: "Phí phát sinh khi người nhận giữ vỏ container của hãng tàu ngoài phạm vi cảng quá thời hạn miễn phí."
      },
      {
        id: "lt-038",
        cat: "ocean_rail",
        zh: "国际铁路联运运单",
        pinyin: "guójì tiělù liányùn yùndān",
        en: "CIM/SMGS Railway Consignment Note",
        vi: "Vận đơn đường sắt liên vận quốc tế (CIM/SMGS)",
        contextNoteEn: "Unified non-negotiable rail transport document harmonizing European CIM and Eurasian SMGS legal regimes.",
        contextNoteVi: "Chứng từ vận tải đường sắt không chuyển nhượng thống nhất chế độ pháp lý CIM Châu Âu và SMGS Á–Âu."
      },
      {
        id: "lt-039",
        cat: "ocean_rail",
        zh: "中转",
        pinyin: "zhōngzhuǎn",
        en: "Transshipment",
        vi: "Chuyển tải (Transshipment)",
        contextNoteEn: "Transferring containers from a feeder vessel to a mother vessel at hubs like Singapore, Busan, or Shanghai.",
        contextNoteVi: "Chuyển container từ tàu nhánh sang tàu mẹ tại các cảng trung chuyển như Singapore, Busan hoặc Thượng Hải."
      },
      {
        id: "lt-040",
        cat: "ocean_rail",
        zh: "标准箱 / 40英尺箱",
        pinyin: "biāozhǔnxiāng / sìshí yīngchǐ xiāng",
        en: "TEU / FEU (Twenty- / Forty-Foot Equivalent Unit)",
        vi: "Đơn vị container 20 feet (TEU) / 40 feet (FEU)",
        contextNoteEn: "Standard maritime volume metrics used in port throughput statistics, vessel capacity, and annual ocean contracts.",
        contextNoteVi: "Đơn vị đo lường sản lượng hàng hải tiêu chuẩn dùng trong thống kê cảng, sức chở tàu và hợp đồng cước năm."
      },
      {
        id: "lt-041",
        cat: "customs_origin",
        zh: "商品编码",
        pinyin: "shāngpǐn biānmǎ",
        en: "HS Code (Harmonized System Code)",
        vi: "Mã số hàng hóa (HS Code)",
        contextNoteEn: "Six-digit global tariff classification extended to 8-digit CN codes in the EU and 8-digit/10-digit national codes in Vietnam and China.",
        contextNoteVi: "Mã phân loại thuế quan quốc tế 6 chữ số, mở rộng thành 8 số CN tại EU và 8–10 số tại Việt Nam và Trung Quốc."
      },
      {
        id: "lt-042",
        cat: "customs_origin",
        zh: "报关 / 清关",
        pinyin: "bàoguān / qīngguān",
        en: "Customs Declaration / Customs Clearance",
        vi: "Khai báo hải quan / Thông quan",
        contextNoteEn: "Formal submission of commercial documents and tariff entries to authorize legal export release or import entry.",
        contextNoteVi: "Nộp hồ sơ thương mại và tờ khai thuế quan chính thức để được phê duyệt xuất khẩu hoặc giải phóng hàng nhập khẩu."
      },
      {
        id: "lt-043",
        cat: "customs_origin",
        zh: "中国-东盟原产地证书",
        pinyin: "Zhōngguó-Dōngméng yuánchǎndì zhèngshū",
        en: "Certificate of Origin Form E (ACFTA)",
        vi: "Giấy chứng nhận xuất xứ Mẫu E (C/O Form E)",
        contextNoteEn: "Preferential origin certificate granting reduced or zero tariff rates on qualifying trade between China and ASEAN.",
        contextNoteVi: "Chứng nhận xuất xứ ưu đãi giúp hưởng thuế suất giảm hoặc bằng không trong thương mại Trung Quốc – ASEAN."
      },
      {
        id: "lt-044",
        cat: "customs_origin",
        zh: "欧元区流动证书",
        pinyin: "Ōuyuánqū liúdòng zhèngshū",
        en: "EUR.1 Movement Certificate",
        vi: "Chứng nhận lưu hành hàng hóa EUR.1",
        contextNoteEn: "Preferential origin document used under EU free trade agreements such as EVFTA to claim preferential EU import duty.",
        contextNoteVi: "Chứng từ xuất xứ ưu đãi dùng trong các hiệp định thương mại tự do của EU như EVFTA để hưởng thuế nhập khẩu ưu đãi."
      },
      {
        id: "lt-045",
        cat: "customs_origin",
        zh: "注册出口商系统",
        pinyin: "zhùcè chūkǒushāng xìtǒng",
        en: "REX (Registered Exporter System)",
        vi: "Hệ thống tự chứng nhận xuất xứ REX",
        contextNoteEn: "EU self-certification mechanism allowing registered exporters to issue statements on origin directly on commercial invoices.",
        contextNoteVi: "Cơ chế tự chứng nhận của EU cho phép nhà xuất khẩu đã đăng ký phát hành tuyên bố xuất xứ ngay trên hóa đơn thương mại."
      },
      {
        id: "lt-046",
        cat: "customs_origin",
        zh: "区域全面经济伙伴关系原产地证",
        pinyin: "Qūyù Quánmiàn Jīngjì Huǒbàn Guānxì yuánchǎndì zhèng",
        en: "RCEP Certificate of Origin",
        vi: "Giấy chứng nhận xuất xứ RCEP",
        contextNoteEn: "Enables regional cumulation across China, Vietnam, ASEAN, Japan, South Korea, Australia, and New Zealand.",
        contextNoteVi: "Cho phép cộng gộp xuất xứ khu vực giữa Trung Quốc, Việt Nam, ASEAN, Nhật Bản, Hàn Quốc, Úc và New Zealand."
      },
      {
        id: "lt-047",
        cat: "customs_origin",
        zh: "商业发票",
        pinyin: "shāngyè fāpiào",
        en: "Commercial Invoice",
        vi: "Hóa đơn thương mại",
        contextNoteEn: "Core customs and accounting document stating buyer, seller, HS code, unit value, Incoterm, and country of origin.",
        contextNoteVi: "Chứng từ hải quan và kế toán cốt lõi ghi rõ người mua, người bán, mã HS, đơn giá, Incoterm và nước xuất xứ."
      },
      {
        id: "lt-048",
        cat: "customs_origin",
        zh: "装箱单",
        pinyin: "zhuāngxiāngdān",
        en: "Packing List",
        vi: "Phiếu đóng gói hàng hóa",
        contextNoteEn: "Itemizes carton counts, net weight, gross weight, dimensions, and shipping marks for customs inspection and warehousing.",
        contextNoteVi: "Liệt kê chi tiết số kiện, trọng lượng tịnh, trọng lượng gộp, kích thước và ký mã hiệu phục vụ kiểm hóa và nhập kho."
      },
      {
        id: "lt-049",
        cat: "customs_origin",
        zh: "海关估价",
        pinyin: "hǎiguān gūjià",
        en: "Customs Valuation",
        vi: "Trị giá tính thuế hải quan",
        contextNoteEn: "Determination of dutiable value based primarily on WTO transaction value plus relevant freight and insurance adjustments.",
        contextNoteVi: "Xác định trị giá tính thuế dựa trước hết vào trị giá giao dịch WTO cộng các khoản điều chỉnh cước và bảo hiểm."
      },
      {
        id: "lt-050",
        cat: "customs_origin",
        zh: "保税仓库",
        pinyin: "bǎoshuì cāngkù",
        en: "Bonded Warehouse",
        vi: "Kho ngoại quan / Kho bảo thuế",
        contextNoteEn: "Customs-supervised facility where imported goods are stored, sorted, or re-exported without immediate duty payment.",
        contextNoteVi: "Kho dưới sự giám sát hải quan cho phép lưu giữ, phân loại hoặc tái xuất hàng nhập mà chưa phải nộp thuế ngay."
      },
      {
        id: "lt-051",
        cat: "customs_origin",
        zh: "经认证的经营者",
        pinyin: "jīng rènzhèng de jīngyíngzhě",
        en: "AEO (Authorized Economic Operator)",
        vi: "Doanh nghiệp ưu tiên hải quan (AEO)",
        contextNoteEn: "Trusted-trader accreditation recognized under China-EU Mutual Recognition Agreements, lowering physical inspection rates.",
        contextNoteVi: "Chứng nhận doanh nghiệp tin cậy được công nhận lẫn nhau giữa Trung Quốc và EU, giúp giảm tỷ lệ kiểm hóa thực tế."
      },
      {
        id: "lt-052",
        cat: "customs_origin",
        zh: "预裁定",
        pinyin: "yù cáidìng",
        en: "Advance Ruling (BTI / BOI in EU)",
        vi: "Xác định trước mã số / xuất xứ hải quan",
        contextNoteEn: "Binding written customs decision on tariff classification or origin obtained prior to shipment to remove audit uncertainty.",
        contextNoteVi: "Quyết định bằng văn bản có giá trị ràng buộc của hải quan về mã HS hoặc xuất xứ xin trước khi giao hàng."
      },
      {
        id: "lt-053",
        cat: "customs_origin",
        zh: "出口退税",
        pinyin: "chūkǒu tuìshuì",
        en: "Export VAT Rebate",
        vi: "Hoàn thuế giá trị gia tăng xuất khẩu",
        contextNoteEn: "Chinese tax mechanism refunding input VAT to licensed exporters upon verified customs export and foreign exchange receipt.",
        contextNoteVi: "Cơ chế thuế Trung Quốc hoàn VAT đầu vào cho doanh nghiệp xuất khẩu sau khi xác nhận thông quan và thu ngoại tệ."
      },
      {
        id: "lt-054",
        cat: "customs_origin",
        zh: "原产地规则",
        pinyin: "yuánchǎndì guīzé",
        en: "Rules of Origin (ROO / RVC / CTC)",
        vi: "Quy tắc xuất xứ (ROO / Hàm lượng khu vực / Chuyển đổi mã số)",
        contextNoteEn: "Legal criteria defining whether goods assembled in Vietnam with Chinese inputs qualify for preferential FTA tariffs.",
        contextNoteVi: "Tiêu chí pháp lý xác định hàng lắp ráp tại Việt Nam dùng nguyên liệu Trung Quốc có đủ chuẩn hưởng thuế ưu đãi FTA hay không."
      },
      {
        id: "lt-055",
        cat: "customs_origin",
        zh: "熏蒸证明",
        pinyin: "xūnzhēng zhèngmíng",
        en: "Fumigation Certificate (ISPM 15)",
        vi: "Chứng thư hun trùng (ISPM 15)",
        contextNoteEn: "Confirms wooden pallets and crates have undergone heat treatment or fumigation to prevent pest introduction into the EU.",
        contextNoteVi: "Xác nhận pallet và kiện gỗ đã xử lý nhiệt hoặc hun trùng nhằm ngăn ngừa sinh vật gây hại xâm nhập vào EU."
      },
      {
        id: "lt-056",
        cat: "customs_origin",
        zh: "植物检疫证书",
        pinyin: "zhíwù jiǎnyì zhèngshū",
        en: "Phytosanitary Certificate",
        vi: "Giấy chứng nhận kiểm dịch thực vật",
        contextNoteEn: "Official quarantine document required for agricultural, timber, and botanical exports crossing China, Vietnam, and EU borders.",
        contextNoteVi: "Chứng từ kiểm dịch bắt buộc đối với nông sản, gỗ và sản phẩm thực vật lưu thông qua biên giới Trung–Việt–Âu."
      },
      {
        id: "lt-057",
        cat: "customs_origin",
        zh: "海关查验通道",
        pinyin: "hǎiguān cháyàn tōngdào",
        en: "Green / Yellow / Red Customs Channel",
        vi: "Phân luồng hải quan (Xanh / Vàng / Đỏ)",
        contextNoteEn: "Risk-based clearance routing from automated release (Green) to document review (Yellow) and physical cargo inspection (Red).",
        contextNoteVi: "Phân luồng theo quản lý rủi ro từ thông quan tự động (Xanh), kiểm tra hồ sơ (Vàng) đến kiểm hóa thực tế (Đỏ)."
      },
      {
        id: "lt-058",
        cat: "customs_origin",
        zh: "两用物项出口管制",
        pinyin: "liǎngyòng wùxiàng chūkǒu guǎnzhì",
        en: "Dual-Use Export Control",
        vi: "Kiểm soát xuất khẩu hàng hóa lưỡng dụng",
        contextNoteEn: "Licensing regime governing sensitive semiconductors, chemicals, and precision machinery with both civil and military applications.",
        contextNoteVi: "Chế độ cấp phép đối với chất bán dẫn, hóa chất và máy móc chính xác có khả năng ứng dụng cả dân sự lẫn quân sự."
      },
      {
        id: "lt-059",
        cat: "customs_origin",
        zh: "暂准进口单证册",
        pinyin: "zànzhǔn jìnkǒu dānzhèngcè",
        en: "ATA Carnet",
        vi: "Sổ tạm quản hàng hóa (ATA Carnet)",
        contextNoteEn: "International customs passport permitting duty-free temporary admission of trade fair samples and exhibition equipment.",
        contextNoteVi: "Hộ chiếu hải quan quốc tế cho phép tạm nhập miễn thuế hàng mẫu hội chợ và thiết bị trưng bày thương mại."
      },
      {
        id: "lt-060",
        cat: "customs_origin",
        zh: "反倾销税",
        pinyin: "fǎnqīngxiāoshuì",
        en: "Anti-Dumping Duty (ADD)",
        vi: "Thuế chống bán phá giá",
        contextNoteEn: "Trade defense tariff imposed by EU or national authorities on specific origin products sold below normal market value.",
        contextNoteVi: "Thuế phòng vệ thương mại do EU hoặc cơ quan quốc gia áp lên mặt hàng có xuất xứ cụ thể bán dưới giá trị thông thường."
      },
      {
        id: "lt-061",
        cat: "eu_compliance",
        zh: "欧盟CE认证标志",
        pinyin: "Ōuméng CE rènzhèng biāozhì",
        en: "CE Marking",
        vi: "Dấu hợp chuẩn CE Châu Âu",
        contextNoteEn: "Mandatory conformity mark confirming that electronics, machinery, or toys meet EU health, safety, and environmental directives.",
        contextNoteVi: "Dấu hợp chuẩn bắt buộc xác nhận thiết bị điện tử, máy móc hoặc đồ chơi đáp ứng yêu cầu an toàn và môi trường của EU."
      },
      {
        id: "lt-062",
        cat: "eu_compliance",
        zh: "欧盟化学品注册、评估、授权和限制法规",
        pinyin: "Ōuméng huàxuépǐn zhùcè pínggū shòuquán hé xiànzhì fǎguī",
        en: "REACH Regulation",
        vi: "Quy định quản lý hóa chất REACH",
        contextNoteEn: "EU chemical safety framework restricting hazardous substances in consumer goods, textiles, plastics, and industrial materials.",
        contextNoteVi: "Khung pháp lý an toàn hóa chất của EU kiểm soát các chất nguy hại trong hàng tiêu dùng, dệt may, nhựa và vật liệu công nghiệp."
      },
      {
        id: "lt-063",
        cat: "eu_compliance",
        zh: "限制有害物质指令",
        pinyin: "xiànzhì yǒuhài wùzhì zhǐlìng",
        en: "RoHS Directive",
        vi: "Chỉ thị hạn chế chất độc hại RoHS",
        contextNoteEn: "Restricts lead, mercury, cadmium, and specified flame retardants in electrical and electronic equipment sold in the EU.",
        contextNoteVi: "Hạn chế chì, thủy ngân, cadimi và các chất chống cháy quy định trong thiết bị điện và điện tử lưu hành tại EU."
      },
      {
        id: "lt-064",
        cat: "eu_compliance",
        zh: "欧盟碳边境调节机制",
        pinyin: "Ōuméng tàn biānjìng tiáojié jīzhì",
        en: "CBAM (Carbon Border Adjustment Mechanism)",
        vi: "Cơ chế điều chỉnh biên giới carbon (CBAM)",
        contextNoteEn: "EU carbon pricing instrument requiring verified embedded emissions data for imported steel, aluminum, cement, fertilizers, and hydrogen.",
        contextNoteVi: "Công cụ định giá carbon của EU yêu cầu dữ liệu phát thải tích hợp đã kiểm chứng với thép, nhôm, xi măng, phân bón và hydro nhập khẩu."
      },
      {
        id: "lt-065",
        cat: "eu_compliance",
        zh: "欧盟进口控制系统2",
        pinyin: "Ōuméng jìnkǒu kòngzhì xìtǒng èr",
        en: "ICS2 (Import Control System 2)",
        vi: "Hệ thống kiểm soát nhập khẩu EU giai đoạn 2 (ICS2)",
        contextNoteEn: "EU pre-arrival security program mandating detailed 6-digit HS codes and Entry Summary Declarations before loading.",
        contextNoteVi: "Chương trình an ninh trước khi hàng đến của EU bắt buộc khai mã HS 6 số chi tiết và tờ khai tóm tắt nhập cảnh trước khi xếp tàu."
      },
      {
        id: "lt-066",
        cat: "eu_compliance",
        zh: "第三方装船前验货",
        pinyin: "dìsānfāng zhuāngchuán qián yànhuò",
        en: "SGS / Third-Party Pre-Shipment Inspection (PSI)",
        vi: "Giám định trước giao hàng độc lập (SGS / PSI)",
        contextNoteEn: "Independent factory audit conducted when production is 80–100% packed to verify quality, labeling, and quantity before balance payment.",
        contextNoteVi: "Kiểm tra độc lập tại nhà máy khi hàng đóng gói xong 80–100% nhằm xác minh chất lượng, nhãn mác và số lượng trước khi thanh toán phần còn lại."
      },
      {
        id: "lt-067",
        cat: "eu_compliance",
        zh: "可接受质量限",
        pinyin: "kě jiēshòu zhìliàng xiàn",
        en: "AQL (Acceptable Quality Limit)",
        vi: "Giới hạn chất lượng chấp nhận (AQL)",
        contextNoteEn: "Statistical sampling standard (typically ISO 2859-1) defining maximum allowable critical, major, and minor defects per lot.",
        contextNoteVi: "Tiêu chuẩn lấy mẫu thống kê (thường theo ISO 2859-1) xác định số lỗi nghiêm trọng, lỗi lớn và lỗi nhỏ tối đa cho phép."
      },
      {
        id: "lt-068",
        cat: "eu_compliance",
        zh: "欧盟零毁林法案",
        pinyin: "Ōuméng líng huǐlín fǎ'àn",
        en: "EUDR (EU Deforestation Regulation)",
        vi: "Quy định chống phá rừng của EU (EUDR)",
        contextNoteEn: "Requires polygon geolocation traceability and deforestation-free due diligence for wood, rubber, coffee, cocoa, and soy imports.",
        contextNoteVi: "Yêu cầu truy xuất tọa độ vùng trồng và thẩm định không gây phá rừng với gỗ, cao su, cà phê, ca cao và đậu nành nhập vào EU."
      },
      {
        id: "lt-069",
        cat: "eu_compliance",
        zh: "欧盟经济运营商注册识别号",
        pinyin: "Ōuméng jīngjì yùnyíngshāng zhùcè shíbiéhào",
        en: "EORI Number",
        vi: "Mã số nhận diện nhà khai thác kinh tế EU (EORI)",
        contextNoteEn: "Unique customs identification number mandatory for every business importing into or exporting from the European Union.",
        contextNoteVi: "Mã số hải quan duy nhất bắt buộc đối với mọi doanh nghiệp thực hiện hoạt động xuất nhập khẩu tại Liên minh Châu Âu."
      },
      {
        id: "lt-070",
        cat: "eu_compliance",
        zh: "欧盟符合性声明",
        pinyin: "Ōuméng fúhéxìng shēngmíng",
        en: "EU Declaration of Conformity (DoC)",
        vi: "Tuyên bố hợp chuẩn EU (DoC)",
        contextNoteEn: "Signed legal document in which the manufacturer or authorized representative affirms full compliance with EU directives.",
        contextNoteVi: "Văn bản pháp lý có chữ ký xác nhận nhà sản xuất hoặc đại diện ủy quyền tuân thủ đầy đủ các chỉ thị kỹ thuật EU."
      },
      {
        id: "lt-071",
        cat: "eu_compliance",
        zh: "报废电子电气设备指令",
        pinyin: "bàofèi diànzǐ diànqì shèbèi zhǐlìng",
        en: "WEEE Directive",
        vi: "Chỉ thị quản lý rác thải điện – điện tử (WEEE)",
        contextNoteEn: "Obligates EU importers and e-commerce sellers of electronics to register for Extended Producer Responsibility recycling schemes.",
        contextNoteVi: "Buộc nhà nhập khẩu và người bán điện tử tại EU đăng ký trách nhiệm mở rộng của nhà sản xuất về thu hồi tái chế."
      },
      {
        id: "lt-072",
        cat: "eu_compliance",
        zh: "欧盟通用产品安全法规",
        pinyin: "Ōuméng tōngyòng chǎnpǐn ānquán fǎguī",
        en: "GPSR (General Product Safety Regulation)",
        vi: "Quy định an toàn sản phẩm chung của EU (GPSR)",
        contextNoteEn: "Requires an EU-based Responsible Person, traceable batch labels, and risk technical files for non-food consumer goods.",
        contextNoteVi: "Yêu cầu có Đại diện chịu trách nhiệm tại EU, nhãn truy xuất lô hàng và hồ sơ kỹ thuật rủi ro cho hàng tiêu dùng phi thực phẩm."
      },
      {
        id: "lt-073",
        cat: "eu_compliance",
        zh: "数字产品护照",
        pinyin: "shùzì chǎnpǐn hùzhào",
        en: "Digital Product Passport (DPP)",
        vi: "Hộ chiếu sản phẩm số (DPP)",
        contextNoteEn: "EU ecodesign initiative storing material composition, repairability, and lifecycle carbon data via scannable QR identifiers.",
        contextNoteVi: "Sáng kiến thiết kế sinh thái của EU lưu trữ thành phần vật liệu, khả năng sửa chữa và dấu chân carbon qua mã QR."
      },
      {
        id: "lt-074",
        cat: "eu_compliance",
        zh: "隐含碳排放核算",
        pinyin: "yǐnhán tàn páifàng hésuàn",
        en: "Embedded Emissions Reporting",
        vi: "Báo cáo phát thải carbon tích hợp",
        contextNoteEn: "Installation-level direct and indirect greenhouse gas calculation submitted by Chinese factories to EU CBAM declarants.",
        contextNoteVi: "Tính toán phát thải khí nhà kính trực tiếp và gián tiếp cấp nhà máy do xưởng Trung Quốc cung cấp cho nhà khai báo CBAM EU."
      },
      {
        id: "lt-075",
        cat: "eu_compliance",
        zh: "欧盟公告机构",
        pinyin: "Ōuméng gōnggào jīgòu",
        en: "EU Notified Body",
        vi: "Tổ chức đánh giá hợp chuẩn được chỉ định EU",
        contextNoteEn: "Accredited European conformity body designated to audit high-risk machinery, medical devices, and pressure equipment.",
        contextNoteVi: "Tổ chức đánh giá được Châu Âu công nhận để thẩm định máy móc rủi ro cao, thiết bị y tế và thiết bị áp lực."
      },
      {
        id: "lt-076",
        cat: "eu_compliance",
        zh: "高度关注物质",
        pinyin: "gāodù guānzhù wùzhì",
        en: "SVHC (Substances of Very High Concern)",
        vi: "Chất thuộc diện đặc biệt quan ngại (SVHC)",
        contextNoteEn: "Candidate list chemicals under REACH requiring SCIP database notification when exceeding 0.1% weight by weight.",
        contextNoteVi: "Danh mục hóa chất theo dõi theo REACH phải thông báo lên cơ sở dữ liệu SCIP khi vượt ngưỡng 0,1% khối lượng."
      },
      {
        id: "lt-077",
        cat: "eu_compliance",
        zh: "包装及包装废弃物法规",
        pinyin: "bāozhuāng jí bāozhuāng fèiqìwù fǎguī",
        en: "PPWR (Packaging and Packaging Waste Regulation)",
        vi: "Quy định bao bì và rác thải bao bì EU (PPWR)",
        contextNoteEn: "Sets mandatory recyclability, recycled-content thresholds, and empty-space limits for e-commerce and transport packaging.",
        contextNoteVi: "Đặt ngưỡng bắt buộc về khả năng tái chế, tỷ lệ nhựa tái sinh và giới hạn khoảng trống trong bao bì vận chuyển."
      },
      {
        id: "lt-078",
        cat: "eu_compliance",
        zh: "企业可持续发展尽职调查",
        pinyin: "qǐyè kěchíxù fāzhǎn jìnzhí diàochá",
        en: "CSDDD (Corporate Sustainability Due Diligence)",
        vi: "Thẩm định phát triển bền vững chuỗi cung ứng (CSDDD)",
        contextNoteEn: "EU framework requiring large enterprises to audit environmental and labor compliance across upstream Asian suppliers.",
        contextNoteVi: "Khung pháp lý EU yêu cầu tập đoàn lớn thẩm định tuân thủ môi trường và lao động ở các nhà cung cấp thượng nguồn Châu Á."
      },
      {
        id: "lt-079",
        cat: "eu_compliance",
        zh: "纠正与预防措施",
        pinyin: "jiūzhèng yǔ yùfáng cuòshī",
        en: "CAPA (Corrective and Preventive Action)",
        vi: "Hành động khắc phục và phòng ngừa (CAPA)",
        contextNoteEn: "Structured root-cause report submitted by a factory after a quality defect claim to prevent recurrence in future lots.",
        contextNoteVi: "Báo cáo phân tích nguyên nhân gốc do nhà máy nộp sau khiếu nại chất lượng nhằm ngăn lỗi tái diễn ở các lô tiếp theo."
      },
      {
        id: "lt-080",
        cat: "eu_compliance",
        zh: "技术档案",
        pinyin: "jìshù dàng'àn",
        en: "Technical Construction File (TCF)",
        vi: "Hồ sơ kỹ thuật hợp chuẩn (TCF)",
        contextNoteEn: "Compiled engineering drawings, test reports, BOM, and risk assessments retained for 10 years for EU market surveillance.",
        contextNoteVi: "Tập hợp bản vẽ kỹ thuật, báo cáo thử nghiệm, định mức vật tư và đánh giá rủi ro lưu giữ 10 năm phục vụ hậu kiểm EU."
      },
      {
        id: "lt-081",
        cat: "finance_risk",
        zh: "信用证",
        pinyin: "xìnyòngzhèng",
        en: "Letter of Credit (L/C)",
        vi: "Thư tín dụng (L/C)",
        contextNoteEn: "Irrevocable bank undertaking governed by UCP 600 guaranteeing payment once the exporter presents compliant documents.",
        contextNoteVi: "Cam kết không hủy ngang của ngân hàng theo UCP 600 bảo đảm thanh toán khi nhà xuất khẩu xuất trình bộ chứng từ phù hợp."
      },
      {
        id: "lt-082",
        cat: "finance_risk",
        zh: "电汇",
        pinyin: "diànhuì",
        en: "Telegraphic Transfer (T/T)",
        vi: "Chuyển tiền bằng điện (T/T)",
        contextNoteEn: "Direct electronic bank remittance commonly structured as a deposit upon order and balance against copy of Bill of Lading.",
        contextNoteVi: "Chuyển khoản ngân hàng điện tử thường chia tỷ lệ đặt cọc khi đặt hàng và thanh toán phần còn lại theo bản sao vận đơn."
      },
      {
        id: "lt-083",
        cat: "finance_risk",
        zh: "付款交单",
        pinyin: "fùkuǎn jiāodān",
        en: "D/P (Documents against Payment)",
        vi: "Nhờ thu trả tiền trao chứng từ (D/P)",
        contextNoteEn: "Documentary collection under URC 522 where the buyer's bank releases title documents only upon full payment.",
        contextNoteVi: "Nhờ thu kèm chứng từ theo URC 522: ngân hàng người mua chỉ trao bộ chứng từ sở hữu hàng khi người mua thanh toán đủ."
      },
      {
        id: "lt-084",
        cat: "finance_risk",
        zh: "承兑交单",
        pinyin: "chéngduì jiāodān",
        en: "D/A (Documents against Acceptance)",
        vi: "Nhờ thu chấp nhận thanh toán trao chứng từ (D/A)",
        contextNoteEn: "Buyer obtains shipping documents by accepting a time draft payable at maturity; carries higher credit risk for the exporter.",
        contextNoteVi: "Người mua nhận chứng từ sau khi ký chấp nhận hối phiếu kỳ hạn; tiềm ẩn rủi ro tín dụng cao hơn cho nhà xuất khẩu."
      },
      {
        id: "lt-085",
        cat: "finance_risk",
        zh: "赊账交易",
        pinyin: "shēzhàng jiāoyì",
        en: "Open Account (O/A)",
        vi: "Ghi sổ trả sau (Open Account)",
        contextNoteEn: "Goods ship ahead of payment on agreed net credit days; standard among long-standing European corporate buyers.",
        contextNoteVi: "Hàng giao trước và thanh toán theo kỳ hạn tín dụng thỏa thuận; phổ biến với khách hàng tập đoàn Châu Âu lâu năm."
      },
      {
        id: "lt-086",
        cat: "finance_risk",
        zh: "不可抗力",
        pinyin: "bùkě kànglì",
        en: "Force Majeure",
        vi: "Sự kiện bất khả kháng",
        contextNoteEn: "Contract clause excusing delayed performance due to extraordinary events beyond control, such as typhoons, war, or port blockades.",
        contextNoteVi: "Điều khoản hợp đồng miễn trừ trách nhiệm chậm trễ do biến cố ngoài tầm kiểm soát như bão lớn, xung đột hoặc phong tỏa cảng."
      },
      {
        id: "lt-087",
        cat: "finance_risk",
        zh: "共同海损",
        pinyin: "gòngtóng hǎisǔn",
        en: "General Average",
        vi: "Tổn thất chung hàng hải",
        contextNoteEn: "Maritime law principle requiring all cargo owners and the shipowner to share proportional losses from intentional rescue sacrifices.",
        contextNoteVi: "Nguyên tắc luật biển buộc mọi chủ hàng và chủ tàu cùng đóng góp tỷ lệ tổn thất khi hy sinh tự nguyện để cứu tàu chung."
      },
      {
        id: "lt-088",
        cat: "finance_risk",
        zh: "海运货物保险",
        pinyin: "hǎiyùn huòwù bǎoxiǎn",
        en: "Marine Cargo Insurance (ICC A / B / C)",
        vi: "Bảo hiểm hàng hóa vận chuyển đường biển",
        contextNoteEn: "Protects cargo value during ocean, rail, and inland transit; ICC A provides broadest all-risks coverage.",
        contextNoteVi: "Bảo vệ giá trị lô hàng trong chặng biển, đường sắt và nội địa; điều kiện ICC A cung cấp phạm vi bảo hiểm rộng nhất."
      },
      {
        id: "lt-089",
        cat: "finance_risk",
        zh: "备用信用证",
        pinyin: "bèiyòng xìnyòngzhèng",
        en: "Standby Letter of Credit (SBLC)",
        vi: "Thư tín dụng dự phòng (SBLC)",
        contextNoteEn: "Secondary bank guarantee drawn only if the buyer defaults on an open-account contract or milestone obligation.",
        contextNoteVi: "Bảo lãnh ngân hàng dự phòng chỉ được đòi tiền khi người mua vi phạm nghĩa vụ thanh toán theo hợp đồng trả sau."
      },
      {
        id: "lt-090",
        cat: "finance_risk",
        zh: "出口信用保险",
        pinyin: "chūkǒu xìnyòng bǎoxiǎn",
        en: "Trade Credit Insurance (e.g., Sinosure / Euler Hermes)",
        vi: "Bảo hiểm tín dụng thương mại xuất khẩu",
        contextNoteEn: "Insures exporters against commercial insolvency or political non-payment when offering competitive credit terms to EU buyers.",
        contextNoteVi: "Bảo vệ nhà xuất khẩu trước rủi ro mất khả năng thanh toán hoặc rủi ro chính trị khi cấp tín dụng cho khách hàng EU."
      },
      {
        id: "lt-091",
        cat: "finance_risk",
        zh: "银行保函",
        pinyin: "yínháng bǎohán",
        en: "Bank Guarantee (Performance / Advance Payment)",
        vi: "Bảo lãnh ngân hàng (Thực hiện hợp đồng / Hoàn ứng)",
        contextNoteEn: "Secures advance deposits or project delivery milestones in industrial machinery and EPC logistics contracts.",
        contextNoteVi: "Bảo đảm khoản tạm ứng hoặc tiến độ bàn giao trong các hợp đồng máy móc công nghiệp và dự án EPC."
      },
      {
        id: "lt-092",
        cat: "finance_risk",
        zh: "汇票",
        pinyin: "huìpiào",
        en: "Bill of Exchange (Sight / Usance Draft)",
        vi: "Hối phiếu (Trả ngay / Có kỳ hạn)",
        contextNoteEn: "Unconditional written order drawn by the exporter instructing the importer or bank to pay a specified sum at sight or maturity.",
        contextNoteVi: "Mệnh lệnh đòi tiền vô điều kiện do người xuất khẩu ký phát yêu cầu người nhập khẩu hoặc ngân hàng thanh toán."
      },
      {
        id: "lt-093",
        cat: "finance_risk",
        zh: "信用证不符点",
        pinyin: "xìnyòngzhèng bùfúdiǎn",
        en: "L/C Discrepancy",
        vi: "Bất hợp lệ chứng từ L/C",
        contextNoteEn: "Any mismatch between shipping documents and L/C terms, such as misspelled consignee names or late shipment dates.",
        contextNoteVi: "Bất kỳ sai lệch nào giữa bộ chứng từ giao hàng và điều khoản L/C, như sai tên người nhận hoặc giao hàng trễ hạn."
      },
      {
        id: "lt-094",
        cat: "finance_risk",
        zh: "外汇套期保值",
        pinyin: "wàihuì tàoqī bǎozhí",
        en: "FX Hedging (EUR/CNY & USD/VND Forward)",
        vi: "Phòng ngừa rủi ro tỷ giá (Hợp đồng kỳ hạn)",
        contextNoteEn: "Locks in forward exchange rates to protect thin logistics and manufacturing margins against currency volatility.",
        contextNoteVi: "Khóa tỷ giá kỳ hạn nhằm bảo vệ biên lợi nhuận logistics và sản xuất trước biến động tỷ giá ngoại tệ."
      },
      {
        id: "lt-095",
        cat: "finance_risk",
        zh: "运费预付 / 运费到付",
        pinyin: "yùnfèi yùfù / yùnfèi dàofù",
        en: "Freight Prepaid vs. Freight Collect",
        vi: "Cước trả trước / Cước trả sau tại cảng đích",
        contextNoteEn: "Indicates on the Bill of Lading whether the shipper (CIF/CFR) or consignee (FOB/EXW) settles ocean freight with the carrier.",
        contextNoteVi: "Thể hiện trên vận đơn việc người gửi hàng (CIF/CFR) hay người nhận hàng (FOB/EXW) thanh toán cước cho hãng tàu."
      },
      {
        id: "lt-096",
        cat: "finance_risk",
        zh: "逾期违约金",
        pinyin: "yúqī wéiyuējīn",
        en: "Liquidated Damages (Late Delivery Penalty)",
        vi: "Phạt vi phạm chậm giao hàng",
        contextNoteEn: "Pre-agreed percentage deduction per week of unexcused shipment delay stipulated in European retail purchase orders.",
        contextNoteVi: "Mức khấu trừ tỷ lệ phần trăm thỏa thuận trước cho mỗi tuần giao hàng trễ không có lý do bất khả kháng."
      },
      {
        id: "lt-097",
        cat: "finance_risk",
        zh: "所有权保留条款",
        pinyin: "suǒyǒuquán bǎoliú tiáokuǎn",
        en: "Retention of Title Clause",
        vi: "Điều khoản bảo lưu quyền sở hữu",
        contextNoteEn: "Stipulates that legal ownership of goods remains with the exporter until full invoice settlement is received.",
        contextNoteVi: "Quy định quyền sở hữu pháp lý đối với hàng hóa vẫn thuộc về nhà xuất khẩu cho đến khi nhận đủ thanh toán."
      },
      {
        id: "lt-098",
        cat: "finance_risk",
        zh: "国际商事仲裁",
        pinyin: "guójì shāngshì zhòngcái",
        en: "International Commercial Arbitration (ICC / CIETAC / VIAC)",
        vi: "Trọng tài thương mại quốc tế (ICC / CIETAC / VIAC)",
        contextNoteEn: "Enforceable cross-border dispute resolution mechanism under the New York Convention preferred over foreign court litigation.",
        contextNoteVi: "Cơ chế giải quyết tranh chấp xuyên biên giới có hiệu lực thi hành theo Công ước New York, được ưu tiên hơn kiện tụng tòa án."
      },
      {
        id: "lt-099",
        cat: "finance_risk",
        zh: "供应链韧性与多元布局",
        pinyin: "gōngyìngliàn rènxìng yǔ duōyuán bùjú",
        en: "Supply Chain Resilience (China-Plus-One)",
        vi: "Khả năng chống chịu chuỗi cung ứng (Trung Quốc + 1)",
        contextNoteEn: "Dual-sourcing model pairing Chinese upstream component scale with Southeast Asian assembly in hubs such as Vietnam.",
        contextNoteVi: "Mô hình đa dạng nguồn cung kết hợp quy mô linh kiện thượng nguồn Trung Quốc với lắp ráp tại Đông Nam Á như Việt Nam."
      },
      {
        id: "lt-100",
        cat: "finance_risk",
        zh: "单证一致原则",
        pinyin: "dānzhèng yīzhì yuánzé",
        en: "Strict Documentary Compliance",
        vi: "Nguyên tắc tuân thủ nghiêm ngặt bộ chứng từ",
        contextNoteEn: "Core trade finance rule requiring Commercial Invoice, Packing List, B/L, and C/O to align verbatim for bank settlement.",
        contextNoteVi: "Nguyên tắc tài trợ thương mại cốt lõi đòi hỏi hóa đơn, phiếu đóng gói, vận đơn và C/O khớp tuyệt đối để ngân hàng giải ngân."
      }
    ],

    workplaceDialogues12: [
      {
        id: "dlg-01",
        mode: "factory_zh",
        titleVi: "Đàm phán MOQ và báo giá FOB Ninh Ba với nhà máy Chiết Giang",
        titleEn: "Negotiating MOQ and FOB Ningbo Quotation with a Zhejiang Factory",
        zhScenarioTag: "宁波工厂 · 询盘与起订量谈判",
        turns: [
          {
            speakerEn: "EU Sourcing Coordinator",
            speakerZh: "欧洲采购协调员",
            zh: "王经理您好，我们欧洲客户希望首单按FOB宁波报价，但数量暂时低于贵司常规起订量。",
            pinyin: "Wáng jīnglǐ nín hǎo, wǒmen Ōuzhōu kèhù xīwàng shǒudān àn FOB Níngbō bàojià, dàn shùliàng zànshí dīyú guìsī chángguī qǐdìngliàng.",
            en: "Hello Manager Wang, our European client prefers an FOB Ningbo quotation for the trial order, though initial volume is below your standard MOQ.",
            vi: "Chào anh Vương, khách hàng Châu Âu của chúng tôi muốn báo giá FOB Ninh Ba cho đơn thử nghiệm, dù số lượng ban đầu thấp hơn MOQ tiêu chuẩn của quý công ty."
          },
          {
            speakerEn: "Zhejiang Factory Sales Director",
            speakerZh: "浙江工厂销售总监",
            zh: "理解您的试单需求。若采用标准中性包装并共用现有模具，我们可以配合降低首单起订量，但需确认交期。",
            pinyin: "Lǐjiě nín de shìdān xūqiú. Ruò cǎiyòng biāozhǔn zhōngxìng bāozhuāng bìng gòngyòng xiànyǒu mújù, wǒmen kěyǐ pèihé jiàngdī shǒudān qǐdìngliàng, dàn xū quèrèn jiāoqī.",
            en: "We understand the trial-order requirement. If we use standard neutral packaging and existing tooling, we can lower the initial MOQ subject to lead-time confirmation.",
            vi: "Chúng tôi hiểu nhu cầu đơn thử nghiệm. Nếu dùng bao bì trung tính tiêu chuẩn và khuôn sẵn có, chúng tôi có thể giảm MOQ đơn đầu với điều kiện chốt tiến độ giao hàng."
          },
          {
            speakerEn: "EU Sourcing Coordinator",
            speakerZh: "欧洲采购协调员",
            zh: "同意。请将出口报关费、宁波港码头操作费以及纸箱唛头要求全部列明在正式报价单中。",
            pinyin: "Tóngyì. Qǐng jiāng chūkǒu bàoguānfèi, Níngbōgǎng mǎtóu cāozuòfèi yǐjí zhǐxiāng màitóu yāoqiú quánbù lièmíng zài zhèngshì bàojiàdān zhōng.",
            en: "Agreed. Please itemize export customs fees, Ningbo terminal handling charges, and carton shipping marks clearly on the formal quotation.",
            vi: "Đồng ý. Vui lòng liệt kê rõ phí khai báo xuất khẩu, phí THC cảng Ninh Ba và quy cách ký mã hiệu thùng carton trong bảng báo giá chính thức."
          },
          {
            speakerEn: "Zhejiang Factory Sales Director",
            speakerZh: "浙江工厂销售总监",
            zh: "没问题，今天下班前我会把中英文对照的正式报价单与装柜体积表发给您审核。",
            pinyin: "Méi wèntí, jīntiān xiàbān qián wǒ huì bǎ Zhōng-Yīngwén duìzhào de zhèngshì bàojiàdān yǔ zhuāngguì tǐjībiǎo fā gěi nín shěnhé.",
            en: "No problem. Before end of business today, I will send the bilingual formal quotation and container loadability sheet for your review.",
            vi: "Không vấn đề gì. Trước giờ tan làm hôm nay, tôi sẽ gửi báo giá song ngữ chính thức và bảng tính thể tích đóng container để bạn duyệt."
          }
        ],
        keyVocabularyIds: ["lt-004", "lt-020", "lt-022", "lt-048"]
      },
      {
        id: "dlg-02",
        mode: "factory_zh",
        titleVi: "Xử lý gấp giờ cắt máng và nộp VGM tại cảng Diêm Điền",
        titleEn: "Managing Vessel Cut-off and VGM Submission at Yantian Port",
        zhScenarioTag: "盐田港 · 截关截港紧急协调",
        turns: [
          {
            speakerEn: "Logistics Operations Lead",
            speakerZh: "物流操作主管",
            zh: "陈主管，盐田去鹿特丹的本周母船提前了截港与VGM截止时间，工厂拖车何时能抵达堆场？",
            pinyin: "Chén zhǔguǎn, Yántián qù Lùtèdān de běnzhōu mǔchuán tíqián le jiégǎng yǔ VGM jiézhǐ shíjiān, gōngchǎng tuōchē héshí néng dǐdá duīchǎng?",
            en: "Supervisor Chen, this week's Yantian-to-Rotterdam mother vessel moved up its CY gate-in and VGM cut-off. When will the factory truck reach the yard?",
            vi: "Anh Trần, tàu mẹ tuần này từ Diêm Điền đi Rotterdam đã đẩy sớm giờ cắt bãi và hạn nộp VGM. Xe đầu kéo của nhà máy khi nào tới bãi?"
          },
          {
            speakerEn: "Shenzhen Forwarder Coordinator",
            speakerZh: "深圳货代操作",
            zh: "拖车已于一小时前完成装柜铅封，目前正在前往盐田港闸口，预计两小时内过磅并上传核实总重。",
            pinyin: "Tuōchē yǐ yú yī xiǎoshí qián wánchéng zhuāngguì qiānfēng, mùqián zhèngzài qiánwǎng Yántiángǎng zhákǒu, yùjì liǎng xiǎoshí nèi guòbàng bìng shàngchuán héshí zǒngzhòng.",
            en: "The truck completed stuffing and sealing an hour ago, is en route to the Yantian gate, and will weigh in and submit the VGM within two hours.",
            vi: "Xe đã đóng hàng và kẹp chì cách đây một giờ, đang di chuyển tới cổng cảng Diêm Điền và dự kiến cân xe, nộp VGM trong vòng hai giờ tới."
          },
          {
            speakerEn: "Logistics Operations Lead",
            speakerZh: "物流操作主管",
            zh: "请同步核对提单补料与ICS2所需的六位商品编码，避免因单证延迟导致集装箱甩柜。",
            pinyin: "Qǐng tóngbù héduì tídān bǔliào yǔ ICS2 suǒxū de liùwèi shāngpǐn biānmǎ, bìmiǎn yīn dānzhèng yánchí dǎozhì jízhuāngxiāng shuǎiguì.",
            en: "Please simultaneously verify the Shipping Instruction and the 6-digit HS codes required for ICS2 so documentation delays do not cause a rollover.",
            vi: "Vui lòng đồng thời rà soát chi tiết làm vận đơn và mã HS 6 chữ số cho hệ thống ICS2 để tránh bị rớt tàu do chậm chứng từ."
          },
          {
            speakerEn: "Shenzhen Forwarder Coordinator",
            speakerZh: "深圳货代操作",
            zh: "收到。补料草稿已发至贵司邮箱，海关放行条一经签发，我会立即同步更新预计离港状态。",
            pinyin: "Shōudào. Bǔliào cǎogǎo yǐ fā zhì guìsī yóuxiāng, hǎiguān fàngxíngtiáo yījīng qiānfā, wǒ huì lìjí tóngbù gēngxīn yùjì lígǎng zhuàngtài.",
            en: "Understood. The SI draft is in your inbox, and as soon as customs release is issued, I will immediately update the ETD status.",
            vi: "Đã rõ. Bản nháp chi tiết vận đơn đã gửi vào hộp thư của bạn; ngay khi có lệnh thông quan, tôi sẽ cập nhật trạng thái ETD."
          }
        ],
        keyVocabularyIds: ["lt-023", "lt-033", "lt-034", "lt-035", "lt-065"]
      },
      {
        id: "dlg-03",
        mode: "factory_zh",
        titleVi: "Xử lý kết quả kiểm định SGS không đạt ngưỡng AQL",
        titleEn: "Resolving a Failed SGS Pre-Shipment Inspection under AQL",
        zhScenarioTag: "第三方验货 · AQL质量不合格处理",
        turns: [
          {
            speakerEn: "Quality Assurance Manager",
            speakerZh: "质量保证经理",
            zh: "李厂长，刚收到SGS装船前验货报告，本批货物外观重大缺陷超出AQL约定标准，我们暂时无法放行出货。",
            pinyin: "Lǐ chǎngzhǎng, gāng shōudào SGS zhuāngchuán qián yànhuò bàogào, běnpī huòwù wàiguān zhòngdà quēxiàn chāochū AQL yuēdìng biāozhǔn, wǒmen zànshí wúfǎ fàngxíng chūhuò.",
            en: "Director Li, we just received the SGS pre-shipment report. Major cosmetic defects exceeded the agreed AQL threshold, so we cannot authorize shipment release.",
            vi: "Giám đốc Lý, chúng tôi vừa nhận báo cáo giám định SGS trước giao hàng. Lỗi ngoại quan lớn vượt ngưỡng AQL thỏa thuận nên tạm thời chưa thể cho xuất hàng."
          },
          {
            speakerEn: "Factory Production Director",
            speakerZh: "工厂生产厂长",
            zh: "我们已核查检验照片，问题集中在新批次喷涂环节。工厂愿立即启动全检返工，并在四十八小时内安排复验。",
            pinyin: "Wǒmen yǐ héchá jiǎnyàn zhàopiàn, wèntí jízhōng zài xīn pīcì pēntú huánjié. Gōngchǎng yuàn lìjí qǐdòng quánjiǎn fǎngōng, bìng zài sìshíbā xiǎoshí nèi ānpái fùyàn.",
            en: "We reviewed the inspection photos; the issue is isolated to the new coating batch. We will start 100% sorting and rework immediately and schedule re-inspection within 48 hours.",
            vi: "Chúng tôi đã xem ảnh kiểm định; lỗi tập trung ở mẻ sơn mới. Nhà máy sẽ tiến hành kiểm tra 100%, khắc phục ngay và bố trí tái giám định trong 48 giờ."
          },
          {
            speakerEn: "Quality Assurance Manager",
            speakerZh: "质量保证经理",
            zh: "请同步提交书面纠正与预防措施报告，并确认复验费用及由此产生的船期调整责任由贵司承担。",
            pinyin: "Qǐng tóngbù tíjiāo shūmiàn jiūzhèng yǔ yùfáng cuòshī bàogào, bìng quèrèn fùyàn fèiyòng jí yóucǐ chǎnshēng de chuánqī tiáozhěng zérèn yóu guìsī chéngdān.",
            en: "Please also submit a written CAPA report and confirm that re-inspection costs and resulting schedule adjustments are borne by your factory.",
            vi: "Vui lòng gửi kèm báo cáo CAPA bằng văn bản và xác nhận phía nhà máy chịu chi phí tái kiểm định cùng trách nhiệm điều chỉnh lịch tàu."
          },
          {
            speakerEn: "Factory Production Director",
            speakerZh: "工厂生产厂长",
            zh: "完全认可。品控部今晚提交CAPA报告，确保复验一次通过并赶上下一班直航欧洲船期。",
            pinyin: "Wánquán rènkě. Pǐnkòngbù jīnwǎn tíjiāo CAPA bàogào, quèbǎo fùyàn yīcì tōngguò bìng gǎnshàng xià yībān zhíháng Ōuzhōu chuánqī.",
            en: "Fully agreed. Our QA department will submit the CAPA report tonight to ensure the re-inspection passes cleanly for the next direct European sailing.",
            vi: "Hoàn toàn đồng ý. Bộ phận QA sẽ gửi báo cáo CAPA tối nay để bảo đảm tái kiểm định đạt ngay lần đầu và kịp chuyến tàu thẳng đi Châu Âu kế tiếp."
          }
        ],
        keyVocabularyIds: ["lt-066", "lt-067", "lt-079"]
      },
      {
        id: "dlg-04",
        mode: "factory_zh",
        titleVi: "Xác nhận thanh toán T/T phần còn lại và phát hành Điện giao hàng",
        titleEn: "Confirming Balance T/T Payment and Telex Release Issuance",
        zhScenarioTag: "财务结算 · 尾款与提单电放",
        turns: [
          {
            speakerEn: "Import Finance Specialist",
            speakerZh: "进口财务专员",
            zh: "张财务您好，我司已核对正本提单扫描件与装箱单无误，财务部刚刚汇出合同约定尾款，水单已发您邮箱。",
            pinyin: "Zhāng cáiwù nín hǎo, wǒsī yǐ héduì zhèngběn tídān sǎomiáojiàn yǔ zhuāngxiāngdān wúwù, cáiwùbù gānggāng huìchū hétóng yuēdìng wěikuǎn, shuǐdān yǐ fā nín yóuxiāng.",
            en: "Hello Ms. Zhang, we verified the B/L copy and packing list with no discrepancies. Our finance team just remitted the contract balance; the bank slip is in your inbox.",
            vi: "Chào chị Trương, chúng tôi đã đối chiếu bản sao vận đơn và phiếu đóng gói hoàn toàn chính xác. Bộ phận tài chính vừa chuyển khoản phần còn lại và gửi điện chuyển tiền qua email."
          },
          {
            speakerEn: "Exporter Finance Officer",
            speakerZh: "出口方财务专员",
            zh: "谢谢通知。银行国际汇款到账后，我们会第一时间向船公司申请办理提单电放，避免正本邮寄延误。",
            pinyin: "Xièxie tōngzhī. Yínháng guójì huìkuǎn dàozhàng hòu, wǒmen huì dìyī shíjiān xiàng chuángōngsī shēnqǐng bànlǐ tídān diànfàng, bìmiǎn zhèngběn yóujì yánwù.",
            en: "Thank you for the notice. Once the international wire clears, we will immediately instruct the carrier to issue a Telex Release so courier delays are avoided.",
            vi: "Cảm ơn bạn đã thông báo. Ngay khi tiền chuyển khoản quốc tế nổi trên tài khoản, chúng tôi sẽ yêu cầu hãng tàu làm điện giao hàng để tránh chậm gửi chứng từ gốc."
          },
          {
            speakerEn: "Import Finance Specialist",
            speakerZh: "进口财务专员",
            zh: "请确认电放保函上的收货人名称及EORI号与清关商业发票完全一致，以便汉堡代理顺利换单。",
            pinyin: "Qǐng quèrèn diànfàng bǎohán shàng de shōuhuòrén míngchēng jí EORI hào yǔ qīngguān shāngyè fāpiào wánquán yīzhì, yǐbiàn Hànbǎo dàilǐ shùnlì huàndān.",
            en: "Please ensure the consignee name and EORI number on the Telex Release confirmation match the commercial invoice verbatim for smooth Hamburg delivery-order exchange.",
            vi: "Vui lòng bảo đảm tên người nhận hàng và mã EORI trên xác nhận điện giao hàng khớp nguyên văn với hóa đơn thương mại để đại lý Hamburg đổi lệnh giao hàng thuận lợi."
          },
          {
            speakerEn: "Exporter Finance Officer",
            speakerZh: "出口方财务专员",
            zh: "已按单证一致原则复核完毕，预计明天上午将船公司电放回执回传贵司。",
            pinyin: "Yǐ àn dānzhèng yīzhì yuánzé fùhé wánbì, yùjì míngtiān shàngwǔ jiāng chuángōngsī diànfàng huízhí huíchuán guìsī.",
            en: "Everything has been double-checked under strict documentary compliance; we expect to forward the carrier's Telex Release notice tomorrow morning.",
            vi: "Mọi thông tin đã được kiểm tra lại theo nguyên tắc đồng nhất chứng từ; dự kiến sáng mai chúng tôi sẽ chuyển lại xác nhận điện giao hàng của hãng tàu."
          }
        ],
        keyVocabularyIds: ["lt-031", "lt-032", "lt-069", "lt-082", "lt-100"]
      },
      {
        id: "dlg-05",
        mode: "factory_zh",
        titleVi: "Yêu cầu dữ liệu phát thải carbon CBAM và chứng nhận REACH từ nhà máy",
        titleEn: "Requesting CBAM Embedded Emissions Data and REACH Compliance from a Supplier",
        zhScenarioTag: "欧盟合规 · CBAM碳数据与REACH申报",
        turns: [
          {
            speakerEn: "EU Compliance Specialist",
            speakerZh: "欧盟合规专员",
            zh: "赵工您好，针对发往安特卫普的铝制部件，欧盟进口商需在季度申报中提交CBAM隐含碳排放数据。",
            pinyin: "Zhào gōng nín hǎo, zhēnduì fāwǎng Āntèwèipǔ de lǚzhì bùjiàn, Ōuméng jìnkǒushāng xū zài jìdù shēnbào zhōng tíjiāo CBAM yǐnhán tàn páifàng shùjù.",
            en: "Hello Engineer Zhao, for the aluminum components shipping to Antwerp, our EU importer must submit CBAM embedded emissions data in the quarterly report.",
            vi: "Chào kỹ sư Triệu, đối với linh kiện nhôm xuất đi Antwerp, nhà nhập khẩu EU bắt buộc phải nộp dữ liệu phát thải carbon tích hợp CBAM trong báo cáo quý."
          },
          {
            speakerEn: "Factory Technical Manager",
            speakerZh: "工厂技术经理",
            zh: "明白。我们已按欧盟模板整理好冶炼工序的直接排放及外购电力间接排放记录，并附带第三方核查说明。",
            pinyin: "Míngbai. Wǒmen yǐ àn Ōuméng múbǎn zhěnglǐ hǎo yěliàn gōngxù de zhíjiē páifàng jí wàigòu diànlì jiànjiē páifàng jìlù, bìng fùdài dìsānfāng héchá shuōmíng.",
            en: "Understood. We have compiled direct smelting emissions and indirect purchased-electricity records using the EU template, together with third-party verification notes.",
            vi: "Đã rõ. Chúng tôi đã tổng hợp dữ liệu phát thải trực tiếp khâu luyện kim và phát thải gián tiếp từ điện mua ngoài theo mẫu EU, kèm ghi chú kiểm định bên thứ ba."
          },
          {
            speakerEn: "EU Compliance Specialist",
            speakerZh: "欧盟合规专员",
            zh: "非常专业。请同时更新本批次的REACH高度关注物质检测报告及欧盟符合性声明。",
            pinyin: "Fēicháng zhuānyè. Qǐng tóngshí gēngxīn běnpīcì de REACH gāodù guānzhù wùzhì jiǎncè bàogào jí Ōuméng fúhéxìng shēngmíng.",
            en: "Very thorough. Please also update the REACH SVHC test report and the EU Declaration of Conformity for this production lot.",
            vi: "Rất chuyên nghiệp. Vui lòng cập nhật đồng thời báo cáo thử nghiệm chất SVHC theo REACH và Tuyên bố hợp chuẩn EU cho lô sản xuất này."
          },
          {
            speakerEn: "Factory Technical Manager",
            speakerZh: "工厂技术经理",
            zh: "好的，所有合规技术档案将打包加密后连同装船单据一并上传至贵司供应商门户。",
            pinyin: "Hǎo de, suǒyǒu héguī jìshù dàng'àn jiāng dǎbāo jiāmì hòu liántóng zhuāngchuán dānjù yībìng shàngchuán zhì guìsī gōngyìngshāng ménhù.",
            en: "Certainly. All compliance technical files will be archived and uploaded alongside the shipping documents to your supplier portal.",
            vi: "Vâng, toàn bộ hồ sơ kỹ thuật tuân thủ sẽ được đóng gói và tải lên cổng thông tin nhà cung cấp cùng bộ chứng từ giao hàng."
          }
        ],
        keyVocabularyIds: ["lt-062", "lt-064", "lt-070", "lt-074", "lt-076", "lt-080"]
      },
      {
        id: "dlg-06",
        mode: "factory_zh",
        titleVi: "Cân đối chuyển tuyến từ đường biển sang tàu đường sắt Trung–Âu",
        titleEn: "Evaluating a Shift from Ocean Freight to China-Europe Railway Express",
        zhScenarioTag: "多式联运 · 海运与中欧班列切换",
        turns: [
          {
            speakerEn: "Supply Chain Planner",
            speakerZh: "供应链计划主管",
            zh: "刘经理，因红海绕行导致海运航程拉长，德国工厂库存告急，我们计划将两柜高价值备件改走中欧班列。",
            pinyin: "Liú jīnglǐ, yīn Hónghǎi ràoxíng dǎozhì hǎiyùn hángchéng lācháng, Déguó gōngchǎng kùcún gàojí, wǒmen jìhuà jiāng liǎngguì gāo jiàzhí bèijiàn gǎizǒu Zhōng-Ōu bānliè.",
            en: "Manager Liu, Red Sea rerouting has lengthened ocean transit and our German plant faces low stock. We plan to shift two high-value spare-part containers to the China-Europe Railway Express.",
            vi: "Anh Lưu, việc vòng tránh Biển Đỏ làm kéo dài thời gian vận tải biển và nhà máy Đức đang thiếu tồn kho. Chúng tôi dự định chuyển hai container phụ tùng giá trị cao sang tàu đường sắt Trung–Âu."
          },
          {
            speakerEn: "Rail Freight Account Manager",
            speakerZh: "铁运客户经理",
            zh: "建议从重庆或西安枢纽发运至杜伊斯堡。本周尚有整箱舱位，但铁路对锂电池及防潮加固包装审查严格。",
            pinyin: "Jiànyì cóng Chóngqìng huò Xī'ān shūniǔ fāyùn zhì Dùyīsībǎo. Běnzhōu shàngyǒu zhěngxiāng cāngwèi, dàn tiělù duì lǐdiànchí jí fángcháo jiāgù bāozhuāng shěnchá yángé.",
            en: "We recommend dispatching from the Chongqing or Xi'an hub to Duisburg. FCL space is available this week, though rail strictly inspects lithium batteries and moisture-proof lashing.",
            vi: "Đề xuất xuất phát từ đầu mối Trùng Khánh hoặc Tây An đi Duisburg. Tuần này vẫn còn chỗ FCL, nhưng đường sắt kiểm tra rất chặt pin lithium và quy cách chằng buộc chống ẩm."
          },
          {
            speakerEn: "Supply Chain Planner",
            speakerZh: "供应链计划主管",
            zh: "该批为纯机械部件，不含电池。请按FCA内陆铁路场站出具联运方案及国际铁路联运运单样本。",
            pinyin: "Gāipī wéi chún jīxiè bùjiàn, bùhán diànchí. Qǐng àn FCA nèilù tiělù chǎngzhàn chūjù liányùn fāng'àn jí guójì tiělù liányùn yùndān yàngběn.",
            en: "This lot consists purely of mechanical parts with no batteries. Please prepare an FCA rail-terminal routing plan and a CIM/SMGS consignment note sample.",
            vi: "Lô này là linh kiện cơ khí thuần túy, không chứa pin. Vui lòng lập phương án tuyến theo điều kiện FCA ga đường sắt nội địa kèm mẫu vận đơn CIM/SMGS."
          },
          {
            speakerEn: "Rail Freight Account Manager",
            speakerZh: "铁运客户经理",
            zh: "好，我立即锁定舱位，并附上口岸换装节点和全程温湿度监控说明。",
            pinyin: "Hǎo, wǒ lìjí suǒdìng cāngwèi, bìng fùshàng kǒu'àn huànzhuāng jiédiǎn hé quánchéng wēnshīdù jiānkòng shuōmíng.",
            en: "Understood. I will lock the allocation immediately and attach border gauge-change milestones plus transit monitoring details.",
            vi: "Rõ rồi. Tôi sẽ giữ chỗ ngay và gửi kèm các mốc chuyển khổ ray tại cửa khẩu cùng hướng dẫn giám sát hành trình."
          }
        ],
        keyVocabularyIds: ["lt-002", "lt-029", "lt-030", "lt-038"]
      },
      {
        id: "dlg-07",
        mode: "factory_zh",
        titleVi: "Khắc phục sai lệch mã HS và C/O Form E trước khi thông quan tại Hải Phòng",
        titleEn: "Correcting HS Code and C/O Form E Discrepancies Prior to Hai Phong Clearance",
        zhScenarioTag: "海关单证 · HS编码与Form E核对",
        turns: [
          {
            speakerEn: "Vietnam-China Trade Coordinator",
            speakerZh: "中越贸易协调员",
            zh: "周小姐，发往海防港的这批面料单证中，商业发票的六位HS编码与C/O Form E上的编码不一致。",
            pinyin: "Zhōu xiǎojiě, fāwǎng Hǎifánggǎng de zhèpī miànliào dānzhèng zhōng, shāngyè fāpiào de liùwèi HS biānmǎ yǔ C/O Form E shàng de biānmǎ bù yīzhì.",
            en: "Ms. Zhou, in the shipping documents for the fabric consignment bound for Hai Phong, the 6-digit HS code on the commercial invoice conflicts with the C/O Form E.",
            vi: "Chị Chu, trong bộ chứng từ lô vải gửi về cảng Hải Phòng, mã HS 6 số trên hóa đơn thương mại không khớp với mã trên C/O Form E."
          },
          {
            speakerEn: "Chinese Export Doc Specialist",
            speakerZh: "中方单证专员",
            zh: "非常抱歉，这是制单疏漏。若不更正，海防海关可能会质疑原产地优惠资格并转为人工查验。",
            pinyin: "Fēicháng bàoqiàn, zhè shì zhìdān shūlòu. Ruò bù gēngzhèng, Hǎifáng hǎiguān kěnéng huì zhìyí yuánchǎndì yōuhuì zīgé bìng zhuǎnwéi réngōng cháyàn.",
            en: "Apologies for the clerical oversight. Left uncorrected, Hai Phong Customs may challenge preferential origin eligibility and route the entry for manual inspection.",
            vi: "Rất xin lỗi về sai sót lập chứng từ này. Nếu không sửa, Hải quan Hải Phòng có thể bác ưu đãi xuất xứ và chuyển sang kiểm tra thực tế."
          },
          {
            speakerEn: "Vietnam-China Trade Coordinator",
            speakerZh: "中越贸易协调员",
            zh: "请立即向中国贸促会或海关申请改证重出，并确保后发标志及货描与越南进口报关草稿完全吻合。",
            pinyin: "Qǐng lìjí xiàng Zhōngguó Màocùhuì huò hǎiguān shēnqǐng gǎizhèng chóngchū, bìng quèbǎo hòufā biāozhì jí huòmiáo yǔ Yuènán jìnkǒu bàoguān cǎogǎo wánquán wěnhé.",
            en: "Please apply immediately to CCPIT or China Customs for a reissued certificate, ensuring the retroactively issued box and goods description match our Vietnam import draft.",
            vi: "Vui lòng xin CCPIT hoặc Hải quan Trung Quốc cấp lại ngay, bảo đảm đánh dấu cấp sau và mô tả hàng hóa khớp hoàn toàn với tờ khai nhập khẩu Việt Nam."
          },
          {
            speakerEn: "Chinese Export Doc Specialist",
            speakerZh: "中方单证专员",
            zh: "已提交电子改证申请，预计两个工作日内签发新证并同步电子数据至东盟单一窗口。",
            pinyin: "Yǐ tíjiāo diànzǐ gǎizhèng shēnqǐng, yùjì liǎng gè gōngzuòrì nèi qiānfā xīnzhèng bìng tóngbù diànzǐ shùjù zhì Dōngméng dānyī chuāngkǒu.",
            en: "The electronic amendment has been filed; the reissued certificate should be ready within two working days and synced to the ASEAN Single Window.",
            vi: "Hồ sơ sửa đổi điện tử đã nộp; chứng thư cấp lại dự kiến xong trong hai ngày làm việc và đồng bộ dữ liệu sang Cơ chế Một cửa ASEAN."
          }
        ],
        keyVocabularyIds: ["lt-027", "lt-041", "lt-043", "lt-047", "lt-057"]
      },
      {
        id: "dlg-08",
        mode: "factory_zh",
        titleVi: "Đàm phán gia hạn miễn phí lưu bãi và lưu vỏ tại cảng Châu Âu",
        titleEn: "Negotiating Extended Free Demurrage and Detention Time at European Ports",
        zhScenarioTag: "目的港管控 · 滞港费与滞箱费豁免申请",
        turns: [
          {
            speakerEn: "European Logistics Manager",
            speakerZh: "欧洲物流经理",
            zh: "吴总，近期鹿特丹港口拥堵且内陆拖车紧张，我们希望为下季度从上海洋山发运的合同货争取更长的免费用箱期。",
            pinyin: "Wú zǒng, jìnqī Lùtèdān gǎngkǒu yōngdǔ qiě nèilù tuōchē jǐnzhāng, wǒmen xīwàng wéi xià jìdù cóng Shànghǎi Yángshān fāyùn de hétónghuò zhēngqǔ gèngcháng de miǎnfèi yòngxiāngqī.",
            en: "Director Wu, with current Rotterdam congestion and tight inland trucking, we need extended combined free time for next quarter's contract shipments from Shanghai Yangshan.",
            vi: "Anh Ngô, do cảng Rotterdam đang ùn tắc và xe kéo nội địa khan hiếm, chúng tôi cần gia hạn thời gian miễn lưu bãi và lưu vỏ kết hợp cho hàng hợp đồng quý tới từ Thượng Hải Dương Sơn."
          },
          {
            speakerEn: "Carrier Key Account Director",
            speakerZh: "船公司大客户总监",
            zh: "基于贵司稳定的季度货量，我们可以向总部申请合并滞港费与滞箱费的延长免租方案。",
            pinyin: "Jīyú guìsī wěndìng de jìdù huòliàng, wǒmen kěyǐ xiàng zǒngbù shēnqǐng hébìng zhìgǎngfèi yǔ zhìxiāngfèi de yáncháng miǎnzū fāng'àn.",
            en: "Given your stable quarterly volume, we can request an extended combined demurrage and detention free-time package from headquarters.",
            vi: "Dựa trên sản lượng quý ổn định của quý công ty, chúng tôi có thể trình trụ sở chính gói miễn phí kết hợp lưu bãi và lưu vỏ dài hơn."
          },
          {
            speakerEn: "European Logistics Manager",
            speakerZh: "欧洲物流经理",
            zh: "太好了。请将该条款写入年度海运补充协议，并明确节假日不计入超期天数。",
            pinyin: "Tài hǎo le. Qǐng jiāng gāi tiáokuǎn xiěrù niándù hǎiyùn bǔchōng xiéyì, bìng míngquè jiéjiàrì bù jìrù chāoqī tiānshù.",
            en: "Excellent. Please incorporate that clause into the annual ocean contract addendum and clarify that public holidays are excluded from penalty days.",
            vi: "Rất tốt. Vui lòng đưa điều khoản này vào phụ lục hợp đồng cước biển năm và nêu rõ ngày lễ công cộng không tính vào ngày quá hạn."
          },
          {
            speakerEn: "Carrier Key Account Director",
            speakerZh: "船公司大客户总监",
            zh: "收到，批准后我会将带编号的补充协议发给您签章生效。",
            pinyin: "Shōudào, pīzhǔn hòu wǒ huì jiāng dài biānhào de bǔchōng xiéyì fā gěi nín qiānzhāng shēngxiào.",
            en: "Noted. Once approved, I will send the numbered addendum for your countersignature.",
            vi: "Đã ghi nhận. Sau khi được duyệt, tôi sẽ gửi phụ lục đánh số để bạn ký xác nhận hiệu lực."
          }
        ],
        keyVocabularyIds: ["lt-021", "lt-024", "lt-036", "lt-037"]
      },
      {
        id: "dlg-09",
        mode: "factory_zh",
        titleVi: "Phối hợp tu chỉnh L/C để loại bỏ bất hợp lệ chứng từ",
        titleEn: "Coordinating an L/C Amendment to Eliminate Documentary Discrepancies",
        zhScenarioTag: "贸易金融 · 信用证审证与改证",
        turns: [
          {
            speakerEn: "Trade Finance Coordinator",
            speakerZh: "贸易金融协调员",
            zh: "孙经理，我司审证时发现开证行在信用证中将最迟装运期写得过紧，且禁止分批装运，存在不符点风险。",
            pinyin: "Sūn jīnglǐ, wǒsī shěnzhèng shí fāxiàn kāizhèngháng zài xìnyòngzhèng zhōng jiāng zuìchí zhuāngyùnqī xiě de guòjǐn, qiě jìnzhǐ fēnpī zhuāngyùn, cúnzài bùfúdiǎn fēngxiǎn.",
            en: "Manager Sun, during L/C review we noticed the issuing bank set an overly tight latest shipment date and prohibited partial shipments, creating discrepancy risk.",
            vi: "Anh Tôn, khi kiểm tra L/C chúng tôi thấy ngân hàng phát hành ghi ngày giao hàng muộn nhất quá sát và cấm giao từng phần, gây rủi ro bất hợp lệ chứng từ."
          },
          {
            speakerEn: "Exporter Commercial Manager",
            speakerZh: "出口方商务经理",
            zh: "确实如此。若港口遇台风延误，银行将拒付或扣除不符点费用。能否请买方尽快出具信用证修改书？",
            pinyin: "Quèshí rúcǐ. Ruò gǎngkǒu yù táifēng yánwù, yínháng jiāng jùfù huò kòuchú bùfúdiǎn fèiyòng. Néngfǒu qǐng mǎifāng jǐnkuài chūjù xìnyòngzhèng xiūgǎishū?",
            en: "Indeed. If a typhoon delays the port, the bank could refuse payment or deduct discrepancy fees. Could the buyer issue an L/C amendment promptly?",
            vi: "Đúng vậy. Nếu cảng bị chậm do bão, ngân hàng sẽ từ chối thanh toán hoặc trừ phí bất hợp lệ. Bên mua có thể sớm phát hành tu chỉnh L/C không?"
          },
          {
            speakerEn: "Trade Finance Coordinator",
            speakerZh: "贸易金融协调员",
            zh: "我已与欧洲财务总监确认，同意延长装运期十天并允许分批装运，同时保留严格单证一致审核。",
            pinyin: "Wǒ yǐ yǔ Ōuzhōu cáiwù zǒngjiān quèrèn, tóngyì yáncháng zhuāngyùnqī shítiān bìng yǔnxǔ fēnpī zhuāngyùn, tóngshí bǎoliú yángé dānzhèng yīzhì shěnhé.",
            en: "I confirmed with our European CFO: we agree to extend the shipment date by ten days and permit partial shipments while maintaining strict documentary compliance.",
            vi: "Tôi đã xác nhận với Giám đốc Tài chính Châu Âu: chúng tôi đồng ý gia hạn giao hàng mười ngày và cho phép giao từng phần, đồng thời giữ nguyên chuẩn kiểm tra chứng từ."
          },
          {
            speakerEn: "Exporter Commercial Manager",
            speakerZh: "出口方商务经理",
            zh: "感谢高效协调。收到通知行转来的改证电文后，我们即刻按新期限排产订舱。",
            pinyin: "Gǎnxiè gāoxiào xiétiáo. Shōudào tōngzhīháng zhuǎnlái de gǎizhèng diànwén hòu, wǒmen jíkè àn xīn qīxiàn páichǎn dìngcāng.",
            en: "Thank you for the swift coordination. Once the advising bank relays the SWIFT amendment, we will schedule production and booking under the revised deadline.",
            vi: "Cảm ơn sự phối hợp nhanh chóng. Ngay khi ngân hàng thông báo chuyển điện tu chỉnh SWIFT, chúng tôi sẽ xếp lịch sản xuất và đặt chỗ theo hạn mới."
          }
        ],
        keyVocabularyIds: ["lt-081", "lt-086", "lt-093", "lt-100"]
      },
      {
        id: "dlg-10",
        mode: "factory_zh",
        titleVi: "Đánh giá năng lực xưởng và chuỗi cung ứng phụ trợ sau Hội chợ Quảng Giao",
        titleEn: "Post-Canton Fair Factory Capability and Sub-Supplier Audit",
        zhScenarioTag: "广交会验厂 · 产能与合规核查",
        turns: [
          {
            speakerEn: "Sourcing Audit Lead",
            speakerZh: "采购审核主管",
            zh: "林总，感谢在广交会后安排实地验厂。请问贵司旺季月产能利用率如何，核心原材料是否全部可溯源？",
            pinyin: "Lín zǒng, gǎnxiè zài Guǎngjiāohuì hòu ānpái shídì yànchǎng. Qǐngwèn guìsī wàngjì yuè chǎnnéng lìyònglǜ rúhé, héxīn yuáncáiliào shìfǒu quánbù kě sùyuán?",
            en: "Director Lin, thank you for hosting this post-Canton Fair audit. What is your peak-season capacity utilization, and are all core raw materials traceable?",
            vi: "Giám đốc Lâm, cảm ơn anh đã bố trí chuyến đánh giá nhà máy sau Hội chợ Quảng Giao. Công suất mùa cao điểm của xưởng đạt mức nào và nguyên liệu cốt lõi có truy xuất được toàn bộ không?"
          },
          {
            speakerEn: "Guangdong Factory Owner",
            speakerZh: "广东工厂负责人",
            zh: "旺季我们预留两成柔性产线应对欧洲加急单，所有原材料均来自通过合规审计的一级供应商并留存批次码。",
            pinyin: "Wàngjì wǒmen yùliú liǎngchéng róuxìng chǎnxiàn yìngduì Ōuzhōu jiājí dān, suǒyǒu yuáncáiliào jūn láizì tōngguò héguī shěnjì de yījí gōngyìngshāng bìng liúcún pīcìmǎ.",
            en: "In peak season we reserve twenty percent flexible line capacity for urgent EU orders, and all raw materials come from audited Tier-1 suppliers with batch traceability.",
            vi: "Mùa cao điểm chúng tôi dự phòng hai mươi phần trăm dây chuyền linh hoạt cho đơn gấp từ Châu Âu, toàn bộ nguyên liệu lấy từ nhà cung cấp cấp 1 đã qua thẩm định và có mã lô."
          },
          {
            speakerEn: "Sourcing Audit Lead",
            speakerZh: "采购审核主管",
            zh: "这一点非常符合欧盟可持续发展尽职调查要求。此外，我们在越南的装配厂未来可能需要从贵司采购半成品。",
            pinyin: "Zhè yīdiǎn fēicháng fúhé Ōuméng kěchíxù fāzhǎn jìnzhí diàochá yāoqiú. Cǐwài, wǒmen zài Yuènán de zhuāngpèichǎng wèilái kěnéng xūyào cóng guìsī cǎigòu bànchéngpǐn.",
            en: "That aligns closely with EU sustainability due-diligence expectations. In addition, our Vietnam assembly plant may source semi-finished sub-assemblies from you.",
            vi: "Điểm này rất phù hợp yêu cầu thẩm định bền vững của EU. Ngoài ra, nhà máy lắp ráp của chúng tôi tại Việt Nam có thể sẽ mua bán thành phẩm từ quý xưởng."
          },
          {
            speakerEn: "Guangdong Factory Owner",
            speakerZh: "广东工厂负责人",
            zh: "我们熟悉中越陆运与海运拼箱，并能配合提供RCEP原产地文件以支持贵司区域供应链布局。",
            pinyin: "Wǒmen shúxī Zhōng-Yuè lùyùn yǔ hǎiyùn pīnxiāng, bìng néng pèihé tígōng RCEP yuánchǎndì wénjiàn yǐ zhīchí guìsī qūyù gōngyìngliàn bùjú.",
            en: "We are experienced with China-Vietnam road and LCL ocean flows and can supply RCEP origin documentation to support your regional supply chain.",
            vi: "Chúng tôi thành thạo tuyến đường bộ và hàng lẻ đường biển Trung–Việt, đồng thời có thể cấp chứng từ xuất xứ RCEP hỗ trợ mạng lưới cung ứng khu vực của bạn."
          }
        ],
        keyVocabularyIds: ["lt-046", "lt-078", "lt-099"]
      },
      {
        id: "dlg-11",
        mode: "eu_interview_en",
        titleVi: "Phỏng vấn công ty Logistics Châu Âu: Ứng phó biến động tuyến Á–Âu và phương án đường sắt",
        titleEn: "European Logistics Interview: Handling Asia-Europe Maritime Disruptions and Rail Alternatives",
        zhScenarioTag: "欧企面试 · 亚欧航线危机与中欧班列方案",
        turns: [
          {
            speakerEn: "European Operations Director",
            speakerZh: "欧洲运营总监",
            zh: "当亚欧海运主航线因地缘波动延长交期时，您如何为德国工业客户制定应急物流方案？",
            pinyin: "Dāng Yà-Ōu hǎiyùn zhǔ hángxiàn yīn dìyuán bōdòng yáncháng jiāoqī shí, nín rúhé wéi Déguó gōngyè kèhù zhìdìng yìngjí wùliú fāng'àn?",
            en: "When Asia-Europe ocean loops face geopolitical rerouting and longer transit times, how would you design a contingency logistics plan for a German industrial client?",
            vi: "Khi tuyến biển chính Á–Âu kéo dài hành trình do biến động địa chính trị, bạn sẽ xây dựng phương án logistics dự phòng thế nào cho khách hàng công nghiệp Đức?"
          },
          {
            speakerEn: "Candidate (Trilingual Logistics Specialist)",
            speakerZh: "候选人（三语物流专员）",
            zh: "我会先按SKU紧迫度分层：将关键零部件转由重庆或西安中欧班列直达杜伊斯堡，其余常规货量仍留海运并前置订舱。",
            pinyin: "Wǒ huì xiān àn SKU jǐnpòdù fēncéng: jiāng guānjiàn língbùjiàn zhuǎnyóu Chóngqìng huò Xī'ān Zhōng-Ōu bānliè zhídá Dùyīsībǎo, qíyú chángguī huòliàng réng liú hǎiyùn bìng qiánzhì dìngcāng.",
            en: "I would segment SKUs by production criticality: shift urgent components onto the China-Europe Railway Express from Chongqing or Xi'an to Duisburg, while keeping baseline volume on ocean with earlier booking buffers.",
            vi: "Tôi sẽ phân tầng mã hàng theo mức độ cấp bách sản xuất: chuyển linh kiện trọng yếu sang tàu đường sắt Trung–Âu từ Trùng Khánh hoặc Tây An tới Duisburg, còn hàng nền vẫn đi biển với biên độ đặt chỗ sớm hơn."
          },
          {
            speakerEn: "European Operations Director",
            speakerZh: "欧洲运营总监",
            zh: "您的中文能力在与中国货代及工厂执行这一切换时能带来什么实际价值？",
            pinyin: "Nín de Zhōngwén nénglì zài yǔ Zhōngguó huòdài jí gōngchǎng zhíxíng zhè yī qiēhuàn shí néng dàilái shénme shíjì jiàzhí?",
            en: "What concrete value does your Mandarin fluency add when executing this modal shift with Chinese factories and forwarders?",
            vi: "Năng lực tiếng Trung của bạn mang lại giá trị thực tế gì khi triển khai chuyển đổi phương thức này với nhà máy và forwarder Trung Quốc?"
          },
          {
            speakerEn: "Candidate (Trilingual Logistics Specialist)",
            speakerZh: "候选人（三语物流专员）",
            zh: "我能直接与盐田或宁波车队核对截港、VGM及铁路包装加固标准，把现场信息迅速转化为欧盟总部决策所需的英文风险报告。",
            pinyin: "Wǒ néng zhíjiē yǔ Yántián huò Níngbō chēduì héduì jiégǎng, VGM jí tiělù bāozhuāng jiāgù biāozhǔn, bǎ xiànchǎng xìnxī xùnsù zhuǎnhuà wéi Ōuméng zǒngbù juécè suǒxū de Yīngwén fēngxiǎn bàogào.",
            en: "I can verify CY cut-offs, VGM filings, and rail lashing standards directly with Ningbo or Yantian dispatchers, then distill ground realities into concise English risk briefings for European leadership.",
            vi: "Tôi có thể trực tiếp xác minh giờ cắt bãi, khai báo VGM và chuẩn chằng buộc đường sắt với đội xe tại Ninh Ba hoặc Diêm Điền, rồi chuyển hóa thành báo cáo rủi ro tiếng Anh súc tích cho ban lãnh đạo Châu Âu."
          }
        ],
        keyVocabularyIds: ["lt-029", "lt-034", "lt-035", "lt-099"]
      },
      {
        id: "dlg-12",
        mode: "eu_interview_en",
        titleVi: "Phỏng vấn vị trí Điều phối Chuỗi cung ứng EU: Cầu nối CBAM và tuân thủ ICS2",
        titleEn: "EU Supply Chain Coordinator Interview: Bridging Chinese Suppliers with CBAM and ICS2",
        zhScenarioTag: "欧企面试 · CBAM与ICS2跨境合规协调",
        turns: [
          {
            speakerEn: "Head of EU Trade Compliance",
            speakerZh: "欧盟贸易合规负责人",
            zh: "许多中小型中国供应商对欧盟CBAM及ICS2数据要求感到陌生，您会如何推动他们按时合规？",
            pinyin: "Xǔduō zhōngxiǎoxíng Zhōngguó gōngyìngshāng duì Ōuméng CBAM jí ICS2 shùjù yāoqiú gǎndào mòshēng, nín huì rúhé tuīdòng tāmen ànshí héguī?",
            en: "Many mid-sized Chinese suppliers are unfamiliar with EU CBAM and ICS2 data rules. How would you drive timely compliance without stalling shipments?",
            vi: "Nhiều nhà cung cấp vừa và nhỏ tại Trung Quốc còn bỡ ngỡ với yêu cầu dữ liệu CBAM và ICS2 của EU. Bạn sẽ thúc đẩy họ tuân thủ đúng hạn mà không làm đình trệ giao hàng bằng cách nào?"
          },
          {
            speakerEn: "Candidate (Trilingual Logistics Specialist)",
            speakerZh: "候选人（三语物流专员）",
            zh: "我会把欧盟法规拆解为双语操作清单：例如提前锁定六位HS编码与清晰货描以满足ICS2，并协助工厂财务整理能耗台账对接CBAM模板。",
            pinyin: "Wǒ huì bǎ Ōuméng fǎguī chāijiě wéi shuāngyǔ cāozuò qīngdān: lìrú tíqián suǒdìng liùwèi HS biānmǎ yǔ qīngxī huòmiáo yǐ mǎnzú ICS2, bìng xiézhù gōngchǎng cáiwù zhěnglǐ nénghào táizhàng duìjiē CBAM múbǎn.",
            en: "I translate EU regulations into practical bilingual checklists: locking 6-digit HS codes and plain-language cargo descriptions ahead of ICS2 cut-off, while guiding factory engineers to map utility logs onto the CBAM template.",
            vi: "Tôi chuyển hóa quy định EU thành bảng kiểm thao tác song ngữ: chốt sớm mã HS 6 số và mô tả hàng rõ ràng cho ICS2, đồng thời hướng dẫn kỹ sư nhà máy đối chiếu sổ tiêu thụ năng lượng vào biểu mẫu CBAM."
          },
          {
            speakerEn: "Head of EU Trade Compliance",
            speakerZh: "欧盟贸易合规负责人",
            zh: "如果货源涉及中国零部件与越南组装，您如何评估原产地合规风险？",
            pinyin: "Rúguǒ huòyuán shèjí Zhōngguó língbùjiàn yǔ Yuènán zǔzhuāng, nín rúhé pínggū yuánchǎndì héguī fēngxiǎn?",
            en: "When supply chains combine Chinese components with Vietnam final assembly, how do you assess origin compliance risk?",
            vi: "Khi chuỗi cung ứng kết hợp linh kiện Trung Quốc với lắp ráp hoàn thiện tại Việt Nam, bạn đánh giá rủi ro tuân thủ xuất xứ như thế nào?"
          },
          {
            speakerEn: "Candidate (Trilingual Logistics Specialist)",
            speakerZh: "候选人（三语物流专员）",
            zh: "我会核查EVFTA与RCEP下的税则归类改变或区域价值成分比例，必要时申请海关预裁定，确保零关税享受经得起欧盟事后核查。",
            pinyin: "Wǒ huì héchá EVFTA yǔ RCEP xià de shuìzé guīlèi gǎibiàn huò qūyù jiàzhí chéngfèn bǐlì, bìyào shí shēnqǐng hǎiguān yùcáidìng, quèbǎo líng guānshuì xiǎngshòu jīngdeqǐ Ōuméng shìhòu héchá.",
            en: "I audit Change in Tariff Classification and Regional Value Content thresholds under EVFTA and RCEP, and recommend Advance Rulings when needed so preferential duty claims withstand EU post-clearance audits.",
            vi: "Tôi kiểm tra tiêu chí chuyển đổi mã số thuế hoặc tỷ lệ hàm lượng giá trị khu vực theo EVFTA và RCEP, đồng thời đề xuất xác định trước xuất xứ khi cần để hồ sơ hưởng thuế ưu đãi vững vàng trước hậu kiểm EU."
          }
        ],
        keyVocabularyIds: ["lt-044", "lt-052", "lt-054", "lt-064", "lt-065"]
      }
    ],

    bilingualEmailPairs8: [
      {
        id: "em-01",
        titleVi: "Hỏi hàng và yêu cầu báo giá MOQ theo điều kiện FOB Ninh Ba / Diêm Điền",
        titleEn: "Inquiry and MOQ Quotation Request (FOB Ningbo / Yantian)",
        factoryZh: "主题：关于欧洲春季订单询盘及FOB宁波/盐田港报价请求\n尊敬的王经理：\n我司现代表欧洲核心零售客户，就贵司不锈钢保温组件进行正式询盘。请分别按标准起订量及试单数量提供FOB宁波港或FOB盐田港含税报价，并注明标准交期、单箱毛净重及40尺高柜装柜数量。如贵司具备CE或食品接触级合规检测报告，请一并随附，以便我司本周提交欧洲采购委员会评审。",
        factoryPinyin: "Zhǔtí: Guānyú Ōuzhōu chūnjì dìngdān xúnpán jí FOB Níngbō/Yántiángǎng bàojià qǐngqiú. Zūnjìng de Wáng jīnglǐ: Wǒsī xiàn dàibiǎo Ōuzhōu héxīn língshòu kèhù, jiù guìsī bùxiùgāng bǎowēn zǔjiàn jìnxíng zhèngshì xúnpán. Qǐng fēnbié àn biāozhǔn qǐdìngliàng jí shìdān shùliàng tígōng FOB Níngbōgǎng huò FOB Yántiángǎng hánshuì bàojià, bìng zhùmíng biāozhǔn jiāoqī, dānxiāng máojìngzhòng jí sìshí chǐ gāoguì zhuāngguì shùliàng. Rú guìsī jùbèi CE huò shípǐn jiēchùjí héguī jiǎncè bàogào, qǐng yībìng suífù, yǐbiàn wǒsī běnzhōu tíjiāo Ōuzhōu cǎigòu wěiyuánhuì píngshěn.",
        euManagerEn: "Subject: Sourcing Update — FOB Ningbo / Yantian Quotation Request Issued\nDear Procurement Lead,\nWe have issued a formal RFQ to our shortlisted Zhejiang and Guangdong manufacturers for the spring stainless-steel assembly program. We requested tiered FOB Ningbo and FOB Yantian unit quotations covering both trial-lot and standard MOQ tiers, alongside lead times, carton gross/net weights, 40HC loadability, and existing EU compliance certificates. Consolidated comparison tables will be shared for committee review once responses arrive.",
        viSummary: "Thư hỏi hàng chính thức yêu cầu nhà máy báo giá FOB Ninh Ba/Diêm Điền theo hai bậc sản lượng (đơn thử và MOQ chuẩn), kèm tiến độ sản xuất, thể tích đóng container 40HC và chứng chỉ tuân thủ EU."
      },
      {
        id: "em-02",
        titleVi: "Cảnh báo gấp giờ cắt máng tàu và nguy cơ chậm lịch giao hàng",
        titleEn: "Vessel Cut-off Rush and Delay Warning",
        factoryZh: "主题：紧急提醒——本周盐田至鹿特丹船期截港及延误风险预警\n陈主管您好：\n刚接船公司通知，原定本周五截港的直航鹿特丹母船因前期港口天气延误，截单及VGM截止时间已提前十二小时。请贵厂务必于明日中午十二点前完成装柜并回传箱封号与准确过磅单。若无法赶上本航次，请立即告知，以便我司提前通知欧洲收货人调整仓库收货计划，避免连锁断货风险。",
        factoryPinyin: "Zhǔtí: Jǐnjí tíxǐng — běnzhōu Yántián zhì Lùtèdān chuánqī jiégǎng jí yánwù fēngxiǎn yùjǐng. Chén zhǔguǎn nín hǎo: Gāng jiē chuángōngsī tōngzhī, yuándìng běnzhōuwǔ jiégǎng de zhíháng Lùtèdān mǔchuán yīn qiánqī gǎngkǒu tiānqì yánwù, jiédān jí VGM jiézhǐ shíjiān yǐ tíqián shí'èr xiǎoshí. Qǐng guìchǎng wùbì yú míngrì zhōngwǔ shí'èr diǎn qián wánchéng zhuāngguì bìng huíchuán xiāngfēnghào yǔ zhǔnquè guòbàngdān. Ruò wúfǎ gǎnshàng běn hángcì, qǐng lìjí gàozhī, yǐbiàn wǒsī tíqián tōngzhī Ōuzhōu shōuhuòrén tiáozhěng cāngkù shōuhuò jìhuà, bìmiǎn liánsuǒ duànhuò fēngxiǎn.",
        euManagerEn: "Subject: Schedule Alert — Yantian-Rotterdam Cut-off Acceleration & Mitigation\nDear Supply Chain Director,\nThe carrier has advanced the SI and VGM cut-off by twelve hours for this week's Yantian-to-Rotterdam sailing due to upstream weather congestion. We have placed the factory on an accelerated stuffing deadline for tomorrow noon to secure gate-in and avoid a one-week rollover. Should loading slip, we have pre-booked a backup allocation on the following feeder loop and will update the Rotterdam warehouse receiving slot immediately.",
        viSummary: "Thông báo khẩn về việc hãng tàu đẩy sớm hạn cắt chứng từ và VGM thêm 12 giờ tại Diêm Điền, yêu cầu nhà máy chốt đóng hàng trước trưa mai và thông báo phương án dự phòng cho kho Rotterdam."
      },
      {
        id: "em-03",
        titleVi: "Khiếu nại lỗi chất lượng và yêu cầu báo cáo khắc phục phòng ngừa CAPA",
        titleEn: "Quality Defect Claim and CAPA Request",
        factoryZh: "主题：关于PO-2026-418批次外观缺陷索赔及CAPA整改要求\n李厂长您好：\n我司汉堡仓库在入库抽检中发现，本批货物中部分箱件存在涂层剥落及内衬防潮袋破损，缺陷率超出双方协议约定的AQL上限。现随函附上检验照片、批次号及受损清单。请贵司于三个工作日内提交书面根本原因分析及纠正与预防措施报告，并就返工补货或货款折让方案给予正式回复。",
        factoryPinyin: "Zhǔtí: Guānyú PO-2026-418 pīcì wàiguān quēxiàn suǒpéi jí CAPA zhěnggǎi yāoqiú. Lǐ chǎngzhǎng nín hǎo: Wǒsī Hànbǎo cāngkù zài rùkù chōujiǎn zhōng fāxiàn, běnpī huòwù zhōng bùfen xiāngjiàn cúnzài túcéng bōluò jí nèichèn fángcháodài pòsǔn, quēxiànlǜ chāochū shuāngfāng xiéyì yuēdìng de AQL shàngxiàn. Xiàn suíhán fùshàng jiǎnyàn zhàopiàn, pīcìhào jí shòusǔn qīngdān. Qǐng guìsī yú sān gè gōngzuòrì nèi tíjiāo shūmiàn gēnběn yuányīn fēnxī jí jiūzhèng yǔ yùfáng cuòshī bàogào, bìng jiù fǎngōng bǔhuò huò huòkuǎn zhéràng fāng'àn jǐyǔ zhèngshì huífù.",
        euManagerEn: "Subject: Quality Escalation — Formal Defect Claim & CAPA Initiated (Hamburg Lot)\nDear Quality Director,\nInbound receiving inspection at our Hamburg warehouse identified coating defects and torn moisture-barrier liners exceeding our contracted AQL threshold. A formal claim dossier with photographic evidence and affected lot numbers has been issued to the manufacturer. We requested a structured root-cause CAPA report within three business days alongside commercial remedies (replacement units or credit note) and quarantined the non-conforming pallets.",
        viSummary: "Thư khiếu nại lỗi chất lượng sau kiểm tra nhập kho tại Hamburg, đính kèm ảnh bằng chứng và yêu cầu nhà máy nộp báo cáo CAPA trong 3 ngày làm việc cùng phương án bồi hoàn hoặc đổi hàng."
      },
      {
        id: "em-04",
        titleVi: "Yêu cầu hồ sơ tuân thủ EU (CE, REACH và dữ liệu phát thải carbon CBAM)",
        titleEn: "EU Regulatory Request (CE / REACH / CBAM Carbon Data)",
        factoryZh: "主题：欧盟合规资料更新通知——CE符合性声明、REACH与CBAM碳排放数据\n赵经理您好：\n为确保贵司发往欧盟市场的金属及机电产品持续满足最新监管要求，请于本月底前向我司合规部提供以下更新文件：第一，现行有效的CE符合性声明与检测报告；第二，REACH高度关注物质合规确认函；第三，按欧盟CBAM申报模板填写的厂区直接与间接隐含碳排放数据。完整资料将直接影响后续年度框架订单的续签评估。",
        factoryPinyin: "Zhǔtí: Ōuméng héguī zīliào gēngxīn tōngzhī — CE fúhéxìng shēngmíng, REACH yǔ CBAM tàn páifàng shùjù. Zhào jīnglǐ nín hǎo: Wéi quèbǎo guìsī fāwǎng Ōuméng shìchǎng de jīnshǔ jí jīdiàn chǎnpǐn chíxù mǎnzú zuìxīn jiānguǎn yāoqiú, qǐng yú běnyuèdǐ qián xiàng wǒsī héguībù tígōng yǐxià gēngxīn wénjiàn: dìyī, xiànxíng yǒuxiào de CE fúhéxìng shēngmíng yǔ jiǎncè bàogào; dì'èr, REACH gāodù guānzhù wùzhì héguī quèrènhán; dìsān, àn Ōuméng CBAM shēnbào múbǎn tiánxiě de chǎngqū zhíjiē yǔ jiànjiē yǐnhán tàn páifàng shùjù. Wánzhěng zīliào jiāng zhíjiē yǐngxiǎng hòuxù niándù kuàngjià dìngdān de xùqiān pínggū.",
        euManagerEn: "Subject: Regulatory Readiness — Supplier CE, REACH & CBAM Data Collection\nDear Head of Compliance,\nWe have formally requested updated compliance packs from our strategic Chinese suppliers ahead of the quarterly EU reporting window. Each supplier has been instructed to deliver current CE Declarations of Conformity, REACH SVHC confirmation letters, and installation-level CBAM embedded emissions data using the official EU communication template. Compliance completion is tied directly to annual framework contract renewal.",
        viSummary: "Thư yêu cầu nhà cung cấp Trung Quốc nộp hồ sơ tuân thủ cập nhật gồm Tuyên bố CE, xác nhận SVHC theo REACH và dữ liệu phát thải carbon tích hợp theo mẫu CBAM trước cuối tháng."
      },
      {
        id: "em-05",
        titleVi: "Phân tích tuyến vận tải đường biển so với đường sắt liên vận Trung–Âu",
        titleEn: "Sea vs. China–Europe Rail Routing Analysis",
        factoryZh: "主题：亚欧旺季多式联运分流方案——海运与中欧班列舱位协同\n刘经理您好：\n针对即将到来的欧洲促销季，我司拟对华东及西南工厂货源实施双通道发运：大宗常规库存继续走上海洋山海运整箱以控制综合物流成本；高周转新品及紧急补货改走西安或重庆始发的中欧班列直达杜伊斯堡，以缩短在途周期并降低断货风险。请于本周四前提供铁路固定班期表、口岸通关衔接说明及海铁联运风险预案。",
        factoryPinyin: "Zhǔtí: Yà-Ōu wàngjì duōshì liányùn fēnliú fāng'àn — hǎiyùn yǔ Zhōng-Ōu bānliè cāngwèi xiétóng. Liú jīnglǐ nín hǎo: Zhēnduì jíjiāng dàolái de Ōuzhōu cùxiāojì, wǒsī nǐ duì Huádōng jí Xīnán gōngchǎng huòyuán shíshī shuāng tōngdào fāyùn: dàzōng chángguī kùcún jìxù zǒu Shànghǎi Yángshān hǎiyùn zhěngxiāng yǐ kòngzhì zōnghé wùliú chéngběn; gāo zhōuzhuǎn xīnpǐn jí jǐnjí bǔhuò gǎizǒu Xī'ān huò Chóngqìng shǐfā de Zhōng-Ōu bānliè zhídá Dùyīsībǎo, yǐ suōduǎn zàitú zhōuqī bìng jiàngdī duànhuò fēngxiǎn. Qǐng yú běnzhōusì qián tígōng tiělù gùdìng bānqībiǎo, kǒu'àn tōngguān xiánjiē shuōmíng jí hǎitiě liányùn fēngxiǎn yù'àn.",
        euManagerEn: "Subject: Peak-Season Routing Strategy — Ocean and China–Europe Rail Split\nDear VP of Supply Chain,\nTo balance freight spend against shelf availability during the upcoming European peak season, we recommend a dual-corridor routing architecture. Baseline inventory will remain on Shanghai Yangshan FCL ocean contracts for cost efficiency, while high-velocity launches and replenishment lots will shift to the China–Europe Railway Express into Duisburg to cut lead times and working-capital lockup. Detailed transit milestones and border contingency buffers will be presented Thursday.",
        viSummary: "Đề xuất chiến lược vận tải hai luồng cho mùa cao điểm: giữ hàng nền đi đường biển FCL từ Thượng Hải để tối ưu chi phí và chuyển hàng quay vòng nhanh sang tàu đường sắt Trung–Âu tới Duisburg để rút ngắn thời gian giao."
      },
      {
        id: "em-06",
        titleVi: "Xác nhận mốc thanh toán và giải phóng vận đơn (T/T, L/C và Điện giao hàng)",
        titleEn: "Payment Milestone and Bill of Lading Release (T/T / L/C / Telex Release)",
        factoryZh: "主题：关于第12批出货尾款结算及提单电放确认函\n张财务您好：\n我司已审核完毕贵司发来的商业发票、装箱单及海运提单草本，确认货物数量、箱封号及收货人EORI信息均符合合同约定。财务部已按电汇条款安排支付合同尾款，银行汇款底单见附件。请贵司查收到账后，立即向船公司办理提单电放，并将正式电放确认通知回传我司及安特卫普清关代理。",
        factoryPinyin: "Zhǔtí: Guānyú dì shí'èr pī chūhuò wěikuǎn jiésuàn jí tídān diànfàng quèrènhán. Zhāng cáiwù nín hǎo: Wǒsī yǐ shěnhé wánbì guìsī fālái de shāngyè fāpiào, zhuāngxiāngdān jí hǎiyùn tídān cǎoběn, quèrèn huòwù shùliàng, xiāngfēnghào jí shōuhuòrén EORI xìnxī jūn fúhé hétóng yuēdìng. Cáiwùbù yǐ àn diànhuì tiáokuǎn ānpái zhīfù hétóng wěikuǎn, yínháng huìkuǎn dǐdān jiàn fùjiàn. Qǐng guìsī cháshōu dàozhàng hòu, lìjí xiàng chuángōngsī bànlǐ tídān diànfàng, bìng jiāng zhèngshì diànfàng quèrèn tōngzhī huíchuán wǒsī jí Āntèwèipǔ qīngguān dàilǐ.",
        euManagerEn: "Subject: Treasury & Release Confirmation — Lot 12 Balance Settled / Telex Release Pending\nDear Finance Controller,\nShipping documents for Lot 12 (Commercial Invoice, Packing List, and B/L copy) passed three-way matching with zero discrepancies. Treasury has released the T/T balance per contract milestones, and the payment advice has been transmitted to the exporter. Upon bank credit confirmation, the supplier will execute a Telex Release directly with the carrier so our Antwerp customs broker can clear the shipment prior to vessel arrival without demurrage risk.",
        viSummary: "Xác nhận đã đối chiếu ba bên bộ chứng từ lô 12 hoàn toàn khớp, đã chuyển khoản phần còn lại theo điều kiện T/T và yêu cầu nhà xuất khẩu làm điện giao hàng để đại lý Antwerp thông quan sớm."
      },
      {
        id: "em-07",
        titleVi: "Tổng kết đánh giá nhà cung cấp sau Hội chợ Quảng Giao",
        titleEn: "Canton Fair Supplier Audit Recap",
        factoryZh: "主题：广交会后实地验厂总结及下一步样品开发安排\n林总您好：\n感谢贵司团队本周热情接待我司采购与品控团队赴佛山工厂实地考察。综合评估显示，贵司自动化装配线、来料检验流程及外贸单证团队均达到我司核心供应商准入标准。现请贵司按随附技术规格书安排三套工程样机打样，并同步提供RCEP及欧洲合规文件清单，以便推进后续年度合作协议签署。",
        factoryPinyin: "Zhǔtí: Guǎngjiāohuì hòu shídì yànchǎng zǒngjié jí xià yībù yàngpǐn kāifā ānpái. Lín zǒng nín hǎo: Gǎnxiè guìsī tuánduì běnzhōu rèqíng jiēdài wǒsī cǎigòu yǔ pǐnkòng tuánduì fù Fóshān gōngchǎng shídì kǎochá. Zōnghé pínggū xiǎnshì, guìsī zìdònghuà zhuāngpèixiàn, láiliào jiǎnyàn liúchéng jí wàimào dānzhèng tuánduì jūn dádào wǒsī héxīn gōngyìngshāng zhǔnrù biāozhǔn. Xiàn qǐng guìsī àn suífù jìshù guīgéshū ānpái sāntào gōngchéng yàngjī dǎyàng, bìng tóngbù tígōng RCEP jí Ōuzhōu héguī wénjiàn qīngdān, yǐbiàn tuījìn hòuxù niándù hézuò xiéyì qiānshǔ.",
        euManagerEn: "Subject: Post-Canton Fair Audit Recap — Foshan Supplier Approved for Prototyping\nDear Sourcing Director,\nFollowing our on-site audit in Foshan after the Canton Fair, the shortlisted manufacturer passed our technical, incoming-QC, and export-documentation benchmarks. Their automated assembly lines and batch traceability align with EU due-diligence expectations, and they are capable of supplying both direct EU orders and RCEP-compliant sub-assemblies for Vietnam. We have authorized three engineering samples prior to finalizing the annual Master Supply Agreement.",
        viSummary: "Báo cáo tổng kết đánh giá nhà máy tại Phật Sơn sau Hội chợ Quảng Giao đạt chuẩn dây chuyền, kiểm soát chất lượng đầu vào và chứng từ; bước tiếp theo là làm ba mẫu kỹ thuật trước khi ký hợp đồng năm."
      },
      {
        id: "em-08",
        titleVi: "Đàm phán hợp đồng cước biển năm và điều khoản miễn lưu bãi lưu vỏ",
        titleEn: "Annual Ocean Freight and Demurrage Negotiation",
        factoryZh: "主题：下一年度亚欧航线海运合约及目的港免箱期谈判要点\n吴总您好：\n基于我司过去一年在上海洋山、宁波及盐田港至鹿特丹、汉堡航线的稳定出运记录，现启动下一年度海运长约续签谈判。除保持具有竞争力的基准运价结构外，我司重点希望在合约中明确三项保障条款：第一，旺季最低每周保舱配额；第二，目的港滞港费与滞箱费合并延长免租期；第三，附加费调整须提前三十日书面通知。期待下周二视频会议进一步磋商。",
        factoryPinyin: "Zhǔtí: Xià yī niándù Yà-Ōu hángxiàn hǎiyùn héyuē jí mùdìgǎng miǎnxiāngqī tánpàn yàodiǎn. Wú zǒng nín hǎo: Jīyú wǒsī guòqù yīnián zài Shànghǎi Yángshān, Níngbō jí Yántiángǎng zhì Lùtèdān, Hànbǎo hángxiàn de wěndìng chūyùn jìlù, xiàn qǐdòng xià yī niándù hǎiyùn chángyuē xùqiān tánpàn. Chú bǎochí jùyǒu jìngzhēnglì de jīzhǔn yùnjià jiégòu wài, wǒsī zhòngdiǎn xīwàng zài héyuē zhōng míngquè sānxiàng bǎozhàng tiáokuǎn: dìyī, wàngjì zuìdī měizhōu bǎocāng pèi'é; dì'èr, mùdìgǎng zhìgǎngfèi yǔ zhìxiāngfèi hébìng yáncháng miǎnzūqī; dìsān, fùjiāfèi tiáozhěng xū tíqián sānshírì shūmiàn tōngzhī. Qīdài xiàzhōu'èr shìpín huìyì jìnyībù cuōshāng.",
        euManagerEn: "Subject: Annual Ocean Tender Strategy — Allocation & D&D Protection Clauses\nDear Head of Global Logistics,\nWe have initiated next year's Asia–Europe ocean contract renewal covering Shanghai Yangshan, Ningbo, and Yantian to Rotterdam and Hamburg. Beyond competitive base freight structure, our negotiation mandate prioritizes three operational safeguards: guaranteed weekly peak-season space allocations, extended combined destination demurrage and detention free time, and a mandatory 30-day advance written notice for surcharge revisions. Formal carrier alignment call is scheduled for Tuesday.",
        viSummary: "Khởi động đàm phán hợp đồng cước biển năm tuyến Á–Âu với ba điều khoản bảo vệ trọng tâm: cam kết giữ chỗ hàng tuần mùa cao điểm, kéo dài thời gian miễn lưu bãi lưu vỏ kết hợp và thông báo điều chỉnh phụ phí trước 30 ngày."
      }
    ],

    parallelArticles10: [
      {
        id: "art-01",
        domain: "ocean_rail",
        titleZh: "海铁并行：亚欧供应链的韧性重构",
        titleEn: "Sea and Rail in Parallel: Rebuilding Resilience in Asia–Europe Supply Chains",
        titleVi: "Đường biển và đường sắt song hành: Tái cấu trúc sức chống chịu chuỗi cung ứng Á–Âu",
        paragraphs: [
          {
            zh: "近年来，国际海运主航线屡受气候异常与地缘波动考验，单一依赖海运已难以兼顾效率与安全。越来越多欧洲制造与零售企业开始采用“海运打底、铁运补缺”的双通道策略。",
            pinyin: "Jìnniánlái, guójì hǎiyùn zhǔ hángxiàn lǚshòu qìhòu yìcháng yǔ dìyuán bōdòng kǎoyàn, dānyī yīlài hǎiyùn yǐ nányǐ jiāngù xiàolǜ yǔ ānquán. Yuèláiyuè duō Ōuzhōu zhìzào yǔ língshòu qǐyè kāishǐ cǎiyòng 'hǎiyùn dǎdǐ, tiěyùn bǔquē' de shuāng tōngdào cèlüè.",
            en: "In recent years, major ocean lanes have faced repeated weather disruptions and geopolitical rerouting, making single-mode maritime reliance insufficient to balance cost and continuity. Growing numbers of European manufacturers and retailers now deploy a dual-corridor model anchored by ocean freight and supplemented by rail.",
            vi: "Những năm gần đây, các tuyến hàng hải chủ lực liên tục chịu thử thách từ biến đổi thời tiết và biến động địa chính trị, khiến việc phụ thuộc đơn lẻ vào đường biển khó cân bằng giữa chi phí và độ an toàn. Ngày càng nhiều doanh nghiệp sản xuất và bán lẻ Châu Âu áp dụng chiến lược hai luồng: lấy đường biển làm nền và đường sắt bổ khuyết."
          },
          {
            zh: "从重庆、西安与义乌始发的中欧班列，以稳定班期连接杜伊斯堡与汉堡等内陆枢纽，显著缩短了精密仪器与季节性商品的在途周期，成为现代跨境物流不可或缺的战略缓冲。",
            pinyin: "Cóng Chóngqìng, Xī'ān yǔ Yìwū shǐfā de Zhōng-Ōu bānliè, yǐ wěndìng bānqī liánjiē Dùyīsībǎo yǔ Hànbǎo děng nèilù shūniǔ, xiǎnzhù suōduǎn le jīngmì yíqì yǔ jìjiéxìng shāngpǐn de zàitú zhōuqī, chéngwéi xiàndài kuàjìng wùliú bùkě huòquē de zhànlüè huǎnchōng.",
            en: "Departing from Chongqing, Xi'an, and Yiwu, the China–Europe Railway Express links inland hubs such as Duisburg and Hamburg on predictable timetables, compressing transit cycles for precision equipment and seasonal merchandise while serving as a strategic buffer.",
            vi: "Xuất phát từ Trùng Khánh, Tây An và Nghĩa Ô, tàu liên vận đường sắt Trung–Âu kết nối ổn định tới các đầu mối nội địa như Duisburg và Hamburg, rút ngắn đáng kể thời gian vận chuyển cho thiết bị chính xác và hàng thời vụ, trở thành lớp đệm chiến lược thiết yếu."
          }
        ],
        drillPromptEn: "Summarize in two corporate English sentences when a logistics manager should split cargo between Shanghai ocean FCL and Chongqing rail.",
        drillPromptZh: "请用两句商务中文说明：在什么情况下企业应将海运整箱与中欧班列组合发运？"
      },
      {
        id: "art-02",
        domain: "eu_compliance",
        titleZh: "碳边境调节机制与绿色供应链转型",
        titleEn: "CBAM and the Green Transformation of Cross-Border Supply Chains",
        titleVi: "Cơ chế điều chỉnh biên giới carbon và chuyển đổi chuỗi cung ứng xanh",
        paragraphs: [
          {
            zh: "随着欧盟碳边境调节机制逐步迈向全面实施，产品全生命周期的碳排放数据正成为进入欧洲市场的硬性门槛。钢铁、铝材及化工等行业首当其冲，倒逼上游制造端建立精确的能耗核算体系。",
            pinyin: "Suízhe Ōuméng tàn biānjìng tiáojié jīzhì zhúbù màixiàng quánmiàn shíshī, chǎnpǐn quán shēngmìng zhōuqī de tàn páifàng shùjù zhèng chéngwéi jìnrù Ōuzhōu shìchǎng de yìngxìng ménkǎn. Gāngtiě, lǚcái jí huàgōng děng hángyè shǒudāngqíchōng, dàobī shàngyóu zhìzàoduān jiànlì jīngquè de nénghào hésuàn tǐxì.",
            en: "As the EU Carbon Border Adjustment Mechanism advances toward full implementation, lifecycle emissions data is becoming a mandatory gateway into the European market. Steel, aluminum, and chemical sectors stand at the forefront, compelling upstream factories to build verifiable energy accounting systems.",
            vi: "Khi Cơ chế điều chỉnh biên giới carbon của EU tiến tới thực thi toàn diện, dữ liệu phát thải carbon theo vòng đời sản phẩm đang trở thành ngưỡng bắt buộc để vào thị trường Châu Âu. Ngành thép, nhôm và hóa chất chịu tác động đầu tiên, thúc đẩy nhà máy thượng nguồn xây dựng hệ thống hạch toán năng lượng chính xác."
          },
          {
            zh: "对中越两地出口企业而言，提前部署绿电采购、优化工艺排放并完成第三方核查，不仅能降低未来碳关税成本，更将在欧洲大客户长期招标中赢得显著的合规溢价。",
            pinyin: "Duì Zhōng-Yuè liǎngdì chūkǒu qǐyè éryán, tíqián bùshǔ lǜdiàn cǎigòu, yōuhuà gōngyì páifàng bìng wánchéng dìsānfāng héchá, bùjǐn néng jiàngdī wèilái tàn guānshuì chéngběn, gèng jiāng zài Ōuzhōu dà kèhù chángqī zhāobiāo zhōng yíngdé xiǎnzhù de héguī yìjià.",
            en: "For exporters across China and Vietnam, early adoption of renewable power, cleaner process engineering, and third-party verification lowers future carbon-border exposure while securing a clear compliance advantage in long-term European tenders.",
            vi: "Với doanh nghiệp xuất khẩu tại Trung Quốc và Việt Nam, chủ động dùng điện sạch, tối ưu phát thải công nghệ và hoàn tất kiểm định độc lập không chỉ giảm chi phí thuế carbon tương lai mà còn tạo lợi thế tuân thủ rõ rệt trong các gói thầu dài hạn tại Châu Âu."
          }
        ],
        drillPromptEn: "Draft a brief three-point checklist in English for collecting verified CBAM data from an upstream aluminum supplier.",
        drillPromptZh: "请用中文列出向铝材供应商收集CBAM核查数据时的三项核心核对要点。"
      },
      {
        id: "art-03",
        domain: "customs_origin",
        titleZh: "RCEP与EVFTA框架下的原产地合规筹划",
        titleEn: "Origin Compliance Planning Under RCEP and EVFTA Frameworks",
        titleVi: "Hoạch định tuân thủ xuất xứ trong khuôn khổ RCEP và EVFTA",
        paragraphs: [
          {
            zh: "在区域经济一体化格局下，许多跨国企业依托中国完备的原材料集群，在越南完成深加工与总装，再面向欧盟市场出口。这一模式的核心竞争力在于精准运用RCEP与EVFTA原产地规则。",
            pinyin: "Zài qūyù jīngjì yītǐhuà géjú xià, xǔduō kuàguó qǐyè yītuō Zhōngguó wánbèi de yuáncáiliào jíqún, zài Yuènán wánchéng shēnjiāgōng yǔ zǒngzhuāng, zài miànxiàng Ōuméng shìchǎng chūkǒu. Zhè yī móshì de héxīn jìngzhēnglì zàiyú jīngzhǔn yùnyòng RCEP yǔ EVFTA yuánchǎndì guīzé.",
            en: "Under regional economic integration, many multinationals combine China's upstream component clusters with value-added assembly in Vietnam before exporting to the European Union. The competitive core of this model lies in mastering RCEP and EVFTA rules of origin.",
            vi: "Trong bối cảnh hội nhập kinh tế khu vực, nhiều tập đoàn đa quốc gia kết hợp cụm nguyên phụ liệu hoàn chỉnh của Trung Quốc với khâu gia công sâu và lắp ráp tại Việt Nam trước khi xuất sang EU. Năng lực cạnh tranh cốt lõi nằm ở việc vận dụng chính xác quy tắc xuất xứ RCEP và EVFTA."
          },
          {
            zh: "合规团队须严格核算区域价值成分与税则归类改变标准，妥善保存上游采购发票、工艺流程记录及EUR.1或REX声明，确保关税优惠经得起海关事后稽查。",
            pinyin: "Héguī tuánduì xū yángé hésuàn qūyù jiàzhí chéngfèn yǔ shuìzé guīlèi gǎibiàn biāozhǔn, tuǒshàn bǎocún shàngyóu cǎigòu fāpiào, gōngyì liúchéng jìlù jí EUR.1 huò REX shēngmíng, quèbǎo guānshuì yōuhuì jīngdeqǐ hǎiguān shìhòu jīchá.",
            en: "Compliance teams must rigorously audit Regional Value Content and Change in Tariff Classification thresholds while archiving upstream invoices, production logs, and EUR.1 or REX statements to withstand post-clearance customs verification.",
            vi: "Đội ngũ tuân thủ phải tính toán chặt chẽ hàm lượng giá trị khu vực và tiêu chí chuyển đổi mã số thuế, đồng thời lưu trữ đầy đủ hóa đơn đầu vào, nhật ký sản xuất và chứng từ EUR.1 hoặc REX để đáp ứng kiểm tra sau thông quan."
          }
        ],
        drillPromptEn: "Explain the difference between RCEP cumulation for China-Vietnam inputs and EVFTA origin qualification for EU imports.",
        drillPromptZh: "请简述企业在“中国供料—越南组装—出口欧盟”模式中应如何区分RCEP与EVFTA原产地文件。"
      },
      {
        id: "art-04",
        domain: "ocean_rail",
        titleZh: "盐田至鹿特丹：超大型集装箱船航线的协同效率",
        titleEn: "Yantian to Rotterdam: Operational Synchronization on Ultra-Large Container Loops",
        titleVi: "Diêm Điền đến Rotterdam: Hiệu suất đồng bộ trên tuyến tàu container siêu lớn",
        paragraphs: [
          {
            zh: "连接华南制造业腹地与欧洲门户的盐田至鹿特丹航线，是全球最具代表性的亚欧海运大动脉之一。依靠深水泊位与自动化岸桥，两港能够高效接卸两万标准箱以上的超大型母船。",
            pinyin: "Liánjiē Huánán zhìzàoyè fùdì yǔ Ōuzhōu ménhù de Yántián zhì Lùtèdān hángxiàn, shì quánqiú zuìjù dàibiǎoxìng de Yà-Ōu hǎiyùn dà dòngmài zhī yī. Yīkào shēnshuǐ bówèi yǔ zìdònghuà ànqiáo, liǎnggǎng nénggòu gāoxiào jiēxiè liǎngwàn biāozhǔnxiāng yǐshàng de chāodàxíng mǔchuán.",
            en: "Linking South China's manufacturing hinterland with Europe's primary maritime gateway, the Yantian-to-Rotterdam corridor stands among the world's benchmark Asia–Europe shipping arteries. Deep-water berths and automated cranes enable both terminals to turn around ultra-large vessels exceeding 20,000 TEU.",
            vi: "Kết nối vùng sản xuất Hoa Nam với cửa ngõ hàng hải Châu Âu, tuyến Diêm Điền – Rotterdam là một trong những huyết mạch đường biển Á–Âu tiêu biểu toàn cầu. Nhờ cầu cảng nước sâu và cẩu bờ tự động, hai cảng có thể giải phóng nhanh các tàu mẹ vượt mốc 20.000 TEU."
          },
          {
            zh: "然而，海运提速不仅取决于航速，更取决于数字化单证协同。通过提前完成ICS2安全申报、电子提单流转与内陆驳船预约，货主可显著压缩集装箱滞港时间并降低目的港综合物流风险。",
            pinyin: "Rán'ér, hǎiyùn tísù bùjǐn qǔjuéyú hángsù, gèng qǔjuéyú shùzìhuà dānzhèng xiétóng. Tōngguò tíqián wánchéng ICS2 ānquán shēnbào, diànzǐ tídān liúzhuǎn yǔ nèilù bóchuán yùyuē, huòzhǔ kě xiǎnzhù yāsuō jízhuāngxiāng zhìgǎng shíjiān bìng jiàngdī mùdìgǎng zōnghé wùliú fēngxiǎn.",
            en: "Yet corridor speed depends as much on digital documentation as on vessel knots. Filing ICS2 pre-arrival data early, adopting electronic bills of lading, and pre-booking Rhine barges sharply cut terminal dwell time and destination demurrage exposure.",
            vi: "Tuy nhiên, tốc độ hành lang không chỉ phụ thuộc tốc độ tàu mà còn ở đồng bộ chứng từ số. Khai báo an ninh ICS2 sớm, dùng vận đơn điện tử và đặt trước sà lan sông Rhine giúp rút ngắn đáng kể thời gian lưu bãi và giảm rủi ro phí phát sinh tại cảng đích."
          }
        ],
        drillPromptEn: "Identify three operational bottlenecks between Yantian gate-in and Rotterdam inland delivery and propose one control for each.",
        drillPromptZh: "请指出从盐田港入闸到鹿特丹内陆派送过程中最常见的三个节点风险及应对措施。"
      },
      {
        id: "art-05",
        domain: "macro_trade",
        titleZh: "新质生产力背景下的中国供应链升级",
        titleEn: "Upgrading China's Supply Chains Under New Quality Productive Forces",
        titleVi: "Nâng cấp chuỗi cung ứng Trung Quốc trong bối cảnh Lực lượng sản xuất chất lượng mới",
        paragraphs: [
          {
            zh: "当前中国制造业正加速从规模扩张转向创新驱动，以电动汽车、锂电池和光伏产品为代表的绿色高端出口结构日益稳固。智能工厂与工业互联网的普及，显著提升了中小批量柔性交付能力。",
            pinyin: "Dāngqián Zhōngguó zhìzàoyè zhèng jiāsù cóng guīmó kuòzhāng zhuǎnxiàng chuàngxīn qūdòng, yǐ diàndòng qìchē, lǐdiànchí hé guāngfú chǎnpǐn wéi dàibiǎo de lǜsè gāoduān chūkǒu jiégòu rìyì wěngù. Zhìnéng gōngchǎng yǔ gōngyè hùliánwǎng de pǔjí, xiǎnzhù tíshēng le zhōngxiǎo pīliàng róuxìng jiāofù nénglì.",
            en: "China's manufacturing base is shifting rapidly from scale expansion to innovation-led upgrading, anchored by green high-value exports such as electric vehicles, lithium batteries, and photovoltaics. Smart factories and industrial internet platforms have markedly strengthened flexible small-batch fulfillment.",
            vi: "Nền sản xuất Trung Quốc đang chuyển nhanh từ mở rộng quy mô sang tăng trưởng dựa trên đổi mới sáng tạo, với cơ cấu xuất khẩu xanh giá trị cao nổi bật ở xe điện, pin lithium và điện mặt trời. Nhà máy thông minh và internet công nghiệp giúp nâng cao rõ rệt năng lực giao hàng linh hoạt theo lô vừa và nhỏ."
          },
          {
            zh: "对于国际采购与物流从业者而言，理解中国产业集群的梯度转移规律与绿色合规趋势，是制定更具前瞻性的全球采购与库存配置方案的重要前提。",
            pinyin: "Duìyú guójì cǎigòu yǔ wùliú cóngyèzhě éryán, lǐjiě Zhōngguó chǎnyè jíqún de tīdù zhuǎnyí guīlǜ yǔ lǜsè héguī qūshì, shì zhìdìng gèngjù qiánzhānxìng de quánqiú cǎigòu yǔ kùcún pèizhì fāng'àn de zhòngyào qiántí.",
            en: "For international procurement and logistics professionals, tracking how Chinese industrial clusters upgrade and adopt green compliance standards is essential to building forward-looking global sourcing and inventory strategies.",
            vi: "Với nhân sự thu mua và logistics quốc tế, nắm bắt quy luật chuyển dịch phân tầng của các cụm công nghiệp Trung Quốc cùng xu hướng tuân thủ xanh là nền tảng để xây dựng chiến lược thu mua và phân bổ tồn kho có tầm nhìn."
          }
        ],
        drillPromptEn: "Discuss how China's shift toward green high-tech exports changes container handling and dangerous-goods compliance for EU forwarders.",
        drillPromptZh: "请结合新能源产品出口趋势，简述欧亚货代在危险品合规与特种箱操作方面面临的新要求。"
      },
      {
        id: "art-06",
        domain: "macro_trade",
        titleZh: "中越经贸走廊：从边贸互补到产业链协同",
        titleEn: "The China–Vietnam Trade Corridor: From Border Complementarity to Industrial Integration",
        titleVi: "Hành lang thương mại Việt–Trung: Từ bổ trợ biên mậu đến liên kết chuỗi sản xuất",
        paragraphs: [
          {
            zh: "中越经贸合作已从传统的农产品与日用品边贸，深化为覆盖电子元器件、纺织面料与机械装备的产业链深度耦合。友谊关、东兴等陆路口岸的智慧化改造，大幅提升了跨境整车通关效率。",
            pinyin: "Zhōng-Yuè jīngmào hézuò yǐ cóng chuántǒng de nóngchǎnpǐn yǔ rìyòngpǐn biānmào, shēnhuà wéi fùgài diànzǐ yuánqìjiàn, fǎngzhī miànliào yǔ jīxiè zhuāngbèi de chǎnyèliàn shēndù ǒuhé. Yǒuyìguān, Dōngxīng děng lùlù kǒu'àn de zhìhuìhuà gǎizào, dàfú tíshēng le kuàjìng zhěngchē tōngguān xiàolǜ.",
            en: "China–Vietnam economic ties have evolved beyond traditional border trade in agricultural and consumer goods into deep industrial integration across electronics components, textiles, and machinery. Smart-border upgrades at Friendship Pass and Dongxing have accelerated cross-border truck clearance.",
            vi: "Hợp tác kinh tế Việt–Trung đã vượt qua hình thái biên mậu nông sản và hàng tiêu dùng truyền thống để tiến tới gắn kết sâu về chuỗi sản xuất linh kiện điện tử, vải dệt và máy móc. Quá trình thông minh hóa cửa khẩu Hữu Nghị, Đông Hưng giúp tăng mạnh hiệu suất thông quan xe hàng xuyên biên giới."
          },
          {
            zh: "与此同时，越南正加快提升本土配套能力与正贸检疫标准。既懂中文商务沟通又精通国际贸易合规的双语人才，正成为连接中越工厂与欧美终端市场的关键桥梁。",
            pinyin: "Yǔcǐ tóngshí, Yuènán zhèng jiākuài tíshēng běntǔ pèitào nénglì yǔ zhèngmào jiǎnyì biāozhǔn. Jì dǒng Zhōngwén shāngwù gōutōng yòu jīngtōng guójì màoyì héguī de shuāngyǔ réncái, zhèng chéngwéi liánjiē Zhōng-Yuè gōngchǎng yǔ Ōu-Měi zhōngduān shìchǎng de guānjiàn qiáoliáng.",
            en: "Meanwhile, Vietnam is strengthening domestic supporting industries and formal phytosanitary export standards. Trilingual professionals fluent in Chinese factory coordination and international trade compliance have become vital bridges linking China–Vietnam plants with European and global markets.",
            vi: "Song song đó, Việt Nam đang đẩy mạnh năng lực công nghiệp hỗ trợ nội địa và chuẩn hóa kiểm dịch xuất khẩu chính ngạch. Nhân sự đa ngữ am hiểu giao tiếp nhà máy Trung Quốc lẫn tuân thủ thương mại quốc tế đang trở thành cầu nối thiết yếu tới thị trường Châu Âu và toàn cầu."
          }
        ],
        drillPromptEn: "Outline two logistical advantages of combining land-border component flows from Guangxi with maritime export via Hai Phong.",
        drillPromptZh: "请分析“广西陆路供料 + 海防港海运出口”模式对在越跨国制造企业的两项核心优势。"
      },
      {
        id: "art-07",
        domain: "classics_hr",
        titleZh: "从《西游记》看跨职能项目团队治理",
        titleEn: "Cross-Functional Project Governance Through the Lens of Journey to the West",
        titleVi: "Nhìn từ Tây Du Ký: Quản trị nhóm dự án liên chức năng",
        paragraphs: [
          {
            zh: "若以现代组织管理视角重读《西游记》，取经团队堪称经典的跨职能项目组。唐僧虽不擅降妖，却以清晰愿景与坚定目标锚定方向；孙悟空业务能力顶尖，但初期缺乏边界意识，需要制度约束方能发挥最大效能。",
            pinyin: "Ruò yǐ xiàndài zǔzhī guǎnlǐ shìjiǎo chóngdú Xīyóujì, qǔjīng tuánduì kānchēng jīngdiǎn de kuàzhínéng xiàngmùzǔ. Tángsēng suī bùshàn xiángyāo, què yǐ qīngxī yuànjǐng yǔ jiāndìng mùbiāo máodìng fāngxiàng; Sūn Wùkōng yèwù nénglì dǐngjiān, dàn chūqī quēfá biānjiè yìshí, xūyào zhìdù yuēshù fāngnéng fāhuī zuìdà xiàonéng.",
            en: "Viewed through modern organizational management, the pilgrimage team in Journey to the West represents a classic cross-functional unit. Tang Sanzang anchors strategic vision despite lacking combat skills, while Sun Wukong combines elite execution with an early need for governance guardrails to channel his capability.",
            vi: "Dưới góc nhìn quản trị tổ chức hiện đại, đoàn thỉnh kinh trong Tây Du Ký là mô hình nhóm dự án liên chức năng kinh điển. Đường Tăng dù không giỏi hàng yêu nhưng giữ vững tầm nhìn và mục tiêu; Tôn Ngộ Không có năng lực thực thi đỉnh cao nhưng ban đầu cần khung kỷ luật để phát huy tối đa hiệu quả."
          },
          {
            zh: "猪八戒调节团队氛围并在资源协调中展现灵活度，沙僧则稳守后勤与执行底线。优秀领导者不求成员性格趋同，而在于让互补专长在同一治理框架下协同落地。",
            pinyin: "Zhū Bājiè tiáojié tuánduì fēnwéi bìng zài zīyuán xiétiáo zhōng zhǎnxiàn línghuódù, Shāsēng zé wěnshǒu hòuqín yǔ zhíxíng dǐxiàn. Yōuxiù lǐngdǎozhě bùqiú chéngyuán xìnggé qūtóng, ér zàiyú ràng hùbǔ zhuāncháng zài tóngyī zhìlǐ kuàngjià xià xiétóng luòdì.",
            en: "Zhu Bajie eases team friction and brings pragmatic flexibility, whereas Sha Wujing safeguards logistics continuity and execution discipline. Effective leaders do not enforce uniformity; they align complementary strengths under a unified governance structure.",
            vi: "Trư Bát Giới điều hòa không khí và linh hoạt trong giao tiếp, còn Sa Tăng giữ vững hậu cần và kỷ luật vận hành. Nhà lãnh đạo giỏi không ép thành viên đồng nhất mà kết nối thế mạnh bổ trợ trong cùng một khung quản trị."
          }
        ],
        drillPromptEn: "Map each of the four pilgrims to a modern supply-chain team role and explain why role clarity prevents operational friction.",
        drillPromptZh: "请将取经团队四位成员对应到现代物流项目管理角色，并说明权责边界的重要性。"
      },
      {
        id: "art-08",
        domain: "classics_hr",
        titleZh: "《红楼梦》中的家族治理与内控警示",
        titleEn: "Governance and Internal Control Lessons from Dream of the Red Chamber",
        titleVi: "Bài học quản trị tổ chức và kiểm soát nội bộ từ Hồng Lâu Mộng",
        paragraphs: [
          {
            zh: "《红楼梦》不仅是一部文学巨著，更细腻刻画了大型家族组织的兴衰逻辑。王熙凤执掌荣国府日常运作，魄力与统筹力俱佳，却因权责高度集中、缺乏透明审计与接班梯队，导致内部寻租与现金流失衡不断累积。",
            pinyin: "Hónglóumèng bùjǐn shì yībù wénxué jùzhù, gèng xìnì kèhuà le dàxíng jiāzú zǔzhī de xīngshuāi luójí. Wáng Xīfèng zhízhǎng Róngguófǔ rìcháng yùnzuò, pòlì yǔ tǒngchóulì jùjiā, què yīn quánzé gāodù jízhōng, quēfá tòumíng shěnjì yǔ jiēbān tīduì, dǎozhì nèibù xúnzū yǔ xiànjīnliú shīhéng bùduàn lěijī.",
            en: "Beyond its literary stature, Dream of the Red Chamber offers a sharp study of organizational decline. Wang Xifeng runs the Rongguo household with decisive energy, yet excessive centralization, weak audit transparency, and missing succession planning allow rent-seeking and cash-flow strain to compound.",
            vi: "Không chỉ là kiệt tác văn học, Hồng Lâu Mộng còn khắc họa tinh tế quy luật hưng suy của một tổ chức quy mô lớn. Vương Hy Phượng điều hành phủ Vinh Quốc đầy quyết đoán, nhưng sự tập trung quyền lực quá mức, thiếu kiểm toán minh bạch và không có đội ngũ kế cận khiến thất thoát nội bộ và mất cân đối dòng tiền tích tụ."
          },
          {
            zh: "随后探春推行大观园承包改革，尝试以绩效激励与开源节流扭转颓势，虽因既有利益格局掣肘而未能彻底成功，却为现代企业内控与预算治理留下了深刻启示。",
            pinyin: "Suíhòu Tànchūn tuīxíng Dàguānyuán chéngbāo gǎigé, chángshì yǐ jìxiào jīlì yǔ kāiyuán jiéliú niǔzhuǎn tuíshì, suī yīn jìyǒu lìyì géjú chèzhǒu ér wèinéng chèdǐ chénggōng, què wéi xiàndài qǐyè nèikòng yǔ yùsuàn zhìlǐ liúxià le shēnkè qǐshì.",
            en: "Later, Jia Tanchun introduces contract-based stewardship in the Grand View Garden to curb waste through incentive alignment. Though constrained by entrenched interests, her reform highlights enduring principles of corporate internal control and budget discipline.",
            vi: "Sau đó, Giả Thám Xuân triển khai cải cách khoán quản tại Đại Quan Viên nhằm gắn trách nhiệm với hiệu suất và tiết giảm chi phí. Dù bị cản trở bởi lợi ích cũ, nỗ lực ấy vẫn để lại bài học sâu sắc về kiểm soát nội bộ và kỷ luật ngân sách doanh nghiệp."
          }
        ],
        drillPromptEn: "Contrast Wang Xifeng's centralized operations with Jia Tanchun's incentive reform from a corporate risk-control perspective.",
        drillPromptZh: "请从企业内控角度对比王熙凤的集权管理与探春在大观园推行的承包改革。"
      },
      {
        id: "art-09",
        domain: "tcm_heritage",
        titleZh: "药食同源：中华传统食养文化的历史脉络",
        titleEn: "Food and Medicine Homology: Historical Roots of Classical Chinese Dietary Wellness",
        titleVi: "Dược thực đồng nguyên: Mạch nguồn lịch sử văn hóa thực dưỡng cổ truyền Trung Hoa",
        paragraphs: [
          {
            zh: "“药食同源”是中华传统养生文化的核心理念，主张顺应四时节气与个人体质差异，以日常食材调和饮食结构。早在先秦典籍与《黄帝内经》中，便已系统阐述五味调和与节制饮食的生活哲学。",
            pinyin: "'Yàoshí tóngyuán' shì Zhōnghuá chuántǒng yǎngshēng wénhuà de héxīn lǐniàn, zhǔzhāng shùnyìng sìshí jiéqì yǔ gèrén tǐzhì chāyì, yǐ rìcháng shícái tiáohé yǐnshí jiégòu. Zǎozài Xiānqín diǎnjí yǔ Huángdì Nèijīng zhōng, biàn yǐ xìtǒng chǎnshù wǔwèi tiáohé yǔ jiézhì yǐnshí de shēnghuó zhéxué.",
            en: "The principle of food-and-medicine homology stands at the heart of classical Chinese wellness heritage, emphasizing seasonal alignment and dietary balance through everyday ingredients. Early texts including the Huangdi Neijing framed balanced flavors and moderation as enduring cultural philosophy.",
            vi: "Tư tưởng 'Dược thực đồng nguyên' là hạt nhân của văn hóa dưỡng sinh cổ truyền Trung Hoa, đề cao việc thuận theo bốn mùa tiết khí và cân bằng thực đơn bằng nguyên liệu thường ngày. Từ các điển tịch Tiên Tần và Hoàng Đế Nội Kinh, triết lý điều hòa ngũ vị và tiết chế ăn uống đã được trình bày có hệ thống."
          },
          {
            zh: "枸杞、山药、陈皮与红枣等传统食养食材至今仍常见于东亚家庭汤品与茶饮之中。需客观区分的是，食养属于历史文化与生活方式遗产，不能替代现代临床医学的诊断与治疗。",
            pinyin: "Gǒuqǐ, shānyào, chénpí yǔ hóngzǎo děng chuántǒng shíyǎng shícái zhìjīn réng chángjiàn yú Dōngyà jiātíng tāngpǐn yǔ cháyǐn zhīzhōng. Xū kèguān qūfēn de shì, shíyǎng shǔyú lìshǐ wénhuà yǔ shēnghuó fāngshì yíchǎn, bùnéng tìdài xiàndài línchuáng yīxué de zhěnduàn yǔ zhìliáo.",
            en: "Traditional culinary botanicals such as goji berries, Chinese yam, aged tangerine peel, and jujube remain staples in East Asian soups and infusions. Objectively, dietary wellness belongs to historical and cultural lifestyle heritage and never substitutes licensed clinical medical diagnosis or treatment.",
            vi: "Những nguyên liệu thực dưỡng cổ truyền như kỷ tử, hoài sơn, trần bì và hồng táo đến nay vẫn quen thuộc trong món canh và trà của gia đình Đông Á. Cần phân định khách quan rằng thực dưỡng là di sản văn hóa và lối sống lịch sử, không thay thế chẩn đoán hay điều trị y khoa lâm sàng hiện đại."
          }
        ],
        drillPromptEn: "Summarize why classical Chinese dietary wellness is framed as cultural heritage rather than clinical medical advice.",
        drillPromptZh: "请用简明语言说明传统食养文化与现代临床医学之间的客观边界。"
      },
      {
        id: "art-10",
        domain: "study_abroad",
        titleZh: "赴京沪攻读国际贸易与供应链硕博的学术路径",
        titleEn: "Academic Pathways for International Trade and Supply Chain Graduate Study in Beijing and Shanghai",
        titleVi: "Lộ trình học thuật du học sau đại học ngành Thương mại Quốc tế và Chuỗi cung ứng tại Bắc Kinh và Thượng Hải",
        paragraphs: [
          {
            zh: "对于立志深耕亚欧跨境贸易的越南学子而言，北京与上海汇集了对外经济贸易大学、上海财经大学及上海交通大学等高水平学府，提供扎实的计量经济学训练与丰富的港口及跨国企业实践资源。",
            pinyin: "Duìyú lìzhì shēngēng Yà-Ōu kuàjìng màoyì de Yuènán xuézǐ éryán, Běijīng yǔ Shànghǎi huìjí le Duìwài Jīngjì Màoyì Dàxué, Shànghǎi Cáijīng Dàxué jí Shànghǎi Jiāotōng Dàxué děng gāoshuǐpíng xuéfǔ, tígōng zhāshí de jìliàng jīngjìxué xùnliàn yǔ fēngfù de gǎngkǒu jí kuàguó qǐyè shíjiàn zīyuán.",
            en: "For Vietnamese scholars targeting Asia–Europe cross-border trade, Beijing and Shanghai host premier institutions such as UIBE, SUFE, and Shanghai Jiao Tong University, offering rigorous econometric training alongside direct exposure to major ports and multinational hubs.",
            vi: "Đối với sinh viên Việt Nam định hướng chuyên sâu về thương mại xuyên biên giới Á–Âu, Bắc Kinh và Thượng Hải quy tụ các trường hàng đầu như UIBE, SUFE và Đại học Giao thông Thượng Hải, mang lại nền tảng kinh tế lượng vững chắc cùng cơ hội thực tiễn tại cảng biển và tập đoàn đa quốc gia."
          },
          {
            zh: "申请政府奖学金时，除达到高级汉语水平与英文学术写作标准外，更应围绕真实贸易议题撰写逻辑严谨的研究计划，并提前与目标导师就研究方法展开专业学术沟通。",
            pinyin: "Shēnqǐng zhèngfǔ jiǎngxuéjīn shí, chú dádào gāojí Hànyǔ shuǐpíng yǔ Yīngwén xuéshù xiězuò biāozhǔn wài, gèng yīng wéirào zhēnshí màoyì yìtí zhuànxiě luójí yánjǐn de yánjiū jìhuà, bìng tíqián yǔ mùbiāo dǎoshī jiù yánjiū fāngfǎ zhǎnkāi zhuānyè xuéshù gōutōng.",
            en: "Competitive scholarship applicants pair advanced Chinese proficiency and academic English writing with a rigorous research proposal grounded in real trade questions, reinforced by early scholarly outreach to prospective supervisors on empirical methodology.",
            vi: "Khi ứng tuyển học bổng chính phủ, ngoài trình độ tiếng Trung cao cấp và kỹ năng viết học thuật tiếng Anh, ứng viên cần xây dựng đề cương nghiên cứu chặt chẽ xoay quanh bài toán thương mại thực tiễn và chủ động trao đổi học thuật sớm với giáo sư hướng dẫn."
          }
        ],
        drillPromptEn: "Write two academic sentences explaining why combining Chinese econometric coursework with European logistics practice strengthens a scholarship study plan.",
        drillPromptZh: "请用两句学术中文阐述：为何“中越欧供应链实务背景”能增强国际贸易硕士研究计划的说服力？"
      }
    ]
  };
})();

// --- Backward-compatible Adapter for EU-China-VN Trilingual Studio ---
(function () {
  "use strict";
  var tb = window.CCE_V4_TRADE_BRIDGE || {};
  var SILK_CONTINUUM = [
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
      modernRoleVi: "Hệ thống Siêu cảng Container (Thượng Hải, Ninh Ba, Thâm Quyến – Diêm Điền, Hải Phòng) nối tới Rotterdam/Antwerp.",
      modernRoleEn: "Mega container ports directly connect Vietnam & South China manufacturing with Northern Europe."
    }
  ];

  window.CCE_TRADE_TRILINGUAL_V4 = {
    terms: (tb.logisticsTerms100 || []).map(function (t) {
      return {
        id: t.id,
        category: t.cat || "incoterms",
        en: t.en || "",
        zh: t.zh || "",
        pinyin: t.pinyin || "",
        vi: t.vi || "",
        contextEn: t.contextNoteEn || "",
        contextVi: t.contextNoteVi || ""
      };
    }),
    dialogues: tb.workplaceDialogues12 || [],
    emailPairs: (tb.bilingualEmailPairs8 || []).map(function (em) {
      return {
        id: em.id,
        topic: (em.titleVi || "") + (em.titleEn ? " · " + em.titleEn : ""),
        factoryZh: em.factoryZh || "",
        factoryPinyin: em.factoryPinyin || "",
        euHqEn: em.euManagerEn || "",
        viSummary: em.viSummary || ""
      };
    }),
    parallelArticles: tb.parallelArticles10 || [],
    silkRoadLogisticsContinuum: SILK_CONTINUUM
  };
})();
