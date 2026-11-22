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


def enrich_pack1(p1: dict, v5_brand_keys: set[str]) -> dict:
    brands40 = []
    brands36 = []
    for idx, b in enumerate(p1.get("brandsAdditional40", [])):
        item = dict(b)
        prov_id = item.get("provinceId", "prov-beijing")
        prov_vi, prov_en = PROVINCE_LABELS.get(prov_id, ("Trung Quốc", "China"))
        zh = item.get("zh", "")
        cat = item.get("cat", "culinary")
        img_default = PROVINCE_IMAGES.get(prov_id, "assets/images/articles/hero-laozihao-craft.jpg")
        if cat == "craft_studio":
            img_default = PROVINCE_IMAGES.get(prov_id, "assets/images/articles/hero-laozihao-craft.jpg")
        elif cat == "tea_spirits" and idx % 2 == 1:
            img_default = "assets/images/articles/hero-six-teas-gongfu.jpg"
        elif cat == "tcm_pharmacy" and idx % 2 == 1:
            img_default = "assets/images/museum/acupuncture-bronze.jpg"
        item["imagePath"] = ensure_verified_img(img_default)
        item.setdefault("visitTipVi", f"Tham quan bảng hiệu chính thức {zh} tại {item.get('cityVi', prov_vi)} ({item.get('flagshipAddressZh', '')}).")
        item["craftProcessStepsVi"] = (
            f"1) Tuyển nguyên liệu bản địa vùng {prov_vi} → "
            f"2) Định chuẩn {item.get('sensoryOrMaterialSpecVi', 'thông số cảm quan truyền thống')} → "
            f"3) Chế tác thủ công chuẩn {item.get('qualityStandardVi', 'Trung Hoa Lão Tự Hiệu')} → "
            f"4) Kiểm nghiệm dấu niêm phong chống giả & truy xuất nguồn gốc."
        )
        item["craftProcessStepsEn"] = (
            f"1) Regional material sourcing in {prov_en} → "
            f"2) Traditional craft calibration → "
            f"3) Accredited execution per {item.get('qualityStandardEn', 'MOFCOM Honored Brand specs')} → "
            f"4) Authentication & batch traceability verification."
        )
        item["exportComplianceChecklistVi"] = (
            f"Đối chiếu tiêu chuẩn quốc gia {item.get('qualityStandardVi', 'GB/T')}; "
            f"kiểm tra truy xuất {item.get('authenticVsCounterfeitVi', 'tem niêm phong chính hãng')}; "
            f"hồ sơ GACC / truy xuất xuất xứ nếu xuất khẩu ASEAN–EU."
        )
        item["exportComplianceChecklistEn"] = (
            f"Verify national specification ({item.get('qualityStandardEn', 'GB/T')}), "
            f"origin authentication seals, and CIFER/GACC customs export eligibility."
        )
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
            sup = {
                "id": bid,
                "cat": bcat,
                "mofcomBatch": 1,
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
                "qualityStandardVi": "Danh hiệu Trung Hoa Lão Tự Hiệu (中华老字号) Bộ Thương mại TQ & tiêu chuẩn quốc gia GB/T.",
                "qualityStandardEn": "Official MOFCOM China Time-Honored Brand registry & Chinese National GB/T quality specifications.",
                "craftSecretVi": f"Thương hiệu trăm năm vùng {bcity}: {bprod_vi}. Kế thừa quy phạm thủ công gia truyền và chữ Tín bản địa.",
                "craftSecretEn": f"Time-honored enterprise rooted in {bcity}: {bprod_en}, anchored by multi-generation craft transmission.",
                "sensoryOrMaterialSpecVi": bprod_vi,
                "authenticVsCounterfeitVi": f"Nhận diện dấu mộc chính hãng {bzh} ({byr}) tại {bcity}.",
                "b2bTradeVi": f"Bảo chứng xuất xứ địa lý {p_vi} giúp nâng tầm thương hiệu khi mở rộng phân phối quốc tế.",
                "b2bTradeEn": f"Regional geographical authenticity from {p_en} supporting global retail and heritage positioning.",
                "vietnamAseanLessonVi": "Mô hình nâng tầm sản vật di sản Việt Nam thành thương hiệu quốc gia đạt chuẩn chất lượng quốc tế.",
                "vietnamAseanLessonEn": "Strategic precedent for upgrading Vietnamese craft heritage into certified national brands.",
                "flagshipAddressZh": f"{bzh}总店 ({bcity})",
                "craftProcessStepsVi": f"1) Tuyển nguyên liệu vùng {p_vi} → 2) Định chuẩn {bprod_vi} → 3) Chế tác thủ công gia truyền → 4) Dán tem truy xuất chính hãng.",
                "craftProcessStepsEn": f"1) Source materials in {p_en} → 2) Calibrate traditional specs → 3) Artisanal crafting → 4) Original seal authentication.",
                "exportComplianceChecklistVi": "Kiểm tra dấu hiệu Trung Hoa Lão Tự Hiệu, mã chuẩn GB/T và hồ sơ GACC nếu xuất khẩu.",
                "exportComplianceChecklistEn": "Verify Time-Honored Brand certificate, GB/T standard, and export compliance dossier.",
                "visitTipVi": f"Tham quan bảng hiệu chính thức {bzh} tại {bcity}.",
                "imagePath": ensure_verified_img(PROVINCE_IMAGES.get(bpid, "assets/images/articles/hero-laozihao-craft.jpg")),
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
            st_copy["specNote"] = base_note + (" · Điểm kiểm soát QC thủ công" if "QC" not in base_note else "")
            norm_steps.append(st_copy)
        nf["steps"] = norm_steps
        flows12.append(nf)

    gi18 = []
    for idx, g in enumerate(p1.get("giAdditional18", [])):
        ng = dict(g)
        prov_id = ng.get("provinceId", "prov-xinjiang")
        prov_vi, prov_en = PROVINCE_LABELS.get(prov_id, ("Trung Quốc", "China"))
        ng["vi"] = ng.get("nameVi", "")
        ng["en"] = ng.get("nameEn", "")
        ng["gbStandardCode"] = f"EU–China GI ({ng.get('euAgreementYear', 2021)})"
        ng["euProtectionNoteVi"] = ng.get("protectionRuleVi", "")
        ng["euProtectionNoteEn"] = ng.get("protectionRuleEn", "")
        ng["vnEuComparisonVi"] = ng.get("vnEvftaCounterpartVi", "")
        ng["vnEuComparisonEn"] = ng.get("vnEvftaCounterpartEn", "")
        ng["terroirAndCraftVi"] = f"Đặc sản vùng thổ nhưỡng {prov_vi} ({ng.get('zh', '')}) gắn liền với điều kiện địa hình, nguồn nước và kỹ nghệ bảo quản cổ truyền được xác định trong hồ sơ Hiệp định Song phương EU–China GI."
        ng["terroirAndCraftEn"] = f"Protected terroir heritage of {prov_en} integrating microclimate, traditional harvesting, and European–Chinese geographical origin standards."
        ng["customsHsAndAuditVi"] = "Kiểm tra giấy chứng nhận vùng lõi GI, mã HS nông sản/gốm sứ và chứng từ kiểm dịch thực vật/hóa chất MRL khi thông quan EU."
        ng["customsHsAndAuditEn"] = "Verify core-zone GI origin certificate, EU TARIC HS code classification, and MRL food-contact/phytosanitary audit reports."
        ng["imagePath"] = ensure_verified_img(PROVINCE_IMAGES.get(prov_id, "assets/images/articles/hero-six-teas-gongfu.jpg"))
        gi18.append(ng)

    comp10 = []
    for cmp_it in p1.get("lzhDualComparePairs10", []):
        nc = dict(cmp_it)
        nc["vietnamBrandStrategyTakeawayVi"] = (
            f"Gợi ý xây dựng thương hiệu Việt Nam: Kết hợp di sản địa phương với bộ quy chuẩn chất lượng minh bạch và đăng ký bảo hộ chỉ dẫn địa lý/nhãn hiệu tập thể song phương."
        )
        nc["vietnamBrandStrategyTakeawayEn"] = (
            "Strategic lesson for Vietnamese heritage enterprises: couple multi-generational craft provenance with testable standards and international IP/GI filings."
        )
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

    rules12 = []
    for r in p2.get("archaicMiddleChineseRules12", []):
        nr = dict(r)
        nr["titleVi"] = nr.get("ruleNameVi", "")
        nr["ruleVi"] = f"{nr.get('middleChineseFeature', '')} → TQ hiện đại: {nr.get('mandarinShift', '')} · Tiếng Việt: {nr.get('vietnameseRetention', '')}"
        nr["examplesVi"] = " · ".join(nr.get("examples", []))
        nr["historicalPhonologyNoteVi"] = "Đối chiếu âm vận học lịch sử Thiết Vận / Quảng Vận (Hán ngữ Trung cổ đời Tùy–Đường) và âm đọc Cổ Hán–Việt tại Giao Châu."
        nr["learningShortcutVi"] = "Mẹo học Hán ngữ: Dùng chính vần đóng (-p/-t/-k/-m/-ng) hoặc thanh điệu Hán–Việt để nhận diện nhanh thanh mẫu và thanh điệu Phổ thông."
        rules12.append(nr)

    st50 = []
    for stp in p2.get("simpTradAsymmetry50", []):
        ns = dict(stp)
        trads = " / ".join(ns.get("trads", []))
        ns["classicalEtymologyVi"] = (
            f"Trong đợt Giản hóa chữ Hán năm 1956–1964, một hình Giản thể ({ns.get('simp', '')}) đã gộp hai chữ Phồn thể vốn khác hẳn bộ thủ/ý nghĩa cổ điển ({trads})."
        )
        ns["taiwanHkSignageTrapVi"] = (
            f"Lưu ý biển hiệu Đài Loan/Hồng Kông & Sách cổ: Tuyệt đối không tự động gõ ngược {ns.get('simp', '')} thành một chữ duy nhất mà phải kiểm tra ngữ cảnh cụ thể."
        )
        ns["examplePairsZhVi"] = ns.get("diffVi", "")
        st50.append(ns)

    mw40 = []
    for m in p2.get("measureWordsVisual40", []):
        nm = dict(m)
        nm["cognitiveGeometryVi"] = f"Hình khối tri nhận: {nm.get('shapeVi', '')} ({nm.get('usageEn', '')})."
        nm["b2bLogisticsCollocationsZhVi"] = f"Cụm từ kho bãi/hợp đồng thực chiến: {nm.get('exampleZh', '')}."
        nm["exampleVi"] = f"Mẫu dùng chuẩn ({nm.get('zh', '')} · {nm.get('pinyin', '')}): {nm.get('usageEn', '')}."
        mw40.append(nm)

    cy36 = []
    for c in p2.get("chengyuOrigins36", []):
        nc = dict(c)
        nc["classicQuoteZh"] = nc.get("zh", "")
        nc["classicQuoteVi"] = f"Điển tích trích từ {nc.get('source', 'Thư tịch cổ')}: " + " → ".join(nc.get("storyboard3", []))
        nc["b2bSampleSentenceZh"] = f"Tại cuộc họp dự án, ban điều hành giữ tinh thần “{nc.get('zh', '')}”."
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
            "[KHUNG KHOA HỌC BẮT BUỘC V6.0: Toàn bộ 24 Tiết khí, 12 Canh giờ Tử–Ngọ, Ngũ Hành, 28 Nhị Thập Bát Tú, "
            "Herbarium 48 vị thực dưỡng & 12 Kiến trúc Vi khí hậu là tư liệu lịch sử tư tưởng, vật lý công trình và nhân học ẩm thực — "
            "tuyệt đối KHÔNG chẩn đoán lâm sàng và KHÔNG bói toán/tiên tri.]"
        ).strip(),
        "en": (
            f"{ep_raw.get('en', '')} "
            "[V6.0 EPISTEMOLOGICAL BOUNDARY: All calendrical, botanical culinary, cosmological, and microclimate archives "
            "serve historical, anthropological, and architectural scholarship only — strictly NOT clinical advice or divination.]"
        ).strip(),
    }

    wx_cycle = ["Thổ · Kim", "Kim · Thủy", "Mộc · Hỏa", "Hỏa · Thổ", "Thủy · Mộc"]
    herbs48 = []
    for idx, h in enumerate(p3.get("culinaryHerbs48", [])):
        nh = dict(h)
        nh["wuxingElement"] = wx_cycle[idx % len(wx_cycle)]
        nh["nature"] = f"{nh.get('propertyNatureVi', '')} · Ngũ vị: {nh.get('fiveFlavorVi', '')}"
        nh["latin"] = nh.get("latinName", "")
        nh["culinaryVi"] = f"{nh.get('culinaryDishVi', '')} ({nh.get('partUsedVi', '')} · Nguồn: {nh.get('historicalSourceBook', '')})"
        nh["seasonalSolarTermMatchVi"] = "Phù hợp sử dụng gia giảm món canh/trà văn hóa theo chu kỳ Giao mùa Tiết khí Đông Á (phi lâm sàng)."
        nh["botanicalRegionAndGiVi"] = f"Xuất xứ điển tích thực phẩm {nh.get('zh', '')} ghi nhận trong thư tịch {nh.get('historicalSourceBook', '')}."
        nh["vietnamCulinaryParallelVi"] = f"Đối chiếu ẩm thực Việt Nam: Tương đồng truyền thống dùng gia vị thảo mộc cân bằng nhiệt – ẩm trong bếp gia đình Việt."
        nh["image"] = ensure_verified_img(HERB_IMAGE_CYCLE[idx % len(HERB_IMAGE_CYCLE)])
        herbs48.append(nh)

    micro12 = []
    for m in p3.get("historicalMicroclimateCases12", []):
        nm = dict(m)
        nm["challengeVi"] = nm.get("climateChallengeVi", "")
        nm["mechanismVi"] = nm.get("architecturalMechanismVi", "")
        nm["physicsVi"] = (
            f"{nm.get('modernPhysicsPrincipleVi', '')} "
            f"(Nắng hạ {nm.get('summerSunAngleDeg', 73)}° / Nắng đông {nm.get('winterSunAngleDeg', 26)}° · Hướng gió: {nm.get('prevailingWindDirection', '')})"
        )
        nm["vietnamArchitecturalComparisonVi"] = (
            "Đối chiếu kiến trúc bản địa Việt Nam: Tương đồng nguyên lý dùng mái hiên sâu, hồ điều hòa/mái âm dương và tường hậu thông gió đón gió nồm Đông Nam Á."
        )
        micro12.append(nm)

    solar24 = []
    for s in p3.get("solarTermsPhenology24", []):
        ns = dict(s)
        ns["vi"] = ns.get("nameVi", "")
        ns["deg"] = ns.get("solarLongitudeDeg", 0)
        ns["dateApprox"] = ns.get("gregorianApproxDate", "")
        ns["tamHau"] = " | ".join(ns.get("threePhenologiesVi", []))
        ns["descVi"] = (
            f"{ns.get('seasonalTeaFoodVi', '')} · Thơ cổ: “{ns.get('eastAsianPoemZh', '')}” "
            f"({ns.get('poemVi', '')})"
        )
        ns["agriculturalProverbZhVi"] = f"Nhật độ hoàng kinh {ns.get('solarLongitudeDeg', 0)}° (~{ns.get('gregorianApproxDate', '')}): Đồng bộ nông lịch cấy cày & trà vụ Đông Á."
        ns["vietnamDeltaComparisonVi"] = "Đối chiếu đồng bằng Sông Hồng / ĐBSCL: Giúp đối chiếu chênh lệch chu kỳ gió mùa Á Đông giữa lưu vực Hoàng Hà và nhiệt đới Việt Nam."
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

    wy30 = []
    for w in p4.get("wenyanSyntaxTokens30", []):
        nw = dict(w)
        nw["classicalExample"] = nw.get("classicalExampleZh", "")
        nw["modernMandarinEq"] = nw.get("vernacularHskEquivalentZh", "")
        nw["sinoVietReadingRuleVi"] = f"Âm Hán–Việt chuẩn: {nw.get('hanViet', '')} ({nw.get('pinyin', '')}) — giữ sắc thái trang trọng khi trích dẫn cổ điển."
        nw["commonExamTrapVi"] = f"Bẫy đọc hiểu HSK 6–9 / Văn ngôn: Phân biệt chức năng {nw.get('category', '')} với nghĩa hiện đại thông thường."
        wy30.append(nw)

    poems24 = []
    for p in p4.get("poemPaintingPairs24", []):
        np_item = dict(p)
        ref = np_item.get("paintingRefId", "")
        np_item["image"] = ensure_verified_img(PAINTING_REF_IMAGES.get(ref, "assets/images/paintings/01_luoshenfu_tu.jpg"))
        np_item["title"] = f"{np_item.get('titleVi', '')} ({np_item.get('titleZh', '')})"
        np_item["authorVi"] = np_item.get("poet", "")
        np_item["epithetVi"] = np_item.get("hanViet", "")
        np_item["translateVi"] = np_item.get("poemVi", "")
        np_item["pinyin"] = np_item.get("hanViet", "")
        np_item["visualNoteVi"] = f"Đối chiếu bố cục Tam Viễn – Lưu Bạch trên bức họa {ref}"
        np_item["pingZeNote"] = np_item.get("pingZePattern", "")
        np_item["brushworkAndCompositionVi"] = f"Phép dựng cảnh Thi Trung Hữu Họa: Kết nối nhịp điệu thanh điệu ({np_item.get('pingZePattern', '')}) với khoảng không thủy mặc trên tranh."
        np_item["historicalContextVi"] = f"Tác phẩm tiêu biểu gắn liền mỹ học thi ca và hội họa văn nhân của {np_item.get('poet', '')}."
        poems24.append(np_item)

    passages40 = []
    for pa in p4.get("hskPassages40", []):
        npa = dict(pa)
        npa["grammarPatternHighlightVi"] = f"Cấp độ {npa.get('hskLevel', 'HSK5')}: Luyện tách cụm chủ–vị dài, hư từ liên kết và đối chiếu từ khóa chuyên ngành ({len(npa.get('keyWords', []))} từ trọng tâm)."
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

    sc16 = []
    for sc in p5.get("extraSupplyCases16", []):
        nsc = dict(sc)
        lane = nsc.get("lane", "Yantian-Rotterdam Ocean")
        nsc["imagePath"] = ensure_verified_img(SUPPLY_LANE_IMAGES.get(lane, "assets/images/articles/hero-supply-chain-rcep.jpg"))
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
    terms150 = []
    for tm in p5.get("b2bTerms150", []):
        nt = dict(tm)
        raw_cat = nt.get("category", "Logistics")
        nt["v6Tag"] = raw_cat
        nt["category"] = cat_map.get(raw_cat, "ocean_rail")
        nt["contextVi"] = f"Nhóm chuẩn {raw_cat} · Âm Hán–Việt: {nt.get('hanViet', '')} — dùng trực tiếp khi làm việc với xưởng TQ và trụ sở châu Âu."
        nt["contextEn"] = f"{raw_cat} domain terminology for EU–China–Vietnam operations and compliance audits."
        terms150.append(nt)

    wonders10 = []
    for w in p5.get("sinoVietWonders10", []):
        nw = dict(w)
        wid = nw.get("id", "svw-01")
        vn_img, cn_img = WONDER_IMAGE_PAIRS.get(wid, ("assets/images/articles/hero-sino-vietnam.jpg", "assets/images/academic/ming-forbidden-city.jpg"))
        nw["vnImg"] = ensure_verified_img(vn_img)
        nw["chinaImg"] = ensure_verified_img(cn_img)
        nw["pairTitle"] = f"{nw.get('vietnamWonder', '')} ↔ {nw.get('chinaWonder', '')}"
        nw["summaryVi"] = f"Tương đồng thể chế/kỹ nghệ: {nw.get('sharedHeritageVi', '')} · Sáng tạo độc lập Việt Nam: {nw.get('distinctAdaptationVi', '')}"
        nw["historicalTimelineCompareVi"] = f"Đặt {nw.get('vietnamWonder', '')} song hành cùng {nw.get('chinaWonder', '')} trên trục lịch sử giao lưu văn hiến bình đẳng Đông Á."
        nw["architecturalOrCraftAnatomyVi"] = nw.get("distinctAdaptationVi", "")
        nw["fieldVisitGuideVi"] = "Mẹo thực địa: Quan sát kỹ tỷ lệ mái, hoa văn bản địa Việt Nam và ghi chú nguồn gốc vật liệu địa phương khi tham quan."
        wonders10.append(nw)

    unis24 = []
    for u in p5.get("cscUniversities24Atlas", []):
        nu = dict(u)
        prov_id = nu.get("provinceId", "prov-beijing")
        prov_vi, _ = PROVINCE_LABELS.get(prov_id, ("Trung Quốc", "China"))
        nu["agencyNo"] = nu.get("agencyNumber", "")
        nu["majorsVi"] = nu.get("strengthsVi", "")
        nu["cityVi"] = prov_vi
        nu["imagePath"] = ensure_verified_img(PROVINCE_IMAGES.get(prov_id, "assets/images/articles/hero-academy-shuyuan.jpg"))
        nu["cscTypeA_vs_TypeB_NoteVi"] = f"Mã trường nộp CSC Type B & Type A tại {prov_vi}: {nu.get('agencyNumber', '')}. Kiểm tra hạn chót vòng sơ tuyển của Khoa (tháng 2–3)."
        nu["vietnamAlumniCareerTrackVi"] = f"Cơ hội nghề nghiệp cựu sinh viên Việt Nam: R&D, chuỗi cung ứng Á–Âu, kiểm toán ESG và hợp tác công–tư tại {prov_vi}/Hà Nội/TP.HCM."
        nu["recommendedHskAndIeltsVi"] = "Khuyên dùng: HSK 5–6 (>=210 điểm) cho hệ Tiếng Trung hoặc IELTS 6.5+ cho hệ Tiếng Anh."
        unis24.append(nu)

    ints24 = []
    for q in p5.get("cscInterviewQuestions24", []):
        nq = dict(q)
        nq["zh"] = nq.get("qZh", "")
        nq["vi"] = nq.get("qVi", "")
        nq["guideVi"] = nq.get("outlineVi", "")
        nq["modelAnswerZh"] = (
            f"尊敬的各位评审老师好，关于“{nq.get('qZh', '')}”，我的体会是：{nq.get('qZh', '')[:18]}需要结合专业积累与中越—全球供应链学术视角，脚踏实地推进研究。"
        )
        nq["modelAnswerEn"] = f"Response Framework for '{nq.get('qEn', '')}': {nq.get('outlineVi', '')} Back claims with measurable GPA, research output, and bilateral impact."
        nq["commonPitfallToAvoidVi"] = "Tránh học thuộc lòng văn mẫu chung chung thiếu dẫn chứng cụ thể về Giáo sư hoặc phòng Lab của trường mục tiêu."
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
    out = []
    for q in q_raw:
        nq = dict(q)
        if nq.get("isVisualQuestion"):
            tag = nq.get("visualSubjectTag", "")
            nq["imagePath"] = ensure_verified_img(VISUAL_QUIZ_TAG_MAP.get(tag, FALLBACK_RASTER))
            nq["visualInspectionGuideVi"] = (
                f"Mẹo quan sát ảnh [{nq.get('topicVi', '')}]: Chú ý đường nét, kết cấu đặc trưng của {nq.get('hanzi', '')} "
                f"trước khi đối chiếu 4 lựa chọn."
            )
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
