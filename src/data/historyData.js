// ============================================================================
// Section 3.1: 中国历史与文明 – Chinese History and Civilization
// Covers all 14 chronological periods + filterable timeline events
// ============================================================================

window.CCE_HISTORY = {
  periods: [
    {
      id: "prehistoric",
      order: 1,
      nameVi: "Trung Quốc Tiền Sử",
      nameEn: "Prehistoric China",
      nameZh: "史前时期",
      nameZhTrad: "史前時期",
      span: "khoảng 1.700.000 – 2070 TCN",
      overview:
        "Thời kỳ hình thành các quần thể văn hóa đá cũ (Nguyên Mưu, Chu Khẩu Điếm) và chuyển sang nông nghiệp định cư thời đá mới dọc lưu vực sông Hoàng Hà (Ngưỡng Thiều, Long Sơn) và sông Dương Tử (Hà Mỗ Độ, Lương Chử). Đây là giai đoạn đặt nền móng đa trung tâm cho văn minh Hoa Hạ thay vì một nguồn gốc đơn tuyến duy nhất.",
      timeline: [
        "~1,7 triệu năm trước: Di chỉ Người Nguyên Mưu (Vân Nam) – một trong những dấu tích người đứng thẳng sớm nhất Đông Á.",
        "~7000–5000 TCN: Văn hóa Hà Mỗ Độ (Chiết Giang) phát triển trồng lúa nước và nhà sàn gỗ.",
        "~5000–3000 TCN: Văn hóa Ngưỡng Thiều (Trung Nguyên) nổi tiếng với gốm màu (thải đào) và làng định cư Bán Pha.",
        "~3300–2300 TCN: Văn hóa Lương Chử (hạ lưu Dương Tử) xây dựng hệ thống thủy lợi cổ đại và chế tác ngọc Bích – ngọc Tông.",
        "~3000–2000 TCN: Văn hóa Long Sơn với kỹ nghệ gốm đen mỏng như vỏ trứng và thành lũy đất nện sơ khai."
      ],
      politics:
        "Chuyển dịch từ xã hội thị tộc mẫu hệ bình đẳng (Ngưỡng Thiều sơ kỳ) sang xã hội phân tầng thủ lĩnh (chiefdom) và liên minh bộ lạc (truyền thuyết Tam Hoàng Ngũ Đế). Quyền lực nghi lễ gắn với ngọc khí và chiêm bốc bằng xương thú.",
      economySociety:
        "Hình thành hai trung tâm nông nghiệp lớn: kê (túc/thử) ở phương Bắc (Hoàng Hà) và lúa nước ở phương Nam (Dương Tử). Xuất hiện phân công lao động thủ công chuyên nghiệp (làm gốm bàn xoay, chế tác ngọc, dệt tơ tằm sơ khai).",
      figures: [
        "Hoàng Đế (黄帝) & Viêm Đế (炎帝) – nhân vật truyền thuyết biểu trưng cho liên minh bộ lạc Hoa Hạ (chưa có chứng cứ chữ viết đương thời).",
        "Nghiêu – Thuấn – Vũ (尧舜禹) – hình mẫu truyền thuyết về thiện nhượng và trị thủy."
      ],
      philosophyIntellectual:
        "Tư duy vũ trụ sơ khai thể hiện qua các đồ án đối xứng trên gốm Ngưỡng Thiều, nghi lễ tế trời đất bằng ngọc Bích tròn (trời) và ngọc Tông vuông trong tròn ngoài (đất) ở Lương Chử, cùng hệ thống ký hiệu khắc trên gốm.",
      culturalAchievements: [
        "Di chỉ thành cổ Lương Chử (Di sản Thế giới UNESCO, chứng minh nhà nước sơ khai ở hạ lưu Trường Giang).",
        "Kỹ thuật chế tác ngọc khí tinh xảo (văn hóa Hồng Sơn và Lương Chử).",
        "Thuần hóa lợn, chó, tằm và trồng kê/lúa nước quy mô làng xã."
      ],
      mapData: {
        capitals: "Đào Tự (Sơn Tây), Di chỉ Thành cổ Lương Chử (Chiết Giang)",
        territory: "Đa trung tâm: Trung Nguyên (Hoàng Hà), hạ lưu Trường Giang, Liêu Hà (Hồng Sơn), Tứ Xuyên (Bảo Đôn).",
        routes: "Mạng lưới trao đổi ngọc khí và muối khoáng sơ khai giữa Bắc và Nam."
      },
      primarySources: [
        {
          title: "Sử ký – Ngũ Đế bản kỷ (史记·五帝本纪)",
          note: "Chép lại hệ thống truyền thuyết cổ sử được Tư Mã Thiên biên soạn thời Tây Hán; cần đối chiếu thận trọng với khảo cổ học hiện đại."
        },
        {
          title: "UNESCO World Heritage: Archaeological Ruins of Liangzhu City",
          url: "https://whc.unesco.org/en/list/1592/",
          note: "Hồ sơ khảo cổ học quốc tế về xã hội tiền sử hạ lưu Dương Tử (3300–2300 TCN)."
        }
      ]
    },
    {
      id: "xia-shang-zhou",
      order: 2,
      nameVi: "Hạ – Thương – Chu (Tam Đại)",
      nameEn: "Xia, Shang and Zhou",
      nameZh: "夏商周",
      nameZhTrad: "夏商周",
      span: "khoảng 2070 – 771 TCN (Tây Chu)",
      overview:
        "Thời kỳ hình thành nhà nước vương quyền thế tập, văn hóa đồ đồng thau (Thanh đồng thời đại), chữ viết Giáp Cốt và chế độ tông pháp – lễ nhạc. Nhà Thương (Ân Khư) đánh dấu mốc lịch sử có văn tự đương thời xác thực; nhà Tây Chu thiết lập học thuyết Thiên Mệnh (天命) định hình tư tưởng chính trị Trung Hoa suốt hơn hai thiên niên kỷ.",
      timeline: [
        "~2070–1600 TCN: Triều Hạ trong sử thư truyền thống; di chỉ Nhị Lý Đầu (Hà Nam) phản ánh đô thị đồng thau sơ kỳ (học giới vẫn tranh luận việc đồng nhất trực tiếp Nhị Lý Đầu với triều Hạ).",
        "~1600–1046 TCN: Nhà Thương – kinh đô ổn định nhất tại Ân Khư (An Dương, Hà Nam) từ đời Bàn Canh; đỉnh cao văn tự Giáp Cốt (甲骨文) và đỉnh đồng Tư Mẫu Mậu.",
        "1046 TCN: Trận Mục Dã – Chu Vũ Vương diệt Thương Trụ Vương, lập nhà Tây Chu tại Phong Cảo (Tây An).",
        "~1040 TCN: Chu Công Đán chế tác lễ nhạc, củng cố chế độ phân phong (封建) và tông pháp.",
        "771 TCN: Khuyển Nhung phá Cảo Kinh, Chu Bình Vương dời đô sang Lạc Ấp, mở đầu thời Đông Chu."
      ],
      politics:
        "Nhà Thương vận hành theo mô hình liên minh vương quốc thần quyền (vua đồng thời là đại vu chiêm bốc). Nhà Tây Chu thiết lập chế độ 'Phong kiến thân thích' (分封制) kết hợp Tông pháp đích trưởng tử (宗法制) và 'Lễ nhạc chế' (礼乐制) cùng ý thức hệ Thiên Mệnh (天命无常, 惟德是辅).",
      economySociety:
        "Sở hữu ruộng đất danh nghĩa thuộc Chu Thiên tử ('Phổ thiên chi hạ, mạc phi vương thổ' – Kinh Thi), phân cấp theo chế độ tỉnh điền (học giới hiện đại xem tỉnh điền phần lớn là mô hình lý tưởng hóa thời Chiến Quốc hơn là áp dụng đồng nhất). Lao động chủ yếu là nông dân công xã và nô lệ chiến tranh.",
      figures: [
        "Vua Thang nhà Thương (商汤) & Y Doãn (伊尹).",
        "Phụ Hảo (妇好) – vương hậu kiêm nữ tướng đời Vũ Đinh, mộ táng còn nguyên vẹn tại Ân Khư.",
        "Chu Văn Vương (周文王), Chu Vũ Vương (周武王) và Chu Công Đán (周公旦)."
      ],
      philosophyIntellectual:
        "Bước chuyển từ thần quyền tuyệt đối thời Thương (tôn thờ Thượng Đế và tổ tiên qua bói toán xương thú) sang nhân văn đạo đức chính trị thời Chu ('Kính đức bảo dân' 敬德保民). Kinh Dịch (phần quái từ/hào từ) và Thượng Thư bắt đầu tích tụ từ thời kỳ này.",
      culturalAchievements: [
        "Chữ Giáp Cốt (甲骨文) – hệ thống văn tự hoàn chỉnh đầu tiên còn lưu giữ bằng vật chứng đương đại.",
        "Kỹ thuật đúc đồng thau ghép khuôn đất (đỉnh Tư Mẫu Mậu nặng 832,84 kg, đồ đồng Kim Văn).",
        "Kinh Thi (诗经) – tập thơ cổ nhất phản ánh đời sống dân gian và lễ nghi Tây Chu."
      ],
      mapData: {
        capitals: "Nhị Lý Đầu (Lạc Dương), Ân Khư (An Dương), Phong Cảo (Tây An)",
        territory: "Trung du và hạ du Hoàng Hà, mở rộng mạng lưới chư hầu xuống lưu vực Hoài Hà và trung lưu Hán Thủy.",
        routes: "Đường vận chuyển đồng, thiếc và muối từ Trung Nguyên xuống lưu vực Trường Giang."
      },
      primarySources: [
        {
          title: "Thượng thư – Chu thư (尚书·周书)",
          url: "https://ctext.org/shang-shu",
          note: "Văn kiện chính trị cổ nhất về học thuyết Thiên Mệnh và lễ trị Tây Chu (một số thiên là bản Ngụy Cổ văn đời sau)."
        },
        {
          title: "Tư liệu Giáp Cốt văn Ân Khư – Viện Khảo cổ học Trung Quốc",
          note: "Hơn 150.000 mảnh mai rùa và xương thú khắc chữ xác nhận phả hệ vương thất nhà Thương trùng khớp với Sử ký."
        }
      ]
    },
    {
      id: "spring-autumn-warring",
      order: 3,
      nameVi: "Xuân Thu – Chiến Quốc",
      nameEn: "Spring and Autumn and Warring States",
      nameZh: "春秋战国",
      nameZhTrad: "春秋戰國",
      span: "770 – 221 TCN",
      overview:
        "Thời đại biến động cấu trúc sâu sắc nhất lịch sử cổ đại Trung Hoa ('Chu thất suy vi, lễ băng nhạc hoại'). Sự tan rã của trật tự phong kiến quý tộc Tây Chu, sự phổ cập đồ sắt – cày trâu và tầng lớp 'Sĩ' (士) tạo nên 'Bách gia chư tử' (诸子百家) – thời kỳ trục tâm (Axial Age) đặt nền móng cho toàn bộ triết học Trung Quốc.",
      timeline: [
        "770–476 TCN: Thời Xuân Thu – Ngũ Bá tranh hùng (Tề Hoàn Công, Tấn Văn Công, Sở Trang Vương...).",
        "551–479 TCN: Khổng Tử hoạt động giảng học, san định Lục Kinh.",
        "475–221 TCN: Thời Chiến Quốc – Thất Hùng (Tần, Sở, Tề, Yên, Triệu, Ngụy, Hàn) chuyển sang chiến tranh tổng lực.",
        "356 TCN: Thương Ưởng biến pháp ở nước Tần (tư hữu hóa ruộng đất, thưởng quân công, lập chế độ quận huyện).",
        "230–221 TCN: Tần Thủy Hoàng lần lượt chinh phục sáu nước, thống nhất Trung Hoa."
      ],
      politics:
        "Chuyển từ chiến tranh nghi thức của quý tộc (Xuân Thu) sang nhà nước quan liêu tập quyền và chiến tranh tiêu hao toàn dân (Chiến Quốc). Thể chế Quận Huyện thay thế dần lãnh địa thế tập, quan lại được tuyển chọn dựa vào năng lực và quân công.",
      economySociety:
        "Cách mạng nông nghiệp nhờ công cụ sắt và thủy lợi quy mô lớn (Đô Giang Yển ở Thục, kênh Trịnh Quốc ở Tần). Kinh tế tiền tệ (tiền đao, tiền bố, tiền đồng tròn lỗ vuông) và tầng lớp thương nhân lớn (Lã Bất Vi, Bạch Khuê) trỗi dậy mạnh mẽ. Xã hội phân hóa thành bốn tầng lớp Tứ dân (Sĩ – Nông – Công – Thương).",
      figures: [
        "Khổng Tử (孔子), Mạnh Tử (孟子), Tuân Tử (荀子).",
        "Lão Tử (老子), Trang Tử (庄子).",
        "Mặc Tử (墨子), Hàn Phi Tử (韩非子), Thương Ưởng (商鞅), Tôn Vũ (孙武)."
      ],
      philosophyIntellectual:
        "Sự bùng nổ chưa từng có của Chư Tử Bách Gia: Nho gia đề cao Nhân – Lễ; Đạo gia đề cao Đạo – Vô vi; Mặc gia chủ trương Kiêm ái – Phi công; Pháp gia nhấn mạnh Pháp – Thuật – Thế; Danh gia biện luận danh thực; Binh gia hệ thống hóa chiến lược; Âm Dương gia quy nạp vũ trụ.",
      culturalAchievements: [
        "Sáng tác các kinh điển đặt nền móng tư tưởng: 《论语》, 《道德经》, 《庄子》, 《墨子》, 《韩非子》, 《孙子兵法》.",
        "Sở Từ (楚辞) của Khuất Nguyên – đỉnh cao thi ca lãng mạn phương Nam.",
        "Bộ chuông đồng Tăng Hầu Ất (曾侯乙编钟) minh chứng trình độ âm luật và luyện kim kiệt xuất."
      ],
      mapData: {
        capitals: "Lạc Ấp (Đông Chu), Lâm Truy (Tề), Hàm Dương (Tần), Dĩnh (Sở)",
        territory: "Mở rộng mạnh sang lưu vực Trường Giang (Sở, Ngô, Việt), Tứ Xuyên (Ba, Thục) và vùng biên viễn phía Bắc (Triệu, Yên).",
        routes: "Mạng lưới giao thương liên quốc qua các tuyến sông Hoàng Hà – Hoài Thủy – Trường Giang."
      },
      primarySources: [
        {
          title: "Tả truyện (左传) & Chiến Quốc sách (战国策)",
          url: "https://ctext.org/chun-qiu-zuo-zhuan",
          note: "Biên niên sử và tư liệu ngoại giao – chiến lược quan trọng nhất của giai đoạn Đông Chu."
        },
        {
          title: "Quách Điếm Sở Mộ Trúc Giản (郭店楚墓竹简)",
          note: "Bản chép tay trên thẻ tre (thế kỷ IV TCN) chứa bản cổ nhất của Đạo Đức Kinh và nhiều thiên Nho gia đã thất truyền."
        }
      ]
    },
    {
      id: "qin-han",
      order: 4,
      nameVi: "Tần – Hán",
      nameEn: "Qin and Han",
      nameZh: "秦汉",
      nameZhTrad: "秦漢",
      span: "221 TCN – 220 SCN",
      overview:
        "Thời kỳ thiết lập nhà nước đế chế thống nhất đầu tiên và định hình bản sắc tộc người – văn hóa 'Hán' (汉族, 汉字). Nhà Tần xây dựng bộ khung hành chính tập quyền (Hoàng đế, Tam công Cửu khanh, Quận huyện) và chuẩn hóa văn tự, đo lường; nhà Hán (Tây Hán và Đông Hán) mềm hóa chế độ cai trị bằng 'Ngoại Nho nội Pháp', mở thông Con đường Tơ lụa và có những tương tác lịch sử trực tiếp đầu tiên với vùng Lĩnh Nam và Giao Chỉ (Bắc Bộ Việt Nam).",
      timeline: [
        "221 TCN: Doanh Chính xưng Thủy Hoàng Đế, thống nhất chữ viết (Tiểu Triện), tiền tệ, đo lường và trục xe.",
        "213–212 TCN: Đốt sách chôn Nho (Phần thư khanh Nho) – sự kiện gây tranh cãi lớn về quy mô thực tế trong sử học.",
        "202 TCN: Lưu Bang lập nhà Tây Hán, đóng đô ở Trường An.",
        "138–126 TCN: Trương Khiên đi sứ Tây Vực, đặt nền móng cho Con đường Tơ lụa.",
        "134 TCN: Hán Vũ Đế tiếp thu đề xuất 'Bãi truất bách gia, độc tôn Nho thuật' của Đổng Trọng Thư.",
        "111 TCN: Nhà Tây Hán sáp nhập nước Nam Việt, đặt chín quận ở Lĩnh Nam và Bắc Bộ Việt Nam (Giao Chỉ, Cửu Chân, Nhật Nam).",
        "25–220 SCN: Nhà Đông Hán (đô Lạc Dương), phát triển kỹ thuật làm giấy (Thái Luân, 105 SCN) và tiếp nhận Phật giáo từ Trung Á."
      ],
      politics:
        "Thiết lập thể chế Hoàng đế tập quyền trung ương (Quân chủ chuyên chế trung ương tập quyền). Thời Hán Vũ Đế áp dụng thực chất mô hình 'Bá vương đạo tạp chi' (ngoài dùng lễ giáo Nho gia để hợp thức hóa đạo đức, trong dùng luật pháp và kiểm soát của Pháp gia), đồng thời triển khai chế độ Sát cử (察举制) tuyển chọn hiền tài.",
      economySociety:
        "Kinh tế nông nghiệp tiểu nông là gốc ('Trọng nông ức thương'), song thời Tây Hán quốc hữu hóa muối – sắt (Diêm thiết luận) để tài trợ chiến tranh với Hung Nô. Thời Đông Hán chứng kiến sự lớn mạnh của các đại hào tộc điền trang (Hào cường địa chủ), dẫn đến xung đột phân hóa giai cấp và khởi nghĩa Khăn Vàng (184 SCN).",
      figures: [
        "Tần Thủy Hoàng (秦始皇) & Lý Tư (李斯).",
        "Hán Vũ Đế (汉武帝), Trương Khiên (张骞), Hoắc Khứ Bệnh (霍去病).",
        "Tư Mã Thiên (司马迁), Ban Cố (班固), Đổng Trọng Thư (董仲舒), Thái Luân (蔡伦), Trương Hành (张衡)."
      ],
      philosophyIntellectual:
        "Kinh học đời Hán (汉代经学) kết hợp Nho gia với học thuyết Âm Dương Ngũ Hành thành hệ thống vũ trụ luận – chính trị 'Thiên nhân cảm ứng' (Đổng Trọng Thư). Cuối Đông Hán, Đạo giáo tôn giáo sơ khai (Thái Bình Đạo, Ngũ Đấu Mễ Đạo) hình thành và Phật giáo du nhập.",
      culturalAchievements: [
        "Sử ký (史记) của Tư Mã Thiên – bộ thông sử kỷ truyện đầu tiên của Trung Hoa.",
        "Cải tiến kỹ thuật làm giấy (Thái Luân) và phát minh địa động nghi (Trương Hành).",
        "Binh Mã Dũng (兵马俑) thời Tần và nghệ thuật gạch khắc – lụa vẽ Mã Vương Đôi thời Hán."
      ],
      mapData: {
        capitals: "Hàm Dương (Tần), Trường An (Tây Hán), Lạc Dương (Đông Hán)",
        territory: "Từ đồng bằng Trung Nguyên mở rộng tới Hà Tây hành lang, Tây Vực (Tân Cương), Triều Tiên bán đảo và Lĩnh Nam / Giao Chỉ.",
        routes: "Con đường Tơ lụa trên bộ (Trường An – Đôn Hoàng – Trung Á – La Mã) và Con đường Tơ lụa trên biển sơ kỳ qua Hợp Phố – Giao Chỉ."
      },
      primarySources: [
        {
          title: "Sử ký (史记) & Hán thư (汉书)",
          url: "https://ctext.org/shiji",
          note: "Hai bộ chính sử đứng đầu trong Nhị thập tứ sử, bản hiệu điểm của Trung Hoa Thư Cục là chuẩn mực học thuật."
        },
        {
          title: "Diêm thiết luận (盐铁论)",
          url: "https://ctext.org/yan-tie-lun",
          note: "Biên bản cuộc tranh luận kinh tế năm 81 TCN về độc quyền nhà nước (Pháp gia) đối lập thị trường tự do (Nho gia)."
        }
      ]
    },
    {
      id: "three-kingdoms",
      order: 5,
      nameVi: "Tam Quốc",
      nameEn: "Three Kingdoms",
      nameZh: "三国",
      nameZhTrad: "三國",
      span: "220 – 280 SCN",
      overview:
        "Thời kỳ phân liệt tam phân thiên hạ giữa Tào Ngụy (phương Bắc), Thục Hán (Tây Nam) và Đông Ngô (Đông Nam) sau sự sụp đổ thực tế của Đông Hán. Dù chiến tranh liên miên và dân số suy giảm nghiêm trọng, đây là giai đoạn thúc đẩy khai khẩn vùng Giang Nam – Tứ Xuyên và phát triển tư tưởng Huyền học.",
      timeline: [
        "208 SCN: Trận Xích Bích – liên quân Tôn Quyền – Lưu Bị đánh bại Tào Tháo, định hình thế chân vạc.",
        "220 SCN: Tào Phi phế Hán Hiến Đế, lập nhà Ngụy (sử gọi thời Tam Quốc chính thức bắt đầu).",
        "221–222 SCN: Lưu Bị lập Thục Hán tại Thành Đô; Tôn Quyền xưng Ngô Vương tại Kiến Nghiệp (Nam Kinh).",
        "263 SCN: Ngụy diệt Thục Hán.",
        "265–280 SCN: Tư Mã Viêm lập Tây Tấn, thống nhất Đông Ngô năm 280."
      ],
      politics:
        "Tào Ngụy áp dụng chế độ Đồn điền và Cửu phẩm trung chính chế (九品中正制) – vô tình củng cố quyền thế của các thế gia đại tộc (Sĩ tộc). Thục Hán do Gia Cát Lượng trị quốc theo lối pháp trị nghiêm minh. Đông Ngô dựa vào sự hợp tác giữa chính quyền Tôn thị và hào tộc bản địa Giang Nam.",
      economySociety:
        "Bắc phương phục hồi nông nghiệp nhờ chính sách đồn điền quân – dân của Tào Tháo. Đông Ngô phát triển đóng tàu viễn dương, giao thương qua biển Hoa Đông và khu vực Lĩnh Nam – Giao Châu (sự kiện Sĩ Nhiếp tại Giao Châu và khởi nghĩa Bà Triệu 248 SCN ở Việt Nam).",
      figures: [
        "Tào Tháo (曹操), Gia Cát Lượng (诸葛亮), Lưu Bị (刘备), Tôn Quyền (孙权), Tư Mã Ý (司马懿).",
        "Vương Bật (王弼), Kê Khang (稽康), Nguyễn Tịch (阮籍) – đại biểu Huyền học thời Ngụy."
      ],
      philosophyIntellectual:
        "Kinh học câu nệ đời Hán suy tàn, nhường chỗ cho Huyền học Ngụy-Tấn (魏晋玄学) dung hợp Chu Dịch, Lão Tử, Trang Tử ('Tam Huyền') nhằm tìm kiếm bản thể tự nhiên ('Dĩ vô vi bản').",
      culturalAchievements: [
        "Kiến An phong cốt (建安风骨) trong thi ca (Tào Thực, Tào Phi, Vương Xán).",
        "Tam Quốc chí (三国志) của Trần Thọ – sử liệu chính thống (cần phân biệt rõ với tiểu thuyết Tam quốc diễn nghĩa đời Minh).",
        "Công trình toán học Cửu chương toán thuật chú của Lưu Huy (tính số Pi chính xác tới 3,1416)."
      ],
      mapData: {
        capitals: "Lạc Dương (Ngụy), Thành Đô (Thục), Kiến Nghiệp / Nam Kinh (Ngô)",
        territory: "Ngụy kiểm soát Trung Nguyên – Hà Bắc; Thục giữ Tứ Xuyên – Hán Trung; Ngô làm chủ hạ lưu Trường Giang và Lĩnh Nam.",
        routes: "Tuyến hàng hải ven biển từ Đông Ngô qua Giao Châu và Đông Nam Á; tuyến mậu dịch Lục lộ phía Bắc."
      },
      primarySources: [
        {
          title: "Tam quốc chí (三国志) – Trần Thọ, Bùi Tùng Chi chú",
          url: "https://ctext.org/text.pl?node=603344",
          note: "Nguồn sử liệu chuẩn mực nhất; bản chú thích của Bùi Tùng Chi bổ sung hàng trăm tư liệu tản lạc thời Ngụy-Tấn."
        }
      ]
    },
    {
      id: "jin-northern-southern",
      order: 6,
      nameVi: "Lưỡng Tấn – Nam Bắc Triều",
      nameEn: "Jin and Northern and Southern Dynasties",
      nameZh: "两晋南北朝",
      nameZhTrad: "兩晉南北朝",
      span: "265 – 589 SCN",
      overview:
        "Gần ba thế kỷ phân chia Bắc – Nam kèm theo cuộc đại di cư và dung hợp dân tộc lớn chưa từng có ('Ngũ Hồ loạn Hoa' ở phương Bắc và 'Y quan nam độ' đưa tinh hoa Trung Nguyên xuống phương Nam). Đây là giai đoạn Phật giáo phát triển bùng nổ thành tôn giáo đại chúng và nghệ thuật thư pháp, hội họa, điêu khắc hang đá đạt đỉnh cao.",
      timeline: [
        "265–316 SCN: Tây Tấn thống nhất ngắn ngủi rồi sụp đổ vì Loạn Bát Vương và biến cố Vĩnh Gia (311).",
        "317–420 SCN: Đông Tấn tại Kiến Khang (Nam Kinh); phương Bắc trải qua thời kỳ Ngũ Hồ Thập Lục Quốc.",
        "420–589 SCN: Nam Bắc Triều đối lập: Nam triều (Tống, Tề, Lương, Trần) và Bắc triều (Bắc Ngụy, Đông/Tây Ngụy, Bắc Tề, Bắc Chu).",
        "493–499 SCN: Bắc Ngụy Hiếu Văn Đế cải cách Hán hóa toàn diện, dời đô từ Bình Thành (Đại Đồng) về Lạc Dương."
      ],
      politics:
        "Chính trị 'Môn phiệt Sĩ tộc' (门阀士族) thống trị Nam triều ('Vương dữ Mã, cộng thiên hạ'). Ở phương Bắc, các triều đại gốc Tiên Ti như Bắc Ngụy kết hợp quý tộc du mục với quan chế Hán, ban hành chế độ Quân điền (均田制) và Phủ binh chế (府兵制) tạo tiền đề trực tiếp cho đế chế Tùy-Đường.",
      economySociety:
        "Kinh tế Giang Nam bắt đầu vươn lên sánh ngang rồi vượt trội phương Bắc nhờ nhân lực di cư, kỹ thuật thủy lợi và khai khẩn đất mới. Đạo viện Phật giáo tích tụ ruộng đất và phát triển 'tự viện kinh tế' (cho vay, xay xát thủy lực).",
      figures: [
        "Vương Hi Chi (王羲之) – Thư thánh với Lan Đình Tập Tự.",
        "Đào Uyên Minh (陶渊明) – thi nhân điền viên.",
        "Pháp Hiển (法显) – cao tăng hành hương sang Ấn Độ (399–412).",
        "Tổ Xung Chi (祖冲之) – nhà toán học, thiên văn học.",
        "Bắc Ngụy Hiếu Văn Đế (北魏孝文帝)."
      ],
      philosophyIntellectual:
        "Cuộc hội tụ và tranh luận Tam giáo (Nho – Phật – Đạo). Phật giáo Trung Quốc chuyển từ 'Cách nghĩa' (dùng thuật ngữ Lão-Trang dịch kinh) sang các tông phái bản địa hóa sơ kỳ (Cưu-ma-la-thập dịch kinh ở Trường An; Huệ Viễn lập Tịnh Độ; Phạm Chẩn viết Thần diệt luận).",
      culturalAchievements: [
        "Hang đá Vân Cương (Đại Đồng), Long Môn (Lạc Dương) và Mạc Cao (Đôn Hoàng).",
        "Thư pháp hành thư đỉnh cao (Lan Đình Tập Tự – Vương Hi Chi) và lý luận hội họa Lục pháp (Tạ Hách).",
        "Văn tâm điêu long (文心雕龙) của Lưu Hiệp – kiệt tác phê bình văn học cổ điển; Tề dân yếu thuật (齐民要术) về nông học."
      ],
      mapData: {
        capitals: "Kiến Khang / Nam Kinh (Nam triều), Bình Thành / Lạc Dương / Trường An (Bắc triều)",
        territory: "Phân chia dọc tuyến Hoài Hà – Tần Lĩnh; phương Bắc dung hợp Tiên Ti, Hung Nô, Khương, Đê, Yết với người Hán.",
        routes: "Giao thương Con đường Tơ lụa cực thịnh dưới thời Bắc Ngụy – Bắc Chu; tuyến hành hương Phật giáo Trung Á – Nam Á."
      },
      primarySources: [
        {
          title: "Thế thuyết tân ngữ (世说新语) – Lưu Nghĩa Khánh",
          url: "https://ctext.org/shi-shuo-xin-yu",
          note: "Ghi chép sinh động phong thái thanh đàm, thẩm mỹ và tâm thức sĩ tộc Ngụy-Tấn."
        },
        {
          title: "Lạc Dương Già Lam ký (洛阳伽蓝记) – Dương Huyễn Chi",
          note: "Tư liệu khảo tả đô thị và chùa chiền Lạc Dương thế kỷ VI."
        }
      ]
    },
    {
      id: "sui-tang",
      order: 7,
      nameVi: "Tùy – Đường",
      nameEn: "Sui and Tang",
      nameZh: "隋唐",
      nameZhTrad: "隋唐",
      span: "581 – 907 SCN",
      overview:
        "Đỉnh cao hoàng kim của văn minh Trung Hoa thời trung đại: tái thống nhất lục địa, khai thông Đại Vận Hà, thiết lập chế độ Tam tỉnh Lục bộ và Khoa cử (科举制), đạt mức độ cởi mở đa văn hóa bậc nhất Đông Á. Văn hóa Trường An lan tỏa sâu rộng sang Nhật Bản (Bình An Kinh), Triều Tiên (Tân La) và Việt Nam (thời Bắc thuộc và tiền tự chủ).",
      timeline: [
        "581–618 SCN: Nhà Tùy thống nhất Trung Hoa, đào Đại Vận Hà nối Trường Giang – Hoàng Hà và mở đầu Khoa cử.",
        "618 SCN: Lý Uyên lập nhà Đường, đóng đô Trường An.",
        "627–649 SCN: Trinh Quán chi trị (Đường Thái Tông) – cải cách pháp luật, dung nạp can gián.",
        "690–705 SCN: Võ Tắc Thiên lên ngôi nữ hoàng đế duy nhất trong chính sử Trung Hoa (nhà Võ Chu).",
        "713–755 SCN: Khai Nguyên thịnh thế (Đường Huyền Tông), kết thúc bằng Loạn An Sử (755–763).",
        "780 SCN: Dương Viêm cải cách Thuế Lưỡng Thuế (两税法) thay chế độ Tô-Dung-Điều.",
        "907 SCN: Chu Ôn cướp ngôi nhà Đường, mở ra thời Ngũ Đại Thập Quốc."
      ],
      politics:
        "Chế độ 'Tam tỉnh Lục bộ' (Trung thư soạn thảo, Môn hạ thẩm định, Thượng thư thi hành cùng Lục bộ Lại-Hộ-Lễ-Binh-Hình-Công) tạo cơ chế kiềm chế quyền lực khá khoa học. Khoa cử từng bước thay thế Môn phiệt Sĩ tộc, mở đường thăng tiến cho tầng lớp hàn sĩ.",
      economySociety:
        "Hệ thống Quân điền nửa đầu thời Đường chuyển sang sở hữu ruộng đất tự do và Thuế Lưỡng Thuế (đánh thuế theo tài sản, hai vụ Hè-Thu) sau Loạn An Sử. Kinh tế thương mại phát triển mạnh với tiền gửi 'Phi tiền' (飞钱 – tiền thân của hối phiếu), phường thị ban đêm dần nới lỏng và cộng đồng thương nhân Ba Tư – Túc Đặc cư ngụ tại Trường An, Quảng Châu.",
      figures: [
        "Đường Thái Tông (唐太宗), Võ Tắc Thiên (武则天), Ngụy Trưng (魏征).",
        "Huyền Trang (玄奘) – dịch kinh và viết Đại Đường Tây Vực ký.",
        "Lý Bạch (李白), Đỗ Phủ (杜甫), Bạch Cư Dị (白居易), Hàn Dũ (韩愈), Liễu Tông Nguyên (柳宗元).",
        "Nhan Chân Khanh (颜真卿), Ngô Đạo Tử (吴道子)."
      ],
      philosophyIntellectual:
        "Phật giáo Trung Hoa bước vào thời kỳ bản địa hóa rực rỡ với Hoa Nghiêm, Thiên Thai, Duy Thức và đặc biệt là Thiền Tông (Huệ Năng). Nửa sau thời Đường, phong trào Cổ văn vận động (Hàn Dũ) khởi xướng sự phục hưng Nho học, mở đường cho Lý học đời Tống.",
      culturalAchievements: [
        "Đường thi (唐诗) – hơn 48.000 bài còn lưu trong Toàn Đường thi.",
        "Kỹ thuật khắc bản in (Tâm Kinh / Kim Cương Kinh bản in năm 868 tại Đôn Hoàng).",
        "Gốm Đường Tam Thái (唐三彩), thư pháp Khải thư chuẩn mực và quy hoạch đô thị Trường An."
      ],
      mapData: {
        capitals: "Trường An (Tây An) và Đông đô Lạc Dương",
        territory: "Vươn tới Tây Vực (An Tây Đô hộ phủ), Mông Cổ, Đông Bắc và khu vực An Nam Đô hộ phủ.",
        routes: "Đại Vận Hà Bắc–Nam; Con đường Tơ lụa đất liền qua Hà Tây; Con đường Tơ lụa trên biển từ Quảng Châu – Tuyền Châu qua Biển Đông tới Vịnh Ba Tư."
      },
      primarySources: [
        {
          title: "Cựu Đường thư (旧唐书) & Tân Đường thư (新唐书)",
          url: "https://ctext.org/wiki.pl?if=gb&res=582914",
          note: "Bộ đôi chính sử triều Đường; cần đối chiếu thêm Tư trị thông giám của Tư Mã Quang."
        },
        {
          title: "Trinh Quán chính yếu (贞观政要) – Ngô Căng",
          note: "Tác phẩm lý luận chính trị – quản trị được nghiên cứu rộng rãi tại Đông Á (Trung Quốc, Nhật Bản, Triều Tiên, Việt Nam)."
        }
      ]
    },
    {
      id: "five-dynasties",
      order: 8,
      nameVi: "Ngũ Đại Thập Quốc",
      nameEn: "Five Dynasties and Ten Kingdoms",
      nameZh: "五代十国",
      nameZhTrad: "五代十國",
      span: "907 – 979 SCN",
      overview:
        "Giai đoạn quá độ giữa Đường và Tống: phương Bắc thay đổi nhanh chóng 5 triều đại quân phiệt liên tiếp (Hậu Lương, Hậu Đường, Hậu Tấn, Hậu Hán, Hậu Chu) trong khi phương Nam chia thành hơn 10 vương quốc tương đối ổn định và phồn vinh. Đây cũng là bước ngoặt Việt Nam giành quyền tự chủ hoàn toàn (chiến thắng Bạch Đằng 938 của Ngô Quyền trước Nam Hán).",
      timeline: [
        "907 SCN: Hậu Lương thành lập; các vương quốc phương Nam như Ngô Việt, Tiền Thục, Nam Hán, Mân lần lượt hình thành.",
        "936 SCN: Thạch Kính Đường cắt Yên Vân Thập Lục Châu cho Khiết Đan (nhà Liêu), để lại điểm yếu phòng thủ biên giới Bắc suốt nhiều thế kỷ.",
        "938 SCN: Ngô Quyền đánh bại quân Nam Hán trên sông Bạch Đằng, chấm dứt hơn 1.000 năm Bắc thuộc tại Việt Nam.",
        "954–959 SCN: Chu Thế Tông cải cách chính trị, quân sự và kinh tế ở Hậu Chu, đặt nền móng thống nhất.",
        "960–979 SCN: Triệu Khuông Dẫn lập Bắc Tống và lần lượt thu phục Thập Quốc."
      ],
      politics:
        "Phương Bắc chứng kiến sự suy tàn triệt để của quý tộc Sĩ tộc cũ và sự trỗi dậy của tầng lớp võ tướng phiên trấn, buộc các nhà lập quốc đời sau (đặc biệt là Tống) phải tìm cách tước binh quyền võ tướng ('Trọng văn khinh võ').",
      economySociety:
        "Trung tâm kinh tế tiếp tục dịch chuyển mạnh về Giang Nam và Phúc Kiến – Quảng Đông (Nam Đường, Ngô Việt, Mân phát triển mạnh nghề chè, lụa, gốm sứ và thương mại hàng hải).",
      figures: [
        "Lý Dục (李煜) – Nam Đường Hậu Chủ, bậc thầy Từ (词).",
        "Chu Thế Tông Sài Vinh (周世宗柴荣) – minh quân cải cách thời Hậu Chu.",
        "Cố Hoành Trung (顾闳中) – tác giả bức họa Hàn Hi Tái dạ yến đồ."
      ],
      philosophyIntellectual:
        "Giai đoạn giao thoa từ Đường Thi sang Tống Từ; Thiền Tông phát triển mạnh 'Ngũ gia thất tông' ở vùng Giang Nam – Phúc Kiến nhờ sự bảo trợ của các nước phương Nam.",
      culturalAchievements: [
        "Nghệ thuật Từ (词) phát triển thành thể loại trữ tình chủ đạo (Hoa Gian tập và Lý Dục).",
        "Hội họa sơn thủy thủy mặc bắt đầu định hình phong cách Kinh Hạo – Quan Đồng (phương Bắc) và Đổng Nguyên – Cự Nhiên (Giang Nam).",
        "In khắc bản quy mô lớn các bộ kinh điển Nho-Phật."
      ],
      mapData: {
        capitals: "Khai Phong (Biện Lương – phương Bắc), Hàng Châu (Ngô Việt), Kim Lăng (Nam Đường)",
        territory: "Phương Bắc xoay quanh Hoàng Hà; phương Nam gồm 10 chính quyền khu vực từ Thục đến Lĩnh Nam.",
        routes: "Giao thương cảng biển Minh Châu (Ninh Ba), Tuyền Châu và Quảng Châu."
      },
      primarySources: [
        {
          title: "Cựu Ngũ Đại sử (旧五代史) & Tân Ngũ Đại sử (新五代史 – Âu Dương Tu)",
          note: "Ghi chép trực tiếp biến động chính trị – xã hội thế kỷ X."
        }
      ]
    },
    {
      id: "song",
      order: 9,
      nameVi: "Nhà Tống (Bắc Tống & Nam Tống)",
      nameEn: "Song Dynasty",
      nameZh: "宋朝",
      nameZhTrad: "宋朝",
      span: "960 – 1279 SCN",
      overview:
        "Dù thường đối mặt áp lực quân sự từ các đế chế phương Bắc (Liêu, Tây Hạ, Kim, Mông Cổ), nhà Tống lại là thời kỳ rực rỡ bậc nhất về kinh tế thị trường đô thị, khoa học kỹ thuật, văn hóa sĩ đại phu và triết học Lý học. Học giả Nhật Bản Naito Konan xem chuyển biến Đường–Tống là khởi đầu của 'Cận thế' Trung Hoa.",
      timeline: [
        "960 SCN: Triệu Khuông Dẫn lập Bắc Tống (kinh đô Khai Phong), thực hiện 'Bôi tửu thích binh quyền'.",
        "1069 SCN: Vương An Thạch thực hiện Biến pháp Hy Ninh (cải cách tài chính, nông nghiệp, quân sự).",
        "1075–1077 SCN: Xung đột và hòa ước biên giới Tống–Việt (nhà Lý: Lý Thường Kiệt chủ động xuất quân rồi phòng tuyến sông Như Nguyệt).",
        "1127 SCN: Biến cố Tĩnh Khang – quân Kim chiếm Khai Phong; Triệu Cấu lập Nam Tống tại Lâm An (Hàng Châu).",
        "1279 SCN: Hải chiến Nhai Môn – Nam Tống diệt vong trước nhà Nguyên."
      ],
      politics:
        "Thể chế 'Hoàng đế và Sĩ đại phu cộng trị thiên hạ': Khoa cử trở thành con đường tiến thân chủ đạo với cơ chế rọc phách (Hồ danh), chép lại bài (Đằng lục) để đảm bảo công bằng. Tuy nhiên sự cồng kềnh bộ máy ('Tam nhũng': nhũng quan, nhũng binh, nhũng phí) gây gánh nặng ngân sách.",
      economySociety:
        "Cách mạng thương mại đô thị: bỏ chế độ giới nghiêm phường-thị, xuất hiện tiền giấy đầu tiên trên thế giới ('Giao tử' 交子 ở Tứ Xuyên năm 1024), thuế thương mại vượt thuế nông nghiệp ở nhiều giai đoạn, bùng nổ ngoại thương đường biển qua Tuyền Châu và Quảng Châu (Hải thương ty).",
      figures: [
        "Tô Thức / Tô Đông Pha (苏轼), Âu Dương Tu (欧阳修), Vương An Thạch (王安石), Tư Mã Quang (司马光).",
        "Chu Hy (朱熹), Trình Hạo (程颢), Trình Di (程颐), Lục Cửu Uyên (陆九渊).",
        "Thẩm Quát (沈括), Lý Thanh Chiếu (李清照), Tân Khí Tật (辛弃疾)."
      ],
      philosophyIntellectual:
        "Sự hình thành Tống-Minh Lý học (宋明理学 / Tân Nho học): Trình–Chu Lý học (Chu Hy tập đại thành: Tứ Thư chương cú tập chú, 'Cách vật trí tri') đối thoại với Tâm học của Lục Cửu Uyên ('Ngô tâm tức thị vũ trụ'). Hệ thống Tứ Thư trở thành chuẩn mực khoa cử Trung Quốc và Việt Nam suốt 700 năm.",
      culturalAchievements: [
        "Ba trong Tứ đại phát minh đạt bước ngoặt ứng dụng: In chữ rời (Tất Thăng), La bàn hàng hải (Mộng Khê Bút Đàm), Thuốc súng quân sự.",
        "Kiệt tác hội họa Thanh Minh Thượng Hà Đồ (Trương Trạch Đoan) và dòng gốm Ngũ đại danh diêu (Nhữ, Quan, Ca, Quân, Định).",
        "Tống Từ (宋词) và Tống bản ấn loát tinh xảo."
      ],
      mapData: {
        capitals: "Đông Kinh Khai Phong (Bắc Tống), Lâm An / Hàng Châu (Nam Tống)",
        territory: "Bắc Tống không thu hồi được Yên Vân 16 châu; Nam Tống giữ biên giới phía Nam sông Hoài – Tần Lĩnh.",
        routes: "Con đường Gốm sứ trên biển (Tuyền Châu, Minh Châu, Quảng Châu đến Đông Nam Á, Ấn Độ Dương)."
      },
      primarySources: [
        {
          title: "Tống sử (宋史) & Tục Tư trị thông giám trường biên (续资治通鉴长编 – Lý Đào)",
          note: "Nguồn tư liệu hành chính và kinh tế – tài chính phong phú bậc nhất thời trung đại."
        },
        {
          title: "Mộng Khê Bút Đàm (梦溪笔谈) – Thẩm Quát",
          url: "https://ctext.org/meng-xi-bi-tan",
          note: "Bách khoa tư liệu khoa học kỹ thuật, địa chất, từ học và âm nhạc thế kỷ XI."
        }
      ]
    },
    {
      id: "yuan",
      order: 10,
      nameVi: "Nhà Nguyên",
      nameEn: "Yuan Dynasty",
      nameZh: "元朝",
      nameZhTrad: "元朝",
      span: "1271 – 1368 SCN",
      overview:
        "Triều đại thống nhất toàn Trung Hoa do quý tộc Mông Cổ (Hốt Tất Liệt) sáng lập, kết nối Trung Quốc vào mạng lưới đế quốc Á–Âu rộng lớn nhất lịch sử nhân loại. Thời kỳ này chứng kiến sự giao lưu sâu rộng Đông–Tây, phát triển kịch nghệ Nguyên Khúc và hệ thống Hành tỉnh (tiền thân của phân cấp tỉnh Trung Quốc hiện đại).",
      timeline: [
        "1271 SCN: Hốt Tất Liệt (Nguyên Thế Tổ) đặt quốc hiệu Đại Nguyên, định đô tại Đại Đô (Bắc Kinh).",
        "1279 SCN: Diệt Nam Tống, hoàn thành thống nhất Trung Quốc.",
        "1285 & 1287–1288 SCN: Ba lần quân Nguyên xâm lược Đại Việt đều bị nhà Trần đẩy lùi.",
        "1313 SCN: Khôi phục chế độ Khoa cử theo chuẩn Tứ Thư của Chu Hy.",
        "1351–1368 SCN: Khởi nghĩa Khăn Đỏ bùng nổ, Chu Nguyên Chương đánh chiếm Đại Đô."
      ],
      politics:
        "Thiết lập chế độ Hành Trung thư tỉnh (行中书省 – gọi tắt là Hành tỉnh/Tỉnh). Thực hành phân tầng dân cư bất bình đẳng trong quản trị (người Mông Cổ, Sắc Mục, Hán nhân, Nam nhân) – học giới hiện đại lưu ý hệ thống 'Tứ đẳng nhân' phản ánh tập quán tuyển dụng – pháp lý hơn là bộ luật phân biệt chủng tộc cứng nhắc duy nhất.",
      economySociety:
        "Phát hành tiền giấy Bảo sao trên phạm vi toàn quốc, mở rộng mạng lưới Trạm dịch (驿站) xuyên Á-Âu, thông suốt cảng Tuyền Châu (Zaytun). Tuy nhiên lạm phát tiền giấy cuối triều và lao dịch thủy lợi gây bất ổn xã hội nghiêm trọng.",
      figures: [
        "Hốt Tất Liệt (忽必烈).",
        "Quan Hán Khanh (关汉卿), Vương Thực Phủ (王实甫) – đại biểu Nguyên Khúc.",
        "Quách Thủ Kính (郭守敬) – nhà thiên văn, thủy lợi (Lịch Thụ Thời).",
        "Triệu Mạnh Phủ (赵孟頫), Hoàng Công Vọng (黄公望), Nghê Toản (倪瓒) – Tứ đại gia hội họa."
      ],
      philosophyIntellectual:
        "Khoa cử bị đình chỉ gần 80 năm đầu triều buộc nhiều trí thức Hán tộc dồn tâm lực vào văn hóa thị dân (hí khúc), y học, toán học và hội họa văn nhân (Văn nhân họa đạt đỉnh cao biểu đạt tâm cảnh).",
      culturalAchievements: [
        "Nguyên Tạp Kịch (元杂剧): Đậu Nga oan (Quan Hán Khanh), Tây Sương ký (Vương Thực Phủ).",
        "Phú Xuân Sơn Cư Đồ (富春山居图) của Hoàng Công Vọng.",
        "Thanh Hoa từ (青花瓷 – gốm hoa lam) Cảnh Đức Trấn dùng chất liệu Coban nhập từ Ba Tư."
      ],
      mapData: {
        capitals: "Đại Đô (Bắc Kinh) và Thượng Đô (Nội Mông)",
        territory: "Bao gồm Trung Nguyên, Giang Nam, Tây Tạng (Tuyên Chính viện quản lý), Vân Nam, Đông Bắc và thảo nguyên Mông Cổ.",
        routes: "Con đường Tơ lụa dưới thời 'Pax Mongolica' (Marco Polo, Ibn Battuta đến Trung Quốc)."
      },
      primarySources: [
        {
          title: "Nguyên sử (元史) – Tống Liêm chủ biên",
          note: "Chính sử triều Nguyên biên soạn gấp rút đầu đời Minh; thường cần đối chiếu với Tân Nguyên sử và sử liệu Ba Tư (Rashid al-Din)."
        }
      ]
    },
    {
      id: "ming",
      order: 11,
      nameVi: "Nhà Minh",
      nameEn: "Ming Dynasty",
      nameZh: "明朝",
      nameZhTrad: "明朝",
      span: "1368 – 1644 SCN",
      overview:
        "Triều đại thống nhất cuối cùng do người Hán thành lập, vừa mang đậm xu hướng tập quyền hoàng quyền (bãi bỏ chức Thừa tướng, thiết lập Nội các và Đông Xưởng/Cẩm Y Vệ) vừa chứng kiến sự trỗi dậy mạnh mẽ của kinh tế hàng hóa, bạc trắng (nhập khẩu từ Nhật Bản và châu Mỹ) và tư tưởng Tâm học giải phóng cá nhân.",
      timeline: [
        "1368 SCN: Chu Nguyên Chương (Minh Thái Tổ) lập nhà Minh tại Ứng Thiên (Nam Kinh).",
        "1405–1433 SCN: Trịnh Hòa bảy lần hạ Tây Dương tới Đông Phi và Vịnh Ba Tư.",
        "1407–1427 SCN: Nhà Minh xâm chiếm Đại Ngu/Đại Việt (thuộc Minh) và thất bại trước khởi nghĩa Lam Sơn của Lê Lợi.",
        "1421 SCN: Minh Thành Tổ (Chu Lệ) chính thức dời đô về Bắc Kinh (xây dựng Tử Cấm Thành).",
        "1570s–1581: Trương Cư Chính cải cách 'Nhất điều biên pháp' (一条鞭法) quy thuế và lao dịch về nộp bằng bạc.",
        "1644 SCN: Khởi nghĩa Lý Tự Thành vào Bắc Kinh; Ngô Tam Quế mở cửa Sơn Hải Quan cho quân Thanh."
      ],
      politics:
        "Hoàng quyền tuyệt đối sau khi Chu Nguyên Chương phế bỏ Tể tướng năm 1380; Đại học sĩ Nội các dần giữ vai trò điều phối thực tế ('Phiếu nghĩ'). Cuối Minh xuất hiện tranh chấp đảng phái gay gắt (Đông Lâm đảng đối đầu hoạn quan Ngụy Trung Hiền).",
      economySociety:
        "Giang Nam hình thành các thị trấn công thương chuyên môn hóa cao (dệt lụa Tô Châu-Hàng Châu, gốm Cảnh Đức Trấn, dệt bông Tùng Giang). Sự du nhập của bạc trắng qua thương mại Toàn cầu (Manila Galleons) và cây trồng Tân Thế Giới (khoai lang, ngô, lạc, thuốc lá) thúc đẩy tăng trưởng dân số lên trên 150 triệu người.",
      figures: [
        "Minh Thái Tổ (朱元璋), Minh Thành Tổ (朱棣), Trịnh Hòa (郑和), Trương Cư Chính (张居正).",
        "Vương Dương Minh (王阳明) – người sáng lập Tâm học Dương Minh ('Tri hành hợp nhất', 'Trí lương tri').",
        "Lý Thời Trân (李时珍), Từ Hà Khách (徐霞客), Tống Ứng Tinh (宋应星), Ngô Thừa Ân, La Quán Trung, Thi Nại Am."
      ],
      philosophyIntellectual:
        "Vương Dương Minh cách mạng hóa Nho học bằng Tâm học (心学), khẳng định 'Mãn nhai nhân giai thị Thánh nhân' (Ai trên phố cũng có thể thành thánh). Cuối Minh, các giáo sĩ Dòng Tên (Matteo Ricci / Lợi Mã Đậu) bắt đầu giao lưu khoa học – thiên văn với sĩ đại phu Trung Hoa (Từ Quang Khải).",
      culturalAchievements: [
        "Tứ đại danh tác tiểu thuyết chương hồi hoàn thiện/lưu truyền rộng: Tam Quốc diễn nghĩa, Thủy Hử, Tây Du Ký, Kim Bình Mai.",
        "Vĩnh Lạc Đại Điển (永乐大典), Bản Thảo Cương Mục (Lý Thời Trân), Thiên Công Khai Vật (Tống Ứng Tinh).",
        "Kiến trúc Tử Cấm Thành, Thiên Đàn và Vạn Lý Trường Thành bằng gạch đá."
      ],
      mapData: {
        capitals: "Nam Kinh (1368–1420), Bắc Kinh (từ 1421)",
        territory: "Trung Quốc bản thổ phía Nam Trường Thành; thiết lập hệ thống Thổ ty ở Tây Nam.",
        routes: "Hải trình Trịnh Hòa; mạng lưới thương mại bạc trắng với Nhật Bản (Nagasaki) và Tây Ban Nha (Manila)."
      },
      primarySources: [
        {
          title: "Minh sử (明史) & Minh thực lục (明实录)",
          note: "Minh thực lục là bộ biên niên sử triều đình ghi chép hàng ngày theo từng đời vua, đặc biệt quan trọng khi nghiên cứu quan hệ Minh – Đại Việt."
        },
        {
          title: "Truyền tập lục (传习录) – Vương Dương Minh",
          url: "https://ctext.org/chuan-xi-lu",
          note: "Tác phẩm cốt lõi của Tâm học Dương Minh."
        }
      ]
    },
    {
      id: "qing",
      order: 12,
      nameVi: "Nhà Thanh",
      nameEn: "Qing Dynasty",
      nameZh: "清朝",
      nameZhTrad: "清朝",
      span: "1644 – 1912 SCN",
      overview:
        "Triều đại phong kiến cuối cùng do quý tộc Mãn Châu (Ái Tân Giác La) thiết lập. Thời Khang–Ung–Càn đạt quy mô lãnh thổ đế chế hiện đại, dân số vượt 400 triệu và khảo cứu học thuật phát triển tột bậc. Từ giữa thế kỷ XIX, cuộc chạm trán với chủ nghĩa thực dân phương Tây (Chiến tranh Nha phiến 1839–1842) đẩy nhà Thanh vào tiến trình cải cách gian nan (Dương Vụ, Mậu Tuất, Tân Chính) trước khi sụp đổ năm 1912.",
      timeline: [
        "1644 SCN: Quân Thanh tiến vào Bắc Kinh; Nam Minh kháng cự đến 1662.",
        "1661–1796 SCN: Thời thịnh trị Khang–Ung–Càn (Khang Hi, Ung Chính, Càn Long), định hình bản đồ đa dân tộc.",
        "1788–1789 SCN: Nhà Thanh can thiệp vào Đại Việt nhưng thất bại trước Quang Trung (Nguyễn Huệ) tại trận Ngọc Hồi – Đống Đa.",
        "1839–1842 SCN: Chiến tranh Nha phiến lần I và Điều ước Nam Kinh – khởi đầu thời kỳ cận đại bán thuộc địa.",
        "1851–1864 SCN: Khởi nghĩa Thái Bình Thiên Quốc gây tổn thất nặng nề vùng Giang Nam.",
        "1861–1895 SCN: Phong trào Dương Vụ (Tự cường) thất bại sau Chiến tranh Giáp Ngọ 1894–1895; Duy tân Bách nhật Mậu Tuất (1898) bị đàn áp.",
        "1911–1912 SCN: Cách mạng Tân Hợi; Hoàng đế Phổ Nghi thoái vị (12/02/1912)."
      ],
      politics:
        "Kết hợp chế độ Bát Kỳ (八旗) của người Mãn với quan chế Nho học Hán tộc, thiết lập Quân Cơ Xứ (军机处) tập trung quyền lực tuyệt đối vào tay Hoàng đế. Thế kỷ XIX chứng kiến quyền lực chuyển dịch từ triều đình trung ương về các tổng đốc địa phương (Tăng Quốc Phiên, Lý Hồng Chương).",
      economySociety:
        "Nông nghiệp thâm canh đạt giới hạn sinh thái trước bùng nổ dân số (150 triệu lên >400 triệu). Thời đầu áp dụng chính sách Quảng Châu Nhất Khẩu Thông Thương (Canton System – Thập tam hàng); sau 1842 mở các thương cảng hiệp ước (Thượng Hải, Thiên Tân, Hán Khẩu...), hình thành công nghiệp hiện đại sơ khai.",
      figures: [
        "Khang Hi (康熙), Ung Chính (雍正), Càn Long (乾隆).",
        "Tào Tuyết Cần (曹雪芹), Bồ Tùng Linh (蒲松龄).",
        "Đới Chấn (戴震), Hoàng Tông Hi (黄宗羲), Cố Viêm Vũ (顾炎武), Vương Phu Chi (王夫之).",
        "Lâm Tắc Từ (林则徐), Tăng Quốc Phiên (曾国藩), Lý Hồng Chương (李鸿章), Khang Hữu Vi (康有为), Lương Khải Siêu (梁启超)."
      ],
      philosophyIntellectual:
        "Thế kỷ XVII-XVIII phát triển Càn Gia Khảo Cứu Học (Hán học / Phác học) đề cao thực chứng văn bản học ('Thực sự cầu thị'). Thế kỷ XIX, Công Dương học (Kim văn kinh học) được Khang Hữu Vi vận dụng làm lý luận cải cách chính trị, đối thoại với tư tưởng phương Tây qua bản dịch của Nghiêm Phục (Thiên diễn luận).",
      culturalAchievements: [
        "Hồng Lâu Mộng (红楼梦) của Tào Tuyết Cần – đỉnh cao tiểu thuyết cổ điển Trung Hoa.",
        "Tứ Khố Toàn Thư (四库全书) – bộ tùng thư lớn nhất lịch sử cổ đại.",
        "Sự hình thành Kinh Kịch (京剧) thời Càn Long – Quang Tự."
      ],
      mapData: {
        capitals: "Bắc Kinh (cung điện mùa hè Viên Minh Viên, Thừa Đức Tị Thử Sơn Trang)",
        territory: "Đạt cực đại hơn 13 triệu km² (bao gồm Nội địa 18 tỉnh, Mãn Châu, Mông Cổ, Tân Cương, Tây Tạng và Đài Loan).",
        routes: "Thương mại trà – lụa – gốm sứ qua Cảng Quảng Châu (đến 1842) và sau đó là Thượng Hải, Hồng Kông."
      },
      primarySources: [
        {
          title: "Thanh thực lục (清实录) & Thanh sử cảo (清史稿)",
          note: "Thanh sử cảo do Triệu Nhĩ Tốn biên soạn thời Dân Quốc, cần đọc kèm hồ sơ lưu trữ Quân cơ xứ tại Bắc Kinh và Đài Bắc."
        }
      ]
    },
    {
      id: "republic-of-china",
      order: 13,
      nameVi: "Trung Hoa Dân Quốc",
      nameEn: "Republic of China (Mainland Era)",
      nameZh: "中华民国",
      nameZhTrad: "中華民國",
      span: "1912 – 1949 SCN",
      overview:
        "Thời kỳ chuyển đổi đầy biến động từ thể chế đế chế sang nền cộng hòa hiện đại: nội chiến quân phiệt Bắc Dương, phong trào Tân Văn Hóa & Ngũ Tứ (1919) tái định hình tư tưởng – ngôn ngữ hiện đại (Bạch thoại văn), cuộc kháng chiến chống Nhật Bản (1937–1945) và nội chiến Quốc–Cộng.",
      timeline: [
        "01/01/1912: Tôn Trung Sơn nhậm chức Đại tổng thống lâm thời tại Nam Kinh.",
        "1915–1919: Phong trào Tân Văn Hóa (Tạp chí Tân Thanh Niên) và Phong trào Ngũ Tứ (04/05/1919).",
        "1921: Đảng Cộng sản Trung Quốc thành lập tại Thượng Hải – Gia Hưng.",
        "1926–1928: Chiến dịch Bắc Phạt của Quốc Dân Đảng, thành lập Chính phủ Quốc dân Nam Kinh.",
        "1937–1945: Kháng chiến toàn dân chống Nhật Bản (từ Sự biến Lư Câu Kiều 07/07/1937).",
        "1946–1949: Nội chiến Quốc–Cộng; chính quyền Quốc Dân Đảng rút ra Đài Loan."
      ],
      politics:
        "Cấu trúc chính trị phân mảnh giữa chính phủ quân phiệt Bắc Dương (1912–1928), chính quyền Quốc Dân Đảng tại Nam Kinh (1927–1937, sau dời về Trùng Khánh thời chiến) và các khu căn cứ Xô-viết / Diên An của Đảng Cộng sản Trung Quốc.",
      economySociety:
        "'Thời kỳ hoàng kim' ngắn ngủi của tư sản dân tộc Trung Quốc (1914–1922) khi công nghiệp nhẹ (dệt may, xay xát) tại Thượng Hải, Vô Tích, Thiên Tân phát triển trong Thế chiến I; tuy nhiên nông thôn chịu tác động nặng của địa tô, thiên tai, lạm phát và chiến tranh liên miên.",
      figures: [
        "Tôn Trung Sơn (孙中山) – Chủ nghĩa Tam Dân.",
        "Lỗ Tấn (鲁迅), Hồ Thích (胡适), Trần Độc Tú (陈独秀), Thái Nguyên Bồi (蔡元培).",
        "Lương Tư Thành (梁思成), Lâm Huy Nhân (林徽因), Từ Bi Hồng (徐悲鸿), Tề Bạch Thạch (齐白石)."
      ],
      philosophyIntellectual:
        "Cuộc đối thoại gay gắt giữa Chủ nghĩa tự do phương Tây (Hồ Thích), Chủ nghĩa Marx (Lý Đại Chiêu, Trần Độc Tú) và Tân Nho gia hiện đại (Hùng Thập Lực, Lương Thấu Minh, Phùng Hữu Lan) nhằm trả lời câu hỏi 'Văn hóa Trung Hoa đi về đâu?'.",
      culturalAchievements: [
        "Cách mạng Bạch thoại văn (白话文) thay thế văn ngôn trong giáo dục và báo chí.",
        "Văn học hiện đại: Lỗ Tấn (AQ chính truyện, Cuồng nhân nhật ký), Mao Thuẫn, Ba Kim, Lão Xá.",
        "Điện ảnh Thượng Hải thập niên 1930 và Trường Đại học Liên hiệp Tây Nam (西南联大) tại Côn Minh."
      ],
      mapData: {
        capitals: "Bắc Kinh (1912–1928), Nam Kinh (1928–1937 & 1946–1949), Trùng Khánh (thủ đô thời chiến 1937–1945)",
        territory: "Gồm Trung Quốc đại lục (nhiều vùng chịu chia cắt bởi quân phiệt và sự chiếm đóng của Nhật 1931–1945).",
        routes: "Đường sắt Bắc–Nam sơ khai, tuyến tiếp vận Miến Điện – Côn Minh (Burma Road) thời Thế chiến II."
      },
      primarySources: [
        {
          title: "Tạp chí Tân Thanh Niên (新青年, 1915–1926)",
          note: "Tư liệu gốc cốt lõi của Phong trào Tân Văn Hóa và Ngũ Tứ."
        }
      ]
    },
    {
      id: "modern-contemporary",
      order: 14,
      nameVi: "Trung Quốc Hiện đại & Đương đại",
      nameEn: "Modern and Contemporary China",
      nameZh: "现当代中国",
      nameZhTrad: "現當代中國",
      span: "1949 – nay",
      overview:
        "Nước Cộng hòa Nhân dân Trung Hoa (PRC) thành lập năm 1949, trải qua giai đoạn kinh tế kế hoạch tập trung (1949–1978) và bước ngoặt Cải cách Mở cửa (改革开放) từ cuối năm 1978. Trong hơn 45 năm qua, Trung Quốc chuyển mình thành nền kinh tế lớn thứ hai thế giới, trung tâm chuỗi cung ứng sản xuất toàn cầu và đang tái định vị văn hóa truyền thống ('Phục hưng văn hóa truyền thống ưu tú') trong kỷ nguyên số.",
      timeline: [
        "01/10/1949: Thành lập nước Cộng hòa Nhân dân Trung Hoa tại Bắc Kinh.",
        "1956: Ban hành bảng chữ Hán Giản thể đợt đầu nhằm phổ cập xóa mù chữ.",
        "1966–1976: Đại Cách mạng Văn hóa gây gián đoạn sâu sắc về giáo dục, di sản và xã hội.",
        "12/1978: Hội nghị Trung ương 3 khóa XI mở ra thời kỳ Cải cách Mở cửa (Đặng Tiểu Bình).",
        "1980–2001: Thành lập Đặc khu Kinh tế (Thâm Quyến, Chu Hải...) và gia nhập WTO (12/2001).",
        "2013–nay: Sáng kiến Vành đai và Con đường (BRI), phát triển kinh tế số, xe điện, AI và nâng tầm 'Tự tin văn hóa'."
      ],
      politics:
        "Thể chế chính trị do Đảng Cộng sản Trung Quốc lãnh đạo, kết hợp bộ máy hành chính tập trung định hướng chiến lược vĩ mô (các Kế hoạch 5 năm – hiện bước vào Kế hoạch 5 năm lần thứ 15 giai đoạn 2026–2030) với phân cấp điều hành kinh tế cho cấp tỉnh và thành phố.",
      economySociety:
        "Chuyển từ kinh tế kế hoạch sang 'Kinh tế thị trường xã hội chủ nghĩa'. Tỷ lệ đô thị hóa tăng từ ~18% (1978) lên hơn 66% hiện nay. Hình thành các cụm đô thị siêu lớn (Bắc Kinh-Thiên Tân-Hà Bắc, Châu thổ Trường Giang, Vùng Vịnh Lớn Quảng Đông-Hồng Kông-Ma Cao) và hệ sinh thái thương mại điện tử hàng đầu thế giới.",
      figures: [
        "Mao Trạch Đông (毛泽东), Chu Ân Lai (周恩来), Đặng Tiểu Bình (邓小平).",
        "Đồ U U (屠呦呦 – Nobel Y học 2015), Viên Long Bình (袁隆平), Mạc Ngôn (莫言 – Nobel Văn học 2012), Lưu Từ Hân (刘慈欣)."
      ],
      philosophyIntellectual:
        "Sự phục hưng nghiên cứu Quốc học (国学热) từ thập niên 1990, tái đánh giá Nho-Đạo-Phật như nguồn lực đạo đức – quản trị và bản sắc văn hóa bên cạnh chủ nghĩa Marx Trung Quốc hóa và khoa học công nghệ hiện đại.",
      culturalAchievements: [
        "Hệ thống đường sắt cao tốc lớn nhất thế giới (>45.000 km), năng lượng tái tạo và hạ tầng thanh toán số.",
        "Văn học mạng, điện ảnh hiện đại (Trương Nghệ Mưu, Giả Chương Kha), trò chơi văn hóa (Black Myth: Wukong) và trào lưu Quốc Triều (国潮).",
        "Bảo tồn di sản phi vật thể và phát triển bảo tàng số (Cố Cung, Đôn Hoàng số hóa)."
      ],
      mapData: {
        capitals: "Bắc Kinh",
        territory: "23 tỉnh (theo phân định hành chính CHNDTH), 5 khu tự trị, 4 thành phố trực thuộc trung ương và 2 đặc khu hành chính Hồng Kông, Ma Cao.",
        routes: "Vành đai Kinh tế Tơ lụa đường bộ (tàu hàng Trung–Âu) và Con đường Tơ lụa trên biển thế kỷ XXI; hành lang kinh tế Trung Quốc – Đông Dương (qua Bằng Tường – Hữu Nghị và Đông Hưng – Móng Cái)."
      },
      primarySources: [
        {
          title: "Cổng Thông tin Quốc vụ viện Trung Quốc (中国政府网)",
          url: "https://www.gov.cn/",
          note: "Nguồn chính thức cho các văn kiện chính sách, sách trắng và báo cáo công tác chính phủ."
        },
        {
          title: "Cục Thống kê Quốc gia Trung Quốc (国家统计局)",
          url: "https://www.stats.gov.cn/",
          note: "Nguồn dữ liệu kinh tế – xã hội và niên giám thống kê chính thức."
        }
      ]
    }
  ],

  timelineEvents: [
    { id: "ev1", year: "~3300–2300 TCN", periodId: "prehistoric", type: "culture", title: "Văn minh Lương Chử & Ngọc khí", zh: "良渚文化与玉礼器", summary: "Hệ thống thủy lợi cổ đại và nghi lễ ngọc Bích–Tông tại hạ lưu Trường Giang." },
    { id: "ev2", year: "~1250–1046 TCN", periodId: "xia-shang-zhou", type: "culture", title: "Văn tự Giáp Cốt Ân Khư", zh: "殷墟甲骨文", summary: "Vật chứng chữ viết Hán cổ hoàn chỉnh đầu tiên ghi chép chiêm bốc vương thất nhà Thương." },
    { id: "ev3", year: "~1200–1000 TCN", periodId: "xia-shang-zhou", type: "culture", title: "Văn minh Cổ Thục Tam Tinh Đôi", zh: "三星堆古蜀文明", summary: "Mặt nạ đồng mắt lồi và cây thần bằng đồng tại Tứ Xuyên, minh chứng tính đa trung tâm của văn minh Trung Hoa." },
    { id: "ev4", year: "1046 TCN", periodId: "xia-shang-zhou", type: "dynasty", title: "Chu Vũ Vương diệt Thương & Thuyết Thiên Mệnh", zh: "武王克商与天命观", summary: "Định hình chế độ phân phong, tông pháp và triết lý 'Kính đức bảo dân'." },
    { id: "ev5", year: "685 TCN", periodId: "spring-autumn-warring", type: "event", title: "Quản Trọng cải cách kinh tế nước Tề", zh: "管仲相齐与盐铁官营", summary: "Thực hành 'Tướng địa nhi suy chinh' và quản lý muối – sắt, đưa Tề Hoàn Công lên ngôi Bá đầu tiên." },
    { id: "ev6", year: "551–479 TCN", periodId: "spring-autumn-warring", type: "philosophy", title: "Khổng Tử & Khởi nguồn Nho gia", zh: "孔子创立儒家", summary: "Mở trường tư thục, đặt nền tảng Nhân (仁) – Lễ (礼) và truyền thống giáo dục." },
    { id: "ev7", year: "433 TCN", periodId: "spring-autumn-warring", type: "culture", title: "Đúc bộ Chuông đồng Biên chung Tăng Hầu Ất", zh: "曾侯乙编钟入葬", summary: "Đỉnh cao âm luật học và kỹ nghệ đúc đồng 'nhất chung song âm' (12 bán âm) thời Chiến Quốc." },
    { id: "ev8", year: "356 TCN", periodId: "spring-autumn-warring", type: "event", title: "Thương Ưởng Biến pháp ở Tần", zh: "商鞅变法", summary: "Chuyển hóa nước Tần thành nhà nước pháp trị tập quyền, tiền đề thống nhất." },
    { id: "ev9", year: "256 TCN", periodId: "spring-autumn-warring", type: "culture", title: "Lý Băng xây dựng Thủy lợi Đô Giang Yển", zh: "李冰父子修建都江堰", summary: "Công trình trị thủy phân nước tự động không dùng đập chắn, biến Thành Đô thành 'Thiên phủ chi quốc'." },
    { id: "ev10", year: "221 TCN", periodId: "qin-han", type: "dynasty", title: "Tần Thủy Hoàng thống nhất Trung Hoa", zh: "秦始皇统一六国", summary: "Chuẩn hóa chữ viết (Thư đồng văn), đo lường, tiền tệ và thiết lập chế độ Quận Huyện." },
    { id: "ev11", year: "138 TCN", periodId: "qin-han", type: "event", title: "Trương Khiên đi sứ Tây Vực", zh: "张骞出使西域", summary: "Khai mở mạng lưới giao thương và văn hóa xuyên Á – Con đường Tơ lụa." },
    { id: "ev12", year: "~91 TCN", periodId: "qin-han", type: "figure", title: "Tư Mã Thiên hoàn thành Sử ký", zh: "司马迁著《史记》", summary: "Kiệt tác thông sử đầu tiên đặt khuôn mẫu Kỷ-Truyện cho sử học Đông Á." },
    { id: "ev13", year: "105 SCN", periodId: "qin-han", type: "culture", title: "Thái Luân cải tiến kỹ thuật làm giấy", zh: "蔡伦改进造纸术", summary: "Bước ngoặt vật liệu truyền bá tri thức trước khi lan sang Việt Nam, Trung Á và châu Âu." },
    { id: "ev14", year: "208 SCN", periodId: "three-kingdoms", type: "event", title: "Đại chiến Xích Bích & Thế chân vạc Tam Quốc", zh: "赤壁之战与三国鼎立", summary: "Liên quân Tôn – Lưu đánh bại Tào Tháo trên Trường Giang, định hình cục diện Ngụy – Thục – Ngô." },
    { id: "ev15", year: "353 SCN", periodId: "jin-northern-southern", type: "figure", title: "Vương Hi Chi viết Lan Đình Tập Tự", zh: "王羲之《兰亭集序》", summary: "Đỉnh cao nghệ thuật thư pháp hành thư và mỹ học tự nhiên thời Đông Tấn." },
    { id: "ev16", year: "493–499 SCN", periodId: "jin-northern-southern", type: "event", title: "Bắc Ngụy Hiếu Văn Đế cải cách & dời đô Lạc Dương", zh: "北魏孝文帝改革", summary: "Thúc đẩy đại dung hợp dân tộc Tiên Ti – Hán ở phương Bắc, tạo tiền đề cho đế chế Tùy – Đường." },
    { id: "ev17", year: "605–610 SCN", periodId: "sui-tang", type: "event", title: "Khai thông Đại Vận Hà & Thiết lập Khoa cử", zh: "开凿大运河与科举制", summary: "Kết nối kinh tế Bắc–Nam và cơ chế tuyển quan bằng thi cử." },
    { id: "ev18", year: "629–645 SCN", periodId: "sui-tang", type: "philosophy", title: "Huyền Trang thỉnh kinh & dịch thuật tại Trường An", zh: "玄奘西行译经", summary: "Đưa Phật học Duy Thức và tư liệu Ấn Độ học về Trung Hoa." },
    { id: "ev19", year: "755–763 SCN", periodId: "sui-tang", type: "event", title: "Loạn An Sử & Bước ngoặt chuyển dịch Kinh tế Nam phương", zh: "安史之乱与经济重心南移", summary: "Chấm dứt thời kỳ Khai Nguyên thịnh thế, thúc đẩy cải cách Thuế Lưỡng Thuế (780) và di dân xuống Giang Nam." },
    { id: "ev20", year: "938 SCN", periodId: "five-dynasties", type: "event", title: "Chiến thắng Bạch Đằng – Giao thoa tự chủ Việt–Trung", zh: "白藤江之战与越南自主", summary: "Ngô Quyền đánh bại Nam Hán, mở kỷ nguyên độc lập tự chủ của Việt Nam trong tương tác văn hóa Đông Á." },
    { id: "ev21", year: "1024 SCN", periodId: "song", type: "culture", title: "Tiền giấy Giao tử lưu hành tại Tứ Xuyên", zh: "北宋“交子”纸币", summary: "Tiền giấy do nhà nước phát hành sớm nhất thế giới, phản ánh kinh tế thương mại Tống." },
    { id: "ev22", year: "1069 SCN", periodId: "song", type: "event", title: "Vương An Thạch thực hiện Biến pháp Hy Ninh", zh: "王安石熙宁变法", summary: "Cải cách tài chính – nông nghiệp – thương mại sâu rộng (Thanh miêu pháp, Thị dịch pháp, Bảo giáp pháp)." },
    { id: "ev23", year: "~1190 SCN", periodId: "song", type: "philosophy", title: "Chu Hy tập đại thành Lý học (Tứ Thư Tập Chú)", zh: "朱熹集理学之大成", summary: "Định hình giáo trình khoa cử chuẩn tại Trung Quốc, Triều Tiên và Việt Nam." },
    { id: "ev24", year: "1280 SCN", periodId: "yuan", type: "culture", title: "Quách Thủ Kính ban hành Lịch Thụ Thời", zh: "郭守敬《授时历》颁行", summary: "Xác định độ dài năm chí tuyến 365,2425 ngày, chính xác ngang lịch Gregory trước châu Âu 300 năm." },
    { id: "ev25", year: "1405–1433", periodId: "ming", type: "event", title: "Trịnh Hòa bảy lần hạ Tây Dương", zh: "郑和下西洋", summary: "Hạm đội viễn dương quy mô lớn qua Đông Nam Á, Ấn Độ Dương tới Đông Phi." },
    { id: "ev26", year: "1508 SCN", periodId: "ming", type: "philosophy", title: "Vương Dương Minh ngộ đạo Long Trường", zh: "王阳明龙场悟道", summary: "Khởi phát Tâm học với nguyên lý 'Tâm tức lý' và 'Tri hành hợp nhất'." },
    { id: "ev27", year: "1581 & 1637", periodId: "ming", type: "culture", title: "Nhất Điều Biên Pháp & Khắc in Thiên Công Khai Vật", zh: "一条鞭法与《天工开物》刊行", summary: "Trương Cư Chính quy thuế về bạc trắng; Tống Ứng Tinh tổng kết bách khoa kỹ thuật công–nông nghiệp." },
    { id: "ev28", year: "1782 SCN", periodId: "qing", type: "culture", title: "Hoàn thành Tứ Khố Toàn Thư & Hồng Lâu Mộng lưu truyền", zh: "《四库全书》与《红楼梦》", summary: "Tổng kết di sản thư tịch cổ điển và đỉnh cao tiểu thuyết hiện thực tâm lý." },
    { id: "ev29", year: "1840–1898", periodId: "qing", type: "event", title: "Chiến tranh Nha phiến, Phong trào Dương Vụ & Duy tân Mậu Tuất", zh: "鸦片战争、洋务运动与戊戌变法", summary: "Cuộc va chạm lịch sử với phương Tây thúc đẩy công nghiệp hóa cận đại và cải cách thể chế cuối Thanh." },
    { id: "ev30", year: "1919 SCN", periodId: "republic-of-china", type: "philosophy", title: "Phong trào Ngũ Tứ & Cách mạng Bạch thoại văn", zh: "五四运动与白话文", summary: "Bước ngoặt hiện đại hóa ngôn ngữ, văn học và tư tưởng Trung Hoa." },
    { id: "ev31", year: "1978–2001", periodId: "modern-contemporary", type: "dynasty", title: "Cải cách Mở cửa (1978) & Gia nhập WTO (2001)", zh: "改革开放与中国加入世贸组织", summary: "Thành lập các Đặc khu Kinh tế và hội nhập toàn diện vào chuỗi sản xuất thương mại toàn cầu." },
    { id: "ev32", year: "2022–nay", periodId: "modern-contemporary", type: "event", title: "Thực thi Hiệp định RCEP & Chuyển đổi Kinh tế Số – Xanh", zh: "RCEP生效与数字绿色经济转型", summary: "Tái cấu trúc chuỗi cung ứng Đông Á – ASEAN, cửa khẩu thông minh và công nghệ năng lượng mới." }
  ]
};

