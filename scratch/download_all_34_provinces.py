import urllib.request, urllib.parse, json, os, time

os.makedirs('assets/images/provinces', exist_ok=True)
USER_AGENT = 'ChineseCultureExplorer/1.0 (Educational Academic Project; contact@chineseculture.edu)'

# 34 Provinces canonical mapping
PROVINCES_TARGETS = [
    {
        "id": "prov-beijing",
        "nameVi": "Bắc Kinh",
        "nameZh": "北京市",
        "landmarkVi": "Điện Kỳ Niên – Thiên Đàn Bắc Kinh",
        "landmarkZh": "天坛祈年殿",
        "wikiTitle": "Temple of Heaven",
        "filename": "beijing-temple-of-heaven.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Beijing"
    },
    {
        "id": "prov-tianjin",
        "nameVi": "Thiên Tân",
        "nameZh": "天津市",
        "landmarkVi": "Vòng quay Mắt Thiên Tân bên sông Hải Hà",
        "landmarkZh": "天津之眼摩天轮",
        "wikiTitle": "Tianjin Eye",
        "filename": "tianjin-eye.jpg",
        "credit": "Wikimedia Commons · Haihe River, Tianjin"
    },
    {
        "id": "prov-shanghai",
        "nameVi": "Thượng Hải",
        "nameZh": "上海市",
        "landmarkVi": "Bến Thượng Hải & Lục Gia Chủy",
        "landmarkZh": "上海外滩与陆家嘴",
        "wikiTitle": "The Bund",
        "filename": "shanghai-bund-skyline.jpg",
        "credit": "Wikimedia Commons · Shanghai Landmark"
    },
    {
        "id": "prov-chongqing",
        "nameVi": "Trùng Khánh",
        "nameZh": "重庆市",
        "landmarkVi": "Hồng Nhai Động & Cầu Thiên Tư Môn sông Gia Lăng",
        "landmarkZh": "洪崖洞与千厮门嘉陵江大桥",
        "wikiTitle": "Chongqing",
        "filename": "chongqing-hongyadong.jpg",
        "credit": "Wikimedia Commons · Chongqing Municipality"
    },
    {
        "id": "prov-hebei",
        "nameVi": "Hà Bắc",
        "nameZh": "河北省",
        "landmarkVi": "Thừa Đức Tị Thử Sơn Trang (Phổ Đà Tông Thừa Chi Miếu)",
        "landmarkZh": "承德避暑山庄普陀宗乘之庙",
        "wikiTitle": "Chengde Mountain Resort",
        "filename": "hebei-chengde-resort.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Hebei"
    },
    {
        "id": "prov-shanxi",
        "nameVi": "Sơn Tây",
        "nameZh": "山西省",
        "landmarkVi": "Huyền Không Tự trên vách đá Hằng Sơn",
        "landmarkZh": "恒山金龙峡悬空寺",
        "wikiTitle": "Hanging Temple",
        "filename": "shanxi-hanging-temple.jpg",
        "credit": "Wikimedia Commons · Datong, Shanxi"
    },
    {
        "id": "prov-liaoning",
        "nameVi": "Liêu Ninh",
        "nameZh": "辽宁省",
        "landmarkVi": "Thẩm Dương Cố Cung (Đại Chính Điện)",
        "landmarkZh": "沈阳故宫大政殿",
        "wikiTitle": "Mukden Palace",
        "filename": "liaoning-mukden-palace.jpg",
        "credit": "Wikimedia Commons · Shenyang, Liaoning"
    },
    {
        "id": "prov-jilin",
        "nameVi": "Cát Lâm",
        "nameZh": "吉林省",
        "landmarkVi": "Thiên Trì núi lửa Trường Bạch Sơn",
        "landmarkZh": "长白山火山天池",
        "wikiTitle": "Heaven Lake",
        "filename": "jilin-changbai-tianchi.jpg",
        "credit": "Wikimedia Commons · Changbai Mountain, Jilin"
    },
    {
        "id": "prov-heilongjiang",
        "nameVi": "Hắc Long Giang",
        "nameZh": "黑龙江省",
        "landmarkVi": "Nhà thờ Thánh Sophia Cáp Nhĩ Tân",
        "landmarkZh": "哈尔滨圣索菲亚教堂",
        "wikiTitle": "Saint Sophia Cathedral, Harbin",
        "filename": "heilongjiang-saint-sophia.jpg",
        "credit": "Wikimedia Commons · Harbin, Heilongjiang"
    },
    {
        "id": "prov-jiangsu",
        "nameVi": "Giang Tô",
        "nameZh": "江苏省",
        "landmarkVi": "Chuyết Chính Viên – Lâm viên cổ điển Tô Châu",
        "landmarkZh": "苏州古典园林拙政园",
        "wikiTitle": "Humble Administrator's Garden",
        "filename": "jiangsu-suzhou-garden.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Suzhou"
    },
    {
        "id": "prov-zhejiang",
        "nameVi": "Chiết Giang",
        "nameZh": "浙江省",
        "landmarkVi": "Tây Hồ Hàng Châu (Tam Đàm Ấn Nguyệt)",
        "landmarkZh": "杭州西湖三潭印月",
        "wikiTitle": "West Lake",
        "filename": "zhejiang-hangzhou-westlake.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Hangzhou"
    },
    {
        "id": "prov-anhui",
        "nameVi": "An Huy",
        "nameZh": "安徽省",
        "landmarkVi": "Hoàng Sơn Vân Hải & Nghênh Khách Tùng",
        "landmarkZh": "黄山云海与迎客松",
        "wikiTitle": "Huangshan",
        "filename": "anhui-huangshan-cloudsea.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Anhui"
    },
    {
        "id": "prov-fujian",
        "nameVi": "Phúc Kiến",
        "nameZh": "福建省",
        "landmarkVi": "Thổ Lâu Phúc Kiến (Thừa Khải Lâu)",
        "landmarkZh": "福建客家土楼承启楼",
        "wikiTitle": "Fujian tulou",
        "filename": "fujian-tulou.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Fujian"
    },
    {
        "id": "prov-jiangxi",
        "nameVi": "Giang Tây",
        "nameZh": "江西省",
        "landmarkVi": "Làng cổ Vụ Nguyên mùa hoa cải Giang Lĩnh",
        "landmarkZh": "婺源江岭梯田与徽派古民居",
        "wikiTitle": "Wuyuan County, Jiangxi",
        "filename": "jiangxi-wuyuan-village.jpg",
        "credit": "Wikimedia Commons · Wuyuan, Jiangxi"
    },
    {
        "id": "prov-shandong",
        "nameVi": "Sơn Đông",
        "nameZh": "山东省",
        "landmarkVi": "Đỉnh Ngọc Hoàng – Thái Sơn Đông Nhạc",
        "landmarkZh": "东岳泰山玉皇顶",
        "wikiTitle": "Mount Tai",
        "filename": "shandong-taishan.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Shandong"
    },
    {
        "id": "prov-henan",
        "nameVi": "Hà Nam",
        "nameZh": "河南省",
        "landmarkVi": "Tượng Đại Phật Lư Xá Na – Long Môn Thạch Khúc Lạc Dương",
        "landmarkZh": "洛阳龙门石窟奉先寺卢舍那大佛",
        "wikiTitle": "Longmen Grottoes",
        "filename": "henan-longmen-grottoes.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Luoyang"
    },
    {
        "id": "prov-hubei",
        "nameVi": "Hồ Bắc",
        "nameZh": "湖北省",
        "landmarkVi": "Hoàng Hạc Lâu Vũ Hán bên sông Trường Giang",
        "landmarkZh": "武汉蛇山黄鹤楼",
        "wikiTitle": "Yellow Crane Tower",
        "filename": "hubei-yellow-crane-tower.jpg",
        "credit": "Wikimedia Commons · Wuhan, Hubei"
    },
    {
        "id": "prov-hunan",
        "nameVi": "Hồ Nam",
        "nameZh": "湖南省",
        "landmarkVi": "Trụ đá sa thạch Thiên Tử Sơn – Trương Gia Giới Vũ Lăng Nguyên",
        "landmarkZh": "张家界武陵源天子山石柱",
        "wikiTitle": "Zhangjiajie National Forest Park",
        "filename": "hunan-zhangjiajie.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Hunan"
    },
    {
        "id": "prov-guangdong",
        "nameVi": "Quảng Đông",
        "nameZh": "广东省",
        "landmarkVi": "Tháp Quảng Châu bên dòng Châu Giang",
        "landmarkZh": "广州塔与珠江新城天际线",
        "wikiTitle": "Canton Tower",
        "filename": "guangdong-canton-tower.jpg",
        "credit": "Wikimedia Commons · Guangzhou, Guangdong"
    },
    {
        "id": "prov-hainan",
        "nameVi": "Hải Nam",
        "nameZh": "海南省",
        "landmarkVi": "Tượng Nam Sơn Hải Thượng Quan Âm Tam Á",
        "landmarkZh": "三亚南山海上观音圣像",
        "wikiTitle": "Nanshan Temple (Sanya)",
        "filename": "hainan-sanya-guanyin.jpg",
        "credit": "Wikimedia Commons · Sanya, Hainan"
    },
    {
        "id": "prov-sichuan",
        "nameVi": "Tứ Xuyên",
        "nameZh": "四川省",
        "landmarkVi": "Ngũ Hoa Hải – Thung lũng Cửu Trại Câu",
        "landmarkZh": "九寨沟五花海奇观",
        "wikiTitle": "Jiuzhaigou",
        "filename": "sichuan-jiuzhaigou.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Sichuan"
    },
    {
        "id": "prov-guizhou",
        "nameVi": "Quý Châu",
        "nameZh": "贵州省",
        "landmarkVi": "Đại thác nước Hoàng Quả Thụ An Thuận",
        "landmarkZh": "安顺黄果树大瀑布",
        "wikiTitle": "Huangguoshu Waterfall",
        "filename": "guizhou-huangguoshu.jpg",
        "credit": "Wikimedia Commons · Anshun, Guizhou"
    },
    {
        "id": "prov-yunnan",
        "nameVi": "Vân Nam",
        "nameZh": "云南省",
        "landmarkVi": "Cổ trấn Lệ Giang dưới chân Ngọc Long Tuyết Sơn",
        "landmarkZh": "丽江古城大研镇与玉龙雪山",
        "wikiTitle": "Old Town of Lijiang",
        "filename": "yunnan-lijiang-old-town.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Yunnan"
    },
    {
        "id": "prov-shaanxi",
        "nameVi": "Thiểm Tây",
        "nameZh": "陕西省",
        "landmarkVi": "Đội quân Đất nung Tần Thủy Hoàng Lăng",
        "landmarkZh": "西安秦始皇帝陵兵马俑一号坑",
        "wikiTitle": "Terracotta Army",
        "filename": "shaanxi-terracotta-army.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Xi'an"
    },
    {
        "id": "prov-gansu",
        "nameVi": "Cam Túc",
        "nameZh": "甘肃省",
        "landmarkVi": "Đôn Hoàng Mạc Cao Quật (Cửu Tằng Lâu)",
        "landmarkZh": "敦煌莫高窟九层楼北大佛",
        "wikiTitle": "Mogao Caves",
        "filename": "gansu-dunhuang-mogao.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Gansu"
    },
    {
        "id": "prov-qinghai",
        "nameVi": "Thanh Hải",
        "nameZh": "青海省",
        "landmarkVi": "Hồ nước mặn Thanh Hải bên đồng hoa cải",
        "landmarkZh": "高原圣湖青海湖油菜花海",
        "wikiTitle": "Qinghai Lake",
        "filename": "qinghai-lake.jpg",
        "credit": "Wikimedia Commons · Qinghai Province"
    },
    {
        "id": "prov-taiwan",
        "nameVi": "Đài Loan",
        "nameZh": "台湾省",
        "landmarkVi": "Hồ Nhật Nguyệt & Tháp Từ Ân",
        "landmarkZh": "日月潭拉鲁岛与慈恩塔",
        "wikiTitle": "Sun Moon Lake",
        "filename": "taiwan-sun-moon-lake.jpg",
        "credit": "Wikimedia Commons · Nantou, Taiwan"
    },
    {
        "id": "prov-inner-mongolia",
        "nameVi": "Nội Mông Cổ",
        "nameZh": "内蒙古自治区",
        "landmarkVi": "Thảo nguyên Hô Luân Bối Nhĩ bên sông Mạc Nhĩ Cách Lặc",
        "landmarkZh": "呼伦贝尔大草原与莫尔格勒河",
        "wikiTitle": "Hulunbuir",
        "filename": "inner-mongolia-hulunbuir.jpg",
        "credit": "Wikimedia Commons · Inner Mongolia Autonomous Region"
    },
    {
        "id": "prov-guangxi",
        "nameVi": "Quảng Tây",
        "nameZh": "广西壮族自治区",
        "landmarkVi": "Sơn thủy Ly Giang & Thạch lâm Dương Sóc Quế Lâm",
        "landmarkZh": "桂林阳朔漓江山水",
        "wikiTitle": "Li River (Guangxi)",
        "filename": "guangxi-guilin-li-river.jpg",
        "credit": "Wikimedia Commons · Guilin, Guangxi"
    },
    {
        "id": "prov-tibet",
        "nameVi": "Tây Tạng",
        "nameZh": "西藏自治区",
        "landmarkVi": "Cung điện Potala Lhasa trên đỉnh đồi Hồng Sơn",
        "landmarkZh": "拉萨红山布达拉宫",
        "wikiTitle": "Potala Palace",
        "filename": "tibet-potala-palace.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Lhasa"
    },
    {
        "id": "prov-ningxia",
        "nameVi": "Ninh Hạ",
        "nameZh": "宁夏回族自治区",
        "landmarkVi": "Quần thể Lăng mộ Hoàng gia Tây Hạ dưới chân Hạ Lan Sơn",
        "landmarkZh": "贺兰山下西夏王陵",
        "wikiTitle": "Western Xia mausoleums",
        "filename": "ningxia-western-xia-tombs.jpg",
        "credit": "Wikimedia Commons · Yinchuan, Ningxia"
    },
    {
        "id": "prov-xinjiang",
        "nameVi": "Tân Cương",
        "nameZh": "新疆维吾尔自治区",
        "landmarkVi": "Hồ Kanas (Nguyệt Lượng Vịnh) vùng A Lặc Thái",
        "landmarkZh": "阿勒泰阿尔泰山喀纳斯湖月亮湾",
        "wikiTitle": "Kanas Lake",
        "filename": "xinjiang-kanas-lake.jpg",
        "credit": "Wikimedia Commons · Altay, Xinjiang"
    },
    {
        "id": "prov-hongkong",
        "nameVi": "Hồng Kông",
        "nameZh": "香港特别行政区",
        "landmarkVi": "Cảng Victoria nhìn từ Đỉnh Thái Bình",
        "landmarkZh": "维多利亚港与太平山顶夜景",
        "wikiTitle": "Victoria Harbour",
        "filename": "hongkong-victoria-harbour.jpg",
        "credit": "Wikimedia Commons · Hong Kong SAR"
    },
    {
        "id": "prov-macau",
        "nameVi": "Ma Cao",
        "nameZh": "澳门特别行政区",
        "landmarkVi": "Mặt tiền Di tích Nhà thờ Thánh Phaolô",
        "landmarkZh": "大三巴牌坊（圣保禄大教堂遗址）",
        "wikiTitle": "Ruins of Saint Paul's",
        "filename": "macau-ruins-st-paul.jpg",
        "credit": "Wikimedia Commons · UNESCO World Heritage Site, Macau SAR"
    }
]

