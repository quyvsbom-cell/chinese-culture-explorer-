"""V6 Pack 1 (36 Additional Honored Brands -> 100 Total, 12 Craft SVG Flows, 18 GIs -> 30 Total, 5 Guilds)
and Pack 2 (36 Visual Liushu Characters, 30 Comic False Friends, 12 Middle Chinese Sound Laws)."""

from __future__ import annotations

BRANDS_ADDITIONAL_36 = [
    ("v6-lzh-01", "craft_studio", "盛锡福", "Shèngxīfú", "Thịnh Tích Phúc", "Sheng Xifu Hatmakers", 1911, "Dân Quốc Nguyên niên (1911)", "prov-beijing", "Vương Phủ Tỉnh, Bắc Kinh", "Mũ dạ lông thú và mũ quan lễ chế tác thủ công Bắc Kinh", "Hand-blocked Peking felt and ceremonial hats"),
    ("v6-lzh-02", "tcm_pharmacy", "鹤年堂", "Hèniántáng", "Hạc Niên Đường", "Henian Tang Longevity Apothecary", 1405, "Minh Vĩnh Lạc năm thứ 3 (1405)", "prov-beijing", "Thái Bình Nhai, Bắc Kinh", "Trà thực dưỡng thảo mộc cung đình cổ truyền (phi lâm sàng)", "Imperial historical wellness herbal tea infusions"),
    ("v6-lzh-03", "craft_studio", "老美华", "Lǎoměihuá", "Lão Mỹ Hoa", "Laomeihua Artisan Footwear", 1911, "Cuối Thanh – Dân Quốc (1911)", "prov-tianjin", "Hòa Bình, Thiên Tân", "Giày vải đế thiên tầng (Thiên Tằng Để) khâu tay Thiên Tân", "Hand-stitched thousand-layer cotton sole footwear"),
    ("v6-lzh-04", "culinary", "耳朵眼炸糕", "Ěrduoyǎn Zhágāo", "Nhĩ Đóa Nhãn Tạc Cao", "Erduoyan Crispy Glutinous Cake", 1900, "Thanh Quang Tự năm thứ 26 (1900)", "prov-tianjin", "Bắc Môn Ngoại, Thiên Tân", "Bánh gạo nếp vàng nhân đậu đỏ chiên phồng vỏ giòn", "Crispy golden glutinous rice pastry filled with sweet red bean"),
    ("v6-lzh-05", "culinary", "六味斋", "Liùwèizhāi", "Lục Vị Trai", "Liuweizhai Braised Heritage Food", 1738, "Thanh Càn Long năm thứ 3 (1738)", "prov-shanxi", "Thái Nguyên, Sơn Tây", "Thịt chân giò và đậu phụ hầm nước dùng gia vị trăm năm", "Aged five-spice master-stock braised delicacies"),
    ("v6-lzh-06", "culinary", "老鼎丰", "Lǎodǐngfēng", "Lão Đỉnh Phong", "Laodingfeng Harbin Pastry House", 1911, "Tuyên Thống năm thứ 3 (1911)", "prov-heilongjiang", "Đạo Ngoại, Cáp Nhĩ Tân", "Bánh nướng Xuyên Tô và kem bơ cổ điển Đông Bắc", "Harbin heritage flaky pastries and artisan cream confections"),
    ("v6-lzh-07", "culinary", "秋林里道斯", "Qiūlín Lǐdàosī", "Thu Lâm Lý Đạo Tư", "Qiulin Churin Smoked Sausages", 1900, "Quang Tự năm thứ 26 (1900)", "prov-heilongjiang", "Nam Cương, Cáp Nhĩ Tân", "Xúc xích xông khói gỗ sồi Giao Đông – Hắc Long Giang", "Fruitwood-smoked Eurasian heritage sausage of Harbin"),
    ("v6-lzh-08", "culinary", "李连贵", "Lǐliánguì", "Lý Liên Quý", "Liliangui Smoked Pork Flatbread", 1842, "Thanh Đạo Quang năm thứ 22 (1842)", "prov-liaoning", "Thẩm Dương / Tứ Bình", "Bánh nghìn lớp giòn kẹp thịt hầm hun khói thảo quả", "Multi-layered baked flatbread wrapping herbal smoked pork"),
    ("v6-lzh-09", "culinary", "鼎丰真", "Dǐngfēngzhēn", "Đỉnh Phong Chân", "Dingfengzhen Changchun Confectionery", 1911, "Dân Quốc Nguyên niên (1911)", "prov-jilin", "Trường Xuân, Cát Lâm", "Bánh trung thu Tát Kỳ Mã và điểm tâm Mãn – Hán", "Traditional Manchu–Han crispy honey sachima and mooncakes"),
    ("v6-lzh-10", "culinary", "老绥元", "Lǎosuíyuán", "Lão Tuy Nguyên", "Laosuiyuan Hohhot Shaomai", 1922, "Thập niên 1920", "prov-inner-mongolia", "Hô Hòa Hạo Đặc, Nội Mông", "Bánh xíu mại thịt cừu thảo nguyên chấm giấm ủ truyền thống", "Steamed steppe lamb-and-ginger shaomai served in wooden baskets"),
    ("v6-lzh-11", "culinary", "槐茂酱园", "Huáimào Jiàngyuán", "Hòe Mậu Tương Viên", "Huaimao Pickled Vegetables", 1671, "Thanh Khang Hy năm thứ 10 (1671)", "prov-hebei", "Bảo Định, Hà Bắc", "Dưa muối tương hột Bảo Định phơi chum sành 350 năm", "Three-century earthen-jar soybean sauce fermented pickles"),
    ("v6-lzh-12", "culinary", "德州扒鸡", "Dézhōu Pájī", "Đức Châu Bái Kê", "Dezhou Braised Chicken House", 1692, "Thanh Khang Hy năm thứ 31 (1692)", "prov-shandong", "Đức Châu, Sơn Đông", "Gà hầm ngũ hương rút xương dọc tuyến Đại Vận Hà", "Melt-off-the-bone spiced braised chicken from the Grand Canal"),
    ("v6-lzh-13", "culinary", "玉堂酱园", "Yùtáng Jiàngyuán", "Ngọc Đường Tương Viên", "Yutang Fermented Condiments", 1714, "Thanh Khang Hy năm thứ 53 (1714)", "prov-shandong", "Tế Ninh, Sơn Đông", "Nước tương mạch nha và đồ muối tương truyền thống Khổng Phủ", "Grand Canal soy sauce and Confucius-house fermented condiments"),
    ("v6-lzh-14", "culinary", "开封第一楼", "Kāifēng Dìyīlóu", "Khai Phong Đệ Nhất Lâu", "Kaifeng Diyilou Soup Dumplings", 1922, "Dân Quốc năm thứ 11 (1922)", "prov-henan", "Khai Phong, Hà Nam", "Bánh bao nước súp Tiểu Long Bao cố đô Biện Kinh", "Imperial Kaifeng thin-skin steamed broth dumplings"),
    ("v6-lzh-15", "craft_studio", "曹素功", "Cáosùgōng", "Tào Tố Công", "Cao Sugong Calligraphy Ink", 1667, "Thanh Khang Hy năm thứ 6 (1667)", "prov-shanghai", "Hoàng Phố, Thượng Hải", "Thỏi mực tùng yên khắc vàng Tào Tố Công thời Khang Hy", "Imperial pine-soot carved inksticks produced in Shanghai since 1667"),
    ("v6-lzh-16", "culinary", "杏花楼", "Xìnghuālóu", "Hạnh Hoa Lâu", "Xinghuai Lou Heritage Dining", 1851, "Thanh Hàm Phong Nguyên niên (1851)", "prov-shanghai", "Phúc Châu Lộ, Thượng Hải", "Bánh trung thu nhân sen nghiền mịn và ẩm thực Hải Phái", "Fine lotus-paste mooncakes and Haipai Cantonese culinary dishes"),
    ("v6-lzh-17", "tcm_pharmacy", "叶开泰", "Yèkāitài", "Diệp Khai Thái", "Ye Kaitai Wuhan Heritage Apothecary", 1637, "Minh Sùng Trinh năm thứ 10 (1637)", "prov-hubei", "Hán Khẩu, Vũ Hán", "Gia huấn 'Dược liệu không sợ công phu', văn hóa y sử Hán Khẩu", "Late-Ming Yangtze apothecary preserving botanical decoction heritage"),
    ("v6-lzh-18", "culinary", "蔡林记", "Càilínjì", "Thái Lâm Ký", "Cailinji Wuhan Hot Dry Noodles", 1928, "Thập niên 1920", "prov-hubei", "Vũ Hán, Hồ Bắc", "Mì kiềm khô trộn tương vừng đen rang thơm (Nhiệt Can Diện)", "Alkaline wheat noodles tossed in roasted stone-ground black sesame paste"),
    ("v6-lzh-19", "culinary", "杨裕兴", "Yángyùxìng", "Dương Dụ Hưng", "Yang Yuxing Handmade Noodles", 1894, "Thanh Quang Tự năm thứ 20 (1894)", "prov-hunan", "Trường Sa, Hồ Nam", "Mì sợi trứng thủ công nấu nước xương hầm Trường Sa", "Egg-dough hand-sliced noodles with clear Changsha broth"),
    ("v6-lzh-20", "culinary", "同庆楼", "Tóngqìnglóu", "Đồng Khánh Lâu", "Tongqinglou Hui-Cuisine Banquet", 1925, "Thập niên 1920", "prov-anhui", "Vu Hồ / Hợp Phì, An Huy", "Ẩm thực Huy Châu hầm niêu đất – cá quế thối văn nhân", "Historic Anhui banquet house of fermented mandarin fish and bamboo stews"),
    ("v6-lzh-21", "culinary", "绿杨邨", "Lǜyángcūn", "Lục Dương Thôn", "Luyangcun Huaiyang Cuisine", 1936, "Thập niên 1930", "prov-jiangsu", "Nam Kinh / Thượng Hải", "Món chay – bánh bao măng tươi chuẩn kỹ nghệ Hoài Dương", "Classic Huaiyang vegetable-and-pork steamed buns"),
    ("v6-lzh-22", "culinary", "采芝斋", "Cǎizhīzhāi", "Thái Chi Trai", "Caizhizhai Suzhou Confections", 1870, "Thanh Đồng Trị năm thứ 9 (1870)", "prov-jiangsu", "Quan Tiền Nhai, Tô Châu", "Kẹo hạt thông, ô mai Tô Châu & mứt gừng cung đình Giang Nam", "Jiangnan pine-nut candies, candied plum, and artisanal sugarwork"),
    ("v6-lzh-23", "culinary", "知味观", "Zhīwèiguān", "Tri Vị Quan", "Zhiweiguan Hangzhou Snacks", 1913, "Dân Quốc năm thứ 2 (1913)", "prov-zhejiang", "Hồ Tây, Hàng Châu", "Tiểu long bao Hàng Châu, ngó sen nhồi gạo nếp hoa mộc tê", "West Lake steamed dumplings and osmanthus honey lotus root"),
    ("v6-lzh-24", "craft_studio", "朱府铜艺", "Zhūfǔ Tóngyì", "Chu Phủ Đồng Nghệ", "Zhufu Bronze Craft Studio", 1875, "Thanh Quang Tự Nguyên niên (1875)", "prov-zhejiang", "Hàng Châu, Chiết Giang", "Đúc và chạm khắc đồng mỹ nghệ dùng trong kiến trúc đình đài", "Architectural bronze statues, cauldrons, and carved temple latticework"),
    ("v6-lzh-25", "tea_spirits", "石湾陈太吉", "Chéntàijí", "Thạch Loan Trần Thái Cát", "Foshan Chen Taiji Rice Wine", 1830, "Thanh Đạo Quang năm thứ 10 (1830)", "prov-guangdong", "Phật Sơn, Quảng Đông", "Rượu gạo Ngọc Băng Thiêu chưng cất chum gốm truyền thống Lĩnh Nam", "Heritage Lingnan clay-aged rice wine exported across Chinese diaspora"),
    ("v6-lzh-26", "culinary", "李锦记", "Lǐjǐnjì", "Lý Cẩm Ký", "Lee Kum Kee Heritage Sauces", 1888, "Thanh Quang Tự năm thứ 14 (1888)", "prov-guangdong", "Châu Hải / Hồng Kông", "Dầu hào nấu chậm từ hàu tươi Nam Thủy xuất khẩu 100+ quốc gia", "Slow-simmered oyster sauce heritage exported globally"),
    ("v6-lzh-27", "tcm_pharmacy", "位元堂", "Wèiyuántáng", "Vị Nguyên Đường", "Wai Yuen Tong Botanicals", 1897, "Thanh Quang Tự năm thứ 23 (1897)", "prov-hongkong", "Hồng Kông / Phật Sơn", "Bảo tồn quy chuẩn bào chế dược thảo truyền thống Lĩnh Nam", "Century-old Lingnan herbal wellness preparations"),
    ("v6-lzh-28", "culinary", "钜记饼家", "Jùjì Bǐngjiā", "Cự Ký Bính Gia", "Koi Kei Macau Almond Pastry", 1938, "Thế kỷ XX (tiếp biến Bồ–Hoa)", "prov-macau", "Đại Tam Ba, Ma Cao", "Bánh hạnh nhân nướng than và kẹo lạc thủ công Ma Cao", "Charcoal-baked Macau almond biscuits and peanut brittle heritage"),
    ("v6-lzh-29", "culinary", "永春老醋", "Yǒngchūn Lǎocù", "Vĩnh Xuân Lão Thố", "Yongchun Aged Red-Yeast Vinegar", 1954, "Kế thừa cổ phương Tống – Minh", "prov-fujian", "Vĩnh Xuân, Tuyền Châu", "Giấm gạo nếp men hồng cúc ủ chum đất 3–5 năm Mân Nam", "Aged Minnan red-yeast rice vinegar bottled across Maritime Silk Road"),
    ("v6-lzh-30", "tea_spirits", "下关沱茶", "Xiàguān Tuóchá", "Hạ Quan Đà Trà", "Xiaguan Compressed Tuocha", 1902, "Thanh Quang Tự năm thứ 28 (1902)", "prov-yunnan", "Đại Lý, Vân Nam", "Trà ép hình bát cổ điển phục vụ tuyến đường Trà–Ngựa Cổ đạo", "Bowl-shaped compressed Yunnan tea shaped for the Ancient Tea-Horse Road"),
    ("v6-lzh-31", "craft_studio", "玉屏箫笛", "Yùpíng Xiāodí", "Ngọc Bình Tiêu Địch", "Yuping Carved Bamboo Flutes", 1673, "Thanh Khang Hy năm thứ 12 (1673)", "prov-guizhou", "Ngọc Bình, Quý Châu", "Sáo trúc và tiêu đồng tâm chạm rồng phượng Quý Châu", "Acoustic carved water-bamboo flutes famed since the early Qing court"),
    ("v6-lzh-32", "tea_spirits", "剑南春", "Jiànnánchūn", "Kiếm Nam Xuân", "Jiannanchun Tang-Lineage Spirits", 1951, "Kế thừa tửu phường Thiêu Xuân thời Đường", "prov-sichuan", "Miên Trúc, Tứ Xuyên", "Bạch tửu Nồng Hương nước suối tuyết Long Môn Sơn", "Sichuan multi-grain baijiu traced to Tang poet Li Bai's Mianzhu tavern lore"),
    ("v6-lzh-33", "culinary", "德懋恭", "Démàogōng", "Đức Mậu Cung", "Demaogong Xi'an Crystal Cakes", 1872, "Thanh Đồng Trị năm thứ 11 (1872)", "prov-shaanxi", "Tây An, Thiểm Tây", "Bánh Thủy Tinh nhân hoa hồng – đường phèn nổi danh Trường An", "Xi'an flaky crystal cakes filled with rose petal conserve and rock sugar"),
    ("v6-lzh-34", "tea_spirits", "互助青稞酒", "Hùzhù Qīngkējiǔ", "Hỗ Trợ Thanh Khoa Tửu", "Qinghai Highland Barley Wine", 1952, "Truyền thống Thanh Hải 400 năm", "prov-qinghai", "Hỗ Trợ, Thanh Hải", "Rượu chưng cất từ lúa mạch cao nguyên Thanh–Tạng trên 3.000m", "Distilled highland hulless barley spirit brewed with Kunlun snowmelt"),
    ("v6-lzh-35", "craft_studio", "尼木藏香", "Nímù Zàngxiāng", "Ni Mộc Tàng Hương", "Nimu Tibetan Artisan Incense", 1650, "Thế kỷ XVII (di sản quốc gia)", "prov-tibet", "Ni Mộc, Lạp Tát", "Hương thảo mộc nghi lễ Tạng truyền se tay dùng nước suối nghiền đá", "Waterwheel-milled Himalayan herbal temple incense crafted in Nimu valley"),
    ("v6-lzh-36", "culinary", "伊犁伊力特", "Yīlìtè", "Y Lực Đặc Tân Cương", "Yilite Xinjiang Steppe Craft", 1956, "Kế thừa văn hóa giao thương Tây Vực", "prov-xinjiang", "Y Lê, Tân Cương", "Sản phẩm men ngũ cốc thung lũng Y Lê trên Con đường Tơ lụa Thảo nguyên", "Northern Silk Road river-valley grain distillery and culinary pantry"),
]

