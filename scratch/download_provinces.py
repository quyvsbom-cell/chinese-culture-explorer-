import urllib.request, urllib.parse, json, os, time

os.makedirs('assets/images/provinces', exist_ok=True)

with open('scratch/provinces_config.json', 'r', encoding='utf-8') as f:
    provinces = json.load(f)

USER_AGENT = 'ChineseCultureExplorer/1.0 (Educational Academic Project; contact@chineseculture.edu)'

def get_image_url(file_title):
    api_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(file_title)}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1200&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=12) as response:
            res = json.loads(response.read().decode('utf-8'))
            pages = res.get('query', {}).get('pages', {})
            for pid, pdata in pages.items():
                if 'imageinfo' in pdata and len(pdata['imageinfo']) > 0:
                    info = pdata['imageinfo'][0]
                    # Prefer thumburl (scaled ~1200px) or original url
                    return info.get('thumburl') or info.get('url')
    except Exception as e:
        print(f"  API query failed for {file_title}: {e}")
    return None

def search_commons_files(query_str):
    api_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query_str)}&srnamespace=6&srlimit=5&format=json"
    req = urllib.request.Request(api_url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=12) as response:
            res = json.loads(response.read().decode('utf-8'))
            results = res.get('query', {}).get('search', [])
            return [r['title'] for r in results if r['title'].lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]
    except Exception as e:
        print(f"  Search failed for {query_str}: {e}")
    return []

def download_file(url, target_path):
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = resp.read()
            if len(data) > 5000:  # Valid image size
                with open(target_path, 'wb') as f:
                    f.write(data)
                return True
    except Exception as e:
        print(f"  Download error {url}: {e}")
    return False

results_summary = []

for i, prov in enumerate(provinces):
    target_path = os.path.join('assets/images/provinces', prov['filename'])
    print(f"[{i+1}/34] Processing {prov['nameVi']} ({prov['nameZh']})...")
    
    if os.path.exists(target_path) and os.path.getsize(target_path) > 10000:
        print(f"  Already exists ({os.path.getsize(target_path)} bytes)")
        results_summary.append({
            "id": prov["id"],
            "nameVi": prov["nameVi"],
            "nameZh": prov["nameZh"],
            "landmark": prov["landmark"],
            "filename": prov["filename"],
            "localPath": f"assets/images/provinces/{prov['filename']}",
            "size": os.path.getsize(target_path),
            "status": "OK"
        })
        continue

    downloaded = False
    candidates = [prov['search']] + prov.get('fallbacks', [])
    
    for candidate in candidates:
        url = get_image_url(candidate)
        if url:
            print(f"  Found URL for candidate '{candidate}': {url[:60]}...")
            if download_file(url, target_path):
                print(f"  -> Successfully downloaded ({os.path.getsize(target_path)} bytes)!")
                downloaded = True
                break
            time.sleep(0.3)
    
    if not downloaded:
        # Fallback to search query
        search_term = f"{prov['nameVi']} {prov['landmark'].split('•')[0].strip()}"
        print(f"  Searching Commons for: {search_term}...")
        found_titles = search_commons_files(search_term)
        for ft in found_titles:
            url = get_image_url(ft)
            if url:
                print(f"  Trying search result '{ft}'...")
                if download_file(url, target_path):
                    print(f"  -> Successfully downloaded from search ({os.path.getsize(target_path)} bytes)!")
                    downloaded = True
                    break
                time.sleep(0.3)

    if downloaded:
        results_summary.append({
            "id": prov["id"],
            "nameVi": prov["nameVi"],
            "nameZh": prov["nameZh"],
            "landmark": prov["landmark"],
            "filename": prov["filename"],
            "localPath": f"assets/images/provinces/{prov['filename']}",
            "size": os.path.getsize(target_path),
            "status": "OK"
        })
    else:
        print(f"  FAILED to download image for {prov['nameVi']}")
        results_summary.append({
            "id": prov["id"],
            "nameVi": prov["nameVi"],
            "nameZh": prov["nameZh"],
            "landmark": prov["landmark"],
            "filename": prov["filename"],
            "localPath": f"assets/images/provinces/{prov['filename']}",
            "size": 0,
            "status": "FAILED"
        })

    time.sleep(0.4)

with open('scratch/provinces_download_summary.json', 'w', encoding='utf-8') as f:
    json.dump(results_summary, f, ensure_ascii=False, indent=2)

print("\nFinished downloading. Summary:")
ok_count = sum(1 for r in results_summary if r['status'] == 'OK')
print(f"Success: {ok_count}/34")
