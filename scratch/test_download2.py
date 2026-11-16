import urllib.request

url = "https://upload.wikimedia.org/wikipedia/commons/8/8a/Forbidden_City.jpg"
req = urllib.request.Request(url, headers={'User-Agent': 'ChineseCultureExplorer/1.0 (Educational Academic Project; contact@chineseculture.edu)'})

try:
    with urllib.request.urlopen(req, timeout=15) as r:
        data = r.read()
        print(f"Downloaded original: {len(data)} bytes")
except Exception as e:
    print(f"Error: {e}")
