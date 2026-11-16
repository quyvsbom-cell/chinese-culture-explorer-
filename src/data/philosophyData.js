// ============================================================================
// Section 3.2: 中国哲学与思想 – Chinese Philosophy and Thought
// Covers 9 Schools (all 7 dimensions), 7 Classical Texts, & Comparison Matrix
// ============================================================================

window.CCE_PHILOSOPHY = {
  schools: [
    {
      id: "confucianism",
      nameVi: "Nho gia",
      nameEn: "Confucianism",
      nameZh: "儒家",
      historicalOrigins:
        "Hình thành cuối thời Xuân Thu (thế kỷ VI–V TCN) trong bối cảnh trật tự lễ nhạc Tây Chu sụp đổ. Khởi nguồn từ tầng lớp 'Nho' (chuyên gia nghi lễ, giáo dục) do Khổng Tử (551–479 TCN) hệ thống hóa thành học thuyết đạo đức – chính trị nhân văn.",
      majorThinkers: "Khổng Tử (孔子), Mạnh Tử (孟子), Tuân Tử (荀子), Đổng Trọng Thư (董仲舒), Chu Hy (朱熹), Vương Dương Minh (王阳明).",
      fundamentalPrinciples:
        "Lấy tu dưỡng đạo đức cá nhân làm gốc để ổn định gia đình, quốc gia và thiên hạ ('Tu thân, tề gia, trị quốc, bình thiên hạ'). Đề cao 'Nhân trị' (chính trị bằng gương sáng đạo đức) hơn 'Hình trị'.",
      classicalTexts: ["《论语》 (Luận Ngữ)", "《孟子》 (Mạnh Tử)", "《大学》 (Đại Học)", "《中庸》 (Trung Dung)", "《荀子》 (Tuân Tử)"],
      philosophicalConcepts: [
        "Nhân (仁): Lòng thương người và ý thức luân lý tương hỗ ('Kỷ sở bất dục, vật thi ư nhân').",
        "Nghĩa (义): Chính nghĩa và bổn phận đạo đức vượt lên lợi ích vị kỷ.",
        "Lễ (礼): Quy phạm ứng xử, nghi thức xã hội giúp duy trì trật tự hài hòa.",
        "Hiếu Đễ (孝悌) & Ngũ Luân (五伦): Nền tảng luân lý gia đình – xã hội.",
        "Chính Danh (正名) & Trung Dung (中庸): Danh phận tương xứng thực trách và giữ sự quân bình."
      ],
      historicalInfluence:
        "Trở thành ý thức hệ chính thống từ thời Hán Vũ Đế đến năm 1911; định hình hệ thống khoa cử, gia tộc, pháp luật và giáo dục khắp Vòng văn hóa chữ Hán (Trung Quốc, Việt Nam, Triều Tiên, Nhật Bản).",
      contemporaryRelevance:
        "Ảnh hưởng sâu sắc tới coi trọng giáo dục, trách nhiệm gia đình, văn hóa doanh nghiệp đề cao uy tín và ổn định xã hội; đồng thời đối mặt tranh luận về tính thứ bậc và áp lực đồng thuận."
    },
    {
      id: "daoism-philosophy",
      nameVi: "Đạo gia (Triết học)",
      nameEn: "Philosophical Taoism",
      nameZh: "道家",
      historicalOrigins:
        "Nảy sinh thời Xuân Thu – Chiến Quốc như phản ứng đối với sự giả tạo của lễ nghi khắc nghiệt và chiến tranh tàn khốc. Phái Lão-Trang tìm về quy luật tự nhiên ('Đạo') thay vì áp đặt ý chí nhân tạo.",
      majorThinkers: "Lão Tử (老子), Trang Tử (庄子), Liệt Tử (列子), Vương Bật (王弼 – Huyền học).",
      fundamentalPrinciples:
        "Đạo (道) là nguồn gốc vô hình và quy luật vận hành tự nhiên của vạn vật. Con người và người cai trị cần thuận theo Tự nhiên (自然) và thực hành Vô vi (无为 – không can thiệp cưỡng bức trái quy luật).",
      classicalTexts: ["《道德经》 (Đạo Đức Kinh)", "《庄子》 (Trang Tử / Nam Hoa Kinh)", "《列子》 (Liệt Tử)"],
      philosophicalConcepts: [
        "Đạo (道) & Đức (德): Bản thể vũ trụ và năng lực biểu hiện cụ thể trong vạn vật.",
        "Vô vi nhi vô bất vi (无为而无不为): Không cưỡng cầu để mọi việc vận hành trôi chảy.",
        "Phản giả đạo chi động (反者道之动): Vật cực tất phản, mềm thắng cứng, yếu thắng mạnh.",
        "Tề vật luận & Tiêu dao du (齐物论·逍遥游): Giải phóng tâm thức khỏi định kiến nhị nguyên (Trang Tử)."
      ],
      historicalInfluence:
        "Cân bằng tính kỷ cương của Nho gia trong tâm thức trí thức Trung Hoa ('Đạt tắc kiêm thiện thiên hạ, cùng tắc độc thiện kỳ thân'). Định hình mỹ học thủy mặc, thi ca điền viên, y học dưỡng sinh và thái cực quyền.",
      contemporaryRelevance:
        "Truyền cảm hứng về sinh thái học, quản trị tinh gọn không vi mô can thiệp, sức khỏe tinh thần và giảm kiệt sức trong xã hội công nghiệp áp lực cao."
    },
    {
      id: "religious-daoism",
      nameVi: "Đạo giáo (Tôn giáo)",
      nameEn: "Religious Taoism",
      nameZh: "道教",
      historicalOrigins:
        "Hình thành vào cuối thời Đông Hán (thế kỷ II SCN) từ sự kết hợp triết học Đạo gia (Hoàng-Lão), tín ngưỡng thần tiên phương sĩ thời Tần-Hán, y thuật dưỡng sinh và vũ trụ luận Âm Dương Ngũ Hành. Lưu ý: học giới phân biệt chặt chẽ Đạo gia (triết học) và Đạo giáo (tôn giáo tổ chức).",
      majorThinkers: "Trương Đạo Lăng (张道陵 – Ngũ Đấu Mễ Đạo), Cát Hồng (葛洪), Đào Hoằng Cảnh (陶弘景), Vương Trùng Dương (王重阳 – Toàn Chân giáo).",
      fundamentalPrinciples:
        "Mục tiêu tối hậu là 'Trường sinh cửu thị' (kéo dài sinh mệnh, đạt tiên đạo) thông qua tu luyện Nội đan (khí công, thiền định), Ngoại đan (luyện đan cổ đại – sau suy giảm), giữ giới luật thiện hành và nghi lễ khoa giáo giao cảm thần linh.",
      classicalTexts: ["《太平经》 (Thái Bình Kinh)", "《抱朴子》 (Bão Phác Tử)", "《道藏》 (Đạo Tạng – tổng tập kinh điển Đạo giáo)"],
      philosophicalConcepts: [
        "Ngã mệnh tại ngã bất tại thiên (我命在我不在天): Tinh thần chủ động tu dưỡng sinh mệnh.",
        "Tinh – Khí – Thần (精气神): Tam bảo của sinh lý và tâm linh con người.",
        "Nội đan thuật (内丹术): Chuyển hóa năng lượng sinh học – tinh thần bên trong cơ thể.",
        "Tam Thanh & Ngọc Hoàng (三清·玉皇): Hệ thống thần điện tôn giáo bản địa."
      ],
      historicalInfluence:
        "Tôn giáo bản địa duy nhất quy mô lớn của Trung Quốc; góp phần quan trọng vào sự phát triển hóa học sơ khai (thuốc súng từ luyện đan), dược học, khí công dưỡng sinh và văn hóa lễ hội dân gian (bao gồm Tam Phủ / Đạo Mẫu giao thoa ở Việt Nam).",
      contemporaryRelevance:
        "Chính Nhất giáo và Toàn Chân giáo vẫn là một trong năm tôn giáo hợp pháp tại Trung Quốc; các bài tập Thái cực, Bát Đoạn Cẩm và triết lý dưỡng sinh rất phổ biến trong đời sống đô thị."
    },
    {
      id: "buddhism",
      nameVi: "Phật giáo Trung Hoa",
      nameEn: "Chinese Buddhism",
      nameZh: "中国佛教",
      historicalOrigins:
        "Du nhập từ Ấn Độ và Trung Á vào thời Đông Hán (khoảng thế kỷ I SCN) qua Con đường Tơ lụa. Qua nhiều thế kỷ dịch thuật (Cưu-ma-la-thập, Huyền Trang) và dung hợp với văn hóa Trung Hoa, hình thành các tông phái mang bản sắc Hán truyền vào thời Nam Bắc Triều – Tùy Đường.",
      majorThinkers: "Cưu-ma-la-thập (鸠摩罗什), Trí Khải (智顗 – Thiên Thai), Huyền Trang (玄奘 – Duy Thức), Pháp Tạng (法藏 – Hoa Nghiêm), Huệ Năng (惠能 – Thiền Tông).",
      fundamentalPrinciples:
        "Giải thoát khỏi khổ đau luân hồi bằng trí tuệ (Bát-nhã) nhận ra tính Duyên khởi – Tánh Không (缘起性空) và từ bi cứu độ chúng sinh (tinh thần Đại thừa). Truyền thống Hán truyền nhấn mạnh 'Phật tánh bình đẳng' – mọi chúng sinh đều có khả năng giác ngộ.",
      classicalTexts: ["《金刚经》 (Kinh Kim Cương)", "《心经》 (Bát Nhã Tâm Kinh)", "《六祖坛经》 (Pháp Bảo Đàn Kinh – Huệ Năng)", "《妙法莲华经》 (Kinh Pháp Hoa)"],
      philosophicalConcepts: [
        "Duyên khởi Tánh Không (缘起性空): Vạn vật tồn tại nương tựa lẫn nhau, không có tự tánh bất biến.",
        "Phật tánh & Đốn ngộ (佛性·顿悟): Giác ngộ trực tiếp bản tâm thanh tịnh (Thiền Tông).",
        "Nghiệp & Luân hồi (业·轮回): Quy luật nhân quả đạo đức trong nhận thức và hành vi.",
        "Bồ Tát đạo (菩萨道): Nhập thế cứu độ thay vì chỉ tu thoát tục cá nhân."
      ],
      historicalInfluence:
        "Định hình khái niệm tâm thức, từ vựng triết học (như 'thế giới', 'hiện tại', 'bình đẳng', 'giác ngộ'), nghệ thuật điêu khắc, kiến trúc chùa tháp, và gián tiếp thúc đẩy Tống Nho xây dựng hệ thống siêu hình học Lý học. Trực tiếp truyền sang Việt Nam (Luy Lâu) và các dòng Thiền Trúc Lâm, Tào Động, Lâm Tế.",
      contemporaryRelevance:
        "Phật giáo Nhân gian (人间佛教) kết hợp từ thiện xã hội, thiền chánh niệm và đối thoại với tâm lý học nhận thức hiện đại."
    },
    {
      id: "legalism",
      nameVi: "Pháp gia",
      nameEn: "Legalism",
      nameZh: "法家",
      historicalOrigins:
        "Hình thành trong thời Chiến Quốc nhằm giải quyết yêu cầu sống còn của các quốc gia cạnh tranh khốc liệt: làm thế nào để phú quốc cường binh, tập trung quyền lực và thi hành kỷ luật hiệu quả không phụ thuộc vào đạo đức cá nhân.",
      majorThinkers: "Quản Trọng (管仲 – tiền thân), Thương Ưởng (商鞅 – trọng Pháp), Thân Bất Hại (申不害 – trọng Thuật), Thận Đáo (慎到 – trọng Thế), Hàn Phi Tử (韩非子 – tập đại thành), Lý Tư (李斯).",
      fundamentalPrinciples:
        "Bản tính con người vốn xu lợi tránh hại ('Hiếu lợi ố hại'), do đó không thể trị quốc chỉ bằng giáo hóa đạo đức. Cần bộ máy kết hợp Pháp (luật lệ công khai, thưởng nặng phạt nghiêm), Thuật (kỹ thuật kiểm soát quan lại của quân chủ) và Thế (vị thế quyền lực tối cao).",
      classicalTexts: ["《韩非子》 (Hàn Phi Tử)", "《商君书》 (Thương Quân Thư)", "《管子》 (Quản Tử)"],
      philosophicalConcepts: [
        "Pháp – Thuật – Thế (法·术·势): Ba trụ cột quản trị nhà nước tập quyền.",
        "Hình bất tị đại phu (刑不避大夫): Pháp luật áp dụng bình đẳng với mọi thần dân (trừ nhà vua).",
        "Tín thưởng tất phạt (信赏必罚): Phần thưởng và hình phạt phải chắc chắn, nhất quán.",
        "Biến pháp thích thời (变法适时): Thể chế phải thay đổi theo bối cảnh lịch sử, không rập khuôn cổ nhân."
      ],
      historicalInfluence:
        "Trực tiếp giúp nước Tần thống nhất Trung Hoa năm 221 TCN. Dù bị lên án công khai sau khi nhà Tần sụp đổ chóng vánh, kỹ thuật hành chính và luật pháp của Pháp gia đã ngấm sâu vào bộ máy đế chế suốt 2.000 năm ('Ngoại Nho nội Pháp').",
      contemporaryRelevance:
        "Cung cấp góc nhìn lịch sử về thể chế pháp trị (rule by law vs rule of law), thiết kế cơ chế khuyến khích (incentive design) và quản trị tuân thủ trong tổ chức quy mô lớn."
    },
    {
      id: "mohism",
      nameVi: "Mặc gia",
      nameEn: "Mohism",
      nameZh: "墨家",
      historicalOrigins:
        "Do Mặc Địch (Mặc Tử, khoảng 470–391 TCN) sáng lập đầu thời Chiến Quốc, xuất thân từ tầng lớp thợ thủ công và dân thường – đối lập trực tiếp với Nho gia đại diện cho truyền thống sĩ phu quý tộc.",
      majorThinkers: "Mặc Tử (墨子), Cầm Hoạt Ly (禽滑釐), và nhóm Hậu Mặc gia (tác giả Mặc Kinh – logic học).",
      fundamentalPrinciples:
        "Chủ trương tình yêu thương phổ quát không phân biệt thân sơ ('Kiêm ái'), phản đối chiến tranh xâm lược ('Phi công'), thực hành tiết kiệm chống phô trương tang lễ/nhạc lễ ('Tiết dụng', 'Tiết táng'), đề cao người tài đức bất kể xuất thân ('Thượng hiền').",
      classicalTexts: ["《墨子》 (Mặc Tử – gồm 10 luận đề cốt lõi và các thiên Mặc Biện về logic, quang học, cơ học)"],
      philosophicalConcepts: [
        "Kiêm tương ái, giao tương lợi (兼相爱，交相利): Yêu thương bình đẳng gắn với lợi ích chung.",
        "Phi công (非攻): Lên án chiến tranh phi nghĩa bằng lý lẽ kinh tế và đạo đức.",
        "Tam biểu pháp (三表法): Ba tiêu chuẩn kiểm chứng chân lý (gốc lịch sử, kinh nghiệm thực chứng của dân, hiệu quả thực tiễn).",
        "Mặc Biện (墨辩): Hệ thống logic hình thức và khoa học tự nhiên (quang học lỗ nhỏ, đòn bẩy) cổ đại."
      ],
      historicalInfluence:
        "Từng là 'Hiển học' ngang hàng với Nho gia suốt thời Chiến Quốc, nổi tiếng với kỹ thuật thủ thành và tổ chức kỷ luật chặt chẽ. Tuy nhiên suy tàn mạnh sau khi nhà Tần thống nhất và Hán Vũ Đế độc tôn Nho thuật; được phục hưng nghiên cứu từ cuối thời Thanh – Dân Quốc.",
      contemporaryRelevance:
        "Được học giả hiện đại đánh giá cao vì tinh thần chủ nghĩa vị lợi phổ quát, chủ nghĩa hòa bình, tư duy thực nghiệm khoa học và bình đẳng cơ hội."
    },
    {
      id: "school-of-names",
      nameVi: "Danh gia",
      nameEn: "School of Names / Logicians",
      nameZh: "名家",
      historicalOrigins:
        "Nảy sinh trong các cuộc tranh biện ngoại giao và pháp lý thời Chiến Quốc về mối quan hệ giữa tên gọi/khái niệm ('Danh' 名) và thực tại khách quan ('Thực' 实).",
      majorThinkers: "Huệ Thi (惠施 – bạn tri âm của Trang Tử), Công Tôn Long (公孙龙), Đặng Tích (邓析).",
      fundamentalPrinciples:
        "Phân tích bản chất ngôn ngữ, phạm trù nhận thức, tính tương đối của không-thời gian và logic phân loại khái niệm nhằm bóc trần các ngộ nhận trong diễn ngôn thông thường.",
      classicalTexts: ["《公孙龙子》 (Công Tôn Long Tử)", "Thiên 'Thiên hạ' trong 《庄子》 (ghi lại 10 mệnh đề của Huệ Thi)"],
      philosophicalConcepts: [
        "Bạch mã phi mã (白马非马): 'Ngựa trắng không phải ngựa' – phân biệt giữa ngoại diên (extension) và nội hàm (intension) của khái niệm.",
        "Ly kiên bạch (离坚白): Tách rời thuộc tính cảm giác (cứng và trắng) trong nhận thức luận.",
        "Lịch vật thập sự (历物十事): Mười nghịch lý của Huệ Thi về vô hạn, tương đối và tính liên tục (ví dụ: 'Một thước gậy mỗi ngày bớt nửa, muôn đời không hết')."
      ],
      historicalInfluence:
        "Bị các phái thực dụng (Nho, Pháp) phê phán là 'biện thuyết vô ích cho chính trị', nhưng thực chất đã đặt nền tảng cho nhận thức luận, ngữ nghĩa học và tranh luận triết học ở Tuân Tử và Trang Tử.",
      contemporaryRelevance:
        "Được so sánh với triết học phân tích, ngôn ngữ học logic và nghịch lý Zeno trong triết học phương Tây."
    },
    {
      id: "military-school",
      nameVi: "Binh gia",
      nameEn: "Military School",
      nameZh: "兵家",
      historicalOrigins:
        "Hình thành khi chiến tranh thời Xuân Thu–Chiến Quốc chuyển từ giao chiến quy mô nhỏ của xe ngựa quý tộc sang chiến tranh quy mô hàng chục vạn quân đòi hỏi kế hoạch hậu cần, tình báo và chiến lược dài hạn.",
      majorThinkers: "Tôn Vũ (孙武 / Tôn Tử), Tôn Tẫn (孙膑), Ngô Khởi (吴起), Úy Liêu Tử (尉缭子).",
      fundamentalPrinciples:
        "Chiến tranh là 'quốc chi đại sự' (việc sống còn của quốc gia) nên phải cẩn trọng tối đa, đặt mục tiêu chiến thắng bằng mưu lược và ngoại giao thay vì hủy diệt thuần túy ('Bất chiến nhi khuất nhân chi binh').",
      classicalTexts: ["《孙子兵法》 (Tôn Tử Binh Pháp)", "《吴子》 (Ngô Tử)", "《孙膑兵法》 (Tôn Tẫn Binh Pháp – khai quật tại Ngân Tước Sơn năm 1972)"],
      philosophicalConcepts: [
        "Tri bỉ tri kỷ, bách chiến bất đãi (知彼知己，百战不殆): Biết mình biết người.",
        "Binh giả, quỷ đạo dã (兵者，诡道也): Nghệ thuật bất đối xứng thông tin và nghi binh.",
        "Kỳ Chính tương sinh (奇正相生): Phối hợp linh hoạt giữa chính quy (Chính) và đột biến (Kỳ).",
        "Toàn thắng (全胜): Giành lợi thế chiến lược với tổn thất vật chất – con người thấp nhất."
      ],
      historicalInfluence:
        "Ảnh hưởng sâu rộng tới tư duy quân sự Đông Á (bao gồm binh pháp Đại Việt như Trần Hưng Đạo, Nguyễn Trãi) và trở thành tài liệu chiến lược kinh điển toàn cầu.",
      contemporaryRelevance:
        "Thường được đọc trong quản trị chiến lược, cạnh tranh thị trường, đàm phán và lý thuyết trò chơi (tuy nhiên giới học thuật lưu ý không nên thô thiển hóa mọi quan hệ kinh doanh thành 'chiến trường')."
    },
    {
      id: "yinyang-school",
      nameVi: "Âm Dương gia",
      nameEn: "Yin-Yang / Naturalist School",
      nameZh: "阴阳家",
      historicalOrigins:
        "Phát triển thành trường phái độc lập thời Chiến Quốc (học viện Tắc Hạ nước Tề) bằng cách hợp nhất khái niệm Âm Dương cổ đại với hệ thống Ngũ Hành (Kim-Mộc-Thủy-Hỏa-Thổ) để giải thích vận động tự nhiên và chuyển giao triều đại.",
      majorThinkers: "Trâu Diễn (邹衍), và các tác giả tập hợp trong 《管子》, 《吕氏春秋》.",
      fundamentalPrinciples:
        "Vũ trụ vận động theo chu kỳ tuần hoàn của hai khí đối lập – nương tựa (Âm và Dương) và năm trạng thái chuyển hóa (Ngũ Hành). Lịch sử chính trị cũng tuân theo quy luật 'Ngũ đức chung thủy' (năm đức lần lượt thay thế nhau).",
      classicalTexts: ["Các trích đoạn trong 《史记·孟子荀卿列传》", "《吕氏春秋》 (Lã Thị Xuân Thu)", "《淮南子》 (Hoài Nam Tử)"],
      philosophicalConcepts: [
        "Âm Dương tiêu trưởng (阴阳消长): Sự chuyển hóa động giữa hai cực đối lập.",
        "Ngũ đức chung thủy (五德终始): Học thuyết hợp thức hóa sự thay đổi triều đại bằng chu kỳ Ngũ Hành.",
        "Thiên nhân đồng cấu (天人同构): Tương ứng cấu trúc giữa tự nhiên, cơ thể người và xã hội."
      ],
      historicalInfluence:
        "Dù biến mất với tư cách một môn phái riêng vào thời Hán, toàn bộ hệ thống khái niệm của Âm Dương gia đã thẩm thấu vào Y học cổ truyền (Hoàng Đế Nội Kinh), Kinh học (Đổng Trọng Thư), lịch pháp, thiên văn và các hệ thống thuật số.",
      contemporaryRelevance:
        "Giá trị lịch sử tri thức và tư duy hệ thống tuần hoàn; cần phân biệt rõ giữa mô hình vũ trụ luận cổ đại với vật lý và sinh học thực nghiệm hiện đại."
    },
    {
      id: "xuanxue",
      nameVi: "Huyền học Ngụy – Tấn",
      nameEn: "Wei-Jin Xuanxue (Neo-Daoism)",
      nameZh: "魏晋玄学",
      historicalOrigins:
        "Khởi phát vào thế kỷ III–IV SCN (thời Tam Quốc – Lưỡng Tấn) khi chế độ Kinh học chương cú đời Hán suy tàn cùng biến loạn chính trị. Giới danh sĩ tìm cách dung hợp Nho gia và Đạo gia qua ba bộ sách kinh điển gọi là 'Tam Huyền' (《Chu Dịch》, 《Lão Tử》, 《Trang Tử》).",
      majorThinkers: "Hà晏 (Hà Án), Vương Bật (王弼), Kê Khang (嵇康), Nguyễn Tịch (阮籍), Hướng Tú (向秀), Quách Tượng (郭象).",
      fundamentalPrinciples:
        "Đặt vấn đề bản thể luận sâu sắc ('Bản – Mạt', 'Hữu – Vô'): Vương Bật chủ trương 'Dĩ Vô vi bản' (lấy cái Vô hình không định danh làm gốc của vạn vật hữu hình), đồng thời luận giải mối quan hệ giữa 'Danh giáo' (lễ pháp Nho gia) và 'Tự nhiên' (bản tính tự do Đạo gia).",
      classicalTexts: ["《老子注》 & 《周易注》 (Vương Bật)", "《庄子注》 (Quách Tượng)", "《声无哀乐论》 (Kê Khang)", "《世说新语》 (Thế Thuyết Tân Ngữ)"],
      philosophicalConcepts: [
        "Dĩ Vô vi bản (以无为本): Vạn vật hữu hình đều nương tựa vào bản thể Vô làm căn nguyên.",
        "Đắc ý vong ngôn (得意忘言): Ngôn ngữ và hình tượng quẻ Dịch chỉ là phương tiện; nắm được ý nghĩa thì không câu nệ vào chữ nghĩa.",
        "Việt danh giáo nhi nhậm tự nhiên (越名教而任自然): Tinh thần vượt thoát lễ giáo giả tạo để sống chân thật với tự nhiên (Trúc Lâm Thất Hiền).",
        "Độc hóa (独化): Vạn vật tự sinh tự hóa trong thế giới hiện tượng (Quách Tượng)."
      ],
      historicalInfluence:
        "Mở đường cho tư duy siêu hình học trừu tượng tại Trung Quốc, làm cầu nối ngôn ngữ để Phật giáo Đại thừa (đặc biệt là Bát-nhã Tánh Không) thâm nhập vào giới trí thức Hán và thúc đẩy sự ra đời của mỹ học thư pháp (Vương Hi Chi), hội họa sơn thủy và thi ca điền viên (Đào Uyên Minh).",
      contemporaryRelevance:
        "Gợi mở triết học ngôn ngữ (quan hệ Ngôn – Tượng – Ý), mỹ học tối giản và sự cân bằng giữa trách nhiệm xã hội với tự do nội tâm cá nhân."
    },
    {
      id: "neo-confucianism",
      nameVi: "Tống – Minh Lý học & Tâm học",
      nameEn: "Song-Ming Neo-Confucianism",
      nameZh: "宋明理学（程朱理学·陆王心学）",
      historicalOrigins:
        "Hình thành từ thế kỷ XI đến thế kỷ XVI (thời Bắc Tống, Nam Tống và Minh) nhằm phục hưng vị thế triết học của Nho gia trước sức hấp dẫn siêu hình của Phật giáo Thiền tông và Đạo giáo. Các nhà Tống Nho xây dựng hệ thống vũ trụ luận – tâm tính luận đồ sộ trên nền tảng Tứ Thư và Chu Dịch.",
      majorThinkers: "Chu Đôn Di (周敦颐), Trương Tải (张载), Trình Hạo (程颢), Trình Di (程颐), Chu Hy (朱熹 – tập đại thành Lý học), Lục Cửu Uyên (陆九渊), Vương Dương Minh (王阳明 – tập đại thành Tâm học).",
      fundamentalPrinciples:
        "Khẳng định 'Thiên Lý' (天理 – nguyên lý đạo đức và trật tự vũ trụ) hiện hữu trong muôn vật và bản tính con người. Phái Trình–Chu chủ trương 'Tính tức Lý' (cần học rộng xét kỹ vạn vật – Cách vật trí tri); phái Lục–Vương chủ trương 'Tâm tức Lý' (bản tâm con người vốn sẵn đủ Thiên lý, cần đánh thức Lương tri và hợp nhất nhận thức với hành động).",
      classicalTexts: ["《四书章句集注》 (Tứ Thư Chương Cú Tập Chú – Chu Hy)", "《近思录》 (Cận Tư Lục)", "《传习录》 (Truyền Tập Lục – Vương Dương Minh)", "《太极图说》 & 《西铭》"],
      philosophicalConcepts: [
        "Lý nhất phân thù (理一分殊): Nguyên lý tối cao là một, nhưng biểu hiện cụ thể đa dạng trong từng sự vật.",
        "Cách vật trí tri (格物致知): Khảo cứu thấu đáo nguyên lý sự vật để mở rộng tri thức đạo đức đến tột cùng.",
        "Tâm tức Lý & Trí lương tri (心即理·致良知): Đạo lý không nằm ngoài tâm; phát huy trực giác đạo đức bẩm sinh.",
        "Tri hành hợp nhất (知行合一): Biết thật sự phải biểu hiện ngay trong hành động thực tiễn (Vương Dương Minh)."
      ],
      historicalInfluence:
        "Bản chú giải Tứ Thư của Chu Hy trở thành sách giáo khoa chính thức cho kỳ thi Khoa cử tại Trung Quốc (từ 1313 đến 1905), Việt Nam (thời Lê–Nguyễn) và Triều Tiên (Joseon). Tâm học Vương Dương Minh tạo ảnh hưởng sâu sắc tới tinh thần cải cách xã hội cuối Minh và thời Minh Trị Duy Tân ở Nhật Bản.",
      contemporaryRelevance:
        "Trụ cột của 'Tân Nho gia đương đại' (Modern New Confucianism) trong đối thoại về đạo đức kinh doanh, quyền con người, giáo dục nhân cách và trách nhiệm công dân ('Vì trời đất lập tâm, vì sinh dân lập mệnh' – Trương Tải)."
    },
    {
      id: "qianjia-evidential",
      nameVi: "Thực học & Khảo cứ học Minh – Thanh",
      nameEn: "Ming-Qing Practical Learning & Evidential Scholarship",
      nameZh: "明清实学与乾嘉考据学",
      historicalOrigins:
        "Ra đời từ nỗi đau mất nước thời Minh mạt – Thanh sơ (thế kỷ XVII). Các bậc đại nho phê phán lối đàm luận tâm tính sáo rỗng ('Không đàm tâm tính') của giới quan lại cuối Minh, kêu gọi quay về học vấn thực tiễn giúp đời ('Kinh thế trí dụng') và kiểm chứng văn bản cổ bằng chứng cứ ngữ âm, văn tự, sử liệu ('Thực sự cầu thị').",
      majorThinkers: "Cố Viêm Vũ (顾炎武), Hoàng Tông Hi (黄宗羲), Vương Phu Chi (王夫之), Nhan Nguyên (颜元), Đới Chấn (戴震), Tiền Đại Hân (钱大昕), Đoàn Ngọc Tài (段玉裁), Vương Niệm Tôn (王念孙).",
      fundamentalPrinciples:
        "Học thuật phải có ích cho quản trị xã hội, kinh tế, thủy lợi, địa lý ('Kinh thế trí dụng') và mọi kết luận giải thích kinh điển phải dựa trên bằng chứng ngôn ngữ học lịch sử, văn bản học, kim thạch học khách quan thay vì suy diễn chủ quan ('Vô trưng bất tín' – không có bằng chứng thì không tin).",
      classicalTexts: ["《日知录》 (Nhật Tri Lục – Cố Viêm Vũ)", "《明夷待访录》 (Minh Di Đãi Phỏng Lục – Hoàng Tông Hi)", "《孟子字义疏证》 (Đới Chấn)", "《说文解字注》 (Đoàn Ngọc Tài)"],
      philosophicalConcepts: [
        "Kinh thế trí dụng (经世致用): Học vấn phải giải quyết bài toán thực tế của quốc kế dân sinh.",
        "Thực sự cầu thị (实事求是): Tìm kiếm chân lý từ sự thật và chứng cứ văn bản xác thực.",
        "Thiên hạ vi công (天下为公): Hoàng Tông Hi phê phán quân chủ chuyên chế coi thiên hạ là tài sản riêng của một dòng họ.",
        "Lý tồn hồ dục (理存乎欲): Đới Chấn khẳng định đạo lý không tách rời nhu cầu sinh tồn chính đáng của con người."
      ],
      historicalInfluence:
        "Đặt nền móng phương pháp luận khoa học bản địa về ngữ âm học lịch sử (phân bộ cổ âm), huấn诂 học, hiệu勘 học và khảo cổ kim thạch; đồng thời truyền cảm hứng trực tiếp cho học giả Lê Quý Đôn (《Vân Đài Loại Ngữ》) tại Việt Nam thế kỷ XVIII.",
      contemporaryRelevance:
        "Phương châm 'Thực sự cầu thị' và tinh thần kiểm chứng nguồn tài liệu gốc (Primary Source Verification) chính là kim chỉ nam của nghiên cứu học thuật hiện đại.",
      vietnamRelevance:
        "Ảnh hưởng trực tiếp tới tầng lớp sĩ phu Thực học Việt Nam thế kỷ XVIII–XIX như Lê Quý Đôn (《Vân Đài Loại Ngữ》, 《Phủ Biên Tạp Lục》) và Phan Huy Chú (《Lịch Triều Hiến Chương Loại Chí》)."
    }
  ],

  classicalTexts: [
    {
      id: "lunyu",
      titleZh: "《论语》",
      titleVi: "Luận Ngữ",
      titleEn: "The Analects",
      era: "Xuân Thu – đầu Chiến Quốc (thế kỷ V–III TCN)",
      school: "Nho gia",
      summary:
        "Tập hợp 20 thiên ghi chép lời giảng và đối thoại giữa Khổng Tử với các đệ tử, do học trò nhiều thế hệ biên tập. Đây là tác phẩm nền tảng nhất để hiểu khái niệm Nhân, Lễ, Hiếu, Quân tử và triết lý giáo dục Trung Hoa.",
      excerptZh: "学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？",
      excerptPinyin: "Xué ér shí xí zhī, bù yì yuè hū? Yǒu péng zì yuǎnfāng lái, bù yì lè hū? Rén bù zhī ér bù yùn, bù yì jūnzǐ hū?",
      excerptVi: "Học mà thường xuyên ôn tập, chẳng cũng vui sướng sao? Có bạn từ phương xa tới, chẳng cũng mừng vui sao? Người đời không hiểu mình mà mình không giận hờn, chẳng phải người quân tử sao?",
      excerptEn: "To learn and in due time practice what one has learned, is that not also a pleasure? To have friends come from afar, is that not also a joy? Not to resent being unrecognized, is that not the mark of a cultivated person?"
    },
    {
      id: "daodejing",
      titleZh: "《道德经》",
      titleVi: "Đạo Đức Kinh",
      titleEn: "Tao Te Ching",
      era: "Xuân Thu – Chiến Quốc (bản Quách Điếm thế kỷ IV TCN; bản Mã Vương Đôi thế kỷ II TCN)",
      school: "Đạo gia",
      summary:
        "Văn bản khoảng 5.000 chữ chia làm 81 chương (Đạo kinh và Đức kinh), tương truyền của Lão Tử. Tác phẩm bàn về bản thể vô hình của Đạo, nghệ thuật trị quốc vô vi và phép ứng xử lấy nhu thắng cương.",
      excerptZh: "道可道，非常道；名可名，非常名。",
      excerptPinyin: "Dào kě dào, fēi cháng Dào; míng kě míng, fēi cháng míng.",
      excerptVi: "Đạo mà có thể nói ra thành lời, thì không phải là Đạo hằng cửu; Tên mà có thể gọi thành danh định, thì không phải là Danh hằng cửu.",
      excerptEn: "The Dao that can be spoken of is not the constant Dao; the name that can be named is not the constant name."
    },
    {
      id: "zhuangzi",
      titleZh: "《庄子》",
      titleVi: "Trang Tử (Nam Hoa Kinh)",
      titleEn: "Zhuangzi",
      era: "Thời Chiến Quốc (thế kỷ IV–III TCN)",
      school: "Đạo gia",
      summary:
        "Gồm 33 thiên (7 Nội thiên được giới học thuật xem là sát tư tưởng Trang Chu nhất), sử dụng ngụ ngôn giàu trí tưởng tượng như Côn Bằng, Hồ Điệp mộng, Bào Đinh giải ngưu để phá bỏ sự cố chấp ngôn ngữ và đạt tự do tinh thần.",
      excerptZh: "天地与我并生，而万物与我为一。",
      excerptPinyin: "Tiāndì yǔ wǒ bìngshēng, ér wànwù yǔ wǒ wéi yī.",
      excerptVi: "Trời đất cùng sinh ra với ta, và vạn vật cùng ta là một thể thống nhất.",
      excerptEn: "Heaven and earth were born at the same time I was, and the ten thousand things are one with me."
    },
    {
      id: "mengzi",
      titleZh: "《孟子》",
      titleVi: "Mạnh Tử",
      titleEn: "Mencius",
      era: "Giữa thời Chiến Quốc (thế kỷ IV TCN)",
      school: "Nho gia",
      summary:
        "Ghi chép tư tưởng Mạnh Kha – phát triển Nho học theo hướng khẳng định 'Tính Thiện' (tứ đoan: Trắc ẩn, Tu ố, Từ nhượng, Thị phi) và tư tưởng dân bản tiến bộ ('Dân vi quý, xã tắc thứ chi, quân vi khinh').",
      excerptZh: "民为贵，社稷次之，君为轻。",
      excerptPinyin: "Mín wéi guì, shèjì cì zhī, jūn wéi qīng.",
      excerptVi: "Dân là quý nhất, kế đến là xã tắc, vua thì nhẹ hơn.",
      excerptEn: "The people are of supreme importance; the altars of soil and grain come next; last comes the ruler."
    },
    {
      id: "sunzi",
      titleZh: "《孙子兵法》",
      titleVi: "Tôn Tử Binh Pháp",
      titleEn: "The Art of War",
      era: "Cuối Xuân Thu – đầu Chiến Quốc",
      school: "Binh gia",
      summary:
        "13 thiên hệ thống hóa tư duy chiến lược toàn diện từ tính toán trước chiến tranh (Thủy kế), hậu cần (Tác chiến), mưu công, hình thế, hư thực đến gián điệp. Bản thẻ tre Ngân Tước Sơn xác nhận niên đại cổ xưa của văn bản.",
      excerptZh: "是故百战百胜，非善之善者也；不战而屈人之兵，善之善者也。",
      excerptPinyin: "Shì gù bǎi zhàn bǎi shèng, fēi shàn zhī shàn zhě yě; bù zhàn ér qū rén zhī bīng, shàn zhī shàn zhě yě.",
      excerptVi: "Cho nên trăm trận trăm thắng chưa phải là bậc tối thiện; không cần đánh mà khuất phục được quân địch mới là bậc tối thiện nhất.",
      excerptEn: "Therefore, winning a hundred victories in a hundred battles is not the acme of skill. Subduing the enemy without fighting is the acme of skill."
    },
    {
      id: "yijing",
      titleZh: "《易经》",
      titleVi: "Kinh Dịch (Chu Dịch)",
      titleEn: "I Ching / Book of Changes",
      era: "Tích tụ từ Tây Chu đến Xuân Thu–Chiến Quốc (Thập Dực)",
      school: "Nho gia / Kinh điển chung",
      summary:
        "Gồm Kinh (64 quẻ & 384 hào từ dùng cho bói cỏ thi thời Chu) và Truyện ('Thập Dực' giải thích triết lý biến dịch vũ trụ – đạo đức). Ảnh hưởng sâu sắc đến cả Nho gia, Đạo gia, Tống Lý học và thuật số học.",
      excerptZh: "天行健，君子以自强不息；地势坤，君子以厚德载物。",
      excerptPinyin: "Tiān xíng jiàn, jūnzǐ yǐ zìqiáng bù xī; dì shì kūn, jūnzǐ yǐ hòudé zài wù.",
      excerptVi: "Trời vận hành mạnh mẽ không ngừng, người quân tử noi theo đó mà tự cường không nghỉ; Thế đất thuận dày, người quân tử lấy đức dày để nâng đỡ vạn vật.",
      excerptEn: "Heaven moves with vigor; thus the noble person strives ceaselessly for self-strengthening. The earth's condition is receptive devotion; thus the noble person upholds all things with generous virtue."
    },
    {
      id: "shiji",
      titleZh: "《史记》",
      titleVi: "Sử Ký",
      titleEn: "Records of the Grand Historian",
      era: "Tây Hán (hoàn thành khoảng 91 TCN)",
      school: "Sử học / Tư tưởng tổng hợp",
      summary:
        "Tác phẩm đồ sộ 130 thiên của Tư Mã Thiên (12 Bản kỷ, 10 Biểu, 8 Thư, 30 Thế gia, 70 Liệt truyện), thuật lại lịch sử từ Hoàng Đế đến Hán Vũ Đế với mục tiêu 'Cứu thiên nhân chi tế, thông cổ kim chi biến, thành nhất gia chi ngôn'.",
      excerptZh: "究天人之际，通古今之变，成一家之言。",
      excerptPinyin: "Jiū tiān rén zhī jì, tōng gǔ jīn zhī biàn, chéng yī jiā zhī yán.",
      excerptVi: "Tìm hiểu chỗ giao thoa giữa Trời và Người, thông suốt biến chuyển từ xưa tới nay, lập nên một nhà ngôn luận riêng.",
      excerptEn: "To examine the boundary between Heaven and humanity, comprehend the transformations from past to present, and form a coherent school of thought."
    },
    {
      id: "hanfeizi",
      titleZh: "《韩非子》",
      titleVi: "Hàn Phi Tử",
      titleEn: "Han Feizi",
      era: "Cuối Chiến Quốc (Thế kỷ III TCN)",
      school: "Pháp gia (Tập đại thành)",
      summary:
        "Bộ trước tác 55 thiên tập hợp lý thuyết Pháp (luật pháp minh bạch), Thuật (kỹ thuật kiểm soát bộ máy quan lại) và Thế (vị thế quyền lực), ảnh hưởng trực tiếp đến mô hình hành chính quận–huyện thống nhất thời Tần Thủy Hoàng.",
      excerptZh: "法不阿贵，绳不挠曲；刑过不避大臣，赏善不遗匹夫。",
      excerptPinyin: "Fǎ bù ē guì, shéng bù náo qū; xíng guò bù bì dàchén, shǎng shàn bù yí pǐfū.",
      excerptVi: "Pháp luật không thiên vị kẻ quyền quý như dây mực thợ mộc không uốn cong theo gỗ vẹo; phạt lỗi không tránh đại thần, thưởng người lành không bỏ sót thường dân.",
      excerptEn: "The law does not fawn on the noble, just as the plumb line does not bend for crooked wood; penalties do not spare high ministers, and rewards do not overlook commoners."
    },
    {
      id: "huangdi-neijing-text",
      titleZh: "《黄帝内经》",
      titleVi: "Hoàng Đế Nội Kinh",
      titleEn: "Yellow Emperor's Inner Canon",
      era: "Chiến Quốc – Tây Hán (khoảng thế kỷ II–I TCN)",
      school: "Y học Cổ điển & Triết học Tự nhiên",
      summary:
        "Bộ kinh điển y lý gồm Tố Vấn (81 thiên) và Linh Khu (81 thiên), trình bày cuộc đối thoại giữa Hoàng Đế và Kỳ Bá về quy luật Âm Dương, Ngũ Hành, Tạng Tượng, Kinh Lạc và phép Dưỡng sinh thuận 4 mùa.",
      excerptZh: "圣人不治已病治未病，不治已乱治未乱，此之谓也。",
      excerptPinyin: "Shèngrén bù zhì yǐ bìng zhì wèibìng, bù zhì yǐ luàn zhì wèiluàn, cǐ zhī wèi yě.",
      excerptVi: "Bậc thánh nhân lo chữa trị từ khi bệnh chưa thành hình, lo giữ ổn định từ khi loạn chưa bùng phát, chính là ý nghĩa đó vậy.",
      excerptEn: "The sage does not wait to treat illness after it arises, nor wait to order chaos after it breaks out—this is preventive cultivation."
    },
    {
      id: "daxue",
      titleZh: "《大学》",
      titleVi: "Đại Học",
      titleEn: "The Great Learning",
      era: "Chiến Quốc – Tần Hán (vốn là thiên 42 trong Lễ Ký, được Chu Hy tách thành Tứ Thư)",
      school: "Nho gia / Tống Nho",
      summary:
        "Bản cương lĩnh chính trị – đạo đức ngắn gọn bậc nhất của Nho học, đề xuất 'Tam cương lĩnh' (Minh minh đức, Thân dân, Chỉ ư chí thiện) và 'Bát điều mục' (Cách vật, Trí tri, Thành ý, Chính tâm, Tu thân, Tề gia, Trị quốc, Bình thiên hạ).",
      excerptZh: "古之欲明明德于天下者，先治其国；欲治其国者，先齐其家；欲齐其家者，先修其身。",
      excerptPinyin: "Gǔ zhī yù míng míngdé yú tiānxià zhě, xiān zhì qí guó; yù zhì qí guó zhě, xiān qí qí jiā; yù qí qí jiā zhě, xiān xiū qí shēn.",
      excerptVi: "Người xưa muốn làm sáng tỏ đức sáng trong thiên hạ, trước hết phải trị yên nước mình; muốn trị nước mình, trước hết phải tề chỉnh nhà mình; muốn tề chỉnh nhà mình, trước hết phải tu sửa bản thân.",
      excerptEn: "The ancients who wished to illustrate illustrious virtue throughout the world first ordered well their own states; wishing to order well their states, they first regulated their families; wishing to regulate their families, they first cultivated their persons."
    },
    {
      id: "zhongyong",
      titleZh: "《中庸》",
      titleVi: "Trung Dung",
      titleEn: "The Doctrine of the Mean",
      era: "Chiến Quốc (tương truyền do Tử Tư – cháu nội Khổng Tử soạn)",
      school: "Nho gia / Tống Nho",
      summary:
        "Tác phẩm chiều sâu siêu hình học cao nhất trong Tứ Thư, luận về sự hài hòa tâm lý ('Trung Hòa'), đạo Thành ('Chí thành vô tức') kết nối bản tính con người với đạo của Trời Đất và phương pháp học tập 5 bước (Bác học, Thẩm vấn, Thận tư, Minh biện, Độc hành).",
      excerptZh: "中也者，天下之大本也；和也者，天下之达道也。致中和，天地位焉，万物育焉。",
      excerptPinyin: "Zhōng yě zhě, tiānxià zhī dà běn yě; hé yě zhě, tiānxià zhī dá dào yě. Zhì zhōnghé, tiāndì wèi yān, wànwù yù yān.",
      excerptVi: "Trung là cái gốc lớn của thiên hạ; Hòa là con đường thông đạt của thiên hạ. Đạt tới mức Trung Hòa tột cùng thì trời đất yên ngôi vị, vạn vật sinh sôi nảy nở.",
      excerptEn: "Equilibrium is the great root of the world, and harmony is its universal path. When equilibrium and harmony are realized to the highest degree, heaven and earth attain their proper order and all things flourish."
    },
    {
      id: "mozi",
      titleZh: "《墨子》",
      titleVi: "Mặc Tử",
      titleEn: "Mozi",
      era: "Thời Chiến Quốc (thế kỷ V–III TCN)",
      school: "Mặc gia",
      summary:
        "Hiện còn 53 thiên ghi lại tư tưởng Mặc Địch và học trò: 10 luận thuyết chính trị xã hội (Kiêm ái, Phi công, Thượng hiền, Tiết dụng...), các thiên Mặc Kinh bàn về logic học, hình học, quang học lỗ nhỏ và kỹ thuật phòng thủ thành trì.",
      excerptZh: "若使天下兼相爱，爱人若爱其身，犹有不孝者乎？视父兄与君若其身，恶施不孝？",
      excerptPinyin: "Ruò shǐ tiānxià jiān xiāng ài, ài rén ruò ài qí shēn, yóu yǒu bù xiào zhě hū? Shì fù xiōng yǔ jūn ruò qí shēn, wū shī bù xiào?",
      excerptVi: "Nếu khiến thiên hạ đều yêu thương lẫn nhau, thương người như thương chính thân mình, thì còn kẻ nào bất hiếu chăng? Coi cha anh và vua như chính thân mình, sao còn làm điều bất hiếu được?",
      excerptEn: "If everyone in the world practiced universal mutual love, loving others as one's own person, would there still be anyone unfilial? Viewing father, elder brother, and ruler as oneself, how could anyone practice unfiliality?"
    },
    {
      id: "chuanxilu",
      titleZh: "《传习录》",
      titleVi: "Truyền Tập Lục",
      titleEn: "Instructions for Practical Living (Chuanxilu)",
      era: "Triều Minh (thế kỷ XVI SCN – Vương Dương Minh)",
      school: "Tâm học Dương Minh (Nho gia)",
      summary:
        "Tập hợp ngữ lục và thư từ triết học của Vương Thủ Nhân (Vương Dương Minh), trình bày những mệnh đề cách mạng: 'Tâm tức Lý', 'Tri hành hợp nhất' và 'Trí lương tri', giải phóng chủ thể đạo đức khỏi sự giáo điều sách vở.",
      excerptZh: "知是行的主意，行是知的功夫；知是行之始，行是知之成。",
      excerptPinyin: "Zhī shì xíng de zhǔyì, xíng shì zhī de gōngfu; zhī shì xíng zhī shǐ, xíng shì zhī zhī chéng.",
      excerptVi: "Tri (biết) là chủ ý của Hành (làm), Hành là công phu thực hiện của Tri; Tri là khởi đầu của Hành, Hành là sự hoàn thành của Tri.",
      excerptEn: "Knowledge is the direction of action, and action is the effort of knowledge; knowledge is the beginning of action, and action is the completion of knowledge."
    },
    {
      id: "liuzutanjing",
      titleZh: "《六祖坛经》",
      titleVi: "Lục Tổ Pháp Bảo Đàn Kinh",
      titleEn: "The Platform Sutra of the Sixth Patriarch",
      era: "Triều Đường (thế kỷ VII–VIII SCN, Huệ Năng thuyết giảng tại Thiều Châu)",
      school: "Phật giáo Thiền Tông (Nam tông Đốn ngộ)",
      summary:
        "Tác phẩm duy nhất của một bậc Tổ sư Trung Hoa được tôn xưng là 'Kinh' (经). Đàn Kinh đặt nền tảng cho Thiền tông phương Nam với tư tưởng tự tánh thanh tịnh, đốn ngộ ngay giữa đời sống thường nhật mà không lệ thuộc văn tự hình tướng.",
      excerptZh: "菩提本无树，明镜亦非台；本来无一物，何处惹尘埃。",
      excerptPinyin: "Pútí běn wú shù, míngjìng yì fēi tái; běnlái wú yī wù, héchù rě chén'āi.",
      excerptVi: "Bồ-đề vốn chẳng phải cây, gương sáng cũng chẳng phải đài; xưa nay vốn không một vật, nơi nào bám bụi trần ai.",
      excerptEn: "Bodhi originally has no tree, nor has the bright mirror any stand; fundamentally there is not a single thing—where then could dust alight?"
    },
    {
      id: "zizhitongjian",
      titleZh: "《资治通鉴》",
      titleVi: "Tư Trị Thông Giám",
      titleEn: "Comprehensive Mirror in Aid of Governance",
      era: "Bắc Tống (hoàn thành năm 1084 SCN dưới chủ biên của Tư Mã Quang)",
      school: "Sử học Chính trị & Quản trị",
      summary:
        "Bộ biên niên thông sử đồ sộ gồm 294 quyển chép lịch sử 1.362 năm từ thời Chiến Quốc (403 TCN) đến cuối Ngũ Đại (959 SCN), phân tích nguyên nhân hưng vong của các triều đại để làm tấm gương quản trị nhà nước.",
      excerptZh: "鉴前世之兴衰，考当今之得失，嘉善矜恶，取是舍非。",
      excerptPinyin: "Jiàn qiánshì zhī xīngshuāi, kǎo dāngjīn zhī déshī, jiā shàn jīn è, qǔ shì shě fēi.",
      excerptVi: "Soi vào sự hưng thịnh và suy vong của các đời trước, khảo xét điều được mất của ngày nay, biểu dương điều thiện, răn ngừa cái ác, chọn điều đúng bỏ điều sai.",
      excerptEn: "To mirror the rise and fall of past ages, examine the gains and losses of the present, commend the good and admonish the evil, adopting what is right and discarding what is wrong."
    }
  ],

  comparisonMatrix: [
    {
      dimension: "Bản tính con người (人性论)",
      confucianism: "Hướng thiện / cần giáo hóa (Mạnh Tử: Tính thiện; Tuân Tử: Tính ác, cần Lễ để uốn nắn).",
      daoism: "Thuần phác tự nhiên (Phác 朴); bị làm méo mó bởi danh lợi và quy phạm nhân tạo.",
      legalism: "Vị kỷ, xu lợi tránh hại (Hiếu lợi ố hại); cần chế ước bằng pháp luật.",
      buddhism: "Mọi chúng sinh đều có Phật tánh (tỉnh giác), song bị che lấp bởi vô minh và tham-sân-si.",
      mohism: "Như tơ trắng dễ nhuộm ('Nhiễm ti'), phụ thuộc vào môi trường và gương lãnh đạo."
    },
    {
      dimension: "Cách trị quốc & Quản trị (治国之道)",
      confucianism: "Đức trị & Lễ trị: dùng giáo dục, đạo đức nêu gương và danh phận xã hội.",
      daoism: "Vô vi nhi trị: giảm can thiệp, giảm thuế má hình luật để dân tự vận hành.",
      legalism: "Pháp – Thuật – Thế: luật minh bạch, thưởng phạt nghiêm khắc, kiểm soát chặt bộ máy.",
      buddhism: "Thập thiện & Từ bi hộ quốc: điều hòa tâm thức xã hội, bổ trợ đạo đức công dân.",
      mohism: "Thượng hiền & Tiết kiệm: chọn người tài bất kể xuất thân, chống chiến tranh xa xỉ."
    },
    {
      dimension: "Thái độ với tri thức & ngôn ngữ",
      confucianism: "Học tập kinh điển lịch sử, 'Chính danh' để lời nói khớp trách nhiệm đạo đức.",
      daoism: "Hoài nghi giới hạn ngôn ngữ ('Đạo khả đạo phi thường Đạo'), đề cao trực giác tự nhiên.",
      legalism: "Chống đàm luận kinh viện vô bổ, đòi hỏi lời nói phải khớp kết quả công việc ('Hình danh tham đồng').",
      buddhism: "Ngôn ngữ chỉ là 'ngón tay chỉ trăng'; cần vượt văn tự để chứng ngộ thực tại Duyên khởi.",
      mohism: "Đề cao logic biện luận (Mặc Biện) và tiêu chuẩn kiểm chứng thực nghiệm ('Tam biểu pháp')."
    },
    {
      dimension: "Quan niệm về Lịch sử & Biến dịch (历史与时间观)",
      confucianism: "Tôn kính gương sáng Tam Đại (Nghiêu–Thuấn–Chu Công) nhưng vận dụng linh hoạt theo 'Thời trung' (Chu Dịch).",
      daoism: "Tuần hoàn tự nhiên ('Phản giả Đạo chi động'), hoài nghi cái gọi là 'tiến bộ kỹ trị' làm mất bản tính thuần phác.",
      legalism: "Tiến hóa lịch sử thực dụng ('Bất kỳ cổ, bất pháp thường'): thời thế thay đổi thì pháp chế bắt buộc phải đổi theo.",
      buddhism: "Vô thường (Anicca) và Duyên khởi: mọi hiện tượng thành–trụ–hoại–không liên tục trong dòng nhân quả.",
      mohism: "Thực tiễn lịch sử là nguồn kiểm chứng ('Bản chi ư cổ giả thánh vương chi sự') nhằm phục vụ lợi ích hiện tại của bách tính."
    },
    {
      dimension: "Thái độ với Kinh tế, Thương mại & Lợi ích (义利与经济观)",
      confucianism: "Trọng Nghĩa hơn Lợi ('Kiến lợi tư nghĩa'), đề cao dân sinh ('Phú chi nhiên hậu giáo chi') và truyền thống Nho thương giữ chữ Tín.",
      daoism: "Tri túc thường lạc (biết đủ thì luôn vui), giảm thiểu dục vọng tiêu dùng thái quá để bảo toàn sinh mệnh.",
      legalism: "Trọng nông chiến, kiểm soát chặt thương mại tự do và độc quyền tài nguyên chiến lược để làm mạnh ngân khố quốc gia.",
      buddhism: "Chánh mạng (sinh kế chân chính không gây hại chúng sinh), bố thí và tri ân trong kinh tế tự viện – xã hội.",
      mohism: "Giao tương lợi (交相利): khẳng định lợi ích công cộng thiết thực của dân chúng chính là tiêu chuẩn của chính nghĩa."
    },
    {
      dimension: "Phương pháp Tu dưỡng Thân – Tâm (身心修养工夫)",
      confucianism: "Thận độc (cẩn trọng khi ở một mình), Nội tỉnh, Tĩnh tọa và thực hành nhân nghĩa ngay trong quan hệ gia đình – xã hội.",
      daoism: "Tâm trai, Tọa vong (Trang Tử), thủ tĩnh đốc cực, điều hòa hơi thở và thuận theo tự nhiên.",
      legalism: "Không đặt nặng tu dưỡng tâm linh cá nhân mà rèn luyện kỷ luật tuân thủ pháp chế và hiệu năng công vụ.",
      buddhism: "Tam vô lậu học (Giới – Định – Tuệ), quán chiếu ngũ uẩn giai không và thiền định tỉnh thức trong từng sát-na.",
      mohism: "Khổ hạnh tự giác ('Ma đỉnh phóng chủng'), rèn luyện kỹ năng lao động kỹ thuật và xả thân cứu giúp cộng đồng."
    }
  ]
};

