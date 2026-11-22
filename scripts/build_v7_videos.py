"""Build 8 HD MP4 documentary & official promo videos for Chinese Culture Explorer V7.0 using ffmpeg."""

from __future__ import annotations

import pathlib
import shutil
import subprocess
import tempfile
from dataclasses import dataclass

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "assets" / "videos"
BRAIN_PROMO = (
    pathlib.Path(
        r"C:\Users\admin\.gemini\antigravity\brain\563fc13b-fb97-4891-9990-9294dff2c297"
    )
    / "cce-v7-official-promo.mp4"
)

FONT_UI = "C\\:/Windows/Fonts/segoeuib.ttf"
FONT_ZH = "C\\:/Windows/Fonts/msyhbd.ttc"


@dataclass
class SlideSpec:
    img_rel: str
    zh_label: str
    vi_title: str
    en_sub: str
    zoom_mode: str = "in"  # in | out | pan_r | pan_l


@dataclass
class VideoJob:
    filename: str
    duration_per_slide: float
    fade_sec: float
    slides: list[SlideSpec]


def _make_pentatonic_audio(wav_path: pathlib.Path, total_sec: float) -> None:
    """Synthesize a calm pentatonic Bianzhong/Guqin plucks soundtrack with smooth envelope."""
    # Notes D4 (293.66), E4 (329.63), G4 (392.00), A4 (440.00), B4 (493.88), D5 (587.33)
    # Using beat mod 4s cyclic arpeggio + warm drone on D3 (146.83)
    expr = (
        "0.11*sin(2*PI*146.83*t)*(0.6+0.4*sin(0.5*PI*t))"
        "+0.18*sin(2*PI*293.66*t)*exp(-2.8*mod(t,2.0))"
        "+0.15*sin(2*PI*440.00*t)*exp(-2.6*mod(t+0.5,2.0))"
        "+0.14*sin(2*PI*587.33*t)*exp(-2.4*mod(t+1.0,2.0))"
        "+0.13*sin(2*PI*392.00*t)*exp(-2.6*mod(t+1.5,2.0))"
        "+0.08*sin(2*PI*329.63*t)*exp(-2.0*mod(t+0.75,4.0))"
    )
    fade_out_start = max(0.5, total_sec - 1.4)
    cmd = [
        "ffmpeg",
        "-y",
        "-f",
        "lavfi",
        "-i",
        f"aevalsrc='{expr}':s=44100:d={total_sec:.2f}",
        "-af",
        f"lowpass=f=2400,aecho=0.6:0.5:90:0.25,afade=t=in:ss=0:d=0.8,afade=t=out:st={fade_out_start:.2f}:d=1.3",
        "-c:a",
        "pcm_s16le",
        str(wav_path),
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def _render_video(job: VideoJob) -> pathlib.Path:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_mp4 = OUT_DIR / job.filename
    n = len(job.slides)
    d = job.duration_per_slide
    fade = job.fade_sec
    fps = 25
    frames = int(round(d * fps))
    total_sec = n * d - (n - 1) * fade

    with tempfile.TemporaryDirectory() as tmp:
        tdir = pathlib.Path(tmp)
        wav = tdir / "soundtrack.wav"
        _make_pentatonic_audio(wav, total_sec)

        inputs: list[str] = []
        fc_parts: list[str] = []

        for i, sl in enumerate(job.slides):
            img_path = ROOT / sl.img_rel
            assert img_path.is_file(), f"Missing video slide image: {img_path}"
            inputs.extend(["-i", str(img_path)])

            zh_txt = tdir / f"zh_{i}.txt"
            vi_txt = tdir / f"vi_{i}.txt"
            en_txt = tdir / f"en_{i}.txt"
            zh_txt.write_text(sl.zh_label, encoding="utf-8")
            vi_txt.write_text(sl.vi_title, encoding="utf-8")
            en_txt.write_text(sl.en_sub, encoding="utf-8")

            zh_esc = str(zh_txt).replace("\\", "/").replace(":", "\\:")
            vi_esc = str(vi_txt).replace("\\", "/").replace(":", "\\:")
            en_esc = str(en_txt).replace("\\", "/").replace(":", "\\:")

            if sl.zoom_mode == "out":
                zp = f"zoompan=z='max(1.16-0.0011*on,1.0)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s=1280x720:fps={fps}"
            elif sl.zoom_mode == "pan_r":
                zp = f"zoompan=z='1.12':x='min(max((iw-iw/zoom)*on/{frames},0),iw-iw/zoom)':y='ih/2-(ih/zoom/2)':d={frames}:s=1280x720:fps={fps}"
            elif sl.zoom_mode == "pan_l":
                zp = f"zoompan=z='1.12':x='max((iw-iw/zoom)*(1-on/{frames}),0)':y='ih/2-(ih/zoom/2)':d={frames}:s=1280x720:fps={fps}"
            else:
                zp = f"zoompan=z='min(zoom+0.0012,1.16)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s=1280x720:fps={fps}"

            # Scale image to high-res cover 1920x1080 then zoompan 1280x720 + editorial lower-third card
            chain = (
                f"[{i}:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,"
                f"{zp},format=yuv420p,"
                f"drawbox=x=0:y=560:w=1280:h=160:color=#111111@0.78:t=fill,"
                f"drawbox=x=0:y=560:w=1280:h=3:color=#E5A93C@0.95:t=fill,"
                f"drawbox=x=38:y=582:w=6:h=112:color=#8C2318@1.0:t=fill,"
                f"drawtext=fontfile='{FONT_ZH}':textfile='{zh_esc}':fontcolor=#E5A93C:fontsize=24:x=62:y=582,"
                f"drawtext=fontfile='{FONT_UI}':textfile='{vi_esc}':fontcolor=#FFFFFF:fontsize=30:x=62:y=620,"
                f"drawtext=fontfile='{FONT_UI}':textfile='{en_esc}':fontcolor=#D7D0C3:fontsize=20:x=62:y=666,"
                f"drawtext=fontfile='{FONT_UI}':text='CHINESE CULTURE EXPLORER V7.0':fontcolor=#E5A93C@0.88:fontsize=16:x=930:y=28"
                f"[v{i}]"
            )
            fc_parts.append(chain)

        # Chain xfades
        if n == 1:
            fc_parts.append("[v0]null[vout]")
        else:
            prev = "[v0]"
            for idx in range(1, n):
                offset = idx * (d - fade)
                out_lbl = "[vout]" if idx == n - 1 else f"[vx{idx}]"
                fc_parts.append(
                    f"{prev}[v{idx}]xfade=transition=fade:duration={fade:.2f}:offset={offset:.2f}{out_lbl}"
                )
                prev = out_lbl

        inputs.extend(["-i", str(wav)])
        fc = ";".join(fc_parts)

        cmd = [
            "ffmpeg",
            "-y",
            *inputs,
            "-filter_complex",
            fc,
            "-map",
            "[vout]",
            "-map",
            f"{n}:a",
            "-c:v",
            "libx264",
            "-preset",
            "medium",
            "-crf",
            "24",
            "-pix_fmt",
            "yuv420p",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-shortest",
            "-movflags",
            "+faststart",
            str(out_mp4),
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    return out_mp4


def build_all_videos() -> list[pathlib.Path]:
    jobs = [
        # Official Promotional Trailer (~32.5s, 8 slides)
        VideoJob(
            filename="cce-v7-official-promo.mp4",
            duration_per_slide=4.5,
            fade_sec=0.5,
            slides=[
                SlideSpec("assets/images/museum/forbidden-city-imperial-axis-gate.jpg", "中国文化探索 V7.0 · 正式宣传片", "CHINESE CULTURE EXPLORER V7.0 — Hệ Sinh Thái Văn Hóa & Du Lịch", "10 Curriculum Modules · 60 Guided Lessons · Bilingual VI/EN/ZH", "in"),
                SlideSpec("assets/images/museum/taihe-dian.jpg", "24 座 WebGL 3D 馆藏 · 数字故宫标准", "24 Phòng Thí Nghiệm 3D WebGL & Bảng 8 Sắc Tố Bảo Tàng", "24 Interactive 3D Studios · Sovereign Hardware Acceleration", "out"),
                SlideSpec("assets/images/paintings/22_qianli_jiangshan.jpg", "36 诗画对照 · 6 大文史人物关系图", "36 Thi–Họa Đối Chiếu · 6 Sơ Đồ Hồng Lâu Mộng Đến Sử Ký", "36 Poem–Painting Pairings & 6 Classical SVG Character Graphs", "pan_r"),
                SlideSpec("assets/images/articles/hero-laozihao-craft.jpg", "120 中华老字号 · 42 地理标志", "120 Lão Tự Hào Trăm Năm · 42 Chỉ Dẫn Địa Lý & 18 Lưu Đồ", "120 Honored Brands · 42 GIs · Verified Anti-Counterfeit Flows", "in"),
                SlideSpec("assets/images/articles/hero-calligraphy-five-scripts.jpg", "150 六书字源 · 60 HSK7-9 · 60 食养草本", "150 Chữ Lục Thư · 60 Bài Đọc HSK 7–9 · 60 Thực Dưỡng Phi Lâm Sàng", "150 Liushu Roots, 45 False Friends & Non-Clinical Cosmology", "pan_l"),
                SlideSpec("assets/images/provinces/gansu-dunhuang-mogao.jpg", "16 条深度遗产线 · 240 小时数字攻略", "16 Hành Trình Di Sản Đa Ngày · 8 Cẩm Nang Số & Quá Cảnh 240h", "16 World Heritage Expeditions · Smart 240h Alipay & 12306 Rail", "out"),
                SlideSpec("assets/images/articles/hero-supply-chain-rcep.jpg", "300 三语商贸术语 · 36 所 CSC 重点大学", "300 Thuật Ngữ B2B · 15 Chứng Từ GACC · 36 Đại Học Học Bổng CSC", "Cross-Border Trade Docs, CSC Top 36 & 16 High-Speed Rail Lines", "in"),
                SlideSpec("assets/images/provinces/beijing-temple-of-heaven.jpg", "600 题库实战 · 150 视觉鉴宝挑战", "ĐẤU TRƯỜNG 600 CÂU HỎI & 150 THỬ THÁCH VISUAL ID — KHÁM PHÁ NGAY", "Explore Now · Chinese Culture Explorer V7.0 Ready for Global Learners", "out"),
            ],
        ),
    ]

    built: list[pathlib.Path] = []
    for j in jobs:
        print(f"Encoding {j.filename} ...")
        mp4 = _render_video(j)
        size_kb = mp4.stat().st_size / 1024
        print(f"  -> {mp4.relative_to(ROOT).as_posix()} ({size_kb:.1f} KB)")
        built.append(mp4)

    promo_src = OUT_DIR / "cce-v7-official-promo.mp4"
    if promo_src.is_file():
        BRAIN_PROMO.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(promo_src, BRAIN_PROMO)
        print(f"Copied promo trailer to artifact dir: {BRAIN_PROMO}")
    return built


if __name__ == "__main__":
    build_all_videos()
