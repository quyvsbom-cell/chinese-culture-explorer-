import json, glob, re, os

# Map each painting id to its corresponding file in assets/images/paintings
with open('scratch/paintings_download_config.json', 'r', encoding='utf-8') as f:
    config = json.load(f)

pid_to_file = {}
for item in config:
    pid = item['id']
    fname = item['filename']
    fpath = f"assets/images/paintings/{fname}"
    if os.path.exists(fpath):
        pid_to_file[pid] = fpath
    else:
        print("Missing file for", pid, fname)

print(f"Mapped {len(pid_to_file)}/54 paintings to verified files.")

with open('src/data/paintingsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Update each masterpiece's "image" property
start = text.find('window.CCE_PAINTINGS =')
brace = text.find('{', start)
end = text.rfind('};')
if end == -1: end = text.rfind('}')
else: end += 1

data = json.loads(text[brace:end])
masterpieces = data.get('masterpieces', [])

updated_count = 0
for p in masterpieces:
    pid = p.get('id')
    if pid in pid_to_file:
        p['image'] = pid_to_file[pid]
        p['imageUrl'] = pid_to_file[pid]
        p['imageThumb'] = pid_to_file[pid]
        updated_count += 1

print(f"Updated {updated_count}/54 masterpieces in memory.")

new_json = json.dumps(data, ensure_ascii=False, indent=2)
new_file_content = f"""// ============================================================================
// KIỆT TÁC QUỐC HỌA TRUNG HOA – 中国国画经典
// Masterpieces of Chinese Traditional Painting (Online Digital Museum Archive)
// CHINESE CULTURE EXPLORER – 中国文化探索
// Curated collection of 54 monumental masterpieces spanning 7 Dynastic Eras,
// 9 Traditional Painting Genres, with 9-dimensional scholarly art analysis,
// verified museum collections, and authentic high-resolution local imagery.
// Founded and created by Lê Hưng Thịnh
// ============================================================================

window.CCE_PAINTINGS = {new_json};
"""

with open('src/data/paintingsData.js', 'w', encoding='utf-8') as f:
    f.write(new_file_content)

print("Saved src/data/paintingsData.js successfully!")
