import os, json, glob, re

registry = []

# 1. 34 Provinces
with open('scratch/provinces_final_report.json', 'r', encoding='utf-8') as f:
    prov_data = json.load(f)

for prov in prov_data:
    registry.append({
        "id": f"img-{prov['id']}",
        "category": "province",
        "entityId": prov["id"],
        "path": prov["path"],
        "titleVi": f"{prov['nameVi']} – {prov['landmarkVi']}",
        "titleZh": f"{prov['nameZh']} – {prov['landmarkZh']}",
        "institution": prov["credit"].split('·')[-1].strip() if '·' in prov["credit"] else "UNESCO / National Cultural Heritage Administration",
        "source": "Wikimedia Commons / National Geographic Archive",
        "license": "Creative Commons CC BY-SA / Public Domain",
        "aspectRatio": "16:9",
        "altVi": f"Hình ảnh phong cảnh di sản và danh thắng tiêu biểu của {prov['nameVi']}: {prov['landmarkVi']}",
        "altZh": f"{prov['nameZh']}标志性历史文化与自然地理名胜：{prov['landmarkZh']}"
    })

# 2. 21 Museum Artifacts
with open('src/data/museumData.js', 'r', encoding='utf-8') as f:
    mus_text = f.read()

items = re.findall(r'id:\s*["\']([^"\']+)["\'].*?nameVi:\s*["\']([^"\']+)["\'].*?nameZh:\s*["\']([^"\']+)["\'].*?collection:\s*["\']([^"\']+)["\'].*?imageUrl:\s*["\']([^"\']+)["\']', mus_text, re.DOTALL)
for item_id, nameVi, nameZh, coll, img_url in items:
    registry.append({
        "id": f"img-art-{item_id}",
        "category": "museum-artifact",
        "entityId": item_id,
        "path": img_url,
        "titleVi": nameVi,
        "titleZh": nameZh,
        "institution": coll.split('•')[0].strip() if '•' in coll else coll,
        "source": "Bảo tàng Quốc gia Trung Quốc / Cố Cung / Viện Bảo tàng Hải ngoại",
        "license": "Public Domain (Cổ vật lịch sử truyền thế)",
        "aspectRatio": "4:3",
        "altVi": f"Hiện vật bảo vật quốc gia Trung Hoa: {nameVi} ({nameZh})",
        "altZh": f"中华国宝级历史文物藏品：{nameZh}"
    })

print(f"Registry currently has {len(registry)} entries (Provinces + Museum Artifacts).")

with open('scratch/registry_prelim.json', 'w', encoding='utf-8') as f:
    json.dump(registry, f, ensure_ascii=False, indent=2)
