(function () {
  'use strict';

  window.CCE_PAINTINGS = window.CCE_PAINTINGS || { masterpieces: [] };
  window.CCE_PAINTINGS_EN = window.CCE_PAINTINGS_EN || {};

  var EN_META = {
    'wuniu-tu': { artist: 'Han Huang', dynasty: 'Tang Dynasty (8th century)', medium: 'Ink and mineral pigments on hemp paper', museum: 'Palace Museum, Beijing' },
    'zhaoye-bai-tu': { artist: 'Han Gan', dynasty: 'Tang Dynasty (c. 750)', medium: 'Ink on paper', museum: 'Metropolitan Museum of Art, New York' },
    'jiangxing-chuxue-tu': { artist: 'Zhao Gan', dynasty: 'Five Dynasties – Southern Tang (10th century)', medium: 'Ink and light color on silk', museum: 'National Palace Museum, Taipei' },
    'tingqin-tu': { artist: 'Emperor Huizong (attr. / Northern Song Court Academy)', dynasty: 'Northern Song (early 12th century)', medium: 'Ink and color on silk', museum: 'Palace Museum, Beijing' },
    'hanjiang-dudiao-tu': { artist: 'Ma Yuan', dynasty: 'Southern Song (c. 1195)', medium: 'Ink and light color on silk', museum: 'Tokyo National Museum' },
    'jiulong-tu': { artist: 'Chen Rong', dynasty: 'Southern Song (1244)', medium: 'Ink and touches of red on paper', museum: 'Museum of Fine Arts, Boston' },
    'xishan-qingyuan-tu': { artist: 'Xia Gui', dynasty: 'Southern Song (early 13th century)', medium: 'Ink on paper', museum: 'National Palace Museum, Taipei' },
    'molan-tu': { artist: 'Zheng Sixiao', dynasty: 'Late Song – Early Yuan (1306)', medium: 'Ink on paper', museum: 'Osaka City Museum of Fine Arts' },
    'qiujiao-yinma-tu': { artist: 'Zhao Mengfu', dynasty: 'Yuan Dynasty (1312)', medium: 'Ink and color on silk', museum: 'Palace Museum, Beijing' },
    'yufu-tu': { artist: 'Wu Zhen', dynasty: 'Yuan Dynasty (1342)', medium: 'Ink on paper', museum: 'Freer Gallery of Art, Smithsonian Institution' },
    'momei-tu': { artist: 'Wang Mian', dynasty: 'Late Yuan Dynasty (1355)', medium: 'Ink on paper', museum: 'Palace Museum, Beijing' },
    'taohuayuan-tu': { artist: 'Qiu Ying', dynasty: 'Ming Dynasty (mid-16th century)', medium: 'Ink and heavy mineral pigments on silk', museum: 'Tianjin Museum' },
    'songyin-fangyou-tu': { artist: 'Dai Jin', dynasty: 'Ming Dynasty (15th century)', medium: 'Ink and light color on silk', museum: 'National Palace Museum, Taipei' },
    'hehua-shuiqin-tu': { artist: 'Bada Shanren (Zhu Da)', dynasty: 'Early Qing Dynasty (late 17th century)', medium: 'Ink on paper', museum: 'Shanghai Museum' },
    'zhushi-zhengbanqiao': { artist: 'Zheng Banqiao', dynasty: 'Qing Dynasty (18th century)', medium: 'Ink on paper', museum: 'Palace Museum, Beijing' },
    'huangshan-tu-meiqing': { artist: 'Mei Qing', dynasty: 'Qing Dynasty (late 17th century)', medium: 'Ink and light color on paper', museum: 'Shanghai Museum' },
    'bajun-tu-langshining': { artist: 'Giuseppe Castiglione (Lang Shining)', dynasty: 'Qing Dynasty (18th century)', medium: 'Ink and color on silk', museum: 'National Palace Museum, Taipei' },
    'gusu-fanhua-tu': { artist: 'Xu Yang', dynasty: 'Qing Dynasty (1759)', medium: 'Ink and color on paper', museum: 'Liaoning Provincial Museum' }
  };

  var i, j, p, meta, hs;
  var _plist = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
  for (i = 0; i < _plist.length; i++) {
    p = _plist[i];
    if (p && p.id && EN_META[p.id]) {
      meta = EN_META[p.id];
      if (p.artist && typeof p.artist === 'object') { p.artist.nameEn = meta.artist; p.artist.schoolEn = meta.dynasty; }
      if (p.dynasty && typeof p.dynasty === 'object') { p.dynasty.nameEn = meta.dynasty; }
      p.materialEn = meta.medium;
      p.museumEn = meta.museum;
      p.creationDateEn = meta.dynasty;
      p.attributionEn = 'Museum Transmitted Work — Verified Archival Collection';
      hs = [];
      for (j = 0; j < p.hotspots.length; j++) {
        hs.push({
          id: p.hotspots[j].id,
          title: p.hotspots[j].titleEn,
          desc: p.hotspots[j].descEn,
          brushTechnique: p.hotspots[j].brushTechnique,
          colophonZh: p.hotspots[j].colophonZh,
          x: p.hotspots[j].x,
          y: p.hotspots[j].y
        });
      }
      window.CCE_PAINTINGS_EN[p.id] = {
        id: p.id,
        title: p.titleEn,
        titleZh: p.titleZh,
        artist: meta.artist,
        dynasty: meta.dynasty,
        medium: meta.medium,
        museum: meta.museum,
        compositionType: p.compositionType,
        analysis: p.analysisEn,
        hotspots: hs
      };
    }
  }
})();
