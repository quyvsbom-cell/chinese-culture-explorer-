import re, json

with open('src/data/regionsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

with open('scratch/provinces_final_report.json', 'r', encoding='utf-8') as f:
    report = json.load(f)

prov_map = {item['id']: item for item in report}

# Check each province entry in provincesDirectory
idx_start = text.find('provincesDirectory: [')
if idx_start == -1:
    print("Cannot find provincesDirectory!")
    exit(1)

idx_end = text.find('];', idx_start)
if idx_end == -1:
    idx_end = text.find(']', idx_start)

prov_block = text[idx_start:idx_end+2]
print(f"Found provinces block of length {len(prov_block)}")
print(prov_block[:500])
