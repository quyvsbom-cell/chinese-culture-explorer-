# -*- coding: utf-8 -*-
"""
Assembler script that compiles all parts into src/data/paintingsData.js
"""
import json
import sys
import os

# Add scratch to path
sys.path.insert(0, os.path.abspath("scratch"))

from paintings_part1 import PAINTINGS_PART1
from paintings_part2 import PAINTINGS_PART2
from paintings_part3 import PAINTINGS_PART3

all_paintings = PAINTINGS_PART1 + PAINTINGS_PART2 + PAINTINGS_PART3
print(f"Total compiled paintings: {len(all_paintings)}")

eras = [
    {
        "id": "weijin",
        "nameVi": "Ngụy–Tấn–Nam Bắc triều",
        "nameZh": "魏晋南北朝",
        "pinyin": "Wèijìn Nánběicháo",
        "timeSpan": "220–589 CN",
        "overview": "Khởi nguyên lý luận mỹ học cổ điển, hình thành 'Dĩ hình tả thần' của Cố Khải Chi và 'Lục pháp luận' của Tạ Hách."
    },
    {
        "id": "suitang",
        "nameVi": "Tùy–Đường",
        "nameZh": "隋唐",
        "pinyin": "Suí Táng",
        "timeSpan": "581–907 CN",
        "overview": "Hoàng kim nhân vật họa cung đình và sự khai sinh sơn thủy độc lập (Du Xuân Đồ), bút pháp 'Ngô đới đương phong', sĩ nữ phong phì cốt lệ."
    },
    {
        "id": "song",
        "nameVi": "Ngũ Đại–Tống triều",
        "nameZh": "五代十国、宋朝",
        "pinyin": "Wǔdài Shíguó, Sòng Cháo",
        "timeSpan": "907–1279 CN",
        "overview": "Đỉnh cao tuyệt đối của Hội họa Trung Hoa: Sơn thủy Bắc phái cự bi hùng vĩ và Nam phái yên ả; Thị dân phong tục; Viện thể hoa điểu và Văn nhân họa."
    },
    {
        "id": "yuan",
        "nameVi": "Nguyên triều",
        "nameZh": "元朝",
        "pinyin": "Yuán Cháo",
        "timeSpan": "1271–1368 CN",
        "overview": "Văn nhân họa ẩn dật thăng hoa; 'Cổ ý' Triệu Mạnh Phủ và Nguyên Tứ Gia bộc lộ tâm cảnh và thư pháp tính trong hội họa."
    },
    {
        "id": "ming",
        "nameVi": "Minh triều",
        "nameZh": "明朝",
        "pinyin": "Míng Cháo",
        "timeSpan": "1368–1644 CN",
        "overview": "Ngô Môn họa phái Tô Châu (Minh Tứ Gia), Chiết phái cung đình và Đổng Kỳ Xương phân định Nam–Bắc tông họa học."
    },
    {
        "id": "qing",
        "nameVi": "Thanh triều",
        "nameZh": "清朝",
        "pinyin": "Qīng Cháo",
        "timeSpan": "1644–1912 CN",
        "overview": "Đối trọng giữa Tứ Vương cung đình chính thống và Tứ Tăng dã dật cách tân (Thạch Đào, Bát Đại Sơn Nhân), Dương Châu Bát Quái."
    },
    {
        "id": "modern",
        "nameVi": "Cận đại & Hiện đại",
        "nameZh": "近现代",
        "pinyin": "Jìn-Xiàndài",
        "timeSpan": "1912–Nay",
        "overview": "Giao thoa quốc họa truyền thống và tư duy hiện đại: Tề Bạch Thạch, Từ Bi Hồng, Trương Đại Thiên, Phó Bão Thạch, Lý Khả Nhiễm."
    }
]

