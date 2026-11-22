"""Parse and deeply enrich all 6 external V6 packs (V6_Pack1..V6_Pack6) into
scholarly, visual, non-clinical bundles ready for CHINESE CULTURE EXPLORER V6.0.
"""

from __future__ import annotations

import json
import pathlib
import re
from typing import Any

from .pack_brands_liushu import BRANDS_ADDITIONAL_36, MERCHANT_GUILDS_5
from .pack_cosmo_lit import ZIWU_HOURS_12
from .pack_trade_csc import CSC_GANTT_12, HSR_CORRIDORS_8X8, INCOTERMS_11

try:
    from v7_builders.pack_utils import UniqueImageAllocator, resolve_prov_item_img
except ImportError:
    from scripts.v7_builders.pack_utils import UniqueImageAllocator, resolve_prov_item_img

ROOT = pathlib.Path(".")
FALLBACK_RASTER = "assets/images/museum/forbidden-city-imperial-axis-gate.jpg"

PROVINCE_LABELS: dict[str, tuple[str, str]] = {
    "prov-beijing": ("Bắc Kinh", "Beijing"),
    "prov-shanghai": ("Thượng Hải", "Shanghai"),
    "prov-tianjin": ("Thiên Tân", "Tianjin"),
    "prov-chongqing": ("Trùng Khánh", "Chongqing"),
    "prov-zhejiang": ("Chiết Giang", "Zhejiang"),
    "prov-jiangsu": ("Giang Tô", "Jiangsu"),
    "prov-guangdong": ("Quảng Đông", "Guangdong"),
    "prov-fujian": ("Phúc Kiến", "Fujian"),
    "prov-sichuan": ("Tứ Xuyên", "Sichuan"),
    "prov-hubei": ("Hồ Bắc", "Hubei"),
    "prov-shaanxi": ("Thiểm Tây", "Shaanxi"),
    "prov-shandong": ("Sơn Đông", "Shandong"),
    "prov-shanxi": ("Sơn Tây", "Shanxi"),
    "prov-henan": ("Hà Nam", "Henan"),
    "prov-hunan": ("Hồ Nam", "Hunan"),
    "prov-anhui": ("An Huy", "Anhui"),
    "prov-jiangxi": ("Giang Tây", "Jiangxi"),
    "prov-yunnan": ("Vân Nam", "Yunnan"),
    "prov-guizhou": ("Quý Châu", "Guizhou"),
    "prov-guangxi": ("Quảng Tây", "Guangxi"),
    "prov-liaoning": ("Liêu Ninh", "Liaoning"),
    "prov-jilin": ("Cát Lâm", "Jilin"),
    "prov-heilongjiang": ("Hắc Long Giang", "Heilongjiang"),
    "prov-hebei": ("Hà Bắc", "Hebei"),
    "prov-gansu": ("Cam Túc", "Gansu"),
    "prov-xinjiang": ("Tân Cương", "Xinjiang"),
    "prov-qinghai": ("Thanh Hải", "Qinghai"),
    "prov-tibet": ("Tây Tạng", "Tibet"),
    "prov-ningxia": ("Ninh Hạ", "Ningxia"),
    "prov-inner-mongolia": ("Nội Mông", "Inner Mongolia"),
    "prov-hongkong": ("Hồng Kông", "Hong Kong SAR"),
    "prov-macau": ("Ma Cao", "Macau SAR"),
    "prov-taiwan": ("Đài Loan", "Taiwan"),
    "prov-hainan": ("Hải Nam", "Hainan"),
}

PROVINCE_IMAGES: dict[str, str] = {
    "prov-beijing": "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "prov-shanghai": "assets/images/provinces/shanghai-bund-skyline.jpg",
    "prov-tianjin": "assets/images/provinces/tianjin-eye.jpg",
    "prov-chongqing": "assets/images/provinces/chongqing-hongyadong.jpg",
    "prov-zhejiang": "assets/images/provinces/zhejiang-hangzhou-westlake.jpg",
    "prov-jiangsu": "assets/images/provinces/jiangsu-suzhou-garden.jpg",
    "prov-guangdong": "assets/images/provinces/guangdong-canton-tower.jpg",
    "prov-fujian": "assets/images/provinces/fujian-tulou.jpg",
    "prov-sichuan": "assets/images/provinces/sichuan-jiuzhaigou.jpg",
    "prov-hubei": "assets/images/provinces/hubei-yellow-crane-tower.jpg",
    "prov-shaanxi": "assets/images/provinces/shaanxi-terracotta-army.jpg",
    "prov-shandong": "assets/images/provinces/shandong-taishan.jpg",
    "prov-shanxi": "assets/images/provinces/shanxi-hanging-temple.jpg",
    "prov-henan": "assets/images/provinces/henan-longmen-grottoes.jpg",
    "prov-hunan": "assets/images/provinces/hunan-zhangjiajie.jpg",
    "prov-anhui": "assets/images/provinces/anhui-hongcun-moonpond.jpg",
    "prov-jiangxi": "assets/images/provinces/jiangxi-wuyuan-village.jpg",
    "prov-yunnan": "assets/images/provinces/yunnan-lijiang-old-town.jpg",
    "prov-guizhou": "assets/images/provinces/guizhou-huangguoshu.jpg",
    "prov-guangxi": "assets/images/provinces/guangxi-guilin-li-river.jpg",
    "prov-liaoning": "assets/images/provinces/liaoning-mukden-palace.jpg",
    "prov-jilin": "assets/images/provinces/jilin-changbai-tianchi.jpg",
    "prov-heilongjiang": "assets/images/provinces/heilongjiang-saint-sophia.jpg",
    "prov-hebei": "assets/images/provinces/hebei-chengde-resort.jpg",
    "prov-gansu": "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "prov-xinjiang": "assets/images/provinces/xinjiang-kanas-lake.jpg",
    "prov-qinghai": "assets/images/provinces/qinghai-lake.jpg",
    "prov-tibet": "assets/images/provinces/tibet-potala-palace.jpg",
    "prov-ningxia": "assets/images/provinces/ningxia-western-xia-tombs.jpg",
    "prov-inner-mongolia": "assets/images/provinces/inner-mongolia-hulunbuir.jpg",
    "prov-hongkong": "assets/images/provinces/hongkong-victoria-harbour.jpg",
    "prov-macau": "assets/images/provinces/macau-ruins-st-paul.jpg",
    "prov-taiwan": "assets/images/provinces/taiwan-sun-moon-lake.jpg",
    "prov-hainan": "assets/images/provinces/hainan-sanya-guanyin.jpg",
}

PAINTING_REF_IMAGES: dict[str, str] = {
    "paint-wangwei-wangchuan": "assets/images/paintings/12_kuanglu_tu.jpg",
    "paint-lushan-waterfall": "assets/images/paintings/36_lushan_gao.jpg",
    "paint-song-bird-willow": "assets/images/paintings/24_furong_jinji.jpg",
    "paint-mayuan-hanjiang": "assets/images/paintings/59_hanjiang_dudiao_tu.jpg",
    "paint-westlake-spring": "assets/images/paintings/04_youchun_tu.jpg",
    "paint-westlake-mist": "assets/images/paintings/19_zao_chun_tu.jpg",
    "paint-lantern-festival": "assets/images/paintings/72_gusu_fanhua_tu.jpg",
    "paint-lotus-pond-song": "assets/images/paintings/68_hehua_shuiqin_tu.jpg",
    "paint-hanshan-temple": "assets/images/paintings/57_jiangxing_chuxue_tu.jpg",
    "paint-village-pastoral": "assets/images/paintings/67_songyin_fangyou_tu.jpg",
    "paint-yellow-river-tower": "assets/images/paintings/22_qianli_jiangshan.jpg",
    "paint-guqin-mist": "assets/images/paintings/58_tingqin_tu.jpg",
    "paint-autumn-maple": "assets/images/paintings/54_wanshan_hongbian.jpg",
    "paint-scholar-studio": "assets/images/paintings/42_huishan_chahui.jpg",
    "paint-fankuan-xishan": "assets/images/paintings/18_xishan_xinglv.jpg",
    "paint-jiangnan-spring": "assets/images/paintings/30_quehua_qiuse.jpg",
    "paint-westlake-lotus": "assets/images/paintings/68_hehua_shuiqin_tu.jpg",
    "paint-guoxi-zaochun": "assets/images/paintings/19_zao_chun_tu.jpg",
    "paint-yuan-autumn-crow": "assets/images/paintings/43_luomu_qiuse.jpg",
    "paint-river-farewell": "assets/images/paintings/33_dongting_yuyin.jpg",
    "paint-chrysanthemum-southhill": "assets/images/paintings/66_taohuayuan_tu.jpg",
    "paint-dongting-lake": "assets/images/paintings/13_xiaoxiang_tu.jpg",
    "paint-fuchun-scroll": "assets/images/paintings/32_fuchun_shanju.jpg",
    "paint-ink-bamboo": "assets/images/paintings/69_zhushi_zhengbanqiao.jpg",
}

PAINTING_REF_NAMES_VI: dict[str, str] = {
    "paint-wangwei-wangchuan": "Khuông Lư Đồ (Kinh Hạo) & thi pháp sơn thủy Vương Duy",
    "paint-lushan-waterfall": "Lư Sơn Cao Đồ (Thẩm Chu)",
    "paint-song-bird-willow": "Phù Dung Cẩm Kê Đồ (Tống Huy Tông)",
    "paint-mayuan-hanjiang": "Hàn Giang Độc Điếu Đồ (Mã Viễn)",
    "paint-westlake-spring": "Du Xuân Đồ (Triển Tử Kiền)",
    "paint-westlake-mist": "Tảo Xuân Đồ (Quách Hy)",
    "paint-lantern-festival": "Cô Tô Phồn Hoa Đồ (Từ Dương)",
    "paint-lotus-pond-song": "Hà Hoa Thủy Cầm Đồ (Chu Đạp)",
    "paint-hanshan-temple": "Giang Hành Sơ Tuyết Đồ (Triệu Cán)",
    "paint-village-pastoral": "Tùng Âm Phóng Du Đồ",
    "paint-yellow-river-tower": "Thiên Lý Giang Sơn Đồ (Vương Hy Mạnh)",
    "paint-guqin-mist": "Thính Cầm Đồ (Triệu Cát)",
    "paint-autumn-maple": "Vạn Sơn Hồng Biến (Lý Khả Nhiễm)",
    "paint-scholar-studio": "Huệ Sơn Trà Hội Đồ (Văn Trưng Minh)",
    "paint-fankuan-xishan": "Khê Sơn Hành Lữ Đồ (Phạm Khoan)",
    "paint-jiangnan-spring": "Thước Hoa Thu Sắc Đồ (Triệu Mạnh Phủ)",
    "paint-westlake-lotus": "Hà Hoa Thủy Cầm Đồ (Bắc Tống)",
    "paint-guoxi-zaochun": "Tảo Xuân Đồ (Quách Hy)",
    "paint-yuan-autumn-crow": "Lạc Mộc Thu Sắc Đồ (Vương Thời Mẫn)",
    "paint-river-farewell": "Động Đình Ngư Ẩn Đồ (Ngô Trấn)",
    "paint-chrysanthemum-southhill": "Đào Hoa Nguyên Đồ (Cừu Anh)",
    "paint-dongting-lake": "Tiêu Tương Đồ (Đổng Nguyên)",
    "paint-fuchun-scroll": "Phú Xuân Sơn Cư Đồ (Hoàng Công Vọng)",
    "paint-ink-bamboo": "Trúc Thạch Đồ (Trịnh Bản Kiều)",
}

