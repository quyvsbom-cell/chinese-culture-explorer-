"""Fetch subject-exact Wikidata P18 & Wikimedia Commons photos for all V8 Packs.

Covers:
  - Pack 2 GI (4) & CSC (6) dedupe replacements (auto-purging old replaced files)
  - Pack 1: lessonsHP11 (6), instruments16 (16), operaAndPieces24 (24), mask-01/02 (2)
  - Pack 3: ethnicCommunitiesA/B (24)
  - Pack 4: modernWorks20 (20), modernAuthors16 (16)
  - Pack 5: urbanGreenCases16 (16), lessonsHP12 (6)

Usage:
  uv run python scripts/fetch_v8_pack_images.py --purge-replacements --contact-sheets
  uv run python scripts/fetch_v8_pack_images.py --groups opera literature --contact-sheets
"""

from __future__ import annotations

import argparse
import hashlib
import json
import pathlib
import re
import subprocess
import sys
import time
import urllib.parse

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))
import fetch_v8_authentic_images as F  # noqa: E402

V8_DIR = ROOT / "src" / "data" / "v8"
PROVENANCE_PATH = ROOT / "src" / "data" / "imageProvenanceV8.json"
CONTACT_PACKS_DIR = pathlib.Path(
    r"C:\Users\admin\.gemini\antigravity\brain\563fc13b-fb97-4891-9990-9294dff2c297\scratch\contact_sheets_v8_packs"
)

OVERRIDE_QUERIES: dict[str, list[str]] = {
    "gi-v7-07": ["Sichuan pepper", "Zanthoxylum spice", "花椒粒"],
    "gi-v7-09": ["Dried bamboo shoots", "Bamboo shoot", "笋干"],
    "gi-v7-12": ["Eriocheir sinensis", "Chinese mitten crab", "大闸蟹"],
    "csc-v7-02": ["Beijing Normal University", "北京师范大学"],
    "csc-v7-03": ["Hunan University", "湖南大学"],
    "v8-m11-l1": ["Kunqu", "昆曲"],
    "v8-m11-l3": ["Guqin", "古琴"],
    "v8-m11-l4": ["Bianzhong", "曾侯乙编钟"],
    "inst-03": ["Bianqing", "编磬", "Stone chime"],
    "inst-05": ["Guzheng", "古筝"],
    "inst-06": ["Erhu", "二胡"],
    "inst-07": ["Dizi flute", "竹笛"],
    "inst-13": ["Ruan lute", "中阮", "阮咸"],
    "inst-14": ["Konghou", "箜篌"],
    "inst-15": ["Jinghu", "京胡"],
    "inst-16": ["Chinese drum", "Tanggu drum", "堂鼓"],
    "op-05": ["关汉卿", "Dou E", "京剧 剧照"],
    "op-06": ["Chinese pipa", "琵琶", "琵琶记"],
    "op-07": ["霸王别姬", "Mei Lanfang", "Peking Opera"],
    "op-09": ["Empty Fort Strategy", "Jingju opera", "空城计 京剧"],
    "op-15": ["Cantonese opera", "粤剧"],
    "op-18": ["Guqin scroll", "Chinese zither", "伯牙"],
    "op-24": ["Erhu", "二泉映月", "阿炳"],
    "mask-02": ["Peking opera face", "京剧脸谱", "Opera mask China"],
    "ethnic-01": ["Potala Palace", "Tibetan monastery", "藏族"],
    "ethnic-03": ["Zhuang ethnic", "壮族", "Guangxi terrace"],
    "ethnic-04": ["Miao people", "苗族", "Guizhou Miao"],
    "ethnic-05": ["Yi people", "彝族", "Torch festival Yunnan"],
    "ethnic-06": ["Lijiang Old Town", "纳西族", "Dongba"],
    "ethnic-07": ["Bai people", "白族", "Dali Old Town"],
    "ethnic-08": ["Xishuangbanna Dai", "傣族", "Dai temple Yunnan"],
    "ethnic-09": ["Dong drum tower", "侗族", "Zhaoxing"],
    "ethnic-17": ["Bouyei", "布依族", "Guizhou village"],
    "ethnic-18": ["Taoping Qiang", "羌族", "Qiang watchtower"],
    "ethnic-20": ["Oroqen", "鄂伦春", "Inner Mongolia forest"],
    "ethnic-21": ["Nujiang river", "傈僳族", "Lisu Yunnan"],
    "lit-mod-03": ["Ba Jin", "巴金", "Chengdu courtyard"],
    "lit-mod-09": ["Tsinghua library", "钱锺书", "Fortress Besieged"],
    "lit-mod-12": ["Gaoyou", "汪曾祺", "高邮湖"],
    "lit-mod-14": ["Zhejiang old town", "余华", "Wuzhen canal"],
    "lit-mod-15": ["Shaanxi loess village", "白鹿原", "Shaanxi"],
    "lit-mod-20": ["Altay Xinjiang", "阿勒泰", "Kanas Lake"],
    "auth-02": ["Hu Shih", "胡适"],
    "auth-03": ["Ba Jin", "巴金"],
    "auth-04": ["Lao She", "老舍"],
    "auth-08": ["Zhu Ziqing", "朱自清"],
    "auth-09": ["Qian Zhongshu", "钱钟书"],
    "auth-10": ["Eileen Chang", "张爱玲"],
    "auth-11": ["Cao Yu", "曹禺"],
    "auth-12": ["Wang Zengqi", "汪曾祺", "高邮"],
    "auth-15": ["Yu Hua author", "Yu Hua writer", "余华 活着"],
    "urban-05": ["Beijing Hutong", "北京胡同", "Siheyuan"],
    "urban-06": ["Yangshan Port", "洋山港", "Shanghai container"],
    "urban-10": ["Baihetan Dam", "Three Gorges Dam", "白鹤滩"],
    "urban-14": ["Youyiguan", "友谊关", "Pingxiang Guangxi"],
    "herb-astragalus": ["Astragalus membranaceus", "黄芪"],
    "herb-honeysuckle": ["Lonicera japonica", "金银花"],
}


