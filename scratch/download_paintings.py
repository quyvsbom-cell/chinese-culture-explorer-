import urllib.request, urllib.parse, json, os, time, shutil

os.makedirs('assets/images/paintings', exist_ok=True)

with open('scratch/paintings_download_config.json', 'r', encoding='utf-8') as f:
    paintings = json.load(f)

USER_AGENT = 'ChineseCultureExplorer/1.0 (Educational Academic Project; contact@chineseculture.edu)'

# Pre-existing local high-res masterpieces we already possess
local_copies = {
    "jiangshan-duojiao-1959": "assets/images/jiangshan-ruci-duojiao.jpg",
    "qianli-jiangshan": "assets/images/museum/qianli-jiangshan.jpg",
    "qingming-shanghe": "assets/images/museum/qingming-scroll.jpg"
}

def get_image_url(file_title):
    api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(file_title)}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1400&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=12) as response:
            res = json.loads(response.read().decode('utf-8'))
            pages = res.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                if 'imageinfo' in pdata and len(pdata['imageinfo']) > 0:
                    info = pdata['imageinfo'][0]
                    return info.get('thumburl') or info.get('url')
    except Exception as e:
        print(f"  API query error for {file_title}: {e}")
    return None

def search_commons(query_str):
    api_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query_str)}&srnamespace=6&srlimit=5&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=12) as response:
            res = json.loads(response.read().decode('utf-8'))
            results = res.get('query', {}).get('search', [])
            return [r['title'] for r in results if r['title'].lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]
    except Exception as e:
        print(f"  Search error for {query_str}: {e}")
    return []

def download_file(url, target_path):
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=25) as resp:
            data = resp.read()
            if len(data) > 8000:
                with open(target_path, 'wb') as f:
                    f.write(data)
                return True
    except Exception as e:
        print(f"  Download error: {e}")
    return False

results = []

for i, p in enumerate(paintings):
    pid = p['id']
    target_path = os.path.join('assets/images/paintings', p['filename'])
    print(f"[{i+1}/54] {p['titleZh']} ({p['titleVi']})...")

    if pid in local_copies and os.path.exists(local_copies[pid]):
        shutil.copy2(local_copies[pid], target_path)
        print(f"  Copied from existing local master: {local_copies[pid]}")
        results.append({
            "id": pid,
            "filename": p["filename"],
            "localPath": f"assets/images/paintings/{p['filename']}",
            "status": "OK",
            "size": os.path.getsize(target_path)
        })
        continue

    if os.path.exists(target_path) and os.path.getsize(target_path) > 10000:
        print(f"  Already exists ({os.path.getsize(target_path)} bytes)")
        results.append({
            "id": pid,
            "filename": p["filename"],
            "localPath": f"assets/images/paintings/{p['filename']}",
            "status": "OK",
            "size": os.path.getsize(target_path)
        })
        continue

    downloaded = False
    candidates = [p['search']] + p.get('fallbacks', [])

    for cand in candidates:
        url = get_image_url(cand)
        if url:
            print(f"  Found URL for '{cand}'")
            if download_file(url, target_path):
                print(f"  -> Downloaded {os.path.getsize(target_path)} bytes")
                downloaded = True
                break
            time.sleep(0.3)

    if not downloaded:
        # Search commons by Chinese title and Artist
        sq = f"{p['titleZh']} {p['artistZh']}"
        print(f"  Searching Commons for: {sq}...")
        found = search_commons(sq)
        for ftitle in found:
            url = get_image_url(ftitle)
            if url:
                print(f"  Trying '{ftitle}'...")
                if download_file(url, target_path):
                    print(f"  -> Downloaded from search: {os.path.getsize(target_path)} bytes")
                    downloaded = True
                    break
                time.sleep(0.3)

    if downloaded:
        results.append({
            "id": pid,
            "filename": p["filename"],
            "localPath": f"assets/images/paintings/{p['filename']}",
            "status": "OK",
            "size": os.path.getsize(target_path)
        })
    else:
        print(f"  Failed for {p['titleZh']}")
        results.append({
            "id": pid,
            "filename": p["filename"],
            "localPath": f"assets/images/paintings/{p['filename']}",
            "status": "FAILED",
            "size": 0
        })

    time.sleep(0.35)

with open('scratch/paintings_download_summary.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

ok_count = sum(1 for r in results if r['status'] == 'OK')
print(f"\nMasterpieces downloaded: {ok_count}/54")
