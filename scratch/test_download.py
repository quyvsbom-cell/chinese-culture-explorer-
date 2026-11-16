import urllib.request

url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Forbidden_City_Beijing_Shenwumen.jpg/640px-Forbidden_City_Beijing_Shenwumen.jpg"
req = urllib.request.Request(url, headers={'User-Agent': 'ChineseCultureExplorer/1.0 (Educational Academic Project; contact@example.edu)'})

try:
    with urllib.request.urlopen(req, timeout=10) as response:
        data = response.read()
        print(f"Downloaded successfully: {len(data)} bytes")
except Exception as e:
    print(f"Download failed: {e}")
