"""Convenience launcher pointing to the root server.py."""

import runpy
from pathlib import Path

ROOT_SERVER = Path(__file__).resolve().parent.parent / "server.py"

if __name__ == "__main__":
    runpy.run_path(str(ROOT_SERVER), run_name="__main__")
