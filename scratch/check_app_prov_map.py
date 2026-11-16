with open('src/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('filteredProvinces.map')
print(text[idx-50:idx+650])
