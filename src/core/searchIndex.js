// ============================================================================
// CHINESE CULTURE EXPLORER — Weighted Global Search Index (Step 05)
// Indexes 108 essays, 45 classics, 72 paintings, 55 artifacts, 850+ dict,
// 34 provinces AND all 456+ provincial sub-items (heritages, dishes, figures).
// Scoring: exact (+100) > prefix (+50) > folded/toneless Pinyin (+25) > desc (+10)
// ============================================================================

(function () {
  "use strict";

  var _items = null;
  var _dirty = true;

  var QUERY_ALIASES = {
    "hoang son": "an huy huangshan",
    "cuu trai cau": "tu xuyen jiuzhaigou",
    "truong gia gioi": "ho nam zhangjiajie",
    "thien dan": "bac kinh temple of heaven",
    "tu cam thanh": "co cung forbidden city",
    "dau cung": "dougong forbidden city",
    "lau cuu cung": "trung khanh",
    "to thuc": "chiet giang ho bac tu xuyen",
    "vuong duong minh": "quy chau chiet giang",
    "khong tu": "son dong luan ngu nho gia",
    "canton fair": "quang dong quang chau",
    "rcep": "hai quan form e thuong mai",
    "luc thu": "tu dien thuyet van"
  };

  function norm(str) {
    if (window.CCE_UTILS) return window.CCE_UTILS.foldVi(str);
    return String(str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .toLowerCase();
  }

  function buildIndex() {
    var out = [];
    var arts = window.CCE_ARTICLES || [];
    for (var i = 0; i < arts.length; i++) {
      var a = arts[i];
      out.push({
        type: "article",
        id: a.id,
        title: a.titleVi || a.titleEn || "",
        titleEn: a.titleEn || "",
        zh: a.titleZh || "",
        sub: a.categoryLabel || "Chuyên luận",
        rawTitle: norm((a.titleVi || "") + " " + (a.titleEn || "") + " " + (a.titleZh || "")),
        body: norm((a.abstract || "") + " " + (a.introduction || "") + " " + (a.categoryLabel || ""))
      });
    }

    var pls = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    for (i = 0; i < pls.length; i++) {
      var p = pls[i];
      var artName = (p.artist && (p.artist.nameVi || p.artist.nameEn)) || "";
      out.push({
        type: "painting",
        id: p.id,
        title: p.titleVi || p.titleEn || "",
        titleEn: p.titleEn || "",
        zh: p.titleZh || "",
        sub: artName + (p.dynasty ? " · " + (p.dynasty.nameVi || "") : ""),
        rawTitle: norm((p.titleVi || "") + " " + (p.titleEn || "") + " " + (p.titleZh || "") + " " + (p.pinyin || "")),
        body: norm(artName + " " + (p.museum || "") + " " + (p.genreLabel || ""))
      });
    }

    var mus = (window.CCE_MUSEUM && window.CCE_MUSEUM.artifacts) || [];
    for (i = 0; i < mus.length; i++) {
      var m = mus[i];
      out.push({
        type: "artifact",
        id: m.id,
        title: m.nameVi || m.nameEn || "",
        titleEn: m.nameEn || "",
        zh: m.nameZh || "",
        sub: (m.periodLabel || "") + " · " + (m.collection || ""),
        rawTitle: norm((m.nameVi || "") + " " + (m.nameEn || "") + " " + (m.nameZh || "") + " " + (m.pinyin || "")),
        body: norm((m.material || "") + " " + (m.culturalSignificance || ""))
      });
    }

    var classics = (window.CCE_PHILOSOPHY && window.CCE_PHILOSOPHY.classicalTexts) || [];
    for (i = 0; i < classics.length; i++) {
      var c = classics[i];
      out.push({
        type: "classic",
        id: c.id,
        title: c.titleVi || c.titleEn || "",
        titleEn: c.titleEn || "",
        zh: c.titleZh || "",
        sub: (c.treasuryLabel || "Cổ tịch") + " · " + (c.author || c.school || ""),
        rawTitle: norm((c.titleVi || "") + " " + (c.titleEn || "") + " " + (c.titleZh || "")),
        body: norm((c.summary || "") + " " + (c.author || "") + " " + (c.era || ""))
      });
    }

    var reg = window.CCE_REGIONS;
    var provs = (reg && reg.provinces) || [];
    for (i = 0; i < provs.length; i++) {
      var pr = provs[i];
      out.push({
        type: "province",
        id: pr.id,
        title: pr.nameVi || pr.nameEn || "",
        titleEn: pr.nameEn || "",
        zh: pr.nameZh || "",
        sub: (pr.regionLabel || "") + " · " + (pr.capital || ""),
        rawTitle: norm((pr.nameVi || "") + " " + (pr.nameEn || "") + " " + (pr.nameZh || "") + " " + (pr.capital || "")),
        body: norm((pr.highlights || "") + " " + (pr.economy || "") + " " + (pr.landmark || ""))
      });
      // Index provincial sub-items (heritages, dishes, figures) pointing straight to pr.id
      var subGroups = [
        { arr: pr.heritageSites || [], kind: "Di sản" },
        { arr: pr.dishes || pr.cuisineDishes || [], kind: "Đặc sản" },
        { arr: pr.famousFigures || pr.figures || [], kind: "Danh nhân" }
      ];
      for (var sg = 0; sg < subGroups.length; sg++) {
        var grp = subGroups[sg];
        for (var j = 0; j < grp.arr.length; j++) {
          var subItem = grp.arr[j];
          var sTitle = (typeof subItem === "string" ? subItem : (subItem.nameVi || subItem.name || subItem.title || ""));
          var sZh = (subItem && (subItem.nameZh || subItem.zh || "")) || "";
          if (!sTitle) continue;
          out.push({
            type: "province_item",
            id: pr.id,
            title: sTitle + " (" + (pr.nameVi || "") + ")",
            titleEn: ((subItem && subItem.nameEn) || sTitle) + " (" + (pr.nameEn || pr.nameVi || "") + ")",
            zh: sZh,
            sub: grp.kind + " · " + (pr.nameVi || ""),
            rawTitle: norm(sTitle + " " + ((subItem && subItem.nameEn) || "") + " " + sZh),
            body: norm((pr.nameVi || "") + " " + ((subItem && (subItem.descVi || subItem.note || "")) || ""))
          });
        }
      }
    }

    var dict = window.CCE_DICTIONARY || [];
    for (i = 0; i < dict.length; i++) {
      var d = dict[i];
      out.push({
        type: "term",
        id: d.id,
        title: d.hanzi + " — " + (d.hanViet || d.vietnamese || ""),
        titleEn: d.hanzi + " (" + (d.pinyin || "") + ") — " + (d.english || ""),
        zh: d.hanzi || "",
        sub: (d.pinyin || "") + " · " + (d.liushuCategory || d.liushuType || "Lục thư"),
        rawTitle: norm((d.hanzi || "") + " " + (d.traditional || "") + " " + (d.pinyin || "") + " " + (d.hanViet || "")),
        body: norm((d.vietnamese || "") + " " + (d.english || ""))
      });
    }

    var litV4 = (window.CCE_LITERATURE_HSK_V4 && window.CCE_LITERATURE_HSK_V4.hskBriefs) || [];
    for (i = 0; i < litV4.length; i++) {
      var hb = litV4[i];
      out.push({
        type: "article",
        id: "han-viet-phonology-middle-chinese",
        title: "[HSK " + hb.hsk + "] " + hb.zh + " (" + hb.pinyin + ") — " + hb.vi,
        titleEn: "[HSK " + hb.hsk + "] " + hb.zh + " — " + hb.en,
        zh: hb.zh || "",
        sub: hb.hanViet + " · HSK " + hb.hsk,
        rawTitle: norm(hb.zh + " " + hb.pinyin + " " + hb.hanViet + " " + hb.vi + " " + hb.en),
        body: norm(hb.en + " " + hb.vi)
      });
    }

    var tradeV4 = (window.CCE_TRADE_TRILINGUAL_V4 && window.CCE_TRADE_TRILINGUAL_V4.terms) || [];
    for (i = 0; i < tradeV4.length; i++) {
      var tt = tradeV4[i];
      out.push({
        type: "business",
        id: tt.id,
        title: tt.en + " · " + tt.zh + " (" + tt.vi + ")",
        titleEn: tt.en + " · " + tt.zh,
        zh: tt.zh || "",
        sub: tt.pinyin + " · EU–China Logistics",
        rawTitle: norm(tt.en + " " + tt.zh + " " + tt.pinyin + " " + tt.vi),
        body: norm(tt.contextEn || "")
      });
    }

    _items = out;
    _dirty = false;
    return out;
  }

  function ensureIndex() {
    if (_dirty || !_items) return buildIndex();
    return _items;
  }

  function search(rawQuery, limitPerGroup) {
    var qRaw = String(rawQuery || "").trim();
    if (!qRaw) return [];
    var q = norm(qRaw);
    var alias = QUERY_ALIASES[q] || "";
    var list = ensureIndex();
    var scored = [];
    for (var i = 0; i < list.length; i++) {
      var it = list[i];
      var score = 0;
      if (it.zh && it.zh === qRaw) score = 120;
      else if (it.rawTitle === q) score = 100;
      else if (it.rawTitle.indexOf(q) === 0) score = 50;
      else if (it.rawTitle.indexOf(q) >= 0) score = 25;
      else if (it.body.indexOf(q) >= 0) score = 10;
      else if (alias && (it.rawTitle.indexOf(alias.split(" ")[0]) >= 0 || it.body.indexOf(alias.split(" ")[0]) >= 0)) score = 18;
      if (score > 0) scored.push({ score: score, item: it });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    var maxTotal = limitPerGroup ? limitPerGroup * 6 : 60;
    return scored.slice(0, maxTotal).map(function (s) { return s.item; });
  }

  window.CCE_SEARCH = {
    search: search,
    markDirty: function () { _dirty = true; },
    warmIdle: function () {
      var r = window.requestIdleCallback || function (cb) { setTimeout(cb, 600); };
      r(ensureIndex);
    }
  };
})();
