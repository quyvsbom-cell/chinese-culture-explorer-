"""V7 Pack 3 Builder: 50 New Liushu (-> 150), 15 False Friends (-> 45), 15 SimpTrad (-> 65), 15 MW (-> 55), 14 Chengyu (-> 50)."""

from __future__ import annotations

from typing import Any

from .pack_utils import load_external_pack, merge_unique_by_key, sanitize_recursive


def build_pack3() -> dict[str, Any]:
    """Build enriched Pack 3 linguistic datasets with 0 overlap against V6."""
    ext = load_external_pack(3)

    # 50 non-overlapping cultural, artistic, geographic, and philosophical characters
    liushu_specs = [
        ("ls-v7-01", "山", "山", "shān", "Sơn", "núi non (Chữ tượng hình)", "Tượng hình", "山", "Hình ba đỉnh núi nhấp nhô trên đường chân trời", "Mountain peak ridge silhouette", "Núi non, sơn thủy", "Mountain, peak", ("山水", "shānshuǐ", "Tranh sơn thủy / phong cảnh núi sông", "Landscape painting"), ("名山", "míngshān", "Danh sơn thắng cảnh", "Renowned sacred mountain")),
        ("ls-v7-02", "水", "水", "shuǐ", "Thủy", "dòng nước chảy", "Tượng hình", "水", "Dòng suối uốn lượn cùng các gợn sóng hai bên bờ", "Flowing stream ripples", "Nước, sông ngòi", "Water, river", ("水利", "shuǐlì", "Công trình trị thủy & thủy lợi", "Hydraulic engineering"), ("水墨", "shuǐmò", "Tranh thủy mặc", "Ink-wash painting")),
        ("ls-v7-03", "木", "木", "mù", "Mộc", "cây cối, gỗ", "Tượng hình", "木", "Thân cây thẳng đứng, cành vươn lên và rễ bám đất", "Tree trunk, branches, and roots", "Cây gỗ, hành Mộc", "Wood, timber, tree", ("木雕", "mùdiāo", "Nghệ thuật điêu khắc gỗ", "Woodcarving craft"), ("楠木", "nánmù", "Gỗ Nam Mộc quý xây cung điện", "Phoebe zhennan royal timber")),
        ("ls-v7-04", "火", "火", "huǒ", "Hỏa", "ngọn lửa", "Tượng hình", "火", "Ngọn lửa bùng lên cùng tia lửa hai bên", "Rising flames and sparks", "Lửa, hành Hỏa, hỏa lò", "Fire, flame, kiln heat", ("火候", "huǒhòu", "Độ lửa nung gốm hoặc nấu ăn", "Kiln firing control / culinary heat"), ("薪火", "xīnhuǒ", "Truyền lửa văn hóa qua thế hệ", "Passing the torch of heritage")),
        ("ls-v7-05", "金", "金", "jīn", "Kim", "kim loại, vàng", "Hình thanh", "金", "Mái che mỏ quặng với hai thỏi kim loại dưới đất (土)", "Ore nuggets veiled inside earth", "Kim loại, đồng vàng", "Metal, gold, bronze", ("金石", "jīnshí", "Kim thạch học (chuông đỉnh & bia đá)", "Epigraphy of bronze and stone"), ("紫金", "zǐjīn", "Đồng tím hoặc sắc vàng tím hoàng gia", "Imperial bronze-gold")),
        ("ls-v7-06", "日", "日", "rì", "Nhật", "mặt trời, ngày", "Tượng hình", "日", "Vòng tròn mặt trời có điểm tụ giữa tâm", "Solar disc with central mark", "Mặt trời, ban ngày", "Sun, day", ("日晷", "rìguǐ", "Đồng hồ mặt trời cổ đại", "Ancient sundial"), ("旭日", "xùrì", "Mặt trời mọc rực rỡ", "Rising morning sun")),
        ("ls-v7-07", "月", "月", "yuè", "Nguyệt", "mặt trăng, tháng", "Tượng hình", "月", "Vầng trăng lưỡi liềm trên bầu trời đêm", "Crescent moon profile", "Mặt trăng, tháng", "Moon, month", ("月洞门", "yuèdòngmén", "Cổng tròn mặt trăng vườn Tô Châu", "Moon gate in Suzhou garden"), ("中秋月", "zhōngqiūyuè", "Trăng rằm Trung Thu", "Mid-Autumn full moon")),
        ("ls-v7-08", "星", "星", "xīng", "Tinh", "vì sao", "Hình thanh", "日", "Ba mặt trời nhỏ (晶) trên chữ Sinh (生) chỉ tinh tú", "Three celestial lights over birth", "Ngôi sao, thiên văn", "Star, celestial body", ("星宿", "xīngxiù", "28 chòm sao Nhị Thập Bát Tú", "28 Lunar Mansions"), ("星图", "xīngtú", "Bản đồ sao Đôn Hoàng", "Dunhuang astronomical star chart")),
        ("ls-v7-09", "云", "雲", "yún", "Vân", "đám mây", "Tượng hình", "二", "Hơi mây cuộn tròn bên dưới đường chân trời", "Swirling vapor under sky line", "Mây trời, vân họa tiết", "Cloud, scroll cloud motif", ("云雷纹", "yúnléiwén", "Hoa văn mây sấm trên đồ đồng Thương", "Cloud-and-thunder bronze motif"), ("祥云", "xiángyún", "Mây lành cát tường", "Auspicious cloud")),
        ("ls-v7-10", "雨", "雨", "yǔ", "Vũ", "cơn mưa", "Tượng hình", "雨", "Vòm trời với bốn giọt mưa rơi xuống mặt đất", "Sky vault releasing raindrops", "Mưa, tiết khí mưa", "Rain, seasonal moisture", ("谷雨", "gǔyǔ", "Tiết Cốc Vũ hái trà xanh xuân", "Grain Rain spring tea harvest"), ("风雨桥", "fēngyǔqiáo", "Cầu Mưa Gió cổ vùng Quế Lâm", "Covered Wind-and-Rain bridge")),
        ("ls-v7-11", "风", "風", "fēng", "Phong", "ngọn gió, phong cách", "Hình thanh", "风", "Cánh buồm đón luồng khí lưu động", "Sail billowing in moving air", "Gió, phong thái", "Wind, cultural ethos", ("风雅", "fēngyǎ", "Tao nhã theo tinh thần Kinh Thi", "Refined poetic taste"), ("国风", "guófēng", "Quốc Phong – dân ca chư quốc", "Airs of the States (Classic of Poetry)")),
        ("ls-v7-12", "竹", "竹", "zhú", "Trúc", "cây tre trúc", "Tượng hình", "竹", "Hai cành lá trúc rủ thanh thoát song song", "Paired drooping bamboo leaves", "Tre trúc, thẻ tre", "Bamboo, bamboo slip", ("竹简", "zhújiǎn", "Thẻ tre viết sách thời Tần–Hán", "Inscribed bamboo writing slips"), ("胸有成竹", "xiōngyǒuchéngzhú", "Cây trúc dựng sẵn trong lòng", "Well-prepared mental blueprint")),
        ("ls-v7-13", "石", "石", "shí", "Thạch", "tảng đá, ngọc thô", "Tượng hình", "石", "Khối đá tròn nằm dưới vách núi dựng", "Boulder resting below cliff overhang", "Đá, bia đá", "Stone, rock, mineral", ("石青", "shíqīng", "Sắc tố khoáng Azurite", "Mineral azurite pigment"), ("太湖石", "tàihúshí", "Đá Thái Hồ lâm viên", "Perforated Lake Tai garden stone")),
        ("ls-v7-14", "泉", "泉", "quán", "Tuyền", "dòng suối ngầm", "Hội ý", "水", "Dòng nước trắng (白) tuôn ra từ lòng đất", "Clear white spring water surfacing", "Suối nguồn, tiền đồng cổ", "Spring water, ancient coin", ("温泉", "wēnquán", "Suối khoáng nóng", "Thermal hot spring"), ("泉州", "Quánzhōu", "Cảng Tuyền Châu trên Con đường Tơ lụa biển", "Quanzhou maritime port")),
        ("ls-v7-15", "川", "川", "chuān", "Xuyên", "dòng sông lớn", "Tượng hình", "川", "Ba dòng chảy song song đổ ra đồng bằng", "Three parallel river currents", "Sông lớn, vùng đồng bằng", "River valley, plain", ("四川", "Sìchuān", "Vùng Tứ Xuyên bốn dòng sông", "Sichuan Basin"), ("百川", "bǎichuān", "Trăm dòng sông đổ về biển", "All rivers converging to sea")),
        ("ls-v7-16", "海", "海", "hǎi", "Hải", "biển khơi", "Hình thanh", "氵", "Nước (氵) tụ hội từ muôn phương như mẹ (每)", "Vast water basin nurturing streams", "Biển lớn, hải ngoại", "Sea, maritime horizon", ("海上丝路", "hǎishàng sīlù", "Con đường Tơ lụa trên biển", "Maritime Silk Road"), ("海派", "hǎipài", "Phong cách mỹ thuật Thượng Hải", "Shanghai modernist school")),
        ("ls-v7-17", "礼", "禮", "lǐ", "Lễ", "lễ nghi, lễ vật", "Hội ý", "礻", "Tế đàn (礻) cùng bình ngọc cúng tổ tiên (豊)", "Altar + ritual jade-topped vessel", "Lễ chế, văn hóa ứng xử", "Ritual propriety, etiquette", ("礼器", "lǐqì", "Đồ đồng/ngọc dùng trong tế lễ", "Ritual bronze/jade vessel"), ("礼仪", "lǐyí", "Nghi thức giao tế văn minh", "Ceremonial etiquette")),
        ("ls-v7-18", "乐", "樂", "yuè", "Nhạc / Lạc", "âm nhạc, niềm vui", "Tượng hình", "木", "Trống gỗ (木) căng dây tơ gảy âm thanh", "Silk strings stretched across wooden drum", "Âm nhạc (Nhạc), vui vẻ (Lạc)", "Music; joy, harmony", ("礼乐", "lǐyuè", "Chế độ Lễ Nhạc nhà Chu", "Zhou ritual and musical order"), ("雅乐", "yǎyuè", "Nhã nhạc cung đình", "Court ceremonial music")),
        ("ls-v7-19", "书", "書", "shū", "Thư", "viết chữ, sách vở", "Hội ý", "乙", "Tay cầm bút lông viết xuống giấy", "Hand guiding brush strokes", "Thư pháp, sách sử", "Calligraphy, book, treatise", ("书法", "shūfǎ", "Nghệ thuật Thư pháp Hán tự", "Art of brushwork calligraphy"), ("古书", "gǔshū", "Sách cổ chép tay & khắc ván", "Classical bound books")),
        ("ls-v7-20", "琴", "琴", "qín", "Cầm", "đàn Cổ Cầm", "Hình thanh", "王", "Hai khối ngọc rung (王王) trên thanh âm (今)", "Resonant strings & twin jade bridges", "Đàn Thất Huyền Cổ Cầm", "7-string Guqin zither", ("琴棋书画", "qín qí shū huà", "Tứ nghệ văn nhân: Cầm–Kỳ–Thư–Họa", "Four scholarly arts"), ("古琴", "gǔqín", "Đàn Cổ Cầm di sản UNESCO", "UNESCO Guqin zither")),
        ("ls-v7-21", "棋", "棋", "qí", "Kỳ", "cờ vây", "Hình thanh", "木", "Bàn gỗ (木) chia ô đặt quân", "Wooden grid game board", "Cờ vây Vi Kỳ, cờ tướng", "Weiqi (Go) board game", ("围棋", "wéiqí", "Cờ vây chiến lược âm dương", "Go strategy board game"), ("象棋", "xiàngqí", "Cờ Tướng Đông Á", "Chinese Chess")),
        ("ls-v7-22", "画", "畫", "huà", "Họa", "bức tranh", "Hội ý", "田", "Tay cầm bút (聿) chia ranh giới ruộng đồng (田)", "Brush outlining framed boundaries", "Tranh vẽ, hội họa", "Painting, scroll composition", ("国画", "guóhuà", "Quốc họa thủy mặc & công bút", "Traditional Chinese ink painting"), ("画卷", "huàjuàn", "Cuộn tranh trường quyển", "Handscroll painting")),
        ("ls-v7-23", "墨", "墨", "mò", "Mặc", "mực tàu", "Hội ý", "土", "Muội khói đen (黑) trộn đất keo nặn thành thỏi (土)", "Black soot bound in earthen brick", "Mực tùng yên, văn chương", "Inkstick, ink wash", ("徽墨", "huīmò", "Mực cổ Huy Châu Hồ Khai Văn", "Huizhou artisan inkstick"), ("文房四宝", "wénfáng sìbǎo", "Văn phòng Tứ bảo: Bút–Mực–Giấy–Nghiên", "Four Treasures of the Study")),
        ("ls-v7-24", "笔", "筆", "bǐ", "Bút", "bút lông", "Hội ý", "竹", "Thân trúc (竹) kẹp chùm lông thú (毛)", "Bamboo shaft holding animal hair", "Bút lông thư pháp", "Calligraphy brush", ("湖笔", "húbǐ", "Hồ Bút vùng Hồ Châu Chiết Giang", "Huzhou master brush"), ("工笔", "gōngbǐ", "Bút pháp vẽ tỉ mỉ công bút", "Fine-line gongbi brushwork")),
        ("ls-v7-25", "砚", "硯", "yàn", "Nghiên", "nghiên mài mực", "Hình thanh", "石", "Phiến đá (石) phẳng mịn (见) để mài thỏi mực", "Fine stone slab for grinding ink", "Nghiên mực Đoan Khê", "Inkstone", ("端砚", "duānyàn", "Nghiên đá Tím Đoan Khê Triệu Khánh", "Zhaoqing Duan inkstone"), ("砚台", "yàntai", "Khối nghiên đá đặt bàn thư pháp", "Desktop stone inkwell")),
        ("ls-v7-26", "印", "印", "yìn", "Ấn", "ấn triện, in ấn", "Hội ý", "卩", "Bàn tay (爫) ấn con dấu (卩) lên thẻ đất sét", "Hand pressing seal onto clay", "Con dấu, kỹ thuật in khắc gỗ", "Seal stamp, woodblock print", ("印章", "yìnzhāng", "Ấn triện Chu Văn / Bạch Văn", "Red scholar seal stamp"), ("活字印刷", "huózì yìnshuā", "In chữ rời Tất Thăng", "Movable-type printing")),
        ("ls-v7-27", "剑", "劍", "jiàn", "Kiếm", "bảo kiếm hai lưỡi", "Hình thanh", "刂", "Chuôi gươm (佥) ghép lưỡi dao (刂)", "Symmetrical hilt + double blade", "Kiếm rèn thép gấp", "Double-edged scholar sword", ("宝剑", "bǎojiàn", "Kiếm báu Long Tuyền", "Longquan forged sword"), ("铸剑", "zhùjiàn", "Rèn đúc bảo kiếm", "Blade metallurgy")),
        ("ls-v7-28", "钟", "鐘", "zhōng", "Chung", "chuông đồng cổ", "Hình thanh", "钅", "Kim loại (金) đúc quả chuông ngân vang (童)", "Cast bronze chime resonator", "Chuông biên chung, đồng hồ", "Bronze chime bell, clock", ("编钟", "biānzhōng", "Bộ Biên Chung Tăng Hầu Ất", "Zeng Houyi bell chime set"), ("洪钟", "hóngzhōng", "Tiếng chuông lớn vang xa", "Resonant temple bell")),
        ("ls-v7-29", "鼓", "鼓", "gǔ", "Cổ", "cái trống", "Tượng hình", "鼓", "Bầu trống đặt trên bệ và tay cầm dùi đánh (支)", "Pedestal drum + hand striking beater", "Trống đồng, trống hội", "Drum, ceremonial percussion", ("铜鼓", "tónggǔ", "Trống đồng Ngọc Lũ / Đông Á", "Bronze ceremonial drum"), ("鼓乐", "gǔyuè", "Nhạc trống nghi lễ", "Percussion ensemble")),
        ("ls-v7-30", "茶", "茶", "chá", "Trà", "cây trà, văn hóa trà", "Hình thanh", "艹", "Thảo mộc (艹) mọc giữa người (人) và cây gỗ (木)", "Leaves plucked among mountain trees", "Lá trà, lục đại trà loại", "Tea leaf, tea culture", ("茶道", "chádào", "Trà đạo phương Đông", "Way of Tea"), ("茶马古道", "chámǎ gǔdào", "Trà Mã Cổ Đạo Tứ Xuyên – Tây Tạng", "Ancient Tea-Horse Road")),
        ("ls-v7-31", "瓷", "瓷", "cí", "Từ", "đồ gốm sứ", "Hình thanh", "瓦", "Bình gốm (次) nung từ đất ngói (瓦) lửa cao", "Vitrified stoneware body", "Sứ Thanh Hoa, sứ trắng", "High-fired porcelain", ("青花瓷", "qīnghuācí", "Sứ Thanh Hoa vẽ cô-ban", "Blue-and-white porcelain"), ("瓷都", "cídū", "Kinh đô Gốm Sứ Cảnh Đức Trấn", "Porcelain Capital Jingdezhen")),
        ("ls-v7-32", "绣", "繡", "xiù", "Tú", "nghệ thuật thêu", "Hình thanh", "纟", "Sợi chỉ tơ (纟) thêu hoa văn tinh xảo (秀)", "Refined silk thread needlework", "Thêu tay Tô Tú – Tương Tú", "Hand silk embroidery", ("苏绣", "sūxiù", "Tô Tú Giang Tô hai mặt", "Suzhou double-sided embroidery"), ("苗绣", "miáoxiù", "Nghệ thuật thêu Miêu Tương Tây", "Miao heritage embroidery")),
        ("ls-v7-33", "匠", "匠", "jiàng", "Tượng", "người thợ bậc thầy", "Hội ý", "匚", "Rìu thợ mộc (斤) cất trong hòm đồ nghề (匚)", "Axe housed inside carpenter chest", "Nghệ nhân, tinh thần thợ lành nghề", "Master artisan, craftsperson", ("匠心", "jiàngxīn", "Tâm huyết nghệ nhân tinh xảo", "Artisan craftsmanship spirit"), ("巨匠", "jùjiàng", "Bậc đại sư kiến trúc hội họa", "Grand master architect")),
        ("ls-v7-34", "窑", "窯", "yáo", "Diêu", "lò nung gốm sứ", "Hình thanh", "穴", "Hang lò khoét trong sườn đồi giữ lửa 1300°C", "Vaulted hillside firing chamber", "Lò gốm, danh diêu thời Tống", "Porcelain kiln", ("官窑", "guānyáo", "Quan Diêu lò quan ngự dụng", "Imperial official kiln"), ("窑变", "yáobiàn", "Men biến sắc trong lò Quân Diêu", "Natural kiln-transmutation glaze")),
        ("ls-v7-35", "亭", "亭", "tíng", "Đình", "nhà thủy tạ, đình dừng chân", "Hội ý", "亠", "Mái đình vươn cao trên sườn nghỉ mát của khách lữ hành", "Tiered shelter roof on timber post", "Đình ngắm cảnh lâm viên", "Garden pavilion / rest stop", ("沧浪亭", "cānglàngtíng", "Thương Lãng Đình Tô Châu", "Canglang Pavilion Suzhou"), ("凉亭", "liángtíng", "Đình hóng gió ven hồ", "Lakeside breezy pavilion")),
        ("ls-v7-36", "楼", "樓", "lóu", "Lâu", "lầu nhiều tầng", "Hình thanh", "木", "Công trình gỗ (木) chồng tầng đối xứng (娄)", "Multi-story timber tower", "Tòa lầu cổ, Hoàng Hạc Lâu", "Multi-tier heritage tower", ("黄鹤楼", "huánghèlóu", "Hoàng Hạc Lâu Vũ Hán", "Yellow Crane Tower"), ("土楼", "tǔlóu", "Thổ Lâu đất nện Phúc Kiến", "Fujian rammed-earth Tulou")),
        ("ls-v7-37", "阁", "閣", "gé", "Các", "gác tàng thư, Đằng Vương Các", "Hình thanh", "门", "Cửa gỗ lớn (门) có gác cao cất giữ thư tịch", "Elevated gatehouse & library pavilion", "Tàng thư các, Khuê Văn Các", "Imperial pavilion / library", ("文渊阁", "wényuāngé", "Văn Uyên Các tàng Tứ Khố Toàn Thư", "Wenyuan Imperial Library"), ("奎文阁", "kuíwéngé", "Khuê Văn Các Văn Miếu", "Pavilion of Constellation of Literature")),
        ("ls-v7-38", "桥", "橋", "qiáo", "Kiều", "cây cầu vòm", "Hình thanh", "木", "Nhịp gỗ cao vút bắc qua dòng sông (乔)", "Arched timber beam span", "Cầu gỗ, cầu đá cổ", "Arch bridge", ("虹桥", "hóngqiáo", "Cầu vòm Hồng Kiều Biện Kinh", "Song woven-timber Rainbow Bridge"), ("赵州桥", "zhàozhōuqiáo", "Cầu đá vòm hở Triệu Châu 605 SCN", "Open-spandrel Zhaozhou Bridge")),
        ("ls-v7-39", "驿", "驛", "yì", "Dịch", "trạm dịch truyền tin", "Hình thanh", "马", "Ngựa trạm (马) chuyển công văn hỏa tốc trên tuyến dịch lộ", "Relay courier horse station", "Trạm dịch cổ, ga dừng", "Ancient courier relay post", ("驿站", "yìzhàn", "Trạm dịch chuyển tin Con đường Tơ lụa", "Silk Road relay post"), ("古驿道", "gǔyìdào", "Tuyến đường dịch cổ đại", "Ancient stone courier highway")),
        ("ls-v7-40", "道", "道", "dào", "Đạo", "con đường, quy luật tự nhiên", "Hình thanh", "辶", "Cái đầu dẫn bước chân đi trên con đường (辶)", "Mind guiding feet along the way", "Đạo tự nhiên, đạo lý, đường sá", "The Way, cosmos principle, road", ("道德经", "dàodéjīng", "Đạo Đức Kinh Lão Tử", "Dao De Jing by Laozi"), ("茶道", "chádào", "Nghệ thuật thưởng trà", "Way of Tea")),
        ("ls-v7-41", "法", "法", "fǎ", "Pháp", "phép tắc, quy chuẩn, pháp luật", "Hội ý", "氵", "Công bằng phẳng lặng như mặt nước (氵) loại bỏ điều bất chính", "Water-level impartiality of law", "Phép tắc, phương pháp, bút pháp", "Law, method, brushwork canon", ("笔法", "bǐfǎ", "Bút pháp vận bút thư họa", "Brushstroke method"), ("商法", "shāngfǎ", "Luật thương mại & trọng tài", "Commercial arbitration law")),
        ("ls-v7-42", "仁", "仁", "rén", "Nhân", "lòng nhân ái giữa người với người", "Hội ý", "亻", "Người (亻) đứng cạnh hai gạch (二) biểu thị tương tác gắn kết", "Two persons in reciprocal empathy", "Nhân ái, đạo Nho cốt lõi", "Benevolence, humaneness", ("仁义", "rényì", "Nhân nghĩa làm người", "Benevolence and righteousness"), ("同舟共济", "tóngzhōugòngjì", "Tương trợ vượt khó", "Mutual solidarity")),
        ("ls-v7-43", "义", "義", "yì", "Nghĩa", "chính nghĩa, điều hợp lẽ", "Hội ý", "丶", "Đề cao vẻ đẹp lương thiện làm chuẩn mực ứng xử", "Elevated moral rectitude", "Chính nghĩa, nghĩa khí", "Righteousness, fidelity, duty", ("义理", "yìlǐ", "Lẽ phải học thuật Tống Nho", "Moral & textual philosophy"), ("名义", "míngyì", "Danh nghĩa pháp lý", "Official designation")),
        ("ls-v7-44", "智", "智", "zhì", "Trí", "trí tuệ sáng suốt", "Hình thanh", "日", "Lời nói chính xác nhanh như mũi tên (知) sáng tỏ như mặt trời (日)", "Arrow-sharp insight sunlit clear", "Trí tuệ, minh triết", "Wisdom, discernment", ("智慧", "zhìhuì", "Trí tuệ tích lũy văn hiến", "Accumulated cultural wisdom"), ("智能", "zhìnéng", "Công nghệ thông minh", "Artificial & smart systems")),
        ("ls-v7-45", "德", "德", "dé", "Đức", "đạo đức, phẩm hạnh đi thẳng", "Hội ý", "彳", "Bước đi (彳) nhìn thẳng (直) với tấm lòng ngay thẳng (心)", "Walking uprightly with unified heart", "Đức độ, văn minh", "Virtue, moral integrity", ("师德", "shīdé", "Đạo đức người thầy", "Educator integrity"), ("厚德载物", "hòudézàiwù", "Đức dày nâng đỡ muôn vật (Kinh Dịch)", "Deep virtue sustains all things")),
        ("ls-v7-46", "韵", "韻", "yùn", "Vận", "âm điệu, thần thái hài hòa", "Hình thanh", "音", "Âm thanh (音) lan tỏa cân xứng hài hòa (匀)", "Balanced acoustic resonance", "Vần điệu thơ Đường, thần vận bức tranh", "Rhyme, aesthetic resonance", ("气韵生动", "qìyùn shēngdòng", "Khí vận sinh động (Lục Pháp Tạ Hách)", "Spirit resonance in painting"), ("声韵学", "shēngyùnxué", "Âm vận học Trung–Việt", "Historical Chinese-Viet phonology")),
        ("ls-v7-47", "雅", "雅", "yǎ", "Nhã", "thanh nhã, chuẩn mực", "Hình thanh", "隹", "Chim nhã cao quý tượng trưng phong thái tao nhã kinh kỳ", "Graceful court refinement", "Thanh nhã, tao nhã", "Refined elegance, courtly grace", ("雅集", "yǎjí", "Cuộc hội ngộ văn nhân làm thơ (Lan Đình)", "Literati poetry gathering"), ("高雅", "gāoyǎ", "Sang trọng thanh tao", "Lofty elegance")),
        ("ls-v7-48", "和", "和", "hé", "Hòa", "hài hòa, hòa bình", "Hình thanh", "口", "Lúa gạo (禾) chia đều tới từng miệng ăn (口)", "Grain nourishing every mouth equally", "Hài hòa âm dương, hợp tác", "Harmony, peaceful balance", ("和而不同", "hé ér bùtóng", "Hòa hợp mà giữ bản sắc riêng", "Harmony without uniformity"), ("调和", "tiáohé", "Điều hòa ngũ vị ẩm thực", "Culinary flavor balancing")),
        ("ls-v7-49", "诚", "誠", "chéng", "Thành", "chân thành, giữ lời", "Hội ý", "讠", "Lời nói (讠) đi đôi với việc làm thành tựu (成)", "Words consummated into action", "Chân thành, chữ Tín thương mại", "Sincerity, contractual integrity", ("诚信", "chéngxìn", "Chữ Tín làm gốc thương hiệu B2B", "Good-faith integrity"), ("诚意", "chéngyì", "Thành ý hợp tác song phương", "Goodwill sincerity")),
        ("ls-v7-50", "船", "船", "chuán", "Thuyền", "con tàu vượt biển", "Hình thanh", "舟", "Thuyền gỗ (舟) vượt dòng nước thuận lợi", "Timber hull gliding river mouth", "Thuyền buồm viễn dương", "Ocean vessel, ship", ("宝船", "bǎochuán", "Thuyền báu Trịnh Hòa 9 cột buồm", "Zheng He Ming Treasure Ship"), ("船期", "chuánqī", "Lịch tàu vận tải biển B2B", "Ocean freight sailing schedule")),
    ]

    liushu_50 = [
        {
            "id": lid,
            "zh": zh,
            "trad": trad,
            "pinyin": py,
            "hanViet": hv,
            "hanVietOldVi": old_vi,
            "liushuType": ltype,
            "radical": rad,
            "semanticPart": rad,
            "phoneticPart": zh,
            "evolution4Stages": {
                "oracleBone": f"Giáp Cốt văn: {ev_vi}",
                "bronzeScript": f"Kim văn Chu triều nét cân xứng đúc trên đỉnh đồng",
                "smallSeal": "Tiểu Triện thời Tần Lý Tư chuẩn hóa đường nét uốn lượn",
                "regularScript": f"Khải thư định hình nét vuông chữ '{zh}' hiện đại",
            },
            "svgMorphDesc": f"{ev_en} ({ev_vi})",
            "meaningVi": mvi,
            "meaningEn": men,
            "b2bCompounds": [
                {"zh": c1[0], "py": c1[1], "vi": c1[2], "en": c1[3]},
                {"zh": c2[0], "py": c2[1], "vi": c2[2], "en": c2[3]},
            ],
            "evolution4StagesText": f"{ev_vi} -> Kim văn -> Tiểu Triện -> Khải thư '{zh}'",
            "meaningShort": mvi,
            "b2bSample": f"{c1[0]} ({c1[1]}): {c1[2]}",
            "culturalMnemonicVi": f"Ghi nhớ chữ {zh} ({hv}) qua {ltype}: {ev_vi}.",
        }
        for lid, zh, trad, py, hv, old_vi, ltype, rad, ev_vi, ev_en, mvi, men, c1, c2 in liushu_specs
    ]

    ff_specs = [
        ("ff-v7-01", "老实", "lǎoshí", "Lão thật = ngây ngô dại khờ (tiêu cực nhẹ)", "Lão thật", "Tưởng khen thật thà đáng tin", "Nghĩa chính trong tiếng Trung hiện đại: chất phác hiền lành (khen), hoặc không lanh lợi (ngữ cảnh).", "Modern Chinese: honest, well-behaved, down-to-earth.", "他为人很老实，做事很可靠。", "Tā wéirén hěn lǎoshí, zuòshì hěn kěkào.", "Anh ấy tính tình rất chất phác, làm việc đáng tin.", "Trong thương lượng, tránh dịch là 'khờ khạo'; nghĩa chuẩn là trung thực đáng tin."),
        ("ff-v7-02", "心事", "xīnshì", "Tâm sự = trút bầu tâm sự trò chuyện", "Tâm sự (v)", "Tưởng là hành động ngồi tâm sự chia sẻ", "Danh từ chỉ nỗi lo âu, điều bận tâm giấu kín trong lòng (chưa nói ra).", "Noun: hidden worry or unspoken burden on one's mind.", "他最近好像有心事。", "Tā zuìjìn hǎoxiàng yǒu xīnshì.", "Gần đây anh ấy dường như đang có điều lo âu thầm kín.", "Muốn nói 'trò chuyện tâm sự' dùng 聊天 (liáotiān) hoặc 谈心 (tánxīn)."),
        ("ff-v7-03", "代表", "dàibiǎo", "Đại biểu = đại biểu Quốc hội", "Đại biểu", "Chỉ hiểu theo nghĩa nghị sĩ chính trị", "Người thay mặt công ty/cá nhân, hoặc động từ 'tượng trưng cho, đại diện cho'.", "Representative, corporate delegate, or verb 'to symbolize / represent'.", "龙舟代表团结与拼搏精神。", "Lóngzhōu dàibiǎo tuánjié yǔ pīnbó jīngshén.", "Thuyền rồng tượng trưng cho tinh thần đoàn kết và nỗ lực.", "Trong hợp đồng: 法人代表 = Người đại diện theo pháp luật (không phải nghị sĩ)."),
        ("ff-v7-04", "好事", "hǎoshì", "Hảo sự = hám chuyện hoặc dễ dãi", "Hảo sự", "Tưởng luôn là 'tính hiếu kỳ tò mò'", "Thanh 3 (hǎoshì) = việc tốt lành; đổi thanh 4 (hàoshì) mới có nghĩa là thích xen chuyện người khác.", "Tone-sensitive: hǎoshì = good deed / happy event; hàoshì = meddlesome.", "合作为双方带来很多好事。", "Hézuò wèi shuāngfāng dàilái hěn duō hǎoshì.", "Hợp tác mang lại nhiều điều tốt đẹp cho cả hai bên.", "Chú ý phân biệt thanh điệu khi nói trước đối tác để không gây hiểu nhầm."),
        ("ff-v7-05", "故人", "gùrén", "Cố nhân = người quá cố đã mất", "Cố nhân", "Tưởng nói về người đã mất", "Bạn cũ thân thiết năm xưa (còn sống) — ví dụ 'Cố nhân tây từ Hoàng Hạc Lâu'.", "Old friend, cherished former companion (usually living).", "故人西辞黄鹤楼。", "Gùrén xī cí Huánghèlóu.", "Bạn cũ từ giã lầu Hoàng Hạc xuôi về phương Tây.", "Đọc thơ Đường hay gặp ở đối tác trọng tình cũ, không mang nghĩa tang lễ."),
        ("ff-v7-06", "文明", "wénmíng", "Văn minh = hiện đại xa hoa", "Văn minh", "Chỉ dùng cho thời đại kỹ thuật cao", "Ngoài nghĩa nền văn minh còn dùng hàng ngày nghĩa là 'lịch sự, có văn hóa nơi công cộng'.", "Both macro civilization AND everyday polite civic etiquette.", "请大家文明参观博物馆。", "Qǐng dàjiā wénmíng cānguān bówùguǎn.", "Xin quý khách giữ lịch sự văn minh khi tham quan bảo tàng.", "Biển chỉ dẫn Cố Cung, ga tàu hay dùng chữ này cho phép tắc ứng xử."),
        ("ff-v7-07", "平凡", "píngfán", "Bình phàm = tầm thường yếu kém", "Bình phàm", "Nghĩa chê bai người tầm thường", "Giản dị đời thường nhưng đáng trân trọng (thường khen người âm thầm cống hiến).", "Ordinary yet noble, unpretentious everyday dignity.", "在平凡的岗位上做出不平凡的贡献。", "Zài píngfán de gǎngwèi shàng zuòchū bù píngfán de gòngxiàn.", "Tạo cống hiến phi thường trên cương vị giản dị.", "Chê 'tầm thường tẻ nhạt' dùng 平庸 (píngyōng), không dùng 平凡."),
        ("ff-v7-08", "道理", "dàolǐ", "Đạo lý = lên mặt dạy đời", "Đạo lý", "Nghe nặng nề giáo điều", "Lẽ phải hợp lý, nguyên lý logic hàng ngày ('Có lý!' = 有道理).", "Sound reasoning, practical sense ('That makes sense').", "你说的非常有道理。", "Nǐ shuō de fēicháng yǒu dàolǐ.", "Điều bạn phân tích hết sức có lý.", "Trong họp dự án khen đồng nghiệp '很有道理' là cách tán thành rất tự nhiên."),
        ("ff-v7-09", "人品", "rénpǐn", "Nhân phẩm = danh dự nặng nề", "Nhân phẩm", "Chỉ dùng trong tòa án hay luân lý", "Phẩm chất con người, ngoài ra giới trẻ còn đùa là 'vận may đỏ đen'.", "Moral character; colloquially 'good luck streak'.", "他的人品在行业里有口皆碑。", "Tā de rénpǐn zài hángyè lǐ yǒukǒujiēbēi.", "Uy tín nhân cách của ông ấy được cả ngành ghi nhận.", "Từ chốt chọn đối tác gia công dài hạn."),
        ("ff-v7-10", "名节", "míngjié", "Danh tiết = chỉ gắn phụ nữ xưa", "Danh tiết", "Thu hẹp vào lễ giáo cổ hủ", "Thanh danh và khí tiết liêm chính của học giả, thương nhân trước cám dỗ.", "Public honor and personal integrity under pressure.", "文天祥一生重名节。", "Wén Tiānxiáng yīshēng zhòng míngjié.", "Văn Thiên Tường suốt đời trọng danh dự và khí tiết.", "Đọc sử học Tống–Minh và Đại Việt đều giữ nguyên nghĩa trang trọng."),
        ("ff-v7-11", "风韵", "fēngyùn", "Phong vận = chỉ người đã đứng tuổi", "Phong vận", "Tưởng nói phong thái hào hoa nói chung", "Nét duyên dáng thâm trầm (người trung niên/nhã nhạc) hoặc thần thái thư họa.", "Poetic charm, mature grace, rhythmic aesthetic atmosphere.", "苏州园林保留了宋代风韵。", "Sūzhōu yuánlín bǎoliú le Sòngdài fēngyùn.", "Vườn Tô Châu lưu giữ trọn nét tao nhã thời Tống.", "Rất hợp dùng khen kiến trúc di sản và gốm sứ cổ điển."),
        ("ff-v7-12", "表扬", "biǎoyáng", "Biểu dương = trao huân chương quốc gia", "Biểu dương", "Chỉ dùng trong buổi lễ lớn", "Lời khen bình thường của giáo viên cho học sinh hoặc sếp khen nhân viên hoàn thành tốt.", "Everyday praise or commendation at school or work.", "老师表扬了她的发音进步。", "Lǎoshī biǎoyáng le tā de fāyīn jìnbù.", "Cô giáo khen ngợi tiến bộ phát âm của bạn ấy.", "Không cần lễ nghi trang trọng mới dùng từ này."),
        ("ff-v7-13", "客观", "kèguān", "Khách quan = khách mời tham quan", "Khách quan", "Tách thành 'Khách' + 'Xem'", "Tính khách quan khoa học dựa trên sự thật (trái ngược Chủ quan 主观).", "Objective reality / impartial viewpoint.", "请用客观数据评估供货周期。", "Qǐng yòng kèguān shùjù pínggū gōnghuò zhōuqī.", "Vui lòng dùng số liệu khách quan đánh giá tiến độ giao hàng.", "Chữ 'Khách tham quan' phải nói là 参观者."),
        ("ff-v7-14", "本领", "běnlǐng", "Bản lĩnh = gan dạ dũng cảm", "Bản lĩnh", "Nghĩa tiếng Việt thiên về gan góc tinh thần", "Năng lực thực chiến, tay nghề thành thạo (tiếng Hán nhấn vào kỹ năng thực).", "Competence, practical mastery, technical skill.", "他练就了一身鉴宝本领。", "Tā liànjiù le yī shēn jiànbǎo běnlǐng.", "Ông ấy rèn luyện được kỹ năng giám định cổ vật xuất sắc.", "Dùng '勇气' nếu muốn khen dũng khí, dùng '本领' để khen tay nghề."),
        ("ff-v7-15", "前途", "qiántú", "Tiền đồ = tương lai cá nhân rất hẹp", "Tiền đồ", "Hơi sáo rỗng khi nói chuyện thường", "Triển vọng phát triển nghề nghiệp hoặc tương lai thị trường ngành hàng.", "Career horizon or industry prospects.", "绿色新能源行业很有前途。", "Lǜsè xīn néngyuán hángyè hěn yǒu qiántú.", "Ngành năng lượng sạch có triển vọng phát triển rất sáng.", "Dùng tự nhiên trong báo cáo phân tích thị trường B2B."),
    ]
    ff_15 = [
        {
            "id": fid,
            "zh": zh,
            "pinyin": py,
            "hanVietTrap": hvt,
            "vietnameseWordContrast": vwc,
            "comicPanelA_MisreadVi": pA,
            "comicPanelB_RealMeaningVi": pBvi,
            "comicPanelB_RealMeaningEn": pBen,
            "safeUsageExampleZh": exzh,
            "safeUsageExampleVi": exvi,
            "panelAVietTrap": pA,
            "panelBTrueZh": pBvi,
            "meaningEn": pBen,
            "tipVi": tipvi,
            "b2bContractWarningVi": tipvi,
            "safeUsagePinyin": expx,
        }
        for fid, zh, py, hvt, vwc, pA, pBvi, pBen, exzh, expx, exvi, tipvi in ff_specs
    ]

    st_specs = [
        ("st-v7-01", "采", ["采", "採"], "Phồn thể chia rõ: '采' (thần thái rực rỡ, màu sắc — 神采) và '採' (hái trà, thu thập, áp dụng — 採茶/採用).", "Traditional separates '采' (radiance/hue) from '採' (to pluck/harvest/adopt).", "Chữ 采 gốc là tay hái quả trên cây; sau thêm bộ Thủ 扌 riêng cho hành động thu hái.", "Hộp trà Đài Loan viết '手採' (hái tay) hoàn toàn chuẩn; không viết nhầm sang 神採.", [{"zh": "神采奕奕", "py": "shéncǎi yìyì", "vi": "Thần thái rạng ngời (cùng chữ 采)", "en": "Radiant spirit"}]),
        ("st-v7-02", "才", ["才", "纔"], "Giản thể gộp chữ phó từ 'mới/vừa' (纔) vào chung '才' (tài năng).", "Simplified merges adverbial '纔' (just/then) into '才' (talent).", "Chữ 纔 vốn thuộc bộ Mịch 糸 mang nghĩa vạt lụa mờ dần rồi chuyển nghĩa thời gian.", "Sách cổ Đài Loan/Hồng Kông in '方纔' tương đương '刚才' hiện đại.", [{"zh": "才华横溢", "py": "cáihuá héngyì", "vi": "Tài hoa xuất chúng (luôn dùng 才)", "en": "Overflowing literary talent"}]),
        ("st-v7-03", "尽", ["盡", "儘"], "Phồn thể tách: '盡' (hết sạch, tận cùng — 盡力) và '儘' (hết mức có thể — 儘管/儘量).", "Traditional splits '盡' (exhaust/utmost) from '儘' (as much as possible).", "Tài liệu hợp đồng Hồng Kông giữ nguyên 儘量 để diễn tả 'tối đa trong khả năng'.", "Biển hiệu '盡頭' = cuối ngõ; '儘快' = nhanh nhất có thể.", [{"zh": "竭尽全力", "py": "jiéjìn quánlì", "vi": "Dốc hết sức lực (盡)", "en": "Exert utmost effort"}]),
        ("st-v7-04", "脏", ["臟", "髒"], "Giản thể dùng một chữ '脏' (zāng/zàng) cho cả 'Nội tạng' (臟) lẫn 'Bẩn thỉu' (髒).", "Simplified merges visceral '臟' (zàng) and soiled '髒' (zāng) into '脏'.", "Nhìn bộ Nhục 月 ghép chữ 莊 cho nội tạng; chữ 髒 ghép chữ Xương Xương.", "Đừng bao giờ đọc nhầm chữ 臟 ở thực phẩm thành chữ 髒 bẩn trên thực đơn!", [{"zh": "五脏六腑", "py": "wǔzàng liùfǔ", "vi": "Ngũ tạng lục phủ (phải viết 臟 ở Phồn thể)", "en": "Internal organs motif"}]),
        ("st-v7-05", "坛", ["壇", "罈"], "Phồn thể tách: '壇' (Đàn tế Trời Đất — 天壇) và '罈' (Chum vại gốm đựng rượu/dưa — 酒罈).", "Traditional splits sacrificial '壇' (altar/forum) from earthen '罈' (ceramic jar).", "Thiên Đàn dùng bộ Thổ 土 xây bệ; vò rượu Thiệu Hưng dùng bộ Phẫu 缶 đồ gốm.", "Rượu Lão Tửu đóng chum ghi '老酒罈' mới đúng chuẩn truyền thống.", [{"zh": "天坛祈年殿", "py": "Tiāntán Qíniándiàn", "vi": "Kỳ Niên Điện Thiên Đàn (壇)", "en": "Altar of Heaven"}]),
        ("st-v7-06", "适", ["適", "适"], "Phồn thể bảo lưu '适' là tên cổ (Kuò — Khổng Tử đệ tử Nam Cung Quát) tách biệt hẳn '適' (thích hợp).", "Traditional preserves ancient name '适' (Kuò) separate from '適' (suitable).", "Học giả Hồ Thích (胡適) nếu chuyển sang 适 sẽ bị đọc sai thành Hồ Quát!", "Kiểm tra tên riêng học giả cổ văn khi dùng phần mềm chuyển đổi Giản–Phồn tự động.", [{"zh": "恰到好处 / 舒适", "py": "shūshì", "vi": "Thoải mái vừa vặn (適)", "en": "Comfortable & apt"}]),
        ("st-v7-07", "苏", ["蘇", "甦"], "Phồn thể tách: '蘇' (Tô Châu, tía tô — 蘇州) và '甦' (tỉnh lại, phục hồi — 復甦).", "Traditional splits '蘇' (Suzhou / perilla) from '甦' (revive/awaken).", "Chữ 甦 ghép 更 + 生 (sống lại); chỉ địa danh Tô Châu giữ chữ thảo 艹.", "Trong tin kinh tế Đài Loan thường viết '景氣復甦' (kinh tế phục hồi).", [{"zh": "苏州园林", "py": "Sūzhōu yuánlín", "vi": "Vườn cổ Tô Châu (蘇)", "en": "Suzhou classical gardens"}]),
        ("st-v7-08", "郁", ["鬱", "郁"], "Giản thể gộp 'uất ức, rậm rạp' (鬱 29 nét!) vào cùng '郁' (hương thơm nồng — 濃郁).", "Simplified merges 29-stroke '鬱' (lush/melancholy) with '郁' (fragrant).", "Chữ 鬱 thuộc bộ Sưởng 鬯 (rượu nếp thơm tế lễ); chữ 郁 là tên nước cổ.", "Chủ nghĩa lãng mạn cổ điển viết '憂鬱', hương trà đậm viết '濃郁'.", [{"zh": "茶香浓郁", "py": "cháxiāng nóngyù", "vi": "Hương trà nồng đượm (郁)", "en": "Rich tea fragrance"}]),
        ("st-v7-09", "辟", ["闢", "辟"], "Phồn thể tách: '闢' (mở mang khai phá — 開闢) và '辟' (vua, hoặc tránh né — 避).", "Traditional separates '闢' (open up/pioneer) from '辟' (monarch/statute).", "Khai Tịch Hồng Hoang mở cửa đất trời dùng chữ có bộ Môn 門.", "Khai trương chi nhánh hoặc khai phá tuyến mới dùng 開闢.", [{"zh": "开辟丝路", "py": "kāipì sīlù", "vi": "Khai mở Con đường Tơ lụa (闢)", "en": "Pioneer the Silk Road"}]),
        ("st-v7-10", "御", ["禦", "御"], "Phồn thể tách: '御' (ngự giá hoàng gia, cầm lái xe — 御用) và '禦' (phòng thủ ngăn chặn — 防禦).", "Traditional divides imperial '御' (imperial / drive chariot) from '禦' (defend).", "Vạn Lý Trường Thành bảo vệ biên ải dùng chữ '禦' (bộ Thị 示).", "Gốm ngự dụng Cố Cung dùng '御窯' (chỉ riêng hoàng gia).", [{"zh": "御窑瓷器", "py": "yùyáo cíqì", "vi": "Gốm lò Ngự (御)", "en": "Imperial kiln ware"}]),
        ("st-v7-11", "获", ["獲", "穫"], "Phồn thể tách: '獲' (săn bắt, thu được kết quả — 獲得) và '穫' (gặt hái lúa mùa — 收穫).", "Traditional distinguishes '獲' (obtain/capture) from '穫' (reap grain harvest).", "Vụ gặt mùa thu gắn bộ Hòa 禾 (cây lúa) rất dễ nhận diện.", "Báo cáo nông nghiệp chính xác phải tách rõ 收穫 (thu hoạch mùa) và 獲得 (đạt chứng nhận).", [{"zh": "大获丰收", "py": "dàhuò fēngshōu", "vi": "Thu hoạch bội thu", "en": "Bumper harvest achieved"}]),
        ("st-v7-12", "淀", ["澱", "淀"], "Phồn thể tách: '澱' (tinh bột lắng cặn — 澱粉) và '淀' (đầm hồ nông vùng Hoa Bắc — 白洋淀).", "Traditional separates '澱' (starch/sediment) from '淀' (shallow lake).", "Từ bột sắn dây đến hồ Bạch Dương Điến đều được chuẩn hóa rõ.", "Nhãn thực phẩm Đài Loan viết 澱粉 (Tinh bột) thay vì 淀粉.", [{"zh": "天然淀粉", "py": "tiānrán diànfěn", "vi": "Tinh bột tự nhiên (澱)", "en": "Natural culinary starch"}]),
        ("st-v7-13", "饥", ["飢", "饑"], "Phồn thể tách: '飢' (đói bụng thường ngày) và '饑' (năm mất mùa đói kém — 饑荒).", "Traditional distinguishes everyday '飢' (hunger) from '饑' (crop famine).", "Chữ 饑 ghép từ bộ Thực 飠 và chữ Cơ 幾 (hiếm lúa).", "Đọc sử sách ghi dân sinh Tống–Minh phân biệt hai sắc thái này rõ ràng.", [{"zh": "饥不择食", "py": "jī bù zé shí", "vi": "Đói chẳng kén thức ăn", "en": "Hunger asks no refinements"}]),
        ("st-v7-14", "签", ["簽", "籤"], "Phồn thể tách: '簽' (ký tên hợp đồng — 簽字) và '籤' (thẻ tre, thẻ hành lý, tăm — 書籤/標籤).", "Traditional separates '簽' (sign contract) from '籤' (bamboo tag / label).", "Hợp đồng B2B: '簽合同' = ký tên; '貼標籤' = dán tem nhãn thùng carton!", "Tránh dùng phần mềm đổi nhầm giữa 'ký tên' và 'dán nhãn thùng hàng'.", [{"zh": "签订合同", "py": "qiāndìng hétong", "vi": "Ký kết hợp đồng (簽)", "en": "Sign formal contract"}]),
        ("st-v7-15", "汇", ["匯", "彙"], "Phồn thể tách: '匯' (chuyển tiền ngân hàng, hợp lưu — 匯款) và '彙' (tập hợp từ vựng — 詞彙).", "Traditional splits '匯' (remit funds/converge) from '彙' (compile lexicon/glossary).", "Lĩnh vực tài chính L/C dùng 匯 (chuyển khoản); ngôn ngữ dùng 彙 (từ vựng).", "Đây là cặp bẫy kinh điển khi soạn giáo trình Hán ngữ Thương mại song thể.", [{"zh": "汇款凭证", "py": "huìkuǎn píngzhèng", "vi": "Chứng từ chuyển tiền (匯)", "en": "Remittance receipt"}]),
    ]
    st_15 = [
        {
            "id": sid,
            "simp": simp,
            "trads": trads,
            "diffVi": dvi,
            "diffEn": den,
            "classicalEtymologyVi": ety,
            "taiwanHkSignageTrapVi": trap,
            "examplePairsZhVi": exs,
        }
        for sid, simp, trads, dvi, den, ety, trap, exs in st_specs
    ]

    mw_specs = [
        ("mw-v7-01", "盏", "zhǎn", "Trản", "Đèn lồng, chén trà nhỏ tinh tế", "Lamps, small handleless tea cups", "一盏清茶敬宾客。", "Một chén trà thanh kính đãi tân khách.", "Mặt đáy tròn nông ôm vừa lòng bàn tay.", "一盏茶杯 (bộ ấm chén quà tặng)"),
        ("mw-v7-02", "扇", "shàn", "Phiến", "Cánh cửa gỗ, bình phong gấp, chiếc quạt", "Wooden doors, folding screens, handheld fans", "两扇朱红宫门缓缓开启。", "Hai cánh cửa cung son đỏ Chu Sa từ từ mở ra.", "Mặt phẳng xoay bản lề đón hoặc chắn gió.", "一扇木门 / 一扇檀香折扇"),
        ("mw-v7-03", "帖", "tiè", "Thiếp", "Tập rập bia chữ cổ thư pháp nổi tiếng", "Calligraphy rubbings, bound model letters", "一帖《兰亭集序》神龙本。", "Một bộ bản rập Lan Đình Tập Tự bản Thần Long.", "Tập tờ rập khắc đá đóng quyển chữ mẫu.", "一帖碑拓 (bản rập bia cổ)"),
        ("mw-v7-04", "帧", "zhēn", "Trinh", "Bức tranh đóng khung, tấm ảnh, bức thêu", "Framed paintings, archival photographs, frames", "一帧精美双面苏绣。", "Một bức thêu Tô Tú hai mặt tinh xảo.", "Khung viền vuông vức định hình tác phẩm.", "一帧刺绣艺术品"),
        ("mw-v7-05", "阕", "què", "Khuyết", "Một khúc Từ Tống hoàn chỉnh (thượng/hạ khuyết)", "Stanza or complete Ci lyric poem", "苏轼一阕《水调歌头》。", "Một khúc Thủy Điệu Ca Đầu của Tô Thức.", "Nhịp ngắt nghỉ kết thúc một đoản khúc âm nhạc cổ.", "一阕宋词"),
        ("mw-v7-06", "匹", "pǐ", "Thất", "Cuộn lụa dài nguyên cây, ngựa chiến", "Bolts of woven silk, horses", "十匹杭州上等桑蚕丝绸。", "Mười cây lụa tơ tằm thượng hạng Hàng Châu.", "Đơn vị cuộn vải cổ định dài 4 trượng làm thuế.", "一匹绸缎 (đo cuộn vải xuất khẩu)"),
        ("mw-v7-07", "锭", "dìng", "Đĩnh", "Thỏi mực tàu, đĩnh bạc kim nguyên bảo", "Inksticks, silver sycee ingots", "一锭松烟御墨。", "Một thỏi mực Tùng Yên ngự dụng.", "Khối đúc hoặc nén cứng có hình dáng cố định.", "一锭徽墨"),
        ("mw-v7-08", "瓣", "bàn", "Biện", "Cánh hoa sen, múi quýt/tỏi", "Flower petals, citrus segments", "几瓣干桂花入茶清香。", "Vài cánh hoa quế khô ướp trà thơm ngát.", "Mảnh cong mỏng xếp vòng quanh nhụy.", "一瓣花瓣"),
        ("mw-v7-09", "弦", "xián", "Huyền", "Dây đàn Cổ Cầm, cây cung", "Guqin silk strings", "七弦古琴奏《高山流水》。", "Đàn Cổ Cầm bảy dây tấu khúc Cao Sơn Lưu Thủy.", "Sợi dây căng thẳng phát ra dao động thanh âm.", "一根丝弦 / 七弦"),
        ("mw-v7-10", "管", "guǎn", "Quản", "Bút lông thư pháp, ống sáo trúc tiêu", "Calligraphy brushes, bamboo flutes", "一管湖州紫毫毛笔。", "Một cây bút lông thỏ tím Hồ Châu.", "Vật hình ống rỗng trụ tròn cầm tay.", "一管湖笔"),
        ("mw-v7-11", "袭", "xí", "Tập", "Bộ lễ phục cổ trang Hán phục lộng lẫy", "Full layered ceremonial robes", "一袭明制云肩长裙。", "Một bộ trường bào vân kiên thời Minh.", "Bộ trang phục nhiều lớp trùm chỉnh tề.", "一袭传统华服"),
        ("mw-v7-12", "出", "chū", "Xuất", "Một vở kịch Côn Khúc hoặc Kinh Kịch", "An opera performance or play act", "一出生动昆曲《牡丹亭》。", "Một vở Côn Khúc Mẫu Đơn Đình sống động.", "Tiết mục dàn dựng trọn vẹn trên sân khấu.", "一出传统好戏"),
        ("mw-v7-13", "壶", "hú", "Hồ", "Ấm trà Tử Sa, bầu rượu cổ", "Teapots, wine flagons", "一壶陈年岩茶待故人。", "Một ấm Nham trà ủ lâu năm đón bạn cũ.", "Bình tròn có quai vòi chứa chất lỏng.", "一壶紫砂岩茶"),
        ("mw-v7-14", "碗", "wǎn", "Oản", "Bát sứ Thanh Hoa, bát mì kéo tay", "Porcelain bowls, hand-pulled noodles", "一碗正宗兰州牛肉面。", "Một bát mì bò Lan Châu chính tông.", "Vật chứa lòng sâu không quai dùng hàng ngày.", "一碗青花瓷碗"),
        ("mw-v7-15", "枝", "zhī", "Chi", "Nhành mai vẽ tranh thủy mặc, cành tùng", "Plum-blossom twigs in brush painting", "墨梅图上一枝寒梅凌霜。", "Một nhành hàn mai vượt sương trên tranh Mặc Mai.", "Nhánh mảnh vươn ra từ thân chính.", "一枝春梅"),
    ]
    mw_15 = [
        {
            "id": mid,
            "zh": zh,
            "pinyin": py,
            "hanViet": hv,
            "shapeVi": shv,
            "usageEn": uen,
            "exampleZh": exzh,
            "exampleVi": exvi,
            "cognitiveGeometryVi": cog,
            "b2bLogisticsCollocationsZhVi": b2b,
        }
        for mid, zh, py, hv, shv, uen, exzh, exvi, cog, b2b in mw_specs
    ]

    cy_specs = [
        ("cy-v7-01", "画龙点睛", "huà lóng diǎn jīng", "Họa Long Điểm Tinh", "Lịch Đại Danh Họa Ký (Trương Tăng Do)", ["Danh họa Trương Tăng Do vẽ bốn con rồng trên tường chùa ở Kim Lăng.", "Ông cố ý chừa trống mắt rồng vì sợ vẽ mắt rồng sẽ bay mất.", "Khi chấm bút vào mắt hai con rồng, sấm chớp nổ vang và rồng thật bay lên trời."], "Điểm nhấn quyết định nâng tầm toàn bộ bản thuyết trình hoặc sản phẩm.", "在产品发布会上用三组核心数据画龙点睛。", "Dùng ba nhóm số liệu cốt lõi làm điểm nhấn sáng rực cho buổi ra mắt."),
        ("cy-v7-02", "完璧归赵", "wán bì guī Zhào", "Hoàn Bích Quy Triệu", "Sử Ký – Liêm Pha Lạn Tương Như Liệt Truyện", ["Tần Chiêu Tương Vương muốn đổi 15 thành lấy ngọc Hòa Thị Bích của nước Triệu nhưng định nuốt lời.", "Lạn Tương Như dùng mưu trí bảo vệ viên ngọc không sứt mẻ gì.", "Ông bí mật cử người mang ngọc nguyên vẹn trở về kinh đô nước Triệu."], "Hoàn trả nguyên vẹn hàng hóa mẫu, khuôn đúc OEM hoặc tài sản đúng cam kết.", "试产结束后我方会将全套模具完璧归赵。", "Sau chạy thử, bên chúng tôi sẽ hoàn trả nguyên vẹn toàn bộ khuôn mẫu."),
        ("cy-v7-03", "韦编三绝", "wéi biān sān jué", "Vi Biên Tam Tuyệt", "Sử Ký – Khổng Tử Thế Gia", ["Khổng Tử tuổi già say mê nghiên cứu Chu Dịch (Kinh Dịch).", "Sách cổ làm từ thẻ tre buộc chặt bằng dây da bò (Vi biên).", "Vì lật đọc quá nhiều lần, dây da buộc sách đứt gãy tới ba lượt."], "Tinh thần đọc sâu, khảo cứu sử liệu bền bỉ suốt đời.", "考古学者以韦编三绝的精神校勘古籍。", "Học giả khảo cổ hiệu đính cổ tịch bằng tinh thần nghiền ngẫm thâu đêm."),
        ("cy-v7-04", "洛阳纸贵", "Luòyáng zhǐ guì", "Lạc Dương Chỉ Quý", "Tấn Thư – Tả Tư Truyện", ["Tả Tư thời Tây Tấn mất mười năm viết bài Tam Đô Phú khắc họa ba kinh đô.", "Khi tác phẩm vừa lưu hành, các nhà quý tộc Lạc Dương tranh nhau chép tay.", "Giá giấy chép sách tại kinh đô tăng vọt vì ai cũng mua giấy sao chép."], "Một tác phẩm học thuật, hướng dẫn du lịch hay mẫu thiết kế tạo cơn sốt lan tỏa.", "这份双语游记出版后一时洛阳纸贵。", "Sau khi cuốn du ký song ngữ xuất bản, bạn đọc tìm mua nồng nhiệt khắp nơi."),
        ("cy-v7-05", "胸有成竹", "xiōng yǒu chéng zhú", "Hung Hữu Thành Trúc", "Đông Pha Chí Lâm (Tô Thức viết về Văn Đồng)", ["Họa sĩ Văn Đồng đời Tống nổi tiếng vẽ trúc sống động như thật.", "Tô Thức giải thích bí quyết: trước khi đặt bút vẽ, hình dáng cây trúc đã hoàn chỉnh trong tâm trí ông.", "Nhờ quan sát lâu dài nên nét vẽ tự nhiên liền mạch không chần chừ."], "Chuẩn bị sẵn bản thiết kế chi tiết và phương án dự phòng trước khi đàm phán.", "面对复杂供应链方案他早已胸有成竹。", "Trước phương án chuỗi cung ứng phức tạp, ông ấy đã chuẩn bị sẵn kịch bản chu toàn."),
        ("cy-v7-06", "程门立雪", "Chéng mén lì xuě", "Trình Môn Lập Tuyết", "Tống Sử – Dương Thời Truyện", ["Học giả Dương Thời và Du Tạc đến thỉnh giáo đại nho Trình Di.", "Thấy thầy đang nhắm mắt tĩnh tọa, hai trò đứng chờ lặng lẽ ngoài cửa.", "Khi Trình Di mở mắt ra, tuyết ngoài sân đã rơi dày ngập tới tận chân."], "Lòng tôn sư trọng đạo và thái độ cầu thị khi tiếp cận bậc thầy nghệ nhân.", "拜师学习非遗技艺贵在程门立雪的虚心。", "Tầm sư học nghề di sản cốt ở lòng khiêm cung và kính trọng bậc tiền bối."),
        ("cy-v7-07", "悬梁刺股", "xuán liáng cì gǔ", "Huyền Lương Thứ Cổ", "Chiến Quốc Sách & Hán Thư", ["Tôn Kính thời Hán buộc tóc lên xà nhà tránh ngủ gật khi đọc đêm khuya.", "Tô Tần thời Chiến Quốc tự châm dùi đánh thức mình để học thuyết phục chư hầu.", "Ý chí rèn luyện kỷ luật cao độ giúp hai ông thành danh lưu sử sách."], "Sự khổ luyện vượt giới hạn bản thân để chinh phục ngoại ngữ hay chứng chỉ khó.", "备考HSK九级时需要悬梁刺股般的专注。", "Khi ôn thi HSK bậc 9 cần sự tập trung bền bỉ cao độ."),
        ("cy-v7-08", "曲高和寡", "qǔ gāo hè guǎ", "Khúc Cao Hòa Quả", "Tống Ngọc – Đối Sở Vương Vấn", ["Ca sĩ hát điệu dân gian bình dân ở kinh đô Sở có hàng nghìn người hòa giọng.", "Khi chuyển sang hát những khúc cổ điển tao nhã cao cấp, chỉ vài người đủ trình độ hát theo.", "Tác phẩm càng tinh hoa sâu sắc càng kén người thưởng thức am hiểu."], "Các sản phẩm nghệ thuật tinh túy hoặc nghiên cứu chuyên sâu cần chọn đúng tệp tri âm.", "这套学术图谱定位高端，虽曲高和寡却极受馆长赞誉。", "Bộ atlas chuyên khảo tuy kén bạn đọc phổ thông nhưng được giới giám tuyển đánh giá rất cao."),
        ("cy-v7-09", "青出于蓝", "qīng chū yú lán", "Thanh Xuất Ư Lam", "Tuân Tử – Khuyến Học", ["Màu xanh chàm đậm chiết xuất từ lá cây chàm (lam thảo) nhưng sắc lại thẫm đẹp hơn màu lá gốc.", "Tuân Tử lấy hình ảnh này ví sự học không ngừng vượt qua giới hạn cũ.", "Thế hệ học trò kế thừa tinh hoa rồi phát triển sáng tạo cao hơn thầy."], "Thế hệ trẻ bản địa hóa công nghệ và văn hóa vượt trội so với bản gốc.", "年轻茶艺师在传统基础上青出于蓝，融入现代设计。", "Thế hệ nghệ nhân trẻ kế thừa truyền thống và sáng tạo vượt bậc với thiết kế hiện đại."),
        ("cy-v7-10", "百家争鸣", "bǎi jiā zhēng míng", "Bách Gia Tranh Minh", "Hán Thư – Nghệ Văn Chí", ["Thời Xuân Thu – Chiến Quốc, nhiều học phái (Nho, Đạo, Mặc, Pháp, Danh, Âm Dương) tự do tranh luận.", "Các học giả đi khắp chư hầu trình bày giải pháp trị quốc và nhân sinh.", "Cuộc đối thoại mở này đặt nền móng cho toàn bộ tư tưởng triết học Á Đông."], "Không khí trao đổi học thuật cởi mở, đa góc nhìn giữa nhiều chuyên ngành.", "本次中越文化论坛呈现百家争鸣的精彩对话。", "Diễn đàn văn hóa Việt–Trung năm nay mang lại nhiều góc nhìn đối thoại học thuật phong phú."),
        ("cy-v7-11", "和而不同", "hé ér bù tóng", "Hòa Nhi Bất Đồng", "Luận Ngữ – Tử Lộ (Khổng Tử)", ["Khổng Tử phân biệt người quân tử 'hòa mà không hùa' với kẻ tiểu nhân 'hùa mà không hòa'.", "Giống như nấu món canh ngon phải giữ vị riêng của từng gia vị mà hòa quyện.", "Là nguyên tắc vàng của giao lưu văn hóa xuyên biên giới Việt–Trung."], "Hợp tác thương mại và giao lưu văn hóa trên nền tảng tôn trọng bản sắc độc lập của mỗi dân tộc.", "中越设计团队坚持和而不同，共创东方美学。", "Đội ngũ thiết kế hai nước giữ vững nguyên tắc hòa hợp mà tôn trọng bản sắc riêng."),
        ("cy-v7-12", "铁杵磨针", "tiě chǔ mó zhēn", "Thiết Xử Ma Châm", "Phương Dư Thắng Lãm (Truyện Lý Bạch thời nhỏ)", ["Lý Bạch thuở nhỏ chán học bỏ đi chơi qua bờ suối thấy bà lão mài thanh sắt to.", "Bà nói chỉ cần kiên trì ngày ngày mài giũa thì chày sắt cũng thành kim thêu nhỏ.", "Cậu bé Lý Bạch cảm ngộ quay về đọc sách suốt mười năm thành Thi Tiên."], "Kiên trì tích lũy từng thẻ chữ Hán mỗi ngày trong lộ trình 60 bài học.", "每天坚持复习卡片，功夫到了自然铁杵磨针。", "Ôn tập đều đặn mỗi ngày, đủ thời gian công phu tự khắc thành thạo như mài sắt thành kim."),
        ("cy-v7-13", "高山流水", "gāo shān liú shuǐ", "Cao Sơn Lưu Thủy", "Liệt Tử – Thang Vấn", ["Bá Nha chơi đàn Cổ Cầm cực hay nhưng ít ai hiểu được ý chí gửi trong tiếng dây.", "Chỉ có Chung Tử Kỳ nghe tiếng đàn mà thốt lên thấy núi Thái Sơn cao vút và sông lớn cuộn chảy.", "Khi Chung Tử Kỳ mất, Bá Nha đập đàn thề không tấu nữa vì mất tri âm."], "Sự đồng điệu sâu sắc giữa người sáng tác và người am hiểu thưởng thức.", "能遇到真正懂工艺的合作伙伴，实属高山流水。", "Gặp được đối tác thực sự am hiểu chiều sâu thủ công mỹ nghệ đúng là tri âm hiếm có."),
        ("cy-v7-14", "鹤立鸡群", "hè lì jī qún", "Hạc Lập Kê Quần", "Thế Thuyết Tân Ngữ (Miêu tả Kê Thiệu)", ["Người ta mô tả phong thái nho nhã thanh cao của Kê Thiệu giữa đám đông chốn kinh thành.", "Thân hình ông cao ráo và điềm tĩnh nổi bật như chim hạc đứng giữa đàn gà.", "Trở thành thành ngữ khen tài năng hoặc thiết kế nổi trội rõ rệt."], "Sản phẩm GI hoặc thương hiệu trăm năm đứng tách biệt khỏi phân khúc đại trà nhờ chất lượng.", "这座无钉斗拱展馆在建筑群中宛如鹤立鸡群。", "Gian triển lãm mộng gỗ không đinh nổi bật thanh thoát giữa toàn khu đô thị."),
    ]
    cy_14 = [
        {
            "id": cid,
            "zh": zh,
            "pinyin": py,
            "hanViet": hv,
            "source": src,
            "storyboard3": sb3,
            "b2bUsageVi": b2b,
            "classicQuoteZh": exzh,
            "classicQuoteVi": exvi,
            "b2bSampleSentenceZh": exzh,
            "b2bSampleSentenceVi": exvi,
        }
        for cid, zh, py, hv, src, sb3, b2b, exzh, exvi in cy_specs
    ]

    if ext.get("liushu30"):
        liushu_50 = merge_unique_by_key(liushu_50, ext["liushu30"], "id")[:50]
    for lc in liushu_50:
        if not lc.get("evolution4Stages"):
            lc["evolution4Stages"] = {
                "oracleBone": str(lc.get("oracleBone", "")),
                "bronzeScript": str(lc.get("bronzeScript", "")),
                "smallSeal": str(lc.get("smallSeal", "")),
                "regularScript": f"Khải thư '{lc.get('zh', '')}'",
            }
        lc["meaningShort"] = lc.get("meaningVi") or lc.get("meaningShort", "")
        comps = lc.get("b2bCompounds") or []
        if isinstance(comps, list) and comps and isinstance(comps[0], dict):
            lc["b2bSample"] = " · ".join(f"{c.get('zh', '')} ({c.get('vi', '')})" for c in comps)

    if ext.get("falseFriends15"):
        ff_15 = merge_unique_by_key(ff_15, ext["falseFriends15"], "id")[:15]
    if ext.get("simpTrad20"):
        st_15 = merge_unique_by_key(st_15, ext["simpTrad20"], "id")[:20]
    if ext.get("measureWords15"):
        mw_15 = merge_unique_by_key(mw_15, ext["measureWords15"], "id")[:15]
    if ext.get("chengyu10"):
        cy_14 = merge_unique_by_key(cy_14, ext["chengyu10"], "id")[:14]

    return sanitize_recursive({
        "liushu30": liushu_50[:30],
        "liushu50": liushu_50,
        "falseFriends15": ff_15,
        "simpTrad15": st_15,
        "measureWords15": mw_15,
        "chengyu14": cy_14,
    })
