// ============================================================================
// KNOWLEDGE EXPANSION — MODULE 2 (34 PROVINCES 3-LAYER CO-LEARNER SCHEMA)
// & MODULE 6 (6 PRE-DEPARTURE SURVIVAL HANZI PACKS WITH LIUSHU RADICAL LOGIC)
// Pure Chinese Culture & Sino-Viet Field Readiness. Zero external coupling.
// ============================================================================

(function () {
  "use strict";

  // --------------------------------------------------------------------------
  // 1. MODULE 2: COMPLETE 34-PROVINCE 3-LAYER UPGRADE
  // Header convention: <NameZh> · <Short Hanzi> (<Hán-Việt>)
  // Layer 1: Đời Sống Đương Đại & Dấu Ấn Thị Giác
  // Layer 2: Căn Cốt Lịch Sử, Tư Tưởng & Địa Văn Hóa
  // Layer 3: Hành Trang Thực Địa Cho Người Việt (12306 HSR, WeChat Booking,
  //          Season & Dining Etiquette, 2-Line Flagship Industrial Corridor)
  // --------------------------------------------------------------------------
  const PROVINCE_3LAYER_DATA = {
    "prov-beijing": {
      headerFormatted: "北京市 · 京 (Kinh)",
      urbanPulseTitle: "Trục Trung Tâm UNESCO & Nhịp Đêm Tiền Môn – Tam Lý Đồn",
      urbanPulseVi: "Du khách bước ra từ lối ngầm Metro Tiền Môn nhìn thẳng qua Cổng Chính Dương Môn (正阳门) tới dãy hồ đồng cổ Thập Sát Hải được chiếu sáng dịu mắt vào chập tối, chỉ cách vài trạm tàu là khu nghệ thuật 798 và quần thể nghiên cứu AI Trung Quan Thôn hoạt động suốt đêm.",
      lineageVi: "Kế thừa địa thế vòng cung Yến Sơn – Thái Hành bảo bọc từ thời Yên quốc (Chu) qua Kinh đô Liêu–Kim–Nguyên–Minh–Thanh; định hình Quan thoại Kinh Phái (Nhuận âm 儿化), Kinh kịch và Tứ Hợp Viện.",
      stations: [
        { hanzi: "北京南站", pinyin: "Běijīngnán Zhàn", noteVi: "Tuyệt đại đa số tàu Fuxing đi Thượng Hải (4h30), Thiên Tân, Tế Nam" },
        { hanzi: "北京西站", pinyin: "Běijīngxi Zhàn", noteVi: "Tàu cao tốc tuyến Tây Nam đi Tây An, Trịnh Châu, Vũ Hán, Thành Đô" },
        { hanzi: "北京朝阳站", pinyin: "Běijīng Cháoyáng Zhàn", noteVi: "Tuyến cao tốc Đông Bắc đi Thẩm Dương, Cáp Nhĩ Tân" }
      ],
      bookingVi: "Tử Cấm Thành (故宫博物院), Bảo tàng Quốc gia (国博) & Thiên An Môn mở vé WeChat trước 7 ngày lúc 20:00 (giờ Bắc Kinh) và khóa cứng quy tắc định danh hộ chiếu (护照) quét thẳng tại cửa kiểm soát; tháng 9–11 và 4–5 thời tiết đẹp nhất. Trên bàn tiệc vịt quay Toàn Tụ Đức hoặc lẩu đồng: không cắm thẳng đũa lên bát cơm và rót trà kính người cao tuổi trước.",
      corridor2Line: "Cụm R&D AI, bán dẫn – phần mềm Trung Quan Thôn (中关村) & trụ sở tài chính quốc gia. Kết nối hành lang Kinh–Tân–Ký (京津冀) và học thuật công nghệ cao song phương với Việt Nam."
    },
    "prov-tianjin": {
      headerFormatted: "天津市 · 津 (Tân)",
      urbanPulseTitle: "Phố Châu Âu Ngũ Đại Đạo & Vòng Quay 'Mắt Thiên Tân' Trên Sông Hải Hà",
      urbanPulseVi: "Không có nhịp sống hối hả như Bắc Kinh cách đó 30 phút tàu cao tốc, Thiên Tân gây ấn tượng bởi hàng loạt cây cầu thép bắc qua sông Hải Hà, bánh xe khổng lồ bắc ngang cầu Vĩnh Lạc và những quán tấu hài Tướng thanh mở cửa rộn tiếng cười mỗi tối ở Phố Văn hóa Cổ.",
      lineageVi: "Bến đò Thiên tử (1404) quy tụ chín nhánh sông về Vịnh Bột Hải, hun đúc tinh thần Tân Vị thương cảng hài hước, Di sản Độc Lạc Tự thời Liêu (984) và cái nôi đại học cận đại Bắc Dương.",
      stations: [
        { hanzi: "天津站", pinyin: "Tiānjīn Zhàn", noteVi: "Trung tâm sông Hải Hà, nối Bắc Kinh Nam trong 30 phút" },
        { hanzi: "天津西站", pinyin: "Tiānjīnxī Zhàn", noteVi: "Trạm tuyến cao tốc Kinh–Hộ (đi Tế Nam, Thượng Hải)" }
      ],
      bookingVi: "Bảo tàng Thiên Tân & Khu biệt thự Ngũ Đại Đạo đặt qua WeChat Mini-Program 1–3 ngày bằng số hộ chiếu; nhớ thử bữa sáng Quẩy kẹp bánh rán Jianbing Guozi (煎饼果子) ở các tiệm truyền thống và tránh mùa gió cát tháng 3.",
      corridor2Line: "Cảng container nước sâu Thiên Tân – Khu mới Tân Hải & tổ hợp lắp ráp Airbus A320. Cửa ngõ hàng hải vận chuyển máy móc nặng và thiết bị năng lượng Bắc Trung Quốc về cảng Hải Phòng."
    },
    "prov-shanghai": {
      headerFormatted: "上海市 · 沪 (Hộ)",
      urbanPulseTitle: "Đường Chân Trời Lục Gia Chủy & Thẩm Mỹ Cà Phê Phố Ngô Đồng Vũ Khang",
      urbanPulseVi: "Buổi sáng ở Thượng Hải, dòng người cầm ly cà phê specialty đi dạo dưới vòm cây ngô đồng phố Vũ Khang Lộ giữa những căn nhà Thạch Khố Môn (石库门), chiều ngắm tháp đôi Lục Gia Chủy soi bóng xuống Bến Thượng Hải.",
      lineageVi: "Hội tụ truyền thống thủy mặc Tùng Giang thời Minh–Thanh, tinh thần khế ước thương mại Hải Phái (海派文化) cởi mở và giọng Ngô ngữ mềm mại.",
      stations: [
        { hanzi: "上海虹桥站", pinyin: "Shànghǎi Hóngqiáo Zhàn", noteVi: "Siêu hub nối thẳng sân bay Hồng Kiều với mạng HSR toàn Hoa Đông" },
        { hanzi: "上海站 / 上海南站", pinyin: "Shànghǎi Zhàn", noteVi: "Ga nội đô trung tâm (tuyến Metro số 1, 3, 4)" }
      ],
      bookingVi: "Bảo tàng Thượng Hải (chi nhánh Nhân Dân Quảng Trường & Đông Quán Phố Đông) đặt miễn phí qua WeChat Mini-Program trước 7–14 ngày bằng hộ chiếu; tải Alipay Transit QR đi 20 tuyến Metro; mùa đẹp tháng 3–5 & 10–11. Ẩm thực Bổn Bang hơi ngọt: nếm Tiểu long bao (小笼包) cẩn thận súp nóng trong vỏ bánh.",
      corridor2Line: "Trung tâm tài chính Lục Gia Chủy, chip bán dẫn Trương Giang (Zhangjiang) & cảng tự động Dương Sơn. Đầu mối thanh toán L/C RMB và tuyến vận tải biển cao tốc nối trực tiếp Cát Lái – Hải Phòng."
    },
    "prov-chongqing": {
      headerFormatted: "重庆市 · 渝 (Du)",
      urbanPulseTitle: "Đô Thị 8D Đa Tầng & Tàu Monorail Lý Tử Bá Xuyên Thẳng Chung Cư",
      urbanPulseVi: "Trùng Khánh phá vỡ mọi quy ước bản đồ phẳng 2D: bạn bước vào quảng trường tầng 1 tưởng là mặt đất nhưng nhìn xuống ban công mới thấy dưới chân còn 18 tầng nhà nhìn ra sông Gia Lăng, còn đoàn tàu nhẹ Tuyến số 2 lao vút xuyên qua tầng 6–8 của tòa chung cư Lý Tử Bá (李子坝).",
      lineageVi: "Cố đô Ba Quốc thượng cổ, cái nôi văn hóa Ba–Du hào sảng bến sông Trường Giang – Gia Lăng, chạm khắc đá Đại Túc (UNESCO) và Thủ đô kháng chiến thế kỷ XX.",
      stations: [
        { hanzi: "重庆北站", pinyin: "Chóngqìngběi Zhàn", noteVi: "Ga chính đi Thành Đô (1h15), Tây An, Vũ Hán" },
        { hanzi: "重庆西站", pinyin: "Chóngqìngxī Zhàn", noteVi: "Ga cao tốc đi Quý Dương, Côn Minh, Quảng Tây" },
        { hanzi: "沙坪坝站", pinyin: "Shāpíngbà Zhàn", noteVi: "Tuyến nhanh trực tiếp đi Ga Thành Đô Đông" }
      ],
      bookingVi: "Không cần mua vé ngắm Hồng Nhai Động (洪崖洞) ban đêm (ngắm đẹp nhất từ bờ đối diện cầu Thiên Tư Môn hoặc cầu Đông Thủy Môn lúc 19:30 bật đèn); dùng Apple Map hoặc Amap chế độ đi bộ 3D để đỡ lạc tầng; tháng 7–8 rất nóng nên đi tháng 3–5 hoặc 10–12. Gọi Lẩu Cửu Cung Cách nhớ dặn 'Wēilà / Yuānyāngguō' (cay ít / 2 ngăn).",
      corridor2Line: "Cụm sản xuất laptop – xe điện năng lượng mới Thành–Du & hành lang đường sắt Tây Bộ (ILSTC). Đẩy mạnh tuyến đường sắt liên vận đa phương thức từ Trùng Khánh qua Khâm Châu / Bằng Tường về miền Bắc Việt Nam."
    },
    "prov-hebei": {
      headerFormatted: "河北省 · 冀 (Ký)",
      urbanPulseTitle: "Tị Thử Sơn Trang Thừa Đức, Kỳ Tích Sơn Hải Quan & Tân Đô Hùng An",
      urbanPulseVi: "Từ điểm khởi đầu Trường Thành trên biển 'Lão Long Đầu' ở Tần Hoàng Đảo tới thành phố tương lai xanh Hùng An Tân Khu (雄安新区), Hà Bắc lưu giữ nhịp chuyển giao từ kinh thành nghỉ mát hoàng gia Thanh triều sang vành đai sinh thái công nghiệp mới.",
      lineageVi: "Đất Triệu – Yến cổ xưa hào hiệp ('Yên Triệu đa khảng khái bi ca chi sĩ'), cố đô Hàm Đan Chiến Quốc, cái nôi Thái Cực Quyền và lò sứ Định Diêu danh tiếng Bắc Tống.",
      stations: [
        { hanzi: "石家庄站", pinyin: "Shíjiāzhuāng Zhàn", noteVi: "Đầu mối đường sắt Bắc–Nam trên trục Kinh–Quảng (từ Bắc Kinh Tây 1h10)" },
        { hanzi: "承德南站", pinyin: "Chéngdénán Zhàn", noteVi: "Tuyến cao tốc Kinh–Thẩm đi Tị Thử Sơn Trang (50 phút)" }
      ],
      bookingVi: "Bảo tàng Hà Bắc (giữ bảo vật Kim Lũ Ngọc Y của Lưu Thắng) và Tị Thử Sơn Trang đặt vé trước 3 ngày qua WeChat Mini-Program bằng hộ chiếu; mùa đẹp tháng 5–10; ẩm thực Hoa Bắc mặn thơm mùi xì dầu nên dặn giảm muối nếu quen khẩu vị nhẹ.",
      corridor2Line: "Vành đai thép sạch Đường Sơn, dược phẩm Thạch Gia Trang & chuỗi phụ trợ ô tô Bắc Bộ. Vùng tiếp nhận công nghiệp sản xuất mở rộng từ Thủ đô Bắc Kinh và xuất khẩu vật liệu xây dựng."
    },
    "prov-shanxi": {
      headerFormatted: "山西省 · 晋 (Tấn)",
      urbanPulseTitle: "Thành Cổ Bình Dao Bảo Lưu Nguyên Vẹn & Biệt Phủ Thương Nhân Tấn Thương",
      urbanPulseVi: "Đi dọc Sơn Tây giống như lật trang sách gỗ 1.000 năm chưa phai mực: hơn 70% kiến trúc gỗ thời Đường–Tống–Liêu–Kim còn lại ở Trung Quốc tập trung tại đây (Phật Quang Tự, Chùa Huyền Không cheo leo vách núi, Tháp gỗ Ứng Huyện 960 năm không một chiếc đinh sắt).",
      lineageVi: "Đất Tấn cổ nơi sông Hoàng Hà uốn khúc, phát tích Triết học mộc bản cổ nhất phương Đông, Hang đá Vân Cương (UNESCO) và mạng lưới ngân hàng phiếu hiệu 'Nhật Thăng Xương' thời Minh–Thanh.",
      stations: [
        { hanzi: "太原南站", pinyin: "Tàiyuánnán Zhàn", noteVi: "Trạm HSR chính (2h30 từ Bắc Kinh Tây; nối thẳng Bình Dao Cổ Thành trong 35 phút)" },
        { hanzi: "大同南站", pinyin: "Dàtóngnán Zhàn", noteVi: "Đi Hang đá Vân Cương và Chùa Huyền Không" }
      ],
      bookingVi: "Hang đá Vân Cương, Chùa Huyền Không (phải đặt khung giờ leo lên lầu gỗ trước 5 ngày trên WeChat!) và Thành cổ Bình Dao dùng hộ chiếu quét mã; mùa khô nên mang kem dưỡng ẩm. Đặc sản mì Dao Tước (刀削面) dùng nhiều giấm đen Sơn Tây rất kích thích vị giác.",
      corridor2Line: "Trung tâm năng lượng sạch, gang thép đặc biệt Thái Nguyên & di sản văn hóa Tấn Thương. Đối tác truyền thống về vật liệu công nghiệp và thiết bị khai khoáng hạng nặng."
    },
    "prov-liaoning": {
      headerFormatted: "辽宁省 · 辽 (Liêu)",
      urbanPulseTitle: "Cố Cung Thẩm Dương & Đại Liên Phố Biển Đường Tầu Điện Xanh Cổ Điển",
      urbanPulseVi: "Buổi sáng dạo bước giữa gạch men lưu ly vàng-xanh mang dấu ấn kiến trúc Mãn–Mông–Hán tại Cố Cung Thẩm Dương, buổi chiều bước lên chiếc xe điện mặt gỗ hơn 100 năm tuổi (tuyến 201) chạy leng keng dọc phố biển Đại Liên.",
      lineageVi: "Giao điểm văn hóa Nông canh Hoa Hạ và Thảo nguyên Liêu–Kim–Thanh sơ kỳ (Cố Cung Thẩm Dương 1625 – UNESCO); Bảo tàng Liêu Ninh lưu giữ nhiều quốc bảo Đường–Tống (*Thụy Hạc Đồ*, *Quắc Quốc Phu Nhân Du Xuân Đồ*).",
      stations: [
        { hanzi: "沈阳北站", pinyin: "Shěnyángběi Zhàn", noteVi: "Hub Đông Bắc nối Bắc Kinh (2h45) và tuyến đi Trường Xuân – Cáp Nhĩ Tân" },
        { hanzi: "大连北站", pinyin: "Dàliánběi Zhàn", noteVi: "Thành phố cảng Đại Liên nhìn ra Vịnh Bột Hải" }
      ],
      bookingVi: "Cố Cung Thẩm Dương & Bảo tàng tỉnh Liêu Ninh đặt lịch qua WeChat (dễ đặt hơn Bắc Kinh nhưng vẫn cần hộ chiếu bản gốc); đi vào tháng 6–10 để tránh giá rét -20°C mùa đông. Món Đông Bắc (锅包肉 - thịt chiên giòn xốt chua ngọt) đĩa cực lớn nên gọi ít món tránh thừa.",
      corridor2Line: "Cụm đóng tàu hạng nặng Đại Liên, máy công cụ chính xác Thẩm Dương & robot công nghiệp SIASUN. Nguồn cung cấp thiết bị cơ khí cảng biển và dây chuyền tự động hóa."
    },
    "prov-jilin": {
      headerFormatted: "吉林省 · 吉 (Cát)",
      urbanPulseTitle: "Bạch Sơn Tuyết Phủ Trường Bạch Sơn & Tổ Hợp Điện Ảnh – Xe Hơi Trường Xuân",
      urbanPulseVi: "Mùa đông rực sáng ánh băng tuyết trên mặt hồ Thiên Trì núi Trường Bạch (2.189m) cùng những rặng cây bám sương giá 'Vụ Tùng' dọc sông Tùng Hoa thành phố Cát Lâm.",
      lineageVi: "Đất tổ Cao Câu Ly cổ đại, di sản Cao Câu Ly Tập An (UNESCO) và cái nôi nền công nghiệp ô tô – điện ảnh hiện đại Trung Quốc thập niên 1950 (FAW Hồng Kỳ).",
      stations: [
        { hanzi: "长春站", pinyin: "Chángchūn Zhàn", noteVi: "Trung tâm đường sắt tỉnh Cát Lâm nối Trường Xuân – Cáp Nhĩ Tân – Thẩm Dương" },
        { hanzi: "长白山站", pinyin: "Chángbáishān Zhàn", noteVi: "Ga cao tốc rừng thông mới nối thẳng sườn Bắc núi Trường Bạch" }
      ],
      bookingVi: "Khu thắng cảnh Trường Bạch Sơn giới hạn vé theo khung giờ (đặt trên WeChat chính thức bằng hộ chiếu trước 5 ngày, giữ ấm máy ảnh & pin điện thoại khi âm -20°C). Thưởng thức ẩm thực Triều Tiên Diên Biên (mì lạnh, kim chi) rất chuẩn vị.",
      corridor2Line: "Thủ phủ công nghiệp ô tô FAW Trường Xuân, toa tàu cao tốc CRRC Trường Khách & chế biến sâm Trường Bạch. Nguồn công nghệ đường sắt nhẹ và thực phẩm chăm sóc sức khỏe."
    },
    "prov-heilongjiang": {
      headerFormatted: "黑龙江省 · 黑 (Hắc)",
      urbanPulseTitle: "Thế Giới Băng Đăng Cáp Nhĩ Tân & Mái Vòm Hành Tây Phố Trung Ương",
      urbanPulseVi: "Cáp Nhĩ Tân tỏa sáng như tòa lâu đài pha lê trong Lễ hội Băng Đăng Thế giới vào tháng Giêng dưới trời âm -25°C, nơi người đi dạo trên phố lát đá trăm tuổi ăn que kem Madieer bất chấp tuyết rơi cạnh nhà thờ Thánh Sophia.",
      lineageVi: "Văn minh săn bắt – ngư nghiệp lưu vực Hắc Long Giang–Tùng Hoa hợp lưu nét kiến trúc chiết trung Nga–Âu đầu thế kỷ XX tại hành lang đường sắt Đông Thanh.",
      stations: [
        { hanzi: "哈尔滨西站", pinyin: "Hā'ěrbīnxī Zhàn", noteVi: "Ga HSR chính (từ Bắc Kinh Triều Dương ~4h30)" },
        { hanzi: "哈尔滨站", pinyin: "Hā'ěrbīn Zhàn", noteVi: "Ga kiến trúc cổ gần Phố Trung Ương & Nhà thờ Thánh Sophia" }
      ],
      bookingVi: "Thế giới Băng Tuyết (冰雪大世界) mở cao điểm 20/12–tháng 2, mua vé định danh hộ chiếu trên WeChat trước 3 ngày và dán miếng giữ nhiệt cho smartphone tránh tắt nguồn đột ngột do lạnh.",
      corridor2Line: "Kho vựa lương thực – đậu tương lớn nhất cả nước, chế tạo tuabin điện Đại Khánh – Cáp Nhĩ Tân. Trục hợp tác thiết bị năng lượng và nông sản ôn đới chất lượng cao."
    },
    "prov-jiangsu": {
      headerFormatted: "江苏省 · 苏 (Tô)",
      urbanPulseTitle: "Tường Trắng Ngói Xám Tô Châu, Bảo Tàng Nam Kinh & Con Đường Ngô Đồng",
      urbanPulseVi: "Vừa rời khỏi những tòa cao ốc kính thép khu Công nghiệp Tô Châu bên hồ Kim Kê hiện đại, chỉ 15 phút xe bạn đã lọt vào không gian tĩnh lặng của Bảo tàng Tô Châu do kiến trúc sư Bối Duật Minh (I.M. Pei) thiết kế bên cạnh khu vườn cổ Chuyết Chính Viên 500 năm tuổi.",
      lineageVi: "Kinh đô Lục Triều – Minh sơ Nam Kinh, tinh hoa Giang Nam Tống–Minh ('Thiên đường hạ giới Tô – Hàng'), Côn khúc, Tơ lụa, Bốn nhà sưu tầm Ngọc văn Lương Chử & Thi phái Ngô Môn.",
      stations: [
        { hanzi: "南京南站", pinyin: "Nánjīngnán Zhàn", noteVi: "Trục đường sắt ngã tư lớn nhất Hoa Đông (tới Thượng Hải 1h05)" },
        { hanzi: "苏州站", pinyin: "Sūzhōu Zhàn", noteVi: "Nằm sát khu phố cổ và chỉ cách Chuyết Chính Viên 1,5 km đi bộ" }
      ],
      bookingVi: "Bảo tàng Nam Kinh (南京博物院), Bảo tàng Tô Châu & Chuyết Chính Viên bắt buộc đặt đúng khung giờ (thường mở trước 7 ngày lúc 08:00/18:00 trên WeChat bằng hộ chiếu). Ẩm thực Hoài Dương tinh tế vị ngọt thanh: thử Cua lông Dương Trừng Hồ và Vịt muối Nam Kinh.",
      corridor2Line: "Cụm sản xuất điện tử – chip bán dẫn – cơ khí chính xác Tô Châu–Vô Tích & cụm cảng sông–biển Nam Thông. Là đối tác sản xuất đầu nguồn linh kiện CNC, dệt nhuộm cao cấp cho miền Bắc Việt Nam."
    },
    "prov-zhejiang": {
      headerFormatted: "浙江省 · 浙 (Chiết)",
      urbanPulseTitle: "Tây Hồ Hàng Châu Không Thu Vé, Thủy Trấn Ô Trấn & Đô Thị Thanh Toán Số",
      urbanPulseVi: "Hàng Châu là bức tranh tương phản tuyệt đẹp: sáng leo đồi hái trà Long Tỉnh giữa sương Tây Hồ bên Bảo tàng Lương Chử 5.000 năm, chiều thanh toán từng cốc nước vỉa hè bằng quét lòng bàn tay WeChat tại đại bản doanh kinh tế số Hàng Châu.",
      lineageVi: "Đất Việt cổ, cái nôi văn hóa Lương Chử (UNESCO), kinh đô Lâm An Nam Tống tinh mỹ, Tâm học Vương Dương Minh (Dư Diêu) và đạo thương nhân Ôn Châu – Ninh Ba.",
      stations: [
        { hanzi: "杭州东站", pinyin: "Hángzhōudōng Zhàn", noteVi: "Tuyến thẳng Thượng Hải (45p), Ninh Ba (45p), Nghĩa Ô (32p)" },
        { hanzi: "义乌站", pinyin: "Yìwū Zhàn", noteVi: "Cửa ngõ Chợ Thương mại Quốc tế Nghĩa Ô" }
      ],
      bookingVi: "Toàn bộ quần thể Tây Hồ miễn phí vé cổng, riêng Chùa Linh Ẩn mua 2 tầng vé (Phi Lai Phong + Chùa); tháng 3–5 mùa xuân hái trà rất đẹp. Đến Nghĩa Ô dùng tiếng Việt/Anh đơn giản vẫn ổn nhưng chuẩn bị Alipay TourCard thanh toán mượt mọi quầy.",
      corridor2Line: "Hệ sinh thái thương mại điện tử Alibaba (Hàng Châu), Chợ bán buôn Nghĩa Ô & Cảng container Ninh Ba – Chu Sơn số 1 thế giới về sản lượng hàng hóa. Cung cấp trực tiếp nguồn hàng gia dụng, TMĐT và logistics cảng cho doanh nghiệp Việt."
    },
    "prov-anhui": {
      headerFormatted: "安徽省 · 皖 (Hoản)",
      urbanPulseTitle: "Biển Mây Hoàng Sơn, Làng Cổ Hoành Thôn & 'Kinh Đô Công Nghệ Hợp Phì'",
      urbanPulseVi: "An Huy sở hữu hai cực kỳ diệu: phương Nam là bức thủy mặc sống ở Hoành Thôn – Tây Đệ với mái ngói đầu ngựa Huy Phái soi xuống hồ Nam Hồ dưới chân núi Hoàng Sơn; phương Bắc tại Hợp Phì lại là đại bản doanh nghiên cứu pin xe điện, lượng tử và chip DRAM.",
      lineageVi: "Quê hương Trang Tử, Chu Hy (tổ quán Huy Châu), dòng Huy Thương thống lĩnh thương trường Minh–Thanh ('Vô Huy bất thành trấn'), Hý khúc Hoàng Mai và Văn phòng tứ bảo Tuyên Thành.",
      stations: [
        { hanzi: "合肥南站", pinyin: "Héféinán Zhàn", noteVi: "Hub kết nối Thượng Hải (1h50) và đi Hoàng Sơn Bắc (1h25)" },
        { hanzi: "黄山北站", pinyin: "Huángshānběi Zhàn", noteVi: "Có xe buýt thẳng ngay bến vào chân núi Hoàng Sơn và làng Hoành Thôn" }
      ],
      bookingVi: "Vườn quốc gia Hoàng Sơn hạn chế lượt khách mỗi ngày, đặt vé cổng + vé cáp treo trước qua WeChat và mang áo mưa mỏng vì thời tiết đỉnh núi thay đổi nhanh. Ẩm thực Huy Phái đậm vị: thử Cá Quế thối (臭鳜鱼 - thơm ngọt thịt dù mùi lên men nồng).",
      corridor2Line: "Cụm xe điện (NIO, BYD Hợp Phì), màn hình BOE & chất bán dẫn Hợp Phì cùng công nghiệp vật liệu giấy Tuyên Thành. Điểm trung chuyển công nghệ xanh và linh kiện hiển thị cho lắp ráp ASEAN."
    },
    "prov-fujian": {
      headerFormatted: "福建省 · 闽 (Mân)",
      urbanPulseTitle: "Thổ Lâu Tròn Đất Nện Vĩnh Định, Đảo Cổ Lãng Tự & Thành Phố Hài Hòa Đường – Việt",
      urbanPulseVi: "Rảo bước dưới nắng chiều giữa hàng trăm tòa Thổ Lâu (土楼) hình tròn tựa pháo đài bằng đất nện của người Khách Gia ở Vĩnh Định, rồi bắt phà ra đảo Cổ Lãng Tự (Hạ Môn) không bóng xe cơ giới đầy đàn piano cổ điển.",
      lineageVi: "Đất Mân Việt xưa, Thương cảng Tuyền Châu 'Đệ nhất Đại cảng Đông phương' thời Tống–Nguyên (UNESCO), Lý học Chu Hy tại Vũ Di Sơn, văn hóa trà Ô Long – Thiết Quan Âm và Hội quán Phúc Kiến tại Hội An Việt Nam.",
      stations: [
        { hanzi: "福州南站", pinyin: "Fúzhōunán Zhàn", noteVi: "Thủ phủ Phúc Châu (gần Tam Phường Thất Hạng)" },
        { hanzi: "厦门北站", pinyin: "Xiàménběi Zhàn", noteVi: "Tuyến HSR ven biển nối Hạ Môn – Tuyền Châu – Vũ Di Sơn" }
      ],
      bookingVi: "Vé phà qua Đảo Cổ Lãng Tự (鼓浪屿) bán theo giờ trên WeChat Mini-Program '屿见厦门' bằng hộ chiếu, phải đi đúng chuyến bến Bưu Điện (邮轮中心厦鼓码头); uống trà Công Phu ở Tuyền Châu đừng từ chối khi chủ nhà tiếp nước nóng lần đầu tráng chén.",
      corridor2Line: "Thủ phủ pin xe điện CATL Ninh Đức, cụm giày dép Tấn Giang (Anta) & cảng container Tuyền Châu–Hạ Môn. Kết nối sâu chuỗi dệt may, nguyên phụ liệu da giày và cộng đồng doanh nhân Mân Nam gốc Hoa ở Việt Nam."
    },
    "prov-jiangxi": {
      headerFormatted: "江西省 · 赣 (Cám)",
      urbanPulseTitle: "Kinh Đô Sứ Cảnh Đức Trấn Phiên Chợ Đêm Nghệ Nhân Trẻ & Vách Đá Vọng Tiên Cốc",
      urbanPulseVi: "Cảnh Đức Trấn đang trở thành 'lò khởi nghiệp gốm sứ' sôi động bậc nhất cho hàng vạn sinh viên mỹ thuật trẻ: tối thứ Sáu hàng tuần, xưởng gốm Đào Khê Xuyên (陶溪川) sáng rực hàng trăm gian hàng vẽ tay sứ Thanh Hoa hiện đại.",
      lineageVi: "Quê hương Thư viện Bạch Lộc Động của Chu Hy (Lư Sơn), Đằng Vương Các ('Lạc hà dữ cô vụ tề phi'), vương quốc gốm sứ Thanh Hoa Cảnh Đức Trấn xuất khẩu toàn thế giới từ thời Nguyên–Minh–Thanh.",
      stations: [
        { hanzi: "南昌西站", pinyin: "Nánchāngxī Zhàn", noteVi: "Nối thẳng Bảo tàng Hải Hôn Hầu & Đằng Vương Các" },
        { hanzi: "景德镇北站", pinyin: "Jǐngdézhènběi Zhàn", noteVi: "Ga HSR đi thẳng Bảo tàng Ngự Diêu & Đào Khê Xuyên (~15p taxi)" }
      ],
      bookingVi: "Bảo tàng Hải Hôn Hầu & Đằng Vương Các tại Nam Xương cần đặt qua WeChat; ở Cảnh Đức Trấn nhớ ghé Bảo tàng Gốm sứ Trung Quốc (miễn phí nhưng cần quét hộ chiếu đặt lịch). Ẩm thực Giang Tây nổi tiếng CỰC CAY — nhớ nói rõ 'Mǐǎnlà / Bùyào là' (免辣 - Không cay).",
      corridor2Line: "Thủ phủ gốm sứ gia dụng – kỹ nghệ Cảnh Đức Trấn, tinh chế đất hiếm Cám Châu & linh kiện năng lượng mặt trời. Cung ứng vật liệu gốm công nghiệp và pin lithium cho khu vực."
    },
    "prov-shandong": {
      headerFormatted: "山东省 · 鲁 (Lỗ)",
      urbanPulseTitle: "Đỉnh Thái Sơn Bậc Đá Ngàn Đèn, Bia Đỏ Thanh Đảo & Văn Hóa Ngũ Nhạc",
      urbanPulseVi: "Đêm ở Thái An, hàng nghìn du khách trẻ cầm gậy leo 6.600 bậc đá lên Nam Thiên Môn đỉnh Thái Sơn đón bình minh giữa biển mây; còn tại Thanh Đảo, ly bia tươi nguyên chất đựng trong túi ni-lông được bán dọc phố biển mái ngói đỏ phong cách châu Âu.",
      lineageVi: "Tâm điểm Văn hóa Tề–Lỗ (齐鲁文化), cái nôi Nho giáo tại Khúc Phụ (Khổng Tử – Mạnh Tử), Bình Sơn Tôn Tử và cội nguồn ẩm thực Lỗ Thái — đứng đầu Tứ đại danh thái.",
      stations: [
        { hanzi: "济南西站", pinyin: "Jǐnánxī Zhàn", noteVi: "Trạm HSR chính (Bắc Kinh Nam 1h30) kết nối Tuyền Thành – Khúc Phụ" },
        { hanzi: "青岛站 / 曲阜东站", pinyin: "Qīngdǎo Zhàn / Qūfùdōng Zhàn", noteVi: "Ga cổ Thanh Đảo sát biển & Ga Khúc Phụ Đông thăm Khổng Miếu" }
      ],
      bookingVi: "Vé leo núi Thái Sơn (泰山) và Quần thể Tam Khổng Khúc Phụ (孔庙·孔府·孔林) đặt online qua WeChat (hộ chiếu qua cửa quét thủ công); khi dùng bữa ở Sơn Đông chú ý người Lỗ rất hiếu khách hay mời rượu và giữ nguyên tắc bàn tiệc vị trí chủ tọa hướng cửa.",
      corridor2Line: "Cụm điện gia dụng thông minh Haier – Hisense Thanh Đảo, cơ khí nông nghiệp Duy Phường & lốp xe – lốp công nghiệp. Nguồn cung cấp thiết bị điện lạnh và máy móc chế biến nông sản sang Việt Nam."
    },
    "prov-henan": {
      headerFormatted: "河南省 · 豫 (Dự)",
      urbanPulseTitle: "Thần Đô Lạc Dương Ưng Thiên Môn Rực Sáng Đêm Đường & Bạch Mã Tự",
      urbanPulseVi: "Khi màn đêm buông xuống cố đô Lạc Dương, hàng ngàn bạn trẻ khoác Hán phục Đường–Tống dạo dưới cổng Ứng Thiên Môn cao 50m rực ánh đèn 3D mapping, còn tại Bảo tàng Hà Nam ở Trịnh Châu lại vang tiếng sáo xương Giả Hồ 9.000 năm tuổi.",
      lineageVi: "Trung Nguyên — chiếc nôi văn minh Hoa Hạ bên Hoàng Hà: Giáp Cốt Văn Ân Khư (An Dương), Bạch Mã Tự Phật giáo đầu tiên (68 CN), Hang đá Long Môn, Chùa Thiếu Lâm (Tùng Sơn) và cố đô 13 triều Lạc Dương – Khai Phong.",
      stations: [
        { hanzi: "郑州东站", pinyin: "Zhèngzhōudōng Zhàn", noteVi: "Ngã tư 'Chữ Mễ' HSR lớn nhất Trung Quốc (2h15 từ Bắc Kinh)" },
        { hanzi: "洛阳龙门站", pinyin: "Luòyáng Lóngmén Zhàn", noteVi: "Chỉ cách Hang đá Long Môn 15 phút xe taxi" }
      ],
      bookingVi: "Bảo tàng Hà Nam (河南博物院) & Hang đá Long Môn bắt buộc đặt qua WeChat 3–5 ngày trước (dùng hộ chiếu đăng ký cổng thủ công 人工通道); tháng 4 ngắm Mẫu Đơn Lạc Dương cực đẹp. Món Thủy Tịch Lạc Dương dùng nhiều canh nóng ăn kèm bánh nướng.",
      corridor2Line: "Trung tâm vận tải hàng không – iPhone lớn nhất miền Trung (Khu cảng hàng không Trịnh Châu), nông sản chế biến & máy móc xây dựng YTO. Nút trung chuyển tuyến tàu hàng xuyên lục địa Á–Âu."
    },
    "prov-hubei": {
      headerFormatted: "湖北省 · 鄂 (Ngạc)",
      urbanPulseTitle: "Hoàng Hạc Lâu Bên Cầu Thép Trường Giang & Đêm Ăn Sáng Mì Nhiệt Can Ngõ Hộ Bộ",
      urbanPulseVi: "Vũ Hán đánh thức bạn lúc 6:30 sáng bằng văn hóa 'Quá Tảo' (过早): người dân bưng bát mì Nhiệt Can Miến trộn tương vừng vừa đi vừa ăn, chiều leo Hoàng Hạc Lâu ngắm đoàn tàu cao tốc lao vút ngang cầu Trường Giang 2 tầng.",
      lineageVi: "Đất Sở hào hoa lãng mạn (Khuất Nguyên *Sở Từ*, Bộ chuông Biên chung Tăng Hầu Ất 433 TCN 2.400 năm, Nhạc Vũ Đang Đạo gia) và nơi bùng nổ Cách mạng Tân Hợi năm 1911.",
      stations: [
        { hanzi: "武汉站", pinyin: "Wǔhàn Zhàn", noteVi: "Ga siêu nút trục Bắc–Nam (4h từ Bắc Kinh Tây / 4h từ Quảng Châu Nam)" },
        { hanzi: "汉口站", pinyin: "Hànkǒu Zhàn", noteVi: "Kiến trúc cổ Châu Âu đi Nghi Xương (Tam Hiệp) & Tương Dương" }
      ],
      bookingVi: "Bảo tàng tỉnh Hồ Bắc (xem Biên chung Tăng Hầu Ất & Kiếm Việt Vương Câu Tiễn) miễn phí nhưng BẮT BUỘC săn vé qua WeChat 5 ngày trước (mùa cao điểm hết rất nhanh); đi Võ Đang Sơn nên ngủ 1 đêm trên đỉnh Kim Đỉnh.",
      corridor2Line: "Thung lũng Quang học Vũ Hán (Optics Valley 光谷 - dẫn đầu laser, cáp quang & chip nhớ Yangtze) + trung tâm ô tô Đông Phong. Mắt xích quan trọng về máy cắt laser công nghiệp và cáp viễn thông."
    },
    "prov-hunan": {
      headerFormatted: "湖南省 · 湘 (Tương)",
      urbanPulseTitle: "Cột Đá Thiên Môn Sơn Trương Gia Giới, Đảo Quất Tử Châu & Trà Chanh Chayan Yuese",
      urbanPulseVi: "Từ Trường Sa sôi động văn hóa giải trí đêm nơi du khách xếp hàng mua ly trà sữa Chayan Yuese (茶颜悦色) ở Ngũ Nhất Quảng Trường, chỉ cần 2 giờ tàu cao tốc bạn đã chạm vào biển đá dựng đứng giữa mây mù Trương Gia Giới.",
      lineageVi: "Truyền thống Hồ Tương Thực Học (Thư viện Nhạc Lộc ngàn năm — 'Duy Sở hữu tài, vu tư vi thịnh'), mồ Mã Vương Đôi 2.100 năm với áo lụa 49g và tinh thần nhập thế mạnh mẽ.",
      stations: [
        { hanzi: "长沙南站", pinyin: "Chángshānán Zhàn", noteVi: "Ga HSR chính (kết nối thẳng Trương Gia Giới Tây trong 2h05)" },
        { hanzi: "张家界西站", pinyin: "Zhāngjiājièxī Zhàn", noteVi: "Cửa ngõ công viên Vũ Lăng Nguyên & Thiên Môn Sơn" }
      ],
      bookingVi: "Bảo tàng Hồ Nam (chiêm ngưỡng Thiếp lụa Tây Hán Mã Vương Đôi) & Đảo Quất Tử Châu đặt qua WeChat 3–5 ngày bằng hộ chiếu; Trương Gia Giới mùa thu tháng 9–11 quang mây ít sương dày. Món Tương Thái cực kỳ cay nồng mùi ớt tươi — người không quen cay cần dặn kỹ.",
      corridor2Line: "Thủ phủ máy móc công trình số 1 Trung Quốc tại Trường Sa (Sany, Zoomlion) & đầu máy điện Chu Châu (CRRC). Cung cấp xe cần cẩu, máy đào công trình hạ tầng lớn cho các dự án tại Việt Nam."
    },
    "prov-guangdong": {
      headerFormatted: "广东省 · 粤 (Việt)",
      urbanPulseTitle: "Công Xưởng Phần Cứng Hoa Cường Bắc Thâm Quyến & Trà Sáng Dimsum Quảng Châu",
      urbanPulseVi: "Quảng Đông sống động từ 7 giờ sáng trong tiếng đẩy xe tre phục vụ trà Điểm Tâm 'Yum Cha' (饮茶) ở Quảng Châu tới ánh đèn xanh LED tại khu chợ linh kiện điện tử Hoa Cường Bắc (华强北) Thâm Quyến — nơi bạn có thể lắp ráp xong 1 nguyên mẫu phần cứng AI chỉ trong 24 giờ.",
      lineageVi: "Văn hóa Lĩnh Nam (岭南文化) cởi mở giao thương biển từ Con đường Tơ lụa Hàng hải thế kỷ II, cái nôi tiếng Quảng Đông (Việt ngữ), Nhạc kịch Quảng Đông, Điêu Lâu Khai Bình (UNESCO) và cộng đồng người Hoa tại Chợ Lớn Việt Nam.",
      stations: [
        { hanzi: "广州南站", pinyin: "Guǎngzhōunán Zhàn", noteVi: "Ga đường sắt bận rộn nhất thế giới nối mạng toàn Hoa Nam" },
        { hanzi: "深圳北站", pinyin: "Shēnzhēnběi Zhàn", noteVi: "Trung tâm kết nối Thâm Quyến – Hồng Kông Tây Cửu Long (18p)" }
      ],
      bookingVi: "Bảo tàng Tỉnh Quảng Đông (Bảo tàng Cổng Trống bên sông Châu Giang) & tháp Canton Tower đặt online WeChat bằng hộ chiếu; đi Thâm Quyến–Quảng Châu từ Việt Nam bay thẳng rất tiện và khí hậu giống miền Nam Việt Nam (nên tránh đỉnh mưa bão tháng 6–8). Khi dùng trà sáng (Yum Cha): nhớ gõ 2 ngón tay xuống bàn cảm ơn khi người khác rót trà.",
      corridor2Line: "Siêu vùng Vịnh Lớn (GBA — Thâm Quyến, Đông Quan, Phật Sơn, Quảng Châu): phần cứng AI/EV (BYD, Huawei, DJI), dệt may, nội thất & chiếu sáng. Nguồn cung ứng thương mại B2B trực tiếp lớn bậc nhất với Việt Nam."
    },
    "prov-hainan": {
      headerFormatted: "海南省 · 琼 (Quỳnh)",
      urbanPulseTitle: "Cảng Thương Mại Tự Do Miễn Thuế Tam Á & Đường Sắt Cao Tốc Vòng Đảo Đầu Tiên Thế Giới",
      urbanPulseVi: "Hải Nam mang phong vị nhiệt đới biển đảo thư thái giống miền Trung Việt Nam: đường sắt cao tốc chạy khép kín một vòng tròn quanh bờ biển nhiệt đới, kết nối rừng mưa nhiệt đới Ngũ Chỉ Sơn với trung tâm mua sắm miễn thuế quốc tế Hải Đường Loan.",
      lineageVi: "Địa danh Quỳnh Châu gắn với nơi đày ải và giảng học của văn hào Tô Đông Pha (Tô Thức) cuối đời Bắc Tống (1097–1100), cùng truyền thống dệt thổ cẩm người Lê (UNESCO).",
      stations: [
        { hanzi: "海口东站", pinyin: "Hǎikǒudōng Zhàn", noteVi: "Cửa ngõ vòng cao tốc đảo Hải Nam" },
        { hanzi: "三亚站", pinyin: "Sānyà Zhàn", noteVi: "Trung tâm nghỉ dưỡng nhiệt đới cực Nam" }
      ],
      bookingVi: "Miễn visa hoặc e-visa thuận lợi theo đoàn/transit tại Hải Nam theo chính sách Cảng tự do (tuy nhiên đi nối tuyến vào nội địa TQ vẫn bắt buộc visa/giấy thông hành hợp lệ); nếm Gà Văn Xương (文昌鸡) và cơm dừa thanh ngọt.",
      corridor2Line: "Cảng Thương mại Tự do Toàn Đảo (Hainan FTP 2025/2026) & khu hàng không vũ trụ Văn Xương. Điểm thử nghiệm thuế quan 0% và du lịch biển vịnh Bắc Bộ."
    },
    "prov-sichuan": {
      headerFormatted: "四川省 · 川 / 蜀 (Xuyên / Thục)",
      urbanPulseTitle: "Chén Trà Nắp Công Viên Nhân Dân Thành Đô & Mặt Nạ Đồng Cổ Thục Tam Tinh Đôi",
      urbanPulseVi: "Người Thành Đô sống theo nhịp điệu 'Thiên Phủ Chi Quốc' không đâu vội: buổi trưa ngồi thong dong dưới tán trúc Công viên Nhân Dân (人民公园) nhấp chén trà nắp (盖碗茶), chiều ngồi tàu cao tốc 30 phút tới Quảng Hán chiêm ngưỡng mặt nạ đồng mắt lồi kỳ bí 3.500 năm tuổi tại Tam Tinh Đôi.",
      lineageVi: "Nền văn minh Cổ Thục độc lập song hành Trung Nguyên (Tam Tinh Đôi & Kim Sa), Đạo giáo Thanh Thành Sơn, hệ thống thủy lợi Đô Giang Yển 2.280 năm không đập chặn ngang (256 TCN) và quê hương Thi tiên Lý Bạch – Đỗ Phủ Thảo Đường.",
      stations: [
        { hanzi: "成都东站", pinyin: "Chéngdūdōng Zhàn", noteVi: "Siêu ga Tây Nam đi Trùng Khánh (1h15), Tây An (3h20), Cửu Trại Câu" },
        { hanzi: "犀浦站", pinyin: "Xīpǔ Zhàn", noteVi: "Ga chuyển chung tuyến Metro số 2/6 đi thẳng Đô Giang Yển & Thanh Thành Sơn" }
      ],
      bookingVi: "Bảo tàng Tam Tinh Đôi (三星堆博物馆) & Khu bảo tồn Gấu trúc Thành Đô (熊猫基地) cháy vé cực nhanh — phải canh mở vé WeChat trước 5–7 ngày bằng hộ chiếu! Tháng 3–6 & 9–11 tuyệt đẹp. Khi ăn Lẩu Tứ Xuyên dặn 'Wēilà' (微辣 - ít cay) và gọi sữa đậu nành giải vị tê hoa tiêu.",
      corridor2Line: "Cụm chip bán dẫn – hàng không Thành Đô, pin lithium Nghi Tân (CATL lớn nhất thế giới) & thủy điện sạch. Liên kết hành lang công nghệ Tây Nam qua Trùng Khánh về Đông Nam Á."
    },
    "prov-guizhou": {
      headerFormatted: "贵州省 · 贵 / 黔 (Quý / Kiềm)",
      urbanPulseTitle: "Thung Lũng Dữ Liệu Lớn & Thiên Hộ Miêu Trại Sáng Đèn Như Ngân Hà Trong Sương",
      urbanPulseVi: "Quý Châu tạo ấn tượng thị giác ngoạn mục từ hàng loạt cây cầu dây văng cao nhất hành tinh bắc qua hẻm núi đá vôi, dẫn vào làng gỗ nghìn nóc nhà người Miêu (西江千户苗寨) thắp đèn rực sáng triền núi lúc hoàng hôn bên cạnh trung tâm lưu trữ dữ liệu Apple/Huawei nằm trong hang núi mát tự nhiên.",
      lineageVi: "Vùng núi Karst nơi Vương Dương Minh giác ngộ học thuyết 'Tri Hành Hợp Nhất' tại Long Trường (1508), cùng bản sắc trang phục bạc thủ công và đại ca dân ca Đa Thanh của người Miêu – Đồng.",
      stations: [
        { hanzi: "贵阳北站", pinyin: "Guìyángběi Zhàn", noteVi: "Đầu mối cao tốc rừng núi nối Côn Minh (2h15), Quảng Châu (4h30), Quế Lâm" },
        { hanzi: "凯里南站", pinyin: "Kǎilǐnán Zhàn", noteVi: "Cửa ngõ đi Tây Giang Thiên Hộ Miêu Trại (~40 phút)" }
      ],
      bookingVi: "Mạng lưới xe buýt thẳng từ ga HSR vào các bản Miêu/Đồng và Thác Hoàng Quả Thụ rất tiện (đặt combo vé + xe trung chuyển qua Ctrip/WeChat); nên thử Lẩu Cá Canh Chua người Miêu (凯里酸汤鱼) vị chua thanh dễ ăn với người Việt.",
      corridor2Line: "Trung tâm điện toán đám mây 'China Data Valley' (nhiệt độ mát quanh năm & thủy điện rẻ), công nghiệp rượu Mao Đài & pin LFP phốt phát. Điểm kết nối logistics đường sắt Trùng Khánh–Quý Dương–Vịnh Bắc Bộ."
    },
    "prov-yunnan": {
      headerFormatted: "云南省 · 云 / 滇 (Vân / Điền)",
      urbanPulseTitle: "Đường Sắt Xuyên Biên Hà Khẩu – Côn Minh, Nấm Rừng Hoang Dã & Cổ Trấn Ngọc Long",
      urbanPulseVi: "Từ Việt Nam qua cầu Lào Cai sang Hà Khẩu Bắc, chỉ vài giờ tàu cao tốc bạn đi từ rừng đá Thạch Lâm qua phố hoa Côn Minh bốn mùa như mùa xuân tới cổ trấn Lệ Giang ngập nước suối tuyết tan soi bóng núi Ngọc Long cao 5.596m.",
      lineageVi: "Vương quốc Điền cổ, vương quốc Nam Chiếu – Đại Lý Phật giáo mật tông, khởi nguồn Con đường Trà Mã Cổ Đạo (茶马古道) mang trà bánh Phổ Nhĩ lên Tây Tạng và hệ chữ tượng hình Đông Ba (东巴文) Nạp Tây còn sống.",
      stations: [
        { hanzi: "河口北站", pinyin: "Hékǒuběi Zhàn", noteVi: "Ga cửa khẩu sát Lào Cai — đi thẳng Côn Minh hoặc Mông Tự" },
        { hanzi: "昆明南站", pinyin: "Kūnmíngnán Zhàn", noteVi: "Trung tâm HSR Tây Nam đi Đại Lý (2h), Lệ Giang (3h30)" },
        { hanzi: "丽江站", pinyin: "Lìjiāng Zhàn", noteVi: "Đi Cổ trấn Lệ Giang, Ngọc Long Tuyết Sơn & Shangri-La" }
      ],
      bookingVi: "Đi qua Lệ Giang (2.400m) -> Shangri-La (3.200m) nên lên cao từ từ tránh sốc độ cao, mang thuốc/oxy bình mini nếu lên Ngọc Long Tuyết Sơn; Lẩu Nấm Rừng (野生菌火锅) tuyệt đối đợi chín kỹ đúng đồng hồ cát nhà hàng mới ăn để an toàn! Trà Phổ Nhĩ nên thử sống (Sinh trà) và chín (Thục trà).",
      corridor2Line: "Cụm trồng hoa tươi Đấu Nam (lớn nhất châu Á), thủy điện sạch, đồng – thiếc và nông sản cao nguyên. Cửa ngõ đường sắt – cao tốc Lào Cai – Hà Khẩu kết nối trực tiếp miền Bắc Việt Nam."
    },
    "prov-shaanxi": {
      headerFormatted: "陕西省 · 陕 / 秦 (Thiểm / Tần)",
      urbanPulseTitle: "Đội Quân Đất Nung Binh Mã Dũng & Đêm Phố Đi Bộ Đại Đường Bất Dạ Thành",
      urbanPulseVi: "Tây An dung hòa cổ điển với hiện đại cực tài tình: ban ngày đứng lặng trước hàng nghìn chiến binh gốm sắc mặt không ai giống ai ở lăng Tần Thủy Hoàng, chiều tối đạp xe trên Tường thành cổ Tây An dài 13,7 km rồi dạo bộ phố Đường Bất Dạ Thành ánh đèn hoa rực rỡ.",
      lineageVi: "Trái tim 13 triều đại Tần – Hán – Tùy – Đường tại Quan Trung (Trường An từng là siêu đô thị 1 triệu dân điểm khởi đầu Con đường Tơ lụa); Tháp Đại Nhạn nơi Huyền Trang dịch kinh và cái nôi Tần Xoang.",
      stations: [
        { hanzi: "西安北站", pinyin: "Xī'ānběi Zhàn", noteVi: "Ga HSR cực lớn đi Lạc Dương (1h20), Thành Đô (3h20), Lan Châu (3h)" },
        { hanzi: "西安站", pinyin: "Xī'ān Zhàn", noteVi: "Sát Tường thành phía Bắc, tiện đón xe buýt du lịch đi Binh Mã Dũng" }
      ],
      bookingVi: "Bảo tàng Lịch sử Thiểm Tây (陕西历史博物馆) là một trong 3 bảo tàng khó săn vé nhất Trung Quốc (đặt trên WeChat chính xác từng giây mở cổng bằng hộ chiếu, hoặc chọn Bảo tàng Tần Lĩnh/Tường Thành dự phòng); thử Roujiamo (bánh kẹp thịt kho cổ) và mì sợi bản to Biangbiang.",
      corridor2Line: "Thủ phủ hàng không vũ trụ – động cơ phản lực Tây An, điện tử bán dẫn & máy móc nặng Quan Trung. Đầu tàu xuất phát đoàn tàu hàng Trung–Âu (Changan Train) kết nối Trung Á."
    },
    "prov-gansu": {
      headerFormatted: "甘肃省 · 甘 / 陇 (Cam / Lũng)",
      urbanPulseTitle: "Hành Lang Hà Tây Bảy Màu Trương Dịch & Hang Động Bích Họa Mạc Cao Quật",
      urbanPulseVi: "Tàu cao tốc Lan Tân vút ngang qua sa mạc Gobi nhìn thẳng ra dãy Kỳ Liên Sơn tuyết phủ trắng xóa quanh năm — nơi từng là yết hầu Con đường Tơ lụa nối hang đá Mạc Cao Quật Đôn Hoàng, đụn cát Minh Sa và địa mạo núi cầu vồng Đan Hà Trương Dịch.",
      lineageVi: "Hành lang Hà Tây chiến lược thời Hán Vũ Đế ('Đoạn Hung Nô hữu tí'), kho tàng nghệ thuật Phật giáo 1.000 năm (366–1368 CN) tại Đôn Hoàng và nơi khai quật quốc bảo Đồng Bôn Mã (Mã Đạp Phi Yến).",
      stations: [
        { hanzi: "兰州西站", pinyin: "Lánzhōuxī Zhàn", noteVi: "Cửa ngõ Tây Bắc đi Đôn Hoàng, Trương Dịch, Tây Ninh" },
        { hanzi: "敦煌站", pinyin: "Dūnhuáng Zhàn", noteVi: "Cách Trung tâm Du khách Mạc Cao Quật & Minh Sa Sơn chỉ 15 phút" }
      ],
      bookingVi: "Vé hang Mạc Cao Quật Đôn Hoàng (莫高窟 - Hạng A xem được 8 hang + phim 3D) bán hết trước 25–30 ngày vào mùa hè/thu trên mini-program chính thức (hạng vé khẩn cấp B chỉ 4 hang, cần hộ chiếu đặt sớm!); sáng sớm thưởng thức 1 bát mì bò Lan Châu 'Nhất thanh, nhị bạch, tam hồng, tứ lục'.",
      corridor2Line: "Hành lang năng lượng gió – mặt trời sa mạc Gobi lớn nhất cả nước, tinh luyện niken – đồng và hóa dầu Lan Châu. Nút chuyển tải hàng hóa lục địa Tây Bắc."
    },
    "prov-qinghai": {
      headerFormatted: "青海省 · 青 (Thanh)",
      urbanPulseTitle: "Hồ Muối Gương Trời Trà Ca & Mùa Hoa Cải Vàng Rực Trên Hồ Thanh Hải (3.200m)",
      urbanPulseVi: "Mỗi tháng 7–8, hàng vạn mẫu hoa cải dầu vàng rực bao quanh bờ hồ nước mặn lớn nhất Trung Quốc Thanh Hải Hồ bên cạnh mặt hồ muối Trà Ca (茶卡盐湖) phẳng lặng phản chiếu mây trời cao nguyên Thanh–Tạng tựa tấm gương vô cực.",
      lineageVi: "Khởi nguồn Tam Giang Nguyên (Hoàng Hà, Trường Giang, Lan Thương/Mekong), Tu viện Tháp Nhĩ Tự (Tông Khách Ba Mật tông Hoàng giáo) và giao điểm văn hóa Hán – Tạng – Hồi – Thổ.",
      stations: [
        { hanzi: "西宁站", pinyin: "Xīníng Zhàn", noteVi: "Trạm đệm độ cao 2.275m xuất phát tàu Thanh–Tạng lên Lhasa" }
      ],
      bookingVi: "Ngủ 1–2 đêm tại Tây Ninh để cơ thể thích nghi độ cao; ở Tu viện Tháp Nhĩ Tự tuyệt đối không chụp ảnh trong chính điện và đi theo chiều kim đồng hồ quanh kinh luân. Không mặc trang phục quá ngắn vào khu tự viện.",
      corridor2Line: "Thủ phủ khai thác hồ muối kali, pin lithium & trang trại điện mặt trời cao nguyên khổng lồ (Hải Tây). Trung tâm năng lượng tái tạo siêu cao áp truyền tải về miền Đông."
    },
    "prov-taiwan": {
      headerFormatted: "台湾省 · 台 (Đài)",
      urbanPulseTitle: "Bảo Vật Cố Cung Đài Bắc & Vùng Đệm Bán Dẫn TSMC – Chợ Đêm Sĩ Lâm",
      urbanPulseVi: "Ban ngày trầm mặc trước kiệt tác Tống–Nguyên trong Cố Cung Đài Bắc (Bắp cải Ngọc Phỉ Thúy, *Khê Sơn Hành Lữ Đồ*, *Phú Xuân Sơn Cư Đồ* bản Vô Dụng Sư), buổi tối hòa vào dòng người nhộn nhịp giữa phố trà Ô Long Cao Sơn và những hàng ăn đường phố Sĩ Lâm.",
      lineageVi: "Lưu giữ trọn vẹn chữ Hán Phồn thể, tinh hoa thư họa quan diêu truyền thừa Nam Tống–Minh–Thanh tại Ngoại Song Khê, di sản Mân Nam – Khách Gia – Thổ dân Nam Đảo.",
      stations: [
        { hanzi: "台北车站", pinyin: "Táiběi Chēzhàn", noteVi: "Hub HSR & đường sắt truyền thống nối Đài Trung – Cao Hùng trong 1h30" }
      ],
      bookingVi: "Tham quan Cố Cung Đài Bắc kiểm tra lịch luân chuyển triển lãm sách tranh quý ('Hạn triển 限展书画' thường chỉ mở 40 ngày dịp tháng 10); chuẩn bị thẻ EasyCard (悠游卡) đi mọi tuyến MRT và xe buýt.",
      corridor2Line: "Cụm sản xuất chip bán dẫn tiên tiến nhất toàn cầu tại Tân Trúc – Đài Nam (TSMC) & cơ khí chính xác. Nguồn linh kiện điện tử – IC đóng gói công nghệ cao cho chuỗi sản xuất toàn cầu."
    },
    "prov-inner-mongolia": {
      headerFormatted: "内蒙古自治区 · 蒙 (Mông)",
      urbanPulseTitle: "Sa Mạc Hưởng Sa Loan Hát Tiếng Cát & Đêm Lều Mông Cổ Thảo Nguyên Hulunbuir",
      urbanPulseVi: "Du khách từ ga cao tốc Hô Hòa Hạo Đặc chỉ mất hơn 1 giờ là có thể trải nghiệm sa mạc cát hát Vọng Sa Loan hoặc chạy dọc đồng cỏ thảo nguyên vô tận nơi bầu trời Dải Ngân Hà sà xuống tận mái lều Ger.",
      lineageVi: "Hòa quyện di sản du mục Bắc Á (Hồi Hột, Khiết Đan, Mông Cổ) với thư họa hang đá Âm Sơn (阴山岩画) và phế tích Thượng Đô thời Nguyên.",
      stations: [
        { hanzi: "呼和浩特东站", pinyin: "Hūhéhàotèdōng Zhàn", noteVi: "Tuyến cao tốc Kinh–Hô chỉ 2h15 từ Bắc Kinh Bắc" },
        { hanzi: "包头站", pinyin: "Bāotóu Zhàn", noteVi: "Trung tâm đất hiếm & tiếp cận sa mạc Khố Bố Tề" }
      ],
      bookingVi: "Mùa thảo nguyên xanh nhất vào cuối tháng 6 – đầu tháng 9 (lễ hội Naadam tháng 7–8); chênh lệch nhiệt độ ngày đêm lên tới 15°C nên luôn mang áo gió ấm; uống trà sữa mặn thảo nguyên và thử thịt cừu nướng đá.",
      corridor2Line: "Trung tâm trữ lượng đất hiếm số 1 toàn cầu tại Bạch Vân Ngạc Bác (Bao Đầu), chế biến sữa quy mô lớn (Yili, Mengniu) & điện gió. Đầu mối nguyên liệu nam châm vĩnh cửu cho động cơ xe điện."
    },
    "prov-guangxi": {
      headerFormatted: "广西壮族自治区 · 桂 (Quế)",
      urbanPulseTitle: "Đỉnh Núi Đá Vôi Tờ Tiền 20 Tệ Ở Quế Lâm & Cầu Đường Sắt Xuyên Biên Bằng Tường",
      urbanPulseVi: "Ngồi trên boong tàu xuôi dòng Ly Giang tới Hưng Bình (Dương Sóc), du khách cầm tờ tiền giấy 20 Nhân Dân Tệ so trực tiếp với dãy núi đá vôi phản chiếu sương khói y hệt thủy mặc cổ; cùng lúc đó tại biên giới Sùng Tả – Hữu Nghị Quan, dòng xe lạnh chở sầu riêng Việt Nam nối đuôi thông quan suốt đêm.",
      lineageVi: "Đất Bách Việt cổ đại (Tranh đá Hoa Sơn Tả Giang - UNESCO), kênh đào Linh Cừ năm 214 TCN nối lưu vực Trường Giang–Châu Giang và mối quan hệ ngôn ngữ–âm nhạc Tày/Nùng–Choang khăng khít qua biên giới.",
      stations: [
        { hanzi: "桂林西站 / 桂林北站", pinyin: "Guìlínxī Zhàn", noteVi: "Ga HSR ngắm sơn thủy Ly Giang & Dương Sóc" },
        { hanzi: "凭祥站", pinyin: "Píngxiáng Zhàn", noteVi: "Ga cửa khẩu đường sắt Hữu Nghị Quan — Đồng Đăng (Lạng Sơn)" },
        { hanzi: "防城港北站", pinyin: "Fángchénggǎngběi Zhàn", noteVi: "Cách cửa khẩu Đông Hưng – Móng Cái tuyến HSR nhánh ven vịnh" }
      ],
      bookingVi: "Tuyến đường bộ qua Cửa khẩu Hữu Nghị Quan (Lạng Sơn) hay Đông Hưng (Móng Cái) kết hợp tàu cao tốc Nam Ninh Đông đi Quế Lâm/Dương Sóc cực thuận tiện; mùa đẹp tháng 4–5 (sương khói) & 9–10. Nhớ thử Bún Ốc Liễu Châu (螺蛳粉) và Bún Quế Lâm (桂林米粉).",
      corridor2Line: "Cụm cảng biển Vị Bắc Bộ (Khâm Châu – Phòng Thành Cảng) & chuỗi cửa khẩu Sùng Tả–Bằng Tường–Đông Hưng. Trục thông quan nông sản, linh kiện điện tử và đường sắt liên vận trực tiếp nhất với Việt Nam."
    },
    "prov-tibet": {
      headerFormatted: "西藏自治区 · 藏 (Tạng)",
      urbanPulseTitle: "Quảng Trường Cung Điện Potala & Đoàn Hành Hương Ngũ Thể Đầu Địa Trước Đại Chiêu Tự",
      urbanPulseVi: "Dưới bầu trời xanh thẫm ở độ cao 3.650m tại Lhasa, dòng người hành hương Tạng truyền xoay kinh luân quay vòng quanh Đền Đại Chiêu (大昭寺) giữa hương khói bách xù ngào ngạt hướng về tòa cung điện trắng đỏ Potala uy nghiêm.",
      lineageVi: "Nền văn hóa Tạng truyền Phật giáo rực rỡ (Vương triều Thổ Phồn Tùng Tán Cán Bố & Công chúa Văn Thành thế kỷ VII), thư họa Thangka khoáng chất tự nhiên và Y học cổ Tạng bốn bộ.",
      stations: [
        { hanzi: "拉萨站", pinyin: "Lāsà Zhàn", noteVi: "Ga tàu cao nguyên Qinghai–Tibet & tuyến Fuxing chạy điện đi Nyingchi (Lâm Chi)" }
      ],
      bookingVi: "QUAN TRỌNG: Công dân nước ngoài bắt buộc phải xin Giấy phép Vào Tây Tạng (Tibet Travel Permit / 入藏函) thông qua công ty du lịch được cấp phép trước ít nhất 15 ngày; tuyệt đối không đi tự túc không phép; đặt vé Cung điện Potala qua hộ chiếu gắn liền tour; ngày đầu tại Lhasa nghỉ ngơi tránh tắm gội sớm để thích nghi độ cao.",
      corridor2Line: "Cụm thảo dược cao nguyên (Đông trùng hạ thảo), nước khoáng băng tinh khiết & năng lượng mặt trời/địa nhiệt cao nguyên. Hành lang giao lưu văn hóa Himalaya–Nam Á."
    },
    "prov-ningxia": {
      headerFormatted: "宁夏回族自治区 · 宁 (Ninh)",
      urbanPulseTitle: "Ốc Đảo Sa Mạc Sa Pha Đầu & Rượu Vang Nho Chân Núi Hạ Lan Sơn",
      urbanPulseVi: "Ninh Hạ tạo cảnh tượng kỳ vĩ nơi sông Hoàng Hà uốn mình chảy qua sa mạc Đằng Cách Lý ở Sa Pha Đầu (沙坡头), chỉ cách vài chục cây số là những vườn nho rộng lớn dọc chân núi Hạ Lan Sơn làm nên thương hiệu rượu vang hàng đầu Trung Quốc.",
      lineageVi: "Kinh đô triều đại Tây Hạ (1038–1227) với cụm lăng tháp đất nện Tây Hạ Vương Lăng bí ẩn và truyền thống văn hóa Hồi giáo Thanh Chân hòa điệu bên bờ Hoàng Hà.",
      stations: [
        { hanzi: "银川站", pinyin: "Yínchuān Zhàn", noteVi: "Nối thẳng Bảo tàng Ninh Hạ, Tây Hạ Lăng & cao tốc đi Lan Châu – Tây An" }
      ],
      bookingVi: "Bảo tàng Ninh Hạ và Tây Hạ Lăng đặt trực tiếp hoặc qua WeChat bằng hộ chiếu; tại quán ăn Thanh Chân (Halal 清真) tuyệt đối không mang đồ ăn thịt lợn hoặc rượu bên ngoài vào quán. Thử cừu hấp thủ công Tan và trà bát bảo có câu kỷ tử.",
      corridor2Line: "Cụm trồng và chế biến câu kỷ tử chuẩn dược điển quốc gia (Trung Ninh), rượu vang cao nguyên Hạ Lan & trung tâm điện toán Tây Bộ. Nguồn nguyên liệu dược liệu thảo mộc sạch."
    },
    "prov-xinjiang": {
      headerFormatted: "新疆维吾尔自治区 · 新 (Tân)",
      urbanPulseTitle: "Chợ Lớn Quốc Tế Grand Bazaar Ô Lỗ Mộc Tề & Đồng Cỏ Y Lê Hoa Oải Hương",
      urbanPulseVi: "Tân Cương rộng bằng cả vùng Tây Âu: ban sáng ngắm hồ xanh ngọc Sayram giữa dãy Thiên Sơn tuyết phủ, tối tản bộ giữa tiếng đàn Dutar rộn ràng cùng hương thịt cừu xiên nướng thơm lừng tại Đại Ba Trát (Grand Bazaar).",
      lineageVi: "Trục giữa Con đường Tơ lụa cổ đại qua Đôn Hoàng – Thổ Lỗ Phồn (Cao Xương, Giao Hà, hang Phật Kizil) – Kashgar; di sản nghệ thuật Mười Hai Muqam (UNESCO) và hệ thống tưới tiêu ngầm dưới sa mạc Khảm Nhi Tỉnh.",
      stations: [
        { hanzi: "乌鲁木齐站", pinyin: "Wūlǔmùqí Zhàn", noteVi: "Ga trung tâm tuyến cao tốc đi Thổ Lỗ Phồn (50p) và hành trình Bắc/Nam Cương" },
        { hanzi: "喀什站", pinyin: "Kāshí Zhàn", noteVi: "Thành phố cổ Con đường Tơ lụa cực Tây" }
      ],
      bookingVi: "Chú ý: Ở Tân Cương dùng chung giờ Bắc Kinh trên vé tàu nhưng sinh hoạt người dân lệch tự nhiên ~2 tiếng (21:30–22:00 mới tối vào mùa hè!); mang hộ chiếu gốc 24/24 qua mọi trạm kiểm soát danh thắng & nhà ga; vào vùng biên giới Tashkurgan gần Pakistan cần xin thêm giấy biên phòng.",
      corridor2Line: "Cửa ngõ đường sắt lục địa Á–Âu (Hoắc Nhĩ Quả Tư / Alashankou), năng lượng dầu khí – bông sợi chất lượng cao & trái cây khô sấy. Trục kết nối thương mại nội địa Âu–Á."
    },
    "prov-hongkong": {
      headerFormatted: "香港特别行政区 · 港 (Cảng)",
      urbanPulseTitle: "Phà Sao Vịnh Victoria, M+ Tây Cửu Long & Bảo Tàng Cố Cung Hồng Kông",
      urbanPulseVi: "Hồng Kông nén dày tương phản Đông–Tây trong từng dãy phố dốc: sáng uống trà sữa tất chân ở quán Cha Chaan Teng, trưa chiêm ngưỡng quốc bảo Cố Cung Hồng Kông cạnh Viện Nghệ thuật Đương đại M+ bên bờ Tây Cửu Long nhìn thẳng sang đảo Hồng Kông.",
      lineageVi: "Làng chài Lĩnh Nam hóa thành hải cảng quốc tế tự do từ năm 1842, cái nôi điện ảnh Võ hiệp Kim Dung – Vương Gia Vệ, Việt kịch Hồng Kông và trung tâm chữ Phồn thể – tiếng Quảng hiện đại.",
      stations: [
        { hanzi: "香港西九龙站", pinyin: "Xiānggǎng Xījiǔlóng Zhàn", noteVi: "Ga ngầm HSR một chạm nối thẳng Quảng Châu Nam (48p), Thâm Quyến (18p) & Bắc Kinh" }
      ],
      bookingVi: "Chú ý: Công dân Việt Nam vào Hồng Kông cần xin riêng **e-Visa Hồng Kông** (visa Trung Quốc đại lục KHÔNG đi qua Hồng Kông); Bảo tàng Cố Cung Hồng Kông (HKPM) mua vé online trước qua Klook/website chính thức; mua thẻ Octopus (八达通) hoặc dùng Apple Pay đi tàu điện MTR, phà Star Ferry.",
      corridor2Line: "Trung tâm tài chính – tái xuất quốc tế, định giá hợp đồng pháp lý Common Law & cảng hàng không vận tải hàng hóa top 1 thế giới. Nút trung chuyển vốn FDI và thương mại dịch vụ quốc tế vào Việt Nam."
    },
    "prov-macau": {
      headerFormatted: "澳门特别行政区 · 澳 (Áo)",
      urbanPulseTitle: "Quảng Trường Nghị Sự Lát Đá Bồ Đào Nha & Bánh Trứng Bồ Đào Thơm Nồng Ngõ Cổ",
      urbanPulseVi: "Ma Cao quyến rũ qua bước chuyển 5 phút đi bộ giữa những con hẻm gạch Bồ Đào Nha lát sóng biển, mặt tiền nhà thờ Thánh Paul (Đại Tam Ba) 400 năm tuổi cạnh miếu cổ A-Ma (Ma Tổ Các) thơm mùi nhang vòng.",
      lineageVi: "Cảng giao thương Bồ–Hoa lâu đời nhất Châu Á từ năm 1557, lưu giữ Khu Lịch sử Ma Cao Di sản Thế giới UNESCO giao thoa kiến trúc Thiên Chúa giáo và đền thờ Hoa Nam.",
      stations: [
        { hanzi: "珠海站 (拱北口岸)", pinyin: "Zhūhǎi Zhàn", noteVi: "Nằm ngay sát cửa khẩu Củng Bắc đi bộ 5 phút sang lãnh thổ Ma Cao" }
      ],
      bookingVi: "Hộ chiếu Việt Nam cần **visa Ma Cao riêng** (tách biệt visa đại lục & Hồng Kông); có thể đi xe buýt miễn phí từ các cửa khẩu Củng Bắc / Hoành Cầm vào trung tâm; thử Bánh Tart trứng Bồ Đào Nha (葡挞) và thịt bò xá xíu đường Quan Dã.",
      corridor2Line: "Cụm dịch vụ du lịch – hội nghị MICE quốc tế & nền tảng hợp tác doanh nghiệp Trung Quốc – Cộng đồng các nước nói tiếng Bồ Đào Nha (Hành lang Cảng Hoành Cầm–Chu Hải)."
    }
  };

  // Apply Module 2 enrichments directly onto window.CCE_REGIONS.provincesDirectory
  if (window.CCE_REGIONS && Array.isArray(window.CCE_REGIONS.provincesDirectory)) {
    window.CCE_REGIONS.provincesDirectory.forEach((p) => {
      const ext = PROVINCE_3LAYER_DATA[p.id];
      if (!ext) return;
      p.headerFormatted = ext.headerFormatted;
      p.layer1UrbanPulse = {
        title: ext.urbanPulseTitle,
        body: ext.urbanPulseVi
      };
      p.layer2HistoricalRoots = {
        lineageSummary: ext.lineageVi
      };
      p.layer3TravelVietnam = {
        hsrStations12306: ext.stations,
        bookingAndDigitalSurvival: ext.bookingVi,
        industryCorridorBridge: ext.corridor2Line
      };
    });
  }

  // Upgrade TravelReadiness custom coverage to 34/34 provinces cleanly
  if (window.CCE_TRAVEL_READINESS) {
    const oldGet = window.CCE_TRAVEL_READINESS.getProvinceReadiness;
    window.CCE_TRAVEL_READINESS.getProvinceReadiness = function (prov) {
      const base = typeof oldGet === "function" ? oldGet(prov) : {};
      const ext = prov && PROVINCE_3LAYER_DATA[prov.id];
      if (!ext) return base;
      const stationStr = ext.stations.map((s) => `${s.hanzi} (${s.pinyin})`).join(" · ");
      return Object.assign({}, base, {
        mustKnowVi: `${ext.bookingVi}`,
        noteVi: `${ext.corridor2Line}`,
        hsrStations12306: ext.stations,
        hsrQuickLine: stationStr,
        corridor2Line: ext.corridor2Line
      });
    };
  }

  // --------------------------------------------------------------------------
  // 2. MODULE 6: 6 PRE-DEPARTURE SURVIVAL HANZI PACKS (LIUSHU RADICAL LOGIC)
  // Designed for /hoc-tap: filterable packs + Zero-Pinyin Active Recall + CSV/TSV
  // --------------------------------------------------------------------------
  window.CCE_SURVIVAL_PACKS = {
    packs: [
      {
        id: "pack-hsr-12306",
        number: "01",
        titleVi: "Tàu Cao Tốc 12306 & Nhà Ga",
        titleZh: "高铁与车站",
        descVi: "Đọc hiểu bảng điện tử nhà ga 12306, chọn đúng toa ghế, phân biệt cửa soát vé tự động với làn kiểm tra hộ chiếu giấy.",
        items: [
          {
            id: "sv-101",
            hanzi: "候车室",
            pinyin: "hòuchēshì",
            hanViet: "HẬU XA THẤT",
            vi: "Phòng chờ lên tàu tại nhà ga",
            en: "Railway Waiting Hall",
            liushuType: "Hội ý & Hình thanh",
            radicalLogic: "候 (bộ Nhân đứng 亻+ mũi tên quan sát: đứng chờ đợi) + 车 (tượng hình chiếc xe có hai bánh) + 室 (bộ Miên 宀 mái nhà + 至 đi tới: gian phòng). Ghép lại: Gian nhà ngồi chờ xe/tàu.",
            fieldTip: "Trên màn hình LED ga cao tốc, nhìn số cổng nằm sau dòng 候车室 (vd: A1–A12) để vào đúng sảnh."
          },
          {
            id: "sv-102",
            hanzi: "检票口",
            pinyin: "jiǎnpiàokǒu",
            hanViet: "KIỂM PHIẾU KHẨU",
            vi: "Cổng kiểm tra & soát vé ra tàu",
            en: "Ticket Check Gate",
            liushuType: "Hình thanh & Hội ý",
            radicalLogic: "检 (bộ Mộc 木 bảng gỗ viết kiểm kê xưa + 佥 kiểm tra đồng bộ) + 票 (chữ Tây 覀 ấn ký + bộ Kỳ 示 giấy thông hành tế lễ cổ -> tờ phiếu vé) + 口 (hình chiếc miệng: cửa khẩu ra vào).",
            fieldTip: "Đèn xanh báo 正在检票 mới được xếp hàng vào; tìm biển 人工通道 bên cạnh để quét Hộ chiếu."
          },
          {
            id: "sv-103",
            hanzi: "商务座 / 一等座 / 二等座",
            pinyin: "shāngwùzuò / yīděngzuò / èrděngzuò",
            hanViet: "THƯƠNG VỤ TỌA · NHẤT ĐẲNG · NHỊ ĐẲNG TỌA",
            vi: "Ghế Thương gia / Hạng Nhất / Hạng Hai (HSR)",
            en: "Business / First / Second Class Seat",
            liushuType: "Hội ý",
            radicalLogic: "座 gồm bộ Nghiễm 广 (mái hiên che) bao quanh 坐 (hai người 人 ngồi trên nền đất 土): chỗ ngồi có mái che. Hàng chữ 商务 (thương vụ VIP nằm 180°) và 一等/二等 (cấu hình ghế 2-2 vs 3-2).",
            fieldTip: "Đặt 12306 cho tuyến <3 tiếng chọn 二等座 tiết kiệm; >5 tiếng chọn 一等座 hoặc 商务座 rất thoải mái."
          },
          {
            id: "sv-104",
            hanzi: "换乘",
            pinyin: "huànchéng",
            hanViet: "HOÁN THỪA",
            vi: "Chuyển tuyến / Đổi tàu nối chuyến",
            en: "Transfer / Connecting Train",
            liushuType: "Hình thanh & Hội ý",
            radicalLogic: "换 (bộ Thủ 扌 tay đổi vật) + 乘 (tượng hình người trèo lên thân cây/lên xe cộ). Ghép lại: Đổi từ chuyến xe/tàu này sang chuyến khác.",
            fieldTip: "Ở các ga lớn có làn 便捷换乘 (chuyển tàu trong sảnh miễn ra ngoài tái kiểm tra an ninh) cực tiện."
          },
          {
            id: "sv-105",
            hanzi: "出站口",
            pinyin: "chūzhànkǒu",
            hanViet: "XUẤT TRẠM KHẨU",
            vi: "Cửa ra khỏi nhà ga",
            en: "Station Exit",
            liushuType: "Tượng hình & Hội ý",
            radicalLogic: "出 (hình bước chân nhấc ra khỏi hốc đất) + 站 (bộ Lập 立 đứng + 占 chiếm vị trí: trạm dừng) + 口 (lối ra).",
            fieldTip: "Xuống tàu đi theo mũi tên 出站 hoặc chỉ dẫn chữ xanh đi thẳng xuống Metro / Taxi (网约车)."
          },
          {
            id: "sv-106",
            hanzi: "人工通道",
            pinyin: "réngōng tōngdào",
            hanViet: "NHÂN CÔNG THÔNG ĐẠO",
            vi: "Làn có nhân viên kiểm tra Hộ chiếu trực tiếp",
            en: "Staffed Passport Checkpoint Lane",
            liushuType: "Tượng hình & Hình thanh",
            radicalLogic: "人 (dáng người bước) + 工 (thước thợ/lao động thủ công) + 通 (bộ Sước 辶 bước đi thông suốt) + 道 (bộ Sước 辶 + Thủ 首: con đường có lối đi).",
            fieldTip: "Hộ chiếu Việt Nam không gắn chip CCCD Trung Quốc nên LUÔN xếp vào làn này tại cửa kiểm vé."
          }
        ]
      },
      {
        id: "pack-metro-urban",
        number: "02",
        titleVi: "Tàu Điện Ngầm & Giao Thông Đô Thị",
        titleZh: "地铁与出行",
        descVi: "Di chuyển 100% không tiền mặt trong 45+ thành phố có Metro, bắt xe công nghệ Didi đúng điểm hẹn và gửi hành lý.",
        items: [
          {
            id: "sv-201",
            hanzi: "首班车 / 末班车",
            pinyin: "shǒubānchē / mòbānchē",
            hanViet: "THỦ BAN XA / MẠT BAN XA",
            vi: "Chuyến tàu đầu tiên / Chuyến tàu cuối cùng trong ngày",
            en: "First Train / Last Train",
            liushuType: "Chỉ sự & Hội ý",
            radicalLogic: "首 (đầu tiên, cái đầu) vs 末 (bộ Mộc 木 thêm gạch ngang ở ngọn cây chỉ phần cuối cùng) + 班 (lượt chuyến) + 车 (xe/tàu).",
            fieldTip: "Đừng quên chụp lại bảng 末班车 tại ga để không bị lỡ chuyến Metro cuối (thường từ 22:30–23:30)."
          },
          {
            id: "sv-202",
            hanzi: "扫码乘车",
            pinyin: "sǎomǎ chéngchē",
            hanViet: "TẢO MÃ THỪA XA",
            vi: "Quét mã QR để lên tàu / xe buýt",
            en: "Scan QR Code to Ride",
            liushuType: "Hình thanh & Hội ý",
            radicalLogic: "扫 (bộ Thủ 扌 tay quét lướt) + 码 (bộ Thạch 石 viên đá đếm/con số mã hóa) + 乘车 (lên xe).",
            fieldTip: "Mở Alipay -> mục Transport (出行) bật thẻ xe công cộng thành phố trước khi chạm cổng quét QR."
          },
          {
            id: "sv-203",
            hanzi: "网约车上车点",
            pinyin: "wǎngyuēchē shàngchēdiǎn",
            hanViet: "VÕNG ƯỚC XA THƯỢNG XA ĐIỂM",
            vi: "Điểm đón xe công nghệ (DiDi / Amap)",
            en: "Ride-Hailing Pickup Point",
            liushuType: "Tượng hình & Hội ý",
            radicalLogic: "网 (lưới mạng) + 约 (bộ Mịch 纟 sợi tơ gắn kết lời hẹn) + 上车 (lên xe) + 点 (bốn chấm Hỏa 灬 chỉ chấm điểm định vị).",
            fieldTip: "Sân bay và ga tàu cấm xe Didi dừng ngoài sảnh: đi theo biển hiệu này vào tầng B1/bãi đậu P2."
          },
          {
            id: "sv-204",
            hanzi: "寄存处",
            pinyin: "jìcúnchù",
            hanViet: "KÝ TỒN XỨ",
            vi: "Quầy / Tủ gửi giữ hành lý tạm thời",
            en: "Luggage Storage Counter / Locker",
            liushuType: "Hình thanh & Hội ý",
            radicalLogic: "寄 (bộ Miên 宀 mái che + 奇 gửi nhờ tạm dưới mái) + 存 (bộ Tử 子 con cái được bàn tay che giữ bảo tồn) + 处 (nơi chốn).",
            fieldTip: "Hầu hết các ga tàu lớn, trung tâm thương mại và bảo tàng đều có 寄存处 quét WeChat mở tủ gửi vali."
          },
          {
            id: "sv-205",
            hanzi: "进站口 / 单程票",
            pinyin: "jìnzhànkǒu / dānchéngpiào",
            hanViet: "TIẾN TRẠM KHẨU / ĐƠN TRÌNH PHIẾU",
            vi: "Lối vào ga / Vé lượt một chiều (từ máy tự động)",
            en: "Station Entrance / Single-Journey Ticket",
            liushuType: "Hội ý",
            radicalLogic: "进 (chữ 隹 chim chỉ bước về phía trước + 辶 bước đi) đối lập 出 (bước ra); 单 (đơn lẻ) + 程 (bộ Hòa 禾 đo chặng đường).",
            fieldTip: "Nếu mạng di động nghẽn không quét QR được, tìm máy bán vé tự động bấm 英语 mua vé xu nhựa 单程票."
          }
        ]
      },
      {
        id: "pack-museum-heritage",
        number: "03",
        titleVi: "Bảo Tàng, Di Sản & Đặt Vé",
        titleZh: "博物馆与古迹",
        descVi: "Vượt cửa kiểm soát bảo tàng quốc gia & giải mã quy định triển lãm cổ vật quý ('Hạn triển thư họa').",
        items: [
          {
            id: "sv-301",
            hanzi: "实名预约",
            pinyin: "shímíng yùyuē",
            hanViet: "THỰC DANH DỰ ƯỚC",
            vi: "Đặt lịch trước theo tên thật trên giấy tờ tùy thân",
            en: "Real-Name Advance Reservation",
            liushuType: "Hội ý & Hình thanh",
            radicalLogic: "实 (mái nhà có tài sản/chứng thực) + 名 (bộ Tịch 夕 đêm gọi tên 口 miệng -> họ tên) + 预约 (hẹn ước trước).",
            fieldTip: "95% bảo tàng lớn (Cố Cung, Quốc Bác, Thiểm Tây, Nam Kinh, Tam Tinh Đôi) BẮT BUỘC đặt trước qua WeChat Mini-Program."
          },
          {
            id: "sv-302",
            hanzi: "凭护照入园",
            pinyin: "píng hùzhào rùyuán",
            hanViet: "BẰNG HỘ CHIẾU NHẬP VIÊN",
            vi: "Xuất trình Hộ chiếu bản gốc để vào tham quan",
            en: "Enter with Original Passport",
            liushuType: "Hình thanh & Hội ý",
            radicalLogic: "凭 (dựa vào chứng từ) + 护 (bộ Thủ 扌 bảo hộ) + 照 (bộ Hỏa 灬 soi sáng minh chứng -> giấy chiếu thân) + 入园 (bước vào khuôn viên).",
            fieldTip: "Người nước ngoài KHÔNG dùng ảnh chụp hộ chiếu trên điện thoại; luôn mang hộ chiếu giấy bản gốc đi thăm di tích."
          },
          {
            id: "sv-303",
            hanzi: "镇馆之宝",
            pinyin: "zhènguǎn zhī bǎo",
            hanViet: "TRẤN QUÁN CHI BẢO",
            vi: "Quốc bảo giữ hồn của cả bảo tàng",
            en: "Museum's Crown Jewel Artifact",
            liushuType: "Hội ý & Hình thanh",
            radicalLogic: "镇 (bộ Kim 金 kim loại trấn giữ nặng cân vững chãi) + 馆 (bộ Thực 饣 nhà quán trọ công) + 宝 (mái nhà 宀 chứa ngọc 玉 và tiền cổ: báu vật).",
            fieldTip: "Nếu thời gian gấp tại một bảo tàng lớn, hãy hỏi nhân viên vị trí 镇馆之宝 (vd: Biên chung Tăng Hầu Ất ở Hồ Bắc)."
          },
          {
            id: "sv-304",
            hanzi: "禁止闪光灯",
            pinyin: "jìnzhǐ shǎnguāngdēng",
            hanViet: "CẤM CHỈ THIỂM QUANG ĐĂNG",
            vi: "Nghiêm cấm bật đèn Flash máy ảnh / điện thoại",
            en: "Flash Photography Strictly Prohibited",
            liushuType: "Tượng hình & Hội ý",
            radicalLogic: "禁 (hai chữ Lâm 林 rừng cấm + Kỳ 示 lệnh thần cấm) + 闪 (bộ Môn 门 cửa + 人 người lóe qua nhanh) + 光 (lửa trên đầu người tỏa sáng) + 灯 (Hỏa 火 ngọn đèn).",
            fieldTip: "Ánh sáng đèn flash làm phân hủy màu khoáng cổ trên lụa Tống–Đường; hãy kiểm tra tắt Auto-Flash trước khi vào phòng tranh."
          },
          {
            id: "sv-305",
            hanzi: "文创店",
            pinyin: "wénchuàngdiàn",
            hanViet: "VĂN SÁNG ĐIẾM",
            vi: "Cửa hàng quà lưu niệm Sáng tạo Văn hóa (Bảo tàng)",
            en: "Museum Cultural & Creative Shop",
            liushuType: "Hội ý",
            radicalLogic: "文 (nét vẽ giao nhau thành văn hiến) + 创 (con dao 刂 gọt đẽo sáng tạo) + 店 (mái nhà bày hàng 占).",
            fieldTip: "Quà tặng lưu niệm di sản của Cố Cung, Đôn Hoàng, Tam Tinh Đôi ở quầy Văn Sáng rất tinh xảo kèm mã QR truyện tích."
          },
          {
            id: "sv-306",
            hanzi: "限展书画",
            pinyin: "xiànzhǎn shūhuà",
            hanViet: "HẠN TRIỂN THƯ HỌA",
            vi: "Kiệt tác thư họa quý hiếm bị hạn chế thời gian trưng bày",
            en: "Restricted-Rotation Master Scroll/Calligraphy",
            liushuType: "Hình thanh & Hội ý",
            radicalLogic: "限 (bộ Phụ 阝 gò đất vách ngăn giới hạn) + 展 (mở trải rộng ra) + 书画 (bộ Duật 聿 tay cầm bút viết thư pháp + họa 畫 vạch chia ô đồng ruộng vẽ tranh).",
            fieldTip: "Tranh lụa Đường–Tống như *Thiên Lý Giang Sơn Đồ* thường sau 1–2 tháng trưng bày phải nghỉ tối thiểu 3 năm trong kho tối!"
          }
        ]
      },
      {
        id: "pack-dining-order",
        number: "04",
        titleVi: "Ẩm Thực Bản Địa & Gọi Món",
        titleEn: "Local Cuisine & QR Ordering",
        titleZh: "地道美食与点餐",
        descVi: "Quét QR gọi món ngay tại bàn ăn, kiểm soát độ cay/rau mùi và gói đồ ăn thừa chuyên nghiệp.",
        descEn: "Scan table QR menus smoothly, customize spice or herbs, ask for takeaways, and settle bills locally.",
        items: [
          {
            id: "sv-401",
            hanzi: "微辣 / 免辣",
            pinyin: "wēilà / miǎnlà",
            hanViet: "VI LẠT / MIỄN LẠT",
            vi: "Cay nhẹ / Hoàn toàn không cay",
            en: "Mild Spice / Zero Chili",
            liushuType: "Hình thanh & Hội ý",
            liushuTypeEn: "Phono-Semantic & Compound",
            radicalLogic: "微 (nhỏ nhẹ thoáng qua) vs 免 (cởi bỏ miễn trừ) + 辣 (chữ Tân 辛 cay đắng bên bộ Bó củi 束 -> vị ớt cay xé).",
            radicalLogicEn: "微 (faint/slight) vs. 免 (exempt/remove) + 辣 (spicy radical 辛 bitter paired with 束 tied bundle -> biting chili spice).",
            fieldTip: "Lưu ý: Ở Tứ Xuyên / Trùng Khánh / Giang Tây, '微辣' vẫn cay bằng mức cay khá ở Việt Nam! Nếu không ăn cay được phải nói 免辣 (miǎnlà).",
            fieldTipEn: "In Sichuan, Chongqing, or Hunan, 'mild' (微辣) still bites—say 免辣 (miǎnlà) explicitly if you prefer zero chili."
          },
          {
            id: "sv-402",
            hanzi: "不要香菜",
            pinyin: "bùyào xiāngcài",
            hanViet: "BẤT YẾU HƯƠNG THÁI",
            vi: "Xin đừng cho rau mùi (ngò rí)",
            en: "No Cilantro / Coriander Please",
            liushuType: "Tượng hình & Hình thanh",
            liushuTypeEn: "Pictographic & Phono-Semantic",
            radicalLogic: "香 (bộ Hòa 禾 lúa thơm + Nhật 日 nắng lên tỏa hương) + 菜 (bộ Thảo 艹 thảo mộc rau + 采 tay hái rau).",
            radicalLogicEn: "香 (fragrant grain 禾 under sun 日) + 菜 (grass radical 艹 paired with hand picking 采 -> leafy herb).",
            fieldTip: "Trong app gọi món QR thường có ô ghi chú sẵn '不要香菜' hoặc '不要葱花' (không hành hoa) bấm tích 1 chạm.",
            fieldTipEn: "Most QR table apps feature one-tap toggles for 'No cilantro' (不要香菜) or 'No scallions' (不要葱花)."
          },
          {
            id: "sv-403",
            hanzi: "招牌菜",
            pinyin: "zhāopáicài",
            hanViet: "CHIÊU BÀI THÁI",
            vi: "Món đặc sản tủ làm nên thương hiệu của quán",
            en: "Restaurant Signature Dish",
            liushuType: "Hình thanh",
            liushuTypeEn: "Phono-Semantic",
            radicalLogic: "招 (tay vẫy gọi khách) + 牌 (tấm bảng gỗ khắc tên hiệu) + 菜 (món ăn rau thịt). Nghĩa đen: Món ghi trên biển hiệu treo trước cửa!",
            radicalLogicEn: "招 (beckoning hand) + 牌 (wooden storefront plaque) + 菜 (dish) — literally the house specialty advertised on the signboard.",
            fieldTip: "Ở các quán lâu đời (Lão tự hào), cứ gọi 1–2 món đứng đầu mục 招牌 hoặc 人气榜 trên menu QR là chuẩn vị nhất.",
            fieldTipEn: "At heritage eateries, ordering 1–2 top items under 招牌 or 人气榜 guarantees authentic house classics."
          },
          {
            id: "sv-404",
            hanzi: "扫码点餐",
            pinyin: "sǎomǎ diǎncān",
            hanViet: "TẢO MÃ ĐIỂM XAN",
            vi: "Quét mã QR dán trên bàn để xem thực đơn & đặt món",
            en: "Scan Table QR to Order",
            liushuType: "Hội ý & Hình thanh",
            liushuTypeEn: "Compound & Phono-Semantic",
            radicalLogic: "点 (chấm chọn đánh dấu) + 餐 (bộ Thực 食 đồ ăn dưới bộ Đãi 歹 tay chia thức ăn: bữa ăn). Quét mã trên mặt bàn là thanh toán & gửi đơn thẳng xuống bếp.",
            radicalLogicEn: "扫 (sweep/scan) + 码 (code) + 点餐 (select dishes & dining course), routing table orders straight to the kitchen.",
            fieldTip: "Dùng WeChat hoặc Alipay quét mã góc bàn; nếu điện thoại báo lỗi đăng nhập sđt TQ, nhờ phục vụ 点单 giúp.",
            fieldTipEn: "Scan via WeChat or Alipay; if an overseas phone login blocks ordering, ask staff for manual 点单 assistance."
          },
          {
            id: "sv-405",
            hanzi: "打包",
            pinyin: "dǎbāo",
            hanViet: "ĐẢ BAO",
            vi: "Gói thức ăn còn dư mang về",
            en: "Pack Leftovers / Takeaway",
            liushuType: "Hình thanh & Tượng hình",
            liushuTypeEn: "Phono-Semantic & Pictographic",
            radicalLogic: "打 (bộ Thủ 扌 thao tác hành động) + 包 (tượng hình bao bọc thai nhi/vật bên trong -> gói bọc lại).",
            radicalLogicEn: "打 (hand action 扌) + 包 (pictograph of wrapping safely inside -> bundle leftovers).",
            fieldTip: "Các khẩu phần món vùng Đông Bắc hay Tứ Xuyên rất lớn, gọi vừa phải hoặc nói '麻烦打包' để đóng hộp mang về.",
            fieldTipEn: "Northern & Sichuan portions are generous—say '麻烦打包' (máfan dǎbāo) to request clean takeaway boxes."
          },
          {
            id: "sv-406",
            hanzi: "买单",
            pinyin: "mǎidān",
            hanViet: "MÃI ĐƠN",
            vi: "Thanh toán hóa đơn bàn ăn",
            en: "Ask for the Check / Pay Bill",
            liushuType: "Hội ý",
            liushuTypeEn: "Compound Ideograph",
            radicalLogic: "买 (mua trả tiền) + 单 (tờ đơn/tờ giấy kê danh sách). Ở miền Bắc TQ còn gọi là 结账 (jiézhàng - kết sổ nợ/tiền).",
            radicalLogicEn: "买 (buy/settle) + 单 (itemized slip). Northern China also uses 结账 (jiézhàng) to close the ledger.",
            fieldTip: "Khi dùng dịch vụ 扫码点餐 thường đã thanh toán trước khi ăn hoặc bấm nút 买单 trên ứng dụng ngay tại bàn.",
            fieldTipEn: "QR mini-apps typically settle payment upon order, or click 买单 to pay before departing."
          }
        ]
      },
      {
        id: "pack-pay-hotel",
        number: "05",
        titleVi: "Thanh Toán Số & Khách Sạn",
        titleEn: "Digital Payments & Hotels",
        titleZh: "移动支付与住宿",
        descVi: "Sử dụng Alipay / WeChat Pay bằng thẻ quốc tế tại quầy thu ngân và làm thủ tục nhận phòng khách sạn bằng hộ chiếu.",
        descEn: "Link international cards inside Alipay/WeChat Pay cleanly and navigate hotel check-in, deposits, and receipts.",
        items: [
          {
            id: "sv-501",
            hanzi: "支付宝 / 微信支付",
            pinyin: "Zhīfùbǎo / Wēixìn Zhīfù",
            hanViet: "CHI PHÓ BẢO / VI TÍN CHI PHÓ",
            vi: "Ví điện tử Alipay / WeChat Pay (liên kết thẻ Visa/Mastercard)",
            en: "Alipay / WeChat Pay",
            liushuType: "Hình thanh & Hội ý",
            liushuTypeEn: "Phono-Semantic & Compound",
            radicalLogic: "支 (nhánh tay trao đi) + 付 (Nhân 亻 trao tay Thốn 寸 bàn tay vật tiền: chi trả) + 宝 (báu vật bảo chứng thanh toán).",
            radicalLogicEn: "支 (dispense) + 付 (person 亻 handing via inch/hand 寸 -> pay) + 宝 (treasure/vault).",
            fieldTip: "Liên kết trước 2 thẻ Visa/MasterCard vào cả Alipay lẫn WeChat tại Việt Nam (giới hạn giao dịch 200 RMB miễn phí 3%).",
            fieldTipEn: "Bind international cards to both Alipay & WeChat before boarding; single purchases <= 200 RMB waive the 3% foreign card fee."
          },
          {
            id: "sv-502",
            hanzi: "出示付款码",
            pinyin: "chūshì fùkuǎnmǎ",
            hanViet: "XUẤT THỊ PHÓ KHOẢN MÃ",
            vi: "Mở mã vạch thanh toán để thu ngân quét máy",
            en: "Show Payment Barcode for Cashier Scan",
            liushuType: "Hội ý",
            liushuTypeEn: "Compound Ideograph",
            radicalLogic: "出 + 示 (đưa ra cho thấy rõ) + 付款 (trả khoản tiền) + 码 (mã số vạch/QR).",
            radicalLogicEn: "出示 (present clearly) + 付款 (remit funds) + 码 (barcode/QR).",
            fieldTip: "Tại siêu thị 7-Eleven hay nhà thuốc, nhân viên dùng máy quét tít mã QR của bạn (tức 'Pay/Receive' 付款码) thay vì bạn quét máy họ.",
            fieldTipEn: "At convenience stores and metros, hold up your dynamic 付款码 QR/barcode so the cashier scanner reads it."
          },
          {
            id: "sv-503",
            hanzi: "押金",
            pinyin: "yājīn",
            hanViet: "ÁP KIM",
            vi: "Tiền đặt cọc (lúc nhận phòng khách sạn hoặc thuê thiết bị)",
            en: "Security Deposit",
            liushuType: "Hình thanh",
            liushuTypeEn: "Phono-Semantic",
            radicalLogic: "押 (bộ Thủ 扌 ấn giữ niêm phong lại) + 金 (tiền tệ kim loại: khoản tiền đặt giữ tạm để đảm bảo).",
            radicalLogicEn: "押 (hand 扌 holding in pledge) + 金 (metal currency -> refundable deposit).",
            fieldTip: "Đa phần khách sạn đặt qua Trip.com đã miễn 押金, nhưng nếu trả cọc khi nhận phòng nhớ giữ biên lai hoàn trả (退押金) lúc trả phòng.",
            fieldTipEn: "Major international Trip.com stays waive deposits; if charged on check-in, verify 退押金 refund slip upon departure."
          },
          {
            id: "sv-504",
            hanzi: "前台办理入住",
            pinyin: "qiántái bànlǐ rùzhù",
            hanViet: "TIỀN ĐÀI BIỆN LÝ NHẬP TRÚ",
            vi: "Làm thủ tục nhận phòng (check-in) tại quầy lễ tân",
            en: "Front Desk Hotel Check-in",
            liushuType: "Hội ý & Hình thanh",
            liushuTypeEn: "Compound & Phono-Semantic",
            radicalLogic: "前台 (quầy phía trước) + 办理 (giải quyết giấy tờ) + 入住 (Nhân 亻 chủ 人 ở lại đứng: vào lưu trú).",
            radicalLogicEn: "前台 (front desk) + 办理 (process paperwork) + 入住 (enter and reside/stay).",
            fieldTip: "Từ năm 2024 khách sạn tại TQ không còn hạn chế khách nước ngoài; lễ tân sẽ quét Hộ chiếu + chụp ảnh khai báo lưu trú tự động.",
            fieldTipEn: "Since 2024 regulations allow licensed hotels nationwide to register foreign passports directly at Reception."
          },
          {
            id: "sv-505",
            hanzi: "退房 / 开发票",
            pinyin: "tuìfáng / kāi fāpiào",
            hanViet: "THOÁI PHÒNG / KHAI PHÁT PHIẾU",
            vi: "Trả phòng / Xuất hóa đơn tài chính (công tác)",
            en: "Check-out / Issue Official Tax Invoice",
            liushuType: "Hội ý",
            liushuTypeEn: "Compound Ideograph",
            radicalLogic: "退 (bộ Sước 辶 bước lùi trả lại) + 房 (căn phòng) / 开 (mở xuất) + 发票 (tờ phiếu hóa đơn chuẩn thuế điện tử).",
            radicalLogicEn: "退 (step back/return) + 房 (room) / 开 (issue) + 发票 (official tax e-invoice).",
            fieldTip: "Nếu đi công tác cần hóa đơn thanh toán công ty, đưa thông tin công ty hoặc xuất E-Fapiao ngay tại quầy 前台.",
            fieldTipEn: "For business expense reimbursement, request an electronic Fapiao receipt directly from hotel reception before checkout."
          }
        ]
      },
      {
        id: "pack-emergency-customs",
        number: "06",
        titleVi: "Khẩn Cấp, Y Tế & Hải Quan",
        titleEn: "Emergency, Medical & Customs",
        titleZh: "应急与海关",
        descVi: "Xử lý tình huống khẩn cấp: mua thuốc tây/Đông y, báo mất đồ, khai báo hải quan cửa khẩu và liên hệ cơ quan ngoại giao Việt Nam.",
        descEn: "Essential phrases for pharmacy visits, local police loss reports, customs declarations, and emergency 120 / embassy contacts.",
        items: [
          {
            id: "sv-601",
            hanzi: "派出所",
            pinyin: "pàichūsuǒ",
            hanViet: "PHÁI XUẤT SỞ",
            vi: "Đồn Công an khu vực (trình báo mất hộ chiếu / thất lạc đồ)",
            en: "Local Police Station",
            liushuType: "Hội ý",
            liushuTypeEn: "Compound Ideograph",
            radicalLogic: "派 (phân nhánh cử đi) + 出 (ra ngoài) + 所 (bộ Hộ 户 cửa + Cân 斤: trụ sở cơ quan đặt tại cơ sở).",
            radicalLogicEn: "派出 (dispatched field office) + 所 (door 户 + axe 斤 -> administrative station).",
            fieldTip: "Số khẩn cấp cảnh sát là 110; nếu mất hộ chiếu phải đến 派出所 lấy 'Giấy xác nhận mất giấy tờ' mới làm lại hộ chiếu tạm tại Sứ quán.",
            fieldTipEn: "Police emergency line is 110; an official police loss certificate is mandatory before applying for an emergency passport."
          },
          {
            id: "sv-602",
            hanzi: "药店",
            pinyin: "yàodiàn",
            hanViet: "DƯỢC ĐIẾM",
            vi: "Nhà thuốc tây / hiệu dược thảo",
            en: "Pharmacy / Drugstore",
            liushuType: "Hình thanh",
            liushuTypeEn: "Phono-Semantic",
            radicalLogic: "药 (bộ Thảo 艹 cây cỏ thuốc + 约 buộc bó lại: cây thuốc -> dược phẩm) + 店 (cửa hàng).",
            radicalLogicEn: "药 (herb radical 艹 + phonetic 约 -> medicinal botanical/pharmacy) + 店 (shop).",
            fieldTip: "Các chuỗi nhà thuốc uy tín như 老百姓大药房 mở 24/24 ở thành phố lớn, có dược sĩ kê thuốc cảm, đau bụng bằng quét dịch màn hình.",
            fieldTipEn: "Major urban chains like LBX Pharmacy stay open 24/7 with pharmacists assisting smoothly via translation apps."
          },
          {
            id: "sv-603",
            hanzi: "边检 / 海关申报",
            pinyin: "biānjiǎn / hǎiguān shēnbào",
            hanViet: "BIÊN KIỂM / HẢI QUAN THÂN BÁO",
            vi: "Kiểm soát xuất nhập cảnh / Khai báo Hải quan",
            en: "Border Immigration / Customs Declaration",
            liushuType: "Hình thanh & Hội ý",
            liushuTypeEn: "Phono-Semantic & Compound",
            radicalLogic: "边 (vùng biên ải) + 检 (kiểm tra); 海关 (cửa ải biển cả -> Hải quan) + 申报 (khai trình rõ ràng).",
            radicalLogicEn: "边检 (border inspection) + 海关 (maritime/customs gate) + 申报 (formal declaration).",
            fieldTip: "Tuyệt đối không mang thực phẩm tươi sống, trái cây hoặc quá 20.000 RMB tiền mặt qua 边检 mà không khai báo.",
            fieldTipEn: "Never carry fresh fruit, meat, or >20,000 RMB cash across immigration without explicit customs declaration."
          },
          {
            id: "sv-604",
            hanzi: "越南驻华大使馆 / 领事馆",
            pinyin: "Yuènán zhù Huá Dàshǐguǎn / Lǐngshìguǎn",
            hanViet: "VIỆT NAM TRÚ HOA ĐẠI SỨ QUÁN / LÃNH SỰ QUÁN",
            vi: "Đại sứ quán (Bắc Kinh) / Tổng Lãnh sự quán Việt Nam (Quảng Châu, Nam Ninh, Thượng Hải, Côn Minh, Hồng Kông)",
            en: "Embassy / Consulate General of Vietnam in China",
            liushuType: "Hội ý & Hình thanh",
            liushuTypeEn: "Compound & Phono-Semantic",
            radicalLogic: "驻 (đóng trụ sở tại) + 华 (Trung Hoa) + 使 (nhân 亻 cử đi truyền mệnh) + 馆 (dinh quán ngoại giao).",
            radicalLogicEn: "驻华 (resident mission in China) + 大使馆/领事馆 (Embassy / Consulate General diplomatic compound).",
            fieldTip: "Lưu sẵn số trực bảo hộ công dân Đại sứ quán VN tại Bắc Kinh (+86-10-6532-1155) vào danh bạ trước khi khởi hành.",
            fieldTipEn: "Save citizen assistance hotline details for your home embassy/consulate in Beijing, Shanghai, Guangzhou, Nanning, or Kunming."
          },
          {
            id: "sv-605",
            hanzi: "急诊室 / 急救 120",
            pinyin: "jízhěnshì / jíjiù 120",
            hanViet: "CẤP CHẨN THẤT / CẤP CỨU 120",
            vi: "Phòng Cấp cứu Bệnh viện / Gọi xe cấp cứu 120",
            en: "Emergency Room / Ambulance 120",
            liushuType: "Hội ý & Hình thanh",
            liushuTypeEn: "Compound & Phono-Semantic",
            radicalLogic: "急 (bộ Tâm 心 dưới bàn tay vội giữ: gấp gáp) + 诊 (bộ Ngôn 讠 hỏi mạch bệnh) + 救 (cứu giúp khẩn cấp).",
            radicalLogicEn: "急 (urgent heart 心) + 诊 (medical consultation) + 急救 120 (ambulance dispatch).",
            fieldTip: "Khác với Việt Nam (115), số gọi xe cứu thương tại Trung Quốc là **120** và cứu hỏa là **119**.",
            fieldTipEn: "Dial 120 for emergency medical ambulance dispatch in mainland China (and 119 for fire)."
          }
        ]
      }
    ]
  };
})();
