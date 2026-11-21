"""
Read-only content depth audit for Chinese Culture Explorer.

Measures the real depth of existing essays, paintings, museum artifacts,
provinces and dictionary entries straight from src/data/*.js and writes
reports/content_depth.md. It never modifies any data file.

Usage: uv run python scripts/audit_content_depth.py
"""

from __future__ import annotations

import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data"
REPORT = ROOT / "reports" / "content_depth.md"

ARTICLE_FILES = [
    "articlesData.js",
    "compendiaArticles.js",
    "articlesMonographsPart1.js",
    "articlesMonographsPart2.js",
    "articlesExpansionBatch2026.js",
    "articlesExpansionV3_Part5.js",
]

ENRICH_FILES = [
    "articlesDepthEnrichmentBatch1.js",
    "articlesDepthEnrichmentBatch2.js",
    "articlesDepthEnrichmentBatch3.js",
]

ID_RE = re.compile(r'(?m)^\s{2,6}id:\s*"([a-z0-9][a-z0-9-]+)"\s*,')
FIELD_RE = r'{key}:\s*(?:\n\s*)?"((?:[^"\\]|\\.)*)"'


def read(name: str) -> str:
    p = DATA / name
    return p.read_text(encoding="utf-8") if p.exists() else ""


def field(block: str, key: str) -> str:
    m = re.search(FIELD_RE.format(key=key), block)
    return m.group(1) if m else ""


def split_blocks(text: str):
    ids = list(ID_RE.finditer(text))
    for i, m in enumerate(ids):
        end = ids[i + 1].start() if i + 1 < len(ids) else len(text)
        yield m.group(1), text[m.start():end]


def enrichment_chars(known_ids):
    sizes = {}
    for fname in ENRICH_FILES:
        text = read(fname)
        pat = re.compile(r'(?m)^\s{2,6}"([a-z0-9][a-z0-9-]{8,})"\s*:\s*[\[{]')
        hits = [m for m in pat.finditer(text) if m.group(1) in known_ids]
        for i, m in enumerate(hits):
            end = hits[i + 1].start() if i + 1 < len(hits) else len(text)
            span = re.sub(r"\s+", "", text[m.start():end])
            sizes[m.group(1)] = sizes.get(m.group(1), 0) + len(span)
    return sizes


def audit_articles():
    en_text = read("articlesEnData.js") + read("enParityArticlesV3_Part5.js")
    rows, seen = [], set()
    for fname in ARTICLE_FILES:
        for aid, blk in split_blocks(read(fname)):
            if aid in seen or "mainContent" not in blk:
                continue
            seen.add(aid)
            headings = re.findall(r'heading:\s*"', blk)
            body_chars = sum(len(b) for b in re.findall(r'body:\s*(?:\n\s*)?"((?:[^"\\]|\\.)*)"', blk))
            body_chars += len(field(blk, "introduction")) + len(field(blk, "historicalBackground"))
            rows.append({
                "id": aid,
                "file": fname,
                "chars": body_chars,
                "sections": len(headings),
                "sources": len(re.findall(r'sourceType:', blk)) + len(re.findall(r'PQ\(', blk)),
                "has_en": f'"{aid}"' in en_text or f"{aid}:" in en_text,
            })
    return rows


def audit_paintings():
    txt = read("paintingsData.js")
    cur = read("paintingsCuratorial2026.js") + read("hotspotsAndMetadataUpgradeBatch1.js") + read("hotspotsAndMetadataUpgradeBatch2.js")
    en = read("enParityPaintings2026.js")
    ids = re.findall(r'(?m)^\s{2,6}"?id"?\s*:\s*"([a-z0-9-]+)"', txt)
    rows = []
    for pid in dict.fromkeys(ids):
        if pid in ("all",):
            continue
        hs_base = len(re.findall(r'x:\s*\d', txt[txt.find(pid):txt.find(pid)+3000]))
        hs_cur = cur.count(pid)
        rows.append((pid, hs_base, hs_cur, "yes" if pid in en else "NO"))
    return rows


