/* Chinese Culture Explorer V8.0 — Pack 2 (Pure ES5 IIFE) */
(function () {
  "use strict";

var CCE_V8_PACK2_A = {
  brandsA: [
    {
      id: "lzh-tongrentang",
      zh: "北京同仁堂",
      targetFile: "assets/images/brands/tongrentang.jpg",
      wikidataQid: "Q1073812",
      wikimediaQueries: ["Tongrentang Dashilar Beijing", "Beijing Tong Ren Tang apothecary", "Tongrentang historic signboard Beijing"],
      visualMustShowEn: "Authentic historic wooden storefront, gilded plaque, or heritage apothecary cabinets of Beijing Tongrentang at Dashilar",
      captionVi: "Hiệu thuốc Bắc Kinh Đồng Nhân Đường tại phố Đại Sách Lan, ngự dược phòng triều Thanh thành lập năm 1669.",
      captionEn: "Beijing Tongrentang historic apothecary flagship at Dashilar, imperial herbal pharmacy heritage founded in 1669."
    },
    {
      id: "lzh-chenliji",
      zh: "广州陈李济",
      targetFile: "assets/images/brands/chenliji.jpg",
      wikidataQid: "Q10935011",
      wikimediaQueries: ["Chen Li Ji Beijing Road Guangzhou", "Chenliji wax-coated herbal pill heritage Guangzhou", "Chenliji Traditional Chinese Medicine Museum Guangzhou"],
      visualMustShowEn: "Historic Guangzhou Chenliji storefront facade, traditional wax-sealed apothecary display, or Chenliji heritage museum hall",
      captionVi: "Trần Lý Tế Quảng Châu thành lập năm 1600 thời Minh Vạn Lịch, nổi tiếng với di sản bào chế hoàn sáp Lĩnh Nam và bảo tàng dược cổ.",
      captionEn: "Guangzhou Chenliji founded in 1600 during the Ming dynasty, noted for Lingnan wax-sealed apothecary craftsmanship and its heritage museum."
    },
    {
      id: "lzh-huqingyutang",
      zh: "杭州胡庆余堂",
      targetFile: "assets/images/brands/huqingyutang.jpg",
      wikidataQid: "Q10935015",
      wikimediaQueries: ["Hu Qing Yu Tang Hefang Street Hangzhou", "Huqingyutang wooden apothecary hall Hangzhou", "Huqingyutang Traditional Chinese Medicine Museum Hangzhou"],
      visualMustShowEn: "Huqingyutang late-Qing Huizhou-style courtyard architecture, carved wooden sales hall, or Hefang Street museum facade in Hangzhou",
      captionVi: "Hồ Khánh Dư Đường Hàng Châu do Hồ Tuyết Nham sáng lập năm 1874 tại phố Hà Phường, được tôn vinh là Giang Nam Dược Vương cùng kiến trúc gỗ cổ.",
      captionEn: "Hangzhou Huqingyutang founded by Hu Xueyan in 1874 on Hefang Street, celebrated for its late-Qing timber apothecary architecture and museum."
    },
    {
      id: "lzh-pianzihuang",
      zh: "漳州片仔癀",
      targetFile: "assets/images/brands/pianzihuang.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Pien Tze Huang Zhangzhou Fujian signboard", "Pianzihuang heritage packaging Zhangzhou", "Zhangzhou Pien Tze Huang Museum Fujian"],
      visualMustShowEn: "Zhangzhou Pien Tze Huang heritage pavilion, signature historic box display, or Zhangzhou Pien Tze Huang cultural museum",
      captionVi: "Chương Châu Phiến Tử Hoàng (Phúc Kiến) kế thừa kỹ nghệ bào chế cổ truyền từ thời Minh, gắn với di sản văn hóa dược liệu Mân Nam.",
      captionEn: "Zhangzhou Pien Tze Huang of Fujian, preserving Ming-era traditional formulation heritage and Minnan apothecary culture."
    },
    {
      id: "lzh-yunnanbaiyao",
      zh: "云南白药",
      targetFile: "assets/images/brands/yunnanbaiyao.jpg",
      wikidataQid: "Q849794",
      wikimediaQueries: ["Yunnan Baiyao Kunming headquarters museum", "Yunnan Baiyao heritage box packaging", "Qu Huanzhang Yunnan Baiyao exhibition Kunming"],
      visualMustShowEn: "Yunnan Baiyao heritage exhibition hall in Kunming, historic archive display, or classic boxed packaging of Yunnan Baiyao",
      captionVi: "Vân Nam Bạch Dược do Khúc Hoán Chương sáng lập năm 1902 tại Côn Minh, là dấu ấn lịch sử của ngành bào chế thảo mộc cao nguyên Vân Nam.",
      captionEn: "Yunnan Baiyao founded by Qu Huanzhang in 1902 in Kunming, a landmark in Yunnan highland botanical preparation heritage."
    },
    {
      id: "lzh-dongeejiao",
      zh: "东阿阿胶",
      targetFile: "assets/images/brands/dongeejiao.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Dong-E-E-Jiao Liaocheng Shandong factory", "Donge Ejiao traditional gelatin blocks", "China Ejiao Museum Donge Shandong"],
      visualMustShowEn: "Donge Ejiao heritage complex in Shandong, traditional glossy dark rectangular craft blocks, or China Ejiao Museum display",
      captionVi: "Đông A A Giao (Sơn Đông) gắn với kỹ nghệ luyện cao cổ truyền vùng nước giếng Đông A, được công nhận là di sản phi vật thể cấp quốc gia.",
      captionEn: "Shandong Donge Ejiao, rooted in historic Donge well-water preparation craftsmanship recognized as national intangible cultural heritage."
    },
    {
      id: "lzh-quanjude",
      zh: "全聚德",
      targetFile: "assets/images/brands/quanjude.jpg",
      wikidataQid: "Q1473664",
      wikimediaQueries: ["Quanjude Qianmen Beijing restaurant", "Quanjude Peking duck oven", "Quanjude signboard Qianmen"],
      visualMustShowEn: "Quanjude historic Qianmen restaurant facade with gold calligraphy plaque or traditional fruitwood-roasted Peking duck",
      captionVi: "Thương hiệu vịt quay Toàn Tụ Đức tại Tiền Môn (Bắc Kinh) thành lập năm 1864, tiêu biểu cho kỹ thuật quay lò treo bằng gỗ cây ăn quả.",
      captionEn: "Quanjude historic Qianmen restaurant in Beijing, renowned since 1864 for open-oven fruitwood-roasted Peking duck."
    },
    {
      id: "lzh-bianyifang",
      zh: "便宜坊",
      targetFile: "assets/images/brands/bianyifang.jpg",
      wikidataQid: "Q4902736",
      wikimediaQueries: ["Bianyifang Qianmen Beijing restaurant", "Bianyifang closed-oven roast duck Beijing", "Bianyifang historic signboard Chongwenmen Beijing"],
      visualMustShowEn: "Bianyifang historic Beijing restaurant entrance with traditional plaque or closed-oven Menlu roast duck presentation",
      captionVi: "Tiện Nghi Phường Bắc Kinh có lịch sử từ năm 1416 thời Minh Vĩnh Lạc, đại diện cổ xưa nhất cho trường phái vịt quay lò kín Muộn Lô.",
      captionEn: "Beijing Bianyifang tracing its roots to 1416 in the Ming dynasty, the oldest representative of closed-oven Menlu Peking roast duck."
    },
    {
      id: "lzh-donglaishun",
      zh: "东来顺",
      targetFile: "assets/images/brands/donglaishun.jpg",
      wikidataQid: "Q10869422",
      wikimediaQueries: ["Donglaishun Wangfujing Beijing restaurant", "Donglaishun copper hotpot mutton Beijing", "Donglaishun signboard Beijing"],
      visualMustShowEn: "Donglaishun flagship facade on Wangfujing Street or traditional tall-chimney copper charcoal hotpot with thinly sliced mutton",
      captionVi: "Đông Lai Thuận tại Vương Phủ Tỉnh (Bắc Kinh) thành lập năm 1903, nổi danh với nghệ thuật lẩu cừu nồi đồng than hoa và kỹ thuật thái thịt mỏng.",
      captionEn: "Donglaishun on Beijing's Wangfujing Street, founded in 1903 and celebrated for charcoal-heated copper-pot instant-boiled mutton."
    },
    {
      id: "lzh-louwailou",
      zh: "杭州楼外楼",
      targetFile: "assets/images/brands/louwailou.jpg",
      wikidataQid: "Q10935032",
      wikimediaQueries: ["Louwailou Gushan West Lake Hangzhou", "Louwailou West Lake vinegar fish Hangzhou", "Louwailou historic restaurant pavilion Hangzhou"],
      visualMustShowEn: "Louwailou lakeside pavilion restaurant on Gushan Island by West Lake or signature West Lake Vinegar Fish dish",
      captionVi: "Lầu Ngoại Lầu bên Cô Sơn Tây Hồ (Hàng Châu) ra đời năm 1848, lưu giữ tinh hoa ẩm thực Chiết Giang như Cá giấm Tây Hồ và Tôm Long Tỉnh.",
      captionEn: "Hangzhou Louwailou on Gushan Island by West Lake, established in 1848 and famed for Zhejiang classics like West Lake Vinegar Fish."
    },
    {
      id: "lzh-chenmapo",
      zh: "陈麻婆豆腐",
      targetFile: "assets/images/brands/chenmapo.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Chen Mapo Tofu restaurant Chengdu", "Chen Mapo Tofu Sichuan dish bowl", "Chen Mapo Tofu historic plaque Chengdu"],
      visualMustShowEn: "Chen Mapo Tofu flagship restaurant facade in Chengdu or steaming bowl of authentic Sichuan Mapo Tofu with chili oil and peppercorns",
      captionVi: "Trần Ma Bà Đậu Hũ Thành Đô ra đời năm 1862 thời Thanh Đồng Trị, khai sinh món đậu phụ cay tê kinh điển của ẩm thực Tứ Xuyên.",
      captionEn: "Chengdu Chen Mapo Tofu established in 1862, the original culinary house that defined Sichuan's iconic numbing-spicy Mapo Tofu."
    },
    {
      id: "lzh-taotaoju",
      zh: "广州陶陶居",
      targetFile: "assets/images/brands/taotaoju.jpg",
      wikidataQid: "Q10935040",
      wikimediaQueries: ["Tao Tao Ju Dishifu Road Guangzhou", "Taotaoju Cantonese dim sum teahouse Guangzhou", "Taotaoju historic pavilion roof Guangzhou"],
      visualMustShowEn: "Historic Lingnan pavilion building of Tao Tao Ju on Dishifu Road in Guangzhou with calligraphy plaque or Cantonese dim sum baskets",
      captionVi: "Đào Đào Cư Quảng Châu trên phố Đệ Thập Phủ thành lập năm 1880, biểu tượng trà lâu Quảng Đông với tấm biển do Khang Hữu Vi đề tự.",
      captionEn: "Guangzhou Tao Tao Ju on Dishifu Road, founded in 1880 and famed for its Lingnan teahouse pavilion, dim sum, and Kang Youwei calligraphy plaque."
    },
    {
      id: "lzh-moutai",
      zh: "贵州茅台",
      targetFile: "assets/images/brands/moutai.jpg",
      wikidataQid: "Q837552",
      wikimediaQueries: ["Kweichow Moutai Town distillery Guizhou", "Feitian Moutai white porcelain bottle", "China Liquor Culture City Moutai Museum"],
      visualMustShowEn: "Moutai Town distillery gateway along the Chishui River, iconic white porcelain Moutai bottle with red ribbon, or Moutai Liquor Culture Museum",
      captionVi: "Quý Châu Mao Đài bên sông Xích Thủy là biểu tượng quốc tửu hương tương của Trung Quốc, kế thừa quy trình ủ chưng cất cổ truyền nhiều chu kỳ.",
      captionEn: "Kweichow Moutai along the Chishui River, China's flagship sauce-aroma baijiu heritage rooted in multi-cycle traditional fermentation."
    },
    {
      id: "lzh-wuliangye",
      zh: "五粮液",
      targetFile: "assets/images/brands/wuliangye.jpg",
      wikidataQid: "Q1756571",
      wikimediaQueries: ["Wuliangye distillery park Yibin Sichuan", "Wuliangye classic crystal bottle baijiu", "Wuliangye Liquor Culture Museum Yibin"],
      visualMustShowEn: "Wuliangye distillery complex and bottle-shaped landmark in Yibin, classic Wuliangye baijiu bottle, or Wuliangye museum hall",
      captionVi: "Ngũ Lương Dịch Nghi Tân (Tứ Xuyên) chưng cất từ năm loại ngũ cốc trong hệ hầm ủ cổ thời Minh, đại diện đỉnh cao dòng bạch tửu nồng hương.",
      captionEn: "Wuliangye of Yibin, Sichuan, distilled from five grains in Ming-era fermentation pits as a benchmark of strong-aroma baijiu."
    },
    {
      id: "lzh-guyuelongshan",
      zh: "古越龙山",
      targetFile: "assets/images/brands/guyuelongshan.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Guyuelongshan Shaoxing rice wine cellar", "Guyuelongshan Shaoxing huangjiu clay jar", "China Yellow Rice Wine Museum Shaoxing"],
      visualMustShowEn: "Guyuelongshan Shaoxing yellow wine aging cellar stacked with sealed clay jars, branded bottle, or Shaoxing Yellow Rice Wine Museum",
      captionVi: "Cổ Việt Long Sơn Thiệu Hưng (Chiết Giang) bảo tồn kỹ nghệ ủ hoàng tửu từ nước hồ Giám Hồ và nếp vùng Giang Nam qua nhiều thế hệ.",
      captionEn: "Shaoxing Guyuelongshan of Zhejiang, preserving traditional Jianhu-water glutinous rice yellow wine brewing and clay-jar aging."
    },
    {
      id: "lzh-wuyutai",
      zh: "吴裕泰",
      targetFile: "assets/images/brands/wuyutai.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Wuyutai tea shop Wangfujing Beijing", "Wuyutai jasmine tea tin Beijing", "Wuyutai Yonghegong flagship store Beijing"],
      visualMustShowEn: "Wuyutai flagship tea shop storefront on Wangfujing or Beixinqiao with gold signboard and traditional tea canisters",
      captionVi: "Ngô Dụ Thái Bắc Kinh thành lập năm 1887 thời Thanh Quang Tự, nổi danh với nghệ thuật ướp trà hoa nhài truyền thống của kinh thành.",
      captionEn: "Beijing Wuyutai Tea House founded in 1887 during the Qing dynasty, celebrated for its traditional multi-scented jasmine tea craft."
    },
    {
      id: "lzh-zhangyiyuan",
      zh: "张一元",
      targetFile: "assets/images/brands/zhangyiyuan.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Zhangyiyuan Dashilar Beijing tea shop", "Zhangyiyuan jasmine tea canister Beijing", "Zhangyiyuan historic facade Qianmen Beijing"],
      visualMustShowEn: "Zhangyiyuan historic tea shop facade on Dashilar Street in Beijing with traditional wooden signage and jasmine tea tins",
      captionVi: "Trương Nhất Nguyên thành lập năm 1900 tại Đại Sách Lan (Bắc Kinh), ghi dấu với kỹ nghệ ướp trà hoa nhài đạt di sản phi vật thể quốc gia.",
      captionEn: "Zhangyiyuan founded in 1900 on Beijing's Dashilar Street, noted for its nationally listed traditional jasmine tea scenting craft."
    },
    {
      id: "lzh-daoxiangcun",
      zh: "北京稻香村",
      targetFile: "assets/images/brands/daoxiangcun.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Beijing Daoxiangcun pastry shop Dongcheng", "Beijing Daoxiangcun Jingba jian pastry box", "Daoxiangcun traditional Chinese pastries Beijing"],
      visualMustShowEn: "Beijing Daoxiangcun bakery storefront with red and gold signboard or classic assorted Beijing pastry gift box",
      captionVi: "Bắc Kinh Đạo Hương Thôn khai trương năm 1895, nổi tiếng với bộ bánh điểm tâm Kinh Bát Kiện và bánh nướng theo mùa 24 tiết khí.",
      captionEn: "Beijing Daoxiangcun opened in 1895, renowned for classic Jingbajian pastries and seasonal confections tied to the 24 solar terms."
    },
    {
      id: "lzh-rongbaozhai",
      zh: "荣宝斋",
      targetFile: "assets/images/brands/rongbaozhai.jpg",
      wikidataQid: "Q10935061",
      wikimediaQueries: ["Rongbaozhai Liulichang Beijing facade", "Rongbaozhai woodblock watermark print Beijing", "Rongbaozhai gallery Liulichang West Street"],
      visualMustShowEn: "Rongbaozhai historic gray-brick flagship on Liulichang West Street in Beijing or traditional woodblock watercolor printing workshop",
      captionVi: "Vinh Bảo Trai tại phố Lưu Ly Xưởng (Bắc Kinh) có nguồn gốc từ năm 1672, kiệt xuất về kỹ thuật in mộc bản thủy ấn và bồi biểu thư họa.",
      captionEn: "Rongbaozhai on Beijing's Liulichang Street, tracing back to 1672 and famed for woodblock watercolor printing and scroll mounting."
    },
    {
      id: "lzh-hukaiwen",
      zh: "胡开文",
      targetFile: "assets/images/brands/hukaiwen.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Hu Kaiwen Ink Factory Tunxi Huangshan", "Hu Kaiwen Hui inkstick carved gold", "Hui Ink Museum Hu Kaiwen Shexian Anhui"],
      visualMustShowEn: "Hu Kaiwen historic ink workshop in Tunxi or Shexian, intricately molded gilt Hui inksticks, or Anhui inkstick museum display",
      captionVi: "Hồ Khai Văn (Huy Châu, An Huy) thành lập năm 1765 thời Càn Long, bậc thầy chế tác thỏi mực tùng yên chạm nổi dát vàng nổi danh văn đàn.",
      captionEn: "Hu Kaiwen of Huizhou, Anhui, established in 1765 and renowned for carved, gilded pine-soot Hui inksticks."
    },
    {
      id: "lzh-zhangxiaoquan",
      zh: "张小泉",
      targetFile: "assets/images/brands/zhangxiaoquan.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Zhang Xiaoquan scissor shop Hefang Street Hangzhou", "Zhang Xiaoquan forged black steel scissors", "China Scissors Museum Zhang Xiaoquan Hangzhou"],
      visualMustShowEn: "Zhang Xiaoquan flagship store on Hangzhou's Hefang Street, traditional hand-forged iron scissors, or Hangzhou Scissors Museum exhibit",
      captionVi: "Trương Tiểu Tuyền Hàng Châu thành lập năm 1628 thời Minh Sùng Trinh, nổi tiếng khắp Trung Hoa với kỹ nghệ rèn kéo thủ công 72 công đoạn.",
      captionEn: "Hangzhou Zhang Xiaoquan founded in 1628, famed across China for its 72-step hand-forged steel scissors craftsmanship."
    },
    {
      id: "lzh-ruifuxiang",
      zh: "瑞蚨祥",
      targetFile: "assets/images/brands/ruifuxiang.jpg",
      wikidataQid: "Q10935072",
      wikimediaQueries: ["Ruifuxiang Dashilar Beijing historic building", "Ruifuxiang silk brocade shop Qianmen Beijing", "Ruifuxiang ironwork facade Dashilar"],
      visualMustShowEn: "Ruifuxiang historic Dashilar silk emporium with ornate cast-iron facade and gilded plaque or interior silk brocade bolts",
      captionVi: "Thụy Phù Tường tại Đại Sách Lan (Bắc Kinh) thành lập năm 1862, danh hiệu tơ lụa – vải vóc hàng đầu với mặt tiền kiến trúc sắt nghệ thuật cổ.",
      captionEn: "Ruifuxiang on Beijing's Dashilar Street, established in 1862 as a premier silk and drapery house with an ornate historic facade."
    },
    {
      id: "lzh-neiliansheng",
      zh: "内联升",
      targetFile: "assets/images/brands/neiliansheng.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Neiliansheng Dashilar Beijing shoe store", "Neiliansheng Qian Ceng Di cloth shoes", "Neiliansheng historic signboard Beijing"],
      visualMustShowEn: "Neiliansheng flagship storefront at Dashilar in Beijing or hand-stitched thousand-layer sole Qian Ceng Di cloth shoes",
      captionVi: "Nội Liên Thăng tại Đại Sách Lan (Bắc Kinh) thành lập năm 1853, biểu tượng nghề khâu giày vải đế nghìn lớp Thiên Tầng Để thủ công.",
      captionEn: "Beijing Neiliansheng founded in 1853 at Dashilar, celebrated for hand-stitched thousand-layer sole cloth shoes."
    },
    {
      id: "lzh-jingtailan",
      zh: "北京珐琅厂景泰蓝",
      targetFile: "assets/images/brands/jingtailan.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Beijing Enamel Factory cloisonne museum", "Beijing Jingtailan cloisonne vase copper wire", "Jingtailan Art Museum Beijing"],
      visualMustShowEn: "Beijing Enamel Factory cloisonne art museum, artisan bending copper filigree wire on a vessel, or finished cobalt-blue Jingtailan vase",
      captionVi: "Xưởng Pháp Lam Bắc Kinh thành lập năm 1956, đơn vị kế thừa và bảo tồn kỹ nghệ khảm men đồng Cảnh Thái Lam cung đình Minh–Thanh.",
      captionEn: "Beijing Enamel Factory established in 1956, custodian of imperial Ming-Qing Jingtailan copper-wire cloisonne enamel craft."
    },
    {
      id: "lzh-x-06",
      zh: "太谷广誉远",
      targetFile: "assets/images/brands/x-06.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Guangyuyuan Taigu Shanxi historic courtyard", "Guangyuyuan Chinese Medicine Cultural Museum Taigu", "Guangyuyuan antique apothecary signboard Shanxi"],
      visualMustShowEn: "Guangyuyuan historic Shanxi merchant-style courtyard apothecary in Taigu or Guangyuyuan cultural museum exhibition hall",
      captionVi: "Thái Cốc Quảng Dự Viễn (Sơn Tây) ra đời năm 1541 thời Minh Gia Tĩnh, một trong những hiệu dược cổ lâu đời nhất của thương bang Tấn Thương.",
      captionEn: "Taigu Guangyuyuan of Shanxi, founded in 1541 during the Ming dynasty and among the oldest apothecary houses linked to Shanxi merchants."
    },
    {
      id: "lzh-x-08",
      zh: "长沙九芝堂",
      targetFile: "assets/images/brands/x-08.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Jiuzhitang Pozi Street Changsha", "Jiuzhitang historic apothecary plaque Changsha", "Jiuzhitang Traditional Chinese Medicine Museum Hunan"],
      visualMustShowEn: "Jiuzhitang flagship heritage storefront on Pozi Street in Changsha or Hunan Jiuzhitang apothecary cultural hall",
      captionVi: "Trường Sa Cửu Chi Đường (Hồ Nam) thành lập năm 1650 thời Thanh Thuận Trị, gắn với di sản dược phường cổ phố Ba Tử bên sông Tương.",
      captionEn: "Changsha Jiuzhitang of Hunan, founded in 1650 during the early Qing dynasty and anchored in Pozi Street apothecary heritage."
    },
    {
      id: "lzh-x-09",
      zh: "武汉马应龙",
      targetFile: "assets/images/brands/x-09.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Mayinglong historic pharmacy Wuhan", "Mayinglong heritage exhibition hall Wuhan", "Mayinglong traditional signboard Hubei"],
      visualMustShowEn: "Wuhan Mayinglong heritage hall facade, historic brand signboard, or archival apothecary artifacts from its Ming-era origins",
      captionVi: "Vũ Hán Mã Ứng Long khởi nguồn từ năm 1582 thời Minh Vạn Lịch, lưu giữ lịch sử bốn thế kỷ nghề bào chế cổ truyền vùng Kinh Sở.",
      captionEn: "Wuhan Mayinglong tracing its origins to 1582 in the Ming dynasty, preserving over four centuries of Jing-Chu apothecary history."
    },
    {
      id: "lzh-x-10",
      zh: "苏州雷允上",
      targetFile: "assets/images/brands/x-10.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Lei Yun Shang Guanqian Street Suzhou", "Leiyunshang historic wooden pharmacy Suzhou", "Leiyunshang Wu-school apothecary museum Suzhou"],
      visualMustShowEn: "Leiyunshang historic timber storefront in Suzhou's Guanqian district, traditional gilded plaque, or Suzhou heritage apothecary display",
      captionVi: "Tô Châu Lôi Doãn Thượng thành lập năm 1734 thời Thanh Ung Chính, đại diện tiêu biểu của di sản y dược phái Ngô Môn vùng Giang Nam.",
      captionEn: "Suzhou Leiyunshang founded in 1734 during the Qing dynasty, a flagship landmark of Jiangnan Wu-school apothecary heritage."
    },
    {
      id: "lzh-x-11",
      zh: "上海童涵春堂",
      targetFile: "assets/images/brands/x-11.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Tonghanchuntang Yu Garden Shanghai", "Tong Han Chun Tang Old Town Shanghai facade", "Tonghanchuntang Chinese apothecary museum Shanghai"],
      visualMustShowEn: "Tonghanchuntang classical upturned-eave building near Shanghai Yu Garden with gilded vertical signboard and carved wood interior",
      captionVi: "Thượng Hải Đồng Hàm Xuân Đường ra đời năm 1783 bên khu Dự Viên, mang kiến trúc mái cong Giang Nam và lịch sử dược phường Hải Phái.",
      captionEn: "Shanghai Tonghanchuntang established in 1783 near Yu Garden, showcasing classical Jiangnan eaves and Shanghai apothecary heritage."
    },
    {
      id: "lzh-x-12",
      zh: "天津达仁堂",
      targetFile: "assets/images/brands/x-12.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Darentang Ancient Culture Street Tianjin", "Tianjin Darentang historic pharmacy building", "Darentang Chinese Medicine Museum Tianjin"],
      visualMustShowEn: "Tianjin Darentang historic Republican-era apothecary building on Ancient Culture Street or Darentang museum display",
      captionVi: "Thiên Tân Đạt Nhân Đường do dòng họ Lạc sáng lập năm 1914, kết hợp truyền thống bào chế kinh kỳ với kiến trúc thương phố Thiên Tân đầu thế kỷ XX.",
      captionEn: "Tianjin Darentang founded by the Yue family in 1914, blending imperial apothecary traditions with early twentieth-century Tianjin commercial architecture."
    },
    {
      id: "lzh-x-13",
      zh: "济南宏济堂",
      targetFile: "assets/images/brands/x-13.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Hongjitang Jinan Shandong historic pharmacy", "Hongjitang Museum Jinan Shandong", "Hongjitang traditional courtyard architecture Jinan"],
      visualMustShowEn: "Jinan Hongjitang traditional brick-and-timber courtyard pharmacy or Hongjitang apothecary cultural museum in Shandong",
      captionVi: "Tế Nam Hoành Tế Đường (Sơn Đông) thành lập năm 1907 bởi Lạc Kính Vũ, nổi tiếng với di sản bào chế cổ truyền và khu bảo tàng kiến trúc Tề Lỗ.",
      captionEn: "Jinan Hongjitang of Shandong, founded in 1907 by Yue Jingyu and preserved as a landmark of Qilu apothecary craftsmanship and architecture."
    },
    {
      id: "lzh-x-14",
      zh: "重庆桐君阁",
      targetFile: "assets/images/brands/x-14.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Tongjunge historic pharmacy Chongqing", "Tongjunge apothecary heritage hall Chongqing", "Tongjunge traditional Chinese signboard Chongqing"],
      visualMustShowEn: "Chongqing Tongjunge historic apothecary facade, traditional gilded signboard, or Bayu herbal heritage exhibition hall",
      captionVi: "Trùng Khánh Đồng Quân Các thành lập năm 1908 bên sông Gia Lăng, lưu giữ kỹ nghệ bào chế thảo mộc truyền thống vùng Ba Thục.",
      captionEn: "Chongqing Tongjunge established in 1908, preserving over a century of Bayu regional botanical preparation heritage."
    },
    {
      id: "lzh-x-15",
      zh: "广州王老吉",
      targetFile: "assets/images/brands/x-15.jpg",
      wikidataQid: "Q837558",
      wikimediaQueries: ["Wanglaoji herbal tea museum Guangzhou", "Wong Lo Kat red can herbal beverage", "Wanglaoji Liangcha historic shop Guangzhou"],
      visualMustShowEn: "Wanglaoji Liangcha herbal beverage museum display, traditional copper tea urn, or red Wong Lo Kat cans",
      captionVi: "Vương Lão Cát Quảng Châu — thương hiệu trà thảo mộc Lương Trà Lĩnh Nam ra đời từ thời Đạo Quang năm 1828.",
      captionEn: "Guangzhou Wanglaoji, historic Lingnan botanical beverage brand founded in 1828 and known for traditional Liangcha."
    },
    {
      id: "lzh-x-18",
      zh: "北京六必居",
      targetFile: "assets/images/brands/x-18.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Liubiju Pickle Museum Qianmen Beijing", "Liubiju historic signboard Dashilar Beijing", "Liubiju fermented sauce jars Beijing"],
      visualMustShowEn: "Historic Liubiju storefront facade on Liangshidian Street near Qianmen with calligraphy plaque or stoneware pickle jars",
      captionVi: "Lục Tất Cư Bắc Kinh — hiệu tương và dưa muối lên men truyền thống tại khu Tiền Môn từ thời nhà Minh.",
      captionEn: "Beijing Liubiju, historic Qianmen pickle and fermented sauce house operating since the Ming dynasty."
    },
    {
      id: "lzh-x-22",
      zh: "天津狗不理",
      targetFile: "assets/images/brands/x-22.jpg",
      wikidataQid: "Q1540169",
      wikimediaQueries: ["Goubuli Baozi restaurant Tianjin Shandong Road", "Goubuli steamed buns bamboo basket Tianjin", "Tianjin Goubuli historic flagship signboard"],
      visualMustShowEn: "Goubuli flagship restaurant facade in Tianjin or traditional eighteen-pleat steamed buns in bamboo baskets",
      captionVi: "Cẩu Bất Lý Thiên Tân — thương hiệu bánh bao hấp 18 nếp gấp trứ danh thành lập năm 1858.",
      captionEn: "Tianjin Goubuli, historic steamed bun house founded in 1858 renowned for hand-pleated baozi."
    },
    {
      id: "lzh-x-23",
      zh: "镇江恒顺",
      targetFile: "assets/images/brands/x-23.jpg",
      wikidataQid: "Q10969596",
      wikimediaQueries: ["Hengshun Vinegar Museum Zhenjiang", "Zhenjiang Hengshun aromatic vinegar jars", "Chinkiang Hengshun black vinegar bottle"],
      visualMustShowEn: "Hengshun Vinegar Museum fermentation jars in Zhenjiang or authentic Hengshun aromatic black vinegar bottles",
      captionVi: "Hằng Thuận Trấn Giang — thương hiệu giấm đen lên men đặc sản Giang Tô thành lập năm 1840.",
      captionEn: "Zhenjiang Hengshun, historic Jiangsu black vinegar brewer established in 1840 using solid-state fermentation."
    },
    {
      id: "lzh-x-24",
      zh: "嘉兴五芳斋",
      targetFile: "assets/images/brands/x-24.jpg",
      wikidataQid: "Q10881962",
      wikimediaQueries: ["Wufangzhai zongzi restaurant Jiaxing", "Jiaxing Wufangzhai bamboo leaf zongzi", "Wufangzhai Museum Jiaxing Zhejiang"],
      visualMustShowEn: "Wufangzhai flagship shop in Jiaxing or hand-wrapped reed-leaf glutinous rice zongzi",
      captionVi: "Ngũ Phương Trai Gia Hưng — danh hiệu bánh ú lá tre (Tống Tử) thủ công vùng Giang Nam thành lập năm 1921.",
      captionEn: "Jiaxing Wufangzhai, celebrated Jiangnan culinary brand founded in 1921 specializing in hand-wrapped zongzi."
    },
    {
      id: "lzh-x-25",
      zh: "西安老孙家",
      targetFile: "assets/images/brands/x-25.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Lao Sun Jia Yangrou Paomo Xian", "Xian Laosunjia historic restaurant signboard", "Yangrou Paomo bowl Lao Sun Jia Xian"],
      visualMustShowEn: "Lao Sun Jia historic restaurant exterior in Xian or traditional crumbled flatbread mutton soup bowl",
      captionVi: "Lão Tôn Gia Tây An — hiệu ẩm thực Hồi giáo nổi tiếng với món bánh mì bẻ hầm thịt cừu Dương Nhục Phao Mô từ năm 1898.",
      captionEn: "Xian Lao Sun Jia, historic restaurant founded in 1898 famous for traditional Yangrou Paomo flatbread soup."
    },
    {
      id: "lzh-x-26",
      zh: "上海老饭店",
      targetFile: "assets/images/brands/x-26.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Shanghai Old Restaurant Yuyuan Fuyou Road", "Shanghai Lao Fandian historic building facade", "Shanghai Old Restaurant Benbang cuisine"],
      visualMustShowEn: "Shanghai Old Restaurant historic multi-story timber-style facade near Yuyuan Garden with vertical plaque",
      captionVi: "Thượng Hải Lão Phạn Điếm — cái nôi ẩm thực Bản Bang Thượng Hải bên Dự Viên thành lập năm 1875.",
      captionEn: "Shanghai Old Restaurant near Yuyuan Garden, landmark custodian of traditional Benbang cuisine since 1875."
    },
    {
      id: "lzh-x-27",
      zh: "苏州松鹤楼",
      targetFile: "assets/images/brands/x-27.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Songhelou Restaurant Guanqian Street Suzhou", "Suzhou Songhelou historic plaque facade", "Songhelou Squirrel-shaped Mandarin Fish"],
      visualMustShowEn: "Songhelou historic restaurant facade on Guanqian Street in Suzhou or classic Squirrel-shaped Mandarin Fish dish",
      captionVi: "Tùng Hạc Lâu Tô Châu — danh quán ẩm thực Tô Bang trên phố Quan Tiền từ thời Càn Long năm 1757.",
      captionEn: "Suzhou Songhelou on Guanqian Street, classic Suzhou culinary house dating back to 1757."
    },
    {
      id: "lzh-x-28",
      zh: "福州聚春园",
      targetFile: "assets/images/brands/x-28.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Juchunyuan Restaurant Dongjiekou Fuzhou", "Fuzhou Juchunyuan Buddha Jumps Over the Wall jar", "Juchunyuan historic building Fuzhou"],
      visualMustShowEn: "Juchunyuan restaurant facade in Fuzhou or glazed clay jar serving Fotiaoqiang Fujian banquet soup",
      captionVi: "Tụ Xuân Viên Phúc Châu — thương hiệu ẩm thực Mân Thái thành lập năm 1865, nơi khởi nguồn món Phật Khiêu Tường.",
      captionEn: "Fuzhou Juchunyuan, historic Fujian culinary house established in 1865 and birthplace of Fotiaoqiang."
    },
    {
      id: "lzh-x-29",
      zh: "长沙火宫殿",
      targetFile: "assets/images/brands/x-29.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Huogongdian Fire Palace Pozi Street Changsha", "Changsha Huogongdian archway temple facade", "Huogongdian Hunan snacks hall Changsha"],
      visualMustShowEn: "Huogongdian historic ceremonial archway and courtyard facade on Pozi Street in Changsha",
      captionVi: "Hỏa Cung Điện Trường Sa — quần thể miếu hội và không gian ẩm thực truyền thống Hồ Nam trên phố Pha Tử.",
      captionEn: "Changsha Huogongdian on Pozi Street, historic temple-fair complex renowned for traditional Hunan culinary heritage."
    },
    {
      id: "lzh-x-30",
      zh: "佛山海天",
      targetFile: "assets/images/brands/x-30.jpg",
      wikidataQid: "Q15911419",
      wikimediaQueries: ["Haitian Flavouring soy sauce brewing jars Foshan", "Haday soy sauce museum Gaoming Foshan", "Foshan Haitian traditional sun-brewed soy sauce"],
      visualMustShowEn: "Haitian Flavouring sun-fermentation yard in Foshan or traditional stoneware soy sauce brewing vats",
      captionVi: "Hải Thiên Phật Sơn — thương hiệu nước tương lên men kế thừa các xưởng cổ phường tương Phật Sơn từ thời Càn Long.",
      captionEn: "Foshan Haitian (Haday), historic Guangdong soy sauce brewer rooted in Qing-era Foshan fermentation yards."
    },
    {
      id: "lzh-x-33",
      zh: "泸州老窖",
      targetFile: "assets/images/brands/x-33.jpg",
      wikidataQid: "Q10935112",
      wikimediaQueries: ["Luzhou Laojiao 1573 National Treasure Cellars", "Luzhou Laojiao historic fermentation pits Sichuan", "Luzhou Laojiao Museum Sichuan"],
      visualMustShowEn: "Luzhou Laojiao 1573 earthen fermentation pits in Sichuan or historic distillery hall signage",
      captionVi: "Lô Châu Lão Giáo Tứ Xuyên — hầm ủ đất cổ liên tục hoạt động từ năm 1573, đại diện dòng bạch tửu Nồng Hương.",
      captionEn: "Luzhou Laojiao in Sichuan, famed for earthen fermentation cellars in continuous use since 1573."
    },
    {
      id: "lzh-x-34",
      zh: "杏花村汾酒",
      targetFile: "assets/images/brands/x-34.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Xinghuacun Fenjiu Distillery Fenyang Shanxi", "Fenjiu Museum pottery jars Shanxi", "Xinghuacun Fenjiu historic archway Fenyang"],
      visualMustShowEn: "Xinghuacun Fenjiu distillery gate in Fenyang or buried ceramic fermentation vessels in the Fenjiu Museum",
      captionVi: "Hạnh Hoa Thôn Phần Tửu Sơn Tây — danh tửu Thanh Hương ủ trong vò gốm chôn đất tại Phần Dương.",
      captionEn: "Xinghuacun Fenjiu of Fenyang, Shanxi, historic light-aroma baijiu fermented in buried ceramic jars."
    },
    {
      id: "lzh-x-36",
      zh: "青岛啤酒",
      targetFile: "assets/images/brands/x-36.jpg",
      wikidataQid: "Q704352",
      wikimediaQueries: ["Tsingtao Beer Museum Dengzhou Road Qingdao", "Tsingtao Brewery historic red brick building 1903", "Tsingtao Brewery copper brewing kettles Qingdao"],
      visualMustShowEn: "Historic 1903 red-brick Tsingtao Brewery building on Dengzhou Road or vintage copper brewing vats in the museum",
      captionVi: "Bia Thanh Đảo Sơn Đông — nhà máy bia cổ xây dựng năm 1903 và Bảo tàng Bia Thanh Đảo trên đường Đăng Châu.",
      captionEn: "Tsingtao Brewery in Qingdao, historic 1903 red-brick brewery and beer museum on Dengzhou Road."
    },
    {
      id: "lzh-x-37",
      zh: "烟台张裕",
      targetFile: "assets/images/brands/x-37.jpg",
      wikidataQid: "Q1062052",
      wikimediaQueries: ["Changyu Wine Culture Museum Yantai", "Yantai Changyu underground wine cellar oak barrels", "Changyu Pioneer Wine Company historic building Yantai"],
      visualMustShowEn: "Changyu Wine Culture Museum historic building in Yantai or century-old underground oak barrel cellar",
      captionVi: "Trương Dụ Yên Đài — hãng rượu vang công nghiệp đầu tiên của Trung Quốc thành lập năm 1892 với hầm thùng gỗ sồi cổ.",
      captionEn: "Yantai Changyu Pioneer Wine Company, founded in 1892 with China's oldest underground oak wine cellars."
    },
    {
      id: "lzh-x-40",
      zh: "黄山谢裕大",
      targetFile: "assets/images/brands/x-40.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Xieyuda Tea Museum Huangshan Anhui", "Huangshan Maofeng tea leaves Huizhou", "Huizhou Xieyuda historic tea house"],
      visualMustShowEn: "Xieyuda Tea Museum in Huangshan or freshly processed Huangshan Maofeng green tea leaves",
      captionVi: "Tạ Dụ Đại Hoàng Sơn — trà trang Huy Châu thành lập năm 1875, nơi định hình dòng trà xanh Hoàng Sơn Mao Phong.",
      captionEn: "Huangshan Xieyuda, historic Huizhou tea house founded in 1875 and creator of Huangshan Maofeng green tea."
    },
    {
      id: "lzh-x-41",
      zh: "安溪八马茶业",
      targetFile: "assets/images/brands/x-41.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Anxi Tieguanyin tea plantation Fujian", "Anxi oolong tea roasting bamboo basket", "Tieguanyin rolled tea leaves Anxi Fujian"],
      visualMustShowEn: "Anxi Tieguanyin hillside tea terraces or tightly rolled emerald oolong tea leaves being roasted in bamboo baskets",
      captionVi: "Bát Mã Trà Nghiệp An Khê — thương hiệu trà Ô Long Thiết Quan Âm kế thừa kỹ nghệ sao trà truyền thống Phúc Kiến.",
      captionEn: "Anxi Bama Tea, Fujian oolong heritage house preserving traditional Tieguanyin rolling and roasting craft."
    },
    {
      id: "lzh-x-42",
      zh: "勐海大益茶",
      targetFile: "assets/images/brands/x-42.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Menghai Tea Factory Puerh tea cake Yunnan", "Dayi Puerh tea cake wrapper 7542", "Menghai Puerh tea pressing workshop Xishuangbanna"],
      visualMustShowEn: "Traditional Menghai Puerh compressed tea cake wrapped in cotton paper or Menghai tea pressing workshop",
      captionVi: "Đại Ích Trà Mãnh Hải — thương hiệu trà Phổ Nhĩ ép bánh từ xưởng trà Mãnh Hải (Vân Nam) thành lập năm 1940.",
      captionEn: "Menghai Dayi Tea, flagship Yunnan Puerh tea producer originating from the 1940 Menghai Tea Factory."
    },
    {
      id: "lzh-x-43",
      zh: "凤翔西凤酒",
      targetFile: "assets/images/brands/x-43.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Xifengjiu Jiuhai wicker storage container Shaanxi", "Xifeng Liquor Distillery Fengxiang Baoji", "Xifengjiu baijiu bottle Shaanxi"],
      visualMustShowEn: "Traditional Xifengjiu wicker-and-hemp-paper Jiuhai storage vats in Fengxiang or classic Xifengjiu bottles",
      captionVi: "Tây Phượng Tửu Phượng Tường — danh tửu Phượng Hương Thiểm Tây nổi tiếng với kỹ nghệ ủ trong thùng đan Tửu Hải cổ.",
      captionEn: "Fengxiang Xifengjiu of Shaanxi, historic phoenix-aroma liquor matured in woven Jiuhai storage containers."
    },
    {
      id: "lzh-x-44",
      zh: "桂林三花酒",
      targetFile: "assets/images/brands/x-44.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Guilin Sanhua Liquor Xiangshan Cave cellar", "Guilin Sanhuajiu rice liquor pottery jars", "Guilin Sanhua rice baijiu museum"],
      visualMustShowEn: "Rows of ceramic rice-liquor aging jars inside Guilin's karst cave cellars for Sanhuajiu",
      captionVi: "Quế Lâm Tam Hoa Tửu — đại diện dòng rượu gạo Mễ Hương Quảng Tây ủ mát tự nhiên trong hang núi đá vôi Tượng Sơn.",
      captionEn: "Guilin Sanhuajiu, signature Guangxi rice-aroma liquor aged in stoneware jars inside karst caves."
    },
    {
      id: "lzh-x-45",
      zh: "宿迁洋河",
      targetFile: "assets/images/brands/x-45.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Yanghe Distillery historic cellar Suqian Jiangsu", "Yanghe Blue Classic baijiu bottle", "Suqian Yanghe liquor museum fermentation hall"],
      visualMustShowEn: "Yanghe Distillery historic brick cellars in Suqian or ceramic storage jars in the Yanghe liquor museum",
      captionVi: "Dương Hà Túc Thiên — danh tửu Giang Hoài nổi tiếng với dòng rượu Miên Nhu truyền thống tại tỉnh Giang Tô.",
      captionEn: "Suqian Yanghe Distillery in Jiangsu, renowned for its mellow Jianghuai-style baijiu brewing heritage."
    },
    {
      id: "lzh-x-50",
      zh: "杭州王星记",
      targetFile: "assets/images/brands/x-50.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Wangxingji folding fan museum Hangzhou", "Wangxingji black paper bamboo fan Hangzhou", "Hangzhou Wangxingji sandalwood folding fan"],
      visualMustShowEn: "Handcrafted Wangxingji black-paper or pierced sandalwood folding fan displayed in Hangzhou",
      captionVi: "Vương Tinh Ký Hàng Châu — xưởng quạt gấp giấy đen và quạt gỗ đàn hương điêu khắc thủ công thành lập năm 1875.",
      captionEn: "Hangzhou Wangxingji, heritage fan workshop founded in 1875 celebrated for black-paper and sandalwood folding fans."
    },
    {
      id: "lzh-x-51",
      zh: "泾县红星宣纸",
      targetFile: "assets/images/brands/x-51.jpg",
      wikidataQid: "",
      wikimediaQueries: ["China Xuan Paper Museum Jingxian Anhui", "Traditional Xuan paper making screen Jingxian", "Hongxing Xuan paper drying wall Jingxian"],
      visualMustShowEn: "Artisans lifting wet Xuan paper sheets on bamboo screens or drying paper on heated walls in Jingxian, Anhui",
      captionVi: "Hồng Tinh Tuyên Chỉ Kính Huyện — xưởng sản xuất giấy Tuyên Chỉ thủ công từ vỏ cây Thanh Đàn (di sản UNESCO) tại An Huy.",
      captionEn: "Jingxian Hongxing Xuan Paper in Anhui, master producer of UNESCO-listed handmade calligraphy paper from Wingceltis bark."
    },
    {
      id: "lzh-x-52",
      zh: "上海老凤祥",
      targetFile: "assets/images/brands/x-52.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Lao Feng Xiang flagship store Nanjing Road Shanghai", "Lao Feng Xiang gold jewelry filigree craft", "Shanghai Lao Feng Xiang historic signboard"],
      visualMustShowEn: "Lao Feng Xiang historic flagship facade on Nanjing Road in Shanghai or traditional gold filigree craft display",
      captionVi: "Lão Phượng Tường Thượng Hải — hiệu kim hoàn truyền thống thành lập năm 1848 nổi tiếng với kỹ nghệ chạm khắc vàng bạc.",
      captionEn: "Shanghai Lao Feng Xiang, historic gold and jewelry house founded in 1848 noted for traditional filigree metalwork."
    },
    {
      id: "lzh-x-53",
      zh: "上海英雄金笔",
      targetFile: "assets/images/brands/x-53.jpg",
      wikidataQid: "Q10935160",
      wikimediaQueries: ["Hero 100 gold nib fountain pen Shanghai", "Shanghai Hero Pen Company fountain pen", "Hero 616 fountain pen classic Chinese"],
      visualMustShowEn: "Classic Shanghai Hero 100 hooded gold-nib fountain pen showing metal cap and barrel",
      captionVi: "Anh Hùng Kim Bút Thượng Hải — thương hiệu bút máy ngòi vàng kinh điển gắn liền ký ức học đường Trung Quốc từ năm 1931.",
      captionEn: "Shanghai Hero Fountain Pen, iconic Chinese gold-nib pen maker established in 1931."
    },
    {
      id: "lzh-x-54",
      zh: "湖州善琏湖笔",
      targetFile: "assets/images/brands/x-54.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Shanlian Huzhou calligraphy brush making", "Huzhou Hubi writing brush museum Zhejiang", "Traditional Chinese Hubi goat hair brush"],
      visualMustShowEn: "Handmade Huzhou calligraphy brushes from Shanlian showing bamboo shafts and fine tapered hair tips",
      captionVi: "Thiện Liễn Hồ Bút Hồ Châu — cái nôi nghề làm bút lông thư pháp Hồ Bút nổi tiếng với bốn chuẩn Tiêm–Tề–Viên–Kiện.",
      captionEn: "Shanlian Hubi of Huzhou, historic Zhejiang workshop crafting fine calligraphy brushes prized for tip precision."
    },
    {
      id: "lzh-x-55",
      zh: "安徽胡开文墨",
      targetFile: "assets/images/brands/x-55.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Hu Kaiwen inkstick carving mold Shexian Anhui", "Huizhou pine soot inkstick gold leaf", "Anhui Hu Kaiwen Ink Factory workshop"],
      visualMustShowEn: "Carved wooden inkstick molds and gilded Huizhou pine-soot inksticks at the Anhui Hu Kaiwen workshop",
      captionVi: "Hồ Khai Văn Mặc An Huy — xưởng chế tác thỏi mực tùng yên và du yên chạm khắc tinh xảo vùng Huy Châu từ năm 1765.",
      captionEn: "Anhui Hu Kaiwen Ink, historic Huizhou inkstick workshop founded in 1765 known for gilded pine-soot inksticks."
    },
    {
      id: "lzh-x-56",
      zh: "苏州宋锦",
      targetFile: "assets/images/brands/x-56.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Suzhou Song brocade Songjin silk textile", "Suzhou Silk Museum Song brocade loom", "Traditional Chinese Songjin geometric silk pattern"],
      visualMustShowEn: "Intricate geometric-patterned Suzhou Song brocade silk textile or traditional drawloom weaving display",
      captionVi: "Tô Châu Tống Cẩm — dòng gấm lụa hoa văn hình học tinh xảo khởi nguồn thời Tống, được mệnh danh đứng đầu danh cẩm Trung Hoa.",
      captionEn: "Suzhou Song Brocade (Songjin), refined geometric silk weaving heritage originating in the Song dynasty."
    },
    {
      id: "lzh-x-57",
      zh: "景德镇景德瓷厂",
      targetFile: "assets/images/brands/x-57.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Jingdezhen Ancient Kiln porcelain painting workshop", "Jingdezhen blue and white porcelain kiln craft", "Jingdezhen ceramic factory porcelain vessels"],
      visualMustShowEn: "Porcelain artisans hand-painting cobalt blue patterns on unfired vessels in a Jingdezhen ceramic factory",
      captionVi: "Cảnh Đức Từ Xưởng Cảnh Đức Trấn — xưởng gốm sứ kế thừa kỹ nghệ vẽ lam thanh hoa và nung lò truyền thống Giang Tây.",
      captionEn: "Jingdezhen Jingde Porcelain Factory, historic Jiangxi ceramic atelier preserving hand-painted blue-and-white porcelain."
    },
    {
      id: "lzh-x-58",
      zh: "北京一得阁",
      targetFile: "assets/images/brands/x-58.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Yidege ink shop Liulichang Beijing", "Beijing Yidege liquid calligraphy ink bottle", "Liulichang Yidege historic signboard"],
      visualMustShowEn: "Yidege historic storefront on Liulichang Cultural Street in Beijing or classic Yidege liquid calligraphy ink bottle",
      captionVi: "Nhất Đắc Các Bắc Kinh — hiệu mực nước thư pháp đầu tiên trên phố Lưu Ly Xưởng sáng chế năm 1865.",
      captionEn: "Beijing Yidege on Liulichang Street, pioneering maker of ready-to-use liquid calligraphy ink since 1865."
    },
    {
      id: "lzh-x-59",
      zh: "天津杨柳青年画",
      targetFile: "assets/images/brands/x-59.jpg",
      wikidataQid: "Q837574",
      wikimediaQueries: ["Yangliuqing woodblock New Year print Tianjin", "Yangliuqing New Year Painting workshop carving", "Traditional Yangliuqing Nianhua folk art"],
      visualMustShowEn: "Colorful hand-painted Yangliuqing woodblock New Year print (Nianhua) or artisan carving pearwood printing blocks",
      captionVi: "Tranh Tết Dương Liễu Thanh Thiên Tân — dòng tranh khắc gỗ tô màu thủ công nổi tiếng miền Bắc từ cuối thời Minh.",
      captionEn: "Tianjin Yangliuqing Woodblock New Year Prints, historic folk art combining woodblock outlines with hand-painted pigments."
    },
    {
      id: "lzh-x-60",
      zh: "沈阳萃华金店",
      targetFile: "assets/images/brands/x-60.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Cuihua Gold Shop Zhongjie Shenyang", "Shenyang Cuihua historic jewelry building", "Cuihua traditional Chinese gold filigree craft"],
      visualMustShowEn: "Historic Cuihua Gold Shop facade on Zhongjie Street in Shenyang or traditional gold filigree ornament display",
      captionVi: "Tụy Hoa Kim Điếm Thẩm Dương — hiệu vàng bạc lâu đời vùng Đông Bắc trên phố Trung Nhai thành lập năm 1895.",
      captionEn: "Shenyang Cuihua Gold Shop on Zhongjie Street, historic Northeast Chinese goldsmith established in 1895."
    }
  ]
};

