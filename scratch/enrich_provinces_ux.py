import re
from pathlib import Path

ROOT = Path(r"c:\Website China-Vietnam")
TARGET = ROOT / "src" / "data" / "regionsData.js"

# Rich travel, seasonal, and culinary metadata for all 34 provincial-level divisions of China
UX_META = {
    "prov-beijing": {
        "bestSeason": "Tháng 9 – Tháng 11 (Mùa thu lá vàng Hương Sơn & cố cung trời trong)",
        "cuisine": "Vịt quay Bắc Kinh (北京烤鸭), Lẩu cừu nhúng nồi đồng (涮羊肉), Mì tương đen (炸酱面)",
        "travelTip": "Cố Cung & Vạn Lý Trường Thành (Mộ Điền Cốc) cần đặt vé hộ chiếu trước 7 ngày; ưu tiên bay sân bay Đại Hưng hoặc Thủ Đô.",
    },
    "prov-tianjin": {
        "bestSeason": "Tháng 4 – Tháng 5 & Tháng 9 – Tháng 10 (Khí hậu dịu mát ven sông Hải Hà)",
        "cuisine": "Bánh bao Cẩu Bất Lý (狗不理包子), Bánh chiên quai chèo (十八街麻花), Bánh rán Giản Bính Quả Tử",
        "travelTip": "Tàu cao tốc Bắc Kinh Nam – Thiên Tân chỉ mất 30 phút; buổi tối đi thuyền ngắm cầu Hải Hà và Mắt Thiên Tân.",
    },
    "prov-shanghai": {
        "bestSeason": "Tháng 3 – Tháng 5 & Tháng 9 – Tháng 11 (Mùa xuân hoa mộc lan & mùa thu cua lông)",
        "cuisine": "Tiểu long bao Nam Tường (小笼包), Thịt kho Đông Pha Thượng Hải (红烧肉), Cua lông Dương Trừng Hồ",
        "travelTip": "Tàu đệm từ trường Maglev nối sân bay Phố Đông về Long Dương Lộ trong 8 phút; nhớ cài Alipay/WeChat Metro QR.",
    },
    "prov-chongqing": {
        "bestSeason": "Tháng 3 – Tháng 5 & Tháng 10 – Tháng 11 (Tránh cái nóng 'hỏa lò' tháng 7–8)",
        "cuisine": "Lẩu Tứ Xuyên – Trùng Khánh cay nồng cửu cung cách (重庆九宫格火锅), Mì Trùng Khánh (重庆小面), Gà cay Ca Lạc Sơn",
        "travelTip": "Đừng quá tin Google Maps ở đô thị 3D nhiều tầng; dùng Amap (Cao Đức) & đi tuyến Monorail số 2 xuyên tòa nhà Lý Tử Bá.",
    },
    "prov-hebei": {
        "bestSeason": "Tháng 6 – Tháng 10 (Lý tưởng để tham quan Tị Thử Sơn Trang Thừa Đức & thảo nguyên Bá Thượng)",
        "cuisine": "Bánh mì kẹp thịt lừa Bảo Định (驴肉火烧), Hải sản Tần Hoàng Đảo, Thịt cừu nướng Trương Gia Khẩu",
        "travelTip": "Có thể đi trong ngày từ Bắc Kinh đến Thừa Đức hoặc Sơn Hải Quan bằng tàu cao tốc trong khoảng 1–2 giờ.",
    },
    "prov-shanxi": {
        "bestSeason": "Tháng 5 – Tháng 10 (Thời tiết khô ráo tham quan thành cổ Bình Dao & Hang đá Vân Cương)",
        "cuisine": "Mì cắt dao Sơn Tây (刀削面), Giấm lâu năm Sơn Tây (山西老陈醋), Thịt bò Bình Dao (平遥牛肉)",
        "travelTip": "Tuyến chuẩn từ Bắc Kinh – Đại Đồng – Bình Dao – Tây An bằng tàu cao tốc giúp khám phá 'Bảo tàng kiến trúc gỗ cổ trên mặt đất'.",
    },
    "prov-liaoning": {
        "bestSeason": "Tháng 5 – Tháng 6 & Tháng 9 – Tháng 10 (Thu hoạch táo, lá phong Đan Đông & biển Đại Liên mát mẻ)",
        "cuisine": "Sủi cảo Lão Biên Thẩm Dương (老边饺子), Hải sản Đại Liên, Thịt chua ngọt Bạch Nhục Huyết Tràng",
        "travelTip": "Tháng 10 bãi biển đỏ Bàn Cẩm (Red Beach) và đường lá phong Bản Khê rực đỏ ngoạn mục.",
    },
    "prov-jilin": {
        "bestSeason": "Tháng 7 – Tháng 8 (Lên Thiên Trì Trường Bạch Sơn ít mây mù) & Tháng 1 – Tháng 2 (Ngắm sương muối Vụ Tùng)",
        "cuisine": "Gà hầm sâm Trường Bạch, Thịt nướng kiểu Diên Biên (延边烤肉), Mì lạnh Triều Tiên Diên Cát",
        "travelTip": "Tháng 11–3 nên mang đồ giữ nhiệt chống âm 25°C và dán miếng giữ ấm sau lưng điện thoại chống sập pin.",
    },
    "prov-heilongjiang": {
        "bestSeason": "Tháng 12 – Tháng 2 (Lễ hội Băng Đăng Cáp Nhĩ Tân) & Tháng 6 – Tháng 8 (Tránh nóng mùa hè 22°C)",
        "cuisine": "Thịt heo chiên giòn sốt chua ngọt Quách Bao Nhục (锅包肉), Xúc xích đỏ Cáp Nhĩ Tân, Lẩu nồi gang Thiết Oa Đốn",
        "travelTip": "Tuyết Hương & Thế giới Băng Tuyết thường mở đón khách từ cuối tháng 12 đến cuối tháng 2; mang giày đinh chống trượt.",
    },
    "prov-jiangsu": {
        "bestSeason": "Tháng 3 – Tháng 5 (Mùa xuân Giang Nam hoa nở bên lâm viên Tô Châu) & Tháng 10 – Tháng 11 (Rừng phong Thiên Bình Sơn)",
        "cuisine": "Vịt muối Nam Kinh (南京盐水鸭), Cá quế sóc Tô Châu (松鼠桂鱼), Mì Dương Xuân & Cơm chiên Dương Châu",
        "travelTip": "Đặt trước vé Bảo tàng Nam Kinh và Bảo tàng Tô Châu (do Bối Duật Minh thiết kế) ít nhất 3–7 ngày qua WeChat.",
    },
    "prov-zhejiang": {
        "bestSeason": "Tháng 3 – Tháng 5 (Trà Long Tỉnh vụ xuân) & Tháng 9 – Tháng 11 (Hoa quế nở rộ quanh Tây Hồ)",
        "cuisine": "Cá giấm Tây Hồ (西湖醋鱼), Gà ăn mày (叫化鸡), Tôm nõn xào trà Long Tỉnh (龙井虾仁), Thịt kho Đông Pha",
        "travelTip": "Kết hợp tuyến Hàng Châu – Ô Trấn / Tây Đường – Thiệu Hưng bằng đường sắt cao tốc cực kỳ thuận tiện chỉ trong 30 phút/chặng.",
    },
    "prov-anhui": {
        "bestSeason": "Tháng 4 – Tháng 5 & Tháng 9 – Tháng 11 (Mùa săn biển mây Hoàng Sơn & mùa thu lá đỏ Tháp Xuyên)",
        "cuisine": "Cá quyết thối Huy Châu (臭鳜鱼), Đậu phụ lông Hoành Thôn (毛豆腐), Vịt nướng Lư Châu",
        "travelTip": "Nên ngủ 1 đêm trên đỉnh Hoàng Sơn (gần Quang Minh Đỉnh) để kịp ngắm bình minh biển mây và đi bộ xuống Hoành Thôn.",
    },
    "prov-fujian": {
        "bestSeason": "Tháng 4 – Tháng 6 & Tháng 10 – Tháng 12 (Khí hậu ấm áp ven biển Mân Nam & mùa hái trà Vũ Di Sơn)",
        "cuisine": "Phật nhảy tường Phúc Châu (佛跳墙), Trứng hàu Mân Nam (海蛎煎), Mì sợi Hồ Tuyền Châu & Trà Đại Hồng Bào",
        "travelTip": "Phà đi đảo Cổ Lãng Tự (Hạ Môn) cần đặt vé trước qua Alipay mini-program của Cảng Hạ Môn; giữ vé quay về.",
    },
    "prov-jiangxi": {
        "bestSeason": "Tháng 3 – Tháng 4 (Hoa cải vàng Vụ Nguyên) & Tháng 10 – Tháng 11 (Phơi nông sản Thu Sái Hoàng Lĩnh)",
        "cuisine": "Mì xào Nam Xương (南昌拌粉), Canh hầm niêu đất Ngõa Quán Thang, Gà hầm hạt sen Lư Sơn",
        "travelTip": "Làng gốm Cảnh Đức Trấn có chợ gốm sáng cuối tuần tại Xưởng Điêu khắc & Làng gốm Tam Bảo rất đáng trải nghiệm.",
    },
    "prov-shandong": {
        "bestSeason": "Tháng 4 – Tháng 5 & Tháng 9 – Tháng 10 (Nắng dịu leo Thái Sơn & lễ hội bia/biển Thanh Đảo)",
        "cuisine": "Hải sâm xào hành Chương Khâu (葱烧海参), Cá chép chua ngọt Lỗ thái, Mực nướng & Bia tươi Thanh Đảo nguyên bản",
        "travelTip": "Nếu leo Thái Sơn ngắm bình minh, có thể đi cáp treo Trấn Trung Thiên Môn lên Nam Thiên Môn hoặc leo đêm bằng đèn pin.",
    },
    "prov-henan": {
        "bestSeason": "Tháng 4 (Lễ hội Hoa Mẫu Đơn Lạc Dương rực rỡ nhất năm) & Tháng 9 – Tháng 10",
        "cuisine": "Mì hầm Hồ Nam / Hà Nam (河南烩面), Tiệc nước Lạc Dương (洛阳水席), Cháo cay Hồ Lạt Thang buổi sáng",
        "travelTip": "Tuyến Tam Đại Cố Đô Trung Nguyên (Lạc Dương – Đăng Phong Thiếu Lâm Tự – Khai Phong) cách Trịnh Châu chỉ 40 phút tàu cao tốc.",
    },
    "prov-hubei": {
        "bestSeason": "Tháng 3 (Ngắm hoa anh đào Đại học Vũ Hán) & Tháng 10 – Tháng 11 (Hồ Đông Hồ mùa thu)",
        "cuisine": "Mì khô nóng Nhiệt Can Miến (热干面), Đậu bì Tam Tiên (三鲜豆皮), Canh củ sen hầm sườn Hồng Hồ, Cá Võ Xương hấp",
        "travelTip": "Bảo tàng Tỉnh Hồ Bắc (nơi trưng bày Biên chung Tăng Hầu Ất & Kiếm Việt Vương Câu Tiễn) miễn phí nhưng phải đặt lịch trước 5 ngày.",
    },
    "prov-hunan": {
        "bestSeason": "Tháng 4 – Tháng 6 & Tháng 9 – Tháng 11 (Trương Gia Giới trong xanh ít sương mù che cột đá)",
        "cuisine": "Đầu cá hấp ớt xắt (剁椒鱼头), Đậu phụ thối đen Trường Sa (长沙臭豆腐), Tôm hùm đất cay Hỏa Cung Điện",
        "travelTip": "Mua vé Công viên Quốc gia Trương Gia Giới có giá trị 4 ngày liên tiếp; tránh cuối tuần dịp Quốc khánh 1/10 vì rất đông.",
    },
    "prov-guangdong": {
        "bestSeason": "Tháng 10 – Tháng 3 năm sau (Khô ráo, mát mẻ 18–25°C, lý tưởng ăn dimsum & đi Hội chợ Canton Fair)",
        "cuisine": "Dimsum Trà Sáng Quảng Châu (早茶点心), Ngỗng quay Lĩnh Nam (烧鹅), Bún cuốn Tràng Phấn, Bò viên Sán Đầu",
        "travelTip": "Từ Quảng Châu/Thâm Quyến có tàu cao tốc XRL nối thẳng trung tâm Tây Cửu Long (Hồng Kông) trong 14–48 phút.",
    },
    "prov-hainan": {
        "bestSeason": "Tháng 11 – Tháng 4 năm sau (Mùa nắng ấm 24–28°C, tránh mưa bão nhiệt đới tháng 8–9)",
        "cuisine": "Cơm gà Văn Xương (文昌鸡), Cơm dừa hầm gà (椰子鸡), Mì Hải Nam & Hải sản tươi sống Tam Á",
        "travelTip": "Hải Nam áp dụng chính sách miễn visa du lịch 30 ngày cho công dân 59 quốc gia; nhớ mang hộ chiếu khi mua hàng miễn thuế CDF.",
    },
    "prov-sichuan": {
        "bestSeason": "Tháng 9 – Tháng 11 (Rừng lá phong Cửu Trại Câu & Hoàng Long rực sắc thu) & Tháng 3 – Tháng 5",
        "cuisine": "Đậu phụ Ma Bà (麻婆豆腐), Vịt hun khói trà Thành Đô, Gà xé sốt dầu ớt Hồng Du & Xiên que Lạnh (钵钵鸡)",
        "travelTip": "Từ Thành Đô nay đã có tàu cao tốc xuyên núi lên thẳng ga Trấn Giang Quan / Hoàng Long Cửu Trại chỉ dưới 2 giờ.",
    },
    "prov-guizhou": {
        "bestSeason": "Tháng 5 – Tháng 10 (Thác Hoàng Quả Thụ nhiều nước hùng vĩ & mùa hè cao nguyên chỉ 22°C tránh nóng)",
        "cuisine": "Lẩu cá nấu canh chua đỏ người Miêu (凯里酸汤鱼), Mì bò Hoa Khê, Vịt khô chiên giòn Quý Dương",
        "travelTip": "Các huyện dân tộc ở Quý Châu nay kết nối 100% đường sắt cao tốc xuyên cầu cạn và hầm núi rất thuận tiện.",
    },
    "prov-yunnan": {
        "bestSeason": "Quanh năm ('Xuân Thành'); đẹp nhất Tháng 11 – Tháng 3 (Ruộng bậc thang Nguyên Dương có nước & Hải âu Điền Trì)",
        "cuisine": "Bún qua cầu Côn Minh (过桥米线), Lẩu nấm hoang dã (菌子火锅), Gà tần nồi đất Khí Oa Kê, Bánh hoa hồng tươi",
        "travelTip": "Rất tiện đi đường bộ hoặc đường sắt từ Hà Nội – Lào Cai – Hà Khẩu lên Côn Minh, rồi nối tàu cao tốc đến Đại Lý – Lệ Giang – Shangri-La.",
    },
    "prov-shaanxi": {
        "bestSeason": "Tháng 3 – Tháng 5 & Tháng 9 – Tháng 11 (Thời tiết ôn hòa đạp xe trên tường thành cổ Tây An)",
        "cuisine": "Bánh mì kẹp thịt Nhục Giáp Mô (肉夹馍), Mì xé tay Biangbiang (油泼面), Bánh mì xé ngâm canh cừu (羊肉泡馍)",
        "travelTip": "Nên thuê hướng dẫn viên hoặc audio guide tại Binh Mã Dũng (Tần Thủy Hoàng) & Bảo tàng Lịch sử Thiểm Tây để hiểu thấu từng tầng hiện vật.",
    },
    "prov-gansu": {
        "bestSeason": "Tháng 5 – Tháng 10 (Nắng trong xanh cho Hành lang Hà Tây: Trương Dịch – Gia Dục Quan – Đôn Hoàng)",
        "cuisine": "Mì bò kéo tay Lan Châu (兰州牛肉面 'Nhất thanh nhị bạch tam hồng tứ lục'), Thịt cừu hấp thủ trảo, Trà Hạnh Bì",
        "travelTip": "Vé hang đá Mạc Cao Đôn Hoàng (hạng A cho phép vào 8 hang tiêu biểu + rạp vòm) thường hết rất sớm vào mùa hè — phải đặt trước 1 tháng.",
    },
    "prov-qinghai": {
        "bestSeason": "Tháng 6 – Tháng 8 (Hoa cải dầu nở vàng rực quanh Hồ Thanh Hải ở độ cao 3.200m)",
        "cuisine": "Sữa chua Yak truyền thống Tây Ninh (老酸奶), Thịt cừu nướng/luộc cao nguyên, Mì lăng cao lương",
        "travelTip": "Chú ý độ cao 3.200–3.800m; đi chuyển chậm ngày đầu tại Tây Ninh để thích nghi khí áp trước khi đến Hồ Muối Trà Ca.",
    },
    "prov-taiwan": {
        "bestSeason": "Tháng 10 – Tháng 12 & Tháng 3 – Tháng 5 (Mùa thu lá phong A Lý Sơn & mùa xuân hoa anh đào)",
        "cuisine": "Mì bò hầm Đài Bắc (牛肉面), Cơm thịt kho Lỗ Nhục Phạn (卤肉饭), Trà sữa trân châu nguyên bản, Bánh dứa Đài Loan",
        "travelTip": "Dùng thẻ EasyCard hoặc iPASS đi thông suốt MRT Đài Bắc/Cao Hùng, xe buýt và mua sắm tại các cửa hàng tiện lợi 7-Eleven.",
    },
    "prov-inner-mongolia": {
        "bestSeason": "Tháng 6 – Tháng 9 (Thảo nguyên Hô Luân Bối Nhĩ xanh mướt & Lễ hội Naadam mùa hè)",
        "cuisine": "Thịt cừu nướng nguyên con (烤全羊), Trà sữa mặn Mông Cổ (奶茶), Sữa bò nướng & phô mai thảo nguyên",
        "travelTip": "Khoảng cách giữa các điểm thảo nguyên rất xa; nên thuê xe riêng bản địa đi cung đường Hải Lạp Nhĩ – Mãn Châu Lý.",
    },
    "prov-guangxi": {
        "bestSeason": "Tháng 4 – Tháng 10 (Mùa nước đầy Ly Giang & Ruộng bậc thang Long Tích vào vụ cấy/mùa lúa chín tháng 9–10)",
        "cuisine": "Bún ốc Liễu Châu (螺蛳粉), Bún gạo Quế Lâm (桂林米粉), Bún bạn già Nam Ninh (老友粉), Vịt hầm bia Dương Sóc",
        "travelTip": "Từ Hà Nội/Lạng Sơn có thể đi tàu hỏa liên vận hoặc qua cửa khẩu Hữu Nghị Quan sang Nam Ninh – Quế Lâm cực kỳ tiết kiệm.",
    },
    "prov-tibet": {
        "bestSeason": "Tháng 5 – Tháng 10 (Nồng độ oxy cao hơn mùa đông, đường đèo Everest & hồ Namtso thông suốt)",
        "cuisine": "Trà bơ Tây Tạng (酥油茶), Bột lúa mạch rang Tsampa (糌粑), Mì Tây Tạng (Thukpa) & Sữa chua Yak",
        "travelTip": "Khách quốc tế cần xin Giấy phép nhập cảnh Tây Tạng (Tibet Travel Permit) qua công ty lữ hành trước khi lên tàu/máy bay đi Lhasa.",
    },
    "prov-ningxia": {
        "bestSeason": "Tháng 5 – Tháng 10 (Khí hậu khô thoáng sa mạc Sa Pha Đầu & mùa thu hoạch nho/kỷ tử)",
        "cuisine": "Thịt cừu luộc tay (手抓羊肉), Canh thịt cừu Tạp Toái, Trà Bát Bảo kỷ tử táo đỏ & Rượu vang chân núi Hạ Lan",
        "travelTip": "Tây Hạ Vương Lăng nên đi vào cuối buổi chiều khi ánh nắng tà chiếu vàng rực trên các gò lăng mộ cổ.",
    },
    "prov-xinjiang": {
        "bestSeason": "Tháng 6 (Cánh đồng oải hương Y Lê) & Tháng 9 – Tháng 10 (Rừng phong vàng Hồ Kanas & cây Hồ Dương sa mạc)",
        "cuisine": "Cơm tay nắm Tân Cương (手抓饭), Gà đĩa lớn Đại Bàn Kê (大盘鸡), Xiên cừu nướng thìa là, Bánh mì Naan lò đất",
        "travelTip": "Tân Cương rộng gấp gần 5 lần Việt Nam; nên tách chuyến đi làm 2 cung: Bắc Cương (thiên nhiên hồ núi) hoặc Nam Cương (Con đường Tơ lụa Kashgar).",
    },
    "prov-hongkong": {
        "bestSeason": "Tháng 10 – Tháng 12 (Trời thu nắng đẹp, khô ráo nhất để đi Đỉnh Thái Bình & đường mòn Dragon's Back)",
        "cuisine": "Ngỗng quay Yung Kee, Dimsum xe đẩy truyền thống, Bánh dứa bơ Bolo Bao, Trà sữa uyên ương Trà Quán (茶餐厅)",
        "travelTip": "Tải thẻ Octopus vào Apple Wallet / Android để đi phà Star Ferry, xe điện 2 tầng Tramways & MRT mà không cần đổi tiền lẻ.",
    },
    "prov-macau": {
        "bestSeason": "Tháng 10 – Tháng 12 (Khô ráo, thoáng mát, dễ chịu nhất khi đi bộ tham quan 22 công trình di sản UNESCO)",
        "cuisine": "Bánh tart trứng Bồ Đào Nha (葡式蛋挞), Bánh mì kẹp sườn heo (猪扒包), Gà Bồ Đào Nha & Chè hạnh nhân cổ truyền",
        "travelTip": "Khu phố cổ Nhà thờ Thánh Paul – Quảng trường Senado rất gần nhau, có thể đi bộ hoàn toàn trong nửa ngày.",
    },
}


def main():
    content = TARGET.read_text(encoding="utf-8")
    updated_count = 0

    for prov_id, extra in UX_META.items():
        pattern = re.compile(
            rf'(\{{\s*id:\s*"{re.escape(prov_id)}"[^\}}]*?)(\s*\}})',
            re.DOTALL,
        )
        match = pattern.search(content)
        if not match:
            raise RuntimeError(f"Could not find province block for {prov_id}")

        block = match.group(1)
        if "bestSeason:" in block:
            continue

        def js_str(s):
            return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'

        addition = (
            f', bestSeason: {js_str(extra["bestSeason"])}'
            f', cuisine: {js_str(extra["cuisine"])}'
            f', travelTip: {js_str(extra["travelTip"])}'
        )
        new_block = block + addition + match.group(2)
        content = content[: match.start()] + new_block + content[match.end() :]
        updated_count += 1

    TARGET.write_text(content, encoding="utf-8")
    print(f"Enriched {updated_count} provinces in {TARGET}")


if __name__ == "__main__":
    main()
