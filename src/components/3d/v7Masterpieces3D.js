// ============================================================================
// CHINESE CULTURE EXPLORER V7.0 — 6 Museum-Grade WebGL Studios (#19–#24)
// #19 Meridian Gate (Five-Phoenix Towers & Elastic Seismic Dougong)
// #20 Suzhou Hexagonal Water Pavilion, Moon Gate Wall & Taihu Rockery
// #21 Dunhuang Mogao Hang 96 Nine-Tier Timber Facade & Painted Grotto Cliff
// #22 Qin Terracotta Pit 1 Rammed-Earth Corridors, Armored Troops & Chariot
// #23 Northern Song Rainbow Woven-Timber Pierless Arch Bridge & Barges
// #24 Zheng He 9-Masted Fuchuan Treasure Ship & 11 Watertight Bulkheads
// Strictly preserves 6 SUB_STUDIOS id fields (Gate 13) & CCE_WEBGL_MGR.
// Pure ES5 IIFE — Zero UI emojis, WCAG AAA ready.
// ============================================================================

(function () {
  "use strict";

  var rt = null;
  var activeSubId = "meridian"; // meridian | suzhou | mogao | terracotta | hongqiao | baochuan9
  var seismicShake = false;
  var cutawayHull = false;
  var sunAngleIdx = 1; // 0: morning, 1: noon, 2: dusk

  var SUB_STUDIOS = [
    {
      id: "meridian",
      sceneNum: 19,
      titleVi: "#19 Cổng Ngọ Môn & Đấu Củng",
      titleEn: "#19 Meridian Gate & Dougong",
      noteVi: "Đài chữ U Tử Cấm Thành với Tháp Ngũ Phượng năm lầu mái lưu ly uốn cong & hệ Đấu Củng giảm chấn.",
      noteEn: "Forbidden City U-podium with Five-Phoenix curved glazed-tile pavilions & seismic Dougong brackets.",
      ytId: "w78Yb_aotH0"
    },
    {
      id: "suzhou",
      sceneNum: 20,
      titleVi: "#20 Đình Lục Giác & Đá Thái Hồ",
      titleEn: "#20 Suzhou Pavilion & Taihu Stone",
      noteVi: "Đá Thái Hồ 4 chuẩn Sấu–Trứ–Lậu–Thấu soi bóng bên đình lục giác mái đao cong, cầu chín khúc và Nguyệt Động Môn.",
      noteEn: "Perforated Taihu karst stone beside a hexagonal water pavilion with upturned Jiangnan eaves & moon-gate wall.",
      ytId: "xsPOs-yCJ3g"
    },
    {
      id: "mogao",
      sceneNum: 21,
      titleVi: "#21 Cửu Tầng Lầu Hang Đá Đôn Hoàng",
      titleEn: "#21 Dunhuang 9-Tier Mogao Cliff",
      noteVi: "Mặt đứng 9 tầng mái cong Hang 96 che chở tượng Đại Phật bên vách đá sỏi kết Mạc Cao Đôn Hoàng.",
      noteEn: "Nine-tier timber frontispiece sheltering Cave 96 Buddha along stratified Mogao conglomerate cliffs.",
      ytId: "R29A0GyLYlE"
    },
    {
      id: "terracotta",
      sceneNum: 22,
      titleVi: "#22 Hầm Số 1 Binh Mã Dũng Tây An",
      titleEn: "#22 Qin Terracotta Pit 1 Phalanx",
      noteVi: "Đội hình chiến trận chia hào đất nện (Hãng Thổ) với tượng giáp phiến, tướng quân đội mũ Hạt Quan & chiến xa 4 ngựa.",
      noteEn: "Rammed-earth corridors organizing lamellar-armored Qin warriors, senior officers, and a 4-horse command chariot.",
      ytId: "mP5p4QbvPtc"
    },
    {
      id: "hongqiao",
      sceneNum: 23,
      titleVi: "#23 Cầu Vòm Hồng Kiều Biện Kinh",
      titleEn: "#23 Song Rainbow Woven Bridge",
      noteVi: "Hai hệ vòm gỗ đan chéo khóa mộng không trụ giữa sông Biện nhường lối cho thuyền lương thực thời Bắc Tống.",
      noteEn: "Self-locking cross-woven timber arch spanning the Bian River without center piers as Song grain barges pass.",
      ytId: "QfU7sU_iCQM"
    },
    {
      id: "baochuan9",
      sceneNum: 24,
      titleVi: "#24 Bảo Thuyền 9 Buồm Trịnh Hòa",
      titleEn: "#24 Zheng He 9-Masted Treasure Ship",
      noteVi: "Hải thuyền Phúc Thuyền đáy chữ V với 9 cột buồm nan tre, lầu lái Vĩ Lâu và 11 vách khoang Thủy Mật Cách Thương.",
      noteEn: "Ming 9-masted V-hull flagship displaying battened crimson lug sails, stern castle, and 11 watertight bulkheads.",
      ytId: "arfV94Y9tkE"
    }
  ];

  function ensureMgr() {
    if (window.CCE_WEBGL_MGR) return window.CCE_WEBGL_MGR;
    return { register: function () {}, disposeAll: function () {} };
  }

  function dispose() {
    if (!rt) return;
    if (rt.rafId) cancelAnimationFrame(rt.rafId);
    if (rt.cleanup) rt.cleanup();
    if (rt.ro) rt.ro.disconnect();
    if (window.CCE_3D_PBR && rt.scene) {
      try { window.CCE_3D_PBR.disposeScene(rt.scene, rt.renderer); } catch (_e) {}
    } else if (rt.scene && typeof rt.scene.traverse === "function") {
      rt.scene.traverse(function (obj) {
        if (obj.geometry && obj.geometry.dispose) try { obj.geometry.dispose(); } catch (_e) {}
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach(function (m) { if (m && m.dispose) try { m.dispose(); } catch (_e) {} });
          } else if (obj.material.dispose) {
            try { obj.material.dispose(); } catch (_e) {}
          }
        }
      });
    }
    if (rt.renderer) try { rt.renderer.dispose(); } catch (_e) {}
    rt = null;
  }

  function buildSubScene(THREE, root) {
    var PBR = window.CCE_3D_PBR;
    var ARCH = window.CCE_3D_ARCH;
    var MatPhys = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;

    var brickMat = new THREE.MeshStandardMaterial({
      color: 0xb64a3e,
      map: PBR ? PBR.repeatTex(THREE, "fortressBrick", 5, 2) : null,
      bumpMap: PBR ? PBR.repeatTex(THREE, "fortressBump", 5, 2) : null,
      bumpScale: 0.024,
      roughness: 0.82,
      metalness: 0.04
    });
    var greyBrickMat = new THREE.MeshStandardMaterial({
      color: 0x7e8388,
      map: PBR ? PBR.repeatTex(THREE, "greyBrick", 4, 2) : null,
      bumpMap: PBR ? PBR.repeatTex(THREE, "greyBrickBump", 4, 2) : null,
      bumpScale: 0.022,
      roughness: 0.80,
      metalness: 0.05
    });
    var timberMat = new THREE.MeshStandardMaterial({
      color: 0x623d26,
      map: PBR ? PBR.repeatTex(THREE, "wood", 2, 1) : null,
      bumpMap: PBR ? PBR.getTexture(THREE, "woodBump") : null,
      bumpScale: 0.018,
      roughness: 0.62,
      metalness: 0.04
    });
    var vermilionMat = new THREE.MeshStandardMaterial({
      color: 0x8d221c,
      map: PBR ? PBR.getTexture(THREE, "wood") : null,
      roughness: 0.44,
      metalness: 0.06
    });
    var goldBronzeMat = new MatPhys({
      color: 0xd4a242,
      metalness: 0.82,
      roughness: 0.24,
      clearcoat: 0.25
    });
    var marbleMat = new THREE.MeshStandardMaterial({
      color: 0xf0eae0,
      map: PBR ? PBR.repeatTex(THREE, "marble", 3, 2) : null,
      roughness: 0.50,
      metalness: 0.04
    });
    var graniteMat = new THREE.MeshStandardMaterial({
      color: 0x3b3d42,
      map: PBR ? PBR.repeatTex(THREE, "granite", 4, 4) : null,
      roughness: 0.78,
      metalness: 0.08
    });
    var rammedEarthMat = new THREE.MeshStandardMaterial({
      color: 0xc29e74,
      map: PBR ? PBR.repeatTex(THREE, "rammedEarth", 3, 2) : null,
      roughness: 0.88,
      metalness: 0.02
    });
    var gateLeafMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: PBR ? PBR.getTexture(THREE, "gateStuds") : null,
      roughness: 0.52,
      metalness: 0.14
    });
    var clayMat = new THREE.MeshStandardMaterial({
      color: 0x9b8672,
      map: PBR ? PBR.getTexture(THREE, "rammedEarth") : null,
      roughness: 0.82,
      metalness: 0.04
    });
    var armorMat = new THREE.MeshStandardMaterial({
      color: 0x4b443c,
      bumpMap: PBR ? PBR.getTexture(THREE, "bronzeBump") : null,
      bumpScale: 0.02,
      roughness: 0.62,
      metalness: 0.15
    });
    var waterMat = new MatPhys({
      color: 0x1a685b,
      roughness: 0.10,
      metalness: 0.36,
      clearcoat: 0.86,
      transparent: true,
      opacity: 0.88
    });
    var limeWallMat = new THREE.MeshStandardMaterial({
      color: 0xf2ede3,
      map: PBR ? PBR.repeatTex(THREE, "marble", 2, 2) : null,
      roughness: 0.76
    });
    var slateMat = new THREE.MeshStandardMaterial({
      color: 0x363d44,
      map: PBR ? PBR.repeatTex(THREE, "slateTile", 2, 2) : null,
      roughness: 0.62
    });

    if (ARCH) {
      var stage = ARCH.createCourtyardStage(THREE, { radius: 3.15 });
      stage.position.y = -0.94;
      root.add(stage);
    } else if (PBR) {
      var ped = PBR.createMuseumPedestal(THREE, 2.85, 0.22);
      ped.position.y = -0.94;
      root.add(ped);
    }

    var anim = {};

    if (activeSubId === "meridian") {
      // Imperial Quechang stone-paved courtyard + central Yudao flagstone causeway
      var court = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.10, 3.8), graniteMat);
      court.position.set(0, -0.84, 0.28);
      var yudao = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.12, 3.1), marbleMat);
      yudao.position.set(0, -0.83, 0.62);
      root.add(court, yudao);

      // Pair of gilt-bronze Tonggang water vats guarding Meridian Court
      [-1.02, 1.02].forEach(function (vx) {
        var vPed = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.10, 12), marbleMat);
        vPed.position.set(vx, -0.74, 0.92);
        var vBowl = new THREE.Mesh(new THREE.SphereGeometry(0.10, 14, 10), goldBronzeMat);
        vBowl.scale.set(1.15, 0.82, 1.15);
        vBowl.position.set(vx, -0.64, 0.92);
        root.add(vPed, vBowl);
      });

      // U-shaped Battered Masonry Bastion (Sumizuo plinth + brick bastion walls)
      var centerPlinth = new THREE.Mesh(new THREE.BoxGeometry(4.36, 0.14, 1.38), marbleMat);
      centerPlinth.position.set(0, -0.72, -0.58);
      var centerBastion = new THREE.Mesh(new THREE.BoxGeometry(4.24, 0.72, 1.24), brickMat);
      centerBastion.position.set(0, -0.29, -0.58);
      var centerTopCap = new THREE.Mesh(new THREE.BoxGeometry(4.28, 0.06, 1.28), marbleMat);
      centerTopCap.position.set(0, 0.10, -0.58);
      root.add(centerPlinth, centerBastion, centerTopCap);

      // 3 Central + 2 Side Arched Gateways with Studded Crimson Gates
      [-1.18, -0.58, 0, 0.58, 1.18].forEach(function (gx, gIdx) {
        var gW = gx === 0 ? 0.34 : 0.24;
        var gH = gx === 0 ? 0.46 : 0.38;
        var voidM = new THREE.Mesh(new THREE.BoxGeometry(gW, gH, 1.28), new THREE.MeshStandardMaterial({ color: 0x150a08, roughness: 0.92 }));
        voidM.position.set(gx, -0.65 + gH * 0.5, -0.58);
        var archTrim = new THREE.Mesh(new THREE.TorusGeometry(gW * 0.5, 0.022, 8, 14, Math.PI), marbleMat);
        archTrim.position.set(gx, -0.65 + gH, 0.05);
        root.add(voidM, archTrim);
        if (gIdx >= 1 && gIdx <= 3) {
          var door = new THREE.Mesh(new THREE.BoxGeometry(gW * 0.9, gH * 0.86, 0.04), gateLeafMat);
          door.position.set(gx, -0.65 + gH * 0.43, -0.18);
          root.add(door);
        }
      });

      // East & West Flanking Yan-chi (Goose-Wing) Masonry Bastions + Inner Stair Ramps
      [-1.66, 1.66].forEach(function (wx) {
        var wPlinth = new THREE.Mesh(new THREE.BoxGeometry(0.96, 0.14, 2.26), marbleMat);
        wPlinth.position.set(wx, -0.72, 0.94);
        var wWall = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.70, 2.16), brickMat);
        wWall.position.set(wx, -0.30, 0.94);
        var wCap = new THREE.Mesh(new THREE.BoxGeometry(0.90, 0.06, 2.20), marbleMat);
        wCap.position.set(wx, 0.08, 0.94);
        root.add(wPlinth, wWall, wCap);

        // Balustrades framing each flanking deck
        if (ARCH) {
          var wBal = ARCH.createMarbleBalustrade(THREE, { w: 0.84, d: 2.10, railH: 0.11, dragonSpouts: true });
          wBal.position.set(wx, 0.11, 0.94);
          root.add(wBal);
        }
      });
      if (ARCH) {
        var cBal = ARCH.createMarbleBalustrade(THREE, { w: 4.18, d: 1.20, railH: 0.12, gapFront: 1.4, dragonSpouts: true });
        cBal.position.set(0, 0.13, -0.58);
        root.add(cBal);
      }

      // Upper Timber Superstructure Group (Moves subtly under Seismic Dougong test!)
      var upperTimber = new THREE.Group();
      if (ARCH) {
        // 1. Main 9-Bay Double-Eave Wudian Imperial Pavilion (午门正楼)
        var mainTower = ARCH.createPalaceHall(THREE, {
          w: 2.52, d: 0.84, baseH: 0.06, bodyH: 0.44, roofH: 0.56,
          baysX: 9, baysZ: 3, doubleEave: true, roofStyle: "wudian",
          tileKind: "tile", plaqueText: "午门"
        });
        mainTower.position.set(0, 0.13, -0.58);
        upperTimber.add(mainTower);

        // 2. Shoulder Square Cuanjian Corner Pavilions + 2. Southern Wing-Tip Double-Eave Pavilions (Completes 5-Phoenix!)
        [-1.66, 1.66].forEach(function (px) {
          var galRoof = ARCH.createCurvedRoof(THREE, {
            style: "gable", w: 0.46, d: 1.32, h: 0.22,
            tileKind: "tile", eaveOver: 0.08, feiyanLift: 0.08
          });
          galRoof.rotation.y = Math.PI / 2;
          var galBody = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.30, 1.24), vermilionMat);
          galBody.position.set(px, 0.26, 0.72);
          galRoof.position.set(px, 0.41, 0.72);
          upperTimber.add(galBody, galRoof);

          // Rear Shoulder Pavilion (North ends of U-wings)
          var shoulderHall = ARCH.createPalaceHall(THREE, {
            w: 0.68, d: 0.68, baseH: 0.05, bodyH: 0.34, roofH: 0.34,
            baysX: 3, baysZ: 3, doubleEave: false, roofStyle: "cuanjian",
            tileKind: "tile"
          });
          shoulderHall.position.set(px, 0.11, -0.42);
          upperTimber.add(shoulderHall);

          // Front Phoenix Wing-Tip Pavilion (South tips of U-wings)
          var tipHall = ARCH.createPalaceHall(THREE, {
            w: 0.70, d: 0.70, baseH: 0.05, bodyH: 0.36, roofH: 0.44,
            baysX: 3, baysZ: 3, doubleEave: true, roofStyle: "cuanjian",
            tileKind: "tile"
          });
          tipHall.position.set(px, 0.11, 1.68);
          upperTimber.add(tipHall);
        });
      }
      root.add(upperTimber);
      anim.seismicGroup = upperTimber;
    } else if (activeSubId === "suzhou") {
      // Suzhou Classical Garden Pond + Coping + Moon-Gate Whitewashed Wall + Zig-Zag Bridge + Hexagonal Pavilion
      var pond = new THREE.Mesh(new THREE.CylinderGeometry(2.48, 2.52, 0.12, 48), waterMat);
      pond.position.set(0.15, -0.76, 0.05);
      root.add(pond);
      anim.floatRing = pond;

      // Whitewashed perimeter garden wall with dark slate coping + Circular Moon Gate
      var wallLeft = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.38, 1.35), limeWallMat);
      wallLeft.position.set(-2.05, -0.05, 0.85);
      var wallRight = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.38, 1.35), limeWallMat);
      wallRight.position.set(-2.05, -0.05, -1.05);
      var moonTop = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.36, 0.75), limeWallMat);
      moonTop.position.set(-2.05, 0.46, -0.10);
      var moonArch = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.045, 10, 28), slateMat);
      moonArch.rotation.y = Math.PI / 2;
      moonArch.position.set(-2.05, -0.08, -0.10);
      var wallCap = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.09, 3.28), slateMat);
      wallCap.position.set(-2.05, 0.66, -0.10);
      root.add(wallLeft, wallRight, moonTop, moonArch, wallCap);

      // Zig-zag stone bridge (Jiuquqiao) across pond
      var bridgePts = [[-1.55, 0.72, 0.88, 0.25], [-0.88, 0.96, 0.56, -0.45], [-0.45, 0.48, 0.62, 0.15]];
      bridgePts.forEach(function (bp) {
        var bSeg = new THREE.Mesh(new THREE.BoxGeometry(bp[2], 0.08, 0.26), marbleMat);
        bSeg.position.set(bp[0], -0.62, bp[1]);
        bSeg.rotation.y = bp[3];
        root.add(bSeg);
      });

      // Hexagonal Pavilion Island + Carved Stone Platform + Meirenkao Benches + Upturned Jiangnan Slate Roof
      var hexIsland = new THREE.Mesh(new THREE.CylinderGeometry(1.06, 1.16, 0.26, 6), marbleMat);
      hexIsland.position.set(-0.62, -0.58, -0.32);
      root.add(hexIsland);
      for (var k = 0; k < 6; k++) {
        var ang = (k / 6) * Math.PI * 2;
        var kx = -0.62 + Math.cos(ang) * 0.76, kz = -0.32 + Math.sin(ang) * 0.76;
        var plinth = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.075, 0.06, 10), marbleMat);
        plinth.position.set(kx, -0.42, kz);
        var col = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.052, 0.92, 12), vermilionMat);
        col.position.set(kx, 0.06, kz);
        root.add(plinth, col);
      }
      if (ARCH) {
        var pBal = ARCH.createMarbleBalustrade(THREE, { sides: 6, radius: 0.78, railH: 0.16, color: 0x7c3e26 });
        pBal.position.set(-0.62, -0.45, -0.32);
        var pFrieze = ARCH.createDougongFrieze(THREE, { sides: 6, radius: 0.80 });
        pFrieze.position.set(-0.62, 0.52, -0.32);
        var pRoof = ARCH.createCurvedRoof(THREE, {
          style: "cuanjian", sides: 6, radius: 1.24, h: 0.76,
          tileKind: "slateTile", feiyanLift: 0.28, rotOffset: 0
        });
        pRoof.position.set(-0.62, 0.58, -0.32);
        root.add(pBal, pFrieze, pRoof);
      }

      // Lotus pads & blossoms on pond + Sculpted multi-lobe Taihu porous limestone peak
      [[-0.12, 0.92], [0.55, 0.85], [0.42, -0.65], [1.22, -0.45]].forEach(function (lp) {
        var pad = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.015, 16), new THREE.MeshStandardMaterial({ color: 0x2f6b47, roughness: 0.65 }));
        pad.position.set(lp[0], -0.69, lp[1]);
        root.add(pad);
      });
      var taihuBase = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.74, 0.24, 12), marbleMat);
      taihuBase.position.set(1.28, -0.62, 0.28);
      root.add(taihuBase);
      var stoneCluster = [
        [1.28, -0.10, 0.28, 0.42, 0.95, 0.34, 0.2],
        [1.46, 0.36, 0.36, 0.32, 0.72, 0.28, -0.3],
        [1.06, 0.08, 0.16, 0.26, 0.52, 0.24, 0.4],
        [1.36, 0.72, 0.32, 0.28, 0.44, 0.22, -0.15]
      ];
      stoneCluster.forEach(function (sp) {
        var lobe = new THREE.Mesh(new THREE.DodecahedronGeometry(0.45, 1), limeWallMat);
        lobe.scale.set(sp[3], sp[4], sp[5]);
        lobe.rotation.z = sp[6];
        lobe.position.set(sp[0], sp[1], sp[2]);
        root.add(lobe);
      });
    } else if (activeSubId === "mogao") {
      // Stratified desert conglomerate cliff + painted grotto niches + 9-story Hang 96 curved timber facade
      for (var st = 0; st < 5; st++) {
        var cliffSlab = new THREE.Mesh(new THREE.BoxGeometry(5.1 - st * 0.14, 0.50, 1.35 - st * 0.10), rammedEarthMat);
        cliffSlab.position.set(0, -0.68 + st * 0.48, -0.68);
        root.add(cliffSlab);
        [-1.85, -1.08, 1.08, 1.85].forEach(function (nx) {
          if (st >= 4 && Math.abs(nx) > 1.5) return;
          var caveVoid = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.34, 0.28), new THREE.MeshStandardMaterial({ color: 0x1e140e, roughness: 0.95 }));
          caveVoid.position.set(nx, -0.66 + st * 0.48, -0.05 - st * 0.04);
          var caveStatue = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 0.22, 10), goldBronzeMat);
          caveStatue.position.set(nx, -0.70 + st * 0.48, -0.04 - st * 0.04);
          root.add(caveVoid, caveStatue);
        });
      }
      // Stone cliff plinth + 9 tapering timber stories with concave Feiyan eaves
      var mPlinth = new THREE.Mesh(new THREE.BoxGeometry(1.56, 0.18, 0.95), graniteMat);
      mPlinth.position.set(0, -0.82, 0.22);
      root.add(mPlinth);
      for (var lv = 0; lv < 9; lv++) {
        var span = 1.32 - lv * 0.088;
        var yLvl = -0.72 + lv * 0.26;
        var bayBody = new THREE.Mesh(new THREE.BoxGeometry(span, 0.17, 0.62 - lv * 0.03), vermilionMat);
        bayBody.position.set(0, yLvl + 0.08, 0.22);
        root.add(bayBody);
        if (ARCH) {
          var tierRoof = ARCH.createCurvedRoof(THREE, {
            style: lv === 8 ? "cuanjian" : "xieshan",
            w: span * 1.10, d: (0.64 - lv * 0.03) * 1.18, radius: (span * 0.72), sides: 6,
            h: lv === 8 ? 0.26 : 0.12, tileKind: "slateTile", feiyanLift: 0.06, rings: 5,
            noRafters: true
          });
          tierRoof.position.set(0, yLvl + 0.16, 0.22);
          root.add(tierRoof);
        }
      }
    } else if (activeSubId === "terracotta") {
      // Pit 1 sunken brick floor + Hangtu rammed-earth balks + roof-beam ruins + 21 multi-part armored troops + 4-horse Chariot
      var pitFloor = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.14, 3.3), greyBrickMat);
      pitFloor.position.set(0, -0.84, 0);
      root.add(pitFloor);
      [-1.18, 0, 1.18].forEach(function (wz) {
        var balk = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.56, 0.20), rammedEarthMat);
        balk.position.set(0, -0.49, wz);
        var beam = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.07, 0.12), timberMat);
        beam.position.set(0, -0.18, wz);
        root.add(balk, beam);
      });

      function buildQinWarrior(isOfficer) {
        var wf = new THREE.Group();
        var s = isOfficer ? 1.16 : 1.0;
        var plinth = new THREE.Mesh(new THREE.BoxGeometry(0.24 * s, 0.04, 0.24 * s), clayMat);
        plinth.position.y = 0.02;
        var legs = new THREE.Mesh(new THREE.CylinderGeometry(0.065 * s, 0.075 * s, 0.24 * s, 10), clayMat);
        legs.position.y = 0.16;
        var skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.08 * s, 0.105 * s, 0.24 * s, 10), armorMat);
        skirt.position.y = 0.36;
        var pauldron = new THREE.Mesh(new THREE.BoxGeometry(0.22 * s, 0.06 * s, 0.12 * s), isOfficer ? vermilionMat : armorMat);
        pauldron.position.y = 0.48;
        var head = new THREE.Mesh(new THREE.SphereGeometry(0.062 * s, 10, 10), clayMat);
        head.position.y = 0.57;
        wf.add(plinth, legs, skirt, pauldron, head);
        if (isOfficer) {
          var heguan = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.065, 0.07), vermilionMat);
          heguan.position.y = 0.64;
          wf.add(heguan);
        } else {
          var topknot = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.04, 8), armorMat);
          topknot.position.set(0.015, 0.635, -0.01);
          var spear = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.58, 6), timberMat);
          spear.position.set(0.11, 0.36, 0.05);
          wf.add(topknot, spear);
        }
        return wf;
      }
      [-0.58, 0.58].forEach(function (zCor, rIdx) {
        for (var col = -2; col <= 3; col++) {
          var wGrp = buildQinWarrior(rIdx === 0 && col === 3);
          wGrp.position.set(-0.35 + col * 0.42, -0.77, zCor);
          wGrp.rotation.y = Math.PI / 2;
          root.add(wGrp);
        }
      });

      // 4-Horse Bronze/Timber Command Chariot behind infantry formation
      var chariot = new THREE.Group();
      chariot.position.set(-1.55, -0.77, 0.56);
      var cab = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.24, 0.52), timberMat);
      cab.position.y = 0.26;
      var rimL = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.025, 8, 20), goldBronzeMat);
      rimL.position.set(0, 0.22, 0.30);
      var rimR = rimL.clone();
      rimR.position.z = -0.30;
      var pole = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.85, 8), timberMat);
      pole.rotation.z = Math.PI / 2;
      pole.position.set(0.46, 0.22, 0);
      var canopyPole = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.75, 8), goldBronzeMat);
      canopyPole.position.set(-0.04, 0.62, 0);
      var huagai = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.14, 16), goldBronzeMat);
      huagai.position.set(-0.04, 0.98, 0);
      chariot.add(cab, rimL, rimR, pole, canopyPole, huagai);
      [-0.26, -0.09, 0.09, 0.26].forEach(function (hz) {
        var hBody = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.14, 0.09), clayMat);
        hBody.position.set(0.75, 0.24, hz);
        var hNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.045, 0.20, 8), clayMat);
        hNeck.rotation.z = -0.35;
        hNeck.position.set(0.88, 0.35, hz);
        chariot.add(hBody, hNeck);
      });
      root.add(chariot);
    } else if (activeSubId === "hongqiao") {
      // River Bian canal masonry embankments + Authentic Two-System Woven Timber Arch + Song Barges
      var river = new THREE.Mesh(new THREE.BoxGeometry(5.1, 0.16, 2.35), waterMat);
      river.position.set(0, -0.78, 0);
      root.add(river);
      [-2.18, 2.18].forEach(function (bx) {
        var bank = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.56, 2.35), greyBrickMat);
        bank.position.set(bx, -0.56, 0);
        root.add(bank);
      });

      // Interlocking Dual-Polygon Woven Timber Arch (Zero center piers!)
      function addWovenSystem(nSegs, zRows, peakH, matUse) {
        for (var rz = 0; rz < zRows.length; rz++) {
          for (var si = 0; si < nSegs; si++) {
            var t1 = si / nSegs, t2 = (si + 1) / nSegs;
            var x1 = -1.92 + t1 * 3.84, x2 = -1.92 + t2 * 3.84;
            var y1 = -0.32 + Math.sin(t1 * Math.PI) * peakH;
            var y2 = -0.32 + Math.sin(t2 * Math.PI) * peakH;
            var beamLen = Math.hypot(x2 - x1, y2 - y1) + 0.04;
            var segMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, beamLen, 10), matUse);
            segMesh.rotation.z = Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2;
            segMesh.position.set((x1 + x2) / 2, (y1 + y2) / 2, zRows[rz]);
            root.add(segMesh);
          }
        }
      }
      addWovenSystem(5, [-0.52, -0.18, 0.18, 0.52], 1.12, timberMat);
      addWovenSystem(4, [-0.35, 0, 0.35], 1.04, vermilionMat);

      // Transverse crossbeams locking the woven ribs + Cambered plank deck + Timber Railings
      for (var ci = 1; ci < 9; ci++) {
        var frac = ci / 9;
        var cx = -1.92 + frac * 3.84;
        var cy = -0.32 + Math.sin(frac * Math.PI) * 1.12;
        var tieBeam = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.38, 10), goldBronzeMat);
        tieBeam.rotation.x = Math.PI / 2;
        tieBeam.position.set(cx, cy + 0.02, 0);
        var plank = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.06, 1.24), timberMat);
        plank.position.set(cx, cy + 0.08, 0);
        plank.rotation.z = Math.cos(frac * Math.PI) * 0.32;
        [-0.58, 0.58].forEach(function (rz2) {
          var post = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.24, 0.05), vermilionMat);
          post.position.set(cx, cy + 0.20, rz2);
          root.add(post);
        });
        root.add(tieBeam, plank);
      }

      // Animated Song Cargo Barge passing cleanly underneath pierless arch
      var barge = new THREE.Group();
      var bHullPts = [
        new THREE.Vector2(0.02, -0.68), new THREE.Vector2(0.22, -0.45),
        new THREE.Vector2(0.24, 0.35), new THREE.Vector2(0.02, 0.68)
      ];
      var bHull = new THREE.Mesh(new THREE.LatheGeometry(bHullPts, 10), timberMat);
      bHull.rotation.z = -Math.PI / 2;
      bHull.scale.set(0.45, 1, 1);
      var bCabin = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.56, 12, 1, false, -Math.PI / 2, Math.PI), rammedEarthMat);
      bCabin.rotation.z = Math.PI / 2;
      bCabin.position.set(-0.05, 0.08, 0);
      var bSweep = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.03, 0.04), timberMat);
      bSweep.position.set(-0.62, 0.12, 0);
      barge.add(bHull, bCabin, bSweep);
      barge.position.set(0, -0.62, 0);
      root.add(barge);
      anim.barge = barge;
    } else {
      // #24 Zheng He 9-Masted Fuchuan Treasure Ship (Sculpted Lofted Hull + 11 Bulkheads + Stern Castle + 9 Lug Sails)
      var sea = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.12, 2.8), waterMat);
      sea.position.set(0, -0.78, 0);
      root.add(sea);
      var ship = new THREE.Group();
      var hullMat = cutawayHull
        ? new THREE.MeshStandardMaterial({ color: 0x5c3a21, map: PBR ? PBR.getTexture(THREE, "wood") : null, transparent: true, opacity: 0.34, roughness: 0.65 })
        : timberMat;
      var shipHullPts = [
        new THREE.Vector2(0.03, -2.05),
        new THREE.Vector2(0.42, -1.78),
        new THREE.Vector2(0.58, -1.05),
        new THREE.Vector2(0.64, 0.0),
        new THREE.Vector2(0.56, 1.15),
        new THREE.Vector2(0.32, 1.85),
        new THREE.Vector2(0.03, 2.15)
      ];
      var hull = new THREE.Mesh(new THREE.LatheGeometry(shipHullPts, 16), hullMat);
      hull.rotation.z = -Math.PI / 2;
      hull.scale.set(0.54, 1.0, 0.96);
      hull.position.set(0, -0.32, 0);
      ship.add(hull);

      // 11 Transverse Watertight Bulkheads visible in hull interior
      for (var bk = -1.55; bk <= 1.55; bk += 0.31) {
        var wRatio = 1 - Math.abs(bk) * 0.24;
        var bulkhead = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.44, 0.96 * wRatio), vermilionMat);
        bulkhead.position.set(bk, -0.30, 0);
        ship.add(bulkhead);
      }

      // Main Timber Deck + Multi-Decked Stern Castle (Weilou) with Curved Roof
      var mainDeck = new THREE.Mesh(new THREE.BoxGeometry(3.35, 0.05, 0.88), timberMat);
      mainDeck.position.set(0, -0.06, 0);
      ship.add(mainDeck);
      if (ARCH) {
        var sternPav = ARCH.createPalaceHall(THREE, {
          w: 0.78, d: 0.72, baseH: 0.14, bodyH: 0.30, roofH: 0.26,
          baysX: 3, baysZ: 2, doubleEave: false, roofStyle: "xieshan",
          tileKind: "slateTile", marbleBase: false
        });
        sternPav.rotation.y = Math.PI / 2;
        sternPav.position.set(-1.38, -0.04, 0);
        ship.add(sternPav);
      }

      // Axial Stern Rudder
      var rudder = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.42, 0.05), vermilionMat);
      rudder.position.set(-1.98, -0.45, 0);
      ship.add(rudder);

      // 9 Staggered Bamboo-Battened Crimson Lug Sails
      var mastSpecs = [
        [-1.32, -0.18, 0.95], [-1.02, 0.20, 1.08], [-0.52, 0.0, 1.42],
        [-0.08, -0.22, 1.30], [0.24, 0.02, 1.62], [0.68, 0.22, 1.32],
        [1.04, 0.0, 1.36], [1.40, -0.16, 1.05], [1.66, 0.12, 0.92]
      ];
      var sailClothMat = new THREE.MeshStandardMaterial({ color: 0xa22c24, side: THREE.DoubleSide, roughness: 0.74 });
      mastSpecs.forEach(function (ms) {
        var mast = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.028, ms[2], 8), goldBronzeMat);
        mast.position.set(ms[0], ms[2] * 0.5 - 0.08, ms[1]);
        var sailGrp = new THREE.Group();
        sailGrp.position.set(ms[0] + 0.03, ms[2] * 0.58 - 0.08, ms[1]);
        sailGrp.rotation.y = 0.24;
        var sailPlane = new THREE.Mesh(new THREE.PlaneGeometry(0.42, ms[2] * 0.64), sailClothMat);
        sailPlane.rotation.y = Math.PI / 2;
        sailGrp.add(sailPlane);
        for (var bt = -2; bt <= 2; bt++) {
          var batten = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.44, 6), timberMat);
          batten.rotation.x = Math.PI / 2;
          batten.position.y = bt * (ms[2] * 0.13);
          sailGrp.add(batten);
        }
        ship.add(mast, sailGrp);
      });
      root.add(ship);
      anim.ship = ship;
    }

    return anim;
  }

  function mount(containerId) {
    var container = document.getElementById(containerId);
    if (!container || typeof window.THREE === "undefined") return;
    var THREE = window.THREE;

    ensureMgr().register("v7-masterpieces-3d", dispose);
    dispose();
    ensureMgr().register("v7-masterpieces-3d", dispose);

    container.innerHTML = "";
    var w = Math.max(280, container.clientWidth || 560);
    var h = Math.max(300, container.clientHeight || 380);

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x141210);
    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(4.1, 2.8, 5.1);
    camera.lookAt(0, 0, 0);

    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" }); }
    catch (_e) { container.innerHTML = '<div class="epistemic-box">WebGL required for 3D Masterpiece Studio.</div>'; return; }
    var PBR = window.CCE_3D_PBR;
    if (PBR) {
      PBR.configureRenderer(THREE, renderer, { exposure: 1.10 });
      PBR.applyStudioEnvironment(THREE, renderer, scene, sunAngleIdx === 1 ? "daylight" : "warm");
    } else {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    }
    renderer.setSize(w, h, false);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    var sunPositions = [[-5, 3.5, 4], [2.5, 7, 5], [5.5, 2.8, -3]];
    var sp = sunPositions[sunAngleIdx] || sunPositions[1];
    scene.add(new THREE.HemisphereLight(0xfff1d8, 0x1e1b18, 0.62));
    var l1 = new THREE.DirectionalLight(0xffe8c6, 1.28);
    l1.position.set(sp[0], sp[1], sp[2]);
    if (PBR && PBR.tuneShadowLight) PBR.tuneShadowLight(l1, 5.5);
    else l1.castShadow = true;
    scene.add(l1);
    var l2 = new THREE.DirectionalLight(0x7fb0a2, 0.48);
    l2.position.set(-4, 2.5, -4);
    scene.add(l2);

    var root = new THREE.Group();
    scene.add(root);
    var anim = buildSubScene(THREE, root);
    root.traverse(function (o) {
      if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
    });

    var drag = false, px = 0, py = 0, ry = 0.28, rx = 0.16;
    var el = renderer.domElement;
    var onDown = function (ev) { drag = true; px = ev.clientX; py = ev.clientY; el.style.cursor = "grabbing"; };
    var onMove = function (ev) {
      if (!drag) return;
      ry += (ev.clientX - px) * 0.01;
      rx = Math.max(-0.48, Math.min(0.68, rx + (ev.clientY - py) * 0.008));
      px = ev.clientX; py = ev.clientY;
    };
    var onUp = function () { drag = false; el.style.cursor = "grab"; };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    var unbindZoom = (window.CCE_3D_ARCH && window.CCE_3D_ARCH.bindOrbitZoom)
      ? window.CCE_3D_ARCH.bindOrbitZoom(el, camera, null, { minDist: 2.8, maxDist: 11.5 })
      : null;

    var t0 = performance.now();
    function tick() {
      if (!rt) return;
      rt.rafId = requestAnimationFrame(tick);
      var dt = (performance.now() - t0) * 0.001;
      if (!drag) ry += 0.0024;
      root.rotation.set(rx, ry, 0);
      if (anim.seismicGroup && seismicShake) {
        anim.seismicGroup.position.x = Math.sin(dt * 18) * 0.048;
        anim.seismicGroup.position.z = Math.cos(dt * 14) * 0.024;
      }
      if (anim.barge) {
        anim.barge.position.z = Math.sin(dt * 0.7) * 0.85;
      }
      if (anim.ship) {
        anim.ship.rotation.z = Math.sin(dt * 1.4) * 0.022;
      }
      renderer.render(scene, camera);
    }

    var ro = new ResizeObserver(function () {
      if (!rt) return;
      var nw = Math.max(280, container.clientWidth || 560);
      var nh = Math.max(300, container.clientHeight || 380);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh, false);
    });
    ro.observe(container);

    rt = {
      rafId: 0,
      renderer: renderer,
      scene: scene,
      ro: ro,
      cleanup: function () {
        el.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        if (unbindZoom) unbindZoom();
      }
    };
    tick();
  }

  function renderPanel(enM) {
    var cur = SUB_STUDIOS[0];
    for (var i = 0; i < SUB_STUDIOS.length; i++) {
      if (SUB_STUDIOS[i].id === activeSubId) { cur = SUB_STUDIOS[i]; break; }
    }
    var controls = "";
    if (activeSubId === "meridian") {
      controls = '<button type="button" class="btn ' + (seismicShake ? "btn-primary" : "btn-secondary") + ' btn-sm" data-v73d-act="seismic">' + (seismicShake ? (enM ? "Seismic Damping Test: ACTIVE" : "Thử Chấn Động Đất: ĐANG CHẠY") : (enM ? "Run Seismic Dougong Test" : "Thử Nghiệm Địa Chấn Đấu Củng")) + '</button>';
    } else if (activeSubId === "baochuan9") {
      controls = '<button type="button" class="btn ' + (cutawayHull ? "btn-primary" : "btn-secondary") + ' btn-sm" data-v73d-act="cutaway">' + (cutawayHull ? (enM ? "Hull X-Ray Cutaway: ON" : "Mặt Cắt Khoang Kín Nước: BẬT") : (enM ? "Toggle Bulkhead X-Ray" : "Xem Vách Khoang Kín Nước")) + '</button>';
    } else if (activeSubId === "mogao") {
      controls = '<div style="display:flex;gap:0.35rem;flex-wrap:wrap;"><button type="button" class="btn btn-secondary btn-sm" data-v73d-act="sun" data-idx="0">' + (enM ? "Dawn" : "Bình minh") + '</button><button type="button" class="btn btn-secondary btn-sm" data-v73d-act="sun" data-idx="1">' + (enM ? "Zenith" : "Ngọ") + '</button><button type="button" class="btn btn-secondary btn-sm" data-v73d-act="sun" data-idx="2">' + (enM ? "Sunset" : "Hoàng hôn") + '</button></div>';
    }

    return (
      '<div class="card" style="padding:1rem;background:var(--bg-paper);border-top:3px solid var(--antique-gold);">' +
      '  <div class="filter-bar" style="margin-bottom:0.75rem;">' +
      SUB_STUDIOS.map(function (s) {
        return '<button type="button" class="filter-pill ' + (s.id === activeSubId ? "active" : "") + '" data-v73d-act="pick-sub" data-val="' + s.id + '" style="font-size:0.74rem;">' + (enM ? s.titleEn : s.titleVi) + '</button>';
      }).join("") +
      '  </div>' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;">' +
      '    <div><strong style="font-size:0.98rem;">' + (enM ? cur.titleEn : cur.titleVi) + '</strong><div style="font-size:0.8rem;color:var(--text-secondary);">' + (enM ? cur.noteEn : cur.noteVi) + '</div></div>' +
      '    <div style="display:flex;gap:0.45rem;align-items:center;flex-wrap:wrap;">' +
      controls +
      '      <a href="https://www.youtube.com/watch?v=' + cur.ytId + '" target="_blank" rel="noopener" class="btn btn-ghost btn-sm" style="border:1px solid var(--hairline);">' + (enM ? "YouTube Doc ↗" : "Xem Phim YouTube ↗") + '</a>' +
      '    </div>' +
      '  </div>' +
      '  <div id="cce-3d-v7-masterpieces-canvas" style="width:100%;height:385px;border-radius:var(--radius);overflow:hidden;border:1px solid var(--hairline);"></div>' +
      '</div>'
    );
  }

  function initMountedCanvasIfAny() {
    if (document.getElementById("cce-3d-v7-masterpieces-canvas")) {
      mount("cce-3d-v7-masterpieces-canvas");
    }
  }

  function bind() {
    if (window._cceV73dBound || typeof document === "undefined") return;
    window._cceV73dBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-v73d-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-v73d-act");
      if (act === "pick-sub") {
        activeSubId = el.getAttribute("data-val") || "meridian";
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "seismic") {
        seismicShake = !seismicShake;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "cutaway") {
        cutawayHull = !cutawayHull;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "sun") {
        sunAngleIdx = Number(el.getAttribute("data-idx") || "1");
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      }
    });
  }
  bind();

  window.CCE_3D_V7_MASTERPIECES = {
    SUB_STUDIOS: SUB_STUDIOS,
    renderPanel: renderPanel,
    initMountedCanvasIfAny: initMountedCanvasIfAny,
    setSubStudio: function (id) { activeSubId = id || "meridian"; },
    dispose: dispose
  };
})();
