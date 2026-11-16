"""
Generate clean SEO sitemap.xml and robots.txt for Chinese Culture Explorer.
Produces Clean Path URLs compatible with History API routing & Netlify SPA fallback.
Usage: uv run python scripts/generate_seo_files.py [https://chinese-culture-explorer.netlify.app]
"""

from __future__ import annotations

import pathlib
import re
import sys
from datetime import date

BASE_URL = (sys.argv[1] if len(sys.argv) > 1 else "https://chinese-culture-explorer.netlify.app").rstrip("/")
TODAY = date.today().isoformat()

STATIC_ROUTES = [
    ("/", "weekly", "1.0"),
    ("/explore", "weekly", "0.9"),
    ("/thu-vien", "weekly", "0.9"),
    ("/quoc-hoa", "weekly", "0.9"),
    ("/bao-tang", "weekly", "0.9"),
    ("/tinh-thanh", "weekly", "0.9"),
    ("/trung-viet", "weekly", "0.8"),
    ("/lich-su", "monthly", "0.8"),
    ("/triet-hoc", "monthly", "0.8"),
    ("/van-hoa", "monthly", "0.8"),
    ("/kinh-doanh", "monthly", "0.8"),
    ("/hoc-tap", "weekly", "0.8"),
    ("/gioi-thieu", "monthly", "0.7"),
    ("/phap-ly", "yearly", "0.4"),
]


def extract_ids(files: list[str], prefix_filter: str | None = None) -> list[str]:
    found: list[str] = []
    seen: set[str] = set()
    for rel in files:
        p = pathlib.Path(rel)
        if not p.exists():
            continue
        txt = p.read_text(encoding="utf-8")
        pattern = r'["\']?id["\']?\s*:\s*["\'](prov-[a-z-]+)["\']' if prefix_filter == "prov-" else r'^\s*"?id"?\s*:\s*"([^"]+)"'
        for m in re.finditer(pattern, txt, re.M):
            val = m.group(1)
            if val not in seen:
                seen.add(val)
                found.append(val)
    return found


def main() -> None:
    article_files = [
        "src/data/articlesData.js",
        "src/data/compendiaArticles.js",
        "src/data/articlesMonographsPart1.js",
        "src/data/articlesMonographsPart2.js",
        "src/data/articlesExpansionBatch2026.js",
    ]
    # Filter top-level article IDs (skip nested section/source/quiz IDs)
    art_ids: list[str] = []
    seen_art: set[str] = set()
    for rel in article_files:
        p = pathlib.Path(rel)
        if not p.exists():
            continue
        txt = p.read_text(encoding="utf-8")
        for m in re.finditer(r'id:\s*"([^"]+)"\s*,\s*(?:\r?\n\s*(?:number|category|categoryLabel|slug):)', txt):
            aid = m.group(1)
            if aid not in seen_art:
                seen_art.add(aid)
                art_ids.append(aid)

    prov_ids = extract_ids(
        [
            "src/data/regionsData.js",
            "src/data/regionsProvincesBatch1.js",
            "src/data/regionsProvincesBatch2.js",
            "src/data/regionsProvincesBatch3.js",
        ],
        prefix_filter="prov-",
    )

    urls: list[tuple[str, str, str]] = list(STATIC_ROUTES)
    for aid in art_ids:
        urls.append((f"/chuyen-luan/{aid}", "monthly", "0.85"))
    for pid in prov_ids:
        urls.append((f"/tinh-thanh/{pid}", "monthly", "0.75"))

    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for path, freq, prio in urls:
        lines.extend(
            [
                "  <url>",
                f"    <loc>{BASE_URL}{path}</loc>",
                f"    <lastmod>{TODAY}</lastmod>",
                f"    <changefreq>{freq}</changefreq>",
                f"    <priority>{prio}</priority>",
                "  </url>",
            ]
        )
    lines.append("</urlset>")

    pathlib.Path("sitemap.xml").write_text("\n".join(lines) + "\n", encoding="utf-8")

    robots = "\n".join(
        [
            "User-agent: *",
            "Allow: /",
            "Disallow: /netlify/",
            "Disallow: /scripts/",
            "Disallow: /data/",
            "",
            f"Sitemap: {BASE_URL}/sitemap.xml",
            "",
        ]
    )
    pathlib.Path("robots.txt").write_text(robots, encoding="utf-8")
    print(f"Generated sitemap.xml ({len(urls)} URLs: {len(STATIC_ROUTES)} routes, {len(art_ids)} essays, {len(prov_ids)} provinces) + robots.txt for {BASE_URL}")


if __name__ == "__main__":
    main()
