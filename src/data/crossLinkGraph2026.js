// ============================================================================
// VERIFIED BIDIRECTIONAL CROSS-LINK GRAPH (200+ LINKS ACROSS ALL 5 PILLARS)
// Auto-verified by scripts/build_crosslink_graph.py — zero broken target IDs.
// ============================================================================
(function () {
  var EDGES = [
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "articles",
    "dstId": "modern-china-transformation-1840-1949",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "artifacts",
    "dstId": "yongle-great-bell",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "artifacts",
    "dstId": "kuaixue-shiqing-tie",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shaanxi",
    "dstKind": "articles",
    "dstId": "qin-institutional-standardization",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shaanxi",
    "dstKind": "artifacts",
    "dstId": "terracotta-general",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shaanxi",
    "dstKind": "artifacts",
    "dstId": "hejiacun-agate-cup",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shaanxi",
    "dstKind": "classics",
    "dstId": "sanguozhi",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "articles",
    "dstId": "xia-shang-zhou-oracle-bones-rituals",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "articles",
    "dstId": "song-dynasty-urban-science-renaissance",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "artifacts",
    "dstId": "houmuwu-ding",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "artifacts",
    "dstId": "fuhao-owl-zun",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "artifacts",
    "dstId": "lianhe-fanghu",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "articles",
    "dstId": "grand-canal-dujiangyan-hydraulic-empire",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "artifacts",
    "dstId": "longquan-celadon-vase",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "classics",
    "dstId": "mengxi-bitan",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "paintings",
    "dstId": "gusu-fanhua-tu",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "paintings",
    "dstId": "luoshenfu-tu",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "artifacts",
    "dstId": "xuande-blue-white-meiping",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "articles",
    "dstId": "grand-canal-dujiangyan-hydraulic-empire",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "artifacts",
    "dstId": "sanxingdui-bronze-tree",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "paintings",
    "dstId": "jiangxing-chuxue-tu",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hunan",
    "dstKind": "articles",
    "dstId": "zhangjiajie-wulingyuan-sandstone-pillars",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hunan",
    "dstKind": "artifacts",
    "dstId": "mawangdui-silk-gown",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hubei",
    "dstKind": "artifacts",
    "dstId": "goujian-sword",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-anhui",
    "dstKind": "paintings",
    "dstId": "huangshan-tu-meiqing",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-yunnan",
    "dstKind": "articles",
    "dstId": "tea-horse-road-southwest-corridor",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-fujian",
    "dstKind": "articles",
    "dstId": "song-dynasty-urban-science-renaissance",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-fujian",
    "dstKind": "artifacts",
    "dstId": "jian-yao-yaobian-tenmoku",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-gansu",
    "dstKind": "articles",
    "dstId": "dunhuang-mogao-buddhist-grotto-art",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hebei",
    "dstKind": "artifacts",
    "dstId": "changxin-palace-lamp",
    "reasonVi": "Liên kết địa văn hóa trọng điểm",
    "reasonEn": "Core geo-cultural anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "articles",
    "dstId": "beijing-shanghai-culture",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "articles",
    "dstId": "imperial-examination-keju",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "articles",
    "dstId": "img-hero-monograph-education",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "articles",
    "dstId": "chinese-education-academy-study-abroad",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "paintings",
    "dstId": "luoshenfu-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "paintings",
    "dstId": "you-chun-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "paintings",
    "dstId": "bu-nian-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "paintings",
    "dstId": "huishan-shinv-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "artifacts",
    "dstId": "jiangshan-ruci-duojiao",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "artifacts",
    "dstId": "qianli-jiangshan",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "artifacts",
    "dstId": "qingming-scroll",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "artifacts",
    "dstId": "lantingji-xu",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-beijing",
    "dstKind": "classics",
    "dstId": "bachanhtapluc",
    "reasonVi": "Thư tịch gắn với lịch sử vùng",
    "reasonEn": "Historical treatise anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-tianjin",
    "dstKind": "articles",
    "dstId": "tea-culture",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-tianjin",
    "dstKind": "articles",
    "dstId": "china-34-provincial-units-megalopolis-structure",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-tianjin",
    "dstKind": "articles",
    "dstId": "lacquerware-silk-woodblock-new-year-prints",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-tianjin",
    "dstKind": "articles",
    "dstId": "china-hsr-megaprojects-urban-network",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-tianjin",
    "dstKind": "paintings",
    "dstId": "taohuayuan-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-tianjin",
    "dstKind": "classics",
    "dstId": "lushichunqiu",
    "reasonVi": "Thư tịch gắn với lịch sử vùng",
    "reasonEn": "Historical treatise anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanghai",
    "dstKind": "articles",
    "dstId": "iching-development",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanghai",
    "dstKind": "articles",
    "dstId": "tea-culture",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanghai",
    "dstKind": "articles",
    "dstId": "beijing-shanghai-culture",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanghai",
    "dstKind": "articles",
    "dstId": "traditional-architecture-gardens",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanghai",
    "dstKind": "paintings",
    "dstId": "liujunzi-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanghai",
    "dstKind": "paintings",
    "dstId": "qingbian-yinju",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanghai",
    "dstKind": "paintings",
    "dstId": "qiuxing-bajing",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanghai",
    "dstKind": "paintings",
    "dstId": "luomu-qiuse",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanghai",
    "dstKind": "artifacts",
    "dstId": "daxiguan-ding",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-chongqing",
    "dstKind": "articles",
    "dstId": "china-industrial-clusters-vietnam-supply-chain",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-chongqing",
    "dstKind": "articles",
    "dstId": "china-34-provincial-units-megalopolis-structure",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hebei",
    "dstKind": "paintings",
    "dstId": "rui-he-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hebei",
    "dstKind": "artifacts",
    "dstId": "ding-yao-bowl",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hebei",
    "dstKind": "artifacts",
    "dstId": "jinlv-yuyi",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanxi",
    "dstKind": "articles",
    "dstId": "chinese-eight-cuisines-tea-culture",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanxi",
    "dstKind": "articles",
    "dstId": "chinese-education-academy-study-abroad",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanxi",
    "dstKind": "articles",
    "dstId": "merchant-ethics-xin-yi-li",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shanxi",
    "dstKind": "articles",
    "dstId": "ten-merchant-guilds-huizhou-shanxi",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-liaoning",
    "dstKind": "paintings",
    "dstId": "luoshenfu-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-liaoning",
    "dstKind": "paintings",
    "dstId": "guoguo-furen-youchun",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-liaoning",
    "dstKind": "paintings",
    "dstId": "zhanhua-shinv-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-liaoning",
    "dstKind": "paintings",
    "dstId": "hanlin-chongting",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-heilongjiang",
    "dstKind": "paintings",
    "dstId": "hanlin-chongting",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "articles",
    "dstId": "beijing-shanghai-culture",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "articles",
    "dstId": "suzhou-classical-gardens-aesthetics",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "articles",
    "dstId": "sixteen-ancient-capitals-geopolitics",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "articles",
    "dstId": "lacquerware-silk-woodblock-new-year-prints",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "paintings",
    "dstId": "qiushan-wendao",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "paintings",
    "dstId": "qiuxing-bajing",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "paintings",
    "dstId": "huaiyang-jieqiu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "artifacts",
    "dstId": "daming-hunyitu",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangsu",
    "dstKind": "artifacts",
    "dstId": "zheng-he-navigation-chart",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "articles",
    "dstId": "beijing-shanghai-culture",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "articles",
    "dstId": "chinese-classical-vernacular-literature",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "articles",
    "dstId": "lu-yu-tea-classic-evolution",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "articles",
    "dstId": "chinese-laozihao-guochao-brands",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "paintings",
    "dstId": "dage-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "paintings",
    "dstId": "fuchun-shanju",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "paintings",
    "dstId": "songyin-fangyou-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "artifacts",
    "dstId": "lantingji-xu",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "artifacts",
    "dstId": "liangzhu-yucong",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "artifacts",
    "dstId": "quan-yao-vase",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-zhejiang",
    "dstKind": "artifacts",
    "dstId": "ge-yao-incense-burner",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-anhui",
    "dstKind": "articles",
    "dstId": "img-hero-monograph-religion",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-anhui",
    "dstKind": "articles",
    "dstId": "ten-merchant-guilds-huizhou-shanxi",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-anhui",
    "dstKind": "articles",
    "dstId": "four-treasures-of-the-scholar-study",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-anhui",
    "dstKind": "articles",
    "dstId": "china-industrial-clusters-vietnam-supply-chain",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-anhui",
    "dstKind": "artifacts",
    "dstId": "han-shipan-astrolabe",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-fujian",
    "dstKind": "articles",
    "dstId": "maritime-merchants-fujian-guangdong",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-fujian",
    "dstKind": "articles",
    "dstId": "chinese-regional-negotiation-styles",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-fujian",
    "dstKind": "articles",
    "dstId": "five-vernacular-architecture-styles",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangxi",
    "dstKind": "articles",
    "dstId": "artisan-kilns-to-industrial-clusters",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangxi",
    "dstKind": "articles",
    "dstId": "religious-daoism-quanzhen-zhengyi",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangxi",
    "dstKind": "artifacts",
    "dstId": "david-vases",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangxi",
    "dstKind": "artifacts",
    "dstId": "chu-dau-blue-white-ceramic",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangxi",
    "dstKind": "artifacts",
    "dstId": "tiangong-kaiwu-woodblock",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-jiangxi",
    "dstKind": "classics",
    "dstId": "tiangongkaiwu",
    "reasonVi": "Thư tịch gắn với lịch sử vùng",
    "reasonEn": "Historical treatise anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shandong",
    "dstKind": "articles",
    "dstId": "grand-canal-dujiangyan-hydraulic-empire",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shandong",
    "dstKind": "paintings",
    "dstId": "qingming-shanghe",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "articles",
    "dstId": "sixteen-ancient-capitals-geopolitics",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "articles",
    "dstId": "chinese-fermentation-spices-culinary-geography",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "articles",
    "dstId": "chinese-liquor-culture-baijiu-huangjiu",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "articles",
    "dstId": "china-hsr-megaprojects-urban-network",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "paintings",
    "dstId": "molan-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "artifacts",
    "dstId": "qianli-jiangshan",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "artifacts",
    "dstId": "ru-yao-tianqing",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "artifacts",
    "dstId": "jun-yao-bowl",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-henan",
    "dstKind": "artifacts",
    "dstId": "ngoc-lu-bronze-drum",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hubei",
    "dstKind": "articles",
    "dstId": "envoy-poetry-bac-hanh-tap-luc",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hubei",
    "dstKind": "articles",
    "dstId": "qin-institutional-standardization",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hubei",
    "dstKind": "articles",
    "dstId": "jiuzhaigou-travertine-karst",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hubei",
    "dstKind": "artifacts",
    "dstId": "hanshi-tie",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hubei",
    "dstKind": "artifacts",
    "dstId": "zeng-hou-yi-bianzhong",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hubei",
    "dstKind": "classics",
    "dstId": "chajing",
    "reasonVi": "Thư tịch gắn với lịch sử vùng",
    "reasonEn": "Historical treatise anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hunan",
    "dstKind": "articles",
    "dstId": "envoy-poetry-bac-hanh-tap-luc",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hunan",
    "dstKind": "articles",
    "dstId": "qin-institutional-standardization",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hunan",
    "dstKind": "paintings",
    "dstId": "moxia-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hunan",
    "dstKind": "paintings",
    "dstId": "benma-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hunan",
    "dstKind": "artifacts",
    "dstId": "siyang-fangzun",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hunan",
    "dstKind": "classics",
    "dstId": "bachanhtapluc",
    "reasonVi": "Thư tịch gắn với lịch sử vùng",
    "reasonEn": "Historical treatise anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-guangdong",
    "dstKind": "articles",
    "dstId": "silk-road-maritime-trade",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-guangdong",
    "dstKind": "articles",
    "dstId": "maritime-merchants-fujian-guangdong",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-guangdong",
    "dstKind": "articles",
    "dstId": "practical-chinese-field-phrasebook",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-guangdong",
    "dstKind": "articles",
    "dstId": "chinese-regional-negotiation-styles",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-guangdong",
    "dstKind": "artifacts",
    "dstId": "quan-yao-vase",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-guangdong",
    "dstKind": "artifacts",
    "dstId": "zhaoqing-duanyan-inkstone",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hainan",
    "dstKind": "articles",
    "dstId": "five-elements",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hainan",
    "dstKind": "articles",
    "dstId": "song-dynasty-urban-science-renaissance",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hainan",
    "dstKind": "paintings",
    "dstId": "lushan-gao",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "articles",
    "dstId": "tea-culture",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "articles",
    "dstId": "contemporary-china-digital",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "articles",
    "dstId": "vn-cn-cbec-rail-antidumping-2026",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "articles",
    "dstId": "china-34-provincial-units-megalopolis-structure",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "paintings",
    "dstId": "shanlu-songsheng",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "artifacts",
    "dstId": "forbidden-city-axis-gate",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "artifacts",
    "dstId": "houmuwu-ding",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "artifacts",
    "dstId": "liangzhu-yucong",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "artifacts",
    "dstId": "acupuncture-bronze-figure",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-sichuan",
    "dstKind": "classics",
    "dstId": "tangshi300",
    "reasonVi": "Thư tịch gắn với lịch sử vùng",
    "reasonEn": "Historical treatise anchor"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-guizhou",
    "dstKind": "articles",
    "dstId": "tea-culture",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-guizhou",
    "dstKind": "articles",
    "dstId": "chinese-liquor-culture-baijiu-huangjiu",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-yunnan",
    "dstKind": "articles",
    "dstId": "tea-culture",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-yunnan",
    "dstKind": "articles",
    "dstId": "chinese-laozihao-guochao-brands",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-yunnan",
    "dstKind": "articles",
    "dstId": "vietnamese-field-legal-medical-protocols",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shaanxi",
    "dstKind": "articles",
    "dstId": "sixteen-ancient-capitals-geopolitics",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shaanxi",
    "dstKind": "paintings",
    "dstId": "xishan-xinglv",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shaanxi",
    "dstKind": "artifacts",
    "dstId": "mao-gong-ding",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shaanxi",
    "dstKind": "artifacts",
    "dstId": "daxiguan-ding",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-shaanxi",
    "dstKind": "artifacts",
    "dstId": "tang-sancai-camel",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-gansu",
    "dstKind": "artifacts",
    "dstId": "ma-dap-phi-yen",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-qinghai",
    "dstKind": "articles",
    "dstId": "yinyang-origins",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-qinghai",
    "dstKind": "articles",
    "dstId": "maritime-merchants-fujian-guangdong",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-qinghai",
    "dstKind": "articles",
    "dstId": "tang-poetry-song-ci-poetics-geography",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-qinghai",
    "dstKind": "paintings",
    "dstId": "fuchun-shanju",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-taiwan",
    "dstKind": "articles",
    "dstId": "china-34-provincial-units-megalopolis-structure",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-taiwan",
    "dstKind": "paintings",
    "dstId": "kuanglu-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-taiwan",
    "dstKind": "paintings",
    "dstId": "qiushan-wendao",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-taiwan",
    "dstKind": "paintings",
    "dstId": "xishan-xinglv",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-taiwan",
    "dstKind": "paintings",
    "dstId": "zao-chun-tu",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-taiwan",
    "dstKind": "artifacts",
    "dstId": "hanshi-tie",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-taiwan",
    "dstKind": "artifacts",
    "dstId": "mao-gong-ding",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-taiwan",
    "dstKind": "artifacts",
    "dstId": "ru-yao-tianqing",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-taiwan",
    "dstKind": "artifacts",
    "dstId": "quan-yao-vase",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-guangxi",
    "dstKind": "articles",
    "dstId": "vietnamese-field-legal-medical-protocols",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-guangxi",
    "dstKind": "articles",
    "dstId": "china-industrial-clusters-vietnam-supply-chain",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-tibet",
    "dstKind": "articles",
    "dstId": "tea-horse-road-southwest-corridor",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-xinjiang",
    "dstKind": "articles",
    "dstId": "tcm-solar-terms-yangsheng",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hongkong",
    "dstKind": "articles",
    "dstId": "vn-cn-mirror-gap-trade-anatomy",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hongkong",
    "dstKind": "articles",
    "dstId": "china-240h-visa-free-transit-guilin-2026",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hongkong",
    "dstKind": "articles",
    "dstId": "china-34-provincial-units-megalopolis-structure",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hongkong",
    "dstKind": "paintings",
    "dstId": "kumu-guaishi",
    "reasonVi": "Quốc họa gắn với danh lam địa phương",
    "reasonEn": "Regional landscape & court painting"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-hongkong",
    "dstKind": "artifacts",
    "dstId": "zhongqiu-tie",
    "reasonVi": "Bảo vật khảo cổ bản địa",
    "reasonEn": "Local archaeological relic"
  },
  {
    "srcKind": "provinces",
    "srcId": "prov-macau",
    "dstKind": "articles",
    "dstId": "china-34-provincial-units-megalopolis-structure",
    "reasonVi": "Chuyên luận cùng vùng địa văn hóa",
    "reasonEn": "Regional monograph"
  },
  {
    "srcKind": "articles",
    "srcId": "ink-wash-painting",
    "dstKind": "artifacts",
    "dstId": "great-wall-scroll",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "traditional-architecture-gardens",
    "dstKind": "classics",
    "dstId": "guwenguanzhi",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "chinese-metaphysics-systems",
    "dstKind": "classics",
    "dstId": "guwenguanzhi",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "four-great-inventions-science",
    "dstKind": "artifacts",
    "dstId": "tiangong-kaiwu-woodblock",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "img-hero-monograph-literature",
    "dstKind": "classics",
    "dstId": "guwenguanzhi",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "img-hero-monograph-cuisine",
    "dstKind": "classics",
    "dstId": "guwenguanzhi",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "img-hero-monograph-ceramics-jade",
    "dstKind": "artifacts",
    "dstId": "david-vases",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "img-hero-monograph-religion",
    "dstKind": "classics",
    "dstId": "guwenguanzhi",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "img-hero-monograph-science-tech",
    "dstKind": "artifacts",
    "dstId": "tiangong-kaiwu-woodblock",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "img-hero-monograph-science-tech",
    "dstKind": "artifacts",
    "dstId": "song-printed-shiji",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "img-hero-monograph-education",
    "dstKind": "classics",
    "dstId": "guwenguanzhi",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "chinese-classical-vernacular-literature",
    "dstKind": "classics",
    "dstId": "guwenguanzhi",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "chinese-ceramics-porcelain-jade-heritage",
    "dstKind": "artifacts",
    "dstId": "david-vases",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "chinese-folk-religion-syncretism-mythology",
    "dstKind": "classics",
    "dstId": "guwenguanzhi",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "chinese-science-technology-history-modern",
    "dstKind": "artifacts",
    "dstId": "tiangong-kaiwu-woodblock",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "chinese-education-academy-study-abroad",
    "dstKind": "classics",
    "dstId": "guwenguanzhi",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "lu-yu-tea-classic-evolution",
    "dstKind": "classics",
    "dstId": "chajing",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "song-dynasty-urban-science-renaissance",
    "dstKind": "classics",
    "dstId": "mengxi-bitan",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "ming-qing-fiction-hongloumeng-anatomy",
    "dstKind": "classics",
    "dstId": "hongloumeng",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "chinese-chan-buddhism-aesthetics",
    "dstKind": "classics",
    "dstId": "liuzutanjing",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "chinese-aesthetic-concepts-qiyun-yijing",
    "dstKind": "classics",
    "dstId": "guwenguanzhi",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  },
  {
    "srcKind": "articles",
    "srcId": "east-asian-woodblock-printing-encyclopedias",
    "dstKind": "artifacts",
    "dstId": "yongle-dadian",
    "reasonVi": "Đối chiếu tư liệu nguyên điển",
    "reasonEn": "Primary artifact/text reference"
  }
];
  var BY_PROVINCE = {"prov-beijing": [{"kind": "articles", "id": "modern-china-transformation-1840-1949", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "yongle-great-bell", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "kuaixue-shiqing-tie", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "beijing-shanghai-culture", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "imperial-examination-keju", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "img-hero-monograph-education", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "chinese-education-academy-study-abroad", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "luoshenfu-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "you-chun-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "bu-nian-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "huishan-shinv-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "artifacts", "id": "jiangshan-ruci-duojiao", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "qianli-jiangshan", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "qingming-scroll", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "lantingji-xu", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "classics", "id": "bachanhtapluc", "reasonVi": "Thư tịch gắn với lịch sử vùng", "reasonEn": "Historical treatise anchor"}], "prov-shaanxi": [{"kind": "articles", "id": "qin-institutional-standardization", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "terracotta-general", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "hejiacun-agate-cup", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "classics", "id": "sanguozhi", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "sixteen-ancient-capitals-geopolitics", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "xishan-xinglv", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "artifacts", "id": "mao-gong-ding", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "daxiguan-ding", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "tang-sancai-camel", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}], "prov-henan": [{"kind": "articles", "id": "xia-shang-zhou-oracle-bones-rituals", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "song-dynasty-urban-science-renaissance", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "houmuwu-ding", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "fuhao-owl-zun", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "lianhe-fanghu", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "sixteen-ancient-capitals-geopolitics", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "chinese-fermentation-spices-culinary-geography", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "chinese-liquor-culture-baijiu-huangjiu", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "china-hsr-megaprojects-urban-network", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "molan-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "artifacts", "id": "qianli-jiangshan", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "ru-yao-tianqing", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "jun-yao-bowl", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "ngoc-lu-bronze-drum", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}], "prov-zhejiang": [{"kind": "articles", "id": "grand-canal-dujiangyan-hydraulic-empire", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "longquan-celadon-vase", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "classics", "id": "mengxi-bitan", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "beijing-shanghai-culture", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "chinese-classical-vernacular-literature", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "lu-yu-tea-classic-evolution", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "chinese-laozihao-guochao-brands", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "dage-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "fuchun-shanju", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "songyin-fangyou-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "artifacts", "id": "lantingji-xu", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "liangzhu-yucong", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "quan-yao-vase", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "ge-yao-incense-burner", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}], "prov-jiangsu": [{"kind": "paintings", "id": "gusu-fanhua-tu", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "paintings", "id": "luoshenfu-tu", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "xuande-blue-white-meiping", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "beijing-shanghai-culture", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "suzhou-classical-gardens-aesthetics", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "sixteen-ancient-capitals-geopolitics", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "lacquerware-silk-woodblock-new-year-prints", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "qiushan-wendao", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "qiuxing-bajing", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "huaiyang-jieqiu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "artifacts", "id": "daming-hunyitu", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "zheng-he-navigation-chart", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}], "prov-sichuan": [{"kind": "articles", "id": "grand-canal-dujiangyan-hydraulic-empire", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "sanxingdui-bronze-tree", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "paintings", "id": "jiangxing-chuxue-tu", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "tea-culture", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "contemporary-china-digital", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "vn-cn-cbec-rail-antidumping-2026", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "china-34-provincial-units-megalopolis-structure", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "shanlu-songsheng", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "artifacts", "id": "forbidden-city-axis-gate", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "houmuwu-ding", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "liangzhu-yucong", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "acupuncture-bronze-figure", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "classics", "id": "tangshi300", "reasonVi": "Thư tịch gắn với lịch sử vùng", "reasonEn": "Historical treatise anchor"}], "prov-hunan": [{"kind": "articles", "id": "zhangjiajie-wulingyuan-sandstone-pillars", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "mawangdui-silk-gown", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "envoy-poetry-bac-hanh-tap-luc", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "qin-institutional-standardization", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "moxia-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "benma-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "artifacts", "id": "siyang-fangzun", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "classics", "id": "bachanhtapluc", "reasonVi": "Thư tịch gắn với lịch sử vùng", "reasonEn": "Historical treatise anchor"}], "prov-hubei": [{"kind": "artifacts", "id": "goujian-sword", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "envoy-poetry-bac-hanh-tap-luc", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "qin-institutional-standardization", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "jiuzhaigou-travertine-karst", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "artifacts", "id": "hanshi-tie", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "zeng-hou-yi-bianzhong", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "classics", "id": "chajing", "reasonVi": "Thư tịch gắn với lịch sử vùng", "reasonEn": "Historical treatise anchor"}], "prov-anhui": [{"kind": "paintings", "id": "huangshan-tu-meiqing", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "img-hero-monograph-religion", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "ten-merchant-guilds-huizhou-shanxi", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "four-treasures-of-the-scholar-study", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "china-industrial-clusters-vietnam-supply-chain", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "artifacts", "id": "han-shipan-astrolabe", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}], "prov-yunnan": [{"kind": "articles", "id": "tea-horse-road-southwest-corridor", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "tea-culture", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "chinese-laozihao-guochao-brands", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "vietnamese-field-legal-medical-protocols", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}], "prov-fujian": [{"kind": "articles", "id": "song-dynasty-urban-science-renaissance", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "jian-yao-yaobian-tenmoku", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "articles", "id": "maritime-merchants-fujian-guangdong", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "chinese-regional-negotiation-styles", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "five-vernacular-architecture-styles", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}], "prov-gansu": [{"kind": "articles", "id": "dunhuang-mogao-buddhist-grotto-art", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "artifacts", "id": "ma-dap-phi-yen", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}], "prov-hebei": [{"kind": "artifacts", "id": "changxin-palace-lamp", "reasonVi": "Liên kết địa văn hóa trọng điểm", "reasonEn": "Core geo-cultural anchor"}, {"kind": "paintings", "id": "rui-he-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "artifacts", "id": "ding-yao-bowl", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "jinlv-yuyi", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}], "prov-tianjin": [{"kind": "articles", "id": "tea-culture", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "china-34-provincial-units-megalopolis-structure", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "lacquerware-silk-woodblock-new-year-prints", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "china-hsr-megaprojects-urban-network", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "taohuayuan-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "classics", "id": "lushichunqiu", "reasonVi": "Thư tịch gắn với lịch sử vùng", "reasonEn": "Historical treatise anchor"}], "prov-shanghai": [{"kind": "articles", "id": "iching-development", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "tea-culture", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "beijing-shanghai-culture", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "traditional-architecture-gardens", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "liujunzi-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "qingbian-yinju", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "qiuxing-bajing", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "luomu-qiuse", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "artifacts", "id": "daxiguan-ding", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}], "prov-chongqing": [{"kind": "articles", "id": "china-industrial-clusters-vietnam-supply-chain", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "china-34-provincial-units-megalopolis-structure", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}], "prov-shanxi": [{"kind": "articles", "id": "chinese-eight-cuisines-tea-culture", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "chinese-education-academy-study-abroad", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "merchant-ethics-xin-yi-li", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "ten-merchant-guilds-huizhou-shanxi", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}], "prov-liaoning": [{"kind": "paintings", "id": "luoshenfu-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "guoguo-furen-youchun", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "zhanhua-shinv-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "hanlin-chongting", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}], "prov-heilongjiang": [{"kind": "paintings", "id": "hanlin-chongting", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}], "prov-jiangxi": [{"kind": "articles", "id": "artisan-kilns-to-industrial-clusters", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "religious-daoism-quanzhen-zhengyi", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "artifacts", "id": "david-vases", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "chu-dau-blue-white-ceramic", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "tiangong-kaiwu-woodblock", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "classics", "id": "tiangongkaiwu", "reasonVi": "Thư tịch gắn với lịch sử vùng", "reasonEn": "Historical treatise anchor"}], "prov-shandong": [{"kind": "articles", "id": "grand-canal-dujiangyan-hydraulic-empire", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "qingming-shanghe", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}], "prov-guangdong": [{"kind": "articles", "id": "silk-road-maritime-trade", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "maritime-merchants-fujian-guangdong", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "practical-chinese-field-phrasebook", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "chinese-regional-negotiation-styles", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "artifacts", "id": "quan-yao-vase", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "zhaoqing-duanyan-inkstone", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}], "prov-hainan": [{"kind": "articles", "id": "five-elements", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "song-dynasty-urban-science-renaissance", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "lushan-gao", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}], "prov-guizhou": [{"kind": "articles", "id": "tea-culture", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "chinese-liquor-culture-baijiu-huangjiu", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}], "prov-qinghai": [{"kind": "articles", "id": "yinyang-origins", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "maritime-merchants-fujian-guangdong", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "tang-poetry-song-ci-poetics-geography", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "fuchun-shanju", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}], "prov-taiwan": [{"kind": "articles", "id": "china-34-provincial-units-megalopolis-structure", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "kuanglu-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "qiushan-wendao", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "xishan-xinglv", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "paintings", "id": "zao-chun-tu", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "artifacts", "id": "hanshi-tie", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "mao-gong-ding", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "ru-yao-tianqing", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}, {"kind": "artifacts", "id": "quan-yao-vase", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}], "prov-guangxi": [{"kind": "articles", "id": "vietnamese-field-legal-medical-protocols", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "china-industrial-clusters-vietnam-supply-chain", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}], "prov-tibet": [{"kind": "articles", "id": "tea-horse-road-southwest-corridor", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}], "prov-xinjiang": [{"kind": "articles", "id": "tcm-solar-terms-yangsheng", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}], "prov-hongkong": [{"kind": "articles", "id": "vn-cn-mirror-gap-trade-anatomy", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "china-240h-visa-free-transit-guilin-2026", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "articles", "id": "china-34-provincial-units-megalopolis-structure", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}, {"kind": "paintings", "id": "kumu-guaishi", "reasonVi": "Quốc họa gắn với danh lam địa phương", "reasonEn": "Regional landscape & court painting"}, {"kind": "artifacts", "id": "zhongqiu-tie", "reasonVi": "Bảo vật khảo cổ bản địa", "reasonEn": "Local archaeological relic"}], "prov-macau": [{"kind": "articles", "id": "china-34-provincial-units-megalopolis-structure", "reasonVi": "Chuyên luận cùng vùng địa văn hóa", "reasonEn": "Regional monograph"}]};
  var BY_ARTICLE = {"ink-wash-painting": [{"kind": "artifacts", "id": "great-wall-scroll", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "traditional-architecture-gardens": [{"kind": "classics", "id": "guwenguanzhi", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "chinese-metaphysics-systems": [{"kind": "classics", "id": "guwenguanzhi", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "four-great-inventions-science": [{"kind": "artifacts", "id": "tiangong-kaiwu-woodblock", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "img-hero-monograph-literature": [{"kind": "classics", "id": "guwenguanzhi", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "img-hero-monograph-cuisine": [{"kind": "classics", "id": "guwenguanzhi", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "img-hero-monograph-ceramics-jade": [{"kind": "artifacts", "id": "david-vases", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "img-hero-monograph-religion": [{"kind": "classics", "id": "guwenguanzhi", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "img-hero-monograph-science-tech": [{"kind": "artifacts", "id": "tiangong-kaiwu-woodblock", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}, {"kind": "artifacts", "id": "song-printed-shiji", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "img-hero-monograph-education": [{"kind": "classics", "id": "guwenguanzhi", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "chinese-classical-vernacular-literature": [{"kind": "classics", "id": "guwenguanzhi", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "chinese-ceramics-porcelain-jade-heritage": [{"kind": "artifacts", "id": "david-vases", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "chinese-folk-religion-syncretism-mythology": [{"kind": "classics", "id": "guwenguanzhi", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "chinese-science-technology-history-modern": [{"kind": "artifacts", "id": "tiangong-kaiwu-woodblock", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "chinese-education-academy-study-abroad": [{"kind": "classics", "id": "guwenguanzhi", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "lu-yu-tea-classic-evolution": [{"kind": "classics", "id": "chajing", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "song-dynasty-urban-science-renaissance": [{"kind": "classics", "id": "mengxi-bitan", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "ming-qing-fiction-hongloumeng-anatomy": [{"kind": "classics", "id": "hongloumeng", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "chinese-chan-buddhism-aesthetics": [{"kind": "classics", "id": "liuzutanjing", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "chinese-aesthetic-concepts-qiyun-yijing": [{"kind": "classics", "id": "guwenguanzhi", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}], "east-asian-woodblock-printing-encyclopedias": [{"kind": "artifacts", "id": "yongle-dadian", "reasonVi": "Đối chiếu tư liệu nguyên điển", "reasonEn": "Primary artifact/text reference"}]};

  window.CCE_CROSSLINKS = {
    edges: EDGES,
    totalCount: EDGES.length,
    byProvince: BY_PROVINCE,
    byArticle: BY_ARTICLE,
    getForProvince: function (provId) { return BY_PROVINCE[provId] || []; },
    getForArticle: function (artId) {
      var direct = BY_ARTICLE[artId] || [];
      var back = EDGES.filter(function (e) { return e.dstKind === 'articles' && e.dstId === artId; })
        .map(function (e) { return { kind: e.srcKind, id: e.srcId, reasonVi: e.reasonVi, reasonEn: e.reasonEn }; });
      return direct.concat(back);
    },
    getForEntity: function (kind, id) {
      return EDGES.filter(function (e) {
        return (e.srcKind === kind && e.srcId === id) || (e.dstKind === kind && e.dstId === id);
      });
    }
  };
})();
