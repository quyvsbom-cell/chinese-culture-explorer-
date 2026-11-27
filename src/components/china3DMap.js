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
  var autoRotate = false;
  var topDownMode = false;
  var fullscreenMap = false;
  var dirQuery = "";
  var dirRegion = "all";
  var focusedProvId = "prov-beijing";

  var FLOATING_HUB_PINS = [
    { id: "prov-beijing", kind: "hub", vi: "Bắc Kinh · Cố Cung", en: "Beijing · Forbidden City" },
    { id: "prov-shaanxi", kind: "hub", vi: "Tây An · Trường An", en: "Xi'an · Chang'an" },
    { id: "prov-shanghai", kind: "hub", vi: "Thượng Hải · Giang Nam", en: "Shanghai · YRD" },
    { id: "prov-sichuan", kind: "hub", vi: "Thành Đô · Ba Thục", en: "Chengdu · Sichuan" },
    { id: "prov-guangdong", kind: "hub", vi: "Quảng Châu · Đại Vịnh", en: "Guangzhou · GBA" },
    { id: "prov-yunnan", kind: "hub", vi: "Côn Minh · Trà Mã", en: "Kunming · Tea-Horse" }
  ];

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
    if (window.CCE_3D_PBR && rt.scene) {
      try { window.CCE_3D_PBR.disposeScene(rt.scene, rt.renderer); } catch (_e) {}
    }
    if (rt.renderer) {
      try {
        if (rt.renderer.forceContextLoss) rt.renderer.forceContextLoss();
        rt.renderer.dispose();
      } catch (_e) {}
    }
    rt = null;
  }

  function mountCanvas(selectedProvId) {
    var container = document.getElementById("cce-china-3d-canvas");
    if (!container || typeof window.THREE === "undefined") return;
    var THREE = window.THREE;
    var PBR = window.CCE_3D_PBR;
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
    scene.background = new THREE.Color(0x11151b);
    scene.fog = new THREE.FogExp2(0x11151b, 0.018);

    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    var pDef = PRESETS.find(function (pr) { return pr.id === currentPreset; }) || PRESETS[0];
    camera.position.set(pDef.pos[0], topDownMode ? 19.5 : pDef.pos[1], topDownMode ? 1.8 : pDef.pos[2]);
    var lookTarget = new THREE.Vector3(pDef.target[0], pDef.target[1], pDef.target[2]);
    var camTargetLerp = null;
    var lookTargetLerp = null;
    camera.lookAt(lookTarget);
    if (selectedProvId) focusedProvId = selectedProvId;

    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    } catch (_err) {
      container.innerHTML = '<div class="epistemic-box">WebGL unavailable; please switch to 2D SVG Atlas view above.</div>';
      return;
    }
    if (PBR) {
      PBR.configureRenderer(THREE, renderer, { exposure: 1.1 });
      PBR.applyStudioEnvironment(THREE, renderer, scene, "daylight");
    } else {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    }
    renderer.setSize(w, h, false);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xdce8ff, 0x1b2028, 0.62));
    var dirLight = new THREE.DirectionalLight(0xfff5e4, 1.18);
    dirLight.position.set(9, 18, 11);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.left = -14; dirLight.shadow.camera.right = 14;
    dirLight.shadow.camera.top = 12; dirLight.shadow.camera.bottom = -12;
    scene.add(dirLight);
    var rimLight = new THREE.DirectionalLight(0x7ca398, 0.52);
    rimLight.position.set(-10, 7, -9);
    scene.add(rimLight);

    var mapGroup = new THREE.Group();
    scene.add(mapGroup);

    // Textured dark basalt relief base plate & faint coordinate grid
    var basePlate = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 24),
      new THREE.MeshStandardMaterial({
        color: 0x161b22,
        map: PBR ? PBR.getTexture(THREE, "granite") : null,
        roughness: 0.85,
        metalness: 0.12
      })
    );
    basePlate.rotation.x = -Math.PI / 2;
    basePlate.position.y = -0.02;
    basePlate.receiveShadow = true;
    mapGroup.add(basePlate);

    var grid = new THREE.GridHelper(28, 28, 0x2c3642, 0x1d242e);
    grid.position.y = -0.005;
    mapGroup.add(grid);

    var provinceMeshes = [];
    var MatProv = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;
    Object.keys(geo).forEach(function (pid) {
      var item = geo[pid];
      var prMeta = provById[pid] || {};
      var reg = prMeta.regionId || "east";
      var depth = ELEVATION_BY_REGION[reg] || 0.28;
      if (pid === "prov-tibet") depth = 1.25;
      else if (pid === "prov-qinghai") depth = 1.05;
      var col = pid === selectedProvId ? 0xe6b554 : (COLOR_BY_REGION[reg] || 0x4b5c58);
      var rings = item.rings || [];
      rings.forEach(function (ring) {
        if (!Array.isArray(ring) || ring.length < 3) return;
        var shape = new THREE.Shape();
        ring.forEach(function (pt, idx) {
          var v = svgToWorld(pt[0], pt[1]);
          if (idx === 0) shape.moveTo(v[0], v[1]);
          else shape.lineTo(v[0], v[1]);
        });
        var geom = new THREE.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: true, bevelThickness: 0.028, bevelSize: 0.02, bevelSegments: 2 });
        var mat = new MatProv({
          color: col,
          roughness: pid === selectedProvId ? 0.34 : 0.52,
          metalness: pid === selectedProvId ? 0.22 : 0.10,
          clearcoat: pid === selectedProvId ? 0.45 : 0.12,
          emissive: pid === selectedProvId ? 0x5c3e10 : 0x000000
        });
        var mesh = new THREE.Mesh(geom, mat);
        mesh.rotation.x = -Math.PI / 2;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData = { provinceId: pid };
        mapGroup.add(mesh);
        provinceMeshes.push(mesh);
      });
    });

    // Selected Province Orbiting Halo Marker
    var activePid = selectedProvId || focusedProvId || "prov-beijing";
    var haloGroup = new THREE.Group();
    if (activePid && geo[activePid]) {
      var sp = geo[activePid];
      var sw = svgToWorld(sp.cx, sp.cy);
      var haloMat = new THREE.MeshStandardMaterial({ color: 0xffd269, emissive: 0xb87314, roughness: 0.25, metalness: 0.7 });
      var halo = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.04, 10, 32), haloMat);
      halo.rotation.x = Math.PI / 2;
      halo.position.set(0, 1.38, 0);
      var beacon = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1.05, 8), new THREE.MeshBasicMaterial({ color: 0xffd269, transparent: true, opacity: 0.65 }));
      beacon.position.set(0, 0.88, 0);
      haloGroup.position.set(sw[0], 0, -sw[1]);
      haloGroup.add(halo, beacon);
    }
    mapGroup.add(haloGroup);

    // Yellow River (Huanghe) & Yangtze River (Changjiang) Flowing Relief Tubes
    var riverDefs = [
      {
        color: 0xd9a13b,
        pts: [[280, 390], [340, 365], [385, 310], [450, 260], [500, 325], [565, 330], [640, 295]]
      },
      {
        color: 0x38a3b8,
        pts: [[260, 405], [335, 455], [400, 445], [475, 420], [560, 425], [635, 400], [695, 392]]
      }
    ];
    riverDefs.forEach(function (rv) {
      var vecs = rv.pts.map(function (pt) {
        var wp = svgToWorld(pt[0], pt[1]);
        return new THREE.Vector3(wp[0], 0.42, -wp[1]);
      });
      var rvCurve = new THREE.CatmullRomCurve3(vecs);
      var rvGeo = new THREE.TubeGeometry(rvCurve, 44, 0.042, 8, false);
      var rvMat = new THREE.MeshStandardMaterial({ color: rv.color, emissive: rv.color, emissiveIntensity: 0.28, roughness: 0.2, metalness: 0.35 });
      mapGroup.add(new THREE.Mesh(rvGeo, rvMat));
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
    function onDblClick() {
      currentPreset = "overview";
      topDownMode = false;
      var ov = PRESETS[0];
      camTargetLerp = new THREE.Vector3(ov.pos[0], ov.pos[1], ov.pos[2]);
      lookTargetLerp = new THREE.Vector3(ov.target[0], ov.target[1], ov.target[2]);
    }
    dom.addEventListener("pointerdown", onDown);
    dom.addEventListener("dblclick", onDblClick);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    dom.addEventListener("wheel", onWheel, { passive: false });

    // Build 9 Floating 3D HTML Callout Pins (6 Key Hubs + 3 Vietnam Gateways)
    var isEnPins = window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en";
    var pinsOverlay = document.getElementById("cce-china-3d-pins");
    var pinNodes = [];
    if (pinsOverlay) {
      pinsOverlay.innerHTML = "";
      FLOATING_HUB_PINS.forEach(function (hp) {
        var g = geo[hp.id];
        if (!g) return;
        var wp = svgToWorld(g.cx, g.cy);
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cce-map3d-pin" + (hp.id === activePid ? " is-active" : "");
        btn.setAttribute("data-c3d-act", "focus-prov");
        btn.setAttribute("data-val", hp.id);
        btn.textContent = isEnPins ? hp.en : hp.vi;
        pinsOverlay.appendChild(btn);
        pinNodes.push({ el: btn, world: new THREE.Vector3(wp[0], 1.15, -wp[1]) });
      });
      VN_GATEWAYS.forEach(function (gw) {
        var wp = svgToWorld(gw.x, gw.y);
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cce-map3d-pin is-gateway";
        btn.setAttribute("data-c3d-act", "focus-gw");
        btn.setAttribute("data-val", gw.id);
        btn.textContent = (isEnPins ? gw.en : gw.vi).split("(")[0].trim();
        pinsOverlay.appendChild(btn);
        pinNodes.push({ el: btn, world: new THREE.Vector3(wp[0], 0.95, -wp[1]) });
      });
    }

    function updateMapPins() {
      if (!pinsOverlay || !pinNodes.length) return;
      var cw = container.clientWidth || 620;
      var ch = container.clientHeight || 420;
      var proj = new THREE.Vector3();
      for (var pi = 0; pi < pinNodes.length; pi++) {
        var pn = pinNodes[pi];
        proj.copy(pn.world).project(camera);
        if (proj.z > 1 || proj.x < -1.05 || proj.x > 1.05 || proj.y < -1.05 || proj.y > 1.05) {
          pn.el.style.display = "none";
          continue;
        }
        pn.el.style.display = "inline-flex";
        pn.el.style.left = ((proj.x * 0.5 + 0.5) * cw) + "px";
        pn.el.style.top = ((-proj.y * 0.5 + 0.5) * ch) + "px";
      }
    }

    var ro = typeof ResizeObserver === "function" ? new ResizeObserver(function () {
      var nw = Math.max(300, container.clientWidth || 620);
      var nh = Math.max(320, container.clientHeight || 420);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh, false);
      updateMapPins();
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
      if (camTargetLerp && lookTargetLerp) {
        camera.position.lerp(camTargetLerp, 0.12);
        lookTarget.lerp(lookTargetLerp, 0.12);
        camera.lookAt(lookTarget);
        spherical.setFromVector3(camera.position.clone().sub(lookTarget));
        if (camera.position.distanceTo(camTargetLerp) < 0.06) {
          camTargetLerp = null;
          lookTargetLerp = null;
        }
      } else if (autoRotate && !dragging) {
        spherical.theta += 0.0022;
        updateCam();
      }
      updateMapPins();
      renderer.render(scene, camera);
    }
    tick();

    rt = {
      scene: scene,
      camera: camera,
      lookTarget: lookTarget,
      spherical: spherical,
      haloGroup: haloGroup,
      geo: geo,
      provinceMeshes: provinceMeshes,
      flyToCoord: function (wx, wz, pid) {
        if (pid) focusedProvId = pid;
        if (pid && geo[pid]) {
          var wp = svgToWorld(geo[pid].cx, geo[pid].cy);
          haloGroup.position.set(wp[0], 0, -wp[1]);
        }
        lookTargetLerp = new THREE.Vector3(wx, 0.4, wz);
        camTargetLerp = new THREE.Vector3(wx + 0.6, topDownMode ? 12.5 : 5.6, wz + 5.2);
        provinceMeshes.forEach(function (pm) {
          if (pm.material && pm.material.emissive) {
            pm.material.emissive.setHex(pm.userData && pm.userData.provinceId === pid ? 0x6e4a12 : 0x000000);
          }
        });
        if (pinsOverlay) {
          pinsOverlay.querySelectorAll(".cce-map3d-pin[data-val]").forEach(function (b) {
            b.classList.toggle("is-active", b.getAttribute("data-val") === pid);
          });
        }
      },
      resetCamera: function () {
        var ov = PRESETS[0];
        lookTargetLerp = new THREE.Vector3(ov.target[0], ov.target[1], ov.target[2]);
        camTargetLerp = new THREE.Vector3(ov.pos[0], topDownMode ? 19.5 : ov.pos[1], topDownMode ? 1.8 : ov.pos[2]);
      },
      setTopDown: function (td) {
        topDownMode = Boolean(td);
        var curLook = lookTarget.clone();
        lookTargetLerp = curLook;
        camTargetLerp = topDownMode
          ? new THREE.Vector3(curLook.x, 19.5, curLook.z + 1.8)
          : new THREE.Vector3(curLook.x, 13.5, curLook.z + 12.5);
      },
      renderer: renderer,
      rafId: rafId,
      ro: ro,
      cleanup: function () {
        dom.removeEventListener("pointerdown", onDown);
        dom.removeEventListener("dblclick", onDblClick);
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

  function getFilteredSidebarProvs() {
    var provList = (window.CCE_REGIONS && (window.CCE_REGIONS.provincesDirectory || window.CCE_REGIONS.provincialDirectory)) || [];
    var q = String(dirQuery || "").trim().toLowerCase();
    return provList.filter(function (pr) {
      if (dirRegion !== "all") {
        var reg = String(pr.regionId || "");
        if (dirRegion === "east" && reg !== "east") return false;
        if (dirRegion === "north" && reg !== "north" && reg !== "northeast") return false;
        if (dirRegion === "central" && reg !== "central") return false;
        if (dirRegion === "south" && reg !== "south") return false;
        if (dirRegion === "southwest" && reg !== "southwest") return false;
        if (dirRegion === "west" && reg !== "west") return false;
      }
      if (!q) return true;
      var hay = [pr.nameVi, pr.nameEn, pr.nameZh, pr.capital, pr.highlights, pr.cuisine].join(" ").toLowerCase();
      return hay.indexOf(q) >= 0;
    });
  }

  function renderSidebarRowsHtml(enM) {
    var rows = getFilteredSidebarProvs();
    if (!rows.length) {
      return '<div style="padding:1rem;font-size:0.78rem;color:#B8B2A6;">' + (enM ? "No matching provinces." : "Không tìm thấy tỉnh/thành phù hợp.") + '</div>';
    }
    return rows.map(function (pr) {
      var isSel = pr.id === focusedProvId;
      return (
        '<div class="cce-map3d-row' + (isSel ? " is-active" : "") + '" data-c3d-act="focus-prov" data-val="' + esc(pr.id) + '">' +
        '  <div class="cce-map3d-row-main">' +
        '    <div class="cce-map3d-row-title">' + esc(enM ? (pr.nameEn || pr.nameVi) : pr.nameVi) + ' <span class="hanzi">' + esc(pr.nameZh || "") + '</span></div>' +
        '    <div class="cce-map3d-row-sub">' + esc(pr.capital || "") + ' · ' + esc(String(pr.highlights || "").slice(0, 62)) + '</div>' +
        '  </div>' +
        '  <button type="button" class="cce-map3d-dossier-btn" data-action="open-province-detail" data-id="' + esc(pr.id) + '">' + (enM ? "Dossier ↗" : "Hồ sơ ↗") + '</button>' +
        '</div>'
      );
    }).join("");
  }

  function updateSidebarDom() {
    var enM = Boolean(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en");
    var listEl = document.getElementById("cce-map3d-sidebar-list");
    var countEl = document.getElementById("cce-map3d-sidebar-count");
    var total = ((window.CCE_REGIONS && (window.CCE_REGIONS.provincesDirectory || window.CCE_REGIONS.provincialDirectory)) || []).length || 34;
    var filtered = getFilteredSidebarProvs();
    if (countEl) countEl.textContent = filtered.length + " / " + total;
    if (listEl) listEl.innerHTML = renderSidebarRowsHtml(enM);
  }

  function renderContainer(selectedProvId, enM) {
    if (selectedProvId) focusedProvId = selectedProvId;
    var total = ((window.CCE_REGIONS && (window.CCE_REGIONS.provincesDirectory || window.CCE_REGIONS.provincialDirectory)) || []).length || 34;
    var filtered = getFilteredSidebarProvs();
    var regTabs = [
      { id: "all", vi: "Tất cả", en: "All", dot: "#E5A93C" },
      { id: "north", vi: "Hoa Bắc", en: "North", dot: "#B83B35" },
      { id: "east", vi: "Hoa Đông", en: "East", dot: "#268C72" },
      { id: "central", vi: "Hoa Trung", en: "Central", dot: "#C87D4B" },
      { id: "south", vi: "Hoa Nam", en: "South", dot: "#D68240" },
      { id: "southwest", vi: "Tây Nam", en: "SW", dot: "#3A9B7E" },
      { id: "west", vi: "Tây Bắc", en: "West", dot: "#C29B56" }
    ];
    return (
      '<div id="cce-china-3d-wrap" class="cce-map3d-shell' + (fullscreenMap ? " is-fullscreen" : "") + '">' +
      '  <div class="cce-map3d-topbar">' +
      '    <div class="cce-map3d-presets">' +
      PRESETS.map(function (pr) {
        return '<button type="button" class="filter-pill ' + (currentPreset === pr.id ? "active" : "") + '" data-c3d-act="preset" data-val="' + pr.id + '" style="font-size:0.71rem;padding:0.16rem 0.5rem;">' + esc(enM ? pr.en : pr.vi) + '</button>';
      }).join("") +
      '    </div>' +
      '    <div class="cce-map3d-tools">' +
      '      <button type="button" class="btn btn-secondary btn-sm" data-c3d-act="topdown">' + (topDownMode ? (enM ? "3D Perspective" : "Góc phối cảnh") : (enM ? "Top-Down Plan" : "Nhìn từ trên")) + '</button>' +
      '      <button type="button" class="btn ' + (autoRotate ? "btn-primary" : "btn-secondary") + ' btn-sm" data-c3d-act="autorot">' + (enM ? "Orbit: " : "Tự xoay: ") + (autoRotate ? "ON" : "OFF") + '</button>' +
      '      <button type="button" class="btn btn-secondary btn-sm" data-c3d-act="reset-cam">' + (enM ? "Reset" : "Đặt lại") + '</button>' +
      '      <button type="button" class="btn btn-gold btn-sm" data-c3d-act="fullscreen">⤢ ' + (fullscreenMap ? (enM ? "Exit" : "Thu gọn") : (enM ? "Expand 3D Map" : "Phóng to Bản đồ 3D")) + '</button>' +
      '    </div>' +
      '  </div>' +
      '  <div class="cce-map3d-split">' +
      '    <div class="cce-map3d-viewport">' +
      '      <div id="cce-china-3d-canvas" data-sel-prov="' + esc(focusedProvId || "prov-beijing") + '" style="width:100%;height:' + (fullscreenMap ? "calc(100vh - 140px)" : "440px") + ';position:relative;"></div>' +
      '      <div id="cce-china-3d-pins" class="cce-map3d-pins" aria-hidden="false"></div>' +
      '      <div class="cce-map3d-legend">' +
      '        <span>' + (enM ? "Drag to orbit · Scroll to zoom · Double-click to reset · Click 3D pins or sidebar rows" : "Kéo xoay 360° · Lăn chuột thu phóng · Nhấp đúp đặt lại góc · Bấm ghim 3D hoặc tỉnh bên phải") + '</span>' +
      '      </div>' +
      '    </div>' +
      '    <aside class="cce-map3d-sidebar" aria-label="' + (enM ? "Synchronized 34-Province Directory" : "Danh mục 34 Tỉnh Thành đồng bộ 3D") + '">' +
      '      <div class="cce-map3d-sidebar-head">' +
      '        <strong>' + (enM ? "34 Provinces & Hubs" : "Danh mục 34 Tỉnh Thành") + '</strong>' +
      '        <span id="cce-map3d-sidebar-count" class="badge badge-gold">' + filtered.length + ' / ' + total + '</span>' +
      '      </div>' +
      '      <input type="text" class="cce-map3d-search" data-c3d-act="search" value="' + esc(dirQuery) + '" placeholder="' + (enM ? "Search province, capital, UNESCO heritage..." : "Tìm tỉnh thành, thủ phủ, di sản...") + '" />' +
      '      <div class="cce-map3d-regpills">' +
      regTabs.map(function (rg) {
        return '<button type="button" class="cce-map3d-regpill' + (dirRegion === rg.id ? " is-active" : "") + '" data-c3d-act="region" data-val="' + rg.id + '"><span style="width:7px;height:7px;border-radius:99px;background:' + rg.dot + ';display:inline-block;"></span> ' + esc(enM ? rg.en : rg.vi) + '</button>';
      }).join("") +
      '      </div>' +
      '      <div id="cce-map3d-sidebar-list" class="cce-map3d-sidebar-list">' +
      renderSidebarRowsHtml(enM) +
      '      </div>' +
      '    </aside>' +
      '  </div>' +
      '  <div class="cce-map3d-gateways">' +
      VN_GATEWAYS.map(function (g) { return '<button type="button" class="cce-map3d-gw-chip" data-c3d-act="focus-gw" data-val="' + esc(g.id) + '">▲ ' + esc(enM ? g.en : g.vi) + '</button>'; }).join("") +
      '  </div>' +
      '</div>'
    );
  }

  function focusProvince(provId) {
    if (!provId) return;
    focusedProvId = provId;
    var geo = window.CCE_CHINA_GEO || {};
    if (rt && rt.flyToCoord && geo[provId]) {
      var wp = svgToWorld(geo[provId].cx, geo[provId].cy);
      rt.flyToCoord(wp[0], -wp[1], provId);
      updateSidebarDom();
    }
    if (typeof window.CCE_SELECT_MAP_PROVINCE === "function") {
      try { window.CCE_SELECT_MAP_PROVINCE(provId, true); } catch (_e) {}
    }
  }

  function bindEvents() {
    if (window._cceChina3dBound || typeof document === "undefined") return;
    window._cceChina3dBound = true;
    document.addEventListener("input", function (e) {
      var el = e.target;
      if (el && el.getAttribute && el.getAttribute("data-c3d-act") === "search") {
        dirQuery = el.value || "";
        updateSidebarDom();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && fullscreenMap) {
        fullscreenMap = false;
        var wrap = document.getElementById("cce-china-3d-wrap");
        if (wrap) wrap.classList.remove("is-fullscreen");
        if (rt && rt.renderer && rt.camera) {
          setTimeout(function () {
            var c = document.getElementById("cce-china-3d-canvas");
            if (c && rt) {
              var nw = Math.max(300, c.clientWidth || 620), nh = Math.max(320, c.clientHeight || 420);
              rt.camera.aspect = nw / nh; rt.camera.updateProjectionMatrix(); rt.renderer.setSize(nw, nh, false);
            }
          }, 50);
        }
      }
    });
    document.addEventListener("click", function (e) {
      var dossierBtn = e.target && e.target.closest ? e.target.closest("[data-action='open-province-detail']") : null;
      if (dossierBtn) return;
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
      } else if (act === "topdown") {
        if (rt && rt.setTopDown) rt.setTopDown(!topDownMode);
        el.textContent = topDownMode ? "Góc phối cảnh" : "Nhìn từ trên";
      } else if (act === "autorot") {
        autoRotate = !autoRotate;
        el.className = "btn " + (autoRotate ? "btn-primary" : "btn-secondary") + " btn-sm";
        el.textContent = "Tự xoay: " + (autoRotate ? "ON" : "OFF");
      } else if (act === "reset-cam") {
        topDownMode = false;
        if (rt && rt.resetCamera) rt.resetCamera();
      } else if (act === "fullscreen") {
        fullscreenMap = !fullscreenMap;
        var wrapEl = document.getElementById("cce-china-3d-wrap");
        if (wrapEl) wrapEl.classList.toggle("is-fullscreen", fullscreenMap);
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "region") {
        dirRegion = el.getAttribute("data-val") || "all";
        var parentBar = el.parentElement;
        if (parentBar) {
          parentBar.querySelectorAll(".cce-map3d-regpill").forEach(function (b) {
            b.classList.toggle("is-active", b.getAttribute("data-val") === dirRegion);
          });
        }
        updateSidebarDom();
      } else if (act === "focus-prov") {
        focusProvince(el.getAttribute("data-val"));
      } else if (act === "focus-gw") {
        var gwId = el.getAttribute("data-val");
        var gw = VN_GATEWAYS.find(function (g) { return g.id === gwId; });
        if (gw && rt && rt.flyToCoord) {
          var gwp = svgToWorld(gw.x, gw.y);
          rt.flyToCoord(gwp[0], -gwp[1], "prov-guangxi");
        }
      }
    });
  }

  bindEvents();

  window.CCE_CHINA_3D_MAP = {
    is3DMode: function () { return mode3d; },
    set3DMode: function (flag) { mode3d = Boolean(flag); if (!mode3d) dispose(); },
    setPreset: function (pid) { currentPreset = pid || "overview"; },
    focusProvince: focusProvince,
    renderViewSwitcher: renderViewSwitcher,
    renderContainer: renderContainer,
    initMountedCanvasIfAny: function () {
      var el = document.getElementById("cce-china-3d-canvas");
      if (el) mountCanvas(el.getAttribute("data-sel-prov") || focusedProvId || "prov-beijing");
    },
    dispose: dispose
  };
})();