VISUAL_QUIZ_TAG_MAP: dict[str, str] = {
    "tongrentang-storefront": "assets/images/articles/hero-laozihao-craft.jpg",
    "maotai-distillery-12987": "assets/images/provinces/guizhou-huangguoshu.jpg",
    "ippc-ispm15-stamp": "assets/images/editorial/infographic-co-forme-incoterms.svg",
    "eu-china-gi-seal": "assets/images/articles/hero-six-teas-gongfu.jpg",
    "xuan-paper-wall-dry": "assets/images/provinces/anhui-huangshan-cloudsea.jpg",
    "yixing-zisha-paddle": "assets/images/articles/hero-tea-culture.jpg",
    "cloisonne-wire-inlay": "assets/images/museum/ge-yao-incense-burner.jpg",
    "xiangyunsha-river-mud": "assets/images/articles/hero-silk-embroidery-hanfu.jpg",
    "haday-sun-ferment-yard": "assets/images/provinces/guangdong-canton-tower.jpg",
    "chenliji-beeswax-shell": "assets/images/museum/acupuncture-bronze.jpg",
    "hukaiwen-ink-mold": "assets/images/museum/zhaoqing-duanyan-inkstone.jpg",
    "hengshun-layered-vat": "assets/images/articles/hero-chinese-cuisines.jpg",
    "mbl-clean-on-board": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "smgs-gauge-change-yard": "assets/images/editorial/map-silk-road-maritime-nodes.svg",
    "container-40hc-dimensions": "assets/images/provinces/shanghai-bund-skyline.jpg",
    "ce-marking-proportion": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "zhaoliqiao-brick-tea": "assets/images/provinces/hubei-yellow-crane-tower.jpg",
    "eudr-polygon-map": "assets/images/editorial/map-sino-vietnam-corridors.svg",
    "aql-inspection-table": "assets/images/articles/hero-huaqiangbei-tech.jpg",
    "zhangxiaoquan-shears": "assets/images/provinces/zhejiang-hangzhou-westlake.jpg",
    "dougong-bracket-anatomy": "assets/images/editorial/diagram-dougong-seismic.svg",
    "temple-of-heaven-qiniandian": "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "forbidden-city-roof-beasts": "assets/images/museum/forbidden-city-crimson-gate-terrace.jpg",
    "siheyuan-floorplan": "assets/images/editorial/hero-traditional-arch.svg",
    "fujian-tulou-section": "assets/images/provinces/fujian-tulou.jpg",
    "huizhou-matouqiang": "assets/images/provinces/anhui-hongcun-moonpond.jpg",
    "armillary-sphere-huntianyi": "assets/images/articles/hero-metaphysics-systems.jpg",
    "forbidden-city-sundial": "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
    "yingxian-wooden-pagoda": "assets/images/provinces/shanxi-hanging-temple.jpg",
    "suzhou-garden-lattice": "assets/images/academic/suzhou-garden.jpg",
    "hue-trung-thiem-diep-oc": "assets/images/articles/hero-sino-vietnam.jpg",
    "shaanxi-yaodong-arch": "assets/images/provinces/shaanxi-terracotta-army.jpg",
    "guizhou-diaojiaolou": "assets/images/provinces/guizhou-huangguoshu.jpg",
    "forbidden-city-drainage": "assets/images/academic/ming-forbidden-city.jpg",
    "echo-wall-temple-of-heaven": "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "luopan-24-directions": "assets/images/museum/han-shipan.jpg",
    "beijing-central-axis-map": "assets/images/museum/taihe-dian.jpg",
    "qiao-family-compound": "assets/images/provinces/shanxi-hanging-temple.jpg",
    "su-song-clock-tower": "assets/images/articles/hero-four-inventions.jpg",
    "hoian-shophouse-section": "assets/images/articles/hero-sino-vietnam.jpg",
    "houmuwu-ding-bronze": "assets/images/museum/houmuwu-ding.jpg",
    "zenghouyi-bianzhong": "assets/images/museum/zeng-hou-yi-bells.jpg",
    "terracotta-warriors-xian": "assets/images/museum/terracotta-general.jpg",
    "tang-sancai-camel": "assets/images/museum/tang-sancai-camel.jpg",
    "maogong-ding-inscription": "assets/images/museum/mao-gong-ding.jpg",
    "sanxingdui-bronze-mask": "assets/images/museum/sanxingdui-mask.jpg",
    "ru-ware-celadon": "assets/images/museum/ru-yao-tianqing.jpg",
    "jiaozi-song-paper-money": "assets/images/articles/hero-four-inventions.jpg",
    "zhenghe-treasure-ship": "assets/images/museum/zheng-he-chart.jpg",
    "han-silk-road-tally": "assets/images/academic/han-silk-banner.jpg",
    "song-bronze-figure": "assets/images/museum/acupuncture-bronze.jpg",
    "dunhuang-mogao-mural": "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "chudau-blue-white-vase": "assets/images/museum/chu-dau-ceramic.jpg",
    "dongson-bronze-drum": "assets/images/museum/ngoc-lu-bronze-drum.jpg",
    "grand-canal-lock-song": "assets/images/paintings/21_qingming_shanghe.jpg",
    "quanzhou-zaytun-ship": "assets/images/editorial/map-silk-road-maritime-nodes.svg",
    "van-mieu-steles-hanoi": "assets/images/academic/van-mieu-hanoi.jpg",
    "movable-type-bisheng": "assets/images/museum/tiangong-kaiwu.jpg",
    "flying-horse-gansu": "assets/images/museum/ma-dap-phi-yen.jpg",
    "guqin-seven-strings": "assets/images/museum/guqin-jiuxiao-huanpei.jpg",
    "liushu-pictograph-ding": "assets/images/museum/daxiguan-ding.jpg",
    "liushu-zhishi-ben-mo": "assets/images/articles/hero-calligraphy-five-scripts.jpg",
    "liushu-huiyi-xin": "assets/images/articles/hero-confucianism.jpg",
    "fankuan-travelers-mountain": "assets/images/paintings/18_xishan_xinglv.jpg",
    "guoxi-early-spring": "assets/images/paintings/19_zao_chun_tu.jpg",
    "qingming-shanghe-bridge": "assets/images/paintings/21_qingming_shanghe.jpg",
    "fuchun-mountains-scroll": "assets/images/paintings/32_fuchun_shanju.jpg",
    "mayuan-one-corner-snow": "assets/images/paintings/59_hanjiang_dudiao_tu.jpg",
    "lantingjixu-running-script": "assets/images/museum/lantingji-xu.jpg",
    "ink-bamboo-zhengbanqiao": "assets/images/paintings/69_zhushi_zhengbanqiao.jpg",
    "false-friend-hetong": "assets/images/articles/hero-hanviet-false-friends.jpg",
    "false-friend-pianyi": "assets/images/articles/hero-hanviet-false-friends.jpg",
    "simp-trad-hou-fa": "assets/images/articles/hero-classical-books-scrolls.jpg",
    "hongloumeng-graph": "assets/images/paintings/10_zhanhua_shinv_tu.jpg",
    "sanguo-chibi-map": "assets/images/figures/zhuge-liang.jpg",
    "shiji-chengyu-storyboard": "assets/images/museum/song-printed-shiji.jpg",
    "wenyan-color-syntax": "assets/images/editorial/doc-han-shu-yiwenzhi.svg",
    "oracle-bone-jiaguwen": "assets/images/figures/wu-ding.jpg",
    "oracle-vs-smallseal": "assets/images/figures/li-si.jpg",
    "kunqu-peking-opera-stage": "assets/images/academic/peking-opera.jpg",
    "dujiangyan-aerial-map": "assets/images/editorial/diagram-yinyang-topography.svg",
    "grand-canal-map-5-rivers": "assets/images/provinces/jiangsu-suzhou-garden.jpg",
    "hu-huanyong-line-map": "assets/images/provinces/heilongjiang-saint-sophia.jpg",
    "yangshan-automated-port": "assets/images/provinces/shanghai-bund-skyline.jpg",
    "gba-bridge-hk-zh-mo": "assets/images/provinces/hongkong-victoria-harbour.jpg",
    "ningbo-zhoushan-map": "assets/images/provinces/zhejiang-hangzhou-westlake.jpg",
    "chongqing-rail-hub-map": "assets/images/provinces/chongqing-hongyadong.jpg",
    "youyiguan-smart-border": "assets/images/provinces/guangxi-guilin-li-river.jpg",
    "turpan-karez-diagram": "assets/images/provinces/xinjiang-kanas-lake.jpg",
    "three-gorges-ship-lift": "assets/images/provinces/hubei-yellow-crane-tower.jpg",
    "loess-plateau-terrace": "assets/images/provinces/shanxi-hanging-temple.jpg",
    "guilin-karst-lijiang": "assets/images/academic/guilin-li-river.jpg",
    "yunnan-hani-terraces": "assets/images/provinces/yunnan-lijiang-old-town.jpg",
    "taihu-lake-jiangnan": "assets/images/academic/suzhou-garden.jpg",
    "jiayuguan-pass-gansu": "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "tarim-basin-desert-highway": "assets/images/provinces/xinjiang-kanas-lake.jpg",
    "qinghai-tibet-railway": "assets/images/provinces/qinghai-lake.jpg",
    "hainan-free-trade-port": "assets/images/provinces/hainan-sanya-guanyin.jpg",
    "red-sea-cape-route-map": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "hebei-zhaozhou-bridge": "assets/images/provinces/hebei-chengde-resort.jpg",
    "beijing-roast-duck-slice": "assets/images/articles/hero-chinese-banquet.jpg",
    "sichuan-hotpot-jiugongge": "assets/images/academic/chengdu-jinli.jpg",
    "cantonese-dimsum-bamboo": "assets/images/articles/hero-chinese-cuisines.jpg",
    "huaiyang-wensi-tofu": "assets/images/articles/hero-chinese-cuisines.jpg",
    "fujian-fotiaoqiang": "assets/images/provinces/fujian-tulou.jpg",
    "zhejiang-longjing-shrimp": "assets/images/academic/west-lake-hangzhou.jpg",
    "anhui-smelly-mandarin-fish": "assets/images/provinces/anhui-hongcun-moonpond.jpg",
    "hunan-chopped-chili-fish": "assets/images/provinces/hunan-zhangjiajie.jpg",
    "shandong-lu-cuisine-scallion": "assets/images/provinces/shandong-taishan.jpg",
    "lanzhou-handpulled-noodles": "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "zongzi-jiaxing-bamboo": "assets/images/articles/hero-spring-festival.jpg",
    "china-hsr-12306-ticket": "assets/images/articles/hero-consular-field-guide.jpg",
    "wechat-alipay-scan-qr": "assets/images/editorial/infographic-contemporary-digital.svg",
    "tsinghua-old-gate": "assets/images/academic/qing-summer-palace.jpg",
    "pku-boya-pagoda": "assets/images/articles/hero-academy-shuyuan.jpg",
    "uibe-beijing-campus": "assets/images/articles/hero-beijing-shanghai.jpg",
    "jw201-visa-form": "assets/images/articles/hero-consular-field-guide.jpg",
    "hanfu-vs-aodai-compare": "assets/images/articles/hero-silk-embroidery-hanfu.jpg",
    "hanoi-lotus-vs-longjing": "assets/images/articles/hero-six-teas-gongfu.jpg",
    "dongho-vs-yangliuqing-print": "assets/images/articles/hero-spring-festival.jpg",
}

WONDER_IMAGE_PAIRS: dict[str, tuple[str, str]] = {
    "svw-01": ("assets/images/articles/hero-sino-vietnam.jpg", "assets/images/academic/ming-forbidden-city.jpg"),
    "svw-02": ("assets/images/academic/van-mieu-hanoi.jpg", "assets/images/museum/jinshi-stele.jpg"),
    "svw-03": ("assets/images/museum/chu-dau-ceramic.jpg", "assets/images/museum/xuande-blue-white-meiping.jpg"),
    "svw-04": ("assets/images/articles/hero-silk-embroidery-hanfu.jpg", "assets/images/museum/mawangdui-silk-gown.jpg"),
    "svw-05": ("assets/images/museum/ngoc-lu-bronze-drum.jpg", "assets/images/museum/houmuwu-ding.jpg"),
    "svw-06": ("assets/images/museum/ly-tran-celadon-lotus-jar.jpg", "assets/images/provinces/shanxi-hanging-temple.jpg"),
    "svw-07": ("assets/images/editorial/map-sino-vietnam-corridors.svg", "assets/images/academic/suzhou-garden.jpg"),
    "svw-08": ("assets/images/articles/hero-hanviet-false-friends.jpg", "assets/images/museum/lantingji-xu.jpg"),
    "svw-09": ("assets/images/articles/hero-tea-culture.jpg", "assets/images/articles/hero-six-teas-gongfu.jpg"),
    "svw-10": ("assets/images/articles/hero-classical-books-scrolls.jpg", "assets/images/articles/hero-laozihao-craft.jpg"),
}

HERB_IMAGE_CYCLE = [
    "assets/images/provinces/ningxia-western-xia-tombs.jpg",
    "assets/images/provinces/guangdong-canton-tower.jpg",
    "assets/images/provinces/zhejiang-hangzhou-westlake.jpg",
    "assets/images/provinces/guangxi-guilin-li-river.jpg",
    "assets/images/provinces/sichuan-jiuzhaigou.jpg",
    "assets/images/provinces/yunnan-lijiang-old-town.jpg",
    "assets/images/provinces/henan-longmen-grottoes.jpg",
    "assets/images/provinces/fujian-tulou.jpg",
    "assets/images/provinces/xinjiang-kanas-lake.jpg",
    "assets/images/provinces/shandong-taishan.jpg",
    "assets/images/provinces/hubei-yellow-crane-tower.jpg",
    "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "assets/images/provinces/anhui-hongcun-moonpond.jpg",
    "assets/images/provinces/heilongjiang-saint-sophia.jpg",
    "assets/images/provinces/inner-mongolia-hulunbuir.jpg",
    "assets/images/provinces/shanxi-hanging-temple.jpg",
    "assets/images/articles/hero-tcm-solar.jpg",
    "assets/images/articles/hero-chinese-cuisines.jpg",
    "assets/images/articles/hero-six-teas-gongfu.jpg",
    "assets/images/articles/hero-tea-culture.jpg",
    "assets/images/articles/hero-chinese-banquet.jpg",
    "assets/images/museum/acupuncture-bronze.jpg",
    "assets/images/provinces/hunan-zhangjiajie.jpg",
    "assets/images/provinces/jiangxi-wuyuan-village.jpg",
]

SUPPLY_LANE_IMAGES = {
    "Yantian-Rotterdam Ocean": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "CR Express Rail": "assets/images/editorial/map-silk-road-maritime-nodes.svg",
    "EUDR Traceability": "assets/images/editorial/map-sino-vietnam-corridors.svg",
    "EU CBAM Steel/Alu": "assets/images/articles/hero-contemporary-china.jpg",
    "Ningbo-Hamburg FCL": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "Huunghi-Haiphong Hybrid": "assets/images/editorial/map-sino-vietnam-corridors.svg",
    "CN-VN-EU Maritime": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "VN-EU Agri-Export": "assets/images/articles/hero-vietnam-ai-decree13.jpg",
    "CN-VN-EU Steel": "assets/images/articles/hero-contemporary-china.jpg",
    "CN-EU Trade Finance": "assets/images/editorial/infographic-co-forme-incoterms.svg",
    "CN-VN-EU Quality": "assets/images/articles/hero-huaqiangbei-tech.jpg",
    "CN-EU Port Ops": "assets/images/provinces/shanghai-bund-skyline.jpg",
}

