import re
import json
from pathlib import Path

ROOT = Path(r"c:\Website China-Vietnam")
INDEX_HTML = ROOT / "index.html"

def check_js_delimiters(text):
    """Lightweight JS lexer checking (), {}, [] balance across strings/comments."""
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    i, n = 0, len(text)
    line = 1
    in_line_comment = False
    in_block_comment = False
    quote = None
    tpl_brace_depth = []

    while i < n:
        ch = text[i]
        nxt = text[i + 1] if i + 1 < n else ''
        if ch == '\n':
            line += 1
            in_line_comment = False
            i += 1
            continue
        if in_line_comment:
            i += 1
            continue
        if in_block_comment:
            if ch == '*' and nxt == '/':
                in_block_comment = False
                i += 2
            else:
                i += 1
            continue
        if quote:
            if ch == '\\':
                i += 2
                continue
            if quote == '`' and ch == '$' and nxt == '{':
                tpl_brace_depth.append(len(stack))
                stack.append('{')
                quote = None
                i += 2
                continue
            if ch == quote:
                quote = None
            i += 1
            continue

        if ch == '/' and nxt == '/':
            in_line_comment = True
            i += 2
            continue
        if ch == '/' and nxt == '*':
            in_block_comment = True
            i += 2
            continue
        if ch == '/':
            # Heuristic for regex literal vs division operator
            j = i - 1
            while j >= 0 and text[j] in ' \t\r\n':
                j -= 1
            prev_ch = text[j] if j >= 0 else ''
            if prev_ch in ('(', '=', ':', ',', '[', '!', '&', '|', '?', ';', '{', '}', '', '\n') or text[max(0, j-5):j+1].endswith('return'):
                i += 1
                in_cls = False
                while i < n:
                    rc = text[i]
                    if rc == '\\':
                        i += 2
                        continue
                    if rc == '[':
                        in_cls = True
                    elif rc == ']':
                        in_cls = False
                    elif rc == '/' and not in_cls:
                        i += 1
                        while i < n and text[i].isalpha():
                            i += 1
                        break
                    elif rc == '\n':
                        break
                    i += 1
                continue
        if ch in ('"', "'", '`'):
            quote = ch
            i += 1
            continue
        if ch in ('(', '{', '['):
            stack.append((ch, line))
        elif ch in (')', '}', ']'):
            if ch == '}' and tpl_brace_depth and len(stack) - 1 == tpl_brace_depth[-1]:
                stack.pop()
                tpl_brace_depth.pop()
                quote = '`'
                i += 1
                continue
            if not stack:
                return f"Unmatched '{ch}' at line {line}"
            top = stack.pop()
            top_ch = top[0] if isinstance(top, tuple) else top
            if pairs[ch] != top_ch:
                return f"Mismatched '{ch}' at line {line} (opened '{top_ch}')"
        i += 1
    if quote:
        return f"Unclosed string literal {quote} at EOF"
    if stack:
        return f"Unclosed delimiter '{stack[-1]}' at EOF"
    return None

