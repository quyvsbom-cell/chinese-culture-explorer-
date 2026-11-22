(function () {
  "use strict";

  var brands20 = [
    {
      id: "v7-brand-101",
      cat: "craft",
      mofcomBatch: "Đợt Quốc gia",
      zh: "龙泉沈广隆剑铺",
      pinyin: "Lóngquán Shěnguǎnglóng Jiànpù",
      hanViet: "Long Tuyền Thẩm Quảng Long Kiếm Phố",
      nameEn: "Longquan Shen Guanglong Sword Shop",
      foundedYear: 1885,
      dynastyVi: "Nhà Thanh (Quang Tự thứ 11)",
      dynastyEn: "Qing Dynasty (11th Year of Guangxu)",
      provinceId: "zhejiang",
      cityVi: "Long Tuyền, Lệ Thủy, Chiết Giang",
      signatureProductVi: "Bảo kiếm Long Tuyền rèn gấp thép Hoa Văn Cương, vỏ gỗ hoa lê khảm đồng chạm rồng",
      signatureProductEn: "Pattern-welded Longquan folded steel swords with rosewood scabbards and engraved brass fittings",
      qualityStandardVi: "Tiêu chuẩn Địa lý Quốc gia GB/T 20467 cho Kiếm Long Tuyền; Di sản Văn hóa Phi vật thể cấp Quốc gia (2006)",
      qualityStandardEn: "National GI Standard GB/T 20467 for Longquan Swords; National Intangible Cultural Heritage (2006)",
      craftSecretVi: "Kỹ nghệ rèn gấp thép nhiều lớp kết hợp sắt rèn địa phương và thép tôi nước suối Long Tuyền, mài tay bằng đá Lượng Thạch tạo sống kiếm sắc nét và độ đàn hồi uốn cong hồi vị",
      craftSecretEn: "Multi-layer folded steel forging combining local iron sand with spring-water quenching and Liangshi whetstone hand-polishing for crisp ridges and elastic recovery",
      sensoryOrMaterialSpecVi: "Lưỡi thép ánh xanh lạnh, vân sóng nước hoặc vân lông chim tự nhiên nổi mịn, trọng tâm cân bằng sát hộ thủ, âm thanh rút kiếm ngân vang thanh mảnh",
      authenticVsCounterfeitVi: "Kiếm thật có dấu triện Thẩm Quảng Long đóng chìm trên sống lưỡi gần chuôi, vân thép chạy xuyên suốt thân lưỡi chứ không ăn mòn hóa chất bề mặt, kèm giấy chứng nhận nghệ nhân truyền nhân",
      b2bTradeVi: "Cung ứng kiếm biểu diễn võ thuật, kiếm trưng bày bảo tàng và quà tặng ngoại giao cao cấp theo đơn đặt hàng thủ công giới hạn",
      b2bTradeEn: "Supplies ceremonial wushu swords, museum display pieces, and bespoke diplomatic gifts through limited artisan commissions",
      vietnamAseanLessonVi: "Làng rèn Đa Sỹ (Hà Nội) và Phúc Sen (Cao Bằng) có thể học mô hình nâng cấp sản phẩm rèn thủ công từ nông cụ sang nghệ phẩm sưu tầm có mã định danh nghệ nhân",
      vietnamAseanLessonEn: "Vietnamese forging villages such as Da Sy and Phuc Sen can adapt this model to elevate traditional smithing into certified collectible metalwork",
      flagshipAddressZh: "浙江省丽水市龙泉市剑池西路沈广隆剑铺",
      visitTipVi: "Nên ghé xưởng rèn truyền thống vào buổi sáng để quan sát công đoạn nung lò than và mài đá nước, kết hợp tham quan Bảo tàng Kiếm và Thanh Từ Long Tuyền",
      craftProcessStepsVi: [
        "Tuyển chọn phôi thép và sắt rèn địa phương, nung đỏ và gấp rèn hàng trăm đến hàng nghìn lớp tạo vân thép",
        "Tạo hình thân kiếm bát diện hoặc tứ diện, tôi nhiệt bằng nước suối Long Tuyền để cân bằng độ cứng và độ dẻo",
        "Mài thô đến mài tinh qua nhiều cấp độ đá mài Lượng Thạch để làm nổi rõ vân thép tự nhiên",
        "Chế tác hộ thủ, chuôi và vỏ gỗ hoa lê khảm đồng chạm khắc, đóng triện nghệ nhân và nghiệm thu cân bằng"
      ],
      craftProcessStepsEn: [
        "Select local iron and high-carbon steel billets, heating and folding them repeatedly to form layered grain",
        "Shape the four- or eight-faceted blade and quench in Longquan spring water to balance hardness and resilience",
        "Progressively polish from coarse to fine Liangshi whetstones to reveal natural folded steel patterns",
        "Fit carved brass guards and rosewood scabbards, stamp the workshop seal, and verify balance"
      ],
      exportComplianceChecklistVi: [
        "Khai báo đúng mã HS dành cho kiếm trưng bày hoặc kiếm võ thuật không mài sắc theo quy định kiểm soát vũ khí lạnh của nước nhập khẩu",
        "Đính kèm chứng nhận không thuộc danh mục gỗ cấm CITES đối với phần vỏ và hộp gỗ tự nhiên",
        "Sử dụng bao bì chống ẩm có dầu bảo quản lưỡi thép và tem xác thực xuất xứ thủ công"
      ],
      exportComplianceChecklistEn: [
        "Classify under unsharpened ceremonial or martial arts display HS codes in compliance with destination import controls",
        "Attach CITES clearance or non-restricted timber certificates for natural hardwood scabbards and presentation boxes",
        "Pack with anti-corrosion blade oil, desiccant liners, and artisan authenticity certificates"
      ]
    },
    {
      id: "v7-brand-102",
      cat: "tea",
      mofcomBatch: "Đợt Quốc gia",
      zh: "开封王大昌茶庄",
      pinyin: "Kāifēng Wángdàchāng Cházhuāng",
      hanViet: "Khai Phong Vương Đại Xương Trà Trang",
      nameEn: "Kaifeng Wang Dachang Tea House",
      foundedYear: 1896,
      dynastyVi: "Nhà Thanh (Quang Tự thứ 22)",
      dynastyEn: "Qing Dynasty (22nd Year of Guangxu)",
      provinceId: "henan",
      cityVi: "Khai Phong, Hà Nam",
      signatureProductVi: "Trà hoa nhài ướp nhiều lượt Vương Đại Xương và trà xanh Tín Dương Mao Tiêm tuyển chọn",
      signatureProductEn: "Multi-scented Wang Dachang jasmine tea and curated Xinyang Maojian green tea blends",
      qualityStandardVi: "Tiêu chuẩn Quốc gia GB/T 22292 cho Trà hoa nhài; quy chuẩn phân hạng nguyên liệu trà Bắc phương",
      qualityStandardEn: "National Standard GB/T 22292 for Jasmine Tea; northern China tea-blending grading protocol",
      craftSecretVi: "Phối trộn búp trà xanh vùng Nam Trung Hoa với quy trình ướp hoa nhài tươi nở về đêm nhiều lượt và sàng lọc tách xác hoa kỹ lưỡng để hợp khẩu vị đậm hương của vùng Trung Nguyên",
      craftSecretEn: "Blends southern green tea bases with repeated overnight fresh jasmine scenting cycles and meticulous flower sifting tailored to Central Plains aroma preferences",
      sensoryOrMaterialSpecVi: "Cánh trà xoăn chặt phủ lông tơ mịn, nước trà vàng sáng trong vắt, hương hoa nhài thanh cao quyện hậu vị ngọt dịu bền qua nhiều nước pha",
      authenticVsCounterfeitVi: "Hộp thiếc và gói giấy cổ điển in rõ thương hiệu Vương Đại Xương Khai Phong kèm mã truy xuất chống giả, hương trà tự nhiên không gắt mùi hương liệu tổng hợp",
      b2bTradeVi: "Cung ứng trà biếu lễ hội, trà nhà hàng khách sạn vùng Trung Nguyên và bộ quà tặng văn hóa Tống Đô cho kênh bán lẻ du lịch",
      b2bTradeEn: "Supplies festive gift teas, hospitality tea programs across the Central Plains, and Song-capital cultural gift sets",
      vietnamAseanLessonVi: "Các nhà trà ướp sen Tây Hồ và trà lài Bảo Lộc có thể học cách chuẩn hóa công thức ướp nhiều lượt kèm bao bì di sản gắn với câu chuyện cố đô",
      vietnamAseanLessonEn: "Vietnamese lotus and jasmine tea houses in Hanoi and Bao Loc can adopt standardized multi-scenting grades paired with heritage capital storytelling",
      flagshipAddressZh: "河南省开封市鼓楼区马道街王大昌茶庄总店",
      visitTipVi: "Ghé cửa hiệu chính trên phố Cổ Mã Đạo vào chiều muộn để thử trà hoa nhài pha ấm sứ nắp và kết hợp dạo chợ đêm Cổ Lâu Khai Phong",
      craftProcessStepsVi: [
        "Tuyển chọn trà phôi xanh xuân giàu nội chất và bảo quản kiểm soát độ ẩm chuẩn",
        "Thu hái nụ hoa nhài tươi vào chiều nắng, chờ hoa hé nở về đêm để đạt đỉnh tỏa hương",
        "Trộn lớp trà và hoa nhài theo tỷ lệ chuẩn để trà hút hương, sau đó sàng tách hoa và sấy nhẹ cố định hương",
        "Lặp lại nhiều lượt ướp tùy hạng trà, đóng gói hút ẩm trong hộp thiếc kín sáng"
      ],
      craftProcessStepsEn: [
        "Select spring green tea bases with dense buds and stabilize moisture content prior to scenting",
        "Harvest mature jasmine buds in late afternoon and stage them until evening bloom peaks",
        "Layer tea leaves with fresh blossoms for aroma absorption, then sift out spent petals and gently dry",
        "Repeat scenting cycles according to grade before sealing in lightproof tin canisters"
      ],
      exportComplianceChecklistVi: [
        "Đáp ứng giới hạn dư lượng thuốc bảo vệ thực vật (MRL) và kiểm định kim loại nặng theo chuẩn nước nhập khẩu",
        "Đăng ký cơ sở sản xuất thực phẩm xuất khẩu và cung cấp chứng thư kiểm dịch thực vật kèm bảng thành phần song ngữ",
        "Bao bì kín khí chống ẩm có ghi rõ ngày đóng gói, hạn sử dụng và hướng dẫn bảo quản"
      ],
      exportComplianceChecklistEn: [
        "Verify pesticide residue (MRL) and heavy metal laboratory test reports against destination food regulations",
        "Maintain food-facility export registration with phytosanitary certificates and bilingual ingredient labels",
        "Use moisture-barrier packaging displaying packing dates, shelf life, and storage conditions"
      ]
    },
    {
      id: "v7-brand-103",
      cat: "craft",
      mofcomBatch: "Đợt Quốc gia",
      zh: "耀州陈炉瓷窑",
      pinyin: "Yàozhōu Chénlú Cíyáo",
      hanViet: "Diệu Châu Trần Lô Từ Diêu",
      nameEn: "Yaozhou Chenlu Celadon Kiln",
      foundedYear: 960,
      dynastyVi: "Nhà Bắc Tống (lò nung liên tục qua Tống – Kim – Nguyên – Minh – Thanh)",
      dynastyEn: "Northern Song Dynasty (continuous kiln firing through Song, Jin, Yuan, Ming, and Qing)",
      provinceId: "shaanxi",
      cityVi: "Đồng Xuyên, Thiểm Tây",
      signatureProductVi: "Gốm Thanh Từ Diệu Châu khắc hoa chìm sắc nét (mẫu đơn, sóng nước, vịt uyên ương) men xanh ô liu trong bóng",
      signatureProductEn: "Carved Yaozhou celadon vessels featuring crisp peony, wave, and duck reliefs beneath olive-green translucent glaze",
      qualityStandardVi: "Tiêu chuẩn Bảo hộ Chỉ dẫn Địa lý Gốm Diệu Châu; Di sản Văn hóa Phi vật thể Quốc gia về kỹ nghệ nung gốm Diệu Châu (2006)",
      qualityStandardEn: "Yaozhou Ware Geographical Indication Protection Standard; National Intangible Cultural Heritage (2006)",
      craftSecretVi: "Kỹ thuật khắc dao nghiêng (Tê Ngưu Khắc Hoa) sâu sắc trên phôi đất bán khô, khi phủ men tro thảo mộc chứa sắt và nung khử ở 1.300 độ C, men tụ dày ở rãnh khắc tạo chiều sâu ánh sáng nổi khối",
      craftSecretEn: "Deep beveled knife carving on leather-hard clay coated with iron-bearing ash glaze and reduction-fired at 1,300 degrees Celsius so pooled glaze accentuates three-dimensional relief",
      sensoryOrMaterialSpecVi: "Men xanh ô liu hoặc xanh đậu thanh nhã, bề mặt trong như ngọc với độ bóng thủy tinh dịu, xương gốm xám đanh gõ vang như chuông đá",
      authenticVsCounterfeitVi: "Đồ thủ công Trần Lô thật có nét dao khắc chuyển độ nông sâu tự nhiên với mép vát sắc gọn, không đều tăm tắp kiểu khuôn đúc công nghiệp; đáy mộc lộ chất đất xám mịn giàu sắt",
      b2bTradeVi: "Cung cấp bộ trà cụ Thanh Từ, đồ trưng bày bảo tàng và bản phục dựng cổ vật thời Tống cho thị trường sưu tầm và khách sạn cao cấp",
      b2bTradeEn: "Supplies celadon teaware, museum replicas of Song dynasty artifacts, and bespoke ceramic installations for luxury hospitality",
      vietnamAseanLessonVi: "Gốm men ngọc thời Lý – Trần và làng gốm Chu Đậu có sự tương đồng kỹ thuật khắc chìm dưới men, mở ra hướng hợp tác triển lãm và dòng sản phẩm phục dựng khảo cổ cao cấp",
      vietnamAseanLessonEn: "Vietnamese Ly-Tran celadon and Chu Dau ceramic ateliers share incised underglaze aesthetics, offering strong potential for archaeological-grade reproduction lines",
      flagshipAddressZh: "陕西省铜川市印台区陈炉古镇耀州窑传统制瓷工坊",
      visitTipVi: "Dành nửa ngày đi bộ qua các bậc thang tường xếp bằng bao nung gốm cổ (Quán Quán Tường) ở cổ trấn Trần Lô và ghé Bảo tàng Di chỉ Lò Diệu Châu ở Hoàng Bảo",
      craftProcessStepsVi: [
        "Khai thác và tinh lọc đất sét giàu sắt vùng Đồng Xuyên, ủ đất nhiều tháng để tăng độ dẻo",
        "Chuốt phôi trên bàn xoay và thực hiện khắc hoa chìm nghiêng dao sắc nét khi phôi còn ẩm vừa",
        "Phủ lớp men tro thực vật truyền thống và nung khử trong lò ở nhiệt độ xấp xỉ 1.300 độ C",
        "Làm nguội chậm trong lò, kiểm định độ trong men, âm thanh xương gốm và đóng dấu lò Trần Lô"
      ],
      craftProcessStepsEn: [
        "Mine, levigate, and age iron-rich Tongchuan stoneware clay to achieve optimal plasticity",
        "Throw vessels on the wheel and execute deep beveled floral carving at the leather-hard stage",
        "Apply traditional wood-ash glaze and fire in a reducing atmosphere near 1,300 degrees Celsius",
        "Cool gradually, inspect glaze pooling and ring tone, and stamp the Chenlu kiln mark"
      ],
      exportComplianceChecklistVi: [
        "Kiểm nghiệm mức thôi nhiễm chì và cadimi đạt chuẩn tiếp xúc thực phẩm (FDA hoặc EU 1935/2004) đối với trà cụ và đồ ăn",
        "Đóng gói xốp định hình hai lớp chống sốc và kiểm định độ bền va đập cho hàng gốm dễ vỡ",
        "Ghi rõ xuất xứ gốm thủ công phục dựng hiện đại để phân biệt với cổ vật thuộc diện hạn chế xuất khẩu"
      ],
      exportComplianceChecklistEn: [
        "Obtain food-contact lead and cadmium leach test certification (FDA or EU 1935/2004) for teaware and tableware",
        "Use double-walled shock-absorbing foam crating engineered for fragile stoneware transit",
        "Declare modern artisan reproduction status clearly to distinguish shipments from restricted historical antiquities"
      ]
    },
    {
      id: "v7-brand-104",
      cat: "craft",
      mofcomBatch: "Đợt Quốc gia",
      zh: "威海锡镶堂",
      pinyin: "Wēihǎi Xīxiāngtáng",
      hanViet: "Uy Hải Tích Tương Đường",
      nameEn: "Weihai Xixiangtang Tin Inlay Studio",
      foundedYear: 1912,
      dynastyVi: "Đầu thời Dân Quốc",
      dynastyEn: "Early Republic of China",
      provinceId: "shandong",
      cityVi: "Uy Hải, Sơn Đông",
      signatureProductVi: "Ấm tử sa, bình gốm sứ và đồ ngọc khảm thiếc tinh khiết chạm nổi rồng phượng, tứ quân tử",
      signatureProductEn: "Pure tin-inlaid Yixing clay teapots, porcelain vases, and jade vessels with chased dragon and floral motifs",
      qualityStandardVi: "Di sản Văn hóa Phi vật thể cấp Quốc gia (kỹ nghệ khảm thiếc Uy Hải); tiêu chuẩn hợp kim thiếc không chì an toàn thực phẩm",
      qualityStandardEn: "National Intangible Cultural Heritage (Weihai Tin Inlay Craft); lead-free food-safe high-purity tin alloy standard",
      craftSecretVi: "Cán thiếc nguyên chất trên 99 phần trăm thành lá mỏng, gò chạm nổi ba chiều rồi ôm khít lên bề mặt cong của gốm tử sa không cần keo dán hóa học nặng mà dựa vào lực ôm cơ học và rãnh bám tinh vi",
      craftSecretEn: "Rolls over 99 percent pure tin into thin sheets, chases three-dimensional relief motifs, and fits them snugly onto curved stoneware using precision mechanical tension without bulky adhesives",
      sensoryOrMaterialSpecVi: "Ánh thiếc trắng bạc dịu mát tương phản nổi bật trên nền đất tử sa nâu trầm, đường chạm sắc sảo không gờ sắc, cầm chắc tay và giữ nhiệt tốt cho trà",
      authenticVsCounterfeitVi: "Sản phẩm chính hiệu dùng thiếc tinh khiết mềm dẻo có ánh bạc ấm tự nhiên, đường chạm tay có chiều sâu biến hóa; hàng nhái thường đúc hợp kim kẽm hoặc nhôm thô nặng và dễ xỉn đen",
      b2bTradeVi: "Cung ứng bộ trà quà tặng doanh nghiệp, quà ngoại giao cấp tỉnh và dòng sản phẩm đồng thương hiệu với các xưởng ấm tử sa Nghi Hưng",
      b2bTradeEn: "Supplies executive tea gift sets, provincial diplomatic gifts, and co-branded artisan editions with Yixing teapot workshops",
      vietnamAseanLessonVi: "Nghệ nhân khảm trai, đậu bạc Định Công và chạm bạc Đồng Xâm có thể học cách kết hợp kim loại quý lên nền gốm Bát Tràng để tạo dòng trà cụ xuất khẩu giá trị cao",
      vietnamAseanLessonEn: "Vietnamese silver-chasing and filigree craftspeople in Dong Xam and Dinh Cong can pair precious metalwork with Bat Trang ceramics for high-value export teaware",
      flagshipAddressZh: "山东省威海市环翠区海滨北路威海锡镶艺术馆",
      visitTipVi: "Nên tham quan bảo tàng khảm thiếc gần khu cảng Uy Hải để xem nghệ nhân gò lá thiếc trực tiếp và thử độ kín khít của nắp ấm khảm thiếc",
      craftProcessStepsVi: [
        "Luyện và cán thiếc tinh khiết không chì thành tấm lá đồng đều về độ dày",
        "Vẽ phác thảo bố cục theo đường cong thân ấm hoặc bình gốm, cưa cắt phôi hoa văn",
        "Đục chạm nổi, uốn cong ôm sát thân gốm và hàn ghép vi điểm không để lộ mối nối",
        "Đánh bóng bán mờ tạo ánh bạc cổ điển, kiểm tra độ khít và đóng dấu xưởng Tích Tương Đường"
      ],
      craftProcessStepsEn: [
        "Refine and roll lead-free high-purity tin into uniform workable sheets",
        "Draft proportional patterns matched to vessel curvature and fret-saw the metal blanks",
        "Chase relief details, contour tightly onto the ceramic body, and execute seamless micro-soldering",
        "Buff to a soft silver sheen, inspect fit precision, and stamp the Xixiangtang hallmark"
      ],
      exportComplianceChecklistVi: [
        "Cung cấp giấy kiểm định hàm lượng thiếc tinh khiết và chứng nhận không chứa chì (RoHS / chuẩn tiếp xúc thực phẩm)",
        "Đóng hộp gỗ lót nhung chống xước bề mặt thiếc mềm trong quá trình vận chuyển đường hàng không",
        "Kèm hướng dẫn vệ sinh bằng khăn mềm và tránh chất tẩy axit mạnh bằng tiếng Anh và tiếng Việt"
      ],
      exportComplianceChecklistEn: [
        "Provide purity assay reports verifying lead-free tin composition compliant with food-contact standards",
        "Pack in velvet-lined presentation cases to prevent abrasion on soft chased tin surfaces during transit",
        "Include bilingual care instructions advising soft-cloth polishing and avoidance of acidic cleaners"
      ]
    },
    {
      id: "v7-brand-105",
      cat: "tcm",
      mofcomBatch: "Đợt Quốc gia",
      zh: "武汉叶开泰",
      pinyin: "Wǔhàn Yèkāitài",
      hanViet: "Vũ Hán Diệp Khai Thái",
      nameEn: "Wuhan Ye Kaitai Traditional Apothecary",
      foundedYear: 1637,
      dynastyVi: "Cuối nhà Minh (Sùng Trinh thứ 10)",
      dynastyEn: "Late Ming Dynasty (10th Year of Chongzhen)",
      provinceId: "hubei",
      cityVi: "Vũ Hán, Hồ Bắc",
      signatureProductVi: "Bộ di sản bào chế thảo mộc cổ truyền và trà thảo mộc văn hóa vùng Kinh Sở (thuần giá trị lịch sử bào chế, không dùng cho mục đích y khoa lâm sàng)",
      signatureProductEn: "Historical herbal processing heritage collections and Jingchu cultural botanical teas (presented strictly as craft and cultural history)",
      qualityStandardVi: "Di sản Văn hóa Phi vật thể Quốc gia về kỹ nghệ bào chế truyền thống Diệp Khai Thái; chuẩn bảo quản dược liệu khô cổ truyền",
      qualityStandardEn: "National Intangible Cultural Heritage for Ye Kaitai traditional herbal preparation; archival botanical preservation standards",
      craftSecretVi: "Lưu giữ quy tắc tuyển chọn nguyên liệu bản địa đạo địa (Đạo Địa Nguyên Liệu) và 18 công đoạn sơ chế thủ công như rửa, ủ, thái phiến mỏng đều, sao vàng theo ghi chép cổ thư triều Minh – Thanh",
      craftSecretEn: "Preserves historical regional botanical sourcing rules and eighteen traditional preparation steps including washing, conditioning, precision slicing, and controlled roasting documented since the Ming-Qing era",
      sensoryOrMaterialSpecVi: "Thảo mộc khô thái lát mỏng đều giữ nguyên sắc tự nhiên và hương thơm mộc mạc của thảo bản vùng Hoa Trung, trình bày trong tủ ngăn kéo gỗ bách truyền thống",
      authenticVsCounterfeitVi: "Khu bảo tàng và gian hàng văn hóa chính thức thuộc quần thể Công viên Văn hóa Diệp Khai Thái tại Hán Dương, có bảng niêm yết nguồn gốc nguyên liệu và tem nhận diện Lão Tự Hào",
      b2bTradeVi: "Phát triển du lịch văn hóa bảo tàng bào chế, cung ứng dòng trà thảo mộc ẩm thực và quà tặng văn hóa bản địa cho đối tác du lịch vùng Trường Giang",
      b2bTradeEn: "Develops heritage apothecary museum tourism, culinary botanical tea blends, and regional cultural gifts along the Yangtze corridor",
      vietnamAseanLessonVi: "Phố cổ Lãn Ông (Hà Nội) và khu Hải Thượng Lãn Ông (TP.HCM) có thể học mô hình bảo tàng sống kết hợp trải nghiệm nhận diện thảo mộc và hương liệu truyền thống cho du khách",
      vietnamAseanLessonEn: "Historic herbal streets in Hanoi and Ho Chi Minh City can draw inspiration from its living-museum model combining botanical education with heritage retail",
      flagshipAddressZh: "湖北省武汉市汉阳区鹦鹉大道叶开泰中医药文化园",
      visitTipVi: "Tham quan Bảo tàng Lịch sử Diệp Khai Thái tại Hán Dương để xem bộ cân tiểu ly cổ, cối giã đồng và trải nghiệm tự làm túi thơm thảo mộc thủ công",
      craftProcessStepsVi: [
        "Tuyển lựa rễ, lá và hạt thảo mộc thu hoạch đúng mùa vụ theo ghi chép lịch sử vùng Hồ Bắc",
        "Làm sạch tạp chất, phân loại kích cỡ và ủ ẩm tự nhiên để giữ nguyên cấu trúc sợi thực vật",
        "Thái lát thủ công hoặc sấy nhẹ ở nhiệt độ kiểm soát nhằm lưu giữ hương thơm tự nhiên",
        "Phối trộn cho các dòng trà thảo mộc ẩm thực hoặc lưu trữ trưng bày trong tủ gỗ chống ẩm"
      ],
      craftProcessStepsEn: [
        "Source seasonal roots, leaves, and seeds according to historical Hubei regional harvest calendars",
        "Clean, grade by size, and condition naturally to preserve botanical fiber integrity",
        "Slice with traditional knives or dry under controlled low heat to retain natural aromatics",
        "Blend for cultural culinary teas or archive in moisture-controlled timber apothecary drawers"
      ],
      exportComplianceChecklistVi: [
        "Phân loại chính xác theo danh mục thực phẩm trà thảo mộc hoặc nguyên liệu thực vật khô, tuyệt đối không ghi công dụng y tế trên nhãn xuất khẩu",
        "Kiểm tra danh mục thực vật được phép nhập khẩu và chứng thư kiểm dịch thực vật tại cảng đích",
        "Kiểm định giới hạn độ ẩm, nấm mốc và dư lượng kim loại nặng theo quy chuẩn thực phẩm quốc tế"
      ],
      exportComplianceChecklistEn: [
        "Classify strictly as culinary herbal tea or dried botanicals without any medical claims on export packaging",
        "Verify destination permitted botanical lists and obtain official phytosanitary certificates",
        "Test for moisture content, mycotoxins, and heavy metals against international food safety limits"
      ]
    },
    {
      id: "v7-brand-106",
      cat: "tcm",
      mofcomBatch: "Đợt Quốc gia",
      zh: "广东星群夏桑菊",
      pinyin: "Guǎngdōng Xīngqún Xiàsāngjú",
      hanViet: "Quảng Đông Tinh Quần Hạ Tang Cúc",
      nameEn: "Guangdong Xingqun Xia Sang Ju",
      foundedYear: 1950,
      dynastyVi: "Thời kỳ Hiện đại (Trung Quốc)",
      dynastyEn: "Modern Era (People's Republic of China)",
      provinceId: "guangdong",
      cityVi: "Quảng Châu, Quảng Đông",
      signatureProductVi: "Trà cốm thảo mộc hòa tan Hạ Khô Thảo – Lá Dâu Tằm – Hoa Cúc truyền thống Lĩnh Nam (thuần lịch sử ẩm thực thảo mộc, không mang tính lâm sàng)",
      signatureProductEn: "Traditional Lingnan instant botanical granule drink made from self-heal, mulberry leaf, and chrysanthemum (presented strictly as culinary beverage heritage)",
      qualityStandardVi: "Di sản Văn hóa Phi vật thể Quốc gia (Văn hóa Lương Trà Lĩnh Nam); tiêu chuẩn công nghiệp đồ uống hòa tan và chiết xuất thực vật hiện đại",
      qualityStandardEn: "National Intangible Cultural Heritage (Lingnan Herbal Tea Culture); modern instant botanical beverage extraction standards",
      craftSecretVi: "Kế thừa công thức đồ uống thảo mộc dân gian Lĩnh Nam có từ cuối triều Thanh, ứng dụng công nghệ chiết xuất chân không nhiệt độ thấp và tạo hạt cốm nhanh tan để giữ trọn hương hoa cúc và vị thanh mát",
      craftSecretEn: "Adapts late-Qing Lingnan herbal drink recipes using low-temperature vacuum extraction and rapid-dissolving granulation to preserve chrysanthemum aroma and crisp flavor",
      sensoryOrMaterialSpecVi: "Hạt cốm màu nâu vàng tơi mịn, hòa tan nhanh trong nước ấm hoặc nước mát, vị ngọt thanh nhẹ xen hậu đắng dịu đặc trưng của lương trà Quảng Đông",
      authenticVsCounterfeitVi: "Bao bì chính hãng in sắc nét biểu trưng Tinh Quần màu xanh lá – trắng, có mã QR truy xuất lô sản xuất và thông tin công ty tại Quảng Châu; hạt cốm không vón cục hay có mùi khét",
      b2bTradeVi: "Xuất khẩu rộng rãi sang hệ thống siêu thị Á Đông tại Hồng Kông, Ma Cao, Đông Nam Á và Bắc Mỹ dưới phân nhóm đồ uống thảo mộc giải khát",
      b2bTradeEn: "Widely exported to Asian grocery chains across Hong Kong, Macau, Southeast Asia, and North America as a heritage botanical refreshment",
      vietnamAseanLessonVi: "Các thương hiệu trà thảo mộc Việt Nam như trà atisô Đà Lạt hay nước sâm bí đao có thể học cách chuẩn hóa dạng cốm hòa tan tiện lợi và đăng ký bảo hộ văn hóa đồ uống vùng miền",
      vietnamAseanLessonEn: "Vietnamese botanical drink makers such as Da Lat artichoke tea producers can emulate its standardized instant-granule format and regional beverage heritage positioning",
      flagshipAddressZh: "广东省广州市海珠区南洲路星群文化展示中心",
      visitTipVi: "Có thể dễ dàng mua hộp trà cốm tại các siêu thị lớn ở Quảng Châu hoặc thưởng thức văn hóa Lương Trà Lĩnh Nam tại các quán trà cổ ở khu Lệ Loan",
      craftProcessStepsVi: [
        "Tuyển chọn cành hoa Hạ Khô Thảo, lá dâu tằm mùa thu và hoa cúc trắng đạt độ khô tiêu chuẩn",
        "Sắc chiết dịch thảo mộc trong hệ thống nồi kín kiểm soát nhiệt độ nhằm hạn chế bay hơi tinh dầu thơm",
        "Cô đặc chân không thành cao lỏng đồng nhất, phối trộn đường thực phẩm theo tỷ lệ chuẩn",
        "Tạo hạt cốm, sấy tầng sôi kiểm soát độ ẩm và đóng gói thanh đơn tiện lợi"
      ],
      craftProcessStepsEn: [
        "Select standardized dried Prunella spikes, autumn mulberry leaves, and white chrysanthemum blossoms",
        "Extract aromatic infusions in closed temperature-controlled vessels to retain volatile floral notes",
        "Vacuum-concentrate into a uniform botanical extract and blend with food-grade sweetener",
        "Granulate, fluidized-bed dry to target moisture, and pack into single-serve sachets"
      ],
      exportComplianceChecklistVi: [
        "Ghi nhãn chuẩn thực phẩm đồ uống giải khát với bảng giá trị dinh dưỡng theo quy định FDA hoặc ASEAN, không ghi nội dung y khoa",
        "Hoàn thiện giấy chứng nhận lưu hành tự do (CFS) và kiểm nghiệm vi sinh theo từng lô xuất khẩu",
        "Đảm bảo bao bì chống ẩm tuyệt đối cho sản phẩm dạng hạt cốm đường trong khí hậu nhiệt đới"
      ],
      exportComplianceChecklistEn: [
        "Label strictly as a refreshing botanical beverage with compliant nutrition facts panels and zero medical claims",
        "Secure Certificates of Free Sale (CFS) and microbiological test reports per export consignment",
        "Use high-barrier moisture-proof foil sachets suited to humid tropical retail distribution"
      ]
    },
    {
      id: "v7-brand-107",
      cat: "craft",
      mofcomBatch: "Đợt Quốc gia",
      zh: "苏州绣娘丝绸",
      pinyin: "Sūzhōu Xiùniáng Sīchóu",
      hanViet: "Tô Châu Tú Nương Ty Trù",
      nameEn: "Suzhou Xiuniang Silk",
      foundedYear: 1986,
      dynastyVi: "Thời kỳ Đương đại (kế thừa truyền thống Tô Tú hơn 2.000 năm)",
      dynastyEn: "Contemporary Era (inheriting over 2,000 years of Suzhou embroidery heritage)",
      provinceId: "jiangsu",
      cityVi: "Tô Châu, Giang Tô",
      signatureProductVi: "Khăn lụa tơ tằm Tô Châu thêu tay hai mặt, lễ phục lụa gấm và chăn tơ tằm kéo tay",
      signatureProductEn: "Double-sided hand-embroidered Suzhou mulberry silk scarves, ceremonial silk apparel, and hand-pulled silk duvets",
      qualityStandardVi: "Tiêu chuẩn Quốc gia GB/T 15551 cho lụa tơ tằm dâu; chứng nhận lụa cao cấp Tô Châu gắn bảo hộ kỹ nghệ Tô Tú",
      qualityStandardEn: "National Standard GB/T 15551 for mulberry silk fabrics; Suzhou fine silk and Su embroidery craft certification",
      craftSecretVi: "Tách một sợi chỉ tơ tằm thành 1/16 đến 1/64 sợi mảnh bằng tay để thêu chuyển sắc tự nhiên không lộ mối nối, kết hợp kỹ thuật dệt gấm sa tanh mềm rủ trên nền tơ 6A vùng Thái Hồ",
      craftSecretEn: "Hand-splits a single silk filament into 1/16 to 1/64 fineness for seamless tonal shading, paired with fluid satin weaves crafted from Grade-6A Taihu mulberry silk",
      sensoryOrMaterialSpecVi: "Mặt lụa óng ánh ánh ngọc trai dịu nhẹ, chạm tay mát mịn và thoáng khí, mũi thêu phẳng mượt hòa vào thớ vải với sắc chuyển mượt như tranh màu nước",
      authenticVsCounterfeitVi: "Lụa thật khi đốt mẫu sợi có mùi tóc cháy và tro bóp vụn, đường thêu hai mặt giấu hoàn toàn đầu chỉ; hàng polyester nhái bóng gắt, tích điện và mũi thêu máy cứng đồng loạt",
      b2bTradeVi: "Cung ứng quà tặng hội nghị quốc tế, vải lụa cao cấp cho nhà mốt thời trang và thiết kế đồng phục lễ tân khách sạn năm sao",
      b2bTradeEn: "Supplies international summit diplomatic gifts, couture silk textiles for fashion houses, and bespoke five-star hospitality attire",
      vietnamAseanLessonVi: "Làng lụa Vạn Phúc và Mã Châu kết hợp làng thêu Quất Động có thể học cách xây dựng chuỗi giá trị khép kín từ tơ 6A đến thời trang ứng dụng và bảo tàng trải nghiệm",
      vietnamAseanLessonEn: "Vietnamese silk hubs such as Van Phuc and Ma Chau paired with Quat Dong embroiderers can build vertically integrated luxury lifestyle brands",
      flagshipAddressZh: "江苏省苏州市姑苏区观前街绣娘丝绸旗舰馆",
      visitTipVi: "Nên ghé phòng trưng bày trên phố Quan Tiền hoặc khu Trấn Hồ (quê hương Tô Tú) để quan sát nghệ nhân tách chỉ tơ dưới ánh sáng tự nhiên",
      craftProcessStepsVi: [
        "Tuyển chọn kén tằm trắng vùng Thái Hồ, ươm tơ hạng 6A và dệt thành các dòng lụa sa tanh, lụa tơ sống",
        "Vẽ mẫu họa tiết cổ điển lên mặt lụa và căng khung gỗ cố định độ phẳng tuyệt đối",
        "Tách sợi chỉ tơ nhuộm màu tự nhiên và thực hiện các mũi thêu chuyển sắc hoặc thêu hai mặt tinh xảo",
        "Giặt hơi làm phẳng, cắt may hoàn thiện sản phẩm và kiểm định độ bền màu trước khi đóng hộp"
      ],
      craftProcessStepsEn: [
        "Select Taihu mulberry cocoons, reel Grade-6A filament silk, and weave satin or habotai textiles",
        "Transfer classical botanical motifs onto silk and tension the fabric on wooden embroidery frames",
        "Split dyed silk threads to micro-fineness and execute shaded or double-sided hand stitches",
        "Steam-finish, tailor into garments or scarves, and inspect colorfastness before boxing"
      ],
      exportComplianceChecklistVi: [
        "Ghi rõ tỷ lệ 100 phần trăm tơ tằm dâu (100% Mulberry Silk) và hướng dẫn giặt khô trên nhãn dệt theo chuẩn dệt may EU/US",
        "Đạt kiểm định không chứa thuốc nhuộm azo bị cấm và hợp chất formaldehyde vượt ngưỡng (OEKO-TEX Standard 100)",
        "Chuẩn bị chứng nhận xuất xứ Form E hoặc RCEP để hưởng ưu đãi thuế quan hàng dệt may thủ công"
      ],
      exportComplianceChecklistEn: [
        "Attach sewn fiber-content labels stating 100 percent Mulberry Silk with dry-clean care symbols per US/EU textile rules",
        "Verify absence of restricted azo dyes and excess formaldehyde under OEKO-TEX Standard 100 testing",
        "Prepare Form E or RCEP certificates of origin to qualify for preferential textile tariff treatment"
      ]
    },
    {
      id: "v7-brand-108",
      cat: "culinary",
      mofcomBatch: "Đợt Quốc gia",
      zh: "南昌万寿宫糕饼",
      pinyin: "Nánchāng Wànshòugōng Gāobǐng",
      hanViet: "Nam Xương Vạn Thọ Cung Cao Bính",
      nameEn: "Nanchang Wanshougong Traditional Pastries",
      foundedYear: 1928,
      dynastyVi: "Thời kỳ Dân Quốc (kế thừa văn hóa ẩm thực phố cổ Vạn Thọ Cung từ thời Minh – Thanh)",
      dynastyEn: "Republic of China Era (inheriting Ming-Qing Wanshougong commercial quarter pastry traditions)",
      provinceId: "jiangxi",
      cityVi: "Nam Xương, Giang Tây",
      signatureProductVi: "Bánh gạo nếp rang Đống Mễ Đường, bánh mè đen giòn và bánh nướng nhân hạt sen Bạch Liên Cám Phái",
      signatureProductEn: "Puffed glutinous rice crisps (Dongmi Tang), toasted black sesame brittle, and Jiangxi white-lotus baked pastries",
      qualityStandardVi: "Tiêu chuẩn Quốc gia GB 7099 cho bánh kẹo truyền thống; quy chuẩn thương hiệu ẩm thực lịch sử khu phố Vạn Thọ Cung",
      qualityStandardEn: "National Food Safety Standard GB 7099 for pastries; Wanshougong historic culinary district craft specification",
      craftSecretVi: "Rang nở hạt gạo nếp dẻo Giang Tây bằng cát nóng tinh khiết cho hạt phồng đều không thấm dầu, rồi trộn mạch nha nấu tay ở nhiệt độ chuẩn để tạo kết cấu giòn tan không dính răng",
      craftSecretEn: "Puffs Jiangxi glutinous rice in clean heated sand for oil-free crispness before binding with hand-boiled maltose syrup at precise sugar temperatures to prevent stickiness",
      sensoryOrMaterialSpecVi: "Miếng bánh cắt vuông vức màu vàng sáng, hạt gạo nếp nổ xốp nhẹ quyện mùi mè rang và hạt sen thơm bùi, vị ngọt dịu nhẹ không gắt cổ",
      authenticVsCounterfeitVi: "Bánh mới xuất xưởng tại khu phố cổ Vạn Thọ Cung có độ giòn khô ráo, không mùi dầu cũ, hộp giấy in họa tiết kiến trúc mái cong Giang Tây và tem truy xuất rõ ràng",
      b2bTradeVi: "Phân phối hộp quà đặc sản du lịch Giang Tây, chuỗi cửa hàng bánh truyền thống tại ga tàu cao tốc và kênh thương mại điện tử đặc sản vùng miền",
      b2bTradeEn: "Distributes Jiangxi heritage tourist gift boxes across high-speed rail retail hubs and regional specialty e-commerce platforms",
      vietnamAseanLessonVi: "Các thương hiệu cốm xào, bánh khảo và kẹo gạo lứt truyền thống Việt Nam có thể học cách tái thiết kế bao bì di sản gắn với khu phố cổ và điểm dừng giao thông trọng điểm",
      vietnamAseanLessonEn: "Vietnamese traditional puffed-rice and sesame confectioners can pair heritage street-quarter branding with travel-retail gift packaging",
      flagshipAddressZh: "江西省南昌市西湖区万寿宫历史文化街区传统糕饼总号",
      visitTipVi: "Nên đến phố lịch sử Vạn Thọ Cung vào buổi tối khi đèn lồng bật sáng để vừa xem thợ cắt bánh nóng tại quầy vừa khám phá ẩm thực đường phố Cám Phái",
      craftProcessStepsVi: [
        "Ngâm, đồ chín và phơi khô hạt gạo nếp đặc sản Giang Tây cho đến khi đạt độ ẩm đồng nhất",
        "Rang nở hạt nếp trong chảo cát nóng hoặc dầu thực vật tinh luyện rồi sàng sạch tạp chất",
        "Nấu đường mạch nha với hạt sen hoặc mè rang đến điểm kéo tơ chuẩn xác",
        "Trộn nhanh tay, ép khuôn gỗ tạo khối đều, cắt miếng khi còn ấm và đóng gói chống ẩm tức thì"
      ],
      craftProcessStepsEn: [
        "Soak, steam, and sun-dry local Jiangxi glutinous rice until uniform low moisture is achieved",
        "Puff the dried rice grains in heated sand or refined vegetable oil and sift thoroughly",
        "Boil maltose syrup with roasted sesame or lotus seeds to the exact binding temperature",
        "Fold rapidly, press into wooden frames, slice while warm, and seal immediately against humidity"
      ],
      exportComplianceChecklistVi: [
        "Khai báo đầy đủ chất gây dị ứng (mè, hạt sen, đậu phộng, gluten) theo chuẩn ghi nhãn thực phẩm quốc tế",
        "Đăng ký mã cơ sở sản xuất thực phẩm xuất khẩu và kiểm nghiệm chỉ số peroxit của chất béo tránh ôi dầu",
        "Đóng gói túi tách ẩm nạp khí nitơ để duy trì độ giòn trong suốt hành trình vận tải biển"
      ],
      exportComplianceChecklistEn: [
        "Declare all allergens including sesame, nuts, and gluten clearly in compliance with destination labeling rules",
        "Maintain export food-facility registration and verify peroxide value tests to ensure lipid freshness",
        "Use nitrogen-flushed moisture-barrier pouches to preserve crisp texture during ocean freight"
      ]
    },
    {
      id: "v7-brand-109",
      cat: "culinary",
      mofcomBatch: "Đợt Quốc gia",
      zh: "淮安文楼汤包",
      pinyin: "Huáiān Wénlóu Tāngbāo",
      hanViet: "Hoài An Văn Lâu Thang Bao",
      nameEn: "Huai'an Wenlou Crab-Roe Soup Dumplings",
      foundedYear: 1817,
      dynastyVi: "Nhà Thanh (Gia Khánh thứ 22)",
      dynastyEn: "Qing Dynasty (22nd Year of Jiaqing)",
      provinceId: "jiangsu",
      cityVi: "Hoài An, Giang Tô",
      signatureProductVi: "Bánh bao súp gạch cua Hoài Dương cỡ lớn ăn bằng ống hút và ẩm thực tiệc cổ truyền Văn Lâu",
      signatureProductEn: "Oversized Huaiyang crab-roe soup dumplings enjoyed with a straw alongside classical Wenlou banquet dishes",
      qualityStandardVi: "Di sản Văn hóa Phi vật thể cấp tỉnh Giang Tô; quy chuẩn kỹ nghệ ẩm thực Hoài Dương truyền thống",
      qualityStandardEn: "Jiangsu Provincial Intangible Cultural Heritage; classical Huaiyang culinary craft specification",
      craftSecretVi: "Hầm da heo, xương gà mái già và gạch cua đồng tươi nhiều giờ rồi để đông lạnh tự nhiên thành thạch nước dùng (Bì Đống), gói trong lớp vỏ bột cán siêu mỏng như cánh ve chịu được lực nâng không rách",
      craftSecretEn: "Simmers pork rind, aged hen stock, and fresh river crab roe into a natural savory aspic wrapped inside translucent paper-thin dough capable of holding hot broth without tearing",
      sensoryOrMaterialSpecVi: "Vỏ bánh trắng trong nhìn thấy sắc cam vàng của nước súp gạch cua bên trong, vị béo thanh ngọt sâu không tanh, vỏ mềm dai quyện giấm đen Trấn Giang và gừng thái chỉ",
      authenticVsCounterfeitVi: "Văn Lâu chính gốc tại cổ trấn Hà Hạ dùng nước dùng hầm tươi hằng ngày với nếp gấp miệng bánh đều mịn trên 20 nếp, tuyệt đối không dùng bột tạo đặc công nghiệp",
      b2bTradeVi: "Phát triển dòng bánh bao súp cấp đông nhanh IQF cho chuỗi nhà hàng Hoài Dương cao cấp và đào tạo đầu bếp ẩm thực di sản",
      b2bTradeEn: "Develops IQF flash-frozen soup dumplings for upscale Huaiyang restaurants and licenses heritage culinary training programs",
      vietnamAseanLessonVi: "Các đặc sản hấp truyền thống Việt Nam như bánh bao nhân trứng muối hay bánh bột lọc Huế có thể học quy trình tiêu chuẩn hóa thạch nước dùng và chuỗi lạnh IQF để mở rộng chuỗi nhà hàng",
      vietnamAseanLessonEn: "Vietnamese steamed specialties can adopt standardized broth-aspic preparation and IQF cold-chain protocols to scale consistently across hospitality chains",
      flagshipAddressZh: "江苏省淮安市淮安区河下古镇花巷文楼总店",
      visitTipVi: "Khi thưởng thức cần nhớ khẩu quyết nâng nhẹ, đặt chậm, mở lỗ nhỏ, thổi nguội trước khi hút nước súp kẻo bỏng lưỡi, đi kèm gừng sợi ngâm giấm Trấn Giang",
      craftProcessStepsVi: [
        "Hầm nước dùng từ xương gà mái già, giò heo và da heo lọc sạch mỡ, kết hợp gạch cua tươi rồi làm đông thành thạch",
        "Nhào bột mì hàm lượng đạm trung bình, ủ bột đủ thời gian và cán vỏ mỏng đều ở giữa hơi dày hơn mép",
        "Gói nhân thạch cua gọn gàng và bắt nếp gấp kín miệng bánh tạo hình lồng đèn tròn đều",
        "Hấp bằng xửng tre lửa lớn khoảng 8 đến 10 phút để thạch tan thành nước súp nóng hổi mà vỏ vẫn nguyên vẹn"
      ],
      craftProcessStepsEn: [
        "Simmer aged hen, pork skin, and fresh river crab roe stock, then chill into a firm savory aspic",
        "Knead medium-protein wheat dough, rest thoroughly, and roll thin skins slightly thicker at the center",
        "Enclose cubed crab aspic and pleat tightly into symmetrical lantern-shaped dumplings",
        "Steam over high heat in bamboo baskets for 8 to 10 minutes until the aspic liquefies cleanly inside intact skins"
      ],
      exportComplianceChecklistVi: [
        "Kiểm soát nghiêm ngặt chuỗi lạnh âm 18 độ C đối với dòng cấp đông IQF kèm chứng nhận HACCP/ISO 22000",
        "Tuân thủ quy định kiểm dịch thủy sản và sản phẩm từ thịt của nước nhập khẩu (nhiều thị trường yêu cầu nhà máy chế biến được phê duyệt trước)",
        "Ghi rõ cảnh báo dị ứng giáp xác (cua) và lúa mì cùng hướng dẫn hấp lại chi tiết"
      ],
      exportComplianceChecklistEn: [
        "Maintain strict minus-18 degrees Celsius IQF cold-chain integrity backed by HACCP and ISO 22000 certification",
        "Comply with destination meat and crustacean import approvals requiring pre-listed processing facilities",
        "Display clear crustacean and wheat allergen warnings alongside precise re-steaming instructions"
      ]
    },
    {
      id: "v7-brand-110",
      cat: "craft",
      mofcomBatch: "Đợt Quốc gia",
      zh: "禹州孔家钧窑",
      pinyin: "Yǔzhōu Kǒngjiā Jūnyáo",
      hanViet: "Vũ Châu Khổng Gia Quân Diêu",
      nameEn: "Yuzhou Kong Family Jun Kiln",
      foundedYear: 1878,
      dynastyVi: "Nhà Thanh (Quang Tự thứ 4)",
      dynastyEn: "Qing Dynasty (4th Year of Guangxu)",
      provinceId: "henan",
      cityVi: "Vũ Châu, Hứa Xương, Hà Nam",
      signatureProductVi: "Bình, lư hương và ấm trà gốm Quân Diêu biến màu tự nhiên trong lò (Diêu Biến) sắc tím hoa cà, đỏ hải đường và xanh trời",
      signatureProductEn: "Kiln-transmuted Jun porcelain vases, censers, and teaware exhibiting natural copper-red, plum-purple, and sky-blue opalescent glazes",
      qualityStandardVi: "Tiêu chuẩn Chỉ dẫn Địa lý Quốc gia GB/T 19951 cho Gốm Quân Diêu; Di sản Văn hóa Phi vật thể cấp Quốc gia",
      qualityStandardEn: "National GI Standard GB/T 19951 for Jun Porcelain; National Intangible Cultural Heritage",
      craftSecretVi: "Sử dụng khoáng đồng bản địa trong men nhũ tương dày và kỹ thuật điều khiển khí quyển oxy hóa – khử ở 1.320 độ C tạo hiệu ứng Nhập Diêu Nhất Sắc, Xuất Diêu Vạn Thải (vào lò một màu, ra lò vạn sắc không chiếc nào trùng chiếc nào)",
      craftSecretEn: "Incorporates local copper minerals into thick opalescent glaze fired through oxidation-reduction shifts at 1,320 degrees Celsius, yielding unrepeatable kiln-transmuted hues on every piece",
      sensoryOrMaterialSpecVi: "Lớp men dày bóng mượt như mỡ ngọc, xuất hiện đường vân giun bò (Khâu Dẫn Tẩu Nê Văn) và chuyển sắc lam – tím – đỏ son đầy chiều sâu thị giác",
      authenticVsCounterfeitVi: "Tác phẩm Khổng Gia Quân Diêu thật có sắc chuyển tự nhiên hòa quyện trong chiều sâu lớp men dày, đáy đóng triện Khổng Gia Quân Diêu kèm số hiệu tác phẩm độc bản và giấy giám định",
      b2bTradeVi: "Cung ứng tác phẩm nghệ thuật độc bản cho phòng trưng bày quốc tế, quà tặng ngoại giao cấp nhà nước và bộ trà cụ sưu tầm",
      b2bTradeEn: "Supplies one-of-a-kind ceramic artworks for international galleries, state diplomatic gifts, and collector teaware series",
      vietnamAseanLessonVi: "Các xưởng gốm men hỏa biến Việt Nam tại Bát Tràng và Biên Hòa có thể học cách xây dựng hồ sơ độc bản có đánh số, bảo tàng gia tộc và hệ tiêu chuẩn chỉ dẫn địa lý",
      vietnamAseanLessonEn: "Vietnamese flambe-glaze ceramicists in Bat Trang and Bien Hoa can adopt numbered edition certificates, family kiln archives, and GI certification",
      flagshipAddressZh: "河南省许昌市禹州市神垕古镇孔家钧窑艺术馆",
      visitTipVi: "Nên ghé cổ trấn Thần Hậu (kinh đô gốm Quân) để tham quan xưởng nung lò than – lò khí của gia tộc họ Khổng và xem quy trình mở lò đầy kịch tính",
      craftProcessStepsVi: [
        "Phối trộn đất sét trắng và khoáng thạch địa phương Vũ Châu, lọc kỹ và ủ đất tạo xương gốm chịu nhiệt cao",
        "Tạo hình bằng bàn xoay hoặc khuôn thạch cao thủ công, tu sửa tỉ mỉ và nung sơ (nung mộc)",
        "Tráng nhiều lớp men khoáng chứa đồng dày đều và xếp vào bao nung chịu lửa",
        "Nung khử ở nhiệt độ trên 1.300 độ C để kích hoạt phản ứng biến màu đồng tự nhiên và làm nguội chậm"
      ],
      craftProcessStepsEn: [
        "Blend local Yuzhou stoneware clays and minerals, refine, and age for high-temperature structural stability",
        "Form vessels by wheel-throwing or hand-finishing, trim details, and complete bisque firing",
        "Apply thick multi-layered copper-mineral opalescent glaze and load into refractory saggars",
        "Reduction-fire above 1,300 degrees Celsius to trigger natural copper transmutation before slow cooling"
      ],
      exportComplianceChecklistVi: [
        "Cấp chứng nhận tác phẩm nghệ thuật đương đại có số hiệu độc bản để thuận lợi thông quan hàng mỹ nghệ",
        "Đóng thùng gỗ hun trùng chuẩn ISPM-15 lót xốp cắt CNC theo đúng biên dạng từng bình gốm",
        "Kiểm nghiệm an toàn bề mặt men tiếp xúc thực phẩm nếu xuất khẩu dưới dòng trà cụ sử dụng hằng ngày"
      ],
      exportComplianceChecklistEn: [
        "Issue numbered contemporary art certificates to streamline customs valuation and fine-craft clearance",
        "Pack in ISPM-15 heat-treated wooden crates with custom CNC-cut shock-absorbing foam inserts",
        "Include food-contact glaze safety test reports for functional teaware export lines"
      ]
    },
    {
      id: "v7-brand-111",
      cat: "culinary",
      mofcomBatch: "Đợt Quốc gia",
      zh: "长春鼎丰真",
      pinyin: "Chángchūn Dǐngfēngzhēn",
      hanViet: "Trường Xuân Đỉnh Phong Chân",
      nameEn: "Changchun Dingfengzhen Confectionery",
      foundedYear: 1911,
      dynastyVi: "Cuối nhà Thanh (Tuyên Thống thứ 3)",
      dynastyEn: "Late Qing Dynasty (3rd Year of Xuantong)",
      provinceId: "jilin",
      cityVi: "Trường Xuân, Cát Lâm",
      signatureProductVi: "Bánh Tát Kỳ Mã (Sachima) truyền thống Đông Bắc, bánh trung thu Tô thức – Kinh thức và bánh tám vị Bát Kiến",
      signatureProductEn: "Traditional Northeastern Sachima honey-glazed pastry, Suzhou-Beijing style mooncakes, and Eight-Delicacy gift pastries",
      qualityStandardVi: "Di sản Văn hóa Phi vật thể cấp tỉnh Cát Lâm; tiêu chuẩn Quốc gia GB/T 22475 cho bánh Tát Kỳ Mã và bánh nướng truyền thống",
      qualityStandardEn: "Jilin Provincial Intangible Cultural Heritage; National Standard GB/T 22475 for Sachima and traditional baked pastries",
      craftSecretVi: "Kết hợp kỹ thuật làm bánh Mãn Châu cổ với phong vị Giang Nam do sáng lập viên gốc Chiết Giang mang lên Đông Bắc; dùng trứng gà tươi trộn bột cán sợi mịn chiên vàng nhẹ rồi áo mật ong hoa rừng Trường Bạch",
      craftSecretEn: "Fuses Manchu pastry heritage with Jiangnan finesse introduced by its Zhejiang founder, using fresh-egg dough strips lightly crisped and bound with Changbai forest honey syrup",
      sensoryOrMaterialSpecVi: "Miếng bánh Tát Kỳ Mã xốp mềm tan nhẹ, thơm dịu mùi trứng và mật ong, điểm xuyết nho khô và hạt dưa bùi béo, không cứng hay quá ngọt",
      authenticVsCounterfeitVi: "Cửa hàng chính hiệu Đỉnh Phong Chân trên đường Đại Mã Lộ trưng bày biển hiệu thư pháp cổ, hộp bánh in logo ba chữ vàng nổi bật kèm tem niêm phong ngày sản xuất ngắn hạn",
      b2bTradeVi: "Cung ứng hộp quà Tết Trung Thu, Tết Nguyên Đán cho doanh nghiệp vùng Đông Bắc và phát triển dòng bánh ít đường đóng gói hiện đại cho bán lẻ toàn quốc",
      b2bTradeEn: "Supplies seasonal Mid-Autumn and Lunar New Year corporate gift boxes across Northeast China alongside reduced-sugar modern retail lines",
      vietnamAseanLessonVi: "Các hãng bánh truyền thống Việt Nam như bánh pía Sóc Trăng và bánh nướng cổ truyền có thể học cách kết hợp nguyên liệu bản địa (như mật ong rừng) và tái cấu trúc công thức giảm ngọt hợp thị hiếu trẻ",
      vietnamAseanLessonEn: "Vietnamese heritage bakeries such as Soc Trang pia cake makers can pair local honey or regional fillings with lower-sugar modern formats",
      flagshipAddressZh: "吉林省长春市南关区大马路鼎丰真老店",
      visitTipVi: "Nên đến cửa hàng gốc trên đường Đại Mã Lộ vào dịp gần Trung Thu hoặc Tết Nguyên Đán để mua bánh nướng mới ra lò và thử bánh Tát Kỳ Mã truyền thống",
      craftProcessStepsVi: [
        "Trộn bột mì thượng hạng với trứng gà tươi nguyên chất, nhào mịn và cán thành lá bột mỏng đều",
        "Cắt sợi nhỏ đồng đều và chiên phồng nhẹ trong dầu thực vật sạch kiểm soát nhiệt độ",
        "Nấu siro mạch nha kết hợp mật ong hoa rừng vùng Đông Bắc đến độ sánh chuẩn",
        "Trộn sợi bánh với mật và các loại hạt quả khô, ép khung, cắt khối và đóng gói kín khí"
      ],
      craftProcessStepsEn: [
        "Blend fine wheat flour with fresh whole eggs, knead smoothly, and sheet into thin uniform dough",
        "Cut into delicate strips and puff lightly in clean temperature-controlled vegetable oil",
        "Simmer maltose syrup with Northeastern forest honey to the target viscosity",
        "Coat puffed strips with syrup and dried fruits, press into trays, slice, and seal airtight"
      ],
      exportComplianceChecklistVi: [
        "Khai báo rõ thành phần trứng, lúa mì, mè và các loại hạt trên nhãn phụ song ngữ theo luật thực phẩm nước nhập khẩu",
        "Chú ý quy định kiểm dịch sản phẩm có chứa trứng hoặc mật ong tự nhiên tại thị trường EU, Mỹ và Úc",
        "Kiểm định hạn sử dụng thực tế trong điều kiện nhiệt độ môi trường và đính kèm gói hút oxy an toàn"
      ],
      exportComplianceChecklistEn: [
        "Declare egg, wheat, sesame, and tree-nut allergens clearly on bilingual import labels",
        "Verify destination animal-origin import rules applicable to egg- and honey-containing bakery goods",
        "Validate ambient shelf-life stability and incorporate food-grade oxygen absorbers"
      ]
    },
    {
      id: "v7-brand-112",
      cat: "tcm",
      mofcomBatch: "Đợt Quốc gia",
      zh: "昆明福林堂",
      pinyin: "Kūnmíng Fúlíntáng",
      hanViet: "Côn Minh Phúc Lâm Đường",
      nameEn: "Kunming Fulintang Historic Apothecary",
      foundedYear: 1857,
      dynastyVi: "Nhà Thanh (Hàm Phong thứ 7)",
      dynastyEn: "Qing Dynasty (7th Year of Xianfeng)",
      provinceId: "yunnan",
      cityVi: "Côn Minh, Vân Nam",
      signatureProductVi: "Di sản văn hóa thảo mộc cao nguyên Vân Nam và các dòng trà hoa, thảo mộc ẩm thực bản địa (thuần giá trị di sản văn hóa, không chẩn đoán hay tư vấn y khoa)",
      signatureProductEn: "Yunnan plateau botanical heritage archives and regional floral culinary infusions (presented strictly as cultural and architectural heritage)",
      qualityStandardVi: "Di tích Văn hóa Trọng điểm cấp tỉnh Vân Nam (tòa lầu góc gỗ Bát Giác Phúc Lâm Đường); quy chuẩn lưu trữ và tuyển chọn thảo mộc vùng cao nguyên",
      qualityStandardEn: "Yunnan Provincial Protected Cultural Relic (historic corner timber pavilion); highland botanical grading and archiving standards",
      craftSecretVi: "Tọa lạc tại tòa lầu gỗ góc phố hình tam giác độc đáo ở trung tâm Côn Minh cổ, lưu giữ truyền thống thu mua và sơ chế thảo mộc cao nguyên Vân Nam (như Tam Thất, Thiên Ma, hoa trà) qua kỹ thuật phơi gió và sấy nhẹ vùng núi cao",
      craftSecretEn: "Housed in an iconic triangular timber corner pavilion in old Kunming, preserving traditional highland botanical grading, shade-drying, and gentle curing methods for Yunnan flora",
      sensoryOrMaterialSpecVi: "Không gian kiến trúc gỗ chạm trổ cổ kính thoang thoảng hương thảo mộc khô tự nhiên của vùng Vân Quý; sản phẩm trà hoa và thảo mộc ẩm thực giữ nguyên màu sắc và mùi thơm dịu nhẹ",
      authenticVsCounterfeitVi: "Địa chỉ chính thống nằm tại ngã tư phố Quang Hoa và phố Văn Minh với kiến trúc gỗ cổ từ thế kỷ XIX được bảo tồn nguyên vẹn, sản phẩm văn hóa có tem nhận diện Phúc Lâm Đường Côn Minh",
      b2bTradeVi: "Kết hợp du lịch di sản kiến trúc phố cổ Côn Minh với cung ứng quà tặng trà thảo mộc cao nguyên Vân Nam cho du khách quốc tế và chuỗi cửa hàng văn hóa",
      b2bTradeEn: "Integrates old-town architectural heritage tourism with Yunnan highland floral tea gift lines for international travelers and cultural retailers",
      vietnamAseanLessonVi: "Vùng thảo mộc Sa Pa và Tây Bắc Việt Nam có chung hệ sinh thái dãy Hoàng Liên Sơn với Vân Nam, có thể học cách xây dựng nhà trưng bày kiến trúc di sản gắn với trà thảo mộc bản địa",
      vietnamAseanLessonEn: "Highland botanical regions in Sa Pa and Northwest Vietnam share ecological affinities with Yunnan and can pair heritage architecture with curated local floral teas",
      flagshipAddressZh: "云南省昆明市五华区光华街31号福林堂旧址",
      visitTipVi: "Tòa nhà cổ Phúc Lâm Đường là điểm chụp ảnh kiến trúc nổi tiếng nhất phố cổ Côn Minh; nên ghé buổi sáng để ngắm chi tiết mái ngói âm dương và các tủ gỗ cổ bên trong",
      craftProcessStepsVi: [
        "Thu hái thảo mộc và hoa bản địa từ các vùng núi cao Vân Nam theo đúng chu kỳ mùa vụ",
        "Rửa sạch bằng nước nguồn tinh khiết, phân loại bằng tay theo kích thước và độ nguyên vẹn",
        "Phơi râm thông gió tự nhiên trên giàn tre cao nguyên để giữ màu sắc và hương thơm đặc trưng",
        "Đóng gói trong hộp giấy văn hóa in họa tiết lầu cổ Phúc Lâm Đường kèm thuyết minh nguồn gốc"
      ],
      craftProcessStepsEn: [
        "Harvest highland Yunnan blossoms and culinary botanicals strictly within their seasonal peak",
        "Clean with pure mountain water and hand-grade for size and visual integrity",
        "Shade-dry on ventilated bamboo racks in cool plateau air to preserve natural color and aroma",
        "Package in heritage boxes illustrated with the Fulintang pavilion alongside botanical provenance notes"
      ],
      exportComplianceChecklistVi: [
        "Đảm bảo mọi sản phẩm xuất khẩu nằm trong danh mục thực phẩm trà hoa hoặc gia vị ẩm thực thông thường, không ghi công dụng y tế",
        "Kiểm tra danh mục bảo vệ thực vật hoang dã CITES đối với các loài thực vật quý hiếm vùng Vân Nam",
        "Đính kèm chứng thư kiểm dịch thực vật và kết quả phân tích độ ẩm, kim loại nặng đạt chuẩn quốc tế"
      ],
      exportComplianceChecklistEn: [
        "Ensure exported items are classified strictly as culinary floral teas or spices with zero medical claims",
        "Screen all Yunnan botanical ingredients against CITES protected wild flora appendices",
        "Attach phytosanitary certificates plus moisture and heavy metal compliance reports"
      ]
    },
    {
      id: "v7-brand-113",
      cat: "culinary",
      mofcomBatch: "Đợt Quốc gia",
      zh: "合肥詹记桃酥",
      pinyin: "Héféi Zhānjì Táosū",
      hanViet: "Hợp Phì Chiêm Ký Đào Tô",
      nameEn: "Hefei Zhanji Traditional Walnut Cookies",
      foundedYear: 1955,
      dynastyVi: "Thời kỳ Hiện đại (Trung Quốc)",
      dynastyEn: "Modern Era (People's Republic of China)",
      provinceId: "anhui",
      cityVi: "Hợp Phì, An Huy",
      signatureProductVi: "Bánh Đào Tô nướng giòn xốp nhân hạt óc chó và bộ điểm tâm nướng tươi kiểu Trung Hoa (bánh trứng sữa, bánh đậu xanh, bánh hạt dẻ)",
      signatureProductEn: "Crumbly baked walnut cookies (Taosu) and fresh-baked Chinese heritage pastries including mung bean cakes and chestnut pies",
      qualityStandardVi: "Tiêu chuẩn Quốc gia GB 7099 về an toàn thực phẩm bánh nướng; quy trình chuỗi nướng tươi tại quầy của thương hiệu điểm tâm An Huy",
      qualityStandardEn: "National Food Safety Standard GB 7099 for baked pastries; Anhui heritage open-kitchen fresh-baking protocol",
      craftSecretVi: "Kế thừa kỹ nghệ làm bánh Đào Tô của thợ bánh Huy Châu – Giang Tây, cân chỉnh tỷ lệ bột mì hàm lượng gluten thấp, dầu thực vật và vụn óc chó nướng hai giai đoạn lửa để bánh nứt hoa tự nhiên và tan xốp trong miệng",
      craftSecretEn: "Carries forward Huizhou-style Taosu craftsmanship using low-gluten wheat flour, balanced oil ratios, and two-stage baking temperatures that produce natural surface cracks and a melt-in-the-mouth crumb",
      sensoryOrMaterialSpecVi: "Bánh tròn dẹt màu vàng nâu đều, mặt bánh rạn vân tự nhiên rắc mè rang và hạt óc chó, cắn vào giòn tơi không khô nghẹn và tỏa hương bùi béo thanh nhẹ",
      authenticVsCounterfeitVi: "Cửa hàng chính hãng Chiêm Ký có lò nướng mở tỏa hương thơm tại chỗ, hộp giấy màu cam đất – trắng in biểu trưng chim én cổ điển và tem niêm phong lô nướng trong ngày",
      b2bTradeVi: "Mở rộng mô hình nhượng quyền và cửa hàng trực tiếp trên toàn Trung Quốc, cung ứng hộp quà điểm tâm Trung Hoa kiểu mới (Tân Trung Thức) cho giới trẻ và doanh nghiệp",
      b2bTradeEn: "Scales direct-operated Neo-Chinese bakery boutiques nationwide while supplying modern heritage gift tins for urban consumers and corporate clients",
      vietnamAseanLessonVi: "Các tiệm bánh truyền thống Việt Nam như bánh đậu xanh Hải Dương hay bánh nướng cố truyền có thể học mô hình Tân Trung Thức: giữ cốt lõi công thức cũ nhưng làm mới cửa hàng lò nướng mở và khẩu phần nhỏ gọn",
      vietnamAseanLessonEn: "Vietnamese traditional confectioners such as Hai Duong mung bean cake makers can adopt the Neo-Chinese bakery model combining heritage recipes with open-oven boutiques and bite-sized formats",
      flagshipAddressZh: "安徽省合肥市庐阳区宿州路詹记桃酥总店",
      visitTipVi: "Nên ghé cửa hàng trên đường Túc Châu vào khung giờ ra lò giữa buổi sáng để mua bánh Đào Tô còn ấm nóng và bánh mochi nhân đậu đỏ nướng",
      craftProcessStepsVi: [
        "Rây mịn bột mì ít gluten, trộn đều với đường nghiền mịn, dầu thực vật tinh luyện và trứng tươi",
        "Thêm vụn hạt óc chó nướng thơm, nhào nhẹ tay tránh tạo sợi gluten làm cứng bánh",
        "Định hình viên bánh tròn ấn nhẹ tạo độ dày đồng đều và quét lớp trứng mỏng rắc mè lên mặt",
        "Nướng hai mức nhiệt trong lò đối lưu đến khi mặt bánh nứt vân đẹp và tỏa hương bùi, để nguội trên khay lưới"
      ],
      craftProcessStepsEn: [
        "Sift low-gluten cake flour and cream gently with fine sugar, refined vegetable oil, and fresh eggs",
        "Fold in roasted walnut pieces using minimal mixing to prevent tough gluten development",
        "Portion into uniform rounds, press gently, brush with egg wash, and top with toasted sesame",
        "Bake through two temperature zones until golden with natural surface fissures, then cool on wire racks"
      ],
      exportComplianceChecklistVi: [
        "Công bố rõ chất gây dị ứng (hạt óc chó, lúa mì, trứng, mè) theo đúng quy định ghi nhãn quốc tế",
        "Sử dụng khay nhựa định hình từng chiếc bên trong hộp thiếc để chống vỡ vụn bánh Đào Tô vốn rất xốp giòn",
        "Kiểm tra hạn sử dụng dầu thực vật và bổ sung gói hút ẩm thực phẩm cho vận chuyển đường dài"
      ],
      exportComplianceChecklistEn: [
        "Label tree nuts (walnuts), wheat, eggs, and sesame allergens prominently per destination food laws",
        "Use individual molded inner trays inside rigid tins to protect fragile crumbly cookies in transit",
        "Verify oxidative stability of fats and include food-grade desiccants for long-haul shipping"
      ]
    },
    {
      id: "v7-brand-114",
      cat: "culinary",
      mofcomBatch: "Đợt Quốc gia",
      zh: "兰州马子禄牛肉面",
      pinyin: "Lánzhōu Mǎzǐlù Niúròumiàn",
      hanViet: "Lan Châu Mã Tử Lộc Ngưu Nhục Diện",
      nameEn: "Lanzhou Mazilu Hand-Pulled Beef Noodles",
      foundedYear: 1954,
      dynastyVi: "Thời kỳ Hiện đại (Trung Quốc)",
      dynastyEn: "Modern Era (People's Republic of China)",
      provinceId: "gansu",
      cityVi: "Lan Châu, Cam Túc",
      signatureProductVi: "Mì bò kéo tay Lan Châu chuẩn ngũ sắc: Nhất Thanh, Nhị Bạch, Tam Hồng, Tứ Lục, Ngũ Hoàng",
      signatureProductEn: "Lanzhou hand-pulled beef noodles embodying the five-color canon: clear broth, white radish, red chili oil, green herbs, and golden noodles",
      qualityStandardVi: "Tiêu chuẩn địa phương Lan Châu cho Mì bò kéo tay; Di sản Văn hóa Phi vật thể Quốc gia về kỹ nghệ kéo mì Lan Châu",
      qualityStandardEn: "Lanzhou Municipal Standard for Beef Noodles; National Intangible Cultural Heritage for hand-pulled noodle craftsmanship",
      craftSecretVi: "Nhào bột mì cao nguyên Cam Túc với nước tro thực vật Bồng Hôi (kiềm tự nhiên) tạo độ dẻo dai cực cao để thợ kéo tay trực tiếp thành 8 kích cỡ sợi khác nhau từ sợi mảnh như tóc đến sợi dẹt rộng, chan nước dùng xương bò hầm gia vị thảo quả – hồi quế trong vắt",
      craftSecretEn: "Kneads Gansu highland wheat dough with natural Penghui plant ash water for superior elasticity, hand-pulling eight custom noodle widths on demand served in spiced clear beef bone broth",
      sensoryOrMaterialSpecVi: "Nước dùng trong vắt ngọt thanh mùi xương bò và thảo mộc, củ cải trắng thái lát mỏng trong suốt, dầu ớt đỏ rực thơm nồng không gắt, hành lá rau mùi xanh tươi và sợi mì vàng nhạt dai mượt",
      authenticVsCounterfeitVi: "Tiệm gốc Mã Tử Lộc trên phố Đại Trung Hạng mở cửa từ sáng sớm đến đầu giờ chiều là hết nước dùng, thợ kéo mì biểu diễn ngay sau quầy kính và có chứng nhận Lão Tự Hào Trung Hoa treo trang trọng",
      b2bTradeVi: "Mở rộng nhượng quyền quốc tế thành công (tiêu biểu tại Nhật Bản) và phát triển bộ mì bò Lan Châu đóng hộp tự nấu giữ nguyên gói nước cốt hầm và dầu ớt chuẩn vị",
      b2bTradeEn: "Expands internationally through licensed overseas branches including Japan and produces ready-to-cook retail meal kits with authentic broth concentrates and chili oil",
      vietnamAseanLessonVi: "Phở bò truyền thống Việt Nam có cấu trúc tương đồng rất cao về triết lý nước dùng xương bò hầm gia vị trong vắt; có thể học Mã Tử Lộc cách chuẩn hóa bộ chỉ số ngũ giác và mô hình nhượng quyền ra thị trường Nhật Bản – quốc tế",
      vietnamAseanLessonEn: "Vietnamese beef pho shares deep culinary parallels in clear spiced bone broth and can learn from Mazilu's five-attribute sensory standardization and disciplined international franchising",
      flagshipAddressZh: "甘肃省兰州市城关区大众巷马子禄牛肉面总店",
      visitTipVi: "Nên đến ăn sáng trước 10 giờ tại quán gốc phố Đại Trung Hạng; khi gọi món có thể chọn cỡ sợi mì ưa thích như Mao Tế (siêu mảnh), Nhị Tế (vừa tròn) hoặc Cửu Diệp (dẹt nhỏ)",
      craftProcessStepsVi: [
        "Hầm xương ống bò, thịt nạm bò thảo nguyên và túi gia vị hơn mười loại thảo mộc tự nhiên lọc trong nước dùng",
        "Nhào bột mì với nước kiềm Bồng Hôi theo tỷ lệ chuẩn, ủ bột và nhồi kéo nhiều nhịp cho dẻo bóng",
        "Kéo tay liên tục gấp đôi khối bột theo yêu cầu cỡ sợi của thực khách rồi thả ngay vào nồi nước sôi",
        "Vớt mì nóng, chan nước dùng trong kèm củ cải trắng, lát thịt bò, dầu ớt đỏ và hành mùi tươi"
      ],
      craftProcessStepsEn: [
        "Simmer grassland beef marrow bones, brisket, and over a dozen whole spices before clarifying the broth",
        "Knead wheat dough with natural Penghui alkaline water, rest, and work until silky and elastic",
        "Hand-pull and fold the dough to the diner's chosen noodle width and boil immediately",
        "Top hot noodles with clear broth, translucent radish slices, braised beef, fragrant chili oil, and fresh herbs"
      ],
      exportComplianceChecklistVi: [
        "Đối với dòng mì ăn liền đóng hộp xuất khẩu, kiểm tra nghiêm quy định nhập khẩu chiết xuất thịt bò tại nước đích (nhiều nước yêu cầu bản cốt gia vị thực vật tương đương)",
        "Đạt chứng nhận Halal quốc tế nếu phân phối vào thị trường Hồi giáo tại ASEAN và Trung Đông",
        "Ghi rõ thành phần gluten lúa mì, mè và ớt kèm hướng dẫn nấu chuẩn thời gian giữ độ dai sợi mì"
      ],
      exportComplianceChecklistEn: [
        "Verify destination meat-extract import restrictions for packaged kits, using approved plant-based broth bases where required",
        "Obtain internationally recognized Halal certification for distribution across ASEAN and Middle Eastern markets",
        "Label wheat gluten and sesame clearly alongside precise boiling times to preserve noodle chew"
      ]
    },
    {
      id: "v7-brand-115",
      cat: "craft",
      mofcomBatch: "Đợt Quốc gia",
      zh: "莆田方氏木雕",
      pinyin: "Pútián Fāngshì Mùdiāo",
      hanViet: "Phủ Điền Phương Thị Mộc Điêu",
      nameEn: "Putian Fang Family Woodcarving",
      foundedYear: 1908,
      dynastyVi: "Cuối nhà Thanh (kế thừa truyền thống mộc điêu Phủ Điền từ thời Đường – Tống)",
      dynastyEn: "Late Qing Dynasty (inheriting Tang-Song Putian fine woodcarving lineage)",
      provinceId: "fujian",
      cityVi: "Phủ Điền, Phúc Kiến",
      signatureProductVi: "Tượng điêu khắc gỗ Long Nhãn, gỗ Hoàng Dương và tác phẩm chạm lộng đa tầng trên gỗ Trầm Hương Phủ Điền",
      signatureProductEn: "Intricately carved Longan wood, boxwood, and multi-layered openwork agarwood sculptures from Putian",
      qualityStandardVi: "Di sản Văn hóa Phi vật thể Quốc gia (Điêu khắc gỗ Phủ Điền); tiêu chuẩn kiểm định chất liệu gỗ nghệ thuật Phúc Kiến",
      qualityStandardEn: "National Intangible Cultural Heritage (Putian Woodcarving); Fujian fine art timber authentication standards",
      craftSecretVi: "Nổi danh với kỹ pháp Tinh Vi Thấu Điêu (chạm lộng xuyên thấu nhiều tầng không gian) và nghệ thuật tùy hình tạo thế (Nhân Tài Thi Nghệ), giữ nguyên dáng cong tự nhiên của rễ gỗ Long Nhãn hay khối Trầm Hương để chạm từng nếp áo, sợi tóc sống động",
      craftSecretEn: "Celebrated for micro-detailed multi-layered openwork carving and form-following artistry that adapts natural bends of Longan roots or agarwood blocks into lifelike drapery and expressions",
      sensoryOrMaterialSpecVi: "Vân gỗ mịn chắc ánh nâu mật ong ấm áp hoặc tỏa hương trầm dịu nhẹ tự nhiên, chi tiết chạm lộng sâu ba đến năm tầng mà vẫn vững kết cấu, bề mặt đánh sáp ong bóng mờ tự nhiên",
      authenticVsCounterfeitVi: "Tác phẩm thủ công họ Phương có dấu đục tay sắc nét ở các góc khuất sâu, không có vết phay lặp lại của máy CNC; đi kèm chứng thư chất liệu gỗ và chữ ký nghệ nhân cấp tỉnh hoặc quốc gia",
      b2bTradeVi: "Cung ứng tượng nghệ thuật trưng bày bảo tàng, nội thất gỗ chạm cổ điển cho biệt thự và tác phẩm sưu tầm đấu giá nghệ thuật tại Đông Á",
      b2bTradeEn: "Supplies museum-grade wood sculptures, bespoke architectural carvings for heritage estates, and auction-level collectibles across East Asia",
      vietnamAseanLessonVi: "Làng nghề mộc mỹ nghệ Đồng Kỵ (Bắc Ninh), Thiết Úng (Hà Nội) và nghệ nhân điêu khắc trầm hương Khánh Hòa có thể học cách định vị tác phẩm ký tên nghệ nhân và thiết lập hồ sơ pháp lý nguồn gốc gỗ xuất khẩu",
      vietnamAseanLessonEn: "Vietnamese woodcarving hubs such as Dong Ky and Khanh Hoa agarwood artisans can adopt signed-artist provenance records and transparent timber legality documentation",
      flagshipAddressZh: "福建省莆田市荔城区工艺美术城方氏木雕艺术馆",
      visitTipVi: "Ghé Thành phố Mỹ nghệ Công nghệ Phủ Điền để xem trực tiếp nghệ nhân thao tác hàng chục mũi đục nhỏ và tham quan bảo tàng mộc điêu Phủ Điền",
      craftProcessStepsVi: [
        "Tuyển chọn phôi gỗ Long Nhãn, Hoàng Dương hoặc Trầm Hương trồng hợp pháp đã phơi sấy ổn định nhiều năm tránh nứt",
        "Quan sát dáng vân tự nhiên để phác thảo bố cục và đục phá thô định hình khối chính",
        "Thực hiện chạm lộng đa tầng và tỉa tinh chi tiết khuôn mặt, nếp áo bằng bộ đục chuyên dụng hàng chục cỡ",
        "Chà nhám thủ công theo thớ gỗ và đánh bóng bằng sáp ong tự nhiên nhằm bảo vệ bề mặt và tôn vân gỗ"
      ],
      craftProcessStepsEn: [
        "Select legally sourced Longan, boxwood, or cultivated agarwood seasoned for years to prevent cracking",
        "Study natural grain contours to design the composition and rough-carve primary volumes",
        "Execute multi-layer openwork and fine detailing of faces and drapery using dozens of specialized chisels",
        "Hand-sand along the grain and buff with natural beeswax to protect and enrich the timber luster"
      ],
      exportComplianceChecklistVi: [
        "Bắt buộc có giấy phép CITES hợp lệ đối với mọi tác phẩm làm từ gỗ Trầm Hương (Aquilaria) hoặc các loài gỗ nằm trong Phụ lục II",
        "Chứng minh nguồn gốc gỗ trồng hợp pháp và thực hiện hun trùng kiểm dịch thực vật gỗ trước khi xuất khẩu",
        "Đóng khung hộp gỗ có giá đỡ cố định từng điểm tiếp xúc tránh gãy các chi tiết chạm lộng mảnh"
      ],
      exportComplianceChecklistEn: [
        "Obtain valid CITES export permits for any sculpture crafted from agarwood (Aquilaria) or Appendix II timber species",
        "Provide legal plantation-origin documentation and phytosanitary wood-treatment certificates",
        "Mount inside custom-braced wooden crates isolating delicate openwork projections from transit shock"
      ]
    },
    {
      id: "v7-brand-116",
      cat: "culinary",
      mofcomBatch: "Đợt Quốc gia",
      zh: "自贡太源井",
      pinyin: "Zìgòng Tàiyuánjǐng",
      hanViet: "Tự Cống Thái Nguyên Tỉnh",
      nameEn: "Zigong Taiyuanjing Sun-Brewed Soy Sauce",
      foundedYear: 1848,
      dynastyVi: "Nhà Thanh (Đạo Quang thứ 28)",
      dynastyEn: "Qing Dynasty (28th Year of Daoguang)",
      provinceId: "sichuan",
      cityVi: "Tự Cống, Tứ Xuyên",
      signatureProductVi: "Xì dầu phơi sương muối giếng cổ Thái Nguyên Tỉnh (Thái Nguyên Tỉnh Sái Thố & Sái Tương) và tương đậu ủ chum sành",
      signatureProductEn: "Ancient brine-well sun-brewed soy sauce, aged sun-fermented vinegar, and earthenware-crock bean pastes",
      qualityStandardVi: "Tiêu chuẩn Quốc gia GB 2717 cho nước tương lên men tự nhiên; Di sản Văn hóa Phi vật thể cấp tỉnh Tứ Xuyên về kỹ nghệ ủ tương muối giếng Tự Cống",
      qualityStandardEn: "National Standard GB 2717 for naturally brewed soy sauce; Sichuan Provincial Intangible Cultural Heritage for salt-well brewing",
      craftSecretVi: "Sử dụng muối tinh khiết khai thác từ giếng muối khoan sâu hàng trăm mét của Tự Cống kết hợp đậu nành không biến đổi gen, lên men lộ thiên trong hàng nghìn chum sành suốt 365 ngày đón nắng ngày sương đêm (Nhật Sái Dạ Lộ)",
      craftSecretEn: "Combines pure deep-well Zigong brine salt with non-GMO soybeans fermented outdoors in earthenware crocks for 365 days under daytime sun and nighttime dew",
      sensoryOrMaterialSpecVi: "Nước tương sánh nhẹ màu đỏ hổ phách óng ánh, lắc nhẹ tạo viền bọt mịn bám thành chai, hương đậu lên men sâu lắng hòa vị mặn êm giàu đạm tự nhiên",
      authenticVsCounterfeitVi: "Nhãn chai ghi rõ phương pháp lên men tự nhiên (Nhưỡng Tạo Tương Du), chỉ số đạm axit amin (Amino Acid Nitrogen) đạt hạng đặc biệt trên 0,8g/100ml, không dùng chất điều vị hóa học thay thế quá trình ủ chum",
      b2bTradeVi: "Cung ứng gia vị cốt lõi cho nhà hàng ẩm thực Tứ Xuyên cao cấp, chuỗi bán lẻ thực phẩm sạch và xuất khẩu gia vị thủ công sang cộng đồng ẩm thực châu Á",
      b2bTradeEn: "Supplies foundational condiments to fine Sichuan restaurants, clean-label grocers, and specialty Asian culinary importers",
      vietnamAseanLessonVi: "Các nhà thùng nước mắm truyền thống Phú Quốc và tương bần Hưng Yên có thể tham khảo cách truyền thông minh bạch chỉ số đạm tự nhiên, thời gian ủ chum và câu chuyện địa chất muối giếng",
      vietnamAseanLessonEn: "Vietnamese traditional fish-sauce barrels in Phu Quoc and Ban soy-paste makers can adapt its transparent natural-nitrogen labeling and heritage fermentation storytelling",
      flagshipAddressZh: "四川省自贡市贡井区太源井古晒露发酵基地",
      visitTipVi: "Ghé khu bãi chum phơi tương cổ Tự Cống kết hợp tham quan Bảo tàng Lịch sử Nghề Muối Tự Cống (Tây Tần Hội Quán) để hiểu trọn vẹn văn hóa Diêm Đô ngàn năm",
      craftProcessStepsVi: [
        "Tuyển chọn đậu nành hạt tròn không biến đổi gen, ngâm rửa và hấp chín đều kết hợp bột mì rang thơm",
        "Cấy mốc tự nhiên (chế khúc) trong phòng ủ ấm đến khi sợi mốc vàng phát triển đồng đều",
        "Trộn nước muối tinh chế từ giếng muối cổ Tự Cống và đưa vào chum sành lộ thiên ủ phơi nắng sương suốt một năm",
        "Rút lấy nước cốt đầu tiên (Đầu Đạo Tương Du), lọc tinh, thanh trùng nhẹ và đóng chai thủy tinh"
      ],
      craftProcessStepsEn: [
        "Select plump non-GMO soybeans, wash, steam thoroughly, and blend with toasted wheat flour",
        "Inoculate with natural starter culture in temperature-controlled koji rooms until golden mycelia mature",
        "Mix with purified Zigong deep-well brine and ferment outdoors in clay crocks for a full year",
        "Draw the first-press extract, filter cleanly, gently pasteurize, and bottle in glass"
      ],
      exportComplianceChecklistVi: [
        "Đảm bảo hàm lượng 3-MCPD và vi sinh vật đạt giới hạn an toàn nghiêm ngặt của EU/FDA cho nước tương lên men tự nhiên",
        "Đăng ký cơ sở sản xuất thực phẩm xuất khẩu (GACC hoặc tương đương nước đích) và công bố dị ứng đậu nành – lúa mì",
        "Đóng thùng carton vách ngăn chắc chắn cho chai thủy tinh kèm tem niêm phong chống rò rỉ nắp"
      ],
      exportComplianceChecklistEn: [
        "Verify 3-MCPD levels and microbiological metrics meet strict EU and FDA limits for naturally brewed soy sauce",
        "Maintain export food-facility registration and clearly declare soy and wheat allergens on labels",
        "Use partitioned heavy-duty cartons with tamper-evident leakproof glass-bottle closures"
      ]
    },
    {
      id: "v7-brand-117",
      cat: "craft",
      mofcomBatch: "Đợt Quốc gia",
      zh: "宜兴顾景舟紫砂",
      pinyin: "Yíxīng Gùjǐngzhōu Zǐshā",
      hanViet: "Nghi Hưng Cố Cảnh Chu Tử Sa",
      nameEn: "Yixing Gu Jingzhou Zisha Teapot School",
      foundedYear: 1933,
      dynastyVi: "Thời kỳ Dân Quốc đến Hiện đại (trường phái Đại sư Cố Cảnh Chu)",
      dynastyEn: "Republic of China to Modern Era (Master Gu Jingzhou Artistic Lineage)",
      provinceId: "jiangsu",
      cityVi: "Nghi Hưng, Vô Tích, Giang Tô",
      signatureProductVi: "Nghệ thuật ấm trà Tử Sa quang tố (trơn cổ điển) dòng Thạch Biều, Đề Lương và Phỏng Cổ theo chuẩn mực tạo hình Cố Cảnh Chu",
      signatureProductEn: "Classical plain-form Zisha clay teapots (Shibiao, Tiliang, and Fanggu shapes) embodying the Gu Jingzhou master aesthetic",
      qualityStandardVi: "Tiêu chuẩn Quốc gia GB/T 10816 cho gốm Tử Sa Nghi Hưng; Di sản Văn hóa Phi vật thể Quốc gia (Kỹ nghệ chế tác Tử Sa Nghi Hưng)",
      qualityStandardEn: "National Standard GB/T 10816 for Yixing Zisha Stoneware; National Intangible Cultural Heritage",
      craftSecretVi: "Dùng quặng đất Tử Sa nguyên khoáng vùng Hoàng Long Sơn có cấu trúc lỗ khí kép vi mô giữ hương trà mà không thoát nhiệt, tạo hình hoàn toàn bằng kỹ thuật vỗ miếng đất (Phách Đả Thành Hình) không dùng bàn xoay và chuẩn tỷ lệ hình học Tam Điểm Nhất Tuyến (vòi, núm nắp, quai thẳng hàng tuyệt đối)",
      craftSecretEn: "Uses original Huanglongshan Zisha ore with dual-porosity microstructure that breathes while retaining tea aroma, hand-paddled from clay slabs without a potter's wheel to strict geometric alignment",
      sensoryOrMaterialSpecVi: "Bề mặt ấm mộc không tráng men có ánh hạt khoáng dịu mắt (Sa Cảm), rót nước dòng tròn đều ngắt giọt dứt khoát, càng pha trà lâu năm bề mặt càng lên nước bóng mịn như ngọc (Bao Tương)",
      authenticVsCounterfeitVi: "Tác phẩm nguyên bản của đại sư Cố Cảnh Chu hiện chủ yếu lưu giữ tại bảo tàng và bộ sưu tập đấu giá đỉnh cao; các dòng kế thừa chính thống của học trò có giấy chứng nhận truyền thừa, dấu triện rõ nét và chất đất nguyên khoáng không pha hóa chất tạo màu",
      b2bTradeVi: "Cung ứng trà cụ Tử Sa nguyên khoáng cao cấp cho các trà thất quốc tế, bộ sưu tập nghệ thuật có giám định khoáng chất và chương trình giao lưu nghệ nhân trà đạo",
      b2bTradeEn: "Supplies authenticated raw-ore Zisha teaware to international tea houses, curated art collections, and ceramic master exchange programs",
      vietnamAseanLessonVi: "Nghệ nhân gốm đất nung không men Việt Nam (như dòng ấm tử sa Bát Tràng và gốm Phù Lãng) có thể học triết lý tạo hình chuẩn tỷ lệ, minh bạch nguồn đất nguyên khoáng và kiểm định công năng rót trà",
      vietnamAseanLessonEn: "Vietnamese unglazed teaware artisans in Bat Trang and Phu Lang can adopt rigorous geometric proportions, transparent clay-ore provenance, and pour-performance testing",
      flagshipAddressZh: "江苏省无锡市宜兴市丁蜀镇顾景舟故居及紫砂艺术馆",
      visitTipVi: "Nên đến trấn Đinh Thục (thủ phủ Tử Sa) tham quan Bảo tàng Gốm Sứ Nghi Hưng và Nhà lưu niệm Cố Cảnh Chu để học cách phân biệt ba dòng đất chính: Tử Nê, Chu Nê và Đoạn Nê",
      craftProcessStepsVi: [
        "Khai thác quặng đất Tử Sa nguyên khoáng Hoàng Long Sơn, phơi phong hóa tự nhiên, nghiền sàng và ủ đất nhiều năm",
        "Đập đất thành phiến phẳng bằng vồ gỗ (Phách Đả), ghép thành thân ấm hoàn toàn thủ công không dùng bàn xoay",
        "Chế tác riêng vòi, quai và nắp ấm đạt độ khít kín nước, chỉnh sửa bề mặt bằng dao sừng Minh Châm",
        "Nung trong lò ở khoảng 1.160 đến 1.200 độ C, kiểm tra độ kín nắp và dòng rót trước khi hoàn thiện"
      ],
      craftProcessStepsEn: [
        "Mine raw Huanglongshan Zisha ore, weather naturally outdoors, crush, sift, and age the clay for years",
        "Paddle clay into uniform slabs and hand-join the teapot body without wheel-throwing",
        "Form and attach the spout, handle, and precision-fitted lid, burnishing the surface with horn tools",
        "Fire between 1,160 and 1,200 degrees Celsius, then test lid seal and laminar pour performance"
      ],
      exportComplianceChecklistVi: [
        "Cung cấp kết quả kiểm nghiệm độ thôi nhiễm kim loại nặng của đất nguyên khoáng đạt chuẩn tiếp xúc thực phẩm nước nhập khẩu",
        "Khai báo rõ phân loại sản phẩm là trà cụ thủ công đương đại hoặc tác phẩm nghệ nhân có chứng thư xuất xứ",
        "Đóng hộp vải gấm lót mút định hình cố định riêng phần nắp và thân ấm tránh va chạm nứt mẻ"
      ],
      exportComplianceChecklistEn: [
        "Provide raw-clay heavy-metal leach test reports verifying food-contact safety for destination markets",
        "Declare clearly as contemporary artisan teaware backed by workshop or lineage certificates",
        "Pack in brocade-lined foam boxes isolating the lid from the body to prevent rim chipping"
      ]
    },
    {
      id: "v7-brand-118",
      cat: "craft",
      mofcomBatch: "Đợt Quốc gia",
      zh: "湘西苗绣坊",
      pinyin: "Xiāngxī Miáoxiùfāng",
      hanViet: "Tương Tây Miêu Tú Phường",
      nameEn: "Xiangxi Miao Embroidery Workshop",
      foundedYear: 1988,
      dynastyVi: "Thời kỳ Đương đại (bảo tồn di sản thêu Miêu Tương Tây hàng nghìn năm)",
      dynastyEn: "Contemporary Era (preserving millennia-old Western Hunan Miao embroidery traditions)",
      provinceId: "hunan",
      cityVi: "Châu tự trị Tương Tây, Hồ Nam",
      signatureProductVi: "Vải thêu chỉ bạc và thổ cẩm Miêu Tương Tây họa tiết bướm tổ, rồng chim phượng, túi xách và tranh nghệ thuật dân tộc",
      signatureProductEn: "Western Hunan Miao silver-thread embroidered textiles, brocade panels with butterfly-ancestor and phoenix motifs, and artisan bags",
      qualityStandardVi: "Di sản Văn hóa Phi vật thể Quốc gia (Thêu Miêu Tương Tây); tiêu chuẩn hợp tác xã thủ công mỹ nghệ bảo tồn bản sắc dân tộc",
      qualityStandardEn: "National Intangible Cultural Heritage (Xiangxi Miao Embroidery); community craft cooperative authenticity standards",
      craftSecretVi: "Không vẽ phác trước bằng bút mà đếm trực tiếp từng sợi vải dệt tay (Số Sa Tú), kết hợp kỹ thuật thêu tết sợi (Biện Tú), thêu hạt (Đả Tử Tú) và khâu đính lá bạc nhỏ tạo bề mặt nổi ba chiều rực rỡ ghi lại sử thi dân tộc không chữ viết",
      craftSecretEn: "Counts handwoven warp threads without drawn outlines, combining braided stitch, seed-knot embroidery, and tiny silver ornaments to encode oral epics in vivid three-dimensional texture",
      sensoryOrMaterialSpecVi: "Nền vải chàm nhuộm tự nhiên sâu thẳm làm nổi bật chỉ tơ đỏ son, vàng nghệ, xanh ngọc và ánh bạc lấp lánh, đường mũi thêu dày chắc đều tay có độ nổi rõ rệt",
      authenticVsCounterfeitVi: "Thêu tay Miêu Tương Tây thật có mặt trái đường chỉ đi mạch lạc nhưng biến hóa tự nhiên theo từng nghệ nhân, màu chàm thơm nhẹ mùi thảo mộc; hàng thêu máy công nghiệp mặt sau có lớp keo lót trắng và đường chỉ cứng phẳng",
      b2bTradeVi: "Hợp tác với các nhà thiết kế thời trang quốc tế tạo phụ kiện cao cấp, gối tựa trang trí nội thất boutique và sản phẩm quà tặng bền vững hỗ trợ sinh kế nữ nghệ nhân vùng núi",
      b2bTradeEn: "Collaborates with international fashion designers on couture accessories, boutique interior textiles, and fair-trade artisan livelihood collections",
      vietnamAseanLessonVi: "Nghệ thuật thêu thổ cẩm và vẽ sáp ong của người H'Mông tại Hà Giang, Lào Cai có chung cội nguồn mỹ học với thêu Miêu Tương Tây; có thể học mô hình hợp tác xã gắn chuẩn thiết kế quốc tế để nâng giá trị xuất khẩu",
      vietnamAseanLessonEn: "H'Mong embroidery and indigo batik cooperatives in Ha Giang and Lao Cai share deep aesthetic roots and can emulate its designer-collaboration model to reach luxury export channels",
      flagshipAddressZh: "湖南省湘西土家族苗族自治州花垣县十八洞及吉首苗绣传习基地",
      visitTipVi: "Có thể kết hợp thăm cổ trấn Phượng Hoàng và các xưởng truyền nghề tại Cát Thủ hoặc Hoa Viên để xem nghệ nhân nhuộm chàm và thêu tay không cần vẽ mẫu",
      craftProcessStepsVi: [
        "Dệt vải bông hoặc vải lanh thủ công và nhuộm nhiều lượt trong thùng chàm thực vật tự nhiên",
        "Chọn phối màu chỉ tơ theo bố cục truyền thống gắn với truyền thuyết dân tộc Miêu",
        "Thực hiện các mũi thêu đếm sợi, thêu tết nổi và đính chi tiết lá bạc thủ công tỉ mỉ",
        "Lồng khung tranh hoặc cắt may thành túi xách, trang phục và kiểm định độ bền đường chỉ"
      ],
      craftProcessStepsEn: [
        "Handweave cotton or hemp cloth and dip repeatedly in natural plant-indigo dye vats",
        "Select traditional silk-thread palettes reflecting regional Miao cosmological motifs",
        "Execute counted-thread, braided-relief, and silver-accent hand embroidery stitches",
        "Mount as framed textile art or tailor into bags and garments with seam-strength inspection"
      ],
      exportComplianceChecklistVi: [
        "Cung cấp hồ sơ chứng minh nguồn gốc dệt nhuộm tự nhiên an toàn, không chứa hóa chất nhuộm cấm theo chuẩn dệt may EU/US",
        "Khai báo rõ tỷ lệ thành phần vải bông, tơ tằm và phụ kiện kim loại bạc hoặc hợp kim trang trí",
        "Đính kèm thẻ câu chuyện nghệ nhân và chứng nhận thương mại công bằng (nếu có) để gia tăng giá trị tại thị trường phương Tây"
      ],
      exportComplianceChecklistEn: [
        "Document natural indigo dyeing compliance free from restricted synthetic dyes under US/EU textile rules",
        "Declare exact fiber percentages for cotton, silk thread, and decorative metal or silver accents",
        "Include artisan provenance cards and fair-trade documentation to support premium retail positioning"
      ]
    },
    {
      id: "v7-brand-119",
      cat: "craft",
      mofcomBatch: "Đợt Quốc gia",
      zh: "博山人立琉璃",
      pinyin: "Bóshān Rénlì Liúlí",
      hanViet: "Bác Sơn Nhân Lập Lưu Ly",
      nameEn: "Boshan Renli Colored Glaze Art",
      foundedYear: 1998,
      dynastyVi: "Thời kỳ Đương đại (kế thừa lò nung Lưu Ly Bác Sơn từ thời Nguyên – Minh – Thanh)",
      dynastyEn: "Contemporary Era (continuing Boshan furnace colored-glaze craftsmanship since the Yuan, Ming, and Qing dynasties)",
      provinceId: "shandong",
      cityVi: "Bác Sơn, Truy Bác, Sơn Đông",
      signatureProductVi: "Tác phẩm thủy tinh Lưu Ly nung màu tạo hình nóng (Đăng Công), bình lọ vẽ trong (Nội Họa) và bình màu Kê Can Thạch – Kê Du Hoàng",
      signatureProductEn: "Flameworked and kiln-cast colored glaze sculptures, inside-painted glass snuff bottles, and chicken-fat yellow or liver-red glass vases",
      qualityStandardVi: "Di sản Văn hóa Phi vật thể Quốc gia (Kỹ nghệ nung Lưu Ly Bác Sơn); tiêu chuẩn tác phẩm nghệ thuật thủy tinh thủ công Sơn Đông",
      qualityStandardEn: "National Intangible Cultural Heritage (Boshan Liuli Firing Craft); Shandong fine glass art craftsmanship standards",
      craftSecretVi: "Nung chảy khoáng thạch anh với oxit kim loại tự nhiên ở 1.400 độ C tạo các sắc màu trứ danh như Kê Du Hoàng (vàng mỡ gà) và Tùng Thạch Lam; nghệ nhân thao tác nhanh trong vài phút trước miệng lò lửa hở hoặc đúc sáp mất (Thoát Lạp Pháp) rồi ủ hạ nhiệt chậm nhiều ngày tránh nứt ứng suất",
      craftSecretEn: "Melts quartz sand with mineral oxides at 1,400 degrees Celsius to produce signature hues like chicken-fat yellow, shaping molten glass rapidly before open furnaces or via lost-wax kiln casting followed by multi-day annealing",
      sensoryOrMaterialSpecVi: "Chất liệu trong sâu lấp lánh như ngọc thạch, chuyển sắc mềm mại bên trong khối thủy tinh đặc với bọt khí vi mô tự nhiên, cảm giác nặng tay mát lạnh",
      authenticVsCounterfeitVi: "Lưu Ly thủ công Bác Sơn có sắc chuyển sâu trong lõi khối, độ chiết quang trong trẻo và dấu khắc nghệ nhân dưới đáy; hàng nhựa resin giả nhẹ tay, dễ trầy xước và không có độ lạnh của thủy tinh khoáng",
      b2bTradeVi: "Cung ứng tác phẩm trang trí sảnh khách sạn, giải thưởng sự kiện văn hóa quốc tế và quà tặng mỹ nghệ cao cấp cho thị trường châu Á – Âu",
      b2bTradeEn: "Supplies architectural lobby glass sculptures, custom international cultural trophies, and luxury art gifts for Asian and European buyers",
      vietnamAseanLessonVi: "Các xưởng thủy tinh thủ công và mỹ nghệ trang trí Việt Nam có thể học kỹ thuật đúc sáp mất kết hợp kể chuyện sắc màu khoáng vật để chuyển từ đồ gia dụng phổ thông sang nghệ phẩm nội thất giá trị cao",
      vietnamAseanLessonEn: "Vietnamese glassblowing and decorative craft studios can adopt lost-wax glass casting and mineral-color storytelling to move from utility glassware into high-margin art decor",
      flagshipAddressZh: "山东省淄博市博山区颜山公园路人立琉璃艺术博物馆",
      visitTipVi: "Nên ghé Bảo tàng Nghệ thuật Lưu Ly Nhân Lập tại Bác Sơn để xem bộ sưu tập bình Kê Du Hoàng cổ và xem nghệ nhân thổi tạo hình trực tiếp trước lò nung nóng",
      craftProcessStepsVi: [
        "Phối trộn cát thạch anh tinh khiết và khoáng oxit kim loại tạo màu, nung chảy hoàn toàn ở 1.400 độ C",
        "Tạo hình trực tiếp bằng ống thổi, kìm sắt trước miệng lò hoặc đổ khuôn thạch cao theo kỹ thuật đúc sáp mất",
        "Đưa tác phẩm vào lò ủ (Thối Hỏa) hạ nhiệt từ từ trong nhiều ngày để triệt tiêu ứng suất nhiệt bên trong",
        "Mài cắt, đánh bóng thủy lực từng diện khối và kiểm định độ trong cùng sắc chuyển dưới ánh sáng chuẩn"
      ],
      craftProcessStepsEn: [
        "Blend pure quartz sand with mineral colorant oxides and melt completely at 1,400 degrees Celsius",
        "Shape hot glass directly at the furnace with blowpipes and shears or kiln-cast using lost-wax molds",
        "Transfer pieces into annealing kilns for multi-day controlled cooling to relieve internal thermal stress",
        "Cold-grind, water-polish facets, and inspect optical clarity and color transitions under gallery lighting"
      ],
      exportComplianceChecklistVi: [
        "Khai báo đúng mã HS nhóm đồ trang trí thủy tinh nghệ thuật (HS 7013) kèm chứng nhận xuất xứ thủ công",
        "Đóng hộp chống sốc nhiều lớp bằng mút đàn hồi mật độ cao và thùng gỗ cho các khối Lưu Ly nặng dễ sứt cạnh",
        "Cung cấp thông số không chứa chì vượt ngưỡng nếu xuất khẩu các dòng ly chén Lưu Ly dùng trong ẩm thực"
      ],
      exportComplianceChecklistEn: [
        "Classify under decorative art glassware HS 7013 accompanied by artisan origin documentation",
        "Use multi-layer high-density foam cushioning and reinforced crating for heavy cast glass pieces",
        "Provide lead-release safety compliance reports for any functional drinkware or tableware lines"
      ]
    },
    {
      id: "v7-brand-120",
      cat: "craft",
      mofcomBatch: "Đợt Quốc gia",
      zh: "徽州胡开文墨厂",
      pinyin: "Huīzhōu Húkāiwén Mòchǎng",
      hanViet: "Huy Châu Hồ Khai Văn Mặc Xưởng",
      nameEn: "Huizhou Hu Kaiwen Ink Factory",
      foundedYear: 1765,
      dynastyVi: "Nhà Thanh (Càn Long thứ 30)",
      dynastyEn: "Qing Dynasty (30th Year of Qianlong)",
      provinceId: "anhui",
      cityVi: "Đồn Khê, Hoàng Sơn, An Huy",
      signatureProductVi: "Thỏi mực Huy Mặc Tùng Yên (khói thông Hoàng Sơn) và Du Yên (khói dầu trẩu) khảm vàng lá chạm họa tiết sơn thủy",
      signatureProductEn: "Hui pine-soot and tung-oil soot inksticks embossed with landscape reliefs and gilded detailing",
      qualityStandardVi: "Tiêu chuẩn Địa lý Quốc gia GB/T 19688 cho Huy Mặc; Di sản Văn hóa Phi vật thể Quốc gia (Kỹ nghệ chế tác Huy Mặc, 2006)",
      qualityStandardEn: "National GI Standard GB/T 19688 for Hui Ink; National Intangible Cultural Heritage (2006)",
      craftSecretVi: "Đốt gỗ thông cổ thụ Hoàng Sơn hoặc dầu trẩu nguyên chất thu muội siêu mịn, trộn với keo da động vật tinh luyện, xạ hương và băng phiến tự nhiên rồi giã tay hàng vạn chày (Thiên Chử Vạn Đả), ép khuôn gỗ lê chạm khắc và phơi râm nhiều tháng đến nhiều năm",
      craftSecretEn: "Collects ultra-fine soot from burning Huangshan pine or pure tung oil, blends it with refined animal glue and natural aromatics, pounds it thousands of times, presses into carved pearwood molds, and shade-dries for months to years",
      sensoryOrMaterialSpecVi: "Thỏi mực đen bóng mượt như sơn mài, gõ nhẹ nghe tiếng trong rắn, mài trên nghiên Thiệp Nghiễn ra nước mực mịn sánh không vón cặn, viết lên giấy Tuyên tỏa hương thơm thanh nhã và bền màu hàng trăm năm (Lạc Chỉ Như Tất, Vạn Tải Tồn Chân)",
      authenticVsCounterfeitVi: "Mực Hồ Khai Văn chính hiệu tại Đồn Khê có đường chạm nổi khuôn gỗ lê sắc nét, mùi hương thảo mộc thanh nhẹ tự nhiên không nồng mùi hóa chất, mặt đáy hoặc thân đóng rõ dòng chữ Huy Châu Hồ Khai Văn Chế",
      b2bTradeVi: "Cung ứng văn phòng tứ bảo cao cấp cho thư pháp gia, học viện mỹ thuật Nhật Bản – Hàn Quốc và bộ quà tặng ngoại giao văn hóa Huy Châu",
      b2bTradeEn: "Supplies fine calligraphy inksticks to master calligraphers, Japanese and Korean art academies, and Huizhou cultural gift collections",
      vietnamAseanLessonVi: "Cộng đồng thư pháp Hán – Nôm và giấy Dó cổ truyền Việt Nam có thể kết hợp nghiên cứu độ tương thích mực Tùng Yên trên giấy Dó và học cách xây dựng bộ quà tặng văn phòng di sản có bảo tàng trải nghiệm",
      vietnamAseanLessonEn: "Vietnamese Han-Nom calligraphy circles and Do paper artisans can explore pine-soot ink compatibility on Do paper and develop museum-backed heritage stationery gift sets",
      flagshipAddressZh: "安徽省黄山市屯溪区延安路徽州胡开文墨厂",
      visitTipVi: "Nên tham quan trực tiếp xưởng sản xuất truyền thống tại Đồn Khê để xem công đoạn giã phôi mực, ép khuôn gỗ lê cổ và tô vàng thủ công lên hoa văn nổi",
      craftProcessStepsVi: [
        "Đốt dầu trẩu hoặc gỗ thông vùng Hoàng Sơn trong buồng kín thu lớp muội mịn nhất (Luyện Yên)",
        "Trộn muội với keo da nấu tinh và hương liệu tự nhiên, giã tay hàng nghìn nhịp cho khối mực dẻo mịn đồng nhất",
        "Cân định lượng từng thỏi, ép vào khuôn gỗ lê chạm khắc tinh xảo và để định hình",
        "Phơi râm trong phòng thoáng kiểm soát độ ẩm từ vài tháng đến nhiều năm, đánh bóng bề mặt và tô vàng hoa văn"
      ],
      craftProcessStepsEn: [
        "Burn Huangshan pine or pure tung oil in controlled chambers to harvest ultra-fine carbon soot",
        "Knead soot with clarified animal glue and natural aromatics, pounding thousands of strokes into a dense paste",
        "Weigh individual portions and press firmly into intricately carved pearwood molds",
        "Shade-dry in humidity-controlled racks for months to years before burnishing and hand-gilding reliefs"
      ],
      exportComplianceChecklistVi: [
        "Khai báo rõ thành phần keo tự nhiên và đảm bảo không sử dụng xạ hương động vật hoang dã thuộc diện cấm CITES (dùng hương liệu thực vật hoặc tổng hợp hợp pháp cho lô xuất khẩu)",
        "Đóng hộp gấm chống va đập và kiểm soát độ ẩm tránh nứt thỏi mực khi chuyển vùng khí hậu khô lạnh",
        "Phân loại mã HS nhóm mực vẽ và thư pháp nghệ thuật (HS 3215) kèm bản dữ liệu an toàn vật liệu (MSDS) tiêu chuẩn"
      ],
      exportComplianceChecklistEn: [
        "Verify absence of CITES-restricted wild animal musk, using legal botanical or synthetic aromatics for international export lines",
        "Pack in padded brocade boxes with humidity buffers to prevent inkstick cracking in dry climates",
        "Classify under artistic calligraphy ink HS 3215 accompanied by standard Material Safety Data Sheets (MSDS)"
      ]
    }
  ];

  var gi12 = [
    {
      id: "gi-v7-01",
      zh: "增城荔枝",
      pinyin: "Zēngchéng Lìzhī",
      nameVi: "Vải Lệ Chi Tăng Thành Quảng Đông",
      nameEn: "Zengcheng Lychee (Guangdong)",
      provinceId: "guangdong",
      euAgreementYear: 2021,
      gbStandardCode: "DB4401/T 298-2024",
      protectionRuleVi: "Bảo hộ vùng trồng giới hạn trong địa giới hành chính quận Tăng Thành, thành phố Quảng Châu theo Thông báo số 125 năm 2012 của cơ quan giám sát chất lượng quốc gia; quy định chặt mật độ vườn cây không quá 400 cây/ha và tỷ lệ quả hạt lép (tiêu hạch).",
      protectionRuleEn: "Geographical protection is strictly confined to Zengcheng District, Guangzhou under Announcement No. 125 (2012), mandating orchard density at or below 400 trees per hectare and strict sensory thresholds for aborted-seed (jiaohe) fruit.",
      vnEvftaCounterpartVi: "Tương đồng mô hình bảo hộ Chỉ dẫn Địa lý Vải thiều Lục Ngạn (Bắc Giang) theo khuôn khổ EVFTA và đăng ký bảo hộ tại Nhật Bản.",
      vnEvftaCounterpartEn: "Comparable to Vietnam's Luc Ngan Lychee (Bac Giang) protected under the EVFTA Geographical Indication framework and registered in Japan.",
      terroirAndCraftVi: "Đất đồi phù sa pha cát giàu kali ven sông Tăng Giang kết hợp khí hậu cận nhiệt đới gió mùa nắng ấm tạo ra các giống danh tiếng như Quế Lục (Guazhi), Tiên Tiến Phụng và Nhu Mễ Từ với cùi dày giòn, hương mật dịu và hạt nhỏ.",
      terroirAndCraftEn: "Potassium-rich sandy alluvial hills along the Zeng River and a humid subtropical monsoon microclimate produce prized cultivars such as Gualu, Xianjinfeng, and Nuomici, known for crisp translucent arils, honeyed aroma, and tiny seeds.",
      customsHsAndAuditVi: "Mã HS 0810.90 (vải tươi). Kiểm tra bắt buộc gồm mã số vùng trồng và cơ sở đóng gói đăng ký GACC, kiểm dịch thực vật chống ruồi đục quả, giới hạn dư lượng thuốc bảo vệ thực vật theo GB 2763 và chuỗi lạnh 3-5 độ C.",
      customsHsAndAuditEn: "HS Code 0810.90 (fresh lychee). Mandatory audit covers registered orchard and packing-house codes, phytosanitary inspection against fruit flies, pesticide MRL compliance under GB 2763, and 3-5 C cold-chain verification."
    },
    {
      id: "gi-v7-02",
      zh: "陆海青烟药果",
      pinyin: "Lùhǎi Qīngyān Yàoguǒ",
      nameVi: "Thanh Yên Dược Quả Lục Hải Chiết Giang",
      nameEn: "Luhai Qingyan Heritage Citron Fruit (Zhejiang)",
      provinceId: "zhejiang",
      euAgreementYear: 0,
      gbStandardCode: "GB/T 17924",
      protectionRuleVi: "Bảo hộ thuần di sản nông sản đặc hữu vùng đồi ven biển Chiết Giang theo khung yêu cầu chung về sản phẩm chỉ dẫn địa lý; phân loại hoàn toàn là nông sản hương liệu và nguyên liệu mứt trà truyền thống, không sử dụng cho mục đích kê đơn hay chẩn đoán y tế.",
      protectionRuleEn: "Protected strictly as a regional agricultural heritage citrus cultivar of Zhejiang's coastal hills under the general Chinese GI framework; classified solely as an aromatic culinary and tea-infusion fruit with no clinical or prescriptive claims.",
      vnEvftaCounterpartVi: "Đối sánh với các dòng quả có múi hương liệu truyền thống của Việt Nam như Bưởi Phúc Trạch (Hà Tĩnh) và Quất hương vùng đồng bằng Bắc Bộ trong định hướng xây dựng GI nông sản chế biến.",
      vnEvftaCounterpartEn: "Parallels Vietnam's heritage aromatic citrus crops such as Phuc Trach Pomelo (Ha Tinh) in building Geographical Indication value chains for specialty processed fruit.",
      terroirAndCraftVi: "Độ ẩm sương mù ven biển và nền đất chua nhẹ pH 5.5-6.5 giúp vỏ quả tích tụ hàm lượng tinh dầu thơm tự nhiên cao; nghệ nhân địa phương thái lát phơi râm hoặc sên đường phèn làm nguyên liệu pha trà hoa quả và mứt cổ truyền.",
      terroirAndCraftEn: "Coastal mist humidity and slightly acidic soil (pH 5.5-6.5) concentrate natural citrus peel aromatics; local artisans shade-dry slices or candy them with rock sugar for traditional fruit teas and confectionery.",
      customsHsAndAuditVi: "Mã HS 0805.90 (quả tươi họ cam quýt khác) hoặc 0813.40 (lát quả sấy khô thực phẩm). Cần tờ khai nguồn gốc thực vật, kiểm nghiệm kim loại nặng theo GB 2762 và ghi nhãn thực phẩm thông thường theo GB 7718.",
      customsHsAndAuditEn: "HS Code 0805.90 (fresh specialty citrus) or 0813.40 (dried culinary fruit slices). Requires botanical origin declaration, heavy-metal screening under GB 2762, and standard food labeling under GB 7718."
    },
    {
      id: "gi-v7-03",
      zh: "高邮鸭蛋",
      pinyin: "Gāoyóu Yādàn",
      nameVi: "Trứng Muối Cao Bưu Giang Tô",
      nameEn: "Gaoyou Salted Duck Egg (Jiangsu)",
      provinceId: "jiangsu",
      euAgreementYear: 2021,
      gbStandardCode: "GB/T 19050-2008",
      protectionRuleVi: "Sản phẩm chỉ dẫn địa lý quốc gia theo tiêu chuẩn GB/T 19050-2008 và nằm trong danh mục bảo hộ song phương Trung-Âu; yêu cầu sử dụng trứng vịt giống Cao Bưu Ma Áp nuôi thả tự nhiên quanh hệ thống hồ Cao Bưu.",
      protectionRuleEn: "National GI product governed by GB/T 19050-2008 and recognized under the EU-China GI framework; requires eggs laid by indigenous Gaoyou Shelducks raised around Lake Gaoyou.",
      vnEvftaCounterpartVi: "Liên hệ so sánh với nghề làm trứng vịt muối truyền thống vùng đồng bằng sông Cửu Long (Bạc Liêu, Sóc Trăng) dùng trong nhân bánh trung thu xuất khẩu.",
      vnEvftaCounterpartEn: "Comparable to Mekong Delta salted duck egg craft in Bac Lieu and Soc Trang, widely used in export-grade mooncake fillings.",
      terroirAndCraftVi: "Hệ sinh thái tôm tép và thủy sinh giàu carotenoid tại hồ Cao Bưu tạo nên lòng đỏ vịt có tỷ lệ lòng đỏ đôi cao và màu cam đỏ đậm; kỹ thuật ủ đất sét pha muối biển hoặc nước muối bão hòa 30-40 ngày giúp lòng đỏ tứa dầu mịn cát đặc trưng.",
      terroirAndCraftEn: "Carotenoid-rich aquatic forage in Lake Gaoyou yields vivid reddish-orange yolks with a notable double-yolk rate; 30-40 days of brine or salted clay curing develops the signature sandy texture and glistening oil release.",
      customsHsAndAuditVi: "Mã HS 0407.90 (trứng gia cầm bảo quản/muối). Kiểm toán xuất nhập khẩu yêu cầu giấy chứng nhận kiểm dịch động vật, cơ sở chế biến đăng ký GACC, kiểm soát độ mặn, hàm lượng chì và vi sinh theo tiêu chuẩn trứng chế biến.",
      customsHsAndAuditEn: "HS Code 0407.90 (preserved or salted poultry eggs). Cross-border audit mandates veterinary health certification, GACC facility registration, salinity verification, and lead/microbial testing."
    },
    {
      id: "gi-v7-04",
      zh: "德化白瓷",
      pinyin: "Déhuà Báicí",
      nameVi: "Sứ Trắng Ngà Đức Hóa Phúc Kiến",
      nameEn: "Dehua Blanc de Chine White Porcelain (Fujian)",
      provinceId: "fujian",
      euAgreementYear: 2021,
      gbStandardCode: "GB/T 21998-2008",
      protectionRuleVi: "Bảo hộ chỉ dẫn địa lý sản phẩm thủ công phi nông nghiệp theo GB/T 21998-2008, giới hạn vùng khai thác cao lanh tinh khiết và nung đốt tại huyện Đức Hóa, thành phố Tuyền Châu, với độ trắng và độ thấu quang đạt chuẩn quốc gia.",
      protectionRuleEn: "Protected as a non-agricultural craft GI under GB/T 21998-2008, restricting kaolin sourcing and kiln firing to Dehua County, Quanzhou, with strict national benchmarks for whiteness and translucency.",
      vnEvftaCounterpartVi: "Tương đồng mô hình xây dựng thương hiệu làng nghề di sản gốm sứ Bát Tràng (Hà Nội) và gốm Chu Đậu (Hải Dương) gắn với du lịch thủ công và xuất khẩu.",
      vnEvftaCounterpartEn: "Mirrors Vietnam's heritage ceramic branding efforts for Bat Trang (Hanoi) and Chu Dau (Hai Duong) porcelain linking craft tourism with export markets.",
      terroirAndCraftVi: "Quặng cao lanh Đức Hóa có hàm lượng oxit sắt cực thấp (dưới 0.5%) và hàm lượng oxit kali cao; khi nung khử ở 1310-1350 độ C tạo ra chất sứ trắng ngà mịn như mỡ cừu (Trư Du Bạch), từng nổi danh tại châu Âu với tên gọi Blanc de Chine.",
      terroirAndCraftEn: "Local kaolin features ultra-low iron oxide (below 0.5%) and high potassium oxide; reduction firing at 1310-1350 C produces a warm ivory-white luster known in Europe as Blanc de Chine.",
      customsHsAndAuditVi: "Mã HS 6911.10 (đồ bàn ăn bằng sứ) hoặc 6913.10 (tượng nghệ thuật bằng sứ). Kiểm tra hải quan tập trung vào giấy chứng nhận thôi nhiễm chì và cadimi đối với bộ đồ trà/ăn uống tiếp xúc thực phẩm (FDA/EU 1935/2004).",
      customsHsAndAuditEn: "HS Code 6911.10 (porcelain tableware) or 6913.10 (porcelain statuettes). Customs audits emphasize lead and cadmium leach testing certificates for food-contact tea ware under EU 1935/2004 and FDA rules."
    },
    {
      id: "gi-v7-05",
      zh: "四会沙糖桔",
      pinyin: "Sìhuì Shātángjú",
      nameVi: "Quýt Đường Sa Đường Quất Tứ Hội Quảng Đông",
      nameEn: "Sihui Shatangju Mandarin (Guangdong)",
      provinceId: "guangdong",
      euAgreementYear: 0,
      gbStandardCode: "DB4412/T 15-2019",
      protectionRuleVi: "Chỉ dẫn địa lý bảo hộ cho vùng trồng thuộc thành phố cấp huyện Tứ Hội (Triệu Khánh, Quảng Đông), quy định hàm lượng chất rắn hòa tan (Brix) tối thiểu 12% và độ vỏ mỏng giòn dễ bóc đặc trưng.",
      protectionRuleEn: "Regional GI protecting orchards in Sihui City (Zhaoqing, Guangdong), enforcing a minimum soluble solids level of 12 Brix and thin, crisp, easy-peel rind characteristics.",
      vnEvftaCounterpartVi: "Đối chiếu trực tiếp với Chỉ dẫn Địa lý Cam Cao Phong (Hòa Bình) và Quýt Bắc Sơn (Lạng Sơn) trong kiểm soát độ ngọt Brix và tem truy xuất nguồn gốc chống giả mạo.",
      vnEvftaCounterpartEn: "Directly comparable to Vietnam's Cao Phong Orange (Hoa Binh) and Bac Son Mandarin (Lang Son) GIs in Brix grading and anti-counterfeit traceability tagging.",
      terroirAndCraftVi: "Thung lũng sông Tuy Giang có biên độ nhiệt ngày đêm rõ vào cuối thu, kết hợp đất phù sa pha cát thoát nước tốt giúp múi quýt mọng nước, ít xơ, ngọt thanh không gắt và chín rộ đúng dịp cận Tết Nguyên Đán.",
      terroirAndCraftEn: "Clear autumn diurnal temperature swings in the Suijiang River valley and well-drained sandy loam yield juicy, low-fiber segments with clean sweetness peaking just before Lunar New Year.",
      customsHsAndAuditVi: "Mã HS 0805.21 (quýt tươi). Hàng xuất khẩu biên mậu và chính ngạch bắt buộc có chứng thư kiểm dịch thực vật không nhiễm rệp sáp, xử lý lạnh tiêu diệt ấu trùng và mã vùng trồng truy xuất QR.",
      customsHsAndAuditEn: "HS Code 0805.21 (fresh mandarins). Formal cross-border shipments require phytosanitary certification free of scale insects, cold-treatment logs, and QR-linked orchard traceability."
    },
    {
      id: "gi-v7-06",
      zh: "长白山猴头菇",
      pinyin: "Chángbáishān Hóutóugū",
      nameVi: "Nấm Đầu Khỉ Trường Bạch Sơn Cát Lâm",
      nameEn: "Changbai Mountain Lion's Mane Mushroom (Jilin)",
      provinceId: "jilin",
      euAgreementYear: 0,
      gbStandardCode: "DB22/T 2059-2014",
      protectionRuleVi: "Bảo hộ nguồn gốc vùng sinh thái rừng lá rộng núi Trường Bạch (tỉnh Cát Lâm) đối với sản phẩm nấm thực phẩm cao cấp; chỉ dùng trong ẩm thực và chế biến thực phẩm, không gắn nhãn chỉ định điều trị lâm sàng.",
      protectionRuleEn: "Protects culinary mushroom production originating from the broadleaf forest belt of Changbai Mountain (Jilin); positioned strictly as a gourmet edible fungus without clinical or therapeutic claims.",
      vnEvftaCounterpartVi: "Tương đồng định hướng bảo hộ nông sản rừng bản địa của Việt Nam như Nấm hương rừng Sa Pa (Lào Cai) và Măng khô Tuyên Quang.",
      vnEvftaCounterpartEn: "Aligns with Vietnam's regional forest-food GI initiatives such as Sa Pa Forest Shiitake (Lao Cai) and Tuyen Quang dried bamboo shoots.",
      terroirAndCraftVi: "Khí hậu ôn đới lạnh vùng núi lửa Trường Bạch với mùn gỗ sồi Mông Cổ (Quercus mongolica) và nguồn nước suối khoáng sạch tạo nên tai nấm trắng ngà, sợi gai dài đều, vị ngọt umami đậm khi hầm canh hoặc xào chay cung đình.",
      terroirAndCraftEn: "Cool volcanic mountain air, Mongolian oak (Quercus mongolica) substrate, and clean spring water produce creamy-white fruiting bodies with dense spines prized for umami richness in broths and vegetarian banquets.",
      customsHsAndAuditVi: "Mã HS 0712.39 (nấm ăn sấy khô). Kiểm định hải quan gồm độ ẩm dưới 13%, kiểm nghiệm dư lượng lưu huỳnh điôxít (SO2) bằng 0 hoặc dưới ngưỡng GB 2760 và chứng nhận vệ sinh an toàn thực phẩm.",
      customsHsAndAuditEn: "HS Code 0712.39 (dried edible mushrooms). Customs verification requires moisture below 13%, sulfur dioxide (SO2) compliance under GB 2760, and official food safety certification."
    },
    {
      id: "gi-v7-07",
      zh: "南充丝绸",
      pinyin: "Nánchōng Sīchóu",
      nameVi: "Tơ Tằm Nam Sung Tứ Xuyên",
      nameEn: "Nanchong Silk (Sichuan)",
      provinceId: "sichuan",
      euAgreementYear: 2025,
      gbStandardCode: "DB5113/T 18-2021",
      protectionRuleVi: "Bảo hộ sản phẩm tơ tằm và vải lụa sản xuất tại lưu vực sông Gia Lăng (Nam Sung, Tứ Xuyên), kiểm soát cấp độ sợi tơ sống từ 4A đến 6A và tỷ lệ tơ tằm tự nhiên 100% không pha sợi tổng hợp.",
      protectionRuleEn: "Protects raw silk yarn and woven fabrics produced in the Jialing River basin (Nanchong, Sichuan), enforcing 4A-6A raw silk grading and verified 100% mulberry silk fiber purity.",
      vnEvftaCounterpartVi: "Tương đương mô hình bảo hộ di sản dệt lụa tơ tằm Bảo Lộc (Lâm Đồng) và Lụa Vạn Phúc (Hà Nội) trong nâng chuẩn sợi tơ xuất khẩu sang thị trường EU.",
      vnEvftaCounterpartEn: "Parallels Vietnam's Bao Loc Silk (Lam Dong) and Van Phuc Silk (Hanoi) heritage initiatives aimed at meeting EU traceability and fiber-purity standards.",
      terroirAndCraftVi: "Đất phù sa sông Gia Lăng giàu khoáng chất nuôi dâu lá dày kết hợp nguồn nước mềm ít ion canxi giúp ươm kén mượt, tạo ra sợi tơ mảnh đều, độ bóng dịu và bền màu cao, kế thừa truyền thống Con đường Tơ lụa Phương Nam.",
      terroirAndCraftEn: "Mineral-rich Jialing alluvial soils sustain nutrient-dense mulberry groves, while soft low-calcium reeling water yields lustrous, uniform filaments rooted in the Southern Silk Road tradition.",
      customsHsAndAuditVi: "Mã HS 5002.00 (tơ sống chưa xe) hoặc 5007.20 (vải dệt thoi từ tơ tằm). Kiểm tra quy tắc xuất xứ (PSR) theo RCEP/ACFTA, chứng nhận không chứa thuốc nhuộm azo bị cấm (OEKO-TEX/GB 18401).",
      customsHsAndAuditEn: "HS Code 5002.00 (raw silk) or 5007.20 (woven silk fabrics). Audit checks Product-Specific Rules of origin under RCEP/ACFTA and azo-dye safety compliance under GB 18401 and OEKO-TEX."
    },
    {
      id: "gi-v7-08",
      zh: "南京盐水鸭",
      pinyin: "Nánjīng Yánshuǐyā",
      nameVi: "Vịt Muối Nam Kinh Giang Tô",
      nameEn: "Nanjing Salted Duck (Jiangsu)",
      provinceId: "jiangsu",
      euAgreementYear: 2021,
      gbStandardCode: "DB3201/T 1124-2022",
      protectionRuleVi: "Nằm trong đợt 1 gồm 100 Chỉ dẫn Địa lý của Hiệp định GI Trung-Âu có hiệu lực từ tháng 3/2021; quy trình chế biến bắt buộc thực hiện tại Nam Kinh với nước muối ủ lâu năm (lão lỗ) và kiểm soát nhiệt độ hầm chín không đun sôi sùng sục.",
      protectionRuleEn: "Included in the first batch of 100 Chinese GIs protected under the EU-China GI Agreement (effective March 2021); production must occur in Nanjing using aged master brine and controlled low-simmer poaching.",
      vnEvftaCounterpartVi: "Gần gũi về kỹ thuật chế biến gia cầm đặc sản địa phương với Vịt quay Lạng Sơn và Gà đồi Yên Thế (Bắc Giang) khi chuẩn hóa đóng gói hút chân không xuất khẩu.",
      vnEvftaCounterpartEn: "Comparable in regional poultry culinary heritage to Lang Son Roast Duck and Yen The Hill Chicken (Bac Giang) when standardizing vacuum-packed distribution.",
      terroirAndCraftVi: "Gồm bốn công đoạn cổ truyền: xát muối sao hoa tiêu khô, ngâm nước muối lão lỗ, treo phơi se da và luộc om liu riu ở 85-90 độ C. Vịt đạt chuẩn có da trắng ngà mịn, thịt hồng nhạt thơm hương hoa quế mùa thu (Quế Hoa Áp), béo mà không ngấy.",
      terroirAndCraftEn: "Follows four classical steps: dry-rubbing with toasted Sichuan peppercorn salt, master-brine immersion, air-drying, and gentle 85-90 C poaching. Peak autumn batches ('Osmanthus Duck') yield ivory skin and tender, non-greasy meat.",
      customsHsAndAuditVi: "Mã HS 1602.39 (thịt gia cầm chế biến/đóng gói kín). Yêu cầu nghiêm ngặt về vùng an toàn dịch cúm gia cầm, chứng nhận xử lý nhiệt tiệt trùng thương mại, mã nhà máy xuất khẩu được nước nhập khẩu phê duyệt.",
      customsHsAndAuditEn: "HS Code 1602.39 (prepared or preserved poultry meat). Requires avian-influenza-free zone certification, verified thermal sterilization logs, and importing-country plant approval."
    },
    {
      id: "gi-v7-09",
      zh: "赣南脐橙",
      pinyin: "Gànnán Qíchéng",
      nameVi: "Cam Rốn Cám Châu Giang Tây",
      nameEn: "Gannan Navel Orange (Jiangxi)",
      provinceId: "jiangxi",
      euAgreementYear: 2021,
      gbStandardCode: "GB/T 20355-2006",
      protectionRuleVi: "Bảo hộ quốc gia theo GB/T 20355-2006 và thuộc danh mục Hiệp định GI Trung-Âu; vùng bảo hộ bao gồm 18 quận huyện thuộc thành phố Cám Châu (Giang Tây) với hệ thống tem truy xuất chống giả do Hiệp hội Cam Rốn Cám Nam cấp phát hàng năm.",
      protectionRuleEn: "Protected nationally under GB/T 20355-2006 and listed in the EU-China GI Agreement; covers 18 counties of Ganzhou (Jiangxi) with annual anti-counterfeit traceability certificates issued by the Gannan Navel Orange Association.",
      vnEvftaCounterpartVi: "Tương đồng mô hình quản trị chỉ dẫn địa lý Cam Vinh (Nghệ An) và Cam sành Hàm Yên (Tuyên Quang) về kiểm soát thời điểm thu hoạch thống nhất trên toàn vùng.",
      vnEvftaCounterpartEn: "Comparable to Vietnam's Vinh Orange (Nghe An) and Ham Yen Mandarin (Tuyen Quang) GIs in coordinating synchronized regional harvest dates.",
      terroirAndCraftVi: "Vùng đất đỏ đồi núi giàu nguyên tố đất hiếm tự nhiên ở miền nam Giang Tây kết hợp nguồn ánh sáng dồi dào giúp quả cam to đều, vỏ màu cam đỏ rực rỡ, độ giòn mọng cao, tỷ lệ đường/axit cân bằng hoàn hảo.",
      terroirAndCraftEn: "Red mountain soils naturally rich in trace minerals across southern Jiangxi combined with abundant sunshine yield large, deeply colored oranges with crisp, juicy flesh and a balanced sugar-to-acid ratio.",
      customsHsAndAuditVi: "Mã HS 0805.10 (cam tươi). Kiểm toán hải quan yêu cầu giấy kiểm dịch thực vật không có bệnh loét cam quýt (Citrus canker), chứng thư xuất xứ C/O Form E (ACFTA) và kiểm tra dư lượng chất bảo quản vỏ quả.",
      customsHsAndAuditEn: "HS Code 0805.10 (fresh oranges). Customs compliance mandates phytosanitary certification free of citrus canker, ACFTA Form E origin documentation, and post-harvest wax/fungicide residue checks."
    },
    {
      id: "gi-v7-10",
      zh: "防城肉桂",
      pinyin: "Fángchéng Ròuguì",
      nameVi: "Quế Hương Phòng Thành Cảng Quảng Tây",
      nameEn: "Fangcheng Cassia Cinnamon (Guangxi)",
      provinceId: "guangxi",
      euAgreementYear: 2025,
      gbStandardCode: "DB45/T 1543-2017",
      protectionRuleVi: "Bảo hộ chỉ dẫn địa lý đối với vỏ quế và tinh dầu quế khai thác tại vùng núi Thập Vạn Đại Sơn thuộc Phòng Thành Cảng (Quảng Tây), yêu cầu hàm lượng tinh dầu dễ bay hơi cao phục vụ ngành gia vị và hương liệu thực phẩm, không kê đơn y khoa.",
      protectionRuleEn: "Protects cassia bark and essential oil harvested in the Shiwan Dashan mountains of Fangchenggang (Guangxi), mandating high volatile-oil standards for culinary spice and flavor industries with no medical claims.",
      vnEvftaCounterpartVi: "Đối sánh trực tiếp với Quế Văn Yên (Yên Bái) và Quế Trà My (Quảng Nam) của Việt Nam, cùng nằm trên dải sinh thái quế nhiệt đới giáp ranh Bắc Bộ - Quảng Tây.",
      vnEvftaCounterpartEn: "Directly parallels Vietnam's Van Yen Cinnamon (Yen Bai) and Tra My Cinnamon (Quang Nam), sharing the contiguous tropical cassia belt spanning northern Vietnam and Guangxi.",
      terroirAndCraftVi: "Rừng đồi đất vàng phát triển trên đá sa thạch gần vịnh Bắc Bộ có lượng mưa trên 2.000 mm/năm giúp vỏ quế dày, giàu cinnamaldehyde thơm ngọt cay ấm; người trồng bóc vỏ vào hai vụ xuân và thu rồi phơi nắng tự nhiên giữ nguyên độ cong cuộn.",
      terroirAndCraftEn: "Sandstone-derived yellow forest soils near the Gulf of Tonkin receiving over 2,000 mm of annual rainfall produce thick bark rich in sweet-spicy cinnamaldehyde, harvested in spring and autumn and sun-cured into tight quills.",
      customsHsAndAuditVi: "Mã HS 0906.11/0906.19 (quế chưa nghiền) và 3301.29 (tinh dầu quế). Kiểm tra hàm lượng coumarin theo quy định an toàn thực phẩm EU, độ ẩm dưới 14%, kiểm nghiệm aflatoxin và mã vùng nguyên liệu.",
      customsHsAndAuditEn: "HS Code 0906.11/0906.19 (unground cassia bark) and 3301.29 (cassia essential oil). Audits verify EU coumarin limits, moisture below 14%, aflatoxin screening, and origin traceability."
    },
    {
      id: "gi-v7-11",
      zh: "香云纱",
      pinyin: "Xiāngyúnshā",
      nameVi: "Lụa Bùn Hương Vân Sa Thuận Đức Quảng Đông",
      nameEn: "Shunde Xiangyunsha Gambiered Canton Gauze (Guangdong)",
      provinceId: "guangdong",
      euAgreementYear: 2025,
      gbStandardCode: "DB4406/T 12-2021",
      protectionRuleVi: "Bảo hộ kép về Chỉ dẫn Địa lý và Di sản Văn hóa Phi vật thể Quốc gia cho kỹ thuật nhuộm phủ bùn sông tại khu vực Luân Giáo (Thuận Đức, Phật Sơn), bắt buộc dùng 100% lụa tơ tằm nhuộm củ nâu (Thự Lang) và phơi trên bãi cỏ nắng tự nhiên.",
      protectionRuleEn: "Dual-protected as a Geographical Indication and National Intangible Cultural Heritage for river-mud dyeing in Lunjiao (Shunde, Foshan), requiring 100% silk dyed with Dioscorea cirrhosa yam tannin and sun-cured on grass fields.",
      vnEvftaCounterpartVi: "Tương đồng sâu sắc về kỹ thuật nhuộm tự nhiên với Lãnh Mỹ A Tân Châu (An Giang) nhuộm trái mặc nưa của Việt Nam, đều tạo nên bề mặt đen bóng ánh đồng bền bỉ theo thời gian.",
      vnEvftaCounterpartEn: "Closely mirrors Vietnam's Lanh My A silk of Tan Chau (An Giang) dyed with Diospyros mollis fruit, both producing a luminous, durable black-bronze sheen through natural tannin-iron reactions.",
      terroirAndCraftVi: "Trải qua hơn 30 công đoạn kéo dài nhiều tháng ('tam tẩy cửu chử thập bát sái'): nhúng nước củ nâu giàu tanin nhiều lần rồi phủ lớp bùn sông Châu Giang giàu ion sắt lên một mặt vải để phản ứng tạo màu đen ánh kim, còn mặt sau giữ màu nâu cánh gián ấm.",
      terroirAndCraftEn: "Involves over 30 manual stages ('three washes, nine boilings, eighteen sunnings'): repeated immersion in tannin-rich dye yam extract followed by coating one side with iron-rich Pearl River silt, creating a metallic-black face and russet-brown reverse.",
      customsHsAndAuditVi: "Mã HS 5007.20 (vải lụa tơ tằm nhuộm đặc biệt). Kiểm toán xuất khẩu kiểm tra chứng nhận nhuộm thực vật tự nhiên không hóa chất độc hại, độ bền màu ma sát (ISO 105-X12) và chứng nhận xuất xứ làng nghề Thuận Đức.",
      customsHsAndAuditEn: "HS Code 5007.20 (specialty dyed silk fabric). Export audits verify natural botanical-dye compliance, colorfastness to rubbing (ISO 105-X12), and Shunde craft-origin certification."
    },
    {
      id: "gi-v7-12",
      zh: "吐鲁番葡萄干",
      pinyin: "Tǔlǔfān Pútáogān",
      nameVi: "Nho Khô Thổ Lỗ Phồn Tân Cương",
      nameEn: "Turpan Raisins (Xinjiang)",
      provinceId: "xinjiang",
      euAgreementYear: 2021,
      gbStandardCode: "GB/T 19586-2008",
      protectionRuleVi: "Bảo hộ quốc gia theo GB/T 19586-2008 và nằm trong đợt 1 Hiệp định GI Trung-Âu; vùng địa lý giới hạn tại lưu vực Thổ Lỗ Phồn, huyện Thiện Thiện và Thác Khắc Tốn, quy định phương pháp sấy gió tự nhiên trong nhà phơi gạch lỗ (Âm Phòng).",
      protectionRuleEn: "Protected nationally under GB/T 19586-2008 and in the first batch of the EU-China GI Agreement; restricted to Turpan, Shanshan, and Toksun counties using natural hot-wind shade drying in perforated adobe drying houses (Yin Fang).",
      vnEvftaCounterpartVi: "Liên hệ so sánh với Nho Ninh Thuận của Việt Nam trong việc tận dụng tiểu khí hậu bán khô hạn nắng cao để phát triển nông sản sấy khô có chỉ dẫn địa lý.",
      vnEvftaCounterpartEn: "Comparable to Vietnam's Ninh Thuan Grapes in leveraging semi-arid, high-insolation microclimates to build GI-certified dried fruit products.",
      terroirAndCraftVi: "Lòng chảo Thổ Lỗ Phồn thấp hơn mực nước biển tới 154 m, được tưới bằng hệ thống giếng ngầm Khảm Nhi Tỉnh (Karez) dẫn nước tuyết tan Thiên Sơn; nho không hạt phơi gió nóng khô trong nhà gạch lỗ 30-45 ngày giữ nguyên sắc xanh ngọc bích và vị ngọt tự nhiên.",
      terroirAndCraftEn: "Irrigated by ancient Karez underground snowmelt channels from the Tianshan Mountains in a basin dipping 154 m below sea level, seedless grapes shade-dry in hot desert winds for 30-45 days to retain emerald-green color and concentrated sweetness.",
      customsHsAndAuditVi: "Mã HS 0806.20 (nho khô). Kiểm tra hải quan tập trung vào giới hạn độc tố nấm mốc Ochratoxin A (theo quy chuẩn EU), độ ẩm 14-16%, không chứa chất tạo màu nhân tạo và kiểm dịch thực vật chống mọt kho.",
      customsHsAndAuditEn: "HS Code 0806.20 (dried grapes/raisins). Customs audits focus on Ochratoxin A limits (EU food safety compliance), 14-16% moisture content, absence of artificial dyes, and phytosanitary storage-pest clearance."
    }
  ];

  var museumStudios3d6 = [
    {
      id: "studio-3d-19",
      sceneNum: 19,
      titleZh: "午门与抗震斗拱木构实验室",
      titleVi: "Cổng Ngọ Môn & Hệ Kết Cấu Gỗ Đấu Củng Chịu Động Đất (Chuẩn Digital Gugong)",
      titleEn: "Meridian Gate & Seismic Dougong Timber Bracket Lab (Digital Gugong Standard)",
      dynasty: "Minh – Thanh (1420)",
      dimensionsSpec: "Chiều cao tổng thể 37.95 m; bệ thành hình chữ U (Ngũ Phượng Lâu) dài 125 m; 5 cổng vòm đối xứng theo trục Thần Đạo.",
      architecturalPrincipleVi: "Bố cục bệ gạch nện hình chữ U vươn hai cánh như phượng hoàng mở cánh tạo thế uy nghiêm đón trục trung tâm Bắc Kinh. Hệ mộng gỗ Đấu Củng (Dougong) nhiều tầng liên kết hoàn toàn không dùng đinh sắt đóng vai trò bộ giảm chấn đàn hồi, phân tán lực cắt ngang khi địa chấn xảy ra.",
      architecturalPrincipleEn: "A U-shaped masonry bastion crowned by the Five-Phoenix Pavilions frames the imperial central axis. Multi-tiered interlocking Dougong timber brackets joined without iron nails act as ductile seismic dampers, dissipating lateral earthquake shear forces.",
      cameraHotspots: [
        {
          labelVi: "Khớp Mộng Đấu Củng Giảm Chấn",
          labelEn: "Seismic Dougong Bracket Joint",
          descriptionVi: "Mặt cắt bóc tách 3D cho thấy khối Đấu (đế vuông) và Củng (tay đòn cong) trượt nhẹ trên nhau dưới tải trọng động đất để hấp thụ năng lượng mà không gãy cột gỗ Nam Mộc.",
          descriptionEn: "Exploded 3D cutaway showing square Dou blocks and curved Gong arms sliding slightly under seismic loads to absorb energy without fracturing the Phoebe zhennan columns."
        },
        {
          labelVi: "Ngũ Phượng Lâu & Mái Lưu Ly Hoàng",
          labelEn: "Five-Phoenix Pavilions & Imperial Glazed Roof",
          descriptionVi: "Năm tòa lầu mái trùng diêm lợp ngói lưu ly vàng biểu trưng cho quyền uy hoàng gia, nối liền nhau qua hành lang che nắng mưa trên đỉnh tường thành.",
          descriptionEn: "Five interconnected double-eave pavilions clad in imperial yellow glazed tiles symbolize sovereign authority along the elevated rampart walkway."
        },
        {
          labelVi: "Trục Tam Môn & Cổng Ngự Đạo",
          labelEn: "Central Meridian Archway & Imperial Axis",
          descriptionVi: "Phân tầng lối đi nghiêm ngặt thời phong kiến: cửa chính giữa chỉ dành cho Hoàng đế, trạng nguyên khi vinh quy và kiệu Hoàng hậu ngày đại hôn.",
          descriptionEn: "Strict ceremonial circulation hierarchy: the central portal was reserved exclusively for the Emperor, newly crowned top scholars, and the Empress's wedding palanquin."
        }
      ]
    },
    {
      id: "studio-3d-20",
      sceneNum: 20,
      titleZh: "拙政园太湖石与六角亭水景",
      titleVi: "Đá Thái Hồ & Đình Lục Giác Vườn Chuyết Chính Tô Châu",
      titleEn: "Taihu Scholar Rocks & Hexagonal Pavilion at Humble Administrator's Garden",
      dynasty: "Minh (1509)",
      dimensionsSpec: "Diện tích toàn vườn 5.2 ha (mặt nước chiếm 3/5); đỉnh đá Thái Hồ cao 3.8 m; đình lục giác mái cong góc hếch 28 độ.",
      architecturalPrincipleVi: "Ứng dụng triết lý 'tuy do nhân tác, uyển tự thiên khai' (tuy người làm ra nhưng tự nhiên như trời tạo) thông qua kỹ thuật Tá Cảnh (mượn bóng Tháp Bắc Tự ngoài vườn), Khuông Cảnh (đóng khung tầm nhìn qua cửa sổ hoa văn) và tỷ lệ mặt nước soi bóng điều hòa vi khí hậu.",
      architecturalPrincipleEn: "Embodies the classical ideal of 'crafted by human hands yet appearing naturally formed' through borrowed scenery (Jiejing framing the distant North Temple Pagoda), framed views via lattice windows, and reflective ponds that cool summer air.",
      cameraHotspots: [
        {
          labelVi: "Đá Thái Hồ Tứ Tuyệt (Sấu – Trứu – Lậu – Thấu)",
          labelEn: "Taihu Limestone Four Aesthetics (Slender, Wrinkled, Perforated, Open)",
          descriptionVi: "Khối đá vôi bị sóng hồ Thái Hồ bào mòn tự nhiên tạo hệ lỗ rỗng xuyên thấu, đóng vai trò điểm nhấn điêu khắc thu nhỏ của núi non thiên nhiên ngay giữa sân vườn.",
          descriptionEn: "Water-eroded Taihu limestone sculpted by millennia of lake currents into porous cavities, serving as a microcosmic mountain centerpiece."
        },
        {
          labelVi: "Đình Lục Giác Mái Hếch Giang Nam",
          labelEn: "Jiangnan Upturned-Eave Hexagonal Pavilion",
          descriptionVi: "Kết cấu cột mảnh không tường bao giúp đón gió bốn phía từ mặt hồ sen, đồng thời góc mái vút cong nhẹ làm giảm cảm giác nặng nề của ngói âm dương đen xám.",
          descriptionEn: "Slender open-sided timber columns welcome cross-breezes from the lotus pond, while delicately upturned eaves lighten the silhouette of dark Jiangnan roof tiles."
        },
        {
          labelVi: "Hành Lang Uốn Lượn & Cửa Sổ Hoa Văn",
          labelEn: "Winding Covered Corridor & Lattice Windows",
          descriptionVi: "Tuyến hành lang gấp khúc dẫn dắt người xem thay đổi góc nhìn liên tục theo nguyên lý 'bộ di cảnh dị' (mỗi bước chân mở ra một bức họa mới).",
          descriptionEn: "A zigzagging timber corridor shifts sightlines with every step, executing the classical garden principle of 'changing views at every pace'."
        }
      ]
    },
    {
      id: "studio-3d-21",
      sceneNum: 21,
      titleZh: "敦煌莫高窟崖面与唐代飞天壁画",
      titleVi: "Mặt Đứng Hang Đá Mạc Cao Đôn Hoàng & Bích Họa Phi Thiên Thời Đường",
      titleEn: "Dunhuang Mogao Cliff Facade & Tang Dynasty Feitian Murals",
      dynasty: "Bắc Ngụy – Tùy – Đường (366–907)",
      dimensionsSpec: "Vách đá cuội kết dài 1.680 m; 735 hang động (492 hang còn bích họa); tháp gỗ Cửu Tầng Lâu (Hang 96) cao 45 m.",
      architecturalPrincipleVi: "Đục sâu vào vách trầm tích cuội kết khô hạn ven ốc đảo sông Đãng Tuyền giúp duy trì độ ẩm ổn định tự nhiên cho lớp vữa bùn trộn rơm và bích họa khoáng thạch suốt hơn 1.000 năm. Kiến trúc mặt đứng Cửu Tầng Lâu ốp gỗ che chắn trực tiếp cho tượng Đại Phật cao 35.5 m bên trong.",
      architecturalPrincipleEn: "Excavated into arid conglomerate cliffs beside the Daquan River oasis, the caves maintain stable low humidity that preserves straw-clay plaster and mineral murals for over a millennium, fronted by the nine-story timber facade sheltering the 35.5 m Maitreya statue.",
      cameraHotspots: [
        {
          labelVi: "Cửu Tầng Lâu (Hang Số 96)",
          labelEn: "Nine-Story Timber Facade (Cave 96)",
          descriptionVi: "Mặt tiền tháp gỗ mái ngói lưu ly xanh lục áp sát vách đá hoàng thổ, kết hợp cầu thang gỗ nhiều tầng giúp bảo vệ pho tượng Phật Di Lặc khổng lồ khỏi bão cát sa mạc.",
          descriptionEn: "A nine-tiered timber pavilion with emerald-glazed eaves anchored against the ochre cliff face, shielding the monumental seated Buddha from desert sandstorms."
        },
        {
          labelVi: "Bích Họa Phi Thiên & Dải Lụa Thời Đường",
          labelEn: "Tang Feitian Celestial Musicians & Flowing Ribbons",
          descriptionVi: "Không dùng đôi cánh như thiên thần phương Tây, hình tượng Phi Thiên thời Thịnh Đường bay lượn hoàn toàn nhờ những đường cong dải lụa mềm mại vẽ bằng Thạch Thanh, Thạch Lục và Chu Sa.",
          descriptionEn: "Wingless unlike Western angels, High Tang Feitian figures achieve weightless flight purely through sinuous silk ribbons painted in azurite, malachite, and cinnabar."
        },
        {
          labelVi: "Mái Vòm Tảo Tỉnh (Trần Giếng Hoa)",
          labelEn: "Caisson Ceiling (Zaojing) Mandala Geometry",
          descriptionVi: "Trần hang hình chóp cụt vẽ hoa sen trung tâm bao quanh bởi nhiều lớp hoa văn hình học và nghìn Phật, tạo chiều sâu thị giác hướng thượng trong không gian ánh sáng yếu.",
          descriptionEn: "Truncated pyramidal ceiling centering on a lotus medallion ringed by geometric bands and Thousand-Buddha motifs, expanding vertical depth in dim cave light."
        }
      ]
    },
    {
      id: "studio-3d-22",
      sceneNum: 22,
      titleZh: "秦始皇兵马俑一号坑军阵",
      titleVi: "Đội Hình Hầm Số 1 Binh Mã Dũng Tần Thủy Hoàng Tây An",
      titleEn: "Terracotta Army Pit 1 Battle Formation (Xi'an)",
      dynasty: "Tần (246–208 TCN)",
      dimensionsSpec: "Hầm số 1 dài 230 m, rộng 62 m, sâu 5 m (14.260 m2); ước tính hơn 6.000 tượng chiến binh và ngựa đất nung kích thước người thật (cao 1.75–1.95 m).",
      architecturalPrincipleVi: "Cấu trúc hầm ngầm chia thành 11 hành lang song song ngăn bằng tường đất nện chịu lực, lát gạch nung dưới sàn và lợp dầm gỗ thông phía trên. Đội hình bố trí theo binh pháp cổ đại gồm 3 hàng cung thủ tiền phong không mang giáp nặng, theo sau là 38 cột bộ binh và chiến xa bọc giáp quay mặt về hướng Đông.",
      architecturalPrincipleEn: "An underground subterranean hall divided into 11 parallel corridors by rammed-earth partition walls, paved with kiln bricks and originally roofed with pine beams. The eastward-facing formation deploys three vanguard rows of unarmored archers ahead of 38 columns of armored infantry and chariots.",
      cameraHotspots: [
        {
          labelVi: "Đội Tiền Phong Cung Thủ & Tường Đất Nện",
          labelEn: "Vanguard Archers & Rammed-Earth Corridors",
          descriptionVi: "Ba hàng 204 binh sĩ đi đầu mặc chiến bào nhẹ để cơ động nhanh, đứng giữa các hành lang tường đất đắp nén chặt ngăn sập mái hầm.",
          descriptionEn: "Three vanguard ranks of 204 lightly clad crossbowmen positioned for rapid maneuver between structural rammed-earth partition walls."
        },
        {
          labelVi: "Tiêu Chuẩn Hóa Mô-đun & Cá Nhân Hóa Khuôn Mặt",
          labelEn: "Modular Assembly & Individualized Portraiture",
          descriptionVi: "Thân, tay, chân được sản xuất hàng loạt bằng khuôn đất sét chuẩn hóa có khắc tên thợ chịu trách nhiệm chất lượng, nhưng khuôn mặt, râu và búi tóc được nặn tay khác biệt cho từng người.",
          descriptionEn: "Torsos and limbs were mass-produced from standardized molds stamped with artisan quality-control marks, while facial features, mustaches, and topknots were individually hand-sculpted."
        },
        {
          labelVi: "Dấu Tích Sắc Tố Cổ & Vũ Khí Đồng Mạ Crôm",
          labelEn: "Ancient Polychrome Pigments & Bronze Weaponry",
          descriptionVi: "Bản phục dựng 3D hiển thị lớp sơn mài lót và màu sắc rực rỡ nguyên thủy (đỏ chu sa, tím Hán nhân tạo BaCuSi2O6, xanh đá) cùng mũi tên đồng có lớp oxit bảo vệ chống gỉ.",
          descriptionEn: "3D reconstruction reveals the original lacquer undercoat and vibrant pigments (cinnabar red, synthetic Han purple BaCuSi2O6, mineral blue) alongside corrosion-resistant bronze arrowheads."
        }
      ]
    },
    {
      id: "studio-3d-23",
      sceneNum: 23,
      titleZh: "汴京虹桥无钉木拱结构",
      titleVi: "Cầu Vòm Gỗ Ghép Mộng Không Đinh Hồng Kiều Biện Kinh (Thanh Minh Thượng Hà Đồ)",
      titleEn: "Bianjing Timber-Arch Rainbow Bridge (Along the River During the Qingming Festival)",
      dynasty: "Bắc Tống (khoảng 1030–1120)",
      dimensionsSpec: "Nhịp cầu chính vượt sông Biện khoảng 20–24 m không có trụ giữa; mặt cầu rộng 8 m; độ dốc vòm cong giúp thuyền chở lương thực đi qua dễ dàng.",
      architecturalPrincipleVi: "Kỳ tích cơ học kết cấu thời Bắc Tống: sử dụng hai hệ thống dầm gỗ đan xen hình chữ bát (3 đoạn dầm hệ A khóa chéo với 5 đoạn dầm hệ B) liên kết thuần túy bằng mộng chốt và dây buộc. Càng chịu tải trọng lớn từ người và xe cộ phía trên, các thanh gỗ càng ép chặt vào nhau tạo độ ổn định tự khóa.",
      architecturalPrincipleEn: "A Northern Song structural marvel employing two interwoven polygonal timber arch systems (a three-segment system interlocked with a five-segment system) joined purely by mortises and lashings. Greater live loads on the deck compress the joints tighter, creating self-locking arch stability.",
      cameraHotspots: [
        {
          labelVi: "Hệ Dầm Chéo Tự Khóa Không Trụ Giữa",
          labelEn: "Self-Locking Interwoven Arch Ribs",
          descriptionVi: "Loại bỏ hoàn toàn trụ cầu giữa lòng sông giúp dòng thuyền vận tải lương thực trên sông Biện không bị va đập vào mùa nước lũ.",
          descriptionEn: "Eliminating central river piers allowed heavy grain barges on the Bian River to pass unobstructed even during seasonal floods."
        },
        {
          labelVi: "Khoảnh Khắc Hạ Cột Buồm Dưới Gầm Cầu",
          labelEn: "Mast-Lowering Navigation Scene",
          descriptionVi: "Tái hiện đúng kịch tính trong kiệt tác của Trương Trạch Đoan khi thủy thủ vội hạ cột buồm và dân chúng trên lan can cầu ném dây hỗ trợ kéo thuyền.",
          descriptionEn: "Recreates the dramatic focal moment from Zhang Zeduan's scroll as boatmen frantically lower their mast while onlookers lean over the railings to toss guide ropes."
        },
        {
          labelVi: "Mặt Cầu Phố Thị & Sạp Hàng Bắc Tống",
          labelEn: "Song Urban Bridge Deck & Market Stalls",
          descriptionVi: "Hai bên lan can cầu sơn son bố trí ô che và quầy bán hàng thủ công, phản ánh bước chuyển lịch sử từ chế độ phường thị khép kín thời Đường sang phố thương mại mở thời Tống.",
          descriptionEn: "Vermilion balustrades lined with parasols and vendor stalls illustrate the Song Dynasty shift from walled Tang wards to open commercial street life."
        }
      ]
    },
    {
      id: "studio-3d-24",
      sceneNum: 24,
      titleZh: "明代郑和九桅水密隔舱宝船",
      titleVi: "Bảo Thuyền 9 Cột Buồm Khoang Kín Nước Hạm Đội Trịnh Hòa Thời Minh",
      titleEn: "Ming Dynasty Zheng He Nine-Masted Watertight Treasure Ship",
      dynasty: "Minh (1405–1433)",
      dimensionsSpec: "Theo Minh Sử ghi chép mẫu lớn nhất dài 44 trượng (khảo cổ đóng tàu Long Giang ước tính chiều dài thực tế ổn định thủy động học khoảng 60–75 m cho tàu viễn dương), gồm 9 cột buồm cánh dơi và 13 khoang kín nước.",
      architecturalPrincipleVi: "Tích hợp ba phát minh hàng hải đỉnh cao Trung Hoa cổ đại: vách ngăn khoang kín nước (Thủy Mật Cách Thương) giúp tàu không chìm khi thủng 1-2 khoang; bánh lái cân bằng gắn trục giữa (Đà) có thể nâng hạ tùy độ sâu; và hệ buồm cánh dơi có nan tre cứng dễ điều chỉnh góc đón gió ngược.",
      architecturalPrincipleEn: "Integrates three landmark Chinese maritime inventions: watertight bulkheads that maintain buoyancy if one or two compartments flood; a balanced axial sternpost rudder adjustable for shallow coasts; and battened lug-sails capable of efficient tacking against headwinds.",
      cameraHotspots: [
        {
          labelVi: "Hệ Thống 13 Khoang Kín Nước (Thủy Mật Cách Thương)",
          labelEn: "Thirteen Watertight Bulkheads",
          descriptionVi: "Mặt cắt thân tàu cho thấy các vách gỗ kiên cố trám dầu trẩu và vôi vỏ sò vừa tăng độ cứng khung sườn vừa cô lập sự cố rò rỉ nước biển khi vượt Ấn Độ Dương.",
          descriptionEn: "Hull cutaway reveals heavy timber bulkheads caulked with tung oil and lime putty, simultaneously stiffening the hull and isolating leaks during Indian Ocean crossings."
        },
        {
          labelVi: "Hệ 9 Cột Buồm Nan Tre Cánh Dơi",
          labelEn: "Nine-Masted Battened Lug-Sail Rig",
          descriptionVi: "Các thanh tre ngang chạy dọc cánh buồm giúp thủy thủ thu thả nhanh bằng ròng rọc ngay cả khi có bão, đồng thời giữ bề mặt buồm phẳng đón lực đẩy gió tối ưu.",
          descriptionEn: "Horizontal bamboo battens allow crews to reef sails rapidly via pulleys in squalls while maintaining an aerodynamically flat sail profile."
        },
        {
          labelVi: "Bánh Lái Cân Bằng & Hải Đồ Quá Dương Khiên Tinh",
          labelEn: "Balanced Stern Rudder & Star-Altitude Navigation",
          descriptionVi: "Khu vực đài chỉ huy đuôi tàu trưng bày la bàn nước từ tính 24 phương vị và bảng đo sao Khiên Tinh Bản dùng định vị vĩ độ trên tuyến hải trình Tây Dương.",
          descriptionEn: "The stern command deck displays the 24-azimuth wet magnetic compass and Qianxingban star-altitude boards used to calculate latitude along the Western Ocean routes."
        }
      ]
    }
  ];

  var traditionalPigments8 = [
    {
      id: "pigment-01",
      hex: "#C43228",
      nameZh: "朱砂",
      pinyin: "Zhūshā",
      nameVi: "Chu Sa (Đỏ Son Đế Vương)",
      nameEn: "Cinnabar Vermilion",
      mineralSourceVi: "Quặng khoáng vật thủy ngân sunfua tự nhiên (HgS) khai thác chủ yếu tại vùng Thần Châu (Hồ Nam) và Quý Châu, được nghiền thủy phi nhiều lần để lọc lấy hạt đỏ tươi mịn nhất.",
      mineralSourceEn: "Natural mercuric sulfide ore (HgS) historically mined in Chenzhou (Hunan) and Guizhou, refined through multistage water levigation to isolate the brightest crimson particles.",
      peakDynastyVi: "Hán – Đường – Minh – Thanh (sắc màu biểu tượng của tường thành Cố Cung, ấn triện kim thạch và sơn mài cung đình).",
      peakDynastyEn: "Han, Tang, Ming, and Qing dynasties (defining Forbidden City walls, carved seal paste, and imperial lacquerware).",
      iconicMasterworkVi: "Tường đỏ và cột gỗ điện Thái Hòa (Cố Cung Bắc Kinh); tranh lụa Chân Dung Tướng Sĩ và bích họa thời Đường tại hang Mạc Cao.",
      iconicMasterworkEn: "Crimson walls and columns of the Hall of Supreme Harmony (Forbidden City); Tang Dynasty murals at the Mogao Caves."
    },
    {
      id: "pigment-02",
      hex: "#2A4D7A",
      nameZh: "青花钴蓝",
      pinyin: "Qīnghuā Gǔlán",
      nameVi: "Thanh Hoa Cô-ban (Lam Sứ Cảnh Đức Trấn)",
      nameEn: "Cobalt Blue (Qinghua Porcelain Blue)",
      mineralSourceVi: "Quặng oxit cô-ban (CoO) gồm dòng Tô Ma Ly Thanh nhập khẩu từ vùng Ba Tư qua Con đường Tơ lụa (hàm lượng sắt cao tạo chấm kết tinh đen) và dòng Hồi Thanh, Chiết Liệu nội địa Trung Quốc.",
      mineralSourceEn: "Cobalt oxide ores (CoO), including imported Persian 'Sumali' cobalt (high iron content creating dark crystallized flecks) and domestic Zhe and Hui cobalt minerals.",
      peakDynastyVi: "Nguyên – Minh (triều Vĩnh Lạc và Tuyên Đức) – Thanh (Khang Hy).",
      peakDynastyEn: "Yuan Dynasty, Ming Dynasty (Yongle and Xuande reigns), and Qing Dynasty (Kangxi reign).",
      iconicMasterworkVi: "Cặp bình gốm Thanh Hoa vẽ rồng mây niên hiệu Chí Chính năm thứ 11 (Bình David, 1351) và bộ sứ Thanh Hoa Cảnh Đức Trấn xuất khẩu thế kỷ XV.",
      iconicMasterworkEn: "The David Vases dated 1351 (Yuan Dynasty) and fifteenth-century Jingdezhen blue-and-white export porcelain."
    },
    {
      id: "pigment-03",
      hex: "#1E5485",
      nameZh: "石青",
      pinyin: "Shíqīng",
      nameVi: "Thạch Thanh (Lam Khoáng Azurite)",
      nameEn: "Mineral Azurite Blue (Shiqing)",
      mineralSourceVi: "Khoáng vật cacbonat đồng bazơ tự nhiên Azurite (2CuCO3·Cu(OH)2) hình thành tại vùng oxy hóa của mỏ đồng, phân làm 4 cấp độ từ Đầu Thanh (hạt thô màu lam sẫm) đến Tứ Thanh (hạt siêu mịn màu lam sáng).",
      mineralSourceEn: "Natural basic copper carbonate ore Azurite (2CuCO3·Cu(OH)2) formed in oxidized copper deposits, graded into four particle levels from coarse deep 'First Blue' to ultra-fine pale 'Fourth Blue'.",
      peakDynastyVi: "Tùy – Đường – Bắc Tống (trường phái Thanh Lục Sơn Thủy).",
      peakDynastyEn: "Sui, Tang, and Northern Song dynasties (Blue-Green Landscape Painting tradition).",
      iconicMasterworkVi: "Thiên Lý Giang Sơn Đồ của Vương Hy Mạnh (Bắc Tống, 1113) và Minh Hoàng Hạnh Thục Đồ (thời Đường).",
      iconicMasterworkEn: "'A Thousand Li of Rivers and Mountains' by Wang Ximeng (Northern Song, 1113) and 'Emperor Minghuang's Journey to Shu'."
    },
    {
      id: "pigment-04",
      hex: "#1B6E5C",
      nameZh: "石绿",
      pinyin: "Shílǜ",
      nameVi: "Thạch Lục (Lục Khổng Tước Malachite)",
      nameEn: "Mineral Malachite Green (Shilu)",
      mineralSourceVi: "Quặng Khổng Tước Thạch Malachite (CuCO3·Cu(OH)2) thường cộng sinh với Azurite, qua quá trình đập nhỏ, rửa keo và lắng phân tầng tạo độ che phủ cao và ánh khoáng rực rỡ bền vững hàng thiên niên kỷ.",
      mineralSourceEn: "Malachite ore (CuCO3·Cu(OH)2), often co-occurring with azurite, crushed and levigated with animal glue to produce opaque, luminous greens that remain unfaded for millennia.",
      peakDynastyVi: "Đường – Bắc Tống – Minh (cặp màu song hành kinh điển cùng Thạch Thanh trên tranh lụa và dầm mái cung điện).",
      peakDynastyEn: "Tang, Northern Song, and Ming dynasties (paired classically with azurite on silk scrolls and imperial timber beams).",
      iconicMasterworkVi: "Thiên Lý Giang Sơn Đồ (Vương Hy Mạnh) và hệ tranh trang trí Hòa Tỷ Thái Họa trên dầm gỗ điện Thái Hòa.",
      iconicMasterworkEn: "'A Thousand Li of Rivers and Mountains' (Wang Ximeng) and Hexi polychrome painted beams inside the Forbidden City."
    },
    {
      id: "pigment-05",
      hex: "#D49B27",
      nameZh: "藤黄",
      pinyin: "Ténghuáng",
      nameVi: "Đằng Hoàng (Vàng Nhựa Cây Garcinia)",
      nameEn: "Gamboge Yellow (Tenghuang)",
      mineralSourceVi: "Nhựa cây tự nhiên chiết xuất từ thân cây Đằng Hoàng (Garcinia hanburyi) mọc tại vùng nhiệt đới Đông Nam Á (Campuchia, Việt Nam, Thái Lan) nhập vào Trung Hoa qua thương mại đường biển, tạo màu vàng trong suốt tinh khiết.",
      mineralSourceEn: "Natural gum resin tapped from Garcinia hanburyi trees native to Southeast Asia (Cambodia, Vietnam, Thailand) and imported via maritime trade, yielding a pure transparent golden yellow.",
      peakDynastyVi: "Tống – Nguyên – Minh – Thanh (dùng vẽ tranh Công Bút Hoa Điểu và pha cùng Hoa Thanh tạo màu xanh thảo mộc).",
      peakDynastyEn: "Song, Yuan, Ming, and Qing dynasties (essential for Gongbi bird-and-flower painting and blending with indigo for foliage greens).",
      iconicMasterworkVi: "Tranh Hoa Điểu Công Bút của Hoàng Thuyên và Triệu Cát (Tống Huy Tông) cùng các bức tranh thêu và vẽ quạt thời Minh-Thanh.",
      iconicMasterworkEn: "Imperial Gongbi bird-and-flower scrolls by Huang Quan and Emperor Huizong, as well as Ming-Qing silk fans."
    },
    {
      id: "pigment-06",
      hex: "#1E2022",
      nameZh: "松烟墨",
      pinyin: "Sōngyānmò",
      nameVi: "Mực Tùng Yên (Muội Thông Cổ Huy Châu)",
      nameEn: "Pine Soot Ink (Songyanmo)",
      mineralSourceVi: "Muội than mịn thu từ quá trình đốt gỗ thông cổ thụ vùng Hoàng Sơn kết hợp keo da trâu/hươu, xạ hương và băng phiến, giã hàng vạn chày rồi ép khuôn gỗ khắc hoa văn thành thỏi mực đen trầm không bóng lóa.",
      mineralSourceEn: "Fine carbon soot collected from slow-burning old-growth Huangshan pine, kneaded with hide glue, borneol, and aromatics through tens of thousands of poundings into matte, deep-black inksticks.",
      peakDynastyVi: "Đường – Ngũ Đại (Huy Mặc Lý Đình Khuê) – Minh – Thanh (Mực Tùng Yên Huy Châu).",
      peakDynastyEn: "Tang, Five Dynasties (Li Tinggui's Huizhou ink), Ming, and Qing dynasties.",
      iconicMasterworkVi: "Phú Xuân Sơn Cư Đồ (Hoàng Công Vọng, thời Nguyên) và các bản thư pháp Hành Thư – Thảo Thư trên giấy Tuyên Thành.",
      iconicMasterworkEn: "'Dwelling in the Fuchun Mountains' (Huang Gongwang, Yuan Dynasty) and classical calligraphy on Xuan paper."
    },
    {
      id: "pigment-07",
      hex: "#F3EDE0",
      nameZh: "蛤粉",
      pinyin: "Géfěn",
      nameVi: "Hồ Phấn Vỏ Sò (Trắng Ngà Thiên Nhiên)",
      nameEn: "Clam-Shell White (Gefen)",
      mineralSourceVi: "Bột canxi cacbonat (CaCO3) điều chế từ vỏ sò biển và vỏ hàu được phơi mưa nắng nhiều năm cho hết mặn, sau đó nung nhẹ và nghiền mịn trong nước; ưu việt hơn phấn chì (Duyên Phấn) vì không bị oxy hóa hóa đen theo thời gian.",
      mineralSourceEn: "Calcium carbonate (CaCO3) powder made from weathered marine clam and oyster shells, lightly calcined and finely ground; prized over lead white because it never darkens through sulfidation.",
      peakDynastyVi: "Tống – Nguyên – Minh – Thanh (thay thế dần phấn chì trong hội họa lụa và tranh chân dung cung đình).",
      peakDynastyEn: "Song, Yuan, Ming, and Qing dynasties (gradually replacing lead white in silk paintings and court portraiture).",
      iconicMasterworkVi: "Xuất Thủy Phù Dung Đồ (thời Nam Tống) và các tác phẩm tranh Mỹ Nhân – Hoa Mẫu Đơn thời Minh-Thanh.",
      iconicMasterworkEn: "'Hibiscus Emerging from Water' (Southern Song) and Ming-Qing court peony and figure paintings."
    },
    {
      id: "pigment-08",
      hex: "#A8384B",
      nameZh: "胭脂红",
      pinyin: "Yānzhīhóng",
      nameVi: "Yên Chi Hồng (Đỏ Hồng Hoa & Nhựa Cánh Kiến)",
      nameEn: "Rouge Crimson (Yanzhi Red)",
      mineralSourceVi: "Sắc tố hữu cơ truyền thống chiết xuất từ cánh hoa Hồng Hoa (Carthamus tinctorius) du nhập từ Tây Vực qua núi Yên Chi (Cam Túc) hoặc nhựa cánh kiến đỏ (Tử Thảo Nhung), thấm vào bông khô thành miếng Yên Chi dễ hòa tan nước.",
      mineralSourceEn: "Traditional organic crimson extracted from safflower petals (Carthamus tinctorius) introduced via Mount Yanzhi (Gansu) or lac dye, absorbed onto dry cotton pads for delicate watercolor washes.",
      peakDynastyVi: "Hán – Đường – Tống – Thanh (sắc hồng điểm má mỹ nhân, cánh hoa mẫu đơn và men hồng Yên Chi trên sứ Cảnh Đức Trấn thời Ung Chính).",
      peakDynastyEn: "Han, Tang, Song, and Qing dynasties (used for court cosmetics, peony petals, and Yongzheng-era rose-pink enamel porcelain).",
      iconicMasterworkVi: "Trâm Hoa Sĩ Nữ Đồ (Chu Phưởng, thời Đường) và dòng sứ men hồng Yên Chi Thủy (Phấn Thải) thời Thanh Ung Chính – Càn Long.",
      iconicMasterworkEn: "'Court Ladies Adorning Their Hair with Flowers' (Zhou Fang, Tang Dynasty) and Qing Yongzheng-Qianlong rose-enamel porcelains."
    }
  ];

  if (typeof window !== "undefined") {
    window.CCE_V7_PACK2_PART_A = {
      brands20: brands20
    };
    window.CCE_V7_PACK2_PART_B = {
      gi12: gi12,
      museumStudios3d6: museumStudios3d6,
      traditionalPigments8: traditionalPigments8
    };
    window.CCE_V7_PACK2 = {
      brands20: brands20,
      gi12: gi12,
      museumStudios3d6: museumStudios3d6,
      traditionalPigments8: traditionalPigments8
    };
  }
})();
