import json, re, os, glob

with open('src/data/paintingsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Find the paintings array
m = re.search(r'paintings:\s*\[', text)
if not m:
    m = re.search(r'"paintings":\s*\[', text)

if m:
    print("Found paintings array at position", m.start())
    sample = text[m.start():m.start()+2500]
    print(sample[:1000])

# Find image fields across paintingsData.js
images = re.findall(r'["\'](image|imageHd|imageUrl|img|thumbnail)["\']\s*:\s*["\']([^"\']+)["\']', text)
print("Image fields found in paintingsData:", len(images))
for k, v in images[:10]:
    print(f"  {k} -> {v}")
