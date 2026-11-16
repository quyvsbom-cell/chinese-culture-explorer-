"""
CHINESE CULTURE EXPLORER – 中国文化探索
Local HTTP & SQLite Persistence Server (Python Standard Library).
Usage: uv run python server.py
"""

from __future__ import annotations

import json
import os
import sqlite3
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DB_PATH = DATA_DIR / "explorer.db"


def init_db() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS user_state (
                id INTEGER PRIMARY KEY CHECK (id = 1),
                payload TEXT NOT NULL,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        conn.commit()


def read_state() -> dict:
    with sqlite3.connect(DB_PATH) as conn:
        row = conn.execute("SELECT payload FROM user_state WHERE id = 1").fetchone()
        if not row:
            return {}
        try:
            return json.loads(row[0])
        except json.JSONDecodeError:
            return {}


def write_state(payload: dict) -> None:
    serialized = json.dumps(payload, ensure_ascii=False)
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """
            INSERT INTO user_state (id, payload, updated_at)
            VALUES (1, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(id) DO UPDATE SET
                payload = excluded.payload,
                updated_at = CURRENT_TIMESTAMP
            """,
            (serialized,),
        )
        conn.commit()


class ExplorerHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "SAMEORIGIN")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        super().end_headers()

    def guess_type(self, path: str) -> str:
        ext = Path(path).suffix.lower()
        if ext == ".html":
            return "text/html; charset=utf-8"
        if ext == ".js":
            return "application/javascript; charset=utf-8"
        if ext == ".css":
            return "text/css; charset=utf-8"
        if ext == ".json":
            return "application/json; charset=utf-8"
        if ext == ".svg":
            return "image/svg+xml; charset=utf-8"
        return super().guess_type(path)

    def _send_json(self, status: int, body: dict) -> None:
        raw = json.dumps(body, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        req_path = parsed.path
        lower_path = req_path.lower()
        # Prevent exposure of database, backend source, dotfiles, and test/script files
        if (
            lower_path.startswith("/data/")
            or lower_path.startswith("/netlify/")
            or lower_path.startswith("/scripts/")
            or lower_path.startswith("/.")
            or "/." in lower_path
            or lower_path.endswith((".db", ".sqlite", ".sqlite3", ".py", ".pyc", ".toml", ".mts"))
            or req_path == "/package.json"
        ):
            self._send_json(HTTPStatus.FORBIDDEN, {"error": "Access denied"})
            return
        if req_path == "/api/health":
            self._send_json(HTTPStatus.OK, {"status": "ok", "db": str(DB_PATH.name)})
            return
        if req_path == "/api/state":
            self._send_json(HTTPStatus.OK, {"state": read_state()})
            return
        if req_path == "/":
            self.path = "/index.html"
        else:
            rel = req_path.lstrip("/")
            fs_target = (BASE_DIR / rel).resolve()
            is_static_prefix = lower_path.startswith(("/assets/", "/src/", "/styles/"))
            has_file_ext = bool(Path(req_path).suffix)
            if not is_static_prefix and not has_file_ext and not fs_target.is_file():
                self.path = "/index.html"
        super().do_GET()

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path != "/api/state":
            self._send_json(HTTPStatus.NOT_FOUND, {"error": "Endpoint not found"})
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            self._send_json(HTTPStatus.BAD_REQUEST, {"error": "Invalid Content-Length header"})
            return
        if length <= 0 or length > 2_000_000:
            self._send_json(HTTPStatus.BAD_REQUEST, {"error": "Invalid payload size"})
            return

        raw = self.rfile.read(length)
        try:
            body = json.loads(raw.decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError):
            self._send_json(HTTPStatus.BAD_REQUEST, {"error": "Malformed JSON"})
            return

        if not isinstance(body, dict) or not isinstance(body.get("state"), dict):
            self._send_json(HTTPStatus.BAD_REQUEST, {"error": "Expected {'state': {...}}"})
            return

        write_state(body["state"])
        self._send_json(HTTPStatus.OK, {"saved": True})


def main() -> None:
    init_db()
    port = int(os.environ.get("PORT", "8080"))
    server = ThreadingHTTPServer(("127.0.0.1", port), ExplorerHandler)
    print(f"CHINESE CULTURE EXPLORER running at http://127.0.0.1:{port}/")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
