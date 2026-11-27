/* ============================================================================
 * CHINESE CULTURE EXPLORER (CCE v12.0) — GOI 04
 * 30 Ho So Kinh Lup Giam Dinh 3.2x (15 Quoc Hoa + 15 Quoc Bao Khao Co)
 * Pure ES5 IIFE — Zero Bundler — 100% EN Parity — De-AI Lint Clean
 * ============================================================================ */
(function () {
  "use strict";

  var PAINTINGS_HOTSPOTS_15 = [
    {
      slug: "qianli-jiangshan",
      titleVi: "Thiên Lý Giang Sơn Đồ — Vương Hy Mạnh",
      titleEn: "A Thousand Li of Rivers and Mountains — Wang Ximeng",
      titleZh: "千里江山图 — 王希孟",
      tombstone: {
        dynasty: "Bắc Tống (niên hiệu Chính Hòa thứ 3, 1113)",
        medium: "Màu khoáng thạch thanh lục trên lụa quyên (Thanh lục sơn thủy)",
        dimensions: "51,5 cm × 1191,5 cm",
        museum: "Bảo tàng Cố Cung Bắc Kinh (Palace Museum, Beijing)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Thạch thanh / Lam đồng khoáng (Azurite, Cu3(CO3)2(OH)2)",
          nameEn: "Mineral Azurite (Cu3(CO3)2(OH)2)",
          scientificNoteVi: "Bột tinh thể azurite nghiền phân cỡ hạt kết hợp keo da bò được phết nhiều lớp chồng phủ trên đỉnh núi. Kích thước hạt lớn giữ độ bão hòa lam sẫm dưới ánh sáng phản xạ, tạo độ sâu quang học đặc trưng của hệ màu Thanh lục Bắc Tống.",
          scientificNoteEn: "Size-graded azurite mineral crystals bound in animal-hide glue are layered repeatedly across mountain ridges. Coarser pigment particles preserve deep blue chromatic saturation under reflected light, producing the signature optical depth of Northern Song blue-green landscapes."
        },
        {
          nameVi: "Thạch lục / Khổng tước thạch (Malachite, Cu2CO3(OH)2)",
          nameEn: "Mineral Malachite (Cu2CO3(OH)2)",
          scientificNoteVi: "Khoáng đồng cacbonat màu lục phỉ thúy chuyển sắc từ đậm ở sườn dốc sang nhạt dần tại chân núi nhờ kỹ thuật rửa nước phân lớp. Hợp chất ổn định hóa học cao, giúp mặt lụa vẫn giữ sắc lục rực rỡ sau hơn chín thế kỷ.",
          scientificNoteEn: "Copper carbonate malachite pigment transitions from saturated emerald on upper slopes to pale green along foothills via graded water washes. Its chemical stability preserves luminous mineral greens across the silk ground after more than nine centuries."
        },
        {
          nameVi: "Giả thạch (Hematite, Fe2O3) và Mực tùng yên",
          nameEn: "Red Ochre / Hematite (Fe2O3) and Pine-Soot Ink",
          scientificNoteVi: "Oxit sắt đỏ tạo lớp lót ấm dưới sườn núi và bờ cát, trung hòa sắc lạnh của đồng khoáng. Nét mực tùng yên vẽ khung núi và viền sóng nước trước khi lên màu, giữ kết cấu nét sắc gọn dưới lớp khoáng dày.",
          scientificNoteEn: "Iron oxide ochre forms warm underlayers along foothills and sandbanks, balancing the cool copper minerals. Pine-soot ink outlines ridges and water ripples prior to coloring, maintaining crisp structural definition beneath thick mineral coats."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "政和三年闰四月八日赐，希孟年十八岁，昔在画学为生徒",
          pinyin: "Zhenghe san nian run si yue ba ri ci, Ximeng nian shiba sui, xi zai huaxue wei shengtu",
          translationVi: "Đề bạt của Thái Kinh (1113): Ban tặng ngày mùng 8 tháng 4 nhuận năm Chính Hòa thứ 3; Hy Mạnh năm 18 tuổi, từng là học trò Viện Họa học.",
          translationEn: "Colophon by Cai Jing (1113): Bestowed on the eighth day of the intercalary fourth month of Zhenghe 3; Ximeng, aged eighteen, was formerly a student at the Imperial Painting Academy."
        },
        {
          sealZh: "乾隆御览之宝 / 石渠宝笈 / 宣统御览之宝",
          pinyin: "Qianlong yulan zhi bao / Shiqu Baoji / Xuantong yulan zhi bao",
          translationVi: "Các ấn giám định nội phủ triều Thanh xác nhận cuộn tranh từng lưu trữ tại Thạch Cừ Bảo Cấp và cung điện Càn Long, Tuyên Thống.",
          translationEn: "Qing imperial inspection seals certifying the handscroll's cataloging in the Shiqu Baoji imperial inventory and viewing by Emperors Qianlong and Xuantong."
        }
      ],
      zoomHotspots: [
        {
          xPct: 18,
          yPct: 44,
          titleVi: "Cầu gỗ trường kiều bắc qua vịnh rộng",
          titleEn: "Long Timber Cross-Bay Bridge and Pavilion",
          detailVi: "Ở độ phóng đại 3.2x, kết cấu trụ cầu gỗ chống chéo và đình nghỉ chữ thập giữa nhịp hiện rõ từng nét bút chỉ tiểu khải mảnh dưới 0,3 mm. Các nhân vật đi bộ chỉ cao khoảng 3 mm nhưng vẫn phân biệt được áo dài, nón và dáng gánh hàng vượt sông trong bố cục viễn cận.",
          detailEn: "At 3.2x magnification, cross-braced timber piers and the central cruciform pavilion reveal hairline ink brushwork under 0.3 mm wide. Walking figures measure roughly 3 mm tall yet still distinguish robes, hats, and shoulder-pole porters crossing the river in receding perspective."
        },
        {
          xPct: 42,
          yPct: 30,
          titleVi: "Phép điểm thạch thanh và chuyển sắc phi mã thuẫn",
          titleEn: "Layered Azurite Cresting and Hemp-Fiber Texture",
          detailVi: "Vương Hy Mạnh dùng nét phi mã thuẫn (nét xước sợi gai) bằng mực loãng dựng khối sườn đá, sau đó quét giả thạch ấm ở chân núi rồi chồng 5 lớp thạch lục và thạch thanh lên sống đỉnh. Kỹ thuật năm lớp màu khoáng tạo cảm giác dãy núi phát sáng tự thân trên nền lụa cổ.",
          detailEn: "Wang Ximeng models rocky flanks with diluted hemp-fiber ink strokes, lays warm ochre along the base, and applies five successive coats of malachite and azurite toward the crests. This five-layer mineral buildup gives the ridges an internal luminosity on aged silk."
        },
        {
          xPct: 64,
          yPct: 58,
          titleVi: "Cối xay nước thủy lực bên khe suối sơn cước",
          titleEn: "Water-Powered Mill along a Mountain Stream",
          detailVi: "Góc khe núi ẩn hiện một nhà cối xay nước chạy bằng guồng gỗ thẳng đứng, dẫn dòng từ thác nhỏ chảy ngang mái ngói xám. Chi tiết kỹ thuật nông nghiệp này phản ánh đời sống thực tế vùng Giang Nam thời Bắc Tống, kết nối cảnh quan lý tưởng với hạ tầng sản xuất đương đại.",
          detailEn: "Tucked inside a mountain gorge stands a water-powered mill driven by a vertical wooden wheel fed by a cascading stream beside gray tiled roofs. This agricultural engineering detail anchors the idealized blue-green vista in Northern Song Jiangnan rural infrastructure."
        },
        {
          xPct: 84,
          yPct: 48,
          titleVi: "Bóng thuyền chài và vân sóng lưỡi câu",
          titleEn: "Fishing Skiffs and Fine Hooked Wave Lines",
          detailVi: "Mặt hồ rộng được xử lý bằng những đường mực cực mảnh song song gọi là thủy văn, thưa dần về phía chân trời để chừa không gian thở cho bố cục gần 12 mét. Những chiếc thuyền buồm nhỏ chấm trắng bột sò (cáp phấn) tạo điểm nhấn nhịp điệu xuyên suốt trường quyển.",
          detailEn: "Expansive lake surfaces are rendered with ultra-fine parallel ink wave lines that thin toward the horizon, providing visual breathing room across the nearly 12-meter scroll. Tiny skiffs accented in shell-white pigment establish a rhythmic cadence along the composition."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Mở trường quyển dài 11,9 mét từ phải sang trái để cảm nhận sáu cụm núi cao nối tiếp nhau qua mặt hồ mở rộng theo nhịp khai, thừa, chuyển, hợp.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x vào đỉnh núi và cầu gỗ để quan sát độ hạt khoáng thạch thanh, thạch lục chồng lên nền mực giả thạch và nhân vật cao 3 mm.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Đọc đề bạt năm 1113 của Thái Kinh ở vĩ chỉ và đối chiếu với chuẩn Viện Họa học thời Tống Huy Tông."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Unroll the 11.9-meter scroll from right to left to trace six towering mountain clusters alternating with open lake vistas in rhythmic musical progression.",
        "Step 2 (Material & Brushwork Inspection): Magnify ridges and timber bridges to 3.2x to examine granular azurite and malachite coats layered over ochre ink underdrawing and 3 mm figures.",
        "Step 3 (Seals & Historical Context): Read Cai Jing's 1113 colophon on the endpaper and situate the scroll within Emperor Huizong's Imperial Painting Academy."
      ]
    },
    {
      slug: "qingming-shanghe",
      titleVi: "Thanh Minh Thượng Hà Đồ — Trương Trạch Đoan",
      titleEn: "Along the River During the Qingming Festival — Zhang Zeduan",
      titleZh: "清明上河图 — 张择端",
      tombstone: {
        dynasty: "Bắc Tống (cuối thế kỷ XI – đầu thế kỷ XII)",
        medium: "Mực và màu đạm thái trên lụa quyên",
        dimensions: "24,8 cm × 528,7 cm",
        museum: "Bảo tàng Cố Cung Bắc Kinh (Palace Museum, Beijing)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Mực tùng yên phân cấp ngũ sắc (Carbon Soot Ink)",
          nameEn: "Five-Tone Pine-Soot Carbon Ink",
          scientificNoteVi: "Trương Trạch Đoan dùng chủ đạo mực tùng yên đậm nhạt năm tầng sắc độ trên lụa quyên dệt khít. Độ bám của muội than mịn cho phép vẽ sắc nét hàng trăm thanh mộng gỗ cầu Hồng Kiều và hơn 800 nhân vật mà không bị nhòe sợi lụa.",
          scientificNoteEn: "Zhang Zeduan relies primarily on five tonal gradations of fine pine-soot ink over tightly woven silk. The high adhesion of carbon particles enables crisp rendering of hundreds of bridge timbers and over 800 figures without bleeding into the silk weave."
        },
        {
          nameVi: "Màu đạm thái: Giả thạch (Fe2O3) và Đằng hoàng (Gamboge)",
          nameEn: "Light Wash Pigments: Hematite Ochre (Fe2O3) and Gamboge",
          scientificNoteVi: "Các lớp rửa màu cực nhạt bằng giả thạch và nhựa cây đằng hoàng được điểm nhẹ lên mái ngói, mạn thuyền và y phục thương nhân. Tỷ lệ sắc tố thấp giữ nguyên bầu không khí sương sớm và tính tài liệu khách quan của kinh đô Biện Kinh.",
          scientificNoteEn: "Subtle washes of iron-oxide ochre and plant-derived gamboge lightly tint roof tiles, boat hulls, and merchant garments. Low pigment opacity preserves the misty morning atmosphere and documentary clarity of the Northern Song capital Bianjing."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "翰林张择端，字正道，东武人也……专工界画",
          pinyin: "Hanlin Zhang Zeduan, zi Zhengdao, Dongwu ren ye... zhuangong jiehua",
          translationVi: "Đề bạt của Trương Trước (triều Kim, 1186): Hàn lâm Trương Trạch Đoan, tự Chính Đạo, người Đông Vũ, chuyên tinh nghệ thuật giới họa (vẽ kiến trúc bằng thước kẻ).",
          translationEn: "Colophon by Zhang Zhu (Jin dynasty, 1186): Hanlin academician Zhang Zeduan, courtesy name Zhengdao, native of Dongwu, excelled specifically in ruled-line architectural painting (jiehua)."
        },
        {
          sealZh: "石渠宝笈 / 宝笈三编 / 嘉庆御览之宝",
          pinyin: "Shiqu Baoji / Baoji Sanbian / Jiaqing yulan zhi bao",
          translationVi: "Ấn kiểm kê triều Thanh ghi nhận bức tranh được đưa vào bộ Thạch Cừ Bảo Cấp Tam Biên dưới thời Hoàng đế Gia Khánh.",
          translationEn: "Qing palace inventory seals recording the scroll's inclusion in the Third Compilation of Shiqu Baoji during Emperor Jiaqing's reign."
        }
      ],
      zoomHotspots: [
        {
          xPct: 48,
          yPct: 52,
          titleVi: "Kết cấu cầu vòm gỗ không trụ Hồng Kiều",
          titleEn: "Pierless Cantilevered Timber Arch of Rainbow Bridge",
          detailVi: "Cầu Hồng Kiều bắc qua sông Biện bằng hệ khung gỗ đan chồng (quán mộc củng kiều) liên kết bằng dây thừng và mộng cài mà không cần trụ đá giữa dòng. Dưới gầm cầu, các thủy thủ đang khẩn trương hạ cột buồm và đẩy sào tránh va chạm vào dầm cầu trước tiếng hò reo của đám đông trên thành lan can.",
          detailEn: "Rainbow Bridge spans the Bian River using an interlocking woven-timber arch bound with lashings and mortise joints without mid-stream stone piers. Beneath the arch, boatmen urgently lower a mast and brace poles to clear the beams as spectators shout warnings from the railings."
        },
        {
          xPct: 22,
          yPct: 56,
          titleVi: "Đoàn lừa thồ than tiến vào ngoại ô Biện Kinh",
          titleEn: "Charcoal-Laden Donkey Train Entering Suburbs",
          detailVi: "Đoạn mở đầu bên phải miêu tả không gian ngoại thành tĩnh lặng với những hàng liễu non chớm lộc tiết Thanh Minh. Năm con lừa thồ bao than củi đi dọc đường đất dưới sự dẫn dắt của hai người phu, tạo nhịp chuyển tiếp tự nhiên từ nông thôn yên bình vào khu bến cảng sầm uất.",
          detailEn: "The right-hand opening depicts quiet eastern suburbs lined with budding Qingming willows. Five donkeys carrying charcoal sacks trudge along a dirt track guided by two drovers, establishing a gradual transition from rural calm into the bustling river port."
        },
        {
          xPct: 72,
          yPct: 42,
          titleVi: "Cổng thành Biện Kinh và lầu canh thiếu lính trực",
          titleEn: "Bianjing City Gate and Unattended Watchtower",
          detailVi: "Cổng thành gạch đất nện dựng cao với mái ngói hai tầng theo đúng quy chế kiến trúc Tống, nhưng đội lính gác gần như vắng bóng và trống canh bỏ trống. Nhiều nhà sử học nghệ thuật nhận định Trương Trạch Đoan đã lồng ghép lời cảnh báo kín đáo về sự lỏng lẻo phòng thủ cuối thời Bắc Tống.",
          detailEn: "The rammed-earth and brick city gate rises with a double-eaved Song pavilion roof, yet sentries are conspicuously absent and the signal drum sits unattended. Art historians interpret this detail as Zhang Zeduan's subtle civic warning regarding lax urban defense in late Northern Song."
        },
        {
          xPct: 88,
          yPct: 55,
          titleVi: "Hiệu thuốc Triệu Thái Thừa Gia và tửu lâu Tôn Dương Chính Điếm",
          titleEn: "Zhao Taicheng Apothecary and Sun Yang Tavern",
          detailVi: "Khu phố nội thành dày đặc biển hiệu viết chữ Khải rõ nét như hiệu thuốc họ Triệu (赵太丞家), quầy xem bói, xưởng làm bánh và tửu lâu treo cờ vải xanh. Chi tiết biển hiệu, xe cút kít một bánh và kiệu phu cung cấp tư liệu thị giác trực tiếp về thương nghiệp đô thị thế kỷ XII.",
          detailEn: "Inner-city streets feature legible regular-script signboards including the Zhao Taicheng apothecary, fortune-telling stalls, bakeries, and a multistory tavern flying cloth banners. These inscriptions, wheelbarrows, and sedan chairs provide direct visual documentation of twelfth-century urban commerce."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Quan sát cấu trúc ba hồi kịch tính dọc 5,28 mét: ngoại ô Thanh Minh tĩnh lặng, cao trào thương thuyền tại cầu Hồng Kiều và khu phố nội thành sầm uất.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x vào mộng gỗ cầu Hồng Kiều và chữ trên biển hiệu phố để kiểm chứng kỹ thuật giới họa chuẩn xác đến từng milimét.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Đọc đề bạt năm 1186 của Trương Trước và đối chiếu mô tả đô thị Biện Kinh với sách Đông Kinh Mộng Hoa Lục (1147) của Mạnh Nguyên Lão."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Trace the three-act narrative across 5.28 meters: quiet Qingming suburbs, high-tension river traffic at Rainbow Bridge, and dense inner-city commercial avenues.",
        "Step 2 (Material & Brushwork Inspection): Zoom to 3.2x on the Rainbow Bridge timber joinery and street signboards to inspect millimeter-precise ruled-line brushwork.",
        "Step 3 (Seals & Historical Context): Read Zhang Zhu's 1186 colophon and cross-reference Bianjing's urban details with Meng Yuanlao's 1147 memoir Dongjing Menghualu."
      ]
    },
    {
      slug: "fuchun-shanju",
      titleVi: "Phú Xuân Sơn Cư Đồ — Hoàng Công Vọng",
      titleEn: "Dwelling in the Fuchun Mountains — Huang Gongwang",
      titleZh: "富春山居图 — 黄公望",
      tombstone: {
        dynasty: "Nguyên (niên hiệu Chí Chính thứ 7–10, 1347–1350)",
        medium: "Thủy mặc thuần túy trên giấy tỳ ma (giấy vỏ cây dâu tằm)",
        dimensions: "Thặng Sơn Đồ: 31,8 cm × 51,4 cm; Vô Dụng Sư Quyển: 33 cm × 636,9 cm",
        museum: "Bảo tàng Tỉnh Chiết Giang (Hàng Châu) & Bảo tàng Cố Cung Đài Bắc"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Mực du yên (Oil-Soot Ink) pha nhiều nồng độ nước",
          nameEn: "Multi-Dilution Oil-Soot Ink",
          scientificNoteVi: "Hoàng Công Vọng vận dụng mực du yên đen bóng kết hợp kỹ thuật bút khô (khô bút) và mực ướt đan xen trong suốt 3–4 năm vẽ gián đoạn. Sự chồng lớp mực đậm trên mực nhạt đã khô tạo nên độ xốp giàu chiều sâu mà không cần bất kỳ sắc tố khoáng nào.",
          scientificNoteEn: "Huang Gongwang deploys lustrous oil-soot ink through alternating dry-brush and wet-wash layers applied intermittently over three to four years. Superimposing dense ink over dried lighter washes produces tactile geological depth without mineral color."
        },
        {
          nameVi: "Giấy bì chỉ / Ma chỉ thủ công thời Nguyên",
          nameEn: "Yuan-Dynasty Mulberry-Bast Paper",
          scientificNoteVi: "Sợi vỏ cây dâu tằm (chử bì) có độ thấm hút cao và bề mặt hơi nhám, giữ lại vệt mực khô tách sợi gọi là phi bạch (trắng bay). Đặc tính giấy giúp lưu dấu trực tiếp tốc độ, áp lực cổ tay và chuyển động xoay ngòi bút lông dê.",
          scientificNoteEn: "Mulberry-bast paper fibers offer high absorbency and a slightly toothy surface that captures split-hair dry-brush strokes known as flying white (feibai). The paper directly records brush velocity, wrist pressure, and twisting goat-hair movements."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "至正七年，仆归富春山居，无用师偕往……至正十年，书于云间夏氏知止堂",
          pinyin: "Zhizheng qi nian, pu gui Fuchun shanju, Wuyong Shi xie wang... Zhizheng shi nian, shu yu Yunjian Xia shi Zhizhi Tang",
          translationVi: "Tự đề của Hoàng Công Vọng (1350): Năm Chí Chính thứ 7, ta trở về ở ẩn núi Phú Xuân cùng Vô Dụng Sư; viết lời bạt năm thứ 10 tại Tri Chỉ Đường họ Hạ.",
          translationEn: "Huang Gongwang's own colophon (1350): In the seventh year of Zhizheng, I returned to dwell in the Fuchun Mountains accompanied by Master Wuyong; inscribed in the tenth year at the Zhizhi Hall."
        },
        {
          sealZh: "画中兰亭 / 董其昌印 / 沈周题跋",
          pinyin: "Huazhong Lanting / Dong Qichang yin / Shen Zhou tiba",
          translationVi: "Các đề bạt và ấn giám của Thẩm Chu (1488) cùng Đổng Kỳ Xương (1596), tôn vinh trường quyển là bài Lan Đình Tập Tự trong giới hội họa thủy mặc.",
          translationEn: "Colophons and seals by Ming masters Shen Zhou (1488) and Dong Qichang (1596), praising the handscroll as the Lanting Preface of ink landscape painting."
        }
      ],
      zoomHotspots: [
        {
          xPct: 16,
          yPct: 46,
          titleVi: "Vết cháy lịch sử năm 1650 chia đôi Thặng Sơn Đồ",
          titleEn: "1650 Fire-Damaged Seam Separating Remaining Mountain",
          detailVi: "Năm 1650, nhà sưu tầm Ngô Hồng Dụ trước lúc lâm chung sai đốt bức tranh để tuẫn táng; cháu ông là Ngô Tĩnh Am giật khỏi lửa nhưng cuộn tranh đã tách thành hai đoạn. Soi kính lúp 3.2x ở rìa phải Vô Dụng Sư Quyển thấy rõ vết xém giấy và mối nối bồi lụa cổ của thợ phục chế đầu triều Thanh.",
          detailEn: "In 1650, dying collector Wu Hongyu ordered the scroll burned as a funerary offering; his nephew snatched it from the flames after it split into two sections. At 3.2x magnification along the right edge of Master Wuyong Scroll, scorched paper fibers and early Qing mounting repairs remain visible."
        },
        {
          xPct: 38,
          yPct: 35,
          titleVi: "Trường phi mã thuẫn và điểm đài mực đậm",
          titleEn: "Long Hemp-Fiber Strokes and Moss Dots",
          detailVi: "Hoàng Công Vọng kết hợp nét phi mã thuẫn kéo dài uyển chuyển theo sườn núi thấp với các chấm rêu (điểm đài) ngang bằng bút nghiêng chứa mực đặc. Trình tự vẽ mực nhạt dựng xương rồi mới chấm mực đậm tạo nhịp điệu thư pháp ngay trên mặt sườn đồi đất Phú Xuân.",
          detailEn: "Huang Gongwang pairs long, undulating hemp-fiber strokes along rolling hills with horizontal moss dots loaded with dense black ink. Laying pale ink contours before stamping dark moss dots embeds calligraphic rhythm directly into the Fuchun terrain."
        },
        {
          xPct: 62,
          yPct: 58,
          titleVi: "Mặt sông trống trải theo pháp lưu bạch",
          titleEn: "Open River Expanse via Deliberate Unpainted Void",
          detailVi: "Quãng giữa trường quyển mở ra mặt sông Phú Xuân mênh mông hầu như không chấm mực, chỉ điểm một mũi đất cát thấp, vài bụi lau sậy và con thuyền câu đơn độc. Kỹ thuật lưu bạch biến khoảng giấy trống thành ánh nước lặng và tạo đối trọng cho khối núi đồ sộ hai bên.",
          detailEn: "The scroll's midsection opens onto a wide Fuchun River expanse left largely unpainted, punctuated only by a low sandspit, reed tufts, and a solitary fishing boat. This calculated void transforms blank paper into still water and balances the massive flanking peaks."
        },
        {
          xPct: 82,
          yPct: 40,
          titleVi: "Cụm tùng bách đỉnh núi và mái am tranh ẩn sĩ",
          titleEn: "Summit Pines and Secluded Thatched Hermitage",
          detailVi: "Cụm thông già và tùng bách trên gò cao được vẽ bằng nét bút tròn gãy gọn kiểu chữ Triện và Lệ, xen kẽ mái nhà tranh đơn sơ gần bờ nước. Cách giản lược chi tiết kiến trúc thành vài nét chấm phá thể hiện trọn vẹn tinh thần văn nhân họa thời Nguyên: trọng bút ý hơn tả thực hình dáng.",
          detailEn: "Old pines and cypresses atop the knoll are drawn with rounded, resilient strokes derived from seal and clerical calligraphy, framing a modest thatched studio near the shore. Distilling architecture into a few expressive marks embodies Yuan literati painting's primacy of brushwork over literal likeness."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Đọc liền mạch hai phần Thặng Sơn Đồ (Hàng Châu) và Vô Dụng Sư Quyển (Đài Bắc) như một trường quyển thống nhất mô tả sông Phú Xuân qua bốn mùa biến ảo.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x để phân biệt lớp mực loãng dựng hình bên dưới với nét bút khô phi bạch và chấm rêu mực đậm phủ lên sau cùng.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Đọc lời tự đề năm 1350 của Hoàng Công Vọng ở tuổi 81 và đối chiếu với chuẩn thẩm mỹ Tứ Đại Gia thời Nguyên."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Mentally reunite Remaining Mountain (Hangzhou) and Master Wuyong Scroll (Taipei) as one continuous panorama of the Fuchun River.",
        "Step 2 (Material & Brushwork Inspection): Magnify to 3.2x to separate pale structural under-washes from final dry-brush flying-white strokes and dense ink moss dots.",
        "Step 3 (Seals & Historical Context): Read Huang Gongwang's 1350 colophon written at age 81 and contextualize the scroll among the Four Masters of the Yuan dynasty."
      ]
    },
    {
      slug: "luoshenfu-tu",
      titleVi: "Lạc Thần Phú Đồ — Cố Khải Chi (Tống mô bản)",
      titleEn: "Nymph of the Luo River — After Gu Kaizhi (Song Copy)",
      titleZh: "洛神赋图 — 顾恺之（宋摹本）",
      tombstone: {
        dynasty: "Nguyên tác Đông Tấn (~345–406), mô bản thời Tống (thế kỷ XII)",
        medium: "Mực và màu khoáng nặng trên lụa quyên",
        dimensions: "27,1 cm × 572,8 cm (bản Giáp Cố Cung Bắc Kinh)",
        museum: "Bảo tàng Cố Cung Bắc Kinh (Palace Museum, Beijing)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Chu sa (Cinnabar, HgS) và Duyên đan (Red Lead, Pb3O4)",
          nameEn: "Cinnabar (HgS) and Red Lead (Pb3O4)",
          scientificNoteVi: "Sắc tố thủy ngân sunfua và oxit chì đỏ tạo sắc đỏ thắm trên lọng che, áo bào Tào Thực và dải lụa xe vân long. Sự tương phản giữa đỏ chu sa và xanh thạch lục giữ nhịp thị giác xuyên suốt chuỗi cảnh tự sự cổ điển.",
          scientificNoteEn: "Mercuric sulfide cinnabar and red lead oxide produce vivid vermilion across canopies, Cao Zhi's robes, and cloud-dragon chariot ribbons. Their contrast against mineral malachite sustains visual cadence across the sequential narrative."
        },
        {
          nameVi: "Thạch lục (Malachite) và Phấn chì trắng (Lead White, 2PbCO3·Pb(OH)2)",
          nameEn: "Malachite and Lead White (2PbCO3·Pb(OH)2)",
          scientificNoteVi: "Phấn chì trắng điểm khuôn mặt Lạc Thần, mây cuộn và cánh chim hạc, trong khi thạch lục phết phẳng lên gò núi kiểu cổ phác. Một số vùng phấn chì đã oxy hóa nhẹ sang xám nâu, chứng thực niên đại cổ của bản mô Tống.",
          scientificNoteEn: "Lead white highlights the nymph's face, scrolling clouds, and cranes, while flat malachite washes fill archaic hillocks. Mild darkening of lead white through sulfurization attests to the Song copy's historical age."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "翩若惊鸿，婉若游龙，荣曜秋菊，华茂春松",
          pinyin: "Pian ruo jinghong, wan ruo youlong, rongyao qiuju, huamao chunsong",
          translationVi: "Trích phú Lạc Thần của Tào Thực (222 SCN) viết xen kẽ trên tranh: Nhẹ nhàng như chim hồng giật mình, uyển chuyển như rồng lượn, rực rỡ tựa cúc thu, tươi tốt như tùng xuân.",
          translationEn: "Excerpt from Cao Zhi's 222 CE rhapsody inscribed between scenes: Lithe as a startled swan, graceful as a gliding dragon, radiant as autumn chrysanthemum, lush as spring pine."
        },
        {
          sealZh: "乾隆鉴赏 / 三希堂精鉴玺 / 宜子孙",
          pinyin: "Qianlong jianshang / Sanxitang jingjian xi / Yizisun",
          translationVi: "Bộ tam ấn tinh giám của Hoàng đế Càn Long tại Tam Hy Đường, đánh dấu bản Giáp là bản mô Lạc Thần Phú Đồ tiêu biểu nhất trong nội phủ.",
          translationEn: "Emperor Qianlong's Three Rarities Studio connoisseurship seal triad, designating Copy A as the premier palace version of the Nymph of the Luo River."
        }
      ],
      zoomHotspots: [
        {
          xPct: 20,
          yPct: 50,
          titleVi: "Nét vẽ xuân tàm thổ ty (tằm xuân nhả tơ)",
          titleEn: "Spring-Silkworm-Spinning-Silk Linework",
          detailVi: "Phóng đại 3.2x vào dải áo tung bay của Lạc Thần cho thấy nét bút trung phong đều đặn, mảnh dài và liền mạch không có độ nhấn đậm nhạt đột ngột. Lối vẽ cổ điển này gọi là cao cổ du ty miêu, truyền tải chuyển động nhẹ bẫng trên mặt nước sông Lạc theo đúng mỹ học Lục Triều.",
          detailEn: "At 3.2x magnification, the nymph's fluttering ribbons reveal centered-tip ink lines of uniform, continuous thickness without abrupt tonal swells. Known as gossamer-silk drawing, this archaic linework conveys weightless motion across the Luo River in Six Dynasties taste."
        },
        {
          xPct: 44,
          yPct: 36,
          titleVi: "Tỷ lệ nhân đại ư sơn (người lớn hơn núi)",
          titleEn: "Archaic 'Figures Larger Than Mountains' Proportion",
          detailVi: "Các dãy núi phía sau được tạo hình thấp gọn như gò đất xếp chồng và cây cối vẽ theo lối tán lá xòe như cánh tay mở (thân tí bố chỉ). Tỷ lệ người lớn hơn núi, nước không ngập thuyền phản ánh giai đoạn sơn thủy còn đóng vai trò phông nền phân cảnh trong hội họa thế kỷ IV.",
          detailEn: "Background hills appear as low stacked mounds while trees spread stiffly like outstretched fingers. This archaic convention—where figures exceed mountain scale—marks the fourth-century stage when landscape functioned primarily as a narrative stage divider."
        },
        {
          xPct: 68,
          yPct: 48,
          titleVi: "Xe vân xa sáu rồng và đoàn thủy thần hộ tống",
          titleEn: "Six-Dragon Cloud Chariot and Aquatic Retinue",
          detailVi: "Đoạn cao trào mô tả Lạc Thần bước lên xe mây do sáu con rồng uốn lượn kéo qua sóng nước, bao quanh bởi cá kình, chim nước và thần gió. Các đường mây xoắn ốc dạng chữ C kế thừa trực tiếp mô-típ sơn mài và đá chạm thời Hán–Ngụy.",
          detailEn: "The climactic passage depicts the nymph boarding a cloud chariot drawn by six sinuous dragons flanked by whales, waterfowl, and wind spirits. The C-shaped scrolling cloud motifs inherit visual formulas directly from Han and Wei lacquerware and stone reliefs."
        },
        {
          xPct: 86,
          yPct: 56,
          titleVi: "Cảnh Tào Thực ngồi xe ngựa ngoái nhìn trong đêm",
          titleEn: "Cao Zhi's Nocturnal Departure and Backward Gaze",
          detailVi: "Ở hồi kết bên trái, Tào Thực ngồi trên cỗ xe bốn ngựa kéo, đầu quay ngoái lại phía bờ sông Lạc còn vương ánh đèn nến. Bố cục tự sự liên hoàn cho phép cùng một nhân vật xuất hiện lặp lại nhiều lần trên một mặt phẳng liên tục mà không cần khung ngăn cách.",
          detailEn: "At the left-hand finale, Cao Zhi sits inside a four-horse carriage glancing backward toward the candlelit Luo riverbank. Continuous narrative composition allows the same protagonist to reappear sequentially across an unbroken pictorial space."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Theo dõi chuỗi tự sự liên hoàn từ phải sang trái: cuộc gặp gỡ bên bờ sông Lạc, trao ngọc bội, xe sáu rồng chia ly và chuyến hồi kinh lưu luyến.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x để quan sát nét tằm xuân nhả tơ đều nét và lối tạo hình cây núi cổ phác đặc trưng thời Đông Tấn.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Đọc xen kẽ lời phú năm 222 của Tào Thực và đối chiếu với bản lưu tại Bảo tàng Liêu Ninh cùng Bảo tàng Freer (Washington)."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Follow the continuous narrative right to left: riverbank encounter, jade-pendant exchange, six-dragon departure, and Cao Zhi's reluctant return.",
        "Step 2 (Material & Brushwork Inspection): Magnify to 3.2x to inspect uniform silkworm-thread contours and archaic Six Dynasties tree and hillock conventions.",
        "Step 3 (Seals & Historical Context): Read Cao Zhi's 222 CE verses alongside the scenes and compare Copy A with the Liaoning Provincial Museum and Freer Gallery versions."
      ]
    },
    {
      slug: "hanxizai-yeyan",
      titleVi: "Hàn Hy Tái Dạ Yến Đồ — Cố Hoành Trung (Tống mô bản)",
      titleEn: "Night Revels of Han Xizai — After Gu Hongzhong (Song Copy)",
      titleZh: "韩熙载夜宴图 — 顾闳中（宋摹本）",
      tombstone: {
        dynasty: "Nguyên tác Nam Đường (~965–970), mô bản thời Tống (thế kỷ XII)",
        medium: "Mực và màu khoáng trùng thái trên lụa quyên",
        dimensions: "28,7 cm × 335,5 cm",
        museum: "Bảo tàng Cố Cung Bắc Kinh (Palace Museum, Beijing)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Chu sa (HgS) và Yên chi thực vật (Lac/Madder Lake)",
          nameEn: "Cinnabar (HgS) and Organic Crimson Lake",
          scientificNoteVi: "Sắc đỏ chu sa trên trường kỷ, bàn tiệc và trang phục ca kỹ tạo đối lập thị giác mạnh với màu đen tuyền của mũ ô sa và áo bào Hàn Hy Tái. Phổ sắc đỏ – đen – trắng định hình không khí dạ tiệc vừa xa hoa vừa trầm uất.",
          scientificNoteEn: "Vermilion cinnabar across couches, lacquer tables, and musicians' skirts creates stark visual tension against the deep black gauze hat and robes of Han Xizai. This red-black-white triad evokes both opulence and suppressed melancholy."
        },
        {
          nameVi: "Thạch thanh (Azurite) và Phấn trắng cáp phấn (CaCO3)",
          nameEn: "Azurite and Shell White (CaCO3)",
          scientificNoteVi: "Bình phong sơn thủy đứng ngăn cảnh được vẽ bằng mực và thạch thanh đạm, còn vải trải giường, quạt tròn và mặt trống phủ lớp trắng đục mịn. Kỹ thuật tô màu phẳng đều (bình đồ) giữ rõ đường viền nhân vật sắc bén.",
          scientificNoteEn: "Freestanding landscape screens dividing the scenes employ ink and pale azurite washes, while bedding, round fans, and drumheads use opaque shell white. Flat color fills preserve razor-sharp figure contours."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "绍兴 / 史弥远印 / 乾隆御览之宝",
          pinyin: "Shaoxing / Shi Miyuan yin / Qianlong yulan zhi bao",
          translationVi: "Ấn niên hiệu Thiệu Hưng (Nam Tống) cùng ấn tể tướng Sử Di Viễn và ấn Càn Long xác nhận chuỗi truyền thừa liên tục qua bốn triều đại.",
          translationEn: "Southern Song Shaoxing reign seal, Chancellor Shi Miyuan's seal, and Emperor Qianlong's inspection seal confirming an unbroken imperial provenance across four dynasties."
        },
        {
          sealZh: "班姬题跋 / 程棨跋",
          pinyin: "Ban Ji tiba / Cheng Qi ba",
          translationVi: "Đề bạt ghi lại bối cảnh Nam Đường Hậu Chủ Lý Dục sai họa sư Cố Hoành Trung bí mật dự tiệc đêm tại phủ Hàn Hy Tái để ghi nhớ và vẽ lại bằng trí nhớ.",
          translationEn: "Colophons recounting Southern Tang ruler Li Yu's covert order dispatching court painter Gu Hongzhong to attend Han Xizai's night banquets and reconstruct them from memory."
        }
      ],
      zoomHotspots: [
        {
          xPct: 16,
          yPct: 54,
          titleVi: "Hồi 1 — Nghe tỳ bà: Ánh mắt trầm tư của Hàn Hy Tái",
          titleEn: "Scene 1 — Listening to the Pipa: Han Xizai's Guarded Gaze",
          detailVi: "Phóng đại 3.2x khuôn mặt Hàn Hy Tái ngồi trên giường la hán cho thấy nét bút thiết tuyến miêu mảnh nhưng cứng cáp khắc họa râu dài, đôi mắt khép hờ và lông mày nhíu nhẹ. Trong khi khách khứa chăm chú nhìn nữ nhạc công gảy tỳ bà, chủ nhân giữ vẻ lạnh lùng tách biệt khỏi cuộc vui.",
          detailEn: "At 3.2x magnification, Han Xizai's face on the luohan couch reveals fine yet taut iron-wire brushwork defining his long beard, half-closed eyes, and furrowed brow. While guests lean attentively toward the pipa player, the host maintains a detached, guarded composure."
        },
        {
          xPct: 38,
          yPct: 48,
          titleVi: "Hồi 2 — Đánh trống yết cổ và điệu múa Lục Yêu",
          titleEn: "Scene 2 — Playing the Jiegu Drum for the Six-Beat Dance",
          detailVi: "Hàn Hy Tái đứng cầm hai dùi gỗ gõ chiếc trống yết cổ đặt trên giá sơn son, nhịp theo bước múa uyển chuyển của vũ nữ Vương Ốc Sơn. Nhà sư Đức Minh đứng khoanh tay cúi đầu bên cạnh, tạo điểm đối lập tâm lý sắc bén giữa giới luật tu hành và tiệc rượu quyền quý.",
          detailEn: "Han Xizai stands beating a lacquered jiegu drum with two sticks to accompany dancer Wang Wushan's Six-Beat Dance. Beside him, monk Deming stands with folded arms and lowered eyes, introducing sharp psychological contrast between monastic discipline and court revelry."
        },
        {
          xPct: 62,
          yPct: 44,
          titleVi: "Bình phong sơn thủy làm vách ngăn không gian và thời gian",
          titleEn: "Freestanding Landscape Screens as Temporal Dividers",
          detailVi: "Cố Hoành Trung sử dụng các tấm bình phong lớn dựng thẳng đứng và giường màn làm ranh giới tự nhiên tách năm hồi tiệc đêm: nghe nhạc, múa trống, nghỉ rửa tay, hòa tấu sáo tiêu và tiễn khách. Mỗi tấm bình phong tự nó là một bức tranh thủy mặc thu nhỏ đúng phong cách Nam Đường.",
          detailEn: "Gu Hongzhong uses tall freestanding screens and curtained beds as natural architectural dividers separating five nocturnal acts: pipa recital, drum dance, intermission hand-washing, flute ensemble, and farewell. Each screen itself contains a miniature Southern Tang ink landscape."
        },
        {
          xPct: 82,
          yPct: 52,
          titleVi: "Hồi 4 — Hàng năm nữ nhạc công thổi sáo và sênh",
          titleEn: "Scene 4 — Five Seated Musicians Playing Flutes and Sheng",
          detailVi: "Năm nữ nhạc công ngồi xếp hàng đều trên ghế gỗ sơn đen, cùng thổi sáo trúc và sênh miệng trong nhịp điệu thị giác đồng bộ nhưng góc nghiêng đầu và hướng nhìn lệch nhau tinh tế. Y phục kẻ sọc, hoa văn đoàn hoa và đồ sứ trắng trên bàn ăn phản ánh chuẩn xác vật chất cung đình thế kỷ X.",
          detailEn: "Five seated female musicians align along a black lacquer bench playing bamboo flutes and reed mouth organs in synchronized rhythm, yet each head tilt and gaze subtly varies. Striped textiles, floral medallions, and white porcelain vessels accurately record tenth-century court material culture."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Đọc 5 hồi liên hoàn ngăn cách bởi bình phong từ phải sang trái để cảm nhận nhịp điệu tăng dần rồi lắng xuống của buổi dạ yến chính trị.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x vào sắc mặt nhân vật chính qua cả năm lần xuất hiện để thấy sự nhất quán tâm lý và nét vẽ thiết tuyến miêu chuẩn mực.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Đọc sử liệu về mâu thuẫn chính trị giữa Nam Đường Hậu Chủ Lý Dục và đại thần Bắc phương Hàn Hy Tái những năm 960."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Read the five screen-divided acts from right to left to follow the rising and subsiding emotional arc of a politically charged banquet.",
        "Step 2 (Material & Brushwork Inspection): Zoom to 3.2x on Han Xizai's expression across all five appearances to trace psychological consistency and crisp iron-wire contours.",
        "Step 3 (Seals & Historical Context): Contextualize the scroll within the political tension between Southern Tang ruler Li Yu and northern-born minister Han Xizai in the 960s."
      ]
    },
    {
      slug: "zao-chun-tu",
      titleVi: "Tảo Xuân Đồ — Quách Hy",
      titleEn: "Early Spring — Guo Xi",
      titleZh: "早春图 — 郭熙",
      tombstone: {
        dynasty: "Bắc Tống (niên hiệu Hy Ninh thứ 5, 1072)",
        medium: "Mực và màu đạm thái trên lụa quyên (Lập trục)",
        dimensions: "158,3 cm × 108,1 cm",
        museum: "Bảo tàng Cố Cung Đài Bắc (National Palace Museum, Taipei)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Mực tùng yên kết hợp kỹ thuật bảy lớp rửa (Thất mặc pháp)",
          nameEn: "Pine-Soot Ink with Multi-Wash Tonal Gradation",
          scientificNoteVi: "Quách Hy sử dụng mực tùng yên pha nước nhiều mức độ từ mực cháy (tiêu mặc) đến mực loãng như sương (túc mặc, đạm mặc). Các lớp rửa chồng nối tiếp tạo sương mù chuyển động dọc hẻm núi mà vẫn giữ rõ độ trong suốt của sợi lụa quyên khổ rộng.",
          scientificNoteEn: "Guo Xi layers pine-soot ink across tonal extremes from charred ink to vaporous pale washes. Overlapping translucent washes generate drifting valley mists while preserving the luminous weave of the wide silk hanging scroll."
        },
        {
          nameVi: "Đạm giả thạch (Fe2O3) và Lam đạm",
          nameEn: "Diluted Hematite Ochre (Fe2O3) and Pale Indigo",
          scientificNoteVi: "Một lớp màu giả thạch và chàm cực nhạt được quét lướt qua thân cây tùng và vách đá đón nắng, gợi hơi ấm chớm xuân đang làm tan lớp tuyết mỏng cuối đông trên núi cao.",
          scientificNoteEn: "Trace washes of iron-oxide ochre and pale indigo brush over sunlit pine trunks and cliff faces, evoking early spring warmth thawing late-winter frost along high crags."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "早春，壬子年郭熙画",
          pinyin: "Zaochun, Renzi nian Guo Xi hua",
          translationVi: "Lạc khoản gốc của Quách Hy bên rìa trái: Tảo Xuân, vẽ năm Nhâm Tý (1072), kèm ấn vuông đỏ Quách Hy Bút.",
          translationEn: "Guo Xi's original signature along the left margin: Early Spring, painted in the Renzi year (1072), stamped with his square red seal 'Brush of Guo Xi'."
        },
        {
          sealZh: "树才发叶溪开冻，楼阁仙居最上层（乾隆御题诗，1759）",
          pinyin: "Shu cai faye xi kaidong, louge xianju zui shangceng",
          translationVi: "Bài thơ ngự đề năm 1759 của Hoàng đế Càn Long ở góc trên phải: Cây mới đâm chồi khe tan băng, lầu các tiên cư ở tầng cao nhất.",
          translationEn: "Imperial poetic inscription by Emperor Qianlong (1759) at upper right: Trees just unfurl leaves as streams thaw; immortal pavilions crown the highest tier."
        }
      ],
      zoomHotspots: [
        {
          xPct: 50,
          yPct: 30,
          titleVi: "Đỉnh chủ sơn uốn lượn hình chữ S và vân đầu thuẫn",
          titleEn: "S-Curved Principal Peak and Cloud-Head Texture Strokes",
          detailVi: "Khối núi trung tâm vặn mình theo trục chữ S như sinh thể đang cựa mình thức giấc, tạo khối bằng kỹ thuật vân đầu thuẫn (nét vờn đầu mây) do chính Quách Hy sáng tạo. Các mảng đá cuộn tròn đan xen hốc tối sâu cho thấy sự chuyển động địa chất sống động thay cho khối đá tĩnh lặng kiểu cổ.",
          detailEn: "The central peak twists upward along an S-axis like an awakening organism, modeled with cloud-head texture strokes (yuntoucun) pioneered by Guo Xi. Rolling rock bulges alternating with deep ink hollows convey dynamic geological vitality rather than static mass."
        },
        {
          xPct: 34,
          yPct: 68,
          titleVi: "Cây cổ thụ cành giải trảo (càng cua)",
          titleEn: "Ancient Pines with Crab-Claw Branches",
          detailVi: "Hai gốc tùng cổ ở tiền cảnh vươn những nhánh cành khẳng khiu bẻ góc sắc nhọn gọi là giải trảo chi (cành càng cua). Phóng đại 3.2x cho thấy đầu cành vuốt nhọn bằng nét bút dứt khoát chứa mực đậm, thể hiện sức bật dẻo dai của cây núi trước gió lạnh đầu xuân.",
          detailEn: "Two foreground ancient pines extend angular, jagged boughs known as crab-claw branches (xiezhaozhi). At 3.2x magnification, crisp dark ink strokes taper into sharp tips, conveying resilient arboreal tension against early spring mountain winds."
        },
        {
          xPct: 70,
          yPct: 54,
          titleVi: "Khe sâu thâm viễn và mái đền ẩn trong sương",
          titleEn: "Deep-Distance Gorge and Mist-Veiled Temple Roofs",
          detailVi: "Bên phải thân núi mở ra khe thung lũng sâu thẳm theo nguyên tắc Thâm viễn trong sách Lâm Tuyền Cao Trí, nơi ẩn hiện mái ngói cong của một quần thể chùa núi. Dòng thác mảnh vắt qua vách đá nối liền tầng mây cao với con đường đá mòn dưới chân đèo.",
          detailEn: "To the right of the central massif opens a receding gorge exemplifying 'deep distance' from Guo Xi's treatise Linquan Gaozhi, revealing curved temple roofs veiled in mist. A slender waterfall links upper cloud banks with the stone footpath below."
        },
        {
          xPct: 24,
          yPct: 82,
          titleVi: "Gia đình ngư phủ kéo thuyền và lữ khách hành sơn",
          titleEn: "Fisherman's Family Landing a Boat and Mountain Travelers",
          detailVi: "Dưới chân bờ đá góc trái, một gia đình ngư phủ cùng chó nhỏ đang bước lên bờ cát trong khi đoàn người gánh hàng men theo lối mòn cầu gỗ. Những nhân vật cực nhỏ này xác lập tỷ lệ hùng vĩ cho ngọn núi cao và hiện thực hóa lý tưởng khả hành, khả vọng, khả du, khả cư của Quách Hy.",
          detailEn: "At the lower-left shore, a fisherman's family and small dog disembark while porters cross a wooden footbridge. These tiny figures establish monumental scale for the towering peaks and realize Guo Xi's ideal of a landscape fit to walk, gaze, wander, and dwell in."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Đọc bố cục lập trục chữ S tích hợp đủ Tam Viễn (Cao viễn nhìn lên đỉnh, Thâm viễn nhìn vào khe phải, Bình viễn nhìn ra sông trái).",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x vào nét vân đầu thuẫn trên vách đá và cành cây càng cua mực cháy ở tiền cảnh.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Xác minh lạc khoản năm 1072 bên rìa trái và đối chiếu lý luận hội họa trong sách Lâm Tuyền Cao Trí do con trai Quách Tư biên tập."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Read the S-shaped vertical scroll integrating all Three Distances: high distance up the summit, deep distance into the right gorge, and level distance across the left river.",
        "Step 2 (Material & Brushwork Inspection): Magnify to 3.2x to inspect cloud-head rock modeling and dark crab-claw pine branches in the foreground.",
        "Step 3 (Seals & Historical Context): Verify the 1072 left-margin signature and cross-reference Guo Xi's painting theory compiled by his son Guo Si in Linquan Gaozhi."
      ]
    },
    {
      slug: "xishan-xinglv",
      titleVi: "Khê Sơn Hành Lữ Đồ — Phạm Khoan",
      titleEn: "Travelers Among Mountains and Streams — Fan Kuan",
      titleZh: "溪山行旅图 — 范宽",
      tombstone: {
        dynasty: "Bắc Tống (khoảng năm 1000)",
        medium: "Mực và màu đạm trên lụa quyên khổ kép (Lập trục)",
        dimensions: "206,3 cm × 103,3 cm",
        museum: "Bảo tàng Cố Cung Đài Bắc (National Palace Museum, Taipei)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Mực tùng yên mật độ cao (Vũ điểm thuẫn)",
          nameEn: "High-Density Pine-Soot Ink (Raindrop Strokes)",
          scientificNoteVi: "Phạm Khoan phủ hàng vạn nét chấm ngắn sắc cạnh bằng mực tùng yên đậm trên toàn bộ vách đá dựng đứng, gọi là vũ điểm thuẫn (nét hạt mưa). Mật độ chấm dày tạo kết cấu đá hoa cương vùng Thiểm Tây nặng khối và thô ráp chân thực.",
          scientificNoteEn: "Fan Kuan covers the vertical cliff face with tens of thousands of short, sharp pine-soot ink strokes called raindrop texture strokes (yudiancun). Their tight accumulation builds authentic granite mass and ruggedness characteristic of Shaanxi peaks."
        },
        {
          nameVi: "Lụa quyên đôi nối dọc (Song bức quyên)",
          nameEn: "Double-Width Joined Silk Ground",
          scientificNoteVi: "Bức tranh khổ lớn trên hai mét được ghép dọc từ hai dải lụa quyên dệt sợi đôi bền chắc, giữ được độ phẳng khi treo sảnh đường lớn. Mối nối giữa tranh được khâu và bồi kín khéo léo chạy qua trung tâm khối núi.",
          scientificNoteEn: "Standing over two meters tall, the scroll joins two vertical panels of durable plain-weave silk engineered to hang flat in grand halls. The central vertical seam is seamlessly mounted straight through the main mountain mass."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "范宽（藏于右下树丛中）",
          pinyin: "Fan Kuan (hidden inside lower-right foliage)",
          translationVi: "Chữ ký ẩn hai chữ Phạm Khoan nằm lọt giữa tán cây bên phải dưới chân núi, được học giả Lý Lâm Xán phát hiện lại năm 1958.",
          translationEn: "Hidden two-character signature 'Fan Kuan' tucked within the lower-right tree foliage, rediscovered by curator Li Lin-ts'an in 1958."
        },
        {
          sealZh: "北宋范中立溪山行旅图，董其昌观",
          pinyin: "Beisong Fan Zhongli Xishan Xinglv Tu, Dong Qichang guan",
          translationVi: "Đề ký của Đổng Kỳ Xương ở góc trên phải xác nhận tác phẩm là tuyệt bút sơn thủy của Phạm Trung Lập (Phạm Khoan) triều Bắc Tống.",
          translationEn: "Inscription by Dong Qichang at upper right authenticating the hanging scroll as the supreme landscape work of Northern Song master Fan Zhongli (Fan Kuan)."
        }
      ],
      zoomHotspots: [
        {
          xPct: 52,
          yPct: 24,
          titleVi: "Khối chủ sơn chiếm hai phần ba chiều cao và vũ điểm thuẫn",
          titleEn: "Towering Central Massif and Raindrop Texture Strokes",
          detailVi: "Ngọn núi trung tâm chiếm trọn hai phần ba chiều cao khung tranh như bức tường đá dựng đứng đối diện trực tiếp người xem. Dưới kính lúp 3.2x, bề mặt đá không vẽ bằng nét cong mềm mà dày đặc các nét gạch đứng ngắn tựa hạt mưa rơi, diễn tả cấu trúc đá trầm tích và hoàng thổ miền Bắc Trung Hoa.",
          detailEn: "The central massif fills two-thirds of the scroll height like a sheer granite wall confronting the viewer head-on. Under 3.2x magnification, the cliff is built not from soft curves but from dense short vertical strokes resembling falling rain, capturing northern Chinese limestone and loess geology."
        },
        {
          xPct: 74,
          yPct: 48,
          titleVi: "Dòng thác trắng chẻ dọc khe đá",
          titleEn: "Silver-Thread Waterfall Cleaving the Chasm",
          detailVi: "Giữa hai vách núi tối sẫm bên phải là một sợi thác nước mảnh đổ thẳng đứng xuống tầng sương mù trắng xóa dưới chân núi. Vệt sáng dọc này vừa phá vỡ độ đặc khít của khối đá, vừa dẫn ánh mắt rơi từ đỉnh núi xuống khu rừng chùa ở trung cảnh.",
          detailEn: "Between two shadowed eastern crags, a razor-thin white waterfall plunges vertically into the luminous mist band below. This luminous vertical cleft breaks the dense rock mass and guides the eye from the summit down to the mid-ground temple grove."
        },
        {
          xPct: 82,
          yPct: 86,
          titleVi: "Đoàn lừa thồ hàng và chữ ký ẩn Phạm Khoan",
          titleEn: "Mule Caravan and Fan Kuan's Concealed Signature",
          detailVi: "Góc dưới bên phải có hai người phu dắt bốn con lừa thồ nặng đi dọc đường mòn cạnh khe nước, kích thước chưa đầy 2 cm so với chiều cao 206 cm của bức tranh. Ngay phía trên tán lá bụi cây cạnh đoàn lữ hành ẩn hai chữ ký mực đen rất nhỏ '范宽' hòa lẫn vào nét lá.",
          detailEn: "At lower right, two drovers lead four laden mules along a stream-side path, measuring under 2 cm against the scroll's 206 cm height. Directly inside the leafy bush above the caravan hide the tiny black ink characters 'Fan Kuan' camouflaged among foliage strokes."
        },
        {
          xPct: 40,
          yPct: 68,
          titleVi: "Tảng đá tiền cảnh và khoảng sương tách ba tầng không gian",
          titleEn: "Foreground Boulder and Mist Band Separating Three Planes",
          detailVi: "Phạm Khoan chia bố cục thành ba tầng rõ rệt: tảng đá tiền cảnh ở sát đáy, khu rừng và mái chùa ở trung cảnh, rồi một dải sương trắng cắt ngang hoàn toàn trước khi khối núi chính bật dựng lên phía sau. Thủ pháp đứt gãy không gian này nhân đôi cảm giác hùng vĩ siêu việt của tự nhiên.",
          detailEn: "Fan Kuan divides space into three distinct tiers: foreground boulders, mid-ground wooded bluff with temple roofs, and a white mist band completely severing the base before the main peak erupts behind. This spatial discontinuity amplifies the mountain's overwhelming monumentality."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Đứng xa cảm nhận thế núi đè nặng uy nghi theo tinh thần Bắc phái sơn thủy Bắc Tống, nơi con người chỉ là hạt bụi nhỏ bé trước thiên địa.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x để đếm mật độ nét vũ điểm thuẫn trên vách đá chính và tìm hai chữ ký ẩn '范宽' trong bụi cây góc phải dưới.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Đọc đề ký của Đổng Kỳ Xương và so sánh trực tiếp phong cách tĩnh tại vững chãi của Phạm Khoan với thế núi chuyển động của Quách Hy."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Step back to experience the awe-inspiring weight of Northern Song monumental landscape, where human travelers appear minuscule before nature.",
        "Step 2 (Material & Brushwork Inspection): Magnify to 3.2x to inspect raindrop texture strokes across the main cliff and locate the hidden signature 'Fan Kuan' in the lower-right foliage.",
        "Step 3 (Seals & Historical Context): Read Dong Qichang's upper-right inscription and contrast Fan Kuan's austere stability with Guo Xi's dynamic twisting peaks."
      ]
    },
    {
      slug: "rui-he-tu",
      titleVi: "Thụy Hạc Đồ — Tống Huy Tông Triệu Cát",
      titleEn: "Auspicious Cranes — Emperor Huizong of Song (Zhao Ji)",
      titleZh: "瑞鹤图 — 宋徽宗赵佶",
      tombstone: {
        dynasty: "Bắc Tống (niên hiệu Chính Hòa thứ 2, 1112)",
        medium: "Màu khoáng thạch thanh và phấn trắng trên lụa quyên",
        dimensions: "51 cm × 138,2 cm",
        museum: "Bảo tàng Tỉnh Liêu Ninh (Liaoning Provincial Museum, Shenyang)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Thạch thanh mịn (Fine Azurite, Cu3(CO3)2(OH)2)",
          nameEn: "Finely Ground Azurite (Cu3(CO3)2(OH)2)",
          scientificNoteVi: "Toàn bộ nền trời được phủ đều bằng thạch thanh nghiền siêu mịn trộn keo loãng, tạo sắc lam thiên thanh đồng nhất không lộ vệt chổi quét. Bề mặt lam phẳng làm nổi bật tương phản quang học với bộ lông trắng của 20 con hạc.",
          scientificNoteEn: "The entire sky is uniformly coated in finely levigated azurite suspended in dilute glue, achieving an unstreaked cerulean plane. This smooth mineral blue maximizes optical contrast against the luminous white plumage of twenty cranes."
        },
        {
          nameVi: "Phấn trắng chì – sò và Sơn mài đen (Raw Lacquer Dot)",
          nameEn: "White Lead-Shell Pigment and Raised Black Lacquer",
          scientificNoteVi: "Thân hạc tô phấn trắng nhiều lớp mảnh tạo độ nổi nhẹ, trong khi con ngươi mắt hạc được chấm bằng sơn mài sống màu đen nhô cao khỏi mặt lụa (điểm tình), bắt sáng sống động khi xoay góc nhìn.",
          scientificNoteEn: "Crane bodies receive thin layered white pigment for subtle relief, whereas pupils are dotted with raised raw black lacquer beads that catch ambient light and animate each bird."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "政和壬辰上元之次夕，忽有祥云拂郁低映端门，众皆仰而视之，倏有群鹤飞鸣于空中",
          pinyin: "Zhenghe Renchen shangyuan zhi cixi, hu you xiangyun fuyu diying Duanmen, zhong jie yang er shi zhi, shu you qunhe feiming yu kongzhong",
          translationVi: "Bài ký tự thuật viết bằng thể Sấu Kim Thư của Tống Huy Tông (1112): Đêm sau rằm tháng Giêng năm Chính Hòa Nhâm Thìn, mây lành bỗng sà xuống Đoan Môn, đàn hạc bay lượn kêu vang giữa không trung.",
          translationEn: "Emperor Huizong's Slender Gold calligraphy narrative (1112): On the evening after the Lantern Festival in Zhenghe Renchen, auspicious clouds descended over Duanmen Gate as a flock of cranes circled overhead."
        },
        {
          sealZh: "天下一人（花押） / 御书（葫芦印）",
          pinyin: "Tianxia Yiren (imperial cipher) / Yushu (gourd seal)",
          translationVi: "Chữ ký hoa áp 'Thiên Hạ Nhất Nhân' độc nhất của Tống Huy Tông cùng ấn hồ lô đỏ Ngự Thư xác nhận tác phẩm chính tay hoàng đế đề họa.",
          translationEn: "Huizong's personal 'Sole Sovereign Under Heaven' cipher accompanied by his gourd-shaped Imperial Brushwork seal confirming direct imperial authorship."
        }
      ],
      zoomHotspots: [
        {
          xPct: 50,
          yPct: 72,
          titleVi: "Mái ngói Đoan Môn vẽ theo phép giới họa chuẩn xác",
          titleEn: "Ruled-Line Architectural Precision of Duanmen Gate Roof",
          detailVi: "Tống Huy Tông chỉ lấy phần mái thượng tầng của Đoan Môn làm bệ đỡ thấp ở cạnh dưới, lược bỏ hoàn toàn thân tường và người xem bên dưới. Soi 3.2x thấy từng hàng ngói lưu ly, đấu củng và đôi xi vẫn đầu mái được vẽ thẳng tắp bằng thước kẻ giới họa, chìm nửa thân trong mây ngũ sắc.",
          detailEn: "Huizong crops the composition to include only the upper eaves of Duanmen Gate along the lower border, omitting walls and spectators. At 3.2x magnification, ruled-line brushwork renders every glazed tile, dougong bracket, and roof-ridge owl finial emerging from auspicious clouds."
        },
        {
          xPct: 48,
          yPct: 38,
          titleVi: "Hai mươi con hạc không trùng tư thế và mắt chấm sơn mài",
          titleEn: "Twenty Distinct Crane Postures with Lacquer Pupils",
          detailVi: "Mười tám con hạc bay lượn thành vòng xoáy thuận chiều kim đồng hồ và hai con đậu vững trên đôi xi vẫn đầu hồi, hoàn toàn không có hai con nào trùng góc cánh hay hướng cổ. Dưới kính lúp, viền cánh đen nét mảnh, đỉnh đầu đỏ chu sa và chấm mắt sơn mài đen nổi tạo độ sắc sảo khoa học.",
          detailEn: "Eighteen cranes wheel clockwise overhead while two perch atop the ridge finials, with zero duplicated wing angles or neck postures. Magnification reveals crisp black primary feathers, cinnabar crowns, and raised lacquer pupils executed with ornithological precision."
        },
        {
          xPct: 78,
          yPct: 48,
          titleVi: "Thể thư pháp Sấu Kim Thư trên phần hậu chỉ",
          titleEn: "Slender Gold Calligraphy on the Left-Hand Text Panel",
          detailVi: "Nửa trái cuộn tranh dành trọn cho bài thơ ngũ ngôn và lời tựa do Tống Huy Tông tự tay viết bằng thể Sấu Kim Thư đặc chế. Nét chữ mảnh như sợi thép uốn nhưng phần khởi bút và thu bút gãy góc sắc bén như lưỡi dao, hài hòa tuyệt đối với nét mảnh của đàn hạc.",
          detailEn: "The left panel displays Huizong's pentasyllabic poem and preface in his signature Slender Gold script. Strokes are wire-thin yet feature crisp, blade-like angular turns at entry and exit points, harmonizing visually with the slender cranes."
        },
        {
          xPct: 24,
          yPct: 68,
          titleVi: "Giải mây ngũ sắc kiểu như ý bao quanh mái cung",
          titleEn: "Ruyi-Shaped Auspicious Clouds Framing the Eaves",
          detailVi: "Đám mây lành quấn quanh mái Đoan Môn được tạo hình theo dạng đầu gậy như ý nhiều lớp viền trắng mờ, chuyển sắc êm dịu từ xanh nhạt sang lam nền trời. Kỹ thuật tô chuyển sắc không lộ viền cứng tạo ảo giác cung điện đang lơ lửng giữa tầng mây tiên cảnh.",
          detailEn: "Auspicious clouds curling around Duanmen's eaves adopt layered ruyi-scepter silhouettes with soft white outlines blending smoothly into the cerulean sky. Borderless tonal shading creates the illusion of the palace roof floating in a celestial realm."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Quan sát bố cục phá cách đẩy toàn bộ kiến trúc xuống đáy khung để dành 75% diện tích cho bầu trời thạch thanh và vòng bay 20 con hạc.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x vào đôi hạc đậu trên xi vẫn và nét thư pháp Sấu Kim Thư để kiểm chứng kỹ thuật chấm mắt sơn mài cùng góc bẻ nét chữ.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Đọc bài ký năm 1112 về điềm lành Đoan Môn và đối chiếu với sự kiện biến cố Tĩnh Khang 15 năm sau đó (1127)."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Observe the bold low-horizon layout pushing palace roofs to the bottom edge so 75% of the silk showcases the azurite sky and twenty circling cranes.",
        "Step 2 (Material & Brushwork Inspection): Zoom to 3.2x on the finial-perched cranes and Slender Gold script to examine raised lacquer pupils and angular brush terminals.",
        "Step 3 (Seals & Historical Context): Read the 1112 Duanmen omen inscription and contrast its imperial optimism with the Jingkang crisis fifteen years later in 1127."
      ]
    },
    {
      slug: "you-chun-tu",
      titleVi: "Du Xuân Đồ — Triển Tử Kiền",
      titleEn: "Strolling About in Spring — Zhan Ziqian",
      titleZh: "游春图 — 展子虔",
      tombstone: {
        dynasty: "Tùy (cuối thế kỷ VI, ~581–618)",
        medium: "Màu khoáng thanh lục và kim phấn trên lụa quyên",
        dimensions: "43 cm × 80,5 cm",
        museum: "Bảo tàng Cố Cung Bắc Kinh (Palace Museum, Beijing)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Thạch thanh (Azurite) và Thạch lục (Malachite) nguyên sơ",
          nameEn: "Early Mineral Azurite and Malachite",
          scientificNoteVi: "Các mảng núi được tô trực tiếp bằng thạch thanh và thạch lục trên nền viền mực đơn giản, hầu như chưa dùng nét thuẫn tạo khối của thời Đường–Tống. Đây là chứng tích sớm nhất còn tồn tại của hệ màu Thanh lục sơn thủy Trung Hoa.",
          scientificNoteEn: "Mountain slopes are colored directly with mineral azurite and malachite inside simple ink outlines, prior to the invention of Tang-Song texture strokes. It stands as the earliest surviving monument of Chinese blue-green landscape painting."
        },
        {
          nameVi: "Nê kim (Bột vàng lá nghiền keo) và Phấn trắng",
          nameEn: "Shell Gold Powder (Nijin) and White Pigment",
          scientificNoteVi: "Dọc chân núi tiếp giáp mặt nước còn lưu dấu viền bột vàng mịn (kim bích), hòa cùng các chấm phấn trắng điểm hoa đào, hoa mận nở rộ ven đồi. Sự kết hợp vàng – lam – lục mở đường cho dòng Kim bích sơn thủy thời Thịnh Đường.",
          scientificNoteEn: "Traces of finely ground gold powder accent mountain bases meeting the water, paired with white pigment dots depicting spring peach and plum blossoms. This gold-blue-green palette inaugurated the Tang gold-and-green landscape lineage."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "展子虔游春图（宋徽宗瘦金书题签）",
          pinyin: "Zhan Ziqian Youchun Tu (Song Huizong Shoujinshu tiqian)",
          translationVi: "Tiêu đề bằng thể Sấu Kim Thư của Tống Huy Tông trên lụa cách thủy bên phải, xác định tác giả là họa sư Triển Tử Kiền triều Tùy.",
          translationEn: "Title slip in Emperor Huizong's Slender Gold script on the right mounting silk, attributing the scroll to Sui-dynasty master Zhan Ziqian."
        },
        {
          sealZh: "宣和 / 双龙印 / 张伯驹珍藏印",
          pinyin: "Xuanhe / Shuanglong yin / Zhang Boju zhencang yin",
          translationVi: "Ấn Tuyên Hòa triều Bắc Tống cùng ấn nhà sưu tầm Trương Bá Câu, người đã bán gia sản năm 1946 để giữ bức tranh ở lại Trung Quốc trước khi hiến tặng Cố Cung.",
          translationEn: "Northern Song Xuanhe palace seals paired with collector Zhang Boju's seal, who sold his residence in 1946 to prevent the scroll's export before donating it to the Palace Museum."
        }
      ],
      zoomHotspots: [
        {
          xPct: 24,
          yPct: 58,
          titleVi: "Bước ngoặt tỷ lệ: Núi lớn hơn người lần đầu tiên",
          titleEn: "Historic Shift: Mountains Exceeding Human Scale",
          detailVi: "Khác hẳn bức Lạc Thần Phú Đồ thời Đông Tấn, Triển Tử Kiền lần đầu giải phóng sơn thủy khỏi vai trò phông nền để trở thành chủ thể độc lập. Soi 3.2x đoàn kỵ mã mặc áo đỏ trắng đi qua cầu gỗ bên phải, kích thước nhân vật thu nhỏ hợp lý tương xứng với dãy núi xanh và mặt hồ rộng mở.",
          detailEn: "Breaking sharply from Six Dynasties conventions seen in Nymph of the Luo River, Zhan Ziqian establishes landscape as an independent subject. At 3.2x magnification, red-and-white-clad riders crossing the right-hand wooden bridge appear convincingly scaled against the towering green peaks."
        },
        {
          xPct: 54,
          yPct: 48,
          titleVi: "Thuyền du ngoạn giữa hồ và đường sóng mảnh",
          titleEn: "Pleasure Boat Adrift on Fine Rippled Water",
          detailVi: "Giữa mặt hồ chéo rộng lớn nối hai bờ núi là con thuyền gỗ chở các mệnh phụ và phu chèo đang xuôi dòng thưởng cảnh xuân. Các đường sóng mảnh gợn đều bằng mực nhạt tạo độ sâu phẳng trải dài về phía góc trên trái theo góc nhìn từ trên cao (điểu khám).",
          detailEn: "Across the broad diagonal lake linking opposing shores glides a wooden pleasure boat carrying court ladies and oarsmen. Evenly spaced pale ink ripples recede smoothly toward the upper left from an elevated bird's-eye viewpoint."
        },
        {
          xPct: 78,
          yPct: 36,
          titleVi: "Quần thể lầu các sơn trang ẩn trong rừng đào",
          titleEn: "Hillside Pavilions Nestled Among Blossoming Peach Trees",
          detailVi: "Ẩn sau sườn núi bên trái là cụm đình đài mái đỏ kết nối bằng cầu hành lang gỗ, vây quanh bởi những tán cây tùng và cây đào chấm hoa trắng hồng. Mái ngói và cột gỗ được vẽ sắc gọn bằng bút mảnh, đánh dấu bước chuyển từ kiến trúc biểu tượng sang kiến trúc gắn địa hình.",
          detailEn: "Tucked behind the left-hand ridge sits a complex of red-roofed pavilions linked by covered walkways and surrounded by pines and blossoming peach trees. Fine ink brushwork anchors the structures naturally into the hillside terrain."
        },
        {
          xPct: 38,
          yPct: 32,
          titleVi: "Sống núi viền đơn không thuẫn và điểm hoa trắng",
          titleEn: "Un-Textured Contoured Ridges and Spring Blossom Dots",
          detailVi: "Phóng đại 3.2x sườn núi chính cho thấy đường nét viền mảnh liên tục bao quanh các khối đá chồng lớp mà chưa xuất hiện nét thuẫn gãy góc. Cách chấm từng cụm hoa trắng nhỏ trực tiếp lên thân cành tạo bầu không khí tiết xuân rực rỡ mà giản dị đặc trưng cuối thế kỷ VI.",
          detailEn: "Zooming to 3.2x along the central ridge reveals continuous thin ink outlines enclosing layered rock lobes without later angular texture strokes. Tiny white blossom clusters dotted directly onto bare boughs evoke a crisp, unpretentious sixth-century spring atmosphere."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Quan sát bố cục chéo mở rộng từ bờ phải sang núi trái, đánh dấu thời khắc sơn thủy độc lập ra đời trong lịch sử hội họa Trung Hoa.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x để kiểm tra đường viền núi chưa dùng nét thuẫn, vết bột vàng kim bích và đoàn kỵ mã nhỏ qua cầu gỗ.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Đọc tiêu đề Sấu Kim Thư của Tống Huy Tông và đặt tác phẩm làm cầu nối giữa Cố Khải Chi (thế kỷ IV) với Vương Hy Mạnh (1113)."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Examine the sweeping diagonal bay from right bank to left peaks, marking the birth of independent landscape painting in Chinese art.",
        "Step 2 (Material & Brushwork Inspection): Magnify to 3.2x to inspect un-textured mountain contours, gold-powder traces, and miniature riders crossing the timber bridge.",
        "Step 3 (Seals & Historical Context): Read Huizong's Slender Gold title slip and position the painting between Gu Kaizhi (4th century) and Wang Ximeng (1113)."
      ]
    },
    {
      slug: "wuma-tu",
      titleVi: "Ngũ Mã Đồ — Lý Công Lân",
      titleEn: "Five Horses — Li Gonglin",
      titleZh: "五马图 — 李公麟",
      tombstone: {
        dynasty: "Bắc Tống (khoảng năm 1090, niên hiệu Nguyên Hựu)",
        medium: "Thủy mặc bạch miêu và màu đạm trên giấy Trừng Tâm Đường",
        dimensions: "29,3 cm × 225 cm",
        museum: "Bảo tàng Quốc gia Tokyo (Tokyo National Museum, Japan)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Mực tùng yên thuần tinh cho kỹ thuật Bạch Miêu",
          nameEn: "Refined Pine-Soot Ink for Baimiao Line Drawing",
          scientificNoteVi: "Lý Công Lân chỉ dùng nét mực tùng yên đậm nhạt và sắc xám loãng vờn cơ bắp mà không cần tô màu khoáng rực rỡ. Cách điều tiết độ nặng nhẹ của ngòi bút tạo cảm giác độ căng da, lông bờm và trọng lượng thân ngựa sống động như chạm nổi.",
          scientificNoteEn: "Li Gonglin relies on calibrated pine-soot ink outlines and subtle gray washes over musculature without heavy mineral colors. Modulated brush pressure conveys skin tension, flowing manes, and equine weight with near-sculptural clarity."
        },
        {
          nameVi: "Giấy Trừng Tâm Đường cổ (Nam Đường – Bắc Tống)",
          nameEn: "Chengxin Hall Fine Paper",
          scientificNoteVi: "Giấy thủ công bề mặt láng mịn, thớ sợi cực đều giúp đường bút trung phong chạy dài mượt mà không vấp sợi. Sắc giấy ngà tự nhiên làm nổi bật lớp mực đen bóng và vết rửa màu đạm cực tinh tế trên yên cương.",
          scientificNoteEn: "Smooth, tightly beaten Chengxin Hall paper allows long centered-tip ink strokes to glide uninterrupted. Its warm ivory tone enhances glossy black ink lines and delicate pale washes on saddles and harnesses."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "右一匹，凤头骢，元祐元年十二月十六日左麒麟院收于阗国进到",
          pinyin: "You yi pi, Fengtoucong, Yuanyou yuan nian shier yue shiliu ri Zuo Qilinyuan shou Yutianguo jindao",
          translationVi: "Tiểu tự hành thư của Hoàng Đình Kiên ghi lai lịch từng con ngựa cống: Con thứ nhất, Phượng Đầu Thông, cao 5 thước 4 tấc, 8 tuổi, nước Vu Điền tiến cống năm Nguyên Hựu thứ nhất (1086).",
          translationEn: "Running-script inscription by Huang Tingjian recording each tribute steed's pedigree: First horse, Phoenix-Head Dapple, 5 chi 4 cun tall, age 8, presented by Khotan in 1086."
        },
        {
          sealZh: "元祐三年，黄庭坚书 / 乾隆御览之宝",
          pinyin: "Yuanyou san nian, Huang Tingjian shu / Qianlong yulan zhi bao",
          translationVi: "Đề bạt năm 1090 của nhà thư pháp Hoàng Đình Kiên ở cuối cuộn, xác nhận Lý Công Lân vẽ trực họa từ ngựa thật trong chuồng ngự uyển Kỳ Lân Viện.",
          translationEn: "1090 colophon by calligrapher Huang Tingjian certifying that Li Gonglin sketched all five tribute horses directly from life at the imperial Qilin stables."
        }
      ],
      zoomHotspots: [
        {
          xPct: 16,
          yPct: 50,
          titleVi: "Phượng Đầu Thông và người dắt ngựa Tây Vực",
          titleEn: "Phoenix-Head Dapple and Central Asian Groom",
          detailVi: "Con ngựa đầu tiên có dáng cổ vươn cao, ức nở, được dẫn bởi một người dắt ngựa gốc Tây Vực đội mũ phớt cao, râu quai nón và mắt sâu. Soi 3.2x khuôn mặt người dắt ngựa cho thấy Lý Công Lân dùng nét cực mảnh tả chân dung dân tộc học sắc sảo, phân biệt rõ nhân chủng Khotan với người Hán.",
          detailEn: "The first steed exhibits an arched neck and broad chest led by a Central Asian groom wearing a tall felt hat with a full beard and deep-set eyes. At 3.2x magnification, delicate ink contours capture sharp ethnographic portraiture distinguishing Khotanese features from Han attendants."
        },
        {
          xPct: 38,
          yPct: 54,
          titleVi: "Cẩm Bác Thông: Kỹ thuật vờn đốm lông bằng mực loãng",
          titleEn: "Brocade-Dappled Gray: Subtle Ink-Wash Coat Modeling",
          detailVi: "Con ngựa thứ hai có bộ lông loang lốm đốm được xử lý bằng những vòng mực xám cực loãng chồng lớp không lộ viền khô. Đường sống lưng và bắp đùi dùng nét mảnh chắc chắn, tăng độ nhấn ở khúc khớp gối và móng guốc để truyền đạt trọng lượng cơ thể thật.",
          detailEn: "The second horse's dappled coat is built through layered pale gray ink rings without harsh dry edges. Taut hairline outlines trace spine and hindquarters, thickening slightly at fetlocks and hooves to anchor the animal's physical weight."
        },
        {
          xPct: 62,
          yPct: 50,
          titleVi: "Hảo Đầu Xích và nét vẽ y phục văn nhân",
          titleEn: "Fine-Head Chestnut and Calligraphic Drapery Lines",
          detailVi: "Nếp áo dài của người dắt ngựa thứ ba được vẽ theo lối du ty kết hợp đinh đầu thử vĩ (đầu đinh đuôi chuột) tiết chế, tạo cảm giác vải dày tung nhẹ theo bước đi. Tư thế ngựa quay đầu nhìn chéo tạo đối thoại ánh mắt sinh động giữa người và vật.",
          detailEn: "Robe folds on the third groom combine gossamer-silk contours with restrained nail-head-rat-tail accents, conveying heavy cloth swaying in stride. The horse's three-quarter backward glance creates a lively visual dialogue between groom and mount."
        },
        {
          xPct: 86,
          yPct: 52,
          titleVi: "Mãn Xuyên Hoa và chữ tiểu tự của Hoàng Đình Kiên",
          titleEn: "Full-Stream Blossom and Huang Tingjian's Catalog Notes",
          detailVi: "Con ngựa thứ năm tên Mãn Xuyên Hoa (không còn lời đề trên tranh do mất phần gốc) do viên quan Hán tộc mặc áo thụng mũ phác đầu dẫn đi. Soi gần từng con ngựa cùng hàng chữ ghi kích thước, tuổi tác của Hoàng Đình Kiên cho thấy tác phẩm mang giá trị kép: kiệt tác bạch miêu và hồ sơ kiểm kê ngự mã Bắc Tống.",
          detailEn: "The fifth steed, Full-Stream Blossom, is led by a Han official wearing a winged futou cap and voluminous robes. Inspecting the steeds alongside Huang Tingjian's exact height and age entries reveals the scroll's dual identity as a baimiao masterpiece and Northern Song imperial stable ledger."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Quan sát nhịp điệu năm cặp ngựa – người dắt ngựa xếp hàng ngang trên nền giấy trống không phông cảnh, tập trung tuyệt đối vào hình khối và thần thái.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x để phân biệt độ dày mỏng tinh vi của nét bút bạch miêu trên bờm ngựa, khớp chân và chân dung năm người dắt ngựa thuộc các sắc tộc khác nhau.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Đọc lời ghi lai lịch cống mã của Hoàng Đình Kiên (1090) và đánh dấu sự tái xuất hiện lịch sử của cuộn tranh tại Tokyo năm 2019."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Observe the rhythmic procession of five horse-and-groom pairs against blank paper, focusing entirely on sculptural form and character.",
        "Step 2 (Material & Brushwork Inspection): Zoom to 3.2x to study subtle baimiao line modulation across manes, leg joints, and distinct ethnic portraits of the five grooms.",
        "Step 3 (Seals & Historical Context): Read Huang Tingjian's 1090 tribute-horse inscriptions and note the scroll's historic public reappearance in Tokyo in 2019."
      ]
    },
    {
      slug: "guoguo-furen-youchun",
      titleVi: "Quắc Quốc Phu Nhân Du Xuân Đồ — Trương Huyên (Tống mô bản)",
      titleEn: "Lady Guoguo's Spring Outing — After Zhang Xuan (Song Copy)",
      titleZh: "虢国夫人游春图 — 张萱（宋摹本）",
      tombstone: {
        dynasty: "Nguyên tác Thịnh Đường (thế kỷ VIII), mô bản Viện Họa Bắc Tống (~1110s)",
        medium: "Màu khoáng trùng thái trên lụa quyên",
        dimensions: "51,8 cm × 148 cm",
        museum: "Bảo tàng Tỉnh Liêu Ninh (Liaoning Provincial Museum, Shenyang)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Chu sa (HgS), Duyên đan (Pb3O4) và Thạch lục (Malachite)",
          nameEn: "Cinnabar (HgS), Red Lead (Pb3O4), and Malachite",
          scientificNoteVi: "Bảng màu cung đình Thịnh Đường phối hợp sắc đỏ cam duyên đan, xanh lục thạch lục và vàng đất ấm trên váy áo lụa là. Lớp màu được tô đều mịn không để lộ vệt bút, tôn lên vẻ sang trọng rực rỡ của đoàn kỵ mã quý tộc.",
          scientificNoteEn: "High Tang court polychromy combines warm red lead, emerald malachite, and ochre across silk garments. Smoothly applied flat washes conceal brush marks and highlight the splendor of the aristocratic cavalcade."
        },
        {
          nameVi: "Phấn chì trắng (Lead White) và Hoa văn gấm thêu vi mô",
          nameEn: "Lead White and Microscopic Brocade Patterning",
          scientificNoteVi: "Phấn chì trắng làm nổi bật lớp trang điểm má hồng cổ điển (tam bạch pháp) trên gương mặt tròn đầy thời Đường, đồng thời vẽ các cụm hoa đoàn và lưới gấm siêu nhỏ trên khăn choàng lụa bán trong suốt.",
          scientificNoteEn: "Lead white renders the classic Tang 'three-white' facial makeup on plump aristocratic cheeks while delineating microscopic floral medallions and woven mesh across translucent silk shawls."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "天水摹张萱虢国夫人游春图（金章宗瘦金书题签）",
          pinyin: "Tianshui mo Zhang Xuan Guoguo Furen Youchun Tu",
          translationVi: "Tiêu đề của Kim Chương Tông (1189–1208) viết theo thể Sấu Kim Thư: Thiên Thủy (Họ Triệu nhà Tống) mô phỏng bức Quắc Quốc Phu Nhân Du Xuân Đồ của Trương Huyên.",
          translationEn: "Title inscription by Emperor Zhangzong of Jin in Slender Gold script: Copy by the Zhao (Song) court after Zhang Xuan's Lady Guoguo's Spring Outing."
        },
        {
          sealZh: "明昌七印（明昌 / 秘府 / 明昌御览 / 内殿珍玩...）",
          pinyin: "Mingchang qi yin (Mingchang / Mifu / Mingchang yulan...)",
          translationVi: "Bộ bảy ấn Minh Xương của Kim Chương Tông đóng chuẩn vị trí quanh khung tranh, xác lập quy chuẩn ấn giám định cổ họa Đông Á.",
          translationEn: "Emperor Zhangzong's seven Mingchang palace seals stamped in canonical positions around the scroll, establishing a benchmark system for East Asian painting authentication."
        }
      ],
      zoomHotspots: [
        {
          xPct: 50,
          yPct: 48,
          titleVi: "Cuộc tranh luận học thuật: Ai mới là Quắc Quốc Phu nhân?",
          titleEn: "Art-Historical Debate: Identifying Lady Guoguo",
          detailVi: "Giữa đoàn tám ngựa chín người, hai giả thuyết chính chỉ vào quý phụ đi đầu cưỡi ngựa hồng mặc áo nam giới hoặc quý phụ áo xanh khăn choàng trắng đi giữa cưỡi ngựa tam hoa mã. Phóng đại 3.2x thấy ngựa tam hoa mã có ba chỏm bờm cắt tỉa đúng nghi chế hoàng thất Đường, củng cố mạnh giả thuyết vị trí trung tâm.",
          detailEn: "Among eight horses and nine riders, scholars debate whether Lady Guoguo is the lead rider in male attire or the central noblewoman in green jacket and white gauze riding a three-tufted mane horse. At 3.2x magnification, the three trimmed mane tufts confirm imperial Tang rank, strongly supporting the central identification."
        },
        {
          xPct: 74,
          yPct: 54,
          titleVi: "Nhũ mẫu bế bé gái trên yên ngựa đi sau cùng",
          titleEn: "Wet Nurse Cradling a Young Girl in the Rear",
          detailVi: "Cụm sau cùng mô tả một nhũ mẫu mặc váy đỏ cưỡi ngựa đi kẹp giữa hai thị nữ, vòng tay giữ chặt một bé gái đang cúi nhìn bờm ngựa. Cách bố trí nhóm ba ngựa chen sát nhau tạo chiều sâu không gian ba chiều mà hoàn toàn không cần vẽ nền đất hay cây cối.",
          detailEn: "The trailing triad shows a red-skirted wet nurse flanked by two attendants, firmly cradling a small girl gazing down at the horse's mane. Overlapping the three horses tightly generates convincing spatial depth without any ground plane or landscape backdrop."
        },
        {
          xPct: 26,
          yPct: 52,
          titleVi: "Nét vẽ du ty và lớp khăn voan trong suốt",
          titleEn: "Gossamer Linework and Translucent Silk Gauze",
          detailVi: "Soi 3.2x phần vai và cổ áo các thị nữ cho thấy họa sư Viện Họa Tống vẽ lớp áo lót màu đỏ cam trước, sau đó phủ một lớp phấn trắng loãng vẽ hoa văn lưới lục giác để tái hiện chất liệu lụa mỏng sa la thời Thịnh Đường.",
          detailEn: "At 3.2x magnification across the attendants' shoulders, the Song academy copyist painted the red-orange undergarment first, then glazed a dilute white hexagonal mesh over it to simulate sheer High Tang silk gauze."
        },
        {
          xPct: 40,
          yPct: 68,
          titleVi: "Dáng bước khoan thai của ngựa béo Thịnh Đường",
          titleEn: "Measured Stride of Plump High Tang Steeds",
          detailVi: "Toàn bộ tám con ngựa đều mang dáng thân tròn trịa, cổ dày, chân thon và bước đi chậm rãi thanh nhã thay vì phi nước đại. Cả bầu không khí tiết xuân ấm áp được gợi ra hoàn toàn nhờ phục sức nhẹ nhàng, nét mặt thư thái và nhịp bước ung dung của đàn ngựa.",
          detailEn: "All eight steeds exhibit rounded barrels, thick necks, slender legs, and a relaxed ambling gait rather than a gallop. The entire spring atmosphere is conveyed purely through light garments, serene expressions, and the horses' unhurried cadence."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Cảm nhận bố cục đoàn kỵ mã đi từ phải sang trái theo hình thoi thoáng trước – dày giữa – tụ sau trên nền lụa trống hoàn toàn.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x vào ba chỏm bờm ngựa tam hoa mã, lớp khăn voan trong suốt và hoa văn gấm thêu trên yên cương.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Kiểm tra tiêu đề của Kim Chương Tông cùng bộ Minh Xương thất ấn và đối chiếu với bài thơ Quắc Quốc Phu Nhân của Trương Hổ."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Trace the cavalcade moving right to left in a diamond rhythm—open lead, dense center, clustered rear—against an empty silk ground.",
        "Step 2 (Material & Brushwork Inspection): Magnify to 3.2x to examine the three-tufted imperial mane, sheer silk gauze overglazing, and brocade saddlecloths.",
        "Step 3 (Seals & Historical Context): Inspect Jin Emperor Zhangzong's title slip and seven Mingchang seals alongside Tang poet Zhang Hu's verse on Lady Guoguo."
      ]
    },
    {
      slug: "hangong-chunxiao",
      titleVi: "Hán Cung Xuân Hiểu Đồ — Cừu Anh",
      titleEn: "Spring Morning in the Han Palace — Qiu Ying",
      titleZh: "汉宫春晓图 — 仇英",
      tombstone: {
        dynasty: "Minh (giữa thế kỷ XVI, niên hiệu Gia Tĩnh)",
        medium: "Màu khoáng trùng thái và công bút trên lụa quyên",
        dimensions: "30,6 cm × 574,1 cm",
        museum: "Bảo tàng Cố Cung Đài Bắc (National Palace Museum, Taipei)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Thạch lục (Malachite), Thạch thanh (Azurite) và Chu sa (HgS)",
          nameEn: "Malachite, Azurite, and Cinnabar (HgS)",
          scientificNoteVi: "Cừu Anh phối hợp sắc khoáng rực rỡ nhưng tiết chế độ chói nhờ kỹ thuật nhuộm nhiều lớp mỏng (tam phàn cửu nhiễm). Cột gỗ sơn son chu sa, đá thái hồ xanh lam và hàng liễu lục non tạo khung cảnh cung cấm thanh nhã, tươi sáng.",
          scientificNoteEn: "Qiu Ying harmonizes bright mineral pigments without harshness through repeated thin glazing (sanfan jiuran). Cinnabar palace columns, azurite-tinted Taihu rocks, and malachite willows craft a luminous, refined court setting."
        },
        {
          nameVi: "Phấn chì trắng và Bột vàng kim nê",
          nameEn: "Lead White and Finely Ground Gold Powder",
          scientificNoteVi: "Phấn trắng tô hoa ngọc lan, lông công và váy lụa cung nữ, còn bột vàng kim nê viền tinh xảo trên ngai vàng, lư hương đồng và đồ sơn mài nội cung, phản ánh thẩm mỹ xa hoa của giới sưu tầm Giang Nam thời Minh.",
          scientificNoteEn: "Lead white models magnolia blossoms, peacock feathers, and court robes, while gold powder traces throne moldings, bronze censers, and lacquer furnishings reflecting sixteenth-century Jiangnan collector taste."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "实父仇英制（款） / 十洲（朱文印）",
          pinyin: "Shifu Qiu Ying zhi / Shizhou (relief red seal)",
          translationVi: "Lạc khoản và ấn đỏ Thập Châu của Cừu Anh ẩn gọn trên bệ đá góc cuối tranh, khẳng định bút pháp đại sư đứng đầu phái công bút Tứ Gia Ngô Môn.",
          translationEn: "Qiu Ying's signature and relief seal 'Shizhou' tucked onto a stone plinth near the scroll's end, affirming the foremost gongbi master among the Four Masters of Ming."
        },
        {
          sealZh: "项元汴天籁阁珍藏印（子京父印 / 墨林秘玩）",
          pinyin: "Xiang Yuanbian Tianlaige zhencang yin",
          translationVi: "Hàng loạt ấn giám của đại sưu tầm gia Hạng Nguyên Biện (Thiên Lại Các), người bảo trợ trực tiếp cho Cừu Anh sáng tác nhiều trường quyển đỉnh cao.",
          translationEn: "Collector seals of patron Xiang Yuanbian (Tianlaige Studio), who directly sponsored Qiu Ying's most ambitious narrative handscrolls."
        }
      ],
      zoomHotspots: [
        {
          xPct: 54,
          yPct: 48,
          titleVi: "Cảnh họa sư Mao Diên Thọ vẽ chân dung cung nữ",
          titleEn: "Court Painter Mao Yanshou Portraying a Palace Lady",
          detailVi: "Tại sảnh giữa trường quyển, họa sư cung đình Mao Diên Thọ ngồi trước bàn gỗ đang chấm bút vẽ chân dung một phi tần ngồi ngay ngắn đối diện. Soi 3.2x trên tờ giấy đặt trước mặt họa sư thậm chí nhìn rõ phác thảo khuôn mặt nhỏ xíu, lồng ghép khéo léo điển tích Vương Chiêu Quân thời Tây Hán.",
          detailEn: "In the central hall, court painter Mao Yanshou sits sketching the portrait of a poised imperial concubine seated opposite him. At 3.2x magnification, a miniature facial sketch is visible on the paper before his brush, weaving the Han legend of Wang Zhaojun into the scroll."
        },
        {
          xPct: 22,
          yPct: 52,
          titleVi: "Cổng cung mờ sương sớm và đôi công xòe đuôi",
          titleEn: "Misty Morning Palace Gate and Peacocks",
          detailVi: "Đoạn mở đầu bên phải vẽ bức tường cung sơn đỏ, gốc liễu rủ và đôi công màu lam lục đứng cạnh tảng đá Thái Hồ bên ngoài cổng gỗ. Từng con mắt trên lông đuôi công được chấm bằng bột vàng và thạch thanh siêu nhỏ, mở màn chuyển cảnh từ ngoại viện tĩnh lặng vào nội cung rộn rã.",
          detailEn: "The right opening frames vermilion palace walls, weeping willows, and a pair of peacocks beside sculpted Taihu garden rocks outside the gate. Microscopic azurite and gold dots articulate every peacock tail eye, ushering viewers from quiet outer courts into palace life."
        },
        {
          xPct: 74,
          yPct: 50,
          titleVi: "Các thú vui nội cung: Cầm, Kỳ, Thư, Họa và Đấu thảo",
          titleEn: "Court Pastimes: Qin, Weiqi, Calligraphy, and Flower Games",
          detailVi: "Trải dài 5,74 mét là 115 nhân vật sinh hoạt không trùng lặp: đánh cờ vây, gảy cổ cầm, thêu gấm, cho trẻ chơi đùa, ngắm hoa và tưới cây. Đồ gỗ Hoàng Hoa Lê, bình sứ Thanh Hoa và bình phong sơn thủy trong tranh mang đậm diện mạo vật chất thực tế của kinh tế Giang Nam thời Minh Gia Tĩnh.",
          detailEn: "Across 5.74 meters, 115 figures engage in non-repeating pursuits: playing weiqi, plucking the guqin, embroidering, tending children, and admiring blossoms. Huanghuali furniture, blue-and-white porcelain, and painted screens faithfully mirror Ming Jiajing material culture."
        },
        {
          xPct: 40,
          yPct: 38,
          titleVi: "Kiến trúc cung điện giới họa và phối cảnh trục xiên",
          titleEn: "Ruled-Line Palace Architecture and Isometric Depth",
          detailVi: "Cừu Anh liên kết các sân vườn, hành lang uốn khúc và điện thờ nhiều tầng bằng phép giới họa song song chuẩn xác, kết hợp dải mây trắng mềm ngắt nhịp không gian. Tỷ lệ xà ngang, lan can đá cẩm thạch và ngói ống đạt độ tinh vi bậc nhất của hội họa cung đình thế kỷ XVI.",
          detailEn: "Qiu Ying links courtyards, winding corridors, and multi-tiered halls through crisp parallel ruled-line perspective punctuated by soft cloud bands. Timber beams, carved marble balustrades, and tubular roof tiles exemplify sixteenth-century architectural painting at its height."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Dạo bước qua 5,74 mét trường quyển từ sáng sớm ngoài cổng cung đến các hoạt động cầm kỳ thi họa sôi nổi của 115 nhân vật nội cung.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x vào cảnh Mao Diên Thọ vẽ chân dung và đồ gỗ, bình sứ nội thất để thấy trình độ công bút đỉnh cao của Cừu Anh.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Nhận diện dấu ấn sưu tầm của Hạng Nguyên Biện và phân biệt trang phục thời Minh được mượn để tái hiện bối cảnh cung Hán."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Stroll through 5.74 meters from the misty dawn gate into lively courtyards populated by 115 figures engaged in court arts.",
        "Step 2 (Material & Brushwork Inspection): Magnify to 3.2x on the Mao Yanshou portrait scene and interior furnishings to inspect Qiu Ying's supreme gongbi refinement.",
        "Step 3 (Seals & Historical Context): Identify patron Xiang Yuanbian's seals and observe how Ming material culture dresses a Han palace theme."
      ]
    },
    {
      slug: "tung-thach-van-lam",
      titleVi: "Vạn Hác Tùng Phong Đồ (Tùng Thạch Vân Lam) — Lý Đường",
      titleEn: "Wind in Pines Among a Myriad Valleys — Li Tang",
      titleZh: "万壑松风图 — 李唐",
      tombstone: {
        dynasty: "Bắc Tống (niên hiệu Tuyên Hòa thứ 6, 1124)",
        medium: "Mực và màu khoáng thanh lục nhẹ trên lụa quyên (Lập trục)",
        dimensions: "188,7 cm × 139,8 cm",
        museum: "Bảo tàng Cố Cung Đài Bắc (National Palace Museum, Taipei)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Mực tùng yên đậm kết hợp nét phủ phách thuẫn (vết rìu bổ)",
          nameEn: "Dense Pine-Soot Ink with Axe-Cut Texture Strokes",
          scientificNoteVi: "Lý Đường sử dụng bút nghiêng chấm mực đậm kéo chéo dứt khoát tạo các mặt đá phẳng sắc như vết rìu đẽo (tiểu phủ phách thuẫn). Kỹ thuật này khai sinh ngôn ngữ tạo hình cứng rắn cho toàn bộ trường phái sơn thủy Nam Tống về sau.",
          scientificNoteEn: "Li Tang drags a slanted brush loaded with dark ink diagonally across cliffs to carve crisp faceted planes called small axe-cut strokes (xiaofupicun). This technique launched the angular rock vocabulary of Southern Song landscape painting."
        },
        {
          nameVi: "Thạch lục (Malachite) và Thạch thanh (Azurite) trầm sắc",
          nameEn: "Muted Malachite and Azurite Washes",
          scientificNoteVi: "Không dùng màu khoáng chói như tranh thanh lục thuần túy, Lý Đường pha loãng thạch lục với mực xám phết lên tán thông và sườn núi đá. Sắc xanh trầm lắng tạo độ ẩm ướt mát lạnh của rừng tùng sâu thẳm vùng núi cao.",
          scientificNoteEn: "Rather than bright decorative mineral tones, Li Tang mixes diluted malachite with gray ink across pine needles and rock flanks. This restrained green evokes the cool humidity of deep highland pine valleys."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "皇宋宣和甲辰春，河阳李唐笔（题于主峰左侧石壁）",
          pinyin: "Huang Song Xuanhe Jiachen chun, Heyang Li Tang bi",
          translationVi: "Lạc khoản gốc viết thẳng lên vách đá bên trái đỉnh chủ sơn: Mùa xuân năm Giáp Thìn niên hiệu Tuyên Hòa đại Tống (1124), Lý Đường người Hà Dương vẽ.",
          translationEn: "Original signature inscribed directly onto the cliff face left of the main peak: Spring of the Jiachen year of Xuanhe in the Great Song (1124), painted by Li Tang of Heyang."
        },
        {
          sealZh: "乾隆御题诗 / 嘉庆御览之宝 / 宣统御览之宝",
          pinyin: "Qianlong yuti shi / Jiaqing yulan zhi bao / Xuantong yulan zhi bao",
          translationVi: "Thơ ngự đề của Càn Long và ấn kiểm kê các đời Gia Khánh, Tuyên Thống xác nhận vị trí trụ cột của bức tranh trong lịch sử sơn thủy Tống triều.",
          translationEn: "Emperor Qianlong's poetic inscription and Jiaqing/Xuantong seals confirming the scroll's canonical status in Song landscape history."
        }
      ],
      zoomHotspots: [
        {
          xPct: 48,
          yPct: 26,
          titleVi: "Khối chủ sơn sắc cạnh và dòng chữ ký trên vách đá 1124",
          titleEn: "Faceted Central Peak and 1124 Cliffside Signature",
          detailVi: "Đỉnh núi chính dựng đứng với những vết chém góc cạnh như lưỡi rìu, tạo độ tương phản sáng tối sắc bén hơn hẳn lối chấm hạt mưa của Phạm Khoan. Soi 3.2x vách đá phẳng phía trên bên trái đỉnh núi thấy rõ hai cột chữ Khải chân phương đề niên đại 1124, chỉ ba năm trước biến cố Tĩnh Khang.",
          detailEn: "The main peak rises in sharp, chiseled facets producing starker light-dark contrast than Fan Kuan's raindrop dots. At 3.2x magnification on the flat cliff face upper-left of the summit, two neat columns of regular script record the 1124 date—just three years before the fall of Northern Song."
        },
        {
          xPct: 50,
          yPct: 72,
          titleVi: "Rừng cổ tùng đan tán đặc quánh ở trung – tiền cảnh",
          titleEn: "Dense Foreground Pine Grove Catching Mountain Winds",
          detailVi: "Hàng chục cây thông cổ thụ mọc ken dày trên mỏm đá giữa khung tranh, thân vặn xoắn đầy nội lực và tán kim thông vẽ từng chùm sắc mảnh bằng mực đen kết hợp thạch lục. Nhịp độ tán thông nghiêng nhẹ cùng chiều gợi rõ tiếng gió thổi rì rào qua vạn hốc núi.",
          detailEn: "Dozens of gnarled pines crowd the mid-foreground bluff, their twisted trunks and needle clusters rendered in crisp ink and muted malachite. The synchronized sway of the boughs evokes wind sweeping through a myriad mountain valleys."
        },
        {
          xPct: 68,
          yPct: 58,
          titleVi: "Dòng suối bậc thang và khe mây trắng lượn ngang",
          titleEn: "Stepped Cascade and Horizontal Mist Ribbon",
          detailVi: "Dòng thác từ khe sâu bên phải đổ xuống thành nhiều bậc nước trắng xóa qua các tảng đá cuội tròn nhẵn, vắt ngang dải mây trắng mỏng tách tầng không gian. Cách dùng dòng nước sáng dẫn ánh nhìn từ đáy tranh vòng lên đỉnh núi tạo cấu trúc chặt chẽ không khoảng thừa.",
          detailEn: "A mountain torrent descends from the right gorge in stepped white cascades over rounded boulders, cutting across a slender mist band. This luminous water path draws the viewer's eye systematically from bottom stream up to the summit."
        },
        {
          xPct: 26,
          yPct: 80,
          titleVi: "Kỹ thuật chuyển tiếp từ Bắc Tống sang Nam Tống",
          titleEn: "Stylistic Pivot from Northern to Southern Song",
          detailVi: "Các tảng đá bên trái dưới được khắc họa gần sát tầm mắt người xem với mặt cắt rõ nét và rêu phủ đậm nhạt tinh tế, báo hiệu lối bố cục cận cảnh biên giác của Mã Viễn và Hạ Khuê nửa thế kỷ sau. Lý Đường là nhân chứng sống nối liền hai thời đại vàng son của hội họa Tống triều.",
          detailEn: "Lower-left boulders press close to the viewer with crisp cleaved planes and nuanced moss washes, foreshadowing the intimate corner compositions of Ma Yuan and Xia Gui half a century later. Li Tang bridges the two great eras of Song painting."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Cảm nhận kết cấu núi đá dựng thành khối khít đầy áp lực, không còn nhân vật lữ hành để nhường trọn sân khấu cho đá, thông và suối.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x vào nét tiểu phủ phách thuẫn trên vách đá và chùm kim thông mực – thạch lục dày đặc ở giữa tranh.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Tìm dòng lạc khoản năm Tuyên Hòa thứ 6 (1124) trên vách đá và đối chiếu vai trò khai phái của Lý Đường trong Nam Tống Tứ Gia."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Take in the tightly packed rock architecture devoid of human travelers, leaving stone, pines, and rushing water in full command.",
        "Step 2 (Material & Brushwork Inspection): Magnify to 3.2x to inspect small axe-cut cliff strokes and dense ink-and-malachite pine needle clusters.",
        "Step 3 (Seals & Historical Context): Locate the 1124 cliffside signature and assess Li Tang's foundational role among the Four Masters of Southern Song."
      ]
    },
    {
      slug: "truong-giang-van-ly-do",
      titleVi: "Trường Giang Vạn Lý Đồ — Hạ Khuê (Tống bản)",
      titleEn: "Ten Thousand Li of the Yangtze River — Xia Gui",
      titleZh: "长江万里图 — 夏圭",
      tombstone: {
        dynasty: "Nam Tống (đầu thế kỷ XIII, ~1200–1224)",
        medium: "Thủy mặc trên lụa quyên (Trường quyển)",
        dimensions: "45,2 cm × 1124,9 cm (hiện tồn)",
        museum: "Bảo tàng Cố Cung Đài Bắc (National Palace Museum, Taipei)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Mực tùng yên và kỹ thuật kéo bùn đới thủy (Tha nê đới thủy thuẫn)",
          nameEn: "Pine-Soot Ink with 'Dragged-Mud-Through-Water' Washes",
          scientificNoteVi: "Hạ Khuê vung bút bản rộng ngậm nước cùng mực đậm quét liền một mạch trên mặt lụa, gọi là tha nê đới thủy thuẫn. Kỹ thuật này tạo mảng đá ẩm ướt tương phản cực mạnh giữa sắc đen sâu và khoảng lụa trắng mở rộng.",
          scientificNoteEn: "Xia Gui sweeps a broad water-and-ink-laden brush across silk in a single stroke—known as dragged-mud-through-water texture. This produces moist rocky planes with dramatic tonal contrast between jet black and open silk voids."
        },
        {
          nameVi: "Lụa quyên khổ rộng có độ hồ nhẹ",
          nameEn: "Lightly Sized Wide Silk Ground",
          scientificNoteVi: "Độ hồ phèn – keo nhẹ trên lụa cho phép vệt nước mực loang êm mà không chảy mất biên độ nét rìu bổ (đại phủ phách thuẫn). Sự kiểm soát độ ẩm trên trường quyển hơn 11 mét thể hiện kỹ thuật điều khiển mực đỉnh cao của Viện Họa Hàng Châu.",
          scientificNoteEn: "Light alum-glue sizing on the silk allows wet ink washes to feather softly without blurring the crisp edges of broad axe-cut strokes. Controlling moisture across 11 meters showcases Hangzhou Imperial Academy mastery."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "夏圭（小楷款） / 石渠宝笈 / 乾隆御览之宝",
          pinyin: "Xia Gui / Shiqu Baoji / Qianlong yulan zhi bao",
          translationVi: "Lạc khoản tiểu khải Hạ Khuê cùng ấn giám định Thạch Cừ Bảo Cấp của Cố Cung triều Thanh, xác nhận tác phẩm tiêu biểu cho phong cách Hạ Bán Biên (Hạ nửa góc).",
          translationEn: "Small regular-script signature 'Xia Gui' alongside Qing Shiqu Baoji imperial seals certifying this benchmark of the 'One-Corner Xia' style."
        },
        {
          sealZh: "项元汴印 / 墨林山人 / 吴宽题跋",
          pinyin: "Xiang Yuanbian yin / Molin Shanren / Wu Kuan tiba",
          translationVi: "Ấn sưu tầm của Hạng Nguyên Biện và bài đề bạt của học sĩ Ngô Khoan (triều Minh) ca ngợi khí thế cuồn cuộn vạn dặm của dòng Trường Giang từ thượng nguồn Tứ Xuyên ra biển Đông.",
          translationEn: "Seals of Ming collector Xiang Yuanbian and colophon by scholar Wu Kuan praising the sweeping ten-thousand-li momentum of the Yangtze from Sichuan gorges to the sea."
        }
      ],
      zoomHotspots: [
        {
          xPct: 18,
          yPct: 46,
          titleVi: "Ghềnh thác thượng nguồn Tam Hiệp và thuyền kéo dây",
          titleEn: "Upper-Reaches Gorge Rapids and Boat Trackers",
          detailVi: "Đoạn đầu bên phải diễn tả vách đá dựng đứng chèn ép dòng sông xiết vùng thượng nguồn, nơi các phu thuyền khom lưng kéo dây thừng ngược ghềnh. Phóng đại 3.2x thấy nét bút đại phủ phách quét ngang mạnh mẽ cắt vách đá sắc gọn, đối lập hoàn toàn với những xoáy nước vẽ bằng nét mảnh dẻo dai.",
          detailEn: "The right opening depicts sheer gorges squeezing turbulent upper-river rapids where trackers lean forward hauling towropes upstream. At 3.2x magnification, broad axe-cut sweeps shear the cliffs cleanly, contrasting with supple hairline strokes swirling across the whitewater."
        },
        {
          xPct: 44,
          yPct: 54,
          titleVi: "Thuyền buồm lớn vượt sóng và bố cục Hạ Bán Biên",
          titleEn: "Large River Junks and 'One-Corner' Composition",
          detailVi: "Hạ Khuê dồn toàn bộ khối núi đá, cây tùng và bến đò xuống mép dưới hoặc đẩy lên góc trên, để lại hơn nửa diện tích lụa trống thành mặt nước và bầu trời mênh mông. Con thuyền buồm lớn căng gió nghiêng thân giữa khoảng trống tạo cảm giác tốc độ và khoảng mở không gian vô tận.",
          detailEn: "Xia Gui compresses cliffs, pines, and jetties into the lower margin or upper corners, leaving over half the silk open as river and sky. A full-sailed wooden junk heeling across the expanse generates palpable speed and boundless spatial breath."
        },
        {
          xPct: 68,
          yPct: 42,
          titleVi: "Làng chài ven sông và cầu gỗ trong sương chiều",
          titleEn: "Riverside Fishing Village and Mist-Shrouded Timber Bridge",
          detailVi: "Khi sông chảy vào vùng trung lưu êm ả, hai bên bờ hiện ra cụm nhà sàn gỗ, cầu nhỏ bắc qua rạch và những hàng liễu chấm mực đậm nhạt. Chỉ bằng vài nét gạch ngang gọn gàng, Hạ Khuê dựng đủ mái tranh, trụ cầu và bóng người đứng tựa lan can ngắm nước.",
          detailEn: "As the river enters calmer middle reaches, stilted riverside dwellings, small creek bridges, and ink-washed willows emerge. With just a few economical horizontal strokes, Xia Gui suggests thatched roofs, bridge pilings, and figures leaning over railings."
        },
        {
          xPct: 88,
          yPct: 58,
          titleVi: "Cửa sông hạ lưu mở ra chân trời trắng xóa",
          titleEn: "Lower-Reaches Estuary Dissolving into Open Horizon",
          detailVi: "Đoạn kết bên trái thu hẹp dãy núi thành những gờ đồi mờ xa chỉ còn một vệt mực loãng như khói, nhường toàn bộ khung cảnh cho mặt sông rộng nối liền biển cả. Nhịp chuyển từ dữ dội (thượng nguồn) sang tĩnh lặng (hạ lưu) tuân thủ chặt chẽ nhạc tính cổ điển của trường quyển thủy mặc Nam Tống.",
          detailEn: "The left finale reduces mountains to distant smoky washes, surrendering the scroll to an estuary merging seamlessly with the sea. This cadence from turbulent headwaters to serene delta embodies the musical structure of Southern Song ink handscrolls."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Theo dõi hành trình 11,2 mét từ ghềnh thác thượng nguồn dữ dội qua trung lưu trù phú đến cửa sông mênh mông không bờ bến.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x vào vách đá quét nét đại phủ phách thuẫn và các chi tiết thuyền buồm, phu kéo dây vẽ bằng bút nhọn chấm mực cháy.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): So sánh tinh thần cô đọng 'Hạ Bán Biên' thời Nam Tống với bố cục tràn đầy kín khung của Bắc Tống một thế kỷ trước."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Journey across 11.2 meters from violent upper gorges through prosperous middle banks to a boundless misty estuary.",
        "Step 2 (Material & Brushwork Inspection): Magnify to 3.2x to study broad axe-cut cliff sweeps alongside crisp burnt-ink details of junks and boat trackers.",
        "Step 3 (Seals & Historical Context): Contrast Southern Song 'One-Corner Xia' economy with the dense, full-frame monumentality of Northern Song landscapes a century earlier."
      ]
    },
    {
      slug: "bach-mieu-thap-bat-la-han",
      titleVi: "Thập Bát La Hán Đồ — Lý Công Lân / Phái Bạch Miêu",
      titleEn: "Eighteen Luohans — After Li Gonglin (Baimiao School)",
      titleZh: "白描十八罗汉图 — 李公麟（白描传本）",
      tombstone: {
        dynasty: "Truyền bản Lý Công Lân (Bắc Tống – Nam Tống / Nguyên mô bản)",
        medium: "Thủy mặc Bạch Miêu thuần túy trên giấy Tuyên cổ",
        dimensions: "28,8 cm × 496,5 cm (quy cách trường quyển truyền bản)",
        museum: "Bảo tàng Cố Cung Đài Bắc & Viện Bảo tàng Nghệ thuật Metropolitan (các bản truyền thế)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Mực tùng yên thuần sắc (Bạch Miêu không màu)",
          nameEn: "Pure Pine-Soot Ink (Uncolored Baimiao)",
          scientificNoteVi: "Trường phái Bạch Miêu do Lý Công Lân định chuẩn loại bỏ hoàn toàn màu khoáng rực rỡ của tranh Phật giáo thời Đường, chỉ giữ lại đường nét mực đen tinh khiết trên giấy trắng. Độ đậm nhạt vi tế của mực thay thế cả sắc màu lẫn ánh sáng.",
          scientificNoteEn: "The Baimiao tradition codified by Li Gonglin strips away Tang Buddhist polychromy, leaving pure black ink lines on pale paper. Subtle ink-density variations replace both color and shading."
        },
        {
          nameVi: "Giấy bì chỉ hồ mịn độ tương phản cao",
          nameEn: "Finely Burnished Bast Paper",
          scientificNoteVi: "Sợi giấy mảnh ép chặt cho phép ngòi bút lông sói nhỏ kéo nét hành vân lưu thủy (mây trôi nước chảy) dài hàng chục centimet mà không đứt mạch. Tương phản đen – ngà tạo vẻ thanh thoát thoát tục phù hợp chủ đề Thiền tông.",
          scientificNoteEn: "Tightly burnished bast fibers allow fine weasel-hair brushes to draw continuous 'floating-cloud, flowing-water' contours dozens of centimeters long without snagging. The stark ink-on-ivory contrast reinforces Chan Buddhist austerity."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "龙眠居士李公麟画 / 乾隆御览之宝 / 三希堂精鉴玺",
          pinyin: "Longmian Jushi Li Gonglin hua / Qianlong yulan zhi bao / Sanxitang jingjian xi",
          translationVi: "Khoản đề Long Miên Cư Sĩ Lý Công Lân cùng ấn giám định nội phủ Càn Long, khẳng định dòng truyền thừa nghệ thuật vẽ La Hán bằng bạch miêu từ cuối thế kỷ XI.",
          translationEn: "Inscription naming Layman of Longmian Li Gonglin alongside Qianlong palace seals, affirming the eleventh-century baimiao lineage of Luohan painting."
        },
        {
          sealZh: "十八应真渡海赞（元明文人题跋）",
          pinyin: "Shiba Yingzhen duhai zan",
          translationVi: "Bài tán Thập Bát Ứng Chân Độ Hải của các văn nhân Nguyên – Minh ghi nhận mười tám vị La Hán kết hợp hình tượng Ấn Độ cổ điển với phong thái ẩn sĩ Trung Hoa.",
          translationEn: "Yuan and Ming literati eulogies on the Eighteen Arhats crossing the sea, noting the synthesis of Indian ascetic iconography with Chinese scholar-recluse poise."
        }
      ],
      zoomHotspots: [
        {
          xPct: 20,
          yPct: 48,
          titleVi: "Chân dung nhân tướng học dị biệt của 18 vị La Hán",
          titleEn: "Individualized Physiognomy of the Eighteen Luohans",
          detailVi: "Phóng đại 3.2x gương mặt các vị La Hán cho thấy cấu trúc xương gò má cao, hốc mắt sâu, lông mày rậm và nếp nhăn trán được khắc họa bằng nét mảnh nhưng đầy nội lực. Mỗi vị mang một trạng thái tâm lý riêng biệt từ nhập định, giảng kinh đến mỉm cười hóm hỉnh, thoát khỏi khuôn mẫu tượng thờ cứng nhắc.",
          detailEn: "At 3.2x magnification, the Luohans' faces reveal prominent cheekbones, deep-set eyes, bushy brows, and forehead creases rendered in taut, expressive hairlines. Each figure embodies a distinct mental state—from deep samadhi to wry amusement—breaking free of rigid iconic templates."
        },
        {
          xPct: 46,
          yPct: 54,
          titleVi: "Nếp áo cà sa theo pháp hành vân lưu thủy miêu",
          titleEn: "Monastic Robes in Flowing-Water Linework",
          detailVi: "Các nếp gấp áo cà sa buông rủ mềm mại theo chuyển động cơ thể nhờ đường bút uyển chuyển biến hóa độ dày nhẹ nhàng ở chỗ uốn cong, gọi là hành vân lưu thủy miêu. Phép đi bút này kế thừa tinh hoa Ngô Đạo Tử thời Đường nhưng tiết chế độ phóng khoáng để giữ vẻ điềm đạm của sĩ phu Bắc Tống.",
          detailEn: "Monastic robe folds drape naturally over seated and striding bodies through supple strokes that swell gently at bends—known as 'floating-cloud, flowing-water' drawing. This brushwork distills Tang master Wu Daozi's dynamism into Northern Song scholar-official restraint."
        },
        {
          xPct: 70,
          yPct: 44,
          titleVi: "Thần thú hộ pháp: Rồng, Hổ và Sư tử bằng nét mực thuần",
          titleEn: "Guardian Beasts Rendered in Pure Ink Line",
          detailVi: "Các linh thú đi kèm như mãnh hổ phục tùng dưới chân Phục Hổ La Hán hay rồng mây vờn quanh bình bát Hàng Long La Hán được vẽ chi tiết từng sợi lông bờm và vảy rồng bằng nét mực sắc mảnh. Cách vờn độ đậm nhạt trên lớp lông thú chứng tỏ sức biểu đạt không giới hạn của mực đơn sắc.",
          detailEn: "Accompanying guardian beasts—such as the tamed tiger beside the Tiger-Taming Luohan or the cloud dragon coiling near the Dragon-Subduing Luohan's alms bowl—display individually drawn fur strands and scales. Tonal modulation across animal coats proves the expressive range of monochrome ink."
        },
        {
          xPct: 86,
          yPct: 56,
          titleVi: "Pháp khí Thiền tông và cảnh độ hải tối giản",
          titleEn: "Buddhist Implements and Minimalist Sea-Crossing Waves",
          detailVi: "Tích trượng, phất trần, kinh bối diệp và sóng nước dưới chân các vị La Hán vượt biển đều được vẽ sắc sảo bằng nét tuyến tính đều tay không tô mảng. Khoảng giấy trống rộng phía trên gợi không gian thanh tịnh vô biên, nơi hình tượng tôn giáo hòa nhập vào thẩm mỹ văn nhân.",
          detailEn: "Monk staffs, fly-whisks, palm-leaf sutras, and curling sea waves beneath the crossing Arhats are articulated with steady linear precision without heavy washes. Generous unpainted space overhead evokes boundless serenity where Buddhist devotion merges with literati aesthetics."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Đọc tuần tự năm nhóm La Hán tương tác sinh động dọc gần 5 mét trường quyển để cảm nhận nhịp điệu tụ – tán trên nền giấy trắng.",
        "Bước 2 (Soi chất liệu & nét bút): Phóng đại 3.2x vào nếp nhăn khuôn mặt, sợi lông thú hộ pháp và đường bút hành vân lưu thủy trên tà áo cà sa.",
        "Bước 3 (Đọc ấn chương & đối sánh thời đại): Đối chiếu bút pháp Bạch Miêu Lý Công Lân với truyền thống tranh La Hán đa sắc thời Đường (Quán Hưu) và ảnh hưởng tới hội họa Thiền tông Nhật Bản – Việt Nam."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Read the sequential groups of interacting Luohans along the nearly 5-meter scroll to appreciate the rhythm of clustering and open paper.",
        "Step 2 (Material & Brushwork Inspection): Zoom to 3.2x on facial wrinkles, guardian beasts' fur, and flowing-water robe lines.",
        "Step 3 (Seals & Historical Context): Compare Li Gonglin's uncolored baimiao idiom with Tang polychrome Luohan painting (Guanxiu) and its later impact across East Asian Chan art."
      ]
    }
  ];

  var TREASURES_HOTSPOTS_15 = [
    {
      slug: "houmuwu-ding",
      titleVi: "Hậu Mẫu Mậu Đỉnh — Đồng Thanh Lễ Khí Nhà Thương",
      titleEn: "Houmuwu Ding — Late Shang Bronze Ritual Cauldron",
      titleZh: "后母戊鼎（司母戊鼎）— 商代晚期",
      tombstone: {
        dynasty: "Thương vãn kỳ (~1200–1046 TCN, Ân Khư, An Dương)",
        medium: "Hợp kim đồng thanh (Cu–Sn–Pb) đúc khuôn ghép khối đất nung",
        dimensions: "Cao 133 cm × Dài miệng 110 cm × Rộng 79 cm; Nặng 832,84 kg",
        museum: "Bảo tàng Quốc gia Trung Quốc (National Museum of China, Beijing)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Hợp kim Đồng – Thiếc – Chì (Cu 84,77% : Sn 11,64% : Pb 2,79%)",
          nameEn: "Copper-Tin-Lead Bronze Alloy (84.77% Cu, 11.64% Sn, 2.79% Pb)",
          scientificNoteVi: "Phân tích quang phổ cho thấy tỷ lệ đồng 84,77% và thiếc 11,64% khớp gần như tuyệt đối với quy chuẩn 'Lục Tề' (lục phân kỳ kim nhi tích cư nhất) trong sách Chu Lễ · Khảo Công Ký. Chì 2,79% giúp giảm nhiệt độ nóng chảy và tăng độ chảy lỏng khi rót vào khuôn lớn.",
          scientificNoteEn: "Spectroscopic assay reveals 84.77% copper and 11.64% tin, matching the Zhouli Kaogongji 'Six Formulas' standard for ritual cauldrons. The 2.79% lead addition lowered melting temperature and improved molten fluidity across the colossal mold."
        },
        {
          nameVi: "Lớp gỉ đồng Malachite tự nhiên (Cu2CO3(OH)2) và Cuprite (Cu2O)",
          nameEn: "Natural Malachite (Cu2CO3(OH)2) and Cuprite (Cu2O) Patina",
          scientificNoteVi: "Hơn 3.000 năm chôn sâu dưới lớp đất hoàng thổ An Dương đã hình thành lớp oxit đồng đỏ (cuprite) sát lõi kim loại và lớp cacbonat đồng xanh lục ổn định bên ngoài, bảo vệ thân đỉnh khỏi ăn mòn sâu.",
          scientificNoteEn: "Over three millennia buried in Anyang loess generated an inner red cuprite layer sealed beneath a stable green malachite crust, passivating the massive bronze walls against deep corrosion."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "后母戊（铸于腹内壁）",
          pinyin: "Hou Mu Wu",
          translationVi: "Minh văn Kim văn ba chữ đúc nổi ở thành trong bụng đỉnh: Đỉnh cúng tế Vương hậu Mậu (vợ vua Thương Vũ Đinh, miếu hiệu Mậu).",
          translationEn: "Three-character bronze inscription cast on the inner belly wall: Ritual vessel dedicated to Queen Mother Wu (consort of Shang King Wu Ding)."
        },
        {
          sealZh: "《周礼·考工记》：金有六齐，六分其金而锡居一，谓之钟鼎之齐",
          pinyin: "Zhouli Kaogongji: Jin you liu qi, liu fen qi jin er xi ju yi, wei zhi zhongding zhi qi",
          translationVi: "Đối chiếu cổ tịch Khảo Công Ký xác nhận tỷ lệ đồng – thiếc đúc chuông đỉnh lễ khí cổ đại tương ứng chuẩn luyện kim thực tế của Hậu Mẫu Mậu Đỉnh.",
          translationEn: "Cross-reference to the Kaogongji metallurgic canon confirming the ancient bell-and-cauldron copper-tin ratio realized in the Houmuwu Ding."
        }
      ],
      zoomHotspots: [
        {
          xPct: 50,
          yPct: 48,
          titleVi: "Minh văn Kim văn '后母戊' đúc âm trên thành trong",
          titleEn: "Inner-Wall Cast Inscription 'Hou Mu Wu'",
          detailVi: "Phóng đại 3.2x bên trong thành bụng đỉnh hiện rõ ba chữ Kim văn sắc nét: '后' (hình bàn tay và miệng chỉ bậc vương hậu), '母' (người phụ nữ quỳ) và '戊' (hình chiếc rìu chiến biểu thị thiên can Mậu). Năm 2011, Bảo tàng Quốc gia Trung Quốc chính thức chuẩn hóa cách đọc từ 'Tư Mẫu Mậu' sang 'Hậu Mẫu Mậu' dựa trên ngữ pháp giáp cốt văn Ân Khư.",
          detailEn: "At 3.2x magnification inside the vessel wall, three crisp bronze characters appear: Hou (queen), Mu (mother), and Wu (halberd-form celestial stem). In 2011, the National Museum of China standardized the reading from Simuwu to Houmuwu based on Anyang oracle-bone grammar."
        },
        {
          xPct: 24,
          yPct: 20,
          titleVi: "Quai đỉnh đúc nổi song hổ ngậm đầu người (Song hổ phệ nhân đầu)",
          titleEn: "Upright Handles with Twin Tigers Gripping a Human Head",
          detailVi: "Hai quai đứng lớn trên miệng đỉnh có mặt ngoài đúc nổi hoa văn hai con hổ chầu đối xứng, hàm mở rộng ngậm chung một đầu người ở giữa. Đồ án uy nghi này biểu trưng cho quyền uy thông linh giữa vương quyền nhà Thương với thần linh và tổ tiên trong nghi lễ tế tự trọng đại.",
          detailEn: "Both upright rim handles carry high-relief motifs of paired tigers facing inward with open jaws clasping a central human head. This severe iconographic formula symbolized royal Shang authority mediating between sovereign power and ancestral spirits."
        },
        {
          xPct: 76,
          yPct: 56,
          titleVi: "Đường ghép khuôn đất nung (Bình phạm pháp) và hoa văn Thao Thiết",
          titleEn: "Piece-Mold Casting Seams and Taotie Zoomorphic Relief",
          detailVi: "Bốn góc và dải trên thành đỉnh chạy dày đặc hoa văn thú mặt Thao Thiết và rồng Quỳ trên nền vân lôi hình xoắn vuông, để trơn hoàn toàn phần bụng giữa. Quan sát vi mô lộ rõ đường gờ ghép (phạm phùng) từ hàng chục mảnh khuôn đất nung ghép khớp, đòi hỏi hơn 200 thợ đúc rót đồng nóng chảy đồng thời từ nhiều lò nồi nấu.",
          detailEn: "Corners and upper bands feature taotie monster masks and kui dragons over squared thunder-scroll grounds, leaving central belly panels plain. Microscopic inspection reveals piece-mold casting seams from dozens of clay mold sections poured simultaneously by over 200 foundry workers."
        },
        {
          xPct: 34,
          yPct: 82,
          titleVi: "Chân trụ rỗng lõi đất nung chịu tải 832 kg",
          titleEn: "Clay-Cored Tubular Legs Supporting 832.84 kg",
          detailVi: "Bốn chân trụ tròn dày dặn được đúc bằng phương pháp đổ đồng bao quanh lõi đất nung trung tâm giúp giảm trọng lượng thừa, tránh nứt co ngót nhiệt khi nguội và nâng đỡ vững chắc thân đỉnh nặng hơn 832 kg. Mặt ngoài mỗi chân đúc thêm một mặt Thao Thiết ba gờ nổi tăng độ cứng kết cấu.",
          detailEn: "Four stout cylindrical legs were cast around internal clay cores to prevent thermal shrinkage cracks while supporting the 832.84 kg vessel body. Raised three-flange taotie masks cast along the upper legs reinforce structural rigidity."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Đánh giá tỷ lệ hình khối chữ nhật bề thế cao 1,33 mét và khối lượng 832,84 kg — chiếc đỉnh đồng cổ đại nặng nhất thế giới từng được khai quật.",
        "Bước 2 (Soi chất liệu & khuôn đúc): Phóng đại 3.2x vào đường ghép khuôn bình phạm, họa tiết song hổ trên quai và độ sắc nét của hoa văn vân lôi nền.",
        "Bước 3 (Đọc minh văn & đối sánh thời đại): Đọc ba chữ Kim văn '后母戊' trong lòng đỉnh và đối chiếu với hệ thống lò đúc đồng quy mô công nghiệp tại Ân Khư thế kỷ XIII–XII TCN."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Gauge the rectangular 1.33-meter silhouette and 832.84 kg mass—the heaviest ancient bronze vessel ever excavated.",
        "Step 2 (Material & Casting Inspection): Magnify to 3.2x to inspect piece-mold seams, twin-tiger handle reliefs, and razor-sharp squared thunder-scroll backgrounds.",
        "Step 3 (Inscriptions & Historical Context): Read the three inner-wall characters 'Hou Mu Wu' and situate the cauldron within late Shang industrial bronze foundries at Anyang."
      ]
    },
    {
      slug: "sanxingdui-bronze-mask",
      titleVi: "Mặt Nạ Đồng Tung Mục Tam Tinh Đôi — Văn Minh Thục Cổ",
      titleEn: "Sanxingdui Protruding-Eye Bronze Mask — Ancient Shu Civilization",
      titleZh: "三星堆青铜纵目面具 — 古蜀文明",
      tombstone: {
        dynasty: "Thương vãn kỳ (~1200–1050 TCN, Hố tế tự số 2 Tam Tinh Đôi, Quảng Hán, Tứ Xuyên)",
        medium: "Đồng thanh đúc ghép phân đoạn (Phân chú pháp)",
        dimensions: "Rộng 138 cm × Cao 66 cm × Nhô mắt 16 cm; Nặng khoảng 65 kg",
        museum: "Bảo tàng Tam Tinh Đôi (Sanxingdui Museum, Guanghan, Sichuan)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Hợp kim Đồng – Chì – Thiếc cao chì vùng lưu vực Tứ Xuyên",
          nameEn: "High-Lead Copper-Lead-Tin Bronze Alloy",
          scientificNoteVi: "Phân tích đồng vị chì cho thấy nguồn quặng đồng vùng Tây Nam cổ đại có hàm lượng chì cao hơn đồng Trung Nguyên, cho phép đúc khuôn thành mỏng rộng tới 1,38 mét với độ chi tiết gờ tai và trán sắc bén.",
          scientificNoteEn: "Lead-isotope analysis indicates southwestern ore sources with elevated lead ratios compared to Central Plains bronzes, enabling thin-walled casting across a 1.38-meter span with crisp ear and brow flanges."
        },
        {
          nameVi: "Dấu vết sắc tố Chu sa (HgS) và Muội than (Carbon Black)",
          nameEn: "Trace Cinnabar (HgS) and Carbon-Black Pigments",
          scientificNoteVi: "Kiểm định vi mô ghi nhận vết chu sa đỏ sót lại ở vành môi và lỗ tai, cùng sắc đen muội than phủ trên lông mày và đồng tử mắt. Điều này chứng minh mặt nạ nguyên thủy mang diện mạo đa sắc rực rỡ trước khi bị hỏa táng nghi lễ.",
          scientificNoteEn: "Micro-analysis detects residual red cinnabar along lips and earlobes alongside black carbon pigment on eyebrows and pupils, confirming the mask was originally polychrome prior to ritual burning."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "《华阳国志·蜀志》：有蜀侯蚕丛，其目纵，始称王",
          pinyin: "Huayang Guozhi · Shuzhi: You Shuhou Cancong, qi mu zong, shi cheng wang",
          translationVi: "Thư tịch Hoa Dương Quốc Chí (Thường Cừ, Đông Tấn) ghi chép: Cổ Thục có vua Tàm Tùng mắt nhô thẳng ra ngoài (tung mục), là vị vương đầu tiên nước Thục.",
          translationEn: "Chronicles of Huayang (Eastern Jin) records: Ancient Shu had Lord Cancong, whose eyes protruded forward (zongmu), the first to claim kingship in Shu."
        },
        {
          sealZh: "三星堆二号祭祀坑 K2②:148（1986年发掘编号）",
          pinyin: "Sanxingdui Erhao Jisikeng K2(2):148",
          translationVi: "Số hiệu khai quật khảo cổ hố tế tự số 2 Tam Tinh Đôi năm 1986, đi kèm ngà voi cháy, tượng đồng đứng cao 2,6 mét và cây thần đồng.",
          translationEn: "1986 excavation registration from Sacrificial Pit No. 2 at Sanxingdui, unearthed alongside charred elephant tusks, the 2.6 m standing figure, and bronze spirit trees."
        }
      ],
      zoomHotspots: [
        {
          xPct: 36,
          yPct: 44,
          titleVi: "Đôi tròng mắt hình trụ nhô dài 16 cm (Tung Mục)",
          titleEn: "16 cm Cylindrical Protruding Eyes (Zongmu)",
          detailVi: "Hai trụ mắt tròn đường kính 9 cm vươn thẳng ra phía trước 16 cm, đúc riêng rồi hàn đúc nối (chú tiếp) vào hốc mắt hình lá hạnh nhân sắc cạnh. Giới khảo cổ liên hệ trực tiếp hình tượng 'tung mục' với thủy tổ Tàm Tùng của nước Thục cổ, biểu trưng cho nhãn lực thần linh thấu suốt thiên địa.",
          detailEn: "Two 9 cm diameter cylinders project 16 cm forward, cast separately and metallurgically joined into sharp almond-shaped eye sockets. Archaeologists directly link this 'protruding eye' iconography to ancestral Shu king Cancong, symbolizing supernatural omniscience."
        },
        {
          xPct: 50,
          yPct: 24,
          titleVi: "Lỗ chốt vuông giữa trán gắn vật trang trí Quỳ Long cao 68 cm",
          titleEn: "Forehead Square Mortise for 68 cm Kui-Dragon Crest",
          detailVi: "Ngay giữa sống mũi trên trán có một lỗ chốt vuông đúc sẵn dùng để cắm thanh đồng hình rồng Quỳ uốn cong vươn cao 68 cm (tìm thấy trong cùng hố K2). Soi 3.2x quanh lỗ chốt thấy vết đổ đồng bổ sung gia cố chịu mô-men uốn của phần mào rồng nặng nhiều kilôgam.",
          detailEn: "At the center of the brow bridge sits a cast square socket engineered to hold a 68 cm curving bronze kui-dragon crest found in the same pit. At 3.2x magnification, secondary pour-welded bronze reinforcement surrounds the mortise to bear the crest's cantilever torque."
        },
        {
          xPct: 12,
          yPct: 42,
          titleVi: "Đôi tai xòe rộng 138 cm theo hình cánh thú (Thiên lý nhĩ)",
          titleEn: "138 cm Wing-Flared Ears (Thousand-Li Hearing)",
          detailVi: "Hai vành tai lớn vểnh nhọn mở rộng sang hai bên tới 1,38 mét, đúc ghép riêng rồi khóa cơ học bằng các chốt đúc vào hai má. Phối hợp cùng đôi mắt nhô dài, cặp tai khổng lồ thể hiện thần tính 'thuận phong nhĩ, thiên lý nhãn' của vật thờ trên cột gỗ đền miếu cổ Thục.",
          detailEn: "Two sweeping pointed ears span 1.38 meters across, separately cast and mechanically lock-cast onto the cheekbones. Paired with the projecting eyes, the giant ears embody divine all-hearing and all-seeing power mounted on an ancient Shu temple pillar."
        },
        {
          xPct: 50,
          yPct: 72,
          titleVi: "Khóe miệng cười bí ẩn và các lỗ vuông gá lắp cột gỗ",
          titleEn: "Enigmatic Upturned Mouth and Timber-Mounting Holes",
          detailVi: "Khóe miệng kéo dài tới tận mang tai hơi nhếch lên tạo nụ cười vừa uy nghiêm vừa siêu thực, để lộ hàm dưới khép kín. Quanh viền trán và cằm có các lỗ vuông đều đặn chứng minh chiếc mặt nạ nặng 65 kg này không dùng để đeo lên mặt người mà được đóng chặt lên cột trụ gỗ thần điện.",
          detailEn: "Wide lips stretch toward the cheeks in a serene yet uncanny upturned smile. Evenly spaced square perforations around the forehead and jaw rim prove this 65 kg mask was never worn by a human, but bolted onto a monumental wooden temple column."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Quan sát tỷ lệ siêu thực rộng 1,38 mét của chiếc mặt nạ đồng lớn nhất từng phát hiện ở Tam Tinh Đôi, tách biệt hoàn toàn với mỹ học lễ khí Trung Nguyên.",
        "Bước 2 (Soi chất liệu & khuôn đúc): Phóng đại 3.2x vào mối nối đúc ghép (chú tiếp) tại chân hai trụ mắt, lỗ chốt vuông giữa trán và vết sắc tố chu sa còn sót ở khóe môi.",
        "Bước 3 (Đọc sử liệu & đối sánh thời đại): Đối chiếu hình tượng 'Tung Mục' với ghi chép về vua Tàm Tùng trong Hoa Dương Quốc Chí và nền văn minh đa trung tâm thời Thương."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Observe the surreal 1.38-meter width of Sanxingdui's largest bronze mask, radically distinct from Central Plains ritual vessel aesthetics.",
        "Step 2 (Material & Casting Inspection): Magnify to 3.2x to inspect cast-on joints at the eye-cylinder bases, the forehead square mortise, and residual cinnabar along the mouth.",
        "Step 3 (Texts & Historical Context): Cross-reference 'protruding eyes' with Cancong in the Chronicles of Huayang and the polycentric Shang-era cultural landscape."
      ]
    },
    {
      slug: "ru-yao-tianqing",
      titleVi: "Chậu Thủy Tiên Men Thiên Thanh Gốm Nhữ Diêu — Bắc Tống",
      titleEn: "Ru Ware Sky-Blue Narcissus Basin — Northern Song",
      titleZh: "北宋汝窑天青无纹水仙盆",
      tombstone: {
        dynasty: "Bắc Tống (khoảng năm 1086–1106, Lò Thanh Lương Tự, Bảo Phong, Hà Nam)",
        medium: "Sứ men thanh từ có bột mã não, nung khử ở ~1220°C",
        dimensions: "Cao 6,7 cm × Dài miệng 23 cm × Rộng 16,4 cm",
        museum: "Bảo tàng Cố Cung Đài Bắc (National Palace Museum, Taipei)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Men Thiên Thanh (SiO2–Al2O3–CaO) chứa sắt hóa trị II (FeO ~1,8%) và bột Mã Não",
          nameEn: "Sky-Blue Calcia-Silica Glaze (~1.8% FeO) with Agate Powder",
          scientificNoteVi: "Sắc lam ngọc 'vũ quá thiên thanh vân phá xứ' sinh ra từ ion sắt hóa trị II trong bầu khí quyển lò nung khử kết hợp hiện tượng tán xạ ánh sáng Rayleigh trên các bọt khí vi mô và tinh thể anorthite. Lớp men dày ~0,5 mm tạo độ mịn bóng như mỡ ngọc thay vì chói như thủy tinh.",
          scientificNoteEn: "The famed 'sky-blue after rain' hue arises from ferrous iron (Fe2+) fired in reduction combined with Rayleigh light scattering across micro-bubbles and anorthite crystals. The 0.5 mm glaze yields a soft, jade-like luster rather than glassy glare."
        },
        {
          nameVi: "Xương đất sét hương hôi (Hương hôi thai) chứa hàm lượng Al2O3 cao",
          nameEn: "Incense-Ash Gray Stoneware Body (High-Alumina Clay)",
          scientificNoteVi: "Xương gốm màu xám tro mịn đặc trưng vùng Bảo Phong (Hà Nam) giàu nhôm oxit, giúp phôi mỏng giữ chuẩn dáng bầu dục bốn chân mây không bị biến dạng ở nhiệt độ nung 1220°C.",
          scientificNoteEn: "Fine incense-ash gray clay native to Baofeng, Henan possesses high alumina content, keeping the thin-walled oval body and four cloud-scroll feet warp-free at 1220°C."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "官窑莫辨宋与唐，汝窑尤难得（乾隆御制诗意，底座附配紫檀木座刻诗）",
          pinyin: "Qianlong imperial poem carved on custom zitan-wood stand",
          translationVi: "Chậu không khắc chữ lên đáy sứ để bảo toàn hoàn mỹ mặt men không rạn; Hoàng đế Càn Long cho chế riêng đế gỗ Tử Đàn có ngăn kéo cất tập tranh chữ và khắc thơ tán tụng lên đế gỗ.",
          translationEn: "The porcelain base itself remains uninscribed to preserve its flawless uncrackled glaze; Emperor Qianlong commissioned a custom zitan stand inscribed with imperial verse and housing a hidden album drawer."
        },
        {
          sealZh: "《坦斋笔衡》（叶寘，南宋）：本朝以定州白瓷器有芒，不堪用，遂命汝州造青窑器",
          pinyin: "Tanzhai Biheng (Ye Zhi, Southern Song): ...sui ming Ruzhou zao qingyaoqi",
          translationVi: "Ghi chép Thản Trai Bút Hành thời Nam Tống giải thích triều đình Bắc Tống đặt lò Nhữ Diêu chế sứ xanh vì sứ trắng Định Diêu có viền miệng thô không tráng men.",
          translationEn: "Southern Song record Tanzhai Biheng explaining that the Northern Song court commissioned Ru celadon because white Ding ware rims remained unglazed and rough."
        }
      ],
      zoomHotspots: [
        {
          xPct: 50,
          yPct: 44,
          titleVi: "Độc bản toàn cầu: Bề mặt men Thiên Thanh hoàn toàn không vết rạn",
          titleEn: "World-Unique Uncrackled Sky-Blue Glaze Surface",
          detailVi: "Trong khoảng 90 hiện vật gốm Nhữ Diêu truyền thế toàn thế giới, hầu hết đều có mạng rạn băng liệt (khai phiến) do lệch hệ số giãn nở nhiệt giữa men và xương. Chiếc chậu thủy tiên này là tiêu bản duy nhất đạt độ tương thích giãn nở tuyệt đối, bề mặt láng mịn không một vết nứt dưới kính lúp 3.2x.",
          detailEn: "Among roughly 90 surviving Ru ware vessels worldwide, nearly all exhibit ice-crackle crazing from glaze-body thermal mismatch. This narcissus basin is the sole extant specimen achieving near-perfect thermal compatibility, remaining completely uncrackled even at 3.2x magnification."
        },
        {
          xPct: 26,
          yPct: 28,
          titleVi: "Miệng chậu bo tròn mỏng và hiệu ứng ánh hồng nhạt (Ánh mã não)",
          titleEn: "Gently Flared Rim and Subtle Warm-Pink Opalescence",
          detailVi: "Tại gờ miệng bầu dục nơi lớp men chảy mỏng hơn, sắc men thiên thanh chuyển nhẹ sang ánh trắng ngà phớt hồng cực dịu mắt nhờ ánh sáng xuyên xuống lớp xương đất tro hương. Đường cong thành chậu đạt độ cân đối hình học tinh tế theo đúng thẩm mỹ tối giản thời Tống Huy Tông.",
          detailEn: "Along the flared oval lip where the glaze thins slightly, sky blue shifts softly toward warm ivory-pink opalescence as light interacts with the underlying ash-gray body. The silhouette achieves the quiet geometric perfection prized under Emperor Huizong."
        },
        {
          xPct: 72,
          yPct: 76,
          titleVi: "Bốn chân vân đầu (chân mây) điêu khắc mềm mại",
          titleEn: "Four Sculpted Cloud-Scroll Feet",
          detailVi: "Thân chậu được nâng trên bốn chân uốn cong hình đám mây (vân đầu túc) gắn cân đối ở bốn góc đáy, tạo cảm giác chậu sứ như đang nổi nhẹ trên mặt bàn gỗ. Phần tiếp giáp giữa chân và đáy chậu đọng lớp men dày hơn, hiện sắc lam ngọc sâu lắng.",
          detailEn: "Four outward-curling cloud-head feet lift the oval basin evenly, creating an illusion of buoyancy above a wooden table. Where the feet meet the underside, thicker glaze pooling deepens into lustrous celadon-blue."
        },
        {
          xPct: 52,
          yPct: 84,
          titleVi: "Kỹ thuật nung toàn men và dấu đinh kê 'Chi Ma Đinh' (hạt vừng)",
          titleEn: "Full-Glaze Firing and Sesame-Seed Spur Marks",
          detailVi: "Khác với gốm thông thường phải cạo men ở vành đáy để đặt lên bao nung, Nhữ Diêu phủ men kín 100% cả mặt đáy và kê trên 6 chiếc đinh đất chịu lửa đầu nhọn cực nhỏ. Khi gỡ ra sau nung, mặt đáy chỉ còn các chấm li ti nhỏ bằng hạt vừng gọi là 'Chi Ma Đinh' để lộ sắc xương xám tro đặc trưng.",
          detailEn: "Unlike ordinary ceramics wiped bare on the foot ring, Ru ware was glazed completely across the underside and supported on tiny pointed refractory spurs. Removed after firing, they leave six minuscule 'sesame-seed' scars exposing the authentic incense-ash stoneware core."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Chiêm ngưỡng dáng chậu bầu dục bốn chân mây tối giản không chạm khắc hoa văn, để sắc men và hình khối tự lên tiếng theo đỉnh cao thẩm mỹ Bắc Tống.",
        "Bước 2 (Soi chất liệu & lớp men): Phóng đại 3.2x để kiểm chứng bề mặt men không một vết rạn độc nhất vô nhị, bọt khí tán xạ ánh sáng kiểu ngọc và dấu đinh kê hạt vừng ở đáy.",
        "Bước 3 (Đọc sử liệu & đối sánh thời đại): Đặt chậu thủy tiên vào thời kỳ hoàng kim ngắn ngủi chỉ 20 năm của lò Thanh Lương Tự và đối chiếu với gốm Quan, Ca, Quân, Định."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Appreciate the unadorned oval silhouette and four cloud feet letting pure form and glaze speak in Northern Song minimalist aesthetics.",
        "Step 2 (Material & Glaze Inspection): Zoom to 3.2x to verify the uniquely uncrackled surface, jade-like micro-bubble opalescence, and underside sesame-seed spur marks.",
        "Step 3 (Texts & Historical Context): Place the basin within the brief 20-year zenith of the Qingliangsi kiln and compare it against Guan, Ge, Jun, and Ding wares."
      ]
    },
    {
      slug: "liangzhu-yucong",
      titleVi: "Ngọc Tông Vương Lương Chử — Tân Thạch Khí Văn Minh Ngọc",
      titleEn: "King of Jade Cong — Liangzhu Neolithic Culture",
      titleZh: "良渚文化玉琮王 — 新石器时代晚期",
      tombstone: {
        dynasty: "Văn hóa Lương Chử (~3300–2300 TCN, Mộ M12 Phản Sơn, Dư Hàng, Hàng Châu)",
        medium: "Ngọc mềm Nephrite (Thấu thiểm thạch) chạm khắc bằng bột cát thạch anh",
        dimensions: "Cao 8,8 cm × Đường kính miệng 17,6 cm × Lỗ giữa 4,9 cm; Nặng 6,5 kg",
        museum: "Bảo tàng Tỉnh Chiết Giang (Zhejiang Provincial Museum, Hangzhou)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Ngọc Nephrite / Thấu thiểm thạch (Ca2(Mg,Fe)5Si8O22(OH)2)",
          nameEn: "Tremolite-Actinolite Nephrite Jade (Ca2(Mg,Fe)5Si8O22(OH)2)",
          scientificNoteVi: "Ngọc mềm có độ cứng Mohs 6,0–6,5 với cấu trúc sợi khoáng đan xen siêu bền chống nứt vỡ. Hiện tượng phong hóa thổ thấm (kê cốt bạch) qua 5.000 năm chuyển sắc ngọc vàng lục nguyên thủy sang trắng ngà mịn như xương gà.",
          scientificNoteEn: "Nephrite measures 6.0–6.5 on the Mohs scale with an interlocking fibrous crystal structure highly resistant to fracture. Five millennia of burial alteration transformed its original greenish-yellow hue into opaque chicken-bone white."
        },
        {
          nameVi: "Bột mài Thạch anh / Hồng ngọc (SiO2 / Al2O3, Mohs 7–9)",
          nameEn: "Quartz / Corundum Abrasive Slurry (Mohs 7–9)",
          scientificNoteVi: "Trong thời đại chưa có công cụ kim loại, nghệ nhân Lương Chử dùng dây sợi, ống tre quay và mảnh đá lửa kết hợp bột cát thạch anh hoặc corundum ướt để khoan lỗ trụ và khắc chìm hàng chục đường vân dưới 0,2 mm.",
          scientificNoteEn: "Lacking metal tools, Liangzhu lapidaries used wet quartz or corundum abrasive slurries with cord saws, bamboo tubular drills, and flint points to bore the central cylinder and incise hairlines narrower than 0.2 mm."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "《周礼·春官·大宗伯》：以苍璧礼天，以黄琮礼地",
          pinyin: "Zhouli · Chunguan: Yi cangbi li tian, yi huangcong li di",
          translationVi: "Chu Lễ ghi chép quy chuẩn lễ ngọc cổ truyền: Dùng ngọc Bích tròn xanh tế Trời, dùng ngọc Tông vuông vàng tế Đất (kế thừa trực tiếp vũ trụ quan 'Thiên viên địa phương' từ Lương Chử).",
          translationEn: "Rites of Zhou codifying archaic jade cosmology: Worship Heaven with a blue-green bi disc, and worship Earth with a yellow cong tube (inheriting Liangzhu's round-heaven, square-earth model)."
        },
        {
          sealZh: "反山 M12:98（1986年浙江余杭反山王陵出土）",
          pinyin: "Fanshan M12:98 (excavated 1986, Yuhang, Zhejiang)",
          translationVi: "Ký hiệu hiện vật khai quật tại lăng mộ vương tộc Phản Sơn M12 năm 1986, nằm ngay bên trái đầu mộ chủ cùng Ngọc Việt Vương biểu trưng vương quyền và thần quyền.",
          translationEn: "Artifact catalog number from Royal Tomb M12 at Fanshan (1986), placed beside the tomb occupant's left shoulder alongside the jade ceremonial axe symbolizing supreme theocratic authority."
        }
      ],
      zoomHotspots: [
        {
          xPct: 50,
          yPct: 48,
          titleVi: "Huy hiệu Thần Nhân Thú Diện (Thần cưỡi thú) khắc vi mô",
          titleEn: "Micro-Engraved 'Deity Riding a Beast' Emblem",
          detailVi: "Chính giữa bốn mặt rãnh dọc khắc nổi và khắc chìm tám hình 'Thần Nhân Thú Diện' hoàn chỉnh cao chỉ 3 cm: phía trên là vị thần đội mũ lông vũ hình thang ngược, tay ôm lấy phần mặt thú mắt tròn lớn mũi dẹt bên dưới. Soi 3.2x thấy trong 1 mm chiều rộng có tới 4–5 đường vân xoắn khắc tay không hề chồng cắt nhau.",
          detailEn: "Centered along all four vertical channels are eight complete 3 cm 'Deity Riding a Beast' emblems: a feather-crowned deity above clasping a round-eyed beast mask below. At 3.2x magnification, 4 to 5 hand-incised spiral lines fit cleanly within a single millimeter without overlapping."
        },
        {
          xPct: 24,
          yPct: 36,
          titleVi: "Bốn góc khối vuông với hình mặt thú lược giản xếp tầng",
          titleEn: "Four Corner Registers with Tiered Stylized Beast Masks",
          detailVi: "Bốn góc ngoài tạo hình vuông bo tròn chia làm hai tầng trên dưới, mỗi góc là một khuôn mặt thần thú giản hóa dùng chính cạnh góc làm sống mũi trung tâm. Thiết kế ba chiều biến mỗi góc vuông thành trục đối xứng tự nhiên giúp đồ án nhìn rõ từ cả hai mặt kề nhau.",
          detailEn: "The four rounded exterior corners divide into upper and lower tiers, each using the corner ridge itself as the central nose bridge of a stylized mask. This three-dimensional corner symmetry lets each face read coherently from two adjacent sides."
        },
        {
          xPct: 50,
          yPct: 20,
          titleVi: "Lỗ khoan đối tâm hai chiều và dấu bậc thềm ống khoan tre",
          titleEn: "Bi-Directional Tubular Bore and Central Step Seam",
          detailVi: "Lỗ tròn đường kính 4,9 cm xuyên dọc trục trung tâm được khoan đối đầu từ hai phía trên và dưới bằng ống khoan xoay kết hợp cát thạch anh. Phóng đại 3.2x bên trong lòng ống thấy rõ gờ tiếp giáp siêu mảnh giữa hai mũi khoan khớp lệch chưa đầy 1 mm — minh chứng trình độ cơ khí đá đạt đỉnh cao 5.000 năm trước.",
          detailEn: "The 4.9 cm axial bore was drilled from opposite ends using a rotary tubular drill charged with abrasive sand. At 3.2x magnification inside the bore, a faint junction ridge shows the two opposite drill paths meeting with under 1 mm offset—extraordinary 5,000-year-old lapidary precision."
        },
        {
          xPct: 78,
          yPct: 56,
          titleVi: "Hình chim thần hai bên rãnh và vũ trụ quan Ngoại phương nội viên",
          titleEn: "Flanking Spirit Birds and Square-Outer, Round-Inner Cosmology",
          detailVi: "Hai bên mỗi hình thần nhân thú diện còn khắc chìm đôi chim linh quay đầu hướng vào trung tâm, biểu thị vật trung gian kết nối thần linh với mặt đất. Toàn bộ khối Tông ngoài vuông (đất) trong tròn (trời) nặng 6,5 kg là biểu tượng quyền lực thần quyền tối cao của Thành cổ Lương Chử (Di sản UNESCO 2019).",
          detailEn: "Flanking every deity emblem are incised spirit birds facing inward as celestial messengers linking heaven and earth. Weighing 6.5 kg, the square-outer (earth), round-inner (heaven) monolith embodies the supreme theocratic authority of the Liangzhu Ancient City (UNESCO World Heritage, 2019)."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Quan sát hình học 'ngoại phương nội viên' ngắn rộng đặc trưng và trọng lượng 6,5 kg của chiếc Ngọc Tông lớn nhất văn hóa Lương Chử.",
        "Bước 2 (Soi chất liệu & vết khắc): Phóng đại 3.2x vào mật độ 4–5 nét khắc/mm trên mũ lông vũ Thần Nhân Thú Diện và gờ khoan hai chiều trong lòng lỗ trụ.",
        "Bước 3 (Đọc sử liệu & đối sánh thời đại): Liên hệ vũ trụ quan Lương Chử (~3000 TCN) với nghi lễ 'hoàng tông lễ địa' trong Chu Lễ và di sản Thành cổ Lương Chử."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Examine the stout 'square-outside, round-inside' geometry and 6.5 kg mass of Liangzhu's largest jade cong.",
        "Step 2 (Material & Carving Inspection): Magnify to 3.2x to inspect 4–5 incised lines per millimeter across the deity's feathered crown and the bi-directional internal drill seam.",
        "Step 3 (Texts & Historical Context): Connect Liangzhu's c. 3000 BCE cosmology to the Rites of Zhou earth-worship canon and the Liangzhu UNESCO site."
      ]
    },
    {
      slug: "ma-dap-phi-yen",
      titleVi: "Đồng Bôn Mã (Mã Đạp Phi Yến) — Đông Hán",
      titleEn: "Galloping Horse Treading on a Flying Swallow — Eastern Han",
      titleZh: "铜奔马（马踏飞燕）— 东汉",
      tombstone: {
        dynasty: "Đông Hán (thế kỷ II SCN, Mộ Hán Lôi Đài, Vũ Uy, Cam Túc)",
        medium: "Đồng thanh đúc khuôn ghép kết hợp gia cường lõi sắt bên trong",
        dimensions: "Cao 34,5 cm × Dài 45 cm × Rộng 13,1 cm; Nặng 7,3 kg",
        museum: "Bảo tàng Tỉnh Cam Túc (Gansu Provincial Museum, Lanzhou)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Hợp kim Đồng – Thiếc – Chì đúc rỗng thành mỏng kết hợp cốt sắt",
          nameEn: "Hollow-Cast Copper-Tin-Lead Bronze with Internal Iron Core",
          scientificNoteVi: "Phim chụp X-quang khảo cổ phát hiện thân ngựa đúc rỗng để giảm trọng lượng phía trên, riêng chân sau bên phải tiếp xúc với chim én được đúc đặc và gia cố lõi sắt thép bên trong nhằm chịu toàn bộ tải trọng 7,3 kg tại một điểm tựa nhỏ.",
          scientificNoteEn: "Archaeological X-rays revealed a hollow-cast torso reducing upper mass, whereas the single load-bearing right hind leg is cast solid around an internal iron armature engineered to carry all 7.3 kg on one tiny contact point."
        },
        {
          nameVi: "Lớp gỉ đồng xanh lục nhạt khô vùng Hành lang Hà Tây",
          nameEn: "Arid Hexi-Corridor Pale Green Bronze Patina",
          scientificNoteVi: "Khí hậu khô ráo tại Vũ Uy (Cam Túc) giữ lớp gỉ đồng cacbonat mỏng mịn đồng đều, không bị phồng rộp phá hủy chi tiết cơ bắp và bờm đuôi.",
          scientificNoteEn: "The dry climate of Wuwei along the Hexi Corridor preserved an even, powdery green carbonate patina without blistering away fine musculature or tail details."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "守张掖长张君（同墓出土铜车马铭文）",
          pinyin: "Shou Zhangye Zhang Zhang Jun",
          translationVi: "Minh văn khắc trên đoàn xe ngựa đồng cùng mộ Lôi Đài xác định mộ chủ là tướng quân họ Trương từng giữ chức Thái thú Trương Dịch trấn giữ Hành lang Hà Tây.",
          translationEn: "Inscriptions on accompanying bronze chariots in the Leitai tomb identify the occupant as General Zhang, former Governor of Zhangye guarding the Hexi Corridor."
        },
        {
          sealZh: "1983年国家旅游局确定为中国旅游标志",
          pinyin: "1983 nian Guojia Lvyouju queding wei Zhongguo lvyou biaozhi",
          translationVi: "Năm 1983 được Cục Du lịch Quốc gia Trung Quốc chọn làm biểu trưng du lịch quốc gia; năm 2002 liệt vào danh mục bảo vật cấm xuất cảnh triển lãm.",
          translationEn: "Adopted in 1983 as the national emblem of China Tourism and placed in 2002 on the first list of cultural relics permanently barred from overseas exhibition."
        }
      ],
      zoomHotspots: [
        {
          xPct: 48,
          yPct: 76,
          titleVi: "Điểm cân bằng cơ học: Móng chân sau phải đáp lên lưng chim én",
          titleEn: "Gravity Equilibrium: Single Right Hoof on the Swallow's Back",
          detailVi: "Toàn bộ khối tượng đồng nặng 7,3 kg chỉ đứng thăng bằng trên duy nhất móng chân sau bên phải chạm nhẹ vào lưng con chim đang dang cánh bay, trong khi ba chân còn lại vung lơ lửng giữa không trung. Trọng tâm khối lượng rơi chuẩn xác xuống tâm diện tích hai cánh chim, thể hiện nắm vững định luật cân bằng vật lý thế kỷ II.",
          detailEn: "The entire 7.3 kg bronze sculpture balances solely on the right hind hoof touching the outstretched back of a flying bird while the other three legs kick airborne. The center of mass aligns directly above the wingspan footprint, demonstrating intuitive second-century mechanical engineering."
        },
        {
          xPct: 24,
          yPct: 30,
          titleVi: "Đầu ngựa ngẩng cao hí vang và biểu cảm góc chính diện",
          titleEn: "Raised Neighing Head and Frontal Expressive Profile",
          detailVi: "Nhìn nghiêng, chiến mã mang khí thế hào hùng của giống 'Thiên Mã' Tây Vực (ngựa Đại Uyển) với cổ cong mạnh, tai dỏng và mũi phập phồng. Tuy nhiên khi soi góc chính diện 3.2x, đầu ngựa hơi nghiêng lệch cùng miệng há rộng và mắt mở to tạo vẻ hóm hỉnh sống động hiếm thấy trong điêu khắc Hán.",
          detailEn: "In profile, the steed radiates the heroic power of a Ferghana 'Heavenly Horse' with arched neck, pricked ears, and flared nostrils. Viewed frontally at 3.2x, however, its slightly tilted head, wide eyes, and open neighing mouth reveal unexpected humorous vitality."
        },
        {
          xPct: 54,
          yPct: 50,
          titleVi: "Bước chạy Thuận Biên (Đối Trắc Bộ / Ambling Gait)",
          titleEn: "Lateral Ambling Gait (Duicebu)",
          detailVi: "Quan sát thứ tự vung chân cho thấy cả hai chân cùng một bên thân ngựa cùng tiến hoặc cùng lùi một nhịp — gọi là bước 'đối trắc bộ' (thuận biên) đặc trưng của giống ngựa chạy đường dài Tây Bắc giúp người cưỡi ngồi êm trên yên. Chi tiết giải phẫu động học này chứng tỏ nghệ nhân Hán quan sát trực tiếp kỵ binh thực chiến.",
          detailEn: "Leg placement shows both legs on the same side moving forward in tandem—a lateral ambling gait prized in northwestern steppe horses for giving cavalry riders a smooth seat over long distances. This biomechanical accuracy proves direct observation of Han frontier mounts."
        },
        {
          xPct: 82,
          yPct: 38,
          titleVi: "Đuôi ngựa thắt nút chiến mã và chim én ngoái đầu kinh ngạc",
          titleEn: "Knotted Cavalry Tail and Startled Looking-Back Bird",
          detailVi: "Đuôi ngựa buộc gút gọn theo đúng quy cách kỵ binh nhà Hán để không vướng bụi rậm khi xung trận, vắt cong mạnh ra sau tăng cảm giác tốc độ. Phóng đại 3.2x con chim dưới móng ngựa thấy nó đang quay cổ ngoái nhìn ngược lên trong ngỡ ngàng — nhiều học giả định danh đây là loài chim cắt (long tước) thay vì chim én thường.",
          detailEn: "The tail is knotted in authentic Han cavalry fashion to avoid tangling during combat, streaming backward to amplify speed. At 3.2x magnification, the bird cranes its neck backward in astonishment—leading several ornithologists to identify it as a falcon rather than a swallow."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Xoay nhìn từ góc nghiêng hào hùng sang góc chính diện sinh động để cảm nhận nghệ thuật tạo hình không gian ba chiều của điêu khắc Đông Hán.",
        "Bước 2 (Soi chất liệu & cơ học): Phóng đại 3.2x vào điểm tiếp xúc móng ngựa – lưng chim, dáng bước thuận biên và cấu trúc đuôi thắt nút chiến mã.",
        "Bước 3 (Đọc sử liệu & đối sánh thời đại): Đặt tượng Đồng Bôn Mã vào bối cảnh con đường Tơ Lụa qua Hành lang Hà Tây và chính sách nhập giống Thiên Mã Đại Uyển của nhà Hán."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Shift from the heroic side profile to the lively frontal angle to appreciate Eastern Han three-dimensional sculptural mastery.",
        "Step 2 (Material & Mechanical Inspection): Magnify to 3.2x on the hoof-to-bird contact point, lateral ambling stride, and knotted cavalry tail.",
        "Step 3 (Texts & Historical Context): Situate the bronze horse along the Hexi Corridor Silk Road and Han imperial campaigns for Ferghana 'Heavenly Horses'."
      ]
    },
    {
      slug: "zeng-hou-yi-bianzhong",
      titleVi: "Bộ Biên Chung Tăng Hầu Ất 65 Chiếc — Chiến Quốc",
      titleEn: "Bianzhong Chime Bells of Marquis Yi of Zeng (65 Bells) — Warring States",
      titleZh: "曾侯乙编钟（65件）— 战国早期（约公元前433年）",
      tombstone: {
        dynasty: "Chiến Quốc sơ kỳ (~433 TCN, Mộ Tăng Hầu Ất, Lôi Cổ Đôn, Tùy Châu, Hồ Bắc)",
        medium: "Đồng thanh (Cu–Sn–Pb), giá gỗ sơn mài khảm đồng và tượng lực sĩ đồng",
        dimensions: "Giá hình chữ L dài 748 cm + 335 cm × Cao 265 cm; Tổng nặng ~2.567 kg",
        museum: "Bảo tàng Tỉnh Hồ Bắc (Hubei Provincial Museum, Wuhan)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Hợp kim Chuông Đồng – Thiếc chuẩn âm học (Cu ~80–84% : Sn ~12–16% : Pb ~1–3%)",
          nameEn: "Acoustically Tuned Bronze Alloy (80–84% Cu, 12–16% Sn, 1–3% Pb)",
          scientificNoteVi: "Phân tích luyện kim cho thấy các nghệ nhân nước Tăng kiểm soát chặt hàm lượng thiếc ở 12–16% để tăng độ đàn hồi âm vang và giữ tỷ lệ chì cực thấp dưới 3% tránh triệt tiêu độ ngân. Từng chiếc chuông được mài chỉnh âm (điều âm) bằng đá mài bên trong thành chuông.",
          scientificNoteEn: "Metallurgical tests show Zeng founders tightly held tin at 12–16% for crisp acoustic resonance while keeping lead below 3% to prevent damping. Each bell's interior walls were ground with abrasives for precision pitch calibration."
        },
        {
          nameVi: "Vàng khảm chữ (Thác kim) trên nền đồng thanh đen sẫm",
          nameEn: "Gold-Inlaid Inscriptions (Cuojin) on Dark Bronze",
          scientificNoteVi: "Toàn bộ 3.755 chữ nhạc lý trên 65 chiếc chuông và giá đỡ được đúc rãnh rồi khảm dây vàng ròng dát mịn, vừa chống oxy hóa vừa cho phép nhạc công đọc nhanh tên âm chuẩn dưới ánh đèn nến nghi lễ.",
          scientificNoteEn: "All 3,755 musicological characters across the 65 bells and rack were inlaid with pure gold wire, resisting oxidation and remaining legible to ritual musicians under candlelight."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "唯王五十又六祀，返自西阳，楚王酓章作曾侯乙宗彝（楚王镈钟铭文）",
          pinyin: "Wei wang wushi you liu si, fan zi Xiyang, Chu Wang Yanzhang zuo Zeng Hou Yi zongyi",
          translationVi: "Minh văn trên chiếc chuông Bác (Bo) do Sở Huệ Vương tặng năm thứ 56 triều đại mình (433 TCN), khóa chặt niên đại tuyệt đối của toàn bộ lăng mộ Tăng Hầu Ất.",
          translationEn: "Inscription on the central Bo bell gifted by King Hui of Chu in his 56th regnal year (433 BCE), providing an absolute chronological anchor for Marquis Yi's tomb."
        },
        {
          sealZh: "铭文共3755字：详载楚、周、齐、晋、申、曾六国十二律名对照体系",
          pinyin: "3,755-character musical treatise mapping 12-tone pitch standards across six states",
          translationVi: "Hệ thống 3.755 chữ nhạc lý đối chiếu bảng chuyển đổi tên 12 luật âm giữa sáu nước Chu, Sở, Tề, Tấn, Thân và Tăng — bộ bách khoa nhạc học khắc trên kim loại sớm nhất nhân loại.",
          translationEn: "A 3,755-character cast-metal musicological dictionary cross-referencing twelve-tone pitch names across Zhou, Chu, Qi, Jin, Shen, and Zeng."
        }
      ],
      zoomHotspots: [
        {
          xPct: 48,
          yPct: 46,
          titleVi: "Cơ chế Nhất Chung Song Âm (Một chuông phát hai nốt nhạc)",
          titleEn: "Dual-Tone Acoustic Geometry (Two Pitches per Bell)",
          detailVi: "Thay vì tiết diện tròn như chuông Tây phương, 64 chiếc Dõng chung có tiết diện hình hai mảnh ngói úp (hợp ngõa hình / quả hạnh nhân). Gõ vào điểm chính giữa (Toại bộ) phát ra âm chính, gõ lệch sang mép cạnh (Cổ bộ) phát ra âm thứ hai cách đúng quãng ba trưởng hoặc thứ, giúp cả bộ bao phủ năm quãng tám bán âm liên tục.",
          detailEn: "Unlike circular Western bells, the 64 yongzhong feature almond-shaped (pointed-oval) cross-sections. Striking the central sui point produces a fundamental pitch while striking the side gu zone yields a second pitch a major or minor third higher, spanning five full chromatic octaves."
        },
        {
          xPct: 62,
          yPct: 74,
          titleVi: "Chiếc chuông Bác của Sở Huệ Vương (433 TCN) ở hàng dưới",
          titleEn: "King Hui of Chu's 433 BCE Bo Bell at Center-Bottom",
          detailVi: "Chính giữa hàng dưới cùng nổi bật chiếc chuông Bác duy nhất có miệng phẳng (không khuyết võng như các chuông còn lại), nặng 134,8 kg và cao 92,5 cm. Quai treo đúc bằng kỹ thuật đúc mẫu sáp mất (thất lạp pháp) tạo cụm rồng quấn xuyên thấu tinh vi đến mức không thể thực hiện bằng khuôn ghép đất thông thường.",
          detailEn: "Centered on the lowest tier hangs the sole flat-rimmed Bo bell, weighing 134.8 kg and standing 92.5 cm tall. Its openwork entwined-dragon suspension loop was cast via lost-wax casting, achieving undercuts impossible with ordinary piece-molds."
        },
        {
          xPct: 30,
          yPct: 68,
          titleVi: "Sáu pho tượng võ sĩ đồng đội xà ngang chịu tải 2,5 tấn",
          titleEn: "Six Bronze Warrior Caryatids Bearing 2.5 Tons",
          detailVi: "Ba tầng xà gỗ khảm đồng được nâng đỡ bởi sáu tượng võ sĩ mặc giáp ngắn, đeo kiếm dài bên hông, hai tay giơ cao đội khung xà nặng hơn 2,5 tấn. Phóng đại 3.2x thấy trang phục, mũ đội và biểu cảm uy nghiêm của từng võ sĩ phản ánh chân thực lễ phục quân sự nước Tăng – Sở thế kỷ V TCN.",
          detailEn: "Three lacquered timber beams are supported by six bronze warriors in belted tunics and long swords lifting the 2.5-ton frame overhead. At 3.2x magnification, caps, sword fittings, and solemn expressions document fifth-century BCE Chu-sphere military attire."
        },
        {
          xPct: 74,
          yPct: 32,
          titleVi: "Hàng chuông Nữu tầng trên và 36 núm mai (Mai) triệt tạp âm",
          titleEn: "Upper Niuzhong Bells and 36 Acoustic Dampening Bosses",
          detailVi: "Trên bề mặt mỗi chuông nổi lên 36 núm tròn hình chùy gọi là 'Mai' chia đều bốn khu. Về mặt vật lý âm học hiện đại, các núm mai này hoạt động như bộ lọc cơ học triệt tiêu các họa âm bậc cao gây chói tai, giúp tiếng chuông vang trong và tắt nhanh để hòa tấu đa âm không bị rối sóng.",
          detailEn: "Each bell carries 36 protruding bosses (mei) arranged in four panels. Acoustically, these bosses dampen harsh high-frequency overtones, producing crisp, fast-decaying notes essential for rapid polyphonic melodies without muddy acoustic overlap."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Quan sát cấu trúc giàn chuông chữ L ba tầng tám tổ (19 chuông Nữu tầng trên, 33 chuông Dõng tầng giữa, 12 chuông Dõng lớn + 1 chuông Bác tầng dưới).",
        "Bước 2 (Soi chất liệu & âm học): Phóng đại 3.2x vào tiết diện quả hạnh nhân phát hai nốt nhạc, 36 núm mai lọc họa âm và hàng chữ nhạc lý khảm vàng ròng.",
        "Bước 3 (Đọc minh văn & đối sánh thời đại): Đọc niên đại 433 TCN trên chuông Sở Huệ Vương và đánh giá bước nhảy vọt về hệ 12 bán âm sớm hơn châu Âu hơn hai thiên niên kỷ."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Examine the L-shaped three-tier rack of eight groups (19 upper niuzhong, 33 middle yongzhong, 12 large lower yongzhong plus one Bo bell).",
        "Step 2 (Material & Acoustic Inspection): Magnify to 3.2x to study almond cross-sections yielding dual tones, 36 overtone-damping bosses, and gold-inlaid pitch inscriptions.",
        "Step 3 (Inscriptions & Historical Context): Read the 433 BCE King Hui of Chu dedication and recognize a twelve-tone chromatic scale achieved two millennia before Europe."
      ]
    },
    {
      slug: "changxin-palace-lamp",
      titleVi: "Đèn Cung Trường Tín — Mạ Vàng Đồng Thanh Tây Hán",
      titleEn: "Changxin Palace Gilt-Bronze Lamp — Western Han",
      titleZh: "长信宫灯 — 西汉（约公元前172–前113年）",
      tombstone: {
        dynasty: "Tây Hán (Mộ Đậu Oản, vợ Trung Sơn Tĩnh Vương Lưu Thắng, Mãn Thành, Hà Bắc)",
        medium: "Đồng thanh đúc rời sáu bộ phận, mạ vàng thủy ngân toàn thân (Lưu kim)",
        dimensions: "Cao 48 cm × Nặng 15,85 kg",
        museum: "Bảo tàng Hà Bắc (Hebei Museum, Shijiazhuang)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Hợp kim Đồng thanh đúc mỏng và lớp Mạ vàng hỗn hống thủy ngân (Au–Hg)",
          nameEn: "Thin-Walled Bronze with Mercury-Amalgam Fire Gilding (Au–Hg)",
          scientificNoteVi: "Nghệ nhân Tây Hán hòa tan vàng lá vào thủy ngân tạo hỗn hống phết đều lên bề mặt đồng đánh bóng, sau đó nung nóng trên 357°C cho thủy ngân bay hơi, để lại lớp vàng tinh khiết bám chặt cấp phân tử sáng rực suốt 2.100 năm.",
          scientificNoteEn: "Western Han artisans dissolved gold leaf in mercury to brush amalgam over polished bronze, then heated it above 357°C to volatilize the mercury, leaving a molecularly bonded pure gold coat still radiant after 2,100 years."
        },
        {
          nameVi: "Khí động học đối lưu nhiệt bên trong thân tượng rỗng",
          nameEn: "Internal Thermal Convection Smoke-Capture Ducting",
          scientificNoteVi: "Cánh tay phải rỗng của cung nữ hoạt động như ống khói dẫn luồng khí nóng chứa muội dầu thực vật đi qua cổ tay vào khoang bụng rỗng chứa nước, lọc sạch gần như toàn bộ khói đen khỏi không gian cung điện kín.",
          scientificNoteEn: "The kneeling attendant's hollow right sleeve acts as a thermal flue channeling soot-laden lamp exhaust into her hollow water-filled torso, trapping smoke inside before it can foul palace chambers."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "长信尚浴，容一升少半升，重六斤，百八十九（刻于灯座等九处）",
          pinyin: "Changxin shangyu, rong yi sheng shaoban sheng, zhong liu jin, bai bashi jiu",
          translationVi: "Chín dòng minh văn Lệ thư khắc 65 chữ trên thân đèn xác nhận vật phẩm từng thuộc Cung Trường Tín của Hoàng thái hậu Đậu Thị trước khi ban tặng phủ Trung Sơn Vương.",
          translationEn: "Nine clerical-script inscriptions totaling 65 characters confirm the lamp belonged to Empress Dowager Dou's Changxin Palace bathhouse before being gifted to the Zhongshan princely estate."
        },
        {
          sealZh: "阳信家（早期原主铭文，系平阳侯阳信长公主府旧物）",
          pinyin: "Yangxin Jia (earlier owner mark of Princess Pingyang's household)",
          translationVi: "Ba chữ 'Dương Tín Gia' khắc trước đó cho thấy chiếc đèn ban đầu thuộc phủ Dương Tín Trưởng công chúa, sau nhập nội cung Trường Tín rồi theo về mộ Đậu Oản năm 104 TCN.",
          translationEn: "Earlier marks reading 'Household of Yangxin' trace the lamp from Princess Yangxin's residence into Changxin Palace and finally into Dou Wan's tomb around 104 BCE."
        }
      ],
      zoomHotspots: [
        {
          xPct: 36,
          yPct: 40,
          titleVi: "Ống tay áo phải rỗng đóng vai trò ống hút khói không khói",
          titleEn: "Hollow Right Sleeve Functioning as a Smokeless Flue",
          detailVi: "Tay phải cung nữ giơ cao che ngay phía trên ngọn bấc đèn, trông tự nhiên như cử chỉ chắn gió nhưng bên trong là khoang ống rỗng thông thẳng xuống thân tượng. Nhờ chênh lệch áp suất đối lưu khi dầu cháy, luồng khói muội bị hút ngược vào ống tay áo rồi lắng xuống nước trong lòng tượng, đạt chuẩn thiết kế bảo vệ môi trường từ thế kỷ II TCN.",
          detailEn: "The attendant raises her right sleeve above the flame as if shielding it from drafts, yet the sleeve forms a hollow chimney ducting into her torso. Thermal convection draws oily soot upward into the sleeve and down into water inside the hollow body—an advanced second-century BCE environmental design."
        },
        {
          xPct: 32,
          yPct: 58,
          titleVi: "Hai cánh chắn gió bán nguyệt trượt xoay điều chỉnh góc sáng",
          titleEn: "Dual Sliding Curved Shutters Controlling Beam and Intensity",
          detailVi: "Quanh đĩa dầu tròn đặt trên bàn tay trái cung nữ là hai tấm chắn đồng uốn cong trượt trơn trên rãnh tròn, cho phép xoay mở rộng hoặc thu hẹp khe sáng tùy nhu cầu đọc sách hay nghỉ ngơi. Toàn bộ khay đèn và nắp chắn đều có chốt tay cầm xoay linh hoạt không gây bỏng tay.",
          detailEn: "Surrounding the oil tray in the attendant's left hand are two curved bronze baffles gliding along a circular track to widen, narrow, or redirect illumination. Built-in handles allow smooth shutter adjustment without touching hot metal."
        },
        {
          xPct: 56,
          yPct: 26,
          titleVi: "Cấu trúc mô-đun sáu mảnh tháo rời để vệ sinh muội than",
          titleEn: "Six-Part Modular Assembly for Soot Cleaning",
          detailVi: "Chiếc đèn được đúc ghép cơ khí từ đúng sáu bộ phận tháo lắp tự do bằng chốt khớp: đầu, thân, cánh tay phải, khay đèn, tấm chắn sáng và nắp chao đèn. Nhờ thiết kế mô-đun này, thị nữ thời Hán dễ dàng nhấc rời đầu và tay áo để cọ rửa muội dầu tích tụ bên trong khoang bụng.",
          detailEn: "The lamp disassembles cleanly into six interlocking cast modules: head, torso, right arm, oil dish, sliding shutters, and flue hood. This modular architecture allowed palace attendants to lift off the head and sleeve to scrub accumulated soot from the interior cavity."
        },
        {
          xPct: 60,
          yPct: 68,
          titleVi: "Dáng quỳ tọa Tây Hán và chín dòng minh văn chuyển chủ",
          titleEn: "Western Han Kneeling Posture and Provenance Inscriptions",
          detailVi: "Cung nữ quỳ gập chân theo lễ nghi 'quỵ tọa' chuẩn mực thời Hán, mặc áo sâu y vạt chéo cài phải, gương mặt thanh tú điềm đạm hơi cúi nhìn ngọn lửa. Soi 3.2x quanh bệ đế và vành áo lộ rõ các dòng Lệ thư mảnh ghi trọng lượng, dung tích và lịch sử truyền thừa qua ba phủ đệ hoàng thất.",
          detailEn: "The attendant kneels in proper Han formal posture wearing a right-lapping shenyi robe, gazing calmly downward toward the flame. At 3.2x magnification along the plinth and hem, fine clerical-script inscriptions log vessel weight, volume, and transfers across three royal households."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Ngắm dáng quỳ tao nhã và lớp mạ vàng rực rỡ của 'Đệ nhất cổ đăng Trung Hoa' cao 48 cm.",
        "Bước 2 (Soi chất liệu & cơ cấu): Phóng đại 3.2x vào rãnh trượt cánh chắn sáng, khớp tháo rời sáu mô-đun và đường dẫn khí đối lưu qua ống tay áo phải.",
        "Bước 3 (Đọc minh văn & đối sánh thời đại): Theo dõi dấu vết 65 chữ minh văn từ phủ Dương Tín qua Cung Trường Tín đến lăng mộ Đậu Oản năm 104 TCN."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Admire the poised kneeling silhouette and intact fire-gilded sheen of the 48 cm 'First Ancient Lamp of China'.",
        "Step 2 (Material & Mechanical Inspection): Magnify to 3.2x on the sliding shutter track, six-part modular joints, and thermal flue inside the right sleeve.",
        "Step 3 (Inscriptions & Historical Context): Trace the 65-character ownership history from Princess Yangxin's estate through Changxin Palace to Dou Wan's 104 BCE tomb."
      ]
    },
    {
      slug: "mao-gong-ding",
      titleVi: "Mao Công Đỉnh — Minh Văn 500 Chữ Dài Nhất Thời Tây Chu",
      titleEn: "Mao Gong Ding — Longest Western Zhou Bronze Inscription (500 Characters)",
      titleZh: "毛公鼎 — 西周晚期（宣王时期）",
      tombstone: {
        dynasty: "Tây Chu vãn kỳ (~827–782 TCN, thời Chu Tuyên Vương, Kỳ Sơn, Thiểm Tây)",
        medium: "Đồng thanh đúc khuôn ghép, minh văn đúc âm 32 hàng 500 chữ",
        dimensions: "Cao 53,8 cm × Đường kính miệng 47,9 cm; Nặng 34,7 kg",
        museum: "Bảo tàng Cố Cung Đài Bắc (National Palace Museum, Taipei)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Hợp kim Đồng – Thiếc – Chì chuẩn lễ khí Tây Chu vãn kỳ",
          nameEn: "Late Western Zhou Ritual Bronze Alloy",
          scientificNoteVi: "Thành đỉnh đúc dày đều, chất đồng rắn chắc tối màu chuyển sắc lục trầm, đáp ứng khả năng lưu giữ rõ nét hàng trăm nét chữ Kim văn khắc sâu trên khuôn lõi đất nung mà không bị rỗ khí.",
          scientificNoteEn: "Evenly cast dense bronze walls aged into deep dark olive-green provided the crisp metal fidelity required to reproduce 500 finely incised core-mold characters without porosity defects."
        },
        {
          nameVi: "Kỹ thuật khắc ngược khuôn lõi đất sét (Nê phạm âm khắc)",
          nameEn: "Reverse-Carved Clay Core-Mold Inscription Technique",
          scientificNoteVi: "Nghệ nhân Tây Chu phải khắc ngược toàn bộ 500 chữ Đại Triện lên khuôn lõi đất sét ẩm sao cho khi rót đồng nóng chảy, chữ hiện lên đúng chiều sắc gọn trong lòng bụng cầu lõm của đỉnh.",
          scientificNoteEn: "Western Zhou scribes carved all 500 Great Seal characters in mirror-image onto a damp clay core so molten bronze captured them right-reading inside the curved interior belly."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "王若曰：父歆，丕显文武，皇天弘厌厥德，配我有周，膺受大命（共32行500字）",
          pinyin: "Wang ruo yue: Fu Yin, pixian Wen Wu, Huangtian hongyan jue de, pei wo you Zhou, yingshou daming",
          translationVi: "Mở đầu bài sắc mệnh 500 chữ của Chu Tuyên Vương giao trọng trách chấn hưng triều chính cho chú họ là Mao Công Âm, ban thưởng lễ phục, xe ngựa và binh khí.",
          translationEn: "Opening of King Xuan of Zhou's 500-character royal charge entrusting state revival to his uncle Duke Mao Yin, accompanied by grants of ceremonial robes, chariots, and weapons."
        },
        {
          sealZh: "子子孙孙永宝用（铭文结语）",
          pinyin: "Zizi sunsun yong bao yong",
          translationVi: "Câu kết kinh điển của lễ khí nhà Chu: Con cháu đời đời vĩnh viễn trân trọng sử dụng, biến chiếc đỉnh đồng thành hiến chương pháp lý truyền thế.",
          translationEn: "Canonical Zhou bronze closing formula: May sons and grandsons eternally treasure and use this vessel, turning the cauldron into a permanent dynastic charter."
        }
      ],
      zoomHotspots: [
        {
          xPct: 50,
          yPct: 48,
          titleVi: "Bài minh văn 32 hàng 500 chữ — tương đương một thiên Thượng Thư",
          titleEn: "32-Column, 500-Character Inscription Matching the Book of Documents",
          detailVi: "Phóng đại 3.2x lòng trong bụng đỉnh hiện ra 32 hàng chữ Kim văn xếp ngay ngắn thành hai khối trái phải, tổng cộng 500 chữ (gồm các chữ hợp văn). Văn phong trang nghiêm năm đoạn hoàn chỉnh khớp chặt với thể chế sách Thượng Thư, là tư liệu nguyên bản trực tiếp nhất về chính trị thời 'Tuyên Vương Trung Hưng' thế kỷ IX TCN.",
          detailEn: "At 3.2x magnification inside the deep belly, 32 orderly columns of Great Seal script span 500 characters across two balanced blocks. Its solemn five-part rhetoric matches the Book of Documents, serving as our most direct primary record of King Xuan's ninth-century BCE restoration."
        },
        {
          xPct: 50,
          yPct: 24,
          titleVi: "Họa tiết Trọng Hoàn Văn (vòng khuyên xếp tầng) tối giản",
          titleEn: "Minimalist Overlapping Scale-Band (Chonghuanwen) Collar",
          detailVi: "Khác với đỉnh nhà Thương dày đặc mặt thú Thao Thiết dữ tợn, Mao Công Đỉnh chỉ trang trí duy nhất một băng họa tiết Trọng Hoàn Văn (các vòng tròn bán nguyệt nối tiếp) chạy dưới miệng cùng hai đường chỉ nổi mảnh. Sự tiết chế hoa văn phản ánh bước chuyển thẩm mỹ Tây Chu vãn kỳ: đặt trọng tâm vào văn tự và đạo đức lễ giáo.",
          detailEn: "Unlike Shang cauldrons covered in fierce taotie masks, the Mao Gong Ding bears only a single collar of overlapping scale loops bordered by two crisp fillets. This decorative restraint reflects late Western Zhou aesthetics shifting emphasis from shamanic beasts to textual law and virtue."
        },
        {
          xPct: 22,
          yPct: 16,
          titleVi: "Đôi quai đứng dày chắc và vành miệng khum gờ",
          titleEn: "Stout Upright Handles and Rolled Lip Rim",
          detailVi: "Hai quai đứng hình chữ U vuông vức mọc thẳng từ vành miệng dày, tạo thế cân bằng chắc khỏe cho thân bụng hình bán cầu sâu. Đường nét chuyển tiếp giữa miệng và quai sắc gọn không gờ thừa, khẳng định chất lượng hoàn thiện nguội xuất sắc của xưởng đúc vương thất nhà Chu.",
          detailEn: "Two thick, squared upright handles rise cleanly from the broad rolled rim, anchoring the deep hemispherical basin. Crisp transitions devoid of casting flash showcase top-tier cold-finishing inside the royal Zhou foundry."
        },
        {
          xPct: 72,
          yPct: 78,
          titleVi: "Ba chân móng thú (Thú đề túc) vạm vỡ",
          titleEn: "Three Powerful Cabriole Animal-Hoof Legs",
          detailVi: "Ba chân đỉnh tạo hình chân thú uốn cong vững chãi (thú đề túc), phần trên phình lớn nối mượt vào đáy cầu và thon dần xuống móng. Dáng chân thú đánh dấu chuẩn mực điển hình của đỉnh Tây Chu vãn kỳ thay thế cho chân trụ thẳng thời Thương – đầu Chu.",
          detailEn: "Three sturdy cabriole legs flare broadly into the rounded base before tapering to hoof-like terminals. This animal-hoof profile defines late Western Zhou cauldron typology, superseding the straight cylindrical pillars of Shang and early Zhou."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Nhận diện dáng bụng bán cầu sâu, ba chân móng thú và băng hoa văn Trọng Hoàn Văn giản dị chuẩn mực cuối thời Tây Chu.",
        "Bước 2 (Soi chất liệu & nét chữ): Phóng đại 3.2x vào 32 hàng Kim văn trong lòng đỉnh để thưởng thức đường nét Đại Triện tròn đều, cân đối như khắc đá.",
        "Bước 3 (Đọc minh văn & đối sánh thời đại): Đọc nội dung năm đoạn sắc phong của Chu Tuyên Vương và đặt Mao Công Đỉnh cạnh Tán Thị Bàn, Đại Khắc Đỉnh trong nhóm đại minh văn Tây Chu."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Identify the deep hemispherical belly, three hoofed legs, and restrained scale-band collar quintessential to late Western Zhou.",
        "Step 2 (Material & Epigraphic Inspection): Magnify to 3.2x inside the bowl to study the balanced, rounded Great Seal calligraphy across 32 columns.",
        "Step 3 (Inscriptions & Historical Context): Read King Xuan's five-part royal mandate and pair the vessel with the Sanshi Pan and Da Ke Ding among grand Zhou inscriptions."
      ]
    },
    {
      slug: "thai-binh-huu-tuong",
      titleVi: "Thái Bình Hữu Tượng Pháp Lang Đồng Khảm — Thanh Càn Long",
      titleEn: "Cloisonne Enamel 'Peaceful Signs' Elephant Vase — Qing Qianlong",
      titleZh: "清乾隆掐丝珐琅太平有象尊",
      tombstone: {
        dynasty: "Thanh (niên hiệu Càn Long, 1736–1795, Tạo Biện Xứ Nội Vụ Phủ Bắc Kinh)",
        medium: "Đồng đỏ dát dây đồng mạ vàng, tráng men Pháp lang (Cảnh Thái Lam) khảm bảo thạch",
        dimensions: "Cao ~46 cm × Dài ~32 cm (quy cách trưng bày điện Thái Hòa / Dưỡng Tâm)",
        museum: "Bảo tàng Cố Cung Bắc Kinh (Palace Museum, Beijing)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Men Pháp lang thủy tinh silicat pha oxit kim loại (CoO, CuO, Au, SnO2)",
          nameEn: "Silicate Cloisonne Enamels with Metallic Oxides (CoO, CuO, Au, SnO2)",
          scientificNoteVi: "Thân voi tráng men trắng đục từ oxit thiếc (SnO2), yên thảm và bình tôn trên lưng phối sắc lam coban (CoO), xanh ngọc đồng (CuO) và đỏ hồng keo vàng (Au) nung nhiều lượt ở 750–850°C rồi mài phẳng bằng đá mịn.",
          scientificNoteEn: "Opaque tin-oxide white enamel coats the elephant body, while the saddle blanket and vase blend cobalt blue (CoO), turquoise copper (CuO), and colloidal-gold pink fired repeatedly at 750–850°C and stone-polished flush."
        },
        {
          nameVi: "Cốt đồng đỏ uốn chỉ đồng (Kháp ty) và mạ vàng thủy ngân",
          nameEn: "Copper Body with Soldered Brass Cloisons and Fire Gilding",
          scientificNoteVi: "Hàng nghìn sợi chỉ đồng dẹt rộng dưới 0,5 mm được uốn tay theo hoa văn liên hoa, như ý rồi hàn bạc lên cốt đồng để ngăn cách màu men, sau khi mài bóng mới mạ vàng toàn bộ viền chỉ và các phụ kiện điêu khắc.",
          scientificNoteEn: "Thousands of flat brass wires under 0.5 mm wide were hand-bent into lotus scrolls and ruyi patterns, silver-soldered onto the copper core as enamel cells, and fire-gilded after final polishing."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "大清乾隆年制（双行楷书镀金款）",
          pinyin: "Da Qing Qianlong nian zhi",
          translationVi: "Niên hiệu khắc chữ Khải mạ vàng ở đáy bình hoặc bụng voi: Chế tác dưới triều Càn Long Đại Thanh tại xưởng ngự dụng Tạo Biện Xứ.",
          translationEn: "Gilt regular-script reign mark on the underside: Made during the Qianlong reign of the Great Qing at the Imperial Palace Workshops."
        },
        {
          sealZh: "太平有象（谐音典故：瓶=平，象=祥/象）",
          pinyin: "Taiping Youxiang (rebus: ping = peace, xiang = omen/elephant)",
          translationVi: "Điển cố đồng âm cát tường cung đình: Voi (Tượng) cõng bình bảo bình (Bình) biểu thị 'Thái Bình Hữu Tượng' — thiên hạ thái bình, điềm lành hiện rõ.",
          translationEn: "Imperial visual rebus: an elephant (xiang, homophone for omen) bearing a vase (ping, homophone for peace) signifying 'When peace reigns, auspicious signs appear'."
        }
      ],
      zoomHotspots: [
        {
          xPct: 48,
          yPct: 24,
          titleVi: "Bảo bình dáng Tôn trên lưng voi và hoa văn triền chi liên",
          titleEn: "Archaistic Zun Vase with Interlocking Lotus Scrolls",
          detailVi: "Đặt vững trên yên voi là chiếc bình bảo bình cổ cao miệng loe tráng men lam ngọc Cảnh Thái Lam, phủ kín hoa văn dây sen liên hoa uốn lượn đối xứng bằng chỉ đồng mạ vàng. Phóng đại 3.2x thấy từng cánh sen có kỹ thuật chuyển màu (điều sắc) hai sắc tố trong cùng một ô chỉ đồng — dấu ấn kỹ thuật đỉnh cao xưởng Càn Long.",
          detailEn: "Resting on the elephant's back is a flared turquoise cloisonne zun vase covered in gilt-wire interlocking lotus scrolls. At 3.2x magnification, individual petals exhibit two-tone shaded enamel transitions inside single wire cells—a hallmark of peak Qianlong imperial workshops."
        },
        {
          xPct: 50,
          yPct: 54,
          titleVi: "Yên thảm khảm ngọc bích, san hô và tua rủ đồng mạ vàng",
          titleEn: "Jeweled Saddlecloth with Coral, Turquoise, and Gilt Tassels",
          detailVi: "Tấm thảm phủ lưng voi kết hợp hai công nghệ: pháp lang kháp ty (cloisonne) vẽ sóng nước bát bảo và điêu khắc đồng đúc nổi nạm đá ngọc lam, san hô đỏ cùng lưu ly. Lớp rèm tua đồng mạ vàng rủ mềm theo nếp vải thể hiện trình độ kim hoàn cơ khí tinh xảo của Nội Vụ Phủ.",
          detailEn: "The draped saddlecloth merges cloisonne enamel waves and Eight Treasures with cast gilt-bronze mounts inlaid with turquoise, red coral, and colored glass. Articulated gilt tassels fall realistically along the cloth folds, exemplifying Imperial Household Department metalwork."
        },
        {
          xPct: 26,
          yPct: 58,
          titleVi: "Đầu voi trắng, cặp ngà cong và nếp nhăn da bằng chỉ đồng",
          titleEn: "White Enamel Elephant Head and Wire-Rendered Skin Folds",
          detailVi: "Toàn bộ thân voi phủ men trắng sứ gợi hình tượng Bạch Tượng cát tường trong Phật giáo và lễ nghi triều đình. Nghệ nhân khéo léo uốn các đường chỉ đồng chạy song song uốn lượn dọc vòi, tai và khớp chân để vừa cố định lớp men trắng lớn không bong tróc vừa tạo họa tiết nếp da tự nhiên.",
          detailEn: "White enamel evokes the auspicious White Elephant of Buddhist and imperial lore. Artisans laid curving gilt brass wires across the trunk, ears, and leg joints both to anchor expansive white enamel fields against spalling and to suggest rhythmic skin folds."
        },
        {
          xPct: 68,
          yPct: 78,
          titleVi: "Bệ đế hoa văn sóng biển giang nhai và đối sánh Pháp lam Huế",
          titleEn: "Sea-Wave Plinth and Dialogue with Hue Royal Enamels",
          detailVi: "Bốn chân voi đứng vững trên bệ mạ vàng chạm nổi sóng biển và núi đá (hải thủy giang nhai) tượng trưng giang sơn vĩnh cố. Quy trình tráng men pháp lang Bắc Kinh thế kỷ XVIII này sau đó giao lưu mạnh mẽ sang Việt Nam đầu thế kỷ XIX, góp phần hình thành dòng Pháp lam cung đình Huế thời Minh Mạng – Thiệu Trị.",
          detailEn: "All four feet stand atop a gilt-bronze plinth chased with crashing waves and mountain peaks symbolizing enduring sovereignty. This eighteenth-century Beijing enamel craft subsequently inspired early nineteenth-century Hue royal enamels under Emperors Minh Mang and Thieu Tri."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Đọc bố cục biểu tượng cát tường 'Thái Bình Hữu Tượng' đặt đối xứng hai bên ngai vàng trong các đại điện Tử Cấm Thành.",
        "Bước 2 (Soi chất liệu & kỹ thuật): Phóng đại 3.2x vào độ khít của sợi chỉ đồng mạ vàng, kỹ thuật chuyển sắc hai màu trong một ô men và ngọc khảm trên yên voi.",
        "Bước 3 (Đọc niên hiệu & đối sánh thời đại): Kiểm tra khoản Càn Long ở đáy và đối chiếu kỹ nghệ Cảnh Thái Lam Bắc Kinh với Pháp lam cung đình Huế thế kỷ XIX."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Read the auspicious 'Peaceful Signs' rebus displayed in symmetrical pairs flanking thrones inside Forbidden City halls.",
        "Step 2 (Material & Enamel Inspection): Magnify to 3.2x to check gilt-wire precision, two-tone single-cell enamel shading, and inlaid saddle jewels.",
        "Step 3 (Marks & Historical Context): Inspect the Qianlong base mark and compare Beijing cloisonne with nineteenth-century Vietnamese royal enamels in Hue."
      ]
    },
    {
      slug: "duong-tam-thai-lac-da",
      titleVi: "Đường Tam Thái Lạc Đà Tải Nhạc — Thịnh Đường",
      titleEn: "Tang Sancai Glazed Camel Carrying a Musical Troupe — High Tang",
      titleZh: "唐三彩骆驼载乐俑 — 盛唐",
      tombstone: {
        dynasty: "Thịnh Đường (đầu thế kỷ VIII, khai quật năm 1959 tại Tây An, Thiểm Tây)",
        medium: "Đất nung trắng tráng men chì nhiệt độ thấp Tam Thái (Sancai)",
        dimensions: "Cao 58,4 cm × Dài 43,4 cm × Rộng 22,5 cm",
        museum: "Bảo tàng Quốc gia Trung Quốc (National Museum of China, Beijing)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Men chì nhiệt độ thấp (PbO–SiO2, ~800–900°C) pha CuO, Fe2O3, CoO",
          nameEn: "Low-Fired Lead-Silicate Glaze (~800–900°C) with CuO, Fe2O3, CoO",
          scientificNoteVi: "Oxit chì đóng vai trò chất trợ chảy hạ nhiệt độ nung xuống khoảng 850°C, khiến men xanh lục đồng (CuO), vàng hổ phách sắt (Fe2O3) và trắng kem chảy hòa quyện tự nhiên vào nhau tạo hiệu ứng loang màu phóng khoáng đặc trưng gốm Đường Tam Thái.",
          scientificNoteEn: "Lead oxide flux lowered firing temperatures to roughly 850°C, allowing copper green (CuO), iron amber-yellow (Fe2O3), and creamy white glazes to run and blend organically into signature Tang Sancai polychrome streaks."
        },
        {
          nameVi: "Xương đất sét trắng cao lanh nung sơ 1000°C (Nhị thứ thiêu chế)",
          nameEn: "Twice-Fired White Earthenware Body (Bisque at ~1000°C)",
          scientificNoteVi: "Phôi tượng được đúc ghép từ nhiều khuôn thạch cao – đất nung rồi nung mộc trước ở 1000°C, sau đó mới chấm men chì màu và nung lần hai ở ~850°C. Riêng đầu các nhạc công để mộc không tráng men rồi vẽ màu khoáng nguội để giữ nét mặt sắc sảo.",
          scientificNoteEn: "Mold-assembled sections were bisque-fired at 1000°C before glazing and refiring at 850°C. Musicians' heads were left unglazed and cold-painted in mineral pigments to preserve delicate facial features."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "鲜于庭诲墓出土（开元十一年，公元723年，陕西西安中堡村）",
          pinyin: "Xianyu Tinghui mu chutu (Kaiyuan shiyi nian, 723 CE, Xi'an, Shaanxi)",
          translationVi: "Mộ chí khắc đá trong cùng ngôi mộ tại thôn Trung Bảo (Tây An) ghi rõ mộ chủ là Tướng quân Tiên Vu Đình Hối mất năm Khai Nguyên thứ 11 (723 SCN), xác lập chuẩn niên đại Thịnh Đường.",
          translationEn: "The stone epitaph from the same Xi'an tomb identifies General Xianyu Tinghui, buried in the 11th year of Kaiyuan (723 CE), anchoring the sculpture squarely in High Tang."
        },
        {
          sealZh: "《旧唐书·音乐志》：胡部新声与汉乐交融，丝路乐舞盛行长安",
          pinyin: "Jiu Tangshu · Yinyuezhi: Hubu xinsheng yu Hanyue jiaorong",
          translationVi: "Cựu Đường Thư ghi nhận sự hòa trộn sâu sắc giữa nhạc cụ Tây Vực (tỳ bà, sáo hồ, phách) với nhã nhạc Trung Nguyên ngay trên đường phố kinh đô Trường An thế kỷ VIII.",
          translationEn: "Old Book of Tang documenting the cosmopolitan fusion of Western Regions instruments (pipa, foreign flutes, clappers) with Han ensembles across eighth-century Chang'an."
        }
      ],
      zoomHotspots: [
        {
          xPct: 50,
          yPct: 26,
          titleVi: "Dàn nhạc năm người trên bục thảm: bốn nhạc công và một ca sĩ",
          titleEn: "Five-Person Platform Ensemble: Four Musicians and Central Singer",
          detailVi: "Trên bệ gỗ trải thảm hoa vắt ngang hai bướu lạc đà, bốn nhạc công người Hồ ngồi quay lưng vào nhau chơi tỳ bà, sáo tiêu, sênh và phách, vây quanh một nam ca sĩ đứng giữa đang ngả người hát vang. Phóng đại 3.2x thấy mỗi khuôn mặt không tráng men mang nét râu quai nón, mũi cao và biểu cảm say mê riêng biệt.",
          detailEn: "Atop a flower-carpeted wooden platform straddling the camel's humps, four Central Asian musicians sit back-to-back playing pipa, flute, mouth organ, and clappers around a standing male vocalist leaning back in song. At 3.2x magnification, unglazed painted faces show high noses, full beards, and distinct rapt expressions."
        },
        {
          xPct: 24,
          yPct: 44,
          titleVi: "Đầu lạc đà hai bướu ngẩng cao rống vang theo điệu nhạc",
          titleEn: "Bactrian Camel Head Raised in Unison with the Music",
          detailVi: "Chú lạc đà hai bướu vùng Trung Á có cổ cong chữ S thanh thoát, miệng há rộng như đang rống hòa nhịp với dàn nhạc trên lưng. Lớp lông cổ và bờm ức đắp nổi từng mảng sợi mềm phủ men vàng hổ phách loang trắng kem, tạo độ tương phản sống động với thân màu trắng ngà.",
          detailEn: "The Central Asian Bactrian camel arches its S-curved neck with open jaws as if bellowing along with the music. Molded tufts of chest and neck wool glazed in flowing amber-yellow and cream contrast richly against its ivory flanks."
        },
        {
          xPct: 52,
          yPct: 48,
          titleVi: "Hiệu ứng men Tam Thái chảy tự nhiên trên tấm thảm viền tua",
          titleEn: "Controlled Glaze Bleeding on the Fringed Saddle Carpet",
          detailVi: "Tấm thảm phủ ngang bệ gỗ có họa tiết hình thoi chấm hoa theo phong cách dệt Ba Tư – Sogdia, nơi ba màu men lục, vàng hổ phách và trắng chảy nhẹ xuống mép viền dưới tác dụng của trọng lực trong lò nung. Chính độ loang mềm tự nhiên này tạo nên chất hội họa ấn tượng độc đáo của gốm Đường.",
          detailEn: "The draped carpet bears Persian-Sogdian lozenge medallions where green, amber, and white glazes trickle softly downward under kiln gravity. This controlled fluid blending gives Tang Sancai its unmistakable painterly vitality."
        },
        {
          xPct: 68,
          yPct: 76,
          titleVi: "Bốn chân lạc đà đứng vững trên bệ đất và tỷ lệ giải phẫu chuẩn",
          titleEn: "Grounded Stance and Accurate Equine-Camelid Anatomy",
          detailVi: "Bốn chân lạc đà đúc thon gọn nhưng khớp gối, móng đệm tròn và thế chịu lực chia đều trên tấm đế hình chữ nhật được tính toán chuẩn xác để nâng khối bục năm nhân vật phía trên mà không nứt sập khi nung ở 850°C.",
          detailEn: "Slender camel legs with accurate knee joints and broad footpads distribute the weight of the five-figure superstructure evenly onto a rectangular baseplate, preventing kiln collapse during 850°C firing."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Cảm nhận tinh thần cởi mở đa văn hóa của Trường An Thịnh Đường qua hình ảnh dàn nhạc Con đường Tơ Lụa trình diễn ngay trên lưng lạc đà.",
        "Bước 2 (Soi chất liệu & lớp men): Phóng đại 3.2x vào độ loang men chì Tam Thái trên tấm thảm Ba Tư và khuôn mặt mộc vẽ màu nguội của năm nghệ sĩ người Hồ.",
        "Bước 3 (Đọc sử liệu & đối sánh thời đại): Xác minh niên đại năm Khai Nguyên thứ 11 (723) từ mộ chí Tiên Vu Đình Hối và đối chiếu với bản Tam Thái lạc đà tại Bảo tàng Lịch sử Thiểm Tây."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Experience High Tang Chang'an's cosmopolitan spirit through a Silk Road musical troupe performing atop a Bactrian camel.",
        "Step 2 (Material & Glaze Inspection): Magnify to 3.2x to study fluid lead-glaze streaks across the Sogdian carpet and cold-painted unglazed faces of the five musicians.",
        "Step 3 (Texts & Historical Context): Verify the 723 CE date from General Xianyu Tinghui's epitaph and compare with the sibling troupe in the Shaanxi History Museum."
      ]
    },
    {
      slug: "to-sa-thien-y-ma-vuong-doi",
      titleVi: "Tố Sa Thiện Y 49g Mã Vương Đôi — Đỉnh Cao Dệt Lụa Tây Hán",
      titleEn: "49-Gram Plain Gauze Gown from Mawangdui — Western Han Silk Mastery",
      titleZh: "素纱襌衣（49克）— 西汉马王堆一号汉墓",
      tombstone: {
        dynasty: "Tây Hán sơ kỳ (trước năm 168 TCN, Mộ số 1 Mã Vương Đôi, Trường Sa, Hồ Nam)",
        medium: "Tơ tằm nguyên chất dệt sa thưa không nhuộm (Tố sa), viền gấm nhung",
        dimensions: "Dài 128 cm × Sải tay 190 cm; Trọng lượng 49 gram (bản cổ thẳng)",
        museum: "Bảo tàng Hồ Nam (Hunan Museum, Changsha)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Sợi tơ tằm Bombyx mori siêu mảnh (10,2–11,3 denier, đường kính ~12 micromet)",
          nameEn: "Ultra-Fine Bombyx mori Silk Filament (10.2–11.3 Denier, ~12 Microns)",
          scientificNoteVi: "Phân tích kính hiển vi điện tử cho thấy độ mảnh sợi tơ chỉ đạt 10,2–11,3 denier — mảnh hơn gần một nửa so với tơ tằm thương mại hiện đại (14–22 denier). Toàn bộ 2,6 m2 vải áo trừ cổ tay viền gấm chỉ nặng khoảng 25 gram, đạt mật độ ~12–15 g/m2.",
          scientificNoteEn: "Electron microscopy measures filament fineness at 10.2–11.3 denier—nearly half the thickness of modern commercial silk (14–22 denier). Excluding the brocade trim, 2.6 square meters of plain gauze weighs barely 25 grams (~12–15 g/m2)."
        },
        {
          nameVi: "Môi trường bảo quản kỵ khí đất sét trắng (Bạch cao nê) và than củi",
          nameEn: "Anaerobic Kaolin-Clay and Charcoal Burial Seal",
          scientificNoteVi: "Mộ Tân Truy phu nhân sâu 16 mét được bọc kín bằng 5 tấn than củi hút ẩm và lớp đất sét trắng dày hơn 1 mét, triệt tiêu hoàn toàn oxy và vi khuẩn phân hủy protein fibroin của tơ tằm suốt hơn 2.100 năm.",
          scientificNoteEn: "Lady Dai's 16-meter-deep tomb was hermetically sealed with 5 tons of charcoal and over a meter of white kaolin clay, halting oxygen and microbial degradation of silk fibroin protein for over 2,100 years."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "《诗经·郑风》：衣锦褧衣（古礼以素纱罩于锦衣之外，取其轻盈含蓄）",
          pinyin: "Shijing · Zhengfeng: Yi jin jiong yi",
          translationVi: "Kinh Thi ghi lại lễ phục cổ mặc áo tố sa mỏng bên ngoài áo gấm rực rỡ để làm dịu ánh sắc hoa lệ, tạo vẻ 'mỏng như cánh ve, nhẹ như làn khói'.",
          translationEn: "The Book of Songs records wearing sheer unbleached gauze over bright brocade to veil ostentation, achieving an effect 'thin as cicada wings, light as mist'."
        },
        {
          sealZh: "长沙国丞相轪侯利苍夫人辛追墓（公元前168年后下葬）遣策竹简记录",
          pinyin: "Changshaguo Chengxiang Daihou Li Cang Furen Xin Zhui mu qiance",
          translationVi: "Thẻ tre kiểm kê tùy táng (khiển sách) trong mộ số 1 Mã Vương Đôi xác nhận chủ nhân là Tân Truy, phu nhân Tể tướng nước Trường Sa Lợi Thương.",
          translationEn: "Bamboo tomb-inventory slips from Mawangdui Tomb 1 identify the owner as Xin Zhui, wife of Chancellor Li Cang, Marquis of Dai."
        }
      ],
      zoomHotspots: [
        {
          xPct: 50,
          yPct: 48,
          titleVi: "Cấu trúc dệt sa trơn không xoắn với 75% diện tích là lỗ thoáng",
          titleEn: "Untwisted Plain-Weave Gauze with 75% Open Pore Ratio",
          detailVi: "Phóng đại 3.2x (và ảnh vi mô dệt học) lộ rõ lưới sợi dọc – ngang vuông vức thưa thoáng đều tăm tắp, mật độ khoảng 58 sợi dọc × 40 sợi ngang trên mỗi cm2 nhưng đường kính sợi chỉ bằng một phần năm sợi tóc người. Khi gấp gọn, toàn bộ chiếc áo dài 1,28 mét có thể nằm lọt trong một hộp diêm nhỏ.",
          detailEn: "At 3.2x magnification, an extraordinarily regular open-grid plain weave emerges—roughly 58 warp by 40 weft threads per square centimeter, each filament a fifth the width of a human hair. Folded neatly, the entire 1.28-meter gown fits inside a small matchbox."
        },
        {
          xPct: 48,
          yPct: 24,
          titleVi: "Viền cổ và cổ tay bằng gấm Nhung Quyển Kỳ (Rongquanqi)",
          titleEn: "Velvet-Loop Brocade Collar and Cuff Trim",
          detailVi: "Để giữ phom dáng cho lớp lụa siêu nhẹ không bị xô lệch khi mặc, thợ may Tây Hán viền dọc cổ áo giao lĩnh (cổ chéo) và hai cửa tay rộng bằng dải gấm dệt vòng nổi hoa văn hình học. Riêng phần viền gấm dày dặn này chiếm gần một nửa trong tổng trọng lượng 49 gram của cả chiếc áo.",
          detailEn: "To stabilize the gossamer silk during wear, Han tailors edged the crossed collar and wide cuffs with geometric velvet-loop brocade. This structured brocade trim accounts for nearly half of the gown's 49-gram total weight."
        },
        {
          xPct: 22,
          yPct: 36,
          titleVi: "Tay áo dài 190 cm cắt khâu theo phép 'Tứ bức tiếp hợp'",
          titleEn: "190 cm Wingspan Tailored from Four Joined Loom Widths",
          detailVi: "Chiều sải tay tới 1,9 mét được ghép nối bằng đường chỉ tơ siêu mảnh chạy thẳng giữa sống lưng và hai nách mà không cắt lãng phí khổ vải dệt 48 cm chuẩn nhà Hán. Kỹ thuật khâu cuốn mép (quyển biên) dày chưa đầy 1 mm ngăn hoàn toàn hiện tượng tưa sợi sa thưa.",
          detailEn: "The 1.9-meter wingspan joins standard 48 cm Han loom widths along center-back and sleeve seams with zero fabric waste. Ultra-fine rolled hems under 1 mm wide prevent the open-mesh gauze from fraying."
        },
        {
          xPct: 76,
          yPct: 68,
          titleVi: "Thử nghiệm phục chế hiện đại: 13 năm mới tiệm cận mốc 49 gram",
          titleEn: "Modern Replication Benchmark: 13 Years to Match 49 Grams",
          detailVi: "Khi Viện Nghiên cứu Tơ lụa Nam Kinh thử phục chế chiếc áo bằng công nghệ hiện đại cuối thế kỷ XX, bản đầu tiên nặng tới hơn 80 gram do giống tằm hiện đại nhả sợi quá dày. Các nhà khoa học phải lai chọn lại giống tằm ba tuổi kích thước nhỏ và kiểm soát nhiệt độ ăn dâu trong 13 năm mới đạt đúng trọng lượng 49 gram.",
          detailEn: "When the Nanjing Silk Research Institute attempted modern replication in the late twentieth century, their first version weighed over 80 grams because modern silkworms spin thicker filaments. Scientists spent 13 years selectively breeding smaller three-molt silkworms to finally match the 49-gram Han original."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Cảm nhận tỷ lệ nghịch phi thường giữa kích thước rộng lớn (128 × 190 cm) và khối lượng siêu nhẹ chỉ 49 gram của chiếc áo lụa 2.100 năm tuổi.",
        "Bước 2 (Soi chất liệu & kỹ thuật dệt): Phóng đại 3.2x vào mật độ lưới sợi tơ 10 denier xuyên sáng và đường viền gấm cổ tay giữ phom áo.",
        "Bước 3 (Đọc sử liệu & đối sánh thời đại): Đối chiếu công dụng áo khoác 'kiểng y' trong Kinh Thi với trình độ nuôi tằm – ươm tơ đỉnh cao của nước Trường Sa đầu thời Tây Hán."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Grasp the astonishing contrast between generous dimensions (128 × 190 cm) and a featherlight 49-gram mass after 2,100 years.",
        "Step 2 (Material & Weaving Inspection): Magnify to 3.2x to inspect translucent 10-denier open gauze mesh and structured brocade cuff edging.",
        "Step 3 (Texts & Historical Context): Connect the sheer over-robe tradition in the Book of Songs with early Western Han sericulture excellence in Changsha."
      ]
    },
    {
      slug: "binh-dai-vi-thanh-hoa-1351",
      titleVi: "Đôi Bình Thanh Hoa Chí Chính Thập Nhất Niên (David Vases 1351) — Nguyên",
      titleEn: "The David Vases (1351 Zhizheng Blue-and-White Altar Vases) — Yuan",
      titleZh: "元至正十一年青花云龙纹象耳瓶（大维德花瓶）",
      tombstone: {
        dynasty: "Nguyên (niên hiệu Chí Chính thứ 11, năm 1351, Lò Cảnh Đức Trấn, Giang Tây)",
        medium: "Sứ trắng cao lanh vẽ dưới men bằng sắc tố lam coban Ba Tư (Tô Ma Ly Thanh)",
        dimensions: "Cao 63,6 cm × Đường kính thân ~21 cm (cặp đôi hai bình)",
        museum: "Bảo tàng Anh (British Museum, London — Sir Percival David Collection)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Sắc tố Coban nhập khẩu Ba Tư — Tô Ma Ly Thanh (CoO thấp Mangan, giàu Sắt Fe2O3)",
          nameEn: "Imported Persian Cobalt — Sumali Qing (Low-Manganese, High-Iron CoO)",
          scientificNoteVi: "Phân tích XRF xác nhận men lam vẽ dưới men sử dụng quặng coban nhập từ Kashan (Ba Tư) có hàm lượng sắt cao và mangan thấp. Khi nung ở ~1300°C, sắt dư kết tinh tạo các đốm đen ánh kim đặc trưng (thiết tú ban) hòa lẫn sắc lam sâu thẳm rực rỡ.",
          scientificNoteEn: "XRF analysis confirms underglaze cobalt imported from Kashan, Persia—characterized by high iron and low manganese. Fired around 1300°C, excess iron precipitates into metallic dark 'heaped-and-piled' spots amid vivid sapphire blue."
        },
        {
          nameVi: "Xương sứ nhị nguyên Cao lanh + Đá sứ (Bạch Đôn Tử) nung 1300°C",
          nameEn: "Binary Kaolin and Petuntse Porcelain Body Fired at 1300°C",
          scientificNoteVi: "Thợ gốm Cảnh Đức Trấn thời Nguyên trộn thêm đất Cao lanh chịu lửa vào đá sứ truyền thống (phối phương nhị nguyên), giúp thân bình cao trên 63 cm chịu nhiệt 1300°C mà không bị cong sụp khi nung đứng.",
          scientificNoteEn: "Yuan Jingdezhen potters blended refractory kaolin into traditional petuntse porcelain stone—the binary recipe enabling 63.6 cm tall vessels to withstand 1300°C firing without slumping."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "信州路玉山县顺城乡德教里荆塘社奉圣弟子张文进，喜舍香炉花瓶一付，祈保合家清吉……至正十一年四月良辰谨记（共62字）",
          pinyin: "Xinzhoulu Yushanxian... Zhang Wenjin, xishe xianglu huaping yifu... Zhizheng shiyi nian si yue liangchen jinji",
          translationVi: "Minh văn 62 chữ viết dưới men ngay trên cổ bình xác nhận tín chủ Trương Văn Tiến cúng dường cặp bình và lư hương cho đạo quán tinh xá vào tháng 4 năm Chí Chính thứ 11 (1351).",
          translationEn: "62-character underglaze inscription on the neck recording devotee Zhang Wenjin's donation of the altar vases and incense burner to a Daoist temple in the fourth month of Zhizheng 11 (1351)."
        },
        {
          sealZh: "星源祖殿胡净一元帅打供（献供对象铭文）",
          pinyin: "Xingyuan zudian Hu Jingyi yuanshuai dagong",
          translationVi: "Dòng cuối ghi rõ lễ vật cúng dường Nguyên soái Hồ Tịnh Nhất tại tổ điện Tinh Nguyên (nay thuộc huyện Vụ Nguyên, Giang Tây), giúp giới gốm sứ thế giới xác định chuẩn mốc 'Chí Chính hình' cho toàn bộ gốm Thanh Hoa thời Nguyên.",
          translationEn: "Final line dedicating the vases to General Hu Jingyi at the Xingyuan ancestral hall, establishing the 'Zhizheng benchmark' used worldwide to date Yuan blue-and-white porcelain."
        }
      ],
      zoomHotspots: [
        {
          xPct: 50,
          yPct: 22,
          titleVi: "Minh văn 62 chữ năm 1351 — 'Đá Rosetta' của gốm sứ Thanh Hoa",
          titleEn: "1351 62-Character Neck Inscription — The Rosetta Stone of Blue-and-White",
          detailVi: "Trước khi học giả R.L. Hobson công bố cặp bình này năm 1929, giới học thuật từng nghi ngờ không biết sứ Thanh Hoa hoàn mỹ đã tồn tại từ thời Nguyên hay chưa. Dòng chữ 62 chữ viết bằng lam coban nằm dưới lớp men bóng năm 1351 đã khóa chặt niên đại chuẩn mực, khai sinh khái niệm 'Nguyên Thanh Hoa Chí Chính hình'.",
          detailEn: "Before R.L. Hobson published these vases in 1929, scholars doubted mature blue-and-white porcelain existed in the Yuan dynasty. Sealed beneath clear glaze, the 62-character 1351 dedication permanently anchored Yuan chronology and defined the 'Zhizheng type'."
        },
        {
          xPct: 50,
          yPct: 54,
          titleVi: "Rồng bốn móng thân mảnh vờn mây và vết thiết tú ban",
          titleEn: "Four-Clawed Lithe Dragon and Metallic Iron-Oxide Spots",
          detailVi: "Băng chính giữa thân bình vẽ con rồng bốn móng đầu nhỏ, cổ mảnh, thân vảy lưới uốn lượn dữ dội giữa cụm mây hình hỏa diễm. Soi 3.2x ở những chỗ nét bút chấm đậm thấy các vết kết tinh sắt oxit đen lấp lánh hơi lõm xuống bề mặt men (thiết tú ban) — dấu vân tay hóa học không thể giả lập của coban Ba Tư thời Nguyên.",
          detailEn: "The main belly zone depicts a slender, small-headed four-clawed dragon with cross-hatched scales surging through flame-like clouds. At 3.2x magnification, dark glistening iron-oxide crystals slightly recessed into the glaze ('heaped and piled' effect) authenticate genuine Yuan Persian cobalt."
        },
        {
          xPct: 24,
          yPct: 26,
          titleVi: "Đôi tai voi đúc nổi (Tượng nhĩ) mô phỏng đồng thanh cổ",
          titleEn: "Molded Elephant-Head Handles Echoing Archaic Bronzes",
          detailVi: "Hai bên cổ bình gắn cặp quai hình đầu voi uốn vòi dài thành vòng khuyên, mô phỏng dáng bình tôn lễ khí đồng thanh thời Chu – Hán. Sự kết hợp giữa phom dáng cổ điển Trung Hoa, quặng coban Trung Đông và hoa văn phân tầng tám lớp mang hơi hướng khay đồng Hồi giáo tạo nên giao điểm văn minh Á – Âu thế kỷ XIV.",
          detailEn: "Flanking the neck are molded elephant-head handles with looped trunks recalling Zhou-Han ritual bronzes. Merging Chinese bronze typology, Persian cobalt, and eight-band ornament inspired by Islamic metalwork embodies fourteenth-century Eurasian exchange."
        },
        {
          xPct: 50,
          yPct: 78,
          titleVi: "Tám tầng hoa văn dày đặc và kỹ thuật ghép phôi nhiều đoạn",
          titleEn: "Eight Dense Decorative Tiers and Multi-Section Wheel Joining",
          detailVi: "Thân bình chia kín tám băng trang trí từ miệng đến chân: dây cúc, lá chuối, phượng hoàng bay, rồng mây, sóng biển, dây mẫu đơn và cánh sen đứng. Phóng đại 3.2x ở phần vai và bụng dưới vẫn nhận ra gờ nối nhẹ nơi thợ gốm ghép nhiều đoạn thân tiện bàn xoay riêng biệt để đạt chiều cao 63,6 cm.",
          detailEn: "Eight stacked registers cover the profile from lip to foot: chrysanthemum scrolls, plantain leaves, phoenixes, dragon, waves, peony scrolls, and lotus panels. At 3.2x magnification along the shoulder and lower belly, faint horizontal luting seams reveal separately thrown clay sections joined to reach 63.6 cm."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Quan sát bố cục tám tầng hoa văn dày đặc kiểu 'Chí Chính hình' và cặp tai voi cổ điển trên dáng bình cao 63,6 cm.",
        "Bước 2 (Soi chất liệu & nét vẽ): Phóng đại 3.2x vào các đốm đen ánh kim thiết tú ban trên thân rồng bốn móng và nét chữ năm 1351 nằm dưới lớp men trong suốt.",
        "Bước 3 (Đọc minh văn & đối sánh thời đại): Hiểu vai trò mốc chuẩn 1351 của Đôi Bình Đại Vị và đối sánh sự lan tỏa của gốm Hoa Lam sang Chu Đậu (Hải Dương) thế kỷ XV."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Observe the dense eight-tier 'Zhizheng' ornamental grid and archaistic elephant handles on the 63.6 cm silhouette.",
        "Step 2 (Material & Glaze Inspection): Magnify to 3.2x on the four-clawed dragon's recessed iron-oxide spots and the 1351 underglaze neck inscription.",
        "Step 3 (Inscriptions & Historical Context): Appreciate the David Vases as the 1351 dating anchor and trace blue-and-white's spread to fifteenth-century Chu Dau kilns in Vietnam."
      ]
    },
    {
      slug: "kim-lu-ngoc-y-man-thanh",
      titleVi: "Kim Lữ Ngọc Y Lưu Thắng Mãn Thành — Tây Hán",
      titleEn: "Jade Burial Suit Sewn with Gold Thread of Prince Liu Sheng — Western Han",
      titleZh: "满城汉墓刘胜金缕玉衣 — 西汉（公元前113年）",
      tombstone: {
        dynasty: "Tây Hán (năm 113 TCN, Mộ Trung Sơn Tĩnh Vương Lưu Thắng, Mãn Thành, Hà Bắc)",
        medium: "2.498 phiến ngọc Nephrite Hòa Điền khâu bằng ~1.100 gram sợi vàng ròng",
        dimensions: "Dài 188 cm; Gồm 12 bộ phận khớp sát giải phẫu cơ thể",
        museum: "Bảo tàng Hà Bắc (Hebei Museum, Shijiazhuang)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "2.498 phiến ngọc Nephrite Hòa Điền (Tân Cương) mài phẳng độ dày 2–3,5 mm",
          nameEn: "2,498 Khotan Nephrite Jade Plaques (2–3.5 mm Thick)",
          scientificNoteVi: "Mỗi phiến ngọc xanh lục sáng hoặc trắng xám được cưa mỏng, mài phẳng bóng bốn cạnh và khoan 4 lỗ tròn đường kính ~1 mm ở bốn góc. Tổng công sức cắt mài gần 2.500 phiến ngọc ước tính tiêu tốn hơn 10 năm lao động liên tục của một thợ ngọc lành nghề.",
          scientificNoteEn: "Each greenish-gray nephrite plaque was sawed thin, beveled smooth, and drilled with four ~1 mm corner holes. Cutting, polishing, and drilling nearly 2,500 hard jade tiles is estimated to have required over a decade of continuous lapidary labor."
        },
        {
          nameVi: "Sợi vàng ròng độ tinh khiết ~96% kéo mảnh đường kính 0,35–0,5 mm (~1,1 kg)",
          nameEn: "~96% Pure Drawn Gold Wire (0.35–0.5 mm Diameter, ~1.1 kg)",
          scientificNoteVi: "Vàng nguyên chất được dát kéo thành sợi dẻo siêu mảnh rồi xoắn đôi thành dây bền (kim lữ) để luồn qua từng lỗ góc phiến ngọc. Theo quy chế tang lễ nhà Hán, chỉ Hoàng đế và chư hầu vương được đặc ân mới dùng sợi vàng (Kim lữ), cấp thấp hơn dùng sợi bạc (Ngân lữ) hoặc sợi đồng (Đồng lữ).",
          scientificNoteEn: "High-purity gold was drawn into supple 0.35–0.5 mm filaments and twisted into sturdy two-ply thread to stitch adjacent jade corners. Han sumptuary law reserved gold thread exclusively for emperors and specially favored royal princes, with silver and bronze threads for lower ranks."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "《后汉书·礼仪志》：诸侯王、列侯、始封贵人、公主薨，皆令赠印玺、玉匣银缕",
          pinyin: "Hou Hanshu · Liyizhi: ...yuxia yinlue",
          translationVi: "Hậu Hán Thư chép rõ tên gọi cổ của ngọc y là 'Ngọc Hạp' (áo giáp ngọc) cùng quy chế phân đẳng cấp Kim lữ, Ngân lữ, Đồng lữ nghiêm ngặt thời Hán.",
          translationEn: "Book of Later Han codifying the ancient name 'jade casing' (yuxia) and strict rank distinctions among gold-, silver-, and bronze-threaded burial suits."
        },
        {
          sealZh: "满城一号墓（汉武帝异母兄中山靖王刘胜，公元前113年卒）",
          pinyin: "Mancheng Yihao Mu (Zhongshan Jingwang Liu Sheng, d. 113 BCE)",
          translationVi: "Khai quật năm 1968 trong hang đá núi Lăng Sơn (Mãn Thành), lần đầu tiên chứng thực sự tồn tại thật của Kim Lữ Ngọc Y vốn trước đó chỉ thấy trong sử sách.",
          translationEn: "Excavated in 1968 from a rock-cut cliff tomb at Mancheng, providing the first intact physical proof of gold-threaded jade suits previously known only from texts."
        }
      ],
      zoomHotspots: [
        {
          xPct: 16,
          yPct: 48,
          titleVi: "Mũ chụp đầu và mặt nạ khớp sống mũi, hốc mắt, miệng",
          titleEn: "Sculpted Head Hood with Contoured Nose, Eyes, and Mouth",
          detailVi: "Phần đầu gồm mặt nạ và chóp mũ được ghép từ hàng trăm phiến ngọc hình thang, tam giác và hình quạt cắt đo riêng để ôm sát sống mũi nhô cao và hốc mắt. Phóng đại 3.2x thấy từng lỗ khoan góc được xâu dây vàng xoắn chặt gọn mặt trong, tạo bề mặt liền khối khít khao không khe hở.",
          detailEn: "The headpiece combines hundreds of custom-shaped trapezoidal, triangular, and fan-shaped jade tiles contoured over the nose bridge and eye sockets. At 3.2x magnification, twisted gold wires lock tightly behind every corner perforation, creating a seamless protective shell."
        },
        {
          xPct: 48,
          yPct: 50,
          titleVi: "Thân áo phồng bụng phản ánh thể trạng thật của Lưu Thắng",
          titleEn: "Contoured Torso Mirroring Prince Liu Sheng's Physique",
          detailVi: "Phần giáp ngực và bụng không phẳng thẳng mà uốn cong phồng nhẹ theo đúng số đo cơ thể mập mạp của Trung Sơn Tĩnh Vương (cao 1,88 m theo chiều dài bộ giáp). Viền cổ, nách và mép áo được bọc thêm sợi sắt dẹt quấn lụa gấm đỏ làm khung định hình cứng cho toàn bộ 2.498 mảnh ngọc.",
          detailEn: "Chest and abdominal panels swell outward to match Prince Liu Sheng's portly build inside the 188 cm suit. Necklines, armholes, and hems were edged with silk-wrapped iron strips forming a rigid structural frame for all 2,498 plaques."
        },
        {
          xPct: 38,
          yPct: 72,
          titleVi: "Bao tay năm ngón rời và hai miếng ngọc nắm (Ngọc ác)",
          titleEn: "Articulated Five-Fingered Gloves and Jade Hand Grips",
          detailVi: "Hai bàn tay được tạo hình găng tay năm ngón uốn cong tự nhiên như đang nắm hờ, bên trong lòng bàn tay đặt hai thỏi ngọc tròn hình trụ bán nguyệt gọi là 'ngọc ác'. Theo quan niệm trường sinh thời Hán, ngọc chất dương thuần khiết bịt kín chín khiếu và bao bọc cơ thể sẽ ngăn nhục thân hư hoại.",
          detailEn: "Both hands form naturally cupped five-fingered jade mittens enclosing crescent-shaped jade hand grips (yuwo). Han immortality belief held that pure yang jade sealing all nine bodily orifices and encasing the corpse would prevent physical decay."
        },
        {
          xPct: 84,
          yPct: 52,
          titleVi: "Ống quần và đôi giày ngọc khép kín toàn thân",
          titleEn: "Tubular Jade Leggings and Enclosed Jade Shoes",
          detailVi: "Đôi ống quần và đôi giày ngọc ghép khít từ phiến chữ nhật lớn dần về phía đùi, khép kín hoàn toàn xuống tận lòng bàn chân. Soi 3.2x các phiến ngọc mặt đế thấy có phiến còn lưu số thứ tự khắc mảnh bằng mực và dao khắc của thợ xưởng ngự dụng khi lắp ráp thử nghiệm.",
          detailEn: "Tubular leggings and enclosed jade boots step up from small ankle plaques to larger thigh tiles, sealing the feet completely. At 3.2x magnification, faint craftsman assembly numbers remain incised on select interior tiles from pre-burial fitting."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Quan sát bộ giáp ngọc dài 1,88 mét gồm 12 cấu kiện khớp giải phẫu hoàn chỉnh từ đỉnh đầu đến lòng bàn chân.",
        "Bước 2 (Soi chất liệu & kỹ thuật): Phóng đại 3.2x vào đường khoan góc 1 mm trên phiến ngọc Hòa Điền, mối xoắn dây vàng tinh khiết 96% và khung viền sắt bọc gấm.",
        "Bước 3 (Đọc sử liệu & đối sánh thời đại): Đối chiếu quy chế Kim – Ngân – Đồng lữ trong Hậu Hán Thư và lệnh bãi bỏ ngọc y của Ngụy Văn Đế Tào Phi năm 222 để chống nạn trộm mộ."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Examine the 188 cm burial suit composed of 12 anatomically tailored jade sections from crown to soles.",
        "Step 2 (Material & Craft Inspection): Magnify to 3.2x to inspect 1 mm corner drill holes, 96% pure twisted gold wire, and silk-wrapped iron edge frames.",
        "Step 3 (Texts & Historical Context): Cross-reference Han sumptuary rules in the Book of Later Han and Cao Pi's 222 CE ban on jade suits to deter tomb looting."
      ]
    },
    {
      slug: "viet-vuong-cau-tien-kiem",
      titleVi: "Việt Vương Câu Tiễn Kiếm — Thanh Kiếm Đồng Không Gỉ Xuân Thu",
      titleEn: "Sword of Goujian, King of Yue — Spring and Autumn Period",
      titleZh: "越王勾践剑 — 春秋晚期（公元前496–前465年）",
      tombstone: {
        dynasty: "Xuân Thu vãn kỳ (thế kỷ V TCN, khai quật năm 1965 tại Mộ Sở Vọng Sơn số 1, Giang Lăng, Hồ Bắc)",
        medium: "Đồng thanh đúc phức hợp hai hợp kim (Phức hợp kiếm), khảm lưu ly và ngọc lam",
        dimensions: "Dài 55,7 cm × Rộng thân kiếm 4,6 cm; Nặng 875 gram",
        museum: "Bảo tàng Tỉnh Hồ Bắc (Hubei Provincial Museum, Wuhan)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "Kỹ thuật đúc phức hợp hai hợp kim (Sống kiếm Cu ~83% dẻo : Lưỡi kiếm Sn ~17–19% cứng)",
          nameEn: "Bi-Metallic Composite Bronze (Ductile ~83% Cu Spine : Hard ~17–19% Sn Edge)",
          scientificNoteVi: "Phân tích tia X và quang phổ chứng minh sống kiếm chứa hàm lượng đồng cao giúp đàn hồi chống gãy khi va đập, còn hai mép lưỡi tăng hàm lượng thiếc lên ~17–19% để đạt độ cứng sắc bén chém ngọt. Đây là đỉnh cao luyện kim vũ khí cổ đại thế kỷ V TCN.",
          scientificNoteEn: "Spectroscopic analysis reveals a copper-rich central spine conferring shock-absorbing toughness, paired with tin-enriched (~17–19%) cutting edges achieving superior hardness and razor sharpness—fifth-century BCE metallurgical mastery."
        },
        {
          nameVi: "Họa tiết quả trám đen giàu lưu huỳnh/thiếc và độ kín kỵ khí của bao kiếm gỗ",
          nameEn: "Tin/Sulfur-Enriched Rhomboid Surface Pattern and Sealed Lacquer Scabbard",
          scientificNoteVi: "Các hình thoi đen chạy dọc thân kiếm là lớp bề mặt giàu thiếc và hợp chất sunfua chống ăn mòn điện hóa, kết hợp điều kiện ngâm kín trong bao gỗ sơn mài và đất ẩm trung tính vùng Sở giúp kiếm không hề gỉ sét sau 2.400 năm.",
          scientificNoteEn: "Dark rhomboid lozenges along the blade represent a tin- and sulfur-enriched corrosion-resistant surface layer; combined with a tight lacquered wooden scabbard in anaerobic Chu tomb mud, the blade remained tarnish-free for 2,400 years."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "越王鸠浅（勾践）自作用剑（鸟篆错金八字）",
          pinyin: "Yue Wang Jiuqian (Goujian) zizuo yongjian",
          translationVi: "Tám chữ Điểu Triện (chữ triện hình chim) khảm vàng ròng gần chắn kiếm: Việt Vương Cưu Thiển (Câu Tiễn) tự chế tác thanh kiếm để dùng.",
          translationEn: "Eight Bird-Script (Niaozhuan) characters inlaid in pure gold near the guard: Goujian, King of Yue, personally commissioned this sword for his own use."
        },
        {
          sealZh: "《越绝书》：吴越宝剑工艺冠绝天下，淬火铸冶独步春秋",
          pinyin: "Yuejueshu: Wu-Yue swordsmithing supremacy",
          translationVi: "Sách Việt Tuyệt Thư ghi chép danh tiếng tuyệt đỉnh của nghề đúc kiếm Ngô – Việt thời Xuân Thu, được chứng thực trực tiếp qua thanh kiếm của chính vua Câu Tiễn.",
          translationEn: "The Yuejueshu chronicles praising Wu-Yue swordsmithing supremacy during the Spring and Autumn period, directly verified by King Goujian's personal blade."
        }
      ],
      zoomHotspots: [
        {
          xPct: 30,
          yPct: 48,
          titleVi: "Tám chữ Điểu Triện khảm vàng 'Việt Vương Cưu Thiển tự tác dụng kiếm'",
          titleEn: "Eight Gold-Inlaid Bird-Script Characters Naming King Goujian",
          detailVi: "Ngay phía trên chắn kiếm khắc chìm hai hàng tám chữ Điểu Triện — thể chữ nghệ thuật trang trí đầu chim đặc trưng nước Ngô – Việt — rồi khảm đầy sợi vàng ròng. Phóng đại 3.2x thấy từng đường uốn mảnh như lông chim vẫn sáng bóng rực rỡ không bong một nét, giúp các học giả Quách Mạt Nhược và Đường Lan giải mã chuẩn xác chủ nhân thanh kiếm.",
          detailEn: "Just above the guard sit two columns of eight Bird-Script characters—ornamental Wu-Yue calligraphy ending in avian flourishes—inlaid with pure gold. At 3.2x magnification, every hair-thin golden stroke remains intact, allowing scholars to identify King Goujian conclusively."
        },
        {
          xPct: 20,
          yPct: 50,
          titleVi: "Chắn kiếm (Kiếm cách) nạm ngọc lam Thổ Nhĩ Kỳ và lưu ly xanh",
          titleEn: "Bronze Guard Inlaid with Turquoise and Blue Glass",
          detailVi: "Hai mặt chắn kiếm chạm hoa văn thú mặt cách điệu, mặt chính khảm các hạt lưu ly xanh lam nhân tạo (một trong những chứng tích thủy tinh cổ nhất Trung Hoa) và mặt sau khảm đá ngọc lam thiên nhiên. Độ khít giữa ô đồng và đá quý chứng tỏ tay nghề kim hoàn tinh tế ngang tầm đồ ngự dụng hoàng gia.",
          detailEn: "The sculpted bronze guard features stylized animal masks inlaid with deep blue glass beads on the obverse—among China's earliest artificial glass—and natural turquoise on the reverse, fitted with royal-grade lapidary precision."
        },
        {
          xPct: 64,
          yPct: 46,
          titleVi: "Mạng lưới quả trám đen chống gỉ và lưỡi kiếm sắc bén",
          titleEn: "Corrosion-Resistant Black Rhomboid Grid and Razor Edge",
          detailVi: "Dọc hai mặt thân kiếm phủ kín mạng lưới hình thoi đen sắc nét trên nền đồng ánh vàng sáng, không hề lộ vết gồ ghề khi sờ tay nhưng hiện rõ ranh giới cấu trúc tinh thể ở độ phóng đại 3.2x. Khi mới rút khỏi bao gỗ năm 1965, lưỡi kiếm vẫn đủ sắc cắt đứt cùng lúc hơn 16 tờ giấy tuyên chồng lên nhau.",
          detailEn: "Both blade faces display a sharp dark rhomboid lattice flush against bright golden bronze, revealing distinct microstructural grain boundaries at 3.2x magnification. Upon unsheathing in 1965, the edge cleanly sliced through over sixteen stacked sheets of Xuan paper in a single pass."
        },
        {
          xPct: 8,
          yPct: 50,
          titleVi: "Đốc kiếm (Kiếm thủ) đúc 11 vòng tròn đồng tâm cách nhau 0,2 mm",
          titleEn: "Pommel Cast with 11 Concentric Rings Spaced 0.2 mm Apart",
          detailVi: "Mặt đáy chuôi kiếm đường kính chỉ 4,3 cm chứa đúng 11 vòng tròn đồng tâm cực mỏng, khe hở giữa hai vòng liền kề chỉ khoảng 0,2 mm nhưng hoàn toàn không dính bavia hay lệch tâm. Chi tiết cơ khí siêu chính xác này là bài toán lớn về kỹ thuật tạo khuôn sáp – đất nung thời Xuân Thu.",
          detailEn: "Inside the 4.3 cm circular pommel sit 11 razor-thin concentric bronze rings separated by gaps barely 0.2 mm wide without casting flash or eccentricity. This micro-mechanical feat demonstrates extraordinary fifth-century BCE mold-making precision."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Ngắm ánh đồng vàng sáng bóng không gỉ sét và tỷ lệ cân bằng chiến đấu hoàn hảo (55,7 cm, 875 g) của 'Thiên hạ đệ nhất kiếm'.",
        "Bước 2 (Soi chất liệu & kỹ thuật): Phóng đại 3.2x vào 11 vòng đồng tâm cách nhau 0,2 mm ở đốc kiếm, mạng quả trám giàu thiếc trên lưỡi và 8 chữ Điểu Triện khảm vàng.",
        "Bước 3 (Đọc minh văn & đối sánh thời đại): Lý giải vì sao kiếm của Việt Vương Câu Tiễn lại xuất hiện trong mộ quý tộc nước Sở (do hôn nhân ngoại giao hoặc chiến lợi phẩm sau khi Sở diệt Việt năm 306 TCN)."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Admire the untarnished golden luster and balanced combat proportions (55.7 cm, 875 g) of China's foremost ancient sword.",
        "Step 2 (Material & Metallurgical Inspection): Magnify to 3.2x on the 11 concentric 0.2 mm pommel rings, tin-rich blade lozenges, and eight gold Bird-Script characters.",
        "Step 3 (Inscriptions & Historical Context): Consider how King Goujian's blade entered a Chu noble's tomb—either as a royal dowry gift or war trophy after Chu annexed Yue in 306 BCE."
      ]
    },
    {
      slug: "tan-lang-dong-xa-ma-so-2",
      titleVi: "Tần Lăng Đồng Xa Mã Số 2 (An Xa) — Đỉnh Cao Cơ Khí Nhà Tần",
      titleEn: "Qin Mausoleum Bronze Chariot and Horses No. 2 (An Ju) — Qin Dynasty",
      titleZh: "秦始皇帝陵二号铜车马（安车）— 秦代（约公元前210年）",
      tombstone: {
        dynasty: "Tần (~210 TCN, Hố chôn phía Tây lăng Tần Thủy Hoàng, Lâm Đồng, Tây An)",
        medium: "Đồng thanh đúc ghép 3.462 linh kiện, khảm vàng 7 kg, bạc 7 kg và vẽ màu khoáng",
        dimensions: "Dài 317 cm × Cao 106,2 cm (tỷ lệ 1:2 so với ngự xa thật); Nặng 1.241 kg",
        museum: "Bảo tàng Di chỉ Lăng Tần Thủy Hoàng (Emperor Qinshihuang's Mausoleum Site Museum, Xi'an)"
      },
      mineralPigmentsOrAlloy: [
        {
          nameVi: "3.462 linh kiện Đồng thanh chuẩn hóa kèm 14 kg Vàng – Bạc khảm dây cương",
          nameEn: "3,462 Standardized Bronze Components with 14 kg Gold and Silver Harness Fittings",
          scientificNoteVi: "Cỗ xe lắp ghép từ 3.462 chi tiết cơ khí (1.742 chi tiết đồng, 737 chi tiết vàng, 983 chi tiết bạc) áp dụng đủ các công nghệ đúc, rèn, hàn, tán đinh, ren vít và khớp bản lề hoạt động trơn tru. Độ tinh xảo cơ khí khiến cổ vật được mệnh danh 'Vương miện đồ đồng thanh'.",
          scientificNoteEn: "Assembled from 3,462 mechanical parts (1,742 bronze, 737 gold, 983 silver), the chariot integrates casting, forging, soldering, riveting, threaded fasteners, and working hinges—earning its title 'Crown of Ancient Bronzes'."
        },
        {
          nameVi: "Sắc tố khoáng màu trắng, Chu sa (HgS) và Lam Tần / Hán Lam (BaCuSi4O10)",
          nameEn: "Mineral White, Cinnabar (HgS), and Han/Qin Blue (BaCuSi4O10)",
          scientificNoteVi: "Thân bốn con ngựa sơn trắng sữa, mui xe và khoang thùng vẽ hoa văn rồng phượng mây cuộn bằng chu sa, thạch thanh và sắc tố nhân tạo Barium đồng silicat (Tần Lam) do thợ hóa học thời Tần tổng hợp.",
          scientificNoteEn: "All four horses were painted creamy white, while the canopy and carriage box bear dragon-and-cloud scrolls in cinnabar, azurite, and synthetic barium copper silicate (Chinese Blue) engineered by Qin chemists."
        }
      ],
      sealsAndInscriptions: [
        {
          sealZh: "《史记·秦始皇本纪》：辒辌车（可卧可坐、有窗可闭之御用安车）",
          pinyin: "Shiji · Qin Shihuang Benji: Wenliang che (imperial convertible-window resting carriage)",
          translationVi: "Sử Ký Tư Mã Thiên chép Tần Thủy Hoàng đi tuần du bằng cỗ Ôn Lương xa (An xa) có cửa sổ đóng mở điều chỉnh gió mát, được mô phỏng chuẩn tỷ lệ 1:2 ở Đồng Xa Mã số 2.",
          translationEn: "Sima Qian's Shiji describes Qin Shi Huang's imperial Wenliang resting carriage with adjustable ventilation shutters, faithfully reproduced at 1:2 scale in Bronze Chariot No. 2."
        },
        {
          sealZh: "安车左 / 御府（刻于车构件内侧之秦代物勒工名编号）",
          pinyin: "Anju zuo / Yufu (Qin 'workman-name' standardization stamps)",
          translationVi: "Các ký hiệu Tiểu Triện khắc trên mặt trong nhiều chi tiết xe tuân thủ luật 'Vật lặc công danh' thời Tần nhằm kiểm soát chất lượng từng xưởng chế tạo và lắp ráp.",
          translationEn: "Small Seal inspection stamps incised inside carriage components enforce Qin's 'engrave the artisan's name' quality-control statutes across foundry teams."
        }
      ],
      zoomHotspots: [
        {
          xPct: 68,
          yPct: 30,
          titleVi: "Mui xe mai rùa dày 1–4 mm đúc liền khối trên diện tích 2,3 m2",
          titleEn: "Single-Pour Tortoiseshell Canopy (1–4 mm Thick across 2.3 m2)",
          detailVi: "Tấm mui cong hình mai rùa rộng 2,3 m2 nhưng chỉ dày 1 đến 4 mm, được đúc liền một khối duy nhất không mối hàn mà vẫn chịu tải ổn định suốt hai nghìn năm. Phóng đại 3.2x mặt ngoài mui xe thấy hoa văn mây cuộn và rồng phượng vẽ bằng chu sa, lam Tần còn lưu rõ đường nét tỉ mỉ.",
          detailEn: "The curved 2.3-square-meter tortoiseshell canopy measures just 1 to 4 mm thick yet was cast in a single weld-free pour. At 3.2x magnification, cinnabar and synthetic Chinese Blue cloud-dragon scrolls remain legible across its surface."
        },
        {
          xPct: 66,
          yPct: 54,
          titleVi: "Cửa sổ kéo trơn ba mặt và bản lề cửa hậu hoạt động hoàn hảo",
          titleEn: "Three-Side Sliding Lattice Windows and Working Rear Hinges",
          detailVi: "Thùng xe An xa gồm hai khoang trước – sau; khoang chủ nhân có cửa sổ đục lỗ thưa dạng lưới hình thoi ở cả ba phía có thể kéo trượt đóng mở linh hoạt để ngắm cảnh từ trong ra ngoài mà bên ngoài khó nhìn vào. Cửa sau mở bằng bản lề đồng xoay trơn kèm then cài tự khóa cơ học.",
          detailEn: "The imperial cabin features sliding diamond-lattice bronze windows on three sides, allowing ventilation and outward viewing while shielding the passenger from outside sight. The rear door swings smoothly on cast bronze hinges fitted with a mechanical latch."
        },
        {
          xPct: 26,
          yPct: 54,
          titleVi: "Bộ dây cương 84 mắt xích vàng bạc đúc lồng (Hợp hoàn liên)",
          titleEn: "84-Link Interlocking Gold-and-Silver Bridle Chains",
          detailVi: "Dây cương bốn ngựa không dùng dây da dễ mục mà chế hoàn toàn từ các ống vàng và bạc nối khớp linh hoạt bằng chốt nhỏ, cho phép uốn cong mềm như dây da thật. Ngoài ra, bộ yên ách cổ ngựa (Hộ hạng) đã phân bổ lực kéo xuống ức thay vì chèn ép khí quản — giải pháp công thái học tiên tiến vượt trội xe ngựa cổ phương Tây.",
          detailEn: "Horse reins and traces consist of articulated gold and silver tubes linked by miniature pins that flex like leather. Crucially, the yoke-and-breaststrap harness distributes pulling force across the horses' chests rather than choking their windpipes—far ahead of contemporaneous Western throat-girth harnesses."
        },
        {
          xPct: 54,
          yPct: 74,
          titleVi: "Bánh xe 30 nan hoa và trục đồng chịu lực chuẩn hóa",
          titleEn: "30-Spoke Dished Wheels and Standardized Bronze Axle",
          detailVi: "Hai bánh xe đường kính 59 cm gồm đúng 30 nan hoa vót thon cắm nghiêng nhẹ tạo độ khum (dished wheel) giúp triệt tiêu lực đẩy ngang khi cỗ xe rẽ gấp ở tốc độ cao. Ngỗng trục và chốt khóa bánh đúc khớp khít với sai số cơ khí dưới 0,5 mm, chứng thực hệ thống đo lường tiêu chuẩn hóa 'Xa đồng quỹ' của nhà Tần.",
          detailEn: "Both 59 cm wheels feature 30 tapered spokes set at a subtle dish angle to absorb lateral shear during high-speed turns. Axle hubs and linchpins mate within 0.5 mm tolerance, physically confirming Qin Shi Huang's empire-wide 'standardized axle gauge' decree."
        }
      ],
      threeStepLookVi: [
        "Bước 1 (Tầm nhìn tổng thể): Quan sát cỗ tứ mã An xa dài 3,17 mét tỷ lệ chuẩn 1:2 tái hiện chân thực đoàn ngự xa tuần du của Tần Thủy Hoàng.",
        "Bước 2 (Soi chất liệu & cơ khí): Phóng đại 3.2x vào mui đúc mỏng 1–4 mm, cửa sổ kéo lưới thoi, dây cương 84 mắt vàng bạc và bánh xe 30 nan hoa có độ khum cơ học.",
        "Bước 3 (Đọc sử liệu & đối sánh thời đại): Đối chiếu cỗ An xa với ghi chép về Ôn Lương xa trong Sử Ký và chính sách thống nhất 'Xa đồng quỹ' năm 221 TCN."
      ],
      threeStepLookEn: [
        "Step 1 (Macroscopic Overview): Examine the 3.17-meter half-scale four-horse imperial carriage recreating Qin Shi Huang's touring equipage.",
        "Step 2 (Material & Mechanical Inspection): Magnify to 3.2x on the 1–4 mm cast canopy, sliding lattice shutters, gold-silver chain bridles, and dished 30-spoke wheels.",
        "Step 3 (Texts & Historical Context): Cross-reference the carriage with the Wenliang resting chariot in Sima Qian's Shiji and the 221 BCE axle-standardization decree."
      ]
    }
  ];

  window.CCE_V12_HOTSPOTS = {
    paintings15: PAINTINGS_HOTSPOTS_15,
    treasures15: TREASURES_HOTSPOTS_15
  };
})();
