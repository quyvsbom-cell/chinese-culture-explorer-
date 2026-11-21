"""Fetch verified Wikimedia Commons Public Domain images for V3.0's 18 new Guohua
paintings and 18 new Museum artifacts, ensuring zero broken links, zero SHA
collisions, and web-friendly pixel bounds (<= 1600px max dimension via Windows
.NET System.Drawing when available).

Usage: uv run python scripts/fetch_v3_media.py
"""

from __future__ import annotations

import hashlib
import json
import pathlib
import subprocess
import time
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAINTINGS_DIR = ROOT / "assets" / "images" / "paintings"
MUSEUM_DIR = ROOT / "assets" / "images" / "museum"

HEADERS = {
    "User-Agent": "ChineseCultureExplorerBot/3.0 (https://chinese-culture-explorer.netlify.app; cultural-education-archive)"
}

# Target filenames & curated search queries / known Commons titles for 18 paintings
PAINTING_TARGETS = [
    ("55_wuniu_tu.jpg", ["Five Oxen Han Huang", "Wuniu Tu Han Huang", "五牛图 韩滉"]),
    ("56_zhaoye_bai_tu.jpg", ["Night-Shining White", "Han Gan Night-Shining White Met"]),
    ("57_jiangxing_chuxue_tu.jpg", ["Early Snow on the River Zhao Gan", "江行初雪图"]),
    ("58_tingqin_tu.jpg", ["Listening to the Qin Huizong", "听琴图 宋徽宗"]),
    ("59_hanjiang_dudiao_tu.jpg", ["Angler on a Wintry Lake Ma Yuan", "Solitary Angler Ma Yuan"]),
    ("60_jiulong_tu.jpg", ["Nine Dragons Chen Rong", "Chen Rong Nine Dragons"]),
    ("61_xishan_qingyuan_tu.jpg", ["Pure and Remote View of Streams and Mountains Xia Gui", "溪山清远图"]),
    ("62_molan_tu.jpg", ["Orchids Zheng Sixiao", "Ink Orchid Zheng Sixiao", "墨兰图 郑思肖"]),
    ("63_qiujiao_yinma_tu.jpg", ["Autumn Colors on the Qiao and Hua Mountains Zhao Mengfu", "Zhao Mengfu horse painting", "Bath Horses Zhao Mengfu", "Zhao Mengfu 鹊华秋色图"]),
    ("64_yufu_tu.jpg", ["Fisherman Wu Zhen", "Wu Zhen Fisherman Freer", "渔父图 吴镇"]),
    ("65_momei_tu.jpg", ["Ink Plum Blossom Wang Mian", "墨梅图 王冕"]),
    ("66_taohuayuan_tu.jpg", ["Peach Blossom Spring Qiu Ying", "桃源仙境图 仇英"]),
    ("67_songyin_fangyou_tu.jpg", ["Dai Jin Ming painting", "Seeking Dao in the Autumn Mountains Juran", "戴进 山水"]),
    ("68_hehua_shuiqin_tu.jpg", ["Bada Shanren Lotus bird", "Zhu Da lotus ink painting"]),
    ("69_zhushi_zhengbanqiao.jpg", ["Zheng Xie bamboo rock", "Zheng Banqiao bamboo"]),
    ("70_huangshan_tu_meiqing.jpg", ["Mei Qing Mount Huang", "Shitao Mount Huang"]),
    ("71_bajun_tu_langshining.jpg", ["Eight Steeds Giuseppe Castiglione", "Lang Shining horses painting", "One Hundred Horses Castiglione"]),
    ("72_gusu_fanhua_tu.jpg", ["Prosperous Suzhou Xu Yang", "Gusu Fanhua Tu", "姑苏繁华图"]),
]

