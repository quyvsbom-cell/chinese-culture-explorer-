"""Import Gemini Web V4 bundles safely from Downloads into src/data/v4/.

Usage:
  uv run python scripts/import_v4_bundles.py
  uv run python scripts/import_v4_bundles.py --source "C:\\Users\\admin\\Downloads\\V4_All_6_Packs"

Supports both Playbook .js IIFE packs (V4_Pack1..V4_Pack6) and .json drops.
Appends lightweight adapters so existing components and full Playbook schemas
work seamlessly together.
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(".")
DEFAULT_CANDIDATES = [
    pathlib.Path(r"C:\Users\admin\Downloads\V4_All_6_Packs"),
    pathlib.Path(r"C:\Users\admin\Downloads\Gửi antigravity V4"),
]
OUT_DIR = ROOT / "src" / "data" / "v4"
EMOJI_RE = re.compile(r"[\U0001F300-\U0001FAFF\u2600-\u27BF]+")


def clean_str(val: str) -> str:
    return EMOJI_RE.sub("", val).strip()


def clean_js_text(txt: str) -> str:
    txt = EMOJI_RE.sub("", txt)
    # Harmonize any stray literal V4 dev labels inside prose strings if present
    txt = re.sub(r"\bseamlessly\b", "directly", txt, flags=re.I)
    return txt


def sanitize_obj(obj):
    if isinstance(obj, str):
        return clean_str(obj)
    if isinstance(obj, list):
        return [sanitize_obj(x) for x in obj]
    if isinstance(obj, dict):
        return {k: sanitize_obj(v) for k, v in obj.items()}
    return obj


ADAPTER_PACK1 = r"""
// --- Backward-compatible Adapter for CCE V4 Knowledge Hub ---
(function () {
  "use strict";
  var u = window.CCE_V4_UNESCO || {};
  var sites = Array.isArray(u.unescoSites) ? u.unescoSites : [];
  window.CCE_UNESCO_V4 = sites.map(function (it) {
    return {
      id: it.id,
      provinceId: it.provinceId,
      year: it.year,
      kind: it.category ? (it.category.charAt(0).toUpperCase() + it.category.slice(1)) : "Cultural",
      zh: it.nameZh || "",
      pinyin: it.pinyin || "",
      vi: it.nameVi || "",
      en: it.nameEn || "",
      noteVi: it.summaryVi || "",
      noteEn: it.summaryEn || "",
      bestSeasonVi: it.bestSeasonVi || "",
      bestSeasonEn: it.bestSeasonEn || "",
      criteria: it.criteria || ""
    };
  });
})();
"""

ADAPTER_PACK2 = r"""
// --- Backward-compatible Adapter for Literary Canons & Arts ---
(function () {
  "use strict";
  var la = window.CCE_V4_LIT_ARTS || {};
  var prev = window.CCE_LITERATURE_HSK_V4 || {};
  var canons = (la.fourGreatNovels || []).map(function (n) {
    return {
      id: n.id,
      zh: n.titleZh ? ("《" + n.titleZh + "》" + (n.authorEra ? " · " + n.authorEra : "")) : "",
      titleVi: n.titleVi + (n.authorEra ? " (" + n.authorEra + ")" : ""),
      titleEn: n.titleEn || n.titleVi,
      hskTag: n.authorEra || "HSK 5–9 Literary Canon",
      coreThemeVi: n.coreThemesVi || "",
      coreThemeEn: n.coreThemesEn || "",
      hskVocabVi: n.realLocationsVi ? ("Địa danh thực tế: " + n.realLocationsVi) : (n.vietnamReceptionVi || "")
    };
  });
  window.CCE_LITERATURE_HSK_V4 = {
    canons: canons.length ? canons : (prev.canons || []),
    hskBriefs: prev.hskBriefs || []
  };
})();
"""

ADAPTER_PACK3 = r"""
// --- Backward-compatible Adapter (Non-Clinical TCM + Eight Great Cuisines) ---
(function () {
  "use strict";
  var sci = window.CCE_V4_SCI_TEA || {};
  var tcm = sci.tcmHeritageOverview || {};
  var EIGHT_CUISINES = [
    { id: "cui-chuan", zh: "川菜", vi: "Xuyên Thái (Tứ Xuyên)", en: "Sichuan Cuisine", techVi: "Hoa tiêu + ớt (Mala), Đậu tương Tỳ Huyện, đảo chảo nhanh.", techEn: "Mala numbing peppercorn, Pixian doubanjiang fermentation, layered seasoning.", sigVi: "Đậu phụ Ma Bà, Gà Cung Bảo, Lẩu Tứ Xuyên" },
    { id: "cui-yue", zh: "粤菜", vi: "Việt Thái (Quảng Đông)", en: "Cantonese Cuisine", techVi: "Giữ vị tươi nguyên bản (Thanh – Tiên – Hoạt – Nộn), hấp thủy nhiệt, điểm tâm Dimsum.", techEn: "Respecting natural umami via precision steaming, roasting, and Yum Cha dimsum.", sigVi: "Há cảo tôm, Xá xíu mật ong, Cháo sườn Quảng Đông" },
    { id: "cui-lu", zh: "鲁菜", vi: "Lỗ Thái (Sơn Đông)", en: "Shandong Cuisine", techVi: "Đứng đầu Bát đại thái hệ trong cung đình Bắc Kinh; tinh thông hầm nước dùng thanh và hành tây.", techEn: "Imperial North ancestor renowned for crystal consommé broths and seafood braising.", sigVi: "Hải sâm om hành, Cá chép chua ngọt" },
    { id: "cui-su", zh: "苏菜", vi: "Tô Thái (Giang Tô)", en: "Jiangsu Cuisine", techVi: "Kỹ thuật thái dao tinh xảo (Văn Tư Đậu Phụ), lửa nhỏ hầm nhừ thanh ngọt.", techEn: "Virtuoso knife geometry and slow-braised mild sweetness.", sigVi: "Sư tử đầu (thịt viên), Cá quế Tùng Thử" },
    { id: "cui-zhe", zh: "浙菜", vi: "Chiết Thái (Chiết Giang)", en: "Zhejiang Cuisine", techVi: "Thanh đạm thanh nhã, kết hợp trà Long Tỉnh Hàng Châu & măng non Giang Nam.", techEn: "Delicate river seafood and Hangzhou Longjing tea infusions.", sigVi: "Tôm nõn xào trà Long Tỉnh, Thịt kho Đông Pha" },
    { id: "cui-min", zh: "Mân Thái", zhFull: "闽菜", vi: "Mân Thái (Phúc Kiến)", en: "Fujian Cuisine", techVi: "Canh hải sản núi rừng (Phật Khiêu Tường), men rượu hồng cúc.", techEn: "Complex mountain-and-sea stocks accented with red yeast rice wine lees.", sigVi: "Phật Khiêu Tường, Súp cá viên Phúc Châu" },
    { id: "cui-xiang", zh: "湘菜", vi: "Tương Thái (Hồ Nam)", en: "Hunan Cuisine", techVi: "Cay thuần khiết (ớt ngâm muối + xông khói lạp vị).", techEn: "Pure fermented chili heat paired with cured mountain smoked meats.", sigVi: "Đầu cá hấp ớt băm, Thịt xào ớt Hồ Nam" },
    { id: "cui-hui", zh: "徽菜", vi: "Huy Thái (An Huy)", en: "Anhui Cuisine", techVi: "Hầm lửa lớn – nhỏ bằng nồi đất núi Hoàng Sơn (măng khô, giăm bông Kim Hoa).", techEn: "Highland wild-herb stews and cured mountain ham braising.", sigVi: "Cá Quế thối Huy Châu, Vịt hầm măng khô" }
  ];
  EIGHT_CUISINES[5].zh = "闽菜";
  window.CCE_SCIENCE_TCM_FOOD_V4 = {
    eightCuisines: EIGHT_CUISINES,
    tcmFoundations: {
      disclaimerVi: (tcm.disclaimerVi ? tcm.disclaimerVi + " " : "") + "(Nội dung KHÔNG thay thế chẩn đoán hay điều trị y khoa lâm sàng.)",
      disclaimerEn: (tcm.disclaimerEn ? tcm.disclaimerEn + " " : "") + "(Strictly educational cultural study—NOT clinical medical diagnosis or treatment.)",
      classics: [
        { id: "tcm-neijing", zh: "《黄帝内经》", vi: "Hoàng Đế Nội Kinh (Tố Vấn & Linh Khu)", en: "Yellow Emperor's Inner Canon", noteVi: "Đặt nền móng lý luận Âm Dương – Ngũ Hành, Tạng Phủ, Kinh Lạc và dưỡng sinh theo 4 mùa.", noteEn: "Establishes Yin-Yang, Five Phases, Zang-Fu, Meridian frameworks, and seasonal preventative harmony." },
        { id: "tcm-shanghan", zh: "《伤寒杂病论》", vi: "Thương Hàn Tạp Bệnh Luận (Trương Trọng Cảnh)", en: "Treatise on Cold Damage Disorders", noteVi: "Hệ thống hóa Biện chứng Luận trị Lục Kinh và phương thang phối ngũ cổ điển thời Đông Hán.", noteEn: "Codified Six-Channel pattern differentiation and classical herbal formula architecture." },
        { id: "tcm-bencao", zh: "《本草纲目》", vi: "Bản Thảo Cương Mục (Lý Thời Trân · 1578)", en: "Compendium of Materia Medica (1578)", noteVi: "Tổng kết 1.892 vị tự nhiên học thời Minh — ảnh hưởng sâu sắc tới Hải Thượng Lãn Ông ở Việt Nam.", noteEn: "Ming encyclopedic taxonomy of 1,892 natural substances that strongly engaged Vietnamese medical scholars." }
      ],
      principles: (tcm.pillars || []).map(function (p) {
        return {
          id: p.id,
          zh: p.zh + (p.pinyin ? " (" + p.pinyin + ")" : ""),
          vi: p.vi,
          en: p.en,
          summaryVi: p.descVi || "",
          summaryEn: p.descEn || ""
        };
      })
    }
  };
})();
"""

ADAPTER_PACK4 = r"""
// --- Backward-compatible Adapter for Sino-Vietnam & Modern China 2026 ---
(function () {
  "use strict";
  var sv = window.CCE_V4_SINOVIET_MOD || {};
  window.CCE_SINO_VIET_MODERN_V4 = {
    perspectives: (sv.sinoViet10Pillars || []).map(function (p) {
      return {
        id: p.id,
        zh: p.hanziTheme || "",
        titleVi: p.titleVi || "",
        titleEn: p.titleEn || "",
        summaryVi: p.synthesisVi || p.vietnamSideVi || "",
        summaryEn: p.synthesisEn || p.vietnamSideEn || ""
      };
    })
  };
})();
"""

ADAPTER_PACK5 = r"""
// --- Backward-compatible Adapter for Politics, Yin-Yang-Wuxing, HSK 60 & Study Abroad ---
(function () {
  "use strict";
  var pc = window.CCE_V4_PERSONAL_CORE || {};
  var pol = pc.chinaPoliticsGovernance || {};
  var eco = pc.macroEconomics2026 || {};
  var yy = pc.yinYangWuxingUnifyingStudy || {};
  var stAb = pc.studyAbroadRoadmap || {};

  var polEconList = []
    .concat((pol.institutions || []).map(function (inst) {
      return {
        id: inst.id,
        zh: inst.zh || "",
        titleVi: inst.titleVi || "",
        titleEn: inst.titleEn || "",
        summaryVi: (inst.roleVi || "") + (inst.examEconRelevanceVi ? " — " + inst.examEconRelevanceVi : ""),
        summaryEn: inst.roleEn || ""
      };
    }))
    .concat((eco.pillars || []).map(function (pil) {
      return {
        id: pil.id,
        zh: pil.zh || "",
        titleVi: pil.titleVi || "",
        titleEn: pil.titleEn || "",
        summaryVi: (pil.analysisVi || "") + (pil.tradeImplicationVi ? " — " + pil.tradeImplicationVi : ""),
        summaryEn: (pil.analysisEn || "") + (pil.tradeImplicationEn ? " " + pil.tradeImplicationEn : "")
      };
    }));

  window.CCE_V4_DISCIPLINES = {
    politicsEcon2026: polEconList,
    yinYangWuxing: {
      epistemicBannerVi: (yy.epistemologyBannerVi || "") + " (Lưu ý: KHÔNG phải y học lâm sàng hay tiên tri xác suất.)",
      epistemicBannerEn: yy.epistemologyBannerEn || "Strictly East Asian comparative intellectual history—NOT clinical medicine nor predictive science.",
      monographs: (yy.unifyingMonographs4 || []).map(function (m) {
        return {
          id: m.id,
          zh: m.zhTitle || "",
          titleVi: m.titleVi || "",
          titleEn: m.titleEn || "",
          bodyVi: (m.analysisVi || "") + (m.wuxingMechanismVi ? " " + m.wuxingMechanismVi : "")
        };
      }),
      matrix5x4: (yy.fivePhaseCrossMatrix || []).map(function (row) {
        return {
          phase: (row.vi || "") + " (" + (row.en || "") + " · " + (row.zh || "") + ")",
          seasonDir: row.fengshuiVi || "",
          tcm: row.tcmVi || "",
          fengshui: row.fengshuiVi || "",
          bazi: row.baziVi || "",
          ziwei: row.ziweiVi || ""
        };
      })
    },
    studyAbroad: {
      scholarships: (stAb.scholarships || []).map(function (s) {
        return {
          id: s.id,
          name: (s.nameVi || "") + (s.nameZh ? " (" + s.nameZh + ")" : ""),
          targetVi: (s.coverageVi || "") + (s.tipVi ? " " + s.tipVi : ""),
          targetEn: s.coverageEn || ""
        };
      }),
      universities: (stAb.universities12 || []).map(function (u) {
        return {
          id: u.id,
          tier: u.tier || "",
          zh: (u.nameZh || "") + (u.cityId ? " · " + u.cityId.toUpperCase() : ""),
          vi: u.nameVi || "",
          en: u.nameEn || "",
          strengthVi: (u.bestMajorsVi || "") + (u.scholarshipTipVi ? " (" + u.scholarshipTipVi + ")" : ""),
          strengthEn: u.bestMajorsEn || ""
        };
      }),
      studyPlanTemplateEnZh: {
        titleVi: "45 Mẫu câu Study Plan (学习计划) & Phỏng vấn Hội đồng CSC (Anh – Trung – Việt)",
        sections: (stAb.studyPlanAndInterview45 || []).slice(0, 6).map(function (sp) {
          return { headEn: sp.en || "", zh: sp.zh || "", tipVi: sp.vi || "" };
        })
      },
      interviewQa: (stAb.studyPlanAndInterview45 || []).filter(function (x) { return x.stage === "interview"; }).slice(0, 6).map(function (qa) {
        return { qEn: qa.en || "", qZh: qa.zh || "", aTipVi: qa.vi || "" };
      })
    }
  };

  // Wire all 60 HSK cultural briefs into CCE_LITERATURE_HSK_V4.hskBriefs
  window.CCE_LITERATURE_HSK_V4 = window.CCE_LITERATURE_HSK_V4 || { canons: [], hskBriefs: [] };
  window.CCE_LITERATURE_HSK_V4.hskBriefs = (pc.hskCulturalBriefs60 || []).map(function (b) {
    return {
      id: b.id,
      hsk: String(b.level || "HSK 5").replace("HSK ", ""),
      topic: b.topic || "",
      zh: b.keyTermZh || "",
      pinyin: b.passagePinyin || "",
      hanViet: b.titleVi || "",
      vi: b.summaryVi || "",
      en: b.summaryEn || "",
      titleEn: b.titleEn || "",
      passageZh: b.passageZh || "",
      quizPromptVi: b.quizPromptVi || "",
      quizPromptEn: b.quizPromptEn || ""
    };
  });
})();
"""

ADAPTER_PACK6_TRADE = r"""
// --- Backward-compatible Adapter for EU-China-VN Trilingual Studio ---
(function () {
  "use strict";
  var tb = window.CCE_V4_TRADE_BRIDGE || {};
  var SILK_CONTINUUM = [
    {
      eraHub: "Trường An (Tây An) · 长安 → 西安",
      ancientRoleVi: "Kinh đô Đường–Hán xuất phát đoàn lạc đà mang tơ lụa, gốm Tam Thái, giấy qua Hành lang Hà Tây.",
      modernRoleVi: "Cảng cạn Quốc tế Tây An — ga khởi hành số 1 của Tàu Liên vận Trung–Âu (中欧班列) chạy thẳng Ba Lan & Đức.",
      modernRoleEn: "Xi'an International Port anchors CR Express high-frequency block trains into Europe."
    },
    {
      eraHub: "Đôn Hoàng – Tân Cương (Ngọc Môn Quan / Hoắc Nhĩ Quả Tư)",
      ancientRoleVi: "Trạm kiểm soát thương đội, trao đổi phiên dịch đa ngữ (Chữ Hán – Phạn – Túc Đặc – Ba Tư) và hộ chiếu thông hành cổ.",
      modernRoleVi: "Cửa khẩu liên vận đường sắt Hoắc Nhĩ Quả Tư / Alashankou chuyển đổi khổ ray 1435mm ↔ 1520mm & thông quan số.",
      modernRoleEn: "Khorgos & Alashankou execute rapid rail break-of-gauge cranes and digital customs clearance."
    },
    {
      eraHub: "Tuyền Châu – Quảng Châu – Vịnh Bắc Bộ · 海上丝路",
      ancientRoleVi: "Cảng Thị Tống–Nguyên nơi gốm Thanh Hoa, gốm Chu Đậu (Việt Nam) & tơ lụa vượt eo Malacca tới Ba Tư và Địa Trung Hải.",
      modernRoleVi: "Hệ thống Siêu cảng Container (Thượng Hải, Ninh Ba, Thâm Quyến – Diêm Điền, Hải Phòng) nối tới Rotterdam/Antwerp.",
      modernRoleEn: "Mega container ports directly connect Vietnam & South China manufacturing with Northern Europe."
    }
  ];

  window.CCE_TRADE_TRILINGUAL_V4 = {
    terms: (tb.logisticsTerms100 || []).map(function (t) {
      return {
        id: t.id,
        category: t.cat || "incoterms",
        en: t.en || "",
        zh: t.zh || "",
        pinyin: t.pinyin || "",
        vi: t.vi || "",
        contextEn: t.contextNoteEn || "",
        contextVi: t.contextNoteVi || ""
      };
    }),
    dialogues: tb.workplaceDialogues12 || [],
    emailPairs: (tb.bilingualEmailPairs8 || []).map(function (em) {
      return {
        id: em.id,
        topic: (em.titleVi || "") + (em.titleEn ? " · " + em.titleEn : ""),
        factoryZh: em.factoryZh || "",
        factoryPinyin: em.factoryPinyin || "",
        euHqEn: em.euManagerEn || "",
        viSummary: em.viSummary || ""
      };
    }),
    parallelArticles: tb.parallelArticles10 || [],
    silkRoadLogisticsContinuum: SILK_CONTINUUM
  };
})();
"""

ADAPTER_PACK6_QUIZ_TAIL = r"""
  window.CCE_V4_QUIZ = RAW_V4_QUIZ.map(function (q) {
    var topicLbl = q.pillar === "trade_logistics" ? "EU–China Logistics & Trade"
      : q.pillar === "unesco_geo" ? "UNESCO & China Geography"
      : q.pillar === "hsk_classics" ? "HSK Classics & Poetry"
      : q.pillar === "tcm_tea_food" ? "TCM, Tea & Cuisine"
      : "Politics & Study Abroad";
    return {
      id: q.id,
      pillar: q.pillar,
      topicVi: topicLbl,
      topicEn: topicLbl,
      questionVi: q.questionVi,
      questionEn: q.questionEn,
      optionsVi: q.optionsVi,
      optionsEn: q.optionsEn,
      correctIndex: q.correctIndex,
      explainVi: q.explanationVi || q.explainVi || "",
      explainEn: q.explanationEn || q.explainEn || ""
    };
  });
})();
"""

PACK_MAPPING = {
    "V4_Pack1_UNESCO_Geology_Towns.js": ("unescoHeritageEncyclopediaV4.js", ADAPTER_PACK1),
    "V4_Pack2_Literature_Poetry_Opera.js": ("literatureOperaArtsV4.js", ADAPTER_PACK2),
    "V4_Pack3_Science_TCM_Tea_Dining.js": ("scienceTeaMedicineFoodV4.js", ADAPTER_PACK3),
    "V4_Pack4_SinoViet_Museums_China2026.js": ("sinoVietModernChinaV4.js", ADAPTER_PACK4),
    "V4_Pack5_Politics_Econ_HSK_TCM_Study.js": ("politicsEconHskTcmStudyV4.js", ADAPTER_PACK5),
}


def import_js_pack6(fp: pathlib.Path, dry_run: bool = False) -> list[str]:
    raw = clean_js_text(fp.read_text(encoding="utf-8-sig"))
    marker = "window.CCE_V4_QUIZ = ["
    idx = raw.find(marker)
    if idx == -1:
        raise ValueError(f"Could not find '{marker}' split point in {fp.name}")

    trade_part = raw[:idx].rstrip()
    # Close the outer IIFE of trade_part cleanly
    if not trade_part.endswith("})();"):
        trade_part += "\n})();\n"
    trade_out = trade_part + "\n" + ADAPTER_PACK6_TRADE.lstrip()

    quiz_body = raw[idx:]
    # Strip trailing })(); of outer IIFE so we wrap in our own normalizer IIFE
    quiz_body = re.sub(r"\n\}\)\(\);\s*$", "", quiz_body.rstrip())
    quiz_body = quiz_body.replace("window.CCE_V4_QUIZ = [", "var RAW_V4_QUIZ = [", 1)
    quiz_out = (
        "// Imported V4 Quiz Arena (90 Bilingual Questions from Pack 6)\n"
        "(function () {\n"
        '  "use strict";\n\n'
        + quiz_body
        + "\n"
        + ADAPTER_PACK6_QUIZ_TAIL.lstrip()
    )

    written: list[str] = []
    if not dry_run:
        (OUT_DIR / "tradeTrilingualBridgeV4.js").write_text(trade_out, encoding="utf-8")
        (OUT_DIR / "quizArenaV4.js").write_text(quiz_out, encoding="utf-8")
    written.append("src/data/v4/tradeTrilingualBridgeV4.js")
    written.append("src/data/v4/quizArenaV4.js")
    return written


def import_json_file(fp: pathlib.Path, dry_run: bool = False) -> tuple[int, str]:
    raw = json.loads(fp.read_text(encoding="utf-8-sig"))
    items = raw if isinstance(raw, list) else raw.get("items", [raw])
    seen: set[str] = set()
    clean_items = []
    for idx, it in enumerate(items):
        if not isinstance(it, dict):
            continue
        it = sanitize_obj(it)
        iid = str(it.get("id") or f"{fp.stem}-{idx + 1}")
        if iid in seen:
            continue
        seen.add(iid)
        it["id"] = iid
        clean_items.append(it)

    target = OUT_DIR / f"imported_{re.sub(r'[^a-zA-Z0-9_-]', '_', fp.stem)}.js"
    if not dry_run and clean_items:
        OUT_DIR.mkdir(parents=True, exist_ok=True)
        payload = json.dumps(clean_items, ensure_ascii=False, indent=2)
        js = (
            "// Auto-imported from Gemini Web V4 bundle drop\n"
            "(function () {\n"
            "  'use strict';\n"
            "  window.CCE_V4_IMPORTED = window.CCE_V4_IMPORTED || {};\n"
            f"  window.CCE_V4_IMPORTED[{json.dumps(fp.stem)}] = {payload};\n"
            "})();\n"
        )
        target.write_text(js, encoding="utf-8")
    return len(clean_items), target.as_posix()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", default="")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    src_dir = None
    if args.source:
        cand = pathlib.Path(args.source)
        if cand.exists():
            src_dir = cand
    else:
        for cand in DEFAULT_CANDIDATES:
            if cand.exists():
                src_dir = cand
                break

    if not src_dir:
        print("[import_v4_bundles] No drop folder found; seed packs intact.")
        return 0

    js_files = sorted(src_dir.glob("*.js"))
    json_files = sorted(src_dir.glob("*.json"))
    if not js_files and not json_files:
        print(f"[import_v4_bundles] Drop folder empty ({src_dir}); 0 files imported.")
        return 0

    imported_count = 0
    for fp in js_files:
        if fp.name in PACK_MAPPING:
            out_name, adapter = PACK_MAPPING[fp.name]
            cleaned = clean_js_text(fp.read_text(encoding="utf-8-sig")).rstrip()
            out_txt = cleaned + "\n" + adapter.lstrip()
            target = OUT_DIR / out_name
            if not args.dry_run:
                target.write_text(out_txt, encoding="utf-8")
            print(f"Imported JS Playbook Pack {fp.name} -> {target.as_posix()} ({len(out_txt)} chars)")
            imported_count += 1
        elif fp.name == "V4_Pack6_EU_China_Logistics_Trilingual_Quiz.js":
            outputs = import_js_pack6(fp, dry_run=args.dry_run)
            print(f"Imported & split {fp.name} -> {', '.join(outputs)}")
            imported_count += 1

    for fp in json_files:
        cnt, out_path = import_json_file(fp, dry_run=args.dry_run)
        imported_count += cnt
        print(f"Imported {cnt} JSON records from {fp.name} -> {out_path}")

    print(f"IMPORT_V4_COMPLETE: {imported_count} packs/records processed from {src_dir}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