var CCE_V8_PACK2_B_BRANDS = [
  {
    id: "v6-lzh-37",
    zh: "天福号",
    targetFile: "assets/images/brands/37.jpg",
    wikidataQid: "Q15908982",
    wikimediaQueries: ["Tianfuhao braised pork elbow Beijing", "Tianfuhao Qianmen Beijing historic shop", "Beijing Tianfuhao Jiangzhourou deli"],
    visualMustShowEn: "Tianfuhao historic Beijing deli signboard or glossy braised pork hock dish",
    captionVi: "Thiên Phúc Hào Bắc Kinh — thương hiệu thịt kho tương cổ truyền ra đời năm 1738 thời Càn Long.",
    captionEn: "Tianfuhao of Beijing, historic culinary house founded in 1738 renowned for soy-braised pork hock."
  },
  {
    id: "v6-lzh-39",
    zh: "六味斋",
    targetFile: "assets/images/brands/39.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Liuweizhai Taiyuan Shanxi braised meat", "Liuweizhai historic storefront Taiyuan", "Shanxi Liuweizhai spiced braised pork"],
    visualMustShowEn: "Liuweizhai Taiyuan storefront plaque or traditional Shanxi spiced braised meat platter",
    captionVi: "Lục Vị Trai Thái Nguyên — hiệu thịt kho ngũ vị lâu đời của Sơn Tây thành lập năm 1738.",
    captionEn: "Liuweizhai of Taiyuan, Shanxi heritage braised meat brand established in 1738."
  },
  {
    id: "v6-lzh-40",
    zh: "宁化府益源庆",
    targetFile: "assets/images/brands/40.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Ninghuafu Yiyuanqing vinegar shop Taiyuan", "Shanxi mature vinegar ceramic vats Taiyuan", "Ninghuafu old vinegar courtyard Shanxi"],
    visualMustShowEn: "Ninghuafu Yiyuanqing historic Taiyuan vinegar courtyard or earthenware aging vats",
    captionVi: "Ninh Hóa Phủ Ích Nguyên Khánh — xưởng giấm lão trần Sơn Tây có lịch sử từ năm 1377.",
    captionEn: "Ninghuafu Yiyuanqing of Taiyuan, Shanxi aged sorghum vinegar brewery dating back to 1377."
  },
  {
    id: "v6-lzh-41",
    zh: "老鼎丰",
    targetFile: "assets/images/brands/41.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Laodingfeng Harbin historic pastry shop", "Laodingfeng Harbin Daowai baroque building", "Laodingfeng traditional Chinese mooncakes Harbin"],
    visualMustShowEn: "Laodingfeng historic Harbin bakery facade or stamped traditional northeastern pastries",
    captionVi: "Lão Đỉnh Phong Cáp Nhĩ Tân — hiệu bánh ngọt và bánh trung thu danh tiếng vùng Đông Bắc từ năm 1911.",
    captionEn: "Laodingfeng of Harbin, heritage pastry and mooncake bakery founded in 1911."
  },
  {
    id: "v6-lzh-42",
    zh: "吉林中一参茸",
    targetFile: "assets/images/brands/42.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Changbai Mountain Panax ginseng root Jilin", "Jilin ginseng heritage museum display", "Dried Panax ginseng wooden box Changbai"],
    visualMustShowEn: "Whole Changbai Mountain Panax ginseng roots displayed in a traditional wooden craft box",
    captionVi: "Cát Lâm Trung Nhất Sâm Nhung — nghề thu hái và bảo quản nhân sâm Trường Bạch Sơn truyền thống.",
    captionEn: "Jilin Zhongyi Ginseng Heritage, representing traditional Changbai Mountain botanical cultivation and curing craft."
  },
  {
    id: "v6-lzh-43",
    zh: "李连贵熏肉大饼",
    targetFile: "assets/images/brands/43.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Li Liangui smoked pork flatbread Shenyang", "Xunrou Dabing flaky layered pancake Liaoning", "Li Liangui historic restaurant plaque Shenyang"],
    visualMustShowEn: "Flaky pan-griddled dabing flatbread served with sliced smoked pork and scallion sauce",
    captionVi: "Lý Liên Quý Huân Nhục Đại Bính — món bánh nướng nhiều lớp kẹp thịt hun khói nổi tiếng vùng Đông Bắc từ năm 1842.",
    captionEn: "Li Liangui Smoked Pork Flatbread, northeastern culinary tradition founded in 1842."
  },
  {
    id: "v6-lzh-44",
    zh: "保定槐茂酱园",
    targetFile: "assets/images/brands/44.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Baoding Huaimao pickle sauce workshop Hebei", "Huaimao sweet flour paste ceramic jars", "Baoding traditional fermented pickles earthen crocks"],
    visualMustShowEn: "Traditional earthenware fermentation crocks or packaged Baoding Huaimao sweet paste and pickles",
    captionVi: "Bảo Định Hòe Mậu Tương Viên — cơ sở làm tương ngọt và dưa muối cổ truyền Hà Bắc thành lập năm 1671.",
    captionEn: "Baoding Huaimao Sauce Workshop in Hebei, historic fermented paste and pickle maker since 1671."
  },
  {
    id: "v6-lzh-45",
    zh: "麦香村",
    targetFile: "assets/images/brands/45.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Hohhot traditional mutton shaomai bamboo steamer", "Maixiangcun Hohhot historic tea house", "Inner Mongolia Hohhot shaomai dumplings"],
    visualMustShowEn: "Steaming bamboo baskets of pleated Hohhot mutton shaomai dumplings at a traditional tea house",
    captionVi: "Mạch Hương Thôn Hô Hòa Hạo Đặc — thương hiệu xíu mại thịt cừu và bánh điểm tâm Nội Mông từ năm 1737.",
    captionEn: "Maixiangcun of Hohhot, Inner Mongolia heritage house known since 1737 for mutton shaomai and pastries."
  },
  {
    id: "v6-lzh-46",
    zh: "河套酒业",
    targetFile: "assets/images/brands/46.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Hetao baijiu distillery museum Inner Mongolia", "Hetao Laojiao baijiu porcelain bottle", "Inner Mongolia sorghum grain baijiu fermentation pit"],
    visualMustShowEn: "Hetao baijiu ceramic bottle or traditional grain fermentation cellars in Bayannur",
    captionVi: "Hà Sáo Tửu Nghiệp — nhà chưng cất bạch tửu vùng bình nguyên Hà Sáo Nội Mông gắn với truyền thống nấu rượu thảo nguyên.",
    captionEn: "Hetao Distillery of Bayannur, Inner Mongolia grain baijiu producer rooted in Yellow River bend brewing craft."
  },
  {
    id: "v6-lzh-47",
    zh: "胡开文墨庄",
    targetFile: "assets/images/brands/47.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Hu Kaiwen Ink Factory Tunxi Huangshan workshop", "Gilded Chinese Huizhou inksticks calligraphy display", "Hu Kaiwen Ink Studio historic storefront Anhui"],
    visualMustShowEn: "Historic Tunxi Hu Kaiwen ink workshop counter displaying gold-painted decorative inksticks",
    captionVi: "Hồ Khai Văn Mặc Trang — danh hiệu mực thỏi Huy Châu thành lập năm 1765 nổi tiếng với kỹ nghệ vẽ vàng trên mực.",
    captionEn: "Hu Kaiwen Ink Studio of Tunxi, Anhui calligraphy ink workshop established in 1765."
  },
  {
    id: "v6-lzh-48",
    zh: "曹素功墨庄",
    targetFile: "assets/images/brands/48.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Cao Sugong inkstick Shanghai museum collection", "Shanghai Zhouhuchen Caosugong calligraphy shop", "Antique Cao Sugong carved Chinese ink cake"],
    visualMustShowEn: "Carved black Cao Sugong inksticks bearing embossed calligraphy in a museum or Shanghai ink shop",
    captionVi: "Tào Tố Công Mặc Trang — hiệu mực cổ truyền khởi nguồn năm 1667 và phát triển rực rỡ tại Thượng Hải.",
    captionEn: "Cao Sugong Ink Studio, classical Chinese inkstick maker founded in 1667 and famed in Shanghai."
  },
  {
    id: "v6-lzh-49",
    zh: "恒顺醋业",
    targetFile: "assets/images/brands/49.jpg",
    wikidataQid: "Q10969596",
    wikimediaQueries: ["Zhenjiang Hengshun Vinegar Culture Museum", "Hengshun Zhenjiang aromatic black vinegar bottles", "Zhenjiang vinegar fermentation urns courtyard"],
    visualMustShowEn: "Rows of earthenware vinegar aging urns at the Zhenjiang Vinegar Culture Museum or Hengshun bottle",
    captionVi: "Hằng Thuận Thố Nghiệp — thương hiệu giấm thơm Trấn Giang (Giang Tô) thành lập năm 1840 với quy trình lên men rắn.",
    captionEn: "Hengshun Vinegar of Zhenjiang, Jiangsu solid-state fermented black vinegar brewery founded in 1840."
  },
  {
    id: "v6-lzh-51",
    zh: "泰康食品",
    targetFile: "assets/images/brands/51.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Taikang Food Company Nanjing Road Shanghai", "Shanghai Taikang biscuit bakery storefront", "Shanghai Wannianqing biscuits Taikang pastry"],
    visualMustShowEn: "Taikang Food flagship storefront on Nanjing East Road in Shanghai or traditional pastry counter",
    captionVi: "Thái Khang Thực Phẩm — hiệu bánh quy và thực phẩm lâu đời trên đại lộ Nam Kinh Thượng Hải từ năm 1914.",
    captionEn: "Taikang Food Company on Shanghai Nanjing Road, historic biscuit and pastry house since 1914."
  },
  {
    id: "v6-lzh-52",
    zh: "五芳斋",
    targetFile: "assets/images/brands/52.jpg",
    wikidataQid: "Q10881962",
    wikimediaQueries: ["Wufangzhai Jiaxing zongzi bamboo leaf dumplings", "Wufangzhai flagship store Jiaxing Zhejiang", "Chinese sticky rice zongzi wrapped bamboo leaves"],
    visualMustShowEn: "Hand-wrapped triangular bamboo-leaf zongzi sticky rice dumplings or Wufangzhai Jiaxing storefront",
    captionVi: "Ngũ Phương Trai Gia Hưng — thương hiệu bánh ú lá tre (tống tử) Chiết Giang thành lập năm 1921.",
    captionEn: "Wufangzhai of Jiaxing, Zhejiang heritage maker of bamboo-leaf zongzi rice dumplings since 1921."
  },
  {
    id: "v6-lzh-53",
    zh: "吴良材眼镜",
    targetFile: "assets/images/brands/53.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Wu Liangcai Optical Store Nanjing Road Shanghai", "Antique Chinese crystal spectacles Qing dynasty", "Wuliangcai eyeglasses historic Shanghai signboard"],
    visualMustShowEn: "Wu Liangcai Optical historic Shanghai storefront or antique Qing-era crystal lens spectacles",
    captionVi: "Ngô Lương Tài Nhãn Kính — hiệu kính mắt truyền thống Thượng Hải thành lập từ năm 1719 thời Khang Hy.",
    captionEn: "Wu Liangcai Optical of Shanghai, historic eyewear craftsman dating back to 1719."
  },
  {
    id: "v6-lzh-54",
    zh: "宜兴紫砂工艺厂",
    targetFile: "assets/images/brands/54.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Yixing Zisha clay teapot Dingshu workshop", "Yixing purple clay teapot artisan carving", "Yixing Ceramics Museum Zisha teapots"],
    visualMustShowEn: "Hand-shaped unglazed Yixing purple clay Zisha teapots on a ceramic workbench in Dingshu",
    captionVi: "Xưởng Thủ Công Tử Sa Nghi Hưng — trung tâm chế tác ấm đất sét tử sa Đinh Thục Trấn thành lập năm 1955.",
    captionEn: "Yixing Zisha Craft Factory in Dingshu, Jiangsu workshop dedicated to unglazed purple clay teapots since 1955."
  },
  {
    id: "v6-lzh-55",
    zh: "德馨斋",
    targetFile: "assets/images/brands/55.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Dexinzhai Jinan soy sauce fermentation vats", "Traditional sun-fermented soy sauce earthen jars Shandong", "Jinan heritage soy sauce vinegar brewing yard"],
    visualMustShowEn: "Open-air courtyard of sun-fermented soy sauce ceramic vats typical of Shandong brewing craft",
    captionVi: "Đức Hinh Trai Tế Nam — xưởng ủ nước tương và giấm phơi nắng cổ truyền Sơn Đông thành lập năm 1930.",
    captionEn: "Dexinzhai of Jinan, Shandong sun-brewed soy sauce and vinegar house established in 1930."
  },
  {
    id: "v6-lzh-56",
    zh: "开封第一楼",
    targetFile: "assets/images/brands/56.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Kaifeng Diyi Lou soup dumplings restaurant", "Kaifeng Guantangbao steamed soup buns basket", "Diyi Lou historic pavilion Kaifeng Henan"],
    visualMustShowEn: "Bamboo steamer of delicate pleated Kaifeng Guantangbao soup dumplings or Diyi Lou pavilion facade",
    captionVi: "Khai Phong Đệ Nhất Lâu — danh hiệu bánh bao canh (quán thang bao) Hà Nam kế thừa ẩm thực Biện Kinh từ năm 1922.",
    captionEn: "Kaifeng Diyi Lou in Henan, renowned since 1922 for thin-skinned pleated soup dumplings."
  },
  {
    id: "v6-lzh-57",
    zh: "杨裕兴",
    targetFile: "assets/images/brands/57.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Yang Yuxing noodle house Changsha Hunan", "Changsha traditional egg noodles soup bowl", "Hunan Yang Yuxing historic noodle signboard"],
    visualMustShowEn: "Yang Yuxing Changsha storefront plaque or steaming bowl of fine Hunan egg noodles with savory toppings",
    captionVi: "Dương Dụ Hưng Trường Sa — quán mì sợi trứng cổ truyền Hồ Nam thành lập năm 1894.",
    captionEn: "Yang Yuxing of Changsha, historic Hunan noodle house founded in 1894 famous for fine egg noodles."
  },
  {
    id: "v6-lzh-58",
    zh: "赵李桥茶厂",
    targetFile: "assets/images/brands/58.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Chibi Yangloudong compressed brick tea Hubei", "Chinese dark brick tea Qingzhuan embossed mold", "Yangloudong ancient tea street Chibi Hubei"],
    visualMustShowEn: "Embossed dark compressed Qingzhuan tea bricks or historic Yangloudong tea workshop in Chibi",
    captionVi: "Xưởng Trà Triệu Lý Kiều Xích Bích — di sản ép trà bánh Thanh Chuyên trên con đường trà cổ Dương Lâu Động từ thế kỷ XIX.",
    captionEn: "Zhaoliqiao Tea Factory in Chibi, Hubei producer of compressed Qingzhuan dark brick tea along the historic Tea Road."
  },
  {
    id: "v6-lzh-59",
    zh: "海天味业",
    targetFile: "assets/images/brands/59.jpg",
    wikidataQid: "Q15911419",
    wikimediaQueries: ["Foshan Haitian soy sauce fermentation tanks", "Haitian soy sauce museum Foshan Guangdong", "Guangdong sun-brewed soy sauce glass fermentation yard"],
    visualMustShowEn: "Haitian soy sauce sun-fermentation yard in Foshan or traditional Guangdong soy sauce bottles",
    captionVi: "Hải Thiên Vị Nghiệp Phật Sơn — thương hiệu nước tương kế thừa các phường tương cổ Quảng Đông từ thời Càn Long.",
    captionEn: "Haitian Flavoring of Foshan, Guangdong soy sauce maker tracing roots to Qianlong-era ancient sauce yards."
  },
  {
    id: "v6-lzh-60",
    zh: "陈太吉石湾陶艺",
    targetFile: "assets/images/brands/60.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Shiwan pottery Nanfeng Ancient Kiln Foshan", "Shiwan glazed ceramic figurine Foshan museum", "Chen Taiji Shiwan wine jar Foshan Guangdong"],
    visualMustShowEn: "Glazed Shiwan ceramic sculptures or traditional earthenware wine jars at Foshan Nanfeng Kiln",
    captionVi: "Trần Thái Cát Thạch Loan Đào Nghệ — giao thoa nghề gốm men Thạch Loan và chum rượu cổ Phật Sơn Quảng Đông.",
    captionEn: "Chen Taiji Shiwan Ceramic Heritage of Foshan, uniting expressive Shiwan glazed pottery with traditional wine jars."
  },
  {
    id: "v6-lzh-61",
    zh: "英记饼家",
    targetFile: "assets/images/brands/61.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Yeng Kee Bakery Macau historic shop", "Macau almond cookies charcoal baked pastry", "Traditional Cantonese almond biscuits Macau tin"],
    visualMustShowEn: "Yeng Kee Bakery Macau storefront or wooden-molded charcoal-baked Cantonese almond cookies",
    captionVi: "Anh Ký Bính Gia Ma Cao — hiệu bánh hạnh nhân và bánh ngọt Quảng Đông truyền thống thành lập năm 1928.",
    captionEn: "Yeng Kee Bakery of Macau, heritage confectionery founded in 1928 specializing in almond cookies."
  },
  {
    id: "v6-lzh-62",
    zh: "太平馆",
    targetFile: "assets/images/brands/62.jpg",
    wikidataQid: "Q7675776",
    wikimediaQueries: ["Tai Ping Koon Restaurant Guangzhou Beijing Road", "Tai Ping Koon Hong Kong historic restaurant sign", "Swiss chicken wings Tai Ping Koon soy sauce western"],
    visualMustShowEn: "Tai Ping Koon historic restaurant neon sign or classic glazed Swiss chicken wings dish",
    captionVi: "Thái Bình Quán Quảng Châu — nhà hàng ẩm thực Tây hóa theo khẩu vị Quảng Đông lâu đời nhất thành lập năm 1860.",
    captionEn: "Tai Ping Koon Restaurant, founded in Guangzhou in 1860 as a pioneer of Cantonese Soy Sauce Western cuisine."
  },
  {
    id: "v6-lzh-63",
    zh: "余仁生",
    targetFile: "assets/images/brands/63.jpg",
    wikidataQid: "Q5405295",
    wikimediaQueries: ["Eu Yan Sang historic shopfront Hong Kong", "Eu Yan Sang traditional wooden herb drawers", "Eu Yan Sang heritage signage Singapore Chinatown"],
    visualMustShowEn: "Eu Yan Sang heritage apothecary facade with gilded Chinese plaque or carved wooden botanical drawers",
    captionVi: "Dư Nhân Sinh — thương hiệu thảo mộc và giao thương dược liệu Hoa Kiều thành lập năm 1879 tại Đông Nam Á và Hồng Kông.",
    captionEn: "Eu Yan Sang, historic overseas Chinese botanical trading house founded in 1879 across Southeast Asia and Hong Kong."
  },
  {
    id: "v6-lzh-64",
    zh: "海南沉香古坊",
    targetFile: "assets/images/brands/64.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Aquilaria sinensis agarwood resin wood Hainan", "Chinese agarwood incense carving beads craft", "Traditional brass incense burner agarwood coil"],
    visualMustShowEn: "Resin-rich Aquilaria agarwood timber slices or hand-carved incense coils in a brass censer",
    captionVi: "Hải Nam Trầm Hương Cổ Phường — nghề tuyển hương, điêu khắc gỗ trầm và thưởng hương truyền thống đảo Hải Nam.",
    captionEn: "Hainan Agarwood Craft Workshop, preserving traditional resin-wood carving and classical incense appreciation."
  },
  {
    id: "v6-lzh-66",
    zh: "塔牌绍兴酒",
    targetFile: "assets/images/brands/66.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Shaoxing yellow rice wine clay jars Jianhu", "Pagoda Brand Shaoxing Huadiao wine jar", "Traditional Shaoxing huangjiu winter brewing cellar"],
    visualMustShowEn: "Sealed clay Huadiao rice wine jars stacked in a Shaoxing cellar near Jianhu Lake",
    captionVi: "Tháp Bài Thiệu Hưng Tửu — thương hiệu hoàng tửu ủ thủ công bằng nước hồ Giám tại Thiệu Hưng (Chiết Giang).",
    captionEn: "Pagoda Brand Shaoxing Wine, hand-brewed Zhejiang yellow rice wine aged in sealed earthenware jars."
  },
  {
    id: "v6-lzh-67",
    zh: "下关沱茶",
    targetFile: "assets/images/brands/67.jpg",
    wikidataQid: "Q8044162",
    wikimediaQueries: ["Xiaguan Tuocha bowl shaped Pu-erh tea Dali", "Yunnan compressed tuocha tea cake paper wrapper", "Xiaguan Tea Factory Dali Yunnan heritage"],
    visualMustShowEn: "Nest-shaped compressed Xiaguan Tuocha Pu-erh tea cakes with paper wrapping from Dali",
    captionVi: "Hạ Quan Đà Trà Đại Lý — thương hiệu trà Phổ Nhĩ ép hình bát (đà trà) Vân Nam nổi tiếng từ năm 1902.",
    captionEn: "Xiaguan Tuocha of Dali, Yunnan maker of compressed bowl-shaped Pu-erh tea since 1902."
  },
  {
    id: "v6-lzh-68",
    zh: "雷山苗银古作坊",
    targetFile: "assets/images/brands/68.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Leishan Miao silver headdress Guizhou artisan", "Miao silversmith forging filigree Guizhou", "Traditional Miao silver collar jewelry Qiandongnan"],
    visualMustShowEn: "Intricately hammered Miao silver horn headdress and filigree necklace crafted in Leishan",
    captionVi: "Lôi Sơn Miêu Ngân Cổ Tác Phường — nghệ thuật rèn chạm bạc thủ công tinh xảo của người Miêu Quý Châu.",
    captionEn: "Leishan Miao Silver Workshop in Guizhou, dedicated to hand-forged filigree silver headdresses and ornaments."
  },
  {
    id: "v6-lzh-70",
    zh: "陈昌银麻花",
    targetFile: "assets/images/brands/70.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Ciqikou Chen Mahua twisted fried dough Chongqing", "Chen Changyin Mahua shop Ciqikou ancient town", "Chinese mahua crispy twisted pastry pile"],
    visualMustShowEn: "Golden braided piles of crispy Mahua twisted dough pastries at Ciqikou Old Town",
    captionVi: "Trần Xương Ngân Ma Hoa — thương hiệu bánh quẩy vặn giòn phố cổ Từ Khí Khẩu Trùng Khánh từ năm 1907.",
    captionEn: "Chen Changyin Mahua of Ciqikou, Chongqing bakery famous since 1907 for braided crispy dough twists."
  },
  {
    id: "v6-lzh-72",
    zh: "酒泉夜光杯厂",
    targetFile: "assets/images/brands/72.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Jiuquan luminous jade cup Yeguangbei Gansu", "Qilian jade goblet translucent wine cup museum", "Chinese Yeguangbei carved serpentine jade cup"],
    visualMustShowEn: "Thin-walled translucent dark green Qilian jade Yeguangbei wine goblets from Jiuquan",
    captionVi: "Xưởng Dạ Quang Bôi Tửu Tuyền — nghề mài chén rượu ngọc Kỳ Liên mỏng thấu quang trên Hành lang Hà Tây.",
    captionEn: "Jiuquan Luminous Cup Factory in Gansu, crafting translucent Qilian jade wine goblets along the Hexi Corridor."
  },
  {
    id: "v6-lzh-73",
    zh: "塔尔寺藏香坊",
    targetFile: "assets/images/brands/73.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Kumbum Monastery Taer Si Tibetan incense Qinghai", "Traditional Tibetan herbal incense bundles drying", "Taer Monastery Qinghai butter sculpture incense craft"],
    visualMustShowEn: "Hand-rolled bundles of natural Tibetan botanical incense sticks drying at Kumbum Monastery",
    captionVi: "Tháp Nhĩ Tự Tạng Hương Phường — nghề se hương thảo mộc tự nhiên truyền thống tại Thanh Hải.",
    captionEn: "Taer Monastery Tibetan Incense Workshop in Qinghai, hand-rolling aromatic plateau botanical incense sticks."
  },
  {
    id: "v6-lzh-74",
    zh: "中宁枸杞老号",
    targetFile: "assets/images/brands/74.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Zhongning Ningxia Lycium barbarum goji berries drying", "Fresh red wolfberry fruit bush Ningxia", "Dried Ningxia goji berries woven bamboo tray"],
    visualMustShowEn: "Bright crimson Zhongning Lycium barbarum goji berries sun-drying on woven trays in Ningxia",
    captionVi: "Trung Ninh Câu Kỷ Lão Hào — di sản canh tác và phơi sấy kỷ tử vùng châu thổ sông Hoàng Hà Ninh Hạ.",
    captionEn: "Zhongning Goji Heritage House in Ningxia, showcasing traditional Yellow River basin wolfberry harvesting and drying."
  },
  {
    id: "v6-lzh-75",
    zh: "和田玉雕古坊",
    targetFile: "assets/images/brands/75.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Hotan nephrite mutton fat jade carving Xinjiang", "Chinese white Hetian jade pendant museum", "Xinjiang Hotan river nephrite jade pebbles"],
    visualMustShowEn: "Lustrous white Hetian nephrite jade carving or smooth alluvial jade pebbles from Xinjiang",
    captionVi: "Hòa Điền Ngọc Điêu Cổ Phường — nghệ thuật chế tác ngọc bích Hòa Điền trứ danh trên Con đường Tơ lụa Tân Cương.",
    captionEn: "Hotan Jade Carving Workshop in Xinjiang, preserving classical Silk Road nephrite lapidary artistry."
  },
  {
    id: "v6-lzh-76",
    zh: "尼木吞巴藏香坊",
    targetFile: "assets/images/brands/76.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Nyemo Tunba Tibetan incense watermill Tibet", "Hand extruded Tibetan cedar incense sticks drying", "Traditional Tibetan incense making Tunba village"],
    visualMustShowEn: "Wooden waterwheel cypress-pulp mill or hand-extruded Tibetan incense sticks drying in Tunba village",
    captionVi: "Ni Mộc Thôn Ba Tạng Hương Phường — nghề nghiền gỗ bách bằng cối nước làm nhang Tạng cổ truyền tại Tây Tạng.",
    captionEn: "Nyemo Tunba Tibetan Incense Workshop in Tibet, using wooden watermills to grind cypress pulp for traditional incense."
  },
  {
    id: "v6-lzh-01",
    zh: "盛锡福",
    targetFile: "assets/images/brands/01.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Shengxifu Hat Shop Wangfujing Beijing", "Shengxifu traditional Chinese hat making museum", "Beijing Shengxifu historic millinery signboard"],
    visualMustShowEn: "Shengxifu historic Wangfujing millinery storefront in Beijing or hand-blocked silk and felt hats",
    captionVi: "Thịnh Tích Phúc — hiệu chế tác mũ thủ công danh tiếng tại Vương Phủ Tỉnh Bắc Kinh thành lập năm 1911.",
    captionEn: "Shengxifu Hat Shop on Beijing Wangfujing Street, heritage milliner established in 1911."
  },
  {
    id: "v7-brand-101",
    zh: "龙泉沈广隆剑铺",
    targetFile: "assets/images/museum/goujian-sword.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Longquan Shen Guanglong sword forge Zhejiang", "Longquan folded steel Chinese Jian sword museum", "Longquan traditional swordsmithing workshop"],
    visualMustShowEn: "Hand-forged Longquan double-edged Jian steel sword with brass fittings or Shen Guanglong smithy display",
    captionVi: "Thẩm Quảng Long Kiếm Phố Long Tuyền (Chiết Giang) — xưởng rèn bảo kiếm thép gấp truyền thống thành lập năm 1885.",
    captionEn: "Longquan Shen Guanglong Sword Forge in Zhejiang, heritage maker of folded-steel Jian swords since 1885."
  },
  {
    id: "v7-brand-102",
    zh: "开封王大昌茶庄",
    targetFile: "assets/images/articles/hero-six-teas-gongfu.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Kaifeng Wang Dachang historic tea shop Henan", "Traditional Chinese jasmine tea caddy wooden counter", "Kaifeng ancient commercial street tea house"],
    visualMustShowEn: "Historic wooden tea shop counter with tin caddies and traditional calligraphy plaque in Kaifeng",
    captionVi: "Vương Đại Xương Trà Trang Khai Phong (Hà Nam) — danh hiệu trà truyền thống vùng Trung Nguyên từ năm 1898.",
    captionEn: "Kaifeng Wang Dachang Tea House in Henan, historic Central Plains tea merchant established in 1898."
  },
  {
    id: "v7-brand-103",
    zh: "耀州陈炉瓷窑",
    targetFile: "assets/images/museum/longquan-celadon-vase.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Chenlu Ancient Town Yaozhou celadon kiln Shaanxi", "Yaozhou carved olive green celadon bowl museum", "Chenlu ceramic jar walls Tongchuan Shaanxi"],
    visualMustShowEn: "Olive-green carved Yaozhou celadon bowl or terraced ceramic kiln walls at Chenlu Ancient Town in Shaanxi",
    captionVi: "Trần Lô Từ Diêu Diệu Châu (Thiểm Tây) — lò gốm men ngọc chạm khắc Diệu Châu đỏ lửa liên tục suốt hơn một thiên niên kỷ.",
    captionEn: "Yaozhou Chenlu Kiln in Shaanxi, continuous millennium-old ceramic center celebrated for olive-green carved celadon."
  },
  {
    id: "v7-brand-104",
    zh: "威海锡镶堂",
    targetFile: "assets/images/museum/quan-yao-vase.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Weihai pewter inlaid teapot Shandong craft", "Traditional Chinese pewter clad porcelain tea caddy", "Shandong Weihai tin inlay artisan craft"],
    visualMustShowEn: "Hand-hammered pewter-inlaid purple clay teapot or tea caddy showcasing carved Shandong metalwork",
    captionVi: "Uy Hải Tích Tương Đường (Sơn Đông) — kỹ nghệ khảm thiếc điêu khắc tinh xảo lên gốm sứ và trà cụ vùng bán đảo Giao Đông.",
    captionEn: "Weihai Pewter Inlay Workshop in Shandong, specializing in hand-engraved tin cladding on clay teaware."
  },
  {
    id: "v7-brand-105",
    zh: "武汉叶开泰",
    targetFile: "assets/images/brands/v7-brand-105.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Wuhan Ye Kaitai Chinese Medicine Cultural Park", "Yekaitai Hankou historic apothecary museum", "Traditional Hankou wooden herbal pharmacy drawers"],
    visualMustShowEn: "Wuhan Ye Kaitai heritage apothecary pavilion or historic Hankou botanical museum wooden cabinet display",
    captionVi: "Vũ Hán Diệp Khai Thái — danh hiệu dược phường cổ Hán Khẩu thành lập năm 1637 thời Minh Sùng Trinh.",
    captionEn: "Wuhan Ye Kaitai, historic Hankou apothecary house founded in 1637 and preserved as a botanical heritage hall."
  },
  {
    id: "v7-brand-106",
    zh: "广东星群夏桑菊",
    targetFile: "assets/images/articles/hero-tea-culture.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Guangdong Xiasangju chrysanthemum mulberry leaf herbal tea", "Dried Prunella vulgaris mulberry leaf chrysanthemum", "Cantonese herbal beverage museum Guangzhou"],
    visualMustShowEn: "Dried chrysanthemum blossoms, mulberry leaves, and selfheal botanicals representing Cantonese Xiasangju infusion heritage",
    captionVi: "Quảng Đông Tinh Quần Hạ Tang Cúc — thức uống thảo mộc truyền thống kết hợp hạ khô thảo, lá dâu và hoa cúc vùng Lĩnh Nam.",
    captionEn: "Guangdong Xingqun Xiasangju, traditional Lingnan botanical infusion combining selfheal, mulberry leaf, and chrysanthemum."
  },
  {
    id: "v7-brand-107",
    zh: "苏州绣娘丝绸",
    targetFile: "assets/images/articles/hero-silk-embroidery-hanfu.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Suzhou Su embroidery double sided silk screen", "Suzhou Silk Museum embroidery frame artisan", "Traditional Suzhou hand embroidered silk scarf"],
    visualMustShowEn: "Artisan working on fine double-sided Suzhou silk embroidery stretched across a wooden frame",
    captionVi: "Tô Châu Tú Nương Ty Trù — thương hiệu kế thừa nghệ thuật thêu hai mặt Tô Tú và lụa tơ tằm Giang Nam.",
    captionEn: "Suzhou Xiuniang Silk, contemporary heritage house preserving double-sided Su embroidery and Jiangnan silk craft."
  },
  {
    id: "v7-brand-108",
    zh: "南昌万寿宫糕饼",
    targetFile: "assets/images/brands/v7-brand-108.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Nanchang Wanshou Palace historic commercial block Jiangxi", "Traditional Jiangxi crispy sesame pastry cakes", "Chinese wooden pastry molds traditional bakery"],
    visualMustShowEn: "Historic Wanshou Palace tile-roofed street block in Nanchang or traditional Jiangxi sesame-coated crisp pastries",
    captionVi: "Nam Xương Vạn Thọ Cung Cao Bính — dòng bánh nướng thủ công gắn với khu phố thương hội Vạn Thọ Cung Giang Tây.",
    captionEn: "Nanchang Wanshou Palace Pastries, traditional Jiangxi baked confections rooted in the historic Wanshou guild district."
  },
  {
    id: "v7-brand-109",
    zh: "淮安文楼汤包",
    targetFile: "assets/images/brands/v7-brand-109.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Huaian Wenlou crab roe soup dumpling Jiangsu", "Chinese giant crab soup bun straw bamboo steamer", "Huaian Hexia Ancient Town Wenlou restaurant"],
    visualMustShowEn: "Large translucent pleated Huaiyang crab-roe soup dumpling served in a bamboo steamer with sipping straw",
    captionVi: "Hoài An Văn Lâu Thang Bao — đặc sản bánh bao canh gạch cua vỏ mỏng trứ danh của ẩm thực Hoài Dương từ thời Thanh.",
    captionEn: "Huaian Wenlou Soup Dumplings, celebrated Qing-era Huaiyang delicacy famed for paper-thin crab-roe broth buns."
  },
  {
    id: "v7-brand-110",
    zh: "禹州孔家钧窑",
    targetFile: "assets/images/museum/jun-yao-bowl.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Jun ware purple blue kiln transmutation porcelain museum", "Yuzhou Shenhou Ancient Town Jun porcelain kiln Henan", "Song dynasty style Jun ware glazed vase"],
    visualMustShowEn: "Sky-blue and crimson kiln-transmuted Jun ware porcelain vase crafted in Shenhou, Yuzhou",
    captionVi: "Vũ Châu Khổng Gia Quân Diêu (Hà Nam) — xưởng gốm kế thừa kỹ nghệ biến hóa sắc men thiên thanh – tử hồng của Quân Diêu thời Tống.",
    captionEn: "Yuzhou Kongjia Jun Kiln in Henan, master atelier preserving Song-style kiln-transmutation Jun porcelain glazes."
  },
  {
    id: "v7-brand-111",
    zh: "长春鼎丰真",
    targetFile: "assets/images/brands/v7-brand-111.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Changchun Dingfengzhen historic pastry shop Jilin", "Traditional Chinese Sachima honey pastry cubes", "Northeast Chinese festival mooncakes wooden box"],
    visualMustShowEn: "Changchun Dingfengzhen storefront signboard or golden traditional Sachima and jujube-paste pastries",
    captionVi: "Trường Xuân Đỉnh Phong Chân (Cát Lâm) — hiệu bánh ngọt cổ truyền Đông Bắc thành lập năm 1911 nổi danh bánh Tát Kỳ Mã.",
    captionEn: "Changchun Dingfengzhen of Jilin, heritage northeastern confectionery founded in 1911 known for Sachima pastries."
  },
  {
    id: "v7-brand-112",
    zh: "昆明福林堂",
    targetFile: "assets/images/brands/v7-brand-112.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Kunming Fulintang historic triangular wooden building", "Fulintang Guanghua Street Kunming Yunnan", "Fulintang traditional apothecary facade Kunming"],
    visualMustShowEn: "Iconic octagonal-corner wooden building of Fulintang on Guanghua Street in Kunming",
    captionVi: "Côn Minh Phúc Lâm Đường — hiệu dược cổ Vân Nam thành lập năm 1857 với kiến trúc tòa nhà gỗ góc phố đặc sắc.",
    captionEn: "Kunming Fulintang, Yunnan heritage apothecary founded in 1857 housed in a landmark corner timber building."
  },
  {
    id: "v7-brand-113",
    zh: "合肥詹记桃酥",
    targetFile: "assets/images/brands/v7-brand-113.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Chinese walnut cookies Taosu crispy baked pastry", "Traditional Anhui walnut shortbread biscuits tray", "Chinese baked Taosu golden cracked cookies"],
    visualMustShowEn: "Freshly baked golden cracked Chinese walnut shortbread cookies (Taosu) stacked on parchment trays",
    captionVi: "Hợp Phì Chiêm Ký Đào Tô (An Huy) — thương hiệu bánh quy óc chó giòn xốp kế thừa truyền thống điểm tâm vùng Huy Châu.",
    captionEn: "Hefei Zhanji Taosu of Anhui, heritage bakery known for crisp golden walnut shortbread pastries."
  },
  {
    id: "v7-brand-114",
    zh: "兰州马子禄牛肉面",
    targetFile: "assets/images/brands/v7-brand-114.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Lanzhou Mazilu beef hand pulled noodles Gansu", "Lanzhou Lamian clear broth radish chili oil bowl", "Chef pulling Lanzhou beef noodles dough"],
    visualMustShowEn: "Steaming bowl of Lanzhou hand-pulled beef noodles with clear broth, white radish, green garlic chives, and red chili oil",
    captionVi: "Lan Châu Mã Tử Lộc Ngưu Nhục Diện (Cam Túc) — danh hiệu mì kéo tay thịt bò chuẩn ngũ sắc Nhất Thanh Nhị Bạch Tam Hồng Tứ Lục Ngũ Hoàng.",
    captionEn: "Lanzhou Mazilu Beef Noodles in Gansu, renowned custodian of hand-pulled Lamian with clear broth and chili oil."
  },
  {
    id: "v7-brand-115",
    zh: "莆田方氏木雕",
    targetFile: "assets/images/brands/v7-brand-115.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Putian fine wood carving Fujian craft museum", "Chinese camphor boxwood intricate relief sculpture", "Fujian Putian artisan woodcarving studio"],
    visualMustShowEn: "Intricately pierced Putian boxwood or camphorwood relief sculpture carved by Fujian artisans",
    captionVi: "Phủ Điền Phương Thị Mộc Điêu (Phúc Kiến) — nghề chạm khắc gỗ tinh xảo nổi tiếng với kỹ thuật lộng thủng nhiều lớp.",
    captionEn: "Putian Fang Woodcarving of Fujian, acclaimed for multi-layered openwork sculpture in boxwood and camphor."
  },
  {
    id: "v7-brand-116",
    zh: "自贡太源井",
    targetFile: "assets/images/brands/v7-brand-116.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Zigong Shenhai Well bamboo salt derrick Sichuan", "Zigong Salt History Museum Sichuan brine well", "Sichuan Zigong traditional晒醋 fermented vinegar jars"],
    visualMustShowEn: "Historic Zigong bamboo brine-well derrick or earthenware fermentation jars of Sichuan well-salt vinegar craft",
    captionVi: "Tự Cống Thái Nguyên Tỉnh (Tứ Xuyên) — thương hiệu giấm phơi nắng cổ truyền gắn với di sản giếng muối sâu nghìn năm Tự Cống.",
    captionEn: "Zigong Taiyuanjing of Sichuan, sun-aged vinegar craft tied to Zigong's millennium-old deep brine well heritage."
  },
  {
    id: "v7-brand-117",
    zh: "宜兴顾景舟紫砂",
    targetFile: "assets/images/brands/v7-brand-117.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Gu Jingzhou Yixing Zisha teapot museum exhibition", "Masterpiece Yixing purple clay Shitiao teapot", "Yixing Zisha clay teapot precision spout lid"],
    visualMustShowEn: "Museum-grade minimalist Yixing Zisha purple clay teapot showcasing balanced geometric spout and lid proportions",
    captionVi: "Nghi Hưng Cố Cảnh Chu Tử Sa — di sản nghệ thuật tạo hình ấm Tử Sa tối giản chuẩn mực của bậc đại sư thế kỷ XX.",
    captionEn: "Yixing Gu Jingzhou Zisha Legacy, celebrating twentieth-century masterwork geometry in unglazed purple clay teapots."
  },
  {
    id: "v7-brand-118",
    zh: "湘西苗绣坊",
    targetFile: "assets/images/brands/v7-brand-118.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Xiangxi Miao embroidery silk thread Hunan textile", "Hunan Fenghuang Miao embroidered jacket motif", "Traditional Chinese Miao butterfly embroidery cloth"],
    visualMustShowEn: "Dense colorful Xiangxi Miao silk embroidery panel displaying geometric and botanical folk motifs on dark cloth",
    captionVi: "Tương Tây Miêu Tú Phường (Hồ Nam) — xưởng bảo tồn kỹ thuật thêu chỉ tơ thủ công giàu sắc màu của người Miêu vùng núi Tương Tây.",
    captionEn: "Xiangxi Miao Embroidery Workshop in Hunan, preserving intricate hand-stitched silk motifs of western Hunan."
  },
  {
    id: "v7-brand-119",
    zh: "博山人立琉璃",
    targetFile: "assets/images/brands/v7-brand-119.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Boshan Liuli colored glass art museum Zibo Shandong", "Traditional Chinese Boshan lampwork glass snuff bottle", "Zibo Boshan hand blown glazed Liuli vessel"],
    visualMustShowEn: "Translucent hand-blown Boshan colored Liuli glass vessel or inside-painted snuff bottle from Zibo, Shandong",
    captionVi: "Bác Sơn Nhân Lập Lưu Ly (Truy Bác, Sơn Đông) — trung tâm chế tác thủy tinh nghệ thuật Lưu Ly cổ truyền từ thời Minh Thanh.",
    captionEn: "Boshan Renli Liuli Glass of Zibo, Shandong, continuing Ming-Qing kiln-formed colored glass artistry."
  },
  {
    id: "v7-brand-120",
    zh: "徽州胡开文墨厂",
    targetFile: "assets/images/brands/v7-brand-120.jpg",
    wikidataQid: "",
    wikimediaQueries: ["Huizhou pine soot inkstick wooden mold carving Anhui", "Artisan hammering Hui ink paste Shexian Anhui", "Traditional Huizhou inkstick drying rack workshop"],
    visualMustShowEn: "Wooden relief carving molds and pine-soot ink paste pressing workbench inside a traditional Huizhou ink factory",
    captionVi: "Xưởng Mực Huy Châu Hồ Khai Văn — quy trình giã muội thông, ép khuôn gỗ chạm khắc và hong khô thỏi mực cổ tại Hấp Huyện.",
    captionEn: "Huizhou Hu Kaiwen Ink Factory in Shexian, highlighting pine-soot pounding, carved wood molding, and slow curing."
  }
];

