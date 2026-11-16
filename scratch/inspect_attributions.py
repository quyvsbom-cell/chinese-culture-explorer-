import json
from pathlib import Path

P = Path(r"c:\Website China-Vietnam\src\data\paintingsData.js")
text = P.read_text(encoding="utf-8")
anchor = "window.CCE_PAINTINGS ="
start = text.find("{", text.find(anchor))
end = text.rfind("};") + 1
data = json.loads(text[start:end])

print(f"Loaded {len(data['masterpieces'])} masterpieces:")
for i, m in enumerate(data["masterpieces"], 1):
    print(f"{i:2d}. {m['id']} | {m['dynasty']['nameVi']} | {m['attribution']}")
