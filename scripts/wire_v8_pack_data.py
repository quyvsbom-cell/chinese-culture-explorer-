"""Wire verified Wikidata/Commons images & V8 Pack 2 dedupe replacements into JS bundles.

1. Updates replaced GIs (gi-v7-04, 07, 09, 12) & CSCs (csc-v7-01, 02, 03, 08, 09, 12)
   in src/data/v7/v7CompleteEncyclopedia.js using V8_Pack2.js definitions + verified images.
2. Injects exact verified `imagePath` fields onto every entity in
   src/data/v8/V8_Pack1.js, V8_Pack3.js, V8_Pack4.js, V8_Pack5.js.
3. Resolves all 50 `targetAssetTag` references in V8_Pack8.js (`quizVisual50`)
   to exact verified `imagePath` files on disk (> 5 KB).

Usage: uv run python scripts/wire_v8_pack_data.py
"""

from __future__ import annotations

import json
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PROVENANCE_PATH = ROOT / "src" / "data" / "imageProvenanceV8.json"
V8_DIR = ROOT / "src" / "data" / "v8"
V7_PATH = ROOT / "src" / "data" / "v7" / "v7CompleteEncyclopedia.js"

GI_REPL_EXTRA = {
    "gi-v7-04": {
        "pinyin": "Qìngyuán Xiānggū",
        "provinceId": "zhejiang",
        "vnEvftaCounterpartVi": "Tương đồng mô hình canh tác nấm hương rừng Sa Pa – Tam Đảo gắn truy xuất mã vùng.",
        "vnEvftaCounterpartEn": "Parallels specialty upland mushroom cultivation in northern Vietnam with origin traceability.",
        "terroirAndCraftVi": "Canh tác truyền thống trên khúc gỗ sồi già vùng núi Lệ Thủy (Chiết Giang) tạo tai nấm dày, hàm lượng guanylate thơm ngọt tự nhiên cao.",
        "terroirAndCraftEn": "Cultivated on aged mountain oak logs in Lishui highlands, producing dense caps rich in natural umami guanylates.",
        "customsHsAndAuditVi": "Mã HS 0712.39 (nấm hương khô). Kiểm tra hải quan chú trọng dư lượng kim loại nặng, độ ẩm < 13% và kiểm dịch thực vật EU/GACC.",
        "customsHsAndAuditEn": "HS 0712.39 (dried shiitake). Customs audits focus on heavy-metal thresholds, moisture under 13%, and phytosanitary compliance.",
    },
    "gi-v7-07": {
        "pinyin": "Hànyuán Huājiāo",
        "provinceId": "sichuan",
        "vnEvftaCounterpartVi": "Đối chiếu hồ tiêu đỏ Phú Quốc – Gia Lai và thảo quả mắc khén Tây Bắc Việt Nam về chỉ dẫn tinh dầu cay tê đặc hữu.",
        "vnEvftaCounterpartEn": "Compares with Phu Quoc peppercorn and northern Vietnam forest spices protected by regional essential-oil profiles.",
        "terroirAndCraftVi": "Thổ nhưỡng thung lũng sông Đại Độ nắng gió vùng Hán Nguyên cho vỏ quả đỏ rực, giàu hợp chất sanshool gây tê đầu lưỡi đặc trưng ẩm thực Xuyên.",
        "terroirAndCraftEn": "Sunny Dadu River slopes in Hanyuan cultivate crimson peppercorns packed with numbing hydroxy-alpha-sanshool.",
        "customsHsAndAuditVi": "Mã HS 0910.99 (gia vị khô). Lưu ý kiểm nghiệm aflatoxin, ochratoxin A và dư lượng thuốc bảo vệ thực vật theo chuẩn EU 2026.",
        "customsHsAndAuditEn": "HS 0910.99 (dried spice). EU import inspections check aflatoxin, ochratoxin A, and MRL pesticide compliance.",
    },
    "gi-v7-09": {
        "pinyin": "Lín'ān Tiānmù Sǔngān",
        "provinceId": "zhejiang",
        "vnEvftaCounterpartVi": "Tương đồng nghề làm măng nứa khô, măng vầu vùng núi Tây Bắc và Bắc Kạn tại Việt Nam.",
        "vnEvftaCounterpartEn": "Mirrors mountain dried bamboo shoot processing in northern Vietnam uplands.",
        "terroirAndCraftVi": "Thu hái măng tre non núi Thiên Mục vào đầu xuân, luộc nước suối và sấy than hoa hoặc phơi nắng núi cao cho sợi măng giòn thơm.",
        "terroirAndCraftEn": "Spring Tianmu Mountain bamboo shoots are boiled in spring water and sun-cured at altitude for crisp texture.",
        "customsHsAndAuditVi": "Mã HS 0712.90 (măng khô). Hải quan EU/GACC kiểm tra nghiêm hàm lượng SO2 bảo quản (không vượt ngưỡng phụ gia cho phép).",
        "customsHsAndAuditEn": "HS 0712.90 (dried bamboo shoots). Import controls verify sulfite preservative limits and food-grade sulfur-free drying.",
    },
    "gi-v7-12": {
        "pinyin": "Yángchénghú Dàzháxiè",
        "provinceId": "jiangsu",
        "vnEvftaCounterpartVi": "Đối chiếu hệ thống truy xuất thủy sản đặc sản vùng nước lợ – ngọt như cua Cà Mau gắn tem vòng chống giả.",
        "vnEvftaCounterpartEn": "Parallels Vietnam specialty crustacean geographical origin tagging such as Ca Mau crab rings.",
        "terroirAndCraftVi": "Đáy hồ Dương Trừng (Tô Châu) giàu cát cứng và thủy sinh sạch giúp cua phát triển mai xanh, bụng trắng, lông vàng, gạch béo dịp thu phân.",
        "terroirAndCraftEn": "Sandy Yangcheng Lake beds and submerged macrophytes yield clean-shelled mitten crabs prized during the autumn equinox.",
        "customsHsAndAuditVi": "Mã HS 0306.33 (cua sống/tươi). Xuất khẩu đòi hỏi chứng thư kiểm dịch thủy sản sống, tem đeo càng chính ngạch và truy xuất ao nuôi.",
        "customsHsAndAuditEn": "HS 0306.33 (live crabs). Export requires live aquatic health certificates, serialized claw rings, and pond traceability.",
    },
}

