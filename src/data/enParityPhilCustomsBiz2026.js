// ============================================================================
// PROMPT A — MODULE 1: EN PARITY FOR PHILOSOPHY (12 SCHOOLS / 30 CLASSICS / MATRIX),
// CUSTOMS & ARTS (20 CUSTOMS / 15 ARTS / 16 CONTEMPORARY), BUSINESS (20 THEMES / 12 CASES),
// AND SINO-VIETNAM STUDIES (16 THEMES / 12 COMPARISON ROWS)
// Pure scholarly English translations anchored 1:1 to base Vietnamese records.
// ============================================================================
(function () {
  "use strict";

  const SCHOOLS_EN = {
    "confucianism": {
      historicalOriginsEn: "Emerged in the late Spring and Autumn period (6th–5th century BCE) amid the collapse of the Western Zhou ritual-musical order. Originating from the stratum of 'Ru' (ritual and educational specialists), Confucius (551–479 BCE) systematized these traditions into a humanistic moral and political philosophy.",
      majorThinkersEn: "Confucius (孔子), Mencius (孟子), Xunzi (荀子), Dong Zhongshu (董仲舒), Zhu Xi (朱熹), Wang Yangming (王阳明).",
      fundamentalPrinciplesEn: "Places personal moral cultivation as the root of family harmony, state governance, and universal peace ('cultivate the self, regulate the family, govern the state, bring peace to the realm'). Elevates 'rule by benevolence' (governing through moral example) over 'rule by harsh punishment'.",
      classicalTextsEn: ["《论语》 (The Analects)", "《孟子》 (Mencius)", "《大学》 (The Great Learning)", "《中庸》 (The Doctrine of the Mean)", "《荀子》 (Xunzi)"],
      philosophicalConceptsEn: [
        "Ren (仁 — Benevolence/Humaneness): Compassionate care for others and moral reciprocity ('Do not impose upon others what you do not desire yourself').",
        "Yi (义 — Righteousness): Moral duty and justice transcending narrow self-interest.",
        "Li (礼 — Ritual & Propriety): Behavioral norms and social rituals sustaining harmonious order.",
        "Xiao & Ti (孝悌 — Filial Piety) & Five Relationships (五伦): Ethical foundation of family and civic life.",
        "Zhengming (正名 — Rectification of Names) & Zhongyong (中庸 — Doctrine of the Mean): Aligning title with actual responsibility and maintaining dynamic equilibrium."
      ],
      historicalInfluenceEn: "Served as imperial state orthodoxy from Emperor Wu of Han until 1911; shaped civil service examinations, lineage organization, legal codes, and education across the Sinosphere (China, Vietnam, Korea, Japan).",
      contemporaryRelevanceEn: "Deeply informs East Asian emphasis on education, family responsibility, trust-oriented corporate culture, and social stability, alongside ongoing debates over hierarchy and conformity.",
      vietnamRelevanceEn: "Vietnamese Dialogue: From Hanoi's Temple of Literature (1070) to Nguyen Trai's people-centered maxim ('The people both carry and overturn the boat'), Vietnamese Confucianism emphasized state defense, civic utility, and filial ethics.",
      schoolExtra12En: "Adapted in Vietnam from the 1070 Temple of Literature through Nguyen Trai into Vietnamese family ethics, emphasizing Ren–Li–Xin (trustworthiness) in bilateral trade."
    },
    "daoism-philosophy": {
      historicalOriginsEn: "Arose during the Spring and Autumn and Warring States periods as a critical response to rigid ritualism and devastating warfare. The Lao–Zhuang tradition turned toward cosmic natural patterns ('Dao') rather than coercive human constructs.",
      majorThinkersEn: "Laozi (老子), Zhuangzi (庄子), Liezi (列子), Wang Bi (王弼 — Xuanxue).",
      fundamentalPrinciplesEn: "Dao (道) is the formless source and spontaneous ordering pattern of the cosmos. Both individuals and rulers should align with Nature (自然) and practice Wuwei (无为 — non-coercive, effortless action).",
      classicalTextsEn: ["《道德经》 (Dao De Jing)", "《庄子》 (Zhuangzi / Nanhua Classic)", "《列子》 (Liezi)"],
      philosophicalConceptsEn: [
        "Dao (道) & De (德): Cosmic ultimate pattern and its concrete efficacy within myriad things.",
        "Wuwei er Wubuwei (无为而无不为): Non-coercive action whereby all tasks unfold naturally without forced friction.",
        "Fan zhe Dao zhi Dong (反者道之动): Reversal is the movement of Dao — softness overcomes hardness, yielding overcomes force.",
        "Qiwulun & Xiaoyaoyou (齐物论·逍遥游): Equalizing myriad things and free, unburdened wandering beyond dualistic prejudice (Zhuangzi)."
      ],
      historicalInfluenceEn: "Provided an inner spiritual counterweight to Confucian social duty among East Asian literati ('When advancing, benefit the realm; when in obscurity, cultivate integrity'). Shaped ink-wash aesthetics, pastoral poetry, preventive medicine, and Taijiquan.",
      contemporaryRelevanceEn: "Inspires ecological systems thinking, minimalist non-micromanaging leadership, mental resilience, and burnout recovery in high-pressure industrial societies.",
      vietnamRelevanceEn: "Practical Legacy: Directly informed the dam-less Dujiangyan irrigation engineering (256 BCE) that follows natural river flow, as well as intentional emptiness ('liubai') in Suzhou gardens.",
      schoolExtra12En: "Defined negative-space aesthetics in ink painting and holistic harmony, strongly resonating with Vietnamese landscape poetry and Chan/Zen culture."
    },
    "religious-daoism": {
      historicalOriginsEn: "Institutionalized in the late Eastern Han (2nd century CE) by synthesizing Huang–Lao Daoist philosophy, Qin–Han immortality practices, longevity medicine, and Yin–Yang Five-Phase cosmology. Modern scholarship strictly distinguishes philosophical Daojia from organized Daojiao religion.",
      majorThinkersEn: "Zhang Daoling (张道陵 — Way of Five Pecks of Rice), Ge Hong (葛洪), Tao Hongjing (陶弘景), Wang Chongyang (王重阳 — Quanzhen School).",
      fundamentalPrinciplesEn: "Pursues longevity and spiritual transcendence ('Changsheng jiushi') through Inner Alchemy (Qigong, breath meditation), historical Outer Alchemy (proto-chemistry), moral precepts, and liturgical ritual mediation with cosmic deities.",
      classicalTextsEn: ["《太平经》 (Scripture of Great Peace)", "《抱朴子》 (Baopuzi / Master Embracing Simplicity)", "《道藏》 (Daoist Canon)"],
      philosophicalConceptsEn: [
        "Wo Ming zai Wo bu zai Tian (我命在我不在天): My destiny rests in my own cultivation, not blind fate.",
        "Jing–Qi–Shen (精气神): Essence, Vital Breath, and Spirit — the Three Treasures of bodily and spiritual vitality.",
        "Neidan Shu (内丹术): Inner Alchemical transformation of bio-spiritual energy within the human microcosm.",
        "Three Pure Ones & Jade Emperor (三清·玉皇): Indigenous pantheon of Daoist liturgical cosmology."
      ],
      historicalInfluenceEn: "China's sole large-scale indigenous organized religion; contributed substantially to early chemistry (gunpowder discoveries from alchemy), pharmacology, therapeutic Qigong, and folk ritual traditions (including dialogue with Vietnam's Four Palaces Mother Goddess worship).",
      contemporaryRelevanceEn: "Zhengyi and Quanzhen remain officially recognized traditions; Taiji, Baduanjin, and seasonal Yangsheng health cultivation are widely practiced across urban China.",
      schoolExtra12En: "Contributed Qigong longevity arts, Ge Hong's pharmacological records, and liturgical elements absorbed into Vietnam's syncretic Three-Religions folk practices."
    },
    "buddhism": {
      historicalOriginsEn: "Transmitted from India and Central Asia into China during the Eastern Han (c. 1st century CE) via Silk Road networks. Through centuries of translation (Kumarajiva, Xuanzang) and cultural synthesis, distinctly Sinitic schools crystallized during the Northern–Southern and Sui–Tang dynasties.",
      majorThinkersEn: "Kumarajiva (鸠摩罗什), Zhiyi (智顗 — Tiantai), Xuanzang (玄奘 — Yogacara), Fazang (法藏 — Huayan), Huineng (惠能 — Chan/Zen).",
      fundamentalPrinciplesEn: "Liberation from cyclic suffering (Samsara) through Prajna wisdom realizing Dependent Origination and Emptiness (缘起性空), united with Mahayana Bodhisattva compassion. Chinese Buddhism emphasizes universal Buddha-nature inherent in all sentient beings.",
      classicalTextsEn: ["《金刚经》 (Diamond Sutra)", "《心经》 (Heart Sutra)", "《六祖坛经》 (Platform Sutra of the Sixth Patriarch)", "《妙法莲华经》 (Lotus Sutra)"],
      philosophicalConceptsEn: [
        "Dependent Origination & Emptiness (缘起性空): All phenomena arise interdependently and lack fixed independent essence.",
        "Buddha-Nature & Sudden Awakening (佛性·顿悟): Direct realization of one's intrinsically pure mind (Chan/Zen).",
        "Karma & Rebirth (业·轮回): Ethical causality across intention, speech, and action.",
        "Bodhisattva Path (菩萨道): Engaged compassion rescuing all beings rather than solitary withdrawal."
      ],
      historicalInfluenceEn: "Enriched East Asian philosophical vocabulary ('world', 'present', 'equality', 'awakening'), transformed sculpture and temple architecture, and stimulated Song Neo-Confucian metaphysics. Transmitted directly to Vietnam (Luy Lau center) and inspired Truc Lam, Caodong, and Linji Zen lineages.",
      contemporaryRelevanceEn: "Engaged/Humanistic Buddhism (人间佛教) integrates social philanthropy, mindfulness meditation, and dialogue with cognitive psychology.",
      vietnamRelevanceEn: "Vietnamese Resonance: Sixth Patriarch Huineng's Southern Chan directly inspired King Tran Nhan Tong's indigenous Truc Lam Yen Tu Zen ('Dwelling in the world while delighting in the Way').",
      schoolExtra12En: "Huineng's Sudden-Enlightenment Chan opened the way for Tran Nhan Tong's distinctively Vietnamese Truc Lam Yen Tu Zen school."
    },
    "legalism": {
      historicalOriginsEn: "Developed during the Warring States period to answer existential state competition: how to enrich the state, strengthen military power, centralize authority, and enforce institutional discipline independently of individual ruler virtue.",
      majorThinkersEn: "Guan Zhong (管仲 — precursor), Shang Yang (商鞅 — Fa/Law), Shen Buhai (申不害 — Shu/Administrative Technique), Shen Dao (慎到 — Shi/Positional Authority), Han Feizi (韩非子 — Great Synthesizer), Li Si (李斯).",
      fundamentalPrinciplesEn: "Since human nature seeks advantage and avoids harm ('Haoli ehai'), moral persuasion alone cannot govern a large state. Governance requires synthesizing Fa (publicly codified laws with strict rewards and penalties), Shu (methods for supervising officials), and Shi (supreme institutional authority).",
      classicalTextsEn: ["《韩非子》 (Han Feizi)", "《商君书》 (Book of Lord Shang)", "《管子》 (Guanzi)"],
      philosophicalConceptsEn: [
        "Fa – Shu – Shi (法·术·势): Three institutional pillars of centralized bureaucratic governance.",
        "Punishment Does Not Spare High Officials (刑不避大夫): Legal enforcement applied uniformly across subjects beneath the sovereign.",
        "Certain Rewards, Certain Penalties (信赏必罚): Credible, predictable institutional incentives.",
        "Institutional Reform Matching the Times (变法适时): Laws and structures must adapt to historical conditions rather than blindly copying antiquity."
      ],
      historicalInfluenceEn: "Enabled Qin to unify China in 221 BCE. Though officially repudiated after Qin's rapid collapse, Legalist administrative machinery remained the structural backbone of two millennia of imperial bureaucracy ('Confucian on the outside, Legalist inside').",
      contemporaryRelevanceEn: "Offers sharp analytical lenses on rule by law vs. rule of law, incentive design, principal–agent monitoring, and compliance architecture in large organizations.",
      schoolExtra12En: "Han Feizi's Fa–Shu–Shi framework served as the hard institutional skeleton behind imperial administration, balancing Confucian moral rhetoric."
    },
    "mohism": {
      historicalOriginsEn: "Founded in the early Warring States by Mo Di (Mozi, c. 470–391 BCE), emerging from skilled artisans and commoners in direct critique of aristocratic Confucian ritualism.",
      majorThinkersEn: "Mozi (墨子), Qin Huali (禽滑釐), and the Later Mohists (authors of the Mohist Canons on logic, optics, and mechanics).",
      fundamentalPrinciplesEn: "Advocates impartial universal care without kinship bias ('Jian'ai'), condemns aggressive warfare ('Feigong'), practices strict frugality against lavish funerals and court music ('Jieyong'), and elevates talent regardless of birth ('Shangxian').",
      classicalTextsEn: ["《墨子》 (Mozi — Ten Core Doctrines plus Later Mohist Canons on logic, optics, geometry, and siege defense)"],
      philosophicalConceptsEn: [
        "Impartial Care & Mutual Benefit (兼相爱，交相利): Universal ethical concern tied to shared practical welfare.",
        "Condemnation of Aggressive War (非攻): Refuting war on both moral and economic grounds.",
        "Three Standards of Verification (三表法): Testing claims via historical precedent, common sensory experience, and practical policy outcomes.",
        "Mohist Dialectics (墨辩): Pioneering formal logic, geometry, pinhole optics, and lever mechanics."
      ],
      historicalInfluenceEn: "Once stood alongside Confucianism as an 'Illustrious Learning' (显学) during the Warring States, renowned for disciplined civic engineers and defensive siege mastery; faded after Qin unification and Han Confucian orthodoxy, then revived by Late Qing and Republican scholars.",
      contemporaryRelevanceEn: "Valued globally for early utilitarian ethics, anti-war pacifism, experimental scientific methodology, and meritocratic equality of opportunity.",
      schoolExtra12En: "Pioneered 'Universal Care' (Jian'ai), meritocratic advancement regardless of social birth, and systematic defensive fortification science."
    },
    "school-of-names": {
      historicalOriginsEn: "Emerged amid Warring States diplomatic and legal disputation concerning the relationship between names/concepts ('Ming' 名) and empirical reality ('Shi' 实).",
      majorThinkersEn: "Hui Shi (惠施 — philosophical friend of Zhuangzi), Gongsun Long (公孙龙), Deng Xi (邓析).",
      fundamentalPrinciplesEn: "Analyzes language structure, conceptual categories, spatiotemporal relativity, and logical taxonomy in order to expose hidden fallacies inside everyday political and philosophical discourse.",
      classicalTextsEn: ["《公孙龙子》 (Gongsun Longzi)", "'Under Heaven' (Tianxia) chapter of 《庄子》 preserving Hui Shi's Ten Paradoxes"],
      philosophicalConceptsEn: [
        "A White Horse Is Not a Horse (白马非马): Distinguishing conceptual extension from intension ('horse' vs. 'white + horse').",
        "Separating Hardness and Whiteness (离坚白): Epistemological analysis of sensory attributes.",
        "Ten Paradoxes of Things (历物十事): Hui Shi's theses on infinity, relativity, and continuity (e.g., halving a one-foot rod daily never exhausts it)."
      ],
      historicalInfluenceEn: "Dismissed by pragmatic Confucian and Legalist thinkers as word-play unhelpful for governance, yet laid vital foundations for East Asian semantics, epistemology, and formal argumentation in Xunzi and Zhuangzi.",
      contemporaryRelevanceEn: "Frequently compared with analytic philosophy, semantic logic, and Zeno's paradoxes in Western philosophical history.",
      schoolExtra12En: "Gongsun Long and Hui Shi inaugurated East Asian analytic disputation ('A White Horse Is Not a Horse')."
    },
    "military-school": {
      historicalOriginsEn: "Crystallized as Warring States conflict shifted from small aristocratic chariot skirmishes to mass infantry campaigns requiring logistics, intelligence networks, and grand strategy.",
      majorThinkersEn: "Sun Wu / Sunzi (孙武), Sun Bin (孙膑), Wu Qi (吴起), Weiliaozi (尉缭子).",
      fundamentalPrinciplesEn: "War is 'a matter of vital national survival' (国之大事) demanding extreme prudence; ultimate victory lies in breaking enemy resistance through strategy and diplomacy without destructive attrition ('Subduing the enemy without fighting').",
      classicalTextsEn: ["《孙子兵法》 (The Art of War — Sunzi)", "《吴子》 (Wuzi)", "《孙膑兵法》 (Sun Bin's Art of War — excavated at Yinqueshan, 1972)"],
      philosophicalConceptsEn: [
        "Know Yourself and Know Your Adversary (知彼知己，百战不殆): Information symmetry and realistic self-audit.",
        "Warfare Relies on Deception/Asymmetry (兵者，诡道也): Strategic unpredictability and feints.",
        "Orthodox & Extraordinary Interplay (奇正相生): Seamless coordination of direct force (Zheng) and unexpected maneuver (Qi).",
        "Complete Victory (全胜): Securing strategic advantage with minimal human and material devastation."
      ],
      historicalInfluenceEn: "Profoundly shaped East Asian military statecraft — including Vietnamese strategists such as Tran Hung Dao and Nguyen Trai — and remains a global classic in strategic studies.",
      contemporaryRelevanceEn: "Widely applied in corporate strategy, negotiation, competitive positioning, and game theory — though serious scholars caution against crudely reducing cooperative commerce to zero-sum warfare.",
      schoolExtra12En: "Sunzi's maxim 'Winning wholly without battle' evolved into a foundational treatise in modern negotiation and strategic management."
    },
    "yinyang-school": {
      historicalOriginsEn: "Systematized into an independent Warring States tradition at Qi's Jixia Academy by uniting archaic Yin–Yang polarity with the Five Phases (Metal, Wood, Water, Fire, Earth) to model natural cycles and dynastic succession.",
      majorThinkersEn: "Zou Yan (邹衍), plus encyclopedic compilations in 《管子》 (Guanzi) and 《吕氏春秋》 (Master Lü's Spring and Autumn Annals).",
      fundamentalPrinciplesEn: "The cosmos unfolds through rhythmic waxing and waning of complementary polarities (Yin–Yang) and five transformative phases (Wu Xing). Historical dynasties likewise rotate by cyclical 'Succession of Five Virtues'.",
      classicalTextsEn: ["Biographies in 《史记》 (Shiji)", "《吕氏春秋》 (Lüshi Chunqiu)", "《淮南子》 (Huainanzi)"],
      philosophicalConceptsEn: [
        "Yin–Yang Waxing & Waning (阴阳消长): Dynamic mutual transformation between complementary poles.",
        "Cycle of Five Virtues (五德终始): Cyclical cosmological theory of dynastic legitimacy.",
        "Cosmic–Human Isomorphism (天人同构): Structural correspondence between cosmos, human physiology, and society."
      ],
      historicalInfluenceEn: "Though dissolved as a separate school in the Han, its conceptual matrix permeated Traditional Chinese Medicine (Huangdi Neijing), Han Confucianism (Dong Zhongshu), calendrical astronomy, and seasonal agriculture.",
      contemporaryRelevanceEn: "Historically valuable as early East Asian systems and cyclical thought, while requiring clear distinction between ancient correlative cosmology and modern experimental physics/biology.",
      schoolExtra12En: "Zou Yan unified Yin–Yang and Five Phases into the conceptual foundation for classical Chinese medicine, the 24 Solar Terms calendar, and adaptive resilience."
    },
    "xuanxue": {
      historicalOriginsEn: "Emerged in the 3rd–4th centuries CE (Three Kingdoms – Jin) as Han scholastic exegesis collapsed amid political upheaval. Thinkers synthesized Confucian ethics and Daoist metaphysics through the 'Three Profound Texts' (《周易》, 《老子》, 《庄子》).",
      majorThinkersEn: "He Yan (何晏), Wang Bi (王弼), Ji Kang (嵇康), Ruan Ji (阮籍), Xiang Xiu (向秀), Guo Xiang (郭象).",
      fundamentalPrinciplesEn: "Probed deep ontology ('Root vs. Branch', 'Being vs. Non-Being'): Wang Bi argued 'Taking Non-Being/Formless Dao as Root' (以无为本), while debating how public social norms ('Mingjiao') harmonize with authentic spontaneity ('Ziran').",
      classicalTextsEn: ["Commentaries on Laozi & Yijing (Wang Bi)", "Commentary on Zhuangzi (Guo Xiang)", "Discourse on Music Without Grief or Joy (Ji Kang)", "《世说新语》 (Shishuo Xinyu)"],
      philosophicalConceptsEn: [
        "Rooted in Non-Being (以无为本): All differentiated beings rely upon a formless ground of coherence.",
        "Grasp the Meaning, Forget the Words (得意忘言): Words and hexagrams are pointers; once meaning is grasped, abandon literal fixation.",
        "Transcend Formalism, Trust Nature (越名教而任自然): Authentic inner honesty over hypocritical convention (Seven Sages of the Bamboo Grove).",
        "Solitary Transformation (独化): Myriad phenomena spontaneously self-generate within interconnected nature (Guo Xiang)."
      ],
      historicalInfluenceEn: "Opened abstract ontological philosophy in China, furnished conceptual vocabulary for Mahayana Buddhism (especially Prajnaparamita Emptiness), and catalyzed classical calligraphy (Wang Xizhi), landscape painting aesthetics, and Tao Yuanming's pastoral verse.",
      contemporaryRelevanceEn: "Stimulates contemporary discussions in philosophy of language (word–image–meaning), minimalist aesthetics, and balancing civic duty with personal inner freedom.",
      schoolExtra12En: "Wang Bi and the Seven Sages of the Bamboo Grove broke pedantic Han scholasticism to explore Being/Non-Being ontology and artistic authenticity."
    },
    "neo-confucianism": {
      historicalOriginsEn: "Developed from the 11th to 16th centuries (Northern/Southern Song and Ming) to revitalize Confucian philosophy against the metaphysical allure of Chan Buddhism and Daoism, erecting an intricate cosmology and mind-heart philosophy on the Four Books and Yijing.",
      majorThinkersEn: "Zhou Dunyi (周敦颐), Zhang Zai (张载), Cheng Hao (程颢), Cheng Yi (程颐), Zhu Xi (朱熹 — School of Principle), Lu Jiuyuan (陆九渊), Wang Yangming (王阳明 — School of Mind).",
      fundamentalPrinciplesEn: "Affirms 'Tianli' (天理 — Heaven's Principle), the moral-cosmic order pervading all phenomena and human nature. Cheng–Zhu 'School of Principle' stressed 'Nature is Principle' and empirical study ('Gewu zhizhi'); Lu–Wang 'School of Mind' taught 'Mind is Principle' and unity of moral knowledge and action ('Zhixing heyi').",
      classicalTextsEn: ["《四书章句集注》 (Collected Commentaries on the Four Books — Zhu Xi)", "《近思录》 (Reflections on Things at Hand)", "《传习录》 (Instructions for Practical Living — Wang Yangming)", "《太极图说》 & 《西铭》"],
      philosophicalConceptsEn: [
        "Principle Is One, Manifestations Are Many (理一分殊): Ultimate coherence is unified while expressing diversity in concrete particulars.",
        "Investigate Things to Extend Knowledge (格物致知): Thorough study of phenomena to awaken moral-practical clarity.",
        "Mind Is Principle & Extend Innate Moral Knowing (心即理·致良知): Moral truth resides directly within awakened conscience.",
        "Unity of Knowledge and Action (知行合一): Genuine understanding manifests immediately in concrete deed (Wang Yangming)."
      ],
      historicalInfluenceEn: "Zhu Xi's Four Books commentaries served as standard civil exam curriculum in China (1313–1905), Vietnam (Le–Nguyen), and Joseon Korea. Wang Yangming's School of Mind deeply inspired late-Ming reformists and Japan's Meiji reformers.",
      contemporaryRelevanceEn: "Core pillar of Modern New Confucianism in global dialogues on business ethics, civic character, and moral responsibility ('Establish heart for Heaven and Earth, set destiny for living people' — Zhang Zai).",
      vietnamRelevanceEn: "Vietnam Song–Ming Legacy: Zhu Xi's Principle Learning structured Le So and Nguyen civil examinations, while Wang Yangming's School of Mind echoed in reformist calls uniting knowledge with practical action.",
      schoolExtra12En: "Zhu Xi's 'Investigation of Things' anchored Le–Nguyen examination standards, while Wang Yangming inspired practical unity of knowing and doing."
    },
    "qianjia-evidential": {
      historicalOriginsEn: "Born in the 17th-century Ming–Qing transition out of crisis over dynastic collapse. Great scholars critiqued hollow late-Ming speculative talk, championing practical statecraft ('Jingshi zhiyong') and rigorous textual-philological evidence ('Shishi qiushi').",
      majorThinkersEn: "Gu Yanwu (顾炎武), Huang Zongxi (黄宗羲), Wang Fuzhi (王夫之), Yan Yuan (颜元), Dai Zhen (戴震), Qian Daxin (钱大昕), Duan Yucai (段玉裁), Wang Niansun (王念孙).",
      fundamentalPrinciplesEn: "Scholarship must serve real social, fiscal, hydraulic, and geographic governance ('Jingshi zhiyong'), and every textual claim must rely on objective historical phonology, paleography, and documentary evidence ('Without evidence, do not trust').",
      classicalTextsEn: ["《日知录》 (Record of Daily Knowledge — Gu Yanwu)", "《明夷待访录》 (Waiting for the Dawn — Huang Zongxi)", "《孟子字义疏证》 (Dai Zhen)", "《说文解字注》 (Duan Yucai)"],
      philosophicalConceptsEn: [
        "Practical Statecraft (经世致用): Scholarship must address tangible public livelihood and governance.",
        "Seek Truth from Facts (实事求是): Rigorous verification grounded in primary evidence rather than subjective conjecture.",
        "All Under Heaven Belongs to the Public (天下为公): Huang Zongxi's trenchant critique of autocratic patrimonial rule.",
        "Principle Resides in Human Desire (理存乎欲): Dai Zhen's affirmation that moral order harmonizes with legitimate human needs."
      ],
      historicalInfluenceEn: "Pioneered rigorous indigenous historical phonology, paleography, textual collation, and epigraphy — directly resonating with 18th-century Vietnamese polymath Le Quy Don's encyclopedic empirical method in 《Van Dai Loai Ngu》.",
      contemporaryRelevanceEn: "Its motto 'Seek Truth from Facts' and primary-source verification discipline remain touchstones of modern academic methodology.",
      schoolExtra12En: "Pioneered strict textual and historical verification ('Seek truth from facts'), anticipating modern empirical historiography and resonating with Le Quy Don in Vietnam."
    }
  };

  const CLASSICS_EN = {
    "lunyu": {
      treasuryLabelEn: "Classics Section (Jingbu 经部)",
      eraEn: "Spring and Autumn – Early Warring States (5th–3rd century BCE)",
      authorEn: "Compiled by Disciples of Confucius across multiple generations (20 Books)",
      schoolEn: "Confucianism",
      summaryEn: "Twenty books recording Confucius's conversations, aphorisms, and pedagogical dialogues with students, compiled by succeeding generations of disciples. Essential primary source for Ren (benevolence), Li (ritual propriety), Xiao (filial piety), and Junzi (the exemplary person).",
      whyItMattersEn: "Foundational Confucian classic shaping civic ethics (Ren–Li–Xin), universal access to learning ('teaching without class distinction'), and lifelong self-cultivation.",
      excerptsEn: [
        { passageTitleEn: "Xue Er — The Joy of Self-Cultivated Learning", commentaryEn: "The opening triad of The Analects encapsulates lifelong study, kindred friendship, and serene inner autonomy." },
        { passageTitleEn: "Wei Zheng — Critical Reflection in Study", commentaryEn: "Methodological balance between absorbing historical knowledge and exercising independent critical thought." },
        { passageTitleEn: "Yao Yue / Yan Yuan — Moral Reciprocity of the Noble Person", commentaryEn: "The Confucian Golden Rule articulated in dialogue between Confucius and Zhonggong." }
      ]
    },
    "daodejing": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "Spring and Autumn – Warring States (Guodian slips 4th c. BCE; Mawangdui 2nd c. BCE)",
      authorEn: "Laozi (老子 — ~5,000 characters, 81 chapters)",
      schoolEn: "Philosophical Daoism",
      summaryEn: "A concise ~5,000-character classic divided into the Dao Jing and De Jing in 81 chapters, traditionally attributed to Laozi. Explores the ineffable ground of Dao, effortless governance (Wuwei), and how yielding suppleness overcomes rigid force.",
      whyItMattersEn: "Supreme Daoist work of metaphysics and natural philosophy, elevating Wuwei, water-like adaptability, and dialectical reversal.",
      excerptsEn: [
        { passageTitleEn: "Chapter 1 — The Dao That Can Be Spoken", commentaryEn: "Alerts readers to the boundary between conceptual language and living, undivided reality." },
        { passageTitleEn: "Chapter 8 — Highest Good Is Like Water", commentaryEn: "East Asia's quintessential metaphor for humble, adaptable, non-domineering leadership." },
        { passageTitleEn: "Chapter 60 — Governing a Great State Like Cooking Small Fish", commentaryEn: "Warns against over-intrusive administrative meddling that disrupts natural economic and social life." }
      ]
    },
    "zhuangzi": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "Warring States Period (4th–3rd century BCE)",
      authorEn: "Zhuang Zhou (庄周, c. 369–286 BCE) — 33 Chapters",
      schoolEn: "Philosophical Daoism",
      summaryEn: "Thirty-three chapters (seven Inner Chapters widely recognized as core Zhuang Zhou prose), using imaginative parables — Peng the Giant Bird, the Butterfly Dream, Cook Ding carving an ox — to dissolve conceptual rigidity and awaken spiritual freedom.",
      whyItMattersEn: "Apex of East Asian philosophical prose championing spiritual liberty (Free and Easy Wandering), perspectival relativity (Equalizing Things), and effortless mastery of craft.",
      excerptsEn: [
        { passageTitleEn: "Free and Easy Wandering — The Peng Bird Above Narrow Horizons", commentaryEn: "Expands mental horizon beyond parochial convention ('a summer insect cannot speak of ice')." },
        { passageTitleEn: "Autumn Floods — Knowing the Joy of Fish on the Hao Bridge", commentaryEn: "Classic epistemological repartee between Zhuangzi and the logician Hui Shi." },
        { passageTitleEn: "Nurturing Life — Cook Ding Dismembering the Ox", commentaryEn: "Ideal 'flow' mastery where refined skill moves effortlessly along natural joints without resistance." }
      ]
    },
    "mengzi": {
      treasuryLabelEn: "Classics Section (Jingbu 经部)",
      eraEn: "Mid-Warring States Period (4th century BCE)",
      authorEn: "Mencius & Disciples (7 Books)",
      schoolEn: "Confucianism",
      summaryEn: "Records Meng Ke's systematic defense of Confucianism, arguing for innate human moral sprouts (compassion, shame, deference, discernment) and bold populist governance ('The people come first, state altars second, the sovereign lightest').",
      whyItMattersEn: "Articulates the doctrine of innate goodness, uncorrupted scholar integrity ('wealth cannot seduce, poverty cannot bend'), and ancient East Asian civic primacy of the people.",
      excerptsEn: [
        { passageTitleEn: "Jin Xin II — The People Are Most Precious", commentaryEn: "Pinnacle of East Asian people-centered political thought — so radical that Ming autocrats once sought to censor it!" },
        { passageTitleEn: "Teng Wen Gong II — Integrity of the Great Person", commentaryEn: "Benchmark of moral independence among Chinese and Vietnamese literati for centuries." },
        { passageTitleEn: "Gaozi II — Forging Resolve Through Adversity", commentaryEn: "Classic maxim on resilience: thriving through vigilance in hardship, perishing in complacency." }
      ]
    },
    "sunzi": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "Late Spring and Autumn – Early Warring States",
      authorEn: "Sun Wu (孙武, c. 544–496 BCE — 13 Chapters)",
      schoolEn: "Military Strategy School",
      summaryEn: "Thirteen chapters systematizing grand strategy: pre-war calculation, logistics, offensive economy, disposition, emptiness vs. fullness, and intelligence operations — textually corroborated by Han bamboo slips excavated at Yinqueshan.",
      whyItMattersEn: "Definitive treatise on strategic economy ('subduing the enemy whole without battle'), widely studied from defense academies to commercial negotiations.",
      excerptsEn: [
        { passageTitleEn: "Attack by Stratagem — Complete Victory Without Fighting", commentaryEn: "Cornerstone principle of negotiation preserving resources rather than mutually destructive attrition." },
        { passageTitleEn: "Attack by Stratagem — Two-Way Strategic Intelligence", commentaryEn: "Enduring maxim for partner due diligence and candid self-assessment prior to commitment." },
        { passageTitleEn: "Weak Points and Strong — Fluid Adaptability Like Water", commentaryEn: "Deep synthesis of Daoist natural fluidity into agile field strategy." }
      ]
    },
    "yijing": {
      treasuryLabelEn: "Classics Section (Jingbu 经部)",
      eraEn: "Western Zhou through Warring States (Ten Wings)",
      authorEn: "Attributed to King Wen of Zhou, Duke of Zhou & Confucian School (Ten Wings)",
      schoolEn: "Confucianism / Shared Classic",
      summaryEn: "Comprises the Core Text (64 hexagrams and 384 line statements originally rooted in Zhou yarrow-stalk divination) and the Ten Wings (philosophical commentaries on cosmic change and moral timing), shaping Confucianism, Daoism, and Neo-Confucianism alike.",
      whyItMattersEn: "Foremost of the Six Classics; establishes binary Yin–Yang logic and the philosophy of 'Timing & Position' (Shi–Wei) for decision-making amid volatility.",
      excerptsEn: [
        { passageTitleEn: "Image Commentary of Qian & Kun — Ceaseless Striving and Generous Bearing", commentaryEn: "Twin mottos uniting proactive moral effort (Qian) with magnanimous steadiness (Kun)." },
        { passageTitleEn: "Great Treatise II — Exhaustion, Change, Breakthrough", commentaryEn: "Survival principle for institutions and enterprises confronting structural bottlenecks." },
        { passageTitleEn: "Great Treatise I — Alternating Yin and Yang Constitute the Way", commentaryEn: "Classical definition of East Asian dialectical cosmology." }
      ]
    },
    "shiji": {
      treasuryLabelEn: "Histories Section (Shibu 史部)",
      eraEn: "Western Han Dynasty (completed c. 91 BCE)",
      authorEn: "Sima Qian (司马迁, 145–86 BCE)",
      schoolEn: "Historiography & Integrative Thought",
      summaryEn: "Sima Qian's monumental 130-chapter universal history (12 Basic Annals, 10 Tables, 8 Treatises, 30 Hereditary Houses, 70 Biographies), spanning from the Yellow Emperor to Emperor Wu of Han to trace 'heaven–human patterns and historical change'.",
      whyItMattersEn: "Inaugurated the Twenty-Four Standard Histories, invented the Annal–Biography genre, and preserved invaluable records of early economics and ancient Yue peoples.",
      excerptsEn: [
        { passageTitleEn: "Letter to Ren An — The Historian's Vocation", commentaryEn: "Sima Qian's courageous testament after enduring castration rather than leaving his 526,500-word history unfinished." },
        { passageTitleEn: "Hereditary House of Chen She — Questioning Aristocratic Birth", commentaryEn: "Iconic historical cry from the 209 BCE peasant uprising: 'Are kings and nobles born of a separate seed?'" },
        { passageTitleEn: "Treatise on Economic Circulation (Huozhi Liezhuan)", commentaryEn: "Citing Guan Zhong, stresses material livelihood as the prerequisite for public morality." }
      ]
    },
    "hanfeizi": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "Late Warring States Period (3rd century BCE)",
      authorEn: "Han Fei (韩非, c. 280–233 BCE — 55 Chapters)",
      schoolEn: "Legalism (Grand Synthesis)",
      summaryEn: "Fifty-five chapters fusing transparent codified law (Fa), administrative supervision of officials (Shu), and institutional authority (Shi), directly laying the blueprint for Qin's centralized prefecture-county empire.",
      whyItMattersEn: "Most systematic treatise on Legalist institutional statecraft uniting objective law, bureaucratic control, and structural authority.",
      excerptsEn: [
        { passageTitleEn: "Five Vermin — Adapting Institutions to New Times", commentaryEn: "Ridicules rigid antiquarianism ('watching a tree stump waiting for a rabbit') to justify evidence-based reform." },
        { passageTitleEn: "Having Standards — Uniform Rule Above Personal Whim", commentaryEn: "Argues for transparent organizational rules overriding subjective favoritism." },
        { passageTitleEn: "Five Vermin — Objective Structure of Incentives", commentaryEn: "Highlights institutional capacity and measurable accountability over moralizing rhetoric." }
      ]
    },
    "huangdi-neijing-text": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "Warring States – Western Han (c. 2nd–1st century BCE)",
      authorEn: "Anonymous Qin–Han Medical Compilers (Suwen & Lingshu, 162 chapters)",
      schoolEn: "Classical Medicine & Natural Philosophy",
      summaryEn: "Structured as dialogues between the Yellow Emperor and Qi Bo across Basic Questions (Suwen) and Spiritual Pivot (Lingshu), articulating Yin–Yang, Five Phases, Zang–Fu organs, meridians, and four-season health cultivation.",
      whyItMattersEn: "Supreme classic of Traditional Chinese Medicine establishing organ-meridian theory and proactive prevention ('treating illness before it manifests').",
      excerptsEn: [
        { passageTitleEn: "Suwen 1 — Aligning Life With Yin and Yang", commentaryEn: "Classical charter of preventive longevity and constitutional vitality." },
        { passageTitleEn: "Suwen 2 — Treating Disease Before Onset", commentaryEn: "Ahead-of-its-time philosophy of upstream prevention rather than late crisis intervention." },
        { passageTitleEn: "Lingshu — Emotional Balance and Inner Immunity", commentaryEn: "Classical psychosomatic insight linking emotional regulation to physical resistance." }
      ]
    },
    "daxue": {
      treasuryLabelEn: "Classics Section (Jingbu 经部)",
      eraEn: "Warring States – Qin/Han (originally Liji Chapter 42, elevated by Zhu Xi)",
      authorEn: "Attributed to Zengzi (per Zhu Xi's Four Books commentary)",
      schoolEn: "Confucianism / Song Neo-Confucianism",
      summaryEn: "Confucianism's most concise socio-political manifesto, proposing the Three Guiding Principles (manifesting clear virtue, renewing the people, abiding in the highest good) and Eight Steps linking investigation of things directly to bringing peace to the realm.",
      whyItMattersEn: "Charts an unbroken continuum from empirical inquiry ('investigating things') and personal sincerity to ethical public governance.",
      excerptsEn: [
        { passageTitleEn: "Opening Three Guiding Principles", commentaryEn: "Three core goals defining mature ethical and civic education." },
        { passageTitleEn: "The Eight Steps — Linking Self to Society", commentaryEn: "Structural backbone connecting inner integrity with institutional responsibility." },
        { passageTitleEn: "Shang Tang's Bathing Basin — Daily Renewal", commentaryEn: "Inscription calling for relentless daily self-renewal and continuous improvement." }
      ]
    },
    "zhongyong": {
      treasuryLabelEn: "Classics Section (Jingbu 经部)",
      eraEn: "Warring States Period (traditionally attributed to Zisi)",
      authorEn: "Zisi (Confucius's grandson, per classical attribution)",
      schoolEn: "Confucianism / Song Neo-Confucianism",
      summaryEn: "The most metaphysically subtle of the Four Books, exploring emotional equilibrium and cosmic harmony ('Zhonghe'), unceasing sincerity ('Cheng') uniting human nature with Heaven-and-Earth, and a five-step scholarly method (broad study, inquiry, careful reflection, clear discernment, earnest practice).",
      whyItMattersEn: "Pinnacle of Confucian moral psychology grounding emotional balance and autonomous sincerity.",
      excerptsEn: [
        { passageTitleEn: "Opening Chapter — Centrality and Harmony", commentaryEn: "Classical foundation of emotional intelligence: harmonizing feelings in proper measure rather than suppressing them." },
        { passageTitleEn: "Chapter 20 — Five Steps of Rigorous Inquiry", commentaryEn: "Academic charter displayed across White Deer Grotto Academy and modern Chinese universities alike." },
        { passageTitleEn: "Chapter 1 — Vigilance in Solitude (Shendu)", commentaryEn: "Upholds inner sincerity without self-deception even when wholly unobserved." }
      ]
    },
    "mozi": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "Warring States Period (5th–3rd century BCE)",
      authorEn: "Mo Di (墨翟, c. 470–391 BCE) & Mohist School",
      schoolEn: "Mohism",
      summaryEn: "Fifty-three extant chapters preserving Mo Di's ten socio-political doctrines (Impartial Care, Anti-Aggression, Elevating Worthies, Frugality) alongside the Later Mohist Canons on formal logic, geometry, pinhole optics, and defensive siege craft.",
      whyItMattersEn: "Champion of commoner egalitarianism, anti-war pacifism, meritocratic hiring, and ancient East Asian scientific logic and optics.",
      excerptsEn: [
        { passageTitleEn: "Impartial Care I — Compassion Without Kinship Bias", commentaryEn: "Universal empathy proposed as structural antidote to Warring States conquest wars." },
        { passageTitleEn: "Elevating the Worthy — Merit Without Aristocratic Birth", commentaryEn: "Remarkably progressive meritocratic hiring manifesto from the 5th century BCE." },
        { passageTitleEn: "Canons II — Pinhole Camera Optics Experiment", commentaryEn: "Empirical demonstration of rectilinear light propagation 1,400 years before medieval European optics." }
      ]
    },
    "chuanxilu": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "Ming Dynasty (16th century CE — Wang Yangming)",
      authorEn: "Wang Yangming (王阳明, 1472–1529 — recorded by Xu Ai & disciples)",
      schoolEn: "Yangming School of Mind (Confucianism)",
      summaryEn: "Recorded dialogues and philosophical letters of Wang Shouren (Wang Yangming), advancing revolutionary theses: 'Mind is Principle', 'Unity of Knowledge and Action', and 'Extending Innate Moral Knowing', liberating moral agency from dry bookish scholasticism.",
      whyItMattersEn: "Cornerstone of Ming Mind Learning championing autonomous moral conscience and inseparable unity of knowing and doing.",
      excerptsEn: [
        { passageTitleEn: "Part I — Unity of Knowledge and Action", commentaryEn: "Dismantles late-Ming divorce between sterile academic theory and ethical practice." },
        { passageTitleEn: "Letters — Harder to Subdue the Thief Within", commentaryEn: "Wang Yangming's candid field observation written to disciples during southern military pacification." }
      ]
    },
    "liuzutanjing": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "Tang Dynasty (7th–8th century CE, preached at Shaozhou)",
      authorEn: "Sixth Patriarch Huineng (惠能, 638–713 — compiled by Fahai)",
      schoolEn: "Southern Chan / Zen Buddhism",
      summaryEn: "The only Chinese Buddhist work honored with the title 'Sutra' (Jing 经). Articulates Southern Chan's vision of intrinsically pure Buddha-nature and sudden awakening amid ordinary daily life without attachment to outward ritualism.",
      whyItMattersEn: "Uniquely Chinese 'Sutra' that launched Southern Chan Buddhism and profoundly shaped Vietnam's engaged Truc Lam Yen Tu Zen.",
      excerptsEn: [
        { passageTitleEn: "Autobiography — Four-Line Dharma Transmission Verse", commentaryEn: "Manifesto of direct non-dual awakening at Cao Xi Monastery." },
        { passageTitleEn: "Prajna Chapter — Buddhism Within the World", commentaryEn: "Deep inspiration behind King Tran Nhan Tong's socially engaged Truc Lam Zen in Dai Viet." }
      ]
    },
    "zizhitongjian": {
      treasuryLabelEn: "Histories Section (Shibu 史部)",
      eraEn: "Northern Song Dynasty (completed 1084 CE under Sima Guang)",
      authorEn: "Sima Guang (司马光, 1084 CE — 294 fascicles)",
      schoolEn: "Political Historiography & Governance",
      summaryEn: "Monumental 294-volume chronological general history spanning 1,362 years from the Warring States (403 BCE) through the Five Dynasties (959 CE), dissecting causes of dynastic rise and ruin as an empirical mirror for rulers.",
      whyItMattersEn: "Unbroken 1,362-year institutional history serving for nearly a millennium as an empirical governance mirror across East Asia.",
      excerptsEn: [
        { passageTitleEn: "Zhou Records I — Virtue Over Clever Talent in Leadership", commentaryEn: "Sima Guang's opening reflection on the fall of the Zhi clan during the early Warring States." },
        { passageTitleEn: "Tang Records — Wei Zheng Remonstrating Emperor Taizong", commentaryEn: "Classic multi-perspective decision principle of the Zhenguan golden reign." },
        { passageTitleEn: "Tang Records — Water Carries and Capsizes the Boat", commentaryEn: "Enduring warning on popular legitimacy traced from Xunzi to Tang Taizong and Nguyen Trai." }
      ]
    },
    "shangshu": {
      treasuryLabelEn: "Classics Section (Jingbu 经部)",
      eraEn: "High Antiquity – Western Zhou (edited Spring & Autumn – Han)",
      authorEn: "Early Zhou–Qin Court Scribes (traditionally edited by Confucius)",
      schoolEn: "Confucianism / Five Classics",
      summaryEn: "China's oldest political documentary archive preserving proclamations, counsels, and oaths from Yao, Shun, Xia, Shang, and Zhou — originating the doctrines that 'Heaven's Mandate is not constant' and 'The people are the root of the state'.",
      whyItMattersEn: "Earliest East Asian constitutional documents establishing conditional Mandate of Heaven and people-centered legitimacy.",
      excerptsEn: [
        { passageTitleEn: "Songs of the Five Sons — The People Are the State's Root", commentaryEn: "Earliest Three-Dynasties doctrine of popular primacy, deeply echoed by Le Thanh Tong and Nguyen Trai in Vietnam." },
        { passageTitleEn: "Counsels of Great Yu — Sixteen-Character Mind Transmission", commentaryEn: "Revered by Song Neo-Confucians (Zhu Xi, Cheng Yi) as core teaching on disciplined governance of mind." },
        { passageTitleEn: "The Great Plan (Hongfan) — Five Dynamic Phases", commentaryEn: "Earliest textual definition of Five Phases as dynamic functional qualities rather than static matter." }
      ]
    },
    "shijing": {
      treasuryLabelEn: "Classics Section (Jingbu 经部)",
      eraEn: "Western Zhou – Spring and Autumn (11th–6th century BCE)",
      authorEn: "Folk Singers & Zhou Court Musicians (305 Odes)",
      schoolEn: "Confucianism / Five Classics",
      summaryEn: "Anthology of 305 archaic folk songs and court hymns divided into Airs, Elegantiae, and Hymns — crystallizing 'gentle, sincere' aesthetics and Confucius's four poetic functions (Inspire, Observe, Unify, Critique).",
      whyItMattersEn: "East Asia's oldest poetry collection faithfully mirroring ancient courtship, agrarian labor, and popular social critique.",
      excerptsEn: [
        { passageTitleEn: "Zhou Nan · Guan Ju — Joy Without Excess, Sorrow Without Ruin", commentaryEn: "Confucius praised its opening ode for balanced emotional restraint." },
        { passageTitleEn: "Qin Feng · Reeds in Autumn Frost", commentaryEn: "Evocative symbolic poem on yearning for truth and the elusive kindred spirit." },
        { passageTitleEn: "Wei Feng · Quince Gift — Ethics of Reciprocity", commentaryEn: "Early springhead of East Asian Renqing ethics valuing enduring bond above material price." }
      ]
    },
    "liji-zhouli": {
      treasuryLabelEn: "Classics Section (Jingbu 经部)",
      eraEn: "Warring States – Western Han (Dai Sheng's 49-chapter recension)",
      authorEn: "Warring States – Han Confucian Ritualists",
      schoolEn: "Confucianism / Five Classics",
      summaryEn: "Two pillars of the Three Rituals: 《Zhouli》 designs the idealized Six-Ministry state bureaucracy (inspiring Wang Anshi and Vietnam's Le Thanh Tong), while 《Liji》 preserves Great Unity ('All Under Heaven as Commonweal'), Musical Treatise, Great Learning, and Mean.",
      whyItMattersEn: "Codified family rites, Six-Board state structure, and the 'Great Unity' social ideal for two millennia.",
      excerptsEn: [
        { passageTitleEn: "Evolution of Rites — The Great Unity Ideal", commentaryEn: "Highest classical Confucian civic ideal, invoked by Sun Yat-sen and modern East Asian reformers." },
        { passageTitleEn: "Record of Learning — Philosophy of Pedagogy", commentaryEn: "Opening passage of the world's earliest dedicated treatise on education." },
        { passageTitleEn: "Summary of Rites — Respect and Self-Restraint", commentaryEn: "Theoretical anchor for mutual courtesy and social reciprocity across East Asia." }
      ]
    },
    "chunqiu-zuozhuan": {
      treasuryLabelEn: "Classics Section (Jingbu 经部)",
      eraEn: "Spring and Autumn – Early Warring States (Zuo Qiuming)",
      authorEn: "Confucius (Annals) & Zuo Qiuming (Zuo Tradition)",
      schoolEn: "Confucianism / Five Classics & Historiography",
      summaryEn: "China's earliest large-scale narrative chronicle elucidating the terse 《Spring and Autumn Annals》 (722–481 BCE), celebrated for subtle diplomatic persuasion, tactical battles, and the 'Three Imperishables' (Virtue, Meritorious Service, Enduring Words).",
      whyItMattersEn: "Established 'Spring and Autumn brushwork' (moral precision in single-word historiography) and classical diplomatic rhetoric.",
      excerptsEn: [
        { passageTitleEn: "Zuo Tradition — Fearing Danger in Peace", commentaryEn: "Wei Jiang's celebrated risk-management maxim addressed to Duke Dao of Jin." },
        { passageTitleEn: "Zuo Tradition — The Three Imperishables of Human Life", commentaryEn: "Supreme lifelong aspiration of East Asian scholar-officials for two thousand years." },
        { passageTitleEn: "Zuo Tradition — Diplomatic Eloquence", commentaryEn: "Demonstrates strategic moral suasion in interstate diplomacy." }
      ]
    },
    "xunzi": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "Late Warring States (c. 313–238 BCE)",
      authorEn: "Xun Kuang (荀况)",
      schoolEn: "Confucianism (Realist & Ritual Statecraft)",
      summaryEn: "Thirty-two chapters advancing Xunzi's provocative counter-thesis to Mencius: raw human impulses tilt toward self-interest, hence deliberate cultivation ('wei') via teachers, ritual music, and law builds goodness — alongside 'Harnessing Heaven's Mandate rather than praying blindly'.",
      whyItMattersEn: "Bridged Confucian ritual education with Legalist institutional realism; opened with 'Encouraging Learning' on patient step-by-step mastery.",
      excerptsEn: [
        { passageTitleEn: "Encouraging Learning — Blue Surpasses Indigo", commentaryEn: "Origin of the proverb celebrating students who surpass masters through relentless study." },
        { passageTitleEn: "Encouraging Learning — Small Steps Form a Thousand-League Journey", commentaryEn: "Timeless charter for cumulative mastery in language study and scholarly research." },
        { passageTitleEn: "Discourse on Heaven — Mastering Natural Regularity", commentaryEn: "Earliest Warring States declaration of naturalistic scientific agency." }
      ]
    },
    "chuci": {
      treasuryLabelEn: "Collections Section (Jibu 集部)",
      eraEn: "Warring States Period (c. 340–278 BCE)",
      authorEn: "Qu Yuan (屈原) & Song Yu",
      schoolEn: "Southern Romantic Poetry",
      summaryEn: "Lyrical poetry from the Xiang–Yangtze Chu homeland infused with shamanistic myth, soaring imagination, and moral integrity amid political betrayal across masterpieces like *Li Sao*, *Nine Songs*, and *Heavenly Questions*.",
      whyItMattersEn: "Inaugurated Chinese romantic lyricism, rhythmic 'xi' (兮) cadence, and fragrant-herb moral allegory; deeply inspired Nguyen Du and Vietnam's double-seven six-eight prosody.",
      excerptsEn: [
        { passageTitleEn: "Li Sao — Steadfast Quest on a Long Road", commentaryEn: "Widely quoted couplet celebrating tireless pursuit of truth despite steep journeys." },
        { passageTitleEn: "Li Sao — Unyielding Integrity Amid Turmoil", commentaryEn: "Emblem of scholar-poet dignity refusing compromise with corruption." },
        { passageTitleEn: "The Fisherman — Clear and Muddy Waters of the World", commentaryEn: "Iconic dialogue between exiled Qu Yuan and an old fisherman by the Miluo River." }
      ]
    },
    "huainanzi": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "Western Han Dynasty (139 BCE)",
      authorEn: "Liu An (Prince of Huainan) & Eight Retainer Scholars",
      schoolEn: "Syncretic / Eclectic Daoist–Confucian–Naturalist",
      summaryEn: "Twenty-one encyclopedic treatises compiled by Liu An and scholars for Emperor Wu of Han (139 BCE), uniting Huang–Lao Daoist cosmology with calendar astronomy, 12-pitch musical acoustics, and pragmatic statecraft.",
      whyItMattersEn: "First text to codify the complete sequence of 24 Solar Terms, preserve myths of Nüwa and Houyi, and model pluralistic governance.",
      excerptsEn: [
        { passageTitleEn: "Treatise on Heavenly Patterns — Complete 24 Solar Terms", commentaryEn: "First document recording all 24 seasonal solar terms in the exact order still used today." },
        { passageTitleEn: "Integrating Customs — Respecting Regional Pluralism", commentaryEn: "Advocates harmonious accommodation of diverse regional customs and intellectual traditions." },
        { passageTitleEn: "Peering into the Obscure — Nüwa Repairing the Sky", commentaryEn: "Oldest systematic literary record of the Nüwa sky-mending myth." }
      ]
    },
    "chajing": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "High Tang Dynasty (c. 760–780 CE)",
      authorEn: "Lu Yu (陆羽 — Courtesy name Hongjian)",
      schoolEn: "Agronomy & Tea Aesthetics",
      summaryEn: "Distilling over a decade of field research from Hubei to Jiangnan by Tea Sage Lu Yu, codifying Camellia sinensis botany, 24 tea utensils, spring-water grading, and decocted tea preparation.",
      whyItMattersEn: "Humanity's earliest dedicated monograph on tea (3 rolls, 10 sections), elevating tea drinking into spiritual discipline ('frugality and refined virtue').",
      excerptsEn: [
        { passageTitleEn: "Origins — Moral Character of the Tea Drinker", commentaryEn: "Established East Asian Tea Way ethics centuries prior to Japanese chado codification." },
        { passageTitleEn: "Boiling — Mountain Spring Water Standards", commentaryEn: "Astute empirical observation of dissolved minerals shaping tea aroma and liquor." },
        { passageTitleEn: "Drinking — Simplicity Over Utensil Ostentation", commentaryEn: "Privileges kindred dialogue at the tea table over costly ceramic display." }
      ]
    },
    "tiangongkaiwu": {
      treasuryLabelEn: "Masters Section (Zibu 子部)",
      eraEn: "Late Ming Dynasty (first printed 1637)",
      authorEn: "Song Yingxing (宋应星)",
      schoolEn: "Technology, Craft & Empirical Agronomy",
      summaryEn: "Seventeenth-century illustrated industrial encyclopedia featuring over 120 woodblock plates documenting rice cultivation, Xuan paper making, Jingdezhen's 72-step porcelain chain, zinc smelting, and steel forging.",
      whyItMattersEn: "Unmatched primary visual record of pre-industrial Chinese engineering, ceramics chemistry, and metallurgy.",
      excerptsEn: [
        { passageTitleEn: "Author's Preface — Writing for Future Artisans", commentaryEn: "Song Yingxing's candid declaration placing practical public utility above civil-exam prestige." },
        { passageTitleEn: "Ceramics — 72 Specialized Hands at Jingdezhen", commentaryEn: "Precious historical documentation of pre-industrial division of labor." },
        { passageTitleEn: "Grains — Nature's Craft and Human Ingenuity", commentaryEn: "Stresses harmony between ecological endowment ('Tiangong') and human craft." }
      ]
    },
    "tangshi300": {
      treasuryLabelEn: "Collections Section (Jibu 集部)",
      eraEn: "Tang Dynasty (618–907) / Compiled by Sun Zhu (1763)",
      authorEn: "Li Bai, Du Fu, Wang Wei, Bai Juyi, Li Shangyin et al.",
      schoolEn: "Regulated & Ancient-Style Poetics",
      summaryEn: "Anthologized in 1763 as a primer of poetic prosody and feeling, uniting Immortal Poet Li Bai, Sage Poet Du Fu, Buddha Poet Wang Wei, and accessible realist Bai Juyi.",
      whyItMattersEn: "Most influential poetic primer in East Asia (310+ poems by 77 poets), standardizing tonal parallelism and 'painting inside poetry' across China and Vietnam.",
      excerptsEn: [
        { passageTitleEn: "Li Bai — Quiet Night Thought (Homesickness)", commentaryEn: "Five-character quatrain whose crystalline simplicity touches generations across East Asia." },
        { passageTitleEn: "Du Fu — Spring View (Patriotic Grief in War)", commentaryEn: "Masterpiece of regulated verse featuring the couplet 'moved by times, flowers shed tears'." },
        { passageTitleEn: "Wang Wei — Autumn Evening in the Mountains", commentaryEn: "Ten opening graphs conjuring a meditative ink-wash scroll — praised by Su Shi as 'painting in verse'." }
      ]
    },
    "songci": {
      treasuryLabelEn: "Collections Section (Jibu 集部)",
      eraEn: "Song Dynasty (960–1279)",
      authorEn: "Su Shi, Xin Qiji, Li Qingzhao, Liu Yong et al.",
      schoolEn: "Lyric Ci Poetry (Heroic & Graceful Schools)",
      summaryEn: "Gathers iconic musical lyrics such as *Prelude to Water Melody*, *Charm of a Maiden Singer*, and *Pure Serene Music*, mirroring Song urban refinement alongside frontier longing.",
      whyItMattersEn: "Liberated poetry from rigid equal-line meter into irregular musical 'long-and-short lines', capturing both intimate interiority (Li Qingzhao) and heroic sweep (Su Shi, Xin Qiji).",
      excerptsEn: [
        { passageTitleEn: "Su Shi — Mid-Autumn Moon Across a Thousand Miles", commentaryEn: "Transforms separation sorrow into an enduring humanistic blessing across East Asia." },
        { passageTitleEn: "Li Qingzhao — Slow, Slow Tune (Fourteen Repeated Sounds)", commentaryEn: "Seven reduplicated syllables celebrated as an unsurpassed tour de force of musical sorrow." },
        { passageTitleEn: "Xin Qiji — Green Jade Table (Lantern Night Breakthrough)", commentaryEn: "Ranked by scholar Wang Guowei as the third and supreme stage of scholarly discovery." }
      ]
    },
    "guwenguanzhi": {
      treasuryLabelEn: "Collections Section (Jibu 集部)",
      eraEn: "Qing Kangxi Reign (compiled 1695) — spanning Zuo Tradition to Ming",
      authorEn: "Compiled by Wu Chucai & Wu Diaohou (222 Prose Pieces)",
      schoolEn: "Classical Guwen Prose",
      summaryEn: "Title means 'Having read thus far, one has beheld the pinnacle of ancient prose': spans Zhuge Liang's *Memorial on Dispatching Troops*, Tao Yuanming's *Peach Blossom Spring*, Wang Bo's *Tengwang Pavilion*, and Fan Zhongyan's *Yueyang Tower*.",
      whyItMattersEn: "Definitive 222-piece canon of classical prose rhetoric studied equally by Chinese and Vietnamese Confucian examinees.",
      excerptsEn: [
        { passageTitleEn: "Fan Zhongyan — Account of Yueyang Tower", commentaryEn: "Song literati's noblest manifesto of public-spirited civic duty." },
        { passageTitleEn: "Liu Yuxi — Inscription on a Humble Room", commentaryEn: "Affirms inner moral nobility transcending modest physical quarters." },
        { passageTitleEn: "Zhou Dunyi — On Love of the Lotus", commentaryEn: "Emblem of unstained moral integrity resonating deeply within Vietnamese culture." }
      ]
    },
    "hongloumeng": {
      treasuryLabelEn: "Collections Section (Jibu 集部)",
      eraEn: "Mid-Qing Qianlong Reign (c. 1750–1791)",
      authorEn: "Cao Xueqin (曹雪芹 — 80 Chapters) & Gao E (40-Chapter Sequel)",
      schoolEn: "Vernacular Chapter Novel (Masterpiece of Psychological Realism)",
      summaryEn: "Through the tragic triangle of Jia Baoyu, Lin Daiyu, and Xue Baochai inside the opulent then-collapsing Grand View Garden, Cao Xueqin dissects women's fates, individual yearning vs. lineage duty, and Dao–Buddhist impermanence.",
      whyItMattersEn: "Apex of East Asian psychological-social realism and living encyclopedia of Qing gardens, cuisine, tea craft, poetry, and noble household decline.",
      excerptsEn: [
        { passageTitleEn: "Chapter 1 — Couplet at the Archway of Great Void Illusion", commentaryEn: "Philosophical pun linking surname Jia (贾) with True vs. False (真/假) across all 120 chapters." },
        { passageTitleEn: "Chapter 1 — Pages Full of 'Absurd Words' and Bitter Tears", commentaryEn: "Cao Xueqin's poignant self-preface penned in poverty in Beijing's Western Hills." },
        { passageTitleEn: "Chapter 27 — Lin Daiyu's Flower Burial Elegy", commentaryEn: "Lyrical crystal of tragic beauty and uncompromising spiritual purity." }
      ]
    },
    "sanguoyanyi": {
      treasuryLabelEn: "Collections Section (Jibu 集部)",
      eraEn: "Early Ming Dynasty (c. 14th century)",
      authorEn: "Luo Guanzhong (罗贯中)",
      schoolEn: "Historical Chapter Novel ('Seven Parts Fact, Three Parts Fiction')",
      summaryEn: "Dramatizes nearly a century of Wei–Shu–Wu contention (184–280 CE) atop Chen Shou's historical *Records of the Three Kingdoms*, inspiring countless strategic idioms, stage plays, and cultural archetypes.",
      whyItMattersEn: "Shaped popular East Asian imaginaries of loyalty-brotherhood (Guan Yu), strategic wisdom (Zhuge Liang), political realism (Cao Cao), and dynastic cycles.",
      excerptsEn: [
        { passageTitleEn: "Chapter 1 — Opening Maxim of Dynastic Cyclicality", commentaryEn: "Famous opening lines framing China's first full-length historical chapter novel." },
        { passageTitleEn: "Chapter 1 — Oath of the Peach Garden", commentaryEn: "Fraternal covenant of sworn fidelity deeply influential across merchant guilds and East Asian brotherhood lore." },
        { passageTitleEn: "Zhuge Liang — Utmost Devotion Until Death", commentaryEn: "Kongming's selfless public service became an enduring ideal of loyal stewardship." }
      ]
    },
    "bachanhtapluc": {
      treasuryLabelEn: "Collections Section (Jibu 集部)",
      eraEn: "Early 19th Century (1813–1814)",
      authorEn: "Nguyen Du (阮攸 — Dai Viet Chief Envoy)",
      schoolEn: "Diplomatic Classical Chinese Poetry (Sino–Vietnamese Cultural Dialogue)",
      summaryEn: "Written during an overland mission from Lang Son through Guilin, Hunan, the Xiang and Yellow Rivers to Beijing (1813–1814), conversing critically with Qu Yuan, Li Bai, Du Fu, and Wen Tianxiang while chronicling the suffering of ordinary laborers.",
      whyItMattersEn: "Great Vietnamese National Poet Nguyen Du's 131-poem Hanzi collection embodying autonomous Vietnamese conscience and universal humanitarian sympathy.",
      excerptsEn: [
        { passageTitleEn: "Counter-Summons of the Soul — Dialogue with Qu Yuan", commentaryEn: "Philosophically daring Hanzi poem composed along the Xiang River by Vietnam's Chief Envoy." },
        { passageTitleEn: "The Blind Singing Beggar at Taiping — Universal Compassion", commentaryEn: "Luminous testament to the moral breadth of Vietnamese diplomatic literature." },
        { passageTitleEn: "Tomb of Qin Hui — Verdict of Historical Justice", commentaryEn: "Cutting historical reflection composed in Hangzhou by Dai Viet's envoy." }
      ]
    }
  };

  const MATRIX_EN = [
    {
      dimensionEn: "Human Nature (人性论)",
      confucianismEn: "Inclined toward good yet needing cultivation (Mencius: innate goodness; Xunzi: untamed desire requiring Ritual refinement).",
      daoismEn: "Naturally uncarved and wholesome ('Pu' 朴); distorted by ambition for status and artificial convention.",
      legalismEn: "Self-interested, seeking gain and avoiding harm ('Haoli ehai'); must be constrained through objective law.",
      buddhismEn: "Every sentient being possesses innate Buddha-nature (awakened awareness), veiled only by ignorance and greed–hatred–delusion.",
      mohismEn: "Like undyed white silk ('Ransi'), wholly shaped by social environment and leadership example."
    },
    {
      dimensionEn: "Governance & Statecraft (治国之道)",
      confucianismEn: "Rule by Virtue & Ritual: moral education, exemplary leadership, and clear civic roles.",
      daoismEn: "Effortless Non-Interference (Wuwei): pare back meddlesome decrees and heavy extraction so society self-regulates.",
      legalismEn: "Fa – Shu – Shi: transparent law, predictable rewards/penalties, and tight bureaucratic auditing.",
      buddhismEn: "Ten Wholesome Deeds & Compassionate Protection: harmonizing public mindsets to reinforce civic ethics.",
      mohismEn: "Elevate the Worthy & Practice Frugality: meritocratic selection regardless of birth and ending wasteful luxury/war."
    },
    {
      dimensionEn: "Stance on Knowledge & Language",
      confucianismEn: "Study historical classics and practice 'Rectification of Names' so words match moral duties.",
      daoismEn: "Skeptical of linguistic limits ('the Dao that can be spoken is not constant Dao'); privileges intuitive directness.",
      legalismEn: "Rejects sterile scholastic chatter; demands exact correspondence between speech/proposal and measurable performance.",
      buddhismEn: "Words are merely a 'finger pointing at the moon'; look beyond text to awaken directly to Interdependent Emptiness.",
      mohismEn: "Champions formal dialectical logic (Mohist Canons) and three-fold empirical testing ('Sanbiao Fa')."
    },
    {
      dimensionEn: "View of History & Change (历史与时间观)",
      confucianismEn: "Reveres Three-Dynasties exemplars (Yao–Shun–Duke of Zhou) while adapting flexibly with 'timely equilibrium' (Yijing).",
      daoismEn: "Cyclical natural return ('Reversal is the movement of Dao'); skeptical of technocratic 'progress' eroding simplicity.",
      legalismEn: "Pragmatic historical evolution ('Do not cling blindly to antiquity'): new conditions demand redesigned institutions.",
      buddhismEn: "Impermanence (Anicca) and Dependent Origination: every phenomenon cycles continuously through arising, abiding, decay, and emptiness.",
      mohismEn: "Historical precedent serves purely as empirical verification in service of present popular livelihood."
    },
    {
      dimensionEn: "Economy, Commerce & Utility (义利与经济观)",
      confucianismEn: "Places Righteousness above narrow Profit ('See gain, think of right'), yet enriches livelihood before teaching morality ('Confucian Merchant' trustworthiness).",
      daoismEn: "Contentment brings lasting peace ('Zhi zu chang le'), curbing excessive material craving to preserve vitality.",
      legalismEn: "Privileges agriculture and state defense; tightly regulates merchant speculation and strategic monopolies.",
      buddhismEn: "Right Livelihood (harming no beings), generosity (Dana), and symbiotic monastic–community stewardship.",
      mohismEn: "Mutual Practical Benefit (交相利): tangible material welfare of commoners is the concrete yardstick of justice."
    },
    {
      dimensionEn: "Body–Mind Cultivation (身心修养工夫)",
      confucianismEn: "Vigilance in solitude (Shendu), quiet reflection, and enacting Ren–Yi directly inside family and civic roles.",
      daoismEn: "Fasting of the mind, 'Sitting in Oblivion' (Zhuangzi), breath regulation, and tranquil alignment with natural rhythm.",
      legalismEn: "Places little value on private spiritual introspection; trains strict institutional compliance and public duty.",
      buddhismEn: "Threefold Training (Ethics – Concentration – Wisdom), contemplating emptiness of five aggregates, and moment-to-moment mindfulness.",
      mohismEn: "Ascetic selfless service ('wearing oneself down from crown to heel'), technical craft mastery, and civic defense."
    }
  ];

  const CUSTOMS_EN = {
    "spring-festival": {
      originsEn: "Evolved from pre-Qin year-end agrarian thanksgiving rites ('La sacrifice'); officially named 'Spring Festival' (Chunjie) in 1914 after Republican adoption of the Gregorian administrative calendar.",
      symbolismEn: "Multigenerational family reunion dinner ('Nianyefan'), seeing off the old year ('Chuxi'), auspicious red couplets and inverted 'Fu' characters ('Good fortune has arrived'), and red envelopes ('Yasuiqian') originally meant to ward off harm from children.",
      regionalDiffEn: "Northern China serves boiled dumplings ('Jiaozi', echoing silver ingots and 'midnight renewal'); Southern China favors glutinous Niangao cakes ('rising higher every year'), sweet Tangyuan dumplings, and Cantonese flower fairs.",
      modernTransformEn: "Defined today by the massive Chunyun holiday travel migration, CCTV's Spring Festival Gala (since 1983), digital WeChat red packets, and destination family travel."
    },
    "qingming": {
      originsEn: "Merged the solar term Qingming (early April) with the Cold Food Festival (commemorating Spring & Autumn loyalist Jie Zitui) and Shangsi river-purification customs of Tang–Song times.",
      symbolismEn: "Purification and filial remembrance: combines solemn ancestral tomb-sweeping ('Saomu') with joyful spring hillside outings ('Taqing' — treading the green).",
      regionalDiffEn: "Jiangnan households prepare emerald mugwort rice cakes (Qingtuan); Fujian and Lingnan clans conduct week-long lineage-wide ancestral grave gatherings.",
      modernTransformEn: "Designated a national public holiday since 2008; increasingly accompanied by 'eco-friendly tomb sweeping' (fresh flowers replacing paper offerings) and online memorial platforms."
    },
    "dragon-boat": {
      originsEn: "Synthesizes ancient Yangtze Baiyue dragon-totem rites, early-summer epidemic prevention rituals (the 'Fifth Evil Month'), and popular commemoration of patriotic Chu poet Qu Yuan at the Miluo River.",
      symbolismEn: "Hanging mugwort and calamus leaves on doorways, wearing scented sachets, tying five-color silk threads for health protection, and synchronized dragon-boat racing symbolizing solidarity.",
      regionalDiffEn: "Zongzi bamboo-leaf rice dumplings divide cleanly between Northern sweet fillings (red dates, sweet bean paste) and Southern savory styles (braised pork belly and salted egg yolk in Jiaxing and Guangdong).",
      modernTransformEn: "Inscribed as UNESCO Intangible Cultural Heritage (2009), while dragon-boat racing evolved into an international competitive sport."
    },
    "mid-autumn": {
      originsEn: "Grew out of ancient autumn moon-worship rituals ('Xiyue'), matured into a popular reunion festival in the Tang, and peaked in Northern Song cities such as Kaifeng with all-night moon-viewing markets.",
      symbolismEn: "The full moon on the 15th of the 8th lunar month embodies wholeness, family reunion, and remembrance across distance (Su Shi's 'May we live long and share this moonlight across a thousand miles').",
      regionalDiffEn: "Diverse regional mooncake styles: thin-skinned savory/egg-yolk Cantonese, flaky layered Suzhou, crisp Beijing, and Yunnan ham-and-rose fillings.",
      modernTransformEn: "Serves both as major family/corporate gifting season (now subject to anti-extravagance and minimalist-packaging rules) and urban skydeck moon-watching."
    },
    "double-ninth": {
      originsEn: "Ninth day of the ninth lunar month — doubled Yang nine ('Chongyang'). By Han–Wei times associated with climbing heights to ward off misfortune, wearing cornelian-dogwood sprigs, and drinking chrysanthemum wine.",
      symbolismEn: "Longevity (since 'Nine' Jiu 九 shares pronunciation with Jiu 久 meaning 'long-enduring'), lofty contemplation, and honoring elders.",
      regionalDiffEn: "Northern China eats layered Chongyang flour cakes ('Gao' punning on elevation); Guangdong and Hong Kong perform second autumn ancestral tomb cleanings.",
      modernTransformEn: "Since 1989 (and reinforced by the 2013 Elderly Rights Law), China celebrates Double Ninth officially as Senior Citizens' Day (Laorenjie)."
    },
    "traditional-weddings": {
      originsEn: "Standardized from the Zhou-era 'Six Rites' recorded in 《Yili》 (proposal, name inquiry, divination match, betrothal gifts, date setting, bridal procession), later streamlined into Song–Ming 'Three Letters & Six Rites'.",
      symbolismEn: "Three ceremonial bows (to Heaven & Earth, Ancestors/Parents, and Each Other) confer civic legitimacy; sharing nuptial wine from split gourd cups symbolizes enduring union through sweet and bitter years.",
      regionalDiffEn: "Northern traditions emphasize grand red bridal sedan processions; Lingnan and Fujian highlight gold jewelry gifts ('Sanjin' and dragon-phoenix bangles) and the bridal hair-combing rite ('Shangtou').",
      modernTransformEn: "Contemporary couples frequently blend Hanfu/Xiuhe embroidered studio shoots with modern banquet receptions or minimalist destination elopements."
    },
    "funeral-customs": {
      originsEn: "Confucianism placed extraordinary weight on funerary piety ('carefully attend the end and remember distant ancestors' — Zengzi), later interwoven with 49-day Buddhist merit rites and Daoist cosmology.",
      symbolismEn: "White mourning attire ('White Affairs') expresses purity and grief; the Five Degrees of Mourning garments calibrated social obligation by kinship closeness; peaceful earth burial ('resting in soil') secured lineage continuity.",
      regionalDiffEn: "Deeply rooted rural earth burial traditions alongside distinctive customs such as Tujia bridal lamentations and regional North–South seven-day vigil schedules.",
      modernTransformEn: "Mid-20th-century state policy promoted cremation, expanding in megacities toward green ecological burials (tree, flower, and sea scatterings) amid land scarcity."
    },
    "ancestral-worship": {
      originsEn: "One of East Asia's deepest spiritual arteries stretching back to Shang royal ancestor divination, subsequently rationalized by Confucianism as moral gratitude ('repaying one's root and source').",
      symbolismEn: "Wooden spirit tablets, written genealogies ('Zupu'), and ancestral clan halls ('Zongci') anchor the individual inside an unbroken continuum linking past forebears, living kin, and unborn descendants.",
      regionalDiffEn: "Exceptionally vital across Fujian, Guangdong, Zhejiang, and Anhui (Huizhou), marked by monumental lineage halls and shared clan endowments.",
      modernTransformEn: "Strong revival of lineage hall restorations, Qingming–Dongzhi clan reunions in Southern provinces, and digitized online family trees."
    },
    "family-relationships": {
      originsEn: "Structured by patrilineal lineage order and Confucian Five Relationships; sociologist Fei Xiaotong conceptualized it as the 'Differential Mode of Association' (差序格局 — ripples widening outward from self by relational closeness).",
      symbolismEn: "Granular kinship titles sharply distinguish paternal ('Tang') vs. maternal ('Biao') relatives, senior vs. junior branches, encoding exact reciprocity and support duties.",
      regionalDiffEn: "Nuclear households predominate in metropolitan cities, yet extended clan and hometown solidarity still drives entrepreneurial networks in Chaoshan, Wenzhou, and Fujian.",
      modernTransformEn: "Transitioned from multigenerational compounds ('four generations under one roof') to '4-2-1' inverted nuclear pyramids alongside rising delayed marriage and solo households."
    },
    "traditional-clothing": {
      originsEn: "Continuously evolved across millennia: Zhou–Han deep-robe Shenyi, Tang high-waisted Qixiong Ruqun, Song slim Beizi coat, Ming pleated Mamianqun horse-face skirt, and Qing–Republican Changshan & Qipao.",
      symbolismEn: "Upper tunic and lower skirt pairing, right-crossing lapel ('Youren' 右衽), and Ming–Qing Mandarin square badges ('Buzi') signifying official rank through avian and beast motifs.",
      regionalDiffEn: "Alongside Han robes flourishes the dazzling textile heritage of 55 ethnic minorities: Miao silver-ornamented pleats, Tibetan wool robes, and 1920s–40s Shanghai Qipao tailoring.",
      modernTransformEn: "Surging Hanfu revival and 'New Chinese Style' (Xin Zhongshi — weaving knotted frog buttons, stand collars, and horse-face pleats into everyday office attire)."
    },
    "naming-traditions": {
      originsEn: "Merges Surname (Xing 姓 — archaic matrilineal clan + Shi 氏 — noble lineage, fused by Qin–Han) placed ahead of Given Name (Ming 名), historically complemented by Courtesy Name (Zi) at adulthood and Literary Sobriquet (Hao).",
      symbolismEn: "Generational naming poems ('Beizi') assign shared middle characters across each cousin cohort; historical naming taboos ('Bihui') avoided graphs borne by sovereigns and elders.",
      regionalDiffEn: "Han names typically comprise two or three syllables (plus rare compound surnames like Sima, Ouyang), while Tibetan, Uyghur, and Mongolian naming follows distinct non-Han conventions.",
      modernTransformEn: "Courtesy names faded after 1911; Gen Z parents increasingly favor evocative two-character poetic names drawn from *Shijing* and *Chuci*, or double surnames combining both parents."
    },
    "tea-culture": {
      originsEn: "From wild medicinal leaf in pre-Qin Bashu (Sichuan–Yunnan) to refined drink of Six Dynasties monks and Tang scholars, culminating in Lu Yu's ~760 CE *Classic of Tea* establishing tea aesthetics as scholarship.",
      symbolismEn: "Embodies 'Harmony, Respect, Purity, Serenity'; serves as social icebreaker ('welcome guests with tea'), conflict mediator, and contemplative bridge across Confucian–Buddhist–Daoist sensibilities.",
      regionalDiffEn: "Six classic tea categories by oxidation: Green (West Lake Longjing), Black/Red (Keemun), Oolong (Gongfu tea of Chaozhou & Minnan), White (Fuding), Yellow, and Dark/Post-fermented (Yunnan Pu'er).",
      modernTransformEn: "Balances timeless Chengdu bamboo-chair teahouses and Hangzhou tea rooms with the booming 'New-Style Tea' wave of whole-leaf fruit and milk infusions."
    },
    "food-culture": {
      originsEn: "Grounded in 'Food and Medicine Share One Source' (Shi-yi tongyuan), paired with chopstick precision, high-heat Song-era cast-iron wok stir-frying (Chao), and harmonization of the Five Flavors.",
      symbolismEn: "Rotating round communal tables affirm shared fellowship while still honoring the Door-Facing Seat of Honor; banquet culture ('Jiuzhuo Wenhua') cements social trust.",
      regionalDiffEn: "Eight Great Culinary Traditions: Shandong (Lu), Sichuan (Chuan — numbing mala), Cantonese (Yue), Jiangsu (Su), Zhejiang (Zhe), Fujian (Min), Hunan (Xiang), and Anhui (Hui).",
      modernTransformEn: "Rise of standardized hotpot chains (Haidilao), packaged ready-to-cook industries, and viral grassroots culinary tourism (Zibo BBQ, Tianshui malatang)."
    },
    "traditional-etiquette": {
      originsEn: "China's self-designation as 'Land of Ritual and Decorum' (Liyi zhi bang) stems from the Three Ritual Classics, regulating posture, speech, and humility in human encounter.",
      symbolismEn: "Finger-tapping thanks when poured tea ('Kouzhili'), two-hand cupped greeting ('Gongshou'), honorific vs. humble titles ('your esteemed surname' / 'my humble house'), and thoughtful seating etiquette.",
      regionalDiffEn: "Northern banquets emphasize formal verbal toasts and hierarchical seating, while Southern Guangdong–Fujian favors brisk tea etiquette and pragmatic warmth.",
      modernTransformEn: "Blends international handshakes seamlessly with traditional car/banquet seating order ('Zuoci') and two-handed business-card / QR-scan exchange."
    },
    "traditional-ceremonies": {
      originsEn: "Rites of passage marking biological and social milestones across the human life-cycle: Full-Month celebration (Manyue), First-Birthday Tool Selection (Zhuazhou), Capping/Hairpin Coming-of-Age (Guanli/Jili), and Master-Apprentice Initiation (Baishi).",
      symbolismEn: "Zhuazhou places brush, book, abacus, and seal before a one-year-old to divine aspirations; the First Writing Ceremony ('Kaibili') instills lifelong reverence for learning and mentors.",
      regionalDiffEn: "Preserved vividly in historic academy towns, while strict Baishi master-disciple rituals remain active across Peking opera, martial arts, TCM, and fine crafts.",
      modernTransformEn: "Primary schools and Confucian temples nationwide widely stage restored 'First Brushstroke' and Coming-of-Age rituals every autumn term."
    },
    "lantern-festival": {
      originsEn: "Fifteenth night of the first lunar month (Shangyuan), combining Emperor Wu of Han's torch-lit Taiyi worship with Eastern Han–Tang Buddhist lantern offerings, maturing into curfew-free Tang–Song night carnivals.",
      symbolismEn: "Illuminated lanterns banish lingering winter chill; round sticky-rice balls evoke family wholeness ('tuantuan yuanyuan') and seasonal renewal.",
      regionalDiffEn: "Northerners roll dry flour over fillings into 'Yuanxiao'; Southerners knead wet glutinous dough around black-sesame paste for 'Tangyuan'. Zigong and Nanjing Qinhuai lantern fairs lead nationwide.",
      modernTransformEn: "Combines traditional silk artisan lanterns with synchronized drone light formations in ancient-quarter evening parades."
    },
    "qixi-festival": {
      originsEn: "Seventh evening of the seventh lunar month, rooted in astronomical observation of Altair (Cowherd) and Vega (Weaver Girl) parted by the Milky Way, recorded in Han–Six Dynasties folklore.",
      symbolismEn: "Beyond romantic longing, classical Qixi centered on 'Pleading for Dexterity' (Qiqiao): young women threading fine needles by moonlight to pray for artisanal skill and quick wit.",
      regionalDiffEn: "Jiangnan bakes crisp pastry twists ('Qiaoguo'); Guangdong–Lingnan stages elaborate 'Seven Maidens' tabletop displays of miniature crafts; contemporary Vietnam links 7/7 to Ngau rains and red-bean dessert.",
      modernTransformEn: "Rebranded commercially as 'Chinese Traditional Valentine's Day' driving e-commerce gifting, cultural tourism, and Hanfu night walks."
    },
    "dongzhi-festival": {
      originsEn: "Earliest solar term pinpointed via Zhou–Qin gnomon shadow rods (December 21–22, longest night); treated across Han–Tang courts as a state holiday nearly equal in rank to Lunar New Year.",
      symbolismEn: "Under Yijing hexagram Fu (Earth Over Thunder ䷗), Winter Solstice marks 'First Yang Arising' — extreme Yin giving birth to latent returning vitality.",
      regionalDiffEn: "Classic North–South maxim: 'North eats dumplings at Dongzhi (to guard ears from frostbite); South enjoys Tangyuan rice balls or warming mutton'; Fujian–Guangdong hold grand clan-hall ancestral feasts.",
      modernTransformEn: "Remains central to winter dietary nourishment ('Dongbu' herbal tonics) and year-end lineage reunions across Southern China."
    },
    "laba-zhongyuan": {
      originsEn: "Laba (8th day of the 12th lunar month) merges ancient year-end harvest sacrifices with the Buddha's Enlightenment; Zhongyuan (15th of 7th month) fuses Daoist pardon-of-souls rites with Buddhist Ullambana filial salvation.",
      symbolismEn: "Expresses compassion, filial remembrance, and communal sharing ('Pass Laba and Spring Festival is already here').",
      regionalDiffEn: "Beijing and Northern China soak green Laba garlic in vinegar and cook eight-grain Laba porridge; Southern Fujian, Guangxi, and Vietnam celebrate sweeping Ullambana filial piety rituals.",
      modernTransformEn: "Famous monasteries (Yonghegong, Lingyin) distribute free charitable Laba porridge each winter while urban communities observe respectful floral offerings."
    },
    "seal-scholar-studio": {
      originsEn: "Crystallized from Northern–Southern Dynasties through Tang–Song as scholar-officials cultivated private retreats ('Shuzhai') for reading, brushwork, tea, and philosophical conversation.",
      symbolismEn: "Unites the Four Treasures of the Study — Writing Brush, Inkstick, Xuan Paper, and Inkstone — alongside cinnabar seal stamps, flower vases, incense burners, and scholar viewing rocks.",
      regionalDiffEn: "Classical provenance prizes four Southern-Eastern ateliers: Hu brushes (Huzhou), Hui inksticks (Huizhou), Xuan paper (Xuancheng, UNESCO), and Duan inkstones (Zhaoqing, Guangdong).",
      modernTransformEn: "Reimagined today in diplomatic cultural gifts and 'New Chinese Study Room' interior architecture across both China and Vietnam."
    }
  };

  const ARTS_EN = {
    "calligraphy": {
      aestheticCoreEn: "Plastic art of linear brush movement wielding the Four Treasures (Brush, Ink, Paper, Inkstone), treating every stroke as a direct mirror of character and vital energy ('Writing reveals the person').",
      evolutionEn: "Mastered across five canonical scripts: Seal Script (Zhuanshu — Large/Small Seal), Clerical Script (Lishu — Qin–Han), Cursive (Caoshu), Running Script (Xingshu — *Lantingji Xu*), and Regular Script (Kaishu — Tang standard).",
      mastersEn: "Wang Xizhi (Eastern Jin), Yan Zhenqing & Liu Gongquan (Tang), Su Shi & Mi Fu (Song), Zhao Mengfu (Yuan)."
    },
    "ink-wash": {
      aestheticCoreEn: "Explores monochrome tonal nuance ('Ink Divided into Five Colors') through Daoist–Chan aesthetics: eloquent blank space ('Liubai'), rhythmic vitality ('Qiyun shengdong' — Xie He's First Principle), and 'poetry inside painting, painting inside poetry'.",
      evolutionEn: "Divides into three grand genres — Landscape (Shan-shui, pinnacle of natural philosophy), Bird-and-Flower (encoding the Four Gentlemen: Plum, Orchid, Chrysanthemum, Bamboo), and Figure Painting — blossoming into Song–Yuan Literati Painting.",
      mastersEn: "Wang Wei (Tang), Fan Kuan & Guo Xi (Northern Song), Huang Gongwang & Ni Zan (Yuan), Bada Shanren (Qing), Qi Baishi & Xu Beihong (Modern)."
    },
    "classical-poetry": {
      aestheticCoreEn: "Distills tonal balance and parallel imagery so resonance extends far beyond explicit words ('Yi zai yan wai'), forming a shared literary commons across East Asian scholars.",
      evolutionEn: "From *Shijing* (4-syllable Northern realism) and *Chuci* (Southern lyricism) -> Han *Yuefu* -> Tang Regulated Verse (5/7-syllable apex under Li Bai, Du Fu, Wang Wei) -> Song *Ci* sung lyrics -> Yuan *Qu* theater arias.",
      mastersEn: "Qu Yuan, Tao Yuanming, Li Bai, Du Fu, Bai Juyi, Li Shangyin, Su Shi, Xin Qiji."
    },
    "architecture": {
      aestheticCoreEn: "Resilient timber post-and-beam frames locked by interlocking Dou-gong (斗拱) brackets without iron nails, absorbing seismic shear while sweeping curved tiled eaves ('Feiyan'); laid out along cosmic North–South axes per the Song *Yingzao Fashi* manual.",
      evolutionEn: "Encompasses imperial palaces (Beijing's Forbidden City, UNESCO), ritual altars (Temple of Heaven), timber pagodas/temples (Tang-era Foguang Temple in Shanxi), stone bridges (Zhaozhou Bridge), and vernacular dwellings (Beijing Siheyuan, Fujian Tulou, Huizhou Horse-head walls).",
      mastersEn: "Li Jie (author of *Yingzao Fashi*), Liang Sicheng (founder of modern Chinese architectural historiography)."
    },
    "gardens": {
      aestheticCoreEn: "Microcosmic landscapes ('Though wrought by human hand, seeming opened by Heaven itself'), applying Borrowed Scenery (Jiejing), Framed Views (Duijing), and winding asymmetry in deliberate counterpoint to axial palace symmetry.",
      evolutionEn: "Divided into majestic Northern Imperial Parks (Summer Palace, Chengde Mountain Resort) and intimate Southern Literati Gardens (Humble Administrator's & Lingering Gardens in Suzhou).",
      mastersEn: "Ji Cheng (Ming author of *Yuanye* / *Craft of Gardens*, the world's earliest landscape design treatise)."
    },
    "ceramics": {
      aestheticCoreEn: "Fuses kaolin clay, mineral glazes, and high-temperature kiln firing (>1,280 °C) to create luminous porcelain once synonymous with 'China' itself, valuing celadon clarity reminiscent of nephrite jade.",
      evolutionEn: "Neolithic painted earthenware -> Tang Sancai lead glazes -> Song Five Great Kilns monochrome restraint (Ru, Guan, Ge, Jun, Ding) -> Yuan–Ming cobalt Blue-and-White -> Qing polychrome Fencai & Wucai centered at Jingdezhen.",
      mastersEn: "Jingdezhen imperial kilns (Jiangxi), Dehua blanc-de-chine (Fujian), Yixing Zisha purple-clay teapots (Jiangsu)."
    },
    "peking-opera": {
      aestheticCoreEn: "Total stage synthesis of four disciplines — Singing, Recitation, Stylized Acting, and Acrobatic Martial Combat — paired with codified facial-paint symbolism ('Lianpu': red for loyalty, white for cunning, black for fierce rectitude).",
      evolutionEn: "Synthesized in the late 18th century (1790, when Four Great Anhui Troupes entered Beijing for Qianlong's birthday), blending Hui, Han, and older Ming Kunqu opera (UNESCO).",
      mastersEn: "Mei Lanfang (梅兰芳 — foremost Female-Role Master), Cheng Yanqiu, Zhou Xinfang."
    },
    "hanfu": {
      aestheticCoreEn: "Celebrates sweeping robes and sash-belted grace ('broad sleeves and ample sash') cut from flat-pattern loom widths without textile waste, enriched by China's Four Great Embroideries.",
      evolutionEn: "Accurately reconstructed from archaeological textiles (Han Mawangdui tombs, Song–Ming burials) combined with living Hangzhou and Suzhou silk weaving traditions.",
      mastersEn: "China National Silk Museum (Hangzhou) researchers and modern historical-costume reconstruction ateliers."
    },
    "traditional-music": {
      aestheticCoreEn: "Built upon the five-tone pentatonic scale (Gong–Shang–Jue–Zhi–Yu) calibrated by the 'Three-Parts Subtraction and Addition' acoustic ratio, valuing quiet overtone resonance between notes above dense polyphony.",
      evolutionEn: "Instruments classified into the 'Eight Timbres' (Bayin: silk, bamboo, wood, stone, metal, clay, gourd, hide); spans the seven-string scholar Guqin (UNESCO) alongside Pipa, Erhu, Guzheng, Dizi flute, and Zhou bronze chime bells.",
      mastersEn: "Boya & Zhong Ziqi (archetype of the kindred listener), Ji Kang (*Guangling Verse*), Hua Yanjun / Abing (*Moon Reflected on Second Spring*)."
    },
    "classical-literature": {
      aestheticCoreEn: "Twin streams pairing terse classical Guwen prose (Tang–Song Eight Great Masters) with vibrant urban vernacular fiction maturing from Song oral storybooks into Ming–Qing chapter novels.",
      evolutionEn: "Culminated in the Four Masterworks (*Three Kingdoms*, *Water Margin*, *Journey to the West*, *Plum in the Golden Vase*), satirical *The Scholars*, supernatural *Strange Tales from a Chinese Studio*, and *Dream of the Red Chamber*.",
      mastersEn: "Han Yu, Liu Zongyuan, Su Shi, Luo Guanzhong, Wu Cheng'en, Pu Songling, Cao Xueqin."
    },
    "seal-carving": {
      aestheticCoreEn: "Unites Seal-script calligraphy with miniature stone engraving ('Within one square inch, a cosmos of ten thousand postures'), balancing crisp crimson ink and carved negative space ('Fen zhu bu bai') with archaic bronze-stone grit.",
      evolutionEn: "From pre-Qin and Qin–Han bronze/jade seals of state authority to Yuan–Ming literati (Wang Mian, Wen Peng) carving soft pyrophyllite stones personally to sign paintings; UNESCO Intangible Heritage (2009).",
      mastersEn: "Wen Peng (Ming), Deng Shiru (Qing), Wu Changshuo, Huang Binhong, Qi Baishi, and Hangzhou's Xiling Seal Engravers' Society."
    },
    "bronze-jade-art": {
      aestheticCoreEn: "Shang–Zhou ritual bronzes radiate awe-inspiring solemnity ('Ningzhongmei') mediating Heaven, Earth, and ancestors; archaic jades embody Confucian virtue ('the exemplary person likens moral character to jade' — warm luster, clarity, unyielding integrity).",
      evolutionEn: "Hongshan & Liangzhu Neolithic ritual jades (Bi discs, Cong tubes >5,000 years ago) -> Shang–Zhou bronze climax (Houmuwu Ding, inscribed Maogong Ding) -> intricate Qianlong Hetian jade carving.",
      mastersEn: "Royal foundry artisans of Yinxu (Anyang), Zhouyuan (Shaanxi), Sanxingdui (Sichuan), and Suzhou–Yangzhou imperial jade ateliers."
    },
    "embroidery-silk": {
      aestheticCoreEn: "Natural mulberry-silk sheen paired with multi-harness Flower-Loom brocade weaving ('an inch of Yunjin brocade worth an inch of gold') and uncanny double-sided identical needlework ('Shuangmianxiu').",
      evolutionEn: "Neolithic sericulture -> Han Shu brocade and Song silks -> Ming–Qing Nanjing Yunjin interwoven with gold foil and peacock-feather filaments alongside Four Great Embroideries: Su (Jiangsu elegance), Xiang (Hunan tiger realism), Yue (Guangdong vibrancy), Shu (Sichuan).",
      mastersEn: "Shen Shou (沈寿 — late-Qing pioneer of photographic Su embroidery), Nanjing Yunjin Research Institute, and Hangzhou Silk Museum."
    },
    "grotto-sculpture": {
      aestheticCoreEn: "Carved sandstone and limestone cliffs into continuous millennium-long open-air sanctuaries tracing Buddhism's aesthetic journey from Greco-Indian Gandhara proportions to serene, compassionate Chinese naturalism.",
      evolutionEn: "Launched at Xinjiang Kizil and Dunhuang Mogao (from 366 CE) -> Northern Wei majesty at Yungang -> Tang High Classicism at Longmen (Empress-era Vairocana Buddha) -> Song synthesis of Three Teachings at Dazu Rock Carvings.",
      mastersEn: "Anonymous Silk Road cave-sculptor guilds and modern Dunhuang conservation pioneers Chang Shuhong and Fan Jinshi."
    },
    "scholar-four-arts": {
      aestheticCoreEn: "Four foundational disciplines of cultivated mind: Guqin (澄心) tuning serene introspection, Weiqi/Go (19×19 grid, 361 intersections) training strategic spatial balance, Calligraphy (书) forging linear vitality, and Painting (画) nurturing kinship with nature.",
      evolutionEn: "Codified as scholar refinement norms from the Six Dynasties–Tang (recorded in *Fashu Yaolu* and Qing aesthete Li Yu's *Casual Expressions of Idle Feeling*), spreading widely across Vietnamese, Korean, and Japanese literati.",
      mastersEn: "Ji Kang, Wang Xizhi, Su Shi, Huang Tingjian, Zhao Mengfu, Li Yu."
    }
  };

  const CONTEMPORARY_EN = {
    "youth-culture": { summaryEn: "Post-1995/2000 Gen Z came of age during rapid digitization and economic rise, blending global tech fluency with confident native cultural pride ('Guochao' 国潮), while reacting to fierce academic/career competition ('Neijuan' involution) through 'lying flat' (Tangping) and 'Buddhist-style detachment' (Foxi)." },
    "urban-lifestyles": { summaryEn: "Daily life in Tier-1 megacities (Beijing, Shanghai, Shenzhen) and New Tier-1 hubs (Chengdu, Hangzhou) orbits around cashless Alipay/WeChat ecosystems, 30-minute instant delivery (Meituan/Ele.me), smart EVs, urban 'City Walk' routes, and weekend glamping." },
    "social-media": { summaryEn: "An autonomous domestic platform sphere engaging hundreds of millions daily: WeChat (all-in-one messaging–payments–work), Douyin (short video & livestream retail), Xiaohongshu (lifestyle discovery), Bilibili (youth & knowledge ACG), Zhihu (long-form Q&A), and Weibo (public trending feeds)." },
    "digital-entertainment": { summaryEn: "Spans interactive livestreams, knowledge podcasts, explosive vertical 1–2 minute micro-dramas ('Weiduanju' 微短剧), and interactive digital museums — with Chinese formats actively exporting across Southeast Asia and North America." },
    "cinema-tv": { summaryEn: "Bridges Fifth-Generation epics (Zhang Yimou, Chen Kaige) and Sixth-Generation urban realism (Jia Zhangke) to modern sci-fi blockbusters (*Wandering Earth*), mythological animation (*Ne Zha*, *Chang'an*), and historical/modern dramas wildly popular in Vietnam." },
    "online-literature": { summaryEn: "One of the world's largest participatory pop-literary ecosystems (China Literature / Qidian, Jinjiang), pioneering Xianxia, Xuanhuan, romance, historical time-travel, and urban realism — feeding film, donghua, and gaming IP widely read across Vietnam." },
    "gaming-culture": { summaryEn: "Home to the world's largest gaming and Esports audience (LPL League of Legends, Honor of Kings), pivoting recently from mobile monetization toward culturally rooted AAA titles such as *Genshin Impact* and *Black Myth: Wukong* showcasing Shanxi timber heritage." },
    "university-life": { summaryEn: "Most undergraduates reside on self-contained campuses ('University Towns') featuring 4–6-bed dorms, subsidized canteens, late-night libraries, and vibrant clubs — facing three defining senior paths: grad school exams (Kaoyan), civil service exams (Kaogong), or autumn corporate recruiting (Qiuzhao)." },
    "modern-education": { summaryEn: "The National College Entrance Examination (Gaokao) remains the pivotal academic watershed; recent 'Double Reduction' reforms curbed off-campus cramming while concentrating investment into 'Double First-Class' universities for AI, semiconductors, e-commerce, and area studies." },
    "cultural-transformations": { summaryEn: "Rapid urbanization and individualization are reshaping family structure: rising women's representation in higher education and leadership, delayed marriage, declining fertility, and generational tension between urban consumerism and traditional thrift." },
    "tradition-in-modern": { summaryEn: "Tradition has been creatively re-engineered rather than erased: intangible-heritage tourism, Hanfu shoots at historic monuments, Palace Museum cultural merchandise, and urban office-worker demand for Guoxue classics, calligraphy, and tea workshops." },
    "high-speed-rail-mobility": { summaryEn: "Over 45,000 km of high-speed Fuxing G-trains have redrawn time and distance: 25–30 minute daily commutes between Suzhou–Shanghai or Guangzhou–Shenzhen nurture megaregion 'same-city living', weekend leisure, and integrated Yangtze/GBA supply chains." },
    "green-ev-transition": { summaryEn: "New Energy Vehicles (green-plated BYD, Xiaomi, NIO, Li Auto, Huawei AITO) exceed 50% of monthly passenger car sales, transforming automobiles from mechanical transport into voice-AI smart living rooms seamlessly linked to home ecosystems." },
    "silver-pet-economy": { summaryEn: "Demographic shifts drive twin consumer engines: over 300 million citizens aged 60+ fueling the 'Silver Economy' (wellness travel, senior universities, smart eldercare), alongside 200M+ solo adults driving self-indulgent 'Yueji' blind-box art toys and premium pet care." },
    "new-tea-coffee-wave": { summaryEn: "Next-generation beverage chains (Chagee 霸王茶姬, Heytea, Mixue, Luckin Coffee) pair traditional whole-leaf teas (Tieguanyin Oolong, Pu'er, Jasmine Green) with sleek neo-Chinese packaging, Mini-Program ordering, and cold-chain scale — expanding rapidly into Vietnam." },
    "intangible-heritage-tourism": { summaryEn: "Young Chinese travelers increasingly favor immersive cultural travel ('Museum Fever' Wenbore) over rushed sightseeing: queuing for Palace Museum / Sanxingdui tickets, wearing local ethnic dress, stamping travel passbooks, and learning lacquer fan-making or woodblock printing." }
  };

  const BIZ_THEMES_EN = {
    "confucian-management": {
      titleEn: "Confucianism & Corporate Governance Philosophy",
      traditionalConceptEn: "Honors the 'Confucian Merchant' (儒商 — learned, ethical entrepreneur), harmonizing Righteousness and Profit ('Generating gain through right conduct'), trustworthiness (Xin), and benevolent authority combining grace with discipline.",
      empiricalPracticeEn: "Many private Chinese conglomerates blend Western KPI accountability with familial loyalty rhythms — exemplified by Huawei's 'customer-centric, striver-oriented' ethos or Alibaba's early martial-arts-inspired mentorship culture."
    },
    "guanxi": {
      titleEn: "Guanxi (Relational Trust Networks)",
      traditionalConceptEn: "Dyadic interpersonal trust built patiently over years via shared native-place origins, alumni bonds, kinship, and mutual reciprocity.",
      empiricalPracticeEn: "Institutional research (Xin & Pearce; Peng & Luo) shows Guanxi recedes in standardized legal-contract transactions in Tier-1 cities, yet remains vital for lowering search friction, initiating credible introductions, and resolving unforeseen supply-chain bottlenecks."
    },
    "mianzi": {
      titleEn: "Mianzi (Social Face & Dignity)",
      traditionalConceptEn: "Distinguishes inner moral character ('Lian' 脸) from outward social prestige ('Mianzi' 面子). Public loss of face ('Diu mianzi') shuts down constructive dialogue.",
      empiricalPracticeEn: "In B2B negotiation, never criticize counterparts or senior executives publicly in group meetings; always preserve an honorable exit ramp ('Liu yudi') when declining pricing terms or switching suppliers."
    },
    "renqing": {
      titleEn: "Renqing (Reciprocal Moral Debt & Favor)",
      traditionalConceptEn: "Affective ethical obligation to remember received favors and repay thoughtfully at an opportune moment ('Renqing zhai' — moral debts rarely settled instantly in cash).",
      empiricalPracticeEn: "Firms must draw a bright compliance boundary between legitimate Renqing (sharing market insight, flexible scheduling during disruptions) and unlawful bribery, especially given strict Chinese anti-corruption law and multinational compliance audits."
    },
    "business-etiquette": {
      titleEn: "Corporate Protocol & Banquet Etiquette",
      traditionalConceptEn: "Prioritizes seniority greeting order, two-handed business-card exchange (studying it respectfully before pocketing), banquet seating protocol (host facing door, guest of honor to host's right), and toasting with rim held lower than seniors.",
      empiricalPracticeEn: "Workflows have pivoted rapidly to mobile tools: scanning WeChat QR codes directly at the conference table rather than relying solely on paper cards; crisp written replies and structured voice notes signal professional rigor."
    },
    "negotiation-culture": {
      titleEn: "Commercial Negotiation Culture",
      traditionalConceptEn: "Holistic 'principles first, details second' framing, patient endurance testing counterparty resolve, trusted intermediaries, and indirect phrasing sparing blatant 'No'.",
      empiricalPracticeEn: "Export and sourcing teams in Yiwu, Shenzhen, and Guangzhou possess razor-sharp fluency in BOM cost structures, MOQs, Incoterms (FOB/CIF/EXW), and rapid order execution — where signing a contract often marks the start of ongoing operational renegotiation."
    },
    "business-communication": {
      titleEn: "High-Context & High-Velocity Digital Communication",
      traditionalConceptEn: "High-context signaling: cues like 'Let us study this further' (我们再研究一下) frequently communicate polite refusal or unresolved commercial sticking points.",
      empiricalPracticeEn: "Operational coordination moves at extraordinary speed on WeChat, DingTalk, and Feishu (Lark): replies within minutes, resolving production schedules live via shared spreadsheets and factory-floor photos."
    },
    "consumer-behavior": {
      titleEn: "Chinese Consumer Behavior Dynamics",
      traditionalConceptEn: "Centers on family solidarity, filial gifting during seasonal festivals, prestige signaling, and trusted word-of-mouth within peer circles ('Koubei').",
      empiricalPracticeEn: "Today's digitally fluent consumers cross-check peer reviews on Xiaohongshu ('Zhongcao'), convert via Douyin livestreams, concentrate purchases around Double 11 (11/11) and 618 shopping festivals, and increasingly favor confident Guochao domestic brands."
    },
    "family-businesses": {
      titleEn: "Family Enterprises & Generational Succession",
      traditionalConceptEn: "Anchored in kinship trust across treasury and core management ('Family-as-Enterprise'), enabling rapid top-down founder decisions.",
      empiricalPracticeEn: "Many coastal family firms in Wenzhou, Fujian, and Guangdong confront 'second-generation succession' (Erdai jieban) by globally MBA-trained heirs, gradually shifting toward professional CEOs and public governance (as exemplified by Midea)."
    },
    "soe-vs-private": {
      titleEn: "State-Owned (SOE) vs. Private Enterprises",
      traditionalConceptEn: "Pairs state-stewarded strategic stability and social responsibility (SOEs) with grassroots mercantile agility rooted in Ming–Qing merchant guilds.",
      empiricalPracticeEn: "SOEs (State Grid, COSCO, Sinopec) follow layered multi-signoff governance with high legal certainty across energy and ports, whereas private enterprises (contributing >50% of tax revenue, >60% of GDP, and >80% of urban jobs) drive agile innovation amid intense rivalry."
    },
    "ecommerce-ecosystems": {
      titleEn: "E-Commerce & Cross-Border Trade Ecosystems",
      traditionalConceptEn: "Digitized historic guild fairs and specialized trade streets into friction-free platforms linking factory workshops straight to global buyers.",
      empiricalPracticeEn: "Spans four engines: (1) Search-led marketplaces (Taobao, Tmall, JD), (2) Social/content commerce (Pinduoduo, Douyin, Kuaishou), (3) B2B wholesale (1688, Alibaba.com), and (4) Cross-border DTC (Temu, SHEIN, TikTok Shop, AliExpress) clearing Chinese customs codes 9610/9710/9810/1210."
    },
    "supply-chains-logistics": {
      titleEn: "Integrated Supply Chains & Smart Logistics",
      traditionalConceptEn: "Extends historical Grand Canal and imperial relay networks into vertically integrated logistics eliminating middleman friction.",
      empiricalPracticeEn: "Global pace-setter combining automated deep-water ports (Shanghai Yangshan, Ningbo-Zhoushan), nationwide express couriers (SF Express & Tongda networks), smart bonded warehouses (Cainiao), and 24–48-hour domestic fulfillment."
    },
    "industrial-clusters": {
      titleEn: "Specialized Regional Industrial Clusters",
      traditionalConceptEn: "Heir to the Ming–Qing artisan geography of 'One Town, One Signature Craft' (Jingdezhen ceramics, Hangzhou silk).",
      empiricalPracticeEn: "Hyper-dense specialized industry belts drive transaction costs near zero: Shenzhen Huaqiangbei (electronics/hardware), Dongguan (precision tooling), Yiwu (small commodities), Foshan Shunde (furniture & building ceramics), Jinjiang (footwear), and Danyang (eyewear)."
    },
    "china-vietnam-trade": {
      titleEn: "Sino–Vietnamese Trade & Complementarity",
      traditionalConceptEn: "Extends a millennium of maritime junk and overland border commerce into modern comprehensive strategic economic partnership.",
      empiricalPracticeEn: "China is Vietnam's largest trading partner (bilateral turnover exceeding $170–200B+ annually per customs records, targeting $260–268B over 2026–2030, accounting for FOB/CIF and Hong Kong re-export statistical nuances): complementary flows exchange Chinese machinery/components for Vietnamese durian, dragon fruit, rice, and rubber via ACFTA 3.0 / RCEP origin rules, cross-border rail, and smart border gates."
    },
    "customs-co-forme": {
      titleEn: "HS Codes, Customs Valuation & C/O Form E / RCEP",
      traditionalConceptEn: "Goods classification under the six WCO Harmonized System General Rules (GRI) paired with origin criteria WO, CTH, or RVC 40% under ACFTA and RCEP.",
      empiricalPracticeEn: "Reconcile Sales Contract, Commercial Invoice, Packing List, Bill of Lading, and C/O Form E (Box 8 origin criterion, Box 9 FOB value) prior to VNACCS submission to prevent post-clearance origin rejection, alongside mandatory GACC phytosanitary protocols for agricultural exports."
    },
    "csc-academic-pathway": {
      titleEn: "Graduate Research & CSC / CIS Scholarship Pathways",
      traditionalConceptEn: "Inherits centuries of East Asian scholarly mobility ('Qiuxue' — seeking learning across centers of excellence), uniting business economics, logistics, and Sinology at flagship universities such as Tsinghua, Peking, Fudan, and UIBE.",
      empiricalPracticeEn: "Prepare HSK 5–6 (or IELTS 6.5+ for English-taught tracks), draft focused proposals on East Asian supply chains or RCEP trade, and carefully verify full vs. partial funding terms through the China Scholarship Council (CSC) portal."
    },
    "payment-lc-tt-rmb": {
      titleEn: "International Settlement (L/C, T/T, D/P) & Cross-Border CNY",
      traditionalConceptEn: "Descends from Ming–Qing Shanxi draft banks ('Piaohao' 票号) that anchored long-distance silver liquidity on mutual credibility.",
      empiricalPracticeEn: "In formal Sino–Vietnamese commerce, calibrate T/T (30% deposit / 70% against B/L copy), irrevocable UCP 600 Letters of Credit, and licensed border-bank RMB (CNY–VND) settlement channels to mitigate FX volatility and compliance account freezes."
    },
    "oem-odm-qc-inspection": {
      titleEn: "OEM/ODM Manufacturing, Factory Audits & AQL Inspection",
      traditionalConceptEn: "Echoes Qin–Han 'Inscribing the Artisan's Name' (物勒工名 — engraving maker marks on tools and bronzes for strict quality traceability).",
      empiricalPracticeEn: "When sourcing from Guangdong, Zhejiang, or Fujian, international buyers never rely solely on a 'Golden Sample' or verbal assurances: execute enforceable NNN (Non-Disclosure, Non-Use, Non-Circumvention) agreements, verify GSXT registration, and commission third-party pre-shipment inspections (AQL 2.5/4.0)."
    },
    "ip-trademark-guochao": {
      titleEn: "IP Protection (CNIPA), GACC Registration & Guochao",
      traditionalConceptEn: "Reflects modern youth consumers pivoting from foreign-brand prestige toward confident pride in domestic cultural aesthetics ('Guochao' — National Trend).",
      empiricalPracticeEn: "China enforces strict First-to-File trademark registration at CNIPA; Vietnamese agro-food exporters (coffee, durian, edible bird's nest) must proactively secure Chinese trademarks and mandatory CIFER facility registration with China's General Administration of Customs (GACC)."
    },
    "smart-border-rail-sea": {
      titleEn: "Multimodal Logistics: Smart Gates, Cross-Border Rail & ILSTC",
      traditionalConceptEn: "Digitizes ancient Lingnan–Jiaozhi post-road and courier stations into data-driven multimodal trade corridors.",
      empiricalPracticeEn: "Optimize modal mixes: reefer trucks across the Friendship Pass–Pingxiang smart gate (fresh fruit & JIT electronics), international Dong Dang–Pingxiang intermodal rail linking to Chongqing/Zhengzhou, and ocean feeder lines from Haiphong/Cai Mep to Shenzhen and Shanghai."
    }
  };

  const BIZ_CASES_EN = {
    "alibaba": {
      companyEn: "Alibaba Group",
      hqEn: "Hangzhou (Zhejiang)",
      sectorEn: "B2B/B2C E-Commerce, Cloud Computing & Cainiao Logistics",
      culturalIntegrationEn: "Early culture drew from Jin Yong wuxia chivalry (employee nicknames, naming offices 'Bright Summit') paired with six core values led by 'Customers first, employees second, shareholders third'.",
      empiricalPracticeEn: "Solved trust deficits at institutional scale through Alipay escrow (releasing seller funds only after buyer confirmation), 1688 linking Zhejiang–Guangdong factory clusters directly, and Cainiao data-driven fulfillment."
    },
    "jd": {
      companyEn: "JD.com (Jingdong)",
      hqEn: "Beijing",
      sectorEn: "First-Party E-Retail & Owned Cold-Chain / Warehousing Logistics",
      culturalIntegrationEn: "Built around strict 'Xin' trustworthiness (100% authentic goods guarantee during early-2000s counterfeit proliferation) and direct welfare commitment to delivery staff ('Brothers' enrolled in full social insurance).",
      empiricalPracticeEn: "In contrast to Taobao's asset-light marketplace model, JD invested heavily in self-owned fulfillment centers and internal fleets ('211 same-day/next-day delivery'), turning physical supply-chain control into a durable moat."
    },
    "tencent": {
      companyEn: "Tencent",
      hqEn: "Shenzhen (Guangdong)",
      sectorEn: "Social Platforms (WeChat/QQ), Digital Payments, Gaming & Cloud",
      culturalIntegrationEn: "Reflects Lingnan–Shenzhen pragmatism, low-key focus, and relationship connection ('Product is King'); the 2014 WeChat Red Packet transformed New Year gifting customs into ubiquitous mobile payment adoption.",
      empiricalPracticeEn: "Institutionalized internal 'Horse-Racing' competition (multiple independent teams building parallel prototypes — notably Allen Zhang's Guangzhou team birthing WeChat) alongside broad ecosystem investments (JD, Meituan, Pinduoduo)."
    },
    "huawei": {
      companyEn: "Huawei Technologies",
      hqEn: "Shenzhen / Dongguan (Guangdong)",
      sectorEn: "Telecom Infrastructure, Cloud, Smart Devices & Intelligent Automotive Tech",
      culturalIntegrationEn: "Combines tenacious 'Wolf Spirit' (sharp opportunity sensing, relentless teamwork, endurance) with virtual employee shareholding guided by 'Distributing wealth gathers talent' (Cai san ren ju).",
      empiricalPracticeEn: "Reinvests >15–20% of annual revenue into R&D (hundreds of billions RMB yearly), adopted IBM's Integrated Product Development (IPD) rigor, and built resilient semiconductor and HarmonyOS ecosystems."
    },
    "byd": {
      companyEn: "BYD Company",
      hqEn: "Shenzhen (Guangdong)",
      sectorEn: "New Energy Vehicles (NEV), Blade LFP Batteries & Power Semiconductors",
      culturalIntegrationEn: "Named after 'Build Your Dreams', steeped in founder Wang Chuanfu's empirical engineer ethos ('Technology is king, innovation is foundational').",
      empiricalPracticeEn: "Replaced fragmented outsourcing with extreme vertical integration — designing and producing LFP Blade batteries, traction motors, IGBT chips, and dedicated Ro-Ro car carriers in-house to dominate global NEV cost and scale."
    },
    "haier": {
      companyEn: "Haier Group",
      hqEn: "Qingdao (Shandong)",
      sectorEn: "Smart Home Appliances & Industrial Internet (COSMOPlat)",
      culturalIntegrationEn: "From symbolically smashing 76 defective refrigerators in 1985 to forge zero-defect quality culture, to its 'RenDanHeYi' model fusing empowerment with Daoist responsiveness to user demand.",
      empiricalPracticeEn: "Dismantled rigid middle management into thousands of autonomous micro-enterprises ('Xiaowei'), tying engineer compensation directly to real-world user market value."
    },
    "pinduoduo-temu": {
      companyEn: "PDD Holdings (Pinduoduo & Temu)",
      hqEn: "Shanghai / Dublin",
      sectorEn: "C2M Social & Cross-Border E-Commerce",
      culturalIntegrationEn: "Tapped value-seeking group-buying psychology ('Pintuan' social team deals) and connected rural agricultural cooperatives directly with demand.",
      empiricalPracticeEn: "Operates full-managed C2M consignment cutting out multi-tier wholesalers from Yiwu and Guangdong to global doorsteps — driving intense cost compression that challenges Vietnamese partners to build differentiated branding."
    },
    "cosco-shipping": {
      companyEn: "COSCO Shipping Corporation",
      hqEn: "Shanghai",
      sectorEn: "Global Container Shipping & International Port Terminals",
      culturalIntegrationEn: "Pairs central state-enterprise discipline ('Yangqi') with international maritime 'harmonious symbiosis' partnerships.",
      empiricalPracticeEn: "Executes strict international shipping law (Bills of Lading, Hague–Visby Rules, Incoterms 2020) across direct trunk and feeder corridors connecting Ningbo and Shenzhen to Haiphong and Cai Mep–Thi Vai."
    },
    "xiaomi": {
      companyEn: "Xiaomi Corporation",
      hqEn: "Beijing",
      sectorEn: "Human × Car × Home Smart Ecosystem (Smartphones, AIoT, SU7 EVs)",
      culturalIntegrationEn: "Lei Jun's motto 'Making friends with users' and 'Moving products at honest prices', engaging devoted 'Mi Fans' directly in MIUI/HyperOS co-iteration.",
      empiricalPracticeEn: "Built an Ecological Chain spanning 300+ smart-hardware ventures while capping net hardware margin at <=5% to scale platform users rapidly into highly automated smart EV manufacturing."
    },
    "shein": {
      companyEn: "SHEIN",
      hqEn: "Founded Nanjing / Panyu Guangzhou Supply Base / Singapore Global HQ",
      sectorEn: "Ultra-Fast Cross-Border Fashion (Data-Driven DTC)",
      culturalIntegrationEn: "Low-profile pragmatism leveraging thousands of nimble family garment workshops across Guangzhou's Panyu district with punctual cash-flow settlement.",
      empiricalPracticeEn: "Couples real-time trend forecasting with 'Small-Batch Quick-Response' (100–200 piece test runs via workshop-linked ERP, automatically scaling winners within days)."
    },
    "catl": {
      companyEn: "CATL (Contemporary Amperex Technology)",
      hqEn: "Ningde (Fujian)",
      sectorEn: "World's Largest EV & Energy-Storage Battery Manufacturer",
      culturalIntegrationEn: "Channels Fujianese Min-merchant daring ('Strive hard to prevail') alongside founder Zeng Yuqun's rigorous electrochemistry engineering discipline.",
      empiricalPracticeEn: "Holds over 35% of global EV battery share supplying Tesla, BMW, VW, VinFast, and Xiaomi — pioneering fast-charge Shenxing LFP cells, Qilin packs, and closed-loop Brunp battery recycling."
    },
    "popmart-mixue": {
      companyEn: "Pop Mart & Mixue Bingcheng",
      hqEn: "Beijing (Pop Mart) / Zhengzhou, Henan (Mixue)",
      sectorEn: "Designer Art-Toy IP & Mass-Market Tea/Ice-Cream Franchising",
      culturalIntegrationEn: "Embodies dual consumer exports across Southeast Asia and Vietnam: Pop Mart monetizes urban youth emotional 'blind-box' collecting (Molly, Labubu), while Mixue exemplifies Central-Plains value populism.",
      empiricalPracticeEn: "Mixue earns primarily from owning integrated farm sourcing, automated ingredient plants, and cold-chain logistics across 40,000+ global stores (1,300+ in Vietnam), while Pop Mart vertically incubates designer IPs from studio sketch to flagship experiential retail."
    }
  };

  const SV_THEMES_EN = {
    "historical-exchange": {
      transmissionEn: "From Qin–Han to Tang (111 BCE – 938 CE), prefecture-county governance, iron-plow agriculture, Classical Chinese script, and Confucian–Buddhist–Daoist canons entered Jiaozhou / Annam. After 938, independent Vietnamese dynasties (Ly, Tran, Le, Nguyen) selectively adopted East Asian statecraft and scholarship via envoys and commerce.",
      adaptationEn: "Vietnam mastered centralized administrative statecraft while fiercely safeguarding its Austroasiatic spoken language, autonomous village commune customs, and equal sovereign consciousness ('Nam Quoc Son Ha').",
      indigenousEn: "Bronze-Age Dong Son civilization (bronze drums, wet-rice irrigation, ancestor and agrarian-goddess veneration) predated northern rule by a millennium and acted throughout history as an active cultural filter ('the Vietnamese core')."
    },
    "han-and-nom": {
      transmissionEn: "Literary Chinese (Classical Hanwen) served as Vietnam's official administrative, diplomatic, and scholarly script until the early 20th century, contributing 60–70% of modern Vietnamese abstract academic and political vocabulary.",
      adaptationEn: "Vietnamese scholars pronounced Chinese graphs using an intact Sino-Vietnamese phonological system crystallized from Middle Chinese (Tang–Song rime dictionaries 《Qieyun》 601 and 《Guangyun》 1008), preserving final stops (-p, -t, -c) and nasals (-m, -n, -ng) lost in modern Mandarin.",
      indigenousEn: "From the 10th–13th centuries through Tran, Ho, Le, and Nguyen peaks, Vietnamese literati applied Six-Script principles (phonetic loan & phono-semantic compounding) to invent Chữ Nôm (喃字) for vernacular Vietnamese literature (Nguyen Trai, Nguyen Du)."
    },
    "three-religions": {
      transmissionEn: "Buddhism reached ancient Giao Chi along twin routes: directly by sea from India (Luy Lau hub, 2nd c. CE) and overland Chan/Zen lineages from China (Vinitaruci, Vo Ngon Thong, Thao Duong). Confucianism gained imperial institutionalization under the 1070 Temple of Literature and peaked under Early Le.",
      adaptationEn: "Vietnam's 'Three Teachings Share One Root' fostered gentle syncretism: Buddhism merged with Four-Dharmas rain deities, while Vietnamese Confucianism softened abstruse metaphysics to prioritize loyal national defense.",
      indigenousEn: "King Tran Nhan Tong's 13th-century Truc Lam Yen Tu Zen forged a uniquely engaged royal-civic spirituality, while Four-Palaces Mother Goddess devotion (Dao Mau) remains distinctly indigenous Vietnamese folk religion."
    },
    "education-exams": {
      transmissionEn: "In 1075 the Ly court opened Vietnam's first imperial civil exam inspired by Tang–Song recruitment; later Le–Nguyen examinees studied the Four Books, Five Classics, *Shiji*, and Eight-Legged Essays alongside Ming–Qing peers.",
      adaptationEn: "Village-level tutoring by local confucian teachers made literacy surprisingly broad across rural communes; examination laurels bound scholars not only to the capital court but also to village prestige. Nguyen emperors further modified essays to test national history and practical policy.",
      indigenousEn: "Honoring Doctors of Letters on stone steles mounted upon stone tortoises inside Hanoi's Temple of Literature created a venerated tradition of rural clan solidarity around scholarly achievement."
    },
    "literature-poetry": {
      transmissionEn: "Vietnamese monks and literati composed accomplished Tang-style Hanzi regulated verse (Ly Thuong Kiet, Tran Quang Khai, Nguyen Trai, Nguyen Du), engaged in brush-talk dialogues with Chinese and Korean scholars on diplomatic missions, and adapted Ming–Qing prose plots (Nguyen Du drawing plot structure from Qingxin Cairen's *Jin Yunqiao Zhuan*).",
      adaptationEn: "In transforming that prose tale into *The Tale of Kieu*, Nguyen Du completely re-engineered psychological interiority, Buddhist–Confucian moral karma, and elevated national poetic language.",
      indigenousEn: "Purely Vietnamese tonal meters such as Six-Eight (*Luc bat*) and Double-Seven Six-Eight (*Song that luc bat*) emerged directly from Vietnamese tonal music with no structural parallel in Chinese prosody."
    },
    "traditional-architecture": {
      transmissionEn: "Vietnamese palaces and pagodas share timber load-bearing frames, curved eaves, geomantic North–South planning, and Four Sacred Beasts motifs (Dragon–Qilin–Tortoise–Phoenix) across the East Asian architectural sphere.",
      adaptationEn: "Vietnamese builders engineered deliberately for humid monsoon tropics: steeper rain-shedding roof pitches, replacing enclosed northern Beijing courtyard walls with open verandas welcoming south breezes, and rot-resistant ironwood (*go lim*) columns.",
      indigenousEn: "The soaring communal village hall (*Dinh lang*) — elevated on moisture-proof piles with sweeping eaves and exuberant folk woodcarving — alongside Hue's Nha Ruong courtyard homes integrating Champa–Southeast Asian aesthetics stands completely distinct."
    },
    "religious-customs": {
      transmissionEn: "Both nations celebrate lunisolar calendar milestones — Lunar New Year, Qingming, Double Fifth (5/5), Mid-Seventh (7/15), Mid-Autumn (8/15) — alongside Kitchen God, Wealth God, and Twelve Zodiac lore.",
      adaptationEn: "Shared dates carry strikingly different local meanings: China's 5/5 commemorates Qu Yuan with reed-leaf dumplings and dragon boats, whereas Vietnam's Doan Ngo marks 'Pest-Clearing Day' with fermented sweet rice (*com ruou nep*) and summer fruit; Mid-Autumn became Vietnam's vibrant Children's Lantern Festival.",
      indigenousEn: "Indigenous Hung King ancestor veneration, Village Tutelary Deities (*Thanh hoang*), and the Four Immortals (Tan Vien, Giong, Chu Dong Tu, Lieu Hanh) remain uniquely Vietnamese — while Vietnam's Zodiac replaces China's Rabbit with the Cat (Mao) and Ox with Water Buffalo (Suu)."
    },
    "maritime-trade": {
      transmissionEn: "From Han Hepu–Jiaozhi and Tang Annam–Guangzhou to Le–Nguyen ports (Van Don, Pho Hien, Hoi An, Saigon–Cholon), Fujian, Guangdong, and Chaozhou junks traded silk, porcelain, copper cash, and medicinal herbs across the Eastern Sea.",
      adaptationEn: "Southern Nguyen Lords authorized self-governing 'Minh Huong' merchant quarters (notably 17th–18th century Hoi An), where Fujian, Chaozhou, and Cantonese congregation halls traded seamlessly alongside Japanese and European vessels.",
      indigenousEn: "Dai Viet nurtured high-value indigenous exports — 15th-century Chu Dau blue-and-white ceramics shipped to Southeast Asia, Japan, and Istanbul's Topkapi Palace alongside eaglewood, cinnamon, and raw silk — regulated autonomously through Van Don port."
    },
    "borderland-exchange": {
      transmissionEn: "Across more than 1,400 km linking Yunnan–Guangxi with seven northern Vietnamese highland provinces, Tai–Zhuang, Hmong–Miao, Yao/Dao, Hani, and Yi/Lo Lo communities have sustained centuries of market fairs and cross-border kinship.",
      adaptationEn: "Guangxi's Zhuang and Cao Bang–Lang Son's Tay–Nung share Kra-Dai linguistic roots and antiphonal folk singing (*Hat Then / Hat Luon*) alongside localized Nom-Tay vernacular scripts.",
      indigenousEn: "Modern borderlands pioneer cross-border smart gate zones (Huu Nghi–Pingxiang, Mong Cai–Dongxing, Lao Cai–Hekou) and shared transboundary geopark tourism at Ban Gioc–Detian Falls."
    },
    "customs-comparison": {
      transmissionEn: "Both societies prize filial devotion, close-knit family bonds, shared chopstick dining, preservation of social face (Mianzi / The dien), and auspicious New Year taboos.",
      adaptationEn: "Subtle conversational differences stand out: Vietnamese employs an intricate kinship-based pronoun web (*em/anh/chi/co/chu/bac*) calibrating age and closeness dynamically, whereas modern Chinese relies mainly on *ni/nin* plus surname-title; Vietnamese cuisine prizes light fish-sauce/herb freshness over Chinese wok oils and dried spices.",
      indigenousEn: "Vietnamese social conduct carries deep flexibility rooted in rural village communal solidarity; recognizing both shared Sinosphere roots and subtle divergences prevents false-equivalence pitfalls in bilateral business."
    },
    "envoy-literature": {
      transmissionEn: "Dai Viet envoys (Mac Dinh Chi, Phung Khac Khoan, Le Quy Don, Nguyen Du) matched Chinese, Korean, and Ryukyuan literati effortlessly in Classical Chinese poetry and historical allusion along the Beijing mission road.",
      adaptationEn: "Produced the distinctive *Bac Hanh* diplomatic canon — upholding sovereign intellectual equality ('Two-Country Top Laureate') while candidly surveying Ming–Qing society, agronomy, and commerce for domestic reform.",
      indigenousEn: "Nguyen Du's humanitarian social realism across 《Bac Hanh Tap Luc》 reveals fiercely independent Vietnamese moral judgment gazing directly at late-imperial northern realities."
    },
    "traditional-medicine-exchange": {
      transmissionEn: "Classical Yin–Yang, Five-Phase, and meridian frameworks alongside Northern materia medica from 《Huangdi Neijing》, 《Treatise on Cold Damage》, and 《Compendium of Materia Medica》 passed deeply into Dai Viet medical guilds.",
      adaptationEn: "Zen physician Tue Tinh proclaimed 'Southern herbs heal Southern constitutions'; 18th-century master Hai Thuong Lan Ong compiled the 28-volume 《Hai Thuong Y Tong Tam Linh》 calibrating formulas specifically for tropical monsoon humidity.",
      indigenousEn: "Cultivated a remarkably accessible, affordable pharmacopoeia of native Vietnamese medicinal herbs serving rural villages autonomously for centuries."
    },
    "legal-codes-comparison": {
      transmissionEn: "Ly (*Hinh Thu*), Tran, Le (*Quoc Trieu Hinh Luat*), and Nguyen (*Hoang Viet Luat Le*) statutory codes adopted structural legislative grammar from the 《Tang Code》 and 《Great Ming Code》 (Five Punishments, Ten Abominations, Eight Deliberations).",
      adaptationEn: "Emperor Le Thanh Tong's 15th-century 《Quoc Trieu Hinh Luat》 (Hong Duc Code) added nearly 400 original statutes tailoring East Asian legal mechanics directly to Dai Viet village and household norms.",
      indigenousEn: "Safeguarded daughters' equal inheritance of patrimonial land, recognized marital joint vs. separate property regimes, and protected communal village farmers — progressive milestones distinguishing traditional Vietnamese jurisprudence."
    },
    "ceramics-craft-dialogue": {
      transmissionEn: "High-temperature dragon/chamber kilns, celadon glazing, white porcelain, and cobalt underglaze blue-and-white brushwork circulated continuously between South China/Jingdezhen and the Red River Delta.",
      adaptationEn: "During Ming maritime bans (15th c.), Chu Dau (Hai Duong) and Bat Trang kilns stepped into global maritime demand across Southeast Asia, Japan ('Kochi ware'), and the Middle East (Bui-clan inscribed 1450 blue-and-white vase preserved in Topkapi).",
      indigenousEn: "Vietnamese brushwork evokes pastoral Red River Delta warmth — playful waterbirds, lotus petals, scrolling chrysanthemums, buffalo boys — alongside unmistakable crackled (*men ran*) ivory glazes."
    },
    "music-theater-instruments": {
      transmissionEn: "Eight-Timbre court orchestration, stylized northern opera (Yuan Zaju, Peking/Cantonese opera), and string/wind prototypes (Pipa/Ty ba, Erhu/Nhi, Guzheng/Dan tranh) crossed continuously.",
      adaptationEn: "Vietnam transformed stylized opera conventions into heroic-tragic *Tuong* (Hat Boi) and reshaped court ceremonial pentatonics into Hue's UNESCO-listed *Nha nhac*.",
      indigenousEn: "Forged wholly indigenous musical treasures including the single-string overtone *Dan Bau* (monochord), lithophone *Dan Da*, bamboo *Dan T'rung*, Northern rural *Cheo*, and Southern *Don Ca Tai Tu / Cai Luong*."
    },
    "culinary-tea-adaptation": {
      transmissionEn: "Tea craftsmanship, soy fermentation (tofu, soy paste), wheat/rice noodle extrusion, and Cantonese–Chaozhou dim sum artistry entered Vietnamese port towns via overseas merchant quarters.",
      adaptationEn: "Inside Saigon–Cholon, Hoi An, Haiphong, and Hanoi, Chinese techniques naturalized deeply into *Hu Tieu My Tho*, wonton noodle soup, *Cao Lau*, *Banh Bao*, and dumplings balanced by light aromatic broths and crisp tropical herbs.",
      indigenousEn: "Vietnamese tea evolved two original poles: West Lake Hundred-Petal Lotus-scented green tea for connoisseurs alongside lively sidewalk iced tea and century-old wild Shan Tuyet trees high in the misty Northwest mountains."
    }
  };

  const SV_ROWS_EN = [
    { aspectEn: "12 Zodiac Animals", chinaEn: "Rat, Ox/Cow, Tiger, Rabbit (兔), Dragon...", vietnamEn: "Rat, Water Buffalo, Tiger, Cat (Mão), Dragon..." },
    { aspectEn: "Double Fifth (5th Day, 5th Lunar Month)", chinaEn: "Honoring Qu Yuan, eating bamboo-wrapped Zongzi, dragon-boat racing.", vietnamEn: "Doan Ngo 'Pest-Clearing Day', fermented sticky rice, ash-lye cakes, summer fruit." },
    { aspectEn: "Mid-Autumn (15th Day, 8th Lunar Month)", chinaEn: "Lineage family reunion, moon appreciation, exchanging ornate mooncakes.", vietnamEn: "Centered joyfully as Children's Festival (star lanterns, lion dances, moon-feast)." },
    { aspectEn: "Core Kitchen Condiments", chinaEn: "Light/dark soy sauce, aged black vinegar, Shaoxing rice wine, Sichuan peppercorn, five-spice.", vietnamEn: "Fermented fish sauce (nuoc mam), shrimp paste, abundant fresh herbs, lime, chili, lemongrass." },
    { aspectEn: "Traditional Vernacular Architecture", chinaEn: "Enclosed brick courtyard houses (Siheyuan) retaining winter warmth against northern winds.", vietnamEn: "Open timber-framed bays with broad shaded eaves welcoming southern tropical breezes." },
    { aspectEn: "Language & Script", chinaEn: "Sino-Tibetan language family (monosyllabic, tonal), written in Simplified/Traditional Hanzi.", vietnamEn: "Austroasiatic language family (deep Sino–Tai contact), written in Latinized Quoc Ngu." },
    { aspectEn: "Maritime Trade & Ports", chinaEn: "Maritime Trade Superintendencies (Guangzhou, Quanzhou) exporting Jingdezhen porcelain, tea, silk; modern RCEP supply chains.", vietnamEn: "Van Don, Pho Hien, Hoi An ports and 15th-c. Chu Dau export kilns; modern Haiphong–Lang Son industrial corridor." },
    { aspectEn: "Traditional Medicine", chinaEn: "Grounded in 《Huangdi Neijing》, Zang–Fu meridians, and temperate Yellow/Yangtze seasonal theory.", vietnamEn: "Localized into Southern Medicine ('Southern herbs cure Southern people' — Tue Tinh & Hai Thuong Lan Ong) for monsoon climate." },
    { aspectEn: "Civil Service Exams", chinaEn: "Sui–Tang through 1905; 82 Ming–Qing Jinshi Doctor Steles at Beijing Imperial Academy.", vietnamEn: "1075 (Le Van Thinh) through 1919; 82 Doctor Steles on stone tortoises at Hanoi Temple of Literature, tied deeply to rural communes." },
    { aspectEn: "Classical Legal Codes", chinaEn: "《Tang Code》, 《Great Ming Code》, 《Great Qing Code》 stressing patrilineal lineage hierarchy.", vietnamEn: "《Hong Duc Code》 combining East Asian statutory structure with local customs safeguarding women's property and inheritance." },
    { aspectEn: "Traditional Ceramics", chinaEn: "Jingdezhen imperial kilns, Longquan celadon, Yixing purple clay at court scale.", vietnamEn: "15th-century Chu Dau blue-and-white export ware, Bat Trang, and Phu Lang with river-delta motifs and crackled glazes." },
    { aspectEn: "Business Address & Protocol", chinaEn: "Neutral pronouns (ni/nin) + Surname & Title (Wang Zong, Li Jingli); two-handed card exchange and round-table hierarchy.", vietnamEn: "Dynamic kinship pronouns (Anh/Chi/Em) paired with titles; values warmth and flexibility backed by clear contractual specifics." }
  ];

  // Apply patches safely onto live window namespaces
  if (window.CCE_PHILOSOPHY) {
    if (Array.isArray(window.CCE_PHILOSOPHY.schools)) {
      window.CCE_PHILOSOPHY.schools.forEach((s) => {
        const patch = SCHOOLS_EN[s.id];
        if (patch) Object.assign(s, patch);
      });
    }
    if (Array.isArray(window.CCE_PHILOSOPHY.classicalTexts)) {
      window.CCE_PHILOSOPHY.classicalTexts.forEach((c) => {
        const patch = CLASSICS_EN[c.id];
        if (!patch) return;
        c.treasuryLabelEn = patch.treasuryLabelEn;
        c.eraEn = patch.eraEn;
        c.authorEn = patch.authorEn;
        c.schoolEn = patch.schoolEn;
        c.summaryEn = patch.summaryEn;
        c.whyItMattersEn = patch.whyItMattersEn;
        if (Array.isArray(c.excerpts) && Array.isArray(patch.excerptsEn)) {
          c.excerpts.forEach((ex, i) => {
            const pex = patch.excerptsEn[i];
            if (pex) {
              ex.passageTitleEn = pex.passageTitleEn;
              ex.commentaryEn = pex.commentaryEn;
            }
          });
        }
      });
    }
    if (Array.isArray(window.CCE_PHILOSOPHY.comparisonMatrix)) {
      window.CCE_PHILOSOPHY.comparisonMatrix.forEach((row, i) => {
        const patch = MATRIX_EN[i];
        if (patch) Object.assign(row, patch);
      });
    }
  }

  if (window.CCE_CUSTOMS_ART) {
    (window.CCE_CUSTOMS_ART.customs || []).forEach((item) => {
      const patch = CUSTOMS_EN[item.id];
      if (patch) Object.assign(item, patch);
    });
    (window.CCE_CUSTOMS_ART.arts || []).forEach((item) => {
      const patch = ARTS_EN[item.id];
      if (patch) Object.assign(item, patch);
    });
    (window.CCE_CUSTOMS_ART.contemporary || []).forEach((item) => {
      const patch = CONTEMPORARY_EN[item.id];
      if (patch) Object.assign(item, patch);
    });
  }

  if (window.CCE_BUSINESS) {
    window.CCE_BUSINESS.epistemicWarningEn =
      "International Business Methodology Caution: Cultural concepts such as Guanxi (关系), Face (面子), or Renqing (人情) offer essential sociological context — NEVER immutable stereotypes dictating every Chinese firm's conduct. A Shenzhen AI startup or publicly listed multinational operates quite differently from a traditional Chaozhou family enterprise or a central state-owned enterprise (Yangqi).";
    (window.CCE_BUSINESS.themes || []).forEach((t) => {
      const patch = BIZ_THEMES_EN[t.id];
      if (patch) Object.assign(t, patch);
    });
    (window.CCE_BUSINESS.caseStudies || []).forEach((cs) => {
      const patch = BIZ_CASES_EN[cs.id];
      if (patch) Object.assign(cs, patch);
    });
  }

  if (window.CCE_SINO_VIETNAM) {
    window.CCE_SINO_VIETNAM.methodologicalBannerEn =
      "Sino–Vietnamese cultural research must reject two simplistic extremes: (1) dismissing Vietnamese civilization as a mere 'miniature replica' of Chinese culture, or (2) denying deep shared East Asian heritage across history. Every phenomenon should be analyzed cleanly across three strata: Transmission — Localization — Indigenous Creation.";
    (window.CCE_SINO_VIETNAM.themes || []).forEach((t) => {
      const patch = SV_THEMES_EN[t.id];
      if (patch) Object.assign(t, patch);
    });
    (window.CCE_SINO_VIETNAM.comparisonRows || []).forEach((row, i) => {
      const patch = SV_ROWS_EN[i];
      if (patch) Object.assign(row, patch);
    });
  }
})();