CRAFT_FLOWS_12 = [
    ("flow-xuan", "红星宣纸", "Giấy Tuyên Chỉ Kính Huyện (7 Chặng Cốt Lõi)", "Jingxian Xuan Paper (7 Core Stages)", "泾县宣纸七大核心工序", [
        ("1", "伐檀沤料", "Bóc vỏ Thanh Đàn ngâm suối núi", "Strip & lime-steep Qingtan bark", "Nước suối đá vôi 10-15°C · 100 ngày"),
        ("2", "日晒夜露", "Phơi nắng sương tự nhiên trên đá", "Natural hillside sun–dew bleaching", "300 ngày không hóa chất tẩy Clo"),
        ("3", "碓捣成浆", "Giã cối và phối rơm Sa Điền", "Pulp pounding & rice-straw blend", "Tỷ lệ chuẩn 70% Thanh Đàn / 30% rơm"),
        ("4", "捞纸双人", "Hai thợ nhấc liềm tre vớt giấy", "Two-artisan bamboo screen vat dipping", "Liềm tre mảnh quyết định độ dày tơ"),
        ("5", "压榨脱水", "Ép trục vít thoát ẩm từ từ", "Slow lever-beam water pressing", "Loại 70% ẩm tự do không làm nát thớ"),
        ("6", "焙纸火墙", "Dán từng tờ lên tường vôi nóng nhẹ", "Heated lime-wall thermal brushing", "Nhiệt độ tường ổn định 55-65°C"),
        ("7", "品检盖章", "Soi sáng loại lỗi & đóng triện đỏ", "Backlit grading & red heritage seal", "Bền màu kiềm >1.000 năm (UNESCO)")
    ]),
    ("flow-maotai", "贵州茅台", "Quy Trình 12987 Rượu Mao Đài Quý Châu", "Moutai 12987 Distillation Cycle", "茅台酱香12987工艺", [
        ("1", "重阳下沙", "Hạ Sa (Đợt 1) đúng tiết Trùng Dương", "Chongyang festival sorghum mashing", "1 năm sản xuất 1 chu kỳ duy nhất"),
        ("2", "二次投料", "Nạp thêm 50% cao lương đỏ (Tháo Sa)", "Second-stage red sorghum grain addition", "Nước sông Xích Thủy giàu khoáng đỏ"),
        ("3", "九次蒸煮", "Chưng hơi liên hoàn 9 lượt bằng thùng gỗ", "Nine steam-cooking passes in timber vats", "Mở bung tinh bột chịu nhiệt cao lương"),
        ("4", "八次发酵", "Ủ men 8 lượt trong hầm đá đỏ + đống", "Eight open-pile + stone-pit fermentations", "Vi sinh vật lòng chảo không sao chép được"),
        ("5", "七次取酒", "Rút 7 lượt rượu đầu–giữa–cuối riêng biệt", "Seven discrete distillation cuts", "Mỗi lượt cho hương vị chua/chát/hậu ngọt riêng"),
        ("6", "陶坛陈酿", "Trữ trong chum sành tối thiểu 3–5 năm", "Earthenware jar oxidative maturation", "Làm bay hơi aldehyde giúp rượu êm hậu")
    ]),
    ("flow-chenliji", "陈李济", "Viên Sáp Ong Trần Lý Tế Quảng Châu (1600)", "Chen Liji Beeswax Pill Encapsulation", "陈李济首创蜡壳丸工艺", [
        ("1", "道地选材", "Tuyển nguyên liệu vùng Lĩnh Nam", "Select authentic Lingnan botanicals", "Kiểm soát độ ẩm vùng cận nhiệt đới"),
        ("2", "炮制干燥", "Sấy nhiệt nhẹ & tán bột siêu mịn", "Gentle roasting & micron pulverization", "Giữ trọn tinh dầu thảo mộc tự nhiên"),
        ("3", "炼蜜搓丸", "Luyện mật ong đạt điểm kéo sợi & vê viên", "Refined honey binding & sphere rolling", "Đồng đều kích thước không rạn mặt"),
        ("4", "熔蜡封壳", "Nhúng vỏ sáp ong nóng chảy niêm phong", "Molten beeswax double-dip encapsulation", "Chống mốc ẩm khí hậu nhiệt đới 400 năm"),
        ("5", "朱印印戳", "Đóng dấu tên phương thuốc lên vỏ sáp", "Stamping vermilion wax typography", "Dễ bóc tách không cần chất bảo quản tổng hợp")
    ]),
    ("flow-zhangxiaoquan", "张小泉", "Rèn Kéo Thép Khảm Trương Tiểu Tuyền Hàng Châu", "Zhang Xiaoquan 72-Step Shear Forging", "张小泉嵌钢锻剪工艺", [
        ("1", "选铁炼坯", "Chọn phôi sắt dẻo làm thân gọng kéo", "Soft wrought iron handle body selection", "Giúp cán kéo dai không giòn gãy"),
        ("2", "镶嵌刃钢", "Khảm dải thép cacbon cứng vào lưỡi cắt", "Inlaying high-carbon blade steel insert", "Bí quyết 'Cương khảm thiết' 400 năm"),
        ("3", "反复锻打", "Rèn búa nóng 72 lượt làm khít tinh thể", "72 hot hammer-forging passes", "Kết cấu phân tử thép đặc chắc sắc lâu"),
        ("4", "水火淬火", "Tôi nước suối & kiểm tra độ cứng HRC", "Calibrated oil/water quench & temper", "Đạt độ cứng HRC 54-56 lý tưởng"),
        ("5", "手工磨刃", "Mài đá thô → mịn đạt độ bén cắt lụa", "Wet whetstone bevel honing", "Cắt đứt 10 lớp vải cotton không gợn răng")
    ]),
    ("flow-wuyutai", "吴裕泰", "Trà Nhài 9 Lượt Ướp Hương Ngô Dụ Thái", "Wu Yutai 9-Pass Jasmine Scenting", "吴裕泰茉莉花茶九窨工艺", [
        ("1", "选坯春茶", "Chọn phôi trà xanh xuân hái trước Cốc Vũ", "Select spring green tea base leaves", "Thu mua từ Phúc Kiến/Vân Nam"),
        ("2", "采蕾待放", "Hái nụ hoa nhài Hoành Châu buổi chiều nắng", "Harvest Guangxi jasmine buds pre-bloom", "Chờ đúng đêm 20h nụ hoa bung nhả hương"),
        ("3", "茶花拌和", "Trộn trà với hoa tươi theo lớp (100:80)", "Layer green tea with blooming blossoms", "Tỏa nhiệt độ tự nhiên lên 42-45°C"),
        ("4", "起花烘焙", "Sàng tách xác hoa & sấy than nhẹ khô trà", "De-blossoming sieve & low wood baking", "Lặp lại quy trình tương tự 6 đến 9 lần (Cửu Ám)")
    ]),
    ("flow-jingtailan", "珐琅厂", "Nghệ Thuật Pháp Lang Đồng Đỏ Cảnh Thái Lam", "Beijing Jingtailan Cloisonne Enameling", "景泰蓝百道工序精髓", [
        ("1", "制胎成型", "Gò lá đồng đỏ thành dáng bình đối xứng", "Hand-spinning & hammering red copper body", "Đòi hỏi độ dày đồng đều không méo"),
        ("2", "掐丝焊接", "Uốn dây đồng dẹt thành hoa văn & hàn gắn", "Bending filigree copper wire ribs & soldering", "Sử dụng bột hàn bạc dưới lửa nhỏ"),
        ("3", "点蓝施釉", "Chấm men khoáng sắc xanh Cảnh Thái vào từng ô", "Pipette-inlaying mineral oxide enamel glazes", "Tô lớp chồng lớp 3–4 lần trước mỗi nung"),
        ("4", "烧蓝磨光", "Nung lò 800°C & mài đá than cho phẳng lì", "800°C kiln firing + wet charcoal stoning", "Dây đồng hiện lên sắc nét ngang mặt men"),
        ("5", "镀金抛光", "Mạ vàng đường viền đồng hoàn thiện bảo vật", "Gold electroplating on exposed copper ribs", "Quốc lễ tặng nguyên thủ quốc tế từ thập niên 1950")
    ]),
    ("flow-yixing", "景德瓷厂", "Kỹ Thuật Lò Rồng & Gốm Sứ Cảnh Đức Trấn", "Jingdezhen Porcelain Forming & Dragon Kiln", "景德镇制瓷烧造流程", [
        ("1", "练泥陈腐", "Phối đất Cao Lanh Dao Lý với Đá Sứ & ủ ẩm", "Pugging Daozi kaolin + petuntse china stone", "Tăng độ dẻo kết dính không nứt khi nung"),
        ("2", "拉坯修坯", "Chuốt bàn xoay tròn tâm & gọt mỏng 0.5mm", "Fast wheel throwing & precision trimming", "Độ mỏng 'Minh như kính, Bạc như chỉ'"),
        ("3", "青花绘制", "Vẽ khoáng vật Cô-ban dưới men (Thanh Hoa)", "Under-glaze cobalt oxide brush painting", "Nét vẽ đậm nhạt Phân Thủy 5 sắc mực"),
        ("4", "施釉装匣", "Tráng men thủy tinh & đặt trong bao nung đất sét", "Dip glazing inside protective clay saggers", "Chống tàn tro củi thông bám mặt sứ"),
        ("5", "窑火还原", "Nung khử khí ở 1.320°C tạo men xanh thấu ngọc", "1,320°C reduction firing transformation", "Nước men trong vắt vĩnh cửu không phai")
    ]),
    ("flow-silk", "瑞蚨祥", "Lụa Tơ Tằm & May Đo Truyền Thống Thụy Phù Tường", "Heritage Mulberry Silk Weaving & Tailoring", "瑞蚨祥桑蚕丝织与裁衣工艺", [
        ("1", "养蚕缫丝", "Ươm tơ kén trắng đồng bằng Thái Hồ / Giao Đông", "Selecting Grade-6A white mulberry cocoons", "Tơ liền sợi dài 1.000m mịn đều"),
        ("2", "植物印染", "Nhuộm sắc thực vật (chàm, hoa hòe, vỏ lựu)", "Botanical dye baths (indigo, pagoda bud)", "Sắc vải trầm sang trọng không gây dị ứng"),
        ("3", "古法织缎", "Dệt gấm hoa chìm trên khung cửi gấm Tống/Vân", "Jacquard brocade looming (Song/Yunjin)", "Hoa văn Tứ Quý nổi 3D bắt sáng tự nhiên"),
        ("4", "量体裁衣", "Cắt rập thủ công & đơm khuy Bàn Khấu 26 đường kim", "Bespoke pattern cutting & frog-button knotting", "Ôm dáng đứng thanh lịch không lộ đường may")
    ]),
    ("flow-hukw", "胡开文", "Chế Tác Mực Thỏi Tùng Yên Huy Châu Hồ Khai Văn", "Huizhou Pine-Soot Calligraphy Inkstick", "徽墨制作核心四法", [
        ("1", "烧烟取煤", "Đốt thông cổ thụ Hoàng Sơn thu muội mịn trên chén", "Combusting mountain pine to harvest soot", "Chọn muội nhẹ mịn nhất phần ngọn khói"),
        ("2", "熬胶和料", "Trộn muội với keo da lừa/bò và xạ hương – băng phiến", "Blending soot with animal glue & aromatics", "Ngăn ẩm mốc và tỏa hương thanh tao khi mài"),
        ("3", "杵捣万遍", "Giã chày gỗ thủ công hơn 30.000 nhát trên đe đá", "30,000+ rhythmic mallet strokes on stone", "Làm mịn hạt mực tới kích thước micro"),
        ("4", "入模描金", "Ép khuôn gỗ lê khắc sẵn & phơi khô âm mát 1 năm", "Carved pearwood molding + 1-year shade curing", "Phủ nhũ vàng chữ Hán mặt thỏi trước xuất xưởng")
    ]),
    ("flow-hengshun", "镇江恒顺", "Lên Men Giấm Thơm Hằng Thuận Trấn Giang (GB/T 18623)", "Zhenjiang Vinegar Solid-State Layered Fermentation", "镇江香醋固态分层发酵", [
        ("1", "糯米蒸煮", "Nấu gạo nếp dẻo vùng Trường Giang thành cơm chín", "Steaming glutinous rice into cooked grain bed", "Nguồn tinh bột ngọt thanh tự nhiên"),
        ("2", "糖化酒化", "Rắc men rượu lên men lỏng tạo hương rượu nền", "Saccharification and alcoholic mash fermentation", "Chuyển hóa đường thành nền rượu thơm"),
        ("3", "固态分层", "Trộn trấu – cám lúa mì vào chum & đảo từng lớp", "Solid-state husk blending & manual daily turning", "Tối ưu vi khuẩn axetic ở nhiệt độ 42°C"),
        ("4", "封缸陈酿", "Phủ muối bít kín miệng chum 'nắng ngày sương đêm' 1 năm", "Salt-capped earthenware solar–dew aging", "Đạt mùi thơm chua dịu hậu ngọt đặc trưng GB/T 18623")
    ]),
    ("flow-haitian", "佛山海天", "Ủ Tương Đậu Nành Phơi Nắng Cổ Truyền Phật Sơn", "Foshan Sun-Brewed Heritage Soy Sauce", "古法天然晒露酿造酱油", [
        ("1", "黄豆蒸熟", "Chọn đậu nành không biến đổi gen hấp chín đều", "Steaming non-GMO high-protein soybeans", "Giữ nguyên kết cấu đạm dễ thủy phân"),
        ("2", "制曲发花", "Cấy bào tử Aspergillus oryzae lên bột mì rang", "Koji starter inoculation in temperature rooms", "Sinh hệ enzyme tự nhiên cắt đứt protein"),
        ("3", "晒池晒露", "Ủ trong bể/chum sành lộ thiên nắng Quảng Đông 180 ngày", "180-day subtropical open-sun brine fermentation", "Bứt vị axit amin tự nhiên không đạm thủy phân"),
        ("4", "抽油灭菌", "Rút nước cốt đầu tiên (Đầu Trừu) & lọc vô trùng", "First-press crude soy extraction & pasteurization", "Màu nâu cánh gián bóng tự nhiên, chấm ngon tròn vị")
    ]),
    ("flow-quanjude", "全聚德", "Kỹ Nghệ Quay Vịt Lò Treo Gỗ Táo Tàu Bắc Kinh", "Beijing Jujube-Wood Roast Duck (108-Slice Standard)", "北京挂炉烤鸭制作工序", [
        ("1", "填鸭选胚", "Tuyển vịt trắng Bắc Kinh đạt cân nặng tiêu chuẩn", "Select heritage white Pekin duck (2.5–3kg)", "Lớp mỡ dưới da phân bố đều vừa phải"),
        ("2", "打气吹皮", "Bơm khí tách da khỏi thịt & chần nước sôi mạch nha", "Subcutaneous air inflation + maltose syrup glazing", "Tạo màng đường caramen giòn phồng khi nướng"),
        ("3", "挂炉果木", "Treo móc quay trực tiếp lửa trần gỗ táo tàu – gỗ lê", "Open-hearth hanging oven over jujube & pear logs", "Thịt ngấm khói thơm dịu trái cây không ám khói than"),
        ("4", "片片见肉", "Đầu bếp thái đúng 108 lát cả da lẫn thịt phục vụ nóng", "Tableside carving into 108 even skin-and-meat slices", "Cuốn bánh tráng mỏng cùng hành hoa – tương đậu ngọt")
    ])
]

