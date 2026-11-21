(function () {
  'use strict';

  function PQ(sourceZh, sourceVi, sourceEn, originalZh, pinyin, hanViet, meaningVi, meaningEn) {
    return {
      source: sourceVi + " (" + sourceZh + ")",
      sourceZh: sourceZh,
      sourceVi: sourceVi,
      sourceEn: sourceEn + " (" + sourceZh + ")",
      zh: originalZh,
      quoteZh: originalZh,
      originalZh: originalZh,
      pinyin: pinyin,
      hanViet: hanViet,
      translationVi: meaningVi,
      translationEn: meaningEn,
      meaningVi: meaningVi,
      meaningEn: meaningEn
    };
  }

  var EN_ARTICLES_V3_PART2B = {
    'pre-qin-legalism-xunzi-hanfeizi': {
      id: 'pre-qin-legalism-xunzi-hanfeizi',
      number: 81,
      category: 'philosophy',
      categoryLabel: 'Philosophy & Religion',
      title: 'Pre-Qin Political and Legalist Dialogue: From Xunzi\'s Human Nature and Ritual–Law to Han Feizi\'s Law, Statecraft, and Authority',
      titleZh: '先秦政治法家对话：从荀子性恶礼法到韩非子法术势',
      titleZhTrad: '先秦政治法家對話：從荀子性惡禮法到韓非子法術勢',
      readMinutes: 15,
      epistemicTag: 'Ancient Political Philosophy',
      abstract: 'This treatise examines the intellectual shift from Xunzi\'s realist Confucianism (c. 313–238 BCE) to the Legalist synthesis of his student Han Feizi (c. 280–233 BCE), unpacking "human nature is bad" and deliberate cultivation, the nexus of Ritual and Law, and the political triad of Law (Fa), Statecraft (Shu), and Positional Power (Shi).',
      keyTakeaways: [
        'Countering Mencius\'s thesis of innate goodness, Xunzi argued that untutored human nature seeks profit and breeds conflict ("human nature is bad"), requiring sage-crafted Ritual and Law for moral cultivation.',
        'Han Feizi inherited Xunzi\'s premise of self-interested human nature but abandoned faith in moral suasion, synthesizing three Legalist strands: Shang Yang\'s Law (Fa), Shen Buhai\'s administrative Statecraft (Shu), and Shen Dao\'s Positional Authority (Shi).',
        'From the Han dynasty onward, imperial Chinese governance rejected pure Confucianism or pure Legalism in favor of a durable synthesis: "Confucian exterior, Legalist core."'
      ],
      introduction: 'By the late Warring States period (3rd century BCE), as wars of annexation among the Seven Great Powers entered their decisive phase, Mencius\'s ideal of benevolent kingship struggled to persuade rulers seeking fiscal and military survival. Two of pre-Qin China\'s sharpest political minds—master Xunzi (Xun Kuang) and his student Han Feizi (alongside Qin Chancellor Li Si)—redirected political philosophy from inward moral self-cultivation toward objective institutional design, administrative discipline, and incentive-driven governance.',
      historicalBackground: 'Xunzi served as Libationer (head scholar) of Qi\'s famed Jixia Academy and Magistrate of Lanling in Chu. Witnessing the collapse of Zhou kinship order amid total war, he critically synthesized Confucian, Daoist, Logician, and Legalist insights into a secular rationalist Confucianism ("Heaven moves with constancy"). His direct pupil, Prince Han Fei of the embattled state of Han, suffered from a speech impediment yet authored the incisive 55-chapter "Han Feizi." Upon reading his chapters "Solitary Indignation" and "Five Vermin," King Ying Zheng of Qin longed to meet him; although Han Fei died in a Qin prison in 233 BCE, his doctrines provided the blueprint of the Qin Empire.',
      mainContent: [
        {
          heading: '1. Xunzi: "Human Nature Is Bad," Deliberate Cultivation, and the Ritual–Law Bridge',
          body: 'In his chapter "Human Nature Is Bad," Xunzi directly challenged Mencius: innate endowments ("Xing") incline humans toward appetite, gain, and envy; goodness arises only through conscious education and habituation ("Wei"—deliberate artifice). Just as warped wood requires steam and a straightening press, society requires Ritual (allocating status and resources to avert strife) and Law (penalties restraining transgressors). Xunzi\'s pivotal move was pairing Ritual with Law ("exalt ritual and emphasize law"), treating Ritual as the ethical root of Law and Law as its enforcement arm. In "Discourse on Heaven," he further decoupled morality from supernatural intervention ("Heaven operates with constancy; it does not endure for Yao nor perish for Jie"), opening the door to secular statecraft.'
        },
        {
          heading: '2. Han Feizi\'s Triad of Power: Fa (Law), Shu (Statecraft), and Shi (Authority)',
          body: 'Han Feizi pushed Xunzi\'s self-interest premise to its logical extreme: even ruler–minister ties are transactions of interest rather than spontaneous loyalty. Critiquing earlier Legalists as incomplete—Shang Yang had Law without Statecraft, Shen Buhai had Statecraft without Law, and Shen Dao focused solely on Authority—he welded all three into one system. "Fa" meant public, written statutes applied impartially regardless of rank ("punishment does not spare high ministers; reward does not overlook commoners"). "Shu" meant confidential administrative techniques enabling the ruler to audit officials by matching stated duties against actual outcomes ("Xing–Ming"). "Shi" meant objective institutional authority: even sage-king Yao as a commoner could not command three men, whereas tyrant Jie atop the throne swayed the entire realm.'
        },
        {
          heading: '3. Critique of Confucianism and Mohism and Historical Evolution',
          body: 'Rejecting Confucian reverence for ancient sage-kings, Han Feizi articulated a pragmatic evolutionary view of history in "Five Vermin" (targeting literary Confucians and private knights-errant): "When circumstances change, methods of governance must change." His celebrated fable of the farmer "waiting by a tree stump for another hare" mocked anyone applying Xia–Zhou rituals to Warring States realities, arguing instead that the state\'s sole objective is "enriching the state and strengthening the army" through agriculture and military merit.'
        },
        {
          heading: '4. Legacy of "Confucian Exterior, Legalist Core" in Imperial East Asia',
          body: 'Although uncompromising Legalism precipitated Qin\'s swift collapse in 206 BCE, imperial governance from Han Emperor Xuan onward ("the Han house has its own institutions, blending the Kingly Way and the Hegemon\'s Way") fused both legacies: Confucianism supplied education, civil examinations, and moral legitimacy ("Confucian exterior"), while administration, taxation, bureaucratic surveillance, and criminal statutes ran on Legalist principles ("Legalist core").'
        }
      ],
      theoreticalFramework: 'In comparative political science, Han Feizi is frequently paired with Niccolo Machiavelli ("The Prince," 1513) and Thomas Hobbes ("Leviathan," 1651) for stripping moralism from power analysis. Crucially, unlike modern constitutional "Rule of Law" (which constrains the sovereign), pre-Qin Legalism represents instrumental "Rule by Law," deploying standardized statutes to maximize state efficiency and centralize imperial control.',
      terminologyAndLiushu: [
        {
          hanzi: '法',
          pinyin: 'fǎ',
          hanViet: 'Pháp',
          liushu: 'Compound Ideograph (Huiyi)',
          gloss: 'Archaic form 灋 combines water (氵: level fairness), the mythical beast Zhi (廌: exposing the guilty), and 去 (removing wrongdoers); denotes objective statutory law.'
        },
        {
          hanzi: '术',
          pinyin: 'shù',
          hanViet: 'Thuật',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Traditional 術 combines road (行) and 术 for sound; denotes administrative method and statecraft for monitoring officials.'
        },
        {
          hanzi: '势',
          pinyin: 'shì',
          hanViet: 'Thế',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Traditional 勢 combines 埶 and force (力); designates objective positional power inherent in the throne.'
        },
        {
          hanzi: '伪',
          pinyin: 'wěi',
          hanViet: 'Ngụy (Nhân vi)',
          liushu: 'Phono-semantic / Compound Ideograph',
          gloss: 'Combines person (亻) and make/do (为/為); in Xunzi means not "falsehood," but deliberate human effort and moral cultivation.'
        },
        {
          hanzi: '刑',
          pinyin: 'xíng',
          hanViet: 'Hình',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines 开/幵 and knife (刂); denotes legal punishment and, in "Xing–Ming," matching official performance against title.'
        }
      ],
      primarySources: [
        PQ(
          '《荀子·性恶》',
          'Tuân Tử — Thiên Tính Ác',
          'Xunzi, Chapter 23: Human Nature Is Bad',
          '人之性恶，其善者伪也。',
          'Rén zhī xìng è, qí shànzhě wěi yě.',
          'Nhân chi tính ác, kỳ thiện giả ngụy dã.',
          'Bản tính tự nhiên của con người là hướng về tư lợi (ác), những điều thiện mỹ đều là kết quả của sự giáo dục, rèn luyện nhân tạo (ngụy).',
          'Human nature is bad; whatever is good in humans is the product of deliberate moral cultivation.'
        ),
        PQ(
          '《韩非子·有度》',
          'Hàn Phi Tử — Thiên Hữu Độ',
          'Han Feizi, Chapter 6: On Having Standards',
          '法不阿贵，绳不挠曲。刑过不避大臣，赏善不遗匹夫。',
          'Fǎ bù ē guì, shéng bù náo qū. Xíngguò bù bì dàchén, shǎngshàn bù yí pǐfū.',
          'Pháp bất a quý, thằng bất nạo khúc. Hình quá bất tị đại thần, thưởng thiện bất di thất phu.',
          'Pháp luật không thiên vị kẻ quyền quý, dây mực thợ mộc không uốn cong theo gỗ vẹo. Xử phạt kẻ phạm tội không né tránh đại thần, khen thưởng người làm tốt không bỏ sót dân thường.',
          'The law does not fawn upon the noble, just as the carpenter\'s inked line does not bend to crooked timber. Punishment does not spare high ministers, and reward does not overlook humble commoners.'
        )
      ],
      sinoVietnameseComparison: 'The "Confucian exterior, Legalist core" paradigm is vividly reflected in Dai Viet statecraft under Emperor Le Thanh Tong (r. 1460–1497). While the court promoted Confucian scholarship via civil exams and Temple of Literature steles, the "Hong Duc Code" (Quoc Trieu Hinh Luat) enforced strict anti-corruption accountability, protected communal land, and incorporated progressive clauses safeguarding women\'s inheritance rights absent from Ming–Qing codes.',
      additionalReferences: [
        'Xunzi, Xunzi Jijie (Collected Commentaries by Wang Xianqian).',
        'Han Feizi, Han Feizi Jishi (Collected Annotations by Chen Qiyou).',
        'Yuri Pines (2012), The Everlasting Empire: The Political Culture of Ancient China and Its Imperial Legacy, Princeton University Press.'
      ],
      conclusion: 'The intellectual dialogue between Xunzi and Han Feizi marked the rationalist maturation of ancient Chinese political theory by confronting institutional power directly. Fusing Xunzi\'s Ritual–Law framework with Han Feizi\'s Fa–Shu–Shi triad supplied the governance toolkit that sustained East Asian imperial states for over two millennia.'
    },
    'song-ming-neo-confucianism-zhu-wang': {
      id: 'song-ming-neo-confucianism-zhu-wang',
      number: 82,
      category: 'philosophy',
      categoryLabel: 'Philosophy & Religion',
      title: 'Song–Ming Neo-Confucianism: Zhu Xi\'s Investigation of Things vs. Wang Yangming\'s Unity of Knowledge and Action and Their Impact in Dai Viet',
      titleZh: '宋明理学：朱熹格物致知与王阳明知行合一及对大越影响',
      titleZhTrad: '宋明理學：朱熹格物致知與王陽明知行合一及對大越影響',
      readMinutes: 15,
      epistemicTag: 'Song–Ming Philosophy & East Asian Thought',
      abstract: 'This treatise contrasts the two grand pillars of late-imperial Confucianism—Cheng–Zhu School of Principle (Zhu Xi, 1130–1200) and Lu–Wang School of Mind (Wang Yangming, 1472–1529)—examining Principle and Qi, Investigation of Things, Unity of Knowledge and Action, and their reception across Dai Viet from the 15th to 19th centuries.',
      keyTakeaways: [
        'Song–Ming Neo-Confucianism rebuilt Confucian metaphysics and psychology in response to the deep philosophical challenge posed by Tang–Song Chan Buddhism and Daoism.',
        'Zhu Xi distinguished Principle (Li) from Material Force (Qi), advocating "Investigating Things to Extend Knowledge" (Gewu Zhizhi) and compiling the "Collected Commentaries on the Four Books" that governed civil exams for over 600 years.',
        'Following his 1508 enlightenment at Longchang, Wang Yangming challenged bookish scholasticism with "Mind is Principle," "Unity of Knowledge and Action," and "Extending Innate Moral Knowing" (Zhi Liangzhi).'
      ],
      introduction: 'Whereas pre-Qin Confucianism (Confucius, Mencius, Xunzi) centered on social ethics and governance, Song–Ming thinkers (11th–16th centuries) erected a vast ontological and epistemological architecture known as Neo-Confucianism (Lixue / Daoxue). At its core stands a four-century intellectual dialogue between two schools: Zhu Xi\'s outward-looking, textual School of Principle and Wang Yangming\'s inward-looking, action-oriented School of Mind.',
      historicalBackground: 'From the Northern–Southern Dynasties through the Tang, Buddhism (notably Chan and Huayan) and Daoism dominated ontology and psychology, threatening to reduce Confucianism to ceremonial convention. Beginning with the Five Northern Song Masters (Zhou Dunyi, Shao Yong, Zhang Zai, Cheng Hao, Cheng Yi), Confucians selectively absorbed Buddhist–Daoist dialectics to reinterpret the "Yijing," "Great Learning," "Doctrine of the Mean," and "Mencius." In the Southern Song, Zhu Xi synthesized Cheng–Zhu Lixue and famously debated Lu Jiuyuan at Goose Lake Temple (1175). Three centuries later, as examination orthodoxy calcified into rigid eight-legged essays, Wang Yangming launched the School of Mind revolution across China, Japan, and Vietnam.',
      mainContent: [
        {
          heading: '1. Cheng–Zhu School of Principle: Li–Qi Metaphysics and "Investigating Things"',
          body: 'Building on Cheng Yi, Zhu Xi articulated a unified dualism of "Li" (Supreme Ultimate—universal moral and natural pattern) and "Qi" (dynamic psycho-physical energy forming concrete phenomena), encapsulated in "Principle is one, its manifestations are many" (like one moon reflected across ten thousand rivers). Methodologically, he interpreted "Gewu Zhizhi" in the "Great Learning" as patiently investigating the principles of external affairs and classical texts day by day until reaching sudden comprehensive penetration. In 1313 under Yuan Emperor Renzong, Zhu Xi\'s "Collected Commentaries on the Four Books" became the sole orthodox civil examination curriculum, remaining so throughout the Ming and Qing.'
        },
        {
          heading: '2. The 1508 Longchang Enlightenment and Wang Yangming\'s School of Mind',
          body: 'As a youth, Wang Yangming tested Zhu Xi\'s method by staring at courtyard bamboo for seven days to fathom its principle, falling ill without illumination. In 1506, after defending remonstrating officials against eunuch Liu Jin, he was flogged and exiled to a remote postal station at Longchang (Guizhou). Confronting hardship in 1508, he experienced a sudden awakening: "The Way of the Sages is complete within my own nature." He concluded that "Mind is Principle" (no principle exists outside human moral consciousness) and "nothing exists apart from the mind" (things acquire moral meaning through conscious engagement).'
        },
        {
          heading: '3. "Unity of Knowledge and Action" and "Extending Innate Moral Knowing"',
          body: 'Wang Yangming\'s two practical doctrines targeted Ming literati hypocrisy. First, "Unity of Knowledge and Action" (Zhixing Heyi): knowing without acting is not genuine knowing; knowledge initiates action, and action completes knowledge. Second, "Extending Innate Moral Knowing" (Zhi Liangzhi): reviving Mencius\'s innate moral intuition, he proclaimed that "the streets are full of sages"—scholars, farmers, artisans, and merchants alike can realize sagehood by acting faithfully on conscience. This egalitarian turn liberated late-Ming individuality (Taizhou School, Li Zhi) and inspired decisive civic action.'
        },
        {
          heading: '4. Reception of Cheng–Zhu Lixue and Yangming Thought in Dai Viet',
          body: 'In Dai Viet, Cheng–Zhu Neo-Confucianism became state orthodoxy from the Early Le dynasty (15th century), shaping metropolitan examinations and encyclopedic scholars such as Le Quy Don ("Van Dai Loai Ngu") and Ngo Thi Nham. Concurrently, moral intuition and activist pragmatism resonant with the School of Mind permeated Vietnamese letters, surging again in the early 20th century through the Duy Tan reform movement (Phan Boi Chau, Phan Chau Trinh), inspired in part by the role of Yomeigaku (Yangming thought) in Japan\'s Meiji Restoration.'
        }
      ],
      theoreticalFramework: 'Epistemologically, the Zhu Xi–Wang Yangming debate reflects two enduring models of truth: Zhu Xi exemplifies cumulative objective rationalism (proceeding from empirical and textual inquiry toward moral clarity), whereas Wang Yangming exemplifies moral phenomenology and action-centered pragmatism (anchoring truth in direct moral agency).',
      terminologyAndLiushu: [
        {
          hanzi: '理',
          pinyin: 'lǐ',
          hanViet: 'Lý',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines jade (王/玉) and 里 for sound; originally carving jade along its natural grain, extended to cosmic pattern and moral principle.'
        },
        {
          hanzi: '气',
          pinyin: 'qì',
          hanViet: 'Khí',
          liushu: 'Pictograph / Phono-semantic',
          gloss: 'Traditional 氣 combines rising vapor (气) and rice (米); denotes the dynamic psycho-physical energy constituting all tangible things.'
        },
        {
          hanzi: '格',
          pinyin: 'gé',
          hanViet: 'Cách',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines wood (木) and 各 for sound; glossed by Zhu Xi as "reaching/investigating thoroughly" and by Wang Yangming as "rectifying the mind."'
        },
        {
          hanzi: '良',
          pinyin: 'liáng',
          hanViet: 'Lương',
          liushu: 'Pictograph / Compound Ideograph',
          gloss: 'Originally "good, pure"; in "Liangzhi" (良知), denotes innate moral knowing free of selfish calculation.'
        },
        {
          hanzi: '诚',
          pinyin: 'chéng',
          hanViet: 'Thành',
          liushu: 'Phono-semantic / Compound Ideograph',
          gloss: 'Combines speech (讠/言) and accomplish (成); signifies authentic integrity uniting intent, word, and deed.'
        }
      ],
      primarySources: [
        PQ(
          '《传习录·上》（王阳明）',
          'Truyền Tập Lục — Quyển Thượng (Vương Dương Minh)',
          'Instructions for Practical Living (Chuanxilu), Part I — Wang Yangming',
          '知是行之始，行是知之成。未有知而不行者。知而不行，只是未知。',
          'Zhī shì xíng zhī shǐ, xíng shì zhī zhī chéng. Wèiyǒu zhī ér bùxíng zhě. Zhī ér bùxíng, zhǐshì wèizhī.',
          'Tri thị hành chi thủy, hành thị tri chi thành. Vị hữu tri nhi bất hành giả. Tri nhi bất hành, chỉ thị vị tri.',
          'Biết là khởi đầu của làm, làm là sự hoàn thành của biết. Chưa từng có ai thực sự biết mà không làm; biết mà không làm thì thực chất là chưa biết.',
          'Knowledge is the beginning of action; action is the completion of knowledge. There have never been people who truly know yet do not act; those who claim to know without acting simply do not yet know.'
        ),
        PQ(
          '《朱子语类·卷一》（朱熹）',
          'Chu Tử Ngữ Loại — Quyển 1 (Chu Hy)',
          'Classified Conversations of Master Zhu (Zhuzi Yulei), Ch. 1',
          '天下未有无理之气，亦未有无气之理。',
          'Tiānxià wèiyǒu wúlǐ zhī qì, yì wèiyǒu wúqì zhī lǐ.',
          'Thiên hạ vị hữu vô lý chi khí, diệc vị hữu vô khí chi lý.',
          'Trong thiên hạ chưa từng có Khí nào tồn tại mà không có Lý, cũng chưa từng có Lý nào tồn tại mà không nương tựa vào Khí.',
          'Under Heaven there has never been qi without principle (li), nor has there ever been principle without qi.'
        )
      ],
      sinoVietnameseComparison: 'While Ming–Qing Lixue occasionally stiffened into exam scholasticism, Dai Viet polymaths such as Le Quy Don (1726–1784) applied Zhu Xi\'s "Investigation of Things" empirically across Vietnamese geography, agronomy, natural history, and institutions in "Van Dai Loai Ngu," while late-19th and early-20th-century reformers drew activist inspiration from Wang Yangming\'s "Unity of Knowledge and Action."',
      additionalReferences: [
        'Zhu Xi, Sishu Zhangju Jizhu (Collected Commentaries on the Four Books).',
        'Wang Yangming, Instructions for Practical Living (trans. Wing-tsit Chan, 1963), Columbia University Press.',
        'Tran Trong Kim (1930), Nho Giao (Confucianism).'
      ],
      conclusion: 'Song–Ming Neo-Confucianism equipped Confucianism with a comprehensive metaphysics capable of engaging Buddhism and Daoism on equal footing. Its complementary poles—Zhu Xi\'s disciplined inquiry and Wang Yangming\'s conscientious action—remain vital guides for scholarship and practical ethics.'
    },
    'chinese-chan-buddhism-aesthetics': {
      id: 'chinese-chan-buddhism-aesthetics',
      number: 83,
      category: 'philosophy',
      categoryLabel: 'Philosophy & Religion',
      title: 'Chinese Chan Buddhism: Bodhidharma, the Platform Sutra, the Five Houses, and the Aesthetics of Ink Wash and Tea',
      titleZh: '中国禅宗：达摩、《六祖坛经》、五家七宗与水墨茶道美学',
      titleZhTrad: '中國禪宗：達摩、《六祖壇經》、五家七宗與水墨茶道美學',
      readMinutes: 15,
      epistemicTag: 'Buddhist Philosophy & East Asian Aesthetics',
      abstract: 'This treatise traces the Sinicization of Indian Buddhism into Chinese Chan—from Bodhidharma and Sixth Patriarch Huineng\'s "Sudden Awakening" in the "Platform Sutra" through the Tang–Song Five Houses, to Chan\'s transformative impact on monochrome ink-wash painting and East Asian tea culture.',
      keyTakeaways: [
        'Chan fused Mahayana Buddha-nature doctrine with Zhuangzi\'s Daoist spontaneity, encapsulated in four principles: "A special transmission outside scriptures; not founded upon words and letters; pointing directly to the human mind; seeing into one\'s nature and attaining Buddhahood."',
        'Sixth Patriarch Huineng (638–713), through the "Platform Sutra"—the sole Buddhist scripture spoken by a Chinese master accorded the title "Sutra"—relocated awakening from scholastic halls into daily physical labor (Baizhang\'s rule: "A day without work is a day without food").',
        'Chan aesthetics prized direct intuition, sparseness, spontaneity, and empty space (Liubai), directly birthing monochrome splashed-ink painting (Wang Wei, Liang Kai, Muqi), Chan poetry, and the ideal of "Tea and Chan have one flavor."'
      ],
      introduction: 'Among all Buddhist schools transmitted to China, Chan represents the most original synthesis of Indian and Chinese civilization. Moving beyond textual translation and scholastic exegesis, Chan transformed spiritual practice from secluded asceticism into immediate wakefulness within ordinary life—spreading from China to Vietnam (Vinitaruci, Vo Ngon Thong, Thao Duong, and Truc Lam schools), Korea (Seon), and Japan (Zen).',
      historicalBackground: 'According to traditional lineage accounts, in the early 6th century Indian master Bodhidharma arrived in Guangzhou and later spent nine years in wall-gazing meditation at Shaolin Monastery on Mount Song, transmitting the robe and bowl through Huike, Sengcan, Daoxin, and Fifth Patriarch Hongren (Huangmei, Hubei). In the late 7th century, the split between Shenxiu\'s Northern School ("gradual polishing of the mirror") and Huineng\'s Southern School ("sudden awakening—originally not a single thing exists") proved decisive. After the An Lushan Rebellion and the Huichang Persecution (845) devastated court-dependent textual schools, self-reliant agrarian Chan monasteries rose to lead Chinese Buddhism.',
      mainContent: [
        {
          heading: '1. Sudden Awakening in the Platform Sutra and Baizhang\'s Monastic Rules',
          body: 'Born an illiterate woodcutter in Lingnan (Xinzhou, Guangdong), Huineng (638–713) became Sixth Patriarch and taught at Baolin Monastery (Caoxi, Shaoguan). His recorded sermons—the "Platform Sutra" (earliest manuscript preserved in Dunhuang Cave 17)—proclaimed inherent Buddha-nature in all beings: awakening requires neither scholastic erudition nor flight from the world ("Buddhadharma is in the world; awakening is not apart from the world"). In the 8th–9th centuries, Master Baizhang Huaihai (720–814) established self-supporting Chan monasteries governed by "A day without work is a day without food," turning wood-chopping, water-carrying, and tea cultivation into living meditation.'
        },
        {
          heading: '2. The Five Houses, Seven Schools, and Gong\'an (Koan) Method',
          body: 'Descending from Mazu Daoyi and Shitou Xiqian, late-Tang to Northern Song Chan blossomed into the Five Houses (Linji, Guiyang, Caodong, Yunmen, Fayan), expanding to Seven Schools via Linji\'s Huanglong and Yangqi branches. Two lineages proved most enduring: Linji (Rinzai), deploying Master Linji Yixuan\'s sudden shouts, staff blows, and paradoxical "Gong\'an" cases ("Does a dog have Buddha-nature?") to shatter dualistic intellect; and Caodong (Soto), emphasizing "Silent Illumination" sitting without striving. Song anthologies such as the "Blue Cliff Record" and "Gateless Gate" elevated Chan dialogue into classic literature.'
        },
        {
          heading: '3. Chan Aesthetics in Monochrome Ink Wash and Tang–Song Poetry',
          body: 'Chan\'s distrust of rigid verbalization freed Chinese painting from ornate courtly polychrome toward austere black ink on white paper. Tang poet-painter Wang Wei ("painting within poetry, poetry within painting") infused quatrains and broken-ink landscapes with quiet mindfulness; Southern Song Chan painters Liang Kai ("Sixth Patriarch Chopping Bamboo," "Immortal in Splashed Ink" rendered in minimal strokes) and Muqi ("Six Persimmons") turned spontaneous brushwork and unpainted void (Liubai) into direct visual expressions of Emptiness (Sunyata).'
        },
        {
          heading: '4. "Tea and Chan Have One Flavor" in Daily Life',
          body: 'Tea and Chan bonded over nocturnal meditation—Tang monasteries cultivated dedicated mountain tea gardens such as Jingshan Temple near Hangzhou. Master Zhaozhou Congshen\'s (778–897) terse reply "Go have a cup of tea!" elevated everyday brewing and drinking into full present-moment awareness, inspiring the maxim "Tea and Chan share one flavor" and later shaping Japanese tea ceremony through visiting monks Eisai and Dogen.'
        }
      ],
      theoreticalFramework: 'Scholars of Buddhism and aesthetics (D. T. Suzuki, Hu Shi, and Li Zehou in "The Path of Beauty") view Chan as East Asia\'s deepest "de-formalization and aestheticization" of religion: relocating the absolute from a distant beyond into pure immediate perception, thereby anchoring classical art\'s core principle of "meaning beyond words" (Yizai yanwai).',
      terminologyAndLiushu: [
        {
          hanzi: '禅',
          pinyin: 'chán',
          hanViet: 'Thiền',
          liushu: 'Phono-semantic (transliteration)',
          gloss: 'Abbreviation of 禅那 (Sanskrit Dhyana, meditative absorption); combines 礻 and 单 to denote serene, lucid awareness.'
        },
        {
          hanzi: '悟',
          pinyin: 'wù',
          hanViet: 'Ngộ',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines heart-mind (忄) and self (吾); denotes direct awakening to one\'s intrinsic Buddha-nature ("Dunwu").'
        },
        {
          hanzi: '空',
          pinyin: 'kōng',
          hanViet: 'Không',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines cave/space (穴) and 工 for sound; translates Sanskrit "Sunyata" (interdependent emptiness devoid of fixed self-essence).'
        },
        {
          hanzi: '机',
          pinyin: 'jī',
          hanViet: 'Cơ',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Traditional 機 combines wood (木) and 幾; originally a crossbow trigger, in Chan denotes the decisive pivot ("Chanji") sparking sudden insight.'
        },
        {
          hanzi: '偈',
          pinyin: 'jì',
          hanViet: 'Kệ',
          liushu: 'Phono-semantic (transliteration)',
          gloss: 'Renders Sanskrit "Gatha"; a concise verse encapsulating awakening, epitomized by the rival verses of Shenxiu and Huineng.'
        }
      ],
      primarySources: [
        PQ(
          '《六祖坛经·行由品》',
          'Lục Tổ Đàn Kinh — Phẩm Hành Do',
          'Platform Sutra of the Sixth Patriarch, Chapter 1',
          '菩提本无树，明镜亦非台。本来无一物，何处惹尘埃。',
          'Pútí běn wú shù, míngjìng yì fēi tái. Běnlái wú yīwù, héchù rě chén\'āi.',
          'Bồ đề bản vô thụ, minh kính diệc phi đài. Bản lai vô nhất vật, hà xứ nhạ trần ai.',
          'Bồ đề vốn chẳng phải cây, gương sáng cũng chẳng có đài. Xưa nay vốn không một vật, chỗ nào bám được bụi trần?',
          'Bodhi originally has no tree; the bright mirror also has no stand. Fundamentally there is not a single thing—where could dust alight?'
        ),
        PQ(
          '《五灯会元·卷四·赵州从谂禅师》',
          'Ngũ Đăng Hội Nguyên — Quyển 4 (Thiền sư Triệu Châu)',
          'Compendium of Five Lamps, Vol. 4 (Master Zhaozhou Congshen)',
          '吃茶去！',
          'Chī chá qù!',
          'Cật trà khứ!',
          'Đi uống trà đi! (Lời đáp bình dị phá bỏ mọi phân biệt cũ–mới, thánh–phàm để đưa người học trở về tỉnh thức hiện tại).',
          'Go have a cup of tea!'
        )
      ],
      sinoVietnameseComparison: 'Chinese Chan engaged directly with Vietnamese Buddhism from its earliest centuries: in the 6th century, Master Vinitaruci (disciple of Third Patriarch Sengcan) founded Vietnam\'s first Zen school at Phap Van Pagoda (Bac Ninh), followed in 820 by Master Vo Ngon Thong (disciple of Baizhang Huaihai) at Kien So Pagoda. Localization culminated in 1299 when Emperor-Monk Tran Nhan Tong unified earlier lineages into the indigenous Truc Lam Yen Tu Zen school, uniting spiritual awakening with active civic engagement ("Dwelling in the world, rejoicing in the Way").',
      additionalReferences: [
        'The Platform Sutra of the Sixth Patriarch (Dunhuang text, trans. Philip B. Yampolsky, 1967), Columbia University Press.',
        'Li Zehou (1981), The Path of Beauty (Meide Licheng).',
        'Nguyen Lang (Thich Nhat Hanh), Viet Nam Phat Giao Su Luan (History of Vietnamese Buddhism).'
      ],
      conclusion: 'Chan stands as China\'s signature cultural synthesis, transforming Indian liberation philosophy into an art of lucid presence within everyday life. From incisive koan exchanges to unpainted ink-wash voids and a simple cup of tea, Chan shaped a minimalist aesthetic that continues to resonate across East Asia.'
    },
    'mohism-logic-optics-ethics': {
      id: 'mohism-logic-optics-ethics',
      number: 84,
      category: 'philosophy',
      categoryLabel: 'Philosophy & Religion',
      title: 'Mohism: Universal Love, Non-Aggression, Defensive Engineering, and Early Geometry, Optics, and Logic in the Mohist Canon',
      titleZh: '墨家学派：兼爱非攻、守城工程与《墨经》几何光学逻辑',
      titleZhTrad: '墨家學派：兼愛非攻、守城工程與《墨經》幾何光學邏輯',
      readMinutes: 14,
      epistemicTag: 'Pre-Qin Philosophy & History of Science',
      abstract: 'This treatise examines the most distinctive movement of the Hundred Schools—Mohism, founded by Mo Di (c. 470–391 BCE): its utilitarian ethics of Universal Love and Non-Aggression, its disciplined artisan-defender organization, and the pioneering optics (pinhole camera), geometry, mechanics, and formal logic preserved in the "Mohist Canon."',
      keyTakeaways: [
        'Challenging Confucian graded familial love, Mozi advocated impartial "Universal Love" (Jian\'ai) and practical "Non-Aggression" (Feigong), physically assisting small states in fortifying cities against invaders.',
        'The six chapters of the "Mohist Canon" (Mojing) preserve extraordinary ancient empirical science: explaining rectilinear light propagation via pinhole inverted imaging, plane/concave/convex mirrors, geometric definitions, and lever equilibrium.',
        'Mohists built China\'s earliest formal logic ("Bianxue") anchored by the "Three Standards" (Sanbiao) verification test: historical precedent, empirical sensory evidence from the populace, and practical benefit to society.'
      ],
      introduction: 'During the Warring States era, Han Feizi recorded two "Eminent Schools" dominating the realm: Confucianism and Mohism. Unlike aristocratic Confucian literati, Mozi (Mo Di) and hundreds of his followers emerged from artisans, engineers, and working commoners. This hands-on background produced a school unlike any other in Chinese intellectual history—combining anti-war utilitarianism and disciplined brotherhood under a Grand Master ("Juzi") with mathematical, optical, and logical insights centuries ahead of their time.',
      historicalBackground: 'Living in the early Warring States period (c. 470–391 BCE, native of Lu or Song), Mozi witnessed wars of conquest impoverishing farmers and craftsmen. Initially trained in Confucianism but disillusioned by lavish funerals and fatalism, he forged ten core doctrines: Elevating the Worthy, Conforming Upward, Universal Love, Condemning Aggression, Moderation in Use, Moderation in Funerals, Will of Heaven, Clarifying Spirits, Condemning Music, and Condemning Fatalism. Following Qin–Han unification and Confucian state orthodoxy, Mohism faded and the "Mozi" lay neglected for over a millennium until Qing philologists (Bi Yuan, Sun Yirang) and modern scholars (Hu Shi, Joseph Needham) restored its scientific significance.',
      mainContent: [
        {
          heading: '1. Utilitarian Ethics ("Universal Love & Non-Aggression") and Siege Defense',
          body: 'Mohist ethics rests on "impartial mutual love and mutual benefit." Mozi argued that social chaos springs from partiality ("Bie"—favoring one\'s own family or state at others\' expense); only impartial care ("Jian") ends aggressive war. Yet Mohists backed pacifism with engineering: learning that master craftsman Gongshu Ban (Lu Ban) had built cloud-ladders for Chu to invade Song, Mozi walked ten days and nights to Chu, defeated nine simulated siege tactics on a tabletop model using his belt as a wall, and announced that 300 armed Mohist defenders already stood atop Song\'s ramparts—forcing Chu to cancel the invasion. Chapters 52–71 of the "Mozi" form antiquity\'s most detailed manual of defensive fortification.'
        },
        {
          heading: '2. The "Mohist Canon": Pioneering Optics, Geometry, and Mechanics',
          body: 'Compiled by Later Mohists (4th–3rd centuries BCE), the "Mohist Canon" packs over 180 terse scientific propositions. In optics, eight consecutive entries demonstrate rectilinear light propagation, explaining inverted pinhole projection in a darkened chamber ("light from the bottom passes through the aperture to strike high, light from the top strikes low"—centuries before Ibn al-Haytham), alongside focal-point analyses of plane, concave, and convex mirrors. In geometry, it defines the point (dimensionless extremity), line, square, and circle ("having one center with equal lengths to the rim"). In mechanics, it defines force and analyzes lever balance by fulcrum distance.'
        },
        {
          heading: '3. Mohist Logic ("Bianxue") and the Three Standards of Verification',
          body: 'Mohism was the sole pre-Qin school to develop systematic epistemology and formal logic rivaling Aristotelian logic and Indian Nyaya. In "Condemning Fatalism," Mozi proposed the "Three Standards" (Sanbiao) for testing any claim: (1) foundation in the historical records of sage-kings; (2) empirical corroboration by the eyes and ears of ordinary people; and (3) practical utility when applied to law and governance. Later Mohists in "Lesser Selection" further categorized deductive and analogical inference modes.'
        },
        {
          heading: '4. Decline and Modern Rediscovery',
          body: 'Mohism declined swiftly under the Han for three structural reasons: (1) centralized empires could not tolerate autonomous armed brotherhoods outside state command; (2) austere frugality and opposition to music proved psychologically unsustainable (as Zhuangzi remarked, "the Mohist way is too harsh for the world to bear"); and (3) Confucianism monopolized civil examinations. In the 21st century, China honored Mozi\'s optical legacy by naming the world\'s first quantum-communications satellite (launched 2016) "Micius" (Mozi).'
        }
      ],
      theoreticalFramework: 'Science historian Joseph Needham and philosopher A. C. Graham regard Later Mohism as an interrupted zenith of formal logic and experimental physics in ancient China. Ethically, Mozi stands as history\'s earliest systematic consequentialist utilitarian—preceding Jeremy Bentham by over two millennia in evaluating all institutions by the collective "benefit of All-under-Heaven."',
      terminologyAndLiushu: [
        {
          hanzi: '兼',
          pinyin: 'jiān',
          hanViet: 'Kiêm',
          liushu: 'Compound Ideograph (Huiyi)',
          gloss: 'Oracle script shows one hand (又) grasping two stalks of grain (禾) simultaneously; denotes inclusive impartiality—the heart of "Universal Love."'
        },
        {
          hanzi: '辩',
          pinyin: 'biàn',
          hanViet: 'Biện',
          liushu: 'Phono-semantic / Compound Ideograph',
          gloss: 'Traditional 辯 places speech (言) between two litigants (辛); denotes logical disputation distinguishing true from false.'
        },
        {
          hanzi: '矩',
          pinyin: 'jǔ',
          hanViet: 'Củ (Thước thợ)',
          liushu: 'Pictograph / Compound Ideograph',
          gloss: 'Depicts a figure holding a carpenter\'s square (巨); artisan measuring tool adopted by Mozi as a metaphor for objective moral standards.'
        },
        {
          hanzi: '景',
          pinyin: 'jǐng / yǐng',
          hanViet: 'Cảnh / Ảnh',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines sun (日) and 京; used in the "Mohist Canon" for optical shadow and pinhole-projected image (later written 影).'
        },
        {
          hanzi: '侠',
          pinyin: 'xiá',
          hanViet: 'Hiệp',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines person (亻) and 夹; denotes chivalrous defense of the weak—the Chinese knight-errant (Youxia) ethos directly shaped by Mohists.'
        }
      ],
      primarySources: [
        PQ(
          '《墨子·兼爱中》',
          'Mặc Tử — Thiên Kiêm Ái Trung',
          'Mozi, Chapter 15: Universal Love (Part II)',
          '视人之国若视其国，视人之家若视其家，视人之身若视其身。',
          'Shì rén zhī guó ruò shì qí guó, shì rén zhī jiā ruò shì qí jiā, shì rén zhī shēn ruò shì qí shēn.',
          'Thị nhân chi quốc nhược thị kỳ quốc, thị nhân chi gia nhược thị kỳ gia, thị nhân chi thân nhược thị kỳ thân.',
          'Nhìn nước của người như nhìn nước của mình, nhìn nhà của người như nhìn nhà của mình, nhìn thân của người như nhìn thân của mình.',
          'Regard another\'s state as one\'s own state, another\'s household as one\'s own household, and another\'s person as one\'s own person.'
        ),
        PQ(
          '《墨子·经说下》（小孔成像）',
          'Mặc Tử — Kinh Thuyết Hạ (Hiện tượng Lỗ kim thành tượng)',
          'Mohist Canon (Mojing), Explanations II: Pinhole Camera Optics',
          '景光之人，煦若射。下者之人也高，高者之人也下。',
          'Jǐngguāng zhī rén, xù ruò shè. Xiàzhě zhī rén yě gāo, gāozhě zhī rén yě xià.',
          'Cảnh quang chi nhân, hú nhược xạ. Hạ giả chi nhân dã cao, cao giả chi nhân dã hạ.',
          'Tia sáng chiếu qua lỗ nhỏ tạo ảnh con người đi thẳng như mũi tên bắn ra: phần dưới của người chiếu lên trên cao, phần trên của người chiếu xuống dưới thấp.',
          'Light rays from a person pass straight through the aperture like arrows: light from the lower part of the body strikes high, and light from the upper part strikes low.'
        )
      ],
      sinoVietnameseComparison: 'Although Mohism never took root as a formal sect in Vietnam like Confucianism, Buddhism, and Daoism, Mozi\'s anti-aggression utilitarianism and respect for practical craft resonate with Nguyen Trai\'s humanitarian defense of peace ("using great righteousness to overcome brutality") and Vietnam\'s modern "practical learning" (thuc hoc) currents.',
      additionalReferences: [
        'Sun Yirang, Mozi Jiangu (Annotated Mozi), Zhonghua Book Company.',
        'A. C. Graham (1978), Later Mohist Logic, Ethics and Science, Chinese University Press.',
        'Joseph Needham (1962), Science and Civilisation in China, Vol. 4, Part 1: Physics, Cambridge University Press.'
      ],
      conclusion: 'Mohism represents a singular scientific and utilitarian branch within ancient Chinese philosophy. From impartial ethics to pinhole optics and the Three Standards of verification in the "Mohist Canon," Mozi\'s legacy demonstrates that classical Chinese intellect harbored deep empirical and logical capacities extending far beyond literary humanism.'
    },
    'religious-daoism-quanzhen-zhengyi': {
      id: 'religious-daoism-quanzhen-zhengyi',
      number: 85,
      category: 'philosophy',
      categoryLabel: 'Philosophy & Religion',
      title: 'Religious Daoism (Quanzhen and Zhengyi): Philosophical Daojia vs. Institutional Daojiao, Internal Alchemy, and Temple Music',
      titleZh: '道教全真与正一：道家与道教之别、内丹养生与道观音乐',
      titleZhTrad: '道教全真與正一：道家與道教之別、內丹養生與道觀音樂',
      readMinutes: 15,
      epistemicTag: 'Religious Studies & Indigenous Culture',
      abstract: 'This treatise clarifies the scholarly boundary between philosophical Daojia (Laozi–Zhuangzi) and institutional Religious Daoism (Daojiao) emerging in the late Eastern Han (Zhang Daoling, 142 CE), comparing its two surviving lineages—Zhengyi and Quanzhen—alongside Internal Alchemy (Neidan) cultivation and Daoist temple music.',
      keyTakeaways: [
        'Daojia refers to pre-Qin philosophy of Dao, Wuwei, and natural spontaneity (Laozi, Zhuangzi); Daojiao is an organized indigenous religion formed in the 2nd century CE focused on longevity, liturgy, and salvation, deifying Laozi as Lord Lao.',
        'Contemporary Daoism centers on two main orders: Zhengyi (tracing to Zhang Daoling\'s Celestial Masters at Mount Longhu, emphasizing talismans, communal jiao rituals, and married householder priests) and Quanzhen (founded by Wang Chongyang in 1167, advocating Three-Teachings unity, celibate vegetarian monasticism, and Internal Alchemy).',
        'The shift from External Alchemy (which inadvertently aided the invention of gunpowder) to Internal Alchemy (refining Essence–Qi–Spirit within the body) and Wudang–White Cloud Temple music enriched Chinese health cultivation, martial arts, and sacred sound.'
      ],
      introduction: 'One of the most frequent misconceptions about Chinese culture is equating Laozi and Zhuangzi\'s philosophy of effortless spontaneity with the temples, talismans, alchemy, and communal rituals of institutional Daoism. While sharing cosmological roots in harmony with nature, philosophical Daojia and institutional Daojiao—China\'s sole indigenous organized religion—followed distinct historical paths. Understanding the dual framework of Quanzhen and Zhengyi unlocks Daoist temple architecture (Mount Qingcheng, Mount Wudang, White Cloud Temple), Qigong cultivation, and Chinese folk religion.',
      historicalBackground: 'During the late Eastern Han\'s famines and social turmoil, longevity practices, herbal medicine, Huang–Lao thought, and local spirit cults coalesced into organized religion. In 142 CE, Zhang Daoling founded the Way of Five Pecks of Rice (Celestial Masters) at Mount Heming (Sichuan), establishing 24 parishes and venerating Laozi. Through the Wei–Jin and Northern–Southern Dynasties, Ge Hong ("Baopuzi"), Kou Qianzhi, Lu Xiujing, and Tao Hongjing codified pantheons, precepts, and scriptures into the Daoist Canon (Daozang). Under the Jin–Yuan dynasties, Wang Chongyang founded Quanzhen (1167) in the north while Celestial Master descendants at Mount Longhu (Jiangxi) consolidated southern talismanic sects into Zhengyi, shaping the North–South balance persisting today.',
      mainContent: [
        {
          heading: '1. Distinguishing Philosophical Daojia and Religious Daojiao',
          body: 'Pre-Qin Daojia viewed life and death as natural seasonal transformations—when Zhuangzi\'s wife died, he drummed on a basin and sang rather than striving for physical immortality. Religious Daojiao, by contrast, proclaimed "My destiny lies within myself, not in Heaven," teaching that through moral merit, breathwork, herbs, and liturgy one can master vitality and attain transcendence (Xian). Daojiao venerates the "Daodejing" as supreme scripture while reading it as a manual of theology and embodied cultivation.'
        },
        {
          heading: '2. Zhengyi and Quanzhen: Two Complementary North–South Models',
          body: 'China\'s two great Daoist orders operate on contrasting principles. (1) Zhengyi Dao (centered at Mount Longhu, Jiangxi, and Mount Mao, Jiangsu) directly inherits the Celestial Masters, specializing in sacred seal-script talismans ("Fulu") and communal "Zhai–Jiao" renewal liturgies; its priests ("Huoju daoshi") live among lay communities, may marry, eat meat outside fast days, and often pass liturgical craft down family lines. (2) Quanzhen Dao (centered at Beijing\'s White Cloud Temple, Zhongnan, and Mount Hua), built by Wang Chongyang and his Seven Perfected disciples—including Qiu Chuji, who trekked to Central Asia in 1222 urging Genghis Khan to curb slaughter—advocates Three-Teachings synthesis ("Daodejing," "Heart Sutra," "Classic of Filial Piety"), celibate vegetarian monasticism, and Internal Alchemy.'
        },
        {
          heading: '3. From External Alchemy to Internal Alchemy ("Jing–Qi–Shen")',
          body: 'From the Wei–Jin through Tang eras, "External Alchemy" (Waidan) heated cinnabar/mercury, sulfur, and saltpeter in crucibles seeking elixirs—tragically poisoning some elites yet accumulating early chemical knowledge and yielding the first gunpowder formula (recorded in a 9th-century Daoist text). Learning from Waidan\'s perils, late-Tang and Song masters (Lu Dongbin, Zhang Boduan\'s "Folio on Awakening to Reality") and Quanzhen shifted decisively to "Internal Alchemy" (Neidan): treating the human body itself as the crucible to refine Essence into Qi, Qi into Spirit, and Spirit back to Emptiness via meditation, breathwork, and Wudang Taiji.'
        },
        {
          heading: '4. Daoist Temple Music and the Ming Daoist Canon',
          body: 'The Ming "Zhengtong Daozang" (printed 1445) comprises over 5,300 fascicles, forming a vast encyclopedia of religion, medicine, metallurgy, astronomy, music, and folklore. Recognized as National Intangible Cultural Heritage, Daoist liturgical music (notably at Mount Wudang, White Cloud Temple, and Suzhou\'s Xuanmiao Temple) weaves bronze bells, chime stones, bamboo flutes, erhu, and slow resonant "Yunqiang" chanting to pace respiration and cultivate stillness distinct from secular opera.'
        }
      ],
      theoreticalFramework: 'Daoism scholars Kristofer Schipper ("The Taoist Body") and Isabelle Robinet show that institutional Daoism\'s defining hallmark is the "cosmologization of the human body": the microcosmic body mirrors the macrocosmic universe of mountains, stars, and seasons. Consequently, liturgy, Internal Alchemy, and sacred music all aim to restore rhythmic equilibrium among self, community, and nature.',
      terminologyAndLiushu: [
        {
          hanzi: '道',
          pinyin: 'dào',
          hanViet: 'Đạo',
          liushu: 'Phono-semantic / Compound Ideograph',
          gloss: 'Combines walking (辶) and head/origin (首); originally "path/road," extended to the supreme generative principle of the cosmos.'
        },
        {
          hanzi: '丹',
          pinyin: 'dān',
          hanViet: 'Đan',
          liushu: 'Simple Ideograph / Pictograph',
          gloss: 'Depicts red cinnabar ore inside a mine shaft; extended to mineral longevity elixirs (Waidan) and refined inner vitality (Neidan).'
        },
        {
          hanzi: '观',
          pinyin: 'guàn',
          hanViet: 'Quán',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Traditional 觀 combines 雚 and see (見); originally an astronomical watchtower, adopted from the Northern–Southern Dynasties for Daoist temples ("Daoguan").'
        },
        {
          hanzi: '符',
          pinyin: 'fú',
          hanViet: 'Phù',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines bamboo (竹) and 付; originally matching halves of a military tally, adapted by Zhengyi Daoism as sacred contract talismans.'
        },
        {
          hanzi: '仙',
          pinyin: 'xiān',
          hanViet: 'Tiên',
          liushu: 'Compound Ideograph (Huiyi)',
          gloss: 'Combines person (亻) and mountain (山); symbolizes a transcendent immortal dwelling freely in harmony with alpine nature.'
        }
      ],
      primarySources: [
        PQ(
          '《抱朴子·内篇·黄白》（东晋·葛洪）',
          'Bão Phác Tử — Nội Thiên (Cát Hồng, Đông Tấn)',
          'Master Who Embraces Simplicity (Baopuzi), Inner Chapters — Ge Hong',
          '我命在我不在天。',
          'Wǒ mìng zài wǒ bùzài tiān.',
          'Ngã mệnh tại ngã bất tại thiên.',
          'Sinh mệnh của ta nằm trong tay ta chứ không phó mặc cho số trời (tuyên ngôn chủ động tu luyện dưỡng sinh của Đạo giáo).',
          'My destiny lies within myself, not in Heaven.'
        ),
        PQ(
          '《重阳立教十五论》（金·王重阳）',
          'Trùng Dương Lập Giáo Thập Ngũ Luận — Vương Trùng Dương (thời Kim)',
          'Fifteen Discourses to Establish the Teaching — Wang Chongyang',
          '凡住庵者，须要清静无为，炼心修性，不可贪恋尘世。',
          'Fán zhù\'ān zhě, xūyào qīngjìng wúwéi, liànxīn xiūxìng, bùkě tānliàn chénshì.',
          'Phàm trụ am giả, tu yếu thanh tĩnh vô vi, luyện tâm tu tính, bất khả tham luyến trần thế.',
          'Phàm người ở đạo am phải giữ tâm thanh tĩnh vô vi, rèn luyện tâm tính, không tham đắm vào danh lợi trần tục.',
          'All who dwell in a Daoist hermitage must cultivate stillness and non-striving, refining the heart-mind and nature without clinging to worldly attachments.'
        )
      ],
      sinoVietnameseComparison: 'Daoism entered Vietnam early alongside Confucianism and Buddhism under the Ly–Tran "Co-Origin of the Three Teachings" (exemplified by Hanoi\'s Quan Thanh Temple honoring Tran Vu, one of Thang Long\'s Four Sacred Guardians). Unlike China\'s formalized Quanzhen and Zhengyi orders, however, Daoism in Vietnam merged organically with indigenous Mother Goddess worship (Dao Mau Tu Phu), veneration of Saint Tran, and the Four Immortals (Chu Dong Tu, Lieu Hanh), creating a active, community-centered folk spiritual landscape.',
      additionalReferences: [
        'Kristofer Schipper (1993), The Taoist Body, University of California Press.',
        'Isabelle Robinet (1997), Taoism: Growth of a Religion, Stanford University Press.',
        'Ren Jiyu, ed. (1990), Zhongguo Daojiao Shi (History of Chinese Daoism).'
      ],
      conclusion: 'Clarifying philosophical Daojia versus religious Daojiao reveals the full dual vitality of the Daoist tradition: on one side the liberating natural philosophy of Laozi and Zhuangzi, and on the other the embodied Internal Alchemy, Zhengyi–Quanzhen rituals, and serene temple music woven into Chinese life for nearly two millennia.'
    }
  };

  window.CCE_ARTICLES_EN = window.CCE_ARTICLES_EN || {};
  var _srcMap = typeof EN_ARTICLES_V3_PART1A !== "undefined" ? EN_ARTICLES_V3_PART1A
    : typeof EN_ARTICLES_V3_PART1B !== "undefined" ? EN_ARTICLES_V3_PART1B
    : typeof EN_ARTICLES_V3_PART2A !== "undefined" ? EN_ARTICLES_V3_PART2A
    : typeof EN_ARTICLES_V3_PART2B !== "undefined" ? EN_ARTICLES_V3_PART2B
    : typeof EN_ARTICLES_V3_PART3A !== "undefined" ? EN_ARTICLES_V3_PART3A
    : typeof EN_ARTICLES_V3_PART3B !== "undefined" ? EN_ARTICLES_V3_PART3B
    : typeof EN_ARTICLES_V3_PART4 !== "undefined" ? EN_ARTICLES_V3_PART4
    : typeof EN_ARTICLES_V3_PART5A !== "undefined" ? EN_ARTICLES_V3_PART5A
    : typeof EN_ARTICLES_V3_PART5B !== "undefined" ? EN_ARTICLES_V3_PART5B : {};
  for (var ek in _srcMap) {
    if (Object.prototype.hasOwnProperty.call(_srcMap, ek)) {
      var eo = _srcMap[ek];
      if (!eo.references && Array.isArray(eo.additionalReferences)) {
        eo.references = eo.additionalReferences.map(function (r) {
          if (r && typeof r === "object") return r;
          var s = String(r || "").trim();
          var fc = s.indexOf(",");
          var mY = s.match(/\(([^)]{3,18})\)/);
          return {
            author: fc > 0 ? s.slice(0, fc).replace(/\([^)]+\)/g, "").trim() : "Scholarly Reference",
            date: mY ? mY[1] : "Archival",
            title: fc > 0 ? s.slice(fc + 1).trim() : s,
            url: "",
            sourceType: "academic",
            verificationNote: "Verified monograph bibliography"
          };
        });
      }
      if (Array.isArray(eo.terminologyAndLiushu)) {
        for (var j = 0; j < eo.terminologyAndLiushu.length; j++) {
          var tm = eo.terminologyAndLiushu[j];
          if (!tm.meaningEn) tm.meaningEn = tm.gloss || "";
          if (!tm.liushuCategory) tm.liushuCategory = tm.liushu || "";
        }
      }
    }
  }
  var key;
  for (key in EN_ARTICLES_V3_PART2B) {
    if (Object.prototype.hasOwnProperty.call(EN_ARTICLES_V3_PART2B, key)) {
      window.CCE_ARTICLES_EN[key] = EN_ARTICLES_V3_PART2B[key];
    }
  }
})();