genres = [
    {
        "id": "landscape",
        "nameVi": "Sơn thủy họa",
        "nameZh": "山水画",
        "pinyin": "Shānshuǐhuà",
        "nameEn": "Landscape Painting",
        "desc": "Tái hiện khí vận càn khôn qua núi non, sông suối, tùng trúc, vận dụng Tam viễn (Cao viễn, Thâm viễn, Bình viễn)."
    },
    {
        "id": "flower-bird",
        "nameVi": "Hoa điểu họa",
        "nameZh": "花鸟画",
        "pinyin": "Huāniǎohuà",
        "nameEn": "Bird-and-Flower Painting",
        "desc": "Miêu tả thảo mộc, chim muông, trùng ngư nhằm gửi gắm đạo tự nhiên và biểu trưng nhân cách quân tử."
    },
    {
        "id": "figure",
        "nameVi": "Nhân vật họa",
        "nameZh": "人物画",
        "pinyin": "Rénwùhuà",
        "nameEn": "Figure Painting",
        "desc": "Tập trung miêu tả đế vương, sĩ nữ, cao tăng, ẩn sĩ, chú trọng 'Dĩ hình tả thần' và khí chất tinh thần bên trong."
    },
    {
        "id": "fine-brush",
        "nameVi": "Công bút họa",
        "nameZh": "工笔画",
        "pinyin": "Gōngbǐhuà",
        "nameEn": "Meticulous Painting",
        "desc": "Kỹ thuật vẽ tỉ mỉ, đường nét câu tuyến tinh xảo, phân nhiễm nhiều lớp màu khoáng hoặc mực chu tất."
    },
    {
        "id": "freehand",
        "nameVi": "Tả ý họa",
        "nameZh": "写意画",
        "pinyin": "Xiěyìhuà",
        "nameEn": "Freehand Painting",
        "desc": "Phóng khoáng, lược bỏ chi tiết vụn vặt, dùng nét bút mang tính thư pháp để bắt lấy thần thái cốt lõi."
    },
    {
        "id": "ink-wash",
        "nameVi": "Thủy mặc họa",
        "nameZh": "水墨画",
        "pinyin": "Shuǐmòhuà",
        "nameEn": "Ink-Wash Painting",
        "desc": "Vận dụng 'Mặc phân ngũ sắc' (Tiêu, Nùng, Trọng, Đạm, Thanh), tận dụng độ thấm của giấy xuyến và khoảng lưu bạch."
    },
    {
        "id": "architectural",
        "nameVi": "Giới họa",
        "nameZh": "界画",
        "pinyin": "Jièhuà",
        "nameEn": "Architectural Painting",
        "desc": "Dùng thước giới (界尺) dẫn bút vẽ cung điện, thuyền lâu, cầu kiều với độ chuẩn xác hình học và phối cảnh tinh diệu."
    },
    {
        "id": "court",
        "nameVi": "Cung đình hội họa",
        "nameZh": "宫廷绘画",
        "pinyin": "Gōngtíng Huìhuà",
        "nameEn": "Imperial Court Painting",
        "desc": "Tác phẩm do Họa viện triều đình thực hiện phục vụ hoàng gia, đề cao tính trang nghiêm, vương đạo và kỹ nghệ điêu luyện."
    },
    {
        "id": "literati",
        "nameVi": "Văn nhân họa",
        "nameZh": "文人画",
        "pinyin": "Wénrénhuà",
        "nameEn": "Literati Scholar Painting",
        "desc": "Hội họa của tầng lớp sĩ đại phu, dung hợp Thơ – Thư – Họa – Ấn (诗书画印), đề cao dã dật, ngụ ý và nhân phẩm."
    }
]

