import re

with open('src/data/museumData.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Find all artifact ids and imageUrls
items = re.findall(r'id:\s*["\']([^"\']+)["\'].*?imageUrl:\s*["\']([^"\']+)["\']', text, re.DOTALL)
print(f"Total artifacts with imageUrl: {len(items)}")
urls = [u for _, u in items]
print(f"Unique imageUrls: {len(set(urls))}")
for item_id, url in items:
    print(f"  {item_id:25} -> {url}")
