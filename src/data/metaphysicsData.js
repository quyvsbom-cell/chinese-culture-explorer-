// ============================================================================
// Section 3.3: 中国传统术数 – Traditional Chinese Metaphysical Systems
// Strict epistemological distinction across history, cosmology, philosophy,
// folk belief, and modern empirical science.
// ============================================================================

window.CCE_METAPHYSICS = {
  epistemologyBanner: {
    title: "Nguyên tắc Học thuật & Nhận thức luận (Epistemological Principle)",
    description:
      "Các hệ thống thuật số và vũ trụ luận truyền thống Trung Hoa (Thuật số học 术数学) là di sản lịch sử – triết học – văn hóa phong phú, phản ánh cách cổ nhân mô hình hóa thời gian, không gian và tự nhiên. Trang này trình bày đầy đủ gốc rễ văn bản cổ, cấu trúc ký hiệu và diễn biến trường phái, đồng thời phân tách rạch ròi giữa: (1) Chứng cứ sử học/khảo cổ, (2) Vũ trụ luận truyền thống, (3) Diễn giải triết học, (4) Tín ngưỡng dân gian, và (5) Khoa học thực nghiệm hiện đại — tuyệt đối không coi các dự đoán thuật số là chân lý khoa học đã được kiểm chứng thực nghiệm."
  },

  systems: [
    {
      id: "yinyang",
      nameVi: "Thuyết Âm Dương",
      nameEn: "Yin-Yang Theory",
      nameZh: "阴阳",
      category: "Vũ trụ luận nền tảng",
      origins:
        "Từ nghĩa gốc chỉ sườn núi khuất nắng (Âm 阴) và sườn núi hướng nắng (Dương 阳) trong Kinh Thi và văn khắc Tây Chu, khái niệm này được trừu tượng hóa thành hai nguyên lý bổ sung trong Chu Dịch (Hệ Từ) và Đạo Đức Kinh.",
      classicalTexts: ["《周易·系辞》", "《黄帝内经·素问》", "《春秋繁露》 (Đổng Trọng Thư)"],
      structure:
        "Bốn quy luật tương tác: Đối lập chế ước (对立制约), Hỗ căn hỗ dụng (互根互用 – trong Âm có Dương, trong Dương có Âm), Tiêu trưởng bình hành (消长平衡) và Tương hỗ chuyển hóa (相互转化).",
      schools: "Âm Dương gia thời Chiến Quốc; Kinh học thời Hán; Tống Nho Thái Cực Đồ thuyết (Chu Đôn Di); Đông y học thuyết.",
      epistemicNote: {
        historical: "Xác nhận qua thẻ tre Chiến Quốc và văn bản tiền Tần; ban đầu là cặp khái niệm quan sát ánh sáng – khí hậu.",
        philosophical: "Mô hình tư duy biện chứng cổ đại về tính nhị nguyên bổ sung và vận động chu kỳ.",
        empiricalScience: "Là khung phân loại triết học – văn hóa, không phải hai loại vật chất hay lực lượng vật lý đo đạc được trong phòng thí nghiệm."
      }
    },
    {
      id: "wuxing",
      nameVi: "Thuyết Ngũ Hành",
      nameEn: "Five Elements / Five Phases",
      nameZh: "五行",
      category: "Vũ trụ luận nền tảng",
      origins:
        "Xuất hiện sớm nhất trong thiên 'Hồng Phạm' của 《尚书》 như năm nguồn vật liệu thiết yếu của đời sống (Thủy, Hỏa, Mộc, Kim, Thổ). Đến thời Chiến Quốc (Trâu Diễn), được nâng lên thành năm pha vận động năng động (Ngũ hành – 'Hành' là vận chuyển, không phải 5 nguyên tố tĩnh theo nghĩa hóa học).",
      classicalTexts: ["《尚书·洪范》", "《礼记·月令》", "《黄帝内经》", "《五行大义》 (Tiêu Cát thời Tùy)"],
      structure:
        "Vận hành qua hai chu trình chính: Tương Sinh (相生: Mộc sinh Hỏa → Hỏa sinh Thổ → Thổ sinh Kim → Kim sinh Thủy → Thủy sinh Mộc) và Tương Khắc (相克: Mộc khắc Thổ → Thổ khắc Thủy → Thủy khắc Hỏa → Hỏa khắc Kim → Kim khắc Mộc), kèm quan hệ Tương Thừa và Tương Vũ khi mất cân bằng.",
      schools: "Ngũ đức chung thủy (sử học chính trị), Ngũ tạng quy loại (Đông y), Chính Ngũ Hành và Nạp Âm Ngũ Hành (mệnh lý học).",
      epistemicNote: {
        historical: "Thẻ tre Quách Điếm và Mã Vương Đôi cho thấy nhiều phương án sắp xếp Ngũ Hành trước khi ổn định thứ tự thời Tây Hán.",
        philosophical: "Hệ thống phân loại tương ứng (correlative cosmology) quy nạp màu sắc, mùa, phương hướng, tạng phủ.",
        empiricalScience: "Không tương đương bảng tuần hoàn các nguyên tố hóa học hiện đại; giá trị nằm ở tư duy hệ thống và lịch sử khoa học – y học cổ truyền."
      }
    },
    {
      id: "bagua",
      nameVi: "Bát Quái",
      nameEn: "Eight Trigrams",
      nameZh: "八卦",
      category: "Ký hiệu học Dịch lý",
      origins:
        "Hệ thống 8 ký hiệu gồm 3 vạch (Hào dương ⚊ và Hào âm ⚋) tổ hợp thành 2³ = 8 quái cơ bản: Càn (☰), Đoài (☱), Ly (☲), Chấn (☳), Tốn (☴), Khảm (☵), Cấn (☶), Khôn (☷). Truyền thuyết quy cho Phục Hy, nhưng khảo cổ học hiện đại (như 'Thuyết số quái' của Trương Chính Lãng) phát hiện tiền thân là các ký hiệu số trên xương giáp cốt và đồ đồng Thương-Chu.",
      classicalTexts: ["《周易·说卦》", "《京氏易传》", "《皇极经世》 (Thiệu Ung)"],
      structure:
        "Hai sơ đồ sắp xếp nổi tiếng đời Tống: Tiên Thiên Bát Quái (phân bố đối xứng Âm-Dương, quy cho Phục Hy qua hiệu chỉnh của Thiệu Ung) và Hậu Thiên Bát Quái (chu trình 4 mùa – 8 phương vị của Văn Vương trong Thuyết Quái Truyện).",
      schools: "Tượng số học (Bát Quái nạp giáp của Kinh Phòng), Lý học Tống (Thiệu Ung), Đạo giáo nội đan và Phong thủy.",
      epistemicNote: {
        historical: "Các chuỗi sáu con số trên giáp cốt/kim văn thời Chu chứng minh hình thức sơ khai của quẻ Dịch dùng trong chiêm bốc số học.",
        philosophical: "Biểu diễn nhị phân (từng gây ấn tượng với Gottfried Leibniz thế kỷ XVII-XVIII) về các trạng thái biến đổi tự nhiên.",
        empiricalScience: "Hệ thống ký hiệu trừu tượng lịch sử; việc gán tính chất phương vị/vận khí thuộc truyền thống văn hóa và tín ngưỡng."
      }
    },
    {
      id: "yijing-system",
      nameVi: "Kinh Dịch (Hệ thống Quẻ & Biến dịch)",
      nameEn: "I Ching System",
      nameZh: "易经",
      category: "Kinh điển & Phương pháp luận",
      origins:
        "Chồng hai quẻ đơn (Bát quái) tạo thành 64 quẻ kép (2⁶ = 64) và 384 hào. Ban đầu là sách bói cỏ thi (Thệ chiêm) của nhà Chu (gọi là Chu Dịch), sau được giới Nho gia bổ sung bộ 'Thập Dực' để biến thành sách triết lý đạo đức và vũ trụ luận hàng đầu trong Ngũ Kinh.",
      classicalTexts: ["《周易正义》 (Vương Bật – Khổng Dĩnh Đạt)", "《周易本义》 (Chu Hy)", "《周易折中》"],
      structure:
        "Mỗi quẻ gồm Quái hình (6 hào từ dưới lên trên), Quái từ (lời tổng quát) và 6 Hào từ (mô tả động thái từng vị trí thời thế). Nguyên lý cốt lõi là 'Bất dịch' (quy luật bất biến), 'Biến dịch' (vạn vật luôn đổi thay) và 'Dịch giản' (giản dị dễ nắm bắt).",
      schools: "Hai đại phái xuyên suốt 2.000 năm: Nghĩa Lý phái (trọng triết lý đạo đức: Vương Bật, Trình Di) và Tượng Số phái (trọng cấu trúc hào tượng, nạp giáp, dự đoán: Kinh Phòng, Ngu Phiên, Thiệu Ung).",
      epistemicNote: {
        historical: "Bản Chu Dịch bằng lụa tại mộ Mã Vương Đôi (168 TCN) và thẻ tre Thượng Hải xác nhận thứ tự quẻ thời Hán sớm có khác biệt nhỏ so với bản truyền thế.",
        philosophical: "Cung cấp khung tư duy ra quyết định theo thời thế ('Thời trung'), quản trị rủi ro ('Cư an tư nguy') và tự tu dưỡng.",
        empiricalScience: "Phép gieo quẻ ngẫu nhiên bằng cỏ thi hoặc đồng xu không có cơ chế nhân quả vật lý để tiên tri sự kiện tương lai; giá trị thực tiễn nằm ở suy ngẫm tâm lý và phân tích tình huống."
      }
    },
    {
      id: "tiangan-dizhi",
      nameVi: "Thiên Can & Địa Chi",
      nameEn: "Heavenly Stems and Earthly Branches",
      nameZh: "天干地支",
      category: "Lịch pháp & Hệ đếm chu kỳ",
      origins:
        "Đã hoàn chỉnh ngay trên xương Giáp Cốt nhà Thương (dùng Can Chi ghi ngày liên tục suốt hơn 3.000 năm không đứt quãng – hệ thống đếm ngày cổ liên tục dài nhất thế giới). Gồm 10 Thiên Can (Giáp đến Quý) và 12 Địa Chi (Tý đến Hợi) phối hợp theo quy tắc dương-dương/âm-âm thành chu kỳ 60 đơn vị (Lục Thập Hoa Giáp 六十甲子).",
      classicalTexts: ["《尔雅·释天》", "《史记·历书》", "《汉书·律历志》"],
      structure:
        "10 Thiên Can (甲乙丙丁戊己庚辛壬癸) và 12 Địa Chi (子丑寅卯辰巳午未申酉戌亥). Mỗi Địa Chi ẩn chứa 'Tàng Can' và tạo quan hệ Tam hợp, Lục hợp, Lục xung, Tương hình, Tương hại.",
      schools: "Sử học niên biểu, Trung y (Ngũ vận lục khí), Mệnh lý học (Tử Bình), Thiên văn – Lịch pháp cổ đại.",
      epistemicNote: {
        historical: "Khảo cổ học Giáp Cốt xác nhận chu kỳ 60 ngày tồn tại từ thời Thương; việc dùng Can Chi đếm năm phổ biến từ thời Đông Hán.",
        philosophical: "Hệ tọa độ thời gian tuần hoàn, khác với trục thời gian tuyến tính thuần túy.",
        empiricalScience: "Hoạt động như một hệ ký hiệu lịch pháp chuẩn xác về mặt chu kỳ đếm ngày/năm; các thuộc tính xung-hợp mang tính quy ước văn hóa."
      }
    },
    {
      id: "bazi",
      nameVi: "Bát Tự Tứ Trụ (Tử Bình)",
      nameEn: "Bazi / Four Pillars of Destiny",
      nameZh: "八字 / 四柱推命",
      category: "Mệnh lý học truyền thống",
      origins:
        "Khởi nguồn từ thuật Nạp Âm xem năm sinh thời Đường (Lý Hư Trung dùng 3 trụ Năm-Tháng-Ngày), sau đó được Từ Tử Bình đầu thời Tống cải cách thành hệ 4 trụ (Năm-Tháng-Ngày-Giờ = 8 chữ Can Chi) lấy Thiên Can ngày sinh ('Nhật chủ') làm trung tâm đối chiếu.",
      classicalTexts: ["《渊海子平》", "《三命通会》 (Vạn Dân Anh đời Minh)", "《滴天髓》", "《子平真诠》 (Thẩm Hiếu Chiêm đời Thanh)"],
      structure:
        "Quy đổi thời điểm sinh (theo Tiết khí thực tế thay vì chỉ căn cứ ngày âm lịch) thành 4 cặp Can-Chi. Xét ngũ hành Nhật chủ đắc lệnh/đắc địa/đắc thế để tìm Dụng thần điều hòa (Điều hầu, Phù ức, Thông quan) và Thập Thần (Tài, Quan, Ấn, Thực Thương, Tỷ Kiếp) qua các Đại vận 10 năm.",
      schools: "Cổ pháp (lấy Nạp âm/Thần sát), Tử Bình Chính Tông (lấy Nguyệt lệnh Cách cục và Dụng thần), Điều Hầu phái (Cùng Thông Bảo Giám), Manh phái hiện đại.",
      epistemicNote: {
        historical: "Sự chuyển dịch từ xem năm (Đường) sang xem ngày và cách cục cá nhân (Tống) phản ánh quá trình cá nhân hóa xã hội thời Tống–Minh.",
        philosophical: "Mô hình hóa tương tác khí hậu – mùa sinh và xu hướng tính cách dưới ẩn dụ Ngũ Hành cân bằng.",
        empiricalScience: "Không có bằng chứng khoa học thực nghiệm cho thấy thời điểm sinh quyết định định mệnh tài chính hay nghề nghiệp; nên tiếp cận như di sản văn hóa và công cụ tự suy ngẫm tâm lý."
      }
    },
    {
      id: "ziweidoushu",
      nameVi: "Tử Vi Đẩu Số",
      nameEn: "Zi Wei Dou Shu",
      nameZh: "紫微斗数",
      category: "Tinh mệnh học truyền thống",
      origins:
        "Truyền thuyết gán cho đạo sĩ Trần Đoàn (Trần Hi Di) thời Tống sơ, song các sử gia văn bản học (như nghiên cứu về Đạo Tạng thời Minh) nhận định hệ thống Tử Vi Đẩu Số hoàn chỉnh như hiện nay hình thành vào khoảng thế kỷ XV–XVI (đời Minh) trên cơ sở dung hợp tinh tượng Đạo giáo, Thập Nhị Cung Chiêm tinh truyền qua Ba Tư/Ấn Độ thời Đường và thuật số Can Chi.",
      classicalTexts: ["《紫微斗数全书》 (La Hồng Tiên biên tập đời Minh)", "《十八飞星策天紫微斗数全集》"],
      structure:
        "An 14 Chính tinh (Tử Vi, Thiên Phủ làm chủ hai hệ) và hàng chục phụ tinh, Lục cát, Lục sát, cùng Tứ Hóa (Lộc – Quyền – Khoa – Kỵ) vào 12 cung chức năng (Mệnh, Huynh Đệ, Phu Thê, Tử Nữ, Tài Bạch, Tật Ách, Thiên Di, Nô Bộc, Quan Lộc, Điền Trạch, Phúc Đức, Phụ Mẫu).",
      schools: "Nam Phái Tam Hợp (trọng tinh tình, tam phương tứ chính, miếu hãm – Trung Châu phái, Tử Vân phái) và Bắc Phái Phi Tinh / Khâm Thiên Tứ Hóa (trọng phi hóa 12 cung, tự hóa, hà lạc lý số).",
      epistemicNote: {
        historical: "Là hệ thống thuật số bản địa hóa phức tạp nhất của văn hóa Trung–Việt (rất phổ biến tại Đài Loan, Hồng Kông và Việt Nam).",
        philosophical: "12 cung phản ánh cấu trúc quan hệ xã hội và vòng đời con người trong văn hóa Đông Á (gia đình, sự nghiệp, di chuyển, tâm phúc).",
        empiricalScience: "Các 'ngôi sao' trong Tử Vi là biến số toán lịch biểu tượng (symbolic stars), không phải thiên thể vật lý chiếu xạ ảnh hưởng lên đời người."
      }
    },
    {
      id: "fengshui",
      nameVi: "Phong Thủy (Địa lý học cổ đại)",
      nameEn: "Feng Shui",
      nameZh: "风水",
      category: "Không gian & Kiến trúc truyền thống",
      origins:
        "Tên gốc là 'Kham Dư' (堪舆). Từ 'Phong Thủy' xuất hiện trong 《葬书》 (Táng Thư) tương truyền của Quách Phác thời Tấn: 'Khí gặp gió thì tán, gặp nước thì dừng' ('Tàng phong tụ thủy'). Khởi thủy là nghệ thuật chọn vị trí định cư và mai táng thích nghi khí hậu, địa hình và nguồn nước.",
      classicalTexts: ["《葬书》", "《撼龙经》 & 《疑龙经》 (Dương Quân Tùng)", "《阳宅三要》", "《沈氏玄空学》"],
      structure:
        "Hai nhánh chính: (1) Loan Đầu phái (hình thế địa hình: Long-Huyệt-Sa-Thủy-Hướng, Thanh Long – Bạch Hổ – Chu Tước – Huyền Vũ) và (2) Lý Khí phái (la bàn, Bát Trạch, Huyền Không Phi Tinh tính toán phương vị theo thời vận Tam Nguyên Cửu Vận).",
      schools: "Giang Tây phái (Hình thế Loan Đầu) và Phúc Kiến phái (Lý Khí Bát Trạch / Huyền Không).",
      epistemicNote: {
        historical: "Định hình quy hoạch kinh đô (Trường An, Bắc Kinh, Thăng Long, Huế) và kiến trúc tứ hợp viện Trung Hoa.",
        philosophical: "Tìm kiếm sự hài hòa giữa nơi ở của con người với vi khí hậu, địa hình, ánh sáng và dòng nước ('Thiên nhân hợp nhất').",
        empiricalScience: "Các nguyên tắc Loan Đầu thường trùng khớp với sinh thái cảnh quan, thông gió, chiếu sáng tự nhiên và tâm lý học môi trường; ngược lại các tuyên bố về 'tài lộc siêu nhiên' từ vật phẩm hoặc phi tinh chưa được khoa học thực nghiệm chứng minh."
      }
    },
    {
      id: "qimendunjia",
      nameVi: "Kỳ Môn Độn Giáp",
      nameEn: "Qimen Dunjia",
      nameZh: "奇门遁甲",
      category: "Tam Thức cổ đại",
      origins:
        "Thuộc nhóm 'Tam Thức' cổ đại (cùng Thái Ất và Lục Nhâm). Thẻ tre khai quật thời Tây Hán (như Nhữ Âm Hầu mộ năm 165 TCN) xác nhận hình thức Thức bàn (式盘) cổ đại dùng trong quân sự – thiên văn. Tên gọi mang ý nghĩa ẩn giấu Thiên Can 'Giáp' (đại diện nguyên soái tối cao) dưới Tam Kỳ (Ất-Bính-Đinh) và Bát Môn.",
      classicalTexts: ["《烟波钓叟歌》", "《奇门遁甲统宗》", "《御定奇门宝鉴》 (khâm định đời Thanh)"],
      structure:
        "Mô hình ma trận 3 × 3 (Cửu Cung Lạc Thư) kết hợp bốn tầng: Địa bàn (Cửu cung), Nhân bàn (Bát Môn: Hưu-Sinh-Thương-Đỗ-Cảnh-Tử-Kinh-Khai), Thiên bàn (Cửu Tinh) và Thần bàn (Bát Thần), xoay chuyển theo tiết khí và giờ Can Chi.",
      schools: "Thời Gia Kỳ Môn (Chuyển bàn vs Phi bàn; Sách cục vs Nhuận cục), Nhật Gia Kỳ Môn, Niên Gia Kỳ Môn.",
      epistemicNote: {
        historical: "Từng được gọi là 'Đế vương chi học' trong lịch sử quân sự cổ đại dùng để chọn thời cơ và phương hướng hành quân (mang tính tâm lý chiến lược nhiều hơn).",
        philosophical: "Tổ hợp ma trận không-thời gian cực kỳ chặt chẽ của tư duy số học truyền thống.",
        empiricalScience: "Là mô hình tổ hợp toán lịch cổ điển; không có bằng chứng khoa học về khả năng dự báo hay thao túng kết quả sự kiện."
      }
    },
    {
      id: "solar-terms",
      nameVi: "Nhị Thập Tứ Tiết Khí",
      nameEn: "Twenty-Four Solar Terms",
      nameZh: "二十四节气",
      category: "Thiên văn & Nông lịch",
      origins:
        "Xác lập hoàn chỉnh vào thời Tây Hán trong 《淮南子·天文训》 (139 TCN) và đưa vào Lịch Thái Sơ (104 TCN). Khác với lịch âm thuần túy, 24 Tiết khí được tính chính xác theo góc kinh độ hoàng đạo của Mặt Trời (mỗi tiết cách nhau 15° quanh quỹ đạo 360°).",
      classicalTexts: ["《淮南子·天文训》", "《太初历》", "《月令七十二候集解》"],
      structure:
        "Chia năm Dương lịch thành 24 mốc: Lập Xuân, Vũ Thủy, Kinh Trập, Xuân Phân, Thanh Minh, Cốc Vũ (Xuân); Lập Hạ, Tiểu Mãn, Mang Chủng, Hạ Chí, Tiểu Thử, Đại Thử (Hạ); Lập Thu, Xử Thử, Bạch Lộ, Thu Phân, Hàn Lộ, Sương Giáng (Thu); Lập Đông, Tiểu Tuyết, Đại Tuyết, Đông Chí, Tiểu Hàn, Đại Hàn (Đông).",
      schools: "Ứng dụng trực tiếp trong nông nghiệp lưu vực Hoàng Hà, Đông y dưỡng sinh thuận mùa, ẩm thực theo tiết và lịch pháp Việt Nam – Đông Á.",
      epistemicNote: {
        historical: "Được UNESCO ghi danh là Di sản Văn hóa Phi vật thể của Nhân loại năm 2016.",
        philosophical: "Nhịp điệu hài hòa giữa thời gian thiên văn và nhịp sinh học con người – mùa vụ.",
        empiricalScience: "Hoàn toàn dựa trên quan sát thiên văn học thực chứng về vị trí biểu kiến của Mặt Trời trên hoàng đạo (thuộc hệ Dương lịch chính xác cao)."
      }
    },
    {
      id: "chinese-calendar",
      nameVi: "Lịch pháp Truyền thống Trung Hoa (Nông lịch)",
      nameEn: "Traditional Chinese Lunisolar Calendar",
      nameZh: "传统历法（农历）",
      category: "Thiên văn & Lịch pháp",
      origins:
        "Nông lịch (còn gọi Hạ lịch hoặc Âm Dương hợp lịch) không phải lịch Âm thuần túy (như lịch Hồi giáo) mà kết hợp cả chu kỳ Mặt Trăng (xác định ngày mùng 1 Sóc và ngày 15 Vọng mỗi tháng ~29,53 ngày) với chu kỳ Mặt Trời (qua 24 Tiết khí) nhờ cơ chế đặt tháng Nhuận (19 năm 7 tháng nhuận).",
      classicalTexts: ["《汉书·律历志》", "《授时历》 (Quách Thủ Kính 1280)", "《时宪历》 (Thang Nhược Vọng / Adam Schall 1645)"],
      structure:
        "Gồm ba trục vận hành đồng thời: (1) Tháng Trăng + Tháng Nhuận (quy tắc tháng nào không có Trung khí sẽ là tháng Nhuận), (2) 24 Tiết khí Mặt Trời, và (3) Can Chi liên tục cho Năm, Tháng, Ngày, Giờ.",
      schools: "Thiên văn quan trắc bản địa (Quách Thủ Kính tính độ dài năm chí tuyến 365,2425 ngày ngang lịch Gregory trước 300 năm) và giao lưu thiên văn học Tây phương cuối Minh đầu Thanh.",
      epistemicNote: {
        historical: "Lịch pháp do triều đình ban hành ('Chính sóc') từng là biểu tượng chủ quyền đế chế và cầu nối lễ nghi giữa Trung Quốc với các quốc gia láng giềng (Việt Nam dùng lịch bản địa tương đồng có điều chỉnh múi giờ 105°E từ thế kỷ XX).",
        philosophical: "Gắn kết lễ hội nông nghiệp, sinh hoạt cộng đồng và chu kỳ tự nhiên.",
        empiricalScience: "Hệ thống thiên văn – toán học thực chứng có độ chính xác cao về chu kỳ Mặt Trăng, Mặt Trời và dự báo nhật/nguyệt thực."
      }
    },
    {
      id: "tcm-zangxiang-meridians",
      nameVi: "Học thuyết Tạng Tượng, Kinh Lạc & Dưỡng sinh Nội Kinh",
      nameEn: "TCM Zangxiang, Meridian Theory & Seasonal Yangsheng",
      nameZh: "中医藏象经络与顺时养生",
      category: "Y sử & Triết học Dưỡng sinh",
      origins: "Tổng hợp từ y lý thực hành thời Chiến Quốc – Tần Hán, kết tinh trong bộ 《Hoàng Đế Nội Kinh》 (Tố Vấn & Linh Khu), được bổ sung bản đồ huyệt vị bằng Thiên Thánh Đồng Nhân (1027) và Nam dược tại Việt Nam.",
      classicalTexts: ["《黄帝内经·素问》", "《灵枢经》", "《伤寒杂病论》 (Trương Trọng Cảnh)", "《本草纲目》 (Lý Thời Trân)"],
      structure:
        "Mô hình hóa cơ thể theo 5 Tạng – 6 Phủ gắn Ngũ Hành, hệ 12 Chính kinh – Tý Ngọ Lưu Chú theo canh giờ, và phép Dưỡng sinh 'Xuân sinh, Hạ trưởng, Thu thu, Đông tàng' điều chỉnh ẩm thực – nghỉ ngơi theo 24 Tiết khí.",
      schools: "Thương Hàn phái (ngoại cảm 6 kinh), Ôn Bệnh phái (ôn dịch), Bổ Thổ phái (Lý Đông Viên), giao lưu sâu với Nam Y Việt Nam (Tuệ Tĩnh, Hải Thượng Lãn Ông).",
      epistemicNote: {
        historical: "Phản ánh nỗ lực hệ thống hóa quan sát sinh lý – khí hậu thời tiền giải phẫu hiện đại và di sản chăm sóc sức khỏe cộng đồng Đông Á.",
        philosophical: "Nhấn mạnh tính chỉnh thể thân–tâm, thích ứng với chu kỳ tự nhiên và phòng ngừa bệnh trước khi phát ('Trị vị bệnh').",
        empiricalScience: "Các thói quen dưỡng sinh hành vi (ngủ nghỉ điều độ, thái cực quyền, dinh dưỡng theo mùa) phù hợp vệ sinh dự phòng; chẩn đoán và điều trị bệnh lý chuyên khoa phải tuân theo y học chứng cứ và thử nghiệm lâm sàng RCTs."
      }
    },
    {
      id: "hetu-luoshu",
      nameVi: "Hà Đồ & Lạc Thư (Cửu Cung Ma Phương)",
      nameEn: "Hetu and Luoshu Diagrams",
      nameZh: "河图洛书",
      category: "Ký hiệu học Dịch lý & Toán học cổ đại",
      origins:
        "Được nhắc đến từ sớm trong 《Chu Dịch · Hệ Từ Thượng》 ('Hà xuất Đồ, Lạc xuất Thư, Thánh nhân tắc chi') và 《Đại Đái Lễ Ký · Minh Đường》 ('Nhị tứ vi kiên, lục bát vi túc, tả tam hữu thất, đới cửu lý nhất, ngũ cư trung ương'). Đến thời Bắc Tống, Trần Đoàn, Lưu Mục, Thiệu Ung và Chu Hy đưa sơ đồ chấm đen trắng Hà Đồ – Lạc Thư vào đầu sách 《Chu Dịch Bản Nghĩa》.",
      classicalTexts: ["《周易·系辞上》", "《大戴礼记·明堂》", "《周易本义》 (Chu Hy)", "《易学启蒙》"],
      structure:
        "Hà Đồ biểu thị số Sinh – Thành của Ngũ Hành ('Thiên nhất sinh Thủy, Địa lục thành chi...'). Lạc Thư là ma phương bậc 3 (3 × 3 Magic Square) sớm nhất thế giới: 9 con số từ 1 đến 9 xếp vào Cửu cung sao cho tổng mọi hàng ngang, cột dọc và đường chéo đều bằng 15.",
      schools: "Tượng số học Tống Nho (Trần Đoàn – Thiệu Ung), Cửu cung Bát phong (Hoàng Đế Nội Kinh Linh Khu), Huyền Không Phi Tinh và Kỳ Môn Độn Giáp.",
      epistemicNote: {
        historical: "Văn bản Cửu cung đã xuất hiện trên thẻ tre Tây Hán và bàn Cửu cung Thái Ất mộ Nhữ Âm Hầu (165 TCN).",
        philosophical: "Biểu trưng cho sự cân bằng đối xứng động và trật tự toán học hài hòa trong vũ trụ quan cổ đại.",
        empiricalScience: "Lạc Thư là một cấu trúc toán học tổ hợp (ma phương bậc 3 duy nhất modulo phép quay/đối xứng); các phép gán cát hung bay sao thuộc quy ước thuật số truyền thống."
      }
    },
    {
      id: "liuren-taiyi",
      nameVi: "Đại Lục Nhâm & Thái Ất Thần Số (Tam Thức)",
      nameEn: "Da Liuren & Taiyi Shenshu (Three Cosmic Boards)",
      nameZh: "大六壬与太乙神数",
      category: "Tam Thức cổ đại",
      origins:
        "Cùng với Kỳ Môn Độn Giáp hợp thành 'Tam Thức' (三式) — ba hệ thống mô phỏng thiên văn – lịch toán cao cấp nhất thời Tần–Hán–Đường–Tống, được ghi nhận trong 《Tùy Thư · Kinh Tịch Chí》 và 《Tống Sử · Nghệ Văn Chí》.",
      classicalTexts: ["《太乙金镜式经》 (Vương Hy Minh đời Đường)", "《六壬大全》 (Quách Tải Lai đời Minh)", "《大六壬指南》 (Trần Công Hiến)"],
      structure:
        "Thái Ất Thần Số vận hành trên Cửu cung/16 cung để tính chu kỳ vận hội lịch sử lớn (Nguyên – Hội – Vận – Thế). Đại Lục Nhâm đặt Thiên bàn 12 Nguyệt tướng (vị trí Mặt Trời theo tiết khí) chồng lên Địa bàn 12 cung giờ để lập 'Tứ khóa' và rút ra 'Tam truyền' (Sơ – Trung – Mạt truyền) cùng 12 Thiên tướng.",
      schools: "Thiên văn Tư Thiên Giám triều đình Đường–Tống và trường phái Lục Nhâm văn nhân Giang Nam thời Minh–Thanh.",
      epistemicNote: {
        historical: "Thức bàn Lục Nhâm và Thái Ất bằng sơn mài khai quật từ mộ Tây Hán là vật chứng trực tiếp về kỹ thuật chế tác dụng cụ thiên văn cổ.",
        philosophical: "Phản ánh nỗ lực mô hình hóa chuỗi diễn biến sự việc theo ba giai đoạn khởi phát – chuyển tiếp – kết cục (Tam truyền).",
        empiricalScience: "Hệ thống tổ hợp toán lịch cổ điển; không có hiệu lực tiên tri thực nghiệm đối với thiên tai hay biến cố lịch sử hiện đại."
      }
    },
    {
      id: "meihua-yishu",
      nameVi: "Mai Hoa Dịch Số & Lục Hào Nạp Giáp",
      nameEn: "Plum Blossom Numerology & Six-Line Najia",
      nameZh: "梅花易数与六爻纳甲",
      category: "Tượng số Dịch học",
      origins:
        "Lục Hào Nạp Giáp khởi nguồn từ Kinh Phòng (京房, 77–37 TCN) thời Tây Hán khi gắn 64 quẻ Dịch với Can Chi, Ngũ Hành và Lục Thân. Mai Hoa Dịch Số tương truyền của Thiệu Ung (邵雍, 1011–1077) thời Bắc Tống, lập quẻ trực tiếp từ con số, thời gian hoặc hiện tượng quan sát ('Quan Mai chiêm').",
      classicalTexts: ["《京氏易传》 (Kinh Phòng)", "《梅花易数》", "《增删卜易》 (Dã Hạc Lão Nhân đời Thanh)", "《卜筮正宗》 (Vương Hồng Tự)"],
      structure:
        "Mai Hoa Dịch Số chia quẻ thành Thể quái (chủ thể) và Dụng quái (hoàn cảnh tác động) xét sinh khắc cùng Hỗ quái, Biến quái. Lục Hào Nạp Giáp gieo 3 đồng xu 6 lần để xét hào Thế – Ứng, Dụng thần (Phụ mẫu, Quan quỷ, Huynh đệ, Thê tài, Tử tôn) dưới tác động của Nguyệt kiến và Nhật thần.",
      schools: "Hán Dịch Tượng số phái (Kinh Phòng) và Tống Dịch Tiên thiên Tâm Dịch phái (Thiệu Ung).",
      epistemicNote: {
        historical: "Chiếm tỷ trọng lớn nhất trong các sách Dịch học ứng dụng thời Minh–Thanh và truyền sang Việt Nam (như các bản chép tay Dịch học Hán Nôm).",
        philosophical: "Rèn luyện tư duy liên tưởng biểu tượng ('Quan vật thủ tượng') và phân tích tương quan chủ thể – hoàn cảnh (Thể – Dụng).",
        empiricalScience: "Kết quả gieo đồng xu hay lấy số giờ mang tính ngẫu nhiên thống kê; giá trị hữu ích nằm ở khung suy xét đa chiều trước quyết định."
      }
    },
    {
      id: "physiognomy-bingjian",
      nameVi: "Tướng học Cổ truyền & Thuật Thức Nhân《Băng Giám》",
      nameEn: "Classical Physiognomy & Bingjian Character Appraisal",
      nameZh: "传统相学与《冰鉴》识人学",
      category: "Nhân học Quan sát & Quản trị Cổ điển",
      origins:
        "Tướng học (相学) xuất hiện từ thời Xuân Thu (Thúc Phục, Cô Bố Tử Khanh; Tuân Tử từng viết thiên 《Phi Tướng》 phản biện việc lấy tướng mạo định phẩm chất). Đến thời Ngụy, Lưu Thiệu viết 《Nhân Vật Chí》 phân loại tài năng quan lại; thời Thanh, Tăng Quốc Phiên đúc kết cuốn 《Băng Giám》 (冰鉴) dùng quan sát thần thái để tuyển dụng nhân sự.",
      classicalTexts: ["《人物志》 (Lưu Thiệu thời Tam Quốc)", "《麻衣神相》 & 《柳庄相法》", "《冰鉴》 (Tăng Quốc Phiên)", "《荀子·非相》 (phản biện duy lý)"],
      structure:
        "Trong 《Băng Giám》, trọng tâm không nằm ở kích thước ngũ quan cứng nhắc mà ở bảy phương diện thần thái: Thần cốt (神骨), Cương nhu (刚柔), Dung mạo (容貌), Tình thái (情态), Tu mi (râu mày), Thanh âm (giọng nói) và Khí sắc ('Tà chính khán nhãn, thông minh khán ngạch, danh lợi khán khẩu').",
      schools: "Phái Nhân luân giám thức (Lưu Thiệu, Tăng Quốc Phiên – phục vụ quản trị nhân sự) vs Phái Tướng mệnh giang hồ (Ma Y, Liễu Trang).",
      epistemicNote: {
        historical: "Phản ánh văn hóa 'Quan nhân' (xét người) trong tuyển chọn nhân sự thời cổ khi chưa có trắc nghiệm tâm lý chuẩn hóa.",
        philosophical: "Ngay từ thế kỷ III TCN, Tuân Tử trong 《Phi Tướng》 đã khẳng định: 'Tướng hình không bằng luận tâm, luận tâm không bằng chọn thuật học' (相形不如论心).",
        empiricalScience: "Khoa học hiện đại bác bỏ việc dùng hình dáng xương mặt để đoán thọ yểu hay giàu nghèo (phrenology/physiognomy); chỉ có quan sát ngôn ngữ cơ thể, giọng nói và thái độ hành vi là có cơ sở tâm lý học giao tiếp."
      }
    }
  ],

  fiveElementsGraph: [
    { id: "wood", nameVi: "Mộc", zh: "木", color: "#4D7C5D", season: "Xuân", direction: "Đông", organ: "Can / Đởm", generates: "Hỏa", overcomes: "Thổ" },
    { id: "fire", nameVi: "Hỏa", zh: "火", color: "#B63D32", season: "Hạ", direction: "Nam", organ: "Tâm / Tiểu trường", generates: "Thổ", overcomes: "Kim" },
    { id: "earth", nameVi: "Thổ", zh: "土", color: "#B99A62", season: "Trưởng Hạ / Tứ quý", direction: "Trung tâm", organ: "Tỳ / Vị", generates: "Kim", overcomes: "Thủy" },
    { id: "metal", nameVi: "Kim", zh: "金", color: "#8A8B8E", season: "Thu", direction: "Tây", organ: "Phế / Đại trường", generates: "Thủy", overcomes: "Mộc" },
    { id: "water", nameVi: "Thủy", zh: "水", color: "#355C7D", season: "Đông", direction: "Bắc", organ: "Thận / Bàng quang", generates: "Mộc", overcomes: "Hỏa" }
  ],

  baguaList: [
    { symbol: "☰", nameVi: "Càn", zh: "乾", element: "Kim", nature: "Thiên (Trời)", family: "Cha", quality: "Cương kiện, sáng tạo" },
    { symbol: "☷", nameVi: "Khôn", zh: "坤", element: "Thổ", nature: "Địa (Đất)", family: "Mẹ", quality: "Nhu thuận, bao dung" },
    { symbol: "☳", nameVi: "Chấn", zh: "震", element: "Mộc", nature: "Lôi (Sấm)", family: "Trưởng nam", quality: "Chuyển động, khởi phát" },
    { symbol: "☴", nameVi: "Tốn", zh: "巽", element: "Mộc", nature: "Phong (Gió)", family: "Trưởng nữ", quality: "Thẩm thấu, linh hoạt" },
    { symbol: "☵", nameVi: "Khảm", zh: "坎", element: "Thủy", nature: "Thủy (Nước)", family: "Trung nam", quality: "Hiểm trở, trí tuệ sâu" },
    { symbol: "☲", nameVi: "Ly", zh: "离", element: "Hỏa", nature: "Hỏa (Lửa)", family: "Trung nữ", quality: "Sáng rõ, bám giữ" },
    { symbol: "☶", nameVi: "Cấn", zh: "艮", element: "Thổ", nature: "Sơn (Núi)", family: "Thiếu nam", quality: "Ngưng tĩnh, điểm dừng" },
    { symbol: "☱", nameVi: "Đoài", zh: "兑", element: "Kim", nature: "Trạch (Đầm)", family: "Thiếu nữ", quality: "Hòa duyệt, giao tiếp" }
  ]
};