CSC_REPL_EXTRA = {
    "csc-v7-01": {"agencyNo": "10247", "cityVi": "Thượng Hải", "provinceId": "shanghai"},
    "csc-v7-02": {"agencyNo": "10027", "cityVi": "Bắc Kinh", "provinceId": "beijing"},
    "csc-v7-03": {"agencyNo": "10532", "cityVi": "Trường Sa (Hồ Nam)", "provinceId": "hunan"},
    "csc-v7-08": {"agencyNo": "10699", "cityVi": "Tây An (Thiểm Tây)", "provinceId": "shaanxi"},
    "csc-v7-09": {"agencyNo": "10285", "cityVi": "Tô Châu (Giang Tô)", "provinceId": "jiangsu"},
    "csc-v7-12": {"agencyNo": "10026", "cityVi": "Bắc Kinh", "provinceId": "beijing"},
}


def load_verified_map() -> dict[str, str]:
    prov = json.loads(PROVENANCE_PATH.read_text(encoding="utf-8"))
    out: dict[str, str] = {}
    for eid, meta in prov.items():
        if not isinstance(meta, dict):
            continue
        rel = str(meta.get("targetFile") or "").strip().lstrip("/")
        fp = ROOT / rel
        if rel and fp.is_file() and fp.stat().st_size > 5000:
            out[eid] = rel
    return out


def load_pack2_replacements() -> tuple[dict[str, dict], dict[str, dict]]:
    node_code = r"""
const fs = require('fs'); const vm = require('vm');
const sb = { window: {} }; vm.createContext(sb);
vm.runInContext(fs.readFileSync('src/data/v8/V8_Pack2.js', 'utf8'), sb);
const p2 = sb.window.CCE_V8_PACK2;
process.stdout.write(JSON.stringify({ gi: p2.replacementsGiV7, csc: p2.replacementsCscV7 }));
"""
    res = subprocess.run(["node", "-e", node_code], cwd=str(ROOT), capture_output=True, text=True, check=True)
    data = json.loads(res.stdout)
    return (
        {x["replaceId"]: x for x in data["gi"]},
        {x["replaceId"]: x for x in data["csc"]},
    )