def audit_museum():
    txt = read("museumData.js") + "\n" + read("museumExpansionBatch2026.js")
    en = read("enParityMuseum2026.js")
    rows, seen = [], set()
    for mid, blk in split_blocks(txt):
        if mid in seen or mid.startswith(("all", "showcase-", "painting", "calligraphy", "ceramics", "ancient-books", "maps", "architecture", "artifacts", "collections")):
            continue
        if len(mid) < 4 or re.search(r'-(1|2|3|4|t1|t2|t3|t4)$', mid):
            continue
        seen.add(mid)
        rows.append((mid, len(blk), "yes" if mid in en else "NO"))
    return rows


def audit_provinces():
    txt = read("regionsData.js") + "\n" + read("regionsProvincesBatch1.js") + "\n" + read("regionsProvincesBatch2.js") + "\n" + read("regionsProvincesBatch3.js")
    deep = read("destinationsDeepAtlas2026.js")
    rows = []
    for pid, blk in split_blocks(txt):
        if not pid.startswith("prov-"):
            continue
        has_deep = pid.replace("prov-", "dest-") in deep
        rows.append((pid, len(blk), "yes" if has_deep else "NO"))
    return rows


def audit_dictionary():
    txt = read("dictionaryData.js") + "\n" + read("dictionaryExpansionBatch2026.js")
    entries = re.findall(r'(?m)^\s{2,6}(?:char|hanzi)\s*:\s*"([^"]+)"', txt)
    missing_pinyin = len(re.findall(r'pinyin\s*:\s*""', txt))
    missing_hv = len(re.findall(r'hanViet\s*:\s*""', txt))
    return len(entries), len(set(entries)), missing_pinyin, missing_hv


def md_table(headers, rows):
    out = ["| " + " | ".join(headers) + " |", "|" + "|".join("---" for _ in headers) + "|"]
    for r in rows:
        out.append("| " + " | ".join(str(c) for c in r) + " |")
    return "\n".join(out)


def main():
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    arts = audit_articles()
    enrich = enrichment_chars({r["id"] for r in arts} | {"forbidden-city-3d-dissection"})
    for r in arts:
        r["enrich"] = enrich.get(r["id"], 0)
        r["total"] = r["chars"] + r["enrich"]

    lines = ["# Content Depth Audit (read-only)", ""]
    lines += [f"## 1. Essays: {len(arts)} detected in base files (+ forbidden-city-3d-dissection)", ""]
    weakest = sorted(arts, key=lambda r: r["total"])[:15]
    lines.append("### 15 shallowest essays (base + enrichment)\n")
    lines.append(md_table(
        ["id", "base", "enrich", "total", "sections", "EN", "file"],
        [(r["id"], r["chars"], r["enrich"], r["total"], r["sections"],
          "yes" if r["has_en"] else "NO", r["file"]) for r in weakest]))

    paintings = audit_paintings()
    lines += ["", f"## 2. Paintings: {len(paintings)} detected", ""]
    lines.append(f"- Missing EN parity key: {sum(1 for p in paintings if p[3] == 'NO')}")

    museum = audit_museum()
    lines += ["", f"## 3. Museum Artifacts: {len(museum)} detected", ""]
    lines.append(f"- Shortest 10 blocks: {', '.join(m[0] for m in sorted(museum, key=lambda x: x[1])[:10])}")

    provs = audit_provinces()
    lines += ["", f"## 4. Provinces: {len(provs)} detected", ""]
    lines.append(f"- Deep 3-level destinations coverage: {sum(1 for p in provs if p[2] == 'yes')} / {len(provs)}")

    d_tot, d_uniq, d_mp, d_mh = audit_dictionary()
    lines += ["", f"## 5. Dictionary: {d_tot} entries ({d_uniq} unique), empty pinyin={d_mp}, empty hanViet={d_mh}", ""]

    REPORT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"essays={len(arts)} paintings={len(paintings)} museum={len(museum)} provs={len(provs)} dict={d_tot}({d_uniq} uniq)")
    print(f"wrote {REPORT}")


if __name__ == "__main__":
    main()
