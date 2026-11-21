"""Editorial Prose & Tone Harmonizer for src/data/v3/*.js and src/data/v4/*.js.

Tokenizes JavaScript string literals so identifiers, property keys, slugs,
Hanzi citations, and asset paths are never altered. Replaces generic AI clichés
and internal dev labels with crisp Museum Editorial prose aligned to the core
Antigravity corpus.

Usage: uv run python scripts/harmonize_v3_editorial_tone.py
"""

from __future__ import annotations

import pathlib
import re

ROOT_DATA = pathlib.Path(__file__).resolve().parent.parent / "src" / "data"
SCAN_DIRS = [ROOT_DATA / "v3", ROOT_DATA / "v4"]
REPORT_PATH = pathlib.Path(__file__).resolve().parent.parent / "reports" / "tone_harmonization_audit.md"

# Ordered (compiled regex, replacement function or string) applied ONLY to natural-language string literals
EN_RULES: list[tuple[re.Pattern[str], object]] = [
    (re.compile(r"\brich tapestry of\b", re.I), lambda m: "interlocking network of" if m.group(0)[0].islower() else "Interlocking network of"),
    (re.compile(r"\btapestry of\b", re.I), lambda m: "spectrum of" if m.group(0)[0].islower() else "Spectrum of"),
    (re.compile(r"\btapestry\b", re.I), lambda m: "fabric" if m.group(0)[0].islower() else "Fabric"),
    (re.compile(r"\bnot merely\b", re.I), lambda m: "more than just" if m.group(0)[0].islower() else "More than just"),
    (re.compile(r"\bserves as a testament to\b", re.I), lambda m: "documents" if m.group(0)[0].islower() else "Documents"),
    (re.compile(r"\bstands as a testament to\b", re.I), lambda m: "records" if m.group(0)[0].islower() else "Records"),
    (re.compile(r"\btestament to\b", re.I), lambda m: "evidence of" if m.group(0)[0].islower() else "Evidence of"),
    (re.compile(r"\bserves as a\b", re.I), lambda m: "functions as a" if m.group(0)[0].islower() else "Functions as a"),
    (re.compile(r"\bstands as a\b", re.I), lambda m: "remains a" if m.group(0)[0].islower() else "Remains a"),
    (re.compile(r"\bembodies the\b", re.I), lambda m: "expresses the" if m.group(0)[0].islower() else "Expresses the"),
    (re.compile(r"\bshowcases\b", re.I), lambda m: "presents" if m.group(0)[0].islower() else "Presents"),
    (re.compile(r"\brealm of\b", re.I), lambda m: "field of" if m.group(0)[0].islower() else "Field of"),
    (re.compile(r"\bseamlessly\b", re.I), lambda m: "directly" if m.group(0)[0].islower() else "Directly"),
    (re.compile(r"\bunderscores\b", re.I), lambda m: "highlights" if m.group(0)[0].islower() else "Highlights"),
    (re.compile(r"\bunderscore\b", re.I), lambda m: "highlight" if m.group(0)[0].islower() else "Highlight"),
    (re.compile(r"\btimeless\b", re.I), lambda m: "enduring" if m.group(0)[0].islower() else "Enduring"),
    (re.compile(r"\bvibrant\b", re.I), lambda m: "active" if m.group(0)[0].islower() else "Active"),
    (re.compile(r"\bV3\.0\b|\bV3\s+Archive\b", re.I), "Archival"),
    (re.compile(r"\bV4\.0(?!\.\d)\b|\bV4\s+Archive\b", re.I), "Archival"),
]

