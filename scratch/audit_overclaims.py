import json
import re
from pathlib import Path

BASE = Path(r"c:\Website China-Vietnam")

# 1. Inspect overclaims in paintingsData.js line by line with field path
ptext = (BASE / "src/data/paintingsData.js").read_text(encoding="utf-8")
start = ptext.find("{", ptext.find("window.CCE_PAINTINGS ="))
# Find matching brace
depth, in_str, str_ch, esc, end = 0, False, "", False, -1
for i in range(start, len(ptext)):
    c = ptext[i]
    if in_str:
        if esc: esc = False
        elif c == "\\": esc = True
        elif c == str_ch: in_str = False
    else:
        if c in ("'", '"', "`"): in_str, str_ch = True, c
        elif c == "{": depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                end = i + 1
                break
pdata = json.loads(ptext[start:end])

print("=== PAINTINGS OVERCLAIMS & ATTRIBUTION ===")
keywords = ["duy nhất", "tuyệt đối", "vô song", "độc nhất", "bảo vật quốc gia", "toàn bích", "hoàn mỹ"]
for m in pdata["masterpieces"]:
    def scan(obj, path=""):
        if isinstance(obj, str):
            low = obj.lower()
            hits = [k for k in keywords if k in low]
            if hits:
                print(f"[{m['id']}] ({path}) -> {hits}: {obj[:140]}...")
        elif isinstance(obj, dict):
            for k, v in obj.items():
                scan(v, f"{path}.{k}" if path else k)
        elif isinstance(obj, list):
            for idx, v in enumerate(obj):
                scan(v, f"{path}[{idx}]")
    scan(m)

print("\n=== PAINTINGS ATTRIBUTION SUMMARY ===")
for m in pdata["masterpieces"]:
    print(f"  {m['id']}: museum={m['museum']} | attr={m['attribution'][:75]}")

print("\n=== MUSEUM ARTIFACTS vs PAINTINGS OVERLAP CHECK ===")
mtext = (BASE / "src/data/museumData.js").read_text(encoding="utf-8")
m_titles = re.findall(r'id:\s*"([^"]+)"|nameVi:\s*"([^"]+)"', mtext)
m_ids = re.findall(r'(?:id|"id"):\s*"([^"]+)"', mtext)
m_names = re.findall(r'(?:nameVi|"nameVi"):\s*"([^"]+)"', mtext)
p_ids = {m["id"] for m in pdata["masterpieces"]}
print("Museum count by id:", len(m_ids), "Painting count:", len(p_ids))
print("Museum names:", m_names)
# Check paintings overlap by title or zh
p_zhs = {m["titleZh"]: m["id"] for m in pdata["masterpieces"]}
m_zhs = re.findall(r'(?:nameZh|"nameZh"):\s*"([^"]+)"', mtext)
print("Shared Zh titles between #museum and #paintings:", set(m_zhs) & set(p_zhs.keys()))
