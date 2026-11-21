"""Audit and optimize media asset metadata for CLS < 0.05 and zero broken image links."""
from __future__ import annotations

import json
import pathlib
import re
import struct

ROOT = pathlib.Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / "assets" / "images"
REPORT_PATH = ROOT / "reports" / "media_audit.json"


def read_image_dims(path: pathlib.Path) -> tuple[int, int] | None:
    try:
        with path.open("rb") as f:
            head = f.read(32)
            # PNG
            if head[:8] == b"\x89PNG\r\n\x1a\n" and len(head) >= 24:
                w, h = struct.unpack(">II", head[16:24])
                return w, h
            # GIF
            if head[:6] in (b"GIF87a", b"GIF89a") and len(head) >= 10:
                w, h = struct.unpack("<HH", head[6:10])
                return w, h
            # WEBP
            if head[:4] == b"RIFF" and head[8:12] == b"WEBP":
                chunk = head[12:16]
                if chunk == b"VP8X" and len(head) >= 30:
                    w = 1 + int.from_bytes(head[24:27], "little")
                    h = 1 + int.from_bytes(head[27:30], "little")
                    return w, h
                if chunk == b"VP8 " and len(head) >= 30:
                    w = int.from_bytes(head[26:28], "little") & 0x3FFF
                    h = int.from_bytes(head[28:30], "little") & 0x3FFF
                    return w, h
                if chunk == b"VP8L" and len(head) >= 25:
                    b0 = int.from_bytes(head[21:25], "little")
                    return (b0 & 0x3FFF) + 1, ((b0 >> 14) & 0x3FFF) + 1
            # JPEG
            if head[:2] == b"\xff\xd8":
                f.seek(2)
                while True:
                    byte = f.read(1)
                    if not byte:
                        break
                    if byte != b"\xff":
                        continue
                    marker = f.read(1)
                    while marker == b"\xff":
                        marker = f.read(1)
                    if not marker:
                        break
                    m = marker[0]
                    if m in (0xD8, 0xD9, 0x00):
                        continue
                    if 0xC0 <= m <= 0xCF and m not in (0xC4, 0xC8, 0xCC):
                        blk = f.read(7)
                        if len(blk) >= 7:
                            h, w = struct.unpack(">HH", blk[3:7])
                            return w, h
                        break
                    seg_len_b = f.read(2)
                    if len(seg_len_b) < 2:
                        break
                    seg_len = struct.unpack(">H", seg_len_b)[0]
                    f.seek(max(0, seg_len - 2), 1)
    except OSError:
        return None
    return None


def main():
    assets = []
    oversized = []
    total_bytes = 0
    for fp in sorted(IMG_DIR.rglob("*")):
        if not fp.is_file() or fp.suffix.lower() not in (".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"):
            continue
        rel = fp.relative_to(ROOT).as_posix()
        sz = fp.stat().st_size
        total_bytes += sz
        dims = read_image_dims(fp) if fp.suffix.lower() != ".svg" else None
        entry = {
            "path": rel,
            "bytes": sz,
            "width": dims[0] if dims else None,
            "height": dims[1] if dims else None,
        }
        assets.append(entry)
        if sz > 750_000:
            oversized.append(entry)

    # Scan src/*.js references to verify zero missing paths
    refs = set()
    for js in (ROOT / "src").rglob("*.js"):
        txt = js.read_text(encoding="utf-8", errors="replace")
        for m in re.finditer(r'["\'](assets/images/[^"\']+)["\']', txt):
            refs.add(m.group(1))
    missing = [r for r in sorted(refs) if not (ROOT / r).exists()]

    # Check decoding="async" coverage in render helpers
    app_txt = (ROOT / "src" / "app.js").read_text(encoding="utf-8", errors="replace")
    total_imgs = len(re.findall(r'<img\b', app_txt))
    async_imgs = len(re.findall(r'<img\b[^>]*decoding="async"', app_txt))

    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    REPORT_PATH.write_text(
        json.dumps(
            {
                "totalFiles": len(assets),
                "totalMB": round(total_bytes / (1024 * 1024), 2),
                "referencedCount": len(refs),
                "missingReferenced": missing,
                "oversizedOver750KB": oversized,
                "appImgTags": total_imgs,
                "appAsyncImgTags": async_imgs,
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    print(
        f"MEDIA AUDIT: {len(assets)} files ({round(total_bytes / (1024*1024), 2)} MB), "
        f"{len(refs)} referenced, {len(missing)} missing, {len(oversized)} >750KB, "
        f"img async={async_imgs}/{total_imgs}"
    )
    assert not missing, f"Missing image assets: {missing}"


if __name__ == "__main__":
    main()
