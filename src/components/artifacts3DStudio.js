// ============================================================================
// SINGLE ACTIVE WEBGL CONTEXT MANAGER & 3D ARTIFACT / TIANTAN STUDIO (WAVE 3.3)
// Ensures 0 WebGL context leaks when navigating across 3D scenes & pages.
// ============================================================================

(function () {
  "use strict";

  // Global Single Active WebGL Context Manager
  var registry = {};
  var activeId = null;

  function registerWebGL(id, disposeFn) {
    if (activeId && activeId !== id && typeof registry[activeId] === "function") {
      try {
        registry[activeId]();
      } catch (_e) {}
    }
    registry[id] = disposeFn;
    activeId = id;
  }

  function disposeAllWebGL(exceptId) {
    Object.keys(registry).forEach(function (k) {
      if (exceptId && k === exceptId) return;
      if (typeof registry[k] === "function") {
        try {
          registry[k]();
        } catch (_e) {}
      }
      delete registry[k];
    });
    activeId = exceptId && registry[exceptId] ? exceptId : null;
  }

  window.CCE_WEBGL_MGR = {
    register: registerWebGL,
    disposeAll: disposeAllWebGL,
    getActiveId: function () { return activeId; }
  };

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  var ARTIFACTS_3D_LIST = [
    {
      id: "houmuwu-ding",
      titleVi: "Hậu Mẫu Mậu Đỉnh (Thương hậu kỳ)",
      titleEn: "Houmuwu Bronze Ding Cauldron",
      titleZh: "后母戊鼎",
      eraVi: "~1250–1046 TCN · Ân Khư, Hà Nam",
      eraEn: "Late Shang (~1250–1046 BCE) · Yinxu",
      noteVi: "Đỉnh đồng nặng 832,84 kg đúc bằng khuôn đất sét ghép khối — đỉnh cao lễ khí vương quyền nhà Thương.",
      noteEn: "832.84 kg piece-mold cast Shang ritual vessel embodying royal ancestral legitimacy."
    },
    {
      id: "liangzhu-yucong",
      titleVi: "Ngọc Tông Lương Chử (Thiên Viên Địa Phương)",
      titleEn: "Liangzhu Carved Jade Cong",
      titleZh: "良渚神徽玉琮",
      eraVi: "~3300–2300 TCN · Chiết Giang",
      eraEn: "Liangzhu Culture (~3300–2300 BCE)",
      noteVi: "Ống trụ rỗng tròn trong lòng khối vuông ngoài, chạm khắc thần huy siêu vi với đường nét mảnh 0,1 mm.",
      noteEn: "Cylindrical bore within squared exterior planes expressing 'Round Heaven, Square Earth'."
    },
    {
      id: "ngoc-lu-bronze-drum",
      titleVi: "Trống Đồng Ngọc Lũ (Đối thoại Đông Sơn – Điền)",
      titleEn: "Ngoc Lu Bronze Drum (Dong Son Heritage)",
      titleZh: "玉缕铜鼓",
      eraVi: "~500–200 TCN · Bảo tàng LSQG Việt Nam",
      eraEn: "Dong Son (~500–200 BCE) · Vietnam",
      noteVi: "H1 Loại trống đồng kinh điển Đông Á với mặt trời 14 tia, chim Lạc và vành thuyền chiến đúc liền khối.",
      noteEn: "Masterpiece of Bronze Age metallurgy uniting a 14-ray solar star with flying Lac bird bands."
    },
    {
      id: "longquan-celadon-vase",
      titleVi: "Bình Phượng Nhĩ Thanh Từ Long Tuyền (Nam Tống)",
      titleEn: "Longquan Celadon Phoenix-Ear Vase",
      titleZh: "龙泉青瓷凤耳瓶",
      eraVi: "Nam Tống (1127–1279) · Chiết Giang",
      eraEn: "Southern Song (1127–1279) · Zhejiang",
      noteVi: "Men mai tử thanh ngọc dày nhiều lớp đạt sắc 'tựa ngọc Bích', tai phượng uốn đối xứng thanh thoát.",
      noteEn: "Thick multi-layered plum-green glaze attaining translucent jade sheen."
    }
  ];

  var LIGHTING_MODES = [
    { id: "daylight", labelVi: "Ánh sáng Ban ngày", labelEn: "Daylight Gallery" },
    { id: "warm-spot", labelVi: "Đèn Bảo tàng Ấm", labelEn: "Warm Museum Spot" },
    { id: "relief", labelVi: "Chiếu Xiên Nổi Hoa Văn", labelEn: "Grazing Relief Light" }
  ];

  var currentArtifact3D = "houmuwu-ding";
  var currentLighting = "daylight";
  var tiantanOpen = false;
  var activeRt = null;

  // --------------------------------------------------------------------------
  // SHARED MUSEUM-GRADE PBR / IBL / PROCEDURAL TEXTURE TOOLKIT (v11.0)
  // Reused across 3d-pack and 3d-studio-ext-pack without inflating sync bundle.
  // --------------------------------------------------------------------------
  var sharedTexCache = {};

  function createSharedTexture(THREE, kind) {
    if (sharedTexCache[kind]) return sharedTexCache[kind];
    var c = document.createElement("canvas");
    var isBump = kind === "bronzeBump" || kind === "tileBump" || kind === "woodBump" || kind === "fortressBump" || kind === "greyBrickBump";
    var isShadow = kind === "shadow";
    c.width = isShadow ? 256 : 512;
    c.height = isShadow ? 256 : 512;
    var ctx = c.getContext("2d");

    if (kind === "shadow") {
      var sg = ctx.createRadialGradient(128, 128, 8, 128, 128, 126);
      sg.addColorStop(0, "rgba(0,0,0,0.62)");
      sg.addColorStop(0.5, "rgba(0,0,0,0.28)");
      sg.addColorStop(1, "rgba(0,0,0,0.0)");
      ctx.fillStyle = sg;
      ctx.fillRect(0, 0, 256, 256);
    } else if (kind === "bronze" || kind === "bronzeBump") {
      ctx.fillStyle = isBump ? "#808080" : "#4b5a4d";
      ctx.fillRect(0, 0, 512, 512);
      var seed = 1337;
      function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
      for (var i = 0; i < 650; i++) {
        var rx = rnd() * 512, ry = rnd() * 512, rr = 4 + rnd() * 26;
        if (isBump) {
          var v = Math.floor(108 + rnd() * 50);
          ctx.fillStyle = "rgba(" + v + "," + v + "," + v + ",0.18)";
        } else {
          ctx.fillStyle = rnd() > 0.55 ? "rgba(104,132,110,0.16)" : (rnd() > 0.35 ? "rgba(56,64,54,0.22)" : "rgba(176,142,84,0.11)");
        }
        ctx.beginPath(); ctx.arc(rx, ry, rr, 0, Math.PI * 2); ctx.fill();
      }
      ctx.strokeStyle = isBump ? "rgba(235,235,235,0.42)" : "rgba(165,146,96,0.28)";
      ctx.lineWidth = 2;
      for (var gy = 32; gy < 512; gy += 64) {
        for (var gx = 16; gx < 512; gx += 48) {
          ctx.strokeRect(gx, gy, 32, 22);
          ctx.strokeRect(gx + 6, gy + 5, 20, 12);
        }
      }
    } else if (kind === "fortressBrick" || kind === "fortressBump" || kind === "greyBrick" || kind === "greyBrickBump") {
      var isGrey = kind === "greyBrick" || kind === "greyBrickBump";
      ctx.fillStyle = isBump ? "#727272" : (isGrey ? "#4c5157" : "#6c1d18");
      ctx.fillRect(0, 0, 512, 512);
      var bSeed = isGrey ? 3191 : 2207;
      function brnd() { bSeed = (bSeed * 16807) % 2147483647; return (bSeed - 1) / 2147483646; }
      var rowH = 32, colW = 64;
      for (var row = 0; row < 16; row++) {
        var offset = (row % 2) * 32;
        for (var col = -1; col < 9; col++) {
          var bx = col * colW + offset;
          var by = row * rowH;
          if (isBump) {
            var bv = 135 + Math.floor(brnd() * 55);
            ctx.fillStyle = "rgb(" + bv + "," + bv + "," + bv + ")";
          } else if (isGrey) {
            var gl = 78 + Math.floor(brnd() * 24);
            ctx.fillStyle = "rgb(" + gl + "," + (gl + 3) + "," + (gl + 7) + ")";
          } else {
            var rC = 114 + Math.floor(brnd() * 28);
            var gC = 32 + Math.floor(brnd() * 14);
            var bC = 28 + Math.floor(brnd() * 12);
            ctx.fillStyle = "rgb(" + rC + "," + gC + "," + bC + ")";
          }
          ctx.fillRect(bx + 2, by + 2, colW - 4, rowH - 4);
          if (!isBump) {
            ctx.fillStyle = "rgba(0,0,0,0.08)";
            ctx.fillRect(bx + 2, by + rowH - 6, colW - 4, 4);
          }
        }
      }
      if (!isBump && !isGrey) {
        var wGrad = ctx.createLinearGradient(0, 0, 0, 512);
        wGrad.addColorStop(0, "rgba(255,220,190,0.04)");
        wGrad.addColorStop(0.7, "rgba(0,0,0,0.0)");
        wGrad.addColorStop(1, "rgba(18,8,6,0.28)");
        ctx.fillStyle = wGrad;
        ctx.fillRect(0, 0, 512, 512);
      }
    } else if (kind === "caihuaBeam") {
      ctx.fillStyle = "#163b69";
      ctx.fillRect(0, 0, 512, 512);
      ctx.fillStyle = "#175e4b";
      ctx.fillRect(0, 56, 512, 400);
      ctx.fillStyle = "#8a221d";
      ctx.fillRect(0, 148, 512, 216);
      ctx.strokeStyle = "#e3b857";
      ctx.lineWidth = 8;
      ctx.strokeRect(8, 22, 496, 468);
      ctx.strokeRect(22, 72, 468, 368);
      for (var cxp = 48; cxp < 480; cxp += 96) {
        ctx.strokeStyle = "#f2ce6b";
        ctx.lineWidth = 5;
        ctx.beginPath(); ctx.arc(cxp, 256, 36, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = "#2b7a62";
        ctx.beginPath(); ctx.arc(cxp, 256, 22, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#f5d77f";
        ctx.beginPath(); ctx.arc(cxp, 256, 9, 0, Math.PI * 2); ctx.fill();
      }
    } else if (kind === "palaceDoor") {
      ctx.fillStyle = "#6e1916";
      ctx.fillRect(0, 0, 512, 512);
      for (var pan = 0; pan < 4; pan++) {
        var px = pan * 128 + 8;
        ctx.fillStyle = "#82201b";
        ctx.fillRect(px, 16, 112, 480);
        ctx.strokeStyle = "#d9ae4e";
        ctx.lineWidth = 4;
        ctx.strokeRect(px + 6, 24, 100, 300);
        ctx.fillStyle = "#1d1410";
        ctx.fillRect(px + 12, 32, 88, 284);
        ctx.strokeStyle = "#c89738";
        ctx.lineWidth = 2;
        for (var lx = px + 18; lx < px + 96; lx += 16) {
          ctx.beginPath(); ctx.moveTo(lx, 34); ctx.lineTo(lx, 314); ctx.stroke();
        }
        for (var ly = 44; ly < 310; ly += 22) {
          ctx.beginPath(); ctx.moveTo(px + 14, ly); ctx.lineTo(px + 98, ly); ctx.stroke();
        }
        ctx.strokeStyle = "#d9ae4e";
        ctx.lineWidth = 3;
        ctx.strokeRect(px + 10, 342, 92, 140);
      }
    } else if (kind === "gateStuds") {
      ctx.fillStyle = "#7a1916";
      ctx.fillRect(0, 0, 512, 512);
      ctx.strokeStyle = "#3b0a09";
      ctx.lineWidth = 8;
      ctx.beginPath(); ctx.moveTo(256, 0); ctx.lineTo(256, 512); ctx.stroke();
      ctx.strokeStyle = "#d8ab4c";
      ctx.lineWidth = 4;
      ctx.strokeRect(20, 20, 224, 472);
      ctx.strokeRect(268, 20, 224, 472);
      for (var leaf = 0; leaf < 2; leaf++) {
        var baseX = leaf === 0 ? 44 : 292;
        for (var sr = 0; sr < 7; sr++) {
          for (var sc = 0; sc < 5; sc++) {
            var sx = baseX + sc * 42;
            var sy = 56 + sr * 48;
            ctx.fillStyle = "#e8be5a";
            ctx.beginPath(); ctx.arc(sx, sy, 9, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = "#fff1b8";
            ctx.beginPath(); ctx.arc(sx - 2.5, sy - 2.5, 3, 0, Math.PI * 2); ctx.fill();
          }
        }
        var kx = leaf === 0 ? 216 : 296;
        ctx.strokeStyle = "#f2c968";
        ctx.lineWidth = 5;
        ctx.beginPath(); ctx.arc(kx, 392, 16, 0, Math.PI * 2); ctx.stroke();
      }
    } else if (kind === "rammedEarth") {
      ctx.fillStyle = "#a88862";
      ctx.fillRect(0, 0, 512, 512);
      var rs = 8081;
      function ernd() { rs = (rs * 16807) % 2147483647; return (rs - 1) / 2147483646; }
      for (var ry2 = 0; ry2 < 512; ry2 += 16) {
        var lShift = Math.floor((ernd() - 0.5) * 28);
        ctx.fillStyle = "rgb(" + (168 + lShift) + "," + (136 + lShift) + "," + (98 + Math.floor(lShift * 0.7)) + ")";
        ctx.fillRect(0, ry2, 512, 16);
        ctx.fillStyle = "rgba(62,44,28,0.16)";
        ctx.fillRect(0, ry2 + 14, 512, 2);
      }
      for (var ep = 0; ep < 900; ep++) {
        ctx.fillStyle = ernd() > 0.5 ? "rgba(235,214,180,0.12)" : "rgba(58,42,26,0.16)";
        ctx.fillRect(ernd() * 512, ernd() * 512, 3, 2);
      }
    } else if (kind === "jade") {
      var jg = ctx.createLinearGradient(0, 0, 512, 512);
      jg.addColorStop(0, "#9ab58d");
      jg.addColorStop(0.45, "#839e7a");
      jg.addColorStop(1, "#6c8667");
      ctx.fillStyle = jg;
      ctx.fillRect(0, 0, 512, 512);
      var js = 4099;
      function jrnd() { js = (js * 16807) % 2147483647; return (js - 1) / 2147483646; }
      for (var ji = 0; ji < 420; ji++) {
        ctx.fillStyle = jrnd() > 0.5 ? "rgba(218,228,200,0.12)" : "rgba(58,76,55,0.14)";
        ctx.beginPath(); ctx.ellipse(jrnd() * 512, jrnd() * 512, 12 + jrnd() * 44, 4 + jrnd() * 14, jrnd() * Math.PI, 0, Math.PI * 2); ctx.fill();
      }
    } else if (kind === "celadon") {
      var cg = ctx.createLinearGradient(0, 0, 0, 512);
      cg.addColorStop(0, "#8eb8a9");
      cg.addColorStop(0.55, "#78a496");
      cg.addColorStop(1, "#668f82");
      ctx.fillStyle = cg;
      ctx.fillRect(0, 0, 512, 512);
      ctx.strokeStyle = "rgba(44,72,64,0.24)";
      ctx.lineWidth = 1;
      var cs = 9187;
      function crnd() { cs = (cs * 16807) % 2147483647; return (cs - 1) / 2147483646; }
      for (var ci = 0; ci < 95; ci++) {
        var cx = crnd() * 512, cy = crnd() * 512;
        ctx.beginPath(); ctx.moveTo(cx, cy);
        for (var step = 0; step < 5; step++) {
          cx += (crnd() - 0.5) * 76;
          cy += (crnd() - 0.5) * 76;
          ctx.lineTo(cx, cy);
        }
        ctx.stroke();
      }
    } else if (kind === "wood" || kind === "woodBump") {
      ctx.fillStyle = isBump ? "#787878" : "#6f4427";
      ctx.fillRect(0, 0, 512, 512);
      for (var wy = 0; wy < 512; wy += 4) {
        var shade = isBump ? (110 + Math.floor(Math.sin(wy * 0.14) * 28)) : null;
        ctx.fillStyle = isBump
          ? ("rgba(" + shade + "," + shade + "," + shade + ",0.55)")
          : (wy % 12 === 0 ? "rgba(46,24,11,0.34)" : "rgba(148,96,52,0.22)");
        ctx.fillRect(0, wy, 512, 3);
      }
    } else if (kind === "marble") {
      ctx.fillStyle = "#efeae0";
      ctx.fillRect(0, 0, 512, 512);
      var ms = 7001;
      function mrnd() { ms = (ms * 16807) % 2147483647; return (ms - 1) / 2147483646; }
      for (var mi = 0; mi < 38; mi++) {
        ctx.strokeStyle = mi % 2 === 0 ? "rgba(170,164,154,0.22)" : "rgba(212,196,170,0.18)";
        ctx.lineWidth = 1 + mrnd() * 2.5;
        ctx.beginPath();
        var mx = mrnd() * 512, my = 0;
        ctx.moveTo(mx, my);
        while (my < 512) {
          mx += (mrnd() - 0.5) * 48;
          my += 32 + mrnd() * 32;
          ctx.lineTo(mx, my);
        }
        ctx.stroke();
      }
    } else if (kind === "granite") {
      ctx.fillStyle = "#202329";
      ctx.fillRect(0, 0, 512, 512);
      var gs = 5501;
      function grnd() { gs = (gs * 16807) % 2147483647; return (gs - 1) / 2147483646; }
      for (var gi = 0; gi < 1800; gi++) {
        var lum = 18 + Math.floor(grnd() * 48);
        ctx.fillStyle = "rgba(" + lum + "," + (lum + 3) + "," + (lum + 8) + ",0.55)";
        ctx.fillRect(grnd() * 512, grnd() * 512, 2 + grnd() * 3, 2 + grnd() * 3);
      }
    } else if (kind === "tile" || kind === "tileBump" || kind === "slateTile" || kind === "cobaltTile") {
      var isSlateT = kind === "slateTile";
      var isCobaltT = kind === "cobaltTile";
      ctx.fillStyle = isBump ? "#707070" : (isSlateT ? "#2d333b" : (isCobaltT ? "#1a3c74" : "#d89a18"));
      ctx.fillRect(0, 0, 512, 512);
      for (var tx = 0; tx < 512; tx += 16) {
        var tg = ctx.createLinearGradient(tx, 0, tx + 16, 0);
        if (isBump) {
          tg.addColorStop(0, "#404040");
          tg.addColorStop(0.5, "#e6e6e6");
          tg.addColorStop(1, "#404040");
        } else if (isSlateT) {
          tg.addColorStop(0, "#1d2228");
          tg.addColorStop(0.45, "#464f5a");
          tg.addColorStop(0.6, "#636e7a");
          tg.addColorStop(1, "#20252b");
        } else if (isCobaltT) {
          tg.addColorStop(0, "#102752");
          tg.addColorStop(0.45, "#2858a4");
          tg.addColorStop(0.6, "#4c7fd1");
          tg.addColorStop(1, "#122b59");
        } else {
          tg.addColorStop(0, "#9e6805");
          tg.addColorStop(0.45, "#f5c23b");
          tg.addColorStop(0.6, "#fff0a8");
          tg.addColorStop(1, "#a66f08");
        }
        ctx.fillStyle = tg;
        ctx.fillRect(tx, 0, 16, 512);
      }
      for (var ty = 0; ty < 512; ty += 32) {
        ctx.fillStyle = isBump ? "rgba(25,25,25,0.65)" : "rgba(18,12,4,0.34)";
        ctx.fillRect(0, ty, 512, 3);
      }
    } else if (kind === "ngocluDrumTop") {
      var dg = ctx.createRadialGradient(256, 256, 12, 256, 256, 252);
      dg.addColorStop(0, "#b89652");
      dg.addColorStop(0.55, "#877245");
      dg.addColorStop(1, "#4e5b47");
      ctx.fillStyle = dg;
      ctx.fillRect(0, 0, 512, 512);
      ctx.strokeStyle = "rgba(235,204,132,0.72)";
      [56, 86, 118, 156, 198, 224, 244].forEach(function (rad, idx) {
        ctx.lineWidth = idx % 2 === 0 ? 3 : 1.5;
        ctx.beginPath(); ctx.arc(256, 256, rad, 0, Math.PI * 2); ctx.stroke();
      });
      ctx.fillStyle = "#d9b66c";
      ctx.beginPath();
      for (var rIdx = 0; rIdx < 28; rIdx++) {
        var ang = (rIdx * Math.PI) / 14;
        var rad2 = rIdx % 2 === 0 ? 78 : 30;
        var px = 256 + Math.cos(ang) * rad2;
        var py = 256 + Math.sin(ang) * rad2;
        if (rIdx === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "rgba(232,202,138,0.68)";
      ctx.lineWidth = 2;
      for (var bi = 0; bi < 16; bi++) {
        var ba = (bi * Math.PI * 2) / 16;
        ctx.beginPath();
        ctx.moveTo(256 + Math.cos(ba) * 166, 256 + Math.sin(ba) * 166);
        ctx.lineTo(256 + Math.cos(ba + 0.14) * 188, 256 + Math.sin(ba + 0.14) * 188);
        ctx.stroke();
      }
      for (var ti = 0; ti < 72; ti++) {
        var ta = (ti * Math.PI * 2) / 72;
        ctx.beginPath();
        ctx.moveTo(256 + Math.cos(ta) * 124, 256 + Math.sin(ta) * 124);
        ctx.lineTo(256 + Math.cos(ta) * 148, 256 + Math.sin(ta) * 148);
        ctx.stroke();
      }
    }

    var tex = new THREE.CanvasTexture(c);
    if (!isShadow && kind !== "ngocluDrumTop") {
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
    }
    if (typeof THREE.sRGBEncoding !== "undefined" && !isBump && !isShadow) {
      tex.encoding = THREE.sRGBEncoding;
    }
    tex.needsUpdate = true;
    sharedTexCache[kind] = tex;
    return tex;
  }

  function repeatTex(THREE, kind, rx, ry) {
    var base = createSharedTexture(THREE, kind);
    if (!base) return null;
    var tx = base.clone();
    tx.wrapS = THREE.RepeatWrapping;
    tx.wrapT = THREE.RepeatWrapping;
    tx.repeat.set(rx || 1, ry || 1);
    if (typeof THREE.sRGBEncoding !== "undefined" && kind.indexOf("Bump") < 0) {
      tx.encoding = THREE.sRGBEncoding;
    }
    tx.needsUpdate = true;
    return tx;
  }

  function configureRenderer(THREE, renderer, opts) {
    if (!renderer) return renderer;
    var o = opts || {};
    if (renderer.debug) renderer.debug.checkShaderErrors = false;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    if (renderer.shadowMap && o.shadows !== false) {
      renderer.shadowMap.enabled = true;
      if (typeof THREE.PCFSoftShadowMap !== "undefined") {
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      }
    }
    if (typeof THREE.ACESFilmicToneMapping !== "undefined") {
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = typeof o.exposure === "number" ? o.exposure : 1.10;
    }
    if (typeof THREE.sRGBEncoding !== "undefined") {
      renderer.outputEncoding = THREE.sRGBEncoding;
    }
    return renderer;
  }

  function tuneShadowLight(light, span) {
    if (!light) return light;
    var s = span || 6;
    light.castShadow = true;
    if (light.shadow) {
      if (light.shadow.mapSize) {
        light.shadow.mapSize.width = 1536;
        light.shadow.mapSize.height = 1536;
      }
      if (light.shadow.camera) {
        light.shadow.camera.left = -s;
        light.shadow.camera.right = s;
        light.shadow.camera.top = s;
        light.shadow.camera.bottom = -s;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = Math.max(24, s * 6);
        if (light.shadow.camera.updateProjectionMatrix) {
          light.shadow.camera.updateProjectionMatrix();
        }
      }
      light.shadow.bias = -0.0004;
      if ("normalBias" in light.shadow) light.shadow.normalBias = 0.02;
    }
    return light;
  }

  function applyStudioEnvironment(THREE, renderer, scene, preset) {
    if (!renderer || !scene || typeof THREE.PMREMGenerator !== "function") return null;
    var key = String(preset || "warm");
    if (!renderer.__cceEnvCache) renderer.__cceEnvCache = {};
    if (renderer.__cceEnvCache[key]) {
      scene.environment = renderer.__cceEnvCache[key].texture;
      return renderer.__cceEnvCache[key].texture;
    }
    try {
      var pmrem = new THREE.PMREMGenerator(renderer);
      if (pmrem.compileEquirectangularShader) pmrem.compileEquirectangularShader();
      var envScene = new THREE.Scene();
      var palette = key === "daylight"
        ? { top: 0xeef5ff, bot: 0x3b3f47, key: 0xffffff, fill: 0xc2d8ff, rim: 0xffecd2 }
        : key === "nocturne"
          ? { top: 0x1c2c4a, bot: 0x0b0d12, key: 0x89a9d8, fill: 0xd9a05b, rim: 0x6280b0 }
          : key === "imperial"
            ? { top: 0xdbe6f6, bot: 0x453528, key: 0xffe4b8, fill: 0xb8cfe8, rim: 0xffc864 }
            : { top: 0xfff2dc, bot: 0x201d19, key: 0xffe0ad, fill: 0xa4bdd6, rim: 0xe2b165 };

      var domeGeo = new THREE.SphereGeometry(28, 16, 12);
      var domeMat = new THREE.MeshBasicMaterial({ color: palette.bot, side: THREE.BackSide });
      envScene.add(new THREE.Mesh(domeGeo, domeMat));

      var ceiling = new THREE.Mesh(new THREE.PlaneGeometry(24, 24), new THREE.MeshBasicMaterial({ color: palette.top, side: THREE.DoubleSide }));
      ceiling.position.set(0, 12, 0); ceiling.rotation.x = Math.PI / 2; envScene.add(ceiling);

      var softKey = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), new THREE.MeshBasicMaterial({ color: palette.key, side: THREE.DoubleSide }));
      softKey.position.set(9, 7, 9); softKey.lookAt(0, 0, 0); envScene.add(softKey);

      var softFill = new THREE.Mesh(new THREE.PlaneGeometry(14, 10), new THREE.MeshBasicMaterial({ color: palette.fill, side: THREE.DoubleSide }));
      softFill.position.set(-10, 4, 6); softFill.lookAt(0, 0, 0); envScene.add(softFill);

      var rimCard = new THREE.Mesh(new THREE.PlaneGeometry(16, 6), new THREE.MeshBasicMaterial({ color: palette.rim, side: THREE.DoubleSide }));
      rimCard.position.set(0, 6, -11); rimCard.lookAt(0, 0, 0); envScene.add(rimCard);

      var rt = pmrem.fromScene(envScene, 0.04);
      pmrem.dispose();
      envScene.traverse(function (o) {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
      renderer.__cceEnvCache[key] = rt;
      scene.environment = rt.texture;
      return rt.texture;
    } catch (_e) {
      return null;
    }
  }

  function createMuseumPedestal(THREE, radius, height, opts) {
    var o = opts || {};
    var r = radius || 1.75;
    var h = height || 0.34;
    var g = new THREE.Group();
    var stoneTex = createSharedTexture(THREE, "granite");
    var woodTex = createSharedTexture(THREE, "wood");
    var baseMat = new THREE.MeshStandardMaterial({
      color: o.stoneColor || 0x242830,
      map: stoneTex,
      roughness: 0.65,
      metalness: 0.14
    });
    var deckMat = new THREE.MeshStandardMaterial({
      color: o.woodColor || 0x5c3620,
      map: woodTex,
      roughness: 0.42,
      metalness: 0.08
    });
    var brassMat = new THREE.MeshStandardMaterial({
      color: o.trimColor || 0xd6b162,
      roughness: 0.24,
      metalness: 0.88
    });
    var plinth = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.96, r * 1.06, h, 48), baseMat);
    plinth.position.y = -h * 0.5;
    plinth.receiveShadow = true;
    plinth.castShadow = true;
    var deck = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.88, r * 0.92, h * 0.24, 48), deckMat);
    deck.position.y = h * 0.12;
    deck.receiveShadow = true;
    var collar = new THREE.Mesh(new THREE.TorusGeometry(r * 0.91, 0.022, 12, 56), brassMat);
    collar.rotation.x = Math.PI / 2;
    collar.position.y = 0.01;
    var shadowDisc = new THREE.Mesh(
      new THREE.PlaneGeometry(r * 2.5, r * 2.5),
      new THREE.MeshBasicMaterial({ map: createSharedTexture(THREE, "shadow"), transparent: true, depthWrite: false, opacity: 0.85 })
    );
    shadowDisc.rotation.x = -Math.PI / 2;
    shadowDisc.position.y = -h + 0.004;
    g.add(plinth, deck, collar, shadowDisc);
    return g;
  }

  function disposeScene(scene, renderer) {
    if (scene && typeof scene.traverse === "function") {
      var cachedList = Object.keys(sharedTexCache).map(function (k) { return sharedTexCache[k]; });
      scene.traverse(function (obj) {
        if (obj.geometry && typeof obj.geometry.dispose === "function") {
          try { obj.geometry.dispose(); } catch (_e) {}
        }
        if (obj.material) {
          var mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach(function (m) {
            if (!m) return;
            ["map", "bumpMap", "roughnessMap", "normalMap", "alphaMap", "emissiveMap"].forEach(function (slot) {
              if (m[slot] && cachedList.indexOf(m[slot]) === -1 && typeof m[slot].dispose === "function") {
                try { m[slot].dispose(); } catch (_e) {}
              }
            });
            if (typeof m.dispose === "function") {
              try { m.dispose(); } catch (_e) {}
            }
          });
        }
      });
    }
    if (renderer && renderer.__cceEnvCache) {
      Object.keys(renderer.__cceEnvCache).forEach(function (k) {
        try {
          if (renderer.__cceEnvCache[k] && typeof renderer.__cceEnvCache[k].dispose === "function") {
            renderer.__cceEnvCache[k].dispose();
          }
        } catch (_e) {}
      });
      renderer.__cceEnvCache = null;
    }
    if (renderer && typeof renderer.forceContextLoss === "function") {
      try { renderer.forceContextLoss(); } catch (_e) {}
    }
  }

  window.CCE_3D_PBR = {
    configureRenderer: configureRenderer,
    tuneShadowLight: tuneShadowLight,
    applyStudioEnvironment: applyStudioEnvironment,
    getTexture: createSharedTexture,
    repeatTex: repeatTex,
    createMuseumPedestal: createMuseumPedestal,
    disposeScene: disposeScene
  };

  // --------------------------------------------------------------------------
  // PARAMETRIC CHINESE ARCHITECTURAL & MECHANICAL ENGINE (v12.2 Museum-Grade)
  // Eliminates flat "plastic toy" primitives with concave Juzhe roofs, Feiyan
  // upturned eaves, multi-tier Dougong friezes, Hanbaiyu balustrades & gears.
  // --------------------------------------------------------------------------
  function makePlaqueSpriteTex(THREE, text) {
    var c = document.createElement("canvas");
    c.width = 256; c.height = 96;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#162954";
    ctx.fillRect(0, 0, 256, 96);
    ctx.strokeStyle = "#e5b852";
    ctx.lineWidth = 8;
    ctx.strokeRect(5, 5, 246, 86);
    ctx.fillStyle = "#f7dc7e";
    ctx.font = "bold 46px 'Noto Serif SC', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(text || ""), 128, 50);
    var t = new THREE.CanvasTexture(c);
    if (typeof THREE.sRGBEncoding !== "undefined") t.encoding = THREE.sRGBEncoding;
    return t;
  }

  function createCurvedRoof(THREE, opts) {
    var o = opts || {};
    var style = o.style || "wudian"; // wudian | xieshan | cuanjian | gable
    var w = o.w || 2.8;
    var d = o.d || 1.6;
    var h = o.h || 0.72;
    var eaveOver = o.eaveOver || Math.min(w, d) * 0.16;
    var feiyan = typeof o.feiyanLift === "number" ? o.feiyanLift : Math.min(0.24, h * 0.30);
    var tileKind = o.tileKind || "tile"; // tile (gold) | slateTile | cobaltTile
    var ridgeCol = o.ridgeColor || (tileKind === "slateTile" ? 0x626970 : (tileKind === "cobaltTile" ? 0x2f5da8 : 0xc6932a));
    var tileTint = o.tileColor || (tileKind === "slateTile" ? 0x3b4249 : (tileKind === "cobaltTile" ? 0x265299 : 0xe4aa2c));
    var MatPhys = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;

    var roofTex = repeatTex(THREE, tileKind, Math.max(2, Math.round(w * 1.8)), Math.max(2, Math.round(h * 2.2)));
    var roofBump = repeatTex(THREE, "tileBump", Math.max(2, Math.round(w * 1.8)), Math.max(2, Math.round(h * 2.2)));
    var roofMat = new MatPhys({
      color: tileTint,
      map: roofTex,
      bumpMap: roofBump,
      bumpScale: 0.028,
      roughness: tileKind === "slateTile" ? 0.56 : 0.24,
      metalness: tileKind === "slateTile" ? 0.06 : 0.18,
      clearcoat: tileKind === "slateTile" ? 0.08 : 0.62,
      clearcoatRoughness: 0.18,
      side: THREE.DoubleSide
    });
    var ridgeMat = new MatPhys({
      color: ridgeCol,
      roughness: tileKind === "slateTile" ? 0.52 : 0.28,
      metalness: tileKind === "slateTile" ? 0.12 : 0.42,
      clearcoat: tileKind === "slateTile" ? 0.1 : 0.45
    });
    var eaveTrimMat = new THREE.MeshStandardMaterial({ color: 0x8f241e, roughness: 0.52 });
    var rafterMat = new THREE.MeshStandardMaterial({ color: 0x5c3a22, map: createSharedTexture(THREE, "wood"), roughness: 0.62 });

    var grp = new THREE.Group();
    var rings = o.rings || 8;
    var verts = [];
    var uvs = [];
    var indices = [];

    function pushQuad(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, uA, vA, uB, vB) {
      var base = verts.length / 3;
      verts.push(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz);
      uvs.push(uA, vA, uB, vA, uB, vB, uA, vB);
      indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }

    if (style === "cuanjian") {
      var sides = o.sides || 6;
      var rad = o.radius || (Math.max(w, d) * 0.55);
      for (var ri = 0; ri < rings; ri++) {
        var t0 = ri / rings, t1 = (ri + 1) / rings;
        for (var si = 0; si < sides; si++) {
          var a0 = (si / sides) * Math.PI * 2 + (o.rotOffset || Math.PI / sides);
          var a1 = ((si + 1) / sides) * Math.PI * 2 + (o.rotOffset || Math.PI / sides);
          var r0 = Math.max(0.02, rad * t0), r1 = rad * t1;
          var sag0 = h * Math.pow(1 - t0, 1.48);
          var sag1 = h * Math.pow(1 - t1, 1.48);
          var lift0 = feiyan * Math.pow(t0, 3.2);
          var lift1 = feiyan * Math.pow(t1, 3.2);
          pushQuad(
            Math.cos(a0) * r0, sag0 + lift0, Math.sin(a0) * r0,
            Math.cos(a1) * r0, sag0 + lift0, Math.sin(a1) * r0,
            Math.cos(a1) * r1, sag1 + lift1, Math.sin(a1) * r1,
            Math.cos(a0) * r1, sag1 + lift1, Math.sin(a0) * r1,
            0, t0, 1, t1
          );
        }
      }
      var cGeo = new THREE.BufferGeometry();
      cGeo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
      cGeo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
      cGeo.setIndex(indices);
      cGeo.computeVertexNormals();
      grp.add(new THREE.Mesh(cGeo, roofMat));

      // Hip ribs + upturned corner beasts + Baoding finial
      for (var hs = 0; hs < sides; hs++) {
        var ha = (hs / sides) * Math.PI * 2 + (o.rotOffset || Math.PI / sides);
        var curvePts = [];
        for (var pt = 0; pt <= 5; pt++) {
          var tf = pt / 5;
          var cr = 0.04 + (rad - 0.04) * tf;
          var cy = h * Math.pow(1 - tf, 1.48) + feiyan * Math.pow(tf, 3.2) + 0.015;
          curvePts.push(new THREE.Vector3(Math.cos(ha) * cr, cy, Math.sin(ha) * cr));
        }
        var hipCurve = new THREE.CatmullRomCurve3(curvePts);
        grp.add(new THREE.Mesh(new THREE.TubeGeometry(hipCurve, 10, Math.max(0.014, rad * 0.022), 6, false), ridgeMat));
      }
      if (!o.noFinial) {
        var finialPed = new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.07, rad * 0.11, h * 0.14, 12), ridgeMat);
        finialPed.position.y = h + h * 0.06;
        var finialOrb = new THREE.Mesh(new THREE.SphereGeometry(Math.max(0.055, rad * 0.075), 14, 12), new MatPhys({ color: 0xe6be54, metalness: 0.85, roughness: 0.18 }));
        finialOrb.position.y = h + h * 0.19;
        var finialTip = new THREE.Mesh(new THREE.ConeGeometry(Math.max(0.028, rad * 0.036), h * 0.16, 10), finialOrb.material);
        finialTip.position.y = h + h * 0.30;
        grp.add(finialPed, finialOrb, finialTip);
      }
      return grp;
    }

    // Rectangular roofs: wudian (hip), xieshan (hip-and-gable), gable
    var hw = w * 0.5 + eaveOver;
    var hd = d * 0.5 + eaveOver;
    var rw = style === "gable" ? hw : Math.max(w * 0.18, w * 0.5 - d * 0.32);
    if (style === "xieshan") rw = Math.max(w * 0.24, w * 0.40);

    function ptOnRectRoof(u, v) {
      // u in [-1, 1] along X, v in [0, 1] from ridge (0) to eave (1)
      var ax = u * (rw + (hw - rw) * v);
      var az = hd * v;
      var baseY = h * Math.pow(1 - v, 1.46);
      var cornerF = Math.pow(Math.abs(u), 2.1) * Math.pow(v, 2.8);
      return [ax, baseY + feiyan * cornerF, az];
    }

    // Front (+Z) & Back (-Z) Concave Slopes
    var uSegs = 8;
    for (var vi = 0; vi < rings; vi++) {
      var v0 = vi / rings, v1 = (vi + 1) / rings;
      for (var ui = 0; ui < uSegs; ui++) {
        var u0 = -1 + (2 * ui) / uSegs, u1 = -1 + (2 * (ui + 1)) / uSegs;
        var p00 = ptOnRectRoof(u0, v0), p10 = ptOnRectRoof(u1, v0);
        var p11 = ptOnRectRoof(u1, v1), p01 = ptOnRectRoof(u0, v1);
        pushQuad(p00[0], p00[1], p00[2], p10[0], p10[1], p10[2], p11[0], p11[1], p11[2], p01[0], p01[1], p01[2], ui / uSegs, v0, (ui + 1) / uSegs, v1);
        pushQuad(p10[0], p10[1], -p10[2], p00[0], p00[1], -p00[2], p01[0], p01[1], -p01[2], p11[0], p11[1], -p11[2], ui / uSegs, v0, (ui + 1) / uSegs, v1);
      }
    }

    if (style === "wudian" || style === "xieshan") {
      // Left (-X) & Right (+X) Hip Slopes
      for (var svi = 0; svi < rings; svi++) {
        var sv0 = svi / rings, sv1 = (svi + 1) / rings;
        var vStart = style === "xieshan" ? 0.36 : 0;
        var tv0 = vStart + (1 - vStart) * sv0;
        var tv1 = vStart + (1 - vStart) * sv1;
        var wSegs = 4;
        for (var wi = 0; wi < wSegs; wi++) {
          var zf0 = -1 + (2 * wi) / wSegs, zf1 = -1 + (2 * (wi + 1)) / wSegs;
          var x0 = rw + (hw - rw) * tv0, x1 = rw + (hw - rw) * tv1;
          var z0a = hd * tv0 * zf0, z0b = hd * tv0 * zf1;
          var z1a = hd * tv1 * zf0, z1b = hd * tv1 * zf1;
          var y0 = h * Math.pow(1 - tv0, 1.46);
          var y1 = h * Math.pow(1 - tv1, 1.46);
          var c0a = feiyan * Math.pow(tv0, 2.8) * Math.pow(Math.abs(zf0), 2.1);
          var c0b = feiyan * Math.pow(tv0, 2.8) * Math.pow(Math.abs(zf1), 2.1);
          var c1a = feiyan * Math.pow(tv1, 2.8) * Math.pow(Math.abs(zf0), 2.1);
          var c1b = feiyan * Math.pow(tv1, 2.8) * Math.pow(Math.abs(zf1), 2.1);
          pushQuad(x0, y0 + c0a, z0a, x0, y0 + c0b, z0b, x1, y1 + c1b, z1b, x1, y1 + c1a, z1a, wi / wSegs, sv0, (wi + 1) / wSegs, sv1);
          pushQuad(-x0, y0 + c0b, z0b, -x0, y0 + c0a, z0a, -x1, y1 + c1a, z1a, -x1, y1 + c1b, z1b, wi / wSegs, sv0, (wi + 1) / wSegs, sv1);
        }
      }
    }

    var rGeo = new THREE.BufferGeometry();
    rGeo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    rGeo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    rGeo.setIndex(indices);
    rGeo.computeVertexNormals();
    grp.add(new THREE.Mesh(rGeo, roofMat));

    // Recessed Xieshan or Gable triangular Shanhua pediment panels
    if (style === "xieshan" || style === "gable") {
      var gx = style === "xieshan" ? rw : hw * 0.96;
      var gd = style === "xieshan" ? hd * 0.38 : hd * 0.94;
      var gh = style === "xieshan" ? h * 0.56 : h * 0.92;
      var shanhuaShape = new THREE.Shape();
      shanhuaShape.moveTo(-gd, 0);
      shanhuaShape.lineTo(0, gh);
      shanhuaShape.lineTo(gd, 0);
      shanhuaShape.closePath();
      var shanhuaGeo = new THREE.ExtrudeGeometry(shanhuaShape, { depth: 0.05, bevelEnabled: false });
      var shanhuaMat = new THREE.MeshStandardMaterial({ color: 0x8e221d, map: createSharedTexture(THREE, "wood"), roughness: 0.55 });
      [-1, 1].forEach(function (sd) {
        var gm = new THREE.Mesh(shanhuaGeo, shanhuaMat);
        gm.rotation.y = Math.PI / 2;
        gm.position.set(sd * gx, h - gh, 0);
        grp.add(gm);
      });
    }

    // Exposed underside timber Feichuan rafters along front & back eaves
    if (!o.noRafters) {
      var nRaf = Math.min(18, Math.max(6, Math.round(w * 3.5)));
      var rafGeo = new THREE.BoxGeometry(0.025, 0.024, Math.min(0.28, eaveOver * 1.4));
      for (var rf = 0; rf < nRaf; rf++) {
        var rx = -hw * 0.88 + (rf / Math.max(1, nRaf - 1)) * (hw * 1.76);
        [-1, 1].forEach(function (sz) {
          var rMesh = new THREE.Mesh(rafGeo, rafterMat);
          rMesh.position.set(rx, 0.015, sz * (hd * 0.86));
          rMesh.rotation.x = sz * 0.34;
          grp.add(rMesh);
        });
      }
    }

    // Main Zhengji ridge + twin Chiwen dragon-fish finials
    var mainRidge = new THREE.Mesh(new THREE.BoxGeometry(rw * 2.02, Math.max(0.055, h * 0.11), Math.max(0.055, h * 0.10)), ridgeMat);
    mainRidge.position.y = h + 0.02;
    grp.add(mainRidge);

    var chiH = Math.max(0.10, h * 0.22);
    [-1, 1].forEach(function (sd) {
      var cw = new THREE.Mesh(new THREE.ConeGeometry(chiH * 0.36, chiH, 5), ridgeMat);
      cw.position.set(sd * (rw - 0.02), h + chiH * 0.52, 0);
      cw.rotation.z = sd * 0.25;
      grp.add(cw);
    });

    // Diagonal Chuiji hip ridges + Zoushou corner guardian beasts
    if (style !== "gable") {
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (cPair) {
        var sx = cPair[0], sz = cPair[1];
        var hPts = [];
        for (var k = 0; k <= 5; k++) {
          var kt = k / 5;
          var hx = sx * (rw + (hw - rw) * kt);
          var hz = sz * (hd * kt);
          var hy = h * Math.pow(1 - kt, 1.46) + feiyan * Math.pow(kt, 2.8) + 0.018;
          hPts.push(new THREE.Vector3(hx, hy, hz));
        }
        var hCurve = new THREE.CatmullRomCurve3(hPts);
        grp.add(new THREE.Mesh(new THREE.TubeGeometry(hCurve, 10, Math.max(0.016, h * 0.032), 6, false), ridgeMat));

        var nBeasts = o.beastCount || 3;
        for (var bi = 0; bi < nBeasts; bi++) {
          var bt = 0.72 + (bi / Math.max(1, nBeasts)) * 0.22;
          var bPos = hCurve.getPointAt(Math.min(0.98, bt));
          var bMesh = new THREE.Mesh(new THREE.ConeGeometry(Math.max(0.018, h * 0.035), Math.max(0.05, h * 0.095), 5), ridgeMat);
          bMesh.position.set(bPos.x, bPos.y + 0.035, bPos.z);
          grp.add(bMesh);
        }
      });
    } else {
      // Gable edge eave fascia trim
      [-1, 1].forEach(function (sx) {
        var bPts = [];
        for (var bk = 0; bk <= 4; bk++) {
          var btf = bk / 4;
          bPts.push(new THREE.Vector3(sx * hw, h * Math.pow(1 - btf, 1.46), hd * btf));
        }
        var bc1 = new THREE.CatmullRomCurve3(bPts);
        var bc2 = new THREE.CatmullRomCurve3(bPts.map(function (v) { return new THREE.Vector3(v.x, v.y, -v.z); }));
        grp.add(new THREE.Mesh(new THREE.TubeGeometry(bc1, 8, 0.022, 6, false), eaveTrimMat));
        grp.add(new THREE.Mesh(new THREE.TubeGeometry(bc2, 8, 0.022, 6, false), eaveTrimMat));
      });
    }
    return grp;
  }

  function createDougongFrieze(THREE, opts) {
    var o = opts || {};
    var grp = new THREE.Group();
    var caihuaTex = repeatTex(THREE, "caihuaBeam", Math.max(2, Math.round((o.w || 2.4) * 2)), 1);
    var beamMat = new THREE.MeshStandardMaterial({ color: 0xe6e0d2, map: caihuaTex, roughness: 0.46, metalness: 0.12 });
    var woodRedMat = new THREE.MeshStandardMaterial({ color: 0x8f221d, map: createSharedTexture(THREE, "wood"), roughness: 0.48 });
    var goldAccentMat = new THREE.MeshStandardMaterial({ color: 0xd4a442, roughness: 0.34, metalness: 0.32 });

    function makeBracketUnit(outDirX, outDirZ) {
      var u = new THREE.Group();
      var ludou = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.055, 0.085), goldAccentMat);
      var gong = new THREE.Mesh(new THREE.BoxGeometry(outDirZ !== 0 ? 0.16 : 0.06, 0.045, outDirX !== 0 ? 0.16 : 0.06), woodRedMat);
      gong.position.y = 0.04;
      var ang = new THREE.Mesh(new THREE.BoxGeometry(outDirX !== 0 ? 0.18 : 0.045, 0.04, outDirZ !== 0 ? 0.18 : 0.045), goldAccentMat);
      ang.position.set(outDirX * 0.045, 0.068, outDirZ * 0.045);
      u.add(ludou, gong, ang);
      return u;
    }

    if (o.sides && o.radius) {
      var sides = o.sides, rad = o.radius;
      var ringFrieze = new THREE.Mesh(new THREE.CylinderGeometry(rad, rad * 0.98, 0.11, sides), beamMat);
      grp.add(ringFrieze);
      for (var s = 0; s < sides; s++) {
        var a = (s / sides) * Math.PI * 2;
        var br = makeBracketUnit(Math.cos(a), Math.sin(a));
        br.position.set(Math.cos(a) * rad, 0.04, Math.sin(a) * rad);
        grp.add(br);
      }
      return grp;
    }

    var w = o.w || 2.4, d = o.d || 1.2, bh = o.beamH || 0.11;
    var fBeam = new THREE.Mesh(new THREE.BoxGeometry(w, bh, d), beamMat);
    grp.add(fBeam);
    var nx = Math.max(3, Math.round(w / 0.45));
    for (var ix = 0; ix < nx; ix++) {
      var px = -w * 0.44 + (ix / Math.max(1, nx - 1)) * (w * 0.88);
      var bF = makeBracketUnit(0, 1); bF.position.set(px, bh * 0.35, d * 0.5);
      var bB = makeBracketUnit(0, -1); bB.position.set(px, bh * 0.35, -d * 0.5);
      grp.add(bF, bB);
    }
    return grp;
  }

  function createMarbleBalustrade(THREE, opts) {
    var o = opts || {};
    var grp = new THREE.Group();
    var rH = o.railH || 0.18;
    var marbleMat = new THREE.MeshStandardMaterial({
      color: o.color || 0xf1ece1,
      map: repeatTex(THREE, "marble", 3, 1),
      roughness: 0.48,
      metalness: 0.04
    });
    var postGeo = new THREE.BoxGeometry(0.042, rH + 0.06, 0.042);
    var knobGeo = new THREE.SphereGeometry(0.028, 8, 8);

    function addSpan(x1, z1, x2, z2) {
      var dx = x2 - x1, dz = z2 - z1;
      var len = Math.hypot(dx, dz);
      if (len < 0.08) return;
      var ang = Math.atan2(dx, dz);
      var seg = new THREE.Group();
      seg.position.set((x1 + x2) / 2, 0, (z1 + z2) / 2);
      seg.rotation.y = ang;
      var topRail = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.026, len), marbleMat);
      topRail.position.y = rH * 0.78;
      var slab = new THREE.Mesh(new THREE.BoxGeometry(0.020, rH * 0.52, Math.max(0.04, len - 0.04)), marbleMat);
      slab.position.y = rH * 0.34;
      seg.add(topRail, slab);
      grp.add(seg);

      var posts = Math.max(2, Math.round(len / 0.34) + 1);
      for (var pi = 0; pi < posts; pi++) {
        var tf = pi / Math.max(1, posts - 1);
        var px = x1 + dx * tf, pz = z1 + dz * tf;
        var pMesh = new THREE.Mesh(postGeo, marbleMat);
        pMesh.position.set(px, (rH + 0.06) / 2, pz);
        var kMesh = new THREE.Mesh(knobGeo, marbleMat);
        kMesh.position.set(px, rH + 0.08, pz);
        grp.add(pMesh, kMesh);
        if (o.dragonSpouts && pi > 0 && pi < posts - 1) {
          var nx = dz / len, nz = -dx / len;
          var sp = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.026, 0.11), marbleMat);
          sp.rotation.y = Math.atan2(nx, nz);
          sp.position.set(px + nx * 0.06, -0.025, pz + nz * 0.06);
          grp.add(sp);
        }
      }
    }

    if (o.sides && o.radius) {
      var sides = o.sides, rad = o.radius;
      for (var s = 0; s < sides; s++) {
        var a0 = (s / sides) * Math.PI * 2, a1 = ((s + 1) / sides) * Math.PI * 2;
        addSpan(Math.cos(a0) * rad, Math.sin(a0) * rad, Math.cos(a1) * rad, Math.sin(a1) * rad);
      }
      return grp;
    }

    var hw = (o.w || 2.8) * 0.5, hd = (o.d || 1.8) * 0.5, gap = o.gapFront || 0;
    addSpan(-hw, -hd, hw, -hd);
    addSpan(hw, -hd, hw, hd);
    addSpan(-hw, hd, -hw, -hd);
    if (gap > 0.1 && gap < hw * 1.6) {
      addSpan(-hw, hd, -gap * 0.5, hd);
      addSpan(gap * 0.5, hd, hw, hd);
    } else {
      addSpan(-hw, hd, hw, hd);
    }
    return grp;
  }

  function createPalaceHall(THREE, opts) {
    var o = opts || {};
    var w = o.w || 2.6, d = o.d || 1.15;
    var baseH = typeof o.baseH === "number" ? o.baseH : 0.24;
    var bodyH = typeof o.bodyH === "number" ? o.bodyH : 0.58;
    var roofH = typeof o.roofH === "number" ? o.roofH : 0.54;
    var baysX = o.baysX || 7, baysZ = o.baysZ || 3;
    var tileKind = o.tileKind || "tile";
    var hall = new THREE.Group();

    var marbleMat = new THREE.MeshStandardMaterial({
      color: 0xf1ece2,
      map: repeatTex(THREE, "marble", 3, 2),
      roughness: 0.48
    });
    var plinthStoneMat = new THREE.MeshStandardMaterial({ color: 0x3b3733, roughness: 0.72 });
    var colMat = new THREE.MeshStandardMaterial({ color: 0x8e1e1a, map: createSharedTexture(THREE, "wood"), roughness: 0.42 });
    var wallMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: repeatTex(THREE, "palaceDoor", Math.max(1, Math.round(baysX / 3)), 1),
      roughness: 0.52
    });

    if (baseH > 0.02) {
      var plinth = new THREE.Mesh(new THREE.BoxGeometry(w * 1.18, baseH, d * 1.24), o.marbleBase !== false ? marbleMat : plinthStoneMat);
      plinth.position.y = baseH * 0.5;
      hall.add(plinth);
      if (o.marbleBase !== false) {
        var bal = createMarbleBalustrade(THREE, { w: w * 1.15, d: d * 1.20, railH: Math.min(0.16, baseH * 0.75), gapFront: Math.min(0.55, w * 0.24) });
        bal.position.y = baseH;
        hall.add(bal);
        var ramp = new THREE.Mesh(new THREE.BoxGeometry(Math.min(0.50, w * 0.22), baseH * 0.9, d * 0.26), marbleMat);
        ramp.position.set(0, baseH * 0.45, d * 0.65);
        ramp.rotation.x = 0.42;
        hall.add(ramp);
      }
    }

    // Colonnade & stone Zhuchu column bases + inner Geshanmen lattice shell
    var wallShell = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, bodyH, d * 0.84), wallMat);
    wallShell.position.y = baseH + bodyH * 0.5;
    hall.add(wallShell);

    var colR = Math.max(0.024, Math.min(0.055, w * 0.016));
    var colGeo = new THREE.CylinderGeometry(colR * 0.92, colR, bodyH, 10);
    var drumGeo = new THREE.CylinderGeometry(colR * 1.45, colR * 1.65, 0.05, 10);
    for (var ix = 0; ix <= baysX; ix++) {
      var cx = -w * 0.48 + (ix / baysX) * (w * 0.96);
      [-d * 0.48, d * 0.48].forEach(function (cz) {
        var col = new THREE.Mesh(colGeo, colMat);
        col.position.set(cx, baseH + bodyH * 0.5, cz);
        var drum = new THREE.Mesh(drumGeo, marbleMat);
        drum.position.set(cx, baseH + 0.025, cz);
        hall.add(col, drum);
      });
    }
    for (var iz = 1; iz < baysZ; iz++) {
      var sz = -d * 0.48 + (iz / baysZ) * (d * 0.96);
      [-w * 0.48, w * 0.48].forEach(function (sx) {
        var col = new THREE.Mesh(colGeo, colMat);
        col.position.set(sx, baseH + bodyH * 0.5, sz);
        hall.add(col);
      });
    }

    // Polychrome Dougong frieze
    var frieze = createDougongFrieze(THREE, { w: w * 0.98, d: d * 0.98, beamH: Math.min(0.11, bodyH * 0.20) });
    frieze.position.y = baseH + bodyH + 0.04;
    hall.add(frieze);

    if (o.plaqueText) {
      var pMat = new THREE.MeshBasicMaterial({ map: makePlaqueSpriteTex(THREE, o.plaqueText) });
      var plq = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(0.68, w * 0.28), 0.22), pMat);
      plq.position.set(0, baseH + bodyH + 0.03, d * 0.52);
      hall.add(plq);
    }

    // Roof assembly (double-eave or single-eave concave curved roof)
    var yRoof = baseH + bodyH + 0.08;
    if (o.doubleEave) {
      var skirtRoof = createCurvedRoof(THREE, {
        style: "wudian", w: w * 1.04, d: d * 1.04, h: roofH * 0.46,
        tileKind: tileKind, eaveOver: Math.min(w, d) * 0.16, feiyanLift: Math.min(0.16, roofH * 0.24),
        beastCount: 3
      });
      skirtRoof.position.y = yRoof;
      hall.add(skirtRoof);
      var clere = new THREE.Mesh(new THREE.BoxGeometry(w * 0.78, roofH * 0.28, d * 0.74), colMat);
      clere.position.y = yRoof + roofH * 0.42;
      var upperDg = createDougongFrieze(THREE, { w: w * 0.80, d: d * 0.76, beamH: 0.07 });
      upperDg.position.y = yRoof + roofH * 0.58;
      hall.add(clere, upperDg);
      var topRoof = createCurvedRoof(THREE, {
        style: o.roofStyle || "wudian", w: w * 0.80, d: d * 0.78, h: roofH * 0.76,
        tileKind: tileKind, eaveOver: Math.min(w, d) * 0.15, feiyanLift: Math.min(0.22, roofH * 0.28),
        beastCount: 4
      });
      topRoof.position.y = yRoof + roofH * 0.62;
      hall.add(topRoof);
    } else {
      var singleRoof = createCurvedRoof(THREE, {
        style: o.roofStyle || "xieshan", w: w * 1.02, d: d * 1.02, h: roofH,
        tileKind: tileKind, eaveOver: Math.min(w, d) * 0.16, feiyanLift: Math.min(0.20, roofH * 0.28),
        beastCount: 3
      });
      singleRoof.position.y = yRoof;
      hall.add(singleRoof);
    }
    return hall;
  }

  function createGearWheel(THREE, opts) {
    var o = opts || {};
    var teeth = o.teeth || 18;
    var outerR = o.outerR || 0.42;
    var innerR = o.innerR || outerR * 0.82;
    var holeR = o.holeR || outerR * 0.22;
    var depth = o.thickness || 0.08;
    var shape = new THREE.Shape();
    for (var i = 0; i < teeth; i++) {
      var a0 = (i / teeth) * Math.PI * 2;
      var a1 = ((i + 0.22) / teeth) * Math.PI * 2;
      var a2 = ((i + 0.48) / teeth) * Math.PI * 2;
      var a3 = ((i + 0.72) / teeth) * Math.PI * 2;
      if (i === 0) shape.moveTo(Math.cos(a0) * innerR, Math.sin(a0) * innerR);
      else shape.lineTo(Math.cos(a0) * innerR, Math.sin(a0) * innerR);
      shape.lineTo(Math.cos(a1) * outerR, Math.sin(a1) * outerR);
      shape.lineTo(Math.cos(a2) * outerR, Math.sin(a2) * outerR);
      shape.lineTo(Math.cos(a3) * innerR, Math.sin(a3) * innerR);
    }
    shape.closePath();
    if (holeR > 0.01) {
      var hole = new THREE.Path();
      hole.absarc(0, 0, holeR, 0, Math.PI * 2, true);
      shape.holes.push(hole);
    }
    var gGeo = new THREE.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.006, bevelSegments: 2 });
    gGeo.center();
    var mat = o.material || new THREE.MeshStandardMaterial({ color: 0xb8862d, metalness: 0.78, roughness: 0.28 });
    var grp = new THREE.Group();
    grp.add(new THREE.Mesh(gGeo, mat));
    var hub = new THREE.Mesh(new THREE.CylinderGeometry(holeR * 1.45, holeR * 1.45, depth * 1.65, 16), mat);
    hub.rotation.x = Math.PI / 2;
    grp.add(hub);
    return grp;
  }

  function createCourtyardStage(THREE, opts) {
    var o = opts || {};
    var rad = o.radius || 3.1;
    var g = new THREE.Group();
    var graniteTex = repeatTex(THREE, "granite", 3, 3);
    var marbleTex = repeatTex(THREE, "marble", 4, 4);
    var stoneDark = new THREE.MeshStandardMaterial({ color: 0x262930, map: graniteTex, roughness: 0.78, metalness: 0.08 });
    var slabMat = new THREE.MeshStandardMaterial({ color: 0x3b3d42, map: marbleTex, roughness: 0.74, metalness: 0.04 });
    var brassMat = new THREE.MeshStandardMaterial({ color: 0xc99c45, roughness: 0.30, metalness: 0.82 });

    var base = new THREE.Mesh(new THREE.CylinderGeometry(rad, rad * 1.06, 0.24, 56), stoneDark);
    base.position.y = -0.12;
    base.receiveShadow = true;
    var upperDeck = new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.94, rad * 0.96, 0.06, 56), slabMat);
    upperDeck.position.y = 0.03;
    upperDeck.receiveShadow = true;
    var rim = new THREE.Mesh(new THREE.TorusGeometry(rad * 0.95, 0.022, 10, 64), brassMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.055;
    var shadowDisc = new THREE.Mesh(
      new THREE.PlaneGeometry(rad * 2.45, rad * 2.45),
      new THREE.MeshBasicMaterial({ map: createSharedTexture(THREE, "shadow"), transparent: true, depthWrite: false, opacity: 0.82 })
    );
    shadowDisc.rotation.x = -Math.PI / 2;
    shadowDisc.position.y = -0.24;
    g.add(base, upperDeck, rim, shadowDisc);
    return g;
  }

  function bindOrbitZoom(domEl, camera, stateObj, opts) {
    var o = opts || {};
    var minZ = o.minDist || 2.8;
    var maxZ = o.maxDist || 12.0;
    var onWheel = function (ev) {
      ev.preventDefault();
      var dir = camera.position.clone().sub(o.target || new THREE.Vector3(0, 0, 0));
      var dist = dir.length();
      var nextDist = Math.max(minZ, Math.min(maxZ, dist + ev.deltaY * 0.005));
      dir.setLength(nextDist);
      camera.position.copy((o.target || new THREE.Vector3(0, 0, 0))).add(dir);
    };
    domEl.addEventListener("wheel", onWheel, { passive: false });
    return function () { domEl.removeEventListener("wheel", onWheel); };
  }

  window.CCE_3D_ARCH = {
    createCurvedRoof: createCurvedRoof,
    createDougongFrieze: createDougongFrieze,
    createMarbleBalustrade: createMarbleBalustrade,
    createPalaceHall: createPalaceHall,
    createGearWheel: createGearWheel,
    createCourtyardStage: createCourtyardStage,
    bindOrbitZoom: bindOrbitZoom,
    makePlaqueSpriteTex: makePlaqueSpriteTex
  };

  var currentArtifact3D = "houmuwu-ding";
  var currentLighting = "daylight";
  var tiantanOpen = false;
  var activeRt = null;

  function disposeLocalRt() {
    if (!activeRt) return;
    try {
      if (activeRt.rafId) cancelAnimationFrame(activeRt.rafId);
      if (activeRt.ro) activeRt.ro.disconnect();
      if (activeRt.cleanupEvents) activeRt.cleanupEvents();
      disposeScene(activeRt.scene, activeRt.renderer);
      if (activeRt.renderer) {
        if (activeRt.renderer.forceContextLoss) activeRt.renderer.forceContextLoss();
        activeRt.renderer.dispose();
      }
    } catch (_e) {}
    activeRt = null;
  }

  function enableRelicShadows(root) {
    root.traverse(function (o) {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
  }

  function buildProceduralRelicGroup(THREE, relicId) {
    var group = new THREE.Group();
    if (relicId === "liangzhu-yucong") {
      var jadeTex = createSharedTexture(THREE, "jade");
      var bumpTex = createSharedTexture(THREE, "bronzeBump");
      var MatCls = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;
      var jadeMat = new MatCls({
        color: 0x9ab38f,
        map: jadeTex,
        bumpMap: bumpTex,
        bumpScale: 0.012,
        roughness: 0.18,
        metalness: 0.04,
        clearcoat: 0.65,
        clearcoatRoughness: 0.18
      });
      var grooveMat = new THREE.MeshStandardMaterial({ color: 0x4b6246, map: jadeTex, roughness: 0.42, metalness: 0.04 });
      var reliefMat = new THREE.MeshStandardMaterial({ color: 0xc2cfa6, bumpMap: bumpTex, bumpScale: 0.025, roughness: 0.24, metalness: 0.06 });

      // Hollow circular bore via LatheGeometry (real perforated core visible top & bottom)
      var borePts = [
        new THREE.Vector2(0.58, -1.28),
        new THREE.Vector2(0.84, -1.28),
        new THREE.Vector2(0.84, -1.08),
        new THREE.Vector2(0.72, -1.04),
        new THREE.Vector2(0.72, 1.04),
        new THREE.Vector2(0.84, 1.08),
        new THREE.Vector2(0.84, 1.28),
        new THREE.Vector2(0.58, 1.28),
        new THREE.Vector2(0.56, 1.05),
        new THREE.Vector2(0.56, -1.05),
        new THREE.Vector2(0.58, -1.28)
      ];
      var coreWall = new THREE.Mesh(new THREE.LatheGeometry(borePts, 48), jadeMat);
      group.add(coreWall);

      // 4 sculpted corner prisms + 2 tiered deity-mask registers + central vertical channels
      var corners = [[-0.56, -0.56], [0.56, -0.56], [-0.56, 0.56], [0.56, 0.56]];
      corners.forEach(function (cp) {
        var block = new THREE.Mesh(new THREE.BoxGeometry(0.92, 2.08, 0.92), jadeMat);
        block.position.set(cp[0], 0, cp[1]);
        group.add(block);
        [-0.52, 0.52].forEach(function (ry) {
          var eyeBar = new THREE.Mesh(new THREE.BoxGeometry(0.96, 0.12, 0.96), reliefMat);
          eyeBar.position.set(cp[0], ry + 0.12, cp[1]);
          var eyeBand = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.05, 0.98), grooveMat);
          eyeBand.position.set(cp[0], ry - 0.06, cp[1]);
          group.add(eyeBar, eyeBand);
        });
      });
      var midCollar = new THREE.Mesh(new THREE.BoxGeometry(1.94, 0.12, 1.94), grooveMat);
      var hongmuMat = new THREE.MeshStandardMaterial({ color: 0x3b1c14, map: createSharedTexture(THREE, "wood"), roughness: 0.42 });
      var cradle = new THREE.Mesh(new THREE.BoxGeometry(1.98, 0.14, 1.98), hongmuMat);
      cradle.position.y = -1.21;
      group.add(midCollar, cradle);
      enableRelicShadows(group);
      return group;
    }

    if (relicId === "ngoc-lu-bronze-drum") {
      var drumTopTex = createSharedTexture(THREE, "ngocluDrumTop");
      var bronzeTex = createSharedTexture(THREE, "bronze");
      var bumpTex2 = createSharedTexture(THREE, "bronzeBump");
      var MatDrum = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;
      var patinaMat = new MatDrum({
        color: 0x5d6954,
        map: bronzeTex,
        bumpMap: bumpTex2,
        bumpScale: 0.02,
        roughness: 0.36,
        metalness: 0.78,
        clearcoat: 0.15
      });
      var goldRelief = new THREE.MeshStandardMaterial({
        color: 0xb8964e,
        bumpMap: bumpTex2,
        bumpScale: 0.025,
        roughness: 0.28,
        metalness: 0.84
      });
      var topMat = new THREE.MeshStandardMaterial({
        map: drumTopTex,
        bumpMap: bumpTex2,
        bumpScale: 0.03,
        roughness: 0.32,
        metalness: 0.72
      });

      // Authentic Heger I Bronze Drum profile via LatheGeometry
      var drumProfile = [
        new THREE.Vector2(1.48, -0.96),
        new THREE.Vector2(1.42, -0.96),
        new THREE.Vector2(1.22, -0.45),
        new THREE.Vector2(1.18, 0.05),
        new THREE.Vector2(1.56, 0.48),
        new THREE.Vector2(1.66, 0.78),
        new THREE.Vector2(1.74, 0.84),
        new THREE.Vector2(1.74, 0.91),
        new THREE.Vector2(1.62, 0.91),
        new THREE.Vector2(1.58, 0.82),
        new THREE.Vector2(1.46, 0.48),
        new THREE.Vector2(1.1, 0.05),
        new THREE.Vector2(1.14, -0.45),
        new THREE.Vector2(1.36, -0.96)
      ];
      var drumBody = new THREE.Mesh(new THREE.LatheGeometry(drumProfile, 64), patinaMat);
      var tympanum = new THREE.Mesh(new THREE.CylinderGeometry(1.73, 1.73, 0.06, 64), topMat);
      tympanum.position.y = 0.89;
      group.add(drumBody, tympanum);

      // Raised concentric cast ribs & 14-ray central star hub
      [0.44, 0.92, 1.38, 1.66].forEach(function (rr) {
        var rib = new THREE.Mesh(new THREE.TorusGeometry(rr, 0.022, 10, 64), goldRelief);
        rib.rotation.x = Math.PI / 2;
        rib.position.y = 0.92;
        group.add(rib);
      });
      var sunHub = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.28, 0.06, 14), goldRelief);
      sunHub.position.y = 0.94;
      group.add(sunHub);

      // 4 sculpted rim frogs + 4 braided strap handles
      for (var fi = 0; fi < 4; fi++) {
        var fa = (fi * Math.PI) / 2 + Math.PI / 4;
        var frog = new THREE.Mesh(new THREE.SphereGeometry(0.085, 14, 10), goldRelief);
        frog.scale.set(1.25, 0.72, 1.0);
        frog.position.set(Math.cos(fa) * 1.54, 0.96, Math.sin(fa) * 1.54);
        frog.rotation.y = -fa;
        group.add(frog);

        var ha = (fi * Math.PI) / 2;
        var hCurve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(Math.cos(ha) * 1.54, 0.62, Math.sin(ha) * 1.54),
          new THREE.Vector3(Math.cos(ha) * 1.84, 0.42, Math.sin(ha) * 1.84),
          new THREE.Vector3(Math.cos(ha) * 1.24, 0.08, Math.sin(ha) * 1.24)
        ]);
        var handleMesh = new THREE.Mesh(new THREE.TubeGeometry(hCurve, 16, 0.048, 10, false), goldRelief);
        group.add(handleMesh);
      }
      enableRelicShadows(group);
      return group;
    }

    if (relicId === "longquan-celadon-vase") {
      var celTex = createSharedTexture(THREE, "celadon");
      var MatCel = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;
      var glazeMat = new MatCel({
        color: 0x84afa0,
        map: celTex,
        roughness: 0.14,
        metalness: 0.04,
        clearcoat: 1.0,
        clearcoatRoughness: 0.06
      });
      var footRingMat = new THREE.MeshStandardMaterial({ color: 0x5c4438, roughness: 0.78, metalness: 0.05 });

      // Classic Southern Song Kinuta Phoenix-Ear mallet profile via 64-seg LatheGeometry
      var vasePts = [
        new THREE.Vector2(0.01, -1.04),
        new THREE.Vector2(0.58, -1.04),
        new THREE.Vector2(0.68, -0.96),
        new THREE.Vector2(0.76, -0.82),
        new THREE.Vector2(0.84, -0.22),
        new THREE.Vector2(0.86, 0.28),
        new THREE.Vector2(0.78, 0.48),
        new THREE.Vector2(0.42, 0.62),
        new THREE.Vector2(0.32, 0.78),
        new THREE.Vector2(0.30, 1.32),
        new THREE.Vector2(0.35, 1.48),
        new THREE.Vector2(0.56, 1.62),
        new THREE.Vector2(0.58, 1.68),
        new THREE.Vector2(0.46, 1.68),
        new THREE.Vector2(0.24, 1.48),
        new THREE.Vector2(0.22, 0.85)
      ];
      var vaseMesh = new THREE.Mesh(new THREE.LatheGeometry(vasePts, 64), glazeMat);
      var unglazedFoot = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.045, 10, 48), footRingMat);
      unglazedFoot.rotation.x = Math.PI / 2;
      unglazedFoot.position.y = -1.02;
      group.add(vaseMesh, unglazedFoot);

      // Twin sculpted Phoenix-ear handles flanking the tall neck
      [-1, 1].forEach(function (side) {
        var phCurve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(side * 0.30, 1.46, 0),
          new THREE.Vector3(side * 0.58, 1.54, 0),
          new THREE.Vector3(side * 0.66, 1.24, 0),
          new THREE.Vector3(side * 0.56, 0.90, 0),
          new THREE.Vector3(side * 0.34, 0.72, 0)
        ]);
        var earTube = new THREE.Mesh(new THREE.TubeGeometry(phCurve, 24, 0.065, 12, false), glazeMat);
        var crest = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.22, 10), glazeMat);
        crest.position.set(side * 0.56, 1.58, 0);
        crest.rotation.z = -side * 0.55;
        group.add(earTube, crest);
      });
      enableRelicShadows(group);
      return group;
    }

    // Default: houmuwu-ding (832.84 kg Late Shang Ritual Cauldron)
    var sBronzeTex = createSharedTexture(THREE, "bronze");
    var sBumpTex = createSharedTexture(THREE, "bronzeBump");
    var MatBronze = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;
    var shangBronze = new MatBronze({
      color: 0x526456,
      map: sBronzeTex,
      bumpMap: sBumpTex,
      bumpScale: 0.032,
      roughness: 0.36,
      metalness: 0.76,
      clearcoat: 0.14
    });
    var darkCast = new THREE.MeshStandardMaterial({
      color: 0x2c362e,
      map: sBronzeTex,
      bumpMap: sBumpTex,
      bumpScale: 0.025,
      roughness: 0.48,
      metalness: 0.65
    });
    var reliefTrim = new THREE.MeshStandardMaterial({
      color: 0x8b845e,
      bumpMap: sBumpTex,
      bumpScale: 0.04,
      roughness: 0.32,
      metalness: 0.8
    });

    // Trapezoidal-flared hollow vessel body + thick stepped lip + recessed cavity + 4-face Taotie relief bands
    var cauldronOuter = new THREE.Mesh(new THREE.BoxGeometry(2.26, 1.28, 1.62), shangBronze);
    cauldronOuter.position.y = 0.28;
    var cauldronLower = new THREE.Mesh(new THREE.BoxGeometry(2.08, 0.22, 1.44), darkCast);
    cauldronLower.position.y = -0.34;
    var cavity = new THREE.Mesh(new THREE.BoxGeometry(1.94, 0.16, 1.32), new THREE.MeshStandardMaterial({ color: 0x171b18, roughness: 0.88 }));
    cavity.position.y = 0.92;
    var rim = new THREE.Mesh(new THREE.BoxGeometry(2.44, 0.14, 1.80), darkCast);
    rim.position.y = 0.96;
    var taotieBand = new THREE.Mesh(new THREE.BoxGeometry(2.30, 0.34, 1.66), reliefTrim);
    taotieBand.position.y = 0.68;
    var kuiBorder = new THREE.Mesh(new THREE.BoxGeometry(2.29, 0.12, 1.65), reliefTrim);
    kuiBorder.position.y = -0.10;
    group.add(cauldronOuter, cauldronLower, cavity, rim, taotieBand, kuiBorder);

    // 4 Cast Panel Framing Mouldings (leaving central recessed field)
    [-0.95, 0.95].forEach(function (fx) {
      [-0.82, 0.82].forEach(function (fz) {
        var bossEye = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 8), reliefTrim);
        bossEye.position.set(fx * 0.45, 0.68, fz * 1.01);
        group.add(bossEye);
      });
    });

    // 8 characteristic notched Shang corner & mid-panel phi-lang flanges
    [
      [-1.15, -0.83], [1.15, -0.83], [-1.15, 0.83], [1.15, 0.83],
      [0, -0.85], [0, 0.85], [-1.17, 0], [1.17, 0]
    ].forEach(function (fp) {
      var flange = new THREE.Mesh(new THREE.BoxGeometry(0.11, 1.24, 0.11), reliefTrim);
      flange.position.set(fp[0], 0.28, fp[1]);
      for (var nt = -2; nt <= 2; nt++) {
        var notchTooth = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.09, 0.14), shangBronze);
        notchTooth.position.set(fp[0], 0.28 + nt * 0.22, fp[1]);
        group.add(notchTooth);
      }
      group.add(flange);
    });

    // 4 columnar bronze legs with upper beast-mask collars & ringed feet
    [[-0.84, -0.56], [0.84, -0.56], [-0.84, 0.56], [0.84, 0.56]].forEach(function (pos) {
      var leg = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.15, 1.12, 24), shangBronze);
      leg.position.set(pos[0], -0.84, pos[1]);
      var collar = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.24, 24), reliefTrim);
      collar.position.set(pos[0], -0.44, pos[1]);
      var footRing = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.03, 10, 24), darkCast);
      footRing.rotation.x = Math.PI / 2;
      footRing.position.set(pos[0], -1.24, pos[1]);
      group.add(leg, collar, footRing);
    });

    // 2 iconic thick upright square-arch loop ears with tiger relief bosses
    [-0.96, 0.96].forEach(function (hx) {
      var earLoop = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.085, 14, 28, Math.PI), shangBronze);
      earLoop.position.set(hx, 1.04, 0);
      earLoop.rotation.y = Math.PI / 2;
      var boss = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.28, 0.42), reliefTrim);
      boss.position.set(hx * 1.08, 1.14, 0);
      group.add(earLoop, boss);
    });
    enableRelicShadows(group);
    return group;
  }

  function renderFallbackSVG(container, relicId, isEn) {
    container.innerHTML =
      '<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.25rem;text-align:center;color:#E6E1D6;">' +
        '<svg viewBox="0 0 200 140" width="180" height="126" aria-hidden="true">' +
          '<rect x="20" y="20" width="160" height="100" fill="none" stroke="#B68B46" stroke-width="1.5" stroke-dasharray="4 3"/>' +
          '<rect x="65" y="45" width="70" height="42" fill="rgba(182,139,70,0.2)" stroke="#F2EFE9" stroke-width="2"/>' +
          '<line x1="75" y1="87" x2="75" y2="112" stroke="#F2EFE9" stroke-width="4"/>' +
          '<line x1="125" y1="87" x2="125" y2="112" stroke="#F2EFE9" stroke-width="4"/>' +
        '</svg>' +
        '<div style="font-size:0.84rem;margin-top:0.5rem;">' +
          esc(isEn ? ("Technical Blueprint Preview (" + relicId + ") — WebGL offline fallback active") : ("Bản vẽ Kỹ thuật Dự phòng (" + relicId + ") — Chế độ không cần WebGL")) +
        '</div>' +
      '</div>';
  }

  function mountCanvas() {
    var container = document.getElementById("cce-artifact-3d-canvas");
    if (!container) return;
    var isEn = window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en";
    if (typeof THREE === "undefined") {
      renderFallbackSVG(container, currentArtifact3D, isEn);
      return;
    }

    disposeLocalRt();
    registerWebGL("artifacts-3d", disposeLocalRt);

    container.innerHTML = "";
    var w = Math.max(260, container.clientWidth || 520);
    var h = Math.max(260, container.clientHeight || 340);

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(currentLighting === "warm-spot" ? 0x161210 : currentLighting === "relief" ? 0x0c0d0f : 0x1a1e24);

    var camera = new THREE.PerspectiveCamera(36, w / h, 0.1, 100);
    camera.position.set(0, 1.55, 5.4);
    camera.lookAt(0, 0.05, 0);

    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    } catch (_err) {
      renderFallbackSVG(container, currentArtifact3D, isEn);
      return;
    }
    configureRenderer(THREE, renderer, {
      exposure: currentLighting === "warm-spot" ? 1.16 : currentLighting === "relief" ? 1.08 : 1.14
    });
    applyStudioEnvironment(THREE, renderer, scene, currentLighting === "daylight" ? "daylight" : "warm");
    renderer.setSize(w, h, false);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.touchAction = "none";
    container.appendChild(renderer.domElement);

    var hemi = new THREE.HemisphereLight(
      currentLighting === "daylight" ? 0xeef5ff : 0xffe8c4,
      0x201d19,
      currentLighting === "daylight" ? 0.65 : currentLighting === "warm-spot" ? 0.46 : 0.22
    );
    var keyLight = new THREE.DirectionalLight(
      currentLighting === "warm-spot" ? 0xffdfb0 : 0xffffff,
      currentLighting === "relief" ? 1.85 : 1.25
    );
    keyLight.position.set(currentLighting === "relief" ? 6.5 : 3.5, currentLighting === "relief" ? 1.4 : 5.5, 3.8);
    tuneShadowLight(keyLight, 4.5);
    var rimLight = new THREE.DirectionalLight(0xa4c4d8, 0.58);
    rimLight.position.set(-4.5, 2.8, -4.2);
    scene.add(hemi, keyLight, rimLight);

    var displayStage = new THREE.Group();
    var relic = buildProceduralRelicGroup(THREE, currentArtifact3D);
    var baseY = currentArtifact3D === "houmuwu-ding" ? -1.39 : currentArtifact3D === "liangzhu-yucong" ? -1.28 : currentArtifact3D === "ngoc-lu-bronze-drum" ? -0.96 : -1.04;
    var pedestal = createMuseumPedestal(THREE, 1.72, 0.34);
    pedestal.position.y = baseY - 0.04;
    displayStage.add(pedestal, relic);
    displayStage.position.y = 0.06;
    scene.add(displayStage);

    var dragging = false;
    var prevX = 0;
    var prevY = 0;
    var rotY = 0.45;
    var rotX = 0.16;

    function onDown(ev) {
      dragging = true;
      var pt = ev.touches ? ev.touches[0] : ev;
      prevX = pt.clientX;
      prevY = pt.clientY;
    }
    function onMove(ev) {
      if (!dragging) return;
      var pt = ev.touches ? ev.touches[0] : ev;
      rotY += (pt.clientX - prevX) * 0.012;
      rotX = Math.max(-0.55, Math.min(0.65, rotX + (pt.clientY - prevY) * 0.008));
      prevX = pt.clientX;
      prevY = pt.clientY;
    }
    function onUp() { dragging = false; }
    function onWheel(ev) {
      ev.preventDefault();
      camera.position.z = Math.max(3.1, Math.min(8.2, camera.position.z + ev.deltaY * 0.004));
    }

    var dom = renderer.domElement;
    dom.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    dom.addEventListener("wheel", onWheel, { passive: false });

    var ro = typeof ResizeObserver === "function" ? new ResizeObserver(function () {
      var nw = Math.max(260, container.clientWidth || 520);
      var nh = Math.max(260, container.clientHeight || 340);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh, false);
    }) : null;
    if (ro) ro.observe(container);

    var rafId = 0;
    function tick() {
      rafId = requestAnimationFrame(tick);
      if (!dragging) rotY += 0.0045;
      displayStage.rotation.y = rotY;
      displayStage.rotation.x = rotX;
      renderer.render(scene, camera);
    }
    tick();

    activeRt = {
      scene: scene,
      renderer: renderer,
      rafId: rafId,
      ro: ro,
      cleanupEvents: function () {
        dom.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        dom.removeEventListener("wheel", onWheel);
      }
    };
  }

  function renderMuseum3DStudioSection(enM, uiLang) {
    var activeItem = ARTIFACTS_3D_LIST[0];
    for (var i = 0; i < ARTIFACTS_3D_LIST.length; i++) {
      if (ARTIFACTS_3D_LIST[i].id === currentArtifact3D) { activeItem = ARTIFACTS_3D_LIST[i]; break; }
    }
    var safeLang = uiLang || "vi";

    return (
      '<section class="card mt-2 mb-2" id="museum-3d-studio-section" style="padding:1.25rem 1.35rem;border-top:3px solid var(--imperial-red);">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
          '<div>' +
            '<div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "3D MUSEUM LAB & TIANTAN HERITAGE TWIN" : "PHÒNG THÍ NGHIỆM BẢO TÀNG 3D & THIÊN ĐÀN BẮC KINH") + '</div>' +
            '<h2 style="font-family:var(--font-editorial);font-size:1.45rem;margin:0.15rem 0;">' + (enM ? "Interactive 3D National Relics & Imperial Architecture" : "Khảo cứu Bảo vật Quốc gia 3D & Đàn Tế Trời Thiên Đàn") + '</h2>' +
          '</div>' +
          '<button type="button" class="btn ' + (tiantanOpen ? "btn-primary" : "btn-gold") + ' btn-sm" data-action="v3-toggle-tiantan">' +
            (tiantanOpen ? (enM ? "Switch to 3D Artifacts" : "Quay lại 4 Bảo vật 3D") : (enM ? "Open Temple of Heaven 3D Twin →" : "Mở Mô hình Thiên Đàn 3D →")) +
          '</button>' +
        '</div>' +

        (tiantanOpen ? (
          '<div style="border:1px solid var(--hairline);background:#0f1012;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.75rem;border-bottom:1px solid rgba(255,255,255,0.12);color:#F2EFE9;font-size:0.8rem;">' +
              '<span><strong>天坛祈年殿</strong> · ' + (enM ? "Interactive Digital Twin synchronized to " : "Mô hình Số Thiên Đàn đồng bộ ngôn ngữ: ") + '<code>' + esc(safeLang) + '</code></span>' +
              '<a href="assets/interactive/tiantan-3d-heritage.html" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size:0.74rem;padding:0.2rem 0.5rem;">⤢ ' + (enM ? "Open Full Tab" : "Mở toàn màn hình") + '</a>' +
            '</div>' +
            '<iframe id="cce-tiantan-iframe" title="Temple of Heaven 3D Heritage Twin" src="assets/interactive/tiantan-3d-heritage.html?lang=' + encodeURIComponent(safeLang) + '" style="width:100%;height:500px;border:0;display:block;" loading="lazy"></iframe>' +
          '</div>'
        ) : (
          '<div class="grid grid-2" style="gap:1rem;align-items:stretch;">' +
            '<div id="cce-artifact-3d-canvas" style="min-height:320px;height:340px;background:#16181a;border:1px solid var(--hairline);position:relative;overflow:hidden;"></div>' +
            '<div style="display:flex;flex-direction:column;gap:0.75rem;">' +
              '<div style="display:flex;flex-wrap:wrap;gap:0.35rem;">' +
                ARTIFACTS_3D_LIST.map(function (it) {
                  return '<button type="button" class="filter-pill ' + (it.id === activeItem.id ? "active" : "") + '" data-action="v3-select-3d-artifact" data-id="' + it.id + '" style="font-size:0.75rem;padding:0.25rem 0.6rem;">' +
                    esc(enM ? it.titleEn.split("(")[0].trim() : it.titleVi.split("(")[0].trim()) +
                  '</button>';
                }).join("") +
              '</div>' +
              '<div style="display:flex;flex-wrap:wrap;gap:0.35rem;align-items:center;">' +
                '<span style="font-size:0.74rem;font-weight:700;color:var(--text-muted);">' + (enM ? "Lighting:" : "Ánh sáng:") + '</span>' +
                LIGHTING_MODES.map(function (lm) {
                  return '<button type="button" class="btn ' + (lm.id === currentLighting ? "btn-primary" : "btn-secondary") + ' btn-sm" data-action="v3-set-3d-light" data-light="' + lm.id + '" style="font-size:0.73rem;padding:0.22rem 0.55rem;">' +
                    esc(enM ? lm.labelEn : lm.labelVi) +
                  '</button>';
                }).join("") +
              '</div>' +
              '<div class="analysis-panel-box" style="margin-top:auto;">' +
                '<div style="font-weight:700;font-size:1.05rem;">' + esc(enM ? activeItem.titleEn : activeItem.titleVi) + ' <span class="hanzi" style="color:var(--imperial-red);">' + esc(activeItem.titleZh) + '</span></div>' +
                '<div style="font-size:0.78rem;color:var(--text-muted);margin:0.2rem 0 0.45rem;">' + esc(enM ? activeItem.eraEn : activeItem.eraVi) + '</div>' +
                '<p style="margin:0;font-size:0.84rem;line-height:1.6;">' + esc(enM ? activeItem.noteEn : activeItem.noteVi) + '</p>' +
              '</div>' +
              '<div style="font-size:0.76rem;color:var(--text-muted);">' + (enM ? "Drag to orbit · Scroll wheel to zoom · Single active WebGL context auto-disposed on switch." : "Kéo chuột để xoay · Cuộn để thu phóng · Tự động giải phóng bộ nhớ WebGL khi chuyển cảnh.") + '</div>' +
            '</div>' +
          '</div>'
        )) +
      '</section>'
    );
  }

  function syncTiantanLang(lang) {
    var iframe = document.getElementById("cce-tiantan-iframe");
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage({ type: "cce-set-lang", lang: lang || "vi" }, "*");
      } catch (_e) {}
    }
  }

  window.CCE_ARTIFACTS_3D = {
    renderSection: renderMuseum3DStudioSection,
    initMountedCanvasIfAny: function () {
      if (!tiantanOpen && document.getElementById("cce-artifact-3d-canvas")) {
        mountCanvas();
      }
    },
    setArtifact: function (id) { currentArtifact3D = id || "houmuwu-ding"; tiantanOpen = false; },
    setLighting: function (light) { currentLighting = light || "daylight"; },
    toggleTiantan: function () {
      tiantanOpen = !tiantanOpen;
      if (tiantanOpen) disposeLocalRt();
    },
    isTiantanOpen: function () { return tiantanOpen; },
    syncTiantanLang: syncTiantanLang,
    dispose: disposeLocalRt
  };
})();
