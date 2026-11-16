import json
import re
from pathlib import Path

P = Path(r"c:\Website China-Vietnam\src\data\paintingsData.js")
raw_text = P.read_text(encoding="utf-8")
anchor = "window.CCE_PAINTINGS ="
header = raw_text[: raw_text.find("{", raw_text.find(anchor))]
start = raw_text.find("{", raw_text.find(anchor))
end = raw_text.rfind("};") + 1
data = json.loads(raw_text[start:end])

# Explicit, accurate attribution overrides where historical debate exists or hyperbole clustered
ATTR_OVERRIDES = {
    "you-chun-tu": "Truyền thế bản quy thuộc Triển Tử Kiền (隋唐传世本 / 学术存疑) — Từng được Tống Huy Tông đề tựa; các học giả hiện đại (Phó Hi Niên, Từ Bang Đạt) còn thảo luận liệu đây là tác phẩm thời Tùy hay bản phục chế chuẩn xác thời sơ Đường.",
    "zhanhua-shinv-tu": "Truyền thế bản quy thuộc Chu Phưởng (传世本 / 馆藏定论) — Tác phẩm tiêu biểu dòng tranh sĩ nữ cung đình Đường–Ngũ Đại được bảo tồn tại Bảo tàng tỉnh Liêu Ninh (thuộc danh mục hạn chế xuất cảnh).",
    "kuanglu-tu": "Truyền thế bản quy thuộc Kinh Hạo (传世本 / 五代宋初) — Tiêu bản sớm phản ánh bước chuyển phong cách từ Đường sang sơn thủy Bắc Tống, hiện lưu giữ tại Bảo tàng Cố Cung Đài Bắc.",
    "xiaoxiang-tu": "Truyền thế bản quy thuộc Đổng Nguyên (传世本 / 存疑) — Tác phẩm tiêu biểu dòng sơn thủy Giang Nam được Đổng Kỳ Xương đề xướng là mẫu mực Nam Tông; niên đại thực tế (Ngũ Đại hay Bắc Tống) vẫn có trao đổi học thuật.",
    "hanlin-chongting": "Truyền thế bản quy thuộc Đổng Nguyên (传世本 / 馆藏名作) — Tác phẩm sơn thủy mùa đông tiêu biểu thời Ngũ Đại–Bắc Tống, hiện lưu giữ tại Bảo tàng tỉnh Liêu Ninh.",
    "qiushan-wendao": "Truyền thế bản quy thuộc Cự Nhiên (传世本) — Tác phẩm tiêu biểu phong cách sơn thủy Giang Nam, mang dấu ấn giám định thời Bắc Tống.",
    "xishan-xinglv": "Bản giám định quy thuộc Phạm Khoan (馆藏定本) — Hiện vật trọng yếu tại Bảo tàng Cố Cung Đài Bắc, có chữ ký ẩn của Phạm Khoan trong tán lá được Lý Lâm Xán phát hiện năm 1958.",
    "qingming-shanghe": "Bản giám định quy thuộc Trương Trạch Đoan (馆藏定本) — Cuộn tranh phong tục đô thị Biện Kinh thời Bắc Tống lưu giữ tại Bảo tàng Cố Cung Bắc Kinh, kèm bạt vĩ của Trương Trứ (1186).",
    "qianli-jiangshan": "Tác phẩm quy thuộc Vương Hi Mạnh (馆藏定本 / 传世名作) — Hiện vật trọng yếu tại Bảo tàng Cố Cung Bắc Kinh, là tác phẩm hiếm hoi mang tên Vương Hi Mạnh còn truyền thế cùng bạt vĩ năm 1113 của Thái Kinh.",
    "quehua-qiuse": "Bản giám định quy thuộc Triệu Mạnh Phủ (馆藏定本 / 有题跋款识) — Tác phẩm năm 1295 có lạc khoản đề tự của Triệu Mạnh Phủ gửi tặng Chu Mật và hệ thống ấn triện giám định đời sau.",
    "fuchun-shanju": "Bản giám định quy thuộc Hoàng Công Vọng (馆藏定本 / 分藏合璧之作) — Sáng tác giai đoạn 1347–1350, bị hỏa hoạn tách thành hai phần năm 1650 (Thặng Sơn Đồ tại Bảo tàng Chiết Giang & Vô Dụng Sư Quyển tại Cố Cung Đài Bắc).",
    "jiangshan-duojiao-1959": "Tác phẩm kiến trúc công cộng quốc gia (国家殿堂巨制) — Hợp tác giữa Phó Bảo Thạch và Quan Sơn Nguyệt năm 1959; tác phẩm trưng bày thường xuyên tại sảnh chính Đại lễ đường Nhân dân là bản phục dựng tỷ lệ 1:1 nhằm bảo quản nguyên bản."
}