curated_comparisons = [
    {
        "id": "cmp-north-south-song",
        "titleVi": "Bắc phái Hùng vĩ vs. Nam phái Yên ả",
        "titleZh": "北方雄浑与江南平淡",
        "leftId": "xishan-xinglv",
        "rightId": "xiaoxiang-tu",
        "perspective": "Đối chiếu bước ngoặt phân hóa Sơn thủy họa: Phạm Khoan đại diện cho vách đá sừng sững gân guốc đất Thiểm Tây (Vũ mao thuấn, Cự bi sơn thủy), trong khi Đổng Nguyên đại diện cho đồi đất mềm mại phủ sương mây bên sông Tiêu Tương đất phương Nam (Phi mạ thuấn, Bình viễn)."
    },
    {
        "id": "cmp-court-literati",
        "titleVi": "Cung đình Thanh lục vs. Văn nhân Thủy mặc",
        "titleZh": "青绿院体与文人水墨",
        "leftId": "qianli-jiangshan",
        "rightId": "fuchun-shanju",
        "perspective": "Đỉnh cao tuyệt đối của hai trường phái: Vương Hy Mạnh lúc 18 tuổi vẽ nên 'Thiên Lý Giang Sơn Đồ' lộng lẫy bằng khoáng sắc thạch thanh thạch lục ngọc quý cung đình; Hoàng Công Vọng lúc 82 tuổi hoàn thành 'Phú Xuân Sơn Cư Đồ' bằng mực khô thanh đạm dã dật của bậc ẩn sĩ Toàn Chân."
    },
    {
        "id": "cmp-spring-landscapes",
        "titleVi": "Tam viễn Tảo Xuân vs. Mã Nhất Giác Đạp Ca",
        "titleZh": "早春全景与马远一角",
        "leftId": "zao-chun-tu",
        "rightId": "dage-tu",
        "perspective": "Bước chuyển mình từ Bắc Tống sang Nam Tống: Quách Hy vận dụng trọn vẹn Tam viễn toàn cảnh (Cao viễn, Thâm viễn, Bình viễn) cuồn cuộn sức sống; Mã Viễn đột phá với bố cục dồn vào một góc ('Mã nhất giác') chừa khoảng trắng lưu bạch bao la thấm đẫm phong vị thi ca."
    },
    {
        "id": "cmp-figure-psychology",
        "titleVi": "Nội cung Đường triều vs. Kịch tính Nam Đường",
        "titleZh": "盛唐贵族与南唐夜宴",
        "leftId": "zhanhua-shinv-tu",
        "rightId": "hanxizai-yeyan",
        "perspective": "Nghệ thuật nhân vật và diễn tả tâm lý: Chu Phưởng lột tả vẻ đẹp đẫy đà nhưng cô đơn u uất của phụ nữ thâm cung Trung Đường; Cố Hoành Trung vận dụng thủ pháp gián điệp điện ảnh liên hoàn 5 cảnh để phơi bày bi kịch giằng xé của đại thần Hàn Hy Tái."
    },
    {
        "id": "cmp-orthodox-innovative",
        "titleVi": "Chính thống Quy củ vs. Cách tân Nhất Họa",
        "titleZh": "正统规矩与革新一画",
        "leftId": "luomu-qiuse",
        "rightId": "huaiyang-jieqiu",
        "perspective": "Đối thoại giữa hai cực mỹ học triều Thanh: Vương Thời Mẫn (thủ lĩnh Tứ Vương) giữ gìn quy củ nghiêm cẩn của Đổng–Cự và Hoàng Công Vọng; Thạch Đào (lãnh tụ Tứ Tăng) phá tan mọi khuôn phép với tuyên ngôn 'Bút mặc đương tùy thời đại' và học thuyết 'Nhất họa luận'."
    }
]

