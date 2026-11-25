// ============================================================================
// Sections 4, 5B & 5C: Chinese Culture Dictionary & Zero-Pinyin Anki Bank
// Every entry strictly respects Zero-Pinyin Front + 5-Layer Back encoding,
// radical & Six-Writings analysis, Bilingual Bridging, and 3 example sentences.
// Specialized historical/cultural terms are placed under "Advanced / Academic Chinese"
// rather than arbitrarily assigning unverified HSK numbers.
// ============================================================================

window.CCE_DICTIONARY = [
  {
    id: "wenhua",
    hanzi: "文化",
    traditional: "文化",
    pinyin: "wénhuà",
    level: "HSK 1-2",
    pos: "n.",
    english: "Culture; civilization; literacy and cultivation",
    vietnamese: "Văn hóa (Hán-Việt: Văn hóa)",
    radical: "文 (văn – chữ viết/vẻ đẹp, 4 nét) + 匕 (chủy – biến hóa)",
    components: "文 (Tượng hình: hình xăm đan chéo trên ngực hoặc hoa văn) + 化 (Hội ý: người đứng và người lộn ngược chỉ sự biến đổi). Nguyên nghĩa cổ trong 《周易》 là 'Dĩ văn giáo hóa' (lấy lễ nghĩa văn chương để cảm hóa).",
    context: "Khái niệm cốt lõi trong nhân học và nghiên cứu Trung Quốc; từ thời Lưu Hướng đời Hán mang nghĩa đối lập với 'Vũ lực' (Văn trị giáo hóa).",
    related: ["传统文化 (văn hóa truyền thống)", "文化交流 (giao lưu văn hóa)", "跨文化沟通 (giao tiếp liên văn hóa)"],
    mnemonic: "Dùng nét đẹp chữ nghĩa (文) để cảm hóa và biến đổi (化) con người — đó chính là bản chất của Văn hóa.",
    examples: [
      { zh: "我对中国传统文化很感兴趣。", pinyin: "Wǒ duì Zhōngguó chuántǒng wénhuà hěn gǎn xìngqù.", en: "I am very interested in traditional Chinese culture.", vi: "Tôi rất hứng thú với văn hóa truyền thống Trung Quốc." },
      { zh: "语言是了解一个国家文化的桥梁。", pinyin: "Yǔyán shì liǎojiě yí gè guójiā wénhuà de qiáoliáng.", en: "Language is a bridge to understanding a country's culture.", vi: "Ngôn ngữ là cầu nối để thấu hiểu văn hóa của một quốc gia." },
      { zh: "中越两国有着悠久的文化交流历史。", pinyin: "Zhōng-Yuè liǎng guó yǒuzhe yōujiǔ de wénhuà jiāoliú lìshǐ.", en: "China and Vietnam share a long history of cultural exchange.", vi: "Hai nước Trung – Việt có lịch sử giao lưu văn hóa lâu đời." }
    ]
  },
  {
    id: "cha",
    hanzi: "茶",
    traditional: "茶",
    pinyin: "chá",
    level: "Beginner",
    pos: "n.",
    english: "Tea; tea plant; brewed tea infusion",
    vietnamese: "Trà / Chè (Hán-Việt: Trà)",
    radical: "艹 (thảo – cây cỏ, bộ 140)",
    components: "Hình thanh + Hội ý: trên là 艹 (thảo mộc), giữa là 人 (con người), dưới là 木 (cây gỗ) — người ở giữa cỏ cây hái lá trà; cũng là biến thể từ chữ 荼 (đồ) thời Đường sau khi Lục Vũ viết 《茶经》 (bớt một nét ngang).",
    context: "Một trong bảy nhu yếu phẩm đời thường cổ đại ('Khai môn thất kiện sự': củi, gạo, dầu, muối, tương, giấm, trà) và biểu tượng tinh thần 'Hòa – Kính'.",
    related: ["茶道 (trà đạo)", "功夫茶 (trà Công phu)", "茶马古道 (con đường Trà Mã)"],
    mnemonic: "Người (人) đứng dưới tán cỏ (艹) và cây gỗ (木) để hái lá Trà (茶).",
    examples: [
      { zh: "请喝一杯热茶。", pinyin: "Qǐng hē yì bēi rè chá.", en: "Please have a cup of hot tea.", vi: "Mời bạn uống một tách trà nóng." },
      { zh: "杭州的西湖龙井茶非常有名。", pinyin: "Hángzhōu de Xīhú Lóngjǐng chá fēicháng yǒumíng.", en: "Hangzhou's West Lake Longjing tea is very famous.", vi: "Trà Long Tỉnh Tây Hồ ở Hàng Châu vô cùng nổi tiếng." },
      { zh: "中国茶文化体现了人与自然的和谐。", pinyin: "Zhōngguó chá wénhuà tǐxiàn le rén yǔ zìrán de héxié.", en: "Chinese tea culture reflects harmony between humanity and nature.", vi: "Văn hóa trà Trung Quốc thể hiện sự hài hòa giữa con người và tự nhiên." }
    ]
  },
  {
    id: "lishi",
    hanzi: "历史",
    traditional: "歷史",
    pinyin: "lìshǐ",
    level: "HSK 1-2",
    pos: "n.",
    english: "History; past events and historical records",
    vietnamese: "Lịch sử (Hán-Việt: Lịch sử)",
    radical: "厂 (hán) / 口 (khẩu)",
    components: "历 (chữ Phồn thể 歷: trải qua dấu chân qua rừng lúa) + 史 (Hội ý: bàn tay 又 cầm ống thẻ tre ghi chép sự kiện — chức quan Sử thời Thương-Chu).",
    context: "Truyền thống sử học Trung Hoa đề cao 'Dĩ sử vi giám' (Lấy lịch sử làm gương soi), kết tinh qua bộ Nhị thập tứ sử.",
    related: ["历史地理 (địa lý lịch sử)", "历史文献 (tư liệu lịch sử)", "历史唯物主义 (duy vật lịch sử)"],
    mnemonic: "Trải qua (历) năm tháng được bàn tay sử quan cầm bút ghi chép (史) thành Lịch sử.",
    examples: [
      { zh: "我喜欢研究中国古代历史。", pinyin: "Wǒ xǐhuan yánjiū Zhōngguó gǔdài lìshǐ.", en: "I enjoy researching ancient Chinese history.", vi: "Tôi thích nghiên cứu lịch sử Trung Quốc cổ đại." },
      { zh: "西安是一座历史文化名城。", pinyin: "Xī'ān shì yí zuò lìshǐ wénhuà míngchéng.", en: "Xi'an is a renowned city of history and culture.", vi: "Tây An là một danh thành lịch sử văn hóa nổi tiếng." },
      { zh: "我们要以历史为鉴，客观分析史料。", pinyin: "Wǒmen yào yǐ lìshǐ wéi jiàn, kèguān fēnxi shǐliào.", en: "We should take history as a mirror and analyze historical sources objectively.", vi: "Chúng ta cần lấy lịch sử làm gương, phân tích sử liệu một cách khách quan." }
    ]
  },
  {
    id: "chuantong",
    hanzi: "传统",
    traditional: "傳統",
    pinyin: "chuántǒng",
    level: "HSK 3-4",
    pos: "n. / adj.",
    english: "Tradition; traditional; passed down across generations",
    vietnamese: "Truyền thống (Hán-Việt: Truyền thống)",
    radical: "亻 (nhân đứng) + 纟 (mịch – sợi tơ)",
    components: "传 (Hình thanh: bộ Nhân 亻 biểu ý người truyền đạt + 专 biểu âm) + 统 (Hình thanh: bộ Mịch 纟 biểu ý sợi tơ nối liền mối đầu + 充 biểu âm).",
    context: "Gốc nghĩa 统 là đầu mối sợi kén tơ nối liên tục; ghép thành 'Truyền thống' chỉ dòng chảy tri thức và tập quán truyền thừa liên thế hệ.",
    related: ["传统节日 (lễ hội truyền thống)", "传统习俗 (phong tục truyền thống)", "守正创新 (giữ gốc và đổi mới)"],
    mnemonic: "Con người (亻) trao nối (传) sợi tơ xuyên suốt thời gian (纟 trong 统) tạo nên Truyền thống.",
    examples: [
      { zh: "春节是中国最重要的传统节日。", pinyin: "Chūnjié shì Zhōngguó zuì zhòngyào de chuántǒng jiérì.", en: "Spring Festival is the most important traditional festival in China.", vi: "Xuân Tiết là lễ hội truyền thống quan trọng nhất ở Trung Quốc." },
      { zh: "传统文化正在以现代形式重新流行起来。", pinyin: "Chuántǒng wénhuà zhèngzài yǐ xiàndài xíngshì chóngxīn liúxíng qǐlái.", en: "Traditional culture is regaining popularity in modern forms.", vi: "Văn hóa truyền thống đang phổ biến trở lại dưới các hình thức hiện đại." },
      { zh: "研究传统习俗有助于理解当代社会。", pinyin: "Yánjiū chuántǒng xísú yǒuzhùyú lǐjiě dāngdài shèhuì.", en: "Studying traditional customs helps understand contemporary society.", vi: "Nghiên cứu tập quán truyền thống giúp hiểu rõ xã hội đương đại." }
    ]
  },
  {
    id: "guanxi",
    hanzi: "关系",
    traditional: "關係",
    pinyin: "guānxi",
    level: "HSK 3-4",
    pos: "n. / v.",
    english: "Relationship; social connections; interpersonal network of mutual obligation",
    vietnamese: "Quan hệ; mạng lưới quan hệ xã hội (Hán-Việt: Quan hệ)",
    radical: "丷 / 门 (cửa trong phồn thể 關) + 糸 (mịch – sợi tơ)",
    components: "关 (Phồn thể 關: then cài cửa nối hai cánh) + 系 (Phồn thể 繫: bàn tay và sợi tơ buộc kết nối lại).",
    context: "Khái niệm xã hội học và kinh doanh thường được thảo luận trong giao tiếp Trung Quốc, gắn liền với Tín nhiệm (信用), Thể diện (面子) và Nhân tình (人情).",
    related: ["人际关系 (quan hệ giữa người với người)", "拉关系 (gây dựng quan hệ)", "合作伙伴关系 (quan hệ đối tác hợp tác)"],
    mnemonic: "Mở then cửa (关) và buộc chặt sợi tơ kết nối (系) với nhau thành Quan hệ.",
    examples: [
      { zh: "在商业合作中，建立信任关系非常重要。", pinyin: "Zài shāngyè hézuò zhōng, jiànlì xìnrèn guānxi fēicháng zhòngyào.", en: "In business cooperation, building trusting relationships is crucial.", vi: "Trong hợp tác thương mại, xây dựng quan hệ tin cậy vô cùng quan trọng." },
      { zh: "文化理解能改善跨国贸易关系。", pinyin: "Wénhuà lǐjiě néng gǎishàn kuàguó màoyì guānxi.", en: "Cultural understanding can improve cross-border trade relations.", vi: "Thấu hiểu văn hóa có thể cải thiện quan hệ thương mại xuyên biên giới." },
      { zh: "现代企业不能只靠关系，更要重视合同和合规。", pinyin: "Xiàndài qǐyè bù néng zhǐ kào guānxi, gèng yào zhòngshì hétong hé héguī.", en: "Modern enterprises cannot rely solely on connections; they must prioritize contracts and compliance.", vi: "Doanh nghiệp hiện đại không thể chỉ dựa vào quan hệ mà càng phải coi trọng hợp đồng và tuân thủ pháp lý." }
    ]
  },
  {
    id: "chunjie",
    hanzi: "春节",
    traditional: "春節",
    pinyin: "Chūnjié",
    level: "HSK 1-2",
    pos: "n.",
    english: "Spring Festival; Chinese Lunar New Year",
    vietnamese: "Tết Nguyên Đán / Xuân Tiết (Hán-Việt: Xuân tiết)",
    radical: "日 (nhật – mặt trời) + 艹 (thảo – cỏ)",
    components: "春 (Hội ý: mặt trời 日 rọi xuống cỏ cây 屯/艸 đâm chồi nảy lộc) + 节 (Hình thanh: bộ Trúc 竹 – đốt tre đánh dấu chu kỳ thời gian).",
    context: "Lễ hội đoàn viên truyền thống lớn nhất của người Trung Quốc (được UNESCO ghi danh năm 2024), khởi nguồn từ lễ tạ ơn nông nghiệp cổ đại.",
    related: ["除夕 (đêm Giao thừa)", "年夜饭 (bữa cơm tất niên)", "压岁钱 (tiền lì xì)"],
    mnemonic: "Mặt trời (日) đánh thức mầm xuân (春) vào đúng đốt tre thời gian (节) mở đầu năm mới.",
    examples: [
      { zh: "春节期间，很多人回家和家人团聚。", pinyin: "Chūnjié qījiān, hěn duō rén huí jiā hé jiārén tuánjù.", en: "During the Spring Festival, many people return home to reunite with family.", vi: "Trong dịp Tết Xuân Tiết, rất nhiều người về quê đoàn tụ cùng gia đình." },
      { zh: "北方人春节常吃饺子。", pinyin: "Běifāngrén Chūnjié cháng chī jiǎozi.", en: "People in northern China often eat dumplings during Spring Festival.", vi: "Người miền Bắc Trung Quốc thường ăn sủi cảo dịp Tết." },
      { zh: "2024年，中国春节被列入联合国教科文组织非遗名录。", pinyin: "2024 nián, Zhōngguó Chūnjié bèi lièrù Liánhéguó Jiàokēwén Zǔzhī fēiyí mínglù.", en: "In 2024, China's Spring Festival was inscribed on UNESCO's Intangible Cultural Heritage list.", vi: "Năm 2024, Xuân Tiết Trung Quốc được đưa vào danh sách Di sản phi vật thể UNESCO." }
    ]
  },
  {
    id: "mianzi",
    hanzi: "面子",
    traditional: "面子",
    pinyin: "miànzi",
    level: "HSK 5-6",
    pos: "n.",
    english: "Face; social prestige, dignity, and public reputation",
    vietnamese: "Thể diện; danh dự xã hội (Hán-Việt: Diện tử)",
    radical: "面 (diện – khuôn mặt, bộ 176)",
    components: "面 (Tượng hình: khuôn mặt với mắt ở giữa khung bao) + 子 (danh từ hóa).",
    context: "Khái niệm tâm lý – xã hội trọng tâm trong giao tiếp Đông Á. Học giả Hồ Tiên Tấn phân biệt 'Liên' (品格 – đạo đức nội tại) với 'Diện tử' (vị thế xã hội bên ngoài).",
    related: ["给面子 (nể mặt / giữ thể diện cho ai)", "留余地 (chừa lối thoát danh dự)", "丢面子 (mất mặt)"],
    mnemonic: "Khuôn mặt (面) được trưng ra trước mọi người là thước đo Thể diện xã hội.",
    examples: [
      { zh: "在商务谈判中，要注意给对方留面子。", pinyin: "Zài shāngwù tánpàn zhōng, yào zhùyì gěi duìfāng liú miànzi.", en: "In business negotiations, one should be mindful to save face for the counterpart.", vi: "Trong đàm phán thương mại, cần chú ý giữ thể diện cho đối tác." },
      { zh: "不要在公共场合直接批评同事，那样会让他没面子。", pinyin: "Bú yào zài gōnggòng chǎnghé zhíjiē pīpíng tóngshì, nàyàng huì ràng tā méi miànzi.", en: "Do not criticize colleagues directly in public, as that will make them lose face.", vi: "Đừng phê bình thẳng đồng nghiệp nơi công cộng, làm vậy sẽ khiến họ mất thể diện." },
      { zh: "面子文化既存在于中国，也体现在越南的社交礼仪中。", pinyin: "Miànzi wénhuà jì cúnzài yú Zhōngguó, yě tǐxiàn yú Yuènán de shèjiāo lǐyí zhōng.", en: "Face culture exists not only in China but is also reflected in Vietnamese social etiquette.", vi: "Văn hóa thể diện vừa tồn tại ở Trung Quốc, vừa thể hiện trong lễ nghi giao tiếp của Việt Nam." }
    ]
  },
  {
    id: "renqing",
    hanzi: "人情",
    traditional: "人情",
    pinyin: "rénqíng",
    level: "HSK 5-6",
    pos: "n.",
    english: "Human feelings; reciprocal favors and moral obligation",
    vietnamese: "Nhân tình; tình người và nghĩa vụ qua lại (Hán-Việt: Nhân tình)",
    radical: "人 (nhân) + 忄 (tâm đứng)",
    components: "人 (Tượng hình: dáng người) + 情 (Hình thanh: bộ Tâm 忄 biểu ý cảm xúc + 青 biểu âm).",
    context: "Một trong ba trụ cột của tương tác xã hội Trung Hoa (cùng Guanxi và Mianzi): nhận ân huệ là mang một 'món nợ nhân tình' cần đáp lại đúng lúc.",
    related: ["人情世故 (nhân tình thế thái)", "欠人情 (nợ ân tình)", "顺水人情 (tiện tay làm ơn)"],
    mnemonic: "Con người (人) đối đãi bằng tấm lòng (忄) và sự chân thành (青) tạo ra Nhân tình.",
    examples: [
      { zh: "他帮了我一个大忙，我欠了他一份人情。", pinyin: "Tā bāng le wǒ yí gè dà máng, wǒ qiàn le tā yí fèn rénqíng.", en: "He did me a big favor; I owe him a favor.", vi: "Anh ấy đã giúp tôi một việc lớn, tôi nợ anh ấy một món ân tình." },
      { zh: "做跨境贸易既要懂合同规则，也要通人情世故。", pinyin: "Zuò kuàjìng màoyì jì yào dǒng hétong guīzé, yě yào tōng rénqíng shìgù.", en: "Doing cross-border trade requires understanding both contractual rules and social nuances.", vi: "Làm thương mại xuyên biên giới vừa phải hiểu quy tắc hợp đồng, vừa cần am tường nhân tình thế thái." },
      { zh: "人情往来需要建立在合法合规的基础之上。", pinyin: "Rénqíng wǎnglái xūyào jiànlì zài héfǎ héguī de jīchǔ zhī shàng.", en: "Reciprocal social exchanges need to be built on a legal and compliant foundation.", vi: "Qua lại nhân tình cần được xây dựng trên nền tảng hợp pháp và tuân thủ quy định." }
    ]
  },
  {
    id: "zhexue",
    hanzi: "哲学",
    traditional: "哲學",
    pinyin: "zhéxué",
    level: "HSK 5-6",
    pos: "n.",
    english: "Philosophy",
    vietnamese: "Triết học (Hán-Việt: Triết học)",
    radical: "口 (khẩu) + 子 (tử)",
    components: "哲 (Hình thanh: 折 biểu âm/chặt lọc + 口 biểu ý lời nói minh triết) + 学 (Học tập).",
    context: "Thuật ngữ hiện đại do học giả Nhật Bản Nishi Amane dịch từ 'Philosophy' dựa trên cổ ngữ Hán ('Triết' 哲 là trí tuệ sáng suốt), sau du nhập trở lại Trung Quốc và Việt Nam cuối thế kỷ XIX.",
    related: ["中国哲学 (triết học Trung Quốc)", "儒家哲学 (triết học Nho gia)", "哲学思想 (tư tưởng triết học)"],
    mnemonic: "Lời nói (口) thấu suốt chắt lọc (折) được nghiên cứu học hỏi (学) là Triết học.",
    examples: [
      { zh: "先秦时期是中国哲学思想的奠基阶段。", pinyin: "Xiān-Qín shíqī shì Zhōngguó zhéxué sīxiǎng de diànjī jiēduàn.", en: "The pre-Qin period was the foundational stage of Chinese philosophical thought.", vi: "Thời kỳ Tiên Tần là giai đoạn đặt nền móng của tư tưởng triết học Trung Quốc." },
      { zh: "道家哲学强调顺应自然规律。", pinyin: "Dàojiā zhéxué qiángdiào shùnyìng zìrán guīlǜ.", en: "Daoist philosophy emphasizes acting in accordance with natural patterns.", vi: "Triết học Đạo gia nhấn mạnh thuận theo quy luật tự nhiên." },
      { zh: "比较东西方哲学有助于培养批判性思维。", pinyin: "Bǐjiào Dōng-Xīfāng zhéxué yǒuzhùyú péiyǎng pīpànxìng sīwéi.", en: "Comparing Eastern and Western philosophy helps cultivate critical thinking.", vi: "So sánh triết học Đông – Tây giúp rèn luyện tư duy phản biện." }
    ]
  },
  {
    id: "maoyi",
    hanzi: "贸易",
    traditional: "貿易",
    pinyin: "màoyì",
    level: "HSK 5-6",
    pos: "n. / v.",
    english: "Trade; commerce; exchange of goods and services",
    vietnamese: "Thương mại / Mậu dịch (Hán-Việt: Mậu dịch)",
    radical: "贝 (bối – vỏ sò tiền tệ) + 日 (nhật)",
    components: "贸 (Hình thanh: 卯 biểu âm + bộ Bối 贝 biểu ý tiền bạc tài sản) + 易 (Tượng hình cổ chỉ rót chất lỏng từ bình này sang bình khác -> trao đổi, thay đổi).",
    context: "Chữ 易 vừa xuất hiện trong 贸易 (trao đổi hàng hóa) vừa xuất hiện trong 《易经》 (biến đổi vũ trụ).",
    related: ["国际贸易 (thương mại quốc tế)", "边境贸易 (biên mậu)", "贸易顺差 (thặng dư thương mại)"],
    mnemonic: "Mang tiền bạc vỏ sò (贝) ra trao đổi qua lại (易) chính là Mậu dịch thương mại.",
    examples: [
      { zh: "中越双边贸易额近年来持续增长。", pinyin: "Zhōng-Yuè shuāngbiān màoyì'é jìnniánlái chíxù zēngzhǎng.", en: "Bilateral trade volume between China and Vietnam has grown steadily in recent years.", vi: "Kim ngạch thương mại song phương Trung – Việt những năm gần đây tăng trưởng liên tục." },
      { zh: "海上丝绸之路推动了古代亚洲的海上贸易。", pinyin: "Hǎishàng Sīchóu Zhī Lù tuīdòng le gǔdài Yàzhōu de hǎishàng màoyì.", en: "The Maritime Silk Road promoted maritime trade in ancient Asia.", vi: "Con đường Tơ lụa trên biển đã thúc đẩy thương mại hàng hải ở châu Á cổ đại." },
      { zh: "学习国际贸易需要熟悉关税与原产地规则。", pinyin: "Xuéxí guójì màoyì xūyào shúxī guānshuì yǔ yuánchǎndì guīzé.", en: "Studying international trade requires familiarity with tariffs and rules of origin.", vi: "Học thương mại quốc tế đòi hỏi nắm vững thuế quan và quy tắc xuất xứ." }
    ]
  },
  {
    id: "gongyinglian",
    hanzi: "供应链",
    traditional: "供應鏈",
    pinyin: "gōngyìngliàn",
    level: "HSK 5-6",
    pos: "n.",
    english: "Supply chain",
    vietnamese: "Chuỗi cung ứng (Hán-Việt: Cung ứng liên)",
    radical: "亻 (nhân) + 广 (nghiễm) + 钅 (kim)",
    components: "供 (cung cấp) + 应 (đáp ứng) + 链 (Hình thanh: bộ Kim 钅 chỉ dây xích kim loại + 连 liên kết).",
    context: "Thuật ngữ cốt lõi trong kinh tế Trung Quốc hiện đại; vùng Châu thổ Trường Giang và Vùng Vịnh Lớn là những cụm chuỗi cung ứng hoàn chỉnh nhất thế giới.",
    related: ["供应链管理 (quản trị chuỗi cung ứng)", "产业链 (chuỗi ngành hàng)", "跨境物流 (logistics xuyên biên giới)"],
    mnemonic: "Cung cấp (供) đáp ứng (应) nối liền bằng sợi dây xích kim loại (链) tạo thành Chuỗi cung ứng.",
    examples: [
      { zh: "深圳拥有全球最完善的电子产品供应链之一。", pinyin: "Shēnzhèn yǒngyǒu quánqiú zuì wánshàn de diànzǐ chǎnpǐn gōngyìngliàn zhī yī.", en: "Shenzhen possesses one of the world's most complete electronics supply chains.", vi: "Thâm Quyến sở hữu một trong những chuỗi cung ứng sản phẩm điện tử hoàn chỉnh nhất toàn cầu." },
      { zh: "区域全面经济伙伴关系协定加强了中越供应链合作。", pinyin: "RCEP jiāqiáng le Zhōng-Yuè gōngyìngliàn hézuò.", en: "RCEP has strengthened supply chain cooperation between China and Vietnam.", vi: "Hiệp định RCEP đã tăng cường hợp tác chuỗi cung ứng giữa Trung Quốc và Việt Nam." },
      { zh: "数字技术显著提升了现代供应链的韧性。", pinyin: "Shùzì jìshù xiǎnzhù tíshēng le xiàndài gōngyìngliàn de rènxìng.", en: "Digital technology has significantly improved the resilience of modern supply chains.", vi: "Công nghệ số đã nâng cao đáng kể khả năng chống chịu của chuỗi cung ứng hiện đại." }
    ]
  },
  {
    id: "jingji",
    hanzi: "经济",
    traditional: "經濟",
    pinyin: "jīngjì",
    level: "HSK 3-4",
    pos: "n. / adj.",
    english: "Economy; economics; economical",
    vietnamese: "Kinh tế (Hán-Việt: Kinh tế)",
    radical: "纟 (mịch) + 氵 (thủy)",
    components: "Rút gọn từ cổ ngữ 'Kinh thế tế dân' (经世济民): 经 (dệt khung cửi / quản trị đường lối) + 济 (bộ Thủy 氵: vượt sông cứu giúp dân chúng).",
    context: "Trong văn ngôn cổ (như Tấn thư, Văn Trung Tử), 'Kinh tế' nghĩa là tài năng trị quốc giúp dân, khác với nghĩa hoạt động tài chính thị trường đơn thuần; ý nghĩa kinh tế học hiện đại hình thành cuối thế kỷ XIX.",
    related: ["数字经济 (kinh tế số)", "实体经济 (kinh tế thực)", "经济增长 (tăng trưởng kinh tế)"],
    mnemonic: "Dựng khung giềng mối (经) và vượt dòng nước cứu giúp dân (济) là gốc nghĩa của Kinh tế.",
    examples: [
      { zh: "改革开放以来，中国经济发生了巨大变化。", pinyin: "Gǎigé kāifàng yǐlái, Zhōngguó jīngjì fāshēng le jùdà biànhuà.", en: "Since reform and opening-up, China's economy has undergone tremendous changes.", vi: "Từ khi Cải cách Mở cửa, kinh tế Trung Quốc đã có biến đổi to lớn." },
      { zh: "宋代的城市商品经济非常繁荣。", pinyin: "Sòngdài de chéngshì shāngpǐn jīngjì fēicháng fánróng.", en: "The urban commodity economy of the Song Dynasty was remarkably prosperous.", vi: "Kinh tế hàng hóa đô thị thời Tống vô cùng phồn thịnh." },
      { zh: "杭州已成为中国数字经济的核心城市之一。", pinyin: "Hángzhōu yǐ chéngwéi Zhōngguó shùzì jīngjì de héxīn chéngshì zhī yī.", en: "Hangzhou has become one of China's core cities for the digital economy.", vi: "Hàng Châu đã trở thành một trong những đô thị hạt nhân của kinh tế số Trung Quốc." }
    ]
  },
  {
    id: "kuajing",
    hanzi: "跨境电商",
    traditional: "跨境電商",
    pinyin: "kuàjìng diànshāng",
    level: "HSK 5-6",
    pos: "n.",
    english: "Cross-border e-commerce",
    vietnamese: "Thương mại điện tử xuyên biên giới (Hán-Việt: Khoá cảnh điện thương)",
    radical: "⻊ (túc) + 土 (thổ) + ⻗ (vũ)",
    components: "跨 (bộ Túc ⻊: bước chân vượt qua) + 境 (bộ Thổ 土: biên giới lãnh thổ) + 电商 (viết tắt của 电子商务 – thương mại điện tử).",
    context: "Ngành mũi nhọn kết nối các cụm công nghiệp Quảng Đông–Chiết Giang với thị trường ASEAN và toàn cầu thông qua các khu thí điểm tổng hợp TMĐT xuyên biên giới.",
    related: ["保税仓 (kho ngoại quan)", "海外仓 (kho hàng nước ngoài)", "清关 (thông quan)"],
    mnemonic: "Bước chân (⻊ trong 跨) vượt qua ranh giới đất đai (土 trong 境) bằng giao dịch điện tử (电商).",
    examples: [
      { zh: "中国建立了多个跨境电商综合试验区。", pinyin: "Zhōngguó jiànlì le duō gè kuàjìng diànshāng zōnghé shìyànqū.", en: "China has established multiple comprehensive pilot zones for cross-border e-commerce.", vi: "Trung Quốc đã xây dựng nhiều khu thí điểm tổng hợp thương mại điện tử xuyên biên giới." },
      { zh: "许多大学生正在研究跨境电商的物流模式。", pinyin: "Xǔduō dàxuéshēng zhèngzài yánjiū kuàjìng diànshāng de wùliú móshì.", en: "Many university students are researching logistics models for cross-border e-commerce.", vi: "Nhiều sinh viên đại học đang nghiên cứu mô hình logistics của thương mại điện tử xuyên biên giới." },
      { zh: "跨境电商缩短了制造商与海外消费者之间的距离。", pinyin: "Kuàjìng diànshāng suōduǎn le zhìzàoshāng yǔ hǎiwài xiāofèizhě zhījiān de jùlí.", en: "Cross-border e-commerce has shortened the distance between manufacturers and overseas consumers.", vi: "Thương mại điện tử xuyên biên giới đã rút ngắn khoảng cách giữa nhà sản xuất và người tiêu dùng nước ngoài." }
    ]
  },
  {
    id: "baijia",
    hanzi: "诸子百家",
    traditional: "諸子百家",
    pinyin: "zhūzǐ bǎijiā",
    level: "Advanced / Academic Chinese",
    pos: "idiom / n. phrase",
    english: "The Hundred Schools of Thought (pre-Qin philosophical era)",
    vietnamese: "Chư tử bách gia (các bậc thầy và trăm học phái thời Xuân Thu – Chiến Quốc)",
    radical: "讠 (ngôn) + 子 (tử) + 宀 (miên)",
    components: "诸 (nhiều) + 子 (tôn xưng bậc thầy học giả: Khổng Tử, Lão Tử, Mặc Tử) + 百 (trăm – ước lệ số nhiều) + 家 (học phái/nhà).",
    context: "Thuật ngữ sử học – triết học chỉ giai đoạn nở rộ tư tưởng tự do thời Xuân Thu – Chiến Quốc (770–221 TCN).",
    related: ["百家争鸣 (trăm nhà đua tiếng)", "轴心时代 (thời đại Trục tâm)", "先秦诸子 (Chư tử Tiền Tần)"],
    mnemonic: "Các bậc thầy (诸子) thuộc trăm học phái (百家) cùng tranh luận tìm đường trị quốc cứu thế.",
    examples: [
      { zh: "诸子百家的争鸣奠定了中国思想史的根基。", pinyin: "Zhūzǐ bǎijiā de zhēngmíng diàndìng le Zhōngguó sīxiǎngshǐ de gēnjī.", en: "The contention of the Hundred Schools laid the foundation of Chinese intellectual history.", vi: "Cuộc tranh biện của Chư tử bách gia đã đặt nền móng cho lịch sử tư tưởng Trung Hoa." },
      { zh: "汉武帝之后，诸子百家的多元局面逐渐被独尊儒术取代。", pinyin: "Hàn Wǔdì zhīhòu, zhūzǐ bǎijiā de duōyuán júmiàn zhújiàn bèi dúzūn Rúshù qǔdài.", en: "After Emperor Wu of Han, the pluralism of the Hundred Schools was gradually replaced by the supremacy of Confucianism.", vi: "Sau thời Hán Vũ Đế, cục diện đa nguyên Chư tử bách gia dần bị thay thế bởi độc tôn Nho thuật." },
      { zh: "《汉书·艺文志》将诸子百家概括为九流十家。", pinyin: "«Hànshū · Yìwénzhì» jiāng zhūzǐ bǎijiā gàikuò wéi jiǔliú shíjiā.", en: "The Book of Han's 'Treatise on Literature' summarizes the Hundred Schools into nine streams and ten schools.", vi: "Thiên Nghệ văn chí trong Hán thư khái quát Chư tử bách gia thành Cửu lưu thập gia." }
    ]
  },
  {
    id: "rujia",
    hanzi: "儒家",
    traditional: "儒家",
    pinyin: "Rújiā",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Confucianism; the Confucian philosophical school",
    vietnamese: "Nho gia (trường phái triết học do Khổng Tử sáng lập)",
    radical: "亻 (nhân đứng)",
    components: "儒 (Hình thanh: bộ Nhân 亻 biểu ý con người có học + 需 nhu biểu âm, nguyên nghĩa chỉ bậc thầy nghi lễ nhu nhã có học thức) + 家 (học phái).",
    context: "Khác biệt thuật ngữ học thuật: 儒家 (triết học Nho gia), 儒学 (học thuật Nho học), 儒教 (tính chất tôn giáo hóa / lễ giáo trong xã hội).",
    related: ["四书五经 (Tứ Thư Ngũ Kinh)", "宋明理学 (Tống Minh Lý học)", "孔孟之道 (đạo Khổng Mạnh)"],
    mnemonic: "Những người (亻) am tường lễ nghi nhu nhã và cần thiết (需) cho giáo hóa xã hội là Nho gia.",
    examples: [
      { zh: "儒家思想高度重视教育与道德修养。", pinyin: "Rújiā sīxiǎng gāodù zhòngshì jiàoyù yǔ dàodé xiūyǎng.", en: "Confucian thought places high value on education and moral self-cultivation.", vi: "Tư tưởng Nho gia coi trọng hàng đầu giáo dục và tu dưỡng đạo đức." },
      { zh: "越南自李朝起便系统引入儒家科举制度。", pinyin: "Yuènán zì Lǐcháo qǐ biàn xìtǒng yǐnrù Rújiā kējǔ zhìdù.", en: "Since the Ly Dynasty, Vietnam systematically adopted the Confucian civil examination system.", vi: "Từ triều Lý, Việt Nam đã tiếp thu có hệ thống chế độ khoa cử Nho học." },
      { zh: "现代学者区分了儒家的伦理价值与历史上的等级制束缚。", pinyin: "Xiàndài xuézhě qūfēn le Rújiā de lúnlǐ jiàzhí yǔ lìshǐ shàng de děngjízhì shùfù.", en: "Modern scholars distinguish Confucian ethical values from historical hierarchical constraints.", vi: "Học giả hiện đại phân biệt giữa giá trị đạo đức của Nho gia với những ràng buộc đẳng cấp trong lịch sử." }
    ]
  },
  {
    id: "ren",
    hanzi: "仁",
    traditional: "仁",
    pinyin: "rén",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Benevolence; humaneness; authoritative moral relationality",
    vietnamese: "Nhân (Hán-Việt: Nhân – lòng nhân ái, đạo làm người)",
    radical: "亻 (nhân đứng)",
    components: "Hội ý: bộ Nhân đứng 亻 (một người) + chữ Nhị 二 (hai) — đạo lý chỉ nảy sinh trong mối quan hệ giữa hai con người với nhau.",
    context: "Phạm trù tối cao trong tư tưởng Khổng Tử (xuất hiện 109 lần trong Luận Ngữ): 'Nhân giả ái nhân' (Người có đức Nhân biết yêu thương người khác).",
    related: ["仁义礼智信 (Ngũ thường)", "仁政 (nhân chính)", "克己复礼为仁 (khắc kỷ phục lễ vi Nhân)"],
    mnemonic: "Một người (亻) đứng cạnh hai vạch ngang kết nối hai người (二) biểu thị lòng Nhân ái chỉ thành hình trong đối đãi giữa người với người.",
    examples: [
      { zh: "孔子说：“仁者爱人。”", pinyin: "Kǒngzǐ shuō: 'Rén zhě ài rén.'", en: "Confucius said: 'The humane person loves others.'", vi: "Khổng Tử nói: 'Người có đức Nhân thì biết yêu thương người khác.'" },
      { zh: "孟子将“仁政”视为治国的理想准则。", pinyin: "Mèngzǐ jiāng 'rénzhèng' shìwéi zhìguó de lǐxiǎng zhǔnzé.", en: "Mencius regarded 'humane governance' as the ideal standard for statecraft.", vi: "Mạnh Tử coi 'Nhân chính' là chuẩn mực lý tưởng để trị quốc." },
      { zh: "“仁”字从人从二，体现了人与人之间的相互关系。", pinyin: "'Rén' zì cóng rén cóng èr, tǐxiàn le rén yǔ rén zhījiān de xiānghù guānxi.", en: "The character 'ren' combines 'person' and 'two', reflecting mutual human relatedness.", vi: "Chữ 'Nhân' hợp bởi bộ Nhân và số Hai, thể hiện mối quan hệ tương hỗ giữa người với người." }
    ]
  },
  {
    id: "li",
    hanzi: "礼",
    traditional: "禮",
    pinyin: "lǐ",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Ritual propriety; social etiquette; institutional norms",
    vietnamese: "Lễ (Hán-Việt: Lễ – lễ nghi, chuẩn mực trật tự)",
    radical: "礻 (thị – tế lễ, bộ 113)",
    components: "Chữ Phồn thể 禮 rất sáng nghĩa: bộ Kỳ/Thị 示 (bàn thờ tế thần linh) + 豊 (cái chậu đựng hai chuỗi ngọc kính dâng). Phản ánh nguồn gốc từ nghi lễ tế tự cổ đại.",
    context: "Trong Nho gia, Lễ vừa là nghi thức xã hội, vừa là hiến pháp bất thành văn duy trì trật tự cộng đồng hài hòa thay cho ép buộc bạo lực.",
    related: ["礼仪之邦 (đất nước lễ nghĩa)", "礼尚往来 (có đi có lại hợp lễ)", "克己复礼 (kiềm chế mình quay về lễ)"],
    mnemonic: "Trong chữ phồn thể 禮: đứng trước bàn thờ (示) kính cẩn dâng bình ngọc quý (豊) là khởi nguồn của chữ Lễ.",
    examples: [
      { zh: "荀子认为“礼”能够节制欲望、维持社会秩序。", pinyin: "Xúnzǐ rènwéi 'lǐ' nénggòu jiézhì yùwàng, wéichí shèhuì zhìxù.", en: "Xunzi held that 'li' restrains desires and maintains social order.", vi: "Tuân Tử cho rằng 'Lễ' có thể tiết chế dục vọng và duy trì trật tự xã hội." },
      { zh: "周公制礼作乐，奠定了西周的政治文化基础。", pinyin: "Zhōu Gōng zhìlǐ zuòyuè, diàndìng le Xī-Zhōu de zhèngzhì wénhuà jīchǔ.", en: "The Duke of Zhou instituted rituals and music, laying the political and cultural foundation of Western Zhou.", vi: "Chu Công chế lễ tác nhạc, đặt nền tảng văn hóa chính trị thời Tây Chu." },
      { zh: "中越文化均重视传统社交礼节。", pinyin: "Zhōng-Yuè wénhuà jūn zhòngshì chuántǒng shèjiāo lǐjié.", en: "Both Chinese and Vietnamese cultures value traditional social etiquette.", vi: "Cả văn hóa Trung Quốc và Việt Nam đều coi trọng lễ tiết xã giao truyền thống." }
    ]
  },
  {
    id: "junzi",
    hanzi: "君子",
    traditional: "君子",
    pinyin: "jūnzǐ",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Exemplary person; person of noble moral character",
    vietnamese: "Quân tử (Hán-Việt: Quân tử)",
    radical: "口 (khẩu) + 子 (tử)",
    components: "君 (Hội ý: tay cầm trượng quyền 尹 + miệng phát lệnh 口 = người cai trị) + 子 (con trai quý tộc -> danh xưng tôn kính). Thời Khổng Tử chuyển nghĩa từ 'dòng dõi quý tộc' thành 'người có nhân cách cao đẹp'.",
    context: "Hình mẫu nhân cách lý tưởng của giáo dục Nho gia (đối lập với 'Tiểu nhân' 小人 – kẻ chỉ mưu lợi cá nhân).",
    related: ["君子和而不同 (quân tử hòa hợp mà không hùa theo)", "君子爱财，取之有道 (quân tử chuộng tài lộc nhưng kiếm bằng chính đạo)"],
    mnemonic: "Ban đầu chỉ con dòng dõi bậc quân vương (君 + 子), được Khổng Tử nâng tầm thành người giữ đạo đức làm chủ bản thân.",
    examples: [
      { zh: "君子和而不同，小人同而不和。", pinyin: "Jūnzǐ hé ér bù tóng, xiǎorén tóng ér bù hé.", en: "The exemplary person seeks harmony without conformity; the petty person conforms without harmony.", vi: "Người quân tử hòa hợp mà không hòa tan đồng nhất; kẻ tiểu nhân hùa theo giống nhau mà không thực lòng hòa hợp." },
      { zh: "君子喻于义，小人喻于利。", pinyin: "Jūnzǐ yù yú yì, xiǎorén yù yú lì.", en: "The noble person understands what is moral; the petty person understands only profit.", vi: "Người quân tử hiểu rõ điều nghĩa, kẻ tiểu nhân chỉ nhìn thấy cái lợi." },
      { zh: "梅、兰、竹、菊常被称为“花中四君子”。", pinyin: "Méi, lán, zhú, jú cháng bèi chēngwéi 'huā zhōng sì jūnzǐ'.", en: "Plum, orchid, bamboo, and chrysanthemum are often called the 'Four Gentlemen among flowers'.", vi: "Mai, Lan, Trúc, Cúc thường được gọi là 'Tứ quân tử trong các loài hoa'." }
    ]
  },
  {
    id: "daode",
    hanzi: "道德",
    traditional: "道德",
    pinyin: "dàodé",
    level: "HSK 5-6",
    pos: "n.",
    english: "Morality; ethics; (classical) Dao (the Way) and De (virtue/efficacy)",
    vietnamese: "Đạo đức (Hán-Việt: Đạo đức)",
    radical: "辶 (sước) + 彳 (xích)",
    components: "道 (Hội ý: cái đầu 首 đi trên con đường 辶 = con đường / quy luật) + 德 (Hội ý: bước chân 彳 + mắt thẳng 直 + trái tim 心 = hành xử ngay thẳng theo bản tâm).",
    context: "Trong văn hóa hiện đại nghĩa là đạo đức xã hội; nhưng trong 《道德经》, 'Đạo' là quy luật vũ trụ, 'Đức' là năng lực cụ thể hóa Đạo trong từng sự vật.",
    related: ["道德修养 (tu dưỡng đạo đức)", "商业道德 (đạo đức kinh doanh)", "职业道德 (đạo đức nghề nghiệp)"],
    mnemonic: "Bước đi tỉnh táo (辶 + 首 = 道) với ánh nhìn ngay thẳng và trái tim (直 + 心 = 德) chính là Đạo đức.",
    examples: [
      { zh: "《道德经》是道家哲学最重要的经典。", pinyin: "«Dàodéjīng» shì Dàojiā zhéxué zuì zhòngyào de jīngdiǎn.", en: "The Dao De Jing is the most important classic of Daoist philosophy.", vi: "Đạo Đức Kinh là kinh điển quan trọng nhất của triết học Đạo gia." },
      { zh: "企业在追求利润的同时应承担道德与社会责任。", pinyin: "Qǐyè zài zhuīqiú lìrùn de tóngshí yīng chéngdān dàodé yǔ shèhuì zérèn.", en: "While pursuing profit, enterprises should uphold ethical and social responsibilities.", vi: "Doanh nghiệp khi theo đuổi lợi nhuận cần gánh vác trách nhiệm đạo đức và xã hội." },
      { zh: "在先秦文献中，“道”与“德”原本是两个独立的核心概念。", pinyin: "Zài Xiān-Qín wénxiàn zhōng, 'Dào' yǔ 'Dé' yuánběn shì liǎng gè dúlì de héxīn gàiniàn.", en: "In pre-Qin texts, 'Dao' and 'De' were originally two distinct core concepts.", vi: "Trong văn bản Tiền Tần, 'Đạo' và 'Đức' vốn là hai khái niệm cốt lõi độc lập." }
    ]
  },
  {
    id: "wuwei",
    hanzi: "无为",
    traditional: "無為",
    pinyin: "wúwéi",
    level: "Advanced / Academic Chinese",
    pos: "n. / v. phrase",
    english: "Non-coercive action; effortless action aligned with natural flow",
    vietnamese: "Vô vi (không hành động cưỡng bức trái tự nhiên)",
    radical: "一 / 灬 (hỏa)",
    components: "无 (không có) + 为 (Tượng hình cổ: bàn tay dắt voi lao động -> làm việc, can thiệp). Hợp lại không phải 'không làm gì cả' mà là không can thiệp thô bạo trái quy luật.",
    context: "Nguyên lý chính trị – nhân sinh trung tâm của Lão Tử và Trang Tử: 'Vô vi nhi vô bất vi' (không cưỡng cầu nên việc gì cũng tự thành).",
    related: ["顺其自然 (thuận theo tự nhiên)", "无为而治 (trị quốc bằng vô vi)", "清静无为 (thanh tĩnh vô vi)"],
    mnemonic: "Không (无) dùng bàn tay áp đặt dắt ép (为) mà để vạn vật tự vận hành trôi chảy.",
    examples: [
      { zh: "“无为”并不是消极怠惰，而是反对违背规律的妄为。", pinyin: "'Wúwéi' bìng bú shì xiāojí dàiduò, ér shì fǎnduì wéibèi guīlǜ de wàngwéi.", en: "'Wuwei' does not mean passive laziness; rather, it opposes reckless interference against natural patterns.", vi: "'Vô vi' hoàn toàn không phải lười biếng tiêu cực, mà là phản đối hành động càn rỡ trái quy luật." },
      { zh: "西汉初年的“文景之治”吸收了黄老无为而治的思想。", pinyin: "Xī-Hàn chūnián de 'Wén-Jǐng zhī zhì' xīshōu le Huáng-Lǎo wúwéi ér zhì de sīxiǎng.", en: "The Rule of Wen and Jing in early Western Han absorbed Huang-Lao ideas of non-coercive governance.", vi: "Thời kỳ Văn-Cảnh chi trị đầu Tây Hán đã tiếp thu tư tưởng vô vi nhi trị của phái Hoàng-Lão." },
      { zh: "老子主张以无为的态度治理大国。", pinyin: "Lǎozǐ zhǔzhāng yǐ wúwéi de tàidù zhìlǐ dàguó.", en: "Laozi advocated governing a large state with a non-coercive attitude.", vi: "Lão Tử chủ trương dùng thái độ vô vi để trị nước lớn." }
    ]
  },
  {
    id: "fazhi",
    hanzi: "法治",
    traditional: "法治",
    pinyin: "fǎzhì",
    level: "HSK 5-6",
    pos: "n.",
    english: "Rule of law / (historical Legalism) rule by law",
    vietnamese: "Pháp trị / Pháp quyền (Hán-Việt: Pháp trị)",
    radical: "氵 (thủy) + 去 (khứ)",
    components: "法 (nước phẳng 氵 chảy đi 去 -> công bằng như mặt nước phẳng; phồn thể 灋 có hình thần thú Giải Trãi xử án) + 治 (trị thủy sông Đài -> cai quản).",
    context: "Cần phân biệt nghiêm ngặt trong sử học chính trị: Pháp trị cổ đại của Hàn Phi Tử ('Rule by Law' – vua đứng trên luật để kiểm soát dân/quan) khác với Nhà nước pháp quyền hiện đại ('Rule of Law' – hiến pháp và luật ràng buộc cả chính quyền).",
    related: ["法家 (Pháp gia)", "依法治国 (trị quốc theo pháp luật)", "变法 (biến pháp cải cách)"],
    mnemonic: "Dùng chuẩn mực phẳng lặng như mặt nước (氵 trong 法) để điều phối dòng chảy xã hội (氵 trong 治).",
    examples: [
      { zh: "战国时期的法家强调“刑不避大夫”的严格法令。", pinyin: "Zhànguó shíqī de Fǎjiā qiángdiào 'xíng bú bì dàfū' de yángé fǎlìng.", en: "The Warring States Legalists emphasized strict statutes where punishments did not spare high officials.", vi: "Pháp gia thời Chiến Quốc nhấn mạnh pháp lệnh nghiêm khắc 'hình phạt không né tránh đại phu'." },
      { zh: "史学界通常区分古代法家的“法制”与现代社会的“法治”。", pinyin: "Shǐxuéjiè tōngcháng qūfēn gǔdài Fǎjiā de 'fǎzhì' yǔ xiàndài shèhuì de 'fǎzhì'.", en: "Historians usually distinguish ancient Legalist rule-by-law from modern rule-of-law.", vi: "Giới sử học thường phân biệt 'pháp chế' của Pháp gia cổ đại với 'nhà nước pháp quyền' hiện đại." },
      { zh: "健全的法治环境有助于吸引长期外商投资。", pinyin: "Jiànquán de fǎzhì huánjìng yǒuzhùyú xīyǐn chángqī wàishāng tóuzī.", en: "A sound rule-of-law environment helps attract long-term foreign investment.", vi: "Môi trường pháp trị lành mạnh giúp thu hút đầu tư nước ngoài dài hạn." }
    ]
  },
  {
    id: "yinyang",
    hanzi: "阴阳",
    traditional: "陰陽",
    pinyin: "yīnyáng",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Yin and Yang (complementary polarities in Chinese cosmology)",
    vietnamese: "Âm Dương (Hán-Việt: Âm Dương)",
    radical: "阝 (phụ – gò đất, đồi núi)",
    components: "阴 (Phồn thể 陰: gò núi 阝 + mây 今 che khuất) + 阳 (Phồn thể 陽: gò núi 阝 + mặt trời 日 chiếu rọi). Bộ Phụ 阝 xác nhận gốc nghĩa liên quan địa hình sườn núi.",
    context: "Cặp phạm trù nền tảng của triết học biến dịch, Đông y và thuật số học truyền thống.",
    related: ["阴阳五行 (Âm Dương Ngũ Hành)", "阴阳平衡 (cân bằng Âm Dương)", "阴阳家 (Âm Dương gia)"],
    mnemonic: "Cùng một sườn đồi (阝): phía khuất mây trăng là Âm (阴), phía đón ánh Mặt Trời (日) là Dương (阳).",
    examples: [
      { zh: "《周易·系辞》提出“一阴一阳之谓道”。", pinyin: "«Zhōuyì · Xìcí» tíchū 'Yī yīn yī yáng zhī wèi Dào'.", en: "The 'Great Treatise' of the I Ching states: 'One Yin and one Yang—that is called the Dao.'", vi: "Hệ Từ Truyện của Chu Dịch nêu: 'Một lần Âm một lần Dương luân chuyển gọi là Đạo.'" },
      { zh: "中医认为人体健康取决于阴阳动态平衡。", pinyin: "Zhōngyī rènwéi réntǐ jiànkāng qǔjué yú yīnyáng dòngtài pínghéng.", en: "Traditional Chinese Medicine holds that health depends on the dynamic balance of Yin and Yang.", vi: "Đông y cho rằng sức khỏe con người phụ thuộc vào sự cân bằng động của Âm Dương." },
      { zh: "“阴阳”最初是指山坡背光与向光的地理朝向。", pinyin: "'Yīnyáng' zuìchū shì zhǐ shānpō bèiguāng yǔ xiàngguāng de dìlǐ cháoxiàng.", en: "'Yin and Yang' originally referred to the shaded and sunlit orientations of a hillside.", vi: "'Âm Dương' ban đầu chỉ hướng khuất nắng và hướng đón nắng của sườn núi." }
    ]
  },
  {
    id: "wuxing",
    hanzi: "五行",
    traditional: "五行",
    pinyin: "wǔxíng",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Five Phases / Five Elements (Wood, Fire, Earth, Metal, Water)",
    vietnamese: "Ngũ Hành (năm pha vận động: Kim, Mộc, Thủy, Hỏa, Thổ)",
    radical: "二 / 行 (hành – ngã tư đường)",
    components: "五 (số năm) + 行 (Tượng hình cổ: ngã tư đường phố -> đi lại, lưu hành, chuyển hóa).",
    context: "Hệ thống phân loại tương ứng động dùng trong triết học tự nhiên cổ đại, Trung y tạng tượng, lịch pháp và mệnh lý Bát Tự.",
    related: ["五行相生 (Ngũ hành tương sinh)", "五行相克 (Ngũ hành tương khắc)", "五行缺水 (Bát tự khuyết Thủy)"],
    mnemonic: "Năm yếu tố không đứng yên mà lưu thông không ngừng qua ngã tư vận động (行) tạo nên Ngũ Hành.",
    examples: [
      { zh: "在五行学说中，“行”强调动态运行而非静态物质。", pinyin: "Zài wǔxíng xuéshuō zhōng, 'xíng' qiángdiào dòngtài yùnxíng ér fēi jìngtài wùzhì.", en: "In Five Phases theory, 'xing' emphasizes dynamic movement rather than static substance.", vi: "Trong học thuyết Ngũ Hành, chữ 'Hành' nhấn mạnh sự vận động động chứ không phải vật chất tĩnh." },
      { zh: "五行相生与相克构成了一个相互制约的系统。", pinyin: "Wǔxíng xiāngshēng yǔ xiāngkè gòuchéng le yí gè xiānghù zhìyuē de xìtǒng.", en: "Mutual generation and restraint of the Five Phases form an interdependent regulatory system.", vi: "Tương sinh và tương khắc của Ngũ Hành tạo thành một hệ thống chế ước lẫn nhau." },
      { zh: "中医将五脏分别对应五行中的木、火、土、金、水。", pinyin: "Zhōngyī jiāng wǔzàng fēnbié duìyìng wǔxíng zhōng de mù, huǒ, tǔ, jīn, shuǐ.", en: "TCM maps the five zang organs to Wood, Fire, Earth, Metal, and Water respectively.", vi: "Đông y đối ứng năm tạng với Mộc, Hỏa, Thổ, Kim, Thủy trong Ngũ Hành." }
    ]
  },
  {
    id: "bagua",
    hanzi: "八卦",
    traditional: "八卦",
    pinyin: "bāguà",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Eight Trigrams (also colloquial: gossip)",
    vietnamese: "Bát Quái (tám quẻ đơn trong Dịch học; khẩu ngữ còn nghĩa là chuyện phiếm)",
    radical: "卜 (bốc – xem bói)",
    components: "八 (tám) + 卦 (Hình thanh: 圭 khuê biểu âm/đo bóng mặt trời + 卜 bốc biểu ý vết nứt chiêm bốc).",
    context: "Cẩn trọng nghĩa kép: trong học thuật là 8 tổ hợp 3 vạch Âm-Dương của Kinh Dịch; trong khẩu ngữ mạng Hồng Kông/Trung Quốc '很八卦' nghĩa là thích hóng chuyện đời tư.",
    related: ["先天八卦 (Tiên Thiên Bát Quái)", "后天八卦 (Hậu Thiên Bát Quái)", "六十四卦 (64 quẻ Kinh Dịch)"],
    mnemonic: "Tám (八) ký hiệu kết hợp giữa thước đo thiên văn (圭) và nét bói cổ (卜) tạo thành Bát Quái.",
    examples: [
      { zh: "两两八卦重叠，组合成了《周易》的六十四卦。", pinyin: "Liǎngliǎng bāguà chóngdié, zǔhé chéng le «Zhōuyì» de liùshísì guà.", en: "Pairing two of the Eight Trigrams together forms the sixty-four hexagrams of the Zhouyi.", vi: "Chồng hai quẻ Bát Quái lên nhau tạo thành 64 quẻ của Chu Dịch." },
      { zh: "考古学家在殷墟数字卦中发现了八卦的早期形态。", pinyin: "Kǎogǔ xuéjiā zài Yīnxū shùzìguà zhōng fāxiàn le bāguà de zǎoqī xíngtài.", en: "Archaeologists discovered early forms of the trigrams in Shang-era numerical hexagrams.", vi: "Các nhà khảo cổ phát hiện hình thái sơ khai của Bát Quái trong các quẻ số thời Ân Khư." },
      { zh: "在现代口语里，“八卦”有时也指打听娱乐新闻或闲话。", pinyin: "Zài xiàndài kǒuyǔ lǐ, 'bāguà' yǒushí yě zhǐ dǎtīng yúlè xīnwén huò xiánhuà.", en: "In modern colloquial speech, 'bagua' can also mean gossiping about entertainment news.", vi: "Trong khẩu ngữ hiện đại, 'bát quái' đôi khi còn chỉ việc hóng tin giải trí hoặc chuyện phiếm." }
    ]
  },
  {
    id: "yijing_term",
    hanzi: "易经",
    traditional: "易經",
    pinyin: "Yìjīng",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "I Ching / Book of Changes",
    vietnamese: "Kinh Dịch (Hán-Việt: Dịch Kinh)",
    radical: "日 (nhật) + 纟 (mịch)",
    components: "易 (biến dịch, giản dị, bất dịch) + 经 (sợi dọc khung cửi -> sách kinh điển chuẩn mực).",
    context: "Đứng đầu Ngũ Kinh của Nho gia (cùng Thi, Thư, Lễ, Xuân Thu); chia lịch sử diễn giải thành Tượng Số phái và Nghĩa Lý phái.",
    related: ["周易 (Chu Dịch)", "象数派 (Tượng Số phái)", "义理派 (Nghĩa Lý phái)"],
    mnemonic: "Cuốn sách kinh điển (经) giảng về quy luật biến hóa liên tục dưới mặt trời (易).",
    examples: [
      { zh: "《易经》位居儒家“五经”之首。", pinyin: "«Yìjīng» wèijū Rújiā 'Wǔjīng' zhī shǒu.", en: "The I Ching ranks first among the Five Classics of Confucianism.", vi: "Kinh Dịch đứng đầu trong Ngũ Kinh của Nho gia." },
      { zh: "研究《易经》需要区分西周古经与战国《易传》的历史层次。", pinyin: "Yánjiū «Yìjīng» xūyào qūfēn Xī-Zhōu gǔjīng yǔ Zhànguó «Yìzhuàn» de lìshǐ céngcì.", en: "Studying the I Ching requires distinguishing the Western Zhou core text from the Warring States Commentaries.", vi: "Nghiên cứu Kinh Dịch cần phân tách lớp văn bản cổ Tây Chu và phần Dịch Truyện thời Chiến Quốc." },
      { zh: "“天行健，君子以自强不息”出自《周易》象传。", pinyin: "'Tiān xíng jiàn, jūnzǐ yǐ zìqiáng bù xī' chūzì «Zhōuyì» Xiàngzhuàn.", en: "'Heaven moves with vigor; the noble person strives ceaselessly' comes from the Image Commentary of the Zhouyi.", vi: "Câu 'Thiên hành kiện, quân tử dĩ tự cường bất tức' xuất xứ từ Tượng Truyện của Chu Dịch." }
    ]
  },
  {
    id: "tiangan",
    hanzi: "天干",
    traditional: "天干",
    pinyin: "tiāngān",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Heavenly Stems (10-unit cyclical system)",
    vietnamese: "Thiên Can (10 Can: Giáp, Ất, Bính, Đinh, Mậu, Kỷ, Canh, Tân, Nhâm, Quý)",
    radical: "大 (đại) + 干 (can)",
    components: "天 (bầu trời) + 干 (thân cây trụ chính -> Can cốt; phồn thể trùng chữ 干/幹 chỉ thân gỗ chính).",
    context: "Kết hợp với 12 Địa Chi thành chu kỳ 60 đơn vị (Lục Thập Hoa Giáp) ghi ngày liên tục từ thời nhà Thương.",
    related: ["干支纪年 (ghi năm theo Can Chi)", "六十甲子 (Lục thập hoa giáp)", "十天干 (Thập Thiên Can)"],
    mnemonic: "Mười thân cây cột trụ của bầu trời (天 + 干) giữ nhịp thời gian.",
    examples: [
      { zh: "十天干分别是甲、乙、丙、丁、戊、己、庚、辛、壬、癸。", pinyin: "Shí tiāngān fēnbié shì jiǎ, yǐ, bǐng, dīng, wù, jǐ, gēng, xīn, rén, guǐ.", en: "The Ten Heavenly Stems are Jia, Yi, Bing, Ding, Wu, Ji, Geng, Xin, Ren, and Gui.", vi: "Mười Thiên Can lần lượt là Giáp, Ất, Bính, Đinh, Mậu, Kỷ, Canh, Tân, Nhâm, Quý." },
      { zh: "殷墟甲骨文已经普遍使用天干地支来记录日期。", pinyin: "Yīnxū jiǎgǔwén yǐjīng pǔbiàn shǐyòng tiāngān dìzhī lái jìlù rìqī.", en: "Shang oracle bone inscriptions already widely used Heavenly Stems and Earthly Branches to record dates.", vi: "Chữ Giáp Cốt Ân Khư đã sử dụng phổ biến Thiên Can Địa Chi để ghi ngày tháng." },
      { zh: "在八字命理中，出生日的天干被称为“日主”。", pinyin: "Zài bāzì mìnglǐ zhōng, chūshēng rì de tiāngān bèi chēngwéi 'rìzhǔ'.", en: "In Bazi cosmology, the Heavenly Stem of the birth day is called the 'Day Master'.", vi: "Trong mệnh lý Bát Tự, Thiên Can của ngày sinh được gọi là 'Nhật chủ'." }
    ]
  },
  {
    id: "dizhi",
    hanzi: "地支",
    traditional: "地支",
    pinyin: "dìzhī",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Earthly Branches (12-unit cyclical system)",
    vietnamese: "Địa Chi (12 Chi: Tý, Sửu, Dần, Mão, Thìn, Tỵ, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi)",
    radical: "土 (thổ) + 支 (chi)",
    components: "地 (bộ Thổ 土: mặt đất) + 支 (Tượng hình cổ: bàn tay cầm cành trúc -> nhánh cây phân chia).",
    context: "Dùng để chia 12 tháng, 12 canh giờ (mỗi chi 2 tiếng đồng hồ) và gắn với 12 Con Giáp trong văn hóa dân gian Trung–Việt.",
    related: ["十二生肖 (12 Con Giáp)", "十二时辰 (12 Canh giờ)", "地支三合 (Địa chi tam hợp)"],
    mnemonic: "Nếu Thiên Can là thân cây trời thì Địa Chi là 12 nhánh cành (支) vươn ra trên mặt đất (地).",
    examples: [
      { zh: "古代中国用十二地支将一昼夜划分为十二个时辰。", pinyin: "Gǔdài Zhōngguó yòng shí'èr dìzhī jiāng yí zhòuyè huàfēn wéi shí'èr gè shíchén.", en: "Ancient China used the Twelve Earthly Branches to divide a day-night cycle into twelve two-hour periods.", vi: "Trung Quốc cổ đại dùng 12 Địa Chi chia một ngày đêm thành 12 canh giờ." },
      { zh: "天干与地支按顺序相配，六十年为一个循环。", pinyin: "Tiāngān yǔ dìzhī àn shùnxù xiāngpèi, liùshí nián wéi yí gè xúnhuán.", en: "Heavenly Stems and Earthly Branches pair in sequence, forming a sixty-year cycle.", vi: "Thiên Can và Địa Chi phối ghép theo thứ tự tạo thành chu kỳ 60 năm." },
      { zh: "子时是指夜晚十一点到凌晨一点。", pinyin: "Zǐshí shì zhǐ yèwǎn shíyī diǎn dào língchén yì diǎn.", en: "The Zi hour refers to 11:00 PM to 1:00 AM.", vi: "Giờ Tý chỉ khoảng thời gian từ 23 giờ đêm đến 1 giờ sáng." }
    ]
  },
  {
    id: "fengshui",
    hanzi: "风水",
    traditional: "風水",
    pinyin: "fēngshuǐ",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Feng Shui (traditional Chinese spatial aesthetics and geomancy)",
    vietnamese: "Phong Thủy (Hán-Việt: Phong Thủy)",
    radical: "风 (phong – gió) + 水 (thủy – nước)",
    components: "风 (gió) + 水 (nước) — rút gọn từ nguyên lý 'Tàng phong tụ thủy' (giữ gió êm và tụ nguồn nước tốt).",
    context: "Phân biệt khoa học địa lý cảnh quan / vi khí hậu (chọn hướng nắng gió, thoát lũ, tránh sạt lở) với niềm tin cầu tài lộc dân gian.",
    related: ["堪舆 (Kham dư)", "四合院选址 (chọn thế đất Tứ Hợp Viện)", "建筑环境学 (kiến trúc môi trường học)"],
    mnemonic: "Nơi ở hài hòa với luồng gió mát (风) và dòng nước hiền hòa (水) là Phong Thủy.",
    examples: [
      { zh: "晋代《葬书》首次系统使用了“风水”一词。", pinyin: "Jìndài «Zàngshū» shǒucì xìtǒng shǐyòng le 'fēngshuǐ' yī cí.", en: "The Jin-dynasty Book of Burial first systematically used the term 'fengshui'.", vi: "Tác phẩm Táng Thư thời Tấn lần đầu tiên sử dụng có hệ thống thuật ngữ 'Phong Thủy'." },
      { zh: "传统村落常遵循“背山面水”的环境选址原则。", pinyin: "Chuántǒng cūnluò cháng zūnxún 'bèishān miànshuǐ' de huánjìng xuǎnzhǐ yuánzé.", en: "Traditional villages often follow the site-selection principle of 'mountain at the back, water in front'.", vi: "Làng cổ truyền thống thường tuân theo nguyên tắc chọn địa điểm 'tựa sơn hướng thủy'." },
      { zh: "从现代建筑学看，传统风水部分反映了采光与微气候经验。", pinyin: "Cóng xiàndài jiànzhùxué kàn, chuántǒng fēngshuǐ bùfen fǎnyìng le cǎiguāng yǔ wēiqìhòu jīngyàn.", en: "From modern architecture's perspective, traditional fengshui partly reflects daylighting and microclimate experience.", vi: "Xét từ kiến trúc học hiện đại, phong thủy truyền thống phản ánh một phần kinh nghiệm chiếu sáng và vi khí hậu." }
    ]
  },
  {
    id: "bazi",
    hanzi: "八字",
    traditional: "八字",
    pinyin: "bāzì",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Eight Characters / Four Pillars of Destiny (Bazi)",
    vietnamese: "Bát Tự (tám chữ Can Chi của năm-tháng-ngày-giờ sinh)",
    radical: "八 (bát) + 子 (tử)",
    components: "八 (số tám) + 字 (Hội ý: đứa trẻ 子 dưới mái nhà 宀 -> chữ viết sinh sôi).",
    context: "Còn gọi là Tứ Trụ (四柱) hay Tử Bình học (từ Từ Tử Bình thời Tống). Thuộc di sản thuật số học truyền thống, không phải phương pháp dự báo khoa học thực nghiệm.",
    related: ["四柱推命 (Tứ trụ suy mệnh)", "用神 (Dụng thần)", "二十四节气 (24 Tiết khí)"],
    mnemonic: "Bốn cột thời gian (Năm, Tháng, Ngày, Giờ) nhân hai chữ Can-Chi tạo thành Tám chữ (八字).",
    examples: [
      { zh: "八字由出生年、月、日、时对应的四组干支共八个字组成。", pinyin: "Bāzì yóu chūshēng nián, yuè, rì, shí duìyìng de sì zǔ gānzhī gòng bā gè zì zǔchéng.", en: "Bazi consists of eight characters formed by four pairs of Stems and Branches for birth year, month, day, and hour.", vi: "Bát Tự gồm tám chữ tạo bởi bốn cặp Can Chi ứng với năm, tháng, ngày, giờ sinh." },
      { zh: "传统八字排盘必须以太阳黄经节气划分月份。", pinyin: "Chuántǒng bāzì páipán bìxū yǐ tàiyáng huángjīng jiéqì huàfēn yuèfèn.", en: "Traditional Bazi chart construction must divide months by solar terms along the ecliptic.", vi: "Việc lập lá số Bát Tự truyền thống bắt buộc phải chia tháng theo tiết khí hoàng đạo." },
      { zh: "学术研究将八字视为传统宇宙观与民俗心理的文献样本。", pinyin: "Xuéshù yánjiū jiāng bāzì shìwéi chuántǒng yǔzhòuguān yǔ mínsú xīnlǐ de wénxiàn yàngběn.", en: "Academic research treats Bazi as textual evidence of traditional cosmology and folk psychology.", vi: "Nghiên cứu học thuật xem Bát Tự là mẫu tư liệu về vũ trụ luận truyền thống và tâm lý dân gian." }
    ]
  },
  {
    id: "ziweidoushu",
    hanzi: "紫微斗数",
    traditional: "紫微斗數",
    pinyin: "Zǐwēi Dǒushù",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Zi Wei Dou Shu (Purple Star Astrology)",
    vietnamese: "Tử Vi Đẩu Số (Hán-Việt: Tử Vi Đẩu Số)",
    radical: "糸 + 斗 + 攵",
    components: "紫微 (Sao Bắc Đẩu Tử Vi – biểu trưng hoàng cung trên trời) + 斗数 (phép tính toán theo sao Bắc Đẩu).",
    context: "Hệ thống tinh mệnh học hoàn chỉnh vào thời Minh (《紫微斗数全书》), có sức ảnh hưởng lớn trong văn hóa dân gian Đài Loan, Hồng Kông và Việt Nam.",
    related: ["十二宫 (12 cung)", "四化飞星 (Tứ Hóa phi tinh)", "星象历算 (tinh tượng lịch toán)"],
    mnemonic: "Lấy ngôi sao đế vương tím biếc Tử Vi (紫微) làm trung tâm tính toán số liệu theo chòm Bắc Đẩu (斗数).",
    examples: [
      { zh: "紫微斗数将人的社会关系与生命阶段划分为十二个宫位。", pinyin: "Zǐwēi Dǒushù jiāng rén de shèhuì guānxi yǔ shēngmìng jiēduàn huàfēn wéi shí'èr gè gōngwèi.", en: "Zi Wei Dou Shu divides human social relations and life stages into twelve palaces.", vi: "Tử Vi Đẩu Số phân chia các quan hệ xã hội và giai đoạn đời người vào mười hai cung." },
      { zh: "现存最早的《紫微斗数全书》刊行于明代。", pinyin: "Xiàncún zuìzǎo de «Zǐwēi Dǒushù Quánshū» kānxíng yú Míngdài.", en: "The earliest extant Complete Book of Zi Wei Dou Shu was printed during the Ming Dynasty.", vi: "Bộ Tử Vi Đẩu Số Toàn Thư sớm nhất còn tồn tại được khắc in vào thời Minh." },
      { zh: "紫微斗数中的“星曜”是文化符号，而非现代天文学中的物理天体。", pinyin: "Zǐwēi Dǒushù zhōng de 'xīngyào' shì wénhuà fúhào, ér fēi xiàndài tiānwénxué zhōng de wùlǐ tiāntǐ.", en: "The 'stars' in Zi Wei Dou Shu are cultural symbols rather than physical celestial bodies in modern astronomy.", vi: "Các 'ngôi sao' trong Tử Vi Đẩu Số là ký hiệu văn hóa chứ không phải thiên thể vật lý trong thiên văn học hiện đại." }
    ]
  },
  {
    id: "jieqi",
    hanzi: "二十四节气",
    traditional: "二十四節氣",
    pinyin: "Èrshísì Jiéqì",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Twenty-Four Solar Terms",
    vietnamese: "Nhị thập tứ Tiết khí (24 mốc thời tiết thiên văn theo Mặt Trời)",
    radical: "艹 + 气 (khí)",
    components: "二十四 (24) + 节 (đốt tre/điểm nối) + 气 (hơi nước/khí hậu vận động).",
    context: "Hệ thống lịch Mặt Trời chính xác của Trung Hoa cổ đại định hình hoàn chỉnh thời Tây Hán (《淮南子》), được UNESCO ghi danh năm 2016.",
    related: ["立春 (Lập Xuân)", "清明 (Thanh Minh)", "冬至 (Đông Chí)"],
    mnemonic: "Hai mươi bốn đốt tre (节) đánh dấu nhịp chuyển khí hậu (气) theo quỹ đạo Mặt Trời.",
    examples: [
      { zh: "二十四节气是依据太阳在黄道上的位置划分的。", pinyin: "Èrshísì Jiéqì shì yījù tàiyáng zài huángdào shàng de wèizhì huàfēn de.", en: "The Twenty-Four Solar Terms are divided based on the sun's position along the ecliptic.", vi: "24 Tiết khí được phân chia căn cứ vào vị trí Mặt Trời trên đường hoàng đạo." },
      { zh: "清明既是节气，也是重要的传统祭祖节日。", pinyin: "Qīngmíng jì shì jiéqì, yě shì zhòngyào de chuántǒng jìzǔ jiérì.", en: "Qingming is both a solar term and an important traditional ancestor-veneration festival.", vi: "Thanh Minh vừa là một tiết khí, vừa là lễ hội tảo mộ tổ tiên quan trọng." },
      { zh: "传统中医养生注重顺应二十四节气的气候变化。", pinyin: "Chuántǒng Zhōngyī yǎngshēng zhùzhòng shùnyìng Èrshísì Jiéqì de qìhòu biànhuà.", en: "Traditional Chinese medicine wellness emphasizes adapting to seasonal changes across the Twenty-Four Solar Terms.", vi: "Dưỡng sinh Đông y truyền thống chú trọng thích nghi với biến đổi khí hậu theo 24 Tiết khí." }
    ]
  },
  {
    id: "keju",
    hanzi: "科举",
    traditional: "科舉",
    pinyin: "kējǔ",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Imperial civil service examination system",
    vietnamese: "Khoa cử (hệ thống thi cử tuyển chọn quan lại phong kiến)",
    radical: "禾 (hòa) + 丶 / 举",
    components: "科 (bộ Hòa 禾 + Đấu 斗: phân loại từng hạng mục khoa thi) + 举 (nâng lên -> tiến cử nhân tài).",
    context: "Vận hành hơn 1.300 năm tại Trung Quốc (từ thời Tùy 605 đến năm 1905) và tại Việt Nam (1075–1919), phá vỡ thế độc quyền huyết thống quý tộc để mở đường thăng tiến qua học vấn.",
    related: ["进士 (Tiến sĩ)", "状元 (Trạng nguyên)", "八股文 (Bát cổ văn)"],
    mnemonic: "Phân loại các môn học (科) để tuyển chọn nâng đỡ nhân tài (举).",
    examples: [
      { zh: "科举制度始于隋朝，完善于唐宋时期。", pinyin: "Kējǔ zhìdù shǐ yú Suícháo, wánshàn yú Táng-Sòng shíqī.", en: "The imperial examination system began in the Sui Dynasty and matured during the Tang and Song.", vi: "Chế độ Khoa cử bắt đầu từ thời Tùy và hoàn thiện vào thời Đường – Tống." },
      { zh: "清朝于1905年正式废除了科举制。", pinyin: "Qīngcháo yú 1905 nián zhèngshì fèichú le kējǔzhì.", en: "The Qing Dynasty formally abolished the imperial examination system in 1905.", vi: "Triều Thanh chính thức bãi bỏ chế độ khoa cử vào năm 1905." },
      { zh: "科举文化深刻影响了东亚社会对读书与学历的重视。", pinyin: "Kējǔ wénhuà shēnkè yǐngxiǎng le Dōngyà shèhuì duì dúshū yǔ xuélì de zhòngshì.", en: "Examination culture deeply influenced East Asian societies' emphasis on education and credentials.", vi: "Văn hóa khoa cử đã ảnh hưởng sâu sắc tới thái độ coi trọng việc học và bằng cấp ở Đông Á." }
    ]
  },
  {
    id: "sichouzhilu",
    hanzi: "丝绸之路",
    traditional: "絲綢之路",
    pinyin: "Sīchóu Zhī Lù",
    level: "HSK 5-6",
    pos: "n. phrase",
    english: "The Silk Road (overland and maritime Eurasian trade routes)",
    vietnamese: "Con đường Tơ lụa (Hán-Việt: Ty trù chi lộ)",
    radical: "纟 (mịch – sợi tơ)",
    components: "丝 (tơ tằm) + 绸 (lụa dệt – bộ 纟 + 周) + 之 (của) + 路 (đường đi – bộ 足 + 各).",
    context: "Thuật ngữ do nhà địa lý Đức Ferdinand von Richthofen đặt năm 1877; không phải một con đường đơn nhất mà là mạng lưới thương mại – tôn giáo – công nghệ nối Trường An/Quảng Châu qua Trung Á và Ấn Độ Dương.",
    related: ["海上丝绸之路 (Con đường Tơ lụa trên biển)", "张骞通西域 (Trương Khiên đi sứ Tây Vực)", "敦煌莫高窟 (Hang Mạc Cao Đôn Hoàng)"],
    mnemonic: "Những sợi tơ (纟) lụa óng ả dệt nên con đường bước chân (⻊) kết nối Á–Âu.",
    examples: [
      { zh: "丝绸之路不仅运送商品，也促进了宗教与科学传播。", pinyin: "Sīchóu Zhī Lù bùjǐn yùnsòng shāngpǐn, yě cùjìn le zōngjiào yǔ kēxué chuánbō.", en: "The Silk Road transported not only goods, but also facilitated the spread of religion and science.", vi: "Con đường Tơ lụa vừa vận chuyển hàng hóa vừa thúc đẩy truyền bá tôn giáo và khoa học." },
      { zh: "西安是陆上丝绸之路的东端起点。", pinyin: "Xī'ān shì lùshàng Sīchóu Zhī Lù de dōngduān qǐdiǎn.", en: "Xi'an was the eastern starting point of the overland Silk Road.", vi: "Tây An là điểm khởi đầu phía Đông của Con đường Tơ lụa trên bộ." },
      { zh: "古代越南港口也曾融入海上丝绸之路的贸易网络。", pinyin: "Gǔdài Yuènán gǎngkǒu yě céng róngrù Hǎishàng Sīchóu Zhī Lù de màoyì wǎngluò.", en: "Ancient Vietnamese ports also integrated into the trade networks of the Maritime Silk Road.", vi: "Các thương cảng cổ Việt Nam cũng từng hòa nhập vào mạng lưới thương mại của Con đường Tơ lụa trên biển." }
    ]
  },
  {
    id: "shuimohua",
    hanzi: "水墨画",
    traditional: "水墨畫",
    pinyin: "shuǐmòhuà",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Chinese ink-wash painting",
    vietnamese: "Tranh thủy mặc (Hán-Việt: Thủy mặc họa)",
    radical: "水 + 土 (mực) + 田",
    components: "水 (nước) + 墨 (trên 黑 đen, dưới 土 đất -> mực mài từ muội than và keo) + 画 (vẽ ruộng vườn đường nét).",
    context: "Loại hình hội họa mang tinh thần văn nhân Đạo gia và Thiền tông, dùng sắc độ mực đen pha nước để truyền tải 'Khí vận sinh động'.",
    related: ["文人画 (Văn nhân họa)", "留白 (Lưu bạch / khoảng trống)", "山水画 (Tranh sơn thủy)"],
    mnemonic: "Hòa nước (水) cùng thỏi mực đen từ đất than (墨) để vẽ lên cảnh giới tâm hồn (画).",
    examples: [
      { zh: "中国水墨画讲究“墨分五色”的层次变化。", pinyin: "Zhōngguó shuǐmòhuà jiǎngjiu 'mò fēn wǔ sè' de céngcì biànhuà.", en: "Chinese ink-wash painting emphasizes tonal gradations known as 'five shades of ink'.", vi: "Tranh thủy mặc Trung Quốc chú trọng biến hóa sắc độ 'mực chia năm màu'." },
      { zh: "宋代山水画将水墨画艺术推向高峰。", pinyin: "Sòngdài shānshuǐhuà jiāng shuǐmòhuà yìshù tuīxiàng gāofēng.", en: "Song-dynasty landscape painting pushed ink-wash art to a peak.", vi: "Tranh sơn thủy đời Tống đã đưa nghệ thuật thủy mặc lên đỉnh cao." },
      { zh: "欣赏水墨画不仅要看笔墨，还要体味留白的意境。", pinyin: "Xīnshǎng shuǐmòhuà bùjǐn yào kàn bǐmò, hái yào tǐwèi liúbái de yìjìng.", en: "Appreciating ink-wash painting requires savoring both brushwork and the mood of empty space.", vi: "Thưởng thức tranh thủy mặc cần quan sát cả bút mực lẫn ý cảnh của khoảng trống." }
    ]
  },
  {
    id: "liubai",
    hanzi: "留白",
    traditional: "留白",
    pinyin: "liúbái",
    level: "Advanced / Academic Chinese",
    pos: "n. / v.",
    english: "Intentional negative/empty space in painting, writing, or design",
    vietnamese: "Lưu bạch (nghệ thuật chừa khoảng trắng tạo dư vị tưởng tượng)",
    radical: "田 (điền) + 白 (bạch)",
    components: "留 (giữ lại) + 白 (trắng, khoảng giấy không vẽ mực).",
    context: "Khái niệm mỹ học cốt lõi trong hội họa thủy mặc, thư pháp, thiết kế hiện đại và thi ca Trung Hoa ('Ý tại ngôn ngoại').",
    related: ["计白当黑 (tính khoảng trắng như nét mực đen)", "意境 (ý cảnh)", "极简主义 (tối giản)"],
    mnemonic: "Cố ý giữ lại (留) phần giấy trắng nguyên sơ (白) để trí tưởng tượng bay bổng.",
    examples: [
      { zh: "南宋画家马远常利用大面积留白表现江面辽阔。", pinyin: "Nán-Sòng huàjiā Mǎ Yuǎn cháng lìyòng dà miànjī liúbái biǎoxiàn jiāngmiàn liáokuò.", en: "Southern Song painter Ma Yuan often used large expanses of blank space to suggest vast waters.", vi: "Họa sĩ Mã Viễn thời Nam Tống thường dùng mảng lưu bạch lớn để diễn tả mặt sông mênh mông." },
      { zh: "好的网页设计同样需要合理留白，避免视觉拥挤。", pinyin: "Hǎo de wǎngyè shèjì tóngyàng xūyào hélǐ liúbái, bìmiǎn shìjué yōngjǐ.", en: "Good web design likewise requires balanced whitespace to avoid visual clutter.", vi: "Thiết kế web tinh tế cũng cần khoảng lưu bạch hợp lý để tránh rối mắt." },
      { zh: "“留白”体现了道家“有无相生”的哲学观念。", pinyin: "'Liúbái' tǐxiàn le Dàojiā 'yǒu wú xiāngshēng' de zhéxué guānniàn.", en: "'Liubai' reflects the Daoist philosophical idea that presence and absence generate each other.", vi: "'Lưu bạch' thể hiện quan niệm triết học Đạo gia 'Hữu và Vô nương sinh'." }
    ]
  },
  {
    id: "shufa",
    hanzi: "书法",
    traditional: "書法",
    pinyin: "shūfǎ",
    level: "HSK 5-6",
    pos: "n.",
    english: "Calligraphy (art of brush writing)",
    vietnamese: "Thư pháp (Hán-Việt: Thư pháp)",
    radical: "乛 / 氵",
    components: "书 (Phồn thể 書: bàn tay cầm bút 聿 viết lên sổ sách 曰) + 法 (phương pháp, quy tắc).",
    context: "Một trong 'Tứ nghệ' văn nhân truyền thống (Cầm – Kỳ – Thi – Họa / Thư); phát triển qua 5 thể chữ: Triện, Lệ, Thảo, Hành, Khải.",
    related: ["文房四宝 (Văn phòng tứ bảo)", "楷书 (Khải thư)", "王羲之 (Vương Hi Chi)"],
    mnemonic: "Phương pháp (法) cầm bút lông viết chữ (书) tạo nên nghệ thuật Thư pháp.",
    examples: [
      { zh: "练习中国书法有助于培养耐心与专注力。", pinyin: "Liànxí Zhōngguó shūfǎ yǒuzhùyú péiyǎng nàixīn yǔ zhuānzhùlì.", en: "Practicing Chinese calligraphy helps cultivate patience and concentration.", vi: "Luyện tập thư pháp Trung Hoa giúp rèn luyện sự kiên nhẫn và tập trung." },
      { zh: "王羲之的《兰亭集序》被誉为“天下第一行书”。", pinyin: "Wáng Xīzhī de «Lántíng Jíxù» bèi yùwéi 'Tiānxià dì yī xíngshū'.", en: "Wang Xizhi's Preface to the Orchid Pavilion is acclaimed as the finest running-script calligraphy.", vi: "Lan Đình Tập Tự của Vương Hi Chi được tôn vinh là 'Thiên hạ đệ nhất hành thư'." },
      { zh: "汉字的象形结构为书法艺术提供了独特表现空间。", pinyin: "Hànzì de xiàngxíng jiégòu wèi shūfǎ yìshù tígōng le dútè biǎoxiàn kōngjiān.", en: "The pictographic structure of Chinese characters offers unique expressive space for calligraphy.", vi: "Cấu trúc tượng hình của chữ Hán mang lại không gian biểu đạt độc đáo cho nghệ thuật thư pháp." }
    ]
  },
  {
    id: "hanzi",
    hanzi: "汉字",
    traditional: "漢字",
    pinyin: "Hànzì",
    level: "HSK 1-2",
    pos: "n.",
    english: "Chinese characters (Han script)",
    vietnamese: "Chữ Hán / Hán tự (Hán-Việt: Hán tự)",
    radical: "氵 (thủy) + 宀 (miên)",
    components: "汉 (Phồn thể 漢: tên sông Hán Thủy 氵 rồi thành tên triều Hán) + 字 (đứa trẻ 子 dưới mái nhà 宀 -> chữ viết được sinh sản ghép nghĩa).",
    context: "Hệ thống văn tự ngữ tố (logographic) duy nhất còn sử dụng liên tục hơn 3.300 năm, cấu tạo theo 6 phép Lục thư (Tượng hình, Chỉ sự, Hội ý, Hình thanh, Chuyển chú, Giả tá).",
    related: ["简体字 (chữ Giản thể)", "繁体字 (chữ Phồn thể)", "甲骨文 (chữ Giáp Cốt)"],
    mnemonic: "Chữ viết phát triển rực rỡ từ lưu vực sông Hán / triều Hán (汉) sinh sôi dưới mái nhà tri thức (字).",
    examples: [
      { zh: "了解部首和偏旁能加快记忆汉字的速度。", pinyin: "Liǎojiě bùshǒu hé piānpáng néng jiākuài jìyì Hànzì de sùdù.", en: "Understanding radicals and components accelerates Chinese character memorization.", vi: "Hiểu bộ thủ và thiên bàng giúp tăng tốc độ ghi nhớ chữ Hán." },
      { zh: "越南曾借用汉字并在此基础上创造了喃字。", pinyin: "Yuènán céng jièyòng Hànzì bìng zài cǐ jīchǔ shàng chuàngzào le Nánzì.", en: "Vietnam once borrowed Chinese characters and created the Chữ Nôm script on that basis.", vi: "Việt Nam từng tiếp thu chữ Hán và sáng tạo ra chữ Nôm trên nền tảng đó." },
      { zh: "汉字的形声字占现代常用汉字的百分之八十以上。", pinyin: "Hànzì de xíngshēngzì zhàn xiàndài chángyòng Hànzì de bǎifēnzhī bāshí yǐshàng.", en: "Phono-semantic compounds account for over 80% of modern commonly used Chinese characters.", vi: "Chữ Hình thanh chiếm hơn 80% số lượng chữ Hán thông dụng hiện đại." }
    ]
  },
  {
    id: "hannom",
    hanzi: "喃字",
    traditional: "喃字",
    pinyin: "Nánzì",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Chữ Nôm (historical indigenous Vietnamese logographic script derived from Hanzi principles)",
    vietnamese: "Chữ Nôm (văn tự sáng tạo của người Việt dựa trên phép Lục thư chữ Hán)",
    radical: "口 (khẩu) + 宀 (miên)",
    components: "喃 (Hình thanh: bộ Khẩu 口 biểu ý ngôn ngữ nói + 南 Nam biểu âm, chỉ tiếng nói phương Nam) + 字 (chữ viết).",
    context: "Minh chứng tiêu biểu cho năng lực tiếp biến sáng tạo của văn hóa Việt Nam: dùng cấu trúc Hình thanh và Hội ý của chữ Hán để ghi lại tiếng nói thuần Việt.",
    related: ["汉越音 (âm Hán-Việt)", "阮攸《金云翘传》 (Truyện Kiều Nguyễn Du)", "越南汉喃研究院 (Viện Nghiên cứu Hán Nôm)"],
    mnemonic: "Lời nói qua miệng (口) của người phương Nam (南) được ghi thành văn tự riêng là Chữ Nôm (喃字).",
    examples: [
      { zh: "喃字是越南古代知识分子借用汉字构字法创造的民族文字。", pinyin: "Nánzì shì Yuènán gǔdài zhīshifènzǐ jièyòng Hànzì gòuzìfǎ chuàngzào de mínzú wénzì.", en: "Chữ Nôm was a national script created by ancient Vietnamese intellectuals using Hanzi character-formation principles.", vi: "Chữ Nôm là văn tự dân tộc do trí thức Việt Nam cổ đại sáng tạo bằng cách vận dụng phép cấu tạo chữ Hán." },
      { zh: "阮廌的《国音诗集》是现存最早的喃字诗集之一。", pinyin: "Ruǎn Zhì de «Guóyīn Shījí» shì xiàncún zuìzǎo de Nánzì shījí zhī yī.", en: "Nguyễn Trãi's 'National-Language Poetry Collection' is among the earliest extant Chữ Nôm poetry works.", vi: "Quốc âm thi tập của Nguyễn Trãi là một trong những tập thơ chữ Nôm cổ nhất còn lại." },
      { zh: "研究汉喃文献对理解中越文化交流史具有不可替代的价值。", pinyin: "Yánjiū Hàn-Nán wénxiàn duì lǐjiě Zhōng-Yuè wénhuà jiāoliúshǐ jùyǒu bùkě tìdài de jiàzhí.", en: "Studying Han-Nom texts holds irreplaceable value for understanding Sino-Vietnamese cultural exchange history.", vi: "Nghiên cứu thư tịch Hán-Nôm có giá trị không thể thay thế đối với lịch sử giao lưu văn hóa Trung – Việt." }
    ]
  },
  {
    id: "sanjiao",
    hanzi: "三教合一",
    traditional: "三教合一",
    pinyin: "Sānjiào Héyī",
    level: "Advanced / Academic Chinese",
    pos: "idiom",
    english: "Harmonious integration of the Three Teachings (Confucianism, Daoism, Buddhism)",
    vietnamese: "Tam giáo đồng nguyên / Tam giáo hợp nhất (Nho – Phật – Đạo)",
    radical: "一 + 攵 + 人",
    components: "三教 (ba giáo lý Nho, Thích, Đạo) + 合一 (dung hợp thành một thể bổ trợ).",
    context: "Cấu trúc tôn giáo – triết học chung của xã hội Trung Quốc từ Tống-Minh và Việt Nam thời Lý-Trần: Nho lo trị thế xã hội, Đạo dưỡng sinh thân tâm, Phật giải thoát tâm linh.",
    related: ["儒释道 (Nho – Thích – Đạo)", "宋明理学 (Lý học thời Tống-Minh)", "文化包容性 (tính bao dung văn hóa)"],
    mnemonic: "Ba dòng suối (三教) chảy vào cùng một biển đời sống tâm linh và đạo đức (合一).",
    examples: [
      { zh: "自宋代以来，“三教合一”逐渐成为民间普遍的文化观念。", pinyin: "Zì Sòngdài yǐlái, 'Sānjiào Héyī' zhújiàn chéngwéi mínjiān pǔbiàn de wénhuà guānniàn.", en: "Since the Song Dynasty, the harmony of the Three Teachings gradually became a widespread cultural view.", vi: "Từ đời Tống trở đi, 'Tam giáo hợp nhất' dần trở thành quan niệm văn hóa phổ biến trong dân gian." },
      { zh: "传统文人常常外呈儒家入世精神，内怀道佛出世情怀。", pinyin: "Chuántǒng wénrén chángcháng wài chéng Rújiā rùshì jīngshén, nèi huái Dào-Fó chūshì qínghuái.", en: "Traditional scholars often displayed Confucian engagement outwardly while holding Daoist-Buddhist detachment inwardly.", vi: "Văn nhân truyền thống thường bên ngoài mang tinh thần nhập thế Nho gia, bên trong giữ tâm cảnh thanh thoát Phật-Đạo." },
      { zh: "越南李陈时期同样呈现出“三教同源”的历史特征。", pinyin: "Yuènán Lǐ-Chén shíqī tóngyàng chéngxiàn chū 'Sānjiào Tóngyuán' de lìshǐ tèzhēng.", en: "Vietnam's Ly and Tran periods similarly exhibited the historical feature of 'Three Teachings sharing one origin'.", vi: "Thời Lý – Trần ở Việt Nam cũng thể hiện rõ đặc trưng lịch sử 'Tam giáo đồng nguyên'." }
    ]
  },
  {
    id: "siheyuan",
    hanzi: "四合院",
    traditional: "四合院",
    pinyin: "sìhéyuàn",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Siheyuan (traditional Chinese courtyard residence)",
    vietnamese: "Tứ Hợp Viện (nhà sân trong bốn mặt khép kín truyền thống Bắc Bộ)",
    radical: "囗 (vi – bao quanh) + 阝",
    components: "四 (bốn phía Đông-Tây-Nam-Bắc) + 合 (quây khép kín) + 院 (sân nhà có tường bao).",
    context: "Phản ánh trực tiếp trật tự Nho gia và khí hậu Hoa Bắc: Chính phòng hướng Nam dành cho bậc trưởng thượng, Sương phòng Đông-Tây cho con cháu, tường ngoài kín giữ ấm và bảo vệ riêng tư.",
    related: ["胡同 (Hồ Đồng)", "京派文化 (Văn hóa Kinh phái)", "坐北朝南 (Tọa Bắc triều Nam)"],
    mnemonic: "Bốn (四) dãy nhà khép kín (合) quanh một mảnh sân vuông (院).",
    examples: [
      { zh: "北京传统四合院体现了家族长幼有序的伦理观念。", pinyin: "Běijīng chuántǒng sìhéyuàn tǐxiàn le jiāzú zhǎngyòu yǒuxù de lúnlǐ guānniàn.", en: "Traditional Beijing Siheyuan courtyards embody ethical concepts of generational order within the family.", vi: "Tứ Hợp Viện truyền thống Bắc Kinh thể hiện quan niệm luân lý trên dưới có thứ bậc trong gia tộc." },
      { zh: "走进北京胡同，依然能看到保存完好的四合院。", pinyin: "Zǒujìn Běijīng hútòng, yīrán néng kàndào bǎocún wánhǎo de sìhéyuàn.", en: "Walking into Beijing's hutongs, one can still see well-preserved courtyard houses.", vi: "Bước vào ngõ Hồ Đồng Bắc Kinh, ta vẫn có thể bắt gặp những ngôi Tứ Hợp Viện được bảo tồn nguyên vẹn." },
      { zh: "封闭的院墙既有助于抵御北方寒风，也增强了家族凝聚力。", pinyin: "Fēngbì de yuànqiáng jì yǒuzhùyú dǐyù běifāng hánfēng, yě zēngqiáng le jiāzú níngjùlì.", en: "Enclosed courtyard walls both shield against northern cold winds and strengthen family cohesion.", vi: "Bức tường bao khép kín vừa giúp chắn gió lạnh phương Bắc, vừa tăng tính gắn kết gia đình." }
    ]
  },
  {
    id: "jingpai",
    hanzi: "京派",
    traditional: "京派",
    pinyin: "Jīngpài",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Beijing cultural school / style (imperial dignity, literary classicism)",
    vietnamese: "Kinh phái (phong cách văn hóa – văn học Bắc Kinh)",
    radical: "亠 + 氵",
    components: "京 (Tượng hình cổ: lầu cao trên gò đồi -> kinh đô Bắc Kinh) + 派 (nhánh sông -> trường phái).",
    context: "Đối lập với Hải Phái (Thượng Hải) từ thập niên 1920–1930: Kinh phái mang cốt cách trầm ổn, gắn với di sản đế đô, Nho-Đạo và giới học giả Bắc Đại – Thanh Hoa.",
    related: ["海派 (Hải phái)", "京都文化 (văn hóa cố đô)", "老舍 (Lão Xá – đại diện văn học Kinh vị)"],
    mnemonic: "Dòng chảy (氵 trong 派) mang khí chất lâu đài kinh đô (京).",
    examples: [
      { zh: "京派文化深植于北京数百年的古都历史之中。", pinyin: "Jīngpài wénhuà shēnzhí yú Běijīng shùbǎi nián de gǔdū lìshǐ zhī zhōng.", en: "Beijing-school culture is deeply rooted in the city's centuries-long history as an ancient capital.", vi: "Văn hóa Kinh phái bén rễ sâu trong lịch sử cố đô hàng trăm năm của Bắc Kinh." },
      { zh: "二十世纪三十年代，京派与海派作家曾展开激烈的文学论争。", pinyin: "Èrshí shìjì sānshí niándài, Jīngpài yǔ Hǎipài zuòjiā céng zhǎnkāi jīliè de wénxué lùnzhēng.", en: "In the 1930s, Beijing-school and Shanghai-school writers engaged in intense literary debates.", vi: "Thập niên 1930, các nhà văn Kinh phái và Hải phái từng có những cuộc tranh luận văn học sôi nổi." },
      { zh: "京派学者往往注重学术底蕴与传统礼仪。", pinyin: "Jīngpài xuézhě wǎngwǎng zhùzhòng xuéshù dǐyùn yǔ chuántǒng lǐyí.", en: "Beijing-school scholars often emphasize academic depth and traditional etiquette.", vi: "Học giả Kinh phái thường chú trọng chiều sâu học thuật và lễ nghi truyền thống." }
    ]
  },
  {
    id: "haipai",
    hanzi: "海派",
    traditional: "海派",
    pinyin: "Hǎipài",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Shanghai cultural style (cosmopolitan, commercial, East-West hybrid)",
    vietnamese: "Hải phái (phong cách văn hóa Thượng Hải dung hợp Đông – Tây)",
    radical: "氵 (thủy)",
    components: "海 (biển cả Thượng Hải đón gió thương mại) + 派 (trường phái).",
    context: "Hình thành từ giữa thế kỷ XIX tại Thượng Hải; nhấn mạnh tính hiện đại, khế ước thương mại, tinh tế đô thị và giao thoa văn hóa toàn cầu.",
    related: ["外滩 (Bến Thượng Hải / Ngoại Than)", "石库门 (Thạch Khố Môn)", "契约精神 (tinh thần hợp đồng)"],
    mnemonic: "Dòng chảy (派) mở ra biển lớn quốc tế (海) đặc trưng cho văn hóa Thượng Hải.",
    examples: [
      { zh: "海派文化融合了江南传统底色与现代国际商业要素。", pinyin: "Hǎipài wénhuà rónghé le Jiāngnán chuántǒng dǐsè yǔ xiàndài guójì shāngyè yàosù.", en: "Haipai culture blends Jiangnan traditional foundations with modern international commercial elements.", vi: "Văn hóa Hải phái dung hợp nền tảng truyền thống Giang Nam với các yếu tố thương mại quốc tế hiện đại." },
      { zh: "上海的石库门建筑是海派居住文化的典型代表。", pinyin: "Shànghǎi de shíkùmén jiànzhù shì Hǎipài jūzhù wénhuà de diǎnxíng dàibiǎo.", en: "Shanghai's Shikumen buildings are a classic representation of Haipai residential culture.", vi: "Kiến trúc Thạch Khố Môn của Thượng Hải là đại diện điển hình của văn hóa cư trú Hải phái." },
      { zh: "在海派商业环境中，专业效率与边界感尤为重要。", pinyin: "Zài Hǎipài shāngyè huánjìng zhōng, zhuānyè xiàolǜ yǔ biānjiègǎn yóuwéi zhòngyào.", en: "In a Haipai business environment, professional efficiency and clear boundaries are especially important.", vi: "Trong môi trường kinh doanh Hải phái, hiệu suất chuyên nghiệp và ranh giới rõ ràng đặc biệt quan trọng." }
    ]
  },
  {
    id: "jiaguwen",
    hanzi: "甲骨文",
    traditional: "甲骨文",
    pinyin: "jiǎgǔwén",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Oracle bone script (Shang Dynasty inscriptions)",
    vietnamese: "Chữ Giáp Cốt (chữ khắc trên mai rùa và xương thú thời nhà Thương)",
    radical: "田 / 骨 / 文",
    components: "甲 (mai rùa) + 骨 (xương vai bò) + 文 (văn tự khắc vẽ).",
    context: "Được Vương Ý Vinh phát hiện nhận diện năm 1899 tại Bắc Kinh (từ An Dương Ân Khư); bằng chứng trực tiếp xác thực lịch sử triều đại nhà Thương.",
    related: ["殷墟 (Ân Khư)", "金文 (Kim văn trên đồ đồng)", "六书 (Lục thư)"],
    mnemonic: "Văn tự (文) khắc trên mai rùa (甲) và xương thú (骨) để ghi lời chiêm bốc thời Thương.",
    examples: [
      { zh: "甲骨文是目前发现的中国最早的成熟文字系统。", pinyin: "Jiǎgǔwén shì mùqián fāxiàn de Zhōngguó zuìzǎo de chéngshú wénzì xìtǒng.", en: "Oracle bone script is the earliest mature Chinese writing system discovered to date.", vi: "Chữ Giáp Cốt là hệ thống văn tự hoàn chỉnh cổ nhất của Trung Quốc được phát hiện đến nay." },
      { zh: "殷墟甲骨文证实了《史记》中商王世系的基本可靠性。", pinyin: "Yīnxū jiǎgǔwén zhèngshí le «Shǐjì» zhōng Shāngwáng shìxì de jīběn kěkàoxìng.", en: "Yinxu oracle bones confirmed the basic reliability of the Shang royal genealogy in the Records of the Grand Historian.", vi: "Giáp Cốt văn Ân Khư đã chứng thực độ tin cậy căn bản của phả hệ vua Thương trong Sử ký." },
      { zh: "许多现代汉字的构字逻辑仍能追溯到甲骨文时期。", pinyin: "Xǔduō xiàndài Hànzì de gòuzì luóji réng néng zhuīsù dào jiǎgǔwén shíqī.", en: "The structural logic of many modern Chinese characters can still be traced back to the oracle bone era.", vi: "Logic cấu tạo của nhiều chữ Hán hiện đại vẫn có thể truy nguyên về thời kỳ chữ Giáp Cốt." }
    ]
  },
  {
    id: "taiji",
    hanzi: "太极",
    traditional: "太極",
    pinyin: "Tàijí",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Taiji (Supreme Ultimate – source of Yin and Yang)",
    vietnamese: "Thái Cực (Hán-Việt: Thái Cực)",
    radical: "大 + 木",
    components: "太 (tột bậc, nguyên sơ) + 极 (Phồn thể 極: cây xà nóc mái nhà -> điểm đỉnh cao nhất).",
    context: "Xuất hiện trong 《周易·系辞》 ('Dịch hữu Thái Cực, thị sinh Lưỡng Nghi') và được Chu Đôn Di đời Bắc Tống phát triển thành 《太极图说》; cũng là tên môn võ dưỡng sinh Thái Cực Quyền.",
    related: ["两仪 (Lưỡng nghi – Âm Dương)", "太极拳 (Thái cực quyền)", "无极而太极 (Vô cực nhi Thái cực)"],
    mnemonic: "Cây xà nóc tối cao (极) vượt trên hết thảy (太) là điểm khởi nguyên sinh ra Âm Dương.",
    examples: [
      { zh: "《周易》说：“易有太极，是生两仪。”", pinyin: "«Zhōuyì» shuō: 'Yì yǒu Tàijí, shì shēng Liǎngyí.'", en: "The I Ching states: 'In Change there is the Supreme Ultimate, which generates the Two Modes (Yin and Yang).'", vi: "Chu Dịch viết: 'Dịch có Thái Cực, Thái Cực sinh Lưỡng Nghi.'" },
      { zh: "太极拳将哲学上的以柔克刚融入了身体运动中。", pinyin: "Tàijíquán jiāng zhéxué shàng de yǐ róu kè gāng róngrù le shēntǐ yùndòng zhōng.", en: "Tai Chi integrates the philosophical principle of softness overcoming hardness into bodily movement.", vi: "Thái Cực Quyền đưa nguyên lý triết học lấy nhu thắng cương vào vận động cơ thể." },
      { zh: "北宋周敦颐的《太极图说》开启了宋代理学宇宙论。", pinyin: "Běi-Sòng Zhōu Dūnyí de «Tàijí Túshuō» kāiqǐ le Sòngdài Lǐxué yǔzhòulùn.", en: "Northern Song philosopher Zhou Dunyi's 'Explanation of the Diagram of the Supreme Ultimate' inaugurated Song Neo-Confucian cosmology.", vi: "Thái Cực Đồ Thuyết của Chu Đôn Di thời Bắc Tống đã mở đầu vũ trụ luận Lý học đời Tống." }
    ]
  },
  {
    id: "qi",
    hanzi: "气",
    traditional: "氣",
    pinyin: "qì",
    level: "HSK 3-4",
    pos: "n.",
    english: "Air, breath, weather; (classical philosophy/TCM) vital energy or psychophysical stuff",
    vietnamese: "Khí (không khí, hơi thở; trong triết học & Đông y là năng lượng sống / nguyên khí)",
    radical: "气 (khí, bộ 84)",
    components: "Giản thể 气 là Tượng hình ba làn mây/hơi bay lên. Phồn thể 氣 thêm chữ 米 (gạo) bên dưới: hơi ấm bốc lên từ cơm gạo nuôi dưỡng sinh mệnh.",
    context: "Khái niệm bắc cầu giữa vật chất và tinh thần trong triết học Trung Hoa, Trung y (Tinh–Khí–Thần) và phong thủy.",
    related: ["气韵生动 (khí vận sinh động)", "正气 (chính khí)", "天气 (thời tiết)"],
    mnemonic: "Ba làn hơi bốc lên (气) từ hạt gạo nuôi sống thân thể (米 trong phồn thể 氣) tạo ra Khí.",
    examples: [
      { zh: "北京秋天的天气非常凉爽。", pinyin: "Běijīng qiūtiān de tiānqì fēicháng liángshuǎng.", en: "Beijing's autumn weather is very crisp and cool.", vi: "Thời tiết mùa thu ở Bắc Kinh vô cùng mát mẻ." },
      { zh: "中医常说“气血充足”是身体健康的基础。", pinyin: "Zhōngyī cháng shuō 'qìxuè chōngzú' shì shēntǐ jiànkāng de jīchǔ.", en: "TCM often says that 'abundant qi and blood' is the foundation of physical health.", vi: "Đông y thường nói 'khí huyết đầy đủ' là nền tảng của sức khỏe." },
      { zh: "南朝谢赫将“气韵生动”列为中国画六法之首。", pinyin: "Náncháo Xiè Hè jiāng 'qìyùn shēngdòng' liè wéi Zhōngguóhuà liùfǎ zhī shǒu.", en: "Southern Dynasties critic Xie He ranked 'vitality and resonance of qi' first among the Six Principles of Chinese painting.", vi: "Tạ Hách thời Nam Triều xếp 'Khí vận sinh động' đứng đầu trong Lục pháp hội họa Trung Quốc." }
    ]
  },
  {
    id: "xinyong",
    hanzi: "信用",
    traditional: "信用",
    pinyin: "xìnyòng",
    level: "HSK 3-4",
    pos: "n.",
    english: "Trustworthiness; commercial credit; keeping one's word",
    vietnamese: "Tín dụng / Chữ tín (Hán-Việt: Tín dụng)",
    radical: "亻 (nhân đứng) + 用 (dụng)",
    components: "信 (Hội ý: con người 亻 đứng cạnh lời nói 言 -> người nói lời chân thực giữ cam kết) + 用 (sử dụng, phát huy tác dụng).",
    context: "Trong cả đạo đức Nho gia ('Nhân nhi vô tín, bất tri kỳ khả' – Người không chữ tín chẳng làm được gì) lẫn tài chính hiện đại (thẻ tín dụng, điểm tín nhiệm thương mại).",
    related: ["信用卡 (thẻ tín dụng)", "商业信誉 (uy tín thương mại)", "诚信 (thành tín)"],
    mnemonic: "Lời nói (言) của một con người (亻) giữ đúng cam kết mới có giá trị sử dụng lâu dài (用).",
    examples: [
      { zh: "在国际贸易中，信用是长期合作的基石。", pinyin: "Zài guójì màoyì zhōng, xìnyòng shì chángqī hézuò de jīshí.", en: "In international trade, trustworthiness/credit is the foundation of long-term cooperation.", vi: "Trong thương mại quốc tế, chữ tín là viên đá tảng của hợp tác lâu dài." },
      { zh: "银行根据企业的历史交易记录评估其信用等级。", pinyin: "Yínháng gēnjù qǐyè de lìshǐ jiāoyì jìlù pínggū qí xìnyòng děngjí.", en: "Banks evaluate an enterprise's credit rating based on its historical transaction records.", vi: "Ngân hàng đánh giá xếp hạng tín dụng của doanh nghiệp dựa trên lịch sử giao dịch." },
      { zh: "古代晋商依靠严密的“信用”体系发展出遍布全国的票号。", pinyin: "Gǔdài Jìnshāng yīkào yánmì de 'xìnyòng' tǐxì fāzhǎn chū biànbù quánguó de piàohào.", en: "Historical Shanxi merchants built nationwide remittance banks relying on strict trustworthiness systems.", vi: "Tấn thương cổ đại dựa vào hệ thống chữ tín chặt chẽ để phát triển mạng lưới ngân phiếu toàn quốc." }
    ]
  },
  {
    id: "tangshi",
    hanzi: "唐诗",
    traditional: "唐詩",
    pinyin: "Tángshī",
    level: "HSK 5-6",
    pos: "n.",
    english: "Tang Dynasty poetry",
    vietnamese: "Đường thi / Thơ Đường (Hán-Việt: Đường thi)",
    radical: "广 + 言 (ngôn)",
    components: "唐 (triều đại nhà Đường) + 诗 (Hình thanh: bộ Ngôn 讠 biểu ý lời nói/văn chương + 寺 tự biểu âm và gợi sự chuẩn mực).",
    context: "Đỉnh cao thi ca cổ điển Trung Hoa với các thể Ngũ ngôn/Thất ngôn Tuyệt cú, Luật thi; từng là tài liệu học tập chuẩn mực cho sĩ tử Việt Nam nhiều thế kỷ.",
    related: ["李白与杜甫 (Lý Bạch và Đỗ Phủ)", "唐诗三百首 (Đường thi tam bách thủ)", "格律诗 (thơ cách luật)"],
    mnemonic: "Lời văn (讠 trong 诗) trang nhã chuẩn mực thời hoàng kim nhà Đường (唐).",
    examples: [
      { zh: "《唐诗三百首》是了解中国古典诗歌的重要入门读物。", pinyin: "«Tángshī Sānbǎi Shǒu» shì liǎojiě Zhōngguó gǔdiǎn shīgē de zhòngyào rùmén dúwù.", en: "'Three Hundred Tang Poems' is an essential introductory anthology to classical Chinese poetry.", vi: "Đường Thi Tam Bách Thủ là tác phẩm nhập môn quan trọng để tìm hiểu thơ cổ điển Trung Quốc." },
      { zh: "盛唐诗坛既产生了浪漫飘逸的李白，也孕育了沉郁顿挫的杜甫。", pinyin: "Shèng-Táng shītán jì chǎnshēng le làngmàn piāoyì de Lǐ Bái, yě yùnyù le chényù dùncuò de Dù Fǔ.", en: "The High Tang poetic scene produced both the romantic Li Bai and the deeply empathetic Du Fu.", vi: "Thi đàn Thịnh Đường vừa sản sinh Lý Bạch lãng mạn phóng khoáng, vừa hun đúc Đỗ Phủ trầm uất sâu sắc." },
      { zh: "学习唐诗有助于提高中文语感与古文阅读能力。", pinyin: "Xuéxí Tángshī yǒuzhùyú tígāo Zhōngwén yǔgǎn yǔ gǔwén yuèdú nénglì.", en: "Studying Tang poetry helps improve linguistic intuition and classical Chinese reading ability.", vi: "Học thơ Đường giúp nâng cao cảm quan Hán ngữ và năng lực đọc hiểu văn ngôn." }
    ]
  },
  {
    id: "xiaoshun",
    hanzi: "孝顺",
    traditional: "孝順",
    pinyin: "xiàoshùn",
    level: "HSK 3-4",
    pos: "v. / adj.",
    english: "Filial piety; respectful and caring toward one's parents and elders",
    vietnamese: "Hiếu thuận (Hán-Việt: Hiếu thuận)",
    radical: "耂 (lão – người già) + 页 (hiệt)",
    components: "孝 (Hội ý: bên trên là chữ Lão 老 giản lược chỉ người già, bên dưới là chữ Tử 子 nâng đỡ bậc cha mẹ) + 顺 (thuận dòng chảy 川 về đầu 页 -> hòa thuận, lắng nghe).",
    context: "'Bách thiện hiếu vi tiên' (Trong trăm điều thiện, chữ Hiếu đứng đầu); tuy nhiên Khổng Tử nhấn mạnh Hiếu không phải phục tùng mù quáng mà cần can gián nhẹ nhàng khi cha mẹ sai ('Kỷ gián').",
    related: ["百善孝为先 (trăm điều thiện hiếu đứng đầu)", "孝道 (đạo hiếu)", "尊老敬老 (kính trọng người già)"],
    mnemonic: "Con cái (子) cõng nâng người cha già (耂) và thuận hòa lắng nghe (顺) chính là Hiếu thuận.",
    examples: [
      { zh: "“孝”字的字形生动地表现了子女扶持长辈的画面。", pinyin: "'Xiào' zì de zìxíng shēngdòng de biǎoxiàn le zǐnǚ fúchí zhǎngbèi de huàmiàn.", en: "The form of the character 'xiao' vividly depicts children supporting their elders.", vi: "Hình tự chữ 'Hiếu' miêu tả sinh động cảnh con cái nâng đỡ bậc trưởng bối." },
      { zh: "在东亚家庭观念中，孝顺长辈是重要的道德准则。", pinyin: "Zài Dōngyà jiātíng guānniàn zhōng, xiàoshùn zhǎngbèi shì zhòngyào de dàodé zhǔnzé.", en: "In East Asian family values, filial care for elders is a key moral norm.", vi: "Trong quan niệm gia đình Đông Á, hiếu thuận với bậc bề trên là chuẩn mực đạo đức quan trọng." },
      { zh: "随着现代社会发展，年轻人表达孝顺的方式也在不断变化。", pinyin: "Suízhe xiàndài shèhuì fāzhǎn, niánqīngrén biǎodá xiàoshùn de fāngshì yě zài búduàn biànhuà.", en: "With modern social development, young people's ways of expressing filial care are continually evolving.", vi: "Cùng với sự phát triển của xã hội hiện đại, cách người trẻ thể hiện lòng hiếu thuận cũng không ngừng thay đổi." }
    ]
  },
  {
    id: "wenming",
    hanzi: "文明",
    traditional: "文明",
    pinyin: "wénmíng",
    level: "HSK 3-4",
    pos: "n. / adj.",
    english: "Civilization; civilized; enlightened",
    vietnamese: "Văn minh (Hán-Việt: Văn minh)",
    radical: "文 (văn) + 日 (nhật)",
    components: "文 (văn tự, lễ nghi) + 明 (Hội ý: Mặt Trời 日 và Mặt Trăng 月 cùng chiếu sáng -> rạng rỡ, sáng suốt).",
    context: "Xuất hiện sớm trong 《周易》 ('Kiến long tại điền, thiên hạ văn minh'); trong khảo cổ học hiện đại chỉ xã hội có đô thị, luyện kim đồng/sắt, chữ viết và phân tầng nhà nước.",
    related: ["中华文明 (Văn minh Trung Hoa)", "物质文明与精神文明 (văn minh vật chất và tinh thần)", "文明互鉴 (học hỏi lẫn nhau giữa các nền văn minh)"],
    mnemonic: "Vẻ đẹp tri thức chữ nghĩa (文) tỏa sáng như Mặt Trời và Mặt Trăng (明) tạo nên Văn minh.",
    examples: [
      { zh: "良渚古城遗址实证了中华五千多年文明史。", pinyin: "Liángzhǔ gǔchéng yízhǐ shízhèng le Zhōnghuá wǔqiān duō nián wénmíngshǐ.", en: "The Archaeological Ruins of Liangzhu City provide physical evidence of over 5,000 years of Chinese civilization.", vi: "Di chỉ thành cổ Lương Chử là vật chứng cho lịch sử hơn 5.000 năm của văn minh Trung Hoa." },
      { zh: "黄河流域与长江流域共同孕育了早期中华文明。", pinyin: "Huánghé liúyù yǔ Chángjiāng liúyù gòngtóng yùnyù le zǎoqī Zhōnghuá wénmíng.", en: "The Yellow River and Yangtze River basins jointly nurtured early Chinese civilization.", vi: "Lưu vực Hoàng Hà và lưu vực Trường Giang đã cùng nuôi dưỡng văn minh Trung Hoa sơ khai." },
      { zh: "不同文明之间的交流互鉴推动了人类进步。", pinyin: "Bùtóng wénmíng zhījiān de jiāoliú hùjiàn tuīdòng le rénlèi jìnbù.", en: "Exchange and mutual learning among different civilizations drive human progress.", vi: "Sự giao lưu và học hỏi lẫn nhau giữa các nền văn minh thúc đẩy tiến bộ nhân loại." }
    ]
  },
  {
    id: "chadao",
    hanzi: "茶道",
    traditional: "茶道",
    pinyin: "chádào",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Way of Tea (tea philosophy and aesthetics)",
    vietnamese: "Trà đạo (triết lý sống và nghệ thuật thưởng trà)",
    radical: "艹 + 辶",
    components: "茶 (lá trà) + 道 (con đường / triết lý sống).",
    context: "Vượt lên kỹ thuật pha nước ngon ('Trà nghệ' 茶艺), đây là sự tu tâm thông qua uống trà, kết hợp tĩnh tâm của Thiền và thuận tự nhiên của Đạo gia.",
    related: ["茶艺 (Trà nghệ)", "茶经 (Trà Kinh – Lục Vũ)", "紫砂壶 (Ấm Tử Sa)"],
    mnemonic: "Thông qua tách trà mộc mạc (茶) để chiêm nghiệm con đường đạo lý tự nhiên (道).",
    examples: [
      { zh: "中国茶道讲究“和、敬、清、寂”的精神境界。", pinyin: "Zhōngguó chádào jiǎngjiu 'hé, jìng, qīng, jì' de jīngshén jìngjiè.", en: "The Chinese Way of Tea values a spiritual state of harmony, respect, purity, and tranquility.", vi: "Trà đạo Trung Quốc coi trọng cảnh giới tinh thần 'Hòa, Kính, Thanh, Tịch'." },
      { zh: "唐代陆羽的《茶经》被尊为茶道史上的里程碑。", pinyin: "Tángdài Lù Yǔ de «Chájīng» bèi zūn wéi chádàoshǐ shàng de lǐchéngbēi.", en: "Tang scholar Lu Yu's 'Classic of Tea' is revered as a milestone in tea philosophy history.", vi: "Trà Kinh của Lục Vũ thời Đường được tôn vinh là cột mốc trong lịch sử trà đạo." },
      { zh: "如今许多年轻人通过学习茶道来缓解都市生活的焦虑。", pinyin: "Rújīn xǔduō niánqīngrén tōngguò xuéxí chádào lái huǎnjiě dūshì shēnghuó de jiāolǜ.", en: "Today many young people learn tea art to ease the anxieties of urban life.", vi: "Ngày nay nhiều người trẻ tìm học trà đạo để giải tỏa áp lực nhịp sống đô thị." }
    ]
  },
  {
    id: "liyi",
    hanzi: "礼仪",
    traditional: "禮儀",
    pinyin: "lǐyí",
    level: "HSK 5-6",
    pos: "n.",
    english: "Etiquette; protocol; rites and ceremonies",
    vietnamese: "Lễ nghi (Hán-Việt: Lễ nghi)",
    radical: "礻 (thị) + 亻 (nhân)",
    components: "礼 (lễ phép kính trọng) + 仪 (Hình thanh: bộ Nhân 亻 biểu ý dáng vẻ con người + 义 nghi biểu âm -> nghi thức chuẩn mực).",
    context: "Bao quát từ nghi lễ gia tộc (hôn, tang, tế) đến nghi thức tiếp khách, bàn tiệc và ngoại giao kinh doanh.",
    related: ["商务礼仪 (nghi thức thương mại)", "社交礼仪 (lễ nghi xã giao)", "礼仪之邦 (đất nước lễ nghĩa)"],
    mnemonic: "Lòng tôn kính nội tâm (礼) thể hiện ra phong thái chuẩn mực của con người (亻 trong 仪) tạo thành Lễ nghi.",
    examples: [
      { zh: "了解东道国的商务礼仪有助于避免跨文化误解。", pinyin: "Liǎojiě dōngdàoguó de shāngwù lǐyí yǒuzhùyú bìmiǎn kuàwénhuà wùjiě.", en: "Understanding the host country's business etiquette helps avoid cross-cultural misunderstandings.", vi: "Hiểu nghi thức kinh doanh của nước sở tại giúp tránh hiểu lầm liên văn hóa." },
      { zh: "中国传统餐桌礼仪非常重视座次安排。", pinyin: "Zhōngguó chuántǒng cānzhuō lǐyí fēicháng zhòngshì zuòcì ānpái.", en: "Traditional Chinese dining etiquette places great importance on seating arrangement.", vi: "Lễ nghi bàn tiệc truyền thống Trung Quốc rất coi trọng thứ tự sắp xếp chỗ ngồi." },
      { zh: "递送名片时使用双手是一种常见的礼仪。", pinyin: "Dìsòng míngpiàn shí shǐyòng shuāngshǒu shì yì zhǒng chángjiàn de lǐyí.", en: "Presenting a business card with both hands is a common etiquette practice.", vi: "Trao danh thiếp bằng cả hai tay là một nghi thức phổ biến." }
    ]
  },
  {
    id: "yuanxiao",
    hanzi: "元宵节",
    traditional: "元宵節",
    pinyin: "Yuánxiāojié",
    level: "HSK 5-6",
    pos: "n.",
    english: "Lantern Festival (15th day of the first lunar month)",
    vietnamese: "Tết Nguyên Tiêu / Rằm tháng Giêng (Hán-Việt: Nguyên Tiêu tiết)",
    radical: "儿 + 宀 + 艹",
    components: "元 (đầu tiên, tháng Giêng) + 宵 (bộ Miên 宀 chỉ ban đêm) + 节 (lễ tiết) -> Đêm trăng tròn đầu tiên của năm mới.",
    context: "Khép lại chuỗi lễ hội Tết Nguyên Đán với phong tục ngắm đèn lồng, giải câu đố đèn (Đăng mê) và ăn bánh trôi nước (Nguyên tiêu miền Bắc / Thang viên miền Nam).",
    related: ["赏花灯 (ngắm hoa đăng)", "猜灯谜 (đoán câu đố đèn lồng)", "汤圆 (bánh trôi nước)"],
    mnemonic: "Đêm (宀 trong 宵) trăng tròn đầu tiên (元) khép lại lễ hội đầu xuân (节).",
    examples: [
      { zh: "元宵节是农历新年的第一个月圆之夜。", pinyin: "Yuánxiāojié shì nónglì xīnnián de dì yī gè yuèyuán zhī yè.", en: "The Lantern Festival is the first full-moon night of the lunar new year.", vi: "Tết Nguyên Tiêu là đêm trăng tròn đầu tiên của năm mới nông lịch." },
      { zh: "人们在元宵节常常赏花灯、猜灯谜并吃汤圆。", pinyin: "Rénmen zài Yuánxiāojié chángcháng shǎng huādēng, cāi dēngmí bìng chī tāngyuán.", en: "During the Lantern Festival, people often admire lanterns, solve lantern riddles, and eat glutinous rice balls.", vi: "Vào Tết Nguyên Tiêu mọi người thường ngắm đèn hoa, giải đố đèn lồng và ăn bánh trôi." },
      { zh: "在越南文化中，正月十五同样是重要的祈福日。", pinyin: "Zài Yuènán wénhuà zhōng, zhēngyuè shíwǔ tóngyàng shì zhòngyào de qífú rì.", en: "In Vietnamese culture, the fifteenth day of the first lunar month is likewise an important day for prayers and blessings.", vi: "Trong văn hóa Việt Nam, Rằm tháng Giêng cũng là ngày cầu phúc quan trọng." }
    ]
  },
  {
    id: "tuanyuan",
    hanzi: "团圆",
    traditional: "團圓",
    pinyin: "tuányuán",
    level: "HSK 5-6",
    pos: "v. / adj.",
    english: "To reunite (especially family); full and harmonious reunion",
    vietnamese: "Đoàn viên (gia đình sum họp tròn đầy)",
    radical: "囗 (vi – khung tròn bao quanh)",
    components: "Cả hai chữ 团 và 圆 đều dùng bộ Vi 囗 bao bên ngoài tạo hình ảnh vòng tròn sum vầy khép kín bên trong.",
    context: "Giá trị tâm lý cốt lõi xuyên suốt Tết Xuân Tiết, Tết Nguyên Tiêu và Tết Trung Thu.",
    related: ["团圆饭 (bữa cơm đoàn viên)", "花好月圆 (hoa đẹp trăng tròn)", "合家团聚 (cả nhà sum họp)"],
    mnemonic: "Hai vòng tròn khép kín (囗 + 囗) quây quần bên nhau tạo thành bức tranh Đoàn viên (团圆).",
    examples: [
      { zh: "中秋节的圆月象征着家庭的团圆。", pinyin: "Zhōngqiūjié de yuányuè xiàngzhēng zhe jiātíng de tuányuán.", en: "The full moon of the Mid-Autumn Festival symbolizes family reunion.", vi: "Vầng trăng tròn Tết Trung Thu tượng trưng cho sự đoàn viên gia đình." },
      { zh: "无论工作多忙，很多人过年都要赶回家吃团圆饭。", pinyin: "Wúlùn gōngzuò duō máng, hěn duō rén guònián dōu yào gǎn huíjiā chī tuányuánfàn.", en: "No matter how busy work is, many people rush home for the New Year reunion dinner.", vi: "Dù công việc bận rộn đến đâu, nhiều người dịp Tết vẫn vội vã về nhà ăn bữa cơm đoàn viên." },
      { zh: "这首古典诗词寄托了游子渴望与亲人团圆的情感。", pinyin: "Zhè shǒu gǔdiǎn shīcí jìtuō le yóuzǐ kěwàng yǔ qīnrén tuányuán de qínggǎn.", en: "This classical poem conveys a traveler's longing to reunite with loved ones.", vi: "Bài thơ cổ điển này gửi gắm nỗi khát khao đoàn tụ cùng người thân của kẻ lữ thứ." }
    ]
  },
  {
    id: "jiazhiguan",
    hanzi: "价值观",
    traditional: "價值觀",
    pinyin: "jiàzhíguān",
    level: "HSK 5-6",
    pos: "n.",
    english: "Values; value system; worldview regarding what is worthy",
    vietnamese: "Hệ giá trị / Giá trị quan (Hán-Việt: Giá trị quan)",
    radical: "亻 (nhân) + 见 (kiến)",
    components: "价值 (giá cả, giá trị – bộ Nhân 亻) + 观 (cách nhìn nhận sự vật – bộ Kiến 见).",
    context: "Dùng nhiều trong xã hội học nghiên cứu chuyển biến giá trị thế hệ trẻ Trung Quốc (từ tập thể truyền thống sang cân bằng cá nhân hiện đại).",
    related: ["消费观 (quan điểm tiêu dùng)", "义利观 (quan niệm Nghĩa – Lợi)", "代际差异 (khác biệt thế hệ)"],
    mnemonic: "Cách nhìn nhận (观) về những gì đáng quý đối với con người (亻 trong 价 và 值) gọi là Giá trị quan.",
    examples: [
      { zh: "不同代际之间往往存在价值观差异。", pinyin: "Bùtóng dàijì zhījiān wǎngwǎng cúnzài jiàzhíguān chāyì.", en: "Value differences often exist across different generations.", vi: "Giữa các thế hệ khác nhau thường tồn tại sự khác biệt về hệ giá trị." },
      { zh: "企业文化本质上反映了组织的共同价值观。", pinyin: "Qǐyè wénhuà běnzhì shàng fǎnyìng le zǔzhī de gòngtóng jiàzhíguān.", en: "Corporate culture essentially reflects an organization's shared values.", vi: "Văn hóa doanh nghiệp về bản chất phản ánh hệ giá trị chung của tổ chức." },
      { zh: "跨文化研究不应将某一群体的价值观简单贴标签。", pinyin: "Kuàwénhuà yánjiū bù yīng jiāng mǒu yì qúntǐ de jiàzhíguān jiǎndān tiē biāoqiān.", en: "Cross-cultural research should not simplistically stereotype any group's values.", vi: "Nghiên cứu liên văn hóa không nên dán nhãn đơn giản hệ giá trị của bất kỳ nhóm cộng đồng nào." }
    ]
  },
  {
    id: "wenyanwen",
    hanzi: "文言文",
    traditional: "文言文",
    pinyin: "wényánwén",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Classical Literary Chinese (written style prior to 1919 vernacular reform)",
    vietnamese: "Văn ngôn (ngôn ngữ viết cổ điển Đông Á)",
    radical: "文 (văn) + 言 (ngôn)",
    components: "文 (văn chương trau chuốt) + 言 (lời nói, ngôn ngữ) + 文 (văn bản).",
    context: "Ngôn ngữ viết chung của giới trí thức Trung Quốc, Việt Nam, Triều Tiên và Nhật Bản suốt hơn 2.000 năm cho đến Phong trào Ngũ Tứ (1919) khi Bạch thoại văn lên ngôi.",
    related: ["白话文 (Bạch thoại văn)", "五四运动 (Phong trào Ngũ Tứ)", "古汉语 (Hán ngữ cổ đại)"],
    mnemonic: "Văn bản (文) ghi lại bằng lời nói trau chuốt cổ điển (文言).",
    examples: [
      { zh: "阅读中国历史原典需要掌握一定的文言文基础。", pinyin: "Yuèdú Zhōngguó lìshǐ yuándiǎn xūyào zhǎngwò yídìng de wényánwén jīchǔ.", en: "Reading primary Chinese historical texts requires a foundation in Classical Chinese.", vi: "Đọc nguyên bản thư tịch lịch sử Trung Quốc đòi hỏi nắm vững nền tảng văn ngôn nhất định." },
      { zh: "越南阮朝之前的官方史书大多使用文言文撰写。", pinyin: "Yuènán Ruǎncháo zhīqián de guānfāng shǐshū dàduō shǐyòng wényánwén zhuànxiě.", en: "Most official Vietnamese historical chronicles before and during the Nguyen era were written in Classical Chinese.", vi: "Phần lớn chính sử Việt Nam trước thời hiện đại đều được viết bằng chữ Hán văn ngôn." },
      { zh: "1919年五四运动推动了白话文取代文言文成为现代书面语。", pinyin: "1919 nián Wǔsì Yùndòng tuīdòng le báihuàwén qǔdài wényánwén chéngwéi xiàndài shūmiànyǔ.", en: "The 1919 May Fourth Movement drove vernacular Chinese to replace Classical Chinese as the modern written standard.", vi: "Phong trào Ngũ Tứ năm 1919 đã thúc đẩy Bạch thoại văn thay thế Văn ngôn trở thành ngôn ngữ viết hiện đại." }
    ]
  },
  {
    id: "guochao",
    hanzi: "国潮",
    traditional: "國潮",
    pinyin: "Guócháo",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "China-chic / Domestic cultural-heritage consumer trend",
    vietnamese: "Quốc triều (trào lưu giới trẻ kết hợp di sản văn hóa bản địa vào thiết kế & tiêu dùng hiện đại)",
    radical: "囗 (vi) + 氵 (thủy)",
    components: "国 (quốc gia bản địa) + 潮 (bộ Thủy 氵: thủy triều -> trào lưu thời đại).",
    context: "Xu hướng tiêu dùng nổi bật từ khoảng 2018 đến nay trong Gen Z Trung Quốc: Bảo tàng Cố Cung, Li-Ning, các nhãn hàng trà/mỹ phẩm/game khai thác thẩm mỹ truyền thống.",
    related: ["新中式 (phong cách Tân Trung Thức)", "文化自信 (tự tin văn hóa)", "故宫文创 (sản phẩm sáng tạo Cố Cung)"],
    mnemonic: "Làn sóng trào lưu (潮) mang đậm bản sắc văn hóa dân tộc (国).",
    examples: [
      { zh: "近年来，“国潮”设计在服饰、美妆和文创行业十分流行。", pinyin: "Jìnniánlái, 'Guócháo' shèjì zài fúshì, měizhuāng hé wénchuàng hángyè shífēn liúxíng.", en: "In recent years, 'Guochao' design has become very popular in fashion, cosmetics, and cultural-creative industries.", vi: "Những năm gần đây, thiết kế 'Quốc triều' rất thịnh hành trong ngành thời trang, mỹ phẩm và văn hóa sáng tạo." },
      { zh: "国潮品牌往往将传统纹样与现代消费需求结合。", pinyin: "Guócháo pǐnpái wǎngwǎng jiāng chuántǒng wényàng yǔ xiàndài xiāofèi xūqiú jiéhé.", en: "Guochao brands often combine traditional motifs with modern consumer demands.", vi: "Các thương hiệu Quốc triều thường kết hợp hoa văn truyền thống với nhu cầu tiêu dùng hiện đại." },
      { zh: "研究国潮现象有助于洞察中国年轻一代的消费心理。", pinyin: "Yánjiū Guócháo xiànxiàng yǒuzhùyú dòngchá Zhōngguó niánqīng yídài de xiāofèi xīnlǐ.", en: "Studying the Guochao phenomenon helps uncover the consumer psychology of China's younger generation.", vi: "Nghiên cứu hiện tượng Quốc triều giúp thấu hiểu tâm lý tiêu dùng của thế hệ trẻ Trung Quốc." }
    ]
  },
  {
    id: "neijuan",
    hanzi: "内卷",
    traditional: "內捲",
    pinyin: "nèijuǎn",
    level: "Advanced / Academic Chinese",
    pos: "v. / n.",
    english: "Involution (hyper-competitive effort yielding diminishing marginal returns)",
    vietnamese: "Nội quyển (cạnh tranh khốc liệt khép kín nhưng hiệu suất gia tăng cận biên giảm dần)",
    radical: "冂 + 卩",
    components: "内 (bên trong) + 卷 (cuộn xoáy vào nhau).",
    context: "Thuật ngữ nhân học (Clifford Geertz 'Agricultural Involution') trở thành từ khóa xã hội học nóng nhất của sinh viên và nhân sự đô thị Trung Quốc đương đại.",
    related: ["躺平 (Nằm thẳng – phản ứng rút khỏi đua tranh quá mức)", "考研热 (cơn sốt thi cao học)", "同质化竞争 (cạnh tranh đồng nhất)"],
    mnemonic: "Cuộn xoáy (卷) giằng co ngay ở bên trong (内) mà không mở rộng được không gian mới.",
    examples: [
      { zh: "当行业缺乏创新时，企业往往会陷入价格战式的“内卷”。", pinyin: "Dāng hángyè quēfá chuàngxīn shí, qǐyè wǎngwǎng huì xiànrù jiàgézhàn shì de 'nèijuǎn'.", en: "When an industry lacks innovation, firms often fall into price-war style 'involution'.", vi: "Khi ngành hàng thiếu đổi mới, doanh nghiệp dễ rơi vào vòng xoáy 'nội quyển' chiến tranh giá cả." },
      { zh: "许多中国大学生用“内卷”形容学业与求职的过度竞争。", pinyin: "Xǔduō Zhōngguó dàxuéshēng yòng 'nèijuǎn' xíngróng xuéyè yǔ qiúzhí de guòdù jìngzhēng.", en: "Many Chinese university students use 'involution' to describe excessive competition in academics and job hunting.", vi: "Nhiều sinh viên Trung Quốc dùng từ 'nội quyển' để mô tả sự cạnh tranh quá mức trong học tập và tìm việc." },
      { zh: "摆脱内卷的关键在于寻找差异化优势与新市场空间。", pinyin: "Bǎituō nèijuǎn de guānjiàn zàiyú xúnzhǎo chāyìhuà yōushì yǔ xīn shìchǎng kōngjiān.", en: "The key to breaking out of involution lies in finding differentiated advantages and new market space.", vi: "Chìa khóa thoát khỏi nội quyển nằm ở việc tìm kiếm lợi thế khác biệt và không gian thị trường mới." }
    ]
  },
  {
    id: "chaxugeju",
    hanzi: "差序格局",
    traditional: "差序格局",
    pinyin: "chàxù géjú",
    level: "Advanced / Academic Chinese",
    pos: "n. phrase",
    english: "Differential Mode of Association (Fei Xiaotong's sociological concept)",
    vietnamese: "Sai tự cách cục (mạng lưới quan hệ đồng tâm theo độ thân sơ)",
    radical: "羊 + 广 + 木",
    components: "差 (khác biệt khoảng cách) + 序 (thứ tự bậc thang) + 格局 (cấu trúc khuôn mẫu).",
    context: "Khái niệm kinh điển của nhà xã hội học Phí Hiếu Thông trong 《乡土中国》 (1947): ví quan hệ xã hội như gợn sóng lan ra khi ném hòn đá xuống nước, lấy cái tôi làm tâm.",
    related: ["乡土中国 (Hương thổ Trung Quốc)", "费孝通 (Phí Hiếu Thông)", "圈子文化 (văn hóa vòng tròn thân quen)"],
    mnemonic: "Cấu trúc (格局) sắp xếp thứ tự (序) có phân biệt gần xa (差) từ tâm mỗi cá nhân.",
    examples: [
      { zh: "费孝通在《乡土中国》中提出了著名的“差序格局”概念。", pinyin: "Fèi Xiàotōng zài «Xiāngtǔ Zhōngguó» zhōng tíchū le zhùmíng de 'chàxù géjú' gàiniàn.", en: "Fei Xiaotong proposed the famous concept of 'Differential Mode of Association' in From the Soil.", vi: "Phí Hiếu Thông đã đề xuất khái niệm nổi tiếng 'Sai tự cách cục' trong Hương thổ Trung Quốc." },
      { zh: "理解差序格局有助于解释传统社会中的亲疏远近逻辑。", pinyin: "Lǐjiě chàxù géjú yǒuzhùyú jiěshì chuántǒng shèhuì zhōng de qīnshū yuǎnjìn luóji.", en: "Understanding the differential mode of association helps explain the logic of closeness and distance in traditional society.", vi: "Hiểu Sai tự cách cục giúp lý giải logic thân – sơ trong xã hội truyền thống." },
      { zh: "现代城市化与法治建设正在逐步改变传统差序格局的边界。", pinyin: "Xiàndài chéngshìhuà yǔ fǎzhì jiànshè zhèngzài zhúbù gǎibiàn chuántǒng chàxù géjú de biānjiè.", en: "Modern urbanization and rule-of-law development are gradually altering the boundaries of traditional differential networks.", vi: "Quá trình đô thị hóa và xây dựng pháp quyền hiện đại đang từng bước thay đổi ranh giới của Sai tự cách cục truyền thống." }
    ]
  },
  {
    id: "tianrenheyi",
    hanzi: "天人合一",
    traditional: "天人合一",
    pinyin: "tiānrén héyī",
    level: "Advanced / Academic Chinese",
    pos: "idiom",
    english: "Unity of Heaven/Nature and Humanity",
    vietnamese: "Thiên nhân hợp nhất (sự hài hòa thống nhất giữa Tự nhiên và Con người)",
    radical: "大 + 人 + 口 + 一",
    components: "天 (trời/tự nhiên) + 人 (con người) + 合一 (hòa hợp làm một thể).",
    context: "Mệnh đề triết học xuyên suốt Nho gia (Tư Mạnh, Đổng Trọng Thư, Trương Tái 'Tây Minh'), Đạo gia (Trang Tử) và kiến trúc – y học cổ truyền.",
    related: ["天人感应 (Thiên nhân cảm ứng)", "顺应自然 (thuận theo tự nhiên)", "生态智慧 (trí tuệ sinh thái)"],
    mnemonic: "Trời (天) và Người (人) hợp lại (合) thành một thể hài hòa (一).",
    examples: [
      { zh: "“天人合一”是中国古典哲学与园林美学的重要原则。", pinyin: "'Tiānrén héyī' shì Zhōngguó gǔdiǎn zhéxué yǔ yuánlín měixué de zhòngyào yuánzé.", en: "'Unity of Heaven and Humanity' is a vital principle in classical Chinese philosophy and garden aesthetics.", vi: "'Thiên nhân hợp nhất' là nguyên lý trọng yếu của triết học cổ điển và mỹ học viên lâm Trung Quốc." },
      { zh: "在“天人合一”观念里，人不是自然的主宰，而是自然的一部分。", pinyin: "Zài 'tiānrén héyī' guānniàn lǐ, rén bú shì zìrán de zhǔzǎi, ér shì zìrán de yí bùfen.", en: "In the concept of Heaven-Humanity unity, humans are not masters over nature, but part of nature.", vi: "Trong quan niệm 'Thiên nhân hợp nhất', con người không phải kẻ thống trị tự nhiên mà là một bộ phận của tự nhiên." },
      { zh: "北宋张载在《西铭》中深化了天人合一的伦理内涵。", pinyin: "Běi-Sòng Zhāng Zài zài «Xīmíng» zhōng shēnhuà le tiānrén héyī de lúnlǐ nèihán.", en: "Northern Song thinker Zhang Zai deepened the ethical meaning of Heaven-Humanity unity in his 'Western Inscription'.", vi: "Trương Tái thời Bắc Tống đã đào sâu nội hàm đạo đức của Thiên nhân hợp nhất trong tác phẩm Tây Minh." }
    ]
  },
  {
    id: "shuanggong",
    hanzi: "故宫",
    traditional: "故宮",
    pinyin: "Gùgōng",
    level: "HSK 3-4",
    pos: "n.",
    english: "The Palace Museum / Forbidden City (Beijing)",
    vietnamese: "Cố Cung / Tử Cấm Thành (Hán-Việt: Cố Cung)",
    radical: "攵 (phộc) + 宀 (miên)",
    components: "故 (cũ xưa, triều trước) + 宮 (bộ Miên 宀: mái nhà lớn che hai căn phòng 吕 -> cung điện).",
    context: "Cung điện hoàng gia triều Minh-Thanh xây từ năm 1406–1420; ngày nay là Bảo tàng Cố Cung lưu giữ hơn 1,8 triệu hiện vật văn hóa.",
    related: ["紫禁城 (Tử Cấm Thành)", "中轴线 (Trục Trung Tâm Bắc Kinh)", "文创产品 (sản phẩm văn hóa sáng tạo)"],
    mnemonic: "Cung điện mái ngói trùng điệp (宫) lưu giữ dấu ấn triều đại xưa cũ (故).",
    examples: [
      { zh: "北京故宫是中国现存规模最大、保存最完整的木结构古建筑群。", pinyin: "Běijīng Gùgōng shì Zhōngguó xiàncún guīmó zuì dà, bǎocún zuì wánzhěng de mùjiégòu gǔjiànzhùqún.", en: "Beijing's Forbidden City is China's largest and best-preserved extant ancient wooden architectural complex.", vi: "Cố Cung Bắc Kinh là quần thể kiến trúc cổ kết cấu gỗ quy mô lớn nhất và bảo tồn hoàn chỉnh nhất còn lại ở Trung Quốc." },
      { zh: "故宫博物院通过数字化让全球读者都能在线欣赏文物。", pinyin: "Gùgōng Bówùyuàn tōngguò shùzìhuà ràng quánqiú dúzhě dōu néng zàixiàn xīnshǎng wénwù.", en: "The Palace Museum uses digitization so global audiences can appreciate artifacts online.", vi: "Bảo tàng Cố Cung thông qua số hóa giúp độc giả toàn cầu thưởng lãm hiện vật trực tuyến." },
      { zh: "参观故宫时，可以观察古建筑中巧妙的斗拱结构。", pinyin: "Cānguān Gùgōng shí, kěyǐ guānchá gǔjiànzhù zhōng qiǎomiào de dǒugǒng jiégòu.", en: "When visiting the Forbidden City, one can observe the ingenious dougong bracket structures in ancient architecture.", vi: "Khi tham quan Cố Cung, có thể quan sát kết cấu đấu củng tinh xảo trong kiến trúc cổ." }
    ]
  },
  {
    id: "yidi",
    hanzi: "丝路",
    traditional: "絲路",
    pinyin: "Sīlù",
    level: "HSK 5-6",
    pos: "n.",
    english: "Silk Road (abbreviated form)",
    vietnamese: "Tơ lộ (Con đường Tơ lụa viết gọn)",
    radical: "纟 + ⻊",
    components: "丝 (tơ tằm) + 路 (con đường).",
    context: "Thường xuất hiện trong các cụm thuật ngữ lịch sử và kinh tế khu vực hiện đại ('Tơ lộ điện thương' – Thương mại điện tử Con đường Tơ lụa).",
    related: ["丝路电商 (TMĐT Con đường Tơ lụa)", "敦煌文化 (Văn hóa Đôn Hoàng)", "中欧班列 (Tàu hàng Trung–Âu)"],
    mnemonic: "Sợi tơ (丝) nối thành con đường (路) xuyên lục địa.",
    examples: [
      { zh: "敦煌是古代丝路上的璀璨明珠。", pinyin: "Dūnhuáng shì gǔdài Sīlù shàng de cuǐcàn míngzhū.", en: "Dunhuang was a radiant pearl along the ancient Silk Road.", vi: "Đôn Hoàng là viên ngọc sáng trên Con đường Tơ lụa cổ đại." },
      { zh: "“丝路电商”成为中国与东南亚数字贸易的新渠道。", pinyin: "'Sīlù Diànshāng' chéngwéi Zhōngguó yǔ Dōngnányà shùzì màoyì de xīn qúdào.", en: "'Silk Road E-commerce' has become a new channel for digital trade between China and Southeast Asia.", vi: "'Thương mại điện tử Con đường Tơ lụa' trở thành kênh mới cho thương mại số Trung Quốc – Đông Nam Á." },
      { zh: "丝路沿线博物馆保留了丰富的多民族文物。", pinyin: "Sīlù yánxiàn bówùguǎn bǎoliú le fēngfù de duō mínzú wénwù.", en: "Museums along the Silk Road preserve rich multi-ethnic cultural relics.", vi: "Các bảo tàng dọc tuyến Tơ lộ lưu giữ nhiều cổ vật đa sắc tộc phong phú." }
    ]
  },
  {
    id: "fanyong",
    hanzi: "汉字文化圈",
    traditional: "漢字文化圈",
    pinyin: "Hànzì Wénhuàquān",
    level: "Advanced / Academic Chinese",
    pos: "n. phrase",
    english: "Sinosphere / East Asian Cultural Sphere",
    vietnamese: "Vòng văn hóa Chữ Hán (Trung Quốc, Việt Nam, Nhật Bản, Triều Tiên)",
    radical: "氵 + 宀 + 囗",
    components: "汉字 (chữ Hán) + 文化 (văn hóa) + 圈 (bộ Vi 囗: vòng tròn không gian ảnh hưởng chung).",
    context: "Khái niệm sử học – văn hóa học chỉ bốn khu vực Đông Á từng chia sẻ chữ Hán văn ngôn, lịch pháp nông lịch, hệ thống điển tịch Nho–Phật–Đạo và nhiều tập quán lễ tiết, dù mỗi quốc gia có ngôn ngữ nói và bản sắc độc lập.",
    related: ["东亚文化圈 (Vòng văn hóa Đông Á)", "汉越词 (từ Hán-Việt)", "和汉对照 (đối chiếu Đông Á)"],
    mnemonic: "Một vòng tròn giao lưu văn hóa (文化圈) sử dụng chung cây cầu chữ Hán (汉字) trong lịch sử.",
    examples: [
      { zh: "中国、越南、日本与朝鲜半岛在历史上共同属于汉字文化圈。", pinyin: "Zhōngguó, Yuènán, Rìběn yǔ Cháoxiǎn Bàndǎo zài lìshǐ shàng gòngtóng shǔyú Hànzì Wénhuàquān.", en: "China, Vietnam, Japan, and the Korean Peninsula historically belonged to the Sinosphere.", vi: "Trung Quốc, Việt Nam, Nhật Bản và Bán đảo Triều Tiên trong lịch sử cùng thuộc Vòng văn hóa Chữ Hán." },
      { zh: "尽管同处汉字文化圈，越南依然保持了独特的东南亚文化底蕴。", pinyin: "Jǐnguǎn tóngchǔ Hànzì Wénhuàquān, Yuènán yīrán bǎochí le dútè de Dōngnányà wénhuà dǐyùn.", en: "Although sharing the Sinosphere, Vietnam maintained its distinctive Southeast Asian cultural foundation.", vi: "Dù cùng nằm trong Vòng văn hóa Chữ Hán, Việt Nam vẫn giữ vững nền tảng văn hóa Đông Nam Á độc đáo." },
      { zh: "掌握汉越音规律能帮助越南学生快速拓展中文词汇量。", pinyin: "Zhǎngwò Hàn-Yuèyīn guīlǜ néng bāngzhù Yuènán xuéshēng kuàisù tuòzhǎn Zhōngwén cíhuìliàng.", en: "Mastering Sino-Vietnamese phonetic correspondences helps Vietnamese learners rapidly expand their Chinese vocabulary.", vi: "Nắm vững quy luật âm Hán-Việt giúp sinh viên Việt Nam mở rộng nhanh chóng vốn từ vựng tiếng Trung." }
    ]
  },
  {
    id: "qimendunjia",
    hanzi: "奇门遁甲",
    traditional: "奇門遁甲",
    pinyin: "Qímén Dùnjiǎ",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Qimen Dunjia (traditional Chinese cosmological matrix system)",
    vietnamese: "Kỳ Môn Độn Giáp (một trong Tam Thức cổ đại)",
    radical: "大 + 门 + 辶",
    components: "奇 (Tam Kỳ: Ất, Bính, Đinh) + 门 (Bát Môn: tám cửa phương hướng) + 遁 (ẩn giấu) + 甲 (Thiên Can Giáp đứng đầu).",
    context: "Di sản lịch sử thuật số học cổ đại xuất hiện sớm từ thời Hán (Thức bàn Lục Nhâm/Thái Ất/Độn Giáp); hiện nay là đối tượng nghiên cứu lịch sử toán tổ hợp và văn hóa dân gian.",
    related: ["三式 (Tam Thức)", "九宫八卦 (Cửu Cung Bát Quái)", "式盘 (Thức bàn khảo cổ thời Hán)"],
    mnemonic: "Ẩn giấu chủ soái Giáp (遁甲) sau Ba kỳ (奇) và Tám cửa (门) trên bàn cờ Cửu cung.",
    examples: [
      { zh: "奇门遁甲、太乙与六壬在古代并称为“三式”。", pinyin: "Qímén Dùnjiǎ, Tàiyǐ yǔ Liùrén zài gǔdài bìngchēng wéi 'Sānshì'.", en: "Qimen Dunjia, Taiyi, and Liuren were collectively known as the 'Three Cosmic Boards' in antiquity.", vi: "Kỳ Môn Độn Giáp, Thái Ất và Lục Nhâm trong cổ đại được gọi chung là 'Tam Thức'." },
      { zh: "奇门遁甲以九宫格为框架整合了时间、空间与干支符号。", pinyin: "Qímén Dùnjiǎ yǐ jiǔgōnggé wéi kuàngjià zhěnghé le shíjiān, kōngjiān yǔ gānzhī fúhào.", en: "Qimen Dunjia integrates time, space, and stem-branch symbols within a nine-palace grid.", vi: "Kỳ Môn Độn Giáp lấy khung Cửu cung tích hợp các ký hiệu thời gian, không gian và Can Chi." },
      { zh: "现代历史学者通过西汉出土式盘考证其早期天文历算背景。", pinyin: "Xiàndài lìshǐ xuézhě tōngguò Xī-Hàn chūtǔ shìpán kǎozhèng qí zǎoqī tiānwén lìsuàn bèijǐng.", en: "Modern historians study excavated Western Han cosmic boards to trace its early astronomical and calendrical roots.", vi: "Các nhà sử học hiện đại khảo cứu thức bàn khai quật thời Tây Hán để truy vết nền tảng thiên văn lịch toán sơ khai." }
    ]
  },
  {
    id: "shizheng",
    hanzi: "实证",
    traditional: "實證",
    pinyin: "shízhèng",
    level: "HSK 5-6",
    pos: "n. / v.",
    english: "Empirical evidence; empirical verification; positivist proof",
    vietnamese: "Thực chứng (bằng chứng xác thực dựa trên khảo sát / dữ liệu thực tế)",
    radical: "宀 + 讠",
    components: "实 (thực chất, đầy đủ bên dưới mái nhà 宀) + 证 (Hình thanh: bộ Ngôn 讠 biểu ý lời chứng + 正 chứng tỏ xác thực).",
    context: "Từ khóa phương pháp luận học thuật bắt buộc để phân tách sử liệu xác thực, dữ liệu kinh doanh thực nghiệm khỏi giai thoại truyền miệng hay suy đoán thuật số.",
    related: ["实证研究 (nghiên cứu thực chứng)", "田野调查 (khảo sát thực địa)", "考古实证 (chứng cứ khảo cổ)"],
    mnemonic: "Lời khẳng định (讠 trong 证) chính xác (正) dựa trên sự thật đầy đặn (实) là Thực chứng.",
    examples: [
      { zh: "历史研究必须依靠考古出土文献与传世史料的相互实证。", pinyin: "Lìshǐ yánjiū bìxū yīkào kǎogǔ chūtǔ wénxiàn yǔ chuánshì shǐliào de xiānghù shízhèng.", en: "Historical research must rely on mutual verification between excavated texts and transmitted chronicles.", vi: "Nghiên cứu lịch sử phải dựa vào sự kiểm chứng chéo giữa văn bản khảo cổ và sử liệu truyền thế." },
      { zh: "探讨中国商业文化时，要结合当代企业的实证数据。", pinyin: "Tàntǎo Zhōngguó shāngyè wénhuà shí, yào jiéhé dāngdài qǐyè de shízhèng shùjù.", en: "When examining Chinese business culture, one should incorporate empirical data from contemporary firms.", vi: "Khi thảo luận văn hóa kinh doanh Trung Quốc, cần kết hợp dữ liệu thực chứng của doanh nghiệp đương đại." },
      { zh: "我们应当区分传统民俗信仰与现代科学实证结论。", pinyin: "Wǒmen yīngdāng qūfēn chuántǒng mínsú xìnyǎng yǔ xiàndài kēxué shízhèng jiélùn.", en: "We should distinguish traditional folk beliefs from conclusions verified by modern empirical science.", vi: "Chúng ta cần phân biệt tín ngưỡng dân gian truyền thống với các kết luận được khoa học thực nghiệm kiểm chứng." }
    ]
  },
  {
    id: "baohutong",
    hanzi: "海运与物流",
    traditional: "海運與物流",
    pinyin: "hǎiyùn yǔ wùliú",
    level: "HSK 5-6",
    pos: "n. phrase",
    english: "Maritime shipping and logistics",
    vietnamese: "Vận tải biển và Logistics",
    radical: "氵 + 辶 + 牛",
    components: "海 (biển) + 运 (vận chuyển) + 与 (và) + 物 (hàng hóa vật chất) + 流 (dòng chảy 氵).",
    context: "Trọng tâm thực tiễn cho sinh viên Kinh doanh Quốc tế & Logistics nghiên cứu hành lang cảng biển Trung Quốc (Thượng Hải, Ninh Ba, Thâm Quyến, Thanh Đảo) kết nối Việt Nam (Hải Phòng, Cái Mép).",
    related: ["集装箱港口 (cảng container)", "多式联运 (vận tải đa phương thức)", "报关清关 (khai báo thông quan)"],
    mnemonic: "Vận chuyển (运) qua biển cả (海) đưa dòng chảy hàng hóa (物 + 流) đi khắp thế giới.",
    examples: [
      { zh: "上海港和宁波舟山港是全球吞吐量领先的集装箱港口。", pinyin: "Shànghǎigǎng hé Níngbō-Zhōushāngǎng shì quánqiú tūntǔliàng lǐngxiān de jízhuāngxiāng gǎngkǒu.", en: "Shanghai Port and Ningbo-Zhoushan Port lead the world in container throughput.", vi: "Cảng Thượng Hải và Cảng Ninh Ba – Chu Sơn nằm trong nhóm cảng container có sản lượng hàng đầu thế giới." },
      { zh: "现代智慧港口大大缩短了国际海运与物流的周转时间。", pinyin: "Xiàndài zhìhuì gǎngkǒu dàdà suōduǎn le guójì hǎiyùn yǔ wùliú de zhōuzhuǎn shíjiān.", en: "Modern smart ports have greatly shortened turnaround times in international maritime shipping and logistics.", vi: "Cảng thông minh hiện đại đã rút ngắn đáng kể thời gian quay vòng trong vận tải biển và logistics quốc tế." },
      { zh: "中越陆海联运通道降低了制造业的跨境物流成本。", pinyin: "Zhōng-Yuè lù-hǎi liányùn tōngdào jiàngdī le zhìzàoyè de kuàjìng wùliú chéngběn.", en: "China-Vietnam land-sea intermodal corridors have lowered cross-border logistics costs for manufacturing.", vi: "Hành lang vận tải đa phương thức đường bộ – đường biển Trung – Việt giúp giảm chi phí logistics xuyên biên giới cho ngành sản xuất." }
    ]
  },
  {
    id: "yishujingjie",
    hanzi: "意境",
    traditional: "意境",
    pinyin: "yìjìng",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Artistic conception / evocative mood beyond words or images",
    vietnamese: "Ý cảnh (cảnh giới thẩm mỹ hòa quyện giữa tình cảm nội tâm và ngoại cảnh)",
    radical: "心 (tâm) + 土 (thổ)",
    components: "意 (tâm ý 音 + 心) + 境 (cảnh giới không gian).",
    context: "Phạm trù mỹ học đỉnh cao của thi ca, hội họa thủy mặc và vườn cổ điển Trung Hoa (được Vương Quốc Duy tổng kết trong 《人间词话》).",
    related: ["情景交融 (tình cảnh giao dung)", "言有尽而意无穷 (lời hết mà ý vô cùng)", "意象 (ý tượng)"],
    mnemonic: "Nơi tâm ý con người (意) giao hòa vào không gian thiên nhiên (境) tạo nên Ý cảnh.",
    examples: [
      { zh: "王维的诗往往具有“诗中有画，画中有诗”的意境。", pinyin: "Wáng Wéi de shī wǎngwǎng jùyǒu 'shī zhōng yǒu huà, huà zhōng yǒu shī' de yìjìng.", en: "Wang Wei's poetry often possesses an artistic conception of 'painting in poetry, poetry in painting'.", vi: "Thơ của Vương Duy thường mang ý cảnh 'trong thơ có họa, trong họa có thơ'." },
      { zh: "苏州园林通过借景手法营造出深远的意境。", pinyin: "Sūzhōu yuánlín tōngguò jièjǐng shǒufǎ yíngzào chū shēnyuǎn de yìjìng.", en: "Suzhou gardens create profound artistic atmosphere through borrowed-scenery techniques.", vi: "Viên lâm Tô Châu tạo dựng ý cảnh sâu lắng thông qua thủ pháp mượn cảnh." },
      { zh: "王国维在《人间词话》中系统探讨了古典文学的意境。", pinyin: "Wáng Guówéi zài «Rénjiān Cíhuà» zhōng xìtǒng tàntǎo le gǔdiǎn wénxué de yìjìng.", en: "Wang Guowei systematically explored artistic conception in classical literature in 'Poetic Remarks in the Human World'.", vi: "Vương Quốc Duy trong Nhân Gian Từ Thoại đã bàn luận có hệ thống về ý cảnh trong văn học cổ điển." }
    ]
  },
  {
    id: "qinghua",
    hanzi: "青花瓷",
    traditional: "青花瓷",
    pinyin: "Qīnghuācí",
    level: "HSK 4-5 / Cultural Heritage",
    pos: "n.",
    english: "Blue-and-white porcelain (underglaze cobalt pigment wares traded globally)",
    vietnamese: "Sứ Thanh Hoa / Gốm Hoa lam (gốm men trắng vẽ lam cô-ban xuất khẩu qua Con đường Tơ lụa Hàng hải)",
    radical: "青 + 艹 + 瓦",
    components: "青 (màu xanh lam cô-ban Tô Mạt Ly Thanh nhập từ Ba Tư) + 花 (hoa văn dây cúc, mẫu đơn) + 瓷 (sứ nung nhiệt độ cao).",
    context: "Đỉnh cao sản xuất tại Cảnh Đức Trấn (Giang Tây) thời Nguyên–Minh và phát triển dòng gốm Hoa lam Chu Đậu đặc sắc tại Hải Dương (Việt Nam) thế kỷ XV.",
    related: ["景德镇 (Cảnh Đức Trấn)", "朱豆青花 (Gốm Hoa lam Chu Đậu)", "海上丝路 (Con đường Tơ lụa Hàng hải)"],
    mnemonic: "Hoa văn (花) sắc xanh cô-ban (青) nung chín trên cốt sứ trắng (瓷).",
    examples: [
      { zh: "元明时期的景德镇青花瓷融合了波斯钴料与东方水墨审美。", pinyin: "Yuán-Míng shíqī de Jǐngdézhèn qīnghuácí rónghé le Bōsī gǔliào yǔ Dōngfāng shuǐmò shěnměi.", en: "Jingdezhen blue-and-white porcelain in the Yuan and Ming blended Persian cobalt pigment with East Asian ink-wash aesthetics.", vi: "Sứ Thanh Hoa Cảnh Đức Trấn thời Nguyên–Minh kết hợp chất màu cô-ban Ba Tư với mỹ học thủy mặc phương Đông." },
      { zh: "越南海阳省的朱豆青花瓷曾在十五世纪通过海洋贸易远销至伊斯坦布尔。", pinyin: "Yuènán Hǎiyáng shěng de Chǔdòu qīnghuácí céng zài shíwǔ shìjì tōngguò hǎiyáng màoyì yuǎnxiāo zhì Yīsītǎnbù'ěr.", en: "Chu Dau blue-and-white ceramics from Hai Duong, Vietnam traveled via 15th-century sea routes as far as Istanbul.", vi: "Gốm Hoa lam Chu Đậu tỉnh Hải Dương của Việt Nam từng theo đường biển thế kỷ XV vươn xa tới tận Istanbul." },
      { zh: "沉船考古文物证明青花瓷曾是最早的全球化大宗商品之一。", pinyin: "Chénchuán kǎogǔ wénwù zhèngmíng qīnghuácí céng shì zuìzǎo de quánqiúhuà dàzōng shāngpǐn zhī yī.", en: "Shipwreck archaeology confirms blue-and-white ceramics were among the earliest globalized trade commodities.", vi: "Hiện vật khảo cổ tàu đắm chứng minh gốm hoa lam là một trong những mặt hàng toàn cầu hóa sớm nhất lịch sử." }
    ]
  },
  {
    id: "shibosi",
    hanzi: "市舶司",
    traditional: "市舶司",
    pinyin: "Shìbósī",
    level: "Advanced / Historical Governance",
    pos: "n.",
    english: "Maritime Trade Superintendency (Imperial Chinese customs office for ocean shipping)",
    vietnamese: "Thị Bạc Tư (cơ quan hải quan & quản lý thương thuyền viễn dương thời Đường–Tống–Nguyên–Minh)",
    radical: "巾 + 舟 + 口",
    components: "市 (chợ búa giao dịch) + 舶 (bộ Chu 舟 – thuyền biển lớn) + 司 (ty sở, cơ quan quản lý hành chính).",
    context: "Thành lập sớm từ năm 714 tại Quảng Châu thời Đường, trở thành nguồn thu thuế quan trọng tại Tuyền Châu và Minh Châu (Ninh Ba) thời Tống–Nguyên.",
    related: ["海关 (hải quan)", "抽分 (thuế phần trăm hàng hóa nhập cảng)", "蕃坊 (phố ngoại thương nước ngoài)"],
    mnemonic: "Cơ quan (司) quản lý chợ giao dịch (市) từ những con tàu vượt biển (舶).",
    examples: [
      { zh: "唐宋时期在广州与泉州设立市舶司，专门管理海外贸易与征收关税。", pinyin: "Táng-Sòng shíqī zài Guǎngzhōu yǔ Quánzhōu shèlì Shìbósī, zhuānmén guǎnlǐ hǎiwài màoyì yǔ zhēngshōu guānshuì.", en: "During the Tang and Song dynasties, Maritime Trade Superintendencies were set up in Guangzhou and Quanzhou to administer overseas trade and collect tariffs.", vi: "Thời Đường–Tống triều đình lập Thị Bạc Tư tại Quảng Châu và Tuyền Châu để quản lý ngoại thương và thu thuế cảng." },
      { zh: "宋代市舶司的税收一度成为中央财政的重要支柱。", pinyin: "Sòngdài Shìbósī de shuìshōu yīdù chéngwéi zhōngyāng cáizhèng de zhòngyào zhīzhù.", en: "Maritime customs revenues collected by Song Shibosi offices once formed a vital pillar of state finance.", vi: "Nguồn thu thuế từ Thị Bạc Tư thời Tống từng trở thành một trụ cột tài chính quan trọng của triều đình." },
      { zh: "中国古籍中的市舶制度可与大越云屯港的商舶管理制度对照研究。", pinyin: "Zhōngguó gǔjí zhōng de shìbó zhìdù kě yǔ Dà Yuè Yúntún gǎng de shāngbó guǎnlǐ zhìdù duìzhào yánjiū.", en: "The Shibosi maritime administration in Chinese archives can be studied alongside Dai Viet port governance at Van Don.", vi: "Chế độ Thị bạc trong cổ tịch Trung Quốc có thể đối chiếu với thiết chế quản lý thương thuyền ở cảng Vân Đồn của Đại Việt." }
    ]
  },
  {
    id: "ershisijieqi",
    hanzi: "二十四节气",
    traditional: "二十四節氣",
    pinyin: "Èrshísì Jiéqì",
    level: "HSK 4-5",
    pos: "n.",
    english: "Twenty-Four Solar Terms (astronomical solar calendar markers dividing the ecliptic)",
    vietnamese: "Nhị thập tứ tiết khí (24 mốc thời tiết tính theo kinh độ Mặt Trời mỗi 15°)",
    radical: "艹 + 气",
    components: "二十四 (số 24) + 节 (đốt tre, phân đoạn thời gian) + 气 (khí hậu, tiết trời).",
    context: "Được UNESCO công nhận Di sản Văn hóa Phi vật thể (2016); quy định nhịp gieo cấy nông nghiệp, lễ tiết Thanh Minh – Đông Chí và dưỡng sinh Đông y theo mùa.",
    related: ["农历 (Nông lịch)", "清明 (Thanh Minh)", "冬至 (Đông Chí)"],
    mnemonic: "24 đốt phân chia khí hậu (节气) trên vòng quay Mặt Trời 360 độ (mỗi đốt 15 độ).",
    examples: [
      { zh: "二十四节气是依据太阳在黄道上的位置制定的阳历体系。", pinyin: "Èrshísì Jiéqì shì yījù tàiyáng zài huángdào shàng de wèizhi zhìdìng de yánglì tǐxì.", en: "The Twenty-Four Solar Terms form a solar calendar system determined by the sun's ecliptic longitude.", vi: "24 Tiết khí là hệ thống lịch Mặt Trời được thiết lập dựa trên vị trí biểu kiến của Mặt Trời trên hoàng đạo." },
      { zh: "农民依据立春、谷雨和芒种等节气来安排耕作与播种。", pinyin: "Nóngmín yījù Lìchūn, Gǔyǔ hé Mángzhòng děng jiéqì lái ānpái gēngzuò yǔ bōzhòng.", en: "Farmers schedule plowing and sowing according to solar terms such as Start of Spring, Grain Rain, and Grain in Ear.", vi: "Nông dân căn cứ vào các tiết khí như Lập Xuân, Cốc Vũ, Mang Chủng để sắp xếp cày cấy và gieo hạt." },
      { zh: "中越两国在传统饮食与四季养生中均保留了节气文化。", pinyin: "Zhōng-Yuè liǎngguó zài chuántǒng yǐnshí yǔ sìjì yǎngshēng zhōng jūn bǎoliú le jiéqì wénhuà.", en: "Both China and Vietnam preserve solar-term traditions in seasonal cuisine and preventive health practices.", vi: "Cả Trung Quốc và Việt Nam đều lưu giữ văn hóa tiết khí trong ẩm thực cổ truyền và dưỡng sinh bốn mùa." }
    ]
  },
  {
    id: "huangdineijing",
    hanzi: "黄帝内经",
    traditional: "黃帝內經",
    pinyin: "Huángdì Nèijīng",
    level: "Advanced / Classical",
    pos: "n.",
    english: "Inner Canon of the Yellow Emperor (foundational treatise of Traditional Chinese Medicine)",
    vietnamese: "Hoàng Đế Nội Kinh (《Tố Vấn》 & 《Linh Khu》 — bộ kinh điển nền tảng Đông y)",
    radical: "黄 + 糸",
    components: "黄帝 (Hoàng Đế – danh xưng mượn huyền thoại Tam Hoàng) + 内 (bên trong, tạng phủ) + 经 (kinh điển).",
    context: "Biên soạn hoàn chỉnh vào thời Chiến Quốc – Hán; nêu các nguyên tắc Tạng tượng, Kinh lạc, Âm Dương ngũ hành và phòng bệnh trước khi phát ('Trị vị bệnh' 治未病).",
    related: ["素问 (Tố Vấn)", "灵枢 (Linh Khu)", "治未病 (Phòng bệnh từ sớm)"],
    mnemonic: "Bộ kinh điển (经) luận về sinh lý bên trong cơ thể (内) mượn lời vấn đáp của Hoàng Đế (黄帝).",
    examples: [
      { zh: "《黄帝内经》由《素问》与《灵枢》两部分组成，奠定了中医理论基石。", pinyin: "«Huángdì Nèijīng» yóu «Sùwèn» yǔ «Língshū» liǎng bùfen zǔchéng, diàndìng le Zhōngyī lǐlùn jīshí.", en: "The Huangdi Neijing consists of Plain Questions (Suwen) and Spiritual Pivot (Lingshu), laying the theoretical foundation of Chinese medicine.", vi: "Hoàng Đế Nội Kinh gồm hai phần Tố Vấn và Linh Khu, đặt nền tảng lý luận cho Đông y." },
      { zh: "《黄帝内经》强调“上工治未病”，注重顺应四时作息以预防疾病。", pinyin: "«Huángdì Nèijīng» qiángdiào 'shànggōng zhì wèi bìng', zhùzhòng shùnyìng sìshí zuòxī yǐ yùfáng jíbìng.", en: "The Inner Canon stresses that 'the superior physician treats disease before it arises', emphasizing seasonal lifestyle adaptation.", vi: "Hoàng Đế Nội Kinh nhấn mạnh 'bậc thầy trị bệnh từ khi chưa phát', chú trọng sinh hoạt thuận bốn mùa để phòng bệnh." },
      { zh: "学习东亚传统医药史时，需将其历史哲学框架与现代循证医学并重理解。", pinyin: "Xuéxí Dōngyà chuántǒng yīyào shǐ shí, xū jiāng qí lìshǐ zhéxué kuàngjià yǔ xiàndài xúnzhèng yīxué bìngzhòng lǐjiě.", en: "When studying East Asian medical history, one should understand its historical-philosophical framework alongside modern evidence-based medicine.", vi: "Khi học lịch sử y dược truyền thống Đông Á, cần hiểu khung triết lý lịch sử song hành cùng y học chứng cứ hiện đại." }
    ]
  },
  {
    id: "zangxiang",
    hanzi: "藏象",
    traditional: "藏象",
    pinyin: "Zàngxiàng",
    level: "Advanced / Academic Chinese",
    pos: "n.",
    english: "Zang-Xiang (Visceral manifestation theory: internal organs inferred via external signs)",
    vietnamese: "Tạng tượng (học thuyết quan sát biểu hiện bên ngoài để luận chức năng tạng phủ bên trong)",
    radical: "艹 + 臣 + 象",
    components: "藏 (tàng trữ bên trong cơ thể – đọc zàng) + 象 (hình tượng biểu lộ ra sắc mặt, mạch tượng bên ngoài).",
    context: "Trong Đông y cổ đại, 'Tâm/Can/Tỳ/Phế/Thận' là hệ thống chức năng tổng hợp chứ không hoàn toàn đồng nhất với một cơ quan giải phẫu đơn lẻ Tây y.",
    related: ["五脏六腑 (Ngũ tạng lục phủ)", "经络 (Kinh lạc)", "望闻问切 (Vọng Văn Vấn Thiết)"],
    mnemonic: "Cái ẩn tàng bên trong (藏) biểu lộ ra hình tượng bên ngoài (象).",
    examples: [
      { zh: "中医藏象学说主张“有诸内，必形诸外”，通过面色、舌苔判断脏腑功能。", pinyin: "Zhōngyī zàngxiàng xuéshuō zhǔzhāng 'yǒu zhū nèi, bì xíng zhū wài', tōngguò miànsè, shétāi pànduàn zàngfǔ gōngnéng.", en: "TCM's Zang-Xiang theory holds that what lies within inevitably manifests outward through complexion and tongue coating.", vi: "Học thuyết Tạng tượng chủ trương 'trong có gì tất biểu lộ ra ngoài', thông qua sắc mặt và rêu lưỡi xét công năng tạng phủ." },
      { zh: "藏象体系中的“脾”主要指消化与营养运化功能，不同于西医解剖学上的脾脏。", pinyin: "Zàngxiàng tǐxì zhōng de 'Pí' zhǔyào zhǐ xiāohuà yǔ yíngyǎng yùnhuà gōngnéng, bùtóng yú Xīyī jiěpōuxué shàng de pí-zàng.", en: "In the Zang-Xiang framework, 'Pi' (Spleen) largely denotes digestive assimilation rather than the anatomical spleen alone.", vi: "Trong hệ thống Tạng tượng, 'Tỳ' chủ yếu chỉ chức năng tiêu hóa vận hóa, khác với cơ quan lá lách trong giải phẫu Tây y." },
      { zh: "理解藏象与西医器官概念的语义差异，能避免跨学科翻译时的概念混淆。", pinyin: "Lǐjiě zàngxiàng yǔ Xīyī qìguān gàiniàn de yǔyì chāyì, néng bìmiǎn kuà xuékē fānyì shí de gàiniàn hùnxiáo.", en: "Grasping the semantic distinction between Zang-Xiang and Western anatomical organs prevents conceptual confusion in translation.", vi: "Hiểu khác biệt ngữ nghĩa giữa Tạng tượng và cơ quan giải phẫu Tây y giúp tránh nhầm lẫn khi dịch thuật liên ngành." }
    ]
  },
  {
    id: "sihua",
    hanzi: "四化",
    traditional: "四化",
    pinyin: "Sìhuà",
    level: "Advanced / Metaphysics",
    pos: "n.",
    english: "Four Transformations (Hua Lu, Hua Quan, Hua Ke, Hua Ji in Zi Wei Dou Shu)",
    vietnamese: "Tứ Hóa (Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ — bốn biến số động trong Tử Vi Đẩu Số)",
    radical: "囗 + 匕",
    components: "四 (số 4 — 4 trạng thái vận động) + 化 (hóa biến, ghép Nhân đứng 亻 và chữ Hoa 匕 biểu thị sự chuyển hóa).",
    context: "Gồm Hóa Lộc (lộc lộc, cơ hội phát triển), Hóa Quyền (năng lực kiểm soát, trách nhiệm), Hóa Khoa (danh tiếng, học thuật, giải ách) và Hóa Kỵ (chấp niệm, trở ngại hoặc tập trung cao độ). Trong Bắc phái Khâm Thiên Tứ Hóa, 10 Thiên Can của mỗi cung kích hoạt Tứ Hóa phi nhập các cung khác.",
    related: ["化禄 (Hóa Lộc)", "化权 (Hóa Quyền)", "化科 (Hóa Khoa)", "化忌 (Hóa Kỵ)"],
    mnemonic: "Bốn (四) trạng thái biến hóa (化) Lộc – Quyền – Khoa – Kỵ làm động cả bàn đồ 12 cung Tử Vi.",
    examples: [
      { zh: "紫微斗数中的“四化”指的是化禄、化权、化科与化忌四种动态变化。", pinyin: "Zǐwēi Dǒushù zhōng de 'Sìhuà' zhǐ de shì Huàlù, Huàquán, Huàkē yǔ Huàjì sì zhǒng dòngtài biànhuà.", en: "In Zi Wei Dou Shu, 'Si Hua' refers to four dynamic transformations: Lu, Quan, Ke, and Ji.", vi: "‘Tứ Hóa’ trong Tử Vi Đẩu Số chỉ bốn biến chuyển động gồm Hóa Lộc, Hóa Quyền, Hóa Khoa và Hóa Kỵ." },
      { zh: "北派钦天四化特别强调由宫干引发的飞星四化与宫位之间的因果关联。", pinyin: "Běipài Qīntiān Sìhuà tèbié qiángdiào yóu gōnggān yǐnfā de fēixīng sìhuà yǔ gōngwèi zhījiān de yīnguǒ guānlián.", en: "The Northern Qintian Flying-Star school emphasizes stem-triggered transformations linking different palaces.", vi: "Bắc phái Khâm Thiên Tứ Hóa đặc biệt chú trọng phi tinh Tứ Hóa phát xuất từ Thiên Can cung để xét mối liên kết giữa các cung." },
      { zh: "研究者阅读古今紫微文献时，常将“四化”看作隐喻机会与心理焦点的符号体系。", pinyin: "Yánjiūzhě yuèdú gǔjīn Zǐwēi wénxiàn shí, cháng jiāng 'Sìhuà' kànzuò yǐnyù jīhuì yǔ xīnlǐ jiāodiǎn de fúhào tǐxì.", en: "When reading classical and modern Zi Wei literature, researchers treat Si Hua as a symbolic system denoting opportunities and psychological focus.", vi: "Khi đọc thư tịch Tử Vi cổ kim, giới nghiên cứu xem Tứ Hóa là hệ thống ký hiệu ẩn dụ cho cơ hội và điểm tập trung tâm lý." }
    ]
  },
  {
    id: "sizhubazi",
    hanzi: "四柱八字",
    traditional: "四柱八字",
    pinyin: "Sìzhù Bāzì",
    level: "Advanced / Metaphysics",
    pos: "n.",
    english: "Four Pillars of Destiny (Bazi / Ziping eight-character stem-branch model)",
    vietnamese: "Tứ Trụ Bát Tự (4 cặp Can Chi Năm–Tháng–Ngày–Giờ theo tiết khí)",
    radical: "囗 + 木",
    components: "四柱 (4 cột mốc thời gian: Niên – Nguyệt – Nhật – Thời) + 八字 (4 Thiên Can + 4 Địa Chi = 8 chữ).",
    context: "Cải cách bởi Từ Tử Bình đầu thời Tống, lấy Thiên Can ngày sinh (Nhật chủ) và Nguyệt lệnh tiết khí để xét cân bằng Ngũ hành.",
    related: ["日主 (Nhật chủ)", "月令节气 (Nguyệt lệnh tiết khí)", "十神 (Thập Thần)"],
    mnemonic: "Bốn cột thời gian (四柱) lập thành tám chữ Can Chi (八字) dựa theo lịch tiết khí.",
    examples: [
      { zh: "四柱八字的起盘必须严格按照二十四节气划分月份，而非普通阴历初一。", pinyin: "Sìzhù Bāzì de qǐpán bìxū yángé ànzhào Èrshísì Jiéqì huàfēn yuèfèn, ér fēi pǔtōng yīnlì chūyī.", en: "Plotting a Four Pillars chart strictly divides months by the Twenty-Four Solar Terms rather than lunar new-moon days.", vi: "Lập lá số Tứ Trụ Bát Tự phải chia tháng theo đúng 24 Tiết khí Mặt Trời chứ không theo mùng 1 âm lịch." },
      { zh: "宋代徐子平将重心从年柱纳音转向日主与月令的生克格局，奠定了子平法。", pinyin: "Sòngdài Xú Zǐpíng jiāng zhòngxīn cóng niánzhù nàyīn zhuǎnxiàng rìzhǔ yǔ yuèlìng de shēngkè géjú, diàndìng le Zǐpíngfǎ.", en: "Song scholar Xu Ziping shifted focus from year-pillar Nayin to the day master and seasonal month command, establishing the Ziping method.", vi: "Từ Tử Bình đời Tống chuyển trọng tâm từ Nạp Âm năm sinh sang Nhật chủ và Nguyệt lệnh, đặt nền móng cho Tử Bình pháp." },
      { zh: "清代《子平真诠》与《滴天髓》代表了传统八字命理文献的思想高峰。", pinyin: "Qīngdài «Zǐpíng Zhēnquán» yǔ «Dītiānsuǐ» dàibiǎo le chuántǒng Bāzì mìnglǐ wénxiàn de sīxiǎng gāofēng.", en: "Qing classics Ziping Zhenquan and Ditiansui represent the intellectual peaks of traditional Bazi literature.", vi: "Sách Tử Bình Chân Thuyên và Đích Thiên Tủy đời Thanh đại diện cho đỉnh cao văn hiến mệnh lý Bát Tự." }
    ]
  },
  {
    id: "yonghen",
    hanzi: "用神",
    traditional: "用神",
    pinyin: "Yòngshén",
    level: "Advanced / Metaphysics",
    pos: "n.",
    english: "Useful God / Balancing Element (key regulating phase in Bazi and TCM metaphors)",
    vietnamese: "Dụng thần (yếu tố Ngũ hành đóng vai trò điều hòa cân bằng nhiệt–lạnh hoặc cường–nhược trong Bát Tự)",
    radical: "用 + 礻",
    components: "用 (sử dụng để điều tiết) + 神 (công năng tinh thần/tác dụng cốt lõi của lá số).",
    context: "Gồm 3 phép lớn: Phù ức (bổ yếu hãm mạnh), Điều hầu (điều hòa hàn–táo mùa Đông/Hè trong 《Cùng Thông Bảo Giám》), và Thông quan (hòa giải hai hành xung khắc).",
    related: ["调候用神 (Điều hầu Dụng thần)", "扶抑 (Phù ức)", "通关 (Thông quan)"],
    mnemonic: "Chữ (神) giữ vị trí quyết định được dùng (用) để cân bằng toàn cục Bát Tự.",
    examples: [
      { zh: "冬季出生的八字往往寒冷，子平调候派常取丙火作为调候用神。", pinyin: "Dōngjì chūshēng de Bāzì wǎngwǎng hánlěng, Zǐpíng tiáohòupài cháng qǔ Bǐnghuǒ zuòwéi tiáohòu yòngshén.", en: "Winter-born Bazi charts are often cold, so the climate-balancing school frequently selects Yang Fire (Bing) as the Useful Element.", vi: "Lá số Bát Tự sinh mùa đông thường hàn lạnh nên phái Điều Hầu hay chọn Bính Hỏa làm Dụng thần sưởi ấm." },
      { zh: "古籍常借自然气候比喻用神原则：“冬水得火而融，夏木得水而荣”。", pinyin: "Gǔjí cháng jiè zìrán qìhòu bǐyù yòngshén yuánzé: 'dōng shuǐ dé huǒ ér róng, xià mù dé shuǐ ér róng'.", en: "Classical texts often use seasonal metaphors for the balancing element: winter water melts with warmth, summer wood thrives with rain.", vi: "Cổ thư hay mượn ví von thời tiết cho nguyên tắc Dụng thần: nước mùa đông gặp ấm mà tan, cây mùa hạ gặp nước mà xanh tươi." },
      { zh: "现代心理学常把这一理念解读为“识别性格偏颇并寻找互补习惯的隐喻”。", pinyin: "Xiàndài xīnlǐxué cháng bǎ zhè yī lǐniàn jiědú wéi 'shíbié xìnggé piānpō bìng xúnzhǎo hùbǔ xíguàn de yǐnyù'.", en: "Modern psychologists often read this concept as a metaphor for spotting temperamental imbalances and cultivating complementary habits.", vi: "Tâm lý học hiện đại hay diễn giải ý niệm này như ẩn dụ về việc nhận diện thiên lệch tính cách để rèn thói quen bổ trợ." }
    ]
  },
  {
    id: "luopan",
    hanzi: "罗盘",
    traditional: "羅盤",
    pinyin: "Luópán",
    level: "HSK 5-6",
    pos: "n.",
    english: "Luopan (Chinese geomantic magnetic compass with concentric orientation rings)",
    vietnamese: "La kinh / La bàn Phong thủy (dụng cụ từ tính chia 24 Sơn Hướng, 64 Quẻ & 28 Tú)",
    radical: "罒 + 皿",
    components: "罗 (bao la lưới trời 罒 + 维) + 盘 (chiếc đĩa tròn đặt kim từ nam châm ở Thiên trì trung tâm).",
    context: "Phát triển trực tiếp từ kim nam châm 'Tư Nam' (司南) và la bàn đi biển thời Tống; đồng thời phục vụ đo phương hướng mặt trời/gió trong quy hoạch đô thị cổ.",
    related: ["指南针 (La bàn chỉ nam)", "二十四山向 (24 Sơn hướng)", "勘舆 (Kham dư / Địa lý học cổ)"],
    mnemonic: "Mặt đĩa tròn (盘) bao chứa lưới vòng tròn thiên–địa (罗) xoay quanh kim chỉ nam.",
    examples: [
      { zh: "中国古代发明的磁罗盘先用于航海与军事，后成为传统风水测量的工具。", pinyin: "Zhōngguó gǔdài fāmíng de cí luópán xiān yòngyú hánghǎi yǔ jūnshì, hòu chéngwéi chuántǒng fēngshuǐ cèliáng de gōngjù.", en: "The ancient Chinese magnetic compass was first used for maritime navigation and military surveying before becoming a Feng Shui instrument.", vi: "La bàn từ phát minh ở Trung Quốc cổ đại ban đầu phục vụ hàng hải và quân sự, về sau thành công cụ đo đạc Phong thủy." },
      { zh: "传统罗盘外圈分列二十四山向，将天干、地支与八卦方位统一于一盘。", pinyin: "Chuántǒng luópán wàiquān fēnliè èrshísì shānxiàng, jiāng Tiāngān, Dìzhī yǔ Bāguà fāngwèi tǒngyī yú yī pán.", en: "Traditional Luopan outer rings array 24 mountain directions, unifying Stems, Branches, and Trigrams on one dial.", vi: "Các vòng ngoài La kinh cổ liệt kê 24 Sơn hướng, hợp nhất Thiên Can, Địa Chi và Bát Quái trên một mặt đĩa." },
      { zh: "现代建筑师分析传统聚落时，常结合罗盘朝向测度太阳光照与季风路径。", pinyin: "Xiàndài jiànzhùshī fēnxī chuántǒng jùluò shí, cháng jiéhé luópán cháoxiàng cèdù tàiyáng guāngzhào yǔ jìfēng lùjìng.", en: "Modern architects studying historic settlements use compass orientation to evaluate solar insolation and monsoon wind paths.", vi: "Kiến trúc sư hiện đại khi khảo sát làng cổ thường đối chiếu hướng la bàn để đo chiếu sáng Mặt Trời và hướng gió mùa." }
    ]
  },
  {
    id: "yuanchanzheng",
    hanzi: "原产地证书",
    traditional: "原產地證書",
    pinyin: "Yuánchǎndì Zhèngshū",
    level: "HSK 5-6 / Business Trade",
    pos: "n. phrase",
    english: "Certificate of Origin (e.g., ACFTA C/O Form E or RCEP Certificate)",
    vietnamese: "Giấy chứng nhận Xuất xứ hàng hóa (C/O Form E / RCEP để hưởng thuế nhập khẩu ưu đãi)",
    radical: "厂 + 生 + 讠",
    components: "原 (gốc rễ) + 产 (sản xuất) + 地 (nơi chốn) + 证书 (giấy chứng thực có giá trị pháp lý).",
    context: "Chứng từ cốt lõi trong thương mại Trung Quốc – Việt Nam (do Hải quan GACC hoặc Hội đồng Xúc tiến Thương mại CCPIT cấp) quyết định mức thuế 0–5% hay MFN.",
    related: ["Form E (C/O ACFTA)", "区域价值成分 RVC (Hàm lượng giá trị khu vực ≥ 40%)", "关税优惠 (Ưu đãi thuế quan)"],
    mnemonic: "Giấy chứng thực (证书) nơi (地) sản sinh gốc rễ (原产) của lô hàng xuất khẩu.",
    examples: [
      { zh: "中越跨境贸易中，合规的Form E原产地证书可让进口关税降至零。", pinyin: "Zhōng-Yuè kuàjìng màoyì zhōng, héguī de Form E yuánchǎndì zhèngshū kě ràng jìnkǒu guānshuì jiàngzhì líng.", en: "In China-Vietnam cross-border trade, a compliant Form E Certificate of Origin can reduce import duties to zero.", vi: "Trong thương mại Trung – Việt, C/O Form E hợp lệ có thể giúp giảm thuế nhập khẩu về mức 0%." },
      { zh: "申报RVC标准时，必须保证区域价值成分比例达到或超过40%。", pinyin: "Shēnbào RVC biāozhǔn shí, bìxū bǎozhèng qūyù jiàzhí chéngfèn bǐlì dádào huò chāoguò 40%.", en: "When declaring the RVC criterion, firms must ensure the Regional Value Content meets or exceeds 40%.", vi: "Khi khai báo theo tiêu chí RVC, doanh nghiệp phải chứng minh hàm lượng giá trị khu vực đạt từ 40% trở lên." },
      { zh: "若原产地证书的发票号或HS编码与提单不一致，海关将不予享受优惠税率。", pinyin: "Ruò yuánchǎndì zhèngshū de fāpiàohào huò HS biānmǎ yǔ tídān bù yīzhì, hǎiguān jiāng bù yǔ xiǎngshòu yōuhuì shuìlǜ.", en: "If the invoice number or HS code on the C/O mismatches the bill of lading, customs will deny preferential tariff treatment.", vi: "Nếu số hóa đơn hoặc mã HS trên C/O không khớp vận đơn, hải quan sẽ từ chối áp dụng thuế suất ưu đãi." }
    ]
  },
  {
    id: "baoguan",
    hanzi: "报关与清关",
    traditional: "報關與清關",
    pinyin: "Bàoguān yǔ Qīngguān",
    level: "HSK 5-6 / Business Trade",
    pos: "v. / n.",
    english: "Customs declaration and customs clearance",
    vietnamese: "Khai báo hải quan và Thông quan hàng hóa xuất nhập khẩu",
    radical: "扌 + 门 + 氵",
    components: "报 (khai báo trình nộp hồ sơ) + 关 (cửa khẩu/hải quan) + 清 (thanh toán sạch nghĩa vụ thuế, hoàn tất kiểm tra).",
    context: "Quy trình kép ở hai đầu chuỗi cung ứng: đầu xuất (GACC Trung Quốc – mã 9610/9710) và đầu nhập (hệ thống điện tử VNACCS/VCIS Việt Nam).",
    related: ["海关编码 HS Code (Mã hàng hóa)", "商业发票 (Hóa đơn thương mại)", "提单 B/L (Vận đơn đường biển)"],
    mnemonic: "Khai báo lên cửa khẩu (报关) trước khi hàng được giải phóng thông suốt (清关).",
    examples: [
      { zh: "进口商在货物到港前可通过电子口岸系统提前办理报关手续。", pinyin: "Jìnkǒushāng zài huòwù dàogǎng qián kě tōngguò diànzǐ kǒu'àn xìtǒng tíqián bànlǐ bàoguān shǒuxù.", en: "Importers can file customs declarations ahead of vessel arrival via the electronic port portal.", vi: "Doanh nghiệp nhập khẩu có thể truyền tờ khai hải quan trước khi tàu cập cảng qua hệ thống điện tử." },
      { zh: "商业发票、装箱单、提单与原产地证的一致性是快速清关的关键。", pinyin: "Shāngyè fāpiào, zhuāngxiāngdān, tídān yǔ yuánchǎndìzhèng de yīzhìxìng shì kuàisù qīngguān de guānjiàn.", en: "Consistency across Commercial Invoice, Packing List, Bill of Lading, and Certificate of Origin is crucial for smooth clearance.", vi: "Sự thống nhất giữa Hóa đơn, Phiếu đóng gói, Vận đơn và C/O là chìa khóa giúp thông quan nhanh chóng." },
      { zh: "友宜关—凭祥智慧口岸正逐步压缩陆路鲜活农产品的清关等待时间。", pinyin: "Yǒuyíguān—Píngxiáng zhìhuì kǒu'àn zhèng zhúbù yāsuō lùlù xiānhuó nóngchǎnpǐn de qīngguān děngdài shíjiān.", en: "The Huu Nghi–Pingxiang smart border gate is steadily cutting customs clearance waiting times for fresh produce.", vi: "Cửa khẩu thông minh Hữu Nghị – Bằng Tường đang từng bước rút ngắn thời gian thông quan nông sản tươi đường bộ." }
    ]
  },
  {
    id: "chanyedai",
    hanzi: "产业带",
    traditional: "產業帶",
    pinyin: "Chǎnyèdài",
    level: "HSK 5-6 / Business Trade",
    pos: "n.",
    english: "Industrial cluster belt (localized specialized manufacturing ecosystem)",
    vietnamese: "Vành đai công nghiệp / Cụm ngành hàng chuyên sâu (VD: Nghĩa Ô, Thâm Quyến, Phật Sơn)",
    radical: "生 + 业 + 巾",
    components: "产 (sản xuất) + 业 (ngành nghề) + 带 (dải khu vực địa lý tập trung liên kết dày đặc).",
    context: "Cơ sở tạo nên năng lực ra mẫu nhanh C2M của Trung Quốc: toàn bộ linh kiện, khuôn mẫu, bao bì và xe tải gom hàng nằm trong bán kính vài chục km.",
    related: ["块状经济 (Kinh tế khối cụm)", "C2M 反向定制 (Sản xuất theo nhu cầu)", "供应链生态 (Hệ sinh thái chuỗi cung ứng)"],
    mnemonic: "Dải địa bàn (带) quy tụ trọn vẹn chuỗi nhà xưởng của một ngành sản xuất (产业).",
    examples: [
      { zh: "义乌小商品与深圳华强北电子市场是中国最具代表性的产业带中心。", pinyin: "Yìwū xiǎoshāngpǐn yǔ Shēnzhèn Huáqiángběi diànzǐ shìchǎng shì Zhōngguó zuì jù dàibiǎoxìng de chǎnyèdài zhōngxīn.", en: "Yiwu's small commodities hub and Shenzhen Huaqiangbei electronics hub are iconic Chinese industrial-belt centers.", vi: "Chợ tiểu hàng hóa Nghĩa Ô và chợ điện tử Hoa Cường Bắc Thâm Quyến là hai trung tâm vành đai công nghiệp tiêu biểu." },
      { zh: "依托完善的产业带配套，中小企业可以用极低起订量进行跨境测款。", pinyin: "Yītuō wánshàn de chǎnyèdài pèitào, zhōng-xiǎo qǐyè kěyǐ yòng jí dī qǐdìngliàng jìnxíng kuàjìng cèkuǎn.", en: "Leveraging complete industrial-belt suppliers, SMEs can test cross-border SKUs with very low minimum order quantities.", vi: "Nhờ chuỗi cung ứng đồng bộ của cụm công nghiệp, doanh nghiệp vừa và nhỏ có thể thử mẫu xuyên biên giới với MOQ rất thấp." },
      { zh: "越南制造业企业常向长三角与珠三角产业带采购专用设备与零配件。", pinyin: "Yuènán zhìzàoyè qǐyè cháng xiàng Chángsānjiǎo yǔ Zhūsānjiǎo chǎnyèdài cǎigòu zhuānyòng shèbèi yǔ língpèijiàn.", en: "Vietnamese manufacturers frequently source specialized equipment and components from the Yangtze and Pearl River Delta clusters.", vi: "Doanh nghiệp sản xuất Việt Nam thường nhập máy móc chuyên dụng và linh kiện từ cụm công nghiệp Trường Giang và Châu Giang." }
    ]
  },
  {
    id: "keju-system",
    hanzi: "科举制度",
    traditional: "科舉制度",
    pinyin: "Kējǔ Zhìdù",
    level: "HSK 6 / History & Institutions",
    pos: "n.",
    english: "Imperial Examination System (meritocratic civil service recruitment by subject from Sui–Qing)",
    vietnamese: "Khoa cử (chế độ thi tuyển quan lại theo khoa mục từ thời Tùy – Đường đến năm 1905)",
    radical: "禾 + 兴",
    components: "科 (phân chia theo môn loại/khoa mục, bộ Hòa 禾 + Đấu 斗) + 举 (đề cử, tuyển chọn nâng lên).",
    context: "Thay thế chế độ Cửu phẩm trung chính của門阀 (môn phiệt) quý tộc Lục triều; truyền sang Đại Việt từ khoa thi Minh Kinh bác học năm 1075 (triều Lý Nhân Tông) đến khoa thi Hội cuối cùng năm 1919.",
    related: ["进士 (Tiến sĩ)", "状元 (Trạng nguyên)", "乡试·会试·殿试 (Tam trường: Hương – Hội – Đình)"],
    mnemonic: "Chia thành từng khoa mục (科) để tuyển cử người tài (举) vào bộ máy trị quốc.",
    examples: [
      { zh: "科举制度创立于隋代，完善于唐宋，深刻塑造了东亚文官政治体系。", pinyin: "Kējǔ zhìdù chuànglì yú Suídài, wánshàn yú Táng-Sòng, shēnkè sùzào le Dōngyà wénguān zhèngzhì tǐxì.", en: "The imperial examination system was founded in the Sui dynasty, perfected in the Tang and Song, and deeply shaped East Asian civil governance.", vi: "Chế độ khoa cử khởi lập thời Tùy, hoàn thiện thời Đường – Tống, định hình sâu sắc thể chế văn quan Đông Á." },
      { zh: "越南自1075年李朝开科取士，形成了独具特色的儒学选官传统。", pinyin: "Yuènán zì 1075 nián Lǐcháo kāikē qǔshì, xíngchéng le dújù tèsè de Rúxué xuǎnguān chuántǒng.", en: "Vietnam inaugurated its civil service exams in 1075 under the Ly dynasty, forging a distinctive Confucian recruitment tradition.", vi: "Việt Nam mở khoa thi chọn kẻ sĩ từ năm 1075 đời Lý, hình thành truyền thống tuyển quan Nho học đặc sắc." },
      { zh: "明清科举以“四书五经”与八股文取士，在维护统一的同时也逐渐限制了科学创新。", pinyin: "Míng-Qīng kējǔ yǐ 'Sìshū Wǔjīng' yǔ bāgǔwén qǔshì, zài wéihù tǒngyī de tóngshí yě zhújiàn xiànzhì le kēxué chuàngxīn.", en: "Ming-Qing exams tested the Four Books, Five Classics, and eight-legged essays, maintaining unity while gradually constraining scientific innovation.", vi: "Khoa cử Minh – Thanh lấy Tứ thư Ngũ kinh và văn Bát cổ chọn người, vừa duy trì thống nhất vừa dần kìm hãm sáng tạo khoa học." }
    ]
  },
  {
    id: "jinshi",
    hanzi: "进士",
    traditional: "進士",
    pinyin: "Jìnshì",
    level: "HSK 6 / History & Institutions",
    pos: "n.",
    english: "Jinshi / Metropolitan Graduate (highest degree in the Imperial Examination system)",
    vietnamese: "Tiến sĩ (học vị cao quý đỗ kỳ thi Đình trong hệ thống Khoa cử Đông Á)",
    radical: "辶 + 士",
    components: "进 (tiến bước lên triều đình 辶 + 井) + 士 (kẻ sĩ có học thức và phẩm hạnh).",
    context: "Tại Văn Miếu – Quốc Tử Giám Bắc Kinh còn lưu 198 tấm bia Tiến sĩ thời Nguyên–Minh–Thanh; tại Văn Miếu – Quốc Tử Giám Hà Nội lưu giữ 82 bia Tiến sĩ triều Lê–Mạc (1442–1779) với mệnh đề bất hủ 'Hiền tài là nguyên khí của quốc gia'.",
    related: ["进士题名碑 (Bia đề danh Tiến sĩ)", "殿试 (Thi Đình)", "金榜题名 (Kim bảng đề danh)"],
    mnemonic: "Bậc kẻ sĩ (士) vượt qua kỳ thi Hội và thi Đình để được tiến cử vào triều (进).",
    examples: [
      { zh: "北京国子监与河内文庙均保存着珍贵的进士题名碑，见证了崇文重教的历史。", pinyin: "Běijīng Guózǐjiàn yǔ Hénèi Wénmiào jūn bǎocúnzhe zhēnguì de Jìnshì tímíngbēi, jiànzhèng le chóngwén zhòngjiào de lìshǐ.", en: "Both Beijing's Guozijian and Hanoi's Temple of Literature preserve precious Jinshi steles testifying to a history of revering education.", vi: "Quốc Tử Giám Bắc Kinh và Văn Miếu Hà Nội đều lưu giữ các tấm bia đề danh Tiến sĩ quý giá, minh chứng lịch sử trọng học." },
      { zh: "殿试一甲第一名称为“状元”，第二名为“榜眼”，第三名为“探花”。", pinyin: "Diànshì yījiǎ dì-yī míng chēngwéi 'Zhuàngyuán', dì-èr míng wéi 'Bǎngyǎn', dì-sān míng wéi 'Tànhuā'.", en: "In the Palace Exam, First Class first place was titled Zhuangyuan, second Bangyan, and third Tanhua.", vi: "Đệ nhất giáp kỳ thi Đình lấy tên gọi ba vị đầu bảng là Trạng nguyên, Bảng nhãn và Thám hoa." },
      { zh: "申仁忠在1484年洪德进士碑记中写道：“贤才国家之元气”。", pinyin: "Shēn Rénzhōng zài 1484 nián Hóngdé Jìnshì bēijì zhōng xiědào: 'Xiáncái guójiā zhī yuánqì'.", en: "In the 1484 Hong Duc Jinshi stele inscription, Than Nhan Trung wrote: 'Virtuous talent is the vital energy of the state.'", vi: "Thân Nhân Trung viết trên văn bia Tiến sĩ năm Hồng Đức 1484: 'Hiền tài là nguyên khí của quốc gia'." }
    ]
  },
  {
    id: "sidafaming",
    hanzi: "四大发明",
    traditional: "四大發明",
    pinyin: "Sì Dà Fāmíng",
    level: "HSK 4-5 / History of Science",
    pos: "n. phrase",
    english: "Four Great Inventions (Papermaking, Printing, Gunpowder, and Magnetic Compass)",
    vietnamese: "Tứ đại phát minh (Nghề làm giấy, Kỹ thuật in ấn, Thuốc súng và La bàn từ)",
    radical: "囗 + 大 + 癶",
    components: "四 (bốn) + 大 (vĩ đại) + 发明 (phát kiến sáng tỏ mới mẻ).",
    context: "Khái niệm được học giả Joseph Needham hệ thống hóa trong bộ 《Science and Civilisation in China》 để phân tích đóng góp vật chất – kỹ thuật của Trung Hoa cổ đại đối với quá trình chuyển đổi cận đại toàn cầu.",
    related: ["蔡伦造纸 (Thái Luân cải tiến giấy)", "毕昇活字印刷 (Tất Thăng in chữ rời)", "李约瑟难题 (Câu hỏi Needham)"],
    mnemonic: "Bốn (四) phát kiến lớn (大发明): Giấy viết, In ấn, La bàn, Thuốc súng làm đổi thay lịch sử thế giới.",
    examples: [
      { zh: "造纸术、印刷术、火药和指南针被称为中国古代的“四大发明”。", pinyin: "Zàozhǐshù, yìnshuāshù, huǒyào hé zhǐnánzhēn bèi chēngwéi Zhōngguó gǔdài de 'Sì Dà Fāmíng'.", en: "Papermaking, printing, gunpowder, and the compass are known as ancient China's Four Great Inventions.", vi: "Nghề làm giấy, nghề in, thuốc súng và la bàn được gọi là 'Tứ đại phát minh' của Trung Quốc cổ đại." },
      { zh: "造纸术与印刷术通过丝绸之路西传，极大地降低了人类知识传播的成本。", pinyin: "Zàozhǐshù yǔ yìnshuāshù tōngguò Sīchóu zhī Lù xīchuán, jídà de jiàngdī le rénlèi zhīshi chuánbō de chéngběn.", en: "Papermaking and printing spread westward along the Silk Road, drastically lowering the cost of human knowledge transmission.", vi: "Nghề làm giấy và in ấn truyền sang phương Tây qua Con đường Tơ lụa, giảm mạnh chi phí truyền bá tri thức nhân loại." },
      { zh: "李约瑟在《中国科学技术史》中深入探讨了中国古代技术辉煌与近代科学转型的关系。", pinyin: "Lǐ Yuēsè zài «Zhōngguó Kēxué Jìshù Shǐ» zhōng shēnrù tàntǎo le Zhōngguó gǔdài jìshù huīhuáng yǔ jìndài kēxué zhuǎnxíng de guānxì.", en: "In Science and Civilisation in China, Joseph Needham deeply explored the link between ancient Chinese technological brilliance and modern scientific transition.", vi: "Trong Lịch sử Khoa học Kỹ thuật Trung Quốc, Joseph Needham thảo luận sâu mối quan hệ giữa thành tựu kỹ thuật cổ đại và bước chuyển khoa học cận đại." }
    ]
  },
  {
    id: "tiangongkaiwu",
    hanzi: "天工开物",
    traditional: "天工開物",
    pinyin: "Tiāngōng Kāiwù",
    level: "Advanced / History of Science",
    pos: "proper n.",
    english: "Tiangong Kaiwu (The Exploitation of the Works of Nature, 1637 encyclopedia by Song Yingxing)",
    vietnamese: "《Thiên Công Khai Vật》 (Bách khoa thư kỹ thuật nông – công nghiệp năm 1637 của Tống Ứng Tinh)",
    radical: "大 + 工 + 门 + 牛",
    components: "天工 (quy luật khéo léo của tự nhiên) + 开物 (con người vận dụng kỹ nghệ để khai mở vạn vật hữu ích).",
    context: "Gồm 18 quyển kèm 123 bức tranh khắc gỗ minh họa tỉ mỉ quy trình trồng lúa, dệt lụa, làm giấy, luyện kẽm/sắt, nung gốm sứ Cảnh Đức Trấn và đóng thuyền cuối thời Minh; được châu Âu dịch và gọi là 'Bách khoa toàn thư công nghệ thế kỷ XVII của Trung Quốc'.",
    related: ["宋应星 (Tống Ứng Tinh)", "本草纲目 (Bản Thảo Cương Mục)", "农政全书 (Nông Chính Toàn Thư)"],
    mnemonic: "Phối hợp sức tự nhiên (天工) và bàn tay kỹ thuật con người để mở mang sản vật (开物).",
    examples: [
      { zh: "明代宋应星所著《天工开物》详细记录了十七世纪中国的农业与手工业生产技术。", pinyin: "Míngdài Sòng Yìngxīng suǒ zhù «Tiāngōng Kāiwù» xiángxì jìlù le shíqī shìjì Zhōngguó de nóngyè yǔ shǒugōngyè shēngchǎn jìshù.", en: "Song Yingxing's Ming dynasty work Tiangong Kaiwu thoroughly documented 17th-century Chinese agricultural and handicraft technologies.", vi: "Tác phẩm Thiên Công Khai Vật của Tống Ứng Tinh thời Minh ghi chép tỉ mỉ kỹ thuật nông nghiệp và thủ công nghiệp thế kỷ XVII." },
      { zh: "书中“贵五谷而贱金玉”的思想体现了务实重民的科学精神。", pinyin: "Shū zhōng 'guì wǔgǔ ér jiàn jīnyù' de sīxiǎng tǐxiàn le wùshí zhòngmín de kēxué jīngshén.", en: "The book's ethos of 'valuing the five grains over gold and jade' reflects a pragmatic, people-centered scientific spirit.", vi: "Tư tưởng 'coi trọng ngũ cốc hơn vàng ngọc' trong sách thể hiện tinh thần khoa học thực tiễn vì dân sinh." },
      { zh: "《天工开物》配有百余幅木刻插图，直观呈现了提花机、造纸与冶炼工艺。", pinyin: "«Tiāngōng Kāiwù» pèiyǒu bǎi yú fú mùkè chātú, zhíguān chéngxiàn le tíhuājī, zàozhǐ yǔ yěliàn gōngyì.", en: "Tiangong Kaiwu features over a hundred woodblock illustrations visually depicting drawlooms, papermaking, and metallurgy.", vi: "Thiên Công Khai Vật kèm hơn một trăm tranh khắc gỗ, tái hiện trực quan khung cửi dệt hoa, nghề làm giấy và luyện kim." }
    ]
  },
  {
    id: "wenfangsibao",
    hanzi: "文房四宝",
    traditional: "文房四寶",
    pinyin: "Wénfáng Sìbǎo",
    level: "HSK 5 / Art & Aesthetics",
    pos: "n. phrase",
    english: "Four Treasures of the Study (Brush, Inkstick, Paper, and Inkstone)",
    vietnamese: "Văn phòng tứ bảo (Bốn báu vật nơi thư phòng: Bút lông, Mực thỏi, Giấy Tuyên, Nghiên đá)",
    radical: "文 + 户 + 囗 + 宀",
    components: "文房 (thư phòng của người đọc sách) + 四宝 (4 vật quý: 笔 Bút Hồ Châu, 墨 Mực Huy Châu, 纸 Giấy Tuyên Thành, 砚 Nghiên Đoan Khê).",
    context: "Nền tảng vật chất của nghệ thuật Thư pháp (书法) và Hội họa thủy mặc (水墨画) suốt hơn hai thiên niên kỷ.",
    related: ["湖笔·徽墨·宣纸·端砚 (Hồ bút, Huy mặc, Tuyên chỉ, Đoan nghiên)", "书法 (Thư pháp)", "印章 (Ấn chương)"],
    mnemonic: "Trong phòng đọc sách (文房) có bốn bảo vật (四宝): Bút, Mực, Giấy, Nghiên.",
    examples: [
      { zh: "笔、墨、纸、砚被称为“文房四宝”，是中国传统书画艺术不可或缺的工具。", pinyin: "Bǐ, mò, zhǐ, yàn bèi chēngwéi 'Wénfáng Sìbǎo', shì Zhōngguó chuántǒng shūhuà yìshù bùkě huòquē de gōngjù.", en: "Brush, inkstick, paper, and inkstone are called the Four Treasures of the Study, indispensable tools of traditional Chinese calligraphy and painting.", vi: "Bút, Mực, Giấy, Nghiên được gọi là 'Văn phòng tứ bảo', công cụ không thể thiếu của nghệ thuật thư họa truyền thống." },
      { zh: "安徽宣纸以青檀皮制成，具有“千年寿纸”的美誉，润墨性极佳。", pinyin: "Ānhuī Xuānzhǐ yǐ qīngtánpí zhìchéng, jùyǒu 'qiānnián shòuzhǐ' de měiyù, rùnmòxìng jí jiā.", en: "Anhui Xuan paper, crafted from wingceltis bark, enjoys the reputation of 'thousand-year longevity paper' with superb ink absorption.", vi: "Giấy Tuyên An Huy làm từ vỏ cây thanh đàn, nổi danh 'giấy thọ ngàn năm' với độ thấm loang mực tuyệt hảo." },
      { zh: "文人雅士不仅使用文房四宝书写，更将端砚与印章视为案头清玩。", pinyin: "Wénrén yǎshì bùjǐn shǐyòng Wénfáng Sìbǎo shūxiě, gèng jiāng Duānyàn yǔ yìnzhāng shìwéi àntóu qīngwán.", en: "Literati not only wrote with the Four Treasures but also prized Duan inkstones and seals as refined desk objects.", vi: "Văn nhân tao nhã vừa dùng Văn phòng tứ bảo để viết vừa xem nghiên Đoan và ấn chương là vật thưởng ngoạn nơi bàn sách." }
    ]
  },
  {
    id: "zhuanke",
    hanzi: "篆刻",
    traditional: "篆刻",
    pinyin: "Zhuànkè",
    level: "HSK 6 / Art & Aesthetics",
    pos: "n. / v.",
    english: "Seal carving (art of engraving archaic Seal Script characters onto stone seals)",
    vietnamese: "Triện khắc (nghệ thuật khắc chữ Triện lên ấn đá kết hợp thư pháp và bố cục chương pháp)",
    radical: "⺮ + 刂",
    components: "篆 (chữ Triện cổ kính, bộ Trúc ⺮) + 刻 (dùng dao khắc chạm vào đá/ngọc/đồng, bộ Đao đứng 刂).",
    context: "Kết hợp 'Thư pháp' (chữ Đại triện, Tiểu triện), 'Chương pháp' (bố cục hư thực Chu văn chữ đỏ / Bạch văn chữ trắng) và 'Đao pháp' (nét khắc sắc gọn hay cổ kính). Được UNESCO ghi danh Di sản Văn hóa Phi vật thể năm 2009.",
    related: ["印章 (Ấn chương)", "朱文与白文 (Chu văn Dương & Bạch văn Âm)", "诗书画印 (Thi – Thư – Họa – Ấn)"],
    mnemonic: "Viết chữ Triện cổ (篆) rồi dùng đao khắc (刻) lên mặt đá làm ấn tín.",
    examples: [
      { zh: "篆刻艺术融书法、章法与刀法于方寸之间，被誉为“方寸乾坤”。", pinyin: "Zhuànkè yìshù róng shūfǎ, zhāngfǎ yǔ dāofǎ yú fāngcùn zhījiān, bèi yùwéi 'fāngcùn qiánkūn'.", en: "Seal carving fuses calligraphy, composition, and blade technique within a square inch, praised as 'a universe in a square inch.'", vi: "Nghệ thuật Triện khắc dung hợp thư pháp, chương pháp và đao pháp trong một tấc vuông, được ca ngợi là 'càn khôn trong tấc vuông'." },
      { zh: "中国传统文人画讲究“诗、书、画、印”四绝合一，印章是画面构图的点睛之笔。", pinyin: "Zhōngguó chuántǒng wénrénhuà jiǎngjiu 'shī, shū, huà, yìn' sìjué héyī, yìnzhāng shì huàmiàn gòutú de diǎnjīng zhī bǐ.", en: "Traditional Chinese literati painting prizes the unity of poetry, calligraphy, painting, and seal; the red seal is the finishing touch of the composition.", vi: "Tranh văn nhân truyền thống coi trọng 'Thi, Thư, Họa, Ấn' tứ tuyệt hợp nhất; dấu ấn chu sa là nét điểm nhãn của bố cục." },
      { zh: "篆刻按阴阳效果可分为红字白底的“朱文”与白字红底的“白文”。", pinyin: "Zhuànkè àn yīnyáng xiàoguǒ kě fēnwéi hóngzì báidǐ de 'zhūwén' yǔ báizì hóngdǐ de 'báiwén'.", en: "By Yin-Yang visual effect, seal carvings divide into red-character 'Zhuwen' (relief) and white-character 'Baiwen' (intaglio).", vi: "Theo hiệu ứng Âm Dương, triện khắc chia thành 'Chu văn' (chữ đỏ nền trắng) và 'Bạch văn' (chữ trắng nền đỏ)." }
    ]
  },
  {
    id: "lantingjixu",
    hanzi: "兰亭集序",
    traditional: "蘭亭集序",
    pinyin: "Lántíng Jí Xù",
    level: "Advanced / Classical Literature & Art",
    pos: "proper n.",
    english: "Preface to the Poems Collected from the Orchid Pavilion (Wang Xizhi, 353 CE)",
    vietnamese: "《Lan Đình Tập Tự》 (Đệ nhất Hành thư thiên hạ năm 353 của Vương Hi Chi thời Đông Tấn)",
    radical: "艹 + 亠 + 隹 + 广",
    components: "兰亭 (đình Lan ở Cốiê Kê, Thiệu Hưng) + 集 (tập thơ xướng họa) + 序 (bài tựa mở đầu).",
    context: "Viết ngày mùng 3 tháng 3 năm Vĩnh Hòa thứ 9 (353 CN) gồm 324 chữ; trong đó có 20 chữ 'Chi' (之) viết theo 20 biến thể hoàn toàn khác nhau, thể hiện đỉnh cao thư pháp Hành thư và cảm thức triết học về sinh tử – thời gian.",
    related: ["王羲之 (Vương Hi Chi – Thư thánh)", "行书 (Hành thư)", "曲水流觞 (Khúc thủy lưu thương)"],
    mnemonic: "Bài tựa (序) tập thơ (集) bên đình hoa lan (兰亭) của Thư thánh Vương Hi Chi.",
    examples: [
      { zh: "东晋王羲之所书《兰亭集序》被历代书家尊为“天下第一行书”。", pinyin: "Dōngjìn Wáng Xīzhī suǒ shū «Lántíng Jí Xù» bèi lìdài shūjiā zūnwéi 'tiānxià dì-yī xíngshū'.", en: "Wang Xizhi's Preface to the Orchid Pavilion from the Eastern Jin is revered across dynasties as the 'First Running Script Under Heaven.'", vi: "Tác phẩm Lan Đình Tập Tự của Vương Hi Chi thời Đông Tấn được tôn là 'Thiên hạ đệ nhất Hành thư'." },
      { zh: "全篇三百二十四字中共有二十个“之”字，笔法各异，无一雷同。", pinyin: "Quánpiān sānbǎi èrshísì zì zhōng gòng yǒu èrshí gè 'zhī' zì, bǐfǎ gè yì, wú yī léitóng.", en: "Among the 324 characters in the piece, the character 'zhi' appears twenty times, each written with distinct brushwork.", vi: "Trong toàn bài 324 chữ có 20 chữ 'Chi' (之), bút pháp biến hóa khác nhau không chữ nào trùng lặp." },
      { zh: "《兰亭集序》既展示了魏晋名士曲水流觞的雅集，也蕴含着对生命短暂的哲思。", pinyin: "«Lántíng Jí Xù» jì zhǎnshì le Wèi-Jìn míngshì qūshuǐ liúshāng de yǎjí, yě yùnhánzhe duì shēngmìng duǎnzàn de zhésī.", en: "The Orchid Pavilion Preface both portrays the Winding Stream gathering of Wei-Jin scholars and reflects philosophically on life's transience.", vi: "Lan Đình Tập Tự vừa tái hiện cuộc tao đàn thả chén rượu bên dòng suối của danh sĩ Ngụy – Tấn, vừa gửi gắm suy tư triết học về kiếp người hữu hạn." }
    ]
  },
  {
    id: "zhixingheyi",
    hanzi: "知行合一",
    traditional: "知行合一",
    pinyin: "Zhīxíng Héyī",
    level: "HSK 6 / Philosophy",
    pos: "idiom / philosophical proposition",
    english: "Unity of Knowledge and Action (core doctrine of Wang Yangming's Philosophy of Mind)",
    vietnamese: "Tri hành hợp nhất (Nhận thức và Hành động là một — mệnh đề cốt lõi của Tâm học Vương Dương Minh)",
    radical: "矢 + 行 + 人 + 一",
    components: "知 (tri thức, lương tri nhận biết) + 行 (thực hành đạo đức thực tiễn) + 合一 (vốn là một thể không tách rời).",
    context: "Vương Dương Minh (1472–1529) đề xuất tại Long Trường (Quý Châu): 'Tri là khởi đầu của Hành, Hành là sự hoàn thành của Tri' (知是行的主意，行是知的功夫), phê phán lối học giáo điều nói mà không làm.",
    related: ["王阳明 (Vương Dương Minh)", "致良知 (Trí lương tri)", "传习录 (Truyền Tập Lục)"],
    mnemonic: "Biết (知) và Làm (行) vốn hợp làm một thể (合一): biết thật sự thì ắt phải hành động.",
    examples: [
      { zh: "王阳明提出“知行合一”，认为只有付诸实践的认知才是真正的“知”。", pinyin: "Wáng Yángmíng tíchū 'zhīxíng héyī', rènwéi zhǐyǒu fùzhū shíjiàn de rènzhī cái shì zhēnzhèng de 'zhī'.", en: "Wang Yangming proposed the 'Unity of Knowledge and Action,' holding that only knowledge put into practice is genuine knowledge.", vi: "Vương Dương Minh đề xuất 'Tri hành hợp nhất', cho rằng chỉ nhận thức được đưa vào thực hành mới là cái biết chân thực." },
      { zh: "《传习录》强调：“知是行的主意，行是知的功夫；知是行之始，行是知之成。”", pinyin: "«Chuánxílù» qiángdiào: 'Zhī shì xíng de zhǔyi, xíng shì zhī de gōngfu; zhī shì xíng zhī shǐ, xíng shì zhī zhī chéng.'", en: "Instructions for Practical Living states: 'Knowledge is the direction of action, action is the effort of knowledge; knowledge is the beginning of action, action is the completion of knowledge.'", vi: "Truyền Tập Lục nhấn mạnh: 'Tri là chủ ý của Hành, Hành là công phu của Tri; Tri là khởi đầu của Hành, Hành là sự hoàn thành của Tri'." },
      { zh: "在现代学术与商业管理中，“知行合一”常被用来强调理论与执行力的结合。", pinyin: "Zài xiàndài xuéshù yǔ shāngyè guǎnlǐ zhōng, 'zhīxíng héyī' cháng bèi yònglái qiángdiào lǐlùn yǔ zhíxínglì de jiéhé.", en: "In modern scholarship and business management, 'Unity of Knowledge and Action' is often invoked to stress combining theory with execution.", vi: "Trong học thuật và quản trị kinh doanh hiện đại, 'Tri hành hợp nhất' thường được dùng để nhấn mạnh sự gắn kết giữa lý thuyết và thực thi." }
    ]
  },
  {
    id: "gewuzhizhi",
    hanzi: "格物致知",
    traditional: "格物致知",
    pinyin: "Géwù Zhìzhī",
    level: "HSK 6 / Philosophy",
    pos: "idiom / philosophical proposition",
    english: "Investigating Things to Extend Knowledge (opening epistemological step in the Great Learning)",
    vietnamese: "Cách vật trí tri (Khảo cứu cùng tận sự vật để đạt tới tri thức — mệnh đề mở đầu sách 《Đại Học》)",
    radical: "木 + 牛 + 至 + 矢",
    components: "格 (đến tận cùng, khảo sát chuẩn mực) + 物 (sự vật, đạo lý) + 致 (đưa đến, đạt tới) + 知 (sự hiểu biết thấu đáo).",
    context: "Xuất phát từ Bát mục của 《Đại Học》. Thời Tống – Minh, Chu Hy giải thích là 'khảo cứu lý của vạn vật khách quan', còn Vương Dương Minh giải thích là 'chỉnh đốn cái sai trong tâm khi tiếp xúc sự vật để phát huy lương tri'. Cuối thời Thanh, cụm từ 'Cách vật' / 'Cách trí' (格致) được dùng để dịch khái niệm Khoa học tự nhiên (Vật lý – Hóa học).",
    related: ["大学八目 (Bát mục Đại Học)", "朱熹理学 (Lý học Chu Hy)", "诚意正心 (Thành ý chính tâm)"],
    mnemonic: "Khảo cứu tận cùng sự vật (格物) để mở rộng tri thức tới chỗ thấu suốt (致知).",
    examples: [
      { zh: "《礼记·大学》提出：“致知在格物，物格而后知至。”", pinyin: "«Lǐjì · Dàxué» tíchū: 'Zhìzhī zài géwù, wù gé érhòu zhī zhì.'", en: "The Great Learning states: 'The extension of knowledge lies in the investigation of things; when things are investigated, knowledge is extended.'", vi: "Sách Đại Học nêu rõ: 'Mở rộng sự biết nằm ở việc khảo cứu sự vật; sự vật được xét kỹ thì sự biết mới đạt tới cùng'." },
      { zh: "朱熹将“格物致知”解释为穷究事物之理，而王阳明则主张端正内心的意念。", pinyin: "Zhū Xī jiāng 'géwù zhìzhī' jiěshì wéi qióngjiū shìwù zhī lǐ, ér Wáng Yángmíng zé zhǔzhāng duānzhèng nèixīn de yìniàn.", en: "Zhu Xi interpreted 'investigating things' as probing the principles in external phenomena, whereas Wang Yangming advocated rectifying one's inner intentions.", vi: "Chu Hy giải thích 'Cách vật trí tri' là xét tận lý lẽ của sự vật, còn Vương Dương Minh chủ trương chỉnh đốn ý niệm trong tâm." },
      { zh: "晚清学者曾用“格致之学”来翻译近代西方的自然科学与物理学。", pinyin: "Wǎn-Qīng xuézhě céng yòng 'gézhì zhī xué' lái fānyì jìndài Xīfāng de zìrán kēxué yǔ wùlǐxué.", en: "Late Qing scholars used the term 'Gezhi learning' to translate modern Western natural sciences and physics.", vi: "Học giả cuối thời Thanh từng dùng thuật ngữ 'Cách trí chi học' để dịch khoa học tự nhiên và vật lý học phương Tây." }
    ]
  },
  {
    id: "jingshizhiyong",
    hanzi: "经世致用",
    traditional: "經世致用",
    pinyin: "Jīngshì Zhìyòng",
    level: "Advanced / Academic Chinese",
    pos: "idiom",
    english: "Statecraft and Practical Utility (scholarship serving real-world social governance)",
    vietnamese: "Kinh thế trí dụng (Học thuật phải phục vụ việc trị nước, kinh bang tế thế và ích lợi thực tiễn)",
    radical: "纟 + 一 + 至 + 用",
    components: "经世 (kinh doanh cai quản việc đời) + 致用 (đem ra ứng dụng thực tế chứ không bàn suông).",
    context: "Khẩu hiệu của phái Thực học cuối Minh đầu Thanh (Cố Viêm Vũ, Hoàng Tông Hy, Vương Phu Chi) và ở Đại Việt (Lê Quý Đôn, Nguyễn Trường Tộ) nhằm phản tỉnh lối học từ chương sáo rỗng.",
    related: ["顾炎武 (Cố Viêm Vũ)", "实学 (Thực học)", "天下兴亡，匹夫有责 (Thiên hạ hưng vong, thất phu hữu trách)"],
    mnemonic: "Học vấn phải lo việc đời (经世) và đem lại công dụng thực tế (致用).",
    examples: [
      { zh: "明末清初思想家顾炎武倡导“经世致用”，反对空谈心性的八股学风。", pinyin: "Míngmò Qīngchū sīxiǎngjiā Gù Yánwǔ chàngdǎo 'jīngshì zhìyòng', fǎnduì kōngtán xīnxìng de bāgǔ xuéfēng.", en: "Late-Ming early-Qing thinker Gu Yanwu championed 'practical statecraft,' opposing empty metaphysical talk and eight-legged scholasticism.", vi: "Nhà tư tưởng cuối Minh đầu Thanh Cố Viêm Vũ đề xướng 'Kinh thế trí dụng', phản đối lối học bát cổ bàn suông tâm tính." },
      { zh: "十八世纪越南学者黎贵惇深受实学精神影响，撰成百科全书式的《芸台类语》。", pinyin: "Shíbā shìjì Yuènán xuézhě Lí Guìdūn shēn shòu shíxué jīngshén yǐngxiǎng, zhuànchéng bǎikē quánshū shì de «Yúntái Lèiyǔ».", en: "Eighteenth-century Vietnamese scholar Le Quy Don embraced practical learning, compiling the encyclopedic Van Dai Loai Ngu.", vi: "Học giả Việt Nam thế kỷ XVIII Lê Quý Đôn thấm nhuần tinh thần Thực học, biên soạn bộ bách khoa thư Vân Đài Loại Ngữ." },
      { zh: "当代人文社科研究同样强调将历史洞察与经世致用的现实关怀相结合。", pinyin: "Dāngdài rénwén shèkē yánjiū tóngyàng qiángdiào jiāng lìshǐ dòngchá yǔ jīngshì zhìyòng de xiànshí guānhuái xiāng jiéhé.", en: "Contemporary humanities and social science research likewise stresses uniting historical insight with practical real-world engagement.", vi: "Nghiên cứu khoa học xã hội và nhân văn đương đại cũng nhấn mạnh kết hợp chiều sâu lịch sử với giá trị ứng dụng thực tiễn." }
    ]
  },
  {
    id: "hetuluoshu",
    hanzi: "河图洛书",
    traditional: "河圖洛書",
    pinyin: "Hétú Luòshū",
    level: "Advanced / Metaphysics & History of Math",
    pos: "proper n.",
    english: "Yellow River Chart and Luo River Writing (classical numerical diagrams and 3x3 Magic Square)",
    vietnamese: "Hà Đồ và Lạc Thư (Đồ hình số học cổ đại biểu thị Ngũ hành Sinh–Thành và Ma phương 3×3 Cửu Cung)",
    radical: "氵 + 囗 + 氵 + 聿",
    components: "河图 (đồ hình trên sông Hoàng Hà: số 1–10 Ngũ hành sinh thành) + 洛书 (văn thư trên sông Lạc: ma phương 3×3 số 1–9 tổng hàng ngang/dọc/chéo đều bằng 15).",
    context: "Nhắc đến trong 《Chu Dịch · Hệ Từ Thượng》 ('Hà xuất Đồ, Lạc xuất Thư, Thánh nhân tắc chi'); là gốc toán học tổ hợp của Cửu Cung phi tinh, Kỳ Môn Độn Giáp và quy hoạch Minh Đường cổ đại.",
    related: ["九宫格 (Ma phương Cửu cung)", "天一生水 (Thiên nhất sinh Thủy)", "戴九履一 (Đái cửu lý nhất)"],
    mnemonic: "Đồ hình sông Hoàng Hà (河图) lập Ngũ hành, Văn thư sông Lạc (洛书) lập Cửu cung ma phương tổng 15.",
    examples: [
      { zh: "《周易·系辞上》记载：“河出图，洛出书，圣人则之。”", pinyin: "«Zhōuyì · Xìcí Shàng» jìzǎi: 'Hé chū tú, Luò chū shū, shèngrén zé zhī.'", en: "The Great Commentary of the Book of Changes records: 'The Yellow River brought forth the Chart, the Luo River brought forth the Writing, and the Sages patterned after them.'", vi: "Chu Dịch · Hệ Từ Thượng chép: 'Sông Hà hiện Đồ, sông Lạc hiện Thư, bậc Thánh nhân noi theo đó làm phép tắc'." },
      { zh: "洛书的“戴九履一，左三右七，二四为肩，六八为足，五居中央”是世界上最早的三阶幻方。", pinyin: "Luòshū de 'dài jiǔ lǚ yī, zuǒ sān yòu qī, èr sì wéi jiān, liù bā wéi zú, wǔ jū zhōngyāng' shì shìjiè shàng zuì zǎo de sānjiē huànfāng.", en: "The Luo Shu's arrangement—9 at top, 1 at bottom, 3 left, 7 right, 2 and 4 as shoulders, 6 and 8 as feet, 5 in the center—is the world's earliest order-3 magic square.", vi: "Cấu trúc 'Đái cửu lý nhất, tả tam hữu thất, nhị tứ vi kiên, lục bát vi túc, ngũ cư trung ương' của Lạc Thư là ma phương bậc 3 sớm nhất thế giới." },
      { zh: "宋代易学图书派将河图洛书视为解释阴阳五行数理结构的核心图式。", pinyin: "Sòngdài Yìxué Túshūpài jiāng Hétú Luòshū shìwéi jiěshì Yīnyáng Wǔxíng shùlǐ jiégòu de héxīn túshì.", en: "The Song dynasty Diagrammatic School of Yi Studies viewed Hetu and Luoshu as core schemas explaining Yin-Yang and Five-Element mathematical structure.", vi: "Phái Đồ Thư Dịch học đời Tống xem Hà Đồ Lạc Thư là sơ đồ cốt lõi giải thích cấu trúc số lý Âm Dương Ngũ Hành." }
    ]
  },
  {
    id: "meihuayishu",
    hanzi: "梅花易数",
    traditional: "梅花易數",
    pinyin: "Méihuā Yìshù",
    level: "Advanced / Metaphysics",
    pos: "proper n.",
    english: "Plum Blossom Numerology (Shao Yong's Song-dynasty I Ching method using modulo-8/6 and Thể–Dụng)",
    vietnamese: "Mai Hoa Dịch Số (Phương pháp lập quẻ Dịch theo Tượng–Số và phân tích Thể–Dụng gắn với Thiệu雍 đời Bắc Tống)",
    radical: "木 + 艹 + 日 + 攵",
    components: "梅花 (điển tích ngắm hoa mai mùa đông trong vườn) + 易数 (phép tính số Tiên thiên Bát quái của Kinh Dịch).",
    context: "Dùng phép chia lấy dư cho 8 (lập Thượng/Hạ quái theo số Tiên thiên: Càn 1, Đoài 2, Ly 3, Chấn 4, Tốn 5, Khảm 6, Cấn 7, Khôn 8) và chia cho 6 (tìm Hào động), phân biệt quẻ Thể (chủ thể) và quẻ Dụng (ngoại cảnh).",
    related: ["邵雍 (Thiệu Ung – Khang Tiết)", "体用生克 (Thể – Dụng sinh khắc)", "先天八卦数 (Số Tiên thiên Bát quái)"],
    mnemonic: "Từ điển tích ngắm hoa mai (梅花) suy ra phép tính số học Kinh Dịch (易数).",
    examples: [
      { zh: "相传北宋邵雍创立《梅花易数》，以先天八卦数理结合体用生克推演事物变化。", pinyin: "Xiāngchuán Běi-Sòng Shào Yōng chuànglì «Méihuā Yìshù», yǐ Xiāntiān Bāguà shùlǐ jiéhé tǐ-yòng shēngkè tuīyǎn shìwù biànhuà.", en: "Traditionally attributed to Northern Song philosopher Shao Yong, Plum Blossom Numerology uses Earlier Heaven trigram numbers and Ti-Yong interactions to model change.", vi: "Tương truyền Thiệu Ung đời Bắc Tống sáng lập Mai Hoa Dịch Số, dùng số Tiên thiên Bát quái kết hợp Thể – Dụng sinh khắc suy diễn biến hóa." },
      { zh: "梅花易数将无动爻之卦定为“体卦”代表自身，有动爻之卦定为“用卦”代表外境。", pinyin: "Méihuā Yìshù jiāng wú dòngyáo zhī guà dìngwéi 'tǐguà' dàibiǎo zìshēn, yǒu dòngyáo zhī guà dìngwéi 'yòngguà' dàibiǎo wàijìng.", en: "Plum Blossom Numerology designates the trigram without a moving line as 'Ti' (Self) and the trigram with a moving line as 'Yong' (External Situation).", vi: "Mai Hoa Dịch Số định quẻ đơn không có hào động là 'Thể quái' đại diện bản thân, quẻ có hào động là 'Dụng quái' đại diện ngoại cảnh." },
      { zh: "学术研究将梅花易数视为宋代象数易学中模运算（Modulo 8与Modulo 6）的典型案例。", pinyin: "Xuéshù yánjiū jiāng Méihuā Yìshù shìwéi Sòngdài Xiàngshù Yìxué zhōng mó yùnsuàn (Modulo 8 yǔ Modulo 6) de diǎnxíng ànlì.", en: "Academic research views Plum Blossom Numerology as a classic example of modulo-8 and modulo-6 arithmetic within Song image-number Yi studies.", vi: "Nghiên cứu học thuật xem Mai Hoa Dịch Số là ví dụ điển hình về phép toán đồng dư (Modulo 8 và Modulo 6) trong Tượng số Dịch học thời Tống." }
    ]
  },
  {
    id: "bingjian",
    hanzi: "冰鉴",
    traditional: "冰鑑",
    pinyin: "Bīngjiàn",
    level: "Advanced / Classical Literature & Leadership",
    pos: "proper n.",
    english: "The Ice Mirror (Bingjian, classical Qing treatise on character observation and talent evaluation)",
    vietnamese: "《Băng Giám》 (Tác phẩm cổ điển thời Thanh về thuật quan sát khí chất và thức nhận nhân tài, thường gắn với Tăng Quốc Phiên)",
    radical: "冫 + 金",
    components: "冰 (băng tuyết trong suốt không bụi bẩn) + 鉴 (tấm gương đồng soi chiếu thần thái và phẩm chất con người).",
    context: "Chia làm 7 chương: Thần cốt, Cương nhu, Dung mạo, Tình thái, Tu mi, Thanh âm, Khí sắc. Câu mở đầu nổi tiếng: 'Tà chính khán nhãn, chân ngụy khán thần, công danh khán khí khái, sự nghiệp khán tinh thần' (邪正看眼，真伪看神，功名看气概，事业看精神).",
    related: ["曾国藩 (Tăng Quốc Phiên)", "知人善任 (Biết người khéo dùng)", "神骨气色 (Thần cốt khí sắc)"],
    mnemonic: "Tấm gương sáng trong như băng (冰鉴) để soi xét khí chất, thần thái và tài đức con người.",
    examples: [
      { zh: "《冰鉴》开篇提出：“邪正看眼，真伪看神，功名看气概，事业看精神。”", pinyin: "«Bīngjiàn» kāipiān tíchū: 'Xié-zhèng kàn yǎn, zhēn-wěi kàn shén, gōngmíng kàn qìgài, shìyè kàn jīngshén.'", en: "The Ice Mirror opens with: 'Look to the eyes for uprightness or deceit, to the spirit for authenticity, to bearing for achievement, and to vitality for enterprise.'", vi: "Sách Băng Giám mở đầu viết: 'Tà chính xem ở mắt, thật giả xem ở thần, công danh xem ở khí khái, sự nghiệp xem ở tinh thần'." },
      { zh: "传统识人学强调眼神清澈安定与言行一致，而非仅仅拘泥于五官外貌。", pinyin: "Chuántǒng shírénxué qiángdiào yǎnshén qīngchè āndìng yǔ yánxíng yīzhì, ér fēi jǐnjǐn jūnì yú wǔguān wàimào.", en: "Traditional character observation stresses clear, steady eyes and consistency between words and deeds rather than mere facial features.", vi: "Thuật thức nhân truyền thống nhấn mạnh ánh mắt trong sáng điềm tĩnh và lời nói đi đôi việc làm chứ không câu nệ ngoại hình." },
      { zh: "现代管理学者阅读《冰鉴》时，多将其作为研究东亚传统领导力与人才考察史的文献。", pinyin: "Xiàndài guǎnlǐ xuézhě yuèdú «Bīngjiàn» shí, duō jiāng qí zuòwéi yánjiū Dōngyà chuántǒng lǐngdǎolì yǔ réncái kǎochá shǐ de wénxiàn.", en: "Modern management scholars read The Ice Mirror as a historical text on traditional East Asian leadership and talent assessment.", vi: "Các học giả quản trị hiện đại đọc Băng Giám như một tư liệu lịch sử về nghệ thuật lãnh đạo và khảo sát nhân sự Đông Á." }
    ]
  },
  {
    id: "tongxingyiyi",
    hanzi: "同形异义词",
    traditional: "同形異義詞",
    pinyin: "Tóngxíng Yìyì Cí",
    level: "HSK 5-6 / Linguistics & Translation",
    pos: "n. phrase",
    english: "False Friends / Homographic Heteronyms (Sino-Vietnamese words sharing Hanzi form but diverging in meaning)",
    vietnamese: "Từ đồng hình dị nghĩa Hán – Việt ('Bạn giả dịch thuật': cùng mặt chữ Hán nhưng nghĩa tiếng Trung hiện đại khác hẳn nghĩa Hán-Việt)",
    radical: "冂 + 彡 + 巳 + 丶 + 讠",
    components: "同形 (cùng hình dạng chữ Hán gốc) + 异义 (khác biệt ý nghĩa hoặc sắc thái ngữ dụng) + 词 (từ vựng).",
    context: "hiện tượng cực kỳ quan trọng khi sinh viên Việt Nam dịch hợp đồng kinh tế và văn bản học thuật Trung – Việt. Ví dụ: 困难 (khó khăn ≠ khốn nạn), 检讨 (tự kiểm điểm ≠ kiểm thảo), 合同 (hợp đồng ≠ hợp đồng tác chiến), 书记 (bí thư ≠ thư ký), 经理 (giám đốc ≠ kinh lý).",
    related: ["汉越音 (Âm Hán-Việt)", "语义演变 (Biến đổi ngữ nghĩa)", "商务翻译 (Dịch thuật thương mại)"],
    mnemonic: "Mặt chữ giống nhau (同形) nhưng nghĩa đã rẽ sang hướng khác (异义) giữa tiếng Trung và âm Hán-Việt.",
    examples: [
      { zh: "汉越“同形异义词”是越南学习者在进行商务与法律翻译时最容易踩中的陷阱。", pinyin: "Hàn-Yuè 'tóngxíng yìyì cí' shì Yuènán xuéxízhě zài jìnxíng shāngwù yǔ fǎlǜ fānyì shí zuì róngyì cǎizhòng de xiànjǐng.", en: "Sino-Vietnamese false friends are the most common pitfalls for Vietnamese learners in business and legal translation.", vi: "Từ 'đồng hình dị nghĩa' Hán – Việt là cái bẫy dễ mắc phải nhất của người học Việt Nam khi dịch thương mại và pháp lý." },
      { zh: "现代汉语中的“经理”通常指公司部门或企业负责人，而非越南语古义中的“经略”。", pinyin: "Xiàndài Hànyǔ zhōng de 'jīnglǐ' tōngcháng zhǐ gōngsī bùmén huò qǐyè fùzérén, ér fēi Yuènányǔ gǔyì zhōng de 'jīnglüè'.", en: "In modern Chinese, 'jingli' denotes a company or department manager, distinct from archaic Sino-Vietnamese usages.", vi: "Từ 'Kinh lý' (经理) trong tiếng Trung hiện đại nghĩa là Giám đốc / Quản lý bộ phận công ty." },
      { zh: "系统整理汉越同形异义词对比表，能够显著提升双语合同审核的准确度。", pinyin: "Xìtǒng zhěnglǐ Hàn-Yuè tóngxíng yìyì cí duìbǐbiǎo, nénggòu xiǎnzhù tíshēng shuāngyǔ hétóng shěnhé de zhǔnquèdù.", en: "Systematically compiling Sino-Vietnamese false-friend tables significantly improves accuracy in bilingual contract review.", vi: "Hệ thống hóa bảng đối chiếu từ đồng hình dị nghĩa Hán – Việt giúp nâng cao rõ rệt độ chính xác khi rà soát hợp đồng song ngữ." }
    ]
  },
  {
    id: "dingjin",
    hanzi: "定金与订金",
    traditional: "定金與訂金",
    pinyin: "Dìngjīn yǔ Dìngjīn",
    level: "HSK 6 / Business & Contract Law",
    pos: "n. phrase",
    english: "Statutory Earnest Money (定金, non-refundable / double penalty) vs. Advance Deposit (订金, refundable prepayment)",
    vietnamese: "Tiền đặt cọc pháp định (定金 – phạt cọc gấp đôi theo Luật Dân sự TQ) vs. Tiền ứng trước đặt hàng (订金 – có thể hoàn trả)",
    radical: "宀 + 金 + 讠",
    components: "定金 (chữ Định 定 = ấn định ràng buộc pháp lý theo Điều 586–587 Bộ luật Dân sự TQ) vs 订金 (chữ Đính 订 có bộ Ngôn 讠 = thỏa thuận đặt hàng ứng trước).",
    context: "Hai từ phát âm hoàn toàn giống nhau (`dìngjīn` thanh 4) nhưng hiệu lực pháp lý trái ngược trong Hợp đồng mua bán hàng hóa Trung Quốc: nếu viết `定金`, bên mua违约 (vi phạm) mất cọc, bên bán vi phạm phải đền gấp đôi; nếu viết `订金`, pháp luật chỉ coi là khoản trả trước (预付款) phải hoàn lại nếu giao dịch hủy.",
    related: ["违约责任 (Trách nhiệm vi phạm hợp đồng)", "预付款 (Khoản thanh toán trả trước)", "民法典 (Bộ luật Dân sự Trung Quốc)"],
    mnemonic: "Có mái nhà 宀 (定金) là chốt cứng phạt cọc gấp đôi; có lời nói 讠 (订金) là tiền đặt trước có thể thương lượng hoàn lại.",
    examples: [
      { zh: "在中越贸易合同中，“定金”受中国《民法典》定金罚则约束，而“订金”视为预付款。", pinyin: "Zài Zhōng-Yuè màoyì hétóng zhōng, 'dìngjīn (定金)' shòu Zhōngguó «Mínfǎdiǎn» dìngjīn fázé yuēshù, ér 'dìngjīn (订金)' shìwéi yùfùkuǎn.", en: "In China-Vietnam trade contracts, '定金' is bound by the Civil Code's earnest-money forfeiture rule, whereas '订金' is treated as an advance payment.", vi: "Trong hợp đồng thương mại Trung – Việt, '定金' chịu chế tài phạt cọc của Bộ luật Dân sự TQ, còn '订金' được coi là tiền ứng trước." },
      { zh: "按照定金罚则，给付定金的一方不履行债务的无权要求返还定金，收受方违约应当双倍返还。", pinyin: "Ànzhào dìngjīn fázé, jǐfù dìngjīn de yīfāng bù lǚxíng zhàiwù de wúquán yāoqiú fǎnhuán dìngjīn, shōushòufāng wéiyuē yīngdāng shuāngbèi fǎnhuán.", en: "Under the earnest-money rule, a defaulting payer forfeits the deposit, while a defaulting recipient must refund double.", vi: "Theo quy tắc phạt cọc, bên đặt '定金' vi phạm sẽ mất cọc, còn bên nhận cọc vi phạm phải hoàn trả gấp đôi." },
      { zh: "外贸采购人员在向广东或浙江工厂打款前，务必核对发票与合同上的“定”字写法。", pinyin: "Wàimào cǎigòu rényuán zài xiàng Guǎngdōng huò Zhèjiāng gōngchǎng dǎkuǎn qián, wùbì héduì fāpiào yǔ hétóng shàng de 'dìng' zì xiěfǎ.", en: "Foreign trade buyers must verify which character ('定' or '订') is written on the invoice and contract before wiring funds to Guangdong or Zhejiang factories.", vi: "Nhân sự thu mua ngoại thương trước khi chuyển khoản cho xưởng Quảng Đông hay Chiết Giang phải kiểm tra kỹ chữ '定' hay '订' trên hợp đồng." }
    ]
  },
  {
    id: "xinyongzheng",
    hanzi: "信用证",
    traditional: "信用證",
    pinyin: "Xìnyòngzhèng",
    level: "HSK 5-6 / International Trade",
    pos: "n.",
    english: "Letter of Credit (L/C — bank-guaranteed documentary payment instrument under UCP 600)",
    vietnamese: "Thư tín dụng (L/C — phương thức thanh toán quốc tế ngân hàng cam kết trả tiền khi bộ chứng từ phù hợp)",
    radical: "亻 + 用 + 讠",
    components: "信用 (tín dụng, uy tín bảo lãnh của ngân hàng) + 证 (chứng thư cam kết thanh toán).",
    context: "Vận hành theo Quy tắc Thực hành Thống nhất về Tín dụng Chứng từ UCP 600 của Phòng Thương mại Quốc tế (ICC). Thường dùng cho các lô hàng máy móc, nguyên liệu kim ngạch lớn giữa Trung Quốc và Việt Nam.",
    related: ["不可撤销信用证 (Irrevocable L/C)", "电汇 T/T (Chuyển tiền bằng điện)", "单证相符 (Chứng từ phù hợp hoàn toàn)"],
    mnemonic: "Chứng thư (证) dùng uy tín ngân hàng (信用) để bảo đảm người bán giao hàng đúng chứng từ là nhận được tiền.",
    examples: [
      { zh: "在大宗机械与原料进口贸易中，双方常采用不可撤销即期信用证（Irrevocable Sight L/C）结算。", pinyin: "Zài dàzōng jīxiè yǔ yuánliào jìnkǒu màoyì zhōng, shuāngfāng cháng cǎiyòng bùkě chèxiāo jíqī xìnyòngzhèng jiésuàn.", en: "In bulk machinery and raw material imports, parties often settle payments via an Irrevocable Sight Letter of Credit.", vi: "Trong nhập khẩu máy móc và nguyên liệu lớn, hai bên thường thanh toán bằng Thư tín dụng trả ngay không hủy ngang." },
      { zh: "信用证业务遵循“单单相符、单证相符”原则，银行只审查单据表面是否合规。", pinyin: "Xìnyòngzhèng yèwù zūnxún 'dāndān xiāngfú, dānzhèng xiāngfú' yuánzé, yínháng zhǐ shěnchá dānjù biǎomiàn shìfǒu héguī.", en: "L/C operations follow the doctrine of strict documentary compliance; banks examine only whether documents comply on their face.", vi: "Nghiệp vụ L/C tuân thủ nguyên tắc 'chứng từ khớp nhau và khớp L/C'; ngân hàng chỉ kiểm tra tính hợp lệ bề mặt bộ chứng từ." },
      { zh: "审证时必须重点核对装运期、交单期以及原产地证（Form E）的特殊条款。", pinyin: "Shěnzhèng shí bìxū zhòngdiǎn héduì zhuāngyùnqī, jiāodānqī yǐjí yuánchǎndìzhèng (Form E) de tèshū tiáokuǎn.", en: "When reviewing an L/C, one must carefully check the latest shipment date, presentation period, and special clauses for Form E.", vi: "Khi kiểm tra L/C phải đối chiếu kỹ ngày giao hàng muộn nhất, thời hạn xuất trình chứng từ và điều khoản riêng về C/O Form E." }
    ]
  },
  {
    id: "fahuoren",
    hanzi: "发货人与收货人",
    traditional: "發貨人與收貨人",
    pinyin: "Fāhuòrén yǔ Shōuhuòrén",
    level: "HSK 5 / Logistics & Customs",
    pos: "n. phrase",
    english: "Shipper / Consignor (发货人) and Consignee (收货人) on Bills of Lading and Customs Declarations",
    vietnamese: "Người gửi hàng / Người xuất khẩu (Shipper) và Người nhận hàng (Consignee) trên Vận đơn & Tờ khai hải quan",
    radical: "又 + 贝 + 人 + 攵",
    components: "发货人 (bên phát hàng giao cho người chuyên chở) + 收货人 (bên có quyền nhận hàng tại cảng đích).",
    context: "Trường thông tin bắt buộc đối chiếu giữa Ô số 1, Ô số 2 của C/O Form E với Vận đơn đường biển (Bill of Lading) và Tờ khai VNACCS/VCIS.",
    related: ["提单 B/L (Vận đơn)", "通知方 Notify Party (Bên thông báo)", "第三方发票 (Hóa đơn bên thứ ba)"],
    mnemonic: "Người gửi hàng đi (发货人 – Shipper) và người nhận hàng về (收货人 – Consignee).",
    examples: [
      { zh: "海运提单上的发货人（Shipper）、收货人（Consignee）与通知方（Notify Party）必须准确填写。", pinyin: "Hǎiyùn tídān shàng de fāhuòrén (Shipper), shōuhuòrén (Consignee) yǔ tōngzhīfāng (Notify Party) bìxū zhǔnquè tiánxiě.", en: "The Shipper, Consignee, and Notify Party on an ocean Bill of Lading must be filled in accurately.", vi: "Người gửi hàng, Người nhận hàng và Bên thông báo trên vận đơn đường biển phải được khai báo chính xác." },
      { zh: "申请Form E原产地证时，第一栏发货人名称应与出口报关单保持一致。", pinyin: "Shēnqǐng Form E yuánchǎndìzhèng shí, dì-yī lán fāhuòrén míngchēng yīng yǔ chūkǒu bàoguāndān bǎochí yīzhì.", en: "When applying for a Form E Certificate of Origin, the Exporter name in Box 1 must match the export customs declaration.", vi: "Khi xin cấp C/O Form E, tên Người xuất khẩu tại Ô số 1 phải thống nhất với tờ khai hải quan xuất khẩu." },
      { zh: "若提单收货人写为“凭指示”（To Order），则需经合法背书后方可提货。", pinyin: "Ruò tídān shōuhuòrén xiěwéi 'Píng zhǐshì' (To Order), zé xū jīng héfǎ bèishū hòu fāngkě tíhuò.", en: "If the B/L Consignee is made out 'To Order,' proper endorsement is required before cargo release.", vi: "Nếu mục Người nhận hàng trên vận đơn ghi 'To Order' (Theo lệnh), cần phải ký hậu hợp pháp mới được nhận hàng." }
    ]
  },
  {
    id: "zhishichanquan",
    hanzi: "知识产权",
    traditional: "知識產權",
    pinyin: "Zhīshi Chǎnquán",
    level: "HSK 5-6 / Business & Law",
    pos: "n.",
    english: "Intellectual Property Rights (IPR — trademarks, patents, copyrights, and trade secrets)",
    vietnamese: "Quyền Sở hữu Trí tuệ (SHTT — nhãn hiệu thương mại, bằng sáng chế, bản quyền và bí mật kinh doanh)",
    radical: "矢 + 讠 + 生 + 木",
    components: "知识 (tri thức, sáng tạo trí tuệ) + 产权 (quyền tài sản được pháp luật bảo hộ).",
    context: "Trong kinh doanh với Trung Quốc, doanh nghiệp cần lưu ý đăng ký nhãn hiệu sớm tại CNIPA theo nguyên tắc First-to-File và ký thỏa thuận NNN (Non-Disclosure, Non-Use, Non-Circumvention) bằng tiếng Trung có hiệu lực tại tòa án Trung Quốc khi thuê gia công OEM.",
    related: ["商标注册 (Đăng ký nhãn hiệu)", "专利 (Bằng sáng chế)", "保密协议 NNN (Thỏa thuận bảo mật – không sử dụng – không qua mặt)"],
    mnemonic: "Quyền tài sản (产权) đối với các thành quả sáng tạo trí tuệ (知识).",
    examples: [
      { zh: "越南农食品牌进入中国市场前，应优先在中国国家知识产权局注册中文商标。", pinyin: "Yuènán nóngshí pǐnpái jìnrù Zhōngguó shìchǎng qián, yīng yōuxiān zài Zhōngguó Guójiā Zhīshi Chǎnquán Jú zhùcè Zhōngwén shāngbiāo.", en: "Before entering the Chinese market, Vietnamese agri-food brands should register their Chinese trademarks with CNIPA first.", vi: "Trước khi vào thị trường Trung Quốc, thương hiệu nông sản thực phẩm Việt Nam nên ưu tiên đăng ký nhãn hiệu tiếng Trung tại Cục SHTT Quốc gia." },
      { zh: "在委托OEM工厂生产时，签署受中国法律管辖的NNN协议能有效保护知识产权。", pinyin: "Zài wěituō OEM gōngchǎng shēngchǎn shí, qiānshǔ shòu Zhōngguó fǎlǜ guǎnxiá de NNN xiéyì néng yǒuxiào bǎohù zhīshi chǎnquán.", en: "When commissioning OEM factories, signing an NNN agreement governed by Chinese law effectively protects intellectual property.", vi: "Khi thuê xưởng OEM gia công, ký thỏa thuận NNN chịu sự điều chỉnh của luật Trung Quốc giúp bảo vệ hiệu quả quyền sở hữu trí tuệ." },
      { zh: "海关知识产权备案制度有助于在口岸环节拦截侵权假冒商品。", pinyin: "Hǎiguān zhīshi chǎnquán bèi'àn zhìdù yǒuzhùyú zài kǒu'àn huánjié lánjié qīnquán jiǎmào shāngpǐn.", en: "The customs IPR recordation system helps intercept infringing and counterfeit goods right at border ports.", vi: "Chế độ đăng ký bảo hộ SHTT tại hải quan giúp chặn bắt hàng giả, hàng xâm phạm nhãn hiệu ngay tại cửa khẩu." }
    ]
  },
  {
    id: "xiaodankuaifan",
    hanzi: "小单快反",
    traditional: "小單快反",
    pinyin: "Xiǎodān Kuàifǎn",
    level: "Advanced / Supply Chain & E-Commerce",
    pos: "n. phrase",
    english: "Small-Batch Quick-Response Manufacturing (agile C2M supply chain model pioneered in apparel/e-commerce)",
    vietnamese: "Đơn nhỏ phản ứng nhanh (Mô hình sản xuất lô nhỏ 100–200 sản phẩm để thử thị trường rồi mới tăng tốc đặt hàng tự động)",
    radical: "小 + 十 + 忄 + 又",
    components: "小单 (đơn đặt hàng thử nghiệm số lượng rất nhỏ, MOQ thấp) + 快反 (快速反应 — phản ứng bù hàng cực nhanh theo dữ liệu bán hàng thực tế).",
    context: "Cốt lõi vận hành của SHEIN, Temu và các cụm xưởng may mặc Quảng Châu (Phiên Ngung) – Chiết Giang: giảm thiểu rủi ro tồn kho hàng lỗi mốt và rút ngắn chu kỳ từ bản vẽ thiết kế đến lên kệ xuống còn 7–10 ngày.",
    related: ["柔性供应链 (Chuỗi cung ứng linh hoạt)", "最低起订量 MOQ (Số lượng đặt hàng tối thiểu)", "跨境电商 (TMĐT xuyên biên giới)"],
    mnemonic: "Đặt đơn thử nghiệm thật nhỏ (小单) rồi phản ứng sản xuất hàng loạt cực nhanh (快反) khi dữ liệu báo bán chạy.",
    examples: [
      { zh: "“小单快反”模式通过首单生产一两百件测试市场反应，爆款再自动追加大单。", pinyin: "'Xiǎodān kuàifǎn' móshì tōngguò shǒudān shēngchǎn yī-liǎngbǎi jiàn cèshì shìchǎng fǎnyìng, bàokuǎn zài zìdòng zhuījiā dàdān.", en: "The 'small-batch quick-response' model tests market demand with initial runs of 100–200 units, automatically reordering winning items in bulk.", vi: "Mô hình 'đơn nhỏ phản ứng nhanh' sản xuất lô đầu 100–200 chiếc để thử thị trường, mẫu bán chạy mới tự động đặt thêm đơn lớn." },
      { zh: "珠三角柔性服装供应链依靠数字化系统实现了七天内从打样到上架。", pinyin: "Zhūsānjiǎo róuxìng fúzhuāng gōngyìngliàn yīkào shùzìhuà xìtǒng shíxiàn le qī tiān nèi cóng dǎyàng dào shàngjià.", en: "The Pearl River Delta's flexible apparel supply chain uses digital ERP systems to go from sampling to listing within seven days.", vi: "Chuỗi cung ứng may mặc linh hoạt vùng Châu Giang dựa vào hệ thống số hóa để đưa sản phẩm từ làm mẫu lên kệ trong vòng 7 ngày." },
      { zh: "这种模式大幅降低了传统零售的库存积压风险，对工厂排产协同提出了更高要求。", pinyin: "Zhè zhǒng móshì dàfú jiàngdī le chuántǒng língshòu de kùcún jīyā fēngxiǎn, duì gōngchǎng páichǎn xiétóng tíchū le gèng gāo yāoqiú.", en: "This model drastically reduces traditional retail inventory glut while demanding tighter production scheduling from factories.", vi: "Mô hình này giảm mạnh rủi ro tồn kho của bán lẻ truyền thống, đồng thời đòi hỏi năng lực điều độ xưởng rất cao." }
    ]
  },
  {
    id: "yinfa",
    hanzi: "银发经济",
    traditional: "銀髮經濟",
    pinyin: "Yínfà Jīngjì",
    level: "HSK 5-6 / Contemporary Society & Economy",
    pos: "n. phrase",
    english: "Silver Economy / Aging-Society Economy (healthcare, wellness, smart eldercare, and senior tourism)",
    vietnamese: "Kinh tế Tóc bạc (Nền kinh tế phục vụ dân số cao tuổi: y tế dưỡng lão, thiết bị thông minh và du lịch nghỉ dưỡng)",
    radical: "钅 + 又 + 纟 + 氵",
    components: "银发 (mái tóc bạc trắng của người cao tuổi) + 经济 (hệ sinh thái kinh tế – dịch vụ – sản phẩm).",
    context: "Trung Quốc có hơn 300 triệu người từ 60 tuổi trở lên; Kinh tế Tóc bạc đang tái định hình nhu cầu thực phẩm dinh dưỡng, dược liệu Đông y dưỡng sinh, du lịch trú đông (như từ Đông Bắc/Bắc Kinh xuống Vân Nam, Hải Nam, Quảng Tây và Việt Nam).",
    related: ["老龄化社会 (Xã hội già hóa)", "康养旅游 (Du lịch dưỡng sinh chăm sóc sức khỏe)", "适老化改造 (Cải tạo thân thiện người cao tuổi)"],
    mnemonic: "Ngành kinh tế (经济) chăm sóc thế hệ mái đầu bạc (银发).",
    examples: [
      { zh: "随着人口结构变化，银发经济已成为中国医疗健康与服务消费的重要增长点。", pinyin: "Suízhe rénkǒu jiégòu biànhuà, yínfà jīngjì yǐ chéngwéi Zhōngguó yīliáo jiànkāng yǔ fúwù xiāofèi de zhòngyào zēngzhǎngdiǎn.", en: "With shifting demographics, the silver economy has become a major growth engine for Chinese healthcare and service consumption.", vi: "Cùng với sự thay đổi cơ cấu dân số, kinh tế tóc bạc đã trở thành động lực tăng trưởng lớn của ngành y tế và dịch vụ tiêu dùng Trung Quốc." },
      { zh: "许多退休群体流行“候鸟式康养”，冬季前往云南、海南或东南亚旅居。", pinyin: "Xǔduō tuìxiū qúntǐ liúxíng 'hòuniǎoshì kāngyǎng', dōngjì qiánwǎng Yúnnán, Hǎinán huò Dōngnányà lǚjū.", en: "Many retirees embrace 'migratory-bird wellness living,' traveling to Yunnan, Hainan, or Southeast Asia for the winter.", vi: "Nhiều người nghỉ hưu chuộng mô hình 'nghỉ dưỡng chim di cư', mùa đông đến Vân Nam, Hải Nam hoặc Đông Nam Á lưu trú." },
      { zh: "手机应用与公共设施的“适老化改造”体现了对老年群体数字包容的关怀。", pinyin: "Shǒujī yìngyòng yǔ gōnggòng shèshī de 'shìlǎohuà gǎizào' tǐxiàn le duì lǎonián qúntǐ shùzì bāoróng de guānhuái.", en: "Age-friendly adaptations in mobile apps and public infrastructure reflect care for digital inclusion of seniors.", vi: "Việc 'cải tạo thân thiện với người cao tuổi' trên ứng dụng di động và hạ tầng công cộng thể hiện sự quan tâm hòa nhập số." }
    ]
  },
  {
    id: "feiyi",
    hanzi: "非物质文化遗产",
    traditional: "非物質文化遺產",
    pinyin: "Fēiwùzhì Wénhuà Yíchǎn",
    level: "HSK 5-6 / Culture & Heritage",
    pos: "n. phrase",
    english: "Intangible Cultural Heritage (ICH — traditional crafts, performing arts, rituals, and knowledge systems)",
    vietnamese: "Di sản Văn hóa Phi vật thể (Viết tắt là 'Phi di' 非遗: kỹ nghệ thủ công, lễ hội, âm nhạc, thư pháp, trà đạo...)",
    radical: "非 + 牛 + 文 + 辶",
    components: "非物质 (phi vật chất, sống động qua con người và kỹ nghệ) + 文化遗产 (di sản văn hóa truyền thừa qua các thế hệ). Thường viết tắt là 非遗 (Fēiyí).",
    context: "Trung Quốc hiện đứng đầu thế giới về số lượng Di sản Văn hóa Phi vật thể được UNESCO ghi danh (44 di sản tính đến cuối 2024, bao gồm Tết Nguyên Đán, Trà đạo, Thư pháp, Triện khắc, Côn khúc, Kinh kịch, 24 Tiết khí, Châm cứu Đông y).",
    related: ["非遗传承人 (Nghệ nhân truyền thừa di sản)", "二十四节气 (24 Tiết khí)", "工匠精神 (Tinh thần nghệ nhân)"],
    mnemonic: "Di sản văn hóa (文化遗产) lưu truyền qua tri thức và bàn tay con người bên cạnh các vật thể hữu hình (非物质).",
    examples: [
      { zh: "中国是世界上拥有联合国教科文组织“非物质文化遗产”名录项目最多的国家。", pinyin: "Zhōngguó shì shìjiè shàng yōngyǒu Liánhéguó Jiàokēwén Zǔzhī 'Fēiwùzhì Wénhuà Yíchǎn' mínglù xiàngmù zuì duō de guójiā.", en: "China holds the world's largest number of items inscribed on UNESCO's Intangible Cultural Heritage lists.", vi: "Trung Quốc là quốc gia có số lượng hạng mục trong danh sách Di sản Văn hóa Phi vật thể UNESCO nhiều nhất thế giới." },
      { zh: "“春节——中国人庆祝传统新年的社会实践”于2024年成功列入人类非遗代表作名录。", pinyin: "'Chūnjié — Zhōngguórén qìngzhù chuántǒng xīnnián de shèhuì shíjiàn' yú 2024 nián chénggōng lièrù Rénlèi Fēiyí Dàibiǎozuò Mínglù.", en: "'Spring Festival, social practices of the Chinese people in celebration of the traditional new year' was inscribed on UNESCO's Representative List in 2024.", vi: "'Tết Nguyên Đán – thực hành xã hội mừng năm mới truyền thống' đã được ghi danh vào Danh sách Di sản Phi vật thể Đại diện Nhân loại năm 2024." },
      { zh: "越来越多年轻消费者热衷体验泉州簪花、漆扇与苏绣等“非遗”手作。", pinyin: "Yuèláiyuè duō niánqīng xiāofèizhě rèzhōng tǐyàn Quánzhōu zānhuā, qīshàn yǔ Sūxiù děng 'fēiyí' shǒuzuò.", en: "Growing numbers of young consumers enthusiastically experience intangible heritage crafts like Quanzhou floral headpieces, lacquer fans, and Suzhou embroidery.", vi: "Ngày càng nhiều người trẻ hào hứng trải nghiệm thủ công di sản phi vật thể như cài hoa Tuyền Châu, quạt sơn mài và thêu Tô Châu." }
    ]
  },
  {
    id: "zhongoubanlie",
    hanzi: "中欧班列",
    traditional: "中歐班列",
    pinyin: "Zhōng-Ōu Bānliè",
    level: "HSK 5-6 / Logistics & Trade",
    pos: "n. phrase",
    english: "China–Europe Railway Express (transcontinental container freight rail network across Eurasia)",
    vietnamese: "Đoàn tàu Liên vận Trung – Âu (Mạng lưới tàu hỏa chở container xuyên lục địa Á – Âu và kết nối đường sắt Trung – Việt)",
    radical: "丨 + 欠 + 王 + 刂",
    components: "中欧 (Trung Quốc – Châu Âu) + 班列 (đoàn tàu container chạy theo lịch trình tuyến cố định).",
    context: "Khởi phát từ Trùng Khánh, Thành Đô, Trịnh Châu, Tây An, Nghĩa Ô đi qua Tân Cương / Nội Mông tới Đức, Ba Lan, Tây Ban Nha; hiện nay kết nối trực tiếp với tuyến đường sắt liên vận quốc tế Việt – Trung (Yên Viên / Đồng Đăng – Bằng Tường – Nam Ninh – Trùng Khánh).",
    related: ["国际铁路联运 (Đường sắt liên vận quốc tế)", "陆海新通道 (Hành lang Thương mại Đất – Biển Mới)", "集装箱运输 (Vận tải container)"],
    mnemonic: "Đoàn tàu chạy theo lịch cố định (班列) nối liền Trung Quốc với Châu Âu (中欧).",
    examples: [
      { zh: "中欧班列运输时间约为海运的三分之一，运输成本仅为空运的五分之一。", pinyin: "Zhōng-Ōu bānliè yùnshū shíjiān yuē wéi hǎiyùn de sānfēn zhī yī, yùnshū chéngběn jǐn wéi kōngyùn de wǔfēn zhī yī.", en: "The China–Europe Railway Express takes about one-third the transit time of ocean freight at roughly one-fifth the cost of air freight.", vi: "Tàu liên vận Trung – Âu có thời gian vận chuyển chỉ bằng 1/3 đường biển và chi phí chỉ bằng 1/5 đường hàng không." },
      { zh: "越南电子产品与农副产品可通过“河内—凭祥—重庆”联运班列转接中欧班列。", pinyin: "Yuènán diànzǐ chǎnpǐn yǔ nóng-fù chǎnpǐn kě tōngguò 'Hénèi—Píngxiáng—Chóngqìng' liányùn bānliè zhuǎnjiē Zhōng-Ōu bānliè.", en: "Vietnamese electronics and agricultural goods can connect to the China–Europe Express via the Hanoi–Pingxiang–Chongqing intermodal rail link.", vi: "Hàng điện tử và nông sản Việt Nam có thể nối chuyến tàu Trung – Âu qua tuyến liên vận Hà Nội – Bằng Tường – Trùng Khánh." },
      { zh: "多式联运提单与海关通关便利化正推动欧亚大陆桥物流网络持续扩容。", pinyin: "Duōshì liányùn tídān yǔ hǎiguān tōngguān biànlìhuà zhèng tuīdòng Ōu-Yà dàlùqiáo wùliú wǎngluò chíxù kuòróng.", en: "Multimodal bills of lading and customs facilitation are driving continuous expansion of the Eurasian land-bridge logistics network.", vi: "Vận đơn vận tải đa phương thức và thuận lợi hóa thông quan đang thúc đẩy mạng lưới cầu lục địa Á – Âu mở rộng." }
    ]
  },
  {
    id: "hetong",
    hanzi: "合同",
    traditional: "合同",
    pinyin: "Hétong",
    level: "HSK 4-5 / Business & Legal",
    pos: "n.",
    english: "Contract / Agreement (legally binding commercial covenant)",
    vietnamese: "Hợp đồng (giao kết kinh tế – thương mại có hiệu lực pháp lý)",
    radical: "口 + 冂",
    components: "合 (hợp lại, nhất trí ý chí) + 同 (cùng nhau, bình đẳng). Trong thương mại Trung Quốc bắt buộc đóng dấu Công chương (公章).",
    context: "Theo Luật Dân sự Trung Quốc, hợp đồng thương mại B2B chỉ có giá trị pháp lý cao nhất khi được đóng dấu Công chương tròn đỏ (公章 Gōngzhāng) hoặc Dấu Hợp đồng chuyên dụng (合同专用章) đóng giáp lai qua các trang.",
    related: ["公章 (Công chương)", "违约金 (Tiền phạt vi phạm hợp đồng)", "仲裁条款 (Điều khoản trọng tài)"],
    mnemonic: "Hai bên cùng họp lại (合) và đồng lòng (同) ký kết cam kết.",
    examples: [
      { zh: "签署涉外商务合同时，必须核对对方营业执照与公章真实性。", pinyin: "Qiānshǔ shèwài shāngwù hétong shí, bìxū héduì duìfāng yíngyè zhízhào yǔ gōngzhāng zhēnxíxìng.", en: "When signing cross-border commercial contracts, one must verify the counterparty's business license and company chop authenticity.", vi: "Khi ký hợp đồng thương mại có yếu tố nước ngoài, bắt buộc phải đối chiếu tính xác thực của giấy phép kinh doanh và con dấu công chương đối tác." },
      { zh: "双语合同中应明确约定以中文或英文版本为争议仲裁准据。", pinyin: "Shuāngyǔ hétong zhōng yīng míngquè yuēdìng yǐ Zhōngwén huò Yīngwén bǎnběn wéi zhēngyì zhòngcái zhǔnjù.", en: "Bilingual contracts should explicitly stipulate whether the Chinese or English version prevails in arbitration.", vi: "Trong hợp đồng song ngữ cần quy định rõ bản tiếng Trung hay tiếng Anh có giá trị ưu tiên khi phát sinh tranh chấp trọng tài." }
    ]
  },
  {
    id: "fapiao",
    hanzi: "发票",
    traditional: "發票",
    pinyin: "Fāpiào",
    level: "HSK 4-5 / Business & Finance",
    pos: "n.",
    english: "Official Tax Invoice / Fapiao (State Taxation Administration receipt)",
    vietnamese: "Hóa đơn thuế Fapiao (chứng từ kế toán và khấu trừ thuế hợp pháp tại Trung Quốc)",
    radical: "又 + 示",
    components: "发 (phát hành, xuất phát) + 票 (phiếu chứng từ).",
    context: "Do Tổng cục Thuế Trung Quốc (STA) quản lý chặt chẽ. Fapiao điện tử (全电发票) là căn cứ duy nhất để ghi nhận chi phí hợp lý của doanh nghiệp và hoàn thuế GTGT xuất khẩu.",
    related: ["增值税发票 (Hóa đơn GTGT)", "税务局 (Cơ quan Thuế)", "报销 (Thanh toán công tác phí)"],
    mnemonic: "Phiếu (票) được phát hành (发) chính thức từ cơ quan thuế.",
    examples: [
      { zh: "请问可以开具增值税电子普通发票吗？", pinyin: "Qǐngwèn kěyǐ kāijù zēngzhíshuì diànzǐ pǔtōng fāpiào ma?", en: "Could you please issue an electronic general VAT invoice?", vi: "Xin hỏi có thể xuất hóa đơn điện tử GTGT thông thường được không?" },
      { zh: "在中国出差期间的所有交通与住宿费用均须凭正规发票报销。", pinyin: "Zài Zhōngguó chūchāi qījiān de suǒyǒu jiāotōng yǔ zhùsù fèiyòng jūn xū píng zhèngguī fāpiào bàoxiāo.", en: "All transit and hotel expenses during business trips to China must be reimbursed against official fapiao.", vi: "Mọi chi phí đi lại và lưu trú trong thời gian công tác tại Trung Quốc đều phải thanh toán bằng hóa đơn Fapiao hợp lệ." }
    ]
  },
  {
    id: "shanshui",
    hanzi: "山水",
    traditional: "山水",
    pinyin: "Shānshuǐ",
    level: "HSK 3-4 / Aesthetics & Geography",
    pos: "n.",
    english: "Mountains and waters / Landscape (spiritual geography and artistic genre)",
    vietnamese: "Sơn thủy (núi non sông nước; mỹ học phong cảnh và tranh thủy mặc)",
    radical: "山 + 水",
    components: "山 (núi tĩnh – Dương) + 水 (nước động – Âm). Thể hiện sự hòa hợp âm dương tối thượng của thiên nhiên.",
    context: "Là trung tâm của triết học 'Nhân giả lạc sơn, trí giả lạc thủy' (Khổng Tử) và nghệ thuật 'Quế Lâm sơn thủy giáp thiên hạ'. Núi Karst và dòng sông Ly Giang là hiện thân địa mạo của mỹ học Sơn thủy Trung Hoa.",
    related: ["山水画 (Tranh sơn thủy)", "喀斯特地貌 (Địa hình Karst)", "天人合一 (Thiên nhân hợp nhất)"],
    mnemonic: "Núi (山) vững chãi nghìn năm che chở cho làn nước (水) biếc uốn lượn.",
    examples: [
      { zh: "桂林山水甲天下，阳朔堪称甲桂林。", pinyin: "Guìlín shānshuǐ jiǎ tiānxià, Yángshuò kānchēng jiǎ Guìlín.", en: "Guilin's scenery is peerless under heaven, and Yangshuo surpasses even Guilin.", vi: "Quế Lâm sơn thủy giáp thiên hạ, Dương Sóc lại đứng đầu Quế Lâm." },
      { zh: "中国山水画追求“可行、可望、可游、可居”的精神意境。", pinyin: "Zhōngguó shānshuǐhuà zhuīqiú 'kě xíng, kě wàng, kě yóu, kě jū' de jīngshén yìjìng.", en: "Chinese landscape painting pursues the spiritual realm of being walk-able, sight-able, tour-able, and dwell-able.", vi: "Tranh sơn thủy Trung Hoa hướng tới ý cảnh tinh thần 'có thể đi, có thể ngắm, có thể dạo chơi và có thể cư ngụ'." }
    ]
  }
];


// [UPGRADE DOT 5: 103 -> 253 ANKI LIUSHU ENRICHMENT & EXPANSION]
(function () {
  if (!Array.isArray(window.CCE_DICTIONARY)) return;
  const ENRICH_103 = {
  "wenhua": [
    "VĂN HÓA",
    "会意 · Hình thanh (Hợp thể)"
  ],
  "cha": [
    "TRÀ",
    "形声 · Hội ý (Hình thanh & Hội ý)"
  ],
  "lishi": [
    "LỊCH SỬ",
    "会意 (Hội ý — Lịch + Quan chép sử)"
  ],
  "chuantong": [
    "TRUYỀN THỐNG",
    "形声 · 会意 (Hình thanh & Hội ý)"
  ],
  "guanxi": [
    "QUAN HỆ",
    "形声 · 会意 (Cài cửa + Sợi tơ nối kết)"
  ],
  "chunjie": [
    "XUÂN TIẾT",
    "会意 · 形声 (Mặt trời mầm non + Đốt tre)"
  ],
  "mianzi": [
    "DIỆN TỬ (THỂ DIỆN)",
    "象形 · 会意 (Khuôn mặt + Hạt nhỏ)"
  ],
  "renqing": [
    "NHÂN TÌNH",
    "象形 · 形声 (Người + Tâm tình)"
  ],
  "zhexue": [
    "TRIẾT HỌC",
    "形声 · 会意 (Rìu chặt sáng rõ + Khẩu + Dạy dỗ)"
  ],
  "maoyi": [
    "MẬU DỊCH",
    "形声 · 象形 (Mở cửa trao đổi + Thay đổi)"
  ],
  "gongyinglian": [
    "CUNG ỨNG LIÊN (CHUỖI CUNG ỨNG)",
    "形声 · 会意 (Chung sức + Đáp ứng + Dây xích)"
  ],
  "jingji": [
    "KINH TẾ",
    "形声 · 会意 (Kinh thế tế dân)"
  ],
  "kuajing": [
    "KHÓA CẢNH (XUYÊN BIÊN GIỚI)",
    "形声 (Bước qua + Ranh giới)"
  ],
  "baijia": [
    "CHƯ TỬ BÁCH GIA",
    "会意 · 象形 (Trăm học phái dưới mái nhà)"
  ],
  "rujia": [
    "NHO GIA",
    "形声 · 会意 (Người cần đức + Mái nhà)"
  ],
  "ren": [
    "NHÂN",
    "会意 (Hai người nương tựa nhau)"
  ],
  "li": [
    "LỄ",
    "形声 · 会意 (Bàn thờ 示 + Bình ngọc 豊)"
  ],
  "junzi": [
    "QUÂN TỬ",
    "会意 · 象形 (Tay cầm trượng cai trị + Con trai)"
  ],
  "daode": [
    "ĐẠO ĐỨC",
    "会意 · 形声 (Con đường dẫn lối + Lòng ngay thẳng)"
  ],
  "wuwei": [
    "VÔ VI",
    "指事 · 会意 (Trống không + Bàn tay hành động)"
  ],
  "fazhi": [
    "PHÁP TRỊ",
    "会意 · 形声 (Nước phẳng công bằng + Trị thủy)"
  ],
  "yinyang": [
    "ÂM DƯƠNG",
    "形声 · 会意 (Bên khuất nắng & Bên đón nắng sườn đồi)"
  ],
  "wuxing": [
    "NGŨ HÀNH",
    "象形 · 指事 (Năm + Ngã tư vận động)"
  ],
  "bagua": [
    "BÁT QUÁI",
    "会意 · 形声 (Chia tám + Bói mai rùa)"
  ],
  "yijing_term": [
    "DỊCH KINH",
    "象形 · 形声 (Thằn lằn đổi sắc/Nhật Nguyệt + Sợi dọc khung cửi)"
  ],
  "tiangan": [
    "THIÊN CAN",
    "会意 · 象形 (Vòm trời + Cành cây cái)"
  ],
  "dizhi": [
    "ĐỊA CHI",
    "形声 · 象形 (Đất đai + Cành nhánh)"
  ],
  "fengshui": [
    "PHONG THỦY",
    "形声 · 象形 (Gió + Dòng nước)"
  ],
  "bazi": [
    "BÁT TỰ",
    "指事 · 象形 (Tám + Chữ viết sinh sôi)"
  ],
  "ziweidoushu": [
    "TỬ VI ĐẨU SỐ",
    "形声 · 象形 (Chòm sao Bắc Đẩu + Tính toán)"
  ],
  "jieqi": [
    "NHỊ THẬP TỨ TIẾT KHÍ",
    "形声 · 象形 (Đốt trúc định kỳ + Hơi mây)"
  ],
  "keju": [
    "KHOA CỬ",
    "会意 · 形声 (Đấu đong lúa thóc đo lường + Hai tay nâng lên)"
  ],
  "sichouzhilu": [
    "TI TRÙ CHI LỘ (CON ĐƯỜNG TƠ LỤA)",
    "象形 · 形声 (Cuộn tơ tằm + Con đường)"
  ],
  "shuimohua": [
    "THỦY MẶC HỌA",
    "象形 · 会意 (Nước + Đen bụi đất + Chia ranh vẽ)"
  ],
  "liubai": [
    "LƯU BẠCH",
    "形声 · 指事 (Dừng lại + Khoảng trắng tia sáng)"
  ],
  "shufa": [
    "THƯ PHÁP",
    "会意 · 形声 (Tay cầm bút viết + Chuẩn mực phẳng)"
  ],
  "hanzi": [
    "HÁN TỰ",
    "形声 · 会意 (Dòng Hán Thủy + Trẻ dưới mái nhà)"
  ],
  "hannom": [
    "NÔM TỰ (CHỮ NÔM)",
    "形声 · 假借 (Khẩu mượn thanh Nam + Hình thanh)"
  ],
  "sanjiao": [
    "TAM GIÁO HỢP NHẤT",
    "指事 · 会意 (Ba + Dạy dỗ + Hợp chung một)"
  ],
  "siheyuan": [
    "TỨ HỢP VIỆN",
    "指事 · 会意 (Bốn mặt khép kín bao sân)"
  ],
  "jingpai": [
    "KINH PHÁI",
    "象形 · 形声 (Lầu cao kinh đô + Nhánh sông)"
  ],
  "haipai": [
    "HẢI PHÁI",
    "形声 (Biển lớn + Nhánh lưu thủy)"
  ],
  "jiaguwen": [
    "GIÁP CỐT VĂN",
    "象形 (Mai rùa + Xương thú + Nét đan chéo)"
  ],
  "taiji": [
    "THÁI CỰC",
    "会意 · 形声 (Rộng lớn + Đỉnh cao cực điểm)"
  ],
  "qi": [
    "KHÍ",
    "象形 · 形声 (Hơi mây bốc lên + Hạt gạo nuôi dưỡng)"
  ],
  "xinyong": [
    "TÍN DỤNG",
    "会意 (Người 亻 + Lời nói 言 + Công dụng)"
  ],
  "tangshi": [
    "ĐƯỜNG THI",
    "形声 (Triều Đường + Ngôn từ có vần điệu)"
  ],
  "xiaoshun": [
    "HIẾU THUẬN",
    "会意 (Con trẻ nâng đỡ bậc già lão)"
  ],
  "wenming": [
    "VĂN MINH",
    "象形 · 会意 (Hoa văn chữ viết + Nhật Nguyệt tỏa sáng)"
  ],
  "chadao": [
    "TRÀ ĐẠO",
    "形声 · 会意 (Lá trà + Con đường tu tâm)"
  ],
  "liyi": [
    "LỄ NGHI",
    "形声 · 会意 (Lễ tế + Dáng vẻ chỉnh tề)"
  ],
  "yuanxiao": [
    "NGUYÊN TIÊU TIẾT",
    "会意 · 形声 (Đầu tiên + Đêm tối rằm)"
  ],
  "tuanyuan": [
    "ĐOÀN VIÊN",
    "会意 · 象形 (Vòng vây khép tròn đầy)"
  ],
  "jiazhiguan": [
    "GIÁ TRỊ QUAN",
    "形声 · 会意 (Định giá + Xem xét tư tưởng)"
  ],
  "wenyanwen": [
    "VĂN NGÔN VĂN",
    "象形 · 会意 (Chữ viết kinh điển cổ)"
  ],
  "guochao": [
    "QUỐC TRIỀU (HÀNG NỘI ĐỊA MỚI)",
    "会意 · 形声 (Quốc gia + Thủy triều dâng)"
  ],
  "neijuan": [
    "NỘI QUYỂN",
    "指事 · 形声 (Cuộn xoắn vào bên trong)"
  ],
  "chaxugeju": [
    "SAI TỰ CÁCH CỤC",
    "会意 · 形声 (Thứ bậc đồng tâm từ trong ra ngoài)"
  ],
  "tianrenheyi": [
    "THIÊN NHÂN HỢP NHẤT",
    "象形 · 指事 (Trời + Người hợp một)"
  ],
  "shuanggong": [
    "CỐ CUNG",
    "会意 · 象形 (Cũ xưa + Cung điện hai mái)"
  ],
  "yidi": [
    "TI LỘ",
    "形声 (Tơ lụa + Đường đi)"
  ],
  "fanyong": [
    "HÁN TỰ VĂN HÓA QUYỂN",
    "会意 · 形声 (Vòng tròn giao lưu chữ Hán)"
  ],
  "qimendunjia": [
    "KỲ MÔN ĐỘN GIÁP",
    "形声 · 会意 (Bí ẩn + Cổng + Ẩn tàng)"
  ],
  "shizheng": [
    "THỰC CHỨNG",
    "会意 · 形声 (Đầy thực chất + Chứng minh ngôn từ)"
  ],
  "baohutong": [
    "HẢI VẬN DỮ VẬT LƯU",
    "形声 · 会意 (Biển + Vận chuyển + Lưu thông vật phẩm)"
  ],
  "yishujingjie": [
    "Ý CẢNH",
    "会意 · 形声 (Tâm ý + Ranh giới cảm thụ)"
  ],
  "qinghua": [
    "THANH HOA SỨ",
    "形声 (Xanh lam + Hoa văn + Đồ sứ)"
  ],
  "shibosi": [
    "THỊ BẠC TY",
    "会意 · 形声 (Chợ + Thuyền vượt biển + Ty quản lý)"
  ],
  "ershisijieqi": [
    "NHỊ THẬP TỨ TIẾT KHÍ",
    "指事 · 形声 (Chu kỳ 24 điểm khí hậu)"
  ],
  "huangdineijing": [
    "HOÀNG ĐẾ NỘI KINH",
    "会意 · 形声 (Hoàng Đế + Bộ kinh cốt lõi y lý)"
  ],
  "zangxiang": [
    "TẠNG TƯỢNG",
    "形声 (Tạng phủ ẩn bên trong + Biểu hiện bên ngoài)"
  ],
  "sihua": [
    "TỨ HÓA",
    "指事 · 会意 (Bốn sự biến hóa)"
  ],
  "sizhubazi": [
    "TỨ TRỤ BÁT TỰ",
    "指事 · 形声 (Bốn cột thời gian + Tám chữ)"
  ],
  "yonghen": [
    "DỤNG THẦN",
    "象形 · 会意 (Công dụng + Điều tiết cốt lõi)"
  ],
  "luopan": [
    "LA BÀN",
    "形声 · 会意 (Lưới chia phương vị + Mâm xoay)"
  ],
  "yuanchanzheng": [
    "NGUYÊN SẢN ĐỊA CHỨNG THƯ (C/O)",
    "会意 · 形声 (Nguồn gốc + Nơi sản xuất + Chứng nhận)"
  ],
  "baoguan": [
    "BÁO QUAN DỮ THANH QUAN",
    "会意 · 形声 (Khai báo + Cửa ải hải quan)"
  ],
  "chanyedai": [
    "SẢN NGHIỆP ĐỚI (CỤM NGÀNH HÀNG)",
    "会意 · 形声 (Sản xuất + Nghề nghiệp + Dải tập trung)"
  ],
  "keju-system": [
    "KHOA CỬ CHẾ ĐỘ",
    "会意 · 形声 (Thi tuyển phân loại nhân tài)"
  ],
  "jinshi": [
    "TIẾN SĨ",
    "会意 · 象形 (Tiến bước + Người học thức)"
  ],
  "sidafaming": [
    "TỨ ĐẠI PHÁT MINH",
    "指事 · 会意 (Bốn phát minh vĩ đại)"
  ],
  "tiangongkaiwu": [
    "THIÊN CÔNG KHAI VẬT",
    "会意 · 象形 (Tạo hóa + Khéo léo khai mở vật chất)"
  ],
  "wenfangsibao": [
    "VĂN PHÒNG TỨ BẢO",
    "会意 · 形声 (Bốn báu vật phòng thư: Bút–Mực–Giấy–Nghiên)"
  ],
  "zhuanke": [
    "TRIỆN KHẮC",
    "形声 · 会意 (Chữ Triện + Đao khắc trên đá)"
  ],
  "lantingjixu": [
    "LAN ĐÌNH TẬP TỰ",
    "形声 · 会意 (Hoa lan + Đình ngắm cảnh + Lời tựa)"
  ],
  "zhixingheyi": [
    "TRI HÀNH HỢP NHẤT",
    "会意 · 指事 (Biết + Làm hòa làm một)"
  ],
  "gewuzhizhi": [
    "CÁCH VẬT TRÍ TRI",
    "形声 · 会意 (Khảo sát sự vật đến tận cùng tri thức)"
  ],
  "jingshizhiyong": [
    "KINH THẾ TRÍ DỤNG",
    "形声 · 会意 (Kinh doanh trị thế đem ra thực dụng)"
  ],
  "hetuluoshu": [
    "HÀ ĐỒ LẠC THƯ",
    "形声 · 会意 (Bản đồ Hoàng Hà + Văn tự Lạc Thủy)"
  ],
  "meihuayishu": [
    "MAI HOA DỊCH SỐ",
    "形声 · 会意 (Hoa mai + Biến dịch + Số lý)"
  ],
  "bingjian": [
    "BĂNG GIÁM",
    "会意 (Băng trong + Gương đồng soi nhân tâm)"
  ],
  "tongxingyiyi": [
    "ĐỒNG HÌNH DỊ NGHĨA TỪ",
    "会意 · 形声 (Cùng chữ viết khác nghĩa)"
  ],
  "dingjin": [
    "ĐỊNH KIM DỮ ĐÍNH KIM",
    "形声 (Tiền cọc cố định pháp lý vs Tiền đặt trước)"
  ],
  "xinyongzheng": [
    "TÍN DỤNG CHỨNG (L/C)",
    "会意 · 形声 (Chứng thư bảo lãnh tín dụng ngân hàng)"
  ],
  "fahuoren": [
    "PHÁT HÓA NHÂN DỮ THU HÓA NHÂN",
    "会意 · 形声 (Người gửi hàng & Người nhận hàng)"
  ],
  "zhishichanquan": [
    "TRI THỨC SẢN QUYỀN (SỞ HỮU TRÍ TUỆ)",
    "会意 · 形声 (Quyền sở hữu tài sản trí tuệ)"
  ],
  "xiaodankuaifan": [
    "TIỂU ĐƠN KHOÁI PHẢN",
    "指事 · 形声 (Đơn hàng nhỏ phản hồi cực nhanh)"
  ],
  "yinfa": [
    "NGÂN PHÁT KINH TẾ (KINH TẾ BẠC)",
    "形声 · 会意 (Kinh tế phục vụ người tóc bạc)"
  ],
  "feiyi": [
    "PHI VẬT CHẤT VĂN HÓA DI SẢN",
    "指事 · 形声 (Di sản văn hóa phi vật thể)"
  ],
  "zhongoubanlie": [
    "TRUNG ÂU BAN LIỆT",
    "会意 · 形声 (Đoàn tàu vận tải liên vận Á–Âu)"
  ],
  "hetong": [
    "HỢP ĐỒNG",
    "会意 (Khớp hai nửa phù hiệu thống nhất điều khoản)"
  ],
  "fapiao": [
    "PHÁT PHIẾU (HÓA ĐƠN THUẾ)",
    "会意 · 形声 (Phiếu chứng từ phát hành chính thức)"
  ],
  "shanshui": [
    "SƠN THỦY",
    "象形 (Núi đá đứng 3 ngọn + Dòng nước chảy uốn)"
  ]
};
  window.CCE_DICTIONARY.forEach((entry) => {
    const meta = ENRICH_103[entry.id];
    if (meta) {
      if (!entry.hanViet) entry.hanViet = meta[0];
      if (!entry.liushuType) entry.liushuType = meta[1];
      if (!entry.liushuCategory) entry.liushuCategory = meta[1];
      if (!entry.etymologyAndRadicals) {
        entry.etymologyAndRadicals = `${meta[1]} — Bộ thủ: ${entry.radical || ""}. ${entry.components || ""}`;
      }
    }
  });
  const EXISTING_IDS = new Set(window.CCE_DICTIONARY.map((d) => d.id));
  const NEW_150 = [
  {
    "id": "yi_righteousness",
    "hanzi": "义",
    "traditional": "義",
    "pinyin": "yì",
    "hanViet": "NGHĨA",
    "liushuType": "会意 (Hội ý)",
    "liushuCategory": "会意 (Hội ý)",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Triết học",
    "pos": "n.",
    "english": "Righteousness; moral duty; justice",
    "vietnamese": "Nghĩa khí, đạo lý, lẽ phải (Hán-Việt: NGHĨA)",
    "radical": "丶 / 羊+我",
    "radicalAnalysis": "丶 / 羊+我",
    "etymologyAndRadicals": "会意 (Hội ý) — Bộ thủ: 丶 / 羊+我. Chữ phồn thể 義 gồm 羊 (con dê tốt đẹp) trên 我 (bản thân): giữ phẩm giá ngay thẳng tốt đẹp cho bản thân.",
    "components": "Chữ phồn thể 義 gồm 羊 (con dê tốt đẹp) trên 我 (bản thân): giữ phẩm giá ngay thẳng tốt đẹp cho bản thân.",
    "context": "Một trong Ngũ Thường (Nhân–Nghĩa–Lễ–Trí–Tín), Mạnh Tử đặt cạnh Nhân ('Nhân nghĩa') đối lập 'Trọng Lợi'.",
    "related": [
      "义利之辨",
      "忠义",
      "道义"
    ],
    "mnemonic": "Đặt chữ tốt đẹp (羊) lên trên cái tôi (我) chính là Nghĩa (義).",
    "examples": [
      {
        "zh": "见利思义，见危授命。",
        "pinyin": "Jiàn lì sī yì, jiàn wēi shòu mìng.",
        "en": "Seeing gain, think of righteousness; seeing danger, offer one's life.",
        "vi": "Thấy lợi phải nghĩ đến nghĩa; thấy nguy nan dám hiến thân (Luận Ngữ)."
      },
      {
        "zh": "重情重义的商业伙伴值得长期信赖。",
        "pinyin": "Zhòng qíng zhòng yì de shāngyè huǒbàn zhídé chángqī xìnlài.",
        "en": "Business partners who value loyalty and righteousness deserve long-term trust.",
        "vi": "Đối tác kinh doanh trọng tình trọng nghĩa đáng được tin cậy lâu dài."
      }
    ]
  },
  {
    "id": "zhi_wisdom",
    "hanzi": "智",
    "traditional": "智",
    "pinyin": "zhì",
    "hanViet": "TRÍ",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "HSK 3-4",
    "topicTag": "HSK 3-4 / Triết học",
    "pos": "n./adj.",
    "english": "Wisdom; intellect; discernment",
    "vietnamese": "Trí tuệ, sáng suốt phân biệt phải trái (Hán-Việt: TRÍ)",
    "radical": "日 / 知+日",
    "radicalAnalysis": "日 / 知+日",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 日 / 知+日. Chữ 知 (mũi tên bay nhanh trúng đích + cái miệng phân tích rõ ràng) đặt trên chữ 日 (mặt trời soi sáng).",
    "components": "Chữ 知 (mũi tên bay nhanh trúng đích + cái miệng phân tích rõ ràng) đặt trên chữ 日 (mặt trời soi sáng).",
    "context": "Mạnh Tử gọi 'Thị phi chi tâm, trí chi đoan dã' — năng lực phân biệt đúng sai và thấu suốt quy luật.",
    "related": [
      "智慧",
      "大智若愚",
      "明智"
    ],
    "mnemonic": "Mỗi ngày (日) thấu hiểu sự vật nhanh chuẩn xác như tên bắn trúng đích (知) là Trí.",
    "examples": [
      {
        "zh": "仁者不忧，智者不惑，勇者不惧。",
        "pinyin": "Rénzhě bù yōu, zhìzhě bù huò, yǒngzhě bù jù.",
        "en": "The benevolent do not worry, the wise are not perplexed, the brave are not afraid.",
        "vi": "Người nhân không lo âu, người trí không nghi hoặc, người dũng không sợ hãi."
      },
      {
        "zh": "人工智能正在重塑全球制造与贸易格局。",
        "pinyin": "Réngōng zhìnéng zhèngzài chóngsù quánqiú zhìzào yǔ màoyì géjú.",
        "en": "Artificial intelligence is reshaping global manufacturing and trade patterns.",
        "vi": "Trí tuệ nhân tạo đang tái định hình cục diện sản xuất và thương mại toàn cầu."
      }
    ]
  },
  {
    "id": "xin_trust",
    "hanzi": "信",
    "traditional": "信",
    "pinyin": "xìn",
    "hanViet": "TÍN",
    "liushuType": "会意 (Hội ý)",
    "liushuCategory": "会意 (Hội ý)",
    "level": "HSK 3-4",
    "topicTag": "HSK 3-4 / Đạo đức & Kinh doanh",
    "pos": "n./v.",
    "english": "Trustworthiness; fidelity; letter",
    "vietnamese": "Chữ Tín, giữ lời hứa, niềm tin (Hán-Việt: TÍN)",
    "radical": "亻 (Nhân) + 言 (Ngôn)",
    "radicalAnalysis": "亻 (Nhân) + 言 (Ngôn)",
    "etymologyAndRadicals": "会意 (Hội ý) — Bộ thủ: 亻 (Nhân) + 言 (Ngôn). Hội ý: Người đứng bên (亻) lời nói của chính mình (言) — nói sao làm vậy không tráo trở.",
    "components": "Hội ý: Người đứng bên (亻) lời nói của chính mình (言) — nói sao làm vậy không tráo trở.",
    "context": "Trụ cột thứ năm của Ngũ Thường và đạo đức thương gia Nho thương: 'Nhân vô tín bất lập'.",
    "related": [
      "诚信",
      "言而有信",
      "信任"
    ],
    "mnemonic": "Con người (亻) đứng bảo chứng cho từng lời nói (言) chính là chữ Tín.",
    "examples": [
      {
        "zh": "人而无信，不知其可也。",
        "pinyin": "Rén ér wú xìn, bù zhī qí kě yě.",
        "en": "A person without trustworthiness—I do not know what they are good for.",
        "vi": "Người mà không có chữ Tín thì chẳng biết làm nên việc gì được (Luận Ngữ)."
      },
      {
        "zh": "商业合作最讲究诚实守信与合同契约精神。",
        "pinyin": "Shāngyè hézuò zuì jiǎngjiu chéngshí shǒuxìn yǔ hétong qìyuē jīngshén.",
        "en": "Commercial cooperation values integrity, faithfulness, and contractual spirit above all.",
        "vi": "Hợp tác thương mại coi trọng nhất sự thành thực giữ tín và tinh thần hợp đồng."
      }
    ]
  },
  {
    "id": "de_virtue",
    "hanzi": "德",
    "traditional": "德",
    "pinyin": "dé",
    "hanViet": "ĐỨC",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Triết học",
    "pos": "n.",
    "english": "Virtue; moral power; inner integrity",
    "vietnamese": "Đạo đức, đức hạnh, phẩm chất nội tại (Hán-Việt: ĐỨC)",
    "radical": "彳 (Sách) + 直 (Trực) + 心 (Tâm)",
    "radicalAnalysis": "彳 (Sách) + 直 (Trực) + 心 (Tâm)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 彳 (Sách) + 直 (Trực) + 心 (Tâm). Bước đi (彳) với đôi mắt nhìn thẳng (直) và tấm lòng chính trực (心).",
    "components": "Bước đi (彳) với đôi mắt nhìn thẳng (直) và tấm lòng chính trực (心).",
    "context": "Trong 《Đạo Đức Kinh》, Đạo là thể, Đức là dụng — sự thể hiện tự nhiên của Đạo nơi mỗi sinh thể.",
    "related": [
      "道德",
      "厚德载物",
      "德才兼备"
    ],
    "mnemonic": "Bước đi trên đường (彳) giữ mắt thẳng (直) lòng ngay (心) là người có Đức.",
    "examples": [
      {
        "zh": "天行健，君子以自强不息；地势坤，君子以厚德载物。",
        "pinyin": "Tiān xíng jiàn, jūnzǐ yǐ zìqiáng bù xī; dì shì kūn, jūnzǐ yǐ hòudé zài wù.",
        "en": "As heaven is vigorous, the noble person strives ceaselessly; as earth is receptive, uphold things with virtue.",
        "vi": "Bậc quân tử lấy đức dày để nâng đỡ muôn vật (Kinh Dịch)."
      },
      {
        "zh": "企业可持续发展离不开职业道德与社会责任。",
        "pinyin": "Qǐyè kěchíxù fāzhǎn líbùkāi zhíyè dàodé yǔ shèhuì zérèn.",
        "en": "Sustainable corporate growth relies on business ethics and social responsibility.",
        "vi": "Phát triển doanh nghiệp bền vững không thể tách rời đạo đức nghề nghiệp và trách nhiệm xã hội."
      }
    ]
  },
  {
    "id": "dao_way",
    "hanzi": "道",
    "traditional": "道",
    "pinyin": "dào",
    "hanViet": "ĐẠO",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "HSK 1-2",
    "topicTag": "HSK 2-3 / Triết học",
    "pos": "n.",
    "english": "The Way; cosmic order; principle; path",
    "vietnamese": "Đạo lý, con đường, quy luật tự nhiên (Hán-Việt: ĐẠO)",
    "radical": "辶 (Sước) + 首 (Thủ)",
    "radicalAnalysis": "辶 (Sước) + 首 (Thủ)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 辶 (Sước) + 首 (Thủ). Cái đầu dẫn hướng (首) bước đi trên con đường (辶).",
    "components": "Cái đầu dẫn hướng (首) bước đi trên con đường (辶).",
    "context": "Khái niệm triết học tối cao chung cho cả Nho gia (Nhân đạo), Đạo gia (Thiên đạo) và Phật giáo (Bồ-đề đạo).",
    "related": [
      "道理",
      "道法自然",
      "茶道"
    ],
    "mnemonic": "Có đầu óc minh mẫn (首) dẫn đường cho bước chân (辶) chính là Đạo.",
    "examples": [
      {
        "zh": "道法自然，无为而无不为。",
        "pinyin": "Dào fǎ zìrán, wúwéi ér wúbùwéi.",
        "en": "The Dao models itself after nature; acting effortlessly, nothing is left undone.",
        "vi": "Đạo noi theo lẽ Tự nhiên, vô vi mà chẳng gì không thành tựu."
      },
      {
        "zh": "企业经营之道在于洞察行业趋势并保持诚信。",
        "pinyin": "Qǐyè jīngyíng zhī dào zàiyú dòngchá hángyè qūshì bìng bǎochí chéngxìn.",
        "en": "The way of enterprise management lies in grasping trends and keeping integrity.",
        "vi": "Đạo kinh doanh nằm ở việc thấu suốt xu hướng ngành và giữ vững chữ tín."
      }
    ]
  },
  {
    "id": "cheng_sincerity",
    "hanzi": "诚",
    "traditional": "誠",
    "pinyin": "chéng",
    "hanViet": "THÀNH",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Triết học",
    "pos": "adj./n.",
    "english": "Sincerity; honesty; authenticity",
    "vietnamese": "Chân thành, thành thực (Hán-Việt: THÀNH)",
    "radical": "訁 (Ngôn) + 成 (Thành)",
    "radicalAnalysis": "訁 (Ngôn) + 成 (Thành)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 訁 (Ngôn) + 成 (Thành). Lời nói (訁/言) biến thành hành động trọn vẹn (成).",
    "components": "Lời nói (訁/言) biến thành hành động trọn vẹn (成).",
    "context": "《Trung Dung》 coi Thành là bản thể trời đất: 'Thành giả thiên chi đạo dã, thành chi giả nhân chi đạo dã'.",
    "related": [
      "诚实",
      "至诚",
      "真诚合作"
    ],
    "mnemonic": "Lời nói (言) nhất quán đi đến thành công thực sự (成) là chữ Thành.",
    "examples": [
      {
        "zh": "精诚所至，金石为开。",
        "pinyin": "Jīngchéng suǒ zhì, jīnshí wéi kāi.",
        "en": "Where utmost sincerity reaches, even metal and stone open.",
        "vi": "Lòng thành tinh thuần đạt đến mức đá vàng cũng mở lối."
      },
      {
        "zh": "我方愿以最大诚意推进中越跨境物流合作。",
        "pinyin": "Wǒfāng yuàn yǐ zuìdà chéngyì tuījìn Zhōng-Yuè kuàjìng wùliú hézuò.",
        "en": "We are ready to advance China-Vietnam cross-border logistics cooperation with utmost sincerity.",
        "vi": "Phía chúng tôi sẵn sàng dùng thiện chí cao nhất thúc đẩy hợp tác logistics Việt – Trung."
      }
    ]
  },
  {
    "id": "jing_reverence",
    "hanzi": "敬",
    "traditional": "敬",
    "pinyin": "jìng",
    "hanViet": "KÍNH",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Nho học",
    "pos": "v./n.",
    "english": "Reverence; mindfulness; respect",
    "vietnamese": "Cung kính, tôn trọng, cẩn trọng tâm ý (Hán-Việt: KÍNH)",
    "radical": "苟/芶 + 攵 (Phộc)",
    "radicalAnalysis": "苟/芶 + 攵 (Phộc)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 苟/芶 + 攵 (Phộc). Người đội mũ nghiêm trang cẩn trọng trước sự giám sát nhắc nhở (攵).",
    "components": "Người đội mũ nghiêm trang cẩn trọng trước sự giám sát nhắc nhở (攵).",
    "context": "Trong Tống Nho, 'Cư kính' (居敬) là công phu giữ tâm tỉnh thức tôn trọng từng sự vật việc làm.",
    "related": [
      "尊敬",
      "敬业",
      "敬德保民"
    ],
    "mnemonic": "Thái độ nghiêm cẩn chú tâm trong từng hành vi là Kính.",
    "examples": [
      {
        "zh": "敬人者，人恒敬之。",
        "pinyin": "Jìng rén zhě, rén héng jìng zhī.",
        "en": "Those who respect others are always respected in return.",
        "vi": "Người biết kính trọng người khác, người đời luôn kính trọng lại (Mạnh Tử)."
      },
      {
        "zh": "团队对产品质量保持严谨与敬业的态度。",
        "pinyin": "Tuánduì duì chǎnpǐn zhìliàng bǎochí yánjǐn yǔ jìngyè de tàidù.",
        "en": "The team maintains a rigorous and dedicated attitude toward product quality.",
        "vi": "Đội ngũ giữ thái độ nghiêm cẩn và tận tâm chuyên nghiệp đối với chất lượng sản phẩm."
      }
    ]
  },
  {
    "id": "zhong_loyalty",
    "hanzi": "忠",
    "traditional": "忠",
    "pinyin": "zhōng",
    "hanViet": "TRUNG",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Đạo đức",
    "pos": "adj./n.",
    "english": "Devotion; conscientiousness; loyalty",
    "vietnamese": "Tận tâm hết lòng, trung thực (Hán-Việt: TRUNG)",
    "radical": "中 (Trung) + 心 (Tâm)",
    "radicalAnalysis": "中 (Trung) + 心 (Tâm)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 中 (Trung) + 心 (Tâm). Đặt tấm lòng (心) ở vị trí chính giữa (中), không thiên lệch gian dối.",
    "components": "Đặt tấm lòng (心) ở vị trí chính giữa (中), không thiên lệch gian dối.",
    "context": "Trong Luận Ngữ, 'Trung' trước hết là tận hết trách nhiệm và chân thành với việc mình đảm nhận.",
    "related": [
      "忠诚",
      "忠厚",
      "忠恕之道"
    ],
    "mnemonic": "Giữ tấm lòng (心) luôn thẳng ngay chính giữa (中) gọi là Trung.",
    "examples": [
      {
        "zh": "夫子之道，忠恕而已矣。",
        "pinyin": "Fūzǐ zhī dào, zhōngshù éryǐ yǐ.",
        "en": "The Master's Way consists solely of conscientiousness and reciprocity.",
        "vi": "Đạo của Khổng Phu Tử tóm gọn ở chữ Trung (tận tâm) và chữ Thứ (bao dung)."
      },
      {
        "zh": "品牌依靠高性价比赢得大批忠实客户。",
        "pinyin": "Pǐnpái yīkào gāo xìngjiàbǐ yíngdé dàpī zhōngshí kèhù.",
        "en": "The brand won many loyal customers through high cost-performance.",
        "vi": "Thương hiệu chinh phục đông đảo khách hàng trung thành nhờ tỷ lệ giá trị vượt trội."
      }
    ]
  },
  {
    "id": "shu_reciprocity",
    "hanzi": "恕",
    "traditional": "恕",
    "pinyin": "shù",
    "hanViet": "THỨ",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 5-6 / Nho học",
    "pos": "v./n.",
    "english": "Reciprocity; forgiveness; empathy",
    "vietnamese": "Khoan thứ, đặt mình vào vị trí người khác (Hán-Việt: THỨ)",
    "radical": "如 (Như) + 心 (Tâm)",
    "radicalAnalysis": "如 (Như) + 心 (Tâm)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 如 (Như) + 心 (Tâm). Xem tâm lòng người khác (心) cũng như (如) tâm lòng mình.",
    "components": "Xem tâm lòng người khác (心) cũng như (如) tâm lòng mình.",
    "context": "Cốt lõi của đạo Nho: suy bụng ta ra bụng người để không làm điều tổn thương tha nhân.",
    "related": [
      "宽恕",
      "忠恕",
      "推己及人"
    ],
    "mnemonic": "Đem trái tim mình (心) đặt vào giống như (如) hoàn cảnh người khác chính là Thứ.",
    "examples": [
      {
        "zh": "己所不欲，勿施于人，此之谓恕。",
        "pinyin": "Jǐ suǒ búyù, wù shī yú rén, cǐ zhī wèi shù.",
        "en": "Do not impose on others what you dislike—this is called reciprocity.",
        "vi": "Điều gì mình không muốn chớ làm cho người khác, ấy chính là đạo Thứ."
      },
      {
        "zh": "跨文化团队沟通需要更多的理解与包容宽恕。",
        "pinyin": "Kuàwénhuà tuánduì gōutōng xūyào gèng duō de lǐjiě yǔ bāoróng kuānshù.",
        "en": "Cross-cultural team communication calls for greater understanding and tolerance.",
        "vi": "Giao tiếp đội ngũ đa văn hóa cần nhiều sự thấu hiểu và khoan dung hơn."
      }
    ]
  },
  {
    "id": "he_harmony",
    "hanzi": "和",
    "traditional": "和",
    "pinyin": "hé",
    "hanViet": "HÒA",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 3-4",
    "topicTag": "HSK 3-4 / Triết học",
    "pos": "adj./n.",
    "english": "Harmony; peace; balance",
    "vietnamese": "Hòa hợp, hài hòa trong đa dạng (Hán-Việt: HÒA)",
    "radical": "禾 (Hòa - lúa) + 口 (Khẩu)",
    "radicalAnalysis": "禾 (Hòa - lúa) + 口 (Khẩu)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 禾 (Hòa - lúa) + 口 (Khẩu). Mọi người cùng chia sẻ lương thực (禾) vừa miệng ấm no (口) nên hòa thuận; nguyên chữ cổ là 龢 (hòa âm sáo trúc).",
    "components": "Mọi người cùng chia sẻ lương thực (禾) vừa miệng ấm no (口) nên hòa thuận; nguyên chữ cổ là 龢 (hòa âm sáo trúc).",
    "context": "Khác với 'Đồng' (đồng phục một màu), 'Hòa' là phối nhiều âm thanh gia vị khác biệt tạo nên bản nhạc ngon.",
    "related": [
      "和谐",
      "和而不同",
      "以和为贵"
    ],
    "mnemonic": "Có cơm gạo (禾) nuôi đủ mọi miệng ăn (口) giúp xã hội hòa thuận (和).",
    "examples": [
      {
        "zh": "礼之用，和为贵。",
        "pinyin": "Lǐ zhī yòng, hé wéi guì.",
        "en": "In the practice of ritual, harmony is what is prized above all.",
        "vi": "Tác dụng của Lễ lấy chữ Hòa làm quý nhất (Luận Ngữ)."
      },
      {
        "zh": "双方坚持和平共处与互利共赢的合作方针。",
        "pinyin": "Shuāngfāng jiānchí hépíng gòngchǔ yǔ hùlì gòngyíng de hézuò fāngzhēn.",
        "en": "Both sides uphold peaceful coexistence and mutually beneficial cooperation.",
        "vi": "Hai bên kiên trì phương châm chung sống hòa bình và hợp tác cùng có lợi."
      }
    ]
  },
  {
    "id": "zhongyong_mean",
    "hanzi": "中庸",
    "traditional": "中庸",
    "pinyin": "Zhōngyōng",
    "hanViet": "TRUNG DUNG",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Doctrine of the Mean / Equilibrium",
    "vietnamese": "Đạo Trung Dung (vừa vặn đúng mức) (Hán-Việt: TRUNG DUNG)",
    "radical": "丨 / 广 + 用",
    "radicalAnalysis": "丨 / 广 + 用",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 丨 / 广 + 用. Trung là điểm chính giữa cân bằng không thái quá; Dung là vận dụng thường xuyên bền vững.",
    "components": "Trung là điểm chính giữa cân bằng không thái quá; Dung là vận dụng thường xuyên bền vững.",
    "context": "Tên một trong Tứ Thư Nho gia, khẳng định cân bằng động theo thời thế ('Thời trung') chứ không phải ba phải.",
    "related": [
      "致中和",
      "时中",
      "过犹不及"
    ],
    "mnemonic": "Giữ chính giữa (中) để sử dụng thường hằng (庸) là đạo Trung Dung.",
    "examples": [
      {
        "zh": "致中和，天地位焉，万物育焉。",
        "pinyin": "Zhì zhōnghé, tiāndì wèi yān, wànwù yù yān.",
        "en": "When equilibrium and harmony reach perfection, heaven and earth stand in order and all things flourish.",
        "vi": "Đạt tột đỉnh Trung Hòa thì trời đất an ngôi, vạn vật sinh trưởng."
      },
      {
        "zh": "在激进扩张与保守观望之间寻找中庸平衡尤为关键。",
        "pinyin": "Zài jījìn kuòzhāng yǔ bǎoshǒu guānwàng zhījiān xúnzhǎo zhōngyōng pínghéng yóuwéi guānjiàn.",
        "en": "Finding a balanced middle path between aggressive expansion and passive caution is crucial.",
        "vi": "Tìm thế cân bằng Trung Dung giữa mở rộng ồ ạt và co cụm thận trọng đặc biệt quan trọng."
      }
    ]
  },
  {
    "id": "tianming_mandate",
    "hanzi": "天命",
    "traditional": "天命",
    "pinyin": "tiānmìng",
    "hanViet": "THIÊN MỆNH",
    "liushuType": "会意 · 象形",
    "liushuCategory": "会意 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Mandate of Heaven / Destiny",
    "vietnamese": "Mệnh trời, tính chính danh đạo đức (Hán-Việt: THIÊN MỆNH)",
    "radical": "大+一 (Thiên) / 口+令 (Mệnh)",
    "radicalAnalysis": "大+一 (Thiên) / 口+令 (Mệnh)",
    "etymologyAndRadicals": "会意 · 象形 — Bộ thủ: 大+一 (Thiên) / 口+令 (Mệnh). Thiên là bầu trời trên đầu người (大); Mệnh là miệng ban mệnh lệnh từ trên xuống.",
    "components": "Thiên là bầu trời trên đầu người (大); Mệnh là miệng ban mệnh lệnh từ trên xuống.",
    "context": "Học thuyết chính trị nhà Tây Chu khẳng định vương triều chỉ giữ chính danh khi bảo dân có đức.",
    "related": [
      "天命靡常",
      "敬天保民",
      "知天命"
    ],
    "mnemonic": "Bầu trời cao (天) ban mệnh lệnh (命) dựa vào đức trị bảo dân.",
    "examples": [
      {
        "zh": "五十而知天命。",
        "pinyin": "Wǔshí ér zhī tiānmìng.",
        "en": "At fifty, I knew the Mandate of Heaven.",
        "vi": "Năm mươi tuổi thấu hiểu lẽ Thiên mệnh (Luận Ngữ)."
      },
      {
        "zh": "周朝确立了“天命无常，惟德是辅”的政治合法性理论。",
        "pinyin": "Zhōucháo quèlì le 'Tiānmìng wúcháng, wéi dé shì fǔ' de zhèngzhì héfǎxìng lǐlùn.",
        "en": "The Zhou dynasty established the political legitimacy theory that Heaven's mandate favors virtue alone.",
        "vi": "Nhà Chu xác lập lý thuyết chính danh: Thiên mệnh không cố định, chỉ trợ giúp người có đức."
      }
    ]
  },
  {
    "id": "ziran_nature",
    "hanzi": "自然",
    "traditional": "自然",
    "pinyin": "zìrán",
    "hanViet": "TỰ NHIÊN",
    "liushuType": "象形 · 会意",
    "liushuCategory": "象形 · 会意",
    "level": "HSK 3-4",
    "topicTag": "HSK 3-4 / Đạo gia",
    "pos": "n./adj.",
    "english": "Spontaneity; nature; as it naturally is",
    "vietnamese": "Tự nhiên, tự nó vốn như vậy (Hán-Việt: TỰ NHIÊN)",
    "radical": "自 (Mũi -> Tự mình) + 然 (Đốt thịt -> Vậy)",
    "radicalAnalysis": "自 (Mũi -> Tự mình) + 然 (Đốt thịt -> Vậy)",
    "etymologyAndRadicals": "象形 · 会意 — Bộ thủ: 自 (Mũi -> Tự mình) + 然 (Đốt thịt -> Vậy). Tự mình (自) vốn như thế ấy (然) mà không bị ngoại lực nhân tạo cưỡng ép.",
    "components": "Tự mình (自) vốn như thế ấy (然) mà không bị ngoại lực nhân tạo cưỡng ép.",
    "context": "Trong Đạo gia, Tự nhiên bao hàm trạng thái vận hành không giả tạo chứ không giới hạn ở cây cỏ núi sông.",
    "related": [
      "顺其自然",
      "自然界",
      "道法自然"
    ],
    "mnemonic": "Tự bản thân (自) vận hành đúng bản chất (然) gọi là Tự nhiên.",
    "examples": [
      {
        "zh": "人法地，地法天，天法道，道法自然。",
        "pinyin": "Rén fǎ dì, dì fǎ tiān, tiān fǎ Dào, Dào fǎ zìrán.",
        "en": "Humanity follows earth, earth heaven, heaven the Dao, and the Dao follows what is naturally so.",
        "vi": "Đạo noi theo lẽ Tự nhiên."
      },
      {
        "zh": "经过充分市场验证后，品牌销量自然会稳步增长。",
        "pinyin": "Jīngguò chōngfèn shìchǎng yànzhèng hòu, pǐnpái xiāoliàng zìrán huì wěnbù zēngzhǎng.",
        "en": "After solid market validation, brand sales will naturally grow steadily.",
        "vi": "Sau khi kiểm chứng thị trường đầy đủ, doanh số thương hiệu tự nhiên sẽ tăng trưởng vững chắc."
      }
    ]
  },
  {
    "id": "liangzhi_conscience",
    "hanzi": "良知",
    "traditional": "良知",
    "pinyin": "liángzhī",
    "hanViet": "LƯƠNG TRI",
    "liushuType": "会意 (Hội ý)",
    "liushuCategory": "会意 (Hội ý)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Innate Moral Knowledge / Conscience",
    "vietnamese": "Lương tri bẩm sinh, trực giác đạo đức (Hán-Việt: LƯƠNG TRI)",
    "radical": "良 (Tốt lành) + 知 (Hiểu biết)",
    "radicalAnalysis": "良 (Tốt lành) + 知 (Hiểu biết)",
    "etymologyAndRadicals": "会意 (Hội ý) — Bộ thủ: 良 (Tốt lành) + 知 (Hiểu biết). Khả năng hiểu biết đúng sai (知) tốt đẹp bẩm sinh không cần tính toán vụ lợi (良).",
    "components": "Khả năng hiểu biết đúng sai (知) tốt đẹp bẩm sinh không cần tính toán vụ lợi (良).",
    "context": "Trung tâm Tâm học Vương Dương Minh: 'Trí lương tri' (đưa trực giác lương thiện vào hành động thực tế).",
    "related": [
      "致良知",
      "良心",
      "良知良能"
    ],
    "mnemonic": "Cái biết (知) nguyên sơ tốt lành (良) sẵn trong tâm là Lương tri.",
    "examples": [
      {
        "zh": "知善知恶是良知，为善去恶是格物。",
        "pinyin": "Zhī shàn zhī è shì liángzhī, wéi shàn qù è shì géwù.",
        "en": "Knowing good and evil is innate moral knowledge; doing good and removing evil is investigating things.",
        "vi": "Biết thiện biết ác là Lương tri (Vương Dương Minh)."
      },
      {
        "zh": "坚守商业良知与食品安全底线是企业立身之本。",
        "pinyin": "Jiānshǒu shāngyè liángzhī yǔ shípǐn ānquán dǐxiàn shì qǐyè lìshēn zhī běn.",
        "en": "Upholding commercial conscience and food safety baselines is foundational for any firm.",
        "vi": "Giữ vững lương tri kinh doanh và giới hạn an toàn thực phẩm là gốc đứng vững của doanh nghiệp."
      }
    ]
  },
  {
    "id": "jianai_love",
    "hanzi": "兼爱",
    "traditional": "兼愛",
    "pinyin": "jiān'ài",
    "hanViet": "KIÊM ÁI",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "v./n.",
    "english": "Universal / Impartial Love",
    "vietnamese": "Yêu thương bình đẳng không phân biệt (Hán-Việt: KIÊM ÁI)",
    "radical": "兼 (Hai bông lúa cầm chung một tay) + 爱 (Yêu)",
    "radicalAnalysis": "兼 (Hai bông lúa cầm chung một tay) + 爱 (Yêu)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 兼 (Hai bông lúa cầm chung một tay) + 爱 (Yêu). Tay ôm cả hai nhành lúa (兼) kết hợp lòng yêu thương rộng khắp (爱/愛).",
    "components": "Tay ôm cả hai nhành lúa (兼) kết hợp lòng yêu thương rộng khắp (爱/愛).",
    "context": "Tư tưởng cốt lõi của Mặc Tử phản đối sự thiên vị gia tộc hẹp hòi gây ra chiến tranh giữa các nước.",
    "related": [
      "兼爱非攻",
      "墨家",
      "一视同仁"
    ],
    "mnemonic": "Nắm chung mọi người không phân biệt thân sơ (兼) bằng tấm lòng (爱) là Kiêm ái.",
    "examples": [
      {
        "zh": "兼相爱，交相利。",
        "pinyin": "Jiān xiāng ài, jiāo xiāng lì.",
        "en": "Love one another impartially and benefit one another mutually.",
        "vi": "Yêu thương nhau bình đẳng và cùng làm lợi cho nhau (Mặc Tử)."
      },
      {
        "zh": "墨家的兼爱思想在战国诸子百家中独树一帜。",
        "pinyin": "Mòjiā de jiān'ài sīxiǎng zài Zhànguó zhūzǐ bǎijiā zhōng dúshùyīzhì.",
        "en": "Mohist universal love stood out uniquely among the Hundred Schools of the Warring States.",
        "vi": "Tư tưởng Kiêm ái của Mặc gia nổi bật độc đáo giữa Bách gia Chư tử Chiến Quốc."
      }
    ]
  },
  {
    "id": "feigong_antiwar",
    "hanzi": "非攻",
    "traditional": "非攻",
    "pinyin": "fēigōng",
    "hanViet": "PHI CÔNG",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "v./n.",
    "english": "Condemnation of Offensive War",
    "vietnamese": "Phản đối chiến tranh xâm lược (Hán-Việt: PHI CÔNG)",
    "radical": "非 (Hai cánh rẽ ngược) + 工+攵 (Đánh)",
    "radicalAnalysis": "非 (Hai cánh rẽ ngược) + 工+攵 (Đánh)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 非 (Hai cánh rẽ ngược) + 工+攵 (Đánh). Không đồng tình/phản bác (非) hành động đánh chiếm công phá (攻).",
    "components": "Không đồng tình/phản bác (非) hành động đánh chiếm công phá (攻).",
    "context": "Mặc gia chủ trương hòa bình thực dụng, phản đối chiến tranh tàn phá sức lao động nông nghiệp.",
    "related": [
      "兼爱非攻",
      "止战",
      "守城术"
    ],
    "mnemonic": "Phủ nhận (非) hành động dùng vũ lực tiến công (攻) là Phi công.",
    "examples": [
      {
        "zh": "天下之所以乱者，生于不相爱与攻伐无罪之国。",
        "pinyin": "Tiānxià zhī suǒyǐ luàn zhě, shēng yú bù xiāng'ài yǔ gōngfá wúzuì zhī guó.",
        "en": "Disorder under heaven arises from lack of mutual care and attacking innocent states.",
        "vi": "Thiên hạ loạn lạc sinh ra từ thiếu kiêm ái và đem quân đánh nước vô tội."
      },
      {
        "zh": "非攻思想体现了古代平民阶层对和平生产的渴望。",
        "pinyin": "Fēigōng sīxiǎng tǐxiàn le gǔdài píngmín jiēcéng duì hépíng shēngchǎn de kěwàng.",
        "en": "Anti-aggression thought reflected ancient commoners' yearning for peaceful production.",
        "vi": "Tư tưởng Phi công phản ánh khát vọng sản xuất hòa bình của tầng lớp bình dân cổ đại."
      }
    ]
  },
  {
    "id": "zhengming_names",
    "hanzi": "正名",
    "traditional": "正名",
    "pinyin": "zhèngmíng",
    "hanViet": "CHÍNH DANH",
    "liushuType": "指事 · 会意",
    "liushuCategory": "指事 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "v./n.",
    "english": "Rectification of Names",
    "vietnamese": "Định rõ danh phận và trách nhiệm thực chất (Hán-Việt: CHÍNH DANH)",
    "radical": "一+止 (Chính) / 夕+口 (Danh)",
    "radicalAnalysis": "一+止 (Chính) / 夕+口 (Danh)",
    "etymologyAndRadicals": "指事 · 会意 — Bộ thủ: 一+止 (Chính) / 夕+口 (Danh). Chính (正) là dừng lại đúng vạch chuẩn; Danh (名) là gọi tên nhau trong đêm tối cho rõ người.",
    "components": "Chính (正) là dừng lại đúng vạch chuẩn; Danh (名) là gọi tên nhau trong đêm tối cho rõ người.",
    "context": "Khổng Tử nhấn mạnh ngôn từ, chức danh và thực trách phải khớp nhau: 'Danh bất chính tắc ngôn bất thuận'.",
    "related": [
      "名实相符",
      "定名分",
      "言顺事成"
    ],
    "mnemonic": "Đưa tên gọi (名) về đúng vạch chuẩn ngay thẳng (正) là Chính danh.",
    "examples": [
      {
        "zh": "必也正名乎！名不正则言不顺，言不顺则事不成。",
        "pinyin": "Bì yě zhèngmíng hū! Míng bú zhèng zé yán bú shùn...",
        "en": "What is necessary is to rectify names! If names are not right, speech fails to persuade.",
        "vi": "Trước hết phải Chính danh: danh không chính thì lời chẳng thuận, việc chẳng thành."
      },
      {
        "zh": "合同中对双方权责进行严格“正名”可减少后续纠纷。",
        "pinyin": "Hétong zhōng duì shuāngfāng quánzé jìnxíng yángé 'zhèngmíng' kě jiǎnshǎo hòuxù jiūfēn.",
        "en": "Strictly defining each party's roles and duties in contracts reduces disputes.",
        "vi": "Định danh rõ ràng quyền và trách nhiệm trong hợp đồng giúp giảm thiểu tranh chấp."
      }
    ]
  },
  {
    "id": "liyue_rites",
    "hanzi": "礼乐",
    "traditional": "礼乐",
    "pinyin": "lǐyuè",
    "hanViet": "LỄ NHẠC",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Rites and Music (Institutional Order)",
    "vietnamese": "Hệ thống lễ nghi và âm nhạc giáo hóa (Hán-Việt: LỄ NHẠC)",
    "radical": "示+豊 (Lễ) / 乐 (Dây đàn trên khung gỗ)",
    "radicalAnalysis": "示+豊 (Lễ) / 乐 (Dây đàn trên khung gỗ)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 示+豊 (Lễ) / 乐 (Dây đàn trên khung gỗ). Lễ đặt trật tự phân biệt (tôn ti); Nhạc điều hòa tình cảm cộng đồng ('Lễ biệt dị, Nhạc thống đồng').",
    "components": "Lễ đặt trật tự phân biệt (tôn ti); Nhạc điều hòa tình cảm cộng đồng ('Lễ biệt dị, Nhạc thống đồng').",
    "context": "Chu Công Đán sáng chế lễ nhạc làm trụ cột ổn định xã hội Tây Chu thay thế hình phạt thuần túy.",
    "related": [
      "制礼作乐",
      "礼崩乐坏",
      "雅乐"
    ],
    "mnemonic": "Lễ (礼) định khuôn phép bên ngoài, Nhạc (乐) hòa cảm xúc bên trong.",
    "examples": [
      {
        "zh": "礼以节民心，乐以和民声。",
        "pinyin": "Lǐ yǐ jié mínxīn, yuè yǐ hé mínshēng.",
        "en": "Rites regulate people's hearts; music harmonizes their voices.",
        "vi": "Lễ giúp tiết chế lòng dân, Nhạc giúp hòa hợp tiếng lòng dân (Lễ Ký)."
      },
      {
        "zh": "西周礼乐文明深刻影响了东亚宫廷雅乐的发展。",
        "pinyin": "Xīzhōu lǐyuè wénhuà shēnkè yǐngxiǎng le Dōngyà gōngtíng yǎyuè de fāzhǎn.",
        "en": "Western Zhou ritual-music culture deeply influenced East Asian court music.",
        "vi": "Văn minh Lễ nhạc Tây Chu ảnh hưởng sâu sắc tới Nhã nhạc cung đình Đông Á."
      }
    ]
  },
  {
    "id": "renzheng_benevolent",
    "hanzi": "仁政",
    "traditional": "仁政",
    "pinyin": "rénzhèng",
    "hanViet": "NHÂN CHÍNH",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Benevolent Governance",
    "vietnamese": "Chính sách cai trị nhân ái khoan dân (Hán-Việt: NHÂN CHÍNH)",
    "radical": "亻+二 (Nhân) / 正+攵 (Chính)",
    "radicalAnalysis": "亻+二 (Nhân) / 正+攵 (Chính)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 亻+二 (Nhân) / 正+攵 (Chính). Dùng tấm lòng thương người (仁) thực thi việc quản trị ngay thẳng (政).",
    "components": "Dùng tấm lòng thương người (仁) thực thi việc quản trị ngay thẳng (政).",
    "context": "Học thuyết chính trị của Mạnh Tử: giảm thuế, không cướp mùa màng dân cày, mở trường học hương thôn.",
    "related": [
      "王道仁政",
      "民贵君轻",
      "以德服人"
    ],
    "mnemonic": "Cai trị (政) lấy tình thương con người (仁) làm gốc gọi là Nhân chính.",
    "examples": [
      {
        "zh": "行仁政而王，莫之能御也。",
        "pinyin": "Xíng rénzhèng ér wáng, mò zhī néng yù yě.",
        "en": "Practice benevolent governance and achieve true kingship; none can withstand it.",
        "vi": "Thực hành Nhân chính mà vươn tới vương đạo thì chẳng thế lực nào cản nổi (Mạnh Tử)."
      },
      {
        "zh": "良好的营商环境犹如现代经济领域的“仁政”基石。",
        "pinyin": "Liánghǎo de yíngshāng huánjìng yóurú xiàndài jīngjì lǐngyù de 'rénzhèng' jīshí.",
        "en": "A fair business environment serves as the modern foundation of benevolent governance.",
        "vi": "Môi trường kinh doanh minh bạch tựa nền tảng 'Nhân chính' trong quản trị kinh tế hiện đại."
      }
    ]
  },
  {
    "id": "minben_people",
    "hanzi": "民本",
    "traditional": "民本",
    "pinyin": "mínběn",
    "hanViet": "DÂN BẢN",
    "liushuType": "象形 · 指事",
    "liushuCategory": "象形 · 指事",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "People-as-Root Political Thought",
    "vietnamese": "Tư tưởng lấy dân làm gốc (Hán-Việt: DÂN BẢN)",
    "radical": "民 (Bình dân) + 本 (Gốc rễ cây có nét gạch dưới)",
    "radicalAnalysis": "民 (Bình dân) + 本 (Gốc rễ cây có nét gạch dưới)",
    "etymologyAndRadicals": "象形 · 指事 — Bộ thủ: 民 (Bình dân) + 本 (Gốc rễ cây có nét gạch dưới). Cây 木 đánh dấu vị trí gốc rễ bên dưới (本) gắn với đông đảo trăm họ (民).",
    "components": "Cây 木 đánh dấu vị trí gốc rễ bên dưới (本) gắn với đông đảo trăm họ (民).",
    "context": "Truyền thống tư tưởng chính trị xuyên suốt từ 《Thượng Thư》 qua Mạnh Tử tới Lê Lợi–Nguyễn Trãi tại Việt Nam.",
    "related": [
      "民惟邦本",
      "民贵君轻",
      "水能载舟"
    ],
    "mnemonic": "Đặt trăm họ (民) làm phần gốc rễ (本) nuôi dưỡng cả cây quốc gia.",
    "examples": [
      {
        "zh": "民惟邦本，本固邦宁。",
        "pinyin": "Mín wéi bāng běn, běn gù bāng níng.",
        "en": "The people are the root of the state; when the root is firm, the state is tranquil.",
        "vi": "Dân là gốc nước; gốc vững nước mới bình yên."
      },
      {
        "zh": "民生改善始终是评估治理成效的民本尺度。",
        "pinyin": "Mínshēng gǎishàn shǐzhōng shì pínggū zhìlǐ chéngxiào de mínběn chǐdù.",
        "en": "Improving people's livelihoods remains the people-centered yardstick of governance.",
        "vi": "Cải thiện dân sinh luôn là thước đo Dân bản đánh giá hiệu quả quản trị."
      }
    ]
  },
  {
    "id": "liqi_metaphysics",
    "hanzi": "理气",
    "traditional": "理气",
    "pinyin": "lǐqì",
    "hanViet": "LÝ KHÍ",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Principle (Li) and Vital Force (Qi)",
    "vietnamese": "Nguyên lý (Lý) và Vật chất/Năng lượng (Khí) (Hán-Việt: LÝ KHÍ)",
    "radical": "王+里 (Lý - vân ngọc) + 气 (Khí)",
    "radicalAnalysis": "王+里 (Lý - vân ngọc) + 气 (Khí)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 王+里 (Lý - vân ngọc) + 气 (Khí). Lý nguyên nghĩa là đường vân tự nhiên bên trong viên ngọc quý; Khí là hơi năng lượng tạo hình vạn vật.",
    "components": "Lý nguyên nghĩa là đường vân tự nhiên bên trong viên ngọc quý; Khí là hơi năng lượng tạo hình vạn vật.",
    "context": "Cặp phạm trù trung tâm của Tống – Minh Lý học (Chu Hy luận Lý tiên Khí hậu hay Lý Khí bất ly).",
    "related": [
      "理一分殊",
      "理学",
      "理气之辨"
    ],
    "mnemonic": "Vân quy luật nội tại của viên ngọc (理) định hình dòng khí vận động (气).",
    "examples": [
      {
        "zh": "理在气先，理与气决是二物；但在物上看，则二物浑沦不可分开。",
        "pinyin": "Lǐ zài qì xiān... dàn zài wù shàng kàn, zé èrwù húnlún bùkě fēnkāi.",
        "en": "Principle precedes Qi analytically, yet in concrete things the two cannot be separated.",
        "vi": "Xét mặt trừu tượng Lý đi trước Khí, xét trên vật thể thì Lý và Khí hòa quyện không tách rời (Chu Hy)."
      },
      {
        "zh": "宋明理学围绕“理气先后”展开了数百年的哲学思辨。",
        "pinyin": "Sòng-Míng lǐxué wéirào 'lǐqì xiānhòu' zhǎnkāi le shùbǎi nián de zhéxué sībiàn.",
        "en": "Song-Ming Neo-Confucianism debated the priority of Li and Qi for centuries.",
        "vi": "Lý học Tống – Minh xoay quanh cuộc tranh luận Lý – Khí kéo dài hàng trăm năm."
      }
    ]
  },
  {
    "id": "xinxue_mind",
    "hanzi": "心学",
    "traditional": "心学",
    "pinyin": "Xīnxué",
    "hanViet": "TÂM HỌC",
    "liushuType": "象形 · 会意",
    "liushuCategory": "象形 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "School of Mind (Lu-Wang Neo-Confucianism)",
    "vietnamese": "Tâm học (Lục Cửu Uyên – Vương Dương Minh) (Hán-Việt: TÂM HỌC)",
    "radical": "心 (Tượng hình trái tim) + 学",
    "radicalAnalysis": "心 (Tượng hình trái tim) + 学",
    "etymologyAndRadicals": "象形 · 会意 — Bộ thủ: 心 (Tượng hình trái tim) + 学. Trái tim ý thức con người (心) là trung tâm của học vấn tu tập (学).",
    "components": "Trái tim ý thức con người (心) là trung tâm của học vấn tu tập (学).",
    "context": "Phái triết học đối trọng với Trình–Chu Lý học, chủ trương 'Tâm tức Lý' và đánh thức Lương tri nội tại.",
    "related": [
      "心即理",
      "知行合一",
      "致良知"
    ],
    "mnemonic": "Đặt trái tim ý thức (心) làm hạt nhân của học thuyết (学) là Tâm học.",
    "examples": [
      {
        "zh": "宇宙便是吾心，吾心即是宇宙。",
        "pinyin": "Yǔzhòu biàn shì wú xīn, wú xīn jí shì yǔzhòu.",
        "en": "The universe is my mind, and my mind is the universe.",
        "vi": "Vũ trụ chính là tâm ta, tâm ta chính là vũ trụ (Lục Cửu Uyên)."
      },
      {
        "zh": "王阳明心学深刻影响了东亚知识分子的行动勇气。",
        "pinyin": "Wáng Yángmíng Xīnxué shēnkè yǐngxiǎng le Dōngyà zhīshi fènzǐ de xíngdòng yǒngqì.",
        "en": "Wang Yangming's School of Mind profoundly shaped intellectuals' courage to act across East Asia.",
        "vi": "Tâm học Vương Dương Minh ảnh hưởng sâu sắc tới dũng khí hành động của trí thức Đông Á."
      }
    ]
  },
  {
    "id": "xuanxue_neodao",
    "hanzi": "玄学",
    "traditional": "玄学",
    "pinyin": "Xuánxué",
    "hanViet": "HUYỀN HỌC",
    "liushuType": "象形 · 会意",
    "liushuCategory": "象形 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Metaphysics / Neo-Daoism (Wei-Jin Xuanxue)",
    "vietnamese": "Huyền học Ngụy – Tấn (Hán-Việt: HUYỀN HỌC)",
    "radical": "玄 (Sợi tơ nhuộm sâu thăm thẳm) + 学",
    "radicalAnalysis": "玄 (Sợi tơ nhuộm sâu thăm thẳm) + 学",
    "etymologyAndRadicals": "象形 · 会意 — Bộ thủ: 玄 (Sợi tơ nhuộm sâu thăm thẳm) + 学. Màu đen sâu thẳm huyền bí khó đo lường của nguồn gốc vũ trụ (玄之又玄).",
    "components": "Màu đen sâu thẳm huyền bí khó đo lường của nguồn gốc vũ trụ (玄之又玄).",
    "context": "Phong trào triết học thế kỷ III–IV dung hợp Dịch – Lão – Trang bàn về Hữu/Vô và phong độ Danh sĩ.",
    "related": [
      "三玄",
      "以无为本",
      "得意忘言"
    ],
    "mnemonic": "Nghiên cứu cội nguồn sâu thẳm huyền vi của vũ trụ (玄) gọi là Huyền học.",
    "examples": [
      {
        "zh": "玄之又玄，众妙之门。",
        "pinyin": "Xuán zhī yòu xuán, zhòngmiào zhī mén.",
        "en": "Mystery within mystery, the gateway of all subtle wonders.",
        "vi": "Huyền diệu lại càng huyền diệu, ấy là cánh cửa của mọi điều kỳ diệu."
      },
      {
        "zh": "魏晋玄学推动了中国山水诗与写意书画的自觉时代。",
        "pinyin": "Wèi-Jìn Xuánxué tuīdòng le Zhōngguó shānshuǐshī yǔ xiěyì shūhuà de zìjué shídài.",
        "en": "Wei-Jin Xuanxue catalyzed China's age of self-conscious landscape poetry and painting.",
        "vi": "Huyền học Ngụy – Tấn thúc đẩy thời đại tự giác của thơ sơn thủy và thư họa."
      }
    ]
  },
  {
    "id": "dunwu_enlighten",
    "hanzi": "顿悟",
    "traditional": "顿悟",
    "pinyin": "dùnwù",
    "hanViet": "ĐỐN NGỘ",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "v./n.",
    "english": "Sudden Enlightenment (Southern Chan)",
    "vietnamese": "Tỉnh ngộ tức khắc bản tâm (Hán-Việt: ĐỐN NGỘ)",
    "radical": "页 (Đầu cúi gật) + 忄(Tâm)+吾 (Ta nhận ra)",
    "radicalAnalysis": "页 (Đầu cúi gật) + 忄(Tâm)+吾 (Ta nhận ra)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 页 (Đầu cúi gật) + 忄(Tâm)+吾 (Ta nhận ra). Chữ 悟 gồm bộ Tâm 忄 và âm 吾 (chính ta): bất ngờ thức tỉnh nhận ra bản thân trong một khoảnh khắc.",
    "components": "Chữ 悟 gồm bộ Tâm 忄 và âm 吾 (chính ta): bất ngờ thức tỉnh nhận ra bản thân trong một khoảnh khắc.",
    "context": "Cốt lõi của Thiền tông Lục Tổ Huệ Năng (khác với Tiệm tu từng bước của Bắc tông Thần Tú).",
    "related": [
      "顿悟成佛",
      "南宗禅",
      "见性成佛"
    ],
    "mnemonic": "Trái tim (忄) chạm ngay vào bản ngã chân thật (吾) trong tích tắc (顿) là Đốn ngộ.",
    "examples": [
      {
        "zh": "迷来经累劫，悟则刹那间。",
        "pinyin": "Mí lái jīng lèijié, wù zé chànà jiān.",
        "en": "Delusion spans countless kalpas, while awakening takes but a single instant.",
        "vi": "Mê lầm trải qua muôn kiếp, giác ngộ chỉ trong một sát-na (Đàn Kinh)."
      },
      {
        "zh": "面对复杂的数据分析，她突然顿悟了核心规律。",
        "pinyin": "Miànduì fùzá de shùjù fēnxī, tā tūrán dùnwù le héxīn guīlǜ.",
        "en": "Facing complex data analysis, she suddenly grasped the core pattern.",
        "vi": "Đối diện phân tích dữ liệu phức tạp, cô ấy bất ngờ đốn ngộ ra quy luật cốt lõi."
      }
    ]
  },
  {
    "id": "chanzong_zen",
    "hanzi": "禅宗",
    "traditional": "禅宗",
    "pinyin": "Chánzōng",
    "hanViet": "THIỀN TÔNG",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 6 / Tôn giáo",
    "pos": "n.",
    "english": "Chan Buddhism (Zen)",
    "vietnamese": "Phật giáo Thiền Tông (Hán-Việt: THIỀN TÔNG)",
    "radical": "示 (Tế lễ) + 单 / 宀+示 (Tông - tổ miếu)",
    "radicalAnalysis": "示 (Tế lễ) + 单 / 宀+示 (Tông - tổ miếu)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 示 (Tế lễ) + 单 / 宀+示 (Tông - tổ miếu). Phiên âm tiếng Phạn Dhyāna (thiền định) kết hợp tông phái truyền thừa từ tổ sư.",
    "components": "Phiên âm tiếng Phạn Dhyāna (thiền định) kết hợp tông phái truyền thừa từ tổ sư.",
    "context": "Phái Phật giáo bản địa hóa sâu sắc nhất tại Trung Hoa (Đạt Ma → Huệ Năng), truyền sang Việt Nam thành Trúc Lâm Yên Tử.",
    "related": [
      "禅意",
      "直指人心",
      "林泉禅味"
    ],
    "mnemonic": "Truyền mạch tổ sư (宗) qua tĩnh tâm quán chiếu (禅) là Thiền tông.",
    "examples": [
      {
        "zh": "不立文字，教外别传；直指人心，见性成佛。",
        "pinyin": "Bù lì wénzì, jiàowài biéchuán; zhízhǐ rénxīn, jiànxìng chéng Fó.",
        "en": "No dependence on words; transmission outside scriptures; pointing directly at the mind.",
        "vi": "Chẳng lập văn tự, truyền riêng ngoài giáo điển; chỉ thẳng lòng người thấy tánh thành Phật."
      },
      {
        "zh": "宋代水墨写意画深受禅宗留白美学影响。",
        "pinyin": "Sòngdài shuǐmò xiěyìhuà shēnshòu Chánzōng liúbái měixué yǐngxiǎng.",
        "en": "Song ink-wash painting was deeply influenced by Chan Buddhism's empty-space aesthetics.",
        "vi": "Hội họa thủy mặc đời Tống chịu ảnh hưởng sâu sắc của mỹ học lưu bạch Thiền tông."
      }
    ]
  },
  {
    "id": "ziqiang_strive",
    "hanzi": "自强",
    "traditional": "自强",
    "pinyin": "zìqiáng",
    "hanViet": "TỰ CƯỜNG",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Triết học",
    "pos": "v./n.",
    "english": "Self-strengthening; tireless striving",
    "vietnamese": "Tự cường, tự lực vươn lên không ngừng (Hán-Việt: TỰ CƯỜNG)",
    "radical": "自 (Tự mình) + 强 (Cung cứng bắn mạnh)",
    "radicalAnalysis": "自 (Tự mình) + 强 (Cung cứng bắn mạnh)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 自 (Tự mình) + 强 (Cung cứng bắn mạnh). Tự bản thân (自) vươn sức mạnh dẻo dai như dây cung (弓 + 虽 -> 强).",
    "components": "Tự bản thân (自) vươn sức mạnh dẻo dai như dây cung (弓 + 虽 -> 强).",
    "context": "Châm ngôn trường học Thanh Hoa: 'Tự cường bất tức, Hậu đức tải vật'.",
    "related": [
      "自强不息",
      "自立自强",
      "发奋图强"
    ],
    "mnemonic": "Tự bản thân (自) giương cung giữ sức mạnh bền bỉ (强) là Tự cường.",
    "examples": [
      {
        "zh": "天行健，君子以自强不息。",
        "pinyin": "Tiān xíng jiàn, jūnzǐ yǐ zìqiáng bù xī.",
        "en": "Heaven moves with vigor; thus the cultivated person strives unceasingly.",
        "vi": "Trời vận động mạnh mẽ, người quân tử tự cường chẳng nghỉ."
      },
      {
        "zh": "制造业升级必须依靠核心技术的自主创新与自强。",
        "pinyin": "Zhìzàoyè shēngjí bìxū yīkào héxīn jìshù de zìzhǔ chuàngxīn yǔ zìqiáng.",
        "en": "Manufacturing upgrading relies on independent innovation and self-strengthening in core tech.",
        "vi": "Nâng cấp sản xuất bắt buộc dựa vào đổi mới sáng tạo và tự cường công nghệ cốt lõi."
      }
    ]
  },
  {
    "id": "shendu_vigilance",
    "hanzi": "慎独",
    "traditional": "慎独",
    "pinyin": "shèndú",
    "hanViet": "THẬN ĐỘC",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "v./n.",
    "english": "Vigilance in Solitude (Self-integrity)",
    "vietnamese": "Giữ mình nghiêm cẩn ngay khi ở một mình (Hán-Việt: THẬN ĐỘC)",
    "radical": "忄+真 (Thận) / 犭+蜀 (Độc)",
    "radicalAnalysis": "忄+真 (Thận) / 犭+蜀 (Độc)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 忄+真 (Thận) / 犭+蜀 (Độc). Tâm (忄) giữ chân thật (真) ngay cả khi ở một thân một mình (独).",
    "components": "Tâm (忄) giữ chân thật (真) ngay cả khi ở một thân một mình (独).",
    "context": "Công phu đạo đức Nho gia trong 《Đại Học》 & 《Trung Dung》: trung thực tuyệt đối khi không ai giám sát.",
    "related": [
      "修养",
      "律己",
      "诚意正心"
    ],
    "mnemonic": "Giữ tấm lòng (忄) chân chính (真) lúc đơn độc một mình (独) là Thận độc.",
    "examples": [
      {
        "zh": "莫见乎隐，莫显乎微，故君子慎其独也。",
        "pinyin": "Mò xiàn hū yǐn, mò xiǎn hū wēi, gù jūnzǐ shèn qí dú yě.",
        "en": "Nothing is more visible than what is hidden; therefore the superior person is watchful when alone.",
        "vi": "Không gì lộ rõ bằng chỗ khuất lấp; vì vậy quân tử giữ Thận Độc."
      },
      {
        "zh": "远程办公与财务审计非常考验从业者的“慎独”职业操守。",
        "pinyin": "Yuǎnchéng bàngōng yǔ cáiwù shěnjì fēicháng kǎoyàn cóngyèzhě de 'shèndú' zhíyè cāoshǒu.",
        "en": "Remote work and financial auditing test practitioners' integrity when unobserved.",
        "vi": "Làm việc từ xa và kiểm toán tài chính thử thách rất lớn phẩm chất 'Thận độc' nghề nghiệp."
      }
    ]
  },
  {
    "id": "xiushen_cultivate",
    "hanzi": "修身",
    "traditional": "修身",
    "pinyin": "xiūshēn",
    "hanViet": "TU THÂN",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "v./n.",
    "english": "Self-Cultivation",
    "vietnamese": "Tu dưỡng rèn giũa bản thân (Hán-Việt: TU THÂN)",
    "radical": "攸+彡 (Tu - trang điểm gọt giũa) + 身 (Thân thể mang thai đứng nghiêng)",
    "radicalAnalysis": "攸+彡 (Tu - trang điểm gọt giũa) + 身 (Thân thể mang thai đứng nghiêng)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 攸+彡 (Tu - trang điểm gọt giũa) + 身 (Thân thể mang thai đứng nghiêng). Gọt giũa tỉa tót (彡) nhân cách và thân thể (身) để đạt chuẩn mực.",
    "components": "Gọt giũa tỉa tót (彡) nhân cách và thân thể (身) để đạt chuẩn mực.",
    "context": "Điểm xuất phát không thể thay thế trong Bát Điều Mục sách 《Đại Học》: từ thiên tử đến thứ dân đều lấy Tu thân làm gốc.",
    "related": [
      "修身齐家",
      "涵养",
      "反求诸己"
    ],
    "mnemonic": "Dùng bút vẽ gọt giũa (彡) hoàn thiện chính thân mình (身) là Tu thân.",
    "examples": [
      {
        "zh": "自天子以至于庶人，壹是皆以修身为本。",
        "pinyin": "Zì tiānzǐ yǐ zhìyú shùrén, yīshì jiē yǐ xiūshēn wéi běn.",
        "en": "From the Son of Heaven down to ordinary people, all alike must take self-cultivation as the root.",
        "vi": "Từ thiên tử đến thường dân hết thảy đều lấy Tu thân làm gốc."
      },
      {
        "zh": "领导力的提升往往始于日常阅读与持续的自我修身。",
        "pinyin": "Lǐngdǎolì de tíshēng wǎngwǎng shǐyú rìcháng yuèdú yǔ chíxù de zìwǒ xiūshēn.",
        "en": "Leadership growth begins with daily reading and steady self-cultivation.",
        "vi": "Nâng cao năng lực lãnh đạo thường bắt đầu từ thói quen đọc sách và tu thân bền bỉ."
      }
    ]
  },
  {
    "id": "qijia_family",
    "hanzi": "齐家",
    "traditional": "齊家",
    "pinyin": "qíjiā",
    "hanViet": "TỀ GIA",
    "liushuType": "象形 · 会意",
    "liushuCategory": "象形 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "v./n.",
    "english": "Regulating / Harmonizing the Family",
    "vietnamese": "Tề chỉnh sắp xếp gia đình hòa thuận (Hán-Việt: TỀ GIA)",
    "radical": "齐 (Bông lúa bằng nhau) + 宀+豕 (Nhà có mái và lợn)",
    "radicalAnalysis": "齐 (Bông lúa bằng nhau) + 宀+豕 (Nhà có mái và lợn)",
    "etymologyAndRadicals": "象形 · 会意 — Bộ thủ: 齐 (Bông lúa bằng nhau) + 宀+豕 (Nhà có mái và lợn). Các bông lúa ngang bằng nhau (齐) tượng trưng trật tự hài hòa dưới mái nhà (家).",
    "components": "Các bông lúa ngang bằng nhau (齐) tượng trưng trật tự hài hòa dưới mái nhà (家).",
    "context": "Nhịp cầu nối Tu thân cá nhân với Trị quốc công vụ trong cấu trúc xã hội Nho giáo.",
    "related": [
      "修身齐家治国",
      "家风",
      "家训"
    ],
    "mnemonic": "Xếp đều bông lúa (齐) hòa thuận dưới mái ấm (家) gọi là Tề gia.",
    "examples": [
      {
        "zh": "欲治其国者，先齐其家。",
        "pinyin": "Yù zhì qí guó zhě, xiān qí qí jiā.",
        "en": "Those who wish to govern the state well must first bring order to their families.",
        "vi": "Muốn trị yên quốc gia trước hết phải tề chỉnh gia đình mình."
      },
      {
        "zh": "家族企业传承成功的关键在于“齐家”与现代治理的结合。",
        "pinyin": "Jiāzú qǐyè chuánchéng chénggōng de guānjiàn zàiyú 'qíjiā' yǔ xiàndài zhìlǐ de jiéhé.",
        "en": "Successful family business succession combines family harmony with modern governance.",
        "vi": "Chìa khóa kế nghiệp thành công của doanh nghiệp gia đình nằm ở kết hợp Tề gia và quản trị hiện đại."
      }
    ]
  },
  {
    "id": "datong_utopia",
    "hanzi": "大同",
    "traditional": "大同",
    "pinyin": "Dàtóng",
    "hanViet": "ĐẠI ĐỒNG",
    "liushuType": "象形 · 会意",
    "liushuCategory": "象形 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "The Great Unity / Commonwealth Society",
    "vietnamese": "Thế giới Đại Đồng hòa hợp công chính (Hán-Việt: ĐẠI ĐỒNG)",
    "radical": "大 (Người dang tay) + 同 (Hợp miệng cùng lời dưới một mái)",
    "radicalAnalysis": "大 (Người dang tay) + 同 (Hợp miệng cùng lời dưới một mái)",
    "etymologyAndRadicals": "象形 · 会意 — Bộ thủ: 大 (Người dang tay) + 同 (Hợp miệng cùng lời dưới một mái). Cộng đồng rộng lớn (大) đồng lòng hòa hợp một quy ước chung (同).",
    "components": "Cộng đồng rộng lớn (大) đồng lòng hòa hợp một quy ước chung (同).",
    "context": "Lý tưởng chính trị trong 《Lễ Ký – Lễ Vận》, Khang Hữu Vi viết 《Đại Đồng Thư》 và Tôn Trung Sơn đề chữ 'Thiên hạ vi công'.",
    "related": [
      "天下为公",
      "礼运大同",
      "命运共同体"
    ],
    "mnemonic": "Mọi người cùng một mái vòm (同) hướng tới tầm vóc lớn (大) là Đại Đồng.",
    "examples": [
      {
        "zh": "大道之行也，天下为公... 是谓大同。",
        "pinyin": "Dàdào zhī xíng yě, tiānxià wéi gōng... shì wèi Dàtóng.",
        "en": "When the Great Way prevails, the world is a commonwealth... this is called the Great Unity.",
        "vi": "Đạo lớn thi hành thì thiên hạ là của chung... ấy gọi là Đại Đồng."
      },
      {
        "zh": "尽管各地习俗迥异，东亚文化在尊师重教方面却有着高度的“大同”。",
        "pinyin": "Jǐnguǎn gèdì xísú jiǒngyì, Dōngyà wénhuà zài zūnshī zhòngjiào fāngmiàn què yǒuzhe gāodù de 'dàtóng'.",
        "en": "Despite regional customs varying widely, East Asia shares great commonality in valuing education.",
        "vi": "Dù tập quán từng vùng khác biệt, văn hóa Đông Á có sự Đại đồng cao độ về truyền thống tôn sư trọng đạo."
      }
    ]
  },
  {
    "id": "huangdi_emperor",
    "hanzi": "皇帝",
    "traditional": "皇帝",
    "pinyin": "Huángdì",
    "hanViet": "HOÀNG ĐẾ",
    "liushuType": "会意 · 象形",
    "liushuCategory": "会意 · 象形",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Lịch sử",
    "pos": "n.",
    "english": "Emperor (Supreme Imperial Title)",
    "vietnamese": "Hoàng đế (do Tần Thủy Hoàng đặt từ Tam Hoàng Ngũ Đế) (Hán-Việt: HOÀNG ĐẾ)",
    "radical": "白+王 (Hoàng rực sáng) + 帝 (Đài tế trời)",
    "radicalAnalysis": "白+王 (Hoàng rực sáng) + 帝 (Đài tế trời)",
    "etymologyAndRadicals": "会意 · 象形 — Bộ thủ: 白+王 (Hoàng rực sáng) + 帝 (Đài tế trời). Ghép chữ Hoàng trong Tam Hoàng (chỉ vương miện phát sáng) và Đế trong Ngũ Đế (chỉ bàn tế Thiên Đế).",
    "components": "Ghép chữ Hoàng trong Tam Hoàng (chỉ vương miện phát sáng) và Đế trong Ngũ Đế (chỉ bàn tế Thiên Đế).",
    "context": "Tần Thủy Hoàng Doanh Chính năm 221 TCN sáng tạo tước hiệu này thay cho danh xưng 'Vương' thời Chu.",
    "related": [
      "秦始皇",
      "皇权",
      "帝国"
    ],
    "mnemonic": "Hào quang chói lọi Tam Hoàng (皇) hợp quyền uy tế trời Ngũ Đế (帝) thành Hoàng đế.",
    "examples": [
      {
        "zh": "自上古以来未尝有，今陛下兴义兵... 故定号为皇帝。",
        "pinyin": "Zì shànggǔ yǐlái wèicháng yǒu... gù dìng hào wéi Huángdì.",
        "en": "Unprecedented since antiquity, the First Emperor combined Huang and Di into the title Emperor.",
        "vi": "Từ thượng cổ chưa từng có, nên định danh hiệu hợp nhất là Hoàng Đế (Sử Ký)."
      },
      {
        "zh": "北京故宫曾是明清两代二十四位皇帝处理政务的居所。",
        "pinyin": "Běijīng Gùgōng céng shì Míng Qīng liǎng dài èrshísì wèi huángdì chǔlǐ zhèngwù de jūsuǒ.",
        "en": "Beijing's Forbidden City was home and court for 24 Ming and Qing emperors.",
        "vi": "Cố Cung Bắc Kinh từng là nơi ở và trị vì của 24 vị Hoàng đế triều Minh – Thanh."
      }
    ]
  },
  {
    "id": "junxian_prefecture",
    "hanzi": "郡县",
    "traditional": "郡县",
    "pinyin": "jùnxiàn",
    "hanViet": "QUẬN HUYỆN",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Commandery and County System",
    "vietnamese": "Chế độ Quận Huyện tập quyền (Hán-Việt: QUẬN HUYỆN)",
    "radical": "君+阝 (Quận) / 县 (Huyện)",
    "radicalAnalysis": "君+阝 (Quận) / 县 (Huyện)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 君+阝 (Quận) / 县 (Huyện). Quận là đất cai trị thay quân vương (君+阝); Huyện (懸) nghĩa gốc là treo gắn phụ thuộc vào phủ trung tâm.",
    "components": "Quận là đất cai trị thay quân vương (君+阝); Huyện (懸) nghĩa gốc là treo gắn phụ thuộc vào phủ trung tâm.",
    "context": "Thay thế Phân phong chư hầu cha truyền con nối bằng quan lại do triều đình bổ nhiệm có thời hạn.",
    "related": [
      "郡县制",
      "中央集权",
      "废封建"
    ],
    "mnemonic": "Đất đai chia theo đơn vị quản lý của vua (郡) gắn treo trực thuộc (县) là Quận Huyện.",
    "examples": [
      {
        "zh": "海内为郡县，法令由一统。",
        "pinyin": "Hǎinèi wéi jùnxiàn, fǎlìng yóu yītǒng.",
        "en": "Within the four seas all became commanderies and counties, and laws were unified.",
        "vi": "Trong bốn bể đều chia Quận Huyện, pháp lệnh quy về một mối (Sử Ký)."
      },
      {
        "zh": "秦朝在全国推广的郡县制奠定了两千年地方行政区划的基础。",
        "pinyin": "Qíncháo zài quánguó tuīguǎng de jùnxiànzhì diàndìng le liǎngqiān nián dìfāng xíngzhèng qūhuà de jīchǔ.",
        "en": "The Qin commandery-county system laid the foundation for two millennia of local administration.",
        "vi": "Chế độ Quận Huyện nhà Tần đặt nền móng hơn 2.000 năm phân cấp hành chính."
      }
    ]
  },
  {
    "id": "shixi_hereditary",
    "hanzi": "世袭",
    "traditional": "世袭",
    "pinyin": "shìxí",
    "hanViet": "THẾ TẬP",
    "liushuType": "指事 · 形声",
    "liushuCategory": "指事 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "v./adj.",
    "english": "Hereditary Succession",
    "vietnamese": "Cha truyền con nối (đời nọ nối đời kia) (Hán-Việt: THẾ TẬP)",
    "radical": "一 / 龙+衣 (Tập - mặc áo long bào nối ngôi)",
    "radicalAnalysis": "一 / 龙+衣 (Tập - mặc áo long bào nối ngôi)",
    "etymologyAndRadicals": "指事 · 形声 — Bộ thủ: 一 / 龙+衣 (Tập - mặc áo long bào nối ngôi). Thế (世) gồm 3 mầm cây 30 năm nối một đời; Tập (袭) là khoác lại bộ lễ phục (衣) uy nghiêm (龙).",
    "components": "Thế (世) gồm 3 mầm cây 30 năm nối một đời; Tập (袭) là khoác lại bộ lễ phục (衣) uy nghiêm (龙).",
    "context": "Chế độ từ thời nhà Hạ chuyển từ Thiện nhượng sang Gia thiên hạ.",
    "related": [
      "世袭制",
      "世卿世禄",
      "家天下"
    ],
    "mnemonic": "Hết một thế hệ (世) lại khoác bộ lễ phục cũ (袭) tiếp quản ngôi vị gọi là Thế tập.",
    "examples": [
      {
        "zh": "大人世及以为礼。",
        "pinyin": "Dàrén shì jí yǐ wéi lǐ.",
        "en": "Rulers pass power down through hereditary succession as custom.",
        "vi": "Bậc quyền quý truyền nối đời đời làm thành lễ chế (Lễ Ký)."
      },
      {
        "zh": "现代股份制公司逐步取代了传统的家族世袭管理模式。",
        "pinyin": "Xiàndài gǔfènzhì gōngsī zhúbù qǔdài le chuántǒng de jiāzú shìxí guǎnlǐ móshì.",
        "en": "Modern joint-stock companies gradually replaced traditional hereditary family management.",
        "vi": "Công ty cổ phần hiện đại từng bước thay thế mô hình quản trị gia đình thế tập truyền thống."
      }
    ]
  },
  {
    "id": "yunhe_canal",
    "hanzi": "运河",
    "traditional": "运河",
    "pinyin": "yùnhé",
    "hanViet": "VẬN HÀ",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Địa lý – Lịch sử",
    "pos": "n.",
    "english": "Grand Canal / Artificial Waterway",
    "vietnamese": "Kênh đào vận tải (như Đại Vận Hà, Kênh Bình Lục) (Hán-Việt: VẬN HÀ)",
    "radical": "辶+军 (Vận) / 氵+可 (Hà)",
    "radicalAnalysis": "辶+军 (Vận) / 氵+可 (Hà)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 辶+军 (Vận) / 氵+可 (Hà). Vận là chuyển quân lương bằng xe (辶+军); Hà là dòng sông (氵+可).",
    "components": "Vận là chuyển quân lương bằng xe (辶+军); Hà là dòng sông (氵+可).",
    "context": "Đại Vận Hà Kinh–Hàng dài 1.794 km (di sản UNESCO) và dự án mới Kênh Bình Lục Quảng Tây nối ra vịnh Bắc Bộ.",
    "related": [
      "大运河",
      "平陆运河",
      "漕运"
    ],
    "mnemonic": "Đào dòng sông nhân tạo (河) để vận chuyển lương thực hàng hóa (运) là Vận hà.",
    "examples": [
      {
        "zh": "尽道隋亡为此河，至今千里赖通波。",
        "pinyin": "Jìn dào Suí wáng wèi cǐ hé, zhìjīn qiānlǐ lài tōngbō.",
        "en": "All blame the Sui's fall on this canal, yet today a thousand li still rely on its navigable waters.",
        "vi": "Đời chê Tùy mất vì đào con sông ấy, nhưng nay nghìn dặm vẫn nhờ sóng thông thương."
      },
      {
        "zh": "连接南宁与北部湾的平陆运河将显著降低西南对越海运成本。",
        "pinyin": "Liánjiē Nánníng yǔ Běibùwān de Pínglù Yùnhé jiāng xiǎnzhù jiàngdī xīnán duì Yuè hǎiyùn chéngběn.",
        "en": "The Pinglu Canal linking Nanning and the Beibu Gulf will cut shipping costs to Vietnam.",
        "vi": "Kênh đào Bình Lục nối Nam Ninh với vịnh Bắc Bộ sẽ giảm đáng kể chi phí vận tải biển sang Việt Nam."
      }
    ]
  },
  {
    "id": "changcheng_wall",
    "hanzi": "长城",
    "traditional": "长城",
    "pinyin": "Chángchéng",
    "hanViet": "TRƯỜNG THÀNH",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "HSK 1-2",
    "topicTag": "HSK 2-3 / Di sản",
    "pos": "n.",
    "english": "The Great Wall",
    "vietnamese": "Vạn Lý Trường Thành (Hán-Việt: TRƯỜNG THÀNH)",
    "radical": "长 (Dài) + 土+成 (Thành đắp bằng đất)",
    "radicalAnalysis": "长 (Dài) + 土+成 (Thành đắp bằng đất)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 长 (Dài) + 土+成 (Thành đắp bằng đất). Bức tường thành (城) bằng đất đá kéo dài (长) qua núi non.",
    "components": "Bức tường thành (城) bằng đất đá kéo dài (长) qua núi non.",
    "context": "Hơn 21.000 km lũy phòng thủ hợp nhất qua Tần–Hán–Minh, nối Sơn Hải Quan tới Gia Dục Quan.",
    "related": [
      "万里长城",
      "山海关",
      "嘉峪关"
    ],
    "mnemonic": "Lũy đất kiên cố (城) trải dài vô tận (长) là Trường Thành.",
    "examples": [
      {
        "zh": "不到长城非好汉。",
        "pinyin": "Bú dào Chángchéng fēi hǎohàn.",
        "en": "He who has not climbed the Great Wall is not a true hero.",
        "vi": "Chưa lên Trường Thành chưa phải hảo hán."
      },
      {
        "zh": "八达岭与慕田峪长城体现了明代砖石修筑工艺的巅峰。",
        "pinyin": "Bādálǐng yǔ Mùtiányù Chángchéng tǐxiàn le Míngdài zhuānshí xiūzhù gōngyì de diānfēng.",
        "en": "Badaling and Mutianyu showcase the peak of Ming brick-and-stone fortification craft.",
        "vi": "Bát Đạt Lĩnh và Mộ Điền Dục thể hiện đỉnh cao kỹ thuật xây gạch đá thời Minh."
      }
    ]
  },
  {
    "id": "bingmayong_terracotta",
    "hanzi": "兵马俑",
    "traditional": "兵马俑",
    "pinyin": "Bīngmǎyǒng",
    "hanViet": "BINH MÃ DŨNG",
    "liushuType": "会意 · 象形",
    "liushuCategory": "会意 · 象形",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Bảo tàng",
    "pos": "n.",
    "english": "Terracotta Army (Xi'an)",
    "vietnamese": "Đội quân đất nung Tần Thủy Hoàng (Hán-Việt: BINH MÃ DŨNG)",
    "radical": "兵 (Tay cầm vũ khí) + 马 (Ngựa) + 亻+甬 (Tượng hình người)",
    "radicalAnalysis": "兵 (Tay cầm vũ khí) + 马 (Ngựa) + 亻+甬 (Tượng hình người)",
    "etymologyAndRadicals": "会意 · 象形 — Bộ thủ: 兵 (Tay cầm vũ khí) + 马 (Ngựa) + 亻+甬 (Tượng hình người). Người lính (兵), chiến mã (马) và tượng hình nhân tùy táng (俑).",
    "components": "Người lính (兵), chiến mã (马) và tượng hình nhân tùy táng (俑).",
    "context": "Hơn 8.000 tượng đất nung kích thước người thật tại Tây An (Thiểm Tây), không khuôn mặt nào trùng nhau.",
    "related": [
      "秦始皇陵",
      "世界奇迹",
      "陶俑"
    ],
    "mnemonic": "Những hình nhân tượng đất (俑) tái hiện binh sĩ (兵) và ngựa chiến (马).",
    "examples": [
      {
        "zh": "秦始皇陵兵马俑展现了秦代写实雕塑与军阵编制的宏伟气魄。",
        "pinyin": "Qínshǐhuánglíng Bīngmǎyǒng zhǎnxiàn le Qíndài xiěshí diāosù yǔ jūnzhèn biānzhì de hóngwěi qìpò.",
        "en": "The Terracotta Warriors display the grand realism of Qin sculpture and military formations.",
        "vi": "Binh Mã Dũng lăng Tần Thủy Hoàng phô diễn điêu khắc tả thực và quân trận thời Tần."
      },
      {
        "zh": "前往西安旅游，兵马俑博物馆与城墙是必访文化地标。",
        "pinyin": "Qiánwǎng Xī'ān lǚyóu, Bīngmǎyǒng Bówùguǎn yǔ Chéngqiáng shì bìfǎng wénhuà dìbiāo.",
        "en": "When visiting Xi'an, the Terracotta Museum and City Wall are essential landmarks.",
        "vi": "Du lịch Tây An không thể bỏ qua Bảo tàng Binh Mã Dũng và Tường thành cổ."
      }
    ]
  },
  {
    "id": "jinwen_bronze",
    "hanzi": "金文",
    "traditional": "金文",
    "pinyin": "jīnwén",
    "hanViet": "KIM VĂN",
    "liushuType": "象形 · 象形",
    "liushuCategory": "象形 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Bronze Inscriptions (Shang-Zhou)",
    "vietnamese": "Chữ đúc trên đồ đồng thời Thương – Chu (Chung Đỉnh văn) (Hán-Việt: KIM VĂN)",
    "radical": "金 (Cục kim loại trong đất) + 文 (Chữ viết)",
    "radicalAnalysis": "金 (Cục kim loại trong đất) + 文 (Chữ viết)",
    "etymologyAndRadicals": "象形 · 象形 — Bộ thủ: 金 (Cục kim loại trong đất) + 文 (Chữ viết). Văn tự (文) khắc đúc trên đồ thanh đồng (thời cổ gọi đồng là Kim 金).",
    "components": "Văn tự (文) khắc đúc trên đồ thanh đồng (thời cổ gọi đồng là Kim 金).",
    "context": "Mao Công Đỉnh có bài minh văn 497 chữ Kim văn, là nguồn sử liệu sơ cấp quý hơn cả văn bản chép tay.",
    "related": [
      "钟鼎文",
      "毛公鼎",
      "金石学"
    ],
    "mnemonic": "Văn tự (文) khắc đúc trên chuông đỉnh bằng đồng thau (金) gọi là Kim văn.",
    "examples": [
      {
        "zh": "西周毛公鼎内壁铸有四百九十七字金文，堪称青铜史诗。",
        "pinyin": "Xīzhōu Máo Gōng Dǐng nèibì zhù yǒu sìbǎi jiǔshíqī zì jīnwén, kānchēng qīngtóng shīshī.",
        "en": "The Mao Gong Ding bears 497 bronze characters inside—an epic cast in bronze.",
        "vi": "Trong lòng Mao Công Đỉnh đúc 497 chữ Kim văn tựa thiên sử thi thanh đồng."
      },
      {
        "zh": "研究商周金文是理解古代礼制与汉字演变的必经之路。",
        "pinyin": "Yánjiū Shāng-Zhōu jīnwén shì lǐjiě gǔdài lǐzhì yǔ hànzì yǎnbiàn de bìjīng zhī lù.",
        "en": "Studying Shang-Zhou bronze scripts is essential to understanding ancient rites and Hanzi evolution.",
        "vi": "Nghiên cứu Kim văn Thương – Chu là con đường tất yếu hiểu lễ chế và lịch sử chữ Hán."
      }
    ]
  },
  {
    "id": "xiaozhuan_seal",
    "hanzi": "小篆",
    "traditional": "小篆",
    "pinyin": "xiǎozhuàn",
    "hanViet": "TIỂU TRIỆN",
    "liushuType": "指事 · 形声",
    "liushuCategory": "指事 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Small Seal Script (Unified Qin Script)",
    "vietnamese": "Chữ Tiểu Triện (Lý Tư chuẩn hóa thời Tần) (Hán-Việt: TIỂU TRIỆN)",
    "radical": "小 (Nhỏ gọn cân đối) + 竹+彖 (Chữ viết trên thẻ tre)",
    "radicalAnalysis": "小 (Nhỏ gọn cân đối) + 竹+彖 (Chữ viết trên thẻ tre)",
    "etymologyAndRadicals": "指事 · 形声 — Bộ thủ: 小 (Nhỏ gọn cân đối) + 竹+彖 (Chữ viết trên thẻ tre). Chữ Tiểu (小) chỉ thể thu gọn chuẩn hóa; Triện (篆) vẽ bó thẻ tre trúc viết nét tròn đều.",
    "components": "Chữ Tiểu (小) chỉ thể thu gọn chuẩn hóa; Triện (篆) vẽ bó thẻ tre trúc viết nét tròn đều.",
    "context": "Kiểu chữ Triện chuẩn hóa thống nhất sáu nước năm 221 TCN ('Thư đồng văn'), nền tảng bộ thủ của 《Thuyết Văn Giải Tự》.",
    "related": [
      "书同文",
      "篆书",
      "说文解字"
    ],
    "mnemonic": "Thể chữ thon dài tròn đều đối xứng chuẩn hóa do thừa tướng Lý Tư san định.",
    "examples": [
      {
        "zh": "书同文字，天下乃一。",
        "pinyin": "Shū tóng wénzì, tiānxià nǎi yī.",
        "en": "Unify the writing system, and the realm becomes one.",
        "vi": "Thống nhất văn tự (Tiểu Triện), thiên hạ quy về một mối."
      },
      {
        "zh": "如今篆刻印章仍普遍沿用结构典雅的小篆字体。",
        "pinyin": "Rújīn zhuànkè yìnzhāng réng pǔbiàn yányòng jiégòu diǎnyǎ de xiǎozhuàn zìtǐ.",
        "en": "Today seal carving still predominantly uses the dignified Small Seal script.",
        "vi": "Ngày nay nghệ thuật triện khắc ấn chương vẫn phổ biến dùng nét chữ Tiểu Triện cổ kính."
      }
    ]
  },
  {
    "id": "lishu_clerical",
    "hanzi": "隶书",
    "traditional": "隶书",
    "pinyin": "lìshū",
    "hanViet": "LỆ THƯ",
    "liushuType": "会意 · 会意",
    "liushuCategory": "会意 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Clerical Script (Han Dynasty Standard)",
    "vietnamese": "Chữ Lệ (lệ biến từ Tần sang Hán) (Hán-Việt: LỆ THƯ)",
    "radical": "隶 (Tay nắm đuôi/người thư lại) + 书 (Bút viết)",
    "radicalAnalysis": "隶 (Tay nắm đuôi/người thư lại) + 书 (Bút viết)",
    "etymologyAndRadicals": "会意 · 会意 — Bộ thủ: 隶 (Tay nắm đuôi/người thư lại) + 书 (Bút viết). Thể chữ do tầng lớp thư lại (lệ) cải tiến từ nét cong Tiểu Triện thành nét ngang sổ vuông vức để viết nhanh.",
    "components": "Thể chữ do tầng lớp thư lại (lệ) cải tiến từ nét cong Tiểu Triện thành nét ngang sổ vuông vức để viết nhanh.",
    "context": "Bước ngoặt 'Lệ biến' (隶变) tách rời hoàn toàn hình vẽ tượng hình sang ký hiệu nét thẳng hiện đại.",
    "related": [
      "隶变",
      "蚕头燕尾",
      "汉碑"
    ],
    "mnemonic": "Chữ của thư lại quan phủ (隶) dùng bút lông nét 'Đầu tằm đuôi én'.",
    "examples": [
      {
        "zh": "隶变是古文字演变为今文字的决定性分水岭。",
        "pinyin": "Lìbiàn shì gǔ wénzì yǎnbiàn wéi jīn wénzì de juédìngxìng fēnshuǐlǐng.",
        "en": "The clerical transformation was the decisive watershed from ancient to modern Chinese script.",
        "vi": "Lệ biến là bước ngoặt quyết định chuyển chữ cổ sang hệ chữ Hán hiện đại."
      },
      {
        "zh": "东汉《曹全碑》以秀逸舒展的隶书风格名垂书法史。",
        "pinyin": "Dōnghàn 'Cáo Quán Bēi' yǐ xiùyì shūzhǎn de lìshū fēnggé míngchuí shūfǎshǐ.",
        "en": "The Eastern Han Cao Quan Stele is famed in calligraphy history for its graceful clerical style.",
        "vi": "Tấm bia Tào Toàn thời Đông Hán nổi danh sử thư pháp với phong cách Lệ thư thanh thoát."
      }
    ]
  },
  {
    "id": "kaishu_regular",
    "hanzi": "楷书",
    "traditional": "楷书",
    "pinyin": "kǎishū",
    "hanViet": "KHẢI THƯ",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Thư pháp",
    "pos": "n.",
    "english": "Regular / Standard Script",
    "vietnamese": "Chữ Khải (thể chuẩn mực khuôn phép) (Hán-Việt: KHẢI THƯ)",
    "radical": "木+皆 (Khải - cây gỗ thẳng mẫu mực) + 书",
    "radicalAnalysis": "木+皆 (Khải - cây gỗ thẳng mẫu mực) + 书",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 木+皆 (Khải - cây gỗ thẳng mẫu mực) + 书. Khải (楷) là tên loại gỗ mọc thẳng tắp quanh mộ Khổng Tử làm chuẩn mực ('Khuôn phép').",
    "components": "Khải (楷) là tên loại gỗ mọc thẳng tắp quanh mộ Khổng Tử làm chuẩn mực ('Khuôn phép').",
    "context": "Đạt đỉnh cao đời Đường qua Tứ đại gia (Âu Dương Tuân, Nhan Chân Khanh, Liễu Công Quyền, Triệu Mạnh Phủ đời Nguyên).",
    "related": [
      "正楷",
      "颜筋柳骨",
      "楷模"
    ],
    "mnemonic": "Thể chữ (书) ngay ngắn đứng thẳng làm khuôn phép chuẩn mực (楷) cho người học.",
    "examples": [
      {
        "zh": "楷书立形，行书流美，草书抒情。",
        "pinyin": "Kǎishū lìxíng, xíngshū liúměi, cǎoshū shūqíng.",
        "en": "Regular script builds structure, running script brings flow, cursive expresses emotion.",
        "vi": "Khải thư dựng dáng chuẩn, Hành thư uyển chuyển, Thảo thư bay bổng trữ tình."
      },
      {
        "zh": "初学者练习汉字必须从规范的楷书笔画与结构入手。",
        "pinyin": "Chūxuézhě liànxí hànzì bìxū cóng guīfàn de kǎishū bǐhuà yǔ jiégòu rùshǒu.",
        "en": "Beginners learning Hanzi must start from standard Regular Script strokes and structure.",
        "vi": "Người mới học chữ Hán bắt buộc khởi đầu từ nét bút và kết cấu chuẩn của Khải thư."
      }
    ]
  },
  {
    "id": "xingshu_running",
    "hanzi": "行书",
    "traditional": "行书",
    "pinyin": "xíngshū",
    "hanViet": "HÀNH THƯ",
    "liushuType": "象形 · 会意",
    "liushuCategory": "象形 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 5-6 / Thư pháp",
    "pos": "n.",
    "english": "Running / Semi-Cursive Script",
    "vietnamese": "Chữ Hành (nối liền nhịp nhàng tự nhiên) (Hán-Việt: HÀNH THƯ)",
    "radical": "行 (Ngã tư bước đi) + 书",
    "radicalAnalysis": "行 (Ngã tư bước đi) + 书",
    "etymologyAndRadicals": "象形 · 会意 — Bộ thủ: 行 (Ngã tư bước đi) + 书. Nét chữ bước đi trôi chảy uyển chuyển (行) giữa tính chuẩn xác của Khải và phóng khoáng của Thảo.",
    "components": "Nét chữ bước đi trôi chảy uyển chuyển (行) giữa tính chuẩn xác của Khải và phóng khoáng của Thảo.",
    "context": "Tam đại Hành thư thiên hạ: 《Lan Đình Tập Tự》 (Vương Hi Chi), 《Tế Điệt Văn Cảo》 (Nhan Chân Khanh), 《Hàn Thực Thiếp》 (Tô Thức).",
    "related": [
      "兰亭集序",
      "行云流水",
      "尚意书风"
    ],
    "mnemonic": "Viết (书) trôi chảy như mây trôi nước chảy (行) tạo nên Hành thư.",
    "examples": [
      {
        "zh": "行书如行云流水，既实用又富于书家性灵节奏。",
        "pinyin": "Xíngshū rú xíngyún liúshuǐ, jì shíyòng yòu fùyú shūjiā xìnglíng jiézòu.",
        "en": "Running script moves like drifting clouds and flowing water, practical yet expressive.",
        "vi": "Hành thư như mây bay nước chảy, vừa thực dụng vừa giàu nhịp điệu tâm hồn."
      },
      {
        "zh": "王羲之《兰亭集序》被后世公认为“天下第一行书”。",
        "pinyin": "Wáng Xīzhī 'Lántíngjí Xù' bèi hòushì gōngrèn wéi 'Tiānxià dì yī xíngshū'.",
        "en": "Wang Xizhi's Lantingji Xu is universally acclaimed as the finest running-script calligraphy.",
        "vi": "Tác phẩm 《Lan Đình Tập Tự》 của Vương Hi Chi được tôn xưng 'Thiên hạ đệ nhất Hành thư'."
      }
    ]
  },
  {
    "id": "caoshu_cursive",
    "hanzi": "草书",
    "traditional": "草书",
    "pinyin": "cǎoshū",
    "hanViet": "THẢO THƯ",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 5-6 / Thư pháp",
    "pos": "n.",
    "english": "Cursive Script",
    "vietnamese": "Chữ Thảo (viết tốc ký bay bổng liền mạch) (Hán-Việt: THẢO THƯ)",
    "radical": "艹+早 (Thảo - thảo mộc/bản nháp viết nhanh) + 书",
    "radicalAnalysis": "艹+早 (Thảo - thảo mộc/bản nháp viết nhanh) + 书",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 艹+早 (Thảo - thảo mộc/bản nháp viết nhanh) + 书. Chữ viết nhanh gọn như bản thảo trên đồng cỏ (草) với bút thế liên miên không dứt.",
    "components": "Chữ viết nhanh gọn như bản thảo trên đồng cỏ (草) với bút thế liên miên không dứt.",
    "context": "Từ Chương thảo thời Hán phát triển thành Kim thảo (Vương Hi Chi) và Cuồng thảo thời Đường (Trương Húc, Hoài Tố).",
    "related": [
      "狂草",
      "龙飞凤舞",
      "颠张醉素"
    ],
    "mnemonic": "Thể chữ tốc thảo phóng khoáng tựa rồng bay phượng múa.",
    "examples": [
      {
        "zh": "草书之妙，在于一笔而下，气脉贯通。",
        "pinyin": "Cǎoshū zhī miào, zàiyú yībǐ ér xià, qìmài guàntōng.",
        "en": "The wonder of cursive lies in continuous downward momentum where breath never breaks.",
        "vi": "Cái diệu của Thảo thư ở chỗ hạ bút một mạch, khí mạch xuyên suốt."
      },
      {
        "zh": "唐代张旭与怀素的狂草将书法的抒情表现推向极致。",
        "pinyin": "Tángdài Zhāng Xù yǔ Huáisù de kuángcǎo jiāng shūfǎ de shūqíng biǎoxiàn tuīxiàng jízhì.",
        "en": "Zhang Xu and Huaisu's wild cursive pushed calligraphic emotion to the utmost limit.",
        "vi": "Cuồng thảo của Trương Húc và Hoài Tố đời Đường đưa biểu cảm thư pháp lên đỉnh cao."
      }
    ]
  },
  {
    "id": "qingtong_bronze",
    "hanzi": "青铜",
    "traditional": "青铜",
    "pinyin": "qīngtóng",
    "hanViet": "THANH ĐỒNG",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Khảo cổ",
    "pos": "n.",
    "english": "Bronze (Copper-Tin-Lead Alloy)",
    "vietnamese": "Đồng thau cổ đại (vàng óng lúc mới đúc, ngả xanh khi oxy hóa) (Hán-Việt: THANH ĐỒNG)",
    "radical": "青 (Xanh ngọc) + 金+同 (Đồng kim loại)",
    "radicalAnalysis": "青 (Xanh ngọc) + 金+同 (Đồng kim loại)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 青 (Xanh ngọc) + 金+同 (Đồng kim loại). Hợp kim đồng pha thiếc và chì (Chu Lễ – Khảo Công Ký ghi 'Lục tề' sáu tỷ lệ pha chế chuẩn xác).",
    "components": "Hợp kim đồng pha thiếc và chì (Chu Lễ – Khảo Công Ký ghi 'Lục tề' sáu tỷ lệ pha chế chuẩn xác).",
    "context": "Biểu tượng quyền lực tế tự và quân sự thời Thương–Chu ('Quốc chi đại sự, tại tự dữ nhung').",
    "related": [
      "青铜时代",
      "后母戊鼎",
      "六齐"
    ],
    "mnemonic": "Kim loại (钅) sau hàng nghìn năm phủ lớp gỉ màu xanh biếc (青) là Thanh đồng.",
    "examples": [
      {
        "zh": "《考工记》所载“六齐”是世界最早的合金配比科技文献。",
        "pinyin": "Kǎogōngjì suǒ zǎi 'Liùjì' shì shìjiè zuìzǎo de héjīn pèibǐ kējì wénxiàn.",
        "en": "The Six Proportions in Kaogongji are the world's earliest alloy composition specification.",
        "vi": "Quy chuẩn Lục Tề trong Khảo Công Ký là tài liệu pha hợp kim sớm nhất thế giới."
      },
      {
        "zh": "安阳殷墟与四川三星堆出土了极其震撼的商代青铜重器。",
        "pinyin": "Ānyáng Yīnxū yǔ Sìchuān Sānxīngduī chūtǔ le jíqí zhènhàn de Shāngdài qīngtóng zhòngqì.",
        "en": "Yin Ruins and Sanxingdui yielded astonishing Shang dynasty bronze treasures.",
        "vi": "Ân Khư An Dương và Tam Tinh Đôi khai quật nhiều bảo vật Thanh đồng kinh ngạc thời Thương."
      }
    ]
  },
  {
    "id": "ding_cauldron",
    "hanzi": "鼎",
    "traditional": "鼎",
    "pinyin": "dǐng",
    "hanViet": "ĐỈNH",
    "liushuType": "象形 (Tượng hình)",
    "liushuCategory": "象形 (Tượng hình)",
    "level": "HSK 5-6",
    "topicTag": "HSK 5-6 / Bảo tàng",
    "pos": "n.",
    "english": "Ritual Bronze Cauldron (Three-legged/Four-legged)",
    "vietnamese": "Đỉnh đồng tế lễ (biểu tượng vương quyền chính thống) (Hán-Việt: ĐỈNH)",
    "radical": "鼎 (Bộ Đỉnh đứng độc lập)",
    "radicalAnalysis": "鼎 (Bộ Đỉnh đứng độc lập)",
    "etymologyAndRadicals": "象形 (Tượng hình) — Bộ thủ: 鼎 (Bộ Đỉnh đứng độc lập). Chữ tượng hình hoàn hảo vẽ 2 quai nhô lên, thân bầu sâu và chân vạc vững chãi.",
    "components": "Chữ tượng hình hoàn hảo vẽ 2 quai nhô lên, thân bầu sâu và chân vạc vững chãi.",
    "context": "Thành ngữ 'Vấn đỉnh Trung Nguyên', 'Tam túc đỉnh lập' đều xuất phát từ Đỉnh Cửu Đỉnh nhà Hạ–Chu.",
    "related": [
      "一言九鼎",
      "问鼎中原",
      "毛公鼎"
    ],
    "mnemonic": "Nhìn thẳng mặt chữ 鼎 là thấy hình cái vạc đồng có tai và chân vạc.",
    "examples": [
      {
        "zh": "一言九鼎，守信如山。",
        "pinyin": "Yīyán jiǔdǐng, shǒuxìn rú shān.",
        "en": "A word as weighty as nine sacred cauldrons, steadfast as a mountain.",
        "vi": "Một lời nặng tựa chín đỉnh, giữ tín vững như núi."
      },
      {
        "zh": "毛公鼎与后母戊鼎分别是西周和商代青铜礼器的代表。",
        "pinyin": "Máo Gōng Dǐng yǔ Hòumǔwù Dǐng fēnbié shì Xīzhōu hé Shāngdài qīngtóng lǐqì de dàibiǎo.",
        "en": "The Mao Gong Ding and Houmuwu Ding represent Western Zhou and Shang ritual bronzes.",
        "vi": "Mao Công Đỉnh và Hậu Mẫu Mậu Đỉnh lần lượt đại diện lễ khí đồng Tây Chu và nhà Thương."
      }
    ]
  },
  {
    "id": "yu_jade",
    "hanzi": "玉",
    "traditional": "玉",
    "pinyin": "yù",
    "hanViet": "NGỌC",
    "liushuType": "象形 (Tượng hình)",
    "liushuCategory": "象形 (Tượng hình)",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Văn hóa",
    "pos": "n.",
    "english": "Jade (Symbol of Moral Purity)",
    "vietnamese": "Ngọc bích (biểu trưng phẩm đức quân tử) (Hán-Việt: NGỌC)",
    "radical": "玉 (Ba viên ngọc xuyên dây có dấu chấm phân biệt Vương 王)",
    "radicalAnalysis": "玉 (Ba viên ngọc xuyên dây có dấu chấm phân biệt Vương 王)",
    "etymologyAndRadicals": "象形 (Tượng hình) — Bộ thủ: 玉 (Ba viên ngọc xuyên dây có dấu chấm phân biệt Vương 王). Nguyên gốc chữ Vương và Ngọc cùng vẽ ba phiến ngọc xâu dây; thêm nét chấm phân biệt viên ngọc ở thắt lưng.",
    "components": "Nguyên gốc chữ Vương và Ngọc cùng vẽ ba phiến ngọc xâu dây; thêm nét chấm phân biệt viên ngọc ở thắt lưng.",
    "context": "Văn minh Ngọc khí (Lương Chử, Hồng Sơn) có trước cả Thanh đồng thời đại; Khổng Tử gán Ngũ đức cho Ngọc.",
    "related": [
      "宁为玉碎",
      "玉琮",
      "君子佩玉"
    ],
    "mnemonic": "Ba miếng đá quý xâu dây (王) thêm một chấm ngọc rủ bên hông (丶) là Ngọc.",
    "examples": [
      {
        "zh": "君子无故，玉不去身。",
        "pinyin": "Jūnzǐ wú gù, yù bú qù shēn.",
        "en": "Without compelling reason, the noble person never removes jade from their side.",
        "vi": "Bậc quân tử vô cớ chẳng rời ngọc bích khỏi thân (Lễ Ký)."
      },
      {
        "zh": "良渚文化的玉琮与玉璧体现了五千年前高超的治玉工艺。",
        "pinyin": "Liángzhǔ wénhuà de yùcóng yǔ yùbì tǐxiàn le wǔqiān nián qián gāochāo de zhìyù gōngyì.",
        "en": "Liangzhu jade cong and bi showcase superb jade carving 5,000 years ago.",
        "vi": "Ngọc Tông và Ngọc Bích Lương Chử thể hiện kỹ nghệ trị ngọc siêu việt cách đây 5.000 năm."
      }
    ]
  },
  {
    "id": "ruyao_ware",
    "hanzi": "汝窑",
    "traditional": "汝窑",
    "pinyin": "Rǔyáo",
    "hanViet": "NHŨ DIÊU",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Ru Ware (Northern Song Imperial Porcelain)",
    "vietnamese": "Lò sứ Nhữ Diêu (Đứng đầu Ngũ Đại Danh Diêu) (Hán-Việt: NHŨ DIÊU)",
    "radical": "氵+女 (Sông Nhữ) + 穴+羔 (Lò nung trong hang)",
    "radicalAnalysis": "氵+女 (Sông Nhữ) + 穴+羔 (Lò nung trong hang)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 氵+女 (Sông Nhữ) + 穴+羔 (Lò nung trong hang). Nơi sản xuất tại Nhữ Châu (Hà Nam) với kỹ thuật lò nung (窑) pha bột mã não vào men.",
    "components": "Nơi sản xuất tại Nhữ Châu (Hà Nam) với kỹ thuật lò nung (窑) pha bột mã não vào men.",
    "context": "Truyền thuyết Tống Huy Tông mơ sắc trời 'Vũ quá thiên thanh vân phá xứ' (xanh trời sau mưa tan mây).",
    "related": [
      "五大名窑",
      "天青釉",
      "芝麻钉"
    ],
    "mnemonic": "Lò nung sứ (窑) danh giá đất Nhữ Châu (汝) cho sắc xanh thiên thanh huyền thoại.",
    "examples": [
      {
        "zh": "纵有家财万贯，不如汝瓷一片。",
        "pinyin": "Zòng yǒu jiācái wànguàn, bùrú Rǔcí yīpiàn.",
        "en": "Even ten thousand strings of wealth cannot match a single shard of Ru ware.",
        "vi": "Dẫu có gia tài vạn quan chẳng sánh bằng một mảnh gốm Nhữ Diêu."
      },
      {
        "zh": "北宋汝窑天青釉瓷器存世极少，被海内外各大博物馆视为珍宝。",
        "pinyin": "Běisòng Rǔyáo tiānqīng yòu cíqì cúnshì jíshǎo, bèi hǎinèiwài gè dà bówùguǎn shìwéi zhēnbǎo.",
        "en": "Surviving Northern Song Ru ware pieces are exceedingly rare and prized worldwide.",
        "vi": "Đồ sứ Nhữ Diêu Bắc Tống truyền thế cực hiếm, được bảo tàng toàn cầu xem như báu vật."
      }
    ]
  },
  {
    "id": "xuanzhi_paper",
    "hanzi": "宣纸",
    "traditional": "宣纸",
    "pinyin": "Xuānzhǐ",
    "hanViet": "TUYÊN CHỈ",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Xuan Paper (Anhui Intangible Heritage)",
    "vietnamese": "Giấy Tuyên (giấy vẽ quốc họa & thư pháp) (Hán-Việt: TUYÊN CHỈ)",
    "radical": "宀+亘 (Tuyên Phủ) + 纟+氏 (Giấy dệt sợi)",
    "radicalAnalysis": "宀+亘 (Tuyên Phủ) + 纟+氏 (Giấy dệt sợi)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 宀+亘 (Tuyên Phủ) + 纟+氏 (Giấy dệt sợi). Sản xuất tại Kinh Huyện thuộc phủ Tuyên Thành (An Huy) từ vỏ cây thanh đàn và rơm lúa nếp.",
    "components": "Sản xuất tại Kinh Huyện thuộc phủ Tuyên Thành (An Huy) từ vỏ cây thanh đàn và rơm lúa nếp.",
    "context": "Được mệnh danh 'Thọ giấy nghìn năm' vì chịu ẩm tốt, thấm mực loang sắc độ tinh tế không phai ố.",
    "related": [
      "文房四宝",
      "生宣",
      "纸寿千年"
    ],
    "mnemonic": "Loại giấy (纸) đặc sản tiến cung từ vùng Tuyên Châu An Huy (宣).",
    "examples": [
      {
        "zh": "宣纸润墨千层，能令水墨画展现出干湿浓淡的丰富层次。",
        "pinyin": "Xuānzhǐ rùnmò qiāncéng, néng lìng shuǐmòhuà zhǎnxiàn chū gān shī nóng dàn de fēngfù céngcì.",
        "en": "Xuan paper absorbs ink in nuanced layers, enabling rich wet-dry tonal gradients.",
        "vi": "Giấy Tuyên ngấm mực nghìn lớp giúp thủy mặc hiển hiện tầng bậc đậm nhạt tinh tế."
      },
      {
        "zh": "安徽泾县手工捞制宣纸技艺已被列入人类非物质文化遗产。",
        "pinyin": "Ānhuī Jīngxiàn shǒugōng lāozhì Xuānzhǐ jìyì yǐ bèi lièrù Rénlèi Fēiwùzhì Wénhuà Yíchǎn.",
        "en": "Traditional handmade Xuan paper craft in Jingxian is inscribed on UNESCO's ICH list.",
        "vi": "Kỹ thuật seo giấy Tuyên thủ công huyện Kinh (An Huy) là Di sản Phi vật thể Nhân loại."
      }
    ]
  },
  {
    "id": "huimo_ink",
    "hanzi": "徽墨",
    "traditional": "徽墨",
    "pinyin": "Huīmò",
    "hanViet": "HUY MẶC",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Hui Inkstick (Anhui)",
    "vietnamese": "Mực thỏi Huy Châu (Văn Phòng Tứ Bảo) (Hán-Việt: HUY MẶC)",
    "radical": "彳+山+攵+系 (Huy) + 黑+土 (Mực muội thông)",
    "radicalAnalysis": "彳+山+攵+系 (Huy) + 黑+土 (Mực muội thông)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 彳+山+攵+系 (Huy) + 黑+土 (Mực muội thông). Mực chế tạo tại phủ Huy Châu (An Huy) từ muội gỗ tùng hoặc dầu trẩu trộn keo da trâu và xạ hương.",
    "components": "Mực chế tạo tại phủ Huy Châu (An Huy) từ muội gỗ tùng hoặc dầu trẩu trộn keo da trâu và xạ hương.",
    "context": "Nét mực đen óng mùi thơm nhẹ, mài mịn không làm mòn lông bút và giữ sắc đen hàng nghìn năm.",
    "related": [
      "落纸如漆",
      "徽州文化",
      "墨分五色"
    ],
    "mnemonic": "Thỏi mực đen từ đất (墨) lừng danh của phủ Huy Châu (徽).",
    "examples": [
      {
        "zh": "徽墨落纸如漆，历经千年不褪其神韵。",
        "pinyin": "Huīmò luòzhǐ rú qī, lìjīng qiānnian bù tuì qí shényùn.",
        "en": "Hui ink sits on paper like lacquer, retaining its lustre for a thousand years.",
        "vi": "Mực Huy xuống giấy bóng như sơn mài, trải nghìn năm không phai thần thái."
      },
      {
        "zh": "徽墨的制作与宣纸、湖笔、歙砚共同支撑起中国书画创作体系。",
        "pinyin": "Huīmò de zhìzuò yǔ Xuānzhǐ, Húbǐ, Shèyàn gòngtóng zhīchēng qǐ Zhōngguó shūhuà chuàngzuò tǐxì.",
        "en": "Hui ink together with Xuan paper, Hu brushes, and She inkstones sustain calligraphy.",
        "vi": "Mực Huy cùng giấy Tuyên, bút Hồ, nghiên Thiệp chống đỡ toàn bộ nghệ thuật thư họa."
      }
    ]
  },
  {
    "id": "duanyan_inkstone",
    "hanzi": "端砚",
    "traditional": "端砚",
    "pinyin": "Duānyàn",
    "hanViet": "ĐOAN NGHIÊN",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Duan Inkstone (Zhaoqing, Guangdong)",
    "vietnamese": "Nghiên đá Đoan Khê (đứng đầu Tứ Đại Danh Nghiên) (Hán-Việt: ĐOAN NGHIÊN)",
    "radical": "立+耑 (Đoan Châu) + 石+见 (Nghiên đá)",
    "radicalAnalysis": "立+耑 (Đoan Châu) + 石+见 (Nghiên đá)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 立+耑 (Đoan Châu) + 石+见 (Nghiên đá). Khai thác từ đá mịn khe Lạn Kha Sơn ở Đoan Châu (Triệu Khánh, Quảng Đông) đục mài thành nghiên.",
    "components": "Khai thác từ đá mịn khe Lạn Kha Sơn ở Đoan Châu (Triệu Khánh, Quảng Đông) đục mài thành nghiên.",
    "context": "Đặc tính giữ nước không khô cạn, đá mịn như ngọc mài mực êm không làm tòe ngọn bút lông.",
    "related": [
      "四大名砚",
      "砚台",
      "肇庆"
    ],
    "mnemonic": "Chiếc nghiên mài mực bằng đá quý (砚) vùng Đoan Châu Quảng Đông (端).",
    "examples": [
      {
        "zh": "端石质细腻润泽，呵气可研墨而不损毫端。",
        "pinyin": "Duānshí zhì xìnì rùnzé, hēqì kě yánmò ér bù sǔn háoduān.",
        "en": "Duan stone is fine and moist; breathing on it aids grinding without wearing brush hairs.",
        "vi": "Đá Đoan mịn ẩm như ngọc, hà hơi đủ mài mực mà không hại lông bút."
      },
      {
        "zh": "端砚、歙砚、洮砚与澄泥砚合称中国古代“四大名砚”。",
        "pinyin": "Duānyàn, Shèyàn, Táoyàn yǔ Chéngníyàn héchēng Zhōngguó gǔdài 'Sì Dà Míngyàn'.",
        "en": "Duan, She, Tao, and Chengni inkstones are China's Four Famous Inkstones.",
        "vi": "Đoan nghiên, Thiệp nghiên, Thao nghiên và Trừng nê nghiên hợp thành Tứ Đại Danh Nghiên."
      }
    ]
  },
  {
    "id": "hubi_brush",
    "hanzi": "湖笔",
    "traditional": "湖笔",
    "pinyin": "Húbǐ",
    "hanViet": "HỒ BÚT",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Hu Brush (Huzhou, Zhejiang)",
    "vietnamese": "Bút lông Hồ Châu (Thiện Liễn, Chiết Giang) (Hán-Việt: HỒ BÚT)",
    "radical": "氵+胡 (Hồ Châu) + 竹+毛 (Cán trúc + Lông thú)",
    "radicalAnalysis": "氵+胡 (Hồ Châu) + 竹+毛 (Cán trúc + Lông thú)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 氵+胡 (Hồ Châu) + 竹+毛 (Cán trúc + Lông thú). Chế tác tinh xảo qua hơn 120 công đoạn tại trấn Thiện Liễn (Hồ Châu), đạt Tứ đức: Tiêm–Tề–Viên–Kiện.",
    "components": "Chế tác tinh xảo qua hơn 120 công đoạn tại trấn Thiện Liễn (Hồ Châu), đạt Tứ đức: Tiêm–Tề–Viên–Kiện.",
    "context": "Ngọn bút nhọn (Tiêm), dàn đều (Tề), bầu tròn chứa mực (Viên) và có lực đàn hồi (Kiện).",
    "related": [
      "善琏湖笔",
      "尖齐圆健",
      "狼毫羊毫"
    ],
    "mnemonic": "Cây bút trúc lông thú (笔) nổi tiếng vùng Hồ Châu Giang Nam (湖).",
    "examples": [
      {
        "zh": "湖笔以“尖、齐、圆、健”四德著称于世。",
        "pinyin": "Húbǐ yǐ 'jiān, qí, yuán, jiàn' sìdé zhùchēng yú shì.",
        "en": "Hu brushes are renowned for four virtues: pointed, even, round, and resilient.",
        "vi": "Bút Hồ nổi danh thế giới nhờ bốn đức: nhọn, bằng, tròn, khỏe."
      },
      {
        "zh": "书画家常根据作品尺幅与书体交替使用羊毫与狼毫湖笔。",
        "pinyin": "Shūhuàjiā cháng gēnjù zuòpǐn chǐfú yǔ shūtǐ jiāotì shǐyòng yángháo yǔ lángháo Húbǐ.",
        "en": "Calligraphers alternate between goat-hair and weasel-hair Hu brushes depending on script.",
        "vi": "Thư họa gia tùy khổ tranh và thể chữ mà luân phiên dùng bút lông dê và lông sói Hồ Châu."
      }
    ]
  },
  {
    "id": "dougong",
    "hanzi": "斗拱",
    "traditional": "斗拱",
    "pinyin": "dǒugǒng",
    "hanViet": "ĐẤU CỦNG",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 / Hình thanh (象形 / 形声)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Kiến trúc Cung đình",
    "pos": "n.",
    "english": "Interlocking Wooden Bracket Set (Dougong)",
    "vietnamese": "Đấu củng — Hệ con sơn chồng đấu không đinh (Hán-Việt: ĐẤU CỦNG)",
    "radical": "斗 (Đấu - chiếc đấu đong thóc) + 扌/木+共 (Củng - hai tay chắp nâng đỡ)",
    "radicalAnalysis": "Chữ 斗 (Đấu - bộ Đấu) tượng hình chiếc đấu đong thóc, chỉ khối gỗ vuông đỡ bên dưới; chữ 拱 (Củng - bộ Thủ 扌 + âm Công 共) chỉ hai tay chắp nâng đỡ, là thanh gỗ cong hình cánh cung vươn ra đỡ mái hiên.",
    "etymologyAndRadicals": "象形 / 形声 — Chữ 斗 (Đấu) tượng hình chiếc đấu đong thóc, chỉ khối gỗ vuông đỡ bên dưới; chữ 拱 (Củng - bộ Thủ 扌 + âm Công 共) chỉ hai tay chắp nâng đỡ thanh dầm mái nặng.",
    "components": "Hệ kết cấu con sơn chồng đấu đan cài bằng mộng gỗ không dùng đinh sắt, hoạt động như lò xo giảm chấn.",
    "context": "Hệ kết cấu con sơn chồng đấu đan cài bằng mộng gỗ không dùng đinh sắt, giúp Tử Cấm Thành trụ vững qua hơn 300 trận động đất.",
    "related": [
      "重檐庑殿",
      "金厢斗底槽",
      "须弥座"
    ],
    "mnemonic": "Khối vuông đỡ (斗) phối hợp tay đòn cong (拱) nâng mái ngói nặng mà không cần một chiếc đinh sắt.",
    "examples": [
      {
        "zh": "斗拱与榫卯结构共同构成了中国古典木构建筑的抗震核心。",
        "pinyin": "Dǒugǒng yǔ sǔnmǎo jiégòu gòngtóng gòuchéng le Zhōngguó gǔdiǎn mùgòu jiànzhù de kàngzhèn héxīn.",
        "en": "Dougong brackets and mortise-tenon joinery form the seismic-resistant heart of timber halls.",
        "vi": "Đấu củng cùng kết cấu mộng gỗ tạo thành lõi chống động đất của kiến trúc cổ điển."
      },
      {
        "zh": "从山西佛光寺到北京太和殿，斗拱尺寸折射出不同朝代的营造法式。",
        "pinyin": "Cóng Shānxī Fóguāngsì dào Běijīng Tàihédiàn, dǒugǒng chǐcùn zhéshè chū bùtóng cháodài de yíngzào fǎshì.",
        "en": "From Foguang Temple to the Hall of Supreme Harmony, bracket proportions reflect dynastic building codes.",
        "vi": "Từ Phật Quang Tự Sơn Tây đến Thái Hòa Điện Bắc Kinh, kích thước Đấu củng phản ánh quy thức triều đại."
      }
    ]
  },
  {
    "id": "yuanlin_garden",
    "hanzi": "园林",
    "traditional": "园林",
    "pinyin": "yuánlín",
    "hanViet": "LÂM VIÊN",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Kiến trúc",
    "pos": "n.",
    "english": "Classical Chinese Garden",
    "vietnamese": "Vườn cổ điển (Lâm viên Tô Châu, Di Hòa Viên) (Hán-Việt: LÂM VIÊN)",
    "radical": "囗+袁 (Viên - khu vườn có tường vây) + 木+木 (Lâm - rừng cây)",
    "radicalAnalysis": "囗+袁 (Viên - khu vườn có tường vây) + 木+木 (Lâm - rừng cây)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 囗+袁 (Viên - khu vườn có tường vây) + 木+木 (Lâm - rừng cây). Khuôn viên bao quanh (园) bố trí núi giả Thái Hồ, hồ nước, hành lang quanh co và rừng trúc thông (林).",
    "components": "Khuôn viên bao quanh (园) bố trí núi giả Thái Hồ, hồ nước, hành lang quanh co và rừng trúc thông (林).",
    "context": "Nguyên tắc 'Tuy do nhân tác, uyển tự thiên khai' (dù do người tạo mà đẹp tựa trời mở) cùng phép Tá cảnh (mượn cảnh).",
    "related": [
      "苏州园林",
      "借景手法",
      "虽由人作"
    ],
    "mnemonic": "Bao bọc không gian tinh tế (园) tái hiện sơn thủy rừng cây (林) thu nhỏ trong lòng đô thị.",
    "examples": [
      {
        "zh": "江南园林甲天下，苏州园林甲江南。",
        "pinyin": "Jiāngnán yuánlín jiǎ tiānxià, Sūzhōu yuánlín jiǎ Jiāngnán.",
        "en": "Jiangnan gardens are unmatched under heaven, and Suzhou gardens top Jiangnan.",
        "vi": "Lâm viên Giang Nam đẹp nhất thiên hạ, vườn Tô Châu đứng đầu Giang Nam."
      },
      {
        "zh": "拙政园与留园巧妙利用漏窗与借景艺术拓展有限空间。",
        "pinyin": "Zhuōzhèngyuán yǔ Liúyuán qiǎomiào lìyòng lòuchuāng yǔ jièjǐng yìshù tuòzhǎn yǒuxiàn kōngjiān.",
        "en": "Humble Administrator's Garden and Lingering Garden use lattice windows to expand tight spaces.",
        "vi": "Chuyết Chính Viên và Lưu Viên khéo dùng cửa sổ hoa văn và nghệ thuật tá cảnh để mở rộng không gian."
      }
    ]
  },
  {
    "id": "kunqu_opera",
    "hanzi": "昆曲",
    "traditional": "昆曲",
    "pinyin": "Kūnqǔ",
    "hanViet": "CÔN KHÚC",
    "liushuType": "会意 · 象形",
    "liushuCategory": "会意 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Kunqu Opera (UNESCO Masterpiece)",
    "vietnamese": "Côn Khúc (Tổ mẫu của Bách hí Trung Hoa) (Hán-Việt: CÔN KHÚC)",
    "radical": "日+比 (Côn Sơn) + 曲 (Giai điệu)",
    "radicalAnalysis": "日+比 (Côn Sơn) + 曲 (Giai điệu)",
    "etymologyAndRadicals": "会意 · 象形 — Bộ thủ: 日+比 (Côn Sơn) + 曲 (Giai điệu). Khởi nguồn từ vùng Côn Sơn (Giang Tô) thời Minh với giọng hát Thủy Ma Điệu mềm mượt và điệu sáo trúc.",
    "components": "Khởi nguồn từ vùng Côn Sơn (Giang Tô) thời Minh với giọng hát Thủy Ma Điệu mềm mượt và điệu sáo trúc.",
    "context": "Kiệt tác mở đầu của Thang Hiển Tổ là 《Mẫu Đơn Đình》; được UNESCO vinh danh Di sản Phi vật thể từ năm 2001.",
    "related": [
      "牡丹亭",
      "百戏之祖",
      "水磨腔"
    ],
    "mnemonic": "Làn điệu uốn lượn tinh tế (曲) xuất phát từ đất Côn Sơn Tô Châu (昆).",
    "examples": [
      {
        "zh": "良辰美景奈何天，赏心乐事谁家院？",
        "pinyin": "Liángchén měijǐng nàihé tiān, shǎngxīn lèshì shuí jiā yuàn?",
        "en": "Fine morning and lovely scenery—how helpless against heaven; whose courtyard holds delight? (Peony Pavilion)",
        "vi": "Ngày lành cảnh đẹp biết sao đây, chốn vui thỏa lòng ở sân nhà ai? (Mẫu Đơn Đình)."
      },
      {
        "zh": "昆曲细腻的唱腔与写意身段为后来的京剧奠定了艺术基础。",
        "pinyin": "Kūnqǔ xìnì de chàngqiāng yǔ xiěyì shēnduàn wéi hòulái de Jīngjù diàndìng le yìshù jīchǔ.",
        "en": "Kunqu's delicate vocalization and stylized movements laid the artistic foundation for Peking Opera.",
        "vi": "Làn điệu tinh tế và vũ đạo ước lệ của Côn Khúc đặt nền tảng cho Kinh Kịch đời sau."
      }
    ]
  },
  {
    "id": "jingju_opera",
    "hanzi": "京剧",
    "traditional": "京剧",
    "pinyin": "Jīngjù",
    "hanViet": "KINH KỊCH",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Nghệ thuật",
    "pos": "n.",
    "english": "Peking Opera",
    "vietnamese": "Kinh Kịch (Tứ đại hàng vai: Sinh–Đán–Tịnh–Sửu) (Hán-Việt: KINH KỊCH)",
    "radical": "京 (Kinh đô) + 刂+豦 (Kịch)",
    "radicalAnalysis": "京 (Kinh đô) + 刂+豦 (Kịch)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 京 (Kinh đô) + 刂+豦 (Kịch). Ra đời ở Bắc Kinh năm 1790 khi Tứ Đại Huy Ban từ An Huy vào chúc thọ vua Càn Long, dung hợp Hán kịch và Côn khúc.",
    "components": "Ra đời ở Bắc Kinh năm 1790 khi Tứ Đại Huy Ban từ An Huy vào chúc thọ vua Càn Long, dung hợp Hán kịch và Côn khúc.",
    "context": "Thủ pháp biểu diễn ước lệ cao (Xướng – Niệm – Tác – Đả) và nghệ thuật vẽ mặt nạ kiểm phổ (脸谱) phân biệt trung – gian.",
    "related": [
      "生旦净丑",
      "脸谱",
      "国粹"
    ],
    "mnemonic": "Loại hình sân khấu (剧) kết tinh tại Kinh thành Bắc Kinh (京).",
    "examples": [
      {
        "zh": "台上一分钟，台下十年功。",
        "pinyin": "Táishàng yī fēnzhōng, táixià shí nián gōng.",
        "en": "One minute on stage takes ten years of practice offstage.",
        "vi": "Một phút trên sân khấu đánh đổi bằng mười năm khổ luyện dưới đài."
      },
      {
        "zh": "京剧脸谱中的红脸通常象征关羽式的忠勇正气。",
        "pinyin": "Jīngjù liǎnpǔ zhōng de hóngliǎn tōngcháng xiàngzhēng Guān Yǔ shì de zhōngyǒng zhèngqì.",
        "en": "A red face in Peking Opera makeup symbolizes Guan Yu-like loyalty and courage.",
        "vi": "Mặt đỏ trong kiểm phổ Kinh Kịch thường biểu trưng cho lòng trung dũng chính khí như Quan Vũ."
      }
    ]
  },
  {
    "id": "tulou_building",
    "hanzi": "土楼",
    "traditional": "土楼",
    "pinyin": "tǔlóu",
    "hanViet": "THỔ LÂU",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Fujian Earthen Buildings (Hakha Architecture)",
    "vietnamese": "Thổ Lâu (Pháo đài đất nung gia tộc Khách Gia Phúc Kiến) (Hán-Việt: THỔ LÂU)",
    "radical": "土 (Đất nện) + 木+娄 (Lầu gỗ nhiều tầng)",
    "radicalAnalysis": "土 (Đất nện) + 木+娄 (Lầu gỗ nhiều tầng)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 土 (Đất nện) + 木+娄 (Lầu gỗ nhiều tầng). Kiến trúc tập thể hình tròn/vuông cao 3–5 tầng tường đất nện trộn rơm tre dày tới 1,5 m ở Tây Nam Phúc Kiến.",
    "components": "Kiến trúc tập thể hình tròn/vuông cao 3–5 tầng tường đất nện trộn rơm tre dày tới 1,5 m ở Tây Nam Phúc Kiến.",
    "context": "Di sản Thế giới UNESCO (2008): kết hợp phòng thủ chống cướp, điều hòa nhiệt độ mát hè ấm đông và gắn kết tông tộc.",
    "related": [
      "客家文化",
      "福建",
      "承启楼"
    ],
    "mnemonic": "Tòa lầu cao nhiều tầng (楼) xây hoàn toàn bằng tường đất nện chịu lực (土).",
    "examples": [
      {
        "zh": "一座生土楼，便是数百名宗亲共居的微型城邦。",
        "pinyin": "Yī zuò shēngtǔlóu, biànshì shùbǎi míng zōngqīn gòngjū de wēixíng chéngbāng.",
        "en": "One earthen tulou serves as a micro-city housing hundreds of clan relatives together.",
        "vi": "Một tòa Thổ Lâu chính là tiểu thành bang của hàng trăm thân tộc cùng chung sống."
      },
      {
        "zh": "永定与南靖土楼反映了古代北方移民迁入闽西后的防御与聚居智慧。",
        "pinyin": "Yǒngdìng yǔ Nánjìng tǔlóu fǎnyìng le gǔdài běifāng yímín qiānrù Mǐnxī hòu de fángyù yǔ jùjū zhìhuì.",
        "en": "Yongding and Nanjing Tulou show northern migrants' defense and communal wisdom in Fujian.",
        "vi": "Thổ Lâu Vĩnh Định và Nam Tĩnh phản ánh trí tuệ phòng thủ và quần cư của người Khách Gia."
      }
    ]
  },
  {
    "id": "dunhuang_caves",
    "hanzi": "敦煌",
    "traditional": "敦煌",
    "pinyin": "Dūnhuáng",
    "hanViet": "ĐÔN HOÀNG",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Dunhuang (Silk Road Oasis & Mogao Caves)",
    "vietnamese": "Đôn Hoàng (Thánh địa nghệ thuật Con đường Tơ lụa) (Hán-Việt: ĐÔN HOÀNG)",
    "radical": "敦 (Lớn mạnh hùng hậu) + 火+皇 (Hoàng - rực sáng thịnh vượng)",
    "radicalAnalysis": "敦 (Lớn mạnh hùng hậu) + 火+皇 (Hoàng - rực sáng thịnh vượng)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 敦 (Lớn mạnh hùng hậu) + 火+皇 (Hoàng - rực sáng thịnh vượng). Hán Vũ Đế đặt tên theo ý nghĩa 'Đại Thịnh' (敦者大也，煌者盛也) làm tiền đồn cực tây Hành lang Hà Tây.",
    "components": "Hán Vũ Đế đặt tên theo ý nghĩa 'Đại Thịnh' (敦者大也，煌者盛也) làm tiền đồn cực tây Hành lang Hà Tây.",
    "context": "Sở hữu 735 hang Mạc Cao (bích họa 45.000 m²) và Tàng Kinh Động Hang 17 phát hiện hàng vạn cổ thư Đường–Tống.",
    "related": [
      "莫高窟",
      "丝路",
      "飞天"
    ],
    "mnemonic": "Thành ốc đảo lớn mạnh (敦) tỏa hào quang rực rỡ (煌) nơi ngã tư Á – Âu.",
    "examples": [
      {
        "zh": "敦煌藏经洞的发现，催生了举世瞩目的“敦煌学”。",
        "pinyin": "Dūnhuáng Cángjīngdòng de fāxiàn, cuīshēng le jǔshì zhǔmù de 'Dūnhuángxué'.",
        "en": "The discovery of Dunhuang's Library Cave birthed the global field of Dunhuang Studies.",
        "vi": "Phát hiện Tàng Kinh Động Đôn Hoàng khai sinh ngành Đôn Hoàng học lừng danh thế giới."
      },
      {
        "zh": "莫高窟飞天壁画融合了印度佛教艺术与汉唐流动飘逸的线条美学。",
        "pinyin": "Mògāokū Fēitiān bìhuà rónghé le Yìndù Fójiào yìshù yǔ Hàn-Táng liúdòng piāoyì de xiàntiáo měixué.",
        "en": "Mogao Flying Apsaras merge Indian Buddhist motifs with flowing Han-Tang linear aesthetics.",
        "vi": "Bích họa Phi Thiên Mạc Cao dung hợp mỹ thuật Phật giáo Ấn Độ và nét vẽ bay bổng Hán – Đường."
      }
    ]
  },
  {
    "id": "beike_steles",
    "hanzi": "碑刻",
    "traditional": "碑刻",
    "pinyin": "bēikè",
    "hanViet": "BI KHẮC",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Stone Stele Inscriptions & Rubbings",
    "vietnamese": "Bia đá khắc chữ (Bi Lâm Tây An, Bia Tiến sĩ) (Hán-Việt: BI KHẮC)",
    "radical": "石+卑 (Bia đá) + 亥+刂 (Dao khắc)",
    "radicalAnalysis": "石+卑 (Bia đá) + 亥+刂 (Dao khắc)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 石+卑 (Bia đá) + 亥+刂 (Dao khắc). Tấm bia dựng bằng đá (石) dùng đục dao (刂) khắc văn bản và thư pháp truyền đời.",
    "components": "Tấm bia dựng bằng đá (石) dùng đục dao (刂) khắc văn bản và thư pháp truyền đời.",
    "context": "Công cụ lưu trữ sử liệu và mẫu mực thư pháp bền vững vượt thời gian (Văn Miếu Hà Nội & Bi Lâm Tây An).",
    "related": [
      "西安碑林",
      "拓片",
      "进士碑"
    ],
    "mnemonic": "Dùng dao (刂) khắc sâu (刻) lên phiến đá (石) lưu chữ thiên thu.",
    "examples": [
      {
        "zh": "碑刻虽冰冷，却忠实保存了汉唐以来的真实字迹与历史制度。",
        "pinyin": "Bēikè suī bīnglěng, què zhōngshí bǎocún le Hàn-Táng yǐlái de zhēnshí zìjì yǔ lìshǐ zhìdù.",
        "en": "Cold stone steles faithfully preserve authentic scripts and institutions since Han-Tang times.",
        "vi": "Bia đá tuy lạnh nhưng trung thực lưu giữ bút tích và thể chế từ thời Hán – Đường."
      },
      {
        "zh": "河内文庙82通进士碑与北京孔庙碑林均印证了东亚崇文重教传统。",
        "pinyin": "Hénèi Wénmiào 82 tōng jìnshìbēi yǔ Běijīng Kǒngmiào Bēilín jūn yìnzhèng le Dōngyà chóngwén zhòngjiào chuántǒng.",
        "en": "Both Hanoi's 82 steles and Beijing's Confucian Temple steles attest to East Asian reverence for learning.",
        "vi": "82 bia Tiến sĩ Văn Miếu Hà Nội và Rừng bia Bắc Kinh cùng chứng minh truyền thống hiếu học Đông Á."
      }
    ]
  },
  {
    "id": "yinzhang_seal",
    "hanzi": "印章",
    "traditional": "印章",
    "pinyin": "yìnzhāng",
    "hanViet": "ẤN CHƯƠNG",
    "liushuType": "会意 · 会意",
    "liushuCategory": "会意 · 会意",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Nghệ thuật & Pháp lý",
    "pos": "n.",
    "english": "Seal Stamp / Corporate Chop",
    "vietnamese": "Con dấu triện nghệ thuật & Công chương doanh nghiệp (Hán-Việt: ẤN CHƯƠNG)",
    "radical": "爪+卩 (Ấn - tay ấn xuống phù tiết) + 音+十 (Chương - văn bản hoàn chỉnh)",
    "radicalAnalysis": "爪+卩 (Ấn - tay ấn xuống phù tiết) + 音+十 (Chương - văn bản hoàn chỉnh)",
    "etymologyAndRadicals": "会意 · 会意 — Bộ thủ: 爪+卩 (Ấn - tay ấn xuống phù tiết) + 音+十 (Chương - văn bản hoàn chỉnh). Bàn tay nhấn xuống ký hiệu tín điều (印) ghép quy định rõ ràng thành văn bản xác thực (章).",
    "components": "Bàn tay nhấn xuống ký hiệu tín điều (印) ghép quy định rõ ràng thành văn bản xác thực (章).",
    "context": "Hai vai trò lớn: Triện ấn đỏ (Chu văn/Bạch văn) hoàn thiện bố cục 'Thi–Thư–Họa–Ấn' và 'Công chương' quyết định hiệu lực pháp lý hợp đồng Trung Quốc.",
    "related": [
      "篆刻",
      "公章",
      "白文朱文"
    ],
    "mnemonic": "Bàn tay nhấn dấu (印) khép lại văn bản trọn vẹn (章) bảo chứng giá trị pháp lý.",
    "examples": [
      {
        "zh": "诗、书、画、印四绝并茂，方为中国文人画正统气象。",
        "pinyin": "Shī, shū, huà, yìn sìjué bìngmào, fāng wéi Zhōngguó wénrénhuà zhèngtǒng qìxiàng.",
        "en": "Poetry, calligraphy, painting, and seal carving together define authentic literati art.",
        "vi": "Thi – Thư – Họa – Ấn tứ tuyệt hội tụ mới tạo khí tượng chính thống văn nhân họa."
      },
      {
        "zh": "在中国签约，没有加盖合法公章的书面协议极难在法院主张效力。",
        "pinyin": "Zài Zhōngguó qiānyuē, méiyǒu jiāgài héfǎ gōngzhāng de shūmiàn xiéyì jínán zài fǎyuàn zhǔzhāng xiàolì.",
        "en": "In China, a contract lacking a valid corporate chop is very hard to enforce in court.",
        "vi": "Ký kết tại Trung Quốc, văn bản thiếu con dấu công chương hợp lệ rất khó xác lập hiệu lực pháp lý."
      }
    ]
  },
  {
    "id": "bogu_antiquarian",
    "hanzi": "博古",
    "traditional": "博古",
    "pinyin": "bógǔ",
    "hanViet": "BÁC CỔ",
    "liushuType": "会意 · 象形",
    "liushuCategory": "会意 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "v./adj.",
    "english": "Antiquarian Connoisseurship",
    "vietnamese": "Hiểu rộng về cổ vật và kim thạch xưa (Hán-Việt: BÁC CỔ)",
    "radical": "十+尃 (Bác - rộng khắp) + 十+口 (Cổ - truyền mười miệng xưa)",
    "radicalAnalysis": "十+尃 (Bác - rộng khắp) + 十+口 (Cổ - truyền mười miệng xưa)",
    "etymologyAndRadicals": "会意 · 象形 — Bộ thủ: 十+尃 (Bác - rộng khắp) + 十+口 (Cổ - truyền mười miệng xưa). Kiến thức bao quát rộng (博) suốt qua mười thế hệ truyền miệng (古).",
    "components": "Kiến thức bao quát rộng (博) suốt qua mười thế hệ truyền miệng (古).",
    "context": "Trào lưu sưu tầm – giám định Thanh đồng và đồ cổ đời Bắc Tống khởi phát ngành Kim thạch học.",
    "related": [
      "宣和博古图",
      "考古",
      "金石学"
    ],
    "mnemonic": "Thông tuệ rộng khắp (博) các tầng di sản xa xưa qua mười thế hệ (古).",
    "examples": [
      {
        "zh": "宋代吕大临《考古图》与王黼《宣和博古图》开创了中国金石图谱传统。",
        "pinyin": "Sòngdài Lǚ Dàlín 'Kǎogǔtú' yǔ Wáng Fǔ 'Xuānhé Bógǔtú' kāichuàng le Zhōngguó jīnshí túpǔ chuántǒng.",
        "en": "Song catalogs pioneered China's illustrated antiquarian bronze scholarship.",
        "vi": "Các sách đồ phổ thời Tống khai sáng truyền thống khảo cứu kim thạch học Trung Hoa."
      },
      {
        "zh": "博物馆特展常设“博古通今”展厅，对比古代青铜礼器与现代设计。",
        "pinyin": "Bówùguǎn tèzhǎn chángshè 'bógǔ tōngjīn' zhǎntīng, duìbǐ gǔdài qīngtóng lǐqì yǔ xiàndài shèjì.",
        "en": "Museum exhibitions often link antiquity to the present by comparing bronzes with modern design.",
        "vi": "Triển lãm bảo tàng thường đặt chủ đề 'Bác cổ thông kim', đối sánh cổ vật và thiết kế hiện đại."
      }
    ]
  },
  {
    "id": "dianji_classics",
    "hanzi": "典籍",
    "traditional": "典籍",
    "pinyin": "diǎnjí",
    "hanViet": "ĐIỂN TỊCH",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Canonical Classics & Rare Manuscripts",
    "vietnamese": "Kinh điển thư tịch cổ, thiện bản (Hán-Việt: ĐIỂN TỊCH)",
    "radical": "册+廾 (Điển - hai tay nâng tập thẻ tre) + 竹+耤 (Tịch - sách tre ghi chép)",
    "radicalAnalysis": "册+廾 (Điển - hai tay nâng tập thẻ tre) + 竹+耤 (Tịch - sách tre ghi chép)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 册+廾 (Điển - hai tay nâng tập thẻ tre) + 竹+耤 (Tịch - sách tre ghi chép). Hai bàn tay cung kính nâng bộ sách thẻ tre (典) kết hợp thẻ trúc ghi chép lâu dài (籍).",
    "components": "Hai bàn tay cung kính nâng bộ sách thẻ tre (典) kết hợp thẻ trúc ghi chép lâu dài (籍).",
    "context": "Kho di sản văn hiến phương Đông từ 《Tứ Khố Toàn Thư》 tới 《Vĩnh Lạc Đại Điển》.",
    "related": [
      "古籍",
      "永乐大典",
      "四库全书"
    ],
    "mnemonic": "Hai tay cung kính nâng tập sách thẻ tre (典) ghi chép sổ sách truyền đời (籍).",
    "examples": [
      {
        "zh": "整理古代典籍旨在实现跨时空的文明对话与文献校正。",
        "pinyin": "Zhěnglǐ gǔdài diǎnjí zhǐzài shíxiàn kuà shíkōng de wénmíng duìhuà yǔ wénxiàn jiàozhèng.",
        "en": "Organizing ancient classics aims at cross-era dialogue and textual verification.",
        "vi": "Chỉnh lý cổ điển tịch nhằm đối thoại văn minh xuyên thời gian và hiệu đính văn bản."
      },
      {
        "zh": "台北故宫与国家图书馆共同致力于珍稀宋元古籍典籍的数字化保护。",
        "pinyin": "Táiběi Gùgōng yǔ Guójiā Túshūguǎn gòngtóng zhìlìyú zhēnxī Sòng-Yuán gǔjí diǎnjí de shùzìhuà bǎohù.",
        "en": "Museums and libraries collaborate on digitizing rare Song-Yuan manuscripts.",
        "vi": "Cố Cung và Thư viện Quốc gia chung tay số hóa bảo tồn cổ tịch thiện bản Tống – Nguyên."
      }
    ]
  },
  {
    "id": "jingluo_meridians",
    "hanzi": "经络",
    "traditional": "经络",
    "pinyin": "jīngluò",
    "hanViet": "KINH LẠC",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Đông y",
    "pos": "n.",
    "english": "Meridians and Collaterals (TCM Channels)",
    "vietnamese": "Hệ thống Kinh (mạch dọc) và Lạc (mạng nhánh) dẫn Khí Huyết (Hán-Việt: KINH LẠC)",
    "radical": "纟+巠 (Kinh - sợi dọc khung cửi) + 纟+各 (Lạc - mạng nối ngang)",
    "radicalAnalysis": "纟+巠 (Kinh - sợi dọc khung cửi) + 纟+各 (Lạc - mạng nối ngang)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 纟+巠 (Kinh - sợi dọc khung cửi) + 纟+各 (Lạc - mạng nối ngang). Sợi chỉ dọc khung dệt (经) kết nối mạng lưới nhánh nhỏ (络) vận hành khí huyết khắp toàn thân.",
    "components": "Sợi chỉ dọc khung dệt (经) kết nối mạng lưới nhánh nhỏ (络) vận hành khí huyết khắp toàn thân.",
    "context": "Cốt lõi trong thiên 《Linh Khu》 sách 《Hoàng Đế Nội Kinh》, nền tảng trị liệu Châm cứu và Bấm huyệt.",
    "related": [
      "十二经脉",
      "针灸",
      "通则不痛"
    ],
    "mnemonic": "Như sợi dọc dệt vải (经) kết mạng lưới nhánh ngang (络) dẫn truyền sinh khí.",
    "examples": [
      {
        "zh": "经络者，所以决死生，处百病，调虚实，不可不通。",
        "pinyin": "Jīngluò zhě, suǒyǐ jué sǐshēng, chǔ bǎibìng, tiáo xūshí, bùkě bù tōng.",
        "en": "Meridians govern life and death, regulate diseases, and balance excess and deficiency.",
        "vi": "Kinh lạc quyết định sống chết, xử lý trăm bệnh, điều hòa hư thực (Nội Kinh)."
      },
      {
        "zh": "中医推拿通过疏通肩颈经络有效缓解长期伏案引发的疼痛。",
        "pinyin": "Zhōngyī tuīná tōngguò shūtōng jiānjǐng jīngluò yǒuxiào huǎnjiě chángqī fú'àn yǐnfā de téngtòng.",
        "en": "TCM tuina relieves desk-related neck pain by clearing shoulder-neck meridians.",
        "vi": "Xoa bóp Đông y giúp khai thông kinh lạc vai gáy giảm đau nhức dân văn phòng."
      }
    ]
  },
  {
    "id": "xuewei_acupoint",
    "hanzi": "穴位",
    "traditional": "穴位",
    "pinyin": "xuéwèi",
    "hanViet": "HUYỆT VỊ",
    "liushuType": "象形 · 会意",
    "liushuCategory": "象形 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 6 / Đông y",
    "pos": "n.",
    "english": "Acupoint / Acupuncture Point",
    "vietnamese": "Điểm huyệt phản xạ dọc đường kinh lạc (Hán-Việt: HUYỆT VỊ)",
    "radical": "穴 (Hang hốc tự nhiên) + 亻+立 (Vị - vị trí đứng)",
    "radicalAnalysis": "穴 (Hang hốc tự nhiên) + 亻+立 (Vị - vị trí đứng)",
    "etymologyAndRadicals": "象形 · 会意 — Bộ thủ: 穴 (Hang hốc tự nhiên) + 亻+立 (Vị - vị trí đứng). Những hốc lõm tự nhiên trên cơ bắp/xương khớp (穴) tại các vị trí tọa độ cố định (位).",
    "components": "Những hốc lõm tự nhiên trên cơ bắp/xương khớp (穴) tại các vị trí tọa độ cố định (位).",
    "context": "Huyệt đạo tiêu chuẩn như Hợp Cốc, Túc Tam Lý, Thái Khê được định vị qua Đồng nhân châm cứu Bắc Tống.",
    "related": [
      "合谷穴",
      "足三里",
      "天人相应"
    ],
    "mnemonic": "Những khe hốc tự nhiên nơi khí tụ (穴) tại tọa độ chuẩn xác trên thân người (位).",
    "examples": [
      {
        "zh": "找准穴位并配合适度按压，方能发挥针灸或艾灸之效。",
        "pinyin": "Zhǎozhǔn xuéwèi bìng pèihé shìdù ànyā, fāng néng fāhuī zhēnjiǔ huò àijiǔ zhī xiào.",
        "en": "Accurate acupoint localization paired with right pressure yields therapeutic effect.",
        "vi": "Xác định chuẩn huyệt vị kết hợp day ấn vừa lực mới phát huy hiệu quả châm cứu."
      },
      {
        "zh": "北宋王惟一铸造的铜人上精确标注了三百五十四处人体穴位。",
        "pinyin": "Běisòng Wáng Wéiyī zhùzào de tóngrén shàng jīngquè biāozhù le sānbǎi wǔshísì chù réntǐ xuéwèi.",
        "en": "Song physician Wang Weiyi cast bronze figures marking 354 human acupoints precisely.",
        "vi": "Tượng đồng Vương Duy Nhất thời Bắc Tống khắc chính xác 354 huyệt vị nhân thể."
      }
    ]
  },
  {
    "id": "zhenjiu_acupuncture",
    "hanzi": "针灸",
    "traditional": "针灸",
    "pinyin": "zhēnjiǔ",
    "hanViet": "CHÂM CỨU",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 5-6 / Đông y",
    "pos": "n./v.",
    "english": "Acupuncture and Moxibustion",
    "vietnamese": "Châm (dùng kim) và Cứu (hơ ngải cứu ấm huyệt) (Hán-Việt: CHÂM CỨU)",
    "radical": "钅+十 (Châm - kim loại nhỏ) + 久+火 (Cứu - đốt lá ngải lâu)",
    "radicalAnalysis": "钅+十 (Châm - kim loại nhỏ) + 久+火 (Cứu - đốt lá ngải lâu)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 钅+十 (Châm - kim loại nhỏ) + 久+火 (Cứu - đốt lá ngải lâu). Kết hợp kỹ thuật dùng kim kim loại kích thích huyệt (针) và dùng sức nóng ngải cứu hun ấm (灸).",
    "components": "Kết hợp kỹ thuật dùng kim kim loại kích thích huyệt (针) và dùng sức nóng ngải cứu hun ấm (灸).",
    "context": "Di sản Văn hóa Phi vật thể Thế giới UNESCO; Hải Thượng Lãn Ông & Tuệ Tĩnh tiếp biến sâu tại Việt Nam.",
    "related": [
      "艾灸",
      "铜人",
      "中医非遗"
    ],
    "mnemonic": "Một bên dùng kim mảnh (钅) đả thông, một bên hơ lửa ấm (火) lá ngải bền lâu (久).",
    "examples": [
      {
        "zh": "一针二灸三用药。",
        "pinyin": "Yī zhēn èr jiǔ sān yòngyào.",
        "en": "First acupuncture, second moxibustion, third herbal prescription.",
        "vi": "Thứ nhất Châm, thứ nhì Cứu, thứ ba mới dùng thang dược (tổng kết lâm sàng cổ)."
      },
      {
        "zh": "针灸在缓解慢性疼痛与术后康复方面获得了全球临床研究关注。",
        "pinyin": "Zhēnjiǔ zài huǎnjiě mànxìng téngtòng yǔ shùhòu kāngfù fāngmiàn huòdé le quánqiú línchuáng yánjiū guānzhù.",
        "en": "Acupuncture receives global clinical attention in chronic pain and postoperative recovery.",
        "vi": "Châm cứu thu hút quan tâm lâm sàng toàn cầu trong giảm đau mạn tính và phục hồi."
      }
    ]
  },
  {
    "id": "yangsheng_nourish",
    "hanzi": "养生",
    "traditional": "养生",
    "pinyin": "yǎngshēng",
    "hanViet": "DƯỠNG SINH",
    "liushuType": "会意 · 象形",
    "liushuCategory": "会意 · 象形",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Dưỡng sinh",
    "pos": "v./n.",
    "english": "Life Cultivation / Preventive Wellness",
    "vietnamese": "Nuôi dưỡng bảo toàn sinh khí theo mùa (Hán-Việt: DƯỠNG SINH)",
    "radical": "羊+食 (Dưỡng - nuôi bằng sữa thịt) + 生 (Mầm cây mọc trên đất)",
    "radicalAnalysis": "羊+食 (Dưỡng - nuôi bằng sữa thịt) + 生 (Mầm cây mọc trên đất)",
    "etymologyAndRadicals": "会意 · 象形 — Bộ thủ: 羊+食 (Dưỡng - nuôi bằng sữa thịt) + 生 (Mầm cây mọc trên đất). Nuôi dưỡng chu đáo (养) sức sống tự nhiên nảy nở từ gốc đất (生).",
    "components": "Nuôi dưỡng chu đáo (养) sức sống tự nhiên nảy nở từ gốc đất (生).",
    "context": "Gắn liền triết lý 'Thiên nhân tương ứng' — ngủ sớm dậy sớm theo mùa, điều độ ăn uống, giữ tâm thanh thản.",
    "related": [
      "四季养生",
      "食饮有节",
      "内经"
    ],
    "mnemonic": "Nuôi dưỡng mầm sống (生) bằng thực phẩm điều độ và thói quen lành (养).",
    "examples": [
      {
        "zh": "春夏养阳，秋冬养阴，以从其根。",
        "pinyin": "Chūn-xià yǎng yáng, qiū-dōng yǎng yīn, yǐ cóng qí gēn.",
        "en": "Nourish yang in spring-summer and yin in autumn-winter to follow the root.",
        "vi": "Xuân – Hạ nuôi phần Dương, Thu – Đông dưỡng phần Âm thuận theo gốc sự sống (Nội Kinh)."
      },
      {
        "zh": "当代年轻群体日益流行遵循二十四节气调整作息的“轻养生”理念。",
        "pinyin": "Dāngdài niánqīng qúntǐ rìyì liúxíng zūnxún èrshísì jiéqì tiáozhěng zuòxī de 'qīng yǎngshēng' lǐniàn.",
        "en": "Young people increasingly embrace seasonal 'light wellness' aligned with the 24 solar terms.",
        "vi": "Giới trẻ hiện đại ngày càng chuộng nếp sống dưỡng sinh thuận 24 tiết khí."
      }
    ]
  },
  {
    "id": "zhengqi_vital",
    "hanzi": "正气",
    "traditional": "正气",
    "pinyin": "zhèngqì",
    "hanViet": "CHÍNH KHÍ",
    "liushuType": "指事 · 象形",
    "liushuCategory": "指事 · 象形",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Đông y & Đạo đức",
    "pos": "n.",
    "english": "Vital Defensive Qi / Upright Moral Spirit",
    "vietnamese": "Khí chính khỏe mạnh nội tại; Hạo nhiên chính khí (Hán-Việt: CHÍNH KHÍ)",
    "radical": "正 (Thẳng đúng vạch chuẩn) + 气 (Khí lực)",
    "radicalAnalysis": "正 (Thẳng đúng vạch chuẩn) + 气 (Khí lực)",
    "etymologyAndRadicals": "指事 · 象形 — Bộ thủ: 正 (Thẳng đúng vạch chuẩn) + 气 (Khí lực). Khí lực chân chính khỏe mạnh (正气) đối trọng với Ngoại tà (邪气) và tiêu cực xã hội.",
    "components": "Khí lực chân chính khỏe mạnh (正气) đối trọng với Ngoại tà (邪气) và tiêu cực xã hội.",
    "context": "Trong Đông y chỉ sức đề kháng; trong Nho học chỉ khí phách ngay thẳng không khuất phục.",
    "related": [
      "正气存内",
      "扶正祛邪",
      "浩然之气"
    ],
    "mnemonic": "Nguồn khí lực (气) vận hành thẳng đúng chuẩn mực (正) gọi là Chính khí.",
    "examples": [
      {
        "zh": "正气存内，邪不可干。",
        "pinyin": "Zhèngqì cún nèi, xié bù kě gān.",
        "en": "When vital upright Qi abounds within, pathogenic forces cannot invade.",
        "vi": "Chính khí giữ vững bên trong thì tà khí chẳng thể xâm phạm."
      },
      {
        "zh": "坚持充足睡眠与适度运动有助于扶助身体正气。",
        "pinyin": "Jiānchí chōngzú shuìmián yǔ shìdù yùndòng yǒuzhùyú fúzhù shēntǐ zhèngqì.",
        "en": "Consistent sleep and moderate exercise support the body's defensive vitality.",
        "vi": "Duy trì ngủ đủ giấc và vận động điều độ giúp nâng đỡ Chính khí cơ thể."
      }
    ]
  },
  {
    "id": "maixiang_pulse",
    "hanzi": "脉象",
    "traditional": "脉象",
    "pinyin": "màixiàng",
    "hanViet": "MẠCH TƯỢNG",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Đông y",
    "pos": "n.",
    "english": "Pulse Manifestation (TCM Pulse Diagnosis)",
    "vietnamese": "Hình thái mạch đập phản ánh trạng thái tạng phủ (Hán-Việt: MẠCH TƯỢNG)",
    "radical": "月(Nhục)+永 (Mạch máu chảy dài) + 象 (Hình tượng con voi)",
    "radicalAnalysis": "月(Nhục)+永 (Mạch máu chảy dài) + 象 (Hình tượng con voi)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 月(Nhục)+永 (Mạch máu chảy dài) + 象 (Hình tượng con voi). Dòng máu chảy dài phân nhánh trong thịt (脉) thể hiện hình tượng trạng thái bên trong (象).",
    "components": "Dòng máu chảy dài phân nhánh trong thịt (脉) thể hiện hình tượng trạng thái bên trong (象).",
    "context": "Một trong Tứ chẩn (Vọng–Vấn–Văn–Thiết), phân thành 28 loại mạch như Phù, Trầm, Trì, Sác, Hoạt, Huyền.",
    "related": [
      "切脉",
      "寸关尺",
      "二十八脉"
    ],
    "mnemonic": "Dòng chảy dài trong cơ thể (脉) hiện ra hình tượng chẩn đoán rõ ràng (象).",
    "examples": [
      {
        "zh": "切脉动静，而视精明，察五色，观五脏有余不足。",
        "pinyin": "Qièmài dòngjìng, ér shì jīngmíng, chá wǔsè...",
        "en": "Palpate the pulse, inspect the eyes and five colors to assess excess and deficiency.",
        "vi": "Bắt mạch xem động tĩnh, soi tinh thần ánh mắt để xét thịnh suy Ngũ Tạng."
      },
      {
        "zh": "弦脉与滑脉等不同脉象帮助中医师辨别体内气血寒热。",
        "pinyin": "Xiánmài yǔ huámài děng bùtóng màixiàng bāngzhù Zhōngyīshī biànbié tǐnèi qìxuè hánrè.",
        "en": "Wiry and slippery pulses help TCM doctors distinguish internal heat, cold, and Qi states.",
        "vi": "Mạch Huyền hay mạch Hoạt giúp thầy thuốc Đông y phân biệt hàn nhiệt khí huyết."
      }
    ]
  },
  {
    "id": "bencao_materia",
    "hanzi": "本草",
    "traditional": "本草",
    "pinyin": "běncǎo",
    "hanViet": "BẢN THẢO",
    "liushuType": "指事 · 形声",
    "liushuCategory": "指事 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Đông y",
    "pos": "n.",
    "english": "Chinese Materia Medica (Herbal Pharmacopoeia)",
    "vietnamese": "Dược học cổ truyền (lấy thảo mộc làm gốc) (Hán-Việt: BẢN THẢO)",
    "radical": "本 (Gốc cây) + 艹+早 (Thảo - cây cỏ)",
    "radicalAnalysis": "本 (Gốc cây) + 艹+早 (Thảo - cây cỏ)",
    "etymologyAndRadicals": "指事 · 形声 — Bộ thủ: 本 (Gốc cây) + 艹+早 (Thảo - cây cỏ). Phần lớn vị thuốc Đông y lấy thảo mộc tự nhiên (草) làm căn bản (本) dù có cả khoáng vật và động vật.",
    "components": "Phần lớn vị thuốc Đông y lấy thảo mộc tự nhiên (草) làm căn bản (本) dù có cả khoáng vật và động vật.",
    "context": "Đỉnh cao từ 《Thần Nông Bản Thảo Kinh》 thời Hán tới bộ 《Bản Thảo Cương Mục》 của Lý Thời Trân thời Minh (1.892 vị thuốc).",
    "related": [
      "本草纲目",
      "神农本草经",
      "中药"
    ],
    "mnemonic": "Lấy hoa cỏ cây thuốc thiên nhiên (草) làm gốc rễ trị bệnh (本).",
    "examples": [
      {
        "zh": "神农尝百草，一日而遇七十毒。",
        "pinyin": "Shénnóng cháng bǎicǎo, yīrì ér yù qīshí dú.",
        "en": "Shennong tasted a hundred herbs, encountering seventy toxins in a single day.",
        "vi": "Thần Nông nếm trăm loại cỏ thuốc, một ngày gặp bảy mươi thứ độc."
      },
      {
        "zh": "李时珍《本草纲目》与越南海上的医学文献共同丰富了东方药学宝库。",
        "pinyin": "Lǐ Shízhēn 'Běncǎo Gāngmù' yǔ Yuènán Hǎishàng de yīxué wénxiàn gòngtóng fēngfù le Dōngfāng yàoxué bǎokù.",
        "en": "Li Shizhen's Compendium and Vietnamese medical classics jointly enriched Eastern pharmacology.",
        "vi": "《Bản Thảo Cương Mục》 của Lý Thời Trân và y thư Hải Thượng cùng làm giàu kho tàng dược học phương Đông."
      }
    ]
  },
  {
    "id": "lichun_spring",
    "hanzi": "立春",
    "traditional": "立春",
    "pinyin": "Lìchūn",
    "hanViet": "LẬP XUÂN",
    "liushuType": "象形 · 会意",
    "liushuCategory": "象形 · 会意",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Nông lịch",
    "pos": "n.",
    "english": "Beginning of Spring (1st Solar Term)",
    "vietnamese": "Tiết Lập Xuân (4–5/2 Dương lịch, khởi đầu 24 Tiết khí) (Hán-Việt: LẬP XUÂN)",
    "radical": "立 (Người đứng vững trên mặt đất) + 艹+日+屯 (Xuân - mặt trời ủ mầm chồi)",
    "radicalAnalysis": "立 (Người đứng vững trên mặt đất) + 艹+日+屯 (Xuân - mặt trời ủ mầm chồi)",
    "etymologyAndRadicals": "象形 · 会意 — Bộ thủ: 立 (Người đứng vững trên mặt đất) + 艹+日+屯 (Xuân - mặt trời ủ mầm chồi). Đánh dấu (立) khoảnh khắc mầm cây dưới ánh mặt trời bắt đầu nảy chồi (春).",
    "components": "Đánh dấu (立) khoảnh khắc mầm cây dưới ánh mặt trời bắt đầu nảy chồi (春).",
    "context": "Mở đầu chu kỳ 24 Tiết khí ('Nhất niên chi kế tại ư xuân') khi khí Dương bắt đầu thăng phát.",
    "related": [
      "一年之计在于春",
      "咬春",
      "节气之首"
    ],
    "mnemonic": "Khởi dựng mốc đầu (立) cho mùa cây cối đâm chồi dưới nắng ấm (春).",
    "examples": [
      {
        "zh": "立春时节阳气初生，宜早起缓行以舒展肝气。",
        "pinyin": "Lìchūn shíjié yángqì chūshēng, yí zǎoqǐ huǎnxíng yǐ shūzhǎn gānqì.",
        "en": "During Lichun, rising yang suggests early rising and gentle walking to soothe Liver Qi.",
        "vi": "Tiết Lập Xuân dương khí mới sinh, nên dậy sớm đi bộ thư thái để sơ can lý khí."
      },
      {
        "zh": "立春民间有吃春饼的“咬春”习俗，祈愿新年风调雨顺。",
        "pinyin": "Lìchūn mínjiān yǒu chī chūnbǐng de 'yǎochūn' xísú, qíyuàn xīnnián fēngtiáo yǔshùn.",
        "en": "People eat spring pancakes at Lichun ('biting spring') wishing for favorable weather.",
        "vi": "Dân gian có tục 'cắn xuân' ăn bánh cuốn xuân cầu mưa thuận gió hòa."
      }
    ]
  },
  {
    "id": "qingming_festival",
    "hanzi": "清明",
    "traditional": "清明",
    "pinyin": "Qīngmíng",
    "hanViet": "THANH MINH",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 3-4",
    "topicTag": "HSK 3-4 / Lễ tiết",
    "pos": "n./adj.",
    "english": "Pure Brightness (5th Solar Term / Ancestor Day)",
    "vietnamese": "Tiết Thanh Minh (Tảo mộ & Trời trong sáng) (Hán-Việt: THANH MINH)",
    "radical": "氵+青 (Thanh - nước xanh trong) + 日+月 (Minh - nhật nguyệt rực sáng)",
    "radicalAnalysis": "氵+青 (Thanh - nước xanh trong) + 日+月 (Minh - nhật nguyệt rực sáng)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 氵+青 (Thanh - nước xanh trong) + 日+月 (Minh - nhật nguyệt rực sáng). Không khí trong trẻo mát mẻ (清) và ánh nắng trời đất sáng sủa (明).",
    "components": "Không khí trong trẻo mát mẻ (清) và ánh nắng trời đất sáng sủa (明).",
    "context": "Tiết khí duy nhất kiêm ngày Lễ hội lớn: Tảo mộ tổ tiên (Tết Thanh Minh) và đạp thanh du xuân — bối cảnh bức 《Thanh Minh Thượng Hà Đồ》.",
    "related": [
      "扫墓祭祖",
      "踏青",
      "清明上河图"
    ],
    "mnemonic": "Trời đất sạch trong (清) dưới ánh Nhật Nguyệt rạng rỡ (明) báo hiệu tảo mộ mùa xuân.",
    "examples": [
      {
        "zh": "清明时节雨纷纷，路上行人欲断魂。",
        "pinyin": "Qīngmíng shíjié yǔ fēnfēn, lùshàng xíngrén yù duànhún.",
        "en": "During Qingming drizzling rain falls, and travelers on the road feel heavy-hearted (Du Mu).",
        "vi": "Tiết Thanh Minh mưa bụi bay lất phất, khách bộ hành trên đường lòng bồi hồi (Đỗ Mục)."
      },
      {
        "zh": "中越两国文化均极为重视在清明前后祭扫先祖坟墓以示追远敬孝。",
        "pinyin": "Zhōng-Yuè liǎng guó wénhuà jūn jíwéi zhòngshì zài Qīngmíng qiánhòu jìsǎo xiānzǔ fénmù yǐ shì zhuīyuǎn jìngxiào.",
        "en": "Both China and Vietnam deeply value tending ancestral graves around Qingming.",
        "vi": "Văn hóa Việt – Trung đều coi trọng đi tảo mộ gia tiên dịp Thanh Minh để báo hiếu."
      }
    ]
  },
  {
    "id": "duanwu_dragonboat",
    "hanzi": "端午",
    "traditional": "端午",
    "pinyin": "Duānwǔ",
    "hanViet": "ĐOAN NGỌ",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "HSK 3-4",
    "topicTag": "HSK 3-4 / Lễ tiết",
    "pos": "n.",
    "english": "Dragon Boat Festival (5th of 5th Lunar Month)",
    "vietnamese": "Tết Đoan Ngọ (Mùng 5 tháng 5 Âm lịch) (Hán-Việt: ĐOAN NGỌ)",
    "radical": "立+耑 (Đoan - khởi đầu ngay thẳng) + 午 (Chính Ngọ / Ngũ)",
    "radicalAnalysis": "立+耑 (Đoan - khởi đầu ngay thẳng) + 午 (Chính Ngọ / Ngũ)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 立+耑 (Đoan - khởi đầu ngay thẳng) + 午 (Chính Ngọ / Ngũ). Ngày đầu tiên (端) của tháng Ngọ (lúc Dương khí cực thịnh mùa hè cần khu trừ ôn dịch).",
    "components": "Ngày đầu tiên (端) của tháng Ngọ (lúc Dương khí cực thịnh mùa hè cần khu trừ ôn dịch).",
    "context": "Tại Trung Quốc tưởng nhớ Khuất Nguyên, ăn bánh ú/đua thuyền rồng; tại Việt Nam là 'Tết diệt sâu bọ' ăn cơm rượu nếp.",
    "related": [
      "屈原",
      "粽子",
      "龙舟赛"
    ],
    "mnemonic": "Khởi điểm chính (端) vào tiết giữa trưa mùa hạ nóng nực (午).",
    "examples": [
      {
        "zh": "端午赛龙舟体现了团结协作的民俗精神。",
        "pinyin": "Duānwǔ sài lóngzhōu tǐxiàn le tuánjié xiézuò de mínsú jīngshén.",
        "en": "Dragon boat racing at Duanwu reflects folk solidarity and teamwork.",
        "vi": "Đua thuyền rồng dịp Đoan Ngọ thể hiện tinh thần đoàn kết cộng đồng."
      },
      {
        "zh": "越南端午节又称“杀虫节”，与中国吃粽子纪念屈原的文化演进各有千秋。",
        "pinyin": "Yuènán Duānwǔjié yòu chēng 'Shāchóngjié', yǔ Zhōngguó chī zòngzi jìniàn Qū Yuán de wénhuà yǎnjìn gè yǒu qiānqiū.",
        "en": "Vietnam's Duanwu emphasizes purging pests, showing distinct evolution alongside China's Qu Yuan tribute.",
        "vi": "Tết Đoan Ngọ Việt Nam chú trọng diệt sâu bọ, mang nét bản địa hóa song hành truyền thống tưởng nhớ Khuất Nguyên."
      }
    ]
  },
  {
    "id": "zhongqiu_autumn",
    "hanzi": "中秋",
    "traditional": "中秋",
    "pinyin": "Zhōngqiū",
    "hanViet": "TRUNG THU",
    "liushuType": "指事 · 会意",
    "liushuCategory": "指事 · 会意",
    "level": "HSK 1-2",
    "topicTag": "HSK 2-3 / Lễ tiết",
    "pos": "n.",
    "english": "Mid-Autumn Festival (15th of 8th Lunar Month)",
    "vietnamese": "Tết Trung Thu (Rằm tháng Tám) (Hán-Việt: TRUNG THU)",
    "radical": "中 (Chính giữa) + 禾+火 (Thu - đốt rơm sau gặt lúa chín)",
    "radicalAnalysis": "中 (Chính giữa) + 禾+火 (Thu - đốt rơm sau gặt lúa chín)",
    "etymologyAndRadicals": "指事 · 会意 — Bộ thủ: 中 (Chính giữa) + 禾+火 (Thu - đốt rơm sau gặt lúa chín). Ngày chính giữa (中) của mùa thu hoạch (秋) khi vầng trăng tròn và sáng nhất năm.",
    "components": "Ngày chính giữa (中) của mùa thu hoạch (秋) khi vầng trăng tròn và sáng nhất năm.",
    "context": "Ở Trung Quốc nhấn mạnh Tết Đoàn Viên gia tộc tặng bánh trung thu; ở Việt Nam nổi bật Tết Thiếu Nhi rước đèn phá cỗ.",
    "related": [
      "月饼",
      "团圆",
      "千里共婵娟"
    ],
    "mnemonic": "Giữa (中) mùa thu hoạch lúa vàng óng (秋) ngắm vầng trăng đoàn viên.",
    "examples": [
      {
        "zh": "但愿人长久，千里共婵娟。",
        "pinyin": "Dànyuàn rén chángjiǔ, qiānlǐ gòng chánjuān.",
        "en": "May we live long and share the moonlight even a thousand li apart (Su Shi).",
        "vi": "Chỉ mong người mãi bình an, nghìn dặm cùng chung ánh trăng đẹp (Tô Thức)."
      },
      {
        "zh": "每年中秋节，许多跨境食品品牌会推出融合亚洲风味的特色月饼礼盒。",
        "pinyin": "Měinián Zhōngqiūjié, xǔduō kuàjìng shípǐn pǐnpái huì tuīchū rónghé Yàzhōu fēngwèi de tèsè yuèbǐng lǐhé.",
        "en": "Each Mid-Autumn, food brands launch gift boxes blending Asian flavors.",
        "vi": "Mỗi dịp Trung Thu, nhiều thương hiệu ẩm thực ra mắt hộp bánh mang bản sắc Á Đông."
      }
    ]
  },
  {
    "id": "dongzhi_solstice",
    "hanzi": "冬至",
    "traditional": "冬至",
    "pinyin": "Dōngzhì",
    "hanViet": "ĐÔNG CHÍ",
    "liushuType": "象形 · 指事",
    "liushuCategory": "象形 · 指事",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Nông lịch",
    "pos": "n.",
    "english": "Winter Solstice (22nd Solar Term)",
    "vietnamese": "Tiết Đông Chí (ngày ngắn nhất, Âm cực Dương sinh) (Hán-Việt: ĐÔNG CHÍ)",
    "radical": "夂+冫 (Đông - băng đóng cuối mùa) + 至 (Chim bay sà chạm đất -> Đạt cực điểm)",
    "radicalAnalysis": "夂+冫 (Đông - băng đóng cuối mùa) + 至 (Chim bay sà chạm đất -> Đạt cực điểm)",
    "etymologyAndRadicals": "象形 · 指事 — Bộ thủ: 夂+冫 (Đông - băng đóng cuối mùa) + 至 (Chim bay sà chạm đất -> Đạt cực điểm). Thời điểm mùa đông rét mướt (冬) chạm cực điểm rồi bắt đầu hồi dương (至).",
    "components": "Thời điểm mùa đông rét mướt (冬) chạm cực điểm rồi bắt đầu hồi dương (至).",
    "context": "Tục xưa trọng ngang Tết ('Đông chí đại như niên'): miền Bắc ăn sủi cảo, miền Nam ăn chè trôi nước (Thang viên).",
    "related": [
      "一阳来复",
      "冬至大如年",
      "数九寒天"
    ],
    "mnemonic": "Mùa băng giá (冬) chạm tới vạch cực hạn (至) để xoay vòng sang Dương khí mới.",
    "examples": [
      {
        "zh": "冬至一阳生，起居宜闭藏温补而不宜大汗淋漓。",
        "pinyin": "Dōngzhì yīyángshēng, qǐjū yí bìcáng wēnbǔ ér bù yí dàhàn línlí.",
        "en": "At Winter Solstice when initial yang revives, rest calmly and nourish gently rather than sweating heavily.",
        "vi": "Đông Chí một hào Dương sinh, sinh hoạt nên giữ ấm bồi bổ kín đáo tránh ra mồ hôi quá sức."
      },
      {
        "zh": "苏州人在冬至夜有喝桂花冬酿酒的温润传统。",
        "pinyin": "Sūzhōurén zài Dōngzhìyè yǒu hē guìhuā dōngniàngjiǔ de wēnrùn chuántǒng.",
        "en": "Suzhou locals traditionally drink osmanthus winter-brewed wine on Winter Solstice eve.",
        "vi": "Người Tô Châu đêm Đông Chí có lệ uống rượu hoa quế ủ ấm bụng."
      }
    ]
  },
  {
    "id": "guyu_rain",
    "hanzi": "谷雨",
    "traditional": "谷雨",
    "pinyin": "Gǔyǔ",
    "hanViet": "CỐC VŨ",
    "liushuType": "象形 · 象形",
    "liushuCategory": "象形 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Nông lịch",
    "pos": "n.",
    "english": "Grain Rain (6th Solar Term & Hanzi Day)",
    "vietnamese": "Tiết Cốc Vũ (Mưa tưới ngũ cốc & Ngày Chữ Hán LHQ) (Hán-Việt: CỐC VŨ)",
    "radical": "谷 (Thung lũng lúa gạo) + 雨 (Hạt mưa từ vòm trời)",
    "radicalAnalysis": "谷 (Thung lũng lúa gạo) + 雨 (Hạt mưa từ vòm trời)",
    "etymologyAndRadicals": "象形 · 象形 — Bộ thủ: 谷 (Thung lũng lúa gạo) + 雨 (Hạt mưa từ vòm trời). Cơn mưa xuân dồi dào (雨) giúp trăm loại ngũ cốc bén rễ sinh trưởng (谷).",
    "components": "Cơn mưa xuân dồi dào (雨) giúp trăm loại ngũ cốc bén rễ sinh trưởng (谷).",
    "context": "Liên Hợp Quốc chọn Tiết Cốc Vũ (20/4) làm 'Ngày Ngôn ngữ Trung Quốc' tôn vinh truyền thuyết Thương Hiệt tạo chữ trời đổ mưa thóc.",
    "related": [
      "仓颉造字",
      "雨生百谷",
      "国际中文日"
    ],
    "mnemonic": "Mưa xuân (雨) nuôi dưỡng mùa màng ngũ cốc (谷) xanh tốt.",
    "examples": [
      {
        "zh": "谷雨茶鲜嫩回甘，向来深受杭州与江浙茶客推崇。",
        "pinyin": "Gǔyǔ chá xiānnèn huígān, xiànglái shēnshòu Hángzhōu yǔ Jiāng-Zhè chákè tuīchóng.",
        "en": "Grain Rain tea is tender and sweet-aftertaste, prized across Hangzhou and Jiangnan.",
        "vi": "Trà Cốc Vũ xanh non hậu ngọt luôn được người sành trà Hàng Châu – Giang Chiết yêu chuộng."
      },
      {
        "zh": "联合国将每年谷雨前后定为“国际中文日”以纪念汉字文化。",
        "pinyin": "Liánhéguó jiāng měinián Gǔyǔ qiánhòu dìngwéi 'Guójì Zhōngwén Rì' yǐ jìniàn hànzì wénhuà.",
        "en": "The UN marks International Chinese Language Day around Grain Rain to honor Hanzi.",
        "vi": "Liên Hợp Quốc chọn dịp Cốc Vũ hàng năm làm Ngày Quốc tế Tiếng Trung tôn vinh chữ Hán."
      }
    ]
  },
  {
    "id": "shuangjiang_frost",
    "hanzi": "霜降",
    "traditional": "霜降",
    "pinyin": "Shuāngjiàng",
    "hanViet": "SƯƠNG GIÁNG",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Nông lịch",
    "pos": "n.",
    "english": "Frost's Descent (18th Solar Term)",
    "vietnamese": "Tiết Sương Giáng (chuyển lạnh cuối Thu sang Đông) (Hán-Việt: SƯƠNG GIÁNG)",
    "radical": "雨+相 (Sương) + 阝+夅 (Giáng - bước chân đi xuống núi)",
    "radicalAnalysis": "雨+相 (Sương) + 阝+夅 (Giáng - bước chân đi xuống núi)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 雨+相 (Sương) + 阝+夅 (Giáng - bước chân đi xuống núi). Hơi nước từ trời (雨) gặp lạnh ngưng kết thành sương muối hạ xuống mặt đất (降).",
    "components": "Hơi nước từ trời (雨) gặp lạnh ngưng kết thành sương muối hạ xuống mặt đất (降).",
    "context": "Báo hiệu thu hoạch vụ mùa muộn, lá phong chuyển đỏ và bắt đầu bổ phế – tỳ chuẩn bị vào đông.",
    "related": [
      "霜叶红于二月花",
      "秋燥调养",
      "柿子"
    ],
    "mnemonic": "Hơi mưa lạnh (雨) hạ từ sườn đồi (降) đóng sương trắng.",
    "examples": [
      {
        "zh": "停车坐爱枫林晚，霜叶红于二月花。",
        "pinyin": "Tíngchē zuò ài fēnglín wǎn, shuāngyè hóng yú èryuè huā.",
        "en": "Stopping my carriage out of love for autumn maples, frosted leaves look redder than spring blossoms.",
        "vi": "Dừng xe ngắm rừng phong chiều muộn, lá đọng sương đỏ rực hơn hoa tháng Hai (Đỗ Mục)."
      },
      {
        "zh": "霜降时节北方昼夜温差拉大，民间多食柿子与萝卜润肺生津。",
        "pinyin": "Shuāngjiàng shíjié běifāng zhòuyè wēnchā lādà, mínjiān duō shí shìzi yǔ luóbo rùnfèi shēngjīn.",
        "en": "As day-night temperature gaps widen at Frost's Descent, people eat persimmons and radishes.",
        "vi": "Tiết Sương Giáng chênh lệch nhiệt ngày đêm lớn, dân gian ăn hồng và củ cải dưỡng phổi."
      }
    ]
  },
  {
    "id": "benmingnian_zodiac",
    "hanzi": "本命年",
    "traditional": "本命年",
    "pinyin": "běnmìngnián",
    "hanViet": "BẢN MỆNH NIÊN",
    "liushuType": "指事 · 会意",
    "liushuCategory": "指事 · 会意",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Dân gian",
    "pos": "n.",
    "english": "Zodiac Year of Birth (12-Year Cycle)",
    "vietnamese": "Năm tuổi (chu kỳ 12 con giáp Địa chi trùng năm sinh) (Hán-Việt: BẢN MỆNH NIÊN)",
    "radical": "本 (Gốc) + 命 (Mệnh) + 年 (Lúa chín thu hoạch một vụ -> Năm)",
    "radicalAnalysis": "本 (Gốc) + 命 (Mệnh) + 年 (Lúa chín thu hoạch một vụ -> Năm)",
    "etymologyAndRadicals": "指事 · 会意 — Bộ thủ: 本 (Gốc) + 命 (Mệnh) + 年 (Lúa chín thu hoạch một vụ -> Năm). Năm quay lại đúng Địa chi năm sinh bản thân sau chu kỳ 12 năm, theo lịch Can Chi 60 hoa giáp.",
    "components": "Năm quay lại đúng Địa chi năm sinh bản thân sau chu kỳ 12 năm, theo lịch Can Chi 60 hoa giáp.",
    "context": "Phong tục dân gian mang dây lưng đỏ / tất đỏ ('Thái hồng' 踩红) cầu bình an chuyển vận trong năm tuổi.",
    "related": [
      "十二生肖",
      "甲子",
      "吉祥红"
    ],
    "mnemonic": "Năm (年) quay về đúng gốc rễ (本) Địa chi số mệnh (命).",
    "examples": [
      {
        "zh": "穿红袜或系红绳是中国民间本命年祈福的传统习俗。",
        "pinyin": "Chuān hóngwà huò xì hóngshéng shì Zhōngguó mínjiān běnmìngnián qífú de chuántǒng xísú.",
        "en": "Wearing red socks or cords is a traditional folk custom for blessing during one's zodiac year.",
        "vi": "Đi tất đỏ hoặc đeo chỉ đỏ là tập tục cầu may phổ biến vào năm tuổi."
      },
      {
        "zh": "经历五个本命年即满六十岁“一甲子”，被视为人生重要里程碑。",
        "pinyin": "Jīnglì wǔ gè běnmìngnián jí mǎn liùshí suì 'yī jiǎzǐ', bèi shìwéi rénshēng zhòngyào lǐchéngbēi.",
        "en": "Completing five 12-year cycles marks a 60-year Sexagenary Cycle milestone.",
        "vi": "Trải qua năm vòng năm tuổi tròn 60 tuổi gọi là một Hoa Giáp, cột mốc trọng đại đời người."
      }
    ]
  },
  {
    "id": "shengxiao_zodiac",
    "hanzi": "生肖",
    "traditional": "生肖",
    "pinyin": "shēngxiào",
    "hanViet": "SINH TIÊU",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "HSK 3-4",
    "topicTag": "HSK 4 / Văn hóa",
    "pos": "n.",
    "english": "Twelve Chinese Zodiac Animals (12 Con Giáp)",
    "vietnamese": "12 Con Giáp biểu trưng 12 Địa chi (Hán-Việt: SINH TIÊU)",
    "radical": "生 (Năm sinh) + ⺼+小 (Tiêu - giống hình mẫu)",
    "radicalAnalysis": "生 (Năm sinh) + ⺼+小 (Tiêu - giống hình mẫu)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 生 (Năm sinh) + ⺼+小 (Tiêu - giống hình mẫu). Con vật tương ứng với năm sinh (生) mô phỏng tính cách khí chất biểu trưng (肖).",
    "components": "Con vật tương ứng với năm sinh (生) mô phỏng tính cách khí chất biểu trưng (肖).",
    "context": "Điểm đối chiếu Trung – Việt nổi tiếng: Trung Quốc là Thỏ (Mão 兔) và Bò (Sửu 牛), Việt Nam là Mèo (Mão 猫) và Trâu nước (Sửu).",
    "related": [
      "十二地支",
      "子鼠丑牛",
      "中越民俗差异"
    ],
    "mnemonic": "Động vật gắn với năm sinh (生) phản chiếu nét tượng trưng (肖).",
    "examples": [
      {
        "zh": "十二生肖不仅是纪年符号，更寄托着人们对勤劳、机敏与吉祥的期盼。",
        "pinyin": "Shí'èr shēngxiào bùjǐn shì jìnián fúhào, gèng jìtuō zhe rénmen duì qínláo, jīmǐn yǔ jíxiáng de qīpàn.",
        "en": "The twelve zodiac signs represent not only years but hopes for diligence, wit, and luck.",
        "vi": "12 Con Giáp vừa dùng để đếm năm vừa gửi gắm kỳ vọng cần cù, lanh lợi và cát tường."
      },
      {
        "zh": "春节期间的生肖邮票与文创设计已成为文化消费市场的年度热点。",
        "pinyin": "Chūnjié qījiān de shēngxiào yóupiào yǔ wénchuàng shèjì yǐ chéngwéi wénhuà xiāofèi shìchǎng de niándù rèdiǎn.",
        "en": "Zodiac stamps and cultural merch during Spring Festival are annual market highlights.",
        "vi": "Tem Tết và sản phẩm sáng tạo văn hóa Con Giáp là tâm điểm tiêu dùng mỗi dịp Xuân về."
      }
    ]
  },
  {
    "id": "ganzhi_sexagenary",
    "hanzi": "干支",
    "traditional": "干支",
    "pinyin": "gānzhī",
    "hanViet": "CAN CHI",
    "liushuType": "会意 · 象形",
    "liushuCategory": "会意 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Heavenly Stems and Earthly Branches",
    "vietnamese": "Hệ lịch Can Chi 60 Hoa Giáp (Hán-Việt: CAN CHI)",
    "radical": "干 (Thân cây đòn ngang) + 支 (Tay cầm cành trúc)",
    "radicalAnalysis": "干 (Thân cây đòn ngang) + 支 (Tay cầm cành trúc)",
    "etymologyAndRadicals": "会意 · 象形 — Bộ thủ: 干 (Thân cây đòn ngang) + 支 (Tay cầm cành trúc). Kết hợp 10 Thiên Can (vòng tròn thân cây trời) và 12 Địa Chi (cành nhánh đất) tạo chu kỳ 60 đơn vị.",
    "components": "Kết hợp 10 Thiên Can (vòng tròn thân cây trời) và 12 Địa Chi (cành nhánh đất) tạo chu kỳ 60 đơn vị.",
    "context": "Nền tảng ghi chép lịch sử suốt 3.500 năm từ giáp cốt nhà Thương (như Giáp Ngọ, Tân Hợi) đến lịch Bát Tự.",
    "related": [
      "六十甲子",
      "天干地支",
      "纪年法"
    ],
    "mnemonic": "Thân gỗ chính (干) kết hợp cành nhánh (支) đo đếm thời gian vũ trụ.",
    "examples": [
      {
        "zh": "殷墟甲骨文中已完整使用十天干配十二地支来记录祭祀日期。",
        "pinyin": "Yīnxū jiǎgǔwén zhōng yǐ wánzhěng shǐyòng shí tiāngān pèi shí'èr dìzhī lái jìlù jìsì rìqī.",
        "en": "Shang oracle bones already used the full 60-day stem-branch cycle to date rituals.",
        "vi": "Văn tự Giáp Cốt Ân Khư đã dùng trọn vẹn Thiên Can ghép Địa Chi ghi ngày tế lễ."
      },
      {
        "zh": "越南历史上同样通用干支纪年，如壬戌科进士碑即以干支命名。",
        "pinyin": "Yuènán lìshǐ shàng tóngyàng tōngyòng gānzhī jìnián, rú Rénxūkē jìnshìbēi jí yǐ gānzhī mìngmíng.",
        "en": "Vietnamese history likewise used stem-branch dating, such as the 1442 Nhâm Tuất stele.",
        "vi": "Lịch sử Việt Nam cũng thông dụng ghi niên hiệu Can Chi, như bia Tiến sĩ khoa Nhâm Tuất 1442."
      }
    ]
  },
  {
    "id": "huntianyi_armillary",
    "hanzi": "浑天仪",
    "traditional": "浑天仪",
    "pinyin": "húntiānyí",
    "hanViet": "HỖN THIÊN NGHI",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Khoa học",
    "pos": "n.",
    "english": "Armillary Sphere (Ancient Astronomical Instrument)",
    "vietnamese": "Dụng cụ thiên văn Hỗn Thiên Nghi (Trương Hành) (Hán-Việt: HỖN THIÊN NGHI)",
    "radical": "氵+军 (Hỗn - tròn đầy) + 天 + 亻+义 (Nghi - thước chuẩn)",
    "radicalAnalysis": "氵+军 (Hỗn - tròn đầy) + 天 + 亻+义 (Nghi - thước chuẩn)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 氵+军 (Hỗn - tròn đầy) + 天 + 亻+义 (Nghi - thước chuẩn). Vòng cầu xoay tròn mô phỏng bầu trời (浑天) đo tọa độ tinh tú chính xác (仪).",
    "components": "Vòng cầu xoay tròn mô phỏng bầu trời (浑天) đo tọa độ tinh tú chính xác (仪).",
    "context": "Trương Hành (78–139 CN, Đông Hán) hoàn thiện Hỗn Thiên Nghi chạy bằng sức nước và Quách Thủ Kính thời Nguyên cải tiến thành Giản Nghi.",
    "related": [
      "张衡",
      "天文学史",
      "郭守敬"
    ],
    "mnemonic": "Thiết bị chuẩn xác (仪) mô phỏng khối cầu vòm trời xoay tròn (浑天).",
    "examples": [
      {
        "zh": "张衡研制的漏水转浑天仪能够与实际星辰运转同步。",
        "pinyin": "Zhāng Héng yánzhì de lòushuǐ zhuàn húntiānyí nénggòu yǔ shíjì xīngchén yùnzhuǎn tóngbù.",
        "en": "Zhang Heng's water-driven armillary sphere rotated in sync with real celestial motion.",
        "vi": "Hỗn Thiên Nghi chạy bằng đồng hồ nước của Trương Hành quay khớp với tinh tú thực tế."
      },
      {
        "zh": "李约瑟《中国科学技术史》高度评价汉唐浑天仪对天文测量的贡献。",
        "pinyin": "Lǐ Yuēsè 'Zhōngguó Kēxué Jìshù Shǐ' gāodù píngjià Hàn-Táng húntiānyí duì tiānwén cèliáng de gòngxiàn.",
        "en": "Joseph Needham praised Han-Tang armillary spheres in Science and Civilisation in China.",
        "vi": "Joseph Needham đánh giá rất cao đóng góp của Hỗn Thiên Nghi Hán–Đường trong lịch sử đo đạc thiên văn."
      }
    ]
  },
  {
    "id": "lingshu_inner",
    "hanzi": "灵枢",
    "traditional": "灵枢",
    "pinyin": "Língshū",
    "hanViet": "LINH KHU",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Đông y",
    "pos": "n.",
    "english": "Spiritual Pivot (Part 2 of Huangdi Neijing)",
    "vietnamese": "Kinh Linh Khu (trọng tâm Châm cứu – Kinh lạc) (Hán-Việt: LINH KHU)",
    "radical": "灵 (Tinh diệu linh hoạt) + 木+区 (Khu - trục bản lề cửa)",
    "radicalAnalysis": "灵 (Tinh diệu linh hoạt) + 木+区 (Khu - trục bản lề cửa)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 灵 (Tinh diệu linh hoạt) + 木+区 (Khu - trục bản lề cửa). Phần thứ hai của 《Hoàng Đế Nội Kinh》 giải mã bản lề cốt yếu (枢) của tinh thần kinh mạch (灵).",
    "components": "Phần thứ hai của 《Hoàng Đế Nội Kinh》 giải mã bản lề cốt yếu (枢) của tinh thần kinh mạch (灵).",
    "context": "Cơ sở lý thuyết kinh mạch, huyệt vị, cửu châm và khí hóa sinh lý người xưa.",
    "related": [
      "黄帝内经",
      "素问",
      "九针"
    ],
    "mnemonic": "Trục bản lề then chốt (枢) điều khiển sự linh diệu (灵) của sinh khí.",
    "examples": [
      {
        "zh": "《灵枢》系统阐述了十二经脉循行与针刺补泻法则。",
        "pinyin": "'Língshū' xìtǒng chǎnshù le shí'èr jīngmài xúnxíng yǔ zhēncì bǔxiè fǎzé.",
        "en": "Lingshu systematically elaborates the twelve meridians and acupuncture needling rules.",
        "vi": "《Linh Khu》 trình bày hệ thống đường đi 12 kinh mạch và phép châm bổ tả."
      },
      {
        "zh": "中医学子常将《素问》理论与《灵枢》经络操作互参研读。",
        "pinyin": "Zhōngyī xuézǐ cháng jiāng 'Sùwèn' lǐlùn yǔ 'Língshū' jīngluò cāozuò hùcān yándú.",
        "en": "TCM students study Suwen theory alongside Lingshu meridian practices.",
        "vi": "Học giả Đông y luôn đọc song song lý luận 《Tố Vấn》 với thực hành kinh lạc 《Linh Khu》."
      }
    ]
  },
  {
    "id": "suwen_questions",
    "hanzi": "素问",
    "traditional": "素问",
    "pinyin": "Sùwèn",
    "hanViet": "TỐ VẤN",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Đông y",
    "pos": "n.",
    "english": "Basic Questions (Part 1 of Huangdi Neijing)",
    "vietnamese": "Kinh Tố Vấn (nền tảng Âm Dương Ngũ Hành – Tạng Tượng) (Hán-Việt: TỐ VẤN)",
    "radical": "素 (Lụa trắng mộc / Căn bản) + 门+口 (Vấn - gõ cửa hỏi)",
    "radicalAnalysis": "素 (Lụa trắng mộc / Căn bản) + 门+口 (Vấn - gõ cửa hỏi)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 素 (Lụa trắng mộc / Căn bản) + 门+口 (Vấn - gõ cửa hỏi). Những câu hỏi căn bản nguyên thủy nhất (素问) giữa Hoàng Đế và thái y Kỳ Bá về nguồn gốc sinh bệnh và dưỡng sinh.",
    "components": "Những câu hỏi căn bản nguyên thủy nhất (素问) giữa Hoàng Đế và thái y Kỳ Bá về nguồn gốc sinh bệnh và dưỡng sinh.",
    "context": "Tổng kết phép trị vị bệnh, ngũ vận lục khí, biến chứng 4 mùa và nguyên lý cân bằng Âm Dương.",
    "related": [
      "黄帝内经",
      "治未病",
      "阴阳平衡"
    ],
    "mnemonic": "Đặt câu hỏi (问) truy tìm quy luật mộc mạc căn nguyên (素) của sự sống.",
    "examples": [
      {
        "zh": "《素问》开篇即指出上古养生之道在于“法于阴阳，和于术数”。",
        "pinyin": "'Sùwèn' kāipiān jí zhǐchū shànggǔ yǎngshēng zhī dào zàiyú 'fǎ yú yīnyáng, hé yú shùshù'.",
        "en": "Suwen opens by grounding ancient wellness in following Yin-Yang and rhythmic order.",
        "vi": "《Tố Vấn》 mở đầu chỉ rõ phép dưỡng sinh xưa nằm ở thuận theo Âm Dương và tiết luật."
      },
      {
        "zh": "《素问》中的四时调神思想至今仍对现代作息医学颇具启发。",
        "pinyin": "'Sùwèn' zhōng de sìshí tiáoshén sīxiǎng zhìjīn réng duì xiàndài zuòxī yīxué pōjù qǐfā.",
        "en": "Suwen's seasonal mind-regulation ideas still inspire modern circadian medicine today.",
        "vi": "Tư tưởng điều thần bốn mùa trong 《Tố Vấn》 đến nay vẫn gợi mở y học nhịp sinh học hiện đại."
      }
    ]
  },
  {
    "id": "piwei_spleen",
    "hanzi": "脾胃",
    "traditional": "脾胃",
    "pinyin": "píwèi",
    "hanViet": "TỲ VỊ",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Đông y",
    "pos": "n.",
    "english": "Spleen and Stomach System ('Root of Acquired Constitution')",
    "vietnamese": "Hệ tiêu hóa Tỳ Vị ('Hậu thiên chi bản' trong Đông y) (Hán-Việt: TỲ VỊ)",
    "radical": "月+卑 (Tỳ - tạng tiêu hóa) + 田+月 (Vị - cái dạ dày chứa thức ăn)",
    "radicalAnalysis": "月+卑 (Tỳ - tạng tiêu hóa) + 田+月 (Vị - cái dạ dày chứa thức ăn)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 月+卑 (Tỳ - tạng tiêu hóa) + 田+月 (Vị - cái dạ dày chứa thức ăn). Cả hai chữ đều mang bộ Nhục ⺼ (thân thể), giữ chức năng thu nạp (Vị 胃) và vận hóa tinh hoa nuôi cơ bắp (Tỳ 脾).",
    "components": "Cả hai chữ đều mang bộ Nhục ⺼ (thân thể), giữ chức năng thu nạp (Vị 胃) và vận hóa tinh hoa nuôi cơ bắp (Tỳ 脾).",
    "context": "Trường phái Lý Đông Viên thời Kim–Nguyên đề xướng 'Nội thương Tỳ Vị, bách bệnh do sinh'.",
    "related": [
      "后天之本",
      "运化",
      "健脾益气"
    ],
    "mnemonic": "Kho dạ dày chứa đồ ăn (胃) phối hợp tạng chuyển hóa dinh dưỡng (脾).",
    "examples": [
      {
        "zh": "脾胃为后天之本，气血生化之源。",
        "pinyin": "Píwèi wéi hòutiān zhī běn, qìxuè shēnghuà zhī yuán.",
        "en": "The Spleen-Stomach system is the acquired foundation and source of Qi and Blood.",
        "vi": "Tỳ Vị là gốc hậu thiên, nguồn sinh hóa khí huyết cho toàn thân."
      },
      {
        "zh": "夏季贪凉饮冷容易损伤脾胃阳气，导致食欲不振。",
        "pinyin": "Xiàjì tānliáng yǐnlěng róngyì sǔnshāng píwèi yángqì, dǎozhì shíyù búzhèn.",
        "en": "Excessive cold drinks in summer easily harm Spleen-Stomach Yang and weaken appetite.",
        "vi": "Mùa hè ham uống đồ lạnh dễ làm tổn thương dương khí Tỳ Vị gây chán ăn."
      }
    ]
  },
  {
    "id": "qixue_blood",
    "hanzi": "气血",
    "traditional": "气血",
    "pinyin": "qìxuè",
    "hanViet": "KHÍ HUYẾT",
    "liushuType": "象形 · 指事",
    "liushuCategory": "象形 · 指事",
    "level": "HSK 5-6",
    "topicTag": "HSK 5-6 / Đông y",
    "pos": "n.",
    "english": "Qi (Vital Energy) and Blood",
    "vietnamese": "Khí và Huyết (hai chất liệu căn bản duy trì sinh mệnh) (Hán-Việt: KHÍ HUYẾT)",
    "radical": "气 (Hơi động) + 血 (Giọt máu trong chậu tế)",
    "radicalAnalysis": "气 (Hơi động) + 血 (Giọt máu trong chậu tế)",
    "etymologyAndRadicals": "象形 · 指事 — Bộ thủ: 气 (Hơi động) + 血 (Giọt máu trong chậu tế). Khí thuộc Dương thúc đẩy tuần hoàn ('Khí vi huyết chi soái'), Huyết thuộc Âm nuôi dưỡng Khí ('Huyết vi khí chi mẫu').",
    "components": "Khí thuộc Dương thúc đẩy tuần hoàn ('Khí vi huyết chi soái'), Huyết thuộc Âm nuôi dưỡng Khí ('Huyết vi khí chi mẫu').",
    "context": "Khái niệm phổ biến trong cả Đông y lâm sàng và ngôn ngữ dưỡng sinh hàng ngày.",
    "related": [
      "气血两虚",
      "活血化瘀",
      "补气养血"
    ],
    "mnemonic": "Hơi năng lượng dẫn đường (气) sánh đôi dòng máu đỏ nuôi thân (血).",
    "examples": [
      {
        "zh": "气为血之帅，血为气之母。",
        "pinyin": "Qì wéi xuè zhī shuài, xuè wéi qì zhī mǔ.",
        "en": "Qi is the commander of Blood; Blood is the mother of Qi.",
        "vi": "Khí là tướng soái dẫn Huyết, Huyết là mẹ nuôi dưỡng Khí."
      },
      {
        "zh": "饮食均衡与规律运动是维持气血充盈的最安全方法。",
        "pinyin": "Yǐnshí jūnhéng yǔ guīlǜ yùndòng shì wéichí qìxuè chōngyíng de zuì ānquán fāngfǎ.",
        "en": "Balanced diet and regular exercise are the safest ways to keep Qi and Blood abundant.",
        "vi": "Ăn uống cân bằng và vận động đều đặn là cách an toàn nhất giữ Khí Huyết dồi dào."
      }
    ]
  },
  {
    "id": "tiaoli_regulate",
    "hanzi": "调理",
    "traditional": "调理",
    "pinyin": "tiáolǐ",
    "hanViet": "ĐIỀU LÝ",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Đông y & Quản trị",
    "pos": "v.",
    "english": "Regulate / Rebalance / Condition",
    "vietnamese": "Điều hòa, bồi dưỡng cân bằng lại thể trạng/hệ thống (Hán-Việt: ĐIỀU LÝ)",
    "radical": "訁+周 (Điều - hòa điệu đều) + 王+里 (Lý - sửa gọn theo vân ngọc)",
    "radicalAnalysis": "訁+周 (Điều - hòa điệu đều) + 王+里 (Lý - sửa gọn theo vân ngọc)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 訁+周 (Điều - hòa điệu đều) + 王+里 (Lý - sửa gọn theo vân ngọc). Phối hợp điều chỉnh nhịp đều đặn (调) với sắp xếp đúng quy luật tự nhiên (理).",
    "components": "Phối hợp điều chỉnh nhịp đều đặn (调) với sắp xếp đúng quy luật tự nhiên (理).",
    "context": "Khác với cắt triệu chứng cấp tính, Đông y ưu tiên 'Điều lý' đưa cơ thể tự trở về trạng thái cân bằng.",
    "related": [
      "调理身体",
      "阴阳调和",
      "梳理"
    ],
    "mnemonic": "Phối lại cho hài hòa (调) theo đúng trật tự quy luật tự nhiên (理).",
    "examples": [
      {
        "zh": "病后恢复期注重饮食睡眠调理，往往比盲目进补更有效。",
        "pinyin": "Bìnghòu huīfùqī zhùzhòng yǐnshí shuìmián tiáolǐ, wǎngwǎng bǐ mángmù jìnbǔ gèng yǒuxiào.",
        "en": "Post-illness recovery benefits more from balanced rest and diet than blind tonics.",
        "vi": "Giai đoạn hồi phục chú trọng điều lý ăn ngủ thường hiệu quả hơn dùng thuốc bổ bừa bãi."
      },
      {
        "zh": "团队内部沟通机制的调理提高了跨部门项目推进效率。",
        "pinyin": "Tuánduì nèibù gōutōng jīzhì de tiáolǐ tígāo le kuà bùmén xiàngmù tuījìn xiàolǜ.",
        "en": "Fine-tuning internal team communication raised cross-departmental project efficiency.",
        "vi": "Điều chỉnh trật tự giao tiếp nội bộ giúp nâng cao hiệu suất dự án liên phòng ban."
      }
    ]
  },
  {
    "id": "shiliao_diet",
    "hanzi": "食疗",
    "traditional": "食疗",
    "pinyin": "shíliáo",
    "hanViet": "THỰC LIỆU",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Dưỡng sinh",
    "pos": "n.",
    "english": "Dietary Therapy (Food as Medicine)",
    "vietnamese": "Ẩm thực trị liệu ('Dược thực đồng nguyên') (Hán-Việt: THỰC LIỆU)",
    "radical": "食 (Mâm đậy vung thức ăn) + 疒+了 (Liệu - chữa lành bệnh)",
    "radicalAnalysis": "食 (Mâm đậy vung thức ăn) + 疒+了 (Liệu - chữa lành bệnh)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 食 (Mâm đậy vung thức ăn) + 疒+了 (Liệu - chữa lành bệnh). Dùng thực phẩm hàng ngày (食) như phương thức trị liệu tự nhiên nhẹ nhàng (疗).",
    "components": "Dùng thực phẩm hàng ngày (食) như phương thức trị liệu tự nhiên nhẹ nhàng (疗).",
    "context": "Tôn Tư Mạc thời Đường khẳng định trong 《Thiên Kim Yếu Phương》: 'Trước khi dùng thuốc hãy trị bằng thức ăn'.",
    "related": [
      "药食同源",
      "药膳",
      "顺时饮食"
    ],
    "mnemonic": "Biến bữa ăn hàng ngày (食) thành bài thuốc chữa lành nhẹ nhàng (疗).",
    "examples": [
      {
        "zh": "安身之本，必资于食；不知食宜者，不足以存生也。",
        "pinyin": "Ānshēn zhī běn, bì zī yú shí; bù zhī shí yí zhě, bùzú yǐ cúnshēng yě.",
        "en": "Food is the basis of bodily health; ignoring dietary suitability cannot sustain life (Sun Simiao).",
        "vi": "Gốc an thân phải nhờ ăn uống; chẳng biết phép ăn hợp thời sao giữ nổi sinh mệnh."
      },
      {
        "zh": "冬季常以生姜羊肉汤作为温阳御寒的传统食疗方。",
        "pinyin": "Dōngjì cháng yǐ shēngjiāng yángròutāng zuòwéi wēnyáng yùhán de chuántǒng shíliáofāng.",
        "en": "Ginger-lamb soup serves in winter as a warming dietary therapy.",
        "vi": "Mùa đông thường dùng canh thịt cừu gừng tươi làm món thực liệu ôn dương trừ hàn."
      }
    ]
  },
  {
    "id": "yaoshan_medfood",
    "hanzi": "药膳",
    "traditional": "药膳",
    "pinyin": "yàoshàn",
    "hanViet": "DƯỢC THIỆN",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "HSK 5-6",
    "topicTag": "HSK 6 / Ẩm thực Dưỡng sinh",
    "pos": "n.",
    "english": "Medicinal Cuisine / Herbal Dishes",
    "vietnamese": "Món ăn bài thuốc kết hợp thảo dược lành tính (Hán-Việt: DƯỢC THIỆN)",
    "radical": "艹+乐 (Dược - cỏ làm vui khỏe) + ⺼+善 (Thiện - món ăn ngon)",
    "radicalAnalysis": "艹+乐 (Dược - cỏ làm vui khỏe) + ⺼+善 (Thiện - món ăn ngon)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 艹+乐 (Dược - cỏ làm vui khỏe) + ⺼+善 (Thiện - món ăn ngon). Kết hợp thảo dược điều vị (药) với món ăn mỹ vị (膳) tạo tác dụng dưỡng sinh ngon miệng.",
    "components": "Kết hợp thảo dược điều vị (药) với món ăn mỹ vị (膳) tạo tác dụng dưỡng sinh ngon miệng.",
    "context": "Phổ biến trong văn hóa Quảng Đông (Lão Hỏa Lương Thang), Tứ Xuyên (Canh gà đương quy) và Việt Nam (Gà tần ngải cứu thuốc bắc).",
    "related": [
      "老火靓汤",
      "药食同源",
      "四物汤"
    ],
    "mnemonic": "Đem cỏ cây thuốc quý (药) hòa vào mâm cơm ngon lành (膳).",
    "examples": [
      {
        "zh": "广式老火靓汤讲究根据潮湿或干燥气候选用不同药膳食材。",
        "pinyin": "Guǎngshì lǎohuǒ liàngtāng jiǎngjiu gēnjù cháoshī huò gānzào qìhòu xuǎnyòng bùtóng yàoshàn shícái.",
        "en": "Cantonese slow-simmered soups tailor medicinal ingredients to humid or dry weather.",
        "vi": "Canh Lão Hỏa Quảng Đông chú trọng chọn nguyên liệu dược thiện theo mùa ẩm hay khô."
      },
      {
        "zh": "规范化的药膳研发正在成为健康食品产业的重要细分方向。",
        "pinyin": "Guīfànhuà de yàoshàn yánfā zhèngzài chéngwéi jiànkāng shípǐn chǎnyè de zhòngyào xìfēn fāngxiàng.",
        "en": "Standardized medicinal cuisine R&D is becoming a key health-food niche.",
        "vi": "Nghiên cứu dược thiện chuẩn hóa đang trở thành phân khúc trọng điểm của ngành thực phẩm sức khỏe."
      }
    ]
  },
  {
    "id": "bigu_fasting",
    "hanzi": "辟谷",
    "traditional": "辟谷",
    "pinyin": "bìgǔ",
    "hanViet": "TỊCH CỐC",
    "liushuType": "会意 · 象形",
    "liushuCategory": "会意 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Đạo gia",
    "pos": "v./n.",
    "english": "Daoist Breatharian / Grain-Abstinence Cultivation",
    "vietnamese": "Nhịn ngũ cốc thanh lọc thân tâm Đạo gia cổ (Hán-Việt: TỊCH CỐC)",
    "radical": "辟 (Tránh né bỏ xa) + 谷 (Ngũ cốc)",
    "radicalAnalysis": "辟 (Tránh né bỏ xa) + 谷 (Ngũ cốc)",
    "etymologyAndRadicals": "会意 · 象形 — Bộ thủ: 辟 (Tránh né bỏ xa) + 谷 (Ngũ cốc). Tạm tránh không ăn ngũ cốc chế biến (辟谷) kết hợp thổ nạp hô hấp — sách Mã Vương Đôi có văn bản 《Khước Cốc Thực Khí》.",
    "components": "Tạm tránh không ăn ngũ cốc chế biến (辟谷) kết hợp thổ nạp hô hấp — sách Mã Vương Đôi có văn bản 《Khước Cốc Thực Khí》.",
    "context": "Chú ý học thuật: trong cổ y Đạo gia là bài tập điều chỉnh chuyển hóa có giám sát, không áp dụng cực đoan phản khoa học.",
    "related": [
      "却谷食气",
      "马王堆帛书",
      "导引吐纳"
    ],
    "mnemonic": "Tránh xa (辟) nguồn ngũ cốc nặng trịch (谷) trong phép tĩnh tu Đạo gia.",
    "examples": [
      {
        "zh": "马王堆出土帛书《却谷食气》是目前所见最早的早期辟谷导引文献。",
        "pinyin": "Mǎwángduī chūtǔ bóshū 'Quègǔ Shíqì' shì mùqián suǒjiàn zuìzǎo de zǎoqī bìgǔ dǎoyǐn wénxiàn.",
        "en": "The Mawangdui silk manuscript on abstaining from grain is the earliest extant record of its kind.",
        "vi": "Văn bản lụa Mã Vương Đôi là tư liệu sớm nhất về phép Tịch cốc và Đạo dẫn cổ đại."
      },
      {
        "zh": "现代医学视角下的间歇性轻断食，与古代清淡节制饮食理念有相通之处。",
        "pinyin": "Xiàndài yīxué shìjiǎo xià de jiànxiēxìng qīngduànshí, yǔ gǔdài qīngdàn jiézhì yǐnshí lǐniàn yǒu xiāngtōng zhī chù.",
        "en": "Modern intermittent fasting shares similarities with ancient modest dietary restraint.",
        "vi": "Chế độ nhịn gián đoạn trong y học hiện đại có điểm tương đồng với nếp ăn thanh đạm tiết chế xưa."
      }
    ]
  },
  {
    "id": "tuina_massage",
    "hanzi": "推拿",
    "traditional": "推拿",
    "pinyin": "tuīná",
    "hanViet": "THÔI NA",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Đông y",
    "pos": "v./n.",
    "english": "TCM Therapeutic Massage / Tuina",
    "vietnamese": "Kỹ thuật đẩy – nắn trị liệu cơ xương khớp Đông y (Hán-Việt: THÔI NA)",
    "radical": "扌+隹 (Thôi - tay đẩy) + 合+手 (Na - tay nắm giữ)",
    "radicalAnalysis": "扌+隹 (Thôi - tay đẩy) + 合+手 (Na - tay nắm giữ)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 扌+隹 (Thôi - tay đẩy) + 合+手 (Na - tay nắm giữ). Cả hai chữ đều mang bộ Thủ 扌/手: dùng bàn tay đẩy miết (推) và cầm nắn bóp (拿) dọc kinh lạc.",
    "components": "Cả hai chữ đều mang bộ Thủ 扌/手: dùng bàn tay đẩy miết (推) và cầm nắn bóp (拿) dọc kinh lạc.",
    "context": "Từ cổ danh 'Án ma' thời Hán phát triển thành hệ thống 'Thôi na' điều trị đau cổ vai gáy và nhi khoa.",
    "related": [
      "按摩",
      "疏经通络",
      "小儿推拿"
    ],
    "mnemonic": "Dùng đôi tay (扌/手) lúc đẩy trượt (推) lúc nắn giữ (拿) thông kinh lạc.",
    "examples": [
      {
        "zh": "推拿手法讲究“持久、有力、均匀、柔和、深透”。",
        "pinyin": "Tuīná shǒufǎ jiǎngjiu 'chíjiǔ, yǒulì, jūnyún, róuhé, shēntòu'.",
        "en": "Tuina technique demands steady duration, strength, uniformity, gentleness, and deep penetration.",
        "vi": "Thủ pháp Thôi na đòi hỏi: bền bỉ, có lực, đồng đều, nhu hòa và thấu sâu."
      },
      {
        "zh": "对于轻度腰肌劳损，正规中医推拿比盲目服药更为温和有效。",
        "pinyin": "Duìyú qīngdù yāojī láosǔn, zhèngguī Zhōngyī tuīná bǐ mángmù fúyào gèngwéi wēnhé yǒuxiào.",
        "en": "For mild lumbar strain, proper TCM tuina is gentler and more effective than random pills.",
        "vi": "Với căng cơ lưng nhẹ, Thôi na Đông y bài bản êm dịu và hiệu quả hơn lạm dụng thuốc."
      }
    ]
  },
  {
    "id": "baguan_cupping",
    "hanzi": "拔罐",
    "traditional": "拔罐",
    "pinyin": "báguàn",
    "hanViet": "BẠT QUÁN",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Đông y",
    "pos": "v./n.",
    "english": "Cupping Therapy",
    "vietnamese": "Giác hơi (dùng áp suất âm rút phong hàn ứ trệ) (Hán-Việt: BẠT QUÁN)",
    "radical": "扌+犮 (Bạt - nhổ rút ra) + 缶+雚 (Quán - bình vò gốm sành)",
    "radicalAnalysis": "扌+犮 (Bạt - nhổ rút ra) + 缶+雚 (Quán - bình vò gốm sành)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 扌+犮 (Bạt - nhổ rút ra) + 缶+雚 (Quán - bình vò gốm sành). Đặt chiếc bình gốm sành (罐) tạo chân không hút kéo (拔) khí ứ trên bề mặt huyệt đạo.",
    "components": "Đặt chiếc bình gốm sành (罐) tạo chân không hút kéo (拔) khí ứ trên bề mặt huyệt đạo.",
    "context": "Thời Tấn Cát Hồng gọi là 'Giác pháp' (dùng sừng trâu đục lỗ), ngày nay phổ biến ở cả y học thể thao quốc tế.",
    "related": [
      "火罐",
      "祛湿通络",
      "角法"
    ],
    "mnemonic": "Dùng bình vò (罐) tạo lực hút rút (拔) hàn thấp ứ trệ khỏi kinh lạc.",
    "examples": [
      {
        "zh": "古代以兽角行拔罐之法，晋代医籍称之为“角法”。",
        "pinyin": "Gǔdài yǐ shòujiǎo xíng báguàn zhī fǎ, Jìndài yījí chēngzhī wéi 'jiǎofǎ'.",
        "en": "Ancient healers performed cupping with animal horns, calling it the horn method.",
        "vi": "Người xưa dùng sừng thú giác hơi, y thư thời Tấn gọi là Giác pháp."
      },
      {
        "zh": "多位奥运游泳运动员肩背留下的拔罐印迹曾引起全球媒体关注。",
        "pinyin": "Duō wèi Àoyùn yóuyǒng yùndòngyuán jiānbèi liúxià de báguàn yìnjì céng yǐnqǐ quánqiú méitǐ guānzhù.",
        "en": "Cupping marks on Olympic swimmers' backs drew global media interest.",
        "vi": "Những vết giác hơi trên vai vận động viên bơi lội Olympic từng gây chú ý toàn cầu."
      }
    ]
  },
  {
    "id": "aijiu_moxa",
    "hanzi": "艾灸",
    "traditional": "艾灸",
    "pinyin": "àijiǔ",
    "hanViet": "NGẢI CỨU",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 6 / Đông y",
    "pos": "n./v.",
    "english": "Moxibustion (Thermal Herb Therapy)",
    "vietnamese": "Cứu ngải (hơ ấm huyệt bằng lá ngải cứu khô) (Hán-Việt: NGẢI CỨU)",
    "radical": "艹+乂 (Ngải - cỏ ngải cắt tỉa) + 久+火 (Cứu - hơ lửa ấm lâu)",
    "radicalAnalysis": "艹+乂 (Ngải - cỏ ngải cắt tỉa) + 久+火 (Cứu - hơ lửa ấm lâu)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 艹+乂 (Ngải - cỏ ngải cắt tỉa) + 久+火 (Cứu - hơ lửa ấm lâu). Đốt cây ngải cứu phơi lâu năm (艾) hơ hơi ấm xuyên sâu (灸) vào các huyệt đạo.",
    "components": "Đốt cây ngải cứu phơi lâu năm (艾) hơ hơi ấm xuyên sâu (灸) vào các huyệt đạo.",
    "context": "Bổ sung cho Châm kim ở những người thể trạng hư hàn suy nhược ('Châm sở bất vi, Cứu chi sở nghi').",
    "related": [
      "艾草",
      "温经散寒",
      "关元穴"
    ],
    "mnemonic": "Đốt lá cỏ ngải cứu (艾) truyền hơi lửa ấm lâu dài (灸) vào huyệt.",
    "examples": [
      {
        "zh": "药之不及，针之不到，必须灸之。",
        "pinyin": "Yào zhī bùjí, zhēn zhī bùdào, bìxū jiǔ zhī.",
        "en": "Where medicine fails to reach and needles fall short, moxibustion is essential.",
        "vi": "Chỗ thuốc chưa tới, châm chưa thấu, ắt phải dùng phép Cứu ngải (Nội Kinh)."
      },
      {
        "zh": "春季或入冬时常在足三里与关元穴施以温和艾灸以强身健体。",
        "pinyin": "Chūnjì huò rùdōng shí cháng zài Zúsānlǐ yǔ Guānyuánxué shīyǐ wēnhé àijiǔ yǐ qiángshēn jiàntǐ.",
        "en": "Gentle moxa at Zusanli and Guanyuan helps fortify health in spring and winter.",
        "vi": "Đầu xuân hay chớm đông thường hơ ấm nhẹ huyệt Túc Tam Lý và Quan Nguyên nâng cao thể lực."
      }
    ]
  },
  {
    "id": "wangwenwenqie_diag",
    "hanzi": "望闻问切",
    "traditional": "望闻问切",
    "pinyin": "wàng wén wèn qiè",
    "hanViet": "VỌNG VĂN VẤN THIẾT",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Đông y",
    "pos": "idiom",
    "english": "Four Methods of TCM Diagnosis (Look, Listen/Smell, Ask, Palpate)",
    "vietnamese": "Tứ chẩn (Nhìn sắc, Nghe/ngửi âm, Hỏi bệnh sử, Bắt mạch) (Hán-Việt: VỌNG VĂN VẤN THIẾT)",
    "radical": "望 (Ngước nhìn) + 闻 (Tai kề cửa nghe) + 问 (Miệng hỏi) + 切 (Dao cắt/Tay ấn sờ)",
    "radicalAnalysis": "望 (Ngước nhìn) + 闻 (Tai kề cửa nghe) + 问 (Miệng hỏi) + 切 (Dao cắt/Tay ấn sờ)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 望 (Ngước nhìn) + 闻 (Tai kề cửa nghe) + 问 (Miệng hỏi) + 切 (Dao cắt/Tay ấn sờ). Bốn bước thu thập dữ liệu toàn diện của thầy thuốc Biển Thước (《Sử Ký – Biển Thước Thương Công liệt truyện》).",
    "components": "Bốn bước thu thập dữ liệu toàn diện của thầy thuốc Biển Thước (《Sử Ký – Biển Thước Thương Công liệt truyện》).",
    "context": "Nguyên tắc không tách rời: nhìn lưỡi sắc mặt (Vọng), nghe hơi thở tiếng ho (Văn), hỏi tiền sử (Vấn), bắt mạch (Thiết).",
    "related": [
      "四诊合参",
      "扁鹊",
      "辨证论治"
    ],
    "mnemonic": "Nhìn mắt (望), nghe tai (闻), hỏi miệng (问) và bắt tay ấn mạch (切) — 4 giác quan hợp nhất.",
    "examples": [
      {
        "zh": "中医临床必须坚持望闻问切“四诊合参”，不可偏废一端。",
        "pinyin": "Zhōngyī línchuáng bìxū jiānchí wàng-wén-wèn-qiè 'sìzhěn hécān', bùkě piānfèi yīduān.",
        "en": "TCM diagnosis requires integrating all four methods without relying on one alone.",
        "vi": "Lâm sàng Đông y bắt buộc phối hợp cả Tứ chẩn Vọng Văn Vấn Thiết, không lệch một khâu."
      },
      {
        "zh": "商务尽职调查同样讲究实地“望闻问切”，深入工厂而非只看纸面报告。",
        "pinyin": "Shāngwù jìnzhí diàochá tóngyàng jiǎngjiu shídì 'wàng-wén-wèn-qiè', shēnrù gōngchǎng ér fēi zhǐ kàn zhǐmiàn bàogào.",
        "en": "Business due diligence likewise needs on-site 'look, listen, ask, check' in factories.",
        "vi": "Thẩm định doanh nghiệp cũng cần 'Vọng Văn Vấn Thiết' trực tiếp tại nhà xưởng thay vì chỉ đọc hồ sơ."
      }
    ]
  },
  {
    "id": "weiyuejin_penalty",
    "hanzi": "违约金",
    "traditional": "违约金",
    "pinyin": "wéiyuējīn",
    "hanViet": "VI ƯỚC KIM",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "HSK 5-6",
    "topicTag": "HSK 5-6 / Pháp lý",
    "pos": "n.",
    "english": "Liquidated Damages / Breach Penalty",
    "vietnamese": "Tiền phạt vi phạm hợp đồng (Hán-Việt: VI ƯỚC KIM)",
    "radical": "辶+韦 (Vi - đi ngược lại) + 约 (Ước - giao ước) + 金 (Tiền)",
    "radicalAnalysis": "辶+韦 (Vi - đi ngược lại) + 约 (Ước - giao ước) + 金 (Tiền)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 辶+韦 (Vi - đi ngược lại) + 约 (Ước - giao ước) + 金 (Tiền). Khoản tiền (金) phải bồi hoàn khi làm trái (违) điều khoản đã cam kết ước định (约).",
    "components": "Khoản tiền (金) phải bồi hoàn khi làm trái (违) điều khoản đã cam kết ước định (约).",
    "context": "Trong Luật Dân sự Trung Quốc, nếu Vi ước kim quá cao (>30% thiệt hại thực tế), tòa có quyền điều chỉnh giảm.",
    "related": [
      "违约责任",
      "合同法",
      "赔偿损失"
    ],
    "mnemonic": "Tiền phạt (金) khi làm trái ngược (违) cam kết giao ước (约).",
    "examples": [
      {
        "zh": "合同应明确约定逾期交货的违约金计算比例与上限。",
        "pinyin": "Hétong yīng míngquè yuēdìng yúqī jiāohuò de wéiyuējīn jìsuàn bǐlì yǔ shàngxiàn.",
        "en": "Contracts must clearly state liquidated damages calculation ratios and caps for late delivery.",
        "vi": "Hợp đồng cần quy định rõ tỷ lệ tính và mức trần tiền phạt giao hàng chậm."
      },
      {
        "zh": "双方在协议中区分了履约定金与违约金的适用条款。",
        "pinyin": "Shuāngfāng zài xiéyì zhōng qūfēn le lǚyuē dìngjīn yǔ wéiyuējīn de shìyòng tiáokuǎn.",
        "en": "The parties distinguished performance deposits from breach penalties in the agreement.",
        "vi": "Hai bên trong thỏa thuận đã phân tách rõ điều khoản Định kim bảo đảm và Vi ước kim."
      }
    ]
  },
  {
    "id": "tidan_bl",
    "hanzi": "提单",
    "traditional": "提单",
    "pinyin": "tídān",
    "hanViet": "ĐỀ ĐƠN (VẬN ĐƠN)",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Kinh doanh / Logistics",
    "pos": "n.",
    "english": "Bill of Lading (B/L)",
    "vietnamese": "Vận đơn đường biển / Chứng từ sở hữu hàng hóa (Hán-Việt: ĐỀ ĐƠN (VẬN ĐƠN))",
    "radical": "扌+是 (Đề - tay cầm nhận) + 单 (Đơn từ chứng nhận)",
    "radicalAnalysis": "扌+是 (Đề - tay cầm nhận) + 单 (Đơn từ chứng nhận)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 扌+是 (Đề - tay cầm nhận) + 单 (Đơn từ chứng nhận). Chứng từ (单) do hãng tàu phát hành cho phép người cầm bản gốc đến nhận bàn giao hàng hóa (提).",
    "components": "Chứng từ (单) do hãng tàu phát hành cho phép người cầm bản gốc đến nhận bàn giao hàng hóa (提).",
    "context": "Chứng từ quan trọng bậc nhất trong thanh toán L/C và xuất nhập khẩu đường biển (Original B/L vs Telex Release).",
    "related": [
      "海运提单",
      "电放提单",
      "信用证"
    ],
    "mnemonic": "Tờ đơn (单) xuất trình để nhận lấy (提) kiện hàng tại cảng đến.",
    "examples": [
      {
        "zh": "全套正本海运提单是进口商向承运人提货的物权凭证。",
        "pinyin": "Quántào zhèngběn hǎiyùn tídān shì jìnkǒushāng xiàng chéngyùnrén tíhuò de wùquán píngzhèng.",
        "en": "A full set of original Bills of Lading serves as document of title to claim cargo.",
        "vi": "Bộ vận đơn gốc đường biển đầy đủ là chứng từ sở hữu hàng hóa để nhận hàng từ hãng tàu."
      },
      {
        "zh": "采用信用证结算时，提单上的收货人栏必须严格遵循开证行要求。",
        "pinyin": "Cǎiyòng xìnyòngzhèng jiésuàn shí, tídān shàng de shōuhuòrén lán bìxū yángé zūnxún kāizhèngháng yāoqiú.",
        "en": "Under L/C terms, the consignee box on the B/L must strictly follow issuing bank instructions.",
        "vi": "Khi thanh toán bằng L/C, mục người nhận hàng trên Vận đơn phải tuân thủ đúng yêu cầu ngân hàng mở."
      }
    ]
  },
  {
    "id": "guanshui_tariff",
    "hanzi": "关税",
    "traditional": "关税",
    "pinyin": "guānshuì",
    "hanViet": "QUAN THUẾ",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Thương mại",
    "pos": "n.",
    "english": "Customs Duty / Tariff",
    "vietnamese": "Thuế xuất nhập khẩu qua cửa ải hải quan (Hán-Việt: QUAN THUẾ)",
    "radical": "门+丷+天 (Quan - chốt cửa ải) + 禾+兑 (Thuế - trích nộp lúa gạo)",
    "radicalAnalysis": "门+丷+天 (Quan - chốt cửa ải) + 禾+兑 (Thuế - trích nộp lúa gạo)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 门+丷+天 (Quan - chốt cửa ải) + 禾+兑 (Thuế - trích nộp lúa gạo). Khoản thuế (税) thu đánh lên hàng hóa khi đi qua cửa ải biên giới quốc gia (关).",
    "components": "Khoản thuế (税) thu đánh lên hàng hóa khi đi qua cửa ải biên giới quốc gia (关).",
    "context": "Nhờ Hiệp định ACFTA và RCEP, hàng nghìn dòng thuế mã HS Việt – Trung được cắt giảm về 0% nếu xuất trình C/O Form E / C/O RCEP.",
    "related": [
      "RCEP减税",
      "海关",
      "HS编码"
    ],
    "mnemonic": "Khoản thu nộp (税) tại chốt cửa ải biên giới quốc gia (关).",
    "examples": [
      {
        "zh": "凭借合规的Form E原产地证书，该批机械设备在越南进口享受零关税待遇。",
        "pinyin": "Píngjiè héguī de Form E yuánchǎndì zhèngshū, gāipī jīxiè shèbèi zài Yuènán jìnkǒu xiǎngshòu líng guānshuì dàiyù.",
        "en": "With a compliant Form E C/O, the machinery enjoys zero tariff upon import into Vietnam.",
        "vi": "Nhờ C/O Form E hợp lệ, lô thiết bị máy móc này nhập vào Việt Nam được hưởng thuế suất 0%."
      },
      {
        "zh": "RCEP协定生效后，中越双边高附加值工业品关税壁垒大幅降低。",
        "pinyin": "RCEP xiédìng shēngxiào hòu, Zhōng-Yuè shuāngbiān gāo fùjiāzhí gōngyèpǐn guānshuì bìlěi dàfú jiàngdī.",
        "en": "Since RCEP took effect, bilateral tariffs on high-value industrial goods dropped sharply.",
        "vi": "Sau khi RCEP có hiệu lực, hàng rào thuế quan công nghiệp song phương Việt – Trung giảm mạnh."
      }
    ]
  },
  {
    "id": "huilv_fx",
    "hanzi": "汇率",
    "traditional": "汇率",
    "pinyin": "huìlǜ",
    "hanViet": "HỐI SUẤT",
    "liushuType": "会意 · 象形",
    "liushuCategory": "会意 · 象形",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Tài chính",
    "pos": "n.",
    "english": "Exchange Rate",
    "vietnamese": "Tỷ giá hối đoái ngoại tệ (Hán-Việt: HỐI SUẤT)",
    "radical": "氵+匚 (Hối - dòng tiền gom chuyển) + 率 (Tỷ lệ cân đo)",
    "radicalAnalysis": "氵+匚 (Hối - dòng tiền gom chuyển) + 率 (Tỷ lệ cân đo)",
    "etymologyAndRadicals": "会意 · 象形 — Bộ thủ: 氵+匚 (Hối - dòng tiền gom chuyển) + 率 (Tỷ lệ cân đo). Tỷ lệ quy đổi (率) giữa các dòng tiền tệ chuyển khoản quốc tế (汇).",
    "components": "Tỷ lệ quy đổi (率) giữa các dòng tiền tệ chuyển khoản quốc tế (汇).",
    "context": "Doanh nghiệp Việt–Trung ngày càng chú trọng thanh toán bản tệ VND/CNY trực tiếp qua biên giới bên cạnh USD để giảm rủi ro tỷ giá.",
    "related": [
      "外汇",
      "本币结算",
      "人民币"
    ],
    "mnemonic": "Tỷ lệ quy đổi chuẩn (率) khi dòng tiền hội tụ chuyển đổi (汇).",
    "examples": [
      {
        "zh": "出口商可通过远期结售汇合约对冲美元兑人民币汇率波动风险。",
        "pinyin": "Chūkǒushāng kě tōngguò yuǎnqī jiéshòuhuì héyuē duìchōng Měiyuán duì Rénmínbì huìlǜ bōdòng fēngxiǎn.",
        "en": "Exporters can hedge USD/CNY exchange rate volatility through forward FX contracts.",
        "vi": "Nhà xuất khẩu có thể phòng ngừa rủi ro biến động tỷ giá USD/CNY bằng hợp đồng kỳ hạn."
      },
      {
        "zh": "边贸企业越来越多地采用本币结算，降低汇率换算手续费。",
        "pinyin": "Biānmào qǐyè yuèláiyuè duō de cǎiyòng běnbì jiésuàn, jiàngdī huìlǜ huànsuàn shǒuxùfèi.",
        "en": "Border-trade firms increasingly adopt local currency settlement to cut FX conversion costs.",
        "vi": "Doanh nghiệp biên mậu ngày càng thanh toán bằng đồng bản tệ để giảm phí quy đổi tỷ giá."
      }
    ]
  },
  {
    "id": "fob_price",
    "hanzi": "离岸价",
    "traditional": "離岸價",
    "pinyin": "lí'ànjià",
    "hanViet": "LY NGẠN GIÁ (GIÁ FOB)",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Ngoại thương / Incoterms",
    "pos": "n.",
    "english": "Free On Board (FOB) Price",
    "vietnamese": "Giá giao hàng lên tàu tại cảng xuất khẩu (Incoterms) (Hán-Việt: LY NGẠN GIÁ (GIÁ FOB))",
    "radical": "离 (Rời khỏi) + 山+厂+干 (Ngạn - bờ bến cảng) + 价 (Giá cả)",
    "radicalAnalysis": "离 (Rời khỏi) + 山+厂+干 (Ngạn - bờ bến cảng) + 价 (Giá cả)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 离 (Rời khỏi) + 山+厂+干 (Ngạn - bờ bến cảng) + 价 (Giá cả). Giá hàng hóa cho tới thời điểm rời bến (离岸) qua lan can xếp lên boong tàu cảng đi.",
    "components": "Giá hàng hóa cho tới thời điểm rời bến (离岸) qua lan can xếp lên boong tàu cảng đi.",
    "context": "Điều kiện thương mại phổ biến nhất khi nhập khẩu hàng container từ cảng Ninh Ba, Thượng Hải, Thâm Quyến về Hải Phòng / Cát Lái.",
    "related": [
      "Incoterms 2020",
      "FOB",
      "港口交货"
    ],
    "mnemonic": "Mức giá (价) tính đến khi hàng rời bờ bến cảng xuất phát (离岸).",
    "examples": [
      {
        "zh": "这批货物我们按深圳盐田港离岸价（FOB Shenzhen）报价。",
        "pinyin": "Zhèpī huòwù wǒmen àn Shēnzhèn Yántiángǎng lí'ànjià bàojià.",
        "en": "We quote this shipment on an FOB Shenzhen Yantian Port basis.",
        "vi": "Lô hàng này chúng tôi báo giá theo điều kiện FOB cảng Diêm Điền, Thâm Quyến."
      },
      {
        "zh": "采用离岸价成交时，国际海运费与海上保险由买方负责安排。",
        "pinyin": "Cǎiyòng lí'ànjià chéngjiāo shí, guójì hǎiyùnfèi yǔ hǎishàng bǎoxiǎn yóu mǎifāng fùzé ānpái.",
        "en": "Under FOB terms, the buyer arranges main ocean freight and marine insurance.",
        "vi": "Khi giao dịch theo giá FOB, người mua chịu trách nhiệm thu xếp cước biển và bảo hiểm."
      }
    ]
  },
  {
    "id": "cif_price",
    "hanzi": "到岸价",
    "traditional": "到岸價",
    "pinyin": "dào'ànjià",
    "hanViet": "ĐÁO NGẠN GIÁ (GIÁ CIF)",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Ngoại thương / Incoterms",
    "pos": "n.",
    "english": "Cost, Insurance and Freight (CIF) Price",
    "vietnamese": "Giá bao gồm tiền hàng, bảo hiểm và cước tàu tới cảng đích (Hán-Việt: ĐÁO NGẠN GIÁ (GIÁ CIF))",
    "radical": "到 (Tới nơi) + 岸 (Bờ cảng đích) + 价 (Giá)",
    "radicalAnalysis": "到 (Tới nơi) + 岸 (Bờ cảng đích) + 价 (Giá)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 到 (Tới nơi) + 岸 (Bờ cảng đích) + 价 (Giá). Tổng giá đã bao gồm chi phí vận tải biển và bảo hiểm đưa hàng tới bờ cảng nhập khẩu (到岸).",
    "components": "Tổng giá đã bao gồm chi phí vận tải biển và bảo hiểm đưa hàng tới bờ cảng nhập khẩu (到岸).",
    "context": "Lưu ý kiểm toán ngoại thương: Việt Nam tính Trị giá hải quan hàng nhập khẩu dựa trên giá CIF tại cửa khẩu nhập đầu tiên.",
    "related": [
      "CIF",
      "海关估价",
      "保险费"
    ],
    "mnemonic": "Mức giá (价) đưa hàng cập bến bờ cảng người mua (到岸).",
    "examples": [
      {
        "zh": "海防港到岸价（CIF Haiphong）报价中已包含基本海上运输险。",
        "pinyin": "Hǎifánggǎng dào'ànjià bàojià zhōng yǐ bāohán jīběn hǎishàng yùnshūxiǎn.",
        "en": "The CIF Haiphong quote already includes basic marine cargo insurance.",
        "vi": "Báo giá CIF cảng Hải Phòng đã bao gồm bảo hiểm vận tải đường biển cơ bản."
      },
      {
        "zh": "越南海关通常依据进口货物的到岸价核算进口关税与增值税税基。",
        "pinyin": "Yuènán hǎiguān tōngcháng yījù jìnkǒu huòwù de dào'ànjià hésuàn jìnkǒu guānshuì yǔ zēngzhíshuì shuìjī.",
        "en": "Vietnamese customs calculates import duties and VAT based on the CIF customs value.",
        "vi": "Hải quan Việt Nam tính thuế nhập khẩu và VAT dựa trên trị giá tính thuế theo điều kiện CIF."
      }
    ]
  },
  {
    "id": "caigou_procure",
    "hanzi": "采购",
    "traditional": "采购",
    "pinyin": "cǎigòu",
    "hanViet": "THÁI CẤU (THU MUA)",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Chuỗi cung ứng",
    "pos": "v./n.",
    "english": "Procurement / Sourcing",
    "vietnamese": "Tìm nguồn hàng, thu mua vật tư/sản phẩm (Hán-Việt: THÁI CẤU (THU MUA))",
    "radical": "爫+木 (Thái - tay hái chọn) + 贝+勾 (Cấu - dùng tiền mua về)",
    "radicalAnalysis": "爫+木 (Thái - tay hái chọn) + 贝+勾 (Cấu - dùng tiền mua về)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 爫+木 (Thái - tay hái chọn) + 贝+勾 (Cấu - dùng tiền mua về). Bàn tay lựa chọn tinh tế (采) và dùng tiền tài (贝) đặt mua mang về (购).",
    "components": "Bàn tay lựa chọn tinh tế (采) và dùng tiền tài (贝) đặt mua mang về (购).",
    "context": "Nghiệp vụ nòng cốt của doanh nghiệp Việt Nam tìm nhà máy Trung Quốc (OEM/ODM) trên 1688 hay Canton Fair.",
    "related": [
      "供应链采购",
      "ODM/OEM",
      "买手"
    ],
    "mnemonic": "Bàn tay hái chọn kỹ lưỡng (采) rồi xuất tiền mua về (购) là Thu mua.",
    "examples": [
      {
        "zh": "我司采购部下个月将赴义乌和广州参加广交会实地考察供应商。",
        "pinyin": "Wǒsī cǎigòubù xiàgèyuè jiāng fù Yìwū hé Guǎngzhōu cānjiā Guǎngjiāohuì shídì kǎochá gōngyìngshāng.",
        "en": "Our procurement team will visit Yiwu and Canton Fair next month to audit suppliers.",
        "vi": "Bộ phận thu mua công ty tháng tới sẽ sang Nghĩa Ô và Quảng Châu tham dự Canton Fair khảo sát xưởng."
      },
      {
        "zh": "数字化集中采购流程有效降低了电子元器件的整体采购成本。",
        "pinyin": "Shùzìhuà jízhōng cǎigòu liúchéng yǒuxiào jiàngdī le diànzǐ yuánqìjiàn de zhěngtǐ cǎigòu chéngběn.",
        "en": "Digitized centralized procurement lowered overall electronic component sourcing costs.",
        "vi": "Quy trình thu mua tập trung số hóa giúp giảm đáng kể chi phí linh kiện điện tử."
      }
    ]
  },
  {
    "id": "baojia_quote",
    "hanzi": "报价",
    "traditional": "报价",
    "pinyin": "bàojià",
    "hanViet": "BÁO GIÁ",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Kinh doanh",
    "pos": "v./n.",
    "english": "Quote a Price / Price Quotation",
    "vietnamese": "Bảng báo giá thương mại (Hán-Việt: BÁO GIÁ)",
    "radical": "扌+卩 (Báo - đáp trình) + 亻+贾 (Giá - giá trị giao dịch)",
    "radicalAnalysis": "扌+卩 (Báo - đáp trình) + 亻+贾 (Giá - giá trị giao dịch)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 扌+卩 (Báo - đáp trình) + 亻+贾 (Giá - giá trị giao dịch). Thông báo chính thức (报) bảng giá trị sản phẩm (价) kèm điều kiện giao hàng, MOQ và hiệu lực.",
    "components": "Thông báo chính thức (报) bảng giá trị sản phẩm (价) kèm điều kiện giao hàng, MOQ và hiệu lực.",
    "context": "Cần soi kỹ báo giá gồm bao bì xuất khẩu, VAT nội địa (chưa gồm hay đã gồm 13%) và điều kiện FOB/EXW.",
    "related": [
      "报价单",
      "核价",
      "有效期"
    ],
    "mnemonic": "Đưa ra thông báo (报) về mức giá trị giao dịch (价).",
    "examples": [
      {
        "zh": "请根据两千件的采购数量为我们提供最新的EXW工厂报价单。",
        "pinyin": "Qǐng gēnjù liǎngqiān jiàn de cǎigòu shùliàng wèi wǒmen tígōng zuìxīn de EXW gōngchǎng bàojiàdān.",
        "en": "Please provide an updated EXW factory quotation for a quantity of 2,000 units.",
        "vi": "Xin gửi bảng báo giá xuất xưởng EXW mới nhất cho số lượng 2.000 sản phẩm."
      },
      {
        "zh": "对比三家工厂的BOM成本结构与报价细节后再最终定厂。",
        "pinyin": "Duìbǐ sānjiā gōngchǎng de BOM chéngběn jiégòu yǔ bàojià xìjié hòu zài zuìzhōng dìngchǎng.",
        "en": "Compare BOM cost structures and quotation details across three factories before selecting.",
        "vi": "Đối chiếu cấu trúc chi phí BOM và chi tiết báo giá của ba xưởng trước khi chốt nhà cung cấp."
      }
    ]
  },
  {
    "id": "qidingliang_moq",
    "hanzi": "起订量",
    "traditional": "起訂量",
    "pinyin": "qǐdìngliàng",
    "hanViet": "KHỞI ĐÍNH LƯỢNG (MOQ)",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Kinh doanh B2B",
    "pos": "n.",
    "english": "Minimum Order Quantity (MOQ)",
    "vietnamese": "Số lượng đặt hàng tối thiểu (Hán-Việt: KHỞI ĐÍNH LƯỢNG (MOQ))",
    "radical": "走+己 (Khởi - bắt đầu) + 订 (Đặt) + 量 (Khối lượng)",
    "radicalAnalysis": "走+己 (Khởi - bắt đầu) + 订 (Đặt) + 量 (Khối lượng)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 走+己 (Khởi - bắt đầu) + 订 (Đặt) + 量 (Khối lượng). Mức số lượng tối thiểu để bắt đầu (起) dây chuyền nhà máy nhận đơn đặt hàng (订量).",
    "components": "Mức số lượng tối thiểu để bắt đầu (起) dây chuyền nhà máy nhận đơn đặt hàng (订量).",
    "context": "Thương lượng MOQ thử nghiệm là kỹ năng sống còn trong đàm phán nguồn hàng Trung Quốc.",
    "related": [
      "最小起订量",
      "试单",
      "小单快反"
    ],
    "mnemonic": "Số lượng (量) bắt đầu (起) đủ để xưởng mở đơn đặt sản xuất (订).",
    "examples": [
      {
        "zh": "虽然该工厂常规起订量为五百件，但首次试单可协商降至两百件。",
        "pinyin": "Suīrán gāi gōngchǎng chángguī qǐdìngliàng wéi wǔbǎi jiàn, dàn shǒucì shìdān kě xiéshāng jiàngzhì liǎngbǎi jiàn.",
        "en": "While their standard MOQ is 500 pieces, a trial order may negotiate down to 200.",
        "vi": "Dù MOQ chuẩn của xưởng là 500 cái, đơn thử đầu tiên vẫn có thể thương lượng xuống 200 cái."
      },
      {
        "zh": "珠三角众多中小代工厂凭借低起订量吸引了大量跨境电商品牌。",
        "pinyin": "Zhūsānjiǎo zhòngduō zhōngxiǎo dàigōngchǎng píngjiè dī qǐdìngliàng xīyǐn le dàliàng kuàjìng diànshāng pǐnpái.",
        "en": "Many Pearl River Delta OEM workshops attract cross-border brands with low MOQs.",
        "vi": "Nhiều xưởng gia công vừa và nhỏ Đồng bằng Châu Giang thu hút thương hiệu TMĐT nhờ MOQ linh hoạt."
      }
    ]
  },
  {
    "id": "yanhuo_qc",
    "hanzi": "验货",
    "traditional": "驗貨",
    "pinyin": "yànhuò",
    "hanViet": "NGHIỆM HÓA (KIỂM HÀNG)",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Logistics / QC",
    "pos": "v./n.",
    "english": "Pre-Shipment Quality Inspection",
    "vietnamese": "Kiểm tra chất lượng hàng trước khi xuất xưởng (Hán-Việt: NGHIỆM HÓA (KIỂM HÀNG))",
    "radical": "马+佥 (Nghiệm - thử ngựa kỹ) + 化+贝 (Hóa - hàng hóa)",
    "radicalAnalysis": "马+佥 (Nghiệm - thử ngựa kỹ) + 化+贝 (Hóa - hàng hóa)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 马+佥 (Nghiệm - thử ngựa kỹ) + 化+贝 (Hóa - hàng hóa). Kiểm chứng khắt khe (验) từng kiện hàng (货) trước khi thanh toán số dư (balance) và cho tàu chạy.",
    "components": "Kiểm chứng khắt khe (验) từng kiện hàng (货) trước khi thanh toán số dư (balance) và cho tàu chạy.",
    "context": "Thường áp dụng chuẩn AQL (Acceptable Quality Limit) bởi nhân sự QC hoặc bên thứ ba (SGS, Intertek).",
    "related": [
      "质量检验",
      "AQL标准",
      "尾款"
    ],
    "mnemonic": "Kiểm tra thực tế tỉ mỉ (验) lô hàng hóa (货) trước ngày xuất.",
    "examples": [
      {
        "zh": "必须在第三方检验机构验货合格后，我方才支付剩余70%尾款。",
        "pinyin": "Bìxū zài dìsānfāng jiǎnyàn jīgòu yànhuò hégé hòu, wǒfāng cái zhīfù shèngyú 70% wěikuǎn.",
        "en": "We release the remaining 70% balance only after passing third-party inspection.",
        "vi": "Bắt buộc sau khi tổ chức giám định kiểm hàng đạt chuẩn, chúng tôi mới thanh toán 70% tiền hàng còn lại."
      },
      {
        "zh": "旺季出货前严格验货能有效避免海外退换货的巨大损失。",
        "pinyin": "Wàngjì chūhuò qián yángé yànhuò néng yǒuxiào bìmiǎn hǎiwài tuìhuànhuò de jùdà sǔnshī.",
        "en": "Strict pre-shipment QC prevents costly overseas return losses in peak season.",
        "vi": "Kiểm hàng chặt trước xuất khẩu mùa cao điểm giúp tránh thiệt hại đổi trả ở nước ngoài."
      }
    ]
  },
  {
    "id": "yangpin_sample",
    "hanzi": "样品",
    "traditional": "樣品",
    "pinyin": "yàngpǐn",
    "hanViet": "DẠNG PHẨM (HÀNG MẪU)",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / B2B",
    "pos": "n.",
    "english": "Product Sample / Prototype",
    "vietnamese": "Mẫu hàng (Mẫu thử tiền sản xuất – Golden Sample) (Hán-Việt: DẠNG PHẨM (HÀNG MẪU))",
    "radical": "木+羊 (Dạng - khuôn gỗ mẫu) + 口+口+口 (Phẩm - xếp đặt hàng)",
    "radicalAnalysis": "木+羊 (Dạng - khuôn gỗ mẫu) + 口+口+口 (Phẩm - xếp đặt hàng)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 木+羊 (Dạng - khuôn gỗ mẫu) + 口+口+口 (Phẩm - xếp đặt hàng). Vật phẩm trưng bày làm khuôn mẫu chuẩn (样) trước khi sản xuất hàng loạt.",
    "components": "Vật phẩm trưng bày làm khuôn mẫu chuẩn (样) trước khi sản xuất hàng loạt.",
    "context": "Golden Sample ký niêm phong hai bên là căn cứ pháp lý đối chiếu khi nghiệm thu lô hàng hàng loạt.",
    "related": [
      "打样",
      "产前样",
      "封样"
    ],
    "mnemonic": "Món hàng (品) làm khuôn mẫu tiêu chuẩn (样) cho cả dây chuyền.",
    "examples": [
      {
        "zh": "请先寄送三件封存的产前确认样品（Golden Sample）供我司测试。",
        "pinyin": "Qǐng xiān jìsòng sān jiàn fēngcún de chǎnqián quèrèn yàngpǐn gōng wǒsī cèshì.",
        "en": "Please send three sealed pre-production confirmation samples for our testing first.",
        "vi": "Xin gửi trước ba sản phẩm mẫu niêm phong xác nhận tiền sản xuất để công ty thử nghiệm."
      },
      {
        "zh": "义乌小商品厂商通常在三天内即可完成定制包装的快速打样。",
        "pinyin": "Yìwū xiǎoshāngpǐn chǎngshāng tōngcháng zài sāntiān nèi jí kě wánchéng dìngzhì bāozhuāng de kuàisù dǎyàng.",
        "en": "Yiwu manufacturers routinely finish custom packaging samples within three days.",
        "vi": "Nhà cung cấp Nghĩa Ô thường hoàn tất làm mẫu bao bì tùy chỉnh trong vòng ba ngày."
      }
    ]
  },
  {
    "id": "jiaohuoqi_leadtime",
    "hanzi": "交货期",
    "traditional": "交貨期",
    "pinyin": "jiāohuòqī",
    "hanViet": "GIAO HÓA KỲ (LEAD TIME)",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Kinh doanh B2B",
    "pos": "n.",
    "english": "Delivery Lead Time / Shipment Schedule",
    "vietnamese": "Thời hạn giao hàng (Hán-Việt: GIAO HÓA KỲ (LEAD TIME))",
    "radical": "交 (Trao tay) + 货 (Hàng hóa) + 其+月 (Kỳ hạn ngày tháng)",
    "radicalAnalysis": "交 (Trao tay) + 货 (Hàng hóa) + 其+月 (Kỳ hạn ngày tháng)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 交 (Trao tay) + 货 (Hàng hóa) + 其+月 (Kỳ hạn ngày tháng). Khoảng thời gian ấn định (期) để trao bàn giao hàng hóa hoàn chỉnh (交货).",
    "components": "Khoảng thời gian ấn định (期) để trao bàn giao hàng hóa hoàn chỉnh (交货).",
    "context": "Cần ràng buộc rõ mốc giao hàng từ ngày nhận cọc trong hợp đồng và ngoại lệ mùa Tết Âm lịch (Nghỉ Xuân Vận).",
    "related": [
      "交期",
      "船期",
      "准时交付"
    ],
    "mnemonic": "Khoảng kỳ hạn thời gian (期) chuyển giao lô hàng (交货) đúng hẹn.",
    "examples": [
      {
        "zh": "从收到30%预付款之日起，批量生产交货期为二十五个工作日。",
        "pinyin": "Cóng shōudào 30% yùfùkuǎn zhī rì qǐ, pīliàng shēngchǎn jiāohuòqī wéi èrshíwǔ gè gōngzuòrì.",
        "en": "Mass production lead time is 25 working days from receipt of the 30% deposit.",
        "vi": "Tính từ ngày nhận 30% tạm ứng, thời hạn giao hàng sản xuất hàng loạt là 25 ngày làm việc."
      },
      {
        "zh": "临近春节工厂放假前，务必提前锁仓并核实最终交货期。",
        "pinyin": "Línjìn Chūnjié gōngchǎng fàngjià qián, wùbì tíqián suǒcāng bìng héshí zuìzhōng jiāohuòqī.",
        "en": "Before Spring Festival factory shutdowns, book space early and verify final lead times.",
        "vi": "Sát kỳ nghỉ Tết xưởng ngừng chạy, nhất thiết đặt chỗ tàu trước và chốt lại kỳ hạn giao hàng."
      }
    ]
  },
  {
    "id": "zengzhishui_vat",
    "hanzi": "增值税",
    "traditional": "增值稅",
    "pinyin": "zēngzhíshuì",
    "hanViet": "TĂNG TRỊ THUẾ (VAT)",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Tài chính / Hải quan",
    "pos": "n.",
    "english": "Value-Added Tax (VAT)",
    "vietnamese": "Thuế Giá trị Gia tăng (Hán-Việt: TĂNG TRỊ THUẾ (VAT))",
    "radical": "增 (Tăng thêm) + 亻+直 (Trị - giá trị) + 税 (Thuế)",
    "radicalAnalysis": "增 (Tăng thêm) + 亻+直 (Trị - giá trị) + 税 (Thuế)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 增 (Tăng thêm) + 亻+直 (Trị - giá trị) + 税 (Thuế). Khoản thuế tính trên phần giá trị gia tăng thêm (增值) ở từng khâu sản xuất – lưu thông.",
    "components": "Khoản thuế tính trên phần giá trị gia tăng thêm (增值) ở từng khâu sản xuất – lưu thông.",
    "context": "Hàng xuất khẩu chính ngạch tại Trung Quốc được hưởng cơ chế hoàn thuế GTGT xuất khẩu (出口退税) nên báo giá FOB chính ngạch thường tối ưu hơn tiểu ngạch.",
    "related": [
      "出口退税",
      "增值税发票",
      "税率"
    ],
    "mnemonic": "Thuế (税) đánh trên phần giá trị tăng thêm (增值).",
    "examples": [
      {
        "zh": "具备自营出口权的企业按规定凭正规发票申请出口增值税退税。",
        "pinyin": "Jùbèi zìyíng chūkǒuquán de qǐyè àn guīdìng píng zhèngguī fāpiào shēnqǐng chūkǒu zēngzhíshuì tuìshuì.",
        "en": "Authorized exporters claim export VAT rebates using valid invoices per regulations.",
        "vi": "Doanh nghiệp có quyền xuất khẩu nộp hồ sơ hóa đơn hợp lệ để hoàn thuế VAT xuất khẩu."
      },
      {
        "zh": "进口清关时，海关通常一并代征进口关税与进口环节增值税。",
        "pinyin": "Jìnkǒu qīngguān shí, hǎiguān tōngcháng yībìng dàizhēng jìnkǒu guānshuì yǔ jìnkǒu huánjié zēngzhíshuì.",
        "en": "During import clearance, customs typically collects both import tariffs and import VAT.",
        "vi": "Khi thông quan nhập khẩu, hải quan thu đồng thời thuế nhập khẩu và thuế GTGT hàng nhập."
      }
    ]
  },
  {
    "id": "dianhui_tt",
    "hanzi": "电汇",
    "traditional": "電匯",
    "pinyin": "diànhuì",
    "hanViet": "ĐIỆN HỐI (T/T)",
    "liushuType": "会意 · 会意",
    "liushuCategory": "会意 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Tài chính Ngoại thương",
    "pos": "n.",
    "english": "Telegraphic Transfer (T/T Wire Transfer)",
    "vietnamese": "Chuyển tiền bằng điện ngân hàng quốc tế (T/T) (Hán-Việt: ĐIỆN HỐI (T/T))",
    "radical": "电 (Tín hiệu điện tử) + 汇 (Chuyển gom tiền)",
    "radicalAnalysis": "电 (Tín hiệu điện tử) + 汇 (Chuyển gom tiền)",
    "etymologyAndRadicals": "会意 · 会意 — Bộ thủ: 电 (Tín hiệu điện tử) + 汇 (Chuyển gom tiền). Chuyển khoản ngân hàng qua hệ thống điện tín SWIFT (电) giữa tài khoản công ty xuất – nhập khẩu (汇).",
    "components": "Chuyển khoản ngân hàng qua hệ thống điện tín SWIFT (电) giữa tài khoản công ty xuất – nhập khẩu (汇).",
    "context": "Phổ biến với công thức 'T/T 30% deposit, 70% against copy of B/L' (trả 30% trước, 70% theo bản sao Vận đơn).",
    "related": [
      "SWIFT",
      "公对公转账",
      "前TT后TT"
    ],
    "mnemonic": "Chuyển dòng tiền (汇) tức thời qua hệ thống điện tử ngân hàng (电).",
    "examples": [
      {
        "zh": "老客户通常采用30%电汇预付、70%见提单副本付款的结算方式。",
        "pinyin": "Lǎokèhù tōngcháng cǎiyòng 30% diànhuì yùfù, 70% jiàn tídān fùběn fùkuǎn de jiésuàn fāngshì.",
        "en": "Long-term clients often settle 30% T/T in advance and 70% against B/L copy.",
        "vi": "Khách hàng lâu năm thường thanh toán 30% T/T đặt cọc, 70% trả khi có bản sao vận đơn."
      },
      {
        "zh": "跨境电汇时必须核对受益人企业英文户名及离岸账户信息。",
        "pinyin": "Kuàjìng diànhuì shí bìxū héduì shòuyìrén qǐyè Yīngwén hùmíng jí lí'àn zhànghù xìnxī.",
        "en": "For cross-border T/T wires, verify the beneficiary's corporate English name and bank details.",
        "vi": "Khi chuyển T/T xuyên biên giới cần đối chiếu kỹ tên tài khoản tiếng Anh và mã ngân hàng."
      }
    ]
  },
  {
    "id": "baoshuiqu_ftz",
    "hanzi": "保税区",
    "traditional": "保税区",
    "pinyin": "bǎoshuìqū",
    "hanViet": "BẢO THUẾ KHU (KHU NGOẠI QUAN)",
    "liushuType": "会意 · 象形",
    "liushuCategory": "会意 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Logistics / Hải quan",
    "pos": "n.",
    "english": "Bonded Zone / Free Trade Warehouse Area",
    "vietnamese": "Khu bảo thuế / Kho ngoại quan chịu giám sát hải quan (Hán-Việt: BẢO THUẾ KHU (KHU NGOẠI QUAN))",
    "radical": "保 (Bảo lưu giữ) + 税 (Thuế) + 区 (Khu vực vây kín)",
    "radicalAnalysis": "保 (Bảo lưu giữ) + 税 (Thuế) + 区 (Khu vực vây kín)",
    "etymologyAndRadicals": "会意 · 象形 — Bộ thủ: 保 (Bảo lưu giữ) + 税 (Thuế) + 区 (Khu vực vây kín). Khu vực đặc biệt (区) nơi hàng hóa được tạm lưu kho chưa cần nộp thuế nhập khẩu ngay (保税).",
    "components": "Khu vực đặc biệt (区) nơi hàng hóa được tạm lưu kho chưa cần nộp thuế nhập khẩu ngay (保税).",
    "context": "Trung tâm TMĐT xuyên biên giới mã 1210 tại Thâm Quyến Tiền Hải, Hàng Châu, Khâm Châu bảo thuế giúp tối ưu dòng tiền doanh nghiệp.",
    "related": [
      "保税仓",
      "1210模式",
      "自贸区"
    ],
    "mnemonic": "Khu vực kho bãi (区) được miễn tạm lưu chưa đánh thuế quan (保税).",
    "examples": [
      {
        "zh": "利用宁波或南宁综合保税区的保税仓储功能可灵活分拨货源。",
        "pinyin": "Lìyòng Níngbō huò Nánníng zōnghé bǎoshuìqū de bǎoshuì cāngchú gōngnéng kě línghuó fēnbō huòyuán.",
        "en": "Using Ningbo or Nanning comprehensive bonded warehouses enables flexible cargo distribution.",
        "vi": "Tận dụng kho ngoại quan tại Khu bảo thuế tổng hợp Ninh Ba hay Nam Ninh giúp điều phối hàng linh hoạt."
      },
      {
        "zh": "跨境电商保税区备货模式大幅缩短了消费者收货时间。",
        "pinyin": "Kuàjìng diànshāng bǎoshuìqū bèihuò móshì dàfú suōduǎn le xiāofèizhě shōuhuò shíjiān.",
        "en": "Bonded-zone pre-stocking cuts cross-border consumer delivery times significantly.",
        "vi": "Mô hình trữ hàng sẵn tại Khu bảo thuế rút ngắn mạnh thời gian giao hàng tới người mua."
      }
    ]
  },
  {
    "id": "jizhuangxiang_container",
    "hanzi": "集装箱",
    "traditional": "集装箱",
    "pinyin": "jízhuāngxiāng",
    "hanViet": "TẬP TRANG TƯƠNG (CONTAINER)",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Logistics",
    "pos": "n.",
    "english": "Shipping Container (TEU / FEU)",
    "vietnamese": "Công-ten-nơ vận chuyển hàng hóa chuẩn hóa (Hán-Việt: TẬP TRANG TƯƠNG (CONTAINER))",
    "radical": "集 (Chim tụ về cây -> Gom tập trung) + 装 (Đóng xếp) + 竹+相 (Tương - thùng hộp)",
    "radicalAnalysis": "集 (Chim tụ về cây -> Gom tập trung) + 装 (Đóng xếp) + 竹+相 (Tương - thùng hộp)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 集 (Chim tụ về cây -> Gom tập trung) + 装 (Đóng xếp) + 竹+相 (Tương - thùng hộp). Thùng thép kích thước chuẩn quốc tế (箱) tập hợp đóng gói hàng hóa (集装) chạy đa phương thức tàu–xe–ray.",
    "components": "Thùng thép kích thước chuẩn quốc tế (箱) tập hợp đóng gói hàng hóa (集装) chạy đa phương thức tàu–xe–ray.",
    "context": "Tiêu chuẩn hóa thế giới từ 20ft (1 TEU) và 40ft HQ giúp bốc xếp tự động tại Cảng Dương Sơn và Hải Phòng.",
    "related": [
      "整柜FCL",
      "拼箱LCL",
      "TEU"
    ],
    "mnemonic": "Chiếc thùng lớn chuẩn hóa (箱) tập hợp xếp kín hàng hóa (集装) vượt đại dương.",
    "examples": [
      {
        "zh": "一个40英尺高柜集装箱大约可装载六十八立方米轻工产品。",
        "pinyin": "Yī gè 40 yīngchǐ gāoguì jízhuāngxiāng dàyuē kě zhuāngzài liùshíbā lìfāngmǐ qīnggōng chǎnpǐn.",
        "en": "A 40ft high-cube container holds roughly 68 cubic meters of light industrial goods.",
        "vi": "Một container cao 40 feet chở được khoảng 68 mét khối hàng công nghiệp nhẹ."
      },
      {
        "zh": "中越直达海运冷链集装箱保障了广西与东盟生鲜水果的新鲜度。",
        "pinyin": "Zhōng-Yuè zhídá hǎiyùn lěngliàn jízhuāngxiāng bǎozhàng le Guǎngxī yǔ Dōngméng shēngxiān shuǐguǒ de xīnxiāndù.",
        "en": "Direct Sino-Vietnamese reefer containers safeguard freshness of fresh tropical fruits.",
        "vi": "Container lạnh đường biển trực tiếp Việt – Trung giữ nguyên độ tươi trái cây nhiệt đới."
      }
    ]
  },
  {
    "id": "kouan_port",
    "hanzi": "口岸",
    "traditional": "口岸",
    "pinyin": "kǒu'àn",
    "hanViet": "KHẨU NGẠN (CỬA KHẨU)",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Logistics / Biên mậu",
    "pos": "n.",
    "english": "Port of Entry / Border Gate",
    "vietnamese": "Cửa khẩu quốc tế (đường bộ, đường thủy, hàng không) (Hán-Việt: KHẨU NGẠN (CỬA KHẨU))",
    "radical": "口 (Cửa mở ra vào) + 岸 (Bờ bến)",
    "radicalAnalysis": "口 (Cửa mở ra vào) + 岸 (Bờ bến)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 口 (Cửa mở ra vào) + 岸 (Bờ bến). Cánh cửa thông thương chính thức (口) đặt tại bờ biển hoặc biên giới (岸) thực hiện kiểm dịch và hải quan.",
    "components": "Cánh cửa thông thương chính thức (口) đặt tại bờ biển hoặc biên giới (岸) thực hiện kiểm dịch và hải quan.",
    "context": "Các cửa khẩu trọng điểm Việt–Trung: Hữu Nghị Quan (Bằng Tường–Lạng Sơn), Đông Hưng–Móng Cái, Hà Khẩu–Lào Cai.",
    "related": [
      "智慧口岸",
      "友谊关",
      "边贸"
    ],
    "mnemonic": "Cửa ngõ kiểm soát xuất nhập (口) ngay bên bờ bến biên cương (岸).",
    "examples": [
      {
        "zh": "广西凭祥友谊关口岸是中越陆路水果与电子元器件贸易最繁忙的通道之一。",
        "pinyin": "Guǎngxī Píngxiáng Yǒuyìguān kǒu'àn shì Zhōng-Yuè lùlù shuǐguǒ yǔ diànzǐ yuánqìjiàn màoyì zuì fánmáng de tōngdào zhī yī.",
        "en": "Pingxiang's Youyiguan Gate is one of the busiest overland corridors for Sino-Vietnamese trade.",
        "vi": "Cửa khẩu Hữu Nghị Quan (Bằng Tường, Quảng Tây) là tuyến bộ nhộn nhịp nhất cho nông sản & linh kiện Việt–Trung."
      },
      {
        "zh": "中越智慧口岸建成后将实现24小时无人驾驶集卡自动通关。",
        "pinyin": "Zhōng-Yuè zhìhuì kǒu'àn jiànchéng hòu jiāng shíxiàn 24 xiǎoshí wúrén jiàshǐ jíkǎ zìdòng tōngguān.",
        "en": "Once operational, smart border gates will enable 24-hour autonomous truck clearance.",
        "vi": "Cửa khẩu thông minh Việt – Trung đi vào vận hành sẽ giúp xe tự hành thông quan tự động 24/7."
      }
    ]
  },
  {
    "id": "shuniu_hub",
    "hanzi": "枢纽",
    "traditional": "枢纽",
    "pinyin": "shūniǔ",
    "hanViet": "XU NỮU (TRỤC ĐẦU MỐI)",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 6 / Địa kinh tế",
    "pos": "n.",
    "english": "Strategic Hub / Nexus",
    "vietnamese": "Đầu mối trung tâm kết nối mạng lưới (Hán-Việt: XU NỮU (TRỤC ĐẦU MỐI))",
    "radical": "木+区 (Khu - bản lề cửa) + 纟+丑 (Nữu - nút thắt dây)",
    "radicalAnalysis": "木+区 (Khu - bản lề cửa) + 纟+丑 (Nữu - nút thắt dây)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 木+区 (Khu - bản lề cửa) + 纟+丑 (Nữu - nút thắt dây). Bản lề quay cánh cửa (枢) kết hợp nút thắt giữ nhiều dây dẫn (纽) tạo trung tâm điều phối.",
    "components": "Bản lề quay cánh cửa (枢) kết hợp nút thắt giữ nhiều dây dẫn (纽) tạo trung tâm điều phối.",
    "context": "Vũ Hán ('Cửu tỉnh thông cù'), Trịnh Châu (mạng cao tốc chữ Mễ), Nam Ninh (đầu mối ASEAN) đều là các Khu Hữu quốc gia.",
    "related": [
      "交通枢纽",
      "供应链枢纽",
      "门户"
    ],
    "mnemonic": "Vừa là bản lề xoay chuyển (枢) vừa là nút thắt quy tụ trăm ngả (纽).",
    "examples": [
      {
        "zh": "重庆正加快建设西部陆海新通道的国际物流枢纽。",
        "pinyin": "Chóngqìng zhèng jiākuài jiànshè Xībù Lùhǎi Xīn Tōngdào de guójì wùliú shūniǔ.",
        "en": "Chongqing is accelerating its role as an international hub on the New Western Corridor.",
        "vi": "Trùng Khánh đang đẩy mạnh xây dựng đầu mối logistics quốc tế Hành lang Lục–Hải Mới."
      },
      {
        "zh": "广西北部湾港已成为连接中国西南腹地与越南北部湾沿岸的物流枢纽。",
        "pinyin": "Guǎngxī Běibùwāngǎng yǐ chéngwéi liánjiē Zhōngguó xīnán fùdì yǔ Yuènán Běibùwān yán'àn de wùliú shūniǔ.",
        "en": "Guangxi's Beibu Gulf Port links Southwest China's hinterland with Vietnam's northern coast.",
        "vi": "Cảng Vịnh Bắc Bộ Quảng Tây đã trở thành đầu mối kết nối Tây Nam Trung Quốc với duyên hải Bắc Bộ Việt Nam."
      }
    ]
  },
  {
    "id": "yanfa_rd",
    "hanzi": "研发",
    "traditional": "研發",
    "pinyin": "yánfā",
    "hanViet": "NGHIÊN PHÁT (R&D)",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 5-6 / Công nghệ",
    "pos": "v./n.",
    "english": "Research and Development (R&D)",
    "vietnamese": "Nghiên cứu và Phát triển sản phẩm mới (Hán-Việt: NGHIÊN PHÁT (R&D))",
    "radical": "石+幵 (Nghiên - mài mịn trên đá) + 发 (Phát ra khởi tạo)",
    "radicalAnalysis": "石+幵 (Nghiên - mài mịn trên đá) + 发 (Phát ra khởi tạo)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 石+幵 (Nghiên - mài mịn trên đá) + 发 (Phát ra khởi tạo). Mài giũa nghiên cứu tỉ mỉ (研) để phát minh sáng chế ra công nghệ mới (发).",
    "components": "Mài giũa nghiên cứu tỉ mỉ (研) để phát minh sáng chế ra công nghệ mới (发).",
    "context": "Thâm Quyến (Nam Sơn) đầu tư >5,8% GDP vào R&D, trụ sở Huawei, BYD, Tencent, DJI dẫn dắt đổi mới phần cứng toàn cầu.",
    "related": [
      "研发投入",
      "专利",
      "核心技术"
    ],
    "mnemonic": "Mài giũa tinh xảo (研) để phát khởi tung ra công nghệ mới (发).",
    "examples": [
      {
        "zh": "高比例的研发投入令深圳在新能源与无人机领域保持领先优势。",
        "pinyin": "Gāo bǐlì de yánfā tóurù lìng Shēnzhèn zài xīn néngyuán yǔ wúrénjī lǐngyù bǎochí lǐngxiān yōushì.",
        "en": "High R&D investment keeps Shenzhen leading in new energy and drones.",
        "vi": "Tỷ lệ đầu tư R&D cao giúp Thâm Quyến dẫn đầu về năng lượng mới và drone."
      },
      {
        "zh": "许多ODM工厂现已具备独立外观设计与结构研发能力。",
        "pinyin": "Xǔduō ODM gōngchǎng xiàn yǐ jùbèi dúlì wàiguān shèjì yǔ jiégòu yánfā nénglì.",
        "en": "Many ODM factories now possess independent industrial design and structural R&D.",
        "vi": "Nhiều nhà máy ODM hiện nay đã có năng lực tự thiết kế kiểu dáng và R&D kết cấu độc lập."
      }
    ]
  },
  {
    "id": "xinnengyuan_ev",
    "hanzi": "新能源",
    "traditional": "新能源",
    "pinyin": "xīn néngyuán",
    "hanViet": "TÂN NĂNG NGUYÊN (NĂNG LƯỢNG MỚI)",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 5-6 / Công nghiệp",
    "pos": "n.",
    "english": "New Energy (EVs, Batteries, Solar, Wind)",
    "vietnamese": "Năng lượng mới (Xe điện, Pin LFP, Điện mặt trời/gió) (Hán-Việt: TÂN NĂNG NGUYÊN (NĂNG LƯỢNG MỚI))",
    "radical": "新 (Mới) + 能 (Gấu -> Năng lực) + 氵+原 (Nguyên - nguồn suối)",
    "radicalAnalysis": "新 (Mới) + 能 (Gấu -> Năng lực) + 氵+原 (Nguyên - nguồn suối)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 新 (Mới) + 能 (Gấu -> Năng lực) + 氵+原 (Nguyên - nguồn suối). Nguồn năng lượng sạch tái tạo thay thế nhiên liệu hóa thạch ('Tân tam dạng': Xe điện, Pin lithium, Quang điện).",
    "components": "Nguồn năng lượng sạch tái tạo thay thế nhiên liệu hóa thạch ('Tân tam dạng': Xe điện, Pin lithium, Quang điện).",
    "context": "Chuỗi cung ứng số 1 thế giới quy tụ tại Ninh Đức (CATL), Tây An/Thâm Quyến (BYD), Hợp Phì và Nội Mông.",
    "related": [
      "新能源汽车",
      "储能",
      "宁德时代"
    ],
    "mnemonic": "Khởi nguồn (源) năng lượng (能) sạch hoàn toàn mới mẻ (新).",
    "examples": [
      {
        "zh": "新能源汽车、锂电池与光伏产品成为中国外贸出口“新三样”。",
        "pinyin": "Xīn néngyuán qìchē, lǐdiànchí yǔ guāngfú chǎnpǐn chéngwéi Zhōngguó wàimào chūkǒu 'xīn sānyàng'.",
        "en": "EVs, lithium batteries, and solar panels have become China's 'new three' exports.",
        "vi": "Xe điện năng lượng mới, pin lithium và điện mặt trời trở thành 'ba mặt hàng mới' xuất khẩu chủ lực."
      },
      {
        "zh": "东南亚市场对高性价比新能源物流车的需求正迅速增长。",
        "pinyin": "Dōngnányà shìchǎng duì gāo xìngjiàbǐ xīn néngyuán wùliúchē de xūqiú zhèng xùnsù zēngzhǎng.",
        "en": "Southeast Asian demand for cost-effective EV logistics vans is growing rapidly.",
        "vi": "Thị trường Đông Nam Á đang tăng nhu cầu xe tải logistics năng lượng mới hiệu suất cao."
      }
    ]
  },
  {
    "id": "bandaoti_semi",
    "hanzi": "半导体",
    "traditional": "半導體",
    "pinyin": "bàndǎotǐ",
    "hanViet": "BÁN ĐẠO THỂ (BÁN DẪN)",
    "liushuType": "指事 · 会意",
    "liushuCategory": "指事 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Công nghệ Cao",
    "pos": "n.",
    "english": "Semiconductor",
    "vietnamese": "Chất bán dẫn / Vi mạch chip (Hán-Việt: BÁN ĐẠO THỂ (BÁN DẪN))",
    "radical": "半 (Chia đôi một nửa) + 导 (Dẫn truyền) + 体 (Thực thể)",
    "radicalAnalysis": "半 (Chia đôi một nửa) + 导 (Dẫn truyền) + 体 (Thực thể)",
    "etymologyAndRadicals": "指事 · 会意 — Bộ thủ: 半 (Chia đôi một nửa) + 导 (Dẫn truyền) + 体 (Thực thể). Vật chất (体) có khả năng dẫn điện (导) một nửa nằm giữa kim loại và chất cách điện (半).",
    "components": "Vật chất (体) có khả năng dẫn điện (导) một nửa nằm giữa kim loại và chất cách điện (半).",
    "context": "Chuỗi đúc chip toàn cầu kết nối chặt chẽ giữa Tân Trúc (Đài Loan – TSMC), Thượng Hải (Trung Tâm IC), Thâm Quyến và Việt Nam.",
    "related": [
      "芯片",
      "集成电路",
      "晶圆"
    ],
    "mnemonic": "Vật thể (体) dẫn truyền dòng điện (导) có kiểm soát bán phần (半).",
    "examples": [
      {
        "zh": "半导体晶圆制造工艺正朝着三纳米乃至更先进节点演进。",
        "pinyin": "Bàndǎotǐ jīngyuán zhìzào gōngyì zhèng cháozhe sān nàmǐ nǎizhì gèng xiānjìn jiédiǎn yǎnjìn.",
        "en": "Semiconductor wafer fabrication advances toward 3nm and even smaller process nodes.",
        "vi": "Công nghệ chế tạo wafer bán dẫn đang tiến tới tiến trình 3 nanomet và tiên tiến hơn."
      },
      {
        "zh": "中越电子组装园区在半导体封装测试环节的协同效应日益凸显。",
        "pinyin": "Zhōng-Yuè diànzǐ zǔzhuāng yuánqū zài bàndǎotǐ fēngzhuāng cèshì huánjié de xiétóng xiàoyìng rìyì tūxiǎn.",
        "en": "Electronics parks show growing synergy in semiconductor packaging and testing.",
        "vi": "Các khu điện tử Việt – Trung ngày càng bộc lộ hiệp lực ở khâu đóng gói và kiểm thử bán dẫn."
      }
    ]
  },
  {
    "id": "rengongzhineng_ai",
    "hanzi": "人工智能",
    "traditional": "人工智能",
    "pinyin": "réngōng zhìnéng",
    "hanViet": "NHÂN CÔNG TRÍ NĂNG (AI)",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 5-6 / Công nghệ",
    "pos": "n.",
    "english": "Artificial Intelligence (AI)",
    "vietnamese": "Trí tuệ nhân tạo (Hán-Việt: NHÂN CÔNG TRÍ NĂNG (AI))",
    "radical": "人+工 (Nhân tạo) + 智+能 (Năng lực trí tuệ)",
    "radicalAnalysis": "人+工 (Nhân tạo) + 智+能 (Năng lực trí tuệ)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 人+工 (Nhân tạo) + 智+能 (Năng lực trí tuệ). Khả năng tư duy phán đoán (智能) do bàn tay công cụ con người chế tạo nên (人工).",
    "components": "Khả năng tư duy phán đoán (智能) do bàn tay công cụ con người chế tạo nên (人工).",
    "context": "Trung Quan Thôn (Bắc Kinh), Hàng Châu và Thâm Quyến là ba cực AI & robot lớn bậc nhất châu Á.",
    "related": [
      "大模型",
      "算法",
      "数字经济"
    ],
    "mnemonic": "Năng lực trí tuệ (智能) được kiến tạo bởi trí óc kỹ thuật con người (人工).",
    "examples": [
      {
        "zh": "人工智能大模型正广泛赋能跨境电商的多语种客服与选品分析。",
        "pinyin": "Réngōng zhìnéng dàmóxíng zhèng guǎngfàn fùnéng kuàjìng diànshāng de duōyǔzhǒng kèfú yǔ xuǎnpǐn fēnxī.",
        "en": "Large AI models empower cross-border e-commerce with multilingual support and product selection.",
        "vi": "Mô hình AI lớn đang hỗ trợ đắc lực TMĐT xuyên biên giới về chăm sóc khách đa ngôn ngữ và chọn sản phẩm."
      },
      {
        "zh": "全球科研机构都在探讨人工智能发展与伦理安全治理的平衡。",
        "pinyin": "Quánqiú kēyán jīgòu dōu zài tàntǎo réngōng zhìnéng fāzhǎn yǔ lúnlǐ ānquán zhìlǐ de pínghéng.",
        "en": "Research institutes worldwide examine balancing AI advancement with ethical safety governance.",
        "vi": "Giới khoa học toàn cầu đều thảo luận cân bằng giữa phát triển AI và quản trị an toàn đạo đức."
      }
    ]
  },
  {
    "id": "shuangshiyi_double11",
    "hanzi": "双十一",
    "traditional": "雙十一",
    "pinyin": "Shuāng Shíyī",
    "hanViet": "SONG THẬP NHẤT (11/11)",
    "liushuType": "会意 · 指事",
    "liushuCategory": "会意 · 指事",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Kinh doanh / Văn hóa Số",
    "pos": "n.",
    "english": "Double Eleven (11/11 E-Commerce Festival)",
    "vietnamese": "Lễ hội Mua sắm Song Thập Nhất (11 tháng 11) (Hán-Việt: SONG THẬP NHẤT (11/11))",
    "radical": "双 (Đôi hai chim trên tay) + 十一 (Ngày 11 tháng 11)",
    "radicalAnalysis": "双 (Đôi hai chim trên tay) + 十一 (Ngày 11 tháng 11)",
    "etymologyAndRadicals": "会意 · 指事 — Bộ thủ: 双 (Đôi hai chim trên tay) + 十一 (Ngày 11 tháng 11). Từ 'Ngày Độc Thân' của sinh viên Nam Kinh thập niên 1990 được Alibaba nâng tầm thành lễ hội TMĐT lớn nhất hành tinh năm 2009.",
    "components": "Từ 'Ngày Độc Thân' của sinh viên Nam Kinh thập niên 1990 được Alibaba nâng tầm thành lễ hội TMĐT lớn nhất hành tinh năm 2009.",
    "context": "Thước đo sức mua nội địa Trung Quốc (kết hợp cùng lễ hội 618 của JD) và nhịp độ vận hành kho thông minh Cainiao.",
    "related": [
      "光棍节",
      "淘宝天猫",
      "消费狂欢"
    ],
    "mnemonic": "Cặp đôi số 11 (双十一) biến thành ngày hội mua sắm số kỷ lục.",
    "examples": [
      {
        "zh": "每逢双十一大促，快递物流行业都要应对百亿级包裹的峰值考验。",
        "pinyin": "Měiféng Shuāng Shíyī dàcù, kuàidì wùliú hángyè dōu yào yìngduì bǎiyìjí bāoguǒ de fēngzhí kǎoyàn.",
        "en": "Every Double 11 promotion tests express logistics with multi-billion parcel peaks.",
        "vi": "Mỗi đợt đại khuyến mãi 11/11, ngành chuyển phát nhanh đối mặt cao điểm hàng chục tỷ bưu kiện."
      },
      {
        "zh": "越货通过跨境天猫国际在双十一期间进入中国家庭购物车。",
        "pinyin": "Yuèhuò tōngguò kuàjìng Tiānmāo Guójì zài Shuāng Shíyī qījiān jìnrù Zhōngguó jiātíng gòuwùchē.",
        "en": "Vietnamese products reach Chinese family carts via Tmall Global during Double 11.",
        "vi": "Hàng Việt qua Tmall Global tiến vào giỏ hàng gia đình Trung Quốc mỗi dịp 11/11."
      }
    ]
  },
  {
    "id": "zhibodaihuo_live",
    "hanzi": "直播带货",
    "traditional": "直播帶貨",
    "pinyin": "zhíbò dài huò",
    "hanViet": "TRỰC BÁO ĐỚI HÓA (LIVESTREAM BÁN HÀNG)",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "TMĐT Đương đại",
    "pos": "v./n.",
    "english": "Livestream E-Commerce",
    "vietnamese": "Bán hàng phát sóng trực tiếp (Douyin/Kuaishou) (Hán-Việt: TRỰC BÁO ĐỚI HÓA (LIVESTREAM BÁN HÀNG))",
    "radical": "直+播 (Phát sóng thẳng thời gian thực) + 带 (Dẫn dắt) + 货 (Hàng hóa)",
    "radicalAnalysis": "直+播 (Phát sóng thẳng thời gian thực) + 带 (Dẫn dắt) + 货 (Hàng hóa)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 直+播 (Phát sóng thẳng thời gian thực) + 带 (Dẫn dắt) + 货 (Hàng hóa). Phát sóng trực tiếp tương tác thời gian thực (直播) dẫn dắt chuyển đổi đơn hàng sản phẩm (带货).",
    "components": "Phát sóng trực tiếp tương tác thời gian thực (直播) dẫn dắt chuyển đổi đơn hàng sản phẩm (带货).",
    "context": "Hệ sinh thái kết hợp giải trí – KOL – xưởng sản xuất C2M giúp nông sản Vân Nam/Quảng Tây và mỹ phẩm bán hàng triệu đơn/đêm.",
    "related": [
      "抖音电商",
      "网红KOL",
      "供应链联动"
    ],
    "mnemonic": "Phát trực tiếp không qua cắt dựng (直播) kéo đơn hàng đi thẳng tới tay người mua (带货).",
    "examples": [
      {
        "zh": "直播带货缩短了农村果园直达一线城市餐桌的流通链条。",
        "pinyin": "Zhíbò dàihuò suōduǎn le nóngcūn guǒyuán zhídá yīxiàn chéngshì cānzhuō de liútōng liàntiáo.",
        "en": "Livestream commerce shortens the path from rural orchards directly to city dining tables.",
        "vi": "Livestream bán hàng rút ngắn chuỗi lưu thông từ vườn quả nông thôn tới bàn ăn đô thị."
      },
      {
        "zh": "品牌在拓展直播带货时更需警惕低价内卷对长期口碑的透支。",
        "pinyin": "Pǐnpái zài tuòzhǎn zhíbò dàihuò shí gèng xū jǐngtì dījià nèijuǎn duì chángqī kǒubēi de tòuzhī.",
        "en": "Brands expanding into livestream sales must guard against discount-war erosion of brand equity.",
        "vi": "Thương hiệu mở rộng livestream cần cảnh giác cạnh tranh giá rẻ bào mòn uy tín lâu dài."
      }
    ]
  },
  {
    "id": "pinpai_brand",
    "hanzi": "品牌",
    "traditional": "品牌",
    "pinyin": "pǐnpái",
    "hanViet": "PHẨM BÀI (THƯƠNG HIỆU)",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Kinh doanh",
    "pos": "n.",
    "english": "Brand Identity / Trademark",
    "vietnamese": "Thương hiệu, uy tín nhãn hàng (Hán-Việt: PHẨM BÀI (THƯƠNG HIỆU))",
    "radical": "品 (Ba cái miệng cùng đánh giá) + 片+卑 (Bài - tấm biển bảng hiệu)",
    "radicalAnalysis": "品 (Ba cái miệng cùng đánh giá) + 片+卑 (Bài - tấm biển bảng hiệu)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 品 (Ba cái miệng cùng đánh giá) + 片+卑 (Bài - tấm biển bảng hiệu). Tấm biển tên bảng hiệu (牌) được số đông người tiêu dùng (品) công nhận chất lượng.",
    "components": "Tấm biển tên bảng hiệu (牌) được số đông người tiêu dùng (品) công nhận chất lượng.",
    "context": "Xu hướng 'Thương hiệu vươn biển' (品牌出海) của doanh nghiệp Trung Quốc vượt khỏi gia công giá rẻ (Mixue, Xiaomi, BYD, Anker).",
    "related": [
      "品牌出海",
      "商标注册",
      "口碑"
    ],
    "mnemonic": "Tấm bảng hiệu danh tiếng (牌) được ba miệng thiên hạ thử và khen (品).",
    "examples": [
      {
        "zh": "从单纯代工转型为自主品牌，是制造业提升利润率的关键一跃。",
        "pinyin": "Cóng dānchún dàigōng zhuǎnxíng wéi zìzhǔ pǐnpái, shì zhìzàoyè tíshēng lìrùnlǜ de guānjiàn yīyuè.",
        "en": "Transitioning from pure OEM to independent branding is the key leap for higher margins.",
        "vi": "Chuyển dịch từ gia công thuần túy sang tự chủ thương hiệu là bước nhảy tăng biên lợi nhuận."
      },
      {
        "zh": "进入中国市场前，提前在国家知识产权局核准品牌商标极为必要。",
        "pinyin": "Jìnrù Zhōngguó shìchǎng qián, tíqián zài Guójiā Zhīshi Chǎnquánjú hézhǔn pǐnpái shāngbiāo jíwéi bìyào.",
        "en": "Registering trademarks with CNIPA ahead of entering the Chinese market is essential.",
        "vi": "Trước khi vào thị trường Trung Quốc, đăng ký trước nhãn hiệu thương hiệu là cực kỳ cần thiết."
      }
    ]
  },
  {
    "id": "yingyezhizhao_lic",
    "hanzi": "营业执照",
    "traditional": "營業執照",
    "pinyin": "yíngyè zhízhào",
    "hanViet": "DOANH NGHIỆP CHẤP CHIẾU",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Pháp lý Doanh nghiệp",
    "pos": "n.",
    "english": "Business License (Unified Social Credit Code)",
    "vietnamese": "Giấy phép Đăng ký Kinh doanh Trung Quốc (Hán-Việt: DOANH NGHIỆP CHẤP CHIẾU)",
    "radical": "营业 (Kinh doanh hoạt động) + 执 (Nắm giữ) + 照 (Chứng từ soi rõ)",
    "radicalAnalysis": "营业 (Kinh doanh hoạt động) + 执 (Nắm giữ) + 照 (Chứng từ soi rõ)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 营业 (Kinh doanh hoạt động) + 执 (Nắm giữ) + 照 (Chứng từ soi rõ). Văn bản pháp quy thống nhất 18 ký tự Mã tín dụng xã hội xác nhận tư cách pháp nhân hoạt động.",
    "components": "Văn bản pháp quy thống nhất 18 ký tự Mã tín dụng xã hội xác nhận tư cách pháp nhân hoạt động.",
    "context": "Bước kiểm tra bắt buộc số 1 (thẩm định trên hệ thống quốc gia NECIPS) trước khi đặt cọc cho bất kỳ xưởng/đối tác Trung Quốc nào.",
    "related": [
      "统一社会信用代码",
      "企查查",
      "法人代表"
    ],
    "mnemonic": "Chứng từ pháp lý sáng rõ (照) mà doanh nghiệp nắm giữ (执) để kinh doanh (营业).",
    "examples": [
      {
        "zh": "汇款前务必通过国家企业信用信息公示系统查验对方营业执照状态。",
        "pinyin": "Huìkuǎn qián wùbì tōngguò Guójiā Qǐyè Xìnyòng Xìnxī Gōngshì Xìtǒng cháyàn duìfāng yíngyè zhízhào zhuàngtài.",
        "en": "Before wiring funds, verify the counterparty's business license via NECIPS.",
        "vi": "Trước khi chuyển tiền nhất thiết tra cứu tình trạng giấy phép kinh doanh trên hệ thống NECIPS."
      },
      {
        "zh": "营业执照上的“经营范围”一栏清晰列明了企业获准从事的进出口业务。",
        "pinyin": "Yíngyè zhízhào shàng de 'jīngyíng fànwéi' yī lán qīngxī lièmíng le qǐyè huòzhǔn cóngshì de jìnchūkǒu yèwù.",
        "en": "The 'business scope' section clearly lists whether a firm is licensed for import-export.",
        "vi": "Mục phạm vi kinh doanh trên giấy phép liệt kê rõ doanh nghiệp có quyền xuất nhập khẩu không."
      }
    ]
  },
  {
    "id": "gongzhang_chop",
    "hanzi": "公章",
    "traditional": "公章",
    "pinyin": "gōngzhāng",
    "hanViet": "CÔNG CHƯƠNG (CON DẤU PHÁP NHÂN)",
    "liushuType": "会意 · 会意",
    "liushuCategory": "会意 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Pháp lý Doanh nghiệp",
    "pos": "n.",
    "english": "Official Company Chop / Corporate Seal",
    "vietnamese": "Con dấu tròn chính thức của pháp nhân công ty Trung Quốc (Hán-Việt: CÔNG CHƯƠNG (CON DẤU PHÁP NHÂN))",
    "radical": "公 (Chung công khai) + 章 (Ấn chương hiệu lực)",
    "radicalAnalysis": "公 (Chung công khai) + 章 (Ấn chương hiệu lực)",
    "etymologyAndRadicals": "会意 · 会意 — Bộ thủ: 公 (Chung công khai) + 章 (Ấn chương hiệu lực). Con dấu tròn màu đỏ có hình ngôi sao năm cánh ở giữa khắc tên tiếng Trung chính xác đã đăng ký công an.",
    "components": "Con dấu tròn màu đỏ có hình ngôi sao năm cánh ở giữa khắc tên tiếng Trung chính xác đã đăng ký công an.",
    "context": "Ở Trung Quốc, Công chương tròn thường có hiệu lực pháp lý cao hơn cả chữ ký tay cá nhân trên hợp đồng thương mại.",
    "related": [
      "合同章",
      "财务章",
      "公章真伪"
    ],
    "mnemonic": "Dấu hiệu pháp lý công cộng (公) đóng chốt văn bản (章) đại diện cho toàn bộ pháp nhân.",
    "examples": [
      {
        "zh": "中国商法实践中，合同上的官方公章往往比个人签字具有更直接的约束力。",
        "pinyin": "Zhōngguó shāngfǎ shíjiàn zhōng, hétong shàng de guānfāng gōngzhāng wǎngwǎng bǐ gèrén qiānzì jùyǒu gèng zhíjiē de yuēshùlì.",
        "en": "In Chinese commercial practice, an official company chop often carries stronger binding force than a signature.",
        "vi": "Trong thực tiễn luật thương mại Trung Quốc, con dấu công chương thường ràng buộc trực tiếp hơn chữ ký."
      },
      {
        "zh": "谨防对方在正式协议上仅加盖未经授权的“部门私章”而非公司公章。",
        "pinyin": "Jǐnfáng duìfāng zài zhèngshì xiéyì shàng jǐn jiāgài wèijīng shòuquán de 'bùmén sīzhāng' ér fēi gōngsī gōngzhāng.",
        "en": "Guard against partners stamping unauthorized department stamps instead of the official company chop.",
        "vi": "Cảnh giác trường hợp đối tác chỉ đóng dấu phòng ban không có thẩm quyền thay vì Công chương chính thức."
      }
    ]
  },
  {
    "id": "zhongcai_arbitration",
    "hanzi": "仲裁",
    "traditional": "仲裁",
    "pinyin": "zhòngcái",
    "hanViet": "TRỌNG TÀI",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Pháp lý Thương mại",
    "pos": "n./v.",
    "english": "Commercial Arbitration (CIETAC / VIAC)",
    "vietnamese": "Trọng tài thương mại giải quyết tranh chấp (Hán-Việt: TRỌNG TÀI)",
    "radical": "亻+中 (Trọng - người đứng giữa phân xử) + 戈+衣 (Tài - cắt chia phân định)",
    "radicalAnalysis": "亻+中 (Trọng - người đứng giữa phân xử) + 戈+衣 (Tài - cắt chia phân định)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 亻+中 (Trọng - người đứng giữa phân xử) + 戈+衣 (Tài - cắt chia phân định). Đưa tranh chấp cho hội đồng trung gian đứng giữa (仲) phân xử cắt phân định đúng sai (裁) thay vì kiện ra tòa án.",
    "components": "Đưa tranh chấp cho hội đồng trung gian đứng giữa (仲) phân xử cắt phân định đúng sai (裁) thay vì kiện ra tòa án.",
    "context": "Phán quyết của CIETAC (Trung Quốc) hoặc VIAC (Việt Nam) dễ công nhận thi hành chéo qua Công ước New York 1958.",
    "related": [
      "中国国际经济贸易仲裁委员会",
      "争端解决",
      "纽约公约"
    ],
    "mnemonic": "Người thứ ba đứng giữa (仲) cầm dao phân định công minh (裁) tranh chấp.",
    "examples": [
      {
        "zh": "涉外贸易合同中约定在香港或新加坡进行国际商事仲裁十分常见。",
        "pinyin": "Shèwài màoyì hétong zhōng yuēdìng zài Xiānggǎng huò Xīnjiāpō jìnxíng guójì shāngshì zhòngcái shífēn chángjiàn.",
        "en": "Cross-border contracts commonly designate Hong Kong or Singapore for international arbitration.",
        "vi": "Hợp đồng ngoại thương thường chọn Hồng Kông hoặc Singapore làm nơi trọng tài thương mại quốc tế."
      },
      {
        "zh": "根据1958年《纽约公约》，中越两国的生效商事仲裁裁决均可跨境申请承认与执行。",
        "pinyin": "Gēnjù 1958 nián 'Niǔyuē Gōngyuē', Zhōng-Yuè liǎngguó de shēngxiào shāngshì zhòngcái cáijué jūn kě kuàjìng shēnqǐng chéngrèn yǔ zhíxíng.",
        "en": "Under the 1958 New York Convention, arbitral awards are mutually enforceable across China and Vietnam.",
        "vi": "Theo Công ước New York 1958, phán quyết trọng tài thương mại có hiệu lực được công nhận thi hành chéo."
      }
    ]
  },
  {
    "id": "zimaoqu_ftz",
    "hanzi": "自贸区",
    "traditional": "自贸区",
    "pinyin": "zìmàoqū",
    "hanViet": "TỰ MẬU KHU (KHU THƯƠNG MẠI TỰ DO)",
    "liushuType": "会意 · 象形",
    "liushuCategory": "会意 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Kinh tế Quốc tế",
    "pos": "n.",
    "english": "Free Trade Zone / Free Trade Port",
    "vietnamese": "Khu thí điểm Thương mại Tự do (Thượng Hải, Hải Nam, Quảng Tây) (Hán-Việt: TỰ MẬU KHU (KHU THƯƠNG MẠI TỰ DO))",
    "radical": "自 (Tự do) + 贸 (Mậu dịch trao đổi) + 区 (Vùng khu vực)",
    "radicalAnalysis": "自 (Tự do) + 贸 (Mậu dịch trao đổi) + 区 (Vùng khu vực)",
    "etymologyAndRadicals": "会意 · 象形 — Bộ thủ: 自 (Tự do) + 贸 (Mậu dịch trao đổi) + 区 (Vùng khu vực). Khu vực chính sách đặc biệt tự do lưu thông vốn, hàng hóa và dịch vụ (như Cảng Tự do Hải Nam 2025).",
    "components": "Khu vực chính sách đặc biệt tự do lưu thông vốn, hàng hóa và dịch vụ (như Cảng Tự do Hải Nam 2025).",
    "context": "Khu Tự mậu Quảng Tây (Nam Ninh – Sùng Tả Hữu Nghị Quan – Khâm Châu) thiết kế chuyên biệt cho giao thương ASEAN – Việt Nam.",
    "related": [
      "海南自贸港",
      "广西自贸区",
      "制度型开放"
    ],
    "mnemonic": "Khu vực (区) mở cơ chế tự do (自) thúc đẩy mậu dịch (贸) xuyên biên giới.",
    "examples": [
      {
        "zh": "中国（广西）自由贸易试验区专门设立了面向东盟和越南的跨境产业链合作片区。",
        "pinyin": "Zhōngguó (Guǎngxī) Zìyóu Màoyì Shìyànqū zhuānmén shèlì le miànxiàng Dōngméng hé Yuènán de kuàjìng chǎnyèliàn hézuò piànqū.",
        "en": "The China (Guangxi) Pilot FTZ features zones tailored for ASEAN and Vietnam supply-chain cooperation.",
        "vi": "Khu thí điểm Tự do Thương mại Quảng Tây thiết kế phân khu riêng cho chuỗi cung ứng ASEAN – Việt Nam."
      },
      {
        "zh": "海南自贸港“零关税、低税率”政策正吸引大量跨国航运与贸易企业落户。",
        "pinyin": "Hǎinán Zìmàogǎng 'líng guānshuì, dī shuìlǜ' zhèngcè zhèng xīyǐn dàliàng kuàguó hángyùn yǔ màoyì qǐyè luòhù.",
        "en": "Hainan Free Trade Port's zero-tariff and low-tax policies attract multinational logistics firms.",
        "vi": "Chính sách '0% thuế quan, thuế suất thấp' của Cảng Tự do Hải Nam thu hút đông đảo doanh nghiệp logistics."
      }
    ]
  },
  {
    "id": "rcep_pact",
    "hanzi": "区域全面经济伙伴关系协定",
    "traditional": "區域全面經濟夥伴關係協定",
    "pinyin": "RCEP (Qūyù Quánmiàn Jīngjì Huǒbàn Guānxi Xiédìng)",
    "hanViet": "KHU VỰC TOÀN DIỆN KINH TẾ HỎA BẠN QUAN HỆ HIỆP ĐỊNH",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Kinh tế Quốc tế",
    "pos": "n.",
    "english": "RCEP (Regional Comprehensive Economic Partnership)",
    "vietnamese": "Hiệp định Đối tác Kinh tế Toàn diện Khu vực (15 quốc gia gồm Trung Quốc, ASEAN, Nhật, Hàn, Úc, New Zealand) (Hán-Việt: KHU VỰC TOÀN DIỆN KINH TẾ HỎA BẠN QUAN HỆ HIỆP ĐỊNH)",
    "radical": "协 (Nhiều lực cùng hợp) + 定 (Định ước)",
    "radicalAnalysis": "协 (Nhiều lực cùng hợp) + 定 (Định ước)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 协 (Nhiều lực cùng hợp) + 定 (Định ước). Khối thương mại tự do lớn nhất thế giới (~30% GDP toàn cầu), áp dụng quy tắc cộng gộp xuất xứ khu vực (Cumulative Rules of Origin).",
    "components": "Khối thương mại tự do lớn nhất thế giới (~30% GDP toàn cầu), áp dụng quy tắc cộng gộp xuất xứ khu vực (Cumulative Rules of Origin).",
    "context": "Giúp doanh nghiệp Việt Nam nhập nguyên liệu từ Trung Quốc/Hàn/Nhật gia công rồi xuất sang nước thành viên khác vẫn đủ chuẩn xuất xứ hưởng thuế ưu đãi!",
    "related": [
      "原产地累积规则",
      "ACFTA 3.0",
      "零关税"
    ],
    "mnemonic": "Bản hiệp định (协定) gắn kết đối tác (伙伴) toàn khu vực Châu Á – Thái Bình Dương.",
    "examples": [
      {
        "zh": "RCEP原产地累积规则极大促进了中国中间品与越南加工制造环节的融合。",
        "pinyin": "RCEP yuánchǎndì lěijī guīzé jídà cùjìn le Zhōngguó zhōngjiānpǐn yǔ Yuènán jiāgōng zhìzào huánjié de rónghé.",
        "en": "RCEP's cumulative rules of origin greatly foster integration of Chinese inputs and Vietnamese assembly.",
        "vi": "Quy tắc cộng gộp xuất xứ RCEP thúc đẩy mạnh kết nối linh kiện Trung Quốc với sản xuất tại Việt Nam."
      },
      {
        "zh": "熟悉RCEP与中国—东盟自贸区升级版关税清单是外贸企业降本增效的必修课。",
        "pinyin": "Shúxī RCEP yǔ Zhōngguó—Dōngméng Zìmàoqū shēngjíbǎn guānshuì qīngdān shì wàimào qǐyè jiàngběn zēngxiào de bìxiūkè.",
        "en": "Mastering RCEP and ACFTA upgrade tariff schedules is essential for trading firms to cut costs.",
        "vi": "Nắm vững biểu thuế RCEP và nâng cấp ACFTA là bài học bắt buộc giúp doanh nghiệp xuất nhập khẩu tối ưu chi phí."
      }
    ]
  },
  {
    "id": "huabei_north",
    "hanzi": "华北",
    "traditional": "華北",
    "pinyin": "Huáběi",
    "hanViet": "HOA BẮC",
    "liushuType": "象形 · 会意",
    "liushuCategory": "象形 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Địa lý Văn hóa",
    "pos": "n.",
    "english": "North China (Beijing-Tianjin-Hebei-Shanxi-Inner Mongolia)",
    "vietnamese": "Vùng Hoa Bắc (Cái nôi Yên–Triệu, Tam Tấn & Kinh thành) (Hán-Việt: HOA BẮC)",
    "radical": "艹+化 (Hoa - rực rỡ) + 北 (Hai người quay lưng hướng Bắc)",
    "radicalAnalysis": "艹+化 (Hoa - rực rỡ) + 北 (Hai người quay lưng hướng Bắc)",
    "etymologyAndRadicals": "象形 · 会意 — Bộ thủ: 艹+化 (Hoa - rực rỡ) + 北 (Hai người quay lưng hướng Bắc). Vùng đồng bằng Bắc Trung Hoa phía bắc Tần Lĩnh–Hoài Hà lấy Bắc Kinh, Thiên Tân, Hà Bắc, Sơn Tây làm trung tâm.",
    "components": "Vùng đồng bằng Bắc Trung Hoa phía bắc Tần Lĩnh–Hoài Hà lấy Bắc Kinh, Thiên Tân, Hà Bắc, Sơn Tây làm trung tâm.",
    "context": "Đặc trưng lúa mì (mì sợi, bánh bao), bốn mùa khô hanh mùa đông lạnh, ngôn ngữ Quan thoại Bắc Kinh.",
    "related": [
      "京津冀",
      "燕赵文化",
      "华北平原"
    ],
    "mnemonic": "Phần đất phương Bắc (北) rực rỡ hoa văn minh (华).",
    "examples": [
      {
        "zh": "华北平原四季分明，自古以来便是北方农业与政治军事重地。",
        "pinyin": "Huáběi Píngyuán sìjì fēnmíng, zìgǔ yǐlái biànshì běifāng nóngyè yǔ zhèngzhì jūnshì zhòngdì.",
        "en": "The North China Plain has four distinct seasons and has been a vital political-military heartland.",
        "vi": "Đồng bằng Hoa Bắc bốn mùa rõ rệt, từ xưa là trọng địa chính trị quân sự phương Bắc."
      },
      {
        "zh": "京津冀协同发展推动了华北地区产业分工与交通一体化。",
        "pinyin": "Jīng-Jīn-Jì xiétóng fāzhǎn tuīdòng le Huáběi dìqū chǎnyè fēngōng yǔ jiāotōng yītǐhuà.",
        "en": "Beijing-Tianjin-Hebei integration accelerates North China industrial and transit synergy.",
        "vi": "Phát triển liên kết Kinh–Tân–Ký thúc đẩy phân công ngành và hạ tầng thống nhất vùng Hoa Bắc."
      }
    ]
  },
  {
    "id": "jiangnan_southriver",
    "hanzi": "江南",
    "traditional": "江南",
    "pinyin": "Jiāngnán",
    "hanViet": "GIANG NAM",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Địa văn hóa",
    "pos": "n.",
    "english": "Jiangnan (South of the Lower Yangtze River)",
    "vietnamese": "Vùng Giang Nam (Tô–Hàng–Thượng Hải–Vô Tích–Nam Kinh) (Hán-Việt: GIANG NAM)",
    "radical": "氵+工 (Giang - chỉ riêng sông Trường Giang xưa) + 南 (Nam)",
    "radicalAnalysis": "氵+工 (Giang - chỉ riêng sông Trường Giang xưa) + 南 (Nam)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 氵+工 (Giang - chỉ riêng sông Trường Giang xưa) + 南 (Nam). Vùng châu thổ trù phú phía nam hạ lưu sông Trường Giang (南).",
    "components": "Vùng châu thổ trù phú phía nam hạ lưu sông Trường Giang (南).",
    "context": "Trung tâm kinh tế–tài năng khoa cử–lụa tơ–lâm viên và văn nhân họa suốt từ đời Đường–Tống tới ngày nay ('Thượng hữu thiên đàng, hạ hữu Tô Hàng').",
    "related": [
      "长三角",
      "吴越文化",
      "水乡古镇"
    ],
    "mnemonic": "Mảnh đất phía Nam (南) dòng sông lớn Trường Giang (江).",
    "examples": [
      {
        "zh": "日出江花红胜火，春来江水绿如蓝，能不忆江南？",
        "pinyin": "Rìchū jiānghuā hóng shèng huǒ, chūn lái jiāngshuǐ lǜ rú lán, néng bú yì Jiāngnán?",
        "en": "Riverside blossoms blaze redder than fire at dawn; spring waters turn blue-green—how can one not remember Jiangnan?",
        "vi": "Nắng lên hoa bến đỏ hơn lửa, xuân tới dòng xanh biếc tựa chàm — sao không nhớ Giang Nam (Bạch Cư Dị)."
      },
      {
        "zh": "唐宋之后中国经济与科举人才重心逐渐南移至富庶的江南地区。",
        "pinyin": "Táng-Sòng zhīhòu Zhōngguó jīngjì yǔ kējǔ réncái zhòngxīn zhújiàn nányí zhì fùshù de Jiāngnán dìqū.",
        "en": "After Tang-Song, China's economic and examination center shifted south to prosperous Jiangnan.",
        "vi": "Từ Đường – Tống trở đi, trọng tâm kinh tế và nhân tài khoa cử chuyển mạnh về Giang Nam trù phú."
      }
    ]
  },
  {
    "id": "lingnan_southpass",
    "hanzi": "岭南",
    "traditional": "嶺南",
    "pinyin": "Lǐngnán",
    "hanViet": "LĨNH NAM",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Địa văn hóa",
    "pos": "n.",
    "english": "Lingnan (Guangdong, Guangxi, Hainan & historical northern Vietnam context)",
    "vietnamese": "Vùng Lĩnh Nam (phía nam dãy Ngũ Lĩnh) (Hán-Việt: LĨNH NAM)",
    "radical": "山+领 (Lĩnh - dãy núi đèo Ngũ Lĩnh) + 南 (Nam)",
    "radicalAnalysis": "山+领 (Lĩnh - dãy núi đèo Ngũ Lĩnh) + 南 (Nam)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 山+领 (Lĩnh - dãy núi đèo Ngũ Lĩnh) + 南 (Nam). Vùng đất phía nam (南) của năm dãy núi chắn Ngũ Lĩnh (岭).",
    "components": "Vùng đất phía nam (南) của năm dãy núi chắn Ngũ Lĩnh (岭).",
    "context": "Chia sẻ khí hậu nhiệt đới gió mùa, văn hóa thương mại biển, Lĩnh Nam họa phái và lịch sử giao thoa Bách Việt sâu đậm với Việt Nam.",
    "related": [
      "五岭",
      "广府文化",
      "粤港澳大湾区"
    ],
    "mnemonic": "Miền đất mở ra phía Nam (南) sau khi vượt qua rặng Ngũ Lĩnh (岭).",
    "examples": [
      {
        "zh": "岭南画派主张“折衷中西，融汇古今”，打破了清末画坛的沉闷僵化。",
        "pinyin": "Lǐngnán Huàpài zhǔzhāng 'zhézhōng Zhōng-Xī, rónghuì gǔjīn', dǎpò le Qīngmò huàtán de chénmèn jiānghuà.",
        "en": "The Lingnan School synthesized Chinese and Western painting, breaking late-Qing stagnation.",
        "vi": "Lĩnh Nam họa phái chủ trương dung hợp Đông–Tây cổ–kim, phá vỡ sự cứng nhắc cuối Thanh."
      },
      {
        "zh": "粤菜讲究清鲜原味，充分体现了岭南温润多雨的自然物产禀赋。",
        "pinyin": "Yuècài jiǎngjiu qīngxiān yuánwèi, chōngfèn tǐxiàn le Lǐngnán wēnrùn duōyǔ de zìrán wùchǎn bǐngfù.",
        "en": "Cantonese cuisine prizes fresh natural flavors, reflecting Lingnan's warm humid abundance.",
        "vi": "Ẩm thực Quảng Đông chuộng vị tươi thanh tự nhiên, phản ánh sản vật dồi dào vùng Lĩnh Nam."
      }
    ]
  },
  {
    "id": "zhongyuan_central",
    "hanzi": "中原",
    "traditional": "中原",
    "pinyin": "Zhōngyuán",
    "hanViet": "TRUNG NGUYÊN",
    "liushuType": "指事 · 象形",
    "liushuCategory": "指事 · 象形",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Lịch sử",
    "pos": "n.",
    "english": "Central Plains (Lower-Middle Yellow River Cradle)",
    "vietnamese": "Vùng Trung Nguyên (Hà Nam & lân cận, cái nôi Hoa Hạ) (Hán-Việt: TRUNG NGUYÊN)",
    "radical": "中 (Chính giữa) + 厂+泉 (Nguyên - đồng bằng nguồn suối rộng)",
    "radicalAnalysis": "中 (Chính giữa) + 厂+泉 (Nguyên - đồng bằng nguồn suối rộng)",
    "etymologyAndRadicals": "指事 · 象形 — Bộ thủ: 中 (Chính giữa) + 厂+泉 (Nguyên - đồng bằng nguồn suối rộng). Đồng bằng rộng phẳng (原) ở tâm điểm (中) hạ lưu Hoàng Hà (Lạc Dương, Khai Phong, An Dương, Trịnh Châu).",
    "components": "Đồng bằng rộng phẳng (原) ở tâm điểm (中) hạ lưu Hoàng Hà (Lạc Dương, Khai Phong, An Dương, Trịnh Châu).",
    "context": "Trụ cột chính trị–văn hiến cổ đại ('Trục lộc Trung Nguyên' 逐鹿中原 nghĩa là tranh giành thiên hạ).",
    "related": [
      "逐鹿中原",
      "河洛文化",
      "四大古都"
    ],
    "mnemonic": "Vùng bình nguyên rộng lớn (原) nằm giữa trung tâm lịch sử (中).",
    "examples": [
      {
        "zh": "得中原者得天下，是中国古代地缘政治格局的经典写照。",
        "pinyin": "Dé Zhōngyuán zhě dé tiānxià, shì Zhōngguó gǔdài dìyuán zhèngzhì géjú de jīngdiǎn xiězhào.",
        "en": "He who holds the Central Plains wins the realm reflects China's classic geopolitical logic.",
        "vi": "Ai làm chủ Trung Nguyên sẽ làm chủ thiên hạ là bức tranh địa chính trị kinh điển cổ đại."
      },
      {
        "zh": "河南博物院收藏的贾湖骨笛与青铜器见证了中原文明的早期辉煌。",
        "pinyin": "Hénán Bówùyuàn shōucáng de Jiǎhú gǔdí yǔ qīngtóngqì jiànzhèng le Zhōngyuán wénmíng de zǎoqī huīhuáng.",
        "en": "Jiahu bone flutes and bronzes in Henan Museum attest to early Central Plains brilliance.",
        "vi": "Sáo xương Giả Hồ và đồ thanh đồng tại Bảo tàng Hà Nam chứng minh rực rỡ sớm của Trung Nguyên."
      }
    ]
  },
  {
    "id": "bashu_sichuan",
    "hanzi": "巴蜀",
    "traditional": "巴蜀",
    "pinyin": "Bā-Shǔ",
    "hanViet": "BA THỤC",
    "liushuType": "象形 · 象形",
    "liushuCategory": "象形 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Địa văn hóa",
    "pos": "n.",
    "english": "Ba-Shu Cultural Region (Chongqing & Sichuan)",
    "vietnamese": "Vùng văn hóa Ba (Trùng Khánh) – Thục (Thành Đô) (Hán-Việt: BA THỤC)",
    "radical": "巴 (Con rắn lớn cổ vùng Trùng Khánh) + 蜀 (Con tằm trên vòm đầu cổ vùng Thành Đô)",
    "radicalAnalysis": "巴 (Con rắn lớn cổ vùng Trùng Khánh) + 蜀 (Con tằm trên vòm đầu cổ vùng Thành Đô)",
    "etymologyAndRadicals": "象形 · 象形 — Bộ thủ: 巴 (Con rắn lớn cổ vùng Trùng Khánh) + 蜀 (Con tằm trên vòm đầu cổ vùng Thành Đô). Kết hợp văn minh nước Ba phía Đông (sông Trường Giang – Trùng Khánh) và nước Cổ Thục phía Tây (Đồng bằng Thành Đô).",
    "components": "Kết hợp văn minh nước Ba phía Đông (sông Trường Giang – Trùng Khánh) và nước Cổ Thục phía Tây (Đồng bằng Thành Đô).",
    "context": "Chứng minh văn minh Trung Hoa đa trung tâm qua di chỉ Tam Tinh Đôi rực rỡ khác hẳn Trung Nguyên.",
    "related": [
      "天府之国",
      "三星堆",
      "川渝"
    ],
    "mnemonic": "Vùng lòng chảo phía Tây kết hợp nước Ba (巴) và Cổ Thục nuôi tằm (蜀).",
    "examples": [
      {
        "zh": "自古“巴蜀文化”以其奇谲浪漫的青铜艺术与农桑水利独树一帜。",
        "pinyin": "Zìgǔ 'Bā-Shǔ wénhuà' yǐ qí qíjué làngmàn de qīngtóng yìshù yǔ nóngsāng shuǐlì dúshùyīzhì.",
        "en": "Ba-Shu culture stood apart with imaginative bronzes and hydraulic engineering.",
        "vi": "Văn hóa Ba Thục từ xưa nổi bật độc đáo với thanh đồng huyền ảo và thủy lợi Đô Giang Yển."
      },
      {
        "zh": "成渝地区双城经济圈正打造中国西部高质量发展的重要引擎。",
        "pinyin": "Chéng-Yú dìqū shuāngchéng jīngjìquān zhèng dǎzào Zhōngguó xībù gāozhìliàng fāzhǎn de zhòngyào yǐnqíng.",
        "en": "The Chengdu-Chongqing economic circle drives high-quality growth in Western China.",
        "vi": "Vòng kinh tế song thành Thành Đô – Trùng Khánh đang kiến tạo động lực tăng trưởng miền Tây."
      }
    ]
  },
  {
    "id": "xiyu_western",
    "hanzi": "西域",
    "traditional": "西域",
    "pinyin": "Xīyù",
    "hanViet": "TÂY VỰC",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Lịch sử",
    "pos": "n.",
    "english": "Western Regions (Xinjiang & Central Asia Silk Road)",
    "vietnamese": "Vùng Tây Vực (ngoài Ngọc Môn Quan & Dương Quan) (Hán-Việt: TÂY VỰC)",
    "radical": "西 (Phương Tây, chim về tổ) + 土+或 (Vực - lãnh thổ ranh giới)",
    "radicalAnalysis": "西 (Phương Tây, chim về tổ) + 土+或 (Vực - lãnh thổ ranh giới)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 西 (Phương Tây, chim về tổ) + 土+或 (Vực - lãnh thổ ranh giới). Khu vực lãnh thổ rộng lớn (域) phía tây (西) dãy núi Kỳ Liên và cửa ải Ngọc Môn Quan.",
    "components": "Khu vực lãnh thổ rộng lớn (域) phía tây (西) dãy núi Kỳ Liên và cửa ải Ngọc Môn Quan.",
    "context": "Cửa ngõ giao thương Phật giáo, nhạc cụ Tỳ bà, nho, hạt vừng, thủy tinh La Mã theo Con đường Tơ lụa đi vào Trung Hoa.",
    "related": [
      "张骞凿空",
      "河西走廊",
      "丝路文化"
    ],
    "mnemonic": "Vùng biên cương rộng lớn (域) mở về phía mặt trời lặn phương Tây (西).",
    "examples": [
      {
        "zh": "汉武帝派遣张骞出使西域，打破了中原与中亚之间的地理隔绝。",
        "pinyin": "Hàn Wǔdì pàiqiǎn Zhāng Qiān chūshǐ Xīyù, dǎpò le Zhōngyuán yǔ Zhōngyà zhījiān de dìlǐ géjué.",
        "en": "Emperor Wu dispatched Zhang Qian to the Western Regions, breaking Central Asia's isolation.",
        "vi": "Hán Vũ Đế cử Trương Khiên đi Tây Vực phá vỡ cách trở địa lý với Trung Á."
      },
      {
        "zh": "琵琶、葡萄与苜蓿等均是在两汉时期经西域传入中原并融入日常生活。",
        "pinyin": "Pípa, pútao yǔ mùxu děng jūn shì zài liǎng Hàn shíqī jīng Xīyù chuánrù Zhōngyuán bìng róngrù rìcháng shēnghuó.",
        "en": "Pipa lutes, grapes, and alfalfa entered the Central Plains via the Western Regions in Han times.",
        "vi": "Đàn tỳ bà, nho và cỏ linh lăng đều từ Tây Vực truyền vào Trung Nguyên thời Hán."
      }
    ]
  },
  {
    "id": "dawanqu_gba",
    "hanzi": "大湾区",
    "traditional": "大灣區",
    "pinyin": "Dàwānqū",
    "hanViet": "ĐẠI LOAN KHU (VÙNG VỊNH LỚN GBA)",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Kinh tế Đương đại",
    "pos": "n.",
    "english": "Guangdong–Hong Kong–Macao Greater Bay Area (GBA)",
    "vietnamese": "Siêu cụm đô thị Vịnh Lớn (9 thành phố Quảng Đông + Hồng Kông + Ma Cao) (Hán-Việt: ĐẠI LOAN KHU (VÙNG VỊNH LỚN GBA))",
    "radical": "大 (Lớn) + 氵+弯 (Loan - vịnh biển uốn) + 区 (Khu)",
    "radicalAnalysis": "大 (Lớn) + 氵+弯 (Loan - vịnh biển uốn) + 区 (Khu)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 大 (Lớn) + 氵+弯 (Loan - vịnh biển uốn) + 区 (Khu). Cụm kinh tế liên kết Quảng Châu – Thâm Quyến – Đông Quan – Phật Sơn cùng Hồng Kông & Ma Cao quanh cửa sông Châu Giang.",
    "components": "Cụm kinh tế liên kết Quảng Châu – Thâm Quyến – Đông Quan – Phật Sơn cùng Hồng Kông & Ma Cao quanh cửa sông Châu Giang.",
    "context": "Động lực R&D và tài chính hàng đầu Châu Á với nguồn hàng điện tử, nội thất và logistics kết nối trực tiếp tới Việt Nam.",
    "related": [
      "粤港澳",
      "广深港",
      "供应链中心"
    ],
    "mnemonic": "Vùng khu vực (区) bao quanh vòng vịnh biển cửa sông Châu Giang rộng lớn (大湾).",
    "examples": [
      {
        "zh": "粤港澳大湾区集聚了香港金融、深圳科创与东莞佛山完备制造的协同优势。",
        "pinyin": "Yuè-Gǎng-Ào Dàwānqū jíjù le Xiānggǎng jīnróng, Shēnzhèn kēchuàng yǔ Dōngguǎn Fóshān wánbèi zhìzào de xiétóng yōushì.",
        "en": "The GBA combines Hong Kong finance, Shenzhen R&D, and Dongguan-Foshan manufacturing.",
        "vi": "Vùng Vịnh Lớn kết tụ tài chính Hồng Kông, công nghệ Thâm Quyến và công xưởng Đông Quan – Phật Sơn."
      },
      {
        "zh": "越来越多的越南与国际消费科技企业选择在香港和大湾区设立采购中心。",
        "pinyin": "Yuèláiyuè duō de Yuènán yǔ guójì xiāofèi kējì qǐyè xuǎnzé zài Xiānggǎng hé Dàwānqū shèlì cǎigòu zhōngxīn.",
        "en": "More Vietnamese and global consumer-tech firms open sourcing hubs in the GBA.",
        "vi": "Ngày càng nhiều doanh nghiệp công nghệ đặt trung tâm thu mua linh kiện tại Hồng Kông và Vịnh Lớn."
      }
    ]
  },
  {
    "id": "guanzhong_plain",
    "hanzi": "关中",
    "traditional": "關中",
    "pinyin": "Guānzhōng",
    "hanViet": "QUAN TRUNG",
    "liushuType": "会意 · 指事",
    "liushuCategory": "会意 · 指事",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Lịch sử",
    "pos": "n.",
    "english": "Guanzhong Plain ('Land Within the Passes' — Xi'an)",
    "vietnamese": "Đồng bằng Quan Trung (nơi đóng đô của Chu – Tần – Hán – Đường) (Hán-Việt: QUAN TRUNG)",
    "radical": "关 (Cửa ải bốn mặt) + 中 (Giữa)",
    "radicalAnalysis": "关 (Cửa ải bốn mặt) + 中 (Giữa)",
    "etymologyAndRadicals": "会意 · 指事 — Bộ thủ: 关 (Cửa ải bốn mặt) + 中 (Giữa). Bình nguyên vị trí nằm ở giữa (中) được bốn cửa ải hiểm trở bao bọc che chắn (四塞之关).",
    "components": "Bình nguyên vị trí nằm ở giữa (中) được bốn cửa ải hiểm trở bao bọc che chắn (四塞之关).",
    "context": "Cố đô Trường An (Tây An) ngự giữa đồng bằng sông Vị trù phú suốt hơn 1.100 năm lịch sử.",
    "related": [
      "八百里秦川",
      "长安",
      "四塞之地"
    ],
    "mnemonic": "Vùng đất phì nhiêu nằm ở trung tâm (中) bốn cửa ải hiểm yếu (关).",
    "examples": [
      {
        "zh": "“八百里秦川”指的是沃野千里的陕西关中平原。",
        "pinyin": "'Bābǎilǐ Qínchuān' zhǐde shì wòyě qiānlǐ de Shǎnxī Guānzhōng Píngyuán.",
        "en": "The 'Eight-Hundred-Li Qinchuan' refers to Shaanxi's fertile Guanzhong Plain.",
        "vi": "'Tám trăm dặm đất Tần' chỉ vùng đồng bằng Quan Trung Thiểm Tây phì nhiêu."
      },
      {
        "zh": "关中地区保存了从半坡遗址到秦汉唐陵寝的完整中华古都文明轴线。",
        "pinyin": "Guānzhōng dìqū bǎocún le cóng Bànpō Yízhǐ dào Qín-Hàn-Táng língqǐn de wánzhěng Zhōnghuá gǔdū wénmíng zhóuxiàn.",
        "en": "Guanzhong preserves a complete capital heritage line from Banpo through Qin, Han, and Tang.",
        "vi": "Vùng Quan Trung bảo tồn trục văn minh cổ đô trọn vẹn từ Bán Pha tới lăng tẩm Tần – Hán – Đường."
      }
    ]
  },
  {
    "id": "qilu_shandong",
    "hanzi": "齐鲁",
    "traditional": "齊魯",
    "pinyin": "Qí-Lǔ",
    "hanViet": "TỀ LỖ",
    "liushuType": "象形 · 会意",
    "liushuCategory": "象形 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Địa văn hóa",
    "pos": "n.",
    "english": "Qi-Lu Culture (Shandong — Confucian & Practical Traditions)",
    "vietnamese": "Vùng văn hóa Tề – Lỗ (tỉnh Sơn Đông) (Hán-Việt: TỀ LỖ)",
    "radical": "齐 (Nước Tề thương mại thực dụng) + 鱼+日 (Lỗ - quê Khổng Tử giữ lễ)",
    "radicalAnalysis": "齐 (Nước Tề thương mại thực dụng) + 鱼+日 (Lỗ - quê Khổng Tử giữ lễ)",
    "etymologyAndRadicals": "象形 · 会意 — Bộ thủ: 齐 (Nước Tề thương mại thực dụng) + 鱼+日 (Lỗ - quê Khổng Tử giữ lễ). Kết hợp hai nước chư hầu lớn Tây Chu tại Sơn Đông: Tề trọng công thương thực nghiệp và Lỗ trọng Nho học lễ nhạc.",
    "components": "Kết hợp hai nước chư hầu lớn Tây Chu tại Sơn Đông: Tề trọng công thương thực nghiệp và Lỗ trọng Nho học lễ nhạc.",
    "context": "Quê hương Khổng Tử, Mạnh Tử, Mặc Tử, Tôn Vũ và ẩm thực Lỗ Thái đứng đầu Bát Đại Thái Hệ.",
    "related": [
      "孔子",
      "儒家发源地",
      "鲁菜"
    ],
    "mnemonic": "Sự giao hòa giữa văn hóa Tề giàu thương nghiệp (齐) và đất Lỗ trọng Nho lễ (鲁).",
    "examples": [
      {
        "zh": "齐鲁大地既孕育了重礼重教的儒家文化，又诞生了《孙子兵法》等兵学智慧。",
        "pinyin": "Qí-Lǔ dàdì jì yùnyù le zhònglǐ zhòngjiào de Rújiā wénhuà, yòu dànshēng le 'Sūnzǐ Bīngfǎ' děng bīngxué zhìhuì.",
        "en": "Qi-Lu nurtured both ritual Confucian culture and Sunzi's strategic military wisdom.",
        "vi": "Đất Tề Lỗ vừa thai nghén Nho học trọng lễ vừa sản sinh 《Tôn Tử Binh Pháp》."
      },
      {
        "zh": "曲阜“三孔”景区每年吸引海内外大量汉学学者前来寻根参访。",
        "pinyin": "Qūfù 'Sānkǒng' jǐngqū měinián xīyǐn hǎinèiwài dàliàng Hànxué xuézhě qiánlái xúngēn cānfǎng.",
        "en": "Qufu's Three Confucian Sites attract Sinologists worldwide every year.",
        "vi": "Khu Tam Khổng tại Khúc Phụ mỗi năm thu hút đông đảo học giả Hán học toàn cầu tới khảo cứu."
      }
    ]
  },
  {
    "id": "jingchu_hubei",
    "hanzi": "荆楚",
    "traditional": "荊楚",
    "pinyin": "Jīng-Chǔ",
    "hanViet": "KINH SỞ",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Địa văn hóa",
    "pos": "n.",
    "english": "Jing-Chu Culture (Hubei & Hunan)",
    "vietnamese": "Vùng văn hóa Kinh Sở (lãng mạn, sơn thủy, Sở Từ) (Hán-Việt: KINH SỞ)",
    "radical": "艹+刑 (Kinh - bụi gai núi Kinh Sơn) + 林+疋 (Sở - rừng rậm phía Nam)",
    "radicalAnalysis": "艹+刑 (Kinh - bụi gai núi Kinh Sơn) + 林+疋 (Sở - rừng rậm phía Nam)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 艹+刑 (Kinh - bụi gai núi Kinh Sơn) + 林+疋 (Sở - rừng rậm phía Nam). Tên nước Sở cổ đại tại Hồ Bắc – Hồ Nam gắn với núi Kinh Sơn và rừng rậm phương Nam.",
    "components": "Tên nước Sở cổ đại tại Hồ Bắc – Hồ Nam gắn với núi Kinh Sơn và rừng rậm phương Nam.",
    "context": "Nền văn hóa phi thường phóng khoáng bay bổng: thơ 《Sở Từ》 của Khuất Nguyên, sơn mài đỏ đen, bộ chuông Tăng Hầu Ất.",
    "related": [
      "楚辞",
      "凤文化",
      "黄鹤楼"
    ],
    "mnemonic": "Vùng rừng núi phương Nam (楚) mang hương cỏ gai vùng Kinh Sơn (荆).",
    "examples": [
      {
        "zh": "浪漫瑰丽的荆楚文化以凤鸟崇拜与《楚辞》奇绝想象著称。",
        "pinyin": "Làngmàn guīlì de Jīng-Chǔ wénhuà yǐ fèngniǎo chóngbài yǔ 'Chǔcí' qíjué xiǎngxiàng zhùchēng.",
        "en": "Romantic Jing-Chu culture is famed for phoenix worship and Songs of Chu imagery.",
        "vi": "Văn hóa Kinh Sở lãng mạn lộng lẫy nổi tiếng bởi tín ngưỡng Phượng hoàng và trí tưởng tượng 《Sở Từ》."
      },
      {
        "zh": "湖北省博物馆的曾侯乙编钟揭示了先秦荆楚惊人的音乐与冶金成就。",
        "pinyin": "Húběi Shěng Bówùguǎn de Zēnghóuyǐ Biānzhōng jiēshì le xiān-Qín Jīng-Chǔ jīngrén de yīnyuè yǔ yějīn chéngjiù.",
        "en": "Marquis Yi's bells in Hubei Museum reveal astonishing pre-Qin Jing-Chu music and bronze craft.",
        "vi": "Bộ Chuông Biên Tăng Hầu Ất tại Bảo tàng Hồ Bắc hé lộ kỳ tích âm luật và luyện kim Kinh Sở."
      }
    ]
  },
  {
    "id": "huxiang_hunan",
    "hanzi": "湖湘",
    "traditional": "湖湘",
    "pinyin": "Hú-Xiāng",
    "hanViet": "HỒ TƯƠNG",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Địa văn hóa",
    "pos": "n.",
    "english": "Huxiang Culture (Hunan — Pragmatic Scholar-Statesmen)",
    "vietnamese": "Vùng văn hóa Hồ Tương (Hồ Động Đình – sông Tương Giang) (Hán-Việt: HỒ TƯƠNG)",
    "radical": "氵+胡 (Hồ Động Đình) + 氵+相 (Sông Tương Giang)",
    "radicalAnalysis": "氵+胡 (Hồ Động Đình) + 氵+相 (Sông Tương Giang)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 氵+胡 (Hồ Động Đình) + 氵+相 (Sông Tương Giang). Kết tụ quanh Hồ Động Đình và lưu vực sông Tương (tỉnh Hồ Nam).",
    "components": "Kết tụ quanh Hồ Động Đình và lưu vực sông Tương (tỉnh Hồ Nam).",
    "context": "Truyền thống học giả hành động kiên cường ('Kinh thế trí dụng', Nhạc Lộc Thư Viện: 'Duy Sở hữu tài, vu tư vi thịnh').",
    "related": [
      "岳麓书院",
      "实事求是",
      "吃得苦霸得蛮"
    ],
    "mnemonic": "Văn minh tụ hội bên bờ Hồ Động Đình (湖) dọc dòng sông Tương (湘).",
    "examples": [
      {
        "zh": "岳麓书院门前“惟楚有材，于斯为盛”的楹联展现湖湘学风的自信。",
        "pinyin": "Yuèlù Shūyuàn ménqián 'Wéi Chǔ yǒu cái, yú sī wéi shèng' de yínglián zhǎnxiàn Hú-Xiāng xuéfēng de zìxìn.",
        "en": "Yuelu Academy's couplet 'Only Chu has talent, thriving right here' shows Huxiang confidence.",
        "vi": "Đôi câu đối trước cổng Nhạc Lộc Thư Viện thể hiện khí phách học phong Hồ Tương."
      },
      {
        "zh": "“实事求是”作为岳麓书院讲堂匾额，成为湖湘实学精神的核心象征。",
        "pinyin": "'Shíshì qiúshì' zuòwéi Yuèlù Shūyuàn jiǎngtáng biǎn'é, chéngwéi Hú-Xiāng shíxué jīngshén de héxīn xiàngzhēng.",
        "en": "'Seeking truth from facts,' plaque of Yuelu Academy, symbolizes Huxiang pragmatic scholarship.",
        "vi": "Tấm biển 'Thực sự cầu thị' tại giảng đường Nhạc Lộc trở thành biểu tượng cốt lõi Thực học Hồ Tương."
      }
    ]
  },
  {
    "id": "hanyueyin_phonology",
    "hanzi": "汉越音",
    "traditional": "漢越音",
    "pinyin": "Hànyuèyīn",
    "hanViet": "HÁN VIỆT ÂM",
    "liushuType": "形声 · 象形",
    "liushuCategory": "形声 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Ngôn ngữ học Trung–Việt",
    "pos": "n.",
    "english": "Sino-Vietnamese Pronunciation (Middle Chinese Legacy)",
    "vietnamese": "Hệ thống âm đọc Hán – Việt (bảo lưu ngữ âm Đường–Tống) (Hán-Việt: HÁN VIỆT ÂM)",
    "radical": "汉 (Hán) + 越 (Việt) + 音 (Miệng thổi sáo -> Âm thanh)",
    "radicalAnalysis": "汉 (Hán) + 越 (Việt) + 音 (Miệng thổi sáo -> Âm thanh)",
    "etymologyAndRadicals": "形声 · 象形 — Bộ thủ: 汉 (Hán) + 越 (Việt) + 音 (Miệng thổi sáo -> Âm thanh). Hệ thống đọc chữ Hán hình thành trên cơ sở ngữ âm Trung cổ thời Đường – Tống (《Thiết Vận》/《Quảng Vận》) rồi Việt hóa theo quy luật thanh điệu tiếng Việt.",
    "components": "Hệ thống đọc chữ Hán hình thành trên cơ sở ngữ âm Trung cổ thời Đường – Tống (《Thiết Vận》/《Quảng Vận》) rồi Việt hóa theo quy luật thanh điệu tiếng Việt.",
    "context": "Chính là 'hóa thạch sống' quý giá giúp nhà ngôn ngữ học quốc tế (như Vương Lực, Nguyễn Tài Cẩn) phục nguyên phụ âm cuối -p, -t, -c, -m tiếng Hán cổ!",
    "related": [
      "切韵",
      "广韵",
      "汉越词"
    ],
    "mnemonic": "Cách phát âm (音) chữ Hán (汉) lưu giữ và biến hóa tại đất Việt (越).",
    "examples": [
      {
        "zh": "汉越音完整保留了中古汉语的塞音韵尾-p、-t、-k，极具历史语言学价值。",
        "pinyin": "Hànyuèyīn wánzhěng bǎoliú le zhōnggǔ Hànyǔ de sèyīn yùnwěi -p, -t, -k, jíjù lìshǐ yǔyánxué jiàzhí.",
        "en": "Sino-Vietnamese preserves Middle Chinese stop codas -p, -t, -k, priceless to historical linguistics.",
        "vi": "Âm Hán – Việt bảo lưu trọn vẹn các vần tắc -p, -t, -c của tiếng Hán trung cổ thời Đường – Tống."
      },
      {
        "zh": "越南学生凭借汉越音基础背诵中文学术词汇具有天然优势，但需警惕同形异义。",
        "pinyin": "Yuènán xuésheng píngjiè Hànyuèyīn jīchǔ bèisòng Zhōngwén xuéshù cíhuì jù yǒu tiānrán yōushì, dàn xū jǐngtì tóngxíng yìyì.",
        "en": "Sino-Vietnamese aids memorizing academic Chinese terms, though false friends require caution.",
        "vi": "Học sinh Việt Nam dùng vốn âm Hán–Việt học thuật rất nhanh nhưng phải cảnh giác từ đồng hình dị nghĩa."
      }
    ]
  },
  {
    "id": "bitan_brush_talk",
    "hanzi": "笔谈",
    "traditional": "筆談",
    "pinyin": "bǐtán",
    "hanViet": "BÚT ĐÀM",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Văn hóa Trung – Việt",
    "pos": "v./n.",
    "english": "Brush Conversation (Written Classical Chinese Dialogue)",
    "vietnamese": "Giao lưu trò chuyện bằng chữ viết giữa học giả Đông Á (Hán-Việt: BÚT ĐÀM)",
    "radical": "竹+毛 (Bút lông) + 訁+炎 (Đàm - trò chuyện sôi nổi)",
    "radicalAnalysis": "竹+毛 (Bút lông) + 訁+炎 (Đàm - trò chuyện sôi nổi)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 竹+毛 (Bút lông) + 訁+炎 (Đàm - trò chuyện sôi nổi). Dùng ngọn bút viết trên giấy (笔) để đối thoại (谈) khi bất đồng ngôn ngữ nói nhưng chung văn tự chữ Hán cổ.",
    "components": "Dùng ngọn bút viết trên giấy (笔) để đối thoại (谈) khi bất đồng ngôn ngữ nói nhưng chung văn tự chữ Hán cổ.",
    "context": "Phương thức giao lưu thi họa, học thuật nổi tiếng của sứ bộ Lê Quý Đôn, Mạc Đĩnh Chi, Phùng Khắc Khoan tại Yên Kinh.",
    "related": [
      "汉字文化圈",
      "使臣",
      "燕行录"
    ],
    "mnemonic": "Trao đổi tư tưởng tri kỷ (谈) thông qua ngọn bút mực trên giấy (笔).",
    "examples": [
      {
        "zh": "古代东亚中越韩日使节语言不通，却能通过文言文“笔谈”切磋诗词哲理。",
        "pinyin": "Gǔdài Dōngyà Zhōng-Yuè-Hán-Rì shǐjié yǔyán bùtōng, què néng tōngguò wényánwén 'bǐtán' qiēcuō shīcí zhéli.",
        "en": "East Asian envoys conversed effortlessly in poetry and philosophy via Classical Chinese brush talk.",
        "vi": "Sứ thần Việt–Trung–Hàn–Nhật xưa nói khác tiếng nhưng dùng Văn ngôn Bút đàm trao đổi sâu sắc."
      },
      {
        "zh": "越南名儒黎贵惇出使北京期间与清朝士大夫的笔谈被整理载入史册。",
        "pinyin": "Yuènán míngrú Lí Guìdūn chūshǐ Běijīng qījiān yǔ Qīngcháo shìdàfū de bǐtán bèi zhěnglǐ zàirù shǐcè.",
        "en": "Vietnamese polymath Lê Quý Đôn's brush talks with Qing scholars in Beijing entered historical records.",
        "vi": "Các cuộc Bút đàm của Lê Quý Đôn với học giả nhà Thanh tại Bắc Kinh đã được ghi lưu sử sách."
      }
    ]
  },
  {
    "id": "wenmiao_temple",
    "hanzi": "文庙",
    "traditional": "文廟",
    "pinyin": "Wénmiào",
    "hanViet": "VĂN MIẾU",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Văn hóa Đông Á",
    "pos": "n.",
    "english": "Temple of Literature / Confucian Temple",
    "vietnamese": "Văn Miếu thờ Khổng Tử và Tiên hiền Nho học (Hán-Việt: VĂN MIẾU)",
    "radical": "文 (Văn hiến) + 广+朝 (Miếu - đền thờ hướng về tiền nhân)",
    "radicalAnalysis": "文 (Văn hiến) + 广+朝 (Miếu - đền thờ hướng về tiền nhân)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 文 (Văn hiến) + 广+朝 (Miếu - đền thờ hướng về tiền nhân). Ngôi đền tôn nghiêm (庙) thờ đạo học văn hiến (文) do Triều đình và sĩ phu địa phương dựng lập.",
    "components": "Ngôi đền tôn nghiêm (庙) thờ đạo học văn hiến (文) do Triều đình và sĩ phu địa phương dựng lập.",
    "context": "Tiêu biểu gồm Khổng Miếu Khúc Phụ, Văn Miếu Bắc Kinh và Văn Miếu – Quốc Tử Giám Hà Nội (dựng năm 1070 thời Lý).",
    "related": [
      "国子监",
      "大成殿",
      "尊师重道"
    ],
    "mnemonic": "Ngôi miếu thờ trang nghiêm (庙) tôn vinh nền văn hiến tri thức (文).",
    "examples": [
      {
        "zh": "河内文庙建于1070年，是越南尊崇学术与人才教育的千年象征。",
        "pinyin": "Hénèi Wénmiào jiàn yú 1070 nián, shì Yuènán zūnchóng xuéshù yǔ réncái jiàoyù de qiānnián xiàngzhēng.",
        "en": "Built in 1070, Hanoi's Temple of Literature symbolizes a millennium of Vietnamese learning.",
        "vi": "Văn Miếu Hà Nội dựng năm 1070 là biểu tượng ngàn năm tôn vinh học thuật và hiền tài Việt Nam."
      },
      {
        "zh": "曲阜孔庙、北京孔庙与南京夫子庙构成中国三大古文庙群。",
        "pinyin": "Qūfù Kǒngmiào, Běijīng Kǒngmiào yǔ Nánjīng Fūzǐmiào gòuchéng Zhōngguó sān dà gǔ Wénmiào qún.",
        "en": "Qufu, Beijing, and Nanjing Confucian Temples form China's three great historic 文庙.",
        "vi": "Khổng Miếu Khúc Phụ, Khổng Miếu Bắc Kinh và Miếu Phu Tử Nam Kinh là ba cụm Văn Miếu lớn nhất Trung Quốc."
      }
    ]
  },
  {
    "id": "guozijian_academy",
    "hanzi": "国子监",
    "traditional": "國子監",
    "pinyin": "Guózǐjiàn",
    "hanViet": "QUỐC TỬ GIÁM",
    "liushuType": "会意 · 会意",
    "liushuCategory": "会意 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Lịch sử Giáo dục",
    "pos": "n.",
    "english": "Imperial Academy (National University)",
    "vietnamese": "Quốc Tử Giám (Trường đại học cao nhất thời quân chủ) (Hán-Việt: QUỐC TỬ GIÁM)",
    "radical": "国 (Quốc gia) + 子 (Con em/Hiền tài) + 卧+血 (Giám - nhìn xuống giám quản)",
    "radicalAnalysis": "国 (Quốc gia) + 子 (Con em/Hiền tài) + 卧+血 (Giám - nhìn xuống giám quản)",
    "etymologyAndRadicals": "会意 · 会意 — Bộ thủ: 国 (Quốc gia) + 子 (Con em/Hiền tài) + 卧+血 (Giám - nhìn xuống giám quản). Cơ quan giáo dục tối cao của nhà nước (国子) giám quản đào tạo nhân tài thi cử và giữ bản in kinh điển (监).",
    "components": "Cơ quan giáo dục tối cao của nhà nước (国子) giám quản đào tạo nhân tài thi cử và giữ bản in kinh điển (监).",
    "context": "Có mặt tại cả Bắc Kinh, Nam Kinh và Hà Nội (lập năm 1076 dưới triều Lý Nhân Tông).",
    "related": [
      "太学",
      "辟雍",
      "科举教育"
    ],
    "mnemonic": "Trường công cao nhất của quốc gia (国子) nơi quan giám sát đào tạo nhân tài (监).",
    "examples": [
      {
        "zh": "北京国子监的辟雍大殿是清代皇帝亲临讲经的重要礼仪建筑。",
        "pinyin": "Běijīng Guózǐjiàn de Pìyōng Dàdiàn shì Qīngdài huángdì qīnlín jiǎngjīng de zhòngyào lǐyí jiànzhù.",
        "en": "The Biyong Hall in Beijing's Guozijian hosted emperors' classical lectures in the Qing era.",
        "vi": "Điện Tịch Ung ở Quốc Tử Giám Bắc Kinh là nơi hoàng đế đích thân giảng kinh sách thời Thanh."
      },
      {
        "zh": "越南李朝于1076年设立国子监，奠定了自主王朝官学教育体系。",
        "pinyin": "Yuènán Lǐcháo yú 1076 nián shèlì Guózǐjiàn, diàndìng le zìzhǔ wángcháo guānxué jiàoyù tǐxì.",
        "en": "Vietnam's Lý dynasty founded Guozijian in 1076, anchoring state higher education.",
        "vi": "Triều Lý Việt Nam lập Quốc Tử Giám năm 1076, đặt nền móng nền giáo dục quốc học tự chủ."
      }
    ]
  },
  {
    "id": "zhuangyuan_top",
    "hanzi": "状元",
    "traditional": "狀元",
    "pinyin": "zhuàngyuán",
    "hanViet": "TRẠNG NGUYÊN",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 6 / Khoa cử",
    "pos": "n.",
    "english": "Top Palace Examination Laureate (First Place)",
    "vietnamese": "Trạng Nguyên (đứng đầu khoa thi Đình) (Hán-Việt: TRẠNG NGUYÊN)",
    "radical": "丬+犬 (Trạng - tờ tấu trình bảng vàng) + 一+兀 (Nguyên - đứng đầu tiên)",
    "radicalAnalysis": "丬+犬 (Trạng - tờ tấu trình bảng vàng) + 一+兀 (Nguyên - đứng đầu tiên)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 丬+犬 (Trạng - tờ tấu trình bảng vàng) + 一+兀 (Nguyên - đứng đầu tiên). Người đứng thứ nhất (元) trên tờ sớ bảng trình danh sách tân khoa Tiến sĩ (状) dâng lên hoàng đế.",
    "components": "Người đứng thứ nhất (元) trên tờ sớ bảng trình danh sách tân khoa Tiến sĩ (状) dâng lên hoàng đế.",
    "context": "Trong lịch sử có những vị 'Lưỡng quốc Trạng nguyên' như Mạc Đĩnh Chi người Việt hay Trạng nguyên Khương Công Phụ thời Đường.",
    "related": [
      "连中三元",
      "殿试",
      "莫挺之"
    ],
    "mnemonic": "Người đứng đầu tiên nhất (元) được ghi trên bản tấu bảng vàng (状).",
    "examples": [
      {
        "zh": "古代科举连中解元、会元、状元三项第一，称为“连中三元”。",
        "pinyin": "Gǔdài kējǔ liánzhòng Jièyuán, Huìyuán, Zhuàngyuán sān xiàng dì yī, chēngwéi 'liánzhòng sānyuán'.",
        "en": "Winning first place in provincial, metropolitan, and palace exams was called Threefold First.",
        "vi": "Khoa cử xưa đỗ đầu cả Giải nguyên, Hội nguyên và Đình nguyên gọi là 'Tam nguyên'."
      },
      {
        "zh": "唐代爱州人姜公辅考中进士制策并居高位，成为早期中越人才交流佳话。",
        "pinyin": "Tángdài Àizhōurén Jiāng Gōngfǔ kǎozhōng jìnshì zhìcè bìng jū gāowèi, chéngwéi zǎoqī Zhōng-Yuè réncái jiāoliú jiāhuà.",
        "en": "Tang-era scholar Khương Công Phụ from Ai Chau excelled at Chang'an court.",
        "vi": "Danh sĩ Ái Châu đời Đường Khương Công Phụ đỗ cao tại Trường An trở thành giai thoại giao lưu nhân tài."
      }
    ]
  },
  {
    "id": "kaoju_evidential",
    "hanzi": "考据",
    "traditional": "考據",
    "pinyin": "kǎojù",
    "hanViet": "KHẢO CỨ",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "v./n.",
    "english": "Evidential / Textual Scholarship",
    "vietnamese": "Khảo chứng bằng sử liệu, ngôn ngữ học, văn bản gốc (Hán-Việt: KHẢO CỨ)",
    "radical": "老/考 (Khảo - tra xét) + 扌+豦 (Cứ - nắm bám chứng cứ)",
    "radicalAnalysis": "老/考 (Khảo - tra xét) + 扌+豦 (Cứ - nắm bám chứng cứ)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 老/考 (Khảo - tra xét) + 扌+豦 (Cứ - nắm bám chứng cứ). Tra hỏi kiểm chứng cặn kẽ (考) dựa trên bằng chứng thực vật/văn bản vững chắc (据).",
    "components": "Tra hỏi kiểm chứng cặn kẽ (考) dựa trên bằng chứng thực vật/văn bản vững chắc (据).",
    "context": "Phương châm cốt lõi của Học phái Càn – Gia thời Thanh ('Thực sự cầu thị, Vô trưng bất tín').",
    "related": [
      "乾嘉学派",
      "实证",
      "文献校勘"
    ],
    "mnemonic": "Tra xét kỹ lưỡng (考) bám chặt vào chứng cứ xác thực (据).",
    "examples": [
      {
        "zh": "清代考据学者从古音训诂出发，修正了许多前人误读经典的错误。",
        "pinyin": "Qīngdài kǎojù xuézhě cóng gǔyīn xùngǔ chūfā, xiūzhèng le xǔduō qiánrén wùdú jīngdiǎn de cuòwù.",
        "en": "Qing evidential scholars used historical phonology to correct prior misreadings of classics.",
        "vi": "Học giả Khảo cứ đời Thanh xuất phát từ cổ âm huấn hỗ đính chính nhiều lỗi giải sai kinh điển."
      },
      {
        "zh": "撰写历史文章时坚持“无征不信”的考据准则，能显著提升可信度。",
        "pinyin": "Zhuànxiě lìshǐ wénzhāng shí jiānchí 'wúzhēng bú xìn' de kǎojù zhǔnzé, néng xiǎnzhù tíshēng kěxìndù.",
        "en": "Adhering to 'no belief without evidence' in historical writing raises credibility markedly.",
        "vi": "Viết chuyên luận sử học giữ chuẩn Khảo cứ 'vô trưng bất tín' giúp nâng cao uy tín rõ rệt."
      }
    ]
  },
  {
    "id": "xungu_gloss",
    "hanzi": "训诂",
    "traditional": "訓詁",
    "pinyin": "xùngǔ",
    "hanViet": "HUẤN HỖ",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n./v.",
    "english": "Traditional Exegesis & Historical Semantics",
    "vietnamese": "Giải thích ngữ nghĩa cổ từ qua thời đại (Hán-Việt: HUẤN HỖ)",
    "radical": "訁+川 (Huấn - lấy lời dạy dẫn thông) + 訁+古 (Hỗ - giải nghĩa ngôn từ cổ xưa)",
    "radicalAnalysis": "訁+川 (Huấn - lấy lời dạy dẫn thông) + 訁+古 (Hỗ - giải nghĩa ngôn từ cổ xưa)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 訁+川 (Huấn - lấy lời dạy dẫn thông) + 訁+古 (Hỗ - giải nghĩa ngôn từ cổ xưa). Lấy ngôn từ hiện đại (言) giảng thông suốt nghĩa chữ viết cổ xưa (古).",
    "components": "Lấy ngôn từ hiện đại (言) giảng thông suốt nghĩa chữ viết cổ xưa (古).",
    "context": "Một trong ba trụ cột của Tiểu học cổ truyền (Âm vận học, Văn tự học, Huấn hỗ học), tiêu biểu 《Nhĩ Nhã》 & 《Thuyết Văn》.",
    "related": [
      "尔雅",
      "说文解字",
      "语义演变"
    ],
    "mnemonic": "Dùng lời giảng thông thoáng (训) để giải thích lớp nghĩa văn cổ (古).",
    "examples": [
      {
        "zh": "读懂先秦两汉典籍，离不开传统文字学与训诂学的扎实功底。",
        "pinyin": "Dúdǒng xiān-Qín liǎng-Hàn diǎnjí, líbùkāi chuántǒng wénzìxué yǔ xùngǔxué de zhāshí gōngdǐ.",
        "en": "Reading pre-Qin and Han texts requires solid training in philology and historical glossing.",
        "vi": "Đọc hiểu cổ thư Tiên Tần Lưỡng Hán không thể thiếu nền tảng văn tự và huấn hỗ học."
      },
      {
        "zh": "对比“走”字古义（跑）与今义（步行），正是词义训诂流变的有趣例证。",
        "pinyin": "Duìbǐ 'zǒu' zì gǔyì (pǎo) yǔ jīnyì (bùxíng), zhèngshì cíyì xùngǔ liúbiàn de yǒuqù lìzhèng.",
        "en": "Contrasting ancient 走 ('run') with modern 走 ('walk') illustrates semantic shift nicely.",
        "vi": "Đối chiếu chữ 走 nghĩa cổ ('chạy') với nghĩa nay ('đi bộ') là ví dụ thú vị của huấn hỗ biến nghĩa."
      }
    ]
  },
  {
    "id": "yili_meaning",
    "hanzi": "义理",
    "traditional": "義理",
    "pinyin": "yìlǐ",
    "hanViet": "NGHĨA LÝ",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Philosophical Principles / Moral-Metaphysical Doctrine",
    "vietnamese": "Triết lý đạo nghĩa sâu xa (song hành Khảo cứ và Từ chương) (Hán-Việt: NGHĨA LÝ)",
    "radical": "义 (Đạo nghĩa) + 理 (Nguyên lý trật tự)",
    "radicalAnalysis": "义 (Đạo nghĩa) + 理 (Nguyên lý trật tự)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 义 (Đạo nghĩa) + 理 (Nguyên lý trật tự). Bộ ba cổ học truyền thống do Diêu Nại (Đời Thanh) đúc kết: Nghĩa lý (Triết học) – Khảo cứ (Sử liệu học) – Từ chương (Văn học).",
    "components": "Bộ ba cổ học truyền thống do Diêu Nại (Đời Thanh) đúc kết: Nghĩa lý (Triết học) – Khảo cứ (Sử liệu học) – Từ chương (Văn học).",
    "context": "Tránh lệch lạc: có Nghĩa lý thiếu Khảo cứ dễ nói suông, có Khảo cứ thiếu Nghĩa lý dễ vụn vặt.",
    "related": [
      "考据",
      "辞章",
      "桐城派"
    ],
    "mnemonic": "Khảo cứu tìm ra đạo nghĩa (义) và nguyên lý vận hành (理) ẩn sau kinh điển.",
    "examples": [
      {
        "zh": "治学当兼顾义理、考据、辞章三者，方免空疏或琐碎之弊。",
        "pinyin": "Zhìxué dāng jiāngù yìlǐ, kǎojù, cízhāng sānzhě, fāng miǎn kōngshū huò suǒsuì zhī bì.",
        "en": "Scholarship should balance philosophy, evidential proof, and literary style to avoid emptiness or trivia.",
        "vi": "Làm học thuật nên cân bằng Nghĩa lý – Khảo cứ – Từ chương mới tránh rỗng tuếch hay vụn vặt."
      },
      {
        "zh": "本平台每篇专题均力求将文献考据与哲学义理深度阐发融为一体。",
        "pinyin": "Běn píngtái měi piān zhuāntí jūn lìqiú jiāng wénxiàn kǎojù yǔ zhéxué yìlǐ shēndù chǎnfā róng wéi yītǐ.",
        "en": "Each essay here aims to unite textual verification with deep philosophical interpretation.",
        "vi": "Mỗi chuyên luận trên nền tảng đều gắn kết chặt chẽ khảo cứ tư liệu với phân tích nghĩa lý."
      }
    ]
  },
  {
    "id": "cizhang_rhetoric",
    "hanzi": "辞章",
    "traditional": "辭章",
    "pinyin": "cízhāng",
    "hanViet": "TỪ CHƯƠNG",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "n.",
    "english": "Literary Rhetoric & Stylistic Craft",
    "vietnamese": "Nghệ thuật hành văn tu từ điêu luyện (Hán-Việt: TỪ CHƯƠNG)",
    "radical": "辛+受 (Từ - lời biện luận) + 章 (Khúc nhạc văn vẻ hoàn chỉnh)",
    "radicalAnalysis": "辛+受 (Từ - lời biện luận) + 章 (Khúc nhạc văn vẻ hoàn chỉnh)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 辛+受 (Từ - lời biện luận) + 章 (Khúc nhạc văn vẻ hoàn chỉnh). Ngôn từ (辞) sắp xếp theo nhịp điệu chương đoạn đẹp đẽ (章).",
    "components": "Ngôn từ (辞) sắp xếp theo nhịp điệu chương đoạn đẹp đẽ (章).",
    "context": "Tiêu chuẩn thẩm mỹ văn học cổ điển từ Đường Tống Bát Đại Gia tới văn nghị luận học thuật hiện đại.",
    "related": [
      "唐宋八大家",
      "修辞",
      "文采"
    ],
    "mnemonic": "Lời lẽ chọn lọc (辞) kết thành chương đoạn mỹ cảm rõ ràng (章).",
    "examples": [
      {
        "zh": "好的学术论文既要有严密逻辑，也应讲究辞章简练雅洁。",
        "pinyin": "Hǎo de xuéshù lùnwén jì yào yǒu yánmì luójí, yě yīng jiǎngjiu cízhāng jiǎnliàn yǎjié.",
        "en": "Good academic essays require rigorous logic alongside concise, refined prose.",
        "vi": "Chuyên luận hay vừa đòi hỏi logic chặt chẽ vừa chú trọng từ chương cô đọng tao nhã."
      },
      {
        "zh": "《滕王阁序》以工整华丽的骈文辞章传诵千载。",
        "pinyin": "'Téngwánggé Xù' yǐ gōngzhěng huálì de piánwén cízhāng chuánsòng qiānzǎi.",
        "en": "The Preface to Pavilion of Prince Teng is famed for parallel-prose stylistic brilliance.",
        "vi": "Bài 《Đằng Vương Các Tự》 lưu truyền nghìn đời nhờ nghệ thuật biền văn từ chương điêu luyện."
      }
    ]
  },
  {
    "id": "jingjie_realm",
    "hanzi": "境界",
    "traditional": "境界",
    "pinyin": "jìngjiè",
    "hanViet": "CẢNH GIỚI",
    "liushuType": "形声 (Hình thanh)",
    "liushuCategory": "形声 (Hình thanh)",
    "level": "HSK 5-6",
    "topicTag": "HSK 5-6 / Mỹ học",
    "pos": "n.",
    "english": "Spiritual / Aesthetic Realm (Tam Cảnh Giới Vương Quốc Duy)",
    "vietnamese": "Cảnh giới tinh thần, tầm vóc thẩm mỹ hoặc học thuật (Hán-Việt: CẢNH GIỚI)",
    "radical": "土+竟 (Cảnh - vùng đất ranh giới kết thúc) + 田+介 (Giới - ranh mốc đồng ruộng)",
    "radicalAnalysis": "土+竟 (Cảnh - vùng đất ranh giới kết thúc) + 田+介 (Giới - ranh mốc đồng ruộng)",
    "etymologyAndRadicals": "形声 (Hình thanh) — Bộ thủ: 土+竟 (Cảnh - vùng đất ranh giới kết thúc) + 田+介 (Giới - ranh mốc đồng ruộng). Hai chữ gần nghĩa hợp lại chỉ tầng bậc không gian – tâm thức mà người tu học hoặc tác phẩm đạt đến.",
    "components": "Hai chữ gần nghĩa hợp lại chỉ tầng bậc không gian – tâm thức mà người tu học hoặc tác phẩm đạt đến.",
    "context": "Vương Quốc Duy trong 《Nhân Gian Từ Thoại》 chia quá trình thành công làm 3 Cảnh giới qua 3 câu Tống Từ bất hủ.",
    "related": [
      "人间词话",
      "意境",
      "人生三重境"
    ],
    "mnemonic": "Bước lên vùng ranh giới cao hơn (境界) trong nhận thức và sáng tạo.",
    "examples": [
      {
        "zh": "古今之成大事业、大学问者，必经过三种之境界。",
        "pinyin": "Gǔjīn zhī chéng dà shìyè, dà xuéwèn zhě, bì jīngguò sān zhǒng zhī jìngjiè.",
        "en": "Great achievers in deeds and learning through the ages pass through three spiritual realms.",
        "vi": "Xưa nay bậc thành sự nghiệp và học vấn lớn tất phải trải qua ba tầng cảnh giới (Vương Quốc Duy)."
      },
      {
        "zh": "中国山水画追求“天人合一”的哲学意象与高远精神境界。",
        "pinyin": "Zhōngguó shānshuǐhuà zhuīqiú 'tiānrén héyī' de zhéxué yìxiàng yǔ gāoyuǎn jīngshén jìngjiè.",
        "en": "Chinese landscape painting seeks cosmic unity and an elevated spiritual realm.",
        "vi": "Hội họa sơn thủy Trung Hoa vươn tới ý tượng Thiên nhân hợp nhất và cảnh giới tinh thần cao khiết."
      }
    ]
  },
  {
    "id": "fenggu_backbone",
    "hanzi": "风骨",
    "traditional": "風骨",
    "pinyin": "fēnggǔ",
    "hanViet": "PHONG CỐT",
    "liushuType": "象形 · 象形",
    "liushuCategory": "象形 · 象形",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật / Mỹ học",
    "pos": "n.",
    "english": "Moral Fiber & Expressive Vitality (Bone-and-Wind)",
    "vietnamese": "Khí chất vững vàng và sinh lực nghệ thuật (Hán-Việt: PHONG CỐT)",
    "radical": "风 (Cánh buồm gió -> Khí cảm lay động) + 骨 (Bộ xương vững chắc)",
    "radicalAnalysis": "风 (Cánh buồm gió -> Khí cảm lay động) + 骨 (Bộ xương vững chắc)",
    "etymologyAndRadicals": "象形 · 象形 — Bộ thủ: 风 (Cánh buồm gió -> Khí cảm lay động) + 骨 (Bộ xương vững chắc). Kết hợp luồng gió sinh khí lay động (风) và khung xương vững vàng không mềm yếu (骨).",
    "components": "Kết hợp luồng gió sinh khí lay động (风) và khung xương vững vàng không mềm yếu (骨).",
    "context": "Khái niệm phê bình văn nghệ trứ danh của Lưu Hiệp trong 《Văn Tâm Điêu Long》 (thời Lương) và Kiến An Phong Cốt.",
    "related": [
      "建安风骨",
      "文心雕龙",
      "骨法用笔"
    ],
    "mnemonic": "Có luồng sinh khí thanh thoát (风) dựng trên khung cốt cách ngay thẳng (骨).",
    "examples": [
      {
        "zh": "《文心雕龙》论文章贵有风骨，忌辞藻浮艳而精神萎靡。",
        "pinyin": "'Wénxīn Diāolóng' lùn wénzhāng guì yǒu fēnggǔ, jì cízaǒ fúyàn ér jīngshén wěimǐ.",
        "en": "The Literary Mind stresses vital bone-and-wind over hollow ornamentation.",
        "vi": "《Văn Tâm Điêu Long》 dạy văn chương quý ở Phong cốt, kỵ lời hoa mỹ mà rỗng tinh thần."
      },
      {
        "zh": "梅兰竹菊“四君子”画作向来被视为文人风骨的视觉象征。",
        "pinyin": "Méi lán zhú jú 'Sì Jūnzǐ' huàzuò xiànglái bèi shìwéi wénrén fēnggǔ de shìjué xiàngzhēng.",
        "en": "Plum, orchid, bamboo, and chrysanthemum paintings symbolize literati moral backbone.",
        "vi": "Tranh Tứ Quân Tử Mai–Lan–Trúc–Cúc luôn là biểu tượng thị giác của phong cốt văn nhân."
      }
    ]
  },
  {
    "id": "qingya_refined",
    "hanzi": "清雅",
    "traditional": "清雅",
    "pinyin": "qīngyǎ",
    "hanViet": "THANH NHÃ",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Thẩm mỹ",
    "pos": "adj.",
    "english": "Pure, Elegant and Refined (Song Literati Ideal)",
    "vietnamese": "Trong trẻo tao nhã (thẩm mỹ Tống triều) (Hán-Việt: THANH NHÃ)",
    "radical": "氵+青 (Thanh - nước xanh trong không cặn) + 牙+隹 (Nhã - chim nhã chuẩn mực)",
    "radicalAnalysis": "氵+青 (Thanh - nước xanh trong không cặn) + 牙+隹 (Nhã - chim nhã chuẩn mực)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 氵+青 (Thanh - nước xanh trong không cặn) + 牙+隹 (Nhã - chim nhã chuẩn mực). Làn nước xanh trong mát (清) hòa hợp dáng vẻ nhã nhặn đoan trang (雅).",
    "components": "Làn nước xanh trong mát (清) hòa hợp dáng vẻ nhã nhặn đoan trang (雅).",
    "context": "Thẩm mỹ chủ đạo của gốm Nhữ Diêu, trà đạo, lâm viên Tô Châu và đồ họa thủy mặc tối giản.",
    "related": [
      "高雅",
      "清淡",
      "宋代美学"
    ],
    "mnemonic": "Trong sạch không vẩn đục (清) và tao nhã chuẩn mực (雅).",
    "examples": [
      {
        "zh": "宋代文人书房讲究器物清雅古朴，摒弃繁复堆砌的黄金珠宝。",
        "pinyin": "Sòngdài wénrén shūfáng jiǎngjiu qìwù qīngyǎ gǔpǔ, bìngqì fánfù duīqì de huángjīn zhūbǎo.",
        "en": "Song literati studios prized simple, refined wares over ostentatious gold filigree.",
        "vi": "Thư phòng văn nhân đời Tống chuộng khí vật thanh nhã cổ phác, tránh phô trương rườm rà."
      },
      {
        "zh": "这种宣纸色调与极简排版共同营造出清雅静谧的阅读氛围。",
        "pinyin": "Zhèzhǒng xuānzhǐ sèdiào yǔ jíjiǎn páibǎn gòngtóng yíngzào chū qīngyǎ jìngmì de yuèdú fēnwéi.",
        "en": "This Xuan-paper palette and clean layout create a serene, refined reading mood.",
        "vi": "Tông giấy Tuyên cùng bố cục tối giản cùng tạo nên không gian đọc thanh nhã tĩnh lặng."
      }
    ]
  },
  {
    "id": "gongying_winwin",
    "hanzi": "共赢",
    "traditional": "共贏",
    "pinyin": "gòngyíng",
    "hanViet": "CỘNG DOANH (CÙNG THẮNG)",
    "liushuType": "会意 · 形声",
    "liushuCategory": "会意 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 5 / Kinh doanh",
    "pos": "v./n.",
    "english": "Win-Win Cooperation (Mutual Benefit)",
    "vietnamese": "Cùng thắng, hai bên đều hưởng lợi bền vững (Hán-Việt: CỘNG DOANH (CÙNG THẮNG))",
    "radical": "共 (Nhiều tay nâng chung) + 亡+口+月+贝+凡 (Doanh - dư dả lời lãi)",
    "radicalAnalysis": "共 (Nhiều tay nâng chung) + 亡+口+月+贝+凡 (Doanh - dư dả lời lãi)",
    "etymologyAndRadicals": "会意 · 形声 — Bộ thủ: 共 (Nhiều tay nâng chung) + 亡+口+月+贝+凡 (Doanh - dư dả lời lãi). Cùng chung tay (共) tạo ra thặng dư giá trị cho tất cả các bên tham gia (赢).",
    "components": "Cùng chung tay (共) tạo ra thặng dư giá trị cho tất cả các bên tham gia (赢).",
    "context": "Đối nghịch tư duy 'Trò chơi tổng bằng không' (Zero-sum); nền tảng đàm phán chuỗi cung ứng dài hạn.",
    "related": [
      "互利共赢",
      "合作",
      "双赢"
    ],
    "mnemonic": "Hai bàn tay nâng chung (共) hướng tới thành quả lợi ích dồi dào (赢).",
    "examples": [
      {
        "zh": "建立稳定的长期供应链有赖于厂商与采购商之间的互利共赢。",
        "pinyin": "Jiànlì wěndìng de chángqī gōngyìngliàn yǒulàiyú chǎngshāng yǔ cǎigòushāng zhījiān de hùlì gòngyíng.",
        "en": "Stable long-term supply chains depend on mutually beneficial partnership between supplier and buyer.",
        "vi": "Xây dựng chuỗi cung ứng bền vững nhờ hợp tác cùng thắng giữa nhà xưởng và đối tác thu mua."
      },
      {
        "zh": "中越边境智慧口岸建设将为两国贸易商与物流企业带来多方共赢。",
        "pinyin": "Zhōng-Yuè biānjìng zhìhuì kǒu'àn jiànshè jiāng wéi liǎngguó màoyìshāng yǔ wùliú qǐyè dàilái duōfāng gòngyíng.",
        "en": "Smart border ports bring multi-party win-win benefits for Sino-Vietnamese traders.",
        "vi": "Xây dựng cửa khẩu thông minh Việt – Trung mang lại lợi ích cùng thắng cho doanh nghiệp hai nước."
      }
    ]
  },
  {
    "id": "qiaoliang_bridge",
    "hanzi": "桥梁",
    "traditional": "橋梁",
    "pinyin": "qiáoliang",
    "hanViet": "KIỀU LƯƠNG (CÂY CẦU)",
    "liushuType": "形声 · 形声",
    "liushuCategory": "形声 · 形声",
    "level": "HSK 3-4",
    "topicTag": "HSK 4-5 / Giao lưu",
    "pos": "n.",
    "english": "Bridge (Physical Structure & Cultural Connector)",
    "vietnamese": "Cây cầu bắc qua sông / Nhịp cầu kết nối văn hóa (Hán-Việt: KIỀU LƯƠNG (CÂY CẦU))",
    "radical": "木+乔 (Kiều - cầu gỗ vồng cao như cầu Triệu Châu) + 氵+木+刃 (Lương - cầu đà bắc suối)",
    "radicalAnalysis": "木+乔 (Kiều - cầu gỗ vồng cao như cầu Triệu Châu) + 氵+木+刃 (Lương - cầu đà bắc suối)",
    "etymologyAndRadicals": "形声 · 形声 — Bộ thủ: 木+乔 (Kiều - cầu gỗ vồng cao như cầu Triệu Châu) + 氵+木+刃 (Lương - cầu đà bắc suối). Hai từ hợp ghép chỉ cây cầu nối đôi bờ (桥梁) — biểu tượng giao lưu văn hiến Việt–Trung.",
    "components": "Hai từ hợp ghép chỉ cây cầu nối đôi bờ (桥梁) — biểu tượng giao lưu văn hiến Việt–Trung.",
    "context": "Tiêu biểu: Cầu đá Triệu Châu thời Tùy (Hà Bắc), Cầu Nhật Bản Hội An và nền tảng số học thuật đa văn hóa.",
    "related": [
      "文化桥梁",
      "赵州桥",
      "互联互通"
    ],
    "mnemonic": "Đà gỗ bắc qua suối (梁) nối vồng cao vượt sông (桥) kéo hai bờ lại gần nhau.",
    "examples": [
      {
        "zh": "语言与博物馆数字档案是促进跨文明理解的重要桥梁。",
        "pinyin": "Yǔyán yǔ bówùguǎn shùzì dàng'àn shì cùjìn kuà wénmíng lǐjiě de zhòngyào qiáoliáng.",
        "en": "Language and digital museum archives serve as vital bridges for cross-civilizational understanding.",
        "vi": "Ngôn ngữ và bảo tàng số là những nhịp cầu quan trọng thúc đẩy thấu hiểu liên văn minh."
      },
      {
        "zh": "河北安济桥（赵州桥）历经一千四百年洪水地震仍巍然屹立。",
        "pinyin": "Héběi Ānjìqiáo (Zhàozhōuqiáo) lìjīng yīqiān sìbǎi nián hóngshuǐ dìzhèn réng wēirán yìlì.",
        "en": "Hebei's Zhaozhou Bridge still stands firm after 1,400 years of floods and quakes.",
        "vi": "Cầu Triệu Châu Hà Bắc trải qua 1.400 năm lũ lụt động đất vẫn đứng sừng sững."
      }
    ]
  },
  {
    "id": "jiaoliu_exchange",
    "hanzi": "交流",
    "traditional": "交流",
    "pinyin": "jiāoliú",
    "hanViet": "GIAO LƯU",
    "liushuType": "象形 · 会意",
    "liushuCategory": "象形 · 会意",
    "level": "HSK 3-4",
    "topicTag": "HSK 3-4 / Văn hóa",
    "pos": "v./n.",
    "english": "Exchange / Mutual Interaction",
    "vietnamese": "Giao lưu, trao đổi hai chiều (Hán-Việt: GIAO LƯU)",
    "radical": "交 (Đan chéo chân/giao nhau) + 氵+㐬 (Lưu - dòng nước tuôn chảy)",
    "radicalAnalysis": "交 (Đan chéo chân/giao nhau) + 氵+㐬 (Lưu - dòng nước tuôn chảy)",
    "etymologyAndRadicals": "象形 · 会意 — Bộ thủ: 交 (Đan chéo chân/giao nhau) + 氵+㐬 (Lưu - dòng nước tuôn chảy). Sự hòa dòng hai chiều (流) gặp gỡ đan kết lẫn nhau (交).",
    "components": "Sự hòa dòng hai chiều (流) gặp gỡ đan kết lẫn nhau (交).",
    "context": "Từ giao lưu Con đường Tơ lụa cổ đại đến hội thảo học thuật, thương mại và du lịch Việt–Trung ngày nay.",
    "related": [
      "文化交流",
      "经贸往来",
      "留学"
    ],
    "mnemonic": "Hai ngả gặp gỡ đan kết (交) hòa chung dòng chảy lưu thông thông suốt (流).",
    "examples": [
      {
        "zh": "文明因交流而多彩，文明因互鉴而丰富。",
        "pinyin": "Wénmíng yīn jiāoliú ér duōcǎi, wénmíng yīn hùjiàn ér fēngfù.",
        "en": "Civilizations flourish through exchange and grow richer through mutual learning.",
        "vi": "Văn minh nhờ giao lưu mà rực rỡ đa sắc, nhờ soi rọi lẫn nhau mà phong phú."
      },
      {
        "zh": "越来越多越南青年通过奖学金赴华交流学习汉语与国际贸易。",
        "pinyin": "Yuèláiyuè duō Yuènán qīngnián tōngguò jiǎngxuéjīn fù Huá jiāoliú xuéxí Hànyǔ yǔ guójì màoyì.",
        "en": "Growing numbers of Vietnamese youth go to China on scholarships to study language and trade.",
        "vi": "Ngày càng nhiều sinh viên Việt Nam nhận học bổng giao lưu học tập Hán ngữ và thương mại quốc tế."
      }
    ]
  },
  {
    "id": "hujian_mutual",
    "hanzi": "互鉴",
    "traditional": "互鑑",
    "pinyin": "hùjiàn",
    "hanViet": "HỖ GIÁM",
    "liushuType": "象形 · 形声",
    "liushuCategory": "象形 · 形声",
    "level": "HSK 5-6",
    "topicTag": "HSK 6 / Văn hóa",
    "pos": "v./n.",
    "english": "Mutual Learning / Mirroring One Another",
    "vietnamese": "Soi gương lẫn nhau cùng tiến bộ (Hán-Việt: HỖ GIÁM)",
    "radical": "互 (Hai móc đan cài vào nhau) + 钅+监 (Giám - chậu nước/gương đồng soi mặt)",
    "radicalAnalysis": "互 (Hai móc đan cài vào nhau) + 钅+监 (Giám - chậu nước/gương đồng soi mặt)",
    "etymologyAndRadicals": "象形 · 形声 — Bộ thủ: 互 (Hai móc đan cài vào nhau) + 钅+监 (Giám - chậu nước/gương đồng soi mặt). Hai phía cài móc trao đổi (互) dùng chiếc gương đồng sáng (鉴) soi chiếu học tập ưu điểm của nhau.",
    "components": "Hai phía cài móc trao đổi (互) dùng chiếc gương đồng sáng (鉴) soi chiếu học tập ưu điểm của nhau.",
    "context": "Khái niệm chuẩn xác thay cho mô hình 'đồng hóa' hay 'một chiều': Việt–Trung học hỏi hai chiều.",
    "related": [
      "文明互鉴",
      "鉴古知今",
      "取长补短"
    ],
    "mnemonic": "Hai bên đan kết (互) soi chung một chiếc gương đồng trong suốt (鉴).",
    "examples": [
      {
        "zh": "以史为鉴可知兴替，以邻为鉴可明得失。",
        "pinyin": "Yǐ shǐ wéi jiàn kě zhī xīngtì, yǐ lín wéi jiàn kě míng déshī.",
        "en": "Taking history as a mirror reveals rise and fall; learning from neighbors clarifies gains.",
        "vi": "Lấy sử làm gương biết hưng suy; lấy lân bang soi rọi hiểu được cái hay dở."
      },
      {
        "zh": "中越传统法律与陶瓷工艺史研究充分体现了东亚文明交流互鉴。",
        "pinyin": "Zhōng-Yuè chuántǒng fǎlǜ yǔ táocí gōngyìshǐ yánjiū chōngfèn tǐxiàn le Dōngyà wénmíng jiāoliú hùjiàn.",
        "en": "Studies of Sino-Vietnamese legal and ceramic history showcase East Asian mutual learning.",
        "vi": "Nghiên cứu sử luật pháp và gốm sứ Việt–Trung thể hiện rõ sự giao lưu hỗ giám Đông Á."
      }
    ]
  },
  {
    "id": "hainabaichuan_inclusive",
    "hanzi": "海纳百川",
    "traditional": "海納百川",
    "pinyin": "hǎi nà bǎi chuān",
    "hanViet": "HẢI NẠP BÁCH XUYÊN",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 6 / Thành ngữ",
    "pos": "idiom",
    "english": "The Ocean Admits a Hundred Rivers (Open Inclusiveness)",
    "vietnamese": "Biển lớn dung nạp trăm dòng sông (tâm thế bao dung cầu thị) (Hán-Việt: HẢI NẠP BÁCH XUYÊN)",
    "radical": "海 (Biển lớn) + 纳 (Thu nhận) + 百 (Trăm) + 川 (Sông suối)",
    "radicalAnalysis": "海 (Biển lớn) + 纳 (Thu nhận) + 百 (Trăm) + 川 (Sông suối)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 海 (Biển lớn) + 纳 (Thu nhận) + 百 (Trăm) + 川 (Sông suối). Nước biển ở vị trí thấp và rộng nên thâu nạp được mọi dòng chảy từ muôn ngả đổ về.",
    "components": "Nước biển ở vị trí thấp và rộng nên thâu nạp được mọi dòng chảy từ muôn ngả đổ về.",
    "context": "Câu đối nổi tiếng của Lâm Tắc Từ: 'Hải nạp bách xuyên, hữu dung nãi đại'.",
    "related": [
      "有容乃大",
      "兼收并蓄",
      "海派文化"
    ],
    "mnemonic": "Biển cả rộng sâu (海) thu nạp trọn vẹn (纳) hàng trăm dòng sông đổ về (百川).",
    "examples": [
      {
        "zh": "海纳百川，有容乃大；壁立千仞，无欲则刚。",
        "pinyin": "Hǎi nà bǎi chuān, yǒu róng nǎi dà; bìlì qiānrèn, wú yù zé gāng.",
        "en": "Vast is the ocean accepting a hundred rivers; unshakeable is the cliff free of selfish desire.",
        "vi": "Biển rộng nạp trăm sông, nhờ bao dung nên lớn; vách đứng nghìn trượng, không tham dục tất vững."
      },
      {
        "zh": "上海海派文化正因为“海纳百川”，才得以融合江南传统与现代都市气质。",
        "pinyin": "Shànghǎi Hǎipài wénhuà zhèng yīnwèi 'hǎi nà bǎi chuān', cái déyǐ rónghé Jiāngnán chuántǒng yǔ xiàndài dūshì qìzhì.",
        "en": "Shanghai's Haipai culture blended Jiangnan heritage with modern life through broad inclusiveness.",
        "vi": "Văn hóa Hải Phái Thượng Hải nhờ tinh thần Hải nạp bách xuyên mà dung hợp được truyền thống với hiện đại."
      }
    ]
  },
  {
    "id": "shishiqiushi_truth",
    "hanzi": "实事求是",
    "traditional": "實事求是",
    "pinyin": "shíshì qiúshì",
    "hanViet": "THỰC SỰ CẦU THỊ",
    "liushuType": "会意 · 指事",
    "liushuCategory": "会意 · 指事",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Học thuật Cao cấp",
    "pos": "idiom",
    "english": "Seek Truth from Facts",
    "vietnamese": "Tìm chân lý từ sự thật thực chứng (Hán-Việt: THỰC SỰ CẦU THỊ)",
    "radical": "宀+贯 (Thực - đầy ắp dưới mái) + 事 (Sự việc) + 求 (Tìm cầu) + 是 (Đúng đắn chuẩn mặt trời)",
    "radicalAnalysis": "宀+贯 (Thực - đầy ắp dưới mái) + 事 (Sự việc) + 求 (Tìm cầu) + 是 (Đúng đắn chuẩn mặt trời)",
    "etymologyAndRadicals": "会意 · 指事 — Bộ thủ: 宀+贯 (Thực - đầy ắp dưới mái) + 事 (Sự việc) + 求 (Tìm cầu) + 是 (Đúng đắn chuẩn mặt trời). Khảo cứu xuất phát từ sự việc thực tế khách quan (实事) để tìm ra quy luật chân xác (求是).",
    "components": "Khảo cứu xuất phát từ sự việc thực tế khách quan (实事) để tìm ra quy luật chân xác (求是).",
    "context": "Xuất phát từ 《Hán Thư – Hà Gian Hiến Vương truyện》, trở thành phương châm học phái Khảo cứ & Hồ Tương.",
    "related": [
      "考据",
      "求真务实",
      "实证精神"
    ],
    "mnemonic": "Từ việc thật khách quan (实事) truy tìm cho ra lẽ đúng chuẩn xác (求是).",
    "examples": [
      {
        "zh": "《汉书》赞河间献王修学好古，实事求是。",
        "pinyin": "'Hànshū' zàn Héjiān Xiànwáng xiūxué hàogǔ, shíshì qiúshì.",
        "en": "The Book of Han praised Prince Xian of Hejian for loving antiquity and seeking truth from facts.",
        "vi": "《Hán Thư》 ca ngợi Hà Gian Hiến Vương ham học chuộng cổ, thực sự cầu thị."
      },
      {
        "zh": "做学问与做市场调研都必须坚持实事求是的数据实证态度。",
        "pinyin": "Zuò xuéwèn yǔ zuò shìchǎng diàoyán dōu bìxū jiānchí shíshì qiúshì de shùjù shízhèng tàidù.",
        "en": "Both scholarly inquiry and market research require seeking truth from verified data.",
        "vi": "Làm nghiên cứu học thuật cũng như khảo sát thị trường đều phải giữ thái độ Thực sự cầu thị."
      }
    ]
  },
  {
    "id": "tuichenchuxin_renew",
    "hanzi": "推陈出新",
    "traditional": "推陳出新",
    "pinyin": "tuī chén chū xīn",
    "hanViet": "THÔI TRẦN XUẤT TÂN",
    "liushuType": "形声 · 会意",
    "liushuCategory": "形声 · 会意",
    "level": "HSK 5-6",
    "topicTag": "HSK 6 / Thành ngữ",
    "pos": "idiom",
    "english": "Weed Through the Old to Bring Forth the New",
    "vietnamese": "Gạn đục khơi trong, kế thừa cái cũ để sáng tạo cái mới (Hán-Việt: THÔI TRẦN XUẤT TÂN)",
    "radical": "扌+隹 (Thôi - đẩy bỏ) + 陈 (Cũ kỹ) + 出 (Sinh ra) + 斤+木+立 (Tân - chặt gỗ làm mới)",
    "radicalAnalysis": "扌+隹 (Thôi - đẩy bỏ) + 陈 (Cũ kỹ) + 出 (Sinh ra) + 斤+木+立 (Tân - chặt gỗ làm mới)",
    "etymologyAndRadicals": "形声 · 会意 — Bộ thủ: 扌+隹 (Thôi - đẩy bỏ) + 陈 (Cũ kỹ) + 出 (Sinh ra) + 斤+木+立 (Tân - chặt gỗ làm mới). Đẩy bỏ phần cỗi cũ xơ cứng (推陈) để làm nảy nở sinh lực sáng tạo mới mẻ (出新).",
    "components": "Đẩy bỏ phần cỗi cũ xơ cứng (推陈) để làm nảy nở sinh lực sáng tạo mới mẻ (出新).",
    "context": "Triết lý kế thừa sống động của nghệ thuật Thư họa, Quốc triều (Guochao) và đổi mới doanh nghiệp.",
    "related": [
      "守正创新",
      "革故鼎新",
      "文创"
    ],
    "mnemonic": "Đẩy gạt bỏ vỏ cũ lỗi thời (推陈) để bật ra sức sống mới mẻ (出新).",
    "examples": [
      {
        "zh": "文化传承绝非僵化复古，而贵在在古典底蕴上推陈出新。",
        "pinyin": "Wénhuà chuánchéng juéfēi jiānghuà fùgǔ, ér guìzài zài gǔdiǎn dǐyùn shàng tuī chén chū xīn.",
        "en": "Cultural transmission is never stiff archaism; its strength lies in innovating atop classic roots.",
        "vi": "Kế thừa văn hóa không phải phục cổ cứng nhắc, mà quý ở chỗ trên nền cổ điển biết thôi trần xuất tân."
      },
      {
        "zh": "当代设计将青花瓷纹样与环保材料结合，正是推陈出新的范例。",
        "pinyin": "Dāngdài shèjì jiāng qīnghuácí wényàng yǔ huánbǎo cáiliào jiéhé, zhèngshì tuī chén chū xīn de fànlì.",
        "en": "Modern design blending blue-and-white motifs with eco materials exemplifies renewing tradition.",
        "vi": "Thiết kế đương đại đưa hoa văn Thanh Hoa lên vật liệu sinh thái là ví dụ tiêu biểu của Thôi trần xuất tân."
      }
    ]
  },
  {
    "id": "zhongyan-wudian",
    "hanzi": "重檐庑殿",
    "traditional": "重檐廡殿",
    "pinyin": "chóngyán wǔdiàn",
    "hanViet": "TRỌNG DIÊM VŨ ĐIỆN",
    "liushuType": "会意 · 形声",
    "liushuCategory": "Hội ý & Hình thanh (会意 / 形声)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Kiến trúc Cung đình",
    "pos": "n.",
    "english": "Double-Eaved Hip Roof (Imperial Highest Grade)",
    "vietnamese": "Trọng diêm vũ điện — Thức mái 2 tầng 4 mái dốc tối thượng (Hán-Việt: TRỌNG DIÊM VŨ ĐIỆN)",
    "radical": "重 (Trọng: hai tầng chồng) + 檐 (Mộc 木: diềm mái) + 庑 (Nghiễm 广: mái hiên bốn phía) + 殿 (Cung điện)",
    "radicalAnalysis": "重 (Trọng: hai tầng chồng lên nhau); 檐 (Diêm - bộ Mộc 木: diềm mái hiên gỗ); 庑 (Vũ - bộ Nghiễm 广: mái hiên rộng che bốn phía); 殿 (Điện: cung điện uy nghi).",
    "etymologyAndRadicals": "会意 / 形声 — 重 (hai tầng chồng xếp); 檐 (bộ Mộc 木 chỉ rìa mái gỗ); 庑 (bộ Nghiễm 广 chỉ hành lang bốn mặt); 殿 (chính điện triều đình).",
    "components": "Thức mái 2 tầng 4 mái dốc — cấp bậc mái tối thượng trong kiến trúc cổ Trung Hoa, chỉ dành riêng cho Hoàng đế tại Điện Thái Hòa.",
    "context": "Trên toàn quần thể Tử Cấm Thành, Điện Thái Hòa mang kết cấu Trọng diêm vũ điện kèm đủ 10 linh thú nóc mái — quy chế độc tôn không cung điện nào khác vượt qua.",
    "related": ["斗拱", "须弥座", "太和殿"],
    "mnemonic": "Hai tầng mái chồng (重檐) đổ xuống bốn phía cung điện (庑殿) tạo uy nghi bậc nhất Thiên tử.",
    "examples": [
      {
        "zh": "太和殿采用最高等级的重檐庑殿顶，彰显皇权至上。",
        "pinyin": "Tàihédiàn cǎiyòng zuìgāo děngjí de chóngyán wǔdiàndǐng, zhāngxiǎn huángquán zhìshàng.",
        "en": "The Hall of Supreme Harmony adopts the highest-ranking double-eaved hip roof to signify supreme authority.",
        "vi": "Điện Thái Hòa dùng thức mái Trọng diêm vũ điện bậc cao nhất nhằm biểu thị uy quyền tối thượng."
      }
    ]
  },
  {
    "id": "jinxiang-doudicao",
    "hanzi": "金厢斗底槽",
    "traditional": "金廂斗底槽",
    "pinyin": "jīnxiāng dǒudǐcáo",
    "hanViet": "KIM SƯƠNG ĐẤU ĐỂ TÀO",
    "liushuType": "会意 · 营造法式",
    "liushuCategory": "Hội ý chuyên ngành Do tạo Pháp thức (营造法式)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Kiến trúc Cung đình",
    "pos": "n.",
    "english": "Concentric Double-Colonnade Floorplan Grid",
    "vietnamese": "Kim sương đấu đê tào — Mặt bằng 2 vòng cột đồng tâm (Hán-Việt: KIM SƯƠNG ĐẤU ĐỂ TÀO)",
    "radical": "金 (Kim) + 厢 (Khung viền bao quanh) + 斗底槽 (Rãnh đáy đấu vuông vức khép kín)",
    "radicalAnalysis": "金厢 (Kim sương: khung viền quý giá bao quanh); 斗底槽 (Đấu đê tào: rãnh không gian khép kín vuông vức như đáy chiếc đấu gỗ).",
    "etymologyAndRadicals": "营造法式会意 — 金厢 (vành đai sảnh ngoài bọc lấy lõi chính); 斗底槽 (lòng chậu vuông hình đáy chiếc đấu gỗ tạo bởi vòng cột trong).",
    "components": "Bố cục mặt bằng hai vòng cột đồng tâm (vòng cột hiên ngoài và vòng cột cái chịu lực bên trong) tạo thành hành lang bao quanh tâm điện.",
    "context": "Chuẩn mực mặt bằng cổ điển trích từ Do tạo Pháp thức (1103), giúp phân tách hành lang hộ vệ quanh ngai vàng trong Điện Thái Hòa và Phụng Thiên Điện.",
    "related": ["斗拱", "营造法式", "紫禁城"],
    "mnemonic": "Vành ngoài bao bọc lõi vuông như đáy chiếc đấu (斗底槽) bằng hai vòng cột đồng tâm.",
    "examples": [
      {
        "zh": "金厢斗底槽是《营造法式》中最高规格的殿堂柱网布局。",
        "pinyin": "Jīnxiāng dǒudǐcáo shì 《Yíngzào Fǎshì》 zhōng zuìgāo guīgé de diàntáng zhùwǎng bùjú.",
        "en": "The concentric double-colonnade grid is the premier column layout codified in the Yingzao Fashi.",
        "vi": "Kim sương đấu đê tào là bố cục lưới cột cấp cao nhất được ghi chép trong Do tạo Pháp thức."
      }
    ]
  },
  {
    "id": "xumizuo",
    "hanzi": "须弥座",
    "traditional": "須彌座",
    "pinyin": "xūmízuò",
    "hanViet": "TU DI TỌA",
    "liushuType": "音译 · 形声",
    "liushuCategory": "Phiên âm Phạn ngữ kết hợp Hình thanh (梵汉合璧)",
    "level": "Advanced / Academic Chinese",
    "topicTag": "Kiến trúc Cung đình",
    "pos": "n.",
    "english": "Sumeru Pedestal (Three-Tier White Marble Plinth)",
    "vietnamese": "Tu Di tọa — Bệ đá Hán Bạch Ngọc 3 tầng Tam Đài (Hán-Việt: TU DI TỌA)",
    "radical": "须弥 (Phiên âm núi Tu Di / Sumeru) + 座 (Bộ Nghiễm 广 + Tọa 坐: bệ đỡ vững chãi)",
    "radicalAnalysis": "须弥 (Tu Di: phiên âm từ núi vũ trụ Sumeru); 座 (Tọa - bộ Nghiễm 广 + chữ Tọa 坐: bệ đá vững chãi nâng đỡ kiến trúc).",
    "etymologyAndRadicals": "梵汉合璧 — 须弥 (âm Hán-Phạn chỉ núi thiêng Sumeru trung tâm vũ trụ); 座 (bộ Nghiễm 广 + chữ Tọa 坐 chỉ bệ ngai đá giật cấp thu eo ở giữa).",
    "components": "Hệ đài móng đá cẩm thạch trắng Hán Bạch Ngọc 3 tầng xếp chồng nâng đỡ Tam Đại Điện, biểu trưng cho trục vũ trụ tối cao của Thiên tử.",
    "context": "Đài Tam Đài cao 8,13 m dưới chân Tam Đại Điện ghép từ nhiều tầng Tu Di tọa giúp chống ẩm ngập hoàn toàn nhờ 1.142 đầu rồng Ly Thủ thoát nước trong 20 phút.",
    "related": ["重檐庑殿", "太和殿", "螭首"],
    "mnemonic": "Bệ đá mô phỏng hình núi thiêng Tu Di (须弥) thắt eo ở giữa để đỡ tòa bảo điện Thiên tử.",
    "examples": [
      {
        "zh": "三大殿矗立在八米高的三层汉白玉须弥座台基之上。",
        "pinyin": "Sāndàdiàn chùlì zài bāmǐ gāo de sāncéng Hànbáiyù xūmízuò táijī zhīshàng.",
        "en": "The Three Great Halls stand atop an eight-meter, three-tier white marble Sumeru terrace.",
        "vi": "Tam Đại Điện sừng sững trên đài móng Tu Di tọa đá Hán Bạch Ngọc ba tầng cao tám mét."
      }
    ]
  }
];
  NEW_150.forEach((item) => {
    if (!EXISTING_IDS.has(item.id)) {
      window.CCE_DICTIONARY.push(item);
      EXISTING_IDS.add(item.id);
    }
  });
})();
