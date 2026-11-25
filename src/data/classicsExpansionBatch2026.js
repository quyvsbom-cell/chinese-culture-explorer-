// ============================================================================
// KNOWLEDGE EXPANSION ENGINE — MODULE 2 (BATCH 2)
// Thư viện Cổ tịch Nguyên điển (30 Canonical Primary Texts — Tứ Khố: Kinh · Sử · Tử · Tập)
// Expands Philosophy.classicalTexts from 19 -> 30 canonical texts with multi-passage
// bilingual/trilingual excerpts (hanziSc, hanziTc, pinyin, hanViet, vi, en, commentary, keyTerms)
// ============================================================================

(function () {
  window.CCE_PHILOSOPHY = window.CCE_PHILOSOPHY || {};
  window.CCE_PHILOSOPHY.classicalTexts = window.CCE_PHILOSOPHY.classicalTexts || [];

  const TREASURY_CATEGORIES = [
    { id: "all", label: "Tất cả Tứ Khố (30 Bộ)", hanzi: "四库全书总目" },
    { id: "kinh", label: "Kinh bộ 经部 (Kinh điển Nho – Ngũ Kinh)", hanzi: "经部" },
    { id: "su", label: "Sử bộ 史部 (Chính sử & Biên niên)", hanzi: "史部" },
    { id: "tu", label: "Tử bộ 子部 (Bách gia, Binh, Y, Nông, Nghệ)", hanzi: "子部" },
    { id: "tap", label: "Tập bộ 集部 (Thi từ, Tản văn, Tiểu thuyết & Đi sứ)", hanzi: "集部" }
  ];

  // Helper to enrich existing 19 classical texts with Four Treasuries metadata & 3 benchmark excerpts each
  const ENRICH_EXISTING_19 = {
    "yijing": {
      treasury: "kinh", treasuryLabel: "Kinh bộ 经部", author: "Chu Văn Vương, Chu Công & Khổng Môn (Thập Dực)",
      whyItMatters: "Đứng đầu Lục Kinh; lập mô hình lô-gic nhị phân Âm–Dương và triết lý 'Thời – Vị' trong quyết sách và thích nghi biến cố.",
      excerpts: [
        { passageTitle: "Tượng truyện Quẻ Càn & Khôn", hanziSc: "天行健，君子以自强不息；地势坤，君子以厚德载物。", hanziTc: "天行健，君子以自強不息；地勢坤，君子以厚德載物。", pinyin: "Tiān xíng jiàn, jūnzǐ yǐ zìqiáng bùxī; dìshì kūn, jūnzǐ yǐ hòudé zàiwù.", hanViet: "Thiên hành kiện, quân tử dĩ tự cường bất tức; địa thế khôn, quân tử dĩ hậu đức tải vật.", vi: "Trời vận hành mạnh mẽ không ngừng, người quân tử noi theo tự rèn chẳng nghỉ; đất dày thuận hòa, người quân tử lấy đức dày chở nâng muôn vật.", en: "Heaven moves with constant vigor; thus the noble person strives unceasingly. Earth's bearing is receptive; thus the noble person sustains all things with ample virtue.", commentary: "Hai câu châm ngôn nền tảng định hình lý tưởng tu thân vừa chủ động tiến thủ (Càn) vừa bao dung vững chãi (Khôn).", keyTerms: ["yinyang", "junzi"] },
        { passageTitle: "Hệ Từ Hạ — Biến dịch Thông đạt", hanziSc: "穷则变，变则通，通则久。", hanziTc: "窮則變，變則通，通則久。", pinyin: "Qióng zé biàn, biàn zé tōng, tōng zé jiǔ.", hanViet: "Cùng tắc biến, biến tắc thông, thông tắc cửu.", vi: "Bế tắc đến cực điểm tất phải cải biến; có cải biến mới khai thông được đường đi; thông suốt rồi mới bền lâu.", en: "When stagnation reaches its limit, change ensues; through change comes continuity; with continuity comes endurance.", commentary: "Nguyên tắc sinh tồn của mọi thể chế và doanh nghiệp trước biến động cấu trúc.", keyTerms: ["yinyang"] },
        { passageTitle: "Hệ Từ Thượng — Nhất Âm Nhất Dương", hanziSc: "一阴一阳之谓道，继之者善也，成之者性也。", hanziTc: "一陰一陽之謂道，繼之者善也，成之者性也。", pinyin: "Yì yīn yì yáng zhī wèi Dào, jì zhī zhě shàn yě, chéng zhī zhě xìng yě.", hanViet: "Nhất âm nhất dương chi vị Đạo, kế chi giả thiện dã, thành chi giả tính dã.", vi: "Một âm một dương luân chuyển gọi là Đạo; nối theo sự vận hành ấy là điều Thiện; kết thành ở mỗi sinh linh gọi là Bản tính.", en: "One Yin and one Yang in alternation constitute the Way; following it is goodness, realizing it is one's nature.", commentary: "Định nghĩa kinh điển nhất của triết học biện chứng Á Đông về Đạo.", keyTerms: ["yinyang", "daode"] }
      ]
    },
    "shangshu": {
      treasury: "kinh", treasuryLabel: "Kinh bộ 经部", author: "Sử quan Thượng cổ Chu–Tần (Khổng Tử hiệu đính truyền thuyết)",
      whyItMatters: "Bộ văn kiện chính trị cổ nhất Trung Hoa; khai sinh thuyết 'Thiên Mệnh chuyển dời theo Đức' và nguyên tắc 'Dân duy bang bản'.",
      excerpts: [
        { passageTitle: "Ngũ Tử Chi Ca — Dân Duy Bang Bản", hanziSc: "民惟邦本，本固邦宁。", hanziTc: "民惟邦本，本固邦寧。", pinyin: "Mín wéi bāng běn, běn gù bāng níng.", hanViet: "Dân duy bang bản, bản cố bang ninh.", vi: "Nhân dân là gốc rễ của nước; gốc có vững chắc thì nước mới yên bình.", en: "The people are the root of the state; only when the root is firm is the state at peace.", commentary: "Tư tưởng 'Dân bản' sớm nhất thời Tam Đại, được Lê Thánh Tông và Nguyễn Trãi Việt Nam tiếp biến mạnh mẽ.", keyTerms: ["daode"] },
        { passageTitle: "Đại Vũ Mô — Thận trọng Quyền lực", hanziSc: "人心惟危，道心惟微；惟精惟一，允执厥中。", hanziTc: "人心惟危，道心惟微；惟精惟一，允執厥中。", pinyin: "Rénxīn wéi wēi, dàoxīn wéi wēi; wéi jīng wéi yī, yǔn zhí jué zhōng.", hanViet: "Nhân tâm duy nguy, đạo tâm duy vi; duy tinh duy nhất, doãn chấp quyết trung.", vi: "Lòng dục vọng con người thì chông chênh nguy hiểm, lòng đạo lý thì tinh vi khó nắm; phải chuyên ròng rã một lòng mới giữ được đạo Trung dung.", en: "The human heart is precarious, the Way-mind is subtle; remain focused and unified, and hold fast to the Mean.", commentary: "16 chữ tâm truyền nổi tiếng nhất của Tống Nho (Chu Hy, Trình Di) bàn về tự kiểm soát tâm thức.", keyTerms: ["ren", "junzi"] },
        { passageTitle: "Hồng Phạm — Cửu Trù Ngũ Hành", hanziSc: "五行：一曰水，二曰火，三曰木，四曰金，五曰土。", hanziTc: "五行：一曰水，二曰火，三曰木，四曰金，五曰土。", pinyin: "Wǔxíng: yī yuē shuǐ, èr yuē huǒ, sān yuē mù, sì yuē jīn, wǔ yuē tǔ.", hanViet: "Ngũ hành: nhất viết Thủy, nhị viết Hỏa, tam viết Mộc, tứ viết Kim, ngũ viết Thổ.", vi: "Năm loại vận động vật chất cơ bản là Thủy (nước thấm xuống), Hỏa (lửa bốc lên), Mộc (cây uốn thẳng), Kim (kim loại rèn đổi), Thổ (đất gieo gặt).", en: "The Five Agents: Water moistening downward, Fire flaming upward, Wood bending and straightening, Metal yielding to molding, Earth yielding crops.", commentary: "Văn bản cổ nhất định nghĩa Ngũ Hành như 5 đặc tính vận động thay vì 5 vật chất tĩnh thuần túy.", keyTerms: ["wuxing"] }
      ]
    },
    "shijing": {
      treasury: "kinh", treasuryLabel: "Kinh bộ 经部", author: "Nhân dân & Nhạc quan Tây Chu – Xuân Thu (305 thiên)",
      whyItMatters: "Tổng tập thi ca sớm nhất Đông Á; phản chiếu chân thực hôn nhân, lao động nông nghiệp và tiếng nói phê phán của dân gian cổ đại.",
      excerpts: [
        { passageTitle: "Chu Nam • Quan Thư (Mở đầu 305 thiên)", hanziSc: "关关雎鸠，在河之洲。窈窕淑女，君子好逑。", hanziTc: "關關雎鳩，在河之洲。窈窕淑女，君子好逑。", pinyin: "Guānguān jūjiū, zài hé zhī zhōu. Yǎotiǎo shūnǚ, jūnzǐ hǎo qiú.", hanViet: "Quan quan thư cưu, tại hà chi châu. Yểu điệu thục nữ, quân tử hảo cầu.", vi: "Tiếng chim thư cưu cất lên êm ái trên bãi cát giữa dòng sông; người thiếu nữ đoan trang hiền thục là bạn trăm năm xứng đôi của chàng quân tử.", en: "Fair, fair cry the ospreys on the island in the river; graceful and virtuous maiden, a good mate for the gentleman.", commentary: "Khổng Tử khen 'Lạc nhi bất dâm, ai nhi bất thương' (vui mà không buông tuồng, buồn mà không bi lụy).", keyTerms: ["junzi", "li"] },
        { passageTitle: "Tần Phong • Kiêm Gia", hanziSc: "蒹葭苍苍，白露为霜。所谓伊人，在水一方。", hanziTc: "蒹葭蒼蒼，白露為霜。所謂伊人，在水一方。", pinyin: "Jiānjiā cāngcāng, báilù wéi shuāng. Suǒwèi yīrén, zài shuǐ yìfāng.", hanViet: "Kiêm gia thương thương, bạch lộ vi sương. Sở vị y nhân, tại thủy nhất phương.", vi: "Lao sậy xanh rờn trong sương trắng đầu thu đọng thành giá rét; người ta hằng nhớ mong đang ở tận bến nước bên kia.", en: "Thick grow the reeds, white dew turns to frost. The one I long for stands across the water.", commentary: "Tuyệt tác tượng trưng về hành trình đi tìm lý tưởng và người tri âm.", keyTerms: ["wenhua"] },
        { passageTitle: "Vệ Phong • Mộc Qua (Đạo Báo Đáp)", hanziSc: "投我以木桃，报之以琼瑶。匪报也，永以为好也！", hanziTc: "投我以木桃，報之以瓊瑤。匪報也，永以為好也！", pinyin: "Tóu wǒ yǐ mùtáo, bào zhī yǐ qióngyáo. Fěi bào yě, yǒng yǐwéi hǎo yě!", hanViet: "Đầu ngã dĩ mộc đào, báo chi dĩ quỳnh dao. Phỉ báo dã, vĩnh dĩ vi hảo dã!", vi: "Người trao tặng ta trái mộc đào, ta đền đáp lại bằng ngọc quỳnh dao quý; chẳng phải để trả ngang giá món quà đâu, mà để kết tình giao hảo bền lâu mãi mãi!", en: "You tossed me a quince; I return you fine jade—not mere repayment, but a pledge of lasting affection.", commentary: "Nguồn suối nguyên sơ của văn hóa Nhân tình (人情) và trao tặng trọng tình hơn trọng vật ở Đông Á.", keyTerms: ["renqing"] }
      ]
    },
    "liji-zhouli": {
      treasury: "kinh", treasuryLabel: "Kinh bộ 经部", author: "Học phái Nho gia Chiến Quốc – Tây Hán (Đới Thánh biên tập)",
      whyItMatters: "Quy phạm hóa toàn bộ nghi lễ gia đình, chính trị lục bộ và lý tưởng xã hội 'Thiên hạ vi công – Đại đồng' ảnh hưởng suốt 2.000 năm.",
      excerpts: [
        { passageTitle: "Lễ Vận — Lý Tưởng Đại Đồng", hanziSc: "大道之行也，天下为公。选贤与能，讲信修睦。", hanziTc: "大道之行也，天下為公。選賢與能，講信修睦。", pinyin: "Dàdào zhī xíng yě, tiānxià wéi gōng. Xuǎn xián yǔ néng, jiǎng xìn xiū mù.", hanViet: "Đại đạo chi hành dã, thiên hạ vi công. Tuyển hiền dữ năng, giảng tín tu mục.", vi: "Khi Đại đạo được thi hành, thiên hạ là của chung mọi người; chọn người hiền tài đức độ, trọng chữ Tín và giữ hòa hiếu với láng giềng.", en: "When the Grand Way prevails, the world is held in common for all; the worthy and capable are elected, sincerity and harmony are cultivated.", commentary: "Lý tưởng chính trị xã hội cao nhất của Nho gia cổ điển, từng được Tôn Trung Sơn và nhiều nhà canh tân Đông Á tôn làm kim chỉ nam.", keyTerms: ["ren", "li"] },
        { passageTitle: "Học Ký — Triết Lý Dạy Học", hanziSc: "玉不琢，不成器；人不学，不知道。", hanziTc: "玉不琢，不成器；人不學，不知道。", pinyin: "Yù bù zhuó, bù chéng qì; rén bù xué, bù zhī Dào.", hanViet: "Ngọc bất trác, bất thành khí; nhân bất học, bất tri đạo.", vi: "Viên ngọc không mài giũa thì chẳng thành đồ quý; con người không chịu học hành thì chẳng thể hiểu đạo lý làm người.", en: "Jade unpolished never becomes a fine vessel; a person who does not study never knows the Way.", commentary: "Câu mở đầu thiên *Học Ký* — chuyên luận giáo dục học sớm nhất thế giới.", keyTerms: ["wenhua"] },
        { passageTitle: "Khúc Lễ — Kính Trọng Tự Chủ", hanziSc: "礼尚往来。往而不来，非礼也；来而不往，亦非礼也。", hanziTc: "禮尚往來。往而不來，非禮也；來而不往，亦非禮也。", pinyin: "Lǐ shàng wǎnglái. Wǎng ér bù lái, fēi lǐ yě; lái ér bù wǎng, yì fēi lǐ yě.", hanViet: "Lễ thượng vãng lai. Vãng nhi bất lai, phi lễ dã; lai nhi bất vãng, diệc phi lễ dã.", vi: "Phép Lễ quý ở sự qua lại tương xứng; ta đi mà người không đáp lại, hay người tới mà ta không đáp lễ, đều chẳng phải Lễ.", en: "Propriety esteems reciprocity. Giving without return, or receiving without reciprocating, violates true propriety.", commentary: "Cơ sở lý thuyết cho quy tắc có đi có lại trong xã hội Á Đông.", keyTerms: ["li", "renqing"] }
      ]
    },
    "chunqiu-zuozhuan": {
      treasury: "kinh", treasuryLabel: "Kinh bộ 经部", author: "Khổng Tử (Xuân Thu) & Tả Khâu Minh (Tả Truyện)",
      whyItMatters: "Đặt nền móng phép viết sử 'Xuân Thu bút pháp' (một chữ khen chê có sức nặng ngàn cân) và ngoại giao chiến lược Xuân Thu.",
      excerpts: [
        { passageTitle: "Tả Truyện — Chính Khí Sử Quan Trung Thực", hanziSc: "居安思危，思则有备，有备无患。", hanziTc: "居安思危，思則有備，有備無患。", pinyin: "Jū ān sī wēi, sī zé yǒubèi, yǒubèi wúhuàn.", hanViet: "Cư an tư nguy, tư tắc hữu bị, hữu bị vô hoạn.", vi: "Sống trong lúc yên ổn phải nghĩ tới lúc nguy nan; có nghĩ xa mới chuẩn bị phòng ngừa; có chuẩn bị trước mới tránh được tai họa.", en: "In times of peace, think of danger; forethought brings preparedness, and preparedness averts calamity.", commentary: "Phương châm quản trị rủi ro nổi tiếng của Ngụy Giáng nói với Tấn Điệu Công.", keyTerms: ["junzi"] },
        { passageTitle: "Tả Truyện — Tam Bất Hủ Của Đời Người", hanziSc: "太上有立德，其次有立功，其次有立言，虽久不废，此之谓不朽。", hanziTc: "太上有立德，其次有立功，其次有立言，雖久不廢，此之謂不朽。", pinyin: "Tàishàng yǒu lìdé, qícì yǒu lìgōng, qícì yǒu lìyán, suī jiǔ bù fèi, cǐ zhī wèi bùxiǔ.", hanViet: "Thái thượng hữu lập đức, kỳ thứ hữu lập công, kỳ thứ hữu lập ngôn, tuy cửu bất phế, thử chi vị bất hủ.", vi: "Bậc nhất là lập Đức (tấm gương đạo đức), thứ nhì là lập Công (sự nghiệp giúp đời), thứ ba là lập Ngôn (tư tưởng sách vở để lại); dầu trải qua năm tháng vẫn không mai một, đó mới gọi là Bất hủ.", en: "Highest is establishing virtue, next is worthy deeds, third is enduring words; unforgotten through ages—this is immortality.", commentary: "Chuẩn giá trị nhân sinh cao nhất của giới sĩ đại phu Đông Á suốt hai thiên niên kỷ.", keyTerms: ["daode"] },
        { passageTitle: "Tả Truyện — Lợi Ích Công Chính (Đa hành bất nghĩa)", hanziSc: "多行不义必自毙，子姑待之。", hanziTc: "多行不義必自斃，子姑待之。", pinyin: "Duō xíng bù yì bì zì bì, zǐ gū dài zhī.", hanViet: "Đa hành bất nghĩa tất tự tệ, tử cô đãi chi.", vi: "Kẻ làm nhiều điều bất nghĩa ắt tự chuốc lấy diệt vong, ông cứ chờ xem.", en: "Repeatedly committing unrighteous deeds guarantees self-destruction; simply wait and see.", commentary: "Bài học chiến lược thời Trịnh Trang Công bình loạn Thái Thúc Đoạn.", keyTerms: ["li"] }
      ]
    },
    "lunyu": {
      treasury: "kinh", treasuryLabel: "Kinh bộ 经部", author: "Môn đệ Khổng Tử biên tập (20 thiên)",
      whyItMatters: "Kinh điển cốt lõi nhất của Nho gia, định hình luân lý Nhân–Lễ–Tín, tư tưởng 'Hữu giáo vô loại' và thái độ học tập suốt đời.",
      excerpts: [
        { passageTitle: "Học Nhi — Niềm Vui Tự Học", hanziSc: "学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？", hanziTc: "學而時習之，不亦說乎？有朋自遠方來，不亦樂乎？人不知而不慍，不亦君子乎？", pinyin: "Xué ér shí xí zhī, bù yì yuè hū? Yǒu péng zì yuǎnfāng lái, bù yì lè hū? Rén bù zhī ér bù yùn, bù yì jūnzǐ hū?", hanViet: "Học nhi thời tập chi, bất diệc duyệt hồ? Hữu bằng tự viễn phương lai, bất diệc lạc hồ? Nhân bất tri nhi bất uẩn, bất diệc quân tử hồ?", vi: "Học rồi thường xuyên ôn tập thực hành, chẳng vui sướng sao? Có bạn đồng chí hướng từ phương xa tới, chẳng hạnh phúc sao? Người đời chưa hiểu mình mà chẳng oán giận, chẳng phải bậc quân tử sao?", en: "To learn and consistently practice, is that not a pleasure? To welcome friends from afar, is that not joy? Not to resent being unrecognized, is that not noble?", commentary: "Ba câu mở đầu toàn bộ Luận Ngữ gói trọn giáo dục, tình bạn và bản lĩnh nội tâm.", keyTerms: ["junzi", "ren"] },
        { passageTitle: "Vi Chính — Tư Duy Phản Biện Trong Học Tập", hanziSc: "学而不思则罔，思而不学则殆。", hanziTc: "學而不思則罔，思而不學則殆。", pinyin: "Xué ér bù sī zé wǎng, sī ér bù xué zé dài.", hanViet: "Học nhi bất tư tắc võng, tư nhi bất học tắc đãi.", vi: "Chỉ đọc học thuộc lòng mà không suy ngẫm phản biện thì mù mờ vô định; chỉ suy nghĩ viển vông mà không chịu học hỏi chứng cứ thì bế tắc nguy hiểm.", en: "Learning without reflection is blind; thinking without learning is perilous.", commentary: "Phương pháp luận học thuật cân bằng giữa tiếp nhận tri thức và tự chủ tư duy.", keyTerms: ["wenhua", "junzi"] },
        { passageTitle: "Nghiêu Viết — Đạo Khoan Thứ Của Người Quân Tử", hanziSc: "己所不欲，勿施于人。", hanziTc: "己所不欲，勿施於人。", pinyin: "Jǐ suǒ bù yù, wù shī yú rén.", hanViet: "Kỷ sở bất dục, vật thi ư nhân.", vi: "Điều gì chính mình không muốn thì chớ đem làm cho người khác.", en: "What you do not wish for yourself, do not impose upon others.", commentary: "Quy tắc Vàng đạo đức nhân loại trong đối thoại giữa Khổng Tử và Trọng Cung.", keyTerms: ["ren"] }
      ]
    },
    "mengzi": {
      treasury: "kinh", treasuryLabel: "Kinh bộ 经部", author: "Mạnh Tử & Đệ tử (7 thiên)",
      whyItMatters: "Phát triển học thuyết 'Tính Thiện', khí phách 'Phú quý bất năng dâm' và tuyên ngôn dân chủ cổ đại 'Dân vi quý'.",
      excerpts: [
        { passageTitle: "Tận Tâm Hạ — Dân Vi Quý", hanziSc: "民为贵，社稷次之，君为轻。", hanziTc: "民為貴，社稷次之，君為輕。", pinyin: "Mín wéi guì, shèjì cì zhī, jūn wéi qīng.", hanViet: "Dân vi quý, xã tắc thứ chi, quân vi khinh.", vi: "Nhân dân là quý trọng nhất, tiếp đến mới là đất nước xã tắc, còn ngôi vua là nhẹ nhất.", en: "The people are most precious, the altars of the land and grain next, and the ruler least of all.", commentary: "Đỉnh cao tư tưởng dân bản Á Đông khiến nhiều vua chuyên chế thời Minh từng đòi gạch bỏ khỏi kinh sách!", keyTerms: ["ren"] },
        { passageTitle: "Đằng Văn Công Hạ — Khí Phách Đại Trượng Phu", hanziSc: "富贵不能淫，贫贱不能移，威武不能屈，此之谓大丈夫。", hanziTc: "富貴不能淫，貧賤不能移，威武不能屈，此之謂大丈夫。", pinyin: "Fùguì bùnéng yín, pínjiàn bùnéng yí, wēiwǔ bùnéng qū, cǐ zhī wèi dàzhàngfu.", hanViet: "Phú quý bất năng dâm, bần tiện bất năng di, uy vũ bất năng khuất, thử chi vị đại trượng phu.", vi: "Giàu sang không làm mê hoặc lòng mình, nghèo hèn không đổi dời chí hướng, uy quyền bạo lực không khuất phục được — ấy mới gọi là Đại trượng phu.", en: "Wealth and rank cannot corrupt him, poverty cannot move him, and threat of force cannot bend him: such is a truly great person.", commentary: "Thước đo nhân cách độc lập của giới trí thức Việt Nam và Trung Hoa qua nhiều thế kỷ.", keyTerms: ["junzi"] },
        { passageTitle: "Cáo Tử Hạ — Ý Chí Rèn Luyện Qua Thử Thách", hanziSc: "天将降大任于是人也，必先苦其心志，劳其筋骨。", hanziTc: "天將降大任於是人也，必先苦其心志，勞其筋骨。", pinyin: "Tiān jiāng jiàng dàrèn yú shì rén yě, bì xiān kǔ qí xīnzhì, láo qí jīngǔ.", hanViet: "Thiên tương giáng đại nhiệm ư thị nhân dã, tất tiên khổ kỳ tâm chí, lao kỳ cân cốt.", vi: "Trời sắp trao trọng trách lớn cho ai, ắt trước hết làm cho tâm chí người ấy chịu đắng cay, gân cốt phải nhọc nhằn thử thách.", en: "When Heaven is about to confer a great mission upon someone, it first disciplines their heart and taxes their sinews.", commentary: "Nghị lực tự rèn vượt qua nghịch cảnh ('Sinh ư ưu hoạn, tử ư an lạc').", keyTerms: ["daode"] }
      ]
    },
    "daxue": {
      treasury: "kinh", treasuryLabel: "Kinh bộ 经部", author: "Tăng Tử (theo chú giải Chu Hy trong Tứ Thư)",
      whyItMatters: "Đề ra lộ trình tu dưỡng liền mạch từ nhận thức khoa học tự nhiên ('Cách vật trí tri') tới quản trị quốc gia ('Bình thiên hạ').",
      excerpts: [
        { passageTitle: "Tam Cương Lĩnh (Cương Lĩnh Mở Đầu)", hanziSc: "大学之道，在明明德，在亲民，在止于至善。", hanziTc: "大學之道，在明明德，在親民，在止於至善。", pinyin: "Dàxué zhī dào, zài míng míngdé, zài qīnmín, zài zhǐ yú zhìshàn.", hanViet: "Đại học chi đạo, tại minh minh đức, tại thân dân, tại chỉ ư chí thiện.", vi: "Đạo lý bậc đại học cốt ở làm sáng tỏ cái đức sáng sẵn có nơi mình, làm mới mẻ gắn kết với nhân dân và hướng tới đích thiện mỹ tối cao.", en: "The way of Great Learning lies in manifesting luminous virtue, renewing the people, and resting in supreme goodness.", commentary: "Ba mục tiêu lớn (Tam cương lĩnh) cho giáo dục trưởng thành.", keyTerms: ["daode", "ren"] },
        { passageTitle: "Bát Điều Mục — Liên Kết Cá Nhân & Xã Hội", hanziSc: "身修而后家齐，家齐而后国治，国治而后天下平。", hanziTc: "身修而後家齊，家齊而後國治，國治而後天下平。", pinyin: "Shēn xiū érhòu jiā qí, jiā qí érhòu guó zhì, guó zhì érhòu tiānxià píng.", hanViet: "Thân tu nhi hậu gia tề, gia tề nhi hậu quốc trị, quốc trị nhi hậu thiên hạ bình.", vi: "Bản thân tu sửa ngay ngắn rồi nhà mới hòa thuận; nhà hòa thuận rồi nước mới trị yên; nước trị yên rồi thiên hạ mới thái bình.", en: "Once the person is cultivated, the family is harmonized; once the family is harmonized, the state is well ordered; once the state is ordered, all under heaven know peace.", commentary: "Trục giá trị cốt lõi liên kết đạo đức cá nhân với trách nhiệm quản trị công cộng.", keyTerms: ["li", "junzi"] },
        { passageTitle: "Thích Cách Vật — Nhật Nhật Tân", hanziSc: "苟日新，日日新，又日新。", hanziTc: "苟日新，日日新，又日新。", pinyin: "Gǒu rì xīn, rìrì xīn, yòu rì xīn.", hanViet: "Cẩu nhật tân, nhật nhật tân, hựu nhật tân.", vi: "Nếu một ngày tự làm mới mình được, hãy ngày ngày đổi mới, lại tiếp tục đổi mới không ngừng.", en: "If you can renew yourself for one day, let there be daily renewal, and evermore daily renewal.", commentary: "Lời khắc trên chậu rửa mặt của vua Thành Thang (nhà Thương) nhấn mạnh tinh thần tự cải tiến liên tục.", keyTerms: ["wenhua"] }
      ]
    },
    "zhongyong": {
      treasury: "kinh", treasuryLabel: "Kinh bộ 经部", author: "Tử Tư (Cháu nội Khổng Tử)",
      whyItMatters: "Đỉnh cao triết học tâm tính Nho gia: lý giải sự quân bình cảm xúc ('Trung hòa') và tính chân thành tự chủ ('Thành').",
      excerpts: [
        { passageTitle: "Thủ Chương — Định Nghĩa Trung Hòa", hanziSc: "喜怒哀乐之未发，谓之中；发而皆中节，谓之和。", hanziTc: "喜怒哀樂之未發，謂之中；發而皆中節，謂之和。", pinyin: "Xǐ nù āi lè zhī wèi fā, wèi zhī zhōng; fā ér jiē zhòngjié, wèi zhī hé.", hanViet: "Hỷ nộ ai lạc chi vị phát, vị chi Trung; phát nhi giai trúng tiết, vị chi Hòa.", vi: "Các trạng thái vui giận buồn thương khi chưa bộc phát mà giữ tâm bình thản gọi là Trung; khi phát lộ ra mà đều vừa vặn đúng mực gọi là Hòa.", en: "Before joy, anger, sorrow, and pleasure arise, the state is called Equilibrium (Zhong); when they arise in due measure, that is Harmony (He).", commentary: "Nền tảng trí tuệ cảm xúc cổ điển (EQ): không triệt tiêu cảm xúc mà điều tiết vừa mực.", keyTerms: ["li"] },
        { passageTitle: "Chương 20 — Ngũ Bộ Tu Học Khoa Học", hanziSc: "博学之，审问之，慎思之，明辨之，笃行之。", hanziTc: "博學之，審問之，慎思之，明辨之，篤行之。", pinyin: "Bóxué zhī, shěnwèn zhī, shènsī zhī, míngbiàn zhī, dǔxíng zhī.", hanViet: "Bác học chi, thẩm vấn chi, thận tư chi, minh biện chi, đốc hành chi.", vi: "Học cho thật rộng, hỏi cho thật kỹ, suy ngẫm cho cẩn trọng, phân biện cho rành mạch, rồi hết lòng thực hành trọn vẹn.", en: "Study broadly, inquire deeply, reflect carefully, discern clearly, and practice earnestly.", commentary: "Quy chuẩn nghiên cứu khoa học tại Bạch Lộc Động Thư Viện và đại học Trung Hoa cổ – kim.", keyTerms: ["wenhua"] },
        { passageTitle: "Chữ Thành — Tự chủ Độc Lập", hanziSc: "诚者，天之道也；诚之者，人之道也。", hanziTc: "誠者，天之道也；誠之者，人之道也。", pinyin: "Chéng zhě, tiān zhī dào yě; chéng zhī zhě, rén zhī dào yě.", hanViet: "Thành giả, thiên chi đạo dã; thành chi giả, nhân chi đạo dã.", vi: "Sự chân thực trọn vẹn là đạo của Trời; nỗ lực giữ lấy sự chân thực ấy là đạo làm Người.", en: "Sincerity is the Way of Heaven; striving to attain sincerity is the Way of humanity.", commentary: "Đề cao chữ Thành (không tự dối lòng ngay cả khi ở một mình — Thận độc).", keyTerms: ["daode"] }
      ]
    },
    "shiji": {
      treasury: "su", treasuryLabel: "Sử bộ 史部", author: "Tư Mã Thiên (司马迁, 145–86 TCN)",
      whyItMatters: "Kiệt tác mở đầu 'Nhị Thập Tứ Sử' viết theo thể Kỷ – Truyện 130 thiên; bảo tồn sử liệu Kinh tế (Hóa thực) và giao lưu Bách Việt cổ đại.",
      excerpts: [
        { passageTitle: "Báo Nhậm An Thư — Lý Tưởng Viết Sử", hanziSc: "究天人之际，通古今之变，成一家之言。", hanziTc: "究天人之際，通古今之變，成一家之言。", pinyin: "Jiū tiān rén zhī jì, tōng gǔjīn zhī biàn, chéng yījiā zhī yán.", hanViet: "Cứu thiên nhân chi tế, thông cổ kim chi biến, thành nhất gia chi ngôn.", vi: "Nghiên cứu thấu ranh giới giữa Trời và Người, thông hiểu quy luật biến đổi từ xưa tới nay, lập nên một hệ thống sử học độc lập riêng.", en: "To probe the boundary between Heaven and humanity, comprehend the transformations from past to present, and form a coherent school of thought.", commentary: "Lời tuyên ngôn vĩ đại nhất của sử gia Tư Mã Thiên sau khi chịu nhục hình để hoàn thành 52 vạn chữ *Sử ký*.", keyTerms: ["lishi"] },
        { passageTitle: "Trần Thiệp Thế Gia — Khát Vọng Công Bằng", hanziSc: "王侯将相宁有种乎！", hanziTc: "王侯將相寧有種乎！", pinyin: "Wánghóu jiàngxiàng níng yǒu zhǒng hū!", hanViet: "Vương hầu tướng tướng ninh hữu chủng hồ!", vi: "Bọn vương hầu tướng lĩnh há lại có nòi giống trời sinh sẵn sao!", en: "Are kings, nobles, generals, and ministers born of a special breed?", commentary: "Tiếng thét lịch sử phá bỏ huyền thoại huyết thống quý tộc từ cuộc khởi nghĩa nông dân đầu tiên năm 209 TCN.", keyTerms: ["lishi"] },
        { passageTitle: "Hóa Thực Liệt Truyện — Bản chất Kinh tế Lưu thông", hanziSc: "仓廪实而知礼节，衣食足而知荣辱。", hanziTc: "倉廩實而知禮節，衣食足而知榮辱。", pinyin: "Cānglǐn shí ér zhī lǐjié, yīshí zú ér zhī róngrǔ.", hanViet: "Thương lẫm thực nhi tri lễ tiết, y thực túc nhi tri vinh nhục.", vi: "Kho thóc đầy đủ rồi dân mới biết giữ lễ nghĩa; cơm ăn áo mặc sung túc rồi mới phân biệt được vinh và nhục.", en: "When the granaries are full, people learn propriety; when food and clothing suffice, they know honor and shame.", commentary: "Tư Mã Thiên dẫn lại lời Quản Trọng nhấn mạnh kinh tế dân sinh làm gốc rễ cho đạo đức xã hội.", keyTerms: ["maoyi", "jingji"] }
      ]
    },
    "zizhitongjian": {
      treasury: "su", treasuryLabel: "Sử bộ 史部", author: "Tư Mã Quang (司马光, 1084 SCN — 294 quyển)",
      whyItMatters: "Bộ biên niên sử chính trị đồ sộ ghi chép liền mạch 1.362 năm lịch sử (403 TCN – 959 SCN), làm 'tấm gương soi việc trị loạn' cho các nhà lãnh đạo.",
      excerpts: [
        { passageTitle: "Chu Kỷ Nhất — Tài & Đức Trong Lựa Chọn Nhân Sự", hanziSc: "才者，德之资也；德者，才之帅也。", hanziTc: "才者，德之資也；德者，才之帥也。", pinyin: "Cáizhě, dé zhī zī yě; dézhě, cái zhī shuài yě.", hanViet: "Tài giả, đức chi tư dã; đức giả, tài chi soái dã.", vi: "Tài năng là vốn liếng để thực thi đạo đức; còn đạo đức là vị tướng soái dẫn đường cho tài năng. Có đức không tài thì khó làm việc lớn; có tài không đức còn nguy hiểm gấp bội.", en: "Talent is the instrument of virtue; virtue is the commander of talent.", commentary: "Bình luận mở đầu *Tư Trị Thông Giám* của Tư Mã Quang bàn về bài học sụp đổ của gia tộc Trí Bá đời Xuân Thu.", keyTerms: ["daode", "lishi"] },
        { passageTitle: "Đường Kỷ — Ngụy Trưng Can Gián Đường Thái Tông", hanziSc: "兼听则明，偏信则暗。", hanziTc: "兼聽則明，偏信則暗。", pinyin: "Jiāntīng zé míng, piānxìn zé àn.", hanViet: "Kiêm thính tắc minh, thiên tín tắc ám.", vi: "Lắng nghe rộng rãi nhiều chiều thì đầu óc sáng suốt; chỉ tin nghe một phía tất bị che lấp mù quáng.", en: "Listening to diverse voices brings clarity; trusting only one side breeds blindness.", commentary: "Nguyên tắc ra quyết định đa chiều kinh điển của thời đại Trinh Quán thịnh trị.", keyTerms: ["lishi"] },
        { passageTitle: "Đường Kỷ — Thuyền và Nước", hanziSc: "水能载舟，亦能覆舟。", hanziTc: "水能載舟，亦能覆舟。", pinyin: "Shuǐ néng zài zhōu, yì néng fù zhōu.", hanViet: "Thủy năng tải chu, diệc năng phúc chu.", vi: "Nước (lòng dân) có thể nâng đỡ con thuyền (người lãnh đạo), nhưng chính dòng nước ấy cũng có thể lật úp con thuyền.", en: "The water that bears the boat can also capsize it.", commentary: "Hình ảnh cảnh tỉnh quyền lực nổi tiếng do Tuân Tử đặt nền và Đường Thái Tông nhắc lại.", keyTerms: ["junzi"] }
      ]
    },
    "daodejing": {
      treasury: "tu", treasuryLabel: "Tử bộ 子部", author: "Lão Tử (老子 — ~5.000 chữ, 81 chương)",
      whyItMatters: "Kinh điển triết học siêu hình và tự nhiên sâu sắc nhất Đạo gia, đề cao *Vô vi*, tính mềm dẻo của *Nước* và biện chứng phản phục.",
      excerpts: [
        { passageTitle: "Chương 1 — Đạo Khả Đạo", hanziSc: "道可道，非常道；名可名，非常名。", hanziTc: "道可道，非常道；名可名，非常名。", pinyin: "Dào kě dào, fēi cháng Dào; míng kě míng, fēi cháng míng.", hanViet: "Đạo khả đạo, phi thường Đạo; danh khả danh, phi thường danh.", vi: "Đạo mà có thể nói ra bằng ngôn từ đóng khung thì không phải Đạo hằng cửu; tên gọi có thể đặt định thì chẳng phải bản thể vĩnh hằng.", en: "The Way that can be spoken is not the constant Way; the name that can be named is not the constant name.", commentary: "Nhắc nhở giới hạn của ngôn ngữ và nhãn quan lý thuyết trước thực tại sống động.", keyTerms: ["wuwei", "daode"] },
        { passageTitle: "Chương 8 — Thượng Thiện Nhược Thủy", hanziSc: "上善若水。水善利万物而不争，处众人之所恶，故几于道。", hanziTc: "上善若水。水善利萬物而不爭，處眾人之所惡，故幾於道。", pinyin: "Shàngshàn ruò shuǐ. Shuǐ shàn lì wànwù ér bùzhēng, chǔ zhòngrén zhī suǒ wù, gù jī yú Dào.", hanViet: "Thượng thiện nhược thủy. Thủy thiện lợi vạn vật nhi bất tranh, xử chúng nhân chi sở ố, cố cơ ư Đạo.", vi: "Bậc thiện cao nhất tựa như nước: nước khéo nuôi sống muôn vật mà không tranh giành, cam chịu chảy về chốn thấp trũng người đời chê bỏ, cho nên gần với Đạo nhất.", en: "Supreme goodness is like water: it nourishes all things without contention, resting in lowly places others disdain—thus closest to the Way.", commentary: "Mô hình lãnh đạo khiêm cung và linh hoạt bậc nhất văn minh Đông Á.", keyTerms: ["wuwei"] },
        { passageTitle: "Chương 60 — Trị Đại Quốc Nhược Phanh Tiểu Tiên", hanziSc: "治大国，若烹小鲜。", hanziTc: "治大國，若烹小鮮。", pinyin: "Zhì dàguó, ruò pēng xiǎoxiān.", hanViet: "Trị đại quốc, nhược phanh tiểu tiên.", vi: "Quản trị một nước lớn cũng giống như rán con cá nhỏ (không nên đảo lật liên tục làm nát thịt).", en: "Governing a large state is like frying a small fish.", commentary: "Phê phán thói can thiệp hành chính rối rắm làm xáo trộn tự nhiên của thị trường và đời sống dân chúng.", keyTerms: ["wuwei"] }
      ]
    },
    "zhuangzi": {
      treasury: "tu", treasuryLabel: "Tử bộ 子部", author: "Trang Chu (庄周, ~369–286 TCN) — 33 thiên",
      whyItMatters: "Đỉnh cao tản văn ngụ ngôn triết học tự do tinh thần (*Tiêu Dao Du*), tính tương đối của nhận thức (*Tề Vật Luận*) và kỹ nghệ đạt tới Đạo (*Bào Đinh giải ngưu*).",
      excerpts: [
        { passageTitle: "Tiêu Dao Du — Chim Bằng Vượt Cõi Nhỏ", hanziSc: "北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。", hanziTc: "北冥有魚，其名為鯤。鯤之大，不知其幾千里也；化而為鳥，其名為鵬。", pinyin: "Běimíng yǒu yú, qí míng wéi Kūn... huà ér wéi niǎo, qí míng wéi Péng.", hanViet: "Bắc minh hữu ngư, kỳ danh vi Côn... hóa nhi vi điểu, kỳ danh vi Bằng.", vi: "Ngoài biển Bắc sâu thẳm có con cá lớn tên Côn rộng chẳng biết mấy nghìn dặm; biến hóa thành chim lớn gọi tên chim Bằng sải cánh tung mây chín vạn dặm.", en: "In the Northern Ocean there is a fish named Kun... it transforms into a bird named Peng whose wings blot the sky.", commentary: "Mở rộng nhãn quan vượt thoát khỏi định kiến nhỏ hẹp của thói thường ('Hạ trùng bất khả ngữ băng').", keyTerms: ["wuwei", "zhexue"] },
        { passageTitle: "Thu Thủy — Triết Lý Thấu Cảm Của Cá & Người", hanziSc: "子非鱼，安知鱼之乐？—— 子非我，安知我不知鱼之乐？", hanziTc: "子非魚，安知魚之樂？—— 子非我，安知我不知魚之樂？", pinyin: "Zǐ fēi yú, ān zhī yú zhī lè? — Zǐ fēi wǒ, ān zhī wǒ bù zhī yú zhī lè?", hanViet: "Tử phi ngư, an tri ngư chi lạc? — Tử phi ngã, an tri ngã bất tri ngư chi lạc?", vi: "Huệ Tử hỏi: 'Ông chẳng phải cá, sao biết cá đang vui?' — Trang Tử đáp: 'Ông chẳng phải tôi, sao biết tôi không biết được niềm vui của cá?'", en: "Huizi: 'You are not a fish; how do you know their joy?' — Zhuangzi: 'You are not me; how do you know I don't know it?'", commentary: "Cuộc đối thoại nhận thức luận kinh điển trên cầu sông Hào giữa Trang Chu và nhà Danh gia Huệ Thi.", keyTerms: ["zhexue"] },
        { passageTitle: "Dưỡng Sinh Chủ — Đầu Bếp Bào Đinh Mổ Trâu", hanziSc: "臣之所好者道也，进乎技矣。", hanziTc: "臣之所好者道也，進乎技矣。", pinyin: "Chén zhī suǒ hào zhě Dào yě, jìn hū jì yǐ.", hanViet: "Thần chi sở hiếu giả Đạo dã, tiến hồ kỹ hỹ.", vi: "Cái tôi say mê tìm cầu là Đạo lý tự nhiên của vạn vật, đã bước lên cao hơn kỹ xảo thông thường rồi.", en: "What your servant cares for is the Way itself, going far beyond mere technical skill.", commentary: "Trạng thái 'Flow' (Dòng chảy tập trung) lý tưởng khi tay nghề tinh luyện hòa làm một với cấu trúc tự nhiên.", keyTerms: ["wuwei"] }
      ]
    },
    "hanfeizi": {
      treasury: "tu", treasuryLabel: "Tử bộ 子部", author: "Hàn Phi (韩非, ~280–233 TCN)",
      whyItMatters: "Tổng hợp hoàn chỉnh nhất tư tưởng Pháp gia (Pháp  pháp luật khách quan + Thuật kỹ thuật quản trị + Thế vị thế thể chế).",
      excerpts: [
        { passageTitle: "Ngũ Đố — Đổi Mới Thể Chế Theo Thời Đại", hanziSc: "世异则事异，事异则备变。", hanziTc: "世異則事異，事異則備變。", pinyin: "Shì yì zé shì yì, shì yì zé bèi biàn.", hanViet: "Thế dị tắc sự dị, sự dị tắc bị biến.", vi: "Thời thế thay đổi thì hoàn cảnh công việc thay đổi; công việc khác đi thì phương pháp đối ứng thể chế cũng phải đổi thay.", en: "When the age changes, affairs change; when affairs change, institutions must adapt.", commentary: "Phê phán lối sùng cổ rập khuôn ('Thủ chu đãi thỏ' — Ôm gốc cây chờ thỏ), đặt nền cho cải cách thực chứng.", keyTerms: ["fazhi"] },
        { passageTitle: "Hữu Độ — Pháp Quy Bình Đẳng Trước Quyền Lực", hanziSc: "法不阿贵，绳不挠曲。", hanziTc: "法不阿貴，繩不撓曲。", pinyin: "Fǎ bù ē guì, shéng bù náo qū.", hanViet: "Pháp bất a quý, thằng bất nạo khúc.", vi: "Pháp luật không nịnh bợ kẻ quyền quý, cũng như dây mực thợ mộc thẳng băng chẳng uốn cong theo gỗ vặn vẹo.", en: "The law does not flatter the noble, just as the carpenter's plumb line does not bend for crooked wood.", commentary: "Khái niệm minh bạch quy tắc tổ chức vượt trên cảm tính cá nhân.", keyTerms: ["fazhi"] },
        { passageTitle: "Ngũ Đố — Quan Hệ Khách Quan Của Lợi Ích", hanziSc: "奉法者强则国强，奉法者弱则国弱。", hanziTc: "奉法者強則國強，奉法者弱則國弱。", pinyin: "Fèngfǎ zhě qiáng zé guó qiáng, fèngfǎ zhě ruò zé guó ruò.", hanViet: "Phụng pháp giả cường tắc quốc cường, phụng pháp giả nhược tắc quốc nhược.", vi: "Cơ quan thực thi kỷ cương nghiêm minh thì quốc gia hùng mạnh; giữ phép lỏng lẻo yếu ớt thì quốc gia suy yếu.", en: "When upholders of law are firm, the state grows strong; when they are lax, the state weakens.", commentary: "Nhấn mạnh năng lực thực thi thể chế thay vì chỉ dựa vào lời khuyên đạo đức.", keyTerms: ["fazhi"] }
      ]
    },
    "mozi": {
      treasury: "tu", treasuryLabel: "Tử bộ 子部", author: "Mặc Địch (墨翟, ~470–391 TCN) & Mặc gia",
      whyItMatters: "Hệ thống tư tưởng bình dân giàu tinh thần phản chiến (*Phi công*), yêu thương bình đẳng (*Kiêm ái*) và tiên phong quang học – lô-gic học cổ đại (*Mặc kinh*).",
      excerpts: [
        { passageTitle: "Kiêm Ái Thượng — Yêu Thương Không Phân Biệt", hanziSc: "视人之国若视其国，视人之家若视其家，视人之身若视其身。", hanziTc: "視人之國若視其國，視人之家若視其家，視人之身若視其身。", pinyin: "Shì rén zhī guó ruò shì qí guó, shì rén zhī jiā ruò shì qí jiā, shì rén zhī shēn ruò shì qí shēn.", hanViet: "Thị nhân chi quốc nhược thị kỳ quốc, thị nhân chi gia nhược thị kỳ gia.", vi: "Nhìn nước người như nước mình, nhìn nhà người như nhà mình, nhìn thân người như thân mình.", en: "Regard other states as one's own state, other families as one's own family, and others' bodies as one's own.", commentary: "Giải pháp đối trị chiến tranh chinh phạt Chiến Quốc thông qua đồng cảm phổ quát.", keyTerms: ["ren"] },
        { passageTitle: "Thượng Hiền — Tuyển Dụng Không Phân Xuất Thân", hanziSc: "官无常贵，而民无终贱，有能则举之，无能则下之。", hanziTc: "官無常貴，而民無終賤，有能則舉之，無能則下之。", pinyin: "Guān wú cháng guì, ér mín wú zhōng jiàn, yǒunéng zé jǔ zhī, wúnéng zé xià zhī.", hanViet: "Quan vô thường quý, nhi dân vô chung tiện, hữu năng tắc cử chi, vô năng tắc hạ chi.", vi: "Chức quan không ai ngồi mãi mãi ở ngôi sang; người dân không ai bị gán mãi thân phận hèn: có tài năng thì cất nhắc, bất tài thì cho xuống.", en: "Officials hold no permanent privilege, nor commoners permanent lowliness; promote the capable and demote the incompetent.", commentary: "Chủ trương bình đẳng cơ hội cực kỳ tiến bộ từ thế kỷ V TCN.", keyTerms: ["keju"] },
        { passageTitle: "Kinh Thuyết Hạ — Thí Nghiệm Hộp Tối Quang Học", hanziSc: "景倒，在午有端，与景长，说在端。", hanziTc: "景倒，在午有端，與景長，說在端。", pinyin: "Yǐng dào, zài wǔ yǒu duān, yǔ yǐng cháng, shuō zài duān.", hanViet: "Ảnh đảo, tại ngọ hữu đoan...", vi: "Ảnh thu qua khe lỗ nhỏ bị lộn ngược vì các tia sáng giao chéo nhau tại điểm khe lỗ hẹp (hiện tượng buồng tối pinhole).", en: "The image is inverted because rays cross at the focal pinhole.", commentary: "Phát hiện khoa học thực nghiệm về ánh sáng đi thẳng của Mặc Tử trước thời Trung cổ châu Âu 1.400 năm.", keyTerms: ["zhexue"] }
      ]
    },
    "sunzi": {
      treasury: "tu", treasuryLabel: "Tử bộ 子部", author: "Tôn Vũ (孙武, ~544–496 TCN — 13 thiên)",
      whyItMatters: "Kiệt tác tư duy chiến lược 'Bất chiến nhi khuất nhân chi binh' (Thắng mà không cần đánh phá hoại), được ứng dụng rộng từ quân sự đến thương lượng kinh tế.",
      excerpts: [
        { passageTitle: "Mưu Công — Toàn Thắng Bất Chiến", hanziSc: "百战百胜，非善之善者也；不战而屈人之兵，善之善者也。", hanziTc: "百戰百勝，非善之善者也；不戰而屈人之兵，善之善者也。", pinyin: "Bǎizhàn bǎishèng, fēi shàn zhī shànzhě yě; bùzhàn ér qūrén zhī bīng, shàn zhī shànzhě yě.", hanViet: "Bách chiến bách thắng, phi thiện chi thiện giả dã; bất chiến nhi khuất nhân chi binh, thiện chi thiện giả dã.", vi: "Trăm trận đánh đều thắng chưa phải là bậc cao tay nhất; không cần giao tranh đổ máu mà khiến đối thủ phải khuất phục mới là kế sách tối thượng.", en: "Winning a hundred victories in a hundred battles is not the acme of skill; subduing the enemy without fighting is supreme excellence.", commentary: "Nền tảng nghệ thuật đàm phán giữ toàn vẹn nguồn lực thay vì đối đầu tiêu hao.", keyTerms: ["zhexue"] },
        { passageTitle: "Mưu Công — Tình Báo Thông Tin Hai Chiều", hanziSc: "知彼知己，百战不殆。", hanziTc: "知彼知己，百戰不殆。", pinyin: "Zhībǐ zhījǐ, bǎizhàn bù dài.", hanViet: "Tri bỉ tri kỷ, bách chiến bất đãi.", vi: "Hiểu rõ đối phương và thấu suốt chính năng lực của bản thân, trăm cuộc cạnh tranh đều không rơi vào thế nguy hiểm.", en: "Know the other and know yourself; in a hundred engagements you will never be in peril.", commentary: "Châm ngôn thẩm định đối tác (Due Diligence) và tự đánh giá năng lực trước mọi thương vụ.", keyTerms: ["maoyi"] },
        { passageTitle: "Hư Thực — Linh Hoạt Như Nước", hanziSc: "兵无常势，水无常形；能因敌变化而取胜者，谓之神。", hanziTc: "兵無常勢，水無常形；能因敵變化而取勝者，謂之神。", pinyin: "Bīng wú chángshì, shuǐ wú chángxíng; néng yīn dí biànhuà ér qǔshèngzhě, wèi zhī shén.", hanViet: "Binh vô thường thế, thủy vô thường hình...", vi: "Thế trận không có khuôn mẫu cố định cũng như dòng nước chẳng có hình dáng cứng nhắc; biết nương theo biến động đối phương mà tạo lợi thế mới gọi là thần diệu.", en: "Warfare has no constant form just as water has no fixed shape; mastery lies in adapting with shifting circumstances.", commentary: "Liên hệ sâu sắc tư duy Đạo gia vào chiến lược ứng biến thực địa.", keyTerms: ["wuwei"] }
      ]
    },
    "huangdi-neijing-text": {
      treasury: "tu", treasuryLabel: "Tử bộ 子部", author: "Tác giả ẩn danh Tần–Hán (Tố Vấn & Linh Khu, 162 thiên)",
      whyItMatters: "Bộ kinh y học cổ truyền cao nhất Á Đông; xây dựng lý luận Tạng Tượng, Kinh Lạc, Âm Dương Ngũ Hành và phép phòng bệnh 'Trị vị bệnh'.",
      excerpts: [
        { passageTitle: "Tố Vấn • Thượng Cổ Thiên Chân Luận — Pháp Ư Âm Dương", hanziSc: "上古之人，其知道者，法于阴阳，和于术数，食饮有节，起居有常，不妄作劳。", hanziTc: "上古之人，其知道者，法於陰陽，和於術數，食飲有節，起居有常，不妄作勞。", pinyin: "Shànggǔ zhī rén, qí zhīdào zhě, fǎ yú yīnyáng, hé yú shùshù, shíyǐn yǒu jié, qǐjū yǒu cháng, bù wàng zuòláo.", hanViet: "Thượng cổ chi nhân, kỳ tri đạo giả, pháp ư âm dương, hòa ư thuật số, thực ẩm hữu tiết, khởi cư hữu thường...", vi: "Người thời thượng cổ hiểu được Đạo lý dưỡng sinh: sống thuận quy luật âm dương, hài hòa nhịp tiết khí, ăn uống chừng mực, ngủ nghỉ đúng giờ, không lao lực thái quá.", en: "The ancients who understood the Way patterned themselves on Yin and Yang, harmonized with natural cycles, kept moderation in food and drink, and avoided reckless overexertion.", commentary: "Cương lĩnh y học dự phòng cổ điển bảo vệ tuổi thọ và sinh lực.", keyTerms: ["yinyang", "yangsheng"] },
        { passageTitle: "Tố Vấn • Tứ Khí Điều Thần — Trị Vị Bệnh", hanziSc: "圣人不治已病治未病，不治已乱治未乱。", hanziTc: "聖人不治已病治未病，不治已亂治未亂。", pinyin: "Shèngrén bù zhì yǐbìng zhì wèibìng, bù zhì yǐluàn zhì wèiluàn.", hanViet: "Thánh nhân bất trị dĩ bệnh trị vị bệnh, bất trị dĩ loạn trị vị loạn.", vi: "Bậc minh y không đợi bệnh phát nặng rồi mới chữa mà điều chỉnh từ khi bệnh chưa thành hình; cũng như người trị nước phòng ngừa rối loạn từ lúc chưa xảy ra.", en: "The wise do not treat illness only after it erupts, but nurture health before illness takes root.", commentary: "Triết lý phòng bệnh chủ động vượt thời đại.", keyTerms: ["yangsheng"] },
        { passageTitle: "Linh Khu • Bản Thần — Quản Trị Cảm Xúc", hanziSc: "正气存内，邪不可干。", hanziTc: "正氣存內，邪不可干。", pinyin: "Zhèngqì cún nèi, xié bùkě gān.", hanViet: "Chính khí tồn nội, tà bất khả can.", vi: "Khí lực đề kháng chính đáng bên trong vững mạnh thì tà khí bên ngoài không thể xâm phạm được.", en: "When vital upright Qi abides within, pathogenic factors cannot invade.", commentary: "Lý luận miễn dịch học cổ truyền coi sức khỏe nội tại là yếu tố quyết định.", keyTerms: ["wuxing"] }
      ]
    },
    "liuzutanjing": {
      treasury: "tu", treasuryLabel: "Tử bộ 子部", author: "Lục Tổ Huệ Năng (惠能, 638–713 — Pháp Hải ghi chép)",
      whyItMatters: "Kinh điển Phật giáo duy nhất của Trung Quốc được tôn xưng 'Kinh'; khai mở Thiền tông Đốn ngộ bản địa sâu rộng sang Trúc Lâm Yên Tử Việt Nam.",
      excerpts: [
        { passageTitle: "Hành Do Phẩm — Bốn Câu Kệ Đắc Pháp", hanziSc: "菩提本无树，明镜亦非台；本来无一物，何处惹尘埃！", hanziTc: "菩提本無樹，明鏡亦非台；本來無一物，何處惹塵埃！", pinyin: "Pútí běn wú shù, míngjìng yì fēi tái; běnlái wú yīwù, héchù rě chén'āi!", hanViet: "Bồ đề bản vô thụ, minh kính diệc phi đài; bản lai vô nhất vật, hà xứ nhạ trần ai!", vi: "Cây Bồ đề vốn chẳng có cây, gương sáng cũng không có giá đài; xưa nay vốn không một vật nào cả thì bụi trần bám vào đâu được!", en: "Bodhi originally has no tree, nor is the bright mirror a stand; since nothing exists from the very start, where could dust alight?", commentary: "Tuyên ngôn Giải thoát trực ngộ tâm tính của Thiền tông Phương Nam (Tàu Khê).", keyTerms: ["zhexue"] },
        { passageTitle: "Bát Nhã Phẩm — Phật Pháp Tại Thế Gian", hanziSc: "佛法在世间，不离世间觉；离世觅菩提，恰如求兔角。", hanziTc: "佛法在世間，不離世間覺；離世覓菩提，恰如求兔角。", pinyin: "Fófǎ zài shìjiān, bùlí shìjiān jué; líshì mì Pútí, qiàrú qiú tùjiǎo.", hanViet: "Phật pháp tại thế gian, bất ly thế gian giác; ly thế mịch bồ đề, kháp như cầu thố giác.", vi: "Phật pháp hiện hữu ngay giữa cuộc đời thường, không tách rời sự tỉnh thức giữa đời; lìa bỏ cuộc sống thực tại để đi tìm giác ngộ chẳng khác nào đi tìm sừng con thỏ.", en: "Dharma dwells in the world; awakening cannot exist apart from worldly life—seeking enlightenment outside the world is like looking for horns on a hare.", commentary: "Ảnh hưởng sâu đậm lên dòng Thiền Trúc Lâm nhập thế của Trần Nhân Tông tại Việt Nam.", keyTerms: ["daode"] }
      ]
    },
    "chuanxilu": {
      treasury: "tu", treasuryLabel: "Tử bộ 子部", author: "Vương Dương Minh (王阳明, 1472–1529 — Từ Ái tập lục)",
      whyItMatters: "Tác phẩm trụ cột của Tâm học Minh triều: khẳng định tự chủ lương tri cá nhân và nguyên tắc 'Tri Hành Hợp Nhất' (Hiểu và Làm là một).",
      excerpts: [
        { passageTitle: "Quyển Thượng — Tri Hành Hợp Nhất", hanziSc: "知是行之始，行是知之成。", hanziTc: "知是行之始，行是知之成。", pinyin: "Zhī shì xíng zhī shǐ, xíng shì zhī zhī chéng.", hanViet: "Tri thị hành chi thủy, hành thị tri chi thành.", vi: "Biết rõ là bước khởi đầu của hành động, còn hành động thực tế chính là chỗ hoàn thành của sự hiểu biết. Chưa từng có ai thực sự hiểu biết mà lại không hành động.", en: "Knowledge is the beginning of action, and action is the completion of knowledge.", commentary: "Phá vỡ căn bệnh lý thuyết suông kinh viện cuối đời Minh.", keyTerms: ["zhexue"] },
        { passageTitle: "Quyển Hạ — Phá Sơn Trung Tặc Dịch", hanziSc: "破山中贼易，破心中贼难。", hanziTc: "破山中賊易，破心中賊難。", pinyin: "Pò shānzhōng zéi yì, pò xīnzhōng zéi nán.", hanViet: "Phá sơn trung tặc dịch, phá tâm trung tặc nan.", vi: "Đánh tan giặc cướp ngoài núi rừng thì dễ, nhưng chiến thắng tham vọng và thiên kiến trong chính lòng mình mới thật sự khó.", en: "Defeating bandits in the mountains is easy; overcoming the bandit within one's own mind is hard.", commentary: "Câu thư từ thực chiến của Vương Dương Minh gửi học trò trong thời gian bình định Nam Cống.", keyTerms: ["junzi"] }
      ]
    }
  };

  // 11 BRAND-NEW CANONICAL PRIMARY TEXTS (19 + 11 = 30 Total across Kinh – Sử – Tử – Tập)
  const NEW_CANONICAL_11 = [
    {
      id: "xunzi",
      treasury: "tu", treasuryLabel: "Tử bộ 子部",
      titleZh: "《荀子》", titleZhTrad: "《荀子》",
      titleVi: "Tuân Tử", titleEn: "Xunzi",
      era: "Cuối Chiến Quốc (~313–238 TCN)", author: "Tuân Huống (荀况)", school: "Nho gia (Hiện thực & Lễ trị)",
      whyItMatters: "Cầu nối giữa Nho gia (tư tưởng Lễ nghĩa giáo dục nhân tạo) và Pháp gia (tính thực dụng pháp chế); mở đầu thiên 'Khuyến Học' khuyên rèn luyện tích lũy từng bước.",
      summary: "Bộ sách 32 thiên của Tuân Huống đề xướng luận điểm đối lập Mạnh Tử: 'Tính ác, ngụy thiện' (bản năng tự nhiên dễ nghiêng về tư lợi, nên cần thầy bạn, lễ nhạc và pháp độ uốn nắn thành thiện) và chủ trương 'Chế thiên mệnh nhi dụng chi' (Làm chủ quy luật tự nhiên chứ không cầu khẩn thần linh).",
      excerpts: [
        { passageTitle: "Thiên Khuyến Học — Học Không Ngừng Nghỉ", hanziSc: "学不可以已。青，取之于蓝，而青于蓝；冰，水为之，而寒于水。", hanziTc: "學不可以已。青，取之於藍，而青於藍；冰，水為之，而寒於水。", pinyin: "Xué bùkěyǐ yǐ. Qīng, qǔ zhī yú lán, ér qīng yú lán; bīng, shuǐ wéi zhī, ér hán yú shuǐ.", hanViet: "Học bất khả dĩ dĩ. Thanh, thủ chi ư lam, nhi thanh ư lam; băng, thủy vi chi, nhi hàn ư thủy.", vi: "Việc học chẳng bao giờ được phép dừng lại. Màu chàm xanh chiết xuất từ cây chàm mà lại thẫm đẹp hơn cây chàm; băng tuyết làm từ nước mà lại lạnh hơn nước.", en: "Learning must never cease. Indigo dye is extracted from the indigo plant yet becomes bluer than the plant; ice is made of water yet is colder than water.", commentary: "Nguồn gốc thành ngữ 'Thanh xuất ư lam' — học trò giỏi vượt thầy nhờ rèn luyện không ngừng.", keyTerms: ["wenhua"] },
        { passageTitle: "Thiên Khuyến Học — Tích Tiểu Thành Đại", hanziSc: "不积跬步，无以至千里；不积小流，无以成江海。", hanziTc: "不積跬步，無以至千里；不積小流，無以成江海。", pinyin: "Bù jī kuǐbù, wúyǐ zhì qiānlǐ; bù jī xiǎoliú, wúyǐ chéng jiānghǎi.", hanViet: "Bất tích khuể bộ, vô dĩ chí thiên lý; bất tích tiểu lưu, vô dĩ thành giang hải.", vi: "Không tích lũy từng nửa bước chân thì chẳng thể đi hết ngàn dặm; không gom góp từng dòng suối nhỏ thì chẳng thể thành sông lớn biển khơi.", en: "Without accumulating half-steps, one cannot reach a thousand miles; without gathering small streams, no great river or ocean forms.", commentary: "Tinh thần tích lũy kiên trì trong học ngôn ngữ và xây dựng nghiên cứu dài hạn.", keyTerms: ["wenhua"] },
        { passageTitle: "Thiên Thiên Luận — Làm Chủ Thiên Nhiên", hanziSc: "从天而颂之，孰与制天命而用之！", hanziTc: "從天而頌之，孰與制天命而用之！", pinyin: "Cóng tiān ér sòng zhī, shú yǔ zhì tiānmìng ér yòng zhī!", hanViet: "Tòng thiên nhi tụng chi, thục dữ chế thiên mệnh nhi dụng chi!", vi: "Thụ động cúi đầu ca tụng Trời sao bằng nắm bắt quy luật của Trời để chủ động sử dụng phục vụ đời sống con người!", en: "Rather than blindly obeying and praising Heaven, why not master Heaven's patterns and put them to use?", commentary: "Tuyên ngôn chủ nghĩa duy vật và tinh thần khoa học sớm nhất thời Chiến Quốc.", keyTerms: ["zhexue"] }
      ]
    },
    {
      id: "chuci",
      treasury: "tap", treasuryLabel: "Tập bộ 集部",
      titleZh: "《楚辞》", titleZhTrad: "《楚辭》",
      titleVi: "Sở Từ (Khuất Nguyên)", titleEn: "Verses of Chu (Chuci)",
      era: "Chiến Quốc (~340–278 TCN)", author: "Khuất Nguyên (屈原) & Tống Ngọc", school: "Thi ca Lãng mạn Phương Nam",
      whyItMatters: "Khai sinh phong cách thi ca trữ tình lãng mạn, hư từ nhạc điệu 'Hề' (兮) và biểu tượng hương thảo – mỹ nhân; nguồn cảm hứng trực tiếp cho Nguyễn Du và thơ Song thất lục bát Việt Nam.",
      summary: "Tuyển tập thi ca vùng sông Tương – Dương Tử đất Sở mang đậm hơi thở thần thoại Vu giáo, trí tưởng tượng bay bổng và khát vọng giữ gìn phẩm giá trong sạch giữa thời loạn thế qua thiên trường ca bất hủ *Ly Tao*, *Cửu Ca*, *Thiên Vấn*.",
      excerpts: [
        { passageTitle: "Ly Tao — Khí Phách Tự Rèn Dọc Hành Trình Dài", hanziSc: "路漫漫其修远兮，吾将上下而求索。", hanziTc: "路漫漫其修遠兮，吾將上下而求索。", pinyin: "Lù mànmàn qí xiūyuǎn xī, wú jiāng shàngxià ér qiúsuǒ.", hanViet: "Lộ mạn mạn kỳ tu viễn hề, ngô tương thượng hạ nhi cầu sách.", vi: "Đường phía trước dài dằng dặc xa xôi lắm thay, nhưng ta vẫn sẽ không ngừng đi khắp trên dưới để tìm tòi chân lý.", en: "The road ahead is long and unending; yet I shall search high and low in tireless pursuit.", commentary: "Hai câu thơ khích lệ khát vọng khám phá tri thức được trích dẫn nhiều nhất trong học giới Hoa ngữ.", keyTerms: ["zhexue"] },
        { passageTitle: "Ly Tao — Giữ Phẩm Giá Giữa Thế Sự", hanziSc: "亦余心之所善兮，虽九死其犹未悔。", hanziTc: "亦余心之所善兮，雖九死其猶未悔。", pinyin: "Yì yú xīn zhī suǒ shàn xī, suī jiǔ sǐ qí yóu wèi huǐ.", hanViet: "Diệc dư tâm chi sở thiện hề, tuy cửu tử kỳ do vị hối.", vi: "Chính những điều thiện đẹp mà trái tim ta hằng ấp ủ, dẫu có phải chết chín lần ta vẫn chẳng hề hối tiếc.", en: "For the noble ideal cherished in my heart, though I die nine deaths I shall never regret.", commentary: "Biểu tượng cao khiết của người trí thức không thỏa hiệp với cái xấu.", keyTerms: ["daode"] },
        { passageTitle: "Ngư Phủ — Trong Đục Giữa Đời", hanziSc: "举世皆浊我独清，众人皆醉我独醒。", hanziTc: "舉世皆濁我獨清，眾人皆醉我獨醒。", pinyin: "Jǔshì jiē zhuó wǒ dú qīng, zhòngrén jiē zuì wǒ dú xǐng.", hanViet: "Cử thế giai trọc ngã độc thanh, chúng nhân giai túy ngã độc tỉnh.", vi: "Cả thế gian đều vẩn đục riêng ta giữ trong sạch; mọi người đều say cả chỉ mình ta tỉnh táo.", en: "The whole world is muddy while I alone remain clear; all are drunk while I alone stay sober.", commentary: "Cuộc đối thoại giữa Khuất Nguyên và ông lão đánh cá bên bờ sông Mịch La.", keyTerms: ["wenhua"] }
      ]
    },
    {
      id: "huainanzi",
      treasury: "tu", treasuryLabel: "Tử bộ 子部",
      titleZh: "《淮南子》", titleZhTrad: "《淮南子》",
      titleVi: "Hoài Nam Tử", titleEn: "The Masters of Huainan",
      era: "Tây Hán (139 TCN)", author: "Lưu An (Hoài Nam Vương) & môn khách", school: "Tạp gia (Tổng hợp Đạo – Nho – Âm Dương)",
      whyItMatters: "Hệ thống hóa hoàn chỉnh lần đầu trọn bộ 24 Tiết khí trong thiên *Thiên Văn Huấn*, bảo tồn thần thoại Nữ Oa vá trời, Hậu Nghệ bắn mặt trời và nghệ thuật trị quốc dung hòa.",
      summary: "Bộ bách khoa 21 thiên do Lưu An cùng tám học giả biên soạn dâng lên Hán Vũ Đế năm 139 TCN, dung hợp vũ trụ luận Hoàng–Lão Đạo gia với kỹ thuật lịch pháp, âm nhạc 12 luật lữ và hành chính thực tế.",
      excerpts: [
        { passageTitle: "Thiên Văn Huấn — Đồng Bộ Tiết Khí (24 Tiết)", hanziSc: "日行一度，十五日为一节，以生二十四时之变。", hanziTc: "日行一度，十五日為一節，以生二十四時之變。", pinyin: "Rì xíng yī dù, shíwǔ rì wéi yī jié, yǐ shēng èrshísì shí zhī biàn.", hanViet: "Nhật hành nhất độ, thập ngũ nhật vi nhất tiết...", vi: "Mặt Trời đi hết mỗi ngày một cung độ, mười lăm ngày thành một Tiết, sinh ra sự chuyển biến của 24 mốc khí hậu quanh năm.", en: "The sun advances one degree daily; every fifteen days completes one solar node, yielding the twenty-four seasonal turns.", commentary: "Văn bản đầu tiên ghi đầy đủ tên gọi cả 24 Tiết khí theo đúng thứ tự ngày nay vẫn dùng.", keyTerms: ["yinyang"] },
        { passageTitle: "Tề Tục Huấn — Không Gò Ép Đa Dạng Văn Hóa", hanziSc: "百家异业而皆务于治，五音异律而皆和于耳。", hanziTc: "百家異業而皆務於治，五音異律而皆和於耳。", pinyin: "Bǎijiā yì yè ér jiē wù yú zhì, wǔyīn yì lǜ ér jiē hé yú ěr.", hanViet: "Bách gia dị nghiệp nhi giai vụ ư trị...", vi: "Trăm nhà khác nghề nghiệp nhưng đều hướng tới ổn định cuộc sống; năm cung bậc âm thanh khác luật nhưng cùng hòa nhịp êm tai.", en: "The hundred schools pursue varied trades yet all aim at good order; five musical notes differ in pitch yet harmonize to the ear.", commentary: "Tư tưởng tôn trọng sự đa dạng vùng miền và học phái.", keyTerms: ["baijia"] },
        { passageTitle: "Lãm Minh Huấn — Huyền Thoại Nữ Oa Vá Trời", hanziSc: "于是女娲炼五色石以补苍天，断鳌足以立四极。", hanziTc: "於是女媧煉五色石以補蒼天，斷鼇足以立四極。", pinyin: "Yúshì Nǚwā liàn wǔsèshí yǐ bǔ cāngtiān, duàn áo zú yǐ lì sìjí.", hanViet: "Ư thị Nữ Oa luyện ngũ sắc thạch dĩ bổ thương thiên...", vi: "Khi ấy bà Nữ Oa nấu đá ngũ sắc để vá bầu trời rạn nứt, dựng chân rùa lớn nâng đỡ bốn phương cõi đất.", en: "Thereupon Nüwa smelted five-colored stones to mend the azure sky and set the giant tortoise legs as four pillars.", commentary: "Nguồn ghi chép văn hiến cổ nhất về truyền thuyết Nữ Oa vá trời.", keyTerms: ["wuxing"] }
      ]
    },
    {
      id: "chajing",
      treasury: "tu", treasuryLabel: "Tử bộ 子部",
      titleZh: "《茶经》", titleZhTrad: "《茶經》",
      titleVi: "Trà Kinh (Lục Vũ)", titleEn: "The Classic of Tea (Chajing)",
      era: "Thịnh Đường (~760–780 SCN)", author: "Lục Vũ (陆羽 — Tự Hồng Tiệm)", school: "Nông học & Mỹ học Trà Đạo",
      whyItMatters: "Tác phẩm chuyên khảo về trà sớm nhất nhân loại (3 quyển 10 thiên); đưa uống trà từ thói quen giải nhiệt dân dã thành nghệ thuật tinh thần 'Tinh hành kiệm đức'.",
      summary: "Kết tinh hơn mười năm khảo cứu thực địa từ Hồ Bắc tới Giang Nam của Trà Thánh Lục Vũ, chuẩn hóa thực vật học cây chè, 24 trà cụ, phẩm cấp nguồn nước suối núi và phép đun Tiễn trà.",
      excerpts: [
        { passageTitle: "Nhất Chi Nguyên — Phẩm Hạnh Người Uống Trà", hanziSc: "茶之为用，味至寒，为饮，最宜精行俭德之人。", hanziTc: "茶之為用，味至寒，為飲，最宜精行儉德之人。", pinyin: "Chá zhī wéi yòng, wèi zhì hán, wéi yǐn, zuì yí jīngxíng jiǎndé zhī rén.", hanViet: "Trà chi vi dụng, vị chí hàn, vi ẩm, tối nghi tinh hành kiệm đức chi nhân.", vi: "Trà tính thanh mát, dùng làm thức uống rất hợp với người giữ nết hạnh tinh khiết và đức tính tiết kiệm khiêm nhường.", en: "Tea is cooling in nature; as a beverage, it most befits persons of refined conduct and frugal virtue.", commentary: "Xác lập cốt lõi đạo đức của Trà đạo Á Đông trước khi truyền sang Nhật Bản.", keyTerms: ["cha", "daode"] },
        { passageTitle: "Ngũ Chi Chử — Tiêu Chuẩn Nguồn Nước Pha Trà", hanziSc: "其水，用山水上，江水中，井水下。", hanziTc: "其水，用山水上，江水中，井水下。", pinyin: "Qí shuǐ, yòng shānshuǐ shàng, jiāngshuǐ zhōng, jǐngshuǐ xià.", hanViet: "Kỳ thủy, dụng sơn thủy thượng, giang thủy trung, tỉnh thủy hạ.", vi: "Nước pha trà thì nước suối núi chảy chậm là bậc nhất, nước sông lớn là bậc giữa, nước giếng kín là bậc cuối.", en: "For water, mountain spring water is best, river water is middle, and well water is least suitable.", commentary: "Quan sát tinh tế về hàm lượng khoáng chất hòa tan ảnh hưởng tới hương trà.", keyTerms: ["cha"] },
        { passageTitle: "Lục Chi Ẩm — Tầm Quan Trọng Của Sự Giản Dị", hanziSc: "翼之以茶，和之以德。", hanziTc: "翼之以茶，和之以德。", pinyin: "Yì zhī yǐ chá, hé zhī yǐ dé.", hanViet: "Dực chi dĩ trà, hòa chi dĩ đức.", vi: "Nâng đỡ cuộc hội ngộ bằng chén trà, điều hòa bầu không khí bằng đức độ.", en: "Support fellowship with tea, harmonize it with virtue.", commentary: "Đề cao tình tri âm tinh thần trên bàn trà thay vì phô trương trà cụ đắt tiền.", keyTerms: ["cha"] }
      ]
    },
    {
      id: "tiangongkaiwu",
      treasury: "tu", treasuryLabel: "Tử bộ 子部",
      titleZh: "《天工开物》", titleZhTrad: "《天工開物》",
      titleVi: "Thiên Công Khai Vật", titleEn: "Exploitation of the Works of Nature",
      era: "Cuối Minh (1637)", author: "Tống Ứng Tinh (宋应星)", school: "Bách khoa Khoa học & Kỹ nghệ Thủ công",
      whyItMatters: "Bách khoa kỹ thuật công–nông–luyện kim vĩ đại nhất thế kỷ XVII với hơn 120 bản vẽ minh họa mộc bản: ghi lại từ trồng lúa nước, làm giấy Tuyên, 72 công đoạn gốm Cảnh Đức Trấn tới đúc đồng luyện thép.",
      summary: "18 quyển khảo sát trực tiếp thực địa sản xuất nông nghiệp và thủ công nghiệp khắp Giang Tây – Trung Nguyên, thể hiện cái nhìn trân trọng lao động kỹ thuật ('Sĩ tử chỉ chuộng văn hoa mà quên công lao tạo ra hạt cơm tấm áo').",
      excerpts: [
        { passageTitle: "Quyển Tự — Mục Đích Biên Soạn", hanziSc: "此书于功名进取毫不相关也。", hanziTc: "此書於功名進取毫不相關也。", pinyin: "Cǐ shū yú gōngmíng jìnqǔ háo bù xiāngguān yě.", hanViet: "Thử thư ư công danh tiến thủ hào bất tương quan dã.", vi: "Cuốn sách này chẳng dính dáng chút nào đến đường công danh khoa cử tầm chương trích cú cả (mà chỉ phục vụ đời sống sản xuất thực chất).", en: "This book has nothing whatsoever to do with climbing the ladder of official examination fame.", commentary: "Lời tựa thẳng thắn đầy bản lĩnh của Tống Ứng Tinh, chấp nhận cuốn sách bị triều đình bỏ qua để phục vụ hậu thế.", keyTerms: ["wenhua"] },
        { passageTitle: "Đào Diên — 72 Bàn Tay Thợ Cảnh Đức Trấn", hanziSc: "共计一坯之力，过手七十二，方克成器。", hanziTc: "共計一坯之力，過手七十二，方克成器。", pinyin: "Gòngjì yī pī zhī lì, guòshǒu qīshí'èr, fāng kè chéngqì.", hanViet: "Cộng kế nhất phôi chi lực, quá thủ thất thập nhị, phương khắc thành khí.", vi: "Tính công sức làm một phôi gốm, phải đi qua tay bảy mươi hai người thợ mới thành chiếc chén sứ hoàn chỉnh.", en: "Altogether, one porcelain blank passes through seventy-two pairs of hands before becoming a finished vessel.", commentary: "Sử liệu quý về phân công lao động chuyên môn hóa tiền công nghiệp.", keyTerms: ["gongyinglian"] },
        { passageTitle: "Nãi Lạp — Trồng Trọt Giữ Đất Đai", hanziSc: "人赖五谷以生，然非人勤力，土亦不自动。", hanziTc: "人賴五穀以生，然非人勤力，土亦不自動。", pinyin: "Rén lài wǔgǔ yǐ shēng, rán fēi rén qínlì, tǔ yì bù zì dòng.", hanViet: "Nhân lại ngũ cốc dĩ sinh, nhiên phi nhân cần lực, thổ diệc bất tự động.", vi: "Con người dựa vào ngũ cốc mà sống, nhưng nếu người không cần cù lao động thì đất đai cũng chẳng tự sinh ra mùa màng.", en: "Humanity relies on grain to live, yet without diligent labor the soil yields nothing by itself.", commentary: "Nhấn mạnh mối quan hệ hợp tác giữa 'Thiên công' (tự nhiên) và sức sáng tạo của con người.", keyTerms: ["wuxing"] }
      ]
    },
    {
      id: "tangshi300",
      treasury: "tap", treasuryLabel: "Tập bộ 集部",
      titleZh: "《唐诗三百首》", titleZhTrad: "《唐詩三百首》",
      titleVi: "Đường Thi Tam Bách Thủ", titleEn: "Three Hundred Tang Poems",
      era: "Đời Đường (618–907) / Hành Đường Thoái Sĩ tuyển (1763)", author: "Lý Bạch, Đỗ Phủ, Vương Duy, Bạch Cư Dị, Lý Thương Ẩn...", school: "Cận thể & Cổ thể Thi ca",
      whyItMatters: "Tuyển tập phổ cập nhất lịch sử thi học Á Đông (310+ bài của 77 thi nhân): chuẩn mực niêm luật Bằng–Trắc, đối ngẫu và mỹ cảm 'Thi trung hữu họa' ảnh hưởng sâu rộng sang thơ Việt Nam.",
      summary: "Biên soạn năm 1763 để dạy vỡ lòng văn chương và âm luật, quy tụ tinh hoa của Thi Tiên Lý Bạch phóng khoáng, Thi Thánh Đỗ Phủ nhân đạo, Thi Phật Vương Duy thiền tịnh và Bạch Cư Dị bình dị.",
      excerpts: [
        { passageTitle: "Lý Bạch — Tĩnh Dạ Tứ (Nỗi Nhớ Quê Nhà)", hanziSc: "床前明月光，疑是地上霜。举头望明月，低头思故乡。", hanziTc: "床前明月光，疑是地上霜。舉頭望明月，低頭思故鄉。", pinyin: "Chuáng qián míngyuè guāng, yí shì dìshàng shuāng. Jǔtóu wàng míngyuè, dītóu sī gùxiāng.", hanViet: "Sàng tiền minh nguyệt quang, nghi thị địa thượng sương. Cử đầu vọng minh nguyệt, đê đầu tư cố hương.", vi: "Đầu giường ánh trăng sáng chiếu, ngỡ là sương giá trên mặt đất; ngẩng đầu ngắm vầng trăng sáng, cúi đầu nhớ quê hương cũ.", en: "Before my bed the bright moon shines—I wonder if it is frost upon the ground. Raising my head I gaze at the moon; bowing my head I think of home.", commentary: "Bài ngũ ngôn tuyệt cú giản dị nhưng chạm tới trái tim hàng trăm triệu người đọc khắp Đông Á.", keyTerms: ["wenhua"] },
        { passageTitle: "Đỗ Phủ — Xuân Vọng (Lòng Yêu Nước Thời Loạn)", hanziSc: "国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。", hanziTc: "國破山河在，城春草木深。感時花濺淚，恨別鳥驚心。", pinyin: "Guópò shānhé zài, chéngchūn cǎomù shēn. Gǎnshí huā jiàn lèi, hènbié niǎo jīngxīn.", hanViet: "Quốc phá sơn hà tại, thành xuân thảo mộc thâm. Cảm thời hoa tiễn lệ, hận biệt điểu kinh tâm.", vi: "Nước tan nát mà núi sông vẫn còn đó, thành xuân vào mùa cỏ cây mọc rậm rì; cảm thương thời thế mà nhìn hoa rơi lệ, đau nỗi chia lìa nghe chim hót giật mình.", en: "Though the state is shattered, mountains and rivers remain; spring returns to the city deep in wild grass. Grieving the times, even flowers shed tears; hating separation, birds startle the heart.", commentary: "Đỉnh cao nghệ thuật Thất/Ngũ ngôn luật thi với cặp đối thực 'Hoa rơi lệ – Chim giật mình'.", keyTerms: ["lishi"] },
        { passageTitle: "Vương Duy — Sơn Cư Thu Minh (Thi Trung Hữu Họa)", hanziSc: "明月松间照，清泉石上流。", hanziTc: "明月松間照，清泉石上流。", pinyin: "Míngyuè sōngjiān zhào, qīngquán shíshàng liú.", hanViet: "Minh nguyệt tùng gian chiếu, thanh tuyền thạch thượng lưu.", vi: "Trăng sáng rọi xuyên qua kẽ thông xanh, suối trong róc rách chảy trên phiến đá.", en: "Bright moonlight shines among the pines; clear spring water glides across the stones.", commentary: "Mười chữ mở ra bức tranh thủy mặc tinh khôi tĩnh động hòa quyện — Tô Thức ca ngợi 'trong thơ Vương Duy có tranh'.", keyTerms: ["wenhua"] }
      ]
    },
    {
      id: "songci",
      treasury: "tap", treasuryLabel: "Tập bộ 集部",
      titleZh: "《宋词精选》", titleZhTrad: "《宋詞精選》",
      titleVi: "Tống Từ Tinh Tuyển", titleEn: "Selected Song Dynasty Lyrics (Ci)",
      era: "Đời Tống (960–1279)", author: "Tô Thức, Tân Khí Tật, Lý Thanh Chiếu, Liễu Vĩnh...", school: "Yến nhạc Từ điệu (Hào phóng & Uyển ước)",
      whyItMatters: "Bước chuyển vĩ đại từ thơ 5–7 chữ cân xứng sang 'Trường đoản cú' theo làn điệu âm nhạc, biểu đạt trọn vẹn tâm lý cá nhân tinh tế (Lý Thanh Chiếu) và khát vọng hùng tráng (Tô Thức, Tân Khí Tật).",
      summary: "Tổng hợp những Từ bài bất hủ như *Thủy điệu ca đầu*, *Niệm nô kiều* và *Thanh bình nhạc* phản ánh hai thái cực văn hóa đời Tống: phồn hoa thị dân Giang Nam và nỗi niềm giữ nước trước kỵ binh phương Bắc.",
      excerpts: [
        { passageTitle: "Tô Thức — Thủy Điệu Ca Đầu (Trung Thu Nhớ Em)", hanziSc: "但愿人长久，千里共婵娟。", hanziTc: "但願人長久，千里共嬋娟。", pinyin: "Dàn yuàn rén chángjiǔ, qiānlǐ gòng chánjuān.", hanViet: "Đãn nguyện nhân trường cửu, thiên lý cộng thiền quyên.", vi: "Chỉ mong cho con người được sống bền lâu khỏe mạnh, dẫu cách xa ngàn dặm vẫn cùng ngắm chung một ánh trăng rằm.", en: "May we both live long and well, sharing this bright moonlight across a thousand miles.", commentary: "Vượt qua sầu bi chia cắt thành lời chúc phúc nhân bản bất hủ mỗi dịp Trung Thu.", keyTerms: ["wenhua"] },
        { passageTitle: "Lý Thanh Chiếu — Thanh Thanh Mạn", hanziSc: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。", hanziTc: "尋尋覓覓，冷冷清清，淒淒慘慘戚戚。", pinyin: "Xúnxún mìmì, lěnglěng qīngqīng, qīqī cǎncǎn qīqī.", hanViet: "Tầm tầm mịch mịch, lãnh lãnh thanh thanh, thê thê thảm thảm thích thích.", vi: "Ngơ ngác tìm kiếm quanh quẩn, lạnh lẽo vắng tanh, thê lương thảm sầu quặn thắt.", en: "Seeking, searching, chilly and deserted, desolate, mournful, and distressed.", commentary: "Mười bốn chữ điệp âm liên hoàn được xem là kiệt tác nhạc tính chưa ai vượt qua của nữ thi sĩ số một lịch sử Trung Quốc.", keyTerms: ["wenhua"] },
        { passageTitle: "Tân Khí Tật — Thanh Ngọc Án (Đêm Nguyên Tiêu)", hanziSc: "众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。", hanziTc: "眾裡尋他千百度，驀然回首，那人卻在，燈火闌珊處。", pinyin: "Zhòng lǐ xún tā qiānbǎi dù, mòrán huíshǒu, nàrén què zài, dēnghuǒ lánshān chù.", hanViet: "Chúng lý tầm tha thiên bách độ, mạch nhiên hồi thủ, na nhân khước tại, đăng hỏa lan san xứ.", vi: "Tìm kiếm người ấy giữa biển người muôn nghìn lượt chẳng thấy; bỗng nhiên ngoảnh đầu nhìn lại, người ấy lại đang đứng lặng nơi ánh đèn thưa thớt tàn canh.", en: "Among the crowd I sought her a thousand times; suddenly turning my head, there she stood where the lantern lights grew dim.", commentary: "Học giả Vương Quốc Duy xếp câu từ này làm cảnh giới cao nhất của người nghiên cứu học thuật sau thời gian dài kiên trì tìm kiếm.", keyTerms: ["zhexue"] }
      ]
    },
    {
      id: "guwenguanzhi",
      treasury: "tap", treasuryLabel: "Tập bộ 集部",
      titleZh: "《古文观止》", titleZhTrad: "《古文觀止》",
      titleVi: "Cổ Văn Quan Chỉ", titleEn: "Gems of Classical Chinese Prose (Guwen Guanzhi)",
      era: "Đời Thanh Khang Hy (1695 tuyển) — bao gồm Tả Truyện tới Minh triều", author: "Ngô Sở Tài & Ngô Điều Hầu biên soạn (222 thiên)", school: "Tản văn Văn ngôn Cổ điển",
      whyItMatters: "Giáo trình cổ văn tinh túy nhất (222 bài tản văn, chiếu, biểu, ký từ Xuân Thu tới cuối Minh): dạy nghệ thuật lập luận, kết cấu văn bản ngắn gọn mà thâm thúy cho cả Trung Hoa lẫn Nho sinh Việt Nam.",
      summary: "Tên sách *Quan chỉ* mang nghĩa 'Đọc tới đây là đủ thấy tột cùng cái đẹp của văn cổ rồi': từ *Xuất Sư Biểu* của Gia Cát Lượng, *Đào Hoa Nguyên Ký* của Đào Tiềm, *Đằng Vương Các Tự* của Vương Bột tới *Nhạc Dương Lâu Ký* của Phạm Trọng Yêm.",
      excerpts: [
        { passageTitle: "Phạm Trọng Yêm — Nhạc Dương Lâu Ký", hanziSc: "先天下之忧而忧，后天下之乐而乐。", hanziTc: "先天下之憂而憂，後天下之樂而樂。", pinyin: "Xiān tiānxià zhī yōu ér yōu, hòu tiānxià zhī lè ér lè.", hanViet: "Tiên thiên hạ chi ưu nhi ưu, hậu thiên hạ chi lạc nhi lạc.", vi: "Lo trước nỗi lo của thiên hạ, vui sau niềm vui của thiên hạ.", en: "Be the first to bear the world's worries, and the last to enjoy its pleasures.", commentary: "Tuyên ngôn trách nhiệm công dân cao quý nhất của giới trí thức thời Tống.", keyTerms: ["junzi", "ren"] },
        { passageTitle: "Lưu Vũ Tích — Lậu Thất Minh (Phòng Nghèo Mà Thanh Nhã)", hanziSc: "山不在高，有仙则名；水不在深，有龙则灵。斯是陋室，惟吾德馨。", hanziTc: "山不在高，有仙則名；水不在深，有龍則靈。斯是陋室，惟吾德馨。", pinyin: "Shān bù zài gāo, yǒu xiān zé míng; shuǐ bù zài shēn, yǒu lóng zé líng. Sī shì lòushì, wéi wú dé xīn.", hanViet: "Sơn bất tại cao, hữu tiên tắc danh; thủy bất tại thâm, hữu long tắc linh. Tư thị lậu thất, duy ngô đức hinh.", vi: "Núi chẳng cốt ở cao, có tiên ắt nổi danh; nước chẳng cốt ở sâu, có rồng ắt linh thiêng; căn nhà này tuy đơn sơ nhưng chỉ cần đức độ ta tỏa hương thơm ngát.", en: "A mountain need not be high if a sage dwells there; water need not be deep if a dragon inhabits it. Though this hut is humble, my virtue makes it fragrant.", commentary: "Khẳng định giá trị nội tại của người học vượt lên điều kiện vật chất.", keyTerms: ["daode"] },
        { passageTitle: "Chu Đôn Di — Ái Liên Thuyết (Đạo Hoa Sen)", hanziSc: "出淤泥而不染，濯清涟而不妖。", hanziTc: "出淤泥而不染，濯清漣而不妖。", pinyin: "Chū yūní ér bù rǎn, zhuó qīnglián ér bù yāo.", hanViet: "Xuất ư nê nhi bất nhiễm, trạc thanh liên nhi bất yêu.", vi: "Mọc lên từ bùn lầy mà chẳng vấy bẩn, tắm gội trong sóng nước trong veo mà chẳng lẳng lơ kiêu kỳ.", en: "Emerging from the mud yet remaining unstained; washed by clear ripples yet never ostentatious.", commentary: "Biểu tượng phẩm cách hoa sen tương đồng hoàn hảo trong văn hóa Việt Nam.", keyTerms: ["junzi"] }
      ]
    },
    {
      id: "hongloumeng",
      treasury: "tap", treasuryLabel: "Tập bộ 集部",
      titleZh: "《红楼梦》", titleZhTrad: "《紅樓夢》",
      titleVi: "Hồng Lâu Mộng", titleEn: "Dream of the Red Chamber",
      era: "Giữa Thanh Càn Long (~1750–1791)", author: "Tào Tuyết Cần (曹雪芹 — 80 hồi đầu) & Cao Ngạc (bổ 40 hồi)", school: "Tiểu thuyết Chương hồi Bạch thoại (Đệ nhất Danh tác)",
      whyItMatters: "Đỉnh cao văn học hiện thực tâm lý phương Đông; bách khoa toàn thư sống động về kiến trúc viên lâm, y thực, trà đạo, thơ ca và bi kịch sụp đổ của đại gia tộc quý tộc đời Thanh.",
      summary: "Thông qua câu chuyện tình yêu bi kịch Giả Bảo Ngọc – Lâm Đại Ngọc – Tiết Bảo Thoa trong Đại Quan Viên của gia tộc họ Giả phồn hoa rồi tàn tạ, Tào Tuyết Cần giải phẫu sâu sắc thân phận phụ nữ, xung đột giữa tự do cá nhân và lễ giáo phong kiến cùng triết lý vô thường Đạo – Thích.",
      excerpts: [
        { passageTitle: "Hồi 1 — Câu Đối Thái Hư Huyễn Cảnh (Ảo – Thực)", hanziSc: "假作真时真亦假，无为有处有还无。", hanziTc: "假作真時真亦假，無為有處有還無。", pinyin: "Jiǎ zuò zhēn shí zhēn yì jiǎ, wú wéi yǒu chù yǒu hái wú.", hanViet: "Giả tác chân thời chân diệc giả, vô vi hữu xứ hữu hoàn vô.", vi: "Lúc coi cái giả là thật thì cái thật cũng hóa giả; nơi coi cái không là có thì cái có rồi cũng thành không.", en: "When the false is taken for true, truth turns false; where nothingness passes for being, being reverts to nothingness.", commentary: "Chìa khóa triết lý chơi chữ giữa họ Giả (贾) với chữ Giả/Thật (假/真) bao trùm toàn bộ 120 hồi.", keyTerms: ["wuwei"] },
        { passageTitle: "Hồi 1 — Mãn Chỉ Hoang Đường Ngôn", hanziSc: "满纸荒唐言，一把辛酸泪！都云作者痴，谁解其中味？", hanziTc: "滿紙荒唐言，一把辛酸淚！都雲作者癡，誰解其中味？", pinyin: "Mǎnzhǐ huāngtáng yán, yībǎ xīnsuān lèi! Dōu yún zuòzhě chī, shuí jiě qízhōng wèi?", hanViet: "Mãn chỉ hoang đường ngôn, nhất bả tân toan lệ! Đô vân tác giả si, thùy giải kỳ trung vị?", vi: "Đầy trang giấy những lời hoang đường kỳ quặc, chan chứa một nắm nước mắt đắng cay! Ai nấy đều bảo người viết ngớ ngẩn điên si, mấy ai thấu nổi vị mặn chát bên trong?", en: "Pages full of absurd words, a handful of bitter tears! All call the author foolish, yet who comprehends the flavor hidden within?", commentary: "Lời tự bạch xót xa nhất của Tào Tuyết Cần khi viết sách giữa cảnh nghèo túng Tây Sơn Bắc Kinh.", keyTerms: ["wenhua"] },
        { passageTitle: "Hồi 27 — Táng Hoa Ngâm (Lâm Đại Ngọc)", hanziSc: "花谢花飞飞满天，红消香断有谁怜？", hanziTc: "花謝花飛飛滿天，紅消香斷有誰憐？", pinyin: "Huā xiè huā fēi fēi mǎntiān, hóng xiāo xiāng duàn yǒu shuí lián?", hanViet: "Hoa tạ hoa phi phi mãn thiên, hồng tiêu hương đoạn hữu thùy liên?", vi: "Hoa tàn hoa rụng bay khắp bầu trời, sắc thắm phai tàn hương thơm đứt đoạn hỏi ai người xót thương?", en: "Petals fade and flutter across the sky; when crimson vanishes and fragrance ceases, who pities them?", commentary: "Bài ca chôn hoa kết tinh mỹ cảm bi thương và lòng tự trọng thanh khiết của nhân vật Lâm Đại Ngọc.", keyTerms: ["wenhua"] }
      ]
    },
    {
      id: "sanguoyanyi",
      treasury: "tap", treasuryLabel: "Tập bộ 集部",
      titleZh: "《三国演义》", titleZhTrad: "《三國演義》",
      titleVi: "Tam Quốc Diễn Nghĩa", titleEn: "Romance of the Three Kingdoms",
      era: "Đầu Minh (~TK XIV)", author: "La Quán Trung (罗贯中)", school: "Tiểu thuyết Lịch sử Chương hồi (Thất thực tam hư)",
      whyItMatters: "Định hình tâm thức dân gian Đông Á về chữ Nghĩa (Quan Vũ), mưu lược trí tuệ (Gia Cát Lượng), bản lĩnh quyền biến (Tào Tháo) và quy luật hợp – tan lịch sử.",
      summary: "Tái hiện gần một thế kỷ phân tranh Ngụy – Thục – Ngô (184–280 SCN) trên nền sử liệu *Tam Quốc Chí* của Trần Thọ, khơi nguồn vô số điển cố chiến lược, thương thuyết và hí kịch.",
      excerpts: [
        { passageTitle: "Hồi 1 — Câu Mở Đầu Quy Luật Lịch Sử", hanziSc: "话说天下大势，分久必合，合久必分。", hanziTc: "話說天下大勢，分久必合，合久必分。", pinyin: "Huàshuō tiānxià dàshì, fēn jiǔ bì hé, hé jiǔ bì fēn.", hanViet: "Thoại thuyết thiên hạ đại thế, phân cửu tất hợp, hợp cửu tất phân.", vi: "Kể rằng đại thế trong thiên hạ, chia cắt lâu ngày tất lại hợp nhất, hợp nhất lâu ngày tất lại phân chia.", en: "The grand tide of the empire flows thus: what has long been divided must unite; what has long been united must divide.", commentary: "Bảy chữ mở đầu kiệt tác tiểu thuyết lịch sử đầu tiên của Trung Quốc.", keyTerms: ["lishi"] },
        { passageTitle: "Hồi 1 — Kết Nghĩa Vườn Đào (Chữ Nghĩa Đồng Sinh Tử)", hanziSc: "不求同年同月同日生，但愿同年同月同日死。", hanziTc: "不求同年同月同日生，但願同年同月同日死。", pinyin: "Bù qiú tóngnián tóngyuè tóngrì shēng, dàn yuàn tóngnián tóngyuè tóngrì sǐ.", hanViet: "Bất cầu đồng niên đồng nguyệt đồng nhật sinh, đãn nguyện đồng niên đồng nguyệt đồng nhật tử.", vi: "Chẳng cầu sinh cùng năm cùng tháng cùng ngày, chỉ nguyện chết cùng năm cùng tháng cùng ngày.", en: "We ask not to be born in the same year, month, and day, but hope to die on the same day together.", commentary: "Khế ước tín nghĩa bằng hữu ảnh hưởng sâu đậm tới văn hóa hội quán và tình bằng hữu Á Đông.", keyTerms: ["renqing"] },
        { passageTitle: "Gia Cát Lượng (Hậu Xuất Sư Biểu) — Tận Tụy Trách Nhiệm", hanziSc: "鞠躬尽瘁，死而后已。", hanziTc: "鞠躬盡瘁，死而後已。", pinyin: "Jūgōng jìncuì, sǐ érhòu yǐ.", hanViet: "Cúc cung tận tụy, tử nhi hậu dĩ.", vi: "Cúi mình gánh vác dốc hết sức tàn, đến lúc nhắm mắt xuôi tay mới thôi.", en: "Devote one's whole strength uprightly, ceasing only upon death.", commentary: "Lý tưởng phụng sự công vụ của Khổng Minh trở thành biểu tượng tận trung.", keyTerms: ["junzi"] }
      ]
    },
    {
      id: "bachanhtapluc",
      treasury: "tap", treasuryLabel: "Tập bộ 集部",
      titleZh: "《北行杂录》", titleZhTrad: "《北行雜錄》",
      titleVi: "Bắc Hành Tạp Lục (Nguyễn Du)", titleEn: "Miscellaneous Records of a Northern Journey (Nguyễn Du)",
      era: "Đầu Thế kỷ XIX (1813–1814)", author: "Nguyễn Du (阮攸 — Đại Việt)", school: "Thơ chữ Hán Đi sứ (Đồng văn Đối thoại Trung – Việt)",
      whyItMatters: "Kiệt tác chữ Hán gồm 131 bài thơ của Đại thi hào dân tộc Việt Nam Nguyễn Du viết dọc đường đi sứ Bắc Kinh: kết tinh chiều sâu đồng cảm văn hiến và phê phán nhân sinh tự chủ của trí thức Việt.",
      summary: "Viết suốt hành trình từ Nam Quan qua Quế Lâm, Hồ Nam, sông Tương, Hoàng Hà tới Bắc Kinh năm 1813–1814; đối thoại trực tiếp với Khuất Nguyên, Lý Bạch, Đỗ Phủ, Văn Thiên Tường và khắc họa nỗi khổ dân chúng lao động bên lề lịch sử.",
      excerpts: [
        { passageTitle: "Phản Chiêu Hồn — Đối Thoại Với Khuất Nguyên", hanziSc: "后世人人皆上官，大地处处皆汨罗。魂兮魂兮归来乎！", hanziTc: "後世人人皆上官，大地處處皆汨羅。魂兮魂兮歸來乎！", pinyin: "Hòushì rénrén jiē Shàngguān, dàdì chùchù jiē Mìluó. Hún xī hún xī guīlái hū!", hanViet: "Hậu thế nhân nhân giai Thượng Quan, đại địa xứ xứ giai Mịch La. Hồn hề hồn hề quy lai hồ!", vi: "Đời sau ai nấy cũng có thể mang tâm địa Thượng Quan Đại phu, khắp mặt đất đâu đâu cũng có dòng sông Mịch La cả; hồn ơi hồn chớ quay về làm chi!", en: "Every age breeds cunning ministers; everywhere on earth flows a Miluo River—O soul, why return to this world?", commentary: "Đoạn thơ chữ Hán mang tầm vóc triết học nhân loại viết bên dòng sông Tương của Nguyễn Du.", keyTerms: ["wenhua"] },
        { passageTitle: "Thái Bình Mại Ca Giả — Tình Thương Dân Sinh Phổ Quát", hanziSc: "同是江南客，天涯共此时。不知何物苦，老泪洒寒枝。", hanziTc: "同是江南客，天涯共此時。不知何物苦，老淚灑寒枝。", pinyin: "Tóng shì Jiāngnán kè, tiānyá gòng cǐshí...", hanViet: "Đồng thị Giang Nam khách, thiên nhai cộng thử thời...", vi: "Cùng thân lữ thứ phương trời, thấu hiểu cảnh người hát rong mù lòa giữa giá rét Thái Bình, Chánh sứ Nguyễn Du cởi áo san sẻ nỗi đau kiếp người vượt ranh giới quốc gia.", en: "Fellow travelers at heaven's edge sharing this bitter winter hour—sorrow transcends borders.", commentary: "Minh chứng tầm vóc nhân đạo cao cả của văn học đi sứ Việt Nam.", keyTerms: ["ren"] },
        { passageTitle: "Mộ Tần Cối — Công Lý Lịch Sử", hanziSc: "自古英雄皆有死，唯留忠义在人间。", hanziTc: "自古英雄皆有死，唯留忠義在人間。", pinyin: "Zìgǔ yīngxióng jiē yǒu sǐ, wéi liú zhōngyì zài rénjiān.", hanViet: "Tự cổ anh hùng giai hữu tử, duy lưu trung nghĩa tại nhân gian.", vi: "Từ xưa bậc anh hùng ai rồi cũng mất đi, chỉ có tấm lòng trung nghĩa mới lưu danh mãi giữa nhân gian.", en: "From antiquity heroes all perish; only loyalty and righteousness endure among humanity.", commentary: "Suy ngẫm triết lý lịch sử sâu sắc tại Hàng Châu của Chánh sứ Đại Việt.", keyTerms: ["daode"] }
      ]
    }
  ];

  // Ensure existing items in CCE_PHILOSOPHY.classicalTexts get Tứ Khố metadata + rich multi-passage excerpts,
  // and provide clean fallback structured excerpts for the remaining existing entries (laozi/hanfeizi/etc. if needed)
  window.CCE_PHILOSOPHY.treasuryCategories = TREASURY_CATEGORIES;

  window.CCE_PHILOSOPHY.classicalTexts.forEach((txt) => {
    if (ENRICH_EXISTING_19[txt.id]) {
      Object.assign(txt, ENRICH_EXISTING_19[txt.id]);
    } else if (!txt.treasury) {
      // Assign balanced Four Treasuries tag + wrap existing single excerpt if any other entry wasn't in map
      txt.treasury = /shiji|zizhitongjian/i.test(txt.id) ? "su" : (/lunyu|mengzi|daxue|zhongyong|yijing|shangshu|shijing|liji|chunqiu/i.test(txt.id) ? "kinh" : "tu");
      txt.treasuryLabel = txt.treasury === "kinh" ? "Kinh bộ 经部" : txt.treasury === "su" ? "Sử bộ 史部" : "Tử bộ 子部";
    }
    if (!Array.isArray(txt.excerpts) || !txt.excerpts.length) {
      if (txt.excerptZh) {
        txt.excerpts = [
          {
            passageTitle: "Đoạn trích Nguyên điển Tiêu biểu",
            hanziSc: txt.excerptZh,
            hanziTc: txt.excerptZhTrad || txt.excerptZh,
            pinyin: txt.excerptPinyin || "",
            hanViet: txt.excerptHanViet || "",
            vi: txt.excerptVi || "",
            en: txt.excerptEn || "",
            commentary: txt.summary || "",
            keyTerms: ["wenhua"]
          }
        ];
      }
    }
  });

  const existingIds = new Set(window.CCE_PHILOSOPHY.classicalTexts.map((t) => t.id));
  NEW_CANONICAL_11.forEach((txt) => {
    if (!existingIds.has(txt.id)) {
      window.CCE_PHILOSOPHY.classicalTexts.push(txt);
      existingIds.add(txt.id);
    }
  });
})();
