(function () {
  'use strict';

  window.CCE_MUSEUM = window.CCE_MUSEUM || { artifacts: [] };
  window.CCE_MUSEUM.artifacts = window.CCE_MUSEUM.artifacts || [];
  window.CCE_MUSEUM_EN = window.CCE_MUSEUM_EN || {};

  var EN_META = {
    'goujian-sword': { era: 'Late Spring and Autumn Period (5th century BCE)', material: 'Bronze–tin alloy inlaid with turquoise and glass', dimensions: 'Length 55.7 cm; width 4.6 cm; weight 875 g', museum: 'Hubei Provincial Museum, Wuhan' },
    'sanxingdui-bronze-tree': { era: 'Late Shang Period (c. 12th century BCE)', material: 'Multi-part cast bronze', dimensions: 'Reconstructed height 396 cm', museum: 'Sanxingdui Museum, Guanghan, Sichuan' },
    'fuhao-owl-zun': { era: 'Late Shang Dynasty (c. 1200 BCE)', material: 'Cast bronze', dimensions: 'Height 45.9 cm; weight 16.7 kg', museum: 'Henan Museum & National Museum of China (pair)' },
    'lianhe-fanghu': { era: 'Spring and Autumn Period (7th–6th century BCE)', material: 'Cast bronze', dimensions: 'Height 117 cm; weight 64.28 kg', museum: 'Henan Museum & Palace Museum, Beijing (pair)' },
    'yongle-great-bell': { era: 'Ming Yongle Reign (c. 1420)', material: 'Copper–tin–lead bronze alloy', dimensions: 'Height 6.75 m; rim diameter 3.3 m; weight ~46.5 tons', museum: 'Big Bell Temple Ancient Bell Museum, Beijing' },
    'terracotta-general': { era: 'Qin Dynasty (c. 221–210 BCE)', material: 'Polychrome terracotta (pigment traces)', dimensions: 'Height 196 cm', museum: 'Emperor Qinshihuang\'s Mausoleum Site Museum, Xi\'an' },
    'changxin-palace-lamp': { era: 'Western Han Dynasty (2nd century BCE)', material: 'Gilded bronze', dimensions: 'Height 48 cm; weight 15.85 kg', museum: 'Hebei Museum, Shijiazhuang' },
    'mawangdui-silk-gown': { era: 'Western Han Dynasty (c. 168 BCE)', material: 'Ultra-fine plain-weave silk gauze', dimensions: 'Length 128 cm; sleeve span 190 cm; weight 49 g', museum: 'Hunan Museum, Changsha' },
    'hejiacun-agate-cup': { era: 'High Tang Dynasty (8th century)', material: 'Banded red-orange agate with solid gold mount', dimensions: 'Height 6.5 cm; length 15.6 cm; rim diameter 5.9 cm', museum: 'Shaanxi History Museum, Xi\'an' },
    'tang-sancai-camel': { era: 'High Tang Dynasty (8th century)', material: 'Low-fired polychrome lead-glazed earthenware (Sancai)', dimensions: 'Height 58.4 cm; length 43.4 cm', museum: 'National Museum of China, Beijing' },
    'jian-yao-yaobian-tenmoku': { era: 'Southern Song Dynasty (12th–13th century)', material: 'Iron-rich stoneware with crystalline black glaze (Jian ware)', dimensions: 'Height ~6.8 cm; rim diameter 12.2 cm', museum: 'Seikado Bunko Art Museum, Tokyo (National Treasure of Japan)' },
    'longquan-celadon-vase': { era: 'Southern Song Dynasty (12th–13th century)', material: 'Porcelain with Fenqing celadon glaze (Longquan kilns)', dimensions: 'Varies by specimen (standard type ~25–28 cm tall)', museum: 'Palace Museum, Beijing / National Palace Museum, Taipei' },
    'xuande-blue-white-meiping': { era: 'Ming Xuande Reign (1426–1435)', material: 'Jingdezhen porcelain with imported Sumali cobalt blue', dimensions: 'Varies by specimen (standard meiping ~35–45 cm tall)', museum: 'Palace Museum, Beijing & National Palace Museum, Taipei' },
    'kuaixue-shiqing-tie': { era: 'Eastern Jin (4th century; Tang tracing copy)', material: 'Ink on paper', dimensions: '23 cm × 14.8 cm (28 characters)', museum: 'National Palace Museum, Taipei' },
    'jizhi-wengao-yan-zhenqing': { era: 'Tang Dynasty (758 CE)', material: 'Ink on hemp paper', dimensions: '28.3 cm × 75.5 cm', museum: 'National Palace Museum, Taipei' },
    'song-printed-shiji': { era: 'Southern Song Dynasty (12th century)', material: 'Pine-soot ink woodblock print on handmade bark/bamboo paper', dimensions: 'Varies by surviving edition', museum: 'National Library of China & National Palace Museum, Taipei' },
    'ngoc-lu-bronze-drum': { era: 'Dong Son Culture (c. 3rd–2nd century BCE)', material: 'Cast copper–tin–lead bronze alloy', dimensions: 'Height 63 cm; tympanum diameter 79 cm; weight 86 kg', museum: 'Vietnam National Museum of History, Hanoi' },
    'ly-tran-celadon-lotus-jar': { era: 'Ly–Tran Dynasties (11th–14th century)', material: 'Stoneware with iron-brown inlay and celadon glaze', dimensions: 'Varies by specimen (large jars ~40–55 cm tall)', museum: 'Vietnam National Museum of History, Hanoi' }
  };

  var i, j, a, meta, hs;
  for (i = 0; i < window.CCE_MUSEUM.artifacts.length; i++) {
    a = window.CCE_MUSEUM.artifacts[i];
    if (a && a.id && EN_META[a.id]) {
      meta = EN_META[a.id];
      a.periodLabelEn = meta.era;
      a.dateEstimateEn = meta.era;
      a.materialEn = meta.material;
      a.dimensionsEn = meta.dimensions;
      a.originEn = meta.museum;
      a.collectionEn = meta.museum;
      hs = [];
      for (j = 0; j < a.hotspots.length; j++) {
        hs.push({
          id: a.hotspots[j].id,
          title: a.hotspots[j].titleEn,
          desc: a.hotspots[j].descEn
        });
      }
      window.CCE_MUSEUM_EN[a.id] = {
        id: a.id,
        category: a.category,
        title: a.titleEn,
        titleZh: a.titleZh,
        era: meta.era,
        material: meta.material,
        dimensions: meta.dimensions,
        museum: meta.museum,
        summary: a.summaryEn,
        hotspots: hs
      };
    }
  }
})();
