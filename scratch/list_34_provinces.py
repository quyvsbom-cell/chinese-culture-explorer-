import re

with open('src/data/regionsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('provincesDirectory:')
items = re.findall(r'id:\s*["\']([^"\']+)["\'],\s*nameVi:\s*["\']([^"\']+)["\'],\s*nameEn:\s*["\']([^"\']+)["\'],\s*nameZh:\s*["\']([^"\']+)["\']', text[idx:])
print(f"Total provinces in directory: {len(items)}")
for i, item in enumerate(items):
    print(f"{i+1:2d}. {item[0]:15} | {item[1]:15} | {item[3]:8} | {item[2]}")
