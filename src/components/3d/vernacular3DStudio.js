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

  function buildGeometry(THREE, root) {
    var earth = new THREE.MeshStandardMaterial({ color: 0xc29e6c, roughness: 0.85 });
    var roof = new THREE.MeshStandardMaterial({ color: 0x3b4046, roughness: 0.65 });
    var wood = new THREE.MeshStandardMaterial({ color: 0x7d3a24, roughness: 0.6 });
    var wallWhite = new THREE.MeshStandardMaterial({ color: 0xeee9df, roughness: 0.78 });

    if (activeModel === "tulou") {
      // Outer 270 deg rammed earth cylinder wall (90 deg cutaway!)
      var outerWall = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.4, 1.65, 36, 1, true, Math.PI * 0.5, Math.PI * 1.5), earth);
      outerWall.material.side = THREE.DoubleSide;
      outerWall.position.y = 0.82;
      var tulouRoof = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 1.75, 0.45, 36, 1, true, Math.PI * 0.5, Math.PI * 1.5), roof);
      tulouRoof.material.side = THREE.DoubleSide;
      tulouRoof.position.y = 1.85;
      // Interior timber ring galleries (visible in cutaway!)
      [0.42, 0.84, 1.26].forEach(function (y) {
        var deck = new THREE.Mesh(new THREE.RingGeometry(1.42, 2.25, 32, 1, Math.PI * 0.5, Math.PI * 1.5), wood);
        deck.rotation.x = -Math.PI / 2;
        deck.rotation.z = Math.PI * 0.5;
        deck.material.side = THREE.DoubleSide;
        deck.position.y = y;
        root.add(deck);
      });
      // Central Ancestral Hall
      var hall = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.65, 0.8), earth);
      hall.position.y = 0.33;
      var hallRoof = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.4, 4), roof);
      hallRoof.rotation.y = Math.PI / 4;
      hallRoof.position.y = 0.85;
      root.add(outerWall, tulouRoof, hall, hallRoof);
    } else if (activeModel === "siheyuan") {
      var ground = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.1, 4.4), new THREE.MeshStandardMaterial({ color: 0x5c5b55, roughness: 0.9 }));
      root.add(ground);
      function makePavilion(w, h, d, x, z) {
        var g = new THREE.Group();
        var body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallWhite);
        body.position.y = h / 2;
        var cap = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.72, h * 0.65, 4), roof);
        cap.rotation.y = Math.PI / 4;
        cap.scale.set(w / Math.max(w, d), 1, d / Math.max(w, d));
        cap.position.y = h + h * 0.32;
        g.add(body, cap);
        g.position.set(x, 0.05, z);
        root.add(g);
      }
      makePavilion(2.8, 0.85, 0.9, 0, -1.5); // Zhengfang (Main North)
      makePavilion(0.75, 0.65, 1.9, -1.65, 0); // West Xiangfang
      makePavilion(0.75, 0.65, 1.9, 1.65, 0); // East Xiangfang
      makePavilion(2.6, 0.55, 0.6, 0, 1.65); // Daozuo South wing
    } else {
      var hBase = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.12, 4.2), new THREE.MeshStandardMaterial({ color: 0x61605b, roughness: 0.9 }));
      root.add(hBase);
      // Stepped Matouqiang fire-break gables on left and right
      [-1.7, 1.7].forEach(function (x) {
        [
          { z: -0.9, h: 1.8, d: 1.2 },
          { z: 0.1, h: 1.5, d: 1.0 },
          { z: 1.0, h: 1.2, d: 0.9 }
        ].forEach(function (st) {
          var wBlock = new THREE.Mesh(new THREE.BoxGeometry(0.18, st.h, st.d), wallWhite);
          wBlock.position.set(x, st.h / 2 + 0.06, st.z);
          var cap = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.09, st.d + 0.08), roof);
          cap.position.set(x, st.h + 0.08, st.z);
          root.add(wBlock, cap);
        });
      });
      var backHall = new THREE.Mesh(new THREE.BoxGeometry(3.1, 1.1, 1.0), wood);
      backHall.position.set(0, 0.6, -1.1);
      var backRoof = new THREE.Mesh(new THREE.BoxGeometry(3.25, 0.25, 1.2), roof);
      backRoof.position.set(0, 1.25, -1.1);
      // Central Tianjing water pool
      var pool = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.9), new THREE.MeshStandardMaterial({ color: 0x2f6b75, roughness: 0.25 }));
      pool.rotation.x = -Math.PI / 2;
      pool.position.set(0, 0.07, 0.45);
      root.add(backHall, backRoof, pool);
    }
  }

  function mount(containerId) {
    var container = document.getElementById(containerId);
    if (!container || typeof window.THREE === "undefined") return;
    var THREE = window.THREE;
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
    renderer.setSize(w, h, false); renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.72));
    var l = new THREE.DirectionalLight(0xfff4df, 0.98); l.position.set(5, 8, 6); scene.add(l);
    var root = new THREE.Group(); scene.add(root);
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
      renderer: renderer, rafId: rafId, ro: ro,
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
