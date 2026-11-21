(function () {
  'use strict';

  window.CCE_CUSTOMS_V3_EN = window.CCE_CUSTOMS_V3_EN || {};

  function mergeById(targetArr, newItems) {
    var existing = {};
    var i;
    for (i = 0; i < targetArr.length; i++) {
      if (targetArr[i] && targetArr[i].id) {
        existing[targetArr[i].id] = true;
      }
    }
    for (i = 0; i < newItems.length; i++) {
      if (!existing[newItems[i].id]) {
        targetArr.push(newItems[i]);
        existing[newItems[i].id] = true;
      }
    }
  }

  var TOP_TEN_TEAS_EN = [
    { id: 'tea-xihu-longjing', nameEn: 'West Lake Longjing (Dragon Well)', nameZh: '西湖龙井', provinceId: 'prov-zhejiang', teaTypeEn: 'Unfermented pan-fired green tea', brewTempC: '80-85', teawareEn: 'Tall glass tumbler or thin-walled white porcelain gaiwan', notesEn: 'Hangzhou\'s premier green tea famed for emerald hue, toasted-chestnut aroma, brisk sweetness, and flat spear-shaped leaves from the five core West Lake terroirs.' },
    { id: 'tea-dongting-biluochun', nameEn: 'Dongting Biluochun (Green Snail Spring)', nameZh: '洞庭碧螺春', provinceId: 'prov-jiangsu', teaTypeEn: 'Tightly curled downy green tea', brewTempC: '75-80', teawareEn: 'Glass tumbler using the water-first top-drop infusion method', notesEn: 'Intercropped with orchard trees on Dongshan and Xishan by Lake Tai (Suzhou), yielding delicate floral-fruit aromatics and dense silvery trichomes.' },
    { id: 'tea-huangshan-maofeng', nameEn: 'Huangshan Maofeng (Yellow Mountain Fur Peak)', nameZh: '黄山毛峰', provinceId: 'prov-anhui', teaTypeEn: 'Baked green tea', brewTempC: '80-85', teawareEn: 'White porcelain gaiwan or tall glass', notesEn: 'Harvested from mist-shrouded high-elevation gardens on Mount Huangshan (Anhui), featuring ivory-tipped sparrow-tongue buds with orchid notes and clean sweetness.' },
    { id: 'tea-anxi-tieguanyin', nameEn: 'Anxi Tieguanyin (Iron Goddess of Mercy)', nameZh: '安溪铁观音', provinceId: 'prov-fujian', teaTypeEn: 'Semi-oxidized oolong tea (light or charcoal-roasted)', brewTempC: '95-100', teawareEn: 'Dehua porcelain gaiwan or small Yixing clay teapot (100-150 ml)', notesEn: 'Signature oolong of Anxi (Quanzhou, Fujian) rolled into dense pearls prized for its signature Guanyin Yun—orchid fragrance and enduring mineral finish across seven infusions.' },
    { id: 'tea-wuyi-dahongpao', nameEn: 'Wuyi Da Hong Pao (Big Red Robe)', nameZh: '武夷大红袍', provinceId: 'prov-fujian', teaTypeEn: 'Charcoal-roasted Wuyi rock oolong', brewTempC: '98-100', teawareEn: 'Zhuni Yixing teapot or thin porcelain gaiwan in Gongfu style', notesEn: 'Rooted in weathered Danxia rock crevices of Mount Wuyi (Fujian), celebrated for Yan Yun ("rock rhyme") uniting mineral depth, floral lift, and warm charcoal roast.' },
    { id: 'tea-qimen-hongcha', nameEn: 'Qimen Black Tea (Keemun)', nameZh: '祁门红茶', provinceId: 'prov-anhui', teaTypeEn: 'Fully oxidized Gongfu black tea', brewTempC: '90-95', teawareEn: 'White porcelain teapot or Zini clay teapot', notesEn: 'Developed in the 1870s in Qimen County (Anhui), internationally renowned for its Keemun aroma blending rose, honeyed fruit, and subtle pine notes.' },
    { id: 'tea-junshan-yinzhen', nameEn: 'Junshan Yinzhen (Silver Needle)', nameZh: '君山银针', provinceId: 'prov-hunan', teaTypeEn: 'Lightly fermented yellow tea (menhuang)', brewTempC: '85-90', teawareEn: 'Clear lidded glass tumbler to view the rising-and-falling needle dance', notesEn: 'Crafted on Junshan Island in Lake Dongting (Hunan); single downy buds undergo gentle yellow-wrapping fermentation and stand vertically in glass infusions.' },
    { id: 'tea-yunnan-puerh', nameEn: 'Yunnan Pu-erh Tea (Sheng & Shou)', nameZh: '云南普洱茶', provinceId: 'prov-yunnan', teaTypeEn: 'Post-fermented dark tea (Raw Sheng & Ripe Shou)', brewTempC: '95-100', teawareEn: 'Zini Yixing teapot (ripe/aged) or porcelain gaiwan (young raw Sheng)', notesEn: 'Made from sun-dried Yunnan large-leaf tea pressed into cakes; Raw Sheng ages slowly over decades while Ripe Shou uses wet-piling (wodui) fermentation perfected in the 1970s.' },
    { id: 'tea-liuan-guapian', nameEn: 'Lu\'an Guapian (Melon Seed Green Tea)', nameZh: '六安瓜片', provinceId: 'prov-anhui', teaTypeEn: 'Single-leaf budless and stemless green tea', brewTempC: '85-90', teawareEn: 'White porcelain gaiwan or glass pitcher', notesEn: 'Unique among China\'s top teas for stripping away buds and stems to roast solely mature single leaves over charcoal into melon-seed shapes with rich, non-astringent body.' },
    { id: 'tea-xinyang-maojian', nameEn: 'Xinyang Maojian (Fur Tip Green Tea)', nameZh: '信阳毛尖', provinceId: 'prov-henan', teaTypeEn: 'Northern pan-rolled green tea', brewTempC: '80-85', teawareEn: 'Clear glass tumbler or white porcelain cup', notesEn: 'Flagship northern green tea from the Dabie–Tongbai hills of Xinyang (Henan), yielding slender white-tipped needles, luminous pale-green liquor, and crisp sweetness.' }
  ];

  var SIX_ARTS_EN = [
    { id: 'sixart-li', nameEn: 'Li (Rites and Ritual Propriety)', nameZh: '礼', westernZhouOriginEn: 'Codified under the Western Zhou into Five Rites (auspicious, mourning, diplomatic, military, and celebratory) to anchor lineage and state harmony.', scholarSignificanceEn: 'Formed the bedrock of gentlemanly character ("Without studying Rites, one cannot take one\'s stand"), transforming civic discipline into voluntary mutual respect.' },
    { id: 'sixart-yue', nameEn: 'Yue (Music and Ceremonial Dance)', nameZh: '乐', westernZhouOriginEn: 'Six Great Ceremonial Dances accompanied by chime bells and lithophones in the Western Zhou to cultivate emotional harmony alongside ritual.', scholarSignificanceEn: 'As the Record of Music states, rites distinguish roles while music unites hearts, culminating later in literati self-cultivation through the Guqin.' },
    { id: 'sixart-she', nameEn: 'She (Archery and Ritual Contests)', nameZh: '射', westernZhouOriginEn: 'Essential martial skill of Western Zhou Shi nobles, institutionalized in Great and District Archery rites accompanied by ceremonial music.', scholarSignificanceEn: 'Confucius viewed archery as moral training: when missing the bullseye, the exemplary person turns inward to examine personal alignment.' },
    { id: 'sixart-yu', nameEn: 'Yu (Charioteering)', nameZh: '御', westernZhouOriginEn: 'Mastery of driving four-horse war chariots according to five canonical maneuvers in Western Zhou warfare and royal hunts.', scholarSignificanceEn: 'Symbolized poised coordination, control under pressure, and balanced leadership—becoming an enduring metaphor for statecraft.' },
    { id: 'sixart-shu', nameEn: 'Shu (Literacy, Script, and Calligraphy)', nameZh: '书', westernZhouOriginEn: 'Instruction in reading, character-formation principles (Liushu), and administrative drafting on bamboo slips and bronze inscriptions.', scholarSignificanceEn: 'Unlocked classical texts and evolved into calligraphy—the premier visual gauge of scholarly refinement across East Asia.' },
    { id: 'sixart-shu-math', nameEn: 'Shu (Mathematics, Calendrics, and Measurement)', nameZh: '数', westernZhouOriginEn: 'Nine Branches of Mathematics supporting land surveying, grain taxation, calendrical astronomy, and engineering (later compiled in the Nine Chapters on the Mathematical Art).', scholarSignificanceEn: 'Demonstrates that classical education united humanities with quantitative reasoning, fiscal stewardship, and practical engineering.' }
  ];

  var ETHNIC_MINORITIES_EN = [
    { id: 'ethnic-zhuang', nameEn: 'Zhuang Ethnic Group', nameZh: '壮族', provinceIds: ['prov-guangxi', 'prov-yunnan', 'prov-guangdong'], scriptEn: 'Old Zhuang script (Sawndip, built on Han-derived principles akin to Vietnamese Chu Nom) and standardized 1957 Latin orthography.', attireEn: 'Indigo-dyed garments accented with Zhuangjin brocade depicting bronze-drum motifs, phoenixes, and geometric patterns.', festivalEn: 'Sanyuesan Song Festival (3rd day of the 3rd lunar month) featuring antiphonal folk singing, embroidered-ball tossing, and five-color glutinous rice.' },
    { id: 'ethnic-tibetan', nameEn: 'Tibetan Ethnic Group', nameZh: '藏族', provinceIds: ['prov-tibet', 'prov-sichuan', 'prov-qinghai', 'prov-gansu', 'prov-yunnan'], scriptEn: 'Tibetan script, an abugida developed in the 7th century under Songtsen Gampo derived from Indic Gupta script.', attireEn: 'Long-sleeved Chuba robes trimmed in brocade or fleece suited to high-altitude temperature swings, paired with striped Pangden aprons.', festivalEn: 'Losar (Tibetan New Year) and the Shoton Festival featuring giant Thangka unveilings and traditional Tibetan opera in Lhasa.' },
    { id: 'ethnic-uyghur', nameEn: 'Uyghur Ethnic Group', nameZh: '维吾尔族', provinceIds: ['prov-xinjiang'], scriptEn: 'Modern Uyghur Perso-Arabic script (historically preceded by the Old Uyghur alphabet along the Silk Road).', attireEn: 'Active ikat-dyed Etles silk paired with embroidered four-cornered Doppa skullcaps distinct to each oasis.', festivalEn: 'Performances of the UNESCO-listed Twelve Muqam musical suite alongside Eid celebrations and Turpan grape harvests.' },
    { id: 'ethnic-miao', nameEn: 'Miao Ethnic Group', nameZh: '苗族', provinceIds: ['prov-guizhou', 'prov-hunan', 'prov-yunnan', 'prov-chongqing'], scriptEn: 'Oral epics encoded in embroidery motifs alongside standardized Latin-based orthographies created in the 1950s.', attireEn: 'Pleated indigo batik skirts, intricate cross-stitch embroidery, and elaborate hand-forged silver headdresses and torques (notably in Qiandongnan).', festivalEn: 'Miao New Year, the Sisters\' Meal Festival, and Lusheng reed-pipe gatherings in Xijiang Thousand-Household Miao Village.' },
    { id: 'ethnic-naxi', nameEn: 'Naxi Ethnic Group', nameZh: '纳西族', provinceIds: ['prov-yunnan', 'prov-sichuan'], scriptEn: 'Dongba pictographic script—one of the world\'s few living pictographic systems, inscribed in UNESCO\'s Memory of the World Register.', attireEn: 'Sheepskin cape ("wearing the stars and moon") embroidered with seven discs symbolizing the Big Dipper and industrious labor.', festivalEn: 'Sanduo Festival in the 2nd lunar month honoring the guardian deity of Jade Dragon Snow Mountain, paired with Naxi ancient orchestra music.' },
    { id: 'ethnic-yi', nameEn: 'Yi Ethnic Group', nameZh: '彝族', provinceIds: ['prov-sichuan', 'prov-yunnan', 'prov-guizhou'], scriptEn: 'Standardized syllabic Yi script descended from millennia-old classical Yi inscriptions across Liangshan and Yunnan.', attireEn: 'Woven wool Chaerwa capes and black-red-yellow garments symbolizing earth, fire, and sunlight.', festivalEn: 'Torch Festival (24th day of the 6th lunar month) featuring nighttime torch processions, wrestling, horse racing, and circle dances.' },
    { id: 'ethnic-mongol', nameEn: 'Mongol Ethnic Group', nameZh: '蒙古族', provinceIds: ['prov-inner-mongolia', 'prov-xinjiang', 'prov-qinghai', 'prov-liaoning'], scriptEn: 'Traditional vertical Mongolian script descending top-to-bottom, adapted from Old Uyghur in the 13th century.', attireEn: 'Long belted Deel robes secured with silk sashes, peaked hats, and leather riding boots.', festivalEn: 'Naadam Grassland Fair featuring the "Three Manly Games" of wrestling, horse racing, and archery accompanied by Morin Khuur horsehead fiddle and long-song music.' },
    { id: 'ethnic-manchu', nameEn: 'Manchu Ethnic Group', nameZh: '满族', provinceIds: ['prov-liaoning', 'prov-jilin', 'prov-heilongjiang', 'prov-hebei', 'prov-beijing'], scriptEn: 'Vertical Manchu script created in 1599 under Nurhaci from Mongolian script and refined with diacritical dots and circles in 1632.', attireEn: 'Long Qipao robes (forerunner of the modern cheongsam), Magua riding jackets, and elevated flowerpot-sole shoes of the Qing era.', festivalEn: 'Banjin Festival (13th day of the 10th lunar month commemorating the 1635 naming of the Manchu people) and bilingual Manchu-Chinese archival heritage in Beijing and Shenyang.' }
  ];

  window.CCE_CUSTOMS_V3_EN.topTenTeas = window.CCE_CUSTOMS_V3_EN.topTenTeas || [];
  window.CCE_CUSTOMS_V3_EN.sixArts = window.CCE_CUSTOMS_V3_EN.sixArts || [];
  window.CCE_CUSTOMS_V3_EN.ethnicMinorities = window.CCE_CUSTOMS_V3_EN.ethnicMinorities || [];

  mergeById(window.CCE_CUSTOMS_V3_EN.topTenTeas, TOP_TEN_TEAS_EN);
  mergeById(window.CCE_CUSTOMS_V3_EN.sixArts, SIX_ARTS_EN);
  mergeById(window.CCE_CUSTOMS_V3_EN.ethnicMinorities, ETHNIC_MINORITIES_EN);
})();