(function () {
  if (!window.CCE_HISTORY || !Array.isArray(window.CCE_HISTORY.periods)) return;
  const ENRICH_14_PERIODS = {
    "prehistoric": {
      governanceAndTax: "Chuyển từ cộng đồng thị tộc bình đẳng (Ngưỡng Thiều 仰韶文化 Yǎngsháo Wénhuà) sang thủ lĩnh nghi lễ – thần quyền tập trung ở Lương Chử (良渚文化 Liángzhǔ Wénhuà) và Đào Tự. Chưa có thuế khóa tiền tệ mà vận hành qua lao dịch tập thể xây đắp thành lũy, kênh thủy lợi và cống nạp ngọc khí nghi lễ.",
      vietnamRelations: "Song hành với thời đại Đá mới – Sơ kỳ Kim khí Đông Nam Á (văn hóa Hòa Bình, Bắc Sơn, Phùng Nguyên tại lưu vực sông Hồng): cư dân cổ hai lưu vực Trường Giang và Hồng Hà đều sớm thuần hóa lúa nước (稻作农业 Dàozuò nóngyè), làm nhà sàn và chế tác đồ ngọc bích nghi lễ (khuyên tai 4 mấu, nha chương 牙章), phản ánh mạng lưới giao lưu văn hóa tiền sử rộng khắp Đông Á chứ không phải truyền bá một chiều.",
      representativeArtifacts: ["Ngọc Tông & Ngọc Bích Lương Chử (良渚玉琮 Liángzhǔ yùcóng)", "Đỉnh gốm màu Ngưỡng Thiều Bán Pha (半坡彩陶)", "Ngọc Long hình chữ C văn hóa Hồng Sơn (红山玉龙)", "Gốm đen vỏ trứng văn hóa Long Sơn (龙山蛋壳黑陶)"]
    },
    "xia-shang-zhou": {
      governanceAndTax: "Chế độ Thế khanh thế lộc (世卿世禄 Shìqīng shìlù) gắn liền Phân phong Tông pháp (分封制与宗法制 Fēnfēngzhì yǔ Zōngfǎzhì). Nhà Thương chiêm bốc Giáp cốt kết hợp vương quyền thần quyền; Tây Chu lấy đạo đức 'Thiên mệnh' (天命 Tiānmìng) và 'Tỉnh điền chế' (井田制 Jǐngtiánzhì – mô hình ruộng công tư lý tưởng hóa trong 《Mạnh Tử》) làm nền tảng tô thuế – binh dịch.",
      vietnamRelations: "Cùng thời kỳ Tam Đại, tại lưu vực sông Hồng hình thành văn minh Đông Sơn rực rỡ của nước Văn Lang (thời Hùng Vương dựng nước): cùng chia sẻ đỉnh cao luyện kim đồng thau nhưng Đông Sơn phát triển trống đồng (铜鼓 Tónggǔ) và thạp đồng độc bản khác hẳn quy thức đỉnh – tước tế lễ của Thương – Chu, đồng thời tiếp nhận nha chương ngọc từ khu vực Hoa Nam – Trường Giang.",
      representativeArtifacts: ["Đỉnh Hậu Mẫu Mậu 832,84 kg (后母戊鼎 Hòumǔwù Dǐng)", "Giáp Cốt Văn Ân Khư (殷墟甲骨文)", "Mặt nạ đồng Tam Tinh Đôi Cổ Thục (三星堆青铜纵目面具)", "Mao Công Đỉnh 497 chữ Kim văn (毛公鼎)"]
    },
    "spring-autumn-warring": {
      governanceAndTax: "Lễ nhạc Tây Chu tan rã: từ chế độ thế tập quý tộc chuyển sang Quận Huyện chế sơ khai (郡县制 Jùnxiànzhì) và Quân công tước chế (军功爵制 Jūngōng juézhì) thời Biến pháp Thương Ưởng ở Tần. Kinh tế tư hữu hóa ruộng đất bùng nổ qua cải cách 'Sơ thuế mẫu' (初税亩 Chūshuìmǔ, 594 TCN ở nước Lỗ) đánh thuế theo diện tích canh tác.",
      vietnamRelations: "Giao thoa văn hóa Lạc Việt – Bách Việt (百越 Bǎiyuè) ở miền Nam Trường Giang: cùng chia sẻ kỹ nghệ đúc trống đồng, tục xăm mình, nhuộm răng, đi thuyền dọc sông biển; cuối Chiến Quốc chứng kiến sự hình thành nước Âu Lạc của Thục Phán An Dương Vương và thành Cổ Loa kiên cố.",
      representativeArtifacts: ["Bộ Chuông Biên Tăng Hầu Ất 65 quả (曾侯乙编钟)", "Kiếm Việt Vương Câu Tiễn (越王勾践剑)", "Hệ thống Thủy lợi Đô Giang Yển (都江堰)", "Thẻ tre Quách Điếm Sở Mộ (郭店楚简)"]
    },
    "qin-han": {
      governanceAndTax: "Tần xác lập mô hình Hoàng đế trung ương tập quyền và Tam công Cửu khanh (三公九卿 Sāngōng jiǔqīng); Hán tiếp thu Quận Huyện chế kết hợp Sát cử chế (察举制 Chájǔzhì – tiến cử Hiếu liêm) để tuyển quan lại. Thuế khóa gồm Điền tô nhẹ thời Hán sơ ('Thập ngũ nhi thuế nhất' → 'Tam thập nhi thuế nhất'), Thuế đầu người (Suanfu/Koufu) và độc quyền Muối – Sắt (盐铁专卖).",
      vietnamRelations: "Tần Thủy Hoàng nam chinh Lĩnh Nam (214 TCN) lập 3 quận; Triệu Đà lập nước Nam Việt trước khi nhà Hán sáp nhập Giao Chỉ (111 TCN). Thời Đông Hán, cuộc khởi nghĩa vĩ đại của Hai Bà Trưng (40–43 SCN) khẳng định ý thức tự chủ bất khuất của người Việt; đồng thời vùng Luy Lâu (Bắc Ninh) trở thành trung tâm Phật học và Hán học cổ nhất vùng Giao Châu.",
      representativeArtifacts: ["Đội quân Đất nung Tần Thủy Hoàng (兵马俑 Bīngmǎyǒng)", "Tượng đồng Mã Đạp Phi Yến (马踏飞燕 Mǎtàfēiyàn)", "Bức Tụ Đạo Táng Mã Vương Đôi (马王堆汉墓帛画)", "Đĩa Thiên văn Lục Nhâm Tây Hán (汉六壬栻盘)"]
    },
    "three-kingdoms": {
      governanceAndTax: "Nhà Tào Ngụy ban hành Cửu phẩm Trung chính chế (九品中正制 Jiǔpǐn zhōngzhèngzhì) phân chia 9 bậc nhân tài nhưng nhanh chóng bị các đại tộc thâu tóm ('Thượng phẩm vô hàn môn'). Kinh tế dựa trên Đồn điền chế (屯田制 Túntiánzhì) kết hợp quân đội tự túc lương thực giữa thời chiến.",
      vietnamRelations: "Đông Ngô chia Giao Châu – Quảng Châu thành hai khu vực hành chính riêng biệt (264 SCN). Năm 248, Bà Triệu (Triệu Thị Trinh) lãnh đạo nhân dân Cửu Chân khởi nghĩa oanh liệt chống ách đô hộ nhà Đông Ngô với tuyên ngôn bất hủ cưỡi cơn gió mạnh, đạp luồng sóng dữ.",
      representativeArtifacts: ["Thẻ tre Tẩu Mã Lâu Trường Sa thời Đông Ngô (走马楼吴简)", "Gương đồng Tam Quốc 'Kiến An' (三国青铜镜)", "Ấn vàng 'Phiên Di Vương' vùng Tây Nam", "Đồn lũy & văn khắc thời Tào Ngụy – Thục Hán"]
    },
    "jin-northern-southern": {
      governanceAndTax: "Bắc Ngụy Hiếu Văn Đế cải cách Hán hóa và ban hành Quân điền chế (均田制 Jūntiánzhì, 485 CN) cùng Tô Điều chế (租调制) chia ruộng công cho nông dân cày cấy nhằm kiềm chế kiêm tinh ruộng đất; Nam triều duy trì Cửu phẩm Trung chính chế dẫn đến thế lực Sĩ tộc môn phiệt Vương – Tạ lũng đoạn triều chính.",
      vietnamRelations: "Năm 544 SCN, Lý Bí (Lý Nam Đế) phất cờ khởi nghĩa đánh đuổi thứ sử nhà Lương, lập ra nước Vạn Xuân (万春) đặt niên hiệu Thiên Đức, dựng chùa Khai Quốc (Trấn Quốc ngày nay) — đánh dấu mốc phục dựng quốc hiệu độc lập tự chủ đầu tiên trước khi nhà Tùy – Đường tái chiếm.",
      representativeArtifacts: ["《Lan Đình Tập Tự》 Vương Hi Chi (王羲之《兰亭集序》)", "Bức họa 《Lạc Thần Phú Đồ》 & 《Nữ Sử Châm Đồ》 Cố Khải Chi", "Tượng Phật hang đá Vân Cương & Long Môn thời Bắc Ngụy", "Gốm men ngọc Thanh Từ thời Lục Triều (六朝青瓷)"]
    },
    "sui-tang": {
      governanceAndTax: "Nhà Tùy sáng lập, nhà Đường hoàn thiện cơ chế Tam Tỉnh Lục Bộ (三省六部制 Sānshěng liùbùzhì: Trung Thư thảo chiếu, Môn Hạ thẩm duyệt, Thượng Thư thi hành) và Chế độ Khoa cử (科举制 Kējǔzhì) mở đường tiến thân cho hàn sĩ. Thuế khóa chuyển từ Quân điền – Tô Dung Điều (租庸调制) sang Lưỡng Thuế Pháp (两税法 Liǎngshuìfǎ, năm 780 do Dương Viêm khởi xướng) thu theo tài sản và hai kỳ Hạ – Thu.",
      vietnamRelations: "Vùng đất Đại Việt thời Đường đặt dưới An Nam Đô hộ phủ (安南都护府), chứng kiến các cuộc khởi nghĩa vang dội của Mai Thúc Loan (Mai Hắc Đế, 713–722) và Phùng Hưng (Bố Cái Đại Vương, 766–791). Đồng thời, đây là thời kỳ giao lưu âm vận Hán – Việt sâu sắc qua kinh điển, thi ca và hiện tượng danh sĩ người Việt như Khương Công Phụ (姜公辅, quê Ái Châu) đỗ Trạng nguyên khoa Chế sách tại Trường An (780) làm Tể tướng triều Đường.",
      representativeArtifacts: ["Tam Thái Lạc Đà Con Đường Tơ Lụa (唐三彩 Tránglì)", "Bích họa Đôn Hoàng Hang Mạc Cao (莫高窟壁画)", "Kho báu vàng bạc Hà Gia Thôn Trường An", "《Đường Luật Sớ Nghị》 (唐律疏议)"]
    },
    "five-dynasties": {
      governanceAndTax: "Năm triều đại liên tiếp ở Trung Nguyên (Hậu Lương – Hậu Đường – Hậu Tấn – Hậu Hán – Hậu Chu) do tiết độ sứ quân phiệt thay nhau tiếm vị; ở Giang Nam, Mười nước (Thập Quốc) giữ tương đối ổn định thúc đẩy di dân, thủy lợi và kinh tế thương mại phương Nam vượt qua phương Bắc.",
      vietnamRelations: "Bước ngoặt định đoạt vận mệnh dân tộc Việt Nam: năm 905 Khúc Thừa Dụ giành quyền tự chủ, năm 938 Ngô Quyền dùng trận địa cọc gỗ Bạch Đằng đánh tan thủy quân Nam Hán (Lưu Hoằng Tháo tử trận), chấm dứt hơn 1.000 năm Bắc thuộc, mở ra kỷ nguyên độc lập lâu dài và xác lập tư thế bang giao bình đẳng với Trung Hoa.",
      representativeArtifacts: ["Tranh 《Hàn Hy Tải Dạ Yến Đồ》 Cố Hoành Trung (韩熙载夜宴图)", "Khuông Lư Đồ Kinh Hạo & Tiêu Tương Đồ Đổng Nguyên", "Lò sứ bí sắc Việt Diêu (越窑秘色瓷)", "Chứng tích cọc gỗ Bạch Đằng & thành Cổ Loa phục hưng"]
    },
    "song": {
      governanceAndTax: "Thiết lập cơ chế phân quyền kiểm soát lẫn nhau giữa Chính sự đường (hành chính), Khu mật viện (quân sự) và Tam Ty (tài chính) kèm Trọng văn ức vũ (重文抑武). Khoa cử bỏ chế độ 'hành quyển' xin tiến cử, áp dụng 'Hồ danh' (rọc phách) và 'Đằng lục' (chép lại bài) đảm bảo công bằng. Kinh tế thương mại hóa toàn diện, xuất hiện tiền giấy Giao tử (交子) và thu thuế thương mại vượt thuế nông nghiệp.",
      vietnamRelations: "Thời Tiền Lê (Lê Hoàn đại phá quân Tống trên sông Bạch Đằng – Chi Lăng năm 981) và nhà Lý (Lý Thường Kiệt chủ động phá Ung Châu – Khâm Châu 1075 và phòng tuyến sông Như Nguyệt 1077 cùng bài thơ 'Nam Quốc Sơn Hà'). Song song đó, nhà Lý lập Văn Miếu (1070), mở khoa thi Minh kinh bác học (1075), thỉnh Đại Tạng Kinh nhà Tống về dịch giảng và duy trì quan hệ sách phong hòa hiếu với Tống Huy Tông.",
      representativeArtifacts: ["《Thiên Lý Giang Sơn Đồ》 Vương Hy Mạnh (千里江山图)", "《Thanh Minh Thượng Hà Đồ》 Trương Trạch Đoan (清明上河图)", "Đĩa Gốm Nhữ Diêu Men Thiên Thanh (汝窑天青釉盘)", "Tiền giấy Giao Tử (交子) & La bàn chỉ nam Tống"]
    },
    "yuan": {
      governanceAndTax: "Thành lập chế độ Hành Tỉnh (行省制 Xíngshěngzhì – Hành Trung thư tỉnh) đặt nền móng cho ranh giới hành chính cấp tỉnh Trung Quốc hiện đại. Áp dụng chính sách phân cấp 4 hạng cư dân (Mông Cổ – Sắc Mục – Hán Nhân – Nam Nhân), khôi phục muộn màng khoa cử (năm 1315) lấy Tứ Thư Tập Chú Chu Hy làm chuẩn.",
      vietnamRelations: "Vương triều nhà Trần Đại Việt lập nên chiến công hiển hách bậc nhất lịch sử khu vực: ba lần đánh thắng đội quân viễn chinh Nguyên – Mông hùng mạnh nhất thế giới (1258 Đông Bộ Đầu, 1285 Chương Dương – Hàm Tử – Tây Kết, 1288 Bạch Đằng Giang của Trần Hưng Đạo). Sau chiến tranh, sứ bộ Trần (Mạc Đĩnh Chi – 'Lưỡng quốc Trạng nguyên') tiếp tục giao lưu thi phú Bút đàm sâu sắc tại Yên Kinh.",
      representativeArtifacts: ["Cặp Bình Thanh Hoa Vân Long David (元青花云龙象耳瓶)", "《Phú Xuân Sơn Cư Đồ》 Hoàng Công Vọng (富春山居图)", "Thủy lực Giản Nghi Quách Thủ Kính (简仪)", "Ấn triện chữ Phags-pa (八思巴字印章)"]
    },
    "ming": {
      governanceAndTax: "Minh Thái Tổ bãi chức Thừa tướng, trực tiếp điều hành Lục Bộ trước khi thiết lập Nội Các (内阁 Nèigé) phụ tá hoàng đế và hệ thống Khoa cử Bát Cổ Văn (八股文 Bāgǔwén). Trương Cư Chính thực thi 'Nhất Điều Biên Pháp' (一条鞭法 Yītiáo biānfǎ, 1581) hợp nhất điền tô và lao dịch quy nộp bằng bạc trắng (Ngân lượng 白银), kích thích kinh tế hàng hóa Giang Nam phát triển cực thịnh.",
      vietnamRelations: "Đầu thế kỷ XV quân Minh xâm lược nhà Hồ nhưng nhanh chóng bị nghĩa quân Lam Sơn của Lê Lợi – Nguyễn Trãi đánh bại (1418–1427, Đại Cáo Bình Ngô), buộc nhà Minh rút quân và thiết lập lại quan hệ bang giao sách phong thời Lê Sơ. Trong giai đoạn Minh Hải cấm, gốm hoa lam Chu Đậu – Bát Tràng Việt Nam chiếm lĩnh thị trường thương mại biển Đông Á; đồng thời Trạng Bùng Phùng Khắc Khoan và các sứ thần Đại Việt họa thơ cùng học giả Minh tại Yên Kinh.",
      representativeArtifacts: ["《Vĩnh Lạc Đại Điển》 (永乐大典)", "Thiên Công Khai Vật Tống Ứng Tinh (《天工开物》)", "Hải đồ Trịnh Hòa hạ Tây Dương (郑和航海图)", "Hoàng Thành Tử Cấm Thành Bắc Kinh (故宫紫禁城)"]
    },
    "qing": {
      governanceAndTax: "Thiết lập Quân Cơ Xứ (军机处 Jūnjīchù) đưa quyền lực hoàng đế tập quyền lên đỉnh cao nhất; sáp nhập Mãn – Mông – Tạng – Hồi – Đài Loan định hình cơ bản bản đồ hiện đại. Cải cách thuế khóa lớn nhất là 'Than Đinh Nhập Mẫu' (摊丁入亩 Tāndīng rùmǔ, thời Ung Chính) gộp hoàn toàn thuế đinh vào thuế ruộng đất, bãi bỏ vĩnh viễn thuế đầu người thúc đẩy bùng nổ dân số lên 300–400 triệu người.",
      vietnamRelations: "Năm 1789, Hoàng đế Quang Trung – Nguyễn Huệ chỉ huy cuộc hành quân thần tốc đại phá 29 vạn quân Thanh trong chiến thắng Ngọc Hồi – Đống Đa; sau đó hai nước nối lại bang giao hòa hiếu. Sang triều Nguyễn (1802–1884), hàng loạt sứ bộ danh sĩ Việt Nam như Nguyễn Du (*Bắc hành tạp lục*), Phan Huy Chú, Lý Văn Phức đi sứ Yên Kinh đã trao đổi thư tịch, đối chiếu học thuật Khảo cứ Càn – Gia và hợp lực ngoại giao trước làn sóng thực dân phương Tây.",
      representativeArtifacts: ["Bộ Tùng thư 《Tứ Khố Toàn Thư》 (四库全书)", "Tranh trường quyển 《Khang Hy Nam Tuần Đồ》 (康熙南巡图)", "《Bách Tuấn Đồ》 Lang Thế Ninh & Điện Thức Lôi", "Ấn tỷ Phỉ thúy & Ngọc bảo 25 ấn triều Thanh"]
    },
    "republic-of-china": {
      governanceAndTax: "Cách mạng Tân Hợi (1911) xóa bỏ 2.132 năm chế độ quân chủ chuyên chế, ban hành 《Trung Hoa Dân Quốc Lâm thời Ước pháp》; hệ thống chính quyền Quốc Dân Đảng đóng tại Nam Kinh (1927–1937) trước khi bùng nổ Kháng chiến Chống Nhật toàn diện (1937–1945) và Nội chiến Quốc – Cộng.",
      vietnamRelations: "Giai đoạn gắn kết sâu sắc của các nhà yêu nước Việt Nam đầu thế kỷ XX tại Quảng Châu, Hồng Kông, Vân Nam và Quảng Tây: từ Phan Bội Châu với Phong trào Đông Du – Việt Nam Quang Phục Hội chịu ảnh hưởng tư tưởng Tân Văn Minh Lương Khải Siêu / Tôn Trung Sơn, đến hoạt động cách mạng của Nguyễn Ái Quốc (Hồ Chí Minh) sáng lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (1925) và viết *Nhật ký trong tù* tại Quảng Tây.",
      representativeArtifacts: ["Bản Tuyên ngôn Thành lập Trung Hoa Dân Quốc (1912)", "Tạp chí 《Tân Thanh Niên》 Phong trào Ngũ Tứ (1915)", "Tuyến Đường sắt Điền – Việt (Côn Minh – Hải Phòng)", "Các di tích Hội Thanh Niên tại Quảng Châu"]
    },
    "modern-contemporary": {
      governanceAndTax: "Sau năm 1949 thành lập CHND Trung Hoa theo mô hình Đại hội Đại biểu Nhân dân Toàn quốc; bước ngoặt 1978 mở ra nền kinh tế thị trường định hướng xã hội chủ nghĩa, cải cách thuế khóa (phân thuế trung ương – địa phương 1994, bãi bỏ vĩnh viễn thuế nông nghiệp truyền thống hơn 2.600 năm vào năm 2006) và chuyển đổi quản trị số toàn diện.",
      vietnamRelations: "Việt Nam và Trung Quốc thiết lập quan hệ Đối tác Hợp tác Chiến lược Toàn diện, xây dựng 'Cộng đồng chia sẻ tương lai có ý nghĩa chiến lược'. Về kinh tế, Trung Quốc là đối tác thương mại lớn nhất của Việt Nam (tổng kim ngạch song phương định hướng chạm mốc 260–268 tỷ USD giai đoạn 2026–2030 theo khung RCEP & ACFTA 3.0), liên kết chặt chẽ qua cửa khẩu thông minh Hữu Nghị Quan – Lạng Sơn, Lào Cai – Hà Khẩu, đường sắt liên vận quốc tế và mạng lưới hàng chục nghìn lưu học sinh Việt Nam theo học bổng CSC.",
      representativeArtifacts: ["Đại họa 《Giang Sơn Như Thử Đa Kiều》 (1959)", "Tàu cao tốc Phục Hưng CR400BF & Trạm Thiên Cung", "Siêu cảng tự động hóa Dương Sơn Thượng Hải", "Tài liệu Nghiên cứu Thương mại Song phương VN-CN-TRD-2026-Q4"]
    }
  };

  window.CCE_HISTORY.periods = window.CCE_HISTORY.periods.map((p) => {
    const ext = ENRICH_14_PERIODS[p.id];
    return ext ? { ...p, ...ext } : p;
  });
})();
