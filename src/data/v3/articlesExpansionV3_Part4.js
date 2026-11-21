(function () {
  'use strict';

  window.CCE_ARTICLES = window.CCE_ARTICLES || [];

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

  var NEW_ARTICLES = [
    {
      id: 'rcep-acfta-cumulation-rules-vietnam',
      number: 96,
      category: 'business',
      categoryLabel: 'Thương mại & Hải quan',
      titleVi: 'Quy tắc Xuất xứ Cộng gộp RCEP vs ACFTA 3.0: Cấu trúc WO, RVC 40% và Chuyển đổi Mã số Hàng hóa',
      titleZh: 'RCEP与中国—东盟自贸区3.0版原产地累积规则：完全获得、区域价值成分与税则归类改变',
      titleZhTrad: 'RCEP與中國—東盟自貿區3.0版原產地累積規則：完全獲得、區域價值成分與稅則歸類改變',
      titleEn: 'RCEP vs ACFTA 3.0 Rules of Origin and Cumulation: WO, RVC 40%, and Change in Tariff Classification',
      readMinutes: 14,
      epistemicTag: 'Pháp chế Thương mại · Hiệp định Khu vực',
      abstract: 'Trong kiến trúc thương mại Đông Á đương đại, doanh nghiệp Việt Nam giao dịch với Trung Quốc đồng thời tiếp cận hai khung ưu đãi lớn là ACFTA (với phiên bản nâng cấp 3.0 hoàn tất đàm phán thực chất tháng 10/2024) và RCEP (có hiệu lực từ ngày 01/01/2022). Chuyên luận này phân tích cơ chế pháp lý cốt lõi của quy tắc xuất xứ (ROO): tiêu chí Xuất xứ Thuần túy (WO), Hàm lượng Giá trị Khu vực (RVC 40%), Chuyển đổi Mã số Hàng hóa (CTC/CTH), quy tắc cộng gộp đa phương 15 nước và cơ chế C/O Form E đối chiếu với C/O mẫu RCEP.',
      keyTakeaways: [
        'ACFTA vận hành trên khối 10 nước ASEAN và Trung Quốc với chứng nhận C/O Form E, trong khi RCEP mở rộng phạm vi cộng gộp nguyên liệu sang 15 thành viên (bao gồm thêm Nhật Bản, Hàn Quốc, Úc và New Zealand).',
        'Ba trụ cột xác định xuất xứ gồm Xuất xứ Thuần túy (WO), Hàm lượng Giá trị Khu vực (thường ngưỡng RVC 40% theo công thức trực tiếp hoặc gián tiếp) và Chuyển đổi Mã số Hàng hóa (CC, CTH, CTSH) quy định tại Danh mục Quy tắc Cụ thể Mặt hàng (PSR).',
        'Lựa chọn giữa C/O Form E và C/O RCEP không chỉ phụ thuộc vào mức thuế ưu đãi tại từng thời điểm mà còn phải đối chiếu Quy tắc Khác biệt Thuế quan (Tariff Differentials) tại Điều 2.6 của RCEP và chi phí tuân thủ hồ sơ chứng minh xuất xứ.'
      ],
      introduction: 'Trong chuỗi cung ứng công nghiệp Đông Á, một sản phẩm xuất khẩu từ Việt Nam sang Trung Quốc hoặc nhập khẩu theo chiều ngược lại hiếm khi sử dụng nguyên liệu từ duy nhất một quốc gia. Một lô linh kiện điện tử hay dệt may hoàn thiện tại Việt Nam có thể kết hợp sợi, hóa chất hoặc bo mạch từ Hàn Quốc, Nhật Bản và Trung Quốc. Trước thực tế sản xuất phân mảnh xuyên biên giới đó, Quy tắc Xuất xứ (Rules of Origin - ROO) đóng vai trò như tấm hộ chiếu pháp lý quyết định hàng hóa có được hưởng thuế suất ưu đãi đặc biệt hay không.',
      historicalBackground: 'Khu vực Thương mại Tự do ASEAN - Trung Quốc (ACFTA) khởi nguồn từ Hiệp định Khung ký kết tại Phnom Penh tháng 11/2002, tiếp nối bằng Hiệp định Thương mại Hàng hóa năm 2004 và Nghị định thư nâng cấp có hiệu lực từ năm 2019 (ACFTA 2.0). Đến tháng 10/2024 tại Hội nghị Cấp cao ASEAN - Trung Quốc lần thứ 27 ở Viêng Chăn, hai bên tuyên bố hoàn tất cơ bản đàm phán nâng cấp ACFTA 3.0, mở rộng sang kinh tế số, kinh tế xanh, kết nối chuỗi cung ứng và thuận lợi hóa thủ tục hải quan. Song song đó, Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP) ký ngày 15/11/2020 và chính thức có hiệu lực từ ngày 01/01/2022 đã thiết lập khu vực thương mại tự do lớn nhất thế giới về quy mô dân số và GDP, hợp nhất quy tắc xuất xứ giữa ASEAN với năm đối tác đối thoại gồm Trung Quốc, Nhật Bản, Hàn Quốc, Úc và New Zealand.',
      mainContent: [
        {
          heading: '1. Ba tiêu chí cốt lõi: WO, RVC 40% và CTC/CTH',
          body: 'Cả ACFTA và RCEP đều phân loại hàng hóa có xuất xứ thành ba nhóm nền tảng. Thứ nhất là Xuất xứ Thuần túy (Wholly Obtained - WO), áp dụng cho nông sản trồng trọt, thủy sản đánh bắt trong vùng biển nội thủy hoặc khoáng sản khai thác hoàn toàn trong lãnh thổ một nước thành viên. Thứ hai là hàng hóa sản xuất hoàn toàn từ nguyên liệu có xuất xứ (PE - Produced Exclusively). Thứ ba là hàng hóa sử dụng nguyên liệu không có xuất xứ nhưng đáp ứng Quy tắc Cụ thể Mặt hàng (Product-Specific Rules - PSR), trong đó phổ biến nhất là Hàm lượng Giá trị Khu vực đạt tối thiểu 40% (RVC 40%) tính theo phương pháp trực tiếp (Direct/Build-up) hoặc gián tiếp (Indirect/Build-down trên trị giá FOB), hoặc tiêu chí Chuyển đổi Mã số Hàng hóa (CTC) ở cấp 2 chữ số (CC - chuyển đổi chương), 4 chữ số (CTH - chuyển đổi nhóm) hay 6 chữ số (CTSH - chuyển đổi phân nhóm).'
        },
        {
          heading: '2. Cơ chế Cộng gộp Khu vực và lợi thế chuỗi cung ứng 15 nước',
          body: 'Điểm khác biệt chiến lược giữa hai hiệp định nằm ở phạm vi cộng gộp (Cumulation). Dưới khung ACFTA, nguyên liệu có xuất xứ từ Trung Quốc và các nước ASEAN được tính cộng gộp vào tỷ lệ RVC khi gia công tại Việt Nam; tuy nhiên nguyên liệu nhập từ Nhật Bản hoặc Hàn Quốc bị xếp vào nhóm không có xuất xứ. Ngược lại, Điều 3.4 của RCEP cho phép cộng gộp nguyên liệu có xuất xứ từ toàn bộ 15 quốc gia thành viên (ví dụ vải kỹ thuật từ Hàn Quốc hoặc thép đặc chủng từ Nhật Bản đưa sang Việt Nam gia công rồi xuất sang Trung Quốc). Cơ chế này đặc biệt có ý nghĩa với các ngành có cấu trúc đầu vào đa nguồn như cơ khí chính xác, dệt may kỹ thuật, điện tử và nhựa công nghiệp.'
        },
        {
          heading: '3. Quy tắc Khác biệt Thuế quan (Điều 2.6 RCEP) và Vận chuyển trực tiếp',
          body: 'Một chi tiết kỹ thuật thường gây vướng mắc khi áp dụng RCEP là cơ chế Khác biệt Thuế quan (Tariff Differentials). Vì Trung Quốc, Nhật Bản và một số nước thành viên RCEP duy trì biểu cam kết cắt giảm thuế khác nhau đối với từng đối tác, Điều 2.6 RCEP quy định nước xuất xứ RCEP (RCEP Country of Origin) là nước nơi hàng hóa đáp ứng tiêu chí xuất xứ cuối cùng, nhưng nếu quá trình tại nước xuất khẩu chỉ là gia công tối giản hoặc tận dụng cộng gộp mà không đạt ngưỡng giá trị gia tăng nội địa tối thiểu theo phụ lục riêng (thường 20%), cơ quan hải quan nước nhập khẩu có quyền áp mức thuế suất cao nhất trong số các nước đóng góp nguyên liệu. Ngoài ra, cả hai hiệp định đều yêu cầu tuân thủ nghiêm ngặt quy tắc Vận chuyển trực tiếp (Direct Consignment), đồng thời cho phép chứng từ vận tải suốt và C/O giáp lưng (Back-to-Back C/O) khi hàng quá cảnh qua trung tâm trung chuyển như Hồng Kông hoặc Singapore.'
        },
        {
          heading: '4. C/O Form E, Tự chứng nhận Xuất xứ và Lưu trữ Hồ sơ Hậu kiểm',
          body: 'Trong thực tiễn thông quan Việt - Trung, C/O Form E của ACFTA đã vận hành lâu năm với hệ thống truyền dữ liệu điện tử và quy trình quen thuộc tại cả hai đầu hải quan. RCEP bổ sung thêm hai phương thức linh hoạt là C/O mẫu RCEP do cơ quan có thẩm quyền cấp và Chứng từ Tự chứng nhận Xuất xứ (Declaration of Origin) bởi Nhà xuất khẩu đủ điều kiện (Approved Exporter). Cả hai cơ chế đều đặt ra nghĩa vụ lưu giữ bộ hồ sơ chứng minh xuất xứ (hóa đơn thương mại, định mức tiêu hao BOM, chứng từ mua nguyên liệu nội địa, tờ khai nhập khẩu đầu vào) trong thời hạn tối thiểu nhiều năm (thường 3 năm theo thông lệ hiệp định và theo luật quản lý thuế nội địa) để phục vụ xác minh sau thông quan.'
        }
      ],
      theoreticalFramework: 'Dưới góc nhìn kinh tế học thương mại quốc tế, sự chồng lấn giữa ACFTA và RCEP minh họa hiện tượng "bát mì quy tắc xuất xứ" (Spaghetti Bowl Effect) mà Jagdish Bhagwati cảnh báo từ thập niên 1990. Khi nhiều hiệp định song song cùng tồn tại, chi phí tuân thủ hành chính (Compliance Cost) có thể triệt tiêu lợi ích thuế quan nếu doanh nghiệp không có hệ thống quản trị định mức nguyên liệu (BOM) minh bạch. RCEP không xóa bỏ ACFTA mà cung cấp thêm một tuyến tối ưu hóa danh mục xuất xứ (FTA Utilization Strategy), buộc bộ phận xuất nhập khẩu phải đối chiếu đồng thời PSR, biểu cam kết thuế quan hiện hành và rủi ro xác minh nguồn gốc.',
      terminologyAndLiushu: [
        { hanzi: '原产地', pinyin: 'yuánchǎndì', hanViet: 'Nguyên sản địa', liushu: 'Hợp thể (Nguyên: Hội ý; Sản: Hình thanh; Địa: Hình thanh)', gloss: 'Xuất xứ hàng hóa — căn cứ pháp lý xác định quốc tịch kinh tế của sản phẩm trong thương mại quốc tế.' },
        { hanzi: '累积', pinyin: 'lěijī', hanViet: 'Lũy tích', liushu: 'Hình thanh (Lũy: bộ Mịch; Tích: bộ Hòa)', gloss: 'Cộng gộp — nguyên tắc cho phép tính nguyên liệu có xuất xứ từ các nước thành viên khác như nguyên liệu nội địa.' },
        { hanzi: '关税', pinyin: 'guānshuì', hanViet: 'Quan thuế', liushu: 'Quan: Hội ý (cửa ải); Thuế: Hình thanh (bộ Hòa)', gloss: 'Thuế quan xuất nhập khẩu thu tại cửa khẩu biên giới hải quan.' },
        { hanzi: '签证', pinyin: 'qiānzhèng', hanViet: 'Thiêm chứng', liushu: 'Hình thanh (Thiêm: bộ Trúc; Chứng: bộ Ngôn)', gloss: 'Cấp chứng nhận/xác thực văn bản chính thức, dùng cho cơ quan cấp C/O (签证机构).' },
        { hanzi: '直运', pinyin: 'zhíyùn', hanViet: 'Trực vận', liushu: 'Trực: Hội ý; Vận: Hình thanh (bộ Sước)', gloss: 'Vận chuyển trực tiếp — điều kiện giữ nguyên trạng hàng hóa khi di chuyển giữa nước xuất khẩu và nhập khẩu.' }
      ],
      primarySources: [
        PQ('《区域全面经济伙伴关系协定》第三章第三条及第四条', 'Hiệp định RCEP, Chương 3 (Quy tắc Xuất xứ), Điều 3.2 và Điều 3.4', 'RCEP Agreement, Chapter 3 (Rules of Origin), Articles 3.2 & 3.4', '在一缔约方完全获得或生产的货物，或仅使用符合本章规定的原产材料在一缔约方生产的货物，应视为原产货物。', 'Zài yī dìyuēfāng wánquán huòdé huò shēngchǎn de huòwù, huò jǐn shǐyòng fúhé běnzhāng guīdìng de yuánchǎn cáiliào zài yī dìyuēfāng shēngchǎn de huòwù, yīng shìwéi yuánchǎn huòwù.', 'Tại nhất đế ước phương hoàn toàn hoạch đắc hoặc sinh sản đích hóa vật, hoặc cận sử dụng phù hợp bản chương quy định đích nguyên sản tài liệu tại nhất đế ước phương sinh sản đích hóa vật, ưng thị vi nguyên sản hóa vật.', 'Hàng hóa thu được hoặc sản xuất toàn bộ tại một Bên, hoặc sản xuất tại một Bên chỉ từ các nguyên liệu có xuất xứ phù hợp Chương này, được coi là hàng hóa có xuất xứ.', 'A good wholly obtained or produced in a Party, or produced in a Party exclusively from originating materials in accordance with this Chapter, shall be treated as an originating good.'),
        PQ('《中国—东盟全面经济合作框架协议》原产地规则', 'Quy tắc Xuất xứ thuộc Hiệp định Khung Hợp tác Kinh tế Toàn diện ASEAN - Trung Quốc (ACFTA)', 'Rules of Origin under the ASEAN-China Framework Agreement on Comprehensive Economic Cooperation (ACFTA)', '在出口缔约方境内进行生产，其区域价值成分不少于40%的货物，应视为原产货物。', 'Zài chūkǒu dìyuēfāng jìngnèi jìnxíng shēngchǎn, qí qūyù jiàzhí chéngfèn bù shǎoyú 40% de huòwù, yīng shìwéi yuánchǎn huòwù.', 'Tại xuất khẩu đế ước phương cảnh nội tiến hành sinh sản, kỳ khu vực giá trị thành phần bất thiểu ư 40% đích hóa vật, ưng thị vi nguyên sản hóa vật.', 'Hàng hóa được sản xuất trong lãnh thổ Bên xuất khẩu có hàm lượng giá trị khu vực không dưới 40% được coi là hàng hóa có xuất xứ.', 'Goods produced in the territory of an exporting Party with a regional value content of not less than 40 percent shall be deemed originating goods.')
      ],
      sinoVietnameseComparison: 'Về mặt nội luật hóa, Bộ Công Thương Việt Nam ban hành các Thông tư riêng hướng dẫn thực hiện quy tắc xuất xứ cho từng hiệp định (như Thông tư 12/2019/TT-BCT cho ACFTA nâng cấp và Thông tư 05/2022/TT-BCT cho RCEP), trong khi phía Trung Quốc giao Tổng cục Hải quan Trung Quốc (GACC) và Hội đồng Xúc tiến Thương mại Quốc tế Trung Quốc (CCPIT) đồng thời thực hiện cấp C/O và quản lý hệ thống tự chứng nhận. Doanh nghiệp Việt Nam cần nắm vững sự khác biệt về thẩm quyền cấp C/O và cách khai báo tiêu chí xuất xứ trên ô số 8 của Form E so với ô tiêu chí của mẫu RCEP để tránh bị bác bỏ ưu đãi khi thông quan.',
      additionalReferences: 'Bộ Công Thương Việt Nam (Hệ thống quản lý và cấp chứng nhận xuất xứ điện tử eCoSys); Tổng cục Hải quan Trung Quốc (GACC) - Cổng tra cứu Hiệp định Thương mại Tự do; Ban Thư ký ASEAN - Văn bản chính thức Hiệp định RCEP và ACFTA 3.0.',
      conclusion: 'Nắm vững cấu trúc pháp lý của WO, RVC 40%, CTC và cơ chế cộng gộp 15 nước giúp doanh nghiệp Việt Nam chuyển từ thế bị động xin giấy chứng nhận sang thế chủ động thiết kế chuỗi cung ứng nguyên liệu theo luật chơi khu vực. Lưu ý miễn trừ trách nhiệm học thuật: Nội dung chuyên luận này chỉ mang tính chất nghiên cứu và tham khảo học thuật; khi thực hiện giao dịch xuất nhập khẩu thực tế, doanh nghiệp và cá nhân bắt buộc phải đối chiếu biểu thuế nhập khẩu ưu đãi đặc biệt, danh mục PSR và các văn bản quy phạm pháp luật hiện hành của Bộ Tài chính, Bộ Công Thương Việt Nam và Tổng cục Hải quan Trung Quốc (GACC).'
    },
    {
      id: 'china-trade-fairs-canton-ciie-yiwu-guide',
      number: 97,
      category: 'business',
      categoryLabel: 'Thương mại & Hải quan',
      titleVi: 'Hệ thống Hội chợ Công nghiệp Trung Quốc: Canton Fair 3 Pha, CIIE Thượng Hải, Yiwu Fair và Quy trình Khảo sát Xưởng',
      titleZh: '中国工业会展体系：广交会三期、上海进博会、义乌小商品博览会与验厂实务',
      titleZhTrad: '中國工業會展體系：廣交會三期、上海進博會、義烏小商品博覽會與驗廠實務',
      titleEn: 'China Industrial Trade Fair Architecture: Canton Fair Three Phases, CIIE Shanghai, Yiwu Fair, and Factory Audit Protocol',
      readMinutes: 13,
      epistemicTag: 'Thực địa Thương mại · Chuỗi cung ứng',
      abstract: 'Hệ thống hội chợ thương mại cấp quốc gia của Trung Quốc không chỉ là nơi trưng bày sản phẩm mà là hạ tầng kết nối trực tiếp giữa các cụm công nghiệp vùng miền với người mua toàn cầu. Chuyên luận này giải phẫu chức năng kinh tế khác biệt của ba đầu tàu hội chợ — Hội chợ Quảng Giao (Canton Fair) tại Quảng Châu, Hội chợ Nhập khẩu Quốc tế Trung Quốc (CIIE) tại Thượng Hải và Hội chợ Hàng tiêu dùng Nghĩa Ô (Yiwu Fair) tại Chiết Giang — đồng thời hệ thống hóa quy trình khảo sát thực địa nhà máy (Factory Audit) theo chuẩn quản trị rủi ro chuỗi cung ứng.',
      keyTakeaways: [
        'Canton Fair (tổ chức từ năm 1957 tại Khu phức hợp Ba Châu, Quảng Châu) vận hành theo cấu trúc 3 pha chuyên ngành mỗi mùa Xuân và mùa Thu, phục vụ chủ yếu nhu cầu tìm nguồn cung xuất khẩu từ Trung Quốc.',
        'CIIE Thượng Hải (tổ chức thường niên từ năm 2018 tại Trung tâm Hội nghị và Triển lãm Quốc gia Thượng Hải) là hội chợ cấp quốc gia đầu tiên trên thế giới chuyên biệt về nhập khẩu, mở cửa trực tiếp cho hàng nông sản, thực phẩm và dịch vụ Việt Nam tiếp cận kênh phân phối nội địa Trung Quốc.',
        'Gian hàng hội chợ chỉ là điểm tiếp xúc ban đầu; thẩm định năng lực thực chất đòi hỏi quy trình khảo sát nhà máy độc lập gồm đối chiếu Giấy phép Kinh doanh (营业执照), dây chuyền sản xuất, hệ thống kiểm soát chất lượng IQC/OQC và phân biệt nhà máy gốc với công ty thương mại.'
      ],
      introduction: 'Trong lịch sử thương mại hiện đại của Cộng hòa Nhân dân Trung Hoa, hội chợ triển lãm đóng vai trò như "phong vũ biểu" phản ánh sự chuyển dịch cơ cấu công nghiệp quốc gia. Từ những gian hàng thủ công mỹ nghệ và nông sản thô thập niên 1950 đến các khu trưng bày robot công nghiệp, lưu trữ năng lượng và linh kiện xe điện ngày nay, mỗi hội chợ lớn đại diện cho một chức năng riêng biệt trong dòng chảy thương mại hai chiều.',
      historicalBackground: 'Hội chợ Xuất nhập khẩu Trung Quốc — thường gọi là Hội chợ Quảng Giao (Canton Fair, 广交会) — khai mạc kỳ đầu tiên vào mùa xuân năm 1957 tại Quảng Châu, trở thành cửa sổ giao thương quốc tế duy nhất của Trung Quốc suốt nhiều thập kỷ trước thời kỳ Cải cách Mở cửa. Bước sang thế kỷ 21, cùng với sự trỗi dậy của mạng lưới cụm công nghiệp chuyên biệt, Chiết Giang phát triển mô hình chợ sỉ quanh năm kết hợp Hội chợ Quốc tế Hàng hóa Nhỏ Nghĩa Ô (Yiwu Fair, khởi đầu từ năm 1995). Đến tháng 11/2018, Trung Quốc khai trương Hội chợ Nhập khẩu Quốc tế Trung Quốc (CIIE, 进博会) tại Thượng Hải nhằm thúc đẩy chiến lược mở rộng tiêu dùng nội địa và cân bằng thương mại với các đối tác toàn cầu.',
      mainContent: [
        {
          heading: '1. Cấu trúc 3 pha của Canton Fair (Quảng Châu)',
          body: 'Canton Fair diễn ra hai kỳ mỗi năm vào giữa tháng 4 đến đầu tháng 5 (kỳ Xuân) và giữa tháng 10 đến đầu tháng 11 (kỳ Thu) tại Khu phức hợp Hội chợ Xuất nhập khẩu Trung Quốc (Ba Châu, Quảng Châu). Cấu trúc chia rõ ba pha theo chuỗi ngành: Pha 1 tập trung vào điện tử, thiết bị gia dụng, máy móc công nghiệp, thiết bị chiếu sáng, phương tiện và năng lượng mới; Pha 2 bao phủ vật liệu xây dựng, đồ nội thất, gốm sứ, đồ gia dụng bếp và quà tặng trang trí; Pha 3 quy tụ dệt may, giày dép, vật tư văn phòng, thiết bị y tế, sản phẩm chăm sóc sức khỏe và thực phẩm. Việc phân pha buộc người mua chuyên nghiệp phải xác định đúng mã ngành mục tiêu trước khi lập lịch bay và đăng ký thẻ người mua (Buyer Badge).'
        },
        {
          heading: '2. CIIE Thượng Hải và Yiwu Fair: Hai cực bổ trợ chiến lược',
          body: 'Khác với Canton Fair thiên về xuất khẩu hàng công nghiệp Trung Quốc, CIIE Thượng Hải (tổ chức đầu tháng 11 hằng năm) chỉ dành cho doanh nghiệp nước ngoài trưng bày hàng hóa và dịch vụ để bán vào thị trường Trung Quốc. Đây là kênh trọng điểm để các hiệp hội nông sản, cà phê, hạt điều, thủy sản và thực phẩm chế biến Việt Nam gặp trực tiếp đoàn thu mua cấp tỉnh (Trade Missions) và các chuỗi bán lẻ Hoa Đông. Trong khi đó, Yiwu Fair và Khu Thương mại Quốc tế Nghĩa Ô (Yiwu International Trade City gồm 5 khu lớn) phục vụ phân khúc hàng tiêu dùng nhanh, phụ kiện, bao bì và đơn hàng số lượng tối thiểu (MOQ) linh hoạt, phù hợp cho cả thương mại điện tử lẫn ghép container (LCL).'
        },
        {
          heading: '3. Phân biệt Nhà máy Gốc (Factory) và Công ty Thương mại (Trading Company)',
          body: 'Tại các hội chợ lớn, tỷ lệ công ty thương mại thuê gian hàng rất cao. Cả hai mô hình đều có giá trị riêng: công ty thương mại giỏi gom hàng đa chủng loại, giao tiếp tiếng Anh tốt và hỗ trợ MOQ thấp; nhà máy gốc kiểm soát trực tiếp kỹ thuật, khuôn mẫu và giá thành khi đặt hàng OEM/ODM quy mô lớn. Người mua có thể kiểm tra bước đầu thông qua tên pháp nhân trên Giấy phép Kinh doanh thống nhất mã tín dụng xã hội 18 ký tự (统一社会信用代码): phạm vi kinh doanh (经营范围) của nhà máy thường ghi rõ từ khóa "sản xuất, gia công, chế tạo" (生产, 加工, 制造), và địa chỉ đăng ký nằm trong khu công nghiệp ngoại ô thay vì cao ốc văn phòng trung tâm.'
        },
        {
          heading: '4. Quy trình Khảo sát Xưởng Thực địa (On-site Factory Audit)',
          body: 'Sau khi sàng lọc nhà cung cấp tại hội chợ, bước khảo sát trực tiếp nhà máy (thường nằm trong bán kính 1 đến 2 giờ tàu cao tốc từ Quảng Châu, Thượng Hải hoặc Nghĩa Ô) là hàng rào kiểm soát rủi ro quan trọng nhất. Một buổi khảo sát chuẩn gồm năm hạng mục: (1) xác minh pháp lý và bảng hiệu nhà máy trùng khớp giấy phép; (2) quan sát thực tế khu vực kho nguyên liệu đầu vào (IQC), tỷ lệ máy móc đang vận hành thực so với công suất thiết kế; (3) kiểm tra quy trình kiểm soát chất lượng giữa chuyền (IPQC) và kiểm phẩm xuất xưởng (OQC), xem hồ sơ hàng lỗi gần nhất; (4) kiểm tra điều kiện lưu kho thành phẩm, tiêu chuẩn đóng gói xuất khẩu và phòng thử nghiệm nội bộ; (5) đối chiếu trực tiếp năng lực R&D hoặc khả năng làm mẫu theo bản vẽ kỹ thuật.'
        }
      ],
      theoreticalFramework: 'Từ lý thuyết chi phí giao dịch (Transaction Cost Economics) của Ronald Coase và Oliver Williamson, hội chợ công nghiệp tập trung giúp giảm mạnh chi phí tìm kiếm thông tin (Search Cost) nhờ mật độ nhà cung cấp dày đặc trong cùng không gian và thời gian. Tuy nhiên, tình trạng bất cân xứng thông tin (Information Asymmetry) về năng lực sản xuất thực và tỷ lệ lỗi vẫn tồn tại sau gian hàng trưng bày. Do đó, kết hợp sàng lọc diện rộng tại hội chợ với kiểm định chiều sâu tại xưởng (On-site Verification) là cấu trúc hai tầng tối ưu để giảm thiểu rủi ro lựa chọn bất lợi.',
      terminologyAndLiushu: [
        { hanzi: '广交会', pinyin: 'Guǎngjiāohuì', hanViet: 'Quảng Giao hội', liushu: 'Tên viết tắt của 中国进出口商品交易会', gloss: 'Hội chợ Xuất nhập khẩu Trung Quốc tổ chức định kỳ tại Quảng Châu từ năm 1957.' },
        { hanzi: '进博会', pinyin: 'Jìnbóhuì', hanViet: 'Tiến Bác hội', liushu: 'Tên viết tắt của 中国国际进口博览会', gloss: 'Hội chợ Nhập khẩu Quốc tế Trung Quốc tại Thượng Hải chuyên thúc đẩy hàng nhập khẩu vào thị trường nội địa.' },
        { hanzi: '验厂', pinyin: 'yànchǎng', hanViet: 'Nghiệm xưởng', liushu: 'Nghiệm: Hình thanh (bộ Mã); Xưởng: Tượng hình/Hội ý', gloss: 'Thẩm định, kiểm tra thực địa nhà máy về pháp lý, năng lực máy móc và hệ thống kiểm soát chất lượng.' },
        { hanzi: '营业执照', pinyin: 'yíngyè zhízhào', hanViet: 'Doanh nghiệp chấp chiếu', liushu: 'Hợp thể chuyên ngành pháp lý thương mại', gloss: 'Giấy phép đăng ký kinh doanh chính thức của doanh nghiệp Trung Quốc có mã tín dụng xã hội 18 ký tự.' },
        { hanzi: '起订量', pinyin: 'qǐdìngliàng', hanViet: 'Khởi đính lượng', liushu: 'Khởi: Hình thanh; Đính: Hình thanh (bộ Ngôn); Lượng: Hình thanh', gloss: 'Số lượng đặt hàng tối thiểu (MOQ - Minimum Order Quantity) để nhà máy mở chuyền sản xuất.' }
      ],
      primarySources: [
        PQ('《中国进出口商品交易会参展指南》', 'Cẩm nang Tham dự Hội chợ Xuất nhập khẩu Trung Quốc (Canton Fair)', 'China Import and Export Fair (Canton Fair) Official Exhibitor & Buyer Guide', '广交会每年春秋两季在广州举办，按行业分三期展出。', 'Guǎngjiāohuì měinián chūnqiū liǎngjì zài Guǎngzhōu jǔbàn, àn hángyè fēn sānqī zhǎnchū.', 'Quảng Giao hội mỗi niên xuân thu lưỡng quý tại Quảng Châu cử biện, án hàng nghiệp phân tam kỳ triển xuất.', 'Hội chợ Quảng Giao được tổ chức hai kỳ Xuân và Thu mỗi năm tại Quảng Châu, chia thành ba pha trưng bày theo từng nhóm ngành hàng.', 'The Canton Fair is held twice annually in spring and autumn in Guangzhou, organized into three industry-specific exhibition phases.'),
        PQ('《中华人民共和国市场主体登记管理条例》', 'Quy định về Quản lý Đăng ký Chủ thể Thị trường nước CHND Trung Hoa (Quốc vụ viện ban hành năm 2021)', 'Regulations of the PRC on the Administration of Market Entity Registration (State Council, 2021)', '营业执照是市场主体取得主体资格的合法凭证。', 'Yíngyè zhízhào shì shìchǎng zhǔtǐ qǔdé zhǔtǐ zīgé de héfǎ píngzhèng.', 'Doanh nghiệp chấp chiếu thị thị trường chủ thể thủ đắc chủ thể tư cách đích hợp pháp bằng chứng.', 'Giấy phép kinh doanh là chứng từ hợp pháp xác nhận tư cách pháp lý của chủ thể thị trường.', 'The business license is the lawful credential confirming the legal status of a market entity.')
      ],
      sinoVietnameseComparison: 'Việt Nam cũng vận hành các hội chợ xúc tiến thương mại quan trọng như Vietnam Expo (Hà Nội và TP.HCM), Vietbuild hay Vietnam International Sourcing, nhưng điểm khác biệt căn bản là hệ thống hội chợ Trung Quốc gắn chặt với quy mô cụm công nghiệp địa phương (Quảng Châu gắn với Châu Giang, Nghĩa Ô gắn với Chiết Giang, Thượng Hải gắn với Trường Giang). Người mua Việt Nam khi đi thực địa cần chuẩn bị sẵn bộ tiêu chuẩn kỹ thuật (Tech Pack), mẫu vật đối chiếu và lịch trình nối tuyến tàu cao tốc trực tiếp từ trung tâm hội chợ về các huyện công nghiệp vệ tinh.',
      additionalReferences: 'Trung tâm Ngoại thương Trung Quốc (CFTC - đơn vị tổ chức Canton Fair); Cục Hội chợ Nhập khẩu Quốc tế Trung Quốc (CIIE Bureau); Hệ thống Công khai Thông tin Tín dụng Doanh nghiệp Quốc gia Trung Quốc (GSXT).',
      conclusion: 'Tiếp cận hệ thống hội chợ Trung Quốc một cách bài bản giúp doanh nghiệp Việt Nam nhìn rõ bản đồ phân công sản xuất theo từng vùng và sàng lọc đúng đối tác ngay từ nguồn. Lưu ý miễn trừ trách nhiệm học thuật: Nội dung chuyên luận này chỉ phục vụ mục đích nghiên cứu và tham khảo học thuật; khi lập kế hoạch tham dự hội chợ, kiểm định pháp nhân hoặc ký kết giao dịch thương mại thực tế, doanh nghiệp cần kiểm tra lịch tổ chức chính thức, quy định thị thực, quy định hải quan và tư vấn pháp lý chuyên ngành hiện hành của cơ quan chức năng hai nước.'
    },
    {
      id: 'gacc-decree-248-249-vietnam-agri-export',
      number: 98,
      category: 'business',
      categoryLabel: 'Thương mại & Hải quan',
      titleVi: 'Lệnh 248 và Lệnh 249 GACC: Cơ chế Mã số Vùng trồng, Cơ sở Đóng gói và Xuất khẩu Nông sản Chính ngạch',
      titleZh: '海关总署248号令与249号令：种植基地编码、包装厂注册与越南农产品正贸出口',
      titleZhTrad: '海關總署248號令與249號令：種植基地編碼、包裝廠註冊與越南農產品正貿出口',
      titleEn: 'GACC Decrees 248 and 249: Planting Area Codes, Packing Facility Registration, and Formal Agricultural Exports',
      readMinutes: 14,
      epistemicTag: 'Kiểm dịch & Quản lý Chất lượng · Nông sản',
      abstract: 'Từ ngày 01/01/2022, Tổng cục Hải quan Trung Quốc (GACC) chính thức thi hành hai văn bản khung là Lệnh 248 (Quy định về đăng ký quản lý doanh nghiệp sản xuất thực phẩm nhập khẩu nước ngoài) và Lệnh 249 (Biện pháp quản lý an toàn thực phẩm xuất nhập khẩu). Sự kiện này đánh dấu bước ngoặt cấu trúc chuyển dịch thương mại nông sản Việt - Trung từ tiểu ngạch sang chính ngạch, đặt trọng tâm vào truy xuất nguồn gốc, Nghị định thư kiểm dịch thực vật, Mã số vùng trồng (PUC) và Mã số cơ sở đóng gói (PHC).',
      keyTakeaways: [
        'Lệnh 248 yêu cầu toàn bộ doanh nghiệp nước ngoài sản xuất, chế biến và bảo quản thực phẩm xuất khẩu sang Trung Quốc phải đăng ký mã số GACC qua hệ thống CIFER, phân làm nhóm 18 loại thực phẩm rủi ro cao (đăng ký qua cơ quan thẩm quyền Việt Nam giới thiệu) và nhóm tự đăng ký.',
        'Lệnh 249 chuẩn hóa yêu cầu đánh giá hệ thống quản lý an toàn thực phẩm, ghi nhãn hàng hóa (bắt buộc thể hiện mã số đăng ký trên bao bì trong và ngoài) cùng cơ chế cảnh báo và đình chỉ khẩn cấp khi phát hiện dư lượng hoặc sinh vật gây hại.',
        'Đối với trái cây tươi, bên cạnh Lệnh 248/249, doanh nghiệp phải tuân thủ Nghị định thư kiểm dịch thực vật song phương với yêu cầu nghiêm ngặt về Mã số vùng trồng (PUC), Mã số cơ sở đóng gói (PHC) và kiểm soát dịch hại mục tiêu.'
      ],
      introduction: 'Trong nhiều thập kỷ, Trung Quốc là thị trường tiêu thụ nông sản, thủy sản và trái cây nhiệt đới lớn hàng đầu của Việt Nam. Tuy nhiên, mô hình trao đổi cư dân biên giới (thường gọi là tiểu ngạch) từng tồn tại những rủi ro hệ thống như ùn tắc cửa khẩu đột ngột, thiếu tiêu chuẩn đóng gói thống nhất và khả năng truy xuất nguồn gốc hạn chế. Việc Trung Quốc ban hành Lệnh 248 và Lệnh 249 vào tháng 4/2021 và đưa vào thực thi đồng loạt từ ngày 01/01/2022 đã tái định hình hoàn toàn tiêu chuẩn gia nhập thị trường đối với mọi quốc gia xuất khẩu thực phẩm vào Trung Quốc.',
      historicalBackground: 'Cơ sở pháp lý cao nhất của Lệnh 248 và Lệnh 249 là Luật An toàn Thực phẩm nước Cộng hòa Nhân dân Trung Hoa (sửa đổi năm 2015, cập nhật năm 2018 và 2021). Trước năm 2022, chỉ bốn nhóm thực phẩm có rủi ro cao (thịt, thủy sản, sản phẩm từ sữa và tổ yến) bắt buộc đăng ký doanh nghiệp sản xuất nước ngoài. Lệnh 248 mở rộng diện quản lý sang toàn bộ các doanh nghiệp sản xuất, chế biến, bảo quản thực phẩm nhập khẩu (trừ phụ gia thực phẩm và sản phẩm liên quan đến thực phẩm theo phạm vi tách riêng), thiết lập nền tảng một cửa quốc tế CIFER (China Import Food Enterprise Registration) để quản lý mã số điện tử thống nhất.',
      mainContent: [
        {
          heading: '1. Phân tầng rủi ro trong Lệnh 248: Nhóm 18 mặt hàng và Nhóm tự đăng ký',
          body: 'Lệnh 248 chia thực phẩm nhập khẩu thành hai tuyến đăng ký dựa trên đánh giá mức độ rủi ro an toàn thực phẩm. Tuyến thứ nhất bao gồm 18 nhóm thực phẩm chịu giám sát chặt (như thịt và sản phẩm thịt, vỏ ruột động vật, thủy sản, sản phẩm từ sữa, tổ yến, sản phẩm ong, trứng, dầu thực vật ăn được, bột mì nhân bánh, ngũ cốc ăn được, sản phẩm công nghiệp xay xát ngũ cốc và mạch nha, rau tươi/khô và đậu khô, gia vị, các loại hạt và hạt giống, trái cây sấy khô, hạt cà phê và ca cao chưa rang, thực phẩm ăn kiêng đặc biệt, thực phẩm chức năng). Doanh nghiệp thuộc 18 nhóm này phải được cơ quan có thẩm quyền nước xuất khẩu (tại Việt Nam là các đơn vị thuộc Bộ Nông nghiệp và Phát triển Nông thôn, Bộ Công Thương hoặc Bộ Y tế tùy nhóm hàng) thẩm định và giới thiệu hồ sơ lên GACC. Tuyến thứ hai gồm các nhóm thực phẩm ngoài 18 danh mục trên (như bánh kẹo, đồ uống đóng chai, trái cây chế biến không thuộc diện hạn chế), cho phép doanh nghiệp trực tiếp nộp hồ sơ qua cổng CIFER.'
        },
        {
          heading: '2. Yêu cầu về Mã số Đăng ký, Ghi nhãn và Hiệu lực 5 năm theo Lệnh 249',
          body: 'Khi được GACC phê duyệt, mỗi cơ sở sản xuất được cấp một mã số đăng ký riêng (hoặc sử dụng mã do cơ quan thẩm quyền nước sở tại cấp theo thỏa thuận song phương), có hiệu lực 5 năm và cần nộp hồ sơ gia hạn trước thời điểm hết hạn từ 3 đến 6 tháng. Lệnh 249 quy định rõ mã số đăng ký này phải được in trực tiếp lên cả bao bì trong và bao bì ngoài của sản phẩm thực phẩm xuất khẩu sang Trung Quốc (không chấp nhận dán đè tùy tiện đối với một số nhóm thực phẩm đặc thù như thực phẩm chức năng và thực phẩm ăn kiêng đặc biệt, vốn yêu cầu nhãn tiếng Trung in sẵn trên bao bì thương mại tối thiểu).'
        },
        {
          heading: '3. Nghị định thư Kiểm dịch Thực vật, Mã số Vùng trồng (PUC) và Cơ sở Đóng gói (PHC)',
          body: 'Riêng đối với trái cây tươi và nông sản chưa qua chế biến nhiệt (như sầu riêng, thanh long, chuối, mít, dừa tươi, dưa hấu), điều kiện tiên quyết để xuất khẩu chính ngạch là hoàn tất đánh giá nguy cơ dịch hại (PRA) và ký kết Nghị định thư song phương giữa Bộ Nông nghiệp và Phát triển Nông thôn Việt Nam với GACC. Trên nền Nghị định thư, từng vùng trồng phải được cấp Mã số vùng trồng (Production Unit Code - PUC, ghi nhận nhật ký canh tác, quản lý sinh vật gây hại kiểm dịch và dư lượng thuốc bảo vệ thực vật) và từng xưởng sơ chế phải có Mã số cơ sở đóng gói (Packing House Code - PHC) tách biệt quy trình vệ sinh, đóng gói và kiểm soát sinh vật bám dính như rệp sáp hoặc ruồi đục quả.'
        },
        {
          heading: '4. Quản trị Rủi ro Cảnh báo và Tạm dừng Mã số',
          body: 'Cơ chế kiểm soát của GACC vận hành theo nguyên tắc truy vết ngược. Khi một lô hàng bị hải quan cửa khẩu Trung Quốc phát hiện vi phạm về kiểm dịch thực vật, dư lượng kim loại nặng (như cadimi) hoặc chất cấm, GACC sẽ gửi thông báo cảnh báo về đầu mối kiểm dịch Việt Nam. Nếu vi phạm lặp lại hoặc phát hiện tình trạng mượn mã số vùng trồng, mã số đó có thể bị tạm đình chỉ xuất khẩu, ảnh hưởng trực tiếp tới uy tín của toàn bộ chuỗi cung ứng địa phương. Vì vậy, thiết lập hệ thống kiểm nghiệm nội bộ trước khi đóng container và quản lý minh bạch nhật ký điện tử vùng trồng là yêu cầu sống còn.'
        }
      ],
      theoreticalFramework: 'Trong luật thương mại quốc tế, hệ thống Lệnh 248/249 phản ánh sự mở rộng của các Biện pháp Kiểm dịch Động thực vật (SPS - Sanitary and Phytosanitary Measures) và Hàng rào Kỹ thuật trong Thương mại (TBT) theo khuôn khổ WTO. Điểm chuyển dịch cốt lõi là dịch chuyển điểm kiểm soát từ "hậu kiểm tại cửa khẩu" sang "kiểm soát toàn chuỗi từ vùng nguyên liệu và nhà máy tại nước xuất khẩu" (Pre-border Governance), biến chuẩn mực kỹ thuật thành rào cản sàng lọc năng lực tổ chức sản xuất.',
      terminologyAndLiushu: [
        { hanzi: '海关总署', pinyin: 'Hǎiguān Zǒngshǔ', hanViet: 'Hải quan Tổng thự', liushu: 'Danh xưng cơ quan cấp bộ Trung ương', gloss: 'Tổng cục Hải quan nước CHND Trung Hoa (GACC), cơ quan quản lý thông quan, thuế và kiểm dịch xuất nhập khẩu.' },
        { hanzi: '检疫', pinyin: 'jiǎnyì', hanViet: 'Kiểm dịch', liushu: 'Kiểm: Hình thanh (bộ Mộc); Dịch: Hình thanh (bộ Nạch)', gloss: 'Kiểm dịch động thực vật nhằm ngăn chặn dịch bệnh và sinh vật gây hại lây lan qua biên giới.' },
        { hanzi: '溯源', pinyin: 'sùyuán', hanViet: 'Tố nguyên', liushu: 'Hình thanh (Tố: bộ Thủy; Nguyên: bộ Thủy)', gloss: 'Truy xuất nguồn gốc sản phẩm ngược từ điểm tiêu thụ về tới cơ sở đóng gói và vùng trồng.' },
        { hanzi: '议定书', pinyin: 'yìdìngshū', hanViet: 'Nghị định thư', liushu: 'Hợp thể thuật ngữ điều ước quốc tế', gloss: 'Văn kiện pháp lý song phương quy định điều kiện kiểm dịch cụ thể cho từng loại nông sản xuất khẩu chính ngạch.' },
        { hanzi: '注册编号', pinyin: 'zhùcè biānhào', hanViet: 'Chú sách biên hiệu', liushu: 'Hợp thể thuật ngữ hành chính', gloss: 'Mã số đăng ký doanh nghiệp sản xuất thực phẩm nhập khẩu do GACC cấp trên hệ thống CIFER.' }
      ],
      primarySources: [
        PQ('《中华人民共和国进口食品境外生产企业注册管理规定》（海关总署第248号令）', 'Lệnh số 248 của Tổng cục Hải quan Trung Quốc (ban hành ngày 12/04/2021, hiệu lực từ 01/01/2022)', 'GACC Decree No. 248: Regulations on the Registration and Administration of Overseas Manufacturers of Imported Food (2021)', '向中国境内出口食品的境外生产、加工、贮存企业，应当获得海关总署注册。', 'Xiàng Zhōngguó jìngnèi chūkǒu shípǐn de jìngwài shēngchǎn, jiāgōng, zhùcún qǐyè, yīngdāng huòdé Hǎiguān Zǒngshǔ zhùcè.', 'Hướng Trung Quốc cảnh nội xuất khẩu thực phẩm đích cảnh ngoại sinh sản, gia công, trữ tồn xí nghiệp, ưng đương hoạch đắc Hải quan Tổng thự chú sách.', 'Doanh nghiệp nước ngoài sản xuất, gia công, bảo quản thực phẩm xuất khẩu vào lãnh thổ Trung Quốc phải được Tổng cục Hải quan Trung Quốc đăng ký.', 'Overseas enterprises that produce, process, or store food exported to China shall obtain registration with the General Administration of Customs of China.'),
        PQ('《中华人民共和国进出口食品安全管理办法》（海关总署第249号令）', 'Lệnh số 249 của Tổng cục Hải quan Trung Quốc (ban hành ngày 12/04/2021, hiệu lực từ 01/01/2022)', 'GACC Decree No. 249: Administrative Measures on Import and Export Food Safety (2021)', '进口食品的包装和标签、标识应当符合中国法律法规和食品安全国家标准。', 'Jìnkǒu shípǐn de bāozhuāng hé biāoqiān, biāoshí yīngdāng fúhé Zhōngguó fǎlǜ fǎguī hé shípǐn ānquán guójiā biāozhǔn.', 'Nhập khẩu thực phẩm đích bao trang hòa tiêu thiêm, tiêu chí ưng đương phù hợp Trung Quốc pháp luật pháp quy hòa thực phẩm an toàn quốc gia tiêu chuẩn.', 'Bao bì, nhãn mác và dấu hiệu nhận diện của thực phẩm nhập khẩu phải phù hợp với pháp luật, quy định và tiêu chuẩn quốc gia về an toàn thực phẩm của Trung Quốc.', 'The packaging, labeling, and markings of imported food shall comply with Chinese laws, regulations, and national food safety standards.')
      ],
      sinoVietnameseComparison: 'Cục Bảo vệ Thực vật và Cục Chất lượng, Chế biến và Phát triển Thị trường (Bộ Nông nghiệp và Phát triển Nông thôn Việt Nam) giữ vai trò cơ quan đầu mối kỹ thuật kiểm tra, thẩm định và gửi danh sách đề xuất sang GACC. Sự đồng bộ giữa hệ thống tiêu chuẩn VietGAP/GlobalGAP trong nước với bộ tiêu chuẩn quốc gia Trung Quốc (GB Standards) đang giúp nông sản Việt Nam nâng cấp quy trình chế biến sâu và giảm sự phụ thuộc vào biến động thời vụ tại các cặp cửa khẩu đường bộ Lạng Sơn, Lào Cai, Quảng Ninh.',
      additionalReferences: 'Văn phòng SPS Việt Nam (Bộ NN&PTNT) - Hệ thống hỏi đáp Lệnh 248/249; Cổng đăng ký CIFER của GACC (cifer.singlewindow.cn); Cục Bảo vệ Thực vật Việt Nam - Danh sách Nghị định thư kiểm dịch thực vật.',
      conclusion: 'Chuyển đổi sang xuất khẩu chính ngạch theo Lệnh 248, Lệnh 249 và hệ thống mã số vùng trồng là điều kiện tất yếu để nông sản Việt Nam giữ vững vị thế bền vững tại thị trường Trung Quốc. Lưu ý miễn trừ trách nhiệm học thuật: Nội dung chuyên luận này chỉ mang tính nghiên cứu và tham khảo học thuật; khi thực hiện đăng ký mã số CIFER, làm thủ tục kiểm dịch hay xuất khẩu thực tế, doanh nghiệp cần tra cứu danh mục mặt hàng, tiêu chuẩn GB, hướng dẫn hiện hành của Văn phòng SPS Việt Nam, Bộ Nông nghiệp và Phát triển Nông thôn và Tổng cục Hải quan Trung Quốc (GACC).'
    },
    {
      id: 'chinese-enterprises-globalization-playbook',
      number: 99,
      category: 'business',
      categoryLabel: 'Thương mại & Hải quan',
      titleVi: 'Chiến lược Toàn cầu hóa của Doanh nghiệp Trung Quốc: Từ Gia công OEM sang Thương hiệu Toàn cầu và Chuỗi cung ứng Đa điểm',
      titleZh: '中国企业出海战略演进：从OEM代工到全球化品牌与多节点供应链布局',
      titleZhTrad: '中國企業出海戰略演進：從OEM代工到全球化品牌與多節點供應鏈佈局',
      titleEn: 'Globalization Playbook of Chinese Enterprises: From OEM Manufacturing to Global Brands and Multi-Node Supply Chains',
      readMinutes: 13,
      epistemicTag: 'Chiến lược Kinh doanh · Chuỗi cung ứng',
      abstract: 'Trong hơn hai thập kỷ kể từ khi Trung Quốc gia nhập WTO (năm 2001), làn sóng vươn ra toàn cầu (出海 - Chuhai) của doanh nghiệp Trung Quốc đã trải qua ba giai đoạn chuyển hóa rõ nét: từ xuất khẩu hàng gia công OEM dựa trên lợi thế chi phí, sang mua bán sáp nhập (M&A) để tiếp thu công nghệ và kênh phân phối, và hiện nay là xây dựng thương hiệu độc lập kết hợp chuỗi cung ứng đa điểm (China+1) tại Đông Nam Á, Trung Đông, Mỹ Latinh và châu Âu.',
      keyTakeaways: [
        'Quá trình toàn cầu hóa của doanh nghiệp Trung Quốc tiến hóa theo nấc thang giá trị gia tăng: OEM (gia công theo bản vẽ) → ODM (thiết kế và sản xuất gốc) → OBM (sở hữu thương hiệu và hệ sinh thái phân phối toàn cầu).',
        'Trong giai đoạn hiện nay, mô hình "xuất khẩu năng lực chuỗi cung ứng" (Supply Chain Globalization) gắn liền với việc đưa cả nhà máy lắp ráp lẫn vệ tinh cung ứng linh kiện sang đặt tại các trung tâm sản xuất lân cận như Việt Nam, Thái Lan, Malaysia và Mexico.',
        'Các thương hiệu thế hệ mới kết hợp năng lực tích hợp phần cứng - phần mềm từ cụm công nghiệp nội địa với chiến lược bản địa hóa sâu về sản phẩm, tiêu chuẩn pháp lý và nhân sự quản trị tại thị trường sở tại.'
      ],
      introduction: 'Khái niệm "Xuất hải" (出海 - vươn ra biển lớn) đã trở thành một trong những từ khóa chiến lược phổ biến nhất trong giới quản trị doanh nghiệp Trung Quốc đương đại. Không còn dừng ở hình ảnh "công xưởng gia công giá rẻ" của thập niên 1990 và 2000, nhiều tập đoàn công nghiệp, thiết bị gia dụng, năng lượng mới, điện tử tiêu dùng và nền tảng số của Trung Quốc đã chuyển sang cạnh tranh trực diện bằng bằng sáng chế, tốc độ đổi mới mẫu mã và mạng lưới sản xuất xuyên quốc gia.',
      historicalBackground: 'Chính sách "Đi ra ngoài" (走出去 - Zou Chuqu) được Trung Quốc chính thức khởi xướng vào cuối thập niên 1990 và tăng tốc mạnh sau mốc gia nhập Tổ chức Thương mại Thế giới (WTO) tháng 12/2001. Trong giai đoạn 2001 - 2012, lực lượng tiên phong chủ yếu là các tập đoàn nhà nước trong lĩnh vực năng lượng, hạ tầng, viễn thông và các thương vụ mua lại thương hiệu quốc tế tiêu biểu như Lenovo mua mảng máy tính cá nhân của IBM (2005) hay Geely mua lại Volvo Cars (2010). Từ sau năm 2013, cùng với Sáng kiến Vành đai và Con đường (BRI) và sự trưởng thành của hệ sinh thái kỹ thuật nội địa tại Thâm Quyến, Hàng Châu, Thượng Hải và Hợp Phì, khu vực kinh tế tư nhân vươn lên làm động lực chính với các lĩnh vực thiết bị thông minh, xe điện, pin lưu trữ, thương mại điện tử xuyên biên giới và chuỗi bán lẻ.',
      mainContent: [
        {
          heading: '1. Lộ trình nâng cấp nấc thang giá trị: OEM → ODM → OBM',
          body: 'Trong lý thuyết "Đường cong nụ cười" (Smiling Curve) của Stan Shih, khâu lắp ráp thuần túy (OEM) chiếm tỷ suất lợi nhuận thấp nhất, trong khi hai đầu R&D - sáng chế và thương hiệu - phân phối giữ phần giá trị cao nhất. Nhiều doanh nghiệp Trung Quốc như Haier, Midea, Huawei, DJI hay BYD đã sử dụng thị trường nội địa rộng lớn làm bệ phóng thử nghiệm sản phẩm ở quy mô công nghiệp (Scale Economy), tái đầu tư mạnh vào đội ngũ kỹ sư R&D và tự chủ linh kiện cốt lõi, sau đó đưa sản phẩm mang thương hiệu riêng (OBM) ra quốc tế thay vì chỉ đứng sau nhãn hiệu của các nhà bán lẻ phương Tây.'
        },
        {
          heading: '2. Từ xuất khẩu thành phẩm sang xuất khẩu hệ sinh thái chuỗi cung ứng',
          body: 'Trước biến động thuế quan toàn cầu, chi phí nhân công nội địa tăng và yêu cầu đáp ứng quy tắc xuất xứ tại các thị trường đích, các tập đoàn công nghiệp Trung Quốc không chỉ mở một nhà máy đơn lẻ ở nước ngoài mà di chuyển theo cụm vệ tinh. Khi một doanh nghiệp đầu tàu trong ngành điện tử, dệt may, năng lượng mặt trời hoặc phụ tùng ô tô đầu tư nhà máy tại miền Bắc Việt Nam hay Thái Lan, hàng loạt nhà cung cấp cấp 1 và cấp 2 về khuôn mẫu, ép nhựa, bao bì và linh kiện cơ khí cũng theo chân đặt xưởng lân cận nhằm duy trì tốc độ giao hàng tính bằng giờ.'
        },
        {
          heading: '3. Chiến lược Bản địa hóa sâu ("In Local, For Local")',
          body: 'Các nghiên cứu quản trị quốc tế chỉ ra rằng sai lầm lớn nhất của doanh nghiệp mới ra nước ngoài là sao chép nguyên xi mô hình vận hành nội địa. Những doanh nghiệp Trung Quốc trụ vững tại thị trường quốc tế thường điều chỉnh mạnh mẽ ba lớp: (1) bản địa hóa thiết kế sản phẩm theo thói quen tiêu dùng và điều kiện khí hậu địa phương (ví dụ tủ lạnh hoặc máy điều hòa thiết kế riêng cho khí hậu nóng ẩm Đông Nam Á, hay điện thoại tối ưu camera và ngôn ngữ địa phương tại châu Phi và Nam Á); (2) tuân thủ chuẩn bảo vệ dữ liệu, lao động, môi trường (ESG) và chứng nhận kỹ thuật sở tại; (3) xây dựng đội ngũ quản lý bản địa kết hợp chuyên gia kỹ thuật từ trụ sở.'
        },
        {
          heading: '4. Thương mại điện tử xuyên biên giới và mô hình Chuỗi cung ứng Phản ứng Nhanh',
          body: 'Một trụ cột mới trong làn sóng toàn cầu hóa là mô hình bán hàng trực tiếp từ cụm xưởng tới người tiêu dùng quốc tế (D2C / Cross-border E-commerce) kết hợp hệ thống kho ngoại quan và kho đích (Overseas Warehouses). Nhờ số hóa dữ liệu tồn kho và liên kết trực tiếp phần mềm quản trị đơn hàng với hàng nghìn xưởng may mặc hoặc gia dụng quy mô nhỏ tại Quảng Đông và Chiết Giang, mô hình "đặt lô nhỏ, phản hồi nhanh" (小单快反 - Xiaodan Kuaifan) rút ngắn chu kỳ từ thiết kế đến giao hàng xuống còn vài ngày hoặc vài tuần, thay thế mô hình sản xuất tồn kho lớn truyền thống.'
        }
      ],
      theoreticalFramework: 'Quá trình toàn cầu hóa của doanh nghiệp Trung Quốc có thể giải thích qua khung LLL (Linkage - Leverage - Learning: Liên kết - Đòn bẩy - Học hỏi) của John Mathews dành cho các công ty đa quốc gia đến sau (Latecomer MNEs). Thay vì sở hữu sẵn lợi thế độc quyền công nghệ ngay từ đầu như mô hình OLI cổ điển của John Dunning, doanh nghiệp đến sau chủ động liên kết vào chuỗi cung ứng toàn cầu, tận dụng đòn bẩy thị trường nội địa và cụm công nghiệp dày đặc để học hỏi nhanh công nghệ cốt lõi, rồi đảo ngược dòng chảy bằng năng lực kỹ thuật và tốc độ thương mại hóa.',
      terminologyAndLiushu: [
        { hanzi: '出海', pinyin: 'chūhǎi', hanViet: 'Xuất hải', liushu: 'Xuất: Tượng hình; Hải: Hình thanh (bộ Thủy)', gloss: 'Vươn ra thị trường quốc tế — thuật ngữ kinh doanh chỉ hoạt động mở rộng toàn cầu của doanh nghiệp Trung Quốc.' },
        { hanzi: '代工', pinyin: 'dàigōng', hanViet: 'Đại công', liushu: 'Đại: Hình thanh (bộ Nhân); Công: Tượng hình', gloss: 'Gia công sản xuất theo đơn đặt hàng và thương hiệu của đối tác khác (OEM).' },
        { hanzi: '本土化', pinyin: 'běntǔhuà', hanViet: 'Bản thổ hóa', liushu: 'Bản: Chỉ sự; Thổ: Tượng hình; Hóa: Hội ý', gloss: 'Bản địa hóa — điều chỉnh sản phẩm, nhân sự và vận hành phù hợp văn hóa và pháp luật nước sở tại.' },
        { hanzi: '小单快反', pinyin: 'xiǎodān kuàifǎn', hanViet: 'Tiểu đơn khoái phản', liushu: 'Cụm thuật ngữ quản trị chuỗi cung ứng đương đại', gloss: 'Mô hình sản xuất lô nhỏ, phản ứng nhanh theo tín hiệu nhu cầu thời gian thực để giảm rủi ro tồn kho.' },
        { hanzi: '海外仓', pinyin: 'hǎiwàicāng', hanViet: 'Hải ngoại thương', liushu: 'Thương: Tượng hình (kho chứa lương thực/hàng hóa)', gloss: 'Kho hàng đặt tại quốc gia tiêu thụ đích giúp rút ngắn thời gian giao vận thương mại điện tử xuyên biên giới.' }
      ],
      primarySources: [
        PQ('约翰·马修斯（John A. Mathews）《龙行天下：新兴跨国企业的全球化战略》（2002）', 'John A. Mathews, Dragon Multinational: A New Model for Global Growth (Oxford University Press, 2002)', 'John A. Mathews, Dragon Multinational: A New Model for Global Growth (Oxford University Press, 2002)', '后发跨国企业通过联结、杠杆与学习机制，在全球价值链中实现快速追赶与能力跃升。', 'Hòufā kuàguó qǐyè tōngguò liánjié, gànggǎn yǔ xuéxí jīzhì, zài quánqiú jiàzhíliàn zhōng shíxiàn kuàisù zhuīgǎn yǔ nénglì yuèshēng.', 'Hậu phát khóa quốc xí nghiệp thông quá liên kết, giang can dữ học tập cơ chế, tại toàn cầu giá trị liên trung thực hiện khoái tốc truy cản dữ năng lực dược thăng.', 'Các doanh nghiệp đa quốc gia đến sau tận dụng cơ chế Liên kết, Đòn bẩy và Học hỏi để bắt kịp nhanh và nâng cấp năng lực trong chuỗi giá trị toàn cầu.', 'Latecomer multinational enterprises leverage Linkage, Leverage, and Learning mechanisms to catch up rapidly and upgrade capabilities within global value chains.'),
        PQ('《中华人民共和国对外贸易法》及“走出去”战略纲要', 'Luật Ngoại thương CHND Trung Hoa và Định hướng chiến lược "Đi ra ngoài"', 'Foreign Trade Law of the PRC and the Going Global Strategic Framework', '国家鼓励企业开展国际经济技术合作，提升自主品牌与国际竞争力。', 'Guójiā gǔlì qǐyè kāizhǎn guójì jīngjì jìshù hézuò, tíshēng zìzhǔ pǐnpái yǔ guójì jìngzhēnglì.', 'Quốc gia cổ lệ xí nghiệp khai triển quốc tế kinh tế kỹ thuật hợp tác, đề thăng tự chủ phẩm bài dữ quốc tế cạnh tranh lực.', 'Nhà nước khuyến khích doanh nghiệp triển khai hợp tác kinh tế kỹ thuật quốc tế, nâng cao thương hiệu tự chủ và năng lực cạnh tranh toàn cầu.', 'The state encourages enterprises to engage in international economic and technical cooperation to strengthen independent brands and global competitiveness.')
      ],
      sinoVietnameseComparison: 'Việt Nam vừa là mắt xích tiếp nhận mạnh mẽ dòng vốn dịch chuyển sản xuất đa điểm (đặc biệt tại Bắc Ninh, Bắc Giang, Hải Phòng, Quảng Ninh, Bình Dương và Đồng Nai), vừa có những doanh nghiệp tiên phong mở rộng ra quốc tế trong lĩnh vực công nghệ phần mềm, viễn thông, nông sản chế biến và xe điện. Việc quan sát bài học chuyển dịch OEM → OBM và kiểm soát chuỗi cung ứng của doanh nghiệp Trung Quốc mang lại gợi ý thiết thực cho doanh nghiệp Việt Nam về bài toán nâng cao tỷ lệ nội địa hóa, đầu tư R&D và bảo vệ thương hiệu toàn cầu.',
      additionalReferences: 'UNCTAD World Investment Report (các ấn bản thường niên về FDI khu vực châu Á); Bộ Thương mại Trung Quốc (MOFCOM) - Báo cáo thống kê Đầu tư trực tiếp ra nước ngoài; Cục Đầu tư Nước ngoài (Bộ Kế hoạch và Đầu tư Việt Nam).',
      conclusion: 'Làn sóng toàn cầu hóa của doanh nghiệp Trung Quốc cho thấy năng lực cạnh tranh bền vững không còn nằm ở chi phí nhân công rẻ mà ở tốc độ tích hợp kỹ thuật, độ sâu chuỗi cung ứng và khả năng bản địa hóa pháp lý. Lưu ý miễn trừ trách nhiệm học thuật: Nội dung chuyên luận này chỉ phục vụ mục đích nghiên cứu chiến lược và tham khảo học thuật; mọi quyết định đầu tư xuyên biên giới, chuyển dịch nhà máy hay tiếp cận thị trường cần được thẩm định độc lập dựa trên dữ liệu tài chính kiểm toán, quy định đầu tư và pháp luật hiện hành của cơ quan chức năng các nước liên quan.'
    },
    {
      id: 'cross-border-b2b-contracts-cietac-viac',
      number: 100,
      category: 'business',
      categoryLabel: 'Thương mại & Hải quan',
      titleVi: 'Pháp chế Hợp đồng B2B Trung–Việt: Giá trị Công chương (公章), Ngôn ngữ Ưu tiên, Điều khoản QC và Trọng tài CIETAC/VIAC',
      titleZh: '中越跨境B2B合同法务：公章效力、优先语言、质量检验条款与CIETAC/VIAC仲裁机制',
      titleZhTrad: '中越跨境B2B合同法務：公章效力、優先語言、質量檢驗條款與CIETAC/VIAC仲裁機制',
      titleEn: 'Sino-Vietnamese Cross-Border B2B Contract Law: Corporate Chop Authority, Prevailing Language, QC Clauses, and CIETAC/VIAC Arbitration',
      readMinutes: 15,
      epistemicTag: 'Pháp chế Hợp đồng · Trọng tài Quốc tế',
      abstract: 'Trong giao dịch mua bán hàng hóa quốc tế giữa doanh nghiệp Việt Nam và Trung Quốc, nhiều tranh chấp phát sinh không phải do thiếu thiện chí mà do khoảng trống trong thiết kế hợp đồng: ký kết không có dấu Công chương hợp lệ, không chỉ định ngôn ngữ ưu tiên khi bản tiếng Anh và tiếng Trung mâu thuẫn, thiếu tiêu chuẩn nghiệm thu kỹ thuật (QC) rõ ràng và lựa chọn sai cơ quan giải quyết tranh chấp dẫn đến phán quyết không thể thi hành xuyên biên giới. Chuyên luận khép lại mốc 100 bài này phân tích bốn trụ cột pháp lý then chốt của hợp đồng B2B Trung - Việt.',
      keyTakeaways: [
        'Theo Bộ luật Dân sự và Luật Công ty Trung Quốc, dấu tròn pháp nhân — Công chương (公章) hoặc Dấu chuyên dụng hợp đồng (合同专用章) đã đăng ký công an — giữ vai trò chứng cứ quyết định hiệu lực ràng buộc của công ty, vượt lên trên chữ ký cá nhân thông thường của nhân viên kinh doanh.',
        'Hợp đồng song ngữ bắt buộc phải quy định rõ điều khoản Ngôn ngữ Ưu tiên (Prevailing Language), dẫn chiếu luật áp dụng (như Công ước Viên 1980 - CISG mà cả Việt Nam và Trung Quốc đều là thành viên) và tiêu chuẩn kiểm định chất lượng độc lập (AQL / Pre-shipment Inspection).',
        'Do phán quyết tòa án dân sự giữa hai nước gặp nhiều rào cản công nhận và cho thi hành hơn so với phán quyết trọng tài, điều khoản Trọng tài thương mại quốc tế (như CIETAC, VIAC hoặc SIAC) dưới khung Công ước New York 1958 là cơ chế bảo vệ hiệu quả hơn cả.'
      ],
      introduction: 'Một hợp đồng mua bán ngoại thương (Sales Contract) chất lượng không được viết để cất vào tủ khi giao dịch suôn sẻ, mà để làm điểm tựa pháp lý khi lô hàng gặp sự cố về chất lượng, chậm tiến độ giao tàu hay tranh chấp thanh toán. Do hệ thống pháp luật doanh nghiệp và tập quán thương mại của Việt Nam và Trung Quốc có những điểm tương đồng về truyền thống dân luật nhưng khác biệt rõ về thủ tục chứng thực con dấu, ngoại hối và thẩm quyền xét xử, việc chuẩn hóa cấu trúc hợp đồng trước khi đặt cọc là nguyên tắc quản trị rủi ro bắt buộc.',
      historicalBackground: 'Cơ sở pháp lý quốc tế chung quan trọng nhất cho mua bán hàng hóa giữa doanh nghiệp hai nước là Công ước Liên Hợp Quốc về Hợp đồng Mua bán Hàng hóa Quốc tế năm 1980 (CISG). Trung Quốc là một trong những quốc gia phê chuẩn sớm nhất (hiệu lực từ 01/01/1988), còn Việt Nam chính thức trở thành thành viên thứ 84 với hiệu lực từ ngày 01/01/2017. Về cơ chế thi hành phán quyết xuyên biên giới, cả Trung Quốc (từ 1987) và Việt Nam (từ 1995) đều là thành viên Công ước New York 1958 về Công nhận và Thi hành Phán quyết Trọng tài Nước ngoài. Ngoài ra, hai nước còn có Hiệp định Tương trợ Tư pháp về các vấn đề dân sự và hình sự ký năm 1998.',
      mainContent: [
        {
          heading: '1. Hệ thống Con dấu Doanh nghiệp Trung Quốc: Công chương (公章) và Dấu Hợp đồng',
          body: 'Khác với tập quán thông luật Anh - Mỹ vốn đặt trọng tâm vào chữ ký tay của người đại diện, pháp luật thương mại Trung Quốc đặt giá trị pháp lý rất cao vào hệ thống con dấu tròn (印章 - Yinzhang) có khắc mã số đăng ký 13 chữ số do cơ quan công an quản lý. Doanh nghiệp Trung Quốc thường có năm loại dấu chính: Công chương (公章 - dấu chính có thẩm quyền cao nhất trên mọi văn kiện pháp lý), Dấu chuyên dụng hợp đồng (合同专用章 - dùng riêng cho ký kết hợp đồng thương mại), Dấu tài chính (财务专用章), Dấu hóa đơn (发票专用章) và Dấu người đại diện theo pháp luật (法人章). Nếu một hợp đồng chỉ có chữ ký của nhân viên bán hàng hoặc dấu hình bầu dục tiếng Anh tự khắc không đăng ký (thường gặp trong email báo giá), doanh nghiệp mua hàng đối mặt nguy cơ cao bị đối tác phủ nhận hiệu lực khi xảy ra tranh chấp.'
        },
        {
          heading: '2. Ngôn ngữ Ưu tiên, Luật Áp dụng (CISG) và Tài khoản Thanh toán Trùng khớp',
          body: 'Khi hợp đồng được lập song ngữ Anh - Trung hoặc Việt - Trung, điều khoản Ngôn ngữ Ưu tiên (Prevailing Language) phải quy định rõ bản ngôn ngữ nào có giá trị pháp lý cao nhất nếu phát sinh cách hiểu khác nhau. Nếu các bên không thỏa thuận loại trừ, Công ước CISG 1980 sẽ tự động áp dụng cho hợp đồng mua bán hàng hóa giữa doanh nghiệp có trụ sở tại Việt Nam và Trung Quốc. Một nguyên tắc an toàn thanh toán thiết yếu là tên pháp nhân thụ hưởng trên tài khoản ngân hàng (Beneficiary Name) phải trùng khớp với tên pháp nhân đóng Công chương trên hợp đồng; mọi yêu cầu chuyển tiền đặt cọc sang tài khoản cá nhân hoặc công ty trung gian tại Hồng Kông mà không có phụ lục ủy quyền thanh toán (Payment Authorization Letter) đóng Công chương chính thức đều tiềm ẩn rủi ro pháp lý nghiêm trọng.'
        },
        {
          heading: '3. Điều khoản Kiểm định Chất lượng (QC), Incoterms và Bồi thường Vi phạm',
          body: 'Tranh chấp phổ biến nhất trong nhập khẩu từ Trung Quốc là hàng thực tế sai lệch so với mẫu chào hàng (Golden Sample). Do đó, hợp đồng cần đính kèm Phụ lục Thông số Kỹ thuật (Technical Specification Sheet) làm bộ phận không tách rời, quy định rõ quyền kiểm hàng trước khi giao (Pre-shipment Inspection - PSI) bởi bên thứ ba độc lập (như SGS, Intertek, TÜV hoặc Bureau Veritas) theo mức chất lượng chấp nhận (AQL), điều kiện thanh toán phần còn lại gắn với Biên bản Nghiệm thu Đạt chuẩn (Inspection Certificate) và điều khoản Incoterms 2020 rõ điểm chuyển giao rủi ro (như FOB Thâm Quyến hay CIF Hải Phòng). Đồng thời, hợp đồng cần quy định cơ chế phạt chậm giao hàng và giải quyết hàng lỗi rõ ràng thay vì câu chữ chung chung.'
        },
        {
          heading: '4. Lựa chọn Cơ quan Giải quyết Tranh chấp: Trọng tài CIETAC, VIAC và Công ước New York 1958',
          body: 'Trong tranh chấp xuyên biên giới, lựa chọn tòa án quốc gia của nước bên mua thường gặp khó khăn lớn khi yêu cầu công nhận và thi hành án tại nước bên bán, và ngược lại. Trọng tài thương mại quốc tế khắc phục điểm nghẽn này nhờ cơ chế Công ước New York 1958 được cả hai nước công nhận. Doanh nghiệp có thể thỏa thuận đưa tranh chấp ra Ủy ban Trọng tài Kinh tế và Thương mại Quốc tế Trung Quốc (CIETAC - trụ sở Bắc Kinh và nhiều phân hội lớn), Trung tâm Trọng tài Quốc tế Việt Nam (VIAC), hoặc trung tâm trọng tài trung lập trong khu vực như HKIAC (Hồng Kông) hay SIAC (Singapore). Cần lưu ý quy định rõ tên chính xác của trung tâm trọng tài, địa điểm trọng tài (Seat of Arbitration), ngôn ngữ tố tụng và số lượng trọng tài viên để điều khoản trọng tài không bị vô hiệu do mơ hồ.'
        }
      ],
      theoreticalFramework: 'Từ góc độ Luật Hợp đồng So sánh và Quản trị Rủi ro Pháp lý (Legal Risk Management), một hợp đồng B2B xuyên biên giới chỉ thực sự có sức răn đe khi đạt "tính khả thi trong cưỡng chế thi hành" (Enforceability) ngay tại nơi đối tác đặt tài sản. Thiết kế hợp đồng theo tư duy "ngược từ khâu thi hành án" — bắt đầu bằng câu hỏi: nếu tranh chấp xảy ra, phán quyết sẽ được thi hành ở đâu và cần chứng cứ nào — giúp doanh nghiệp đặt đúng trọng tâm vào Công chương, phụ lục kỹ thuật và điều khoản trọng tài.',
      terminologyAndLiushu: [
        { hanzi: '公章', pinyin: 'gōngzhāng', hanViet: 'Công chương', liushu: 'Công: Hội ý; Chương: Hội ý/Hình thanh', gloss: 'Con dấu tròn chính thức của pháp nhân doanh nghiệp Trung Quốc có giá trị ràng buộc pháp lý cao nhất.' },
        { hanzi: '合同专用章', pinyin: 'hétóng zhuānyòngzhāng', hanViet: 'Hợp đồng chuyên dụng chương', liushu: 'Cụm thuật ngữ pháp chế doanh nghiệp', gloss: 'Con dấu chuyên dùng riêng cho việc ký kết hợp đồng thương mại, có hiệu lực pháp lý tương đương Công chương trong phạm vi hợp đồng.' },
        { hanzi: '仲裁', pinyin: 'zhòngcái', hanViet: 'Trọng tài', liushu: 'Trọng: Hình thanh (bộ Nhân); Tài: Hình thanh (bộ Y)', gloss: 'Cơ chế giải quyết tranh chấp thương mại ngoài tòa án có phán quyết chung thẩm và được công nhận xuyên biên giới theo Công ước New York 1958.' },
        { hanzi: '违约金', pinyin: 'wéiyuējīn', hanViet: 'Vi ước kim', liushu: 'Vi: Hình thanh; Ước: Hình thanh (bộ Mịch); Kim: Tượng hình', gloss: 'Khoản tiền phạt hoặc bồi thường ấn định trước khi một bên vi phạm nghĩa vụ hợp đồng.' },
        { hanzi: '不可抗力', pinyin: 'bùkěkànglì', hanViet: 'Bất khả kháng lực', liushu: 'Cụm thuật ngữ pháp lý dân sự', gloss: 'Sự kiện khách quan không thể lường trước và không thể khắc phục (Force Majeure) làm miễn trừ trách nhiệm vi phạm hợp đồng.' }
      ],
      primarySources: [
        PQ('《中华人民共和国民法典》第四百九十条', 'Bộ luật Dân sự nước CHND Trung Hoa (ban hành 2020, hiệu lực từ 01/01/2021), Điều 490', 'Civil Code of the People\'s Republic of China (effective 2021), Article 490', '当事人采用合同书形式订立合同的，自当事人均签名、盖章或者按指印时合同成立。', 'Dāngshìrén cǎiyòng hétóngshū xíngshì dìnglì hétóng de, zì dāngshìrén jūn qiānmíng, gàizhāng huòzhě àn zhǐyìn shí hétóng chénglì.', 'Đương sự thái dụng hợp đồng thư hình thức đính lập hợp đồng đích, tự đương sự quân thiêm danh, cái chương hoặc giả án chỉ ấn thời hợp đồng thành lập.', 'Khi các bên giao kết hợp đồng bằng văn bản hợp đồng, hợp đồng được xác lập kể từ thời điểm tất cả các bên ký tên, đóng dấu hoặc điểm chỉ.', 'Where the parties conclude a contract in the form of a written contract, the contract is formed when all parties sign, affix their seals, or place their fingerprints on it.'),
        PQ('《联合国国际货物销售合同公约》（CISG）第十一条及第三十五条', 'Công ước Liên Hợp Quốc về Hợp đồng Mua bán Hàng hóa Quốc tế (CISG 1980), Điều 35', 'United Nations Convention on Contracts for the International Sale of Goods (CISG 1980), Article 35', '卖方交付的货物必须与合同所规定的数量、质量和规格相符，并须按照合同所规定的方式装箱或包装。', 'Màifāng jiāofù de huòwù bìxū yǔ hétóng suǒ guīdìng de shùliàng, zhìliàng hé guīgé xiāngfú, bìng xū ànzhào hétóng suǒ guīdìng de fāngshì zhuāngxiāng huò bāozhuāng.', 'Mại phương giao phó đích hóa vật tất tu dữ hợp đồng sở quy định đích số lượng, chất lượng hòa quy cách tương phù, tịnh tu án chiếu hợp đồng sở quy định đích phương thức trang tương hoặc bao trang.', 'Người bán phải giao hàng đúng số lượng, phẩm chất và mô tả như quy định trong hợp đồng, và đúng cách thức đóng gói hoặc bao bì theo hợp đồng.', 'The seller must deliver goods which are of the quantity, quality and description required by the contract and which are contained or packaged in the manner required by the contract.')
      ],
      sinoVietnameseComparison: 'Tại Việt Nam, Luật Doanh nghiệp 2020 trao quyền tự chủ cao hơn về hình thức và số lượng con dấu nhưng vẫn coi trọng chữ ký của Người đại diện theo pháp luật kết hợp dấu doanh nghiệp trong giao dịch thương mại lớn. Khi giao dịch với đối tác Trung Quốc, doanh nghiệp Việt Nam cần kết hợp cả hai chuẩn mực: kiểm tra thông tin Người đại diện theo pháp luật (法定代表人) trên hệ thống GSXT, yêu cầu đóng Công chương hoặc Dấu hợp đồng hợp lệ, và thiết kế điều khoản trọng tài rõ ràng giữa CIETAC và VIAC tùy vào vị thế đàm phán và địa điểm nắm giữ tài sản của bên có nguy cơ vi phạm.',
      additionalReferences: 'Ủy ban Liên Hợp Quốc về Luật Thương mại Quốc tế (UNCITRAL) - Văn bản CISG 1980 và Công ước New York 1958; Quy tắc Tố tụng Trọng tài CIETAC và VIAC; Phòng Thương mại Quốc tế (ICC) - Incoterms 2020.',
      conclusion: 'Hoàn thiện năng lực pháp chế hợp đồng là mảnh ghép cuối cùng giúp doanh nghiệp Việt Nam chuyển từ giao dịch dựa trên niềm tin cảm tính sang quản trị rủi ro chuẩn quốc tế trong hợp tác với Trung Quốc. Lưu ý miễn trừ trách nhiệm học thuật: Nội dung chuyên luận này chỉ mang tính chất nghiên cứu học thuật và phổ biến kiến thức pháp lý tổng quát, không cấu thành ý kiến tư vấn pháp lý chính thức; khi soạn thảo hợp đồng, thẩm định con dấu pháp nhân hoặc giải quyết tranh chấp thương mại thực tế, doanh nghiệp bắt buộc phải tham vấn luật sư chuyên ngành và đối chiếu quy định pháp luật hiện hành của cơ quan chức năng hai nước.'
    }
  ];

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
    "mohism-logic-optics-ethics": "assets/images/articles/hero-four-inventions.jpg",
    "religious-daoism-quanzhen-zhengyi": "assets/images/provinces/shanxi-hanging-temple.jpg",
    "chu-nom-liushu-script-dialogue": "assets/images/articles/hero-sino-vietnam.jpg",
    "imperial-palace-axes-beijing-thanglong-hue": "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
    "truc-lam-zen-song-yuan-dialogue": "assets/images/articles/hero-sino-vietnam.jpg",
    "east-asian-historiography-shiji-toanthu": "assets/images/articles/hero-classical-books-scrolls.jpg",
    "bac-y-nam-duoc-comparative-medicine": "assets/images/articles/hero-tcm-solar.jpg",
    "china-hsr-megaprojects-urban-network": "assets/images/articles/hero-contemporary-china.jpg",
    "china-green-energy-ev-battery-ecosystem": "assets/images/articles/hero-huaqiangbei-tech.jpg",
    "china-digital-payments-platform-economy": "assets/images/articles/hero-contemporary-china.jpg",
    "modern-chinese-archaeology-sanxingdui-liangzhu": "assets/images/museum/sanxingdui-mask.jpg",
    "china-space-aerospace-tiangong-beidou": "assets/images/articles/hero-contemporary-china.jpg",
    "rcep-acfta-cumulation-rules-vietnam": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "china-trade-fairs-canton-ciie-yiwu-guide": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "gacc-decree-248-249-vietnam-agri-export": "assets/images/articles/hero-consular-field-guide.jpg",
    "chinese-enterprises-globalization-playbook": "assets/images/provinces/guangdong-canton-tower.jpg",
    "cross-border-b2b-contracts-cietac-viac": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "tang-poetry-song-ci-poetics-geography": "assets/images/articles/hero-tang-dynasty.jpg",
    "chinese-aesthetic-concepts-qiyun-yijing": "assets/images/paintings/22_qianli_jiangshan.jpg",
    "calligraphy-masterpieces-three-rarities-lineage": "assets/images/articles/hero-calligraphy-five-scripts.jpg",
    "chinese-mythology-shanhaijing-kunlun-penglai": "assets/images/paintings/01_luoshenfu_tu.jpg",
    "east-asian-woodblock-printing-encyclopedias": "assets/images/museum/yongle-dadian.jpg",
    "temple-of-heaven-tiantan-cosmology-3d": "assets/images/provinces/beijing-temple-of-heaven.jpg",
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
  for (i = 0; i < NEW_ARTICLES.length; i++) {
    if (!existingIds[NEW_ARTICLES[i].id]) {
      window.CCE_ARTICLES.push(NEW_ARTICLES[i]);
      existingIds[NEW_ARTICLES[i].id] = true;
    }
  }
})();
