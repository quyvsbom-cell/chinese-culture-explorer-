import urllib.request, urllib.parse, json

remaining = [
    ("rui-he-tu", "瑞鹤图", "23_rui_he_tu.jpg"),
    ("furong-jinji", "芙蓉锦鸡图", "24_furong_jinji.jpg"),
    ("chushan-ruiai", "米芾 春山", "26_chushan_ruiai.jpg"),
    ("kumu-guaishi", "枯木怪石图", "27_kumu_guaishi.jpg"),
    ("libai-hangyin", "梁楷 李白", "28_libai_hangyin.jpg"),
    ("quehua-qiuse", "鹊华秋色图", "30_quehua_qiuse.jpg"),
    ("dongting-yuyin", "吴镇 洞庭", "33_dongting_yuyin.jpg"),
    ("gumu-youquan", "文徵明 古木", "37_gumu_youquan.jpg"),
    ("shanlu-songsheng", "唐寅 山路松声", "38_shanlu_songsheng.jpg"),
    ("luomu-qiuse", "王时敏", "43_luomu_qiuse.jpg"),
    ("kangxi-nanxun", "康熙南巡图", "44_kangxi_nanxun.jpg"),
    ("wanhe-songfeng-qing", "王原祁 万壑松风", "45_wanhe_songfeng_qing.jpg"),
    ("huaiyang-jieqiu", "石涛 淮扬", "46_huaiyang_jieqiu.jpg"),
    ("kongque-zhushi", "八大山人", "47_kongque_zhushi.jpg"),
    ("zhushi-tu", "郑板桥 竹", "48_zhushi_tu.jpg"),
    ("moxia-tu", "齐白石 虾", "49_moxia_tu.jpg"),
    ("benma-tu", "徐悲鸿 马", "50_benma_tu.jpg"),
    ("lushan-tu-daqian", "张大千 庐山", "51_lushan_tu_daqian.jpg"),
    ("shujiang-bishitu", "黄宾虹", "52_shujiang_bishitu.jpg"),
    ("wanshan-hongbian", "李可染 万山红遍", "54_wanshan_hongbian.jpg"),
    ("ershiba-xiu", "二十八宿", "03_ershiba_xiu.jpg"),
    ("hanlin-chongting", "寒林重汀", "14_hanlin_chongting.jpg")
]

USER_AGENT = 'ChineseCultureExplorer/1.0 (Educational Academic Project; contact@chineseculture.edu)'

for pid, q, fname in remaining:
    api_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(q)}&srnamespace=6&srlimit=3&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            res = json.loads(r.read().decode('utf-8'))
            results = res.get('query', {}).get('search', [])
            titles = [x['title'] for x in results]
            print(f"{pid:20} ({q:10}) -> {titles[:2]}")
    except Exception as e:
        print(f"{pid} error: {e}")
