// ============================================================================
// KNOWLEDGE EXPANSION ENGINE — MODULE 4 (BATCH 4)
// Enriches ALL 34 Provincial-Level Units (#regions) with:
//   1. commercialAndSupplyChain (Thương bang lịch sử + Cụm công nghiệp + Giao thương VN–ASEAN)
//   2. literaryAndHistoricalEchoes (Điển tích & Thi ca Kinh điển gắn với vùng đất)
// Full Simplified/Traditional Hanzi + Tone-marked Pinyin + Hán–Việt + Vietnamese
// Zero truncation across all 34 provinces (23 Provinces, 5 Autonomous, 4 Municipalities, 2 SARs).
// ============================================================================

(function () {
  if (!window.CCE_REGIONS || !Array.isArray(window.CCE_REGIONS.provincesDirectory)) return;

  const PROVINCE_UPGRADE_34 = {
    "prov-beijing": {
      commercialAndSupplyChain: {
        historicalGuild: "Kinh thương & Hiệu buôn tiền tiêu Tiền Môn – Lưu Ly Xưởng phục vụ triều đình (Đồng Nhân Đường 1669, Thụy Phù Tường 1862).",
        modernClusters: "Thủ đô R&D số một toàn cầu ('Thung lũng Silicon Trung Quan Thôn' 中关村), trụ sở tổng công ty Nhà nước trung ương (SOE) và hạ tầng AI – đám mây.",
        hubsAndCorridors: "Sân bay Đại Hưng – Thủ Đô, Ga Đường sắt Bắc Kinh Tây/Nam kết nối hành lang Kinh–Tân–Ký (京津冀).",
        vietnamAseanLink: "Trung tâm tiếp nhận sinh viên CSC hàng đầu cho trí thức Việt Nam (Thanh Hoa, Bắc Đại) và đối tác chính sách thương mại cấp chính phủ."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Đăng U Châu Đài Ca (登幽州台歌)",
        author: "Trần Tử Ngang (陈子昂)",
        dynasty: "Đầu Đường (696 SCN)",
        quoteZh: "前不见古人，后不见来者。念天地之悠悠，独怆然而涕下。",
        quoteZhTrad: "前不見古人，後不見來者。念天地之悠悠，獨愴然而涕下。",
        pinyin: "Qián bù jiàn gǔrén, hòu bù jiàn láizhě. Niàn tiāndì zhī yōuyōu, dú chuàngrán ér tìxià.",
        hanViet: "Tiền bất kiến cổ nhân, hậu bất kiến lai giả. Niệm thiên địa chi du du, độc sảng nhiên nhi thế hạ.",
        meaningVi: "Phía trước chẳng thấy người xưa, phía sau chưa thấy kẻ tới; nghĩ trời đất bao la vô cùng tận, một mình bùi ngùi rơi lệ.",
        meaningEn: "Behind me I cannot see the ancients; ahead I cannot see those to come. Contemplating endless heaven and earth, alone in sorrow I shed tears."
      }
    },
    "prov-tianjin": {
      commercialAndSupplyChain: {
        historicalGuild: "Thiên Tân Vệ (天津卫) — Cửa ngõ vận tải lương thực Đại Vận Hà Bắc – Nam và Trung tâm Diêm nghiệp Trường Lô minh – thanh.",
        modernClusters: "Cảng nước sâu container lớn hàng đầu miền Bắc, lắp ráp hàng không vũ trụ (Airbus A320), cảng xuất khẩu ô tô & thiết bị năng lượng.",
        hubsAndCorridors: "Cảng Thiên Tân (Tân Hải Tân Khu), hành lang cảng biển cho vùng Kinh–Tân–Ký & Mông Cổ.",
        vietnamAseanLink: "Tuyến hàng hải Bắc – Nam vận chuyển máy móc công nghiệp nặng, thép chế tạo và linh kiện sang Hải Phòng."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Trực Cô Khẩu (直沽口 — Vịnh Hợp Lưu Hải Hà)",
        author: "Cảnh Đạt Thiện / Thơ Tống – Minh Cửa Sông Cô Thủy",
        dynasty: "Thời Minh",
        quoteZh: "九河下梢天津卫，三道浮桥两道关。",
        quoteZhTrad: "九河下梢天津衛，三道浮橋兩道關。",
        pinyin: "Jiǔhé xiàshāo Tiānjīn Wèi, sāndào fúqiáo liǎngdào guān.",
        hanViet: "Cửu hà hạ sao Thiên Tân Vệ, tam đạo phù kiều lưỡng đạo quan.",
        meaningVi: "Nơi cuối nguồn chín nhánh sông đổ biển là Thiên Tân Vệ, ba cây cầu phao nối hai cửa ải trọng yếu.",
        meaningEn: "Where nine rivers meet the sea stands Tianjin Garrison—three pontoon bridges linking twin strategic passes."
      }
    },
    "prov-shanghai": {
      commercialAndSupplyChain: {
        historicalGuild: "Ninh Ba bang & Cảng thị Giang Nam (Thập lục phố 1730–1949) phát triển thành trung tâm ngân hàng hiện đại châu Á.",
        modernClusters: "Trung tâm tài chính quốc tế Lục Gia Chủy, chip bán dẫn Trương Giang (SMIC), xe điện Tesla Gigafactory và thương mại dịch vụ xuyên biên giới.",
        hubsAndCorridors: "Cảng Dương Sơn (cảng container tự động lớn nhất thế giới), sân bay Phố Đông & Hồng Kiều.",
        vietnamAseanLink: "Đầu mối ký kết thanh toán quốc tế L/C, tài chính RMB xuyên biên giới và chuỗi logistics biển nối Hải Phòng – Cát Lái."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Hải Thượng Phồn Hoa Ca / Phổ Đông Phố Giang Ca",
        author: "Hoàng Tuân Hiến (黄遵宪) / Văn học Hải Phái",
        dynasty: "Cuối Thanh (Thế kỷ XIX)",
        quoteZh: "海到无边天作岸，山登绝顶我为峰。",
        quoteZhTrad: "海到無邊天作岸，山登絕頂我為峰。",
        pinyin: "Hǎi dào wúbiān tiān zuò àn, shān dēng juédǐng wǒ wéi fēng.",
        hanViet: "Hải đáo vô biên thiên tác ngạn, sơn đăng tuyệt đỉnh ngã vi phong.",
        meaningVi: "Ra tới biển rộng vô biên thì chân trời là bờ bến; leo lên đỉnh núi cao nhất thì chính mình là ngọn đỉnh.",
        meaningEn: "Where the boundless ocean ends, the sky forms the shore; ascending the summit, I stand as the peak."
      }
    },
    "prov-chongqing": {
      commercialAndSupplyChain: {
        historicalGuild: "Du Thương (渝商 — Thương nhân bến cảng Trường Giang – Gia Lăng Giang) nắm mạch vận chuyển muối Tứ Xuyên, thuốc bắc và đồng tử.",
        modernClusters: "Trung tâm sản xuất máy tính xách tay toàn cầu, ô tô Trường An – Seres và cực phía Tây của Hành lang Lục địa – Hải Tân.",
        hubsAndCorridors: "Hành lang Lục – Hải Mới (西部陆海新通道): tàu liên vận sắt–biển nối Trùng Khánh thẳng xuống cảng Khâm Châu (Quảng Tây) và đường sắt qua Việt Nam.",
        vietnamAseanLink: "Trục đường sắt quốc tế trực tiếp vận chuyển phụ tùng điện tử, nguyên phụ liệu và nông sản nhiệt đới ASEAN ngược lên Tây Nam Trung Quốc."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Dạ Vũ Ký Bắc (夜雨寄北 — Đêm Mưa Ba Thục Gửi Phương Bắc)",
        author: "Lý Thương Ẩn (李商隐)",
        dynasty: "Vãn Đường (Thế kỷ IX)",
        quoteZh: "君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。",
        quoteZhTrad: "君問歸期未有期，巴山夜雨漲秋池。何當共剪西窗燭，卻話巴山夜雨時。",
        pinyin: "Jūn wèn guīqī wèi yǒu qī, Bāshān yèyǔ zhǎng qiūchí. Hédāng gòng jiǎn xīchuāng zhú, quèhuà Bāshān yèyǔ shí.",
        hanViet: "Quân vấn quy kỳ vị hữu kỳ, Ba Sơn dạ vũ trướng thu trì. Hà đương cộng tiễn tây song chúc, khước thoại Ba Sơn dạ vũ thời.",
        meaningVi: "Người hỏi ngày về vẫn chưa hẹn kỳ; mưa đêm núi Ba Thục dâng đầy ao thu. Bao giờ cùng nhau khêu bấc đèn bên cửa sổ phía Tây, kể lại chuyện đêm mưa núi Ba thuở ấy.",
        meaningEn: "You ask when I return—no date is set; night rain on Mount Ba swells the autumn pond. When shall we trim the candle by the western window and reminisce of this rainy night in Ba?"
      }
    },
    "prov-hebei": {
      commercialAndSupplyChain: {
        historicalGuild: "Ký Thương (冀商) tại Trương Gia Khẩu & Bảo Định — trạm trung chuyển trà và lông thú xuyên Mông Cổ (Con đường Trà Vạn Lý).",
        modernClusters: "Công nghiệp luyện kim xanh Đường Sơn, cụm dược phẩm Thạch Gia Trang, logistics Hùng An Tân Khu (雄安新区) và năng lượng sạch Trương Gia Khẩu.",
        hubsAndCorridors: "Vành đai Kinh–Tân–Ký, cảng Hoàng Hoa – Tần Hoàng Đảo, cao tốc và đường sắt hướng Bắc Kinh.",
        vietnamAseanLink: "Nguồn cung thép hợp kim, vật liệu xây dựng và máy biến áp phục vụ công nghiệp chế tạo miền Bắc Việt Nam."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Quan Thương Hải (观沧海 — Ngắm Biển Tại Yết Thạch Sơn, Tần Hoàng Đảo)",
        author: "Tào Tháo (曹操)",
        dynasty: "Cuối Đông Hán (207 SCN)",
        quoteZh: "日月之行，若出其中；星汉灿烂，若出其里。",
        quoteZhTrad: "日月之行，若出其中；星漢燦爛，若出其裡。",
        pinyin: "Rìyuè zhī xíng, ruò chū qízhōng; xīnghàn cànlàn, ruò chū qí lǐ.",
        hanViet: "Nhật nguyệt chi hành, nhược xuất kỳ trung; tinh hán xán lạn, nhược xuất kỳ lý.",
        meaningVi: "Mặt trời mặt trăng vận hành dường như mọc ra từ lòng biển ấy; dải Ngân Hà lấp lánh cũng như trào ra từ bên trong.",
        meaningEn: "Sun and moon revolve as if rising from within the sea; the brilliant Milky Way seems born from its depths."
      }
    },
    "prov-shanxi": {
      commercialAndSupplyChain: {
        historicalGuild: "Tấn Thương (晋商 — Đứng đầu Thập đại Thương bang) với ngân hàng chuyển ngân Phiếu hiệu Nhật Thăng Xương tại Bình Dao (1823) và tuyến buôn Trà sang Nga.",
        modernClusters: "Trụ cột năng lượng than sạch, hợp kim titan – thép không gỉ Thái Nguyên (TISCO) và du lịch di sản Kiến trúc cổ – Thạch quật Vân Cương.",
        hubsAndCorridors: "Ga Thái Nguyên Nam, mạng lưới đường sắt vận chuyển năng lượng Bắc Trung Quốc.",
        vietnamAseanLink: "Bài học thể chế 'Ngân cổ – Thân cổ' trong lịch sử quản trị doanh nghiệp và giao thương nguyên liệu công nghiệp nặng."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Đăng Quán Tước Lâu (登鹳雀楼 — Lên Lầu Quán Tước ở Vĩnh Tế, Sơn Tây)",
        author: "Vương Chi Hoán (王之涣)",
        dynasty: "Thịnh Đường",
        quoteZh: "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。",
        quoteZhTrad: "白日依山盡，黃河入海流。欲窮千里目，更上一層樓。",
        pinyin: "Bái rì yī shān jìn, Huáng Hé rù hǎi liú. Yù qióng qiānlǐ mù, gèng shàng yī céng lóu.",
        hanViet: "Bạch nhật y sơn tận, Hoàng Hà nhập hải lưu. Dục cùng thiên lý mục, cánh thượng nhất tằng lâu.",
        meaningVi: "Mặt trời trắng lặn sau dãy núi Trung Điều, sông Hoàng Hà cuộn chảy ra biển lớn; muốn nhìn thấu cõi xa ngàn dặm, phải bước thêm lên một tầng lầu nữa.",
        meaningEn: "The white sun sets behind the mountains; the Yellow River surges into the sea. To command a thousand-mile vista, climb one story higher."
      }
    },
    "prov-liaoning": {
      commercialAndSupplyChain: {
        historicalGuild: "Thẩm Dương – Dinh Khẩu (Mãn Châu khai cảng sớm) thương hội buôn đậu nành, nhân sâm và nông sản vùng Đông Bắc.",
        modernClusters: "'Cái nôi Công nghiệp nặng' Trung Quốc: máy công cụ CNC Thẩm Dương, đóng tàu nước sâu Đại Liên, robot tự động hóa (SIASUN) và lọc hóa dầu.",
        hubsAndCorridors: "Cảng Đại Liên & Dinh Khẩu — cửa ngõ hàng hải duy nhất vùng Đông Bắc Trung Quốc nối Thái Bình Dương.",
        vietnamAseanLink: "Cung ứng máy công cụ, thiết bị nhà máy, thép chế tạo và linh kiện công nghiệp cơ khí chính xác cho Việt Nam."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Yến Sơn Lĩnh Hạ Thẩm Dương Hiên (Hoàng thành Cố cung Thẩm Dương)",
        author: "Cố Viêm Vũ / Thi nhân Minh Thanh vùng Liêu Đông",
        dynasty: "Minh – Thanh",
        quoteZh: "白山黑水连辽海，盛京宫阙映朝霞。",
        quoteZhTrad: "白山黑水連遼海，盛京宮闕映朝霞。",
        pinyin: "Báishān Hēishuǐ lián Liáohǎi, Shèngjīng gōngquè yìng zhāoxiá.",
        hanViet: "Bạch Sơn Hắc Thủy liên Liêu Hải, Thịnh Kinh cung khuyết ánh triều hà.",
        meaningVi: "Núi Trường Bạch sông Hắc Long nối ra biển Liêu Đông, cung điện Thịnh Kinh rực rỡ trong ráng hồng buổi sớm.",
        meaningEn: "White Mountains and Black Waters join the Liaodong Sea; Shengjing's palace spires glow in morning dawn."
      }
    },
    "prov-jilin": {
      commercialAndSupplyChain: {
        historicalGuild: "Mạng lưới thu mua dược liệu quý vùng Trường Bạch Sơn (Nhân sâm, Nhung hươu) và gỗ thông xuất theo sông Tùng Hoa.",
        modernClusters: "Kinh đô Ô tô Trường Xuân (Tập đoàn FAW Hồng Kỳ — nhà máy ô tô đầu tiên Trung Quốc), tàu cao tốc CRRC và vệ tinh thương mại Cát Lâm 1.",
        hubsAndCorridors: "Cửa khẩu Hồn Xuân kết nối Đông Bắc Á & đường sắt cao tốc Cáp Nhĩ Tân – Đại Liên.",
        vietnamAseanLink: "Hợp tác lắp ráp phương tiện vận tải thương mại, nông sản ngô/gỗ và chế biến dược liệu nhân sâm Đông Bắc."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Trường Bạch Sơn Ca (长白山吟)",
        author: "Từ Lan / Du ký Trường Bạch Sơn thời Thanh",
        dynasty: "Đời Thanh",
        quoteZh: "松花江水清如玉，长白山巅雪似云。",
        quoteZhTrad: "松花江水清如玉，長白山巔雪似雲。",
        pinyin: "Sōnghuā Jiāng shuǐ qīng rú yù, Chángbái Shān diān xuě sì yún.",
        hanViet: "Tùng Hoa Giang thủy thanh như ngọc, Trường Bạch Sơn điên tuyết tự vân.",
        meaningVi: "Nước sông Tùng Hoa trong xanh như ngọc biếc, tuyết phủ đỉnh núi Trường Bạch trắng tựa mây ngàn.",
        meaningEn: "Songhua River waters clear as green jade; snow upon Changbai Peak white as drifting clouds."
      }
    },
    "prov-heilongjiang": {
      commercialAndSupplyChain: {
        historicalGuild: "Trạm biên mậu Á–Âu Cáp Nhĩ Tân & Hắc Hà: giao lưu thương nhân Hoa – Nga đầu thế kỷ XX qua đường sắt Trung Đông.",
        modernClusters: "'Vựa lương thực số 1 Trung Quốc' (gạo Ngũ Thường, đậu tương), thiết bị phát điện thủy–nhiệt điện Cáp Nhĩ Tân và du lịch băng tuyết.",
        hubsAndCorridors: "Cửa khẩu Tuy Phân Hà & Đồng Giang nối liền hành lang Á–Âu Siberia.",
        vietnamAseanLink: "Giao thương thiết bị điện công suất lớn (Cáp Nhĩ Tân Electric) và xuất nhập khẩu nông sản đặc sản vùng ôn đới–nhiệt đới."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Đông Bắc Băng Thành Ký (Tùng Hoa Đêm Tuyết)",
        author: "Thi văn Cáp Nhĩ Tân Đương đại",
        dynasty: "Thế kỷ XX",
        quoteZh: "万里冰封松花渡，一城灯火映欧风。",
        quoteZhTrad: "萬里冰封松花渡，一城燈火映歐風。",
        pinyin: "Wànlǐ bīngfēng Sōnghuādù, yì chéng dēnghuǒ yìng Ōufēng.",
        hanViet: "Vạn lý băng phong Tùng Hoa độ, nhất thành đăng hỏa ánh Âu phong.",
        meaningVi: "Muôn dặm băng đóng bến đò Tùng Hoa, ánh đèn thành phố soi rọi nét kiến trúc giao thoa Á – Âu.",
        meaningEn: "Ten thousand miles of ice seal the Songhua crossing; city lights gleam upon Eurasian architecture."
      }
    },
    "prov-jiangsu": {
      commercialAndSupplyChain: {
        historicalGuild: "Thương nhân Động Đình (Tô Châu), Diêm thương Dương Châu & Thuyền buôn Vô Tích — trụ cột kinh tế Giang Nam suốt Đường–Tống–Minh–Thanh.",
        modernClusters: "Quán quân công nghiệp chế tạo cao cấp (Khu Công nghiệp Tô Châu, Vô Tích bán dẫn, Thường Châu pin năng lượng mới, Nam Kinh hóa dầu).",
        hubsAndCorridors: "Cảng nội địa Tô Châu, đường sắt cao tốc Bắc Kinh – Thượng Hải đi qua Nam Kinh – Vô Tích – Tô Châu.",
        vietnamAseanLink: "Nguồn đầu tư FDI trọng yếu của doanh nghiệp dệt nhuộm, bảng mạch PCB và năng lượng mặt trời vào Việt Nam (VSIP & khu công nghiệp Hải Phòng, Bắc Giang)."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Phong Kiều Dạ Bạc (枫桥夜泊 — Đêm Đậu Thuyền Cầu Phong, Tô Châu)",
        author: "Trương Kế (张继)",
        dynasty: "Đời Đường (~756 SCN)",
        quoteZh: "月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。",
        quoteZhTrad: "月落烏啼霜滿天，江楓漁火對愁眠。姑蘇城外寒山寺，夜半鐘聲到客船。",
        pinyin: "Yuèluò wū tí shuāng mǎntiān, jiāngfēng yúhuǒ duì chóumián. Gūsū chéngwài Hánshānsì, yèbàn zhōngshēng dào kèchuán.",
        hanViet: "Nguyệt lạc ô đề sương mãn thiên, giang phong ngư hỏa đối sầu miên. Cô Tô thành ngoại Hàn Sơn Tự, dạ bán chung thanh đáo khách thuyền.",
        meaningVi: "Trăng lặn quạ kêu sương phủ khắp trời; hàng phong ven sông với ánh lửa thuyền chài cùng ta trằn trọc nỗi niềm. Ngoài thành Cô Tô, tiếng chuông chùa Hàn Sơn lúc nửa đêm vọng tận khoang thuyền khách lữ thứ.",
        meaningEn: "Moon sets, crows cry, frost fills the sky; river maples and fishing lamps watch my restless sleep. Beyond Gusu City at Hanshan Temple, the midnight bell drifts across to the traveler's boat."
      }
    },
    "prov-zhejiang": {
      commercialAndSupplyChain: {
        historicalGuild: "Ninh Ba bang (tài chính hàng hải Thượng Hải), Ôn Châu bang ('Người Do Thái phương Đông' khởi nghiệp nhỏ lẻ bền bỉ) và Long Du thương.",
        modernClusters: "Thủ phủ Kinh tế Tư nhân & Kinh tế Số Trung Quốc: Alibaba – Ant Group (Hàng Châu), xe điện Geely, DeepSeek AI (Hàng Châu), và 'Siêu thị Thế giới Nghĩa Ô'.",
        hubsAndCorridors: "Cảng Ninh Ba – Chu Sơn (tổng sản lượng hàng hóa số 1 thế giới), cụm cảng đường sắt 'Nghĩa Tân Âu'.",
        vietnamAseanLink: "Đối tác hàng đầu trong thương mại điện tử xuyên biên giới, nguồn hàng sỉ Nghĩa Ô và dòng vốn đầu tư dệt may – cơ khí Ôn Châu vào Việt Nam."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Ẩm Hồ Thượng Sơ Tình Hậu Vũ (饮湖上初晴后雨 — Ngắm Tây Hồ Hàng Châu)",
        author: "Tô Thức (苏轼)",
        dynasty: "Bắc Tống (1073 SCN)",
        quoteZh: "欲把西湖比西子，淡妆浓抹总相宜。",
        quoteZhTrad: "欲把西湖比西子，淡妝濃抹總相宜。",
        pinyin: "Yù bǎ Xīhú bǐ Xīzǐ, dànzhuāng nóngmǒ zǒng xiāngyí.",
        hanViet: "Dục bả Tây Hồ tỷ Tây Tử, đạm trang nồng mạt tổng tương nghi.",
        meaningVi: "Muốn ví Tây Hồ như nàng Tây Thi: dù trang điểm nhạt hay tô điểm đậm nét lúc nào cũng đẹp hài hòa.",
        meaningEn: "Could West Lake be compared to the beauty Xi Shi—in light makeup or rich adornment, she charms in every light."
      }
    },
    "prov-anhui": {
      commercialAndSupplyChain: {
        historicalGuild: "Huy thương (徽商 — Huệ Châu, Hấp Huyện) nắm giữ đặc quyền muối Lưỡng Hoài, trà Kỳ Môn, mực Huy – giấy Tuyên suốt thời Minh – Thanh.",
        modernClusters: "'Thủ phủ xe điện và hiển thị mới' Hợp Phì (BYD, Chery Vũ Hồ, NIO, BOE, iFLYTEK AI — mô hình Quỹ đầu tư dẫn dắt công nghiệp công nghệ cao).",
        hubsAndCorridors: "Trung tâm vận tải thủy sông Hoài – Trường Giang và trục cao tốc Hợp Phì – Thượng Hải.",
        vietnamAseanLink: "Xuất khẩu xe du lịch thương hiệu Chery/Omoda sang Việt Nam và cung ứng Văn phòng Tứ bảo truyền thống."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Vọng Thiên Môn Sơn (望天门山 — Trông Núi Thiên Môn, Vu Hồ An Huy)",
        author: "Lý Bạch (李白)",
        dynasty: "Thịnh Đường",
        quoteZh: "天门中断楚江开，碧水东流至此回。两岸青山相对出，孤帆一片日边来。",
        quoteZhTrad: "天門中斷楚江開，碧水東流至此回。兩岸青山相對出，孤帆一片日邊來。",
        pinyin: "Tiānmén zhōngduàn Chǔjiāng kāi, bìshuǐ dōngliú zhìcǐ huí. Liǎng'àn qīngshān xiāngduì chū, gūfān yīpiàn rìbiān lái.",
        hanViet: "Thiên Môn trung đoạn Sở Giang khai, bích thủy đông lưu chí thử hồi. Lưỡng ngạn thanh sơn tương đối xuất, cô phàm nhất phiến nhật biên lai.",
        meaningVi: "Núi Thiên Môn tách đôi mở lối cho sông Trường Giang chảy qua; nước biếc xuôi đông tới đây cuộn xoáy. Đôi bờ núi xanh sừng sững đối diện nhau, một cánh buồm lẻ loi từ phía mặt trời lướt tới.",
        meaningEn: "Heaven's Gate splits open for the River Chu; green waters flow east and swirl here. Green peaks rise facing each other along both banks; a lone sail glides in from the horizon of the sun."
      }
    },
    "prov-fujian": {
      commercialAndSupplyChain: {
        historicalGuild: "Mân thương (闽商) — Cảng Thích Đồng Tuyền Châu (Di sản Thế giới UNESCO) và Nguyệt Cảng Chương Châu thống trị hải thương Đông Á.",
        modernClusters: "'Thủ đô Pin Xe Điện Thế Giới' CATL (Ninh Đức), Cụm Giày Thể Thao Tấn Giang (Anta, Xtep), gốm trắng Đức Hóa và trà Ô Long Thiết Quan Âm.",
        hubsAndCorridors: "Cảng Hạ Môn, Cảng Tuyền Châu, Vịnh Tam Đô Áo nối trực tiếp Biển Đông.",
        vietnamAseanLink: "Nguồn gốc lịch sử của Hội quán Phúc Kiến tại Hội An – Chợ Lớn, kết nối chuỗi dệt may giày dép và linh kiện pin năng lượng mới."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Trình Tam Dương / Tuyền Châu Cảng Thích Đồng (刺桐花开)",
        author: "Văn hiến Mân Nam & Chu Hy giảng học tại Vũ Di Sơn",
        dynasty: "Nam Tống",
        quoteZh: "半亩方塘一鉴开，天光云影共徘徊。问渠那得清如许？为有源头活水来。",
        quoteZhTrad: "半畝方塘一鑑開，天光雲影共徘徊。問渠那得清如許？為有源頭活水來。",
        pinyin: "Bànmǔ fāngtáng yī jiàn kāi, tiānguāng yúnyǐng gòng páihuái. Wèn qú nǎ dé qīng rúxǔ? Wèi yǒu yuántóu huóshuǐ lái.",
        hanViet: "Bán mẫu phương đường nhất giám khai, thiên quang vân ảnh cộng bồi hồi. Vấn cừ na đắc thanh như hứa? Vị hữu nguyên đầu hoạt thủy lai.",
        meaningVi: "Nửa mẫu ao vuông phẳng lặng mở ra như tấm gương soi, ánh trời và bóng mây cùng nhau lững lờ in đáy nước. Hỏi dòng nước kia sao lại trong trẻo đến thế? Bởi luôn có mạch nguồn nước sống từ đầu nguồn chảy tới không ngừng.",
        meaningEn: "A half-acre square pond opens like a mirror, sky light and cloud shadows drifting within. Ask how the water stays so crystal clear? Because living water flows endlessly from the source."
      }
    },
    "prov-jiangxi": {
      commercialAndSupplyChain: {
        historicalGuild: "Giang Hữu thương (江右商帮 — Minh Thanh) nổi danh 'Vô Giang Hữu bất thành thị', buôn sứ Cảnh Đức Trấn, trà, giấy và sách.",
        modernClusters: "Kinh đô Gốm sứ Nghệ thuật Cảnh Đức Trấn, tinh luyện đồng lớn nhất châu Á (Cám Châu – Ưng Đàm), đất hiếm và công nghiệp hàng không Nam Xương.",
        hubsAndCorridors: "Hành lang đường sắt cao tốc Kinh–Cửu (Bắc Kinh – Nam Xương – Thâm Quyến/Cửu Long) & cảng sông Trường Giang Cửu Giang.",
        vietnamAseanLink: "Đối chiếu lịch sử kỹ nghệ men lam Cảnh Đức Trấn – Chu Đậu và hợp tác chế biến vật liệu đất hiếm công nghệ sạch."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Đằng Vương Các Tự (滕王阁序 — Bài Tựa Gác Đằng Vương, Nam Xương)",
        author: "Vương Bột (王勃)",
        dynasty: "Sơ Đường (675 SCN)",
        quoteZh: "落霞与孤鹜齐飞，秋水共长天一色。",
        quoteZhTrad: "落霞與孤鶩齊飛，秋水共長天一色。",
        pinyin: "Luòxiá yǔ gūwù qífēi, qiūshuǐ gòng chángtiān yīsè.",
        hanViet: "Lạc hà dữ cô vụ tề phi, thu thủy cộng trường thiên nhất sắc.",
        meaningVi: "Ráng chiều rơi lả tả cùng cánh cò lẻ loi sóng bước bay lên; dòng nước thu hòa cùng bầu trời bao la thành một sắc biếc.",
        meaningEn: "Setting sunset clouds and a lone wild duck fly side by side; autumn waters merge with the boundless sky in a single hue."
      }
    },
    "prov-shandong": {
      commercialAndSupplyChain: {
        historicalGuild: "Lỗ thương (鲁商) tại Chu Thôn (nơi khởi phát 'Thụy Phù Tường'), Tế Nam và Thanh Đảo — kinh doanh tơ lụa trọng chữ Nghĩa.",
        modernClusters: "Trung tâm kinh tế biển Thanh Đảo (Haier, Hisense, Bia Thanh Đảo), nông nghiệp thông minh Duy Phường, cảng Thanh Đảo – Nhật Chiếu.",
        hubsAndCorridors: "Cảng Thanh Đảo & Yên Đài hướng ra Hoàng Hải, trục đường sắt Giao Tế nối Nội địa.",
        vietnamAseanLink: "Thương hiệu gia dụng Haier/Casper-chuỗi cung ứng và tuyến container Thanh Đảo – Hải Phòng rất nhộn nhịp."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Vọng Nhạc (望岳 — Ngắm Núi Thái Sơn)",
        author: "Đỗ Phủ (杜甫)",
        dynasty: "Thịnh Đường (736 SCN)",
        quoteZh: "会当凌绝顶，一览众山小。",
        quoteZhTrad: "會當凌絕頂，一覽眾山小。",
        pinyin: "Huìdāng líng juédǐng, yīlǎn zhòngshān xiǎo.",
        hanViet: "Hội đương lăng tuyệt đỉnh, nhất lãm chúng sơn tiểu.",
        meaningVi: "Nhất định sẽ có ngày bước lên tới đỉnh cao nhất của Thái Sơn, phóng tầm mắt nhìn xuống thấy muôn dãy núi đều nhỏ bé cả.",
        meaningEn: "One day I shall stand upon the highest summit and, in a single sweeping glance, see all other peaks grow small."
      }
    },
    "prov-henan": {
      commercialAndSupplyChain: {
        historicalGuild: "Dự thương (豫商 — Biện Kinh Khai Phong kinh đô thương mại thị dân Bắc Tống ghi trong *Thanh Minh Thượng Hà Đồ*).",
        modernClusters: "'Phố Lắp Ráp iPhone Thế Giới' (Khu kinh tế Sân bay Trịnh Châu), trung tâm logistics đường sắt Á–Âu nội địa, công nghiệp kim cương nhân tạo và thực phẩm.",
        hubsAndCorridors: "Nút giao sắt cao tốc hình chữ 'Mễ' tại Trịnh Châu nối 8 hướng Bắc – Nam – Đông – Tây Trung Quốc.",
        vietnamAseanLink: "Trung tâm trung chuyển hàng không điện tử giữa Trịnh Châu, Bắc Ninh và Thái Nguyên."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Khách Chí / Thi Ca Lạc Dương Đông Đô (洛阳春思)",
        author: "Bạch Cư Dị / Lưu Hy Di",
        dynasty: "Đời Đường",
        quoteZh: "年年岁岁花相似，岁岁年年人不同。",
        quoteZhTrad: "年年歲歲花相似，歲歲年年人不同。",
        pinyin: "Niánnián suìsuì huā xiāngsì, suìsuì niánnián rén bùtóng.",
        hanViet: "Niên niên tuế tuế hoa tương tự, tuế tuế niên niên nhân bất đồng.",
        meaningVi: "Năm này qua năm khác hoa nở vẫn giống nhau như xưa, chỉ có con người đi qua năm tháng là đổi thay không còn như trước.",
        meaningEn: "Year after year the blossoms look the same; year after year the people gazing at them are no longer the same."
      }
    },
    "prov-hubei": {
      commercialAndSupplyChain: {
        historicalGuild: "'Hán Khẩu Cửu Tỉnh Thông Cù' (汉口九省通衢) — trạm gom và đấu giá Trà Vạn Lý (trà gạch Dương Lâu Động) trước khi đưa lên phương Bắc.",
        modernClusters: "'Thung lũng Quang học Trung Quốc' (Vũ Hán Optics Valley — sợi quang, laser, chip nhớ YMTC) và cụm công nghiệp ô tô Đông Phong.",
        hubsAndCorridors: "Đập Tam Hiệp & cảng sông nước sâu Vũ Hán cho phép tàu 10.000 tấn đi thẳng ra biển Đông Hải.",
        vietnamAseanLink: "Hợp tác giáo dục đại học (Đại học Vũ Hán) và chuỗi thiết bị quang điện tử – viễn thông."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Hoàng Hạc Lâu (黄鹤楼 — Đứng Trên Lầu Hoàng Hạc Vũ Hán)",
        author: "Thôi Hiệu (崔颢)",
        dynasty: "Thịnh Đường",
        quoteZh: "晴川历历汉阳树，芳草萋萋鹦鹉洲。日暮乡关何处是？烟波江上使人愁。",
        quoteZhTrad: "晴川歷歷漢陽樹，芳草萋萋鸚鵡洲。日暮鄉關何處是？煙波江上使人愁。",
        pinyin: "Qíngchuān lìlì Hànyáng shù, fāngcǎo qīqī Yīngwǔzhōu. Rìmù xiāngguān héchù shì? Yānbō jiāngshàng shǐ rén chóu.",
        hanViet: "Tình xuyên lịch lịch Hán Dương thụ, phương thảo thê thê Anh Vũ châu. Nhật mộ hương quan hà xứ thị? Yên ba giang thượng sử nhân sầu.",
        meaningVi: "Nắng chiếu rõ từng hàng cây bên Hán Dương, cỏ thơm mọc um tùm trên bãi Anh Vũ; trời chiều tà rồi quê hương phương nào? Khói sóng trên mặt sông Trường Giang khiến lòng khách buồn mênh mang.",
        meaningEn: "On sunlit shores stand clear the trees of Hanyang; fragrant grasses thrive green on Parrot Islet. At dusk, where is my homeland? Mist and waves upon the river fill the heart with longing."
      }
    },
    "prov-hunan": {
      commercialAndSupplyChain: {
        historicalGuild: "Tương thương (湘商) tại Trường Sa & Thường Đức, xuất khẩu gạo, trà đen An Hóa và gỗ dầu trẩu dọc sông Tương – Hồ Đỗng Đình.",
        modernClusters: "'Kinh đô Máy Xây dựng Trung Quốc' (SANY, Zoomlion tại Trường Sa), sáng tạo truyền thông văn hóa (Mango TV) và vật liệu pin lithium.",
        hubsAndCorridors: "Đường sắt cao tốc Vũ Hán – Quảng Châu – Thâm Quyến chạy xuyên Trường Sa.",
        vietnamAseanLink: "Cung ứng cần trục, máy xúc công trình (SANY, Zoomlion) cho hạ tầng cao tốc và cảng biển tại Việt Nam."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Nhạc Dương Lâu Ký (岳阳楼记 — Thành Phố Nhạc Dương Hồ Đỗng Đình)",
        author: "Phạm Trọng Yêm (范仲淹)",
        dynasty: "Bắc Tống (1046 SCN)",
        quoteZh: "不以物喜，不以己悲；居庙堂之高则忧其民，处江湖之远则忧其君。",
        quoteZhTrad: "不以物喜，不以己悲；居廟堂之高則憂其民，處江湖之遠則憂其君。",
        pinyin: "Bù yǐ wù xǐ, bù yǐ jǐ bēi; jū miàotáng zhī gāo zé yōu qí mín, chǔ jiānghú zhī yuǎn zé yōu qí jūn.",
        hanViet: "Bất dĩ vật hỷ, bất dĩ kỷ bi; cư miếu đường chi cao tắc ưu kỳ dân, xử giang hồ chi viễn tắc ưu kỳ quân.",
        meaningVi: "Không vì cảnh vật thuận lợi mà mừng rỡ quá mức, chẳng vì nghịch cảnh riêng tư mà bi lụy; ở chốn triều đường cao sang thì lo cho dân, nơi sông hồ xa vắng vẫn bận tâm vận nước.",
        meaningEn: "Neither elated by external gains nor saddened by personal loss; high in court one worries for the people, far in the rivers and lakes one still cares for the realm."
      }
    },
    "prov-guangdong": {
      commercialAndSupplyChain: {
        historicalGuild: "Quảng Châu Thập Tam Hành (1757–1842 — Quảng thương 粤商) độc quyền ngoại thương thanh – tây; Triều thương vùng Sán Đầu – Triều Châu.",
        modernClusters: "Đầu tàu kinh tế 35+ năm liên tiếp số 1 Trung Quốc: Thung lũng phần cứng & AI Thâm Quyến (Huawei, Tencent, BYD, DJI), gia dụng Phật Sơn (Midea), may mặc Quảng Châu.",
        hubsAndCorridors: "Vùng Vịnh Lớn Quảng Đông–HK–Macau, cảng Thâm Quyến – Nam Sa – Quảng Châu.",
        vietnamAseanLink: "Đối tác thương mại cấp tỉnh số 1 của Việt Nam (chiếm tỷ trọng hàng đầu kim ngạch linh kiện điện tử, máy móc và dệt may hai chiều)."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Thực Lệ Chi (食荔枝 — Khi Tô Đông Pha Ở Huệ Châu, Quảng Đông)",
        author: "Tô Thức (苏轼)",
        dynasty: "Bắc Tống (1096 SCN)",
        quoteZh: "日啖荔枝三百颗，不辞长作岭南人。",
        quoteZhTrad: "日啖荔枝三百顆，不辭長作嶺南人。",
        pinyin: "Rì dàn lìzhī sānbǎi kē, bùcí cháng zuò Lǐngnán rén.",
        hanViet: "Nhật đạm lệ chi tam bách khỏa, bất từ trường tác Lĩnh Nam nhân.",
        meaningVi: "Mỗi ngày ăn ba trăm quả vải chín ngọt lành, chẳng nề hà gì chuyện làm người dân đất Lĩnh Nam suốt đời.",
        meaningEn: "Feasting on three hundred lychees a day, I would gladly stay a person of Lingnan forever."
      }
    },
    "prov-hainan": {
      commercialAndSupplyChain: {
        historicalGuild: "Thương cảng Hải Khẩu – Tam Á trạm dừng nước ngọt và mua bán trầm hương, hồ tiêu, dừa trên tuyến hải trình Biển Đông.",
        modernClusters: "Cảng Thương mại Tự do Toàn Đảo (Hainan Free Trade Port 2025–2026) miễn thuế quan, trung tâm hàng không vũ trụ Văn Xương và du lịch nhiệt đới.",
        hubsAndCorridors: "Cảng Dương Phố trung chuyển vận tải biển Biển Đông kết nối Vịnh Bắc Bộ Việt Nam.",
        vietnamAseanLink: "Chia sẻ vùng vịnh Bắc Bộ – Biển Đông, giao lưu hải sản, cao su, cà phê và hợp tác cảng tự do ASEAN."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Lục Nguyệt Nhị Thập Nhật Dạ Độ Hải (六月二十日夜渡海 — Rời Đam Châu Hải Nam)",
        author: "Tô Thức (苏轼)",
        dynasty: "Bắc Tống (1100 SCN)",
        quoteZh: "九死南荒吾不恨，兹游奇绝冠平生。",
        quoteZhTrad: "九死南荒吾不恨，茲游奇絕冠平生。",
        pinyin: "Jiǔ sǐ nánhuāng wú bùhèn, zī yóu qíjué guàn píngshēng.",
        hanViet: "Cửu tử nam hoang ngô bất hận, tư du kỳ tuyệt quán bình sinh.",
        meaningVi: "Dẫu chín phần chết nơi biên viễn phương Nam ta chẳng hề hận trách; chuyến đi đầy sóng gió này lại là trải nghiệm kỳ vĩ nhất cả cuộc đời.",
        meaningEn: "Nine deaths in the wild southern frontier hold no regret for me; this voyage remains the grandest marvel of my life."
      }
    },
    "prov-sichuan": {
      commercialAndSupplyChain: {
        historicalGuild: "Xuyên thương (川商) phát minh tiền giấy đầu tiên thế giới **Giao Tử (交子)** tại Thành Đô năm 1024; tuyến Trà Mã Cổ Đạo lên Tây Tạng.",
        modernClusters: "Trung tâm hàng không vũ trụ Thành Đô – Miên Dương, chip đóng gói Intel Thành Đô, thủy điện lớn nhất Trung Quốc và rượu Bạch tửu (Ngũ Lương Dịch).",
        hubsAndCorridors: "Sân bay Thiên Phủ, vòng kinh tế Thành Đô – Trùng Khánh nối trục Tây Nam xuống Vịnh Bắc Bộ.",
        vietnamAseanLink: "Thị trường lớn cho nông sản nhiệt đới Việt Nam qua Hành lang Lục–Hải và du lịch di sản Tam Quốc – Cửu Trại Câu."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Xuân Dạ Hỉ Vũ (春夜喜雨 — Thành Đô Thảo Đường Đỗ Phủ)",
        author: "Đỗ Phủ (杜甫)",
        dynasty: "Đời Đường (761 SCN)",
        quoteZh: "好雨知时节，当春乃发生。随风潜入夜，润物细无声。",
        quoteZhTrad: "好雨知時節，當春乃發生。隨風潛入夜，潤物細無聲。",
        pinyin: "Hǎoyǔ zhī shíjié, dāng chūn nǎi fāshēng. Suí fēng qián rù yè, rùnwù xì wúshēng.",
        hanViet: "Hảo vũ tri thời tiết, đương xuân nãi phát sinh. Tùy phong tiềm nhập dạ, nhuận vật tế vô thanh.",
        meaningVi: "Cơn mưa lành biết đúng tiết mùa, vừa sang xuân liền tưới tắm sinh sôi; lặng lẽ theo gió vào màn đêm, thấm nhuần muôn vật êm ái không một tiếng động.",
        meaningEn: "Good rain knows its season; right in spring it comes to nurture life. Slipping quietly into the night on the wind, it moistens all things silently."
      }
    },
    "prov-guizhou": {
      commercialAndSupplyChain: {
        historicalGuild: "Kiềm thương (黔商) buôn muối từ Tứ Xuyên – Quảng Đông qua các con đường mòn cao nguyên Karst và thủy ngân – chu sa.",
        modernClusters: "'Thung lũng Big Data Quốc gia' Quý Dương (trung tâm máy chủ đám mây Apple, Huawei, Tencent nhờ khí hậu mát mẻ và thủy điện rẻ) cùng Đế chế Mao Đài.",
        hubsAndCorridors: "Mạng lưới cầu dây văng cao nhất thế giới nối liền hành lang Thành Đô – Quý Dương – Quế Lâm – Quảng Châu.",
        vietnamAseanLink: "Kết nối cao tốc & đường sắt đi thẳng xuống cửa ngõ Quảng Tây hướng về cảng Hải Phòng và Lạng Sơn."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Văn Vương Xương Linh Tả Thiên Long Tiêu Diêu Hữu Thử Ký (闻王昌龄左迁龙标遥有此寄)",
        author: "Lý Bạch (李白 — gửi bạn đi đày Long Tiêu / Kiềm Đông)",
        dynasty: "Thịnh Đường",
        quoteZh: "我寄愁心与明月，随君直到夜郎西。",
        quoteZhTrad: "我寄愁心與明月，隨君直到夜郎西。",
        pinyin: "Wǒ jì chóuxīn yǔ míngyuè, suí jūn zhídào Yèláng xī.",
        hanViet: "Ngã ký sầu tâm dữ minh nguyệt, tùy quân trực đáo Dạ Lang tây.",
        meaningVi: "Ta gửi tấm lòng buồn nhớ bạn cho vầng trăng sáng, để ánh trăng theo bước chân bạn tới tận phía tây đất Dạ Lang (Quý Châu cổ).",
        meaningEn: "I entrust my sorrowful heart to the bright moon, to follow you all the way west of Yelang."
      }
    },
    "prov-yunnan": {
      commercialAndSupplyChain: {
        historicalGuild: "Điền thương (滇商) dẫn đoàn ngựa thồ qua Con đường Trà Mã Cổ Đạo và tuyến đường sắt Điền–Việt (Côn Minh – Lào Cai – Hải Phòng 1910).",
        modernClusters: "Thủ phủ hoa tươi châu Á (Chợ đấu giá hoa Đấu Nam Côn Minh), trà Phổ Nhĩ, cà phê Phổ Nhĩ, đồng – thiếc và thủy điện xanh.",
        hubsAndCorridors: "Cửa khẩu Hà Khẩu – Lào Cai, hành lang Côn Minh – Lào Cai – Hà Nội – Hải Phòng.",
        vietnamAseanLink: "Tỉnh giáp biên giới trực tiếp miền Tây Bắc Việt Nam; trục đường sắt khổ chuẩn mới và thương mại hoa quả – điện năng – khoáng sản hai chiều."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Đại Quan Lâu Trường Liên (大观楼长联 — Côn Minh Điên Trì, 180 chữ đệ nhất thiên hạ trường liên)",
        author: "Tôn Nhiêm Ông (孙髯翁)",
        dynasty: "Đời Thanh Càn Long",
        quoteZh: "五百里滇池，奔来眼底，披襟岸帻，喜茫茫空阔无边。",
        quoteZhTrad: "五百里滇池，奔來眼底，披襟岸帻，喜茫茫空闊無邊。",
        pinyin: "Wǔbǎi lǐ Diānchí, bēnlái yǎndǐ, pījīn ànzé, xǐ mángmáng kōngkuò wúbiān.",
        hanViet: "Ngũ bách lý Điên Trì, bôn lai nhãn để, phi khâm ngạn trách, hỷ mang mang không khoát vô biên.",
        meaningVi: "Năm trăm dặm hồ Điên Trì ùa vào đáy mắt, phanh vạt áo ngẩng mũ khăn lên, hân hoan trước cõi trời nước mênh mông không bờ bến.",
        meaningEn: "Five hundred miles of Lake Dianchi rush before the eyes; loosening collar and cap, rejoicing in the boundless expanse."
      }
    },
    "prov-shaanxi": {
      commercialAndSupplyChain: {
        historicalGuild: "Thiểm thương (陕商) — Thương bang cổ nhất phương Bắc, buôn muối vùng Hà Đông, ngựa – tơ lụa từ Trường An dọc hành lang Hà Tây sang Tây Vực.",
        modernClusters: "Trung tâm hàng không vũ trụ (hơn 30% động cơ tên lửa và máy bay C919 tại Tây An), bán dẫn Samsung – Micron, pin mặt trời Longi Green Energy.",
        hubsAndCorridors: "Cảng lục địa Quốc tế Tây An (điểm khởi phát tàu chở hàng Trung – Âu Trường An Express).",
        vietnamAseanLink: "Di sản giao lưu Phật giáo – Thiền học từ Trường An cổ và hợp tác chế biến năng lượng mặt trời."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Đăng Nhạn Tháp / Trường An Cổ Ý (登慈恩寺塔 hoặc Lạc Du Nguyên)",
        author: "Lý Thương Ẩn (李商隐 — Lạc Du Nguyên, Tây An)",
        dynasty: "Vãn Đường",
        quoteZh: "向晚意不适，驱车登古原。夕阳无限好，只是近黄昏。",
        quoteZhTrad: "向晚意不適，驅車登古原。夕陽無限好，只是近黃昏。",
        pinyin: "Xiàngwǎn yì bùshì, qūchē dēng gǔyuán. Xīyáng wúxiàn hǎo, zhǐshì jìn huánghūn.",
        hanViet: "Hướng vãn ý bất thích, khu xa đăng cổ nguyên. Tịch dương vô hạn hảo, chỉ thị cận hoàng hôn.",
        meaningVi: "Chiều muộn lòng chẳng khuây khỏa, đánh xe lên gò đất cổ Lạc Du Nguyên; ánh dương chiều đẹp vô ngần, chỉ tiếc là đã gần tới lúc hoàng hôn.",
        meaningEn: "Restless toward evening, I drive up the ancient plain; the setting sun is endlessly beautiful—only so near to dusk."
      }
    },
    "prov-gansu": {
      commercialAndSupplyChain: {
        historicalGuild: "Thương đội Lạc đà Con đường Tơ lụa qua Lan Châu – Trương Dịch – Đôn Hoàng suốt hai thiên niên kỷ.",
        modernClusters: "Cụm điện gió & quang điện khổng lồ Tửu Tuyền ('Tam Hiệp Gió trên Cạn'), niken – coban Kim Xương và hóa dầu Lan Châu.",
        hubsAndCorridors: "Hành lang Hà Tây (河西走廊) cổ họng giao thông duy nhất nối Trung Nguyên vào Tân Cương – Trung Á.",
        vietnamAseanLink: "Bảo tồn di sản Nghệ thuật Phật giáo hang đá Đôn Hoàng đối chiếu với điêu khắc hang động và chùa cổ Việt Nam."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Lương Châu Từ (凉州词 — Biên Tái Vũ Uy / Hành lang Hà Tây)",
        author: "Vương Hàn (王翰) / Vương Chi Hoán",
        dynasty: "Thịnh Đường",
        quoteZh: "葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回。",
        quoteZhTrad: "葡萄美酒夜光杯，欲飲琵琶馬上催。醉臥沙場君莫笑，古來征戰幾人回。",
        pinyin: "Pútáo měijiǔ yèguāngbēi, yù yǐn pípá mǎshàng cuī. Zuì wò shāchǎng jūn mòxiào, gǔlái zhēngzhàn jǐrén huí.",
        hanViet: "Bồ đào mỹ tửu dạ quang bôi, dục ẩm tỳ bà mã thượng thôi. Túy ngọa sa trường quân mạc tiếu, cổ lai chinh chiến kỷ nhân hồi.",
        meaningVi: "Rượu nho thơm lừng chén ngọc Dạ Quang, vừa định nhấp môi tiếng đàn tỳ bà trên lưng ngựa đã giục giã; say gục giữa bãi cát chiến trường xin người chớ cười, xưa nay ra trận mấy ai trở về.",
        meaningEn: "Fine grape wine in luminous jade cups; as we raise to drink, the pipa urges from horseback. Laugh not if we lie drunk on the desert field—how many soldiers of old ever returned?"
      }
    },
    "prov-qinghai": {
      commercialAndSupplyChain: {
        historicalGuild: "Chợ trao đổi Trà – Ngựa (Trà Mã Hổ Thị) giữa thương nhân Hán – Tạng – Hồi vùng Tây Ninh & Thanh Hải Hồ.",
        modernClusters: "Thủ phủ Lithium – Muối Kali (Sát Nhĩ Hãn Salt Lake) cung ứng nguyên liệu pin xe điện và căn cứ năng lượng sạch mặt trời – thủy điện thượng nguồn Hoàng Hà.",
        hubsAndCorridors: "Đường sắt Thanh – Tạng (Tây Ninh – Lhasa) và trục Hành lang Tây Bắc.",
        vietnamAseanLink: "Nguồn nguyên liệu thô muối lithium cho chuỗi pin năng lượng mới khu vực Đông Á."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Tòng Quân Hành (从军行 — Vùng Thanh Hải Hồ)",
        author: "Vương Xương Linh (王昌龄)",
        dynasty: "Thịnh Đường",
        quoteZh: "青海长云暗雪山，孤城遥望玉门关。",
        quoteZhTrad: "青海長雲暗雪山，孤城遙望玉門關。",
        pinyin: "Qīnghǎi chángyún àn xuěshān, gūchéng yáowàng Yùménguān.",
        hanViet: "Thanh Hải trường vân ám tuyết sơn, cô thành dao vọng Ngọc Môn Quan.",
        meaningVi: "Mây dài trên hồ Thanh Hải che mờ dãy núi tuyết Kỳ Liên; từ tòa thành lẻ loi phóng mắt trông xa về cửa ải Ngọc Môn.",
        meaningEn: "Long clouds over Qinghai Lake darken the snow mountains; a lonely fortress gazes afar toward Jade Gate Pass."
      }
    },
    "prov-taiwan": {
      commercialAndSupplyChain: {
        historicalGuild: "Giao thương Lục Cảng – Phủ Thành (Đài Nam) và thương hội Lộc Cảng kết nối thuyền Mân Nam suốt thế kỷ XVII–XIX.",
        modernClusters: "Hạt nhân công nghệ bán dẫn tiên tiến nhất thế giới (TSMC tại Tân Trúc – Đài Nam), công nghiệp máy công cụ Đài Trung và trà Ô Long Cao Sơn.",
        hubsAndCorridors: "Cảng Cao Hùng & Sân bay Đào Viên trung chuyển bán dẫn Châu Á – Thái Bình Dương.",
        vietnamAseanLink: "Một trong những nhà đầu tư trực tiếp hàng đầu tại Việt Nam (điện tử, giày da, hóa chất Formosa, và liên kết giáo dục đại học – kỹ thuật số)."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Vọng Ngọc Sơn / Thất Côn Thân Hải Âm",
        author: "Úc Vĩnh Hà (郁永河 — *Tỳ Hải Kỷ Du*, 1697) / Văn hiến Mân–Đài",
        dynasty: "Đời Thanh",
        quoteZh: "沧海有田皆种玉，高山无地不生云。",
        quoteZhTrad: "滄海有田皆種玉，高山無地不生雲。",
        pinyin: "Cānghǎi yǒu tián jiē zhòng yù, gāoshān wú dì bù shēng yún.",
        hanViet: "Thương hải hữu điền giai chủng ngọc, cao sơn vô địa bất sinh vân.",
        meaningVi: "Biển xanh ruộng tốt đâu đâu cũng tựa gieo ngọc quý; núi cao (Ngọc Sơn) không nơi nào chẳng kết mây lành.",
        meaningEn: "Fields beside the azure sea seem planted with fine jade; high peaks everywhere give birth to drifting clouds."
      }
    },
    "prov-inner-mongolia": {
      commercialAndSupplyChain: {
        historicalGuild: "Đại Thịnh Khôi (大盛魁 — Thương hiệu Hồi – Tấn lớn nhất vùng Quy Hóa Thành / Hô Hòa Hạo Đặc) buôn trà sang thảo nguyên Ngoại Mông – Siberia.",
        modernClusters: "Thủ phủ Đất Hiếm toàn cầu (Bao Đầu chiếm tỷ trọng chi phối nguồn cung), công nghiệp sữa hàng đầu châu Á (Yili, Mengniu), điện gió và than hóa dầu Ordos.",
        hubsAndCorridors: "Cửa khẩu Mãn Châu Lý & Nhị Liên Hạo Đặc — cửa ngõ sắt xuyên Mông Cổ đi Nga và châu Âu.",
        vietnamAseanLink: "Nguồn cung sản phẩm sữa – nguyên liệu vật liệu nam châm vĩnh cửu đất hiếm cho công nghiệp xe điện."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Sắc Lặc Ca (敕勒歌 — Dân Ca Thảo Nguyên Bắc Triều Thế Kỷ VI)",
        author: "Khuyết danh (Hộc Luật Kim dịch Hán văn)",
        dynasty: "Bắc Tề (Thế kỷ VI SCN)",
        quoteZh: "天苍苍，野茫茫，风吹草低见牛羊。",
        quoteZhTrad: "天蒼蒼，野茫茫，風吹草低見牛羊。",
        pinyin: "Tiān cāngcāng, yě mángmáng, fēng chuī cǎo dī xiàn niúyáng.",
        hanViet: "Thiên thương thương, dã mang mang, phong xuy thảo đê hiện ngưu dương.",
        meaningVi: "Bầu trời xanh ngắt thăm thẳm, đồng cỏ bao la mênh mông; ngọn gió thổi rạp ngọn cỏ xuống liền hiện ra từng đàn trâu bò cừu trắng.",
        meaningEn: "The sky is vast blue, the steppe stretches endless; when the wind bends the grass low, cattle and sheep appear."
      }
    },
    "prov-guangxi": {
      commercialAndSupplyChain: {
        historicalGuild: "Tuyến thủy vận Kênh Linh Cừ (đào năm 214 TCN) nối thông Trường Giang xuống Tây Giang; Hội quán Quảng Tây – Quảng Đông tại Lạng Sơn – Long Châu.",
        modernClusters: "Trung tâm Chế tạo ô tô & pin Liễu Châu (SAIC-GM-Wuling xe điện đô thị), Cảng biển tự do Vịnh Bắc Bộ (Khâm Châu – Phòng Thành Cảng) và đường sắt thông minh biên giới.",
        hubsAndCorridors: "Cửa khẩu Hữu Nghị Quan (Bằng Tường – Lạng Sơn) & Đông Hưng – Móng Cái; tâm điểm Hội chợ Trung Quốc – ASEAN (CAEXPO Nam Ninh).",
        vietnamAseanLink: "Tỉnh cửa ngõ giao thương đường bộ SỐ 1 của Việt Nam: chiếm tỷ trọng lớn nhất kim ngạch xuất khẩu sầu riêng, thanh long, mít và linh kiện qua Lạng Sơn – Quảng Ninh."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Tống Quế Lâm Nhân / Độc Tú Phong Đề Bích (Quế Lâm Sơn Thủy)",
        author: "Hàn Dũ (韩愈) & Vương Chính Công (王正功)",
        dynasty: "Đường – Nam Tống",
        quoteZh: "桂林山水甲天下，玉碧罗青意可参。",
        quoteZhTrad: "桂林山水甲天下，玉碧羅青意可參。",
        pinyin: "Guìlín shānshuǐ jiǎ tiānxià, yùbì luóqīng yì kě cān.",
        hanViet: "Quế Lâm sơn thủy giáp thiên hạ, ngọc bích la thanh ý khả tham.",
        meaningVi: "Núi sông Quế Lâm đẹp nhất thiên hạ; màu ngọc biếc của nước Ly Giang và sắc lụa xanh của đỉnh đá vôi gợi lên ý cảnh huyền diệu đáng suy ngẫm.",
        meaningEn: "Guilin's mountains and waters rank first under heaven; jade-green rivers and silk-azure peaks invite deep contemplation."
      }
    },
    "prov-tibet": {
      commercialAndSupplyChain: {
        historicalGuild: "Tuyến Trà Mã Cổ Đạo (茶马古道) nối Nhã An – Lệ Giang lên Lhasa suốt hơn 1.300 năm trao đổi trà bánh lấy ngựa chiến & xạ hương.",
        modernClusters: "Du lịch sinh thái – văn hóa cao nguyên, dược liệu Tạng y quý hiếm (Đông trùng hạ thảo, Nghệ tây), thủy điện – năng lượng mặt trời độ cao cực lớn.",
        hubsAndCorridors: "Đường sắt Thanh – Tạng (đường sắt cao nhất thế giới), sân bay Cống Ca Lhasa và mạng lưới Xuyên – Tạng.",
        vietnamAseanLink: "Giao lưu văn hóa Phật giáo Kim Cương thừa Mật Tông và y lý tạng dược truyền thống vùng cao."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Thơ Tuyết Sơn & Đạo Tình Lhasa (Tạng Văn Cổ Thi — Thương Ương Gia Thố)",
        author: "Tsangyang Gyatso (仓央嘉措 — Đạt Lai Lạt Ma đời VI)",
        dynasty: "Đầu thế kỷ XVIII",
        quoteZh: "住进布达拉宫，我是雪域最大的王；流浪在拉萨街头，我是世间最美的情郎。",
        quoteZhTrad: "住進布達拉宮，我是雪域最大的王；流浪在拉薩街頭，我是世間最美的情郎。",
        pinyin: "Zhùjìn Bùdálā Gōng, wǒ shì xuěyù zuìdà de wáng...",
        hanViet: "Trú tiến Bố Đạt La cung, ngã thị tuyết vực tối đại chi vương...",
        meaningVi: "Bước vào Cung điện Potala, ta là vị vương tối cao của miền đất tuyết; dạo bước giữa phố chợ Lhasa, lòng ta mang tiếng hát chân thành nhất của kiếp nhân sinh.",
        meaningEn: "Within the Potala Palace I am the supreme sovereign of the snowy realm; wandering Lhasa's streets I am a devoted soul of the mortal world."
      }
    },
    "prov-ningxia": {
      commercialAndSupplyChain: {
        historicalGuild: "Thương hội Tây Hạ & Trạm ngựa Trung Vệ bên 'Kênh Tần Hán' dẫn nước Hoàng Hà tạo thành ốc đảo lúa gạo giữa sa mạc ('Thiên hạ Hoàng Hà phú Ninh Hạ').",
        modernClusters: "Thủ phủ Rượu Vang Nho Sa mạc Chân Núi Hạ Lan (Ningxia Helan Mountain East Foothills), năng lượng sạch Ninh Đông và điện toán đám mây 'Đông Số Tây Toán'.",
        hubsAndCorridors: "Trục đường sắt Lan Châu – Ngân Xuyên – Bao Đầu kết nối Hành lang Kinh tế Á–Âu.",
        vietnamAseanLink: "Hợp tác nông nghiệp sa mạc hóa và trung tâm giao lưu thực phẩm Halal."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Sứ Chí Tái Thượng (使至塞上 — Đi Sứ Ra Biên Ải Sa Pha Hoàng Hà Vùng Ninh Hạ)",
        author: "Vương Duy (王维)",
        dynasty: "Thịnh Đường (~737 SCN)",
        quoteZh: "大漠孤烟直，长河落日圆。",
        quoteZhTrad: "大漠孤煙直，長河落日圓。",
        pinyin: "Dàmò gūyān zhí, chánghé luòrì yuán.",
        hanViet: "Đại mạc cô yên trực, trường hà lạc nhật viên.",
        meaningVi: "Trên sa mạc mênh mông một cột khói thẳng tắp bốc lên trời; bên dòng sông Hoàng Hà dài vắt ngang mặt trời lặn tròn vành vạnh đỏ rực.",
        meaningEn: "Across the vast desert a single column of smoke rises straight; above the long river the setting sun hangs round."
      }
    },
    "prov-xinjiang": {
      commercialAndSupplyChain: {
        historicalGuild: "Thương đội Túc Đặc (Sogdian) & Uighur trên Con đường Tơ lụa Bắc – Nam (Thổ Lỗ Phiên – Ca Thập – Hòa Điền ngọc bích).",
        modernClusters: "'Lõi Trung Tâm Con Đường Tơ Lụa Lục Địa': Trạm đường sắt Alashankou – Khorgos dẫn hơn 50% tàu hàng Trung–Âu, bông sợi, năng lượng mặt trời – gió và hóa dầu.",
        hubsAndCorridors: "Khu Tự do Thương mại Tân Cương (Urumqi, Kashgar, Khorgos) cửa ngõ trực tiếp đi Kazakhstan & châu Âu.",
        vietnamAseanLink: "Cung ứng bông sợi nguyên liệu cho ngành dệt may Việt Nam và kết nối tuyến đường sắt Á–Âu."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Bạch Tuyết Ca Tống Vũ Phán Quan Quy Kinh (白雪歌送武判官归京 — Vùng Luân Đài Thiên Sơn)",
        author: "Sầm Tham (岑参)",
        dynasty: "Thịnh Đường (754 SCN)",
        quoteZh: "忽如一夜春风来，千树万树梨花开。",
        quoteZhTrad: "忽如一夜春風來，千樹萬樹梨花開。",
        pinyin: "Hū rú yīyè chūnfēng lái, qiānshù wànshù líhuā kāi.",
        hanViet: "Hốt như nhất dạ xuân phong lai, thiên thụ vạn thụ lê hoa khai.",
        meaningVi: "Ngỡ như chỉ qua một đêm gió xuân thổi về, nghìn cây vạn cây bỗng nở rộ hoa lê trắng xóa (tuyết mùa thu rơi kín rừng biên ải Thiên Sơn).",
        meaningEn: "Suddenly, as though a night's spring breeze had come, on a thousand, ten thousand trees, white pear blossoms burst into bloom."
      }
    },
    "prov-hongkong": {
      commercialAndSupplyChain: {
        historicalGuild: "Nam Bắc Hàng & Thương hội Kim Sơn Trang (điều phối vốn, kiều hối và hàng hóa giữa Hoa Nam – Đông Nam Á – Bắc Mỹ từ 1842).",
        modernClusters: "Trung tâm tài chính – IPO quốc tế, trung tâm kết toán Nhân dân tệ ngoài khơi lớn nhất thế giới (Offshore RMB Hub), trọng tài hàng hải và cảng tự do 0% thuế quan.",
        hubsAndCorridors: "Sân bay Quốc tế Hồng Kông (trung tâm hàng hóa hàng không số 1 thế giới), cầu Hồng Kông – Chu Hải – Macau.",
        vietnamAseanLink: "Đầu mối huy động vốn IPO/trái phiếu xanh cho doanh nghiệp Việt Nam và cầu nối giao thương tự do giữa Việt Nam với Vùng Vịnh Lớn."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Hương Giang Thi Hoài & Trùng Khánh Lạc Cảnh (Vịnh Victoria)",
        author: "Khâu Phùng Giáp / Văn nhân Lĩnh Nam",
        dynasty: "Thế kỷ XIX–XX",
        quoteZh: "太平山下千帆竞，狮子精神万古传。",
        quoteZhTrad: "太平山下千帆競，獅子精神萬古傳。",
        pinyin: "Tàipíng Shān xià qiānfān jìng, Shīzi jīngshén wàngǔ chuán.",
        hanViet: "Thái Bình Sơn hạ thiên phàm cạnh, Sư Tử tinh thần vạn cổ truyền.",
        meaningVi: "Dưới chân đỉnh Thái Bình nghìn cánh buồm đua nhau vươn khơi, tinh thần kiên cường Dưới Đồi Sư Tử lưu truyền mãi mãi.",
        meaningEn: "Beneath Victoria Peak a thousand sails race forward; the Lion Rock spirit endures through the ages."
      }
    },
    "prov-macau": {
      commercialAndSupplyChain: {
        historicalGuild: "Hội đồng Thuyền buôn Bồ Đào Nha – Quảng Châu (1557): mắt xích giao thương Bạc trắng Manila–Macau–Nagasaki–Đại Việt thế kỷ XVI–XVII.",
        modernClusters: "Kinh tế giải trí – hội nghị quốc tế (MICE), trung tâm văn hóa Bồ Đào Nha ngữ – Trung Quốc và công viên hợp tác công nghệ Hoành Cầm (Hengqin).",
        hubsAndCorridors: "Kết nối cao tốc cầu Vượt biển Hồng Kông – Chu Hải – Macau & Cảng Chu Hải.",
        vietnamAseanLink: "Di sản chung về truyền bá chữ Latin / giao thương biển thế kỷ XVI–XVII (nơi Dòng Tên liên hệ công việc in ấn sách vở Đông Á – Việt Nam)."
      },
      literaryAndHistoricalEchoes: {
        workTitle: "Áo Môn Ký Sự / Khúc Nhạc Đường Bồ – Hoa Tại Tam Ba Tứ Cảng",
        author: "Thang Hiển Tổ (汤显祖 — *Mẫu Đơn Đình* từng ghé thăm Hương Sơn / Áo Môn năm 1591!)",
        dynasty: "Minh Vạn Lịch (1591)",
        quoteZh: "花发菩提香水绕，帆归镜海暮潮平。",
        quoteZhTrad: "花發菩提香水繞，帆歸鏡海暮潮平。",
        pinyin: "Huā fā Pútí xiāngshuǐ rào, fān guī Jìnghǎi mùcháo píng.",
        hanViet: "Hoa phát Bồ Đề hương thủy nhiễu, phàm quy Kính Hải mộ triều bình.",
        meaningVi: "Hoa nở bên dòng nước thơm đất Hương Sơn, cánh buồm quay về Kính Hải (Macau) khi thủy triều chiều xuống phẳng lặng.",
        meaningEn: "Blossoms open where fragrant waters wind; sails return to Mirror Sea on a calm evening tide."
      }
    }
  };

  window.CCE_REGIONS.provincesDirectory.forEach((pr) => {
    const patch = pr && PROVINCE_UPGRADE_34[pr.id];
    if (patch) {
      pr.commercialAndSupplyChain = patch.commercialAndSupplyChain;
      pr.literaryAndHistoricalEchoes = patch.literaryAndHistoricalEchoes;
    }
  });
})();