museums = [
    {
        "nameZh": "故宫博物院",
        "nameVi": "Bảo tàng Cố Cung Bắc Kinh (Tử Cấm Thành)",
        "city": "Bắc Kinh, Trung Quốc",
        "description": "Kho tàng bảo vật quốc gia lớn nhất thế giới, lưu giữ các kiệt tác số một: Thanh Minh Thượng Hà Đồ, Thiên Lý Giang Sơn Đồ, Lạc Thần Phú Đồ, Mặc Bồ Đào Đồ."
    },
    {
        "nameZh": "台北故宫博物院",
        "nameVi": "Bảo tàng Cố Cung Đài Bắc",
        "city": "Đài Bắc, Đài Loan",
        "description": "Nơi bảo quản bộ sưu tập hội họa Tống–Nguyên tinh tuyển quý giá nhất thế giới: Khê Sơn Hành Lữ Đồ, Tảo Xuân Đồ, Vạn Hác Tùng Phong Đồ, Phú Xuân Sơn Cư Đồ (Bản Vô Dụng Sư)."
    },
    {
        "nameZh": "上海博物馆",
        "nameVi": "Bảo tàng Thượng Hải",
        "city": "Thượng Hải, Trung Quốc",
        "description": "Đỉnh cao lưu giữ các danh tác Nguyên–Minh–Thanh: Thanh Biện Ẩn Cư Đồ (Vương Mông), Lục Quân Tử Đồ (Nghê Toản), Thu Hưng Bát Cảnh Đồ (Đổng Kỳ Xương)."
    },
    {
        "nameZh": "辽宁省博物馆",
        "nameVi": "Bảo tàng tỉnh Liêu Ninh",
        "city": "Thẩm Dương, Liêu Ninh",
        "description": "Trung tâm lưu giữ các kiệt tác Tùy–Đường và Tống ngự chế nguyên bản: Thụy Hạc Đồ (Tống Huy Tông), Quắc Quốc Phu Nhân Du Xuân Đồ, Trâm Hoa Sĩ Nữ Đồ."
    },
    {
        "nameZh": "南京博物院",
        "nameVi": "Bảo tàng Nam Kinh",
        "city": "Nam Kinh, Giang Tô",
        "description": "Kho lưu trữ mỹ thuật Giang Nam và các đại danh tác thời Minh–Thanh, đặc biệt là bộ sưu tập đỉnh cao của Thạch Đào và Ngô Môn họa phái."
    },
    {
        "nameZh": "中国美术馆",
        "nameVi": "Bảo tàng Mỹ thuật Trung Quốc",
        "city": "Bắc Kinh, Trung Quốc",
        "description": "Bảo tàng nghệ thuật hiện đại quốc gia cao nhất, nơi tôn vinh các kiệt tác của Tề Bạch Thạch, Hoàng Tân Hồng, Lý Khả Nhiễm."
    },
    {
        "nameZh": "大都会艺术博物馆",
        "nameVi": "The Metropolitan Museum of Art (Met)",
        "city": "New York, Hoa Kỳ",
        "description": "Bảo tàng quốc tế sở hữu bộ sưu tập tranh cuộn và thư họa Trung Hoa cổ đại đồ sộ nhất phương Tây."
    },
    {
        "nameZh": "波士顿美术博物馆",
        "nameVi": "Museum of Fine Arts, Boston (MFA)",
        "city": "Boston, Hoa Kỳ",
        "description": "Nơi lưu giữ các danh tác Đường–Tống kinh điển: Lịch Đại Đế Vương Đồ (Diêm Lập Bản), Đao Luyện Đồ (Trương Huyên / Tống Huy Tông)."
    },
    {
        "nameZh": "东京国立博物馆",
        "nameVi": "Bảo tàng Quốc lập Tokyo",
        "city": "Tokyo, Nhật Bản",
        "description": "Nơi lưu giữ các bảo vật tranh Thiền và danh tác Bắc Tống: Ngũ Mã Đồ (Lý Công Lân), Lý Bạch Hành Ngâm Đồ (Lương Khải)."
    },
    {
        "nameZh": "北京人民大会堂",
        "nameVi": "Đại lễ đường Nhân dân Bắc Kinh",
        "city": "Bắc Kinh, Trung Quốc",
        "description": "Nơi ngự trị của bức đại họa quốc gia thế kỷ 'Giang Sơn Như Thử Đa Kiều' (Phó Bão Thạch & Quan Sơn Nguyệt, 1959)."
    }
]

