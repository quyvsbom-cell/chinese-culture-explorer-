// ============================================================================
// BẢO TÀNG SỐ & KIỆT TÁC QUỐC HỌA – TỌA ĐỘ HOTSPOT & TƯ LIỆU HIỆN VẬT (TẬP 1)
// Defines shared window.CCE_APPLY_HOTSPOTS_AND_META and enriches:
//   - All 21 museum artifacts (window.CCE_MUSEUM.artifacts)
//   - Paintings #01–#27 (window.CCE_PAINTINGS.masterpieces)
// Zero lazy truncation. Standard Mandarin Pinyin + Han-Viet + Vietnamese.
// ============================================================================

(function () {
  "use strict";

  function applyCollectionUpgrade(list, map) {
    if (!Array.isArray(list) || !map || typeof map !== "object") return;
    list.forEach(function (item) {
      var patch = item && map[item.id];
      if (!patch) return;
      ["dimensions", "material", "collection", "museum", "attribution", "credit"].forEach(function (k) {
        if (patch[k] && (!item[k] || patch.forceMeta)) {
          item[k] = patch[k];
        }
      });
      if (Array.isArray(patch.hotspotAnnotations) && patch.hotspotAnnotations.length > 0) {
        item.hotspotAnnotations = patch.hotspotAnnotations;
      }
    });
  }

  window.CCE_APPLY_HOTSPOTS_AND_META = function (payload) {
    if (!payload || typeof payload !== "object") return;
    if (payload.artifactsMap && window.CCE_MUSEUM && Array.isArray(window.CCE_MUSEUM.artifacts)) {
      applyCollectionUpgrade(window.CCE_MUSEUM.artifacts, payload.artifactsMap);
    }
    if (payload.paintingsMap && window.CCE_PAINTINGS && Array.isArray(window.CCE_PAINTINGS.masterpieces)) {
      applyCollectionUpgrade(window.CCE_PAINTINGS.masterpieces, payload.paintingsMap);
    }
  };

  var ARTIFACTS_BATCH = {
    "jiangshan-ruci-duojiao": {
      attribution: "Đại lễ đường Nhân dân Bắc Kinh (1959) • Bút tích Phó Bão Thạch & Quan Sơn Nguyệt; Lạc khoản chữ Mao Trạch Đông",
      hotspotAnnotations: [
        { id: "jrd-1", x: 26, y: 22, titleVi: "Lạc khoản 'Giang sơn như thử đa kiều'", titleZh: "江山如此多娇题字", pinyin: "Jiāngshān rúcǐ duōjiāo", category: "Thư pháp & Lạc khoản", detail: "Năm đại tự phóng khoáng góc trên trái do Mao Trạch Đông đề bút tháng 9/1959 dựa trên ý từ bài từ 'Thấm Viên Xuân · Tuyết' (1936), gắn kết thi ca cách mạng với bố cục sơn thủy hoành tráng." },
        { id: "jrd-2", x: 74, y: 28, titleVi: "Vầng Thái Dương Đỏ & Tuyết Đỉnh Côn Lôn", titleZh: "红日东升雪山", pinyin: "Hóngrì dōngshēng", category: "Biểu tượng & Ánh sáng", detail: "Vầng mặt trời đỏ rực phía đông rọi sáng triền tuyết trắng vùng Bắc – Tây Tạng, tạo điểm nhấn sắc nóng áp đảo trên nền xanh lục lam và mặc thủy mặc truyền thống." },
        { id: "jrd-3", x: 52, y: 68, titleVi: "Tùng Thanh Phương Nam & Sông Trường Giang", titleZh: "青松巨川", pinyin: "Qīngsōng jùchuān", category: "Bút pháp Sơn thủy Hợp bích", detail: "Quan Sơn Nguyệt (Lĩnh Nam phái) đặc tả khóm tùng xanh và dải nước miền Nam ấm áp; Phó Bão Thạch phóng bút 'Bão Thạch thuẫn' (nét cọ xòe tán) cho thác nước và rặng núi Đông Bắc." }
      ]
    },
    "qianli-jiangshan": {
      attribution: "Bảo tàng Cố Cung Bắc Kinh (故宫博物院) • Kiệt tác Thanh lục Sơn thủy duy nhất còn lại của Vương Hy Mạnh (1113)",
      hotspotAnnotations: [
        { id: "qlj-1", x: 24, y: 42, titleVi: "Sắc khoáng Thạch thanh – Thạch lục 5 lớp", titleZh: "石青石绿重彩设色", pinyin: "Shíqīng shílǜ", category: "Kỹ thuật Màu khoáng", detail: "Nghiền từ đá lam (Azurite) và đá khổng tước (Malachite) trộn keo da thú, tô chồng nhiều lớp trên nền lụa lót màu đất son tạo độ rực sáng bền vững hơn 900 năm." },
        { id: "qlj-2", x: 56, y: 58, titleVi: "Cầu gỗ Thủy đình & Lưới Thôn Chài", titleZh: "虹桥水榭渔村", pinyin: "Hóngqiáo shuǐxiè", category: "Giới họa Tỉ mỉ", detail: "Giữa đại cảnh núi non dài gần 12 mét, hàng trăm thủy đình, cối xay nước và thuyền buồm nhỏ bằng hạt gạo được điểm xuyết tinh xảo để nối liền hai khối sơn mạch qua mặt hồ rộng." },
        { id: "qlj-3", x: 80, y: 24, titleVi: "Bài bạt Sái Kinh & Triện ấn Càn Long", titleZh: "蔡京题跋与鉴藏印", pinyin: "Cài Jīng tíbá", category: "Văn hiến & Ấn giám", detail: "Bài hậu bạt của Thái sư Sái Kinh viết năm Chính Hòa thứ ba (1113) xác nhận Vương Hy Mạnh vẽ xong cuộn tranh năm mới 18 tuổi dưới sự chỉ dạy trực tiếp của Tống Huy Tông." }
      ]
    },
    "qingming-scroll": {
      attribution: "Bảo tàng Cố Cung Bắc Kinh (故宫博物院) • Quốc bảo Thanh minh Thượng Hà Đồ bản gốc Bắc Tống (Trương Trạch Đoan)",
      hotspotAnnotations: [
        { id: "qms-1", x: 20, y: 62, titleVi: "Đoàn Lạc đà Ngoại ô Biện Kinh", titleZh: "郊外驮队", pinyin: "Jiāowài tuóduì", category: "Nhân văn & Giao thương", detail: "Đoạn mở đầu bên phải diễn tả cảnh tĩnh mịch sương sớm ngoại thành với đoàn lạc đà và lừa thồ than củi tiến về thành Đông Kinh (Khai Phong), chuẩn bị nhịp chuyển sang đô thị sầm uất." },
        { id: "qms-2", x: 54, y: 48, titleVi: "Cầu Vồng (Hồng Kiều) Vượt Sông Biện", titleZh: "汴河虹桥船阵", pinyin: "Biànhé Hóngqiáo", category: "Kiến trúc Cầu vòm Gỗ", detail: "Tâm điểm kịch tính nhất của toàn cuộn: cây cầu vòm gỗ không trụ giữa dòng đang chứng kiến chiếc thuyền chở lương thực hạ cột buồm gấp rút để tránh đâm vào gầm cầu giữa tiếng hô hoán của hơn trăm thị dân." },
        { id: "qms-3", x: 78, y: 50, titleVi: "Thành lâu & Tửu lâu Tôn Dương Chính Điếm", titleZh: "城楼正店市井", pinyin: "Chénglóu zhèngdiàn", category: "Đô thị học Bắc Tống", detail: "Phố thị nội đô dày đặc bảng hiệu hiệu thuốc 'Triệu Thái Thừa Gia', quán trà, lò bánh và hàng trăm nhân vật đại diện cho đủ mọi tầng lớp tăng lữ, thương nhân và nha dịch." }
      ]
    },
    "great-wall-scroll": {
      attribution: "Kho Lưu trữ Trực quan CCE • Tổng hợp khảo cổ phòng tuyến Minh Trường Thành (Sơn Hải Quan – Bát Đạt Lĩnh – Gia Dục Quan)",
      hotspotAnnotations: [
        { id: "gws-1", x: 24, y: 38, titleVi: "Địch lâu & Phong hỏa đài Truyền tin", titleZh: "敌楼烽燧体系", pinyin: "Dílóu fēngsuì", category: "Kiến trúc Quân phòng", detail: "Hệ thống tháp canh hai tầng kết hợp tháp đốt khói ban ngày – đốt lửa ban đêm theo quy ước số phát pháo truyền tin cảnh giới từ biên ải về kinh sư chỉ trong vài giờ." },
        { id: "gws-2", x: 52, y: 46, titleVi: "Tường Thành Sống Núi Yên Sơn & Bút pháp Phi bạch", titleZh: "山脊龙脉墨线", pinyin: "Shānjǐ lóngmài", category: "Thẩm mỹ Sơn thủy", detail: "Đường gờ tường thành ôm sát sống núi hiểm trở ('Nhân sơn vi thành' – mượn thế núi làm thành), xử lý bằng nét mực khô tước trên nền sương mù lưu bạch." },
        { id: "gws-3", x: 78, y: 60, titleVi: "Cửa ải Chiến lược Kiểm soát Mậu dịch Trà–Mã", titleZh: "关隘互市通道", pinyin: "Guān'ài hùshì", category: "Lịch sử Giao thương", detail: "Trường Thành vừa là tuyến phòng thủ kỵ binh phương Bắc vừa là hành lang kiểm soát hải quan thu thuế hàng hóa 'Trà dịch Mã' giữa nông nghiệp Trung Nguyên và thảo nguyên." }
      ]
    },
    "lantingji-xu": {
      attribution: "Bảo tàng Cố Cung Bắc Kinh (故宫博物院) • Bản mô Thần Long của Phùng Thừa Tố (đời Đường) theo nguyên tác Vương Hy Chi (353)",
      hotspotAnnotations: [
        { id: "ltj-1", x: 28, y: 36, titleVi: "20 Chữ 'Chi' (之) Biến Hóa Không Trùng Lặp", titleZh: "二十‘之’字各具形态", pinyin: "Èrshí zhī zì", category: "Thư pháp Hành thư", detail: "Đỉnh cao nghệ thuật hành thư của 'Thư thánh' Vương Hy Chi: hơn hai mươi lần xuất hiện chữ '之' trong cùng một bài tựa nhưng nét phết, chấm, uốn lượn không một chữ nào giống chữ nào." },
        { id: "ltj-2", x: 58, y: 48, titleVi: "Vết Sửa Nét Tự Nhiên Trong Cơn Ngà Ngà Say", titleZh: "涂改率真天成", pinyin: "Túgǎi lǜzhēn", category: "Bút tích & Tâm cảnh", detail: "Vài chỗ bôi xóa gạch sửa (như chữ 夫, 斯) chứng minh tinh thần xuất thần tức hứng tại buổi tụ hội Khúc Thủy Lưu Thương năm Quý Sửu (353) mà chính Vương Hy Chi về sau viết lại cũng không đạt nổi." },
        { id: "ltj-3", x: 82, y: 30, titleVi: "Bán ấn 'Thần Long' & Dấu Đóng Đường – Tống", titleZh: "神龙半印鉴藏", pinyin: "Shénlóng bànyìn", category: "Ấn tín Đế vương", detail: "Nửa dấu triện 'Thần Long' của Đường Trung Tông cùng bài đề bạt của Chu Văn Công, Triệu Mạnh Phủ xác chứng đây là bản mô Song câu khoách điền trung thực nhất trong 'Thiên hạ Đệ nhất Hành thư'." }
      ]
    },
    "hanshi-tie": {
      attribution: "Bảo tàng Cố Cung Đài Bắc (国立故宫博物院) • Thủ bản Hành thư kiệt xuất của Tô Thức (Hoàng Châu, 1082)",
      hotspotAnnotations: [
        { id: "hst-1", x: 25, y: 40, titleVi: "Cấu trúc 'Thạch áp Cáp mô' Càng Viết Càng Lớn", titleZh: "笔势随情跌宕放大", pinyin: "Bǐshì suí qíng fàngdà", category: "Nhịp điệu Bố cục", detail: "Từ hai chữ mở đầu nhỏ dè dặt, càng về cuối hai bài thơ bi phẫn vì bị đày ở Hoàng Châu nét chữ của Tô Đông Pha càng lớn dần, nghiêng trái mãnh liệt rồi vọt lên như sóng gió gào thét." },
        { id: "hst-2", x: 56, y: 55, titleVi: "Nét Phẩy Dài 'Sương Đao' Chữ Niên – Nhật", titleZh: "长撇纵横凌厉", pinyin: "Chángpiě zònghéng", category: "Kỹ pháp Dùng Bút", detail: "Những nét mác, nét sổ kéo dài đột ngột xuyên tầng giấy giữa cảnh mưa dầm tiết Hàn Thực (không lửa, không cơm nóng), chuyển hóa trực tiếp nỗi cô độc chính trị thành hình khối thư pháp." },
        { id: "hst-3", x: 82, y: 44, titleVi: "Bài Bạt Hoàng Đình Kiên Đứng Ngang Hàng", titleZh: "黄庭坚跋语并壁", pinyin: "Huáng Tíngjiān báyǔ", category: "Tống Tứ Gia Đối thoại", detail: "Đoạn đề bạt của học trò tri kỷ Hoàng Đình Kiên bên trái với lối chữ Trắc phong khẳng khái ngợi ca tác phẩm như 'Nhan Lỗ Công tái thế', đưa cuộn giấy thành 'Thiên hạ Đệ tam Hành thư'." }
      ]
    },
    "david-vases": {
      attribution: "British Museum (PDF B613 & B614, Percival David Collection) • Cặp bình gốm Hoa lam Cảnh Đức Trấn có minh văn niên đại 1351",
      hotspotAnnotations: [
        { id: "dvv-1", x: 48, y: 20, titleVi: "Minh văn Khắc Niên đại Năm Chí Chính Thứ 11 (1351)", titleZh: "至正十一年铭文", pinyin: "Zhìzhèng shíyī nián", category: "Văn khắc Chuẩn Niên đại", detail: "Dòng 62 chữ Hán vẽ lam dưới men trên cổ bình ghi rõ Trương Văn Tiến ở phủ Tín Châu dâng cặp bình lên điện Tinh Sơn ngày lành tháng 4 năm Chí Chính 11 (1351), trở thành mốc 'Rosetta Stone' định niên sứ hoa lam Nguyên triều." },
        { id: "dvv-2", x: 48, y: 52, titleVi: "Sắc Coban Nhập Khẩu Ba Tư 'Tô Ma Ly Thanh'", titleZh: "苏麻离青钴料云龙", pinyin: "Sūmálíqīng yúnlóng", category: "Hóa học Men Sứ", detail: "Men lam 'Smalts' nhập từ vùng Kashan (Iran) qua Con đường Tơ lụa giàu hàm lượng sắt, khi nung ở 1.300°C tạo sắc xanh thẫm sẫm màu kèm các đốm gỉ sắt đen ánh kim tự nhiên ở thân rồng bốn móng uốn lượn." },
        { id: "dvv-3", x: 26, y: 32, titleVi: "Đôi Tai Voi (Tượng Nhĩ) Đắp Nổi Khối", titleZh: "双象耳塑形", pinyin: "Shuāng xiàng'ěr", category: "Tạo hình Đạo–Phật", detail: "Cấu trúc cổ loa loe, vai phình gắn đôi tai voi cuộn tròn — mô-típ phổ biến trên đồ thờ tam sự cúng miếu Đạo giáo – Phật giáo vùng Giang Tây giữa thế kỷ XIV." }
      ]
    },
    "chenghua-cup": {
      attribution: "Bảo tàng Cố Cung Bắc Kinh & The Met • Sứ ngự dụng Đấu thái Thành Hóa (1465–1487) đỉnh cao mỹ thuật Minh triều",
      hotspotAnnotations: [
        { id: "chc-1", x: 38, y: 52, titleVi: "Đồ án 'Tử mẫu kê' (Gà Trống, Gà Mái & Gà Con)", titleZh: "子母鸡图", pinyin: "Zǐmǔjī tú", category: "Iconography Gia đình", detail: "Khác với đồ long phượng uy quyền, hình tượng gia đình gà mổ côn trùng giữa khóm mẫu đơn và hoa lan tượng trưng cho tình cảm hiếu hòa gia đình và điển tích 'Tống tử' nhân hậu." },
        { id: "chc-2", x: 56, y: 45, titleVi: "Kỹ thuật 'Đấu thái' Hai Lần Nung Chồng Lớp", titleZh: "斗彩两次入窑", pinyin: "Dòucǎi liǎngcì", category: "Công nghệ Lò Ngự", detail: "Vẽ nét viền lam coban trước rồi phủ men trong nung lần 1 (~1.300°C), sau đó mới tô men vàng – đỏ – lục lên trên và nung thấp lửa lần 2 (~800°C) tạo chất men ngọc trơn như mỡ dê." },
        { id: "chc-3", x: 52, y: 80, titleVi: "Đế Tròn & Lạc khoản 'Đại Minh Thành Hóa Niên Chế'", titleZh: "大明成化年制款", pinyin: "Dà Míng Chénghuà", category: "Hiệu đề Lò Quan", detail: "Độ mỏng thành chén chỉ vài milimet cho phép ánh sáng xuyên nhẹ; đáy chén đóng khung vuông kép 6 chữ Khải thư ngay ngắn, là nguyên mẫu cho vô số bản phỏng chế đời Khang Hy – Càn Long." }
      ]
    },
    "yongle-dadian": {
      attribution: "Thư viện Quốc gia Trung Quốc (北京国家图书馆) • Bộ đại bách khoa thư viết tay lớn nhất lịch sử trước thế kỷ XVIII (1408)",
      hotspotAnnotations: [
        { id: "yld-1", x: 50, y: 48, titleVi: "Chữ Khải Thư Kẻ Khung Chu Sa Đều Tăm Tắp", titleZh: "朱丝栏工整楷书", pinyin: "Zhūsīlán kǎishū", category: "Văn bản & Ấn loát", detail: "Hơn 2.000 học giả biên soạn 22.937 quyển đều dùng khung kẻ chỉ son 'Chu ti lan' 8 cột x 28 chữ, viết tay hoàn toàn bằng mực tùng yên đậm sắc nét." },
        { id: "yld-2", x: 25, y: 50, titleVi: "Đóng gáy Bao Bối Trang (Bọc Lụa Vàng Hoàng gia)", titleZh: "包背装黄绫封面", pinyin: "Bāobèizhuāng", category: "Kỹ thuật Đóng sách", detail: "Các tờ giấy Tuyên gấp đôi hướng nếp gấp ra ngoài gáy sách, bọc bìa vải lụa vàng khổ đại 50×30 cm bảo vệ khỏi mối mọt suốt nhiều thế kỷ." },
        { id: "yld-3", x: 75, y: 60, titleVi: "Trích dẫn Bảo tồn Nguyên văn Cổ tịch Thất truyền", titleZh: "辑佚保存先秦宋元古籍", pinyin: "Jíyì gǔjí", category: "Giá trị Sử liệu", detail: "Theo tôn chỉ 'nguyên văn bất dịch', Vĩnh Lạc Đại Điển chép nguyên xi toàn bộ sách vở Tống–Nguyên (gồm cả nhiều phần *Cựu Ngũ Đại Sử* và y thư cổ đã thất truyền sau hỏa hoạn triều Minh–Thanh)." }
      ]
    },
    "daming-hunyitu": {
      attribution: "Trung tâm Lưu trữ Lịch sử Số 1 Trung Quốc (中国第一历史档案馆, Bắc Kinh) • Bản đồ Thế giới Đại Minh (c. 1389)",
      hotspotAnnotations: [
        { id: "dmh-1", x: 52, y: 45, titleVi: "Trung Tâm Bản đồ Khổng Lồ Từ Triều Tiên Đến Giao Chỉ", titleZh: "东亚疆域与交趾标注", pinyin: "Dōngyà jiāngyù", category: "Địa lý Lịch sử", detail: "Trên tấm lụa rộng gần 18 m², phần Trung Nguyên, Trường Giang, Hoàng Hà, Cao Ly và Đại Việt được vẽ phóng đại gấp nhiều lần so với tỷ lệ địa cầu nhằm thể hiện trọng tâm thiên hạ quan thời Minh sơ." },
        { id: "dmh-2", x: 22, y: 60, titleVi: "Lục địa Châu Phi (Mũi Hảo Vọng) Sớm Hơn Vasco da Gama", titleZh: "早期非洲南端轮廓", pinyin: "Fēizhōu nánduān", category: "Hàng hải Thế giới", detail: "Đáng kinh ngạc nhất trong lịch sử bản đồ học: mũi cực nam châu Phi cong đúng hướng cùng dãy núi Nội địa được vẽ chính xác hơn 90 năm trước khi đoàn tàu Bồ Đào Nha vòng qua mũi Hảo Vọng." },
        { id: "dmh-3", x: 74, y: 34, titleVi: "Nhãn Chữ Mãn Dán Đè Thời Thanh Thế kỷ XVII", titleZh: "清代满文贴签重标", pinyin: "Mǎnwén tiēqiān", category: "Chứng tích Lưu trữ", detail: "Khi triều Thanh tiếp quản nội khố Tử Cấm Thành, các quan sử quán dán các mảnh giấy chữ Mãn chồng lên danh xưng địa danh chữ Hán nguyên thủy thời Hồng Vũ — chi tiết xác chứng xuất xứ độc bản." }
      ]
    },
    "taihe-dian": {
      attribution: "Bảo tàng Cố Cung Bắc Kinh (故宫博物院) • Trục kiến trúc quyền lực trung tâm Tử Cấm Thành (UNESCO 1987)",
      hotspotAnnotations: [
        { id: "thd-1", x: 50, y: 24, titleVi: "Mái Trùng Diêm Vũ Điện & 10 Linh thú Đường Bờ Mái", titleZh: "重檐庑殿顶十脊兽", pinyin: "Chóngyán wǔdiàndǐng", category: "Cấp bậc Kiến trúc", detail: "Kiểu mái hai tầng 'Trùng diêm Vũ điện' cao quý nhất thiên hạ; đặc biệt góc bờ mái có đủ 10 linh thú sành lưu ly theo sau Tiên nhân cưỡi phượng — quy cách độc nhất vô nhị toàn Trung Quốc." },
        { id: "thd-2", x: 50, y: 52, titleVi: "Cụm Mộng Đấu Củng Chống Động Đất Không Đinh Sắt", titleZh: "楠木斗拱抗震结构", pinyin: "Dǒugǒng kàngzhèn", category: "Kỹ thuật Mộc", detail: "Hệ thống khớp nối gỗ Nam Mộc nhiều tầng (đấu và củng) giải tỏa tải trọng mái ngói hàng nghìn tấn và đàn hồi hấp thụ xung chấn động đất suốt 600 năm mà không dùng đinh thép." },
        { id: "thd-3", x: 50, y: 78, titleVi: "Bệ Đá Hán Bạch Ngọc 3 Tầng Hình Chữ 'Thổ'", titleZh: "三层须弥座云龙陛", pinyin: "Sāncéng xūmízuò", category: "Tượng trưng Thiên–Địa–Nhân", detail: "Nền đá trắng cẩm thạch ba tầng đục rãnh thoát nước qua 1.142 đầu rồng ('Thiên long thổ thủy'), tái hiện hình ảnh đế vương ngồi giữa trục Trung Tâm vũ trụ trên khối Tu Di sơn." }
      ]
    },
    "houmuwu-ding": {
      attribution: "Bảo tàng Quốc gia Trung Quốc (中国国家博物馆, Bắc Kinh) • Chiếc đỉnh đồng thanh nặng nhất thế giới còn nguyên vẹn (832,84 kg)",
      hotspotAnnotations: [
        { id: "hmw-1", x: 50, y: 34, titleVi: "Minh văn Kim văn 'Hậu Mẫu Mậu' Lòng Vách Đỉnh", titleZh: "“后母戊”青铜铭文", pinyin: "Hòumǔwù míngwén", category: "Cổ văn tự Học", detail: "Ba chữ Kim văn cổ đúc chìm bên vách trong ghi tên thụy vị Vương hậu phụ Mẫu Mậu của Thương vương Vũ Đinh (~1200 TCN), khẳng định vai trò tế tự tối cao của hoàng thất nhà Thương." },
        { id: "hmw-2", x: 22, y: 42, titleVi: "Hoa văn Thú diện Thao Thiết & Mây Lôi (Thao thiết văn)", titleZh: "饕餮纹与夔龙边饰", pinyin: "Tāotièwén", category: "Mỹ thuật Đồng thanh", detail: "Xung quanh tai và thân đỉnh chạm nổi họa tiết mặt quái vật Thao Thiết trừng mắt giữa đường vân lôi văn chìm, biểu trưng cho uy lực thông thiên của vương quyền tế thần." },
        { id: "hmw-3", x: 76, y: 66, titleVi: "Kỹ thuật Đúc Khuôn Ghép Phân Khối (Khoáng Đúc Pháp)", titleZh: "分范合铸冶金术", category: "Luyện kim Thương triều", detail: "Phải huy động hàng trăm thợ hợp sức rót đồng nóng chảy từ hơn 20 nồi nấu song song vào hệ khuôn đất nung đa mảnh — minh chứng tổ chức công xưởng vương triều Ân Khư." }
      ]
    },
    "liangzhu-yucong": {
      attribution: "Bảo tàng Tỉnh Chiết Giang (浙江省博物馆, Hàng Châu) • 'Ngọc Tông Vương' thời Lương Chử (~3300–2300 TCN)",
      hotspotAnnotations: [
        { id: "lzy-1", x: 50, y: 46, titleVi: "Phù hiệu Thần Nhân Thú Diện Vi Khắc 5 Đường/1mm", titleZh: "神人兽面微雕神徽", pinyin: "Shénrén shòumiàn", category: "Công nghệ Đá Thời Tiền sử", detail: "Trên một diện tích chỉ vài centimet vuông của đá ngọc Nephrite độ cứng 6–6,5 Mohs, người Lương Chử thời Đồ đá mới đã dùng dây cọ cát thạch anh khắc các đường vân song song mịn tới 0,2 mm không chạm nhau." },
        { id: "lzy-2", x: 22, y: 50, titleVi: "Hình khối 'Ngoài Vuông Trong Tròn' (Thiên Viên Địa Phương)", titleZh: "外方内圆天地观", pinyin: "Wàifāng nèiyuán", category: "Vũ trụ Quan Sơ khai", detail: "Lỗ trụ tròn xuyên suốt tượng trưng trục thông lên Trời (Thiên), bốn góc vuông chia cạnh tượng trưng Đất (Địa) — hình mẫu sơ khai nhất của vũ trụ quan Đông Á trước cả văn tự Giáp cốt hơn 1.000 năm." },
        { id: "lzy-3", x: 76, y: 28, titleVi: "Chất liệu Ngọc Thiểm thạch & Đầm lầy Phản Sơn", titleZh: "反山大墓透闪石玉", pinyin: "Fǎnshān yùqì", category: "Khảo cổ học Lương Chử", detail: "Khai quật từ Mộ M12 gò Phản Sơn (Di chỉ Thành cổ Lương Chử UNESCO), nặng kỷ lục 6,5 kg, khẳng định tầng lớp thần quyền–vương quyền sơ khai ở hạ lưu Trường Giang." }
      ]
    },
    "zheng-he-navigation-chart": {
      attribution: "Thư viện Quốc hội Hoa Kỳ & Thư viện Quốc gia Trung Quốc • Trường quyển Hàng hải Mao Khôn Đồ (Tống – Minh thế kỷ XV–XVII)",
      hotspotAnnotations: [
        { id: "zhn-1", x: 24, y: 46, titleVi: "Lộ trình Dọc Bờ Biển Chiêm Thành – Cù Lao Chàm – Malacca", titleZh: "占城顺海航道标注", pinyin: "Zhànchéng hángdào", category: "Sử liệu Biển Đông", detail: "Ghi chép chính xác tuyến hạ Tây Dương từ Cửa sông Dương Tử đi qua Ngoại La Sơn (Cù Lao Ré), Tân Châu Cảng (Quy Nhơn) tới eo Malacca cùng chỉ dẫn độ sâu mực nước." },
        { id: "zhn-2", x: 52, y: 42, titleVi: "Chỉ số La bàn Kim Chỉ Nam 24 Phương vị (Châm Lộ)", titleZh: "二十四方位针路图", pinyin: "Zhēnlù dǎoháng", category: "Khoa học Hàng hải", detail: "Mỗi cung biển ghi rõ số Canh (đơn vị thời gian đi biển ~2,4 giờ) và góc hướng la bàn từ tính (ví dụ 'Đơn Quý sửu châm'), là hệ thống định vị hàng hải tiến tiến nhất thế kỷ XV." },
        { id: "zhn-3", x: 78, y: 56, titleVi: "Kỹ thuật 'Quá Dương Khiên Tinh Thuật' Ở Ấn Độ Dương", titleZh: "过洋牵星板定位", pinyin: "Qiānxīngshù", category: "Thiên văn Hàng hải", detail: "4 bản đồ cuối quyển dùng 12 tấm gỗ vuông khắc độ đo chiều cao sao Bắc Đẩu và sao Nam Thập Tự ('chỉ tay ngang') để tính vĩ độ khi vượt biển Ấn Độ Dương tới Đông Phi." }
      ]
    },
    "acupuncture-bronze-figure": {
      attribution: "Bảo tàng Quốc gia Trung Quốc • Đồng nhân Châm cứu Bắc Tống (Vương Duy Nhất thiết kế 1026; Phục chế đời Minh Chính Thống 1443)",
      hotspotAnnotations: [
        { id: "abf-1", x: 50, y: 26, titleVi: "Cơ chế Đổ Nước Sáp Ong Thi Tuyển Thái Y Viện", titleZh: "涂蜡注水考医制", pinyin: "Túlà zhùshuǐ kǎoyī", category: "Giáo dục Y khoa", detail: "Giám khảo phủ sáp ong lên toàn thân tượng đồng rỗng rồi đổ đầy nước bên trong: thí sinh châm đúng huyệt vị thì nước vọt ra ngoài, châm sai mũi kim gãy chạm vào đồng nguyên khối." },
        { id: "abf-2", x: 50, y: 52, titleVi: "354 Huyệt Vị & 12 Kinh Lạc Khắc Chìm Chuẩn Mực", titleZh: "十二正经三百五十四穴", pinyin: "Shí'èr jīngluò", category: "Giải phẫu Đông y", detail: "Lần đầu tiên chuẩn hóa vị trí kinh lạc và huyệt đạo trên mô hình giải phẫu tỷ lệ người thật 1:1 kèm bộ sách khắc đá *Đồng Nhân Du Huyệt Châm Cứu Đồ Kinh*." },
        { id: "abf-3", x: 50, y: 76, titleVi: "Ảnh hưởng Trực tiếp Tới Châm cứu Học Đại Việt", titleZh: "越南中医针灸传承", pinyin: "Zhēnjiǔ chuánchéng", category: "Giao lưu Y học Việt–Trung", detail: "Hệ thống kinh mạch và nguyên tắc chuẩn hóa huyệt trên tượng đồng Tống–Minh là nền tảng lý luận được Tuệ Tĩnh và Hải Thượng Lãn Ông tiếp biến vào Y học cổ truyền Việt Nam." }
      ]
    },
    "han-shipan-astrolabe": {
      attribution: "Bảo tàng Tỉnh An Huy & British Museum • Thức bàn Lục Nhâm – Thái Ất thời Tây Hán (Mộ Hán Nhữ Âm Hầu Hạ Hầu Táo, 165 TCN)",
      hotspotAnnotations: [
        { id: "hsa-1", x: 50, y: 48, titleVi: "Thiên Bàn Tròn Xoay Bắc Đẩu Thất Tinh Ở Tâm", titleZh: "圆天盘北斗七星", pinyin: "Běidǒu qīxīng", category: "Thiên văn Cổ đại", detail: "Đĩa tròn xoay ở giữa khắc hình chòm sao Bắc Đẩu làm kim chỉ hướng thời gian theo bốn mùa và 12 Nguyệt tướng (Nguyệt kiến xoay theo tháng)." },
        { id: "hsa-2", x: 24, y: 26, titleVi: "Địa Bàn Vuông 10 Thiên Can – 12 Địa Chi & Bát Quái", titleZh: "方地盘干支八卦", pinyin: "Gānzhī Bāguà", category: "Triết học Thuật số", detail: "Tầng đế vuông bất động khắc tầng tầng lớp lớp Thiên Can, Địa Chi, 28 Tú và Bát Quái (hay Tứ Duy), là nguyên mẫu cơ học hóa vũ trụ quan 'Thiên động Địa tĩnh'." },
        { id: "hsa-3", x: 76, y: 72, titleVi: "Tiền Thân Trực Tiếp Của La Kinh Phong Thủy & Kỳ Môn", titleZh: "罗盘式盘演化史", pinyin: "Luópán yǎnhuà", category: "Lịch sử Khoa học", detail: "Khi gắn thêm thìa nam châm thiên nhiên (Tư Nam) vào tâm đĩa thức bàn thời Hán, tổ tiên trực tiếp của chiếc La kinh Phong thủy và hệ thống lịch pháp Can Chi ra đời." }
      ]
    },
    "chu-dau-blue-white-ceramic": {
      attribution: "Bảo tàng Lịch sử Quốc gia Việt Nam & Bảo tàng Topkapi (Istanbul) • Minh chứng Hồn gốm Việt trên Con đường Gốm sứ Biển Đông (TK XV)",
      hotspotAnnotations: [
        { id: "cdb-1", x: 50, y: 36, titleVi: "Nét Bút Hoa Lam Phóng Khoáng & Niên Minh Bùi Thị Hý", titleZh: "裴氏戏铭文与青花纹", pinyin: "Búi Shì Xì", category: "Khảo cổ Gốm Việt", detail: "Bình hoa lam Chu Đậu cao 54 cm lưu giữ tại Cung điện Topkapi mang dòng chữ Hán 'Thái Hòa bát niên Nam Sách châu tượng nhân Bùi Thị Hý bút' (1450) — báu vật xác nhận đỉnh cao gốm xuất khẩu Đại Việt." },
        { id: "cdb-2", x: 50, y: 60, titleVi: "Men Tro Trấu Ngà Ấm & Coban Họa Tiết Hoa Cúc Đại Việt", titleZh: "谷壳灰釉菊纹", pinyin: "Gǔkéhuī yòu", category: "Công nghệ Độc bản Việt Nam", detail: "Khác với men trắng sứ xanh lạnh Cảnh Đức Trấn, gốm Chu Đậu Hải Dương dùng men tro trấu ngả ngà ấm, cốt mỏng nhẹ và họa tiết sen–cúc–chim bói cá mang đậm mỹ cảm đồng bằng sông Hồng." },
        { id: "cdb-3", x: 76, y: 50, titleVi: "Con tàu Đắm Cù Lao Chàm & Giao Thương Minh Cấm Hải", titleZh: "占婆海沉船贸易", pinyin: "Hǎishàng táocízhīlù", category: "Kinh tế Hàng hải TK XV", detail: "Trong thời kỳ Minh Tuyên Đức – Chính Thống thực thi lệnh 'Hải cấm', gốm hoa lam Chu Đậu của Đại Việt đã chiếm lĩnh thị trường Hồi giáo từ Đông Nam Á tới Thổ Nhĩ Kỳ và Ai Cập." }
      ]
    },
    "sanxingdui-bronze-mask": {
      attribution: "Bảo tàng Tam Tinh Đôi (三星堆博物馆, Tứ Xuyên) • Mặt nạ Đồng thanh Thần Quyền Cổ Thục (~1200–1050 TCN)",
      hotspotAnnotations: [
        { id: "sxd-1", x: 35, y: 42, titleVi: "Đôi Đồng Tử Mắt Lồi Dài 16 cm (Thần Tàm Tùng)", titleZh: "纵目柱状巨眼", pinyin: "Zòngmù jùyǎn", category: "Thần thoại & Khảo cổ", detail: "Hình tượng mắt hình trụ nhô vọt ra 16 cm khớp kỳ lạ với ghi chép trong *Hoa Dương Quốc Chí* về Thục vương Tàm Tùng thời thượng cổ có 'đôi mắt dọc'." },
        { id: "sxd-2", x: 16, y: 40, titleVi: "Đôi Tai Quạt Lớn & Ngạch Lỗ Trán Lắp Quỳ Long", titleZh: "阔耳额冠方孔", pinyin: "Kuò'ěr guānkǒng", category: "Biểu tượng Quyền năng", detail: "Hai tai xòe rộng lắng nghe âm thanh bốn phương kết hợp hốc vuông giữa trán từng gắn cột ngọc Quỳ Long, tượng trưng vị thần môi giới giữa đất Thục và cõi thần linh." },
        { id: "sxd-3", x: 75, y: 60, titleVi: "Nền Văn minh Đồng thau Độc lập Ngoài Trung Nguyên", titleZh: "古蜀多元一体实证", pinyin: "Gǔ Shǔ wénmíng", category: "Chứng cứ Khảo cổ Đa nguyên", detail: "Hợp kim đồng – chì – thiếc đặc biệt ở Hố Tế Tự số 2 lật đổ giả thuyết 'Trung Quốc chỉ có một cái nôi Hoàng Hà', khẳng định cấu trúc 'Đa nguyên nhất thể' với đồng bằng Thành Đô là một trung tâm độc lập." }
      ]
    },
    "zeng-hou-yi-bianzhong": {
      attribution: "Bảo tàng Tỉnh Hồ Bắc (湖北省博物馆, Vũ Hán) • Bộ Biên chung 65 quả chuông Chiến Quốc c. 433 TCN",
      hotspotAnnotations: [
        { id: "zhy-1", x: 48, y: 38, titleVi: "Kỳ Tích Âm học 'Nhất Chung Song Âm' (2 Âm trên 1 Chuông)", titleZh: "一钟双音声学结构", pinyin: "Yī zhōng shuāng yīn", category: "Vật lý Âm thanh", detail: "Nhờ thiết diện hình quả hạnh nhân ('hợp ngõa hình'), gõ chính giữa chuông phát âm Chính cổ (sui) và gõ lệch góc bên cạnh phát âm Trắc cổ (gu) cách đúng quãng ba trưởng hoặc thứ không lẫn âm." },
        { id: "zhy-2", x: 72, y: 55, titleVi: "2.800 Chữ Khắc Lý thuyết Nhạc lý 12 Luật Lữ Đầy Đủ", titleZh: "两千八百字乐律铭文", pinyin: "Yuèlǜ míngwén", category: "Âm nhạc Sử học", detail: "Thân chuông dát vàng khảm hơn 2.800 chữ Chu triện đối chiếu hệ thống thang âm các nước Tằng – Sở – Tấn – Tề, cho phép biểu diễn trọn vẹn thang 7 nốt hiện đại và chuyển 12 cung điệu." },
        { id: "zhy-3", x: 25, y: 68, titleVi: "Cột Trụ Đồng Võ Sĩ Đội Giá & Giao thoa Nghệ thuật Sở", titleZh: "青铜武士托架", pinyin: "Wǔshì tuōjià", category: "Điêu khắc Chiến Quốc", detail: "Giá gỗ sơn mài dài 7,48 m nâng đỡ 2,5 tấn chuông đồng thông qua 6 pho tượng võ sĩ mặc chiến bào đứng vững chãi — biểu trưng cho lễ nhạc trị quốc 'Chung minh đỉnh thực'." }
      ]
    },
    "tiangong-kaiwu-woodblock": {
      attribution: "Thư viện Quốc gia Trung Quốc & BnF (Paris) • Bách khoa Toàn thư Kỹ thuật Học Thời Minh (Tống Ứng Tinh, 1637)",
      hotspotAnnotations: [
        { id: "tgk-1", x: 50, y: 40, titleVi: "123 Tranh Khắc Gỗ Mô tả Thực nghiệm Công nghệ", titleZh: "一百二十三幅精密工艺插图", pinyin: "Gōngyì chātú", category: "Lịch sử Kỹ thuật", detail: "Khác hẳn kinh sách Nho gia chỉ trọng từ chương, *Thiên Công Khai Vật* vẽ chi tiết cơ cấu máy dệt lụa hoa văn Hoa lâu cơ, máy quạt thổi lò luyện sắt và giàn khoan giếng muối sâu nghìn thước Tứ Xuyên." },
        { id: "tgk-2", x: 24, y: 55, titleVi: "Chương 'Ngũ Kim' – Định lượng Luyện Hợp kim Kẽm & Đồng", titleZh: "五金冶炼定量法", pinyin: "Wǔjīn yěliàn", category: "Khoa học Vật liệu", detail: "Ghi chép quy trình chưng cất kẽm kim loại tinh khiết (Oản kẽm) và pha đồng thau sớm hơn phương Tây hơn 100 năm, được Joseph Needham đánh giá là đỉnh cao kỹ thuật học tiền công nghiệp." },
        { id: "tgk-3", x: 76, y: 52, titleVi: "Tư tưởng Khai thác Tự nhiên Hài hòa 'Thiên Công – Nhân Xảo'", titleZh: "天工开物哲学观", pinyin: "Tiāngōng kāiwù", category: "Triết học Công nghệ", detail: "Tên sách hàm ý con người dùng trí tuệ mở ra vật phẩm từ công lực tạo hóa của tự nhiên, phản ánh tinh thần thực học trọng dân sinh cuối thời Minh." }
      ]
    },
    "jinshi-doctoral-stele": {
      attribution: "Văn Miếu – Quốc Tử Giám Hà Nội & Quốc Tử Giám Bắc Kinh • Hệ thống Bia Tiến sĩ Di sản Ký ức Thế giới UNESCO",
      hotspotAnnotations: [
        { id: "jds-1", x: 50, y: 24, titleVi: "Trán Bia Lưỡng Long Triều Nhật & Phượng Vũ Khí Tượng", titleZh: "二龙戏珠碑额篆文", pinyin: "Èrlóng xìzhū", category: "Điêu khắc Hoa văn", detail: "Phần trán bia chạm nổi rồng mây hoặc mặt trời tỏa sáng biểu trưng lý tưởng 'Ngô đạo chi hưng', tạo sự khác biệt tinh tế giữa phong cách rồng 5 móng Bắc Kinh và rồng uốn lượn mềm mại thời Lê–Mạc–Lê Trung Hưng Hà Nội." },
        { id: "jds-2", x: 50, y: 52, titleVi: "Bài Ký Thân Nhân Trung 1484: 'Hiền Tài Là Nguyên Khí Quốc Gia'", titleZh: "贤才乃国家之元气", pinyin: "Xiáncái guójiā yuánqì", category: "Tư tưởng Giáo dục Việt–Trung", detail: "Trong 82 bia Văn Miếu Hà Nội (ghi danh từ khoa 1442 tới 1779), bài văn bia năm 1484 của Thân Nhân Trung khẳng định triết lý kén chọn hiền tài sâu sắc không kém bất kỳ bài ký nào trên 198 bia Quốc Tử Giám Bắc Kinh." },
        { id: "jds-3", x: 50, y: 78, titleVi: "Rùa Đá Bị Hý (Quy Phu) Đội Bia Trường Tồn", titleZh: "石龟负碑千秋不朽", pinyin: "Shíguī fùbēi", category: "Biểu tượng Linh thú", detail: "Con rùa thần (tương truyền Bị Hý trong Long sinh cửu tử thích gánh vật nặng) nâng tấm bia nặng hàng tấn, biểu thị khát vọng 'lưu danh thanh sử' trường tồn cùng trời đất." }
      ]
    }
  };

  var PAINTINGS_BATCH1 = {
    "luoshenfu-tu": {
      material: "Màu khoáng chất nhẹ và mực thủy mặc vẽ trên lụa (Thiết sắc quyển trục)",
      attribution: "Cố Khải Chi (truyền bản mô đời Tống) • Bảo tàng Cố Cung Bắc Kinh & Bảo tàng Liêu Ninh",
      hotspotAnnotations: [
        { id: "p01-1", x: 22, y: 52, titleVi: "Tạo hình Tào Thực bên bờ Lạc Thủy", titleZh: "曹植洛水初遇", pinyin: "Cáo Zhí Luòshuǐ", category: "Bố cục Liên hoàn", detail: "Hoàng tử Tào Thực đứng trang nghiêm bên bờ sông ngoảnh nhìn thần nữ trong mô thức tự sự liên hoàn ('Liên hoàn họa'), nơi nhân vật chính xuất hiện lặp lại qua các hồi không cần khung ngăn." },
        { id: "p01-2", x: 52, y: 40, titleVi: "Đường nét 'Xuân tằm thổ ti' (Tơ tằm mùa xuân)", titleZh: "高古游丝描", pinyin: "Gāogǔ yóusīmiáo", category: "Bút pháp Lục triều", detail: "Y phục bay lượn của Lạc Thần được viền bằng nét bút mảnh, đều, mềm mại không ngắt quãng tựa tơ tằm nhả sợi, tạo cảm giác 'Phiên nhược kinh hồng, uyển nhược du long'." },
        { id: "p01-3", x: 78, y: 44, titleVi: "Cỗ xe Sáu Rồng & Quần Thần Hộ giá", titleZh: "六龙云车护从", pinyin: "Liùlóng yúnchē", category: "Thần thoại Sơn Hải Kinh", detail: "Thần nữ rời đi trên cỗ xe do sáu con rồng kéo giữa mây nước, vây quanh là Văn Ngư vọt sóng và Hà Bá đánh trống — thể hiện trí tưởng tượng lãng mạn thời Ngụy Tấn." }
      ]
    },
    "nvshi-zhentu": {
      material: "Mực nho và màu khoáng đạm trên lụa tố tơ tằm",
      attribution: "Cố Khải Chi (bản mô đời Đường, c. TK VI–VII) • The British Museum, London",
      hotspotAnnotations: [
        { id: "p02-1", x: 30, y: 48, titleVi: "Cảnh 'Phùng Viện Đương Hùng' (Lấy thân cản gấu)", titleZh: "冯媛当熊救驾", pinyin: "Féng Yuàn dāng xióng", category: "Sử họa Giáo hóa", detail: "Tái hiện điển tích thời Hán Nguyên Đế khi gấu xổng chuồng trong vườn thú, Chiêu nghi Phùng Viện bước thẳng ra chắn trước long thể minh chứng phẩm hạnh dũng liệt của nữ giới hậu cung." },
        { id: "p02-2", x: 55, y: 54, titleVi: "Cảnh 'Chải Tóc Soi Gương' & Tĩnh vật Nghi lễ", titleZh: "对镜梳妆图", pinyin: "Duìjìng shūzhuāng", category: "Chi tiết Đồ dùng Hán–Tấn", detail: "Tiên phong vẽ phối cảnh hộp phấn sơn mài tròn và gương đồng đặt chuẩn tỷ lệ chiều sâu, minh họa lời răn 'Người biết trang điểm dung nhan nhưng hiếm ai sửa rèn tâm đức'." },
        { id: "p02-3", x: 80, y: 36, titleVi: "Đoạn Châm ngôn Chữ Tiểu Khải & Ấn 'Tuyên Hòa'", titleZh: "宣和御览与楷书箴文", pinyin: "Xuānhé yùlǎn", category: "Văn bản & Lưu truyền", detail: "Các đoạn châm của Trương Hoa được chép xen giữa tranh theo lối Tiểu Khải cổ điển cùng dấu triện giám định thời Tống Huy Tông và bút tích Càn Long." }
      ]
    },
    "ershiba-xiu": {
      material: "Màu khoáng chất cổ điển và đường nét mực 'Thiết tuyến miêu' trên lụa",
      attribution: "Trương Tăng Do (truyền bản mô đời Đường–Tống) • Bảo tàng Mỹ thuật Thành phố Osaka",
      hotspotAnnotations: [
        { id: "p03-1", x: 24, y: 46, titleVi: "Hình tượng Sao Thần Đầu Thú – Thân Người Siêu thực", titleZh: "星宿神形怪诞造型", pinyin: "Xīngxiù shénxíng", category: "Thiên văn Đạo giáo", detail: "Dung hợp hệ thống Nhị thập bát tú thiên văn Trung Hoa với tạo hình đầu bò, sừng hươu, cánh chim từ văn hóa Ba Tư – Ấn Độ truyền qua Con đường Tơ lụa." },
        { id: "p03-2", x: 54, y: 52, titleVi: "Kỹ thuật 'Ao đột họa pháp' Tạo khối Lập thể", titleZh: "凹凸晕染法", pinyin: "Āotū yùnrǎnfǎ", category: "Giao lưu Tây Vực", detail: "Kế thừa kỹ pháp vờn sáng tối kiểu Tây Vực – Kizil để tả bắp thịt và nếp áo uốn lượn có chiều sâu khối nổi trên nền lụa phẳng." },
        { id: "p03-3", x: 76, y: 32, titleVi: "Chú thích Chữ Triện & Bài Tự Lưu truyền Đời Tống", titleZh: "古篆题名与宋人墨迹", pinyin: "Gǔzhuàn tímíng", category: "Khảo chứng Văn tự", detail: "Cạnh mỗi vị tinh quân đều ghi tên sao theo thể chữ Triện cổ và chú giải thuộc tính Ngũ Hành ứng chiếu bản đồ sao trên bầu trời." }
      ]
    },
    "you-chun-tu": {
      material: "Khoáng chất xanh lam – xanh lục rực rỡ (Thanh lục) kết hợp viền vàng kim bích trên lụa",
      attribution: "Triển Tử Kiền (đời Tùy, c. 600 CN) • Bảo tàng Cố Cung Bắc Kinh (Tranh sơn thủy cổ nhất còn nguyên bản)",
      hotspotAnnotations: [
        { id: "p04-1", x: 30, y: 45, titleVi: "Giải quyết Tỷ lệ 'Người Lớn Hơn Núi' Thành Công Đầu Tiên", titleZh: "丈山尺树寸马豆人", pinyin: "Zhàng shān chǐ shù", category: "Cách mạng Không gian", detail: "Trước Triển Tử Kiền, sơn thủy chỉ là phông nền thô sơ với người to bằng đỉnh núi; bức này thu nhỏ người du xuân cỡ hạt đậu, mở ra quy luật phối cảnh 'Trượng sơn, xích thụ, thốn mã, đậu nhân'." },
        { id: "p04-2", x: 56, y: 60, titleVi: "Khai sinh Thể loại Thanh Lục Sơn Thủy & Viễn Cảnh Sông Hồ", titleZh: "青绿设色开山之作", pinyin: "Qīnglǜ shānyǐng", category: "Màu sắc Thời Tùy", detail: "Dùng thạch thanh – thạch lục vờn sống núi phản chiếu mặt hồ mênh mông uốn chéo góc, là tiền thân trực tiếp của Lý Tư Huấn thời Đường và Vương Hy Mạnh thời Tống." },
        { id: "p04-3", x: 76, y: 30, titleVi: "Thuyền Du Xuân & Đường Hoa Đào Nở Rộ", titleZh: "桃溪泛舟游春", pinyin: "Táoxī fànzhōu", category: "Không khí Tiết Thanh Minh", detail: "Sườn núi điểm hoa đào hồng phấn chấm nhụy trắng chì ('Nê kim bạch') cùng bóng thuyền nhẹ trôi trên sóng gợn lăn tăn gợi nhịp xuân thư thái." }
      ]
    },
    "bu-nian-tu": {
      material: "Mực nho và màu khoáng son – vàng đậm rực rỡ trên lụa quyển ngang",
      attribution: "Diêm Lập Bản (đời Sơ Đường, TK VII) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p05-1", x: 68, y: 45, titleVi: "Đường Thái Tông Lý Thế Dân Ngồi Kiệu Bộ Liễn", titleZh: "唐太宗端坐步辇", pinyin: "Táng Tàizōng", category: "Chân dung Đế vương", detail: "Vị hoàng đế mặc áo dài cổ tròn giản dị nhưng toát lên phong thái ung dung cao lớn gấp rưỡi các cung nữ xung quanh, nhấn mạnh uy quyền trung tâm Đại Đường." },
        { id: "p05-2", x: 26, y: 50, titleVi: "Sứ thần Thổ Phồn Lộc Đông Tán Mặc Áo Cẩm Thêu Chim", titleZh: "吐蕃使臣禄东赞", pinyin: "Lù Dōngzàn", category: "Ngoại giao Hán–Tạng (641)", detail: "Tể tướng Tây Tạng (Thổ Phồn) Lộc Đông Tán chắp tay khom mình khiêm tốn cầu hôn Công chúa Văn Thành, trên áo khoác hoa văn chim liên châu đặc trưng cao nguyên Thanh–Tạng." },
        { id: "p05-3", x: 46, y: 48, titleVi: "Chín Cung nữ Quạt Lộng & Nét Viền Thiết Tuyến", titleZh: "铁线描与九宫女", pinyin: "Tiěxiànmiáo", category: "Tạo hình Nhân vật Sơ Đường", detail: "Dùng nét Thiết tuyến đều đặn chắc khỏe như sợi dây sắt rèn để định hình dáng vẻ tự nhiên của chín nữ quan khiêng kiệu, tránh lặp điệu sáo mòn." }
      ]
    },
    "lidai-diwang-tu": {
      material: "Mực và màu khoáng son, xanh đá cổ điển trên lụa",
      attribution: "Diêm Lập Bản (đời Đường) • Museum of Fine Arts, Boston",
      hotspotAnnotations: [
        { id: "p06-1", x: 25, y: 50, titleVi: "Mười Ba Vị Hoàng Đế Từ Tây Hán Đến Tùy triều", titleZh: "十三位帝王群像", pinyin: "Shísān dìwáng", category: "Chính trị Sử họa", detail: "Vẽ 13 vị quân chủ tiêu biểu (từ Hán Chiêu Đế, Ngụy Văn Đế đến Tần Thủy Hoàng? Không, Tuyên Đế Trần Triều, Tùy Văn Đế, Tùy Dạng Đế) phân biệt rõ đức độ sáng suốt với nét mặt phù hoa." },
        { id: "p06-2", x: 54, y: 46, titleVi: "Khí Tượng 'Khai Quốc Quang Vũ Đế & Đường Thái Tổ Chuẩn'", titleZh: "汉光武帝仁厚神采", pinyin: "Guāngwǔ dì", category: "Mỹ học Truyền thần", detail: "Ở Hán Quang Vũ Đế Lưu Tú và Trần Văn Đế, Diêm Lập Bản dùng gam màu trầm ấm và ánh mắt điềm tĩnh để biểu đạt bậc minh quân; trái ngược với nét mặt bạo liệt hay kiêu căng của các ông vua mất nước." },
        { id: "p06-3", x: 80, y: 58, titleVi: "Tùy Dạng Đế Dương Quảng Đi Kèm Bối cảnh Chính trị", titleZh: "隋炀帝立像寓意", pinyin: "Suí Yángdì", category: "Khuyến giới Sử học", detail: "Tư thế nghiêm cẩn của các thị vệ cầm bảo cái và trượng lễ tạo độ tương phản phục vụ triết lý 'Dĩ cổ vi giám' (Lấy sử xưa làm gương soi cho hoàng đế Đường)." }
      ]
    },
    "tianwang-songzi-tu": {
      material: "Bạch miêu thuần mực thủy mặc trên giấy Tuyên (bản mô đời Tống theo phong cách Ngô Đạo Tử)",
      attribution: "Ngô Đạo Tử (bản truyền mô đời Tống) • Bảo tàng Mỹ thuật Thành phố Osaka",
      hotspotAnnotations: [
        { id: "p07-1", x: 32, y: 48, titleVi: "Đức Phật Thích Ca Sơ Sinh & Tịnh Phạn Vương Bế Con", titleZh: "净饭王抱释迦降诞", pinyin: "Jìngfànwáng", category: "Phật họa Bản địa hóa", detail: "Biến đổi cốt truyện Phật đản thành gia đình hoàng tộc mặc áo mũ Trung Hoa trang trọng: Vua Tịnh Phạn bế hài đồng Thích Ca còn các thiên nữ và chư thần quỳ bái." },
        { id: "p07-2", x: 64, y: 44, titleVi: "Phong cách 'Ngô Đái Đương Phong' & Nét Bút Lan Diệp", titleZh: "吴带当风兰叶描", pinyin: "Wúdài dāngfēng", category: "Đỉnh cao Bút pháp Đường", detail: "Không dùng màu sắc lộng lẫy mà chỉ bằng thuần mực ('Bạch họa'), từng dải lụa thiên thần bay phần phật mạnh mẽ theo tốc độ chuyển cổ tay biến hóa dày mỏng ('Lan diệp miêu')." },
        { id: "p07-3", x: 80, y: 60, titleVi: "Tỳ Sa Môn Thiên Vương Trấn Áp Quỷ Thần Hàng Phục", titleZh: "天王降魔神将组", pinyin: "Tiānwáng jiàngmó", category: "Kịch tính Tín ngưỡng", detail: "Đoạn đầu cuộn tranh khắc họa Thiên Vương oai vệ cầm kích cùng quỷ sứ, sư tử hung dữ cúi rạp, tạo thế động mãnh liệt đối lập với vẻ tĩnh an đoạn cuối." }
      ]
    },
    "guoguo-furen-youchun": {
      material: "Màu khoáng tươi sáng tinh xảo trên lụa tố (Bản mô Tống Huy Tông thời Bắc Tống)",
      attribution: "Trương Huyên (Bản mô Tống Huy Tông, TK XII) • Bảo tàng Tỉnh Liêu Ninh",
      hotspotAnnotations: [
        { id: "p08-1", x: 48, y: 48, titleVi: "Kỹ thuật 'Không Vẽ Phong Cảnh Mà Vẫn Thấy Mùa Xuân'", titleZh: "无景胜有景空白构图", pinyin: "Kōngbái gòutú", category: "Thẩm mỹ Lưu bạch", detail: "Không hề vẽ một cành đào hay dòng suối nào quanh đoàn ngựa, toàn bộ không khí mùa xuân rộn ràng chỉ được gợi qua trang phục lụa mỏng và bước ngựa thong thả trên nền trống." },
        { id: "p08-2", x: 68, y: 50, titleVi: "Tranh luận Danh tính Chủ thể Giữa Đoàn Du Xuân", titleZh: "虢国夫人真身考辨", pinyin: "Guóguó Fūrén", category: "Khảo chứng Lịch sử", detail: "Học giới tranh luận ai là Quắc Quốc phu nhân (chị Dương Quý Phi): người mặc váy hồng cưỡi ngựa ở chính giữa ôm bé gái, hay nữ quý tộc mặt tròn kiêu kỳ đội mũ dẫn đầu bên trái." },
        { id: "p08-3", x: 24, y: 54, titleVi: "Ngựa 'Tam Hoa' Đường triều & Dòng Đề Sấu Kim Thể", titleZh: "三花御马与瘦金题签", pinyin: "Sānhuā yùmǎ", category: "Biểu tượng Hoàng gia", detail: "Bờm ngựa được cắt tỉa thành ba chỏm hoa quý tộc chỉ dành cho cung đình Thịnh Đường; góc phải trên mang chữ đề 'Quắc Quốc phu nhân Du Xuân đồ' bằng bút tích Sấu Kim thể sắc sảo của Tống Huy Tông." }
      ]
    },
    "daolian-tu": {
      material: "Khoáng sắc đỏ – lục – vàng kim trên lụa (Bản mô Tống Huy Tông thế kỷ XII)",
      attribution: "Trương Huyên (Bản mô Tống Huy Tông) • Museum of Fine Arts, Boston",
      hotspotAnnotations: [
        { id: "p09-1", x: 24, y: 52, titleVi: "Nhóm Cung nữ Cầm Chày Gỗ Đập Mềm Lụa Thô", titleZh: "四人持杵捣练图", pinyin: "Dǎoliàn láojiān", category: "Lao động Cung đình", detail: "Bốn cung nữ chia hai bên khay gỗ dài nâng hạ nhịp nhàng chày giã vải, ánh mắt nghiêm túc và cơ thể chuyển động đồng bộ phá vỡ khuôn mẫu chân dung đứng yên." },
        { id: "p09-2", x: 52, y: 48, titleVi: "Cô Bé Cúi Nhìn Dưới Gầm Tấm Lụa Kéo Căng (Thân vị Tạo nhịp)", titleZh: "稚童仰窥拉练细节", pinyin: "Zhìtóng yǎngkuī", category: "Tâm lý Nhân vật", detail: "Chi tiết em nhỏ tinh nghịch nép dưới dải lụa trắng đang được hai người là ủi bằng bàn là than đồng — nét chấm phá sinh động bậc nhất xóa tan vẻ cứng nhắc cung đình." },
        { id: "p09-3", x: 78, y: 50, titleVi: "Hoa văn Khăn Váy Thịnh Đường & Quạt Than Hồng", titleZh: "盛唐团花织锦纹", pinyin: "Tuánhuā zhījǐn", category: "Lịch sử Phục sức", detail: "Áo khoác vai, hoa văn gấm hoa tròn (Đoàn hoa) và trâm cài đầu ghi lại chuẩn xác thời trang phụ nữ quý tộc Trường An giữa thế kỷ VIII." }
      ]
    },
    "zhanhua-shinv-tu": {
      material: "Màu khoáng rực rỡ vẽ trên lụa tơ tằm khổ rộng",
      attribution: "Chu Phưởng (đời Trung Đường, TK VIII) • Bảo tàng Tỉnh Liêu Ninh",
      hotspotAnnotations: [
        { id: "p10-1", x: 28, y: 36, titleVi: "Phấn Trắng Mũ Hoa Mẫu Đơn – Sen – Phù Dung", titleZh: "大朵簪花发髻", pinyin: "Zānhuā fàjì", category: "Mỹ chuẩn Phì Nùng", detail: "Các mệnh phụ để kiểu tóc bới cao 'Cao kế' cài đại đóa hoa mẫu đơn, hoa sen, phù dung kết hợp gương mặt đầy đặn và lông mày lá liễu thời Trung Đường ('Chu gia dạng')." },
        { id: "p10-2", x: 54, y: 54, titleVi: "Áo Lụa Sa Mỏng Xuyên Thấu (Khinh La Sa Y)", titleZh: "薄如蝉翼轻罗衫", pinyin: "Qīngluó shāyī", category: "Kỹ thuật Tả chất liệu", detail: "Tài hoa bậc thầy trong việc tô phấn trắng mờ đè lên sắc da hồng hào và họa tiết váy đỏ thắm phía trong, diễn tả độ trong suốt nhẹ tênh như cánh ve của tơ lụa Đường triều." },
        { id: "p10-3", x: 76, y: 66, titleVi: "Động tác Đùa Chó Cưng & Ngắm Hạc – Hoa Tĩnh Lặng", titleZh: "拂尘戏犬庭院闲情", pinyin: "Tíngyuàn xiánqíng", category: "Nội tâm Hậu cung", detail: "Không khí xa hoa nhưng phảng phất nỗi cô đơn êm đềm trong nội viện quý tộc qua ánh mắt lơ đãng hướng xuống con chó nhỏ và cánh bướm." }
      ]
    },
    "huishan-shinv-tu": {
      material: "Mực và màu khoáng son đỏ thẫm cổ điển trên lụa",
      attribution: "Chu Phưởng (đời Trung Đường) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p11-1", x: 24, y: 50, titleVi: "Nhân vật Chính Cầm Quạt Tròn (Huy Phiến) Thẫn Thờ", titleZh: "持团扇贵妇主尊", pinyin: "Chí tuánshàn", category: "Bố cục Tâm lý", detail: "Phân cảnh mở đầu với quý phi ngồi tựa ghế mây chạm trổ, tay nâng quạt lụa tròn lớn ('Huy phiến'), ánh mắt sâu thẳm suy tư về kiếp sống bị giam hãm giữa nhung lụa." },
        { id: "p11-2", x: 52, y: 48, titleVi: "Nhóm Phục Vụ Đeo Đàn Cầm & Soi Gương Trang Điểm", titleZh: "抱琴试镜宫娥", pinyin: "Bàoqín shìjìng", category: "Âm nhạc & Sinh hoạt", detail: "Xuyên suốt 5 màn ngắn trên cùng mặt phẳng, hình ảnh chiếc đàn cổ cầm bọc túi gấm và hộp trang điểm phản ánh đời sống văn nghệ thầm lặng của nữ giới quý tộc Đường." },
        { id: "p11-3", x: 78, y: 52, titleVi: "Tỷ lệ Lông mày Ngắn 'Nga My' & Đầm Cài Đỏ Thẫm", titleZh: "短蛾眉与石榴裙", pinyin: "Shíliu qún", category: "Thời trang Đường triều", detail: "Lối tô môi hoa anh đào nhỏ và váy lụa nhuộm đỏ quả lựu ('Thạch lựu quần') trở thành tư liệu chuẩn về phục trang cổ điển." }
      ]
    },
    "kuanglu-tu": {
      material: "Thủy mặc thuần sắc (mặc cổ pháp) trên lụa khổ đứng trục dọc (Lập trục)",
      attribution: "Kinh Hạo (đời Ngũ Đại Hậu Lương, TK X) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p12-1", x: 50, y: 26, titleVi: "Khối Đỉnh Thái Hành Sơn Dựng Đứng Chiếm Trọn Tầm Nhìn", titleZh: "峻拔主峰矗立构图", pinyin: "Jùnbá zhǔfēng", category: "Khởi nguyên Bắc phái", detail: "Kinh Hạo đặt ngọn chủ phong cao vút choán kín nửa trên bức tranh, xác lập bố cục 'Toàn cảnh Hùng vĩ' thống trị toàn bộ hội họa Bắc Tống sau này." },
        { id: "p12-2", x: 52, y: 52, titleVi: "Lối Tách Lớp 'Nhân Thác Thành Đá' (Bút pháp Kết hợp Mực)", titleZh: "笔墨并重皴擦点染", pinyin: "Bǐmò bìngzhòng", category: "Lý luận *Bút Pháp Ký*", detail: "Hiện thực hóa học thuyết *Bút Pháp Ký* (《笔法记》) của chính ông: kết hợp 'Cấu trúc nét bút' (Bút – xương) và 'Độ loang nhạt đậm của mực' (Mặc – thịt) bằng nét vờn ngắn khắc vách đá gồ ghề." },
        { id: "p12-3", x: 32, y: 76, titleVi: "Lữ khách & Thuyền Chài Dưới Chân Thác Bạc", titleZh: "津渡行旅草堂", pinyin: "Jīndù xínglǚ", category: "Nhân sinh Trong Tự nhiên", detail: "Con người, quán tranh và bến đò ở đáy bức tranh bé nhỏ nhưng là nhãn mắt giúp người xem đo lường độ vĩ đại choáng ngợp của tạo hóa." }
      ]
    },
    "xiaoxiang-tu": {
      material: "Thủy mặc kết hợp màu đạm thiết sắc trên lụa",
      attribution: "Đổng Nguyên (đời Ngũ Đại Nam Đường, TK X) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p13-1", x: 32, y: 50, titleVi: "Kỹ thuật 'Phi Ma Thuẫn' (Nét Sợi Gai Gỡ Rối)", titleZh: "披麻皴柔润山体", pinyin: "Pīmácūn", category: "Khởi tổ Nam phái", detail: "Thay nét rìu chém sắc cạnh của phương Bắc bằng nét dài uốn lượn mềm mại như sợi gai tước ('Phi ma thuẫn'), tả hoàn hảo đồi đất ẩm mượt vùng Giang Nam." },
        { id: "p13-2", x: 55, y: 38, titleVi: "Điểm Rêu 'Mễ Điểm' & Đỉnh Núi Sương Mù Lưu Bạch", titleZh: "淡墨点苔烟岚出没", pinyin: "Dànmò diǎntái", category: "Chất liệu Hơi Nước", detail: "Rải hàng nghìn chấm mực ngang tròn ('Điểm đài') dọc triền đồi mờ ảo sương khói hai dòng sông Tiêu – Tương, khai nguồn cho Văn nhân họa Mễ gia." },
        { id: "p13-3", x: 74, y: 74, titleVi: "Ngư dân Kéo Lưới & Thuyền Nhạc Đón Dâu Sông Nam", titleZh: "舟楫张网渔民群像", pinyin: "Zhōují yúmín", category: "Sinh hoạt Giang Nam", detail: "Dưới chân đồi thấp thoáng những con thuyền nhỏ đánh cá và người mặc áo hồng – lam tụ tập trên bờ cát vàng ấm áp." }
      ]
    },
    "hanlin-chongting": {
      material: "Mực nho và đạm sắc khoáng trên lụa quyển trục dọc",
      attribution: "Đổng Nguyên (đời Ngũ Đại Nam Đường) • Bảo tàng Tỉnh Hắc Long Giang",
      hotspotAnnotations: [
        { id: "p14-1", x: 52, y: 36, titleVi: "Ba Lớp Cồn Bãi Đan Xen Khói Sương Thu Vắng", titleZh: "重汀沙渚三叠法", pinyin: "Chóngtīng shāzhǔ", category: "Bố cục Bình Viễn", detail: "Sử dụng thế 'Tam viễn – Bình viễn' trải rộng mặt sông êm ả qua các cồn lau sậy nối nhau tít tắp về chân trời." },
        { id: "p14-2", x: 34, y: 56, titleVi: "Rừng Cây Rụng Lá Mùa Đông ('Hàn Lâm') Bờ Gần", titleZh: "寒林枯树笔意", pinyin: "Hánlín kūshù", category: "Tạo hình Cổ mộc", detail: "Hàng cây trút lá với cành nhánh vươn giao nhau nhịp nhàng tạo nhịp điệu âm thanh trầm lắng giữa bãi bồi." },
        { id: "p14-3", x: 72, y: 24, titleVi: "Thuyền Đánh Cá Giữa Sông & Tựa Đề Thời Thanh", titleZh: "江舟与清代鉴定诗", pinyin: "Jiāngzhōu yěqù", category: "Lưu truyền Giám định", detail: "Con thuyền nhỏ neo giữa khoảng trắng tinh khiết gợi tinh thần ẩn dật của Giang Nam giữa biến loạn Ngũ Đại." }
      ]
    },
    "qiushan-wendao": {
      material: "Thủy mặc thuần sắc trên lụa quyển đứng (Lập trục)",
      attribution: "Cự Nhiên (đời Ngũ Đại–Bắc Tống) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p15-1", x: 52, y: 24, titleVi: "Khối Đỉnh Đá 'Phàn Đầu' (Đá Phèn Tròn Trịa)", titleZh: "矾头披麻山顶", pinyin: "Fántóu pīmácūn", category: "Bút pháp Nam phái", detail: "Đặc trưng của thiền sư Cự Nhiên: các tảng đá tròn lẳn xếp tầng trên đỉnh núi như tinh thể phèn chua ('Phàn đầu') phủ bằng nét Phi ma thuẫn mượt mà." },
        { id: "p15-2", x: 46, y: 66, titleVi: "Thảo Đường Vấn Đạo Giữa Rừng Thu Tĩnh Mịch", titleZh: "茅堂问道二人图", pinyin: "Máotáng wèndào", category: "Thiền ý & Nho gia", detail: "Trong mái tranh lộ thiên ven suối, một vị ẩn sĩ đang ngồi luận đạo cùng khách vãng lai dưới tán cây tùng trúc xanh sẫm." },
        { id: "p15-3", x: 24, y: 48, titleVi: "Đường Mòn Uốn Lượn Dẫn Sâu Vào Thung Lũng", titleZh: "曲径深邃导视线", pinyin: "Qūjìng tōngyōu", category: "Dẫn hướng Thị giác", detail: "Con đường đất nhỏ từ cầu gỗ dưới đáy lượn ngoằn ngoèo lên tới thiền viện mờ sương tạo chiều sâu 'Thâm viễn'." }
      ]
    },
    "hanxizai-yeyan": {
      material: "Màu khoáng lộng lẫy và nét viền tinh vi trên lụa quyển ngang",
      attribution: "Cố Hoành Trung (đời Ngũ Đại Nam Đường; bản mô Tống) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p16-1", x: 18, y: 50, titleVi: "Hồi I — Tĩnh Lắng Nghe Đàn Tỳ Bà Giữa Nỗi Ưu Tư", titleZh: "听乐图之忧郁神态", pinyin: "Tīngyuè yōuyù", category: "Tâm lý Nhân vật", detail: "Tể tướng Hàn Hy Tái ngồi trên sập gỗ trầm ngâm u uất giữa mỹ nữ gảy tỳ bà, che giấu nỗi bất lực chính trị trước sự nghi kỵ của Nam Đường Hậu Chủ Lý Dục." },
        { id: "p16-2", x: 48, y: 50, titleVi: "Hồi II & III — Màn Bình Phong Phân Cảnh Đánh Trống & Nghỉ Ngơi", titleZh: "屏风分割时间线", pinyin: "Píngfēng fēnjiě", category: "Kỹ thuật Tự sự Điện ảnh", detail: "Sử dụng các tấm bình phong dựng thẳng góc (bộ tranh sơn thủy bên trong bức họa — 'Tranh trong Tranh') để ngăn cách năm thời khắc từ chập tối đến tàn canh một cách tài tình." },
        { id: "p16-3", x: 80, y: 52, titleVi: "Hồi IV & V — Bữa Tiệc Tàn & Ánh Mắt Cô Độc Của Chủ Nhân", titleZh: "管乐清吹与告别", pinyin: "Qīngchuī gàobié", category: "Kịch tính Phóng sự Cổ", detail: "Cố Hoành Trung hoàn thành tác phẩm như 'báo cáo gián điệp bằng hội họa' dâng lên Lý Dục, ghi chép chân thực từng chi tiết nhạc cụ và ánh mắt buồn bã giữa tiệc vui." }
      ]
    },
    "xiesheng-zhenqin": {
      material: "Mực nét mảnh và màu khoáng rực rỡ trên lụa quyển ngắn",
      attribution: "Hoàng Thuyên (đời Ngũ Đại Hậu Thục) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p17-1", x: 35, y: 36, titleVi: "24 Loài Chim, Rùa & Côn Trùng Chuẩn Xác Sinh Học", titleZh: "二十四种写生禽虫", pinyin: "Xiěshēng qínchóng", category: "Tả thực Cổ đại", detail: "Từ chim chìa vôi, chim sẻ, rùa mai xanh tới ve sầu, châu chấu, bọ hung đều được vẽ ở kích thước thật gần như bản vẽ khoa học động vật học thế kỷ X." },
        { id: "p17-2", x: 65, y: 66, titleVi: "Dòng Chữ Đề 'Phó Con Trai Cư Bảo' (Luyện Bút Mẫu)", titleZh: "付子居宝习作题记", pinyin: "Fù zǐ Jūbǎo", category: "Sư đồ Truyền nghề", detail: "Góc dưới bên trái ghi dòng chữ nhỏ của chính Hoàng Thuyên dặn trao bức phác thảo mẫu này cho con trai Hoàng Cư Bảo tập vẽ — mở đầu trường phái 'Hoàng gia phú quý'." },
        { id: "p17-3", x: 70, y: 30, titleVi: "Kỹ thuật 'Câu Lặc Điền Sắc' Cánh Bướm & Lông Vũ", titleZh: "双勾填色极微描", pinyin: "Gōulè tiánsè", category: "Hoa điểu Công bút", detail: "Đường viền mảnh như sợi tóc khóa sắc màu phấn mịn chồng 3–4 lớp giúp từng sợi lông tơ trên ngực chim trở nên sống động ngay cả dưới kính lúp." }
      ]
    },
    "xishan-xinglv": {
      material: "Thủy mặc và đạm sắc trên lụa hai mảnh ghép trục dọc",
      attribution: "Phạm Khoan (đời Bắc Tống, c. 1000 CN) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p18-1", x: 50, y: 30, titleVi: "Chủ Phong Vách Đá 'Vũ Điểm Thuẫn' Chiếm 2/3 Tranh", titleZh: "雨点皴雄伟主峰", pinyin: "Yǔdiǎncūn zhǔfēng", category: "Bắc Tống Tượng đài", detail: "Toàn bộ khối núi Hoa Sơn khổng lồ sừng sững như bức tường thép được khắc bằng hàng vạn nét mực ngắn dày đặc tựa hạt mưa rơi ('Vũ điểm thuẫn')." },
        { id: "p18-2", x: 76, y: 42, titleVi: "Dải Thác Bạc Thẳng Đứng Chia Đôi Khối Núi Đen Kịt", titleZh: "飞瀑白练破黑屏", pinyin: "Fēipù báiliàn", category: "Tương phản Âm–Dương", detail: "Sợi thác trắng mảnh từ khe đá cao hàng nghìn thước đổ thẳng xuống hẻm sâu bốc khói sương tạo khoảng thở nhẹ nhàng cho cả bức tranh nặng ký." },
        { id: "p18-3", x: 72, y: 78, titleVi: "Đoàn Lừa Thồ Hàng & Chữ Ký Giấu Trong Tán Lá", titleZh: "骡队行旅与林间隐藏落款", pinyin: "Yǐncáng luòkuǎn", category: "Khảo chứng Phát hiện 1958", detail: "Phải đến năm 1958 phó viện trưởng Bảo tàng Cố Cung Đài Bắc Lý Lâm Xán mới phát hiện chữ ký hai chữ 'Phạm Khoan' (范宽) giấu kín trong lùm cây góc phải cạnh đoàn lừa nhỏ." }
      ]
    },
    "zao-chun-tu": {
      material: "Mực nho và đạm sắc xanh nhẹ trên lụa quyển đứng",
      attribution: "Quách Hy (đời Bắc Tống, ký năm 1072) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p19-1", x: 50, y: 38, titleVi: "Khối Đá 'Quyển Vân Thuẫn' Cuộn Xoáy Như Mây Nổi", titleZh: "卷云皴与鬼脸石", pinyin: "Juǎnyúncūn", category: "Thủ pháp Quách Hy", detail: "Các khối núi uốn lượn động đậy như rồng vặn mình giữa màn sương băng tan bằng nét vờn cong mềm 'Quyển vân thuẫn' (vân mây cuộn)." },
        { id: "p19-2", x: 38, y: 66, titleVi: "Cành Cây 'Giải Trảo' (Càng Cua Vươn Sức Sống Xuân)", titleZh: "蟹爪枝迎春吐蕊", pinyin: "Xièzhǎozhī", category: "Thực chứng *Lâm Tuyền Cao Trí*", detail: "Cành cây khô vặn xoắn sắc cạnh tựa càng cua bám chặt vách đá cheo leo nhưng đã nhú lộc xuân giữa hơi lạnh tan tuyết." },
        { id: "p19-3", x: 26, y: 45, titleVi: "Tổng Hợp 'Tam Viễn' (Cao – Thâm – Bình Viễn) Trên Một Mặt Trục", titleZh: "三远构图空间律动", pinyin: "Sānyuǎn gòutú", category: "Lý thuyết Phối cảnh Đông Á", detail: "Bên trái nhìn xa tít tắp sang bờ bên kia ('Bình viễn'), chính giữa ngước lên đỉnh núi ('Cao viễn'), kẽ thung lũng hun hút nhìn sâu vào trong ('Thâm viễn')." }
      ]
    },
    "wanhe-songfeng-litang": {
      material: "Thủy mặc kết hợp sắc xanh nâu nhẹ trên lụa trục dọc (1124)",
      attribution: "Lý Đường (đời Tống, 1124) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p20-1", x: 48, y: 36, titleVi: "Thủn Pháp 'Đại Phủ Phách' Như Nhát Rìu Chém Đá Hoa Cương", titleZh: "大斧劈皴石质峭壁", pinyin: "Dàfǔpīcūn", category: "Bước ngoặt Nam Tống", detail: "Lý Đường đặt nghiêng ngòi bút quét những mảng nét dẹt sắc cạnh như lát rìu chẻ vách đá tảng, thay thế vẻ tròn trặn thời Bắc Tống và đặt nền cho trường phái Mã–Hạ." },
        { id: "p20-2", x: 35, y: 68, titleVi: "Rừng Tùng Cổ Thụ Rậm Rạp & Dòng Suối Tiếng Gió", titleZh: "万壑苍松流水声", pinyin: "Wànhè sōngfēng", category: "Âm nhạc Trong Hội họa", detail: "Dải tùng xanh đen tầng tầng lớp lớp che bóng mát lên khe thác đổ bọt trắng tạo ảo giác thính giác tiếng thông reo hòa tiếng nước." },
        { id: "p20-3", x: 82, y: 24, titleVi: "Lạc khoản Đề Thời Tuyên Hòa 6 Trên Vách Núi", titleZh: "宣和甲辰年落款", pinyin: "Xuānhé Jiǎchén", category: "Niên đại Chuẩn xác (1124)", detail: "Trên sườn đỉnh đá góc trên trái ghi rõ năm 'Hoàng Tống Tuyên Hòa Giáp Thìn xuân Lý Đường bút' — cột mốc nối liền Bắc Tống và Họa viện Nam Tống." }
      ]
    },
    "qingming-shanghe": {
      material: "Mực thủy mặc và màu đạm thiết sắc trên lụa cuộn ngang (24,8 × 528,7 cm)",
      attribution: "Trương Trạch Đoan (đời Bắc Tống) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p21-1", x: 50, y: 48, titleVi: "Điểm Cao Trào Cầu Vồng (Hồng Kiều) Sông Biện", titleZh: "汴河虹桥惊险瞬间", pinyin: "Biànhé Hóngqiáo", category: "Kỹ thuật Kết cấu Gỗ", detail: "Cầu gỗ ghép không cột trụ chống dưới sông Biện: hàng chục người trên cầu vung dây thừng kéo giúp con thuyền lương thực sắp trôi dạt đâm vào dạ cầu." },
        { id: "p21-2", x: 78, y: 50, titleVi: "Tửu Lâu Tôn Dương Chính Điếm & Quảng Trường Đô Thị", titleZh: "孙羊正店商业繁华", pinyin: "Sūnyáng Zhèngdiàn", category: "Kinh tế Đô thị Tống", detail: "Khắc họa hơn 814 nhân vật, 60 gia súc, 28 thuyền bè và trên 30 hiệu quán với kiến trúc Giới họa sắc sảo phản ánh kỷ nguyên thương mại tự do Khai Phong." },
        { id: "p21-3", x: 22, y: 58, titleVi: "Nhịp Thư Thái Vùng Ngoại Thành Bờ Đông Sông Biện", titleZh: "东郊杨柳驮队", pinyin: "Dōngjiāo tuóduì", category: "Nhịp Điệu Cuộn Tranh", detail: "Khởi đầu bằng những cành liễu non tiết Thanh Minh và đoàn người tảo mộ trở về, mở màn mượt mà trước khi dẫn người xem vào dòng chảy đô thị cuồn cuộn." }
      ]
    },
    "qianli-jiangshan": {
      material: "Màu khoáng chất rực rỡ (Thạch thanh – Thạch lục – Chu sa – Nhũ phấn) trên lụa (51,5 × 1.191,5 cm)",
      attribution: "Vương Hy Mạnh (đời Bắc Tống, 1113) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p22-1", x: 28, y: 40, titleVi: "Sắc Xanh Ngọc Khoáng Chất Nung Luyện Chuẩn Cực", titleZh: "石青石绿五遍叠染", pinyin: "Shíqīng shílǜ", category: "Đỉnh cao Thanh Lục", detail: "Thạch thanh và thạch lục nghiền mịn theo kích thước hạt nặng–nhẹ phủ chồng 5 lần lên đường nét Thủy mặc tạo bề mặt rạng ngời tựa bảo thạch." },
        { id: "p22-2", x: 56, y: 62, titleVi: "Cầu Gỗ Dài Bắc Ngang Hồ & Thôn Xóm Ven Sườn Đồi", titleZh: "长桥卧波水村体系", pinyin: "Chángqiáo wòbō", category: "Phối hợp Thống nhất", detail: "Những dãy nhà, chiếc cầu gỗ bắc chữ thập qua hồ nước rộng được xử lý chuẩn mực Giới họa để kết nối 6 cụm núi lớn thành đại trường giang thống nhất." },
        { id: "p22-3", x: 80, y: 26, titleVi: "Lời Bình Tống Huy Tông & Thiên Tài Yểu Mệnh Tuổi 18", titleZh: "十八岁绝笔奇才", pinyin: "Wáng Xīmèng", category: "Sử liệu Mỹ thuật Tống", detail: "Là tác phẩm duy nhất được xác nhận của Vương Hy Mạnh (hoàn thành năm 18 tuổi tại Họa học cung đình) trước khi mất sớm năm 20 tuổi." }
      ]
    },
    "rui-he-tu": {
      material: "Màu khoáng xanh ngọc, nhũ bạch và mực vẽ tinh xảo trên lụa quyển ngang",
      attribution: "Triệu Cát / Tống Huy Tông (1112) • Bảo tàng Tỉnh Liêu Ninh",
      hotspotAnnotations: [
        { id: "p23-1", x: 50, y: 38, titleVi: "20 Con Hạc Trắng Bay Vờn Trên Mái Tuyên Đức Môn", titleZh: "二十只仙鹤盘旋祥瑞", pinyin: "Xiānhè pánxuán", category: "Biểu tượng Đế vương", detail: "Hai mươi con hạc tuyết tạo vòng xoáy cân xứng hoàn hảo trên nền trời xanh ngọc bích mượt như lụa (18 con bay quanh, 2 con đậu trên chóp linh thú mái ngói)." },
        { id: "p23-2", x: 50, y: 74, titleVi: "Đỉnh Mái Điện Tuyên Đức Môn Cắt Ngang Đám Mây Ngũ Sắc", titleZh: "宣德门屋脊界画", pinyin: "Xuāndémén", category: "Kỹ thuật Cắt Khung Táo bạo", detail: "Cố tình bỏ qua phần nền nhà và con người phía dưới, chỉ lấy góc đỉnh mái điện Tuyên Đức nhô lên giữa mây lành để đẩy thị giác hoàn toàn hướng về bầu trời." },
        { id: "p23-3", x: 20, y: 45, titleVi: "Bài Thơ & Lời Tựa Viết Bằng 'Sấu Kim Thể' Tự Thân", titleZh: "瘦金体自题诗跋", pinyin: "Shòujīntǐ tísī", category: "Thư pháp Độc sáng", detail: "Toàn bộ lời tự thuật sự kiện điềm lành ngày Nguyên tiêu năm Chính Hòa 2 (1112) do Tống Huy Tông viết bằng thể chữ 'Sấu Kim' thanh mảnh sắc nhọn như lưỡi kiếm." }
      ]
    },
    "furong-jinji": {
      material: "Màu khoáng công bút siêu vi tinh xảo trên lụa (Đoàn phiến chuyển trục)",
      attribution: "Triệu Cát / Tống Huy Tông (truyền bản) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p24-1", x: 46, y: 50, titleVi: "Chim Trĩ Vàng Đứng Nhún Đong Đưa Trên Cành Phù Dung", titleZh: "锦鸡压枝平衡动势", pinyin: "Jǐnjī yāzhī", category: "Thị giác & Sinh thái", detail: "Bắt trọn khoảnh khắc nặng nhẹ vật lý: thân con trĩ vàng rực nặng nề khiến cành phù dung trĩu cong xuống khi chim ngoái đầu nhìn đôi bướm trên không." },
        { id: "p24-2", x: 64, y: 34, titleVi: "Ngũ Đức Đế Vương Mã Hóa Vào Loài Trĩ & Hoa Phù Dung", titleZh: "锦鸡五德隐喻", pinyin: "Wǔdé yǐnyù", category: "Ngụ ý Văn hóa Tống", detail: "Con trĩ vàng mang mào văn vẻ, cựa võ dũng, tiếng gọi bạn nhân ái — ghép âm với Phù Dung ('vinh hoa') và hoa Cúc ('trường cửu'), tạo mật mã 'Cẩm tú vĩnh trường'." },
        { id: "p24-3", x: 24, y: 24, titleVi: "Thơ Thất Tuyệt Sấu Kim Thể & Mực Đen Lòng Nhãn Tế", titleZh: "点睛生漆光泽", pinyin: "Diǎnjīng shēngqī", category: "Kỹ nghệ Tả thực", detail: "Tương truyền các họa sĩ Họa viện Huy Tông điểm lòng đen mắt chim bằng sơn mài sống nổi cộm nhẹ như hạt đậu đen để mắt chim có ánh phản chiếu ướt sống động." }
      ]
    },
    "wuma-tu": {
      material: "Bạch miêu (nét mực thuần túy) kết hợp đạm sắc thanh nhạt trên giấy Tuyên",
      attribution: "Lý Công Lân (đời Bắc Tống, c. 1090) • Bảo tàng Quốc lập Tokyo",
      hotspotAnnotations: [
        { id: "p25-1", x: 24, y: 50, titleVi: "Chiến Mã Tây Vực & Kỹ thuật 'Bạch Miêu' Phế Bỏ Phẩm Màu", titleZh: "白描骏马骨法用笔", pinyin: "Báimiáo jùnmǎ", category: "Cách mạng Văn nhân Tống", detail: "Lý Công Lân từ bỏ lớp màu lộng lẫy cung đình, dùng nét mực thuần thanh mảnh co giãn dày mỏng vừa đúng xương thịt ngựa tiến cống từ Khotan và Thổ Phồn." },
        { id: "p25-2", x: 62, y: 54, titleVi: "Chân dung Các Mã Quan Hộ Tống Mang Sắc Tộc Tây Vực", titleZh: "胡汉奚官神态各异", pinyin: "Xīguān shéntài", category: "Nhân học Tây Vực", detail: "Năm người dắt ngựa (từ mã phu mắt sâu râu quai nón vùng Trung Á đến quan nuôi ngựa Hán tộc) hiện lên đầy cá tính tâm lý không chút cường điệu." },
        { id: "p25-3", x: 80, y: 30, titleVi: "Bài Ký Hoàng Đình Kiên Ghi Rõ Tên Tuổi Từng Con Ngựa", titleZh: "黄庭坚题名印鉴", pinyin: "Huáng Tíngjiān tímíng", category: "Tài liệu Lưu trữ (Tìm thấy lại 2019)", detail: "Từng con ngựa (Phụng Đầu Thông, Cẩm Bác Thông...) đều có bài chú xuất xứ bằng tay của Hoàng Đình Kiên; bức tranh từng mất tích sau 1945 và tái xuất tại Nhật năm 2018." }
      ]
    },
    "chushan-ruiai": {
      material: "Thủy mặc 'Mễ điểm sơn thủy' thấm đẫm hơi nước trên giấy",
      attribution: "Mễ Hữu Nhân (con trai Mễ Phất, thời Bắc–Nam Tống) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p26-1", x: 50, y: 45, titleVi: "Mễ Điểm Vân Sơn — Vẽ Núi Không Cần Đường Viền Nét Dài", titleZh: "米氏云山泼墨点苔", pinyin: "Mǐshì yúnshān", category: "Sáng tạo Mễ gia", detail: "Phá bỏ hoàn toàn khuôn khổ vẽ đường viền núi đá; cha con Mễ Phất – Mễ Hữu Nhân chỉ dùng các chấm mực ngang no nước xếp chồng tạo khối núi bồng bềnh giữa sương mù Giang Nam." },
        { id: "p26-2", x: 35, y: 65, titleVi: "Dải Mây Trắng Ngang Thân Núi Tách Biệt Xa–Gần", titleZh: "白云横腰虚实相生", pinyin: "Báiyún héngyāo", category: "Mỹ học Đạm Vô Vi", detail: "Dải mây giữ nguyên màu giấy trắng trôi ngang lưng chừng đồi, biến bức tranh thành bài thơ thủy mặc gợi 'Thanh – Đạm – Thiên Chân' của Văn nhân họa." },
        { id: "p26-3", x: 75, y: 24, titleVi: "Tuyên ngôn Mỹ học 'Mặc Hý' (Chơi Đùa Với Mực)", titleZh: "文人“墨戏”精神宣言", pinyin: "Wénrén mòxì", category: "Triết học Hội họa", detail: "Mễ Hữu Nhân lần đầu gọi tranh mình là 'Mặc hý' (trò vui của mực), khẳng định hội họa là phương tiện giải phóng tâm tính kẻ sĩ chứ không phải nghề thợ vẽ." }
      ]
    },
    "kumu-guaishi": {
      material: "Thủy mặc thuần túy trên giấy Tuyên cổ (26,5 × 50,5 cm)",
      attribution: "Tô Thức / Tô Đông Pha (c. 1085) • Bộ sưu tập Tư nhân Quốc tế",
      hotspotAnnotations: [
        { id: "p27-1", x: 42, y: 48, titleVi: "Thân Cây Khô Xoắn Vặn Như Ruột Rối (Bút pháp Cuồng Thảo)", titleZh: "枯木盘屈如草书", pinyin: "Kūmù cǎoshū", category: "Thư–Họa Đồng Nguyên", detail: "Tô Thức không vẽ cây theo hình dáng thực vật học mà dùng nét bút Thảo thư khô xước vặn xoắn vươn lên trời như trút hết nỗi uất nghẹn của một đời bị biếm trích." },
        { id: "p27-2", x: 64, y: 62, titleVi: "Hòn Đá Kỳ Quái & Mầm Trúc Kháng Cự Mùa Đông", titleZh: "怪石竹枝文人气节", pinyin: "Guàishí zhúzhī", category: "Biểu tượng Nhân phẩm", detail: "Đá quái lởm chởm xoáy tròn tựa cơn lốc đi kèm vài lá trúc sắc lẻm biểu trưng cho khí tiết thẳng thắn không chịu khuất phục trước sóng gió hoạn lộ." },
        { id: "p27-3", x: 24, y: 28, titleVi: "Bài Thơ Mễ Phất & Lưu Cư: Chuẩn Mực Văn Nhân Họa Thực Thụ", titleZh: "米芾诗跋与文人画鼎立", pinyin: "Mǐ Fú shībá", category: "Tuyên ngôn Văn nhân Họa", detail: "Nối tiếp với các bài bạt của Mễ Phất và Lưu Lương Tá, bức tranh xác lập triết lý 'Luận họa dĩ hình tự, kiến dữ nhi đồng lân' (Vẽ chỉ cầu giống hình ngoài thì nhận thức ngang trẻ con)." }
      ]
    }
  };

  window.CCE_APPLY_HOTSPOTS_AND_META({
    artifactsMap: ARTIFACTS_BATCH,
    paintingsMap: PAINTINGS_BATCH1
  });
})();