GI_ADDITIONAL_18 = [
    ("gi-v6-01", "吐鲁番葡萄干", "Tǔlǔfān Pútáogān", "Nho khô Thổ Lỗ Phiên (Tân Cương)", "Turpan Raisins GI (Xinjiang)", "prov-xinjiang", "Bảo hộ lòng chảo Thổ Lỗ Phiên dùng giàn sấy gió tự nhiên ('Âm Phòng'), độ ngọt tự nhiên >70% không đường tinh luyện.", "Đối sánh EVFTA: Nhãn Lồng Hưng Yên & Chuối/Xoài sấy Việt Nam cần chứng nhận quy trình sấy sạch không SO2 quá ngưỡng EU."),
    ("gi-v6-02", "洛川苹果", "Luòchuān Píngguǒ", "Táo đỏ Lạc Xuyên (Thiểm Tây)", "Luochuan Apples GI (Shaanxi)", "prov-shaanxi", "Trồng trên cao nguyên Hoàng Thổ độ cao >1.100m, biên độ nhiệt ngày–đêm rộng giúp ruột táo giòn chắc giàu vitamin.", "Đối sánh EVFTA: Bưởi Da Xanh & Cam Cao Phong học mô hình phân loại kích cỡ Brix xuất khẩu đồng nhất."),
    ("gi-v6-03", "五常大米", "Wǔcháng Dàmǐ", "Gạo thơm Ngũ Thường (Hắc Long Giang)", "Wuchang Rice GI (Heilongjiang)", "prov-heilongjiang", "Canh tác đất đen giàu mùn (*Chernozem*) tưới bằng nước tuyết sông Lạp Lâm, hương thơm cốm dịu tự nhiên GB/T 19266.", "Đối sánh EVFTA: Gạo ST25 Sóc Trăng & Gạo Nàng Hoa học bài học gắn tem truy xuất mã lô vùng lõi để tránh pha trộn giả mạo."),
    ("gi-v6-04", "莱芜生姜", "Láiwú Shēngjiāng", "Gừng vàng Lai Vu (Sơn Đông)", "Laiwu Ginger GI (Shandong)", "prov-shandong", "Củ chắc ít xơ, tinh dầu gừng cay thơm đậm, là mặt hàng gia vị xuất khẩu chủ lực đi Châu Âu từ Cảng Thanh Đảo.", "Đối sánh EVFTA: Gừng Nghệ An & Ớt Việt Nam áp chuẩn dư lượng thuốc BVTV MRL nghiêm ngặt của Đức–Hà Lan."),
    ("gi-v6-05", "洞庭山碧螺春", "Dòngtíngshān Bìluóchūn", "Trà Bích Loa Xuân Động Đình Sơn (Tô Châu)", "Dongtingshan Biluochun Tea GI", "prov-jiangsu", "Trồng xen giữa cây ăn quả trên đảo Thái Hồ để búp trà thấm hương hoa đào–hoa lê, xoắn hình ốc phủ lớp tơ bạc mịn.", "Đối sánh EVFTA: Chè Thái Nguyên Tân Cương (Việt Nam PDO/GI) đồng cấu trúc trà xanh hương cốm không lên men."),
    ("gi-v6-06", "德化白瓷", "Déhuà Báicí", "Bạch Sứ Đức Hóa – 'Ngà Trắng Trung Hoa'", "Dehua Blanc de Chine Porcelain GI", "prov-fujian", "Men trắng ngà mịn mượt như mỡ cừu/ngọc, từ thời Minh–Thanh đã xuất khẩu rộng rãi sang Châu Âu qua Con đường Tơ lụa Biển.", "Đối sánh EVFTA: Gốm Phù Lãng & Sứ Minh Long Việt Nam cần kiểm định hàm lượng Chì/Cadimi theo EC 1935/2004."),
    ("gi-v6-07", "若羌红枣", "Ruòqiāng Hóngzǎo", "Hồng Tảo Nhược Khương (Tân Cương)", "Ruoqiang Red Dates (Jujube) GI", "prov-xinjiang", "Chín khô tự nhiên trên cành dưới khí hậu sa mạc Taklamakan, thịt dày hạt nhỏ giàu chất xơ thực dưỡng truyền thống.", "Đối sánh EVFTA: Nông sản vùng khô hạn Ninh Thuận (Nho, Táo, Thanh long) tối ưu truy xuất tưới tiêu bền vững."),
    ("gi-v6-08", "库尔勒香梨", "Kù'ěrlè Xiānglí", "Lê Thơm Khố Nhĩ Lặc (Tân Cương)", "Korla Fragrant Pear GI", "prov-xinjiang", "Vỏ mỏng mọng nước có thể ăn cả vỏ, quản lý mã số vùng trồng kiểm dịch xuất khẩu nghiêm ngặt sang Đông Nam Á & EU.", "Đối sánh EVFTA: Lê/Mận Bắc Hà & Vải Thiều áp dụng mã số vùng trồng cấp quốc gia để thông quan tự động."),
    ("gi-v6-09", "福鼎白茶", "Fúdǐng Báichá", "Bạch Trà Phúc Đỉnh (Phúc Kiến)", "Fuding White Tea GI (Fujian)", "prov-fujian", "Không vò không xào, chỉ làm héo tự nhiên bằng nắng và gió biển giữ trọn hương thảo mộc ngọt sâu ('1 năm trà, 3 năm dược, 7 năm bảo').", "Đối sánh EVFTA: Bạch Trà Shan Tuyết Hà Giang (Phin Hồ) đạt phân khúc sưu tầm giá trị cao tương tự tại Paris/Berlin."),
    ("gi-v6-10", "龙口粉丝", "Lóngkǒu Fěnsī", "Miến Đậu Xanh Long Khẩu (Sơn Đông)", "Longkou Vermicelli Noodles GI", "prov-shandong", "Sợi miến trong suốt dai không nát nhờ giống đậu xanh và quy trình lên men chua tự nhiên của nước suối Chiêu Viễn.", "Đối sánh EVFTA: Miến Dong Bình Liêu (Quảng Ninh) & Bánh Đa Nem truyền thống đồng câu chuyện bảo hộ kỹ nghệ sạch."),
    ("gi-v6-11", "赣南脐橙", "Gànnán Qíchéng", "Cam Rốn Cám Nam (Giang Tây)", "Gannan Navel Orange GI", "prov-jiangxi", "Giàu sắc tố cam tự nhiên nhờ đất đỏ sườn đồi giàu nguyên tố hiếm vùng Nam Giang Tây.", "Đối sánh EVFTA: Cam Vinh & Bưởi Diễn Việt Nam học quy chuẩn thu hái chín cây và đóng thùng tiêu chuẩn pallet EUR."),
    ("gi-v6-12", "六安瓜片", "Lù'ān Guāpiàn", "Trà Lục An Qua Phiến (An Huy)", "Lu'an Guapian Green Tea GI", "prov-anhui", "Trà xanh duy nhất chỉ chọn lá thứ 2 không hái búp – không cọng, xào đôi chảo bằng chổi tre công phu.", "Đối sánh EVFTA: Mở rộng góc nhìn đa dạng hóa chế biến lá trà Việt Nam thay vì chỉ xuất thô búp sấy."),
    ("gi-v6-13", "东北黑木耳", "Dōngběi Hēimù'ěr", "Mộc Nhĩ Đen Đại Hưng An Lĩnh", "Dongbei Wild Black Fungus GI", "prov-heilongjiang", "Nuôi cấy trên thân gỗ sồi tự nhiên dưới khí hậu lạnh Đông Bắc giúp tai mộc nhĩ dày giòn sạch tự nhiên.", "Đối sánh EVFTA: Mộc nhĩ & Nấm hương Tây Bắc Việt Nam chuẩn hóa chứng nhận hữu cơ EU Organic."),
    ("gi-v6-14", "章丘大葱", "Zhāngqiū Dàcōng", "Hành Khổng Lồ Chương Khâu (Sơn Đông)", "Zhangqiu Giant Scallion GI", "prov-shandong", "Thân trắng giòn ngọt cao >1 mét chuyên dùng cuộn bánh tráng Vịt quay Bắc Kinh chuẩn mực.", "Đối sánh EVFTA: Hành Tím Lý Sơn & Tỏi Bắc Giang chuẩn hóa phân hạng củ sạch xuất khẩu."),
    ("gi-v6-15", "金乡大蒜", "Jīnxiāng Dàsuàn", "Tỏi Trắng Kim Hương (Sơn Đông)", "Jinxiang Garlic GI", "prov-shandong", "Nguồn cung tỏi lớn nhất thế giới tuân thủ hạn ngạch thuế quan (TRQ) đặc biệt khi nhập vào Liên minh Châu Âu.", "Đối sánh EVFTA: Tỏi Cô Đơn Lý Sơn xây dựng phân khúc tỏi đen đặc sản thay vì cạnh tranh sản lượng giá rẻ."),
    ("gi-v6-16", "宜兴紫砂", "Yíxīng Zǐshā", "Ấm Đất Nung Tử Sa Nghi Hưng (Giang Tô)", "Yixing Purple Clay Teaware GI", "prov-jiangsu", "Đất khoáng thạch anh–sắt vùng Hoàng Long Sơn tạo độ xốp kép giữ nhiệt trà Ô Long/Phổ Nhĩ tuyệt hảo không tráng men.", "Đối sánh EVFTA: Gốm Đất Nung Vĩnh Long & Gốm Bàu Trúc (Ninh Thuận) tương đồng giá trị vật liệu đất sét tự nhiên không chì."),
    ("gi-v6-17", "贺兰山东麓葡萄酒", "Hèlánshān Dōnglù", "Vang Đỏ Đông Sơn Hạ Lan (Ninh Hạ)", "Helan Mountain East Foothill Wine GI", "prov-ningxia", "Vùng trồng nho làm vang đẳng cấp quốc tế độ cao 1.100m, đoạt hàng trăm huy chương Decanter tại London & Pháp.", "Đối sánh EVFTA: Vang Đà Lạt & Mãng cầu/Mật nho Ninh Thuận ứng dụng công nghệ ủ thùng sồi nâng hạng xuất khẩu."),
    ("gi-v6-18", "建宁通心白莲", "Jiànníng Báilián", "Hạt Sen Trắng Kiến Ninh (Phúc Kiến)", "Jianning Hollow White Lotus Seed GI", "prov-fujian", "Thông tâm thủ công giữ trọn hương thơm bùi dùng trong cung đình và súp chè dưỡng sinh truyền thống.", "Đối sánh EVFTA: Hạt Sen Đồng Tháp & Nhãn Hạt Sen Hưng Yên nâng giá trị đóng gói ăn liền đạt chuẩn ISO 22000."),
]