attribution_guide = [
    {
        "type": "Chân tích (真迹)",
        "labelZh": "真迹 / 绝品",
        "desc": "Tác phẩm được bảo tồn nguyên vẹn với bằng chứng niên đại, lạc khoản, dấu triện của chính tác giả và lịch sử giám định qua các ngự khố triều đình."
    },
    {
        "type": "Tống triều mô bản (宋摹本)",
        "labelZh": "宋摹本 / 院本",
        "desc": "Bản sao do Họa viện triều Tống đích thân thực hiện dựa trên chân tích thời Lục triều hoặc thời Đường (nhiều bản do chính Tống Huy Tông chỉ đạo), có giá trị lịch sử và mỹ thuật tương đương chân tích cổ."
    },
    {
        "type": "Đường triều lâm bản (唐摹本)",
        "labelZh": "唐摹本 / 勾填本",
        "desc": "Bản sao chuẩn xác thời sơ Đường thực hiện phương pháp câu tuyến điền mực (Song câu điền mặc), phản ánh trung thực nhất phong mạo thời Tấn."
    },
    {
        "type": "Truyền thế bản (传世本)",
        "labelZh": "传本 / 定论本",
        "desc": "Tác phẩm quy thuộc truyền thống lâu đời được các thế hệ học giả và viện bảo tàng công nhận là phản ánh trung thực phong cách tác giả."
    },
    {
        "type": "Còn tranh luận (存疑 / 争议)",
        "labelZh": "存疑 / 学术争议",
        "desc": "Tác phẩm đang là tâm điểm tranh luận giữa các trường phái giám định học thuật về thời điểm sáng tác chính xác hoặc tác giả thực thụ."
    }
]

# Hero masterpiece
hero_masterpiece = {
    "titleZh": "中国国画经典 • 千年流变",
    "titleEn": "Masterpieces of Chinese Traditional Painting",
    "titleVi": "Bảo Tàng Số Kiệt Tác Quốc Họa Trung Hoa",
    "headlineVi": "Hơn Một Thiên Niên Kỷ Hội Họa Cổ Điển: Từ Ngụy–Tấn Đến Hiện Đại",
    "leadVi": "Chiêm ngưỡng bộ sưu tập 54 kiệt tác bất hủ đại diện cho linh hồn thẩm mỹ Đông Á. Trải dài qua 7 thời kỳ lịch sử và 9 dòng hội họa, mỗi tác phẩm được khảo chứng đa chiều: bối cảnh lịch sử, tiểu sử danh họa, bố cục, bút pháp, thủy mặc, không gian tam viễn, biểu tượng văn hóa, ý nghĩa triết học và di sản nghệ thuật.",
    "featuredPaintings": [
        "jiangshan-duojiao-1959",
        "qianli-jiangshan",
        "fuchun-shanju",
        "xishan-xinglv",
        "qingming-shanghe",
        "zao-chun-tu",
        "rui-he-tu",
        "hanxizai-yeyan"
    ]
}

data_obj = {
    "hero": hero_masterpiece,
    "eras": eras,
    "genres": genres,
    "masterpieces": all_paintings,
    "comparisons": curated_comparisons,
    "museums": museums,
    "attributionGuide": attribution_guide
}

# Output to src/data/paintingsData.js
out_path = os.path.join("src", "data", "paintingsData.js")
with open(out_path, "w", encoding="utf-8") as f:
    f.write("// ============================================================================\n")
    f.write("// KIỆT TÁC QUỐC HỌA TRUNG HOA – 中国国画经典\n")
    f.write("// Masterpieces of Chinese Traditional Painting (Online Digital Museum Archive)\n")
    f.write("// CHINESE CULTURE EXPLORER – 中国文化探索\n")
    f.write("// Curated collection of 54 monumental masterpieces spanning 7 Dynastic Eras,\n")
    f.write("// 9 Traditional Painting Genres, with 9-dimensional scholarly art analysis,\n")
    f.write("// verified museum collections, and rigorous academic bibliography.\n")
    f.write("// Founded and created by Lê Hưng Thịnh\n")
    f.write("// ============================================================================\n\n")
    f.write("window.CCE_PAINTINGS = ")
    json.dump(data_obj, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Successfully generated {out_path} ({os.path.getsize(out_path)} bytes)")
