import re
import json
from pathlib import Path
from collections import Counter

ROOT = Path(r"c:\Website China-Vietnam")

def scan_paintings():
    p_text = (ROOT / "src" / "data" / "paintingsData.js").read_text(encoding="utf-8")
    # Count assertive phrases
    patterns = [
        "真迹", "摹本", "唐摹本", "宋摹本", "chân tích", "toàn bích",
        "bảo vật quốc gia", "duy nhất", "Đại lễ đường", "Cố Cung",
        "scholarlyResearch", "scholarlyConsensus", "debatedIssues", "academicCitations"
    ]
    print("=== PAINTINGS DATA SCAN ===")
    for pat in patterns:
        cnt = len(re.findall(re.escape(pat), p_text, re.IGNORECASE))
        print(f"  {pat}: {cnt}")

    # Extract museum lines & attribution lines
    attrs = re.findall(r'attribution:\s*"([^"]+)"', p_text)
    museums = re.findall(r'museum:\s*"([^"]+)"', p_text)
    print(f"Total masterpieces attribution tags ({len(attrs)}):")
    for k, v in Counter(attrs).most_common():
        print(f"  [{v}] {k}")
    print(f"\nUnique museums field values ({len(set(museums))}):")
    for k, v in Counter(museums).most_common():
        print(f"  [{v}] {k}")

def scan_articles():
    a1 = (ROOT / "src" / "data" / "articlesData.js").read_text(encoding="utf-8")
    a2 = (ROOT / "src" / "data" / "compendiaArticles.js").read_text(encoding="utf-8")
    ids1 = re.findall(r'\bid:\s*"([^"]+)"', a1)
    # Check articlesData.js supplement or difficulty
    sup_diffs = re.findall(r'difficulty:\s*"([^"]+)"', a1 + "\n" + a2)
    print("\n=== ARTICLES SCAN ===")
    print(f"  IDs in articlesData.js occurrences: {len(ids1)}")
    print(f"  difficulty labels found: {Counter(sup_diffs)}")

def scan_ui_overclaims():
    app = (ROOT / "src" / "app.js").read_text(encoding="utf-8")
    print("\n=== UI / APP.JS PHRASES CHECK ===")
    for pat in ["Toàn bích", "Toàn Bích", "Chân tích", "chân tích", "bảo vật quốc gia", "Bảo vật Quốc gia", "Đại lễ đường"]:
        matches = []
        for idx, line in enumerate(app.splitlines(), 1):
            if pat.lower() in line.lower():
                matches.append((idx, line.strip()[:120]))
        print(f"  {pat}: {len(matches)} occurrences")
        for ln, txt in matches[:10]:
            print(f"    L{ln}: {txt}")

def scan_crosslinks():
    h = (ROOT / "src" / "data" / "historyData.js").read_text(encoding="utf-8")
    r = (ROOT / "src" / "data" / "regionsData.js").read_text(encoding="utf-8")
    ph = (ROOT / "src" / "data" / "philosophyData.js").read_text(encoding="utf-8")
    d = (ROOT / "src" / "data" / "dictionaryData.js").read_text(encoding="utf-8")
    m = (ROOT / "src" / "data" / "museumData.js").read_text(encoding="utf-8")
    lr = (ROOT / "src" / "data" / "learningAndResearchData.js").read_text(encoding="utf-8")

    # Check dictionary items for hanzi, pinyin
    d_ids = re.findall(r'id:\s*"([^"]+)"', d)
    d_hanzi = re.findall(r'hanzi:\s*"([^"]*)"', d)
    d_pinyin = re.findall(r'pinyin:\s*"([^"]*)"', d)
    print("\n=== DICTIONARY & CROSS-LINK INVENTORY ===")
    print(f"  Dictionary entries approx: {len(d_ids)}, empty hanzi: {sum(1 for x in d_hanzi if not x.strip())}, empty pinyin: {sum(1 for x in d_pinyin if not x.strip())}")
    dup_d = [k for k, v in Counter(d_ids).items() if v > 1]
    print(f"  Duplicate dict IDs: {dup_d}")

    # Check museum artifacts attribution
    m_attrs = re.findall(r'attribution:\s*"([^"]+)"', m)
    print(f"  Museum artifacts count approx: {len(m_attrs)}")
    for k, v in Counter(m_attrs).most_common():
        if "chân" in k.lower() or "quốc bảo" in k.lower() or "toàn bích" in k.lower() or "duy nhất" in k.lower():
            print(f"    [WARN M] {k}")

    # Check Knowledge Graph nodes in learningAndResearchData.js
    kg_nodes = re.findall(r'id:\s*"(kg-[^"]+)"', lr)
    print(f"  Knowledge Graph node IDs ({len(kg_nodes)}): {kg_nodes}")

if __name__ == "__main__":
    scan_paintings()
    scan_articles()
    scan_ui_overclaims()
    scan_crosslinks()
