import urllib.request, json

titles = ["Chongqing", "Dazu Rock Carvings", "Canton Tower", "Guangdong", "Kaiping", "Bắc Kinh"]
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
                print(f"{t:25} -> {thumb[:80] if thumb else 'None'}")
    except Exception as e:
        print(f"{t} error: {e}")
