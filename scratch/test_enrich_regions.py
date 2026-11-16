import re, json

with open('src/data/regionsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

with open('scratch/provinces_final_report.json', 'r', encoding='utf-8') as f:
    report = json.load(f)

prov_map = {item['id']: item for item in report}

print("Loaded provinces map with", len(prov_map), "entries.")
