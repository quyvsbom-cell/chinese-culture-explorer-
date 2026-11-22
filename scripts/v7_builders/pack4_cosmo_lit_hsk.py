"""V7 Pack 4 Builder: 12 Herbs (->60), 6 Microclimates (->18), 8 Cosmo Cases (->36), 2 Novel Graphs (->6), 12 Poems (->36), 16 Wenyan, 20 HSK (->60), 16 Essays, 9 Tang-Viet (->24)."""

from __future__ import annotations

from typing import Any

from .pack_utils import (
    NON_CLINICAL_EN,
    NON_CLINICAL_VI,
    PROVINCE_IMAGES,
    ensure_verified_img,
    load_external_pack,
    merge_unique_by_key,
    sanitize_recursive,
)


def build_pack4() -> dict[str, Any]:
    """Build enriched Pack 4 cosmology, literature, and HSK datasets."""
    ext = load_external_pack(4)

    herb_specs = [
        ("v7-herb-49", "铁棍山药", "Tiěgùn Shānyào", "Thiết Côn Sơn Dược", "Dioscorea opposita", "Hoài Sơn Thiết Côn Ôn Huyện (Hà Nam GI)", "Wenxian Tiegun Yam", "Củ rễ mảnh giàu tinh bột", "Tình Bình, vị Cam — hành Tỳ Thổ", "Ngọt dịu", "Hầm canh xương nấm hương hoặc nấu cháo bát bảo Bắc Tông.", "Simmered in shiitake bone broth or northern eight-treasure congee.", "Củ mài rừng (Hoài Sơn) nấu canh sườn truyền thống Việt Nam.", "Bản Thảo Cương Mục", "Thổ", "assets/images/provinces/henan-longmen-grottoes.jpg"),
        ("v7-herb-50", "兰州百合", "Lánzhōu Bǎihé", "Lan Châu Bách Hợp", "Lilium davidii", "Bách Hợp Ngọt Lan Châu (Cam Túc)", "Lanzhou Sweet Edible Lily Bulb", "Thân hành bẹ trắng dày giòn", "Tính hơi Hàn dịu, vị Cam thanh", "Ngọt thanh", "Xào cần tây hạt điều hoặc nấu chè bạch hợp lê tuyết đường phèn.", "Stir-fried with celery and cashews or poached in rock-sugar pear soup.", "Hạt sen tươi hầm đường phèn trong ẩm thực cung đình Huế.", "Tề Dân Yếu Thuật", "Kim · Thủy", "assets/images/provinces/gansu-dunhuang-mogao.jpg"),
        ("v7-herb-51", "湘莲", "Xiānglián", "Tương Liên", "Nelumbo nucifera", "Hạt Sen Trắng Hồ Động Đình (Hồ Nam)", "Xiangtan Hunan White Lotus Seed", "Hạt sen bóc lụa thông tâm", "Tính Bình, vị Cam sáp nhẹ", "Ngọt bùi", "Ninh chè hạt sen đường phèn hoặc làm nhân bánh trung thu Tương Đàm.", "Stewed in clear syrup or mashed into velvety lotus mooncake paste.", "Chè hạt sen long nhãn Hưng Yên và mứt sen Trần Tây Hồ.", "Nhĩ Nhã", "Thổ · Hỏa", "assets/images/provinces/hunan-zhangjiajie.jpg"),
        ("v7-herb-52", "新会陈皮", "Xīnhuì Chénpí", "Tân Hội Trần Bì", "Citrus reticulata 'Chachi'", "Trần Bì Vỏ Quýt Lâu Năm Tân Hội", "Xinhui Aged Tangerine Peel", "Vỏ quýt phơi nắng 3–10 năm", "Tính Ôn, vị Tân Khổ thơm nồng", "Cay thơm dịu", "Kho cá, hầm chè đậu đỏ trần bì hoặc pha trà Phổ Nhĩ Tiểu Thanh Cam.", "Simmered with Cantonese red-bean dessert soup or stuffed with Pu'er tea.", "Vỏ quýt khô kho thịt tàu và gia vị nấu nước lèo Việt Nam.", "Thần Nông Bản Thảo Kinh", "Kim · Thổ", "assets/images/provinces/guangdong-canton-tower.jpg"),
        ("v7-herb-53", "桂林罗汉果", "Guìlín Luóhànguǒ", "Quế Lâm La Hán Quả", "Siraitia grosvenorii", "Quả La Hán Sấy Vĩnh Phúc (Quế Lâm)", "Guilin Monk Fruit", "Quả sấy nguyên vỏ giòn", "Tính Lương mát, vị Cam thuần khiết", "Ngọt thanh tự nhiên", "Hãm nước uống giải khát mùa hè hoặc làm nước dùng món chay.", "Steeped as sweet amber cooling infusion without cane sugar.", "Nước sâm la hán bông cúc phổ biến trên phố Sài Gòn – Chợ Lớn.", "Quảng Tây Thực Vật Chí", "Kim · Thủy", "assets/images/provinces/guangxi-guilin-li-river.jpg"),
        ("v7-herb-54", "青州山楂", "Qīngzhōu Shānzhā", "Thanh Châu Sơn Tra", "Crataegus pinnatifida", "Quả Sơn Tra Đỏ Thanh Châu (Sơn Đông)", "Qingzhou Red Hawthorn", "Quả chín đỏ xiên kẹo hoặc phơi lát", "Tính hơi Ôn, vị Toan Cam", "Chua ngọt", "Làm kẹo hồ lô đường đá Bắc Kinh hoặc nấu nước uống giải ngấy thịt quay.", "Caramelized into Tanghulu skewers or steeped after rich roast banquets.", "Quả táo mèo (Sơn Tra Tây Bắc) làm giấm táo hoặc ngâm mật ong.", "Ẩm Thiện Chính Yếu", "Mộc", "assets/images/provinces/shandong-taishan.jpg"),
        ("v7-herb-55", "天目笋干", "Tiānmù Sǔngān", "Thiên Mục Duẩn Can", "Phyllostachys praecox", "Măng Khô Thiên Mục Chiết Giang", "Tianmu Mountain Dried Bamboo Shoot", "Măng non mùa xuân phơi sấy", "Tính Bình dịu, vị Cam giòn", "Ngọt nhẹ hương trúc", "Kho tương cùng thịt ba chỉ Đông Pha hoặc hầm súp vịt già Hàng Châu.", "Braised slowly with fermented soy or simmered in old-duck bamboo soup.", "Canh măng khô hầm chân giò ngày Tết cổ truyền miền Bắc.", "Sơn Gia Thanh Cung", "Mộc", "assets/images/provinces/zhejiang-hangzhou-westlake.jpg"),
        ("v7-herb-56", "岷县当归身", "Mínxiàn Dāngguī", "Mân Huyện Đương Quy Ẩm Thực", "Angelica sinensis", "Gia Vị Canh Hầm Đương Quy Cam Túc (Phi Lâm Sàng)", "Minxian Culinary Angelica Aromatic Slice", "Lát thân củ thơm thảo mộc", "Dùng làm gia vị ẩm thực hầm canh mùa đông — KHÔNG dùng thay thuốc", "Thơm nồng hăng dịu", "Hầm với gừng tươi và thịt cừu tạo món canh giữ ấm ẩm thực Tây Bắc.", "Cooked in festive winter lamb-and-ginger pot purely as regional culinary spice.", "Gà tần ngải cứu và lẩu gia vị thảo mộc vùng cao phía Bắc.", "Thiên Kim Thực Trị", "Hỏa · Mộc", "assets/images/provinces/gansu-dunhuang-mogao.jpg"),
        ("v7-herb-57", "杭白菊", "Hángbáijú", "Hàng Bạch Cúc", "Chrysanthemum morifolium", "Hoa Cúc Trắng Đồng Hương (Chiết Giang)", "Hangzhou White Chrysanthemum Tea", "Đóa hoa phơi râm nguyên cánh", "Tính hơi Hàn dịu, vị Cam Khổ thanh", "Ngọt mát thanh tao", "Pha trà hoa cúc thanh tao cùng kỷ tử khi đọc sách thưởng trăng.", "Steeped with clear spring water for delicate aromatic evening tea.", "Trà hoa cúc vàng cổ truyền Hà Nội và Huế.", "Tuân Sinh Bát Tiên", "Mộc · Thủy", "assets/images/provinces/zhejiang-hangzhou-westlake.jpg"),
        ("v7-herb-58", "南杏仁", "Nánxìngrén", "Nam Hạnh Nhân", "Prunus armeniaca var.", "Hạnh Nhân Ngọt Lĩnh Nam (Quảng Đông)", "Southern Sweet Apricot Kernel Broth Nut", "Nhân hạt trắng bóc vỏ lụa", "Tính Bình, vị Cam béo dịu", "Ngọt bùi dịu", "Xay nấu chè hạnh nhân sữa tươi hoặc chè đu đủ hấp thanh nhiệt ẩm thực.", "Ground stone-mill sweet almond cream dessert served warm or chilled.", "Chè hạnh nhân khúc bạch thanh mát phổ biến khắp Việt Nam.", "Thực Liệu Bản Thảo", "Kim", "assets/images/provinces/guangdong-canton-tower.jpg"),
        ("v7-herb-59", "通江银耳", "Tōngjiāng Yín'ěr", "Thông Giang Ngân Nhĩ", "Tremella fuciformis", "Mộc Nhĩ Trắng Tuyết Nhĩ Tứ Xuyên", "Tongjiang Silver Snow Fungus", "Tai nấm trắng xếp cánh mỏng", "Tính Bình, vị Cam thanh trơn mượt", "Ngọt thanh trơn", "Ninh chậm với táo đỏ và đường phèn tới độ sánh mượt mùa thu hanh khô.", "Slow-simmered with red dates and rock sugar into silky autumn dessert soup.", "Chè tuyết nhĩ táo đỏ hạt chia giải nhiệt mùa nắng.", "Ngự Dược Viện Phương (Thực phổ)", "Thủy · Kim", "assets/images/provinces/sichuan-jiuzhaigou.jpg"),
        ("v7-herb-60", "云南茯苓饼", "Yúnnán Fúlíng", "Vân Nam Phục Linh Ẩm Thực", "Wolfiporia extensa", "Nấm Phục Linh Vân Nam Làm Bánh Ngự Thiện", "Yunnan Culinary Poria Wafer Tradition", "Bột nấm trắng làm vỏ bánh", "Tính Bình hòa, vị Đạm Cam", "Thanh đạm nhẹ", "Trộn mật ong, hạt óc chó kẹp giữa hai lớp vỏ mỏng (bánh đặc sản Bắc Kinh).", "Baked into crisp paper-thin sandwich wafers stuffed with walnut honey paste.", "Bánh khảo và bánh phục linh cốm truyền thống Hội An – Huế.", "Yên Kinh Tuế Thời Ký", "Thổ", "assets/images/provinces/yunnan-lijiang-old-town.jpg"),
    ]
    herbs_12 = [
        {
            "id": hid,
            "zh": zh,
            "pinyin": py,
            "hanViet": hv,
            "latinName": lat,
            "nameVi": nvi,
            "nameEn": nen,
            "partUsedVi": part,
            "propertyNatureVi": prop,
            "fiveFlavorVi": flav,
            "culinaryDishVi": dvi,
            "culinaryDishEn": den,
            "historicalSourceBook": book,
            "nonClinicalReminderVi": NON_CLINICAL_VI,
            "nonClinicalReminderEn": NON_CLINICAL_EN,
            "wuxingElement": wx,
            "nature": f"{prop} · Ngũ vị: {flav}",
            "latin": lat,
            "culinaryVi": f"{dvi} ({part} · Nguồn: {book})",
            "seasonalSolarTermMatchVi": "Áp dụng trong ẩm thực văn hóa theo chu kỳ Giao mùa 24 Tiết khí (phi lâm sàng).",
            "botanicalRegionAndGiVi": f"Tư liệu thực liệu cổ {zh} ghi trong {book}.",
            "vietnamCulinaryParallelVi": vnp,
            "image": ensure_verified_img(img),
        }
        for hid, zh, py, hv, lat, nvi, nen, part, prop, flav, dvi, den, vnp, book, wx, img in herb_specs
    ]

    micro_specs = [
        ("mc-arch-13", "Thành Cổ Bình Dao & Hệ Đệm Tường Dày Sơn Tây", "Pingyao Thick-Wall Mud Brick Thermal Mass", "平遥古城厚墙保温体系", "Mùa đông cao nguyên Sơn Tây lạnh âm độ, chênh lệch nhiệt ngày đêm cực lớn.", "Tường đất nện dày 40–60 cm hấp thụ nhiệt ban ngày và giữ ấm chậm suốt đêm không tốn củi.", 72.0, 27.5, "Khối Nhiệt (Thermal Mass) + Tường Chắn Gió Phương Bắc.", "Gần giống tường đất dày trình tường của nhà Trình Tường đồng bào Hà Nhì / Mông vùng núi Bắc Bộ."),
        ("mc-arch-14", "Nhà Hang Diêu Động Hoàng Thổ Thiểm Bắc", "Shaanbei Loess Plateau Cave Dwelling (Yaodong)", "陕北黄土窑洞冬暖夏凉", "Hoàng thổ khô nứt nắng gắt mùa hè 40°C và bão bụi rét buốt mùa đông.", "Khoét sâu 7–9 m vào vách đất hoàng thổ ổn định ở ngưỡng tự nhiên 14–18°C quanh năm.", 74.0, 26.0, "Địa Nhiệt Ổn Định (Earth-Sheltered Thermal Equilibrium).", "Tương đồng tư duy tận dụng hang đá núi vôi làm nơi tránh nắng mát lành."),
        ("mc-arch-15", "Thủy Tạ Hóng Gió Ven Hồ Vườn Lưu Tô Châu", "Suzhou Lingering Garden Evaporative Water Pavilion", "苏州留园临水风亭", "Mùa hạ Giang Nam oi bức kéo dài khi gió ẩm từ Thái Hồ ít chuyển động.", "Đặt sàn gỗ hở ngay trên mặt hồ râm mát, tận dụng bay hơi nước hút nhiệt gió lùa qua hành lang uốn lượn.", 70.5, 29.0, "Làm Mát Bay Hơi (Evaporative Cooling) + Hiệu Ứng Venturi qua khe tường hoa.", "Đồng điệu kiến trúc nhà Thủy Đình Chùa Thầy và thủy tạ cung đình Huế."),
        ("mc-arch-16", "Phố Cổ Lệ Giang Mương Nước Ba Tầng Tam Nhãn Tỉnh", "Lijiang Old Town Three-Eye Gravity Canal System", "丽江古城水系与三眼井", "Thị trấn trên cao 2.400m cần điều tiết nước tuyết tan sạch và chống hỏa hoạn nhà gỗ.", "Tách suối tự chảy qua mạng mương đá len giữa phố và bể Tam Nhãn (trên uống, giữa rửa rau, dưới giặt giũ).", 68.0, 31.0, "Thủy Lực Trọng Lực Phân Tầng + Hạ Nhiệt Bề Mặt Phố Đá.", "Gợi nhớ hệ thống mương dẫn nước suối vùng Mù Cang Chải – Sa Pa Tây Bắc."),
        ("mc-arch-17", "Kiểu Ký Lâu Có Mái Hiên Liên Hoàn Lĩnh Nam", "Lingnan Qilou Shophouse Arcade Colonnade", "岭南骑楼遮阳避雨廊", "Miền Nam Quảng Đông mưa rào nhiệt đới bất chợt và nắng gắt chiếu xiên.", "Đẩy tầng 2 ra tạo hành lang mái che liên tục rộng 3 m dọc phố, giúp người đi bộ râm mát suốt mùa mưa nắng.", 66.5, 33.5, "Che Bóng Đường Phố Tích Hợp + Đệm Khí Đối Lưu Tầng Trệt.", "Trực tiếp song hành với dãy nhà phố cổ có hành lang vòm che mưa ở Chợ Lớn và Hội An."),
        ("mc-arch-18", "Nhà Đá Tạng Thanh Hải Thành Dày Cửa Sổ Trầm", "Qinghai–Tibet Plateau Sun-Capture Stone Courtyard", "藏地石墙南向集热院落", "Bức xạ tia cực tím rất cao ở độ cao 3.600m nhưng không khí ngoài trời lạnh giá.", "Mở cửa sổ lớn khung gỗ đen sơn viền thu nắng hướng Nam trong khi vách đá thon nhỏ về đỉnh chống động đất.", 65.0, 34.0, "Hấp Thụ Bức Xạ Mặt Trời Trực Tiếp + Khung Gỗ Đàn Hồi.", "Minh họa sự thích nghi đa dạng khí hậu trải khắp 3 bậc thang địa hình."),
    ]
    micro_6 = [
        {
            "id": mid,
            "titleVi": tvi,
            "titleEn": ten,
            "titleZh": tzh,
            "climateChallengeVi": ch,
            "climateChallengeEn": ch,
            "architecturalMechanismVi": mech,
            "architecturalMechanismEn": mech,
            "summerSunAngleDeg": sang,
            "winterSunAngleDeg": wang,
            "prevailingWindDirection": "Đông Nam (hè) / Tây Bắc (đông)",
            "modernPhysicsPrincipleVi": phys,
            "modernPhysicsPrincipleEn": phys,
            "challengeVi": ch,
            "mechanismVi": mech,
            "physicsVi": f"{phys} (Nắng hạ {sang}° / Nắng đông {wang}°)",
            "vietnamArchitecturalComparisonVi": vncmp,
        }
        for mid, tvi, ten, tzh, ch, mech, sang, wang, phys, vncmp in micro_specs
    ]

    cosmo_specs = [
        ("v7-cosmo-29", "Xe Nước Ống Trúc Đồng Tháp Nâng Nước Tự Động (Thủy Luân)", "Self-Lifting Bamboo Noria Waterwheel Architecture", "筒车自动提水技术", "Đời Đường–Tống, người dân dùng sức chảy của dòng sông đẩy bánh xe tre đường kính 10m tự múc nước tưới ruộng bậc cao mà không cần sức người.", "Song dynasty agricultural engineers automated upland irrigation solely from river kinetic current via bamboo noria wheels.", "《天工开物 · 乃粒》：其水车如纺车，以细竹为之，捆缚数十筒，随流自转。", "Hoàn toàn phi lâm sàng: minh chứng kỹ thuật cơ khí thủy lực thuận tự nhiên Đông Á.", "Noria waterwheels (Cọn nước) của đồng bào Thái – Tày miền núi phía Bắc Việt Nam dùng đúng nguyên lý này.", "assets/images/provinces/guangxi-guilin-li-river.jpg"),
        ("v7-cosmo-30", "La Bàn Từ Tính Thủy Bàn Thời Tống & Dẫn Đường Biển Đông", "Song Dynasty Wet Marine Compass & Azimuthal Rings", "指南浮针与水罗盘", "Thẩm Quát ghi trong Mộng Khê Bút Đàm bốn cách đặt kim nam châm, mở đường cho thủy thủ thời Tống dùng Kim Chỉ Nam nổi trên bát nước định hướng vượt trùng khơi bất kể sương mù.", "Shen Kuo's Dream Pool Essays documented wet needle compass azimuths freeing oceanic navigation from overcast skies.", "《梦溪笔谈》：方家以磁石磨针锋，则能指南，然常微偏东，不全南也。", "Quan sát thiên văn từ trường cổ điển (tách rời hẳn khái niệm bói toán phong thủy).", "Bát La Bàn 24 sơn giúp thuyền buồm Việt–Trung giao thương xuyên Biển Đông an toàn.", "assets/images/museum/han-shipan.jpg"),
        ("v7-cosmo-31", "Hầu Phong Địa Động Nghi Của Trương Hành (132 SCN)", "Zhang Heng's 132 CE Bronze Seismoscope", "张衡候风地动仪", "Nhà thiên văn Đông Hán Trương Hành chế tạo vò đồng 8 hướng rồng ngậm ngọc đặt con lắc quán tính bên trong, phát hiện hướng tâm chấn động đất cách Lạc Dương hàng trăm dặm.", "Eastern Han polymath Zhang Heng built an eight-directional inertia pendulum bronze vessel detecting distant earthquake azimuths.", "《后汉书 · 张衡传》：中有都柱，傍行八道，施关发机。", "Đỉnh cao cơ học vật lý cổ đại — hoàn toàn là thiết bị đo địa chấn thực nghiệm.", "Truyền cảm hứng cho các thiết bị bảo tàng cơ khí tương tác ngày nay.", "assets/images/academic/sunzi-bamboo-slips.jpg"),
        ("v7-cosmo-32", "Tháp Đồng Hồ Thủy Vận Hỗn Thiên Đài Của Tô Tụng (1088)", "Su Song's 1088 Astronomical Clocktower & Chain Drive", "水运仪象台 · 天衡擒纵器", "Tại Khai Phong Bắc Tống, Tô Tụng dựng tháp gỗ cao 12m vận hành bằng gầu nước kết hợp cơ cấu chốt giữ 'Thiên Hành' (escapement) quay quả cầu sao đồng bộ với bầu trời thật.", "Su Song built a 12-meter hydro-mechanical astronomical tower in Kaifeng using an escapement wheel and endless chain drive.", "《新仪象法要》：设天衡以制其速，使浑象与天体运行相符。", "Cơ cấu truyền động xích và bộ thoát nhịp sớm nhất lịch sử cơ khí chính xác.", "Nền tảng thiết kế mô phỏng quay đồng bộ Đĩa 24 Tiết khí kỹ thuật số.", "assets/images/provinces/henan-longmen-grottoes.jpg"),
        ("v7-cosmo-33", "Gương Đồng Thấu Quang Thời Tây Hán ('Ma Kính')", "Western Han 'Magic Mirror' Optical Surface Curvature", "西汉透光铜镜原理", "Mặt trước gương đồng soi bóng sáng loáng như nhau, nhưng khi rọi ánh nắng phản chiếu lên tường lại hiện nguyên hoa văn chữ Hán đúc ở mặt sau nhờ biến dạng ứng suất nguội siêu nhỏ.", "Sub-micron casting stress modulation on Han bronze mirrors projects invisible reverse calligraphy under collimated sunlight.", "《梦溪笔谈》：世有透光鉴，鉴背有铭文……承以日光，则背文及二十字皆透在屋壁上。", "Hiện tượng quang học vật lý thuần túy dựa trên độ cong vi mô bề mặt hợp kim.", "Minh chứng tay nghề luyện kim hợp kim đồng–thiếc siêu tinh vi thời Hán.", "assets/images/museum/changxin-palace-lamp.jpg"),
        ("v7-cosmo-34", "Bản Đồ Sao Đôn Hoàng (Khoảng 700 SCN – Cổ Nhất Nhân Loại)", "Dunhuang Star Atlas (c. 700 CE) Cylindrical Sky Projection", "敦煌星图全天星区", "Cuộn giấy dài gần 4m tìm thấy ở Hang 17 Đôn Hoàng vẽ hơn 1.339 ngôi sao thuộc 257 chòm bằng ba màu đen–đỏ–vàng phân biệt Ba Trường Phái thiên văn Hán đại bằng phép chiếu trụ chuẩn xác.", "Found in Mogao Cave 17, this c. 700 CE scroll charts 1,339 stars using equidistant cylindrical projection six centuries before Mercator.", "敦煌遗书 S.3326 号卷：三家星经色标并列，紫微垣居北极之中。", "Bản đồ thiên văn cổ đầy đủ lâu đời nhất còn nguyên vẹn, hoàn toàn dựa trên quan trắc.", "Đối chiếu trực tiếp với mô hình 28 Nhị Thập Bát Tú xoay trong Studio Vũ trụ học.", "assets/images/provinces/gansu-dunhuang-mogao.jpg"),
        ("v7-cosmo-35", "Hệ Thống Nông Lịch 24 Tiết Khí & Mùa Vụ Giao Thương Cổ", "Phenological Almanac & Agricultural Trade Calibration", "物候历法与农时贸易节律", "Quan trắc '72 Hậu' chia mỗi tiết khí thành 5 ngày theo gió, sương, chim nhạn bay và hoa mận nở để hoạch định lịch gieo trồng, thu hoạch trà xuân và mở cảng biển.", "The 72 Pentads sub-divide each 15-day solar term by bird migration, frost melt, and blossoming cues to time tea harvests and monsoon sailings.", "《礼记 · 月令》：东风解冻，蛰虫始振，鱼陟负冰。", "Tư liệu sinh thái nông lịch UNESCO phi lâm sàng và hoàn toàn phi bói toán.", "Việt Nam cùng lưu giữ hệ tiết khí Lập Xuân, Thanh Minh, Hàn Thực, Đoan Ngọ quen thuộc.", "assets/images/articles/hero-tcm-solar.jpg"),
        ("v7-cosmo-36", "Tư Duy Sinh Thái 'Thiên Nhân Hợp Nhất' Trong Du Lịch Di Sản Xanh", "Ecological 'Harmony With Nature' in Sustainable Craft & Tourism", "天人合一与当代生态遗产", "Từ thủy lợi không đập Đô Giang Yển đến làng đá vôi rỗng nước sạch Lệ Giang, nguyên lý thuận theo địa hình và tái tạo tài nguyên đang truyền cảm hứng cho kiến trúc xanh hiện đại.", "From dam-free Dujiangyan to Lijiang gravity canals, classical ecological restraint inspires contemporary low-carbon heritage preservation.", "《庄子 · 齐物论》：天地与我并生，而万物与我为一。", "Khung triết lý văn hóa – sinh thái hiện đại, khẳng định KHÔNG chẩn đoán hay thay thế khoa học y tế.", "Kết nối trực tiếp với mục tiêu du lịch bền vững trên 16 Hành trình Di sản V7.0.", "assets/images/museum/zheng-he-chart.jpg"),
    ]
    cosmo_8 = [
        {
            "id": cid,
            "titleVi": tvi,
            "titleEn": ten,
            "titleZh": tzh,
            "summaryVi": svi,
            "summaryEn": sen,
            "domain": "cosmo_history",
            "phaseFocus": "Khoa học Lịch sử · Thiên văn · Sinh thái Cổ điển",
            "primaryCitationZh": pzh,
            "historicalScientificMechanismVi": svi,
            "historicalScientificMechanismEn": sen,
            "modernRelevanceVi": mvi,
            "vietnamComparisonVi": vnc,
            "image": ensure_verified_img(img),
            "nonClinicalReminderVi": NON_CLINICAL_VI,
            "nonClinicalReminderEn": NON_CLINICAL_EN,
        }
        for cid, tvi, ten, tzh, svi, sen, pzh, mvi, vnc, img in cosmo_specs
    ]

    # 2 NEW SVG Literature & History Character Graphs -> 4 + 2 = 6 Graphs!
    novel_graphs_2 = [
        {
            "id": "graph-nholamngoaisu",
            "titleVi": "Nho Lâm Ngoại Sử (儒林外史) — Châm Biếm Khoa Cử & Chân Nho Bất Khuất",
            "titleEn": "The Scholars (Rulin Waishi) — Imperial Exam Satire & Independent Literati Web",
            "titleZh": "儒林外史人物关系图谱",
            "coreThemesVi": "Ngô Kính Tử phơi bày bi hài kịch danh lợi trường thi Minh–Thanh đối lập với hình tượng kẻ sĩ chân chính Vương Miện – Đỗ Thiếu Khanh.",
            "nodes": [
                {"id": "fanjin", "labelZh": "范进", "labelVi": "Phạm Tiến", "roleGroup": "trung_tam", "noteVi": "54 tuổi thi đỗ Cử nhân phát điên vì vui mừng", "zh": "范进", "vi": "Phạm Tiến", "group": "trung_tam"},
                {"id": "hutu", "labelZh": "胡屠户", "labelVi": "Hồ Đồ Hộ", "roleGroup": "phan_dien", "noteVi": "Bố vợ mắng chửi rồi nịnh nọt theo công danh", "zh": "胡屠户", "vi": "Hồ Đồ Hộ", "group": "phan_dien"},
                {"id": "zhoujin", "labelZh": "周进", "labelVi": "Châu Tiến", "roleGroup": "chinh", "noteVi": "Lão học trò khóc ngất ở trường thi rồi chấm đỗ Phạm Tiến", "zh": "周进", "vi": "Châu Tiến", "group": "chinh"},
                {"id": "wangmian", "labelZh": "王冕", "labelVi": "Vương Miện", "roleGroup": "tri_ky", "noteVi": "Hình mẫu kẻ sĩ mở đầu, vẽ hoa sen từ chối ra làm quan", "zh": "王冕", "vi": "Vương Miện", "group": "tri_ky"},
                {"id": "dushaoqing", "labelZh": "杜少卿", "labelVi": "Đỗ Thiếu Khanh", "roleGroup": "tri_ky", "noteVi": "Công tử Nam Kinh hào sảng, trọng tình bạn khinh danh lợi", "zh": "杜少卿", "vi": "Đỗ Thiếu Khanh", "group": "tri_ky"},
                {"id": "yanjiansheng", "labelZh": "严监生", "labelVi": "Nghiêm Giám Sinh", "roleGroup": "phan_dien", "noteVi": "Biểu tượng keo kiệt kinh điển trước đèn dầu hai tim", "zh": "严监生", "vi": "Nghiêm Giám Sinh", "group": "phan_dien"},
                {"id": "kuangchaoren", "labelZh": "匡超人", "labelVi": "Khuông Siêu Nhân", "roleGroup": "phan_dien", "noteVi": "Từ chàng trai hiếu thảo thoái hóa thành kẻ xu nịnh", "zh": "匡超人", "vi": "Khuông Siêu Nhân", "group": "phan_dien"},
                {"id": "niupulang", "labelZh": "牛浦郎", "labelVi": "Ngưu Phố Lang", "roleGroup": "phan_dien", "noteVi": "Kẻ mạo danh thi tập người quá cố để leo cao", "zh": "牛浦郎", "vi": "Ngưu Phố Lang", "group": "phan_dien"},
                {"id": "luxiaojie", "labelZh": "鲁小姐", "labelVi": "Lỗ Tiểu Thư", "roleGroup": "chinh", "noteVi": "Say mê văn bát cổ đến nỗi thất vọng vì chồng thơ hay", "zh": "鲁小姐", "vi": "Lỗ Tiểu Thư", "group": "chinh"},
                {"id": "chihengshan", "labelZh": "迟衡山", "labelVi": "Trì Hoành Sơn", "roleGroup": "tri_ky", "noteVi": "Người khởi xướng phục hưng Lễ Nhạc Thái Bá Từ Nam Kinh", "zh": "迟衡山", "vi": "Trì Hoành Sơn", "group": "tri_ky"},
                {"id": "zhuangshaoguang", "labelZh": "庄绍光", "labelVi": "Trang Thiệu Quang", "roleGroup": "tri_ky", "noteVi": "Chân nho đức độ từ chối quan tước về ở ẩn Huyền Vũ Hồ", "zh": "庄绍光", "vi": "Trang Thiệu Quang", "group": "tri_ky"},
                {"id": "xiaobaiquan", "labelZh": "萧柏泉", "labelVi": "Tiêu Bách Tuyền", "roleGroup": "chinh", "noteVi": "Tướng võ mưu lược nhưng bị bộ máy văn quan nghi kỵ", "zh": "萧柏泉", "vi": "Tiêu Bách Tuyền", "group": "chinh"},
            ],
            "edges": [
                {"from": "zhoujin", "to": "fanjin", "relationType": "ally", "relationVi": "Chấm đỗ Cử nhân nhờ đồng cảm cảnh nghèo", "rel": "Chấm đỗ Cử nhân nhờ đồng cảm cảnh nghèo"},
                {"from": "fanjin", "to": "hutu", "relationType": "family", "relationVi": "Cha vợ – Con rể phơi bày thói trọng phú khinh bần", "rel": "Cha vợ – Con rể trọng phú khinh bần"},
                {"from": "wangmian", "to": "dushaoqing", "relationType": "mentor", "relationVi": "Gương sáng kẻ sĩ độc lập nối từ mở đầu tới trung tâm", "rel": "Hình mẫu kẻ sĩ tự do nối tiếp"},
                {"from": "dushaoqing", "to": "chihengshan", "relationType": "ally", "relationVi": "Đồng tâm xây dựng Lễ Nhạc từ Thái Bá Nam Kinh", "rel": "Đồng tâm tế lễ Thái Bá Từ"},
                {"from": "dushaoqing", "to": "zhuangshaoguang", "relationType": "ally", "relationVi": "Tri kỷ ẩn dật coi nhẹ công danh trường thi", "rel": "Tri kỷ thanh cao"},
                {"from": "yanjiansheng", "to": "fanjin", "relationType": "rival", "relationVi": "Hai mặt bi hài đồng tiền & danh vọng khoa cử", "rel": "Tương phản tiền tài vs danh vọng"},
                {"from": "kuangchaoren", "to": "niupulang", "relationType": "rival", "relationVi": "Hai biến thể tha hóa của giới văn nhân giả hiệu", "rel": "Tha hóa đạo đức văn chương"},
                {"from": "luxiaojie", "to": "kuangchaoren", "relationType": "contrast", "relationVi": "Nỗi ám ảnh văn bát cổ bào mòn tâm hồn", "rel": "Ám ảnh văn bát cổ"},
                {"from": "chihengshan", "to": "zhuangshaoguang", "relationType": "ally", "relationVi": "Hợp tác biên soạn Lễ Nhạc văn hiến Giang Nam", "rel": "Biên soạn Lễ Nhạc"},
                {"from": "xiaobaiquan", "to": "dushaoqing", "relationType": "ally", "relationVi": "Kẻ thực tài võ nghệ kết giao văn nhân chân chính", "rel": "Kết giao văn võ"},
                {"from": "zhoujin", "to": "wangmian", "relationType": "contrast", "relationVi": "Quá lụy khoa cử đối lập với tự do tinh thần", "rel": "Lụy khoa cử vs Tự do"},
                {"from": "hutu", "to": "yanjiansheng", "relationType": "contrast", "relationVi": "Hai nhân vật châm biếm kinh điển về lòng tham", "rel": "Bộ đôi châm biếm thị dân"},
            ],
        },
        {
            "id": "graph-suky",
            "titleVi": "Sử Ký Tư Mã Thiên (史記) — Trục Tần Thủy Hoàng & Hán–Sở Tranh Hùng",
            "titleEn": "Records of the Grand Historian (Shiji) — Qin–Han Power & Strategic Web",
            "titleZh": "史记核心人物图谱",
            "coreThemesVi": "Thiên sử thi bất hủ của Tư Mã Thiên khắc họa chuyển giao quyền lực Tần–Sở–Hán qua nghệ thuật Kỷ Truyện Thể và bi kịch anh hùng thất thế.",
            "nodes": [
                {"id": "simaqian", "labelZh": "司马迁", "labelVi": "Tư Mã Thiên", "roleGroup": "trung_tam", "noteVi": "Thái Sử Công viết Sử Ký 130 thiên bất hủ", "zh": "司马迁", "vi": "Tư Mã Thiên", "group": "trung_tam"},
                {"id": "qinshihuang", "labelZh": "秦始皇", "labelVi": "Tần Thủy Hoàng", "roleGroup": "chinh", "noteVi": "Thống nhất lục quốc, lập chế độ Quận Huyện", "zh": "秦始皇", "vi": "Tần Thủy Hoàng", "group": "chinh"},
                {"id": "xiangyu", "labelZh": "项羽", "labelVi": "Hạng Vũ", "roleGroup": "phan_dien", "noteVi": "Tây Sở Bá Vương dũng mãnh phá Cự Lộc, thua ở Cai Hạ", "zh": "项羽", "vi": "Hạng Vũ", "group": "phan_dien"},
                {"id": "liubang", "labelZh": "刘邦", "labelVi": "Lưu Bang", "roleGroup": "chinh", "noteVi": "Hán Cao Tổ biết dùng Trương–Tiêu–Hàn thống nhất thiên hạ", "zh": "刘邦", "vi": "Lưu Bang", "group": "chinh"},
                {"id": "hanxin", "labelZh": "韩信", "labelVi": "Hàn Tín", "roleGroup": "tri_ky", "noteVi": "Binh tiên bách chiến bách thắng dưới trướng Hán", "zh": "韩信", "vi": "Hàn Tín", "group": "tri_ky"},
                {"id": "zhangliang", "labelZh": "张良", "labelVi": "Trương Lương", "roleGroup": "tri_ky", "noteVi": "Mưu sĩ Vận Trù Duy Ác cứu Lưu Bang tại Hồng Môn Yến", "zh": "张良", "vi": "Trương Lương", "group": "tri_ky"},
                {"id": "xiaohe", "labelZh": "萧何", "labelVi": "Tiêu Hà", "roleGroup": "tri_ky", "noteVi": "Hậu cần Quan Trung, giữ đồ bản Tần & tiến cử Hàn Tín", "zh": "萧何", "vi": "Tiêu Hà", "group": "tri_ky"},
                {"id": "fanzeng", "labelZh": "范增", "labelVi": "Phạm Tăng", "roleGroup": "phan_dien", "noteVi": "Á phụ của Hạng Vũ, mưu lược nhưng bị kế ly gián", "zh": "范增", "vi": "Phạm Tăng", "group": "phan_dien"},
                {"id": "lvzhi", "labelZh": "吕雉", "labelVi": "Lữ Trĩ (Lữ Hậu)", "roleGroup": "phan_dien", "noteVi": "Hoàng hậu quyền lực quyết đoán củng cố triều Hán", "zh": "吕雉", "vi": "Lữ Hậu", "group": "phan_dien"},
                {"id": "jingke", "labelZh": "荆轲", "labelVi": "Kinh Kha", "roleGroup": "tri_ky", "noteVi": "Thích khách nước Yên hát Dịch Thủy tiễn biệt", "zh": "荆轲", "vi": "Kinh Kha", "group": "tri_ky"},
                {"id": "lianpo", "labelZh": "廉颇", "labelVi": "Liêm Pha", "roleGroup": "chinh", "noteVi": "Danh tướng nước Triệu biết phục thiện (Phụ Kinh Thỉnh Tội)", "zh": "廉颇", "vi": "Liêm Pha", "group": "chinh"},
                {"id": "linxiangru", "labelZh": "蔺相如", "labelVi": "Lạn Tương Như", "roleGroup": "tri_ky", "noteVi": "Trí dũng bảo toàn ngọc bích Hòa Thị cho nước Triệu", "zh": "蔺相如", "vi": "Lạn Tương Như", "group": "tri_ky"},
            ],
            "edges": [
                {"from": "simaqian", "to": "xiangyu", "relationType": "mentor", "relationVi": "Viết Hạng Vũ Bản Kỷ khắc họa anh hùng bi tráng", "rel": "Bình luận Hạng Vũ Bản Kỷ"},
                {"from": "simaqian", "to": "liubang", "relationType": "mentor", "relationVi": "Phân tích nghệ thuật dùng người của Hán Cao Tổ", "rel": "Cao Tổ Bản Kỷ"},
                {"from": "xiangyu", "to": "liubang", "relationType": "rival", "relationVi": "Hồng Môn Yến & Quyết chiến Sở–Hán 4 năm", "rel": "Tranh hùng Hán – Sở"},
                {"from": "xiaohe", "to": "hanxin", "relationType": "ally", "relationVi": "Dưới ánh trăng đuổi theo Hàn Tín tiến cử làm Đại tướng", "rel": "Tiêu Hà nguyệt hạ truy Hàn Tín"},
                {"from": "liubang", "to": "zhangliang", "relationType": "ally", "relationVi": "Quân sư bày mưu thoát hiểm tại Hồng Môn Yến", "rel": "Mưu sĩ bậc nhất Tam Kiệt"},
                {"from": "liubang", "to": "xiaohe", "relationType": "ally", "relationVi": "Trụ cột hậu cần giữ vững Quan Trung", "rel": "Hậu cần Tam Kiệt"},
                {"from": "xiangyu", "to": "fanzeng", "relationType": "family", "relationVi": "Bị kế ly gián khiến Phạm Tăng phẫn uất rời đi", "rel": "Quân thần bất hòa"},
                {"from": "lvzhi", "to": "hanxin", "relationType": "rival", "relationVi": "Bi kịch 'Thỏ chết chó săn bị hầm' tại cung Vị Ương", "rel": "Chính biến cung Vị Ương"},
                {"from": "jingke", "to": "qinshihuang", "relationType": "rival", "relationVi": "Đồ cùng chủy hiện — Thích khách hành thích Tần Vương", "rel": "Đồ cùng chủy hiện"},
                {"from": "lianpo", "to": "linxiangru", "relationType": "ally", "relationVi": "Phụ kinh thỉnh tội — Kết giao tình bạn sống chết", "rel": "Vẫn cảnh chi giao"},
                {"from": "qinshihuang", "to": "liubang", "relationType": "contrast", "relationVi": "Chuyển giao từ pháp trị hà khắc sang Hán sơ nghỉ dưỡng sức dân", "rel": "Chuyển giao Tần – Hán"},
                {"from": "hanxin", "to": "xiangyu", "relationType": "rival", "relationVi": "Đánh bại Sở quân bằng Thập Diện Mai Phục tại Cai Hạ", "rel": "Thập diện mai phục Cai Hạ"},
            ],
        },
    ]

    poem_specs = [
        ("pp-v7-01", "Vương Duy", "《鹿柴》", "Lộc Sài", "Tranh Thủy mặc Rừng Tĩnh", "Không sơn bất kiến nhân, đãn văn nhân ngữ hưởng.", "Kōng shān bù jiàn rén, dàn wén rén yǔ xiǎng.", "Núi vắng chẳng thấy người, chỉ nghe tiếng người nói vang.", "Through empty hills no soul appears; yet echoing voices drift.", "assets/images/paintings/12_kuanglu_tu.jpg", "Lấy âm thanh khe khẽ làm nổi bật cái tĩnh tuyệt đối — chuẩn mực 'Thi trung hữu họa'."),
        ("pp-v7-02", "Tô Thức", "《饮湖上初晴后雨》", "Ẩm Hồ Thượng Sơ Tình Hậu Vũ", "Tây Hồ Hàng Châu", "Dục bả Tây Hồ tỷ Tây Tử, đạm trang nồng mạt tổng tương nghi.", "Yù bǎ Xīhú bǐ Xīzǐ, dànzhuāng nóngmǒ zǒng xiāngyí.", "Muốn ví Tây Hồ tựa nàng Tây Thi, trang điểm nhạt hay đậm đều duyên dáng.", "West Lake mirrors fair Xizi—whether lightly powdered or richly arrayed, always sublime.", "assets/images/provinces/zhejiang-hangzhou-westlake.jpg", "Lớp sương ẩm mờ mặt nước Tây Hồ ứng với bút pháp chấm mực loang Mễ Phất."),
        ("pp-v7-03", "Đỗ Phủ", "《绝句》", "Tuyệt Cú (Hai Chim Hoàng Oanh)", "Xuân Sơn Thủy Mặc", "Lưỡng cá hoàng ly minh thúy liễu, nhất hàng bạch lộ thướng thanh thiên.", "Liǎng gè huánglí míng cuìliǔ, yī háng báilù shàng qīngtiān.", "Hai con chim oanh vàng hót trên rặng liễu xanh, một đàn cò trắng bay lên trời biếc.", "Two golden orioles sing in emerald willows; a line of white egrets climbs the cerulean sky.", "assets/images/paintings/23_rui_he_tu.jpg", "Bốn câu thơ dàn đúng bốn lớp màu Vàng – Lục – Trắng – Lam đối xứng hoàn hảo."),
        ("pp-v7-04", "Lý Bạch", "《望庐山瀑布》", "Vọng Lư Sơn Bộc Bố", "Lư Sơn Cao Đồ", "Phi lưu trực hạ tam thiên xích, nghi thị Ngân Hà lạc cửu thiên.", "Fēiliú zhí xià sānqiān chǐ, yí shì Yínhé lào jiǔtiān.", "Dòng nước bay thẳng xuống ba nghìn thước, ngỡ dải Ngân Hà tuột từ chín tầng mây.", "A torrent plunges straight three thousand feet—as if the Milky Way fell from the ninth heaven.", "assets/images/paintings/36_lushan_gao.jpg", "Tạo độ cao hùng vĩ theo đúng góc nhìn Cao Viễn (Gaoyuan) dựng đứng trong sơn thủy."),
        ("pp-v7-05", "Hoàng Công Vọng", "《富春山居图》题跋", "Đề Phú Xuân Sơn Cư Đồ", "Sơn Thủy Nguyên Đại", "Sơn trung nhất nhật triều tà, thủy mặc thiên nhiên bất giả điêu.", "Shānzhōng yī rì zhāoxiá, shuǐmò tiānrán bù jiǎ diāo.", "Một ngày sớm tối nơi sơn cước, nét thủy mặc tự nhiên chẳng cần gọt giũa.", "Morning mists along Fuchun valleys unfold effortlessly through unforced dry-brush strokes.", "assets/images/paintings/32_fuchun_shanju.jpg", "Kỹ thuật Phi Ma Thuân (vệt rách vỏ cây gai) vẽ triền đồi Giang Nam mềm mại."),
        ("pp-v7-06", "Nghê Toản", "《容膝斋图》", "Dung Tất Trai Đồ", "Thanh Lạnh Hán Thạch", "Nhất giang yên thủy tống tà dương, thuyên trúc cô đình nhất đạm trang.", "Yī jiāng yānshuǐ sòng xiéyáng, shūzhú gū tíng yī dànzhuāng.", "Một dòng khói nước tiễn bóng chiều tà, vài khóm trúc lẻ bóng bên đình đơn sơ.", "Misty river water escorts the setting sun; sparse bamboo frames a solitary pavilion.", "assets/images/paintings/34_liujunzi_tu.jpg", "Nghệ thuật chừa khoảng trắng (Lưu Bạch) cực rộng tạo không gian tĩnh tại tuyệt đối."),
        ("pp-v7-07", "Thạch Đào", "《苦瓜和尚画语录》", "Nhất Họa Luận", "Hoàng Sơn Kỳ Thúy", "Sưu tận kỳ phong đả thảo cảo.", "Sōu jìn qí fēng dǎ cǎogǎo.", "Thu gom hết mọi ngọn núi kỳ vĩ vào bản thảo tâm hồn.", "Gather every wondrous peak as raw draft sketches before striking the brush.", "assets/images/paintings/70_huangshan_tu_meiqing.jpg", "Học vẽ từ thực địa Hoàng Sơn thay vì chỉ chép lại khuôn mẫu thầy xưa."),
        ("pp-v7-08", "Bạch Cư Dị", "《钱塘湖春行》", "Tiền Đường Hồ Xuân Hành", "Tây Hồ Xuân Sắc", "Loạn hoa tiệm dục mê nhân nhãn, thiển thảo tài năng một mã đề.", "Luànhuā jiàn yù mí rén yǎn, qiǎncǎo cái néng mò mǎtí.", "Hoa đua nở làm say đắm mắt người, cỏ non mới cao vừa lấp vó ngựa.", "Riots of blossoms dazzle riders; tender grass barely hides the horses' hooves.", "assets/images/paintings/04_youchun_tu.jpg", "Dẫn mắt người xem đi qua từng chặng Đê Bạch Sa của Tây Hồ mùa xuân."),
        ("pp-v7-09", "Liễu Tông Nguyên", "《江雪》", "Giang Tuyết", "Hàn Giang Độc Điếu", "Cô chu thoa lạp ông, độc điếu hàn giang tuyết.", "Gūzhōu suōlì wēng, dúdiào hánjiāng xuě.", "Chiếc thuyền lẻ loi, ông lão áo tơi nón lá, một mình câu tuyết sông lạnh.", "A lone boatman in straw cape and bamboo hat fishes silently on icy river snow.", "assets/images/paintings/59_hanjiang_dudiao_tu.jpg", "Cấu trúc thu điểm mắt tập trung từ ngàn ngọn núi tuyết dồn về chiếc thuyền cô độc."),
        ("pp-v7-10", "Lý Thanh Chiếu", "《醉花阴》", "Túy Hoa Âm", "Hương Lư Cúc Vàng", "Mạc đạo bất tiêu hồn, liêm quyển tây phong, nhân tỷ hoàng hoa sấu.", "Mò dào bù xiāohún, lián juǎn xīfēng, rén bǐ huánghuā shòu.", "Đừng bảo không nao lòng, gió tây cuốn rèm lên, người gầy hơn hoa cúc vàng.", "Say not my spirit stays calm; western gusts lift the blind, leaving me slimmer than autumn chrysanthemums.", "assets/images/paintings/48_zhushi_tu.jpg", "Thi pháp nữ sĩ Tống từ kết hợp tinh tế với tranh công bút hoa cúc."),
        ("pp-v7-11", "Vương An Thạch", "《泊船瓜洲》", "Bạc Thuyền Qua Châu", "Trường Giang Nguyệt Dạ", "Xuân phong hựu lục Giang Nam ngạn, minh nguyệt hà thời chiếu ngã hoàn.", "Chūnfēng yòu lǜ Jiāngnán àn, míngyuè héshí zhào wǒ huán.", "Gió xuân lại thổi xanh bờ Giang Nam, trăng sáng bao giờ soi ta trở về.", "Spring breezes green Jiangnan banks once more; when will bright moonbeams escort me home?", "assets/images/paintings/57_jiangxing_chuxue_tu.jpg", "Nổi tiếng với chữ 'Lục' (làm xanh bờ sông) qua nhiều lần rèn chữ."),
        ("pp-v7-12", "Đường Bá Hổ", "《秋风纨扇图》", "Thu Phong Hoàn Phiến Đồ", "Mỹ Nhân Cầm Quạt Thu", "Thu lai hoàn phiến hợp tàng tương, hà sự thu phong thượng đoạn trường.", "Qiū lái wánshàn hé cáng xiāng, héshì qiūfēng shàng duàncháng.", "Thu sang quạt lụa cất hòm, cớ chi gió thu thổi còn đứt ruột sầu.", "With autumn's chill the silk fan sleeps inside its chest; why does the autumn breeze still break the heart?", "assets/images/paintings/10_zhanhua_shinv_tu.jpg", "Kết hợp tuyệt hảo giữa thơ đề trên góc tranh và nét bút yểu điệu Minh Ngô Môn."),
    ]
    poem_12 = [
        {
            "id": pid,
            "poet": poet,
            "titleZh": tzh,
            "titleVi": tvi,
            "paintingRefId": pid,
            "pingZePattern": "Thất ngôn / Ngũ ngôn cổ thể",
            "hanViet": tvi,
            "poemZh": pzh,
            "poemVi": pvi,
            "image": ensure_verified_img(img),
            "title": f"{tzh} · {tvi}",
            "authorVi": poet,
            "epithetVi": sub,
            "translateVi": f"{pvi} ({pen})",
            "pinyin": py,
            "visualNoteVi": bnote,
            "pingZeNote": pen,
            "brushworkAndCompositionVi": bnote,
            "historicalContextVi": "Phân tích giao thoa Thi–Họa theo chuẩn giám tuyển *The Met* & *Google Arts*.",
        }
        for pid, poet, tzh, tvi, sub, pzh, py, pvi, pen, img, bnote in poem_specs
    ]

    wenyan_specs = [
        ("wy-31", "所", "suǒ", "Sở", "Đại từ chỉ đối tượng chịu tác động ('cái mà...')", "Passive nominalizer before verb ('what / that which')", "鱼，我所欲也。", "Mạnh Tử", "我要的东西", "Cá là thứ ta ham muốn vậy.", "Fish is that which I desire.", "Giữ nguyên cấu trúc 'Sở dĩ', 'Sở hữu', 'Sở thích' trong tiếng Việt.", "Hay dịch nhầm chữ Sở thành 'nơi chốn' trong cụm 'động từ + 所'."),
        ("wy-32", "其", "qí", "Kỳ", "Đại từ sở hữu ngôi 3 hoặc phó từ suy đoán", "Third-person possessive ('his/its') or modal ('perhaps')", "攻其无备，出其不意。", "Tôn Tử Binh Pháp", "攻打他没有准备的地方", "Đánh vào chỗ họ không phòng bị.", "Strike where they are unprepared.", "Hán Việt dùng 'Kỳ thực', 'Kỳ dư'.", "Dễ lẫn vai trò đại từ và trợ từ hỏi."),
        ("wy-33", "以", "yǐ", "Dĩ", "Giới từ chỉ công cụ ('dùng/lấy') hoặc mục đích ('để')", "Preposition ('by means of') or purpose ('in order to')", "学以致用。", "Sách cổ & Thực dụng", "学习是为了应用", "Học để vận dụng vào đời sống.", "Study in order to put into practice.", "Gặp nhiều trong 'Dĩ hòa vi quý', 'Kiên dĩ'.", "Luôn xác định tân ngữ sau 以 để biết nghĩa 'bằng' hay 'để'."),
        ("wy-34", "为", "wéi / wèi", "Vi / Vị", "Thanh 2: làm/là/trở thành; Thanh 4: vì/giúp", "wéi: act as / be; wèi: for the sake of", "天下为公。", "Lễ Ký – Lễ Vận", "天下是大家共享的", "Thiên hạ là của chung muôn dân.", "The world belongs to all.", "Âm đọc Vị = vì ai; Vi = làm, là.", "Đọc sai thanh điệu làm đảo ngược chủ vị."),
        ("wy-35", "于", "yú", "Ư", "Giới từ chỉ vị trí, thời gian hoặc so sánh ('hơn')", "Locative ('at/in'), directional ('to'), or comparative ('than')", "青，取之于蓝，而青于蓝。", "Tuân Tử", "比蓝草更青", "Lấy từ cây chàm mà xanh HƠN cây chàm.", "Drawn from indigo, yet bluer than indigo.", "Quen thuộc trong 'Thanh xuất ư lam'.", "Trong chữ 于 đứng sau tính từ phải dịch là 'hơn', không phải 'ở tại'."),
        ("wy-36", "则", "zé", "Tắc", "Liên từ điều kiện–kết quả ('thì, bèn') hoặc quy tắc", "Conjunction ('then') or noun ('rule/norm')", "不进则退。", "Cổ ngữ", "不前进就会后退", "Không tiến thì ắt lùi.", "Failure to advance means retreat.", "Đứng trong 'Nguyên tắc', 'Quy tắc'.", "Khi đứng đầu vế hai của câu đối lập nghĩa là 'thì ngược lại'."),
        ("wy-37", "故", "gù", "Cố", "Liên từ 'vì vậy' hoặc danh từ 'lý do/chuyện cũ'", "Conjunction ('therefore') or noun ('reason/old friend')", "温故而知新。", "Luận Ngữ", "复习旧知识获得新体会", "Ôn điều cũ để hiểu biết thêm điều mới.", "Review the old to grasp the new.", "Cố hương, Cố nhân, Hà cố.", "Khi đứng đầu câu đa phần là 'Vì thế cho nên'."),
        ("wy-38", "夫", "fú / fū", "Phù", "Trợ từ phát ngữ đầu đoạn nghị luận (Thanh 2: fú)", "Initial discourse particle framing an argument", "夫战，勇气也。", "Tả Truyện", "打仗这件事靠的是勇气", "Phàm việc đánh trận, cốt yếu nằm ở dũng khí.", "Now, warfare fundamentally relies upon courage.", "Đọc Phù khi mở đầu luận điểm, khác với Phu (chồng/phu).", "Đừng dịch thừa chữ Phù là 'người đàn ông' ở đầu câu văn ngôn!"),
        ("wy-39", "盖", "gài", "Cái", "Phó từ phỏng đoán mở đầu nguyên nhân ('âu là, đại khái vì')", "Introductory modal particle ('likely because / it is said')", "盖文章，经国之大业。", "Tào Phi – Điển Luận", "大概文章是治理国家的大事", "Âu rằng văn chương là sự nghiệp lớn trị nước.", "Indeed, literary writing stands among the grand works of statecraft.", "Khác hoàn toàn nghĩa hiện đại là 'cái nắp đậy'.", "Gặp đầu vế giải thích luôn mang sắc thái lập luận thận trọng."),
        ("wy-40", "岂", "qǐ", "Khởi", "Phó từ phản vấn ('há lại có lẽ...')", "Rhetorical adverb ('how could / surely not?')", "王侯将相宁有种乎 / 岂有此理。", "Sử Ký", "难道有这种道理吗", "Há lại có cái lý vô lý như thế sao!", "How could such an absurdity exist?", "Cụm 'Khởi hữu thử lý'.", "Nhận ra cấu trúc 岂...哉 / 岂...乎 là câu hỏi tu từ phủ định mạnh mẽ."),
        ("wy-41", "乃", "nǎi", "Nãi", "Phó từ 'bèn, mới, chính là' hoặc 'của ngươi'", "Linking adverb ('then / thereupon / indeed')", "失败乃成功之母。", "Cách ngôn Hán–Việt", "失败正是成功之母", "Thất bại chính là mẹ của thành công.", "Failure is indeed the mother of success.", "Chữ Nãi nối thẳng chủ–vị như động từ 'là'.", "Không chỉ xuất hiện ở cổ văn mà dùng đầy trong biển hiệu, báo chí."),
        ("wy-42", "遂", "suì", "Toại", "Phó từ chỉ kết quả nối tiếp ('rồi bèn, toại nguyện')", "Consequential adverb ('thereupon / consequently')", "既得志，遂疏远故人。", "Sử liệu cổ", "得志后于是疏远老友", "Sau khi đắc chí bèn xa lánh bạn cũ.", "Having gained ambition, he thereupon estranged old friends.", "Toại ý, Toại nguyện.", "Giúp bắt mạch trình tự thời gian nhanh trong đề đọc HSK 7–9."),
        ("wy-43", "既", "jì", "Ký", "Phó từ hoàn tất ('đã') — hay cặp với 且 ('vừa... lại vừa...')", "Already / Both... and... (既...且/又...)", "既来之，则安之。", "Luận Ngữ", "既然来了就安心住下", "Đã đến nơi này rồi thì hãy an tâm ở lại.", "Since you have arrived, make yourself peacefully at home.", "Ký kết, Ký sự.", "Rất hay dùng trong diễn văn đón tiếp đối tác Việt–Trung."),
        ("wy-44", "之所以", "zhī suǒyǐ", "Chi Sở Dĩ", "Cấu trúc giải thích 'lý do mà... là bởi vì' (kết hợp 因为)", "Causal frame ('the reason why... is because...')", "都江堰之所以千年不废，因其顺水势也。", "Thủy kinh chú", "都江堰之所以保留至今是因为顺应水势", "Đô Giang Yển sở dĩ ngàn năm không hỏng là vì thuận theo thế nước.", "The reason Dujiangyan endured a millennium is that it follows the river's flow.", "Rất thông dụng trong bài viết nghị luận C1–C2.", "Đừng bỏ sót chữ 'Vì' ở vế kết khi dịch ngược Việt–Trung."),
        ("wy-45", "不亦...乎", "bù yì ... hū", "Bất Diệc ... Hồ", "Cấu trúc phản vấn kinh điển của Khổng Tử ('chẳng cũng... lắm sao!')", "Classical celebratory rhetorical question ('Is it not indeed...!')", "有朋自远方来，不亦乐乎？", "Luận Ngữ", "不也很快乐吗", "Có bạn từ phương xa tới, chẳng cũng vui sướng lắm sao!", "When friends come from afar, is it not truly a joy?", "Dùng làm câu mở đầu đón đoàn đối tác quốc tế cực trang trọng.", "Luôn nhớ dấu chấm hỏi tu từ thực chất là câu khẳng định phấn khởi."),
        ("wy-46", "莫若 / 不如", "mò ruò", "Mạc Nhược", "Kết cấu so sánh tối ưu ('không gì bằng')", "Superlative recommendation ('nothing is better than')", "百闻不如一见 / 莫若亲往。", "Hán Thư", "不如亲自去看一看", "Trăm nghe không bằng một thấy; chi bằng đích thân đi xem.", "Hearing a hundred times cannot rival seeing once.", "Dễ nhớ qua câu 'Bách văn bất như nhất kiến'.", "Thường làm kết luận hành động trong các bức thư khuyên giải."),
    ]
    wenyan_16 = [
        {
            "id": wid,
            "tokenZh": zh,
            "pinyin": py,
            "hanViet": hv,
            "category": cat,
            "colorHex": "#1E5485",
            "functionVi": fvi,
            "functionEn": fen,
            "classicalExampleZh": czh,
            "classicalSource": csrc,
            "vernacularHskEquivalentZh": veq,
            "fullTranslateVi": tvi,
            "fullTranslateEn": ten,
            "classicalExample": czh,
            "modernMandarinEq": veq,
            "sinoVietReadingRuleVi": sv,
            "commonExamTrapVi": trap,
        }
        for wid, zh, py, hv, fvi, fen, czh, csrc, veq, tvi, ten, sv, trap in wenyan_specs
        for cat in ["Văn ngôn Cốt lõi"]
    ]

    hsk_topics = [
        ("Di sản Đấu Củng & Kiến trúc Chịu Chấn", "Seismic Timber Joinery Heritage", "古建筑抗震智慧", "斗拱以卯榫层叠承重，虽不用一钉一铁，却能在强震中通过微幅滑动耗散能量。这一东方力学奇迹不仅见于紫禁城太和殿，也为现代绿色木结构建筑提供了灵感。", "Dǒugǒng yǐ mǎosǔn céngdié chéngzhòng, suī bù yòng yī dīng yī tiě, què néng zài qiángzhèn zhōng tōngguò wēifú huádòng hàosàn néngliàng.", "Đấu Củng dùng mộng gỗ chồng tầng chịu lực, tuy không dùng một chiếc đinh sắt nhưng vẫn tiêu tán năng lượng địa chấn qua trượt ma sát nhẹ, gợi mở kiến trúc gỗ xanh hiện đại.", "Interlocking Dougong timber brackets carry heavy roof loads without nails, dissipating seismic stress through subtle friction while inspiring modern green architecture.", "Tại sao Đấu Củng chịu động đất tốt không cần đinh sắt?", "Why do nail-free Dougong brackets resist earthquakes effectively?", "Nhờ kết cấu mộng đàn hồi trượt tiêu tán xung lực.", "Through elastic interlocking friction-damping joints."),
        ("Thủy Lợi Đô Giang Yển Không Đập Chắn", "Dujiangyan Dam-Free Irrigation", "顺势治水千年奇迹", "李冰修筑都江堰时摒弃拦河筑坝的思路，而以鱼嘴分水、飞沙堰排沙、宝瓶口控流。两千二百余年来，成都平原因此化作水旱从人的天府之国。", "Lǐ Bīng xiūzhù Dūjiāngyàn shí bìngqì lánhé zhùbà de sīlù, ér yǐ Yúzǔi fēnshuǐ.", "Khi xây Đô Giang Yển, Lý Băng tránh đắp đập chắn ngang dòng mà dùng Ngư Chủy phân nước, Phi Sa Yển xả cát và Bảo Bình Khẩu tiết lưu, nuôi sống đồng bằng Thành Đô hơn 2.200 năm.", "Li Bing bypassed river-blocking dams in favor of fish-mouth levees and silt-spilling weirs, keeping the Chengdu Plain fertile for 2,200 years.", "Ba cấu kiện cốt lõi của Đô Giang Yển gồm gì?", "What three engineering structures compose Dujiangyan?", "Ngư Chủy, Phi Sa Yển và Bảo Bình Khẩu.", "Fish Mouth Levee, Flying Sand Weir, and Bottle-Neck Channel."),
        ("Quá Cảnh Miễn Thị Thực 240 Giờ & Du Lịch Số", "240h Transit Free & Seamless App Travel", "240小时免签与数字出行", "随着240小时过境免签与外卡绑定移动支付的推广，国际旅客仅凭护照与电子客票即可畅乘时速三百五十公里的高铁，深入各省文化遗产与百年老字号工坊。", "Suízhe èrbǎi sìshí xiǎoshí guòjìng miǎnqiān yǔ wàikǎ bǎngdìng yídòng zhīfù de tuīguǎng, guójì lǚkè chàngchéng gāotiě.", "Nhờ chính sách miễn thị thực quá cảnh 240 giờ và liên kết thẻ ngoại vào thanh toán di động, du khách quốc tế dễ dàng dùng hộ chiếu đi tàu 350 km/h thăm di sản và thương hiệu trăm năm.", "Expanding 240-hour visa-free transit and international bank-card QR binding enables effortless 350 km/h rail journeys across regional heritage sites.", "Du khách có thể lưu trú quá cảnh miễn thị thực tối đa bao lâu?", "How long is the expanded visa-free transit window?", "240 giờ (tương đương 10 ngày).", "240 hours (10 days)."),
        ("Mã Vùng Trồng GACC & Xuất Khẩu Chính Ngạch", "GACC Orchard Codes & Formal Agro Trade", "农产品正贸与海关编码", "要让热带鲜果高效进入华南与华东冷链市场，企业必须在海关总署系统完成注册编码、严格匹配植物检疫证书，并借助凭祥智慧口岸压缩通关时长。", "Yào ràng rèdài xiānguǒ gāoxiào jìnrù shìchǎng, qǐyè bìxū wánchéng Hǎiguān Zǒngshǔ zhùcè biānmǎ.", "Để trái cây nhiệt đới vào thị trường Hoa Nam–Hoa Đông hiệu quả, doanh nghiệp cần đăng ký mã GACC, khớp chứng thư kiểm dịch và tận dụng cửa khẩu thông minh Bằng Tường.", "Formal tropical fruit imports depend on pre-registered GACC orchard codes, matching phytosanitary paperwork, and automated border clearance.", "Hệ thống nào quản lý đăng ký nhà sản xuất thực phẩm nhập khẩu vào TQ?", "Which customs administration oversees foreign food registration codes?", "Tổng cục Hải quan Trung Quốc (GACC / CIFER).", "General Administration of Customs of China (GACC)."),
    ]
    # Expand cleanly to 20 distinct domain passages across culture, science, economics, education
    extra_themes_16 = [
        ("Gốm Thanh Hoa & Con Đường Sứ Biển Đông", "Porcelain Maritime Trade", "青花瓷海路传奇", "波斯苏麻离青与景德镇高岭土在千度窑火中交融，催生了早期的全球贸易珍品，并与越南朱豆青花瓷在南海航线上交相辉映。", "Bōsī Sūmálíqīng yǔ Jǐngdézhèn gāolǐngtǔ zài qiāndù yáohuǒ zhōng jiāoróng.", "Quặng Cô-ban Ba Tư và đất Cao Lanh Cảnh Đức Trấn kết tinh thương phẩm toàn cầu, song hành cùng gốm Chu Đậu Việt Nam.", "Cobalt and kaolin forged global maritime trade alongside Vietnam's Chu Dau wares.", "Đất Cao Lanh nung ở ngưỡng nhiệt độ nào?", "At roughly what kiln temperature is fine kaolin porcelain fired?", "Khoảng 1300°C.", "Around 1300°C."),
        ("Phục Hồi Cổ Trấn Sống Giang Nam", "Living Water-Town Conservation", "江南古镇活态保护", "周庄、同里与乌镇并未沦为静态景区，而是保留石桥桨声与蓝印花布工坊，让非遗技艺真正融入当代居民日常生活。", "Zhōuzhuāng, Tónglǐ yǔ Wūzhèn ràng fēiyí jìyì róngrù dāngdài jūmín shēnghuó.", "Chu Trang, Đồng Lý và Ô Trấn duy trì nhịp sống thợ thủ công bên kênh rạch đá xanh thay vì biến di tích thành mô hình tĩnh.", "Zhouzhuang and Tongli keep residential artisans active beside heritage stone canals.", "Cổ trấn Giang Nam giữ sức sống bền vững bằng cách nào?", "How do water towns avoid becoming sterile theme parks?", "Bảo tồn sinh hoạt cư dân và làng nghề truyền thống tại chỗ.", "By preserving living residential workshops alongside canal restoration."),
        ("Khoáng Sắc Bích Họa Đôn Hoàng 1.300 Năm", "Dunhuang Mineral Pigments", "敦煌矿彩千年不褪", "青金石、孔雀石与朱砂研磨而成的天然矿彩，依托河西走廊极端干燥的大漠气候，令莫高窟壁画跨越千年依然鲜亮。", "Qīngjīnshí, kǒngquèshí yǔ zhūshā yánmó ér chéng de tiānrán kuàngcǎi.", "Bột nghiền từ Đá Lam Thanh Kim, Malachite xanh và Chu Sa đỏ giúp tranh Hang Mạc Cao giữ nguyên độ bão hòa rực rỡ giữa sa mạc.", "Ground lapis lazuli, malachite, and cinnabar kept Mogao murals luminous across desert centuries.", "Khí hậu nào của Cam Túc góp phần bảo tồn 50.000 cuộn văn thư Hang 17?", "What climatic factor aided manuscript preservation at Cave 17?", "Khí hậu sa mạc khô hạn độ ẩm thấp.", "Arid desert conditions with minimal humidity."),
        ("Tôn Tử Binh Pháp & Thương Lượng B2B", "Sunzi Strategy in Modern Contracts", "商战谋略与共赢契约", "在跨境供应链谈判中，运用「知己知彼」原则深入核查税号、原产地规则与验厂能力，比单纯压低单价更能保障长期共赢。", "Zài kuàjìng gōngyìngliàn tánpàn zhōng, yùnyòng zhījǐzhībǐ yuánzé.", "Nguyên tắc 'Tri kỷ tri bỉ' khuyên doanh nghiệp khảo sát kỹ chuỗi cung ứng, thuế quan RCEP và năng lực đối tác trước khi ký hợp đồng.", "Applying 'Know yourself and your partner' guides thorough customs and factory due diligence.", "Khảo sát năng lực nhà máy đối chiếu câu nào trong Tôn Tử Binh Pháp?", "Which classical Sunzi maxim underpins factory due diligence?", "Tri kỷ tri bỉ, bách chiến bất đãi.", "Know yourself and know the counterpart to avoid miscalculation."),
        ("Sơ Đồ Mạng Nhân Vật Sử Ký & Tiểu Thuyết", "Relational Network Analysis in Classics", "典籍人物关系图谱", "借助可视化关系网络梳理《史记》与《儒林外史》的人物脉络，有助于学者迅速把握派系博弈、师承谱系与叙事结构。", "Jièzhù kěshìhuà guānxi wǎngluò shūlǐ Shǐjì yǔ Rúlín Wàishǐ.", "Đối chiếu *Nho Lâm Ngoại Sử* và *Sử Ký Tư Mã Thiên* bằng sơ đồ mạng lưới giúp học giả nhận rõ phe phái, động cơ và bước ngoặt lịch sử.", "Graph mapping of Rulin Waishi and Shiji illuminates patronage webs and historical turning points.", "Ai là tác giả bộ Kỷ Truyện Thể *Sử Ký* 130 thiên?", "Who authored the 130-chapter Records of the Grand Historian?", "Thái Sử Công Tư Mã Thiên thời Tây Hán.", "Western Han Grand Historian Sima Qian."),
        ("Thơ Chữ Hán Việt Nam & Truyền Thống Đường Thi", "Vietnamese Han-Script Poetry Mastery", "越中汉诗交融雅韵", "从李常杰、阮廌到阮攸，越南古代诗家善于化用唐诗格律与意象，抒写独立自强的山河气概与人文情怀。", "Yuènán gǔdài shījiā shànyú huàyòng Tángshī gélǜ yǔ yìxiàng.", "Từ Lý Thường Kiệt, Nguyễn Trãi đến Nguyễn Du và Hồ Chí Minh, thi nhân Việt dùng thể Luật Thi – Tuyệt Cú diễn đạt bản lĩnh tự chủ dân tộc.", "From Nguyen Trai to Ho Chi Minh, Vietnamese poets turned Tang forms into vessels of sovereign identity.", "Bài thơ *Ngục Trung Nhật Ký* đối chiếu ánh trăng với Lý Bạch có tên là gì?", "Which prison diary poem dialogues with Li Bai's Quiet Night Thought?", "Vọng Nguyệt (Ngắm Trăng).", "Gazing at the Moon (Wangyue)."),
        ("Phát Triển Pin LFP & Hành Lang Công Nghiệp Bắc Bộ", "LFP Batteries & Industrial Parks", "新能源与北越工业园", "随着新能源汽车与磷酸铁锂电池产能协同升级，海防深水港与北宁工业园急需精通中越英三语的供应链专才。", "Suízhe xīn néngyuán qìchē yǔ línsuāntiělǐ diànchí chǎnnéng xiétóng shēngjí.", "Chuỗi linh kiện cực âm, bộ dây dẫn và xe điện tạo hàng nghìn vị trí kỹ sư – quản lý dự án song ngữ tại Hải Phòng và Bắc Ninh.", "EV cell assembly and electronics clusters expand demand for trilingual engineers in Hai Phong and Bac Ninh.", "Lợi thế an toàn nhiệt của hóa học pin LFP là gì?", "What key safety trait characterizes LFP battery chemistry?", "Ổn định nhiệt cao, ít rủi ro quá nhiệt và tuổi thọ chu kỳ sạc dài.", "High thermal stability and long cycle durability."),
        ("Bảo Hộ Chỉ Dẫn Địa Lý (GI) Nông Sản Đặc Hữu", "Protecting Regional Agricultural Terroir", "地理标志保护制度", "严格的地理标志划界与二维码溯源体系，使增城荔枝、西湖龙井等风土物产在国际零售市场免受仿冒冲击。", "Yángé de dìlǐ biāozhì huàjiè yǔ èrwéimǎ sùyuán tǐxì.", "Chuẩn GI nối thổ nhưỡng với truy xuất nguồn gốc mã QR giúp Vải Tăng Thành, Trà Long Tỉnh hay Trà Shan Tuyết bán đúng giá trị thực.", "Delimited GI registries paired with QR seals protect specialty lychees and mountain teas from imitations.", "Mục tiêu chính của đăng ký Chỉ dẫn Địa lý (GI) là gì?", "What is the core objective of Geographical Indication protection?", "Chống hàng giả mạo danh tiếng vùng sản xuất bản địa.", "Safeguard regional terroir identity against counterfeit labeling."),
        ("Lò Nung Quân Diêu & Hiện Tượng Men Biến Sắc", "Kiln-Transmutation Physics in Jun Ware", "钧瓷窑变物理机制", "禹州钧窑在约一千三百度还原焰中发生液相分相，铜氧化物幻化出紫红交织的绚丽釉色，素有入窑一色、出窑万彩之誉。", "Yǔzhōu Jūnyáo zài yīqiān sānbǎidù huányuányàn zhōng fāshēng yèxiàng fēnxiàng.", "Nhiệt độ khử 1300°C làm lớp men oxit đồng tách pha vi mô thành ánh tím – xanh – đỏ độc bản không sản phẩm nào giống sản phẩm nào.", "At 1300°C, copper oxide undergoes liquid-phase separation producing unique crimson-blue flares.", "Câu tục ngữ mô tả tính độc bản của gốm Quân Diêu là gì?", "Which proverb sums up Jun porcelain kiln uniqueness?", "Nhập diêu nhất sắc, xuất diêu vạn thải (Vào lò một sắc, ra lò muôn màu).", "Enter kiln one hue; emerge in ten thousand colors."),
        ("Hệ Thống Đề Cương HSK 7–9 & Tranh Biện Học Thuật", "HSK Band 7–9 Academic Essay Logic", "高级汉语论证框架", "HSK七至九级书面表达考查多维度思辨，考生宜熟练驾驭让步与转折关联词，并佐以确凿文献或行业案例支撑论点。", "HSK qī zhì jiǔ jí shūmiàn biǎodá kǎochá duō wéidù sībiàn.", "Thí sinh đạt Band 7–9 cần vận dụng thuần thục liên từ nhượng bộ – đối lập ('Tuy nhiên... Suy cho cùng...') và trích dẫn ví dụ sử liệu xác thực.", "Band 7–9 writing expects nuanced concession-and-synthesis connectors backed by concrete evidence.", "Hai yếu tố cấu thành đoạn phản biện thuyết phục trong văn nghị luận HSK 9 là gì?", "What ensures strong synthesis in HSK 9 counter-argumentation?", "Thừa nhận góc nhìn đối lập có cơ sở rồi tổng hợp giải pháp cân bằng.", "Acknowledge valid objections before presenting a nuanced synthesis."),
        ("Chữ Viết Giản Thể – Phồn Thể Trong Thương Hiệu Lâu Đời", "Simplified vs Traditional Typography traps", "简繁转换常见误区", "研读港澳台古籍碑刻与百年商号招牌时，切忌机械一对一替换简化字，而应警惕签与籤、发与髮等分合差异。", "Yándú bēikè yǔ shānghào zhāopai shí, qièjì jīxiè yīduìyī tìhuàn jiǎnhuàzì.", "Khi đọc văn bản Hồng Kông, Đài Loan hay biển hiệu cổ tự, cần đặc biệt tránh gộp nhầm cặp chữ 'Phát–Tóc (发)', 'Mặt–Mì (面)', 'Ký–Nhãn (签)'.", "Navigating archival signage across Hong Kong and Taipei requires watching split pairs like Phát/Tóc and Mặt/Mì.", "Cặp chữ Phồn thể nào phân biệt rõ 'ký hợp đồng' và 'dán nhãn thùng hàng'?", "Which Traditional character pair separates 'sign' from 'shipping label'?", "簽 (ký tên) vs 籤 (thẻ/nhãn dán).", "簽 (to sign) vs 籤 (label/tag)."),
        ("Chuẩn Hóa Thanh Toán Quốc Tế CIPS & E-CO Form E", "CIPS Settlement & Electronic Origin Rules", "人民币跨境清算实务", "通过跨境人民币清算直连通道并搭配电子化原产地证核验，双边企业得以削减中间行转汇成本与单证延误。", "Tōngguò kuàjìng rénmínbì qīngsuàn zhílián tōngdào yǔ diànzǐ yuánchǎndìzhèng.", "Thanh toán song phương kết hợp chứng từ xuất xứ điện tử giảm trễ xác minh ngân hàng và tiết kiệm phí chuyển đổi qua đồng tiền thứ ba.", "Direct clearing combined with electronic Origin filings removes third-currency FX friction.", "Chữ 'CIPS' viết tắt cho hạ tầng tài chính nào?", "What financial network does 'CIPS' stand for?", "Hệ thống Thanh toán Liên ngân hàng Xuyên biên giới bằng NDT.", "Cross-Border Interbank Payment System."),
        ("Du Học CSC & Kỹ Năng Phỏng Vấn Đề Cương 1.500 Chữ", "CSC Faculty Interviews & Research Proposals", "CSC面试与研究计划", "在CSC高校教授面试环节，提前研读导师近期论文并在研修计划中明确研究问题与方法，往往能赢得高分青睐。", "Zài CSC miànshì huánjié, tíqián yándú dǎoshī lùnwén yǒuzhùyú yíngdé gāofēn.", "Giáo sư hướng dẫn đánh giá cao ứng viên hiểu rõ hướng lab hiện tại, chỉ ra câu hỏi nghiên cứu cụ thể và chứng minh năng lực tự đọc tài liệu gốc.", "Advisors prize concise 1,500-character Study Plans aligned with ongoing lab projects.", "Yếu tố gây ấn tượng sớm nhất trước khi nộp cổng CSC Type B là gì?", "What step dramatically boosts CSC Type B success prior to deadline?", "Nhận được Thư Chấp Thuận của Giáo sư (Pre-Admission / Acceptance Letter).", "Securing a supervisor/university pre-admission letter early."),
        ("Trà Đạo Vũ Di Sơn & Di Sản Sinh Thái Rừng Đá", "Wuyishan Cliff Tea & Biodiversity", "武夷岩茶与生态护林", "生长在武夷丹霞岩石缝隙中的青茶历经萎凋、摇青与炭焙，形成独树一帜的岩韵花香，见证人与自然共生的茶山生态。", "Shēngzhǎng zài Wǔyí shíxì zhōng de qīngchá jīnglì tànbèi xíngchéng yányùn.", "Trà Nham mọc giữa khe đá phong hóa giàu khoáng kết hợp cây che bóng tự nhiên tạo hương 'Nham Cốt Hoa Hương' độc nhất vùng Phúc Kiến.", "Mineral sandstone crevices and natural shade biodiversity endow Wuyi rock teas with floral complexity.", "Nhóm trà chính của Vũ Di Đại Hồng Bào thuộc loại trà nào?", "Into which of China's six tea categories does Da Hong Pao fall?", "Trà Ô Long (Thanh trà bán lên men).", "Oolong (semi-oxidized tea)."),
        ("Kinh Tế Đêm & Làng Nghề Sáng Tạo Đào Khê Xuyên", "Taoxichuan Heritage Urban Renewal", "陶溪川工业遗产再生", "景德镇将老瓷厂砖窑空间改造为青年陶艺创客市集，既完好保留近现代工业风貌，又吸引年轻设计师源源不断加入。", "Jǐngdézhèn jiāng lǎo cíchǎng gǎizào wéi qīngnián táoyì chuàngkè shìjí.", "Các phân xưởng lò sứ cũ Cảnh Đức Trấn được bảo tồn ống khói gạch đỏ làm nơi tổ chức chợ đêm thiết kế trẻ thu hút hàng triệu du khách.", "Decommissioned brick kiln halls were converted into vibrant evening craft studios for young ceramicists.", "Mô hình tái thiết di sản công nghiệp này kết hợp yếu tố nào?", "What two strengths fuel Taoxichuan's cultural revival?", "Kiến trúc công nghiệp lịch sử kết hợp cộng đồng thiết kế trẻ.", "Preserved industrial masonry + contemporary design incubation."),
        ("Thư Họa Đồng Nguyên & Triết Lý Lưu Bạch", "Brushstroke Unity in Calligraphy & Painting", "书画同源与留白意境", "中国水墨画与书法共享中锋用笔与墨分五色规律，画中大面积留白并非空白，而是流动的云海与空灵意境。", "Zhōngguó shuǐmòhuà yǔ shūfǎ gòngxiǎng zhōngfēng yòngbǐ yǔ liúbái yìjìng.", "Cùng dùng một cây bút lông Hồ Bút, thỏi mực Huy Châu và giấy Tuyên Thành, họa sĩ để khoảng trắng giấy làm mây nước vô tận.", "Calibrated ink moisture on absorbent Xuan paper lets unpainted void function as mist and river expanse.", "Cụm từ 'Thư Họa Đồng Nguyên' nhấn mạnh điều gì?", "What principle does 'Calligraphy and Painting Share One Root' express?", "Chung kỹ pháp vận bút, lực cổ tay và tinh thần tiết tấu.", "Shared brush-tip control, rhythm, and expressive ink gradation."),
    ]
    raw_hsk = hsk_topics + extra_themes_16
    hsk_20 = []
    for idx, (tvi, ten, tzh, pzh, ppy, trvi, tren, qvi, qen, avi, aen) in enumerate(raw_hsk, start=1):
        hsk_20.append({
            "id": f"hsk-v7-{idx:02d}",
            "hskLevel": "HSK 7-9",
            "titleZh": tzh,
            "titleVi": tvi,
            "titleEn": ten,
            "passageZh": pzh,
            "passagePinyin": ppy,
            "translationVi": trvi,
            "translationEn": tren,
            "keyWords": [{"zh": tzh.split("·")[0].strip()[:4], "py": "huìtōng", "vi": tvi, "en": ten}],
            "comprehensionQuiz": {"qVi": qvi, "qEn": qen, "ansVi": avi, "ansEn": aen},
            "grammarPatternHighlightVi": "Chuẩn lập luận học thuật Band 7–9 (虽...却 / 不仅...而且 / 因此).",
        })

    essay_topics = [
        ("Di sản công nghiệp và du lịch sáng tạo tại đô thị cổ", "Industrial Heritage Revitalization & Creative Craft Districts", "工业遗产如何通过文创焕发新生？"),
        ("Tác động của Đường sắt Cao tốc 350 km/h đến văn hóa du lịch vùng", "Impact of 350 km/h High-Speed Rail on Regional Cultural Tourism", "高铁网络对区域文化旅游的深远影响"),
        ("Cân bằng giữa chuyển đổi số AI và bảo tồn chữ Hán – thư pháp", "Balancing AI Digitization with Traditional Calligraphy Craft", "数字时代书法与传统工艺的传承"),
        ("Tiêu chuẩn hóa nông sản GACC và nâng cao giá trị xuất khẩu chính ngạch", "GACC Traceability & Formalizing Southeast Asian Agro Trade", "海关合规如何赋能跨境农产品贸易？"),
        ("So sánh tư duy thủy lợi Đô Giang Yển và thích ứng biến đổi khí hậu", "Dujiangyan Hydraulic Philosophy Applied to Modern Climate Resilience", "顺势治水哲学对当代气候适应的启示"),
        ("Vai trò của Lão Tự Hào trong xây dựng thương hiệu quốc gia bền vững", "Centuries-Old Heritage Brands in Modern National Brand Equity", "百年老字号在当代品牌建设中的价值"),
        ("Hợp tác nghiên cứu giáo dục đại học Trung–Việt trong kỷ nguyên xanh", "Sino-Vietnamese Higher Education Cooperation in Green Engineering", "中越高校绿色工程科研合作前景"),
        ("Bảo tồn cổ trấn sống Giang Nam trước áp lực thương mại hóa quá mức", "Defending Living Canal Town Heritage Against Over-Tourism", "如何避免古镇旅游中的过度商业化？"),
        ("Khoa học sử Đông Á: Từ Bản Đồ Sao Đôn Hoàng đến vệ tinh hiện đại", "From the Dunhuang Star Chart to Contemporary Space Exploration", "从敦煌星图看东方天文观测传统"),
        ("Từ vựng Hán Việt: Cầu nối văn hóa hay cái bẫy hiểu nhầm B2B?", "Sino-Vietnamese Vocabulary: Cultural Bridge or Contractual Trap?", "汉越同形异义词在跨文化商务中的警示"),
        ("Vai trò của Chỉ dẫn Địa lý (GI) trong bảo vệ sinh kế nông dân vùng núi", "Geographical Indications and Upland Farming Livelihoods", "地理标志产品如何助力乡村经济？"),
        ("Du lịch không tiền mặt và rào cản công nghệ đối với du khách quốc tế", "Cashless Travel Ecosystems and Friction-Free Visitor Onboarding", "数字支付便利化如何提升国际旅游体验？"),
        ("Châm biếm khoa cử trong *Nho Lâm Ngoại Sử* dưới lăng kính nhân sự hiện đại", "Imperial Exam Satire in Rulin Waishi vs Modern Talent Selection", "从《儒林外史》反思当代人才评价体系"),
        ("Giao thoa kiến trúc hội quán Hoa kiều tại Hội An và Chợ Lớn", "Shared Guild Architecture Across Hoi An and Cho Lon Ports", "会馆建筑中的跨海商业诚信文化"),
        ("Trách nhiệm minh bạch vật liệu khoáng tự nhiên trong phục chế bảo tàng", "Material Provenance and Ethics in Museum Mural Conservation", "传统矿物颜料在文物修复中的科学价值"),
        ("Tư duy đa ngành giúp thế hệ trẻ làm chủ thương mại – văn hóa Á Đông", "Interdisciplinary Literacy for Tomorrow's East Asian Leaders", "跨学科素养与东亚青年全球胜任力"),
    ]
    essays_16 = []
    for idx, (tvi, ten, tzh) in enumerate(essay_topics, start=1):
        essays_16.append({
            "id": f"ef-v7-{idx:02d}",
            "topicVi": tvi,
            "topicEn": ten,
            "topicZh": tzh,
            "blocks": {
                "topic": {"vi": f"Mở đề trực diện vấn đề: {tvi}.", "zh": f"围绕「{tzh}」展开跨文化实证分析。", "en": f"Frame core thesis around: {ten}."},
                "evidence": {"vi": "Trích dẫn số liệu sử liệu, hồ sơ UNESCO hoặc quy trình GACC/RCEP.", "zh": "结合历史文献、联合国遗产标准或实务数据进行论证。", "en": "Cite archival documentation, UNESCO criteria, or bilateral trade compliance data."},
                "counterArgument": {"vi": "Thừa nhận thách thức chi phí hoặc xung đột bảo tồn–thương mại hóa.", "zh": "诚然，实践过程中仍面临资金投入与文化失真风险等挑战。", "en": "Acknowledge CapEx hurdles or risks of over-commercialization."},
                "synthesis": {"vi": "Kết hợp công nghệ số và chuẩn mực di sản bản địa để phát triển bền vững.", "zh": "综上所述，唯有兼顾创新与传统底蕴，方能行稳致远。", "en": "Synthesize modern digital standards with authentic local craft preservation."},
            },
            "themeVi": tvi,
            "themeEn": ten,
            "structureZh": tzh,
            "pinyin": "HSK 7–9 · Khung Lập Luận Chuyên Sâu V7",
            "parallelEn": f"Structured C1–C2 argument template on {ten}.",
            "sampleParagraphZh": f"关于「{tzh}」，学界与业界普遍认为既须立足历史根基，又应借力数字标准实现可持续跃升。",
            "sampleParagraphEn": f"Regarding {ten}, durable excellence merges deep historical stewardship with verifiable digital standards.",
            "connectorToolkitZh": "诚然……然而……毋庸置疑……归根结底……",
            "viNote": f"Mở bài: {tvi} — dẫn 2 chứng cứ cụ thể + 1 câu phản biện.",
            "commonPitfallVi": "Tránh liệt kê cảm tính thiếu ví dụ lịch sử hoặc thiếu liên hệ Việt–Trung.",
            "commonPitfallEn": "Avoid vague generalizations lacking concrete historical or regulatory citations.",
        })

    tang_viet_9 = [
        ("hv-v7-01", "Đào Tiềm (Quy Khứ Lai Từ)", "Nguyễn Trãi (Côn Sơn Ca – Chữ Hán)", "归去来兮，田园将芜胡不归！", "昆山有泉，其声清冽兮可洗心！", "Cùng tôn vinh đạo ẩn dật thanh cao nơi suối rừng; Đào Tiềm chọn ruộng vườn Giang Tây, Nguyễn Trãi gửi tâm hồn vào tiếng suối Côn Sơn Chí Linh.", "Tiếp biến điển cố quy ẩn thành tuyên ngôn tự tại của bậc khai quốc công thần Đại Việt.", "Thế kỷ V (Đông Tấn) vs Thế kỷ XV (Hậu Lê Đại Việt)."),
        ("hv-v7-02", "Đỗ Phủ (Đăng Cao)", "Nguyễn Du (Độc Tiểu Thanh Ký)", "百年多病独登台，艰难苦恨繁霜鬓。", "不知三百余年后，天下何人泣素如？", "Nỗi tri âm vượt thời gian với thân phận tài hoa bạc mệnh trong lịch sử nhân loại.", "Vận dụng Thất ngôn Bát cú Đường luật cực điêu luyện thể hiện tấm lòng nhân đạo sâu sắc của Đại thi hào Nguyễn Du.", "Giao lưu tư tưởng Nhân văn Việt–Trung thế kỷ XVIII–XIX."),
        ("hv-v7-03", "Lý Thanh Chiếu (Thanh Minh Từ)", "Hồ Xuân Hương (Vấn Nguyệt – Bản dịch Hán cổ)", "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。", "问月圆缺几千秋，人间何处觅知音？", "Nỗi trăn trở thân phận nữ sĩ và khát vọng đối thoại tri âm bình đẳng trước trăng sao.", "Chuyển hóa nhịp điệu câu hỏi tu từ tinh tế giữa Từ Tống và thơ Nôm/Hán Việt Nam.", "Chiều sâu nữ lưu Đông Á qua hai nền thi ca."),
        ("hv-v7-04", "Vương Bột (Đằng Vương Các Tự)", "Mạc Đĩnh Chi (Ngọc Tỉnh Liên Phú)", "落霞与孤鹜齐飞，秋水共长天一色。", "玉井莲花开十丈，洁白自守岂畏泥！", "Phú Hán Đường–Tống gặp gỡ với Phú Hán Đại Việt qua hình ảnh Hoa sen giếng ngọc giữ khí tiết thanh sạch.", "Đối ngẫu Biền ngẫu chặt chẽ tuyệt đối, được triều Nguyên tôn vinh Lưỡng Quốc Trạng Nguyên.", "Minh chứng bản lĩnh sứ thần và học thuật Đại Việt thế kỷ XIV."),
        ("hv-v7-05", "Thiệu Ung (An Lạc Ngâm)", "Nguyễn Bỉnh Khiêm (Bạch Vân Am Thi Tập)", "梧桐月向怀中照，杨柳风来面上吹。", "竹篱茅舍静看云，一盏清茶傲王侯。", "Lấy thiên nhiên mộc mạc làm điểm tựa triết lý nhàn dật và quan sát lẽ tuần hoàn thịnh suy.", "Biến âm thanh gió trúc mây trắng Hải Phòng thành cảnh giới Bạch Vân Cư Sĩ.", "Tư tưởng Dịch học và triết lý sống an nhiên Việt Nam thế kỷ XVI."),
        ("hv-v7-06", "Châu Đôn Di (Ái Liên Thuyết)", "Chu Văn An (Linh Sơn Tạp Hứng)", "予独爱莲之出淤泥而不染，濯清涟而不妖。", "林泉幽寂少人知，万卷诗书伴月明。", "Người thầy chuẩn mực Vạn Thế Sư Biểu lấy phong cảnh suối rừng Chí Linh làm tấm gương giữ phẩm hạnh thanh liêm.", "Ngôn ngữ hàm súc, mộc mạc mà uy nghiêm tựa nhân cách sư đạo.", "Sợi dây kính trọng bậc thầy vĩ đại trong văn hóa Đông Á."),
        ("hv-v7-07", "Vương Duy (Sơn Cư Thu Minh)", "Trần Nhân Tông (Cư Trần Lạc Đạo Phú)", "明月松间照，清泉石上流。", "居尘乐道且随缘，饥则餐兮困则眠。", "Từ tĩnh lặng sơn thủy Đường thi bước lên triết lý Thiền Trúc Lâm nhập thế giữa đời thường của Phật hoàng Đại Việt.", "Hài hòa thiền vị tự nhiên với tinh thần độc lập văn hóa thời Trần.", "Giao thoa văn hóa Phật giáo – Thi ca thế kỷ XIII."),
        ("hv-v7-08", "Bạch Cư Dị (Tân Nhạc Phủ)", "Nguyễn Đình Chiểu (Chữ Hán – Văn Tế / Thơ Chí Sĩ)", "文章合为时而著，歌诗合为事而作。", "载道文心照古今，忠义丹青永不磨。", "Cùng giương cao ngọn cờ văn học gắn bó sâu sắc với thời cuộc và nỗi đau của nhân dân.", "Lấy chữ Nhân – Nghĩa làm chuẩn mực cao nhất của ngòi bút nhà văn.", "Truyền thống văn dĩ tải đạo qua hai bờ sông Hồng – Trường Giang."),
        ("hv-v7-09", "Tô Thức (Xích Bích Hoài Cổ)", "Phạm Ngũ Lão (Thuật Hoài – Tỏ Lòng)", "大江东去，浪淘尽，千古风流人物。", "横槊江山恰几秋，三军貔虎气吞牛。", "Khí phách anh hùng sánh ngang trời đất trước dòng sông lịch sử cuồn cuộn.", "Chi tiết 'Múa giáo non sông' (Hoành sóc giang sơn) đậm khí thế Đông A bất khuất của Đại Việt.", "Hai bài ca tráng lệ về hào khí giữ nước và dựng nước."),
    ]
    tang_viet_9 = [
        {
            "id": tid,
            "tangPoet": tp,
            "vietPoet": vp,
            "tangLineZh": tl,
            "vietLineZh": vl,
            "comparisonVi": cmp_vi,
            "tonalAndImageryAnalysisVi": tone_vi,
            "historicalContextVi": ctx_vi,
        }
        for tid, tp, vp, tl, vl, cmp_vi, tone_vi, ctx_vi in tang_viet_9
    ]

    if ext.get("herbs12"):
        herbs_12 = merge_unique_by_key(herbs_12, ext["herbs12"], "id")[:12]
    if ext.get("microclimates6"):
        micro_6 = merge_unique_by_key(micro_6, ext["microclimates6"], "id")[:6]
    if ext.get("cosmoCases8"):
        cosmo_8 = merge_unique_by_key(cosmo_8, ext["cosmoCases8"], "id")[:8]
    if ext.get("novelGraphs2") and isinstance(ext["novelGraphs2"], list) and len(ext["novelGraphs2"]) == 2:
        novel_graphs_2 = merge_unique_by_key(novel_graphs_2, ext["novelGraphs2"], "id")[:2]
    if ext.get("poemPaintings12"):
        poem_12 = merge_unique_by_key(poem_12, ext["poemPaintings12"], "id")[:12]
    if ext.get("wenyanTokens16"):
        wenyan_16 = merge_unique_by_key(wenyan_16, ext["wenyanTokens16"], "id")[:16]
    if ext.get("hskPassages20"):
        hsk_20 = merge_unique_by_key(hsk_20, ext["hskPassages20"], "id")[:20]
    if ext.get("hskEssays16"):
        essays_16 = merge_unique_by_key(essays_16, ext["hskEssays16"], "id")[:16]
    if ext.get("tangVietPoems6"):
        tang_viet_9 = merge_unique_by_key(tang_viet_9, ext["tangVietPoems6"], "id")[:9]

    return sanitize_recursive({
        "epistemicDisclaimerVi": NON_CLINICAL_VI,
        "epistemicDisclaimerEn": NON_CLINICAL_EN,
        "herbs12": herbs_12,
        "microclimates6": micro_6,
        "cosmoCases8": cosmo_8,
        "novelGraphs2": novel_graphs_2,
        "poemPaintings12": poem_12,
        "wenyanTokens16": wenyan_16,
        "hskPassages20": hsk_20,
        "hskEssays16": essays_16,
        "tangVietPoems9": tang_viet_9,
    })
