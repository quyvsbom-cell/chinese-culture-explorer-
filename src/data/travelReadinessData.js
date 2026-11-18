// ============================================================================
// PRE-TRIP TRAVEL READINESS, FIRST-TIME SURVIVAL HANZI & 34-PROVINCE FIELD NOTES
// Supports Ngoa Du (Armchair Travel) -> Thuc Dia (Real Field Readiness) in VI & EN
// ============================================================================

window.CCE_TRAVEL_READINESS = (function () {
  const guideSectionsVi = [
    {
      id: "pay-connectivity",
      badge: "01 · THANH TOÁN & KẾT NỐI SỐ",
      title: "Alipay, WeChat Pay, eSIM & Bản đồ Thực địa",
      summary: "Trung Quốc vận hành xã hội không tiền mặt tới cấp quầy hàng rong. Chuẩn bị 48 giờ trước khi bay:",
      bullets: [
        "Alipay (支付宝) & WeChat Pay (微信支付): Gắn thẻ Visa/Mastercard quốc tế và hoàn tất xác minh hộ chiếu (Real-Name Verification) trước khi xuất phát; giao dịch dưới 200 RMB miễn phí 3% phí thẻ ngoại.",
        "Kết nối xuyên tường lửa hợp pháp: Mua eSIM du lịch quốc tế hoặc gói Roaming Viettel/VNPT/MobiFone từ Việt Nam để truy cập Gmail, Google Maps, Messenger bình thường.",
        "Bản đồ chính xác: Dùng Apple Maps (hỗ trợ tốt trên iPhone) hoặc Amap / Gaode Maps (高德地图 — giao diện tiếng Anh mới cập nhật) kết hợp Didi Mini-Program tích hợp ngay trong Alipay để gọi xe không cần SIM nội địa."
      ]
    },
    {
      id: "hsr-metro",
      badge: "02 · ĐƯỜNG SẮT CAO TỐC (高铁) & TÀU ĐIỆN NGẦM",
      title: "Quy trình Ga Cao tốc với Hộ chiếu Nước ngoài",
      summary: "Đặt vé qua Trip.com hoặc 12306 (chế độ tiếng Anh); hộ chiếu là vé điện tử duy nhất:",
      bullets: [
        "Cửa kiểm vé (检票口 Jǐanpiàokǒu): Không quét căn cước công dân TQ ở cổng tự động — đi thẳng vào làn thủ công 人工通道 (Réngōng tōngdào) hoặc máy quét hộ chiếu có biểu tượng Passport.",
        "Mốc thời gian vàng: Nhà ga cao tốc Trung Quốc lớn tương đương sân bay; có mặt trước giờ chạy ít nhất 35–45 phút vì cổng 检票口 đóng trước giờ tàu lăn bánh 5 phút.",
        "Định vị trên sân ga: Đối chiếu mã tàu (vd G82), số toa 车厢 (Chēxiāng), số ghế 座位 (Zuòwèi) và màu vạch sơn dưới nền sân ga khớp với màu vé trên Trip.com."
      ]
    },
    {
      id: "dining-spice",
      badge: "03 · ẨM THỰC, GỌI MÓN QR & KIỂM SOÁT ĐỘ CAY",
      title: "Đọc bàn ăn vùng miền & Câu chốt Sinh tồn",
      summary: "Phần lớn nhà hàng dùng mã QR dán góc bàn (扫码点餐) trên Alipay/WeChat hỗ trợ dịch ảnh:",
      bullets: [
        "Khẩu vị cay Tứ Xuyên – Trùng Khánh – Hồ Nam: Luôn nói hoặc nhắn thêm 微辣 (Wēilà · Cay nhẹ) hoặc 免辣 / 不要辣 (Miǎnlà · Không cay) nếu không quen tê cay Hoa tiêu (花椒).",
        "Hóa đơn & Mang về: Kết thúc bữa nói 服务员，买单 (Fúwùyuán, mǎidān · Tính tiền) hoặc 打包 (Dǎbāo · Đóng hộp mang về).",
        "Thanh toán trà vị / khăn: Một số quán tính phí bộ bát đũa tráng sẵn (餐位费); nếu trà bàn đã mở sẵn nước sôi, hãy thưởng thức thay vì bỏ trống."
      ]
    },
    {
      id: "etiquette-capitals",
      badge: "04 · NGHI THỨC CỐ ĐÔ, TRÀ LỄ & ĐẶT VÉ DI SẢN",
      title: "Khấu thủ lễ trên bàn trà & Mùa cao điểm Cổ tích",
      summary: "Văn hóa lễ nghi Á Đông giúp du khách Việt tạo thiện cảm ngay lập tức:",
      bullets: [
        "Khấu thủ lễ (叩手礼): Khi chủ nhà hoặc đồng nghiệp rót trà vào chén bạn, gập nhẹ hai ngón trỏ và giữa gõ khẽ 2–3 nhịp xuống mặt bàn để cảm ơn không làm ngắt lời.",
        "Điều kiêng kỵ đũa & quà: Tuyệt đối không cắm thẳng đũa lên bát cơm (gợi liên tưởng nhang cúng); tặng quà luôn trao bằng hai tay và tránh giấy bọc toàn trắng hoặc đen.",
        "Săn vé Di sản sớm 7 ngày: Tử Cấm Thành (故宫博物院), Bảo tàng Lịch sử Thiểm Tây, Đại học Bắc Kinh bắt buộc đặt bằng hộ chiếu trước 7 ngày vào đúng 20:00 giờ Bắc Kinh trên mini-program WeChat."
      ]
    }
  ];

  const guideSectionsEn = [
    {
      id: "pay-connectivity",
      badge: "01 · PAYMENTS & DIGITAL STACK",
      title: "Alipay, WeChat Pay, eSIM & Real-Time Maps",
      summary: "China operates nearly 100% cashlessly down to street stalls. Prepare these 48 hours before departure:",
      bullets: [
        "Alipay (支付宝) & WeChat Pay (微信支付): Bind an international Visa/Mastercard and complete Passport Real-Name Verification before flying; single transactions under 200 RMB waive the 3% foreign card fee.",
        "Borderless Connectivity: Use an international travel eSIM or carrier roaming rather than local tourist SIMs so Gmail, Google Maps, and messaging remain accessible without extra VPN configuration.",
        "Accurate Navigation: Use Apple Maps or Amap / Gaode Maps (高德地图, now featuring English UI) plus the built-in DiDi ride-hailing mini-program inside Alipay."
      ]
    },
    {
      id: "hsr-metro",
      badge: "02 · HIGH-SPEED RAIL (高铁) & METRO",
      title: "Navigating HSR Stations with a Foreign Passport",
      summary: "Book tickets on Trip.com or official Railway 12306 (English mode); your physical passport IS your ticket:",
      bullets: [
        "Manual Passport Gate (人工通道): Do not queue behind Mainland ID tap-gates unless it displays a Passport optical reader; look for the staffed 人工通道 counter at station entry (进站) and platform gate (检票口).",
        "Arrival Buffer: Major HSR hubs equal international airports in scale; arrive 40 minutes prior since ticket gates lock 5 minutes before departure.",
        "Platform Boarding: Match your train code, carriage number 车厢 (Chēxiāng), seat 座位 (Zuòwèi), and colored floor queuing markers along the platform."
      ]
    },
    {
      id: "dining-spice",
      badge: "03 · DINING, QR MENUS & SPICE CONTROL",
      title: "Table QR Ordering & Essential Ordering Phrases",
      summary: "Most eateries rely on tabletop QR codes (扫码点餐) scanned via Alipay/WeChat mini-programs:",
      bullets: [
        "Regional Heat Management: In Sichuan, Chongqing, and Hunan, clearly specify 微辣 (Wēilà · Mild spice) or 不要辣 (Bùyào là · No chili) if sensitive to Sichuan peppercorns (花椒).",
        "Bill & Takeaway: Say 服务员，买单 (Fúwùyuán, mǎidān · Check, please) or 打包 (Dǎbāo · Box it to go).",
        "Tableware Fee Note: Packaged sterilized utensil sets occasionally carry a tiny per-seat tea/utensil charge (餐位费, ~2–5 RMB)."
      ]
    },
    {
      id: "etiquette-capitals",
      badge: "04 · HERITAGE BOOKINGS & TEA ETIQUETTE",
      title: "Finger-Tap Thanks & Ancient Capital Ticketing",
      summary: "Shared East Asian ritual literacy elevates every field visit from sightseeing to cultural dialogue:",
      bullets: [
        "Kòushǒu Finger Tap (叩手礼): Lightly tap two curved fingers on the table when someone pours tea into your cup to express silent gratitude.",
        "Table & Gift Taboos: Never plant chopsticks upright into a rice bowl; always hand gifts with two hands and avoid monochrome white or black wrapping.",
        "7-Day Passport Heritage Reservations: Beijing's Palace Museum (故宫博物院), Shaanxi History Museum, and National Museum release passport-linked tickets strictly 7 days ahead via official WeChat mini-programs."
      ]
    }
  ];

  const survivalHanzi = [
    { hanzi: "进站 / 出站", pinyin: "Jìnzhàn / Chūzhàn", vi: "Vào ga / Ra ga", en: "Station Entry / Exit" },
    { hanzi: "检票口", pinyin: "Jiǎnpiàokǒu", vi: "Cổng soát vé lên tàu", en: "Ticket Check Gate" },
    { hanzi: "人工通道", pinyin: "Réngōng tōngdào", vi: "Làn kiểm tra Hộ chiếu", en: "Manual Passport Lane" },
    { hanzi: "车厢 / 座位", pinyin: "Chēxiāng / Zuòwèi", vi: "Số toa / Số ghế", en: "Carriage / Seat" },
    { hanzi: "扫码点餐", pinyin: "Sǎomǎ diǎncān", vi: "Quét mã QR gọi món", en: "Scan QR to Order" },
    { hanzi: "微辣 / 不要辣", pinyin: "Wēilà / Bùyào là", vi: "Cay ít / Không cay", en: "Mild Spice / No Chili" },
    { hanzi: "买单 / 打包", pinyin: "Mǎidān / Dǎbāo", vi: "Tính tiền / Gói mang về", en: "Check Please / Takeaway" },
    { hanzi: "洗手间 / 卫生间", pinyin: "Xǐshǒujiān / Wèishēngjiān", vi: "Nhà vệ sinh", en: "Restroom" },
    { hanzi: "出口 / 换乘", pinyin: "Chūkǒu / Huànchéng", vi: "Lối ra / Chuyển tuyến Metro", en: "Exit / Metro Transfer" },
    { hanzi: "预约 / 护照", pinyin: "Yùyuē / Hùzhào", vi: "Đặt lịch trước / Hộ chiếu", en: "Advance Booking / Passport" }
  ];

  const customProvinces = {
    beijing: {
      bestSeasonVi: "Tháng 9–11 (Thu vàng Cố Cung & Vạn Lý Trường Thành) hoặc tháng 4–5.",
      bestSeasonEn: "Sep–Nov (Golden autumn over the Forbidden City & Great Wall) or Apr–May.",
      mustKnowVi: "Vé Tử Cấm Thành (故宫), Bảo tàng Quốc gia (国博) & Quảng trường Thiên An Môn phải đặt bằng hộ chiếu trước 7 ngày lúc 20:00 (WeChat). Chọn cổng Ngọ Môn (午门) vào Nam – ra Bắc Thần Vũ Môn (神武门) để theo đúng trục trung tâm.",
      mustKnowEn: "Book the Palace Museum (故宫), National Museum, and Tiananmen Square 7 days ahead at 20:00 Beijing time via WeChat using your passport. Enter South at Meridian Gate (午门) and exit North at Shenwumen (神武门) along the Central Axis.",
      flavorVi: "Vịt quay Bắc Kinh (北京烤鸭), Lẩu cừu đồng (涮羊肉), Mì Tương Đen (炸酱面).",
      flavorEn: "Peking Roast Duck (北京烤鸭), Copper-Pot Lamb Hotpot (涮羊肉), Zhajiangmian.",
      noteVi: "Hãy đứng giữa sân điện Thái Hòa đối chiếu ba tầng bệ đá Tu Di Tọa và trục bắc-nam 7,8 km trước khi đọc tiếp chuyên luận 3D."
    },
    shanghai: {
      bestSeasonVi: "Tháng 3–5 và tháng 10–11; tránh cao điểm mưa dầm Mai Vũ tháng 6.",
      bestSeasonEn: "Mar–May and Oct–Nov; avoid heavy plum rains in June.",
      mustKnowVi: "Tải sẵn app Metro 大都会 (Metro Daduhui) hoặc dùng Alipay Transit QR để đi 20 tuyến Metro; phân biệt hai sân bay Hồng Kiều (虹桥 — nối thẳng ga cao tốc) và Phố Đông (浦东 — có tàu đệm từ Maglev).",
      mustKnowEn: "Activate Shanghai Transit QR inside Alipay for seamless Metro rides; distinguish Hongqiao Hub (connected directly to High-Speed Rail) from Pudong Airport (Maglev link).",
      flavorVi: "Tiểu long bao (小笼包), Bánh bao chiên Sinh Tiễn (生煎), Tôm chiên giòn kiểu Bổn Bang.",
      flavorEn: "Xiaolongbao Soup Dumplings (小笼包), Pan-fried Shengjianbao (生煎), Benbang Sweet-Soy Classics.",
      noteVi: "Đối chiếu kiến trúc đá Thạch Khố Môn (石库门) ở Tân Thiên Địa với Ngoại Than để hiểu tư duy khế ước Hải Phái."
    },
    guangxi: {
      bestSeasonVi: "Tháng 4–5 (sương khói Ly Giang như thủy mặc Tống – Nguyên) và tháng 9–10.",
      bestSeasonEn: "Apr–May (mist-veiled Li River evoking Song-Yuan ink painting) & Sep–Oct.",
      mustKnowVi: "Tuyến đường sắt xuyên biên giới Nam Ninh Đông / Quế Lâm cực thuận tiện từ cửa khẩu Hữu Nghị Quan. Với tuyến thuyền Quế Lâm – Dương Sóc trên sông Ly, đặt vé hạng trên 4 sao để lên boong ngắm dãy đá vôi Khải Hoàn.",
      mustKnowEn: "Cross-border rail from Youyiguan via Nanning to Guilin is smooth; book upper-deck 4-star Li River cruises (Guilin -> Yangshuo) for unobstructed karst panorama viewing.",
      flavorVi: "Bún Quế Lâm (桂林米粉), Cá bia Dương Sóc (阳朔啤酒鱼), Bún ốc Liễu Châu (螺蛳粉).",
      flavorEn: "Guilin Rice Noodles (桂林米粉), Yangshuo Beer Fish (啤酒鱼), Liuzhou Luosifen.",
      noteVi: "Góc nhìn thực tế từ ô cửa tàu Quế Lâm chứng thực nghệ thuật Lưu bạch (留白) không phải hư cấu sách vở."
    },
    sichuan: {
      bestSeasonVi: "Tháng 3–6 và tháng 9–11 (mùa thu Cửu Trại Câu & Đô Giang Yển).",
      bestSeasonEn: "Mar–Jun and Sep–Nov (Jiuzhaigou foliage & Dujiangyan).",
      mustKnowVi: "Bảo tàng Tam Tinh Đôi (三星堆) & Khu bảo tồn Gấu trúc Thành Đô hết vé rất nhanh; dùng tàu cao tốc tuyến Thành Đô – Thanh Thành Sơn – Đô Giang Yển (~30 phút từ ga Tê Phố).",
      mustKnowEn: "Sanxingdui Museum and Chengdu Panda Base sell out early; take commuter HSR from Xipu Station directly to Dujiangyan & Mount Qingcheng (~30 mins).",
      flavorVi: "Lẩu Tứ Xuyên dầu bò, Gà Cung Bảo, Đậu phụ Ma Bà (nhắc 微辣 nếu ăn cay vừa).",
      flavorEn: "Sichuan Mala Hotpot, Kung Pao Chicken, Mapo Tofu (request 微辣 for mild heat).",
      noteVi: "Quan sát công trình thủy lợi 2.200 năm Đô Giang Yển không dùng đập bê tông ngang dòng — triết lý Đạo gia thuận tự nhiên."
    },
    chongqing: {
      bestSeasonVi: "Tháng 3–5 và tháng 10–12 (sương mù đô thị 8D cực ấn tượng; tháng 7–8 rất nóng).",
      bestSeasonEn: "Mar–May & Oct–Dec (atmospheric 8D mist; Jul–Aug bring intense summer heat).",
      mustKnowVi: "Đô thị 3D đa tầng khiến GPS 2D hay lạc: nhớ hỏi người dân theo tầng lầu ('đây là tầng 1 hay tầng 8?'). Đi tàu điện Line 2 xuyên tòa nhà Lý Tử Bá (李子坝) trước 9:30 sáng để tránh đông.",
      mustKnowEn: "Chongqing's multi-tier 3D cliff streets confuse standard 2D GPS—verify street floor levels; visit Liziba Monorail (Line 2 passing through a residential tower) before 09:30.",
      flavorVi: "Lẩu Cửu Cung Cách (九宫格火锅), Mì Trùng Khánh (重庆小面), Gà ớt khô Lạt Tử Kê.",
      flavorEn: "Nine-Grid Chongqing Hotpot (九宫格), Chongqing Xiaomian Noodles, Laziji.",
      noteVi: "Đừng bỏ lỡ Hồng Nhai Động (洪崖洞) ban đêm nhìn từ cầu Thiên Tư Môn đối diện sông Gia Lăng."
    },
    henan: {
      bestSeasonVi: "Tháng 4 (Lễ hội Mẫu Đơn Lạc Dương) và tháng 9–10.",
      bestSeasonEn: "April (Luoyang Peony Festival) and Sep–Oct.",
      mustKnowVi: "Cố đô Lạc Dương – Khai Phong – An Dương là cái nôi chữ Giáp Cốt & Bạch Mã Tự; tham quan Hang đá Long Môn (龙门石窟) vào khung 16:30 để bắt trọn cả ánh sáng chiều lẫn hệ thống đèn đêm.",
      mustKnowEn: "Luoyang, Kaifeng & Anyang preserve Oracle Bone (殷墟) and White Horse Temple roots; visit Longmen Grottoes around 16:30 to experience both daylight reliefs and night lighting.",
      flavorVi: "Thủy Tịch Lạc Dương (洛阳水席), Mì hầm cừu Hà Nam (烩面), Súp cay Hồ Lạt Thang.",
      flavorEn: "Luoyang Water Banquet (水席), Henan Braised Hui Noodles (烩面), Hulatang Pepper Soup.",
      noteVi: "Đối chiếu Bạch Mã Tự (白马寺) với sử liệu truyền nhập Phật giáo Đông Á thời Đông Hán."
    },
    yunnan: {
      bestSeasonVi: "Quanh năm ôn hòa; đẹp nhất tháng 3–5 và 10–12 (núi tuyết Ngọc Long trong xanh).",
      bestSeasonEn: "Year-round mild plateau climate; sharpest mountain visibility in Mar–May & Oct–Dec.",
      mustKnowVi: "Côn Minh (1.890m) -> Đại Lý (2.000m) -> Lệ Giang (2.400m) -> Shangri-La (3.200m): di chuyển tăng dần độ cao và uống đủ nước, giữ ấm cổ khi lên đỉnh Ngọc Long Tuyết Sơn (4.506m).",
      mustKnowEn: "Ascend gradually from Kunming -> Dali -> Lijiang -> Shangri-La (3,200m) for altitude comfort; bring windproof layers and oxygen cans for Jade Dragon Snow Mountain.",
      flavorVi: "Bún Qua Cầu (过桥米线), Lẩu nấm rừng Vân Nam, Trà Phổ Nhĩ Cổ thụ (普洱茶).",
      flavorEn: "Crossing-the-Bridge Noodles (过桥米线), Wild Mushroom Hotpot, Aged Pu'er Tea (普洱茶).",
      noteVi: "Từ Cổ trấn Lệ Giang đọc chữ Đông Ba (东巴文) Nạp Tây — hệ chữ tượng hình cổ còn sống sót hiếm hoi."
    },
    shaanxi: {
      bestSeasonVi: "Tháng 4–5 và tháng 9–10.",
      bestSeasonEn: "Apr–May & Sep–Oct.",
      mustKnowVi: "Bảo tàng Lịch sử Thiểm Tây (陕西历史博物馆) mở vé trước 3–5 ngày và hết trong vài phút; kết hợp đi Binh Mã Dũng (兵马俑) sáng sớm rồi đạp xe trên Tường thành cổ Tây An lúc hoàng hôn.",
      mustKnowEn: "Shaanxi History Museum releases limited free/paid tickets days ahead; visit Terracotta Warriors early morning and cycle the Ming Xi'an City Wall at sunset.",
      flavorVi: "Bánh kẹp thịt Thiểm Tây (肉夹馍), Bún thịt cừu xé (羊肉泡馍), Mì Biangbiang.",
      flavorEn: "Roujiamo Pork Burger (肉夹馍), Yangrou Paomo Lamb Soup, Biangbiang Broad Noodles.",
      noteVi: "Trường An nhà Đường với bố cục 108 phường là nguyên mẫu quy hoạch đô thị Đông Á."
    },
    zhejiang: {
      bestSeasonVi: "Tháng 3–5 (mùa hái trà Long Tỉnh) và tháng 9–11.",
      bestSeasonEn: "Mar–May (Longjing tea harvest) and Sep–Nov.",
      mustKnowVi: "Hàng Châu (Tây Hồ · Bảo tàng Lương Chử 5.000 năm) nối thẳng Ninh Ba/Nghĩa Ô bằng đường sắt cao tốc 35 phút. Khu thắng cảnh Tây Hồ miễn phí hoàn toàn không cần vé cổng.",
      mustKnowEn: "Hangzhou (West Lake & 5,000-year Liangzhu Museum) links to Yiwu & Ningbo in 35 mins via HSR; West Lake perimeter parks are open without entry fees.",
      flavorVi: "Cá dấm Tây Hồ (西湖醋鱼), Tôm xào trà Long Tỉnh (龙井虾仁), Thịt Đông Pha.",
      flavorEn: "West Lake Vinegar Fish (西湖醋鱼), Longjing Tea Shrimp (龙井虾仁), Dongpo Pork.",
      noteVi: "Đến Di tích Lương Chử (良渚) để chạm vào bằng chứng khảo cổ học ngọc Tông 5.000 năm."
    },
    jiangsu: {
      bestSeasonVi: "Tháng 3–5 và tháng 10–11.",
      bestSeasonEn: "Mar–May & Oct–Nov.",
      mustKnowVi: "Bảo tàng Tô Châu (thiết kế I. M. Pei) & Chuyết Chính Viên (拙政园) cạnh nhau, buộc đặt vé WeChat trước 7 ngày. Nam Kinh nổi tiếng Lăng Minh Hiếu & Tần Hoài Hà.",
      mustKnowEn: "Suzhou Museum (by I. M. Pei) and Humble Administrator's Garden (拙政园) sit next door—reserve 7 days prior via WeChat; Nanjing pairs Ming Xiaoling with Qinhuai River.",
      flavorVi: "Vịt muối Nam Kinh (盐水鸭), Cá quế Tùng Thử Tô Châu (松鼠鳜鱼), Cua lông Dương Trừng.",
      flavorEn: "Nanjing Salted Duck (盐水鸭), Squirrel Mandarin Fish (松鼠鳜鱼), Yangcheng Hairy Crab.",
      noteVi: "Thưởng thức nghệ thuật mượn cảnh 'Tá cảnh' (借景) thực tế ngay tại Chuyết Chính Viên."
    },
    guangdong: {
      bestSeasonVi: "Tháng 10 đến tháng 3 năm sau (khí hậu mát khô dễ chịu).",
      bestSeasonEn: "Oct–Mar (dry, mild subtropical winter and pleasant trade fair season).",
      mustKnowVi: "Quảng Châu (Canton Fair / Bến cảng Thị Bạc Ty) nối với Thâm Quyến (Hoa Cường Bắc — trung tâm phần cứng) bằng tàu cao tốc 29 phút và dễ qua Hồng Kông/Ma Cao.",
      mustKnowEn: "Guangzhou (Canton Fair & Maritime Silk Road) connects to Shenzhen (Huaqiangbei electronics hub) in 29 minutes via HSR with fast Hong Kong links.",
      flavorVi: "Trà sớm Quảng Đông Điểm Tâm (早茶点心), Ngỗng quay, Cháo thuyền Lệ Loan.",
      flavorEn: "Cantonese Yum Cha Dim Sum (早茶点心), Roast Goose, Sampan Congee.",
      noteVi: "Người Việt đi công tác Quảng Đông nên thử tìm đọc bia ký cổ vùng Lĩnh Nam để thấy dấu ấn giao thương Bách Việt."
    }
  };

  function getProvinceReadiness(prov) {
    if (!prov) return null;
    const custom = customProvinces[prov.id] || {};
    const capital = (prov.identity && prov.identity.capitalVi) || prov.capitalVi || prov.nameVi;
    const landmark = (Array.isArray(prov.landmarks) && prov.landmarks[0] && (prov.landmarks[0].nameVi || prov.landmarks[0]))
      || (prov.heritage && prov.heritage.unesco && prov.heritage.unesco[0])
      || prov.nameVi;
    const dish = (prov.cuisine && prov.cuisine.signatureDishes && prov.cuisine.signatureDishes[0])
      || (prov.identity && prov.identity.signatureDish)
      || `Ẩm thực đặc sản ${prov.nameVi}`;

    return {
      bestSeasonVi: custom.bestSeasonVi || "Tháng 4–5 (Xuân–Hạ mát) hoặc tháng 9–11 (Thu trong, ít mưa).",
      bestSeasonEn: custom.bestSeasonEn || "April–May or September–November for balanced weather and clearer mountain/urban visibility.",
      mustKnowVi: custom.mustKnowVi || `Đặt ga tàu cao tốc vào trung tâm ${capital} và kiểm tra lịch đặt vé bằng hộ chiếu (7 ngày trước) cho các bảo tàng / khu di tích cấp quốc gia như ${landmark}. Chuẩn bị Alipay gắn thẻ và bản đồ Amap trước khi di chuyển liên huyện.`,
      mustKnowEn: custom.mustKnowEn || `Route HSR tickets to ${capital} using your passport via Trip.com/12306 and check 7-day WeChat booking rules for heritage landmarks like ${landmark}. Pre-bind Alipay/WeChat Pay and load Amap.`,
      flavorVi: custom.flavorVi || `${dish}. Khi gọi món tại quán địa phương, quét QR bàn (扫码点餐) và tùy chỉnh mức cay 微辣.`,
      flavorEn: custom.flavorEn || `${dish}. Use tabletop QR ordering (扫码点餐) and specify spice preference (微辣 / 不辣).`,
      noteVi: custom.noteVi || `Quan sát giao thoa giữa ký ức lịch sử tại ${prov.nameVi} (${prov.nameZh}) và hạ tầng giao thương đương đại.`,
      signs: survivalHanzi.slice(0, 6)
    };
  }

  return {
    guideSectionsVi,
    guideSectionsEn,
    survivalHanzi,
    getProvinceReadiness
  };
})();
