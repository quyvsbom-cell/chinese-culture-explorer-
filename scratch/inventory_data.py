import pathlib, re

print("--- ARTICLES ---")
for fn in ["src/data/articlesData.js", "src/data/compendiaArticles.js"]:
    txt = pathlib.Path(fn).read_text(encoding="utf-8")
    blocks = re.split(r'\n\s*\{\s*\n\s*id:\s*"', txt)[1:]
    print(f"{fn}: {len(blocks)} articles")
    for b in blocks:
        aid = b.split('"')[0]
        cat_m = re.search(r'category:\s*"([^"]+)"', b)
        title_m = re.search(r'titleVi:\s*"([^"]+)"', b)
        # strip field names
        prose = re.sub(r'\b(id|number|category|categoryLabel|titleVi|titleZh|titleEn|readMinutes|epistemicTag|terminologyIds|relatedTopics|url|sourceType|verificationNote)\b:', '', b)
        words = len(re.findall(r'[\w\u00C0-\u1EF9\u4e00-\u9fff]+', prose))
        print(f"  {aid} | cat={cat_m.group(1) if cat_m else '?'} | ~{words}w | {title_m.group(1)[:55] if title_m else ''}")

print("\n--- PROVINCES (34) ---")
rtxt = pathlib.Path("src/data/regionsData.js").read_text(encoding="utf-8")
pblocks = re.split(r'\n\s*\{\s*\n\s*id:\s*"(prov-[^"]+)"', rtxt)[1:]
for i in range(0, len(pblocks), 2):
    pid = pblocks[i]
    body = pblocks[i+1]
    nvi = re.search(r'nameVi:\s*"([^"]+)"', body)
    nzh = re.search(r'nameZh:\s*"([^"]+)"', body)
    reg = re.search(r'regionId:\s*"([^"]+)"', body)
    img = re.search(r'image:\s*"([^"]+)"', body)
    print(f"  {pid} | {nvi.group(1) if nvi else ''} ({nzh.group(1) if nzh else ''}) | reg={reg.group(1) if reg else ''} | img={img.group(1) if img else ''}")

print("\n--- MUSEUM ARTIFACTS ---")
mtxt = pathlib.Path("src/data/museumData.js").read_text(encoding="utf-8")
ablocks = re.split(r'\n\s*\{\s*\n\s*id:\s*"([^"]+)"', mtxt)[1:]
for i in range(0, len(ablocks), 2):
    aid = ablocks[i]
    body = ablocks[i+1]
    if 'dateEstimate:' not in body:
        continue
    nvi = re.search(r'nameVi:\s*"([^"]+)"', body)
    col = re.search(r'collection:\s*"([^"]+)"', body)
    img = re.search(r'image:\s*"([^"]+)"', body)
    print(f"  {aid} | {nvi.group(1) if nvi else ''} | {col.group(1) if col else ''} | img={img.group(1) if img else ''}")

print("\n--- PAINTINGS ---")
ptxt = pathlib.Path("src/data/paintingsData.js").read_text(encoding="utf-8")
ptblocks = re.split(r'\n\s*\{\s*\n\s*id:\s*"([^"]+)"', ptxt)[1:]
count_p = 0
for i in range(0, len(ptblocks), 2):
    pid = ptblocks[i]
    body = ptblocks[i+1]
    if 'creationDate:' not in body:
        continue
    count_p += 1
    tvi = re.search(r'titleVi:\s*"([^"]+)"', body)
    img = re.search(r'image:\s*"([^"]+)"', body)
    print(f"  {count_p:02d}. {pid} | {tvi.group(1) if tvi else ''} | img={img.group(1) if img else ''}")

print("\n--- ALL IMAGES IN assets/images ---")
imgs = sorted(str(p).replace('\\', '/') for p in pathlib.Path('assets/images').rglob('*') if p.is_file())
print(f"Total asset files: {len(imgs)}")
for im in imgs:
    if '/articles/' in im or '/editorial/' in im or '/cities/' in im or '/regions/' in im:
        print(" ", im)
