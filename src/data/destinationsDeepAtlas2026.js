// ============================================================================
// CHINA DESTINATIONS DEEP ATLAS 2026 (STAGE 1 TOP 10 DESTINATIONS + ANHUI)
// 3-Level Tourism Architecture:
//   Level 1: Provincial Destination Hub (Seasonality, Gateway, Passport Rules)
//   Level 2: City / Sub-Region Cluster (HSR Links, Transit Vibe)
//   Level 3: Verified 5A / UNESCO Scenic Spots & Experiential Curations
// Strictly sourced facts; zero fabricated pricing or unverified schedules.
// ============================================================================

window.CCE_DESTINATIONS_ATLAS = (function () {
  const hubs = [
    {
      id: "dest-beijing",
      provinceId: "prov-beijing",
      tierBadgeVi: "Tuyến Cố đô #01",
      tierBadgeEn: "Imperial Gateway #01",
      nameVi: "Bắc Kinh",
      nameEn: "Beijing",
      nameZh: "北京",
      heroImg: "assets/images/provinces/beijing-temple-of-heaven.jpg",
      bestSeasonVi: "Tháng 9 – 11 (Thu vàng lá đỏ) & Tháng 4 – 5 (Xuân trong xanh)",
      bestSeasonEn: "Sep – Nov (Crisp autumn foliage) & Apr – May (Clear spring skies)",
      gatewayVi: "Sân bay Quốc tế Đại Hưng (PKX) / Thủ Đô (PEK) • Ga Bắc Kinh Nam (tuyến Cao tốc Kinh–Hỗ đi Thượng Hải)",
      gatewayEn: "Daxing (PKX) & Capital (PEK) Airports • Beijing South HSR Station (Jing–Hu Express to Shanghai)",
      overviewVi: "Trái tim 800 năm đế đô Liêu–Kim–Nguyên–Minh–Thanh với 7 Di sản Thế giới UNESCO dọc Trục Trung tâm (Central Axis) và tuyến Trường Thành phòng ngự phương Bắc.",
      overviewEn: "Eight centuries of Liao–Jin–Yuan–Ming–Qing imperial urban planning uniting 7 UNESCO World Heritage ensembles along Beijing's Central Axis and northern Great Wall passes.",
      passportNoteVi: "Cố Cung, Bảo tàng Quốc gia & Đại học Bắc Kinh yêu cầu đặt vé trước 7 ngày bằng số Hộ chiếu qua Mini-Program chính thức (Alipay/WeChat); mang theo hộ chiếu bản gốc ở mọi cửa kiểm soát.",
      passportNoteEn: "The Palace Museum, National Museum, and top sites require advance passport-linked reservations up to 7 days prior via official mini-programs; always carry your physical passport.",
      areas: [
        {
          id: "bj-core-axis",
          nameVi: "Trục Trung tâm & Hoàng thành Cố Cung",
          nameEn: "Imperial Central Axis & Old Hutongs",
          nameZh: "中轴线·东城西城",
          transitVi: "Metro Tuyến 1, Tuyến 2 & Tuyến 8 (Trạm Tiền Môn, Nam La Cổ Hạng) • Quét Alipay Transit QR.",
          transitEn: "Beijing Subway Lines 1, 2 & 8 (Qianmen, Nanluoguxiang) • Tap in with Alipay Transit QR.",
          spots: [
            {
              id: "bj-forbidden-city",
              rating: "5A · UNESCO 1987",
              nameVi: "Cố Cung Bắc Kinh (Tử Cấm Thành)",
              nameEn: "The Palace Museum (Forbidden City)",
              nameZh: "故宫博物院 / 紫禁城",
              img: "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
              expVi: "Đi lộ trình một chiều Nam → Bắc (Ngọ Môn → Tam Đại Điện → Hậu Tam Cung → Trân Bảo Quán → Thần Vũ Môn) và lên đỉnh công viên Cảnh Sơn đối diện ngắm toàn cảnh mái ngói lưu ly vàng.",
              expEn: "Walk the axial south-to-north route from Meridian Gate to the Treasure Gallery, finishing on Jingshan Hill's Wanchun Pavilion for panoramic sunset views over golden palace roofs.",
              foodVi: "Vịt quay Bắc Kinh (Toàn Tụ Đức / Tứ Quý Dân Phúc), Lẩu cừu nồi đồng & Trà hoa nhài Tiền Môn.",
              foodEn: "Peking Roast Duck, Copper-pot Lamb Hotpot & Qianmen Jasmine Tea.",
              bookingVi: "Đặt trước 7 ngày lúc 20:00 (giờ Bắc Kinh) trên cổng chính thức; đóng cửa Thứ Hai (trừ ngày lễ).",
              bookingEn: "Reserve 7 days ahead at 20:00 Beijing time via official portal; closed Mondays except public holidays."
            },
            {
              id: "bj-temple-heaven",
              rating: "5A · UNESCO 1998",
              nameVi: "Thiên Đàn & Điện Kỳ Niên",
              nameEn: "Temple of Heaven Park",
              nameZh: "天坛公园",
              img: "assets/images/provinces/beijing-temple-of-heaven.jpg",
              expVi: "Đến sớm buổi sáng chiêm ngưỡng người dân Bắc Kinh tập Thái Cực Quyền, viết thủy thư trên đá phiến rồi tham quan Kỳ Niên Điện gỗ không dùng đinh sắt và Vọng Âm Bích.",
              expEn: "Visit early morning to watch locals practicing Tai Chi and water calligraphy before exploring the nail-free timber Hall of Prayer for Good Harvests and Echo Wall.",
              foodVi: "Sữa chua gốm Bắc Kinh truyền thống, Bánh đậu xanh & Lư Đả Cổn.",
              foodEn: "Old Beijing ceramic-jar yogurt & Lvdagun sweet glutinous rolls.",
              bookingVi: "Mua vé liên hoàn (Combined Ticket) tại cổng để vào trong Điện Kỳ Niên, Hoàng Khung Vũ và Viên Khâu Đàn.",
              bookingEn: "Select the Combined Pass at entry to access interior courtyards of the Prayer Hall and Circular Mound Altar."
            },
            {
              id: "bj-summer-palace",
              rating: "5A · UNESCO 1998",
              nameVi: "Di Hòa Viên & Trường Lang Hồ Côn Minh",
              nameEn: "Summer Palace (Yiheyuan)",
              nameZh: "颐和园",
              img: "assets/images/academic/qing-summer-palace.jpg",
              expVi: "Dạo Trường Lang dài 728m với hơn 14.000 bức họa tô màu cổ tích, chèo thuyền hồ Côn Minh dưới bóng Phật Hương Các và qua cầu Thập Thất Khổng Kiều lúc hoàng hôn.",
              expEn: "Stroll the 728-meter painted Long Corridor, take a boat across Kunming Lake beneath the Tower of Buddhist Incense, and watch sunset light through the Seventeen-Arch Bridge.",
              foodVi: "Điểm tâm cung đình Ngự Thiện & Mì tương đen Trá Tương Miến.",
              foodEn: "Imperial pastries & Hand-pulled Zhajiangmian noodles.",
              bookingVi: "Kết hợp trong ngày cùng Viên Minh Viên hoặc Khuôn viên Đại học Thanh Hoa (cổng Bắc) ở phía Tây Bắc.",
              bookingEn: "Pair easily with nearby Yuanmingyuan Ruins Park in Haidian District via Metro Line 4."
            }
          ]
        },
        {
          id: "bj-great-wall",
          nameVi: "Vành đai Trường Thành Yến Sơn",
          nameEn: "Northern Yanshan Great Wall Passes",
          nameZh: "延庆·怀柔长城段",
          transitVi: "Tàu ngoại ô Tuyến S2 hoặc Cao tốc Kinh–Trương từ ga Bắc Kinh Bắc đến Bát Đạt Lĩnh (~25 phút); hoặc xe tuyến riêng đến Mộ Điền Dục.",
          transitEn: "Jing–Zhang HSR from Beijing North (~25 min to Badaling) or direct tourist bus from Qianmen to Mutianyu.",
          spots: [
            {
              id: "bj-mutianyu",
              rating: "5A · UNESCO 1987",
              nameVi: "Trường Thành Mộ Điền Dục & Bát Đạt Lĩnh",
              nameEn: "Mutianyu & Badaling Great Wall",
              nameZh: "慕田峪与八达岭长城",
              img: "assets/images/great-wall-ink.jpg",
              expVi: "Đoạn Mộ Điền Dục nổi tiếng thoáng hơn, rừng phong thu rực rỡ (tháp canh 14–20); Bát Đạt Lĩnh thuận tiện tàu cao tốc thẳng tới ga ngầm sâu nhất thế giới.",
              expEn: "Mutianyu offers quieter forest-lined battlements and autumn maples (Towers 14–20), while Badaling connects directly via high-speed rail station.",
              foodVi: "Cá hồi cầu vồng nướng Hoài Nhu & Bánh ngô nông gia chân ải Trường Thành.",
              foodEn: "Huairou roasted trout & rustic corn-flour village flatbreads.",
              bookingVi: "Nên chọn cáp treo khứ hồi nếu đi cùng gia đình hoặc mang giày đế bám trên các bậc đá dốc cổ.",
              bookingEn: "Book cable car / chairlift passes alongside entry reservation and wear high-grip footwear for steep Ming stonework."
            }
          ]
        }
      ]
    },

    {
      id: "dest-shanghai",
      provinceId: "prov-shanghai",
      tierBadgeVi: "Siêu Đô thị #02",
      tierBadgeEn: "Metropolis #02",
      nameVi: "Thượng Hải",
      nameEn: "Shanghai",
      nameZh: "上海",
      heroImg: "assets/images/provinces/shanghai-bund-skyline.jpg",
      bestSeasonVi: "Tháng 3 – 5 (Hoa mộc lan) & Tháng 10 – 11 (Thu mát trời & mùa cua lông)",
      bestSeasonEn: "Mar – May (Spring magnolia) & Oct – Nov (Mild autumn & hairy crab season)",
      gatewayVi: "Sân bay Phố Đông (PVG · Tàu đệm từ Maglev 430 km/h vào trung tâm) & Hồng Kiều (SHA) • Ga Hồng Kiều nối thẳng Tô Châu (25p), Hàng Châu (45p).",
      gatewayEn: "Pudong (PVG, connected by 430 km/h Maglev) & Hongqiao (SHA) Airports • Hongqiao HSR Hub (25 min to Suzhou, 45 min to Hangzhou).",
      overviewVi: "Giao lộ Đông–Tây rực rỡ nhất châu Á bên dòng Hoàng Phố: một bờ là quần thể kiến trúc Di sản Art Deco Bến Thượng Hải, bờ đối diện là đường chân trời vị lai Lục Gia Chủy.",
      overviewEn: "Asia's premier East–West financial and modernist crossroads spanning the Huangpu River between historic Bund stone facades and Pudong's futuristic skyscrapers.",
      passportNoteVi: "Hệ thống Metro 20 tuyến quét QR trực tiếp trong Alipay; phần lớn bảo tàng công lập và Bảo tàng Thượng Hải Phố Đông cần đặt suất qua hộ chiếu trước.",
      passportNoteEn: "All 20 Metro lines accept Alipay Metro QR directly; Shanghai Museum East Wing and Pudong observatories require timed passport slot bookings.",
      areas: [
        {
          id: "sh-huangpu-core",
          nameVi: "Hoàng Phố – Bến Thượng Hải – Dự Viên",
          nameEn: "The Bund, Yu Garden & French Concession",
          nameZh: "外滩·豫园·武康路",
          transitVi: "Phà dân sinh 2 tệ vượt sông Hoàng Phố từ Đông Kim Lăng Lộ sang Lục Gia Chủy thay phà du lịch đắt đỏ.",
          transitEn: "Take the historic local commuter ferry across the Huangpu River from East Jinling Road Pier to Pudong Dongchang Pier.",
          spots: [
            {
              id: "sh-bund-lujiazui",
              rating: "Iconic Heritage Waterfront",
              nameVi: "Bến Thượng Hải (Wai Tan) & Lục Gia Chủy",
              nameEn: "The Bund Waterfront & Lujiazui Skyline",
              nameZh: "外滩万国建筑与陆家嘴",
              img: "assets/images/provinces/shanghai-bund-skyline.jpg",
              expVi: "Dạo bộ 'Triển lãm Kiến trúc Vạn quốc' vào chạng vạng khi hệ thống đèn vàng đồng loạt bật sáng phản chiếu tháp Đông Phương Minh Châu và Tháp Thượng Hải.",
              expEn: "Walk the colonial Neoclassical and Art Deco mile at dusk when illumination reveals Lujiazui's Oriental Pearl Tower, Jin Mao, and Shanghai Tower.",
              foodVi: "Tiểu Long Bao Nam Tường (Dự Viên), Cua lông Dương Trừng Hồ hấp gừng & Cơm chiên Hành Dầu Bản Địa (Bản Bang Thái).",
              foodEn: "Nanxiang Xiaolongbao soup dumplings, Steamed Hairy Crab & Scallion-oil Shanghainese noodles.",
              bookingVi: "Bảo tàng Thượng Hải (Cơ sở Phố Đông & Quảng trường Nhân dân) cần đặt suất miễn phí trước bằng hộ chiếu.",
              bookingEn: "Shanghai Museum (People's Square & Pudong East) requires advance free timed reservations with passport verification."
            },
            {
              id: "sh-zhujiajiao",
              rating: "4A Ancient Water Town",
              nameVi: "Cổ trấn Sông nước Chu Gia Giác & Dự Viên",
              nameEn: "Zhujiajiao Water Town & Yu Garden",
              nameZh: "朱家角古镇与豫园",
              img: "assets/images/articles/hero-traditional-arch.jpg",
              expVi: "Ngồi thuyền gỗ mái vòm qua cầu đá Phóng Sinh Kiều hơn 400 năm tuổi (chỉ 1 giờ đi Metro Tuyến 17 từ Ga Hồng Kiều) hoặc dạo vườn Minh đại Dự Viên.",
              expEn: "Ride wooden canal boats beneath the 16th-century Fangsheng Stone Bridge in Zhujiajiao (direct via Metro Line 17) paired with Ming-era Yu Garden.",
              foodVi: "Bánh ú lá tre Chu Gia Giác, Thịt kho Đông Pha Thượng Hải & Bánh chiên Sinh Tiên Bao.",
              foodEn: "Zhujiajiao sticky rice zongzi, Red-braised pork & Pan-fried Shengjianbao.",
              bookingVi: "Nên đi Chu Gia Giác buổi sáng sớm trước 9:30 hoặc ở lại chạng vạng khi đèn lồng ven kênh thắp sáng.",
              bookingEn: "Arrive at Zhujiajiao before 09:30 or stay into blue hour when canal lanterns illuminate stone bridges."
            }
          ]
        }
      ]
    },

    {
      id: "dest-chongqing",
      provinceId: "prov-chongqing",
      tierBadgeVi: "Đô thị Núi 3D #03",
      tierBadgeEn: "3D Mountain City #03",
      nameVi: "Trùng Khánh",
      nameEn: "Chongqing",
      nameZh: "重庆",
      heroImg: "assets/images/provinces/chongqing-hongyadong.jpg",
      bestSeasonVi: "Tháng 3 – 5 & Tháng 10 – 11 (Tránh cái nóng 'hỏa lò' đỉnh điểm tháng 7–8)",
      bestSeasonEn: "Mar – May & Oct – Nov (Avoid peak summer July–August humidity)",
      gatewayVi: "Sân bay Giang Bắc (CKG) • Ga Trùng Khánh Bắc / Tây nối Thành Đô chỉ 60–80 phút tàu cao tốc Thành–Du.",
      gatewayEn: "Jiangbei International Airport (CKG) • 60–80 min HSR shuttle directly to Chengdu East.",
      overviewVi: "Siêu đô thị địa hình 8D xây dựng dọc vách núi dốc đứng tại ngã ba Trường Giang – Gia Lăng, nổi danh toàn cầu với tàu điện xuyên chung cư Lý Tử Bá, Hồng Nhai Động và Di sản Tượng đá Đại Túc.",
      overviewEn: "Dramatic 8D vertical cliffside metropolis perched at the Yangtze–Jialing confluence, famed for trains gliding through apartment blocks, neon stilt houses, and UNESCO grottoes.",
      passportNoteVi: "Địa hình chênh cao nhiều tầng khiến Google Maps dễ lệch cao độ — dùng Amap (Cao Đức) & mang giày thể thao êm để leo cầu thang Bộ hành Sơn Thành.",
      passportNoteEn: "Multi-level cliffside roads confuse standard 2D maps — navigate with Amap (Gaode) and wear supportive walking shoes for stepped mountain alleys.",
      areas: [
        {
          id: "cq-yuzhong-3d",
          nameVi: "Bán đảo Du Trung 8D & Hợp lưu Lưỡng Giang",
          nameEn: "Yuzhong Peninsula & Two-River Confluence",
          nameZh: "渝中半岛·洪崖洞·李子坝",
          transitVi: "Đường sắt nhẹ Monorail Tuyến 2 (chạy ven sông qua ga Lý Tử Bá) & Cáp treo Trường Giang.",
          transitEn: "CRT Monorail Line 2 through Liziba Station & historic Yangtze River Cableway.",
          spots: [
            {
              id: "cq-hongyadong",
              rating: "4A Cyber-Stilt Landmark",
              nameVi: "Quần thể Nhà sàn Hồng Nhai Động & Lý Tử Bá",
              nameEn: "Hongyadong Cliffside Complex & Liziba Monorail",
              nameZh: "洪崖洞与李子坝轻轨穿楼",
              img: "assets/images/provinces/chongqing-hongyadong.jpg",
              expVi: "Ngắm Hồng Nhai Động 11 tầng rực ánh đèn phản chiếu trên mặt sông từ cầu Thiên Tư Môn hoặc bến Đại Kịch Viện đối diện; đi Monorail Tuyến 2 ngắm tàu chui xuyên chung cư 19 tầng.",
              expEn: "View Hongyadong's glowing 11-story Ba-Yu stilt architecture from Qiansimen Bridge across the river, and ride Monorail Line 2 right into Liziba's residential station.",
              foodVi: "Lẩu Cửu Cung Cách dầu bò cay tê Ba–Du, Mì Trùng Khánh buổi sáng & Bánh gạo ngọt Băng Phấn.",
              foodEn: "Nine-grid Spicy Tallow Hotpot, Chongqing Xiaomian & Cooling Bingfen ice jelly.",
              bookingVi: "Đi cáp treo Trường Giang đặt vé khung giờ trước qua WeChat để tránh xếp hàng dài; chọn mức cay 'Wei La' (hơi cay).",
              bookingEn: "Book Yangtze Cableway time slots in advance via WeChat; order 'Weila' (mild spice) if new to Sichuan peppercorns."
            }
          ]
        },
        {
          id: "cq-wulong-dazu",
          nameVi: "Địa chất Vũ Long & Tượng đá Đại Túc",
          nameEn: "Wulong Karst & Dazu Rock Carvings",
          nameZh: "武隆喀斯特·大足石刻",
          transitVi: "Tàu hỏa / cao tốc du lịch 1–2 giờ từ trung tâm Trùng Khánh tới Vũ Long hoặc Đại Túc.",
          transitEn: "1–2 hour rail or highway excursions from central Chongqing stations.",
          spots: [
            {
              id: "cq-wulong-bridges",
              rating: "5A · UNESCO 2007",
              nameVi: "Thiên Sinh Tam Kiều Vũ Long & Tượng đá Đại Túc",
              nameEn: "Wulong Three Natural Bridges & Dazu UNESCO Grottoes",
              nameZh: "武隆天生三桥与大足石刻",
              img: "assets/images/provinces/chongqing-hongyadong.jpg",
              expVi: "Xuống hố sụt karst khổng lồ với 3 cây cầu đá tự nhiên (Thiên Long – Thanh Long – Hắc Long Kiều) và chiêm ngưỡng nghìn pho tượng Phật Nam Tống chạm khắc sống động ở Bảo Đỉnh Sơn Đại Túc.",
              expEn: "Descend into towering karst sinkholes linked by natural limestone arches at Wulong, and explore Song-dynasty cliff sculptures at Baodingshan in Dazu.",
              foodVi: "Cá hầm đậu phụ Vũ Long & Thịt cừu nướng thảo nguyên Tiên Nữ Sơn.",
              foodEn: "Wulong spicy tofu fish & Fairy Mountain roasted lamb.",
              bookingVi: "Cả Vũ Long và Đại Túc nên tách thành hai chuyến đi trong ngày riêng biệt do nằm ở hai hướng đối lập quanh Trùng Khánh.",
              bookingEn: "Plan Wulong (southeast) and Dazu (northwest) as separate full-day excursions."
            }
          ]
        }
      ]
    },

    {
      id: "dest-sichuan",
      provinceId: "prov-sichuan",
      tierBadgeVi: "Thiên Phủ Chi Quốc #04",
      tierBadgeEn: "Land of Abundance #04",
      nameVi: "Tứ Xuyên",
      nameEn: "Sichuan",
      nameZh: "四川",
      heroImg: "assets/images/provinces/sichuan-jiuzhaigou.jpg",
      bestSeasonVi: "Tháng 9 – 11 (Rừng thu Cửu Trại Câu) & Tháng 3 – 5 (Trà quán Thành Đô & Hoa đào)",
      bestSeasonEn: "Sep – Nov (Autumn foliage at Jiuzhaigou) & Mar – May (Spring Chengdu & Leshan)",
      gatewayVi: "Sân bay Thiên Phủ (TFU) & Song Lưu (CTU) • Đường sắt cao tốc Xuyên–Thanh mới mở nối Thành Đô Đông → ga Trấn Giang Quan / Hoàng Long Cửu Trại dưới 2 giờ!",
      gatewayEn: "Tianfu (TFU) & Shuangliu (CTU) Airports • New high-speed rail links Chengdu East directly toward Jiuzhaigou–Huanglong in under 2 hours.",
      overviewVi: "Thánh địa Gấu trúc lớn, di chỉ văn minh Tam Tinh Đôi 3.000 năm, thủy lợi Đô Giang Yển 2.270 năm vận hành liên tục, tượng Phật đá Lạc Sơn và thiên đường hồ ngũ sắc Cửu Trại Câu.",
      overviewEn: "Ancestral Sanxingdui bronze civilization, Panda sanctuaries, 2,270-year-old Dujiangyan irrigation works, Leshan Giant Buddha, and turquoise alpine lakes in Jiuzhaigou.",
      passportNoteVi: "Cửu Trại Câu và Cơ sở Gấu trúc Thành Đô giới hạn lượt khách ngày và chia khung giờ Sáng/Chiều; cần mang đúng hộ chiếu đăng ký vé qua quầy hoặc mini-program.",
      passportNoteEn: "Jiuzhaigou and Chengdu Panda Base enforce strict daily caps and AM/PM entry windows linked to passport numbers.",
      areas: [
        {
          id: "sc-chengdu-basin",
          nameVi: "Thành Đô – Tam Tinh Đôi – Đô Giang Yển",
          nameEn: "Chengdu, Sanxingdui & Dujiangyan",
          nameZh: "成都·三星堆·都江堰",
          transitVi: "Metro Thành Đô + Tàu liên thành đô (C-train) từ ga Tê Phố tới Đô Giang Yển (~25 phút) hoặc ga Quảng Hán Bắc tới Tam Tinh Đôi (~18 phút).",
          transitEn: "Suburban rail from Xipu reaches Dujiangyan in ~25 min and Guanghan North (Sanxingdui) in ~18 min.",
          spots: [
            {
              id: "sc-dujiangyan-panda",
              rating: "5A · UNESCO 2000",
              nameVi: "Cơ sở Gấu trúc Thành Đô & Thủy lợi Đô Giang Yển",
              nameEn: "Chengdu Giant Panda Base & Dujiangyan Irrigation System",
              nameZh: "成都大熊猫基地与都江堰水利工程",
              img: "assets/images/academic/chengdu-jinli.jpg",
              expVi: "Ghé Cơ sở Gấu trúc lúc mở cửa sớm (07:30–09:30 khi gấu hoạt động ăn tre mạnh nhất), sau đó tham quan đập phân thủy Đô Giang Yển do Lý Băng xây từ năm 256 TCN không dùng bê tông chắn dòng.",
              expEn: "Visit the Giant Panda Base right after opening when pandas feed actively, then explore Li Bing's 256 BCE dam-less Dujiangyan river-diversion engineering marvel.",
              foodVi: "Đậu phụ Ma Bà, Phở tiết dê Thành Đô, Cháo trà & Ăn vặt Ngõ Khoan Trách / Cẩm Lý.",
              foodEn: "Mapo Tofu, Dan Dan noodles, Tea House gaiwan snacks along Jinli & Kuanzhai Alleys.",
              bookingVi: "Vé Bảo tàng Tam Tinh Đôi rất hot — nên săn vé trước 5 ngày theo khung giờ quy định.",
              bookingEn: "Sanxingdui Museum tickets sell out quickly; secure passport reservations 5 days ahead."
            }
          ]
        },
        {
          id: "sc-aba-jiuzhai",
          nameVi: "Cao nguyên A Bá: Cửu Trại Câu & Hoàng Long",
          nameEn: "Aba Alpine Valleys: Jiuzhaigou & Huanglong",
          nameZh: "阿坝州·九寨沟·黄龙",
          transitVi: "Tàu cao tốc từ Thành Đô Đông lên ga Hoàng Long Cửu Trại, chuyển xe trung chuyển chính quy vào thung lũng (~1,5–2h).",
          transitEn: "High-speed train from Chengdu East to Huanglongjiuzhai Station followed by official valley shuttle buses.",
          spots: [
            {
              id: "sc-jiuzhaigou",
              rating: "5A · UNESCO 1992",
              nameVi: "Ngũ Hoa Hải – Thung lũng Cửu Trại Câu & Hoàng Long",
              nameEn: "Jiuzhaigou Five-Flower Lake & Huanglong",
              nameZh: "九寨沟五花海与黄龙五彩池",
              img: "assets/images/provinces/sichuan-jiuzhaigou.jpg",
              expVi: "Đi hệ thống xe buýt nội khu lên hai nhánh chữ Y (Nhật Tắc Câu – Tắc Tra Oa Câu) ngắm hồ đá vôi trong suốt lộ đáy cây cổ thụ hóa thạch và thác Trân Châu.",
              expEn: "Follow the Y-shaped eco-bus loop across Rize and Zechawa valleys to witness Five-Flower Lake's mineral clarity, Nuorilang Falls, and mirror alpine tarns.",
              foodVi: "Lẩu bò Yak cao nguyên Tạng–Khương & Trà bơ Tạng uống ấm bụng ở độ cao >2.500m.",
              foodEn: "Tibetan–Qiang plateau Yak hotpot & warm butter tea at high altitude.",
              bookingVi: "Chú ý độ cao 3.000–3.500m ở Hoàng Long; đi chậm, giữ ấm và mang áo gió quanh năm.",
              bookingEn: "Pack warm windproof layers year-round and ascend gradually at Huanglong's ~3,500m travertine terraces."
            },
            {
              id: "sc-leshan-emei",
              rating: "5A · UNESCO 1996",
              nameVi: "Đại Phật Lạc Sơn & Kim Đỉnh Nga Mi Sơn",
              nameEn: "Leshan Giant Buddha & Mount Emei",
              nameZh: "乐山大佛与峨眉山金顶",
              img: "assets/images/academic/chengdu-jinli.jpg",
              expVi: "Tàu cao tốc 50 phút từ Thành Đô đến ga Lạc Sơn chiêm bái tượng Phật Di Lặc cao 71m tạc vào vách đá đỏ ngã ba sông Mân–Thanh Y–Đại Độ thời Thịnh Đường.",
              expEn: "50-minute HSR ride south from Chengdu to gaze at the 71m Tang-dynasty stone Maitreya carved at the confluence of three rivers, paired with Mount Emei's Golden Summit.",
              foodVi: "Đậu hũ Lạc Sơn, Vịt ngọt Bìa Lạc Sơn (甜皮鸭) & Bánh gạo Kiều Cước Ngưu Nhục.",
              foodEn: "Leshan Sweet-skin Duck, Braised Beef Hotpot & Tofu pudding.",
              bookingVi: "Có thể chọn xuống cầu thang vách đá (xếp hàng lâu cuối tuần) hoặc đi du thuyền ngắm toàn thân tượng Phật trên sông.",
              bookingEn: "Choose between cliffside stairway descent or quick scenic riverboat viewing depending on queue length."
            }
          ]
        }
      ]
    },

    {
      id: "dest-hunan",
      provinceId: "prov-hunan",
      tierBadgeVi: "Kỳ quan Đá Sa thạch #05",
      tierBadgeEn: "Karst Pillar Wonder #05",
      nameVi: "Hồ Nam",
      nameEn: "Hunan",
      nameZh: "湖南",
      heroImg: "assets/images/provinces/hunan-zhangjiajie.jpg",
      bestSeasonVi: "Tháng 4 – 6 & Tháng 9 – 11 (Trời quang ít sương mù che phủ cột đá Trương Gia Giới)",
      bestSeasonEn: "Apr – Jun & Sep – Nov (Clear visibility across sandstone spires)",
      gatewayVi: "Sân bay Trường Sa (CSX) & Trương Gia Giới (DYG) • Tuyến cao tốc mới Trường Sa – Trương Gia Giới – Phượng Hoàng (Trương–Cát–Hoài HSR) rút gọn chặng di chuyển còn ~1 giờ mỗi đoạn!",
      gatewayEn: "Changsha (CSX) & Zhangjiajie (DYG) Airports • Zhang–Ji–Huai HSR directly links Zhangjiajie West, Furong Town, and Fenghuang Ancient Town in ~1 hr.",
      overviewVi: "Miền đất văn hiến Nhạc Lộc – Tiêu Tương kết hợp kỳ quan hơn 3.000 trụ đá thạch anh Vũ Lăng Nguyên, Thiên Môn Sơn cổng trời 999 bậc và cổ trấn Phượng Hoàng ven sông Đà Giang.",
      overviewEn: "Home to Yuelu Academy's Neo-Confucian tradition, 3,000+ quartz-sandstone pillars of Wulingyuan, Tianmen Mountain's sky arch, and stilted Fenghuang Ancient Town.",
      passportNoteVi: "Vé Công viên Rừng Quốc gia Trương Gia Giới có giá trị 4 ngày liên tiếp và gắn trực tiếp với Hộ chiếu + nhận diện khuôn mặt tại cổng vào.",
      passportNoteEn: "Zhangjiajie National Forest Park multi-day passes span 4 consecutive days and bind directly to your passport at gate entry.",
      areas: [
        {
          id: "hn-zhangjiajie",
          nameVi: "Trương Gia Giới: Vũ Lăng Nguyên & Thiên Môn Sơn",
          nameEn: "Zhangjiajie: Wulingyuan & Tianmen Mountain",
          nameZh: "张家界武陵源·天门山",
          transitVi: "Ga Trương Gia Giới Tây (张家界西站) kết nối thẳng Cáp treo Thiên Môn Sơn trong phố & xe buýt 40 phút đến Cổng Đông Vũ Lăng Nguyên.",
          transitEn: "Zhangjiajie West HSR Station links to downtown Tianmen Cableway and 40-min shuttles to Wulingyuan East Gate.",
          spots: [
            {
              id: "hn-wulingyuan",
              rating: "5A · UNESCO 1992",
              nameVi: "Viên Gia Giới – Thiên Tử Sơn – Kim Tiên Khê",
              nameEn: "Wulingyuan Forest Park (Yuanjiajie & Tianzi Mountain)",
              nameZh: "武陵源天子山与袁家界",
              img: "assets/images/provinces/hunan-zhangjiajie.jpg",
              expVi: "Đi thang máy Bách Long Thiên Thê bên vách đá dựng đứng ngắm Cột Càn Khôn (cảm hứng núi bay Avatar), đi bộ thung lũng suối Kim Tiên và sang cầu kính Đại Hiệp Cốc.",
              expEn: "Ascend Bailong cliffside elevator to Avatar's Hallelujah Mountain vistas, hike quiet Golden Whip Stream gorge, and pair with Zhangjiajie Grand Canyon Glass Bridge.",
              foodVi: "Tam Hạ Nồi người Thổ Gia (nồi hầm ba nguyên liệu cay ấm) & Trà gừng đường nâu.",
              foodEn: "Tujia Three-Pot Stew (Sanxiaguo) & Xiangxi smoked pork.",
              bookingVi: "Chia 2 ngày cho Vũ Lăng Nguyên và dành trọn 1 ngày riêng (tuyến A hoặc B đặt khung giờ) cho Thiên Môn Sơn Cổng Trời.",
              bookingEn: "Dedicate 2 days to Wulingyuan and 1 separate day with timed Route A/B tickets for Tianmen Mountain."
            }
          ]
        },
        {
          id: "hn-xiangxi-changsha",
          nameVi: "Phượng Hoàng Cổ Trấn & Trường Sa Nhạc Lộc",
          nameEn: "Fenghuang Ancient Town & Changsha Yuelu",
          nameZh: "凤凰古城·芙蓉镇·长沙",
          transitVi: "Cao tốc Trương Gia Giới Tây → Phù Dung Trấn (23 phút) → Phượng Hoàng Cổ Trấn (~60 phút) → Trường Sa Nam (~2,5 giờ).",
          transitEn: "Direct HSR hops link Zhangjiajie West → Furongzhen → Fenghuang Ancient Town → Changsha South seamlessly.",
          spots: [
            {
              id: "hn-fenghuang",
              rating: "5A Ancient Town",
              nameVi: "Phượng Hoàng Cổ Trấn & Quần thể Nhạc Lộc Trường Sa",
              nameEn: "Fenghuang Ancient Town & Changsha Orange Isle",
              nameZh: "凤凰古城沱江与长沙岳麓山",
              img: "assets/images/articles/hero-academy-shuyuan.jpg",
              expVi: "Ngắm nhà sàn Điếu Cước Lâu bên dòng Đà Giang từ Cầu Hồng Kiều vào sáng sớm sương tan và buổi tối lên đèn; kết hợp Thư viện Nhạc Lộc 1.000 năm tại Trường Sa.",
              expEn: "Photograph Tuojiang River stilt houses at misty dawn and lantern-lit evening from Hong Bridge; pair with millennia-old Yuelu Academy in Changsha.",
              foodVi: "Đậu phụ thối Trường Sa (Hỏa Cung Điện), Đầu cá hấp ớt xắt (Đọa Tiêu Ngư Đầu) & Cá nấu canh chua người Miêu.",
              foodEn: "Changsha Black Stinky Tofu, Steamed Fish Head with Diced Chili & Miao Sour Soup Fish.",
              bookingVi: "Ga cao tốc Phượng Hoàng Cổ Trấn có xe điện/shuttle thẳng tới bờ sông Đà Giang chỉ 15–20 phút.",
              bookingEn: "Official Maglev & shuttle buses run from Fenghuang HSR Station straight into the riverside old quarter."
            }
          ]
        }
      ]
    },

    {
      id: "dest-guangxi",
      provinceId: "prov-guangxi",
      tierBadgeVi: "Cửa ngõ Láng giềng #06",
      tierBadgeEn: "Sino–Viet Karst Gateway #06",
      nameVi: "Quảng Tây",
      nameEn: "Guangxi",
      nameZh: "广西",
      heroImg: "assets/images/provinces/guangxi-guilin-li-river.jpg",
      bestSeasonVi: "Tháng 4 – 10 (Nước sông Ly Giang xanh trong & mùa lúa vàng ruộng bậc thang Long Tích tháng 9–10)",
      bestSeasonEn: "Apr – Oct (Emerald Li River flows & golden Longji Rice Terraces in Sep–Oct)",
      gatewayVi: "Gần Việt Nam nhất: tàu liên vận hoặc đường bộ qua cửa khẩu Hữu Nghị Quan (Lạng Sơn) / Trà Lĩnh → Nam Ninh → tàu cao tốc thẳng Quế Lâm – Dương Sóc (2,5 giờ).",
      gatewayEn: "Nearest border province to Vietnam via Hữu Nghị Quan / Nanning hub, connecting directly by HSR to Guilin and Yangshuo (~2.5 hrs).",
      overviewVi: "Vùng non nước sơn thủy hữu tình 'Giáp thiên hạ' Quế Lâm – Dương Sóc in trên tờ 20 NDT, kết nối ruộng bậc thang Long Tích dân tộc Choang–Dao và cụm thác xuyên quốc gia Đức Thiên – Bản Giốc.",
      overviewEn: "Iconic tower-karst peaks framing the 20-RMB banknote view along the Li River, terraced Longji mountains, and the cross-border Detian–Bản Giốc waterfall.",
      passportNoteVi: "Du khách Việt Nam thuận tiện nhất khi đi tuyến Hữu Nghị Quan → Nam Ninh Đông → Dương Sóc / Quế Lâm hoàn toàn bằng đường bộ + tàu cao tốc 12306.",
      passportNoteEn: "Seamless overland HSR access from Nanning East directly to Yangshuo Station and Guilin hubs using passport tickets.",
      areas: [
        {
          id: "gx-guilin-yangshuo",
          nameVi: "Quế Lâm – Ly Giang – Hưng Bình – Dương Sóc",
          nameEn: "Guilin, Li River & Yangshuo Karst Basin",
          nameZh: "桂林·漓江·兴坪·阳朔",
          transitVi: "Ga Quế Lâm Bắc & Ga Dương Sóc (nằm tại Hưng Bình, rất gần điểm ngắm cảnh 20 Tệ và bè tre Ly Giang).",
          transitEn: "Guilin North / Guilin Stations and Yangshuo Station (conveniently located near Xingping 20-RMB viewpoint).",
          spots: [
            {
              id: "gx-lijiang-xingping",
              rating: "5A · UNESCO South China Karst",
              nameVi: "Du thuyền Ly Giang, Hưng Bình (20 Tệ) & Sông Ngộ Long",
              nameEn: "Li River Cruise, Xingping 20-RMB Vista & Yulong River",
              nameZh: "漓江山水与阳朔遇龙河",
              img: "assets/images/provinces/guangxi-guilin-li-river.jpg",
              expVi: "Đi thuyền máy 4 sao đoạn Ma Bàn Sơn → Dương Sóc (hơn 3 giờ qua Cửu Mã Họa Sơn), đạp xe men sông Ngộ Long giữa cánh đồng lúa và đi bè tre mộc mạc.",
              expEn: "Cruise the emerald Li River gorge past Nine-Horse Mural Hill to Yangshuo, cycle Yulong valley lanes, and drift along calm bamboo-raft weirs.",
              foodVi: "Bún gạo Quế Lâm khô trộn thịt xá xíu (桂林米粉), Vịt hầm bia Dương Sóc & Cá Ly Giang hấp.",
              foodEn: "Guilin dry-mixed rice noodles, Yangshuo Beer Fish & Steamed Li River carp.",
              bookingVi: "Mua vé du thuyền Ly Giang chính thống của cảng Trúc Giang/Ma Bàn Sơn hoặc bè Ngộ Long tại bến chính quy.",
              bookingEn: "Book official Zhujiang/Mopanshan Pier Li River cruises and certified Yulong bamboo-raft piers to avoid touts."
            },
            {
              id: "gx-detian-longji",
              rating: "5A Transnational & Heritage",
              nameVi: "Thác Đức Thiên (Sùng Tả) & Ruộng bậc thang Long Tích",
              nameEn: "Detian Transnational Waterfall & Longji Terraces",
              nameZh: "德天跨国瀑布与龙脊梯田",
              img: "assets/images/academic/guilin-li-river.jpg",
              expVi: "Chiêm ngưỡng dòng thác biên giới Đức Thiên – Bản Giốc bên sông Quy Xuân và ngắm ruộng bậc thang 'Sống lưng Rồng' của người Choang – Hồng Dao từ Bình An / Kim Khanh.",
              expEn: "Stand at the Guangxi side of the Guichun River facing Vietnam's Bản Giốc Falls, or hike to sunrise viewpoints across Zhuang–Yao Longji rice terraces.",
              foodVi: "Cơm lam ống nứa Long Tích (竹筒饭) & Lẩu vịt măng chua.",
              foodEn: "Bamboo-tube sticky rice & Pickled bamboo shoot duck.",
              bookingVi: "Khu biên giới Đức Thiên có khu vực Hợp tác Du lịch Xuyên biên giới Trung–Việt — luôn mang theo hộ chiếu.",
              bookingEn: "Keep physical passport on hand at all Sùng Tả / Detian border tourism checkpoints."
            }
          ]
        }
      ]
    },

    {
      id: "dest-zhejiang",
      provinceId: "prov-zhejiang",
      tierBadgeVi: "Giang Nam Thi họa #07",
      tierBadgeEn: "Jiangnan Poetic Lakes #07",
      nameVi: "Chiết Giang",
      nameEn: "Zhejiang",
      nameZh: "浙江",
      heroImg: "assets/images/provinces/zhejiang-hangzhou-westlake.jpg",
      bestSeasonVi: "Tháng 3 – 5 (Trà Long Tỉnh vụ xuân & hoa đào Tô Đê) & Tháng 9 – 11 (Hương quế vàng Tây Hồ)",
      bestSeasonEn: "Mar – May (Spring Longjing tea harvest) & Sep – Nov (Osmanthus blossoms around West Lake)",
      gatewayVi: "Sân bay Tiêu Sơn (HGH) • Ga Hàng Châu Đông là ngã tư cao tốc khổng lồ: 45p đi Thượng Hải, 30p đi Thiệu Hưng, ~2 giờ tới Hoàng Sơn Bắc (An Huy).",
      gatewayEn: "Xiaoshan Airport (HGH) • Hangzhou East HSR Hub connects to Shanghai (45 min), Shaoxing (20 min), and Huangshan North (~1.5–2 hrs).",
      overviewVi: "Vùng đất 'Trên có Thiên đàng, dưới có Tô Hàng' với Tây Hồ Di sản UNESCO, đầm lầy Tây Khê, cố trấn sông nước Ô Trấn, núi Phổ Đà và cái nôi thương nhân Chiết Thương – Alibaba.",
      overviewEn: "UNESCO-listed West Lake willow causeways, Xixi Wetland waterways, canal town Wuzhen, and the historic literary heartland of Shaoxing & Ningbo's Tianyi Pavilion.",
      passportNoteVi: "Công viên quanh Tây Hồ Hàng Châu mở cửa tự do quanh năm; chỉ chùa Linh Ẩn, Tháp Lôi Phong, thuyền Tam Đàm Ấn Nguyệt và Ô Trấn cần vé riêng.",
      passportNoteEn: "Public causeways around West Lake are free and open 24/7; only Lingyin Temple, Leifeng Pagoda, island boats, and Wuzhen require entry tickets.",
      areas: [
        {
          id: "zj-hangzhou-wuzhen",
          nameVi: "Hàng Châu (Tây Hồ – Mai Gia Ổ) & Ô Trấn",
          nameEn: "Hangzhou West Lake & Wuzhen Water Town",
          nameZh: "杭州西湖·龙井·乌镇",
          transitVi: "Metro Hàng Châu nối thẳng Tây Hồ (Ga Long Tường Kiều) & xe buýt du lịch từ ga Đồng Hương tới Ô Trấn.",
          transitEn: "Hangzhou Metro Line 1 reaches Longxiangqiao beside West Lake; Tongxiang HSR station connects smoothly to Wuzhen.",
          spots: [
            {
              id: "zj-west-lake",
              rating: "5A · UNESCO 2011",
              nameVi: "Tây Hồ Thập Cảnh & Đồi Trà Long Tỉnh Mai Gia Ổ",
              nameEn: "West Lake Scenic Area & Meijiawu Longjing Tea Hills",
              nameZh: "杭州西湖与梅家坞龙井茶村",
              img: "assets/images/provinces/zhejiang-hangzhou-westlake.jpg",
              expVi: "Đạp xe dọc Tô Đê xuân sớm, đi thuyền sang đảo Tiểu Doanh Châu ngắm Tam Đàm Ấn Nguyệt, lên đỉnh Lôi Phong Tháp lúc hoàng hôn rồi về làng trà Mai Gia Ổ nếm trà vụ Thanh Minh.",
              expEn: "Cycle Su Causeway at dawn, boat to Three Pools Mirroring the Moon, watch sunset from Leifeng Pagoda, and sip fresh pre-Qingming Longjing green tea in Meijiawu valley.",
              foodVi: "Tôm nõn xào trà Long Tỉnh (龙井虾仁), Thịt kho Đông Pha & Mì lươn Phiến Nhi Xuyên.",
              foodEn: "Longjing Tea Stir-fried River Shrimp, Dongpo Pork & Pian'erchuan noodles.",
              bookingVi: "Đặt trước vé Bảo tàng Trà Quốc gia hoặc show 'Ký ức Tây Hồ' (do Trương Nghệ Mưu đạo diễn) vào buổi tối.",
              bookingEn: "Reserve Impression West Lake evening performance seats beforehand if visiting during peak spring/autumn weekends."
            },
            {
              id: "zj-wuzhen",
              rating: "5A Canal Heritage",
              nameVi: "Cổ trấn Ô Trấn (Tây Sách) & Cố hương Thiệu Hưng",
              nameEn: "Wuzhen West Scenic Zone & Shaoxing Heritage",
              nameZh: "乌镇西栅与绍兴鲁迅故里",
              img: "assets/images/academic/west-lake-hangzhou.jpg",
              expVi: "Nghỉ đêm bên trong khu Tây Sách Ô Trấn để dạo những con hẻm lát đá vắng người sau 21:00 khi khách ngày đã về hết và nghe tiếng mái chèo gỗ buổi sớm.",
              expEn: "Stay overnight inside Wuzhen Xizha to walk quiet stone alleys after day-tourists leave at 21:00 and wake to mist over traditional canal rowboats.",
              foodVi: "Thịt cừu kho Thư Sinh, Bánh Định Thắng & Rượu Hoàng Tửu Thiệu Hưng ấm.",
              foodEn: "Wuzhen scholar-braised mutton, Dingsheng rice cakes & Shaoxing aged yellow wine.",
              bookingVi: "Khách đặt phòng nghỉ chính thức trong Tây Sách thường được ưu tiên quét mặt/hộ chiếu ra vào tự do.",
              bookingEn: "Official lodging inside Wuzhen Xizha provides multi-entry access during your stay."
            }
          ]
        }
      ]
    },

    {
      id: "dest-shaanxi",
      provinceId: "prov-shaanxi",
      tierBadgeVi: "Cố đô 13 Triều #08",
      tierBadgeEn: "Ancient Capital #08",
      nameVi: "Thiểm Tây",
      nameEn: "Shaanxi",
      nameZh: "陕西",
      heroImg: "assets/images/provinces/shaanxi-terracotta-army.jpg",
      bestSeasonVi: "Tháng 3 – 5 & Tháng 9 – 11 (Ôn hòa đạp xe trên tường thành cổ và leo Hoa Sơn)",
      bestSeasonEn: "Mar – May & Sep – Nov (Ideal temperatures for Xi'an City Wall cycling & Mt. Hua)",
      gatewayVi: "Sân bay Hàm Dương (XIY) • Ga Tây An Bắc — trạm trung chuyển đường sắt Tây Bắc lớn bậc nhất nối Bắc Kinh (~4,5h) & Thành Đô (~3,5h).",
      gatewayEn: "Xi'an Xianyang Airport (XIY) • Xi'an North HSR Hub links Chengdu (~3.5 hrs) and Beijing (~4.5 hrs).",
      overviewVi: "Khởi nguồn Con đường Tơ lụa Trường An: Đội quân Đất nung Tần Thủy Hoàng, Đại Nhạn Tháp nơi Huyền Trang dịch kinh, tường thành cổ 13,7 km nguyên vẹn nhất Trung Quốc và hiểm sơn Hoa Sơn.",
      overviewEn: "Eastern terminus of the Silk Road for 13 dynasties: Qin Terracotta Warriors, Xuanzang's Giant Wild Goose Pagoda, intact 14th-century City Wall, and granite Mount Hua.",
      passportNoteVi: "Bảo tàng Lịch sử Thiểm Tây (miễn phí nhưng suất cực khan hiếm) & Binh Mã Dũng bắt buộc đặt vé bằng Hộ chiếu trước nhiều ngày trên WeChat/Trip.",
      passportNoteEn: "Shaanxi History Museum (free, extremely limited quota) and Terracotta Army Museum strictly enforce advance passport ticketing.",
      areas: [
        {
          id: "sn-xian-axis",
          nameVi: "Cố đô Tây An & Lăng Tần Thủy Hoàng",
          nameEn: "Xi'an Imperial Axis & Terracotta Army",
          nameZh: "西安古城·兵马俑·大唐不夜城",
          transitVi: "Metro Tuyến 9 đi thẳng Ga Hoa Thanh Trì / Lâm Đồng (nơi có Binh Mã Dũng); Tuyến 2 & 3 phủ khắp Tường Thành & Đại Nhạn Tháp.",
          transitEn: "Metro Line 9 connects directly toward Lintong & Terracotta shuttles; Lines 2 & 3 serve City Wall and Pagoda zones.",
          spots: [
            {
              id: "sn-terracotta",
              rating: "5A · UNESCO 1987",
              nameVi: "Binh Mã Dũng (Lăng Tần Thủy Hoàng) & Hoa Thanh Cung",
              nameEn: "Emperor Qinshihuang's Terracotta Army Museum",
              nameZh: "秦始皇帝陵兵马俑",
              img: "assets/images/provinces/shaanxi-terracotta-army.jpg",
              expVi: "Tham quan Hố số 1 (6.000 binh sĩ chiến xa), Hố 2, Hố 3 và Bảo tàng Xe Ngựa Đồng Lệ Sơn; có thể kết hợp xe điện chính quy sang gò lăng Tần Thủy Hoàng (bao gồm trong vé chung).",
              expEn: "Examine Pit 1's battle formation, Pits 2 & 3, and the Bronze Chariots Gallery, then ride the included shuttle to Emperor Qin's mausoleum mound park.",
              foodVi: "Nhục Giáp Mô (Bánh mì kẹp thịt kho), Mì Biangbiang sợi to xối dầu ớt & Canh cừu bẻ bánh Dương Nhục Pao Mô.",
              foodEn: "Roujiamo spiced-pork bun, Hand-pulled Biangbiang oil-splashed noodles & Yangrou Paomo lamb stew.",
              bookingVi: "Vé đã bao gồm cả Khu Binh Mã Dũng lẫn Công viên Di chỉ Lệ Sơn — đi trước 8:30 sáng để tránh đoàn đông tại Hố 1.",
              bookingEn: "Enter at 08:30 opening to view Pit 1 clearly; ticket includes both Warriors and Lishan Mausoleum shuttle."
            },
            {
              id: "sn-city-wall-pagoda",
              rating: "5A Heritage Core",
              nameVi: "Tường Thành Cổ Tây An, Đại Nhạn Tháp & Đường Bất Dạ Thành",
              nameEn: "Xi'an City Wall, Giant Wild Goose Pagoda & Tang Mall",
              nameZh: "西安明城墙·大雁塔",
              img: "assets/images/articles/hero-tang-dynasty.jpg",
              expVi: "Đạp xe đón hoàng hôn trên mặt tường thành nhà Minh rộng 12m từ Vĩnh Ninh Môn, sau đó tản bộ phố đèn lồng Đại Đường Bất Dạ Thành ngắm Đại Nhạn Tháp sáng rực.",
              expEn: "Cycle atop the 14th-century Ming City Wall from Yongning Gate at sunset, then stroll illuminated Tang architecture beneath the 652 CE Pagoda.",
              foodVi: "Lương Bì nguội (凉皮), Bún nước hầm & Nước giải khát Băng Phong vị cam kinh điển Tây An.",
              foodEn: "Chilled Liangpi noodles, Osmanthus rice cakes & classic Xi'an Ice Peak orange soda.",
              bookingVi: "Nếu chọn mặc Hán phục Đường chế (Trường An thập nhị thời thần), nên chọn buổi chiều để chụp cả ánh sáng tự nhiên và đèn lồng tối.",
              bookingEn: "Afternoon into dusk provides both natural daylight and illuminated lantern backdrops along the Tang pedestrian avenue."
            }
          ]
        },
        {
          id: "sn-huashan",
          nameVi: "Ngũ Nhạc Tây Nhạc: Hoa Sơn (Vị Nam)",
          nameEn: "Sacred West Peak: Mount Hua (Huashan)",
          nameZh: "西岳华山",
          transitVi: "Tàu cao tốc Ga Tây An Bắc → Ga Hoa Sơn Bắc chỉ 28–35 phút.",
          transitEn: "28–35 min HSR jump directly from Xi'an North to Huashan North Station.",
          spots: [
            {
              id: "sn-mount-hua",
              rating: "5A Sacred Peak",
              nameVi: "Ngũ Phong Đá Hoa Cương Hoa Sơn (Tây Phong – Bắc Phong)",
              nameEn: "Mount Hua Granite Ridges (West & North Peaks)",
              nameZh: "华山东西南北中峰",
              img: "assets/images/provinces/shaanxi-terracotta-army.jpg",
              expVi: "Tuyến phổ thông an toàn: Cáp treo Tây Phong lên thẳng sống núi (2.082m) ngắm biển mây, đi bộ qua Nam Phong – Đông Phong rồi xuống bằng cáp treo Bắc Phong (Tây Thượng Bắc Hạ).",
              expEn: "Classic 'West Up, North Down' loop takes the spectacular West Peak cliff cableway along sky ridges toward East and North Peaks with less uphill knee strain.",
              foodVi: "Mì xối dầu Thiểm Tây & Bánh nướng kẹp thịt Hoa Âm dưới chân núi.",
              foodEn: "Shaanxi oil-splashed noodles & Huayin flatbreads.",
              bookingVi: "Tránh đi ngày gió bão hoặc tuyết đóng băng mùa đông khi các đoạn ván gỗ vách đá có thể tạm đóng.",
              bookingEn: "Check daily weather notices at Huashan North; cliffside plank walks close automatically during high wind or ice."
            }
          ]
        }
      ]
    },

    {
      id: "dest-yunnan",
      provinceId: "prov-yunnan",
      tierBadgeVi: "Tuyến Đường Sắt Biểu tượng #09",
      tierBadgeEn: "Iconic Border Rail Loop #09",
      nameVi: "Vân Nam",
      nameEn: "Yunnan",
      nameZh: "云南",
      heroImg: "assets/images/provinces/yunnan-lijiang-old-town.jpg",
      bestSeasonVi: "Quanh năm ('Xuân Thành'); đẹp nhất Tháng 11 – 3 (Hải âu Hồ Nhĩ Hải & Tuyết sơn Ngọc Long rõ đỉnh)",
      bestSeasonEn: "Year-round mild plateau; Nov – Mar brings clearest Jade Dragon snow peaks and seagulls over Erhai",
      gatewayVi: "Hành lang gần Việt Nam: đường bộ / tàu từ Lào Cai – Hà Khẩu lên Côn Minh, rồi tuyến Đường sắt Côn Minh – Đại Lý (2h) – Lệ Giang (1,5h) – Shangri-La (1,5h) hoàn toàn liền mạch!",
      gatewayEn: "Connected near Vietnam's Lao Cai border to Kunming, then seamless Yunnan HSR hops link Kunming → Dali → Lijiang → Shangri-La.",
      overviewVi: "Vùng cao nguyên đa sắc tộc rực rỡ nhất Tây Nam (Nạp Tây, Bạch, Tạng, Di, Hà Nhì), nối chuỗi cổ trấn soi bóng núi tuyết vĩnh cửu và thảo nguyên cao nguyên Tạng Địch Khánh.",
      overviewEn: "China's most ethnically diverse plateau linking Kunming's karst Stone Forest, Dali's Erhai Lake, cobblestone Lijiang Old Town, and Tibetan Shangri-La.",
      passportNoteVi: "Từ Lệ Giang lên đỉnh núi tuyết Ngọc Long (4.506–4.680m) và Shangri-La (3.300m) cần bình oxy cá nhân dự phòng và di chuyển từ tốn ngày đầu.",
      passportNoteEn: "Ascend gradually when moving to Lijiang's Jade Dragon Snow Mountain (4,506m+ cableway) and Shangri-La (3,300m); avoid heavy exertion on day one.",
      areas: [
        {
          id: "yn-kunming-dali",
          nameVi: "Côn Minh Thạch Lâm & Đại Lý Nhĩ Hải",
          nameEn: "Kunming Stone Forest & Dali Erhai Lake",
          nameZh: "昆明石林·大理古城洱海",
          transitVi: "Tàu cao tốc Côn Minh Nam → Ga Thạch Lâm Tây (20p) & Ga Côn Minh → Ga Đại Lý (2 giờ).",
          transitEn: "HSR links Kunming South to Shilin West (20 min) and Kunming to Dali Station (~2 hrs).",
          spots: [
            {
              id: "yn-dali-shilin",
              rating: "5A · UNESCO World Heritage",
              nameVi: "Rừng đá Thạch Lâm, Hồ Nhĩ Hải & Tam Tháp Đại Lý",
              nameEn: "Shilin Stone Forest, Erhai Ecology Corridor & Three Pagodas",
              nameZh: "石林风景区·大理洱海与崇圣寺三塔",
              img: "assets/images/provinces/yunnan-lijiang-old-town.jpg",
              expVi: "Đạp xe trên hành lang sinh thái không xe cơ giới sát mép nước Hồ Nhĩ Hải ở làng Hỷ Châu (nhà cổ người Bạch tường trắng) hoặc ngắm đỉnh Tam Tháp Sùng Thánh Tự soi bóng núi Thương Sơn.",
              expEn: "Cycle the car-free Erhai Ecological Corridor past Bai-ethnic courtyards in Xizhou Village and admire Tang-dynasty Three Pagodas beneath Cangshan Mountain.",
              foodVi: "Bún Qua Cầu Côn Minh (过桥米线), Bánh hoa hồng tươi, Phô mai nướng Nhũ Phiến & Gà hầm nồi đất.",
              foodEn: "Kunming Crossing-the-Bridge Rice Noodles, Rose-petal Pastry & Crispy Dali Rushan milk fan.",
              bookingVi: "Cáp treo Lớn núi Thương Sơn & hồ Nhĩ Hải nên tránh buổi trưa nắng gắt; chọn góc sáng sớm ở Cầu Lang Kiều.",
              bookingEn: "Early mornings offer calm mirror reflections along Erhai before afternoon plateau winds rise."
            }
          ]
        },
        {
          id: "yn-lijiang-shangrila",
          nameVi: "Lệ Giang – Ngọc Long Tuyết Sơn – Shangri-La",
          nameEn: "Lijiang Old Town, Snow Mountain & Shangri-La",
          nameZh: "丽江古城·玉龙雪山·香格里拉",
          transitVi: "Đường sắt Lệ Giang – Shangri-La mới khánh thành xuyên Hổ Khiêu Hiệp đưa tàu thẳng từ Lệ Giang lên cao nguyên Tạng trong ~1,5 giờ!",
          transitEn: "The newly opened Lijiang–Shangri-La Railway cuts across Tiger Leaping Gorge to reach the Tibetan plateau in ~1.5 hrs.",
          spots: [
            {
              id: "yn-lijiang-snow",
              rating: "5A · UNESCO 1997",
              nameVi: "Thành cổ Lệ Giang, Thung lũng Lam Nguyệt Cốc & Phổ Đạt Thố",
              nameEn: "Lijiang Dayan Old Town, Blue Moon Valley & Pudacuo",
              nameZh: "丽江古城·蓝月谷·松赞林寺",
              img: "assets/images/provinces/yunnan-lijiang-old-town.jpg",
              expVi: "Ngắm Ngọc Long Tuyết Sơn soi bóng xuống hồ Công viên Hắc Long Đàm lúc bình minh, đi cáp treo Băng Xuyên (cần săn vé sớm trước vài ngày) và thăm tu viện Tùng Tán Lâm tự ở Shangri-La.",
              expEn: "Catch golden sunrise reflections of Jade Dragon Mountain in Black Dragon Pool, explore turquoise Blue Moon Valley pools, and tour Songzanlin Monastery in Shangri-La.",
              foodVi: "Lẩu sườn muối khô Nạp Tây (腊排骨火锅), Lẩu nấm hoang dã mùa mưa & Lẩu bò Yak Tạng.",
              foodEn: "Naxi Cured Pork-Rib Hotpot, Wild Mushroom Feast & Tibetan Yak Hotpot.",
              bookingVi: "Vé cáp treo lớn (4.506m) Ngọc Long Tuyết Sơn cực kỳ giới hạn — kiểm tra kênh đặt vé chính thức trước nhiều ngày.",
              bookingEn: "Glacier Park Big Cableway slots at Jade Dragon Mountain sell out days early via official mini-programs."
            }
          ]
        }
      ]
    },

    {
      id: "dest-heilongjiang",
      provinceId: "prov-heilongjiang",
      tierBadgeVi: "Xứ Băng Tuyết #10",
      tierBadgeEn: "Ice & Snow Capital #10",
      nameVi: "Hắc Long Giang (Cáp Nhĩ Tân)",
      nameEn: "Heilongjiang (Harbin)",
      nameZh: "黑龙江·哈尔滨",
      heroImg: "assets/images/provinces/heilongjiang-saint-sophia.jpg",
      bestSeasonVi: "Cuối Tháng 12 – Tháng 2 (Lễ hội Băng Đăng Quốc tế -25°C) & Tháng 6 – 8 (Tránh nóng mùa hè ~22°C)",
      bestSeasonEn: "Late Dec – Feb (International Ice & Snow World) & Jun – Aug (Cool 22°C summer escape)",
      gatewayVi: "Sân bay Thái Bình Cáp Nhĩ Tân (HRB) • Ga Cáp Nhĩ Tân Tây (tàu cao tốc Cáp–Đại chịu rét siêu hạng nối Trường Xuân – Thẩm Dương – Bắc Kinh).",
      gatewayEn: "Harbin Taiping Airport (HRB) • Harbin West HSR links Beijing and Shenyang via cold-weather Fuxing trains.",
      overviewVi: "'Thành phố Phương Đông Moscow' nơi dòng sông Tùng Hoa đóng băng biến thành đại công trường điêu khắc băng pha lê khổng lồ hòa quyện kiến trúc Baroque–Byzantine Trung–Nga.",
      overviewEn: "Where Russian–Chinese Art Nouveau streets, onion-domed cathedrals, and the frozen Songhua River stage the world's largest illuminated ice city.",
      passportNoteVi: "Pin điện thoại sụt tắt nguồn ngay ở mức -20°C; luôn dán miếng giữ nhiệt sau lưng điện thoại, đi đế giày chống trượt Tuyết Hương và đội mũ che tai.",
      passportNoteEn: "Sub-zero (-20°C) cold rapidly drains smartphones — carry adhesive pocket warmers on battery packs and non-slip winter boots.",
      areas: [
        {
          id: "hlj-harbin-ice",
          nameVi: "Trung tâm Cáp Nhĩ Tân & Đảo Thái Dương",
          nameEn: "Harbin Central Street & Sun Island",
          nameZh: "中央大街·圣索菲亚·冰雪大世界",
          transitVi: "Metro Cáp Nhĩ Tân Tuyến 2 chạy ngầm dưới đáy sông Tùng Hoa đưa thẳng từ Trung tâm tới cửa Thế giới Băng Tuyết (冰雪大世界站) trong vài phút!",
          transitEn: "Harbin Metro Line 2 tunnels beneath the Songhua River straight to Ice & Snow World Station and Sun Island.",
          spots: [
            {
              id: "hlj-sophia-ice",
              rating: "5A Sun Island & Iconic Landmark",
              nameVi: "Nhà thờ Thánh Sophia, Phố Trung Dương & Thế giới Băng Tuyết",
              nameEn: "St. Sophia Cathedral, Zhongyang Street & Ice & Snow World",
              nameZh: "圣索菲亚教堂·冰雪大世界",
              img: "assets/images/provinces/heilongjiang-saint-sophia.jpg",
              expVi: "Ăn kem bơ Mã Điệt Nhĩ giữa trời tuyết trên mặt đá lát bánh mì 100 năm của Phố đi bộ Trung Dương rồi qua đảo Đảo Thái Dương ngắm lâu đài băng thắp sáng từ 16:00.",
              expEn: "Enjoy a classic cream popsicle outdoors along century-old cobblestone Central Street, visit brick St. Sophia Cathedral, and enter glowing Ice & Snow World by 16:00.",
              foodVi: "Thịt heo sốt chua ngọt Quách Bao Nhục (锅包肉), Xúc xích đỏ kiểu Nga & Lẩu nồi gang Thiết Oa Đốn.",
              foodEn: "Crispy Sweet-and-Sour Guobaorou Pork, Harbin Red Sausage & Cast-iron Pot Stew (Tieguodun).",
              bookingVi: "Công viên Thế giới Băng Tuyết bật đèn rực rỡ nhất vào ~16:00 mùa đông — mang đồ giữ ấm 3 lớp.",
              bookingEn: "Ice & Snow World illuminations ignite around 16:00 in winter; wear three thermal layers."
            }
          ]
        }
      ]
    },

    {
      id: "dest-anhui",
      provinceId: "prov-anhui",
      tierBadgeVi: "Bích họa Thiên nhiên · Hoàng Sơn",
      tierBadgeEn: "Natural Ink Scroll · Huangshan",
      nameVi: "An Huy (Hoàng Sơn & Làng Cổ Huy Châu)",
      nameEn: "Anhui (Mt. Huangshan & Huizhou Villages)",
      nameZh: "安徽·黄山·宏村西递",
      heroImg: "assets/images/provinces/anhui-huangshan-cloudsea.jpg",
      bestSeasonVi: "Tháng 4 – 5 & Tháng 9 – 11 (Săn bình minh biển mây rực vàng & mùa thu lá đỏ Tháp Xuyên)",
      bestSeasonEn: "Apr – May & Sep – Nov (Golden sunrise cloud sea & crimson autumn foliage at Tachuan)",
      gatewayVi: "Ga Hoàng Sơn Bắc (黄山北站) là đầu mối cao tốc siêu tiện lợi: ~1,5h từ Hàng Châu Đông, ~2,5h từ Thượng Hải Hồng Kiều.",
      gatewayEn: "Huangshan North HSR Station links Hangzhou (~1.5 hrs) and Shanghai (~2.5 hrs) seamlessly.",
      overviewVi: "'Ngũ Nhạc quy lai bất khán sơn, Hoàng Sơn quy lai bất khán nhạc' — 72 đỉnh hoa cương, thông Nghênh Khách, biển mây vàng bình minh cùng làng cổ Thủy mặc Hoành Thôn – Tây Đệ.",
      overviewEn: "Dramatic granite needles rising from shifting seas of clouds beneath gnarled cliff pines, framed by white-walled, black-tiled Huizhou scholar villages at the foot of the range.",
      passportNoteVi: "Để ngắm bình minh biển mây chuẩn như tranh, cần đặt phòng ngủ 1 đêm trên đỉnh Hoàng Sơn (gần Quang Minh Đỉnh / Thủy Tinh Phong) thay vì đi về trong ngày.",
      passportNoteEn: "Book 1 night atop the mountain ridge near Bright Summit or Lion Peak to witness golden sunrise over the sea of clouds before day visitors ascend.",
      areas: [
        {
          id: "ah-huangshan-area",
          nameVi: "Đỉnh Hoàng Sơn & Làng cổ Hoành Thôn – Tây Đệ",
          nameEn: "Huangshan Cloud-Sea Summit & Hongcun–Xidi",
          nameZh: "黄山风景区·宏村·西递",
          transitVi: "Xe buýt trung chuyển khu vực từ Ga Hoàng Sơn Bắc tới cổng Nam Thang Khẩu (~50 phút) hoặc thẳng làng cổ Hoành Thôn.",
          transitEn: "Dedicated scenic shuttles run directly from Huangshan North HSR Station to Tangkou Transfer Center and Hongcun.",
          spots: [
            {
              id: "ah-huangshan-peak",
              rating: "5A · UNESCO 1990",
              nameVi: "Hoàng Sơn Vân Hải (Bình minh Quang Minh Đỉnh) & Đại Hẻm Núi Tây Hải",
              nameEn: "Huangshan Sea of Clouds & West Sea Grand Canyon",
              nameZh: "黄山云海日出与西海大峡谷",
              img: "assets/images/provinces/anhui-huangshan-cloudsea.jpg",
              expVi: "Lên núi bằng cáp treo Vân Cốc (Hậu Sơn) ít dốc hơn, ngủ lại khu Bắc Hải / Quang Minh Đỉnh săn bình minh rực vàng trên biển mây trắng, và đi xuống qua Tây Hải Đại Hẻm Núi – Nghênh Khách Tùng.",
              expEn: "Ascend via Yungu Cableway, watch dawn gold spill across white cloud oceans from Bright Summit, traverse West Sea Grand Canyon boardwalks, and salute the Welcoming Guest Pine.",
              foodVi: "Cá quyết lên men Huy Châu (臭鳜鱼), Đậu phụ lông chiên vàng Hoành Thôn (毛豆腐) & Trà xanh Hoàng Sơn Mao Phong.",
              foodEn: "Huizhou Braised Fermented Mandarin Fish, Crispy Hairy Tofu & Huangshan Maofeng Tea.",
              bookingVi: "Theo dõi dự báo thời tiết biển mây Hoàng Sơn sau những cơn mưa nhẹ chuyển nắng (xác suất biển mây đạt đỉnh).",
              bookingEn: "Cloud-sea probability peaks on clear mornings immediately following brief mountain rain."
            },
            {
              id: "ah-hongcun-xidi",
              rating: "5A · UNESCO 2000",
              nameVi: "Làng cổ Hoành Thôn (Nguyệt Chiểu) & Tây Đệ",
              nameEn: "Ancient Huizhou Villages of Hongcun & Xidi",
              nameZh: "宏村月沼与西递古村落",
              img: "assets/images/provinces/anhui-hongcun-moonpond.jpg",
              expVi: "Ngắm phản chiếu bức tường Mã Đầu (đầu ngựa) kiến trúc Huy phái in trên mặt hồ Nguyệt Chiểu hình bán nguyệt lúc sáng sớm tinh sương.",
              expEn: "Sketch or photograph pristine horse-head gable walls mirrored across Hongcun's crescent Moon Pond in still early morning light.",
              foodVi: "Bánh nướng vừng nhỏ Hoàng Sơn (黄山烧饼) nhân thịt mặn ngọt giòn rụm.",
              foodEn: "Flaky sesame-crusted Huangshan Shaobing stuffed with preserved mustard greens.",
              bookingVi: "Chỉ cách chân núi Hoàng Sơn 40 phút xe; rất tiện nghỉ đêm chân núi sau khi xuống cáp treo.",
              bookingEn: "Located 40 minutes from Tangkou South Gate, making an ideal tranquil post-hike overnight stay."
            }
          ]
        }
      ]
    }
  ];

  const corridors = [
    {
      id: "route-imperial-modern",
      nameVi: "1. Tuyến Kinh điển Lần đầu: Bắc Kinh – Thượng Hải – Hàng Châu (– Hoàng Sơn)",
      nameEn: "1. Classic First-Time Corridor: Beijing – Shanghai – Hangzhou (– Huangshan)",
      durationVi: "8–12 Ngày · Trục Cao tốc Kinh–Hỗ",
      durationEn: "8–12 Days · Jing–Hu HSR Trunk",
      stopsZh: "北京南 → 上海虹桥 → 杭州东 → 黄山北",
      highlightsVi: "Cố Cung & Trường Thành Bắc Kinh → Cao tốc Fuxing 350 km/h (4,5h) → Bến Thượng Hải → Tây Hồ Hàng Châu → Săn biển mây Hoàng Sơn & Làng cổ Hoành Thôn.",
      highlightsEn: "Beijing Imperial Axis → 350 km/h Fuxing HSR (4.5 hrs) → Shanghai Bund → Hangzhou West Lake → Huangshan Golden Sunrise & Hongcun."
    },
    {
      id: "route-southwest-spice",
      nameVi: "2. Tuyến Đô thị 3D & Ba–Thục – Tam Tần: Trùng Khánh – Thành Đô – Tây An",
      nameEn: "2. Southwest 3D & Ancient Axis: Chongqing – Chengdu – Xi'an",
      durationVi: "8–10 Ngày · Cao tốc Thành–Du & Tây–Thành",
      durationEn: "8–10 Days · Cheng–Yu & Xi–Cheng HSR",
      stopsZh: "重庆 → 成都东 → 九寨沟 / 乐山 → 西安北",
      highlightsVi: "Hồng Nhai Động 8D → Tàu cao tốc 1h sang Thành Đô (Gấu trúc, Đô Giang Yển, Cửu Trại Câu) → Cao tốc xuyên Tần Lĩnh (3,5h) tới Binh Mã Dũng Tây An.",
      highlightsEn: "Chongqing's neon cliffs → 1-hr HSR to Chengdu & Jiuzhaigou → Cross-Qinling HSR to Xi'an Terracotta Warriors."
    },
    {
      id: "route-hunan-guangxi",
      nameVi: "3. Tuyến Sơn thủy Láng giềng: Nam Ninh – Quế Lâm – Phượng Hoàng – Trương Gia Giới",
      nameEn: "3. Southern Karst & Border Corridor: Nanning – Guilin – Fenghuang – Zhangjiajie",
      durationVi: "7–10 Ngày · Cực thuận tiện đi đường bộ/tàu từ Việt Nam",
      durationEn: "7–10 Days · Ideal Overland & HSR Link from Vietnam",
      stopsZh: "友谊关/南宁 → 桂林/阳朔 → 凤凰古城 → 张家界",
      highlightsVi: "Qua cửa khẩu Hữu Nghị Quan / bay Nam Ninh → Ly Giang 20 Tệ & Dương Sóc → Phượng Hoàng Cổ Trấn → Thang máy Bách Long giữa trụ đá Avatar Trương Gia Giới.",
      highlightsEn: "Cross overland via Nanning → Guilin Li River 20-RMB karst → Lantern-lit Fenghuang → Wulingyuan sandstone spires."
    },
    {
      id: "route-yunnan-snow",
      nameVi: "4. Tuyến Cao nguyên Tuyết Sơn: Côn Minh – Đại Lý – Lệ Giang – Shangri-La",
      nameEn: "4. Alpine Heritage Rail Trilogy: Kunming – Dali – Lijiang – Shangri-La",
      durationVi: "7–9 Ngày · Đường sắt Cao tốc Vân Nam & Tuyến Lệ–Hương",
      durationEn: "7–9 Days · Kunming–Lijiang–Shangri-La Rail Link",
      stopsZh: "河口/昆明 → 大理洱海 → 丽江玉龙雪山 → 香格里拉",
      highlightsVi: "Kết nối dễ dàng từ Lào Cai–Hà Khẩu → Thạch Lâm Côn Minh → Đạp xe hồ Nhĩ Hải Đại Lý → Cổ trấn Lệ Giang & Ngọc Long Tuyết Sơn → Tu viện Tùng Tán Lâm.",
      highlightsEn: "Seamless rail connection linking Shilin Stone Forest, Erhai cycling, Lijiang cobblestones, and Tibetan Shangri-La."
    },
    {
      id: "route-harbin-ice",
      nameVi: "5. Tuyến Phương Bắc Băng Tuyết: Bắc Kinh – Thẩm Dương – Cáp Nhĩ Tân",
      nameEn: "5. Winter & Manchu Heritage Trunk: Beijing – Shenyang – Harbin",
      durationVi: "5–7 Ngày · Cao tốc Kinh–Cáp (Vượt lạnh dưới 0°C)",
      durationEn: "5–7 Days · Beijing–Harbin High-Speed Express",
      stopsZh: "北京朝阳 → 沈阳故宫 → 哈尔滨冰雪大世界",
      highlightsVi: "Từ Bắc Kinh Triều Dương chỉ ~4,5–5 tiếng tàu cao tốc thẳng tới 'Moscow phương Đông' chiêm ngưỡng Nhà thờ Thánh Sophia & Công trường Băng Tuyết khổng lồ.",
      highlightsEn: "High-speed winter express from Beijing Chaoyang to Shenyang Imperial Palace and Harbin's glowing Ice & Snow World."
    }
  ];

  return {
    hubs,
    corridors
  };
})();