MERCHANT_GUILDS_5 = [
    ("guild-jin", "晋商 · 票号", "Tấn Thương (Thương bang Sơn Tây)", "Shanxi Merchants (Jin Guild)", "Thế kỷ XVI – XIX", "prov-shanxi", "Nổi tiếng với Nhật Thăng Xương (Bình Dao, 1823) sáng tạo Hối phiếu ngân hàng ('Phiếu Hiệu') mạng lưới từ Lạp Tát tới Moskva, đặt chữ 'Nghĩa' Quan Công lên đầu chữ Tín.", "Pioneered China's first native remittance bank Rishengchang (1823) in Pingyao, building silver draft corridors stretching to St. Petersburg."),
    ("guild-hui", "徽商 · 贾而好儒", "Huy Thương (Thương bang An Huy)", "Huizhou Merchants (Hui Guild)", "Thế kỷ XV – XIX", "prov-anhui", "Nắm độc quyền Muối Hoài Bắc, Trà Lục An/Kỳ Môn, Mực Hồ Khai Văn & Giấy Tuyên Chỉ. Trọng học 'Giả nhi hiếu Nho', đầu tư Thư viện và trường thi hương cho quê hương Hoành Thôn.", "Dominated salt, tea, ink, and Xuan paper trades while endowing Confucian academies across southern Anhui."),
    ("guild-yue", "粤商 · 十三行", "Việt Thương (Thương bang Quảng Đông)", "Cantonese Merchants (Guangzhou Hongs)", "Thế kỷ XVIII – Đương đại", "prov-guangdong", "Cầu nối Quảng Châu Thập Tam Hàng và hải thương Đông Nam Á – Châu Âu. Linh hoạt đa ngôn ngữ, đặt nền tảng chuỗi cung ứng Thâm Quyến – Phật Sơn – Hồng Kông hiện đại.", "Centered around the Canton Thirteen Factories, mastering global porcelain, silk, and modern Pearl River manufacturing."),
    ("guild-min", "闽商 · 海丝", "Mân Thương (Thương bang Phúc Kiến)", "Fujian Maritime Merchants (Min Guild)", "Thế kỷ X – Đương đại", "prov-fujian", "Khởi nguồn từ cảng quốc tế Tuyền Châu đời Tống–Nguyên (*Đoàn thuyền Phúc Thuyền*), buôn sứ Đức Hóa, trà Vũ Di/An Khê và tạo cầu nối thương mại bền chặt tại Hội An – Sài Gòn (Chợ Lớn).", "Driven by Quanzhou's Song–Yuan maritime hub trading Dehua white porcelain and Oolong tea across Southeast Asian ports like Hoi An."),
    ("guild-zhe", "浙商 · 甬帮", "Chiết Thương (Ninh Ba – Ôn Châu – Hàng Châu)", "Zhejiang Merchants (Ningbo / Wenzhou)", "Thế kỷ XIX – Đương đại", "prov-zhejiang", "Kết hợp truyền thống Hàng Châu (Trà, Tơ, Kéo Trương Tiểu Tuyền) với tính tiên phong tài chính Ninh Ba và cụm công nghiệp hàng tiêu dùng Nghĩa Ô ngày nay.", "Bridge Hangzhou artisan houses, Ningbo deep-water port commerce, and modern Yiwu/Wenzhou private supply chains.")
]