def fetch_wiki_lead_image(wiki_title):
    api_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(wiki_title)}&prop=pageimages&pithumbsize=1200&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=12) as r:
            res = json.loads(r.read().decode('utf-8'))
            pages = res.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                thumb = pdata.get('thumbnail', {}).get('source')
                if thumb:
                    return thumb
    except Exception as e:
        print(f"  Wiki query error for {wiki_title}: {e}")
    return None

def download_img(url, filepath):
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=25) as r:
            data = r.read()
            if len(data) > 10000:
                with open(filepath, 'wb') as f:
                    f.write(data)
                return len(data)
    except Exception as e:
        print(f"  Download error: {e}")
    return 0

print("=== STARTING PRECISE 34 PROVINCES DOWNLOAD ===")
download_report = []

for i, prov in enumerate(PROVINCES_TARGETS):
    fpath = os.path.join('assets/images/provinces', prov['filename'])
    print(f"[{i+1}/34] {prov['nameVi']} ({prov['nameZh']}) -> {prov['wikiTitle']}")
    
    # Check if already downloaded and valid
    if os.path.exists(fpath) and os.path.getsize(fpath) > 30000:
        sz = os.path.getsize(fpath)
        print(f"  -> Valid existing file ({sz:,} bytes)")
        download_report.append({
            **prov,
            "status": "EXISTS",
            "size": sz,
            "path": f"assets/images/provinces/{prov['filename']}"
        })
        continue

    img_url = fetch_wiki_lead_image(prov['wikiTitle'])
    if not img_url:
        # Fallback to direct Chinese Wikipedia if needed
        api_zh = f"https://zh.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(prov['nameZh'])}&prop=pageimages&pithumbsize=1200&format=json"
        req_zh = urllib.request.Request(api_zh, headers={'User-Agent': USER_AGENT})
        try:
            with urllib.request.urlopen(req_zh, timeout=10) as rz:
                res_z = json.loads(rz.read().decode('utf-8'))
                pages_z = res_z.get('query', {}).get('pages', {})
                for pz, pdz in pages_z.items():
                    img_url = pdz.get('thumbnail', {}).get('source')
                    if img_url: break
        except Exception:
            pass

    if img_url:
        print(f"  Downloading: {img_url[:75]}...")
        sz = download_img(img_url, fpath)
        if sz > 0:
            print(f"  -> Successfully downloaded ({sz:,} bytes)!")
            download_report.append({
                **prov,
                "status": "DOWNLOADED",
                "size": sz,
                "path": f"assets/images/provinces/{prov['filename']}"
            })
        else:
            print(f"  -> FAILED to download data")
            download_report.append({**prov, "status": "FAILED", "size": 0, "path": ""})
    else:
        print(f"  -> FAILED to find image URL")
        download_report.append({**prov, "status": "NOT_FOUND", "size": 0, "path": ""})

    time.sleep(0.3)

with open('scratch/provinces_final_report.json', 'w', encoding='utf-8') as f:
    json.dump(download_report, f, ensure_ascii=False, indent=2)

success_count = sum(1 for r in download_report if r['status'] in ('EXISTS', 'DOWNLOADED') and r['size'] > 10000)
print(f"\n==========================================")
print(f"PROVINCES COMPLETE: {success_count}/34 verified on disk!")
print(f"==========================================")
