// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — 3-Mode Silk Road <-> EU-China Logistics 3D
// Mode 1: Ancient Silk Road | Mode 2: 2026 EU-China Rail Express & Ocean
// Mode 3: Historical-Modern Geopolitical Corridor Overlay
// ============================================================================

(function () {
  "use strict";

  var rt = null;
  var activeMode = "overlay"; // "ancient" | "modern" | "overlay"

  var NODES = [
    { id: "chang_an", zh: "长安/西安", en: "Xi'an (Chang'an)", x: 2.2, z: -0.6 },
    { id: "yiwu", zh: "义乌/宁波", en: "Yiwu / Ningbo", x: 3.3, z: -0.1 },
    { id: "haiphong", zh: "海防·河内", en: "Hai Phong / Hanoi", x: 2.0, z: 1.5 },
    { id: "khorgos", zh: "霍尔果斯", en: "Khorgos / Alashankou", x: 0.4, z: -1.4 },
    { id: "samarkand", zh: "撒马尔罕", en: "Samarkand", x: -0.9, z: -0.8 },
    { id: "malacca", zh: "马六甲", en: "Malacca Strait", x: 1.5, z: 2.5 },
    { id: "malaszewicze", zh: "马拉舍维奇", en: "Malaszewicze (PL)", x: -2.4, z: -1.7 },
    { id: "suez", zh: "苏伊士运河", en: "Suez Canal", x: -1.8, z: 0.8 },
    { id: "duisburg", zh: "杜伊斯堡", en: "Duisburg (Rail Hub)", x: -3.4, z: -1.6 },
    { id: "rotterdam", zh: "鹿特丹/安特卫普", en: "Rotterdam / Antwerp", x: -3.9, z: -1.2 }
  ];

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

  function addArc(THREE, group, a, b, color, yBoost) {
    var curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(a.x, 0.16, a.z),
      new THREE.Vector3((a.x + b.x) / 2, yBoost || 0.78, (a.z + b.z) / 2),
      new THREE.Vector3(b.x, 0.16, b.z)
    );
    var tube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 32, 0.036, 8, false),
      new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.32, roughness: 0.28, metalness: 0.35 })
    );
    group.add(tube);
    return curve;
  }

  function mount(containerId) {
    var container = document.getElementById(containerId);
    if (!container || typeof window.THREE === "undefined") return;
    var THREE = window.THREE;
    var PBR = window.CCE_3D_PBR;
    if (window.CCE_WEBGL_MGR) window.CCE_WEBGL_MGR.register("logistics-3d", dispose);
    dispose();
    if (window.CCE_WEBGL_MGR) window.CCE_WEBGL_MGR.register("logistics-3d", dispose);

    container.innerHTML = "";
    var w = Math.max(300, container.clientWidth || 560), h = Math.max(300, container.clientHeight || 360);
    var scene = new THREE.Scene(); scene.background = new THREE.Color(0x0f141a);
    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, 5.2, 6.2); camera.lookAt(-0.5, 0.1, 0);

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

    scene.add(new THREE.HemisphereLight(0xdceaff, 0x161b22, 0.65));
    var l = new THREE.DirectionalLight(0xffe9c4, 1.15); l.position.set(4.5, 9.5, 4.5); l.castShadow = true; scene.add(l);

    var root = new THREE.Group(); scene.add(root);
    // Textured Eurasian Continental Deck + Brass Framing Collar
    var board = new THREE.Mesh(
      new THREE.BoxGeometry(10.6, 0.18, 6.5),
      new THREE.MeshStandardMaterial({
        color: 0x1b232c,
        map: PBR ? PBR.getTexture(THREE, "granite") : null,
        roughness: 0.72,
        metalness: 0.18
      })
    );
    board.position.set(-0.4, -0.06, 0.4);
    board.receiveShadow = true;
    var latGrid = new THREE.GridHelper(10.4, 16, 0x2f4354, 0x1f2b36);
    latGrid.position.set(-0.4, 0.035, 0.4);
    root.add(board, latGrid);

    var byId = {};
    NODES.forEach(function (n) {
      byId[n.id] = n;
      var colHex = n.id === "haiphong" ? 0x2ec492 : 0xe0b254;
      var marker = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09, 0.11, 0.24, 16),
        new THREE.MeshStandardMaterial({ color: colHex, emissive: colHex, emissiveIntensity: 0.25, roughness: 0.28, metalness: 0.65 })
      );
      marker.position.set(n.x, 0.14, n.z);
      marker.castShadow = true;
      var halo = new THREE.Mesh(
        new THREE.TorusGeometry(0.16, 0.018, 8, 24),
        new THREE.MeshStandardMaterial({ color: colHex, roughness: 0.3, metalness: 0.8 })
      );
      halo.rotation.x = Math.PI / 2;
      halo.position.set(n.x, 0.045, n.z);
      root.add(marker, halo);
    });

    var movers = [];
    if (activeMode === "ancient" || activeMode === "overlay") {
      [[byId.chang_an, byId.khorgos], [byId.khorgos, byId.samarkand], [byId.samarkand, byId.suez]].forEach(function (p) {
        var c = addArc(THREE, root, p[0], p[1], 0xd99b42, 0.62);
        var orb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffe49c }));
        root.add(orb);
        movers.push({ mesh: orb, curve: c, off: Math.random() });
      });
      addArc(THREE, root, byId.yiwu, byId.malacca, 0x4ca8c4, 0.55);
      addArc(THREE, root, byId.malacca, byId.suez, 0x4ca8c4, 0.65);
    }

    if (activeMode === "modern" || activeMode === "overlay") {
      // China-Europe Railway Express (中欧班列)
      [[byId.yiwu, byId.khorgos], [byId.khorgos, byId.malaszewicze], [byId.malaszewicze, byId.duisburg]].forEach(function (p) {
        var c = addArc(THREE, root, p[0], p[1], 0xc93838, 0.92);
        var box = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.09, 0.09), new THREE.MeshBasicMaterial({ color: 0xff6e6e }));
        root.add(box);
        movers.push({ mesh: box, curve: c, off: Math.random() });
      });
      // Ocean + VN Feeders (Hai Phong / Ningbo -> Suez -> Rotterdam)
      var cOcean = addArc(THREE, root, byId.haiphong, byId.suez, 0x2ec492, 0.72);
      addArc(THREE, root, byId.suez, byId.rotterdam, 0x2ec492, 0.78);
      var ship = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 0.09), new THREE.MeshBasicMaterial({ color: 0x7df5c9 }));
      root.add(ship);
      movers.push({ mesh: ship, curve: cOcean, off: 0.2 });
    }

    var dragging = false, px = 0, py = 0, ry = 0, rx = 0.05;
    function onDown(ev) { dragging = true; px = ev.clientX; py = ev.clientY; }
    function onMove(ev) { if (!dragging) return; ry += (ev.clientX - px) * 0.01; rx = Math.max(-0.4, Math.min(0.6, rx + (ev.clientY - py) * 0.008)); px = ev.clientX; py = ev.clientY; }
    function onUp() { dragging = false; }
    function onWheel(ev) { ev.preventDefault(); camera.position.multiplyScalar(ev.deltaY > 0 ? 1.06 : 0.94); }
    var dom = renderer.domElement;
    dom.addEventListener("pointerdown", onDown); window.addEventListener("pointermove", onMove); window.addEventListener("pointerup", onUp); dom.addEventListener("wheel", onWheel, { passive: false });
    var ro = typeof ResizeObserver === "function" ? new ResizeObserver(function () {
      var nw = Math.max(300, container.clientWidth || 560), nh = Math.max(300, container.clientHeight || 360);
      camera.aspect = nw / nh; camera.updateProjectionMatrix(); renderer.setSize(nw, nh, false);
    }) : null;
    if (ro) ro.observe(container);

    var clockT = 0, rafId = 0;
    function tick() {
      rafId = requestAnimationFrame(tick);
      clockT += 0.0045;
      movers.forEach(function (m) { m.mesh.position.copy(m.curve.getPointAt((clockT + m.off) % 1)); });
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
    var modes = [
      { id: "ancient", vi: "1. Tơ lụa Cổ đại (Bộ & Hải)", en: "1. Ancient Silk Road (Land & Sea)" },
      { id: "modern", vi: "2. 2026 Trung–Âu (Đường sắt & Tàu Container)", en: "2. 2026 EU–China Express & Ocean" },
      { id: "overlay", vi: "3. Đối chiếu Xuyên thời gian", en: "3. Historic–Modern Continuum" }
    ];
    return (
      '<div class="grid grid-2" style="gap:1rem;align-items:stretch;">' +
      '  <div id="cce-3d-logistics-canvas" style="min-height:330px;height:360px;background:#111519;border:1px solid var(--hairline);"></div>' +
      '  <div style="display:flex;flex-direction:column;gap:0.65rem;">' +
      '    <div class="editorial-kicker">' + (enM ? "SILK ROAD TO EU–CHINA CORRIDOR · 丝路与中欧班列" : "Hành lang Tơ lụa → Trung–Âu 2026 · 丝绸之路与中欧班列") + '</div>' +
      '    <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">' +
      modes.map(function (m) {
        return '<button type="button" class="filter-pill ' + (activeMode === m.id ? "active" : "") + '" data-l3d-act="mode" data-val="' + m.id + '">' + (enM ? m.en : m.vi) + '</button>';
      }).join("") +
      '    </div>' +
      '    <div class="flashcard-layer" style="font-size:0.81rem;">' +
      '      <strong>' + (enM ? "EU–China Transit Benchmark:" : "Đối sánh Chỉ số Vận tải Á–Âu:") + '</strong><br>' +
      '      • <strong>' + (enM ? "Rail (中欧班列):" : "Đường sắt Trung–Âu:") + '</strong> Xi\'an/Yiwu → Khorgos → Malaszewicze (PL) → Duisburg (<strong>14–18 days</strong>)<br>' +
      '      • <strong>' + (enM ? "Ocean (FCL/LCL):" : "Đường biển:") + '</strong> Ningbo / Shenzhen / Hai Phong → Suez/Cape → Rotterdam/Antwerp (<strong>32–42 days</strong>)<br>' +
      '      • <strong>' + (enM ? "Continuity:" : "Tính kế thừa:") + '</strong> Hành lang Hà Tây – Hoắc Nhĩ Quả Tư nối liền tuyến lạc đà Trường An xưa với ga liên vận container sang Châu Âu ngày nay.' +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
  }

  function bind() {
    if (window._cceL3dBound || typeof document === "undefined") return;
    window._cceL3dBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest('[data-l3d-act="mode"]') : null;
      if (!el) return;
      activeMode = el.getAttribute("data-val") || "overlay";
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
  }
  bind();

  window.CCE_3D_LOGISTICS = {
    renderPanel: renderPanel,
    initMountedCanvasIfAny: function () { if (document.getElementById("cce-3d-logistics-canvas")) mount("cce-3d-logistics-canvas"); },
    dispose: dispose
  };
})();