var CCE_V8_PACK2_B_GI = {
  gis42: [
    {
      id: "gi-eu-01",
      zh: "西湖龙井",
      targetFile: "assets/images/gis/gi-eu-01.jpg",
      wikidataQid: "Q867302",
      wikimediaQueries: ["West Lake Longjing tea leaves Hangzhou", "Longjing tea plantation Shifeng Hangzhou", "Dragon Well green tea pan roasting Hangzhou"],
      visualMustShowEn: "Flat jade-green West Lake Longjing tea leaves or terraced Longjing tea bushes on Hangzhou hills",
      captionVi: "Trà Long Tỉnh Tây Hồ (GB/T 18650) — Chỉ dẫn Địa lý bảo hộ song phương EU–Trung Quốc tại Hàng Châu.",
      captionEn: "West Lake Longjing Tea (GB/T 18650), protected EU-China Geographical Indication from Hangzhou."
    },
    {
      id: "gi-eu-02",
      zh: "景德镇瓷器",
      targetFile: "assets/images/gis/gi-eu-02.jpg",
      wikidataQid: "Q1355275",
      wikimediaQueries: ["Jingdezhen blue and white porcelain vase museum", "Jingdezhen porcelain kiln ceramic workshop Jiangxi", "Jingdezhen Imperial Kiln porcelain bowl"],
      visualMustShowEn: "Fine Jingdezhen blue-and-white or famille rose porcelain vessels crafted in Jiangxi",
      captionVi: "Sứ Cảnh Đức Trấn (Giang Tây) — kinh đô gốm sứ ngàn năm nổi tiếng với men thanh hoa và xương sứ mỏng trong.",
      captionEn: "Jingdezhen Porcelain of Jiangxi, celebrated for translucent kaolin bodies and cobalt blue-and-white glazes."
    },
    {
      id: "gi-eu-03",
      zh: "杭州丝绸",
      targetFile: "assets/images/gis/gi-eu-03.jpg",
      wikidataQid: "Q10934964",
      wikimediaQueries: ["China National Silk Museum Hangzhou brocade", "Hangzhou mulberry silk weaving loom textile", "Hangzhou silk satin fabric traditional pattern"],
      visualMustShowEn: "Woven Hangzhou mulberry silk brocade fabric or traditional wooden silk weaving loom at Hangzhou",
      captionVi: "Lụa tơ tằm Hàng Châu (Chiết Giang) — tinh hoa nghề dệt gấm vóc Giang Nam được bảo hộ Chỉ dẫn Địa lý EU–Trung.",
      captionEn: "Hangzhou Silk from Zhejiang, fine mulberry brocade and satin protected under the EU-China GI agreement."
    },
    {
      id: "gi-eu-04",
      zh: "绍兴酒",
      targetFile: "assets/images/gis/gi-eu-04.jpg",
      wikidataQid: "Q1155059",
      wikimediaQueries: ["Shaoxing rice wine huangjiu pour ceramic cup", "Shaoxing Huadiao painted porcelain wine jar", "Shaoxing yellow rice wine fermentation Zhejiang"],
      visualMustShowEn: "Amber Shaoxing rice wine poured into a ceramic cup alongside a traditional Huadiao painted jar",
      captionVi: "Hoàng tửu Thiệu Hưng (Chiết Giang) — rượu gạo nếp ủ nước hồ Giám Hồ mang hương vị hổ phách truyền thống.",
      captionEn: "Shaoxing Wine from Zhejiang, amber fermented glutinous rice wine brewed with Jianhu Lake water."
    },
    {
      id: "gi-eu-05",
      zh: "安溪铁观音",
      targetFile: "assets/images/gis/gi-eu-05.jpg",
      wikidataQid: "Q1145716",
      wikimediaQueries: ["Anxi Tieguanyin oolong rolled tea leaves Fujian", "Anxi Tieguanyin tea plantation terraced hills Fujian", "Tieguanyin oolong tea gongfu brewing gaiwan"],
      visualMustShowEn: "Tightly rolled dark-green Anxi Tieguanyin oolong tea pearls and golden liquor in a porcelain gaiwan",
      captionVi: "Trà Thiết Quan Âm An Khê (Phúc Kiến) — danh trà Ô Long bán lên men có hương lan thanh khiết.",
      captionEn: "Anxi Tieguanyin from Fujian, semi-oxidized rolled oolong tea prized for its natural orchid aroma."
    },
    {
      id: "gi-eu-06",
      zh: "普洱茶",
      targetFile: "assets/images/gis/gi-eu-06.jpg",
      wikidataQid: "Q217003",
      wikimediaQueries: ["Pu-erh compressed tea cake Bingcha Yunnan", "Yunnan ancient Pu-erh tea tree leaves Xishuangbanna", "Ripe Pu-erh tea infusion dark red cup"],
      visualMustShowEn: "Round compressed Yunnan Pu-erh tea cake (bingcha) with large sun-dried tea leaves and tea knife",
      captionVi: "Trà Phổ Nhĩ Vân Nam — dòng trà hậu lên men ép bánh cổ thụ càng lưu trữ lâu càng đậm hậu vị.",
      captionEn: "Yunnan Pu-erh Tea, sun-dried large-leaf post-fermented compressed tea cakes aged for mellow depth."
    },
    {
      id: "gi-eu-07",
      zh: "郫县豆瓣",
      targetFile: "assets/images/gis/gi-eu-07.jpg",
      wikidataQid: "Q10935291",
      wikimediaQueries: ["Pixian Doubanjiang fermented broad bean chili paste Sichuan", "Pixian douban sun drying clay vats Chengdu", "Sichuan Pixian broad bean paste red oil bowl"],
      visualMustShowEn: "Glossy crimson Pixian broad-bean chili paste or rows of open-air terracotta fermentation vats in Sichuan",
      captionVi: "Tương đậu tằm Bì Huyện (Tứ Xuyên) — linh hồn của ẩm thực Tứ Xuyên ủ nắng sương trong vại đất nung.",
      captionEn: "Pixian Doubanjiang from Sichuan, sun-fermented broad bean and chili paste aged in earthenware vats."
    },
    {
      id: "gi-eu-08",
      zh: "镇江香醋",
      targetFile: "assets/images/gis/gi-eu-08.jpg",
      wikidataQid: "Q1155066",
      wikimediaQueries: ["Zhenjiang Chinkiang black rice vinegar bottle Jiangsu", "Zhenjiang Vinegar Culture Museum fermentation jars", "Chinkiang aromatic black vinegar ceramic spoon"],
      visualMustShowEn: "Dark aromatic Zhenjiang black rice vinegar bottle or traditional solid-state fermentation jars in Jiangsu",
      captionVi: "Giấm thơm Trấn Giang (Giang Tô) — giấm đen gạo nếp lên men tầng rắn có vị chua dịu và hậu ngọt.",
      captionEn: "Zhenjiang Aromatic Vinegar from Jiangsu, aged dark glutinous rice vinegar brewed via solid-state fermentation."
    },
    {
      id: "gi-eu-09",
      zh: "宣纸",
      targetFile: "assets/images/gis/gi-eu-09.jpg",
      wikidataQid: "Q1191944",
      wikimediaQueries: ["Xuan paper handmade papermaking Jingxian Anhui", "Anhui Jingxian Xuan paper drying wall sheets", "Chinese calligraphy Xuan paper mulberry bark pulp"],
      visualMustShowEn: "Artisan lifting wet Xuan paper sheets on bamboo screens or heated drying walls in Jingxian, Anhui",
      captionVi: "Giấy Tuyên Chỉ Kính Huyện (An Huy) — giấy thủ công vỏ cây thanh đàn UNESCO chuyên dùng cho thư họa cổ điển.",
      captionEn: "Xuan Paper from Jingxian, Anhui, UNESCO-listed handmade bark-and-straw paper for calligraphy and ink painting."
    },
    {
      id: "gi-eu-10",
      zh: "贵州茅台酒",
      targetFile: "assets/images/gis/gi-eu-10.jpg",
      wikidataQid: "Q837552",
      wikimediaQueries: ["Kweichow Moutai white porcelain bottle baijiu", "Maotai Town Chishui River distillery Guizhou", "Moutai Flying Fairy baijiu bottle display"],
      visualMustShowEn: "Iconic white porcelain Kweichow Moutai baijiu bottle with red diagonal sash or Maotai distillery along Chishui River",
      captionVi: "Rượu Mao Đài Quý Châu — bạch tửu hương tương cao cấp chưng cất từ cao lương đỏ bên sông Xích Thủy.",
      captionEn: "Guizhou Moutai, sauce-aroma sorghum baijiu distilled through multi-cycle fermentation along the Chishui River."
    },
    {
      id: "gi-eu-11",
      zh: "武夷岩茶",
      targetFile: "assets/images/gis/gi-eu-11.jpg",
      wikidataQid: "Q1155062",
      wikimediaQueries: ["Wuyi Da Hong Pao rock tea bushes cliff Fujian", "Wuyi Yancha roasted oolong twisted leaves", "Wuyishan rocky tea garden Danxia cliff"],
      visualMustShowEn: "Wuyi Mountain Danxia cliff tea bushes or charcoal-roasted twisted Wuyi Rock oolong leaves",
      captionVi: "Trà Nham Vũ Di (Phúc Kiến) — trà Ô Long sao than trồng trên khe đá Đan Hà nổi tiếng với Nham Vận khoáng chất.",
      captionEn: "Wuyi Rock Tea from Fujian, charcoal-roasted oolong grown in mineral-rich Danxia cliff crevices."
    },
    {
      id: "gi-eu-12",
      zh: "烟台苹果",
      targetFile: "assets/images/gis/gi-eu-12.jpg",
      wikidataQid: "Q10935312",
      wikimediaQueries: ["Yantai Fuji red apples orchard Shandong", "Shandong Yantai apple harvest wooden crates", "Yantai red apple ripe fruit on tree branch"],
      visualMustShowEn: "Crisp red Yantai Fuji apples hanging on coastal Shandong orchard branches or packed fresh after harvest",
      captionVi: "Táo Yên Đài (Sơn Đông) — giống táo ven biển bán đảo Giao Đông vỏ đỏ sọc, thịt giòn và vị ngọt thanh.",
      captionEn: "Yantai Apples from coastal Shandong, crisp striped red orchard apples cultivated on the Jiaodong Peninsula."
    },
    {
      id: "gi-v6-01",
      zh: "吐鲁番葡萄干",
      targetFile: "assets/images/gis/gi-v6-01.jpg",
      wikidataQid: "Q10935340",
      wikimediaQueries: ["Turpan green raisins Xinjiang bazaar market", "Turpan grape drying house Chunche brick lattice Xinjiang", "Xinjiang Turpan seedless green dried grapes"],
      visualMustShowEn: "Translucent emerald-green Turpan raisins or perforated mud-brick grape-drying houses in Xinjiang",
      captionVi: "Nho khô Thổ Lỗ Phan (Tân Cương) — nho không hạt hong gió nóng tự nhiên trong nhà gạch lỗ Ấm Phòng giữ sắc xanh ngọc.",
      captionEn: "Turpan Raisins from Xinjiang, seedless grapes air-dried in perforated mud-brick shade houses to preserve emerald color."
    },
    {
      id: "gi-v6-02",
      zh: "洛川苹果",
      targetFile: "assets/images/gis/gi-v6-02.jpg",
      wikidataQid: "Q10935344",
      wikimediaQueries: ["Luochuan apple orchard Loess Plateau Shaanxi", "Shaanxi Luochuan red apples harvest basket", "Loess Plateau apple trees ripe red fruit Shaanxi"],
      visualMustShowEn: "Deep-red Luochuan apples ripening on Loess Plateau highland orchards in northern Shaanxi",
      captionVi: "Táo Lạc Xuyên (Thiểm Tây) — táo trồng trên cao nguyên Hoàng Thổ có biên độ nhiệt ngày đêm lớn tạo độ giòn ngọt cao.",
      captionEn: "Luochuan Apples from Shaanxi, high-altitude Loess Plateau apples noted for dense flesh and balanced sweetness."
    },
    {
      id: "gi-v6-03",
      zh: "五常大米",
      targetFile: "assets/images/gis/gi-v6-03.jpg",
      wikidataQid: "Q10935348",
      wikimediaQueries: ["Wuchang japonica rice paddy field Heilongjiang", "Wuchang Daohuaxiang polished white rice grains", "Heilongjiang black soil rice harvest autumn"],
      visualMustShowEn: "Pearlescent Wuchang japonica rice grains or golden autumn paddy fields on Heilongjiang black soil",
      captionVi: "Gạo Ngũ Thường (Hắc Long Giang) — giống gạo Đạo Hoa Hương trồng trên đất đen màu mỡ có hương thơm dẻo đặc trưng.",
      captionEn: "Wuchang Rice from Heilongjiang, aromatic Daohuaxiang japonica rice grown in fertile northeastern black soil."
    },
    {
      id: "gi-v6-04",
      zh: "莱芜生姜",
      targetFile: "assets/images/gis/gi-v6-04.jpg",
      wikidataQid: "Q10935352",
      wikimediaQueries: ["Laiwu fresh ginger rhizomes harvest Shandong", "Shandong yellow ginger root slices market", "Zingiber officinale fresh plump ginger rhizome"],
      visualMustShowEn: "Plump golden-skinned Laiwu ginger rhizomes freshly harvested from sandy loam soil in Shandong",
      captionVi: "Gừng Lai Vu (Sơn Đông) — củ gừng to nạc, ít xơ, tinh dầu cay thơm đậm được xuất khẩu rộng rãi.",
      captionEn: "Laiwu Ginger from Shandong, plump low-fiber golden ginger rhizomes valued for rich essential oils."
    },
    {
      id: "gi-v6-05",
      zh: "洞庭山碧螺春茶",
      targetFile: "assets/images/gis/gi-v6-05.jpg",
      wikidataQid: "Q1155069",
      wikimediaQueries: ["Dongting Biluochun green tea curled downy buds Suzhou", "Biluochun tea plantation Dongshan Taihu Lake", "Biluochun green tea infusion glass cup"],
      visualMustShowEn: "Delicate spiral silver-downed Dongting Biluochun green tea buds grown amid Taihu fruit orchards",
      captionVi: "Trà Bích Loa Xuân Động Đình Sơn (Tô Châu) — búp trà xoắn phủ tuyết trắng trồng xen vườn cây ăn quả ven Thái Hồ.",
      captionEn: "Dongting Mountain Biluochun Tea from Suzhou, spiral downy spring green tea buds intercropped with Taihu orchards."
    },
    {
      id: "gi-v6-06",
      zh: "德化白瓷",
      targetFile: "assets/images/gis/gi-v6-06.jpg",
      wikidataQid: "Q1183160",
      wikimediaQueries: ["Dehua Blanc de Chine porcelain Guanyin statue museum", "Dehua white porcelain teapot Fujian", "Blanc de Chine Ming dynasty sculpture ceramic"],
      visualMustShowEn: "Luminous ivory-white Dehua Blanc de Chine porcelain figurine or translucent tea vessel from Fujian",
      captionVi: "Bạch sứ Đức Hóa (Phúc Kiến) — danh phẩm Blanc de Chine nổi tiếng với nước men trắng ngà mịn như ngọc mỡ dê.",
      captionEn: "Dehua White Porcelain from Fujian, classic Blanc de Chine stoneware famed for warm ivory translucency."
    },
    {
      id: "gi-v6-07",
      zh: "绍兴黄酒",
      targetFile: "assets/images/gis/gi-v6-07.jpg",
      wikidataQid: "Q1155059",
      wikimediaQueries: ["Shaoxing yellow wine clay jars storage cellar warehouse", "Shaoxing pottery wine jars stacked courtyard Zhejiang", "Shaoxing Huangjiu mud-sealed terracotta amphorae"],
      visualMustShowEn: "Rows of mud-sealed brown terracotta wine jars aging inside a traditional Shaoxing Huangjiu cellar",
      captionVi: "Kho vò gốm ủ Hoàng tửu Thiệu Hưng — hàng vạn chum đất niêm phong bùn lưu trữ rượu lâu năm tại Chiết Giang.",
      captionEn: "Shaoxing Huangjiu Aging Cellar, vast rows of mud-sealed earthenware jars maturing yellow rice wine in Zhejiang."
    },
    {
      id: "gi-v6-08",
      zh: "若羌红枣",
      targetFile: "assets/images/gis/gi-v6-08.jpg",
      wikidataQid: "Q10935361",
      wikimediaQueries: ["Ruoqiang red jujube dried dates Xinjiang", "Xinjiang Ziziphus jujuba red dates harvest", "Dried Chinese red jujube dates basket"],
      visualMustShowEn: "Deep-crimson tree-ripened Ruoqiang grey jujube dates dried naturally under arid Xinjiang sunlight",
      captionVi: "Táo đỏ Nhược Khương (Tân Cương) — táo khô chín trên cành vùng ốc đảo sa mạc vỏ mỏng, thịt đặc và vị ngọt mật.",
      captionEn: "Ruoqiang Red Jujubes from Xinjiang, oasis-grown desert dates naturally sun-dried on branches for dense sweetness."
    },
    {
      id: "gi-v6-09",
      zh: "库尔勒香梨",
      targetFile: "assets/images/gis/gi-v6-09.jpg",
      wikidataQid: "Q10935366",
      wikimediaQueries: ["Korla fragrant pear Pyrus sinkiangensis Xinjiang", "Korla pear orchard harvest Xinjiang", "Xinjiang green blushed Korla sweet pear"],
      visualMustShowEn: "Small yellow-green Korla fragrant pears with rosy sun-blushed cheeks harvested in Xinjiang",
      captionVi: "Lê thơm Khố Nhĩ Lặc (Tân Cương) — giống lê vỏ mỏng giòn mọng nước, thơm dịu và lõi nhỏ vùng lòng chảo Tarim.",
      captionEn: "Korla Fragrant Pears from Xinjiang, crisp thin-skinned yellow-green pears with a subtle red blush."
    },
    {
      id: "gi-v6-10",
      zh: "福鼎白茶",
      targetFile: "assets/images/gis/gi-v6-10.jpg",
      wikidataQid: "Q10935370",
      wikimediaQueries: ["Fuding Silver Needle Baihao Yinzhen white tea Fujian", "Fuding White Peony Baimudan tea cake", "Fuding white tea sun withering bamboo trays Fujian"],
      visualMustShowEn: "Silvery-white Fuding Silver Needle tea buds or bamboo trays of white tea withering in Fujian sunlight",
      captionVi: "Bạch trà Phúc Đỉnh (Phúc Kiến) — trà héo nắng tự nhiên không vò sao gồm Bạch Hào Ngân Châm và Bạch Mẫu Đơn.",
      captionEn: "Fuding White Tea from Fujian, minimally processed sun-withered Silver Needle and White Peony buds."
    },
    {
      id: "gi-v6-11",
      zh: "龙口粉丝",
      targetFile: "assets/images/gis/gi-v6-11.jpg",
      wikidataQid: "Q10935375",
      wikimediaQueries: ["Longkou cellophane noodles mung bean vermicelli bundles", "Zhaoyuan Longkou glass noodles drying racks Shandong", "Dried mung bean vermicelli skeins white"],
      visualMustShowEn: "Silky translucent dried Longkou mung-bean vermicelli skeins bundled neatly or hung on drying racks",
      captionVi: "Miến Long Khẩu (Sơn Đông) — miến đậu xanh sợi trong dai mượt làm theo kỹ nghệ lắng bột truyền thống Chiêu Viễn – Long Khẩu.",
      captionEn: "Longkou Vermicelli from Shandong, translucent silky mung-bean glass noodles prized for resilient texture."
    },
    {
      id: "gi-v6-12",
      zh: "赣南脐橙",
      targetFile: "assets/images/gis/gi-v6-12.jpg",
      wikidataQid: "Q10935381",
      wikimediaQueries: ["Gannan navel orange orchard Ganzhou Jiangxi", "Jiangxi Gannan fresh navel oranges harvest", "Navel orange fruit sliced juicy bright orange"],
      visualMustShowEn: "Bright orange Gannan navel oranges ripening on terraced red-soil hillside orchards in Ganzhou, Jiangxi",
      captionVi: "Cam rốn Cám Nam (Giang Tây) — đặc sản vùng đồi đất đỏ Cám Châu vỏ cam tươi, mọng nước và cân bằng chua ngọt.",
      captionEn: "Gannan Navel Oranges from southern Jiangxi, juicy bright-skinned citrus grown on red-soil hillsides."
    },
    {
      id: "gi-v6-13",
      zh: "西林姜晶",
      targetFile: "assets/images/gis/gi-v6-13.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Instant ginger tea golden granules spoon Guangxi", "Crystallized ginger sugar granules glass jar", "Dried golden ginger crystals herbal infusion"],
      visualMustShowEn: "Golden crystallized Xilin instant ginger granules in a ceramic spoon beside fresh highland ginger root",
      captionVi: "Tinh thể gừng Tây Lâm (Quảng Tây) — sản phẩm cô kết từ nước ép gừng núi cao kết hợp đường mía hòa tan tức thì.",
      captionEn: "Xilin Ginger Crystals from Guangxi, soluble golden granules crystallized from highland ginger juice and cane sugar."
    },
    {
      id: "gi-v6-14",
      zh: "东宁黑木耳",
      targetFile: "assets/images/gis/gi-v6-14.jpg",
      wikidataQid: "Q10935389",
      wikimediaQueries: ["Auricularia heimuer black wood ear mushroom cultivation Heilongjiang", "Dried Chinese black wood ear fungus bowl", "Heilongjiang Dongning wood ear mushroom farm bags"],
      visualMustShowEn: "Plump dark glossy Dongning wood-ear mushrooms growing on substrate logs or dried curled black fungus",
      captionVi: "Mộc nhĩ đen Đông Ninh (Hắc Long Giang) — tai nấm dày giòn vùng rừng núi Đông Bắc giàu chất xơ tự nhiên.",
      captionEn: "Dongning Black Fungus from Heilongjiang, thick crisp Auricularia wood-ear mushrooms grown in cool mountain air."
    },
    {
      id: "gi-v6-15",
      zh: "章丘大葱",
      targetFile: "assets/images/gis/gi-v6-15.jpg",
      wikidataQid: "Q10935395",
      wikimediaQueries: ["Zhangqiu giant Welsh onion Allium fistulosum Shandong", "Shandong tall white stalk green onion harvest", "Chinese giant scallions bundles farm Shandong"],
      visualMustShowEn: "Remarkably tall Zhangqiu giant scallions with long crisp pure-white stalks bundled after harvest in Shandong",
      captionVi: "Hành boa-rô khổng lồ Chương Khâu (Sơn Đông) — thân trắng dài, giòn ngọt dịu và ít hăng, gắn liền với ẩm thực Lỗ Thái.",
      captionEn: "Zhangqiu Giant Scallions from Shandong, towering crisp-stalked Welsh onions with mild sweet white stems."
    },
    {
      id: "gi-v6-16",
      zh: "金乡大蒜",
      targetFile: "assets/images/gis/gi-v6-16.jpg",
      wikidataQid: "Q10935402",
      wikimediaQueries: ["Jinxiang white garlic bulbs harvest Shandong", "Shandong Jinxiang garlic drying field braids", "Fresh white Allium sativum garlic cloves"],
      visualMustShowEn: "Large bright-white Jinxiang garlic bulbs braided or sorted across sunny Shandong harvest yards",
      captionVi: "Tỏi Kim Hương (Sơn Đông) — vùng trồng tỏi lớn hàng đầu Trung Quốc với củ to trắng đều, tép chắc và tinh dầu đậm.",
      captionEn: "Jinxiang Garlic from Shandong, large firm white-skinned garlic bulbs prized for uniform cloves and pungent aroma."
    },
    {
      id: "gi-v6-17",
      zh: "南充丝绸",
      targetFile: "assets/images/gis/gi-v6-17.jpg",
      wikidataQid: "Q10935408",
      wikimediaQueries: ["Nanchong Sichuan silk reeling cocoons textile", "Sichuan mulberry silkworm cocoons silk thread", "Traditional Sichuan silk brocade fabric weaving"],
      visualMustShowEn: "White mulberry silkworm cocoons being reeled into lustrous Nanchong raw silk threads in Sichuan",
      captionVi: "Lụa Nam Sung (Tứ Xuyên) — trung tâm ươm tơ dệt lụa lâu đời vùng lưu vực sông Gia Lăng với sợi tơ đều bóng.",
      captionEn: "Nanchong Silk from Sichuan, fine reeled mulberry silk yarn and woven textiles from the Jialing River basin."
    },
    {
      id: "gi-v6-18",
      zh: "建宁通心白莲",
      targetFile: "assets/images/gis/gi-v6-18.jpg",
      wikidataQid: "Q10935415",
      wikimediaQueries: ["Jianning white lotus seeds cored dried Fujian", "Nelumbo nucifera lotus pond harvest Fujian", "Dried cored white lotus seeds porcelain bowl"],
      visualMustShowEn: "Round ivory-white cored Jianning lotus seeds in a bowl or blooming lotus ponds in mountainous Fujian",
      captionVi: "Hạt sen trắng thông tâm Kiến Ninh (Phúc Kiến) — hạt tròn trắng ngà đã rút tim sen, nấu nhanh bở bùi thơm thanh.",
      captionEn: "Jianning Cored White Lotus Seeds from Fujian, round ivory lotus kernels prized for quick cooking and creamy texture."
    },
    {
      id: "gi-v7-01",
      zh: "增城荔枝",
      targetFile: "assets/images/gis/gi-v7-01.jpg",
      wikidataQid: "Q10935421",
      wikimediaQueries: ["Zengcheng Gualu lychee fruit Guangzhou Guangdong", "Guangdong ripe red Litchi chinensis cluster branch", "Fresh peeled white translucent lychee fruit"],
      visualMustShowEn: "Clusters of bright-red Zengcheng lychees on leafy branches with crisp translucent white arils",
      captionVi: "Vải thiều Tăng Thành (Quảng Đông) — quê hương giống vải Quải Lục trứ danh cùi giòn ráo nước và hương mật ngọt.",
      captionEn: "Zengcheng Lychees from Guangdong, celebrated for prized Gualu cultivars with crisp fragrant translucent flesh."
    },
    {
      id: "gi-v7-02",
      zh: "陆海青烟药果",
      targetFile: "assets/images/gis/gi-v7-02.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Dried Chinese botanical fruit slices Momordica Citrus market", "Traditional sun-dried herbal fruits bamboo tray Guangxi", "Assorted dried medicinal orchard fruits apothecary"],
      visualMustShowEn: "Sun-dried coastal-and-inland regional botanical fruits arranged neatly on woven bamboo drying trays",
      captionVi: "Dược quả thanh yên Lục Hải — dòng quả thực vật học sơ chế phơi khô truyền thống dùng làm nguyên liệu trà và thực dưỡng.",
      captionEn: "Luhai Qingyan Botanical Fruits, traditionally sun-dried regional herbal orchard fruits curated for infusions and culinary heritage."
    },
    {
      id: "gi-v7-03",
      zh: "高邮鸭蛋",
      targetFile: "assets/images/gis/gi-v7-03.jpg",
      wikidataQid: "Q10935428",
      wikimediaQueries: ["Gaoyou salted duck egg red oily yolk Jiangsu", "Chinese salted duck egg halved orange oil", "Gaoyou Lake duck farming Jiangsu"],
      visualMustShowEn: "Halved Gaoyou salted duck egg revealing a rich sandy crimson yolk glistening with golden oil",
      captionVi: "Trứng vịt muối Cao Bưu (Giang Tô) — đặc sản vùng hồ Cao Bưu nổi tiếng với lòng đỏ bùi cát ứa dầu đỏ au.",
      captionEn: "Gaoyou Salted Duck Eggs from Jiangsu, lake-region cured eggs famed for sandy crimson yolks rich in golden oil."
    },
    {
      id: "gi-v7-04",
      zh: "德化白瓷",
      targetFile: "assets/images/gis/gi-v7-04.jpg",
      wikidataQid: "Q1183160",
      wikimediaQueries: ["Dehua porcelain tea set white glaze Fujian", "Dehua ceramic kiln sculpture exhibition Quanzhou", "Blanc de Chine white porcelain cup saucer"],
      visualMustShowEn: "Modern and classical Dehua ivory-white porcelain gongfu teaware displayed in a Quanzhou craft gallery",
      captionVi: "Bạch sứ Đức Hóa (bản ghi V7 trước khi khử trùng lặp) — bộ trà cụ men trắng ngà nổi tiếng vùng Tuyền Châu.",
      captionEn: "Dehua White Porcelain (V7 pre-deduplication entry), ivory-glazed Quanzhou gongfu tea vessels."
    },
    {
      id: "gi-v7-05",
      zh: "四会沙糖桔",
      targetFile: "assets/images/gis/gi-v7-05.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Sihui Shatangju tangerine citrus orchard Guangdong", "Fresh Chinese sugar mandarin oranges harvest basket", "Peeled small orange tangerine segments sweet"],
      visualMustShowEn: "Bright orange small thin-skinned Sihui Shatangju tangerines harvested in Guangdong",
      captionVi: "Quýt đường Tứ Hội (Quảng Đông) — giống quýt vỏ mỏng dễ bóc, vị ngọt thanh không xơ đặc trưng mùa đông Lĩnh Nam.",
      captionEn: "Sihui Shatangju Tangerines from Guangdong, thin-skinned winter mandarins prized for crisp sweet segments."
    },
    {
      id: "gi-v7-06",
      zh: "长白山猴头菇",
      targetFile: "assets/images/gis/gi-v7-06.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Hericium erinaceus lion mane mushroom Changbai Jilin", "Dried Chinese Houtougu mushroom culinary fungus", "Fresh white shaggy Hericium erinaceus on wood"],
      visualMustShowEn: "Shaggy white Hericium erinaceus mushroom fruiting on oak wood or dried golden Changbai Houtougu caps",
      captionVi: "Nấm đầu khỉ Trường Bạch Sơn (Cát Lâm) — đặc sản nấm rừng quý vùng Đông Bắc giàu giá trị ẩm thực truyền thống.",
      captionEn: "Changbai Mountain Lion's Mane Mushroom from Jilin, prized northeastern woodland culinary fungus."
    },
    {
      id: "gi-v7-07",
      zh: "南充丝绸",
      targetFile: "assets/images/gis/gi-v7-07.jpg",
      wikidataQid: "Q10935408",
      wikimediaQueries: ["Sichuan Shu brocade silk loom Nanchong", "Nanchong mulberry silk spools spinning mill", "Chinese patterned silk fabric bolts Sichuan"],
      visualMustShowEn: "Spools of lustrous Sichuan mulberry silk yarn and patterned Nanchong silk fabric bolts",
      captionVi: "Lụa Nam Sung (bản ghi V7 trước khi khử trùng lặp) — sợi tơ và lụa dệt thủ công vùng sông Gia Lăng.",
      captionEn: "Nanchong Silk (V7 pre-deduplication entry), reeled Sichuan mulberry yarn and woven silk."
    },
    {
      id: "gi-v7-08",
      zh: "南京盐水鸭",
      targetFile: "assets/images/gis/gi-v7-08.jpg",
      wikidataQid: "Q10935442",
      wikimediaQueries: ["Nanjing salted duck Yanshuiya sliced platter Jiangsu", "Traditional Nanjing Osmanthus brine duck dish", "Chinese poached white salted duck Nanjing cuisine"],
      visualMustShowEn: "Sliced ivory-skinned Nanjing salted duck arranged neatly on a porcelain platter showing tender pink meat",
      captionVi: "Vịt muối Nam Kinh (Giang Tô) — món vịt ướp muối hoa quế luộc chậm có da trắng giòn, thịt thơm thanh không ngấy.",
      captionEn: "Nanjing Salted Duck from Jiangsu, aromatic brine-cured poached duck famed for ivory skin and delicate osmanthus fragrance."
    },
    {
      id: "gi-v7-09",
      zh: "赣南脐橙",
      targetFile: "assets/images/gis/gi-v7-09.jpg",
      wikidataQid: "Q10935381",
      wikimediaQueries: ["Ganzhou navel orange crates sorting Jiangxi", "Southern Jiangxi hillside citrus trees orange fruit", "Fresh Chinese navel orange halves juice"],
      visualMustShowEn: "Sorted crates of freshly picked Gannan navel oranges in Ganzhou orchards, Jiangxi",
      captionVi: "Cam rốn Cám Nam (bản ghi V7 trước khi khử trùng lặp) — đặc sản cam đất đỏ vùng Cám Châu.",
      captionEn: "Gannan Navel Orange (V7 pre-deduplication entry), freshly harvested southern Jiangxi citrus."
    },
    {
      id: "gi-v7-10",
      zh: "防城肉桂",
      targetFile: "assets/images/gis/gi-v7-10.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Cinnamomum cassia rolled cinnamon bark quills Guangxi", "Fangchenggang cassia bark drying bundles Guangxi", "Dried Chinese cassia cinnamon sticks spice"],
      visualMustShowEn: "Thick reddish-brown rolled Cinnamomum cassia bark quills sun-drying in Fangcheng, Guangxi",
      captionVi: "Quế Phòng Thành (Quảng Tây) — vỏ quế dày giàu tinh dầu vùng ven biển biên giới Việt–Trung, gắn với giao thương hương liệu Á–Âu.",
      captionEn: "Fangcheng Cassia Cinnamon from Guangxi, oil-rich rolled cassia bark grown along the Sino-Vietnamese coastal borderlands."
    },
    {
      id: "gi-v7-11",
      zh: "香云纱",
      targetFile: "assets/images/gis/gi-v7-11.jpg",
      wikidataQid: "Q10935455",
      wikimediaQueries: ["Xiangyunsha gambiered Canton gauze drying grass Shunde", "Shunde river mud dyed black silk fabric Guangdong", "Gambiered Guangdong silk yam dye process"],
      visualMustShowEn: "Long bolts of dark lustrous Xiangyunsha silk spread across green meadows in Shunde for sun-curing with river mud",
      captionVi: "Lụa Hương Vân Sa Thuận Đức (Quảng Đông) — tơ tằm nhuộm củ nâu và bùn sông phơi nắng tạo bề mặt đen bóng mát nhẹ.",
      captionEn: "Xiangyunsha Gambiered Canton Gauze from Shunde, mulberry silk dyed with Dioscorea tuber and iron-rich river mud."
    },
    {
      id: "gi-v7-12",
      zh: "吐鲁番葡萄干",
      targetFile: "assets/images/gis/gi-v7-12.jpg",
      wikidataQid: "Q10935340",
      wikimediaQueries: ["Turpan Grape Valley trellis vineyards Xinjiang", "Xinjiang Turpan dried raisins assorted colors", "Turpan adobe shade drying house vineyard"],
      visualMustShowEn: "Lush grape arbors of Turpan Grape Valley and assorted sun-dried Xinjiang raisins",
      captionVi: "Nho khô Thổ Lỗ Phan (bản ghi V7 trước khi khử trùng lặp) — vùng thung lũng nho nổi tiếng Tân Cương.",
      captionEn: "Turpan Raisins (V7 pre-deduplication entry), vineyard trellises and shade-dried grapes of Xinjiang."
    }
  ],
  replacementsGiV7: [
    {
      replaceId: "gi-v7-04",
      oldDupZh: "德化白瓷",
      newZh: "庆元香菇",
      newNameVi: "Nấm Hương Khánh Nguyên (Chiết Giang)",
      newNameEn: "Qingyuan Shiitake Mushroom GI (Zhejiang)",
      gbCode: "GB/T 20355",
      targetFile: "assets/images/gis/gi-v7-04.jpg",
      wikidataQid: "Q10964446",
      wikimediaQueries: ["Qingyuan shiitake mushroom cultivation Zhejiang", "Dried Lentinula edodes wood log Zhejiang", "Lishui Qingyuan mushroom museum"],
      visualMustShowEn: "Traditional oak-log mushroom cultivation or thick dried Qingyuan shiitake caps from Zhejiang",
      captionVi: "Nấm hương Khánh Nguyên (GB/T 20355) trồng trên thân gỗ rừng núi Lệ Thủy — quê hương nghề trồng nấm 800 năm.",
      captionEn: "Qingyuan log-grown shiitake mushrooms (GB/T 20355) from southern Zhejiang highland forests."
    },
    {
      replaceId: "gi-v7-07",
      oldDupZh: "南充丝绸",
      newZh: "汉源花椒",
      newNameVi: "Hoa Tiêu Đỏ Hán Nguyên (Tứ Xuyên)",
      newNameEn: "Hanyuan Red Sichuan Peppercorn GI (Sichuan)",
      gbCode: "GB/T 19611",
      targetFile: "assets/images/gis/gi-v7-07.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Hanyuan red Sichuan peppercorn Zanthoxylum bungeanum", "Dried red Sichuan peppercorns bowl spice", "Sichuan Zanthoxylum peppercorn harvest branches"],
      visualMustShowEn: "Vibrant crimson open husks of dried Hanyuan Zanthoxylum peppercorns harvested in Ya'an, Sichuan",
      captionVi: "Hoa tiêu Hán Nguyên (GB/T 19611) — giống cống tiêu hạt đỏ sẫm giàu tinh dầu tạo vị tê thơm thanh cho ẩm thực Tứ Xuyên.",
      captionEn: "Hanyuan Red Sichuan Peppercorns (GB/T 19611), aromatic highland Zanthoxylum husks prized in Sichuan cuisine."
    },
    {
      replaceId: "gi-v7-09",
      oldDupZh: "赣南脐橙",
      newZh: "临安天目笋干",
      newNameVi: "Măng Khô Thiên Mục Lâm An (Chiết Giang)",
      newNameEn: "Lin'an Tianmu Dried Bamboo Shoots GI (Zhejiang)",
      gbCode: "GB/T 20356",
      targetFile: "assets/images/gis/gi-v7-09.jpg",
      wikidataQid: "",
      wikimediaQueries: ["Tianmu Mountain bamboo forest Linan Hangzhou", "Dried Chinese bamboo shoots Sungan Zhejiang", "Fresh Phyllostachys bamboo shoots harvest Zhejiang"],
      visualMustShowEn: "Golden sun-dried Tianmu bamboo shoot strips or verdant Moso bamboo groves around Lin'an, Zhejiang",
      captionVi: "Măng khô Thiên Mục Lâm An (GB/T 20356) — măng tre non núi Thiên Mục hấp sấy thủ công giòn ngọt tự nhiên.",
      captionEn: "Lin'an Tianmu Dried Bamboo Shoots (GB/T 20356), tender spring mountain shoots steamed and dried in Zhejiang."
    },
    {
      replaceId: "gi-v7-12",
      oldDupZh: "吐鲁番葡萄干",
      newZh: "阳澄湖大闸蟹",
      newNameVi: "Cua Lông Hồ Dương Trừng (Giang Tô)",
      newNameEn: "Yangcheng Lake Hairy Crab GI (Jiangsu)",
      gbCode: "GB/T 19957",
      targetFile: "assets/images/gis/gi-v7-12.jpg",
      wikidataQid: "Q10935468",
      wikimediaQueries: ["Yangcheng Lake Chinese mitten crab Eriocheir sinensis", "Steamed Yangcheng Lake hairy crab Jiangsu", "Suzhou Yangcheng Lake crab farming waters"],
      visualMustShowEn: "Chinese mitten crab with olive-green carapace, white belly, and golden leg hair from Yangcheng Lake, Suzhou",
      captionVi: "Cua lông Dương Trừng Hồ (GB/T 19957) — đặc sản mùa thu Tô Châu nổi tiếng với mai xanh, bụng trắng, lông vàng và gạch béo.",
      captionEn: "Yangcheng Lake Hairy Crab (GB/T 19957), autumn Suzhou delicacy noted for sweet flesh and rich golden roe."
    }
  ]
};

