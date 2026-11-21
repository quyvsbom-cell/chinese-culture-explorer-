// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — Extra Museum 3D Studio
// 1. Playable Zenghouyi Bronze Chime Bells (曾侯乙编钟 - click bells -> WebAudio)
// 2. Zheng He Treasure Ship (郑和宝船 - 9-Masted Ming Fleet Cutaway)
// 3. Qin Terracotta Senior Officer (兵马俑将军俑)
// ============================================================================

(function () {
  "use strict";

  var rt = null;
  var activeExhibit = "chime-bells"; // "chime-bells" | "zhenghe-ship" | "terracotta-officer"
  var audioCtx = null;

  var BELL_FREQS = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];

  function strikeBell(idx) {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!audioCtx) audioCtx = new AC();
    if (audioCtx.state === "suspended") audioCtx.resume().catch(function () {});
    var now = audioCtx.currentTime;
    var f = BELL_FREQS[idx % BELL_FREQS.length];
    [1, 2.41].forEach(function (mult, i) {
      var osc = audioCtx.createOscillator();
      var g = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f * mult, now);
      g.gain.setValueAtTime(0.001, now);
      g.gain.linearRampToValueAtTime(i === 0 ? 0.25 : 0.1, now + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0005, now + (i === 0 ? 2.4 : 1.1));
      osc.connect(g); g.connect(audioCtx.destination);
      osc.start(now); osc.stop(now + 2.5);
    });
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
    if (window.CCE_WEBGL_MGR) window.CCE_WEBGL_MGR.register("artifacts-extra-3d", dispose);
    dispose();
    if (window.CCE_WEBGL_MGR) window.CCE_WEBGL_MGR.register("artifacts-extra-3d", dispose);

    container.innerHTML = "";
    var w = Math.max(280, container.clientWidth || 540), h = Math.max(300, container.clientHeight || 360);
    var scene = new THREE.Scene(); scene.background = new THREE.Color(0x161414);
    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, 1.9, 5.8); camera.lookAt(0, 0.3, 0);

    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" }); }
    catch (_err) { container.innerHTML = '<div class="epistemic-box">WebGL unavailable.</div>'; return; }
    renderer.setSize(w, h, false); renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:pointer;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.65));
    var l = new THREE.DirectionalLight(0xffdfb0, 1.1); l.position.set(4, 7, 5); scene.add(l);

    var root = new THREE.Group(); scene.add(root);
    var bells = [];
    var bronzeMat = new THREE.MeshStandardMaterial({ color: 0x628070, metalness: 0.6, roughness: 0.35 });
    var lacquerMat = new THREE.MeshStandardMaterial({ color: 0x8a1e1a, roughness: 0.5 });

    if (activeExhibit === "chime-bells") {
      // L-shaped lacquer beam rack + 8 playable bells
      [-1.7, 1.7].forEach(function (x) {
        var col = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 2.4, 12), lacquerMat);
        col.position.set(x, 0.2, 0);
        root.add(col);
      });
      var topBeam = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.14, 0.2), lacquerMat); topBeam.position.y = 1.25;
      var midBeam = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.14, 0.2), lacquerMat); midBeam.position.y = 0.25;
      root.add(topBeam, midBeam);
      for (var i = 0; i < 8; i++) {
        var scale = 0.65 + (7 - i) * 0.08;
        var bell = new THREE.Mesh(new THREE.CylinderGeometry(0.11 * scale, 0.16 * scale, 0.45 * scale, 16), bronzeMat.clone());
        bell.position.set(-1.35 + i * 0.38, i < 4 ? 0.92 : -0.1, 0);
        bell.userData = { bellIdx: i, swing: 0 };
        root.add(bell);
        bells.push(bell);
      }
    } else if (activeExhibit === "zhenghe-ship") {
      var hull = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.55, 1.25), new THREE.MeshStandardMaterial({ color: 0x6b4328, roughness: 0.72 }));
      hull.position.y = 0.1;
      var bow = new THREE.Mesh(new THREE.ConeGeometry(0.75, 1.1, 4), new THREE.MeshStandardMaterial({ color: 0x5c361f }));
      bow.rotation.z = -Math.PI / 2; bow.position.set(2.3, 0.2, 0);
      root.add(hull, bow);
      var sailMat = new THREE.MeshStandardMaterial({ color: 0xa4332a, side: THREE.DoubleSide, roughness: 0.8 });
      [-1.3, -0.45, 0.45, 1.3].forEach(function (x, mIdx) {
        var mast = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.7 + (mIdx === 1 ? 0.4 : 0), 8), lacquerMat);
        mast.position.set(x, 1.15, 0);
        var sail = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 1.15), sailMat);
        sail.position.set(x, 1.35, 0.06);
        sail.rotation.y = 0.35;
        root.add(mast, sail);
      });
    } else {
      var clay = new THREE.MeshStandardMaterial({ color: 0x9b8e7e, roughness: 0.85 });
      var armor = new THREE.MeshStandardMaterial({ color: 0x5e544a, roughness: 0.65 });
      var plinth = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.2, 1.4), clay); plinth.position.y = -1.1;
      var legs = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, 1.0, 14), clay); legs.position.y = -0.5;
      var torso = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.36, 1.15, 16), armor); torso.position.y = 0.48;
      var head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), clay); head.position.y = 1.28;
      var cap = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.16, 0.28), armor); cap.position.set(0, 1.5, -0.02);
      root.add(plinth, legs, torso, head, cap);
    }

    var dragging = false, downX = 0, downY = 0, px = 0, py = 0, ry = 0.25, rx = 0.1;
    function onDown(ev) { dragging = true; downX = px = ev.clientX; downY = py = ev.clientY; }
    function onMove(ev) { if (!dragging) return; ry += (ev.clientX - px) * 0.012; rx = Math.max(-0.5, Math.min(0.65, rx + (ev.clientY - py) * 0.008)); px = ev.clientX; py = ev.clientY; }
    function onUp(ev) {
      var moved = Math.hypot(ev.clientX - downX, ev.clientY - downY);
      dragging = false;
      if (moved < 6 && bells.length) {
        var rect = renderer.domElement.getBoundingClientRect();
        var ndc = new THREE.Vector2(((ev.clientX - rect.left) / rect.width) * 2 - 1, -((ev.clientY - rect.top) / rect.height) * 2 + 1);
        var rc = new THREE.Raycaster(); rc.setFromCamera(ndc, camera);
        var hits = rc.intersectObjects(bells, false);
        if (hits.length) {
          var b = hits[0].object;
          b.userData.swing = 1.0;
          strikeBell(b.userData.bellIdx);
        }
      }
    }
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
      if (!dragging) ry += 0.003;
      bells.forEach(function (b) {
        if (b.userData.swing > 0.01) {
          b.rotation.x = Math.sin(performance.now() * 0.025) * 0.28 * b.userData.swing;
          b.userData.swing *= 0.96;
        } else b.rotation.x = 0;
      });
      root.rotation.y = ry; root.rotation.x = rx;
      renderer.render(scene, camera);
    }
    tick();

    rt = {
      renderer: renderer, rafId: rafId, ro: ro,
      cleanup: function () {
        dom.removeEventListener("pointerdown", onDown); window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp); dom.removeEventListener("wheel", onWheel);
      }
    };
  }

  function renderPanel(enM) {
    var items = [
      { id: "chime-bells", lblVi: "Biên Chung Tăng Hầu Ất (Bấm chuông để gõ)", lblEn: "Playable Zenghouyi Chime Bells" },
      { id: "zhenghe-ship", lblVi: "Bảo Thuyền Trịnh Hòa", lblEn: "Zheng He Treasure Ship" },
      { id: "terracotta-officer", lblVi: "Tướng Quân Binh Mã Dũng", lblEn: "Terracotta Senior Officer" }
    ];
    return (
      '<div class="grid grid-2" style="gap:1rem;align-items:stretch;">' +
      '  <div id="cce-3d-extra-canvas" style="min-height:330px;height:360px;background:#161414;border:1px solid var(--hairline);"></div>' +
      '  <div style="display:flex;flex-direction:column;gap:0.7rem;">' +
      '    <div class="editorial-kicker">' + (enM ? "INTERACTIVE ACOUSTIC &amp; MARITIME RELICS · 馆藏互动重器" : "Bảo vật Âm nhạc &amp; Hàng hải Cổ 3D · 曾侯乙编钟与郑和宝船") + '</div>' +
      '    <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">' +
      items.map(function (it) {
        return '<button type="button" class="filter-pill ' + (activeExhibit === it.id ? "active" : "") + '" data-x3d-act="pick" data-val="' + it.id + '">' + (enM ? it.lblEn : it.lblVi) + '</button>';
      }).join("") +
      '    </div>' +
      (activeExhibit === "chime-bells"
        ? '<div><button type="button" class="btn btn-secondary btn-sm" data-x3d-act="chime-chord">' + (enM ? "Play Bronze Chime Motif" : "Gõ Chuỗi Ngũ cung Chuông đồng") + '</button></div>'
        : "") +
      '    <div class="flashcard-layer" style="font-size:0.82rem;margin-top:auto;">' +
      (activeExhibit === "chime-bells"
        ? (enM ? "Click any of the 8 hanging bells directly on the 3D canvas (or press the button above) to trigger Web Audio dual-tone bronze resonance." : "Nhấp trực tiếp vào từng quả chuông đồng trên khung 3D (hoặc bấm nút) để nghe âm sắc vang vọng hai thanh âm song hành (Nhất chung song âm).")
        : activeExhibit === "zhenghe-ship"
          ? (enM ? "Nine-masted Ming ocean flagship engineering featuring balanced sternpost rudder and watertight bulkheads." : "Thiết kế thuyền buồm vách ngăn kín nước đa khoang thời Minh (1405–1433) giúp đội tàu vượt Ấn Độ Dương.")
          : (enM ? "Life-sized Qin necropolis officer figure from Pit 2 displaying articulated lamellar armor and double-phoenix cap." : "Tượng tướng quân đội quân đất nung Tần Thủy Hoàng (Hố số 2) với giáp phiến khâu tay và mũ Hạt Quan.")) +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
  }

  function bind() {
    if (window._cceX3dBound || typeof document === "undefined") return;
    window._cceX3dBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-x3d-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-x3d-act");
      if (act === "pick") {
        activeExhibit = el.getAttribute("data-val") || "chime-bells";
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "chime-chord") {
        [0, 1, 2, 3, 4].forEach(function (idx, k) {
          setTimeout(function () { strikeBell(idx); }, k * 280);
        });
      }
    });
  }
  bind();

  window.CCE_3D_ARTIFACTS_EXTRA = {
    renderPanel: renderPanel,
    initMountedCanvasIfAny: function () { if (document.getElementById("cce-3d-extra-canvas")) mount("cce-3d-extra-canvas"); },
    dispose: dispose
  };
})();
