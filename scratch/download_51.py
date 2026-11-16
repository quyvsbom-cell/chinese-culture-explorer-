import urllib.request, urllib.parse, json, os

ftitle = "File:Soft Wind with Gentle Clouds.jpg"
api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(ftitle)}&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json"
req = urllib.request.Request(api_url, headers={'User-Agent': 'ChineseCultureExplorer/1.0'})

with urllib.request.urlopen(req) as r:
    res = json.loads(r.read().decode('utf-8'))
    pages = res['query']['pages']
    for pid, pdata in pages.items():
        url = pdata['imageinfo'][0].get('thumburl') or pdata['imageinfo'][0].get('url')
        print("URL:", url)
        req2 = urllib.request.Request(url, headers={'User-Agent': 'ChineseCultureExplorer/1.0'})
        with urllib.request.urlopen(req2) as r2:
            data = r2.read()
            with open('assets/images/paintings/51_lushan_tu_daqian.jpg', 'wb') as f:
                f.write(data)
            print("Successfully saved 51_lushan_tu_daqian.jpg:", len(data), "bytes")
