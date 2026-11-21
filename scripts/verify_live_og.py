"""Verify Open Graph metadata & HTTP 200 status on key routes (local or live).

Usage: uv run python scripts/verify_live_og.py [http://127.0.0.1:8090]
"""

from __future__ import annotations

import re
import sys
import urllib.request


ROUTES = [
    "/",
    "/explore",
    "/chuyen-luan/forbidden-city-3d-dissection",
    "/chuyen-luan/temple-of-heaven-tiantan-cosmology-3d",
    "/quoc-hoa/bu-nian-tu",
    "/tinh-thanh/prov-beijing",
    "/bao-tang/qingming-scroll",
]


def fetch(url: str) -> tuple[int, str]:
    req = urllib.request.Request(url, headers={"User-Agent": "CCE-OG-Verifier/1.0"})
    with urllib.request.urlopen(req, timeout=10) as resp:
        return resp.status, resp.read().decode("utf-8", errors="ignore")


def main() -> int:
    base = (sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8090").rstrip("/")
    errors: list[str] = []
    for route in ROUTES:
        url = base + route
        try:
            code, html_txt = fetch(url)
            title_m = re.search(r"<title>(.*?)</title>", html_txt, re.I | re.S)
            og_t = re.search(r'<meta\s+property="og:title"\s+content="([^"]+)"', html_txt, re.I)
            og_d = re.search(r'<meta\s+property="og:description"\s+content="([^"]+)"', html_txt, re.I)
            og_i = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', html_txt, re.I)
            title_val = title_m.group(1).strip() if title_m else ""
            img_val = og_i.group(1).strip() if og_i else ""
            if code != 200 or not title_val or not og_t or not og_d or not img_val:
                errors.append(f"OG MISSING on {route} (code={code})")
            elif img_val.lower().endswith(".svg"):
                errors.append(f"SVG OG image on {route}: {img_val}")
            else:
                # Check image URL against local/live base if host differs or test local path
                check_img = img_val
                if not img_val.startswith(base):
                    m_rel = re.match(r"https?://[^/]+(/.*)", img_val)
                    if m_rel:
                        check_img = base + m_rel.group(1)
                req_img = urllib.request.Request(check_img, method="HEAD")
                with urllib.request.urlopen(req_img, timeout=10) as ir:
                    if ir.status != 200:
                        errors.append(f"OG image HTTP {ir.status} on {route}")
            print(f"OK {code} {route} -> title={title_val[:55]!r}")
        except Exception as exc:
            errors.append(f"ERROR {route}: {exc}")

    if errors:
        print("LIVE_OG_VERIFY FAIL:", errors)
        return 1
    print("LIVE_OG_VERIFY: PASS (All routes 200 + raster og:image verified)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
