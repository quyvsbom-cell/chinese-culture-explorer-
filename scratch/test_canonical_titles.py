import urllib.request, urllib.parse, json

titles = [
    "File:Liang Kai - Poet Li Bai.jpg",
    "File:Liang Kai 001.jpg",
    "File:Su Shi - Wood and Rock.jpg",
    "File:Su Shi 001.jpg",
    "File:Bada Shanren 001.jpg",
    "File:Bada Shanren - Flowers on the River.jpg",
    "File:Zheng Xie 001.jpg",
    "File:Zheng Banqiao 001.jpg",
    "File:Wu Zhen 001.jpg",
    "File:Wang Yuanqi 001.jpg",
    "File:Shitao 001.jpg"
]

USER_AGENT = 'ChineseCultureExplorer/1.0 (Educational Academic Project; contact@chineseculture.edu)'

for t in titles:
    api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(t)}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            res = json.loads(r.read().decode('utf-8'))
            pages = res.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                if 'imageinfo' in pdata:
                    print(f"FOUND: {t} -> {pdata['imageinfo'][0].get('thumburl', '')[:60]}")
    except Exception as e:
        pass
