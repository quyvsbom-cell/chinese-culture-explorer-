import re

with open('src/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

matches = [m.start() for m in re.finditer(r'renderPaintingsPage|renderPaintingCard|renderPaintingDetailModal', text)]
for pos in matches:
    print(text[pos:pos+500])
    print('---')
