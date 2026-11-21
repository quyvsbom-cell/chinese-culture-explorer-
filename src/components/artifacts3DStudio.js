// ============================================================================
// SINGLE ACTIVE WEBGL CONTEXT MANAGER & 3D ARTIFACT / TIANTAN STUDIO (WAVE 3.3)
// Ensures 0 WebGL context leaks when navigating across 3D scenes & pages.
// ============================================================================

(function () {
  "use strict";

  // Global Single Active WebGL Context Manager
  var registry = {};
  var activeId = null;

  function registerWebGL(id, disposeFn) {
    if (activeId && activeId !== id && typeof registry[activeId] === "function") {
      try {
        registry[activeId]();
      } catch (_e) {}
    }
    registry[id] = disposeFn;
    activeId = id;
  }

  function disposeAllWebGL(exceptId) {
    Object.keys(registry).forEach(function (k) {
      if (exceptId && k === exceptId) return;
      if (typeof registry[k] === "function") {
        try {
          registry[k]();
        } catch (_e) {}
      }
      delete registry[k];
    });
    activeId = exceptId && registry[exceptId] ? exceptId : null;
  }

  window.CCE_WEBGL_MGR = {
    register: registerWebGL,
    disposeAll: disposeAllWebGL,
    getActiveId: function () { return activeId; }
  };

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  var ARTIFACTS_3D_LIST = [
    {
      id: "houmuwu-ding",
      titleVi: "Hậu Mẫu Mậu Đỉnh (Thương hậu kỳ)",
      titleEn: "Houmuwu Bronze Ding Cauldron",
      titleZh: "后母戊鼎",
      eraVi: "~1250–1046 TCN · Ân Khư, Hà Nam",
      eraEn: "Late Shang (~1250–1046 BCE) · Yinxu",
      noteVi: "Đỉnh đồng nặng 832,84 kg đúc bằng khuôn đất sét ghép khối — đỉnh cao lễ khí vương quyền nhà Thương.",
      noteEn: "832.84 kg piece-mold cast Shang ritual vessel embodying royal ancestral legitimacy."
    },
    {
      id: "liangzhu-yucong",
      titleVi: "Ngọc Tông Lương Chử (Thiên Viên Địa Phương)",
      titleEn: "Liangzhu Carved Jade Cong",
      titleZh: "良渚神徽玉琮",
      eraVi: "~3300–2300 TCN · Chiết Giang",
      eraEn: "Liangzhu Culture (~3300–2300 BCE)",
      noteVi: "Ống trụ rỗng tròn trong lòng khối vuông ngoài, chạm khắc thần huy siêu vi với đường nét mảnh 0,1 mm.",
      noteEn: "Cylindrical bore within squared exterior planes expressing 'Round Heaven, Square Earth'."
    },
    {
      id: "ngoc-lu-bronze-drum",
      titleVi: "Trống Đồng Ngọc Lũ (Đối thoại Đông Sơn – Điền)",
      titleEn: "Ngoc Lu Bronze Drum (Dong Son Heritage)",
      titleZh: "玉缕铜鼓",
      eraVi: "~500–200 TCN · Bảo tàng LSQG Việt Nam",
      eraEn: "Dong Son (~500–200 BCE) · Vietnam",
      noteVi: "H1 Loại trống đồng kinh điển Đông Á với mặt trời 14 tia, chim Lạc và vành thuyền chiến đúc liền khối.",
      noteEn: "Masterpiece of Bronze Age metallurgy uniting a 14-ray solar star with flying Lac bird bands."
    },
    {
      id: "longquan-celadon-vase",
      titleVi: "Bình Phượng Nhĩ Thanh Từ Long Tuyền (Nam Tống)",
      titleEn: "Longquan Celadon Phoenix-Ear Vase",
      titleZh: "龙泉青瓷凤耳瓶",
      eraVi: "Nam Tống (1127–1279) · Chiết Giang",
      eraEn: "Southern Song (1127–1279) · Zhejiang",
      noteVi: "Men mai tử thanh ngọc dày nhiều lớp đạt sắc 'tựa ngọc Bích', tai phượng uốn đối xứng thanh thoát.",
      noteEn: "Thick multi-layered plum-green glaze attaining translucent jade sheen."
    }
  ];

  var LIGHTING_MODES = [
    { id: "daylight", labelVi: "Ánh sáng Ban ngày", labelEn: "Daylight Gallery" },
    { id: "warm-spot", labelVi: "Đèn Bảo tàng Ấm", labelEn: "Warm Museum Spot" },
    { id: "relief", labelVi: "Chiếu Xiên Nổi Hoa Văn", labelEn: "Grazing Relief Light" }
  ];

  var currentArtifact3D = "houmuwu-ding";
  var currentLighting = "daylight";
  var tiantanOpen = false;
  var activeRt = null;

  function disposeLocalRt() {
    if (!activeRt) return;
    try {
      if (activeRt.rafId) cancelAnimationFrame(activeRt.rafId);
      if (activeRt.ro) activeRt.ro.disconnect();
      if (activeRt.cleanupEvents) activeRt.cleanupEvents();
      if (activeRt.renderer) {
        if (activeRt.renderer.forceContextLoss) activeRt.renderer.forceContextLoss();
        activeRt.renderer.dispose();
      }
    } catch (_e) {}
    activeRt = null;
  }

  function buildProceduralRelicGroup(THREE, relicId) {
    var group = new THREE.Group();
    if (relicId === "liangzhu-yucong") {
      var jadeMat = new THREE.MeshStandardMaterial({ color: 0x8ea885, roughness: 0.28, metalness: 0.08 });
      var veinMat = new THREE.MeshStandardMaterial({ color: 0x455c44, roughness: 0.45, metalness: 0.05 });
      var outerBox = new THREE.Mesh(new THREE.BoxGeometry(2.1, 2.5, 2.1), jadeMat);
      var innerCyl = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 2.9, 32), veinMat);
      group.add(outerBox, innerCyl);
      for (var t = -0.8; t <= 0.85; t += 0.55) {
        var band = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.14, 2.18), veinMat);
        band.position.y = t;
        group.add(band);
      }
      return group;
    }
    if (relicId === "ngoc-lu-bronze-drum") {
      var bronzePatina = new THREE.MeshStandardMaterial({ color: 0x5c6853, roughness: 0.42, metalness: 0.65 });
      var goldRelief = new THREE.MeshStandardMaterial({ color: 0x9b8248, roughness: 0.35, metalness: 0.72 });
      var tympanum = new THREE.Mesh(new THREE.CylinderGeometry(1.75, 1.72, 0.14, 48), goldRelief);
      tympanum.position.y = 0.88;
      var mantle = new THREE.Mesh(new THREE.CylinderGeometry(1.62, 1.24, 0.78, 48, 1, true), bronzePatina);
      mantle.material.side = THREE.DoubleSide;
      mantle.position.y = 0.44;
      var waist = new THREE.Mesh(new THREE.CylinderGeometry(1.24, 1.26, 0.62, 48, 1, true), bronzePatina);
      waist.material.side = THREE.DoubleSide;
      waist.position.y = -0.24;
      var foot = new THREE.Mesh(new THREE.CylinderGeometry(1.26, 1.56, 0.48, 48, 1, true), bronzePatina);
      foot.material.side = THREE.DoubleSide;
      foot.position.y = -0.78;
      var ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.04, 10, 48), goldRelief);
      ring1.rotation.x = Math.PI / 2;
      ring1.position.y = 0.96;
      var starCenter = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.05, 14), goldRelief);
      starCenter.position.y = 0.96;
      group.add(tympanum, mantle, waist, foot, ring1, starCenter);
      return group;
    }
    if (relicId === "longquan-celadon-vase") {
      var glazeMat = new THREE.MeshStandardMaterial({ color: 0x7da497, roughness: 0.16, metalness: 0.12 });
      var footRing = new THREE.MeshStandardMaterial({ color: 0x8b6750, roughness: 0.72, metalness: 0.05 });
      var body = new THREE.Mesh(new THREE.CylinderGeometry(0.82, 0.74, 1.55, 40), glazeMat);
      body.position.y = -0.25;
      var shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.84, 36, 20, 0, Math.PI * 2, 0, Math.PI / 2), glazeMat);
      shoulder.scale.y = 0.45;
      shoulder.position.y = 0.52;
      var neck = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.36, 1.05, 32), glazeMat);
      neck.position.y = 1.1;
      var lip = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.36, 0.16, 36), glazeMat);
      lip.position.y = 1.65;
      var earGeo = new THREE.BoxGeometry(0.16, 0.62, 0.18);
      var earL = new THREE.Mesh(earGeo, glazeMat); earL.position.set(-0.46, 1.18, 0);
      var earR = new THREE.Mesh(earGeo, glazeMat); earR.position.set(0.46, 1.18, 0);
      var baseFoot = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.7, 0.1, 36), footRing);
      baseFoot.position.y = -1.06;
      group.add(body, shoulder, neck, lip, earL, earR, baseFoot);
      return group;
    }
    // Default: houmuwu-ding
    var shangBronze = new THREE.MeshStandardMaterial({ color: 0x4b5c4f, roughness: 0.48, metalness: 0.62 });
    var darkCast = new THREE.MeshStandardMaterial({ color: 0x2f3b32, roughness: 0.58, metalness: 0.5 });
    var cauldron = new THREE.Mesh(new THREE.BoxGeometry(2.3, 1.35, 1.65), shangBronze);
    cauldron.position.y = 0.35;
    var rim = new THREE.Mesh(new THREE.BoxGeometry(2.45, 0.14, 1.8), darkCast);
    rim.position.y = 1.04;
    group.add(cauldron, rim);
    [[-0.85, -0.58], [0.85, -0.58], [-0.85, 0.58], [0.85, 0.58]].forEach(function (pos) {
      var leg = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 1.15, 20), shangBronze);
      leg.position.set(pos[0], -0.78, pos[1]);
      group.add(leg);
    });
    [-0.95, 0.95].forEach(function (hx) {
      var handle = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.08, 12, 24, Math.PI), shangBronze);
      handle.position.set(hx, 1.14, 0);
      handle.rotation.y = Math.PI / 2;
      group.add(handle);
    });
    return group;
  }

  function renderFallbackSVG(container, relicId, isEn) {
    container.innerHTML =
      '<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.25rem;text-align:center;color:#E6E1D6;">' +
        '<svg viewBox="0 0 200 140" width="180" height="126" aria-hidden="true">' +
          '<rect x="20" y="20" width="160" height="100" fill="none" stroke="#B68B46" stroke-width="1.5" stroke-dasharray="4 3"/>' +
          '<rect x="65" y="45" width="70" height="42" fill="rgba(182,139,70,0.2)" stroke="#F2EFE9" stroke-width="2"/>' +
          '<line x1="75" y1="87" x2="75" y2="112" stroke="#F2EFE9" stroke-width="4"/>' +
          '<line x1="125" y1="87" x2="125" y2="112" stroke="#F2EFE9" stroke-width="4"/>' +
        '</svg>' +
        '<div style="font-size:0.84rem;margin-top:0.5rem;">' +
          esc(isEn ? ("Technical Blueprint Preview (" + relicId + ") — WebGL offline fallback active") : ("Bản vẽ Kỹ thuật Dự phòng (" + relicId + ") — Chế độ không cần WebGL")) +
        '</div>' +
      '</div>';
  }

  function mountCanvas() {
    var container = document.getElementById("cce-artifact-3d-canvas");
    if (!container) return;
    var isEn = window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en";
    if (typeof THREE === "undefined") {
      renderFallbackSVG(container, currentArtifact3D, isEn);
      return;
    }

    disposeLocalRt();
    registerWebGL("artifacts-3d", disposeLocalRt);

    container.innerHTML = "";
    var w = Math.max(260, container.clientWidth || 520);
    var h = Math.max(260, container.clientHeight || 340);

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(currentLighting === "warm-spot" ? 0x161210 : currentLighting === "relief" ? 0x0c0d0f : 0x1a1c1e);

    var camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
    camera.position.set(0, 1.35, 5.2);
    camera.lookAt(0, 0.1, 0);

    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    } catch (_err) {
      renderFallbackSVG(container, currentArtifact3D, isEn);
      return;
    }
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.touchAction = "none";
    container.appendChild(renderer.domElement);

    var amb = new THREE.AmbientLight(0xffffff, currentLighting === "daylight" ? 0.72 : currentLighting === "warm-spot" ? 0.42 : 0.25);
    var keyLight = new THREE.DirectionalLight(
      currentLighting === "warm-spot" ? 0xffdfb0 : 0xffffff,
      currentLighting === "relief" ? 1.45 : 1.05
    );
    keyLight.position.set(currentLighting === "relief" ? 6 : 3, currentLighting === "relief" ? 1.2 : 5, 3);
    var rimLight = new THREE.DirectionalLight(0x9ab0a6, 0.45);
    rimLight.position.set(-4, 2, -4);
    scene.add(amb, keyLight, rimLight);

    var relic = buildProceduralRelicGroup(THREE, currentArtifact3D);
    scene.add(relic);

    var dragging = false;
    var prevX = 0;
    var prevY = 0;
    var rotY = 0.45;
    var rotX = 0.18;

    function onDown(ev) {
      dragging = true;
      var pt = ev.touches ? ev.touches[0] : ev;
      prevX = pt.clientX;
      prevY = pt.clientY;
    }
    function onMove(ev) {
      if (!dragging) return;
      var pt = ev.touches ? ev.touches[0] : ev;
      rotY += (pt.clientX - prevX) * 0.012;
      rotX = Math.max(-0.8, Math.min(0.8, rotX + (pt.clientY - prevY) * 0.008));
      prevX = pt.clientX;
      prevY = pt.clientY;
    }
    function onUp() { dragging = false; }
    function onWheel(ev) {
      ev.preventDefault();
      camera.position.z = Math.max(3.1, Math.min(8.2, camera.position.z + ev.deltaY * 0.004));
    }

    var dom = renderer.domElement;
    dom.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    dom.addEventListener("wheel", onWheel, { passive: false });

    var ro = typeof ResizeObserver === "function" ? new ResizeObserver(function () {
      var nw = Math.max(260, container.clientWidth || 520);
      var nh = Math.max(260, container.clientHeight || 340);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh, false);
    }) : null;
    if (ro) ro.observe(container);

    var rafId = 0;
    function tick() {
      rafId = requestAnimationFrame(tick);
      if (!dragging) rotY += 0.0045;
      relic.rotation.y = rotY;
      relic.rotation.x = rotX;
      renderer.render(scene, camera);
    }
    tick();

    activeRt = {
      renderer: renderer,
      rafId: rafId,
      ro: ro,
      cleanupEvents: function () {
        dom.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        dom.removeEventListener("wheel", onWheel);
      }
    };
  }

  function renderMuseum3DStudioSection(enM, uiLang) {
    var activeItem = ARTIFACTS_3D_LIST[0];
    for (var i = 0; i < ARTIFACTS_3D_LIST.length; i++) {
      if (ARTIFACTS_3D_LIST[i].id === currentArtifact3D) { activeItem = ARTIFACTS_3D_LIST[i]; break; }
    }
    var safeLang = uiLang || "vi";

    return (
      '<section class="card mt-2 mb-2" id="museum-3d-studio-section" style="padding:1.25rem 1.35rem;border-top:3px solid var(--imperial-red);">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
          '<div>' +
            '<div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "3D MUSEUM LAB & TIANTAN HERITAGE TWIN" : "PHÒNG THÍ NGHIỆM BẢO TÀNG 3D & THIÊN ĐÀN BẮC KINH") + '</div>' +
            '<h2 style="font-family:var(--font-editorial);font-size:1.45rem;margin:0.15rem 0;">' + (enM ? "Interactive 3D National Relics & Imperial Architecture" : "Khảo cứu Bảo vật Quốc gia 3D & Đàn Tế Trời Thiên Đàn") + '</h2>' +
          '</div>' +
          '<button type="button" class="btn ' + (tiantanOpen ? "btn-primary" : "btn-gold") + ' btn-sm" data-action="v3-toggle-tiantan">' +
            (tiantanOpen ? (enM ? "Switch to 3D Artifacts" : "Quay lại 4 Bảo vật 3D") : (enM ? "Open Temple of Heaven 3D Twin →" : "Mở Mô hình Thiên Đàn 3D →")) +
          '</button>' +
        '</div>' +

        (tiantanOpen ? (
          '<div style="border:1px solid var(--hairline);background:#0f1012;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0.75rem;border-bottom:1px solid rgba(255,255,255,0.12);color:#F2EFE9;font-size:0.8rem;">' +
              '<span><strong>天坛祈年殿</strong> · ' + (enM ? "Interactive Digital Twin synchronized to " : "Mô hình Số Thiên Đàn đồng bộ ngôn ngữ: ") + '<code>' + esc(safeLang) + '</code></span>' +
              '<a href="assets/interactive/tiantan-3d-heritage.html" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size:0.74rem;padding:0.2rem 0.5rem;">⤢ ' + (enM ? "Open Full Tab" : "Mở toàn màn hình") + '</a>' +
            '</div>' +
            '<iframe id="cce-tiantan-iframe" title="Temple of Heaven 3D Heritage Twin" src="assets/interactive/tiantan-3d-heritage.html?lang=' + encodeURIComponent(safeLang) + '" style="width:100%;height:500px;border:0;display:block;" loading="lazy"></iframe>' +
          '</div>'
        ) : (
          '<div class="grid grid-2" style="gap:1rem;align-items:stretch;">' +
            '<div id="cce-artifact-3d-canvas" style="min-height:320px;height:340px;background:#16181a;border:1px solid var(--hairline);position:relative;overflow:hidden;"></div>' +
            '<div style="display:flex;flex-direction:column;gap:0.75rem;">' +
              '<div style="display:flex;flex-wrap:wrap;gap:0.35rem;">' +
                ARTIFACTS_3D_LIST.map(function (it) {
                  return '<button type="button" class="filter-pill ' + (it.id === activeItem.id ? "active" : "") + '" data-action="v3-select-3d-artifact" data-id="' + it.id + '" style="font-size:0.75rem;padding:0.25rem 0.6rem;">' +
                    esc(enM ? it.titleEn.split("(")[0].trim() : it.titleVi.split("(")[0].trim()) +
                  '</button>';
                }).join("") +
              '</div>' +
              '<div style="display:flex;flex-wrap:wrap;gap:0.35rem;align-items:center;">' +
                '<span style="font-size:0.74rem;font-weight:700;color:var(--text-muted);">' + (enM ? "Lighting:" : "Ánh sáng:") + '</span>' +
                LIGHTING_MODES.map(function (lm) {
                  return '<button type="button" class="btn ' + (lm.id === currentLighting ? "btn-primary" : "btn-secondary") + ' btn-sm" data-action="v3-set-3d-light" data-light="' + lm.id + '" style="font-size:0.73rem;padding:0.22rem 0.55rem;">' +
                    esc(enM ? lm.labelEn : lm.labelVi) +
                  '</button>';
                }).join("") +
              '</div>' +
              '<div class="analysis-panel-box" style="margin-top:auto;">' +
                '<div style="font-weight:700;font-size:1.05rem;">' + esc(enM ? activeItem.titleEn : activeItem.titleVi) + ' <span class="hanzi" style="color:var(--imperial-red);">' + esc(activeItem.titleZh) + '</span></div>' +
                '<div style="font-size:0.78rem;color:var(--text-muted);margin:0.2rem 0 0.45rem;">' + esc(enM ? activeItem.eraEn : activeItem.eraVi) + '</div>' +
                '<p style="margin:0;font-size:0.84rem;line-height:1.6;">' + esc(enM ? activeItem.noteEn : activeItem.noteVi) + '</p>' +
              '</div>' +
              '<div style="font-size:0.76rem;color:var(--text-muted);">' + (enM ? "Drag to orbit · Scroll wheel to zoom · Single active WebGL context auto-disposed on switch." : "Kéo chuột để xoay · Cuộn để thu phóng · Tự động giải phóng bộ nhớ WebGL khi chuyển cảnh.") + '</div>' +
            '</div>' +
          '</div>'
        )) +
      '</section>'
    );
  }

  function syncTiantanLang(lang) {
    var iframe = document.getElementById("cce-tiantan-iframe");
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage({ type: "cce-set-lang", lang: lang || "vi" }, "*");
      } catch (_e) {}
    }
  }

  window.CCE_ARTIFACTS_3D = {
    renderSection: renderMuseum3DStudioSection,
    initMountedCanvasIfAny: function () {
      if (!tiantanOpen && document.getElementById("cce-artifact-3d-canvas")) {
        mountCanvas();
      }
    },
    setArtifact: function (id) { currentArtifact3D = id || "houmuwu-ding"; tiantanOpen = false; },
    setLighting: function (light) { currentLighting = light || "daylight"; },
    toggleTiantan: function () {
      tiantanOpen = !tiantanOpen;
      if (tiantanOpen) disposeLocalRt();
    },
    isTiantanOpen: function () { return tiantanOpen; },
    syncTiantanLang: syncTiantanLang,
    dispose: disposeLocalRt
  };
})();
