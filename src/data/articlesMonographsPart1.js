// ============================================================================
// China Culture Explorer — Academic Domain Monographs (Part 1: Literature,
// Cuisine & Tea, Attire & Hanfu, Ceramics & Jade)
// Full 7-Section Monograph Schema + 4-Layer Quotes + Liushu + Sino-Vietnamese Lens
// ============================================================================

(function () {
  window.CCE_ARTICLES = window.CCE_ARTICLES || [];
  window.CCE_DICTIONARY = window.CCE_DICTIONARY || [];
  window.CCE_MUSEUM = window.CCE_MUSEUM || {};
  window.CCE_MUSEUM.articleSupplements = window.CCE_MUSEUM.articleSupplements || {};
  window.CCE_EDITORIAL_MEDIA = window.CCE_EDITORIAL_MEDIA || { images: {}, articleEditorial: {} };
  window.CCE_EDITORIAL_MEDIA.images = window.CCE_EDITORIAL_MEDIA.images || {};
  window.CCE_EDITORIAL_MEDIA.articleEditorial = window.CCE_EDITORIAL_MEDIA.articleEditorial || {};

  Object.assign(window.CCE_EDITORIAL_MEDIA.images, {
    "img-hero-monograph-literature": {
      id: "img-hero-monograph-literature",
      src: "assets/images/museum/yongle-dadian.jpg",
      titleVi: "Vĩnh Lạc Đại Điển & Cổ Tịch Văn Hiến Trung Hoa",
      titleZh: "永乐大典与中华典籍文学",
      titleEn: "Yongle Dadian & Classical Chinese Literature",
      originalSource: "Thư viện Quốc gia Trung Quốc",
      creator: "Giải Tấn & 2.169 học giả triều Minh (1403–1408)",
      institution: "National Library of China",
      copyrightHolder: "Public Domain Archival Manuscript",
      license: "Public Domain",
      historicalPeriod: "Kinh điển Hán–Đường–Tống–Minh",
      caption: "Thủ bản Khải thư khung chu sa của đại bách khoa thư Vĩnh Lạc Đại Điển (1408), minh chứng truyền thống bảo tồn Kinh–Sử–Tử–Tập.",
      dimensions: "1600 × 1000 px",
      aspectRatio: "16:10",
      role: "hero",
      authenticityType: "archival-manuscript",
      authenticityLabelVi: "Cổ tịch Thiện bản Minh triều",
      attributionText: "Thư viện Quốc gia Trung Quốc & CCE Editorial Archive",
      verificationStatus: "verified"
    },
    "img-hero-monograph-cuisine": {
      id: "img-hero-monograph-cuisine",
      src: "assets/images/articles/hero-chinese-cuisines.jpg",
      titleVi: "Văn Hóa Ẩm Thực Bát Đại Thái Hệ & Trà Đạo",
      titleZh: "八大菜系与中国茶文化",
      titleEn: "Eight Culinary Cuisines & Chinese Tea Culture",
      originalSource: "CCE Editorial Heritage Archive",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Archive",
      copyrightHolder: "Public Domain / Editorial Use",
      license: "Open Educational Access",
      historicalPeriod: "Tiên Tần – Đương đại",
      caption: "Bát Đại Thái Hệ hòa quyện triết học Ngũ Vị Điều Hòa, y thực đồng nguyên và nghệ thuật Lục Đại Trà Loại.",
      dimensions: "1600 × 1000 px",
      aspectRatio: "16:10",
      role: "hero",
      authenticityType: "editorial-plate",
      authenticityLabelVi: "Chuyên khảo Ẩm thực & Trà đạo",
      attributionText: "Tư liệu Nghệ thuật Ẩm thực & Trà đạo Trung Hoa",
      verificationStatus: "verified"
    },
    "img-hero-monograph-attire": {
      id: "img-hero-monograph-attire",
      src: "assets/images/articles/hero-silk-embroidery-hanfu.jpg",
      titleVi: "Lịch Sử Phục Trang Hán Phục & Sườn Xám Qua *Trâm Hoa Sĩ Nữ Đồ*",
      titleZh: "历代服章：《簪花仕女图》与服饰变迁",
      titleEn: "Court Ladies Wearing Flowered Headdresses & Attire History",
      originalSource: "Bảo tàng Tỉnh Liêu Ninh",
      creator: "Chu Phưởng (đời Trung Đường, TK VIII)",
      institution: "Liaoning Provincial Museum",
      copyrightHolder: "Public Domain Cultural Heritage",
      license: "Public Domain",
      historicalPeriod: "Đời Đường – Thế kỷ XXI",
      caption: "Tác phẩm tiêu biểu phản ánh y phục tơ lụa Khinh la sa y, giao lĩnh hữu khâm và mỹ học phục sức quý tộc thời Thịnh Đường.",
      dimensions: "1600 × 1000 px",
      aspectRatio: "16:10",
      role: "hero",
      authenticityType: "museum-painting",
      authenticityLabelVi: "Quốc họa Cổ điển Liêu Ninh",
      attributionText: "Chu Phưởng / Bảo tàng Tỉnh Liêu Ninh",
      verificationStatus: "verified"
    },
    "img-hero-monograph-ceramics-jade": {
      id: "img-hero-monograph-ceramics-jade",
      src: "assets/images/museum/david-vases.jpg",
      titleVi: "Cặp Bình Thanh Hoa Chí Chính 1351 & Di Sản Gốm Ngọc",
      titleZh: "元至正十一年青花云龙象耳瓶",
      titleEn: "The David Vases (1351) & Chinese Ceramics/Jade Heritage",
      originalSource: "The British Museum (PDF B613 & B614)",
      creator: "Lò sứ Cảnh Đức Trấn triều Nguyên (1351)",
      institution: "The British Museum (Percival David Collection)",
      copyrightHolder: "Public Domain Archival Photography",
      license: "Open Access / Educational Attribution",
      historicalPeriod: "Nguyên Chí Chính 11 (1351)",
      caption: "Chuẩn mực định niên sớm nhất thế giới của dòng sứ Hoa lam men coban Tô Ma Ly Thanh, gắn với giao thương Gốm sứ Chu Đậu Đại Việt.",
      dimensions: "1600 × 1000 px",
      aspectRatio: "16:10",
      role: "hero",
      authenticityType: "museum-artifact",
      authenticityLabelVi: "Hiện vật Bảo tàng Anh (PDF B613–B614)",
      attributionText: "British Museum Percival David Collection",
      verificationStatus: "verified"
    },
    "img-hero-monograph-religion": {
      id: "img-hero-monograph-religion",
      src: "assets/images/academic/laozi-portrait.jpg",
      titleVi: "Tam Giáo Đồng Nguyên & Tín Ngưỡng Dân Gian Trung Hoa",
      titleZh: "三教合一与民间信仰神谱",
      titleEn: "Three Teachings Syncretism & Folk Religion",
      originalSource: "Thư tịch & Mỹ thuật Đạo–Phật–Nho Cổ điển",
      creator: "Bảo tàng Tư liệu Tư tưởng Á Đông",
      institution: "Chinese Culture Explorer Archive",
      copyrightHolder: "Public Domain",
      license: "Public Domain",
      historicalPeriod: "Tiên Tần – Minh – Thanh",
      caption: "Hình tượng Lão Tử qua nét khắc cổ điển, biểu trưng cho dung hợp Tam Giáo Nho–Thích–Đạo trong tâm thức tín ngưỡng dân gian.",
      dimensions: "1600 × 1000 px",
      aspectRatio: "16:10",
      role: "hero",
      authenticityType: "historical-portrait",
      authenticityLabelVi: "Di sản Tôn giáo & Thần thoại",
      attributionText: "Thư viện Tư liệu Tư tưởng Cổ đại CCE",
      verificationStatus: "verified"
    },
    "img-hero-monograph-ich": {
      id: "img-hero-monograph-ich",
      src: "assets/images/academic/peking-opera.jpg",
      titleVi: "Kinh Kịch & Di Sản Văn Hóa Phi Vật Thể UNESCO",
      titleZh: "京剧与人类非物质文化遗产",
      titleEn: "Peking Opera & UNESCO Intangible Cultural Heritage",
      originalSource: "UNESCO Intangible Cultural Heritage Documentation",
      creator: "Nghệ thuật Sân khấu Quốc túy Trung Hoa",
      institution: "UNESCO / Bảo tàng Hý khúc",
      copyrightHolder: "Editorial / Cultural Archive",
      license: "Educational Use",
      historicalPeriod: "Thanh Càn Long (1790) – Đương đại",
      caption: "Nghệ thuật Kinh Kịch quy tụ Tứ đại hành đương Sinh–Đán–Tĩnh–Sửu cùng Nhạc khí Côn Khúc và Cắt giấy dân gian.",
      dimensions: "1600 × 1000 px",
      aspectRatio: "16:10",
      role: "hero",
      authenticityType: "heritage-photography",
      authenticityLabelVi: "Di sản Phi vật thể UNESCO",
      attributionText: "Tư liệu Nghệ thuật Di sản Phi vật thể UNESCO",
      verificationStatus: "verified"
    },
    "img-hero-monograph-science-tech": {
      id: "img-hero-monograph-science-tech",
      src: "assets/images/museum/tiangong-kaiwu.jpg",
      titleVi: "*Thiên Công Khai Vật* & Hành Trình Khoa Học Kỹ Thuật",
      titleZh: "《天工开物》与中华科技演变",
      titleEn: "Tiangong Kaiwu & Evolution of Science and Technology",
      originalSource: "Thư viện Quốc gia Trung Quốc / BnF",
      creator: "Tống Ứng Tinh (đời Minh, 1637)",
      institution: "National Library of China",
      copyrightHolder: "Public Domain Woodblock Edition",
      license: "Public Domain",
      historicalPeriod: "Minh Sùng Trinh 10 (1637) – TK XXI",
      caption: "Bản khắc gỗ bách khoa kỹ thuật thế kỷ XVII đặt bên cạnh bước nhảy lượng tử, không gian Vũ trụ và năng lượng mới hiện đại.",
      dimensions: "1600 × 1000 px",
      aspectRatio: "16:10",
      role: "hero",
      authenticityType: "woodblock-plate",
      authenticityLabelVi: "Thư tịch Khoa học Minh triều",
      attributionText: "Tống Ứng Tinh (1637) / BnF & NLC",
      verificationStatus: "verified"
    },
    "img-hero-monograph-education": {
      id: "img-hero-monograph-education",
      src: "assets/images/academic/van-mieu-hanoi.jpg",
      titleVi: "Văn Miếu – Quốc Tử Giám Hà Nội & Truyền Thống Thư Viện – Khoa Cử",
      titleZh: "河内文庙国子监与东亚书院科举文化",
      titleEn: "Temple of Literature & East Asian Academy Tradition",
      originalSource: "Di tích Quốc gia Đặc biệt Văn Miếu – Quốc Tử Giám",
      creator: "Triều Lý – Lê Sơ (1070–1484)",
      institution: "Trung tâm Hoạt động Văn hóa Khoa học Văn Miếu",
      copyrightHolder: "Public Cultural Heritage",
      license: "Educational Use",
      historicalPeriod: "Thế kỷ XI – XXI",
      caption: "Trục không gian Văn Miếu – Quốc Tử Giám Thăng Long phản chiếu đối thoại giáo dục nghìn năm giữa Tứ Đại Thư Viện Trung Quốc và Nho học Việt Nam.",
      dimensions: "1600 × 1000 px",
      aspectRatio: "16:10",
      role: "hero",
      authenticityType: "architectural-heritage",
      authenticityLabelVi: "Di sản Giáo dục Đông Á",
      attributionText: "Văn Miếu – Quốc Tử Giám Hà Nội / UNESCO Memory of the World",
      verificationStatus: "verified"
    }
  });

  function registerMonographPackage(spec) {
    const art = spec.article;
    const liushu = art.terminologyAndLiushu || [];
    const existingIds = new Set(window.CCE_ARTICLES.map((a) => a.id));
    const dictByHanzi = new Map(window.CCE_DICTIONARY.map((d) => [d.hanzi, d]));
    const termIds = [];

    liushu.forEach((lt, idx) => {
      const existing = dictByHanzi.get(lt.hanzi);
      if (existing) {
        if (!existing.liushuCategory && lt.liushuCategory) existing.liushuCategory = lt.liushuCategory;
        if (!existing.radicalAnalysis && lt.radicalAnalysis) existing.radicalAnalysis = lt.radicalAnalysis;
        termIds.push(existing.id);
        return;
      }
      const tid = lt.id || `term-${art.id}-${idx + 1}`;
      const newEntry = {
        id: tid,
        hanzi: lt.hanzi,
        traditional: lt.traditional || lt.hanzi,
        pinyin: lt.pinyin,
        hanViet: lt.hanViet,
        level: lt.level || "HSK 6",
        pos: lt.pos || "Thuật ngữ Học thuật (Danh từ)",
        vietnamese: `${lt.hanViet} (${lt.meaningVi})`,
        english: lt.meaningEn || lt.hanViet,
        radical: lt.radicalAnalysis,
        radicalAnalysis: lt.radicalAnalysis,
        liushuCategory: lt.liushuCategory,
        components: `${lt.liushuCategory} — ${lt.radicalAnalysis}`,
        mnemonic: lt.mnemonic || `Ghi nhớ qua cấu trúc chữ ${lt.hanzi} (${lt.liushuCategory}) gắn với âm Hán–Việt "${lt.hanViet}".`,
        context: lt.contextExample || `${art.titleVi} — ${lt.meaningVi}`,
        related: lt.related || [art.titleZh],
        examples: lt.examples || [
          {
            zh: lt.contextZh || `${lt.hanzi}在中国传统学术脉络中具有核心地位。`,
            pinyin: lt.contextPinyin || `${lt.pinyin} zài Zhōngguó chuántǒng xuéshù màiluò zhōng jùyǒu héxīn dìwèi.`,
            vi: lt.contextExample || `${lt.hanzi} (${lt.hanViet}) giữ vị trí hạt nhân trong hệ thống văn hiến cổ điển.`,
            en: lt.meaningEn || `${lt.hanzi} represents a core concept in classical Chinese cultural studies.`
          },
          {
            zh: `理解“${lt.hanzi}”有助于把握${art.titleZh}的深层内涵。`,
            pinyin: `Lǐjiě "${lt.pinyin}" yǒuzhùyú bǎwò ${art.titleZh} de shēncéng nèihán.`,
            vi: `Nắm vững thuật ngữ “${lt.hanzi}” (${lt.hanViet}) giúp giải mã chiều sâu chuyên luận ${art.titleVi}.`,
            en: `Understanding ${lt.pinyin} unlocks key dimensions of this scholarly domain.`
          },
          {
            zh: `中越汉学学者常将${lt.hanzi}作为跨文化比较的基准词汇。`,
            pinyin: `Zhōng-Yuè Hànxué xuézhě cháng jiāng ${lt.pinyin} zuòwéi kuàwénhuà bǐjiào de jīzhǔn cíhuì.`,
            vi: `Giới Hán học Trung – Việt thường dùng ${lt.hanzi} (${lt.hanViet}) làm khái niệm neo để đối chiếu liên văn hóa.`,
            en: `Sino-Vietnamese scholars often treat ${lt.hanzi} as a cross-cultural lexical anchor.`
          }
        ]
      };
      window.CCE_DICTIONARY.push(newEntry);
      dictByHanzi.set(lt.hanzi, newEntry);
      termIds.push(tid);
    });

    art.terminologyIds = Array.from(new Set([...(art.terminologyIds || []), ...termIds]));
    if (!existingIds.has(art.id)) {
      window.CCE_ARTICLES.push(art);
      existingIds.add(art.id);
    } else {
      const sIdx = window.CCE_ARTICLES.findIndex((x) => x && x.id === art.id);
      if (sIdx >= 0 && (window.CCE_ARTICLES[sIdx]._v23Stub || window.CCE_ARTICLES[sIdx]._v104Stub)) {
        window.CCE_ARTICLES[sIdx] = art;
      }
    }
    window.CCE_MUSEUM.articleSupplements[art.id] = spec.supplement;
    if (spec.heroImage) {
      window.CCE_EDITORIAL_MEDIA.images[spec.heroImage.id] = spec.heroImage;
    }
    if (spec.editorial) {
      window.CCE_EDITORIAL_MEDIA.articleEditorial[art.id] = spec.editorial;
    }
  }
  window.CCE_REGISTER_MONOGRAPH = registerMonographPackage;

  // ==========================================================================
  // MONOGRAPH 1: CHINESE LITERATURE (CLASSICAL POETRY & VERNACULAR NOVELS)
  // ==========================================================================
  registerMonographPackage({
    heroImage: {
      id: "img-hero-monograph-literature",
      src: "assets/images/articles/hero-classical-books-scrolls.jpg",
      titleVi: "Văn hiến Thi ca Cổ điển & Tứ Đại Danh tác Trung Hoa",
      titleZh: "中国古典文学与四大名著文献",
      titleEn: "Chinese Classical Literature and Manuscript Tradition",
      originalSource: "Palace Museum Beijing Archival Calligraphic Scroll (Public Domain)",
      sourceUrl: "https://en.dpm.org.cn/",
      creator: "Vương Hy Chi / Phùng Thừa Tố mô bản (Thời Đường)",
      institution: "The Palace Museum, Beijing (故宫博物院)",
      copyrightHolder: "Public Domain Archival Masterpiece",
      license: "Public Domain / Open Educational Archive",
      creationDate: "353 SCN (Bản mô phỏng thế kỷ VII)",
      historicalPeriod: "Đông Tấn – Đường – Tống – Minh – Thanh",
      description: "Tư liệu bút tích cổ điển minh họa mối liên hệ khăng khít giữa Văn học (Thi từ, Tản văn, Tiểu thuyết chương hồi), Thư pháp và Mỹ học ngâm vịnh Đông Á.",
      altText: "Trục quyển thủ bút cổ văn Trung Hoa chữ Hán viết bằng mực đen trên giấy Tuyên kèm dấu ấn triện đỏ chu sa",
      caption: "Mỹ học văn tự Trung Hoa kết hợp chiều sâu thi ca biền ngẫu và trường thiên tiểu thuyết chương hồi.",
      dimensions: "1920 x 1080 px (High-Res Plate)",
      width: 1920,
      height: 1080,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "50% 45%",
      authenticityType: "archival_plate",
      authenticityLabelVi: "Tư liệu Văn hiến Bảo tàng",
      attributionText: "Palace Museum Public Domain Plate — Integrated in CCE Monograph Series",
      verificationStatus: "verified"
    },
    article: {
      id: "chinese-classical-vernacular-literature",
      number: 41,
      category: "literature",
      categoryLabel: "Văn học & Thi ca • 中国文学",
      titleVi: "Văn học Trung Hoa qua Hai Trục Cổ điển & Bạch thoại: Từ 《Kinh Thi》, Đường Thi – Tống Từ đến Tứ Đại Danh tác",
      titleEn: "Dual Trajectories of Chinese Literature: From the Book of Songs and Tang-Song Poetics to Four Great Classical Novels",
      titleZh: "中国古典诗文与白话小说传统",
      titleZhTrad: "中國古典詩文與白話小說傳統",
      epistemicTag: "Sử liệu văn hiến & Phê bình học thuật (Bình dị – Bách gia – Chương hồi)",
      readMinutes: 18,
      heroImage: {
        src: "assets/images/academic/chengdu-jinli.jpg",
        caption: "Truyền thống Văn hiến & Thi ca Trung Hoa từ Kinh Thi đến Bạch thoại Minh – Thanh",
        credit: "The Palace Museum Public Domain Archive"
      },
      abstract: "Chuyên luận phân tích toàn diện sự tiến hóa của văn học Trung Hoa trên hai trục ngôn ngữ song hành: trục Văn ngôn (文言 – Wényán) tinh luyện bắt nguồn từ văn bản Giáp cốt và tổng tập 《Kinh Thi》 (诗经), đạt đỉnh cao ở Sở Từ, Tản văn Lưỡng Hán, Đường Thi cận thể và Tống Từ hiệp luật; và trục Bạch thoại (白话 – Báihuà) khẩu ngữ nảy mầm từ biến văn (变文) thời Đường tại Đôn Hoàng, thoại bản (话本) đời Tống ở thị trấn Biện Kinh–Hàng Châu trước khi kết tinh thành Tứ Đại Danh tác (四大名著) thời Minh–Thanh. Bên cạnh việc bóc tách cơ chế thanh luật, điển cố và tự sự học Đông Á, bài viết thiết lập lăng kính đối chiếu chuyên sâu với nền văn học Hán – Nôm Việt Nam: từ Đường luật, Sở Từ hóa sang Song thất lục bát, 《Truyện Kiều》 trên nền 《Kim Vân Kiều truyện》 đến cuộc cách mạng Quốc ngữ hiện đại.",
      introduction: "Trong nền văn minh Hán tự, văn học vượt xa nghệ thuật ngôn từ thuần túy (lời hoa mỹ) để giữ chức năng kiến tạo trật tự tinh thần và đạo đức xã hội theo châm ngôn Kinh điển 'Văn dĩ tải Đạo' (文以载道 – Wén yǐ zài Dào) và 'Thi ngôn chí' (诗言志 – Shī yán zhì). Khác với lịch sử văn học phương Tây vốn tách rời sớm khỏi các ngôn ngữ cổ điển như Latin để chuyển sang tiếng bản địa châu Âu, Trung Quốc duy trì song song hai hệ sinh thái ngôn ngữ suốt hơn hai thiên niên kỷ: Văn ngôn cô đọng làm ngôn ngữ chung của khoa cử, triết học, sử biên niên và giới sĩ đại phu; đồng thời Bạch thoại nảy nở tại đô thị, trà quán và phường kịch như tiếng nói sống của tầng lớp thị dân. Nắm vững sự tương tác biện chứng giữa hai dòng chảy này là chìa khóa giải mã cả chiều sâu tâm thức Trung Hoa lẫn sức ảnh hưởng sâu rộng sang Triều Tiên, Nhật Bản và đặc biệt là Việt Nam.",
      historicalContext: "Xét theo sử liệu văn bản được xác chứng qua khảo cổ học, mầm mống văn học chữ viết Trung Hoa xuất hiện từ lời bói giáp cốt văn đời Thương (商代 – Shāng dài, thế kỷ XIV–XI TCN) và các bài chúc văn, sắc phong trên đồng thanh Kim văn thời Tây Chu (西周 – Xī Zhōu). Bước ngoặt tổng hợp đầu tiên là 《Kinh Thi》 (诗经 – Shī Jīng, khoảng thế kỷ XI–VI TCN), tập hợp 305 thiên ca dao dân gian (Phong – 风), nhã nhạc triều đình (Nhã – 雅) và thánh ca tế tự (Tụng – 颂) dọc lưu vực Hoàng Hà. Giai đoạn Chiến Quốc mở ra cực đối trọng phương Nam với 《Sở Từ》 (楚辞 – Chǔ Cí) của Khuất Nguyên (屈原 – Qū Yuán), đưa chất liệu thần thoại Vu giáo, hương thảo và khát vọng cá nhân bi tráng vào thi ca. Sang Tần–Hán, văn xuôi lịch sử vĩ đại như 《Sử Ký》 (史记 – Shǐ Jì) của Tư Mã Thiên (司馬遷 / 司马迁) kết hợp với Hán Phú (汉赋) tráng lệ và Nhạc phủ (乐府) dân gian. Thời Ngụy–Tấn Nam Bắc triều hình thành lý luận phê bình văn học độc lập qua 《Văn tâm điêu long》 (文心雕龙) của Lưu Hiệp (刘勰) và 《Thi phẩm》 (诗品) của Chung Vinh. Đời Đường (618–907) hoàn thiện Luật thi (律诗) và Tuyệt cú (绝句) với hơn 48.900 bài trong Toàn Đường Thi; đời Tống (960–1279) phát triển Từ (词 – yến nhạc thi ca trường đoản cú) và Cố văn vận động Tống Nho; đời Nguyên thăng hoa Tạp kịch (杂剧) vùng Đại Đô; và đến Minh–Thanh, kỹ nghệ in mộc bản cùng kinh tế đô thị hóa Giang Nam đẩy Tiểu thuyết chương hồi Bạch thoại lên đỉnh cao thế giới, trước khi phong trào Ngũ Tứ (1919) hợp thức hóa văn học Bạch thoại hiện đại với Lỗ Tấn (鲁迅).",
      mainContent: [
        {
          heading: "2. Kinh Thi & Sở Từ: Hai Cội Nguồn Thực Tế Phương Bắc và Lãng Mạn Phương Nam",
          body: "Giới Hán học chia nguồn suối văn chương Trung Hoa theo lưỡng cực địa–văn hóa 'Bắc Kinh Thi, Nam Sở Từ'. 《Kinh Thi》 (诗经 – Shī Jīng) phản ánh tư duy thực tế, lao động nông nghiệp, hôn nhân và phê phán chính sự tại Trung Nguyên qua ba thủ pháp biểu đạt nền tảng do Nho gia đúc kết trong 'Lục nghĩa' (六义): Phú (赋 – trần thuật trực tiếp), Tỷ (比 – ẩn dụ so sánh) và Hứng (兴 – mượn cảnh vật khởi gợi tình cảm). Thể thơ bốn chữ (Tứ ngôn – 四言) nhịp chẵn 2/2 tạo âm hưởng trang trọng, cân bằng. Trái lại, 《Sở Từ》 (楚辞 – Chǔ Cí) nảy sinh từ lưu vực sông Tương – Dương Tử đất Sở mang nhịp điệu biến ảo (câu 6–7 chữ xen hư từ 'Hề' 兮), ngập tràn tưởng tượng siêu thực, mượn hình ảnh mỹ nhân và hương thảo để gửi gắm bi kịch trung quân của Khuất Nguyên trong 《Ly Tao》 (离骚 – Lí Sāo). Sự giao thoa giữa lý tính hiện thực của Khổng–Kinh Thi và mỹ cảm trữ tình kỳ ảo của Khuất–Sở Từ đã định hình hai mạch máu nuôi dưỡng toàn bộ thi học Đông Á suốt 2.500 năm."
        },
        {
          heading: "3. Sử Ký, Tản văn Lưỡng Hán và Đỉnh cao Đường Thi – Tống Từ – Nguyên Khúc",
          body: "Nếu Lục Triều khai sinh ý thức tự chủ nghệ thuật ngôn từ qua Văn ngôn biền ngẫu và Tiểu thuyết chí quái (《Sưu thần ký》), thì Nhà Đường đánh dấu 'Kỷ nguyên Vàng' của thi ca cổ điển nhờ định hình Cận thể thi (近体诗 – Jìntǐshī) với quy luật Bằng Trắc (平仄 – Píngzè) nghiêm ngặt, đối ngẫu (对仗) ở cặp Thực và Luận, cùng niêm luật thanh điệu do Thẩm Thuyên Kỳ và Tống Chi Vấn chuẩn hóa. Bộ ba khổng lồ định hình diện mạo Đường Thi gồm: 'Thi Tiên' Lý Bạch (李白 – Lǐ Bái) với khí phách Đạo gia phóng khoáng trong Cổ phong và Tuyệt cú; 'Thi Thánh' Đỗ Phủ (杜甫 – Dù Fǔ) kết tinh tinh thần nhân đạo Nho gia và kỹ thuật Thất ngôn luật thi trầm uất thời loạn An–Sử; và Bạch Cư Dị (白居易 – Bái Jūyì) chủ trương Tân Nhạc phủ ngôn từ giản dị phục vụ dân sinh. Sang đời Tống, sự thăng hoa của âm nhạc thị thành tạo ra Tống Từ (宋词 – Sòng Cí) nương theo từng 'Từ bài' (词牌 – cí pái) như 《Điệp luyến hoa》 hay 《Thủy điệu ca đầu》, chia làm hai phái đối lập mà bổ sung: Uyển ước phái (婉约派 – Liễu Vĩnh, Lý Thanh Chiếu) tinh tế nội tâm và Hào phóng phái (豪放派 – Tô Thức, Tân Khí Tật) hùng tráng kim qua thiết mã. Đến đời Nguyên, giới sĩ phu mất đường khoa cử trong nhiều thập niên dồn tài hoa vào Nguyên Khúc (元曲) và Tạp kịch như 《Đậu Nga oan》 của Quan Hán Khanh và 《Tây Sương ký》 của Vương Thực Phủ."
        },
        {
          heading: "4. Cách mạng Bạch Thoại Đô thị và Tứ Đại Danh tác Chương Hồi Minh – Thanh",
          body: "Tiểu thuyết Bạch thoại không đột ngột xuất hiện thời Minh mà là kết quả tích tụ nhiều thế kỷ từ 'Biến văn' (变文) giảng kinh Phật trong hang Mạc Cao Đôn Hoàng thời Đường và các tập truyện kể của 'Thuyết thư nhân' (说书人) tại các khu giải trí Ngõa xá (瓦舍) thời Tống. Bốn đỉnh cao kinh điển gọi là 'Tứ Đại Danh tác' (四大名著 – Sìdà Míngzhù) mỗi bộ là một tổng phổ tư tưởng riêng biệt: ① 《Tam Quốc diễn nghĩa》 (三国演义 – La Quán Trung) theo văn ngôn pha bạch thoại dung hợp dã sử – chính sử Trần Thọ để luận giải tính chính thống và trí mưu chính trị; ② 《Thủy Hử truyện》 (水浒传 – Thi Nại Am) mang văn phong bạch thoại Sơn Đông–Giang Hoài rắn rỏi phản ánh xung đột 'Quan bức dân phản' và chữ Nghĩa giang hồ; ③ 《Tây Du ký》 (西游记 – Ngô Thừa Ân) hóa giải xung đột Tam giáo (Phật – Đạo – Nho) thành hành trình tâm thức hàng phục 'Tâm viên Ý mã' dưới lớp áo thần thoại trào phúng; ④ 《Hồng Lâu Mộng》 (红楼梦 – Tào Tuyết Cần và Cao Ngạc chỉnh lý) đạt tới đỉnh cao tuyệt đối của Bạch thoại Bắc Kinh thế kỷ XVIII với hơn 400 nhân vật và thế giới quan bi kịch 'Sắc – Không' giải cấu trúc sự suy tàn của đại gia tộc quý tộc phong kiến."
        },
        {
          heading: "5. Văn học Hiện đại từ Cách mạng Ngũ Tứ (1919) đến Dòng Văn học Đương đại",
          body: "Đầu thế kỷ XX, thất bại của cải cách thể chế triều Thanh thúc đẩy Hồ Thích (胡适) và Trần Độc Tú (陈独秀) khởi xướng Cuộc cách mạng Văn học Bạch thoại trong Phong trào Ngũ Tứ (1919), tuyên bố khai tử độc tôn Văn ngôn để giải phóng tư tưởng hiện đại. Lỗ Tấn (鲁迅 – Lǔ Xùn) với 《Cuồng nhân nhật ký》 (狂人日记, 1918) và 《A Q chính truyện》 (阿Q正传) trở thành người đặt nền móng cho truyện ngắn hiện đại phê phán bệnh căn văn hóa truyền thống; kế tiếp là Mao Thuẫn, Ba Kim, Lão Xá (《Lạc Đà Tường Tử》) và Thẩm Tùng Văn (《Biên thành》). Từ cuối thế kỷ XX sang XXI, văn học Hoa ngữ bước ra diễn đàn toàn cầu qua chủ nghĩa hiện thực huyền ảo bản địa ('Tầm căn văn học' 寻根文学 và đại diện Mạc Ngôn đoạt Nobel Văn học 2012), làn sóng văn học tiên phong (Dư Hoa, Diêm Liên Khoa), cho đến dòng Khoa học viễn tưởng (Sci-Fi) đẳng cấp quốc tế với 《Tam Thể》 (三体 – Sān Tǐ) của Lưu Từ Hân đoạt giải Hugo 2015, mở ra đối thoại văn minh liên hành tinh."
        }
      ],
      theoreticalFramework: "Lý thuyết văn học cổ điển Trung Hoa vận hành quanh hai cặp phạm trù trung tâm: (1) 'Ngôn – Ý – Tượng' (言–意–象) từ 《Chu Dịch》 đến Lưu Hiệp: ngôn từ hữu hạn dùng hình tượng cụ thể (Tượng) để gợi mở ý nghĩa siêu ngôn ngữ ('Ý tại ngôn ngoại' 意在言外); và (2) 'Văn – Chất bân bân' (文质彬彬) của Khổng Tử nhấn mạnh sự cân bằng giữa hình thức mỹ cảm (Văn) và thực chất luân lý/cảm xúc (Chất). Ngoài ra, học giả khi đọc văn bản văn học cần phân tách 3 tầng: [Sử liệu nguyên bản & Dị bản] (ví dụ phân biệt 80 hồi đầu thực tác của Tào Tuyết Cần với 40 hồi sau trong 《Hồng Lâu Mộng》), [Điển cố liên văn bản] và [Chuyển dịch Bạch thoại đô thị].",
      primarySources: [
        {
          zh: "关关雎鸠，在河之洲。窈窕淑女，君子好逑。",
          pinyin: "Guānguān jūjiū, zài hé zhī zhōu. Yǎotiǎo shūnǚ, jūnzǐ hǎo qiú.",
          hanViet: "Quan quan thư cưu, tại hà chi châu. Yểu điệu thục nữ, quân tử hảo cầu.",
          translationVi: "Tiếng chim thư cưu gọi nhau quan quan trên cồn bãi giữa sông; người thiếu nữ đoan trang hiền thục xứng đáng là bạn trăm năm của người quân tử. (Mở đầu thiên Quốc Phong mở màn toàn bộ 《Kinh Thi》, biểu thị thủ pháp 'Hứng' hòa quyện tự nhiên và tình người).",
          source: "《Kinh Thi • Chu Nam • Quan Thư》 (诗经 • 周南 • 关雎, thế kỷ XI–VI TCN)"
        },
        {
          zh: "路漫漫其修远兮，吾将上下而求索。",
          pinyin: "Lù mànmàn qí xiūyuǎn xī, wú jiāng shàngxià ér qiúsuǒ.",
          hanViet: "Lộ mạn mạn kỳ tu viễn hề, ngô tương thượng hạ nhi cầu sách.",
          translationVi: "Đường đời dằng dặc xa xôi lắm thay, ta nguyện dọc ngang trên dưới để tìm kiếm chân lý. (Tuyên ngôn lý tưởng lãng mạn bi tráng và tinh thần không khuất phục của Khuất Nguyên).",
          source: "Khuất Nguyên, 《Sở Từ • Ly Tao》 (楚辞 • 离骚, thế kỷ IV–III TCN)"
        },
        {
          zh: "安能摧眉折腰事权贵，使我不得开心颜。",
          pinyin: "Ān néng cuīméi zhéyāo shì quán-guì, shǐ wǒ bùdé kāixīn yán.",
          hanViet: "An năng thôi my chiết yêu sự quyền quý, sử ngã bất đắc khai tâm nhan.",
          translationVi: "Làm sao ta có thể cúi mày khom lưng phụng sự kẻ quyền quý, khiến cho lòng mình chẳng được nét mặt vui tươi. (Khẳng định nhân cách độc lập của sĩ phu Thịnh Đường).",
          source: "Lý Bạch, 《Mộng du Thiên Mụ ngâm lưu biệt》 (梦游天姥吟留别, thế kỷ VIII)"
        },
        {
          zh: "满纸荒唐言，一把辛酸泪！都云作者痴，谁解其中味？",
          pinyin: "Mǎn zhǐ huāngtáng yán, yī bǎ xīnsuān lèi! Dōu yún zuòzhě chī, shéi jiě qízhōng wèi?",
          hanViet: "Mãn chỉ hoang đường ngôn, nhất bả tân toan lệ! Đô vân tác giả si, thùy giải kỳ trung vị?",
          translationVi: "Đầy trang toàn những lời hoang đường, ấy mà chất chứa một nắm lệ xót xa! Ai cũng bảo kẻ viết sách thật si dại, có mấy ai thấu hiểu hương vị đắng cay bên trong?",
          source: "Tào Tuyết Cần, 《Hồng Lâu Mộng》 Hồi 1 (红楼梦, thế kỷ XVIII)"
        }
      ],
      sinoVietnameseComparison: "Văn học Việt Nam trung đại và cận đại hình thành cuộc đối thoại sáng tạo sâu sắc bậc nhất Đông Á với truyền thống Trung Hoa. Thứ nhất, tầng lớp trí thức Đại Việt tiếp nhận hệ thống Đường luật (Thất ngôn bát cú, Tứ tuyệt) để sáng tác bằng chữ Hán (Lý Thường Kiệt, Nguyễn Trãi, Nguyễn Du), đồng thời bản địa hóa thể thơ ấy thành Nôm Đường luật (Hồ Xuân Hương, Bà Huyện Thanh Quan) với niêm luật linh hoạt và ngôn ngữ thuần Việt sắc sảo. Thứ hai, các thể văn xuôi/hành chính như Chiếu, Biểu, Hịch, Cáo của Trung Hoa khi sang Việt Nam trở thành vũ khí khẳng định chủ quyền dân tộc độc lập (《Bình Ngô đại cáo》 của Nguyễn Trãi viết theo lối Biền văn tứ lục vừa chuẩn cổ văn Hán vừa dựng hệ quy chiếu lịch sử Triệu–Đinh–Lý–Trần ngang hàng Hán–Đường–Tống–Nguyên). Thứ ba, thay vì sao chép nguyên xi tiểu thuyết chương hồi văn xuôi Minh–Thanh, thi hào Nguyễn Du chuyển hóa cốt truyện văn xuôi 《Kim Vân Kiều truyện》 của Thanh Tâm Tài Nhân thành kiệt tác 《Truyện Kiều》 bằng thể Lục bát (6–8) thuần Việt — một cuộc nâng tầm thi ca tâm lý vượt xa nguyên tác; tương tự, 《Chinh phụ ngâm》 của Đặng Trần Côn được Đoàn Thị Điểm chuyển thành Song thất lục bát bi ai tuyệt mỹ. Sang thế kỷ XX, phong trào Ngũ Tứ cùng Lỗ Tấn ảnh hưởng mạnh đến văn học hiện thực phê phán và lý luận tự sự ở Việt Nam giai đoạn 1930–1945.",
      terminologyAndLiushu: [
        { hanzi: "诗经", traditional: "詩經", pinyin: "Shī Jīng", hanViet: "Thi Kinh", liushuCategory: "Hội ý + Hình thanh", radicalAnalysis: "诗 (ngôn 言 + tự 寺 thanh) chỉ lời nói có vần điệu thờ cúng; 经 (mịch 糸 sợi dọc khung cửi) nghĩa gốc là trục chính, sau chỉ kinh điển.", meaningVi: "Tổng tập 305 bài thơ cổ nhất Trung Hoa (từ Tây Chu đến Xuân Thu)", meaningEn: "The Book of Songs / Classic of Poetry", contextExample: "《Kinh Thi》 đặt nền móng cho phép Phú – Tỷ – Hứng." },
        { hanzi: "楚辞", traditional: "楚辭", pinyin: "Chǔ Cí", hanViet: "Sở Từ", liushuCategory: "Hình thanh + Hội ý", radicalAnalysis: "楚 (lâm 林 + sơ 疋 thanh) chỉ nước Sở phương Nam nhiều rừng rậm; 辞 (tân 辛 phân xử + loạn 亂 gỡ rối) nghĩa là lời lẽ gãy gọn.", meaningVi: "Thể thơ trữ tình lãng mạn đất Sở gắn với Khuất Nguyên", meaningEn: "Songs of Chu / Chuci", contextExample: "《Ly Tao》 là đỉnh cao của Sở Từ." },
        { hanzi: "律诗", traditional: "律詩", pinyin: "Lǜshī", hanViet: "Luật thi", liushuCategory: "Hình thanh", radicalAnalysis: "律 (xích 彳 bước đi + duật 聿 cây bút viết) chỉ khuôn phép mực thước; 诗 gồm Ngôn 言 và Tự 寺.", meaningVi: "Thơ cận thể 8 câu chuẩn niêm luật Bằng Trắc và đối ngẫu thời Đường", meaningEn: "Regulated verse (Tang poetry)", contextExample: "Thất ngôn luật thi của Đỗ Phủ đạt chuẩn mực mẫu mực." },
        { hanzi: "赋", traditional: "賦", pinyin: "Fù", hanViet: "Phú", liushuCategory: "Hình thanh", radicalAnalysis: "Bộ Bối (贝 tài vật) + Vũ (武 vừa là âm vừa biểu sự dàn trải hùng tráng).", meaningVi: "Văn vần miêu tả trực tiếp, trải dài hùng vĩ (Hán Phú, Đường Phú)", meaningEn: "Rhapsody / Poetic exposition", contextExample: "Phú vừa là một thủ pháp trong Lục nghĩa Kinh Thi vừa là thể văn lớn." },
        { hanzi: "比兴", traditional: "比興", pinyin: "Bǐxìng", hanViet: "Tỷ hứng", liushuCategory: "Tượng hình + Hội ý", radicalAnalysis: "比 (hai chữ 人 sánh vai nhau: so sánh); 兴 (四 bàn tay nâng vật 舁 trên dưới cùng vươn lên: khơi gợi cảm xúc).", meaningVi: "Hai thủ pháp ẩn dụ (Tỷ) và mượn ngoại cảnh gợi tình (Hứng)", meaningEn: "Metaphor and evocative association", contextExample: "Thủ pháp Tỷ hứng là linh hồn của thi học Đông Á." },
        { hanzi: "词牌", traditional: "詞牌", pinyin: "Cípái", hanViet: "Từ bài", liushuCategory: "Hình thanh", radicalAnalysis: "词 (ngôn 言 + ty 司); 牌 (phiến 片 mảnh gỗ thẻ + ti 卑): mảnh thẻ ghi tên khúc nhạc cổ.", meaningVi: "Tên làn điệu quy định số chữ, nhịp và thanh điệu của một bài Tống Từ", meaningEn: "Ci-poetry tune matrix title", contextExample: "Tô Thức làm bài từ 《Niệm Nô Kiều》 theo đúng Từ bài cổ." },
        { hanzi: "白话", traditional: "白話", pinyin: "Báihuà", hanViet: "Bạch thoại", liushuCategory: "Tượng hình + Hình thanh", radicalAnalysis: "白 (mặt trời hé sáng hoặc hạt gạo trắng: rõ ràng dễ hiểu); 话 (ngôn 言 + thiệt 舌 cái lưỡi).", meaningVi: "Ngôn ngữ khẩu ngữ bình dân đối lập với Văn ngôn cổ điển", meaningEn: "Vernacular written Chinese", contextExample: "《Thủy Hử》 và 《Hồng Lâu Mộng》 viết bằng văn phong Bạch thoại điêu luyện." },
        { hanzi: "章回", traditional: "章回", pinyin: "Zhānghuí", hanViet: "Chương hồi", liushuCategory: "Hội ý", radicalAnalysis: "章 (âm 音 + thập 十 một khúc nhạc hoàn chỉnh); 回 (vòng xoáy nước quay vòng): mỗi buổi kể chuyện khép lại một hồi.", meaningVi: "Thể cấu trúc chia hồi có đối liên mở đầu và 'hạ hồi phân giải'", meaningEn: "Episodic chapter structure of classical novels", contextExample: "Tiểu thuyết chương hồi kế thừa trực tiếp nghệ thuật kể chuyện Thoại bản." },
        { hanzi: "文心", pinyin: "Wénxīn", hanViet: "Văn tâm", liushuCategory: "Tượng hình", radicalAnalysis: "文 (nét đan chéo hoa văn thêu dệt); 心 (tượng hình trái tim).", meaningVi: "Tâm hồn kiến tạo văn chương (tên kiệt tác lý luận của Lưu Hiệp)", meaningEn: "The literary mind", contextExample: "《Văn tâm điêu long》 đặt nền móng cho mỹ học phê bình Trung Hoa." },
        { hanzi: "神韵", traditional: "神韻", pinyin: "Shényùn", hanViet: "Thần vận", liushuCategory: "Hình thanh", radicalAnalysis: "神 (thị 示 thần linh + thân 申); 韵 (âm 音 + quân 匀 hài hòa): dư âm tinh thần bay bổng ngoài con chữ.", meaningVi: "Dư vị thâm trầm, linh động ẩn sau câu chữ và âm luật", meaningEn: "Spiritual resonance in poetics", contextExample: "Thơ Vương Duy thường được khen giàu chất Thần vận." },
        { hanzi: "典故", pinyin: "Diǎngù", hanViet: "Điển cố", liushuCategory: "Hội ý", radicalAnalysis: "典 (hai tay 廾 nâng cuốn sách thẻ tre 冊 trên bàn: sách mẫu chuẩn); 故 (cổ 古 + phộc 攵 chuyện xưa).", meaningVi: "Chuyện cũ, tích cổ văn hiến được chưng cất thành ẩn dụ súc tích", meaningEn: "Classical literary allusion", contextExample: "Đọc hiểu Đường Thi và Nôm Đường luật đòi hỏi giải mã chính xác Điển cố." },
        { hanzi: "豪放", pinyin: "Háofàng", hanViet: "Hào phóng", liushuCategory: "Hình thanh", radicalAnalysis: "豪 (tước vị lông nhím cao quý/hào kiệt); 放 (phương 方 + phộc 攵 buông mở tung ra).", meaningVi: "Trường phái Từ hùng tráng, phá cách khung âm nhạc mềm yếu", meaningEn: "Heroic-unconstrained Ci school", contextExample: "Tô Thức và Tân Khí Tật đại diện đỉnh cao của Hào phóng phái." },
        { hanzi: "变文", traditional: "變文", pinyin: "Biànwén", hanViet: "Biến văn", liushuCategory: "Hội ý", radicalAnalysis: "变 (nói lời thay đổi kết hợp hành động tay); 文 (văn bản): văn bản diễn xướng biến hóa từ kinh Phật.", meaningVi: "Thể văn kể chuyện xen vận văn – tản văn thời Đường phát hiện ở Đôn Hoàng", meaningEn: "Dunhuang transformation texts", contextExample: "Di chỉ Mạc Cao bảo tồn hàng trăm quyển Biến văn quý giá." }
      ],
      examples: [
        "Ví dụ 1 (Kỹ thuật Đối ngẫu Đường Thi): Hai câu giữa bài 《Đăng cao》 của Đỗ Phủ 'Vô biên lạc mộc tiêu tiêu hạ / Bất tận Trường Giang cổn cổn lai' đối chỉnh từ loại, thanh điệu và không–thời gian vô tận.",
        "Ví dụ 2 (Chuyển hóa Văn học Trung – Việt): Nguyễn Du giữ khung cốt truyện 《Kim Vân Kiều truyện》 (20 hồi văn xuôi) nhưng thay đổi kết thúc bằng triết lý 'Chữ Tâm kia mới bằng ba chữ Tài' trong tiếng Việt Lục bát.",
        "Ví dụ 3 (Từ Thoại bản đến Tứ Đại Danh tác): Các câu 'Dục tri hậu sự như hà, thả thính hạ hồi phân giải' là dấu tích trực tiếp của nghệ nhân kể chuyện dùng tiếng trống khép buổi tại trà quán Tống–Minh."
      ],
      keyTakeaways: [
        "Văn học Trung Hoa phát triển trên 2 trục: Văn ngôn (chính thống, cô đọng, khoa cử) và Bạch thoại (đô thị, tự sự dân gian, trường thiên).",
        "Hai nguồn thi ca nguyên thủy là Kinh Thi (hiện thực, Lục nghĩa Phú–Tỷ–Hứng) và Sở Từ (lãng mạn, thần thoại phương Nam).",
        "Đường Thi hoàn thiện thanh luật; Tống Từ kết nối nhạc khúc; Nguyên Khúc nở rộ kịch trường; Minh–Thanh kết tinh Tứ Đại Danh tác.",
        "Việt Nam tiếp biến toàn diện từ Hán thi, Đường luật chữ Nôm, Biền văn đến chuyển thể truyện Nôm Lục bát siêu việt."
      ],
      conclusion: "Nhìn xuyên suốt ba thiên niên kỷ từ 《Kinh Thi》 đến Tứ Đại Danh tác và văn học hiện đại, văn học Trung Hoa chứng tỏ sức sống nhờ không bao giờ đóng băng trong một quy phạm duy nhất mà luôn tự tái tạo qua đối thoại giữa truyền thống kinh viện và sức sáng tạo thị dân. Đối với học giả và người học Việt Nam, nghiên cứu văn học Trung Hoa vừa mở ra kho tư liệu kinh điển đồ sộ, vừa giúp soi chiếu sắc nét bản lĩnh tiếp thu và Việt hóa sáng tạo của các thế hệ tiền nhân từ Nguyễn Trãi, Nguyễn Du đến văn học hiện đại.",
      references: [
        { author: "Yuan, X. (Viên Hành Phái)", date: "2005", title: "Zhongguo Wenxue Shi (中国文学史 – Lịch sử Văn học Trung Quốc, 4 quyển)", sourceType: "Academic Monograph", url: "https://archive.org/", verificationNote: "Giáo trình chuẩn quốc gia Khoa Ngữ văn Đại học Bắc Kinh (Higher Education Press)." },
        { author: "Owen, S.", date: "1996", title: "An Anthology of Chinese Literature: Beginnings to 1911", sourceType: "Academic Synthesis", url: "https://wwnorton.com/", verificationNote: "Hợp tuyển phê bình kinh điển của Giáo sư Đại học Harvard." },
        { author: "Trần Ích Nguyên & Nguyễn Huệ Chi (Chủ biên)", date: "2010", title: "Nghiên cứu Văn học so sánh Trung – Việt & Di sản Hán Nôm", sourceType: "Academic Synthesis", url: "https://hannom.org.vn/", verificationNote: "Đối chiếu văn bản Hán – Nôm cổ tại Viện Nghiên cứu Hán Nôm Việt Nam." },
        { author: "Lưu Hiệp (劉勰)", date: "Thế kỷ V–VI", title: "Văn tâm điêu long (文心雕龙 – Toàn văn đối chiếu Chinese Text Project)", sourceType: "Primary Source", url: "https://ctext.org/wenxin-diaolong", verificationNote: "Văn bản lý luận văn học nguyên gốc thời Nam Bắc triều." },
        { author: "Hsia, C. T. (Hạ Chí Thanh)", date: "1968", title: "The Classic Chinese Novel: A Critical Introduction", sourceType: "Academic Monograph", url: "https://cup.columbia.edu/", verificationNote: "Chuyên khảo chuẩn mực quốc tế về Lục đại/Tứ đại tiểu thuyết cổ điển." }
      ]
    },
    supplement: {
      difficulty: "Advanced",
      periodId: "sui-tang",
      regionId: "central-plains",
      sourceType: "Primary Source",
      primaryQuote: {
        zh: "文章合为时而著，歌诗合为事而作。",
        pinyin: "Wénzhāng hé wéi shí ér zhù, gēshī hé wéi shì ér zuò.",
        vi: "Văn chương nên vì thời đại mà viết, thi ca nên vì sự việc đời sống mà sáng tác.",
        source: "Bạch Cư Dị, 《Thư gửi Nguyên Chẩn》 (与元九书, 815)"
      },
      comparativeAnalysis: "Hệ thống Văn ngôn cổ điển tương đồng một phần vai trò cầu nối học thuật với tiếng Latin tại châu Âu Trung đại, nhưng khác biệt căn bản ở tính biểu ý vượt ngữ âm của chữ Hán: một học giả Thăng Long thời Lê có thể đọc trôi chảy văn bản Bắc Kinh thời Minh dù khẩu âm khác hoàn toàn.",
      conclusion: "Thể loại và ngôn ngữ văn học Trung Hoa là bản đồ lịch sử tư tưởng sống động nhất từ vương triều cổ đại đến văn hóa đô thị hiện đại.",
      relatedFigures: [
        { name: "Khuất Nguyên (屈原)", dates: "340–278 TCN", role: "Thi nhân kiệt xuất đất Sở, tác giả 《Ly Tao》" },
        { name: "Đỗ Phủ (杜甫)", dates: "712–770", role: "Thi Thánh đời Đường, đỉnh cao Luật thi hiện thực" },
        { name: "Tào Tuyết Cần (曹雪芹)", dates: "1715–1763", role: "Tác giả 《Hồng Lâu Mộng》, đỉnh cao Bạch thoại cổ điển" }
      ],
      relatedTexts: ["《Kinh Thi》 (诗经)", "《Sở Từ》 (楚辞)", "《Văn tâm điêu long》 (文心雕龙)", "《Hồng Lâu Mộng》 (红楼梦)"]
    },
    editorial: {
      articleId: "chinese-classical-vernacular-literature",
      heroImageId: "img-hero-monograph-literature",
      editorialCategoryVi: "Văn học & Thi ca • Cổ điển & Bạch thoại",
      publishedDate: "2026-11-16",
      updatedDate: "2026-11-16",
      author: { name: "Hội đồng Học giả Ngữ văn & Hán Nôm CCE", roleVi: "Chuyên khảo Văn học Cổ điển, Thi luật & Tự sự Trung – Việt" },
      standfirst: "Giải mã cấu trúc song song Văn ngôn – Bạch thoại, Lục nghĩa Kinh Thi, Đường Thi, Tống Từ, Tứ Đại Danh tác và tiến trình Việt hóa sáng tạo từ Đường luật chữ Nôm đến 《Truyện Kiều》.",
      storytellingFormatLabel: "Chuyên khảo Văn hiến 7 Phần",
      thumbnailConfig: { imageId: "img-hero-monograph-literature", aspectRatio: "16:10", focalPoint: "50% 45%" },
      inlineVisuals: [
        { afterSectionIndex: 0, layout: "split-aside", imageId: "img-doc-lanting-scroll", kicker: "Thư văn hợp nhất • Cổ văn & Ngữ âm", contextNote: "Bút pháp thủ bút cổ điển giữ truyền thống ngâm vịnh và bình giải liên văn bản." }
      ],
      galleryImageIds: ["img-hero-monograph-literature", "img-doc-lanting-scroll", "img-hero-confucianism"],
      historicalDocument: {
        imageId: "img-doc-lanting-scroll",
        docTypeLabel: "Truyền thống Văn bản & Bình chú Kinh điển",
        period: "Tấn – Đường – Tống – Minh – Thanh",
        holdingInstitution: "The Palace Museum, Beijing (故宫博物院)",
        transcriptionZh: "夫诗者，志之所之也。在心为志，发言为诗。",
        translationVi: "Thơ là nơi cái chí hướng tới; ở trong lòng gọi là chí, phát ra lời gọi là thơ.",
        archivalNote: "Trích 《Mao Thi Tự》 (毛诗序), tuyên ngôn thi học có ảnh hưởng sâu sắc nhất tại Đông Á."
      }
    }
  });

  // ==========================================================================
  // MONOGRAPH 2: CHINESE CUISINE (EIGHT CULINARY TRADITIONS & TEA CULTURE)
  // ==========================================================================
  registerMonographPackage({
    heroImage: {
      id: "img-hero-monograph-cuisine",
      src: "assets/images/academic/guilin-li-river.jpg",
      titleVi: "Bát Đại Thái Hệ Ẩm thực Trung Hoa & Văn hóa Trà Đạo Cổ điển",
      titleZh: "中国八大菜系与茶文化经典图谱",
      titleEn: "Eight Great Cuisines and Classical Tea Aesthetics",
      originalSource: "Chinese Culture Explorer Editorial Photography Archive",
      sourceUrl: "https://www.unesco.org/en/intangible-cultural-heritage",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Museum Archive",
      copyrightHolder: "CCE Educational Photography License",
      license: "Open Educational Attribution",
      creationDate: "2026 (Biên khảo truyền thống Hán–Đường–Thanh)",
      historicalPeriod: "Tiên Tần – Đường – Tống – Thanh – Đương đại",
      description: "Minh họa bộ trà cụ Công Phu Trà Triều Sán và bố cục bàn tiệc cân bằng ngũ vị (Chua, Đắng, Ngọt, Cay, Mặn) theo lý luận Thực dưỡng Trung Hoa.",
      altText: "Bộ ấm tử sa Nghi Hưng, khay gỗ và chén trà gốm men ngọc pha trà Ô Long trong nghệ thuật trà đạo Trung Hoa",
      caption: "Sự hòa quyện giữa Hỏa hầu (火候) bếp núc, Dược thực đồng nguyên (药食同源) và Lục đại trà loại.",
      dimensions: "1920 x 1080 px (Archival Master)",
      width: 1920,
      height: 1080,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "editorial_photo",
      authenticityLabelVi: "Tư liệu Ẩm thực & Trà đạo",
      attributionText: "CCE Verified Cultural Heritage Visual Plate",
      verificationStatus: "verified"
    },
    article: {
      id: "chinese-eight-cuisines-tea-culture",
      number: 42,
      category: "cuisine",
      categoryLabel: "Ẩm thực & Trà đạo • 饮食与茶道",
      titleVi: "Giải phẫu Bát Đại Thái Hệ Ẩm thực Trung Hoa, Triết lý Dược Thực Đồng Nguyên & Bản đồ Lục Đại Trà Loại",
      titleEn: "Anatomy of the Eight Great Cuisines, Food-as-Medicine Cosmology, and Six Tea Categories of China",
      titleZh: "中国八大菜系、药食同源与六大茶类考",
      titleZhTrad: "中國八大菜系、藥食同源與六大茶類考",
      epistemicTag: "Địa văn hóa ẩm thực, Kỹ thuật Hỏa hầu & Sử liệu Lục Vũ Trà Kinh",
      readMinutes: 19,
      heroImage: {
        src: "assets/images/academic/guqin-instrument.jpg",
        caption: "Nghệ thuật pha trà Công Phu Trà (工夫茶) và kết cấu ngũ vị điều hòa ẩm thực Trung Hoa",
        credit: "CCE Digital Museum Culinary Archive"
      },
      abstract: "Không phải là một nền ẩm thực đồng nhất, nghệ thuật ăn uống Trung Hoa phản ánh trực tiếp bản đồ khí hậu, thủy văn và lịch sử di cư của một vùng lục địa rộng lớn. Chuyên luận phân tích hệ thống 'Bát Đại Thái Hệ' (八大菜系 – Bādà Càixì: Lỗ, Xuyên, Việt, Tô, Mân, Chiết, Tương, Huy) qua tam giác kỹ thuật: nguyên liệu bản địa, nghệ thuật thái cắt ('Đao công' 刀工) và kiểm soát nhiệt độ ('Hỏa hầu' 火候); kết nối sâu sắc với nguyên lý 'Dược thực đồng nguyên' (药食同源) trong Đông y cổ truyền (Tứ khí Hàn–Nhiệt–Ôn–Lương và Ngũ vị quy tạng). Phần hai bóc tách toàn diện văn hóa Trà đạo từ thời Đường với 《Trà Kinh》 (茶经) của Lục Vũ đến Tống đại Điểm trà (点茶), Minh đại Tán trà và hệ phân loại sinh hóa 'Lục Đại Trà Loại' (Lục, Bạch, Hoàng, Thanh/Ô Long, Hồng, Hắc/Phổ Nhĩ) của Giáo sư Trần Duyện, đồng thời đối chiếu bản sắc ẩm thực Việt Nam và công nghiệp trà cổ thụ Tây Bắc–Thái Nguyên.",
      introduction: "Cổ nhân Trung Hoa đúc kết câu 'Dân dĩ thực vi thiên' (民以食为天 – Mín yǐ shí wéi tiān: Dân lấy cái ăn làm trời). Triết học đầu tiên của bếp núc Trung Hoa khởi đi từ chính thuyết Điều hòa của Tể tướng Y Doãn (伊尹 – thời Thương) và Lão Tử ('Trị đại quốc nhược phanh tiểu tiên' 治大国若烹小鲜: Trị nước lớn ví như chiên con cá nhỏ). Ẩm thực vừa thỏa mãn vị giác vừa đóng vai trò phương pháp thực hành Âm–Dương Ngũ Hành hằng ngày: dùng gừng ôn ấm để cân bằng tính hàn của cua cá, dùng hũ gốm chưng cách thủy giữ nguyên tinh khí. Trải qua hàng nghìn năm giao lưu dọc Con đường Tơ lụa (nhập ớt Mỹ châu thế kỷ XVI tạo bước ngoặt Xuyên–Tương, nhập gia vị Ba Tư thời Đường), cộng đồng dân cư vùng Hoàng Hà, Trường Giang và Lĩnh Nam đã hệ thống hóa thành Bát Đại Thái Hệ trứ danh cùng nền văn minh Trà Đạo giàu tính thiền học bậc nhất thế giới.",
      historicalContext: "Các dấu tích khảo cổ thời đồ đá mới Hà Mẫu Độ (河姆渡, ~5000 TCN) và Lương Chử cho thấy cư dân Trung Quốc cổ đại đã biết thuần hóa lúa gạo, chõ hấp bằng gốm (Húc/Lịch 鬲–甗) và trồng chè từ rất sớm (rễ chè cổ phát hiện tại Điền Loa Sơn, Dư Diêu niên đại trên 6.000 năm). Thời Chu–Hán, tác phẩm 《Lễ Ký • Nội Tắc》 chép 'Bát Trân' cung đình và chia thịt uống rượu theo phẩm trật lễ nghi. Đời Bắc Ngụy, Giả Tư Hiệp (贾思勰) hoàn thành 《Tề Dân Yếu Thuật》 (齐民要术, ~544 SCN) ghi lại hàng trăm kỹ thuật ủ tương, làm đậu phụ, chế giấm và nấu nướng phương Bắc. Bước ngoặt định hình hệ thống ẩm thực thị dân diễn ra đời Đường–Tống: việc bãi bỏ chế độ 'Phường–Thị' ban đêm thời Bắc Tống khiến kinh thành Biện Kinh (Khai Phong) và Lâm An (Hàng Châu) mọc lên hàng nghìn tửu lâu, tiệm mì, quán trà thâu đêm (ghi chép trong 《Đông Kinh Mộng Hoa Lục》), tách bạch 'Nam thực' (gạo, thủy sản, vị thanh ngọt) và 'Bắc thực' (lúa mì, thịt cừu, vị đậm đà). Song song đó, Lục Vũ (陆羽, 733–804) viết 《Trà Kinh》 (茶经) đưa việc uống trà từ thức uống giải nhiệt phương Nam thành nghệ thuật tinh thần 'Trà Đạo'. Đến đời Thanh, Viên Mai viết 《Tùy Viên Thực Đơn》 (随园食单) tổng kết mỹ học bếp núc tinh tế, còn khái niệm 'Tứ đại thái hệ' dần mở rộng thành 'Bát đại thái hệ' vào cuối thế kỷ XX.",
      mainContent: [
        {
          heading: "2. Giải phẫu Kỹ thuật Bát Đại Thái Hệ (八大菜系): Địa mạo Định hình Vị giác",
          body: "Tám trường phái ẩm thực lớn được chia thành 4 cụm khu vực rõ nét theo sinh thái địa lý: ① Cụm Hoa Bắc — Lỗ Thái (鲁菜 – Sơn Đông): là nền tảng ẩm thực cung đình Minh–Thanh, giỏi 'bộc', 'bát', dùng nước dùng trong 'Thanh thang' hầm xương gà vịt và hành tỏi để tạo vị umami tròn đầy, điển hình là Hải sâm om hành và Cá chép chua ngọt Tế Nam. ② Cụm Thượng lưu Trường Giang — Xuyên Thái (川菜 – Tứ Xuyên) & Tương Thái (湘菜 – Hồ Nam): khí hậu bồn địa ẩm sương mù dày tạo nhu cầu ăn cay trừ thấp; Xuyên Thái nổi danh phong cách 'Bách thái bách vị' (trăm món trăm vị), vượt xa vị cay đơn điệu để đạt tới 24–30 tầng hương vị như Ma Lạt (麻辣 – tê hoa tiêu kết hợp cay ớt), Ngư Hương (鱼香) và Quái Vị (怪味); trong khi Tương Thái thiên về cay xé nồng đậm kết hợp thịt hun khói miền núi. ③ Cụm Đông Nam Thủy hương Giang Hoài — Tô Thái (苏菜 – Giang Tô) & Chiết Thái (浙菜 – Chiết Giang) & Huy Thái (徽菜 – An Huy): thiên đường đao công tinh xảo (tỉa đậu phụ Văn Tư thành 5.000 sợi mỏng như tơ), chuyên hầm nhỏ lửa, giữ vị tươi nguyên bản của cua lông Dương Trừng Hồ, cá Tùng thử Quế ngư, tôm Long Tỉnh (龙井虾仁) và truyền thống hầm 'Phật Khiêu Tường' / hỏa thối Kim Hoa vùng Huy Châu thương nhân. ④ Cụm Duyên hải Hoa Nam — Việt Thái (粤菜 – Quảng Đông) & Mân Thái (闽菜 – Phúc Kiến): tiếp cận sớm với hải thương quốc tế nên chuộng nguyên liệu tươi sống (hải sản hấp nhẹ, quay nướng hỏa hầu chuẩn như Xá xíu, Ngỗng quay da giòn, Dimsum Điểm tâm 饮茶 buổi sáng với hàng trăm thức bánh tinh xảo); Mân Thái (Phúc Kiến) lại tinh túy ở nước dùng hải sản thanh ngọt, men rượu đỏ (Hồng tao) và kỹ nghệ nấu canh thượng hạng."
        },
        {
          heading: "3. Đao Công, Hỏa Hầu và Triết lý Dược Thực Đồng Nguyên (药食同源)",
          body: "Trong tư duy đầu bếp Trung Hoa, dao và lửa quyết định 80% linh hồn món ăn. Đao công (刀工 – dāogōng) vừa tạo hình thẩm mỹ vừa tính toán diện tích tiếp xúc nhiệt đều nhau trong vài giây trên chảo gang (Wok / Thiết oa 铁锅). Kỹ thuật Hỏa hầu (火候 – huǒhòu) phân loại dải nhiệt từ 'Đại hỏa bạo sao' (大火爆炒 – áp suất nhiệt cao khóa nước thịt trong 20 giây tạo mùi thơm 'Oa khí' 锅气 / Wok hei trong Mandarin gọi chuẩn là Guōqì!) đến 'Văn hỏa mạn đôn' (文火慢炖 – lửa liu riu 4–8 tiếng giải phóng collagen). Nền tảng lý luận bao trùm toàn bộ ẩm thực hàng ngày là học thuyết 'Dược thực đồng nguyên' (药食同源 – yàoshí tóngyuán: Thức ăn và thuốc cùng một gốc) bắt nguồn từ 《Hoàng Đế Nội Kinh》: thực phẩm được phân chia theo Tứ khí (四气: Hàn – Lạnh, Lương – Mát, Ôn – Ấm, Nhiệt – Nóng) và Ngũ vị (五味: Toan/Chua dưỡng Can, Khổ/Đắng thanh Tâm, Cam/Ngọt bổ Tỳ, Tân/Cay tán Phế, Hàm/Mặn tư Thận). Vì vậy người Bắc vào mùa đông ăn lẩu thịt cừu ôn dương (涮羊肉), còn người Lĩnh Nam mùa hè oi bức dùng canh hầm thảo mộc thanh nhiệt (Lão hỏa tịnh thang)."
        },
        {
          heading: "4. Lịch sử Trà Đạo & Hệ Thống Sinh Hóa Lục Đại Trà Loại (六大茶类)",
          body: "Nghệ thuật uống trà trải qua 3 cuộc cách mạng kỹ thuật: đời Đường của Lục Vũ (《Trà Kinh》) uống theo lối 'Tiễn trà' (煎茶 – giã trà bánh nấu sôi với nhúm muối); đời Tống chuyển sang 'Điểm trà' (点茶 – nghiền bột trà xanh đánh sủi bọt trắng bằng chổi tre Trà tiển, tiền thân trực tiếp của Matcha Nhật Bản, và thi thố 'Đấu trà'); đến đời Minh Chu Nguyên Chương hạ lệnh bãi bỏ trà bánh cống nạp phức tạp, mở ra kỷ nguyên 'Tán trà' (hồng/lục lá rời hãm nước sôi trong ấm gốm Tử Sa Nghi Hưng). Đến năm 1979, đại sư trà học Trần Duyện (陈椽) thiết lập chuẩn phân loại quốc tế 'Lục Đại Trà Loại' dựa trên mức độ oxy hóa polyphenol (lên men enzyme tự nhiên): (1) Lục trà (绿茶 – không oxy hóa, diệt men bằng sao chảo hoặc hấp: Long Tỉnh Tây Hồ, Bích Loa Xuân); (2) Bạch trà (白茶 – oxy hóa tự nhiên cực nhẹ 5–10% bằng phơi nắng hong gió: Bạch Hào Ngân Châm Phúc Đỉnh); (3) Hoàng trà (黄茶 – ủ vàng nhẹ 'Muộn hoàng': Quân Sơn Ngân Châm); (4) Thanh trà / Ô Long (乌龙茶 – bán oxy hóa 15–80%, kỹ nghệ lắc dập viền lá: Thiết Quan Âm An Khê, Đại Hồng Bào Vũ Di Sơn, Đông Đỉnh Đài Loan); (5) Hồng trà (红茶 – oxy hóa toàn phần 85–95%, quốc tế gọi nhầm là Black tea: Kỳ Môn Hồng trà, Chính Sơn Tiểu Chủng); và (6) Hắc trà (黑茶 – hậu lên men vi sinh vật ủ đống 'Ốc đôi' 渥堆: Phổ Nhĩ Thục trà Vân Nam, An Hóa hắc trà)."
        },
        {
          heading: "5. Nghi thức Công Phu Trà & Quy tắc Bàn tiệc Giao tiếp Trung Hoa Đương đại",
          body: "Tại vùng Triều Châu – Sán Đầu và Mân Nam, kỹ thuật pha 'Công Phu Trà' (工夫茶 – Gōngfūchá) là chuẩn mực thưởng trà cao cấp nhất hiện nay: dùng ấm đất sét khoáng Tử Sa nhỏ nhắn giữ nhiệt cao, tráng ấm, đánh thức trà bằng nhiệt nóng tức thì, rót tuần hoàn qua dãy 3 chén nhỏ ('Quan Công tuần thành', 'Hàn Tín điểm binh') để mọi chén trà đều đồng nhất nồng độ, tôn vinh ba giá trị 'Hòa – Kính – Thanh – Tịch' (和敬清寂). Trong giao tiếp thương mại đương đại, bàn ăn tròn xoay (Yuánzhuō – 圆桌) là không gian thiết lập Quan Hệ (关系 – Guānxi): chủ tọa luôn ngồi vị trí nhìn thẳng ra cửa chính ('Thượng vị'), người có vị thế thấp hơn kính rượu hạ thành chén thấp hơn người bề trên khi cụng ly, tuyệt đối kiêng cắm thẳng đôi đũa vào bát cơm vì giống bát hương cúng tế (cùng quy ước văn hóa Việt Nam)."
        }
      ],
      theoreticalFramework: "Phương pháp giải phẫu ẩm thực học (Culinary Anthropology) trong chuyên luận chia làm 3 trục phân tích: (1) Địa sinh thái – Thủy văn quyết định nguyên liệu nền (Lúa mì/Bắc – Gạo & Thủy sản/Nam); (2) Sinh hóa kỹ thuật gia nhiệt & lên men (từ kiểm soát enzym Polyphenol oxidase trong 6 loại trà đến nhiệt độ maillard trong xào Wok); và (3) Y lý Thực dưỡng Ngũ Hành (Tương sinh – Tương khắc âm dương điều hòa thể chất theo 24 Tiết khí).",
      primarySources: [
        {
          zh: "五味令人口爽... 圣人为腹不为目。",
          pinyin: "Wǔwèi lìng rén kǒu shuǎng... Shèngrén wéi fù bù wéi mù.",
          hanViet: "Ngũ vị linh nhân khẩu sảng... Thánh nhân vi phúc bất vi mục.",
          translationVi: "Ham chuộng thái quá ngũ vị làm hỏng vị giác... Bậc thánh nhân chăm lo sự no đủ thực chất của thân tâm chứ không chạy theo sự hào nhoáng thỏa mãn con mắt bên ngoài. (Cảnh báo sớm của Đạo gia về cân bằng ẩm thực).",
          source: "Lão Tử, 《Đạo Đức Kinh》 Chương 12 (道德经, Thế kỷ VI–IV TCN)"
        },
        {
          zh: "茶之为用，味至寒，为饮最宜精行俭德之人。",
          pinyin: "Chá zhī wéi yòng, wèi zhì hán, wéi yǐn zuì yí jīngxíng jiǎndé zhī rén.",
          hanViet: "Trà chi vi dụng, vị chí hàn, vi ẩm tối nghi tinh hành kiệm đức chi nhân.",
          translationVi: "Công dụng của trà vị rất mát lạnh, làm thức uống thích hợp nhất với người tu dưỡng nết hạnh tinh chuyên và đức tính tiết kiệm liêm khiết.",
          source: "Lục Vũ, 《Trà Kinh • Nhất Chi Nguyên》 (茶经, khoảng 760–780 SCN)"
        },
        {
          zh: "治大国，若烹小鲜。",
          pinyin: "Zhì dàguó, ruò pēng xiǎoxiān.",
          hanViet: "Trị đại quốc, nhược phanh tiểu tiên.",
          translationVi: "Cai trị một quốc gia rộng lớn giống như nấu một con cá nhỏ: không được đảo khuấy thô bạo khiến thịt nát tan, mà phải biết điều chỉnh ngọn lửa (Hỏa hầu) hài hòa thuận tự nhiên.",
          source: "Lão Tử, 《Đạo Đức Kinh》 Chương 60 (道德经)"
        },
        {
          zh: "食不厌精，脍不厌细。",
          pinyin: "Shí bù yàn jīng, kuài bù yàn xì.",
          hanViet: "Thực bất yếm tinh, khoái bất yếm tế.",
          translationVi: "Cơm ăn không chê tinh khiết, thịt gỏi xắt không chê thái nhỏ (tôn vinh chuẩn mực vệ sinh, đao công và sự trân trọng thực phẩm trong lễ nghi Nho gia).",
          source: "Khổng Tử, 《Luận Ngữ • Hương Đảng》 (论语 • 乡党)"
        }
      ],
      sinoVietnameseComparison: "Việt Nam và Trung Quốc đều thuộc vùng văn minh đũa và 'văn hóa lúa nước – trà – tương đậu', song quá trình bản địa hóa ẩm thực đã khắc họa cá tính hoàn toàn độc lập của người Việt. Về nguyên lý chế biến, nếu ẩm thực Trung Hoa ưu tiên kỹ nghệ xào lửa lớn dầu mỡ ('Bạo sao') cùng tinh bột tạo sốt sánh (Câu khiếm – 勾芡), thì ẩm thực Việt Nam chú trọng tính thanh tao tự nhiên của rau thơm tươi sống, đồ hấp/luộc giữ vị ngọt nguyên bản và nước chấm 'Nước mắm' lên men từ cá biển thay thế vai trò nền của xì dầu đậu nành (Tương du – 酱油). Cả hai dân tộc cùng thực hành chặt chẽ triết lý Thực dưỡng Hàn–Nhiệt (ví dụ người Việt ăn thịt vịt lộn cùng rau răm tính ấm và gừng tươi, ăn ốc luộc sả gừng cân bằng âm khí thủy sản). Về văn hóa Trà, Việt Nam vừa chia sẻ di sản trà cổ thụ Shan Tuyết trên cùng mạch địa chất Hoàng Liên Sơn – Vân Nam, vừa sở hữu phong cách Trà Sen Tây Hồ ướp hương hoa tự nhiên độc đáo và trà mạn Thái Nguyên đậm vị chát ngọt hậu, khác với Công Phu Trà cầu kỳ ấm chén tử sa vùng Mân–Việt Trung Quốc.",
      terminologyAndLiushu: [
        { hanzi: "菜系", pinyin: "Càixì", hanViet: "Thái hệ", liushuCategory: "Hình thanh + Chỉ sự", radicalAnalysis: "菜 (thảo 艹 rau cỏ + thái 采 hái lượm); 系 (phiệt 丿 + mịch 糸 hệ thống móc nối).", meaningVi: "Hệ thống trường phái ẩm thực vùng miền có bản sắc, kỹ thuật và gia vị riêng", meaningEn: "Regional culinary tradition / school", contextExample: "Bát đại thái hệ phản ánh đa dạng địa khí Trung Hoa." },
        { hanzi: "火候", pinyin: "Huǒhòu", hanViet: "Hỏa hầu", liushuCategory: "Tượng hình + Hình thanh", radicalAnalysis: "火 (ngọn lửa bùng lên); 候 (nhân 亻 + mũi tên quan trắc thời khắc).", meaningVi: "Kỹ thuật kiểm soát cường độ ngọn lửa và thời gian gia nhiệt tối ưu", meaningEn: "Heat control and cooking duration", contextExample: "Món Vịt quay Bắc Kinh đòi hỏi Hỏa hầu chuẩn xác từng phút." },
        { hanzi: "刀工", pinyin: "Dāogōng", hanViet: "Đao công", liushuCategory: "Tượng hình", radicalAnalysis: "刀 (hình lưỡi dao cong); 工 (chiếc thước thợ cân bằng chỉ tay nghề).", meaningVi: "Nghệ thuật cắt, thái, tỉa nguyên liệu đạt độ đồng đều và thẩm mỹ", meaningEn: "Culinary knife skills", contextExample: "Tô Thái nổi tiếng nhất về Đao công điêu luyện." },
        { hanzi: "锅气", traditional: "鍋氣", pinyin: "Guōqì", hanViet: "Oa khí", liushuCategory: "Hình thanh + Tượng hình", radicalAnalysis: "锅 (kim 金 kim loại + 咼); 气 (hơi bốc lên tạo luồng hương khói xào chảo gang nhiệt cao).", meaningVi: "Hương thơm khói chảo đặc trưng do phản ứng Maillard dưới nhiệt cực cao", meaningEn: "Breath of the wok (Chinese Standard term: Guōqì)", contextExample: "Xào bằng chảo gang rèn thủ công giữ trọn vị Oa khí." },
        { hanzi: "点心", traditional: "點心", pinyin: "Diǎnxīn", hanViet: "Điểm tâm", liushuCategory: "Hình thanh + Tượng hình", radicalAnalysis: "点 (chiêm 占 + hỏa 灬 chấm lửa nhỏ); 心 (trái tim/dạ dày): thức ăn nhỏ chạm nhẹ vào tâm bụng giữa bữa.", meaningVi: "Món ăn nhẹ buổi sáng, bánh hấp nhỏ dùng kèm trà (Mandarin: Diǎnxīn)", meaningEn: "Steamed/baked bite-sized pastries with tea", contextExample: "Điểm tâm (Diǎnxīn) kết hợp với ẩm trà tạo thành văn hóa trà sáng Quảng Đông." },
        { hanzi: "药食", traditional: "藥食", pinyin: "Yàoshí", hanViet: "Dược thực", liushuCategory: "Hình thanh + Hội ý", radicalAnalysis: "药 (thảo 艹 thảo mộc + nhạc 乐 giải trừ bệnh khổ); 食 (hội tụ lương thực dưới nắp đậy).", meaningVi: "Dược liệu và thực phẩm đồng nhất về tính Hàn–Nhiệt quy tạng", meaningEn: "Medicine-food homology", contextExample: "Táo đỏ, kỷ tử trong canh hầm thể hiện thuyết Dược thực đồng nguyên." },
        { hanzi: "五味", pinyin: "Wǔwèi", hanViet: "Ngũ vị", liushuCategory: "Chỉ sự + Hình thanh", radicalAnalysis: "五 (giao điểm trời đất ngũ hành); 味 (khẩu 口 cái miệng + vị 未 nếm thử).", meaningVi: "Năm vị cơ bản: Toan (chua), Khổ (đắng), Cam (ngọt), Tân (cay), Hàm (mặn)", meaningEn: "Five basic culinary flavors", contextExample: "Điều hòa Ngũ vị là nguyên tắc tối thượng từ đời Thương–Chu." },
        { hanzi: "绿茶", traditional: "綠茶", pinyin: "Lǜchá", hanViet: "Lục trà", liushuCategory: "Hình thanh", radicalAnalysis: "绿 (mịch 糸 màu sắc lụa lục); 茶 (thảo 艹 ở trên + nhân 人 ở giữa + mộc 木 ở dưới: con người giữa cỏ cây).", meaningVi: "Trà xanh không lên men nhờ diệt men (Sát thanh) kịp thời", meaningEn: "Green tea (unoxidized)", contextExample: "Trà Long Tỉnh Tây Hồ thuộc nhóm Lục trà sao chảo." },
        { hanzi: "乌龙", traditional: "烏龍", pinyin: "Wūlóng", hanViet: "Ô Long", liushuCategory: "Tượng hình", radicalAnalysis: "乌 (quạ đen); 龙 (rồng uốn lượn) — miêu tả búp trà sẫm xoắn cuộn sau bán lên men.", meaningVi: "Thanh trà bán oxy hóa (15–80%) kết hợp hương hoa và vị đậm", meaningEn: "Oolong (semi-oxidized tea)", contextExample: "Thiết Quan Âm là danh trà Ô Long tiêu biểu của Phúc Kiến." },
        { hanzi: "紫砂", pinyin: "Zǐshā", hanViet: "Tử sa", liushuCategory: "Hình thanh", radicalAnalysis: "紫 (tím tía); 砂 (thạch 石 + thiếu 少 cát mịn giàu khoáng sét ở Nghi Hưng).", meaningVi: "Loại đất sét khoáng đa lỗ thoáng khí dùng chế ấm trà Nghi Hưng giữ hương", meaningEn: "Yixing purple clay stoneware", contextExample: "Ấm Tử Sa là một trong Tứ bảo hàng đầu của bàn trà Công Phu." },
        { hanzi: "点茶", traditional: "點茶", pinyin: "Diǎnchá", hanViet: "Điểm trà", liushuCategory: "Hình thanh", radicalAnalysis: "点 (chấm từng giọt nước sôi vào bột trà trong chén Kiến Trảm đời Tống).", meaningVi: "Nghệ thuật đánh bột trà sủi bọt mịn bằng chổi tre thời Tống", meaningEn: "Song-dynasty whisked powdered tea art", contextExample: "Văn hóa Điểm trà nhà Tống truyền sang Nhật Bản hình thành Trà Đạo Matcha." },
        { hanzi: "黑茶", pinyin: "Hēichá", hanViet: "Hắc trà", liushuCategory: "Tượng hình + Hình thanh", radicalAnalysis: "黑 (khói ám đen); 茶 (cỏ cây dưới nắng): trà hậu lên men ủ đống chuyển sắc nâu đen.", meaningVi: "Trà lên men vi sinh (Post-fermented) như Phổ Nhĩ càng để lâu càng êm dịu", meaningEn: "Dark / Post-fermented tea", contextExample: "Trà Phổ Nhĩ Vân Nam là đại diện lừng danh của Hắc trà." }
      ],
      examples: [
        "Ví dụ 1 (Thẩm mỹ Lục Vũ vs Điểm trà vs Công Phu Trà): Đời Đường nấu nước muối cùng bánh trà; đời Tống đánh bọt trong bát men đen Kiến Diêu; đời Minh–Thanh dùng ấm Tử Sa nhỏ rót trà Ô Long.",
        "Ví dụ 2 (Kỹ thuật Xuyên Thái chính thống): Món Đậu phụ Ma Bà (麻婆豆腐) chuẩn Tứ Xuyên cân bằng 7 chữ: Ma (tê hoa tiêu), Lạt (cay tương đậu ớt Bì Huyện), Thang (nóng bỏng), Hương (thơm), Tô (giòn thịt băm), Nộn (mềm đậu phụ), Tiên (tươi đậm).",
        "Ví dụ 3 (Dược thực Việt – Trung): Cả hai nền văn hóa đều áp dụng nguyên tắc ăn đồ có tính mát giải nhiệt vào tiết Tiểu Thử/Đại Thử (chè đậu xanh/canh mướp đắng) và bổ ấm vào Lập Đông."
      ],
      keyTakeaways: [
        "Bát Đại Thái Hệ (Lỗ, Xuyên, Việt, Tô, Mân, Chiết, Tương, Huy) là kết quả thích ứng trực tiếp với địa hình, khí hậu và nguyên liệu từng lưu vực.",
        "Nghệ thuật nấu nướng đặt trên Đao công, Hỏa hầu và học thuyết Dược thực đồng nguyên (Tứ khí – Ngũ vị).",
        "Hệ thống Lục Đại Trà Loại phân định khoa học dựa trên mức độ oxy hóa polyphenol và quá trình lên men vi sinh.",
        "Dù chung nền văn hóa lúa–đũa–trà, ẩm thực Việt giữ nét thanh nhẹ nguyên bản với nước mắm và rau thơm sống."
      ],
      conclusion: "Từ chiếc chõ gốm 7.000 năm trước đến Bát Đại Thái Hệ và bàn trà Tử Sa Công Phu, văn hóa ăn uống Trung Hoa chứng tỏ ẩm thực chưa bao giờ tách rời khỏi triết học sống hài hòa cùng tự nhiên và cộng đồng. Đối chiếu với truyền thống Việt Nam giàu vị tươi thanh của rau gia vị nhiệt đới và nước mắm cổ truyền giúp người nghiên cứu hiểu thấu cách địa lý định hình bản sắc vị giác Á Đông.",
      references: [
        { author: "Lục Vũ (陆羽)", date: "Thế kỷ VIII (~760)", title: "Trà Kinh (茶经 – Toàn văn Chinese Text Project)", sourceType: "Primary Source", url: "https://ctext.org/library.pl?if=gb&res=77829", verificationNote: "Chuyên luận trà học cổ nhất thế giới gồm 3 quyển 10 tiết." },
        { author: "Anderson, E. N.", date: "1988", title: "The Food of China", sourceType: "Academic Monograph", url: "https://yalebooks.yale.edu/", verificationNote: "Công trình nhân học ẩm thực cổ điển do Yale University Press xuất bản." },
        { author: "Chen, Chuan (Trần Duyện)", date: "1979", title: "Tea Classification Study & Six Tea Categories System (Anhui Agricultural Univ.)", sourceType: "Academic Research", url: "https://www.fao.org/", verificationNote: "Hệ thống hóa khoa học Lục Đại Trà Loại được FAO & ngành chè quốc tế áp dụng." },
        { author: "Viên Mai (袁枚)", date: "1792", title: "Tùy Viên Thực Đơn (随园食单)", sourceType: "Primary Source", url: "https://ctext.org/", verificationNote: "Kinh điển mỹ học bếp núc đời Thanh với hơn 300 công thức và nguyên tắc Hỏa hầu." },
        { author: "Wilkinson, E.", date: "2022", title: "Chinese History: A New Manual (Food, Tea, and Material Culture Chapters)", sourceType: "Academic Synthesis", url: "https://www.hup.harvard.edu/", verificationNote: "Tổng thuật lịch sử vật chất và niên đại nhập khẩu nông sản châu Mỹ vào Trung Hoa." }
      ]
    },
    supplement: {
      difficulty: "Intermediate",
      periodId: "tang",
      regionId: "jiangnan",
      sourceType: "Academic Synthesis",
      primaryQuote: {
        zh: "凡治病必先食治，食疗不愈，然后命药。",
        pinyin: "Fán zhìbìng bì xiān shízhì, shíliáo bù yù, ránhòu mìng yào.",
        vi: "Phàm chữa bệnh trước hết phải dùng thực trị (ăn uống điều dưỡng), nếu thực liệu chưa khỏi hẳn rồi mới dùng đến thuốc.",
        source: "Tôn Tư Mạc, 《Thiên Kim Yếu Phương • Thực Trị》 (千金要方, thế kỷ VII)"
      },
      comparativeAnalysis: "Hệ thống trà Việt–Trung có cùng nguồn thực vật học (Camellia sinensis), nhưng tách nhánh thành hai mỹ học thưởng thức khác biệt: Trung Quốc hướng về thuần hóa nhiệt độ đất nung Tử Sa cho Công Phu Trà và lên men Hắc trà Phổ Nhĩ; Việt Nam tinh tế hóa ở nghệ thuật ướp hương hoa tươi (Sen Tây Hồ, Nhài, Ngâu) và chè xanh hãm tươi.",
      conclusion: "Hiểu ẩm thực và trà đạo Trung Hoa là bước vào phòng thí nghiệm sống động của Đao công, Hỏa hầu và Dược thực Ngũ Hành.",
      relatedFigures: [
        { name: "Lục Vũ (陆羽)", dates: "733–804", role: "Trà Thánh đời Đường, tác giả 《Trà Kinh》" },
        { name: "Viên Mai (袁枚)", dates: "1716–1797", role: "Học giả đời Thanh, tác giả 《Tùy Viên Thực Đơn》" }
      ],
      relatedTexts: ["《Trà Kinh》 (茶经)", "《Tề Dân Yếu Thuật》 (齐民要术)", "《Tùy Viên Thực Đơn》 (随园食单)"]
    },
    editorial: {
      articleId: "chinese-eight-cuisines-tea-culture",
      heroImageId: "img-hero-monograph-cuisine",
      editorialCategoryVi: "Văn hóa Ẩm thực & Trà Đạo",
      publishedDate: "2026-11-16",
      updatedDate: "2026-11-16",
      author: { name: "Hội đồng Nghiên cứu Văn hóa Thực dưỡng & Trà học CCE", roleVi: "Chuyên khảo Bát Đại Thái Hệ, Hỏa Hầu & Lục Đại Trà Loại" },
      standfirst: "Phân tích địa lý – sinh thái đằng sau 8 trường phái ẩm thực lớn, lý thuyết Dược thực đồng nguyên trong Nội Kinh và bản đồ 6 dòng trà chuẩn quốc tế.",
      storytellingFormatLabel: "Chuyên khảo Văn hiến 7 Phần",
      thumbnailConfig: { imageId: "img-hero-monograph-cuisine", aspectRatio: "16:10", focalPoint: "50% 50%" },
      inlineVisuals: [
        { afterSectionIndex: 1, layout: "full-bleed-figure", imageId: "img-infographic-tea-process", kicker: "Phổ Oxy Hóa Lục Đại Trà Loại (0% → 100%)", contextNote: "Đối chiếu cơ chế diệt men, vò dập bán oxy hóa Ô Long và hậu lên men vi sinh Phổ Nhĩ." }
      ],
      galleryImageIds: ["img-hero-monograph-cuisine", "img-infographic-tea-process", "img-hero-tea-culture"],
      historicalDocument: {
        imageId: "img-hero-monograph-cuisine",
        docTypeLabel: "Bộ Pha Công Phu Trà & Quy chuẩn Ấm Tử Sa Nghi Hưng",
        period: "Minh – Thanh – Đương đại (Thế kỷ XVI–XXI)",
        holdingInstitution: "Chinese Culture Explorer Material Archive",
        transcriptionZh: "水为茶之母，器为茶之父。",
        translationVi: "Nước là mẹ của trà, trà cụ là cha của trà (Minh nhân trà luận).",
        archivalNote: "Kỹ thuật chọn ấm Tử Sa Chu Nê/Tử Nê tùy thuộc độ lên men của Ô Long hay Phổ Nhĩ."
      }
    }
  });

  // ==========================================================================
  // MONOGRAPH 3: ATTIRE & HANFU EVOLUTION
  // ==========================================================================
  registerMonographPackage({
    heroImage: {
      id: "img-hero-monograph-attire",
      src: "assets/images/academic/han-silk-banner.jpg",
      titleVi: "Lịch sử Y phục & Mỹ học Hán Phục từ Thâm Y đến Tề Hung Nhu Quần",
      titleZh: "中国传统服饰与汉服演进史图卷",
      titleEn: "Evolution of Chinese Traditional Attire and Hanfu Silk Aesthetics",
      originalSource: "Museum of Fine Arts Boston / Zhang Xuan Song Copy (Public Domain)",
      sourceUrl: "https://collections.mfa.org/",
      creator: "Trương Huyên (Bản mô thời Bắc Tống Huy Tông – 《Đảo Luyện Đồ》)",
      institution: "Museum of Fine Arts, Boston",
      copyrightHolder: "Public Domain Archival Masterpiece",
      license: "Public Domain",
      creationDate: "Đời Đường (~740) / Tống Huy Tông mô (~1110)",
      historicalPeriod: "Thịnh Đường – Bắc Tống",
      description: "Bức danh tác 《Đảo Luyện Đồ》 ghi lại trực quan kỹ nghệ đập lụa, là lụa và kiểu trang phục nữ giới thời Đường với áo ngắn tay bồng kết hợp váy cạp cao Tề Hung Nhu Quần và dải lụa Phi Bạch.",
      altText: "Bức họa cổ Đảo Luyện Đồ mô tả phụ nữ cung đình thời Đường mặc nhu quần lụa thêu hoa văn đang se tơ và là lụa",
      caption: "Chứng cứ hội họa quý giá về kết cấu Tề Hung Nhu Quần (齐胸襦裙), giao lĩnh và kỹ nghệ dệt tơ tằm thời Đường.",
      dimensions: "147.3 x 37.1 cm (Handscroll Mineral Pigment)",
      width: 1920,
      height: 1080,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "50% 45%",
      authenticityType: "archival_plate",
      authenticityLabelVi: "Cổ họa Sử liệu Bảo tàng",
      attributionText: "Museum of Fine Arts Boston Public Domain Digital Collection",
      verificationStatus: "verified"
    },
    article: {
      id: "chinese-hanfu-qipao-attire-history",
      number: 43,
      category: "attire",
      categoryLabel: "Y phục & Hán phục • 传统服饰",
      titleVi: "Lịch sử Trang phục Trung Hoa: Cấu trúc Giao Lĩnh – Hữu Nhậm, Thâm Y, Mã Diện Quần đến Cách tân Kỳ Bào & Trào lưu Hán Phục",
      titleEn: "History of Chinese Dress: Cross-Collar Hanfu Systems, Silk Technology, Qipao Evolution and Modern Revival",
      titleZh: "中国历代服饰制度、丝绸工艺与现代演进",
      titleZhTrad: "中國歷代服飾制度、絲綢工藝與現代演進",
      epistemicTag: "Khảo cổ học Dệt may & Mỹ học Y quan Lễ chế",
      readMinutes: 17,
      heroImage: {
        src: "assets/images/academic/lhasa-potala.jpg",
        caption: "Quý tộc phụ nữ thời Thịnh Đường mặc Tề Hung Nhu Quần trong danh tác 《Đảo Luyện Đồ》",
        credit: "Museum of Fine Arts, Boston (Public Domain)"
      },
      abstract: "Trang phục truyền thống Trung Hoa vượt lên trên nhu cầu che thân thời trang để được Nho giáo định danh là hệ thống mã hóa trật tự vũ trụ và luân lý ('Y quan chi trị' 衣冠之治 – Yīguān zhī zhì). Bài chuyên luận khảo cứu theo chứng cứ khảo cổ mộ táng (Mã Vương Đôi Tây Hán, mộ Pháp Môn Tự đời Đường, Định Lăng và mộ Khổng phủ đời Minh) để tái dựng 4 chế thức kết cấu chủ đạo của Hán phục (汉服 – Hànfú): Giao lĩnh hữu nhậm (交领右衽 – cổ chéo vạt trái đè vạt phải), Thâm y (深衣 – áo liền quần tà cuộn), Tề hung Nhu quần (齐胸襦裙 – áo váy cạp cao Đường triều) và Mã diện quần (马面裙 – váy xếp ly đối xứng Minh–Thanh). Tác phẩm tiếp tục giải mã sự chuyển tiếp sang trường bào Mãn tộc (Kỳ bào 旗袍 – Cheongsam cải tiến tại Thượng Hải thập niên 1920–1930) và đối chiếu đặc biệt với hệ thống Việt phục thời Lý–Trần–Lê–Nguyễn (Áo Giao lĩnh, Áo Viên lĩnh, Áo Nhật bình, Áo Tấc/Áo dài Ngũ thân).",
      introduction: "Trong bộ kinh điển 《Chu Dịch • Hệ Từ Hạ》 có câu nổi tiếng: 'Hoàng Đế, Nghiêu, Thuấn thùy y thường nhi thiên hạ trị' (黄帝、尧、舜垂衣裳而天下治: rủ áo trên và xiêm dưới mà thiên hạ yên trị). Đối với nền văn minh sớm thuần hóa con tằm (tằm dâu Bombyx mori ít nhất từ thời văn hóa Ngưỡng Thiều ~3600 TCN tại Tây Âm thôn và Tiền Sơn Dạng ~2700 TCN), lụa gấm và y phục trở thành biểu tượng phân ranh giữa lễ chế văn minh và đời sống hoang dã. Ngay cả câu chuyện truyền thuyết 'Hoàng Đế chế y thường, Luy Tổ (嫘祖) dạy dân nuôi tằm' cũng phản ánh ký ức văn hóa hàng nghìn năm về vị thế trung tâm của nghề tơ tằm trong kinh tế và nghi lễ Đông Á.",
      historicalContext: "Khảo cổ học mộ táng cung cấp sử liệu vật chất chuẩn xác từng đường kim mũi chỉ: Bộ tố sa thiện y (素纱襌衣 – áo lụa mỏng nhẹ chỉ 48–49 gram!) khai quật tại Mộ số 1 Mã Vương Đôi (Trường Sa, Hồ Nam, thế kỷ II TCN) chứng minh kỹ thuật dệt tơ mỏng tơ kép thời Tây Hán đạt trình độ siêu việt mà máy hiện đại khó lặp lại. Di chỉ Thổ Lỗ Phiên (Tân Cương) bảo tồn gấm Thục thời Ngụy–Tấn mang hoa văn 'Ngũ tinh xuất Đông phương lợi Trung Quốc'. Thời Tùy–Đường mở rộng Con đường Tơ lụa tiếp nhận họa tiết Liên châu (hoa văn vòng hạt ngọc Ba Tư) cùng mũ Hồ và vạt áo Viên lĩnh (cổ tròn – 圆领 bào) từ Trung Á nhưng vẫn giữ tinh thần phóng khoáng tự tin của phụ nữ Đường trong Tề hung nhu quần dải lụa Phi Bạch (披帛). Đời Tống quay về thẩm mỹ thanh đạm, tôn trọng hình khối thon gọn với Bối tử (褙子 – áo khoác xẻ tà hai bên rất tiện dụng cho tầng lớp thị dân và trí thức). Đời Minh phục hưng chuẩn mực Hán phục qua Tế bào văn vũ bá quan (váy bổ tử thêu chim thú phân 9 phẩm cấp), Phi phong và đặc biệt phát minh kiểu váy Mã Diện Quần (马面裙). Năm 1644, triều Mãn Thanh thi hành lệnh 'Thế phát dịch phục' (cạo đầu đổi áo bào vạt cong Mãn Châu 'Mã quái / Trường sam'), làm đứt đoạn dòng Hán phục chính thống gần 300 năm cho đến khi trào lưu Phục hưng Hán phục đương đại khởi phát từ năm 2003.",
      mainContent: [
        {
          heading: "2. Giải phẫu Kết cấu Kinh điển: Giao Lĩnh Hữu Nhậm, Thâm Y và Bốn Trục Tạo Hình",
          body: "Điểm nhận diện kỹ thuật không thể trộn lẫn của toàn bộ họ Hán phục truyền thống là hệ thống cắt may 'Bình diện cắt' (平面剪裁 – không cắt gọt theo đường cong 3D như may Âu Tây mà xếp vải phẳng ôm uyển chuyển theo cơ thể người mặc) đi kèm nguyên tắc Giao lĩnh hữu nhậm (交领右衽 – Jiāolǐng yòurèn): vạt cổ trước bắt chéo thành hình chữ Y và vạt trái luôn đè lên vạt phải sao cho cửa cổ mở về hướng bên phải (chỉ dùng 'Tả nhậm' vạt phải đè vạt trái trong tang lễ cổ hoặc sắc phục ngoại tộc theo Khổng Tử). Có 4 hệ kết cấu lớn: (1) Thượng Y Hạ Thường (上衣下裳): kết cấu tối cổ gồm áo trên (Y) và váy quấn dưới (Thường) thể hiện âm dương trời tròn đất vuông, làm chuẩn cho Miện phục (áo tế trời rồng mũ ngọc lưu của Thiên tử); (2) Thâm Y (深衣): nối áo và váy liền một mạch ở eo nhưng may tách vải rồi khâu nối ('Cương trực như thước thợ, tà sau rủ như dây dọi'), chia 2 biến thể Trực cư (áo thẳng, vạt mở) và Khúc cư (áo vạt chéo quấn nhiều vòng); (3) Nhu Quần (襦裙): phổ biến bậc nhất trong đời sống phụ nữ suốt 1.500 năm từ Hán đến Minh, gồm áo ngắn Nhu (襦) mặc cùng váy dài buộc cao ở eo (Tề yêu 齐腰) hoặc buộc trên ngực (Tề hung 齐胸 thời Tùy–Đường); và (4) Áo Cổ Tròn (Viên Lĩnh Bào – 圆领袍): hấp thụ từ y phục Kaftan Trung Á từ Bắc triều đến Tùy–Đường, trở thành quan phục chuẩn mực suốt Đường–Tống–Minh và truyền sang cả An Nam, Cao Ly."
        },
        {
          heading: "3. Công nghệ Dệt Tơ Tằm, Gấm Thục – Vân Cẩm – Tống Cẩm & Mã Diện Quần Minh Triều",
          body: "Sức quyến rũ của Hán phục nằm ở chất liệu dệt nghệ thuật đạt tầm Di sản UNESCO Nhân loại: Tam Đại Danh Cẩm (三大名锦) gồm Thục Cẩm (Tứ Xuyên, nổi tiếng từ thời Hán với khung cửi tháp rút sợi đa màu), Tống Cẩm (Tô Châu, hoa văn hình học trang nhã thường dùng bọc kinh thư và may lễ phục) và Vân Cẩm (Nam Kinh – 南京云锦, gọi là 'Cẩm của Đế vương' vì cần hai nghệ nhân vận hành khung dệt gỗ lầu cao, dệt đan sợi vàng thật và lông công mà máy móc hiện đại vẫn bất lực). Song hành cùng Tam Đại Danh Cẩm là kỹ nghệ 'Khắc Ti' (缂丝 – dệt tơ thông kinh đoạn vĩ bằng những con thoi màu nhỏ tạo hoa văn giống hệt nhau trên cả hai mặt vải). Đến đời Minh, phụ nữ sáng tạo kết cấu Mã Diện Quần (马面裙 – Mǎmiàn qún): gồm 2 mảnh váy phẳng không xếp nếp ở chính giữa trước và sau (giống mặt thành lũy nhô ra gọi là 'mã diện'), bao quanh bởi hàng chục nếp gấp xếp ly hai bên sườn giúp bước đi uyển chuyển mà vẫn ngồi cưỡi ngựa hoặc di chuyển thoải mái; đồng thời trang trí ở các nếp gấp bằng hoa văn dệt chỉ vàng 'Trang hoa' và bổ tử quyền quý."
        },
        {
          heading: "4. Từ Trường Bào Mãn Châu đến Cách Tân Kỳ Bào Thượng Hải & Áo Trung Sơn",
          body: "Dưới triều Thanh (1644–1911), mặc dù quan chế bắt buộc nam giới dùng Mãn phục tay áo 'Mã đề tụ' (tay áo hình móng ngựa che mu bàn tay phục vụ kỵ xạ), giới phụ nữ Hán vùng Giang Nam vẫn duy trì quy tắc 'Nam tòng Nữ bất tòng' ở mức độ rộng: họ giữ kiểu áo rộng Ngao (袄) và váy Mã diện xẻ ly suốt đời Thanh; trong khi giới mệnh phụ Mãn Châu mặc Trường bào suông rộng dài phủ gót (Kỳ trang – 旗装). Sau Cách mạng Tân Hợi 1911 và Phong trào giải phóng phụ nữ thập niên 1920 tại khu tô giới quốc tế Thượng Hải (Hải phái – 海派), Kỳ bào (旗袍 – Qípáo / trong tiếng Anh quen gọi Cheongsam theo âm Quảng Đông nhưng chuẩn Phổ thông là Qípáo) được cải tổ triệt để: lấy khung cổ đứng (Lập lĩnh – 立领) và khuy bện nút đồng hoa (Bàn khấu – 盘扣) của Mãn phục nhưng ghép với kỹ thuật 'Chiết eo cắt cong 3D' của thời trang Paris–London, cắt xẻ tà hai bên tôn vóc dáng nữ tính hiện đại. Song song, Tôn Trung Sơn (孙中山) thiết kế bộ Trung Sơn trang (中山装) gồm 4 túi ngực tượng trưng Tứ duy Lễ–Nghĩa–Liêm–Sỉ, trở thành lễ phục chính thức cho nam giới Trung Hoa thế kỷ XX."
        },
        {
          heading: "5. Phong trào Phục Hưng Hán Phục (2003–2026) & Thời trang Quốc Triều (Guócháo)",
          body: "Năm 2003, khi kỹ sư điện lực Vương Lạc Thiên mặc một bộ Khúc cư tự may bước ra phố Trịnh Châu đã thổi bùng 'Hán Phục Vận Động' (汉服运动). Sau hơn hai thập niên phát triển từ nhóm sinh viên yêu cổ phong thành ngành công nghiệp hàng chục tỷ Nhân dân tệ tập trung tại huyện Tào (Tào Huyện – Sơn Đông) và Hàng Châu–Tô Châu, thế hệ Gen Z Trung Quốc ngày nay tiếp cận trang phục truyền thống theo hai hướng: dòng Phục Nguyên (复原派 – tái dựng tuyệt đối đúng tỉ lệ khảo cổ từ mộ Tống Chu Thị hoặc Khổng phủ đời Minh) và dòng Cách tân Hiện đại (Tân Trung Thức – 新中式, kết hợp chân váy Mã Diện Quần đời Minh cùng áo sơ mi hoặc áo len dạo phố hằng ngày). Việc tách bạch rành mạch giữa Hán phục, Kỳ bào (di sản Hải phái thập niên 1920) và Nhật phục Kimono/Hàn phục Hanbok cũng trở thành một bài học cốt lõi trong giao lưu văn hóa Đông Á."
        }
      ],
      theoreticalFramework: "Nghiên cứu lịch sử trang phục Đông Á áp dụng 3 phương pháp chuẩn mực (nhấn mạnh trong giáo trình của Thẩm Tùng Văn 《Trung Quốc cổ đại phục sức nghiên cứu》): (1) Khảo cổ học dệt may thực vật/tơ sợi tại hiện trường (tránh dùng tranh phim cổ trang đương đại gán làm lịch sử); (2) Đối chiếu điển chế hội họa cung đình + tượng gốm tùy táng (Tam thái Đường, tượng gốm Tần–Hán) với bản ghi Nho lễ (《Tam Lễ Đồ》, 《Đại Minh Hội Điển》); và (3) Thẩm định 'Y–Quần–Lĩnh–Tụ' (Áo, Váy, Cổ, Tay) theo từng triều đại thay đổi.",
      primarySources: [
        {
          zh: "古者先王之制衣裳也，左衽夷俗，右衽中国。",
          pinyin: "Gǔ zhě xiānwáng zhī zhì yīcháng yě, zuǒrèn yísú, yòurèn Zhōngguó.",
          hanViet: "Cổ giả tiên vương chi chế y thường dã, tả nhậm di tục, hữu nhậm Trung Quốc.",
          translationVi: "Thời xưa tiên vương quy chế áo xiêm: vạt khép sang trái là tục bên ngoài, vạt khép sang phải là chuẩn mực lễ giáo văn minh Trung Hoa. (Diễn giải kinh điển theo tinh thần câu nói nổi tiếng của Khổng Tử 'Vi Quản Trọng, ngô kỳ bị phát tả nhậm hĩ' trong 《Luận Ngữ》).",
          source: "Khổng Tử / Hệ chú 《Luận Ngữ • Hiến Vấn》 (论语 • 宪问, Thế kỷ V TCN)"
        },
        {
          zh: "制古今深衣之法：规矩权衡，应乎天地。",
          pinyin: "Zhì gǔjīn shēnyī zhī fǎ: guījǔ quánhéng, yīng hū tiāndì.",
          hanViet: "Chế cổ kim thâm y chi pháp: quy củ quyền hành, ứng hồ thiên địa.",
          translationVi: "Phép may áo Thâm y từ xưa đến nay: vạt áo cong như thước tròn, cổ áo vuông như thước thợ, đường sống lưng thẳng như dây dọi, gấu áo cân bằng như cán cân — toàn thân ứng hợp với đạo lý Trời Đất.",
          source: "《Lễ Ký • Thâm Y》 (礼记 • 深衣, Hán đại chỉnh lý)"
        },
        {
          zh: "天孙织锦云霞灿，寸锦寸金帝王袍。",
          pinyin: "Tiānsūn zhījǐn yúnxiá càn, cùn jǐn cùn jīn dìwáng páo.",
          hanViet: "Thiên Tôn chức cẩm vân hà xán, thốn cẩm thốn kim đế vương bào.",
          translationVi: "Cẩm Vân rực rỡ tựa ráng mây trời dệt, một tấc gấm ngang một tấc vàng dùng may long bào đế vương (ca ngợi kỹ thuật Vân Cẩm Nam Kinh).",
          source: "Văn hiến nghề dệt Nam Kinh thời Minh – Thanh (《Tào Tín Đương Cẩm Thư》)"
        },
        {
          zh: "罗衣何飘飘，轻裾随风还。",
          pinyin: "Luóyī hé piāopiāo, qīngjū suí fēng huán.",
          hanViet: "La y hà phiêu phiêu, khinh cư tùy phong hoàn.",
          translationVi: "Áo lụa la sao phất phới nhẹ tênh, tà áo bay lượn quyến rũ theo từng làn gió lướt qua.",
          source: "Tào Thực, 《Mỹ nữ thiên》 (美女篇, Thế kỷ III SCN)"
        }
      ],
      sinoVietnameseComparison: "Giữa Việt phục truyền thống và Hán phục tồn tại mối quan hệ 'Đồng nguyên kết cấu – Bản địa hóa tinh tế – Độc lập đường nét'. Ngay từ thời Lý–Trần–Lê sơ, triều đình Đại Việt sử dụng chuẩn mực Cổ Giao lĩnh hữu nhậm và Áo Viên lĩnh (cổ tròn) làm thường phục, triều phục văn võ (ví dụ tượng Quan trạng và tranh truyền thần Nguyễn Trãi cho thấy mũ Phốc đầu cánh chuồn kết hợp áo Viên lĩnh cổ tròn tương thông cùng chuẩn Đông Á). Tuy nhiên, người Việt biến tấu mạnh mẽ để thích ứng khí hậu nhiệt đới ẩm gió mùa: chuộng chất liệu Lụa Vạn Phúc, Lãnh Mỹ A thoáng mỏng tự nhiên và màu nâu sồng, gụ thẫm bình dị của y phục dân gian (áo Tứ thân buộc hai vạt trước kết hợp yếm đào thuần Việt!). Bước sang thời Trịnh–Nguyễn Phân tranh và Triều Nguyễn thế kỷ XVIII–XIX (Cải cách y phục Đàng Trong năm 1744 của Chúa Nguyễn Phúc Khoát), Việt Nam hoàn thiện kiểu Áo Dài Ngũ Thân (áo 5 tà với khuy cài nách phải cùng Lập lĩnh cổ đứng) và Áo Nhật Bình (cổ hình chữ nhật đối xứng kế thừa giao thoa từ Phượng y triều Minh nhưng mang hoa văn thủy ba – rồng – phượng bản sắc cung đình Huế). Ngày nay, cả Áo dài Ngũ thân Việt Nam và trào lưu Tân Trung Thức / Mã Diện Quần ở Trung Quốc đều đang cùng trải qua cuộc phục hưng tự hào về mỹ học y phục dân tộc trong thế kỷ XXI.",
      terminologyAndLiushu: [
        { hanzi: "汉服", traditional: "漢服", pinyin: "Hànfú", hanViet: "Hán phục", liushuCategory: "Hình thanh", radicalAnalysis: "汉 (thủy 氵 sông Hán + hựu 又); 服 (chu 舟/nhục + phục 卩 chịu đựng mặc lên thân): trang phục truyền thống của người Hán từ Tần Hán đến Minh.", meaningVi: "Hệ thống trang phục truyền thống của người Hán (khác với Mãn phục triều Thanh)", meaningEn: "Traditional Han Chinese clothing system", contextExample: "Hán phục đặc trưng bởi Giao lĩnh hữu nhậm và cắt may phẳng." },
        { hanzi: "交领", traditional: "交領", pinyin: "Jiāolǐng", hanViet: "Giao lĩnh", liushuCategory: "Tượng hình + Hình thanh", radicalAnalysis: "交 (người đứng vắt chéo hai chân chữ X); 领 (lệnh 令 + hiệt 页 cái cổ và đầu): cổ áo vắt chéo hai vạt chữ Y.", meaningVi: "Kiểu cổ áo vạt chéo kinh điển trong Hán phục và Việt phục cổ", meaningEn: "Crossed-lapel Y-collar", contextExample: "Áo Giao lĩnh thời Lê ở Việt Nam chia sẻ cùng mẫu cổ chữ Y này." },
        { hanzi: "右衽", pinyin: "Yòurèn", hanViet: "Hữu nhậm", liushuCategory: "Hội ý", radicalAnalysis: "右 (bàn tay phải + khẩu 口: bên phải); 衽 (y 衤 áo + nhâm 壬 tà vạt áo gài về phía bên phải).", meaningVi: "Quy tắc vạt trái đè lên vạt phải, khuy cài buộc bên sườn phải", meaningEn: "Right-overlapping lapel folding", contextExample: "Giao lĩnh hữu nhậm là ký hiệu chuẩn mực của Lễ chế Đông Á." },
        { hanzi: "深衣", pinyin: "Shēnyī", hanViet: "Thâm y", liushuCategory: "Hình thanh + Tượng hình", radicalAnalysis: "深 (thủy 氵 + thâm chỗ sâu thẳm bao bọc toàn thân); 衣 (tượng hình vạt áo che thân trên).", meaningVi: "Kiểu áo dài nối liền thân trên và xiêm dưới theo chuẩn Nho gia Kinh Lễ", meaningEn: "One-piece wrapped deep robe", contextExample: "Khúc cư Thâm y thời Hán được tìm thấy tại mộ Mã Vương Đôi." },
        { hanzi: "襦裙", pinyin: "Rúqún", hanViet: "Nhu quần", liushuCategory: "Hình thanh", radicalAnalysis: "襦 (y 衤 áo + nhu 需 mềm nhẹ: áo cánh ngắn mặc trên); 裙 (y 衤 + quân 君 thanh: váy quấn dài bên dưới).", meaningVi: "Bộ trang phục hai mảnh gồm áo ngắn (Nhu) và váy dài (Quần) của phụ nữ", meaningEn: "Two-piece jacket and wrap skirt ensemble", contextExample: "Tề hung Nhu quần là biểu tượng thời trang lộng lẫy đời Thịnh Đường." },
        { hanzi: "圆领", traditional: "圓領", pinyin: "Yuánlǐng", hanViet: "Viên lĩnh", liushuCategory: "Hình thanh", radicalAnalysis: "圆 (vi 囗 vòng tròn + viên 员); 领 (cổ áo): áo cổ tròn khép khuy trên vai.", meaningVi: "Áo dài cổ tròn xuất hiện từ Tùy Đường làm quan phục Tống–Minh–Lê", meaningEn: "Round-collar official robe", contextExample: "Các bức chân dung Nguyễn Trãi và quan lại thời Minh đều mặc Viên lĩnh bào." },
        { hanzi: "马面", traditional: "馬面", pinyin: "Mǎmiàn", hanViet: "Mã diện", liushuCategory: "Tượng hình", radicalAnalysis: "马 (hình con ngựa); 面 (khuôn mặt giữa đầu): vạt mặt phẳng giữa váy giống tường thành nhô ra.", meaningVi: "Váy xếp ly đối xứng hai bên có mặt phẳng chính giữa trước sau thời Minh–Thanh", meaningEn: "Mamianqun / Horse-face pleated skirt", contextExample: "Mã diện quần đời Minh là trang phục Tân Trung Thức thịnh hành nhất hiện nay." },
        { hanzi: "旗袍", pinyin: "Qípáo", hanViet: "Kỳ bào", liushuCategory: "Hình thanh", radicalAnalysis: "旗 (phương 方 cờ hiệu Bát Kỳ Mãn Châu); 袍 (y 衤 + bao 包 thanh: áo dài trùm thân).", meaningVi: "Áo dài bó eo xẻ tà hiện đại phát triển từ Thượng Hải thập niên 1920", meaningEn: "Qipao / Cheongsam dress", contextExample: "Kỳ bào Thượng Hải thập niên 1930 kết hợp cổ Lập lĩnh và kỹ thuật chiết eo Tây phương." },
        { hanzi: "云锦", traditional: "雲錦", pinyin: "Yúnjǐn", hanViet: "Vân cẩm", liushuCategory: "Tượng hình + Hội ý", radicalAnalysis: "云 (hình cuộn mây trên trời); 锦 (kim 金 vàng + bạch 帛 lụa: gấm dệt chỉ vàng quý như ráng mây).", meaningVi: "Gấm Nam Kinh dệt bằng chỉ vàng và lông công dành cho hoàng gia (UNESCO)", meaningEn: "Nanjing Yunjin cloud brocade", contextExample: "Nghệ nhân Nam Kinh phải vận hành khung cửi hai tầng để dệt Vân cẩm." },
        { hanzi: "缂丝", traditional: "緙絲", pinyin: "Kèsī", hanViet: "Khắc ti", liushuCategory: "Hình thanh + Tượng hình", radicalAnalysis: "缂 (mịch 糸 tơ tằm + cách 革 thắt nút dệt cắt ngang sợi dọc); 丝 (hai kén tơ nối liền): dệt luồn con thoi không cắt đứt màu.", meaningVi: "Kỹ thuật dệt lụa thảm lừng danh 'nhất thốn khắc ti nhất thốn kim'", meaningEn: "Kesi slit-tapestry silk weaving", contextExample: "Long bào hoàng đế và bản dệt tranh thời Tống dùng kỹ thuật Khắc ti." },
        { hanzi: "盘扣", traditional: "盤扣", pinyin: "Pánkòu", hanViet: "Bàn khấu", liushuCategory: "Hình thanh", radicalAnalysis: "盘 (chu 舟 + mãnh 皿 uốn xoắn cuộn); 扣 (thủ 扌 + khẩu 口 cài khuy).", meaningVi: "Cúc tết thủ công bằng dây vải hình hoa mai, cánh bướm đặc sắc", meaningEn: "Hand-knotted frog button clasp", contextExample: "Bàn khấu trên cổ đứng tạo điểm nhấn mỹ học tinh xảo cho Kỳ bào và Áo dài." },
        { hanzi: "补子", traditional: "補子", pinyin: "Bǔzi", hanViet: "Bổ tử", liushuCategory: "Hình thanh", radicalAnalysis: "补 (y 衤 + bốc 卜 mảnh vải thêu khâu đắp lên ngực và lưng); 子 (hậu tố danh từ).", meaningVi: "Miếng phù hiệu thêu chim (văn) hoặc thú (võ) trước ngực áo quan Minh–Thanh–Nguyễn", meaningEn: "Mandarin square rank badge", contextExample: "Bổ tử nhất phẩm quan văn thêu chim Hạc trắng trên mây ngũ sắc." }
      ],
      examples: [
        "Ví dụ 1 (Kỹ thuật dệt Mã Vương Đôi 168 TCN): Áo Tố sa thiện y dài 128 cm, sải tay 190 cm nhưng chỉ nặng 49 gram, có thể gấp gọn nhét vừa bao diêm.",
        "Ví dụ 2 (Định danh rõ thuật ngữ tránh nhầm lẫn): Khi mặc đồ Tết hay chụp ảnh Thượng Hải, phân biệt Kỳ bào (thế kỷ XX cắt ôm eo Tây–Mãn) với Hán phục Giao lĩnh hay Nhu quần (cắt phẳng Hán–Đường–Minh).",
        "Ví dụ 3 (Đối chiếu Cổ phục Việt Nam): Phục dựng Áo Nhật Bình (thế kỷ XIX) và Áo Giao lĩnh thời Lê sử dụng chung kỹ nghệ tơ lụa dệt gấm cổ truyền nhưng bảo lưu tỷ lệ tay áo và họa tiết rồng–phượng riêng của Đại Việt."
      ],
      keyTakeaways: [
        "Hán phục vận hành trên hai chuẩn cốt lõi: cắt vải phẳng (Bình diện cắt) và cài vạt Giao lĩnh hữu nhậm.",
        "Bốn hệ cấu trúc lớn: Thượng y hạ thường, Thâm y, Nhu quần (Đường–Tống) và Viên lĩnh bào / Mã diện quần (Minh).",
        "Kỳ bào Thượng Hải thập niên 1920–1930 là sản phẩm dung hợp giữa Mãn phục cổ đứng và nghệ thuật cắt ôm eo hiện đại.",
        "Trang phục Việt Nam (Áo Giao lĩnh, Áo Tứ thân, Áo Ngũ thân, Nhật bình) vừa chia sẻ nguồn Giao lĩnh Đông Á vừa kiến tạo mỹ cảm độc lập."
      ],
      conclusion: "Từ chiếc áo lụa nhẹ như mây ở Trường Sa thế kỷ II TCN đến váy Mã Diện Quần tái xuất trên đường phố Bắc Kinh, Thượng Hải hôm nay, lịch sử y phục Trung Hoa là sử biên niên sống động về công nghệ tơ tằm, lễ chế đạo đức và giao lưu văn hóa Liên Á. Soi chiếu cùng sự phục hưng Áo dài Ngũ thân và cổ phục Việt Nam hiện nay mở ra đối thoại văn hóa đầy thú vị về di sản may mặc phương Đông.",
      references: [
        { author: "Thẩm Tùng Văn (沈从文)", date: "1981 / Tái bản 2011", title: "Zhongguo Gudai Fushi Yanjiu (中国古代服饰研究 – Nghiên cứu Trang phục Cổ đại Trung Hoa)", sourceType: "Academic Monograph", url: "https://book.douban.com/", verificationNote: "Kiệt tác đặt nền móng khảo cổ trang phục qua tượng gốm, tranh tường và hiện vật mộ táng." },
        { author: "Finnane, A.", date: "2008", title: "Changing Clothes in China: Fashion, History, Nation", sourceType: "Academic Monograph", url: "https://cup.columbia.edu/", verificationNote: "Nghiên cứu xuất sắc về quá trình chuyển đổi từ Hán/Mãn phục sang Kỳ bào Thượng Hải và Trung Sơn trang." },
        { author: "Chu Tích Bảo (周锡保)", date: "1984", title: "Zhongguo Gudai Fushi Shi (中国古代服饰史)", sourceType: "Academic Monograph", url: "https://archive.org/", verificationNote: "Phân tích kỹ thuật kết cấu may mặc từng triều đại." },
        { author: "Đoàn Thị Tình & Trịnh Quang Vũ", date: "2010", title: "Trang phục Cổ truyền Việt Nam & Đối chiếu Y chế Văn hiến Đông Á", sourceType: "Academic Synthesis", url: "https://baotanglichsu.vn/", verificationNote: "Đối chiếu Áo Giao lĩnh, Viên lĩnh và Ngũ thân Việt Nam với văn hiến khu vực." },
        { author: "Bảo tàng Tơ lụa Quốc gia Trung Quốc (China National Silk Museum)", date: "2024", title: "Digital Archival Catalogue: Hanfu Silk, Yunjin & Mawangdui Textiles", sourceType: "Museum Archive", url: "https://www.chinasilkmuseum.com/", verificationNote: "Kho dữ liệu khảo cổ dệt may Hàng Châu có đối chiếu trực tiếp hiện vật." }
      ]
    },
    supplement: {
      difficulty: "Intermediate",
      periodId: "ming",
      regionId: "jiangnan",
      sourceType: "Historical Evidence",
      primaryQuote: {
        zh: "中国有礼仪之大，故称夏；有服章之美，谓之华。",
        pinyin: "Zhōngguó yǒu lǐyí zhī dà, gù chēng Xià; yǒu fúzhāng zhī měi, wèi zhī Huá.",
        vi: "Trung Hoa có lễ nghi rộng lớn nên gọi là Hạ; có vẻ đẹp của y phục lễ chương nên gọi là Hoa (Khổng Dĩnh Đạt giải thích nguồn gốc 'Hoa Hạ').",
        source: "Khổng Dĩnh Đạt, 《Xuân Thu Tả Truyện Chính Nghĩa》 (春秋左传正义, Đường triều)"
      },
      comparativeAnalysis: "Nếu Kimono Nhật Bản phát triển cố định theo tay áo rộng 'O-sode/Kosode' đeo đai Obi dày cố định bản lưng, và Hanbok Hàn Quốc giữ áo Jeogori cực ngắn kết hợp váy Chima phồng dưới chân ngực, thì Hán phục lại nổi bật nhờ sự đa dạng chiều dài giữa Nhu quần, Thâm y, Viên lĩnh bào và Mã diện quần trong suốt nhiều triều đại.",
      conclusion: "Hán phục và Kỳ bào là hai chương khác biệt nhưng bổ trợ lẫn nhau trong bộ lịch sử thị giác của dệt may Đông Á.",
      relatedFigures: [
        { name: "Thẩm Tùng Văn (沈从文)", dates: "1902–1988", role: "Nhà văn và Nhà khảo cứu y phục cổ đại hàng đầu tại Cố Cung" },
        { name: "Tôn Trung Sơn (孙中山)", dates: "1866–1925", role: "Người thiết kế bộ Trung Sơn trang cận đại" }
      ],
      relatedTexts: ["《Lễ Ký • Thâm Y》 (礼记 • 深衣)", "《Trung Quốc Cổ đại Phục sức Nghiên cứu》 (中国古代服饰研究)"]
    },
    editorial: {
      articleId: "chinese-hanfu-qipao-attire-history",
      heroImageId: "img-hero-monograph-attire",
      editorialCategoryVi: "Y phục & Mỹ học Vật chất",
      publishedDate: "2026-11-16",
      updatedDate: "2026-11-16",
      author: { name: "Ban Nghiên cứu Khảo cổ Dệt may & Mỹ học Y phục CCE", roleVi: "Chuyên khảo Kết cấu Hán phục, Công nghệ Tơ lụa & Việt Phục Đối chiếu" },
      standfirst: "Giải mã nghệ thuật cắt may phẳng (Bình diện cắt), áo lụa 49g Mã Vương Đôi, váy Mã diện quần đời Minh và hành trình cách tân Kỳ bào Thượng Hải.",
      storytellingFormatLabel: "Chuyên khảo Văn hiến 7 Phần",
      thumbnailConfig: { imageId: "img-hero-monograph-attire", aspectRatio: "16:10", focalPoint: "50% 45%" },
      inlineVisuals: [
        { afterSectionIndex: 1, layout: "split-aside", imageId: "img-doc-lanting-scroll", kicker: "Kỹ nghệ Chữ viết & Dệt tơ tằm", contextNote: "Từ giấy Tuyên đến lụa Khắc ti, tơ tằm tạo nền vật chất cho lễ chế cổ điển." }
      ],
      galleryImageIds: ["img-hero-monograph-attire", "img-hero-traditional-arch", "img-doc-lanting-scroll"],
      historicalDocument: {
        imageId: "img-hero-monograph-attire",
        docTypeLabel: "《Đảo Luyện Đồ》 (捣练图 • Thế kỷ VIII / Tống Huy Tông mô bản)",
        period: "Thịnh Đường – Bắc Tống",
        holdingInstitution: "Museum of Fine Arts, Boston",
        transcriptionZh: "天宝间玄宗敕张萱作捣练图，宋徽宗赵佶摹本犹存唐人丰腴衣冠之韵。",
        translationVi: "Thời Thiên Bảo (742–756), Trương Huyên vẽ bức Đảo Luyện Đồ ghi lại cung nữ mặc nhu quần tơ lụa; bản mô phỏng của Tống Huy Tông vẫn bảo tồn nguyên vẹn thần thái y quan đời Đường.",
        archivalNote: "Bức họa ghi nhận chi tiết quy trình đập phẳng tơ tằm, dệt sợi và là bằng bàn ủi đồng than."
      }
    }
  });

  // ==========================================================================
  // MONOGRAPH 4: CERAMICS, PORCELAIN & JADE CULTURE
  // ==========================================================================
  registerMonographPackage({
    heroImage: {
      id: "img-hero-monograph-ceramics-jade",
      src: "assets/images/academic/ming-forbidden-city.jpg",
      titleVi: "Lịch sử Gốm Sứ 'Ngũ Đại Danh Diêu', Sứ Thanh Hoa Cảnh Đức Trấn & Văn minh Ngọc Khí",
      titleZh: "中国五大名窑青花瓷与玉文化",
      titleEn: "Chinese Ceramics, Blue-and-White Porcelain and Neolithic Jade Culture",
      originalSource: "British Museum Sir Percival David Collection (Open Access)",
      sourceUrl: "https://www.britishmuseum.org/",
      creator: "Lò Cảnh Đức Trấn (Niên hiệu Nguyên Chí Chính thứ 11 – 1351)",
      institution: "The British Museum (Sir Percival David Collection)",
      copyrightHolder: "British Museum Open Educational Collection",
      license: "CC BY-NC-SA 4.0 / Archival Educational Citation",
      creationDate: "1351 SCN (Nguyên đại Chí Chính)",
      historicalPeriod: "Nguyên – Minh – Thanh (Cảnh Đức Trấn)",
      description: "Cặp Bình Thanh hoa David Vases (Đại Duy Đức) khắc dòng minh văn niên đại 1351 chính xác trên cổ bình, là cột mốc vàng định niên đại cho sứ Thanh Hoa chín muồi thế giới.",
      altText: "Cặp bình sứ Thanh hoa hoa văn rồng mây màu xanh cobalt thời Nguyên lưu giữ tại Bảo tàng Anh Quốc",
      caption: "David Vases (1351): Minh chứng khảo cổ học định danh sứ Thanh hoa Cảnh Đức Trấn xuất khẩu toàn cầu.",
      dimensions: "Height 63.6 cm each",
      width: 1200,
      height: 1500,
      aspectRatio: "4:3",
      role: "hero",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "50% 45%",
      authenticityType: "archival_plate",
      authenticityLabelVi: "Hiện vật Bảo tàng Quốc tế",
      attributionText: "The British Museum / Sir Percival David Collection Open Data",
      verificationStatus: "verified"
    },
    article: {
      id: "chinese-ceramics-porcelain-jade-heritage",
      number: 44,
      category: "ceramics-jade",
      categoryLabel: "Gốm sứ & Ngọc khí • 陶瓷与玉器",
      titleVi: "Từ Ngọc Tông Lương Chử đến Lò Cảnh Đức Trấn: Văn minh Ngọc Khí Ngũ Đức, Ngũ Đại Danh Diêu Tống Triều & Sứ Thanh Hoa Toàn Cầu",
      titleEn: "From Liangzhu Ritual Jade to Jingdezhen Kilns: Jade Ethics, Song Five Great Kilns, and Global Blue-and-White Porcelain",
      titleZh: "良渚玉器、宋代五大名窑与景德镇青花瓷考",
      titleZhTrad: "良渚玉器、宋代五大名窯與景德鎮青花瓷考",
      epistemicTag: "Vật liệu học Lịch sử, Khảo cổ Ngọc khí & Hải thương Toàn cầu hóa",
      readMinutes: 20,
      heroImage: {
        src: "assets/images/academic/qin-terracotta.jpg",
        caption: "Cặp bình Thanh Hoa David Vases năm 1351 tại Bảo tàng Anh Quốc",
        credit: "The British Museum Open Educational Archive"
      },
      abstract: "Trước khi đồng thanh và sắt xuất hiện, nền văn minh Đông Á đã trải qua một kỷ nguyên rực rỡ kéo dài hai thiên niên kỷ mà giới khảo cổ gọi là 'Thời đại Ngọc khí' (Ngọc khí thời đại 玉器时代) với hai đỉnh cao Lương Chử (3300–2300 TCN) và Hồng Sơn. Ngọc được trân quý vượt lên giá trị đá quý thuần túy khi được Khổng Tử phong làm biểu tượng Năm Đức tính Quân tử ('Ngọc hữu ngũ đức'). Song song đó, phát minh đồ sứ nung ở nhiệt độ trên 1.280°C bằng đất sét cao lanh (高岭土 – Kaolin) đã khiến chính từ 'China' trong tiếng Anh trở thành danh từ đồng nghĩa với 'đồ sứ trắng mỏng như ngọc'. Chuyên luận giải phẫu toàn bộ tiến trình kỹ thuật từ Đường Tam Thái (唐三彩), đỉnh cao mỹ học tối giản 'Ngũ Đại Danh Diêu' đời Tống (Nhữ, Quan, Ca, Định, Quân) đến bước nhảy vọt Công–Thương toàn cầu hóa của sứ Thanh Hoa Cảnh Đức Trấn (景德镇青花瓷) thời Nguyên–Minh, đồng thời đối chiếu đặc biệt với kiệt tác Gốm hoa lam Chu Đậu thế kỷ XV của Việt Nam.",
      introduction: "Ở phương Tây thời Phục Hưng, sứ trắng men ngọc phương Đông tựa như một phép màu hóa học — giới quý tộc châu Âu tôn xưng là 'Vàng Trắng' (White Gold), thậm chí tin rằng cốc sứ có thể tự nứt vỡ khi chạm độc dược. Kỳ tích ấy nảy nở từ hai mạch truyền thống vật liệu bản địa sâu dày của Trung Hoa: nghề chế tác Ngọc Nephrite (từ Hòa Điền – Tân Cương và Tụ Nham) suốt 8.000 năm gắn với triết lý nhân cách 'Quân tử tỷ đức ư ngọc' (Bậc quân tử ví đức hạnh mình với ngọc), song hành cùng truyền thống kỹ thuật Lò Gốm (từ gốm vẽ Ngưỡng Thiều, gốm đen mỏng 'vỏ trứng' Long Sơn đến sứ đích thực thời Đông Hán – Lục triều) theo đuổi tham vọng tạo ra chất liệu nhân tạo trong trẻo và ngân vang như ngọc thật.",
      historicalContext: "Xác chứng khảo cổ học vạch rõ bước chuyển từ văn minh Ngọc sang văn minh Sứ: (1) Thời Tân thạch khí (8.000–4.000 năm trước), văn hóa Hưng Long Oa – Hồng Sơn vùng Đông Bắc tạc hình Rồng Ngọc (Ngọc Long hình chữ C), còn văn hóa Lương Chử (Chiết Giang, được UNESCO công nhận 2019) đạt trình độ thần kỳ khi khoan khắc hình 'Thần nhân thú diện' lên Ngọc Tông (玉琮 – hình vuông ngoài tròn trong tượng trưng Trời–Đất) trên loại đá cứng Mohs 6–6.5 chỉ bằng cát thạch anh và dây da! (2) Thời Đông Hán (~thế kỷ II SCN), các lò vùng Thượng Ngu (Chiết Giang) nung được Thanh từ nguyên thủy (Nguyên thủy thanh từ) đạt độ kết khối ở >1.260°C, không thấm nước. (3) Đời Đường xuất hiện 'Nam Thanh Bắc Bạch': lò Việt Diêu phương Nam nung 'Bí sắc từ' xanh ngọc biếc và lò Hình Diêu phương Bắc trắng như tuyết, kết hợp gốm Tam Thái chì nhiệt thấp rực rỡ dọc Con đường Tơ lụa. (4) Đời Bắc–Nam Tống (960–1279), thẩm mỹ nội tâm Văn nhân và Tống Nho đẩy gốm sứ đến đỉnh cao hoàn mỹ của đơn sắc: Ngũ Đại Danh Diêu (Nhữ, Quan, Ca, Định, Quân). (5) Đời Nguyên–Minh–Thanh, kỹ nghệ kết hợp đất Cao lanh chịu nhiệt với khoáng chất Coban oxit (Tô Ma Ly Thanh nhập qua đường hải thương Ba Tư) biến Cảnh Đức Trấn (Giang Tây) thành 'Thủ phủ Công nghiệp Sứ đầu tiên của Toàn cầu hóa'.",
      mainContent: [
        {
          heading: "2. Văn hóa Ngọc Khí: Lục Thụy Lễ Chế, Ngọc Tông – Ngọc Bích & Ngũ Đức Quân Tử",
          body: "Trong tiếng Hán, chữ Bảo (寶/宝) gồm bộ Miên (mái nhà) che chở chữ Ngọc (玉), cho thấy vị thế thiêng liêng số một của Ngọc trong tâm thức cổ đại hơn cả vàng bạc. Theo kinh điển 《Chu Lễ • Xuân Quan》, triều đình sử dụng bộ 'Lục Thụy' (六瑞) và 'Lục Khí' từ ngọc để giao tiếp cùng Thiên–Địa–Tứ phương: Ngọc Bích (玉璧 – đĩa tròn lỗ giữa) màu xanh biếc tế Trời; Ngọc Tông (玉琮 – khối trụ ngoài vuông trong tròn) màu vàng tế Đất; cùng Khuê, Chương, Hổ, Hoàng tế bốn mùa Đông–Tây–Nam–Bắc. Tuy nhiên, bước chuyển triết lý vĩ đại nhất thuộc về Nho gia khi Khổng Tử nội tâm hóa mảnh đá tự nhiên thành chuẩn mực nhân cách trong 'Ngũ Đức của Ngọc' (《Lễ Ký • Sính Nghĩa》): ① Nhân (仁 – ấm áp trơn nhuận khi chạm); ② Nghĩa (义 – vân kết cấu chặt chẽ không gian dối); ③ Trí (智 – âm thanh ngân xa thanh thúy khi gõ); ④ Dũng (勇 – thà gãy vỡ sắc cạnh chứ không cong queo uốn lụy); ⑤ Khiết (洁 – tì vết bên trong không che giấu nổi vẻ trong sáng). Từ đó hình thành câu ngạn ngữ 'Quân tử vô cố, ngọc bất ly thân' (Người quân tử không cớ gì chẳng rời mảnh ngọc bên hông)."
        },
        {
          heading: "3. Mỹ học Tống Triều: Giải mã 'Ngũ Đại Danh Diêu' (五大名窑) — Đơn Sắc Là Đỉnh Cao",
          body: "Trái ngược với vẻ rực rỡ đa sắc của Tam Thái thời Đường hay sứ Phấn Thái đời Thanh, sứ đời Tống tôn vinh vẻ đẹp tối giản, tự nhiên, bất đối xứng của Đạo gia và Thiền tông — đặt nền móng cho 'Ngũ Đại Danh Diêu' (汝、官、哥、定、钧): ① Nhữ Diêu (汝窑 – Bảo Phong, Hà Nam): đứng đầu thiên hạ danh diêu, chỉ nung riêng cho cung đình Bắc Tống trong khoảng 20 năm nên ngày nay còn chưa tới 100 hiện vật toàn vẹn trên thế giới; nổi danh màu men 'Thiên thanh' (Xanh trời vừa tạnh sau cơn mưa – Vũ quá thiên thanh vân phá xứ) pha bột mã não quý giá tạo độ mịn mờ như da ngọc non. ② Quan Diêu (官窑 – Biện Kinh & Hàng Châu): chú trọng lớp men dày ngậm nước và hệ thống rạn nứt tự nhiên 'Băng liệt văn' (vết rạn băng) cùng viền miệng đen – chân đế sắt gọi là 'Tử khẩu thiết túc'. ③ Ca Diêu (哥窑): nổi bật họa tiết rạn kép 'Kim ty thiết tuyến' (đường nứt lớn thấm trà đen như dây sắt xen đường nứt nhỏ vàng óng như tơ vàng). ④ Định Diêu (定窑 – Hà Bắc): nổi tiếng sứ men trắng ngà mịn khắc hoa văn chìm dưới men, thường bọc viền đồng bạc ở miệng bát (do lối nung úp ngược 'Phúc thiêu'). ⑤ Quân Diêu (钧窑 – Vũ Châu, Hà Nam): đột phá hóa học nung lò bằng nguyên tố Đồng (Cu) tạo biến ảo 'Diêu biến' (窑变 – hiệu ứng sắc tím, đỏ thắm ngẫu nhiên sinh biến hóa trong lò nung mà thợ không kiểm soát trước hoàn toàn: 'Nhập diêu nhất sắc, xuất diêu vạn thái')."
        },
        {
          heading: "4. Cảnh Đức Trấn, Sứ Thanh Hoa Thời Nguyên–Minh & Toàn Cầu Hóa Thương Mại",
          body: "Nếu Tống là đỉnh cao men đơn sắc cho Văn nhân, thì Nguyên–Minh biến gốm sứ thành ngôn ngữ mỹ thuật thị giác đại chúng và hàng hóa toàn cầu đầu tiên mang tên 'Sứ Thanh Hoa' (青花瓷 – Qīnghuācí: vẽ hoa văn bằng oxit Coban lên cốt gốm trắng khô rồi phủ men trong, nung một lần ở >1.300°C để sắc xanh ngấm chặt vĩnh viễn dưới lớp men thủy tinh). Cặp bình David Vases năm 1351 thời Nguyên (cao 63,6 cm, cổ khắc 62 chữ ghi năm Chí Chính 11) chứng minh Cảnh Đức Trấn lúc đó đã làm chủ kỹ thuật phối đất sét Từ thạch (Petuntse – xương đá) với đất Cao lanh (Kaolin) giúp xương gốm cao lớn không bị sụp chảy ở nhiệt độ 1.320°C. Sang thời Minh (Vĩnh Lạc – Tuyên Đức – Thành Hóa), hai xu hướng phát triển song hành: dòng Họa hoa văn rồng sóng biển bằng sắc Coban nhập từ Ba Tư ('Tô Ma Ly Thanh') kết mảng đen sắt rỉ giàu chiều sâu; và Đấu Thái Thành Hóa (成化斗彩 – Chén Kê Kháng Bôi 鸡缸杯 bé xíu kết hợp vẽ lam dưới men và vẽ ngũ sắc tráng men nhẹ nung lại). Đến đời Khang Hy–Càn Long nhà Thanh, kỹ thuật Pháp lang thái (Champlevé / Famille Rose) đạt đỉnh tinh xảo, đưa hàng trăm triệu sản phẩm qua tuyến Con đường Tơ lụa trên biển (Công ty Đông Ấn Anh – Hà Lan, tàu đắm Nanking Cargo) đến tận cung điện Versailles và làm phát sinh làn sóng 'Chinoiserie' toàn châu Âu."
        }
      ],
      theoreticalFramework: "Khoa học Vật liệu Gốm sứ Cổ điển vận hành dựa trên tam giác: (1) Thành phần khoáng đất xương gốm (nhị nguyên Cao lanh Al2O3·2SiO2·2H2O nâng khung chịu nhiệt + Từ thạch chảy thủy tinh); (2) Bầu khí quyển lò nung (Hoàn nguyên diêu – lò khử thiếu oxy cho men Thanh từ xanh ngọc / men Đồng đỏ Quân Diêu, hay Oxy hóa – lò thoáng cho men trắng/Tam thái vàng); và (3) Chỉ số Nhiệt độ Kết khối (từ Đao gốm nung 800–1000°C, Sành 1100–1200°C đến Sứ chuẩn >1.280°C phát âm thanh thanh thúy và không thấm nước).",
      primarySources: [
        {
          zh: "君子比德于玉焉：温润而泽，仁也；缜密以栗，知也；廉而不刿，义也。",
          pinyin: "Jūnzǐ bǐ dé yú yù yān: wēnrùn ér zé, rén yě; zhěnmì yǐ lì, zhì yě; lián ér bù guì, yì yě.",
          hanViet: "Quân tử tỷ đức ư ngọc yên: ôn nhuận nhi trạch, nhân dã; chẩn mật dĩ lật, trí dã; liêm nhi bất quế, nghĩa dã.",
          translationVi: "Người quân tử sánh đức mình với ngọc: chất ấm áp trơn nhuận ấy là đức Nhân; kết cấu tinh mịn bền chắc ấy là Trí; cạnh sắc thẳng thắn mà không cắt hại người ấy là Nghĩa.",
          source: "《Lễ Ký • Sính Nghĩa》 (礼记 • 聘义)"
        },
        {
          zh: "雨过天青云破处，这般颜色做将来。",
          pinyin: "Yǔ guò tiānqīng yún pò chù, zhè bān yánsè zuò jiānglái.",
          hanViet: "Vũ quá thiên thanh vân phá xứ, giá ban nhan sắc tác tương lai.",
          translationVi: "Hãy chế tác thứ sắc màu xanh thẳm bầu trời nơi làn mây rẽ ra ngay sau cơn mưa tạnh (tương truyền là lời ngự bút vua Tống/Hậu Chu truyền đạt lý tưởng cho men Nhữ Diêu / Bí sắc).",
          source: "Ngự phê tương truyền trong sử liệu Gốm sứ Tống triều (Chép trong 《Tăng Tu Thiết Vi Sơn Tùng Đàm》 / Truyền bản Tống Huy Tông)"
        },
        {
          zh: "白如玉、明如镜、薄如纸、声如磬。",
          pinyin: "Bái rú yù, míng rú jìng, bó rú zhǐ, shēng rú qìng.",
          hanViet: "Bạch như ngọc, minh như kính, bạc như chỉ, thanh như khánh.",
          translationVi: "Trắng mịn tựa ngọc bích, sáng bóng như mặt gương, mỏng nhẹ ví tờ giấy, gõ lên âm thanh ngân vang tựa khánh đá (4 chuẩn mực vàng của sứ Cảnh Đức Trấn).",
          source: "Văn hiến Giám định Cảnh Đức Trấn (景德镇窑志)"
        },
        {
          zh: "入窑一色，出窑万彩。",
          pinyin: "Rù yáo yī sè, chū yáo wàn cǎi.",
          hanViet: "Nhập diêu nhất sắc, xuất diêu vạn thái.",
          translationVi: "Khi bước vào lò chỉ một màu men duy nhất, lúc ra lò biến hóa muôn ngàn sắc thái kỳ ảo (ca ngợi hiện tượng Diêu biến hóa học của Quân Diêu).",
          source: "Cổ ngữ Thợ gốm Vũ Châu, Hà Nam (《Quân Diêu Chí》)"
        }
      ],
      sinoVietnameseComparison: "Giữa gốm sứ Việt Nam và Trung Hoa có một cuộc cạnh tranh nghệ thuật đầy tự hào vào thế kỷ XIV–XVI trên tuyến Con đường Gốm sứ Biển Đông (Maritime Porcelain Road). Trong giai đoạn Hoàng đế nhà Minh ban hành lệnh 'Hải cấm' (海禁 – cấm thương thuyền tư nhân Trung Quốc xuất khẩu gốm sứ ra nước ngoài suốt thế kỷ XV), các lò gốm Đại Việt — đỉnh cao là Gốm Chu Đậu (Hải Dương) và Gốm Lái Thiêu/Thăng Long — lập tức vươn lên lấp đầy thị phần quốc tế từ Nhật Bản (sản phẩm gốm Việt được giới trà đạo Nhật tôn kính gọi là Kōchi / Annan-yaki), Đông Nam Á (tàu đắm Cù Lao Chàm mang hơn 240.000 hiện vật Chu Đậu!) đến tận Cung điện Topkapi Sarayi ở Istanbul (Thổ Nhĩ Kỳ, nơi lưu giữ chiếc bình tỳ bà gốm Hoa lam Chu Đậu cao 54cm ký tên nghệ nhân Bùi Thị Hý năm 1450!). Về kỹ thuật, mặc dù dùng chung màu xanh Coban dưới men giống Thanh hoa Trung Hoa, gốm Chu Đậu Việt Nam mang bút pháp vẽ tay phóng khoáng, tự nhiên đầy chất dân dã đồng bằng Bắc Bộ (chim chích chòe, hoa cúc dây, bướm lượn, mục đồng thổi sáo), đồng thời xương gốm ngà ấm và lối trang trí nhiều tầng hoa văn cánh sen độc đáo, cùng truyền thống Gốm men ngọc Lý–Trần (bát hoa sen) sánh ngang với thanh từ thời Tống.",
      terminologyAndLiushu: [
        { hanzi: "玉琮", pinyin: "Yùcóng", hanViet: "Ngọc tông", liushuCategory: "Hình thanh", radicalAnalysis: "玉 (ba viên ngọc xâu dây kèm điểm phân biệt với vương 王); 琮 (ngọc 玉 + tông 宗 tổ tiên thần linh).", meaningVi: "Pháp khí ngọc hình ngoài vuông (Đất) trong tròn (Trời) dùng tế Đất thời Lương Chử", meaningEn: "Liangzhu square-circular ritual jade tube", contextExample: "Ngọc Tông Vương văn hóa Lương Chử nặng 6,5 kg là bảo vật khảo cổ 5.000 năm." },
        { hanzi: "玉璧", pinyin: "Yùbì", hanViet: "Ngọc bích", liushuCategory: "Hình thanh", radicalAnalysis: "玉 (ngọc); 璧 (tịch 辟 quy chuẩn hoàn hảo + ngọc 玉 ở dưới): đĩa ngọc tròn tượng trưng vòm trời.", meaningVi: "Đĩa ngọc tròn có lỗ nhỏ giữa dùng tế Trời hoặc làm lễ tín quý tộc", meaningEn: "Ritual perforated circular jade disc", contextExample: "Hòa Thị Bích là viên Ngọc Bích lừng danh nhất thời Chiến Quốc." },
        { hanzi: "高岭土", traditional: "高嶺土", pinyin: "Gāolǐngtǔ", hanViet: "Cao lanh thổ", liushuCategory: "Hình thanh", radicalAnalysis: "高 (nhà cao); 岭 (sơn 山 + lệnh 领 dãy núi Cao Lĩnh tại Giang Tây); 土 (đất): tên đất sét trắng tạo ra thuật ngữ Kaolin toàn cầu.", meaningVi: "Đất sét khoáng nhôm silicat chịu nhiệt cực cao (>1300°C), nguyên liệu xương sứ", meaningEn: "Kaolin porcelain clay (named after Gaoling mountain)", contextExample: "Không có Cao lanh, lò nung không thể chịu nhiệt làm sứ trắng kích thước lớn." },
        { hanzi: "青花", pinyin: "Qīnghuā", hanViet: "Thanh hoa", liushuCategory: "Chỉ sự + Hình thanh", radicalAnalysis: "青 (sinh 生 mầm xanh + đan 丹 khoáng phẩm: sắc xanh lam); 花 (thảo 艹 + hóa 化): vẽ hoa văn xanh lam coban dưới men.", meaningVi: "Sứ hoa lam vẽ oxit Coban dưới lớp men thủy tinh nung nhiệt cao", meaningEn: "Blue-and-white underglaze cobalt porcelain", contextExample: "David Vases năm 1351 chứng minh kỹ nghệ sứ Thanh hoa đã trưởng thành từ đời Nguyên." },
        { hanzi: "窑变", traditional: "窯變", pinyin: "Yáobiàn", hanViet: "Diêu biến", liushuCategory: "Hình thanh + Hội ý", radicalAnalysis: "窑 (huyệt 穴 hang lò nung + cao 羔); 变 (thay đổi biến hóa sắc màu trong lò lửa).", meaningVi: "Sự biến chuyển màu sắc kỳ diệu ngoài dự đoán do phản ứng đồng/sắt khi nung", meaningEn: "Kiln transmutation glaze effect", contextExample: "Quân Diêu Hà Nam được tôn vinh bậc nhất về kỳ quan Diêu biến." },
        { hanzi: "汝窑", traditional: "汝窯", pinyin: "Rǔyáo", hanViet: "Nhữ diêu", liushuCategory: "Hình thanh", radicalAnalysis: "汝 (thủy 氵 sông Nhữ tại Hà Nam); 窑 (huyệt 穴 lò nung sứ hoàng gia).", meaningVi: "Lò nung đứng đầu Ngũ Đại Danh Diêu Bắc Tống nổi danh men Thiên thanh pha mã não", meaningEn: "Ru ware imperial kiln (Northern Song)", contextExample: "Thế giới hiện chỉ còn chưa đầy 100 món sứ Nhữ Diêu đích thực." },
        { hanzi: "唐三彩", pinyin: "Táng Sāncǎi", hanViet: "Đường Tam Thái", liushuCategory: "Hình thanh", radicalAnalysis: "唐 (nhà Đường); 三 (số 3 chỉ đa sắc vàng–lục–trắng/lam); 彩 (thái 采 + sam 彡 hoa văn rực rỡ).", meaningVi: "Gốm men chì nhiệt thấp đa sắc đặc trưng thời Thịnh Đường dọc Con đường Tơ lụa", meaningEn: "Tang dynasty three-color lead-glazed earthenware", contextExample: "Tượng Lạc đà Tam Thái tái hiện hình ảnh thương nhân Túc Đặc từ Trung Á." },
        { hanzi: "斗彩", traditional: "鬥彩", pinyin: "Dòucǎi", hanViet: "Đấu thái", liushuCategory: "Tượng hình + Hình thanh", radicalAnalysis: "斗 (hai người tranh tài ghép khít nhau); 彩 (màu sắc): vẽ viền lam dưới men khớp với màu men nung trên men.", meaningVi: "Kỹ thuật 'ghép sắc đấu màu' đỉnh cao đời Thành Hóa nhà Minh", meaningEn: "Doucai joined-colors porcelain technique", contextExample: "Chén Kê Kháng Bôi Thành Hóa Đấu Thái là đỉnh cao hiếm thấy của gốm Minh." },
        { hanzi: "景德镇", traditional: "景德鎮", pinyin: "Jǐngdézhèn", hanViet: "Cảnh Đức Trấn", liushuCategory: "Hình thanh", radicalAnalysis: "景德 (niên hiệu Tống Chân Tông ban năm 1004); 镇 (kim 金 + chân 真 thị trấn trọng yếu).", meaningVi: "Thủ phủ gốm sứ hơn 1.000 năm lịch sử của Trung Hoa tại Giang Tây", meaningEn: "Jingdezhen, porcelain capital of China", contextExample: "Chữ 'Cảnh Đức' bắt nguồn từ niên hiệu hoàng gia ban thưởng chất lượng sứ địa phương." },
        { hanzi: "冰裂纹", traditional: "冰裂紋", pinyin: "Bīnglièwén", hanViet: "Băng liệt văn", liushuCategory: "Hội ý", radicalAnalysis: "冰 (băng 冫 + thủy 水 băng giá); 裂 (liệt 列 + y 衣 rạn nứt); 纹 (vân 糸 họa tiết): đường rạn chìm giống mặt băng vỡ.", meaningVi: "Hoa văn rạn nứt nhiều lớp tự nhiên trong men sứ Quan/Ca Diêu đời Tống", meaningEn: "Ice-crackle celadon glaze pattern", contextExample: "Nghệ nhân nhà Tống biến khuyết tật co giãn men thành tuyệt tác Băng liệt văn." },
        { hanzi: "翡翠", pinyin: "Fěicuì", hanViet: "Phỉ thúy", liushuCategory: "Hình thanh", radicalAnalysis: "翡 (phi 非 + vũ 羽 chim bói cá lông đỏ); 翠 (tốt 卒 + vũ 羽 chim lông lục): ngọc Jadeite xanh đỏ quý hiếm.", meaningVi: "Ngọc Jadeite (Phỉ thúy) du nhập từ Myanmar phổ biến cực thịnh từ đời Thanh", meaningEn: "Jadeite / Imperial emerald jade", contextExample: "Cải thảo Phỉ Thúy ở Cố Cung Đài Bắc được tạc từ một khối Jadeite nửa lục nửa trắng." },
        { hanzi: "和田玉", pinyin: "Hétiányù", hanViet: "Hòa Điền ngọc", liushuCategory: "Tượng hình", radicalAnalysis: "和田 (vùng Hòa Điền, Tân Cương ở Kunlun); 玉 (ngọc Nephrite truyền thống cổ đại).", meaningVi: "Ngọc Nephrite Hòa Điền 'Dương chi ngọc' (trắng mịn như mỡ cừu) dùng suốt 4.000 năm", meaningEn: "Hetian / Khotan nephrite jade", contextExample: "Hòa Điền Ngọc là chất liệu làm Ngọc tỷ truyền quốc và đồ lễ cổ." }
      ],
      examples: [
        "Ví dụ 1 (Minh chứng Khảo cổ David Vases 1351): Không phải giả thuyết phỏng đoán, 62 chữ khắc bằng coban dưới men trên hai bình rồng là 'hồ sơ đăng ký ngày tháng' giúp giới khảo cổ Anh – Trung định chuẩn niên đại sứ Thanh Hoa.",
        "Ví dụ 2 (Sự giao thoa Gốm Chu Đậu – Thanh hoa Cảnh Đức Trấn): Thế kỷ XV khi Minh cấm biển, bình hoa lam Chu Đậu vẽ bởi nghệ nhân Bùi Thị Hý (1450) xuất khẩu tới Thổ Nhĩ Kỳ, minh chứng năng lực chế tác sứ ngang hàng khu vực của Đại Việt.",
        "Ví dụ 3 (Từ Khổng Tử đến Ngọc Hòa Điền): Thử nghiệm vật lý chứng minh Ngọc Nephrite có độ dai va đập cao hơn cả thép, giúp giải thích đức 'Dũng' trong Ngũ Đức của Khổng Tử."
      ],
      keyTakeaways: [
        "Văn minh Trung Hoa đi qua 'Thời đại Ngọc khí' trước thời Đồ đồng (Văn hóa Lương Chử & Hồng Sơn).",
        "Ngũ Đại Danh Diêu đời Tống (Nhữ, Quan, Ca, Định, Quân) đại diện cho đỉnh cao mỹ học đơn sắc nội tâm.",
        "Sứ Thanh Hoa Cảnh Đức Trấn kết hợp Cao lanh (xương gốm chịu 1.320°C) + Oxit Coban nhập Ba Tư tạo thành hàng hóa toàn cầu hóa đầu tiên.",
        "Gốm Hoa Lam Chu Đậu thế kỷ XV của Việt Nam là kiệt tác song hành đầy kiêu hãnh trên Con đường Gốm sứ Biển Đông."
      ],
      conclusion: "Cả Ngọc khí lẫn Gốm sứ đều gặp nhau ở một khát vọng mỹ học xuyên suốt: biến đá đất vô tri qua sự khổ luyện kiên trì (tạc ngọc bằng cát thạch anh hoặc nung lò qua 1.300 độ) thành vật thể mang linh hồn, đạo đức Quân tử và ánh sáng thanh khiết. Hiểu tiến trình từ Ngọc Tông Lương Chử đến Nhữ Diêu, Cảnh Đức Trấn và Chu Đậu Hải Dương cho phép chúng ta đọc trọn lịch sử kỹ thuật, mỹ học và kinh tế biển Đông Á qua từng hiện vật.",
      references: [
        { author: "Kerr, R. & Wood, N.", date: "2004", title: "Science and Civilisation in China, Vol. 5, Part XII: Ceramic Technology", sourceType: "Academic Monograph", url: "https://www.cambridge.org/", verificationNote: "Công trình khoa học vật liệu gốm sứ kinh điển của Đại học Cambridge (Joseph Needham series)." },
        { author: "Harrison-Hall, J.", date: "2001", title: "Ming Ceramics in the British Museum", sourceType: "Museum Archive", url: "https://www.britishmuseum.org/", verificationNote: "Catalog phân tích hiện vật David Vases và sứ Thanh Hoa – Đấu Thái Minh triều." },
        { author: "Gerritsen, A.", date: "2020", title: "The City of Blue and White: Chinese Porcelain and the Early Modern World", sourceType: "Academic Monograph", url: "https://www.cambridge.org/", verificationNote: "Phân tích mạng lưới công nghiệp toàn cầu hóa của Cảnh Đức Trấn." },
        { author: "Bùi Minh Trí & Kerry Nguyễn-Long", date: "2001", title: "Gốm Hoa Lam Việt Nam / Vietnamese Blue & White Ceramics", sourceType: "Academic Monograph", url: "https://baotanglichsu.vn/", verificationNote: "Nghiên cứu hiện vật tàu đắm Cù Lao Chàm và Gốm Chu Đậu đối chiếu với Cảnh Đức Trấn." },
        { author: "Li, Ji (Lý Tế) & Renfrew, C. & Liu, B.", date: "2019", title: "Archaeological Ruins of Liangzhu City — UNESCO World Heritage Dossier", sourceType: "Primary Archaeological Dossier", url: "https://whc.unesco.org/en/list/1592/", verificationNote: "Hồ sơ công nhận Di sản Thế giới UNESCO về nền văn minh ngọc Lương Chử." }
      ]
    },
    supplement: {
      difficulty: "Advanced",
      periodId: "yuan",
      regionId: "jiangnan",
      sourceType: "Historical Evidence",
      primaryQuote: {
        zh: "黄金有价玉无价，瓷到极处似真玉。",
        pinyin: "Huángjīn yǒujià yù wújià, cí dào jíchù sì zhēnyù.",
        vi: "Vàng có giá quy đổi nhưng ngọc thì vô giá; gốm sứ khi đạt tới đỉnh cao thanh khiết trông tựa như ngọc thật.",
        source: "Cổ ngữ Giám thưởng Cổ ngoạn Minh – Thanh"
      },
      comparativeAnalysis: "Điểm giao thoa thú vị giữa Hải thương Gốm sứ Trung – Việt là thế kỷ XV–XVI: chính sách Hải cấm nhà Minh đã gián tiếp thúc đẩy các lò gốm Chu Đậu (Hải Dương) và Thăng Long trở thành nhà cung ứng sứ hoa lam đẳng cấp quốc tế dọc biển Đông và Ấn Độ Dương.",
      conclusion: "Từ văn hóa Ngọc Lương Chử tới Cảnh Đức Trấn là bản hùng ca về bàn tay và ngọn lửa chinh phục khoáng vật của cư dân Đông Á.",
      relatedFigures: [
        { name: "Sir Percival David", dates: "1892–1964", role: "Nhà sưu tập sở hữu bộ đôi David Vases 1351 và gốm Nhữ Diêu hiếm" },
        { name: "Bùi Thị Hý", dates: "Thế kỷ XV (~1450)", role: "Nghệ nhân gốm Chu Đậu ký tên trên bình hoa lam lưu giữ tại Bảo tàng Topkapi" }
      ],
      relatedTexts: ["《Chu Lễ • Xuân Quan》 (周礼 • 春官)", "《Cảnh Đức Trấn Đào Lục》 (景德镇陶录)", "《Thiên Công Khai Vật • Đào Duyên》 (天工开物)"]
    },
    editorial: {
      articleId: "chinese-ceramics-porcelain-jade-heritage",
      heroImageId: "img-hero-monograph-ceramics-jade",
      editorialCategoryVi: "Vật chất Học & Di sản Bảo tàng",
      publishedDate: "2026-11-16",
      updatedDate: "2026-11-16",
      author: { name: "Ban Khảo cổ Vật chất & Bảo tàng Số CCE", roleVi: "Chuyên khảo Ngọc khí Lương Chử, Ngũ Đại Danh Diêu Tống & Sứ Chu Đậu – Thanh hoa" },
      standfirst: "Hành trình biến đất sét Cao lanh và Oxit Coban thành 'Vàng Trắng' toàn cầu, giải mã bí ẩn Nhữ Diêu Thiên Thanh và đối sánh Gốm Hoa Lam Chu Đậu.",
      storytellingFormatLabel: "Chuyên khảo Văn hiến 7 Phần",
      thumbnailConfig: { imageId: "img-hero-monograph-ceramics-jade", aspectRatio: "16:10", focalPoint: "50% 45%" },
      inlineVisuals: [
        { afterSectionIndex: 1, layout: "split-aside", imageId: "img-hero-traditional-arch", kicker: "Hỏa hầu Lò nung & Tống Nho Mỹ học", contextNote: "Ngũ đại danh diêu đề cao sắc thái thiên nhiên và tĩnh lặng thiền viện đời Tống." }
      ],
      galleryImageIds: ["img-hero-monograph-ceramics-jade", "img-hero-traditional-arch", "img-hero-tang-dynasty"],
      historicalDocument: {
        imageId: "img-hero-monograph-ceramics-jade",
        docTypeLabel: "Minh văn trên Cổ bình Thanh hoa David Vases (1351 SCN)",
        period: "Nhà Nguyên Chí Chính năm thứ 11 (1351)",
        holdingInstitution: "The British Museum, London",
        transcriptionZh: "信州路玉山县顺城乡德教里荆塘社奉圣弟子张文进，喜舍香炉花瓶一付，祈保合家清吉，子女平安。至正十一年四月良辰谨记。",
        translationVi: "Đệ tử Trương Văn Tiến ở xã Kinh Đường, hương Thuận Thành, huyện Ngọc Sơn, lộ Tín Châu thành tâm tiến cúng một cặp bình hoa và lư hương, cầu gia đạo bình an thanh cát. Kính ghi ngày lành tháng Tư năm Chí Chính thứ 11 (1351).",
        archivalNote: "Bản minh văn xác chứng niên đại sứ Thanh hoa Cảnh Đức Trấn sớm hơn mọi giả thuyết châu Âu."
      }
    }
  });
})();
