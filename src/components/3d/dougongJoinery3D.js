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
    if (rt.renderer) try { rt.renderer.dispose(); } catch (_e) {}
    rt = null;
  }

  function mount(containerId) {
    var container = document.getElementById(containerId);
    if (!container || typeof window.THREE === "undefined") return;
    var THREE = window.THREE;

    ensureMgr().register("dougong-3d", dispose);
    dispose();
    ensureMgr().register("dougong-3d", dispose);

    container.innerHTML = "";
    var w = Math.max(280, container.clientWidth || 540);
    var h = Math.max(300, container.clientHeight || 360);

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x161412);
    var camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
    camera.position.set(3.4, 2.3, 4.4);
    camera.lookAt(0, 0.6, 0);

    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" }); }
    catch (_err) { container.innerHTML = '<div class="epistemic-box">WebGL required for interactive Dougong joinery.</div>'; return; }
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xfff5e4, 0.65));
    var l1 = new THREE.DirectionalLight(0xffedd2, 1.05); l1.position.set(4, 7, 5); scene.add(l1);
    var l2 = new THREE.DirectionalLight(0x88b3a4, 0.4); l2.position.set(-5, 2, -4); scene.add(l2);

    var woodRed = new THREE.MeshStandardMaterial({ color: 0x8f2924, roughness: 0.58 });
    var woodGold = new THREE.MeshStandardMaterial({ color: 0xc2923c, roughness: 0.42, metalness: 0.12 });
    var woodDark = new THREE.MeshStandardMaterial({ color: 0x4b3322, roughness: 0.65 });
    var stoneCol = new THREE.MeshStandardMaterial({ color: 0xbbb4a6, roughness: 0.85 });

    var root = new THREE.Group();
    scene.add(root);

    // Column & Plinth
    var col = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.45, 1.2, 24), woodRed);
    col.position.y = -0.65;
    var plinth = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.72, 0.25, 24), stoneCol);
    plinth.position.y = -1.32;
    root.add(col, plinth);

    // 4 Explodable Tiers
    var t1 = new THREE.Group(); // Tier 1: Ludou (Cap Block)
    var ludou = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.36, 0.95), woodGold);
    var mortiseCut = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.14, 1.02), woodDark);
    mortiseCut.position.y = 0.14;
    t1.add(ludou, mortiseCut);
    t1.userData.baseY = 0.12;
    t1.userData.step = 0;

    var t2 = new THREE.Group(); // Tier 2: Huagong cross-arms
    var hg1 = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.26, 0.28), woodRed);
    var hg2 = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.26, 1.75), woodRed);
    [-0.85, 0.85].forEach(function (x) {
      var d = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.18, 0.26), woodGold);
      d.position.set(x, 0.2, 0);
      t2.add(d);
    });
    t2.add(hg1, hg2);
    t2.userData.baseY = 0.46;
    t2.userData.step = 0.55;

    var t3 = new THREE.Group(); // Tier 3: Ang cantilever beams
    var ang = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.22, 2.75), woodGold);
    ang.rotation.x = 0.16;
    var ling = new THREE.Mesh(new THREE.BoxGeometry(2.55, 0.24, 0.26), woodRed);
    t3.add(ang, ling);
    t3.userData.baseY = 0.82;
    t3.userData.step = 1.1;

    var t4 = new THREE.Group(); // Tier 4: Rafter / Eaves support (Shuatou & Tuan)
    var shua = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.22, 3.05), woodDark);
    var rafter = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.2, 1.9), woodRed);
    rafter.position.set(0, 0.24, -0.2);
    rafter.rotation.x = 0.22;
    t4.add(shua, rafter);
    t4.userData.baseY = 1.2;
    t4.userData.step = 1.65;

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

    rt = {
      renderer: renderer, rafId: rafId, ro: ro,
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
