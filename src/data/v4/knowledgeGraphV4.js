// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — Cross-Entity Knowledge Graph Expansion
// Expands window.CCE_CROSSLINKS cleanly beyond 350 bidirectional edges
// ============================================================================

(function () {
  "use strict";

  var base = window.CCE_CROSSLINKS || { edges: [] };
  if (!Array.isArray(base.edges)) base.edges = [];

  var V4_LINKS = [
    ["prov-shaanxi", "articles", "han-dynasty-silk-road-pax-sinica", "Silk Road origin hub Chang'an <-> Xi'an CR Express"],
    ["prov-xinjiang", "articles", "dunhuang-mogao-buddhist-grotto-art", "Hexi & Khorgos Eurasian frontier corridor"],
    ["prov-guangdong", "articles", "chinese-enterprises-globalization-playbook", "Shenzhen/Foshan OEM -> ODM -> OBM & EU exports"],
    ["prov-fujian", "articles", "tang-song-maritime-silk-road", "Quanzhou Song–Yuan emporium & Tulip maritime hub"],
    ["prov-zhejiang", "articles", "china-trade-fairs-canton-ciie-yiwu-guide", "Yiwu small commodity rail freight <-> Ningbo port"],
    ["prov-beijing", "articles", "temple-of-heaven-tiantan-cosmology-3d", "Tiantan imperial cosmology & BUCM / UIBE / BLCU hub"],
    ["prov-sichuan", "articles", "grand-canal-dujiangyan-hydraulic-empire", "Dujiangyan 256 BCE dry/flood hydraulics"],
    ["prov-jiangsu", "articles", "suzhou-classical-gardens-aesthetics", "Suzhou gardens & Kunqu cultural synthesis"],
    ["prov-shandong", "articles", "qingdao-marine-confucian-heritage", "Confucian Qufu roots & Qingdao ocean port"],
    ["prov-anhui", "articles", "hui-merchants-inkstone-xuan-paper", "Huizhou merchants & Four Treasures craft"],
    ["prov-hunan", "articles", "zhangjiajie-wulingyuan-sandstone-pillars", "Wulingyuan quartz geology & Xiang heritage"],
    ["prov-guangxi", "articles", "gacc-decree-248-249-vietnam-agri-export", "Huu Nghi / Pingxiang rail & agricultural corridor"],
    ["prov-yunnan", "articles", "tea-horse-road-southwest-corridor", "Puer tea-horse trail & Lao Cai cross-border hub"],
    ["prov-shanghai", "articles", "cross-border-b2b-contracts-cietac-viac", "Shanghai port finance & European HQ branch gateway"]
  ];

  // Cross-wire 150 dense thematic province<->discipline edges deterministically
  var disciplines = [
    ["han-dynasty-silk-road-pax-sinica", "provinces"],
    ["tcm-solar-terms-yangsheng", "provinces"],
    ["comparative-timber-architecture-dougong", "provinces"],
    ["chinese-fermentation-spices-culinary-geography", "provinces"],
    ["acfta-3-rcep-rules-of-origin", "provinces"],
    ["sino-vietnamese-translation-business", "provinces"]
  ];
  var provIds = [
    "prov-beijing", "prov-shanghai", "prov-guangdong", "prov-zhejiang", "prov-jiangsu",
    "prov-shaanxi", "prov-sichuan", "prov-fujian", "prov-yunnan", "prov-guangxi",
    "prov-hubei", "prov-hunan", "prov-shandong", "prov-henan", "prov-anhui",
    "prov-gansu", "prov-xinjiang", "prov-chongqing", "prov-liaoning", "prov-heilongjiang",
    "prov-hebei", "prov-shanxi", "prov-inner-mongolia", "prov-jiangxi", "prov-guizhou"
  ];

  var seen = {};
  base.edges.forEach(function (e) { seen[e.from + "->" + e.to] = true; });

  function addEdge(from, kind, to, note) {
    var k = from + "->" + to;
    if (seen[k]) return;
    seen[k] = true;
    base.edges.push({ from: from, kind: kind, to: to, note: note });
  }

  V4_LINKS.forEach(function (r) {
    addEdge(r[0], r[1], r[2], r[3]);
    addEdge(r[2], "provinces", r[0], r[3]);
  });

  provIds.forEach(function (pid) {
    disciplines.forEach(function (d) {
      addEdge(pid, "articles", d[0], "V4 interdisciplinary study crosslink");
    });
  });

  base.count = base.edges.length;
  window.CCE_CROSSLINKS = base;
})();
