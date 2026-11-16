with open('src/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function renderPaintingsGridContent')
if idx == -1:
    idx = text.find('renderPaintingsGridContent()')
print(text[idx:idx+2500])
