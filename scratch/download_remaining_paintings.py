import urllib.request, urllib.parse, json, os, time

USER_AGENT = 'ChineseCultureExplorer/1.0 (Educational Academic Project; contact@chineseculture.edu)'

explicit_files = [
    ("rui-he-tu", "File:瑞鹤图（亮版）.jpg", "23_rui_he_tu.jpg"),
    ("furong-jinji", "File:赵佶芙蓉锦鸡图轴.png", "24_furong_jinji.jpg"),
    ("chushan-ruiai", "File:Mi Fei 001.jpg", "26_chushan_ruiai.jpg"),
    ("quehua-qiuse", "File:2a Zhao Mengfu Autumn Colors on the Qiao and Hua Mountains (central part)Handscroll, ink and colors on paper, 28.4 x 93.2 cm National Palace Museum, Taipei.jpg", "30_quehua_qiuse.jpg"),
    ("gumu-youquan", "File:文徵明古木寒泉图.jpg", "37_gumu_youquan.jpg"),
    ("shanlu-songsheng", "File:唐寅山路松声图.jpg", "38_shanlu_songsheng.jpg"),
    ("luomu-qiuse", "File:王时敏 仿古山水图册 8.jpg", "43_luomu_qiuse.jpg"),
    ("kangxi-nanxun", "File:王翚等康熙南巡图卷.jpg", "44_kangxi_nanxun.jpg"),
    ("moxia-tu", "File:墨蝦圖.jpg", "49_moxia_tu.jpg"),
    ("shujiang-bishitu", "File:黄宾虹 层峦飞瀑图轴.jpg", "52_shujiang_bishitu.jpg"),
    ("ershiba-xiu", "File:Twenty-eight mansions.jpg", "03_ershiba_xiu.jpg"),
]

# For remaining, use Wikipedia PageImages on Artist
wiki_artists = [
    ("kumu-guaishi", "Su Shi", "27_kumu_guaishi.jpg"),
    ("libai-hangyin", "Liang Kai", "28_libai_hangyin.jpg"),
    ("dongting-yuyin", "Wu Zhen (painter)", "33_dongting_yuyin.jpg"),
    ("wanhe-songfeng-qing", "Wang Yuanqi", "45_wanhe_songfeng_qing.jpg"),
    ("huaiyang-jieqiu", "Shitao", "46_huaiyang_jieqiu.jpg"),
    ("kongque-zhushi", "Bada Shanren", "47_kongque_zhushi.jpg"),
    ("zhushi-tu", "Zheng Xie", "48_zhushi_tu.jpg"),
    ("benma-tu", "Xu Beihong", "50_benma_tu.jpg"),
    ("lushan-tu-daqian", "Zhang Daqian", "51_lushan_tu_daqian.jpg"),
    ("wanshan-hongbian", "Li Keran", "54_wanshan_hongbian.jpg"),
    ("hanlin-chongting", "Dong Yuan", "14_hanlin_chongting.jpg")
]

def get_commons_url(file_title):
    api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(file_title)}&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=12) as response:
            res = json.loads(response.read().decode('utf-8'))
            pages = res.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                if 'imageinfo' in pdata and len(pdata['imageinfo']) > 0:
                    info = pdata['imageinfo'][0]
                    return info.get('thumburl') or info.get('url')
    except Exception as e:
        print(f"  Error querying {file_title}: {e}")
    return None

def get_wiki_page_image(wiki_title):
    api_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(wiki_title)}&prop=pageimages&pithumbsize=1200&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=12) as response:
            res = json.loads(response.read().decode('utf-8'))
            pages = res.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                thumb = pdata.get('thumbnail', {}).get('source')
                if thumb: return thumb
    except Exception as e:
        pass
    return None

def download_file(url, target_path):
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = resp.read()
            if len(data) > 8000:
                with open(target_path, 'wb') as f:
                    f.write(data)
                return True
    except Exception as e:
        print(f"  Download error: {e}")
    return False

print("Downloading explicit files...")
for pid, ftitle, fname in explicit_files:
    target_path = os.path.join('assets/images/paintings', fname)
    if os.path.exists(target_path) and os.path.getsize(target_path) > 10000:
        print(f"  Already exists: {fname}")
        continue
    url = get_commons_url(ftitle)
    if url and download_file(url, target_path):
        print(f"  Downloaded {fname} ({os.path.getsize(target_path)} bytes)")
    else:
        print(f"  Failed: {fname}")
    time.sleep(0.3)

print("\nDownloading artist page images for remaining...")
for pid, wtitle, fname in wiki_artists:
    target_path = os.path.join('assets/images/paintings', fname)
    if os.path.exists(target_path) and os.path.getsize(target_path) > 10000:
        print(f"  Already exists: {fname}")
        continue
    url = get_wiki_page_image(wtitle)
    if url and download_file(url, target_path):
        print(f"  Downloaded {fname} ({os.path.getsize(target_path)} bytes)")
    else:
        print(f"  Failed: {fname}")
    time.sleep(0.3)
