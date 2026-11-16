import urllib.request, json

file_name = "File:Forbidden City.jpg"
api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(file_name)}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=800&format=json"

req = urllib.request.Request(api_url, headers={'User-Agent': 'ChineseCultureExplorer/1.0 (Educational Academic Project; admin@chineseculture.edu)'})

try:
    with urllib.request.urlopen(req, timeout=10) as response:
        res = json.loads(response.read().decode('utf-8'))
        print(json.dumps(res, indent=2))
except Exception as e:
    print(f"Error: {e}")
