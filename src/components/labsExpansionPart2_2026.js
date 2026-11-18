// ============================================================================
// PROMPTS D & SECTION 3 LABS + INTERACTIVE TOOLS (labsExpansionPart2_2026.js)
// Strict Architectural / Digital Museum Spec: 0px border-radius, ZERO UI emojis,
// pure Web Audio API (no external audio bloat), complete 64 King Wen Yijing Matrix,
// 4,000-Year Synchronized China–Vietnam Timeline, Chu Nom Parallel Reader,
// Real-Scale CAD Ruler, Inline Classical Glossing, & 3-Source Triangulation.
// ============================================================================

(function () {
  "use strict";

  const state = {
    synthTimbre: "bianzhong", // "bianzhong" | "guqin"
    activeNote: "gong",
    hexLines: [1, 1, 1, 1, 1, 1], // bottom (Hao 1) to top (Hao 6): 1 = Yang, 0 = Yin
    nomDocId: "kieu",
    nomGlyphIdx: 0,
    activeGlossTerm: null // { zh, termObj }
  };

  // --------------------------------------------------------------------------
  // D1: PURE WEB AUDIO PENTATONIC RESONATOR (GUQIN & ZENG HOU YI BIANZHONG)
  // Five Classical Tones: Gong (261.63), Shang (293.66), Jue (329.63),
  // Zhi (392.00), Yu (440.00), Upper Gong (523.25) via Circle-of-Fifths logic.
  // --------------------------------------------------------------------------
  const PENTATONIC_NOTES = [
    { id: "gong", zh: "宫", pinyin: "Gōng", hv: "Cung", ratio: "1 : 1", hz: 261.63, western: "C4 (Do)", roleVi: "Chủ âm trầm ổn, tượng trưng Thổ & Quân chủ trung dung", roleEn: "Fundamental tonic (Earth / Center), grounding the modal home" },
    { id: "shang", zh: "商", pinyin: "Shāng", hv: "Thương", ratio: "9 : 8", hz: 293.66, western: "D4 (Re)", roleVi: "Âm thu liễm, sáng rõ, gắn với Kim hành", roleEn: "Crisp resonant second (Metal), clear and contemplative" },
    { id: "jue", zh: "角", pinyin: "Jué / Jiǎo", hv: "Giác", ratio: "81 : 64", hz: 329.63, western: "E4 (Mi)", roleVi: "Sinh phát ôn hòa mùa xuân, gắn với Mộc hành", roleEn: "Spring-like major third (Wood), bright vital lift" },
    { id: "zhi", zh: "徵", pinyin: "Zhǐ", hv: "Chủy", ratio: "3 : 2", hz: 392.0, western: "G4 (Sol)", roleVi: "Quãng 5 đúng (Tam phân tổn ích), gắn với Hỏa hành", roleEn: "Pure Fifth harmonic (Fire), energetic open leap" },
    { id: "yu", zh: "羽", pinyin: "Yǔ", hv: "Vũ", ratio: "27 : 16", hz: 440.0, western: "A4 (La)", roleVi: "Thanh thoát như nước chảy, gắn với Thủy hành", roleEn: "Flowing minor-tinged sixth (Water), limpid poise" },
    { id: "shaogong", zh: "少宫", pinyin: "Shàogōng", hv: "Thiếu Cung", ratio: "2 : 1", hz: 523.25, western: "C5 (Do2)", roleVi: "Bát độ cao thanh thoát (tỷ lệ 2:1 với Cung gốc)", roleEn: "Octave resonance (2:1 pure harmonic over Gong)" }
  ];

  let sharedAudioCtx = null;
  function getAudioCtx() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    if (!sharedAudioCtx) sharedAudioCtx = new Ctx();
    if (sharedAudioCtx.state === "suspended") {
      sharedAudioCtx.resume().catch(() => {});
    }
    return sharedAudioCtx;
  }

  function playTone(hz, durationSec = 1.45, delaySec = 0) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime + delaySec;
    const isBell = state.synthTimbre === "bianzhong";

    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);

    // Real bronze bell partials vs. warm silk plucked guqin overtones
    const partials = isBell
      ? [
          { mult: 1.0, amp: 0.34, decay: durationSec },
          { mult: 2.0, amp: 0.16, decay: durationSec * 0.72 },
          { mult: 2.4, amp: 0.12, decay: durationSec * 0.55 },
          { mult: 3.01, amp: 0.08, decay: durationSec * 0.38 }
        ]
      : [
          { mult: 1.0, amp: 0.38, decay: durationSec * 1.15 },
          { mult: 2.0, amp: 0.14, decay: durationSec * 0.68 },
          { mult: 3.0, amp: 0.05, decay: durationSec * 0.4 }
        ];

    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.linearRampToValueAtTime(isBell ? 0.55 : 0.45, now + (isBell ? 0.008 : 0.022));
    masterGain.gain.exponentialRampToValueAtTime(0.0008, now + durationSec);

    partials.forEach((p, idx) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = idx === 0 && !isBell ? "triangle" : "sine";
      osc.frequency.setValueAtTime(hz * p.mult, now);
      if (!isBell && idx === 0) {
        // Subtle Guqin slide-in portamento (吟揉)
        osc.frequency.setValueAtTime(hz * 0.985, now);
        osc.frequency.exponentialRampToValueAtTime(hz, now + 0.09);
      }
      g.gain.setValueAtTime(p.amp, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);
      osc.connect(g);
      g.connect(masterGain);
      osc.start(now);
      osc.stop(now + p.decay + 0.05);
    });
  }

  function playMotif(motifId) {
    const noteMap = {};
    PENTATONIC_NOTES.forEach((n) => (noteMap[n.id] = n.hz));
    const seq =
      motifId === "gaoshan"
        ? [
            ["gong", 0], ["shang", 0.32], ["jue", 0.64], ["zhi", 0.98],
            ["yu", 1.38], ["shaogong", 1.76], ["zhi", 2.2], ["jue", 2.55], ["gong", 2.95]
          ]
        : [
            ["zhi", 0], ["zhi", 0.34], ["yu", 0.68], ["shaogong", 1.04],
            ["jue", 1.48], ["shang", 1.84], ["gong", 2.25]
          ];
    seq.forEach(([nid, t]) => {
      if (noteMap[nid]) playTone(noteMap[nid], 1.25, t);
    });
  }

  // --------------------------------------------------------------------------
  // D2: COMPLETE 64 KING WEN YIJING HEXAGRAM MATRIX (VERIFIED BAGUA LOOKUP)
  // Trigram encoding [b0, b1, b2] bottom-to-top: 011=Xun (Wind), 110=Dui (Lake)
  const TRIGRAMS_BTT = {
    "111": { zh: "乾", py: "Qián", vi: "Càn (Thiên)", en: "Qian (Heaven)", elem: "Kim", sym: "☰" },
    "110": { zh: "兑", py: "Duì", vi: "Đoài (Trạch)", en: "Dui (Lake)", elem: "Kim", sym: "☱" },
    "101": { zh: "离", py: "Lí", vi: "Ly (Hỏa)", en: "Li (Fire)", elem: "Hỏa", sym: "☲" },
    "100": { zh: "震", py: "Zhèn", vi: "Chấn (Lôi)", en: "Zhen (Thunder)", elem: "Mộc", sym: "☳" },
    "011": { zh: "巽", py: "Xùn", vi: "Tốn (Phong)", en: "Xun (Wind)", elem: "Mộc", sym: "☴" },
    "010": { zh: "坎", py: "Kǎn", vi: "Khảm (Thủy)", en: "Kan (Water)", elem: "Thủy", sym: "☵" },
    "001": { zh: "艮", py: "Gèn", vi: "Cấn (Sơn)", en: "Gen (Mountain)", elem: "Thổ", sym: "☶" },
    "000": { zh: "坤", py: "Kūn", vi: "Khôn (Địa)", en: "Kun (Earth)", elem: "Thổ", sym: "☷" }
  };

  // Standard King Wen 8x8 matrix: rows = Lower Trigram (Hạ quái, BTT), cols = Upper Trigram (Thượng quái, BTT)
  // Order of trigrams: qian(111), kun(000), zhen(100), xun(011), kan(010), li(101), gen(001), dui(110)
  // Hexagram table keyed by `${lowerBTT}_${upperBTT}` -> [num, zh, pinyin, vi, en, motifVi, motifEn]
  const HEX_ROWS = [
    // lower + upper:
    ["111_111", 1, "乾", "Qián", "Càn Vi Thiên", "Qian (The Creative)", "Thiên hành kiện, quân tử dĩ tự cường bất tức — Trời vận động mạnh mẽ không ngừng, người quân tử tự rèn đức lớn bền bỉ.", "Heaven moves ceaselessly; the exemplary leader strengthens character relentlessly."],
    ["000_000", 2, "坤", "Kūn", "Khôn Vi Địa", "Kun (The Receptive)", "Địa thế Khôn, quân tử dĩ hậu đức tải vật — Đức dày nâng đỡ vạn vật, lấy nhu thắng cương và thuận thời kiến tạo.", "Thick earth bears all things smoothly; cultivate generous virtue before acting."],
    ["100_010", 3, "屯", "Zhūn", "Thủy Lôi Truân", "Zhun (Initial Sprouting)", "Khởi đầu gian nan như mầm non phá đất, cần lập nền tảng thiết chế và quy tụ hiền tài trước khi mở rộng.", "Initial constructive difficulty; build firm order and alliances before advancing."],
    ["010_001", 4, "蒙", "Méng", "Sơn Thủy Mông", "Meng (Youthful Learning)", "Khai mở u tối bằng giáo dục đúng phương pháp và kỷ luật tự thân bền bỉ.", "Nurture nascent clarity through disciplined pedagogy rather than impulsive speed."],
    ["111_010", 5, "需", "Xū", "Thủy Thiên Nhu", "Xu (Strategic Waiting)", "Chờ thời với nội lực đầy đủ, giữ niềm tin vững vàng khi thời cơ chưa chín muồi.", "Patient readiness: store strength calmly while timing across obstacles matures."],
    ["010_111", 6, "讼", "Sòng", "Thiên Thủy Tụng", "Song (Litigation & Arbitration)", "Thận trọng ngay từ khâu lập khế ước ban đầu để hóa giải tranh chấp trước khi bùng phát.", "Resolve friction at contract roots before disputes solidify into deadlock."],
    ["010_000", 7, "师", "Shī", "Địa Thủy Sư", "Shi (Disciplined Collective)", "Điều phối tổ chức quy mô lớn dựa trên kỷ luật minh bạch và người lãnh đạo chính trực.", "Coordinate collective strength via strict accountability and moral command."],
    ["000_010", 8, "比", "Bǐ", "Thủy Địa Tỷ", "Bi (Solidarity & Cohesion)", "Liên kết cộng đồng bền vững trên nền tảng tin cậy lẫn nhau và nguyên tắc minh bạch.", "Cultivate loyal institutional cohesion anchored in shared trust."],
    ["111_011", 9, "小畜", "Xiǎochù", "Phong Thiên Tiểu Súc", "Xiaochu (Small Accumulation)", "Tích lũy từng bước nhỏ khi đại cục chưa chuyển; sửa sang văn hiến và nội trị.", "Refine craft and gather modest resources patiently ahead of major breakthroughs."],
    ["110_111", 10, "履", "Lǚ", "Thiên Trạch Lý", "Lu (Measured Conduct)", "Bước đi thận trọng giữ lễ nghĩa ngay trong tình thế nhạy cảm như giẫm đuôi hổ.", "Tread deliberately with ritual courtesy even beside formidable power."],
    ["111_000", 11, "泰", "Tài", "Địa Thiên Thái", "Tai (Harmonious Interflow)", "Khí trời giáng xuống, khí đất bốc lên — thượng hạ thông suốt, thịnh vượng giao hòa.", "Heaven and earth commune smoothly: balanced governance unlocks lasting prosperity."],
    ["000_111", 12, "否", "Pǐ", "Thiên Địa Bĩ", "Pi (Structural Blockage)", "Khi giao tiếp thượng hạ bế tắc, bậc trí giả thu liễm giữ tiết tháo chờ chu kỳ đảo chiều.", "When dialogue stalls, safeguard integrity and prepare quietly for renewal."],
    ["101_111", 13, "同人", "Tóngrén", "Thiên Hỏa Đồng Nhân", "Tongren (Fellowship Beyond Factions)", "Đồng tâm hợp tác vượt khỏi lợi ích cục bộ dựa trên tầm nhìn công minh rộng mở.", "Forge broad civic partnership transcending narrow parochial loyalties."],
    ["111_101", 14, "大有", "Dàyǒu", "Hỏa Thiên Đại Hữu", "Dayou (Great Abundance)", "Quản trị sự sung túc bằng khiêm cung, ngăn chặn kiêu mãn khi ở đỉnh cao.", "Steward abundance wisely—humility and restraint sustain lasting greatness."],
    ["001_000", 15, "谦", "Qiān", "Địa Sơn Khiêm", "Qian (Authentic Modesty)", "Quẻ duy nhất cả sáu hào đều cát: núi cao nằm gọn trong lòng đất, càng tài đức càng khiêm nhường.", "Mountain beneath earth: true competence bows graciously and earns universal trust."],
    ["000_100", 16, "豫", "Yù", "Lôi Địa Dự", "Yu (Prepared Enthusiasm)", "Khơi dậy động lực tập thể bằng âm nhạc – lễ hội hài hòa nhưng luôn dự phòng biến cố.", "Channel collective energy rhythmically while keeping contingency plans ready."],
    ["100_110", 17, "随", "Suí", "Trạch Lôi Tùy", "Sui (Adaptive Responsiveness)", "Thuận theo quy luật biến đổi khách quan mà vẫn giữ cốt lõi đạo lý bất biến.", "Adapt flexibly to shifting seasons without forfeiting core principles."],
    ["011_001", 18, "蛊", "Gǔ", "Sơn Phong Cổ", "Gu (Remedying Decay)", "Đối diện thẳng thắn với sai sót tích tụ lâu năm để cải cách tận gốc và lập kỷ cương mới.", "Confront inherited stagnation directly and overhaul institutions at their roots."],
    ["110_000", 19, "临", "Lín", "Địa Trạch Lâm", "Lin (Attentive Oversight)", "Tiếp cận sát thực tiễn cơ sở với thái độ ôn hòa, thấu hiểu đời sống dân sinh.", "Lead through close grounded oversight balanced with patient mentorship."],
    ["000_011", 20, "观", "Guān", "Phong Địa Quan", "Guan (Contemplative Observation)", "Quan sát toàn cảnh thời thế và nội tâm như gió thổi qua mặt đất trước khi quyết định.", "Pause to survey systemic patterns cleanly from broad perspective before acting."],
    ["100_101", 21, "噬嗑", "Shìkè", "Hỏa Lôi Phệ Hạp", "Shike (Decisive Enforcement)", "Tháo gỡ nút thắt cản trở bằng pháp luật minh bạch và công bằng.", "Clear entrenched obstructions decisively via clear and impartial rules."],
    ["101_001", 22, "贲", "Bì", "Sơn Hỏa Bí", "Bi (Refined Form)", "Văn hóa và hình thức mỹ học tôn lên bản chất chân thực, tránh phô trương che lấp nội dung.", "Artistic form illuminates substantive beauty without eclipsing inner truth."],
    ["000_001", 23, "剥", "Bō", "Sơn Địa Bác", "Bo (Gradual Erosion)", "Khi thế lực hao mòn, cần bảo toàn hạt nhân tinh túy ('thạc quả bất thực') chờ mùa hồi sinh.", "During decline, conserve essential human capital intact for future regeneration."],
    ["100_000", 24, "复", "Fù", "Địa Lôi Phục", "Fu (Return of Light)", "Một hào dương trở lại từ đáy sâu — điểm ngoặt mùa Đông Chí báo hiệu chu kỳ hồi phục.", "A single returning spark beneath quiet earth marks the authentic turning point."],
    ["100_111", 25, "无妄", "Wúwàng", "Thiên Lôi Vô Vọng", "Wuwang (Unadulterated Sincerity)", "Hành động thuận theo lẽ tự nhiên chân thành, không toan tính mưu lợi giả dối.", "Act cleanly without ulterior artifice, staying aligned with natural reality."],
    ["111_001", 26, "大畜", "Dàchù", "Sơn Thiên Đại Súc", "Dachu (Great Nurturing)", "Học rộng biết nhiều lời dạy tiền nhân để bồi đắp khí lượng cho đại sự quốc gia.", "Accumulate deep classical scholarship and resilience for monumental undertakings."],
    ["100_001", 27, "颐", "Yí", "Sơn Lôi Di", "Yi (Careful Nourishment)", "Thận trọng lời nói (Thần ngôn ngữ) và điều độ ăn uống dưỡng sinh (Tiết ẩm thực).", "Guard the purity of what one speaks and consumes—ethics and health align."],
    ["011_110", 28, "大过", "Dàguò", "Trạch Phong Đại Quá", "Daguo (Extraordinary Load)", "Đứng vững độc lập khi đối mặt áp lực phi thường vượt quá khung chuẩn thông thường.", "Shoulder extraordinary structural loads with composed independence under pressure."],
    ["010_010", 29, "坎", "Kǎn", "Khảm Vi Thủy", "Kan (Redoubled Waters)", "Giữ lòng trung tín kiên định như dòng nước chảy liên tục vượt qua mọi gập ghềnh hiểm trở.", "Flow steadily through successive trials while safeguarding unwavering integrity."],
    ["101_101", 30, "离", "Lí", "Ly Vi Hỏa", "Li (Clarity & Illumination)", "Tỏa sáng trí tuệ văn hiến bền vững nhờ nương tựa đúng nền tảng chân lý.", "Radiate lucid cultural clarity sustained by rightful philosophical roots."],
    ["001_110", 31, "咸", "Xián", "Trạch Sơn Hàm", "Xian (Mutual Resonance)", "Giao cảm chân thành giữa người với người bắt đầu từ tâm trống rỗng không thành kiến.", "Genuine rapport arises spontaneously from an open, unprejudiced mind."],
    ["011_100", 32, "恒", "Héng", "Lôi Phong Hằng", "Heng (Steadfast Perseverance)", "Lập chí vững vàng bền bỉ giữa biến động không ngừng của thế sự.", "Maintain steadfast ethical direction amid ceaseless external change."],
    ["001_111", 33, "遁", "Dùn", "Thiên Sơn Độn", "Dun (Dignified Withdrawal)", "Biết lùi đúng lúc để bảo toàn khí tiết là bản lĩnh chiến lược chứ không phải yếu hèn.", "Strategic withdrawal at the proper hour preserves long-term dignity cleanly."],
    ["111_100", 34, "大壮", "Dàzhuàng", "Lôi Thiên Đại Tráng", "Dazhuang (Great Vigor)", "Có sức mạnh lớn lao vẫn phải tự kiểm soát trong khuôn khổ Lễ nghĩa ('Phi lễ vật lý').", "Channel abundant strength strictly within ethical and ritual boundaries."],
    ["000_101", 35, "晋", "Jìn", "Hỏa Địa Tấn", "Jin (Luminous Advance)", "Tiến bước quang minh chính đại như mặt trời mọc trên mặt đất, tự trau dồi minh đức.", "Advance transparently into wider service by illuminating one's own virtues."],
    ["101_000", 36, "明夷", "Míngyí", "Địa Hỏa Minh Di", "Mingyi (Veiled Brilliance)", "Khi hoàn cảnh khắc nghiệt, giấu ánh sáng trí tuệ vào trong để kiên nhẫn giữ vững chính nghĩa.", "In adverse climates, veil outward brilliance while keeping inner insight intact."],
    ["101_011", 37, "家人", "Jiārén", "Phong Hỏa Gia Nhân", "Jiaren (Family Stewardship)", "Trị quốc bắt đầu từ tề gia: lời nói đi đôi việc làm trong từng nếp sống thường nhật.", "Durable civic order grows outward from sincere discipline within the household."],
    ["110_101", 38, "睽", "Kuí", "Hỏa Trạch Khuê", "Kui (Constructive Divergence)", "Tìm điểm tương đồng trong đại cục giữa muôn mặt khác biệt của sự vật.", "Seek shared strategic ground amid visible cultural or operational differences."],
    ["001_010", 39, "蹇", "Jiǎn", "Thủy Sơn Kiển", "Jian (Examining Impasses)", "Gặp trở ngại trước mặt, bậc quân tử quay lại tự kiểm điểm bản thân và tu sửa nội lực.", "When paths freeze ahead, pause and strengthen your own internal foundations."],
    ["010_100", 40, "解", "Jiě", "Lôi Thủy Giải", "Jie (Deliverance & Release)", "Khoan dung xá miễn kịp thời sau khủng hoảng để phục hồi sinh khí xã hội.", "Act swiftly yet mercifully once tension breaks to restore momentum."],
    ["110_001", 41, "损", "Sǔn", "Sơn Trạch Tổn", "Sun (Disciplined Restraint)", "Tiết chế phẫn nộ và ham muốn ('Trừng phẫn trất dục') để chuyển nguồn lực cho điều thiết yếu.", "Trim superficial excess and temper impulses to nourish essential priorities."],
    ["100_011", 42, "益", "Yì", "Phong Lôi Ích", "Yi (Shared Benefit)", "Thấy điều thiện thì nhanh chóng noi theo, có lỗi thì lập tức sửa mình ('Kiến thiện tắc thiên').", "Multiply collective good swiftly while correcting missteps without delay."],
    ["111_110", 43, "夬", "Guài", "Trạch Thiên Quải", "Guai (Resolute Disclosure)", "Công khai quyết đoán loại bỏ tệ nạn, nhưng tránh dùng bạo lực cực đoan gây phản tác dụng.", "Resolve deep flaws openly and resolutely while avoiding vindictive excess."],
    ["011_111", 44, "姤", "Gòu", "Thiên Phong Cấu", "Gou (Unexpected Encounter)", "Nhận diện sớm tín hiệu biến động nhỏ đầu tiên để kịp thời ban bố chuẩn mực phòng ngừa.", "Detect subtle shifts early and articulate clear standards before trends sprawl."],
    ["000_110", 45, "萃", "Cuì", "Trạch Địa Tụy", "Cui (Conscious Assembly)", "Quy tụ nhân tâm vào mục tiêu chung đồng thời luôn chuẩn bị phương án dự phòng rủi ro.", "Unite talents around clear purpose while maintaining contingency discipline."],
    ["011_000", 46, "升", "Shēng", "Địa Phong Thăng", "Sheng (Steady Ascent)", "Phát triển vững chắc từng bước như cây mộc vươn lên từ trong lòng đất.", "Grow patiently layer upon layer just as timber rises steadily from fertile soil."],
    ["010_110", 47, "困", "Kùn", "Trạch Thủy Khốn", "Kun (Resilient Poise in Hardship)", "Dù rơi vào cảnh túng ngặt vẫn giữ vững chí hướng bất khuất và thái độ điềm tĩnh.", "When circumstances constrain resources, protect moral purpose calmly."],
    ["011_010", 48, "井", "Jǐng", "Thủy Phong Tỉnh", "Jing (The Unfailing Well)", "Thành quách thay đổi nhưng giếng nước nuôi dân không đổi — xây dựng giá trị phụng sự bền lâu.", "Towns change, yet the clean public well endures—anchor work in lasting utility."],
    ["101_110", 49, "革", "Gé", "Trạch Hỏa Cách", "Ge (Timely Reform)", "Cải cách đúng thời điểm chín muồi ('Thuận thiên ứng nhân') và minh bạch truyền thông.", "Execute structural reform only when consensus and objective timing mature."],
    ["011_101", 50, "鼎", "Dǐng", "Hỏa Phong Đỉnh", "Ding (The Sacred Vessel)", "Ổn định vị thế chính danh và dung hợp nhân tài như chiếc đỉnh đồng tam túc vững chãi.", "Stabilize legitimate governance and nourish varied talents in harmony."],
    ["100_100", 51, "震", "Zhèn", "Chấn Vi Lôi", "Zhen (Awakening Shock)", "Chấn động đột ngột là cơ hội rà soát sửa mình để giữ tâm bất động giữa tiếng sấm.", "Sudden disruption awakens vigilance; reflect inward without losing composure."],
    ["001_001", 52, "艮", "Gèn", "Cấn Vi Sơn", "Gen (Mountain Stillness)", "Biết dừng đúng lúc và giữ tâm tĩnh tại không xao động trước ồn ào ngoại cảnh.", "Master when to stop cleanly; cultivate grounded mental stillness amid noise."],
    ["001_011", 53, "渐", "Jiàn", "Phong Sơn Tiệm", "Jian (Gradual Progress)", "Tiến triển tuần tự đúng chuẩn mực, từ nền tảng thấp lên cao vững vàng không nhảy cóc.", "Ascend step by measured step with institutional rigor and zero shortcuts."],
    ["110_100", 54, "归妹", "Guīmèi", "Lôi Trạch Quy Muội", "Guimei (Long-Term Reckoning)", "Nhìn rõ hệ quả lâu dài của mỗi cam kết ngay từ bước khởi đầu để tránh mất cân bằng.", "Weigh long-term obligations carefully before entering secondary alliances."],
    ["101_100", 55, "丰", "Fēng", "Lôi Hỏa Phong", "Feng (Zenith Abundance)", "Ở đỉnh cao rực rỡ như mặt trời chính ngọ, luôn nhớ chu kỳ xế bóng để quản trị khiêm tốn.", "At midday zenith of success, honor cyclic limits to safeguard durability."],
    ["001_101", 56, "旅", "Lǚ", "Hỏa Sơn Lữ", "Lv (The Careful Sojourner)", "Đi xa lập nghiệp hay sứ mệnh ngoại giao phải tôn trọng phong tục bản địa và giữ sự minh xét.", "While traveling or negotiating abroad, remain observant, humble, and legally precise."],
    ["011_011", 57, "巽", "Xùn", "Tốn Vi Phong", "Xun (Gentle Penetration)", "Lan tỏa ảnh hưởng mềm dẻo nhưng bền bỉ liên tục như gió thấm sâu qua mọi kẽ hở.", "Diffuse standards persistently through gentle, repeated clarity rather than force."],
    ["110_110", 58, "兑", "Duì", "Đoài Vi Trạch", "Dui (Joyous Exchange)", "Hai hồ nước nối thông cùng bạn bè thảo luận học hỏi — niềm vui chân chính từ tri thức.", "Connected lakes nourish mutual learning and open scholarly dialogue."],
    ["010_011", 59, "涣", "Huàn", "Phong Thủy Hoán", "Huan (Dissolving Rigidity)", "Hóa giải chia rẽ và cứng nhắc bằng tinh thần cởi mở quy tụ nhân tâm.", "Disperse entrenched silos through broad-minded civic solidarity."],
    ["110_010", 60, "节", "Jié", "Thủy Trạch Tiết", "Jie (Balanced Measure)", "Đặt chuẩn mực điều độ vừa phải ('Khổ tiết bất khả trinh') để hệ thống vận hành lâu dài.", "Establish sustainable, humane standards—moderation endures whereas harshness breaks."],
    ["110_011", 61, "中孚", "Zhōngfú", "Phong Trạch Trung Phu", "Zhongfu (Inner Sincerity)", "Thành tín từ nội tâm tạo ra uy tín vượt qua mọi khoảng cách văn hóa.", "Deep inner trustworthiness bridges divisions authentically without coercion."],
    ["001_100", 62, "小过", "Xiǎoguò", "Lôi Sơn Tiểu Quá", "Xiaoguo (Scrupulous Precision)", "Khi việc lớn chưa thuận, chú tâm vào chi tiết nhỏ với sự khiêm tốn và cần kiệm.", "During cautious phases, execute small operational details scrupulously."],
    ["101_010", 63, "既济", "Jìjì", "Thủy Hỏa Ký Tế", "Jiji (Order Achieved)", "Mọi việc đã hoàn thành đúng vị trí nhưng chứa mầm chuyển biến — phải dự phòng từ lúc bình yên.", "Harmony realized; remember that stability demands continuous vigilance against complacency."],
    ["010_101", 64, "未济", "Wèijì", "Hỏa Thủy Vị Tế", "Weiji (Open Transition)", "Quẻ khép lại Kinh Dịch mang ý nghĩa chưa kết thúc: lịch sử luôn mở sang chu kỳ kiến tạo mới.", "Unfinished horizon: the Book of Changes closes on continual renewal rather than finality."]
  ];

  const HEX_MAP = {};
  HEX_ROWS.forEach((r) => {
    HEX_MAP[r[0]] = {
      num: r[1], zh: r[2], py: r[3], vi: r[4], en: r[5], descVi: r[6], descEn: r[7]
    };
  });

  // --------------------------------------------------------------------------
  // D3: 4,000-YEAR SYNCHRONIZED CHINA–VIETNAM HISTORICAL TIMELINE (14 EPOCHS)
  // --------------------------------------------------------------------------
  const SYNC_VN_MAP = {
    "prehistoric": { vnVi: "Phùng Nguyên – Đông Sơn (Trống đồng)", vnEn: "Phung Nguyen – Dong Son Bronze Age", noteVi: "Lương Chử (ngọc tông) song hành cùng văn hóa lúa nước sông Hồng và trống đồng Đông Sơn sơ kỳ.", noteEn: "Liangzhu jade civilization paralleled early Red River wet-rice cultivation and Dong Son bronzes." },
    "xia-shang-zhou": { vnVi: "Văn Lang – Hùng Vương (18 đời)", vnEn: "Van Lang Kingdom (Hung Kings)", noteVi: "Thời Thương–Chu lập Tông Pháp; đồng thời tại phương Nam hình thành nhà nước Văn Lang trên lưu vực sông Hồng.", noteEn: "Shang–Zhou ritual bronze order paralleled the Hung Kings' Van Lang confederation." },
    "spring-autumn-warring": { vnVi: "Văn Lang hậu kỳ → Âu Lạc (An Dương Vương)", vnEn: "Late Van Lang -> Au Lac (257 BCE)", noteVi: "Bách Gia Tranh Minh & Đô Giang Yển (256 TCN) trùng thời điểm thành Cổ Loa xoắn ốc phương Nam.", noteEn: "Axial Age Hundred Schools & Dujiangyan (256 BCE) coincided with Co Loa spiral citadel." },
    "qin-han": { vnVi: "Âu Lạc → Hai Bà Trưng (40–43 SCN)", vnEn: "Au Lac -> Trung Sisters Uprising (40–43 CE)", noteVi: "Âm Tiền Hán–Việt truyền vào Giao Chỉ; năm 40 Hai Bà Trưng xưng Vương tại Mê Linh.", noteEn: "Archaic Sino-Vietnamese stratum entered Jiaozhi alongside the Trung Sisters' autonomy movement." },
    "three-kingdoms": { vnVi: "Khởi nghĩa Bà Triệu (248 SCN)", vnEn: "Lady Trieu Movement (248 CE)", noteVi: "Tam Quốc phân tranh Ngụy–Thục–Ngô đồng thời với khởi nghĩa Bà Triệu đất Cửu Chân.", noteEn: "Three Kingdoms strategy era coincided with Lady Trieu's defiance in northern Vietnam." },
    "jin-northern-southern": { vnVi: "Nhà nước Vạn Xuân – Lý Nam Đế (544–602)", vnEn: "Early Ly Dynasty · Van Xuan (544–602 CE)", noteVi: "Lý Bí dựng Vạn Xuân, Khai Quốc Tự (Trấn Quốc); bên Trung Hoa rực rỡ Lan Đình Tự & Thiền sơ kỳ.", noteEn: "Ly Bi founded independent Van Xuan beside Six Dynasties calligraphy and Buddhist art." },
    "sui-tang": { vnVi: "Khúc Thừa Dụ (905) · Ngô Quyền Bạch Đằng (938)", vnEn: "Khuc Autonomy -> Bach Dang Victory (938 CE)", noteVi: "Âm Thiết Vận Đường (601) trở thành chuẩn gốc âm đọc Hán–Việt; năm 938 Ngô Quyền định đô Cổ Loa.", noteEn: "Qieyun (601) standardized Sino-Vietnamese reading; Ngo Quyen opened permanent independence in 938." },
    "five-dynasties": { vnVi: "Nhà Đinh (Đại Cồ Việt 968) – Tiền Lê (980)", vnEn: "Dinh (Dai Co Viet 968) – Early Le", noteVi: "Đinh Bộ Lĩnh lập nước Đại Cồ Việt năm 968 cùng thời Ngũ Đại chuyển giao sang nhà Tống.", noteEn: "Dinh Bo Linh consolidated Dai Co Viet at Hoa Lu during China's Five Dynasties transition." },
    "song": { vnVi: "Nhà Lý (1009–1225) · Nhà Trần (1225–1400)", vnEn: "Ly (1009–1225) & Early Tran Golden Age", noteVi: "Văn Miếu 1070, Khoa cử 1075, gốm men ngọc Lý–Trần nở rộ song hành cùng Ngũ Đại Danh Diêu Tống.", noteEn: "Hanoi Temple of Literature (1070) & Ly–Tran celadons flourished parallel to Song Five Great Kilns." },
    "yuan": { vnVi: "Đại Việt Nhà Trần (3 lần thắng quân Nguyên 1258–1288)", vnEn: "Tran Dynasty · Three Victories (1258–1288)", noteVi: "Trần Hưng Đạo & Hội nghị Diên Hồng bảo vệ Đại Việt; Chu Văn An dạy học; Chữ Nôm bước vào văn học.", noteEn: "Tran Hung Dao defended Dai Viet while Chu Nom literature matured under Han Thuyen." },
    "ming": { vnVi: "Nhà Hồ · Khởi nghĩa Lam Sơn · Lê Sơ (Thánh Tông)", vnEn: "Lam Son Liberation · Early Le Prosperity", noteVi: "Lê Lợi–Nguyễn Trãi (Bình Ngô Đại Cáo 1428), gốm hoa lam Chu Đậu xuất khẩu và Bia Tiến sĩ 1442.", noteEn: "Nguyen Trai's statecraft, Chu Dau blue-and-white ceramics export, and 1442 Doctor Steles." },
    "qing": { vnVi: "Lê Trung Hưng · Tây Sơn (1789) · Triều Nguyễn (1802)", vnEn: "Tay Son (1789) · Nguyen Dynasty (Hue 1805)", noteVi: "Nguyễn Du đi sứ viết Bắc Hành Tạp Lục (1813); triều Nguyễn xây Hoàng thành Huế đối thoại Kiến trúc Bắc Kinh.", noteEn: "Nguyen Du's 1813 envoy poetry & Hue Citadel (1805–1833) tropical adaptation of Beijing courtyard geometry." },
    "republic": { vnVi: "Phong trào Duy Tân – Đông Du · Thành lập VNDCCH (1945)", vnEn: "Modernist Reform & 1945 Independence", noteVi: "Phan Bội Châu – Phan Châu Trinh tiếp biến tân thư; chữ Quốc ngữ thay thế văn tự cổ truyền năm 1919.", noteEn: "Reform intellectuals engaged new scholarship as Quoc Ngu replaced Imperial exams (1919)." },
    "modern-contemporary": { vnVi: "CHXHCN Việt Nam · Đối tác Chiến lược Toàn diện (1950–2026)", vnEn: "Modern Vietnam · 2026 Digital & Cultural Dialogue", noteVi: "Hành lang Hữu Nghị–Lào Cai, ACFTA 3.0 ($296,3 tỷ USD 9T/2026) và du học sinh CSC/giao lưu bảo tàng.", noteEn: "Cross-border HSR, ACFTA 3.0 ($296.3B 9M 2026 GACC trade), and active heritage scholarship." }
  };

  // --------------------------------------------------------------------------
  // D4: CHỮ NÔM ↔ HÁN TỰ ↔ QUỐC NGỮ PARALLEL READER
  // --------------------------------------------------------------------------
  const NOM_TEXTS = [
    {
      id: "kieu",
      titleVi: "Truyện Kiều (Đoạn Khai Bút) — Nguyễn Du (1765–1820)",
      titleEn: "The Tale of Kieu (Opening Couplet) — Nguyen Du",
      scriptModeVi: "Chữ Nôm (喃字)",
      scriptModeEn: "Chu Nom Script",
      lineOriginal: "百 年 𥪝 𡎝 𠊛 些 · 字 才 字 命 窖 𱺵 恄 𠑬",
      translitVi: "Trăm năm trong cõi người ta, Chữ tài chữ mệnh khéo là ghét nhau.",
      translitEn: "A hundred years within this mortal human realm—talent and fate seem cleverly at odds.",
      glyphs: [
        { glyph: "𥪝", quocNgu: "trong", methodVi: "Hình thanh Nôm (𥪝 = 肉/thịt/trùng + 內/nội 'trong')", methodEn: "Phono-semantic Nom (Inner phonetic + space semantic)", mc: "Borrowed syllable *trung -> pure Viet 'trong'", pinyin: "(Nôm-only)", hv: "Nôm: trong" },
        { glyph: "𡎝", quocNgu: "cõi", methodVi: "Hội ý Nôm (土 Đất + 界 Giới / ranh giới cõi đất)", methodEn: "Compound Nom (Earth 土 + Boundary 界 = realm)", mc: "Semantic fusion modeling pure Vietnamese 'cõi'", pinyin: "(Nôm-only)", hv: "Nôm: cõi" },
        { glyph: "𠊛", quocNgu: "người", methodVi: "Hình thanh Nôm (亻 Người + 碍 Ngại làm thanh phù)", methodEn: "Phono-semantic Nom (Person 亻 + Ngai phonetic = person)", mc: "Classic vernacular Nom for 'người' across Nom canon", pinyin: "(Nôm-only)", hv: "Nôm: người" },
        { glyph: "才", quocNgu: "tài", methodVi: "Hán Tự nguyên bản (Tượng hình mầm cây vươn thẳng)", methodEn: "Standard Hanzi borrowed intact via Sino-Viet sound", mc: "*dzoi (Qieyun 601) -> VN 'tài' / Mandarin 'cái'", pinyin: "cái", hv: "tài (tài năng)" },
        { glyph: "命", quocNgu: "mệnh", methodVi: "Hán Tự nguyên bản (Khẩu 口 truyền Lệnh 令 = Thiên mệnh)", methodEn: "Standard Hanzi (Mouth 口 + Decree 令 = mandate)", mc: "*mjwiaeng -> VN 'mệnh' / Mandarin 'mìng'", pinyin: "mìng", hv: "mệnh / mạng" }
      ]
    },
    {
      id: "binhngo",
      titleVi: "Bình Ngô Đại Cáo (1428) — Nguyễn Trãi",
      titleEn: "Proclamation of Victory over Wu (1428) — Nguyen Trai",
      scriptModeVi: "Hán Văn Cổ Điển Đại Việt",
      scriptModeEn: "Classical Dai Viet Literary Chinese",
      lineOriginal: "仁 義 之 舉 · 要 在 安 民",
      translitVi: "Việc nhân nghĩa cốt ở yên dân.",
      translitEn: "Acts of humanity and righteousness hinge wholly upon securing the people's peace.",
      glyphs: [
        { glyph: "仁", quocNgu: "nhân", methodVi: "Hội ý Hán tự (亻 Người + 二 Hai = quan hệ đạo đức giữa người với người)", methodEn: "Compound Hanzi (Person 亻 + Two 二 = relational benevolence)", mc: "*nyin (Qieyun 601) -> VN 'nhân' (giữ thanh ngang & âm mũi đầu)", pinyin: "rén", hv: "nhân" },
        { glyph: "義", quocNgu: "nghĩa", methodVi: "Hội ý (羊 Dê tốt đẹp + 我 Ta giữ phẩm giá chính trực)", methodEn: "Compound (Auspicious Sheep + Self = moral duty)", mc: "*ngjeH -> VN giữ âm gốc 'ng-' -> 'nghĩa' (Bắc Kinh rụng 'ng-' thành 'yì')", pinyin: "yì", hv: "nghĩa" },
        { glyph: "舉", quocNgu: "cử (việc)", methodVi: "Hình thanh Hán tự (Hai tay 臼 nâng bổng lên = khởi xướng)", methodEn: "Phono-semantic (Two hands lifting = enterprise/act)", mc: "*kjoX -> VN 'cử' / Mandarin 'jǔ'", pinyin: "jǔ", hv: "cử" },
        { glyph: "安", quocNgu: "an / yên", methodVi: "Hội ý (Mái nhà 宀 che chở người phụ nữ 女 = bình an)", methodEn: "Ideograph (Roof 宀 sheltering person 女 = peace)", mc: "*ʔan -> Hán–Việt cổ 'yên' & hiện đại 'an'", pinyin: "ān", hv: "an / yên" },
        { glyph: "民", quocNgu: "dân", methodVi: "Tượng hình cổ (Nhấn mạnh người dân cội rễ quốc gia)", methodEn: "Classical Hanzi (Civilians / populace base)", mc: "*mjin -> VN đọc 'dân' (kỵ húy Đường Thái Tông Lý Thế Dân thời cổ: Dân/Nhân)", pinyin: "mín", hv: "dân" }
      ]
    },
    {
      id: "bachanh",
      titleVi: "Bắc Hành Tạp Lục (1813) — Nguyễn Du (Sứ trình Trung Hoa)",
      titleEn: "Northern Envoy Notebook (1813) — Nguyen Du in China",
      scriptModeVi: "Thơ Sứ Trình Đường Luật",
      scriptModeEn: "Regulated Tang Envoy Poetry",
      lineOriginal: "五 嶺 煙 霞 萬 里 長 · 征 夫 歲 暮 客 燕 京",
      translitVi: "Khói ráng Ngũ Lĩnh muôn dặm dài, khách phương xa cuối năm tới đất Yên Kinh (Bắc Kinh).",
      translitEn: "Haze spans ten thousand li across the Five Ridges as the year-end envoy arrives in Beijing.",
      glyphs: [
        { glyph: "嶺", quocNgu: "lĩnh / lảnh", methodVi: "Hình thanh (山 Núi + 領 Lãnh: sống núi Ngũ Lĩnh ranh giới Lĩnh Nam)", methodEn: "Mountain radical + Ling phonetic = mountain ridge", mc: "*ljengX -> VN bảo tồn phụ âm cuối -ng/-nh", pinyin: "lǐng", hv: "lĩnh" },
        { glyph: "煙", quocNgu: "yên (khói)", methodVi: "Hình thanh (火 Lửa + 垔 Nhân: làn khói sương trên núi)", methodEn: "Fire + phonetic = mist and hearth smoke", mc: "*ʔen -> VN 'yên'", pinyin: "yān", hv: "yên" },
        { glyph: "萬", quocNgu: "vạn (muôn)", methodVi: "Giả tá cổ tự -> số 10.000; truyền sang Nôm đọc thành 'muôn'", methodEn: "Ancient loan character; pre-Tang borrowing entered VN as 'muôn'", pinyin: "wàn", mc: "*mjonH -> cổ Việt 'muôn', Hán–Việt 'vạn'", hv: "vạn" },
        { glyph: "京", quocNgu: "kinh", methodVi: "Tượng hình kinh đô gò cao có lầu cổng", methodEn: "Pictograph of tall royal tower atop a capital mound", mc: "*kjaeng (bảo tồn phụ âm k- cứng trong 'Kinh' vs 'Jīng')", pinyin: "jīng", hv: "kinh" }
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // SECTION 3: INLINE CLASSICAL GLOSSING + 3-SOURCE TRIANGULATION LEDGER
  // --------------------------------------------------------------------------
  const INLINE_GLOSS_TERMS = [
    { zh: "斗拱", py: "dǒugǒng", hv: "Đấu Củng", id: "dougong", defVi: "Hệ con công mộng gỗ lồng khóa không đinh sắt, phân tán lực mái & hấp thụ địa chấn.", defEn: "Nail-free interlocking timber bracket clusters absorbing roof loads and seismic shocks." },
    { zh: "太和殿", py: "Tàihédiàn", hv: "Thái Hòa Điện", id: "taihedian", defVi: "Đại điện nghi lễ cao nhất Tử Cấm Thành (2.377 m²), đặt trên Tam Đài Hán Bạch Ngọc 8,13 m.", defEn: "Supreme ritual throne hall (2,377 m²) atop a 3-tier marble terrace." },
    { zh: "都江堰", py: "Dūjiāngyàn", hv: "Đô Giang Yển", id: "dujiangyan", defVi: "Công trình thủy lợi không đập do Lý Băng xây năm 256 TCN điều tiết tự nhiên tỷ lệ 40/60.", defEn: "256 BCE dam-less river-splitting engineering self-balancing 40%/60% flood/irrigation ratios." },
    { zh: "太极", py: "tàijí", hv: "Thái Cực", id: "taiji", defVi: "Nguyên lý tối hậu sinh thành Âm Dương đối đãi chuyển hóa không ngừng.", defEn: "Supreme polarity generating ceaseless mutual Yin–Yang transformation." },
    { zh: "知行合一", py: "zhī xíng hé yī", hv: "Tri Hành Hợp Nhất", id: "zhixing-heyi", defVi: "Học thuyết Vương Dương Minh: nhận thức chân thực tất yếu biểu hiện thành hành động đạo đức.", defEn: "Wang Yangming's core unity: genuine moral knowledge must enact itself immediately in conduct." },
    { zh: "天人合一", py: "tiān rén hé yī", hv: "Thiên Nhân Hợp Nhất", id: "tianren-heyi", defVi: "Tư tưởng cốt lõi Đông Á về sự hòa điệu giữa quy luật tự nhiên và nhân sinh.", defEn: "Classical harmony aligning cosmic order, ecology, and human society." },
    { zh: "青绿山水", py: "qīnglǜ shānshuǐ", hv: "Thanh Lục Sơn Thủy", id: "qinglv-shanshui", defVi: "Tranh sơn thủy khoáng thạch lam-lục rực rỡ đỉnh cao thời Bắc Tống (Thiên Lý Giang Sơn Đồ).", defEn: "Mineral azurite-and-malachite landscape genre peaking in Song court scrolls." },
    { zh: "留白", py: "liúbái", hv: "Lưu Bạch", id: "liubai", defVi: "Nghệ thuật chừa khoảng giấy/lụa trống gợi mây, nước và ý cảnh vô tận trong thủy mặc.", defEn: "Deliberate unpainted space evoking atmosphere, river mist, and boundless resonance." },
    { zh: "科举", py: "kējǔ", hv: "Khoa Cử", id: "keju", defVi: "Chế độ thi tuyển quan lại bằng thực lực học thuật từ Tùy–Đường (605) tới 1905; Đại Việt tổ chức từ 1075.", defEn: "Meritocratic imperial examination institution (China 605–1905; Vietnam 1075–1919)." },
    { zh: "丝绸之路", py: "Sīchóu zhī Lù", hv: "Ti Trù Chi Lộ (Con đường Tơ lụa)", id: "silk-road", defVi: "Mạng lưới giao thương Á–Âu kết nối Trường An với Tây Vực, Ba Tư và Địa Trung Hải.", defEn: "Trans-Eurasian silk, spice, ceramic, and cultural corridors linking Chang'an westward." },
    { zh: "差序格局", py: "chāxù géjú", hv: "Sai Tự Cách Cục", id: "chaxugeju", defVi: "Mô hình vòng tròn đồng tâm quan hệ xã hội Nho giáo (Phí Hiếu Thông 1947).", defEn: "Fei Xiaotong's concentric moral relationship gradient radiating from family outward." },
    { zh: "良渚", py: "Liángzhǔ", hv: "Lương Chử", id: "liangzhu", defVi: "Nền văn hóa ngọc tông – thủy lợi Hạ Du Trường Giang (3300–2300 TCN), Di sản UNESCO.", defEn: "Neolithic hydraulic and Cong-jade urban culture (3300–2300 BCE)." },
    { zh: "阴阳", py: "yīnyáng", hv: "Âm Dương", id: "yinyang", defVi: "Hai cực tương phản nhưng nương tựa và chuyển hóa lẫn nhau trong vạn vật.", defEn: "Complementary dual forces alternating dynamically throughout cosmos and body." },
    { zh: "五行", py: "wǔxíng", hv: "Ngũ Hành", id: "wuxing", defVi: "Năm pha vận động Mộc–Hỏa–Thổ–Kim–Thủy liên kết theo vòng Tương Sinh & Tương Khắc.", defEn: "Five dynamic phases (Wood–Fire–Earth–Metal–Water) bound by generative & regulatory cycles." },
    { zh: "君子", py: "jūnzǐ", hv: "Quân Tử", id: "junzi", defVi: "Hình mẫu con người tự chủ đạo đức, tu thân tề gia, trọng nghĩa khinh lợi của Nho học.", defEn: "Confucian moral exemplar uniting self-cultivation, learning, and civic duty." },
    { zh: "中庸", py: "zhōngyōng", hv: "Trung Dung", id: "zhongyong", defVi: "Đạo giữ thăng bằng chuẩn mực không thái quá hay bất cập, xuất phát từ Chu Dịch & Tứ Thư.", defEn: "Doctrine of measured equilibrium avoiding both excess and deficiency." },
    { zh: "无为", py: "wúwéi", hv: "Vô Vi", id: "wuwei", defVi: "Hành xử thuận theo tự nhiên, không cưỡng ép can thiệp thô bạo của Đạo gia.", defEn: "Daoist effortless alignment with organic rhythms without coercive force." }
  ];

  const TRIANGULATION_LEDGERS = {
    "history": {
      titleVi: "Kho Đối Chứng Sử Liệu 3 Nguồn · Giao Lưu & Tự Chủ Hoa – Việt",
      titleEn: "Three-Source Historical Triangulation Ledger · Sino–Vietnamese Record",
      src1LabelVi: "1. Chính sử Trung Hoa (Nhị Thập Tứ Sử)",
      src1LabelEn: "1. Chinese Imperial Chronicles (Ershisi Shi)",
      src1BodyVi: "《Sử Ký》, 《Hậu Hán Thư》, 《Tống Sử》, 《Minh Thực Lục》 ghi nhận hệ thống quận huyện, giao thương triều cống – hải thương Tuyền Châu & Quảng Châu cùng các đoàn sứ bộ Thăng Long sang Yên Kinh.",
      src1BodyEn: "Shiji, Houhanshu, Songshi, and Ming Shilu log administrative frontiers, maritime trade through Quanzhou/Guangzhou, and diplomatic envoy missions from Thang Long.",
      src2LabelVi: "2. Chính sử Việt Nam (Đại Việt Sử Ký Toàn Thư)",
      src2LabelEn: "2. Vietnamese Chronicles (Dai Viet Su Ky Toan Thu)",
      src2BodyVi: "Khẳng định mạch tự chủ liên tục từ Hai Bà Trưng, Lý Bí (Vạn Xuân), Ngô Quyền (938) tới Văn Miếu (1070), khoa cử Đại Việt (1075) và áng hùng văn 《Bình Ngô Đại Cáo》 (1428).",
      src2BodyEn: "Documents continuous autonomy from Ngo Quyen (938), independent Ly–Tran statecraft, Temple of Literature exams (1075), and sovereign diplomatic equilibrium.",
      src3LabelVi: "3. Di vật Khảo cổ & Hồ sơ Bảo tàng Độc lập",
      src3LabelEn: "3. Archaeological & Institutional Evidence",
      src3BodyVi: "Trống đồng Đông Sơn, gạch chữ Hán Hoàng thành Thăng Long, 82 Bia Tiến sĩ Hà Nội, tàu đắm Cù Lao Chàm (gốm hoa lam Chu Đậu TK XV) chứng minh giao thương song phương và sức sáng tạo bản địa rõ nét.",
      src3BodyEn: "Dong Son drums, Thang Long Citadel ceramics, 82 Hanoi Doctoral Steles, and the Cu Lao Cham wreck corroborate mutual exchange alongside distinct indigenous craft."
    },
    "sino-vietnam": {
      titleVi: "Kho Đối Chứng Đa Góc Nhìn · Văn Tự, Điển Chế & Thương Mại 2026",
      titleEn: "Three-Source Comparative Ledger · Script, Institutions & 2026 Trade",
      src1LabelVi: "1. Dữ liệu & Điển chế Trung Quốc (Thiết Vận · GACC)",
      src1LabelEn: "1. Chinese Linguistic & GACC Official Data",
      src1BodyVi: "Vận thư 《Thiết Vận》 (601) cho thấy âm đọc Hán cổ tại Trường An; Tổng cục Hải quan TQ (GACC) công bố kim ngạch Việt–Trung 9 tháng đầu 2026 đạt $296,3 tỷ USD.",
      src1BodyEn: "Qieyun (601 CE) preserves Middle Chinese phonology; GACC 9M 2026 bilateral trade statistics record $296.3 billion USD in cross-border volume.",
      src2LabelVi: "2. Lưu trữ Văn hiến & Số liệu Việt Nam (Chữ Nôm · Hải quan)",
      src2LabelEn: "2. Vietnamese Heritage & Customs Archive",
      src2BodyVi: "Bảo tồn hệ âm Hán–Việt cổ sắc nét nhất Đông Á, sáng tạo chữ Nôm & thể thơ Lục bát; theo dõi dữ liệu xuất khẩu nông sản chính ngạch và máy móc công nghiệp qua Hữu Nghị – Lào Cai.",
      src2BodyEn: "Preserves archaic Middle Chinese tones/codas alongside indigenous Chu Nom; bilateral agricultural/industrial clearance moves smoothly through Friendship Pass & Lao Cai.",
      src3LabelVi: "3. Khảo chứng Quốc tế & Công báo Pháp lý (UNESCO / ACFTA 3.0)",
      src3LabelEn: "3. International & Treaty Benchmarks (UNESCO / ACFTA 3.0)",
      src3BodyVi: "82 Bia Tiến sĩ Hà Nội (UNESCO 2010), Hoàng thành Thăng Long & Cố cung Bắc Kinh; Nghị định thư nâng cấp ACFTA 3.0 ký ngày 28/10/2025 bổ sung 9 chương Kinh tế Số – Chuỗi cung ứng Xanh.",
      src3BodyEn: "UNESCO World Heritage inscriptions alongside the Oct 28, 2025 ACFTA 3.0 Upgrade Protocol establishing digital, green, and supply-chain connectivity."
    }
  };

  function getHexResult() {
    const l = state.hexLines;
    const lowerBTT = `${l[0]}${l[1]}${l[2]}`;
    const upperBTT = `${l[3]}${l[4]}${l[5]}`;
    const nucLowerBTT = `${l[1]}${l[2]}${l[3]}`;
    const nucUpperBTT = `${l[2]}${l[3]}${l[4]}`;
    const hex = HEX_MAP[`${lowerBTT}_${upperBTT}`] || HEX_MAP["111_111"];
    const nucHex = HEX_MAP[`${nucLowerBTT}_${nucUpperBTT}`];
    const oppLower = l.slice(0, 3).map((b) => (b ? 0 : 1)).join("");
    const oppUpper = l.slice(3, 6).map((b) => (b ? 0 : 1)).join("");
    const oppHex = HEX_MAP[`${oppLower}_${oppUpper}`];
    return {
      lower: TRIGRAMS_BTT[lowerBTT],
      upper: TRIGRAMS_BTT[upperBTT],
      hex,
      nucHex,
      oppHex
    };
  }

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  window.CCE_LABS_EXT = {
    state,

    renderPentatonicResonator(enMode) {
      const activeObj = PENTATONIC_NOTES.find((n) => n.id === state.activeNote) || PENTATONIC_NOTES[0];
      const isBell = state.synthTimbre === "bianzhong";
      return `
        <section class="card" id="lab-pentatonic" style="margin:1.75rem 0;padding:1.25rem 1.35rem;border-top:4px solid var(--antique-gold);background:var(--bg-paper);">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">
            <div>
              <div class="editorial-kicker" style="color:var(--antique-gold);margin-bottom:0.2rem;">${enMode ? "WEB AUDIO ACOUSTIC LAB · FIVE-TONE PENTATONIC SYSTEM" : "PHÒNG LAB ÂM HỌC NGŨ ÂM ĐÔNG Á · CỔ CẦM & BIÊN CHUNG TĂNG HẦU ẤT (433 TCN)"}</div>
              <h3 style="margin:0;font-family:var(--font-editorial);font-size:1.32rem;">${enMode ? "Play the Pure Fifth Pentatonic Scale: Gong, Shang, Jue, Zhi & Yu" : "Gảy Thử Thang Ngũ Âm Chuẩn Tỷ Lệ Thuần Khiết (Cung – Thương – Giác – Chủy – Vũ)"}</h3>
            </div>
            <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
              <button type="button" class="btn ${isBell ? "btn-primary" : "btn-secondary"} btn-sm" data-action="lab-synth-timbre" data-timbre="bianzhong">${enMode ? "Bianzhong Bronze Bell" : "Âm sắc Biên Chung (433 TCN)"}</button>
              <button type="button" class="btn ${!isBell ? "btn-jade" : "btn-secondary"} btn-sm" data-action="lab-synth-timbre" data-timbre="guqin">${enMode ? "Guqin Silk String" : "Âm sắc Cổ Cầm (Dây Tơ)"}</button>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:0.45rem;margin-bottom:0.85rem;">
            ${PENTATONIC_NOTES.map((n) => {
              const isAct = n.id === state.activeNote;
              const enName = n.id === "biangong" ? "Bian Gong" : n.id.charAt(0).toUpperCase() + n.id.slice(1);
              return `
                <button type="button" class="card" data-action="lab-play-note" data-note="${n.id}" data-hz="${n.hz}" style="padding:0.75rem 0.4rem;text-align:center;cursor:pointer;border:1px solid ${isAct ? "var(--imperial-red)" : "var(--hairline)"};border-top:3px solid ${isAct ? "var(--imperial-red)" : "var(--antique-gold)"};background:${isAct ? "var(--bg-accent-soft)" : "var(--bg-surface)"};">
                  <div class="hanzi" style="font-size:1.45rem;font-weight:800;color:var(--imperial-red);line-height:1.15;">${n.zh}</div>
                  <div style="font-size:0.78rem;font-weight:700;margin-top:0.2rem;">${enMode ? `${enName} (${n.pinyin})` : `${n.hv} (${n.pinyin})`}</div>
                  <div style="font-size:0.68rem;color:var(--text-muted);font-family:var(--font-mono);margin-top:0.12rem;">${n.hz} Hz · ${n.ratio}</div>
                  <div style="font-size:0.67rem;color:var(--jade-green);font-weight:700;margin-top:0.1rem;">${n.western}</div>
                </button>
              `;
            }).join("")}
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.65rem;padding:0.75rem 0.9rem;border-left:3px solid var(--imperial-red);background:var(--bg-surface);">
            <div style="font-size:0.84rem;line-height:1.5;max-width:680px;">
              <strong style="color:var(--imperial-red);">${activeObj.zh} (${enMode ? activeObj.pinyin : activeObj.hv} · ${activeObj.ratio}):</strong> ${enMode ? activeObj.roleEn : activeObj.roleVi}
            </div>
            <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-primary btn-sm" data-action="lab-play-motif" data-motif="gaoshan">${enMode ? "Play 'Flowing Water' Motif" : "Nghe Khúc 'Cao Sơn Lưu Thủy'"}</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="lab-play-motif" data-motif="yayue">${enMode ? "Play Court Yayue Motif" : "Nghe Nhã Nhạc Cung Đình"}</button>
            </div>
          </div>
        </section>
      `;
    },

    renderYijingHexagramLab(enMode) {
      const res = getHexResult();
      const h = res.hex;
      const ordNamesVi = ["Sơ Hào (1 - Đáy)", "Hào Hai (2)", "Hào Ba (3)", "Hào Tư (4)", "Hào Năm (5 - Quân vị)", "Thượng Hào (6 - Đỉnh)"];
      const ordNamesEn = ["Line 1 (Base)", "Line 2", "Line 3", "Line 4", "Line 5 (Center)", "Line 6 (Top)"];
      return `
        <section class="card" id="lab-yijing-matrix" style="margin:1.75rem 0;padding:1.25rem 1.35rem;border-top:4px solid var(--ink-primary);background:var(--bg-paper);">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">
            <div>
              <div class="editorial-kicker" style="color:var(--imperial-red);margin-bottom:0.2rem;">${enMode ? "PHILOSOPHICAL COMBINATORICS · 64 KING WEN HEXAGRAM DECODER" : "PHÒNG LAB BIẾN DỊCH HỌC · BẢNG GHÉP 6 HÀO CHU DỊCH (64 QUẺ VĂN VƯƠNG)"}</div>
              <h3 style="margin:0;font-family:var(--font-editorial);font-size:1.32rem;">${enMode ? "Flip Any Yin (⚋) / Yang (⚊) Line to Inspect Structure, Nuclear & Opposite Hexagrams" : "Bấm Lật Từng Hào Âm (⚋) / Dương (⚊) Từ Dưới Lên Để Giải Mã Cấu Trúc 64 Quẻ"}</h3>
            </div>
            <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-secondary btn-sm" data-action="lab-hex-preset" data-preset="111111">${enMode ? "#01 Qian (Pure Yang)" : "#01 Càn"}</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="lab-hex-preset" data-preset="111000">${enMode ? "#11 Tai (Harmony)" : "#11 Thái"}</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="lab-hex-preset" data-preset="101010">${enMode ? "#63 Jiji" : "#63 Ký Tế"}</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="lab-hex-preset" data-preset="001000">${enMode ? "#15 Qian (Modesty)" : "#15 Khiêm"}</button>
            </div>
          </div>

          <div class="grid grid-2" style="gap:1.1rem;align-items:stretch;">
            <div style="border:1px solid var(--hairline);padding:0.9rem 1rem;background:var(--bg-surface);display:flex;flex-direction:column;justify-content:center;gap:0.42rem;">
              ${[5, 4, 3, 2, 1, 0].map((idx) => {
                const isYang = state.hexLines[idx] === 1;
                return `
                  <button type="button" data-action="lab-hex-toggle" data-idx="${idx}" style="display:flex;align-items:center;gap:0.75rem;width:100%;padding:0.42rem 0.65rem;background:var(--bg-paper);border:1px solid ${idx >= 3 ? "var(--border-gold)" : "var(--hairline)"};cursor:pointer;text-align:left;">
                    <span style="font-size:0.72rem;font-family:var(--font-mono);color:var(--text-muted);width:128px;flex-shrink:0;">${enMode ? ordNamesEn[idx] : ordNamesVi[idx]}</span>
                    <span style="flex:1;display:flex;align-items:center;gap:14px;height:14px;">
                      ${isYang
                        ? `<span style="display:block;width:100%;height:10px;background:var(--imperial-red);"></span>`
                        : `<span style="display:block;width:44%;height:10px;background:var(--ink-primary);"></span><span style="display:block;width:44%;height:10px;background:var(--ink-primary);"></span>`}
                    </span>
                    <span style="font-size:0.72rem;font-weight:700;width:54px;text-align:right;color:${isYang ? "var(--imperial-red)" : "var(--ink-primary)"};">${isYang ? (enMode ? "Yang ⚊" : "Dương ⚊") : (enMode ? "Yin ⚋" : "Âm ⚋")}</span>
                  </button>
                `;
              }).join("")}
            </div>

            <div class="card" style="padding:1rem 1.1rem;border-left:4px solid var(--imperial-red);background:var(--bg-surface);display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:0.4rem;">
                  <span class="badge badge-gold">${enMode ? `HEXAGRAM #${String(h.num).padStart(2, "0")}` : `QUẺ SỐ #${String(h.num).padStart(2, "0")} · VĂN VƯƠNG`}</span>
                  <span class="hanzi" style="font-size:1.35rem;font-weight:800;color:var(--imperial-red);">${h.zh} (${h.py})</span>
                </div>
                <h4 style="margin:0.35rem 0 0.45rem;font-family:var(--font-editorial);font-size:1.25rem;">${enMode ? h.en : h.vi}</h4>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.45rem;font-size:0.78rem;margin-bottom:0.65rem;">
                  <div style="padding:0.4rem 0.55rem;border:1px solid var(--hairline);background:var(--bg-paper);">
                    <strong>${enMode ? "Upper Trigram:" : "Thượng Quái (Ngoại):"}</strong> ${res.upper.sym} ${res.upper.zh} (${enMode ? res.upper.en : res.upper.vi})
                  </div>
                  <div style="padding:0.4rem 0.55rem;border:1px solid var(--hairline);background:var(--bg-paper);">
                    <strong>${enMode ? "Lower Trigram:" : "Hạ Quái (Nội):"}</strong> ${res.lower.sym} ${res.lower.zh} (${enMode ? res.lower.en : res.lower.vi})
                  </div>
                </div>
                <p style="font-size:0.86rem;line-height:1.58;margin:0 0 0.65rem;color:var(--text-secondary);">
                  <strong>${enMode ? "Ethical & Strategic Core:" : "Triết lý Biến dịch & Quản trị:"}</strong> ${enMode ? h.descEn : h.descVi}
                </p>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:0.5rem;font-size:0.76rem;border-top:1px dashed var(--hairline);padding-top:0.5rem;color:var(--text-muted);">
                ${res.nucHex ? `<span><strong>${enMode ? "Nuclear (Hu):" : "Quẻ Hỗ (2-3-4-5):"}</strong> #${res.nucHex.num} ${res.nucHex.zh} (${enMode ? res.nucHex.en : res.nucHex.vi})</span>` : ""}
                ${res.oppHex ? `<span>· <strong>${enMode ? "Opposite:" : "Thác Quái (Đảo Âm Dương):"}</strong> #${res.oppHex.num} ${res.oppHex.zh} (${enMode ? res.oppHex.en : res.oppHex.vi})</span>` : ""}
              </div>
            </div>
          </div>
        </section>
      `;
    },

    renderSyncedDynastyTimeline(periods, activePeriodId, enMode) {
      const list = Array.isArray(periods) ? periods : [];
      const curP = list.find((p) => p.id === activePeriodId) || list[0];
      const sync = curP ? (SYNC_VN_MAP[curP.id] || {}) : {};
      return `
        <section class="card mb-2" id="sync-dynasty-timeline" style="padding:1.15rem 1.25rem;border-top:4px solid var(--jade-green);background:var(--bg-paper);">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
            <div>
              <div class="editorial-kicker" style="color:var(--jade-green);margin-bottom:0.15rem;">${enMode ? "4,000-YEAR SYNCHRONIZED CHRONOLOGY · CHINA ↔ VIETNAM" : "TRỤC THỜI GIAN ĐỒNG BỘ 4.000 NĂM · TRUNG HOA ⇄ ĐẠI VIỆT (14 TRIỀU ĐẠI)"}</div>
              <h3 style="margin:0;font-family:var(--font-editorial);font-size:1.28rem;">${enMode ? "Select Any Epoch to Compare Synchronous Vietnamese Polities Side-by-Side" : "Chọn Mốc Niên Đại Để Đối Chiếu Trực Tiếp Triều Đại Việt Nam Cùng Thời"}</h3>
            </div>
            <span class="badge badge-jade">${enMode ? "Synchronized View" : "Đối sánh Song hành"}</span>
          </div>

          <div style="display:flex;overflow-x:auto;gap:0.35rem;padding-bottom:0.55rem;border-bottom:1px solid var(--hairline);margin-bottom:0.85rem;">
            ${list.map((p, idx) => {
              const isAct = p.id === activePeriodId;
              const s = SYNC_VN_MAP[p.id] || {};
              return `
                <button type="button" data-action="select-period" data-id="${p.id}" style="min-width:142px;text-align:left;padding:0.45rem 0.6rem;border:1px solid ${isAct ? "var(--imperial-red)" : "var(--hairline)"};border-top:3px solid ${isAct ? "var(--imperial-red)" : "var(--jade-green)"};background:${isAct ? "var(--bg-accent-soft)" : "var(--bg-surface)"};cursor:pointer;flex-shrink:0;">
                  <div style="font-size:0.68rem;font-family:var(--font-mono);color:var(--text-muted);">${String(idx + 1).padStart(2, "0")} · ${esc(enMode ? (p.spanEn || p.span) : p.span)}</div>
                  <div style="font-size:0.82rem;font-weight:700;color:${isAct ? "var(--imperial-red)" : "var(--ink-primary)"};margin:0.1rem 0;">${esc(enMode ? p.nameEn : p.nameVi)}</div>
                  <div style="font-size:0.72rem;color:var(--jade-green);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">⇄ ${esc(enMode ? (s.vnEn || "Vietnam") : (s.vnVi || "Việt Nam"))}</div>
                </button>
              `;
            }).join("")}
          </div>

          ${curP ? `
            <div class="grid grid-2" style="gap:0.85rem;">
              <div class="flashcard-layer" style="margin:0;border-left:3px solid var(--imperial-red);">
                <div style="font-size:0.72rem;font-weight:800;color:var(--imperial-red);text-transform:uppercase;">${enMode ? "China Epoch" : "Triều đại / Thời kỳ Trung Hoa"}</div>
                <strong style="font-size:1rem;">${esc(enMode ? curP.nameEn : curP.nameVi)} (${esc(curP.nameZh)}) · ${esc(enMode ? (curP.spanEn || curP.span) : curP.span)}</strong>
                <div style="font-size:0.83rem;color:var(--text-secondary);margin-top:0.3rem;">${esc((enMode ? (curP.overviewEn || curP.overview) : curP.overview).slice(0, 210))}...</div>
              </div>
              <div class="flashcard-layer" style="margin:0;background:var(--bg-jade-soft);border-left:3px solid var(--jade-green);">
                <div style="font-size:0.72rem;font-weight:800;color:var(--jade-green);text-transform:uppercase;">${enMode ? "Synchronous Vietnam Polity" : "Triều đại / Nhà nước Việt Nam Đồng Thời"}</div>
                <strong style="font-size:1rem;">${esc(enMode ? (sync.vnEn || "Dai Viet") : (sync.vnVi || "Đại Việt"))}</strong>
                <div style="font-size:0.83rem;color:var(--text-secondary);margin-top:0.3rem;">${esc(enMode ? (sync.noteEn || "") : (sync.noteVi || ""))}</div>
              </div>
            </div>
          ` : ""}
        </section>
      `;
    },

    renderChuNomParallelReader(enMode) {
      const doc = NOM_TEXTS.find((d) => d.id === state.nomDocId) || NOM_TEXTS[0];
      const gIdx = Math.min(state.nomGlyphIdx || 0, Math.max(0, doc.glyphs.length - 1));
      const activeG = doc.glyphs[gIdx] || doc.glyphs[0];
      return `
        <section class="card" id="chunom-parallel-reader" style="margin:2.25rem 0;padding:1.25rem 1.35rem;border-top:4px solid var(--imperial-red);background:var(--bg-paper);">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">
            <div>
              <div class="editorial-kicker" style="color:var(--imperial-red);margin-bottom:0.2rem;">${enMode ? "INTERACTIVE SINO–VIETNAMESE PARALLEL TEXT & CHU NOM LAB" : "BẢNG ĐỌC SONG HÀNH HÁN TỰ ⇄ CHỮ NÔM ⇄ QUỐC NGỮ (CHẠM TỪNG CHỮ ĐỂ GIẢI MÃ)"}</div>
              <h3 style="margin:0;font-family:var(--font-editorial);font-size:1.32rem;">${enMode ? doc.titleEn : doc.titleVi}</h3>
            </div>
            <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
              ${NOM_TEXTS.map((d) => `
                <button type="button" class="filter-pill ${d.id === doc.id ? "active" : ""}" data-action="lab-nom-doc" data-doc="${d.id}">${enMode ? d.titleEn.split("—")[0].trim() : d.titleVi.split("(")[0].trim()}</button>
              `).join("")}
            </div>
          </div>

          <div class="grid grid-2" style="gap:1rem;align-items:start;">
            <div style="padding:1rem;border:1px solid var(--hairline);background:var(--bg-surface);">
              <span class="badge badge-gold" style="margin-bottom:0.45rem;">${enMode ? doc.scriptModeEn : doc.scriptModeVi}</span>
              <div class="hanzi" style="font-size:1.55rem;line-height:1.65;color:var(--ink-primary);font-weight:700;margin-bottom:0.45rem;">${esc(doc.lineOriginal)}</div>
              <div style="font-size:0.94rem;color:var(--jade-green);font-weight:700;margin-bottom:0.65rem;">${esc(enMode ? doc.translitEn : doc.translitVi)}</div>
              <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.35rem;font-weight:700;">${enMode ? "Tap any annotated character below:" : "Chạm từng chữ để soi cấu tạo Nôm / Âm cổ Thiết Vận:"}</div>
              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
                ${doc.glyphs.map((g, i) => `
                  <button type="button" data-action="lab-nom-glyph" data-idx="${i}" style="padding:0.42rem 0.7rem;border:1px solid ${i === gIdx ? "var(--imperial-red)" : "var(--hairline)"};background:${i === gIdx ? "var(--imperial-red)" : "var(--bg-paper)"};color:${i === gIdx ? "#FFFFFF" : "var(--ink-primary)"};cursor:pointer;">
                    <span class="hanzi" style="font-size:1.35rem;font-weight:800;display:block;line-height:1.1;">${esc(g.glyph)}</span>
                    <span style="font-size:0.72rem;font-weight:600;">${esc(g.quocNgu)}</span>
                  </button>
                `).join("")}
              </div>
            </div>

            ${activeG ? `
              <div class="card" style="padding:1rem 1.1rem;border-left:4px solid var(--jade-green);background:var(--bg-jade-soft);">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.35rem;">
                  <span class="hanzi" style="font-size:2.3rem;font-weight:800;color:var(--imperial-red);line-height:1;">${esc(activeG.glyph)}</span>
                  <div style="text-align:right;font-size:0.8rem;">
                    <div><strong>Quốc ngữ:</strong> ${esc(activeG.quocNgu)}</div>
                    <div><strong>Pinyin:</strong> ${esc(activeG.pinyin)}</div>
                    <div style="color:var(--jade-green);"><strong>${esc(activeG.hv)}</strong></div>
                  </div>
                </div>
                <div style="font-size:0.84rem;line-height:1.55;margin-bottom:0.4rem;">
                  <strong>${enMode ? "Structural Logic:" : "Nguyên lý Cấu tạo Văn tự:"}</strong> ${esc(enMode ? activeG.methodEn : activeG.methodVi)}
                </div>
                <div style="font-size:0.82rem;line-height:1.5;color:var(--text-secondary);border-top:1px dashed var(--hairline);padding-top:0.35rem;">
                  <strong>${enMode ? "Historical Phonology:" : "Ngữ âm Lịch sử (Thiết Vận 601 → Việt–Hán):"}</strong> ${esc(activeG.mc)}
                </div>
              </div>
            ` : ""}
          </div>
        </section>
      `;
    },

    renderRealScaleRuler(item, enMode) {
      if (!item) return "";
      const dimRaw = String((enMode && item.dimensionsEn) || item.dimensions || "");
      const mMeters = dimRaw.match(/(\d+(?:[.,]\d+)?)\s*m\b/i);
      const cmMatches = Array.from(dimRaw.matchAll(/(\d+(?:[.,]\d+)?)\s*cm/gi)).map((m) => parseFloat(m[1].replace(",", ".")));
      const kgMatch = dimRaw.match(/(\d+(?:[.,]\d+)?)\s*kg/i);
      let maxCm = cmMatches.length ? Math.max(...cmMatches) : (mMeters ? parseFloat(mMeters[1].replace(",", ".")) * 100 : 0);
      const weightKg = kgMatch ? parseFloat(kgMatch[1].replace(",", ".")) : 0;
      if (!maxCm && !weightKg) return "";

      const refCm = maxCm >= 260 ? 550 : 170; // Compare scrolls >=2.6m vs 5.5m gallery table, others vs 170cm human stature
      const pctItem = maxCm ? Math.min(100, Math.max(4, Math.round((maxCm / refCm) * 100))) : 0;
      const pctHuman = maxCm >= 260 ? Math.round((170 / 550) * 100) : 100;
      const refLabel = maxCm >= 260
        ? (enMode ? "Gallery Reference: 5.5 m scroll span vs. 1.70 m human arm span" : "Thước chuẩn Bảo tàng: Chiều dài 5,5 m vs. Sải tay người trưởng thành 1,70 m")
        : (enMode ? "Human Reference: 170 cm adult stature" : "Thước đối chiếu: Tầm vóc người trưởng thành 170 cm");

      return `
        <div style="margin:0.75rem 0;padding:0.7rem 0.85rem;border:1px solid var(--hairline);background:var(--bg-paper);">
          <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.35rem;">
            <span style="font-size:0.72rem;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--antique-gold);">
              ${enMode ? "PHYSICAL ARCHIVAL SCALE RULER" : "THƯỚC ĐO TỶ LỆ THỰC NGOÀI ĐỜI"}
            </span>
            <span style="font-size:0.74rem;font-family:var(--font-mono);color:var(--text-muted);">${esc(dimRaw)}</span>
          </div>
          ${maxCm ? `
            <div style="display:flex;flex-direction:column;gap:0.28rem;">
              <div style="display:flex;align-items:center;gap:0.5rem;">
                <span style="font-size:0.72rem;width:110px;color:var(--imperial-red);font-weight:700;">${enMode ? "Object Span:" : "Hiện vật:"} ${maxCm} cm</span>
                <div style="flex:1;height:8px;background:var(--bg-surface);border:1px solid var(--hairline);">
                  <div style="width:${pctItem}%;height:100%;background:var(--imperial-red);"></div>
                </div>
              </div>
              <div style="display:flex;align-items:center;gap:0.5rem;">
                <span style="font-size:0.72rem;width:110px;color:var(--jade-green);">${enMode ? "Human (170 cm):" : "Người (170 cm):"}</span>
                <div style="flex:1;height:6px;background:var(--bg-surface);border:1px solid var(--hairline);">
                  <div style="width:${pctHuman}%;height:100%;background:var(--jade-green);"></div>
                </div>
              </div>
            </div>
          ` : ""}
          ${weightKg ? `<div style="font-size:0.74rem;margin-top:0.3rem;color:var(--text-primary);"><strong>${enMode ? "Mass Comparison:" : "Đối chiếu khối lượng:"}</strong> ${weightKg} kg (${(weightKg / 70).toFixed(1)}× ${enMode ? "an adult weight" : "trọng lượng một người lớn"})</div>` : ""}
          <div style="font-size:0.7rem;color:var(--text-muted);margin-top:0.2rem;">${refLabel}</div>
        </div>
      `;
    },

    renderTriangulationLedger(key, enMode) {
      const l = TRIANGULATION_LEDGERS[key] || TRIANGULATION_LEDGERS.history;
      return `
        <section class="card" style="margin:1.75rem 0;padding:1.2rem 1.3rem;border-top:4px solid var(--ink-primary);background:var(--bg-paper);">
          <div class="editorial-kicker" style="color:var(--imperial-red);margin-bottom:0.2rem;">${enMode ? "THREE-SOURCE TRIANGULATION LEDGER" : "KHO TRÍCH LỤC ĐỐI CHỨNG ĐA GÓC NHÌN (3 NGUỒN ĐỘC LẬP)"}</div>
          <h3 style="margin:0 0 0.85rem;font-family:var(--font-editorial);font-size:1.28rem;">${esc(enMode ? l.titleEn : l.titleVi)}</h3>
          <div class="grid grid-3" style="gap:0.75rem;">
            <div class="flashcard-layer" style="margin:0;border-left:3px solid var(--imperial-red);">
              <strong style="font-size:0.82rem;color:var(--imperial-red);">${esc(enMode ? l.src1LabelEn : l.src1LabelVi)}</strong>
              <p style="font-size:0.81rem;line-height:1.55;margin:0.35rem 0 0;">${esc(enMode ? l.src1BodyEn : l.src1BodyVi)}</p>
            </div>
            <div class="flashcard-layer" style="margin:0;border-left:3px solid var(--jade-green);background:var(--bg-jade-soft);">
              <strong style="font-size:0.82rem;color:var(--jade-green);">${esc(enMode ? l.src2LabelEn : l.src2LabelVi)}</strong>
              <p style="font-size:0.81rem;line-height:1.55;margin:0.35rem 0 0;">${esc(enMode ? l.src2BodyEn : l.src2BodyVi)}</p>
            </div>
            <div class="flashcard-layer" style="margin:0;border-left:3px solid var(--antique-gold);">
              <strong style="font-size:0.82rem;color:var(--antique-gold);">${esc(enMode ? l.src3LabelEn : l.src3LabelVi)}</strong>
              <p style="font-size:0.81rem;line-height:1.55;margin:0.35rem 0 0;">${esc(enMode ? l.src3BodyEn : l.src3BodyVi)}</p>
            </div>
          </div>
        </section>
      `;
    },

    injectInlineClassicalGloss(htmlStr) {
      if (!htmlStr || typeof htmlStr !== "string") return htmlStr;
      // Replace exact classical Hanzi compounds ONLY outside HTML tags (<...>) and outside <button>/<a ...>
      const tokens = INLINE_GLOSS_TERMS.map((t) => t.zh).sort((a, b) => b.length - a.length);
      const tokenRe = new RegExp(`(${tokens.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
      const parts = htmlStr.split(/(<[^>]+>)/g);
      let inAnchorOrBtn = 0;
      return parts
        .map((seg) => {
          if (seg.startsWith("<")) {
            if (/^<(?:a|button)\b/i.test(seg)) inAnchorOrBtn++;
            else if (/^<\/(?:a|button)>/i.test(seg) && inAnchorOrBtn > 0) inAnchorOrBtn--;
            return seg;
          }
          if (inAnchorOrBtn > 0) return seg;
          return seg.replace(tokenRe, (m) => `<button type="button" class="inline-gloss-chip" data-action="open-inline-gloss" data-term="${m}" title="Click for Classical Gloss & Script Evolution">${m}</button>`);
        })
        .join("");
    },

    renderInlineGlossModal(enMode) {
      if (!state.activeGlossTerm) return "";
      const g = INLINE_GLOSS_TERMS.find((t) => t.zh === state.activeGlossTerm);
      if (!g) return "";
      const evol = window.CCE_LABS && typeof window.CCE_LABS.renderHanziEvolutionStrip === "function"
        ? window.CCE_LABS.renderHanziEvolutionStrip({ hanzi: g.zh }, enMode)
        : "";
      return `
        <div class="modal-backdrop open" data-action="close-inline-gloss" style="z-index:970;">
          <div class="modal-panel" onclick="event.stopPropagation()" style="max-width:560px;" role="dialog" aria-modal="true">
            <button type="button" class="modal-close-btn" data-action="close-inline-gloss" aria-label="Close">✕</button>
            <div class="editorial-kicker" style="color:var(--imperial-red);">${enMode ? "INLINE CLASSICAL GLOSS & EVOLUTION" : "CHÚ GIẢI HÁN CỔ NỘI TUYẾN"}</div>
            <div style="display:flex;align-items:baseline;gap:0.75rem;flex-wrap:wrap;margin:0.35rem 0 0.65rem;">
              <span class="hanzi" style="font-size:2rem;font-weight:800;color:var(--imperial-red);">${esc(g.zh)}</span>
              <span class="pinyin" style="font-weight:700;">${esc(g.py)}</span>
              <span class="badge badge-jade">${esc(g.hv)}</span>
            </div>
            <p style="font-size:0.9rem;line-height:1.6;margin:0 0 0.85rem;">${esc(enMode ? g.defEn : g.defVi)}</p>
            ${evol}
          </div>
        </div>
      `;
    },

    handleAction(action, target) {
      if (action === "lab-synth-timbre") {
        state.synthTimbre = target.getAttribute("data-timbre") || "bianzhong";
        return true;
      }
      if (action === "lab-play-note") {
        state.activeNote = target.getAttribute("data-note") || "gong";
        const hz = Number(target.getAttribute("data-hz") || 261.63);
        playTone(hz, 1.45, 0);
        return true;
      }
      if (action === "lab-play-motif") {
        playMotif(target.getAttribute("data-motif") || "gaoshan");
        return false;
      }
      if (action === "lab-hex-toggle") {
        const idx = Number(target.getAttribute("data-idx") || 0);
        if (idx >= 0 && idx < 6) state.hexLines[idx] = state.hexLines[idx] ? 0 : 1;
        return true;
      }
      if (action === "lab-hex-preset") {
        const raw = target.getAttribute("data-preset") || "111111";
        state.hexLines = raw.split("").slice(0, 6).map((c) => (c === "1" ? 1 : 0));
        return true;
      }
      if (action === "lab-nom-doc") {
        state.nomDocId = target.getAttribute("data-doc") || "kieu";
        state.nomGlyphIdx = 0;
        return true;
      }
      if (action === "lab-nom-glyph") {
        state.nomGlyphIdx = Number(target.getAttribute("data-idx") || 0);
        return true;
      }
      if (action === "open-inline-gloss") {
        state.activeGlossTerm = target.getAttribute("data-term") || null;
        return true;
      }
      if (action === "close-inline-gloss") {
        state.activeGlossTerm = null;
        return true;
      }
      return false;
    }
  };
})();
