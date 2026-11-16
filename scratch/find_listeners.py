with open('src/app.js', 'r', encoding='utf-8') as f:
    for i, l in enumerate(f, 1):
        if 'document.addEventListener' in l:
            print(f'{i}: {l.strip()[:80]}')