VI_RULES: list[tuple[re.Pattern[str], object]] = [
    (re.compile(r"\bV3\.0\b"), "lưu trữ"),
    (re.compile(r"\bv3\.0\b"), "lưu trữ"),
    (re.compile(r"\bV4\.0(?!\.\d)\b"), "lưu trữ"),
    (re.compile(r"\bv4\.0(?!\.\d)\b"), "lưu trữ"),
    (re.compile(r"\bđóng vai trò quan trọng\b"), "giữ vị trí trung tâm"),
    (re.compile(r"\bđóng vai trò then chốt\b"), "giữ chức năng hạt nhân"),
    (re.compile(r"\bminh chứng sống động\b"), "chứng tích trực tiếp"),
    (re.compile(r"\bmột hành trình\b"), "một mạch tiến trình"),
    (re.compile(r"\btuyệt tác\b"), "kiệt tác"),
    (re.compile(r"\bvô cùng ([a-záàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵđ]+)\b"), r"rất \1"),
    (re.compile(r"\bnổi bật với\b"), "gắn liền với"),
    (re.compile(r"\bmang đậm\b"), "lưu giữ"),
    (re.compile(r"\btạo nên một\b"), "hình thành nên một"),
    (re.compile(r"\bhòa quyện\b"), "kết hợp"),
    (re.compile(r"\bgiao thoa giữa\b"), "tiếp biến giữa"),
]


def should_skip_literal(raw_inner: str) -> bool:
    if len(raw_inner) < 8:
        return True
    if " " not in raw_inner:
        return True
    if raw_inner.startswith(("assets/", "http://", "https://", "/")):
        return True
    return False


def refine_inner(inner: str, counts: dict[str, int]) -> str:
    if should_skip_literal(inner):
        return inner
    out = inner
    for pat, rep in EN_RULES + VI_RULES:
        out, n = pat.subn(rep, out)
        if n:
            key = pat.pattern
            counts[key] = counts.get(key, 0) + n
    # Clean stray Batch references inside visible labels (never slug/var names since we require space)
    out, nb = re.subn(r"\bBatch\s+\d+\b", "Học liệu", out, flags=re.I)
    if nb:
        counts["Batch_N"] = counts.get("Batch_N", 0) + nb
    return out


def process_js_source(src: str, counts: dict[str, int]) -> tuple[str, int]:
    """Lexes JS string literals safely preserving quotes, escapes, and comments."""
    out: list[str] = []
    i = 0
    n = len(src)
    changes = 0
    while i < n:
        ch = src[i]
        # Line comment
        if ch == "/" and i + 1 < n and src[i + 1] == "/":
            end = src.find("\n", i)
            if end == -1:
                out.append(src[i:])
                break
            out.append(src[i:end])
            i = end
            continue
        # Block comment
        if ch == "/" and i + 1 < n and src[i + 1] == "*":
            end = src.find("*/", i + 2)
            if end == -1:
                out.append(src[i:])
                break
            out.append(src[i : end + 2])
            i = end + 2
            continue
        # String literal
        if ch in ("'", '"', "`"):
            quote = ch
            j = i + 1
            while j < n:
                c = src[j]
                if c == "\\":
                    j += 2
                    continue
                if c == quote:
                    break
                j += 1
            if j >= n:
                out.append(src[i:])
                break
            inner = src[i + 1 : j]
            new_inner = refine_inner(inner, counts)
            if new_inner != inner:
                changes += 1
            out.append(quote + new_inner + quote)
            i = j + 1
            continue
        out.append(ch)
        i += 1
    return "".join(out), changes


def main():
    counts: dict[str, int] = {}
    file_stats: list[tuple[str, int]] = []
    for scan_dir in SCAN_DIRS:
        if not scan_dir.is_dir():
            continue
        for fp in sorted(scan_dir.glob("*.js")):
            raw = fp.read_text(encoding="utf-8")
            new_src, chg = process_js_source(raw, counts)
            if chg > 0:
                fp.write_text(new_src, encoding="utf-8")
            file_stats.append((f"{scan_dir.name}/{fp.name}", chg))

    total_edits = sum(c for _, c in file_stats)
    lines = [
        "# Tone & Editorial Consistency Audit (`src/data/v3/` & `src/data/v4/`)",
        "",
        f"- Total JS files scanned: **{len(file_stats)}**",
        f"- Total refined string literals: **{total_edits}**",
        "",
        "## Pattern Refinements Applied",
    ]
    for k, v in sorted(counts.items(), key=lambda x: -x[1]):
        lines.append(f"- `{k}`: **{v}** replacements")
    lines.append("")
    lines.append("## Per-File Summary")
    for fn, c in file_stats:
        if c > 0:
            lines.append(f"- `{fn}`: {c} strings refined")
    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    REPORT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Harmonized {total_edits} string literals across {len(file_stats)} files -> {REPORT_PATH}")


if __name__ == "__main__":
    main()
