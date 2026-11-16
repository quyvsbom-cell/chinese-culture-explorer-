import re

with open('src/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('renderPaintingsPage')
end_idx = text.find('renderExplorePage')
sub = text[idx:end_idx]

for m in re.finditer(r'<img\s+[^>]+>', sub):
    print(m.group(0))