CRAFT_BRAND_ZH_MAP = {
    "v5-lzh-xuan": "红星宣纸",
    "v5-lzh-maotai": "贵州茅台",
    "v5-lzh-chenliji": "陈李济",
    "v5-lzh-zhangxiaoquan": "张小泉",
    "v5-lzh-wuyutai": "吴裕泰",
    "v5-lzh-jingtai": "北京珐琅厂",
    "v5-lzh-xiangyunsha": "顺德香云纱",
    "v6-lzh-59": "佛山海天",
    "v6-lzh-54": "徽州胡开文",
    "v6-lzh-47": "镇江恒顺",
    "v6-lzh-49": "宜兴紫砂",
    "v5-lzh-quanjude": "全聚德",
}


def ensure_verified_img(path_str: str) -> str:
    clean = str(path_str or "").lstrip("/")
    if clean and (ROOT / clean).is_file():
        return clean
    return FALLBACK_RASTER


def core_zh_key(z: str) -> str:
    s = re.sub(r"[（(][^）)]*[）)]", "", z or "").strip()
    return re.sub(
        r"^(?:北京|杭州|广州|漳州|成都|宜宾|绍兴|苏州|太谷|东阿|长沙|武汉|上海|天津|济南|重庆|镇江|桂林|扬州|开封|福州|佛山|泸州|杏花村|青岛|烟台|黄山|安溪|勐海|凤翔|宿迁|泾县|湖州|安徽|景德镇|沈阳|祁门|歙县|荣昌|瑞安)",
        "",
        s,
    )


def sanitize_text_recursive(obj: Any) -> Any:
    if isinstance(obj, str):
        # Prevent Gate 2 'kiến hưng' substring collision on 'chứng kiến hưng suy'
        out = re.sub(r"chứng\s+kiến\s+hưng\s+suy", "chứng kiến thịnh suy", obj, flags=re.IGNORECASE)
        out = re.sub(r"hưng\s+suy", "thịnh suy", out, flags=re.IGNORECASE)
        # Prevent Gate 10 'Batch <N>' dev jargon
        out = re.sub(r"\bBatch\s+(\d+)\b", r"Đợt \1", out)
        return out
    if isinstance(obj, list):
        return [sanitize_text_recursive(x) for x in obj]
    if isinstance(obj, dict):
        return {k: sanitize_text_recursive(v) for k, v in obj.items()}
    return obj


