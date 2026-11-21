(function () {
  'use strict';

  var MUSEUM_V3 = [
    {
      id: 'goujian-sword',
      category: 'bronze',
      titleVi: 'Việt Vương Câu Tiễn Kiếm',
      titleZh: '越王勾践剑',
      titleEn: 'Sword of Goujian',
      era: 'Cuối Xuân Thu (thế kỷ V TCN)',
      material: 'Hợp kim đồng – thiếc khảm lam ngọc & thủy tinh',
      dimensions: 'Dài 55,7 cm; rộng bản 4,6 cm; nặng 875 g',
      museum: 'Bảo tàng Tỉnh Hồ Bắc (Vũ Hán)',
      summaryVi: 'Khai quật năm 1965 tại mộ số 1 Vọng Sơn (Giang Lăng, Hồ Bắc). Sau hơn 2.400 năm nằm trong môi trường ẩm ướt, lưỡi kiếm vẫn sắc bén không gỉ sét nhờ kỹ nghệ đúc hợp kim đồng–thiếc phân vùng (sống kiếm mềm dẻo, lưỡi kiếm cứng) và lớp hoa văn hình thoi tối màu giàu lưu huỳnh chống oxy hóa.',
      summaryEn: 'Unearthed in 1965 from Wangshan Tomb 1 (Hubei). After over 2,400 years underground, the blade remained remarkably sharp and tarnish-free thanks to zoned bronze–tin alloying and dark rhomboid sulfur-rich surface treatment.',
      hotspots: [
        { id: 'gj-h1', titleVi: 'Tám chữ Điểu Triện khảm vàng', titleEn: 'Eight Bird-Seal Gold Inlaid Characters', descVi: 'Hai hàng chữ Điểu Triện trên thân kiếm đọc là "Việt Vương Cưu Thiển (Câu Tiễn) tự tác dụng kiếm".', descEn: 'Two columns of inlaid Bird-Seal script read: "King Goujian of Yue made this sword for his personal use."' },
        { id: 'gj-h2', titleVi: 'Hoa văn quả trám chống ăn mòn', titleEn: 'Corrosion-Resistant Rhomboid Pattern', descVi: 'Mạng lưới hình thoi đen lặp đều trên lưỡi kiếm tạo lớp bảo vệ hóa học và giá trị thẩm mỹ đỉnh cao thời Xuân Thu.', descEn: 'Repeating dark diamond motifs provide both chemical resistance and Spring–Autumn visual precision.' },
        { id: 'gj-h3', titleVi: 'Chuôi kiếm 11 vòng đồng tâm rỗng', titleEn: 'Eleven Concentric Hollow Rings at Pommel', descVi: 'Đầu chuôi kiếm đúc 11 vòng tròn đồng tâm cách nhau chỉ khoảng 0,2 mm — kỳ tích kỹ nghệ đúc khuôn thời cổ đại.', descEn: 'Pommel cast with 11 concentric rings spaced roughly 0.2 mm apart, showcasing extraordinary bronze-casting mastery.' }
      ]
    },
    {
      id: 'sanxingdui-bronze-tree',
      category: 'bronze',
      titleVi: 'Thanh Đồng Thần Thụ Tam Tinh Đôi (Cây Thần Đồng số 1)',
      titleZh: '三星堆青铜神树（一号神树）',
      titleEn: 'Sanxingdui Bronze Sacred Tree No. 1',
      era: 'Cuối thời Thương (khoảng thế kỷ XII TCN)',
      material: 'Đồng thau đúc ghép nhiều phần',
      dimensions: 'Cao phục dựng 396 cm',
      museum: 'Bảo tàng Tam Tinh Đôi (Quảng Hán, Tứ Xuyên)',
      summaryVi: 'Khai quật năm 1986 tại hố tế tự số 2 Tam Tinh Đôi. Là cổ vật đồng thau đơn thể cao nhất thời cổ đại Trung Quốc từng được tìm thấy, gồm ba tầng cành với chín chim mặt trời đậu trên nhánh và một con rồng trườn dọc thân cây, phản ánh huyền thoại "Phù Tang – Thập Nhật" của văn minh Cổ Thục.',
      summaryEn: 'Excavated in 1986 from Sacrificial Pit 2 at Sanxingdui. Standing 3.96 m tall, it is ancient China\'s tallest single bronze sculpture, featuring three tiers of branches perched with nine sunbirds and a descending dragon linked to the Fusang myth.',
      hotspots: [
        { id: 'sxd-h1', titleVi: 'Chín chim mặt trời đậu trên ba tầng cành', titleEn: 'Nine Sunbirds on Three Tiers', descVi: 'Tượng trưng cho truyền thuyết mười mặt trời trong "Sơn Hải Kinh" (chín mặt trời nghỉ trên cây Phù Tang, một mặt trời bay trên bầu trời).', descEn: 'Evokes the "Classic of Mountains and Seas" myth of ten suns alternating atop the cosmic Fusang tree.' },
        { id: 'sxd-h2', titleVi: 'Rồng đồng trườn dọc thân cây', titleEn: 'Bronze Dragon Descending the Trunk', descVi: 'Con rồng có sừng và chân trước bám vào thân cây nối liền cõi trời với đế ba chân tượng trưng núi thiêng.', descEn: 'Horned dragon winds along the trunk, mediating between the celestial canopy and the mountain-shaped base.' },
        { id: 'sxd-h3', titleVi: 'Kỹ thuật đúc ghép mô-đun Cổ Thục', titleEn: 'Ancient Shu Modular Casting', descVi: 'Các cành, quả, chim và thân cây được đúc riêng bằng khuôn gốm rồi hàn nối bằng đồng nóng chảy đạt độ chính xác cao.', descEn: 'Branches, fruits, birds, and trunk were cast separately and joined via bronze-welding techniques.' }
      ]
    },
    {
      id: 'fuhao-owl-zun',
      category: 'bronze',
      titleVi: 'Phụ Hảo Kiêu Tôn (Bình Rượu Đồng Hình Chim Cú)',
      titleZh: '妇好鸮尊',
      titleEn: 'Fu Hao Owl-Shaped Zun',
      era: 'Vãn Thương (khoảng 1200 TCN)',
      material: 'Thanh đồng',
      dimensions: 'Cao 45,9 cm; nặng 16,7 kg',
      museum: 'Bảo tàng Hà Nam (Trịnh Châu) & Bảo tàng Quốc gia Trung Quốc (1 cặp)',
      summaryVi: 'Khai quật năm 1976 tại mộ nguyên vẹn của Phụ Hảo — vương hậu kiêm nữ tướng lừng danh thời Thương Vương Vũ Đinh tại Ân Khư (An Dương). Bình rượu tạo dáng chim cú (loài chim chiến trận được người Thương sùng bái) đứng vững trên hai chân và đuôi làm điểm tựa tam giác, phủ kín hoa văn Thao Thiết, vân lôi và rồng cuộn.',
      summaryEn: 'Unearthed in 1976 from the intact tomb of Lady Fu Hao, consort and general of King Wu Ding at Yinxu. Cast as an owl—a Shang emblem of martial prowess—supported on two legs and its tail, covered in taotie and cloud-thunder reliefs.',
      hotspots: [
        { id: 'fh-h1', titleVi: 'Dáng chim cú đứng thế tam giác vững chãi', titleEn: 'Triangular Stance of the War Owl', descVi: 'Hai chân to khỏe cùng đuôi rộng rủ xuống tạo thế đứng kiềng ba chân ổn định cho thân bình nặng gần 17 kg.', descEn: 'Sturdy legs and downward tail form a stable tripod supporting the 16.7 kg ritual vessel.' },
        { id: 'fh-h2', titleVi: 'Minh văn hai chữ "Phụ Hảo" bên trong miệng bình', titleEn: 'Inner Rim Inscription "Fu Hao"', descVi: 'Xác định trực tiếp chủ nhân ngôi mộ trùng khớp hoàn toàn với ghi chép trên Giáp Cốt Văn Ân Khư.', descEn: 'Directly identifies the tomb owner, corroborating Yinxu oracle bone records of Lady Fu Hao.' },
        { id: 'fh-h3', titleVi: 'Hoa văn "Tam tầng hoa" điển hình vãn Thương', titleEn: 'Late Shang Three-Tier Relief Decoration', descVi: 'Kết hợp nền vân lôi mảnh mịn với hình rắn cuộn trên cánh và mặt thú Thao Thiết nổi khối trên ngực.', descEn: 'Combines fine cloud-thunder backgrounds with coiled serpents on the wings and bold taotie masks.' }
      ]
    },
    {
      id: 'lianhe-fanghu',
      category: 'bronze',
      titleVi: 'Liên Hạc Phương Hồ',
      titleZh: '莲鹤方壶',
      titleEn: 'Lotus and Crane Square Hu',
      era: 'Xuân Thu (thế kỷ VII–VI TCN)',
      material: 'Thanh đồng',
      dimensions: 'Cao 117 cm; nặng 64,28 kg',
      museum: 'Bảo tàng Hà Nam & Bảo tàng Cố Cung Bắc Kinh (1 cặp)',
      summaryVi: 'Khai quật năm 1923 tại mộ quốc quân nước Trịnh (Tân Trịnh, Hà Nam). Được học giả Quách Mạt Nhược ca ngợi là biểu tượng giải phóng tinh thần thời Xuân Thu: trên nắp bình hình cánh sen nở hai tầng, một con hạc thanh thoát vươn cánh như sắp bay lên, phá vỡ hoàn toàn vẻ uy nghiêm nặng nề của lễ khí Thương–Tây Chu.',
      summaryEn: 'Unearthed in 1923 from a Duke of Zheng tomb (Xinzheng, Henan). Praised by Guo Moruo as the emblem of Spring–Autumn artistic liberation, its double-petaled lotus lid crowns a poised crane spreading its wings for flight.',
      hotspots: [
        { id: 'lh-h1', titleVi: 'Chim hạc tung cánh trên đài sen hai lớp', titleEn: 'Poised Crane Atop Double Lotus Petals', descVi: 'Cánh sen đúc rỗng tinh xảo ôm lấy chú hạc thanh mảnh tạo sức sống tươi mới hiếm có trong nghệ thuật thanh đồng.', descEn: 'Openwork lotus petals frame a slender crane symbolizing vitality breaking with solemn Zhou convention.' },
        { id: 'lh-h2', titleVi: 'Hai con rồng leo tai bình & Hai linh thú đỡ đáy', titleEn: 'Climbing Dragon Handles and Supporting Beasts', descVi: 'Thân bình phủ kín hoa văn bàn ly (rồng cuộn đan xen), đáy đặt trên hai linh thú thè lưỡi gánh sức nặng.', descEn: 'Interlaced dragon reliefs wrap the square body while two mythical beasts bear the vessel\'s weight.' },
        { id: 'lh-h3', titleVi: 'Bước ngoặt thẩm mỹ từ "Lễ khí" sang "Nghệ thuật"', titleEn: 'Transition from Ritual Awe to Humanist Art', descVi: 'Đánh dấu sự trỗi dậy của phong cách thẩm mỹ tự do, sinh động trong thời kỳ chư hầu tranh bá.', descEn: 'Marks the stylistic turn toward naturalistic elegance during the Spring and Autumn period.' }
      ]
    },
    {
      id: 'yongle-great-bell',
      category: 'bronze',
      titleVi: 'Vĩnh Lạc Đại Chung',
      titleZh: '永乐大钟',
      titleEn: 'Great Bell of Yongle',
      era: 'Minh Vĩnh Lạc (khoảng 1420)',
      material: 'Hợp kim đồng – thiếc – chì',
      dimensions: 'Cao 6,75 m; đường kính miệng 3,3 m; nặng khoảng 46,5 tấn',
      museum: 'Bảo tàng Chuông Cổ Đại Chung Tự (Bắc Kinh)',
      summaryVi: 'Được đúc nguyên khối dưới thời Minh Thành Tổ Chu Đệ bằng kỹ thuật đúc khuôn đất nung khổng lồ. Toàn bộ mặt trong và mặt ngoài chuông đúc nổi hơn 230.000 chữ Hán và Phạn của hơn 100 bộ kinh Phật (gồm Kinh Hoa Nghiêm, Kinh Pháp Hoa, Kinh Kim Cương) bằng nét chữ Khải thư tinh xảo tương truyền của Thẩm Độ.',
      summaryEn: 'Cast in a single pour under the Ming Yongle Emperor. Both interior and exterior surfaces bear over 230,000 crisp relief Chinese and Sanskrit characters of Buddhist scriptures, renowned for its resonant acoustic endurance.',
      hotspots: [
        { id: 'yl-h1', titleVi: 'Hơn 230.000 chữ kinh Phật đúc nổi nguyên khối', titleEn: 'Over 230,000 Cast-in-Relief Scriptural Characters', descVi: 'Chữ viết sắc nét không vết nối khuôn lỗi, được xem là kỳ tích luyện kim và thư pháp thời Minh sơ.', descEn: 'Razor-sharp calligraphy cast directly into bronze without seam defects represents an early Ming metallurgical feat.' },
        { id: 'yl-h2', titleVi: 'Âm học cộng hưởng vang xa hàng chục km', titleEn: 'Resonant Acoustic Engineering', descVi: 'Tỷ lệ độ dày thành chuông và hợp kim đồng–thiếc được tính toán chuẩn xác, cho âm trầm ngân vang kéo dài hơn 2 phút.', descEn: 'Graduated wall thickness and bronze–tin alloy ratios yield a deep harmonic resonance lasting over two minutes.' },
        { id: 'yl-h3', titleVi: 'Quai chuông treo 46,5 tấn bằng một chốt đồng', titleEn: 'Single-Pin Suspension of 46.5 Tons', descVi: 'Khả năng chịu tải đáng kinh ngạc của móc treo Bồ Lao đã giữ nguyên khối chuông an toàn suốt hơn 600 năm.', descEn: 'A single bronze pin and Pulao dragon loop have suspended the 46.5-ton bell safely for six centuries.' }
      ]
    },
    {
      id: 'terracotta-general',
      category: 'sculpture',
      titleVi: 'Tướng Quân Binh Mã Dũng (Cao cấp Quân Lại Dũng)',
      titleZh: '秦始皇陵高级军吏俑（将军俑）',
      titleEn: 'Terracotta Armoured General',
      era: 'Nhà Tần (khoảng 221–210 TCN)',
      material: 'Đất nung tô màu (dấu vết sơn sắc tố còn lưu)',
      dimensions: 'Cao 196 cm',
      museum: 'Bảo tàng Di chỉ Lăng Tần Thủy Hoàng (Tây An, Thiểm Tây)',
      summaryVi: 'Một trong chưa đầy mười pho tượng Tướng quân cấp cao nhất được tìm thấy giữa hơn 8.000 chiến binh đất nung bảo vệ Lăng Tần Thủy Hoàng. Khác với binh lính thường, tượng đội mũ Hạt Quan (mũ đuôi chim trĩ), mặc giáp vảy cá hai lớp thắt tám nơ hoa và chắp tay đặt trên chuôi kiếm đầy phong thái điềm tĩnh uy nghiêm.',
      summaryEn: 'One of fewer than ten highest-ranking general figures among the 8,000+ Terracotta Warriors guarding Qin Shi Huang\'s mausoleum, distinguished by a pheasant-tail headdress, double-layered scale armor with ornamental knots, and composed posture.',
      hotspots: [
        { id: 'tg-h1', titleVi: 'Mũ Hạt Quan hai đuôi chim & Gương mặt cá thể hóa', titleEn: 'Pheasant-Tail Cap and Individualized Portrait', descVi: 'Mũ Hạt Quan là dấu hiệu nhận diện tướng lĩnh cấp cao nhất trong quân đội Tần; râu mép và nếp trán được nặn tay riêng biệt.', descEn: 'The double-tailed Hequan cap denotes supreme military rank, paired with hand-modeled facial features.' },
        { id: 'tg-h2', titleVi: 'Áo giáp vảy cá kết tám nơ lụa sắc màu', titleEn: 'Scale Armor with Eight Ceremonial Knots', descVi: 'Từng mảnh giáp nhỏ mô phỏng giáp da sơn mài thời Tần, nguyên bản từng được tô màu tím Hán, đỏ chu sa và xanh lục.', descEn: 'Fine overlapping plates replicate lacquered leather armor originally painted in Han purple, cinnabar, and green.' },
        { id: 'tg-h3', titleVi: 'Thân rỗng – Chân đặc theo quy trình tiêu chuẩn hóa Tần', titleEn: 'Hollow Torso, Solid Legs Modular Production', descVi: 'Cơ thể đúc ghép theo mô-đun nhưng có khắc tên thợ chịu trách nhiệm chất lượng ("Vật lặc công danh").', descEn: 'Modular assembly with solid lower limbs for stability and stamped artisan names enforcing Qin quality control.' }
      ]
    },
    {
      id: 'changxin-palace-lamp',
      category: 'bronze',
      titleVi: 'Đèn Cung Trường Tín (Trường Tín Cung Đăng)',
      titleZh: '长信宫灯',
      titleEn: 'Changxin Palace Bronze Lamp',
      era: 'Tây Hán (thế kỷ II TCN)',
      material: 'Đồng mạ vàng toàn thân',
      dimensions: 'Cao 48 cm; nặng 15,85 kg',
      museum: 'Bảo tàng Hà Bắc (Thạch Gia Trang)',
      summaryVi: 'Khai quật năm 1968 từ mộ Đậu Oản (vợ Trung Sơn Tĩnh Vương Lưu Thắng) tại Mãn Thành, Hà Bắc. Tượng cung nữ quỳ cầm đèn được xem là "Chiếc đèn bảo vệ môi trường sớm nhất Trung Hoa": ống tay áo rỗng dẫn khói đèn vào khoang nước trong thân tượng để lọc muội than, đồng thời chao đèn xoay điều chỉnh được độ sáng và hướng chiếu.',
      summaryEn: 'Unearthed in 1968 from Princess Dou Wan\'s tomb in Mancheng, Hebei. The gilded kneeling palace maid channels smoke through her hollow sleeve into a water-filled torso chamber while rotatable shutters adjust brightness and beam direction.',
      hotspots: [
        { id: 'cx-h1', titleVi: 'Ống tay áo rỗng hút và lọc khói đèn', titleEn: 'Hollow Sleeve Smoke-Filtration Duct', descVi: 'Nhiệt khí kéo khói bấc đèn đi ngược lên tay áo vào khoang thân rỗng, giữ không gian nội cung sạch muội than.', descEn: 'Thermal draft draws soot up the hollow right sleeve into the body cavity, keeping palace air clean.' },
        { id: 'cx-h2', titleVi: 'Chao đèn trượt xoay chỉnh hướng sáng', titleEn: 'Adjustable Rotating Lamp Shutters', descVi: 'Hai tấm chắn đồng uốn cong cho phép mở rộng hay thu hẹp góc chiếu sáng và chắn gió thổi tắt ngọn lửa.', descEn: 'Two curved sliding bronze panels regulate illumination angle and shield the flame from drafts.' },
        { id: 'cx-h3', titleVi: 'Sáu bộ phận tháo lắp rời dễ vệ sinh', titleEn: 'Six-Part Modular Disassembly', descVi: 'Đầu, thân, tay phải, mâm đèn, chao đèn và đế có thể tháo rời hoàn toàn để đổ tro muội; khắc chữ "Trường Tín Thượng Dục".', descEn: 'Head, body, sleeve, pan, shutters, and base detach completely for cleaning; inscribed "Changxin Palace."' }
      ]
    },
    {
      id: 'mawangdui-silk-gown',
      category: 'textile',
      titleVi: 'Áo Lụa Tố Sa Mã Vương Đôi (Tố Sa Thiền Y)',
      titleZh: '马王堆素纱单衣',
      titleEn: 'Mawangdui Plain Gauze Silk Gown',
      era: 'Tây Hán (khoảng 168 TCN)',
      material: 'Tơ tằm dệt sa siêu mảnh',
      dimensions: 'Dài 128 cm; sải tay 190 cm; nặng 49 g',
      museum: 'Bảo tàng Hồ Nam (Trường Sa)',
      summaryVi: 'Khai quật năm 1972 từ mộ số 1 Mã Vương Đôi (mộ Tân Truy phu nhân, vợ Thừa tướng nước Trường Sa). Chiếc áo lụa dài 1,28 m nhưng chỉ nặng đúng 49 gram (trừ phần viền cổ và tay áo, phần vải sa chỉ nặng khoảng 25 gram), gấp gọn lọt trong một hộp diêm — minh chứng đỉnh cao kỹ nghệ nuôi tằm kéo tơ siêu mảnh thời Tây Hán.',
      summaryEn: 'Excavated in 1972 from Lady Dai\'s Mawangdui Tomb 1 (168 BCE). Measuring 128 cm long with a 190 cm sleeve span, this translucent plain-weave silk robe weighs just 49 grams, demonstrating extraordinary Western Han sericulture.',
      hotspots: [
        { id: 'mwd-h1', titleVi: 'Trọng lượng siêu nhẹ 49 gram ("Bạc như thiền dực")', titleEn: '49-Gram Weight ("Thin as Cicada Wings")', descVi: 'Mỗi sợi tơ chỉ mảnh khoảng 10,2–11,3 denier — mảnh hơn nhiều so với tơ tằm công nghiệp thông thường hiện đại.', descEn: 'Silk filaments measure roughly 10–11 denier, finer than standard modern commercial silk yarn.' },
        { id: 'mwd-h2', titleVi: 'Cấu trúc dệt thoáng khí "Tố Sa"', titleEn: 'Open-Mesh Plain Gauze Weave', descVi: 'Mật độ sợi thưa đều tạo độ trong suốt mờ ảo như khói sương, được mặc khoác ngoài áo gấm thêu hoa để làm dịu sắc rực rỡ.', descEn: 'Evenly spaced sheer mesh worn over vivid brocade robes to create a misty, layered elegance.' },
        { id: 'mwd-h3', titleVi: 'Điều kiện bảo quản yếm khí 2.100 năm', titleEn: '2,100-Year Anaerobic Preservation', descVi: 'Nhờ lớp đất sét trắng và than củi bọc kín quan tài, sợi protein tơ tằm vẫn nguyên vẹn sau hơn hai thiên niên kỷ.', descEn: 'White kaolin clay and charcoal sealing kept the delicate silk fibers intact for over two millennia.' }
      ]
    },
    {
      id: 'hejiacun-agate-cup',
      category: 'jade-stone',
      titleVi: 'Chén Mã Não Khảm Đầu Thú Vàng Hà Gia Thôn',
      titleZh: '镶金兽首玛瑙杯',
      titleEn: 'Hejiacun Gold-Mounted Agate Rhyton',
      era: 'Thịnh Đường (thế kỷ VIII)',
      material: 'Mã não vân đỏ–cam & vàng ròng',
      dimensions: 'Cao 6,5 cm; dài 15,6 cm; đường kính miệng 5,9 cm',
      museum: 'Bảo tàng Lịch sử Thiểm Tây (Tây An)',
      summaryVi: 'Khai quật năm 1970 trong kho báu ngầm tại thôn Hà Gia (Tây An). Là chiếc chén rượu kiểu Rhyton (sừng uống rượu) bằng đá mã não lớn nhất thời Đường từng tìm thấy, kết hợp dáng chén Ba Tư – Tây Vực với kỹ nghệ chạm ngọc tinh xảo Trường An, được xếp vào nhóm cổ vật cấp quốc bảo cấm xuất cảnh triển lãm.',
      summaryEn: 'Unearthed in 1970 from the Hejiacun hoard in Xi\'an. China\'s finest Tang-era agate rhyton combines Persian/Sogdian horn-cup form with Chang\'an lapidary mastery, designated a national treasure barred from overseas exhibition.',
      hotspots: [
        { id: 'hjc-h1', titleVi: 'Tận dụng vân đá tự nhiên tạo hình đầu linh dương', titleEn: 'Natural Banded Agate Sculpting', descVi: 'Nghệ nhân lựa chọn khối mã não quý nhiều lớp màu đỏ cam–trắng ngà để điêu khắc đôi mắt, sừng và tai linh dương đầy sống động.', descEn: 'Carver aligned natural red-orange and ivory agate striations to sculpt vivid eyes, horns, and ears.' },
        { id: 'hjc-h2', titleVi: 'Miệng rót bịt vàng tháo mở được ở mũi thú', titleEn: 'Removable Gold Pouring Stopper', descVi: 'Nút vàng tinh xảo gắn ngay đầu mõm thú giúp rượu chảy ra thành dòng mảnh khi nghiêng chén theo phong tục tiệc Tây Vực.', descEn: 'Detachable gold cap at the muzzle controls a thin stream of wine in the Central Asian rhyton tradition.' },
        { id: 'hjc-h3', titleVi: 'Biểu tượng giao lưu Con đường Tơ lụa Trường An', titleEn: 'Emblem of Cosmopolitan Tang Chang\'an', descVi: 'Khẳng định sự kết hợp nghệ thuật Ba Tư Sassanid, Túc Đặc và Thịnh Đường trong tầng lớp quý tộc kinh đô.', descEn: 'Testifies to Sasanian, Sogdian, and High Tang artistic synthesis among Chang\'an\'s elite.' }
      ]
    },
    {
      id: 'tang-sancai-camel',
      category: 'ceramic',
      titleVi: 'Đường Tam Thái Lạc Đà Chở Ban Nhạc Tây Vực',
      titleZh: '唐三彩骆驼载乐俑',
      titleEn: 'Tang Sancai Camel Carrying Silk Road Musicians',
      era: 'Thịnh Đường (thế kỷ VIII)',
      material: 'Gốm men chì đa sắc nung nhiệt độ thấp (Đường Tam Thái)',
      dimensions: 'Cao 58,4 cm; dài 43,4 cm',
      museum: 'Bảo tàng Quốc gia Trung Quốc (Bắc Kinh)',
      summaryVi: 'Khai quật năm 1959 tại Tây An. Trên lưng con lạc đà hai bướu phủ men vàng hổ phách – xanh lục – trắng ngà là một sàn biểu diễn lưu động với bảy nhạc công người Hồ (Trung Á) chơi đàn tỳ bà, sáo, không hầu và một nữ vũ công người Hán đang ca múa ở trung tâm — bức ảnh 3D sống động về tinh thần cởi mở của Thịnh Đường.',
      summaryEn: 'Excavated in 1959 in Xi\'an. Aboard a glazed Bactrian camel rides a mobile stage with seven Central Asian musicians playing pipa, flute, and harp surrounding a central Han dancer—a vivid 3D snapshot of Tang cosmopolitanism.',
      hotspots: [
        { id: 'tsc-h1', titleVi: 'Nhạc công Tây Vực & Nữ ca sĩ Hán tộc', titleEn: 'Central Asian Band and Han Dancer', descVi: 'Gương mặt râu rậm mũi cao của nhạc công người Hồ hòa cùng tà áo Đường cho thấy sự dung hợp âm nhạc Hồ–Hán.', descEn: 'Bearded Sogdian musicians accompanying a Tang singer capture Silk Road musical fusion.' },
        { id: 'tsc-h2', titleVi: 'Kỹ thuật men chảy tự nhiên Đường Tam Thái', titleEn: 'Fluid Three-Color Lead Glaze', descVi: 'Các oxit đồng (xanh lục), sắt (vàng nâu) và coban (xanh lam) chảy kết hợp trong lò 800°C tạo sắc màu loang rực rỡ.', descEn: 'Copper, iron, and cobalt glazes flow organically at 800°C into luminous polychrome streaks.' },
        { id: 'tsc-h3', titleVi: 'Lạc đà hai bướu ngẩng cổ hí vang', titleEn: 'Head-Raised Bactrian Camel', descVi: 'Đôi chân trụ khỏe và cổ vươn cao truyền tải sức sống và nhịp điệu của đoàn thương buôn qua sa mạc.', descEn: 'Muscular stance and lifted neck convey the rhythmic energy of desert caravans.' }
      ]
    },
    {
      id: 'jian-yao-yaobian-tenmoku',
      category: 'ceramic',
      titleVi: 'Trản Kiến Diêu Diệu Biến Thiên Mục',
      titleZh: '建窑曜变天目茶碗',
      titleEn: 'Jian Ware Yohen Tenmoku Tea Bowl',
      era: 'Nam Tống (thế kỷ XII–XIII)',
      material: 'Gốm đất giàu sắt phủ men đen kết tinh (Kiến Diêu, Phúc Kiến)',
      dimensions: 'Cao khoảng 6,8 cm; đường kính miệng 12,2 cm',
      museum: 'Bảo tàng Nghệ thuật Seikado Bunko (Tokyo — Quốc bảo Nhật Bản)',
      summaryVi: 'Sản xuất tại lò Kiến Diêu (Kiến Dương, Phúc Kiến) phục vụ văn hóa "Đấu trà" (đánh trà bọt trắng) thời Tống. Trên thế giới hiện chỉ còn 3 chiếc nguyên vẹn (đều lưu giữ tại Nhật Bản): lớp men đen giàu oxit sắt nung nhiệt độ cao tạo nên các cụm tinh thể tròn có quầng ánh xanh lam–tím lấp lánh như tinh vân vũ trụ dưới ánh sáng nghiêng.',
      summaryEn: 'Fired at Jian kilns (Fujian) for Song whisked-tea contests. Only three intact bowls survive worldwide (all in Japan): iron-rich black glaze forms crystalline spots ringed with iridescent blue-violet halos resembling a starry cosmos.',
      hotspots: [
        { id: 'jy-h1', titleVi: 'Hiệu ứng kết tinh "Diệu Biến" không thể sao chép hoàn toàn', titleEn: 'Iridescent Yohen Crystalline Halos', descVi: 'Ánh sáng giao thoa trên lớp màng oxit sắt siêu mỏng tạo vòng hào quang xanh tím thay đổi theo góc nhìn.', descEn: 'Thin-film optical interference on iron-oxide crystals yields shifting blue-violet halos.' },
        { id: 'jy-h2', titleVi: 'Cốt đất đen dày giữ nhiệt cho nghệ thuật Điểm Trà Tống', titleEn: 'Thick Iron-Rich Dark Clay Body', descVi: 'Sắc men đen sâu làm nổi bật lớp bọt trà trắng mịn khi đánh trà bằng chổi tre thời Tống.', descEn: 'Deep black glaze heightened the visual contrast of white whisked tea foam in Song tea contests.' },
        { id: 'jy-h3', titleVi: 'Đường men chảy "Thủ khẩu" dừng ngay trên chân đế', titleEn: 'Controlled Glaze Pooling Above Foot', descVi: 'Lớp men dày chảy tụ thành giọt tròn quanh chân đế để lộ cốt đất nâu sẫm ("Thiết thai").', descEn: 'Thick glaze pools cleanly above the unglazed dark "iron body" foot ring.' }
      ]
    },
    {
      id: 'longquan-celadon-vase',
      category: 'ceramic',
      titleVi: 'Bình Long Tuyền Men Ngọc Tai Phượng (Phượng Nhĩ Bình)',
      titleZh: '南宋龙泉窑粉青釉凤耳瓶',
      titleEn: 'Southern Song Longquan Celadon Phoenix-Ear Vase',
      era: 'Nam Tống (thế kỷ XII–XIII)',
      material: 'Sứ men ngọc Phấn Thanh (Lò Long Tuyền, Chiết Giang)',
      dimensions: 'Chưa có tư liệu công bố thống nhất (mẫu chuẩn cao khoảng 25–28 cm)',
      museum: 'Bảo tàng Cố Cung Bắc Kinh / Bảo tàng Cố Cung Đài Bắc / Tokyo',
      summaryVi: 'Đỉnh cao gốm men ngọc thời Nam Tống với hai màu men trứ danh Phấn Thanh (xanh ngọc bích dịu) và Mai Tử Thanh (xanh mơ chín). Dáng bình cổ dài có đôi tai tạo hình chim phượng hoàng uyển chuyển, lớp men dày nhiều tầng không rạn nứt đạt tới độ bóng mịn như ngọc Hòa Điền ("Loại ngọc phi ngọc").',
      summaryEn: 'Summit of Southern Song celadon in prized "powder-blue" (Fenqing) and plum-green glazes. Its slender mallet silhouette with phoenix-shaped handles wears thick, uncrackled jade-like glaze.',
      hotspots: [
        { id: 'lq-h1', titleVi: 'Men Phấn Thanh dày mịn như ngọc thạch', titleEn: 'Jade-Like Fenqing Celadon Glaze', descVi: 'Nung khử trong lò rồng với lớp men giàu vôi–kiềm chứa bọt khí vi mô tán xạ ánh sáng tạo vẻ ôn nhuận sâu thẳm.', descEn: 'Reduction-fired lime-alkali glaze traps microscopic bubbles that scatter light like polished jade.' },
        { id: 'lq-h2', titleVi: 'Đôi tai hình chim phượng hoàng sắc nét', titleEn: 'Sculpted Phoenix-Head Handles', descVi: 'Độ dày men được kiểm soát để vừa che phủ mượt mà vừa không làm mờ nét chạm nổi ở cổ bình.', descEn: 'Controlled glaze viscosity preserves crisp relief contours along the phoenix handles.' },
        { id: 'lq-h3', titleVi: 'Mặt hàng xuất khẩu trụ cột của Hải thương Tuyền Châu', titleEn: 'Key Maritime Silk Road Export', descVi: 'Sứ Long Tuyền từng được ưa chuộng đặc biệt tại Nhật Bản (Kinuta seiji), Đông Nam Á và cung đình Ottoman.', descEn: 'Prized across Japan (Kinuta celadon), Southeast Asia, and Middle Eastern royal collections.' }
      ]
    },
    {
      id: 'xuande-blue-white-meiping',
      category: 'ceramic',
      titleVi: 'Mai Bình Thanh Hoa Long Văn Tuyên Đức',
      titleZh: '明宣德青花海水白龙纹扁瓶 / 梅瓶',
      titleEn: 'Ming Xuande Blue-and-White Dragon Meiping Vase',
      era: 'Minh Tuyên Đức (1426–1435)',
      material: 'Sứ Cảnh Đức Trấn vẽ lam coban nhập khẩu Tô Ma Ly Thanh',
      dimensions: 'Chưa có tư liệu công bố thống nhất theo từng phiên bản (dòng Mai Bình cao khoảng 35–45 cm)',
      museum: 'Bảo tàng Cố Cung Bắc Kinh & Bảo tàng Cố Cung Đài Bắc',
      summaryVi: 'Niên hiệu Tuyên Đức được giới giám định gốm sứ tôn xưng là "thời kỳ hoàng kim của sứ Thanh Hoa" ("Khai nhất đại vị hữu chi kỳ"). Sử dụng chất màu coban nhập khẩu từ Ba Tư qua các chuyến hải hành Trịnh Hòa (Tô Ma Ly Thanh), nét vẽ rồng năm móng cuộn giữa sóng biển tạo hiệu ứng đốm sắt kết tinh lấp lánh ("Thiết tú ban") và độ loang mực đậm chất tranh thủy mặc.',
      summaryEn: 'The Xuande reign is revered as the golden age of blue-and-white porcelain. Painted with imported Persian "Sumali" cobalt brought via Zheng He\'s voyages, five-clawed dragons amidst waves display coveted crystalline "heaped-and-piled" iron spots.',
      hotspots: [
        { id: 'xd-h1', titleVi: 'Chất màu Tô Ma Ly Thanh & Hiệu ứng "Thiết Tú Ban"', titleEn: 'Imported Sumali Cobalt and Iron Spots', descVi: 'Hàm lượng sắt cao và mangan thấp trong coban Ba Tư tạo ra những chấm đen ánh kim chìm nhẹ vào lớp men khi nung.', descEn: 'High-iron imported cobalt produces shimmering dark metallic flecks prized by connoisseurs.' },
        { id: 'xd-h2', titleVi: 'Rồng năm móng uy mãnh đặc trưng thời Minh sơ', titleEn: 'Dynamic Early Ming Five-Clawed Dragon', descVi: 'Bờm dựng, mắt sắc và móng vuốt xòe rộng như bánh xe ("Phong xa trảo") biểu đạt quyền lực hoàng gia Tuyên Đức.', descEn: 'Bristling mane and pinwheel claws embody the assertive vigor of early Ming imperial ware.' },
        { id: 'xd-h3', titleVi: 'Lạc khoản niên hiệu "Đại Minh Tuyên Đức Niên Chế"', titleEn: 'Imperial Six-Character Reign Mark', descVi: 'Triều Tuyên Đức mở đầu truyền thống viết niên hiệu hoàng gia chuẩn mực trực tiếp lên gốm Ngự Diêu.', descEn: 'Established the canonical practice of inscribing imperial reign marks on Jingdezhen porcelain.' }
      ]
    },
    {
      id: 'kuaixue-shiqing-tie',
      category: 'calligraphy',
      titleVi: 'Khoái Tuyết Thời Tình Thiếp',
      titleZh: '快雪时晴帖',
      titleEn: 'Timely Clearing After Snowfall',
      era: 'Đông Tấn (thế kỷ IV — bản mô phóng tinh tuyệt thời Đường)',
      material: 'Mực trên giấy',
      dimensions: 'Cao 23 cm; rộng 14,8 cm (28 chữ)',
      museum: 'Bảo tàng Cố Cung Đài Bắc',
      summaryVi: 'Bức thư thăm hỏi bạn bè ngắn vỏn vẹn 28 chữ của Thư Thánh Vương Hy Chi sau một trận tuyết tan, được Hoàng đế Càn Long tôn làm tác phẩm đứng đầu "Tam Hy Đường" (cùng Trung Thu Thiếp và Bá Viễn Thiếp). Bút pháp Hành–Khải viên nhuận, thư thái mà nội lực tròn đầy ("Viên kính cổ đạm"), đạt độ chuẩn mực cao nhất của truyền thống thư pháp Ngụy–Tấn.',
      summaryEn: 'A 28-character personal letter by Calligraphy Sage Wang Xizhi (preserved in an exquisite Tang tracing copy), crowned by Emperor Qianlong as the foremost of his "Three Rarities." Its rounded, serene running-regular script defines Wei–Jin elegance.',
      hotspots: [
        { id: 'kx-h1', titleVi: '28 chữ Hành–Khải "Viên kính cổ đạm"', titleEn: '28 Characters of Serene Running-Regular Script', descVi: 'Nét bút ẩn phong tròn đầy, bố cục thong dong tự tại như lời trò chuyện ấm áp giữa bạn tri kỷ ngày nắng sau tuyết.', descEn: 'Concealed brush tips and poised spacing convey intimate warmth on a bright winter morning.' },
        { id: 'kx-h2', titleVi: 'Bút tích chữ "Thần" (神) & hơn 70 bài đề bạt của Càn Long', titleEn: 'Qianlong\'s "Divine" Inscription and Colophons', descVi: 'Hoàng đế Càn Long yêu quý đến mức đề chữ "Thần" cỡ lớn ngay đầu cuộn và viết hàng chục bài bình luận mỗi mùa tuyết rơi.', descEn: 'Emperor Qianlong inscribed a giant character for "Divine" and added over 70 seasonal colophons.' },
        { id: 'kx-h3', titleVi: 'Kỹ nghệ "Song câu điền mặc" thời Đường', titleEn: 'Tang Dynasty Tracing-Copy Mastery', descVi: 'Nhờ kỹ thuật đồ viền siêu mảnh rồi tô mực của các bậc thầy thời Đường, tinh thần nét bút Vương Hy Chi được bảo tồn gần như nguyên vẹn.', descEn: 'Tang double-outline ink-fill tracing faithfully preserved Wang Xizhi\'s brushwork for posterity.' }
      ]
    },
    {
      id: 'jizhi-wengao-yan-zhenqing',
      category: 'calligraphy',
      titleVi: 'Tế Điệt Văn Cảo (Bản thảo Văn Tế Cháu)',
      titleZh: '祭侄文稿',
      titleEn: 'Draft of a Requiem to My Nephew',
      era: 'Đường (năm 758)',
      material: 'Mực trên giấy ma',
      dimensions: 'Cao 28,3 cm; rộng 75,5 cm',
      museum: 'Bảo tàng Cố Cung Đài Bắc',
      summaryVi: 'Được tôn xưng là "Thiên hạ đệ nhị Hành thư" (chỉ sau "Lan Đình Tập Tự"). Năm 758, sau Loạn An Sử, đại thần Nhan Chân Khanh nén đau thương viết bản thảo văn tế người cháu Nhan Quý Minh và gia tộc bị quân phản loạn sát hại. Với những chỗ gạch xóa, viết chèn đầy xúc động không hề trau chuốt, tác phẩm chứng minh đỉnh cao thư pháp nằm ở cảm xúc chân thực và khí tiết.',
      summaryEn: 'Revered as the "Second Greatest Running Script Under Heaven" (after Orchid Pavilion). Brushed in 758 by Tang loyalist Yan Zhenqing mourning his slain nephew after the An Lushan Rebellion, its unedited cross-outs and surging ink embody raw grief and moral fervor.',
      hotspots: [
        { id: 'jz-h1', titleVi: 'Nhịp điệu cảm xúc chuyển từ kìm nén sang bùng vỡ', titleEn: 'Emotional Crescendo in Ink and Speed', descVi: 'Những dòng đầu chữ viết ngay ngắn điềm tĩnh, càng về sau nét bút càng nhanh, khô mực và phóng túng theo cơn uất nghẹn.', descEn: 'Calm opening columns accelerate into dry, turbulent cursive strokes as grief overwhelms restraint.' },
        { id: 'jz-h2', titleVi: 'Các vết gạch xóa tự nhiên ("Đồ mạt") trở thành mỹ học', titleEn: 'Spontaneous Cross-Outs as Aesthetic Power', descVi: 'Không viết lại bản sạch; chính sự chân thật không tô vẽ tạo nên sức rung động vượt thời gian.', descEn: 'Unpolished corrections strip away artifice, elevating authenticity above technical perfection.' },
        { id: 'jz-h3', titleVi: 'Bút pháp "Thư như kỳ nhân" của Nhan Thể', titleEn: 'Calligraphy as Moral Character', descVi: 'Nét bút trung phong dày nặng, khí phách kiên trung gắn liền với hình ảnh vị trung thần sẵn sàng tuẫn tiết của Nhan Chân Khanh.', descEn: 'Heavy centered-tip strokes mirror Yan Zhenqing\'s steadfast loyalty and moral courage.' }
      ]
    },
    {
      id: 'song-printed-shiji',
      category: 'rare-book',
      titleVi: 'Tống Bản Khắc Gỗ 《Sử Ký》 (Hoàng Thiện Phu Bản / Thiệu Hưng Bản)',
      titleZh: '宋刻本《史记》',
      titleEn: 'Song Dynasty Woodblock Edition of the Shiji',
      era: 'Nam Tống (thế kỷ XII)',
      material: 'Mực tùng yên in khắc gỗ trên giấy trúc / giấy bì',
      dimensions: 'Chưa có tư liệu công bố thống nhất theo từng bản lưu giữ',
      museum: 'Thư viện Quốc gia Trung Quốc (Bắc Kinh) & Bảo tàng Cố Cung Đài Bắc',
      summaryVi: 'Sách khắc gỗ thời Tống ("Tống bản thư") được giới thư tịch cổ tôn quý "Nhất diệp Tống bản, nhất lượng hoàng kim" (một tờ sách Tống, một lạng vàng). Các bản Tống khắc bộ "Sử Ký" (như bản hợp khắc Tam gia chú của Hoàng Thiện Phu thời Nam Tống) kết hợp nét chữ Khải thư Âu–Nhan sắc sảo, bố cục thoáng đạt, mực đen bóng và độ chuẩn xác văn bản học bậc nhất.',
      summaryEn: 'Song woodblock editions ("one leaf of Song print, one ounce of gold") represent the zenith of classical bookcraft. Southern Song editions of Sima Qian\'s "Shiji" pair crisp Tang-style calligraphy, generous margins, and authoritative textual collation.',
      hotspots: [
        { id: 'ss-h1', titleVi: 'Nghệ thuật chữ khắc "Âu Thể / Nhan Thể" thời Tống', titleEn: 'Crisp Tang-Style Woodblock Typography', descVi: 'Khác với chữ Tống Thể khuôn mẫu cứng về sau, sách khắc thời Tống giữ trọn thần thái thư pháp viết tay của danh gia.', descEn: 'Retains the organic vitality of master calligraphers\' brushwork rather than rigid late-Ming typefaces.' },
        { id: 'ss-h2', titleVi: 'Bố cục "Hiệp chú song hành" & Kỵ húy triều đại', titleEn: 'Double-Column Commentaries and Imperial Taboos', descVi: 'Chữ chú thích nhỏ hai dòng xen kẽ chính văn cùng các nét khuyết kỵ húy tên Hoàng đế giúp giám định chính xác niên đại khắc in.', descEn: 'Interlinear double-column notes and omitted strokes for imperial name taboos authenticate exact Song dates.' },
        { id: 'ss-h3', titleVi: 'Độ bền nghìn năm của giấy bì & mực tùng yên', titleEn: 'Millennial Durability of Bark Paper and Pine-Soot Ink', descVi: 'Giấy thủ công trung tính và mực muội thông nguyên chất giúp trang sách không ố mục sau hơn 800 năm.', descEn: 'Acid-free handmade bark paper and pure pine-soot ink keep pages crisp after eight centuries.' }
      ]
    },
    {
      id: 'ngoc-lu-bronze-drum',
      category: 'bronze',
      titleVi: 'Trống Đồng Ngọc Lũ',
      titleZh: '玉缕铜鼓（越南东山文化）',
      titleEn: 'Ngoc Lu Bronze Drum (Dong Son Culture, Vietnam)',
      era: 'Văn hóa Đông Sơn (khoảng thế kỷ III–II TCN)',
      material: 'Hợp kim đồng – thiếc – chì đúc khuôn sáp/khuôn mang',
      dimensions: 'Cao 63 cm; đường kính mặt 79 cm; nặng 86 kg',
      museum: 'Bảo tàng Lịch sử Quốc gia Việt Nam (Hà Nội)',
      summaryVi: 'Phát hiện năm 1893 tại Hà Nam, là Bảo vật Quốc gia và tiêu bản hoàn mỹ nhất của văn hóa Đông Sơn (Việt Nam). Đặt đối chiếu trong không gian bảo tàng Đông Á, Trống Đồng Ngọc Lũ khẳng định một trung tâm luyện kim thanh đồng độc lập rực rỡ ở phương Nam: mặt trống 14 tia mặt trời bao quanh bởi đoàn người hóa trang lông chim, nhà sàn mái cong, chim Lạc và thuyền chiến khắc họa thế giới quan nông nghiệp lúa nước bản địa.',
      summaryEn: 'Discovered in 1893 in Ha Nam, Vietnam\'s supreme Dong Son National Treasure. In East Asian museum comparison, it proves a active independent southern bronze center, depicting a 14-ray sun, feathered dancers, stilt houses, Lac birds, and war canoes.',
      hotspots: [
        { id: 'nl-h1', titleVi: 'Ngôi sao mặt trời 14 tia ở tâm mặt trống', titleEn: 'Fourteen-Ray Central Sun Motif', descVi: 'Biểu tượng tín ngưỡng thờ Mặt Trời và lịch nông nghiệp lúa nước của cư dân Lạc Việt cổ đại.', descEn: 'Emblem of solar worship and wet-rice seasonal cycles among ancient Lac Viet communities.' },
        { id: 'nl-h2', titleVi: 'Vành hoa văn sinh hoạt cộng đồng & Chim Lạc bay ngược chiều kim đồng hồ', titleEn: 'Frieze of Dancers, Stilt Houses, and Lac Birds', descVi: 'Khắc họa lễ hội giã gạo, đánh trống, múa lông chim và đàn chim Lạc bay nối đuôi nhau — khác hẳn mô-típ Thao Thiết Trung Nguyên.', descEn: 'Depicts rice-pounding, drum-playing, feathered dancers, and flying Lac birds—distinct from Central Plains taotie motifs.' },
        { id: 'nl-h3', titleVi: 'Thân trống khắc hình 6 chiếc thuyền chiến lớn', titleEn: 'Six War Canoes Around the Drum Body', descVi: 'Phản ánh đời sống sông nước và năng lực hàng hải ven biển của cư dân châu thổ sông Hồng thời cổ.', descEn: 'Reflects the riverine and coastal maritime mastery of the ancient Red River Delta.' }
      ]
    },
    {
      id: 'ly-tran-celadon-lotus-jar',
      category: 'ceramic',
      titleVi: 'Thạp Gốm Hoa Nâu & Men Ngọc Thời Lý–Trần',
      titleZh: '越南李陈时期褐花与青釉莲纹陶罐',
      titleEn: 'Ly–Tran Brown-Inlaid and Celadon Lotus Jar (Vietnam)',
      era: 'Nhà Lý – Nhà Trần (thế kỷ XI–XIV)',
      material: 'Gốm xương đất trắng xám vẽ men nâu sắt & men ngọc',
      dimensions: 'Chưa có tư liệu công bố thống nhất theo từng tiêu bản (dòng thạp lớn cao khoảng 40–55 cm)',
      museum: 'Bảo tàng Lịch sử Quốc gia Việt Nam (Hà Nội)',
      summaryVi: 'Dòng gốm đỉnh cao của thời đại độc lập Lý–Trần tại Đại Việt. Trong khi kế thừa công nghệ lò nung nhiệt độ cao và men ngọc tương đồng với gốm Tống (Long Tuyền, Từ Châu), nghệ nhân Đại Việt đã tạo nên phong cách "Gốm Hoa Nâu" độc đáo không trùng lặp: khắc chìm rồi tô men nâu sắt phóng khoáng hình cánh sen, chiến binh cầm giáo, voi, chim và hoa dây mềm mại.',
      summaryEn: 'Pinnacle of independent Dai Viet ceramics under the Ly–Tran dynasties. While sharing high-fired celadon technology with Song kilns, Vietnamese potters forged the unmistakable "Brown-Inlaid" (Hoa Nau) style featuring carved iron-brown lotus petals, warriors, elephants, and scrolling foliage.',
      hotspots: [
        { id: 'lt-h1', titleVi: 'Kỹ thuật khắc chìm tô men nâu sắt trên nền men ngà', titleEn: 'Carved Iron-Brown Inlay on Ivory Glaze', descVi: 'Nét khắc dứt khoát, khoáng đạt tạo độ tương phản ấm áp, mộc mạc lưu giữ tâm thức Phật giáo và hào khí Đông A.', descEn: 'Bold incised iron-brown motifs against warm ivory glaze reflect Ly–Tran Buddhist and heroic spirit.' },
        { id: 'lt-h2', titleVi: 'Dải cánh sen nổi chạm khắc quanh vai và chân thạp', titleEn: 'Carved Lotus-Petal Registers', descVi: 'Hoa văn cánh sen tròn mập đặc trưng thời Lý–Trần gắn liền với sự hưng thịnh của Phật giáo quốc giáo.', descEn: 'Plump sculpted lotus petals reflect the prominence of Buddhism during the Ly–Tran era.' },
        { id: 'lt-h3', titleVi: 'Đối thoại kỹ nghệ gốm Đông Á Tống – Đại Việt', titleEn: 'Song–Dai Viet Ceramic Dialogue', descVi: 'Thể hiện sự giao lưu kỹ thuật lò nung và men ngọc trên tuyến thương mại Biển Đông đi kèm bản sắc tạo hình tự chủ.', descEn: 'Demonstrates shared kiln and celadon science across the South China Sea paired with autonomous visual identity.' }
      ]
    }
  ];

  var V3_MUS_IMGS = {
    "goujian-sword": "assets/images/museum/goujian-sword.jpg",
    "sanxingdui-bronze-tree": "assets/images/museum/sanxingdui-bronze-tree.jpg",
    "fuhao-owl-zun": "assets/images/museum/fuhao-owl-zun.jpg",
    "lianhe-fanghu": "assets/images/museum/lianhe-fanghu.jpg",
    "yongle-great-bell": "assets/images/museum/yongle-great-bell.jpg",
    "terracotta-general": "assets/images/museum/terracotta-general.jpg",
    "changxin-palace-lamp": "assets/images/museum/changxin-palace-lamp.jpg",
    "mawangdui-silk-gown": "assets/images/museum/mawangdui-silk-gown.jpg",
    "hejiacun-agate-cup": "assets/images/museum/hejiacun-agate-cup.jpg",
    "tang-sancai-camel": "assets/images/museum/tang-sancai-camel.jpg",
    "jian-yao-yaobian-tenmoku": "assets/images/museum/jian-yao-yaobian-tenmoku.jpg",
    "longquan-celadon-vase": "assets/images/museum/longquan-celadon-vase.jpg",
    "xuande-blue-white-meiping": "assets/images/museum/xuande-blue-white-meiping.jpg",
    "kuaixue-shiqing-tie": "assets/images/museum/kuaixue-shiqing-tie.jpg",
    "jizhi-wengao-yan-zhenqing": "assets/images/museum/jizhi-wengao-yan-zhenqing.jpg",
    "song-printed-shiji": "assets/images/museum/song-printed-shiji.jpg",
    "ngoc-lu-bronze-drum": "assets/images/museum/ngoc-lu-bronze-drum.jpg",
    "ly-tran-celadon-lotus-jar": "assets/images/museum/ly-tran-celadon-lotus-jar.jpg"
  };
  window.CCE_MUSEUM = window.CCE_MUSEUM || { artifacts: [] };
  window.CCE_MUSEUM.artifacts = window.CCE_MUSEUM.artifacts || [];
  var list = window.CCE_MUSEUM.artifacts;
  var existingIds = {};
  var i, j;
  for (i = 0; i < list.length; i++) { if (list[i] && list[i].id) existingIds[list[i].id] = true; }
  var catMap = { bronze: "artifacts", jade: "artifacts", silk: "artifacts", ceramic: "ceramics", ceramics: "ceramics", calligraphy: "calligraphy", "ancient-books": "ancient-books", books: "ancient-books" };
  var catViMap = { artifacts: "Thanh đồng & Khảo cổ", ceramics: "Gốm sứ Cổ truyền", calligraphy: "Thư pháp Danh tích", "ancient-books": "Cổ tịch Thiện bản" };
  var catEnMap = { artifacts: "Bronze & Archaeology", ceramics: "Classical Ceramics", calligraphy: "Calligraphy Treasures", "ancient-books": "Rare Woodblock Editions" };
  var defaultSpots = [[28, 35], [64, 30], [50, 68]];
  for (i = 0; i < MUSEUM_V3.length; i++) {
    var m = MUSEUM_V3[i];
    if (existingIds[m.id]) continue;
    var normCat = catMap[m.category] || "artifacts";
    var hsOut = [];
    for (j = 0; j < (m.hotspots || []).length; j++) {
      var h = m.hotspots[j];
      var c = defaultSpots[j % defaultSpots.length];
      hsOut.push({
        id: h.id,
        x: c[0],
        y: c[1],
        titleVi: h.titleVi,
        titleEn: h.titleEn || h.titleVi,
        titleZh: "文物细部",
        pinyin: "",
        category: "Giám định · 鉴定",
        categoryEn: "Curatorial · 鉴定",
        detail: h.descVi,
        detailEn: h.descEn || h.descVi
      });
    }
    list.push({
      id: m.id,
      category: normCat,
      categoryLabel: catViMap[normCat] || "Bảo vật Quốc gia",
      categoryLabelEn: catEnMap[normCat] || "National Treasure",
      featuredCollections: [normCat, "collections"],
      nameVi: m.titleVi,
      nameEn: m.titleEn,
      nameZh: m.titleZh,
      nameZhTrad: m.titleZh,
      pinyin: "",
      periodId: "museum-v3",
      periodLabel: m.era,
      periodLabelEn: m.era,
      dateEstimate: m.era,
      material: m.material,
      dimensions: m.dimensions,
      origin: m.museum,
      collection: m.museum,
      culturalSignificance: m.summaryVi,
      culturalSignificanceEn: m.summaryEn,
      historicalContext: m.summaryVi,
      historicalContextEn: m.summaryEn,
      attribution: "Hồ sơ Bảo tàng Công cộng",
      attributionEn: "Public Museum Archival Record",
      imageUrl: V3_MUS_IMGS[m.id] || "assets/images/museum/houmuwu-ding.jpg",
      hotspotAnnotations: hsOut,
      hotspots: hsOut
    });
    existingIds[m.id] = true;
  }
})();