(function () {
  if (!window.CCE_PHILOSOPHY || !Array.isArray(window.CCE_PHILOSOPHY.classicalTexts)) return;

  const EXTRA_CANONS = [
    {
      id: "shangshu",
      titleZh: "《尚书》（《书经》）",
      titleVi: "Thượng Thư (Thư Kinh)",
      titleEn: "Book of Documents (Shangshu)",
      era: "Thượng cổ – Tây Chu (biên tập Xuân Thu – Hán)",
      school: "Nho gia / Ngũ Kinh",
      summary:
        "Bộ sử liệu chính trị cổ nhất Trung Hoa chép lại chiếu cáo, huấn thị và đối đáp quân thần thời Nghiêu – Thuấn – Hạ – Thương – Chu, đặt nền móng học thuyết 'Thiên mệnh mỹ thường' (天命靡常) và 'Dân vi bang bản' (民惟邦本).",
      excerptZh: "民惟邦本，本固邦宁。",
      excerptPinyin: "Mín wéi bāng běn, běn gù bāng níng.",
      excerptVi: "Dân là gốc của nước; gốc vững thì nước yên.",
      excerptEn: "The people are the root of the state; when the root is firm, the state is tranquil."
    },
    {
      id: "shijing",
      titleZh: "《诗经》",
      titleVi: "Thi Kinh (Kinh Thi)",
      titleEn: "Classic of Poetry (Shijing)",
      era: "Tây Chu – Xuân Thu (thế kỷ XI–VI TCN)",
      school: "Nho gia / Ngũ Kinh",
      summary:
        "Tuyển tập 305 bài thơ dân ca và nhạc lễ cung đình cổ nhất Trung Hoa chia làm ba phần Phong – Nhã – Tụng, kết tinh mỹ học 'Ôn nhu đôn hậu' và phép 'Hưng – Quan – Quần – Oán' của Khổng Tử.",
      excerptZh: "关关雎鸠，在河之洲。窈窕淑女，君子好逑。",
      excerptPinyin: "Guān guān jūjiū, zài hé zhī zhōu. Yǎotiǎo shūnǚ, jūnzǐ hǎo qiú.",
      excerptVi: "Con chim thư cưu kêu hòa nhịp trên bãi cồn giữa sông; người thục nữ yểu điệu dịu dàng là bạn trăm năm xứng đôi với bậc quân tử.",
      excerptEn: "Fair, fair cry the ospreys on the island in the river; lovely is this noble lady, fit bride for our lord."
    },
    {
      id: "liji-zhouli",
      titleZh: "《周礼》与《礼记》",
      titleVi: "Chu Lễ & Lễ Ký",
      titleEn: "Rites of Zhou & Book of Rites",
      era: "Chiến Quốc – Tây Hán (Đới Thánh biên định 49 thiên)",
      school: "Nho gia / Ngũ Kinh",
      summary:
        "Hai trụ cột trong Tam Lễ (cùng Nghi Lễ): 《Chu Lễ》 thiết kế bộ máy Lục quan hành chính mẫu mực truyền cảm hứng tới Chu Công – Vương An Thạch – Lê Thánh Tông, còn 《Lễ Ký》 kết tinh tư tưởng Đại Đồng ('Thiên hạ vi công'), Nhạc Ký và hai thiên Đại Học – Trung Dung.",
      excerptZh: "大道之行也，天下为公。",
      excerptPinyin: "Dàdào zhī xíng yě, tiānxià wéi gōng.",
      excerptVi: "Khi Đạo lớn được thực hành, thiên hạ thuộc về công chung của mọi người.",
      excerptEn: "When the Great Way prevails, the whole world belongs to the public good."
    },
    {
      id: "chunqiu-zuozhuan",
      titleZh: "《春秋左传》",
      titleVi: "Xuân Thu Tả Truyện",
      titleEn: "Zuo Tradition (Spring and Autumn Annals)",
      era: "Xuân Thu – đầu Chiến Quốc (Tả Khâu Minh)",
      school: "Nho gia / Ngũ Kinh & Sử học",
      summary:
        "Bộ biên niên sử đầu tiên có cấu trúc tường minh của Trung Hoa bình giải bộ 《Xuân Thu》 (722–481 TCN), nổi tiếng về văn phong ngoại giao biện thuyết sắc bén, chiến thuật quân sự và tiêu chuẩn 'Tam bất hủ' (Lập đức, Lập công, Lập ngôn).",
      excerptZh: "太上有立德，其次有立功，其次有立言，虽久不废，此之谓不朽。",
      excerptPinyin: "Tàishàng yǒu lìdé, qícì yǒu lìgōng, qícì yǒu lìyán, suī jiǔ bú fèi, cǐ zhī wèi bùxiǔ.",
      excerptVi: "Bậc cao nhất là lập đức, kế đến là lập công, thứ ba là lập ngôn; trải lâu dài chẳng mai một, ấy gọi là bất hủ.",
      excerptEn: "Highest is establishing virtue, next establishing merit, next establishing enduring words; persisting unforgotten—that is immortality."
    }
  ];

  EXTRA_CANONS.forEach((c) => {
    if (!window.CCE_PHILOSOPHY.classicalTexts.some((x) => x.id === c.id)) {
      window.CCE_PHILOSOPHY.classicalTexts.push(c);
    }
  });

  const CANON_QUOTES = {
    "yijing": [
      { zh: "天行健，君子以自强不息；地势坤，君子以厚德载物。", pinyin: "Tiān xíng jiàn, jūnzǐ yǐ zìqiáng bù xī; dì shì kūn, jūnzǐ yǐ hòudé zài wù.", hanViet: "Thiên hành kiện, quân tử dĩ tự cường bất tức; Địa thế khôn, quân tử dĩ hậu đức tải vật.", vi: "Trời vận động mạnh mẽ không ngừng, bậc quân tử noi theo mà tự cường; Thế đất nhu thuận dày sâu, bậc quân tử lấy đức dày nâng đỡ muôn loài.", commentary: "Hai câu tượng quẻ Càn – Khôn kết tinh nhân sinh quan Đông Á: Cương nghị chủ động (Càn) đi liền khoan dung nâng đỡ (Khôn)." },
      { zh: "一阴一阳之谓道，继之者善也，成之者性也。", pinyin: "Yī yīn yī yáng zhī wèi Dào, jì zhī zhě shàn yě, chéng zhī zhě xìng yě.", hanViet: "Nhất Âm nhất Dương chi vị Đạo; kế chi giả thiện dã, thành chi giả tính dã.", vi: "Một Âm một Dương luân chuyển gọi là Đạo; nối tiếp vận động ấy là Thiện, thành tựu nơi vạn vật là Bản tính.", commentary: "Nguyên lý biện chứng cốt lõi trong Hệ Từ Thượng: Âm và Dương không triệt tiêu nhau mà sinh thành qua tương tác." },
      { zh: "穷则变，变则通，通则久。", pinyin: "Qióng zé biàn, biàn zé tōng, tōng zé jiǔ.", hanViet: "Cùng tắc biến, biến tắc thông, thông tắc cửu.", vi: "Cùng cực ắt phải biến đổi; biến đổi được thì thông suốt; thông suốt ắt bền lâu.", commentary: "Triết lý cải cách và thích nghi trước biến động của lịch sử và thương trường." },
      { zh: "君子以见善则迁，有过则改。", pinyin: "Jūnzǐ yǐ jiàn shàn zé qiān, yǒu guò zé gǎi.", hanViet: "Quân tử dĩ kiến thiện tắc thiên, hữu quá tắc cải.", vi: "Người quân tử thấy điều thiện liền học theo ngay, có lỗi lầm lập tức sửa đổi.", commentary: "Quẻ Ích dạy tinh thần cầu tiến không bảo thủ trong tự tu dưỡng." },
      { zh: "同声相应，同气相求。", pinyin: "Tóng shēng xiāngyìng, tóng qì xiāngqiú.", hanViet: "Đồng thanh tương ứng, đồng khí tương cầu.", vi: "Cùng tiếng vang thì đáp lại nhau, cùng khí chất tự tìm đến nhau.", commentary: "Cơ chế cộng hưởng tự nhiên trong kết nối nhân quần và hợp tác đồng đạo." }
    ],
    "shangshu": [
      { zh: "民惟邦本，本固邦宁。", pinyin: "Mín wéi bāng běn, běn gù bāng níng.", hanViet: "Dân duy bang bản, bản cố bang ninh.", vi: "Dân là gốc của nước; gốc vững thì nước mới bình yên.", commentary: "Ngũ Tử Chi Ca: tuyên ngôn dân bản cổ nhất lịch sử chính trị Trung Hoa." },
      { zh: "皇天无亲，惟德是辅。", pinyin: "Huángtiān wú qīn, wéi dé shì fǔ.", hanViet: "Hoàng thiên vô thân, duy đức thị phụ.", vi: "Trời cao không thiên vị họ hàng thân thích nào, chỉ phù trợ người có đức.", commentary: "Bước chuyển tư tưởng nhà Chu giải thích vì sao nhà Thương mất nước: Thiên mệnh không cố định mà gắn liền đức trị." },
      { zh: "克明俊德，以亲九族；九族既睦，平章百姓。", pinyin: "Kè míng jùndé, yǐ qīn jiǔzú; jiǔzú jì mù, píngzhāng bǎixìng.", hanViet: "Khắc minh tuấn đức, dĩ thân cửu tộc; cửu tộc ký mục, bình chương bách tính.", vi: "Tự làm rạng rỡ đức sáng trước hết, để hòa thân chín họ; chín họ đã thuận hòa rồi mới trị bình trăm họ.", commentary: "Thiên Nghiêu Điển: hạt nhân sơ khai của mô hình Tu thân – Tề gia – Trị quốc." },
      { zh: "非知之艰，行之惟艰。", pinyin: "Fēi zhī zhī jiān, xíng zhī wéi jiān.", hanViet: "Phi tri chi gian, hành chi duy gian.", vi: "Không phải biết là khó, thực hành được mới thật khó.", commentary: "Thuyết Mệnh: khơi nguồn cuộc tranh luận nghìn năm về quan hệ Tri – Hành." },
      { zh: "玩物丧志。", pinyin: "Wánwù sàngzhì.", hanViet: "Ngoạn vật tang chí.", vi: "Ham mê vật chất phù phiếm bên ngoài sẽ làm mất chí lớn.", commentary: "Lữ Ngao: lời răn các bậc lãnh đạo tránh xa hoa hưởng lạc bỏ quên quốc sự." }
    ],
    "shijing": [
      { zh: "关关雎鸠，在河之洲。窈窕淑女，君子好逑。", pinyin: "Guān guān jūjiū, zài hé zhī zhōu. Yǎotiǎo shūnǚ, jūnzǐ hǎo qiú.", hanViet: "Quan quan thư cưu, tại hà chi châu. Yểu điệu thục nữ, quân tử hảo cầu.", vi: "Chim thư cưu cất tiếng hòa đáp trên bãi sông; người thục nữ đoan trang là bạn trăm năm của quân tử.", commentary: "Mở đầu 《Quan Thư》: đề cao tình cảm tự nhiên nhưng tiết chế trong lễ nghĩa ('Lạc nhi bất dâm')." },
      { zh: "他山之石，可以攻玉。", pinyin: "Tāshān zhī shí, kěyǐ gōng yù.", hanViet: "Tha sơn chi thạch, khả dĩ công ngọc.", vi: "Đá ở núi khác có thể dùng để mài giũa ngọc quý của mình.", commentary: "Thiên Tiểu Nhã – Hạc Minh: bài học tiếp thu tinh hoa văn hóa bên ngoài để hoàn thiện bản thân." },
      { zh: "战战兢兢，如临深渊，如履薄冰。", pinyin: "Zhànzhàn jīngjīng, rú lín shēnyuān, rú lǚ bóbīng.", hanViet: "Chiến chiến căng căng, như lâm thâm uyên, như lý bạc băng.", vi: "Thận trọng giữ mình như đứng bên vực thẳm, như bước trên lớp băng mỏng.", commentary: "Tiểu Mân: thái độ tự kiểm soát quyền lực và tránh sai lầm chiến lược." },
      { zh: "投我以木桃，报之以琼瑶。", pinyin: "Tóu wǒ yǐ mùtáo, bào zhī yǐ qióngyáo.", hanViet: "Đầu ngã dĩ mộc đào, báo chi dĩ quỳnh dao.", vi: "Người trao tặng ta quả đào mộc, ta báo đáp lại bằng ngọc quỳnh ngọc dao.", commentary: "Vệ Phong – Mộc Qua: tinh thần 'Lễ thượng vãng lai' trọng tình nghĩa hơn giá trị vật chất." },
      { zh: "周虽旧邦，其命维新。", pinyin: "Zhōu suī jiù bāng, qí mìng wéixīn.", hanViet: "Chu tuy cựu bang, kỳ mệnh duy tân.", vi: "Nước Chu tuy là bang quốc lâu đời, nhưng thiên mệnh luôn đòi hỏi đổi mới.", commentary: "Đại Nhã – Văn Vương: khẩu hiệu truyền cảm hứng cho công cuộc cải cách Duy Tân khắp Đông Á." }
    ],
    "liji-zhouli": [
      { zh: "大道之行也，天下为公，选贤与能，讲信修睦。", pinyin: "Dàdào zhī xíng yě, tiānxià wéi gōng, xuǎn xián yǔ néng, jiǎng xìn xiū mù.", hanViet: "Đại đạo chi hành dã, thiên hạ vi công, tuyển hiền dữ năng, giảng tín tu mục.", vi: "Khi Đại đạo được thi hành, thiên hạ là của chung, chọn người hiền người tài, giữ chữ tín và hòa hiếu.", commentary: "Lễ Vận Đại Đồng thiên: lý tưởng xã hội công bằng bác ái cao nhất của Nho gia." },
      { zh: "玉不琢，不成器；人不学，不知道。", pinyin: "Yù bù zhuó, bù chéng qì; rén bù xué, bù zhī Dào.", hanViet: "Ngọc bất trác, bất thành khí; nhân bất học, bất tri Đạo.", vi: "Ngọc không giũa mài không thành đồ quý; người không học tập chẳng thấu hiểu Đạo lý.", commentary: "Thiên Học Ký (bộ sư phạm học cổ nhất thế giới): triết lý giáo dục rèn giũa lâu dài." },
      { zh: "礼尚往来。往而不来，非礼也；来而不往，亦非礼也。", pinyin: "Lǐ shàng wǎnglái. Wǎng ér bù lái, fēi lǐ yě; lái ér bù wǎng, yì fēi lǐ yě.", hanViet: "Lễ thượng vãng lai. Vãng nhi bất lai, phi lễ dã; lai nhi bất vãng, yì phi lễ dã.", vi: "Lễ trọng sự có đi có lại; trao mà không đáp chẳng phải lễ, nhận mà không trả lại cũng chẳng phải lễ.", commentary: "Khúc Lễ: nền tảng khái niệm Nhân tình (Renqing) trong quan hệ xã hội và đối tác." },
      { zh: "凡事预则立，不预则废。", pinyin: "Fánshì yù zé lì, bú yù zé fèi.", hanViet: "Phàm sự dự tắc lập, bất dự tắc phế.", vi: "Phàm mọi việc có chuẩn bị trước thì đứng vững, không chuẩn bị trước tất thất bại.", commentary: "Triết lý quản trị rủi ro và chuẩn bị chiến lược dài hạn." },
      { zh: "博学之，审问之，慎思之，明辨之，笃行之。", pinyin: "Bóxué zhī, shěnwèn zhī, shènsī zhī, míngbiàn zhī, dǔxíng zhī.", hanViet: "Bác học chi, thẩm vấn chi, thận tư chi, minh biện chi, đốc hành chi.", vi: "Học rộng rãi, hỏi sâu kỹ, nghĩ cẩn trọng, phân biệt sáng suốt, rồi ra sức thực hành.", commentary: "Quy trình phương pháp luận nghiên cứu và tu thân 5 bước kinh điển." }
    ],
    "chunqiu-zuozhuan": [
      { zh: "太上有立德，其次有立功，其次有立言，虽久不废，此之谓不朽。", pinyin: "Tàishàng yǒu lìdé, qícì yǒu lìgōng, qícì yǒu lìyán, suī jiǔ bú fèi, cǐ zhī wèi bùxiǔ.", hanViet: "Thái thượng hữu lập đức, kỳ thứ hữu lập công, kỳ thứ hữu lập ngôn.", vi: "Trên hết là lập đức, thứ đến là lập công, thứ ba là lập ngôn — dù lâu đời vẫn không mai một, đó là bất hủ.", commentary: "Tam Bất Hủ do Thúc Tôn Báo nêu lên (năm Tương Công 24), định hình lý tưởng sống của tầng lớp sĩ phu Đông Á." },
      { zh: "皮之不存，毛将焉附？", pinyin: "Pí zhī bù cún, máo jiāng yān fù?", hanViet: "Bì chi bất tồn, mao tương yên phụ?", vi: "Da đã chẳng còn, lông biết bám vào đâu?", commentary: "Hi Công năm 14: nguyên lý cấu trúc nền tảng — mất căn bản (nền kinh tế/độc lập) thì phần ngọn chẳng thể tồn tại." },
      { zh: "居安思危，思则有备，有备无患。", pinyin: "Jū ān sī wēi, sī zé yǒu bèi, yǒu bèi wú huàn.", hanViet: "Cư an tư nguy, tư tắc hữu bị, hữu bị vô hoạn.", vi: "Ở nơi yên ổn mà nghĩ tới lúc nguy nan; nghĩ trước ắt có phòng bị; có phòng bị sẽ tránh được tai họa.", commentary: "Ngụy Giáng tấu trình (Tương Công năm 11): nguyên tắc cảnh giác chiến lược bất hủ." },
      { zh: "一鼓作气，再而衰，三而竭。", pinyin: "Yì gǔ zuòqì, zài ér shuāi, sān ér jié.", hanViet: "Nhất cổ tác khí, tái nhi suy, tam nhi kiệt.", vi: "Hồi trống thứ nhất dấy lên nhuệ khí, hồi thứ hai đã suy yếu, hồi thứ ba thì cạn kiệt.", commentary: "Tào Quế luận chiến tại Trận Trường Thược (Trang Công năm 10): nghệ thuật nắm bắt thời điểm tâm lý quyết định." },
      { zh: "多行不义，必自毙。", pinyin: "Duō xíng búyì, bì zì bì.", hanViet: "Đa hành bất nghĩa, tất tự tệ.", vi: "Làm nhiều điều phi nghĩa, tất sẽ tự chuốc lấy diệt vong.", commentary: "Trịnh Bá khắc Đoạn tại Yên: nhận định nhân quả lịch sử của Nho gia." }
    ],
    "lunyu": [
      { zh: "学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？", pinyin: "Xué ér shí xí zhī, bù yì yuè hū? Yǒu péng zì yuǎnfāng lái, bù yì lè hū? Rén bù zhī ér bù yùn, bù yì jūnzǐ hū?", hanViet: "Học nhi thời tập chi, bất diệc duyệt hồ...", vi: "Học mà thường xuyên thực hành, chẳng vui sướng sao? Có bạn từ xa tới, chẳng mừng rỡ sao? Người chẳng hiểu mình mà không giận, chẳng phải quân tử sao?", commentary: "Chương mở đầu Luận Ngữ đặt ba trụ cột học thuật: tự rèn luyện, đồng môn giao lưu và nội tâm điềm tĩnh." },
      { zh: "己所不欲，勿施于人。", pinyin: "Jǐ suǒ bù yù, wù shī yú rén.", hanViet: "Kỷ sở bất dục, vật thi ư nhân.", vi: "Điều gì mình không muốn, chớ ép đặt cho người khác.", commentary: "Đạo Thứ (恕) – Quy tắc vàng (Golden Rule) nền tảng của luân lý học Nhân bản." },
      { zh: "君子和而不同，小人同而不和。", pinyin: "Jūnzǐ hé ér bù tóng, xiǎorén tóng ér bù hé.", hanViet: "Quân tử hòa nhi bất đồng, tiểu nhân đồng nhi bất hòa.", vi: "Người quân tử hòa hợp nhưng giữ chính kiến riêng; kẻ tiểu nhân đồng lõa hùa theo mà chẳng thật hòa hợp.", commentary: "Thiên Tử Lộ: đề cao đa nguyên tôn trọng khác biệt thay vì ép buộc đồng dạng." },
      { zh: "学而不思则罔，思而不学则殆。", pinyin: "Xué ér bù sī zé wǎng, sī ér bù xué zé dài.", hanViet: "Học nhi bất tư tắc võng, tư nhi bất học tắc đãi.", vi: "Học mà không suy ngẫm thì mù mờ; chỉ suy nghĩ suông mà không học hỏi thì rơi vào nghi hoặc nguy hiểm.", commentary: "Phương pháp cân bằng giữa tiếp nhận tri thức kinh nghiệm (Học) và tư duy phản biện độc lập (Tư)." },
      { zh: "见贤思齐焉，见不贤而内自省也。", pinyin: "Jiàn xián sī qí yān, jiàn bù xián ér nèi zì xǐng yě.", hanViet: "Kiến hiền tư tề yên, kiến bất hiền nhi nội tự tỉnh dã.", vi: "Thấy người hiền tài thì nghĩ cách vươn lên ngang bằng; thấy người chưa tốt thì tự soi xét lại mình.", commentary: "Văn hóa tự kiểm điểm nội tâm (Nội tỉnh) của đạo học Nho gia." }
    ],
    "daodejing": [
      { zh: "道可道，非常道；名可名，非常名。", pinyin: "Dào kě dào, fēi cháng Dào; míng kě míng, fēi cháng míng.", hanViet: "Đạo khả đạo, phi thường Đạo; Danh khả danh, phi thường Danh.", vi: "Đạo có thể diễn đạt bằng lời không còn là Đạo vĩnh hằng; Danh có thể định gọi không còn là Danh vĩnh hằng.", commentary: "Chương 1 chỉ ra giới hạn của ngôn ngữ hữu hạn trước thực tại bản thể vô hạn." },
      { zh: "人法地，地法天，天法道，道法自然。", pinyin: "Rén fǎ dì, dì fǎ tiān, tiān fǎ Dào, Dào fǎ zìrán.", hanViet: "Nhân pháp địa, địa pháp thiên, thiên pháp Đạo, Đạo pháp tự nhiên.", vi: "Người noi theo Đất, Đất noi theo Trời, Trời noi theo Đạo, Đạo noi theo lẽ Tự nhiên vốn có.", commentary: "Chương 25 khẳng định nguyên lý sinh thái – tự vận hành không cưỡng cầu ('Tự nhiên' là tự nó vốn như vậy)." },
      { zh: "上善若水。水善利万物而不争。", pinyin: "Shàng shàn ruò shuǐ. Shuǐ shàn lì wànwù ér bù zhēng.", hanViet: "Thượng thiện nhược thủy. Thủy thiện lợi vạn vật nhi bất tranh.", vi: "Đức thiện cao nhất ví như nước: nước nuôi dưỡng muôn vật mà không tranh giành, tự chảy về chỗ thấp mà mọi người chê.", commentary: "Chương 8 dùng ẩn dụ Nước giảng thuyết nghệ thuật lãnh đạo khiêm cung và sức mạnh mềm." },
      { zh: "知人者智，自知者明；胜人者有力，自胜者强。", pinyin: "Zhī rén zhě zhì, zì zhī zhě míng; shèng rén zhě yǒulì, zì shèng zhě qiáng.", hanViet: "Tri nhân giả trí, tự tri giả minh; thắng nhân giả hữu lực, tự thắng giả cường.", vi: "Hiểu người là trí tuệ, tự hiểu mình là sáng suốt; thắng người là có sức mạnh, tự thắng mình mới thật kiên cường.", commentary: "Chương 33: chuẩn mực tỉnh thức cá nhân vượt lên cạnh tranh bên ngoài." },
      { zh: "合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。", pinyin: "Hébào zhī mù, shēng yú háomò; jiǔcéng zhī tái, qǐ yú lěitǔ; qiānlǐ zhī xíng, shǐ yú zúxià.", hanViet: "Hợp bão chi mộc, sinh ư hào mạt; cửu tầng chi đài, khởi ư lũy thổ; thiên lý chi hành, thủy ư túc hạ.", vi: "Cây ôm trọn vòng tay sinh ra từ mầm nhỏ bằng đầu sợi lông; đài cao chín tầng khởi từ sọt đất đắp; đường vạn dặm bắt đầu từ bước chân đầu tiên.", commentary: "Chương 64: triết lý tích lũy từng bước thực chất (Bất tích tiểu bất dĩ thành đại)." }
    ],
    "zhuangzi": [
      { zh: "天地与我并生，而万物与我为一。", pinyin: "Tiāndì yǔ wǒ bìngshēng, ér wànwù yǔ wǒ wéi yī.", hanViet: "Thiên địa dữ ngã tịnh sinh, nhi vạn vật dữ ngã vi nhất.", vi: "Trời đất cùng sinh ra với ta, và vạn vật cùng ta hòa làm một thể.", commentary: "Tề Vật Luận: xóa bỏ ranh giới nhị nguyên ngã – phi ngã để đạt tự do tinh thần." },
      { zh: "庄周梦为胡蝶，栩栩然胡蝶也... 不知周之梦为胡蝶与，胡蝶之梦为周与？", pinyin: "Zhuāng Zhōu mèng wéi húdié... bù zhī Zhōu zhī mèng wéi húdié yú, húdié zhī mèng wéi Zhōu yú?", hanViet: "Trang Chu mộng hồ điệp... bất tri Chu chi mộng vi hồ điệp dư, hồ điệp chi mộng vi Chu dư?", vi: "Trang Chu mộng thấy mình hóa thành bướm bay lượn... chẳng rõ Trang Chu nằm mộng hóa bướm, hay chính bướm đang nằm mộng hóa thành Trang Chu?", commentary: "Biểu tượng nổi tiếng nhất của triết học nhận thức luận Đông Á về 'Vật hóa'." },
      { zh: "泉涸，鱼相与处于陆，相呴以湿，相濡以沫，不如相忘于江湖。", pinyin: "Quán hé, yú xiāngyǔ chǔ yú lù... bùrú xiāng wàng yú jiānghú.", hanViet: "Tuyền hạc, ngư tương dữ xử ư lục, tương nhu dĩ mạt, bất như tương vong ư giang hồ.", vi: "Suối cạn, cá mắc cạn lấy hơi ẩm và bọt nước thổi cho nhau, chi bằng quên nhau mà tự do vùng vẫy giữa sông hồ rộng lớn.", commentary: "Đại Tông Sư: phê phán đạo đức cưỡng cầu khi hoàn cảnh tự nhiên đã bị tàn phá." },
      { zh: "吾生也有涯，而知也无涯。以有涯随无涯，殆已！", pinyin: "Wú shēng yě yǒu yá, ér zhī yě wú yá. Yǐ yǒu yá suí wú yá, dài yǐ!", hanViet: "Ngô sinh dã hữu nhai, nhi tri dã vô nhai. Dĩ hữu nhai tùy vô nhai, đãi dĩ!", vi: "Đời người có hạn mà tri thức thì vô hạn; đem cái hữu hạn chạy theo cái vô hạn thật nguy khốn thay.", commentary: "Dưỡng Sinh Chủ: nhắc nhở học hỏi có trọng tâm để dưỡng bảo sinh khí thay vì kiệt sức chạy theo tin tức vụn vặt." },
      { zh: "独与天地精神往来，而不敖倪于万物。", pinyin: "Dú yǔ tiāndì jīngshén wǎnglái, ér bù àonì yú wànwù.", hanViet: "Độc dữ thiên địa tinh thần vãng lai, nhi bất ngạo nghễ ư vạn vật.", vi: "Một mình giao cảm với tinh thần trời đất mà không khinh thị bất kỳ sự vật nào.", commentary: "Thiên Hạ: tinh thần thẩm mỹ cao khiết của nghệ sĩ văn nhân truyền thống." }
    ],
    "mengzi": [
      { zh: "民为贵，社稷次之，君为轻。", pinyin: "Mín wéi guì, shèjì cì zhī, jūn wéi qīng.", hanViet: "Dân vi quý, xã tắc thứ chi, quân vi khinh.", vi: "Dân là quý nhất, kế đến là xã tắc quốc gia, vua thì nhẹ nhất.", commentary: "Tận Tâm Hạ: đỉnh cao tư tưởng dân bản cổ đại." },
      { zh: "富贵不能淫，贫贱不能移，威武不能屈，此之谓大丈夫。", pinyin: "Fùguì bù néng yín, pínjiàn bù néng yí, wēiwǔ bù néng qū, cǐ zhī wèi dàzhàngfu.", hanViet: "Phú quý bất năng dâm, bần tiện bất năng di, uy vũ bất năng khuất.", vi: "Giàu sang chẳng thể làm mê loạn, nghèo hèn chẳng thể làm lay chuyển, uy vũ chẳng thể khuất phục — ấy mới gọi là bậc đại trượng phu.", commentary: "Đằng Văn Công Hạ: tuyên ngôn khí tiết kẻ sĩ." },
      { zh: "恻隐之心，仁之端也；羞恶之心，义之端也；辞让之心，礼之端也；是非之心，智之端也。", pinyin: "Cèyǐn zhī xīn, rén zhī duān yě; xiūwù zhī xīn, yì zhī duān yě...", hanViet: "Trắc ẩn chi tâm, nhân chi đoan dã; tu ố chi tâm, nghĩa chi đoan dã...", vi: "Lòng trắc ẩn là đầu mối của Nhân; lòng hổ thẹn điều ác là đầu mối của Nghĩa; lòng nhường nhịn là đầu mối của Lễ; lòng phân biệt phải trái là đầu mối của Trí.", commentary: "Tứ Đoan: chứng minh con người bẩm sinh có hạt giống hướng thiện." },
      { zh: "天将降大任于是人也，必先苦其心志，劳其筋骨。", pinyin: "Tiān jiāng jiàng dàrèn yú shì rén yě, bì xiān kǔ qí xīnzhì, láo qí jīngǔ.", hanViet: "Thiên tương giáng đại nhậm ư thị nhân dã, tất tiên khổ kỳ tâm chí, lao kỳ cân cốt.", vi: "Trời sắp trao trọng trách lớn cho người nào, trước hết ắt làm khổ tâm chí người ấy, nhọc nhằn gân cốt người ấy.", commentary: "Cáo Tử Hạ: bài học bản lĩnh vượt nghịch cảnh." },
      { zh: "得道者多助，失道者寡助。", pinyin: "Dé Dào zhě duō zhù, shī Dào zhě guǎ zhù.", hanViet: "Đắc đạo giả đa trợ, thất đạo giả quả trợ.", vi: "Người thuận đạo nghĩa được nhiều người giúp; kẻ mất đạo nghĩa chẳng ai ủng hộ.", commentary: "Công Tôn Sửu Hạ: Thiên thời chẳng bằng Địa lợi, Địa lợi chẳng bằng Nhân hòa." }
    ],
    "sunzi": [
      { zh: "是故百战百胜，非善之善者也；不战而屈人之兵，善之善者也。", pinyin: "Shì gù bǎi zhàn bǎi shèng, fēi shàn zhī shàn zhě yě; bù zhàn ér qū rén zhī bīng, shàn zhī shàn zhě yě.", hanViet: "Bách chiến bách thắng, phi thiện chi thiện giả dã; bất chiến nhi khuất nhân chi binh, thiện chi thiện giả dã.", vi: "Trăm trận trăm thắng chưa phải bậc tối thiện; không đánh mà khuất phục được quân địch mới là bậc tối thiện nhất.", commentary: "Mưu Công: tư tưởng toàn thắng hạn chế tổn thất." },
      { zh: "知彼知己，百战不殆。", pinyin: "Zhī bǐ zhī jǐ, bǎi zhàn bù dài.", hanViet: "Tri bỉ tri kỷ, bách chiến bất đãi.", vi: "Biết người biết ta, trăm trận chẳng nguy.", commentary: "Mưu Công: nguyên tắc nền tảng về tình báo, thẩm định đối tác và năng lực nội tại." },
      { zh: "兵者，国之大事，死生之地，存亡之道，不可不察也。", pinyin: "Bīng zhě, guó zhī dàshì, sǐshēng zhī dì, cúnwáng zhī dào, bù kě bù chá yě.", hanViet: "Binh giả, quốc chi đại sự, tử sinh chi địa, tồn vong chi đạo.", vi: "Việc binh là việc lớn quốc gia, nơi quyết định sống chết, con đường còn mất, không thể không xét kỹ.", commentary: "Thủy Kế thiên mở đầu bằng thái độ thận trọng, chống hiếu chiến." },
      { zh: "夫未战而庙算胜者，得算多也；未战而庙算不胜者，得算少也。", pinyin: "Fú wèi zhàn ér miàosuàn shèng zhě, dé suàn duō yě...", hanViet: "Vị chiến nhi miếu toán thắng giả, đắc toán đa dã.", vi: "Chưa đánh mà trong miếu đường tính toán đã thấy phần thắng vì nắm nhiều điều kiện thắng; tính thấy thua vì điều kiện thắng ít.", commentary: "Quản trị bằng dữ liệu và chuẩn bị kế hoạch Ngũ sự (Đạo, Thiên, Địa, Tướng, Pháp)." },
      { zh: "其疾如风，其徐如林，侵掠如火，不动如山。", pinyin: "Qí jí rú fēng, qí xú rú lín, qīnlüè rú huǒ, bù dòng rú shān.", hanViet: "Kỳ tật như phong, kỳ từ như lâm, xâm lược như hỏa, bất động như sơn.", vi: "Nhanh như gió bão, điềm tĩnh như rừng cây, tấn công mãnh liệt như lửa, phòng thủ vững chãi như núi.", commentary: "Quân Tranh thiên: Phong – Lâm – Hỏa – Sơn điều tiết nhịp độ hành động." }
    ],
    "hanfeizi": [
      { zh: "法不阿贵，绳不挠曲；刑过不避大臣，赏善不遗匹夫。", pinyin: "Fǎ bù ē guì, shéng bù náo qū; xíng guò bù bì dàchén, shǎng shàn bù yí pǐfū.", hanViet: "Pháp bất a quý, thằng bất nạo khúc.", vi: "Pháp luật không nể kẻ quyền quý như dây mực không cong theo gỗ vẹo; phạt lỗi không chừa đại thần, thưởng công không sót thường dân.", commentary: "Hữu Độ: xác lập tính khách quan bình đẳng trước pháp luật." },
      { zh: "世异则事异，事异则备变。", pinyin: "Shì yì zé shì yì, shì yì zé bèi biàn.", hanViet: "Thế dị tắc sự dị, sự dị tắc bị biến.", vi: "Thời thế thay đổi thì công việc thay đổi; công việc thay đổi thì thể chế ứng phó phải đổi theo.", commentary: "Ngũ Đố: tư duy lịch sử tiến hóa chống bảo thủ rập khuôn cổ nhân (Thủ chu đãi thố)." },
      { zh: "明主之所导制其臣者，二柄而已矣。二柄者，刑德也。", pinyin: "Míngzhǔ zhī suǒ dǎozhì qí chén zhě, èr bǐng ér yǐ yǐ. Èr bǐng zhě, xíng dé yě.", hanViet: "Nhị bính giả, hình đức dã.", vi: "Bậc minh quân nắm giữ bề tôi chỉ dùng hai cán cân: Hình (trừng phạt) và Đức (ban thưởng).", commentary: "Nhị Bính: nguyên tắc quản trị nhân sự dựa trên cơ chế thưởng – phạt minh bạch." },
      { zh: "巧诈不如拙诚。", pinyin: "Qiǎozhà bùrú zhuōchéng.", hanViet: "Xảo trá bất như chuyết thành.", vi: "Khôn khéo gian dối không bằng chất phác chân thành.", commentary: "Thuyết Lâm Thượng: ngay cả Pháp gia thực dụng cũng khẳng định tín nhiệm dài hạn đánh bại mánh khóe." },
      { zh: "千里之堤，以蝼蚁之穴溃；百尺之室，以突隙之烟焚。", pinyin: "Qiānlǐ zhī dī, yǐ lóuyǐ zhī xué kuì; bǎichǐ zhī shì, yǐ tūxì zhī yān fén.", hanViet: "Thiên lý chi đê, dĩ lâu nghị chi huyệt hội.", vi: "Con đê ngàn dặm vỡ vì tổ kiến nhỏ; ngôi nhà trăm thước cháy rụi từ tia lửa kẽ ống khói.", commentary: "Dụ Lão: tầm quan trọng của kiểm soát lỗi vi mô trong quản trị hệ thống." }
    ],
    "huangdi-neijing-text": [
      { zh: "圣人不治已病治未病，不治已乱治未乱。", pinyin: "Shèngrén bù zhì yǐ bìng zhì wèibìng, bù zhì yǐ luàn zhì wèiluàn.", hanViet: "Thánh nhân bất trị dĩ bệnh trị vị bệnh.", vi: "Bậc thánh nhân không đợi bệnh phát mới chữa mà điều hòa từ khi bệnh chưa thành hình.", commentary: "Tố Vấn – Tứ Khí Điều Thần Đại Luận: đỉnh cao y học dự phòng (Trị vị bệnh)." },
      { zh: "上古之人，其知道者，法于阴阳，和于术数，食饮有节，起居有常。", pinyin: "Shànggǔ zhī rén, qí zhī dào zhě, fǎ yú yīnyáng, hé yú shùshù, shíyǐn yǒu jié, qǐjū yǒu cháng.", hanViet: "Pháp ư Âm Dương, hòa ư thuật số, thực ẩm hữu tiết, khởi cư hữu thường.", vi: "Người xưa thấu Đạo dưỡng sinh thì thuận theo Âm Dương, điều hòa nhịp sống, ăn uống có tiết độ, sinh hoạt đúng giờ giấc.", commentary: "Thượng Cổ Thiên Chân Luận: nguyên tắc dưỡng sinh thực hành hàng ngày." },
      { zh: "正气存内，邪不可干。", pinyin: "Zhèngqì cún nèi, xié bù kě gān.", hanViet: "Chính khí tồn nội, tà bất khả can.", vi: "Chính khí (sức đề kháng nội sinh) vững vàng bên trong thì tà khí bên ngoài chẳng thể xâm phạm.", commentary: "Cơ chế miễn dịch học theo ngôn ngữ khí hóa Đông y." },
      { zh: "春生、夏长、秋收、冬藏，此气之常也，人亦应之。", pinyin: "Chūn shēng, xià zhǎng, qiū shōu, dōng cáng, cǐ qì zhī cháng yě, rén yì yìng zhī.", hanViet: "Xuân sinh, Hạ trưởng, Thu thu, Đông tàng.", vi: "Xuân sinh sôi, Hạ phát triển, Thu thu liễm, Đông tàng trữ — đó là nhịp thường của khí trời đất, cơ thể người cũng hòa ứng theo.", commentary: "Nền tảng dưỡng sinh theo 24 Tiết khí Đông Á." },
      { zh: "恬惔虚无，真气从之；精神内守，病安从来？", pinyin: "Tiándàn xūwú, zhēnqì cóng zhī; jīngshén nèishǒu, bìng ān cóng lái?", hanViet: "Điềm đạm hư vô, chân khí tòng chi; tinh thần nội thủ, bệnh an tòng lai?", vi: "Tâm trạng điềm đạm tĩnh lặng không vọng động thì chân khí thuận hòa; tinh thần gìn giữ bên trong thì bệnh tật từ đâu kéo đến?", commentary: "Liên hệ mật thiết giữa tâm lý (Nội thương thất tình) và sức khỏe miễn dịch." }
    ],
    "daxue": [
      { zh: "大学之道，在明明德，在亲民，在止于至善。", pinyin: "Dàxué zhī dào, zài míng míngdé, zài qīnmín, zài zhǐ yú zhìshàn.", hanViet: "Đại học chi đạo, tại minh minh đức, tại thân dân, tại chỉ ư chí thiện.", vi: "Đạo của bậc Đại học là làm sáng tỏ đức sáng, đổi mới gần gũi nhân dân, và dừng lại ở mức thiện lành cao nhất.", commentary: "Tam Cương Lĩnh mở đầu sách Đại Học." },
      { zh: "古之欲明明德于天下者，先治其国；欲治其国者，先齐其家；欲齐其家者，先修其身。", pinyin: "Gǔ zhī yù míng míngdé yú tiānxià zhě, xiān zhì qí guó; yù zhì qí guó zhě, xiān qí qí jiā; yù qí qí jiā zhě, xiān xiū qí shēn.", hanViet: "Tu thân, Tề gia, Trị quốc, Bình thiên hạ.", vi: "Muốn làm sáng đức lớn khắp thiên hạ trước tiên phải trị quốc, tề gia và tu sửa bản thân.", commentary: "Bát Điều Mục liên kết nhận thức nội tâm và trách nhiệm cộng đồng." },
      { zh: "知止而后有定，定而后能静，静而后能安，安而后能虑，虑而后能得。", pinyin: "Zhī zhǐ érhòu yǒu dìng, dìng érhòu néng jìng, jìng érhòu néng ān, ān érhòu néng lǜ, lǜ érhòu néng dé.", hanViet: "Tri chỉ nhi hậu hữu định, định nhi hậu năng tĩnh...", vi: "Biết rõ mục tiêu dừng lại rồi mới định hướng; định hướng rồi mới tĩnh tâm; tĩnh tâm mới an ổn; an ổn mới suy xét sáng suốt rồi đạt kết quả.", commentary: "Chuỗi 5 bước ổn định tâm thức trước khi ra quyết định." },
      { zh: "苟日新，日日新，又日新。", pinyin: "Gǒu rì xīn, rì rì xīn, yòu rì xīn.", hanViet: "Cẩu nhật tân, nhật nhật tân, hựu nhật tân.", vi: "Nếu một ngày tự đổi mới được, hãy ngày ngày đổi mới, lại tiếp tục đổi mới không ngừng.", commentary: "Khắc trên chậu tắm vua Thang nhà Thương – tinh thần cải tiến liên tục." },
      { zh: "货悖而入者，亦悖而出。", pinyin: "Huò bèi ér rù zhě, yì bèi ér chū.", hanViet: "Hóa bội nhi nhập giả, diệc bội nhi xuất.", vi: "Của cải thu vào bằng con đường trái đạo tất cũng tiêu tan ra bằng con đường nghịch lý.", commentary: "Đạo đức tài chính và tính bền vững kinh tế." }
    ],
    "zhongyong": [
      { zh: "中也者，天下之大本也；和也者，天下之达道也。致中和，天地位焉，万物育焉。", pinyin: "Zhōng yě zhě, tiānxià zhī dà běn yě; hé yě zhě, tiānxià zhī dá dào yě.", hanViet: "Trung dã giả, thiên hạ chi đại bản dã; Hòa dã giả, thiên hạ chi đạt đạo dã.", vi: "Trung là gốc lớn thiên hạ; Hòa là con đường chung của thiên hạ. Đạt tột đỉnh Trung Hòa thì trời đất an vị, vạn vật sinh trưởng.", commentary: "Chương 1 tóm gọn bản thể luận Nho gia Trung Hòa." },
      { zh: "天命之谓性，率性之谓道，修道之谓教。", pinyin: "Tiānmìng zhī wèi xìng, shuàixìng zhī wèi Dào, xiūdào zhī wèi jiào.", hanViet: "Thiên mệnh chi vị tính, suất tính chi vị Đạo, tu đạo chi vị giáo.", vi: "Cái Trời phú gọi là Bản tính; thuận theo bản tính chân chính gọi là Đạo; trau dồi Đạo ấy gọi là Giáo hóa.", commentary: "Định nghĩa nối liền siêu hình học và giáo dục học." },
      { zh: "君子戒慎乎其所不睹，恐惧乎其所不闻。莫见乎隐，莫显乎微，故君子慎其独也。", pinyin: "Jūnzǐ jièshèn hū qí suǒ bù dǔ... gù jūnzǐ shèn qí dú yě.", hanViet: "Cố quân tử thận kỳ độc dã.", vi: "Bậc quân tử thận trọng ngay nơi chẳng ai thấy nghe; chẳng gì lộ rõ bằng việc ẩn khuất, nên người quân tử giữ Thận Độc khi ở một mình.", commentary: "Thận Độc: liêm chính nội tâm ngay cả khi không có sự giám sát bên ngoài." },
      { zh: "凡事豫则立，不豫则废。", pinyin: "Fánshì yù zé lì, bú yù zé fèi.", hanViet: "Phàm sự dự tắc lập, bất dự tắc phế.", vi: "Mọi việc chuẩn bị chu đáo từ trước ắt thành công, cẩu thả bị động ắt đổ vỡ.", commentary: "Chương 20 luận về sự thành tín và chuẩn bị." },
      { zh: "唯天下至诚，为能尽其性。", pinyin: "Wéi tiānxià zhìchéng, wéi néng jìn qí xìng.", hanViet: "Duy thiên hạ chí thành, vi năng tận kỳ tính.", vi: "Chỉ có sự chân thành tột bậc trong thiên hạ mới phát huy hết bản tính tốt đẹp của mình và vạn vật.", commentary: "Đạo Thành (诚): cầu nối giữa con người và trật tự vũ trụ." }
    ],
    "mozi": [
      { zh: "若使天下兼相爱，爱人若爱其身，犹有不孝者乎？", pinyin: "Ruò shǐ tiānxià jiān xiāng ài, ài rén ruò ài qí shēn, yóu yǒu bù xiào zhě hū?", hanViet: "Nhược sử thiên hạ kiêm tương ái, ái nhân nhược ái kỳ thân.", vi: "Nếu thiên hạ yêu thương rộng khắp lẫn nhau, thương người như thân mình, còn có kẻ bất hiếu nữa chăng?", commentary: "Kiêm Ái Thượng: tinh thần bác ái bình đẳng không phân biệt đẳng cấp huyết thống." },
      { zh: "杀一人，谓之不义，必有一死罪矣... 杀百人，十重不义，必有十死罪矣。", pinyin: "Shā yī rén, wèi zhī búyì... shā bǎi rén, shí chóng búyì...", hanViet: "Sát nhất nhân vị chi bất nghĩa...", vi: "Giết một người gọi là bất nghĩa... nay đánh chiếm một nước giết hàng vạn người mà lại ca ngợi là nghĩa sao?", commentary: "Phi Công: lập luận logic sắc bén phản đối chiến tranh xâm lược." },
      { zh: "虽在农与工肆之人，有能则举之。", pinyin: "Suī zài nóng yǔ gōngsì zhī rén, yǒu néng zé jǔ zhī.", hanViet: "Tuy tại nông dữ công tứ chi nhân, hữu năng tắc cử chi.", vi: "Dù xuất thân nông dân hay thợ thủ công hàng quán, hễ có tài đức đều tiến cử trọng dụng.", commentary: "Thượng Hiền: tư tưởng nhân tài học vượt lên định kiến dòng dõi quý tộc." },
      { zh: "言必有三表... 本之于古者圣王之事；原之于百姓耳目之实；发以为刑政，观其中国家百姓人民之利。", pinyin: "Yán bì yǒu sān biǎo...", hanViet: "Ngôn tất hữu Tam Biểu pháp.", vi: "Lời lập luận phải qua ba chuẩn kiểm chứng: đối chiếu sử liệu thánh vương, kiểm chứng mắt thấy tai nghe của dân và đo lường hiệu quả lợi dân trong chính sách.", commentary: "Tam Biểu Pháp: tiêu chuẩn kiểm chứng thực nghiệm sớm nhất triết học Trung Hoa." },
      { zh: "俭节则昌，淫佚则亡。", pinyin: "Jiǎnjié zé chāng, yínyì zé wáng.", hanViet: "Kiệm tiết tắc xương, dâm dật tắc vong.", vi: "Tiết kiệm giữ chừng mực ắt hưng thịnh, xa hoa phóng túng ắt suy vong.", commentary: "Tiết Dụng thiên phản đối lễ nghi xa xỉ gây kiệt quệ dân sinh." }
    ],
    "shiji": [
      { zh: "究天人之际，通古今之变，成一家之言。", pinyin: "Jiū tiān rén zhī jì, tōng gǔ jīn zhī biàn, chéng yī jiā zhī yán.", hanViet: "Cứu thiên nhân chi tế, thông cổ kim chi biến, thành nhất gia chi ngôn.", vi: "Khảo cứu chỗ giao thoa giữa Trời và Người, thông suốt biến chuyển từ xưa tới nay, lập nên tiếng nói sử học độc lập.", commentary: "Bức thư 《Báo Nhậm An Thư》 xác lập tôn chỉ sử học phê phán của Tư Mã Thiên." },
      { zh: "王侯将相宁有种乎！", pinyin: "Wánghóu jiàngxiàng nìng yǒu zhǒng hū!", hanViet: "Vương hầu tướng tướng ninh hữu chủng hồ!", vi: "Vương hầu tướng lĩnh há lại có giống nòi trời định sẵn sao!", commentary: "Trần Thiệp Thế Gia: câu nói chấn động phủ nhận đặc quyền thế tập." },
      { zh: "人固有一死，或重于泰山，或轻于鸿毛。", pinyin: "Rén gù yǒu yì sǐ, huò zhòng yú Tàishān, huò qīng yú hóngmáo.", hanViet: "Nhân cố hữu nhất tử, hoặc trọng ư Thái Sơn, hoặc khinh ư hồng mao.", vi: "Người ai cũng một lần chết; có cái chết nặng tựa núi Thái Sơn, có cái chết nhẹ như lông hồng.", commentary: "Khẳng định giá trị nhân phẩm và mục đích sống trên cái chết sinh học." },
      { zh: "桃李不言，下自成蹊。", pinyin: "Táolǐ bù yán, xià zì chéng xī.", hanViet: "Đào lý bất ngôn, hạ tự thành khê.", vi: "Cây đào cây mận không tự khoe lời nào, dưới gốc tự nhiên người đến hái dẫm thành lối mòn.", commentary: "Lý Tướng Quân Liệt Truyện: sức thuyết phục của thực chất đạo đức và năng lực." },
      { zh: "智者千虑，必有一失；愚者千虑，必有一得。", pinyin: "Zhìzhě qiān lǜ, bì yǒu yī shī; yúzhě qiān lǜ, bì yǒu yī dé.", hanViet: "Trí giả thiên lự tất hữu nhất thất; ngu giả thiên lự tất hữu nhất đắc.", vi: "Người trí nghìn lần tính toán cũng có lúc sai sót; kẻ bình thường nghìn lần suy nghĩ cũng có khi tìm ra điều hay.", commentary: "Hoài Âm Hầu Liệt Truyện: tinh thần lắng nghe đa chiều trong ra quyết định." }
    ],
    "liuzutanjing": [
      { zh: "菩提本无树，明镜亦非台；本来无一物，何处惹尘埃。", pinyin: "Pútí běn wú shù, míngjìng yì fēi tái; běnlái wú yī wù, héchù rě chén'āi.", hanViet: "Bồ-đề bản vô thụ, minh kính diệc phi đài...", vi: "Bồ-đề vốn không phải cây, gương sáng chẳng phải đài; xưa nay vốn không một vật, bụi trần bám vào đâu?", commentary: "Kệ Đốn Ngộ nổi tiếng của Huệ Năng: trực chỉ bản tâm thanh tịnh vượt qua hình tướng chấp trước." },
      { zh: "不是风动，不是幡动，仁者心动。", pinyin: "Bú shì fēng dòng, bú shì fān dòng, rénzhě xīn dòng.", hanViet: "Bất thị phong động, bất thị phan động, nhân giả tâm động.", vi: "Không phải gió động, chẳng phải lá phướn động, chính tâm các vị đang động.", commentary: "Luận đề kinh điển tại chùa Pháp Tánh (Quảng Châu) về vai trò nhận thức chủ thể." },
      { zh: "佛法在世间，不离世间觉；离世觅菩提，恰如求兔角。", pinyin: "Fófǎ zài shìjiān, bù lí shìjiān jué; lí shì mì Pútí, qià rú qiú tùjiǎo.", hanViet: "Phật pháp tại thế gian, bất ly thế gian giác.", vi: "Phật pháp ngay trong đời sống này, chẳng tách rời thế gian mà giác ngộ; lìa bỏ cuộc đời đi tìm giải thoát khác nào đi tìm sừng thỏ.", commentary: "Tinh thần Thiền nhập thế ảnh hưởng trực tiếp tới Thiền phái Trúc Lâm Yên Tử tại Việt Nam." },
      { zh: "自性若悟，众生是佛；自性若迷，佛是众生。", pinyin: "Zìxìng ruò wù, zhòngshēng shì Fó; zìxìng ruò mí, Fó shì zhòngshēng.", hanViet: "Tự tính nhược ngộ, chúng sinh thị Phật.", vi: "Tự tánh hễ tỉnh ngộ thì chúng sinh chính là Phật; tự tánh nếu mê lầm thì Phật hóa thành chúng sinh.", commentary: "Bình đẳng Phật tính nội tại trong mỗi con người." },
      { zh: "直心是道场。", pinyin: "Zhíxīn shì dàochǎng.", hanViet: "Trực tâm thị đạo tràng.", vi: "Tấm lòng ngay thẳng chân thật chính là đạo tràng tu tập.", commentary: "Phá vỡ sự phụ thuộc hình thức nghi lễ, nhấn mạnh chân tâm trong đời sống." }
    ],
    "chuanxilu": [
      { zh: "知是行的主意，行是知的功夫；知是行之始，行是知之成。", pinyin: "Zhī shì xíng de zhǔyì, xíng shì zhī de gōngfu; zhī shì xíng zhī shǐ, xíng shì zhī zhī chéng.", hanViet: "Tri hành hợp nhất.", vi: "Tri là chủ ý dẫn đường cho Hành, Hành là công phu thực hiện của Tri; Tri là khởi đầu của Hành, Hành là thành tựu của Tri.", commentary: "Mệnh đề cốt lõi của Dương Minh Tâm học chống thói học thuộc sáo rỗng." },
      { zh: "无善无恶心之体，有善有恶意之动，知善知恶是良知，为善去恶是格物。", pinyin: "Wú shàn wú è xīn zhī tǐ, yǒu shàn yǒu è yì zhī dòng, zhī shàn zhī è shì liángzhī, wéi shàn qù è shì géwù.", hanViet: "Tứ Cú Giáo (Vô thiện vô ác tâm chi thể...).", vi: "Bản thể tâm vốn vượt ngoài phân biệt thiện ác; khi ý niệm khởi lên mới có thiện ác; nhận biết đúng sai là Lương tri; làm điều thiện bỏ điều ác chính là Cách vật.", commentary: "Tứ Cú Giáo nổi tiếng tại cầu Thiên Tuyền năm 1527." },
      { zh: "破山中贼易，破心中贼难。", pinyin: "Pò shānzhōng zéi yì, pò xīnzhōng zéi nán.", hanViet: "Phá sơn trung tặc dịch, phá tâm trung tặc nan.", vi: "Dẹp giặc ngoài rừng núi thì dễ, dẹp thứ giặc tham dục cố chấp trong lòng mới thật khó.", commentary: "Thư gửi môn đệ trong chiến dịch bình định: tự trị tâm mới là gốc của đạo đức." },
      { zh: "你未看此花时，此花与汝心同归于寂；你来看此花时，则此花颜色一时明白起来。", pinyin: "Nǐ wèi kàn cǐ huā shí... nǐ lái kàn cǐ huā shí, zé cǐ huā yánsè yīshí míngbái qǐlái.", hanViet: "Nam Trấn thưởng hoa vấn đáp.", vi: "Khi bạn chưa nhìn bông hoa này, bông hoa và tâm bạn cùng quy về lặng lẽ; khi bạn ngắm nhìn nó, sắc màu bông hoa liền bừng sáng rõ rệt trong ý thức.", commentary: "Hiện tượng luận ý thức (Intentionality) sâu sắc trước triết học hiện đại phương Tây hàng thế kỷ." },
      { zh: "愚夫愚妇与圣人同。", pinyin: "Yúfū yúfù yǔ shèngrén tóng.", hanViet: "Ngu phu ngu phụ dữ thánh nhân đồng.", vi: "Người dân bình dị chất phác cũng có sẵn Lương tri đồng đẳng như bậc thánh nhân ('Mãn nhai thị thánh nhân').", commentary: "Tinh thần dân chủ hóa triết học cuối triều Minh." }
    ],
    "zizhitongjian": [
      { zh: "鉴前世之兴衰，考当今之得失，嘉善矜恶，取是舍非。", pinyin: "Jiàn qiánshì zhī xīngshuāi, kǎo dāngjīn zhī déshī...", hanViet: "Giám tiền thế chi hưng suy, khảo đương kim chi đắc thất.", vi: "Soi gương hưng suy đời trước, khảo xét được mất thời nay, biểu dương điều hay, bỏ trừ điều dở.", commentary: "Tuyên ngôn mục đích biên soạn của Tư Mã Quang dâng Tống Thần Tông." },
      { zh: "兼听则明，偏信则暗。", pinyin: "Jiāntīng zé míng, piānxìn zé àn.", hanViet: "Kiêm thính tắc minh, thiên tín tắc ám.", vi: "Lắng nghe đa chiều thì sáng suốt, chỉ tin một phía ắt u tối.", commentary: "Lời Ngụy Trưng tâu Đường Thái Tông (quyển 192): quy tắc quản trị phản hồi đa chiều." },
      { zh: "才德全尽谓之圣人，才德兼亡谓之愚人，德胜才谓之君子，才胜德谓之小人。", pinyin: "Cái dé quán jìn wèi zhī shèngrén... dé shèng cái wèi zhī jūnzǐ, cái shèng dé wèi zhī xiǎorén.", hanViet: "Đức thắng tài vi chi quân tử, tài thắng đức vi chi tiểu nhân.", vi: "Tài đức vẹn toàn gọi là thánh nhân; đức lớn hơn tài gọi là quân tử; tài cao mà thiếu đức dễ hóa thành kẻ tiểu nhân nguy hiểm.", commentary: "Lời bình kinh điển mở đầu quyển 1: tiêu chuẩn tuyển chọn lãnh đạo." },
      { zh: "由俭入奢易，由奢入俭难。", pinyin: "Yóu jiǎn rù shē yì, yóu shē rù jiǎn nán.", hanViet: "Do kiệm nhập xa dịch, do xa nhập kiệm nan.", vi: "Từ tiết kiệm chuyển sang xa hoa thì dễ, từ xa hoa quay lại thanh đạm tiết kiệm thì rất khó.", commentary: "《Huấn Kiệm Thị Khang》 của Tư Mã Quang." },
      { zh: "天下之事，成于惧而败于忽。", pinyin: "Tiānxià zhī shì, chéng yú jù ér bài yú hū.", hanViet: "Thiên hạ chi sự, thành ư cụ nhi bại ư hốt.", vi: "Việc lớn thiên hạ thường thành công nhờ thận trọng dè chừng và thất bại vì chủ quan khinh suất.", commentary: "Bài học tổng kết hàng nghìn năm hưng vong triều đại." }
    ]
  };

  const SCHOOL_VIETNAM_RELEVANCE = {
    "confucianism": "Tiếp biến sâu sắc từ thời Bắc thuộc tới độc lập tự chủ: Lý Thái Tổ dựng Văn Miếu – Quốc Tử Giám (1070), Trần – Lê Sơ hoàn thiện Khoa cử Nho học và Bộ luật Hồng Đức, Lê Quý Đôn – Nguyễn Trãi – Chu Văn An vận dụng tinh thần 'Kinh bang tế thế' gắn liền chủ quyền Đại Việt ('Như nước Đại Việt ta từ trước / Vốn xưng nền văn hiến đã lâu').",
    "daoism-philosophy": "Ảnh hưởng rõ rệt tới tâm thức ẩn dật tri thức của Chu Văn An, Nguyễn Trãi (Côn Sơn ca), Nguyễn Bỉnh Khiêm ('Nhàn' triết lý hòa thuận tự nhiên) và thuyết Tam giáo đồng nguyên (Nho – Phật – Lão) suốt triều Lý – Trần.",
    "religious-daoism": "Giao thoa sâu với tín ngưỡng bản địa Việt Nam tạo nên Đạo Mẫu Tam – Tứ Phủ, nghi thức cúng tế khoa nghi, bùa chú hộ thân và quan niệm 'Ngọc Hoàng – Nam Tào – Bắc Đẩu' trong văn hóa dân gian Bắc Bộ.",
    "buddhism": "Vùng Luy Lâu (Bắc Ninh) tiếp nhận trực tiếp từ thế kỷ II SCN song hành đường biển Ấn Độ và đường bộ Trung Hoa; sang thời Trần, Phật hoàng Trần Nhân Tông dung hợp Thiền tông Lâm Tế – Vân Môn sáng lập Thiền phái Trúc Lâm Yên Tử nhập thế đặc sắc Việt Nam.",
    "legalism": "Học thuật hình luật Pháp gia kết hợp Nho lễ để kiến tạo Quốc triều Hình luật (Luật Hồng Đức 1483) và Hoàng Việt Luật Lệ (Luật Gia Long 1815), cân bằng nguyên tắc pháp trị tập quyền với lệ làng hương ước địa phương.",
    "mohism": "Tuy không thành tông phái chính thống ở Việt Nam nhưng tinh thần 'Kiêm ái', 'Phi công' chống chiến tranh xâm lược và trọng thực nghiệp thủ công mỹ nghệ tương đồng sâu sắc với nhân sinh quan dân bản truyền thống Việt Nam.",
    "school-of-names": "Tư duy biện thuyết Danh – Thực được giới sĩ phu Việt Nam tiếp thu qua sách 《Trang Tử》 và biện chứng sử học của Lê Quý Đôn, Ngô Thì Nhậm trong tranh luận bang giao với triều đình phương Bắc.",
    "military-school": "Binh pháp Tôn Tử kết hợp tư duy 'Dĩ nhu chế cương', chiến tranh nhân dân và địa hình sông nước được Trần Quốc Tuấn đúc kết kiệt xuất trong 《Binh Thư Yếu Lược》 và 《Hịch Tướng Sĩ》 (đại thắng Nguyên – Mông), rồi Nguyễn Trãi nâng tầm 'Tâm công' trong 《Quân Trung Từ Mệnh Tập》.",
    "yinyang-school": "Học thuyết Âm Dương – Ngũ Hành – Can Chi 60 hoa giáp trở thành ngôn ngữ nền tảng của Đông y Nam dược (Hải Thượng Lãn Ông, Tuệ Tĩnh), phong thủy địa lý Tả Ao, lịch tiết khí nông nghiệp lúa nước và ẩm thực cân bằng hàn nhiệt Việt Nam.",
    "xuanxue": "Văn phong Thanh Đàm và mỹ học giải thoát thiên nhiên thời Ngụy–Tấn thấm vào văn học Lục Triều – thi ca Lý Trần và thú thưởng trà, ngâm thơ, du ngoạn sơn thủy của tao nhân mặc khách Thăng Long.",
    "neo-confucianism": "Tống Nho Chu Hy được chuẩn hóa thành giáo trình khoa cử thời Lê Thánh Tông, tạo nền móng đạo đức trung hiếu tiết nghĩa; đến cuối thế kỷ XIX–XX, Tâm học Vương Dương Minh ('Tri hành hợp nhất') lại truyền cảm hứng cho các sĩ phu Duy Tân như Phan Bội Châu."
  };

  if (Array.isArray(window.CCE_PHILOSOPHY.schools)) {
    window.CCE_PHILOSOPHY.schools = window.CCE_PHILOSOPHY.schools.map((s) =>
      s.vietnamRelevance || !SCHOOL_VIETNAM_RELEVANCE[s.id]
        ? s
        : { ...s, vietnamRelevance: SCHOOL_VIETNAM_RELEVANCE[s.id] }
    );
  }

  window.CCE_PHILOSOPHY.classicalTexts = window.CCE_PHILOSOPHY.classicalTexts.map((txt) => {
    const q = CANON_QUOTES[txt.id];
    return q ? { ...txt, quotes: q } : txt;
  });
})();