LIUSHU_VISUAL_36 = [
    ("ls-01", "日", "日", "rì", "Nhật", "Ngày / Mặt Trời", "xiangxing", "日", "Hình khối tròn có chấm tâm Mặt Trời", "Nguyên khối tượng hình", "Giáp Cốt: Hình tròn chấm giữa → Kim Văn: Khung tròn → Tiểu Triện: Bầu dục → Khải Thư: Khung chữ nhật khép kín.", "Mặt trời, ngày, ban ngày (ví dụ: Nhật ký, Ngày giao hàng 日期).", "Sun, day, daily date", "本日 / 交货日期 (Ngày giao hàng)"),
    ("ls-02", "月", "月", "yuè", "Nguyệt", "Tháng / Trăng", "xiangxing", "月", "Hình trăng lưỡi liềm khuyết có vạch sáng bên trong", "Nguyên khối tượng hình", "Giáp Cốt: Trăng lưỡi liềm cong → Tiểu Triện: Nét kéo dọc cân đối → Khải Thư: Khung hẹp 2 gạch ngang.", "Mặt trăng, tháng trong năm (Lưu ý phân biệt Bộ Nhục ⺼ khi làm bộ thủ bên trái).", "Moon, calendar month", "本月 / 月度报告 (Báo cáo tháng)"),
    ("ls-03", "山", "山", "shān", "Sơn", "Núi", "xiangxing", "山", "Ba đỉnh núi nhô cao nối liền chân", "Nguyên khối tượng hình", "Giáp Cốt: Vẽ 3 chỏm nhọn liền chân → Kim Văn: Ba đỉnh đều nhau → Khải Thư: Nét sổ giữa cao + khung đáy ngang.", "Núi non, địa hình (chữ đóng vai trò bộ ý trong 峰 Đỉnh núi, 岭 Dãy núi).", "Mountain, ridge", "山水画 / 五岳 (Tranh sơn thủy / Ngũ Nhạc)"),
    ("ls-04", "水", "水", "shuǐ", "Thủy", "Nước", "xiangxing", "水", "Dòng chảy xoáy ở giữa cùng giọt nước hai bên", "Nguyên khối tượng hình", "Giáp Cốt: Dòng sông uốn lượn với hạt nước bắn → Khải Thư: Nét móc giữa + hai nét phẩy mác cân xứng.", "Nước, thủy lợi, thủy văn; đứng bên trái biến thể thành Ba chấm Thủy 氵.", "Water, river, hydraulic flow", "水利 / 水运 (Thủy lợi / Vận tải thủy)"),
    ("ls-05", "木", "木", "mù", "Mộc", "Cây cối / Gỗ", "xiangxing", "木", "Thân cây đứng thẳng, cành xòe trên, rễ cắm dưới", "Nguyên khối tượng hình", "Giáp Cốt: Chữ thập có ngọn cong lên & rễ xòe xuống → Khải Thư: Ngang, Sổ, Phẩy, Mác rõ rệt.", "Cây cối, gỗ (dựng Đấu Củng), hành Mộc mùa xuân, vật liệu ISPM-15.", "Tree, timber, Wood element", "实木包装 / 木材 (Bao bì gỗ / Vật liệu gỗ)"),
    ("ls-06", "鼎", "鼎", "dǐng", "Đỉnh", "Cái vạc đồng", "xiangxing", "鼎", "Hai tai vạc trên miệng, thân vạc, hai bên chân vạc", "Nguyên khối tượng hình", "Giáp Cốt: Đỉnh đồng 3 chân 2 quai chi tiết → Khải Thư: 12 nét vững chãi.", "Vật lễ triều Thương–Chu, biểu tượng lời hứa trọng tín ('Nhất ngôn cửu đỉnh').", "Three-legged bronze ritual tripod; solemn weight", "鼎力支持 / 一言九鼎 (Hết lòng hỗ trợ B2B)"),
    ("ls-07", "舟", "舟", "zhōu", "Chu / Thuyền", "Thuyền", "xiangxing", "舟", "Hình thân thuyền gỗ cắt đôi khoang kín nước nhìn từ trên", "Nguyên khối tượng hình", "Giáp Cốt: Đáy thuyền nhọn, mạn thuyền và khoang giữa → Khải Thư: Hình dáng thuyền dựng đứng.", "Con thuyền (làm bộ ý trong 船 Thuyền, 航 Hàng hải, 舱 Khoang tàu).", "Boat, vessel hull", "同舟共济 / 舱单 (Cùng thuyền vượt sóng / Manifest)"),
    ("ls-08", "门", "門", "mén", "Môn", "Cánh cửa", "xiangxing", "门", "Hai cánh cửa gỗ có khe mở ở giữa", "Nguyên khối tượng hình", "Giáp Cốt: Vẽ hai cánh cổng có chốt quay → Phồn thể 門 → Giản thể 门 3 nét nhanh.", "Cửa, ngành môn, cửa khẩu biên giới, cổng soát vé cao tốc.", "Gate, door, academic discipline", "国门 / 登机口门 (Cửa khẩu / Cổng lên)"),
    ("ls-09", "上", "上", "shàng", "Thượng", "Bên trên", "zhishi", "一", "Đường chân trời cong ở dưới + vạch chỉ lên trên", "Chỉ sự dùng ký hiệu định vị", "Giáp Cốt: Vạch ngắn trên nét cong dài → Khải Thư: Sổ – Ngang nhỏ – Đáy ngang dài.", "Phía trên, lên tàu, thượng nguồn, trình cấp trên.", "Up, above, board vessel", "上游 / 上船 (Thượng nguồn / Lên tàu)"),
    ("ls-10", "下", "下", "xià", "Hạ", "Bên dưới", "zhishi", "一", "Đường ngang trên + chấm chỉ xuống phía dưới", "Chỉ sự dùng ký hiệu định vị", "Giáp Cốt: Đường cong ở trên + vạch chỉ dưới → Khải Thư: Ngang – Sổ – Chấm.", "Bên dưới, hạ lưu, xuống đơn hàng (下单 Xiàdān).", "Down, below, place purchase order", "下游 / 下单 (Hạ lưu / Đặt hàng PO)"),
    ("ls-11", "本", "本", "běn", "Bản / Bổn", "Gốc rễ / Vốn", "zhishi", "木", "Chữ Mộc 木 có thêm 1 vạch ngang đánh dấu phần gốc rễ", "Chỉ sự thêm dấu chỉ bộ phận", "Kim Văn: Cây 木 có chấm/ngang ở gốc → Khải Thư: Nét ngang ngắn dưới chữ Mộc.", "Gốc rễ, căn bản, chi phí vốn (成本), quyển sách (cuộn sách).", "Root, basis, principal cost", "成本核算 / 根本 (Tính giá thành / Căn bản)"),
    ("ls-12", "末", "末", "mò", "Mạt", "Ngọn cây / Cuối", "zhishi", "木", "Chữ Mộc 木 có nét ngang DÀI trên đỉnh đánh dấu ngọn cây", "Chỉ sự phân biệt ngọn vs gốc", "Kim Văn: Cây có nhánh trên phóng dài → Khải Thư: Nét ngang trên dài hơn ngang giữa.", "Ngọn, phần cuối tháng/quý (Cuối cùng 'Bản mạt' 本末: Gốc và Ngọn).", "Tip, end of month/quarter", "本末倒置 / 月末 (Đảo ngược gốc ngọn / Cuối tháng)"),
    ("ls-13", "明", "明", "míng", "Minh", "Sáng sủa / Rõ", "huiyi", "日", "Mặt Trời (日) ghép cùng Mặt Trăng (月) cùng tỏa sáng", "Hội ý hai thiên thể chiếu rọi", "Giáp Cốt: Cửa sổ đón ánh trăng/trời → Chu/Khải: Nhật + Nguyệt sát cạnh nhau.", "Ánh sáng, thông minh, ngày mai, giải thích rõ (说明书 Tài liệu hướng dẫn).", "Bright, clear, tomorrow, explain clearly", "说明手册 / 声明 (Hướng dẫn kỹ thuật / Tuyên bố DDS)"),
    ("ls-14", "休", "休", "xiū", "Hưu", "Nghỉ ngơi", "huiyi", "亻", "Người (亻) dựa lưng vào thân cây lớn (木) bóng mát", "Hội ý cảnh tượng sinh hoạt", "Giáp Cốt: Hình người nghiêng mình tựa gốc cây → Khải Thư: Nhân đứng + Mộc.", "Nghỉ ngơi, nghỉ lễ quốc gia (公休), ngừng máy bảo trì.", "Rest, holiday leave", "公休日 / 休假 (Ngày nghỉ lễ / Nghỉ phép)"),
    ("ls-15", "信", "信", "xìn", "Tín", "Tin cậy / Thư tín", "huiyi", "亻", "Người (亻) đứng giữ trọn Lời nói (言) của mình", "Hội ý đạo đức cốt lõi Nho gia", "Kim Văn: Nhân + Ngôn → Khải Thư: Nhân đứng + chữ Ngôn.", "Chữ Tín thương mại, thư tín dụng (信用证 L/C), thông tin dữ liệu.", "Trust, creditworthiness, letter/L/C", "信用证 / 失信 (Thư tín dụng L/C / Mất chữ tín)"),
    ("ls-16", "安", "安", "ān", "An", "Yên ổn / An toàn", "huiyi", "宀", "Mái nhà che chở (宀 Miên) bảo vệ người phụ nữ bên trong (女)", "Hội ý tổ ấm bình yên", "Giáp Cốt: Hình người ngồi an tọa dưới mái nhà → Khải Thư: Miên trên Nữ.", "An toàn lao động, thu xếp công việc (安排), vận tải an toàn.", "Safe, peaceful, arrange schedule", "安全生产 / 安排装柜 (An toàn SX / Sắp xếp đóng cont)"),
    ("ls-17", "采", "采", "cǎi", "Thái / Sái", "Hái / Thu thập", "huiyi", "爫", "Bàn tay trên cao (爫 Trảo) đang hái quả/búp trên cành cây (木)", "Hội ý động tác lao động", "Giáp Cốt: Tay xòe 5 ngón chụp xuống ngọn cây → Khải Thư: Bộ Trảo + Mộc.", "Thu hái trà tiết Thanh Minh, thu mua nguồn hàng (采购), áp dụng chuẩn.", "Pick/harvest tea, procure goods", "采购部 / 采茶 (Phòng Thu mua / Hái trà)"),
    ("ls-18", "武", "武", "wǔ", "Vũ", "Võ / Ngừng chiến", "huiyi", "止", "Bàn chân bước (止 Chỉ) mang ngọn kích (戈 Qua) — Tả Truyện giải 'Chỉ qua vi vũ'", "Hội ý triết lý dừng binh đao", "Giáp Cốt: Ngọn giáo 戈 kết hợp dấu chân 止 → Khải Thư.", "Vũ thuật, chiến lược giữ hòa bình (chống chiến tranh bằng thực lực).", "Martial arts, military defense", "武术 / 威武 (Võ thuật / Uy nghiêm)"),
    ("ls-19", "江", "江", "jiāng", "Giang", "Sông lớn (Trường Giang)", "xingsheng", "氵", "Bộ Thủy 氵 (Nước chảy)", "Thanh phù 工 (gōng / *krōng cổ) gợi âm", "Khải Thư chuẩn: Ba chấm Thủy bên trái + chữ Công bên phải.", "Sông lớn (xưa chuyên chỉ Trường Giang; chữ Hán-Việt hay dùng tên sông).", "Large river (historically Yangtze)", "长江 / 江南 (Trường Giang / Giang Nam)"),
    ("ls-20", "海", "海", "hǎi", "Hải", "Biển cả", "xingsheng", "氵", "Bộ Thủy 氵 (Vùng nước mênh mông)", "Thanh phù 每 (měi) kiêm gợi ý nước tụ mọi nơi", "Kim Văn: Nước Thủy + Mẫu/Mỗi → Tiểu Triện → Khải Thư chuẩn.", "Vận chuyển đường biển (海运), Hải quan tổng cục (海关 GACC).", "Sea, ocean freight, customs", "海运提单 / 海关 (Vận đơn biển / Hải quan)"),
    ("ls-21", "清", "清", "qīng", "Thanh", "Trong sạch / Thông quan", "xingsheng", "氵", "Bộ Thủy 氵 (Nước trong vắt)", "Thanh phù 青 (qīng: sắc xanh thanh khiết)", "Kim Văn: Nước Thủy + Thanh (cỏ xanh trên giếng đá) → Tiểu Triện → Khải Thư.", "Trong trẻo, triều Thanh (清朝), làm thủ tục Thông quan hải quan (清关).", "Clear, Qing Dynasty, customs clearance", "清关 / 清明节 (Thông quan / Tiết Thanh Minh)"),
    ("ls-22", "货", "貨", "huò", "Hóa", "Hàng hóa / Tiền tệ", "xingsheng", "贝", "Bộ Bối 贝 dưới đáy (vỏ sò tiền tệ cổ đại)", "Thanh phù 化 (huà: trao đổi biến hóa)", "Tiểu Triện: Chữ Hóa 化 trên vỏ sò Bối 貝 → Giản thể 货 dưới dạng Bối 贝.", "Hàng hóa xuất nhập khẩu (货物), Tiền hàng (货款), Hàng rời/Container.", "Goods, merchandise, cargo value", "货物清关 / 货代 (Thông quan hàng / Forwarder)"),
    ("ls-23", "贸", "貿", "mào", "Mậu", "Trao đổi buôn bán", "xingsheng", "贝", "Bộ Bối 贝 (Tiền bạc) dưới hai cánh cửa trao đổi 卯", "Thanh phù 卯 (mǎo) tượng trưng hai bên đối ứng", "Kim Văn: Hai cánh cửa giao dịch 卯 trên vỏ sò 貝 → Giản thể 贸.", "Ngoại thương (外贸), Thương mại quốc tế, Khu mậu dịch tự do.", "Trade, commerce, export–import", "外贸 / 自由贸易 (Ngoại thương / Thương mại tự do)"),
    ("ls-24", "税", "稅", "shuì", "Thuế", "Thuế khóa", "xingsheng", "禾", "Bộ Hòa 禾 bên trái (lúa gạo nông nghiệp xưa nộp thuế)", "Thanh phù 兑 (duì)", "Tiểu Triện: Cây lúa Hòa 禾 + Chữ Đoài 兑 → Phồn 稅 → Giản 税.", "Thuế nhập khẩu (关税), Thuế VAT, Cơ chế thuế biên giới Carbon CBAM.", "Tax, customs tariff, duty", "关税 / 碳边境税 (Thuế quan / Thuế biên giới carbon)"),
    ("ls-25", "港", "港", "gǎng", "Cảng", "Bến cảng / Hương Cảng", "xingsheng", "氵", "Bộ Thủy 氵 (Vùng nước đậu tàu)", "Thanh phù 巷 (gǎng/xiàng: luồng lạch hẻm nước)", "Tiểu Triện: Nước 氵 + Hẻm luồng 巷 → Khải Thư 港.", "Cảng biển quốc tế (Diêm Điền, Ninh Ba, Rotterdam, Hải Phòng), Sân bay.", "Port, harbor, logistics hub", "港口拥堵 / 香港 (Ùn tắc cảng / Hồng Kông)"),
    ("ls-26", "舱", "艙", "cāng", "Thương / Khoang", "Khoang tàu kín nước", "xingsheng", "舟", "Bộ Chu 舟 (Con thuyền gỗ Phúc Thuyền)", "Thanh phù 仓 (cāng: kho chứa)", "Phồn thể: Thuyền 舟 + Kho 倉 → Giản thể: Thuyền 舟 + 仓.", "Khoang vách kín nước Bảo thuyền Trịnh Hòa, Khoang tàu / Booking slot (订舱).", "Ship compartment, cargo hold, vessel booking", "水密隔舱 / 订舱 (Vách kín nước / Đặt chỗ tàu)"),
    ("ls-27", "窑", "窯", "yáo", "Diêu", "Lò nung gốm / Nhà hang", "xingsheng", "穴", "Bộ Huyệt 穴 bên trên (hang đào vào sườn đất)", "Thanh phù 䍃 (yáo) gợi bình gốm sành bên trong", "Tiểu Triện: Hang Huyệt 穴 trên lò nung bình → Khải Thư Phồn 窯 / Giản 窑.", "Lò rồng Cảnh Đức Trấn, Ngũ Đại Danh Diêu Tống, Nhà hang Diêu Động.", "Porcelain kiln, cave dwelling", "龙窑 / 五大名窑 (Lò rồng / Ngũ Đại Danh Diêu)"),
    ("ls-28", "碳", "碳", "tàn", "Thán", "Cacbon / Than", "xingsheng", "石", "Bộ Thạch 石 (Khoáng chất đá than)", "Thanh phù 炭 (tàn: than củi)", "Chữ hóa học ghép Đá Thạch 石 với chữ Thán 炭.", "Khí thải Carbon Scope 1 & 2, Thuế điều chỉnh biên giới Carbon EU CBAM.", "Carbon, emissions reporting", "碳排放 / 碳边境调节机制 (Phát thải carbon / CBAM)"),
    ("ls-29", "检", "檢", "jiǎn", "Kiểm", "Kiểm tra / Kiểm định", "xingsheng", "木", "Bộ Mộc 木 (Thẻ gỗ niêm phong phong thư kiểm duyệt cổ)", "Thanh phù 佥 (qiān: cùng đối chiếu)", "Triện/Khải Phồn: Gỗ Mộc 木 + 僉 → Giản thể 检.", "Kiểm tra chất lượng QC/AQL (质检), Kiểm dịch động thực vật ISPM-15 (检验).", "Inspect, QC check, customs exam", "质检 / 检验检疫 (Kiểm tra chất lượng / Kiểm dịch)"),
    ("ls-30", "签", "簽", "qiān", "Thiêm", "Ký tên / Thị thực", "xingsheng", "⺮", "Bộ Trúc ⺮ trên đầu (thẻ tre ghi tên/thủ tục xưa)", "Thanh phù 佥 (qiān)", "Phồn thể: Thẻ Trúc ⺮ + 僉 → Giản thể 签 gọn nét.", "Ký hợp đồng song phương (签订), Xin thị thực Visa TQ X1/M (签证).", "Sign contract, visa endorsement", "签订合同 / 签证 (Ký hợp đồng / Visa)"),
    ("ls-31", "宪", "憲", "xiàn", "Hiến", "Hiến pháp / Quy phạm", "huiyi", "宀", "Mái nhà triều đình (宀) + Mắt nhìn thấu (目 thu gọn) + Tâm (心)", "Lệ công bố pháp độ treo trên cổng triều đình", "Giáp/Kim Văn: Mắt 目 dưới mái nhà → Phồn 憲 / Giản 宪.", "Quy phạm pháp lý tối cao (như 《Hiến Đế》 hay 《Hiến Chương》).", "Constitution, fundamental statutory law", "宪法 / 宪章 (Hiến pháp / Hiến chương)"),
    ("ls-32", "衡", "衡", "héng", "Hành", "Cân thăng bằng", "xingsheng", "行", "Bộ Hành 行 (Hai bên ngã tư chữ Hằng cố định)", "Sừng bò buộc thanh ngang cân trọng lượng xưa", "Giáp Cốt/Kim Văn: Ngã tư 行 bao quanh sừng bò buộc đòn cân → Khải Thư.", "Cân nặng VGM SOLAS, Cán cân thương mại, Hành Sơn (Nam Nhạc).", "Balance scale, weighbridge, evaluate", "权衡 / 衡山 (Cân nhắc / Nam Nhạc Hành Sơn)"),
    ("ls-33", "老", "老", "lǎo", "Lão", "Già / Lâu đời", "zhuanzhu", "耂", "Người tóc dài chống gậy 匕 — cặp Chuyển chú tương hỗ với Khảo 考", "Chuyển chú với 考 (cùng bộ gốc chỉ cao tuổi)", "Giáp Cốt: Hình cụ già chống gậy → Kim Văn → Tiểu Triện → Khải Thư.", "Thương hiệu lâu năm 中华老字号, Lão Tử (老子), Khảo sát cổ.", "Aged, venerable, long-established", "中华老字号 (Thương hiệu di sản trăm năm)"),
    ("ls-34", "考", "考", "kǎo", "Khảo", "Khảo sát / Thi cử", "zhuanzhu", "耂", "Chung đầu bộ Lão 耂 (tạo cặp Chuyển chú kinh điển trong Thuyết Văn)", "Thanh phù 丂 (kǎo) thở nhẹ ngân dài", "Giáp Cốt: Đồng dạng gốc cụ già tựa Lão → Kim Văn → Khải Thư 6 nét.", "Thi Khoa cử (科举), Khảo cổ học (考古), Kiểm định nghiên cứu (考察).", "Examine, archaeological audit, inspect factory", "实地考察 / 考古 (Đi kiểm tra nhà máy / Khảo cổ)"),
    ("ls-35", "来", "來", "lái", "Lai", "Đến / Tương lai", "jiajie", "木", "Hình gốc vẽ cây lúa mạch (Lúa mì vàng 麥 xưa)", "Giả tá mượn âm cây lúa mì sang động từ 'Đến'", "Giáp Cốt: Cây lúa mạch trĩu bông → Phồn 來 → Giản 来.", "Ví dụ kinh điển của phép Giả Tá (mượn chữ đồng âm không cần tạo chữ mới).", "Come, arrive (borrowed phonetic loan character)", "未来 / 往来 (Tương lai / Giao thương qua lại)"),
    ("ls-36", "难", "難", "nán", "Nan / Nạn", "Khó khăn / Chim sẻ xưa", "jiajie", "隹", "Gốc là hình một loài chim cổ (Chữ Chuy 隹 chỉ chim)", "Giả tá lâu ngày thành nghĩa thuần 'Khó khăn, Hoạn nạn'", "Kim Văn: Hình chim cổ 隹 → Phồn 難 → Giản thể 又 + 隹.", "Vượt khó, giải quyết vướng mắc thông quan (疑难杂症).", "Difficult, hurdle, customs obstacle", "疑难案件 / 克服困难 (Case khó / Vượt khó khăn)")
]