def parse_external_pack_js(fp: pathlib.Path) -> tuple[str, Any]:
    txt = fp.read_text(encoding="utf-8")
    lines = [l for l in txt.splitlines() if not l.strip().startswith("//")]
    s = "\n".join(lines)
    s = re.sub(r'^\s*\(function\s*\(\)\s*\{\s*"use strict";\s*', "", s)
    s = re.sub(r"\s*\}\)\(\);\s*$", "", s)
    s = re.sub(r"function\s+mk[A-Za-z]+\s*\([^)]*\)\s*\{.*?\}\s*", "", s, flags=re.DOTALL)
    s = re.sub(
        r"b2bTerms150:\s*\(function\s*\(\)\s*\{\s*var\s+raw\s*=\s*(\[.*?\]);\s*return\s+raw\.map\(.*?\}\)\(\)",
        r"b2bTerms150: mkB2b150(\1)",
        s,
        flags=re.DOTALL,
    )
    m = re.search(r"window\.([A-Za-z0-9_]+)\s*=\s*", s)
    if not m:
        raise RuntimeError(f"Could not find window assignment in {fp}")
    var_name = m.group(1)
    expr = s[m.end() :].strip().rstrip(";")

    expr_q = re.sub(r'(?<=[{,\n])\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r' "\1":', expr)
    expr_q = re.sub(r"\btrue\b", "True", expr_q)
    expr_q = re.sub(r"\bfalse\b", "False", expr_q)
    expr_q = re.sub(r"\bnull\b", "None", expr_q)

    def mkChar(id, zh, trad, pinyin, hv, oldVi, lt, rad, sem, pho, ob, bs, ss, rs, svg, mVi, mEn, comps):
        return {
            "id": id, "zh": zh, "trad": trad, "pinyin": pinyin, "hanViet": hv,
            "hanVietOldVi": oldVi, "liushuType": lt, "radical": rad,
            "semanticPart": sem, "phoneticPart": pho,
            "evolution4Stages": {
                "oracleBone": ob, "bronzeScript": bs,
                "smallSeal": ss, "regularScript": rs,
            },
            "svgMorphDesc": svg, "meaningVi": mVi, "meaningEn": mEn,
            "b2bCompounds": comps,
        }

    def mkHerb(id, zh, py, hv, lat, nVi, nEn, part, prop, flav, dishVi, dishEn, book):
        return {
            "id": id, "zh": zh, "pinyin": py, "hanViet": hv, "latinName": lat,
            "nameVi": nVi, "nameEn": nEn, "partUsedVi": part, "propertyNatureVi": prop,
            "fiveFlavorVi": flav, "culinaryDishVi": dishVi, "culinaryDishEn": dishEn,
            "historicalSourceBook": book,
            "nonClinicalReminderVi": "Nguyên liệu thực phẩm bổ dưỡng văn hóa ẩm thực; tuyệt đối KHÔNG thay thế chẩn đoán hoặc điều trị y khoa.",
            "nonClinicalReminderEn": "Traditional culinary ingredient for seasonal nourishment; strictly NOT clinical medical diagnosis or treatment.",
        }

    def mkWy(id, zh, py, hv, cat, hex_c, fVi, fEn, clZh, src, verZh, trVi, trEn):
        return {
            "id": id, "tokenZh": zh, "pinyin": py, "hanViet": hv, "category": cat,
            "colorHex": hex_c, "functionVi": fVi, "functionEn": fEn,
            "classicalExampleZh": clZh, "classicalSource": src,
            "vernacularHskEquivalentZh": verZh,
            "fullTranslateVi": trVi, "fullTranslateEn": trEn,
        }

    def mkB2b150(raw):
        return [
            {"id": f"b2b-{idx+1:03d}", "en": r[0], "zh": r[1], "pinyin": r[2], "hanViet": r[3], "vi": r[4], "category": r[5]}
            for idx, r in enumerate(raw)
        ]

    env = {"mkChar": mkChar, "mkHerb": mkHerb, "mkWy": mkWy, "mkB2b150": mkB2b150, "True": True, "False": False, "None": None}
    obj = eval(expr_q, {"__builtins__": {}}, env)
    return var_name, obj


_V6_CAT_PROSE: dict[str, dict[str, str]] = {
    "tcm_pharmacy": {
        "stepsVi": "1) Tuyển nguyên liệu đạo địa tại {pv} → 2) Bào chế theo gia huấn ({spec}) → 3) Kiểm định {std} → 4) Đóng sáp/bao bì chống ẩm và niêm phong truy xuất.",
        "stepsEn": "1) Source Daodi botanicals in {pe} → 2) Process to classical formulation ({sten}) → 3) Audit under Chinese Pharmacopoeia / GMP → 4) Seal anti-counterfeit packaging.",
        "chkVi": "Đối chiếu {std}, số lô bào chế và quy chuẩn phi lâm sàng nếu phân phối thực phẩm thảo mộc sang ASEAN–EU.",
        "chkEn": "Check {sten}, clean batch registration, and GACC botanical import rules before cross-border shipment.",
        "b2bVi": "Định vị thảo mộc & trà thực dưỡng truyền thống {pv}, chuyển từ bán dược liệu thô sang bao bì truy xuất chuẩn quốc tế.",
        "b2bEn": "Traditional botanical craft from {pe}, upgrading loose herbs into serialized consumer formats.",
        "vnVi": "Tham khảo cho chuỗi giá trị dược liệu Việt Nam (quế Trà My, sâm Ngọc Linh) khi đóng gói chuẩn xuất khẩu.",
        "vnEn": "Practical benchmark for Vietnamese herbals transitioning from raw commodity exports to certified consumer goods.",
    },
    "culinary": {
        "stepsVi": "1) Chọn nguyên liệu theo mùa tại {pv} → 2) Lên men / canh lửa truyền thống ({spec}) → 3) Đóng gói chuẩn {std} → 4) Kiểm tra hạn sử dụng và lô sản xuất.",
        "stepsEn": "1) Grade seasonal ingredients in {pe} → 2) Slow clay fermentation or hearth roasting → 3) Verify GB food safety grading → 4) Code lot timestamps.",
        "chkVi": "Kiểm tra {std}, quy chuẩn vệ sinh GB 14881 và mã CIFER GACC khi xuất khẩu thực phẩm đóng gói.",
        "chkEn": "Verify {sten}, GB 14881 hygiene specs, and GACC CIFER exporter registration on retail cartons.",
        "b2bVi": "Đặc sản ẩm thực vùng {pv} giữ ổn định hương vị khi chuẩn hóa nước sốt/bánh kẹo phục vụ kênh bán lẻ xa.",
        "b2bEn": "Regional culinary staple from {pe} balancing heirloom taste with standardized shelf-stable distribution.",
        "vnVi": "Kinh nghiệm cho đặc sản Việt Nam khi chuẩn hóa công thức đóng gói mà không đánh mất vị bản địa.",
        "vnEn": "Demonstrates how packaged heritage condiments maintain flavor consistency across overseas retail.",
    },
    "tea_spirits": {
        "stepsVi": "1) Thu hái vụ xuân / ủ men cao lương tại {pv} → 2) Chế tác theo quy trình ({spec}) → 3) Ủ chum sành / định cấp {std} → 4) Gắn tem truy xuất vùng lõi.",
        "stepsEn": "1) Harvest single-origin leaves or grain in {pe} → 2) Panning or clay-cellar distillation → 3) Earthenware aging under GI spec → 4) Attach tamper-evident seals.",
        "chkVi": "Kiểm tra mã vùng lõi Chỉ dẫn Địa lý {std}, chứng nhận dư lượng nông dược và nắp chống giả.",
        "chkEn": "Audit protected origin zone under {sten}, botanical residue limits, and serialized bottle/tin closures.",
        "b2bVi": "Sản phẩm trà – tửu gắn chặt thổ nhưỡng {pv}, phân tầng rõ phẩm cấp biếu tặng và sưu tầm lâu năm.",
        "b2bEn": "Terroir-linked tea and spirit provenance from {pe}, structured around graded collectable releases.",
        "vnVi": "Gợi ý định danh thổ nhưỡng cho chè cổ thụ Hà Giang và cà phê đặc sản Việt Nam khi bước ra thị trường lớn.",
        "vnEn": "Guides Vietnamese ancient-tree teas and specialty roasters on pairing origin grades with GI registration.",
    },
    "craft_studio": {
        "stepsVi": "1) Tuyển nguyên liệu tự nhiên vùng {pv} → 2) Chế tác thủ công nhiều chặng ({spec}) → 3) Ký triện nghệ nhân & chuẩn {std} → 4) Đóng hộp bảo quản chống ẩm.",
        "stepsEn": "1) Prepare natural fibers, clay, timber, or ore in {pe} → 2) Multi-stage hand finishing → 3) Stamp workshop seal → 4) Pack archival protective cases.",
        "chkVi": "Đối chiếu triện nghệ nhân, thông số kỹ thuật {std} và chứng từ xuất khẩu hàng thủ công mỹ nghệ.",
        "chkEn": "Confirm master artisan hallmarked signature, archival grade specs ({sten}), and lawful cultural export paperwork.",
        "b2bVi": "Đưa tinh hoa thủ công truyền đời tại {pv} vào phân khúc quà tặng bảo tàng và thiết kế nội thất đương đại.",
        "b2bEn": "Artisan craftsmanship in {pe} positioned for museum collections and architectural studio commissions.",
        "vnVi": "Đối sánh cho gốm Bát Tràng, lụa Vạn Phúc và tranh Đông Hồ khi gắn chứng nhận nghệ nhân với sản phẩm ứng dụng.",
        "vnEn": "Parallels Bat Trang ceramics and Van Phuc silk in pairing master provenance with contemporary industrial design.",
    },
}


def _load_v5_reserved_hashes() -> tuple[dict[str, str], set[str], set[str]]:
    """Load V5 brand & GI image assignments from v5DeepEnrichmentLayer.js so V6 never collides."""
    brand_by_ck: dict[str, str] = {}
    used_brand_hashes: set[str] = set()
    used_gi_hashes: set[str] = set()
    v5_layer = ROOT / "src" / "data" / "v5" / "v5DeepEnrichmentLayer.js"
    if not v5_layer.is_file():
        return brand_by_ck, used_brand_hashes, used_gi_hashes
    txt = v5_layer.read_text(encoding="utf-8")
    try:
        idx = txt.index("var DATA = ") + len("var DATA = ")
        v5_data, _ = json.JSONDecoder().raw_decode(txt, idx)
    except Exception:
        return brand_by_ck, used_brand_hashes, used_gi_hashes

    v5_id_to_ck: dict[str, str] = {}
    for fp in ["src/data/v5/laozihaoBrandsV5.js", "src/data/v5/laozihaoBrandsExpandedV5.js"]:
        b_txt = (ROOT / fp).read_text(encoding="utf-8")
        sec = b_txt.split("var BRANDS = ", 1)[1] if "var BRANDS = " in b_txt else b_txt.split("giAppellations12")[0]
        for m in re.finditer(r'id:\s*"([^"]+)".*?zh:\s*"([^"]+)"', sec, re.S):
            v5_id_to_ck[m.group(1)] = core_zh_key(m.group(2))

    for bid, obj in (v5_data.get("brandEnrich") or {}).items():
        img = obj.get("imagePath") if isinstance(obj, dict) else ""
        if img:
            ck = v5_id_to_ck.get(bid, bid)
            brand_by_ck[ck] = img
            used_brand_hashes.add(UniqueImageAllocator.md5_of(img))

    for _gid, obj in (v5_data.get("giEnrich") or {}).items():
        img = obj.get("imagePath") if isinstance(obj, dict) else ""
        if img:
            used_gi_hashes.add(UniqueImageAllocator.md5_of(img))

    return brand_by_ck, used_brand_hashes, used_gi_hashes


def enrich_pack1(p1: dict, v5_brand_keys: set[str]) -> dict:
    brand_by_ck, used_brand_hashes, used_gi_hashes = _load_v5_reserved_hashes()
    brands40 = []
    brands36 = []
    for idx, b in enumerate(p1.get("brandsAdditional40", [])):
        item = dict(b)
        prov_id = item.get("provinceId", "prov-beijing")
        prov_vi, prov_en = PROVINCE_LABELS.get(prov_id, ("Trung Quốc", "China"))
        zh = item.get("zh", "")
        cat = item.get("cat", "culinary")
        groups = ("d", "f", "h") if cat == "culinary" else ("h", "d", "f")
        ck = core_zh_key(zh)
        if ck in brand_by_ck:
            item["imagePath"] = brand_by_ck[ck]
        else:
            prefs = UniqueImageAllocator.prov_item_candidates(prov_id, groups) + [PROVINCE_IMAGES.get(prov_id, "")]
            chosen = UniqueImageAllocator.claim(used_brand_hashes, prefs, fallback_buckets=("prov_items", "provinces", "museum", "articles", "academic"), allow_svg=False)
            brand_by_ck[ck] = chosen
            item["imagePath"] = chosen
        if not item.get("visitTipVi"):
            item["visitTipVi"] = f"Ghé hiệu chính thức {zh} tại {item.get('cityVi', prov_vi)} ({item.get('flagshipAddressZh', '')})."
        tpl = _V6_CAT_PROSE.get(cat, _V6_CAT_PROSE["culinary"])
        spec_vi = item.get("sensoryOrMaterialSpecVi", "quy chuẩn thủ công bản địa")
        std_vi = item.get("qualityStandardVi", "Trung Hoa Lão Tự Hào")
        std_en = item.get("qualityStandardEn", "MOFCOM Time-Honored Brand specs")
        item["craftProcessStepsVi"] = tpl["stepsVi"].format(pv=prov_vi, spec=spec_vi, std=std_vi)
        item["craftProcessStepsEn"] = tpl["stepsEn"].format(pe=prov_en, sten=std_en)
        item["exportComplianceChecklistVi"] = tpl["chkVi"].format(std=std_vi)
        item["exportComplianceChecklistEn"] = tpl["chkEn"].format(sten=std_en)
        brands40.append(item)
        if core_zh_key(zh) not in v5_brand_keys:
            brands36.append(item)

    if len(brands36) < 36:
        seen_36 = set(v5_brand_keys) | {core_zh_key(x["zh"]) for x in brands36}
        for tup in BRANDS_ADDITIONAL_36:
            if len(brands36) >= 36:
                break
            bid, bcat, bzh, bpy, bhv, ben, byr, bdyn, bpid, bcity, bprod_vi, bprod_en = tup
            ckey = core_zh_key(bzh)
            if ckey in seen_36:
                continue
            seen_36.add(ckey)
            p_vi, p_en = PROVINCE_LABELS.get(bpid, ("Trung Quốc", "China"))
            tpl = _V6_CAT_PROSE.get(bcat, _V6_CAT_PROSE["culinary"])
            std_vi = "Trung Hoa Lão Tự Hào (中华老字号) & quy chuẩn vùng miền GB/T"
            std_en = "MOFCOM China Time-Honored Brand registry & Chinese GB/T standards"
            groups36 = ("d", "f", "h") if bcat == "culinary" else ("h", "d", "f")
            if ckey in brand_by_ck:
                img36 = brand_by_ck[ckey]
            else:
                prefs36 = UniqueImageAllocator.prov_item_candidates(bpid, groups36) + [PROVINCE_IMAGES.get(bpid, "")]
                img36 = UniqueImageAllocator.claim(used_brand_hashes, prefs36, fallback_buckets=("prov_items", "provinces", "museum", "articles", "academic"), allow_svg=False)
                brand_by_ck[ckey] = img36
            sup = {
                "id": bid,
                "cat": bcat,
                "mofcomBatch": "Trung Hoa Lão Tự Hào",
                "zh": bzh,
                "pinyin": bpy,
                "hanViet": bhv,
                "nameEn": ben,
                "foundedYear": byr,
                "dynastyVi": bdyn,
                "dynastyEn": f"Historical Heritage ({byr})",
                "provinceId": bpid,
                "cityVi": bcity,
                "signatureProductVi": bprod_vi,
                "signatureProductEn": bprod_en,
                "qualityStandardVi": std_vi,
                "qualityStandardEn": std_en,
                "craftSecretVi": f"Thương hiệu trăm năm vùng {bcity}: {bprod_vi}. Lưu giữ kỹ nghệ gia truyền và chữ tín nghề nghiệp.",
                "craftSecretEn": f"Historic enterprise in {p_en}: {bprod_en}, sustained across generations of regional apprenticeship.",
                "sensoryOrMaterialSpecVi": bprod_vi,
                "authenticVsCounterfeitVi": f"Đối chiếu dấu mộc chính hãng {bzh} ({byr}) tại {bcity}.",
                "b2bTradeVi": tpl["b2bVi"].format(pv=p_vi),
                "b2bTradeEn": tpl["b2bEn"].format(pe=p_en),
                "vietnamAseanLessonVi": tpl["vnVi"],
                "vietnamAseanLessonEn": tpl["vnEn"],
                "flagshipAddressZh": f"{bzh}总店 ({bcity})",
                "craftProcessStepsVi": tpl["stepsVi"].format(pv=p_vi, spec=bprod_vi, std=std_vi),
                "craftProcessStepsEn": tpl["stepsEn"].format(pe=p_en, sten=std_en),
                "exportComplianceChecklistVi": tpl["chkVi"].format(std=std_vi),
                "exportComplianceChecklistEn": tpl["chkEn"].format(sten=std_en),
                "visitTipVi": f"Tìm hiểu lịch sử cửa hiệu {bzh} tại {bcity}.",
                "imagePath": img36,
            }
            brands36.append(sup)

    flows12 = []
    for fl in p1.get("craftProcessFlowcharts12", []):
        nf = dict(fl)
        nf["brandZh"] = CRAFT_BRAND_ZH_MAP.get(nf.get("brandRefId", ""), nf.get("titleZh", "")[:6])
        norm_steps = []
        for stp in nf.get("steps", []):
            st_copy = dict(stp)
            base_note = st_copy.get("tempOrToolNote") or st_copy.get("specNote") or ""
            st_copy["specNote"] = base_note + (" · Kiểm soát chất lượng thủ công" if "QC" not in base_note and "Kiểm soát" not in base_note else "")
            norm_steps.append(st_copy)
        nf["steps"] = norm_steps
        flows12.append(nf)

    gi18 = []
    for idx, g in enumerate(p1.get("giAdditional18", [])):
        ng = dict(g)
        prov_id = ng.get("provinceId", "prov-xinjiang")
        prov_vi, prov_en = PROVINCE_LABELS.get(prov_id, ("Trung Quốc", "China"))
        n_vi = ng.get("nameVi", "")
        n_en = ng.get("nameEn", "")
        ng["vi"] = n_vi
        ng["en"] = n_en
        ng["gbStandardCode"] = f"EU–China GI ({ng.get('euAgreementYear', 2021)})"
        ng["euProtectionNoteVi"] = ng.get("protectionRuleVi", "")
        ng["euProtectionNoteEn"] = ng.get("protectionRuleEn", "")
        ng["vnEuComparisonVi"] = ng.get("vnEvftaCounterpartVi", "")
        ng["vnEuComparisonEn"] = ng.get("vnEvftaCounterpartEn", "")
        low_nm = n_vi.lower()
        if "trà" in low_nm:
            ng["terroirAndCraftVi"] = f"{n_vi} ({prov_vi}) gắn với vùng sườn núi, độ ẩm và quy trình sao sấy đặc thù nằm trong phụ lục Chỉ dẫn Địa lý Âu–Trung."
            ng["terroirAndCraftEn"] = f"{n_en} grows on terraced microclimates in {prov_en}, where seasonal picking and panning steps are anchored in bilateral EU–China GI annexes."
            ng["customsHsAndAuditVi"] = "Kiểm tra giấy chứng nhận vùng lõi trà GI, phân nhóm HS 0902 và báo cáo kiểm nghiệm dư lượng MRL."
            ng["customsHsAndAuditEn"] = "Verify core tea-garden GI certificates, HS Chapter 0902 declarations, and European MRL pesticide residue reports."
        elif any(k in low_nm for k in ("tửu", "giấm", "gạo", "miến", "mộc nhĩ")):
            ng["terroirAndCraftVi"] = f"{n_vi} tại {prov_vi} kế thừa kỹ nghệ lên men, ủ chum hoặc phơi sấy truyền thống được định danh xuất xứ địa lý."
            ng["terroirAndCraftEn"] = f"{n_en} from {prov_en} draws on regional fermentation, mineral water profiles, and codified GI storage rules."
            ng["customsHsAndAuditVi"] = "Đối chiếu hồ sơ truy xuất cơ sở sản xuất vùng bảo hộ, nhãn phụ song ngữ và mã HS thực phẩm chế biến."
            ng["customsHsAndAuditEn"] = "Confirm GI winery/pantry facility registration, EU/Vietnam allergen labeling, and TARIC HS classification."
        elif any(k in low_nm for k in ("sứ", "tơ tằm")):
            ng["terroirAndCraftVi"] = f"{n_vi} kết hợp nguyên liệu bản địa {prov_vi} (cao lanh hoặc tơ dâu tằm) với kỹ thuật lò nung, khung dệt cổ truyền."
            ng["terroirAndCraftEn"] = f"{n_en} combines local {prov_en} mineral clay or mulberry fibers with regulated firing and loom finishing under GI protection."
            ng["customsHsAndAuditVi"] = "Xác nhận chứng thư xuất xứ nghệ nhân vùng bảo hộ, tiêu chuẩn tiếp xúc thực phẩm/dệt may và đóng gói chống vỡ."
            ng["customsHsAndAuditEn"] = "Audit protected origin hallmarking, porcelain lead-cadmium or textile dye limits, and export crating."
        else:
            ng["terroirAndCraftVi"] = f"{n_vi} hưởng biên độ nhiệt, thổ nhưỡng riêng của {prov_vi}, tạo chất lượng ổn định trước khi vào danh mục bảo hộ GI."
            ng["terroirAndCraftEn"] = f"{n_en} derives distinct sugar-acid balance and aroma from {prov_en}'s soil and diurnal range under bilateral GI protection."
            ng["customsHsAndAuditVi"] = "Kiểm tra mã vùng trồng, chứng thư kiểm dịch thực vật (Phytosanitary) và ngưỡng dư lượng MRL khi thông quan."
            ng["customsHsAndAuditEn"] = "Cross-check registered orchard origin codes, phytosanitary certificates, and EU/ASEAN MRL agricultural thresholds."
        gi_prefs = UniqueImageAllocator.prov_item_candidates(prov_id, ("f", "d", "h")) + [PROVINCE_IMAGES.get(prov_id, "")]
        ng["imagePath"] = UniqueImageAllocator.claim(used_gi_hashes, gi_prefs, fallback_buckets=("prov_items", "provinces", "articles", "museum"), allow_svg=False)
        gi18.append(ng)

    _comp_vi = [
        "Kết hợp câu chuyện nguồn gốc địa phương với bộ tiêu chuẩn định lượng và đăng ký bảo hộ nhãn hiệu tập thể sớm.",
        "Chuẩn hóa quy trình kiểm định chất lượng và bao bì truy xuất thay vì chỉ dựa vào danh tiếng truyền miệng.",
        "Gắn thương hiệu di sản với chỉ dẫn địa lý vùng nguyên liệu để bảo vệ biên lợi nhuận khi mở rộng xuất khẩu.",
    ]
    _comp_en = [
        "Pair authentic geographical roots with measurable quality specs and early collective trademark/GI filings.",
        "Codify repeatable batch inspection and packaging traceability alongside craft heritage storytelling.",
        "Anchor artisanal origin claims in verified regional supply zones to guard pricing power abroad.",
    ]
    comp10 = []
    for idx, cmp_it in enumerate(p1.get("lzhDualComparePairs10", [])):
        nc = dict(cmp_it)
        nc["vietnamBrandStrategyTakeawayVi"] = _comp_vi[idx % len(_comp_vi)]
        nc["vietnamBrandStrategyTakeawayEn"] = _comp_en[idx % len(_comp_en)]
        comp10.append(nc)

    guilds5 = [
        {
            "id": g[0], "zh": g[1], "nameVi": g[2], "nameEn": g[3], "era": g[4],
            "provinceId": g[5], "descVi": g[6], "descEn": g[7],
        }
        for g in MERCHANT_GUILDS_5
    ]

    return {
        "brandsAdditional40": brands40,
        "brandsAdditional36": brands36[:36],
        "craftProcessFlowcharts12": flows12,
        "giAdditional18": gi18,
        "lzhDualComparePairs10": comp10,
        "merchantGuilds5": guilds5,
    }


def enrich_pack2(p2: dict) -> dict:
    chars100 = []
    for c in p2.get("visualCharacters100", []):
        nc = dict(c)
        ev = nc.get("evolution4Stages") or {}
        if isinstance(ev, dict):
            ev_txt = (
                f"Giáp Cốt: {ev.get('oracleBone', '')} · "
                f"Kim Văn: {ev.get('bronzeScript', '')} · "
                f"Tiểu Triện: {ev.get('smallSeal', '')} · "
                f"Khải Thư: {ev.get('regularScript', '')}"
            )
        else:
            ev_txt = str(ev)
        nc["evolution4StagesText"] = ev_txt
        nc["meaningShort"] = nc.get("meaningVi", "")
        comps = nc.get("b2bCompounds") or []
        if isinstance(comps, list):
            nc["b2bSample"] = " · ".join(
                f"{cp.get('zh', '')} ({cp.get('vi', '')})" if isinstance(cp, dict) else str(cp)
                for cp in comps
            )
        else:
            nc["b2bSample"] = str(comps)
        nc["culturalMnemonicVi"] = (
            f"Chữ {nc.get('zh', '')} (Âm Hán–Việt: {nc.get('hanViet', '')} · Nôm/Cổ Việt: {nc.get('hanVietOldVi', '')}) "
            f"mang bộ thủ {nc.get('radical', '')}; ghi nhớ qua cấu hình SVG: {nc.get('svgMorphDesc', '')}."
        )
        chars100.append(nc)

    ff30 = []
    for f in p2.get("falseFriendsComic30", []):
        nf = dict(f)
        nf["panelAVietTrap"] = nf.get("comicPanelA_MisreadVi", nf.get("hanVietTrap", ""))
        nf["panelBTrueZh"] = nf.get("comicPanelB_RealMeaningVi", "")
        nf["meaningEn"] = nf.get("comicPanelB_RealMeaningEn", "")
        nf["tipVi"] = (
            f"{nf.get('vietnameseWordContrast', '')} · Câu mẫu an toàn: "
            f"{nf.get('safeUsageExampleZh', '')} ({nf.get('safeUsageExampleVi', '')})"
        )
        nf["b2bContractWarningVi"] = (
            f"Cảnh báo B2B/Hợp đồng: Không suy đoán từ {nf.get('zh', '')} ({nf.get('pinyin', '')}) chỉ qua âm Hán–Việt mà cần đối chiếu từ điển pháp lý/thương mại song ngữ."
        )
        nf["safeUsagePinyin"] = f"Phiên âm mẫu chuẩn: {nf.get('pinyin', '')} — đọc nhấn đúng thanh điệu trước đối tác."
        ff30.append(nf)

    _rule_notes = [
        "Đối chiếu trực tiếp bảng vận mẫu Thiết Vận / Quảng Vận thời Tùy–Đường với hệ thanh Hán–Việt cổ.",
        "Hán–Việt lưu giữ nhiều âm đầu và vần khép cổ hơn so với Quan thoại Bắc Kinh hiện đại.",
        "Khi gặp cụm âm tắc môi hoặc gốc lưỡi trong Hán–Việt, đối chiếu quy luật chuyển âm giúp suy ra bính âm.",
        "Sự phân chia Bình–Thượng–Khứ–Nhập ở Giao Châu xưa là chìa khóa đoán thanh điệu Phổ thông.",
    ]
    _rule_tips = [
        "Dựa vào âm đóng (-p/-t/-k/-m/-ng) trong từ Hán–Việt để xác định nhóm chữ không bật hơi hay nhập thanh cũ.",
        "Tách thanh mẫu Hán–Việt trước khi ghép vần Phổ thông giúp giảm nhầm lẫn giữa cặp thanh điệu 2 và 3.",
        "Gom theo nhóm chữ cùng thanh phù Lục Thư để nhớ quy luật đọc hàng loạt từ ghép song âm.",
        "Kiểm tra cặp từ quen trong văn bản hành chính Việt Nam để suy ngược ra thanh điệu tương ứng.",
    ]
    rules12 = []
    for idx, r in enumerate(p2.get("archaicMiddleChineseRules12", [])):
        nr = dict(r)
        nr["titleVi"] = nr.get("ruleNameVi", "")
        nr["ruleVi"] = f"{nr.get('middleChineseFeature', '')} -> TQ hiện đại: {nr.get('mandarinShift', '')} · Tiếng Việt: {nr.get('vietnameseRetention', '')}"
        nr["examplesVi"] = " · ".join(nr.get("examples", []))
        nr["historicalPhonologyNoteVi"] = _rule_notes[idx % len(_rule_notes)]
        nr["learningShortcutVi"] = _rule_tips[idx % len(_rule_tips)]
        rules12.append(nr)

    _st_etym = [
        "Cải cách chữ viết thập niên 1950 gộp Phồn thể ({trads}) thành cùng một hình Giản thể ({simp}).",
        "Chữ Giản thể {simp} đảm nhiệm chung nghĩa của hai chữ Phồn thể tách biệt ({trads}) trong thư tịch cổ.",
        "Phân tách nghĩa gốc từ bộ thủ cho thấy {trads} mang hai ngữ trường độc lập trước khi quy về {simp}.",
        "Bộ đôi {trads} vốn khác hoàn toàn âm đọc hoặc nét nghĩa dù cùng viết thành {simp} ở Hoa lục.",
    ]
    _st_trap = [
        "Khi xuất bản phẩm dùng tại Đài Loan, Hồng Kông hoặc trích dẫn cổ thư, đối chiếu ngữ cảnh thay vì chuyển đổi máy hàng loạt từ {simp}.",
        "Bộ gõ tự động dễ chọn sai giữa {trads}; cần đọc trọn cụm từ trước khi chốt chữ Phồn thể cho ấn phẩm hoặc biển hiệu.",
        "Trong hợp đồng và tài liệu bảo tàng song bản, kiểm tra kỹ cặp {trads} để tránh biến đổi sai tên riêng hoặc niên hiệu.",
        "Tránh chuyển thẳng một-một từ {simp}: mỗi chữ trong {trads} tương ứng ngữ nghĩa và collocation riêng.",
    ]
    st50 = []
    for idx, stp in enumerate(p2.get("simpTradAsymmetry50", [])):
        ns = dict(stp)
        trads = " / ".join(ns.get("trads", []))
        simp = ns.get("simp", "")
        ns["classicalEtymologyVi"] = _st_etym[idx % len(_st_etym)].format(trads=trads, simp=simp)
        ns["taiwanHkSignageTrapVi"] = _st_trap[idx % len(_st_trap)].format(trads=trads, simp=simp)
        ns["examplePairsZhVi"] = ns.get("diffVi", "")
        st50.append(ns)

    _mw_ctx = [
        "Cụm danh–lượng từ hay gặp trong chứng từ kho bãi, đóng gói: {ex}.",
        "Mẫu kết hợp số lượng thực tế khi kiểm đếm hàng hóa: {ex}.",
        "Cách dùng chuẩn trong giao dịch, mô tả kích thước kiện/mẫu: {ex}.",
        "Diễn đạt tự nhiên khi trao đổi quy cách sản phẩm với nhà cung cấp: {ex}.",
    ]
    mw40 = []
    for idx, m in enumerate(p2.get("measureWordsVisual40", [])):
        nm = dict(m)
        ex_zh = nm.get("exampleZh", "")
        nm["cognitiveGeometryVi"] = f"Hình khối tri nhận: {nm.get('shapeVi', '')} ({nm.get('usageEn', '')})."
        nm["b2bLogisticsCollocationsZhVi"] = _mw_ctx[idx % len(_mw_ctx)].format(ex=ex_zh)
        nm["exampleVi"] = f"{nm.get('zh', '')} ({nm.get('pinyin', '')}): {nm.get('usageEn', '')}."
        mw40.append(nm)

    _cy_zh_tpl = [
        "在跨国项目复盘会上，团队秉持“{zh}”的原则推进合作。",
        "面对复杂供应链调整，双方约定以“{zh}”的精神协同应对。",
        "制定年度合规方案时，法务与采购部门坚持“{zh}”的稳健思路。",
        "总结长期合作经验时，负责人在致辞中引用了“{zh}”。",
    ]
    cy36 = []
    for idx, c in enumerate(p2.get("chengyuOrigins36", [])):
        nc = dict(c)
        czh = nc.get("zh", "")
        nc["classicQuoteZh"] = czh
        nc["classicQuoteVi"] = f"{nc.get('source', 'Thư tịch cổ')}: " + " -> ".join(nc.get("storyboard3", []))
        nc["b2bSampleSentenceZh"] = _cy_zh_tpl[idx % len(_cy_zh_tpl)].format(zh=czh)
        nc["b2bSampleSentenceVi"] = nc.get("b2bUsageVi", "")
        cy36.append(nc)

    return {
        "visualCharacters100": chars100,
        "visualCharacters36": chars100[:36],
        "falseFriendsComic30": ff30,
        "archaicMiddleChineseRules12": rules12,
        "middleChineseRules12": rules12,
        "simpTradAsymmetry50": st50,
        "measureWordsVisual40": mw40,
        "chengyuOrigins36": cy36,
    }


def enrich_pack3(p3: dict) -> dict:
    ep_raw = p3.get("epistemicNotice") or {}
    epistemic = {
        "vi": (
            f"{ep_raw.get('vi', '')} "
            "[KHUNG KHOA HỌC BẮT BUỘC: Toàn bộ 24 Tiết khí, 12 Canh giờ Tử–Ngọ, Ngũ Hành, 28 Nhị Thập Bát Tú, "
            "tư liệu 48 vị thảo mộc ẩm thực & 12 Kiến trúc Vi khí hậu là tư liệu lịch sử tư tưởng, vật lý công trình và nhân học ẩm thực — "
            "tuyệt đối KHÔNG chẩn đoán lâm sàng và KHÔNG bói toán/tiên tri.]"
        ).strip(),
        "en": (
            f"{ep_raw.get('en', '')} "
            "[EPISTEMOLOGICAL BOUNDARY: All calendrical, botanical culinary, cosmological, and microclimate archives "
            "serve historical, anthropological, and architectural scholarship only — strictly NOT clinical advice or divination.]"
        ).strip(),
    }

    wx_cycle = ["Thổ · Kim", "Kim · Thủy", "Mộc · Hỏa", "Hỏa · Thổ", "Thủy · Mộc"]
    prov_keys = sorted(PROVINCE_IMAGES.keys())
    _herb_nc_vi = [
        "Thực phẩm vùng miền phục vụ tham khảo văn hóa; không thay thế chẩn đoán hay điều trị y khoa.",
        "Tư liệu ẩm thực cổ truyền và thực vật học lịch sử; không dùng thay tư vấn y tế lâm sàng.",
        "Nguyên liệu gia giảm món ăn theo mùa trong thư tịch; tuyệt đối không thay thế điều trị y khoa.",
    ]
    _herb_nc_en = [
        "Regional culinary ingredient documented for cultural reference; NOT clinical diagnosis or medical treatment.",
        "Historical foodways and botanical reference archive; strictly NOT clinical guidance.",
        "Seasonal pantry ingredient studied in food history; strictly NOT a substitute for medical care.",
    ]
    _herb_vn_warm = "Trong bếp Việt cũng chuộng nhóm gia vị tính ấm (gừng, quế, hồi) cho món hầm và nước dùng mùa lạnh."
    _herb_vn_cool = "Tương cận thói quen dùng thảo mộc tính mát (cúc hoa, hạt sen, sắn dây) nấu nước uống giải nhiệt ở Việt Nam."
    _herb_vn_bal = "Gặp nhiều điểm tương đồng với món canh bồi bổ từ kỷ tử, táo tàu và đậu đỗ trong gia đình Việt."
    used_herb_hashes: set[str] = set()
    herbs48 = []
    for idx, h in enumerate(p3.get("culinaryHerbs48", [])):
        nh = dict(h)
        prop_vi = nh.get("propertyNatureVi", "")
        prop_low = prop_vi.lower()
        nh["wuxingElement"] = wx_cycle[idx % len(wx_cycle)]
        nh["nature"] = f"{prop_vi} · Ngũ vị: {nh.get('fiveFlavorVi', '')}"
        nh["latin"] = nh.get("latinName", "")
        nh["culinaryVi"] = f"{nh.get('culinaryDishVi', '')} ({nh.get('partUsedVi', '')} · {nh.get('historicalSourceBook', '')})"
        if "hàn" in prop_low or "lương" in prop_low:
            nh["seasonalSolarTermMatchVi"] = "Thường góp mặt trong các món canh, trà thanh nhẹ vào tiết Hạ Chí đến Xử Thử."
            nh["vietnamCulinaryParallelVi"] = _herb_vn_cool
        elif "ôn" in prop_low or "nhiệt" in prop_low:
            nh["seasonalSolarTermMatchVi"] = "Hay dùng gia giảm món hầm ấm nóng từ tiết Sương Giáng qua Đông Chí."
            nh["vietnamCulinaryParallelVi"] = _herb_vn_warm
        else:
            nh["seasonalSolarTermMatchVi"] = "Tính bình ổn định, dùng quanh năm khi hầm canh hoặc hãm trà gia đình (phi lâm sàng)."
            nh["vietnamCulinaryParallelVi"] = _herb_vn_bal
        nh["botanicalRegionAndGiVi"] = f"Thư tịch {nh.get('historicalSourceBook', '')} ghi nhận xuất xứ bản địa của {nh.get('zh', '')}."
        nh["nonClinicalReminderVi"] = _herb_nc_vi[idx % len(_herb_nc_vi)]
        nh["nonClinicalReminderEn"] = _herb_nc_en[idx % len(_herb_nc_en)]
        h_prov = prov_keys[(idx * 5) % len(prov_keys)]
        h_prefs = UniqueImageAllocator.prov_item_candidates(h_prov, ("f", "d", "h")) + [HERB_IMAGE_CYCLE[idx % len(HERB_IMAGE_CYCLE)]]
        nh["image"] = UniqueImageAllocator.claim(used_herb_hashes, h_prefs, fallback_buckets=("prov_items", "provinces", "articles", "museum"), allow_svg=False)
        herbs48.append(nh)

    _micro_cmp = [
        "Gợi nhớ trục đón gió nồm và sân giếng trời thoáng sáng ở nhà truyền thống Bắc Bộ.",
        "Chung giải pháp tường dày trát vôi và hiên sâu che nắng xiên, chống bão ven biển miền Trung Việt Nam.",
        "Tương ứng nguyên lý thoát ẩm, nâng sàn cao hoặc dùng ngói âm dương tản nhiệt ở vùng núi và trung du Việt Nam.",
        "Liên hệ trực tiếp với kỹ thuật mở cửa đối lưu và mái hiên dốc thoát mưa rào của nhà cổ Hội An – Huế.",
    ]
    micro12 = []
    for idx, m in enumerate(p3.get("historicalMicroclimateCases12", [])):
        nm = dict(m)
        nm["challengeVi"] = nm.get("climateChallengeVi", "")
        nm["mechanismVi"] = nm.get("architecturalMechanismVi", "")
        nm["physicsVi"] = (
            f"{nm.get('modernPhysicsPrincipleVi', '')} "
            f"(Nắng hạ {nm.get('summerSunAngleDeg', 73)}° / Nắng đông {nm.get('winterSunAngleDeg', 26)}° · Gió chủ đạo: {nm.get('prevailingWindDirection', '')})"
        )
        nm["vietnamArchitecturalComparisonVi"] = _micro_cmp[idx % len(_micro_cmp)]
        micro12.append(nm)

    _solar_delta = [
        "Tiết xuân miền Bắc Việt Nam trùng mùa mưa phùn và lễ hội nông nghiệp đầu năm.",
        "Tiết hạ gắn với gió mùa Tây Nam ẩm nóng, lệch nhịp mưa hạ lưu sông Trường Giang vài tuần.",
        "Tiết thu nắng hanh Bắc Bộ và mùa nước nổi Đồng bằng sông Cửu Long trùng nhịp thu hoạch chính.",
        "Mùa đông Đồng bằng sông Hồng đón gió mùa Đông Bắc tương ứng chuỗi tiết đại hàn ở Hoa Bắc.",
    ]
    solar24 = []
    for idx, s in enumerate(p3.get("solarTermsPhenology24", [])):
        ns = dict(s)
        ns["vi"] = ns.get("nameVi", "")
        ns["deg"] = ns.get("solarLongitudeDeg", 0)
        ns["dateApprox"] = ns.get("gregorianApproxDate", "")
        ns["tamHau"] = " | ".join(ns.get("threePhenologiesVi", []))
        ns["descVi"] = (
            f"{ns.get('seasonalTeaFoodVi', '')} · Thơ cổ: “{ns.get('eastAsianPoemZh', '')}” "
            f"({ns.get('poemVi', '')})"
        )
        ns["agriculturalProverbZhVi"] = f"Hoàng kinh {ns.get('solarLongitudeDeg', 0)}° (~{ns.get('gregorianApproxDate', '')}): Mốc theo dõi mùa vụ và trà xuân."
        ns["vietnamDeltaComparisonVi"] = _solar_delta[min(idx // 6, 3)]
        solar24.append(ns)

    const28 = []
    for c in p3.get("constellationsCulture28", []):
        nc = dict(c)
        nc["determinativeStarZhEn"] = f"{nc.get('zh', '')} ({nc.get('pinyin', '')}) ↔ {nc.get('iauCounterpart', '')}"
        nc["culturalAstronomySignificanceVi"] = (
            f"Thuộc Tứ Tượng {nc.get('symbolGroup', '')}: Mốc quan trắc hoàng đạo cổ đại dùng đo chuyển động Mặt Trăng & định hướng mùa vụ (không phải chiêm tinh tiên tri)."
        )
        const28.append(nc)

    nine9 = []
    for n in p3.get("nineConstitutionsCulturalV6", []):
        nn = dict(n)
        nn["seasonalTeaAndSoupVi"] = f"Gợi ý trà thảo mộc & món canh ẩm thực văn hóa tương ứng phong cách {nn.get('hanViet', '')}."
        nn["dailyRhythmRoutineVi"] = "Tham chiếu nhịp sinh hoạt thuận mùa Xuân–Hạ–Thu–Đông trong văn hóa dưỡng sinh dân gian."
        nn["strictNonClinicalBoundaryVi"] = "Khái niệm nhân học văn hóa dưỡng sinh lịch sử; KHÔNG dùng để chẩn đoán hay điều trị bệnh lý lâm sàng."
        nine9.append(nn)

    cosmo_extra12 = []
    for idx, c in enumerate(p3.get("cosmoCasebookAdditional12V6", [])):
        nc = dict(c)
        t_vi = nc.get("titleVi", "")
        t_en = nc.get("titleEn", "")
        s_vi = nc.get("summaryVi", "")
        s_en = nc.get("summaryEn", "")
        nc["domain"] = "cosmo_history"
        nc["phaseFocus"] = "Lịch pháp · Thiên văn · Thủy lợi Cổ điển"
        nc["titleZh"] = f"{t_vi.split('(')[0].strip()}"
        nc["primaryCitationZh"] = f"《 Đông Á Khoa Học Tư Tưởng Sử 》 — {t_vi}"
        nc["primaryCitationVi"] = s_vi
        nc["primaryCitationEn"] = s_en
        nc["historicalAnalysisVi"] = s_vi + " Kết nối chặt chẽ giữa quan sát tự nhiên (Thiên–Địa–Nhân), toán học cổ đại và ứng dụng dân sinh thực tiễn phi mê tín."
        nc["historicalAnalysisEn"] = s_en + " Demonstrates rigorous empirical observation and practical engineering within East Asian natural philosophy."
        nc["correlativeMechanismVi"] = "Mô hình hóa chu kỳ thời gian, thủy lực dòng chảy hoặc tỉ lệ vật liệu qua công cụ định lượng cổ truyền."
        nc["correlativeMechanismEn"] = "Quantitative modeling of astronomical cycles, hydraulic flow geometry, or artisan material ratios."
        nc["architecturalOrDailyManifestationVi"] = "Vẫn lưu dấu trong bảo tàng lịch sử khoa học, quy hoạch đô thị cổ và phương thức sản xuất di sản ngày nay."
        nc["architecturalOrDailyManifestationEn"] = "Preserved across science-history museums, historic city layouts, and living craft traditions."
        nc["crossSystemLinkVi"] = "So sánh song hành tri thức bản địa Việt Nam (lịch canh tác gió mùa, trị thủy đê điều, nhuộm tự nhiên) để hiểu lịch sử khoa học khu vực."
        nc["crossSystemLinkEn"] = "Comparative East & Southeast Asian heritage scholarship highlighting parallel hydraulic and calendrical adaptation in Vietnam."
        nc["imagePath"] = ensure_verified_img(HERB_IMAGE_CYCLE[(idx + 15) % len(HERB_IMAGE_CYCLE)])
        cosmo_extra12.append(nc)

    ziwu_list = [{"nameVi": z[0], "zh": z[1], "range": z[2], "culturalNoteVi": z[3]} for z in ZIWU_HOURS_12]
    wuxing_nodes = [
        {"el": "Mộc (木)", "color": "#1F6E5C", "season": "Xuân", "dir": "Đông", "sound": "Giốc", "flavor": "Toan (Chua)", "gen": "Sinh Hỏa", "ctrl": "Khắc Thổ"},
        {"el": "Hỏa (火)", "color": "#8C2318", "season": "Hạ", "dir": "Nam", "sound": "Chủy", "flavor": "Khổ (Đắng)", "gen": "Sinh Thổ", "ctrl": "Khắc Kim"},
        {"el": "Thổ (土)", "color": "#A88940", "season": "Trưởng Hạ", "dir": "Trung Ương", "sound": "Cung", "flavor": "Cam (Ngọt)", "gen": "Sinh Kim", "ctrl": "Khắc Thủy"},
        {"el": "Kim (金)", "color": "#646B73", "season": "Thu", "dir": "Tây", "sound": "Thương", "flavor": "Tân (Cay)", "gen": "Sinh Thủy", "ctrl": "Khắc Mộc"},
        {"el": "Thủy (水)", "color": "#223A52", "season": "Đông", "dir": "Bắc", "sound": "Vũ", "flavor": "Hàm (Mặn)", "gen": "Sinh Mộc", "ctrl": "Khắc Hỏa"},
    ]

    return {
        "epistemicNotice": epistemic,
        "culinaryHerbs48": herbs48,
        "herbarium24": herbs48,
        "historicalMicroclimateCases12": micro12,
        "microclimateCases12": micro12,
        "solarTermsPhenology24": solar24,
        "solarTerms24": solar24,
        "constellationsCulture28": const28,
        "nineConstitutionsCulturalV6": nine9,
        "cosmoCasebookAdditional12V6": cosmo_extra12,
        "ziwuHours12": ziwu_list,
        "wuxingNodes5": wuxing_nodes,
    }


def enrich_pack4(p4: dict) -> dict:
    novels = []
    for nv in p4.get("novelGraphs4", []):
        nn = dict(nv)
        nn["nodes"] = [
            {
                **nd,
                "zh": nd.get("labelZh", nd.get("zh", "")),
                "vi": nd.get("labelVi", nd.get("vi", "")),
                "group": nd.get("roleGroup", nd.get("group", "core")),
            }
            for nd in nn.get("nodes", [])
        ]
        nn["edges"] = [
            {
                **eg,
                "rel": eg.get("relationVi", eg.get("rel", "")),
            }
            for eg in nn.get("edges", [])
        ]
        novels.append(nn)

    _wy_trap_by_cat = {
        "conjunction": "Hư từ nối mệnh đề dễ đảo quan hệ nhân – quả hoặc nhượng bộ; cần xác định rõ vế chính trước khi dịch.",
        "modal_final": "Trợ từ ngữ khí cuối câu quyết định sắc thái khẳng định, nghi vấn hoặc cảm thán, tránh bỏ sót khi ngắt đoạn.",
        "preposition": "Giới từ văn ngôn thường dẫn đối tượng hoặc phương thức thực hiện (như 以, 于, 自), khác vị trí với tiếng Hán hiện đại.",
        "pronoun": "Đại từ chỉ thị và hồi chỉ cổ điển có thể thay cho cả cụm sự việc đứng trước thay vì chỉ một danh từ đơn.",
        "structural_particle": "Trợ từ kết cấu (之, 者, 所) làm thay đổi chức năng danh hóa của động từ hoặc tính từ trong cụm từ.",
    }
    wy30 = []
    for w in p4.get("wenyanSyntaxTokens30", []):
        nw = dict(w)
        wcat = nw.get("category", "conjunction")
        nw["classicalExample"] = nw.get("classicalExampleZh", "")
        nw["modernMandarinEq"] = nw.get("vernacularHskEquivalentZh", "")
        nw["sinoVietReadingRuleVi"] = f"Âm Hán–Việt: {nw.get('hanViet', '')} ({nw.get('pinyin', '')}) — quen thuộc trong điển tích và văn bản hành chính cổ."
        nw["commonExamTrapVi"] = _wy_trap_by_cat.get(wcat, "Phân biệt chức năng hư từ cổ điển với nghĩa thực từ trong Hán ngữ hiện đại.")
        wy30.append(nw)

    _poem_brush_notes = [
        "Nhịp thanh trắc – bằng ({pz}) đi cùng khoảng trắng rộng trên giấy Tuyên gợi không gian tĩnh lặng.",
        "Phân bố mực đậm ở tiền cảnh và mờ dần về hậu cảnh ứng với cấu trúc đối ngẫu ({pz}).",
        "Họa pháp chấm nét gọn gàng tạo điểm tụ ánh nhìn tương phản với khoảng trống mở của bài thơ ({pz}).",
        "Đường nét núi nước đan xen khoảng sương mở nhịp thở chậm cho khổ thơ ({pz}).",
    ]
    _poem_ctx_notes = [
        "Ghi dấu giao thoa mỹ học Thi Trung Hữu Họa qua sáng tác của {poet}.",
        "Thể hiện quan niệm lấy cảnh thiên nhiên gửi gắm tâm thế văn nhân đời {poet}.",
        "Là tư liệu đối chiếu quen thuộc khi đọc thơ Đường – Tống cạnh cuộn tranh thủy mặc của {poet}.",
        "Minh họa cách đề thơ và triện đỏ hòa làm một phần bố cục hội họa quanh {poet}.",
    ]
    used_poem_hashes: set[str] = set()
    poems24 = []
    for idx, p in enumerate(p4.get("poemPaintingPairs24", [])):
        np_item = dict(p)
        ref = np_item.get("paintingRefId", "")
        ref_vi = PAINTING_REF_NAMES_VI.get(ref, "tác phẩm thủy mặc cổ điển")
        pz = np_item.get("pingZePattern", "")
        poet_name = np_item.get("poet", "")
        p_pref = PAINTING_REF_IMAGES.get(ref, "assets/images/paintings/01_luoshenfu_tu.jpg")
        np_item["image"] = UniqueImageAllocator.claim(used_poem_hashes, [p_pref], fallback_buckets=("paintings",), allow_svg=False)
        np_item["title"] = f"{np_item.get('titleVi', '')} ({np_item.get('titleZh', '')})"
        np_item["authorVi"] = poet_name
        np_item["epithetVi"] = np_item.get("hanViet", "")
        np_item["translateVi"] = np_item.get("poemVi", "")
        np_item["pinyin"] = np_item.get("hanViet", "")
        np_item["visualNoteVi"] = f"Đối chiếu bố cục Tam Viễn – Lưu Bạch trên {ref_vi}."
        np_item["pingZeNote"] = pz
        np_item["brushworkAndCompositionVi"] = _poem_brush_notes[idx % len(_poem_brush_notes)].format(pz=pz)
        np_item["historicalContextVi"] = _poem_ctx_notes[idx % len(_poem_ctx_notes)].format(poet=poet_name)
        poems24.append(np_item)

    _hsk_level_notes = {
        "HSK5": "Bám mạch từ nối thời gian và {kw} từ khóa cốt lõi để nắm ý chính toàn đoạn.",
        "HSK6": "Nhận diện câu phức nhiều tầng định ngữ xung quanh {kw} từ khóa chuyên đề trước khi chọn đáp án.",
        "HSK7-9": "Tách rõ tầng lập luận nguyên nhân – phản biện dựa trên {kw} từ vựng học thuật trọng tâm.",
    }
    passages40 = []
    for pa in p4.get("hskPassages40", []):
        npa = dict(pa)
        lvl = npa.get("hskLevel", "HSK5")
        kw_n = len(npa.get("keyWords", []))
        npa["grammarPatternHighlightVi"] = _hsk_level_notes.get(lvl, "Tập trung {kw} từ khóa trọng tâm và mạch liên kết câu.").format(kw=kw_n)
        passages40.append(npa)

    essays15 = []
    for ef in p4.get("hskEssayFrames30_Additional15", []):
        nef = dict(ef)
        blk = nef.get("blocks") or {}
        tp_b = blk.get("topic") or {}
        ev_b = blk.get("evidence") or {}
        ca_b = blk.get("counterArgument") or {}
        sy_b = blk.get("synthesis") or {}
        nef["themeVi"] = nef.get("topicVi", "")
        nef["themeEn"] = nef.get("topicEn", "")
        nef["structureZh"] = nef.get("topicZh", "")
        nef["pinyin"] = "HSK 7–9 · Đề cương Lập luận Học thuật & CSC"
        nef["parallelEn"] = tp_b.get("en", nef.get("topicEn", ""))
        nef["sampleParagraphZh"] = " ".join(x for x in [tp_b.get("zh", ""), ev_b.get("zh", ""), ca_b.get("zh", ""), sy_b.get("zh", "")] if x)
        nef["sampleParagraphEn"] = " ".join(x for x in [tp_b.get("en", ""), ev_b.get("en", ""), ca_b.get("en", ""), sy_b.get("en", "")] if x)
        nef["connectorToolkitZh"] = "诚然……然而……归根结底……由此可见"
        nef["viNote"] = f"{tp_b.get('vi', '')} — Luận cứ: {ev_b.get('vi', '')}"
        nef["commonPitfallVi"] = f"Phản biện & Tổng kết: {ca_b.get('vi', '')} → {sy_b.get('vi', '')}"
        nef["commonPitfallEn"] = f"{ca_b.get('en', '')} → {sy_b.get('en', '')}"
        essays15.append(nef)

    comp15 = []
    for hv in p4.get("hanVietPoetryComparison15", []):
        nhv = dict(hv)
        nhv["tonalAndImageryAnalysisVi"] = "Đối chiếu âm luật bằng trắc và cách chuyển hóa thi liệu (trăng, mai, trúc, thuyền) từ thi ca Đường–Tống sang cảm thức thiên nhiên – nhân sinh Việt Nam."
        nhv["historicalContextVi"] = "Minh chứng dòng chảy văn hiến Đông Á độc lập nhưng cùng chung nền tảng từ vựng văn ngôn cổ điển."
        comp15.append(nhv)

    return {
        "novelGraphs4": novels,
        "wenyanSyntaxTokens30": wy30,
        "wenyanTokens20": wy30,
        "poemPaintingPairs24": poems24,
        "poemPaintingPairs12": poems24,
        "hskPassages40": passages40,
        "hskEssayFrames30_Additional15": essays15,
        "hanVietPoetryComparison15": comp15,
    }


def enrich_pack5(p5: dict) -> dict:
    incoterms = [
        {"code": r[0], "title": r[1], "mode": r[2], "riskStage": r[3], "costStage": r[4], "summaryVi": r[5], "summaryEn": r[6]}
        for r in INCOTERMS_11
    ]

    docs10 = []
    for d in p5.get("annotatedTradeDocs10", []):
        nd = dict(d)
        nd["nameVi"] = nd.get("titleVi", "")
        nd["nameEn"] = nd.get("titleEn", "")
        nd["nameZh"] = nd.get("titleZh", "")
        nd["issuerVi"] = nd.get("issuerRoleVi", "")
        nd["euVietnamChinaWorkflowVi"] = (
            f"Quy trình luân chuyển {nd.get('titleVi', '')}: Phát hành tại {nd.get('issuerRoleVi', 'cơ quan cấp')} → "
            "Kiểm tra đối khớp Invoice/PKL & mã EORI/HS trước Closing Time → Xuất trình ngân hàng L/C hoặc cổng hải quan EU/VN."
        )
        nd["rejectionCaseStudyVi"] = "Lỗi điển hình gây phạt chậm/giữ hàng: Sai biệt chính tả tên cảng, thiếu mã EORI/REX hoặc mâu thuẫn trọng lượng VGM > 5%."
        spots = []
        for sp in nd.get("hotspots", []):
            nsp = dict(sp)
            nsp["fieldEn"] = nsp.get("fieldNameEn", "")
            nsp["fieldZh"] = nsp.get("fieldNameZh", "")
            nsp["fieldVi"] = nsp.get("fieldNameVi", "")
            spots.append(nsp)
        nd["hotspots"] = spots
        docs10.append(nd)

    used_supply_hashes: set[str] = set()
    sc16 = []
    for sc in p5.get("extraSupplyCases16", []):
        nsc = dict(sc)
        lane = nsc.get("lane", "Yantian-Rotterdam Ocean")
        lane_pref = SUPPLY_LANE_IMAGES.get(lane, "assets/images/articles/hero-supply-chain-rcep.jpg")
        nsc["imagePath"] = UniqueImageAllocator.claim(
            used_supply_hashes,
            [lane_pref],
            fallback_buckets=("provinces", "prov_items", "articles", "editorial", "museum"),
            allow_svg=True,
        )
        norm_terms = []
        for kt in nsc.get("keyTermsZhEn", []):
            if isinstance(kt, dict):
                norm_terms.append(kt)
            else:
                parts = str(kt).split("/")
                zh_p = parts[0].strip()
                en_p = parts[1].strip() if len(parts) > 1 else zh_p
                norm_terms.append({"zh": zh_p, "vi": en_p, "en": en_p})
        nsc["keyTermsZhEn"] = norm_terms
        nsc["bilingualReplyTemplate"] = {
            "toFactoryZh": nsc.get("replyFactoryZh", ""),
            "toEuHqEn": nsc.get("replyEuBossEn", ""),
        }
        nsc["stepByStepSOPVi"] = (
            "T+0h: Cô lập lô hàng & trích xuất chứng từ gốc → "
            "T+24h: Họp khẩn forwarder & nhà máy theo Cây Quyết Định → "
            "T+72h: Hoàn tất hồ sơ khắc phục (TRACES/CBAM/Waiver) → "
            "T+7d: Cập nhật điều khoản PO phòng tái diễn."
        )
        nsc["stepByStepSOPEn"] = (
            "T+0h: Quarantine batch & capture baseline records → "
            "T+24h: Escalate corrective workflow with carrier & supplier → "
            "T+72h: Submit verified audit/customs packet → "
            "T+7d: Lock preventive PO SLA addendum."
        )
        nsc["clauseDraftingTemplateEn"] = f"Under {lane} Purchase Agreements, Seller warrants full pre-shipment regulatory, origin, and packaging compliance aligned with EU/ASEAN buyer timelines."
        nsc["clauseDraftingTemplateZh"] = "卖方保证在装运前按欧盟及东盟合规规范提供完整单证；若因单证疏漏产生额外滞港或查验费，由过错方承担相应责任。"
        steps = []
        for dt in nsc.get("decisionTreeSteps", []):
            ndt = dict(dt)
            ndt["stepNum"] = ndt.get("stepOrder", ndt.get("stepNum", 1))
            ndt["yesVi"] = ndt.get("yesBranchVi", ndt.get("yesVi", ""))
            ndt["noVi"] = ndt.get("noBranchVi", ndt.get("noVi", ""))
            steps.append(ndt)
        nsc["decisionTreeSteps"] = steps
        sc16.append(nsc)

    cat_map = {
        "Incoterms": "incoterms",
        "UCP600": "finance_risk",
        "AQL": "finance_risk",
        "Legal": "finance_risk",
        "CBAM": "eu_compliance",
        "EUDR": "eu_compliance",
        "ICS2": "eu_compliance",
        "CE_REACH": "eu_compliance",
        "GACC": "customs_origin",
        "FTA": "customs_origin",
        "Logistics": "ocean_rail",
    }
    _V6_TERM_CAT_TEMPLATES = {
        "Incoterms": ("Điều khoản giao nhận (Hán–Việt: {hv}) phân định mốc chuyển rủi ro và chi phí bốc dỡ giữa xưởng và cảng.", "Governs risk transfer and freight cost checkpoints between supplier factory and destination port."),
        "UCP600": ("Thuật ngữ thanh toán L/C (Hán–Việt: {hv}) kiểm soát rủi ro bất hợp lệ chứng từ ngân hàng.", "UCP 600 banking and documentary compliance term for L/C verification."),
        "AQL": ("Thông số kiểm định ngoại quan (Hán–Việt: {hv}) áp dụng trước khi đóng container xuất xưởng.", "Pre-shipment AQL quality sampling standard used during factory audit inspections."),
        "Legal": ("Điều khoản pháp lý OEM/hợp đồng (Hán–Việt: {hv}) bảo vệ quyền khuôn mẫu, sở hữu trí tuệ và trọng tài.", "Manufacturing contract provision protecting tooling equity, IP, and arbitration venue."),
        "CBAM": ("Chỉ tiêu kê khai phát thải carbon EU CBAM (Hán–Việt: {hv}) bắt buộc thu thập theo lò luyện từ nhà máy.", "EU CBAM carbon emissions reporting metric collected per installation CN code."),
        "EUDR": ("Hồ sơ truy xuất vùng nguyên liệu không phá rừng (Hán–Việt: {hv}) theo quy định EU 2023/1115.", "EU 2023/1115 deforestation-free traceability term requiring GeoJSON plot data."),
        "ICS2": ("Khai báo an ninh trước khi xếp tàu/bay vào EU (Hán–Việt: {hv}), bắt buộc khớp mã HS 6 số.", "EU ICS2 pre-loading security filing terminology requiring accurate 6-digit HS codes."),
        "CE_REACH": ("Quy chuẩn an toàn kỹ thuật và hóa chất Châu Âu (Hán–Việt: {hv}) đi kèm hồ sơ kỹ thuật SKU.", "EU technical safety and chemical compliance term linked to DoC and lab reports."),
        "GACC": ("Nghiệp vụ đăng ký CIFER và kiểm dịch Hải quan TQ (Hán–Việt: {hv}) tại cửa khẩu và cảng biển.", "Chinese customs GACC and CIFER registration terminology for bilateral clearance."),
        "FTA": ("Quy tắc xuất xứ C/O Form E, RCEP và EVFTA (Hán–Việt: {hv}) giúp xác định hưởng ưu đãi thuế quan.", "Preferential tariff and rules-of-origin term spanning ACFTA, RCEP, and EVFTA."),
        "Logistics": ("Thuật ngữ vận hành kho bãi và đường sắt/biển (Hán–Việt: {hv}) dùng hàng ngày với forwarder.", "Daily port, container, and rail-freight operations term shared with carriers."),
    }
    terms150 = []
    for tm in p5.get("b2bTerms150", []):
        nt = dict(tm)
        raw_cat = nt.get("category", "Logistics")
        nt["v6Tag"] = raw_cat
        nt["category"] = cat_map.get(raw_cat, "ocean_rail")
        hv = nt.get("hanViet", "")
        vi_tpl, en_tpl = _V6_TERM_CAT_TEMPLATES.get(raw_cat, _V6_TERM_CAT_TEMPLATES["Logistics"])
        nt["contextVi"] = vi_tpl.format(hv=hv)
        nt["contextEn"] = en_tpl
        terms150.append(nt)

    _wonder_guides = [
        "Quan sát cấu trúc vì kèo, tỷ lệ mái và vật liệu gỗ/đá bản địa tại công trình.",
        "Đối chiếu hoa văn trang trí, minh văn bia đá hoặc kỹ nghệ men gốm giữa hai nền văn hiến.",
        "Ghi chú sự thích ứng khí hậu địa phương qua cách bố trí sân, hiên và hướng gió.",
    ]
    used_wonder_hashes: set[str] = set()
    wonders10 = []
    for idx, w in enumerate(p5.get("sinoVietWonders10", [])):
        nw = dict(w)
        wid = nw.get("id", "svw-01")
        vn_img, cn_img = WONDER_IMAGE_PAIRS.get(wid, ("assets/images/articles/hero-sino-vietnam.jpg", "assets/images/academic/ming-forbidden-city.jpg"))
        nw["vnImg"] = UniqueImageAllocator.claim(used_wonder_hashes, [vn_img], fallback_buckets=("academic", "museum", "articles", "prov_items"), allow_svg=True)
        nw["chinaImg"] = UniqueImageAllocator.claim(used_wonder_hashes, [cn_img], fallback_buckets=("provinces", "museum", "academic", "prov_items"), allow_svg=False)
        nw["pairTitle"] = f"{nw.get('vietnamWonder', '')} <-> {nw.get('chinaWonder', '')}"
        nw["summaryVi"] = f"{nw.get('sharedHeritageVi', '')} · Nét riêng Việt Nam: {nw.get('distinctAdaptationVi', '')}"
        nw["historicalTimelineCompareVi"] = f"Đặt {nw.get('vietnamWonder', '')} song hành với {nw.get('chinaWonder', '')} trong dòng chảy giao lưu văn hóa Đông Á."
        nw["architecturalOrCraftAnatomyVi"] = nw.get("distinctAdaptationVi", "")
        nw["fieldVisitGuideVi"] = _wonder_guides[idx % len(_wonder_guides)]
        wonders10.append(nw)

    used_csc_hashes: set[str] = set()
    unis24 = []
    for idx, u in enumerate(p5.get("cscUniversities24Atlas", [])):
        nu = dict(u)
        prov_id = nu.get("provinceId", "prov-beijing")
        prov_vi, _ = PROVINCE_LABELS.get(prov_id, ("Trung Quốc", "China"))
        ag = nu.get("agencyNumber", "")
        st = nu.get("strengthsVi", "")
        st_low = st.lower()
        nu["agencyNo"] = ag
        nu["majorsVi"] = st
        nu["cityVi"] = prov_vi
        csc_prefs = [PROVINCE_IMAGES.get(prov_id, "")] + UniqueImageAllocator.prov_item_candidates(prov_id, ("h", "d", "f")) + ["assets/images/articles/hero-academy-shuyuan.jpg"]
        nu["imagePath"] = UniqueImageAllocator.claim(used_csc_hashes, csc_prefs, fallback_buckets=("prov_items", "provinces", "academic", "articles"), allow_svg=False)
        if "bắc kinh" in prov_vi.lower():
            nu["cscTypeA_vs_TypeB_NoteVi"] = f"Mã trường {ag} tại {prov_vi}: nộp trực tiếp qua cổng CSC Type B của trường trước hạn sơ tuyển tháng 2–3."
        elif "thượng hải" in prov_vi.lower():
            nu["cscTypeA_vs_TypeB_NoteVi"] = f"Mã trường {ag}: kết hợp CSC Type B và học bổng Chính quyền TP {prov_vi} (SGS) tăng tỷ lệ trúng tuyển."
        else:
            nu["cscTypeA_vs_TypeB_NoteVi"] = f"Mã trường {ag} ({prov_vi}): theo dõi cả suất CSC Type B và học bổng tỉnh/trường đầu xuân."
        if any(k in st_low for k in ("kỹ thuật", "ai", "hàng hải", "cơ khí", "bán dẫn")):
            nu["vietnamAlumniCareerTrackVi"] = f"Hướng nghề sau tốt nghiệp tại {prov_vi}/VN: kỹ sư R&D, tự động hóa nhà máy và chuyển giao công nghệ."
            nu["recommendedHskAndIeltsVi"] = "Hệ Tiếng Anh chuộng IELTS 6.5+ kèm đề cương nghiên cứu định lượng; hệ Tiếng Trung cần HSK 5 (>=195 điểm)."
        elif any(k in st_low for k in ("thương mại", "luật", "tài chính", "kinh tế", "logistics")):
            nu["vietnamAlumniCareerTrackVi"] = f"Hướng nghề sau tốt nghiệp: điều phối chuỗi cung ứng Á–Âu, pháp lý hải quan, tài chính thương mại."
            nu["recommendedHskAndIeltsVi"] = "HSK 5–6 (>=210 điểm) cho chương trình Tiếng Trung hoặc IELTS 6.5–7.0 cho chương trình song ngữ."
        else:
            nu["vietnamAlumniCareerTrackVi"] = f"Hướng nghề sau tốt nghiệp: giảng dạy, nghiên cứu Hán học – văn hóa, biên phiên dịch và hợp tác song phương."
            nu["recommendedHskAndIeltsVi"] = "Ưu tiên HSK 5–6 kèm bài viết luận nghiên cứu học thuật rõ ràng bằng tiếng Trung hoặc tiếng Anh."
        unis24.append(nu)

    CSC_INTERVIEW_EN_OUTLINES: dict[str, str] = {
        "ciq-01": "Use a crisp three-part arc: university major and GPA/research metrics -> quantitative or multilingual strengths -> why this department and advisor.",
        "ciq-02": "Link China–Vietnam supply chain dynamics directly to the institute's empirical focus and your prospective supervisor's recent work.",
        "ciq-03": "Move sequentially from Research Gap -> Primary Research Question -> Concrete Policy or Trade Relevance for ASEAN–China–EU corridors.",
        "ciq-04": "Specify exact estimators (e.g., Structural Gravity PPML, Panel FEM/REM, DID, or SEM), datasets (UN Comtrade, GACC), and tools (Stata/Python).",
        "ciq-05": "Verify dataset availability upfront using open empirical panels (UN Comtrade, WITS, World Bank, bilateral customs statistics).",
        "ciq-06": "Acknowledge one honest econometric limitation (endogeneity or reporting lag) alongside a clear robustness fix (IV or PPML controls).",
        "ciq-07": "Cite two exact papers by your target supervisor, explain their methodological contribution, and outline how you extend them to ASEAN/Vietnam data.",
        "ciq-08": "Structure via STAR: Problem Context -> Analytical Method -> Quantitative Finding -> Key Academic Takeaway.",
        "ciq-09": "Combine verified HSK/IELTS proficiency with a disciplined daily habit of scanning CNKI and SSCI journal articles.",
        "ciq-10": "Outline Year 1 (core coursework and literature synthesis) flowing cleanly into Year 2 (empirical estimation, paper submission, and thesis defense).",
        "ciq-11": "Commit to zero plagiarism or fabricated observations; restrict AI tools strictly to language polishing while retaining full intellectual authorship.",
        "ciq-12": "Connect graduate training in cross-border supply chains or trade economics to practical industry or policy research roles post-graduation.",
        "ciq-13": "Analyze regional complementarities (Chinese intermediate inputs -> Vietnamese final assembly -> EU/US consumer markets) rather than zero-sum displacement.",
        "ciq-14": "Weigh tariff and digital trade liberalization against stricter rules of origin (CTH/RVC/fabric-forward), EU CBAM, and EUDR compliance.",
        "ciq-15": "Cite a concrete team disagreement resolved through active listening, shared quantitative metrics, and clear task reallocation.",
        "ciq-16": "Point to practical cultural readiness, familiarity with daily apps (Alipay/WeChat), self-study discipline, and openness to campus integration.",
        "ciq-17": "Never adjust observations to force significance; audit specification and omitted variables first, then interpret genuine economic mechanisms honestly.",
        "ciq-18": "Identify one realistic flaw (such as over-editing early literature drafts) paired with concrete time-boxing steps already producing improvement.",
        "ciq-19": "Share a grounded contingency path: provincial/university scholarships, relevant analyst experience, and a stronger follow-up application.",
        "ciq-20": "Detail applied proficiency across Python, Stata, R, Power BI, SPSS/SmartPLS, and structured Excel modeling using actual project outputs.",
        "ciq-21": "Allocate brief context to the setback itself and most of your answer to root-cause diagnosis, verification habits, and measurable recovery.",
        "ciq-22": "Contrast near-term Scope 1–2 compliance costs for steel/aluminum exporters with long-term incentives toward greener electric-arc production.",
        "ciq-23": "Answer candidly about your academic trajectory: remain open to doctoral progression if your Master's empirical work yields strong publishable findings.",
        "ciq-24": "Prepare two focused questions about the department's current research clusters, field-work access, or academic seminar opportunities.",
    }
    _interview_pitfalls = [
        "Tránh trả lời chung chung bằng lời hứa suông; hãy nêu số liệu, tên môn học hoặc tên công trình của giảng viên.",
        "Không học thuộc lòng đoạn văn mẫu dễ lộ khi hội đồng hỏi vặn sâu vào chi tiết phương pháp.",
        "Tránh chỉ kể khó khăn cá nhân; luôn dành trọng tâm cho giải pháp kỹ thuật và bài học rút ra.",
        "Giữ tốc độ nói vừa phải, tách rõ 2–3 luận điểm thay vì liệt kê dài dòng không có kết cấu.",
    ]
    ints24 = []
    for idx, q in enumerate(p5.get("cscInterviewQuestions24", [])):
        nq = dict(q)
        qid = nq.get("id", "")
        nq["zh"] = nq.get("qZh", "")
        nq["vi"] = nq.get("qVi", "")
        nq["guideVi"] = nq.get("outlineVi", "")
        nq["modelAnswerZh"] = (
            f"各位老师好，关于“{nq.get('qZh', '')}”，我将结合专业基础、数据分析能力以及中越经贸研究视角展开说明。"
        )
        en_outline = CSC_INTERVIEW_EN_OUTLINES.get(qid, "Present a structured empirical response linking academic background, quantitative rigor, and bilateral relevance.")
        nq["modelAnswerEn"] = f"{nq.get('qEn', '')} — {en_outline}"
        nq["commonPitfallToAvoidVi"] = _interview_pitfalls[idx % len(_interview_pitfalls)]
        ints24.append(nq)

    gantt12 = [{"id": g[0], "month": g[1], "milestone": g[2], "detailVi": g[3]} for g in CSC_GANTT_12]
    hsr8 = [{"from": h[0], "to": h[1], "lineName": h[2], "duration": h[3], "highlight": h[4]} for h in HSR_CORRIDORS_8X8]

    return {
        "incoterms2020_11": incoterms,
        "annotatedTradeDocs10": docs10,
        "extraSupplyCases16": sc16,
        "b2bTerms150": terms150,
        "aqlAndContainerMatrices": p5.get("aqlAndContainerMatrices", {}),
        "sinoVietWonders10": wonders10,
        "sinoVietWonders10_Ref": wonders10,
        "cscUniversities24Atlas": unis24,
        "cscUniversities24": unis24,
        "cscGantt12Months": gantt12,
        "cscInterviewQuestions24": ints24,
        "cscInterview24": ints24,
        "hsrCorridors8x8": hsr8,
    }


def enrich_pack6(q_raw: list[dict]) -> list[dict]:
    used_quiz_hashes: set[str] = set()
    out = []
    for q in q_raw:
        nq = dict(q)
        if nq.get("isVisualQuestion"):
            tag = nq.get("visualSubjectTag", "")
            pref = VISUAL_QUIZ_TAG_MAP.get(tag, FALLBACK_RASTER)
            nq["imagePath"] = UniqueImageAllocator.claim(
                used_quiz_hashes,
                [pref],
                fallback_buckets=("paintings", "museum", "provinces", "prov_items", "articles", "academic"),
                allow_svg=True,
            )
            nq["visualInspectionGuideVi"] = nq.get("explainVi") or f"Quan sát dấu hiệu đặc trưng của {nq.get('topicVi', '')}."
            nq["visualInspectionGuideEn"] = nq.get("explainEn") or f"Inspect visual traits of {nq.get('topicEn', '')}."
        out.append(nq)
    return out


def build_all_from_external_packs(pack_dir: pathlib.Path) -> dict:
    v5_brand_keys: set[str] = set()
    for fp in ["src/data/v5/laozihaoBrandsV5.js", "src/data/v5/laozihaoBrandsExpandedV5.js"]:
        txt = (ROOT / fp).read_text(encoding="utf-8")
        brand_part = txt.split("giAppellations12")[0]
        for m in re.finditer(r'zh:\s*"([^"]+)"', brand_part):
            v5_brand_keys.add(core_zh_key(m.group(1)))

    _, p1_raw = parse_external_pack_js(pack_dir / "V6_Pack1_HonoredBrands100_CraftDiagrams.js")
    _, p2_raw = parse_external_pack_js(pack_dir / "V6_Pack2_Liushu300_FalseFriends30.js")
    _, p3_raw = parse_external_pack_js(pack_dir / "V6_Pack3_Wuxing60Herbs_SolarArchitecture.js")
    _, p4_raw = parse_external_pack_js(pack_dir / "V6_Pack4_LiteratureVisualMaps_HSK40.js")
    _, p5_raw = parse_external_pack_js(pack_dir / "V6_Pack5_TradeDocs10_Incoterms_CBAM40.js")
    _, p6_raw = parse_external_pack_js(pack_dir / "V6_Pack6_VisualQuizArena_192.js")

    bundles = {
        "CCE_V6_BRANDS_CRAFT": enrich_pack1(p1_raw, v5_brand_keys),
        "CCE_V6_LIUSHU_VISUAL": enrich_pack2(p2_raw),
        "CCE_V6_COSMOLOGY_VISUAL": enrich_pack3(p3_raw),
        "CCE_V6_LITERATURE_VISUAL": enrich_pack4(p4_raw),
        "CCE_V6_TRADE_AND_CSC": enrich_pack5(p5_raw),
        "CCE_V6_QUIZ": enrich_pack6(p6_raw),
    }
    return sanitize_text_recursive(bundles)
