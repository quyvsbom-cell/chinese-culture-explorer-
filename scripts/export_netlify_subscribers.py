"""Export verified cce-subscribers form submissions from Netlify API to clean CSV.

Requires NETLIFY_AUTH_TOKEN environment variable (from Netlify user settings).
Site ID: 511cf21b-d821-4c92-8281-b28a8df51bb1 (chinese-culture-explorer.netlify.app).

Usage: uv run python scripts/export_netlify_subscribers.py
"""

from __future__ import annotations

import csv
import json
import os
import pathlib
import sys
import urllib.request

SITE_ID = "511cf21b-d821-4c92-8281-b28a8df51bb1"
FORM_NAME = "cce-subscribers"
OUT_CSV = pathlib.Path(__file__).resolve().parent.parent / "reports" / "subscribers_clean.csv"


def api_get(url: str, token: str):
    req = urllib.request.Request(
        url,
        headers={
            "Authorization": f"Bearer {token}",
            "User-Agent": "ChineseCultureExplorerV8/1.0",
        },
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.loads(resp.read().decode("utf-8"))


def main() -> int:
    token = os.environ.get("NETLIFY_AUTH_TOKEN", "").strip()
    if not token:
        print("Set NETLIFY_AUTH_TOKEN before running export_netlify_subscribers.py.", file=sys.stderr)
        return 1

    forms = api_get(f"https://api.netlify.com/api/v1/sites/{SITE_ID}/forms", token)
    target = next((f for f in forms if f.get("name") == FORM_NAME), None)
    if not target:
        print(f"Form '{FORM_NAME}' not yet registered on Netlify (deploy index.html first).")
        return 1

    subs = api_get(f"https://api.netlify.com/api/v1/forms/{target['id']}/submissions?per_page=500", token)
    seen: set[str] = set()
    rows: list[dict[str, str]] = []
    for s in subs:
        data = s.get("data") or {}
        email = str(data.get("email") or "").strip().lower()
        if not email or "@" not in email or email in seen:
            continue
        seen.add(email)
        rows.append(
            {
                "email": email,
                "frequency": str(data.get("frequency") or "weekly"),
                "topics": str(data.get("topics") or "hot,articles,updates"),
                "lang": str(data.get("lang") or "vi"),
                "created_at": str(s.get("created_at") or ""),
            }
        )

    OUT_CSV.parent.mkdir(parents=True, exist_ok=True)
    with OUT_CSV.open("w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=["email", "frequency", "topics", "lang", "created_at"])
        w.writeheader()
        w.writerows(rows)
    print(f"Exported {len(rows)} deduplicated subscribers -> {OUT_CSV}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