FALSE_FRIENDS_30 = [
    ("ff-01", "合同", "hétong", "Hiệp đồng (phối hợp chung)", "Hợp đồng thương mại ràng buộc pháp lý", "Contract (Legally Binding)", "Đừng nhầm với 'hiệp đồng tác chiến' không ràng buộc; ký 合同 là chịu trách nhiệm tòa/trọng tài."),
    ("ff-02", "方案", "fāng'àn", "Phóng án (không dùng trong Việt)", "Phương án / Đề xuất kỹ thuật chính thức", "Proposal / Technical Solution", "Nghĩa chuẩn là 'Phương án' trình sếp duyệt trước khi báo giá."),
    ("ff-03", "汇报", "huìbào", "Hối báo (trùng âm Hối lộ dễ hiểu nhầm)", "Báo cáo tiến độ cho cấp trên", "Report Progress Upward", "Chữ 汇 là tổng hợp, hoàn toàn mang nghĩa báo cáo công việc nghiêm túc."),
    ("ff-04", "方便", "fāngbiàn", "Thuận tiện", "Đi vệ sinh (trong ngữ cảnh hỏi '我去方便一下')", "Convenient vs. Use the Restroom", "Trong bữa tiệc/nhà máy, nếu nói '我方便一下' nghĩa là đi toilet chứ không phải 'tôi thấy tiện'."),
    ("ff-05", "大家", "dàjiā", "Đại gia (người giàu có lớn)", "Mọi người / Tất cả chúng ta", "Everyone / All Present", "Không phải 'đại gia' giàu tiền, dùng khi bắt đầu phát biểu cuộc họp ('大家好')."),
    ("ff-06", "便宜", "piányi", "Tiện nghi (vật chất đầy đủ)", "Giá rẻ / Món hời (cũng đọc biànyí trong tùy nghi)", "Cheap / Bargain Price", "Đàm phán không nói 'người ta có tiện nghi không' mà là giá đơn vị có rẻ không."),
    ("ff-07", "意思", "yìsi", "Ý tứ (tinh tế tế nhị)", "Ý nghĩa / Quà biếu nhỏ / Thú vị", "Meaning / Small Gift / Interest", "'小意思' khi tặng quà mang nghĩa món quà nhỏ bày tỏ tấm lòng, không phải chê ít ý tứ."),
    ("ff-08", "小心", "xiǎoxīn", "Tiểu tâm (bụng dạ hẹp hòi)", "Cẩn thận / Chú ý an toàn", "Be Careful / Handle With Care", "Thấy tem '小心轻放' trên kiện hàng nghĩa là Hàng dễ vỡ, xin nhẹ tay."),
    ("ff-09", "东西", "dōngxi", "Đông Tây (phương hướng)", "Đồ đạc / Vật phẩm / Hàng hóa", "Things / Objects / Items", "Tìm hàng nói '找东西' là tìm đồ vật chứ không phải tìm hướng Đông–Tây."),
    ("ff-10", "清醒", "qīngxǐng", "Thanh tỉnh (lặng lẽ vắng vẻ)", "Tỉnh táo minh mẫn sau khi suy nghĩ kỹ", "Clear-headed / Sober", "'保持清醒头脑' nghĩa là giữ đầu óc tỉnh táo sáng suốt khi đọc hợp đồng."),
    ("ff-11", "放心", "fàngxīn", "Phóng tâm (buông thả lòng mình)", "Yên tâm / Tin tưởng hoàn toàn", "Rest Assured / Do Not Worry", "Nhà cung cấp nói '您放心' = Quý khách cứ yên tâm về chất lượng lô hàng."),
    ("ff-12", "讲究", "jiǎngjiu", "Giảng cứu (giảng giải nghiên cứu)", "Kỹ tính, tinh tế, coi trọng quy cách", "Particular / Refined / Pay Attention To", "Trà Đạo cực kỳ '讲究水温' = rất kỹ tính trong việc canh nhiệt độ nước."),
    ("ff-13", "活动", "huódòng", "Hoạt động bình thường", "Chương trình khuyến mãi / Sự kiện truyền thông", "Promotional Campaign / Event", "Thấy biển '搞活动' là đang làm chương trình giảm giá sự kiện."),
    ("ff-14", "交代", "jiāodài", "Giao đại (thay thế triều đại)", "Dặn dò kỹ lưỡng / Bàn giao nhiệm vụ rõ ràng", "Instruct Clearly / Hand Over Task", "Quản lý '交代工作' nghĩa là giao việc và căn dặn chi tiết tiêu chuẩn đầu ra."),
    ("ff-15", "落实", "luòshí", "Lạc thực (rơi xuống đất thật)", "Chốt thực thi triệt để / Đưa vào vận hành thật", "Implement / Lock Down Execution", "Đừng dịch đen 'lạc thực'; nói '落实到位' là yêu cầu làm xong dứt điểm."),
    ("ff-16", "通知", "tōngzhī", "Thông tri (văn bản cổ)", "Thông báo chính thức (Shipping Advice / Notice)", "Official Notice / Advise", "'装船通知' là Thông báo Xếp tàu (Shipping Advice) gửi bên nhập khẩu."),
    ("ff-17", "表现", "biǎoxiàn", "Biểu hiện (triệu chứng bệnh)", "Thành tích thể hiện năng lực (KPI / Performance)", "Performance / Conduct", "Đánh giá nhân sự '表现突出' nghĩa là làm việc xuất sắc nổi bật."),
    ("ff-18", "要求", "yāoqiú", "Yêu cầu (đòi hỏi thông thường)", "Tiêu chuẩn kỹ thuật / Quy cách bắt buộc (Specs)", "Specification / Mandatory Requirement", "Khung '产品要求' chính là Bản thông số kỹ thuật bắt buộc (Product Specs)."),
    ("ff-19", "解释", "jiěshì", "Giải thích đơn giản", "Biện minh lý do / Diễn giải điều khoản pháp lý", "Interpret Clause / Explain Delay", "'解释权归本公司' là Quyền diễn giải điều khoản hợp đồng/khuyến mãi."),
    ("ff-20", "勉强", "miǎnqiǎng", "Miễn cưỡng (làm đại cho xong)", "Tạm chấp nhận sát ngưỡng (gượng ép chịu đựng)", "Reluctant / Barely Acceptable", "Sản phẩm AQL mà nói '勉强及格' là suýt rớt kiểm tra, cần sửa ngay."),
    ("ff-21", "对象", "duìxiàng", "Đối tượng (kẻ bị xử lý / mục tiêu)", "Người yêu sắp cưới / Khách thể nghiên cứu", "Partner / Research Subject / Counterparty", "Hỏi tuổi trẻ '找对象了吗' là 'Tìm được người yêu chưa?', không phải hỏi đối tượng khách hàng."),
    ("ff-22", "可怜", "kělián", "Khả liên (đáng thương hại)", "Tội nghiệp / Ít ỏi quá mức ('少得可怜')", "Pitiful / Negligibly Small", "'利润微薄得可怜' = biên lợi nhuận mỏng đến đáng ngại."),
    ("ff-23", "高兴", "gāoxìng", "Cao hứng (nổi hứng bất chợt)", "Vui mừng / Rất hân hạnh ('很高兴认识您')", "Glad / Happy / Pleased", "Đừng dịch 'tôi cao hứng gặp anh'; nghĩa chuẩn là Rất vui được quen biết."),
    ("ff-24", "万一", "wànyī", "Vạn nhất (1 trong muôn cái)", "Phòng khi rủi ro bất ngờ ('以防万一')", "Just in Case / Contingency Risk", "'万一延误怎么办' = Phòng trường hợp bất trắc bị trễ tàu thì xử lý thế nào?"),
    ("ff-25", "精神", "jīngshén", "Tinh thần chung chung", "Tỉnh táo khỏe khoắn / Tinh thần văn kiện ('会议精神')", "Alert / Vibrant / Core Guideline", "Người dân TQ khen người già '很有精神' = trông rất quắc thước khỏe mạnh."),
    ("ff-26", "风流", "fēngliú", "Phong lưu (ăn chơi lãng tử)", "Hào hoa lỗi lạc (nghĩa cổ: '风流人物' anh hùng)", "Romantic vs. Heroic Talents (Classical)", "Trong thơ Tô Thức, '风流人物' nghĩa là bậc anh tài hào kiệt để lại danh tiếng."),
    ("ff-27", "辛苦", "xīnkǔ", "Tân khổ (đau khổ cay đắng)", "Cảm ơn bạn đã vất vả cống hiến ('您辛苦了')", "Thank You For Your Hard Work", "Nói với tài xế, thanh tra xưởng '辛苦了' là lời chào cảm kích lịch sự chuẩn mực."),
    ("ff-28", "团结", "tuánjié", "Đoàn kết (chính trị/cộng đồng)", "Đoàn kết nội bộ đội ngũ dự án", "Team Unity / Solidarity", "Khối '团队团结合作' nhấn mạnh sự phối hợp nhịp nhàng giữa bộ phận QC và Forwarder."),
    ("ff-29", "招待", "zhāodài", "Chiêu đãi (tiệc lớn phô trương)", "Đón tiếp khách hàng / Tiếp đón nồng hậu ('招待不周')", "Host / Hospitality Service", "Chủ nhà hay nói khiêm tốn '招待不周' = Tiếp đón có điều gì sơ suất xin lượng thứ."),
    ("ff-30", "体会", "tǐhuì", "Thể hội (không quen dùng)", "Cảm nhận đúc kết sâu sắc từ thực tế trải nghiệm", "Realize Deeply / Practical Takeaway", "'深刻体会' là bài học xương máu đúc rút sau khi xử lý trực tiếp một sự cố.")
]