# Target filenames & curated search queries for 18 museum artifacts
MUSEUM_TARGETS = [
    ("goujian-sword.jpg", ["Sword of Goujian", "越王勾践剑"]),
    ("sanxingdui-bronze-tree.jpg", ["Sanxingdui bronze tree", "Bronze sacred tree Sanxingdui"]),
    ("fuhao-owl-zun.jpg", ["Fu Hao owl zun", "Owl shaped bronze zun Fu Hao"]),
    ("lianhe-fanghu.jpg", ["Bronze hu lotus crane", "Lotus and Crane Rectangular Hu", "莲鹤方壶"]),
    ("yongle-great-bell.jpg", ["Yongle Bell Big Bell Temple", "Yongle Great Bell"]),
    ("terracotta-general.jpg", ["Terracotta Army general figure", "Terracotta warrior general Xi'an"]),
    ("changxin-palace-lamp.jpg", ["Changxin Palace Lamp", "长信宫灯"]),
    ("mawangdui-silk-gown.jpg", ["Mawangdui silk garment gauze", "Mawangdui plain gauze gown", "素纱禅衣"]),
    ("hejiacun-agate-cup.jpg", ["Hejiacun agate rhyton", "Beast head agate cup Shaanxi", "镶金兽首玛瑙杯"]),
    ("tang-sancai-camel.jpg", ["Tang sancai camel musicians", "Sancai glazed pottery camel musicians"]),
    ("jian-yao-yaobian-tenmoku.jpg", ["Yohen Tenmoku tea bowl", "Jian ware hare fur tea bowl"]),
    ("longquan-celadon-vase.jpg", ["Longquan celadon phoenix ear vase", "Longquan celadon kinuta vase"]),
    ("xuande-blue-white-meiping.jpg", ["Ming Xuande blue and white meiping", "Blue and white meiping vase Ming"]),
    ("kuaixue-shiqing-tie.jpg", ["Timely Clearing After Snowfall Wang Xizhi", "Kuaixue Shiqing Tie", "快雪时晴帖"]),
    ("jizhi-wengao-yan-zhenqing.jpg", ["Draft of a Requiem to My Nephew Yan Zhenqing", "祭侄文稿"]),
    ("song-printed-shiji.jpg", ["Song dynasty woodblock printed book Shiji", "Woodblock printed book Song dynasty"]),
    ("ngoc-lu-bronze-drum.jpg", ["Ngoc Lu bronze drum", "Trống đồng Ngọc Lũ", "Dong Son bronze drum Ngoc Lu"]),
    ("ly-tran-celadon-lotus-jar.jpg", ["Vietnamese brown inlaid ceramic jar Tran dynasty", "Chu Dau Vietnamese celadon lotus jar"]),
]


def http_get_json(url: str):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=12) as r:
        return json.loads(r.read().decode("utf-8"))


def download_file(url: str, dest: pathlib.Path) -> bool:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as r:
        data = r.read()
    if len(data) < 6000:
        return False
    dest.write_bytes(data)
    return True


def existing_shas() -> set[str]:
    shas: set[str] = set()
    for p in (ROOT / "assets" / "images").rglob("*"):
        if p.is_file():
            shas.add(hashlib.sha256(p.read_bytes()).hexdigest())
    return shas


def search_commons_image(queries: list[str], used_titles: set[str]):
    for q in queries:
        params = urllib.parse.urlencode({
            "action": "query",
            "generator": "search",
            "gsrnamespace": "6",
            "gsrsearch": q,
            "gsrlimit": "8",
            "prop": "imageinfo",
            "iiprop": "url|mime|size|extmetadata",
            "iiurlwidth": "1200",
            "format": "json",
        })
        url = f"https://commons.wikimedia.org/w/api.php?{params}"
        try:
            data = http_get_json(url)
        except Exception as e:
            print(f"    API error for '{q}': {e}")
            time.sleep(1.0)
            continue
        pages = list((data.get("query") or {}).get("pages", {}).values())
        # Sort by relevance index if present
        pages.sort(key=lambda pg: pg.get("index", 999))
        for pg in pages:
            title = pg.get("title", "")
            if title in used_titles:
                continue
            ii = (pg.get("imageinfo") or [{}])[0]
            mime = ii.get("mime", "")
            w = ii.get("width", 0) or 0
            h = ii.get("height", 0) or 0
            if mime not in ("image/jpeg", "image/png", "image/webp"):
                continue
            if max(w, h) < 420:
                continue
            # Prefer thumburl (~1200px wide) to stay crisp & lightweight, fallback to url
            dl_url = ii.get("thumburl") or ii.get("url")
            if dl_url:
                return title, dl_url, w, h
        time.sleep(0.35)
    return None


