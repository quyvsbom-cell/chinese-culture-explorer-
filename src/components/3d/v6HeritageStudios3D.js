// ============================================================================
// CHINESE CULTURE EXPLORER V6.0 — 8 Additional WebGL Heritage Studios (#11–#18)
// Shares single WebGL context cleanly via CCE_WEBGL_MGR (Zero GPU Leak)
// ============================================================================

(function () {
  "use strict";

  var rt = null;
  var activeSubId = "kiln"; // kiln | mogao | changan | baochuan | bianzhong | xuanpress | guqin | railgauge
  var kilnTempC = 1280;
  var snowStorm = false;

  var SUB_STUDIOS = [
    { id: "kiln", titleVi: "#11 Lò Rồng Cảnh Đức Trấn", titleEn: "#11 Jingdezhen Dragon Kiln", noteVi: "Lò dốc sườn đồi phân tầng 900–1350°C nung Thanh Hoa & Hồng Lang Diêu." },
    { id: "mogao", titleVi: "#12 Hang 45 Đôn Hoàng", titleEn: "#12 Mogao Cave 45", noteVi: "Khám thờ vòm chữ Túc Thịnh Đường & sắc Lapis Lazuli Tơ lụa." },
    { id: "changan", titleVi: "#13 Trường An 108 Phường", titleEn: "#13 Chang'an 108 Wards", noteVi: "Đại lộ Chu Tước 150m, Tây Thị – Đông Thị & Hoàng Thành Đường." },
    { id: "baochuan", titleVi: "#14 Bảo Thuyền Trịnh Hòa", titleEn: "#14 Zheng He Bulkheads", noteVi: "Thân tàu Phúc Thuyền với vách ngăn kín nước ('Thủy Mật Cách Thương')." },
    { id: "bianzhong", titleVi: "#15 Biên Chung Song Âm", titleEn: "#15 Marquis Yi Dual-Tone Bells", noteVi: "Thử âm WebAudio Chính Cổ Âm (tâm) & Trắc Cổ Âm (mép chuông)." },
    { id: "xuanpress", titleVi: "#16 Giấy Tuyên Chỉ & Khắc Gỗ", titleEn: "#16 Xuan Paper & Woodblock", noteVi: "Bể nhúng liềm tre, ép trục vít gỗ & bản in Đậu Bản Thủy Ấn." },
    { id: "guqin", titleVi: "#17 Cổ Cầm 7 Dây 13 Huy", titleEn: "#17 Guqin 7-String Acoustics", noteVi: "Thử âm Tán âm & Bội âm Phiếm âm tại Huy số 4, 5, 7 (tỷ lệ 1/4, 1/3, 1/2)." },
    { id: "railgauge", titleVi: "#18 Đổi Khổ Ray Małaszewicze", titleEn: "#18 Rail Gauge-Break 1520↔1435", noteVi: "Cẩu giàn GS2 chuyển cont giữa khổ ray 1.520mm (CIS) ↔ 1.435mm (EU)." }
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
    if (rt.renderer) try { rt.renderer.dispose(); } catch (_e) {}
    rt = null;
  }

  function playSynthTone(freqHz, harmonic) {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      var ctx = new AC();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = harmonic ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freqHz, ctx.currentTime);
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.22, ctx.currentTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0008, ctx.currentTime + (harmonic ? 1.4 : 1.05));
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.5);
    } catch (_e) {}
  }

  function buildSubScene(THREE, root) {
    var gGold = new THREE.MeshStandardMaterial({ color: 0xc2923c, metalness: 0.35, roughness: 0.38 });
    var gRed = new THREE.MeshStandardMaterial({ color: 0x8f2924, roughness: 0.55 });
    var gJade = new THREE.MeshStandardMaterial({ color: 0x1f6e5c, roughness: 0.45 });
    var gDark = new THREE.MeshStandardMaterial({ color: 0x3b2c20, roughness: 0.7 });
    var gBrick = new THREE.MeshStandardMaterial({ color: 0x8d5b3e, roughness: 0.85 });
    var gSteel = new THREE.MeshStandardMaterial({ color: 0x7a8590, metalness: 0.5, roughness: 0.35 });

    var animObj = {};

    if (activeSubId === "kiln") {
      var hill = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.28, 2.2), gDark);
      hill.rotation.z = 0.24;
      hill.position.set(0, -0.35, 0);
      root.add(hill);
      for (var c = 0; c < 6; c++) {
        var dome = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.5, 0.72, 16, 1, false, 0, Math.PI), gBrick);
        dome.rotation.y = Math.PI / 2;
        dome.rotation.z = 0.24;
        dome.position.set(-2.0 + c * 0.82, -0.05 + c * 0.19, 0);
        root.add(dome);
      }
      var glazeHue = kilnTempC < 1050 ? 0xa35a3a : (kilnTempC < 1220 ? 0x6ea690 : (kilnTempC < 1300 ? 0x2a669c : 0x9b1f29));
      var gVase = new THREE.MeshStandardMaterial({ color: glazeHue, metalness: 0.22, roughness: 0.18 });
      var vase = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.22, 0.95, 24), gVase);
      vase.position.set(2.35, 0.2, 0.9);
      var rim = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.05, 10, 24), gVase);
      rim.rotation.x = Math.PI / 2;
      rim.position.set(2.35, 0.67, 0.9);
      root.add(vase, rim);
    } else if (activeSubId === "mogao") {
      var gCave = new THREE.MeshStandardMaterial({ color: 0x735b43, roughness: 0.9 });
      var gLapis = new THREE.MeshStandardMaterial({ color: 0x1d4f91, roughness: 0.45 });
      var backWall = new THREE.Mesh(new THREE.BoxGeometry(3.8, 2.6, 0.25), gCave);
      backWall.position.set(0, 0.4, -1.2);
      var altar = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.45, 1.1), gRed);
      altar.position.set(0, -0.65, -0.45);
      var buddha = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.45, 1.35, 20), gGold);
      buddha.position.set(0, 0.25, -0.45);
      var halo = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.05, 12, 28), gLapis);
      halo.position.set(0, 0.72, -0.78);
      var bodhiL = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.95, 16), gJade);
      bodhiL.position.set(-0.78, 0.05, -0.42);
      var bodhiR = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.95, 16), gLapis);
      bodhiR.position.set(0.78, 0.05, -0.42);
      root.add(backWall, altar, buddha, halo, bodhiL, bodhiR);
    } else if (activeSubId === "changan") {
      var baseCity = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.14, 4.4), gDark);
      baseCity.position.y = -0.8;
      var avenue = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.16, 4.4), gRed);
      avenue.position.y = -0.78;
      var palace = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.48, 0.9), gGold);
      palace.position.set(0, -0.48, -1.55);
      var westMkt = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.24, 0.75), gJade);
      westMkt.position.set(-1.35, -0.6, -0.15);
      var eastMkt = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.24, 0.75), gJade);
      eastMkt.position.set(1.35, -0.6, -0.15);
      root.add(baseCity, avenue, palace, westMkt, eastMkt);
      for (var wx = -2; wx <= 2; wx++) {
        for (var wz = 0; wz <= 2; wz++) {
          if (wx === 0) continue;
          var ward = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.1, 0.42), gBrick);
          ward.position.set(wx * 0.95, -0.68, wz * 0.65);
          root.add(ward);
        }
      }
    } else if (activeSubId === "baochuan") {
      var hullMat = new THREE.MeshStandardMaterial({ color: 0x7c4f2b, transparent: true, opacity: 0.45, roughness: 0.65 });
      var hull = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.85, 1.35), hullMat);
      hull.position.set(0, -0.45, 0);
      root.add(hull);
      for (var b = -3; b <= 3; b++) {
        var bulkhead = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.78, 1.25), gJade);
        bulkhead.position.set(b * 0.56, -0.45, 0);
        root.add(bulkhead);
      }
      [-1.3, 0, 1.3].forEach(function (mx) {
        var mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 2.2, 12), gGold);
        mast.position.set(mx, 0.75, 0);
        var sail = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.25, 0.95), gRed);
        sail.position.set(mx, 0.9, 0);
        root.add(mast, sail);
      });
    } else if (activeSubId === "bianzhong") {
      [-2.1, 2.1].forEach(function (px) {
        var post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 2.6, 12), gRed);
        post.position.set(px, 0.1, 0);
        root.add(post);
      });
      [0.95, 0.15, -0.6].forEach(function (by, rowIdx) {
        var beam = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.1, 0.12), gDark);
        beam.position.set(0, by + 0.35, 0);
        root.add(beam);
        var nBells = 5 + rowIdx;
        for (var k = 0; k < nBells; k++) {
          var bell = new THREE.Mesh(new THREE.CylinderGeometry(0.11 + rowIdx * 0.03, 0.16 + rowIdx * 0.04, 0.36 + rowIdx * 0.07, 16), gGold);
          bell.scale.z = 0.72; // Almond shape enabling dual tones!
          bell.position.set(-1.5 + (k * 3.0) / Math.max(1, nBells - 1), by, 0);
          root.add(bell);
        }
      });
    } else if (activeSubId === "xuanpress") {
      var vat = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.65, 1.5), gSteel);
      vat.position.set(-1.2, -0.45, 0);
      var paper = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.04, 1.15), new THREE.MeshStandardMaterial({ color: 0xfbf9f4 }));
      paper.position.set(-1.2, -0.02, 0);
      var pressBase = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.55, 1.4), gDark);
      pressBase.position.set(1.4, -0.5, 0);
      var screw = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.7, 12), gGold);
      screw.position.set(1.4, 0.45, 0);
      var handle = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.08, 0.12), gRed);
      handle.position.set(1.4, 1.1, 0);
      root.add(vat, paper, pressBase, screw, handle);
      animObj.handle = handle;
    } else if (activeSubId === "guqin") {
      var board = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.18, 0.95), gDark);
      board.position.set(0, -0.25, 0);
      var bridge = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.92), gGold);
      bridge.position.set(-2.1, -0.1, 0);
      root.add(board, bridge);
      for (var s = 0; s < 7; s++) {
        var zPos = -0.33 + s * 0.11;
        var stMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 4.4, 8), gGold);
        stMesh.rotation.z = Math.PI / 2;
        stMesh.position.set(0, -0.12, zPos);
        root.add(stMesh);
      }
      for (var h = 1; h <= 13; h++) {
        var xHui = -2.0 + h * 0.29;
        var hui = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.02, 10), new THREE.MeshStandardMaterial({ color: 0xfbf9f4 }));
        hui.position.set(xHui, -0.15, 0.39);
        root.add(hui);
      }
    } else if (activeSubId === "railgauge") {
      var ground = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.12, 3.2), gDark);
      ground.position.y = -0.85;
      root.add(ground);
      [-0.78, 0.78].forEach(function (tz, tIdx) {
        var trackW = tIdx === 0 ? 0.65 : 0.56; // 1520mm broad vs 1435mm EU standard
        var r1 = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.06, 0.06), gSteel);
        var r2 = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.06, 0.06), gSteel);
        r1.position.set(0, -0.76, tz - trackW / 2);
        r2.position.set(0, -0.76, tz + trackW / 2);
        var wagon = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.16, trackW + 0.15), tIdx === 0 ? gBrick : gJade);
        wagon.position.set(-0.6, -0.62, tz);
        root.add(r1, r2, wagon);
      });
      var craneFrame = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.2, 2.8), gRed);
      craneFrame.position.set(0, 0.35, 0);
      var craneBridge = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.16, 2.9), gGold);
      craneBridge.position.set(0, 1.45, 0);
      var cont = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.58, 0.58), gJade);
      cont.position.set(-0.2, 0.45, 0);
      root.add(craneFrame, craneBridge, cont);
      animObj.container = cont;
      if (snowStorm) {
        var snowMat = new THREE.MeshStandardMaterial({ color: 0xf4f7fa, roughness: 0.95 });
        var snowCap = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.04, 3.2), snowMat);
        snowCap.position.y = -0.77;
        root.add(snowCap);
      }
    }
    return animObj;
  }

  function mount(containerId) {
    var container = document.getElementById(containerId);
    if (!container || typeof window.THREE === "undefined") return;
    var THREE = window.THREE;

    ensureMgr().register("v6-heritage-3d", dispose);
    dispose();
    ensureMgr().register("v6-heritage-3d", dispose);

    container.innerHTML = "";
    var w = Math.max(280, container.clientWidth || 540);
    var h = Math.max(300, container.clientHeight || 360);

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x161412);
    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(3.8, 2.7, 4.9);
    camera.lookAt(0, 0, 0);

    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" }); }
    catch (_e) { container.innerHTML = '<div class="epistemic-box">WebGL required for V6 3D Heritage Studio.</div>'; return; }
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xfff5e4, 0.68));
    var l1 = new THREE.DirectionalLight(0xffedd2, 1.05); l1.position.set(4, 7, 5); scene.add(l1);
    var l2 = new THREE.DirectionalLight(0x88b3a4, 0.42); l2.position.set(-5, 2, -4); scene.add(l2);

    var root = new THREE.Group();
    scene.add(root);
    var animObj = buildSubScene(THREE, root);

    var drag = false, px = 0, py = 0, ry = 0.25, rx = 0.18;
    var el = renderer.domElement;
    var onDown = function (ev) { drag = true; px = ev.clientX; py = ev.clientY; el.style.cursor = "grabbing"; };
    var onMove = function (ev) {
      if (!drag) return;
      ry += (ev.clientX - px) * 0.01;
      rx = Math.max(-0.5, Math.min(0.65, rx + (ev.clientY - py) * 0.008));
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
      if (!drag) ry += 0.0028;
      root.rotation.set(rx, ry, 0);
      if (animObj.container) {
        var speed = snowStorm ? 0.45 : 1.15;
        animObj.container.position.z = Math.sin(dt * speed) * 0.78;
        animObj.container.position.y = 0.25 + Math.cos(dt * speed * 2) * 0.28;
      }
      if (animObj.handle) animObj.handle.rotation.y = dt * 0.9;
      renderer.render(scene, camera);
    }

    var ro = new ResizeObserver(function () {
      if (!rt) return;
      var nw = Math.max(280, container.clientWidth || 540);
      var nh = Math.max(300, container.clientHeight || 360);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh, false);
    });
    ro.observe(container);

    rt = {
      rafId: 0,
      renderer: renderer,
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
    var extraControls = "";
    if (activeSubId === "kiln") {
      extraControls = '<div style="display:flex;align-items:center;gap:0.55rem;flex-wrap:wrap;"><label style="font-size:0.78rem;font-weight:700;">Nhiệt độ Lò Rồng: ' + kilnTempC + '°C</label><input type="range" min="920" max="1350" step="20" value="' + kilnTempC + '" data-v63d-act="temp" /></div>';
    } else if (activeSubId === "bianzhong") {
      extraControls = '<div style="display:flex;gap:0.45rem;flex-wrap:wrap;"><button type="button" class="btn btn-primary btn-sm" data-v63d-act="tone" data-freq="392">Chính Cổ Âm (Sol4 · 392Hz)</button><button type="button" class="btn btn-secondary btn-sm" data-v63d-act="tone" data-freq="493.88">Trắc Cổ Âm (Si4 · 494Hz)</button></div>';
    } else if (activeSubId === "guqin") {
      extraControls = '<div style="display:flex;gap:0.45rem;flex-wrap:wrap;"><button type="button" class="btn btn-primary btn-sm" data-v63d-act="tone" data-freq="220">Tán Âm Dây Mở (La3)</button><button type="button" class="btn btn-secondary btn-sm" data-v63d-act="harmonic" data-freq="440">Huy 7 Bội Âm 1/2 (La4)</button><button type="button" class="btn btn-secondary btn-sm" data-v63d-act="harmonic" data-freq="659.25">Huy 5 Bội Âm 1/3 (Mi5)</button></div>';
    } else if (activeSubId === "railgauge") {
      extraControls = '<button type="button" class="btn ' + (snowStorm ? "btn-primary" : "btn-secondary") + ' btn-sm" data-v63d-act="snow">' + (snowStorm ? "Bão tuyết Mùa đông: BẬT (Ùn tắc JIT)" : "Bật Mô phỏng Bão tuyết Biên giới") + '</button>';
    }

    return (
      '<div class="card" style="padding:1rem;background:var(--bg-paper);">' +
      '  <div class="filter-bar" style="margin-bottom:0.75rem;">' +
      SUB_STUDIOS.map(function (s) {
        return '<button type="button" class="filter-pill ' + (s.id === activeSubId ? "active" : "") + '" data-v63d-act="pick-sub" data-val="' + s.id + '" style="font-size:0.74rem;">' + (enM ? s.titleEn : s.titleVi) + '</button>';
      }).join("") +
      '  </div>' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;">' +
      '    <div><strong>' + (enM ? cur.titleEn : cur.titleVi) + '</strong><div style="font-size:0.8rem;color:var(--text-secondary);">' + cur.noteVi + '</div></div>' +
      extraControls +
      '  </div>' +
      '  <div id="cce-3d-v6-heritage-canvas" style="width:100%;height:360px;border-radius:var(--radius);overflow:hidden;border:1px solid var(--hairline);"></div>' +
      '</div>'
    );
  }

  function initMountedCanvasIfAny() {
    if (document.getElementById("cce-3d-v6-heritage-canvas")) {
      mount("cce-3d-v6-heritage-canvas");
    }
  }

  function bind() {
    if (window._cceV63dBound || typeof document === "undefined") return;
    window._cceV63dBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-v63d-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-v63d-act");
      if (act === "pick-sub") {
        activeSubId = el.getAttribute("data-val") || "kiln";
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "snow") {
        snowStorm = !snowStorm;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "tone" || act === "harmonic") {
        var f = Number(el.getAttribute("data-freq") || "440");
        playSynthTone(f, act === "harmonic");
      }
    });
    document.addEventListener("input", function (e) {
      var el = e.target;
      if (el && el.getAttribute && el.getAttribute("data-v63d-act") === "temp") {
        kilnTempC = Number(el.value || "1280");
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      }
    });
  }
  bind();

  window.CCE_3D_V6_HERITAGE = {
    renderPanel: renderPanel,
    initMountedCanvasIfAny: initMountedCanvasIfAny,
    setSubStudio: function (id) { activeSubId = id || "kiln"; },
    dispose: dispose
  };
})();
