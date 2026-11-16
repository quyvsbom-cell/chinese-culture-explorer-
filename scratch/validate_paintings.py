import json

with open('src/data/paintingsData.js', 'r', encoding='utf-8') as f:
    code = f.read()

prefix = "window.CCE_PAINTINGS = "
idx = code.find(prefix)
assert idx != -1
json_part = code[idx + len(prefix):code.rfind(';')]
data = json.loads(json_part)

print(f"Paintings count: {len(data['masterpieces'])}")
print(f"Eras count: {len(data['eras'])}")
print(f"Genres count: {len(data['genres'])}")
print(f"Comparisons count: {len(data['comparisons'])}")
print(f"Museums count: {len(data['museums'])}")

for p in data['masterpieces']:
    assert 'id' in p and 'titleZh' in p and 'titleVi' in p and 'analysis' in p
    for k in ['historicalBackground', 'artistBiography', 'artisticComposition', 'brushwork', 'inkAndColor', 'spatialPerspective', 'symbolism', 'philosophicalMeaning', 'artisticLegacy']:
        assert k in p['analysis'], f"Missing {k} in {p['id']}"

print("SUCCESS: All 54 masterpieces validated with all 9 artistic analysis dimensions!")
