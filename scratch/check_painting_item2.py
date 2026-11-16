with open('src/data/paintingsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('luoshenfu-tu')
print(text[idx+800:idx+2200])
