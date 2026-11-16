with open('src/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('renderPaintingsPage() {')
print(text[idx+7000:idx+9500])
