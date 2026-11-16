import pathlib, re
for fn in ['src/data/historyData.js', 'src/data/philosophyData.js', 'src/data/metaphysicsData.js', 'src/data/paintingsData.js']:
    txt = pathlib.Path(fn).read_text(encoding='utf-8')
    ids = re.findall(r'id:\s*"([^"]+)"', txt)
    if fn.endswith('paintingsData.js'):
        museums = set(re.findall(r'"museum":\s*"([^"]+)"', txt))
        attrs = set(re.findall(r'"attribution":\s*"([^"—\n]+)', txt))
        print('paintings museums:', sorted(museums))
        print('paintings attrs:', sorted(attrs))
    else:
        print(fn, '->', ids[:18])
