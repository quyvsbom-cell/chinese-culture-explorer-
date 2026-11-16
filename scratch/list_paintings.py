import json, pathlib

ptxt = pathlib.Path("src/data/paintingsData.js").read_text(encoding="utf-8")
start = ptxt.index("window.CCE_PAINTINGS = ") + len("window.CCE_PAINTINGS = ")
end = ptxt.rindex("};") + 1
data = json.loads(ptxt[start:end])
ms = data["masterpieces"]
print("MASTERPIECES:", len(ms))
for i, p in enumerate(ms, 1):
    print(f"  {i:02d}. {p['id']} | {p['titleVi']} ({p['titleZh']}) | {p['dynasty']['nameVi']} | {p['museum']} | {p['image']}")