# Clean phrase substitutions across attribution and scholarly texts (preserving meaning cleanly)
SUBS = [
    ("Chân tích độc bản duy nhất (真迹)", "Tác phẩm quy thuộc giám định (馆藏定本)"),
    ("Chân tích độc bản quốc gia (真迹)", "Tác phẩm kiến trúc công cộng (国家殿堂巨制)"),
    ("Chân tích độc bản đệ nhất (真迹)", "Bản giám định quy thuộc (馆藏定本)"),
    ("Chân tích độc bản lịch sử (真迹)", "Bản giám định quy thuộc có hồ sơ lưu truyền (馆藏定本)"),
    ("Chân tích độc bản (真迹)", "Bản giám định quy thuộc (馆藏定本)"),
    ("Chân tích bảo chứng tuyệt đối (真迹)", "Bản giám định quy thuộc có lạc khoản (馆藏定本)"),
    ("Chân tích bảo chứng mẫu mực (真迹)", "Bản giám định quy thuộc có lạc khoản (馆藏定本)"),
    ("Chân tích có lạc khoản chuẩn xác (真迹)", "Bản giám định có lạc khoản niên đại (馆藏定本)"),
    ("Chân tích có bài thơ tuyên ngôn kinh điển (真迹)", "Bản giám định có bài thơ đề tựa (馆藏定本)"),
    ("Chân tích có thơ họa chuẩn xác (真迹)", "Bản giám định có thơ đề & lạc khoản (馆藏定本)"),
    ("Chân tích bảo vật trấn viện (真迹)", "Tác phẩm tiêu biểu lưu giữ tại bảo tàng (馆藏名作)"),
    ("Chân tích bảo vật hoàng cung (真迹)", "Hiện vật cung đình được giám định lưu giữ (清宫旧藏定本)"),
    ("Chân tích bảo vật quốc gia (真迹)", "Tác phẩm cận đại được giám định lưu giữ (现代馆藏定本)"),
    ("Chân tích bảo vật (真迹)", "Bản giám định lưu giữ tại bảo tàng (馆藏定本)"),
    ("Chân tích tuổi già tuyệt đỉnh (真迹)", "Tác phẩm giai đoạn cuối đời được giám định (馆藏晚年定本)"),
    ("Chân tích tuyệt tác cuối đời (绝笔真迹)", "Tác phẩm giai đoạn cuối đời được giám định (现代馆藏晚年名作)"),
    ("Chân tích tuyệt tác (真迹)", "Tác phẩm tiêu biểu được giám định (馆藏名作)"),
    ("Chân tích thần phẩm tối cao (真迹)", "Bản giám định tiêu biểu (馆藏名作)"),
    ("Chân tích thần phẩm (真迹)", "Bản giám định tiêu biểu (馆藏定本)"),
    ("Chân tích đỉnh cao cách tân (真迹)", "Tác phẩm cách tân được giám định (馆藏定本)"),
    ("Chân tích độc bảo (真迹)", "Bản giám định lưu giữ (馆藏定本)"),
    ("Cung đình ngự chế bảo vật (御制真迹)", "Tác phẩm cung đình được giám định lưu giữ (清宫御制藏本)"),
    ("Chân tích (真迹)", "Bản giám định quy thuộc (馆藏定本)"),
    ("Truyền thế chân tích (传世本)", "Truyền thế bản (传世本)"),
    ("Quốc bảo đệ nhất", "Tác phẩm tiêu biểu hàng đầu"),
    ("Quốc bảo số một toàn quốc của Trung Quốc", "Tác phẩm phong tục đô thị tiêu biểu được lưu giữ tại Cố Cung Bắc Kinh"),
    ("Quốc bảo số một trấn quán", "Hiện vật trọng yếu"),
    ("Quốc bảo số một thời hiện đại", "Tác phẩm hiện đại trọng yếu"),
    ("Quốc bảo số một", "Hiện vật trọng yếu"),
    ("Quốc bảo trấn quán", "Hiện vật trọng yếu"),
    ("Quốc bảo tuyệt đối", "Hiện vật cấp nhất"),
    ("quốc bảo tuyệt đối không được phép", "hiện vật cấp nhất thuộc danh mục hạn chế"),
    ("Bảo vật quốc gia", "Hiện vật trọng yếu cấp bảo tàng"),
    ("bảo vật quốc gia", "hiện vật trọng yếu cấp bảo tàng"),
    ("cổ nhất còn nguyên vẹn trên thế giới", "sớm nhất còn truyền thế về sơn thủy cuộn ngang"),
    ("bức tranh hoành tráng nhất lịch sử", "bức đại họa khổ lớn tiêu biểu của mỹ thuật Trung Quốc thế kỷ XX"),
    ("Bức tranh hoành tráng nhất lịch sử", "Bức đại họa khổ lớn tiêu biểu của mỹ thuật Trung Quốc thế kỷ XX"),
    ("tuyệt xảo tuyệt luân", "tinh tế"),
    ("tinh xảo tuyệt luân", "tinh tế, chuẩn mực"),
    ("hoàn mỹ tột đỉnh", "chuẩn mực cao độ"),
    ("hoàn mỹ nhất thế giới", "tiêu biểu và được bảo tồn tốt hàng đầu"),
    ("hoàn mỹ nhất", "nhuần nhuyễn và tiêu biểu"),
    ("hoàn mỹ", "hài hòa"),
    ("toàn bích", "chín muồi"),
    ("Toàn bích", "Tiêu biểu"),
    ("bất tử", "tiêu biểu"),
    ("chuẩn xác tuyệt đối", "chuẩn xác cao độ"),
    ("Đỉnh cao tuyệt đối", "Điểm mẫu mực tiêu biểu"),
    ("tĩnh lặng gần như tuyệt đối", "tĩnh lặng sâu sắc"),
    ("thống trị tuyệt đối", "chiếm vị thế chủ đạo"),
    ("thẩm mỹ tuyệt đối", "chủ nghĩa thẩm mỹ rõ nét"),
    ("tuyệt đối", "rõ nét"),
    ("độc nhất vô nhị", "đặc sắc hiếm có"),
    ("độc nhất", "đặc sắc"),
    ("vô song", "nổi bật"),
    ("bất hủ", "nổi tiếng"),
    ("thần phẩm đệ nhất", "tác phẩm tiêu biểu hàng đầu"),
    ("gián điệp nghệ thuật số một trong lịch sử", "mẫu mực tự sự cung đình nổi tiếng"),
    ("số một", "tiêu biểu hàng đầu"),
    ("độc bản duy nhất", "bản hiếm hoi được lưu giữ"),
    ("tác phẩm sơn thủy độc nhất", "tác phẩm sơn thủy hiếm hoi"),
    ("chú tâm duy nhất", "chú tâm sâu sắc"),
    ("nhân vật duy nhất", "trường hợp tiêu biểu hiếm hoi"),
    ("duy nhất còn sót lại", "hiếm hoi còn truyền thế đến nay"),
    ("kiệt tác trào phúng số một", "tác phẩm trào phúng tiêu biểu"),
    ("vị thế tối cao", "vị thế trọng yếu"),
    ("Thiên hạ đệ nhất Vương Thúc Minh", "tác phẩm tiêu biểu bậc nhất của Vương Mông ('Thiên hạ đệ nhất Vương Thúc Minh' theo lời bình Đổng Kỳ Xương)"),
]

