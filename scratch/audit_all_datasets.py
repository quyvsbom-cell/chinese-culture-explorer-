import os, re, glob

datasets = {
    'paintingsData': 'src/data/paintingsData.js',
    'museumData': 'src/data/museumData.js',
    'regionsData': 'src/data/regionsData.js',
    'articlesData': 'src/data/articlesData.js',
    'compendiaArticles': 'src/data/compendiaArticles.js',
    'historyData': 'src/data/historyData.js',
    'philosophyData': 'src/data/philosophyData.js',
    'customsArtData': 'src/data/customsArtData.js',
    'sinoVietnamData': 'src/data/sinoVietnamData.js',
    'businessData': 'src/data/businessData.js',
    'intelligenceAuditData': 'src/data/intelligenceAuditData.js',
    'editorialMediaData': 'src/data/editorialMediaData.js'
}

for name, path in datasets.items():
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # find image references
    imgs = re.findall(r'["\'](assets/images/[^"\']+\.(?:jpg|jpeg|png|webp|svg))["\']', text)
    remote = re.findall(r'["\'](https?://[^"\']+\.(?:jpg|jpeg|png|webp|svg)[^"\']*)["\']', text)
    
    print(f"=== {name} ({path}) ===")
    print(f"  Total local img references: {len(imgs)} (Unique: {len(set(imgs))})")
    print(f"  Total remote img references: {len(remote)} (Unique: {len(set(remote))})")
    if imgs:
        # show most frequent
        counts = {}
        for img in imgs:
            counts[img] = counts.get(img, 0) + 1
        sorted_counts = sorted(counts.items(), key=lambda x: x[1], reverse=True)
        print("  Top images:")
        for img, c in sorted_counts[:5]:
            print(f"    [{c}x] {img}")
    print()
