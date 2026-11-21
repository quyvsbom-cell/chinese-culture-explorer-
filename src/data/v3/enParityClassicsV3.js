(function () {
  'use strict';

  window.CCE_CLASSICS = window.CCE_CLASSICS || [];
  window.CCE_CLASSICS_EN = window.CCE_CLASSICS_EN || {};

  var EN_META = {
    'xiaojing': { author: 'Confucius & Zengzi (attributed)', dynasty: 'Warring States – Early Han' },
    'erya': { author: 'Anonymous (Pre-Qin – Western Han scholars)', dynasty: 'Warring States – Western Han' },
    'shuowen-jiezi': { author: 'Xu Shen', dynasty: 'Eastern Han (100–121 CE)' },
    'hanshu': { author: 'Ban Gu (with Ban Biao & Ban Zhao)', dynasty: 'Eastern Han (1st century CE)' },
    'sanguozhi': { author: 'Chen Shou (annotated by Pei Songzhi)', dynasty: 'Western Jin (3rd c.) & Liu Song (429)' },
    'daiviet-suky-toanthu': { author: 'Ngo Si Lien & Le Court Historians', dynasty: 'Early Le – Restored Le (Vietnam, 1697 print)' },
    'guanzi': { author: 'Jixia Academy Scholars (attr. Guan Zhong)', dynasty: 'Warring States – Early Han' },
    'lushichunqiu': { author: 'Lü Buwei & retainers', dynasty: 'Late Warring States (239 BCE)' },
    'qimin-yaoshu': { author: 'Jia Sixie', dynasty: 'Northern Wei (544 CE)' },
    'mengxi-bitan': { author: 'Shen Kuo', dynasty: 'Northern Song (c. 1088–1095)' },
    'bencao-gangmu': { author: 'Li Shizhen', dynasty: 'Ming Dynasty (completed 1578, printed 1596)' },
    'wenxin-diaolong': { author: 'Liu Xie', dynasty: 'Southern Dynasties – Liang (c. 501–502)' },
    'shuihuzhuan': { author: 'Shi Nai\'an', dynasty: 'Late Yuan – Early Ming (14th century)' },
    'xiyouji': { author: 'Wu Cheng\'en', dynasty: 'Ming Dynasty (16th century)' },
    'uc-trai-di-tap': { author: 'Nguyen Trai (1380–1442)', dynasty: 'Early Le Dynasty (Vietnam, 15th century)' }
  };

  var i, j, c, meta, ex;
  var _clist = (window.CCE_PHILOSOPHY && window.CCE_PHILOSOPHY.classicalTexts) || [];
  for (i = 0; i < _clist.length; i++) {
    c = _clist[i];
    if (c && c.id && EN_META[c.id]) {
      meta = EN_META[c.id];
      c.authorEn = meta.author; c.eraEn = meta.dynasty;
      ex = [];
      for (j = 0; j < c.excerpts.length; j++) {
        ex.push({
          originalZh: c.excerpts[j].originalZh,
          originalTrad: c.excerpts[j].originalTrad,
          pinyin: c.excerpts[j].pinyin,
          hanViet: c.excerpts[j].hanViet,
          meaning: c.excerpts[j].meaningEn,
          commentary: c.excerpts[j].commentaryEn
        });
      }
      window.CCE_CLASSICS_EN[c.id] = {
        id: c.id,
        branch: c.branch,
        title: c.titleEn,
        titleZh: c.titleZh,
        author: meta.author,
        dynasty: meta.dynasty,
        summary: c.summaryEn,
        excerpts: ex
      };
    }
  }
})();
