import re

with open('src/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('renderPaintingsPage')
idx_card = text.find('filtered.map', idx)
print(text[idx_card:idx_card+1500])
