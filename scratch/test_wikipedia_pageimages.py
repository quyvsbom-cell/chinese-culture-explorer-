import urllib.request, json

titles = ["Temple of Heaven", "Jiuzhaigou", "Western Xia tombs", "Kanas Lake", "Hulunbuir", "Humble Administrator's Garden", "Mount Huang", "Saint Sophia Cathedral, Harbin", "Kaiping Diaolou", "Hongyadong", "Zhangjiajie National Forest Park", "Nanshan Temple (Sanya)", "Wuyuan County, Jiangxi"]

USER_AGENT = 'ChineseCultureExplorer/1.0 (Educational Academic Project; contact@chineseculture.edu)'

for t in titles:
    api_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(t)}&prop=pageimages|extracts&exintro=1&explaintext=1&pithumbsize=1200&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            res = json.loads(r.read().decode('utf-8'))
            pages = res.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                thumb = pdata.get('thumbnail', {}).get('source')
                print(f"{t:30} -> {thumb[:70] if thumb else 'None'}")
    except Exception as e:
        print(f"{t} error: {e}")