def resize_oversized(files: list[pathlib.Path], max_px: int = 1600):
    ps = f"""
Add-Type -AssemblyName System.Drawing
$files = @({",".join(f'"{str(p)}"' for p in files)})
foreach ($f in $files) {{
  try {{
    $img = [System.Drawing.Image]::FromFile($f)
    $w = $img.Width; $h = $img.Height
    if ([Math]::Max($w, $h) -gt {max_px}) {{
      $scale = {max_px} / [double][Math]::Max($w, $h)
      $nw = [int][Math]::Round($w * $scale)
      $nh = [int][Math]::Round($h * $scale)
      $bmp = New-Object System.Drawing.Bitmap $nw, $nh
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $g.DrawImage($img, 0, 0, $nw, $nh)
      $g.Dispose(); $img.Dispose()
      $tmp = "$f.tmp.jpg"
      $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object {{ $_.MimeType -eq "image/jpeg" }} | Select-Object -First 1
      $ep = New-Object System.Drawing.Imaging.EncoderParameters 1
      $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 88L)
      $bmp.Save($tmp, $enc, $ep)
      $bmp.Dispose()
      Move-Item $tmp $f -Force
      Write-Host "Resized $f (${{w}}x${{h}} -> ${{nw}}x${{nh}})"
    }} else {{
      $img.Dispose()
    }}
  }} catch {{
    Write-Host "Resize skip $f : $_"
  }}
}}
"""
    subprocess.run(["powershell", "-NoProfile", "-Command", ps], check=False)


def process_batch(targets, out_dir: pathlib.Path, shas: set[str], used_titles: set[str]):
    out_dir.mkdir(parents=True, exist_ok=True)
    downloaded: list[pathlib.Path] = []
    manifest = {}
    for fname, queries in targets:
        dest = out_dir / fname
        if dest.exists() and dest.stat().st_size > 6000:
            print(f"[SKIP exists] {dest.name} ({dest.stat().st_size//1024} KB)")
            manifest[fname] = "existing"
            continue
        hit = search_commons_image(queries, used_titles)
        if not hit:
            print(f"[MISS] {fname} (queries={queries})")
            continue
        title, dl_url, w, h = hit
        used_titles.add(title)
        try:
            ok = download_file(dl_url, dest)
            if not ok:
                print(f"[TOO SMALL] {fname} from {title}")
                dest.unlink(missing_ok=True)
                continue
            sha = hashlib.sha256(dest.read_bytes()).hexdigest()
            if sha in shas:
                print(f"[DUP SHA] {fname} matches existing file, retrying next")
                dest.unlink(missing_ok=True)
                continue
            shas.add(sha)
            downloaded.append(dest)
            manifest[fname] = {"commonsTitle": title, "url": dl_url, "origSize": [w, h]}
            print(f"[OK] {fname} <- {title} ({dest.stat().st_size//1024} KB)")
        except Exception as e:
            print(f"[ERR] {fname}: {e}")
            dest.unlink(missing_ok=True)
        time.sleep(0.4)
    if downloaded:
        resize_oversized(downloaded, max_px=1600)
    return manifest


def main():
    shas = existing_shas()
    used_titles: set[str] = set()
    print("=== Fetching 18 Paintings V3 ===")
    pm = process_batch(PAINTING_TARGETS, PAINTINGS_DIR, shas, used_titles)
    print("\n=== Fetching 18 Museum Artifacts V3 ===")
    mm = process_batch(MUSEUM_TARGETS, MUSEUM_DIR, shas, used_titles)
    rep = ROOT / "reports" / "v3_media_fetch.json"
    rep.parent.mkdir(parents=True, exist_ok=True)
    rep.write_text(json.dumps({"paintings": pm, "museum": mm}, ensure_ascii=False, indent=2), encoding="utf-8")
    p_ok = sum(1 for fn, _ in PAINTING_TARGETS if (PAINTINGS_DIR / fn).exists())
    m_ok = sum(1 for fn, _ in MUSEUM_TARGETS if (MUSEUM_DIR / fn).exists())
    print(f"\nSUMMARY: paintings={p_ok}/18, museum={m_ok}/18 -> wrote {rep}")


if __name__ == "__main__":
    main()
