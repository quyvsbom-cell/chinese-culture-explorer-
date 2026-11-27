// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — 3D Dougong (斗拱) Timber Joinery Lab
// 4-Tier Exploded Yingzao Fashi Bracket + Seismic Energy Dissipation Demo
// ============================================================================

(function () {
  "use strict";

  var rt = null;
  var explodePct = 35;
  var seismicOn = false;

  function ensureMgr() {
    if (window.CCE_WEBGL_MGR) return window.CCE_WEBGL_MGR;
    return { register: function () {}, disposeAll: function () {}, getActiveId: function () { return null; } };
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

  function mount(containerId) {
    var container = document.getElementById(containerId);
    if (!container || typeof window.THREE === "undefined") return;
    var THREE = window.THREE;
    var PBR = window.CCE_3D_PBR;

    ensureMgr().register("dougong-3d", dispose);
    dispose();
    ensureMgr().register("dougong-3d", dispose);

    container.innerHTML = "";
    var w = Math.max(280, container.clientWidth || 540);
    var h = Math.max(300, container.clientHeight || 360);

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x161412);
    var camera = new THREE.PerspectiveCamera(36, w / h, 0.1, 100);
    camera.position.set(3.6, 2.4, 4.6);
    camera.lookAt(0, 0.55, 0);

    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" }); }
    catch (_err) { container.innerHTML = '<div class="epistemic-box">WebGL required for interactive Dougong joinery.</div>'; return; }
    if (PBR) {
      PBR.configureRenderer(THREE, renderer, { exposure: 1.14 });
      PBR.applyStudioEnvironment(THREE, renderer, scene, "warm");
    } else {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    }
    renderer.setSize(w, h, false);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffeacc, 0x221b16, 0.58));
    var l1 = new THREE.DirectionalLight(0xffedd2, 1.32);
    l1.position.set(4.5, 7.5, 5.2);
    l1.castShadow = true;
    l1.shadow.mapSize.width = 1024; l1.shadow.mapSize.height = 1024;
    scene.add(l1);
    var l2 = new THREE.DirectionalLight(0x88b3a4, 0.5); l2.position.set(-5, 2.5, -4); scene.add(l2);

    var woodTex = PBR ? PBR.getTexture(THREE, "wood") : null;
    var woodBump = PBR ? PBR.getTexture(THREE, "woodBump") : null;
    var marbleTex = PBR ? PBR.getTexture(THREE, "marble") : null;
    var tileTex = PBR ? PBR.getTexture(THREE, "tile") : null;
    var tileBump = PBR ? PBR.getTexture(THREE, "tileBump") : null;

    var MatWood = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;
    var woodRed = new MatWood({ color: 0x922721, map: woodTex, bumpMap: woodBump, bumpScale: 0.015, roughness: 0.44, clearcoat: 0.28, clearcoatRoughness: 0.3 });
    var woodGold = new MatWood({ color: 0xc8953d, map: woodTex, bumpMap: woodBump, bumpScale: 0.015, roughness: 0.36, metalness: 0.08, clearcoat: 0.32 });
    var woodDark = new THREE.MeshStandardMaterial({ color: 0x4b3322, map: woodTex, bumpMap: woodBump, bumpScale: 0.02, roughness: 0.54 });
    var oakTenon = new THREE.MeshStandardMaterial({ color: 0xd7b377, map: woodTex, roughness: 0.48 });
    var stoneCol = new THREE.MeshStandardMaterial({ color: 0xccc4b6, map: marbleTex, roughness: 0.62 });
    var roofTile = new MatWood({ color: 0xc89828, map: tileTex, bumpMap: tileBump, bumpScale: 0.04, roughness: 0.22, metalness: 0.14, clearcoat: 0.72 });

    var root = new THREE.Group();
    scene.add(root);

    // Base Museum Plinth & Carved Column Plinth + Shadow Disc
    var ped = PBR ? PBR.createMuseumPedestal(THREE, 1.55, 0.24) : null;
    if (ped) { ped.position.y = -1.48; root.add(ped); }
    var col = new THREE.Mesh(new THREE.CylinderGeometry(0.41, 0.45, 1.18, 32), woodRed);
    col.position.y = -0.66;
    var colCollar = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.03, 10, 32), oakTenon);
    colCollar.rotation.x = Math.PI / 2;
    colCollar.position.y = -1.22;
    var plinth = new THREE.Mesh(new THREE.CylinderGeometry(0.60, 0.74, 0.24, 16), stoneCol);
    plinth.position.y = -1.34;
    root.add(col, colCollar, plinth);

    // Tier 1: Flared Ludou (Cap Block) with splayed base + visible cross mortise channel + tenon pin
    var t1 = new THREE.Group();
    var ludouUpper = new THREE.Mesh(new THREE.BoxGeometry(0.96, 0.22, 0.96), woodGold);
    ludouUpper.position.y = 0.06;
    var ludouSplay = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.50, 0.18, 4), woodGold);
    ludouSplay.rotation.y = Math.PI / 4;
    ludouSplay.position.y = -0.11;
    var mortiseCut = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.15, 1.02), woodDark);
    mortiseCut.position.y = 0.12;
    var tenonPin = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.34, 12), oakTenon);
    tenonPin.position.y = 0.18;
    t1.add(ludouUpper, ludouSplay, mortiseCut, tenonPin);
    t1.userData.baseY = 0.12;
    t1.userData.step = 0;

    // Tier 2: Curved Huagong cross-arms with Sandou bearing blocks & oak tenons
    var t2 = new THREE.Group();
    var hg1 = new THREE.Mesh(new THREE.BoxGeometry(2.14, 0.26, 0.28), woodRed);
    var hg2 = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.26, 1.82), woodRed);
    [-0.92, 0.92].forEach(function (x) {
      var capTip = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.28, 12), woodRed);
      capTip.rotation.x = Math.PI / 2; capTip.position.set(x, -0.02, 0);
      var d = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.13, 0.18, 4), woodGold);
      d.rotation.y = Math.PI / 4; d.position.set(x * 0.92, 0.21, 0);
      var pin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 0.08), oakTenon);
      pin.position.set(x * 0.92, 0.34, 0);
      t2.add(capTip, d, pin);
    });
    [-0.78, 0.78].forEach(function (z) {
      var dz = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.13, 0.18, 4), woodGold);
      dz.rotation.y = Math.PI / 4; dz.position.set(0, 0.21, z);
      t2.add(dz);
    });
    t2.add(hg1, hg2);
    t2.userData.baseY = 0.46;
    t2.userData.step = 0.55;

    // Tier 3: Tapered Cantilever Ang (下昂) & Guazi-gong transverse beam
    var t3 = new THREE.Group();
    var ang = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.22, 2.86), woodGold);
    ang.rotation.x = 0.18;
    var angBeak = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.44, 4), woodGold);
    angBeak.rotation.x = Math.PI / 2 + 0.18;
    angBeak.rotation.z = Math.PI / 4;
    angBeak.position.set(0, -0.28, 1.54);
    var ling = new THREE.Mesh(new THREE.BoxGeometry(2.64, 0.24, 0.26), woodRed);
    t3.add(ang, angBeak, ling);
    t3.userData.baseY = 0.84;
    t3.userData.step = 1.1;

    // Tier 4: Shuatou tie + Exposed Round Chuan Rafters + Sloped Curved Glazed Roof Eaves Section
    var t4 = new THREE.Group();
    var shua = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.22, 3.05), woodDark);
    var rafter = new THREE.Mesh(new THREE.BoxGeometry(2.96, 0.16, 1.98), woodRed);
    rafter.position.set(0, 0.22, -0.22);
    rafter.rotation.x = 0.22;
    for (var rf = -6; rf <= 6; rf++) {
      var roundChuan = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 2.24, 8), woodGold);
      roundChuan.rotation.x = Math.PI / 2 + 0.22;
      roundChuan.position.set(rf * 0.23, 0.31, -0.18);
      t4.add(roundChuan);
    }
    if (window.CCE_3D_ARCH && window.CCE_3D_ARCH.createCurvedRoof) {
      var eavesCurve = window.CCE_3D_ARCH.createCurvedRoof(THREE, {
        style: "gable", w: 3.12, d: 1.96, h: 0.46, tileKind: "tile", feiyanLift: 0.16
      });
      eavesCurve.position.set(0, 0.34, -0.22);
      eavesCurve.rotation.x = 0.12;
      t4.add(eavesCurve);
    } else {
      var eaves = new THREE.Mesh(new THREE.BoxGeometry(3.14, 0.12, 2.15), roofTile);
      eaves.position.set(0, 0.40, -0.22);
      eaves.rotation.x = 0.22;
      t4.add(eaves);
    }
    t4.add(shua, rafter);
    t4.userData.baseY = 1.24;
    t4.userData.step = 1.68;

    root.traverse(function (o) {
      if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
    });

    var tiers = [t1, t2, t3, t4];
    tiers.forEach(function (g) { root.add(g); });

    var dragging = false, px = 0, py = 0, ry = 0.45, rx = 0.15;
    function onDown(ev) { dragging = true; px = ev.clientX; py = ev.clientY; }
    function onMove(ev) {
      if (!dragging) return;
      ry += (ev.clientX - px) * 0.012;
      rx = Math.max(-0.6, Math.min(0.8, rx + (ev.clientY - py) * 0.008));
      px = ev.clientX; py = ev.clientY;
    }
    function onUp() { dragging = false; }
    function onWheel(ev) { ev.preventDefault(); camera.position.multiplyScalar(ev.deltaY > 0 ? 1.06 : 0.94); }
    var dom = renderer.domElement;
    dom.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    dom.addEventListener("wheel", onWheel, { passive: false });

    var ro = typeof ResizeObserver === "function" ? new ResizeObserver(function () {
      var nw = Math.max(280, container.clientWidth || 540), nh = Math.max(300, container.clientHeight || 360);
      camera.aspect = nw / nh; camera.updateProjectionMatrix(); renderer.setSize(nw, nh, false);
    }) : null;
    if (ro) ro.observe(container);

    var t = 0, rafId = 0;
    function tick() {
      rafId = requestAnimationFrame(tick);
      t += 0.06;
      var fac = explodePct / 100;
      tiers.forEach(function (g, i) {
        g.position.y = g.userData.baseY + g.userData.step * fac;
        g.position.x = seismicOn ? Math.sin(t + i * 0.65) * 0.09 * (1 + i * 0.3) : 0;
      });
      if (!dragging) ry += 0.003;
      root.rotation.y = ry;
      root.rotation.x = rx;
      renderer.render(scene, camera);
    }
    tick();

    var tierArr = [t1, t2, t3, t4];
    tierArr.forEach(function (tGrp) {
      tGrp.traverse(function (o) {
        if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
      });
    });

    rt = {
      scene: scene, renderer: renderer, rafId: rafId, ro: ro,
      cleanup: function () {
        dom.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        dom.removeEventListener("wheel", onWheel);
      }
    };
  }

  function renderPanel(enM) {
    return (
      '<div class="grid grid-2" style="gap:1rem;align-items:stretch;">' +
      '  <div id="cce-3d-dougong-canvas" style="min-height:330px;height:360px;background:#161412;border:1px solid var(--hairline);"></div>' +
      '  <div style="display:flex;flex-direction:column;gap:0.7rem;">' +
      '    <div class="editorial-kicker">' + (enM ? "YINGZAO FASHI 1103 · 营造法式四层斗拱" : "Doanh Tạo Pháp Thức (1103) · 斗拱四层分解") + '</div>' +
      '    <h3 style="margin:0;">' + (enM ? "4-Tier Dougong Mortise-and-Tenon Bracket" : "Kết cấu Đấu Củng 4 Tầng Chống Động Đất Không Đinh Thép") + '</h3>' +
      '    <label style="font-size:0.84rem;display:flex;flex-direction:column;gap:0.3rem;">' +
      '      <span><strong>' + (enM ? "Explode Separation:" : "Độ tách tầng mộng:") + '</strong> <code id="cce-dg-pct">' + explodePct + '%</code></span>' +
      '      <input type="range" min="0" max="100" value="' + explodePct + '" data-dg-range="1" />' +
      '    </label>' +
      '    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">' +
      '      <button type="button" class="btn ' + (seismicOn ? "btn-primary" : "btn-secondary") + ' btn-sm" data-dg-act="seismic">' + (seismicOn ? (enM ? "Stop Seismic Wave" : "Tắt Sóng Địa chấn") : (enM ? "Simulate Seismic Damping" : "Mô phỏng Giảm chấn Động đất")) + '</button>' +
      '      <button type="button" class="btn btn-ghost btn-sm" data-dg-act="reset">' + (enM ? "Assemble 0%" : "Lắp khít 0%") + '</button>' +
      '    </div>' +
      '    <div class="flashcard-layer" style="font-size:0.82rem;margin-top:auto;">' +
      '      <strong>' + (enM ? "4 Tiers Bottom→Top:" : "4 Tầng Từ Dưới Lên:") + '</strong> 1. Lư Đấu (卢斗) → 2. Hoa Củng (华拱) → 3. Đòn Bẩy Ngang (昂) → 4. Sái Đầu &amp; Xà Hiền (耍头). Khớp gỗ trượt vi mô giúp triệt tiêu năng lượng rung chấn.' +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
  }

  function bind() {
    if (window._cceDgBound || typeof document === "undefined") return;
    window._cceDgBound = true;
    document.addEventListener("input", function (e) {
      if (e.target && e.target.getAttribute && e.target.getAttribute("data-dg-range")) {
        explodePct = parseInt(e.target.value, 10) || 0;
        var lbl = document.getElementById("cce-dg-pct");
        if (lbl) lbl.textContent = explodePct + "%";
      }
    });
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-dg-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-dg-act");
      if (act === "seismic") seismicOn = !seismicOn;
      else if (act === "reset") { explodePct = 0; seismicOn = false; }
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
  }
  bind();

  window.CCE_3D_DOUGONG = {
    renderPanel: renderPanel,
    initMountedCanvasIfAny: function () { if (document.getElementById("cce-3d-dougong-canvas")) mount("cce-3d-dougong-canvas"); },
    dispose: dispose
  };
})();
