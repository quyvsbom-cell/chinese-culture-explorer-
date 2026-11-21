// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — Literary Canons & 60 HSK 4-9 Briefs
// Journey to the West (西游记), Dream of the Red Chamber (红楼梦), Four Classics
// & 60 Exam-Ready Cultural Idioms / Reading Hooks for HSK 4-9
// ============================================================================

(function () {
  "use strict";

  var CANONS = [
    {
      id: "canon-xiyouji",
      zh: "《西游记》· 吴承恩",
      titleVi: "Tây Du Ký (Ngô Thừa Ân · Minh)",
      titleEn: "Journey to the West (Wu Cheng'en, Ming)",
      hskTag: "HSK 5–8 Core Literary Reference",
      coreThemeVi: "Hành trình thỉnh kinh của Đường Tăng và Tôn Ngộ Không ẩn dụ quá trình luyện tâm Tam giáo hợp nhất (Phật–Đạo–Nho): Tâm viên Ý mã, hàng phục ngã chấp để đạt Giác ngộ.",
      coreThemeEn: "Xuanzang's pilgrimage allegory blending Buddhism, Daoist alchemy ('Monkey of the Mind'), and Confucian self-mastery into an adventure epic.",
      hskVocabVi: "Từ khóa HSK thường gặp: 取经 (thỉnh kinh), 心猿意马 (tâm viên ý mã), 七十二变 (72 phép biến hóa), 克服困难 (vượt qua gian nan)."
    },
    {
      id: "canon-hongloumeng",
      zh: "《红楼梦》· 曹雪芹",
      titleVi: "Hồng Lâu Mộng (Tào Tuyết Cần · Thanh)",
      titleEn: "Dream of the Red Chamber (Cao Xueqin, Qing)",
      hskTag: "HSK 7–9 High-Level Reading Canon",
      coreThemeVi: "Đỉnh cao tiểu thuyết chương hồi miêu tả sự hưng suy của đại gia tộc Giả phủ, phơi bày cấu trúc lễ giáo, kinh tế trang viên, thi từ Đại Quan Viên và mỹ học bi kịch vô thường.",
      coreThemeEn: "Pinnacle Qing realist-allegorical novel dissecting aristocratic lineage economics, poetry societies, gender dynamics, and tragic impermanence.",
      hskVocabVi: "Từ khóa HSK thường gặp: 兴衰 (hưng suy), 封建礼教 (lễ giáo phong kiến), 真假虚实 (thực giả hư thực), 大观园 (Đại Quan Viên)."
    },
    {
      id: "canon-sanguo",
      zh: "《三国演义》· 罗贯中",
      titleVi: "Tam Quốc Diễn Nghĩa (La Quán Trung)",
      titleEn: "Romance of the Three Kingdoms",
      hskTag: "HSK 6–8 Strategy & Management Idioms",
      coreThemeVi: "Mưu lược quân sự, thu phục nhân tâm, liên minh Tôn–Lưu, chữ Tín – Nghĩa (Quan Vũ) và tư duy chiến lược trong đàm phán thương mại hiện đại.",
      coreThemeEn: "Classical treatise on alliance politics, strategic deception, loyalty (Yi), and leadership archetypes frequently cited in Chinese B2B discourse.",
      hskVocabVi: "Thành ngữ kinh điển: 草船借箭, 空城计, 三顾茅庐, 锦囊妙计."
    },
    {
      id: "canon-shuihu",
      zh: "《水浒传》· 施耐庵",
      titleVi: "Thủy Hử (Thi Nại Am)",
      titleEn: "Water Margin",
      hskTag: "HSK 5–7 Vernacular & Social Rebuke",
      coreThemeVi: "Tái hiện xã hội thị dân và giang hồ Lương Sơn Bạc thời Tống qua ngôn ngữ Bạch thoại sống động, phản ánh xung đột quan lại và nghĩa khí bình dân.",
      coreThemeEn: "Song-era vernacular epic exploring outlaw brotherhood, civic corruption, and grassroots solidarity at Liangshan Marsh.",
      hskVocabVi: "Từ khóa Bạch thoại: 义气 (nghĩa khí), 官逼民反 (quan ép dân phản), 江湖 (giang hồ)."
    },
    {
      id: "canon-tangsong",
      zh: "唐诗宋词 & 京剧昆曲",
      titleVi: "Đường Thi – Tống Từ & Hí Khúc (Côn Khúc / Kinh Kịch)",
      titleEn: "Tang Poetry, Song Lyrics & Classical Opera",
      hskTag: "HSK 4–9 Cultural Comprehension",
      coreThemeVi: "Thi ca Lý Bạch – Đỗ Phủ – Tô Thức – Lý Thanh Chiếu rèn cảm thức từ vựng cô đọng; Kinh Kịch phân 4 hàng Sinh–Đán–Tịnh–Sửu chuẩn mực.",
      coreThemeEn: "Concise imagery from Li Bai, Du Fu, Su Shi paired with four stylized Peking Opera roles (Sheng, Dan, Jing, Chou).",
      hskVocabVi: "Từ khóa mỹ học: 意境 (ý cảnh), 含蓄 (hàm súc), 唱念做打 (Xướng Niệm Tố Đả)."
    }
  ];

  // 60 Exam-Ready HSK 4-9 Cultural & Literary Idiom Briefs (Chengyu & Keywords)
  var RAW_BRIEFS = [
    [4, "一心一意", "yīxīn-yīyì", "Nhất tâm nhất ý", "Toàn tâm toàn ý", "Wholeheartedly; single-minded devotion"],
    [4, "入乡随俗", "rùxiāng-suísú", "Nhập hương tùy tục", "Nhập gia tùy tục", "When in Rome, do as the locals do"],
    [4, "马马虎虎", "mǎmǎ-hūhū", "Mã mã hổ hổ", "Tạm tạm, qua loa", "So-so; careless or mediocre"],
    [4, "半途而废", "bàntú-érfèi", "Bán đồ nhi phế", "Bỏ cuộc giữa chừng", "Give up halfway through an endeavor"],
    [4, "四面八方", "sìmiàn-bāfāng", "Tứ diện bát phương", "Khắp mọi nơi, bốn phương tám hướng", "From every direction; far and wide"],
    [4, "一举两得", "yījǔ-liǎngdé", "Nhất cử lưỡng đắc", "Một công đôi việc", "Kill two birds with one stone"],
    [4, "不可思议", "bùkě-sīyì", "Bất khả tư nghị", "Khó tin, kỳ diệu khôn lường", "Inconceivable; astonishing"],
    [4, "雪中送炭", "xuězhōng-sòngtàn", "Tuyết trung tống thán", "Giúp đúng lúc hoạn nạn (đưa than ngày tuyết)", "Timely assistance in a crisis"],
    [4, "画蛇添足", "huàshé-tiānzú", "Họa xà thiêm túc", "Vẽ rắn thêm chân (thừa thãi)", "Ruin a result with superfluous additions"],
    [4, "亡羊补牢", "wángyáng-bǔláo", "Vong dương bổ lao", "Mất bò mới lo làm chuồng (sửa sai kịp lúc)", "Mend the fold after losing sheep (better late than never)"],
    [5, "因地制宜", "yīndì-zhìyí", "Nhân địa chế nghi", "Tùy điều kiện địa phương mà định sách lược", "Adapt policy/logistics to local conditions"],
    [5, "循序渐进", "xúnxù-jiànjìn", "Tuần tự tiệm tiến", "Tiến từng bước có trình tự", "Advance systematically step by step"],
    [5, "实事求是", "shíshì-qiúshì", "Thực sự cầu thị", "Dựa trên sự thật thực chứng tìm chân lý", "Seek truth from verified empirical facts"],
    [5, "取长补短", "qǔcháng-bǔduǎn", "Thủ trường bổ đoản", "Lấy sở trường bù sở đoản", "Learn from others' strengths to offset weaknesses"],
    [5, "名副其实", "míngfù-qíshí", "Danh phó kỳ thực", "Danh xứng với thực", "Worthy of the name in reality"],
    [5, "潜移默化", "qiányí-mòhuà", "Tiềm di mặc hóa", "Ảnh hưởng âm thầm lâu dài (giáo hóa văn hóa)", "Imperceptible long-term cultural influence"],
    [5, "异曲同工", "yìqǔ-tónggōng", "Dị khúc đồng công", "Khác phương thức nhưng cùng đạt hiệu quả cao", "Different methods yielding equally fine outcomes"],
    [5, "千方百计", "qiānfāng-bǎijì", "Thiên phương bách kế", "Tìm đủ mọi cách", "By every possible means"],
    [5, "精益求精", "jīngyì-qiújīng", "Tinh ích cầu tinh", "Đã tinh xảo còn cầu tinh xảo hơn (chất lượng QC)", "Strive for relentless perfection (QC ethos)"],
    [5, "胸有成竹", "xiōngyǒu-chéngzhú", "Hung hữu thành trúc", "Đã tính toán thấu đáo trước khi hành động", "Have a well-prepared plan in mind beforehand"],
    [6, "三顾茅庐", "sāngù-máolú", "Tam cố thảo lư", "Ba lần đến lều tranh cầu hiền (Tam Quốc)", "Earnestly invite talented partners repeatedly"],
    [6, "塞翁失马", "sàiwēng-shīmǎ", "Tái ông thất mã", "Trong họa có phúc, trong phúc ẩn họa", "A blessing in disguise (Huainanzi)"],
    [6, "刻舟求剑", "kèzhōu-qiújiàn", "Khắc chu cầu kiếm", "Cứng nhắc bảo thủ, không theo biến đổi thực tế", "Rigidly ignore changing circumstances"],
    [6, "饮水思源", "yǐnshuǐ-sīyuán", "Ẩm thủy tư nguyên", "Uống nước nhớ nguồn (Văn hóa tri ân)", "Remember the source while drinking water"],
    [6, "守株待兔", "shǒuzhū-dàitù", "Thủ chu đãi thố", "Ôm cây đợi thỏ (thụ động)", "Wait passively for windfall luck"],
    [6, "百闻不如一见", "bǎiwén-bùrú-yījiàn", "Bách văn bất như nhất kiến", "Trăm nghe không bằng một thấy (khảo sát thực địa)", "Seeing firsthand beats hearing a hundred times"],
    [6, "举一反三", "jǔyī-fǎnsān", "Cử nhất phản tam", "Biết một suy ra ba (tư duy Luận Ngữ)", "Infer three applications from one principle"],
    [6, "卧薪尝胆", "wòxīn-chángdǎn", "Nằm gai nếm mật", "Kiên trì phục hưng qua gian khổ", "Endure hardship to rebuild strength"],
    [6, "海纳百川", "hǎinà-bǎichuān", "Hải nạp bách xuyên", "Biển rộng dung nạp trăm sông (tinh thần Thượng Hải)", "The ocean receives a hundred rivers (openness)"],
    [6, "居安思危", "jūān-sīwēi", "Cư an tư nguy", "Khi bình yên vẫn lo phòng rủi ro chuỗi cung ứng", "Think of contingency risks even in calm times"],
    [7, "心猿意马", "xīnyuán-yìmǎ", "Tâm viên ý mã", "Tâm trí xao động (ẩn dụ Tây Du Ký)", "Restless wavering mind (Journey to the West)"],
    [7, "世外桃源", "shìwài-táoyuán", "Thế ngoại đào nguyên", "Cõi bình yên biệt lập (Đào Tiềm)", "Serene idyllic sanctuary away from turmoil"],
    [7, "风声鹤唳", "fēngshēng-hèlì", "Phong thanh hạc lệ", "Hoảng loạn nghi kỵ quá mức (Trận Phì Thủy)", "Panic over every rustle of wind or crane call"],
    [7, "破釜沉舟", "pòfǔ-chénzhōu", "Phá phủ trầm chu", "Đốt thuyền quyết chiến không đường lui (Hạng Vũ)", "Burn boats; commit irreversibly to a goal"],
    [7, "草木皆兵", "cǎomù-jiēbīng", "Thảo mộc giai binh", "Nghi kỵ căng thẳng thấy cỏ cây đều ngỡ địch", "Extreme paranoia mistaking shadows for threats"],
    [7, "东山再起", "dōngshān-zàiqǐ", "Đông Sơn tái khởi", "Phục hồi vị thế sau thời gian ẩn dật", "Stage a decisive comeback (Xie An)"],
    [7, "纸上谈兵", "zhǐshàng-tánbīng", "Chỉ thượng đàm binh", "Lý thuyết suông thiếu thực chiến (Triệu Quát)", "Empty armchair theorizing lacking field practice"],
    [7, "唇亡齿寒", "chúnwáng-chǐhán", "Môi hở răng lạnh", "Phụ thuộc lẫn nhau về an ninh – kinh tế", "Mutual geopolitical/supply interdependence"],
    [7, "一衣带水", "yīyī-dàishuǐ", "Nhất y đới thủy", "Láng giềng sát vách cách một dải nước", "Close neighbors separated only by narrow waters"],
    [7, "和而不同", "hé'ér-bùtóng", "Hòa nhi bất đồng", "Hòa hợp nhưng giữ bản sắc khác biệt (Luận Ngữ)", "Harmony without erasing diversity (Analects)"],
    [8, "厚积薄发", "hòujī-bófā", "Hậu tích bạc phát", "Tích lũy chiều sâu dài hạn rồi bứt phá (Tô Thức)", "Accumulate deep preparation before decisive output"],
    [8, "格物致知", "géwù-zhìzhī", "Cách vật trí tri", "Khảo sát quy luật sự vật để thấu triệt tri thức", "Investigate phenomena to attain knowledge"],
    [8, "知行合一", "zhīxíng-héyī", "Tri hành hợp nhất", "Nhận thức đi liền hành động thực tiễn (Vương Dương Minh)", "Unity of knowledge and moral/practical action"],
    [8, "天人合一", "tiānrén-héyī", "Thiên nhân hợp nhất", "Hài hòa con người với nhịp điệu tự nhiên", "Harmony between human society and cosmic cycles"],
    [8, "物极必反", "wùjí-bìfǎn", "Vật cực tất phản", "Hiện tượng tới cực điểm tất chuyển hóa ngược lại", "When phenomena peak, they reverse polarity"],
    [8, "防微杜渐", "fángwēi-dùjiàn", "Phòng vi đỗ tiệm", "Ngăn chặn lỗi sai từ mầm mống nhỏ (QC/tuân thủ)", "Nip minor defects/risks in the bud"],
    [8, "统筹兼顾", "tǒngchóu-jiāngù", "Thống trù kiêm cố", "Hoạch định tổng thể hài hòa nhiều bên", "Coordinated holistic planning across stakeholders"],
    [8, "开源节流", "kāiyuán-jiéliú", "Khai nguyên tiết lưu", "Mở rộng nguồn thu và tối ưu chi phí vận hành", "Expand revenue streams while trimming waste"],
    [8, "未雨绸缪", "wèiyǔ-chóumóu", "Vị vũ trù mâu", "Chuẩn bị kế hoạch dự phòng trước cơn bão (Kinh Thi)", "Prepare contingency buffers before storms arrive"],
    [8, "相辅相成", "xiāngfǔ-xiāngchéng", "Tương phụ tương thành", "Hai hệ thống bổ trợ lẫn nhau cùng hoàn thiện", "Mutually reinforcing complementary systems"],
    [9, "纲举目张", "gāngjǔ-mùzhāng", "Cương cử mục trương", "Nắm được trục chính thì mọi chi tiết tự thông", "Grasp the master principle and details fall in place"],
    [9, "道法自然", "dàofǎ-zìrán", "Đạo pháp tự nhiên", "Vận hành thuận theo quy luật tự phát (Đạo Đức Kinh)", "Systems follow spontaneous natural order"],
    [9, "推陈出新", "tuīchén-chūxīn", "Thôi trần xuất tân", "Kế thừa tinh hoa cũ để sáng tạo cái mới", "Sublate heritage to innovate modern forms"],
    [9, "博采众长", "bócǎi-zhòngcháng", "Bác thái chúng trường", "Tổng hợp tinh túy nhiều nền văn hóa/học phái", "Synthesize best practices across traditions"],
    [9, "大象无形", "dàxiàng-wúxíng", "Đại tượng vô hình", "Hình thái tối cao vượt ngoài khuôn khổ hẹp (Lão Tử)", "Grandest pattern transcends rigid fixed bounds"],
    [9, "不卑不亢", "bùbēi-bùkàng", "Bất ti bất kháng", "Thái độ đàm phán bình tĩnh, không khúm núm không ngạo mạn", "Poised negotiation demeanor: neither servile nor arrogant"],
    [9, "求同存异", "qiútóng-cúnyì", "Cầu đồng tồn dị", "Tìm điểm chung hợp tác, gác lại dị biệt", "Seek common ground while reserving differences"],
    [9, "殊途同归", "shūtú-tóngguī", "Thù đồ đồng quy", "Khác lộ trình nhưng cùng đi tới mục tiêu chung", "Different paths converging on shared objectives"],
    [9, "与时俱进", "yǔshí-jùjìn", "Dữ thời câu tiến", "Cập nhật thể chế và kỹ năng theo thời đại", "Evolve institutions and skills alongside the era"],
    [9, "行稳致远", "xíngwěn-zhìyuǎn", "Hành ổn trí viễn", "Đi vững vàng bền bỉ để vươn xa dài hạn", "Steady disciplined execution for long-range reach"]
  ];

  var HSK_BRIEFS = RAW_BRIEFS.map(function (r, idx) {
    return {
      id: "hsk-brief-" + (idx + 1),
      hsk: r[0],
      zh: r[1],
      pinyin: r[2],
      hanViet: r[3],
      vi: r[4],
      en: r[5]
    };
  });

  window.CCE_LITERATURE_HSK_V4 = {
    canons: CANONS,
    hskBriefs: HSK_BRIEFS
  };
})();
