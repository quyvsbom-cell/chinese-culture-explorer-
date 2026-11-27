// ============================================================================
// CHINESE CULTURE EXPLORER — 4 Contemporary & Acoustic 3D Studios (#25–#28)
// #25 Guqin 7-String + Web Audio Pentatonic Harmonics,
// #26 Chengyang Wind-Rain Bridge (Timber Explode Cutaway),
// #27 Sponge City Hydrological Strata (Rain Intensity Slider 50-150 mm/h),
// #28 Kunqu Lakeside Water Pavilion (Suzhou Acoustic Screen).
// Shares single WebGL context cleanly via CCE_WEBGL_MGR (Zero GPU Leak).
// ============================================================================

(function () {
  "use strict";

  var rt = null;
  var activeSubId = "guqin"; // guqin | chengyang | sponge | kunqu
  var explodeRoof = false;
  var rainRate = 90; // 50..150 mm/h
  var activeHotspotIdx = 0;
  var lastPluckedString = -1;
  var stringVibAmp = [0, 0, 0, 0, 0, 0, 0];
  var audioCtx = null;

  var GUQIN_FREQS = [130.81, 146.83, 164.81, 196.0, 220.0, 261.63, 293.66]; // C3, D3, E3, G3, A3, C4, D4
  var GUQIN_NOTES_VI = ["1 · Cung (Đồ)", "2 · Thương (Rê)", "3 · Giác (Mi)", "4 · Chủy (Son)", "5 · Vũ (La)", "6 · Thiếu Cung", "7 · Thiếu Thương"];
  var GUQIN_NOTES_EN = ["1 · Gong (C)", "2 · Shang (D)", "3 · Jue (E)", "4 · Zhi (G)", "5 · Yu (A)", "6 · High C", "7 · High D"];

  var SUB_STUDIOS = [
    {
      id: "guqin",
      dataId: "3d-25",
      sceneNum: 25,
      titleVi: "#25 Cổ Cầm Thất Huyền 3D",
      titleEn: "#25 Seven-String Guqin 3D",
      noteVi: "Nhấn 7 dây Cung–Thương–Giác–Chủy–Vũ bên dưới để nghe âm sắc Ngũ Âm Web Audio & xem rung dây trên thân gỗ Ngô Đồng.",
      noteEn: "Pluck any of the 7 Silk Strings below to hear pentatonic Web Audio harmonics over the lacquered Wutong soundboard.",
      ytId: "y8B_nE9D8G8"
    },
    {
      id: "chengyang",
      dataId: "3d-26",
      sceneNum: 26,
      titleVi: "#26 Cầu Gió Mưa Trình Dương 3D",
      titleEn: "#26 Chengyang Wind-Rain Bridge 3D",
      noteVi: "5 trụ đá chống lũ đỡ hệ dầm mộng Thuẩn Mão không đinh sắt và 5 tháp cổ lầu dân tộc Đồng (Quảng Tây).",
      noteEn: "Five flood piers supporting a nail-free Dong interlocking timber truss and five layered pagoda towers.",
      ytId: "w78Yb_aotH0"
    },
    {
      id: "sponge",
      dataId: "3d-27",
      sceneNum: 27,
      titleVi: "#27 Mặt Cắt Đô Thị Bọt Biển 3D",
      titleEn: "#27 Sponge City Hydro-Cutaway 3D",
      noteVi: "Điều chỉnh cường độ mưa (50–150 mm/h) để quan sát cơ chế Thấm – Trữ – Lọc qua 3 tầng địa chất và bể ngầm.",
      noteEn: "Adjust rainfall intensity (50–150 mm/h) to test surface permeable infiltration, gravel bio-filtration, and subterranean cistern storage.",
      ytId: "9R5x2A4n2m0"
    },
    {
      id: "kunqu",
      dataId: "3d-28",
      sceneNum: 28,
      titleVi: "#28 Thủy Tạ Sân Khấu Côn Khúc 3D",
      titleEn: "#28 Kunqu Lakeside Pavilion 3D",
      noteVi: "Đình hát nhô ra mặt hồ Tô Châu tận dụng mặt nước tĩnh phản xạ âm thanh Thủy Ma Điệu trong sáng.",
      noteEn: "Lakeside Suzhou stage projecting over still water to naturally amplify delicate Kunqu vocal timbre.",
      ytId: "xsPOs-yCJ3g"
    }
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function ensureMgr() {
    if (window.CCE_WEBGL_MGR) return window.CCE_WEBGL_MGR;
    return { register: function () {}, disposeAll: function () {} };
  }

  function pluckGuqinString(idx) {
    var sIdx = Math.max(0, Math.min(6, Number(idx) || 0));
    lastPluckedString = sIdx;
    stringVibAmp[sIdx] = 1.0;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();
      var now = audioCtx.currentTime;
      var freq = GUQIN_FREQS[sIdx] || 130.81;

      var osc1 = audioCtx.createOscillator();
      var osc2 = audioCtx.createOscillator();
      var filter = audioCtx.createBiquadFilter();
      var gain = audioCtx.createGain();

      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(freq, now);
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(freq * 2, now);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(240, now + 2.2);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.24, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 2.5);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 2.6);
      osc2.stop(now + 2.6);
    } catch (_e) {}
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
    var woodTex = PBR ? PBR.getTexture(THREE, "wood") : null;
    var woodBump = PBR ? PBR.getTexture(THREE, "woodBump") : null;
    var marbleTex = PBR ? PBR.getTexture(THREE, "marble") : null;
    var rammedTex = PBR ? PBR.getTexture(THREE, "rammedEarth") : null;
    var MatPhys = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;

    var mLacquer = new MatPhys({ color: 0x241610, map: woodTex, roughness: 0.22, metalness: 0.14, clearcoat: 0.85, clearcoatRoughness: 0.12 });
    var mVermilion = new MatPhys({ color: 0x8f221b, map: woodTex, roughness: 0.44, clearcoat: 0.22 });
    var mTimber = new THREE.MeshStandardMaterial({ color: 0x5c3e29, map: woodTex, bumpMap: woodBump, bumpScale: 0.02, roughness: 0.64 });
    var mGold = new MatPhys({ color: 0xd4a042, metalness: 0.78, roughness: 0.24, clearcoat: 0.2 });
    var mPearl = new MatPhys({ color: 0xf7f3ea, metalness: 0.2, roughness: 0.16, clearcoat: 0.9 });
    var mStone = new THREE.MeshStandardMaterial({ color: 0x9b9488, map: marbleTex, roughness: 0.75 });
    var mWater = new MatPhys({ color: 0x227866, roughness: 0.10, metalness: 0.35, clearcoat: 0.85, transparent: true, opacity: 0.86 });
    var mGrass = new THREE.MeshStandardMaterial({ color: 0x3f6e49, roughness: 0.84 });
    var mSoil = new THREE.MeshStandardMaterial({ color: 0x735b44, map: rammedTex, roughness: 0.92 });
    var mSilk = new THREE.MeshStandardMaterial({ color: 0xf4efe4, roughness: 0.72, transparent: true, opacity: 0.9 });

    if (ARCH && typeof ARCH.createCourtyardStage === "function") {
      var stg8 = ARCH.createCourtyardStage(THREE, { radius: 2.95 });
      stg8.position.y = -0.92;
      root.add(stg8);
    } else if (PBR) {
      var ped = PBR.createMuseumPedestal(THREE, 2.8, 0.22);
      ped.position.y = -0.92;
      root.add(ped);
    }

    var anim = { strings: [], curtains: [], rainDrops: null, cisternMesh: null, roofLiftGroup: null, bridgeWater: null };

    if (activeSubId === "guqin") {
      var qTable = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.12, 1.35), mTimber);
      qTable.position.set(0, -0.34, 0);
      root.add(qTable);
      var bodyMain = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.20, 0.96), mLacquer);
      bodyMain.position.set(0, -0.05, 0);
      var shoulderNeck = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.18, 0.70), mVermilion);
      shoulderNeck.position.set(-1.75, -0.05, 0);
      root.add(bodyMain, shoulderNeck);

      var yueshan = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.12, 0.92), mTimber);
      yueshan.position.set(1.85, 0.1, 0);
      var yanzu = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.22, 10), mGold);
      yanzu.position.set(-1.3, -0.22, 0.22);
      var yanzu2 = yanzu.clone();
      yanzu2.position.set(-1.3, -0.22, -0.22);
      root.add(yueshan, yanzu, yanzu2);

      var huiFrac = [0.125, 0.167, 0.2, 0.25, 0.333, 0.4, 0.5, 0.6, 0.667, 0.75, 0.8, 0.833, 0.875];
      for (var hi = 0; hi < huiFrac.length; hi++) {
        var dotR = (hi === 6) ? 0.036 : (hi === 3 || hi === 9 ? 0.028 : 0.021);
        var hui = new THREE.Mesh(new THREE.SphereGeometry(dotR, 10, 10), mPearl);
        hui.position.set(1.85 - huiFrac[hi] * 3.6, 0.07, 0.40);
        root.add(hui);
      }

      for (var s = 0; s < 7; s++) {
        var zPos = -0.3 + s * 0.1;
        var radius = 0.011 - s * 0.0008;
        var stGeo = new THREE.CylinderGeometry(radius, radius, 3.85, 8);
        stGeo.rotateZ(Math.PI / 2);
        var stMesh = new THREE.Mesh(stGeo, mGold);
        stMesh.position.set(-0.08, 0.12, zPos);
        root.add(stMesh);
        anim.strings.push({ mesh: stMesh, baseZ: zPos, baseY: 0.12 });
      }
    } else if (activeSubId === "chengyang") {
      var river = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.14, 2.2), mWater);
      river.position.set(0, -0.78, 0);
      root.add(river);
      anim.bridgeWater = river;

      for (var p = -2; p <= 2; p++) {
        var pier = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.32, 0.82, 6), mStone);
        pier.position.set(p * 1.12, -0.45, 0);
        root.add(pier);
      }

      var deck = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.14, 0.76), mTimber);
      deck.position.set(0, -0.02, 0);
      root.add(deck);
      for (var bi = -4; bi <= 4; bi++) {
        var truss = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.24, 0.84), mVermilion);
        truss.position.set(bi * 0.56, -0.14, 0);
        root.add(truss);
      }

      var roofGrp = new THREE.Group();
      if (ARCH) {
        var corridorRoof = ARCH.createCurvedRoof(THREE, { style: "gable", w: 0.82, d: 5.05, h: 0.24, tileKind: "slateTile", feiyanLift: 0.08, noRafters: true });
        corridorRoof.rotation.y = Math.PI / 2;
        corridorRoof.position.set(0, 0.52, 0);
        roofGrp.add(corridorRoof);

        for (var ti = -2; ti <= 2; ti++) {
          var hScale = ti === 0 ? 1.25 : (Math.abs(ti) === 1 ? 1.02 : 0.85);
          var tx = ti * 1.12;
          var colBox = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.48, 0.54), mTimber);
          colBox.position.set(tx, 0.26, 0);
          roofGrp.add(colBox);
          for (var e = 0; e < 3; e++) {
            var eaveD = ARCH.createCurvedRoof(THREE, {
              style: "cuanjian", sides: 6, radius: (0.52 - e * 0.10) * hScale, h: 0.22,
              tileKind: "slateTile", feiyanLift: 0.08, noFinial: e < 2
            });
            eaveD.position.set(tx, 0.64 + e * 0.21, 0);
            roofGrp.add(eaveD);
          }
        }
      }
      if (explodeRoof) roofGrp.position.y = 0.75;
      root.add(roofGrp);
      anim.roofLiftGroup = roofGrp;
    } else if (activeSubId === "sponge") {
      var cisternShell = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 0.65, 2.2),
        new THREE.MeshStandardMaterial({ color: 0x3f4347, transparent: true, opacity: 0.35, roughness: 0.6 })
      );
      cisternShell.position.set(0, -0.78, 0);
      root.add(cisternShell);

      var fillFrac = Math.max(0.22, Math.min(0.95, rainRate / 150));
      var waterH = 0.58 * fillFrac;
      var cisternWater = new THREE.Mesh(new THREE.BoxGeometry(3.64, waterH, 2.04), mWater);
      cisternWater.position.set(0, -1.08 + waterH * 0.5, 0);
      root.add(cisternWater);
      anim.cisternMesh = cisternWater;

      var soilBed = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.36, 2.2), mSoil);
      soilBed.position.set(0, -0.25, 0);
      root.add(soilBed);

      var paverZone = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.14, 2.2), mStone);
      paverZone.position.set(-0.98, 0.02, 0);
      var parkZone = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.1, 2.2), mGrass);
      parkZone.position.set(0.95, -0.02, 0);
      root.add(paverZone, parkZone);

      for (var tr = -1; tr <= 1; tr++) {
        var trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.42, 8), mTimber);
        trunk.position.set(0.65 + tr * 0.38, 0.22, tr * 0.48);
        var canopy = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), mGrass);
        canopy.position.set(0.65 + tr * 0.38, 0.48, tr * 0.48);
        root.add(trunk, canopy);
      }

      var count = Math.round(rainRate * 2.2);
      var positions = new Float32Array(count * 3);
      for (var ri = 0; ri < count; ri++) {
        positions[ri * 3] = (Math.random() - 0.5) * 3.8;
        positions[ri * 3 + 1] = Math.random() * 2.0 + 0.1;
        positions[ri * 3 + 2] = (Math.random() - 0.5) * 2.2;
      }
      var rGeo = new THREE.BufferGeometry();
      rGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      var rMat = new THREE.PointsMaterial({ color: 0x7fd4c0, size: 0.045, transparent: true, opacity: 0.8 });
      var rainPts = new THREE.Points(rGeo, rMat);
      root.add(rainPts);
      anim.rainDrops = rainPts;
    } else {
      var lake = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.12, 3.4), mWater);
      lake.position.set(0, -0.78, 0);
      root.add(lake);
      var jetty = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.24, 2.2), mStone);
      jetty.position.set(0, -0.58, 0);
      root.add(jetty);

      [[-1.05, -0.85], [1.05, -0.85], [-1.05, 0.85], [1.05, 0.85]].forEach(function (pt) {
        var col = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.06, 1.15, 10), mVermilion);
        col.position.set(pt[0], 0.1, pt[1]);
        root.add(col);
      });

      var screen = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.85, 0.08), mTimber);
      screen.position.set(0, 0.0, -0.78);
      var plaque = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.22, 0.06), mGold);
      plaque.position.set(0, 0.55, 0.85);
      root.add(screen, plaque);

      [-0.78, 0.78].forEach(function (cx) {
        var curMesh = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.92, 0.04), mSilk);
        curMesh.position.set(cx, 0.12, 0.78);
        root.add(curMesh);
        anim.curtains.push(curMesh);
      });

      if (ARCH) {
        var kBal = ARCH.createMarbleBalustrade(THREE, { w: 2.45, d: 2.05, railH: 0.20, gapFront: 1.3 });
        kBal.position.set(0, -0.46, 0);
        var kFrieze = ARCH.createDougongFrieze(THREE, { w: 2.2, d: 1.8 });
        kFrieze.position.set(0, 0.68, 0);
        var kRoof = ARCH.createCurvedRoof(THREE, { style: "xieshan", w: 2.35, d: 1.95, h: 0.72, tileKind: "slateTile", feiyanLift: 0.24 });
        kRoof.position.set(0, 0.74, 0);
        root.add(kBal, kFrieze, kRoof);
      }
      var l1 = new THREE.Mesh(new THREE.SphereGeometry(0.10, 10, 10), mVermilion);
      l1.position.set(-0.92, 0.45, 0.95);
      var l2 = l1.clone(); l2.position.x = 0.92;
      root.add(l1, l2);
    }

    return anim;
  }

  function mount(containerId) {
    var container = document.getElementById(containerId);
    if (!container || typeof window.THREE === "undefined") return;
    var THREE = window.THREE;

    ensureMgr().register("v8-interactive-3d", dispose);
    dispose();
    ensureMgr().register("v8-interactive-3d", dispose);

    container.innerHTML = "";
    var w = Math.max(280, container.clientWidth || 560);
    var h = Math.max(300, container.clientHeight || 365);

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x141210);
    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(3.8, 2.5, 4.9);
    camera.lookAt(0, 0, 0);

    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" }); }
    catch (_e) { container.innerHTML = '<div class="epistemic-box">WebGL required for 3D Studio.</div>'; return; }
    var PBR = window.CCE_3D_PBR;
    if (PBR) {
      PBR.configureRenderer(THREE, renderer, { exposure: 1.12 });
      PBR.applyStudioEnvironment(THREE, renderer, scene, "warm");
    } else {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    }
    renderer.setSize(w, h, false);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffeacc, 0x1d1a16, 0.62));
    var keyLight = new THREE.DirectionalLight(0xffe7c2, 1.30);
    keyLight.position.set(3.5, 6.8, 4.8);
    if (PBR && PBR.tuneShadowLight) PBR.tuneShadowLight(keyLight, 5.2); else keyLight.castShadow = true;
    scene.add(keyLight);
    var fillLight = new THREE.DirectionalLight(0x78b2a4, 0.48);
    fillLight.position.set(-4, 2.5, -4);
    scene.add(fillLight);

    var root = new THREE.Group();
    scene.add(root);
    var anim = buildSubScene(THREE, root);
    root.traverse(function (o) {
      if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
    });

    var drag = false, px = 0, py = 0, ry = 0.26, rx = 0.22;
    var el = renderer.domElement;
    var onDown = function (ev) { drag = true; px = ev.clientX; py = ev.clientY; el.style.cursor = "grabbing"; };
    var onMove = function (ev) {
      if (!drag) return;
      ry += (ev.clientX - px) * 0.01;
      rx = Math.max(-0.48, Math.min(0.72, rx + (ev.clientY - py) * 0.008));
      px = ev.clientX; py = ev.clientY;
    };
    var onUp = function () { drag = false; el.style.cursor = "grab"; };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    var unbindZoom8 = (window.CCE_3D_ARCH && window.CCE_3D_ARCH.bindOrbitZoom)
      ? window.CCE_3D_ARCH.bindOrbitZoom(el, camera, null, { minDist: 2.8, maxDist: 11.5 })
      : null;

    var t0 = performance.now();
    function tick() {
      if (!rt) return;
      rt.rafId = requestAnimationFrame(tick);
      var dt = (performance.now() - t0) * 0.001;
      if (!drag) ry += 0.002;
      root.rotation.set(rx, ry, 0);

      for (var si = 0; si < anim.strings.length; si++) {
        var amp = stringVibAmp[si] || 0;
        if (amp > 0.002) {
          anim.strings[si].mesh.position.y = anim.strings[si].baseY + Math.sin(dt * 48) * 0.028 * amp;
          stringVibAmp[si] = amp * 0.96;
        } else {
          anim.strings[si].mesh.position.y = anim.strings[si].baseY;
          stringVibAmp[si] = 0;
        }
      }
      if (anim.rainDrops && anim.rainDrops.geometry) {
        var posAttr = anim.rainDrops.geometry.attributes.position;
        var arr = posAttr.array;
        for (var i = 1; i < arr.length; i += 3) {
          arr[i] -= 0.045 * (rainRate / 90);
          if (arr[i] < 0.05) arr[i] = 2.05;
        }
        posAttr.needsUpdate = true;
      }
      for (var ci = 0; ci < anim.curtains.length; ci++) {
        anim.curtains[ci].rotation.x = Math.sin(dt * 1.4 + ci) * 0.05;
      }
      renderer.render(scene, camera);
    }

    var ro = new ResizeObserver(function () {
      if (!rt) return;
      var nw = Math.max(280, container.clientWidth || 560);
      var nh = Math.max(300, container.clientHeight || 365);
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
        if (unbindZoom8) unbindZoom8();
      }
    };
    tick();
  }

  function renderPanel(enM) {
    var cur = SUB_STUDIOS[0];
    for (var i = 0; i < SUB_STUDIOS.length; i++) {
      if (SUB_STUDIOS[i].id === activeSubId) { cur = SUB_STUDIOS[i]; break; }
    }

    var hotspotList = [];
    var packHotspots = (window.CCE_V8_DATA && window.CCE_V8_DATA.studio3dHotspots4) || [];
    for (var hi = 0; hi < packHotspots.length; hi++) {
      if (packHotspots[hi].id === cur.dataId || Number(packHotspots[hi].sceneNum) === cur.sceneNum) {
        hotspotList = packHotspots[hi].hotspots || [];
        break;
      }
    }
    var curHs = hotspotList[activeHotspotIdx] || hotspotList[0] || null;

    var controls = "";
    if (activeSubId === "guqin") {
      controls =
        '<div style="display:flex;gap:0.35rem;flex-wrap:wrap;align-items:center;">' +
        GUQIN_FREQS.map(function (_f, idx) {
          var isOn = lastPluckedString === idx;
          return '<button type="button" class="btn ' + (isOn ? "btn-primary" : "btn-secondary") + ' btn-sm" style="font-size:0.74rem;" data-v83d-act="pluck" data-idx="' + idx + '">' + esc(enM ? GUQIN_NOTES_EN[idx] : GUQIN_NOTES_VI[idx]) + '</button>';
        }).join("") +
        '</div>';
    } else if (activeSubId === "chengyang") {
      controls =
        '<button type="button" class="btn ' + (explodeRoof ? "btn-primary" : "btn-secondary") + ' btn-sm" data-v83d-act="explode">' +
        (explodeRoof ? (enM ? "Explode Timber Truss: ON" : "Tách Lớp Mái & Khung Mộng: BẬT") : (enM ? "Explode Roof Layers" : "Tách Lớp Mái Soi Mộng Gỗ")) +
        '</button>';
    } else if (activeSubId === "sponge") {
      controls =
        '<div style="display:flex;align-items:center;gap:0.55rem;flex-wrap:wrap;font-size:0.8rem;">' +
        '  <label for="cce-v8-rain-slider"><strong>' + (enM ? "Rainfall Intensity:" : "Cường độ Mưa:") + '</strong></label>' +
        '  <input id="cce-v8-rain-slider" type="range" min="50" max="150" step="10" value="' + rainRate + '" data-v83d-act="rain" />' +
        '  <span class="badge badge-jade">' + rainRate + ' mm/h</span>' +
        '</div>';
    }

    return (
      '<div class="card" style="padding:1rem;background:var(--bg-paper);border-top:3px solid var(--jade-green);">' +
      '  <div class="filter-bar" style="margin-bottom:0.75rem;">' +
      SUB_STUDIOS.map(function (s) {
        return '<button type="button" class="filter-pill ' + (s.id === activeSubId ? "active" : "") + '" data-v83d-act="pick-sub" data-val="' + s.id + '" style="font-size:0.74rem;">' + esc(enM ? s.titleEn : s.titleVi) + '</button>';
      }).join("") +
      '  </div>' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;">' +
      '    <div><strong style="font-size:0.98rem;">' + esc(enM ? cur.titleEn : cur.titleVi) + '</strong><div style="font-size:0.8rem;color:var(--text-secondary);">' + esc(enM ? cur.noteEn : cur.noteVi) + '</div></div>' +
      '    <a href="https://www.youtube.com/watch?v=' + cur.ytId + '" target="_blank" rel="noopener" class="btn btn-ghost btn-sm" style="border:1px solid var(--hairline);">' + (enM ? "YouTube Doc ↗" : "Tư liệu YouTube ↗") + '</a>' +
      '  </div>' +
      (controls ? '<div style="margin-bottom:0.65rem;">' + controls + '</div>' : "") +
      '  <div id="cce-3d-v8-studios-canvas" style="width:100%;height:365px;border-radius:var(--radius);overflow:hidden;border:1px solid var(--hairline);"></div>' +
      (hotspotList.length ? (
        '  <div style="margin-top:0.75rem;padding-top:0.75rem;border-top:1px solid var(--hairline);">' +
        '    <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.5rem;">' +
        hotspotList.map(function (hs, idx) {
          var isOn = idx === activeHotspotIdx;
          return '<button type="button" class="btn btn-sm ' + (isOn ? "btn-primary" : "btn-secondary") + '" style="font-size:0.75rem;" data-v83d-act="hs" data-idx="' + idx + '">' + esc((hs.label || ("H" + (idx + 1))) + " · " + (enM ? (hs.titleEn || hs.titleVi) : hs.titleVi)) + '</button>';
        }).join("") +
        '    </div>' +
        (curHs ? (
          '    <div style="padding:0.6rem 0.75rem;background:var(--bg-card);border:1px solid var(--hairline);border-left:3px solid var(--imperial-red);font-size:0.81rem;">' +
          '      <strong>' + esc(enM ? (curHs.titleEn || curHs.titleVi) : curHs.titleVi) + ':</strong> ' +
          esc(enM ? (curHs.detailEn || curHs.detailVi) : curHs.detailVi) +
          '    </div>'
        ) : "") +
        '  </div>'
      ) : "") +
      '</div>'
    );
  }

  function initMountedCanvasIfAny() {
    if (document.getElementById("cce-3d-v8-studios-canvas")) {
      mount("cce-3d-v8-studios-canvas");
    }
  }

  function bind() {
    if (window._cceV83dBound || typeof document === "undefined") return;
    window._cceV83dBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-v83d-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-v83d-act");
      if (act === "pick-sub") {
        activeSubId = el.getAttribute("data-val") || "guqin";
        activeHotspotIdx = 0;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "pluck") {
        var idx = Number(el.getAttribute("data-idx") || "0");
        pluckGuqinString(idx);
      } else if (act === "explode") {
        explodeRoof = !explodeRoof;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "hs") {
        activeHotspotIdx = Number(el.getAttribute("data-idx") || "0");
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      }
    });
    document.addEventListener("input", function (e) {
      var el = e.target;
      if (el && el.getAttribute && el.getAttribute("data-v83d-act") === "rain") {
        rainRate = Number(el.value || 90);
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      }
    });
    document.addEventListener("keydown", function (e) {
      var tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      if (activeSubId === "guqin" && document.getElementById("cce-3d-v8-studios-canvas") && /^[1-7]$/.test(e.key)) {
        pluckGuqinString(parseInt(e.key, 10) - 1);
      }
    });
  }
  bind();

  window.CCE_3D_V8_STUDIOS = {
    SUB_STUDIOS: SUB_STUDIOS,
    renderPanel: renderPanel,
    initMountedCanvasIfAny: initMountedCanvasIfAny,
    setSubStudio: function (id) { activeSubId = id || "guqin"; },
    pluckGuqinString: pluckGuqinString,
    dispose: dispose
  };
})();