def update_v7_replacements(vmap: dict[str, str], gi_repl: dict[str, dict], csc_repl: dict[str, dict]) -> int:
    txt = V7_PATH.read_text(encoding="utf-8")
    marker = "var V7_DATA = "
    idx = txt.find(marker)
    assert idx >= 0, "var V7_DATA = not found"
    start_pos = idx + len(marker)
    obj, end_pos = json.JSONDecoder().raw_decode(txt, start_pos)
    changes = 0

    for item in obj.get("giAdditional12") or []:
        eid = item.get("id")
        if eid in gi_repl:
            r = gi_repl[eid]
            ext = GI_REPL_EXTRA.get(eid, {})
            item["zh"] = r["newZh"]
            item["nameVi"] = r["newNameVi"]
            item["nameEn"] = r["newNameEn"]
            item["vi"] = r["newNameVi"]
            item["en"] = r["newNameEn"]
            item["gbStandardCode"] = r.get("gbCode", item.get("gbStandardCode", ""))
            item["protectionRuleVi"] = r.get("captionVi", "")
            item["protectionRuleEn"] = r.get("captionEn", "")
            for k, v in ext.items():
                item[k] = v
            if eid in vmap:
                item["imagePath"] = vmap[eid]
            changes += 1

    for item in obj.get("cscUniversities12") or []:
        eid = item.get("id")
        if eid in csc_repl:
            r = csc_repl[eid]
            ext = CSC_REPL_EXTRA.get(eid, {})
            item["zh"] = r["newZh"]
            item["nameVi"] = r["newNameVi"]
            item["nameEn"] = r["newNameEn"]
            item["strengthsVi"] = r.get("captionVi", "")
            item["majorsVi"] = r.get("captionVi", "")
            item["agencyNo"] = ext.get("agencyNo", item.get("agencyNo", ""))
            item["agencyNumber"] = ext.get("agencyNo", item.get("agencyNumber", ""))
            item["cityVi"] = ext.get("cityVi", item.get("cityVi", ""))
            item["provinceId"] = ext.get("provinceId", item.get("provinceId", ""))
            if eid in vmap:
                item["imagePath"] = vmap[eid]
            changes += 1

    if changes:
        dumped = json.dumps(obj, ensure_ascii=False, indent=2)
        V7_PATH.write_text(txt[:start_pos] + dumped + txt[end_pos:], encoding="utf-8")
    return changes


def inject_image_paths_into_pack(path: pathlib.Path, tag_to_img: dict[str, str], field_to_match: str = "id") -> int:
    txt = path.read_text(encoding="utf-8")
    lines = txt.splitlines()
    out_lines: list[str] = []
    changes = 0
    pat = re.compile(rf'^(\s*){field_to_match}:\s*"([^"]+)",?\s*$')
    img_line_pat = re.compile(r'^\s*imagePath:\s*"[^"]+",?\s*$')

    i = 0
    while i < len(lines):
        line = lines[i]
        m = pat.match(line)
        if m:
            indent, key_val = m.group(1), m.group(2)
            out_lines.append(line if line.rstrip().endswith(",") else line.rstrip() + ",")
            img_rel = tag_to_img.get(key_val)
            # Check if next line already sets imagePath
            has_next_img = (i + 1 < len(lines)) and bool(img_line_pat.match(lines[i + 1]))
            if img_rel:
                new_img_line = f'{indent}imagePath: "{img_rel}",'
                if has_next_img:
                    if lines[i + 1].strip() != new_img_line.strip():
                        out_lines.append(new_img_line)
                        changes += 1
                    else:
                        out_lines.append(lines[i + 1])
                    i += 2
                    continue
                else:
                    out_lines.append(new_img_line)
                    changes += 1
            elif has_next_img:
                out_lines.append(lines[i + 1])
                i += 2
                continue
        else:
            out_lines.append(line)
        i += 1

    if changes:
        path.write_text("\n".join(out_lines) + ("\n" if txt.endswith("\n") else ""), encoding="utf-8")
    return changes


