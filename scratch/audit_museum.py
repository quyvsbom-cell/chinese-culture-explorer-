import re

with open('src/data/museumData.js', 'r', encoding='utf-8') as f:
    text = f.read()

artifacts = re.findall(r'id:\s*["\']([^"\']+)["\']', text)
print("Artifact count in museumData.js:", len(artifacts))

imgs = re.findall(r'image:\s*["\']([^"\']+)["\']', text)
print("Image fields in museumData.js:", len(imgs), "Unique:", len(set(imgs)))

for a, img in zip(artifacts, imgs):
    print(f"  {a} -> {img}")