MIDDLE_CHINESE_RULES_12 = [
    ("mc-01", "Nhập thanh mất âm cuối `-p` (Phổ thông mất → Tiếng Việt & Quảng Đông giữ nguyên `-p`)", "Tiền Đường / Thiết Vận `*-p` → Bắc Kinh mất phụ âm cuối (thành thanh nhẹ/bất kỳ) trong khi Tiếng Việt giữ trọn `-p`.", "Ví dụ: Nhập (入 rù / nhập), Thập (十 shí / thập), Tập (习 xí / tập), Hợp (合 hé / hợp), Pháp (法 fǎ / pháp).", "Preserved `-p` coda in Sino-Vietnamese (hợp/pháp) vanished completely in Modern Standard Mandarin."),
    ("mc-02", "Nhập thanh mất âm cuối `-t` (Bắc Kinh mất → Tiếng Việt giữ `-t`)", "Vần tận cùng `*-t` thời Đường chuyển thẳng sang âm cuối `-t` tiếng Việt sắc/nặng.", "Ví dụ: Nhất (一 yī / nhất), Thất (七 qī / thất), Bát (八 bā / bát), Luật (律 lǜ / luật), Xuất (出 chū / xuất), Phát (发 fā / phát).", "Middle Chinese checked coda `*-t` remains crisp `-t` in Vietnamese (xuất/phát) versus vowel-open Mandarin."),
    ("mc-03", "Nhập thanh mất âm cuối `-k` (Bắc Kinh rụng → Tiếng Việt giữ `-c / -ch`)", "Âm cuối `*-k` biến thành `-c` (hoặc `-ch` sau nguyên âm hẹp i/ê) trong âm Hán–Việt.", "Ví dụ: Quốc (国 guó / quốc), Học (学 xué / học), Lục (六 liù / lục), Trúc (竹 zhú / trúc), Độc (独 dú / độc), Thạch (石 shí / thạch).", "Middle Chinese `*-k` surfaces as `-c` or palatalized `-ch` in Vietnamese (quốc, học, thạch)."),
    ("mc-04", "Âm mũi đôi môi `-m` biến thành `-n` ở Bắc Kinh nhưng Việt vẫn giữ `-m`", "Phụ âm mũi khép môi `*-m` nhập với `-n` ở Quan Thoại Bắc bộ thế kỷ XIV–XVI, trong khi tiếng Việt giữ nguyên vẹn `-m`.", "Ví dụ: Tâm (心 xīn / tâm), Tam (三 sān / tam), Nam (南 nán / nam), Lâm (林 lín / lâm), Kiểm (检 jiǎn / kiểm), Phẩm (品 pǐn / phẩm).", "Sino-Vietnamese preserves bilabial `-m` coda (tâm, nam, tam) that merged into `-n` in Beijing Mandarin."),
    ("mc-05", "Ngạc hóa âm gốc lưỡi (`k-, g-, h-` trước `-i/-ü` → Bắc Kinh `j-, q-, x-`, Việt vẫn `k-/kh-/h-`)", "Phụ âm mặt lưỡi Bắc Kinh mới hình thành từ thời Thanh (Thế kỷ XVIII); Hán–Việt lưu lại âm cổ thời Đường không bị ngạc hóa!", "Ví dụ: Kinh (京 jīng / kinh), Kiến (见 jiàn / kiến), Khí (气 qì / khí), Khởi (起 qǐ / khởi), Hán (汉 hàn / hán), Hiểu (晓 xiǎo / hiểu).", "Vietnamese k-/kh-/h- preserves Tang-era velar initials before Mandarin palatalized them into j-/q-/x-."),
    ("mc-06", "Âm môi răng `f-` Bắc Kinh đối ứng `p-/ph-` trong Hán–Việt Cổ & Chuẩn", "Nhóm âm môi nặng cổ `p-, ph-, b-` phát triển thành môi răng nhẹ `f-` cuối thời Đường → Tiếng Việt còn giữ `ph-`.", "Ví dụ: Phong (风 fēng / phong), Phủ (府 fǔ / phủ), Phi (飞 fēi / phi), Phòng (房 fáng / phòng), Phục (服 fú / phục), Phúc (福 fú / phúc).", "Classical labiodentalization maps Mandarin f- systematically onto Vietnamese ph- (phong, phúc, phục)."),
    ("mc-07", "Âm Hán–Việt Tiền Đường (Cổ Hán–Việt thời Hán–Ngụy–Tấn) sang Việt Hóa sâu", "Lớp từ vào Việt Nam trước thế kỷ VIII biến âm theo quy luật bản địa dân gian sâu đậm hơn âm Đường–Tống (Chuẩn).", "Ví dụ: Cổ Mả (墓 mù → mả/mộ), Trầu-Chè (茶 chá → chè/trà), Giếng (井 jǐng → giếng/tỉnh), Gương (镜 jìng → gương/kính), Buồng (房 fáng → buồng/phòng).", "Pre-Tang 'Old Sino-Vietnamese' loanwords underwent deeper indigenous vowel/consonant shifts (mả, chè, buồng)."),
    ("mc-08", "Bình Thanh Chia Âm Dương (`Thanh 1` & `Thanh 2` TQ ↔ `Ngang` & `Huyền` Việt)", "Quy luật tương ứng thanh điệu kỳ diệu giữa Tứ Thanh Trung Cổ và Lục Thanh Tiếng Việt.", "Ví dụ: Đông 东 (dōng -> đông ngang), Sơn 山 (shān -> sơn ngang); Trà 茶 (chá -> trà huyền), Đồng 铜 (tóng -> đồng huyền), Vương 王 (wáng -> vương huyền).", "Middle Chinese Level tone splits symmetrically: clear initial = Ngang (Mandarin T1), muddy = Huyền (T2)."),
    ("mc-09", "Thượng Thanh Cổ (`Thanh 3` & `4` TQ ↔ `Hỏi` / `Ngã` hoặc `Nặng` Việt)", "Chữ Thượng thanh gốc Hán có âm đầu trong ứng dấu Hỏi; âm đầu đục ứng Ngã/Nặng.", "Ví dụ: Hải 海 (hǎi -> hải), Thủy 水 (shuǐ -> thủy), Cổ 古 (gǔ -> cổ); Vũ 武 (wǔ -> vũ), Đạo 道 (dào -> đạo nặng).", "Rising tone (Shangsheng) predicts Vietnamese Hỏi (clear) and Ngã/Nặng (sonorant/muddy) with >85% regularity."),
    ("mc-10", "Khứ Thanh Cổ (`Thanh 4` TQ ↔ `Sắc` / `Nặng` Việt)", "Phần lớn chữ Thanh 4 Phổ thông (vốn đọc giáng mạnh) mang dấu Sắc hoặc Nặng ở Việt Nam.", "Ví dụ: Ái 爱 (ài -> ái sắc), Báo 报 (bào -> báo sắc), Khí 气 (qì -> khí sắc); Vạn 万 (wàn -> vạn nặng), Mậu 贸 (mào -> mậu nặng).", "Departing tone (Qusheng) largely aligns Mandarin T4 with Vietnamese Sắc and Nặng tones."),
    ("mc-11", "Âm mũi `w-` Bắc Kinh thường ứng phụ âm tắc môi `v- / m-` trong Hán–Việt", "Do âm `m-` hoặc `w-` cổ biến mất khi sang tiếng Trung hiện đại nhưng Việt Nam giữ lại dấu vết phụ âm mũi/môi răng.", "Ví dụ: Vạn (万 wàn / vạn), Văn (文 wén / văn), Vũ (武 wǔ / vũ), Vật (物 wù / vật), Mùi-Vị (味 wèi / vị).", "Mandarin zero-initial w- frequently recovers original v- or m- articulation in Sino-Vietnamese."),
    ("mc-12", "Hệ thống Hậu tố Thương Mại & Hán–Việt rút ngắn 50% thời gian đọc tài liệu HSK 7–9", "Nhờ cùng hệ quy chiếu Hán–Việt và quy tắc `-p/-t/-k/-m`, người Việt nhìn từ lạ B2B vẫn suy luận được tới 70% nghĩa học thuật.", "Ví dụ thực chiến: Quy tắc xuất xứ (原产地规则 Yuánchǎndì Guīzé), Điều chỉnh biên giới (边境调节 Biānjìng Tiáojié), Thẩm định (核查 Héchá).", "Mastery of Tang-Song sound correspondence enables Vietnamese learners to decode 70%+ of formal Mandarin contracts intuitively.")
]