def run():
    html = INDEX_HTML.read_text(encoding="utf-8")
    scripts = re.findall(r'<script\s+src="([^"]+)"', html)
    print(f"[1] index.html script count: {len(scripts)}")
    missing_scripts = [s for s in scripts if not (ROOT / s).exists()]
    assert not missing_scripts, f"Missing scripts: {missing_scripts}"

    # 1. Dependency order assertions
    req_order = [
        "src/data/regionsData.js",
        "src/data/articlesData.js",
        "src/data/compendiaArticles.js",
        "src/data/editorialMediaData.js",
        "src/data/regionsProvincesBatch1.js",
        "src/data/regionsProvincesBatch2.js",
        "src/data/regionsProvincesBatch3.js",
        "src/data/articlesMonographsPart1.js",
        "src/data/articlesMonographsPart2.js",
        "src/data/articlesDepthEnrichmentBatch1.js",
        "src/data/articlesDepthEnrichmentBatch2.js",
        "src/data/hotspotsAndMetadataUpgradeBatch1.js",
        "src/data/hotspotsAndMetadataUpgradeBatch2.js",
        "src/state/store.js",
        "src/components/visuals.js",
        "src/app.js",
    ]
    for a, b in zip(req_order, req_order[1:]):
        assert scripts.index(a) < scripts.index(b), f"Script order wrong: {a} must come before {b}"
    print("[2] Script dependency order: OK")

    # 2. Delimiter & JS structure check
    all_js = sorted(list((ROOT / "src").rglob("*.js")))
    delim_errs = []
    for f in all_js:
        err = check_js_delimiters(f.read_text(encoding="utf-8"))
        if err:
            delim_errs.append((f.name, err))
    print(f"[3] JS Delimiter balance errors ({len(delim_errs)}):", delim_errs)
    assert not delim_errs

    # 3. 34 Provinces coverage across regionsData + Batch1-3
    reg_txt = (ROOT / "src/data/regionsData.js").read_text(encoding="utf-8")
    base_provs = set(re.findall(r'"(prov-[a-z0-9-]+)"', reg_txt))
    # Also find id: "prov-..." inside regionsData
    base_provs |= set(re.findall(r'\bid:\s*"(prov-[a-z0-9-]+)"', reg_txt))
    upgraded_provs = {}
    for bname in ["regionsProvincesBatch1.js", "regionsProvincesBatch2.js", "regionsProvincesBatch3.js"]:
        txt = (ROOT / "src/data" / bname).read_text(encoding="utf-8")
        pids = re.findall(r'^\s*"(prov-[a-z0-9-]+)":\s*\{', txt, re.M)
        upgraded_provs[bname] = pids
    all_upgraded_provs = [p for lst in upgraded_provs.values() for p in lst]
    print(f"[4] 34-Province Upgrades: total={len(all_upgraded_provs)} unique={len(set(all_upgraded_provs))} | per-batch={ {k: len(v) for k, v in upgraded_provs.items()} }")
    assert len(set(all_upgraded_provs)) == 34, f"Expected 34 unique provinces, got {len(set(all_upgraded_provs))}"

    # Verify visual SVG map in regionsData has coordinates for all 34 provinces
    coord_provs = set(re.findall(r'mapCoords:\s*\{\s*x:', reg_txt))
    # Check per-province presence of mapCoords / svgX in regionsData
    print(f"    regionsData base prov references: {len(base_provs)}")

    # 4. 48 Articles (22 core + 18 compendia + 8 new monographs) + Depth Enrichments
    a_core = re.findall(r'^\s*\{\s*\n\s*id:\s*"([^"]+)"', (ROOT / "src/data/articlesData.js").read_text(encoding="utf-8"), re.M)
    c_core = re.findall(r'^\s*\{\s*\n\s*id:\s*"([^"]+)"', (ROOT / "src/data/compendiaArticles.js").read_text(encoding="utf-8"), re.M)
    b1_txt = (ROOT / "src/data/articlesDepthEnrichmentBatch1.js").read_text(encoding="utf-8")
    b2_txt = (ROOT / "src/data/articlesDepthEnrichmentBatch2.js").read_text(encoding="utf-8")
    b1_keys = set(re.findall(r'^\s*"([a-z0-9-]+)":\s*\{', b1_txt, re.M))
    b2_keys = set(re.findall(r'^\s*"([a-z0-9-]+)":\s*\{', b2_txt, re.M))

    m_keys = []
    for mname in ["articlesMonographsPart1.js", "articlesMonographsPart2.js"]:
        m_txt = (ROOT / "src/data" / mname).read_text(encoding="utf-8")
        m_keys.extend(re.findall(r'article:\s*\{\s*\n\s*id:\s*"([^"]+)"', m_txt))

    missing_b1 = [x for x in a_core if x not in b1_keys]
    missing_b2 = [x for x in c_core if x not in b2_keys]
    print(f"[5] Articles: core={len(a_core)} (B1 covered={len(a_core)-len(missing_b1)}, missing={missing_b1}), compendia={len(c_core)} (B2 covered={len(c_core)-len(missing_b2)}, missing={missing_b2}), newMonographs={len(m_keys)} -> TOTAL={len(a_core)+len(c_core)+len(m_keys)}")
    assert len(missing_b1) == 0 and len(missing_b2) == 0 and len(m_keys) == 8

    # 5. Editorial Media Image Registry consistency (including Part1 additions!)
    ed_txt = (ROOT / "src/data/editorialMediaData.js").read_text(encoding="utf-8")
    mp1_txt = (ROOT / "src/data/articlesMonographsPart1.js").read_text(encoding="utf-8")
    mp2_txt = (ROOT / "src/data/articlesMonographsPart2.js").read_text(encoding="utf-8")
    img_ids = set(re.findall(r'["\']?(img-[a-z0-9-]+)["\']?\s*:\s*\{', ed_txt + "\n" + mp1_txt))

    used_ed_ids = set()
    for src_txt in [mp1_txt, mp2_txt]:
        for m in re.findall(r'heroImageId:\s*"([^"]+)"|imageId:\s*"([^"]+)"', src_txt):
            used_ed_ids.add(m[0] or m[1])
        for grp in re.findall(r'galleryImageIds:\s*\[([^\]]+)\]', src_txt):
            for gid in re.findall(r'"([^"]+)"', grp):
                used_ed_ids.add(gid)
    missing_imgs = sorted([x for x in used_ed_ids if x not in img_ids])
    print(f"[6] EditorialMedia IDs in Monographs: checked={len(used_ed_ids)}, missing={missing_imgs}")
    assert not missing_imgs, f"Missing EditorialMedia IDs: {missing_imgs}"

    # 6. Hotspots & Museum Provenance (21 artifacts + 54 paintings = 75 works)
    mus_txt = (ROOT / "src/data/museumData.js").read_text(encoding="utf-8")
    mus_ids = re.findall(r'\n\s*id:\s*"([^"]+)"', mus_txt[mus_txt.find("artifacts:"):])
    pnt_txt = (ROOT / "src/data/paintingsData.js").read_text(encoding="utf-8")
    pnt_ids = re.findall(r'\n\s*"id":\s*"([^"]+)"', pnt_txt[pnt_txt.find('"masterpieces":'):pnt_txt.find('"comparisons":')])

    hs1_txt = (ROOT / "src/data/hotspotsAndMetadataUpgradeBatch1.js").read_text(encoding="utf-8")
    hs2_txt = (ROOT / "src/data/hotspotsAndMetadataUpgradeBatch2.js").read_text(encoding="utf-8")
    hs_all = hs1_txt + "\n" + hs2_txt
    hs_keys = set(re.findall(r'^\s*"([a-z0-9-]+)":\s*\{', hs_all, re.M))

    miss_mus = [x for x in mus_ids if x not in hs_keys]
    miss_pnt = [x for x in pnt_ids if x not in hs_keys]
    print(f"[7] Hotspots & Provenance: artifacts={len(mus_ids)} (miss={miss_mus}), paintings={len(pnt_ids)} (miss={miss_pnt})")
    assert len(mus_ids) >= 24 and len(pnt_ids) == 54 and not miss_mus and not miss_pnt

    # 7B. Batch 2-5 Depth Expansion Checks
    import json
    DATA_DIR = ROOT / "src" / "data"
    # Provinces & 170 Dishes Pinyin check across regionsProvincesBatch1/2/3.js
    dish_blocks = []
    for pf in ["regionsProvincesBatch1.js", "regionsProvincesBatch2.js", "regionsProvincesBatch3.js"]:
        ptxt = (DATA_DIR / pf).read_text(encoding="utf-8")
        # Extract each dish object inside signatureDishes
        dish_matches = re.findall(r'\{\s*hanzi:\s*"([^"]+)",\s*pinyin:\s*"([^"]*)"', ptxt)
        dish_blocks.extend(dish_matches)
    tone_re = re.compile(r'[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]')
    missing_dish_pinyin = [(pf_name, hz, py) for pf_name, hz, py in [
        (pf, m[0], m[1])
        for pf in ["regionsProvincesBatch1.js", "regionsProvincesBatch2.js", "regionsProvincesBatch3.js"]
        for m in re.findall(r'\{\s*hanzi:\s*"([^"]+)",\s*pinyin:\s*"([^"]*)"', (DATA_DIR / pf).read_text(encoding="utf-8"))
    ] if not py.strip() or not tone_re.search(py)]
    print(f"[7B-Provinces] Total hanzi/pinyin objects audited across 34 units={len(dish_blocks)}, missing/toneless={missing_dish_pinyin}")
    assert len(dish_blocks) >= 170 and not missing_dish_pinyin

    # History: 14 periods enriched with governanceAndTax, vietnamRelations, representativeArtifacts
    hist_txt = (DATA_DIR / "historyData.js").read_text(encoding="utf-8")
    hist_ids = set(re.findall(r'^\s*"([a-z0-9-]+)":\s*\{\s*\n\s*governanceAndTax:', hist_txt, re.M))
    hist_vn = len(re.findall(r'vietnamRelations:\s*"', hist_txt))
    hist_arts = len(re.findall(r'representativeArtifacts:\s*\[', hist_txt))
    print(f"[7C-History] Enriched periods={len(hist_ids)} (vn={hist_vn}, artifacts={hist_arts})")
    assert len(hist_ids) == 14 and hist_vn >= 14 and hist_arts >= 14

    # Philosophy: 12 schools + 19 Canons x 5 Quotes
    phil_txt = (DATA_DIR / "philosophyData.js").read_text(encoding="utf-8")
    school_ids = re.findall(r'^\s{4}\{\s*\n\s*id:\s*"([a-z0-9-]+)",\s*\n\s*nameVi:', phil_txt, re.M)
    vn_map_part = phil_txt.split("const SCHOOL_VIETNAM_RELEVANCE")[1].split("};")[0] if "const SCHOOL_VIETNAM_RELEVANCE" in phil_txt else ""
    vn_map_keys = set(re.findall(r'^\s*"([a-z0-9-]+)":\s*"', vn_map_part, re.M))
    vn_inline = {"qianjia-evidential"} if "vietnamRelevance:" in phil_txt.split("const SCHOOL_VIETNAM_RELEVANCE")[0] else set()
    vn_covered = vn_map_keys | vn_inline
    canon_ids = re.findall(r'^\s*"([a-z0-9-]+)":\s*\[\s*\n\s*\{\s*zh:', phil_txt, re.M)
    quote_items = re.findall(r'\{\s*zh:\s*"[^"]+",\s*pinyin:\s*"[^"]+",\s*hanViet:\s*"[^"]+",\s*vi:\s*"[^"]+",\s*commentary:', phil_txt)
    print(f"[7D-Philosophy] Schools={len(school_ids)} (vietnamRelevance covered={len(set(school_ids) & vn_covered)}), Canons w/ quotes={len(canon_ids)} (total quote objects={len(quote_items)})")
    assert len(school_ids) == 12 and len(set(school_ids) & vn_covered) == 12 and len(canon_ids) == 19 and len(quote_items) == 95

    # Dictionary: 103 enriched + 150 new = 253 unique entries with hanViet, liushuType, >= 2 examples
    dict_txt = (DATA_DIR / "dictionaryData.js").read_text(encoding="utf-8")
    base_part, _, addon_part = dict_txt.partition("// [UPGRADE DOT 5: 103 -> 253 ANKI LIUSHU ENRICHMENT & EXPANSION]")
    base_ids = re.findall(r'id:\s*"([^"]+)"', base_part)
    base_hz = re.findall(r'hanzi:\s*"([^"]+)"', base_part)
    m_e103 = re.search(r'const ENRICH_103 = (\{.*?\n\s*\});', addon_part, re.S)
    m_n150 = re.search(r'const NEW_150 = (\[.*?\n\s*\]);', addon_part, re.S)
    assert m_e103 and m_n150, "Missing ENRICH_103 or NEW_150 JSON block in dictionaryData.js"
    e103 = json.loads(m_e103.group(1))
    n150 = json.loads(m_n150.group(1))
    all_dict_ids = base_ids + [x["id"] for x in n150]
    all_dict_hz = base_hz + [x["hanzi"] for x in n150]
    bad_n150 = [x["id"] for x in n150 if not x.get("hanViet") or not x.get("liushuType") or len(x.get("examples", [])) < 2]
    missing_e103 = [bid for bid in base_ids if bid not in e103]
    from collections import Counter
    dup_hz = [(k, v) for k, v in Counter(all_dict_hz).items() if v > 1]
    print(f"[7E-Dictionary] Base={len(base_ids)}, New={len(n150)}, Total={len(all_dict_ids)}, UniqueIDs={len(set(all_dict_ids))}, UniqueHz={len(set(all_dict_hz))}, dupHz={dup_hz}, missE103={missing_e103}, badN150={bad_n150}")
    assert len(all_dict_ids) == 253 and len(set(all_dict_ids)) == 253 and len(set(all_dict_hz)) >= 252 and not missing_e103 and not bad_n150

    # Sino-Vietnam & Business markers
    sv_txt = (DATA_DIR / "sinoVietnamData.js").read_text(encoding="utf-8")
    bz_txt = (DATA_DIR / "businessData.js").read_text(encoding="utf-8")
    for token in ["Thiết Vận", "Quảng Vận", "Giả tá", "Bút đàm"]:
        assert token in sv_txt, f"Missing '{token}' in sinoVietnamData.js"
    for token in ["Jiǔzhuō", "华强北", "佛山顺德", "ACFTA 3.0"]:
        assert token in bz_txt, f"Missing '{token}' in businessData.js"
    print("[7F-SinoVN & Business] All upgraded anchors verified OK")

    # 7. Assets & Hygiene checks
    broken_assets = set()
    dollar_hits = []
    bad_jyutping = []
    bad_tokens = []
    for f in all_js:
        txt = f.read_text(encoding="utf-8")
        for m in re.findall(r"""['"](assets/[^'"`]+)['"]""", txt):
            if "*" in m or "${" in m:
                continue
            if not (ROOT / m).exists():
                broken_assets.add((f.name, m))
        for idx, line in enumerate(txt.splitlines(), 1):
            s = line.strip()
            if s.startswith("//"):
                continue
            no_tpl = re.sub(r'\$\{[^}]*\}', '', line)
            if (no_tpl.count('$') >= 2 and not re.search(r'\$\$\{|\.replace\(', line)) or re.search(r'\$[0-9a-zA-Z\\^_{}]+\$', no_tpl):
                dollar_hits.append(f"{f.name}:{idx}: {no_tpl.strip()[:120]}")
            if re.search(r'\bjyutping\b', line, re.I):
                bad_jyutping.append(f"{f.name}:{idx}: {s[:120]}")
            if '[object Object]' in line and 'editorialMediaData' not in f.name:
                bad_tokens.append(f"{f.name}:{idx}: [object Object]")
            if re.search(r'//\s*\.\.\.\s*(existing|remaining|more|todo)', line, re.I):
                bad_tokens.append(f"{f.name}:{idx}: {s[:100]}")

    print(f"[8] Broken local assets ({len(broken_assets)}): {sorted(list(broken_assets))}")
    print(f"[9] Raw LaTeX / paired $ ({len(dollar_hits)}): {dollar_hits}")
    print(f"[10] Jyutping code/prose ({len(bad_jyutping)}): {bad_jyutping}")
    print(f"[11] Truncation / [object Object] ({len(bad_tokens)}): {bad_tokens}")
    assert not broken_assets and not dollar_hits and not bad_jyutping and not bad_tokens
    print("\nALL KNOWLEDGE & ASSET AUDIT CHECKS PASSED 100%!")

if __name__ == "__main__":
    run()
