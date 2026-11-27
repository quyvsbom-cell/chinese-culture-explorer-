// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — Brass 3D Armillary Sphere & Cosmology Disk
// Switchable Disk: Yin-Yang Taiji / Wuxing Sheng-Ke / Bagua / 60-Stem Ring
// Domain Mapping: TCM (中医) · Fengshui (风水) · Bazi (八字) · Ziwei (紫微)
// Strictly Cultural / Intellectual History — Non-Clinical & Non-Predictive
// ============================================================================

(function () {
  "use strict";

  var rt = null;
  var diskMode = "wuxing"; // "yinyang" | "wuxing" | "bagua" | "stems"
  var domainLens = "tcm";  // "tcm" | "fengshui" | "bazi" | "ziwei"

  var LENS_MAP = {
    tcm: {
      vi: "Đông y (中医 · Ngũ tạng Lục phủ)",
      en: "TCM (Zang-Fu & Meridians)",
      noteVi: "Trong Hoàng Đế Nội Kinh, Ngũ hành mô hình hóa tương tác sinh lý theo mùa: Mộc–Can, Hỏa–Tâm, Thổ–Tỳ, Kim–Phế, Thủy–Thận (chỉ mang tính khảo cứu y sử, không thay thế chẩn đoán lâm sàng).",
      noteEn: "In the Huangdi Neijing, Wuxing maps seasonal physiological correspondence: Wood-Liver, Fire-Heart, Earth-Spleen, Metal-Lung, Water-Kidney (historical cultural framework only, non-clinical)."
    },
    fengshui: {
      vi: "Phong thủy (风水 · Khí hậu & Phương vị)",
      en: "Fengshui (Orientation & Terrain)",
      noteVi: "Thiên xích đạo, Bát quái và La kinh định hướng đón gió mùa Đông Nam, tựa núi Bắc chắn gió bắc và tụ thủy điều hòa vi khí hậu kiến trúc.",
      noteEn: "Armillary meridian rings and Bagua compasses model solar exposure, prevailing monsoon ventilation, and architectural siting hydrology."
    },
    bazi: {
      vi: "Bát Tự Tứ Trụ (八字 · Thiên Can Địa Chi)",
      en: "Bazi Four Pillars (Stems-Branches)",
      noteVi: "Chu kỳ 60 Hoa Giáp (10 Can × 12 Chi) mã hóa nhịp điệu thời gian thiên văn nông lịch cổ đại; về học thuật là hệ ký hiệu nhân sinh quan truyền thống, không phải tiên tri khoa học.",
      noteEn: "The 60-year Sexagenary cycle encodes solar-lunar astronomical calendars via Wuxing; studied here as symbolic intellectual history, not empirical forecasting."
    },
    ziwei: {
      vi: "Tử Vi Đẩu Số (紫微 · 12 Cung Tinh hệ)",
      en: "Ziwei Doushu (12-Palace Taxonomy)",
      noteVi: "Hệ thống 12 cung đối xứng theo quỹ đạo Bắc Đẩu và Tử Vi Viên trên bầu trời cổ đại — một phân nhánh vũ trụ học biểu tượng thời Tống–Minh.",
      noteEn: "A Song–Ming cosmological taxonomy arranging twelve equatorial houses around Polaris and the Purple Forbidden Enclosure constellations."
    }
  };

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
    if (window.CCE_WEBGL_MGR) window.CCE_WEBGL_MGR.register("armillary-3d", dispose);
    dispose();
    if (window.CCE_WEBGL_MGR) window.CCE_WEBGL_MGR.register("armillary-3d", dispose);

    container.innerHTML = "";
    var w = Math.max(280, container.clientWidth || 540), h = Math.max(300, container.clientHeight || 360);
    var scene = new THREE.Scene(); scene.background = new THREE.Color(0x13110f);
    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, 3.6, 5.4); camera.lookAt(0, 0.25, 0);

    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" }); }
    catch (_err) { container.innerHTML = '<div class="epistemic-box">WebGL unavailable.</div>'; return; }
    if (PBR) {
      PBR.configureRenderer(THREE, renderer, { exposure: 1.15 });
      PBR.applyStudioEnvironment(THREE, renderer, scene, "warm");
    } else {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    }
    renderer.setSize(w, h, false);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block;touch-action:none;cursor:grab;";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffeacc, 0x1d1914, 0.58));
    var key = new THREE.DirectionalLight(0xffe2a8, 1.45); key.position.set(5, 8, 5); key.castShadow = true; scene.add(key);
    var rim = new THREE.DirectionalLight(0x7aa4b8, 0.45); rim.position.set(-5, 3, -5); scene.add(rim);

    var root = new THREE.Group(); scene.add(root);
    var bronzeTex = PBR ? PBR.getTexture(THREE, "bronze") : null;
    var bumpTex = PBR ? PBR.getTexture(THREE, "bronzeBump") : null;
    var jadeTex = PBR ? PBR.getTexture(THREE, "jade") : null;
    var MatMetal = THREE.MeshPhysicalMaterial || THREE.MeshStandardMaterial;
    var brass = new MatMetal({ color: 0xd9ad4e, bumpMap: bumpTex, bumpScale: 0.015, metalness: 0.88, roughness: 0.22, clearcoat: 0.22 });
    var bronze = new THREE.MeshStandardMaterial({ color: 0x6b5332, map: bronzeTex, bumpMap: bumpTex, bumpScale: 0.02, metalness: 0.72, roughness: 0.38 });

    // Stepped Museum Pedestal & Graduated Celestial Base Disk + Dragon Pillars
    if (PBR) {
      var ped = PBR.createMuseumPedestal(THREE, 2.75, 0.24);
      ped.position.y = -1.32;
      root.add(ped);
    }
    var disk = new THREE.Mesh(new THREE.CylinderGeometry(2.58, 2.74, 0.14, 56), bronze);
    disk.position.y = -1.24;
    var rimRing = new THREE.Mesh(new THREE.TorusGeometry(2.58, 0.035, 10, 64), brass);
    rimRing.rotation.x = Math.PI / 2; rimRing.position.y = -1.17;
    root.add(disk, rimRing);

    // 4 Dragon-Head Support Pillars cradling the Outer Horizon Ring
    for (var dp = 0; dp < 4; dp++) {
      var dAng = (dp * Math.PI) / 2 + Math.PI / 4;
      var colPillar = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.11, 1.56, 12), bronze);
      colPillar.position.set(Math.cos(dAng) * 1.44, -0.38, Math.sin(dAng) * 1.44);
      var colCap = new THREE.Mesh(new THREE.SphereGeometry(0.11, 12, 10), brass);
      colCap.position.set(Math.cos(dAng) * 1.44, 0.42, Math.sin(dAng) * 1.44);
      root.add(colPillar, colCap);
    }

    // 4 Brass Armillary Rings + Celestial Earth Core & Axis
    var rHorizon = new THREE.Mesh(new THREE.TorusGeometry(1.48, 0.052, 14, 56), brass); rHorizon.rotation.x = Math.PI / 2;
    var rMeridian = new THREE.Mesh(new THREE.TorusGeometry(1.40, 0.052, 14, 56), brass);
    var rEquator = new THREE.Mesh(new THREE.TorusGeometry(1.20, 0.042, 12, 56), brass); rEquator.rotation.x = 0.42;
    var rEcliptic = new THREE.Mesh(new THREE.TorusGeometry(1.04, 0.038, 12, 56), brass); rEcliptic.rotation.set(0.42, 0.5, 0.35);
    var axisRod = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 2.86, 10), brass);
    axisRod.rotation.z = 0.42;
    var earthOrb = new THREE.Mesh(
      new THREE.SphereGeometry(0.25, 24, 20),
      new MatMetal({ color: 0x358278, map: jadeTex, roughness: 0.22, metalness: 0.08, clearcoat: 0.6 })
    );

    var sphereGroup = new THREE.Group();
    sphereGroup.position.y = 0.46;
    sphereGroup.add(rHorizon, rMeridian, rEquator, rEcliptic, axisRod, earthOrb);
    root.add(sphereGroup);

    // Mode-specific Concentric Disk Elements around y = -1.12
    var diskLayer = new THREE.Group();
    diskLayer.position.y = -1.12;
    root.add(diskLayer);

    if (diskMode === "yinyang") {
      var yangHalf = new THREE.Mesh(new THREE.CylinderGeometry(1.75, 1.75, 0.09, 40, 1, false, 0, Math.PI), new MatMetal({ color: 0xf4efe6, roughness: 0.25, clearcoat: 0.5 }));
      var yinHalf = new THREE.Mesh(new THREE.CylinderGeometry(1.75, 1.75, 0.09, 40, 1, false, Math.PI, Math.PI), new MatMetal({ color: 0x1a1c20, roughness: 0.25, clearcoat: 0.5 }));
      diskLayer.add(yangHalf, yinHalf);
    } else if (diskMode === "wuxing") {
      var phases = [0x2a8f63, 0xc93838, 0xc2923c, 0xd8dce0, 0x2a6ba8];
      phases.forEach(function (hex, idx) {
        var ang = (idx / 5) * Math.PI * 2 - Math.PI / 2;
        var orb = new THREE.Mesh(new THREE.SphereGeometry(0.22, 18, 16), new MatMetal({ color: hex, roughness: 0.22, metalness: 0.15, clearcoat: 0.65 }));
        orb.position.set(Math.cos(ang) * 1.85, 0.14, Math.sin(ang) * 1.85);
        diskLayer.add(orb);
      });
    } else if (diskMode === "bagua") {
      for (var b = 0; b < 8; b++) {
        var ba = (b / 8) * Math.PI * 2;
        var bar = new THREE.Mesh(new THREE.BoxGeometry(0.60, 0.10, 0.24), new THREE.MeshStandardMaterial({ color: b % 2 === 0 ? 0x9e2a2b : 0x262523, roughness: 0.42 }));
        bar.position.set(Math.cos(ba) * 1.95, 0.06, Math.sin(ba) * 1.95);
        bar.rotation.y = -ba + Math.PI / 2;
        diskLayer.add(bar);
      }
    } else {
      for (var s = 0; s < 12; s++) {
        var sa = (s / 12) * Math.PI * 2;
        var pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.20, 14), brass);
        pillar.position.set(Math.cos(sa) * 2.15, 0.1, Math.sin(sa) * 2.15);
        diskLayer.add(pillar);
      }
    }
    root.traverse(function (o) {
      if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
    });

    var dragging = false, px = 0, py = 0, ry = 0.25, rx = 0.08;
    function onDown(ev) { dragging = true; px = ev.clientX; py = ev.clientY; }
    function onMove(ev) { if (!dragging) return; ry += (ev.clientX - px) * 0.01; rx = Math.max(-0.45, Math.min(0.65, rx + (ev.clientY - py) * 0.008)); px = ev.clientX; py = ev.clientY; }
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
      if (!dragging) ry += 0.004;
      rEquator.rotation.z += 0.006;
      rEcliptic.rotation.y -= 0.004;
      diskLayer.rotation.y -= 0.002;
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
    var lens = LENS_MAP[domainLens] || LENS_MAP.tcm;
    return (
      '<div class="grid grid-2" style="gap:1rem;align-items:stretch;">' +
      '  <div id="cce-3d-armillary-canvas" style="min-height:330px;height:360px;background:#141210;border:1px solid var(--hairline);"></div>' +
      '  <div style="display:flex;flex-direction:column;gap:0.65rem;">' +
      '    <div class="editorial-kicker">' + (enM ? "COSMOLOGY &amp; ASTRONOMY · 浑天仪与阴阳五行盘" : "Hồn Thiên Nghi &amp; Đĩa Vũ trụ Luận Đồng tâm · 阴阳五行八卦") + '</div>' +
      '    <div style="display:flex;flex-wrap:wrap;gap:0.3rem;">' +
      [
        { id: "yinyang", lbl: "1. Âm Dương (阴阳)" },
        { id: "wuxing", lbl: "2. Ngũ Hành (五行)" },
        { id: "bagua", lbl: "3. Bát Quái (八卦)" },
        { id: "stems", lbl: "4. 60 Hoa Giáp (甲子)" }
      ].map(function (d) {
        return '<button type="button" class="filter-pill ' + (diskMode === d.id ? "active" : "") + '" data-arm-act="disk" data-val="' + d.id + '">' + d.lbl + '</button>';
      }).join("") +
      '    </div>' +
      '    <div style="display:flex;flex-wrap:wrap;gap:0.3rem;">' +
      Object.keys(LENS_MAP).map(function (k) {
        return '<button type="button" class="btn btn-sm ' + (domainLens === k ? "btn-primary" : "btn-secondary") + '" data-arm-act="lens" data-val="' + k + '" style="font-size:0.73rem;">' + (enM ? LENS_MAP[k].en : LENS_MAP[k].vi) + '</button>';
      }).join("") +
      '    </div>' +
      '    <div class="epistemic-box warning" style="margin:auto 0 0;font-size:0.81rem;">' +
      '      <strong>' + (enM ? "Methodological Framing:" : "Phân định Học thuật:") + '</strong> ' + (enM ? lens.noteEn : lens.noteVi) +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
  }

  function bind() {
    if (window._cceArmBound || typeof document === "undefined") return;
    window._cceArmBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-arm-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-arm-act");
      if (act === "disk") diskMode = el.getAttribute("data-val") || "wuxing";
      else if (act === "lens") domainLens = el.getAttribute("data-val") || "tcm";
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
  }
  bind();

  window.CCE_3D_ARMILLARY = {
    renderPanel: renderPanel,
    initMountedCanvasIfAny: function () { if (document.getElementById("cce-3d-armillary-canvas")) mount("cce-3d-armillary-canvas"); },
    dispose: dispose
  };
})();