var CCE_V8_PACK2_B_CSC = {
  csc36: [
    {
      id: "csc-01",
      zh: "清华大学",
      targetFile: "assets/images/universities/csc-01.jpg",
      wikidataQid: "Q16955",
      wikimediaQueries: ["Tsinghua University Second Gate Old Gate", "Tsinghua University Grand Auditorium Beijing", "Tsinghua University Old Library building"],
      visualMustShowEn: "White marble Second Gate arch or historic Grand Auditorium building on Tsinghua University campus",
      captionVi: "Nhị Hiệu Môn — cổng đá biểu tượng tại khuôn viên Đại học Thanh Hoa (Bắc Kinh).",
      captionEn: "The historic Second Gate arch at Tsinghua University campus in Beijing."
    },
    {
      id: "csc-02",
      zh: "北京大学",
      targetFile: "assets/images/universities/csc-02.jpg",
      wikidataQid: "Q16952",
      wikimediaQueries: ["Peking University West Gate Beijing", "Peking University Boya Pagoda Weiming Lake", "Peking University Library campus building"],
      visualMustShowEn: "Traditional vermilion West Gate of Peking University with calligraphy plaque or Boya Pagoda beside Weiming Lake",
      captionVi: "Cổng Tây cổ kính — biểu tượng kiến trúc truyền thống của Đại học Bắc Kinh.",
      captionEn: "The traditional West Gate entrance of Peking University in Beijing."
    },
    {
      id: "csc-03",
      zh: "对外经济贸易大学",
      targetFile: "assets/images/universities/csc-03.jpg",
      wikidataQid: "Q1750830",
      wikimediaQueries: ["University of International Business and Economics Beijing gate", "UIBE Chengxin Building Beijing campus", "University of International Business and Economics library"],
      visualMustShowEn: "Main campus gate or Chengxin Academic Building of University of International Business and Economics in Beijing",
      captionVi: "Đại học Kinh tế Đối ngoại Bắc Kinh (UIBE) — trung tâm đào tạo thương mại quốc tế và tài chính hàng đầu.",
      captionEn: "Campus entrance and main academic building of the University of International Business and Economics in Beijing."
    },
    {
      id: "csc-04",
      zh: "中国人民大学",
      targetFile: "assets/images/universities/csc-04.jpg",
      wikidataQid: "Q1073818",
      wikimediaQueries: ["Renmin University of China East Gate Beijing", "Renmin University of China Mingde Building", "Renmin University of China Library Beijing"],
      visualMustShowEn: "East Gate entrance with carved stone emblem or Mingde Academic Building at Renmin University of China",
      captionVi: "Đại học Nhân dân Trung Quốc (RUC) — trọng điểm quốc gia về khoa học xã hội, kinh tế và luật học.",
      captionEn: "East Gate and Mingde academic complex at Renmin University of China in Beijing."
    },
    {
      id: "csc-05",
      zh: "复旦大学",
      targetFile: "assets/images/universities/csc-05.jpg",
      wikidataQid: "Q495015",
      wikimediaQueries: ["Fudan University Guanghua Twin Towers Shanghai", "Fudan University Handan campus main gate", "Fudan University Xianghui Hall Shanghai"],
      visualMustShowEn: "Guanghua Twin Towers academic complex or Handan campus main gate at Fudan University in Shanghai",
      captionVi: "Tháp đôi Quang Hoa và cổng chính cơ sở Hàm Đan của Đại học Phục Đán (Thượng Hải).",
      captionEn: "Guanghua Twin Towers and Handan campus gate at Fudan University in Shanghai."
    },
    {
      id: "csc-06",
      zh: "上海交通大学",
      targetFile: "assets/images/universities/csc-06.jpg",
      wikidataQid: "Q460953",
      wikimediaQueries: ["Shanghai Jiao Tong University Xuhui campus main gate", "Shanghai Jiao Tong University Old Library Xuhui", "Shanghai Jiao Tong University Minhang campus gate"],
      visualMustShowEn: "Historic crimson-and-green tiled Xuhui campus gate or Old Library building of Shanghai Jiao Tong University",
      captionVi: "Cổng cổ cơ sở Từ Hối — dấu ấn lịch sử hơn một thế kỷ của Đại học Giao thông Thượng Hải.",
      captionEn: "The historic Xuhui campus gate at Shanghai Jiao Tong University."
    },
    {
      id: "csc-07",
      zh: "上海财经大学",
      targetFile: "assets/images/universities/csc-07.jpg",
      wikidataQid: "Q1637000",
      wikimediaQueries: ["Shanghai University of Finance and Economics Guoding campus gate", "Shanghai University of Finance and Economics Library", "Shanghai University of Finance and Economics Yuheng Building"],
      visualMustShowEn: "Guoding Road main gate or campus library building of Shanghai University of Finance and Economics",
      captionVi: "Đại học Tài chính Kinh tế Thượng Hải (SUFE) — cái nôi đào tạo tài chính và kế toán hàng đầu Hoa Đông.",
      captionEn: "Main campus gate and academic library of Shanghai University of Finance and Economics."
    },
    {
      id: "csc-08",
      zh: "上海海事大学",
      targetFile: "assets/images/universities/csc-08.jpg",
      wikidataQid: "Q2277022",
      wikimediaQueries: ["Shanghai Maritime University Lingang campus library", "Shanghai Maritime University main gate Lingang", "Shanghai Maritime University teaching building"],
      visualMustShowEn: "Lingang campus main gate or modern maritime library building of Shanghai Maritime University",
      captionVi: "Đại học Hàng hải Thượng Hải tại Lâm Cảng — trọng điểm đào tạo logistics cảng biển và vận tải hàng hải.",
      captionEn: "Lingang campus library and main entrance of Shanghai Maritime University."
    },
    {
      id: "csc-09",
      zh: "浙江大学",
      targetFile: "assets/images/universities/csc-09.jpg",
      wikidataQid: "Q197543",
      wikimediaQueries: ["Zhejiang University Zijingang campus main gate Hangzhou", "Zhejiang University Yuquan campus gate Hangzhou", "Zhejiang University Zhijiang campus historic hall"],
      visualMustShowEn: "Monumental main gate at Zijingang or Yuquan campus of Zhejiang University in Hangzhou",
      captionVi: "Cổng chính khuôn viên Tử Kim Cảng và Ngọc Tuyền của Đại học Chiết Giang (Hàng Châu).",
      captionEn: "Main campus gate of Zhejiang University in Hangzhou."
    },
    {
      id: "csc-10",
      zh: "南京大学",
      targetFile: "assets/images/universities/csc-10.jpg",
      wikidataQid: "Q683580",
      wikimediaQueries: ["Nanjing University Beidalou Gulou campus", "Nanjing University Gulou campus main gate", "Nanjing University Xianlin campus Duxia Library"],
      visualMustShowEn: "Ivy-covered stone Beidalou building or historic Gulou campus gate at Nanjing University",
      captionVi: "Tòa Bắc Đại Lâu cổ kính phủ thường xuân tại cơ sở Cổ Lâu, Đại học Nam Kinh.",
      captionEn: "The ivy-clad Beidalou historic hall at Nanjing University Gulou campus."
    },
    {
      id: "csc-11",
      zh: "中山大学",
      targetFile: "assets/images/universities/csc-11.jpg",
      wikidataQid: "Q697474",
      wikimediaQueries: ["Sun Yat-sen University Swasey Hall Guangzhou", "Sun Yat-sen University South Campus main gate", "Sun Yat-sen University Martin Hall Guangzhou"],
      visualMustShowEn: "Red-brick Swasey Hall with green glazed roof or South Campus archway at Sun Yat-sen University",
      captionVi: "Hoài Sĩ Đường gạch đỏ mái ngói lưu ly xanh tại cơ sở Nam của Đại học Trung Sơn (Quảng Châu).",
      captionEn: "Red-brick Swasey Hall at Sun Yat-sen University South Campus in Guangzhou."
    },
    {
      id: "csc-12",
      zh: "厦门大学",
      targetFile: "assets/images/universities/csc-12.jpg",
      wikidataQid: "Q1400426",
      wikimediaQueries: ["Xiamen University Qunxian Building Siming campus", "Xiamen University Jiannan Auditorium", "Xiamen University Furong Lake campus buildings"],
      visualMustShowEn: "Jiageng-style Qunxian Building or Jiannan Auditorium with sweeping eaves at Xiamen University",
      captionVi: "Quần Hiền Lâu và Đại lễ đường Kiến Nam mang kiến trúc Gia Canh đặc trưng của Đại học Hạ Môn.",
      captionEn: "Jiageng-style Qunxian Building and Jiannan Auditorium at Xiamen University."
    },
    {
      id: "csc-13",
      zh: "武汉大学",
      targetFile: "assets/images/universities/csc-13.jpg",
      wikidataQid: "Q1133719",
      wikimediaQueries: ["Wuhan University Old Library Luojia Hill", "Wuhan University historic archway gate", "Wuhan University Old Dormitory building"],
      visualMustShowEn: "Historic green-tiled Old Library on Luojia Hill or stone archway entrance of Wuhan University",
      captionVi: "Thư viện Cổ mái lưu ly xanh trên đồi Lạc Già tại Đại học Vũ Hán.",
      captionEn: "The historic Old Library crowning Luojia Hill at Wuhan University."
    },
    {
      id: "csc-14",
      zh: "华中科技大学",
      targetFile: "assets/images/universities/csc-14.jpg",
      wikidataQid: "Q1633075",
      wikimediaQueries: ["Huazhong University of Science and Technology South Gate Wuhan", "Huazhong University of Science and Technology Library", "Huazhong University of Science and Technology Main Building"],
      visualMustShowEn: "South Gate entrance or Main Teaching Building framed by campus trees at Huazhong University of Science and Technology",
      captionVi: "Cổng Nam rợp bóng cây xanh của Đại học Khoa học và Công nghệ Hoa Trung (Vũ Hán).",
      captionEn: "Tree-lined South Gate and academic halls of Huazhong University of Science and Technology in Wuhan."
    },
    {
      id: "csc-15",
      zh: "南开大学",
      targetFile: "assets/images/universities/csc-15.jpg",
      wikidataQid: "Q1348905",
      wikimediaQueries: ["Nankai University Main Building Balitai campus", "Nankai University East Gate Tianjin", "Nankai University Siyuan Hall Tianjin"],
      visualMustShowEn: "Main Academic Building plaza or East Gate entrance at Nankai University Balitai campus in Tianjin",
      captionVi: "Tòa Chủ Lâu và quảng trường cơ sở Bát Lý Đài tại Đại học Nam Khai (Thiên Tân).",
      captionEn: "Main Building and Balitai campus plaza at Nankai University in Tianjin."
    },
    {
      id: "csc-16",
      zh: "天津大学",
      targetFile: "assets/images/universities/csc-16.jpg",
      wikidataQid: "Q1147326",
      wikimediaQueries: ["Tianjin University Ninth Teaching Building Weijin Road", "Tianjin University East Gate Beiyang Square", "Tianjin University Peiyang Memorial Pavilion"],
      visualMustShowEn: "Ninth Teaching Building or Beiyang Square East Gate at Tianjin University Weijin Road campus",
      captionVi: "Tòa Giảng đường số 9 và Quảng trường Bắc Dương — biểu tượng truyền thống kỹ thuật của Đại học Thiên Tân.",
      captionEn: "Ninth Teaching Building and Beiyang Square at Tianjin University Weijin Road campus."
    },
    {
      id: "csc-17",
      zh: "大连海事大学",
      targetFile: "assets/images/universities/csc-17.jpg",
      wikidataQid: "Q1157941",
      wikimediaQueries: ["Dalian Maritime University main gate", "Dalian Maritime University Library building", "Dalian Maritime University campus teaching building"],
      visualMustShowEn: "Main campus gate or academic library building of Dalian Maritime University in Liaoning",
      captionVi: "Đại học Hàng hải Đại Liên — trường trọng điểm trực thuộc Bộ Giao thông Vận tải về hàng hải và logistics.",
      captionEn: "Main gate and library building of Dalian Maritime University in Dalian."
    },
    {
      id: "csc-18",
      zh: "四川大学",
      targetFile: "assets/images/universities/csc-18.jpg",
      wikidataQid: "Q1519532",
      wikimediaQueries: ["Sichuan University Wangjiang campus Administration Building", "Sichuan University Huaxi campus Clock Tower", "Sichuan University Jiangan campus library"],
      visualMustShowEn: "Historic Administration Building at Wangjiang campus or Huaxi Clock Tower of Sichuan University in Chengdu",
      captionVi: "Tòa Hành chính cơ sở Vọng Giang và Tháp Đồng hồ Hoa Tây của Đại học Tứ Xuyên (Thành Đô).",
      captionEn: "Historic Wangjiang Administration Building and Huaxi Clock Tower at Sichuan University in Chengdu."
    },
    {
      id: "csc-19",
      zh: "西安交通大学",
      targetFile: "assets/images/universities/csc-19.jpg",
      wikidataQid: "Q1151053",
      wikimediaQueries: ["Xi'an Jiaotong University North Gate Xingqing campus", "Xi'an Jiaotong University Qian Xuesen Library", "Xi'an Jiaotong University Tengfei Tower"],
      visualMustShowEn: "North Gate entrance or Qian Xuesen Library building at Xi'an Jiaotong University Xingqing campus",
      captionVi: "Cổng Bắc cơ sở Hưng Khánh và Thư viện Tiền Học Sâm tại Đại học Giao thông Tây An.",
      captionEn: "North Gate and Qian Xuesen Library at Xi'an Jiaotong University Xingqing campus."
    },
    {
      id: "csc-20",
      zh: "重庆大学",
      targetFile: "assets/images/universities/csc-20.jpg",
      wikidataQid: "Q1076186",
      wikimediaQueries: ["Chongqing University Campus A main gate", "Chongqing University Minzhu Lake Teaching Building", "Chongqing University Huxi campus library"],
      visualMustShowEn: "Campus A main gate or historic brick teaching building beside Minzhu Lake at Chongqing University",
      captionVi: "Cổng chính khu A và tòa giảng đường cổ bên hồ Dân Chủ của Đại học Trùng Khánh.",
      captionEn: "Campus A main entrance and historic teaching halls of Chongqing University."
    },
    {
      id: "csc-21",
      zh: "广西大学",
      targetFile: "assets/images/universities/csc-21.jpg",
      wikidataQid: "Q1151454",
      wikimediaQueries: ["Guangxi University South Gate Nanning", "Guangxi University Library building Nanning", "Guangxi University Junwu Building"],
      visualMustShowEn: "South Gate entrance or Junwu Academic Building of Guangxi University in Nanning",
      captionVi: "Đại học Quảng Tây (Nam Ninh) — điểm đến học bổng CSC quen thuộc cho sinh viên khu vực ASEAN và Việt Nam.",
      captionEn: "South Gate and Junwu academic hall at Guangxi University in Nanning."
    },
    {
      id: "csc-22",
      zh: "云南大学",
      targetFile: "assets/images/universities/csc-22.jpg",
      wikidataQid: "Q1153512",
      wikimediaQueries: ["Yunnan University Huize Hall Kunming", "Yunnan University Donglu campus gate", "Yunnan University Chenggong campus library"],
      visualMustShowEn: "French-neoclassical Huize Hall stone building at Yunnan University Donglu campus in Kunming",
      captionVi: "Hội Trạch Viện — tòa kiến trúc đá lịch sử năm 1924 tại cơ sở Đông Lục của Đại học Vân Nam (Côn Minh).",
      captionEn: "Historic stone Huize Hall at Yunnan University Donglu campus in Kunming."
    },
    {
      id: "csc-23",
      zh: "北京语言大学",
      targetFile: "assets/images/universities/csc-23.jpg",
      wikidataQid: "Q814731",
      wikimediaQueries: ["Beijing Language and Culture University South Gate", "Beijing Language and Culture University Main Building", "Beijing Language and Culture University Library"],
      visualMustShowEn: "South Gate entrance or Main Teaching Building of Beijing Language and Culture University in Haidian",
      captionVi: "Đại học Ngôn ngữ Bắc Kinh (BLCU) — ngôi trường đào tạo Hán ngữ quốc tế hàng đầu với mệnh danh Tiểu Liên Hợp Quốc.",
      captionEn: "South Gate and main academic building of Beijing Language and Culture University in Beijing."
    },
    {
      id: "csc-24",
      zh: "哈尔滨工业大学",
      targetFile: "assets/images/universities/csc-24.jpg",
      wikidataQid: "Q1150951",
      wikimediaQueries: ["Harbin Institute of Technology Main Building", "Harbin Institute of Technology Museum historic building", "Harbin Institute of Technology campus gate"],
      visualMustShowEn: "Symmetrical spire-topped Main Building of Harbin Institute of Technology in Harbin",
      captionVi: "Tòa Chủ Lâu tháp nhọn đối xứng — biểu tượng kiến trúc kỹ thuật của Đại học Công nghiệp Cáp Nhĩ Tân (HIT).",
      captionEn: "The symmetrical spire-crowned Main Building of Harbin Institute of Technology in Harbin."
    },
    {
      id: "csc-v7-01",
      zh: "西安交通大学",
      targetFile: "assets/images/universities/csc-v7-01.jpg",
      wikidataQid: "Q1151053",
      wikimediaQueries: ["Xi'an Jiaotong University Western China Science and Technology Innovation Harbour", "Xi'an Jiaotong University Main Teaching Building", "Xi'an Jiaotong University South Gate"],
      visualMustShowEn: "Main Teaching Building or Innovation Harbour campus complex of Xi'an Jiaotong University",
      captionVi: "Khu giảng đường trung tâm và Cảng Đổi mới Khoa học Công nghệ Tây Bộ của Đại học Giao thông Tây An.",
      captionEn: "Main Teaching Building and Innovation Harbour campus at Xi'an Jiaotong University."
    },
    {
      id: "csc-v7-02",
      zh: "天津大学",
      targetFile: "assets/images/universities/csc-v7-02.jpg",
      wikidataQid: "Q1147326",
      wikimediaQueries: ["Tianjin University Peiyangyuan campus Zheng Dong Library", "Tianjin University Peiyangyuan campus main gate", "Tianjin University History Museum building"],
      visualMustShowEn: "Zheng Dong Library or Peiyangyuan campus main gate at Tianjin University",
      captionVi: "Thư viện Trịnh Đông tại cơ sở mới Bắc Dương Viên của Đại học Thiên Tân.",
      captionEn: "Zheng Dong Library and Peiyangyuan campus gate at Tianjin University."
    },
    {
      id: "csc-v7-03",
      zh: "中山大学",
      targetFile: "assets/images/universities/csc-v7-03.jpg",
      wikidataQid: "Q697474",
      wikimediaQueries: ["Sun Yat-sen University Zhuhai campus library", "Sun Yat-sen University North Gate Guangzhou", "Sun Yat-sen University Grant Hall Guangzhou"],
      visualMustShowEn: "North Gate ceremonial arch or Grant Hall red-brick building at Sun Yat-sen University",
      captionVi: "Cổng Bắc hướng ra Châu Giang và tòa Cách Lan Đường tại Đại học Trung Sơn.",
      captionEn: "Ceremonial North Gate and historic Grant Hall at Sun Yat-sen University."
    },
    {
      id: "csc-v7-04",
      zh: "华东师范大学",
      targetFile: "assets/images/universities/csc-v7-04.jpg",
      wikidataQid: "Q1277721",
      wikimediaQueries: ["East China Normal University Qunxian Hall Shanghai", "East China Normal University Putuo campus main gate", "East China Normal University Minhang campus library"],
      visualMustShowEn: "Historic Qunxian Hall or Putuo campus main entrance of East China Normal University in Shanghai",
      captionVi: "Tòa Quần Hiền Đường cổ điển và cổng chính cơ sở Phổ Đà của Đại học Sư phạm Hoa Đông (Thượng Hải).",
      captionEn: "Historic Qunxian Hall and Putuo campus entrance at East China Normal University in Shanghai."
    },
    {
      id: "csc-v7-05",
      zh: "北京航空航天大学",
      targetFile: "assets/images/universities/csc-v7-05.jpg",
      wikidataQid: "Q814693",
      wikimediaQueries: ["Beihang University Xueyuan Road campus Main Building", "Beihang University Beijing Air and Space Museum", "Beihang University Shahe campus library"],
      visualMustShowEn: "Main Academic Building or Air and Space Museum pavilion at Beihang University in Beijing",
      captionVi: "Đại học Hàng không Vũ trụ Bắc Kinh (Beihang) — trọng điểm quốc gia về kỹ thuật hàng không và không gian.",
      captionEn: "Main Academic Building and aerospace museum at Beihang University in Beijing."
    },
    {
      id: "csc-v7-06",
      zh: "中国农业大学",
      targetFile: "assets/images/universities/csc-v7-06.jpg",
      wikidataQid: "Q1073784",
      wikimediaQueries: ["China Agricultural University East Campus main gate Beijing", "China Agricultural University Main Building", "China Agricultural University West Campus Old Building"],
      visualMustShowEn: "East Campus main gate or Main Building of China Agricultural University in Beijing",
      captionVi: "Đại học Nông nghiệp Trung Quốc (Bắc Kinh) — trường dẫn đầu về khoa học nông nghiệp, thực phẩm và sinh học.",
      captionEn: "East Campus main gate and academic building of China Agricultural University in Beijing."
    },
    {
      id: "csc-v7-07",
      zh: "中国海洋大学",
      targetFile: "assets/images/universities/csc-v7-07.jpg",
      wikidataQid: "Q1152014",
      wikimediaQueries: ["Ocean University of China Yushan campus historic building Qingdao", "Ocean University of China Laoshan campus library", "Ocean University of China Yushan campus gate"],
      visualMustShowEn: "Historic German-era stone academic building at Yushan campus or Laoshan library of Ocean University of China",
      captionVi: "Cơ sở Ngư Sơn cổ kính bên biển Thanh Đảo của Đại học Hải dương Trung Quốc.",
      captionEn: "Historic stone academic halls at Ocean University of China Yushan campus in Qingdao."
    },
    {
      id: "csc-v7-08",
      zh: "哈尔滨工业大学",
      targetFile: "assets/images/universities/csc-v7-08.jpg",
      wikidataQid: "Q1150951",
      wikimediaQueries: ["Harbin Institute of Technology Shenzhen campus building", "Harbin Institute of Technology Weihai campus main gate", "Harbin Institute of Technology Science Park building"],
      visualMustShowEn: "Academic building at Harbin Institute of Technology Shenzhen or Weihai campus",
      captionVi: "Cơ sở nghiên cứu kỹ thuật cao tại Thâm Quyến và Uy Hải của Đại học Công nghiệp Cáp Nhĩ Tân.",
      captionEn: "Modern research and teaching complex at Harbin Institute of Technology branch campus."
    },
    {
      id: "csc-v7-09",
      zh: "重庆大学",
      targetFile: "assets/images/universities/csc-v7-09.jpg",
      wikidataQid: "Q1076186",
      wikimediaQueries: ["Chongqing University Huxi campus gate", "Chongqing University Campus A Library", "Chongqing University Science Hall"],
      visualMustShowEn: "Huxi campus main entrance or Campus A Library building of Chongqing University",
      captionVi: "Thư viện khu A và khuôn viên Hổ Khê hiện đại của Đại học Trùng Khánh.",
      captionEn: "Huxi campus entrance and library building at Chongqing University."
    },
    {
      id: "csc-v7-10",
      zh: "中国政法大学",
      targetFile: "assets/images/universities/csc-v7-10.jpg",
      wikidataQid: "Q1073847",
      wikimediaQueries: ["China University of Political Science and Law Changping campus gate", "China University of Political Science and Law Xueyuan Road campus", "China University of Political Science and Law Library"],
      visualMustShowEn: "Campus gate or academic library building of China University of Political Science and Law in Beijing",
      captionVi: "Đại học Chính Pháp Trung Quốc (CUPL) — cơ sở đào tạo luật học và luật thương mại quốc tế uy tín hàng đầu.",
      captionEn: "Main campus gate and library of China University of Political Science and Law in Beijing."
    },
    {
      id: "csc-v7-11",
      zh: "北京外国语大学",
      targetFile: "assets/images/universities/csc-v7-11.jpg",
      wikidataQid: "Q814712",
      wikimediaQueries: ["Beijing Foreign Studies University East Campus gate", "Beijing Foreign Studies University Library Beijing", "Beijing Foreign Studies University Main Building"],
      visualMustShowEn: "East Campus main gate or modern Library building of Beijing Foreign Studies University in Beijing",
      captionVi: "Đại học Ngoại ngữ Bắc Kinh (BFSU) — cái nôi đào tạo hơn 100 ngôn ngữ và cán bộ ngoại giao hàng đầu Trung Quốc.",
      captionEn: "East Campus entrance and library of Beijing Foreign Studies University in Beijing."
    },
    {
      id: "csc-v7-12",
      zh: "厦门大学",
      targetFile: "assets/images/universities/csc-v7-12.jpg",
      wikidataQid: "Q1400426",
      wikimediaQueries: ["Xiamen University Xiang'an campus library", "Xiamen University West Gate Siming campus", "Xiamen University Nangong Songen Building"],
      visualMustShowEn: "Siming campus West Gate or Songen Building at Xiamen University",
      captionVi: "Cổng Tây cơ sở Tư Minh và Thư viện cơ sở Tường An của Đại học Hạ Môn.",
      captionEn: "Siming campus West Gate and Xiang'an campus library at Xiamen University."
    }
  ],
  replacementsCscV7: [
    {
      replaceId: "csc-v7-01",
      oldDupZh: "西安交通大学",
      newZh: "同济大学",
      newNameVi: "Đại học Đồng Tế (Thượng Hải · Kiến trúc & Kỹ thuật)",
      newNameEn: "Tongji University (Shanghai · Architecture & Engineering)",
      wikidataQid: "Q1153564",
      targetFile: "assets/images/universities/csc-v7-01.jpg",
      wikimediaQueries: ["Tongji University Siping campus Shanghai", "Tongji University main gate building", "Tongji Wenyuan Building Shanghai"],
      visualMustShowEn: "Tongji University Siping campus entrance or landmark Wenyuan academic building in Shanghai",
      captionVi: "Đại học Đồng Tế Thượng Hải — trung tâm đào tạo kiến trúc, quy hoạch đô thị và kỹ thuật xây dựng hàng đầu.",
      captionEn: "Tongji University in Shanghai, renowned for architecture, urban planning, and civil engineering."
    },
    {
      replaceId: "csc-v7-02",
      oldDupZh: "天津大学",
      newZh: "北京师范大学",
      newNameVi: "Đại học Sư phạm Bắc Kinh (BNU · Giáo dục & Nhân văn)",
      newNameEn: "Beijing Normal University (BNU · Education & Humanities)",
      wikidataQid: "Q814746",
      targetFile: "assets/images/universities/csc-v7-02.jpg",
      wikimediaQueries: ["Beijing Normal University Main Building Haidian", "Beijing Normal University Library Beijing", "Beijing Normal University South Gate"],
      visualMustShowEn: "Main Academic Building or Library facade on Beijing Normal University Haidian campus",
      captionVi: "Đại học Sư phạm Bắc Kinh (BNU) — đại học trọng điểm quốc gia hàng đầu về giáo dục, tâm lý học và văn học.",
      captionEn: "Beijing Normal University in Haidian, flagship Chinese institution for education, psychology, and literature."
    },
    {
      replaceId: "csc-v7-03",
      oldDupZh: "中山大学",
      newZh: "湖南大学",
      newNameVi: "Đại học Hồ Nam (Trường Sa · Nhạc Lộc Thư Viện)",
      newNameEn: "Hunan University (Changsha · Yuelu Academy Heritage)",
      wikidataQid: "Q1151497",
      targetFile: "assets/images/universities/csc-v7-03.jpg",
      wikimediaQueries: ["Hunan University Yuelu Academy gate Changsha", "Hunan University Auditorium Yuelu Mountain", "Hunan University Library Changsha"],
      visualMustShowEn: "Historic Yuelu Academy gateway or Hunan University Auditorium nestled below Yuelu Mountain in Changsha",
      captionVi: "Đại học Hồ Nam (Trường Sa) — kế thừa truyền thống ngàn năm của Nhạc Lộc Thư Viện với thế mạnh kỹ thuật và thiết kế.",
      captionEn: "Hunan University in Changsha, carrying forward the millennium-old Yuelu Academy heritage."
    },
    {
      replaceId: "csc-v7-08",
      oldDupZh: "哈尔滨工业大学",
      newZh: "西北工业大学",
      newNameVi: "Đại học Bách khoa Tây Bắc (Tây An · Hàng không & Hàng hải)",
      newNameEn: "Northwestern Polytechnical University (Xi'an · Aerospace & Marine)",
      wikidataQid: "Q1345724",
      targetFile: "assets/images/universities/csc-v7-08.jpg",
      wikimediaQueries: ["Northwestern Polytechnical University Youyi campus Xi'an", "Northwestern Polytechnical University Chang'an campus library", "Northwestern Polytechnical University main gate"],
      visualMustShowEn: "Main campus gate or modern Chang'an Library building of Northwestern Polytechnical University in Xi'an",
      captionVi: "Đại học Bách khoa Tây Bắc (NPU, Tây An) — đại học kỹ thuật trọng điểm chuyên sâu về hàng không, vũ trụ và hàng hải.",
      captionEn: "Northwestern Polytechnical University in Xi'an, specializing in aerospace, astronautics, and marine engineering."
    },
    {
      replaceId: "csc-v7-09",
      oldDupZh: "重庆大学",
      newZh: "苏州大学",
      newNameVi: "Đại học Tô Châu (Soochow · Kiến trúc Cổ & Dệt may – Vật liệu)",
      newNameEn: "Soochow University (Suzhou · Historic Campus & Materials)",
      wikidataQid: "Q1152142",
      targetFile: "assets/images/universities/csc-v7-09.jpg",
      wikimediaQueries: ["Soochow University Clock Tower Tianci Zhuang Suzhou", "Soochow University historic gate Suzhou", "Soochow University Binglin Library Suzhou"],
      visualMustShowEn: "Historic red-brick Clock Tower and arched gate at Soochow University Tianci Zhuang campus in Suzhou",
      captionVi: "Đại học Tô Châu (Soochow) — khuôn viên lịch sử Thiên Tứ Trang nổi tiếng với Tháp Đồng hồ cổ và ngành vật liệu – nhân văn.",
      captionEn: "Soochow University in Suzhou, celebrated for its historic Tianci Zhuang Clock Tower campus and materials science."
    },
    {
      replaceId: "csc-v7-12",
      oldDupZh: "厦门大学",
      newZh: "北京中医药大学",
      newNameVi: "Đại học Trung Y Dược Bắc Kinh (BUCM · Văn hóa Y Dược Cổ)",
      newNameEn: "Beijing University of Chinese Medicine (BUCM · Traditional Heritage)",
      wikidataQid: "Q4881160",
      targetFile: "assets/images/universities/csc-v7-12.jpg",
      wikimediaQueries: ["Beijing University of Chinese Medicine Liangxiang campus", "Beijing University of Chinese Medicine Museum Beijing", "Beijing University of Chinese Medicine Hepingjie gate"],
      visualMustShowEn: "Main campus entrance or Traditional Chinese Medicine Museum hall at Beijing University of Chinese Medicine",
      captionVi: "Đại học Trung Y Dược Bắc Kinh (BUCM) — cơ sở nghiên cứu lịch sử, thực vật học và di sản y dược cổ truyền hàng đầu.",
      captionEn: "Beijing University of Chinese Medicine, leading research university for historical and botanical traditional medicine studies."
    }
  ]
};

