import pathlib, re

ptxt = pathlib.Path("src/data/paintingsData.js").read_text(encoding="utf-8")
pm = re.findall(r'id:\s*"([^"]+)",\s*titleVi:\s*"([^"]+)",\s*titleZh:\s*"([^"]+)",\s*titleEn:\s*"([^"]+)",.*?image:\s*"([^"]+)"', ptxt, re.S)
print(f"PAINTINGS MATCHED: {len(pm)}")
if len(pm) == 0:
    # fallback line-by-line parse
    lines = ptxt.splitlines()
    cur = {}
    items = []
    for ln in lines:
        m = re.match(r'\s+id:\s*"([^"]+)"', ln)
        if m and not m.group(1).startswith(("era-", "genre-", "mus-", "cmp-")):
            if cur.get("id") and cur.get("titleVi"):
                items.append(cur)
            cur = {"id": m.group(1)}
        for k in ("titleVi", "titleZh", "museum", "image", "dimensions", "material"):
            km = re.match(rf'\s+{k}:\s*"([^"]+)"', ln)
            if km:
                cur[k] = km.group(1)
    if cur.get("id") and cur.get("titleVi"):
        items.append(cur)
    print(f"FALLBACK PAINTINGS COUNT: {len(items)}")
    for i, it in enumerate(items, 1):
        print(f"  {i:02d}. {it['id']} | {it.get('titleVi','')} ({it.get('titleZh','')}) | {it.get('image','')}")

rtxt = pathlib.Path("src/data/regionsData.js").read_text(encoding="utf-8")
prm = re.findall(r'\{\s*id:\s*"(prov-[^"]+)",\s*nameVi:\s*"([^"]+)",\s*nameEn:\s*"([^"]+)",\s*nameZh:\s*"([^"]+)"', rtxt)
print(f"\nPROVINCES MATCHED: {len(prm)}")
for i, (pid, nvi, nen, nzh) in enumerate(prm, 1):
    print(f"  {i:02d}. {pid} | {nvi} ({nzh})")
