// ============================================================================
// CHINESE CULTURE EXPLORER V7.0 — 6 Additional WebGL Masterpiece Studios (#19–#24)
// Meridian Gate Dougong, Suzhou Garden, Mogao 9-Tier Cliffs, Qin Pit 1,
// Song Rainbow Bridge (Qingming Scroll), & Zheng He 9-Masted Treasure Ship
// Shares single WebGL context cleanly via CCE_WEBGL_MGR (Zero GPU Leak)
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
      noteVi: "Đài chữ U Tử Cấm Thành với Tháp Ngũ Phượng & mộng gỗ trượt đàn hồi giảm chấn.",
      noteEn: "Forbidden City U-podium with Five Phoenix pavilions & seismic friction Dougong brackets.",
      ytId: "w78Yb_aotH0"
    },
    {
      id: "suzhou",
      sceneNum: 20,
      titleVi: "#20 Đình Lục Giác & Đá Thái Hồ",
      titleEn: "#20 Suzhou Pavilion & Taihu Stone",
      noteVi: "Đá Thái Hồ 4 chuẩn Sấu–Trứ–Lậu–Thấu soi bóng bên đình lục giác mượn cảnh.",
      noteEn: "Perforated Taihu karst stone mirrored beside a classical hexagonal lake pavilion.",
      ytId: "xsPOs-yCJ3g"
    },
    {
      id: "mogao",
      sceneNum: 21,
      titleVi: "#21 Cửu Tầng Lầu Hang Đá Đôn Hoàng",
      titleEn: "#21 Dunhuang 9-Tier Mogao Cliff",
      noteVi: "Mặt đứng Cửu Tầng Lầu che chở Đại Phật giữa vách đá sỏi kết Mạc Cao Đôn Hoàng.",
      noteEn: "Nine-story timber facade protecting Hang 96 against arid Hexi Corridor winds.",
      ytId: "R29A0GyLYlE"
    },
    {
      id: "terracotta",
      sceneNum: 22,
      titleVi: "#22 Hầm Số 1 Binh Mã Dũng Tây An",
      titleEn: "#22 Qin Terracotta Pit 1 Phalanx",
      noteVi: "Đội hình chiến trận chia hào đất nện với cung thủ tiên phong, tướng quân & chiến xa.",
      noteEn: "Rammed-earth corridors organizing modular Qin infantry, officers, and command chariots.",
      ytId: "mP5p4QbvPtc"
    },
    {
      id: "hongqiao",
      sceneNum: 23,
      titleVi: "#23 Cầu Vòm Hồng Kiều Biện Kinh",
      titleEn: "#23 Song Rainbow Woven Bridge",
      noteVi: "Nhịp cầu vòm gỗ ghép mộng không trụ giữa sông Biện nhường lối cho thuyền lương thực.",
      noteEn: "Self-locking woven timber arch spanning Song canal without obstructive river piers.",
      ytId: "QfU7sU_iCQM"
    },
    {
      id: "baochuan9",
      sceneNum: 24,
      titleVi: "#24 Bảo Thuyền 9 Buồm Trịnh Hòa",
      titleEn: "#24 Zheng He 9-Masted Treasure Ship",
      noteVi: "Hải thuyền thế kỷ XV với 9 cột buồm nan tre và vách khoang ngăn kín nước độc lập.",
      noteEn: "Ming 9-masted ocean flagship showcasing battened lug sails & watertight bulkheads.",
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
    if (rt.scene && typeof rt.scene.traverse === "function") {
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
    var mVermilion = new THREE.MeshStandardMaterial({ color: 0x8f2924, roughness: 0.55 });
    var mGold = new THREE.MeshStandardMaterial({ color: 0xc9963b, metalness: 0.35, roughness: 0.35 });
    var mTimber = new THREE.MeshStandardMaterial({ color: 0x4b3322, roughness: 0.72 });
    var mStone = new THREE.MeshStandardMaterial({ color: 0xc8c0b4, roughness: 0.85 });
    var mClay = new THREE.MeshStandardMaterial({ color: 0x9f7e5b, roughness: 0.88 });
    var mWater = new THREE.MeshStandardMaterial({ color: 0x1b6e5c, roughness: 0.2, metalness: 0.12 });
    var mWhite = new THREE.MeshStandardMaterial({ color: 0xefe9de, roughness: 0.82 });
    var mSlate = new THREE.MeshStandardMaterial({ color: 0x2c333b, roughness: 0.6 });

    var anim = {};

    if (activeSubId === "meridian") {
      var roofGroup = new THREE.Group();
      // U-shaped Meridian Gate terrace
      var base = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.75, 1.5), mVermilion);
      base.position.set(0, -0.5, -0.4);
      root.add(base);
      var wingL = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.72, 2.2), mVermilion);
      wingL.position.set(-1.6, -0.52, 1.0);
      var wingR = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.72, 2.2), mVermilion);
      wingR.position.set(1.6, -0.52, 1.0);
      root.add(wingL, wingR);
      // Central Gate openings
      for (var p = -1; p <= 1; p++) {
        var gateVoid = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.5, 1.56), mSlate);
        gateVoid.position.set(p * 0.8, -0.62, -0.4);
        root.add(gateVoid);
      }
      // Interlocking Dougong tier ring + Central Hall
      for (var d = -3; d <= 3; d++) {
        var dg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.14, 0.52), mTimber);
        dg.position.set(d * 0.45, -0.05, -0.4);
        roofGroup.add(dg);
      }
      var mainHall = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.52, 0.9), mVermilion);
      mainHall.position.set(0, 0.25, -0.4);
      var mainRoof = new THREE.Mesh(new THREE.ConeGeometry(1.9, 0.65, 4), mGold);
      mainRoof.rotation.y = Math.PI / 4;
      mainRoof.position.set(0, 0.82, -0.4);
      roofGroup.add(mainHall, mainRoof);
      // Corner Phoenix pavilions
      [-1.55, 1.55].forEach(function (xPos) {
        var pv = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.46, 0.62), mVermilion);
        pv.position.set(xPos, 0.15, 1.6);
        var pr = new THREE.Mesh(new THREE.ConeGeometry(0.58, 0.45, 4), mGold);
        pr.rotation.y = Math.PI / 4;
        pr.position.set(xPos, 0.58, 1.6);
        roofGroup.add(pv, pr);
      });
      root.add(roofGroup);
      anim.seismicGroup = roofGroup;
    } else if (activeSubId === "suzhou") {
      // Pond base
      var pond = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 0.12, 36), mWater);
      pond.position.set(0, -0.7, 0);
      root.add(pond);
      // Hexagonal lakeside platform + Pavilion
      var plat = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.25, 0.28, 6), mWhite);
      plat.position.set(-0.6, -0.5, -0.35);
      root.add(plat);
      for (var k = 0; k < 6; k++) {
        var ang = (k / 6) * Math.PI * 2;
        var col = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.95, 10), mVermilion);
        col.position.set(-0.6 + Math.cos(ang) * 0.78, 0.1, -0.35 + Math.sin(ang) * 0.78);
        root.add(col);
      }
      var roof1 = new THREE.Mesh(new THREE.ConeGeometry(1.25, 0.62, 6), mSlate);
      roof1.position.set(-0.6, 0.88, -0.35);
      var finial = new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 14), mGold);
      finial.position.set(-0.6, 1.24, -0.35);
      root.add(roof1, finial);
      // Sculpted Taihu porous limestone cluster
      var rockGroup = new THREE.Group();
      var rockParts = [
        [1.25, -0.2, 0.45, 0.38, 0.88, 0.34],
        [1.42, 0.25, 0.52, 0.26, 0.54, 0.26],
        [1.06, 0.02, 0.32, 0.22, 0.42, 0.24]
      ];
      rockParts.forEach(function (rp) {
        var st = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5, 0), mStone);
        st.scale.set(rp[3], rp[4], rp[5]);
        st.position.set(rp[0], rp[1], rp[2]);
        rockGroup.add(st);
      });
      var moonWall = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.35, 2.2), mWhite);
      moonWall.position.set(-1.95, 0.05, 0.2);
      root.add(rockGroup, moonWall);
      anim.floatRing = pond;
    } else if (activeSubId === "mogao") {
      // Layered desert conglomerate cliff face
      for (var t = 0; t < 4; t++) {
        var cliff = new THREE.Mesh(new THREE.BoxGeometry(4.8 - t * 0.15, 0.62, 1.4 - t * 0.12), mClay);
        cliff.position.set(0, -0.7 + t * 0.56, -0.6);
        root.add(cliff);
        for (var n = -2; n <= 2; n++) {
          if (n === 0 && t < 3) continue;
          var niche = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.32, 0.32), mSlate);
          niche.position.set(n * 0.85, -0.68 + t * 0.56, 0.08 - t * 0.04);
          root.add(niche);
        }
      }
      // Iconic 9-Tier Wooden Pavilion frontispiece
      for (var lv = 0; lv < 6; lv++) {
        var s = 1.18 - lv * 0.11;
        var core = new THREE.Mesh(new THREE.BoxGeometry(s, 0.28, 0.65), mVermilion);
        core.position.set(0, -0.68 + lv * 0.36, 0.22);
        var eave = new THREE.Mesh(new THREE.ConeGeometry(s * 0.88, 0.16, 4), mTimber);
        eave.rotation.y = Math.PI / 4;
        eave.position.set(0, -0.5 + lv * 0.36, 0.22);
        root.add(core, eave);
      }
      var topCap = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.34, 4), mGold);
      topCap.rotation.y = Math.PI / 4;
      topCap.position.set(0, 1.48, 0.22);
      root.add(topCap);
    } else if (activeSubId === "terracotta") {
      // Pit 1 trench floor & rammed-earth dividing walls
      var floor = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.15, 3.2), mSlate);
      floor.position.set(0, -0.8, 0);
      root.add(floor);
      for (var wIdx = -1; wIdx <= 1; wIdx++) {
        var wall = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.55, 0.16), mClay);
        wall.position.set(0, -0.45, wIdx * 1.15);
        root.add(wall);
      }
      // Sculpted warrior phalanx rows + officer height bump
      for (var row = 0; row < 2; row++) {
        var zCor = row === 0 ? -0.58 : 0.58;
        for (var col = -3; col <= 3; col++) {
          var isGen = (row === 0 && col === 0);
          var fig = new THREE.Group();
          var body = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, isGen ? 0.62 : 0.5, 10), isGen ? mVermilion : mClay);
          var head = new THREE.Mesh(new THREE.SphereGeometry(0.085, 10, 10), mClay);
          head.position.y = isGen ? 0.42 : 0.34;
          fig.add(body, head);
          if (isGen) {
            var crest = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.09, 0.08), mGold);
            crest.position.y = 0.52;
            fig.add(crest);
          }
          fig.position.set(col * 0.56, -0.45, zCor);
          root.add(fig);
        }
      }
      // Chariot frame behind vanguard
      var wheelL = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.035, 8, 20), mTimber);
      wheelL.position.set(-1.7, -0.44, 0.85);
      var cab = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.25, 0.55), mGold);
      cab.position.set(-1.7, -0.35, 0.58);
      root.add(wheelL, cab);
    } else if (activeSubId === "hongqiao") {
      // River Bian canal water + open pierless channel
      var river = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.16, 2.2), mWater);
      river.position.set(0, -0.75, 0);
      root.add(river);
      // Woven timber arch ribs spanning bank-to-bank with ZERO center piers
      var spanPts = 11;
      for (var ribZ = -0.55; ribZ <= 0.55; ribZ += 0.55) {
        for (var i = 0; i < spanPts - 1; i++) {
          var t1 = i / (spanPts - 1);
          var t2 = (i + 1) / (spanPts - 1);
          var x1 = -2.1 + t1 * 4.2, x2 = -2.1 + t2 * 4.2;
          var y1 = -0.55 + Math.sin(t1 * Math.PI) * 1.15;
          var y2 = -0.55 + Math.sin(t2 * Math.PI) * 1.15;
          var seg = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.11, 0.12), i % 2 === 0 ? mTimber : mVermilion);
          seg.position.set((x1 + x2) / 2, (y1 + y2) / 2, ribZ);
          seg.rotation.z = Math.atan2(y2 - y1, x2 - x1);
          root.add(seg);
        }
      }
      // Transverse interlocking tie beams + deck planks
      for (var ti = 1; ti < spanPts - 1; ti++) {
        var frac = ti / (spanPts - 1);
        var cx = -2.1 + frac * 4.2;
        var cy = -0.55 + Math.sin(frac * Math.PI) * 1.15;
        var tie = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 1.45), mGold);
        tie.position.set(cx, cy + 0.06, 0);
        root.add(tie);
      }
      // Animated Song canal barge passing underneath center arch
      var barge = new THREE.Group();
      var bHull = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.22, 0.42), mTimber);
      var bCabin = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.24, 0.34), mWhite);
      bCabin.position.set(-0.08, 0.2, 0);
      barge.add(bHull, bCabin);
      barge.position.set(0, -0.56, 0);
      root.add(barge);
      anim.barge = barge;
    } else {
      // #24 Zheng He 9-Masted Treasure Ship + Watertight Bulkheads
      var sea = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.12, 2.8), mWater);
      sea.position.set(0, -0.78, 0);
      root.add(sea);
      var ship = new THREE.Group();
      var hullMat = cutawayHull
        ? new THREE.MeshStandardMaterial({ color: 0x5c3a21, transparent: true, opacity: 0.42, roughness: 0.7 })
        : mTimber;
      var hull = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.56, 1.05), hullMat);
      hull.position.set(0, -0.34, 0);
      ship.add(hull);
      // 7 transverse Watertight Bulkheads clearly visible!
      for (var bk = -1.45; bk <= 1.45; bk += 0.48) {
        var bulkhead = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.52, 0.98), mVermilion);
        bulkhead.position.set(bk, -0.34, 0);
        ship.add(bulkhead);
      }
      var deckStern = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.36, 0.98), mVermilion);
      deckStern.position.set(-1.35, 0.08, 0);
      ship.add(deckStern);
      // 9 Battened Lug-Sail Masts (3 staggered axial rows)
      var mastSpecs = [
        [-1.35, -0.18, 0.95], [-1.05, 0.2, 1.05], [-0.55, 0, 1.38],
        [-0.05, -0.22, 1.25], [0.22, 0.02, 1.55], [0.68, 0.22, 1.28],
        [1.02, 0, 1.32], [1.4, -0.16, 1.02], [1.62, 0.14, 0.92]
      ];
      mastSpecs.forEach(function (ms) {
        var mast = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, ms[2], 8), mGold);
        mast.position.set(ms[0], ms[2] * 0.5 - 0.1, ms[1]);
        var sail = new THREE.Mesh(new THREE.BoxGeometry(0.04, ms[2] * 0.65, 0.38), mWhite);
        sail.position.set(ms[0] + 0.04, ms[2] * 0.58 - 0.1, ms[1]);
        sail.rotation.y = 0.22;
        ship.add(mast, sail);
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
    var h = Math.max(300, container.clientHeight || 360);

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x141210);
    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(4.1, 2.8, 5.1);
    camera.lookAt(0, 0, 0);

    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" }); }
    catch (_e) { container.innerHTML = '<div class="epistemic-box">WebGL required for 3D Masterpiece Studio.</div>'; return; }
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    var sunPositions = [[-5, 3.5, 4], [2.5, 7, 5], [5.5, 2.8, -3]];
    var sp = sunPositions[sunAngleIdx] || sunPositions[1];
    scene.add(new THREE.AmbientLight(0xfff5e4, 0.66));
    var l1 = new THREE.DirectionalLight(0xffe8c6, 1.12);
    l1.position.set(sp[0], sp[1], sp[2]);
    scene.add(l1);
    var l2 = new THREE.DirectionalLight(0x7fb0a2, 0.44);
    l2.position.set(-4, 2, -4);
    scene.add(l2);

    var root = new THREE.Group();
    scene.add(root);
    var anim = buildSubScene(THREE, root);

    var drag = false, px = 0, py = 0, ry = 0.28, rx = 0.18;
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

    var t0 = performance.now();
    function tick() {
      if (!rt) return;
      rt.rafId = requestAnimationFrame(tick);
      var dt = (performance.now() - t0) * 0.001;
      if (!drag) ry += 0.0024;
      root.rotation.set(rx, ry, 0);
      if (anim.seismicGroup && seismicShake) {
        anim.seismicGroup.position.x = Math.sin(dt * 18) * 0.055;
        anim.seismicGroup.position.z = Math.cos(dt * 14) * 0.03;
      }
      if (anim.barge) {
        anim.barge.position.z = Math.sin(dt * 0.7) * 0.85;
      }
      if (anim.ship) {
        anim.ship.rotation.z = Math.sin(dt * 1.4) * 0.025;
      }
      renderer.render(scene, camera);
    }

    var ro = new ResizeObserver(function () {
      if (!rt) return;
      var nw = Math.max(280, container.clientWidth || 560);
      var nh = Math.max(300, container.clientHeight || 360);
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
      '  <div id="cce-3d-v7-masterpieces-canvas" style="width:100%;height:365px;border-radius:var(--radius);overflow:hidden;border:1px solid var(--hairline);"></div>' +
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
