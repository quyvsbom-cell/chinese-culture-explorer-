(function () {
  'use strict';

  function PQ(sourceZh, sourceVi, sourceEn, originalZh, pinyin, hanViet, meaningVi, meaningEn) {
    return {
      source: sourceVi + " (" + sourceZh + ")",
      sourceZh: sourceZh,
      sourceVi: sourceVi,
      sourceEn: sourceEn + " (" + sourceZh + ")",
      zh: originalZh,
      quoteZh: originalZh,
      originalZh: originalZh,
      pinyin: pinyin,
      hanViet: hanViet,
      translationVi: meaningVi,
      translationEn: meaningEn,
      meaningVi: meaningVi,
      meaningEn: meaningEn
    };
  }

  var ARTICLES_V3_PART2B = [
    {
      id: 'pre-qin-legalism-xunzi-hanfeizi',
      number: 81,
      category: 'philosophy',
      categoryLabel: 'Triết học & Tôn giáo',
      titleVi: 'Đối thoại Chính trị–Pháp trị Tiên Tần: Từ Tính Ác & Lễ Pháp (Tuân Tử) đến Pháp–Thuật–Thế (Hàn Phi Tử)',
      titleZh: '先秦政治法家对话：从荀子性恶礼法到韩非子法术势',
      titleZhTrad: '先秦政治法家對話：從荀子性惡禮法到韓非子法術勢',
      titleEn: 'Pre-Qin Political and Legalist Dialogue: From Xunzi\'s Human Nature and Ritual–Law to Han Feizi\'s Law, Statecraft, and Authority',
      readMinutes: 15,
      epistemicTag: 'Triết học Chính trị Cổ đại',
      abstract: 'Chuyên luận phân tích bước chuyển tư tưởng từ Nho gia hiện thực của Tuân Tử (khoảng 313–238 TCN) sang đỉnh cao tổng hợp Pháp gia của học trò ông là Hàn Phi Tử (khoảng 280–233 TCN), giải mã thuyết "Tính ác – Hóa tính khởi ngụy", mối quan hệ giữa Lễ và Pháp cùng tam giác quyền lực Pháp–Thuật–Thế định hình nhà nước đế quốc Trung Hoa.',
      keyTakeaways: [
        'Khác với Mạnh Tử chủ trương "Tính thiện", Tuân Tử cho rằng bản tính tự nhiên của con người là ham lợi, đố kỵ ("Tính ác"), nên cần "Lễ" và "Pháp" do thánh nhân chế tác để uốn nắn ("Hóa tính khởi ngụy").',
        'Hàn Phi Tử kế thừa tiền đề nhân tính tự lợi của Tuân Tử nhưng từ bỏ niềm tin vào giáo hóa đạo đức, hợp nhất ba nhánh Pháp gia: "Pháp" của Thương Ưởng, "Thuật" của Thân Bất Hại và "Thế" của Thận Đáo.',
        'Trong thực tiễn lịch sử từ nhà Hán về sau, triết học chính trị Trung Hoa không chọn thuần Nho hay thuần Pháp mà vận hành theo công thức tổng hợp "Ngoại Nho nội Pháp" (Dương Nho âm Pháp).'
      ],
      introduction: 'Vào hậu kỳ Chiến Quốc (thế kỷ III TCN), khi chiến tranh thôn tính giữa bảy nước lớn bước vào giai đoạn quyết định, lý tưởng "Nhân chính" phục cổ của Mạnh Tử tỏ ra khó thuyết phục các quân chủ đang cần tối đa hóa sức mạnh tài khóa và quân sự. Trong bối cảnh đó, hai bộ óc chính trị sắc sảo nhất thời Tiên Tần — thầy Tuân Tử (Tuân Huống) và học trò Hàn Phi Tử (cùng Lý Tư) — đã thực hiện cuộc chuyển đổi hệ quy chiếu quyết định: chuyển trọng tâm tư tưởng chính trị từ tu thân đạo đức nội tâm sang thiết kế thể chế khách quan, kỷ luật hành chính và kiểm soát hành vi bằng thưởng phạt minh bạch.',
      historicalBackground: 'Tuân Tử từng giữ chức Tế tửu (đứng đầu) Học cung Tắc Hạ tại nước Tề và làm Huyện lệnh Lan Lăng ở nước Sở. Chứng kiến sự bất lực của trật tự tông pháp cũ trước chiến tranh tổng lực, ông tổng hợp có phê phán nhiều học phái (Nho, Đạo, Danh gia, Pháp gia) để tái cấu trúc Nho học theo hướng duy lý, tách rời đạo đức khỏi thần ý ("Thiên hành hữu thường"). Học trò trực tiếp của ông là công tử nước Hàn — Hàn Phi — sinh ra trong một tiểu quốc liên tục bị nước Tần đe dọa; mắc tật nói lắp nhưng sở hữu văn phong sắc bén, Hàn Phi viết bộ "Hàn Phi Tử" gồm 55 thiên. Khi Tần Vương Doanh Chính đọc hai thiên "Cô Phẫn" và "Ngũ Đố", ông đã thốt lên ao ước được gặp tác giả; tuy Hàn Phi chết trong ngục nước Tần năm 233 TCN, học thuyết của ông đã trở thành kim chỉ nam kiến tạo Đế quốc Tần.',
      mainContent: [
        {
          heading: '1. Tuân Tử: "Tính ác", "Hóa tính khởi ngụy" và cầu nối Lễ – Pháp',
          body: 'Trong thiên "Tính ác", Tuân Tử phản biện trực diện Mạnh Tử: những gì sinh ra đã có là "Tính" (ham no ấm, thích lợi ích, dễ tranh giành); những điều thiện mỹ đều do học tập, rèn luyện nhân tạo mà thành gọi là "Ngụy" (nhân vi). Cũng như gỗ cong phải qua khung nắn và lửa hơ mới thẳng, con người cần hệ thống Lễ (phân định danh phận, tài nguyên để giảm xung đột) và Pháp (hình phạt cưỡng chế đối với kẻ vượt ranh giới). Điểm đột phá của Tuân Tử là đặt "Lễ" và "Pháp" song hành ("Long lễ trọng pháp"): Lễ là nền gốc của Pháp, còn Pháp là công cụ bảo vệ Lễ. Ngoài ra, trong thiên "Thiên luận", ông khẳng định Trời là tự nhiên vô tình không thưởng phạt theo đạo đức ("Thiên hành hữu thường, bất vị Nghiêu tồn, bất vị Kiệt vong"), mở đường cho tư duy duy lý thế tục.'
        },
        {
          heading: '2. Hàn Phi Tử tổng hợp tam giác quyền lực: Pháp – Thuật – Thế',
          body: 'Hàn Phi Tử đẩy lập luận về bản tính tự lợi ("Hảo lợi ố hại") của Tuân Tử đi đến tận cùng: ngay cả quan hệ vua–tôi cũng là sự tính toán lợi ích chứ không thể trông cậy vào lòng trung thành tự phát. Ông chỉ trích các tiền bối Pháp gia thiếu toàn diện — Thương Ưởng có Pháp mà thiếu Thuật, Thân Bất Hại có Thuật mà thiếu Pháp, Thận Đáo chỉ bàn Thế — rồi hợp nhất cả ba thành một chỉnh thể. Thứ nhất, "Pháp" là luật lệ thành văn công khai, rõ ràng, thưởng hậu phạt nặng, không phân biệt thân sơ quý tiện ("Hình quá bất tị đại thần, thưởng thiện bất di thất phu"). Thứ hai, "Thuật" là kỹ năng quản trị bí mật của quân chủ dùng để kiểm tra hiệu quả quan lại theo nguyên tắc "Hình danh tham đồng" (đối chiếu lời hứa chức trách với kết quả thực tế). Thứ ba, "Thế" là địa vị quyền lực thể chế khách quan, bởi ngay cả thánh nhân Nghiêu nếu là dân thường cũng không sai khiến nổi ba người, còn hôn quân Kiệt nhờ nắm quyền vị vẫn chi phối cả thiên hạ.'
        },
        {
          heading: '3. Phê phán Nho – Mặc và tư duy tiến hóa lịch sử của Pháp gia',
          body: 'Khác với tinh thần phục cổ "pháp Tiên vương" của Nho gia, Hàn Phi Tử đề xuất quan điểm lịch sử tiến hóa thực dụng trong thiên "Ngũ Đố" (Năm loài sâu mọt hại nước, trong đó ông xếp giới nho sĩ ngôn từ và hiệp khách tư nhân): "Thời thế thay đổi thì phương thức cai trị cũng phải đổi" ("Thế dị tắc sự dị"). Câu chuyện ngụ ngôn nổi tiếng "Thủ chu đãi thố" (ôm gốc cây đợi thỏ) được ông viết ra để chế giễu những ai cố áp dụng lễ chế thời Hạ–Chu vào thực tế Chiến Quốc. Ông khẳng định mục tiêu tối thượng của nhà nước là "Phú quốc cường binh" thông qua khuyến khích nông canh và quân công.'
        },
        {
          heading: '4. Di sản "Ngoại Nho nội Pháp" trong cấu trúc đế quốc Đông Á',
          body: 'Dù Pháp gia thuần túy dẫn đến sự sụp đổ nhanh chóng của nhà Tần năm 206 TCN vì thiếu tính mềm dẻo đạo đức, thực tiễn quản trị đế quốc từ Hán Tuyên Đế trở đi ("Nhà Hán vốn có chế độ riêng, pha trộn Vương đạo và Bá đạo") đã kết hợp khéo léo hai học phái: dùng Nho học làm hệ tư tưởng giáo dục, khoa cử và hợp thức hóa đạo đức ("Ngoại Nho"), nhưng vận hành bộ máy hành chính, thuế khóa, giám sát quan lại và luật hình sự theo nguyên lý Pháp–Thuật–Thế ("Nội Pháp").'
        }
      ],
      theoreticalFramework: 'Trong khoa học chính trị so sánh, Hàn Phi Tử thường được đối chiếu với Niccolò Machiavelli ("Quân Vương", 1513) và Thomas Hobbes ("Leviathan", 1651) ở phương pháp phân tích quyền lực phi đạo đức hóa (realpolitik). Tuy nhiên, khác với "Pháp quyền" hiện đại (Rule of Law — nơi luật pháp giới hạn quyền lực của chính người cầm quyền), Pháp gia Tiên Tần là mô hình "Pháp trị công cụ" (Rule by Law), nơi luật pháp là công cụ tối ưu hóa hiệu suất quản trị và củng cố quyền lực trung ương của Hoàng đế.',
      terminologyAndLiushu: [
        {
          hanzi: '法',
          pinyin: 'fǎ',
          hanViet: 'Pháp',
          liushu: 'Hội ý',
          gloss: 'Dạng cổ 灋 gồm bộ Thủy (氵: phẳng như mặt nước — công bằng), Trãi (廌: linh thú húc kẻ có tội) và Khứ (去: loại bỏ kẻ sai); chỉ luật pháp khách quan.'
        },
        {
          hanzi: '术',
          pinyin: 'shù',
          hanViet: 'Thuật',
          liushu: 'Hình thanh',
          gloss: 'Dạng phồn thể 術 gồm bộ Hành (行: con đường) và chữ Thuật (术) chỉ âm; mở rộng thành phương pháp, kỹ thuật kiểm tra và điều khiển quan lại.'
        },
        {
          hanzi: '势',
          pinyin: 'shì',
          hanViet: 'Thế',
          liushu: 'Hình thanh',
          gloss: 'Dạng phồn thể 勢 gồm chữ Nghệ (埶) và bộ Lực (力); chỉ quyền vị, thế lực khách quan gắn với ngôi vị quân chủ.'
        },
        {
          hanzi: '伪',
          pinyin: 'wěi',
          hanViet: 'Ngụy (Nhân vi)',
          liushu: 'Hình thanh / Hội ý',
          gloss: 'Gồm bộ Nhân (亻) và chữ Vi (为/為: làm); trong triết học Tuân Tử không mang nghĩa "giả dối" mà mang nghĩa "sự rèn luyện, chế tác có ý thức của con người".'
        },
        {
          hanzi: '刑',
          pinyin: 'xíng',
          hanViet: 'Hình',
          liushu: 'Hình thanh',
          gloss: 'Gồm chữ Tỉnh/Khai (开/幵) và bộ Đao (刂: dao); chỉ hình phạt pháp luật và trong cặp "Hình danh" (形名/刑名) chỉ sự đối chiếu chức danh với thực tế.'
        }
      ],
      primarySources: [
        PQ(
          '《荀子·性恶》',
          'Tuân Tử — Thiên Tính Ác',
          'Xunzi, Chapter 23: Human Nature Is Bad',
          '人之性恶，其善者伪也。',
          'Rén zhī xìng è, qí shànzhě wěi yě.',
          'Nhân chi tính ác, kỳ thiện giả ngụy dã.',
          'Bản tính tự nhiên của con người là hướng về tư lợi (ác), những điều thiện mỹ đều là kết quả của sự giáo dục, rèn luyện nhân tạo (ngụy).',
          'Human nature is bad; whatever is good in humans is the product of deliberate moral cultivation.'
        ),
        PQ(
          '《韩非子·有度》',
          'Hàn Phi Tử — Thiên Hữu Độ',
          'Han Feizi, Chapter 6: On Having Standards',
          '法不阿贵，绳不挠曲。刑过不避大臣，赏善不遗匹夫。',
          'Fǎ bù ē guì, shéng bù náo qū. Xíngguò bù bì dàchén, shǎngshàn bù yí pǐfū.',
          'Pháp bất a quý, thằng bất nạo khúc. Hình quá bất tị đại thần, thưởng thiện bất di thất phu.',
          'Pháp luật không thiên vị kẻ quyền quý, dây mực thợ mộc không uốn cong theo gỗ vẹo. Xử phạt kẻ phạm tội không né tránh đại thần, khen thưởng người làm tốt không bỏ sót dân thường.',
          'The law does not fawn upon the noble, just as the carpenter\'s inked line does not bend to crooked timber. Punishment does not spare high ministers, and reward does not overlook humble commoners.'
        )
      ],
      sinoVietnameseComparison: 'Mô hình quản trị "Ngoại Nho nội Pháp" hiện diện rõ nét trong lịch sử lập pháp Đại Việt, tiêu biểu là thời Lê Thánh Tông (trị vì 1460–1497). Trong khi triều đình đề cao Nho giáo làm quốc học qua khoa cử và Bia Tiến sĩ Văn Miếu, bộ "Quốc triều Hình luật" (Luật Hồng Đức) lại thể hiện tinh thần pháp trị nghiêm minh trong việc kiểm soát quan lại, định rõ tội danh tham nhũng, bảo vệ ruộng công và đặc biệt có những điều khoản tiến bộ về quyền thừa kế của phụ nữ mà luật Minh–Thanh không có.',
      additionalReferences: [
        'Tuân Tử, Tuân Tử Tập Giải (Vương Tiên Khiêm tập giải).',
        'Hàn Phi Tử, Hàn Phi Tử Tập Thích (Trần Kỳ Du tập thích).',
        'Yuri Pines (2012), The Everlasting Empire: The Political Culture of Ancient China and Its Imperial Legacy, Princeton University Press.'
      ],
      conclusion: 'Cuộc đối thoại giữa Tuân Tử và Hàn Phi Tử đánh dấu bước trưởng thành duy lý của tư tưởng chính trị cổ đại Trung Hoa khi đặt câu hỏi trực diện về thiết chế hóa quyền lực. Sự kết hợp giữa Lễ–Pháp của Tuân Tử và Pháp–Thuật–Thế của Hàn Phi Tử đã cung cấp bộ công cụ quản trị vận hành xuyên suốt hơn hai thiên niên kỷ lịch sử đế quốc Đông Á.'
    },
    {
      id: 'song-ming-neo-confucianism-zhu-wang',
      number: 82,
      category: 'philosophy',
      categoryLabel: 'Triết học & Tôn giáo',
      titleVi: 'Tống Minh Lý Học: Cách Vật Trí Tri (Chu Hy) vs Tri Hành Hợp Nhất – Trí Lương Tri (Vương Dương Minh) & Ảnh hưởng tại Đại Việt',
      titleZh: '宋明理学：朱熹格物致知与王阳明知行合一及对大越影响',
      titleZhTrad: '宋明理學：朱熹格物致知與王陽明知行合一及對大越影響',
      titleEn: 'Song–Ming Neo-Confucianism: Zhu Xi\'s Investigation of Things vs. Wang Yangming\'s Unity of Knowledge and Action and Their Impact in Dai Viet',
      readMinutes: 15,
      epistemicTag: 'Triết học Tống–Minh & Tư tưởng Đông Á',
      abstract: 'Chuyên luận đối chiếu hai trụ cột triết học lớn nhất của Nho học hậu kỳ — Trình–Chu Lý học (Chu Hy, 1130–1200) và Lục–Vương Tâm học (Vương Dương Minh, 1472–1529) — phân tích cuộc tranh luận về Lý–Khí, Cách Vật Trí Tri, Tri Hành Hợp Nhất và tiến trình tiếp nhận Tống Nho cùng Tâm học tại Đại Việt từ thế kỷ XV đến thế kỷ XIX.',
      keyTakeaways: [
        'Tống Minh Lý Học (Tân Nho giáo) ra đời nhằm tái thiết nền tảng siêu hình và tâm tính cho Nho giáo trước thách thức triết học sâu sắc của Phật giáo Thiền Tông và Đạo giáo thời Đường–Tống.',
        'Chu Hy tách "Lý" (quy luật phổ quát) và "Khí" (vật chất cụ thể), chủ trương "Cách vật trí tri" (nghiên cứu từng sự vật bên ngoài và kinh điển để thấu suốt Thiên lý) và đưa bộ "Tứ Thư Chương Cú Tập Chú" thành chuẩn mực khoa cử hơn 600 năm.',
        'Vương Dương Minh sau biến cố "Long Trường ngộ đạo" (1508) phản biện lối học từ chương, khẳng định "Tâm tức Lý", "Tri Hành Hợp Nhất" và "Trí Lương Tri" (mỗi cá nhân đều có sẵn lương tri đạo đức bên trong).'
      ],
      introduction: 'Nếu Nho giáo Tiên Tần (Khổng–Mạnh–Tuân) chủ yếu tập trung vào luân lý xã hội và chính trị thực tiễn, thì sang thời Tống–Minh (thế kỷ XI–XVI), các đại nho đã xây dựng nên một hệ thống bản thể luận và nhận thức luận đồ sộ gọi là Tống Minh Lý Học (Đạo học). Trung tâm của toàn bộ hệ thống này là cuộc đối thoại trí tuệ xuyên bốn thế kỷ giữa hai trường phái: Lý học hướng ngoại, trọng tri thức kinh điển của Chu Hy và Tâm học hướng nội, trọng trực giác đạo đức và hành động của Vương Dương Minh.',
      historicalBackground: 'Từ thời Nam Bắc Triều đến Đường, Phật giáo (đặc biệt là Thiền Tông và Hoa Nghiêm Tông) cùng Đạo giáo chiếm ưu thế áp đảo về triết học bản thể và tâm lý học, khiến Nho giáo có nguy cơ bị thu hẹp thành lễ nghi hình thức. Bắt đầu từ Bắc Tống Ngũ Tử (Chu Đôn Di, Thiệu Ung, Trương Tải, Trình Hạo, Trình Di), các nhà tư tưởng Nho gia đã tiếp thu có chọn lọc tư duy biện chứng của Phật–Đạo để tái diễn giải "Chu Dịch", "Đại Học", "Trung Dung" và "Mạnh Tử". Đến thời Nam Tống, Chu Hy tổng hợp thành Trình–Chu Lý học và đối thoại nổi tiếng với Lục Cửu Uyên tại "Hội nghị Nga Hồ Tự" (1175). Ba thế kỷ sau, khi Lý học dần cứng nhắc hóa thành lối học khoa cử bát cổ thời Minh, Vương Dương Minh đã mở ra cuộc cách mạng Tâm học có sức lan tỏa sâu rộng khắp Trung Quốc, Nhật Bản và Việt Nam.',
      mainContent: [
        {
          heading: '1. Trình–Chu Lý Học: Cấu trúc Lý–Khí, "Tính tức Lý" và "Cách Vật Trí Tri"',
          body: 'Chu Hy kế thừa Trình Di để xây dựng vũ trụ luận nhị nguyên thống nhất giữa "Lý" (Thái Cực — nguyên lý trật tự, quy luật đạo đức vô hình) và "Khí" (vật chất năng động tạo nên vạn vật hữu hình), với mệnh đề nổi tiếng "Lý nhất phân thù" (Lý vốn là một nhưng biểu hiện đa dạng trong muôn vật như một vầng trăng in bóng trên vạn dòng sông). Về phương pháp tu dưỡng, ông diễn giải câu "Cách vật trí tri" trong sách "Đại Học" là: phải kiên trì khảo cứu quy luật của từng sự vật, đọc kinh điển, học hỏi bên ngoài mỗi ngày cho đến khi "hoát nhiên quán thông" (bừng ngộ toàn bộ Thiên lý). Năm 1313 thời Nguyên Nhân Tông, "Tứ Thư Chương Cú Tập Chú" của Chu Hy được chọn làm đáp án chuẩn mực duy nhất cho các kỳ thi khoa cử và duy trì suốt triều Minh–Thanh.'
        },
        {
          heading: '2. Bước ngoặt "Long Trường ngộ đạo" (1508) và Tâm học Vương Dương Minh',
          body: 'Thuở trẻ, Vương Dương Minh từng làm theo lời Chu Hy: ngồi nhìn khóm trúc trước sân suốt bảy ngày để "cách vật" tìm ra Lý của cây trúc, kết quả là kiệt sức sinh bệnh mà không ngộ được gì. Năm 1506, vì dâng sớ bênh vực ngôn quan chống hoạn quan Lưu Cẩn, ông bị đánh trượng và đày làm dịch thừa tại vùng rừng núi heo hút Long Trường (Quý Châu). Trong hoàn cảnh sinh tử năm 1508, ông bừng tỉnh nhận ra chân lý không nằm ngoài bản tâm: "Thánh nhân chi đạo, ngô tính tự túc" (Đạo thánh nhân vốn đầy đủ ngay trong bản tính ta). Từ đó, ông khẳng định "Tâm tức Lý" (không có Lý nào tồn tại tách rời tâm thức con người) và "Tâm ngoại vô vật" (sự vật chỉ mang ý nghĩa khi tương tác với ý thức đạo đức của chủ thể).'
        },
        {
          heading: '3. "Tri Hành Hợp Nhất" và "Trí Lương Tri": Cách mạng đạo đức bình dân',
          body: 'Hai trụ cột thực hành của Vương Dương Minh nhắm thẳng vào căn bệnh "nói hay làm dở" của giới sĩ phu thời Minh. Thứ nhất, "Tri Hành Hợp Nhất": biết mà không làm thực chất là chưa biết; tri là khởi đầu của hành, hành là sự hoàn thành của tri ("Tri chi chân thiết đốc thực xứ tức thị hành, hành chi minh giác tinh sát xứ tức thị tri"). Thứ hai, "Trí Lương Tri": kế thừa khái niệm "Lương tri" (năng lực phân biệt thiện ác bẩm sinh) của Mạnh Tử, ông tuyên bố "Khắp đường phố đều là thánh nhân" — bất kể sĩ, nông, công, thương nếu hành động trung thực với lương tri đều có thể thành thánh. Quan điểm này giải phóng cá tính con người cuối đời Minh (phái Thái Châu, Lý Chí) và thúc đẩy tinh thần thực hành quyết đoán.'
        },
        {
          heading: '4. Ảnh hưởng của Trình–Chu Lý học và Vương học tại Đại Việt',
          body: 'Tại Đại Việt, Trình–Chu Lý học trở thành trụ cột tư tưởng chính thống từ thời Lê sơ (thế kỷ XV), được hệ thống hóa trong các kỳ thi Hội và tác phẩm của các đại nho như Lê Quý Đôn ("Vân Đài Loại Ngữ"), Ngô Thì Nhậm và thời Nguyễn. Song song đó, tinh thần thực tiễn và trực giác đạo đức gần gũi với Tâm học – Thiền học cũng thấm sâu vào tầng lớp trí thức Việt Nam, đặc biệt bùng nổ trở lại đầu thế kỷ XX qua phong trào Duy Tân (Phan Bội Châu, Phan Châu Trinh) chịu ảnh hưởng từ làn sóng "Dương Minh học" góp phần làm nên cuộc Minh Trị Duy Tân tại Nhật Bản.'
        }
      ],
      theoreticalFramework: 'Từ góc độ triết học nhận thức luận, cuộc tranh luận Chu Hy – Vương Dương Minh phản ánh hai mô hình tiếp cận chân lý kinh điển: Chu Hy đại diện cho chủ nghĩa duy lý khách quan – tích lũy (objective rationalism, đi từ nghiên cứu sự vật và văn bản để đạt đạo đức), còn Vương Dương Minh đại diện cho chủ nghĩa duy tâm đạo đức – hiện tượng học hành động (moral idealism & pragmatism, đặt chủ thể ý thức và thực tiễn đạo đức làm điểm xuất phát).',
      terminologyAndLiushu: [
        {
          hanzi: '理',
          pinyin: 'lǐ',
          hanViet: 'Lý',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Ngọc (王/玉: đá ngọc) và chữ Lý (里) chỉ âm; nghĩa gốc là mài giũa theo đường vân tự nhiên của ngọc, mở rộng thành quy luật vũ trụ và đạo lý.'
        },
        {
          hanzi: '气',
          pinyin: 'qì',
          hanViet: 'Khí',
          liushu: 'Tượng hình / Hình thanh',
          gloss: 'Dạng phồn thể 氣 gồm mây hơi (气) và gạo (米); trong Tống học chỉ vật chất – năng lượng sống động cấu thành vạn vật hữu hình.'
        },
        {
          hanzi: '格',
          pinyin: 'gé',
          hanViet: 'Cách',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Mộc (木) và chữ Các (各) chỉ âm; Chu Hy giảng là "đến tận cùng để khảo cứu" (cách vật), còn Vương Dương Minh giảng là "uốn nắn cho ngay thẳng" (chính tâm).'
        },
        {
          hanzi: '良',
          pinyin: 'liáng',
          hanViet: 'Lương',
          liushu: 'Tượng hình / Hội ý',
          gloss: 'Nghĩa gốc là tốt đẹp, thuần khiết; trong "Lương tri" (良知) chỉ năng lực nhận biết thiện ác bẩm sinh không cần suy tính tư lợi.'
        },
        {
          hanzi: '诚',
          pinyin: 'chéng',
          hanViet: 'Thành',
          liushu: 'Hình thanh / Hội ý',
          gloss: 'Gồm bộ Ngôn (讠/言: lời nói) và chữ Thành (成: hoàn thành); chỉ sự chân thành nhất quán giữa tâm ý, lời nói và hành động trong "Trung Dung" và Tống học.'
        }
      ],
      primarySources: [
        PQ(
          '《传习录·上》（王阳明）',
          'Truyền Tập Lục — Quyển Thượng (Vương Dương Minh)',
          'Instructions for Practical Living (Chuanxilu), Part I — Wang Yangming',
          '知是行之始，行是知之成。未有知而不行者。知而不行，只是未知。',
          'Zhī shì xíng zhī shǐ, xíng shì zhī zhī chéng. Wèiyǒu zhī ér bùxíng zhě. Zhī ér bùxíng, zhǐshì wèizhī.',
          'Tri thị hành chi thủy, hành thị tri chi thành. Vị hữu tri nhi bất hành giả. Tri nhi bất hành, chỉ thị vị tri.',
          'Biết là khởi đầu của làm, làm là sự hoàn thành của biết. Chưa từng có ai thực sự biết mà không làm; biết mà không làm thì thực chất là chưa biết.',
          'Knowledge is the beginning of action; action is the completion of knowledge. There have never been people who truly know yet do not act; those who claim to know without acting simply do not yet know.'
        ),
        PQ(
          '《朱子语类·卷一》（朱熹）',
          'Chu Tử Ngữ Loại — Quyển 1 (Chu Hy)',
          'Classified Conversations of Master Zhu (Zhuzi Yulei), Ch. 1',
          '天下未有无理之气，亦未有无气之理。',
          'Tiānxià wèiyǒu wúlǐ zhī qì, yì wèiyǒu wúqì zhī lǐ.',
          'Thiên hạ vị hữu vô lý chi khí, diệc vị hữu vô khí chi lý.',
          'Trong thiên hạ chưa từng có Khí nào tồn tại mà không có Lý, cũng chưa từng có Lý nào tồn tại mà không nương tựa vào Khí.',
          'Under Heaven there has never been qi without principle (li), nor has there ever been principle without qi.'
        )
      ],
      sinoVietnameseComparison: 'Khác với Trung Quốc thời Minh–Thanh nơi Lý học Chu Hy đôi khi dẫn tới sự khép kín về mặt giáo điều, các học giả Đại Việt như Lê Quý Đôn (1726–1784) trong "Vân Đài Loại Ngữ" đã kế thừa tinh thần "Cách vật trí tri" của Chu Hy theo hướng thực chứng bách khoa (khảo sát địa lý, nông nghiệp, sinh vật, điển chế nước Nam), đồng thời nhiều trí thức cuối thế kỷ XIX–đầu XX lại tìm thấy ở "Tri Hành Hợp Nhất" của Vương Dương Minh nguồn năng lượng tinh thần cho hành động cứu nước và canh tân giáo dục.',
      additionalReferences: [
        'Chu Hy, Tứ Thư Chương Cú Tập Chú (四书章句集注).',
        'Vương Dương Minh, Truyền Tập Lục (传习录), bản dịch tiếng Anh của Wing-tsit Chan (1963), Columbia University Press.',
        'Trần Trọng Kim (1930), Nho Giáo, NXB Văn học tái bản.'
      ],
      conclusion: 'Tống Minh Lý Học đã nâng Nho giáo thành một hệ thống triết học hoàn chỉnh đủ sức đối thoại bình đẳng với Phật giáo và Đạo giáo. Hai cực tư duy bổ trợ nhau — phương pháp khảo cứu kỷ luật của Chu Hy và tinh thần lương tri hành động của Vương Dương Minh — vẫn giữ nguyên giá trị gợi mở cho phương pháp học tập và đạo đức thực tiễn ngày nay.'
    },
    {
      id: 'chinese-chan-buddhism-aesthetics',
      number: 83,
      category: 'philosophy',
      categoryLabel: 'Triết học & Tôn giáo',
      titleVi: 'Thiền Tông Trung Hoa: Đạt Ma, Lục Tổ Đàn Kinh, Ngũ Gia Thất Tông & Mỹ học "Bất lập văn tự" trong Thủy mặc–Trà đạo',
      titleZh: '中国禅宗：达摩、《六祖坛经》、五家七宗与水墨茶道美学',
      titleZhTrad: '中國禪宗：達摩、《六祖壇經》、五家七宗與水墨茶道美學',
      titleEn: 'Chinese Chan Buddhism: Bodhidharma, the Platform Sutra, the Five Houses, and the Aesthetics of Ink Wash and Tea',
      readMinutes: 15,
      epistemicTag: 'Triết học Phật giáo & Mỹ học Đông Á',
      abstract: 'Chuyên luận khảo cứu tiến trình bản địa hóa Phật giáo Ấn Độ thành Thiền Tông Trung Hoa — từ Bồ Đề Đạt Ma và cuộc cách mạng "Đốn ngộ" của Lục Tổ Huệ Năng trong "Lục Tổ Đàn Kinh", sự phân nhánh Ngũ Gia Thất Tông thời Đường–Tống, đến tác động quyết định của mỹ học Thiền lên hội họa Thủy mặc văn nhân và Trà đạo Đông Á.',
      keyTakeaways: [
        'Thiền Tông (Chan) kết hợp tư tưởng Phật tính Đại thừa Ấn Độ với tinh thần tự nhiên, trực giác của Đạo gia Trang Tử, đề xướng bốn câu cốt lõi: "Giáo ngoại biệt truyền, bất lập văn tự, trực chỉ nhân tâm, kiến tính thành Phật".',
        'Lục Tổ Huệ Năng (638–713) qua "Pháp Bảo Đàn Kinh" — bộ kinh Phật duy nhất do một vị sư Trung Quốc thuyết giảng được tôn xưng là "Kinh" — đã đưa tu hành ra khỏi kinh viện để hòa vào lao động đời thường ("Bách Trượng thanh quy: Nhất nhật bất tác, nhất nhật bất thực").',
        'Mỹ học Thiền đề cao tính trực giác, giản lược, ngẫu hứng và khoảng trống ("Lưu bạch"), trực tiếp sản sinh hội họa Thủy mặc phá mặc (Vương Duy, Lương Khải, Mục Khê), thơ thiền và triết lý "Trà Thiền nhất vị".'
      ],
      introduction: 'Trong tất cả các tông phái Phật giáo truyền vào Trung Quốc, Thiền Tông là sản phẩm kết tinh độc đáo và sâu sắc nhất của sự đối thoại văn minh Ấn–Hoa. Không dừng lại ở việc dịch thuật kinh điển Phạn ngữ như Duy Thức Tông hay Thiên Thai Tông, Thiền Tông đã chuyển hóa tận gốc phương thức tu tập từ tọa thiền khổ hạnh biệt lập sang tỉnh thức ngay giữa đời sống hằng ngày — và từ Trung Quốc lan tỏa mạnh mẽ sang Việt Nam (các phái Tỳ Ni Đa Lưu Chi, Vô Ngôn Thông, Thảo Đường, Trúc Lâm), Triều Tiên (Seon) và Nhật Bản (Zen).',
      historicalBackground: 'Theo truyền thừa cổ điển, khoảng đầu thế kỷ VI (niên hiệu Phổ Thông nhà Lương), cao tăng Ấn Độ Bồ Đề Đạt Ma sang Quảng Châu rồi lên phương Bắc diện bích chín năm tại chùa Thiếu Lâm (Tung Sơn), truyền y bát qua các tổ Huệ Khả, Tăng Xán, Đạo Tín và Ngũ Tổ Hoằng Nhẫn (núi Hoàng Mai, Hồ Bắc). Nửa sau thế kỷ VII, sự phân chia giữa Bắc Tông của Thần Tú ("Tiệm ngộ" — lau bụi trên gương mỗi ngày) và Nam Tông của Huệ Năng ("Đốn ngộ" — bản tâm vốn không có bụi) đã tạo nên bước ngoặt lịch sử. Sau Loạn An Sử và pháp nạn Hội Xương (845) làm suy yếu các tông phái phụ thuộc bảo trợ triều đình và kinh sách đồ sộ, chính Thiền Tông Nam Tông với tinh thần tự túc lao động và không phụ thuộc văn tự đã vươn lên trở thành dòng chảy chủ đạo của Phật giáo Trung Hoa.',
      mainContent: [
        {
          heading: '1. Cách mạng "Đốn ngộ" trong Lục Tổ Đàn Kinh và Bách Trượng Thanh Quy',
          body: 'Xuất thân là người đốn củi mù chữ vùng Lĩnh Nam (Tân Châu, Quảng Đông), Huệ Năng (638–713) trở thành Lục Tổ và giảng pháp tại chùa Bảo Lâm (Tào Khê, Thiều Quan). Tác phẩm ghi lại lời giảng của ngài — "Lục Tổ Pháp Bảo Đàn Kinh" (văn bản cổ nhất tìm thấy tại Tạng Kinh Động Đôn Hoàng) — khẳng định mọi chúng sinh đều sẵn có Phật tính thanh tịnh; giác ngộ không đòi hỏi tích lũy chữ nghĩa hay khổ hạnh xa lánh thế gian mà nằm ở sự bừng tỉnh ngay khoảnh khắc hiện tại ("Phiền não tức Bồ đề", "Phật pháp tại thế gian, bất ly thế gian giác"). Đến thế kỷ VIII–IX, Thiền sư Bách Trượng Hoài Hải (720–814) thiết lập hệ thống tùng lâm độc lập với quy tắc "Nhất nhật bất tác, nhất nhật bất thực" (một ngày không lao động, một ngày không ăn), chuyển hóa việc gánh nước, bổ củi, trồng trà thành chính công phu thiền định.'
        },
        {
          heading: '2. Ngũ Gia Thất Tông và phương pháp Công án – Thoại đầu',
          body: 'Từ hai hệ phái lớn của Mã Tổ Đạo Nhất và Thạch Đầu Hy Thiên, Thiền Tông thời vãn Đường – Ngũ Đại – Bắc Tống nở rộ thành "Ngũ Gia" (Lâm Tế, Quy Ngưỡng, Tào Động, Vân Môn, Pháp Nhãn), sau đó Lâm Tế tách thêm Hoàng Long và Dương Kỳ tạo thành "Ngũ Gia Thất Tông". Trong đó, hai dòng sống bền bỉ nhất là Lâm Tế Tông (dùng tiếng hét "Hát" và gậy đánh "Bổng" của Lâm Tế Nghĩa Huyền cùng các "Công án" phi logic như "Con chó có Phật tính không?" để cắt đứt tư duy phân biệt nhị nguyên) và Tào Động Tông (đề cao "Mặc chiếu thiền" — ngồi tĩnh lặng sáng suốt không cưỡng cầu). Tuyển tập "Bích Nham Lục" và "Vô Môn Quan" thời Tống trở thành đỉnh cao văn học công án Thiền.'
        },
        {
          heading: '3. Mỹ học Thiền trong Hội họa Thủy mặc và Thơ ca Đường–Tống',
          body: 'Tinh thần "Bất lập văn tự" và trực giác tức thời của Thiền Tông đã giải phóng hội họa Trung Hoa khỏi lối vẽ công bút rực rỡ màu sắc của cung đình, mở ra kỷ nguyên tranh Thủy mặc đơn sắc (chỉ dùng mực đen và giấy trắng). Nhà thơ – họa sĩ Vương Duy thời Đường ("Thi trung hữu họa, họa trung hữu thi") đưa cảm thức tĩnh lặng Thiền vào thơ tuyệt cú và tranh phá mặc; đến thời Nam Tống, các họa sĩ Thiền như Lương Khải ("Lục Tổ khảm trúc đồ", "Bát mặc tiên nhân đồ" chỉ vài chục nét mực vẩy cực giản) và Mục Khê ("Lục thị đồ" — Sáu quả hồng) đã biến nét bút ngẫu hứng và khoảng trống "Lưu bạch" thành biểu đạt trực tiếp của tánh Không (Sunyata).'
        },
        {
          heading: '4. "Trà Thiền Nhất Vị" và nghi lễ tĩnh tâm trong đời sống',
          body: 'Mối nhân duyên giữa Thiền Tông và trà bắt nguồn từ nhu cầu giữ tỉnh táo khi tọa thiền ban đêm (từ thời Đường, các tự viện trồng vườn trà riêng quanh núi như Kính Sơn Tự tại Hàng Châu). Câu nói nổi tiếng "Cật trà khứ!" (Đi uống trà đi!) của Thiền sư Triệu Châu Tùng Thẩm (778–897) đã nâng hành động pha và uống trà thường nhật lên thành trải nghiệm tỉnh thức trọn vẹn — đặt nền móng cho triết lý "Trà Thiền nhất vị" (Trà và Thiền cùng một vị) và sau này theo các thiền sư Nhật Bản (Eisai, Dogen) sang hình thành nghi lễ Trà đạo Nhật Bản.'
        }
      ],
      theoreticalFramework: 'Học giả Phật học và mỹ học (như D. T. Suzuki, Hu Shih và Lý Trạch Hậu trong "Mỹ học lịch trình") nhận định Thiền Tông là cuộc cách mạng "phi hình thức hóa" và "thẩm mỹ hóa" tôn giáo sâu sắc nhất Đông Á: thay vì đặt sự cứu rỗi ở một thế giới siêu việt bên ngoài, Thiền đưa tuyệt đối tính trở về ngay trong cảm nhận giác quan thuần khiết của khoảnh khắc hiện tại — mở ra nguyên lý mỹ học "Ý tại ngôn ngoại" (ý nằm ngoài lời) chi phối toàn bộ nghệ thuật cổ điển.',
      terminologyAndLiushu: [
        {
          hanzi: '禅',
          pinyin: 'chán',
          hanViet: 'Thiền',
          liushu: 'Hình thanh (phiên âm)',
          gloss: 'Rút gọn từ "Thiền na" (禅那, phiên âm Phạn ngữ Dhyana — tĩnh lự); gồm bộ Thị (礻) và chữ Đơn (单), chỉ trạng thái tâm thức định tĩnh sáng suốt.'
        },
        {
          hanzi: '悟',
          pinyin: 'wù',
          hanViet: 'Ngộ',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Tâm đứng (忄: tâm thức) và chữ Ngô (吾: tự ngã) chỉ âm kiêm nghĩa; chỉ sự thức tỉnh trực tiếp nhận ra bản tâm ("Đốn ngộ").'
        },
        {
          hanzi: '空',
          pinyin: 'kōng',
          hanViet: 'Không',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Huyệt (穴: khoảng trống) và chữ Công (工) chỉ âm; trong Phật học dịch từ "Sunyata" (Tánh Không — mọi sự vật nương nhau sinh khởi, không có tự tính cố định).'
        },
        {
          hanzi: '机',
          pinyin: 'jī',
          hanViet: 'Cơ',
          liushu: 'Hình thanh',
          gloss: 'Dạng phồn thể 機 gồm bộ Mộc (木) và chữ Kỷ (幾); vốn chỉ lẫy nỏ nhạy bén, trong Thiền Tông chỉ "Thiền cơ" (khoảnh khắc đối đáp nhạy bén kích hoạt giác ngộ).'
        },
        {
          hanzi: '偈',
          pinyin: 'jì',
          hanViet: 'Kệ',
          liushu: 'Hình thanh (phiên âm)',
          gloss: 'Phiên âm từ "Gatha" (Phạn ngữ); bài thơ ngắn cô đọng tóm tắt tâm ấn giác ngộ, tiêu biểu là hai bài kệ truyền tâm của Thần Tú và Huệ Năng.'
        }
      ],
      primarySources: [
        PQ(
          '《六祖坛经·行由品》',
          'Lục Tổ Đàn Kinh — Phẩm Hành Do',
          'Platform Sutra of the Sixth Patriarch, Chapter 1',
          '菩提本无树，明镜亦非台。本来无一物，何处惹尘埃。',
          'Pútí běn wú shù, míngjìng yì fēi tái. Běnlái wú yīwù, héchù rě chén\'āi.',
          'Bồ đề bản vô thụ, minh kính diệc phi đài. Bản lai vô nhất vật, hà xứ nhạ trần ai.',
          'Bồ đề vốn chẳng phải cây, gương sáng cũng chẳng có đài. Xưa nay vốn không một vật, chỗ nào bám được bụi trần?',
          'Bodhi originally has no tree; the bright mirror also has no stand. Fundamentally there is not a single thing—where could dust alight?'
        ),
        PQ(
          '《五灯会元·卷四·赵州从谂禅师》',
          'Ngũ Đăng Hội Nguyên — Quyển 4 (Thiền sư Triệu Châu)',
          'Compendium of Five Lamps, Vol. 4 (Master Zhaozhou Congshen)',
          '吃茶去！',
          'Chī chá qù!',
          'Cật trà khứ!',
          'Đi uống trà đi! (Lời đáp bình dị phá bỏ mọi phân biệt cũ–mới, thánh–phàm để đưa người học trở về tỉnh thức hiện tại).',
          'Go have a cup of tea!'
        )
      ],
      sinoVietnameseComparison: 'Thiền Tông Trung Hoa có mối giao lưu trực tiếp và sâu sắc với lịch sử Phật giáo Việt Nam từ rất sớm: thế kỷ VI, Thiền sư Tỳ Ni Đa Lưu Chi (đệ tử Tam Tổ Tăng Xán) lập phái Thiền đầu tiên tại chùa Pháp Vân (Bắc Ninh); năm 820, Thiền sư Vô Ngôn Thông (đệ tử Bách Trượng Hoài Hải) sang chùa Kiến Sơ (Phù Đổng). Đỉnh cao của tiến trình bản địa hóa là năm 1299, khi Phật hoàng Trần Nhân Tông hợp nhất các dòng Thiền cũ cùng tinh thần nhập thế "Cư trần lạc đạo" sáng lập Thiền phái Trúc Lâm Yên Tử — một dòng Thiền thuần Việt gắn kết chặt chẽ giữa đạo pháp và dân tộc.',
      additionalReferences: [
        'Lục Tổ Pháp Bảo Đàn Kinh (bản Đôn Hoàng), Philip B. Yampolsky dịch và khảo chú (1967), Columbia University Press.',
        'Lý Trạch Hậu (1981), Mỹ Học Lịch Trình (美的历程).',
        'Nguyễn Lang (Thích Nhất Hạnh), Việt Nam Phật Giáo Sử Luận.'
      ],
      conclusion: 'Thiền Tông là minh chứng tiêu biểu nhất cho khả năng sáng tạo văn hóa của Trung Hoa khi chuyển hóa triết học giải thoát Ấn Độ thành nghệ thuật sống tỉnh thức giữa đời thường. Từ những câu công án sắc bén đến khoảng trắng Lưu bạch trên tranh Thủy mặc và chén trà sớm, tinh thần Thiền đã định hình thẩm mỹ tối giản có sức sống vượt qua biên giới tôn giáo trên toàn Đông Á.'
    },
    {
      id: 'mohism-logic-optics-ethics',
      number: 84,
      category: 'philosophy',
      categoryLabel: 'Triết học & Tôn giáo',
      titleVi: 'Mặc Gia: Kiêm Ái, Phi Công, Thủ Thành Vũ Trang & Phát hiện Sớm về Hình học, Quang học, Logic trong Mặc Kinh',
      titleZh: '墨家学派：兼爱非攻、守城工程与《墨经》几何光学逻辑',
      titleZhTrad: '墨家學派：兼愛非攻、守城工程與《墨經》幾何光學邏輯',
      titleEn: 'Mohism: Universal Love, Non-Aggression, Defensive Engineering, and Early Geometry, Optics, and Logic in the Mohist Canon',
      readMinutes: 14,
      epistemicTag: 'Triết học Tiên Tần & Lịch sử Khoa học',
      abstract: 'Chuyên luận giải mã học phái độc đáo nhất thời Bách Gia Chư Tử — Mặc Gia do Mặc Địch (khoảng 470–391 TCN) sáng lập: hệ thống đạo đức vị lợi "Kiêm Ái – Phi Công – Tiết Dụng", tổ chức hiệp sĩ thủ công kỷ luật thép, và những thành tựu khoa học – logic học tiên phong trong "Mặc Kinh" (lỗ kim tiểu khổng thành tượng, định nghĩa điểm–đường–tròn và phép suy luận Tam Biểu Pháp).',
      keyTakeaways: [
        'Đối lập với "ái hữu sai đẳng" (yêu thương theo bậc thân sơ gia tộc) của Nho gia, Mặc Tử chủ trương "Kiêm Ái" (yêu thương bình đẳng không phân biệt) và "Phi Công" (phản đối chiến tranh xâm lược bằng biện pháp thực tiễn: trực tiếp giúp nước nhỏ thủ thành).',
        'Sáu thiên "Mặc Kinh" (Kinh Thượng/Hạ, Kinh Thuyết Thượng/Hạ, Đại Thủ, Tiểu Thủ) trong sách "Mặc Tử" lưu giữ công trình khoa học thực nghiệm sớm bậc nhất cổ đại: giải thích định luật truyền thẳng ánh sáng qua thí nghiệm buồng tối lỗ kim ("Tiểu khổng thành tượng"), gương phẳng/lồi/lõm và nguyên lý đòn bẩy.',
        'Mặc gia xây dựng hệ thống logic học hình thức sớm nhất Trung Quốc ("Biện học") với tiêu chuẩn kiểm chứng chân lý "Tam Biểu Pháp" (có gốc lịch sử, có bằng chứng tai mắt dân chúng, có hiệu quả thực tiễn).'
      ],
      introduction: 'Trong thời Chiến Quốc, Hàn Phi Tử ghi nhận hai "Hiển học" (học phái lừng lẫy nhất thiên hạ) là Nho và Mặc. Khác với tầng lớp sĩ đại phu quý tộc của Nho gia, Mặc Tử (Mặc Địch) và hàng trăm đệ tử của ông xuất thân từ tầng lớp thợ thủ công, kỹ sư và bình dân lao động. Chính nền tảng nghề nghiệp thực hành ấy đã hình thành nên một học phái có diện mạo hoàn toàn khác biệt trong lịch sử tư tưởng Trung Hoa: vừa giàu lý tưởng bác ái phản chiến, vừa có tổ chức kỷ luật chặt chẽ dưới sự lãnh đạo của "Cự Tử", đồng thời sở hữu tư duy toán học, quang học và logic học vượt trước thời đại nhiều thế kỷ.',
      historicalBackground: 'Mặc Tử sống vào đầu thời Chiến Quốc (khoảng 470–391 TCN, quê nước Lỗ hoặc nước Tống), thời điểm chiến tranh thôn tính giữa các chư hầu khiến nông dân và thợ thủ công chịu cảnh bần cùng. Từng theo học Nho học nhưng bất mãn với lễ nghi tang ma tốn kém ("Hậu táng cửu tang") và thuyết Thiên mệnh định sẵn khiến người lao động thụ động, Mặc Tử tách ra lập học phái riêng với mười cương lĩnh cốt lõi: Thượng Hiền, Thượng Đồng, Kiêm Ái, Phi Công, Tiết Dụng, Tiết Táng, Thiên Chí, Minh Quỷ, Phi Nhạc và Phi Mệnh. Sau khi Mặc Tử qua đời, Mặc gia chia làm ba nhánh rồi dần suy tàn sau khi nhà Tần–Hán thống nhất đế quốc và "Độc tôn Nho thuật", khiến bộ sách "Mặc Tử" bị lãng quên hơn một thiên niên kỷ cho đến khi học giả đời Thanh (Tất Nguyên, Tôn Di Nhượng) và giới nghiên cứu hiện đại (Hồ Thích, Joseph Needham) phục dựng giá trị khoa học của nó.',
      mainContent: [
        {
          heading: '1. Đạo đức vị lợi "Kiêm Ái – Phi Công" và nghệ thuật thủ thành thực chiến',
          body: 'Trung tâm luân lý Mặc gia là "Kiêm tương ái, giao tương lợi" (yêu thương lẫn nhau bình đẳng, đem lại lợi ích cho nhau). Mặc Tử lập luận rằng nguồn gốc mọi loạn lạc là sự thiên vị "Biệt" (chỉ lo nhà mình, nước mình mà xâm hại nhà khác, nước khác); chỉ khi nhìn nhà người như nhà mình, nước người như nước mình ("Kiêm") thì chiến tranh mới chấm dứt. Tuy nhiên, Mặc Tử không phản chiến bằng lời suông: khi nghe công trình sư Công Thâu Ban (Lỗ Ban) chế tạo thang mây giúp nước Sở chuẩn bị đánh nước Tống, Mặc Tử đã đi bộ mười ngày đêm tới Sở, dùng thắt lưng làm tường thành và mảnh gỗ làm khí cụ đánh bại 9 phương án công thành của Công Thâu Ban ngay trên sa bàn, đồng thời thông báo 300 đệ tử Mặc gia đã mang sẵn khí giới thủ thành đứng trên tường thành nước Tống — buộc Sở vương hủy bỏ cuộc chiến. Các thiên "Bị Thành Môn" đến "Tạp Thủ" trong "Mặc Tử" là tài liệu kỹ thuật công sự phòng thủ chi tiết nhất thời cổ đại.'
        },
        {
          heading: '2. "Mặc Kinh" và những phát hiện tiên phong về Quang học, Cơ học, Hình học',
          body: 'Phần "Mặc Kinh" (biên soạn bởi các học giả Hậu kỳ Mặc gia thế kỷ IV–III TCN) chứa hơn 180 mệnh đề ngắn gọn mang tính khoa học thực nghiệm hiếm có. Về quang học, 8 mệnh đề liên tiếp mô tả chính xác ánh sáng truyền theo đường thẳng, giải thích hiện tượng ảnh đảo ngược qua lỗ kim nhỏ trong buồng tối ("Tiểu khổng thành tượng": tia sáng từ đỉnh vật đi qua lỗ nhỏ xuống đáy màn, tia từ đáy vật đi lên đỉnh màn — sớm hàng thế kỷ trước Ibn al-Haytham), đồng thời phân tích ảnh tạo bởi gương phẳng, gương cầu lõm (xác định tiêu điểm) và gương cầu lồi. Về hình học, Mặc Kinh định nghĩa điểm ("Đoan: thể chi vô hậu nhi tối tiền giả"), đường thẳng, hình vuông và hình tròn ("Viên: nhất trung đồng trường dã" — có một tâm cách đều mọi điểm). Về cơ học, Mặc Kinh định nghĩa lực ("Lực: hình chi sở dĩ phấn dã") và phân tích cân bằng đòn bẩy theo cánh tay đòn.'
        },
        {
          heading: '3. Logic học Mặc gia ("Biện học") và tiêu chuẩn "Tam Biểu Pháp"',
          body: 'Mặc gia là trường phái duy nhất thời Tiên Tần xây dựng lý thuyết nhận thức và logic học hệ thống (sánh ngang với logic Aristotle ở Hy Lạp và Nhân minh học ở Ấn Độ cổ đại). Trong thiên "Phi Mệnh", Mặc Tử đề xuất "Tam Biểu Pháp" (ba tiêu chuẩn kiểm chứng mọi luận điểm): (1) Thượng bản chi ư cổ giả thánh vương chi sự (xét căn cứ lịch sử); (2) Hạ nguyên sát bách tính nhĩ mục chi thực (đối chiếu bằng chứng thực nghiệm qua tai mắt dân chúng); (3) Phát dĩ vi hình chính, quan kỳ trung quốc gia bách tính nhân dân chi lợi (kiểm nghiệm hiệu quả thực tế mang lại lợi ích cho xã hội). Hậu kỳ Mặc gia trong thiên "Tiểu Thủ" còn phân loại các phép suy luận quy nạp – diễn dịch như "Hiệu" (mô hình), "Tỷ" (so sánh tương tự), "Mâu" (so sánh song song), "Suy" (suy diễn loại suy).'
        },
        {
          heading: '4. Nguyên nhân suy tàn và sự tái khám phá thời Cận–Hiện đại',
          body: 'Mặc gia suy tàn nhanh chóng từ thời Hán do ba nguyên nhân cấu trúc: (1) Đế quốc tập quyền Tần–Hán không chấp nhận một tổ chức hiệp sĩ vũ trang tự trị có kỷ luật riêng ngoài triều đình; (2) Kỷ luật khổ hạnh "Tiết dụng, Phi nhạc" quá khắc nghiệt đối với tâm lý con người (Trang Tử từng nhận xét: "Mặc đạo quá khắc khổ, thiên hạ khó theo nổi"); (3) Nho học trở thành con đường tiến thân duy nhất qua khoa cử. Bước sang thế kỷ XXI, tinh thần thực nghiệm quang học của Mặc Tử được Trung Quốc vinh danh khi đặt tên vệ tinh thông tin lượng tử đầu tiên trên thế giới phóng năm 2016 là "Mặc Tử hiệu" (Micius).'
        }
      ],
      theoreticalFramework: 'Sử gia khoa học Joseph Needham và nhà triết học A. C. Graham xem Hậu kỳ Mặc gia là đỉnh cao bị gián đoạn của "tư duy khoa học – logic hình thức" trong cổ sử Trung Hoa. Xét về luân lý học, Mặc Tử là triết gia chủ nghĩa vị lợi (Utilitarianism / Consequentialism) sớm nhất lịch sử nhân loại — đi trước Jeremy Bentham hơn 2.000 năm khi dùng tiêu chí "Lợi ích chung của thiên hạ" (Thiên hạ chi lợi) để đánh giá mọi thiết chế và hành vi.',
      terminologyAndLiushu: [
        {
          hanzi: '兼',
          pinyin: 'jiān',
          hanViet: 'Kiêm',
          liushu: 'Hội ý',
          gloss: 'Giáp Cốt Văn vẽ một bàn tay (又) nắm cùng lúc hai bông lúa (禾); nghĩa gốc là gộp chung, bao hàm tất cả — cốt lõi của "Kiêm Ái" (yêu thương bình đẳng).'
        },
        {
          hanzi: '辩',
          pinyin: 'biàn',
          hanViet: 'Biện',
          liushu: 'Hình thanh / Hội ý',
          gloss: 'Dạng phồn thể 辯 gồm hai chữ Tân (辛: kẻ tranh tụng) và bộ Ngôn (言) ở giữa; chỉ tranh luận phân định đúng sai bằng lý lẽ logic ("Mặc biện").'
        },
        {
          hanzi: '矩',
          pinyin: 'jǔ',
          hanViet: 'Củ (Thước thợ)',
          liushu: 'Tượng hình / Hội ý',
          gloss: 'Vẽ người cầm thước vuông (巨); công cụ đo góc vuông của thợ thủ công Mặc gia, được Mặc Tử dùng làm ẩn dụ cho chuẩn mực đạo đức khách quan.'
        },
        {
          hanzi: '景',
          pinyin: 'jǐng / yǐng',
          hanViet: 'Cảnh / Ảnh',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Nhật (日: ánh nắng) và chữ Kinh (京); trong "Mặc Kinh" dùng thay chữ 影 (ảnh) để nghiên cứu bóng tối và hình ảnh quang học qua lỗ kim.'
        },
        {
          hanzi: '侠',
          pinyin: 'xiá',
          hanViet: 'Hiệp',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Nhân (亻) và chữ Giáp (夹); chỉ tinh thần nghĩa hiệp xả thân cứu kẻ yếu — truyền thống du hiệp Trung Hoa chịu ảnh hưởng trực tiếp từ Mặc gia.'
        }
      ],
      primarySources: [
        PQ(
          '《墨子·兼爱中》',
          'Mặc Tử — Thiên Kiêm Ái Trung',
          'Mozi, Chapter 15: Universal Love (Part II)',
          '视人之国若视其国，视人之家若视其家，视人之身若视其身。',
          'Shì rén zhī guó ruò shì qí guó, shì rén zhī jiā ruò shì qí jiā, shì rén zhī shēn ruò shì qí shēn.',
          'Thị nhân chi quốc nhược thị kỳ quốc, thị nhân chi gia nhược thị kỳ gia, thị nhân chi thân nhược thị kỳ thân.',
          'Nhìn nước của người như nhìn nước của mình, nhìn nhà của người như nhìn nhà của mình, nhìn thân của người như nhìn thân của mình.',
          'Regard another\'s state as one\'s own state, another\'s household as one\'s own household, and another\'s person as one\'s own person.'
        ),
        PQ(
          '《墨子·经说下》（小孔成像）',
          'Mặc Tử — Kinh Thuyết Hạ (Hiện tượng Lỗ kim thành tượng)',
          'Mohist Canon (Mojing), Explanations II: Pinhole Camera Optics',
          '景光之人，煦若射。下者之人也高，高者之人也下。',
          'Jǐngguāng zhī rén, xù ruò shè. Xiàzhě zhī rén yě gāo, gāozhě zhī rén yě xià.',
          'Cảnh quang chi nhân, hú nhược xạ. Hạ giả chi nhân dã cao, cao giả chi nhân dã hạ.',
          'Tia sáng chiếu qua lỗ nhỏ tạo ảnh con người đi thẳng như mũi tên bắn ra: phần dưới của người chiếu lên trên cao, phần trên của người chiếu xuống dưới thấp.',
          'Light rays from a person pass straight through the aperture like arrows: light from the lower part of the body strikes high, and light from the upper part strikes low.'
        )
      ],
      sinoVietnameseComparison: 'Dù Mặc gia không được truyền bá thành tông phái độc lập tại Việt Nam như Nho – Phật – Đạo, tư tưởng thực dụng vì dân, chống chiến tranh xâm lược và trọng kỹ nghệ thủ công của Mặc Tử có nhiều điểm gặp gỡ thú vị với truyền thống đề cao nhân nghĩa hòa bình ("Đem đại nghĩa để thắng hung tàn") của Nguyễn Trãi và tinh thần thực học, khảo cứu kỹ nghệ thời cận đại Việt Nam.',
      additionalReferences: [
        'Tôn Di Nhượng, Mặc Tử Nhàn Cổ (墨子间诂), Trung Hoa Thư Cục.',
        'A. C. Graham (1978), Later Mohist Logic, Ethics and Science, Chinese University Press.',
        'Joseph Needham (1962), Science and Civilisation in China, Vol. 4, Part 1: Physics, Cambridge University Press.'
      ],
      conclusion: 'Mặc Gia là nhánh rẽ khoa học và vị lợi độc nhất vô nhị trong cổ sử tư tưởng Trung Hoa. Từ nguyên lý đạo đức Kiêm Ái đến thí nghiệm quang học lỗ kim và phép kiểm chứng Tam Biểu Pháp trong "Mặc Kinh", di sản Mặc Tử cho thấy truyền thống trí tuệ Trung Hoa cổ đại từng sở hữu tiềm năng tư duy thực nghiệm và logic hình thức sâu sắc vượt xa khuôn khổ văn chương kinh điển.'
    },
    {
      id: 'religious-daoism-quanzhen-zhengyi',
      number: 85,
      category: 'philosophy',
      categoryLabel: 'Triết học & Tôn giáo',
      titleVi: 'Đạo giáo Toàn Chân & Chính Nhất: Ranh giới Đạo gia Triết học vs Đạo giáo Tôn giáo, Nội Đan & Âm nhạc Đạo quán',
      titleZh: '道教全真与正一：道家与道教之别、内丹养生与道观音乐',
      titleZhTrad: '道教全真與正一：道家與道教之別、內丹養生與道觀音樂',
      titleEn: 'Religious Daoism (Quanzhen and Zhengyi): Philosophical Daojia vs. Institutional Daojiao, Internal Alchemy, and Temple Music',
      readMinutes: 15,
      epistemicTag: 'Tôn giáo học & Văn hóa Bản địa',
      abstract: 'Chuyên luận phân định rõ ranh giới học thuật giữa Đạo gia triết học (Lão–Trang) và Đạo giáo tôn giáo bản địa hình thành từ cuối Đông Hán (Trương Đạo Lăng, 142 SCN), so sánh hai đại hệ phái còn tồn tại đến ngày nay là Chính Nhất Đạo và Toàn Chân Đạo, cùng hệ thống tu luyện Nội Đan dưỡng sinh và di sản âm nhạc nghi lễ Đạo quán.',
      keyTakeaways: [
        'Đạo gia (Daojia) là trường phái triết học Tiên Tần bàn về Đạo, Vô vi và Tự nhiên (Lão Tử, Trang Tử); Đạo giáo (Daojiao) là tôn giáo có tổ chức ra đời cuối Đông Hán (thế kỷ II SCN) hướng tới trường sinh, tế lễ và cứu thế, tôn Lão Tử làm Thái Thượng Lão Quân.',
        'Đạo giáo đương đại quy tụ vào hai hệ phái lớn: Chính Nhất Đạo (khởi từ Thiên Sư Đạo của Trương Đạo Lăng tại núi Long Hổ, Giang Tây — trọng phù lục, khoa nghi trai tiếu, đạo sĩ được lập gia đình) và Toàn Chân Đạo (do Vương Trùng Dương lập năm 1167 — chủ trương Tam giáo hợp nhất, xuất gia ăn chay ở Đạo quán và tu Nội Đan).',
        'Từ Ngoại Đan (luyện kim đan vô tình góp phần phát minh thuốc súng) chuyển sang Nội Đan (tu luyện Tinh–Khí–Thần trong cơ thể) cùng âm nhạc Đạo quán Võ Đang – Bạch Vân Quán đã tạo nên kho tàng dưỡng sinh, võ học và nghệ thuật đặc sắc.'
      ],
      introduction: 'Một trong những nhầm lẫn phổ biến nhất khi tìm hiểu văn hóa Trung Hoa là đồng nhất hoàn toàn triết lý "Vô vi tự nhiên" của Lão Tử và Trang Tử với hệ thống đền quán, bùa chú, luyện đan và nghi lễ cầu an của Đạo giáo. Dù cùng chung cội rễ tư tưởng về sự hòa hợp giữa con người và vũ trụ, Đạo gia (triết học) và Đạo giáo (tôn giáo bản địa duy nhất của người Hán) có lộ trình lịch sử, mục tiêu và thực hành khác biệt rõ rệt. Hiểu cấu trúc hai hệ phái Toàn Chân và Chính Nhất là chìa khóa đọc vị kiến trúc Đạo quán (Thanh Thành Sơn, Võ Đang Sơn, Bạch Vân Quán), khí công dưỡng sinh và tín ngưỡng dân gian Trung Hoa.',
      historicalBackground: 'Cuối thời Đông Hán, trước nạn đói, dịch bệnh và khủng hoảng xã hội, các truyền thống phương thuật cầu tiên, y dược, Hoàng–Lão học và tín ngưỡng thần linh địa phương đã kết hợp lại thành tôn giáo có tổ chức. Năm 142 SCN, Trương Đạo Lăng lập Ngũ Đẩu Mễ Đạo (sau gọi là Thiên Sư Đạo) tại núi Hạc Minh (Tứ Xuyên), đặt hệ thống 24 "Trị" (giáo khu) và tôn Lão Tử làm giáo chủ. Qua thời Ngụy–Tấn–Nam Bắc Triều, Cát Hồng ("Bão Phác Tử"), Khấu Khiêm Chi, Lục Tu Tĩnh và Đào Hoằng Cảnh hệ thống hóa thần phả, giới luật và kinh điển thành "Đạo Tạng". Đến thời Kim–Nguyên, Vương Trùng Dương lập Toàn Chân Đạo (1167) ở phương Bắc, còn hậu duệ Trương Thiên Sư định cư tại núi Long Hổ (Giang Tây) hợp nhất các phái phù lục phương Nam thành Chính Nhất Đạo, định hình cục diện song hành Nam Chính Nhất – Bắc Toàn Chân suốt từ thế kỷ XIII đến nay.',
      mainContent: [
        {
          heading: '1. Phân định Đạo gia (Daojia) và Đạo giáo (Daojiao)',
          body: 'Đạo gia Tiên Tần (Lão Tử, Trang Tử) là triết học vũ trụ và nhân sinh: Trang Tử xem sinh tử là vòng chuyển hóa tự nhiên như bốn mùa xuân hạ thu đông, không chủ trương cưỡng cầu bất tử (vợ mất, ông gõ chậu ca hát). Ngược lại, Đạo giáo tôn giáo đặt khẩu hiệu "Ngã mệnh tại ngã bất tại thiên" (Mệnh ta ở ta chứ không ở trời), tin rằng thông qua tu luyện đức hạnh, khí công, dược thảo và nghi lễ, con người có thể làm chủ sinh mệnh, kéo dài tuổi thọ và đạt tới cảnh giới "Đắc đạo thành tiên". Đạo giáo tôn "Đạo Đức Kinh" làm kinh điển tối cao, nhưng diễn giải nó dưới lăng kính thần học và phương pháp tu dưỡng thân tâm cụ thể.'
        },
        {
          heading: '2. Chính Nhất Đạo và Toàn Chân Đạo: Hai mô hình tu hành Nam – Bắc',
          body: 'Hai đại hệ phái Đạo giáo có nguyên tắc tổ chức đối lập bổ trợ nhau. (1) Chính Nhất Đạo (trung tâm truyền thống tại núi Long Hổ – Giang Tây và Mao Sơn – Giang Tô): kế thừa trực tiếp Thiên Sư Đạo, coi trọng "Phù lục" (bùa chữ triện thiêng) và "Khoa nghi Trai Tiếu" (nghi lễ cầu an, giải hạn, siêu độ cho cộng đồng); đạo sĩ Chính Nhất ("Hỏa cư đạo sĩ") sống hòa nhập giữa dân cư, được kết hôn, ăn mặn ngoài ngày trai giới và thường cha truyền con nối nghề nghi lễ. (2) Toàn Chân Đạo (trung tâm tại Bạch Vân Quán Bắc Kinh, Chung Nam Sơn, Hoa Sơn): do Vương Trùng Dương và Thất Chân (như Khâu Xứ Cơ — người từng vượt vạn dặm sang Trung Á thuyết phục Thành Cát Tư Hãn hạn chế sát sinh năm 1222) gây dựng; chủ trương "Tam giáo hợp nhất" (học cả Đạo Đức Kinh, Tâm Kinh và Hiếu Kinh), bắt buộc xuất gia sống tập thể trong Đạo quán, ăn chay trường, không kết hôn và tập trung tu luyện Nội Đan.'
        },
        {
          heading: '3. Từ Ngoại Đan luyện kim đến Nội Đan dưỡng sinh "Tinh – Khí – Thần"',
          body: 'Giai đoạn Ngụy–Tấn đến Đường, các đạo sĩ luyện "Ngoại Đan" (nung luyện chu sa/thủy ngân, lưu huỳnh, diêm tiêu trong lò để tìm thuốc trường sinh) — dù gây ngộ độc kim loại nặng cho nhiều quý tộc nhưng vô tình tích lũy tri thức hóa học sớm và phát minh ra công thức thuốc súng (ghi chép đầu tiên trong Đạo thư "Chân Nguyên Diệu Đạo Yếu Lược" thế kỷ IX). Rút kinh nghiệm từ rủi ro của Ngoại Đan, từ cuối Đường–Tống (Lã Động Tân, Trương Bá Đoan với "Ngộ Chân Thiên") đến Toàn Chân Đạo, Đạo giáo chuyển hẳn sang "Nội Đan": xem chính cơ thể con người là lò luyện (Đỉnh lô), điều hòa hơi thở, tĩnh tọa và khí công để chuyển hóa ba báu vật nội thân "Luyện Tinh hóa Khí, Luyện Khí hóa Thần, Luyện Thần hoàn Hư", đồng thời kết nối mật thiết với Đông y và Thái Cực Quyền Võ Đang.'
        },
        {
          heading: '4. Âm nhạc Đạo quán và Di sản Đạo Tạng',
          body: 'Kho kinh điển "Chính Thống Đạo Tạng" khắc in năm 1445 thời Minh gồm hơn 5.300 quyển là bách khoa thư khổng lồ không chỉ về tôn giáo mà cả y học, luyện kim, thiên văn, âm nhạc và dân tục học. Đặc biệt, "Đạo giáo Âm nhạc" (tiêu biểu là Nhạc Đạo quán Võ Đang, Bạch Vân Quán Bắc Kinh và Tô Châu Huyền Diệu Quán) được công nhận là Di sản Văn hóa Phi vật thể Quốc gia, kết hợp tiếng chuông khánh, sáo trúc, nhị hồ và lối tụng niệm "Vận khang" trầm hùng chậm rãi để điều hòa nhịp thở, tạo nên không gian âm thanh tĩnh tại khác biệt hoàn toàn với sân khấu thế tục.'
        }
      ],
      theoreticalFramework: 'Nhà nghiên cứu Đạo giáo Kristofer Schipper ("The Taoist Body") và Isabelle Robinet chỉ ra rằng điểm độc đáo của Đạo giáo tôn giáo là "vũ trụ hóa cơ thể người": thân thể vi mô được xem là bản đồ đồng dạng với vũ trụ vĩ mô (núi sông, tinh tú, mùa tiết). Nhờ vậy, các nghi lễ Đạo quán, phép dưỡng sinh Nội Đan và âm nhạc tụng niệm đều vận hành theo mục tiêu tái lập sự cân bằng nhịp điệu giữa cá nhân, cộng đồng và tự nhiên.',
      terminologyAndLiushu: [
        {
          hanzi: '道',
          pinyin: 'dào',
          hanViet: 'Đạo',
          liushu: 'Hình thanh / Hội ý',
          gloss: 'Gồm bộ Sước (辶: bước đi) và chữ Thủ (首: cái đầu/khởi nguyên); nghĩa gốc là con đường đi, mở rộng thành nguyên lý tối thượng sinh hóa vũ trụ.'
        },
        {
          hanzi: '丹',
          pinyin: 'dān',
          hanViet: 'Đan',
          liushu: 'Chỉ sự / Tượng hình',
          gloss: 'Vẽ khoáng chất chu sa (đỏ) nằm trong giếng mỏ; mở rộng thành thuốc trường sinh luyện từ khoáng chất ("Ngoại đan") hoặc năng lượng tinh khí nội thân ("Nội đan").'
        },
        {
          hanzi: '观',
          pinyin: 'guàn',
          hanViet: 'Quán',
          liushu: 'Hình thanh',
          gloss: 'Dạng phồn thể 觀 gồm chữ Quán (雚) và Kiến (見: nhìn); nghĩa gốc là đài cao quan sát thiên văn, từ thời Nam Bắc Triều dùng gọi cơ sở thờ tự của Đạo giáo ("Đạo quán").'
        },
        {
          hanzi: '符',
          pinyin: 'fú',
          hanViet: 'Phù',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Trúc (竹: thẻ tre) và chữ Phó (付); vốn là hai nửa thẻ tre ghép khớp làm tín vật quân sự, Đạo giáo Chính Nhất dùng làm bùa chữ triện giao ước linh thiêng.'
        },
        {
          hanzi: '仙',
          pinyin: 'xiān',
          hanViet: 'Tiên',
          liushu: 'Hội ý',
          gloss: 'Gồm bộ Nhân (亻: người) và bộ Sơn (山: núi); hình tượng con người sống hòa hợp, trường sinh giữa núi non tự nhiên thoát khỏi trói buộc trần tục.'
        }
      ],
      primarySources: [
        PQ(
          '《抱朴子·内篇·黄白》（东晋·葛洪）',
          'Bão Phác Tử — Nội Thiên (Cát Hồng, Đông Tấn)',
          'Master Who Embraces Simplicity (Baopuzi), Inner Chapters — Ge Hong',
          '我命在我不在天。',
          'Wǒ mìng zài wǒ bùzài tiān.',
          'Ngã mệnh tại ngã bất tại thiên.',
          'Sinh mệnh của ta nằm trong tay ta chứ không phó mặc cho số trời (tuyên ngôn chủ động tu luyện dưỡng sinh của Đạo giáo).',
          'My destiny lies within myself, not in Heaven.'
        ),
        PQ(
          '《重阳立教十五论》（金·王重阳）',
          'Trùng Dương Lập Giáo Thập Ngũ Luận — Vương Trùng Dương (thời Kim)',
          'Fifteen Discourses to Establish the Teaching — Wang Chongyang',
          '凡住庵者，须要清静无为，炼心修性，不可贪恋尘世。',
          'Fán zhù\'ān zhě, xūyào qīngjìng wúwéi, liànxīn xiūxìng, bùkě tānliàn chénshì.',
          'Phàm trụ am giả, tu yếu thanh tĩnh vô vi, luyện tâm tu tính, bất khả tham luyến trần thế.',
          'Phàm người ở đạo am phải giữ tâm thanh tĩnh vô vi, rèn luyện tâm tính, không tham đắm vào danh lợi trần tục.',
          'All who dwell in a Daoist hermitage must cultivate stillness and non-striving, refining the heart-mind and nature without clinging to worldly attachments.'
        )
      ],
      sinoVietnameseComparison: 'Đạo giáo truyền vào Việt Nam sớm song hành cùng Nho và Phật tạo nên cấu trúc "Tam giáo đồng nguyên" thời Lý–Trần (tiêu biểu là Đền Quán Thánh thờ Huyền Thiên Trấn Vũ — một trong Thăng Long Tứ Trấn). Tuy nhiên, khác với Trung Quốc có hai hệ phái Toàn Chân – Chính Nhất tổ chức chặt chẽ, Đạo giáo tại Việt Nam nhanh chóng dung hợp sâu vào tín ngưỡng bản địa (Đạo Mẫu Tứ Phủ, thờ Đức Thánh Trần, các vị Thánh Tứ Bất Tử như Chử Đồng Tử, Liễu Hạnh), tạo thành không gian tín ngưỡng dân gian giàu tính nữ và gần gũi cộng đồng làng xã.',
      additionalReferences: [
        'Kristofer Schipper (1993), The Taoist Body, University of California Press.',
        'Isabelle Robinet (1997), Taoism: Growth of a Religion, Stanford University Press.',
        'Nhậm Kế Dũ chủ biên (1990), Trung Quốc Đạo Giáo Sử (中国道教史).'
      ],
      conclusion: 'Phân biệt rạch ròi Đạo gia triết học và Đạo giáo tôn giáo giúp ta nhìn thấy trọn vẹn sức sống hai mặt của truyền thống Đạo học: một bên là triết lý tự do tinh thần của Lão–Trang, bên kia là hệ thống thực hành dưỡng sinh Nội Đan, nghi lễ cộng đồng Chính Nhất – Toàn Chân và âm nhạc Đạo quán đã bám rễ sâu bền vào đời sống văn hóa Trung Hoa suốt gần hai thiên niên kỷ.'
    }
  ];

  window.CCE_ARTICLES = window.CCE_ARTICLES || [];
  var existingIds = {};
  var i;
  var HERO_MAP = {
    "xia-shang-zhou-oracle-bones-rituals": "assets/images/museum/houmuwu-ding.jpg",
    "qin-institutional-standardization": "assets/images/provinces/shaanxi-terracotta-army.jpg",
    "song-dynasty-urban-science-renaissance": "assets/images/paintings/21_qingming_shanghe.jpg",
    "grand-canal-dujiangyan-hydraulic-empire": "assets/images/articles/hero-four-inventions.jpg",
    "modern-china-transformation-1840-1949": "assets/images/articles/hero-beijing-shanghai.jpg",
    "sixteen-ancient-capitals-geopolitics": "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "tea-horse-road-southwest-corridor": "assets/images/provinces/yunnan-lijiang-old-town.jpg",
    "chinese-fermentation-spices-culinary-geography": "assets/images/articles/hero-chinese-cuisines.jpg",
    "chinese-liquor-culture-baijiu-huangjiu": "assets/images/articles/hero-chinese-banquet.jpg",
    "five-sacred-mountains-buddhist-peaks": "assets/images/provinces/shandong-taishan.jpg",
    "dunhuang-mogao-buddhist-grotto-art": "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "xiqu-stagecraft-face-masks-tuong": "assets/images/articles/hero-spring-festival.jpg",
    "five-vernacular-architecture-styles": "assets/images/provinces/fujian-tulou.jpg",
    "ming-qing-fiction-hongloumeng-anatomy": "assets/images/articles/hero-classical-books-scrolls.jpg",
    "lacquerware-silk-woodblock-new-year-prints": "assets/images/articles/hero-laozihao-craft.jpg",
    "pre-qin-legalism-xunzi-hanfeizi": "assets/images/articles/hero-hundred-schools.jpg",
    "song-ming-neo-confucianism-zhu-wang": "assets/images/articles/hero-confucianism.jpg",
    "chinese-chan-buddhism-aesthetics": "assets/images/provinces/henan-longmen-grottoes.jpg",
    "mohism-logic-optics-ethics": "assets/images/prov_items/anhui/d0.jpg",
    "religious-daoism-quanzhen-zhengyi": "assets/images/provinces/shanxi-hanging-temple.jpg",
    "chu-nom-liushu-script-dialogue": "assets/images/articles/hero-sino-vietnam.jpg",
    "imperial-palace-axes-beijing-thanglong-hue": "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
    "truc-lam-zen-song-yuan-dialogue": "assets/images/prov_items/anhui/d1.jpg",
    "east-asian-historiography-shiji-toanthu": "assets/images/prov_items/anhui/d2.jpg",
    "bac-y-nam-duoc-comparative-medicine": "assets/images/articles/hero-tcm-solar.jpg",
    "china-hsr-megaprojects-urban-network": "assets/images/articles/hero-contemporary-china.jpg",
    "china-green-energy-ev-battery-ecosystem": "assets/images/articles/hero-huaqiangbei-tech.jpg",
    "china-digital-payments-platform-economy": "assets/images/prov_items/anhui/d3.jpg",
    "modern-chinese-archaeology-sanxingdui-liangzhu": "assets/images/museum/sanxingdui-mask.jpg",
    "china-space-aerospace-tiangong-beidou": "assets/images/prov_items/anhui/d4.jpg",
    "rcep-acfta-cumulation-rules-vietnam": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "china-trade-fairs-canton-ciie-yiwu-guide": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "gacc-decree-248-249-vietnam-agri-export": "assets/images/articles/hero-consular-field-guide.jpg",
    "chinese-enterprises-globalization-playbook": "assets/images/provinces/guangdong-canton-tower.jpg",
    "cross-border-b2b-contracts-cietac-viac": "assets/images/prov_items/anhui/f0.jpg",
    "tang-poetry-song-ci-poetics-geography": "assets/images/articles/hero-tang-dynasty.jpg",
    "chinese-aesthetic-concepts-qiyun-yijing": "assets/images/paintings/22_qianli_jiangshan.jpg",
    "calligraphy-masterpieces-three-rarities-lineage": "assets/images/articles/hero-calligraphy-five-scripts.jpg",
    "chinese-mythology-shanhaijing-kunlun-penglai": "assets/images/paintings/01_luoshenfu_tu.jpg",
    "east-asian-woodblock-printing-encyclopedias": "assets/images/museum/yongle-dadian.jpg",
    "temple-of-heaven-tiantan-cosmology-3d": "assets/images/prov_items/anhui/f1.jpg",
    "jiuzhaigou-travertine-karst": "assets/images/museum/jiuzhaigou-five-flower-lake.jpg",
    "zhangjiajie-wulingyuan-sandstone-pillars": "assets/images/provinces/hunan-zhangjiajie.jpg"
  };
  var arrName = typeof ARTICLES_V3_PART1A !== "undefined" ? ARTICLES_V3_PART1A
    : typeof ARTICLES_V3_PART1B !== "undefined" ? ARTICLES_V3_PART1B
    : typeof ARTICLES_V3_PART2A !== "undefined" ? ARTICLES_V3_PART2A
    : typeof ARTICLES_V3_PART2B !== "undefined" ? ARTICLES_V3_PART2B
    : typeof ARTICLES_V3_PART3A !== "undefined" ? ARTICLES_V3_PART3A
    : typeof ARTICLES_V3_PART3B !== "undefined" ? ARTICLES_V3_PART3B
    : typeof ARTICLES_V3_PART4 !== "undefined" ? ARTICLES_V3_PART4
    : typeof ARTICLES_V3_PART5A !== "undefined" ? ARTICLES_V3_PART5A
    : typeof ARTICLES_V3_PART5B !== "undefined" ? ARTICLES_V3_PART5B : [];
  function normRefItem(r, isEn) {
    if (r && typeof r === "object") {
      return {
        author: r.author || "Tư liệu Chuyên khảo",
        date: r.date || r.year || "2026",
        title: r.title || "",
        url: r.url || "",
        sourceType: r.sourceType || "academic",
        verificationNote: r.verificationNote || r.note || ""
      };
    }
    var str = String(r || "").trim();
    var mYear = str.match(/\(([^)]{3,18})\)/);
    var firstComma = str.indexOf(",");
    var authorPart = firstComma > 0 ? str.slice(0, firstComma).replace(/\([^)]+\)/g, "").trim() : (isEn ? "Scholarly Reference" : "Tư liệu Chuyên khảo");
    var titlePart = firstComma > 0 ? str.slice(firstComma + 1).trim() : str;
    return {
      author: authorPart || (isEn ? "Scholarly Reference" : "Tư liệu Chuyên khảo"),
      date: mYear ? mYear[1] : (isEn ? "Archival" : "Kinh điển / Khảo cứu"),
      title: titlePart || str,
      url: "",
      sourceType: "academic",
      verificationNote: isEn ? "Verified monograph bibliography" : "Tài liệu tham khảo đối chiếu chuyên luận"
    };
  }
  for (i = 0; i < arrName.length; i++) {
    var art = arrName[i];
    if (!art.references && Array.isArray(art.additionalReferences)) {
      art.references = art.additionalReferences.map(function (r) { return normRefItem(r, false); });
    } else if (Array.isArray(art.references)) {
      art.references = art.references.map(function (r) { return normRefItem(r, false); });
    }
    if (!art.heroImage && HERO_MAP[art.id]) {
      art.heroImage = { src: HERO_MAP[art.id], caption: art.titleVi || "", credit: "Chinese Culture Explorer Archival Collection" };
    }
    if (Array.isArray(art.terminologyAndLiushu)) {
      for (var tIdx = 0; tIdx < art.terminologyAndLiushu.length; tIdx++) {
        var tm = art.terminologyAndLiushu[tIdx];
        if (!tm.traditional) tm.traditional = tm.hanzi;
        if (!tm.liushuCategory) tm.liushuCategory = tm.liushu || "Lục thư";
        if (!tm.radicalAnalysis) tm.radicalAnalysis = tm.gloss || "";
        if (!tm.meaningVi) tm.meaningVi = tm.gloss || "";
      }
    }
  }
  for (i = 0; i < window.CCE_ARTICLES.length; i++) {
    if (window.CCE_ARTICLES[i] && window.CCE_ARTICLES[i].id) {
      existingIds[window.CCE_ARTICLES[i].id] = true;
    }
  }
  for (i = 0; i < ARTICLES_V3_PART2B.length; i++) {
    if (!existingIds[ARTICLES_V3_PART2B[i].id]) {
      window.CCE_ARTICLES.push(ARTICLES_V3_PART2B[i]);
      existingIds[ARTICLES_V3_PART2B[i].id] = true;
    }
  }
})();
