import urllib.request, json

titles = ["Huangshan", "Kaiping Diaolou and Villages", "Hongyadong, Chongqing", "Western Xia mausoleums", "Heaven Lake", "Changbai Mountains"]
USER_AGENT = 'ChineseCultureExplorer/1.0 (Educational Academic Project; contact@chineseculture.edu)'

for t in titles:
    api_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(t)}&prop=pageimages&pithumbsize=1200&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            res = json.loads(r.read().decode('utf-8'))
            pages = res.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                thumb = pdata.get('thumbnail', {}).get('source')
                print(f"{t:30} -> {thumb[:75] if thumb else 'None'}")
    except Exception as e:
        print(f"{t} error: {e}")
