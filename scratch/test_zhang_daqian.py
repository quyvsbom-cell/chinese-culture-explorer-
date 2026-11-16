import urllib.request, urllib.parse, json

titles = ["Chang Dai-chien", "Zhang Daqian"]
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
                print(f"{t} -> {thumb}")
    except Exception as e:
        print(f"Error {t}: {e}")

# Chinese Wikipedia
api_zh = f"https://zh.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote('张大千')}&prop=pageimages&pithumbsize=1200&format=json"
req_zh = urllib.request.Request(api_zh, headers={'User-Agent': USER_AGENT})
try:
    with urllib.request.urlopen(req_zh, timeout=10) as r:
        res = json.loads(r.read().decode('utf-8'))
        pages = res.get('query', {}).get('pages', {})
        for pid, pdata in pages.items():
            thumb = pdata.get('thumbnail', {}).get('source')
            print(f"ZH 张大千 -> {thumb}")
except Exception as e:
    pass
