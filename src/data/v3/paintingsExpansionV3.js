(function () {
  'use strict';

  var PAINTINGS_V3 = [
    {
      id: 'wuniu-tu',
      titleVi: 'Ngũ Ngưu Đồ',
      titleZh: '五牛图',
      titleEn: 'Five Oxen',
      artist: 'Hàn Hoảng (韩滉)',
      dynasty: 'Đường (thế kỷ VIII)',
      medium: 'Mực và màu khoáng trên giấy ma',
      museum: 'Bảo tàng Cố Cung Bắc Kinh',
      compositionType: 'handscroll',
      analysisVi: 'Kiệt tác vẽ trên giấy cổ nhất còn tồn tại của hội họa Trung Hoa. Hàn Hoảng bỏ hoàn toàn phông nền cảnh vật để tận dụng tối đa khoảng trống Lưu bạch, khắc họa năm con trâu với năm tư thế và thần thái riêng biệt bằng nét bút thiết tuyến miêu chắc khỏe, sắc màu trầm ấm.',
      analysisEn: 'The oldest surviving Chinese painting on paper. Han Huang omits all background scenery to harness negative space (Liubai), depicting five oxen in distinct postures with iron-wire outlines and muted mineral washes.',
      hotspots: [
        { id: 'wuniu-h1', titleVi: 'Bố cục Lưu bạch không phông nền', titleEn: 'Backgroundless Negative Space', descVi: 'Không vẽ núi sông hay đồng cỏ nhằm dồn toàn bộ thị giác vào hình khối giải phẫu và thần sắc từng con trâu.', descEn: 'Eliminates landscape backdrop to focus entirely on anatomical mass and individual temperament.', brushTechnique: 'Thiết tuyến miêu & Thuần màu khoáng', colophonZh: '', x: 50, y: 50 },
        { id: 'wuniu-h2', titleVi: 'Con trâu chính diện ở trung tâm', titleEn: 'Central Front-Facing Ox', descVi: 'Ánh mắt nhìn thẳng người xem đầy bình tĩnh, tạo điểm trụ cân bằng cho toàn bộ cuộn tranh dài.', descEn: 'Calm frontal gaze anchors the rhythmic movement across the horizontal handscroll.', brushTechnique: 'Trung phong câu lặc', colophonZh: '', x: 50, y: 50 },
        { id: 'wuniu-h3', titleVi: 'Bụi gai đỏ bên trái cuộn tranh', titleEn: 'Thorny Bush Accent on Left', descVi: 'Điểm xuyết thực vật duy nhất trong tranh, vừa tạo nhịp dừng thị giác vừa nhấn mạnh động tác gặm cỏ tự nhiên.', descEn: 'Sole botanical accent providing visual closure and natural grazing movement.', brushTechnique: 'Điểm diệp & Đạm mặc', colophonZh: '', x: 50, y: 50 }
      ]
    },
    {
      id: 'zhaoye-bai-tu',
      titleVi: 'Chiếu Dạ Bạch Đồ',
      titleZh: '照夜白图',
      titleEn: 'Night-Shining White',
      artist: 'Hàn Cán (韩干)',
      dynasty: 'Đường (khoảng 750)',
      medium: 'Mực trên giấy',
      museum: 'Bảo tàng Nghệ thuật Metropolitan (New York)',
      compositionType: 'handscroll',
      analysisVi: 'Chân dung tuấn mã yêu quý của Đường Huyền Tông. Thay vì vẽ ngựa tĩnh lặng, Hàn Cán dùng nét bút sắc lạnh, dứt khoát và kỹ thuật tả khối bằng lớp mực nhạt (ran) để nắm bắt khoảnh khắc con ngựa bị buộc vào cọc đang hí vang, mắt mở trừng và vó trước chồm lên đầy khí phách Thịnh Đường.',
      analysisEn: 'Portrait of Emperor Xuanzong\'s prized charger. Han Gan employs taut ink outlines and subtle ink-wash modeling to capture the tethered stallion rearing and neighing with High Tang vitality.',
      hotspots: [
        { id: 'zybt-h1', titleVi: 'Đầu ngựa ngẩng cao & Ánh mắt rực lửa', titleEn: 'Raised Head and Fiery Gaze', descVi: 'Mắt tròn mở lớn, lỗ mũi phồng và bờm dựng đứng truyền tải trực tiếp tinh thần bất khuất ("Truyền thần").', descEn: 'Wide-eyed glare, flared nostrils, and bristling mane convey untamed spirit.', brushTechnique: 'Thiết tuyến miêu kết hợp đạm mặc nhiễu', colophonZh: '', x: 50, y: 50 },
        { id: 'zybt-h2', titleVi: 'Tương phản Cọc gỗ thẳng và Thân ngựa xoắn', titleEn: 'Vertical Hitching Post vs. Spiraling Body', descVi: 'Trục đứng cứng của cọc buộc làm nổi bật lực kéo căng và chuyển động bật lên của khối cơ ngực.', descEn: 'Rigid vertical post heightens the muscular tension of the rearing chest and hooves.', brushTechnique: 'Khô bút tảo & Trắc phong', colophonZh: '', x: 50, y: 50 },
        { id: 'zybt-h3', titleVi: 'Hệ thống ấn triện & Đề bạt Nam Đường – Thanh', titleEn: 'Historical Seals and Colophons', descVi: 'Lưu giữ chữ đề của Lý Dục (Nam Đường Hậu Chủ), Mễ Phất và Hoàng đế Càn Long, chứng thực phả hệ lưu truyền hơn 1.200 năm.', descEn: 'Bears inscriptions by Southern Tang ruler Li Yu, Mi Fu, and Emperor Qianlong, documenting over 1,200 years of provenance.', brushTechnique: 'Thư họa hợp nhất', colophonZh: '韩干画照夜白', x: 50, y: 50 }
      ]
    },
    {
      id: 'jiangxing-chuxue-tu',
      titleVi: 'Giang Hành Sơ Tuyết Đồ',
      titleZh: '江行初雪图',
      titleEn: 'Early Snow on the River',
      artist: 'Triệu Cán (赵干)',
      dynasty: 'Ngũ Đại – Nam Đường (thế kỷ X)',
      medium: 'Mực và màu nhạt trên lụa',
      museum: 'Bảo tàng Cố Cung Đài Bắc',
      compositionType: 'handscroll',
      analysisVi: 'Bức tranh phong cảnh – sinh hoạt vùng Giang Nam đầu mùa đông. Triệu Cán sử dụng phép "Bình viễn" mở rộng mặt sông lạnh lẽo và kỹ thuật "Đàn phấn" (búng phấn trắng) độc đáo để tạo hiệu ứng tuyết bay trong gió trên nền lụa xám ấm, khắc họa chân thực đời sống ngư phủ co ro kéo lưới.',
      analysisEn: 'A Jiangnan winter river scroll employing level-distance (Pingyuan) perspective and spattered white-lead pigment ("danfen") to evoke blowing snow over shivering fishermen hauling nets.',
      hotspots: [
        { id: 'jxcx-h1', titleVi: 'Kỹ thuật Đàn phấn tả tuyết bay', titleEn: 'Spattered Pigment Snow Technique', descVi: 'Búng những chấm phấn trắng li ti đều khắp mặt lụa để diễn tả không khí tuyết rơi mù mịt trên bãi lau.', descEn: 'Fine droplets of white pigment spattered across silk create an atmospheric snowstorm.', brushTechnique: 'Đàn phấn pháp (弹粉法)', colophonZh: '', x: 50, y: 50 },
        { id: 'jxcx-h2', titleVi: 'Cụm nhân vật ngư phủ & người cưỡi lừa', titleEn: 'Fishermen and Donkey Rider', descVi: 'Tạo hình sinh động nỗi vất vả của người kéo lưới chân trần đối lập với lữ khách mặc áo choàng dày qua cầu gỗ.', descEn: 'Contrasts barefoot fishermen against a bundled traveler crossing a timber bridge.', brushTechnique: 'Chiến bút & Đạm thái', colophonZh: '', x: 50, y: 50 },
        { id: 'jxcx-h3', titleVi: 'Bờ lau sậy Giang Nam bằng bút khô', titleEn: 'Dry-Brush Riverbank Reeds', descVi: 'Nét bút ngắn, sắc và khô tạo độ xù tự nhiên của lau sậy mùa đông chịu gió sông.', descEn: 'Crisp dry-brush strokes render windswept winter reeds along the embankment.', brushTechnique: 'Khô bút tảo thảo', colophonZh: '江行初雪画院学生赵干状', x: 50, y: 50 }
      ]
    },
    {
      id: 'tingqin-tu',
      titleVi: 'Thính Cầm Đồ',
      titleZh: '听琴图',
      titleEn: 'Listening to the Qin',
      artist: 'Tống Huy Tông Triệu Cát (tương truyền / Viện họa Bắc Tống)',
      dynasty: 'Bắc Tống (đầu thế kỷ XII)',
      medium: 'Mực và màu trên lụa',
      museum: 'Bảo tàng Cố Cung Bắc Kinh',
      compositionType: 'hanging-scroll',
      analysisVi: 'Tác phẩm tiêu biểu cho thẩm mỹ cung đình thanh nhã thời Tống Huy Tông. Bố cục tam giác khép kín dưới tán thông cổ thụ và trúc xanh, khắc họa đạo sĩ áo đen (tượng trưng Huy Tông) đang gảy đàn cổ cầm trong khi hai vị đại thần áo đỏ và áo xanh chìm đắm lắng nghe trong tĩnh lặng tuyệt đối.',
      analysisEn: 'Exemplifies Northern Song court elegance under Emperor Huizong. Beneath an ancient pine and bamboo, a black-robed scholar-emperor plays the guqin while two officials listen in rapt stillness.',
      hotspots: [
        { id: 'tq-h1', titleVi: 'Cấu trúc tam giác nhân vật & Tương phản màu sắc', titleEn: 'Triangular Figure Grouping and Color Balance', descVi: 'Áo đạo bào đen ở trung tâm tạo điểm neo tĩnh tại giữa sắc đỏ son và xanh lục trầm của hai thính giả.', descEn: 'Central black Daoist robe anchors the composition between vermilion and muted green robes.', brushTechnique: 'Công bút thiết tuyến & Trọng thái', colophonZh: '', x: 50, y: 50 },
        { id: 'tq-h2', titleVi: 'Cây thông già và dây lăng tiêu', titleEn: 'Ancient Pine and Trumpet Vine', descVi: 'Tán thông vươn từ mép trên phủ xuống tạo không gian kín đáo, gợi cảm giác âm thanh đàn cầm lan tỏa theo gió.', descEn: 'Overhanging pine boughs enclose the courtyard and visually echo the resonance of the strings.', brushTechnique: 'Lân giáp thuân & Song câu điền sắc', colophonZh: '', x: 50, y: 50 },
        { id: 'tq-h3', titleVi: 'Thư pháp Sấu Kim Thể của Tống Huy Tông', titleEn: 'Slender Gold Calligraphy Inscription', descVi: 'Ba chữ "Thính Cầm Đồ" viết bằng lối Sấu Kim Thể sắc mảnh như lưỡi kiếm kèm bài thơ đề vịnh của Thái Kinh.', descEn: 'Title inscribed in Huizong\'s razor-sharp Slender Gold script alongside Cai Jing\'s poetic colophon.', brushTechnique: 'Sấu Kim Thể (瘦金体)', colophonZh: '听琴图', x: 50, y: 50 }
      ]
    },
    {
      id: 'hanjiang-dudiao-tu',
      titleVi: 'Hàn Giang Độc Điếu Đồ',
      titleZh: '寒江独钓图',
      titleEn: 'Angler on a Wintry River',
      artist: 'Mã Viễn (马远)',
      dynasty: 'Nam Tống (khoảng 1195)',
      medium: 'Mực và màu nhạt trên lụa',
      museum: 'Bảo tàng Quốc gia Tokyo',
      compositionType: 'album',
      analysisVi: 'Đỉnh cao tuyệt đối của nghệ thuật Lưu bạch (để trống) thời Nam Tống. Toàn bộ bức tranh chỉ vẽ một chiếc thuyền nan nhỏ và lão ngư đang cúi người buông cần giữa mặt lụa để trắng mênh mông — vài nét sóng mảnh xung quanh mũi thuyền đủ gợi lên cả một dòng sông mùa đông mênh mang và tĩnh mịch.',
      analysisEn: 'The supreme triumph of Southern Song negative space (Liubai). A lone fisherman hunches over his rod in a tiny skiff amid vast unpainted silk, where a few delicate ripple lines evoke an entire wintry river.',
      hotspots: [
        { id: 'hjdd-h1', titleVi: 'Nghệ thuật Lưu bạch "Kế bạch đương hắc"', titleEn: 'Vast Unpainted Void as Water', descVi: 'Hơn 85% mặt lụa để trống không chấm mực nhưng người xem vẫn cảm nhận rõ cái lạnh, chiều sâu và không gian vô tận của mặt sông.', descEn: 'Over 85% blank silk conveys coldness, depth, and boundless expanse through pure suggestion.', brushTechnique: 'Lưu bạch (留白)', colophonZh: '', x: 50, y: 50 },
        { id: 'hjdd-h2', titleVi: 'Nét bút "Đinh đầu thử vĩ" khắc họa ngư phủ', titleEn: 'Dynamic Ink Lines of the Fisherman', descVi: 'Thân thuyền hơi nghiêng về mũi theo trọng tâm người câu, tạo cảm giác bồng bềnh sống động giữa mặt nước.', descEn: 'The skiff tilts slightly forward under the angler\'s weight, suggesting gentle buoyancy.', brushTechnique: 'Chiến bút & Thủy văn mảnh', colophonZh: '', x: 50, y: 50 },
        { id: 'hjdd-h3', titleVi: 'Dấu ấn "Mã Nhất Giác"', titleEn: 'Ma Yuan\'s One-Corner Compositional Spirit', descVi: 'Cắt bỏ toàn bộ bờ bãi và núi xa, cô đặc ý cảnh bài thơ "Giang Tuyết" của Liễu Tông Nguyên vào một tâm điểm duy nhất.', descEn: 'Strips away distant banks and peaks to distill Liu Zongyuan\'s "River Snow" mood into a single focal point.', brushTechnique: 'Tiệm đạm mặc', colophonZh: '', x: 50, y: 50 }
      ]
    },
    {
      id: 'jiulong-tu',
      titleVi: 'Cửu Long Đồ',
      titleZh: '九龙图',
      titleEn: 'Nine Dragons',
      artist: 'Trần Dung (陈容)',
      dynasty: 'Nam Tống (1244)',
      medium: 'Mực và màu đỏ nhạt trên giấy',
      museum: 'Bảo tàng Mỹ thuật Boston',
      compositionType: 'handscroll',
      analysisVi: 'Cuộn tranh dài gần 11 m đạt đỉnh cao kỹ thuật vẩy mực (Bát mặc) và thổi mực của hội họa Nam Tống. Chín con rồng uốn lượn thoắt ẩn thoắt hiện giữa mây giông, sóng dữ và vách đá, thể hiện sức mạnh biến hóa rất của khí Đạo gia thay vì hình ảnh rồng cung đình trang trí cứng nhắc.',
      analysisEn: 'A nearly 11-meter masterwork of Southern Song ink-play. Nine dragons surge in and out of storm clouds, whirlpools, and crags, embodying dynamic Daoist cosmic energy (Qi).',
      hotspots: [
        { id: 'jl-h1', titleVi: 'Kỹ thuật Bát mặc tả mây giông & Sóng cuộn', titleEn: 'Splashed-Ink Storm Clouds and Waves', descVi: 'Trần Dung dùng mực loãng vẩy mạnh kết hợp dùng bút khô quét xoáy tạo bầu khí quyển sấm chớp cuồn cuộn.', descEn: 'Dynamic ink washes paired with dry-brush swirls conjure thunderous atmospheric motion.', brushTechnique: 'Bát mặc & Khô bút tảo', colophonZh: '', x: 50, y: 50 },
        { id: 'jl-h2', titleVi: 'Vảy rồng sắc nét bằng bút trung phong', titleEn: 'Crisp Scales Against Misty Void', descVi: 'Tương phản giữa nét râu, vuốt, vảy rồng vẽ tỉ mỉ sắc cạnh với màn sương mờ ảo xung quanh.', descEn: 'Meticulously drawn claws, whiskers, and scales emerge sharply from misty ink washes.', brushTechnique: 'Trung phong câu lặc & Phá mặc', colophonZh: '', x: 50, y: 50 },
        { id: 'jl-h3', titleVi: 'Thơ tự đề của Trần Dung năm 1244', titleEn: 'Chen Rong\'s 1244 Autograph Colophon', descVi: 'Khẳng định rồng không phải thần thú mê tín mà là ẩn dụ cho nguồn sinh khí vũ trụ và tài năng ẩn mình của kẻ sĩ.', descEn: 'Frames the dragons as cosmic metaphors of creative vitality and hidden scholarly talent.', brushTechnique: 'Hành thảo thư pháp', colophonZh: '', x: 50, y: 50 }
      ]
    },
    {
      id: 'xishan-qingyuan-tu',
      titleVi: 'Khê Sơn Thanh Viễn Đồ',
      titleZh: '溪山清远图',
      titleEn: 'Pure and Remote View of Streams and Mountains',
      artist: 'Hạ Khuê (夏圭)',
      dynasty: 'Nam Tống (đầu thế kỷ XIII)',
      medium: 'Mực trên giấy',
      museum: 'Bảo tàng Cố Cung Đài Bắc',
      compositionType: 'handscroll',
      analysisVi: 'Kiệt tác tiêu biểu nhất của phong cách "Hạ Bán Biên" (bố cục nửa bên) thời Nam Tống. Trên cuộn giấy dài gần 9 m, Hạ Khuê vận dụng điêu luyện kỹ thuật "Đại phủ phách thuân" (nét chém rìu lớn bằng nghiêng bút ướt) đan xen với mặt nước mở rộng thanh vắng, tạo nhịp điệu âm nhạc khi cuộn tranh mở dần từ phải sang trái.',
      analysisEn: 'Signature masterpiece of Xia Gui\'s "Half-Side" Southern Song style. Across a nearly 9-meter paper scroll, bold wet axe-cut texture strokes alternate with expansive misty waters in musical cadence.',
      hotspots: [
        { id: 'xsqy-h1', titleVi: 'Thuân pháp Đại phủ phách (Chém rìu lớn)', titleEn: 'Big Axe-Cut Texture Strokes', descVi: 'Nghiêng thân bút quét dứt khoát bằng mực đậm–nhạt chuyển tiếp trong một nét ("Tha nê đới thủy thuân") để tạc khối vách đá sắc cạnh.', descEn: 'Broad slanted brush strokes blending dark and wet ink carve monumental faceted cliffs.', brushTechnique: 'Đại phủ phách thuân & Tha nê đới thủy', colophonZh: '', x: 50, y: 50 },
        { id: 'xsqy-h2', titleVi: 'Chuyển nhịp "Hạ Bán Biên" & Phép Bình viễn', titleEn: 'Half-Side Composition and Open Distance', descVi: 'Dồn trọng tâm núi đá xuống nửa dưới và một bên khung tranh, mở toàn bộ nửa trên cho bầu trời và mặt nước Giang Nam.', descEn: 'Anchors rocky mass along one edge while opening upper space to luminous water and mist.', brushTechnique: 'Lưu bạch & Đạm mặc nhiễu', colophonZh: '', x: 50, y: 50 },
        { id: 'xsqy-h3', titleVi: 'Cầu gỗ, chùa núi & Điểm nhấn nhân vật nhỏ', titleEn: 'Timber Bridge and Minute Travelers', descVi: 'Các bóng người nhỏ bé đi qua cầu tạo thước đo tỷ lệ hùng vĩ cho vách núi và nhịp sống nhân văn.', descEn: 'Tiny figures crossing a bridge provide human scale to the towering cliffs.', brushTechnique: 'Tiểu bút điểm cảnh', colophonZh: '', x: 50, y: 50 }
      ]
    },
    {
      id: 'molan-tu',
      titleVi: 'Mặc Lan Đồ',
      titleZh: '墨兰图',
      titleEn: 'Ink Orchids',
      artist: 'Trịnh Tư Tiêu (郑思肖)',
      dynasty: 'Cuối Nam Tống – đầu Nguyên (1306)',
      medium: 'Mực trên giấy',
      museum: 'Bảo tàng Nghệ thuật Thành phố Osaka',
      compositionType: 'handscroll',
      analysisVi: 'Tác phẩm mang tính tuyên ngôn chính trị và thẩm mỹ văn nhân sâu sắc nhất thời Tống–Nguyên. Sau khi nhà Nam Tống diệt vong, Trịnh Tư Tiêu vẽ khóm lan bằng vài nét mực mảnh thanh thoát nhưng cố ý không vẽ đất dưới gốc rễ — khi có người hỏi, ông đáp "Đất đai đã bị người ngoài chiếm mất rồi, còn đất đâu mà vẽ?".',
      analysisEn: 'A poignant literati political manifesto following the fall of the Southern Song. Zheng Sixiao paints rootless orchids suspended in empty space, answering inquiries by declaring that the homeland\'s soil had been seized.',
      hotspots: [
        { id: 'ml-h1', titleVi: 'Khóm lan không rễ bám đất ("Vô căn lan")', titleEn: 'Rootless Orchids in Void', descVi: 'Khoảng trống trắng dưới gốc rễ không chỉ là Lưu bạch mỹ thuật mà là ẩn dụ trực diện về nỗi đau mất nước của di dân nhà Tống.', descEn: 'Unpainted void beneath exposed roots transforms aesthetic negative space into a symbol of exile.', brushTechnique: 'Thư pháp nhập họa (Trung phong)', colophonZh: '', x: 50, y: 50 },
        { id: 'ml-h2', titleVi: 'Nét lá lan vươn sắc như nét Thảo thư', titleEn: 'Calligraphic Orchid Leaves', descVi: 'Chỉ dùng vài nét bút dài, biến hóa đậm–nhạt trong một hơi thở, đưa tinh thần "tả ý" văn nhân vượt lên trên tả thực.', descEn: 'Single-breath sweeping strokes fuse cursive calligraphy directly into monochrome botanical painting.', brushTechnique: 'Phiên chiết & Đạm mặc tả ý', colophonZh: '', x: 50, y: 50 },
        { id: 'ml-h3', titleVi: 'Bài thơ đề vịnh của Trịnh Tư Tiêu (1306)', titleEn: 'Zheng Sixiao\'s 1306 Poetic Colophon', descVi: 'Thơ, chữ viết và dấu ấn tạo thành chỉnh thể Thi–Thư–Họa–Ấn điển hình của hội họa văn nhân thời Nguyên.', descEn: 'Integrates poetry, calligraphy, painting, and seal into the quintessential Yuan literati unity.', brushTechnique: 'Hành khải đề bạt', colophonZh: '', x: 50, y: 50 }
      ]
    },
    {
      id: 'qiujiao-yinma-tu',
      titleVi: 'Thu Giao Ẩm Mã Đồ',
      titleZh: '秋郊饮马图',
      titleEn: 'Watering Horses in the Autumn Suburbs',
      artist: 'Triệu Mạnh Phủ (赵孟頫)',
      dynasty: 'Nguyên (1312)',
      medium: 'Mực và màu trên lụa',
      museum: 'Bảo tàng Cố Cung Bắc Kinh',
      compositionType: 'handscroll',
      analysisVi: 'Tuyên ngôn phục cổ "Tác họa quý hữu cổ ý" của bậc thầy Triệu Mạnh Phủ. Ông tái hiện tinh thần tranh ngựa thời Đường (Hàn Cán) kết hợp bảng màu Thanh Lục – lá thu đỏ rực trong không gian đồng bằng Giang Nam bình yên, mở đường cho dòng tranh văn nhân thời Nguyên.',
      analysisEn: 'Embodies Zhao Mengfu\'s call to revive "antique spirit." He blends Tang-style horse painting with active autumn foliage and blue-green washes in a tranquil Jiangnan pastoral setting.',
      hotspots: [
        { id: 'qjym-h1', titleVi: 'Mười con ngựa mười tư thế sinh động', titleEn: 'Ten Horses in Diverse Postures', descVi: 'Từ chú ngựa cúi uống nước, ngựa lăn mình trên cỏ đến ngựa phi nhẹ qua dòng suối, tất cả đều tròn đầy theo chuẩn cổ phong nhà Đường.', descEn: 'Grazing, drinking, and trotting horses recapture the rounded vitality of Tang equestrian masters.', brushTechnique: 'Tế tuyến câu lặc & Thấu nhiễm', colophonZh: '', x: 50, y: 50 },
        { id: 'qjym-h2', titleVi: 'Hàng cây lá đỏ thu & Bảng màu cổ điển', titleEn: 'Crimson Autumn Trees and Antique Palette', descVi: 'Sắc chu sa của tán cây thu tương phản với mặt nước xanh ngọc nhạt và áo đỏ của người chăn ngựa.', descEn: 'Vermilion autumn foliage balances celadon-green water and the herdsman\'s crimson coat.', brushTechnique: 'Thanh lục thiết sắc', colophonZh: '', x: 50, y: 50 },
        { id: 'qjym-h3', titleVi: 'Chữ ký & Dấu ấn Triệu Mạnh Phủ năm Hoàng Khánh nguyên niên', titleEn: 'Zhao Mengfu\'s 1312 Inscription', descVi: 'Xác lập niên đại 1312 và thể hiện lý thuyết "Thư họa đồng nguyên" (chữ viết và hội họa cùng một gốc).', descEn: 'Dated 1312, demonstrating Zhao\'s influential doctrine that calligraphy and painting share a single root.', brushTechnique: 'Triệu thể Hành thư', colophonZh: '', x: 50, y: 50 }
      ]
    },
    {
      id: 'yufu-tu',
      titleVi: 'Ngư Phụ Đồ',
      titleZh: '渔父图',
      titleEn: 'Fishermen',
      artist: 'Ngô Trấn (吴镇)',
      dynasty: 'Nguyên (1342)',
      medium: 'Mực trên giấy',
      museum: 'Phòng trưng bày Freer (Smithsonian, Washington D.C.)',
      compositionType: 'handscroll',
      analysisVi: 'Một trong những kiệt tác của "Nguyên Tứ Gia" Ngô Trấn (Mai Hoa Đạo Nhân). Bức tranh dùng mực ướt đậm đà, thuân pháp Phi Ma mềm mại và các chấm rêu "Thấp điểm" phóng khoáng để khắc họa mười sáu con thuyền ngư phủ ẩn dật dọc bờ sông, đi kèm 16 bài từ "Ngư Phụ Từ" ca ngợi tự do tinh thần ngoài vòng danh lợi.',
      analysisEn: 'Masterpiece by Yuan master Wu Zhen. Lush wet ink, hemp-fiber texture strokes, and expressive ink dots depict sixteen reclusive fishing boats paired with sixteen lyrical poems celebrating spiritual freedom.',
      hotspots: [
        { id: 'yf-h1', titleVi: 'Mực ướt đậm đà & Chấm rêu phóng khoáng', titleEn: 'Rich Wet Ink and Expressive Moss Dots', descVi: 'Ngô Trấn sử dụng bút trung phong thấm đẫm mực tạo độ dày dặn, mộc mạc mà không sắc cạnh như phái Mã–Hạ Nam Tống.', descEn: 'Saturated centered-tip ink strokes create earthy warmth distinct from angular Southern Song styles.', brushTechnique: 'Phi ma thuân & Thấp điểm thái', colophonZh: '', x: 50, y: 50 },
        { id: 'yf-h2', titleVi: 'Mười sáu bài "Ngư Phụ Từ" xen kẽ trên mặt nước', titleEn: 'Sixteen Poems Integrated into the River', descVi: 'Các đoạn thảo thư đặt xen kẽ ngay trên khoảng trống mặt sông, biến chữ viết thành một phần của bố cục cảnh quan.', descEn: 'Cursive poems float across blank river spaces, integrating literature directly into pictorial rhythm.', brushTechnique: 'Thảo thư nhập họa', colophonZh: '', x: 50, y: 50 },
        { id: 'yf-h3', titleVi: 'Hình tượng ẩn sĩ Ngư Phủ thời Nguyên', titleEn: 'The Yuan Reclusive Fisherman Motif', descVi: 'Phản ánh tâm thế trí thức Hán thời Nguyên chọn đời sống ẩn cư thanh bạch bên sông nước Giang Nam.', descEn: 'Reflects Yuan-era scholar-painters embracing quiet retreat along Jiangnan waterways.', brushTechnique: 'Giản bút tả ý', colophonZh: '', x: 50, y: 50 }
      ]
    },
    {
      id: 'momei-tu',
      titleVi: 'Mặc Mai Đồ',
      titleZh: '墨梅图',
      titleEn: 'Ink Plum Blossoms',
      artist: 'Vương Miện (王冕)',
      dynasty: 'Cuối Nguyên (1355)',
      medium: 'Mực trên giấy',
      museum: 'Bảo tàng Cố Cung Bắc Kinh',
      compositionType: 'handscroll',
      analysisVi: 'Đỉnh cao dòng tranh Mặc Mai văn nhân. Vương Miện vẽ một cành mai cổ vắt ngang khung tranh bằng nét bút như thép uốn, điểm hàng trăm bông hoa mai bằng kỹ thuật "Khuyên mai" (khoanh tròn thanh mảnh) kết hợp bài thơ nổi tiếng "Bất yếu nhân khoa hảo nhan sắc, chỉ lưu thanh khí mãn càn khôn".',
      analysisEn: 'Pinnacle of monochrome plum painting. Wang Mian sweeps an iron-strong branch across paper dotted with delicate outlined blossoms, crowned by his celebrated poem praising pure integrity over flattery.',
      hotspots: [
        { id: 'mm-h1', titleVi: 'Cành mai vắt ngang mạnh mẽ như nét Triện–Thảo', titleEn: 'Calligraphic Branch Sweep', descVi: 'Thân mai dùng mực nhạt có điểm khô bút tạo độ sần vỏ cây, cành non vươn thẳng dứt khoát đầy nội lực.', descEn: 'Dry-textured ink renders gnarled bark while slender shoots spring outward with calligraphic vigor.', brushTechnique: 'Trung phong dẫn bút & Phi bạch', colophonZh: '', x: 50, y: 50 },
        { id: 'mm-h2', titleVi: 'Kỹ thuật Khuyên Mai & Điểm Đế hoa', titleEn: 'Outlined Blossoms and Dark Calyces', descVi: 'Cánh hoa vẽ bằng vòng mực loãng thanh thoát, đối lập với nhụy và đài hoa chấm mực đậm sắc nét.', descEn: 'Pale ink rings form airy petals accented by crisp dark-ink stamens and calyces.', brushTechnique: 'Khuyên mai pháp (圈梅法)', colophonZh: '', x: 50, y: 50 },
        { id: 'mm-h3', titleVi: 'Bài thơ "Mặc Mai" bất hủ', titleEn: 'The Immortal Ink Plum Poem', descVi: 'Lời thơ khẳng định khí tiết thanh cao không cầu khen ngợi thế tục, kết hợp tuyệt đối với sắc mực đơn sắc.', descEn: 'Verse affirms scholarly integrity indifferent to worldly praise, unifying text and ink.', brushTechnique: 'Hành thư đề thi', colophonZh: '不要人夸好颜色，只留清气满乾坤', x: 50, y: 50 }
      ]
    },
    {
      id: 'taohuayuan-tu',
      titleVi: 'Đào Hoa Nguyên Đồ',
      titleZh: '桃源仙境图',
      titleEn: 'Peach Blossom Spring',
      artist: 'Cừu Anh (仇英)',
      dynasty: 'Minh (giữa thế kỷ XVI)',
      medium: 'Mực và màu khoáng đậm trên lụa',
      museum: 'Bảo tàng Thiên Tân',
      compositionType: 'hanging-scroll',
      analysisVi: 'Một trong những kiệt tác Thanh Lục Sơn Thủy rực rỡ nhất của Cừu Anh ("Minh Tứ Gia"). Lấy cảm hứng từ "Đào Hoa Nguyên Ký" của Đào Uyên Minh, tác phẩm kết hợp sắc xanh đá khổng tước, lam thanh kim và hoa đào hồng rực với kỹ thuật vẽ kiến trúc và nhân vật tinh vi bậc nhất thời Minh.',
      analysisEn: 'A luminous blue-and-green landscape by Ming master Qiu Ying inspired by Tao Yuanming\'s utopia, fusing malachite green, azurite blue, and pink blossoms with exquisite figure and pavilion detail.',
      hotspots: [
        { id: 'thy-h1', titleVi: 'Bảng màu Đại Thanh Lục rực rỡ', titleEn: 'Rich Blue-and-Green Mineral Palette', descVi: 'Tô chồng nhiều lớp thạch thanh và thạch lục lên các vách đá tạo vẻ lộng lẫy siêu thực của chốn tiên cảnh.', descEn: 'Layered azurite and malachite pigments impart an otherworldly mineral brilliance to the cliffs.', brushTechnique: 'Đại Thanh Lục sơn thủy', colophonZh: '', x: 50, y: 50 },
        { id: 'thy-h2', titleVi: 'Ba bậc cao sĩ bên suối thông', titleEn: 'Three Reclusive Scholars by the Stream', descVi: 'Văn nhân áo trắng ngồi nghe đàn cổ cầm dưới tán tùng cổ thụ, được vẽ bằng nét bút tinh xảo mà vẫn thanh thoát.', descEn: 'White-robed scholars listening to a guqin beneath pines show crisp yet lyrical brushwork.', brushTechnique: 'Công bút tế miêu', colophonZh: '', x: 50, y: 50 },
        { id: 'thy-h3', titleVi: 'Lớp mây trắng tách không gian trần thế – tiên cảnh', titleEn: 'Cloud Band Dividing Realms', descVi: 'Dải mây cuộn mềm mại dùng phép "Thâm viễn" dẫn mắt người xem vào thung lũng khuất sau vách đá.', descEn: 'Billowing white clouds employ deep-distance perspective to veil the hidden valley beyond.', brushTechnique: 'Câu vân pháp', colophonZh: '', x: 50, y: 50 }
      ]
    },
    {
      id: 'songyin-fangyou-tu',
      titleVi: 'Tùng Âm Phỏng Hữu Đồ',
      titleZh: '松阴访友图',
      titleEn: 'Visiting a Friend Under the Pines',
      artist: 'Đới Tiến (戴进)',
      dynasty: 'Minh (thế kỷ XV)',
      medium: 'Mực và màu nhạt trên lụa',
      museum: 'Bảo tàng Cố Cung Đài Bắc',
      compositionType: 'hanging-scroll',
      analysisVi: 'Tác phẩm đại diện cho phái Chiết Giang (Chiết Phái) do Đới Tiến khai sáng đầu đời Minh. Kế thừa sự hào sảng của Mã Viễn – Hạ Khuê thời Nam Tống, Đới Tiến tăng cường tốc độ nét bút và độ tương phản đậm–nhạt để khắc họa hai hàng thông cổ thụ vươn cao đầy khí thế cùng văn nhân đi thăm bạn ẩn cư.',
      analysisEn: 'Exemplifies the early Ming Zhe School founded by Dai Jin. Building on Southern Song Ma–Xia boldness, Dai accelerates ink brushwork and tonal contrast to frame towering pines and a scholar visiting his recluse friend.',
      hotspots: [
        { id: 'syfy-h1', titleVi: 'Cụm tùng cổ thụ dựng trục đứng hùng tráng', titleEn: 'Monumental Vertical Pine Axis', descVi: 'Thân thông vẽ bằng nét bút mạnh mẽ, tán kim châm sắc sảo làm khung tự nhiên dẫn mắt xuống lối mòn.', descEn: 'Vigorous pine trunks and crisp needle clusters anchor the vertical hanging-scroll composition.', brushTechnique: 'Trắc phong phủ phách & Đạm mặc', colophonZh: '', x: 50, y: 50 },
        { id: 'syfy-h2', titleVi: 'Nhân vật chủ – khách đối thoại bên hiên', titleEn: 'Host and Visitor Dialogue', descVi: 'Nét vẽ nếp áo gãy gọn kiểu "Đinh đầu thử vĩ" thể hiện rõ nét phong cách hào phóng của Chiết Phái.', descEn: 'Angular "nail-head, rat-tail" drapery strokes exemplify Zhe School dynamism.', brushTechnique: 'Đinh đầu thử vĩ miêu', colophonZh: '', x: 50, y: 50 },
        { id: 'syfy-h3', titleVi: 'Núi xa mờ sương tạo chiều sâu Bình – Cao viễn', titleEn: 'Misty Distant Peaks', descVi: 'Lớp mực loãng mỏng nhẹ ở hậu cảnh cân bằng lại sức nặng đậm đặc của cụm thông và vách đá tiền cảnh.', descEn: 'Soft ink washes in the distance balance the dark density of foreground rocks and pines.', brushTechnique: 'Hậu cảnh đạm nhiễm', colophonZh: '', x: 50, y: 50 }
      ]
    },
    {
      id: 'hehua-shuiqin-tu',
      titleVi: 'Hà Hoa Thủy Cầm Đồ',
      titleZh: '荷花水禽图',
      titleEn: 'Lotus and Waterfowl',
      artist: 'Bát Đại Sơn Nhân Chu Đạp (八大山人·朱耷)',
      dynasty: 'Đầu Thanh (cuối thế kỷ XVII)',
      medium: 'Mực trên giấy',
      museum: 'Bảo tàng Thượng Hải',
      compositionType: 'hanging-scroll',
      analysisVi: 'Biểu tượng cô đọng nhất cho phong cách Đại Tả Ý (biểu cảm tối giản) của di dân hoàng tộc nhà Minh Chu Đạp. Một tán lá sen rũ nặng bằng mảng mực loãng lớn treo lơ lửng phía trên chú chim nước nhỏ đứng co một chân trên tảng đá chênh vênh, mắt trắng dã nhìn lên trời đầy vẻ ngạo nghễ và cô độc.',
      analysisEn: 'Iconic expressionist ink scroll by Ming royal descendant Zhu Da (Bada Shanren). A heavy lotus leaf looms over a tiny waterfowl perched on one leg atop a precarious rock, rolling a defiant white eye skyward.',
      hotspots: [
        { id: 'hhsq-h1', titleVi: 'Ánh mắt "Bạch nhãn hướng thiên" đặc trưng', titleEn: 'Signature "White Eye to Heaven"', descVi: 'Con ngươi đặt sát mí trên tạo biểu cảm khinh bạc, cô độc và bất khuất trước triều đại mới.', descEn: 'Pupil pinned to the upper eyelid conveys aloofness, irony, and quiet resistance.', brushTechnique: 'Giản bút truyền thần', colophonZh: '', x: 50, y: 50 },
        { id: 'hhsq-h2', titleVi: 'Bố cục "Hiểm trung cầu ổn"', titleEn: 'Precarious Yet Balanced Composition', descVi: 'Tảng đá tròn chênh vênh và tán lá sen lớn ép xuống khoảng trống trắng tạo sức căng thị giác cực mạnh.', descEn: 'Unstable rock and overhanging ink wash create intense visual tension against empty paper.', brushTechnique: 'Bát mặc đại tả ý', colophonZh: '', x: 50, y: 50 },
        { id: 'hhsq-h3', titleVi: 'Chữ ký "Bát Đại Sơn Nhân" biến thể "Khốc chi / Tiếu chi"', titleEn: 'Cryptic "Cry or Laugh" Signature', descVi: 'Bốn chữ ký viết liền nét nhìn vừa giống "Khốc chi" (khóc đi) vừa giống "Tiếu chi" (cười đi), gói trọn tâm sự di dân.', descEn: 'Stylized cursive signature reads simultaneously like "cry" and "laugh," encoding poignant exile.', brushTechnique: 'Thảo thư mật mã', colophonZh: '八大山人', x: 50, y: 50 }
      ]
    },
    {
      id: 'zhushi-zhengbanqiao',
      titleVi: 'Trúc Thạch Đồ',
      titleZh: '竹石图',
      titleEn: 'Bamboo and Rock',
      artist: 'Trịnh Bản Kiều (郑板桥)',
      dynasty: 'Thanh (thế kỷ XVIII)',
      medium: 'Mực trên giấy',
      museum: 'Bảo tàng Cố Cung Bắc Kinh',
      compositionType: 'hanging-scroll',
      analysisVi: 'Tác phẩm kinh điển của đại diện Dương Châu Bát Quái. Trịnh Bản Kiều dùng nét chữ "Lục phân bán thư" (pha trộn Lệ–Khải–Hành) để vẽ mấy cành trúc mảnh mai mọc vươn lên từ khe đá dựng đứng, gắn liền bài thơ "Cắn chặt núi xanh không buông lỏng" biểu dương khí tiết cương trực trước bão gió.',
      analysisEn: 'Signature work of Yangzhou Eccentric Zheng Banqiao. Slender ink bamboo springs from a vertical crag using calligraphic brushstrokes, paired with his famous verse praising steadfast roots against every wind.',
      hotspots: [
        { id: 'zszb-h1', titleVi: 'Lá trúc viết bằng nét chữ "Cá" (个) và "Giới" (介)', titleEn: 'Calligraphic Bamboo Leaves', descVi: 'Mỗi nét lá trúc sắc gọn như nhát dao, phân tầng đậm trước – nhạt sau để tạo không gian ba chiều.', descEn: 'Sharp dagger-like strokes layered in dark and pale ink create spatial depth.', brushTechnique: 'Trung phong phiết trúc', colophonZh: '', x: 50, y: 50 },
        { id: 'zszb-h2', titleVi: 'Tảng đá đứng bằng nét khô gầy', titleEn: 'Dry-Brush Vertical Crag', descVi: 'Khối đá mảnh, ít mực làm nền tôn bật sức sống dẻo dai của đốt trúc.', descEn: 'Lean dry-ink rock face highlights the resilient upright bamboo culms.', brushTechnique: 'Khô bút câu thạch', colophonZh: '', x: 50, y: 50 },
        { id: 'zszb-h3', titleVi: 'Thơ đề "Trúc Thạch" & Lối chữ Bản Kiều Thể', titleEn: 'Bamboo-and-Rock Poem in Banqiao Script', descVi: 'Bài thơ thất ngôn tuyệt cú kết hợp nét chữ lệch lạc đầy cá tính tạo bố cục Thi–Thư–Họa chặt chẽ.', descEn: 'Quatrain inscribed in Zheng\'s distinctive irregular script completes the visual balance.', brushTechnique: 'Lục phân bán thư', colophonZh: '咬定青山不放松，立根原在破岩中', x: 50, y: 50 }
      ]
    },
    {
      id: 'huangshan-tu-meiqing',
      titleVi: 'Hoàng Sơn Tùng Cốc Đồ',
      titleZh: '黄山松谷图',
      titleEn: 'Pine Valley of Mount Huang',
      artist: 'Mai Thanh (梅清)',
      dynasty: 'Thanh (cuối thế kỷ XVII)',
      medium: 'Mực và màu nhạt trên giấy',
      museum: 'Bảo tàng Thượng Hải',
      compositionType: 'hanging-scroll',
      analysisVi: 'Tác phẩm tiêu biểu của phái Hoàng Sơn (cùng Thạch Đào, Hoằng Nhân). Mai Thanh phá vỡ khuôn mẫu sơn thủy mô phỏng sách mẫu, dùng những đường nét uốn lượn mềm mại như mây khói kết hợp vách núi dựng đứng chọc trời và cây thông kỳ dị bám đá để tái hiện vẻ kỳ ảo thực địa của dãy Hoàng Sơn (An Huy).',
      analysisEn: 'Highlight of the Huangshan School. Breaking from orthodox manuals, Mei Qing pairs soaring granite peaks, swirling cloud ribbons, and gnarled pines to capture the surreal drama of Mount Huang.',
      hotspots: [
        { id: 'hstm-h1', titleVi: 'Đỉnh đá hoa cương vươn thẳng kiểu "Cao viễn"', titleEn: 'Soaring High-Distance Granite Peaks', descVi: 'Đường viền núi uốn lượn mềm mà sắc, kết hợp nét thuân thưa thoáng tạo cảm giác đá hoa cương nhẹ bẫng giữa mây.', descEn: 'Fluid contours and spare texture strokes make towering cliffs appear buoyant in mist.', brushTechnique: 'Quyển vân thuân biến thể', colophonZh: '', x: 50, y: 50 },
        { id: 'hstm-h2', titleVi: 'Tùng Hoàng Sơn vặn xoắn đầy biểu cảm', titleEn: 'Expressive Gnarled Huangshan Pines', descVi: 'Những cây thông cổ thụ mọc ngang vách đá với tán kim châm chấm tròn tạo nhịp điệu thị giác sống động.', descEn: 'Twisted horizontal pines with rhythmic dot clusters energize the mountain slopes.', brushTechnique: 'Huyền châm & Mật điểm', colophonZh: '', x: 50, y: 50 },
        { id: 'hstm-h3', titleVi: 'Biển mây trắng phân tầng thung lũng', titleEn: 'Layered Cloud Sea', descVi: 'Khoảng giấy trắng uốn lượn giữa các đỉnh núi tạo cảm giác độ sâu hàng nghìn mét của thung lũng Tùng Cốc.', descEn: 'Unpainted ribbons of mist separate peaks, amplifying the vertical drop of Pine Valley.', brushTechnique: 'Lưu bạch vân hải', colophonZh: '', x: 50, y: 50 }
      ]
    },
    {
      id: 'bajun-tu-langshining',
      titleVi: 'Bát Tuấn Đồ',
      titleZh: '八骏图',
      titleEn: 'Eight Steeds',
      artist: 'Lang Thế Ninh / Giuseppe Castiglione (郎世宁)',
      dynasty: 'Thanh (thời Ung Chính – Càn Long, thế kỷ XVIII)',
      medium: 'Mực và màu trên lụa',
      museum: 'Bảo tàng Cố Cung Đài Bắc',
      compositionType: 'hanging-scroll',
      analysisVi: 'Kiệt tác tiêu biểu của phong cách "Trung Tây hợp bích" tại Họa viện cung đình nhà Thanh. Họa sĩ truyền giáo người Ý Lang Thế Ninh kết hợp kỹ thuật giải phẫu học, sáng tối đổ bóng (chiaroscuro) và phối cảnh phương Tây cho tám con tuấn mã với bố cục liễu rủ, tảng đá và chất liệu lụa – màu khoáng truyền thống Trung Hoa.',
      analysisEn: 'Masterwork of Qing court Sino-European synthesis. Jesuit painter Giuseppe Castiglione combines European equine anatomy, chiaroscuro modeling, and perspective with traditional Chinese silk, mineral pigments, and willow-rock framing.',
      hotspots: [
        { id: 'bj-h1', titleVi: 'Giải phẫu học & Ánh sáng phương Tây trên lụa Trung Hoa', titleEn: 'European Anatomy and Shading on Silk', descVi: 'Cơ bắp, bờm và độ bóng lông ngựa được diễn tả bằng chuyển sắc sáng tối tinh tế không dùng đường viền đen cứng.', descEn: 'Musculature and glossy coats are modeled through subtle tonal shading rather than ink outlines.', brushTechnique: 'Tây pháp minh ám trên lụa', colophonZh: '', x: 50, y: 50 },
        { id: 'bj-h2', titleVi: 'Cây liễu già & Tảng đá theo bút pháp truyền thống', titleEn: 'Traditional Chinese Willow and Rocks', descVi: 'Phần cảnh quan xung quanh vẫn tuân thủ thuân pháp và nhịp điệu thư họa Trung Hoa để hợp nhãn quan Hoàng đế Thanh.', descEn: 'Surrounding rocks and weeping willows retain classical Chinese brushwork to harmonize with court taste.', brushTechnique: 'Trung Tây hợp bích', colophonZh: '', x: 50, y: 50 },
        { id: 'bj-h3', titleVi: 'Không gian chiều sâu phối cảnh một điểm tụ', titleEn: 'Linear Depth Recession', descVi: 'Kích thước ngựa và hàng cây thu nhỏ dần về hậu cảnh theo nguyên lý phối cảnh thị giác châu Âu.', descEn: 'Graduated scale of horses and distant trees applies European optical perspective.', brushTechnique: 'Thấu thị pháp', colophonZh: '', x: 50, y: 50 }
      ]
    },
    {
      id: 'gusu-fanhua-tu',
      titleVi: 'Cô Tô Phồn Hoa Đồ (Thịnh Thế Tư Sinh Đồ)',
      titleZh: '姑苏繁华图（盛世滋生图）',
      titleEn: 'Prosperous Suzhou',
      artist: 'Từ Dương (徐扬)',
      dynasty: 'Thanh (1759)',
      medium: 'Mực và màu trên giấy',
      museum: 'Bảo tàng Tỉnh Liêu Ninh',
      compositionType: 'handscroll',
      analysisVi: 'Cuộn tranh phong tục đô thị dài 12,25 m hoàn thành năm 1759 dâng Hoàng đế Càn Long, khắc họa toàn cảnh thành phố Tô Châu thời Khang–Càn thịnh thế từ núi Linh Nham, cầu Mộc Độc đến phố buôn bán Xương Môn và Hổ Khâu — ghi nhận hơn 12.000 nhân vật, 400 thuyền buôn và 260 cửa hiệu biển hiệu rõ chữ.',
      analysisEn: 'A 12.25-meter panoramic scroll completed in 1759 for Emperor Qianlong depicting High Qing Suzhou from Lingyan Hill to Changmen Gate and Tiger Hill—cataloging over 12,000 figures, 400 boats, and 260 labeled shops.',
      hotspots: [
        { id: 'gsfh-h1', titleVi: 'Khu thương mại Xương Môn & 260 biển hiệu cửa hàng', titleEn: 'Changmen Commercial Hub and 260 Shop Signs', descVi: 'Ghi chép chính xác như tư liệu lịch sử kinh tế về hơn 50 ngành nghề: tơ lụa, tiền trang, hiệu sách, cửa hàng trà và dược liệu.', descEn: 'Serves as an economic archive recording over 50 trades—silk shops, banks, bookstalls, tea houses, and apothecaries.', brushTechnique: 'Giới họa kiến trúc & Công bút', colophonZh: '', x: 50, y: 50 },
        { id: 'gsfh-h2', titleVi: 'Phối cảnh chim bay kết hợp trục tản điểm', titleEn: 'Aerial Perspective Meets Shifting Focus', descVi: 'Từ Dương khéo léo dung hòa phối cảnh phương Tây (từ Lang Thế Ninh) với cuộn tranh Tản điểm thấu thị kiểu "Thanh Minh Thượng Hà Đồ".', descEn: 'Merges European aerial recession with traditional multi-point handscroll continuity.', brushTechnique: 'Tản điểm kết hợp thấu thị', colophonZh: '', x: 50, y: 50 },
        { id: 'gsfh-h3', titleVi: 'Hệ thống kênh rạch & Hơn 400 thuyền buôn Đại Vận Hà', titleEn: 'Grand Canal Freight Network', descVi: 'Khắc họa sức sống vận tải đường thủy của đô thị giàu có bậc nhất Giang Nam thế kỷ XVIII.', descEn: 'Illustrates the bustling waterborne commerce of 18th-century Jiangnan\'s premier city.', brushTechnique: 'Tế tuyến thiết sắc', colophonZh: '', x: 50, y: 50 }
      ]
    }
  ];

  var V3_PAINT_IMGS = {
    "wuniu-tu": "assets/images/paintings/55_wuniu_tu.jpg",
    "zhaoye-bai-tu": "assets/images/paintings/56_zhaoye_bai_tu.jpg",
    "jiangxing-chuxue-tu": "assets/images/paintings/57_jiangxing_chuxue_tu.jpg",
    "tingqin-tu": "assets/images/paintings/58_tingqin_tu.jpg",
    "hanjiang-dudiao-tu": "assets/images/paintings/59_hanjiang_dudiao_tu.jpg",
    "jiulong-tu": "assets/images/paintings/60_jiulong_tu.jpg",
    "xishan-qingyuan-tu": "assets/images/paintings/61_xishan_qingyuan_tu.jpg",
    "molan-tu": "assets/images/paintings/62_molan_tu.jpg",
    "qiujiao-yinma-tu": "assets/images/paintings/63_qiujiao_yinma_tu.jpg",
    "yufu-tu": "assets/images/paintings/64_yufu_tu.jpg",
    "momei-tu": "assets/images/paintings/65_momei_tu.jpg",
    "taohuayuan-tu": "assets/images/paintings/66_taohuayuan_tu.jpg",
    "songyin-fangyou-tu": "assets/images/paintings/67_songyin_fangyou_tu.jpg",
    "hehua-shuiqin-tu": "assets/images/paintings/68_hehua_shuiqin_tu.jpg",
    "zhushi-zhengbanqiao": "assets/images/paintings/69_zhushi_zhengbanqiao.jpg",
    "huangshan-tu-meiqing": "assets/images/paintings/70_huangshan_tu_meiqing.jpg",
    "bajun-tu-langshining": "assets/images/paintings/71_bajun_tu_langshining.jpg",
    "gusu-fanhua-tu": "assets/images/paintings/72_gusu_fanhua_tu.jpg"
  };
  window.CCE_PAINTINGS = window.CCE_PAINTINGS || { masterpieces: [] };
  if (Array.isArray(window.CCE_PAINTINGS)) {
    window.CCE_PAINTINGS = { masterpieces: window.CCE_PAINTINGS };
  }
  var list = window.CCE_PAINTINGS.masterpieces = window.CCE_PAINTINGS.masterpieces || [];
  var seen = {};
  var i, j;
  for (i = 0; i < list.length; i++) { if (list[i] && list[i].id) seen[list[i].id] = true; }
  function mapEraId(dynStr) {
    var s = (dynStr || "").toLowerCase();
    if (s.indexOf("ngụy") >= 0 || s.indexOf("tấn") >= 0) return "weijin";
    if (s.indexOf("đường") >= 0 || s.indexOf("tùy") >= 0) return "suitang";
    if (s.indexOf("tống") >= 0 || s.indexOf("ngũ đại") >= 0 || s.indexOf("nam đường") >= 0) return "song";
    if (s.indexOf("nguyên") >= 0) return "yuan";
    if (s.indexOf("minh") >= 0) return "ming";
    return "qing";
  }
  var defaultSpots = [[26, 36], [52, 48], [76, 40], [42, 70]];
  for (i = 0; i < PAINTINGS_V3.length; i++) {
    var p = PAINTINGS_V3[i];
    if (seen[p.id]) continue;
    var eraId = mapEraId(p.dynasty);
    var hsOut = [];
    for (j = 0; j < (p.hotspots || []).length; j++) {
      var h = p.hotspots[j];
      var coords = defaultSpots[j % defaultSpots.length];
      hsOut.push({
        id: h.id,
        x: (h.x && h.x !== 50) ? h.x : coords[0],
        y: (h.y && h.y !== 50) ? h.y : coords[1],
        titleVi: h.titleVi,
        titleEn: h.titleEn || h.titleVi,
        titleZh: h.colophonZh || h.brushTechnique || "笔墨细节",
        pinyin: "",
        category: h.brushTechnique || "Bút pháp",
        categoryEn: h.brushTechnique || "Brushwork",
        detail: h.descVi,
        detailEn: h.descEn || h.descVi,
        descVi: h.descVi,
        descEn: h.descEn || h.descVi,
        brushTechnique: h.brushTechnique || "",
        colophonZh: h.colophonZh || ""
      });
    }
    var artNameStr = String(p.artist || "");
    var artZh = (artNameStr.match(/\(([^)]+)\)/) || [])[1] || "";
    var artClean = artNameStr.replace(/\s*\([^)]*\)/g, "").trim();
    var genreId = p.compositionType === "handscroll" ? "landscape" : "literati";
    list.push({
      id: p.id,
      titleVi: p.titleVi,
      titleZh: p.titleZh,
      titleEn: p.titleEn,
      pinyin: p.titleZh || "",
      eraId: eraId,
      dynasty: { eraId: eraId, nameZh: p.titleZh || "", nameVi: p.dynasty, nameEn: p.dynasty },
      creationDate: p.dynasty,
      genreId: genreId,
      genres: [genreId],
      genreLabel: p.compositionType === "handscroll" ? "Trường quyển Kinh điển" : "Quốc họa Cổ điển",
      genreLabelEn: p.compositionType === "handscroll" ? "Classical Handscroll" : "Classical Painting",
      material: p.medium,
      dimensions: p.medium || "Tranh cổ truyền bảo tồn",
      museum: p.museum,
      attribution: "Tác phẩm Truyền thế Bảo tàng — Nguồn Tư liệu Công cộng",
      image: V3_PAINT_IMGS[p.id] || "assets/images/paintings/22_qianli_jiangshan.jpg",
      compositionType: p.compositionType,
      artist: {
        nameVi: artClean,
        nameEn: artClean,
        nameZh: artZh || artClean,
        pinyin: artClean,
        school: p.dynasty,
        bio: artClean + " (" + p.dynasty + ") — Tác giả gắn liền với bộ sưu tập lưu trữ tại " + p.museum + ".",
        bioEn: artClean + " (" + p.dynasty + ") — Master preserved in the collection of " + p.museum + "."
      },
      featuredQuote: {
        zh: p.titleZh,
        vi: p.analysisVi,
        en: p.analysisEn,
        author: artClean,
        source: p.museum
      },
      analysis: {
        historicalBackground: "Tác phẩm thuộc giai đoạn " + p.dynasty + " do " + artClean + " sáng tác bằng chất liệu " + String(p.medium || "").toLowerCase() + ", hiện lưu trữ tại " + p.museum + ".",
        artistBiography: "",
        artisticComposition: p.analysisVi,
        brushworkAndInk: hsOut.map(function (item) { return item.titleVi + ": " + item.descVi; }).join(" "),
        threeDistances: "",
        culturalSymbolism: "",
        philosophicalMeaning: "",
        artisticLegacy: ""
      },
      analysisEn: {
        historicalBackground: "Attributed to " + artClean + " (" + p.dynasty + "), executed in " + String(p.medium || "ink and color").toLowerCase() + " and preserved at " + p.museum + ".",
        artistBiography: "",
        artisticComposition: p.analysisEn,
        brushworkAndInk: hsOut.map(function (item) { return item.titleEn + ": " + item.descEn; }).join(" "),
        threeDistances: "",
        culturalSymbolism: "",
        philosophicalMeaning: "",
        artisticLegacy: ""
      },
      hotspotAnnotations: hsOut,
      hotspots: hsOut
    });
    seen[p.id] = true;
  }
})();
