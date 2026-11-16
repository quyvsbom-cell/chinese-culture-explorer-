import urllib.request, json

file_name = "File:Forbidden_City_Beijing_Shenwumen.jpg"
api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(file_name)}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=800&format=json"

req = urllib.request.Request(api_url, headers={'User-Agent': 'ChineseCultureExplorer/1.0 (Educational Academic Project; admin@chineseculture.edu)'})

try:
    with urllib.request.urlopen(req, timeout=10) as response:
        res = json.loads(response.read().decode('utf-8'))
        pages = res.get('query', {}).get('pages', {})
        for pid, pdata in pages.items():
            ii = pdata.get('imageinfo', [{}])[0]
            print("Found image info:")
            print("  thumburl:", ii.get('thumburl'))
            print("  url:", ii.get('url'))
            
            # Now download the thumburl
            thumb = ii.get('thumburl')
            if thumb:
                req2 = urllib.request.Request(thumb, headers={'User-Agent': 'ChineseCultureExplorer/1.0 (Educational Academic Project; admin@chineseculture.edu)'})
                with urllib.request.urlopen(req2, timeout=10) as r2:
                    content = r2.read()
                    print(f"Downloaded thumbnail: {len(content)} bytes")
except Exception as e:
    print(f"Error: {e}")
