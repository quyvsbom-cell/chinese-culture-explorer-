import urllib.request, urllib.parse, json

queries = [
    ("14", "Dong Yuan", "14_hanlin_chongting.jpg"),
    ("51", "Zhang Daqian", "51_lushan_tu_daqian.jpg"),
    ("54", "Li Keran", "54_wanshan_hongbian.jpg")
]

USER_AGENT = 'ChineseCultureExplorer/1.0 (Educational Academic Project; contact@chineseculture.edu)'

for num, q, fname in queries:
    # Try Chinese Wikipedia PageImages first
    api_zh = f"https://zh.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(q)}&prop=pageimages&pithumbsize=1200&format=json"
    req_zh = urllib.request.Request(api_zh, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req_zh, timeout=10) as rz:
            res_z = json.loads(rz.read().decode('utf-8'))
            pages = res_z.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                thumb = pdata.get('thumbnail', {}).get('source')
                if thumb:
                    print(f"ZH-WIKI [{num}] {q} -> {thumb}")
    except Exception as e:
        print(f"ZH error {q}: {e}")

    # Also try Commons search
    api_cm = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(q)}&srnamespace=6&srlimit=5&format=json"
    req_cm = urllib.request.Request(api_cm, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req_cm, timeout=10) as rc:
            res_c = json.loads(rc.read().decode('utf-8'))
            results = res_c.get('query', {}).get('search', [])
            print(f"COMMONS [{num}] {q} -> {[x['title'] for x in results]}")
    except Exception as e:
        print(f"CM error {q}: {e}")
