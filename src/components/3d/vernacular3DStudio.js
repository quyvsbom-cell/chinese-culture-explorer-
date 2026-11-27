// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — 3D Vernacular Architecture Cutaways
// Switchable: Fujian Tulou (90° Cutaway) / Beijing Siheyuan / Huizhou Courtyard
// ============================================================================

(function () {
  "use strict";

  var rt = null;
  var activeModel = "tulou";

  var MODELS = [
    {
      id: "tulou",
      zh: "福建土楼",
      vi: "Thổ Lâu Phúc Kiến (Cắt góc 90°)",
      en: "Fujian Tulou (90° Cutaway)",
      noteVi: "Tường đất nện dày 1,5m chịu hỏa lực và động đất; bên trong là 4 tầng khung gỗ vòng tròn quây quanh Từ đường trung tâm (UNESCO 2008).",
      noteEn: "Thick 1.5m rammed-earth defensive perimeter housing four concentric timber floors centered around an ancestral courtyard (UNESCO 2008)."
    },
    {
      id: "siheyuan",
      zh: "北京四合院",
      vi: "Tứ Hợp Viện Bắc Kinh",
      en: "Beijing Siheyuan Courtyard",
      noteVi: "Bố cục 4 mặt khép kín hướng trục Nam: Chính phòng (Trưởng bối), Đông–Tây Sương phòng, Cổng Thùy Hoa Môn và Bình phong (Ảnh bích) giữ kín khí ấm mùa đông.",
      noteEn: "Inward courtyard framed by main northern Zhengfang, east/west Xiangfang wings, and an entrance spirit wall blocking winter winds."
    },
    {
      id: "huizhou",
      zh: "徽派马头墙",
      vi: "Tường Đầu Ngựa Huy Phái",
      en: "Huizhou Courtyard & Matouqiang",
      noteVi: "Tường vôi trắng bậc thang (Mã Đầu Tường) ngăn cháy lan giữa các nhà thương nhân Huy Châu; giếng trời Thiên Tỉnh thu nước mưa ('Tứ thủy quy đường').",
      noteEn: "Stepped whitewashed fire-break gable walls paired with a central Tianjing skywell channeling rainwater and daylight into timber halls."
    }
  ];

  function dispose() {
    if (!rt) return;
    if (rt.rafId) cancelAnimationFrame(rt.rafId);
    if (rt.cleanup) rt.cleanup();
    if (rt.ro) rt.ro.disconnect();
    if (rt.renderer) try { rt.renderer.dispose(); } catch (_e) {}
    rt = null;
  }

  function dispose() {
    if (!rt) return;
    if (rt.rafId) cancelAnimationFrame(rt.rafId);
    if (rt.cleanup) rt.cleanup();
    if (rt.ro) rt.ro.disconnect();
    if (window.CCE_3D_PBR && rt.scene) {
      try { window.CCE_3D_PBR.disposeScene(rt.scene, rt.renderer); } catch (_e) {}
    }
    if (rt.renderer) try { rt.renderer.dispose(); } catch (_e) {}
    rt = null;
  }

  function buildGeometry(THREE, root) {
    var PBR = window.CCE_3D_PBR;
    var ARCH = window.CCE_3D_ARCH;
    var woodTex = PBR ? PBR.getTexture(THREE, "wood") : null;
    var woodBump = PBR ? PBR.getTexture(THREE, "woodBump") : null;
    var tileTex = PBR ? PBR.getTexture(THREE, "slateTile") : null;
    var tileBump = PBR ? PBR.getTexture(THREE, "tileBump") : null;
    var marbleTex = PBR ? PBR.getTexture(THREE, "marble") : null;
    var graniteTex = PBR ? PBR.getTexture(THREE, "granite") : null;
    var rammedTex = PBR ? PBR.repeatTex(THREE, "rammedEarth", 3, 1) : woodTex;

    var earth = new THREE.MeshStandardMaterial({ color: 0xc29e6c, map: rammedTex, roughness: 0.88 });
    var roof = new THREE.MeshStandardMaterial({ color: 0x3b4046, map: tileTex, bumpMap: tileBump, bumpScale: 0.03, roughness: 0.58, metalness: 0.08 });
    var wood = new THREE.MeshStandardMaterial({ color: 0x7d3a24, map: woodTex, bumpMap: woodBump, bumpScale: 0.015, roughness: 0.54 });
    var redLacquer = new THREE.MeshStandardMaterial({ color: 0x8e2420, roughness: 0.40, metalness: 0.06 });
    var wallWhite = new THREE.MeshStandardMaterial({ color: 0xf1ece1, map: marbleTex, roughness: 0.74 });
    var stoneBase = new THREE.MeshStandardMaterial({ color: 0x45494e, map: graniteTex, roughness: 0.78 });

    if (activeModel === "tulou") {
      // Stone damp-proof foundation ring + 270 deg rammed-earth cylinder cutaway
      var footRing = new THREE.Mesh(new THREE.CylinderGeometry(2.44, 2.48, 0.22, 48, 1, false, Math.PI * 0.5, Math.PI * 1.5), stoneBase);
      footRing.position.y = 0.11;
      var outerWall = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.4, 1.62, 48, 1, true, Math.PI * 0.5, Math.PI * 1.5), earth);
      outerWall.material.side = THREE.DoubleSide;
      outerWall.position.y = 1.02;
      var innerWall = new THREE.Mesh(new THREE.CylinderGeometry(2.08, 2.12, 1.56, 48, 1, true, Math.PI * 0.5, Math.PI * 1.5), earth);
      innerWall.material.side = THREE.DoubleSide;
      innerWall.position.y = 1.00;
      var tulouRoof = new THREE.Mesh(new THREE.CylinderGeometry(2.58, 1.72, 0.48, 48, 1, true, Math.PI * 0.5, Math.PI * 1.5), roof);
      tulouRoof.material.side = THREE.DoubleSide;
      tulouRoof.position.y = 2.02;
      var courtyard = new THREE.Mesh(new THREE.CylinderGeometry(2.05, 2.05, 0.08, 48), stoneBase);
      courtyard.position.y = 0.04;
      [0.46, 0.88, 1.30, 1.72].forEach(function (y) {
        var deck = new THREE.Mesh(new THREE.RingGeometry(1.42, 2.26, 40, 1, Math.PI * 0.5, Math.PI * 1.5), wood);
        deck.rotation.x = -Math.PI / 2;
        deck.rotation.z = Math.PI * 0.5;
        deck.material.side = THREE.DoubleSide;
        deck.position.y = y;
        root.add(deck);
      });
      for (var pi = 0; pi < 9; pi++) {
        var ang = Math.PI * 0.58 + (pi / 8) * Math.PI * 1.34;
        var post = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 1.72, 8), redLacquer);
        post.position.set(Math.sin(ang) * 1.46, 0.90, Math.cos(ang) * 1.46);
        root.add(post);
      }
      var hall = new THREE.Mesh(new THREE.BoxGeometry(0.84, 0.65, 0.84), wallWhite);
      hall.position.y = 0.38;
      var hallRoof = ARCH ? ARCH.createCurvedRoof(THREE, { style: "cuanjian", sides: 4, radius: 0.72, h: 0.42, tileKind: "slateTile", feiyanLift: 0.14 }) : new THREE.Mesh(new THREE.ConeGeometry(0.78, 0.42, 4), roof);
      hallRoof.position.y = 0.72;
      root.add(footRing, outerWall, innerWall, tulouRoof, courtyard, hall, hallRoof);
    } else if (activeModel === "siheyuan") {
      var ground = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.12, 4.6), stoneBase);
      root.add(ground);
      var paver = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.04, 2.2), new THREE.MeshStandardMaterial({ color: 0x7b7870, roughness: 0.78 }));
      paver.position.y = 0.07;
      root.add(paver);
      function makePavilion(w, h, d, x, z, hasRedCols) {
        var g = new THREE.Group();
        var body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallWhite);
        body.position.y = h / 2;
        var cap = ARCH
          ? ARCH.createCurvedRoof(THREE, { style: "xieshan", w: w, d: d, h: h * 0.64, tileKind: "slateTile", eaveOver: 0.14, feiyanLift: 0.12, noRafters: true })
          : new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.74, h * 0.65, 4), roof);
        cap.position.y = h;
        g.add(body, cap);
        if (hasRedCols) {
          [-w * 0.35, 0, w * 0.35].forEach(function (cx) {
            var p = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.035, h * 0.92, 8), redLacquer);
            p.position.set(cx, h * 0.46, d * 0.54);
            g.add(p);
          });
        }
        g.position.set(x, 0.06, z);
        root.add(g);
      }
      makePavilion(2.8, 0.88, 0.92, 0, -1.52, true);
      makePavilion(0.78, 0.66, 1.92, -1.65, 0, false);
      makePavilion(0.78, 0.66, 1.92, 1.65, 0, false);
      makePavilion(2.6, 0.56, 0.62, 0, 1.68, false);
      var spiritWall = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.62, 0.1), redLacquer);
      spiritWall.position.set(0, 0.37, 1.12);
      var gateArch = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.72, 0.34), redLacquer);
      gateArch.position.set(0, 0.42, 0.72);
      var treeTrunk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.55, 8), wood);
      treeTrunk.position.set(-0.55, 0.34, -0.2);
      var treeFoliage = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 10), new THREE.MeshStandardMaterial({ color: 0x3f6b3e, roughness: 0.85 }));
      treeFoliage.position.set(-0.55, 0.72, -0.2);
      root.add(spiritWall, gateArch, treeTrunk, treeFoliage);
    } else {
      var hBase = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.14, 4.4), stoneBase);
      root.add(hBase);
      [-1.72, 1.72].forEach(function (x) {
        [
          { z: -0.92, h: 1.88, d: 1.24 },
          { z: 0.12, h: 1.54, d: 1.04 },
          { z: 1.04, h: 1.22, d: 0.92 }
        ].forEach(function (st) {
          var wBlock = new THREE.Mesh(new THREE.BoxGeometry(0.18, st.h, st.d), wallWhite);
          wBlock.position.set(x, st.h / 2 + 0.07, st.z);
          var cap = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.10, st.d + 0.10), roof);
          cap.position.set(x, st.h + 0.10, st.z);
          root.add(wBlock, cap);
        });
      });
      var backHall = new THREE.Mesh(new THREE.BoxGeometry(3.15, 1.12, 1.02), wood);
      backHall.position.set(0, 0.62, -1.1);
      var backRoof = ARCH ? ARCH.createCurvedRoof(THREE, { style: "gable", w: 3.2, d: 1.15, h: 0.46, tileKind: "slateTile", feiyanLift: 0.08 }) : new THREE.Mesh(new THREE.BoxGeometry(3.32, 0.28, 1.26), roof);
      backRoof.position.set(0, 1.18, -1.1);
      [-1.24, 1.24].forEach(function (gx) {
        var wing = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.88, 2.0), wood);
        wing.position.set(gx, 0.50, 0.42);
        var wRoof = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.16, 2.1), roof);
        wRoof.position.set(gx, 1.00, 0.42);
        root.add(wing, wRoof);
      });
      var PoolMat = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;
      var pool = new THREE.Mesh(new THREE.PlaneGeometry(1.24, 0.92), new PoolMat({ color: 0x2a6d7a, roughness: 0.10, metalness: 0.35, clearcoat: 0.85 }));
      pool.rotation.x = -Math.PI / 2;
      pool.position.set(0, 0.08, 0.45);
      root.add(backHall, backRoof, pool);
    }
    root.traverse(function (o) {
      if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
    });
  }

  function mount(containerId) {
    var container = document.getElementById(containerId);
    if (!container || typeof window.THREE === "undefined") return;
    var THREE = window.THREE;
    var PBR = window.CCE_3D_PBR;
    if (window.CCE_WEBGL_MGR) window.CCE_WEBGL_MGR.register("vernacular-3d", dispose);
    dispose();
    if (window.CCE_WEBGL_MGR) window.CCE_WEBGL_MGR.register("vernacular-3d", dispose);

    container.innerHTML = "";
    var w = Math.max(280, container.clientWidth || 540), h = Math.max(300, container.clientHeight || 360);
    var scene = new THREE.Scene(); scene.background = new THREE.Color(0x161719);
    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(4.5, 3.8, 5.2); camera.lookAt(0, 0.6, 0);

    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" }); }
    catch (_err) { container.innerHTML = '<div class="epistemic-box">WebGL unavailable.</div>'; return; }
    if (PBR) {
      PBR.configureRenderer(THREE, renderer, { exposure: 1.12 });
      PBR.applyStudioEnvironment(THREE, renderer, scene, "warm");
    } else {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    }
    renderer.setSize(w, h, false);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffeacc, 0x22201d, 0.65));
    var l = new THREE.DirectionalLight(0xfff4df, 1.25); l.position.set(5.5, 9, 6.5); l.castShadow = true;
    l.shadow.mapSize.width = 1024; l.shadow.mapSize.height = 1024;
    scene.add(l);
    var rim = new THREE.DirectionalLight(0x88b3c8, 0.42); rim.position.set(-5, 3, -5); scene.add(rim);
    var root = new THREE.Group(); scene.add(root);
    if (PBR) {
      var plinth = PBR.createMuseumPedestal(THREE, 2.55, 0.24);
      plinth.position.y = -0.08;
      root.add(plinth);
    }
    buildGeometry(THREE, root);

    var dragging = false, px = 0, py = 0, ry = 0.5, rx = 0.1;
    function onDown(ev) { dragging = true; px = ev.clientX; py = ev.clientY; }
    function onMove(ev) { if (!dragging) return; ry += (ev.clientX - px) * 0.012; rx = Math.max(-0.5, Math.min(0.7, rx + (ev.clientY - py) * 0.008)); px = ev.clientX; py = ev.clientY; }
    function onUp() { dragging = false; }
    function onWheel(ev) { ev.preventDefault(); camera.position.multiplyScalar(ev.deltaY > 0 ? 1.06 : 0.94); }
    var dom = renderer.domElement;
    dom.addEventListener("pointerdown", onDown); window.addEventListener("pointermove", onMove); window.addEventListener("pointerup", onUp); dom.addEventListener("wheel", onWheel, { passive: false });
    var ro = typeof ResizeObserver === "function" ? new ResizeObserver(function () {
      var nw = Math.max(280, container.clientWidth || 540), nh = Math.max(300, container.clientHeight || 360);
      camera.aspect = nw / nh; camera.updateProjectionMatrix(); renderer.setSize(nw, nh, false);
    }) : null;
    if (ro) ro.observe(container);

    var rafId = 0;
    function tick() {
      rafId = requestAnimationFrame(tick);
      if (!dragging) ry += 0.0035;
      root.rotation.y = ry; root.rotation.x = rx;
      renderer.render(scene, camera);
    }
    tick();

    rt = {
      scene: scene, renderer: renderer, rafId: rafId, ro: ro,
      cleanup: function () {
        dom.removeEventListener("pointerdown", onDown); window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp); dom.removeEventListener("wheel", onWheel);
      }
    };
  }

  function renderPanel(enM) {
    var m = MODELS.find(function (x) { return x.id === activeModel; }) || MODELS[0];
    return (
      '<div class="grid grid-2" style="gap:1rem;align-items:stretch;">' +
      '  <div id="cce-3d-vernacular-canvas" style="min-height:330px;height:360px;background:#161719;border:1px solid var(--hairline);"></div>' +
      '  <div style="display:flex;flex-direction:column;gap:0.7rem;">' +
      '    <div class="editorial-kicker">' + (enM ? "VERNACULAR 3D CUTAWAYS · 民居三维剖面" : "Kiến trúc Dân gian Vùng miền 3D · 民居三维剖面") + '</div>' +
      '    <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">' +
      MODELS.map(function (it) {
        return '<button type="button" class="filter-pill ' + (it.id === activeModel ? "active" : "") + '" data-v3d-act="pick" data-val="' + it.id + '">' + (enM ? it.en : it.vi) + '</button>';
      }).join("") +
      '    </div>' +
      '    <div class="analysis-panel-box" style="margin-top:auto;">' +
      '      <strong>' + (enM ? m.en : m.vi) + ' <span class="hanzi" style="color:var(--imperial-red);">' + m.zh + '</span></strong>' +
      '      <p style="margin:0.45rem 0 0;font-size:0.84rem;line-height:1.55;">' + (enM ? m.noteEn : m.noteVi) + '</p>' +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
  }

  function bind() {
    if (window._cceV3dBound || typeof document === "undefined") return;
    window._cceV3dBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest('[data-v3d-act="pick"]') : null;
      if (!el) return;
      activeModel = el.getAttribute("data-val") || "tulou";
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
  }
  bind();

  window.CCE_3D_VERNACULAR = {
    renderPanel: renderPanel,
    initMountedCanvasIfAny: function () { if (document.getElementById("cce-3d-vernacular-canvas")) mount("cce-3d-vernacular-canvas"); },
    dispose: dispose
  };
})();