def scrub(s: str) -> str:
    for old, new in SUBS:
        s = s.replace(old, new)
    return s

def walk_clean(obj):
    if isinstance(obj, str):
        return scrub(obj)
    if isinstance(obj, list):
        return [walk_clean(v) for v in obj]
    if isinstance(obj, dict):
        return {k: walk_clean(v) for k, v in obj.items()}
    return obj

for m in data["masterpieces"]:
    walk_m = walk_clean(m)
    m.clear()
    m.update(walk_m)
    if m["id"] in ATTR_OVERRIDES:
        m["attribution"] = ATTR_OVERRIDES[m["id"]]

# Update Đại lễ đường entry in museums array so it clearly identifies as a state building, not a public art museum
for mu in data.get("museums", []):
    if "Đại lễ đường" in mu.get("nameVi", ""):
        mu["institutionType"] = "Thiết chế Nhà nước (Không phải bảo tàng công chúng)"
        mu["description"] = "Thiết chế kiến trúc nhà nước tại Bắc Kinh — nơi trưng bày thường xuyên bức đại họa 'Giang Sơn Như Thử Đa Kiều' (bản phục dựng tỷ lệ 1:1 tại sảnh chính; nguyên bản 1959 bảo quản riêng)."
    else:
        mu["institutionType"] = "Bảo tàng Nghệ thuật & Di sản"

