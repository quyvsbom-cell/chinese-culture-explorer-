// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — 3D Extruded 34-Province Relief Map
// Uses Natural Boundaries GeoJSON (window.CCE_CHINA_GEO rings), 12 HSR Arcs,
// 3 Vietnam Border Crossings, 6 Camera Presets & Raycast Province Selection
// ============================================================================

(function () {
  "use strict";

  var rt = null;
  var currentPreset = "overview";
  var mode3d = false;

  var PRESETS = [
    { id: "overview", vi: "Toàn cảnh Trung Hoa", en: "All China Overview", pos: [0, 14.5, 13.5], target: [0, 0, 0.5] },
    { id: "jingjinji", vi: "Kinh–Tân–Ký", en: "Jing-Jin-Ji (North)", pos: [2.2, 6.2, 4.2], target: [2.2, 0.4, -2.5] },
    { id: "yangtze", vi: "Châu thổ Trường Giang", en: "Yangtze River Delta", pos: [4.8, 5.8, 5.2], target: [3.8, 0.3, 0.6] },
    { id: "gba", vi: "Đại Vịnh Quảng Đông–HK", en: "Greater Bay Area", pos: [1.5, 5.5, 7.8], target: [1.2, 0.3, 3.8] },
    { id: "sichuan", vi: "Tứ Xuyên – Trùng Khánh", en: "Sichuan–Chongqing", pos: [-2.0, 6.5, 6.2], target: [-1.8, 0.7, 0.9] },
    { id: "silkwest", vi: "Hà Tây – Tân Cương", en: "Hexi & Silk Road West", pos: [-6.5, 9.2, 7.5], target: [-5.8, 1.0, -1.5] }
  ];

  var ELEVATION_BY_REGION = {
    "west": 0.95,
    "southwest": 0.62,
    "north": 0.38,
    "northeast": 0.34,
    "central": 0.30,
    "south": 0.24,
    "east": 0.20
  };

  var COLOR_BY_REGION = {
    "west": 0xb88b4a,
    "southwest": 0x2f7d65,
    "north": 0x9e2a2b,
    "northeast": 0x4b6376,
    "central": 0x8a5a3c,
    "south": 0xc26938,
    "east": 0x1f6f5b
  };

  var HSR_ARCS = [
    ["prov-beijing", "prov-shanghai"],
    ["prov-beijing", "prov-guangdong"],
    ["prov-shanghai", "prov-hubei"],
    ["prov-hubei", "prov-sichuan"],
    ["prov-guangdong", "prov-guangxi"],
    ["prov-sichuan", "prov-yunnan"],
    ["prov-shaanxi", "prov-gansu"],
    ["prov-gansu", "prov-xinjiang"],
    ["prov-beijing", "prov-heilongjiang"],
    ["prov-zhejiang", "prov-fujian"],
    ["prov-qinghai", "prov-tibet"],
    ["prov-shaanxi", "prov-sichuan"]
  ];

  var VN_GATEWAYS = [
    { id: "vn-huunghi", vi: "Hữu Nghị Quan (Lạng Sơn ↔ Bằng Tường)", en: "Huu Nghi Border Gate (Lang Son <-> Pingxiang)", x: 518, y: 536 },
    { id: "vn-laocai", vi: "Lào Cai ↔ Hà Khẩu (Vân Nam)", en: "Lao Cai <-> Hekou Gateway (Yunnan)", x: 432, y: 538 },
    { id: "vn-mongcai", vi: "Móng Cái ↔ Đông Hưng (Vịnh Bắc Bộ)", en: "Mong Cai <-> Dongxing Coastal Hub", x: 542, y: 540 }
  ];

  function svgToWorld(x, y) {
    return [(Number(x) - 540) * 0.022, -(Number(y) - 360) * 0.022];
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function ensureWebGLMgr() {
    if (!window.CCE_WEBGL_MGR) {
      var reg = {};
      var act = null;
      window.CCE_WEBGL_MGR = {
        register: function (id, disposeFn) {
          if (act && act !== id && typeof reg[act] === "function") {
            try { reg[act](); } catch (_e) {}
          }
          reg[id] = disposeFn;
          act = id;
        },
        disposeAll: function (exceptId) {
          Object.keys(reg).forEach(function (k) {
            if (exceptId && k === exceptId) return;
            if (typeof reg[k] === "function") {
              try { reg[k](); } catch (_e) {}
            }
            delete reg[k];
          });
          act = exceptId && reg[exceptId] ? exceptId : null;
        },
        getActiveId: function () { return act; }
      };
    }
    return window.CCE_WEBGL_MGR;
  }

  function dispose() {
    if (!rt) return;
    if (rt.rafId) cancelAnimationFrame(rt.rafId);
    if (rt.cleanup) rt.cleanup();
    if (rt.ro) rt.ro.disconnect();
    if (rt.renderer) {
      try { rt.renderer.dispose(); } catch (_e) {}
    }
    rt = null;
  }

  function mountCanvas(selectedProvId) {
    var container = document.getElementById("cce-china-3d-canvas");
    if (!container || typeof window.THREE === "undefined") return;
    var THREE = window.THREE;
    var geo = window.CCE_CHINA_GEO || {};
    var provList = (window.CCE_REGIONS && (window.CCE_REGIONS.provincesDirectory || window.CCE_REGIONS.provincialDirectory)) || [];
    var provById = {};
    provList.forEach(function (p) { provById[p.id] = p; });

    ensureWebGLMgr().register("china-3d-map", dispose);
    dispose();
    ensureWebGLMgr().register("china-3d-map", dispose);

    container.innerHTML = "";
    var w = Math.max(300, container.clientWidth || 620);
    var h = Math.max(320, container.clientHeight || 420);

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x131416);

    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    var pDef = PRESETS.find(function (pr) { return pr.id === currentPreset; }) || PRESETS[0];
    camera.position.set(pDef.pos[0], pDef.pos[1], pDef.pos[2]);
    var lookTarget = new THREE.Vector3(pDef.target[0], pDef.target[1], pDef.target[2]);
    camera.lookAt(lookTarget);

    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    } catch (_err) {
      container.innerHTML = '<div class="epistemic-box">WebGL unavailable; please switch to 2D SVG Atlas view above.</div>';
      return;
    }
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.68));
    var dirLight = new THREE.DirectionalLight(0xfff5e4, 0.95);
    dirLight.position.set(8, 16, 10);
    scene.add(dirLight);
    var rimLight = new THREE.DirectionalLight(0x7ca398, 0.42);
    rimLight.position.set(-10, 6, -8);
    scene.add(rimLight);

    var mapGroup = new THREE.Group();
    scene.add(mapGroup);

    // Subtle ocean / base plate
    var basePlate = new THREE.Mesh(
      new THREE.PlaneGeometry(28, 22),
      new THREE.MeshStandardMaterial({ color: 0x191c20, roughness: 0.92 })
    );
    basePlate.rotation.x = -Math.PI / 2;
    basePlate.position.y = -0.02;
    mapGroup.add(basePlate);

    var provinceMeshes = [];
    Object.keys(geo).forEach(function (pid) {
      var item = geo[pid];
      var prMeta = provById[pid] || {};
      var reg = prMeta.regionId || "east";
      var depth = ELEVATION_BY_REGION[reg] || 0.28;
      if (pid === "prov-tibet") depth = 1.25;
      else if (pid === "prov-qinghai") depth = 1.05;
      var col = pid === selectedProvId ? 0xd9a84e : (COLOR_BY_REGION[reg] || 0x4b5c58);
      var rings = item.rings || [];
      rings.forEach(function (ring) {
        if (!Array.isArray(ring) || ring.length < 3) return;
        var shape = new THREE.Shape();
        ring.forEach(function (pt, idx) {
          var v = svgToWorld(pt[0], pt[1]);
          if (idx === 0) shape.moveTo(v[0], v[1]);
          else shape.lineTo(v[0], v[1]);
        });
        var geom = new THREE.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.015, bevelSegments: 1 });
        var mat = new THREE.MeshStandardMaterial({
          color: col,
          roughness: 0.55,
          metalness: 0.08,
          emissive: pid === selectedProvId ? 0x5c3e10 : 0x000000
        });
        var mesh = new THREE.Mesh(geom, mat);
        mesh.rotation.x = -Math.PI / 2;
        mesh.userData = { provinceId: pid };
        mapGroup.add(mesh);
        provinceMeshes.push(mesh);
      });
    });

    // 12 HSR Glowing Arcs
    var pulseDots = [];
    HSR_ARCS.forEach(function (pair) {
      var gA = geo[pair[0]], gB = geo[pair[1]];
      if (!gA || !gB) return;
      var wA = svgToWorld(gA.cx, gA.cy);
      var wB = svgToWorld(gB.cx, gB.cy);
      var midX = (wA[0] + wB[0]) / 2;
      var midZ = (-wA[1] - wB[1]) / 2;
      var dist = Math.hypot(wB[0] - wA[0], wB[1] - wA[1]);
      var curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(wA[0], 0.55, -wA[1]),
        new THREE.Vector3(midX, 0.8 + dist * 0.28, midZ),
        new THREE.Vector3(wB[0], 0.55, -wB[1])
      );
      var arcGeo = new THREE.TubeGeometry(curve, 24, 0.035, 6, false);
      var arcMat = new THREE.MeshBasicMaterial({ color: 0xffe08a, transparent: true, opacity: 0.78 });
      mapGroup.add(new THREE.Mesh(arcGeo, arcMat));
      var train = new THREE.Mesh(new THREE.SphereGeometry(0.085, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff5a4a }));
      mapGroup.add(train);
      pulseDots.push({ mesh: train, curve: curve, offset: Math.random() });
    });

    // 3 Vietnam Cross-Border Gateway Beacons
    VN_GATEWAYS.forEach(function (gw) {
      var vw = svgToWorld(gw.x, gw.y);
      var cone = new THREE.Mesh(
        new THREE.ConeGeometry(0.14, 0.65, 10),
        new THREE.MeshStandardMaterial({ color: 0x2ec492, emissive: 0x10553e })
      );
      cone.position.set(vw[0], 0.5, -vw[1]);
      mapGroup.add(cone);
    });

    var dragging = false;
    var downX = 0, downY = 0, prevX = 0, prevY = 0;
    var spherical = new THREE.Spherical().setFromVector3(camera.position.clone().sub(lookTarget));

    function updateCam() {
      camera.position.copy(lookTarget).add(new THREE.Vector3().setFromSpherical(spherical));
      camera.lookAt(lookTarget);
    }

    function onDown(ev) {
      dragging = true;
      downX = prevX = ev.clientX;
      downY = prevY = ev.clientY;
    }
    function onMove(ev) {
      if (!dragging) return;
      spherical.theta -= (ev.clientX - prevX) * 0.008;
      spherical.phi = Math.max(0.25, Math.min(Math.PI / 2.2, spherical.phi - (ev.clientY - prevY) * 0.008));
      prevX = ev.clientX;
      prevY = ev.clientY;
      updateCam();
    }
    function onUp(ev) {
      var moved = Math.hypot(ev.clientX - downX, ev.clientY - downY);
      dragging = false;
      if (moved < 6) {
        var rect = renderer.domElement.getBoundingClientRect();
        var ndc = new THREE.Vector2(((ev.clientX - rect.left) / rect.width) * 2 - 1, -((ev.clientY - rect.top) / rect.height) * 2 + 1);
        var rc = new THREE.Raycaster();
        rc.setFromCamera(ndc, camera);
        var hits = rc.intersectObjects(provinceMeshes, false);
        if (hits.length && hits[0].object.userData && hits[0].object.userData.provinceId) {
          var selPid = hits[0].object.userData.provinceId;
          if (typeof window.CCE_SELECT_MAP_PROVINCE === "function") {
            window.CCE_SELECT_MAP_PROVINCE(selPid);
          }
        }
      }
    }
    function onWheel(ev) {
      ev.preventDefault();
      spherical.radius = Math.max(5.5, Math.min(24, spherical.radius + ev.deltaY * 0.01));
      updateCam();
    }

    var dom = renderer.domElement;
    dom.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    dom.addEventListener("wheel", onWheel, { passive: false });

    var ro = typeof ResizeObserver === "function" ? new ResizeObserver(function () {
      var nw = Math.max(300, container.clientWidth || 620);
      var nh = Math.max(320, container.clientHeight || 420);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh, false);
    }) : null;
    if (ro) ro.observe(container);

    var clockT = 0;
    var rafId = 0;
    function tick() {
      rafId = requestAnimationFrame(tick);
      clockT += 0.004;
      for (var i = 0; i < pulseDots.length; i++) {
        var p = pulseDots[i];
        var t = (clockT + p.offset) % 1;
        p.mesh.position.copy(p.curve.getPointAt(t));
      }
      renderer.render(scene, camera);
    }
    tick();

    rt = {
      renderer: renderer,
      rafId: rafId,
      ro: ro,
      cleanup: function () {
        dom.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        dom.removeEventListener("wheel", onWheel);
      }
    };
  }

  function renderViewSwitcher(enM) {
    return (
      '<div style="display:inline-flex;gap:0.25rem;margin-left:0.35rem;" role="group" aria-label="Map View Mode">' +
      '  <button type="button" class="filter-pill ' + (!mode3d ? "active" : "") + '" data-c3d-act="mode" data-val="2d" style="padding:0.18rem 0.5rem;font-size:0.72rem;">' + (enM ? "2D SVG Atlas" : "Bản đồ 2D") + '</button>' +
      '  <button type="button" class="filter-pill ' + (mode3d ? "active" : "") + '" data-c3d-act="mode" data-val="3d" style="padding:0.18rem 0.5rem;font-size:0.72rem;">' + (enM ? "3D Relief" : "Địa hình 3D") + '</button>' +
      '</div>'
    );
  }

  function renderContainer(selectedProvId, enM) {
    return (
      '<div id="cce-china-3d-wrap" style="border:1px solid var(--hairline);background:#131416;margin-bottom:0.4rem;">' +
      '  <div style="display:flex;flex-wrap:wrap;gap:0.35rem;padding:0.45rem 0.65rem;border-bottom:1px solid rgba(255,255,255,0.12);align-items:center;justify-content:space-between;">' +
      '    <div style="display:flex;flex-wrap:wrap;gap:0.3rem;">' +
      PRESETS.map(function (pr) {
        return '<button type="button" class="filter-pill ' + (currentPreset === pr.id ? "active" : "") + '" data-c3d-act="preset" data-val="' + pr.id + '" style="font-size:0.71rem;padding:0.16rem 0.45rem;">' + esc(enM ? pr.en : pr.vi) + '</button>';
      }).join("") +
      '    </div>' +
      '    <span style="font-size:0.7rem;color:#D8D2C8;">' + (enM ? "Click province · 12 HSR arcs · 3 VN border gates" : "Nhấp chọn tỉnh · 12 tuyến cao tốc · 3 cửa khẩu Việt–Trung") + '</span>' +
      '  </div>' +
      '  <div id="cce-china-3d-canvas" data-sel-prov="' + esc(selectedProvId || "prov-beijing") + '" style="width:100%;height:420px;position:relative;"></div>' +
      '  <div style="display:flex;flex-wrap:wrap;gap:0.75rem;padding:0.4rem 0.65rem;font-size:0.71rem;color:#C8C0B4;background:#191b1e;border-top:1px solid rgba(255,255,255,0.08);">' +
      VN_GATEWAYS.map(function (g) { return '<span>▲ ' + esc(enM ? g.en : g.vi) + '</span>'; }).join("") +
      '  </div>' +
      '</div>'
    );
  }

  function bindEvents() {
    if (window._cceChina3dBound || typeof document === "undefined") return;
    window._cceChina3dBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-c3d-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-c3d-act");
      if (act === "mode") {
        mode3d = el.getAttribute("data-val") === "3d";
        if (!mode3d) dispose();
        if (window.CCE_LAZY && typeof window.CCE_LAZY.ensureBundle === "function") {
          Promise.all([
            window.CCE_LAZY.ensureBundle("3d-pack"),
            window.CCE_LAZY.ensureBundle("3d-studio-ext-pack")
          ]).then(function () {
            if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
          });
        } else if (typeof window.CCE_RENDER === "function") {
          window.CCE_RENDER();
        }
      } else if (act === "preset") {
        currentPreset = el.getAttribute("data-val") || "overview";
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      }
    });
  }

  bindEvents();

  window.CCE_CHINA_3D_MAP = {
    is3DMode: function () { return mode3d; },
    set3DMode: function (flag) { mode3d = Boolean(flag); if (!mode3d) dispose(); },
    setPreset: function (pid) { currentPreset = pid || "overview"; },
    renderViewSwitcher: renderViewSwitcher,
    renderContainer: renderContainer,
    initMountedCanvasIfAny: function () {
      var el = document.getElementById("cce-china-3d-canvas");
      if (el) mountCanvas(el.getAttribute("data-sel-prov") || "prov-beijing");
    },
    dispose: dispose
  };
})();