def extract_pack_targets() -> dict[str, list[tuple[str, str, str, str, list[str]]]]:
    node_code = r"""
const fs = require('fs');
const vm = require('vm');
const sb = { window: {} };
sb.globalThis = sb.window;
vm.createContext(sb);
for (let i = 1; i <= 5; i++) {
  vm.runInContext(fs.readFileSync('src/data/v8/V8_Pack' + i + '.js', 'utf8'), sb);
}
const p1 = sb.window.CCE_V8_PACK1;
const p2 = sb.window.CCE_V8_PACK2;
const p3 = sb.window.CCE_V8_PACK3;
const p4 = sb.window.CCE_V8_PACK4;
const p5 = sb.window.CCE_V8_PACK5;

const out = {
  gi_csc_repl: [
    ...p2.replacementsGiV7.map(x => [x.replaceId, x.newZh, 'assets/images/gis/' + x.replaceId + '.jpg', x.wikidataQid || '', x.wikimediaQueries || []]),
    ...p2.replacementsCscV7.map(x => [x.replaceId, x.newZh, 'assets/images/universities/' + x.replaceId + '.jpg', x.wikidataQid || '', x.wikimediaQueries || []]),
  ],
  lessons_v8: [
    ...p1.lessonsHP11.map(x => [x.id, x.titleZh || x.titleVi, 'assets/images/lessons/' + x.id + '.jpg', x.wikidataQid || '', x.wikimediaQueries || []]),
    ...p5.lessonsHP12.map(x => [x.id, x.titleZh || x.titleVi, 'assets/images/lessons/' + x.id + '.jpg', x.wikidataQid || '', x.wikimediaQueries || []]),
  ],
  opera: [
    ...p1.instruments16.map(x => [x.id, x.zh, 'assets/images/opera/' + x.id + '.jpg', x.wikidataQid || '', x.wikimediaQueries || []]),
    ...p1.operaAndPieces24.map(x => [x.id, x.titleZh || x.titleVi, 'assets/images/opera/' + x.id + '.jpg', x.wikidataQid || '', x.wikimediaQueries || []]),
    ['mask-01', '关羽脸谱', 'assets/images/opera/mask-01.jpg', '', ['Guan Yu Peking opera', 'Peking opera red face mask', '京剧 关羽脸谱']],
    ['mask-02', '包拯脸谱', 'assets/images/opera/mask-02.jpg', '', ['Bao Zheng Peking opera', 'Peking opera black face', '京剧 包拯脸谱']],
  ],
  ethnic: [
    ...[...p3.ethnicCommunitiesA, ...p3.ethnicCommunitiesB].map(x => [x.id, x.zh, 'assets/images/ethnic/' + x.id + '.jpg', x.wikidataQid || '', x.wikimediaQueries || []]),
  ],
  literature: [
    ...p4.modernWorks20.map(x => [x.id, x.titleZh || x.titleVi, 'assets/images/literature/' + x.id + '.jpg', x.wikidataQid || '', x.wikimediaQueries || []]),
    ...p4.modernAuthors16.map(x => [x.id, x.nameZh || x.nameVi, 'assets/images/literature/' + x.id + '.jpg', x.wikidataQid || '', x.wikimediaQueries || []]),
  ],
  urban: [
    ...p5.urbanGreenCases16.map(x => [x.id, x.titleZh || x.titleVi, 'assets/images/urban/' + x.id + '.jpg', x.wikidataQid || '', x.wikimediaQueries || []]),
  ],
  herbs_v8: [
    ['herb-ginseng', '长白山人参', 'assets/images/herbs/herb-ginseng.jpg', 'Q182881', ['Panax ginseng root', 'Fresh Panax ginseng', '人参 药材']],
    ['herb-astragalus', '黄芪', 'assets/images/herbs/herb-astragalus.jpg', 'Q157268', ['Astragalus propinquus', 'Astragalus root', '黄芪']],
    ['herb-honeysuckle', '金银花', 'assets/images/herbs/herb-honeysuckle.jpg', 'Q161116', ['Lonicera japonica flower', 'Japanese honeysuckle flower', '金银花']],
  ],
};
process.stdout.write(JSON.stringify(out));
"""
    res = subprocess.run(["node", "-e", node_code], cwd=str(ROOT), capture_output=True, text=True, check=True)
    raw = json.loads(res.stdout)
    return {
        g: [(a, b, c, d, list(e)) for a, b, c, d, e in arr]
        for g, arr in raw.items()
    }


