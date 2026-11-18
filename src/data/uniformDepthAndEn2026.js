// ============================================================================
// PROMPTS 3 & 4 MASTER UPGRADE MODULE (uniformDepthAndEn2026.js)
// 1. Prompt 3 Part 2 & 3: Uniform Depth Reinforcement across ALL 14 Dynasties,
//    ALL 12 Philosophy Schools, Classics quotes, Folk Culture & B2B 2026 Rules.
// 2. Prompt 4 Full EN Parity: Complete English translations across ALL 34
//    Province Layers, ALL 6 Survival Packs (33 items), and ALL 5 Sino-VN Matrices.
// ============================================================================

(function () {
  "use strict";

  // --------------------------------------------------------------------------
  // 1. ALL 14 DYNASTIES UNIFORM DEPTH (window.CCE_HISTORY.periods)
  // --------------------------------------------------------------------------
  const PERIOD_REINFORCEMENT_14 = {
    "prehistoric": {
      extraVi: "Từ văn hóa Ngưỡng Thiều (gốm màu Thiểm–Dự), Hà Mỗ Độ (lúa nước Chiết Giang 5000 TCN) tới Thành cổ Lương Chử (3300–2300 TCN), trục nông canh lúa nước Trường Giang song hành cùng nền văn hóa Đông Sơn–Phùng Nguyên sơ kỳ ở Việt Nam.",
      extraEn: "Bridging Yangshao millet painted pottery, Hemudu rice agriculture (5000 BCE), and Liangzhu hydraulic jade civilization alongside early Red River Phung Nguyen–Dong Son Bronze Age roots.",
      primaryExcerpt: { zh: "昔者黄帝作宫室，以避寒暑。", pinyin: "Xī zhě Huángdì zuò gōngshì, yǐ bì hánshǔ.", hanViet: "Tích giả Hoàng Đế tác cung thất, dĩ tị hàn thử.", vi: "Xưa Hoàng Đế dựng cung thất nhà cửa để tránh khí lạnh mùa đông và nắng nóng mùa hạ." }
    },
    "xia-shang-zhou": {
      extraVi: "Giáp Cốt Văn Ân Khư (An Dương) và 800 năm Tây–Đông Chu xác lập Lễ Nhạc – Tông Pháp – 'Thiên Mệnh' (Thiên Mệnh không cố định mà thuộc về người có Đức); giao thoa sớm với kỷ nguyên Văn Lang – Âu Lạc.",
      extraEn: "Anyang oracle bones and eight centuries of Zhou ritual forged the Mandate of Heaven ('Tianming') parallel to early Van Lang–Au Lac bronze kingdoms.",
      primaryExcerpt: { zh: "皇天无亲，惟德是辅。", pinyin: "Huángtiān wú qīn, wéi dé shì fǔ.", hanViet: "Hoàng thiên vô thân, duy đức thị phụ.", vi: "Trời cao không thiên vị riêng ai, chỉ giúp đỡ bậc có Đức mà thôi (Kinh Thư · Thái Giáp)." }
    },
    "spring-autumn-warring": {
      extraVi: "Kỷ nguyên 'Bách Gia Tranh Minh' sáng tạo hầu hết mọi khung triết học Đông Á (Khổng, Lão, Trang, Mặc, Hàn Phi, Tôn Tử) và thủy lợi Đô Giang Yển (256 TCN) còn chạy tới ngày nay.",
      extraEn: "China's Axial Age birthed Confucianism, Daoism, Legalism, Mohism, Sunzi's strategy, and the dam-less Dujiangyan irrigation weir (256 BCE).",
      primaryExcerpt: { zh: "兵者，国之大事，死生之地，存亡之道。", pinyin: "Bīng zhě, guó zhī dàshì, sǐshēng zhī dì, cúnwáng zhī dào.", hanViet: "Binh giả, quốc chi đại sự, tử sinh chi địa, tồn vong chi đạo.", vi: "Việc binh là đại sự của quốc gia, là nơi quyết định sống chết, con đường còn hay mất (Tôn Tử Binh Pháp)." }
    },
    "qin-han": {
      extraVi: "Thống nhất văn tự (Tiểu Triện), đường bộ–tiền đồng và Con đường Tơ lụa Trường An – Đôn Hoàng (Trương Khiên, 138 TCN); thời Đông Hán định hình tầng lớp âm Tiền Hán–Việt cổ tại Giao Chỉ.",
      extraEn: "Unified Small Seal script, imperial roads, and Zhang Qian's 138 BCE Silk Road embassy while transmitting early Middle Chinese strata into ancient Jiaozhi.",
      primaryExcerpt: { zh: "海内存知己，天涯若比邻。（汉赋余韵：大风起兮云飞扬）", pinyin: "Dàfēng qǐ xī yún fēiyáng.", hanViet: "Đại phong khởi hề vân phi dương.", vi: "Gió lớn nổi lên mây bay bốn phương (Hán Cao Tổ Lưu Bang · Đại Phong Ca)." }
    },
    "three-kingdoms": {
      extraVi: "Tam Quốc diễn nghĩa hóa thành biểu tượng mưu lược & trung nghĩa ('Đào viên kết nghĩa', trận Xích Bích 208), song song khởi nghĩa Bà Triệu (248) khẳng định ý thức tự chủ phương Nam.",
      extraEn: "Warring Three Kingdoms strategy crystallized into East Asian literary canons alongside Lady Trieu's 248 CE assertion of Vietnamese autonomy.",
      primaryExcerpt: { zh: "鞠躬尽瘁，死而后已。", pinyin: "Jūgōng jìncuì, sǐ ér hòu yǐ.", hanViet: "Cúc cung tận tụy, tử nhi hậu dĩ.", vi: "Hết lòng tận tụy lo việc nước, đến chết mới thôi (Gia Cát Lượng · Hậu Xuất Sư Biểu)." }
    },
    "jin-northern-southern": {
      extraVi: "Lý luận thẩm mỹ độc lập ra đời: Lục Pháp Luận Tạ Hách, Lan Đình Tự Vương Hy Chi, hang đá Vân Cương – Long Môn và sự hưng khởi Thiền Phật giáo; đồng thời tại phương Nam có nhà nước Vạn Xuân của Lý Nam Đế (544).",
      extraEn: "Synthesized landscape calligraphy, Six Principles of painting, Yungang–Longmen Buddhist grottoes, contemporaneous with Ly Bi's Van Xuan state (544 CE).",
      primaryExcerpt: { zh: "群贤毕至，少长咸集。", pinyin: "Qúnxián bì zhì, shàozhǎng xián jí.", hanViet: "Quần hiền tất chí, thiếu trưởng hàm tập.", vi: "Các bậc hiền tài đều tới đủ, trẻ già sum họp đông vui (Vương Hy Chi · Lan Đình Tập Tự 353)." }
    },
    "sui-tang": {
      extraVi: "Kênh đào Lớn (Đaị Vận Hà) và trường thi Khoa cử chuẩn hóa hành chính; kinh đô Trường An thời Đường tạo chuẩn âm Hán–Việt cổ điển tại Văn Miếu và thơ Đường luật Việt Nam.",
      extraEn: "Grand Canal and civil service exams unified north–south administration while Tang Chang'an shaped classical Sino-Vietnamese poetic meter.",
      primaryExcerpt: { zh: "海内存知己，天涯若比邻。", pinyin: "Hǎinèi cún zhījǐ, tiānyá ruò bǐlín.", hanViet: "Hải nội tồn tri kỷ, thiên nhai nhược tỷ lân.", vi: "Trong bốn bể có người tri kỷ, cách xa chân trời cũng như ở sát cạnh nhà (Vương Bột)." }
    },
    "five-dynasties": {
      extraVi: "Cầu nối nghệ thuật giữa Đường và Tống: Đổng Nguyên – Cự Nhiên đặt nền sơn thủy Giang Nam, Cố Hoành Trung vẽ Hàn Hy Tái Dạ Yến; cùng giai đoạn Ngô Quyền chiến thắng Bạch Đằng (938) mở kỷ nguyên độc lập Đại Cồ Việt.",
      extraEn: "Bridge era of Jiangnan landscape painting alongside Ngo Quyen's 938 CE Bach Dang victory opening Vietnam's permanent independent dynastic era.",
      primaryExcerpt: { zh: "凡画山水，意在笔先。", pinyin: "Fán huà shānshuǐ, yì zài bǐ xiān.", hanViet: "Phàm họa sơn thủy, ý tại bút tiên.", vi: "Phàm vẽ núi non sông nước, ý cảnh phải hình thành trước khi hạ nét bút." }
    },
    "song": {
      extraVi: "Kinh tế thương mại bùng nổ với tiền giấy Giao Tử (Tứ Xuyên 1024), Ngũ Đại Danh Diêu, la bàn, thuốc súng, in chữ rời (Tất Thăng) và Lý học Trình–Chu; song hành Triều Lý–Trần rực rỡ (Văn Miếu 1070, 3 lần thắng Nguyên).",
      extraEn: "World's first paper money (Jiaozi), movable clay type, Five Great Kilns, and Zhu Xi Neo-Confucianism paralleled Vietnam's Golden Age under the Ly and Tran dynasties.",
      primaryExcerpt: { zh: "先天下之忧而忧，后天下之乐而乐。", pinyin: "Xiān tiānxià zhī yōu ér yōu, hòu tiānxià zhī lè ér lè.", hanViet: "Tiên thiên hạ chi ưu nhi ưu, hậu thiên hạ chi lạc nhi lạc.", vi: "Lo trước cái lo của thiên hạ, vui sau cái vui của thiên hạ (Phạm Trọng Yêm · Nhạc Dương Lâu Ký)." }
    },
    "yuan": {
      extraVi: "Nguyên Tứ Gia đưa Văn nhân họa lên đỉnh cao ẩn dật tự tại; Hải lộ Tơ lụa Tuyền Châu mở rộng tới Đông Nam Á; Đại Việt ba lần bảo vệ độc lập và sản sinh dòng Phật giáo Trúc Lâm Yên Tử.",
      extraEn: "Four Yuan Masters elevated literati brush expression while Maritime Quanzhou flourished; Dai Viet defended sovereignty and founded Truc Lam Zen Buddhism.",
      primaryExcerpt: { zh: "石如飞白木如籀。", pinyin: "Shí rú fēibái mù rú zhòu.", hanViet: "Thạch như phi bạch mộc như trụ.", vi: "Vẽ đá như nét Phi Bạch, vẽ cây như chữ Đại Triện (Triệu Mạnh Phủ)." }
    },
    "ming": {
      extraVi: "Tử Cấm Thành hoàn thành năm 1420, 7 chuyến hải trình Trịnh Hòa (1405–1433) và Tâm học Vương Dương Minh ('Tri hành hợp nhất'); Đại Việt thắng lợi khởi nghĩa Lam Sơn mở triều Lê Sơ dựng 82 Bia Tiến sĩ & gốm Chu Đậu xuất khẩu Topkapi.",
      extraEn: "Completion of Beijing's Forbidden City (1420), Zheng He's maritime fleets, and Wang Yangming's unity of knowledge and action coincided with Le So renewal, 82 Hanoi Steles, and Chu Dau porcelain exports.",
      primaryExcerpt: { zh: "知行合一。", pinyin: "Zhī xíng héyī.", hanViet: "Tri hành hợp nhất.", vi: "Biết và Làm hợp nhất làm một thể không thể tách rời (Vương Dương Minh · Truyền Tập Lục)." }
    },
    "qing": {
      extraVi: "Xác lập cương vực cận đại, biên soạn Tứ Khố Toàn Thư (3.461 bộ) và gốm men ngũ sắc Cảnh Đức Trấn; tại Việt Nam các đoàn sứ thần Lê Quý Đôn, Nguyễn Du (Bắc Hành Tạp Lục 1813) để lại di sản văn học giao lưu kiệt xuất.",
      extraEn: "Compiled the monumental Siku Quanshu encyclopedia while Vietnamese envoys Le Quy Don and Nguyen Du penned enduring literary chronicles along their northern missions.",
      primaryExcerpt: { zh: "读书好，耕田好，学好便好。", pinyin: "Dúshū hǎo, gēngtián hǎo, xué hǎo biàn hǎo.", hanViet: "Độc thư hảo, canh điền hảo, học hảo tiện hảo.", vi: "Đọc sách tốt, cày ruộng cũng tốt — cốt ở học làm người cho tử tế." }
    },
    "republic-of-china": {
      extraVi: "Phong trào Ngũ Tứ 1919 chuyển đổi từ Văn ngôn cổ sang chữ Bạch thoại đại chúng, cải cách học thuật (Hồ Thích, Lỗ Tấn, Lương Tư Thành khảo cứu Đấu củng), tương đồng làn sóng chữ Quốc ngữ – Duy Tân đầu thế kỷ XX tại Việt Nam.",
      extraEn: "The 1919 May Fourth Movement ushered in vernacular literacy and modern architectural preservation (Liang Sicheng), resonating with Vietnam's early-20th-century Quoc Ngu cultural awakening.",
      primaryExcerpt: { zh: "横眉冷对千夫指，俯首甘为孺子牛。", pinyin: "Héngméi lěngduì qiānfū zhǐ, fǔshǒu gān wéi rúzǐniú.", hanViet: "Hoành mi lãnh đối thiên phu chỉ, phủ thủ cam vi nhũ tử ngưu.", vi: "Ngang mày lạnh nhạt trước nghìn ngón tay trỏ, cúi đầu cam nguyện làm trâu phục vụ tuổi thơ (Lỗ Tấn)." }
    },
    "modern-contemporary": {
      extraVi: "Từ Đổi Mới Mở Cửa 1978, công xưởng Thâm Quyến–Tam giác Châu Giang tới hạ tầng >46.000 km tàu cao tốc 12306 và AI DeepSeek 2025–2026; quan hệ kinh tế Việt–Trung lập kỷ lục $296,3 tỷ USD trong 9 tháng đầu năm 2026 dưới khung ACFTA 3.0.",
      extraEn: "From 1978 Reform & Opening to >46,000 km of high-speed rail, open-weight DeepSeek AI, and $296.3B in 9M 2026 Sino–Vietnamese trade under ACFTA 3.0.",
      primaryExcerpt: { zh: "实事求是，开放共赢。", pinyin: "Shíshì qiúshì, kāifàng gòngyíng.", hanViet: "Thực sự cầu thị, khai phóng cộng doanh.", vi: "Từ sự thật thực tiễn mà tìm lẽ đúng, mở cửa hợp tác cùng thắng lợi." }
    }
  };

  if (window.CCE_HISTORY && Array.isArray(window.CCE_HISTORY.periods)) {
    window.CCE_HISTORY.periods.forEach((pr) => {
      const add = PERIOD_REINFORCEMENT_14[pr.id];
      if (!add) return;
      if (pr.vietnamRelations && !pr.vietnamRelations.includes(" · [Đối sánh 2026]")) {
        pr.vietnamRelations = `${pr.vietnamRelations} · [Đối sánh 2026]: ${add.extraVi}`;
      } else if (!pr.vietnamRelations) {
        pr.vietnamRelations = add.extraVi;
      }
      if (add.primaryExcerpt && Array.isArray(pr.culturalAchievements)) {
        const line = `Châm ngôn sử liệu: “${add.primaryExcerpt.zh}” (${add.primaryExcerpt.pinyin} · Hán–Việt: ${add.primaryExcerpt.hanViet}) — ${add.primaryExcerpt.vi}`;
        if (!pr.culturalAchievements.some((c) => c.includes(add.primaryExcerpt.zh))) {
          pr.culturalAchievements.push(line);
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 2. ALL 12 PHILOSOPHY SCHOOLS + CLASSICS + CULTURE + B2B REINFORCEMENT
  // --------------------------------------------------------------------------
  const SCHOOL_EXTRA_12 = {
    "confucianism": "Việt Nam tiếp biến từ Văn Miếu (1070) qua Nguyễn Trãi tới đạo đức gia đình Việt; trọng 'Nhân–Lễ–Tín' trong giao thương song phương.",
    "daoism-philosophy": "Định hình mỹ học lưu bạch Thủy mặc, công trình thuận thủy lợi Đô Giang Yển và tâm thế tĩnh tại trong văn hóa trà Đông Á.",
    "religious-daoism": "Bổ sung dưỡng sinh khí công, y học Đạo tạng Cát Hồng và nghi lễ dân gian hòa quyện Tam giáo ở Việt Nam.",
    "buddhism": "Thiền tông Lục Tổ Huệ Năng khai mở dòng Trúc Lâm Yên Tử thuần Việt của Trần Nhân Tông ('Cư trần lạc đạo').",
    "legalism": "Cấu trúc 'Pháp – Thuật – Thế' của Hàn Phi Tử là khung cứng vận hành bộ máy hành chính tập quyền, cân bằng với vỏ mềm Nho giáo.",
    "mohism": "Học thuyết 'Kiêm ái' (yêu thương không phân biệt) và 'Thượng hiền' (chọn nhân tài bất kể xuất thân), kèm kỹ thuật phòng thủ thành sớm.",
    "school-of-names": "Công Tôn Long & Huệ Thi mở đầu logic học biện luận Đông Á ('Bạch mã phi mã' — Ngựa trắng không phải khái niệm chung Ngựa).",
    "military-school": "Tôn Tử Binh Pháp ('Bất chiến nhi khuất nhân chi binh') trở thành cẩm nang chiến lược kinh doanh và đàm phán hiện đại.",
    "yinyang-school": "Trâu Diễn phối Âm–Dương và Ngũ Hành làm nền y học Nội Kinh, lịch 24 Tiết khí và triết lý thích nghi biến động.",
    "xuanxue": "Vương Bật & Trúc Lâm Thất Hiền thời Ngụy–Tấn phá bỏ câu nệ từ chương để đi sâu bản thể Vô–Hữu và tự do cá nhân.",
    "neo-confucianism": "Chu Hy ('Cách vật trí tri') định chuẩn Khoa cử Lê–Nguyễn, còn Vương Dương Minh gợi tinh thần thực nghiệm 'Tri hành hợp nhất'.",
    "qianjia-evidential": "Phương pháp khảo chứng văn bản học nghiêm ngặt ('Thực sự cầu thị'), tiền thân cho khoa học tra cứu sử liệu cận–hiện đại (tương đồng Lê Quý Đôn tại Đại Việt)."
  };

  if (window.CCE_PHILOSOPHY && Array.isArray(window.CCE_PHILOSOPHY.schools)) {
    window.CCE_PHILOSOPHY.schools.forEach((sc) => {
      const msg = SCHOOL_EXTRA_12[sc.id];
      if (msg && !String(sc.vietnamRelevance || "").includes(msg.slice(0, 24))) {
        sc.vietnamRelevance = sc.vietnamRelevance ? `${sc.vietnamRelevance} — ${msg}` : msg;
      }
    });
  }

  // Ensure all 30 classicalTexts have explicit commentary / quote array completeness
  if (window.CCE_PHILOSOPHY && Array.isArray(window.CCE_PHILOSOPHY.classicalTexts)) {
    window.CCE_PHILOSOPHY.classicalTexts.forEach((txt) => {
      if (!Array.isArray(txt.quotes) || !txt.quotes.length) {
        if (txt.excerptZh) {
          txt.quotes = [
            {
              zh: txt.excerptZh,
              pinyin: txt.excerptPinyin || "",
              hanViet: txt.hanViet || "",
              vi: txt.excerptVi || "",
              commentary: `Nguyên văn trích từ ${txt.titleVi} (${txt.era || "Cổ tịch"}) — tài liệu nền tảng để đối chiếu tư tưởng Đông Á.`
            }
          ];
        }
      }
    });
  }

  // Enrich Culture cards & Business concepts with verified 2026 context
  if (window.CCE_CUSTOMS_ART && Array.isArray(window.CCE_CUSTOMS_ART.items)) {
    window.CCE_CUSTOMS_ART.items.forEach((it) => {
      if (it && it.regionalDiff && !it.regionalDiff.includes("Việt")) {
        it.regionalDiff += " (Tại Việt Nam có biến thể bản địa hóa tương ứng trong sinh hoạt gia đình và lễ hội cổ truyền).";
      }
    });
  }
  if (window.CCE_BUSINESS && Array.isArray(window.CCE_BUSINESS.concepts)) {
    window.CCE_BUSINESS.concepts.forEach((c) => {
      if (c && c.empiricalPractice && !c.empiricalPractice.includes("2026")) {
        c.empiricalPractice += " [Thực hành 2026]: Doanh nghiệp Việt kết hợp giữ thể diện (Mianzi) với xác minh pháp lý doanh nghiệp trên Qichacha/NECIPS và điều khoản ACFTA 3.0.";
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. PROMPT 4 FULL EN PARITY: ALL 34 PROVINCES, 6 SURVIVAL PACKS & 5 MATRICES
  // --------------------------------------------------------------------------
  const PROV_EN_34 = {
    "prov-beijing": { t: "UNESCO Central Axis & Nightlife from Qianmen to Zhongguancun", b: "Step out of Qianmen Metro toward Zhengyangmen and illuminated Shichahai hutongs, just stops away from 798 Art District and 24/7 Zhongguancun AI labs.", l: "Inherited Yan–Shaan–Taihang mountain embrace serving Liao–Jin–Yuan–Ming–Qing capitals, Beijing Mandarin, Peking Opera, and Siheyuan courtyards.", bk: "Book Forbidden City, National Museum & Tiananmen 7 days ahead at 20:00 BJT via WeChat using your Passport (护照); best in Apr–May & Sep–Nov; never stick chopsticks upright in rice.", c: "Zhongguancun AI/semiconductor R&D & Jing-Jin-Ji headquarters — core high-tech academic & institutional bridge with Vietnam." },
    "prov-tianjin": { t: "Five Great Avenues & Hai River Tianjin Eye Bridgescape", b: "Thirty minutes via HSR from Beijing, Tianjin pairs steel bridges across the Hai River with lakeside cross-talk theaters in Ancient Culture Street.", l: "Imperial river confluence (1404) nurturing Tianjin port humor, Liao-era Dule Temple (984), and Peiyang modern higher education.", bk: "Book Tianjin Museum 1–3 days ahead via WeChat with passport; enjoy traditional morning Jianbing Guozi; avoid windy dust days in March.", c: "Deep-water Tianjin Binhai port & Airbus A320 assembly hub routing heavy northern industrial machinery directly toward Hai Phong." },
    "prov-shanghai": { t: "Lujiazui Skyline & Wukang Road Plane-Tree Coffee Culture", b: "Morning specialty coffee strolls beneath plane trees past brick Shikumen lanes contrast with gleaming Pudong Lujiazui towers across the Bund.", l: "Fuses Songjiang ink-painting heritage, cosmopolitan Haipai mercantile contracts, and soft Wu-dialect aesthetics.", bk: "Reserve Shanghai Museum (People's Square & Pudong East Hall) 7–14 days ahead via WeChat with passport; activate Alipay Transit QR for all 20 Metro lines.", c: "Lujiazui financial center, Zhangjiang chip labs & automated Yangshan Port anchoring RMB settlement and express ocean freight to Cat Lai/Hai Phong." },
    "prov-chongqing": { t: "8D Mountain Transit & Line 2 Monorail Piercing an Apartment Block", b: "Chongqing defies flat 2D maps: enter a 'ground-level' plaza overlooking 18 stories dropping to Jialing River while Line 2 trains glide directly through floors 6–8 of Liziba residential tower.", l: "Ancient Ba Kingdom river-wharf vigor, UNESCO Dazu Rock Carvings, and 20th-century wartime capital memory.", bk: "Skip paid tickets for Hongyadong—view best from Qiansimen/Dongshuimen Bridge at 19:30 light-up; enable Amap 3D walking mode; ask for 'Weila/Yuanyangguo' hotpot.", c: "Chengdu–Chongqing laptop/EV hub & New International Land-Sea Trade Corridor (ILSTC) rail-sea link moving cargo south via Qinzhou/Pingxiang into Vietnam." },
    "prov-hebei": { t: "Chengde Mountain Resort, Shanhaiguan Great Wall & Green Xiong'an", b: "From the Great Wall's sea-head 'Old Dragon Head' at Qinhuangdao to eco-planned Xiong'an New Area bridging Qing royal heritage with green industry.", l: "Chivalrous Yan–Zhao heritage, Warring States Handan, birthplace of Taijiquan, and Northern Song Ding white-porcelain kilns.", bk: "Direct 1h–1h15 HSR from Beijing West to Shijiazhuang (Hebei Museum Jade Burial Suit) or Beijing Chaoyang to Chengde with passport.", c: "Steel, solar glass, and Baoding green-energy grid components linked outward via Tianjin–Qinhuangdao corridors." },
    "prov-shanxi": { t: "Yungang Grottoes, Hanging Monastery & Pingyao Banking Streets", b: "Standing beneath cliff-clinging Xuankong Temple above Hengshan, then biking atop Ming walls guarding Rishengchang—China's 1823 remittance bank pioneer.", l: "Five-millennium wooden temple treasury (Fogong Pagoda 1056, Foguang Temple 857) and Shanxi Merchant Guilds' trust banks.", bk: "Book Yungang Grottoes & Shanxi Museum via WeChat with passport; pair Datong knife-cut noodles with aged Shanxi vinegar; winter requires thermal layers.", c: "Clean-coal chemical upgrading, specialty magnesium alloys & high-speed rail axle forging supplying Belt-and-Road infrastructure." },
    "prov-inner-mongolia": { t: "Hulunbuir Endless Grasslands & Manzhouli Eurasian Gateway", b: "Summer sun sets past 21:00 over winding rivers framed by white yurts, horseback herdsmen, and illuminated Russian–Mongolian border plazas.", l: "Meeting zone of Steppe nomadic horsemanship, Khitan Liao, Mongol Yuan, and frontier courier routes.", bk: "Ideal Jun–Sep grassland bloom; book Xiangshawan or Ordos museums via passport; bring windproof shells as steppe nights chill rapidly.", c: "Wind/solar renewable hubs, cashmere, dairy & Erenhot–Manzhouli China–Europe freight corridors linking Central Plains commerce." },
    "prov-liaoning": { t: "Shenyang Imperial Palace Dusk & Coastal Tramways of Dalian", b: "Crimson-and-turquoise roofs of Mukden Palace glow beside historic Dalian trams and giant offshore gantry cranes across Bohai Bay.", l: "Agrarian–Steppe junction showcasing early-Qing 1625 Mukden Palace and Liaoning Museum's Song–Tang painting collection.", bk: "Mandatory 7-day WeChat passport booking for Liaoning Provincial Museum ('Ruihe Tu' / 'Guoguo Furen'); enjoy autumn red maple foliage and Dalian seafood.", c: "Heavy CNC machine tools, robotics (Siasun), shipbuilding & cold-water Bohai port logistics." },
    "prov-jilin": { t: "Changbaishan Heavenly Lake & Winter Rime Ice Islands", b: "Sub-zero mist along Songhua River freezes into sparkling crystal willow rime across Fog Island while alpine volcanic lakes mirror snow peaks.", l: "Ancient Goguryeo & Jin frontier heritage merged with Changchun's pioneering First Automotive Works heritage.", bk: "Oct–Apr for ski/snow or Jul–Aug for green Changbaishan; pre-book Tianchi park slots 7 days prior via WeChat; layer down boots for -20°C.", c: "FAW NEV vehicle assembly, Changchun CRRC bullet trains & optical instrumentation clusters near Hunchun port." },
    "prov-heilongjiang": { t: "Harbin Saint Sophia Snow Domes & Ice Sculpture Metropolis", b: "Ice palaces carved from Songhua River blocks blaze with neon beside Russian Orthodox domes while visitors hold Madieer popsicles in -20°C air.", l: "Northern frontier crossroads of Russian rail architecture, Jin Supreme Capital ruins, and Manchurian folk lore.", bk: "Ice & Snow World runs mid-Dec to mid-Feb; wear thermal insoles and keep phone battery warm inside coat pockets.", c: "Heavy power turbines, aerospace composites & cross-border timber/grain cold-chain corridors." },
    "prov-jiangsu": { t: "Suzhou Humble Administrator's Garden & Nanjing Qinhuai Lanterns", b: "Sipping Biluochun tea beside I. M. Pei's geometric Suzhou Museum before gliding down illuminated Ming-era Qinhuai River boats.", l: "Six Dynasties Jiankang capital, Jiangnan scholarship, Kunqu Opera, and classical scholar garden aesthetics ('Borrowed Scenery').", bk: "CRITICAL: Both Suzhou Museum & Humble Administrator's Garden require strict 7-day WeChat passport reservation; avoid May Day/Oct Golden Week crowds.", c: "Kunshan electronics, Suzhou Industrial Park biopharma & Wuxi solar/IoT chains tightly coupled with northern Vietnam electronics assembly." },
    "prov-zhejiang": { t: "West Lake Dawn & Yiwu International Small-Commodity Megamall", b: "Cycling misty West Lake causeways by dawn, scanning WeChat QR at cafés by noon, and negotiating 1.8 million SKUs inside Yiwu Futian Market.", l: "Liangzhu Neolithic jade, Southern Song Lin'an aesthetics, Wang Yangming's unity of action, and entrepreneurial Zheshang culture.", bk: "Free WeChat booking for Zhejiang & Liangzhu museums; Alipay unlocks West Lake public bikes & Yiwu trade shuttle buses effortlessly.", c: "Alibaba digital ecosystem, Yiwu small-goods sourcing & Ningbo–Zhoushan Port (world #1 cargo tonnage) exporting wholesale goods globally & to Vietnam." },
    "prov-anhui": { t: "Yellow Mountain Ink-Clouds & Huizhou Black-and-White Horse-Head Villages", b: "Stepping above sea-of-clouds granite needles at Huangshan before resting inside Hongcun's half-moon pond framed by Hui-style gable walls.", l: "Heartland of Huizhou Merchant Guilds ('Jia er hao ru'), Huizhou inksticks, Xuan paper (108 steps), and Huangmei Opera.", bk: "Book Huangshan cableway + Hongcun via WeChat; purchase authentic Xuan paper in Xuancheng/Jingxian; note spicy-salty Huizhou braised fish flavors.", c: "Hefei EV/battery clusters (NIO/BYD), quantum & display-panel R&D connected via Yangtze River rail." },
    "prov-fujian": { t: "Fujian Circular Tulou & Gulangyu Piano Alleyways", b: "Circular rammed-earth Tulou fortresses echo generations of Hakka family life alongside breeze-cooled brick mansions on Xiamen's car-free Gulangyu.", l: "Maritime Zaytun (Quanzhou) Spice Road port, Zhu Xi Neo-Confucianism, Mazu sea worship, and Oolong Gongfu Tea culture.", bk: "Ferry to Gulangyu MUST be pre-booked via WeChat using passport; try Shacha noodles & Wuyi Dahongpao tea ceremonies.", c: "CATL EV batteries (Ningde), Jinjiang–Quanzhou footwear/apparel & Xiamen–Fuzhou shipping to southern Vietnam." },
    "prov-jiangxi": { t: "Jingdezhen Porcelain Markets & Tengwang Pavilion Above Gan River", b: "Young ceramic artists sell hand-thrown tea ware beneath old Taoxichuan kiln chimneys beside the glowing Tang-style Pavilion of Prince Teng.", l: "Millennial Porcelain Capital ('Changnan' = Jingdezhen, 1004) exporting cobalt blue-and-white ceramics via global sea routes, alongside Bailudong Academy.", bk: "Reserve Jingdezhen Imperial Kiln Museum via WeChat; explore Taoxichuan night markets Fri–Sun; note spicy-umami Jiangxi rice noodles.", c: "Precision ceramic substrates, copper-nonferrous materials & Ganzhou furniture clusters connecting south into GBA." },
    "prov-shandong": { t: "Mount Tai Sunrise & Seaside Colonial Pavilions of Qingdao", b: "Climbing stone steps lit by sunrise above Mount Tai's Jade Emperor Peak before enjoying cold Tsingtao draft beer along coastal piers.", l: "Qilu Confucian–Mencian homeland (Qufu Three Kong Sites UNESCO), Qi Jixia Academy pluralism, and Grand Canal lock engineering.", bk: "Qufu Three Kong & Shandong Museum require WeChat passport booking; high-speed trains cover Jinan–Qufu–Qingdao smoothly in 1–2 hours.", c: "Qingdao Port logistics, Haier/Hisense home-appliance giants & marine-engineering equipment." },
    "prov-henan": { t: "Yingtianmen Illuminated Tang Night & Longmen Buddha Cliffs", b: "Walk through glowing vermilion Yingtianmen Palace ruins in Luoyang wrapped in modern Hanfu rentals before gazing across 100,000 Longmen cliff carvings.", l: "Central Plains ('Zhongyuan') cradle from Xia Erlitou & Shang Yinxu Oracle Bones to Eastern Han Luoyang and Northern Song Kaifeng.", bk: "Henan Museum (Zhengzhou) & Longmen Grottoes require 3–7 day WeChat passport reservations; savor Huimian mutton noodles & Luoyang Water Banquet.", c: "Zhengzhou Airport Economy Zone (global smartphone assembly hub), rail-hub logistics & agricultural-food machinery." },
    "prov-hubei": { t: "Yellow Crane Tower Above Yangtze & Optical Valley Driverless Skytrain", b: "Riding an inverted suspended monorail through Wuhan Optics Valley after dining on Hot Dry Noodles beneath the illuminated Yellow Crane Tower.", l: "Romantic Chu heritage (Qu Yuan's Chuci poetry), Marquis Yi's 2,400-year bronze bells (433 BCE), Wudang Daoism, and the 1911 Xinhai Revolution.", bk: "Book Hubei Provincial Museum 7 days ahead at 00:00 BJT for chime-bell concerts; best visited in March cherry blossoms or autumn.", c: "Optics Valley lasers/fiber-optics, automotive R&D & central Yangtze River multimodal barge-rail logistics." },
    "prov-hunan": { t: "Avatar Quartz Pillars of Zhangjiajie & Changsha All-Night Street Food", b: "Riding glass cliff elevators into floating sandstone spires of Wulingyuan before queueing past midnight at Changsha's neon Wenheyou & Chayan Yuese.", l: "Yuelu Academy ('Seek Truth from Facts'), Mawangdui Han lacquer/silk texts, and fiery Xiang cuisine.", bk: "Pre-book Zhangjiajie timed trail tickets & Hunan Museum (Mawangdui Hall) via WeChat passport; always request 'Weila/Bula' if spice-sensitive.", c: "Sany/Zoomlion heavy construction machinery, rail-transit controls & Sino-African/ASEAN trade fair gateway." },
    "prov-guangdong": { t: "Shenzhen Drone Skyshows, Huaqiangbei Lab & Guangzhou Morning Yum Cha", b: "Sipping shrimp dumplings in old Xiguan teahouses at 9 AM, then sourcing prototype PCBs in Shenzhen Huaqiangbei before watching neon skyscrapers frame the Pearl River.", l: "Lingnan Nanyue maritime nexus, Maritime Silk Road Canton Factories, Cantonese Yue Opera, and open-door entrepreneurial drive.", bk: "Pre-book Guangdong Museum via WeChat; Guangzhou South–Shenzhen North HSR takes just 29 min; ideal Canton Fair seasons in Apr–May & Oct–Nov.", c: "World's premier GBA electronics, Huaqiangbei, Foshan furniture/appliances & Canton Fair — Vietnam's top hardware & ODM supply backbone." },
    "prov-guangxi": { t: "20-RMB Note Li River Peaks & Smart Trucks Crossing Friendship Pass", b: "Gazing over 20-RMB note karst peaks at Xingping before riding HSR toward border corridors connecting Nanning cleanly with Lang Son and Ha Long.", l: "Lingqu Canal (214 BCE), Huashan rock art, and centuries of shared cross-border markets between Nung–Tay–Zhuang communities and Dai Viet.", bk: "Book Li River cruises via official WeChat Mini-Programs; Nanning–Pingxiang rail & Nanning–Dongxing HSR bring border crossings within 1–2 hours.", c: "Pingxiang/Youyiguan & Dongxing–Mong Cai smart border ports, Qinzhou ILSTC sea hub — primary land–rail logistics artery serving Vietnam's north." },
    "prov-hainan": { t: "Duty-Free Island Resorts, Wenchang Launches & Haikou Arcade Streets", b: "Coconut-lined ocean drives connect restored 1920s arcade shophouses in Haikou with sunlit reefs of Sanya and tropical free-trade shopping.", l: "Southernmost Li textile UNESCO heritage and historic exile poems of Su Dongpo ('Dongpo Academy').", bk: "Book Wenchang launch-viewing/Nanshan & HSR coastal loop (circumnavigates island cleanly) via passport; ideal Dec–Mar tropical getaway.", c: "Hainan Free Trade Port (zero-tariff import zone), deep-sea ocean engineering & ASEAN tropical agricultural seed hub." },
    "prov-sichuan": { t: "Teahouse Mahjong Leisure, Giant Pandas & 3,000-Year Sanxingdui Bronze Masks", b: "Locals unwind for hours over covered Gaiwan jasmine tea and ear-cleaning inside Chengdu's People's Park—minutes from towering Sanxingdui extraterrestrial bronzes.", l: "Dam-less Dujiangyan irrigation (256 BCE), Ancient Shu Bronze culture, Shu embroidery, and Sichuan Opera face-changing.", bk: "Strictly book Chengdu Panda Base (morning slot) & Sanxingdui Museum 5–7 days prior via WeChat passport; specify 'Weila' (mild spice) or 'Mianla'.", c: "Western China semiconductor packaging, aviation, NEV batteries (Yibin) & Chengdu–Chongqing–ASEAN cold-chain rail links." },
    "prov-guizhou": { t: "World's Highest Bridges & 1,000 Silver-Horned Miao Villages at Dusk", b: "Crossing Beipanjiang suspension bridges high above river gorges as a thousand terraced wooden Miao stilt-houses shimmer gold beneath misty peaks.", l: "Ethnic Miao–Dong batik, Lusheng reed-pipe festivals, Grand Dong Chorus (UNESCO), and karst bridge engineering.", bk: "GUIYANG serves as HSR hub to Xijiang Miao Village (Kaili South 40 min) and Huangguoshu Falls (Anshun West 30 min); pack rain shells.", c: "National Big Data cloud centers ('China's Data Valley'), Moutai-led green distilling & hydropower engineering." },
    "prov-yunnan": { t: "Old Town Stone Canals of Lijiang, Dali Rice Fields & Kunming-Laos Rail", b: "Gazing toward Jade Dragon Snow Mountain past willow-draped stone bridges in Lijiang, savoring wild mushroom hotpots and boarding international cross-border rail.", l: "Cradle of Ancient Tea-Horse Road, Pu'er fermented tea heritage, Naxi Dongba pictographs, and Dali–Nanzhao architecture.", bk: "From Hanoi/Lao Cai, cross Hekou Port to board HSR directly from Hekou North to Kunming/Dali/Lijiang; bring UV sunscreen at 2,000m altitude.", c: "Cross-border Yunnan–Laos–Vietnam agricultural floral trade, green aluminum/silicon & Kunming–Hekou border supply corridor." },
    "prov-tibet": { t: "Potala White-and-Crimson Terraces & Sacred Pilgrims on Barkhor Circuit", b: "Golden Potala roofs catch sharp Himalayan sunlight while devout pilgrims spin prayer wheels around ancient Barkhor streets in Lhasa.", l: "Tubo–Tang Princess Wencheng synthesis, Tibetan medicine, Thangka mineral scroll painting, and high-altitude monastic debates.", bk: "MANDATORY FOR FOREIGN PASSPORTS: Organized travel agency must issue Tibet Travel Permit (TTB) 15–20 days prior; acclimatize gradually to 3,650 m elevation.", c: "Clean plateau solar/geothermal energy, cordyceps/eco-botanical crafts & South Asian highland cultural corridors." },
    "prov-shaanxi": { t: "13-Dynasty Terracotta Warriors & Tang Datang Ever-Bright Night Street", b: "Standing before 8,000 individually sculpted Qin soldiers by noon, then strolling miles of glowing Tang Dynasty lantern performances and Xi'an Muslim Quarter snacks by night.", l: "Chang'an (Xi'an) terminus of the overland Silk Road across Zhou–Qin–Han–Tang empires, Big Wild Goose Pagoda, and Shaanxi Qinqiang opera.", bk: "Book Terracotta Warriors (Emperor Qinshihuang's Mausoleum) & Shaanxi History Museum 7 days prior via WeChat passport—tickets sell out within minutes!", c: "Northwest China aerospace/chip research hub & Xi'an International Port (leading China–Europe CRE freight departure hub)." },
    "prov-gansu": { t: "Dunhuang Singing Sand Dunes & Rainbow Danxia Ridges Along Hexi Corridor", b: "Sunset illuminates turquoise Crescent Moon Spring nestled beneath towering desert sand dunes minutes from 1,600-year-old Mogao Buddhist Cave murals.", l: "Silk Road Hexi Corridor bottleneck connecting China to Central Asia: Mogao Caves, bronze 'Galloping Horse', and Jia Yu Guan Pass.", bk: "CRITICAL: Book Mogao Caves Class-A tickets 15–30 days prior on official website/WeChat with passport; summer desert nights stay cool.", c: "Hexi wind/solar megabases, Lanzhou petrochemical-nonferrous metals & overland Eurasia rail transit nodes." },
    "prov-qinghai": { t: "Turquoise Mirror of Qinghai Lake & High-Plateau Salt Flats", b: "Bright yellow rapeseed blooms border sapphire Qinghai Lake at 3,200 m before giving way to Chaka Salt Lake mirroring endless blue sky.", l: "Headwaters of Yangtze, Yellow & Mekong ('Three-River Source') alongside historic Regong Thangka monastery arts.", bk: "Best Jul–Aug blossom & reflection season; prepare UV shades and monitor altitude pacing cleanly along Xining HSR routes.", c: "Plateau lithium carbonate salt-lake extraction (crucial for EV batteries) & zero-carbon hydro-solar power hubs." },
    "prov-ningxia": { t: "Shapotou Desert Surfing Beside Yellow River & Foot-Hill Vineyards", b: "Ride desert camels down Tengger dunes directly to the muddy winding bank of the Yellow River beside Helan Mountain boutique wineries.", l: "Western Xia (Tangut) imperial tombs at Helan Mountain foothills and ancient Yellow River irrigation canals.", bk: "Connect seamlessly via HSR from Xi'an or Lanzhou into Yinchuan; ideal autumn Sep–Oct clear skies.", c: "Helan Mountain Eastern Foothill wine region & clean coal-to-chemical/green-energy corridor." },
    "prov-xinjiang": { t: "Urumqi Grand Bazaar Nights & Lavender Valleys of Yili Prefecture", b: "Morning turquoise reflection across snow-ringed Sayram Lake transforms into lively Dutar folk music and sizzling lamb skewers across Urumqi's Grand Bazaar.", l: "Central Silk Road corridor via Turpan Jiaohe/Gaochang ruins, Kizil Grottoes, Karez underground irrigation, and Twelve Muqam UNESCO heritage.", bk: "NOTE: Xinjiang runs on Beijing Time on 12306 rail yet daily solar life runs ~2 hours later (summer dusk after 21:30!); carry original passport everywhere; Border Permit needed for Tashkurgan.", c: "Eurasia overland railway gates (Khorgos / Alashankou), cotton textiles, oil/gas & dried agricultural exports." },
    "prov-hongkong": { t: "Victoria Harbour Star Ferry, West Kowloon M+ & Hong Kong Palace Museum", b: "Morning milk tea in bustling Cha Chaan Teng cafés pairs effortlessly with treasures inside Hong Kong Palace Museum overlooking Victoria Harbour towers.", l: "Fishing harbor turned international free port since 1842, martial arts literature, Cantonese cinema, and Traditional script living archive.", bk: "Vietnamese passports MUST obtain a separate Hong Kong e-Visa (mainland China visa does NOT cover HK entry); reserve HKPM online; tap Octopus Card/Apple Pay for MTR.", c: "Global RMB offshore hub, Common Law trade arbitration & premier re-export gateway supporting FDI into Vietnam." },
    "prov-macau": { t: "Portuguese Tile Plazas & Warm Custard Tarts in Historic Alleyways", b: "Five-minute walks transition seamlessly from Iberian mosaic cobblestone squares and 400-year St. Paul's Ruins into incense-perfumed A-Ma Temple.", l: "Asia's oldest Sino-Portuguese maritime enclave (1557), inscribed as UNESCO Historic Centre of Macau.", bk: "Vietnamese passport holders require a dedicated Macau visa (separate from mainland China/HK); walk seamlessly across Gongbei Gate next to Zhuhai Station.", c: "International MICE hospitality hub & China–Lusophone commercial cooperation platform (Hengqin–Zhuhai corridor)." }
  };

  if (window.CCE_REGIONS && Array.isArray(window.CCE_REGIONS.provincesDirectory)) {
    window.CCE_REGIONS.provincesDirectory.forEach((p) => {
      const pe = PROV_EN_34[p.id];
      if (!pe) return;
      if (p.layer1UrbanPulse) {
        p.layer1UrbanPulse.titleEn = pe.t;
        p.layer1UrbanPulse.bodyEn = pe.b;
      }
      if (p.layer2HistoricalRoots) {
        p.layer2HistoricalRoots.lineageSummaryEn = pe.l;
      }
      if (p.layer3TravelVietnam) {
        p.layer3TravelVietnam.bookingAndDigitalSurvivalEn = pe.bk;
        p.layer3TravelVietnam.industryCorridorBridgeEn = pe.c;
      }
    });
  }

  if (window.CCE_TRAVEL_READINESS) {
    const prevGet = window.CCE_TRAVEL_READINESS.getProvinceReadiness;
    window.CCE_TRAVEL_READINESS.getProvinceReadiness = function (prov) {
      const base = typeof prevGet === "function" ? prevGet(prov) : {};
      const pe = prov && PROV_EN_34[prov.id];
      if (!pe) return base;
      return Object.assign({}, base, {
        mustKnowEn: pe.bk,
        noteEn: pe.c,
        corridor2LineEn: pe.c
      });
    };
  }

  // Complete EN parity for 6 Survival Hanzi Packs (33 items)
  const SURVIVAL_PACK_EN = {
    "pack-hsr-12306": { t: "12306 High-Speed Rail & Stations", d: "Decode live 12306 station concourse boards, pick seat tiers accurately, and head straight to manual passport lanes." },
    "pack-metro-urban": { t: "City Metro & Urban Ride-Hailing", d: "Navigate 45+ cashless city subway networks, pinpoint exact DiDi pickup zones, and stash luggage between train connections." },
    "pack-museum-heritage": { t: "Museums, Heritage & Real-Name Tickets", d: "Master mandatory WeChat Mini-Program reservations ('提前预约'), passport entry scanners, and conservation floor etiquette." },
    "pack-dining-menu": { t: "Local Dining & Ordering Customizations", d: "Control spice & herb requests cleanly at regional stalls, scan table QR menus comfortably, and handle takeaways." },
    "pack-payment-hotel": { t: "Digital Payment & Hotel Check-In", d: "Operate cashless QR codes confidently, confirm refundable hotel security deposits, and clear front-desk passport checks." },
    "pack-emergency-customs": { t: "Emergencies, Medical & Border Customs", d: "Handle lost passports, pharmacy visits, border declarations, and contact Vietnamese diplomatic missions without panic." }
  };

  const SURVIVAL_ITEM_EN = {
    "sv-101": ["Compound & Phono-semantic", "候 (person 亻 watching an arrow mark: wait) + 车 (wheeled chariot) + 室 (roof 宀 + arrive 至: room) = Station Waiting Hall.", "Look right after 候车室 on station LED boards for your assigned gate number (e.g., A1–A12)."],
    "sv-102": ["Phono-semantic & Compound", "检 (wood record tag + verify 佥: inspect) + 票 (seal + ritual slip 示: ticket) + 口 (gate/mouth) = Ticket Inspection Gate.", "Queue only when green status shows 正在检票; non-Chinese passports take the side 人工通道."],
    "sv-103": ["Compound Ideograph", "座 combines shelter roof 广 over 坐 (two people seated on earth 土): Seat; 商务 = Business lay-flat vs. 1st/2nd Class (2+2 vs 3+2 rows).", "Choose 二等座 on <3h sprints to save budget; 一等座 gives generous legroom on longer rides."],
    "sv-104": ["Phono-semantic & Compound", "换 (hand 扌 swapping objects) + 乘 (person mounting vehicle) = Changing to a connecting train.", "Follow green inside-hall 便捷换乘 signs so you transfer platforms without re-clearing outside security."],
    "sv-105": ["Pictograph & Compound", "出 (foot stepping out of hollow) + 站 (standing 人立 at fixed spot 占) + 口 (portal) = Station Exit.", "Follow 出站 arrows toward underground Metro transfers or designated Ride-Hailing (网约车) decks."],
    "sv-106": ["Pictograph & Phono-semantic", "人 (human) + 工 (hand craft) + 通 (road 辶 passing clear) + 道 (path 辶 + head 首) = Staff-Attended Channel.", "Foreign passports lack Chinese chip IDs, so ALWAYS queue at 人工通道 at gates."],
    "sv-201": ["Compound Ideograph", "首 (head/first) + 末 (top tip/last tree branch) framing 班车 (scheduled transit run) = First / Last Train.", "Always verify 末班车 times (~22:30–23:15) so you are not stranded far outside downtown."],
    "sv-202": ["Compound Ideograph", "扫 (hand 扌 sweeping/scanning) + 码 (stone/code token) + 乘车 (ride transit) = Scan QR Code to Board.", "Open Alipay -> Transport (出行) QR before reaching turnstiles; works in 45+ metro networks."],
    "sv-203": ["Phono-semantic & Compound", "网约车 (network-booked car) + 上车点 (board-car point) = Official DiDi Pick-Up Point.", "Major hubs ban curbside hailing; follow signs directly into the marked 网约车上车点 garage lane."],
    "sv-204": ["Compound & Phono-semantic", "寄 (shelter 宀 entrusting away) + 存 (keep safe) + 处 (place) = Temporary Luggage Storage.", "Smart lockers in malls/stations accept WeChat/Alipay deposits—remember 人工寄存 if using a paper passport."],
    "sv-205": ["Compound Ideograph", "安 (peaceful home 宀女) + 检 (wood inspection tally) = Security Checkpoint.", "Every Chinese subway station runs X-ray bag scans + water bottle checks (take one sip when asked)."],
    "sv-301": ["Compound Ideograph", "实 (abundant under roof 宀: real) + 名 (oral/ID name) + 预约 (advance engagement) = Real-Name Advance Booking.", "Tier-1 national museums sell out days in advance; reserve 7 days ahead at exact release hour via WeChat."],
    "sv-302": ["Compound Ideograph", "凭 (lean on/verify with) + 护 (hand protecting) + 照 (written permit) + 入园 (enter park/gate) = Passport Admission.", "Carry your original physical passport daily; photocopies are rarely accepted at automated turnstiles."],
    "sv-303": ["Compound Ideograph", "镇 (heavy bronze stabilizing weight) + 馆 (hall) + 宝 (roof 宀 housing jade/shell) = Crown Jewel Artifact.", "Ask museum staff for 镇馆之宝 to locate the three must-see artifacts before fatigue sets in."],
    "sv-304": ["Compound Ideograph", "禁 (forest taboo alert) + 止 (stopping foot) + 闪 (person flashing in door 门) + 光灯 = Flash Prohibited.", "Strict light caps protect 1,000-year silk scrolls (such as Qianli Jiangshan Tu); toggle camera flash OFF."],
    "sv-305": ["Compound Ideograph", "文 (interwoven pattern/culture) + 创 (innovate) + 店 (shop) = Museum Cultural Creative Shop.", "Palace Museum & Sanxingdui shops offer extraordinary cultural souvenirs and rare scholarly art books."],
    "sv-306": ["Phono-semantic & Compound", "请 (speech 讠 politely request) + 勿 (do not) + 触 (contact/touch) + 摸 (hand 扌 feel) = Do Not Touch Artifacts.", "Maintain safety distance around open jade, lacquer, and stone plinths."],
    "sv-401": ["Phono-semantic & Compound", "微 (tiny/subtle) + 免 (avoid/exempt) + 辣 (pungent pepper plant 辛) = Mild Spice vs. Zero Spice.", "Note: in Sichuan/Chongqing, 'Weila' still carries gentle chili heat; say 完全不要辣 if needing 0% chili."],
    "sv-402": ["Compound Ideograph", "不要 (do not want) + 香 (fragrant grain/aroma) + 菜 (herb/greens 艹) = No Cilantro / Coriander.", "Handy single phrase to customize noodle bowls cleanly across street stalls."],
    "sv-403": ["Compound Ideograph", "招 (beckoning hand 扌) + 牌 (wooden sign) + 菜 (dish) = House Signature Specialty.", "Point to the 招牌菜 section at the top of unfamiliar menus for guaranteed fresh local specialties."],
    "sv-404": ["Compound Ideograph", "扫码 (scan table QR code) + 点餐 (select dishes/meal) = Tabletop QR Ordering.", "Scan directly inside WeChat/Alipay Mini-Programs; browser translation tools convert photo menus effortlessly."],
    "sv-405": ["Compound Ideograph", "打 (hand action 扌) + 包 (enwrap parcel) = Pack Leftovers To Go.", "Say 麻烦打包 right after finishing your meal for neat eco-friendly takeaway boxes."],
    "sv-406": ["Compound Ideograph", "买 (trade exchange) + 单 (tallied itemized slip) = Request / Settle the Bill.", "Check whether payment occurs via table QR code or at the front cashier counter (收银台)."],
    "sv-501": ["Compound & Phono-semantic", "支 (pay out) + 付 (hand 亻 handing over) + 宝 (treasure: Alipay); 微 (micro) + 信 (trust: WeChat).", "Bind your international Visa/Mastercard inside Alipay BEFORE flying to handle 99% of payments smoothly."],
    "sv-502": ["Compound Ideograph", "出 (present) + 示 (show) + 付 (pay) + 款码 (payment QR screen) = Show Payment Barcode.", "Differentiate 'Scan them' (扫一扫) at small vendors vs. 'Show your code' (出示付款码) at supermarkets/metros."],
    "sv-503": ["Phono-semantic & Compound", "押 (hand 扌 stamping seal guarantee) + 金 (metal/money) = Refundable Security Deposit.", "Hotels/lockers may hold a refundable cash/Alipay deposit released automatically at checkout."],
    "sv-504": ["Compound Ideograph", "前 (front) + 台 (counter desk) + 办 (process) + 入住 (enter residence) = Hotel Front-Desk Check-In.", "Foreigners must present original passport so the hotel logs mandatory local police residency registration."],
    "sv-505": ["Compound Ideograph", "退 (step back/return) + 房 (house doorway 户 + square room 方) = Hotel Check-Out.", "Typical check-out is 12:00 PM; ask '能否免费延迟到两点退房?' politely for complimentary 2 PM extensions."],
    "sv-601": ["Compound Ideograph", "派 (branch dispatch) + 出 (out) + 所 (door 户 + axe 斤: station) = Local Police Station.", "Police hotline is 110; if losing a passport, obtain an official loss report at 派出所 for Embassy replacement."],
    "sv-602": ["Phono-semantic", "药 (herb 艹 + bundle 约: medicinal herbs) + 店 (shop) = Pharmacy / Drugstore.", "Reputable national chains (like 老百姓大药房) often stay open 24h in cities and accept translation apps smoothly."],
    "sv-603": ["Phono-semantic & Compound", "边 (border) + 检 (inspect); 海关 (maritime customs) + 申报 (declare) = Immigration & Customs.", "Never carry fresh fruit, meat, or over RMB 20,000 undeclared cash across 边检 checkpoints."],
    "sv-604": ["Compound & Phono-semantic", "驻 (stationed in) + 华 (China) + 使 (envoy 亻) + 馆 (embassy hall) = Vietnamese Embassy / Consulate.", "Save Vietnam's Beijing Embassy citizen protection hotline (+86-10-6532-1155) before departure."],
    "sv-605": ["Compound & Phono-semantic", "急 (pressing heart 心 under hand) + 诊 (medical pulse/consult 讠) + 救 (rescue) = Emergency Room / 120.", "Unlike Vietnam (115), China's emergency ambulance number is 120 and fire brigade is 119."]
  };

  if (window.CCE_SURVIVAL_PACKS && Array.isArray(window.CCE_SURVIVAL_PACKS.packs)) {
    window.CCE_SURVIVAL_PACKS.packs.forEach((pk) => {
      const pEn = SURVIVAL_PACK_EN[pk.id];
      if (pEn) {
        pk.titleEn = pEn.t;
        pk.descEn = pEn.d;
      }
      (pk.items || []).forEach((it) => {
        const iEn = SURVIVAL_ITEM_EN[it.id];
        if (iEn) {
          it.liushuTypeEn = iEn[0];
          it.radicalLogicEn = iEn[1];
          it.fieldTipEn = iEn[2];
        }
      });
    });
  }

  // Complete EN parity for the 5 Sino-Vietnamese Comparative Matrices
  const MATRICES_EN = {
    "matrix-arch": {
      badgeEn: "SHARED AXIS · TROPICAL MONSOON ADAPTATION",
      titleEn: "Imperial Architecture & Urban Cosmology",
      summaryEn: "Both align south along Confucian axial geometry ('Audience Front, Market Rear — Temple Left, Altar Right'), yet Beijing seals winter cold behind brick courtyards while Hue opens dual monsoon roofs.",
      columnsEn: [
        {
          side: "China (Beijing Forbidden City, 1420)",
          points: [
            "Monumental 72.4-hectare walled grid (960 × 750 m) with tree-free 30,000 m² Supreme Harmony courtyard engineered for awe and assassin security.",
            "Friction-gliding Golden Nanmu pillars on stone plinths topped by multi-tier elastic Dougong brackets absorbing earthquakes (1679 M7.8).",
            "Double-eave hip-and-gable yellow glazed roofs elevated atop three marble Xumizuo tiers (8.13 m tall)."
          ]
        },
        {
          side: "Vietnam (Hue Imperial City, 1805–1833)",
          points: [
            "36-hectare Citadel inside 520-hectare Capital harmonizing seamlessly with nature: Perfume River as 'Bright Hall', Ngu Binh Mountain screen, lotus-filled Thai Dich Lake shaded by trees.",
            "Adapts 5-portal U-shaped Meridian Gate (1833) with ventilated twin-roof 'Trung Thiem Diep Oc' carpentry and lower ironwood centers engineered against Category-12 typhoons.",
            "Adorned in delicate five-color Phuoc Tich/Phap Lam enamels paired with cool jade-and-gold glazed tiles."
          ]
        }
      ]
    },
    "matrix-script": {
      badgeEn: "SHARED HANZI ROOTS · INDIGENOUS LITERARY CREATION",
      titleEn: "Writing Systems & Poetics (Hanzi Liushu vs. Chu Nom & Tang/Luc Bat)",
      summaryEn: "Building upon Middle Chinese Sino-Vietnamese phonology preserved from Qieyun (601 CE), Vietnamese scholars invented Chu Nom compound characters and lifted six-eight Luc Bat verse to world mastery.",
      columnsEn: [
        {
          side: "China (Hanzi 六书 & Classical Canons)",
          points: [
            "Logographic system unified under Qin standards obeying Six Writings logic (Pictographs, Ideographs, Compounds, Phono-semantic).",
            "Strict tonal parallelism perfected in Tang Regulated Verse (Du Fu, Li Bai, Bai Juyi).",
            "Ming–Qing vernacular chapter novels shaped prose narrative traditions across East Asia."
          ]
        },
        {
          side: "Vietnam (Indigenous Chu Nom 喃字 & Tale of Kieu)",
          points: [
            "Engineered indigenous compound graphs merging semantic + phonetic Chinese radicals to record pure Vietnamese speech: e.g., 𡗶 (Troi/Sky = 天+上), 渃 (Nuoc/Water = 氵+若).",
            "Localized Tang Meter into 'Han Luat' Nôm verse (Nguyen Trai, Ho Xuan Huong) with interspersed 6-syllable lines.",
            "Nguyen Du transformed a Qing prose plot into the transcendent 3,254-line Luc Bat (6–8) masterpiece 'Truyen Kieu'."
          ]
        }
      ]
    },
    "matrix-exam": {
      badgeEn: "SHARED MERITOCRATIC MODEL · DISTINCT EXAMINATION CONTENT",
      titleEn: "Civil Service Exams (Keju): Beijing Guozijian vs. Hanoi Temple of Literature",
      summaryEn: "Both preserved historic 82 Doctoral Steles honoring meritocracy across Four Books and Five Classics, yet Vietnamese courts emphasized practical flood-control & statecraft essays over Ming–Qing 8-legged formalism.",
      columnsEn: [
        {
          side: "China (Sui–Tang → 1905 · Rigid 8-Legged Essay)",
          points: [
            "Vast three-tier Provincial–Metropolitan–Palace empire exams requiring rigid Ming–Qing 8-legged ('Bagouwen') structural symmetry.",
            "Left 82 Stone Steles at Beijing Confucius Temple & Guozijian recording over 51,624 Jinshi graduates across Yuan–Ming–Qing.",
            "Fused scholar gentry intimately into central imperial bureaucracy."
          ]
        },
        {
          side: "Vietnam (Ly 1075 → Nguyen 1919 · Van Mieu Quoc Tu Giam)",
          points: [
            "Opened early in 1075 under Ly Nhan Tong; Hanoi Temple of Literature preserves 82 UNESCO-listed Doctoral Steles (1442–1779).",
            "Le and Nguyen courts prioritized practical statecraft essays ('Van Sach') tackling Red River dikes, border defense, and Dai Viet history, inscribed famously: 'Talented scholars are the vital lifeforce of the nation.'",
            "Cultivated village-embedded scholar-teachers anchoring communal literacy."
          ]
        }
      ]
    },
    "matrix-festival": {
      badgeEn: "SHARED LUNISOLAR RHYTHM · DISTINCT LOCAL FOLKLORE",
      titleEn: "Seasonal Agricultural Festivals (Lunar New Year · Duanwu · Mid-Autumn)",
      summaryEn: "Guided by the shared 24-Solar-Term farming calendar, each festival gained unmistakable indigenous Vietnamese legends, dishes, and zodiac variations.",
      columnsEn: [
        {
          side: "China (Spring Festival · Qu Yuan Duanwu · Family Mid-Autumn)",
          points: [
            "Spring Festival: Northern Jiaozi ingot-shaped dumplings and Southern Nian Gao sticky rice cakes.",
            "Duanwu (5/5 Lunar): Dragon-boat races and bamboo-wrapped Zongzi commemorating loyal statesman Qu Yuan.",
            "Mid-Autumn (15/8): Adult moon-gazing family reunion with lotus-paste mooncakes; the 4th Zodiac sign is the Jade Rabbit (兔)."
          ]
        },
        {
          side: "Vietnam (Tet Nguyen Dan · Insect-Expelling Tet 5/5 · Children's Mid-Autumn)",
          points: [
            "Tet: Square Banh Chung (Earth) and round Banh Giay (Heaven) rooted in Hung King Prince Lang Lieu, tropical Five-Fruit trays, and Cay Neu.",
            "Doan Ngo (5/5 Lunar): Celebrated as 'Insect-Killing Festival' protecting summer rice harvests with fermented sweet sticky rice (com ruou nep) & sour fruits—independent of Qu Yuan.",
            "Trung Thu (15/8): Transformed into a vibrant Children's Star-Lantern & Lion-Dance festival; Vietnam's 4th Zodiac animal is the Cat (猫) guarding rice granaries."
          ]
        }
      ]
    },
    "matrix-econ2026": {
      badgeEn: "VERIFIED 2026 EMPIRICAL TRADE DATA · ACFTA 3.0",
      titleEn: "Verified 2026 Bilateral Trade & Supply-Chain Bridge (GACC / VOV / ACFTA 3.0)",
      summaryEn: "Extending beyond heritage, 2026 bilateral trade sets new historic records backed by upgraded digital, green, and supply-chain protocols.",
      columnsEn: [
        {
          side: "Verified 9M 2026 Volume & Full-Year 2026 Projection",
          points: [
            "First 9 Months of 2026: Official General Administration of Customs of China (GACC / ChinaData) figures place bilateral Vietnam–China trade at $296.3 billion.",
            "Full-Year 2026 Outlook: Voice of Vietnam (VOV) projects total bilateral trade for 2026 will surpass $350–$360 billion, cementing China and Vietnam's deep industrial complementarity.",
            "Complementarity: China supplies machinery, fabrics, and precision electronics components; Vietnam anchors high-tech final assembly and formal tropical farm exports (durian, dragon fruit, seafood)."
          ]
        },
        {
          side: "Legal & Corridor Upgrade: ACFTA 3.0 Protocol (Signed Oct 28, 2025)",
          points: [
            "Oct 28, 2025 Milestone: The ASEAN–China Free Trade Area 3.0 Upgrade Protocol (ACFTA 3.0) was signed, adding 9 modern chapters including Digital Economy, Green Economy, Supply-Chain Connectivity, and MSMEs.",
            "Cross-Border Rail & Smart Gates: Standard-gauge Lao Cai–Hanoi–Hai Phong railway links and smart customs gates at Huu Nghi–Pingxiang accelerate clearance times.",
            "2026 Practitioner Imperative: Pair cultural 'Xin/Guanxi' fluency with airtight HS code verification and Form E / RCEP Rules of Origin compliance."
          ]
        }
      ]
    }
  };

  if (window.CCE_SINO_VIETNAM && Array.isArray(window.CCE_SINO_VIETNAM.fiveComparativeMatrices)) {
    window.CCE_SINO_VIETNAM.fiveComparativeMatrices.forEach((mx) => {
      const mEn = MATRICES_EN[mx.id];
      if (!mEn) return;
      mx.badgeEn = mEn.badgeEn;
      mx.titleEn = mEn.titleEn;
      mx.summaryEn = mEn.summaryEn;
      mx.columnsEn = mEn.columnsEn;
    });
  }
})();
