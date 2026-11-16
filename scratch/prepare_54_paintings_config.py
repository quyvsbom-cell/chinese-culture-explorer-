import json

with open('src/data/paintingsData.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('window.CCE_PAINTINGS =')
brace = text.find('{', start)
end = text.rfind('};')
if end == -1: end = text.rfind('}')
else: end += 1

data = json.loads(text[brace:end])
masterpieces = data.get('masterpieces', [])

print(f"Total masterpieces: {len(masterpieces)}")

# Map each masterpiece to authentic Wikimedia Commons public domain image files
# These are world-famous historical paintings with established canonical Commons files.
canonical_painting_files = {
    # 1. Wei-Jin & Southern/Northern Dynasties (魏晋南北朝)
    "luoshenfu-tu": {
        "search": "File:Gu Kaizhi - Nymph of the Luo River.jpg",
        "fallbacks": ["File:Nymph of the Luo River (Freer Gallery of Art).jpg", "File:Luo Shen Fu Tu (Song copy) Palace Museum.jpg"],
        "filename": "01_luoshenfu_tu.jpg"
    },
    "nvshi-zhentu": {
        "search": "File:Admonitions Scroll Scene 1-3.jpg",
        "fallbacks": ["File:Admonitions Scroll Scene 4-7.jpg", "File:Admonitions of the Court Instructress.jpg"],
        "filename": "02_nvshi_zhentu.jpg"
    },
    "ershiba-xiu": {
        "search": "File:Twenty-eight Mansions.jpg",
        "fallbacks": ["File:28 Lunar Mansions.jpg", "File:Zhang Sengyou - Twenty-eight Mansions.jpg"],
        "filename": "03_ershiba_xiu.jpg"
    },

    # 2. Sui-Tang (隋唐)
    "you-chun-tu": {
        "search": "File:Zhan Ziqian - Strolling About In Spring.jpg",
        "fallbacks": ["File:Zhan Ziqian Strolling in Spring.jpg", "File:Youchun Tu Zhan Ziqian.jpg"],
        "filename": "04_youchun_tu.jpg"
    },
    "bu-nian-tu": {
        "search": "File:Emperor Taizong receiving the Tibetan envoy.jpg",
        "fallbacks": ["File:Yan Liben - Bunian Tu.jpg", "File:Bunian Tu.jpg"],
        "filename": "05_bunian_tu.jpg"
    },
    "lidai-diwang-tu": {
        "search": "File:Thirteen Emperors Scroll.jpg",
        "fallbacks": ["File:Thirteen Emperors Scroll Boston.jpg", "File:Yan Liben Thirteen Emperors.jpg"],
        "filename": "06_lidai_diwang_tu.jpg"
    },
    "tianwang-songzi-tu": {
        "search": "File:Songzi Tianwang Tu.jpg",
        "fallbacks": ["File:Wu Daozi Songzi Tianwang Tu.jpg", "File:Wu Daozi - Heavenly Kings.jpg"],
        "filename": "07_tianwang_songzi_tu.jpg"
    },
    "guoguo-furen-youchun": {
        "search": "File:Lady Guoguo on a Spring Outing.jpg",
        "fallbacks": ["File:Guoguo Furen Youchun Tu.jpg", "File:Zhang Xuan - Lady Guoguo on a Spring Outing.jpg"],
        "filename": "08_guoguo_furen.jpg"
    },
    "daolian-tu": {
        "search": "File:Court Ladies Preparing Newly-Woven Silk.jpg",
        "fallbacks": ["File:Zhang Xuan - Court Ladies Preparing Newly Woven Silk.jpg", "File:Daolian Tu Boston MFA.jpg"],
        "filename": "09_daolian_tu.jpg"
    },
    "zhanhua-shinv-tu": {
        "search": "File:Ladies with Head-pinned Flowers.jpg",
        "fallbacks": ["File:Zhou Fang - Court Ladies Adorning Their Hair with Flowers.jpg", "File:Zhanhua Shinv Tu.jpg"],
        "filename": "10_zhanhua_shinv_tu.jpg"
    },
    "huishan-shinv-tu": {
        "search": "File:Court Ladies Waving Round Fans.jpg",
        "fallbacks": ["File:Zhou Fang - Court Ladies Waving Round Fans.jpg", "File:Huishan Shinv Tu Palace Museum.jpg"],
        "filename": "11_huishan_shinv_tu.jpg"
    },

    # 3. Five Dynasties & Song (五代十国、宋朝)
    "kuanglu-tu": {
        "search": "File:Jing Hao - Mount Lu.jpg",
        "fallbacks": ["File:Jing Hao - Mount Lu (Kuanglu Tu).jpg", "File:Kuanglu Tu Taipei.jpg"],
        "filename": "12_kuanglu_tu.jpg"
    },
    "xiaoxiang-tu": {
        "search": "File:Dong Yuan - The Xiao and Xiang Rivers.jpg",
        "fallbacks": ["File:Dong Yuan Xiao and Xiang Rivers.jpg", "File:Xiaoxiang Tu Dong Yuan.jpg"],
        "filename": "13_xiaoxiang_tu.jpg"
    },
    "hanlin-chongting": {
        "search": "File:Dong Yuan - Wintry Groves and Layered Banks.jpg",
        "fallbacks": ["File:Wintry Groves and Layered Banks Kurokawa.jpg", "File:Dong Yuan Hanlin Chongting.jpg"],
        "filename": "14_hanlin_chongting.jpg"
    },
    "qiushan-wendao": {
        "search": "File:Seeking the Dao in Autumn Mountains.jpg",
        "fallbacks": ["File:Ju Ran - Seeking the Dao in Autumn Mountains.jpg", "File:Qiushan Wendao Tu Juran.jpg"],
        "filename": "15_qiushan_wendao.jpg"
    },
    "hanxizai-yeyan": {
        "search": "File:The Night Revels of Han Xizai.jpg",
        "fallbacks": ["File:Gu Hongzhong - Night Revels of Han Xizai.jpg", "File:Han Xizai Night Banquet.jpg"],
        "filename": "16_hanxizai_yeyan.jpg"
    },
    "xiesheng-zhenqin": {
        "search": "File:Huang Quan - Sketches of Rare Birds.jpg",
        "fallbacks": ["File:Huang Quan Sketches of Rare Birds.jpg", "File:Xiesheng Zhenqin Tu.jpg"],
        "filename": "17_xiesheng_zhenqin.jpg"
    },
    "xishan-xinglv": {
        "search": "File:Fan Kuan - Travelers among Mountains and Streams.jpg",
        "fallbacks": ["File:Travelers among Mountains and Streams.jpg", "File:Fan Kuan Travelers.jpg"],
        "filename": "18_xishan_xinglv.jpg"
    },
    "zao-chun-tu": {
        "search": "File:Guo Xi - Early Spring.jpg",
        "fallbacks": ["File:Early Spring Guo Xi.jpg", "File:Guo Xi Early Spring NPM.jpg"],
        "filename": "19_zao_chun_tu.jpg"
    },
    "wanhe-songfeng-litang": {
        "search": "File:Wind in Pines Among a Myriad Valleys.jpg",
        "fallbacks": ["File:Li Tang - Wind in Pines Among a Myriad Valleys.jpg", "File:Li Tang Wind in Pines.jpg"],
        "filename": "20_wanhe_songfeng_litang.jpg"
    },
    "qingming-shanghe": {
        "search": "File:Along the River During the Qingming Festival (detail).jpg",
        "fallbacks": ["File:Along the River During the Qingming Festival.jpg", "File:Qingming Shanghe Tu Beijing.jpg"],
        "filename": "21_qingming_shanghe.jpg"
    },
    "qianli-jiangshan": {
        "search": "File:Wang Ximeng - A Thousand Li of Rivers and Mountains.jpg",
        "fallbacks": ["File:A Thousand Li of Rivers and Mountains.jpg", "File:Wang Ximeng Qianli Jiangshan.jpg"],
        "filename": "22_qianli_jiangshan.jpg"
    },
    "rui-he-tu": {
        "search": "File:Auspicious Cranes by Emperor Huizong.jpg",
        "fallbacks": ["File:Emperor Huizong - Auspicious Cranes.jpg", "File:Ruihe Tu Huizong.jpg"],
        "filename": "23_rui_he_tu.jpg"
    },
    "furong-jinji": {
        "search": "File:Emperor Huizong - Golden Pheasant and Cotton Rose.jpg",
        "fallbacks": ["File:Golden Pheasant and Cotton Rose Huizong.jpg", "File:Furong Jinji Tu.jpg"],
        "filename": "24_furong_jinji.jpg"
    },
    "wuma-tu": {
        "search": "File:Five Horses by Li Gonglin.jpg",
        "fallbacks": ["File:Li Gonglin - Five Horses.jpg", "File:Five Horses Li Gonglin Tokyo.jpg"],
        "filename": "25_wuma_tu.jpg"
    },
    "chushan-ruiai": {
        "search": "File:Mi Fu - Auspicious Pines on Spring Mountains.jpg",
        "fallbacks": ["File:Mi Fu Spring Mountains.jpg", "File:Chushan Ruiai Tu Mi Fu.jpg"],
        "filename": "26_chushan_ruiai.jpg"
    },
    "kumu-guaishi": {
        "search": "File:Su Shi - Wood and Rock.jpg",
        "fallbacks": ["File:Su Shi Withered Tree and Strange Rock.jpg", "File:Su Shi Kumu Guaishi.jpg"],
        "filename": "27_kumu_guaishi.jpg"
    },
    "libai-hangyin": {
        "search": "File:Liang Kai - Li Bai chanting a poem.jpg",
        "fallbacks": ["File:Liang Kai - Poet Li Bai.jpg", "File:Li Bai Chanting Liang Kai Tokyo.jpg"],
        "filename": "28_libai_hangyin.jpg"
    },
    "dage-tu": {
        "search": "File:Ma Yuan - Walking on a Path in Spring.jpg",
        "fallbacks": ["File:Ma Yuan - Dancing and Singing.jpg", "File:Ma Yuan Dage Tu.jpg"],
        "filename": "29_dage_tu.jpg"
    },

    # 4. Yuan Dynasty (元朝)
    "quehua-qiuse": {
        "search": "File:Autumn Colors on the Qiao and Hua Mountains.jpg",
        "fallbacks": ["File:Zhao Mengfu - Autumn Colors on the Qiao and Hua Mountains.jpg", "File:Zhao Mengfu Autumn Colors.jpg"],
        "filename": "30_quehua_qiuse.jpg"
    },
    "xiushi-shulin": {
        "search": "File:Zhao Mengfu - Elegant Rocks and Sparse Trees.jpg",
        "fallbacks": ["File:Zhao Mengfu Xiushi Shulin.jpg", "File:Zhao Mengfu Sparse Trees.jpg"],
        "filename": "31_xiushi_shulin.jpg"
    },
    "fuchun-shanju": {
        "search": "File:Dwelling in the Fuchun Mountains.jpg",
        "fallbacks": ["File:Huang Gongwang - Dwelling in the Fuchun Mountains.jpg", "File:Fuchun Shanju Tu.jpg"],
        "filename": "32_fuchun_shanju.jpg"
    },
    "dongting-yuyin": {
        "search": "File:Wu Zhen - Fishermen.jpg",
        "fallbacks": ["File:Wu Zhen - The Hermit Fisherman of Lake Dongting.jpg", "File:Wu Zhen Dongting Yuyin.jpg"],
        "filename": "33_dongting_yuyin.jpg"
    },
    "liujunzi-tu": {
        "search": "File:Ni Zan - Six Gentlemen.jpg",
        "fallbacks": ["File:Ni Zan Six Gentlemen Shanghai.jpg", "File:Ni Zan Liujunzi Tu.jpg"],
        "filename": "34_liujunzi_tu.jpg"
    },
    "qingbian-yinju": {
        "search": "File:Wang Meng - Dwelling in the Qingbian Mountains.jpg",
        "fallbacks": ["File:Wang Meng Qingbian Mountains Shanghai.jpg", "File:Wang Meng Qingbian Yinju.jpg"],
        "filename": "35_qingbian_yinju.jpg"
    },

    # 5. Ming Dynasty (明朝)
    "lushan-gao": {
        "search": "File:Shen Zhou - Lofty Mount Lu.jpg",
        "fallbacks": ["File:Shen Zhou Lofty Mount Lu Taipei.jpg", "File:Shen Zhou Lushan Gao.jpg"],
        "filename": "36_lushan_gao.jpg"
    },
    "gumu-youquan": {
        "search": "File:Wen Zhengming - Old Trees by a Cold Waterfall.jpg",
        "fallbacks": ["File:Wen Zhengming - Ancient Trees and Cold Spring.jpg", "File:Wen Zhengming Gumu Youquan.jpg"],
        "filename": "37_gumu_youquan.jpg"
    },
    "shanlu-songsheng": {
        "search": "File:Tang Yin - Whispering Pines on a Mountain Path.jpg",
        "fallbacks": ["File:Tang Yin Mountain Path Whispering Pines.jpg", "File:Tang Yin Shanlu Songsheng.jpg"],
        "filename": "38_shanlu_songsheng.jpg"
    },
    "hangong-chunxiao": {
        "search": "File:Qiu Ying - Spring Morning in the Han Palace.jpg",
        "fallbacks": ["File:Spring Morning in the Han Palace Qiu Ying.jpg", "File:Hangong Chunxiao Qiu Ying.jpg"],
        "filename": "39_hangong_chunxiao.jpg"
    },
    "qiuxing-bajing": {
        "search": "File:Dong Qichang - Eight Views of Autumn Moods.jpg",
        "fallbacks": ["File:Dong Qichang Eight Views Autumn.jpg", "File:Dong Qichang Autumn Moods.jpg"],
        "filename": "40_qiuxing_bajing.jpg"
    },
    "mo-putao": {
        "search": "File:Xu Wei - Grapes.jpg",
        "fallbacks": ["File:Xu Wei Inky Grapes Palace Museum.jpg", "File:Xu Wei Mo Putao.jpg"],
        "filename": "41_mo_putao.jpg"
    },
    "huishan-chahui": {
        "search": "File:Wen Zhengming - Tea Party at Huishan.jpg",
        "fallbacks": ["File:Wen Zhengming Huishan Tea Party.jpg", "File:Huishan Chahui Tu.jpg"],
        "filename": "42_huishan_chahui.jpg"
    },

    # 6. Qing Dynasty (清朝)
    "luomu-qiuse": {
        "search": "File:Wang Shimin - Autumn Landscape.jpg",
        "fallbacks": ["File:Wang Shimin - Falling Leaves and Autumn Colors.jpg", "File:Wang Shimin Luomu Qiuse.jpg"],
        "filename": "43_luomu_qiuse.jpg"
    },
    "kangxi-nanxun": {
        "search": "File:Wang Hui - Kangxi Southern Inspection Tour.jpg",
        "fallbacks": ["File:The Kangxi Emperor's Southern Inspection Tour, Scroll Seven.jpg", "File:Kangxi Nanxun Tu Wang Hui.jpg"],
        "filename": "44_kangxi_nanxun.jpg"
    },
    "wanhe-songfeng-qing": {
        "search": "File:Wang Yuanqi - Pines in Autumn Mountains.jpg",
        "fallbacks": ["File:Wang Yuanqi - Wind in Pines Among Valleys.jpg", "File:Wang Yuanqi Landscape.jpg"],
        "filename": "45_wanhe_songfeng_qing.jpg"
    },
    "huaiyang-jieqiu": {
        "search": "File:Shitao - Reminiscences of Qinhuai River.jpg",
        "fallbacks": ["File:Shitao - Landscape.jpg", "File:Shitao Huaiyang Jieqiu.jpg"],
        "filename": "46_huaiyang_jieqiu.jpg"
    },
    "kongque-zhushi": {
        "search": "File:Bada Shanren - Peacock and Bamboo.jpg",
        "fallbacks": ["File:Bada Shanren - Two Peacocks.jpg", "File:Bada Shanren Peacock Rock.jpg"],
        "filename": "47_kongque_zhushi.jpg"
    },
    "zhushi-tu": {
        "search": "File:Zheng Xie - Bamboo and Rocks.jpg",
        "fallbacks": ["File:Zheng Banqiao - Bamboo and Stone.jpg", "File:Zheng Banqiao Bamboo.jpg"],
        "filename": "48_zhushi_tu.jpg"
    },

    # 7. Modern & Contemporary (近现代)
    "moxia-tu": {
        "search": "File:Qi Baishi - Shrimps.jpg",
        "fallbacks": ["File:Qi Baishi Shrimps.jpg", "File:Qi Baishi Moxia.jpg"],
        "filename": "49_moxia_tu.jpg"
    },
    "benma-tu": {
        "search": "File:Xu Beihong - Galloping Horse.jpg",
        "fallbacks": ["File:Xu Beihong Galloping Horse.jpg", "File:Xu Beihong Benma.jpg"],
        "filename": "50_benma_tu.jpg"
    },
    "lushan-tu-daqian": {
        "search": "File:Zhang Daqian - Mount Lu.jpg",
        "fallbacks": ["File:Zhang Daqian Mount Lu Taipei.jpg", "File:Zhang Daqian Lushan Tu.jpg"],
        "filename": "51_lushan_tu_daqian.jpg"
    },
    "shujiang-bishitu": {
        "search": "File:Huang Binhong - Landscape.jpg",
        "fallbacks": ["File:Huang Binhong Green River Rocks.jpg", "File:Huang Binhong Shujiang.jpg"],
        "filename": "52_shujiang_bishitu.jpg"
    },
    "jiangshan-duojiao-1959": {
        "search": "File:Jiangshan Ruci Duojiao.jpg",
        "fallbacks": ["assets/images/jiangshan-ruci-duojiao.jpg"],
        "filename": "53_jiangshan_duojiao.jpg"
    },
    "wanshan-hongbian": {
        "search": "File:Li Keran - Thousands of Hills in a Crimson Blaze.jpg",
        "fallbacks": ["File:Li Keran Wanshan Hongbian.jpg", "File:Li Keran Crimson Hills.jpg"],
        "filename": "54_wanshan_hongbian.jpg"
    }
}

out_list = []
for p in masterpieces:
    pid = p.get('id')
    canon = canonical_painting_files.get(pid, {})
    out_list.append({
        "id": pid,
        "titleZh": p.get('titleZh'),
        "titleVi": p.get('titleVi'),
        "artistZh": p.get('artist', {}).get('nameZh'),
        "artistVi": p.get('artist', {}).get('nameVi'),
        "museum": p.get('museum'),
        "eraId": p.get('eraId'),
        "search": canon.get('search', f"File:{p.get('titleZh')}.jpg"),
        "fallbacks": canon.get('fallbacks', []),
        "filename": canon.get('filename', f"{pid}.jpg")
    })

with open('scratch/paintings_download_config.json', 'w', encoding='utf-8') as f:
    json.dump(out_list, f, ensure_ascii=False, indent=2)

print(f"Saved paintings download config: {len(out_list)} entries.")
