import json
import re
from pathlib import Path

BASE = Path(r"c:\Website China-Vietnam")

reg = (BASE / "src/data/regionsData.js").read_text(encoding="utf-8")
provs = re.findall(r'"id":\s*"(prov-[^"]+)"[^}]*"nameVi":\s*"([^"]+)"', reg)
cities = re.findall(r'id:\s*"([^"]+)",\s*\n\s*nameVi:\s*"([^"]+)"', reg)
print("PROVINCES:", len(provs), provs)
print("CITIES:", len(cities), cities)

mus = (BASE / "src/data/museumData.js").read_text(encoding="utf-8")
m_ids = re.findall(r'id:\s*"([^"]+)",\s*\n\s*nameVi:\s*"([^"]+)"', mus)
print("MUSEUM ARTIFACTS:", len(m_ids), m_ids)

hist = (BASE / "src/data/historyData.js").read_text(encoding="utf-8")
h_ids = re.findall(r'id:\s*"([^"]+)",\s*\n\s*order:\s*\d+,\s*\n\s*nameVi:\s*"([^"]+)"', hist)
print("HISTORY PERIODS:", len(h_ids), h_ids)

a1 = (BASE / "src/data/articlesData.js").read_text(encoding="utf-8")
a2 = (BASE / "src/data/compendiaArticles.js").read_text(encoding="utf-8")
art_ids = re.findall(r'(?:id|"id"):\s*"([^"]+)"[\s\S]{0,160}?(?:titleVi|"titleVi"):\s*"([^"]+)"', a1 + "\n" + a2)
print("ARTICLES:", len(art_ids), [(i, t[:40]) for i, t in art_ids])
