// ============================================================================
// PROMPT 3 PART 1: COMPLETE 3-LAYER ACADEMIC DEPTH FOR ALL 25 MONOGRAPHS
// Covers every remaining treatise in Monographs Part 1/2, Expansion Batch 2026,
// & Forbidden City 3D + full EN parity hooks into window.CCE_ARTICLES_EN.
// ============================================================================

(function () {
  "use strict";

  const PQ = (sourceZh, sourceVi, sourceEn, originalZh, pinyin, hanViet, meaningVi, meaningEn) => ({
    source: `${sourceVi} (${sourceZh})`,
    sourceZh,
    sourceVi,
    sourceEn: `${sourceEn} (${sourceZh})`,
    zh: originalZh,
    quoteZh: originalZh,
    pinyin,
    hanViet,
    translationVi: meaningVi,
    translationEn: meaningEn
  });

  const BATCH_3_ENRICHMENT = {
    "forbidden-city-3d-dissection": {
      keyTakeaways: [
        "Vu Trác Vân (1973) kiểm kê chính xác 8.707 gian thực tế trong Tử Cấm Thành (tổng diện tích 724.250 m²), giải ảo truyền thuyết '9.999,5 gian'.",
        "Khả năng đứng vững qua hơn 200 trận động đất (gồm trận M7.8 năm 1679) nhờ cột gỗ Kim ti Nam mộc đặt rời trên đá tảng + 15 lớp móng gạch Kim chuyên + hệ Đấu củng đàn hồi.",
        "So với Bắc Kinh khép kín sân đá 30.000 m² không bóng cây, Đại Nội Huế (1805–1833) mở hệ mái 'Trùng thiềm điệp ốc' thông gió nhiệt đới gắn Hồ Thái Dịch & Núi Ngự Bình."
      ],
      keyTakeawaysEn: [
        "Architectural survey by Yu Zhuoyun (1973) verified 8,707 actual bays across 724,250 m², refuting the 9,999.5-bay myth.",
        "Seismic resilience across 200+ earthquakes relies on friction-sliding nanmu pillars over plinths, 15 stratified courtyard brick courses, and interlocking Dougong brackets.",
        "Contrast with Hue Imperial City (1805–1833): twin-roof monsoon ventilation ('Trung thiem diep oc'), ironwood columns, and shaded Thai Dich Lake."
      ],
      primarySources: [
        PQ(
          "《考工记 · 匠人》",
          "Chu Lễ · Khảo Công Ký",
          "Rites of Zhou — Kaogongji",
          "匠人营国，方九里，旁三门。左祖右社，面朝后市。",
          "Jiàngrén yíng guó, fāng jiǔ lǐ, páng sān mén. Zuǒ zǔ yòu shè, miàn cháo hòu shì.",
          "Tượng nhân doanh quốc, phương cửu lý, bàng tam môn. Tả tổ hữu xã, diện triều hậu thị.",
          "Thợ dựng kinh đô vuông chín dặm, mỗi mặt ba cổng. Bên trái miếu Thái Miếu, bên phải đàn Xã Tắc; phía trước thiết triều, phía sau họp chợ.",
          "Master builders lay out a royal capital nine li square with three gates per side: ancestral temple left, altar of soil right, audience court forward, markets behind."
        )
      ],
      additionalReferences: [
        { author: "Yu, Zhuoyun (Ed.)", year: "1984", title: "Palaces of the Forbidden City", publisher: "Viking Press / Palace Museum" },
        { author: "Phan, Thanh Hải", year: "2022", title: "Kiến trúc Cung đình Huế trong Không gian Đô thị Đông Á", publisher: "NXB Thuận Hóa" }
      ]
    },
    "chinese-classical-vernacular-literature": {
      keyTakeaways: [
        "Bốn trụ cột Văn hiến Hoa Hạ phát triển theo chu kỳ thể tài: Kinh Thi (Tiên Tần) → Phú Hán → Thơ Đường → Từ Tống → Tạp kịch Nguyên → Tiểu thuyết Minh–Thanh.",
        "Sự bùng nổ tiểu thuyết Bạch thoại chương hồi (Tứ đại Danh tác) gắn liền với kỹ nghệ in khắc bản gỗ và tầng lớp thị dân Giang Nam.",
        "Ảnh hưởng trực tiếp tới Truyền kỳ mạn lục, Truyện Kiều (Nguyễn Du tiếp biến cốt truyện Thanh Tâm Tài Nhân sang Lục bát) và Văn học Trung đại Việt Nam."
      ],
      keyTakeawaysEn: [
        "Literary dynasties shifted across distinct canonical forms: Shijing Odes -> Han Rhapsody -> Tang Regulated Verse -> Song Ci -> Yuan Drama -> Ming–Qing Vernacular Novels.",
        "Rise of vernacular chapter novels grew out of woodblock print commerce and Jiangnan urban readership.",
        "Deeply shaped Vietnamese classical prose and Nôm verse masterpieces including Nguyen Du's Tale of Kieu."
      ],
      primarySources: [
        PQ(
          "《诗大序》",
          "Mao Thi Đại Tự",
          "Great Preface to the Book of Songs",
          "诗者，志之所之也，在心为志，发言为诗。",
          "Shī zhě, zhì zhī suǒ zhī yě, zài xīn wéi zhì, fāyán wéi shī.",
          "Thi giả, chí chi sở chi dã, tại tâm vi chí, phát ngôn vi thi.",
          "Thơ là nơi chí hướng đi tới: ở trong lòng gọi là chí, phát ra thành lời gọi là thơ.",
          "Poetry is where the intent of the heart goes: stored within the mind it is intent; expressed in words it becomes poetry."
        )
      ],
      additionalSections: [
        {
          heading: "Lớp 2 · Ma trận Tiến hóa Thể tài Văn học qua các Triều đại",
          content: "Mỗi triều đại lớn không chỉ lặp lại di sản cũ mà mở một thể văn mới gắn với tầng lớp sáng tạo (Tư sĩ, Hàn lâm, Thị dân). Sự chuyển từ Văn ngôn cô đọng sang Bạch thoại đại chúng đã đặt nền cho tiếng Hoa hiện đại sau Ngũ Tứ 1919."
        }
      ],
      sinoVietnameseComparison: "Việt Nam tiếp nhận niêm luật Thất ngôn Bát cú Đường luật rồi Việt hóa thành Hàn luật – Đường luật Chữ Nôm (Nguyễn Trãi, Hồ Xuân Hương, Bà Huyện Thanh Quan), đồng thời sáng tạo thể Lục bát 6–8 thuần Việt nâng tầm nghệ thuật tự sự nhân bản.",
      additionalReferences: [
        { author: "Owen, S.", year: "1996", title: "An Anthology of Chinese Literature: Beginnings to 1911", publisher: "W. W. Norton" },
        { author: "National Library of China", year: "2024", title: "Zhonghua Guji Baoku (Digital Ancient Books Archive)", publisher: "NLC Beijing" }
      ]
    },
    "chinese-eight-cuisines-tea-culture": {
      keyTakeaways: [
        "Bát Đại Thái Hệ (Lỗ, Xuyên, Việt, Tô, Mân, Chiết, Tương, Huy) hình thành từ khác biệt thủy thổ – khí hậu và triết lý 'Ngũ vị điều hòa'.",
        "Lục Đại Trà Loại (Lục, Bạch, Hoàng, Thanh/Ô Long, Hồng, Hắc/Phổ Nhĩ) được phân loại dựa trên mức độ oxy hóa men lá trà chứ không phải giống cây riêng.",
        "Văn hóa bàn tiệc & Trà đạo đồng thời giữ vai trò nghi thức thiết lập 'Thủ tín' (Xin) và quan hệ B2B tại Trung Quốc."
      ],
      keyTakeawaysEn: [
        "China's Eight Culinary Traditions balance regional climates with the Five-Flavor harmony philosophy ('Yishi Tongyuan').",
        "The Six Tea Categories differ primarily by oxidation percentage (0% green to post-fermented Pu-erh) rather than plant species.",
        "Banquet seating etiquette and Kungfu Tea pouring serve as non-verbal trust gauges in modern business."
      ],
      primarySources: [
        PQ(
          "《吕氏春秋 · 本味》",
          "Lữ Thị Xuân Thu · Bản Vị",
          "Master Lü's Spring and Autumn Annals",
          "调和之事，必以甘酸苦辛咸，先后多少，其齐甚微。",
          "Tiáohé zhī shì, bì yǐ gān suān kǔ xīn xián, xiānhòu duōshǎo, qí jì shén wēi.",
          "Điều hòa chi sự, tất dĩ cam toan khổ tân hàm, tiên hậu đa thiểu, kỳ tề thậm vi.",
          "Việc điều hòa hương vị ắt phải lấy ngọt–chua–đắng–cay–mặn phối trước sau nhiều ít tinh vi.",
          "True culinary harmony balances sweet, sour, bitter, pungent, and salty in subtle sequence and proportion."
        )
      ],
      sinoVietnameseComparison: "Văn hóa trà Việt Nam (trà sen Hồ Tây, trà Shan Tuyết vùng cao, ấm tích dân dã) có cùng gốc ẩm thực thực vật nhiệt đới với Hoa Nam nhưng thiên về vị chát dịu thanh nhiệt, ít gia vị hồi quế đậm như Xuyên–Tương.",
      additionalReferences: [
        { author: "Anderson, E. N.", year: "1988", title: "The Food of China", publisher: "Yale University Press" },
        { author: "Palace Museum / Tea Museum Hangzhou", year: "2023", title: "History of Chinese Six Tea Classifications", publisher: "China Tea Museum" }
      ]
    },
    "chinese-hanfu-qipao-attire-history": {
      keyTakeaways: [
        "Hán phục truyền thống vận hành quanh 4 chuẩn cốt lõi: Giao lĩnh Hữu nhậm (vạt trái đè lên phải — tránh 'Tả nhậm'), hệ đai dây thay khuy, tay áo rộng và Thâm y liền thân.",
        "Sườn xám (Qipao) hiện đại là sản phẩm giao thoa Thượng Hải thập niên 1920–1940 giữa áo trường bào Mãn Châu (Kỳ bào) và cắt may chiết eo Tây phương.",
        "Phong trào Quốc triều (Guochao) đưa thẩm mỹ Hán phục – Mã diện quần (马面裙) trở thành ngành công nghiệp hàng chục tỷ Nhân dân tệ của Gen Z."
      ],
      keyTakeawaysEn: [
        "Traditional Hanfu relies on crossed right-lapel closures ('Youren'), sash ties, voluminous sleeves, and cosmological sleeve-hem symbolism.",
        "Modern Qipao emerged in 1920s–1940s Shanghai by tailoring Manchu banner robes with Western waist-contouring darts.",
        "Gen-Z Guochao fashion revived Ming-era Horse-Face Skirts (Mamianqun) as everyday contemporary heritage apparel."
      ],
      primarySources: [
        PQ(
          "《礼记 · 深衣》",
          "Lễ Ký · Thâm Y",
          "Book of Rites — Shenyi Chapter",
          "古者深衣，盖有制度，以应规矩绳权衡。",
          "Gǔ zhě shēnyī, gài yǒu zhìdù, yǐ yìng guījǔ shéng quánhéng.",
          "Cổ giả thâm y, cái hữu chế độ, dĩ ứng quy củ thằng quyền hành.",
          "Áo Thâm y đời xưa đều có phép tắc kích thước rõ ràng để ứng với compa, thước vuông, dây mực và cán cân.",
          "The ancient Deep Robe obeyed strict tailoring ratios symbolizing compass circle, carpenter square, plumb line, and balance scale."
        )
      ],
      sinoVietnameseComparison: "Áo Giao Lĩnh thời Lý–Trần–Hậu Lê và Áo Tấc / Nhật Bình triều Nguyễn giữ chuẩn 'Hữu nhậm' đồng văn Đông Á nhưng rút gọn tà xẻ thoáng để phù hợp khí hậu nóng ẩm Việt Nam, tiến tới sáng tạo Áo Dài hiện đại.",
      additionalReferences: [
        { author: "Shen, Congwen (沈从文)", year: "2011", title: "Zhongguo Gudai Fushi Yanjiu (Researches on Ancient Chinese Costume)", publisher: "SDX Joint Publishing" },
        { author: "Finnane, A.", year: "2008", title: "Changing Clothes in China: Fashion, History, Nation", publisher: "Columbia University Press" }
      ]
    },
    "chinese-ceramics-porcelain-jade-heritage": {
      keyTakeaways: [
        "Từ men gốm xám Nam Thanh Từ thời Hán–Lục triều tới Ngũ Đại Danh Diêu thời Tống (Nhữ, Quan, Ca, Định, Quân), Trung Hoa làm chủ công nghệ lò khử nhiệt >1.300°C sớm hơn châu Âu gần 700 năm.",
        "Gốm Hoa Lam Cảnh Đức Trấn dùng quặng coban nhập từ Ba Tư qua Hải lộ Tơ lụa để tạo kỳ tích xuất khẩu toàn cầu.",
        "Ngọc khí văn hóa Lương Chử (Ngọc Tông 玉琮) biến chất liệu khoáng thạch thành biểu tượng đạo đức quân tử ('Ngọc hữu ngũ đức')."
      ],
      keyTakeawaysEn: [
        "Five Great Song Kilns (Ru, Guan, Ge, Ding, Jun) achieved luminous reduction-fired stoneware centuries ahead of European hard-paste porcelain.",
        "Jingdezhen blue-and-white ware fused Persian imported cobalt oxides ('Sumaliqing') with local white kaolin clay.",
        "Prehistoric Liangzhu Jade Cong evolved into Confucian moral symbolism ('Five Virtues of Jade')."
      ],
      primarySources: [
        PQ(
          "《说文解字 · 玉部》",
          "Thuyết Văn Giải Tự (Hứa Thận)",
          "Shuowen Jiezi — Jade Radical",
          "玉，石之美，有五德：润泽以温，仁之方也。",
          "Yù, shí zhī měi, yǒu wǔ dé: rùnzé yǐ wēn, rén zhī fāng yě.",
          "Ngọc, thạch chi mỹ, hữu ngũ đức: nhuận trạch dĩ ôn, nhân chi phương dã.",
          "Ngọc là tinh hoa của đá, có năm đức tính: bóng mịn mà ấm áp, ấy là dáng vẻ của lòng Nhân.",
          "Jade is the finest essence of stone, embodying five virtues: luminous warmth symbolizing humaneness."
        )
      ],
      sinoVietnameseComparison: "Thế kỷ XV–XVI, dòng gốm Chu Đậu (Hải Dương) và Bát Tràng hòa nhịp trực tiếp với thương mại gốm Hoa Lam Châu Á, thậm chí cạnh tranh xuất khẩu sang Trung Đông và Nhật Bản bằng họa tiết hoa sen–châu thổ thuần Việt.",
      additionalReferences: [
        { author: "Kerr, R., & Wood, N.", year: "2004", title: "Science and Civilisation in China, Vol. 5 Part 12: Ceramic Technology", publisher: "Cambridge University Press" },
        { author: "Palace Museum", year: "2023", title: "Five Great Kilns of the Song Dynasty Monograph Series", publisher: "Forbidden City Press" }
      ]
    },
    "chinese-folk-religion-syncretism-mythology": {
      keyTakeaways: [
        "Mô hình 'Tam giáo đồng nguyên' (Nho – Đạo – Phật) ở cấp độ dân gian vận hành thực dụng: cúng Tổ tiên, cầu Tài Lộc (Thần Tài/Quan Công), cầu Bình an (Ma Tổ/Quán Âm).",
        "Thần thoại Hồng Hoang (Bàn Cổ, Nữ Oa, Phục Hy, Thần Nông) phản ánh ký ức chế ngự lũ lụt sông Hoàng Hà và khai phá nông nghiệp.",
        "Tục thờ Ma Tổ (Thiên Hậu Thánh Mẫu) kết nối trực tiếp cộng đồng người Hoa ven biển từ Phúc Kiến–Quảng Đông tới Chợ Lớn, Hội An, Phan Thiết."
      ],
      keyTakeawaysEn: [
        "Chinese folk belief pragmatically weaves Confucian ancestral piety, Daoist health/rituals, and Buddhist compassion ('Sanjiao Heyi').",
        "Mythological founders (Fuxi, Shennong, Yu the Great) encode collective memory of river flood control and millet agriculture.",
        "Mazu (Tianhou) worship historically bound coastal Fujian/Guangdong sailors to Vietnamese port communities like Hoi An and Cho Lon."
      ],
      primarySources: [
        PQ(
          "《论语 · 为政》",
          "Luận Ngữ · Vi Chính",
          "Analects of Confucius",
          "慎终追远，民德归厚矣。",
          "Shèn zhōng zhuī yuǎn, mín dé guī hòu yǐ.",
          "Thận chung truy viễn, dân đức quy hậu hĩ.",
          "Cẩn trọng việc tang lễ cuối đời và tưởng nhớ tổ tiên xa xưa, ắt đức tính của dân chúng sẽ trở nên thuần hậu.",
          "Conduct funeral rites with reverence and honor distant ancestors, and public virtue grows thick and steadfast."
        )
      ],
      sinoVietnameseComparison: "Việt Nam giữ trục thờ Tổ tiên nhưng kết hợp Tín ngưỡng Thờ Mẫu (Tam Phủ – Tứ Phủ UNESCO) và thờ Anh hùng dựng nước (Thánh Gióng, Trần Hưng Đạo) tại hệ thống Đình–Đền bản địa khác biệt với Thành Hoàng Trung Hoa.",
      additionalReferences: [
        { author: "Dean, K.", year: "1993", title: "Taoist Ritual and Popular Cults of Southeast China", publisher: "Princeton University Press" },
        { author: "Shah, P. / CHGIS", year: "2023", title: "Spatial Distribution of Mazu Temples Across Maritime East Asia", publisher: "Harvard Fairbank Center" }
      ]
    },
    "chinese-unesco-intangible-heritage-opera": {
      keyTakeaways: [
        "Côn Khúc (Khuất Khúc Giang Nam thế kỷ XVI) được mệnh danh 'Bách hý chi tổ' (Tổ của trăm tuồng kịch), là di sản UNESCO kiệt tác đầu bảng.",
        "Kinh Kịch (hội tụ 4 đoàn Huy Ban tiến Kinh thời Càn Long 1790) kết hợp Hát (Xướng) – Thoại (Niệm) – Vũ (Tác) – Võ (Đả) với 4 vai Sinh–Đán–Tịnh–Sửu.",
        "Trung Quốc là một trong các quốc gia sở hữu nhiều Di sản Văn hóa Phi vật thể UNESCO nhất thế giới (43+ hạng mục)."
      ],
      keyTakeawaysEn: [
        "Kunqu Opera ('Mother of a Hundred Operas', 16th-century Jiangnan) leads China's 43+ UNESCO Intangible Cultural Heritage honors.",
        "Peking Opera crystallized after 1790 when Anhui troupes brought southern melodies into Beijing court stages.",
        "Characterized by four holistic performance disciplines (Song, Speech, Dance-Acting, Martial Acrobatics) and stylized face paint."
      ],
      primarySources: [
        PQ(
          "汤显祖 《牡丹亭题词》",
          "Thang Hiển Tổ · Mẫu Đơn Đình Đề Từ",
          "Tang Xianzu — Preface to Peony Pavilion",
          "情不知所起，一往而深。",
          "Qíng bùzhī suǒ qǐ, yī wǎng ér shēn.",
          "Tình bất tri sở khởi, nhất vãng nhi thâm.",
          "Tình cảm chẳng biết khởi nguồn tự lúc nào, một khi đã dâng trào thì sâu thẳm khôn cùng.",
          "Love arises one knows not where; once set in motion, it deepens beyond measure."
        )
      ],
      sinoVietnameseComparison: "Hát Bội / Tuồng cung đình triều Nguyễn tại Việt Nam chia sẻ quy ước ước lệ mặt nạ đỏ (trung thần) – mặt trắng (nịnh thần) với Hý khúc Đông Á nhưng dùng bộ trống Chầu và điệu Nam/Khách thuần Việt.",
      additionalReferences: [
        { author: "UNESCO Intangible Cultural Heritage", year: "2024", title: "Kunqu Opera & Peking Opera Nomination Files", publisher: "UNESCO" },
        { author: "Mackerras, C.", year: "1997", title: "Peking Opera", publisher: "Oxford University Press" }
      ]
    },
    "chinese-education-academy-study-abroad": {
      keyTakeaways: [
        "Từ Tứ Đại Thư Viện Tống triều (Bạch Lộc Động, Nhạc Lộc, Ứng Thiên, Tung Dương) với mô hình 'Hội giảng tự do' tới kỳ thi Gaokao quy mô hàng chục triệu thí sinh ngày nay.",
        "Giáo dục đại học hiện đại đầu tư mạnh cụm đại học 'Song Nhất Lưu' (Thanh Hoa, Bắc Đại, C9 League) dẫn đầu số công bố AI và vật liệu mới.",
        "Lộ trình du học từ Việt Nam chú trọng học bổng Chính phủ Trung Quốc (CSC Type A/B), học bổng Khổng Tử (CIS) và trường ĐH Quảng Tây/Vân Nam/Quảng Đông."
      ],
      keyTakeawaysEn: [
        "From Song Dynasty 'Four Great Academies' (Yuelu, White Deer Grotto) featuring open scholarly debates to today's Gaokao system.",
        "China's 'Double First-Class' and C9 League universities command top global research output in AI, materials, and engineering.",
        "Vietnamese students actively leverage CSC (Type A/B), CIS scholarships, and border-province university hubs."
      ],
      primarySources: [
        PQ(
          "朱熹 《白鹿洞书院揭示》",
          "Chu Hy · Bạch Lộc Động Thư Viện Yết Thị",
          "Zhu Xi — Articles of White Deer Grotto Academy",
          "博学之，审问之，慎思之，明辨之，笃行之。",
          "Bóxué zhī, shěnwèn zhī, shènsī zhī, míngbiàn zhī, dǔxíng zhī.",
          "Bác học chi, thẩm vấn chi, thận tư chi, minh biện chi, đốc hành chi.",
          "Học rộng ra, hỏi cặn kẽ, suy nghĩ cẩn trọng, phân biệt sáng suốt và thực hành bền bỉ.",
          "Study broadly, inquire closely, reflect carefully, discern clearly, and practice earnestly."
        )
      ],
      sinoVietnameseComparison: "Mô hình Thư viện (Shuyuan) được Việt Nam tiếp nhận kết hợp với Văn Miếu các tỉnh và trường tư thục của những bậc danh nho như Chu Văn An, Nguyễn Bỉnh Khiêm (Bạch Vân Am), Lê Quý Đôn.",
      additionalReferences: [
        { author: "De Bary, W. T.", year: "1989", title: "Neo-Confucian Education: The Formative Stage", publisher: "University of California Press" },
        { author: "China Scholarship Council (CSC)", year: "2025", title: "Study in China Official Bilateral Scholarship Guidelines", publisher: "CSC Beijing" }
      ]
    },
    "merchant-ethics-xin-yi-li": {
      keyTakeaways: [
        "Trục đạo đức Nho thương (儒商) lấy 'Tín (信) – Nghĩa (义) – Lợi (利)' làm thứ tự bất di dịch: Nghĩa đi trước sinh Lợi lâu dài.",
        "Tấm bảng kim bài 'Đồng Nhân Đường' hay tinh thần 'Bán thăng cũng cân đủ' giúp thương hiệu Lão Tự Hiệu (老字号) sống sót hàng trăm năm không cần hợp đồng hiện đại.",
        "Trong đàm phán B2B đương đại, quy tắc này chuyển hóa thành cơ chế kiểm chứng pháp lý + bảo toàn thể diện ('Mianzi')."
      ],
      keyTakeawaysEn: [
        "Confucian merchant ethics prioritize Xin (Trust) and Yi (Righteousness) as the durable foundation for Li (Sustainable Profit).",
        "Multi-century 'Laozihao' houses survived political upheaval via uncompromising quality pledges.",
        "Contemporary B2B translates this tradition into rigorous contract clarity paired with mutual 'Mianzi' preservation."
      ],
      primarySources: [
        PQ(
          "《论语 · 里仁》",
          "Luận Ngữ · Lý Nhân",
          "Analects of Confucius — Li Ren",
          "君子喻于义，小人喻于利。",
          "Jūnzǐ yù yú yì, xiǎorén yù yú lì.",
          "Quân tử dụ ư nghĩa, tiểu nhân dụ ư lợi.",
          "Người quân tử am hiểu điều Nghĩa, kẻ tiểu nhân chỉ nhìn thấy cái Lợi trước mắt.",
          "The noble person understands righteousness; the petty person sees only immediate profit."
        )
      ],
      sinoVietnameseComparison: "Truyền thống thương nhân Việt Nam (Lương Văn Can — 'Thương đạo lấy chữ Tín làm đầu' đầu thế kỷ XX) và câu ca dao 'Mua danh ba vạn, bán danh ba đồng' có chung gốc triết lý Nho thương thực tiễn.",
      additionalReferences: [
        { author: "Yu, Yingshi (余英时)", year: "1987", title: "Zhongguo Jinshi Zongjiao Lunli yu Shangren Jingshen", publisher: "Linking Publishing" },
        { author: "Harvard Business Review China", year: "2024", title: "Trust Capital & Laozihao Longevity in East Asia", publisher: "HBR" }
      ]
    },
    "ten-merchant-guilds-huizhou-shanxi": {
      keyTakeaways: [
        "Thập Đại Thương Bang (Nổi bật nhất là Tấn Thương Sơn Tây & Huy Thương An Huy) kiểm soát mạch huyết kinh tế muối – trà – ngân phiếu từ thế kỷ XV đến đầu thế kỷ XX.",
        "Tấn Thương phát minh 'Phiếu hiệu' (票号 — Nhật Thăng Xương 1823 tại Bình Dao), tiền thân hệ thống ngân hàng liên tỉnh cho phép chuyển bạc xuyên đế chế bằng tờ hối phiếu bảo mật chữ chìm.",
        "Huy Thương tạo nên kiến trúc 'Mã Đầu Tường' trắng đen tại Hoàng Sơn và văn hóa vừa buôn bán vừa nuôi con đỗ Trạng nguyên ('Giả nhi hảo nho')."
      ],
      keyTakeawaysEn: [
        "China's Ten Great Merchant Guilds—led by Shanxi (Jinshang) and Anhui Huizhou (Huishang)—controlled salt, tea, and inter-regional finance from the 15th to 20th centuries.",
        "Shanxi merchants invented the 'Piaohao' remittance bank (Rishengchang, 1823) enabling empire-wide paper drafts secured by ciphered ink watermarks.",
        "Huizhou merchants balanced commerce with Confucian scholarship ('Jia er hao ru'), sculpting iconic Horse-Head Wall villages."
      ],
      primarySources: [
        PQ(
          "《清稗类钞 · 票号》",
          "Thanh Bại Loại Sao",
          "Qing Anecdotal Compendium",
          "日升昌以汇兑名天下，一纸可抵万金。",
          "Rìshēngchāng yǐ huìduì míng tiānxià, yī zhǐ kě dǐ wàn jīn.",
          "Nhật Thăng Xương dĩ hối đoái danh thiên hạ, nhất chỉ khả để vạn kim.",
          "Nhật Thăng Xương nổi danh thiên hạ về nghề hối đoái ngân phiếu, một tờ giấy đáng giá vạn lạng vàng.",
          "Rishengchang earned renown across the empire for remittance drafts—a single slip of paper backed ten thousand taels of gold."
        )
      ],
      sinoVietnameseComparison: "Cơ chế Hội quán Thương nhân (Quảng Đông, Triều Châu, Phúc Kiến, Hải Nam) ở Hội An, Phố Hiến và Chợ Lớn là nhánh nối dài trực tiếp của mạng lưới Bang hội bảo hộ đồng hương trên biển.",
      additionalReferences: [
        { author: "McDermott, J.", year: "2013", title: "The Making of a New Rural Order in South China", publisher: "Cambridge University Press" },
        { author: "UNESCO Pingyao Site", year: "2023", title: "Ancient City of Pingyao & Rishengchang Financial Museum Archive", publisher: "UNESCO" }
      ]
    },
    "maritime-merchants-fujian-guangdong": {
      keyTakeaways: [
        "Từ bến cảng Thích Đồng (Tuyền Châu thời Tống–Nguyên) tới Chế độ Một Cảng Quảng Châu ('Thập Tam Hàng' 1757–1842), thương nhân Mân–Việt xây dựng mạng lưới hải thương xuyên Thái Bình Dương.",
        "Khu vực Tam Giác Châu Giang cùng cộng đồng Hoa Kiều đóng vai trò 'cầu nối vốn, đơn hàng và kỹ năng OEM' đầu tiên khi Trung Quốc Đổi Mới Mở Cửa 1978.",
        "Nối trực tiếp tới sự hình thành trung tâm phần cứng Thâm Quyến – Đông Quản – Phật Sơn ngày nay."
      ],
      keyTakeawaysEn: [
        "From Song–Yuan Zaytun (Quanzhou) to the Canton Thirteen Factories (1757–1842), Fujian and Guangdong maritime guilds built Pacific-wide supply networks.",
        "Returned Overseas Chinese capital catalyzed Pearl River Delta's transformation after 1978 Open-Door reforms.",
        "Directly links heritage port culture to today's Shenzhen–Dongguan–Guangzhou manufacturing super-cluster."
      ],
      primarySources: [
        PQ(
          "《东西洋考》",
          "Đông Tây Dương Khảo (Trương Tiếp, 1617)",
          "Investigations of the Eastern and Western Oceans (1617)",
          "海者，闽人之田也。",
          "Hǎi zhě, Mǐnrén zhī tián yě.",
          "Hải giả, Mân nhân chi điền dã.",
          "Biển cả chính là ruộng cày của người dân đất Mân (Phúc Kiến).",
          "The ocean is the cultivated farmland of the Fujianese people."
        )
      ],
      sinoVietnameseComparison: "Thương cảng Hội An (Quảng Nam) và Vân Đồn (Quảng Ninh) thế kỷ XVI–XVII từng đón hàng trăm thuyền buôn Chương Châu – Tuyền Châu đến mua tơ lụa Đàng Trong, tiêu, trầm hương và gốm Chu Đậu.",
      additionalReferences: [
        { author: "Reid, A.", year: "1993", title: "Southeast Asia in the Age of Commerce, Vol. 2", publisher: "Yale University Press" },
        { author: "Van Dyke, P. A.", year: "2005", title: "The Canton Trade: Life and Enterprise on the China Coast", publisher: "Hong Kong University Press" }
      ]
    },
    "artisan-kilns-to-industrial-clusters": {
      keyTakeaways: [
        "Mô hình 'Một làng một sản phẩm' thời Minh–Thanh (Cảnh Đức Trấn làm sứ 72 công đoạn, Tô Châu dệt tơ, Phật Sơn đúc sắt) tiến hóa thành Cụm Công nghiệp chuyên môn hóa hiện đại ('Nhất huyện nhất phẩm').",
        "Tại Chiết Giang & Quảng Đông ngày nay: Nghĩa Ô (hàng tiêu dùng nhỏ), Đông Quản (linh kiện cơ khí–giày da), Cửu Giang/Phật Sơn (điện gia dụng), Hoa Cường Bắc (mạch điện tử hoàn chỉnh trong 48h).",
        "Hiểu 'Chuỗi công đoạn' giúp doanh nghiệp Việt tìm đúng thủ phủ OEM giá gốc tại nguồn."
      ],
      keyTakeawaysEn: [
        "Ming–Qing multi-stage artisan divisions (72-step Jingdezhen kilns, Foshan foundries) laid organizational DNA for China's modern 'One-Town, One-Product' clusters.",
        "Modern specialization spans Yiwu (small goods), Dongguan (tooling/components), Foshan (appliances/ceramics), and Shenzhen Huaqiangbei (48h electronics).",
        "Mapping heritage clusters helps Vietnamese buyers source directly at Tier-1 factory origins."
      ],
      primarySources: [
        PQ(
          "《天工开物 · 陶埏》",
          "Thiên Công Khai Vật (Tống Ứng Tinh, 1637)",
          "Tiangong Kaiwu — Ceramics (1637)",
          "共计一杯工力，过手七十二，方克成器。",
          "Gòngjì yī bēi gōnglì, guòshǒu qīshí'èr, fāng kè chéng qì.",
          "Cộng kế nhất bôi công lực, quá thủ thất thập nhị, phương khắc thành khí.",
          "Tính công sức làm ra một chiếc chén sứ thôi phải qua tay bảy mươi hai lượt thợ mới thành khí cụ hoàn chỉnh.",
          "To produce a single porcelain cup demands passing through seventy-two specialized artisan hands before completion."
        )
      ],
      sinoVietnameseComparison: "Việt Nam cũng có hệ thống làng nghề truyền thống chuyên sâu (gốm Bát Tràng, lụa Vạn Phúc, đồng Đại Bái) hiện đang liên kết chuyển đổi sang cụm công nghiệp phụ trợ khu vực Bắc Bộ và Đông Nam Bộ.",
      additionalReferences: [
        { author: "Gereffi, G.", year: "2009", title: "Development Models and Industrial Upgrading in China and Mexico", publisher: "European Sociological Review" },
        { author: "Song, Yingxing (trans. E-Tu Zen Sun)", year: "1966", title: "T'ien-Kung K'ai-Wu: Chinese Technology in the Seventeenth Century", publisher: "Pennsylvania State University Press" }
      ]
    },
    "han-viet-phonology-middle-chinese": {
      keyTakeaways: [
        "Âm Hán–Việt không phải tiếng Bắc Kinh hiện đại (Phổ thông thoại) mà bảo lưu hệ thống ngữ âm Trung Cổ thời Vãn Đường – Đầu Tống (thế kỷ IX–X, thời An Nam Đô Hộ Phủ).",
        "Nhiều âm cuối tắc /-p, -t, -k/ (như Nhập, Nhất, Bách) và thanh nhập bị rụng mất ở tiếng Bắc Kinh nhưng vẫn nguyên vẹn trong âm Hán–Việt (giúp người Việt học nhận diện chữ Hán cực nhanh nếu nắm quy luật chuyển âm!).",
        "Tránh bẫy 'Từ đồng hình khác nghĩa' (False Friends: như Thư điếm ≠ Hiệu thuốc, Thủ kỳ = Ký tên ≠ Thủ kỳ lạ)."
      ],
      keyTakeawaysEn: [
        "Sino-Vietnamese reading preserves Late Tang / Early Song Middle Chinese phonology (9th–10th c.) rather than modern Beijing Mandarin.",
        "Final stops (-p, -t, -k) lost in Mandarin remain vividly preserved in Vietnamese, giving Vietnamese learners a structural shortcut.",
        "Systematic awareness avoids 'False Friends' such as Thủ tục, Nhật ký, or Biện pháp shifts in daily business usage."
      ],
      primarySources: [
        PQ(
          "《切韵》 (601)",
          "Thiết Vận (Lục Pháp Ngôn, 601)",
          "Qieyun Rhyme Dictionary (601 CE)",
          "因论南北是非，古今通塞，欲更捃选精切。",
          "Yīn lùn nánběi shìfēi, gǔjīn tōngsè, yù gèng jǔn xuǎn jīngqiè.",
          "Nhân luận nam bắc thị phi, cổ kim thông tắc, dục cánh quân tuyển tinh thiết.",
          "Nhân bàn luận đúng sai âm đọc Nam–Bắc, thông–tắc xưa nay mà chọn lọc phép phiên thiết chuẩn xác.",
          "Debating northern versus southern standards across antiquity, we compile precise phonetic fanqie spellings."
        )
      ],
      sinoVietnameseComparison: "Cùng với tiếng Quảng Đông và tiếng Triều Tiên/Nhật cổ, âm Hán–Việt (và âm Tiền Hán–Việt cổ đời Hán như 'buồm, mùa, buồng') là bảo tàng sống giúp giới ngôn ngữ học thế giới tái dựng thanh điệu tiếng Hán thời Đường.",
      additionalReferences: [
        { author: "Nguyễn, Tài Cẩn", year: "2000", title: "Nguồn gốc và Quá trình Hình thành Cách đọc Hán–Việt", publisher: "NXB Đại học Quốc gia Hà Nội" },
        { author: "Pulleyblank, E. G.", year: "1991", title: "Lexicon of Reconstructed Pronunciation in Early Middle Chinese", publisher: "UBC Press" }
      ]
    },
    "envoy-poetry-bac-hanh-tap-luc": {
      keyTakeaways: [
        "Thơ đi sứ ('Sứ trình thi') là đỉnh cao ngoại giao trí tuệ: Nguyễn Trãi, Phùng Khắc Khoan, Lê Quý Đôn, Nguyễn Du dùng Đường luật xướng họa thuyết phục triều đình Minh–Thanh.",
        "Nguyễn Du trong *Bắc Hành Tạp Lục* (1813–1814) đi suốt Quảng Tây–Hồ Bắc–Bắc Kinh đã viết nên những áng thơ nhân bản cảm thông phận người yếu thế sâu sắc nhất Đông Á.",
        "Phùng Khắc Khoan (1597) xướng họa 30 bài Vạn Thọ Thánh Tiết cùng Triều Tiên sứ Lý Toái Quang tại Yên Kinh (Bắc Kinh), tạo dấu mốc giao lưu văn hiến Tam Quốc."
      ],
      keyTakeawaysEn: [
        "Vietnamese envoy poetry turned Classical Tang Regulated Verse into soft-power diplomacy at Ming and Qing courts.",
        "Nguyen Du's 'Bac Hanh Tap Luc' (1813–1814) across Guangxi, Hubei, and Beijing ranks among East Asia's deepest humanist travel poetry.",
        "Phung Khac Khoan's 1597 literary exchanges in Beijing with Korean envoy Yi Su-gwang forged historic trilateral East Asian dialogue."
      ],
      primarySources: [
        PQ(
          "阮攸 《北行杂录 · 太平卖歌者》",
          "Nguyễn Du · Bắc Hành Tạp Lục",
          "Nguyen Du — Miscellaneous Notes on a Journey North (1813)",
          "百年文字留青史，万古悲欢见白头。",
          "Bǎinián wénzì liú qīngshǐ, wàngǔ bēihuān jiàn báitóu.",
          "Bách niên văn tự lưu thanh sử, vạn cổ bi hoan kiến bạch đầu.",
          "Trăm năm văn tự còn ghi sử xanh; nỗi buồn vui muôn thuở hiện trên mái tóc bạc.",
          "Centuries of letters endure in green history; timeless joys and sorrows show upon white hair."
        )
      ],
      sinoVietnameseComparison: "Khẳng định tư thế tự chủ văn hiến 'Hữu văn hiến chi bang' của Đại Việt: học chuẩn kinh điển Hán tự để đối thoại bình đẳng về nhân phẩm và chủ quyền.",
      additionalReferences: [
        { author: "Nguyễn, Du (Dịch & Chú: Trương Chính)", year: "2015", title: "Bắc Hành Tạp Lục (Khảo dị & Chú giải)", publisher: "NXB Văn học" },
        { author: "Kelley, L. C.", year: "2005", title: "Beyond the Bronze Pillars: Envoy Poetry and the Sino-Vietnamese Relationship", publisher: "University of Hawai'i Press" }
      ]
    },
    "comparative-timber-architecture-dougong": {
      keyTakeaways: [
        "Đấu củng Trung Hoa ('Tọa đấu' + 'Củng') phát triển tầng cao (7–9 tầng mộng chồng lên nhau như ở Phật Quang Tự, Tử Cấm Thành) nhằm chịu sức nặng ngói lưu ly & lực động đất ngang.",
        "Kiến trúc Việt Nam chuyển hóa sang 'Kèo chồng rường giả thủ', 'Bẩy hiên' và kết cấu 'Trùng thiềm điệp ốc' thấp rộng thoáng gió để đối phó bão nhiệt đới và nóng ẩm.",
        "Cả hai truyền thống đều dùng 100% mộng gỗ ('Mão – Đấu' / 'Tùng – Bạch – Lim') không đinh sắt, thể hiện triết học 'Cương nhu tương tế'."
      ],
      keyTakeawaysEn: [
        "Northern Chinese 'Dougong' stacks up to 7–9 bracket tiers to cushion earthquakes and deep snow/glazed roof loads.",
        "Vietnamese imperial architecture favors 'Trong thiem diep oc' twin-roof frames and ironwood tie beams tuned against typhoons and monsoon humidity.",
        "Both traditions join timber cleanly via precision mortise-and-tenon joints ('0 iron nails')."
      ],
      primarySources: [
        PQ(
          "李诫 《营造法式》 (1103)",
          "Lý Giới · Doanh Tạo Pháp Thức (1103)",
          "Li Jie — State Building Standards (1103 CE)",
          "凡构屋之制，皆以材为祖，材有八等，度屋之大小因而用之。",
          "Fán gòuwū zhī zhì, jiē yǐ cái wéi zǔ, cái yǒu bā děng, dù wū zhī dàxiǎo yīn'ér yòng zhī.",
          "Phàm cấu ốc chi chế, giai dĩ tài vi tổ, tài hữu bát đẳng, độ ốc chi đại tiểu nhân nhi dụng chi.",
          "Phàm phép dựng nhà cửa đều lấy tiết diện thanh gỗ ('tài') làm chuẩn mực tổ; gỗ chia 8 bậc tùy quy mô công trình lớn nhỏ mà áp dụng.",
          "All timber construction obeys standardized modular timber grades ('cai'), divided into eight proportions scaled to hall grandeur."
        )
      ],
      sinoVietnameseComparison: "Minh họa hoàn hảo ngay tại cặp đối sánh Điện Thái Hòa (Bắc Kinh 1420) vs. Điện Thái Hòa (Huế 1805) và Đình làng Chu Quyến / Tây Đằng Việt Nam.",
      additionalReferences: [
        { author: "Liang, Sicheng (梁思成)", year: "1984", title: "A Pictorial History of Chinese Architecture", publisher: "MIT Press" },
        { author: "Trần, Lâm Biền", year: "2008", title: "Kiến trúc Đình làng Việt Nam", publisher: "NXB Văn hóa Thông tin" }
      ]
    },
    "imperial-academies-temple-of-literature": {
      keyTakeaways: [
        "Văn Miếu – Quốc Tử Giám Bắc Kinh và Văn Miếu – Quốc Tử Giám Hà Nội (lập 1070–1076) cùng giữ trục thờ Khổng Tử và dựng 82 tấm Bia Tiến sĩ tôn vinh hiền tài.",
        "Điểm khác biệt cốt lõi: Việt Nam chọn đề thi 'Văn sách' bám sát trị thủy, quốc phòng, sử Việt thay cho khuôn 'Bát cổ văn' 8 vế gò bó triều Minh–Thanh.",
        "82 Bia Tiến sĩ Hà Nội (1442–1779) được UNESCO công nhận Di sản Tư liệu Thế giới, khắc bất hủ câu: 'Hiền tài là nguyên khí của quốc gia' (Thân Nhân Trung)."
      ],
      keyTakeawaysEn: [
        "Both Beijing Guozijian and Hanoi Temple of Literature (founded 1070–1076) preserve historic ensembles of 82 Doctoral Steles.",
        "Unlike Ming–Qing rigid 8-legged essays ('Bagouwen'), Vietnamese exams retained practical statecraft essays ('Van sach') on flood dike control and history.",
        "Hanoi's 82 steles carry UNESCO Memory of the World recognition for Shen Nhan Trung's 1442 inscription."
      ],
      primarySources: [
        PQ(
          "申仁忠 《大宝三年壬戌科进士题名碑记》 (1484)",
          "Thân Nhân Trung · Văn bia Tiến sĩ 1484 (Văn Miếu Hà Nội)",
          "Than Nhan Trung — Hanoi Stele Inscription (1484)",
          "贤才乃国家之元气，元气盛则国势隆。",
          "Xiáncái nǎi guójiā zhī yuánqì, yuánqì shèng zé guóshì lóng.",
          "Hiền tài nãi quốc gia chi nguyên khí, nguyên khí thịnh tắc quốc thế long.",
          "Hiền tài là nguyên khí của quốc gia; nguyên khí thịnh thì thế nước mạnh mà hưng long.",
          "Talented and virtuous scholars are the vital life-force of the state; when vital force flourishes, the nation prospers."
        )
      ],
      sinoVietnameseComparison: "Văn Miếu Hà Nội không khép kín cổng đá uy quyền như Bắc Kinh mà đặt Khuê Văn Các soi bóng hồ Thiên Quang Tỉnh khoáng đạt ngay giữa lòng kinh đô.",
      additionalReferences: [
        { author: "UNESCO Memory of the World", year: "2010", title: "Stone Stele Records of Royal Examinations of the Le and Mac Dynasties (1442–1779)", publisher: "UNESCO" },
        { author: "Elman, B. A.", year: "2000", title: "A Cultural History of Civil Examinations in Late Imperial China", publisher: "University of California Press" }
      ]
    },
    "solar-terms-huangdi-neijing": {
      keyTakeaways: [
        "24 Tiết khí (nhân loại học UNESCO) phản ánh góc nghiêng mặt trời trên Hoàng Đạo mỗi 15°, làm kim chỉ nam cho cả nông nghiệp lẫn dưỡng sinh Đông y.",
        "Học thuyết Tử Ngọ Lưu Chú kết nối 12 kinh lạc với 12 canh giờ (Tý–Hợi): mỗi canh giờ khí huyết dồn mạnh vào 1 tạng phủ.",
        "Hoàng Đế Nội Kinh đặt nguyên tắc 'Xuân sinh, Hạ trưởng, Thu thu, Đông tàng' (Thuận theo 4 mùa để phòng bệnh trước khi phát)."
      ],
      keyTakeawaysEn: [
        "The 24 Solar Terms track every 15° of solar ecliptic longitude, synchronizing agricultural planting and seasonal preventive medicine.",
        "Ziwu Liuzhu Meridian Clock pairs 12 two-hour daily windows (Zi to Hai) with peak energetic flow across 12 organ meridians.",
        "Huangdi Neijing emphasizes preventive rhythm alignment ('Spring birth, Summer growth, Autumn harvest, Winter storage')."
      ],
      primarySources: [
        PQ(
          "《黄帝内经 · 素问 · 四气调神大论》",
          "Hoàng Đế Nội Kinh · Tố Vấn",
          "Yellow Emperor's Inner Canon (Suwen)",
          "圣人不治已病治未病，不治已乱治未乱。",
          "Shèngrén bù zhì yǐ bìng zhì wèi bìng, bù zhì yǐ luàn zhì wèi luàn.",
          "Thánh nhân bất trị dĩ bệnh trị vị bệnh, bất trị dĩ loạn trị vị loạn.",
          "Bậc thánh nhân không đợi bệnh đã phát mới chữa mà điều trị từ lúc bệnh chưa thành; không đợi loạn đã nổi mới dẹp mà trị từ khi chưa loạn.",
          "The sage does not treat disease after it manifests, but harmonizes the body before illness arises."
        )
      ],
      sinoVietnameseComparison: "Danh y Tuệ Tĩnh ('Nam dược trị Nam nhân') và Hải Thượng Lãn Ông Lê Hữu Trác vận dụng lý luận Nội Kinh nhưng điều chỉnh phương thang cho khí hậu nhiệt đới ẩm gió mùa Việt Nam.",
      additionalReferences: [
        { author: "Unschuld, P. U., & Tessenow, H.", year: "2011", title: "Huang Di Nei Jing Su Wen: Annotated Translation", publisher: "University of California Press" },
        { author: "UNESCO ICH", year: "2016", title: "The Twenty-Four Solar Terms Archive", publisher: "UNESCO" }
      ]
    },
    "ganzhi-calendar-bazi-system": {
      keyTakeaways: [
        "10 Thiên Can × 12 Địa Chi phối thành 60 Hoa Giáp (Lục thập Hoa Giáp) — chu kỳ toán học chuẩn xác cho phép quy đổi lịch sử hàng nghìn năm không trùng.",
        "Hệ Bát Tự (Tứ Trụ: Năm – Tháng – Ngày – Giờ) thực chất là một hệ ngôn ngữ tượng trưng cho nhiệt độ – độ ẩm và tiết khí mùa sinh theo Ngũ Hành.",
        "Tiếp cận học thuật: phân tích cấu trúc lịch pháp âm–dương hợp lịch thay vì mê tín định mệnh."
      ],
      keyTakeawaysEn: [
        "10 Heavenly Stems paired with 12 Earthly Branches form the 60-year Sexagenary Cycle ('Jiazi'), providing East Asia's continuous historical clock.",
        "Four Pillars (BaZi) codifies seasonal solar-term temperature and moisture balance in Five-Element notation.",
        "Academic approach studies astronomical lunisolar calendars and historical cultural psychology rather than fatalistic superstition."
      ],
      primarySources: [
        PQ(
          "《尚书 · 尧典》",
          "Thượng Thư · Nghiêu Điển",
          "Book of Documents — Canon of Yao",
          "乃命羲和，钦若昊天，历象日月星辰，敬授人时。",
          "Nǎi mìng Xī Hé, qīn ruò hàotiān, lì xiàng rì yuè xīngchén, jìng shòu rénshí.",
          "Nãi mệnh Hy Hòa, khâm nhược hạo thiên, lịch tượng nhật nguyệt tinh thần, kính thụ nhân thì.",
          "Bèn sai họ Hy, họ Hòa kính thuận trời cao, lập lịch đo đạc mặt trời, mặt trăng, tinh tú để trao đúng thời tiết cày cấy cho muôn dân.",
          "Commanding Xi and He in reverence toward Heaven to chart the sun, moon, and stars and respectfully bestow the seasons upon the people."
        )
      ],
      sinoVietnameseComparison: "Việt Nam cùng dùng Lục thập Hoa Giáp (Giáp Tý – Quý Hợi) trên bia ký Lý–Trần–Lê nhưng địa chi năm Mão ở Việt Nam là Mèo (thân thuộc đồng ruộng giữ lúa) thay vì Thỏ Ngọc như Trung Quốc.",
      additionalReferences: [
        { author: "Sivin, N.", year: "2009", title: "Granting the Seasons: The Chinese Astronomical Reform of 1280", publisher: "Springer" },
        { author: "Ho, Peng Yoke", year: "2003", title: "Chinese Mathematical Astrology: Reaching Out to the Stars", publisher: "Routledge" }
      ]
    },
    "ziwei-doushu-star-architecture": {
      keyTakeaways: [
        "Tử Vi Đẩu Số sắp xếp 12 Cung vị và hơn 100 danh xưng tinh tú giả lập trên mặt phẳng như một 'bản đồ quản trị nhân sự' triều đình cổ đại.",
        "Khác biệt lịch sử: Bát Tự xuất hiện từ thời Đường–Tống gắn tiết khí tự nhiên; Tử Vi Đẩu Số định hình rõ vào thời Tống–Minh (gắn truyền thuyết Trần Đoàn).",
        "Nghiên cứu trên CCE dưới góc độ Triết học biểu tượng, sử học dân gian và tư duy hệ thống chức quan cổ đại."
      ],
      keyTakeawaysEn: [
        "Ziwei Doushu maps 12 conceptual Houses and over 100 symbolic star archetypes as an abstract administrative hierarchy model.",
        "Historical evolution spans Song-to-Ming literary traditions attributed to Chen Tuan and Luo Hongxian.",
        "Examined rigorously on CCE through symbolic anthropology, administrative terminology, and cultural history."
      ],
      primarySources: [
        PQ(
          "《汉书 · 天文志》",
          "Hán Thư · Thiên Văn Chí",
          "Book of Han — Treatise on Astronomy",
          "中宫天极星，其一明者，太一常居也。",
          "Zhōnggōng tiānjí xīng, qí yī míngzhě, Tài Yī cháng jū yě.",
          "Trung cung thiên cực tinh, kỳ nhất minh giả, Thái Nhất thường cư dã.",
          "Nơi Trung Cung có sao Thiên Cực (sao Bắc Cực / Tử Vi), ngôi sáng rực rỡ nhất chính là nơi Đế Tinh Thái Nhất ngự trị.",
          "In the Central Celestial Palace stands the Pole Star; its brightest beacon marks the eternal seat of Taiyi."
        )
      ],
      sinoVietnameseComparison: "Ở Việt Nam, Tử Vi Đẩu Số có dòng truyền thừa Việt hóa sâu đậm (cụ Thiên Lương, cụ Văn Đằng Thái Thứ Lang thế kỷ XX), trở thành đề tài văn hóa quen thuộc bên cạnh Lịch Vạn Niên.",
      additionalReferences: [
        { author: "Chao, Y.", year: "2018", title: "Divination Systems in Late Imperial East Asia", publisher: "Columbia University" },
        { author: "Needham, J.", year: "1956", title: "Science and Civilisation in China, Vol. 2: History of Scientific Thought", publisher: "Cambridge University Press" }
      ]
    },
    "yijing-hexagrams-strategy-timing": {
      keyTakeaways: [
        "64 Quẻ Kinh Dịch cấu tạo từ 2 nét nhị phân: Hào Dương (—) & Hào Âm (--), tạo hệ tổ hợp 2⁶ = 64 trạng thái biến chuyển thời vận.",
        "Hai nguyên lý cốt lõi ứng dụng trong quản trị & chiến lược: 'Cùng tắc biến, biến tắc thông' và 'Thời trung' (Hành động đúng thời điểm chín muồi).",
        "Gợi cảm hứng trực tiếp cho Leibniz khi phát triển hệ nhị phân (0–1) đặt nền móng cho khoa học máy tính."
      ],
      keyTakeawaysEn: [
        "The 64 Yijing hexagrams build a 6-bit binary combinatoric lattice (2⁶ = 64 states) from Yang (—) and Yin (--) lines.",
        "Core strategic principles center on adaptive transformation ('When an extreme is reached, change brings flow') and timely restraint.",
        "Historically inspired Gottfried Wilhelm Leibniz in formulating modern binary arithmetic."
      ],
      primarySources: [
        PQ(
          "《周易 · 系辞下》",
          "Chu Dịch · Hệ Từ Hạ",
          "Book of Changes — Appended Remarks II",
          "穷则变，变则通，通则久。",
          "Qióng zé biàn, biàn zé tōng, tōng zé jiǔ.",
          "Cùng tắc biến, biến tắc thông, thông tắc cửu.",
          "Khi sự việc tới chỗ bế tắc cùng cực ắt phải thay đổi; thay đổi ắt hanh thông; hanh thông ắt bền lâu.",
          "When exhaustion is reached, transformation follows; through transformation comes passage; through passage comes endurance."
        )
      ],
      sinoVietnameseComparison: "Nguyễn Trãi, Trạng Trình Nguyễn Bỉnh Khiêm và văn minh triều Trần–Lê tại Việt Nam vận dụng sâu sắc Kinh Dịch vào phép dụng binh giữ nước ('Mười phần thắng lợi tại thời cơ') và triết lý sống an nhiên.",
      additionalReferences: [
        { author: "Wilhelm, R., & Baynes, C. F.", year: "1967", title: "The I Ching or Book of Changes (Bollingen Series XIX)", publisher: "Princeton University Press" },
        { author: "Smith, R. J.", year: "2012", title: "The I Ching: A Biography", publisher: "Princeton University Press" }
      ]
    },
    "suzhou-classical-gardens-aesthetics": {
      keyTakeaways: [
        "Tứ Đại Danh Viên & Nghệ thuật 'Tá Cảnh' (借景 — mượn tháp Bắc Tự ngoài thành vào khung cửa sổ hẹp) biến khu vườn vài nghìn m² thành sơn thủy vô tận.",
        "Bộ 4 yếu tố kiến tạo Viên lâm Tô Châu: Thái Hồ Thạch (đá vôi đục lỗ tự nhiên), Nước uốn khúc quanh co, Đình Tạ – Hành lang khúc chiết và Hoa Mộc bốn mùa.",
        "Trái ngược hoàn toàn trục đối xứng uy quyền của Tử Cấm Thành, Viên lâm là không gian tự do ẩn dật của Nho–Đạo."
      ],
      keyTakeawaysEn: [
        "Suzhou's classical scholar gardens (Humble Administrator's Garden, Master of the Nets) turn compact urban plots into boundless landscapes via 'Borrowed Scenery' (Jiejing).",
        "Four essential material pillars: porous Taihu limestone rockeries, winding water mirrors, zigzag corridors with leak-windows, and seasonal flora.",
        "Contrasts sharply with the Forbidden City's rigid symmetry by offering Taoist–literati refuge for contemplation."
      ],
      primarySources: [
        PQ(
          "计成 《园冶 · 兴造论》 (1631)",
          "Kế Thành · Viên Dã (1631)",
          "Ji Cheng — The Craft of Gardens (1631)",
          "虽由人作，宛自天开。",
          "Suī yóu rén zuò, wǎn zì tiān kāi.",
          "Tuy do nhân tác, uyển tự thiên khai.",
          "Tuy do bàn tay con người tạo tác nên, nhưng trông hệt như do trời đất tự nhiên mở ra vậy.",
          "Though fashioned by human hands, it appears entirely as if opened forth by Heaven itself."
        )
      ],
      sinoVietnameseComparison: "Khu vườn Nhà Vườn Huế (An Hiên, Lạc Tịnh Viên) và Lăng Tự Đức (Khiêm Lăng) tiếp nhận tinh thần 'Mượn cảnh – Gợi ý hơn Phô diễn' của Giang Nam nhưng dùng cau, thanh trà, sen Huế thay cho mai–trúc Giang Nam.",
      additionalReferences: [
        { author: "Ji, Cheng (trans. A. Hardie)", year: "1988", title: "The Craft of Gardens (Yuan Ye)", publisher: "Yale University Press" },
        { author: "UNESCO World Heritage", year: "1997", title: "Classical Gardens of Suzhou Dossier", publisher: "UNESCO" }
      ]
    },
    "four-treasures-of-the-scholar-study": {
      keyTakeaways: [
        "Văn Phòng Tứ Bảo đỉnh cao tương ứng 4 địa danh kiệt xuất: Bút Hồ (Hồ Châu), Mực Huy (Huy Châu), Giấy Tuyên (Tuyên Thành – 108 công đoạn vỏ đàn hương & rơm lúa nếp), Nghiên Đoan (Triệu Khánh).",
        "Mối tương tác vật lý kỳ diệu: Xơ giấy Tuyên sinh 'nhuận ẩm' hút giọt mực Huy Châu keo da thú tạo 5 sắc thái 'Mặc phân ngũ sắc' chỉ trong một nét bút.",
        "Nghiên Đoan Khe giữ mực cả mùa hè không đóng màng khô và không làm tòe ngọn lông thỏ của cây Bút Hồ."
      ],
      keyTakeawaysEn: [
        "Each of the Four Treasures is anchored to a specialized heritage cluster: Huzhou brushes, Huizhou pine-soot inksticks, Jing County Xuan paper, and Zhaoqing Duan inkstones.",
        "Xuan paper's 108-step sandalwood-bark fiber mesh spreads animal-glue ink into five tonal gradients ('Mo fen wu se').",
        "Fine-grained Duanxi slate retains moisture without abraded bristles, preserving crisp brush points across decades."
      ],
      primarySources: [
        PQ(
          "苏易简 《文房四谱》",
          "Tô Dịch Giản · Văn Phòng Tứ Phổ (986)",
          "Su Yijian — Four Registers of the Studio (986)",
          "纸寿千年，绢寿八百。",
          "Zhǐ shòu qiānnián, juàn shòu bābǎi.",
          "Chỉ thọ thiên niên, quyên thọ bát bách.",
          "Giấy Tuyên giữ bền cả ngàn năm, lụa dệt giữ bền tám trăm năm.",
          "Fine handmade Xuan paper endures for a thousand years; woven silk endures for eight hundred."
        )
      ],
      sinoVietnameseComparison: "Việt Nam tự hào có giấy Dó Yên Thái – Đông Cao (dẻo dai hơn cả giấy Tuyên trong điều kiện nồm ẩm) và nghiên đá Thanh Hóa đồng hành cùng thư pháp Hán–Nôm ngàn năm.",
      additionalReferences: [
        { author: "Tsien, Tsuen-Hsuin", year: "1985", title: "Paper and Printing (Science and Civilisation in China, Vol. 5, Pt. 1)", publisher: "Cambridge University Press" },
        { author: "UNESCO ICH", year: "2009", title: "Traditional Handicraft Techniques of Making Xuan Paper", publisher: "UNESCO" }
      ]
    },
    "lu-yu-tea-classic-evolution": {
      keyTakeaways: [
        "Lục Vũ soạn 《Trà Kinh》 (khoảng 760 SCN) — chuyên luận đầu tiên trên thế giới hệ thống hóa cây trà, 24 dụng cụ pha trà, 9 cấp nguồn nước (nước suối núi > nước sông > nước giếng).",
        "Lịch sử thưởng trà trải qua 3 cuộc cách mạng: Đun trà bánh với muối gừng (Đường) → Đánh trà bột tạo bọt trắng 'Điểm trà' (Tống) → Hãm lá trà rời trực tiếp trong ấm Tử Sa (Minh–Thanh tới nay).",
        "Ảnh hưởng quyết định tới Thiền trà (Trà–Thiền nhất vị) của Trung Quốc, Trà đạo Nhật Bản và trà Việt."
      ],
      keyTakeawaysEn: [
        "Lu Yu's 'Classic of Tea' (Chajing, c. 760 CE) codified tea horticulture, 24 specialized utensils, and water ranking (mountain spring > river > well).",
        "Brewing evolved across three revolutions: boiled compressed cake (Tang) -> whisked powdered tea (Song 'Diancha') -> steeped loose-leaf Yixing pots (Ming–present).",
        "Catalyzed East Asian Zen–Tea synthesis, Japanese Sencha/Chanoyu, and Vietnamese temple and literati tea traditions."
      ],
      primarySources: [
        PQ(
          "陆羽 《茶经 · 一之源》 (760)",
          "Lục Vũ · Trà Kinh",
          "Lu Yu — Classic of Tea (c. 760 CE)",
          "茶之为用，味至寒，为饮，最宜精行俭德之人。",
          "Chá zhī wéi yòng, wèi zhì hán, wéi yǐn, zuì yí jīngxíng jiǎndé zhī rén.",
          "Trà chi vi dụng, vị chí hàn, vi ẩm, tối nghi tinh hành kiệm đức chi nhân.",
          "Công dụng của trà tính mát lạnh, dùng làm thức uống thích hợp nhất cho những người giữ nếp sống thanh cao, tiết kiệm và đức hạnh.",
          "Tea is cooling by nature; as a beverage, it most befits people of refined conduct and frugal virtue."
        )
      ],
      sinoVietnameseComparison: "Văn hóa trà bột 'Điểm trà' đời Tống còn lưu lại tại Nhật Bản (Matcha) và các dấu tích gốm men ngọc Lý–Trần Việt Nam (chén trà chân cao Hoàng thành Thăng Long) trước khi chuyển sang trà ướp hương sen thời Lê–Nguyễn.",
      additionalReferences: [
        { author: "Benn, J. A.", year: "2015", title: "Tea in China: A Religious and Cultural History", publisher: "University of Hawai'i Press" },
        { author: "Lu, Yu (trans. F. R. Carpenter)", year: "1974", title: "The Classic of Tea", publisher: "Little, Brown and Company" }
      ]
    },
    "guqin-zither-silent-sound-aesthetics": {
      keyTakeaways: [
        "Cổ Cầm dài ~120 cm tượng trưng 365 ngày (3 thước 6 tấc 5 phân), mặt cong tròn là Trời, đáy phẳng là Đất, 13 điểm huy bằng xà cừ (Huy vị) là 12 tháng + 1 tháng nhuận.",
        "Kỹ thuật 'Giảm tự phổ' (hệ ký âm độc đáo bằng chữ Hán viết tắt tay trái/tay phải từ thời Đường) cho phép bảo tồn chính xác hàng trăm bản cổ khúc hơn 1.400 năm.",
        "Tứ Nghệ Văn Nhân (Cầm – Kỳ – Thi – Họa): đánh Cầm trước hết để tu dưỡng nội tâm chứ không phải biểu diễn sân khấu ồn ào."
      ],
      keyTakeawaysEn: [
        "Guqin symbolism maps its length (~120 cm) to the 365-day year, arched soundboard to Heaven, flat base to Earth, and 13 pearl studs to the 12 months plus intercalary moon.",
        "'Jianzipu' abbreviated tablature notation preserved fingerings and micro-tonal slides intact for over 1,400 years.",
        "As the first of the Scholar's Four Arts, Guqin serves quiet self-cultivation rather than public spectacle."
      ],
      primarySources: [
        PQ(
          "陶渊明 (《晋书》)",
          "Đào Uyên Minh · Đàn Không Dây",
          "Tao Yuanming — On the Stringless Qin",
          "但识琴中趣，何劳弦上声。",
          "Dàn shí qín zhōng qù, hé láo xián shàng shēng.",
          "Đãn thức cầm trung thú, hà lao huyền thượng thanh.",
          "Chỉ cần thấu hiểu cái thú thanh tao trong lòng cây đàn, cần gì phải nhọc công tìm tiếng vang trên mặt dây nữa.",
          "Once you grasp the inner spirit within the zither, why trouble the strings for outward sound?"
        )
      ],
      sinoVietnameseComparison: "Cổ Cầm đứng đầu 'Cầm – Kỳ – Thi – Họa' sánh vai với Đàn Bầu (Độc huyền cầm) và Đàn Tranh (Thập lục huyền) của Việt Nam: cùng lấy các kỹ thuật nhấn nhá ('Tạo ngân', 'Luyến láy' 吟猱) mô phỏng tiếng nói tâm tình.",
      additionalReferences: [
        { author: "Van Gulik, R. H.", year: "1940", title: "The Lore of the Chinese Lute (Guqin Monograph)", publisher: "Sophia University" },
        { author: "UNESCO ICH", year: "2003", title: "Guqin and Its Music Heritage Archive", publisher: "UNESCO" }
      ]
    },
    "chinese-science-technology-history-modern": {
      keyTakeaways: [
        "Đêm trước Cách mạng Công nghiệp, 4 Phát minh (Giấy, In, La bàn, Thuốc súng) cùng công trình Đô Giang Yển & Thiên Công Khai Vật định hình tri thức kỹ thuật thực dụng toàn cầu.",
        "Thế kỷ XXI chứng kiến bước chuyển ngoạn mục sang AI nguồn mở hiệu năng cao (DeepSeek, Qwen), năng lượng mặt trời/pin EV (CATL, BYD) và hạ tầng HSR >46.000 km.",
        "Nghịch lý Needham nhắc nhở giới nghiên cứu vì sao tư duy kỹ nghệ thực nghiệm cổ đại cần kết hợp thể chế khoa học tự do hiện đại."
      ],
      keyTakeawaysEn: [
        "Before the European Industrial Revolution, China's Four Great Inventions, Dujiangyan hydraulics, and Tiangong Kaiwu transformed global craft technology.",
        "21st-century China leaped into open-weight AI (DeepSeek, Qwen), clean EV/battery supply chains (CATL, BYD), and >46,000 km high-speed rail.",
        "The Needham Question probes how imperial bureaucracy interacted with empirical engineering innovation."
      ],
      primarySources: [
        PQ(
          "沈括 《梦溪笔谈 · 技艺》 (1088)",
          "Thẩm Quát · Mộng Khê Bút Đàm (1088)",
          "Shen Kuo — Dream Pool Essays (1088)",
          "用胶泥刻字，薄如钱唇，每字为一印，火烧令坚。",
          "Yòng jiāoní kè zì, bó rú qiánchún, měi zì wéi yī yìn, huǒ shāo lìng jiān.",
          "Dụng giao nê khắc tự, bạc như tiền thần, mỗi tự vi nhất ấn, hỏa thiêu linh kiên.",
          "Dùng đất sét dẻo khắc từng con chữ mỏng như mép đồng tiền, mỗi chữ thành một con dấu rời rồi nung lửa cho rắn chắc.",
          "Carving individual characters in sticky clay thin as a coin rim—each character forming a movable type—then baking them hard in fire."
        )
      ],
      sinoVietnameseComparison: "Nghiên cứu lịch sử khoa học Đông Á nhắc nhớ Hồ Nguyên Trừng (nhà Hồ Việt Nam thế kỷ XV) đã sáng chế Hỏa khí thần cơ và thành nhà Hồ kỹ thuật xây đá vòm cuốn không vữa kỳ vĩ.",
      additionalReferences: [
        { author: "Needham, J.", year: "1954–2008", title: "Science and Civilisation in China (Multi-Volume Series)", publisher: "Cambridge University Press" },
        { author: "Lin, J. Y.", year: "1995", title: "The Needham Puzzle: Why the Industrial Revolution Did Not Originate in China", publisher: "Economic Development and Cultural Change" }
      ]
    }
  };

  // Reinforce key short classical essays in core/batch1 with extra Sino-Viet + Primary Quotes EN parity
  const EXTRA_SHORT_CORE_REINFORCE = {
    "ink-wash-painting": {
      keyTakeaways: [
        "Bút pháp Thủy mặc đề cao 'Lưu bạch' (để khoảng trắng tự thở) và triết lý Lão–Trang: mực đen loãng đậm một màu nhưng gợi đủ 'Ngũ sắc' trong tâm trí người xem.",
        "Thư họa đồng nguyên: từ Triệu Mạnh Phủ tới Từ Vị, nét vẽ hoa lá đá núi kế thừa trực tiếp lực cổ tay của Thảo thư – Triện thư.",
        "Ba khoảng không gian Tam Viễn Pháp (Cao viễn, Thâm viễn, Bình viễn) của Quách Hy mở góc nhìn đa điểm hoàn toàn khác luật tụ 1 điểm Phương Tây."
      ],
      keyTakeawaysEn: [
        "Ink-wash painting elevates unpainted negative space ('Liubai') so one monochrome ink stick evokes 'Five Chromatic Moods'.",
        "'Calligraphy and painting share one root': floral and cliff contours obey seal and cursive brush energy.",
        "Guo Xi's Three Perspectives (High, Deep, Level Distance) liberate viewer eye-flow from single-point European vanishing rules."
      ]
    },
    "iching-development": {
      keyTakeaways: [
        "Kinh Dịch đi qua 3 lớp hình thành: Bát quái Phục Hy → Lục thập tứ quái Chu Văn Vương → Thập Dực (Hệ Từ, Thoán Truyện, Tượng Truyện) của Nho gia Tiên Tần.",
        "Không phải sách bói toán đơn thuần, Kinh Dịch là sách triết học về quy luật tuần hoàn biến dịch giữa hai cực Âm–Dương.",
        "Đóng vai trò sách đứng đầu Ngũ Kinh ('Quần kinh chi thủ') suốt lịch sử khoa cử Trung–Việt."
      ],
      keyTakeawaysEn: [
        "Three historical strata formed the Yijing: Fuxi Eight Trigrams -> King Wen's 64 Hexagrams -> Confucian Ten Wings.",
        "Far deeper than fortune-telling, it stands as East Asia's foundational ontology of cyclic transformation between Yin and Yang.",
        "Ranked foremost among the Five Confucian Classics ('First of All Canons') across Sino-Vietnamese academies."
      ]
    },
    "yinyang-origins": {
      keyTakeaways: [
        "Chữ Âm (阴 - sườn núi râm) & Dương (阳 - sườn núi đón nắng) ban đầu là khái niệm khí tượng học thuần túy mô tả ánh sáng địa hình, sau mới mở rộng thành phép biện chứng vũ trụ.",
        "Bốn quy luật Âm Dương: Đối lập chế ước, Hỗ căn nương tựa, Tiêu trưởng luân chuyển và Chuyển hóa lẫn nhau ('Vật cực tất phản').",
        "Đặt nền tảng trực tiếp cho chẩn đoán Bát cương Đông y, Thái Cực Quyền và điều hòa kiến trúc Đông Á."
      ],
      keyTakeawaysEn: [
        "Yin (shady north slope) and Yang (sunlit south slope) originated as literal topographical sunlight descriptions before becoming cosmic dialectics.",
        "Four core laws: Mutual Opposition, Interdependence ('Hugen'), Cyclical Waxing–Waning, and Mutual Transformation.",
        "Underpins Traditional Medicine diagnostics, Taiji equilibrium, and East Asian architectural orientation."
      ]
    },
    "five-elements": {
      keyTakeaways: [
        "Ngũ Hành (Kim – Mộc – Thủy – Hỏa – Thổ) KHÔNG phải 5 nguyên tố vật chất chết mà là 5 trạng thái vận động tuần hoàn: Thăng, Giang, Tụ, Tán, Điều hòa.",
        "Hai vòng tròn kiểm soát hệ thống: Vòng Tương Sinh (nuôi dưỡng phát triển) và Vòng Tương Khắc (kiềm chế để không quá đà gây đổ vỡ).",
        "Trâu Diễn thời Chiến Quốc nâng Ngũ Hành thành lý luận 'Ngũ Đức Chung Thủy' giải thích sự thay đổi triều đại lịch sử."
      ],
      keyTakeawaysEn: [
        "Wu Xing (Metal, Wood, Water, Fire, Earth) designates five dynamic energetic phases rather than static chemical elements.",
        "Regulated by two balancing feedback loops: Mutual Generation (nourishment) and Mutual Restriction (anti-runaway check).",
        "Zou Yan expanded Five Phases into political dynastic cycle philosophy during the Warring States period."
      ]
    },
    "spring-festival-significance": {
      keyTakeaways: [
        "Lễ hội Lịch sử Đêm Giao thừa và 15 ngày Đầu Xuân (Tết Nguyên Đán) hợp nhất 3 chức năng: Cầu mùa vụ, Đoàn viên gia tộc và Tiễn cũ đón mới.",
        "Khác với Trung Hoa ưa Bánh sủi cảo (Jiaozi), câu đối đỏ dán cửa ngược chữ Phúc ('Phúc đáo'), Tết Việt Nam mang dấu ấn Bánh Chưng–Bánh Giầy, Hoa Đào/Mai, Mâm Ngũ quả và Cây Nêu.",
        "Thể hiện sâu sắc tính cộng đồng gia tộc ('Châu thổ Lúa nước Đông Á') qua phong tục lì xì Hồng bao và chúc Tết đầu năm."
      ],
      keyTakeawaysEn: [
        "Lunar New Year synchronizes agrarian cycle renewal, ancestral remembrance, and multi-generational family reunion.",
        "Distinct local variants: Northern Chinese Jiaozi dumplings & upside-down 'Fu' vs. Vietnamese square Banh Chung, peach/apricot blossoms, and Cay Neu.",
        "Red envelopes ('Hongbao' / 'Li xi') pass auspicious generational continuity rather than transactional value."
      ]
    },
    "tang-golden-age": {
      keyTakeaways: [
        "Trường An đời Thịnh Đường là đô thị hơn 1 triệu dân quốc tế bậc nhất hành tinh với khu Đông Thị – Tây Thị đón thương nhân Túc Đặc, Ba Tư, Ả Rập và sứ giả Đại Việt, Nhật Bản.",
        "Thể chế Tam Tỉnh Lục Bộ và Khoa cử tuyển hiền phá vỡ thế độc quyền quý tộc cha truyền con nối thời Lục Triều.",
        "Thời kỳ khai sinh hơn 48.900 bài thơ trong *Toàn Đường Thi* (Lý Bạch – Đỗ Phủ – Bạch Cư Dị)."
      ],
      keyTakeawaysEn: [
        "Tang Chang'an stood as a cosmopolitan 1-million-citizen capital welcoming Sogdian, Persian, Japanese, and Vietnamese envoys.",
        "The Three Departments and Six Ministries + Imperial Exam reforms broke hereditary clan monopolies.",
        "Produced over 48,900 surviving poems collected in the Complete Tang Poems led by Li Bai, Du Fu, and Bai Juyi."
      ]
    },
    "beijing-shanghai-culture": {
      keyTakeaways: [
        "Kinh Phái (Bắc Kinh) đại diện văn hóa Chính trị – Hoàng gia – Lễ chế – Tứ Hợp Viện – Tính trực diện hào sảng phương Bắc.",
        "Hải Phái (Thượng Hải) đại diện văn hóa Thương mại Quốc tế – Khế ước tinh tế – Thạch Khố Môn – Cafe & Tài chính Lục Gia Chủy.",
        "Đọc hiểu trục 'Kinh Phái vs. Hải Phái' giúp người Việt giao tiếp đúng nhịp khi gặp đối tác ở Bắc Kinh và Thượng Hải."
      ],
      keyTakeawaysEn: [
        "Jingpai (Beijing style) embodies imperial political orthodoxy, quadrangle courtyards, and direct northern sociability.",
        "Haipai (Shanghai style) embodies contractual cosmopolitism, Shikumen fusion lanes, and modern Lujiazui finance.",
        "Distinguishing north–south cultural norms sharpens Vietnamese partner communication across China's twin capitals."
      ]
    },
    "tea-culture": {
      keyTakeaways: [
        "Văn hóa Trà nối 3 miền địa lý: Vân Nam – Tứ Xuyên là cái nôi cây chè cổ đại thế giới, Phúc Kiến – Quảng Đông phát triển trà Ô Long Công Phu, Giang Nam tỏa sáng Trà Văn Nhân.",
        "Nghi thức 'Khấu chỉ lễ' (gõ nhẹ hai ngón tay lên bàn cảm ơn khi được rót trà) bắt nguồn từ truyền thuyết Càn Long vi hành phương Nam.",
        "Trà Đạo Đông Á chuyển hóa hành vi uống nước giải khát thành phương tiện rèn luyện tâm tính 'Hòa – Kính – Thanh – Tịch'."
      ],
      keyTakeawaysEn: [
        "Tea culture connects three cradles: ancient Yunnan–Sichuan wild trees, Fujian–Guangdong Gongfu Oolong, and Jiangnan scholar Green teas.",
        "Finger-tapping table etiquette ('Kouzhili') expresses silent gratitude when tea is poured during meals and business talks.",
        "Turns daily hydration into mindful East Asian cultivation of harmony, respect, clarity, and stillness."
      ]
    },
    "confucianism-society": {
      keyTakeaways: [
        "Cấu trúc 'Ngũ Luân' (Vua–Tôi, Cha–Con, Chồng–Vợ, Anh–Em, Bạn bè) định hình trật tự xã hội dựa trên nghĩa vụ đạo đức song phương chứ không đơn thuần ép buộc một chiều.",
        "Học thuyết 'Tu thân → Tề gia → Trị quốc → Bình thiên hạ' trong sách Đại Học đặt nền tảng giáo dục nhân cách công dân Á Đông.",
        "Chính sách 'Sai tự cách cục' (Phí Hiếu Thông) lý giải vòng tròn ưu tiên tin cậy trong gia tộc và mạng lưới doanh nghiệp Á Đông."
      ],
      keyTakeawaysEn: [
        "Five Cardinal Relationships ('Wu Lun') frame social cohesion through reciprocal duties rather than one-sided domination.",
        "Great Learning's cascade ('Cultivate self -> Regulate family -> Govern state -> Bring peace to the world') bridges ethics and politics.",
        "Fei Xiaotong's concentric 'Chaxu Geju' model explains relational trust circles in modern East Asian enterprise."
      ]
    },
    "silk-road-maritime-trade": {
      keyTakeaways: [
        "Hai tuyến Huyết mạch Tơ Lụa: Lục lộ Trường An – Đôn Hoàng – Samarkand (trao đổi lụa, giấy, ngựa Hãn Huyết) và Hải lộ Tuyền Châu – Quảng Châu – Giao Chỉ – Ấn Độ Dương (trao đổi gốm sứ, trà, gia vị).",
        "Các thương cảng miền Bắc và miền Trung Việt Nam (Vân Đồn, Hội An) là trạm dừng chiến lược thu gom hàng hóa nhiệt đới dọc Con đường Tơ lụa trên biển.",
        "Cộng hưởng tới cấu trúc Chuỗi cung ứng đường sắt – cảng biển song phương RCEP/ACFTA 3.0 hôm nay."
      ],
      keyTakeawaysEn: [
        "Overland Silk Road (Chang'an–Dunhuang–Samarkand) operated in tandem with Maritime Ceramic Routes via Quanzhou, Guangzhou, and Jiaozhi.",
        "Vietnamese ports (Van Don, Hoi An) formed crucial tropical transshipment nodes along East–West sea lanes.",
        "Historical multi-modal corridors foreshadow today's RCEP and ACFTA 3.0 rail-sea logistics links."
      ]
    },
    "hundred-schools": {
      keyTakeaways: [
        "Thời Xuân Thu – Chiến Quốc bùng nổ tự do học thuật ('Bách Gia Tranh Minh') tại Học viện Tắc Hạ nước Tề khi nhà Chu suy yếu, giới Kẻ Sĩ đi chu du các nước.",
        "4 hệ tư tưởng lõi chi phối suốt 2.000 năm sau: Nho gia (Đạo đức Lễ trị), Đạo gia (Tự nhiên Vô vi), Pháp gia (Pháp–Thuật–Thế), Mặc gia (Kiêm ái Phi công).",
        "Không một quốc gia Đông Á nào chỉ áp dụng duy nhất một trường phái, mà thực hành 'Ngoại Nho Nội Pháp, Dưỡng sinh theo Đạo'."
      ],
      keyTakeawaysEn: [
        "Spring & Autumn–Warring States pluralism sparked the 'Hundred Schools' debate notably sheltered at Jixia Academy.",
        "Four enduring pillars—Confucian ethics, Daoist spontaneity, Legalist statecraft, Mohist meritocracy—debated civilization's path.",
        "Imperial governance later synthesized all three pragmatically ('Confucian facade, Legalist backbone, Daoist private mind')."
      ]
    }
  };

  if (typeof window.CCE_APPLY_DEPTH_ENRICHMENT === "function") {
    window.CCE_APPLY_DEPTH_ENRICHMENT(BATCH_3_ENRICHMENT);
    window.CCE_APPLY_DEPTH_ENRICHMENT(EXTRA_SHORT_CORE_REINFORCE);
  }

  // Merge Takeaways, Primary Sources & EN updates seamlessly onto window.CCE_ARTICLES_EN
  const ALL_PATCH = Object.assign({}, BATCH_3_ENRICHMENT, EXTRA_SHORT_CORE_REINFORCE);
  if (window.CCE_ARTICLES && Array.isArray(window.CCE_ARTICLES)) {
    window.CCE_ARTICLES.forEach((art) => {
      const p = ALL_PATCH[art.id];
      if (!p) return;
      if (Array.isArray(p.keyTakeaways) && p.keyTakeaways.length && (!Array.isArray(art.keyTakeaways) || !art.keyTakeaways.length)) {
        art.keyTakeaways = p.keyTakeaways.slice();
      }
      if (Array.isArray(p.primarySources) && p.primarySources.length && (!Array.isArray(art.primarySources) || !art.primarySources.length)) {
        art.primarySources = p.primarySources.slice();
      }
      if (p.sinoVietnameseComparison && !art.sinoVietnameseComparison) {
        art.sinoVietnameseComparison = p.sinoVietnameseComparison;
      }
    });
  }

  if (window.CCE_ARTICLES_EN) {
    Object.keys(ALL_PATCH).forEach((aid) => {
      const p = ALL_PATCH[aid];
      const enObj = window.CCE_ARTICLES_EN[aid];
      if (!enObj) return;
      if (Array.isArray(p.keyTakeawaysEn) && p.keyTakeawaysEn.length && (!Array.isArray(enObj.keyTakeaways) || !enObj.keyTakeaways.length)) {
        enObj.keyTakeaways = p.keyTakeawaysEn.slice();
      }
      if (Array.isArray(p.primarySources) && p.primarySources.length && (!Array.isArray(enObj.primarySources) || !enObj.primarySources.length)) {
        enObj.primarySources = p.primarySources.map((q) => ({
          source: q.sourceEn || q.source,
          sourceZh: q.sourceZh,
          sourceEn: q.sourceEn,
          zh: q.zh,
          quoteZh: q.zh,
          pinyin: q.pinyin,
          hanViet: q.hanViet,
          translationVi: q.translationVi,
          translationEn: q.translationEn
        }));
      }
    });
  }
})();