def build_pack_brands_liushu() -> dict:
    brands = []
    for row in BRANDS_ADDITIONAL_36:
        bid, cat, zh, py, hv, en, year, dyn, pid, city, prod_vi, prod_en = row
        brands.append({
            "id": bid,
            "cat": cat,
            "zh": zh,
            "pinyin": py,
            "hanViet": hv,
            "nameEn": en,
            "foundedYear": year,
            "dynastyVi": dyn,
            "provinceId": pid,
            "cityVi": city,
            "craftSecretVi": f"Thương hiệu trăm năm vùng {city}: {prod_vi}. Kế thừa quy phạm thủ công gia truyền và uy tín chữ Tín bản địa.",
            "craftSecretEn": f"Time-honored enterprise rooted in {city}: {prod_en}, anchored by multi-generation craft transmission.",
            "b2bTradeVi": f"Bảo chứng xuất xứ địa lý tỉnh {pid.replace('prov-', '').title()} giúp tăng giá trị thương hiệu khi tham gia chuỗi phân phối Đông Á & EU.",
            "b2bTradeEn": f"Regional geographical authenticity from {pid.replace('prov-', '').title()} serving East Asian and international retail channels.",
            "visitTipVi": f"Tìm biển hiệu chính thức {zh} tại khu phố cổ {city}.",
            "signatureProductVi": prod_vi,
            "signatureProductEn": prod_en,
            "qualityStandardVi": "Danh hiệu Trung Hoa Lão Tự Hiệu (中华老字号) của Bộ Thương mại TQ & tiêu chuẩn GB/T an toàn sản phẩm.",
            "qualityStandardEn": "Official MOFCOM China Time-Honored Brand registry & Chinese National GB/T quality specifications.",
            "vietnamAseanLessonVi": "Mô hình nâng tầm sản vật địa phương Việt Nam (như kẹo dừa Bến Tre, nem chua Thanh Hóa, gốm Vĩnh Long) thành thương hiệu di sản quốc gia.",
            "vietnamAseanLessonEn": "Strategic precedent for upgrading Vietnamese regional crafts into certified national heritage brands.",
            "flagshipAddressZh": f"{zh}总店 ({city})"
        })

    gi_list = []
    for gid, zh, py, vi, en, pid, note_vi, vn_vi in GI_ADDITIONAL_18:
        gi_list.append({
            "id": gid,
            "zh": zh,
            "pinyin": py,
            "vi": vi,
            "en": en,
            "provinceId": pid,
            "gbStandardCode": f"EU–China Bilateral GI ({gid.upper()})",
            "euProtectionNoteVi": note_vi,
            "euProtectionNoteEn": f"EU–China Bilateral Geographical Indication protection for {en} preventing origin mislabeling.",
            "terroirAndCraftVi": note_vi,
            "terroirAndCraftEn": f"Protected agricultural and artisanal terroir specification for {en}.",
            "vnEuComparisonVi": vn_vi,
            "vnEuComparisonEn": f"EVFTA Bilateral GI Comparison: parallels Vietnam's EU-protected geographical indications in traceability and MRL compliance."
        })

    flows = []
    for fid, b_zh, t_vi, t_en, t_zh, steps in CRAFT_FLOWS_12:
        flows.append({
            "id": fid,
            "brandZh": b_zh,
            "titleVi": t_vi,
            "titleEn": t_en,
            "titleZh": t_zh,
            "steps": [
                {"stepNum": s[0], "labelZh": s[1], "labelVi": s[2], "labelEn": s[3], "specNote": s[4]}
                for s in steps
            ]
        })

    guilds = [
        {"id": g[0], "zh": g[1], "nameVi": g[2], "nameEn": g[3], "era": g[4], "provinceId": g[5], "descVi": g[6], "descEn": g[7]}
        for g in MERCHANT_GUILDS_5
    ]

    chars = []
    for c in LIUSHU_VISUAL_36:
        chars.append({
            "id": c[0], "zh": c[1], "trad": c[2], "pinyin": c[3], "hanViet": c[4], "meaningShort": c[5],
            "liushuType": c[6], "radical": c[7], "semanticPart": c[8], "phoneticPart": c[9],
            "evolution4Stages": c[10], "meaningVi": c[11], "meaningEn": c[12], "b2bSample": c[13]
        })

    false_friends = [
        {"id": f[0], "zh": f[1], "pinyin": f[2], "panelAVietTrap": f[3], "panelBTrueZh": f[4], "meaningEn": f[5], "tipVi": f[6]}
        for f in FALSE_FRIENDS_30
    ]

    sound_laws = [
        {"id": m[0], "titleVi": m[1], "ruleVi": m[2], "examplesVi": m[3], "ruleEn": m[4]}
        for m in MIDDLE_CHINESE_RULES_12
    ]

    return {
        "CCE_V6_BRANDS_CRAFT": {
            "brandsAdditional36": brands,
            "giAdditional18": gi_list,
            "craftProcessFlowcharts12": flows,
            "merchantGuilds5": guilds
        },
        "CCE_V6_LIUSHU_VISUAL": {
            "visualCharacters36": chars,
            "falseFriendsComic30": false_friends,
            "middleChineseRules12": sound_laws
        }
    }