def sync_pack2_target_files(vmap: dict[str, str]) -> int:
    v7_txt = V7_PATH.read_text(encoding="utf-8")
    v7_idx = v7_txt.find("var V7_DATA = ") + len("var V7_DATA = ")
    v7_obj, _ = json.JSONDecoder().raw_decode(v7_txt, v7_idx)
    full_map = dict(vmap)
    for b in v7_obj.get("brandsAdditional20") or []:
        bid = b.get("id")
        bip = str(b.get("imagePath") or "").strip().lstrip("/")
        if bid and bip and bid not in full_map and (ROOT / bip).is_file():
            full_map[bid] = bip

    p2_path = V8_DIR / "V8_Pack2.js"
    txt = p2_path.read_text(encoding="utf-8")
    lines = txt.splitlines()
    out_lines: list[str] = []
    cur_id = ""
    changes = 0
    id_pat = re.compile(r'^\s*(?:id|replaceId):\s*"([^"]+)"')
    tf_pat = re.compile(r'^(\s*targetFile:\s*)"([^"]+)"(,?.*)$')
    for line in lines:
        m_id = id_pat.match(line)
        if m_id:
            cur_id = m_id.group(1)
        m_tf = tf_pat.match(line)
        if m_tf and cur_id in full_map:
            new_rel = full_map[cur_id]
            if m_tf.group(2) != new_rel:
                out_lines.append(f'{m_tf.group(1)}"{new_rel}"{m_tf.group(3)}')
                changes += 1
                continue
        out_lines.append(line)
    if changes:
        p2_path.write_text("\n".join(out_lines) + ("\n" if txt.endswith("\n") else ""), encoding="utf-8")
    return changes


def main() -> int:
    vmap = load_verified_map()
    gi_repl, csc_repl = load_pack2_replacements()

    v7_changes = update_v7_replacements(vmap, gi_repl, csc_repl)
    p2_c = sync_pack2_target_files(vmap)

    # Alias map for Pack 8 quizVisual50 targetAssetTags -> verified image paths
    quiz_tag_map = dict(vmap)
    if "v7-herb-55" in vmap:
        quiz_tag_map["herb-goji"] = vmap["v7-herb-55"]
    if "v7-herb-54" in vmap:
        quiz_tag_map["herb-hawthorn"] = vmap["v7-herb-54"]

    # Map Pack1/3/4/5 entity IDs (only entity IDs whose files live on disk)
    entity_map = {k: v for k, v in vmap.items() if k.startswith(("v8-m", "inst-", "op-", "mask-", "ethnic-", "lit-mod-", "auth-", "urban-"))}

    p1_c = inject_image_paths_into_pack(V8_DIR / "V8_Pack1.js", entity_map, "id")
    p3_c = inject_image_paths_into_pack(V8_DIR / "V8_Pack3.js", entity_map, "id")
    p4_c = inject_image_paths_into_pack(V8_DIR / "V8_Pack4.js", entity_map, "id")
    p5_c = inject_image_paths_into_pack(V8_DIR / "V8_Pack5.js", entity_map, "id")
    p8_c = inject_image_paths_into_pack(V8_DIR / "V8_Pack8.js", quiz_tag_map, "targetAssetTag")

    print(f"Verified map: {len(vmap)} assets on disk.")
    print(f"Wired: V7_replacements={v7_changes}, Pack1={p1_c}, Pack2={p2_c}, Pack3={p3_c}, Pack4={p4_c}, Pack5={p5_c}, Pack8_quizVisual={p8_c}")

    for js_file in [V7_PATH, V8_DIR / "V8_Pack1.js", V8_DIR / "V8_Pack2.js", V8_DIR / "V8_Pack3.js", V8_DIR / "V8_Pack4.js", V8_DIR / "V8_Pack5.js", V8_DIR / "V8_Pack8.js"]:
        res = subprocess.run(["node", "--check", str(js_file)], capture_output=True, text=True)
        if res.returncode != 0:
            print(f"[ERR] Syntax fail in {js_file}: {res.stderr}")
            return 1
    print("All patched V7/V8 JS bundles passed `node --check`.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