data["attributionGuide"] = [
    {
        "type": "Bản giám định quy thuộc (馆藏定本)",
        "labelZh": "馆藏定本 / 有款识",
        "desc": "Tác phẩm được bảo tàng lưu giữ và giám định dựa trên lạc khoản, triện ấn, bạt vĩ và thư tịch truyền đời (tránh đồng nhất giản đơn mọi tác phẩm cổ với khái niệm 'chân tích duy nhất')."
    },
    {
        "type": "Tống triều mô bản (宋摹本)",
        "labelZh": "宋摹本 / 院本",
        "desc": "Bản sao do Họa viện triều Tống thực hiện dựa trên nguyên tác Lục triều hoặc Đường triều, giữ giá trị sử liệu mỹ thuật chuẩn mực dù không phải nguyên bản thời tác giả."
    },
    {
        "type": "Đường triều lâm bản (唐摹本)",
        "labelZh": "唐摹本 / 勾填本",
        "desc": "Bản sao thực hiện thời sơ Đường bằng kỹ thuật câu tuyến điền mực (Song câu điền mặc), bảo lưu gần nhất diện mạo hội họa thời Ngụy–Tấn."
    },
    {
        "type": "Truyền thế bản (传世本)",
        "labelZh": "传世本 / 流传本",
        "desc": "Tác phẩm quy thuộc tên tuổi danh họa qua truyền thống giám định lịch sử, còn có những trao đổi học thuật về niên đại hoặc tay thợ sao chép."
    },
    {
        "type": "Còn tranh luận học thuật (存疑 / 学术争议)",
        "labelZh": "存疑 / 学术争议",
        "desc": "Tác phẩm đang có nhiều giả thuyết học thuật khác nhau giữa các chuyên gia bảo tàng về tác giả thực thụ, niên đại chép lại hoặc lịch sử tu bổ."
    }
]

out = header + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
P.write_text(out, encoding="utf-8")
print("Calibrated paintingsData.js successfully!")