def query_wikidata_p18(qid: str, used_titles: set[str]) -> dict | None:
    if not re.match(r"^Q\d+$", str(qid or "").strip()):
        return None
    wd_url = (
        f"https://www.wikidata.org/w/api.php?action=wbgetclaims&entity={qid.strip()}&property=P18&format=json"
    )
    try:
        wd = F.http_get_json(wd_url)
    except Exception:
        return None
    claims = (wd.get("claims") or {}).get("P18") or []
    if not claims:
        return None
    filename = ((claims[0].get("mainsnak") or {}).get("datavalue") or {}).get("value")
    if not isinstance(filename, str) or not filename.strip():
        return None
    title = f"File:{filename.strip()}"
    if title in used_titles or not F.title_acceptable(title):
        return None
    params = urllib.parse.urlencode(
        {
            "action": "query",
            "titles": title,
            "prop": "imageinfo",
            "iiprop": "url|size|mime|extmetadata",
            "iiurlwidth": "1100",
            "format": "json",
        }
    )
    try:
        cm = F.http_get_json(f"https://commons.wikimedia.org/w/api.php?{params}")
    except Exception:
        return None
    pages = list((cm.get("query") or {}).get("pages", {}).values())
    if not pages:
        return None
    ii = (pages[0].get("imageinfo") or [{}])[0]
    if ii.get("mime") not in ("image/jpeg", "image/png"):
        return None
    w = int(ii.get("width") or 0)
    h = int(ii.get("height") or 0)
    if w < 450 or h < 300:
        return None
    ratio = w / float(h)
    if ratio < 0.38 or ratio > 3.0:
        return None
    ext = ii.get("extmetadata") or {}
    ok_lic, lic_name = F.license_ok(ext)
    if not ok_lic:
        return None
    dl_url = ii.get("thumburl") or ii.get("url")
    if not dl_url:
        return None
    artist = re.sub(r"<[^>]+>", "", str((ext.get("Artist") or {}).get("value") or "Wikimedia Contributor")).strip()
    return {
        "title": title,
        "commonsUrl": ii.get("descriptionurl") or f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(title.replace(' ', '_'))}",
        "dlUrl": dl_url,
        "width": w,
        "height": h,
        "license": lic_name,
        "author": artist[:100],
        "query": f"wikidata:{qid}",
        "sourceApi": "wikidata-P18",
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Fetch Wikidata/Commons images for V8 Packs.")
    parser.add_argument("--groups", nargs="+", default=[], help="Groups: gi_csc_repl, lessons_v8, opera, ethnic, literature, urban")
    parser.add_argument("--purge-replacements", action="store_true", help="Purge old V7 GI/CSC replaced files before fetching")
    parser.add_argument("--contact-sheets", action="store_true", help="Render 12-tile contact sheets")
    args = parser.parse_args()

    groups = extract_pack_targets()
    selected = args.groups or list(groups.keys())

    prov: dict = {}
    if PROVENANCE_PATH.is_file():
        prov = json.loads(PROVENANCE_PATH.read_text(encoding="utf-8"))

    if args.purge_replacements and "gi_csc_repl" in groups:
        for eid, _zh, rel, _qid, _qs in groups["gi_csc_repl"]:
            (ROOT / rel).unlink(missing_ok=True)
            prov.pop(eid, None)
        print("Purged old V7 GI/CSC replacement targets (10 keys).")

    md5s, shas = F.load_existing_hashes()
    used_titles: set[str] = {str(v.get("commonsTitle")) for v in prov.values() if isinstance(v, dict) and v.get("commonsTitle")}

    F.CONTACT_DIR = CONTACT_PACKS_DIR
    misses: list[tuple[str, str, str]] = []
    ok_count = 0

    for gname in selected:
        items = groups.get(gname, [])
        print(f"\n=== GROUP {gname.upper()} ({len(items)} targets) ===", flush=True)
        batch_new: list[pathlib.Path] = []
        for eid, zh, rel, qid, qs in items:
            dest = ROOT / rel
            dest.parent.mkdir(parents=True, exist_ok=True)
            if dest.is_file() and dest.stat().st_size > 6000 and eid in prov:
                ok_count += 1
                continue

            if eid in OVERRIDE_QUERIES:
                qs = OVERRIDE_QUERIES[eid]
                hit = F.search_commons(qs, used_titles)
                if hit:
                    hit["sourceApi"] = "commons-override"
            else:
                hit = query_wikidata_p18(qid, used_titles)
                if not hit:
                    hit = F.search_commons(qs, used_titles)
                    if hit:
                        hit["sourceApi"] = "commons-search"
            if not hit:
                print(f"  [MISS] {eid} ({zh}): qid={qid} qs={qs}", flush=True)
                misses.append((gname, eid, zh))
                time.sleep(0.18)
                continue

            try:
                raw = F.download_bytes(hit["dlUrl"])
            except Exception as exc:
                print(f"  [ERR] {eid} ({zh}): {exc}", flush=True)
                misses.append((gname, eid, zh))
                continue

            if len(raw) < 6000:
                print(f"  [SMALL] {eid} ({zh}): {len(raw)} B", flush=True)
                misses.append((gname, eid, zh))
                continue

            sha = hashlib.sha256(raw).hexdigest()
            md5 = hashlib.md5(raw).hexdigest()
            if sha in shas or md5 in md5s or hit["title"] in used_titles:
                # Retry commons search skipping already-tried P18 title if P18 collided
                used_titles.add(hit["title"])
                fallback_hit = F.search_commons(qs, used_titles)
                if not fallback_hit:
                    print(f"  [DUP] {eid} ({zh}): {hit['title']}", flush=True)
                    misses.append((gname, eid, zh))
                    continue
                raw = F.download_bytes(fallback_hit["dlUrl"])
                sha = hashlib.sha256(raw).hexdigest()
                md5 = hashlib.md5(raw).hexdigest()
                if len(raw) < 6000 or sha in shas or md5 in md5s:
                    print(f"  [DUP2] {eid} ({zh}): {fallback_hit['title']}", flush=True)
                    misses.append((gname, eid, zh))
                    continue
                hit = fallback_hit
                hit["sourceApi"] = "commons-search"

            dest.write_bytes(raw)
            shas.add(sha)
            md5s.add(md5)
            used_titles.add(hit["title"])
            prov[eid] = {
                "targetFile": rel,
                "zh": zh,
                "group": gname,
                "sourceApi": hit.get("sourceApi", "commons-search"),
                "wikidataQid": qid,
                "commonsTitle": hit["title"],
                "commonsUrl": hit["commonsUrl"],
                "license": hit["license"],
                "author": hit["author"],
                "origDimensions": [hit["width"], hit["height"]],
                "queryUsed": hit["query"],
                "md5": md5,
            }
            batch_new.append(dest)
            ok_count += 1
            print(f"  [OK] {eid} -> {rel} <- {hit['title']} ({len(raw)//1024} KB)", flush=True)
            time.sleep(0.18)

        if batch_new:
            F.normalize_to_jpeg(batch_new, max_px=1200)
            for p_img in batch_new:
                new_bytes = p_img.read_bytes()
                new_md5 = hashlib.md5(new_bytes).hexdigest()
                md5s.add(new_md5)
                shas.add(hashlib.sha256(new_bytes).hexdigest())
                for eid, meta in prov.items():
                    if meta.get("targetFile") == p_img.relative_to(ROOT).as_posix():
                        meta["md5"] = new_md5
                        break

        PROVENANCE_PATH.write_text(json.dumps(prov, ensure_ascii=False, indent=2), encoding="utf-8")
        if args.contact_sheets:
            F.render_contact_sheets(prov, [(a, b, c, e) for a, b, c, _d, e in items], gname)

    print(f"\nDONE: resolved_or_existing={ok_count}, misses={len(misses)}")
    for g, eid, zh in misses:
        print(f"  MISSING: ({g!r}, {eid!r}, {zh!r})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
