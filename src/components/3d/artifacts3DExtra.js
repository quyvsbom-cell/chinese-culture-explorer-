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
    if (PBR) {
      PBR.configureRenderer(THREE, renderer, { exposure: 1.14 });
      PBR.applyStudioEnvironment(THREE, renderer, scene, "warm");
    } else {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    }
    renderer.setSize(w, h, false);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:pointer;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffeacc, 0x1e1a18, 0.6));
    var l = new THREE.DirectionalLight(0xffdfb0, 1.32); l.position.set(4.5, 7.5, 5.2); l.castShadow = true; scene.add(l);
    var rim = new THREE.DirectionalLight(0x7ca3b8, 0.45); rim.position.set(-4.5, 3, -4); scene.add(rim);

    var root = new THREE.Group(); scene.add(root);
    var bells = [];
    var bronzeTex = PBR ? PBR.getTexture(THREE, "bronze") : null;
    var bumpTex = PBR ? PBR.getTexture(THREE, "bronzeBump") : null;
    var woodTex = PBR ? PBR.getTexture(THREE, "wood") : null;
    var MatMetal = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;
    var bronzeMat = new MatMetal({ color: 0x6b8c79, map: bronzeTex, bumpMap: bumpTex, bumpScale: 0.02, metalness: 0.78, roughness: 0.30, clearcoat: 0.18 });
    var goldBoss = new THREE.MeshStandardMaterial({ color: 0xd6ae54, metalness: 0.88, roughness: 0.22 });
    var lacquerMat = new MatMetal({ color: 0x8f1f1a, roughness: 0.36, clearcoat: 0.45, clearcoatRoughness: 0.25 });

    if (activeExhibit === "chime-bells") {
      if (window.CCE_3D_ARCH && window.CCE_3D_ARCH.createCourtyardStage) {
        var cPed = window.CCE_3D_ARCH.createCourtyardStage(THREE, { radius: 2.45 });
        cPed.position.y = -1.16;
        root.add(cPed);
      } else if (PBR) {
        var cPed2 = PBR.createMuseumPedestal(THREE, 2.35, 0.22);
        cPed2.position.y = -1.16;
        root.add(cPed2);
      }
      // Bronze-Warrior Caryatids & Lacquer Columns + Beams supporting 8 Playable Almond-Shaped Bells
      [-1.72, 1.72].forEach(function (x) {
        var warTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.19, 0.62, 12), bronzeMat);
        warTorso.position.set(x, -0.78, 0);
        var warHead = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 10), bronzeMat);
        warHead.position.set(x, -0.38, 0);
        var col = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.11, 2.15, 16), lacquerMat);
        col.position.set(x, 0.34, 0);
        var cap = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), goldBoss);
        cap.position.set(x, 1.44, 0);
        root.add(warTorso, warHead, col, cap);
      });
      var topBeam = new THREE.Mesh(new THREE.BoxGeometry(3.9, 0.15, 0.22), lacquerMat); topBeam.position.y = 1.25;
      var midBeam = new THREE.Mesh(new THREE.BoxGeometry(3.9, 0.15, 0.22), lacquerMat); midBeam.position.y = 0.25;
      root.add(topBeam, midBeam);
      for (var i = 0; i < 8; i++) {
        var scale = 0.65 + (7 - i) * 0.08;
        var bellPts = [
          new THREE.Vector2(0.05 * scale, 0.26 * scale),
          new THREE.Vector2(0.10 * scale, 0.22 * scale),
          new THREE.Vector2(0.14 * scale, 0.0),
          new THREE.Vector2(0.18 * scale, -0.24 * scale)
        ];
        var bell = new THREE.Mesh(new THREE.LatheGeometry(bellPts, 24), bronzeMat.clone());
        bell.scale.z = 0.74;
        bell.position.set(-1.35 + i * 0.38, i < 4 ? 0.92 : -0.1, 0);
        bell.userData = { bellIdx: i, swing: 0 };
        var hook = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.24, 8), goldBoss);
        hook.position.set(-1.35 + i * 0.38, (i < 4 ? 1.15 : 0.13), 0);
        root.add(bell, hook);
        bells.push(bell);
      }
    } else if (activeExhibit === "zhenghe-ship") {
      if (window.CCE_3D_ARCH && window.CCE_3D_ARCH.createCourtyardStage) {
        var sPed = window.CCE_3D_ARCH.createCourtyardStage(THREE, { radius: 2.55 });
        sPed.position.y = -0.82;
        root.add(sPed);
      } else if (PBR) {
        var sPed2 = PBR.createMuseumPedestal(THREE, 2.45, 0.22);
        sPed2.position.y = -0.82;
        root.add(sPed2);
      }
      var woodMat = new THREE.MeshStandardMaterial({ color: 0x6b4328, map: woodTex, roughness: 0.60 });
      var hullPts = [
        new THREE.Vector2(0.05, -2.05),
        new THREE.Vector2(0.58, -1.65),
        new THREE.Vector2(0.76, -0.55),
        new THREE.Vector2(0.78, 0.65),
        new THREE.Vector2(0.45, 1.75),
        new THREE.Vector2(0.06, 2.25)
      ];
      var hull = new THREE.Mesh(new THREE.LatheGeometry(hullPts, 16), woodMat);
      hull.rotation.z = -Math.PI / 2;
      hull.scale.set(0.55, 1.0, 0.92);
      hull.position.y = 0.1;
      root.add(hull);
      if (window.CCE_3D_ARCH && window.CCE_3D_ARCH.createPalaceHall) {
        var sPav = window.CCE_3D_ARCH.createPalaceHall(THREE, { w: 0.78, d: 0.72, baseH: 0.16, bodyH: 0.32, roofH: 0.26, baysX: 3, baysZ: 2, tileKind: "slateTile", marbleBase: false });
        sPav.rotation.y = Math.PI / 2;
        sPav.position.set(-1.38, 0.36, 0);
        root.add(sPav);
      }
      var sailMat = new THREE.MeshStandardMaterial({ color: 0xa4332a, side: THREE.DoubleSide, roughness: 0.72 });
      [-1.15, -0.55, 0.12, 0.85, 1.48].forEach(function (x, mIdx) {
        var mH = 1.65 + (mIdx === 2 ? 0.50 : (mIdx === 1 || mIdx === 3 ? 0.25 : 0));
        var mast = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.052, mH, 10), lacquerMat);
        mast.position.set(x, 0.38 + mH * 0.5, 0);
        var sail = new THREE.Mesh(new THREE.PlaneGeometry(0.68, mH * 0.62), sailMat);
        sail.position.set(x, 0.56 + mH * 0.5, 0.05);
        sail.rotation.y = 0.32;
        root.add(mast, sail);
      });
    } else {
      if (window.CCE_3D_ARCH && window.CCE_3D_ARCH.createCourtyardStage) {
        var tPed = window.CCE_3D_ARCH.createCourtyardStage(THREE, { radius: 1.75 });
        tPed.position.y = -1.24;
        root.add(tPed);
      } else if (PBR) {
        var tPed2 = PBR.createMuseumPedestal(THREE, 1.6, 0.22);
        tPed2.position.y = -1.24;
        root.add(tPed2);
      }
      var clay = new THREE.MeshStandardMaterial({ color: 0x9b8e7e, map: PBR ? PBR.getTexture(THREE, "rammedEarth") : bronzeTex, roughness: 0.80 });
      var armor = new THREE.MeshStandardMaterial({ color: 0x524940, bumpMap: bumpTex, bumpScale: 0.025, roughness: 0.55 });
      var plinth = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.22, 1.42), clay); plinth.position.y = -1.08;
      var legL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.17, 1.0, 12), clay); legL.position.set(-0.22, -0.5, 0);
      var legR = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.17, 1.0, 12), clay); legR.position.set(0.22, -0.5, 0);
      var torsoPts = [
        new THREE.Vector2(0.46, -0.58),
        new THREE.Vector2(0.42, -0.05),
        new THREE.Vector2(0.48, 0.36),
        new THREE.Vector2(0.24, 0.58)
      ];
      var torso = new THREE.Mesh(new THREE.LatheGeometry(torsoPts, 24), armor); torso.position.y = 0.48;
      [-0.48, 0.48].forEach(function (sx) {
        var arm = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 0.82, 10), armor);
        arm.rotation.z = sx > 0 ? 0.28 : -0.28;
        arm.position.set(sx, 0.44, 0);
        root.add(arm);
      });
      var head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 20, 18), clay); head.position.y = 1.28;
      var cap = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.16, 0.28), lacquerMat); cap.position.set(0, 1.5, -0.02);
      var tassel = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.22, 10), goldBoss); tassel.position.set(0, 1.58, -0.02);
      root.add(plinth, legL, legR, torso, head, cap, tassel);
    }
    root.traverse(function (o) {
      if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
    });

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
      scene: scene, renderer: renderer, rafId: rafId, ro: ro,
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
