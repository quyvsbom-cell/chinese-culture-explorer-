(function () {
  "use strict";
  window.CCE_V5_SUPPLY_CASES = {
    cases24: [
      {
        id: "sc-01",
        lane: "CR Express Rail",
        titleVi: "Ùn tắc chuyển khổ ray tại cửa khẩu Malaszewicze (Ba Lan)",
        titleEn: "Gauge-Change Bottleneck at Malaszewicze Border Terminal (Poland)",
        scenarioZh: "【中欧班列通知】因波兰马拉舍维奇口岸换装场拥堵，本批重庆至杜伊斯堡电子元件专列预计延误5至7天，请提前通知欧洲收货人调整生产排期。(Zhōng-Ōu bānliè tōngzhī: Yīn Bōlán Mǎlāshèwéiqí kǒu'àn huànzhuāngchǎng yōngdǔ, běn pī Chóngqìng zhì Dùyīsībǎo diànzǐ yuánjiàn zhuānliè yùjì yánwù 5 zhì 7 tiān, qǐng tíqián tōngzhī Ōuzhōu shōuhuòrén tiáozhěng shēngchǎn páiqī.)",
        riskIdentifiedEn: "A 5–7 day transshipment delay at the 1,520 mm to 1,435 mm rail gauge break in Malaszewicze threatens JIT assembly-line stoppages in Duisburg and triggers contractual late-delivery penalties if safety stock is exhausted.",
        actionPlanVi: "1. Yêu cầu đại lý đường sắt gửi vận đơn SMGS và mã theo dõi toa tàu thời gian thực. 2. Kiểm tra điều khoản bất khả kháng và trách nhiệm giao hàng theo Incoterms (DAP/CIP Duisburg). 3. Tách 10% linh kiện khẩn cấp chuyển sang air freight từ Trùng Khánh/Thượng Hải để duy trì dây chuyền trong thời gian chờ tàu.",
        keyTermsZhEn: [
          { zh: "换装场 (huànzhuāngchǎng)", en: "Gauge-change transshipment yard", vi: "Bãi chuyển tải đổi khổ ray" },
          { zh: "国际铁路联运运单 (guójì tiělù liányùn yùndān)", en: "SMGS Rail Consignment Note", vi: "Vận đơn đường sắt liên vận quốc tế SMGS" },
          { zh: "排期调整 (páiqī tiáozhěng)", en: "Production schedule adjustment", vi: "Điều chỉnh kế hoạch sản xuất" }
        ]
      },
      {
        id: "sc-02",
        lane: "CR Express Rail",
        titleVi: "Kiểm tra pin Lithium-ion trên tuyến tàu sắt Tây An – Hamburg",
        titleEn: "Lithium-Ion Battery Compliance Hold on Xi'an–Hamburg Rail",
        scenarioZh: "【西安国际港务区】贵司申报的电动工具含内置锂电池，需补交UN38.3测试报告及1.2米跌落试验鉴定书，否则无法装车发运。(Xī'ān Guójì Gǎngwùqū: Guìsī shēnbào de diàndòng gōngjù hán nèizhì lǐ diànchí, xū bǔjiāo UN38.3 cèshì bàogào jí 1.2 mǐ diēluò shìyàn jiàndìngshū, fǒuzé wúfǎ zhuāngchē fāyùn.)",
        riskIdentifiedEn: "Missing UN38.3 and 1.2 m drop-test certificates for embedded lithium-ion batteries (UN3481) halts rail loading in Xi'an, causing missed weekly block-train cutoffs and rolling storage surcharges.",
        actionPlanVi: "1. Thu thập ngay báo cáo UN38.3, MSDS cập nhật năm hiện hành và Giấy giám định điều kiện vận tải đường sắt từ phòng thí nghiệm được công nhận. 2. Rà soát nhãn nguy hiểm Class 9 và công suất Wh của pin dưới ngưỡng quy định. 3. Xác nhận lại lịch cắt máng (cut-off) chuyến tàu kế tiếp với đơn vị khai thác.",
        keyTermsZhEn: [
          { zh: "内置锂电池 (nèizhì lǐ diànchí)", en: "Embedded lithium-ion battery", vi: "Pin lithium tích hợp trong thiết bị" },
          { zh: "跌落试验 (diēluò shìyàn)", en: "1.2 m drop test", vi: "Thử nghiệm thả rơi 1,2 mét" },
          { zh: "危品鉴定书 (wēipǐn jiàndìngshū)", en: "Dangerous goods transport appraisal", vi: "Chứng thư giám định hàng nguy hiểm" }
        ]
      },
      {
        id: "sc-03",
        lane: "CR Express Rail",
        titleVi: "Phát sinh yêu cầu tờ khai quá cảnh T1 tại biên giới EU",
        titleEn: "Missing EU T1 Transit Declaration Triggering Border Hold",
        scenarioZh: "【代理预警】该批货物目的地为鹿特丹保税仓，但波兰清关行尚未收到T1过境担保文件，货柜滞留口岸将产生每日120欧元堆存费。(Dàilǐ yùjǐng: Gāi pī huòwù mùdìdì wéi Lùtèdān bǎoshuìcāng, dàn Bōlán qīngguānháng shàngwèi shōudào T1 guòjìng dānbǎo wénjiàn, huòguì zhìliú kǒu'àn jiāng chǎnshēng měirì 120 Ōuyuán duīcúnfèi.)",
        riskIdentifiedEn: "Failure to lodge an EU T1 external transit document before arrival in Poland leaves non-Union goods stuck at the external border, accruing EUR 120/day demurrage and risking customs seizure.",
        actionPlanVi: "1. Gửi ngay Commercial Invoice, Packing List, mã HS 8–10 số và số EORI của kho ngoại quan Rotterdam cho đại lý hải quan Ba Lan. 2. Xác nhận hạn mức bảo lãnh thuế (guarantee) cho tờ khai T1 qua hệ thống NCTS. 3. Ghi nhận rõ chi phí phát sinh thuộc bên nào theo điều khoản hợp đồng mua bán.",
        keyTermsZhEn: [
          { zh: "过境担保 (guòjìng dānbǎo)", en: "Transit customs guarantee (T1)", vi: "Bảo lãnh quá cảnh T1" },
          { zh: "保税仓 (bǎoshuìcāng)", en: "Bonded warehouse", vi: "Kho ngoại quan" },
          { zh: "堆存费 (duīcúnfèi)", en: "Terminal storage / demurrage fee", vi: "Phí lưu bãi" }
        ]
      },
      {
        id: "sc-04",
        lane: "CR Express Rail",
        titleVi: "Bảo vệ hàng thực phẩm – linh kiện chống đóng băng mùa đông trên tuyến Bắc",
        titleEn: "Winter Sub-Zero Thermal Protection on Northern Rail Corridor",
        scenarioZh: "【承运商提示】12月哈萨克斯坦段气温低至零下28摄氏度，普通干箱无法保障水性涂料不结冰，建议改订恒温冷藏箱（Reefer）。(Chéngyùnshāng tíshì: 12 yuè Hāsàkèsītǎn duàn qìwēn dīzhì língxià 28 shèshìdù, pǔtōng gānxiāng wúfǎ bǎozhàng shuǐxìng túliào bù jiébīng, jiànyì gǎidìng héngwēn lěngcángxiāng.)",
        riskIdentifiedEn: "Ambient temperatures of -28 degrees C across Kazakhstan can freeze water-based coatings inside standard dry containers, rendering cargo a total write-off and invalidating standard marine-insurance claims if improper packaging is cited.",
        actionPlanVi: "1. Chuyển sang container lạnh chạy chế độ giữ ấm (heated reefer) ở +10 độ C kèm máy phát điện diesel gắn ngoài (genset). 2. Gắn thiết bị ghi nhiệt độ tự động (data logger) bên trong container làm bằng chứng bảo hiểm. 3. So sánh chi phí tổng với phương án đi đường biển có lót cách nhiệt (thermal liner).",
        keyTermsZhEn: [
          { zh: "恒温冷藏箱 (héngwēn lěngcángxiāng)", en: "Temperature-controlled reefer container", vi: "Container lạnh điều khiển nhiệt độ" },
          { zh: "普通干箱 (pǔtōng gānxiāng)", en: "Standard dry container", vi: "Container khô thông thường" },
          { zh: "防冻保护 (fángdòng bǎohù)", en: "Freeze protection", vi: "Bảo vệ chống đóng băng" }
        ]
      },
      {
        id: "sc-05",
        lane: "Yantian-Rotterdam Ocean",
        titleVi: "Tàu vòng Mũi Hảo Vọng và phụ phí rủi ro Biển Đỏ (PSS/WRS)",
        titleEn: "Cape of Good Hope Rerouting and Red Sea Surcharges",
        scenarioZh: "【船公司公告】鉴于红海航道安全风险，本航次盐田至鹿特丹将绕行好望角，航程增加12天，并加收每大柜1,200美元的应急附加费。(Chuángōngsī gōnggào: Jiànyú Hónghǎi hángdào ānquán fēngxiǎn, běn hángcì Yántián zhì Lùtèdān jiāng ràoxíng Hǎowàngjiǎo, hángchéng zēngjiā 12 tiān, bìng jiāshōu měi dàguì 1,200 Měiyuán de yìngjí fùjiāfèi.)",
        riskIdentifiedEn: "A 12-day ocean transit extension around Africa plus USD 1,200/FEU contingency surcharge compresses retail peak-season windows in Europe and erodes gross margin under fixed-price CIF/DDP contracts.",
        actionPlanVi: "1. Rà soát điều khoản giá cước và phụ phí trong hợp đồng với khách hàng EU (CIF vs FOB) để xác định quyền chia sẻ phụ phí PSS/WRS. 2. Cập nhật ETA mới vào hệ thống tồn kho ERP để lên đơn sản xuất sớm hơn 2 tuần cho các lô sau. 3. Đánh giá chuyển một phần hàng bán chạy sang đường sắt CR Express hoặc sea-air qua Dubai.",
        keyTermsZhEn: [
          { zh: "绕行好望角 (ràoxíng Hǎowàngjiǎo)", en: "Rerouting via Cape of Good Hope", vi: "Đi vòng qua Mũi Hảo Vọng" },
          { zh: "应急附加费 (yìngjí fùjiāfèi)", en: "Emergency contingency surcharge", vi: "Phụ phí khẩn cấp" },
          { zh: "大柜 (dàguì / 40HQ)", en: "40-foot high-cube container (FEU)", vi: "Container 40 feet" }
        ]
      },
      {
        id: "sc-06",
        lane: "Yantian-Rotterdam Ocean",
        titleVi: "Khai báo ENS (ICS2) bị từ chối do mô tả hàng hóa chung chung",
        titleEn: "EU ICS2 Entry Summary Declaration Rejection for Vague Goods Description",
        scenarioZh: "【船代急电】欧盟ICS2系统退回了贵司提单补料，因品名仅写'Electronics Parts'不符合六位HS编码及精确货描要求，请在今日16点前修改，否则无法装船。(Chuándài jídiàn: Ōuméng ICS2 xìtǒng tuìhuí le guìsī tídān bǔliào, yīn pǐnmíng jǐn xiě 'Electronics Parts' bù fúhé liùwèi HS biānmǎ jí jīngquè huòmiáo yāoqiú, qǐng zài jīnrì 16 diǎn qián xiūgǎi, fǒuzé wúfǎ zhuāngchuán.)",
        riskIdentifiedEn: "Under EU ICS2 Release 3 maritime pre-loading rules, generic descriptions like 'Electronics Parts' trigger automated Do-Not-Load or referral holds, causing container roll-over at Yantian Port.",
        actionPlanVi: "1. Sửa ngay chi tiết Shipping Instruction (SI) với mô tả chính xác từng mặt hàng (ví dụ: Printed Circuit Board Assemblies for LED Drivers) kèm mã HS 6 số chuẩn và số EORI người nhận hàng tại EU. 2. Gửi lại cho hãng tàu trước giờ cắt SI/ENS để nhận mã MRN hợp lệ. 3. Cập nhật mẫu kiểm soát chứng từ nội bộ cấm dùng các từ khóa chung chung.",
        keyTermsZhEn: [
          { zh: "提单补料 (tídān bǔliào)", en: "Shipping Instruction (SI)", vi: "Chi tiết làm vận đơn (SI)" },
          { zh: "精确货描 (jīngquè huòmiáo)", en: "Precise goods description", vi: "Mô tả hàng hóa chi tiết" },
          { zh: "甩柜 (shuǎiguì)", en: "Container roll-over", vi: "Rớt tàu / dời container sang chuyến sau" }
        ]
      },
      {
        id: "sc-07",
        lane: "Yantian-Rotterdam Ocean",
        titleVi: "Sai lệch VGM (Khối lượng toàn bộ container đã xác minh) tại cảng Diêm Điền",
        titleEn: "Verified Gross Mass (VGM) Discrepancy at Yantian Terminal Gate-In",
        scenarioZh: "【盐田码头通知】箱号MSKU9045218地磅复称重27.8吨，超出申报VGM 25.9吨的允许误差范围，码头已锁定该箱等待重报并缴纳改单费。(Yántián mǎtóu tōngzhī: Xiānghào MSKU9045218 dìbàng fùchēngzhòng 27.8 dùn, chāochū shēnbào VGM 25.9 dùn de yǔnxǔ wùchā fànwéi, mǎtóu yǐ suǒdìng gāi xiāng děngdài chóngbào bìng jiǎonà gǎidānfèi.)",
        riskIdentifiedEn: "A 1.9-metric-ton variance exceeds SOLAS VGM tolerance (+/- 5% or 1 ton), locking the container at Yantian Terminal and jeopardizing vessel loading and stowage stability.",
        actionPlanVi: "1. Kiểm tra lại phiếu cân xe (weighbridge slip) và Packing List từ nhà máy để xác định nguyên nhân thừa trọng lượng (sai trọng lượng bì container hay đóng dư thùng hàng). 2. Nếu không vượt tải trọng tối đa cho phép (Max Payload) của vỏ container và giới hạn đường bộ EU, nộp tờ khai sửa VGM kèm phí sửa đổi ngay lập tức. 3. Nếu quá tải đường bộ Hà Lan/Đức, buộc phải rút bớt hàng tại kho ngoại quan cảng trước khi xếp tàu.",
        keyTermsZhEn: [
          { zh: "地磅复称 (dìbàng fùchēng)", en: "Terminal weighbridge re-weighing", vi: "Cân đối chứng tại trạm cân cảng" },
          { zh: "核实总重量 (héshí zǒng zhòngliàng)", en: "Verified Gross Mass (VGM)", vi: "Khối lượng toàn bộ đã xác minh" },
          { zh: "改单费 (gǎidānfèi)", en: "Amendment fee", vi: "Phí chỉnh sửa chứng từ" }
        ]
      },
      {
        id: "sc-08",
        lane: "Yantian-Rotterdam Ocean",
        titleVi: "Chậm phát hành Telex Release dẫn đến phí lưu container (DEM/DET) tại Rotterdam",
        titleEn: "Delayed Telex Release Causing Demurrage & Detention at Rotterdam",
        scenarioZh: "【工厂财务】尾款美金尚未到账我司离岸账户，故暂未向船公司申请电放（Telex Release），请催促客户尽快提供水单。(Gōngchǎng cáiwù: Wěikuǎn Měijīn shàngwèi dàozhàng wǒsī lí'àn zhànghù, gù zànwèi xiàng chuángōngsī shēnqǐng diànfàng, qǐng cuīcù kèhù jǐnkuài tígōng shuǐdān.)",
        riskIdentifiedEn: "Vessel arrival at Rotterdam without Telex Release prevents container pick-up once the 5-day free time expires, escalating into steep tiered demurrage and detention charges (EUR 150–250/day).",
        actionPlanVi: "1. Lấy ngay điện SWIFT MT103 từ ngân hàng người mua tại Châu Âu để chứng minh tiền đã chuyển và gửi cho bộ phận tài chính nhà máy. 2. Đàm phán gia hạn thêm ngày miễn lưu bãi (extended free time) với hãng tàu tại Rotterdam. 3. Đối chiếu điều khoản thanh toán T/T (30/70 trước khi giao bản sao vận đơn) để tránh lặp lại ở các lô sau bằng L/C hoặc chuyển khoản sớm trước ETA 7 ngày.",
        keyTermsZhEn: [
          { zh: "电放 (diànfàng)", en: "Telex Release (Surrendered B/L)", vi: "Điện giao hàng (không cần B/L gốc)" },
          { zh: "银行水单 (yínháng shuǐdān)", en: "Bank remittance slip / SWIFT copy", vi: "Điện chuyển tiền ngân hàng" },
          { zh: "滞箱费 (zhìxiāngfèi)", en: "Detention charge", vi: "Phí lưu vỏ container" }
        ]
      },
      {
        id: "sc-09",
        lane: "Ningbo-Hamburg FCL",
        titleVi: "Hải quan Đức yêu cầu kiểm hóa X-quang và chứng nhận CE cho thiết bị gia dụng",
        titleEn: "Hamburg Customs Physical Inspection & CE Conformity Verification",
        scenarioZh: "【宁波工厂品控】汉堡海关扣查了该批空气炸锅，要求补充欧盟授权代表信息、LVD/EMC测试报告及德语说明书，我司正在整理技术文档。(Níngbō gōngchǎng pǐnkòng: Hànbǎo hǎiguān kòuchá le gāi pī kōngqì zhàguō, yāoqiú bǔchōng Ōuméng shòuquán dàibiǎo xìnxī, LVD/EMC cèshì bàogào jí Déyǔ shuōmíngshū, wǒsī zhèngzài zhěnglǐ jìshù wéndàng.)",
        riskIdentifiedEn: "Non-compliance with EU Market Surveillance Regulation (EU) 2019/1020—missing EU Authorized Representative details, CE Declaration of Conformity, or German user manuals—can result in customs rejection or mandatory destruction at Hamburg.",
        actionPlanVi: "1. Gửi ngay EU Declaration of Conformity (DoC) ký bởi nhà sản xuất, báo cáo kiểm nghiệm LVD/EMC/RoHS từ phòng lab được công nhận và thông tin EU Responsible Person. 2. Phối hợp với kho ngoại quan Hamburg dán bổ sung nhãn cảnh báo tiếng Đức nếu hải quan cho phép khắc phục (re-labeling under customs supervision). 3. Rà soát bộ kiểm tra trước khi xuất xưởng (PSI) bắt buộc kiểm tra nhãn CE và hướng dẫn sử dụng ngôn ngữ nước nhập khẩu.",
        keyTermsZhEn: [
          { zh: "欧盟授权代表 (Ōuméng shòuquán dàibiǎo)", en: "EU Authorized Representative", vi: "Đại diện ủy quyền tại EU" },
          { zh: "符合性声明 (fúhéxìng shēngmíng)", en: "EU Declaration of Conformity (DoC)", vi: "Tuyên bố hợp chuẩn EU" },
          { zh: "海关查验 (hǎiguān cháyàn)", en: "Customs inspection / hold", vi: "Kiểm hóa hải quan" }
        ]
      },
      {
        id: "sc-10",
        lane: "Ningbo-Hamburg FCL",
        titleVi: "Đóng gói gỗ không có dấu hun trùng IPPC ISPM-15 bị cảnh báo tại Hamburg",
        titleEn: "Unstamped Wooden Pallets Flagged Under ISPM-15 at Hamburg",
        scenarioZh: "【货代紧急反馈】宁波仓库装柜时临时补用了4个未加盖IPPC熏蒸标识的实木托盘，德国植检部门若抽查将整柜退运或强制销毁托盘。(Huòdài jǐnjí fǎnkuì: Níngbō cāngkù zhuāngguì shí línshí bǔyòng le 4 gè wèi jiāgài IPPC xūnzhēng biāoshí de shímù tuōpán, Déguó zhíjiǎn bùmén ruò chōuchá jiāng zhěngguì tuìyùn huò qiángzhì xiāohuǐ tuōpán.)",
        riskIdentifiedEn: "Non-compliant solid wood packaging without valid IPPC ISPM-15 heat-treatment marks violates EU phytosanitary law, risking mandatory re-export of the entire 40HQ container or costly supervised fumigation and repalletization in Hamburg.",
        actionPlanVi: "1. Nếu tàu chưa rời Ninh Ba, yêu cầu cắt container rút thay ngay bằng pallet nhựa hoặc pallet ván ép (plywood/exempt) không cần hun trùng. 2. Nếu tàu đang trên biển, chủ động khai báo và đặt trước dịch vụ xử lý kiểm dịch thực vật được cấp phép tại cảng Hamburg để đổi pallet dưới giám sát hải quan. 3. Đưa điều khoản phạt hợp đồng nếu kho/nhà cung cấp tự ý dùng gỗ tự nhiên chưa có dấu IPPC.",
        keyTermsZhEn: [
          { zh: "实木托盘 (shímù tuōpán)", en: "Solid wood pallet", vi: "Pallet gỗ tự nhiên" },
          { zh: "熏蒸标识 (xūnzhēng biāoshí)", en: "IPPC ISPM-15 treatment stamp", vi: "Dấu xử lý kiểm dịch IPPC" },
          { zh: "退运 (tuìyùn)", en: "Mandatory re-export / return shipment", vi: "Buộc tái xuất trả hàng" }
        ]
      },
      {
        id: "sc-11",
        lane: "Ningbo-Hamburg FCL",
        titleVi: "Bão mùa hè đóng cửa cảng Ninh Ba Chu Sơn và chậm cắt máng (CY Cut-off)",
        titleEn: "Typhoon Closure at Ningbo–Zhoushan Port Missing CY Cut-Off",
        scenarioZh: "【宁波港务通知】受台风影响，北仑及梅山港区暂停空重箱进提箱作业，预计停摆36小时，原定周四截关的汉堡线船舶将顺延靠泊。(Níngbō gǎngwù tōngzhī: Shòu táifēng yǐngxiǎng, Běilún jí Méishān gǎngqū zàntíng kōngzhòngxiāng jìntíxiāng zuòyè, yùjì tíngbǎi 36 xiǎoshí, yuándìng Zhōusì jiéguān de Hànbǎoxiàn chuánbó jiāng shùnyán kàobó.)",
        riskIdentifiedEn: "A 36-hour typhoon suspension at Beilun and Meishan terminals delays vessel berthing and cascades into Hamburg terminal slot congestion, pushing final inland truck delivery back by 4–6 days.",
        actionPlanVi: "1. Theo dõi thông báo gia hạn thời gian cắt máng (revised CY cut-off) từ hãng tàu và giữ xe kéo container tại bãi an toàn của nhà máy tránh kẹt xe cửa cảng. 2. Thông báo sớm tình trạng bất khả kháng thời tiết cho bộ phận cung ứng Châu Âu để điều chỉnh lịch đặt cửa kho (warehouse slot booking) tại Hamburg. 3. Xác nhận bảo hiểm hàng hóa mở rộng bảo vệ rủi ro thiên tai trong giai đoạn lưu kho chờ xếp tàu.",
        keyTermsZhEn: [
          { zh: "截关 (jiéguān)", en: "Customs & CY cut-off time", vi: "Giờ cắt máng / chốt tờ khai" },
          { zh: "靠泊 (kàobó)", en: "Vessel berthing", vi: "Tàu cập cầu cảng" },
          { zh: "进提箱作业 (jìntíxiāng zuòyè)", en: "Container gate-in / gate-out operations", vi: "Tác nghiệp hạ bãi / lấy container" }
        ]
      },
      {
        id: "sc-12",
        lane: "Ningbo-Hamburg FCL",
        titleVi: "Nghi ngờ sai mã HS giữa chứng từ xuất khẩu Ninh Ba và biểu thuế TARIC EU",
        titleEn: "HS Code Classification Mismatch Between Ningbo Export & EU TARIC",
        scenarioZh: "【报关行提示】工厂在国内按8481.80出口退税申报，但德国进口商要求按8481.20清关，两者在欧盟TARIC税率及反倾销监管条件上存在差异。(Bàoguānháng tíshì: Gōngchǎng zài guónèi àn 8481.80 chūkǒu tuìshuì shēnbào, dàn Déguó jìnkǒushāng yāoqiú àn 8481.20 qīngguān, liǎngzhě zài Ōuméng TARIC shuìlǜ jí fǎnqīngxiāo jiānguǎn tiáojiàn shàng cúnzài chāyì.)",
        riskIdentifiedEn: "Divergent 6-digit HS headings between Chinese export customs and EU TARIC import entries can trigger EU post-clearance audits, anti-dumping duty reassessments, and customs penalties.",
        actionPlanVi: "1. Áp dụng 6 Quy tắc tổng quát giải thích Hệ thống hài hòa (GRI 1–6) dựa trên bản vẽ kỹ thuật và công năng chính của van thủy lực/khí nén để xác định mã 6 số chuẩn xác duy nhất. 2. Đề xuất nhà nhập khẩu EU xin Xác định trước mã số (BTI – Binding Tariff Information) của Hải quan Đức cho các lô dài hạn. 3. Thống nhất mã HS 6 số trên Commercial Invoice và vận đơn để đảm bảo nhất quán chứng từ.",
        keyTermsZhEn: [
          { zh: "出口退税 (chūkǒu tuìshuì)", en: "Export VAT rebate", vi: "Hoàn thuế giá trị gia tăng xuất khẩu" },
          { zh: "反倾销监管 (fǎnqīngxiāo jiānguǎn)", en: "Anti-dumping duty oversight", vi: "Kiểm soát thuế chống bán phá giá" },
          { zh: "归类预裁定 (guīlèi yùcáidìng)", en: "Binding Tariff Information (BTI) / Advance Ruling", vi: "Xác định trước mã số hàng hóa" }
        ]
      },
      {
        id: "sc-13",
        lane: "Huunghi-Haiphong Hybrid",
        titleVi: "Tắc nghẽn cửa khẩu Hữu Nghị Quan mùa cao điểm và chuyển tuyến sang đường sắt Đồng Đăng",
        titleEn: "Friendship Pass Peak Congestion & Rail Diversion via Dong Dang",
        scenarioZh: "【凭祥口岸动态】友谊关出境货车排队已超48小时，且查验率上升，建议将急需运往海防组装厂的电子模组改走凭祥—同登铁路快线。(Píngxiáng kǒu'àn dòngtài: Yǒuyìguān chūjìng huòchē páiduì yǐ chāo 48 xiǎoshí, qiě cháyànlǜ shàngshēng, jiànyì jiāng jíxū yùnwǎng Hǎifáng zǔzhuāngchǎng de diànzǐ mózǔ gǎizǒu Píngxiáng–Tóngdēng tiělù kuàixiàn.)",
        riskIdentifiedEn: "A 48+ hour truck queue at Friendship Pass (Youyiguan) jeopardizes component replenishment at the Haiphong assembly plant, threatening missed feeder-vessel cutoffs for finished-goods exports to Europe.",
        actionPlanVi: "1. Kích hoạt phương án dự phòng chuyển lô linh kiện khẩn sang tàu liên vận Bằng Tường – Đồng Đăng – Yên Viên hoặc kéo về cảng Khâm Châu đi tàu feeder thẳng về Hải Phòng. 2. Khai báo trước tờ khai hải quan VNACCS (IDA/IDC) và C/O Form E bản điện tử để thông quan ngay khi hàng qua biên giới. 3. Tối ưu hóa lịch xuất hàng tránh khung giờ cao điểm nông sản cuối tuần.",
        keyTermsZhEn: [
          { zh: "友谊关口岸 (Yǒuyìguān kǒu'àn)", en: "Friendship Pass border gate", vi: "Cửa khẩu Hữu Nghị Quan" },
          { zh: "电子模组 (diànzǐ mózǔ)", en: "Electronic module", vi: "Mô-đun linh kiện điện tử" },
          { zh: "铁路快线 (tiělù kuàixiàn)", en: "Express cross-border rail line", vi: "Tuyến đường sắt nhanh xuyên biên giới" }
        ]
      },
      {
        id: "sc-14",
        lane: "Huunghi-Haiphong Hybrid",
        titleVi: "Lỗi thông tin trên C/O Form E (ACFTA) khiến lô hàng bị bác ưu đãi tại Hải Phòng",
        titleEn: "C/O Form E Discrepancy Jeopardizing ACFTA Preferential Tariff",
        scenarioZh: "【南宁供应商】很抱歉，本次出具的东盟FORM E原产地证第7栏品名数量与商业发票存在10箱差异，且未勾选第三方发票（Third Party Invoicing）选项。(Nánníng gōngyìngshāng: Hěn bàoqiàn, běncì chūjù de Dōngméng FORM E yuánchǎndìzhèng dì 7 lán pǐnmíng shùliàng yǔ shāngyè fāpiào cúnzài 10 xiāng chāyì, qiě wèi gōuxuǎn dìsānfāng fāpiào xuǎnxiàng.)",
        riskIdentifiedEn: "Quantity mismatches on Box 7 and an unchecked Box 13 'Third Party Invoicing' box invalidate C/O Form E under ACFTA rules, exposing the Vietnam importer to full MFN duty (up to 15–20%) instead of 0%.",
        actionPlanVi: "1. Yêu cầu nhà cung cấp Trung Quốc lập tức hủy và xin cấp lại C/O Form E mới (hoặc phát hành bản cấp sau – Issued Retroactively) tại CCPIT/Hải quan Trung Quốc với dấu tick đúng ô Third Party Invoicing và tên công ty thương mại Hồng Kông/Singapore ở ô 7. 2. Trong thời gian chờ C/O sửa đổi, khai nợ C/O trên hệ thống VNACCS trong thời hạn 30 ngày theo quy định Hải quan Việt Nam để giải phóng hàng kịp sản xuất. 3. Cập nhật checklist rà soát bản nháp C/O (draft check) bắt buộc trước khi ký phát hành chính thức.",
        keyTermsZhEn: [
          { zh: "原产地证 (yuánchǎndìzhèng)", en: "Certificate of Origin (C/O Form E)", vi: "Giấy chứng nhận xuất xứ C/O Form E" },
          { zh: "第三方发票 (dìsānfāng fāpiào)", en: "Third Party Invoicing", vi: "Hóa đơn bên thứ ba" },
          { zh: "补发证书 (bǔfā zhèngshū)", en: "Issued Retroactively certificate", vi: "Chứng nhận cấp sau" }
        ]
      },
      {
        id: "sc-15",
        lane: "Huunghi-Haiphong Hybrid",
        titleVi: "Rủi ro quy tắc xuất xứ EVFTA khi lắp ráp sản phẩm tại Hải Phòng từ bán thành phẩm Quảng Đông",
        titleEn: "EVFTA Origin Audit Risk for Haiphong Assembly Using Guangdong Sub-Assemblies",
        scenarioZh: "【深圳母公司】为赶欧盟圣诞订单，建议先发80%已组装好的半成品到海防工厂，仅在越南做最终外壳封装与贴标，再申请越南原产地证出口德国。(Shēnzhèn mǔgōngsī: Wèi gǎn Ōuméng Shèngdàn dìngdān, jiànyì xiān fā 80% yǐ zǔzhuāng hǎo de bànchéngpǐn dào Hǎifáng gōngchǎng, jǐn zài Yuènán zuò zuìzhōng wàiké fēngzhuāng yǔ tiēbiāo, zài shēnqǐng Yuènán yuánchǎndìzhèng chūkǒu Déguó.)",
        riskIdentifiedEn: "Simple assembly, housing closure, and labeling constitute 'insufficient operations' under EVFTA Protocol 1; claiming Vietnamese origin invites EU OLAF anti-circumvention investigations, retroactive duty clawbacks, and brand blacklisting.",
        actionPlanVi: "1. Phản hồi ngay bằng phân tích pháp lý rõ ràng: công đoạn đóng vỏ và dán nhãn đơn giản KHÔNG đáp ứng tiêu chí chuyển đổi cơ bản của EVFTA. 2. Thiết kế lại định mức BOM (Bill of Materials) để thực hiện công đoạn SMT/gia công cốt lõi tại Hải Phòng hoặc tăng tỷ lệ nguyên liệu nội địa Việt Nam đạt ngưỡng quy tắc mặt hàng cụ thể (PSR – CTH hoặc MaxNOM). 3. Lưu trữ đầy đủ hồ sơ kế toán giá thành, hóa đơn đầu vào và quy trình sản xuất để sẵn sàng kiểm tra xuất xứ.",
        keyTermsZhEn: [
          { zh: "半成品 (bànchéngpǐn)", en: "Semi-finished goods / sub-assemblies", vi: "Bán thành phẩm" },
          { zh: "实质性加工 (shízhìxìng jiāgōng)", en: "Substantial transformation", vi: "Gia công chuyển đổi cơ bản" },
          { zh: "反规避调查 (fǎnguībì diàochá)", en: "Anti-circumvention investigation", vi: "Điều tra chống lẩn tránh thuế" }
        ]
      },
      {
        id: "sc-16",
        lane: "Huunghi-Haiphong Hybrid",
        titleVi: "Điều phối kết hợp xe tải sang tải tại bãi Bảo thuế Hữu Nghị và tàu feeder Hải Phòng – Singapore",
        titleEn: "Coordinating Border Transloading at Huu Nghi with Haiphong–Singapore Feeder",
        scenarioZh: "【物流协调】广东东莞货物已抵凭祥保税区，需在今日完成中越跨境接驳换车，确保明晚抵达海防新武港（Tan Vu）赶上周六直航支线船。(Wùliú xiétiáo: Guǎngdōng Dōngguǎn huòwù yǐ dǐ Píngxiáng bǎoshuìqū, xū zài jīnrì wánchéng Zhōng-Yuè kuàjìng jiēbó huànchē, quèbǎo míngwǎn dǐdá Hǎifáng Xīnwǔgǎng gǎnshàng Zhōuliù zhíháng zhīxiànchuán.)",
        riskIdentifiedEn: "Tight 24-hour transloading between Chinese and Vietnamese trucks at Pingxiang–Huu Nghi risks cargo damage during manual handling and missed feeder cut-off at Tan Vu Port, delaying mother-vessel connection in Singapore by 7 days.",
        actionPlanVi: "1. Ưu tiên dùng phương thức kéo rơ-moóc xuyên biên giới hoặc sang tải bằng xe nâng pallet nguyên kiện có biên bản kiểm đếm và chụp ảnh niêm phong (seal). 2. Hoàn tất thủ tục tờ khai quá cảnh/tạm nhập tái xuất hoặc nhập kinh doanh kết hợp vận chuyển độc lập trên VNACCS trước khi xe vào bãi. 3. Liên hệ hãng tàu giữ chỗ (late gate-in approval) tại cảng Tân Vũ – Hải Phòng trong trường hợp xe đến sát giờ đóng máng.",
        keyTermsZhEn: [
          { zh: "跨境接驳换车 (kuàjìng jiēbó huànchē)", en: "Cross-border truck transloading", vi: "Sang tải đổi xe qua biên giới" },
          { zh: "支线船 (zhīxiànchuán)", en: "Feeder vessel", vi: "Tàu gom hàng (feeder)" },
          { zh: "铅封号 (qiānfēnghào)", en: "Container seal number", vi: "Số chì niêm phong" }
        ]
      },
      {
        id: "sc-17",
        lane: "EU CBAM Steel/Alu",
        titleVi: "Nhà máy thép Trung Quốc không có dữ liệu phát thải thực tế (Actual Embedded Emissions)",
        titleEn: "Chinese Steel Mill Lacking Installation-Level CBAM Actual Emissions Data",
        scenarioZh: "【钢铁厂回复】我司目前仅提供出厂材质单（MTC），尚未建立欧盟CBAM要求的直接与间接碳排放核算体系，请贵司自行使用欧盟默认值申报。(Gāngtiěchǎng huífù: Wǒsī mùqián jǐn tígōng chūchǎng cáizhìdān, shàngwèi jiànlì Ōuméng CBAM yāoqiú de zhíjiē yǔ jiànjiē tànpáifàng hésuàn tǐxì, qǐng guìsī zìxíng shǐyòng Ōuméng mòrènzhí shēnbào.)",
        riskIdentifiedEn: "In the definitive CBAM regime (from 2026), relying on punitive EU default emission values instead of verified actual emissions can inflate CBAM certificate liability by 30–60% per ton of steel and trigger non-compliance penalties for the EU declarant.",
        actionPlanVi: "1. Gửi mẫu bảng tính CBAM Communication Template chính thức của Ủy ban Châu Âu (bản song ngữ Anh – Trung) kèm hướng dẫn thu thập dữ liệu tiêu thụ điện, than cốc và phế liệu đầu vào cho nhà máy. 2. Đàm phán chuyển dần đơn hàng sang các nhà máy thép lò hồ quang điện (EAF) đã có kiểm toán phát thải ISO 14064 hoặc bên thứ ba được EU công nhận. 3. Bổ sung điều khoản chia sẻ chi phí chứng chỉ CBAM (CBAM cost-pass-through clause) trong hợp đồng mua bán.",
        keyTermsZhEn: [
          { zh: "碳边境调节机制 (tàn biānjìng tiáojié jīzhì)", en: "Carbon Border Adjustment Mechanism (CBAM)", vi: "Cơ chế điều chỉnh biên giới carbon" },
          { zh: "隐含碳排放 (yǐnhán tànpáifàng)", en: "Embedded carbon emissions", vi: "Phát thải carbon tích hợp" },
          { zh: "默认值 (mòrènzhí)", en: "EU default emission value", vi: "Giá trị phát thải mặc định của EU" }
        ]
      },
      {
        id: "sc-18",
        lane: "EU CBAM Steel/Alu",
        titleVi: "Tính toán phát thải tiền chất (Precursor Emissions) cho sản phẩm nhôm đùn gia công tại Việt Nam",
        titleEn: "Tracking Precursor Emissions for Aluminum Extrusions Processed in Vietnam",
        scenarioZh: "【铝锭供应商】我司向贵司越南工厂供应的电解铝锭来自云南水电铝基地，但部分批次混用了内蒙古煤电铝，需重新拆分核算批次碳足迹。(Lǚdìng gōngyìngshāng: Wǒsī xiàng guìsī Yuènán gōngchǎng gōngyìng de diànjiě lǚdìng láizì Yúnnán shuǐdiàn lǚ jīdì, dàn bùfèn pīcì hùnyòng le Nèiměnggǔ méidiàn lǚ, xū chóngxīn chāifēn hésuàn pīcì tànzújì.)",
        riskIdentifiedEn: "Co-mingling hydropower aluminum (low emissions) with coal-powered aluminum (high emissions) without batch segregation forces weighted-average or worst-case CBAM precursor reporting, eroding Vietnam's green export competitiveness in the EU.",
        actionPlanVi: "1. Yêu cầu nhà cung cấp tách riêng hoàn toàn lô phôi nhôm thủy điện Vân Nam (có hóa đơn điện năng lượng tái tạo và hồ sơ truy xuất lô nấu luyện) khỏi nguồn nhiệt điện than. 2. Thu thập số liệu phát thải cụ thể (SEE) của nguyên liệu tiền chất (HS 7601) để cộng gộp chính xác vào sản phẩm nhôm đùn xuất khẩu sang EU (HS 7604). 3. Lưu giữ hồ sơ thẩm tra độc lập để đối chiếu khi cơ quan CBAM EU kiểm tra.",
        keyTermsZhEn: [
          { zh: "前体材料排放 (qiántǐ cáiliào páifàng)", en: "Precursor embedded emissions", vi: "Phát thải từ nguyên liệu tiền chất" },
          { zh: "水电铝 (shuǐdiàn lǚ)", en: "Hydropower-smelted aluminum", vi: "Nhôm luyện bằng thủy điện" },
          { zh: "批次溯源 (pīcì sùyuán)", en: "Batch-level traceability", vi: "Truy xuất nguồn gốc theo từng lô" }
        ]
      },
      {
        id: "sc-19",
        lane: "EU CBAM Steel/Alu",
        titleVi: "Khấu trừ giá carbon đã nộp tại thị trường ETS Trung Quốc trong tờ khai CBAM",
        titleEn: "Claiming Carbon Price Paid Under China National ETS in CBAM Declarations",
        scenarioZh: "【中国出口商咨询】我司已纳入中国全国碳排放权交易市场（ETS）并缴纳了配额履约成本，出口欧盟的钢铁紧固件能否据此抵扣CBAM证书费用？(Zhōngguó chūkǒushāng zīxún: Wǒsī yǐ nàrù Zhōngguó quánguó tànpáifàngquán jiāoyì shìchǎng bìng jiǎonà le pèi'é lǚyuē chéngběn, chūkǒu Ōuméng de gāngtiě jǐngùjiàn néngfǒu jùcǐ dǐkòu CBAM zhèngshū fèiyòng?)",
        riskIdentifiedEn: "Without certified documentation proving an effective carbon price actually paid (net of free allowances or rebates) in China's ETS, the EU importer cannot legally claim CBAM deductions, resulting in double carbon pricing.",
        actionPlanVi: "1. Xác minh phạm vi ngành nghề thực tế đã nộp tiền mua hạn ngạch carbon (không tính phần hạn ngạch được cấp miễn phí) và thu thập chứng từ xác nhận của tổ chức kiểm toán độc lập. 2. Đối chiếu tỷ giá quy đổi và cơ chế khấu trừ hiệu lực theo hướng dẫn thực thi CBAM của Ủy ban Châu Âu. 3. Thiết lập phụ lục hợp đồng quy định trách nhiệm cung cấp chứng từ xác minh giá carbon hàng quý.",
        keyTermsZhEn: [
          { zh: "碳排放权交易市场 (tànpáifàngquán jiāoyì shìchǎng)", en: "Emissions Trading System (ETS)", vi: "Thị trường giao dịch hạn ngạch carbon" },
          { zh: "碳价抵扣 (tànjià dǐkòu)", en: "Carbon price deduction", vi: "Khấu trừ giá carbon đã trả" },
          { zh: "免费配额 (miǎnfèi pèi'é)", en: "Free carbon allowances", vi: "Hạn ngạch phát thải miễn phí" }
        ]
      },
      {
        id: "sc-20",
        lane: "EU CBAM Steel/Alu",
        titleVi: "Xác định phạm vi mã CN thuộc CBAM đối với ốc vít và linh kiện thép hỗn hợp",
        titleEn: "CBAM CN-Code Scope Classification for Fasteners & Mixed Steel Components",
        scenarioZh: "【报关部询问】本批出口德国的工业机械配件包含部分HS 7318钢铁螺栓和HS 8483传动轴，是否整单均须纳入CBAM授权申报人年度报告？(Bàoguānbù xúnwèn: Běn pī chūkǒu Déguó de gōngyè jīxiè pèijiàn bāohán bùfèn HS 7318 gāngtiě luóshuān hé HS 8483 chuándòngzhóu, shìfǒu zhěngdān jūn xū nàrù CBAM shòuquán shēnbàorén niándù bàogào?)",
        riskIdentifiedEn: "Misclassifying covered CBAM goods (such as HS 7318 fasteners) alongside out-of-scope downstream machinery parts (HS 8483) either causes under-reporting penalties or unnecessary compliance spending.",
        actionPlanVi: "1. Đối chiếu từng dòng hàng với Phụ lục I Quy định CBAM (EU) 2023/956: nhóm HS 7318 (bu lông, ốc vít thép) THUỘC phạm vi CBAM, còn nhóm HS 8483 (trục truyền động) hiện KHÔNG thuộc phạm vi CBAM. 2. Tách rõ từng dòng mặt hàng, trọng lượng tịnh (net mass) và giá trị riêng biệt trên Commercial Invoice và Packing List. 3. Xác nhận nhà nhập khẩu EU đã đăng ký tư cách Authorised CBAM Declarant trước khi thông quan.",
        keyTermsZhEn: [
          { zh: "钢铁螺栓 (gāngtiě luóshuān)", en: "Steel bolts and fasteners (HS 7318)", vi: "Bu lông, ốc vít bằng thép" },
          { zh: "授权申报人 (shòuquán shēnbàorén)", en: "Authorised CBAM Declarant", vi: "Người khai báo CBAM được ủy quyền" },
          { zh: "净重分列 (jìngzhòng fēnliè)", en: "Itemized net weight breakdown", vi: "Tách riêng trọng lượng tịnh từng dòng hàng" }
        ]
      },
      {
        id: "sc-21",
        lane: "EUDR Traceability",
        titleVi: "Thiếu dữ liệu đa giác địa lý (GeoJSON Polygons) cho lô nội thất gỗ xuất sang EU",
        titleEn: "Missing GeoJSON Polygons for Wooden Furniture Exported to the EU",
        scenarioZh: "【家具厂反馈】我司生产餐桌所用的橡胶木板材购自多个小型木材贸易商，无法提供林地边界经纬度多边形坐标（GeoJSON），仅能提供FSC混合标签。(Jiājùchǎng fǎnkuì: Wǒsī shēngchǎn cānzhuō suǒyòng de xiàngjiāomù bǎncái gòuzì duōgè xiǎoxíng mùcái màoyìshāng, wúfǎ tígōng líndì biānjiè jīngwěidù duōbiānxíng zuòbiāo, jǐn néng tígōng FSC hùnhé biāoqiān.)",
        riskIdentifiedEn: "Under EUDR, FSC Mix certification alone does NOT substitute for mandatory plot-level geolocation polygons (for plots over 4 hectares) and a Due Diligence Statement (DDS); shipments lacking GeoJSON coordinates are barred from the EU market.",
        actionPlanVi: "1. Giải thích rõ cho nhà máy: FSC là công cụ hỗ trợ đánh giá rủi ro nhưng bắt buộc phải có tọa độ lô rừng (GeoJSON chuẩn WGS84) và chứng minh không phá rừng sau 31/12/2020. 2. Chuyển nguồn cung gỗ sang các lâm trường/nhà cung cấp cấp 1 đã số hóa bản đồ lô rừng và tách biệt kho nguyên liệu đạt chuẩn EUDR. 3. Nộp hồ sơ lên hệ thống EU Information System để lấy mã tham chiếu DDS (Reference Number) điền vào tờ khai hải quan nhập khẩu EU.",
        keyTermsZhEn: [
          { zh: "地理多边形坐标 (dìlǐ duōbiānxíng zuòbiāo)", en: "Geolocation polygon coordinates (GeoJSON)", vi: "Tọa độ đa giác địa lý" },
          { zh: "尽职调查声明 (jìnzhí diàochá shēngmíng)", en: "Due Diligence Statement (DDS)", vi: "Tuyên bố thẩm định trách nhiệm giải trình" },
          { zh: "零毁林法规 (líng huǐlín fǎguī)", en: "EU Deforestation Regulation (EUDR)", vi: "Quy định chống phá rừng của EU" }
        ]
      },
      {
        id: "sc-22",
        lane: "EUDR Traceability",
        titleVi: "Truy xuất nguồn gốc cao su thiên nhiên từ nông hộ Việt Nam qua nhà máy lốp xe Trung Quốc sang EU",
        titleEn: "Natural Rubber Traceability Across Vietnam Smallholders, Chinese Tire Plant & EU",
        scenarioZh: "【山东轮胎厂】出口欧洲的乘用车轮胎使用了越南产天然橡胶，欧盟客户要求提供上游每一块橡胶园的采集时间与合法土地使用证明。(Shāndōng lúntāichǎng: Chūkǒu Ōuzhōu de chéngyòngchē lúntāi shǐyòng le Yuènán chǎn tiānrán xiàngjiāo, Ōuméng kèhù yāoqiú tígōng shàngyóu měi yī kuài xiàngjiāoyuán de cǎijí shíjiān yǔ héfǎ tǔdì shǐyòng zhèngmíng.)",
        riskIdentifiedEn: "Natural rubber (HS 4001) and tires (HS 4011) fall strictly under EUDR; fragmented Vietnamese smallholder supply chains without digital plot mapping risk disqualifying finished Chinese-made tires from European OEM buyers.",
        actionPlanVi: "1. Phối hợp nhà máy chế biến mủ cao su Việt Nam triển khai ghi nhận tọa độ điểm (cho hộ dưới 4 ha) hoặc đa giác (trên 4 ha) kèm giấy chứng nhận quyền sử dụng đất hợp pháp. 2. Tách luồng sản xuất riêng biệt (segregated chain of custody) tại nhà máy lốp xe Sơn Đông để không trộn lẫn cao su chưa truy xuất được nguồn gốc. 3. Chuyển dữ liệu DDS ngược chuỗi để nhà nhập khẩu lốp xe EU đối chiếu xác thực qua vệ tinh.",
        keyTermsZhEn: [
          { zh: "天然橡胶 (tiānrán xiàngjiāo)", en: "Natural rubber (HS 4001)", vi: "Cao su thiên nhiên" },
          { zh: "产销监管链 (chǎnxiāo jiānguǎnliàn)", en: "Chain of Custody (Segregated)", vi: "Chuỗi hành trình sản phẩm tách biệt" },
          { zh: "合法土地证明 (héfǎ tǔdì zhèngmíng)", en: "Legal land-tenure documentation", vi: "Chứng từ quyền sử dụng đất hợp pháp" }
        ]
      },
      {
        id: "sc-23",
        lane: "EUDR Traceability",
        titleVi: "Xung đột bảo mật dữ liệu tọa độ địa lý nhà cung cấp khi chuyển hồ sơ EUDR",
        titleEn: "Supplier Confidentiality Conflict Over Sharing EUDR Farm Coordinates",
        scenarioZh: "【贸易商顾虑】如果我们将上游林场和橡胶种植园的精确经纬度全部披露给欧洲买家，担心买家跳过我司直接向源头工厂采购。(Màoyìshāng gùlǜ: Rúguǒ wǒmen jiāng shàngyóu línchǎng hé xiàngjiāo zhòngzhíyuán de jīngquè jīngwěidù quánbù pīlù gěi Ōuzhōu mǎijiā, dānxīn mǎijiā tiàoguò wǒsī zhíjiē xiàng yuántóu gōngchǎng cǎigòu.)",
        riskIdentifiedEn: "Intermediary reluctance to disclose upstream plot coordinates due to disintermediation fears stalls EUDR DDS submission, creating a deadlock that blocks customs clearance in Europe.",
        actionPlanVi: "1. Sử dụng cơ chế tham chiếu DDS ẩn danh qua nền tảng EU TRACES/Information System hoặc bên thứ ba kiểm toán tin cậy (trusted third-party vault) để xác thực không mất rừng mà bảo vệ thông tin thương mại nhạy cảm. 2. Ký thỏa thuận không cạnh tranh / không mua vượt cấp (NCNDA – Non-Circumvention, Non-Disclosure Agreement) song ngữ với đối tác Châu Âu. 3. Nâng cao giá trị gia tăng của đơn vị thương mại ở khâu gom hàng, kiểm soát chất lượng và tài trợ chuỗi cung ứng.",
        keyTermsZhEn: [
          { zh: "商业机密保护 (shāngyè jīmì bǎohù)", en: "Commercial confidentiality protection", vi: "Bảo mật bí mật thương mại" },
          { zh: "防绕过协议 (fáng ràoguò xiéyì)", en: "Non-Circumvention Agreement (NCNDA)", vi: "Thỏa thuận không mua vượt cấp" },
          { zh: "参考编号 (cānkǎo biānhào)", en: "DDS Reference Number", vi: "Mã tham chiếu hồ sơ thẩm định DDS" }
        ]
      },
      {
        id: "sc-24",
        lane: "EUDR Traceability",
        titleVi: "Cảnh báo ảnh vệ tinh phát hiện biến động che phủ rừng gần vùng nguyên liệu cà phê – giấy bao bì",
        titleEn: "Satellite Deforestation Alert Near Pulp Packaging & Coffee Sourcing Zone",
        scenarioZh: "【第三方合规平台】卫星遥感复核显示，贵司咖啡豆与牛皮纸箱供应商上报的2号地块在2021年存在疑似林地退化痕迹，风险评级为'不可忽略'。(Dìsānfāng héguī píngtái: Wèixīng yáogǎn fùhé xiǎnshì, guìsī kāfēidòu yǔ niúpízhǐxiāng gōngyìngshāng shàngbào de 2 hào dìkuài zài 2021 nián cúnzài yísì líndì tuìhuà hénjì, fēngxiǎn píngjí wéi 'bùkě hūlüè'.)",
        riskIdentifiedEn: "A 'non-negligible risk' satellite alert post-December 31, 2020 legally prohibits placing the batch on the EU market until full risk mitigation proves a false positive or excludes the affected plot.",
        actionPlanVi: "1. Lập tức cách ly lô nguyên liệu liên quan đến thửa đất số 2, không đóng gói vào đơn hàng xuất sang EU. 2. Tiến hành xác minh thực địa (ground-truthing) kèm ảnh định vị GPS và dữ liệu sử dụng đất địa phương để kiểm tra xem biến động năm 2021 là do chặt tỉa tái canh nông nghiệp hợp pháp hay mất rừng thực sự. 3. Nếu không thể chứng minh rủi ro ở mức 'không đáng kể' (negligible risk), thay thế hoàn toàn bằng nguồn cung từ các thửa đất sạch đã xác minh và cập nhật lại DDS.",
        keyTermsZhEn: [
          { zh: "卫星遥感复核 (wèixīng yáogǎn fùhé)", en: "Satellite remote-sensing verification", vi: "Đối chiếu viễn thám vệ tinh" },
          { zh: "不可忽略风险 (bùkě hūlüè fēngxiǎn)", en: "Non-negligible risk rating", vi: "Mức rủi ro không thể bỏ qua" },
          { zh: "实地核查 (shídì héchá)", en: "On-site ground-truthing audit", vi: "Kiểm tra xác minh thực địa" }
        ]
      }
    ]
  };
})();
