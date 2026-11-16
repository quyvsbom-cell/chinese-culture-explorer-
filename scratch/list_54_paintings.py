import json

with open('src/data/paintingsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('window.CCE_PAINTINGS =')
if start != -1:
    brace = text.find('{', start)
    end = text.rfind('};')
    if end == -1:
        end = text.rfind('}')
    else:
        end += 1
    json_str = text[brace:end]
    data = json.loads(json_str)
    paintings = data.get('masterpieces', [])
    print(f"Total masterpieces found: {len(paintings)}")
    for i, p in enumerate(paintings):
        pid = str(p.get('id', ''))
        tzh = str(p.get('titleZh', ''))
        azh = str(p.get('artistZh', ''))
        img = str(p.get('imageUrl', ''))
        era = str(p.get('eraId', ''))
        print(f"{i+1:2d}. [{era:8}] {pid:30} | {tzh:14} | {azh:10} | {img}")
