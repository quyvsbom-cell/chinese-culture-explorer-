import json
import re
from pathlib import Path

BASE = Path(r"c:\Website China-Vietnam")

def extract_json_block(path: Path, anchor: str):
    text = path.read_text(encoding="utf-8")
    idx = text.find(anchor)
    if idx < 0:
        return None
    b1 = text.find("{", idx)
    b2 = text.find("[", idx)
    starts = [x for x in (b1, b2) if x >= 0]
    if not starts:
        return None
    start = min(starts)
    opener = text[start]
    closer = "}" if opener == "{" else "]"
    depth = 0
    in_str = False
    str_ch = ""
    esc = False
    end = -1
    for i in range(start, len(text)):
        ch = text[i]
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == str_ch:
                in_str = False
        else:
            if ch in ("'", '"', "`"):
                in_str = True
                str_ch = ch
            elif ch == opener:
                depth += 1
            elif ch == closer:
                depth -= 1
                if depth == 0:
                    end = i + 1
                    break
    if end < 0:
        return None
    return json.loads(text[start:end])

print("=== 1. PAINTINGS AUDIT ===")
pdata = extract_json_block(BASE / "src/data/paintingsData.js", "window.CCE_PAINTINGS =")
if pdata:
    mps = pdata.get("masterpieces", [])
    print(f"Total masterpieces: {len(mps)}")
    buckets = {"chân tích / 真迹": 0, "mô bản / lâm bản": 0, "truyền thế bản": 0, "còn tranh luận": 0, "other": 0}
    overclaims = []
    missing = []
    for m in mps:
        attr = m.get("attribution", "")
        al = attr.lower()
        if "chân tích" in al or "真迹" in attr:
            buckets["chân tích / 真迹"] += 1
        elif "mô bản" in al or "lâm bản" in al or "摹本" in attr:
            buckets["mô bản / lâm bản"] += 1
        elif "truyền thế" in al or "传世" in attr:
            buckets["truyền thế bản"] += 1
        elif "tranh luận" in al or "nghi vấn" in al or "存疑" in attr:
            buckets["còn tranh luận"] += 1
        else:
            buckets["other"] += 1

        sr = m.get("scholarlyResearch", {})
        if not sr.get("debatedIssues"):
            missing.append((m["id"], "debatedIssues"))
        if not sr.get("academicCitations"):
            missing.append((m["id"], "academicCitations"))
        if not m.get("featuredQuote") or not m["featuredQuote"].get("zh"):
            missing.append((m["id"], "featuredQuote"))

        blob = json.dumps(m, ensure_ascii=False)
        for kw in ["duy nhất", "bảo vật quốc gia", "toàn bích", "tuyệt đối", "vô song", "độc nhất"]:
            if kw in blob.lower():
                overclaims.append((m["id"], kw))
    print("Attribution buckets (some overlap):", buckets)
    print("Missing scholarly subfields:", missing)
    print("Overclaim occurrences:", len(overclaims), overclaims[:25])
    print("Paintings museums array:", [(mu.get("id"), mu.get("nameVi")) for mu in pdata.get("museums", [])])
    print("AttributionGuide types:", [a.get("type") for a in pdata.get("attributionGuide", [])])

print("\n=== 2. ARTICLES (22 Core + 18 Compendia = 40) ===")
a1 = extract_json_block(BASE / "src/data/articlesData.js", "window.CCE_ARTICLES =") or []
a2 = extract_json_block(BASE / "src/data/compendiaArticles.js", "window.CCE_COMPENDIA_ARTICLES =") or []
print(f"Core articles: {len(a1)}, Compendia articles: {len(a2)}, Total: {len(a1)+len(a2)}")
print("Core categories:", {c: sum(1 for a in a1 if a.get("category") == c) for c in sorted({a.get("category") for a in a1})})
print("Compendia categories:", {c: sum(1 for a in a2 if a.get("category") == c) for c in sorted({a.get("category") for a in a2})})

comp_text = (BASE / "src/data/compendiaData.js").read_text(encoding="utf-8")
comp_diff = re.findall(r'"difficulty"\s*:\s*"([^"]+)"', comp_text)
ed_text = (BASE / "src/data/editorialMediaData.js").read_text(encoding="utf-8")
ed_diff = re.findall(r'"difficulty"\s*:\s*"([^"]+)"', ed_text)
print("difficulty in compendiaData.js:", {d: comp_diff.count(d) for d in set(comp_diff)})
print("difficulty in editorialMediaData.js:", {d: ed_diff.count(d) for d in set(ed_diff)})

print("\n=== 3. REGIONS + MUSEUM + HISTORY CROSS-LINKING ===")
reg = extract_json_block(BASE / "src/data/regionsData.js", "window.CCE_REGIONS =") or {}
mus = extract_json_block(BASE / "src/data/museumData.js", "window.CCE_MUSEUM =") or {}
hist = extract_json_block(BASE / "src/data/historyData.js", "window.CCE_HISTORY =") or {}
provs = reg.get("provincesDirectory", []) or reg.get("provincialDirectory", [])
print(f"Provinces: {len(provs)}, MacroRegions: {len(reg.get('macroRegions', []))}, Cities: {len(reg.get('cities', []))}")
print(f"Museum artifacts: {len(mus.get('artifacts', []))}, History periods: {len(hist.get('periods', []))}")
sichuan = [p for p in provs if "xuyên" in p.get("nameVi", "").lower() or "sichuan" in p.get("id", "")]
print("Sichuan province fields:", list(sichuan[0].keys()) if sichuan else None)
print("Sample Museum artifacts mentioning Tam Tinh Doi / Tu Xuyen:", [(a["id"], a["nameVi"], a.get("periodId")) for a in mus.get("artifacts", []) if "tam tinh" in a["nameVi"].lower() or "tứ xuyên" in json.dumps(a, ensure_ascii=False).lower()])
print("All province ids:", [p["id"] for p in provs])

print("\n=== 4. LEARNING & RESEARCH / INTELLIGENCE AUDIT ===")
intel = extract_json_block(BASE / "src/data/intelligenceAuditData.js", "window.CCE_INTELLIGENCE =") or {}
print("Intelligence keys:", list(intel.keys()))
ka = intel.get("knowledgeAudit", {})
print("knowledgeAudit keys:", list(ka.keys()))
if "articleAudits" in ka:
    print("articleAudits count:", len(ka["articleAudits"]))
elif "articleAuditRecords" in ka:
    print("articleAuditRecords count:", len(ka["articleAuditRecords"]))