if (typeof CCE_V8_PACK2_A !== 'undefined') { window.CCE_V8_PACK2_A = CCE_V8_PACK2_A; }
  var CCE_V8_PACK2_B = {
    brandsB: (typeof CCE_V8_PACK2_B_BRANDS !== 'undefined') ? CCE_V8_PACK2_B_BRANDS : [],
    gis42: (typeof CCE_V8_PACK2_B_GI !== 'undefined' && CCE_V8_PACK2_B_GI.gis42) ? CCE_V8_PACK2_B_GI.gis42 : [],
    replacementsGiV7: (typeof CCE_V8_PACK2_B_GI !== 'undefined' && CCE_V8_PACK2_B_GI.replacementsGiV7) ? CCE_V8_PACK2_B_GI.replacementsGiV7 : [],
    csc36: (typeof CCE_V8_PACK2_B_CSC !== 'undefined' && CCE_V8_PACK2_B_CSC.csc36) ? CCE_V8_PACK2_B_CSC.csc36 : [],
    replacementsCscV7: (typeof CCE_V8_PACK2_B_CSC !== 'undefined' && CCE_V8_PACK2_B_CSC.replacementsCscV7) ? CCE_V8_PACK2_B_CSC.replacementsCscV7 : []
  };
  window.CCE_V8_PACK2_B = CCE_V8_PACK2_B;
  window.CCE_V8_PACK2 = (function () {
    var merged = {};
    var k;
    var a = window.CCE_V8_PACK2_A || {};
    var b = window.CCE_V8_PACK2_B || {};
    for (k in a) {
      if (Object.prototype.hasOwnProperty.call(a, k)) { merged[k] = a[k]; }
    }
    for (k in b) {
      if (Object.prototype.hasOwnProperty.call(b, k)) { merged[k] = b[k]; }
    }
    return merged;
  })();
})();
