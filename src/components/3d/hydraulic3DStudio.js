// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — Dujiangyan (都江堰 256 BCE) 3D Hydraulics
// Fish Mouth Levee (鱼嘴) · Feishayan Spillway (飞沙堰) · Baopingkou Intake
// Dry Season (6:4 Inner Irrigation) vs Flood Season (4:6 Flood/Silt Bypass)
// ============================================================================

(function () {
  "use strict";

  var rt = null;
  var season = "dry"; // "dry" | "flood"

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

  function mount(containerId) {
    var container = document.getElementById(containerId);
    if (!container || typeof window.THREE === "undefined") return;
    var THREE = window.THREE;
    var PBR = window.CCE_3D_PBR;
    if (window.CCE_WEBGL_MGR) window.CCE_WEBGL_MGR.register("hydraulic-3d", dispose);
    dispose();
    if (window.CCE_WEBGL_MGR) window.CCE_WEBGL_MGR.register("hydraulic-3d", dispose);

    container.innerHTML = "";
    var w = Math.max(280, container.clientWidth || 540), h = Math.max(300, container.clientHeight || 360);
    var scene = new THREE.Scene(); scene.background = new THREE.Color(0x11171a);
    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0.5, 4.6, 5.4); camera.lookAt(0, 0, 0);

    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" }); }
    catch (_err) { container.innerHTML = '<div class="epistemic-box">WebGL unavailable.</div>'; return; }
    if (PBR) {
      PBR.configureRenderer(THREE, renderer, { exposure: 1.12 });
      PBR.applyStudioEnvironment(THREE, renderer, scene, "daylight");
    } else {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    }
    renderer.setSize(w, h, false);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xdceaff, 0x1c2529, 0.65));
    var l = new THREE.DirectionalLight(0xfff1d6, 1.2); l.position.set(5, 8, 4); l.castShadow = true; scene.add(l);

    var root = new THREE.Group(); scene.add(root);
    // Textured Slate Riverbed & Translucent Water Surface
    var bed = new THREE.Mesh(
      new THREE.BoxGeometry(7.8, 0.16, 4.8),
      new THREE.MeshStandardMaterial({
        color: 0x263238,
        map: PBR ? PBR.getTexture(THREE, "granite") : null,
        roughness: 0.85
      })
    );
    bed.position.y = -0.08;
    bed.receiveShadow = true;
    var WaterMat = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;
    var riverPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(7.5, 4.4),
      new WaterMat({ color: 0x1a566b, roughness: 0.10, metalness: 0.35, clearcoat: 0.85, transparent: true, opacity: 0.72 })
    );
    riverPlane.rotation.x = -Math.PI / 2;
    riverPlane.position.y = 0.04;
    root.add(bed, riverPlane);

    // Yuzui Fish Mouth Diversion Dike + Bamboo Basket Gabions (Machacuo)
    var stoneTex = PBR ? PBR.getTexture(THREE, "marble") : null;
    var stoneMat = new THREE.MeshStandardMaterial({ color: 0x9b9282, map: stoneTex, roughness: 0.68 });
    var bambooMat = new THREE.MeshStandardMaterial({ color: 0xc29e6c, map: PBR ? PBR.getTexture(THREE, "wood") : null, roughness: 0.65 });
    var yuzui = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.50, 0.58), stoneMat);
    yuzui.position.set(-0.6, 0.25, 0.08);
    var fishNose = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.76, 6), stoneMat);
    fishNose.rotation.z = Math.PI / 2;
    fishNose.position.set(-2.22, 0.24, 0.08);

    // Feishayan Low Silt Spillway + Traditional Three-Legged Wooden Tripod Weirs (Macha)
    var feishayan = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.24, 0.28), bambooMat);
    feishayan.position.set(1.1, 0.12, -0.05);
    [-1.4, -0.7, 0.1].forEach(function (mx) {
      var basket = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.12, 0.32, 10), bambooMat);
      basket.rotation.x = Math.PI / 2;
      basket.position.set(mx, 0.14, 0.42);
      root.add(basket);
    });

    // Lidui Jade Mountain, Erwang Temple Pavilion & Baopingkou Bottleneck
    var hillMat = new THREE.MeshStandardMaterial({ color: 0x2c5c49, roughness: 0.78 });
    var lidui = new THREE.Mesh(new THREE.CylinderGeometry(0.54, 0.78, 0.92, 24), hillMat);
    lidui.position.set(2.3, 0.46, 1.35);
    var cliff = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.95, 0.88), hillMat);
    cliff.position.set(2.3, 0.47, 0.25);

    [yuzui, fishNose, feishayan, lidui, cliff].forEach(function (m) {
      m.castShadow = true; m.receiveShadow = true;
    });
    root.add(yuzui, fishNose, feishayan, lidui, cliff);
    if (window.CCE_3D_ARCH && window.CCE_3D_ARCH.createPalaceHall) {
      var erwang = window.CCE_3D_ARCH.createPalaceHall(THREE, { w: 0.82, d: 0.56, baseH: 0.10, bodyH: 0.28, roofH: 0.24, baysX: 3, baysZ: 2, tileKind: "slateTile", marbleBase: false });
      erwang.position.set(2.3, 0.92, 0.25);
      root.add(erwang);
    }

    // Flowing water particles (70 droplets along Minjiang Inner & Outer channels)
    var droplets = [];
    var dropGeo = new THREE.SphereGeometry(0.06, 6, 6);
    for (var i = 0; i < 64; i++) {
      var isInner = i < 38;
      var mat = new THREE.MeshBasicMaterial({ color: isInner ? 0x45c7d9 : 0x5d9ce6 });
      var d = new THREE.Mesh(dropGeo, mat);
      root.add(d);
      droplets.push({ mesh: d, prog: (i / 64) % 1, lane: isInner ? "inner" : "outer", jitter: (Math.random() - 0.5) * 0.22 });
    }

    var dragging = false, px = 0, py = 0, ry = -0.15, rx = 0.08;
    function onDown(ev) { dragging = true; px = ev.clientX; py = ev.clientY; }
    function onMove(ev) { if (!dragging) return; ry += (ev.clientX - px) * 0.01; rx = Math.max(-0.4, Math.min(0.65, rx + (ev.clientY - py) * 0.008)); px = ev.clientX; py = ev.clientY; }
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
      var speed = season === "flood" ? 0.0095 : 0.0052;
      droplets.forEach(function (dr, idx) {
        dr.prog = (dr.prog + speed) % 1;
        var x = -3.4 + dr.prog * 6.8;
        var innerRatio = season === "dry" ? (idx % 10 < 6) : (idx % 10 < 4);
        var z = innerRatio ? 0.85 + dr.jitter : -0.85 + dr.jitter;
        // Flood overflow across Feishayan!
        if (season === "flood" && innerRatio && x > 0.7 && x < 1.5 && idx % 3 === 0) {
          z -= (x - 0.7) * 1.4;
        }
        dr.mesh.position.set(x, 0.14, z);
      });
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
    return (
      '<div class="grid grid-2" style="gap:1rem;align-items:stretch;">' +
      '  <div id="cce-3d-hydraulic-canvas" style="min-height:330px;height:360px;background:#131718;border:1px solid var(--hairline);"></div>' +
      '  <div style="display:flex;flex-direction:column;gap:0.7rem;">' +
      '    <div class="editorial-kicker">' + (enM ? "DUJIANGYAN 256 BCE · 都江堰无坝引水" : "Thủy lợi Đô Giang Yển (256 TCN) · 都江堰无坝引水") + '</div>' +
      '    <h3 style="margin:0;">' + (enM ? "Li Bing's Damless Irrigation & Silt-Spillway Engineering" : "Công trình Phân lưu Không Đập Chắn: Ngư Chủy · Phi Sa Yển · Bảo Bình Khẩu") + '</h3>' +
      '    <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">' +
      '      <button type="button" class="filter-pill ' + (season === "dry" ? "active" : "") + '" data-h3d-act="season" data-val="dry">' + (enM ? "Dry Season (6:4 Inner Flow)" : "Mùa Kiệt (6 Nội : 4 Ngoại)") + '</button>' +
      '      <button type="button" class="filter-pill ' + (season === "flood" ? "active" : "") + '" data-h3d-act="season" data-val="flood">' + (enM ? "Flood Season (4:6 + Silt Spill)" : "Mùa Lũ (4 Nội : 6 Ngoại + Tràn Phi Sa)") + '</button>' +
      '    </div>' +
      '    <div class="flashcard-layer" style="font-size:0.82rem;margin-top:auto;">' +
      '      <strong>' + (season === "dry" ? (enM ? "Dry Season Hydrology:" : "Chế độ Mùa Cạn:") : (enM ? "Flood Overflow & Desilting:" : "Cơ chế Tự xả Lũ & Bùn cát:")) + '</strong> ' +
      (season === "dry"
        ? (enM ? "Deeply dredged inner channel captures 60% of Minjiang flow through Baopingkou to irrigate the Chengdu Plain." : "Nội Giang đào sâu hơn dẫn 60% lưu lượng qua Bảo Bình Khẩu tưới tiêu quanh năm cho đồng bằng Thành Đô.")
        : (enM ? "At high stage, 60% is deflected into the Outer River while excess flow and 75% of gravel/silt spill sideways over Feishayan." : "Khi lũ lên cao, dòng chủ lực chuyển 60% sang Ngoại Giang và bùn cát thừa tự động tràn qua đập thấp Phi Sa Yển.")) +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
  }

  function bind() {
    if (window._cceH3dBound || typeof document === "undefined") return;
    window._cceH3dBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest('[data-h3d-act="season"]') : null;
      if (!el) return;
      season = el.getAttribute("data-val") || "dry";
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
  }
  bind();

  window.CCE_3D_HYDRAULIC = {
    renderPanel: renderPanel,
    initMountedCanvasIfAny: function () { if (document.getElementById("cce-3d-hydraulic-canvas")) mount("cce-3d-hydraulic-canvas"); },
    dispose: dispose
  };
})();
