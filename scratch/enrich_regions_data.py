import re, json

with open('src/data/regionsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

with open('scratch/provinces_final_report.json', 'r', encoding='utf-8') as f:
    report = json.load(f)

prov_map = {item['id']: item for item in report}

def replace_prov(m):
    obj_str = m.group(0)
    id_m = re.search(r'id:\s*["\']([^"\']+)["\']', obj_str)
    if not id_m:
        return obj_str
    pid = id_m.group(1)
    if pid not in prov_map:
        return obj_str
    
    meta = prov_map[pid]
    # Check if already has image
    if 'image:' in obj_str:
        return obj_str
    
    # Insert image, landmark, photoCredit before the closing bracket
    insertion = f', image: "{meta["path"]}", landmark: "{meta["landmarkVi"]} ({meta["landmarkZh"]})", photoCredit: "{meta["credit"]}" '
    
    # Find the last closing brace
    last_brace = obj_str.rfind('}')
    if last_brace != -1:
        new_obj = obj_str[:last_brace].rstrip() + insertion + obj_str[last_brace:]
        return new_obj
    return obj_str

# Match each { id: "prov-...", ... }
new_text = re.sub(r'\{\s*id:\s*["\']prov-[^}]+?\}', replace_prov, text)

# Verify
count_images = len(re.findall(r'image:\s*["\']assets/images/provinces/', new_text))
print(f"Total province images inserted: {count_images}/34")

if count_images == 34:
    with open('src/data/regionsData.js', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Updated src/data/regionsData.js successfully!")
else:
    print("Count mismatch, not writing!")
