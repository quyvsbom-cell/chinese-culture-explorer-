// ============================================================================
// CHINESE CULTURE EXPLORER v12.0 — 10 Museum-Grade Explode-View 3D Studios
// Renders all 10 CCE_V12_3D_SPECS (70 Mechanical & Architectural Layers)
// Strictly shares 1 active WebGL context via CCE_WEBGL_MGR (Zero GPU Leak).
// Pure ES5 IIFE — Zero UI emojis, WCAG AAA ready.
// ============================================================================
(function () {
  "use strict";

  var rt = null;
  var activeModelIdx = 0;
  var activeLayerIdx = 0;
  var explodePct = 35; // 0..100
  var activePresetIdx = 0;
  var autoSpin = true;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function ensureMgr() {
    if (window.CCE_WEBGL_MGR) return window.CCE_WEBGL_MGR;
    return { register: function () {}, disposeAll: function () {} };
  }

  function getSpecs() {
    return Array.isArray(window.CCE_V12_3D_SPECS) ? window.CCE_V12_3D_SPECS : [];
  }

  function dispose() {
    if (!rt) return;
    if (rt.rafId) cancelAnimationFrame(rt.rafId);
    if (rt.cleanup) rt.cleanup();
    if (rt.ro) rt.ro.disconnect();
    if (window.CCE_3D_PBR && rt.scene) {
      try { window.CCE_3D_PBR.disposeScene(rt.scene, rt.renderer); } catch (_e) {}
    } else if (rt.scene && typeof rt.scene.traverse === "function") {
      rt.scene.traverse(function (obj) {
        if (obj.geometry && obj.geometry.dispose) try { obj.geometry.dispose(); } catch (_e) {}
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach(function (m) { if (m && m.dispose) try { m.dispose(); } catch (_e) {} });
          } else if (obj.material.dispose) {
            try { obj.material.dispose(); } catch (_e) {}
          }
        }
      });
    }
    if (rt.renderer) try { rt.renderer.dispose(); } catch (_e) {}
    rt = null;
  }

  function makeMaterial(THREE, specMat, isSelected, layer) {
    var PBR = window.CCE_3D_PBR;
    var pbr = specMat || {};
    var colorVal = pbr.colorHex || "#9E6B43";
    var gt = (layer && layer.geometryType) || "";
    var pid = (layer && layer.partId) || "";
    var metalness = typeof pbr.metalness === "number" ? pbr.metalness : 0.12;
    var roughness = typeof pbr.roughness === "number" ? pbr.roughness : 0.62;
    var clearcoat = typeof pbr.clearcoat === "number" ? pbr.clearcoat : 0;

    var texKind = null;
    if (pid.indexOf("stone") >= 0 || pid.indexOf("marble") >= 0 || pid.indexOf("tiers") >= 0 || pid.indexOf("balustrade") >= 0 || pid.indexOf("deck") >= 0 || pid.indexOf("abut") >= 0 || pid.indexOf("nine") >= 0) texKind = "marble";
    else if (pid.indexOf("earth") >= 0 || pid.indexOf("pit") >= 0 || pid.indexOf("core") >= 0 || pid.indexOf("mold") >= 0 || pid.indexOf("sagger") >= 0) texKind = "rammedEarth";
    else if (pid.indexOf("wood") >= 0 || pid.indexOf("timber") >= 0 || pid.indexOf("column") >= 0 || pid.indexOf("wheel") >= 0 || pid.indexOf("chariot") >= 0 || pid.indexOf("frame") >= 0 || pid.indexOf("loom") >= 0 || pid.indexOf("corridor") >= 0) texKind = "wood";
    else if (pid.indexOf("bronze") >= 0 || pid.indexOf("ding") >= 0 || pid.indexOf("ring") >= 0 || pid.indexOf("gear") >= 0 || pid.indexOf("tanks") >= 0 || pid.indexOf("escapement") >= 0 || pid.indexOf("sphere") >= 0) texKind = "bronze";
    else if (pid.indexOf("tianqing") >= 0 || pid.indexOf("ru-") >= 0) texKind = "celadon";
    else if (pid.indexOf("wall") >= 0 && pid.indexOf("round-square") >= 0) texKind = "fortressBrick";

    var MatCls = (clearcoat > 0.05 && THREE.MeshPhysicalMaterial)
      ? THREE.MeshPhysicalMaterial
      : THREE.MeshStandardMaterial;
    var cfg = {
      color: new THREE.Color(colorVal),
      roughness: roughness,
      metalness: metalness
    };
    if (PBR && texKind) cfg.map = PBR.getTexture(THREE, texKind);
    if (PBR && texKind === "bronze") { cfg.bumpMap = PBR.getTexture(THREE, "bronzeBump"); cfg.bumpScale = 0.018; }
    if (PBR && texKind === "wood") { cfg.bumpMap = PBR.getTexture(THREE, "woodBump"); cfg.bumpScale = 0.015; }
    if (MatCls === THREE.MeshPhysicalMaterial) {
      cfg.clearcoat = clearcoat;
      cfg.clearcoatRoughness = 0.16;
    }
    if (pbr.transparent || (typeof pbr.opacity === "number" && pbr.opacity < 1)) {
      cfg.transparent = true;
      cfg.opacity = typeof pbr.opacity === "number" ? pbr.opacity : 0.72;
    }
    if (isSelected) {
      cfg.emissive = new THREE.Color("#E5A93C");
      cfg.emissiveIntensity = 0.24;
    }
    if (gt === "ConeGeometry" && pid.indexOf("roof") >= 0) {
      cfg.side = THREE.DoubleSide;
    }
    return new MatCls(cfg);
  }

  function parseNumsAfter(str, key, count) {
    var rx = new RegExp(key + "\\s*:\\s*([^),+]+)");
    var m = str.match(rx);
    if (!m) return null;
    var parts = m[1].split(/\.{2}|\//).map(function (x) {
      return parseFloat(x.replace(/[^\d.-]/g, ""));
    }).filter(function (n) { return !isNaN(n); });
    if (!parts.length) return null;
    return count === 1 ? parts[0] : parts;
  }

  function parseVec3(str, key) {
    var rx = new RegExp(key + "\\s*\\[([^\\]]+)\\]");
    var m = str.match(rx);
    if (!m) return [0, 0, 0];
    return m[1].split(",").map(function (s) {
      var v = parseFloat(s.replace(/[±]/g, "").trim());
      return isNaN(v) ? 0 : v;
    });
  }

  function buildLayerGroup(THREE, spec, layer, lIdx, isSel) {
    var PBR = window.CCE_3D_PBR;
    var ARCH = window.CCE_3D_ARCH;
    var grp = new THREE.Group();
    var mat = makeMaterial(THREE, layer.pbrMaterial, isSel, layer);
    var matDark = makeMaterial(THREE, { colorHex: "#3C2A1E", roughness: 0.65, metalness: 0.08 }, false, { partId: "wood" });
    var matGold = makeMaterial(THREE, { colorHex: "#D4A442", roughness: 0.24, metalness: 0.82, clearcoat: 0.25 }, isSel, { partId: "bronze" });
    var matRed = makeMaterial(THREE, { colorHex: "#8F221C", roughness: 0.45, metalness: 0.06 }, isSel, { partId: "wood" });
    var matWater = makeMaterial(THREE, { colorHex: "#1B685B", roughness: 0.12, metalness: 0.32, clearcoat: 0.85, transparent: true, opacity: 0.84 }, false, {});
    var matMarble = makeMaterial(THREE, { colorHex: "#EAE4D8", roughness: 0.52, metalness: 0.04 }, isSel, { partId: "marble" });

    var ds = String(layer.dimensionsSpec || "");
    var pos = parseVec3(ds, "pos");
    var rot = parseVec3(ds, "rot");
    var id = spec.id;
    var pid = layer.partId || "";
    var i, a, m, mesh;

    // =========================================================================
    // MODEL 1: YINGXIAN WOODEN PAGODA (1056) — 7 STRUCTURAL LAYERS
    // =========================================================================
    if (id === "yingxian-wooden-pagoda-3d") {
      if (pid === "yx-stone-plinth") {
        var plLower = new THREE.Mesh(new THREE.CylinderGeometry(2.65, 2.82, 0.34, 8), mat);
        var plUpper = new THREE.Mesh(new THREE.CylinderGeometry(2.35, 2.44, 0.28, 8), mat);
        plUpper.position.y = 0.28;
        if (ARCH) {
          var pBal = ARCH.createMarbleBalustrade(THREE, { sides: 8, radius: 2.38, railH: 0.16, color: 0xded8cc });
          pBal.position.y = 0.42;
          grp.add(pBal);
        }
        grp.add(plLower, plUpper);
      } else if (pid === "yx-double-column-ring") {
        for (i = 0; i < 24; i++) {
          a = (i / 24) * Math.PI * 2;
          m = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.078, 1.35, 8), mat);
          m.position.set(Math.cos(a) * 1.98, 0, Math.sin(a) * 1.98);
          grp.add(m);
        }
        for (i = 0; i < 8; i++) {
          a = (i / 8) * Math.PI * 2;
          m = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.095, 1.35, 8), mat);
          m.position.set(Math.cos(a) * 1.10, 0, Math.sin(a) * 1.10);
          grp.add(m);
        }
      } else if (pid === "yx-mezzanine-truss") {
        for (i = 0; i < 4; i++) {
          var yt = -0.9 + i * 0.78;
          var ringBeam = new THREE.Mesh(new THREE.TorusGeometry(1.48 - i * 0.11, 0.06, 8, 8), mat);
          ringBeam.rotation.x = Math.PI / 2;
          ringBeam.position.y = yt;
          grp.add(ringBeam);
          for (var d = 0; d < 8; d++) {
            a = (d / 8) * Math.PI * 2;
            var strut = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.36, 0.85 - i * 0.06), mat);
            strut.position.set(Math.cos(a) * (1.35 - i * 0.1), yt + 0.08, Math.sin(a) * (1.35 - i * 0.1));
            strut.rotation.y = -a + 0.55;
            grp.add(strut);
          }
        }
      } else if (pid === "yx-dougong-brackets") {
        for (i = 0; i < 5; i++) {
          var radD = 2.04 - i * 0.22;
          var yD = -1.25 + i * 0.78;
          if (ARCH) {
            var dgRing = ARCH.createDougongFrieze(THREE, { sides: 8, radius: radD });
            dgRing.position.y = yD;
            grp.add(dgRing);
          }
        }
      } else if (pid === "yx-five-octagonal-eaves") {
        for (i = 0; i < 5; i++) {
          var radR = 2.48 - i * 0.24;
          var yR = -1.20 + i * 0.78;
          if (ARCH) {
            var octRoof = ARCH.createCurvedRoof(THREE, {
              style: "cuanjian", sides: 8, radius: radR, h: 0.44 - i * 0.02,
              tileKind: "slateTile", feiyanLift: 0.16, rotOffset: Math.PI / 8,
              noFinial: i < 4
            });
            octRoof.position.y = yR;
            grp.add(octRoof);
            var balR = ARCH.createMarbleBalustrade(THREE, { sides: 8, radius: radR * 0.78, railH: 0.12, color: 0x8d221c });
            balR.position.y = yR + 0.28;
            grp.add(balR);
          }
        }
      } else if (pid === "yx-central-statue-core") {
        var lotus = new THREE.Mesh(new THREE.CylinderGeometry(0.54, 0.68, 0.28, 16), matGold);
        lotus.position.y = -0.35;
        var torsoPts = [
          new THREE.Vector2(0.01, 0), new THREE.Vector2(0.46, 0.08),
          new THREE.Vector2(0.36, 0.48), new THREE.Vector2(0.26, 0.92),
          new THREE.Vector2(0.14, 1.05), new THREE.Vector2(0.20, 1.24),
          new THREE.Vector2(0.15, 1.44), new THREE.Vector2(0.01, 1.48)
        ];
        var buddha = new THREE.Mesh(new THREE.LatheGeometry(torsoPts, 24), mat);
        buddha.position.y = -0.22;
        var mandorla = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.035, 10, 28), matGold);
        mandorla.position.set(0, 0.85, -0.18);
        grp.add(lotus, buddha, mandorla);
      } else if (pid === "yx-iron-spire-chains") {
        var spire = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.12, 1.45, 12), mat);
        spire.position.y = 0.2;
        grp.add(spire);
        for (i = 0; i < 6; i++) {
          var ring = new THREE.Mesh(new THREE.TorusGeometry(0.16 - i * 0.015, 0.018, 8, 16), matGold);
          ring.rotation.x = Math.PI / 2;
          ring.position.y = -0.2 + i * 0.14;
          grp.add(ring);
        }
        for (i = 0; i < 8; i++) {
          a = (i / 8) * Math.PI * 2;
          var curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0.65, 0),
            new THREE.Vector3(Math.cos(a) * 0.55, 0.10, Math.sin(a) * 0.55),
            new THREE.Vector3(Math.cos(a) * 1.15, -0.42, Math.sin(a) * 1.15)
          ]);
          grp.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 12, 0.018, 6, false), mat));
        }
      }

    // =========================================================================
    // MODEL 2: ZHAOZHOU BRIDGE ARCH (605 CE) — 7 MASONRY LAYERS
    // =========================================================================
    } else if (id === "zhaozhou-bridge-arch-3d") {
      if (pid === "zz-abutments") {
        var riverW = new THREE.Mesh(new THREE.BoxGeometry(8.2, 0.12, 2.8), matWater);
        riverW.position.y = -0.45;
        var aL = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.95, 1.98), mat); aL.position.x = -3.45;
        var aR = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.95, 1.98), mat); aR.position.x = 3.45;
        grp.add(riverW, aL, aR);
      } else if (pid === "zz-main-arch-rings") {
        for (i = 0; i < 24; i++) {
          var u = -1 + (2 * (i + 0.5)) / 24;
          var xP = u * 2.95;
          var yP = 1.12 * (1 - u * u) - 0.35;
          var stone = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.24, 1.78), mat);
          stone.position.set(xP, yP, 0);
          stone.rotation.z = Math.atan(-2 * u * 1.12 / 2.95);
          grp.add(stone);
        }
      } else if (pid === "zz-iron-cramps") {
        for (i = -8; i <= 8; i += 2) {
          var uc = i / 10;
          [-0.90, 0.90].forEach(function (cz) {
            var cr = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.05, 0.06), mat);
            cr.position.set(uc * 2.95, 1.12 * (1 - uc * uc) - 0.35, cz);
            grp.add(cr);
          });
        }
      } else if (pid === "zz-spandrel-arches") {
        [-2.05, -1.28, 1.28, 2.05].forEach(function (xp, sIdx) {
          var sr = (sIdx === 0 || sIdx === 3) ? 0.38 : 0.26;
          var yp = (sIdx === 0 || sIdx === 3) ? 0.25 : 0.48;
          for (var rz = -0.65; rz <= 0.65; rz += 0.65) {
            var spA = new THREE.Mesh(new THREE.TorusGeometry(sr, 0.075, 8, 18, Math.PI), mat);
            spA.position.set(xp, yp, rz);
            grp.add(spA);
          }
        });
      } else if (pid === "zz-spandrel-walls") {
        [-2.55, 2.55].forEach(function (wx) {
          var sw = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.55, 1.72), mat);
          sw.position.set(wx, 0.15, 0);
          grp.add(sw);
        });
      } else if (pid === "zz-stone-deck") {
        for (i = 0; i < 16; i++) {
          var ud = -1 + (2 * (i + 0.5)) / 16;
          var dp = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.14, 1.82), mat);
          dp.position.set(ud * 3.3, 0.18 * (1 - ud * ud), 0);
          dp.rotation.z = Math.atan(-2 * ud * 0.18 / 3.3);
          grp.add(dp);
        }
      } else if (pid === "zz-dragon-balustrades") {
        if (ARCH) {
          var bZ = ARCH.createMarbleBalustrade(THREE, { w: 6.4, d: 1.72, railH: 0.24 });
          grp.add(bZ);
        }
      }

    // =========================================================================
    // MODEL 3: SU SONG ASTRONOMICAL CLOCK TOWER (1092) — 7 LAYERS
    // =========================================================================
    } else if (id === "su-song-astronomical-clock-tower-3d") {
      if (pid === "ss-timber-tower-frame") {
        [[-1.1, -0.95], [1.1, -0.95], [-1.1, 0.95], [1.1, 0.95]].forEach(function (pt) {
          var col = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 2.85, 10), mat);
          col.position.set(pt[0], 0.35, pt[1]);
          grp.add(col);
        });
        [ -0.75, 0.35, 1.45 ].forEach(function (fy) {
          var deck = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.10, 2.05), matDark);
          deck.position.y = fy;
          grp.add(deck);
        });
        if (ARCH) {
          var obsRoof = ARCH.createCurvedRoof(THREE, { style: "xieshan", w: 2.3, d: 2.0, h: 0.62, tileKind: "slateTile", feiyanLift: 0.16 });
          obsRoof.position.y = 1.92;
          grp.add(obsRoof);
        }
      } else if (pid === "ss-clepsydra-tanks") {
        var upperTank = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.42, 0.65), mat);
        upperTank.position.set(-0.65, 0.35, -0.25);
        var lowerTank = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.36, 0.72), mat);
        lowerTank.position.set(-0.55, -0.25, 0.15);
        var spout = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.65, 8), matGold);
        spout.rotation.z = 0.85;
        spout.position.set(-0.22, 0.05, 0);
        grp.add(upperTank, lowerTank, spout);
      } else if (pid === "ss-waterwheel-36") {
        var rimW = new THREE.Mesh(new THREE.TorusGeometry(1.02, 0.06, 10, 36), mat);
        var innerRim = new THREE.Mesh(new THREE.TorusGeometry(0.74, 0.04, 10, 36), mat);
        grp.add(rimW, innerRim);
        for (i = 0; i < 12; i++) {
          a = (i / 12) * Math.PI * 2;
          var spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.02, 8), matDark);
          spoke.rotation.z = a;
          grp.add(spoke);
        }
        for (i = 0; i < 18; i++) {
          a = (i / 18) * Math.PI * 2;
          var bkt = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.22), matGold);
          bkt.position.set(Math.cos(a) * 1.02, Math.sin(a) * 1.02, 0);
          bkt.rotation.z = a;
          grp.add(bkt);
        }
      } else if (pid === "ss-tianheng-escapement") {
        var fulcrum = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.75, 10), matDark);
        var lever = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.07, 0.08), mat);
        lever.position.y = 0.25;
        lever.rotation.z = -0.18;
        var cw = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.18, 12), mat);
        cw.position.set(-0.62, 0.36, 0);
        var pawl = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.45, 0.06), matRed);
        pawl.position.set(0.58, 0.02, 0);
        grp.add(fulcrum, lever, cw, pawl);
      } else if (pid === "ss-vertical-shaft-pagoda") {
        var shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.35, 12), matGold);
        var drvGear = ARCH ? ARCH.createGearWheel(THREE, { teeth: 20, outerR: 0.36, material: matGold }) : new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.08, 16), matGold);
        drvGear.rotation.x = Math.PI / 2;
        drvGear.position.y = -0.65;
        grp.add(shaft, drvGear);
        for (i = 0; i < 5; i++) {
          var lvl = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.18, 0.28), mat);
          lvl.position.set(0.55, -0.75 + i * 0.38, 0.55);
          grp.add(lvl);
        }
      } else if (pid === "ss-celestial-globe") {
        var horizonC = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.045, 10, 32), matGold);
        horizonC.rotation.x = Math.PI / 2;
        var globe = new THREE.Mesh(new THREE.SphereGeometry(0.46, 24, 20), mat);
        var meridianG = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.03, 8, 32), matGold);
        grp.add(horizonC, globe, meridianG);
      } else if (pid === "ss-top-armillary-sphere") {
        var armR1 = new THREE.Mesh(new THREE.TorusGeometry(0.74, 0.045, 12, 36), mat);
        var armR2 = new THREE.Mesh(new THREE.TorusGeometry(0.64, 0.04, 12, 36), mat); armR2.rotation.x = Math.PI / 2;
        var armR3 = new THREE.Mesh(new THREE.TorusGeometry(0.54, 0.035, 12, 36), matGold); armR3.rotation.y = 0.6;
        var sTube = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.35, 10), matGold);
        sTube.rotation.z = 0.65;
        grp.add(armR1, armR2, armR3, sTube);
      }

    // =========================================================================
    // MODEL 4: ZHANG HENG ARMILLARY SPHERE (132 CE) — 7 LAYERS
    // =========================================================================
    } else if (id === "zhang-heng-armillary-sphere-3d") {
      if (pid === "zh-dragon-base-pillars") {
        var crossA = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.18, 0.36), mat);
        var crossB = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.18, 2.6), mat);
        grp.add(crossA, crossB);
        [[-0.95, -0.95], [0.95, -0.95], [-0.95, 0.95], [0.95, 0.95]].forEach(function (cp) {
          var pil = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.11, 1.25, 12), mat);
          pil.position.set(cp[0], 0.65, cp[1]);
          var cap = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 10), matGold);
          cap.position.set(cp[0], 1.30, cp[1]);
          grp.add(pil, cap);
        });
      } else if (pid === "zh-horizon-ring" || pid === "zh-meridian-ring" || pid === "zh-equatorial-ring" || pid === "zh-ecliptic-ring") {
        var rSize = pid === "zh-horizon-ring" ? 1.42 : pid === "zh-meridian-ring" ? 1.30 : pid === "zh-equatorial-ring" ? 1.12 : 0.98;
        var rT = new THREE.Mesh(new THREE.TorusGeometry(rSize, 0.052, 14, 48), mat);
        if (pid === "zh-horizon-ring") rT.rotation.x = Math.PI / 2;
        if (pid === "zh-equatorial-ring") { rT.rotation.x = Math.PI / 2 + 0.62; }
        if (pid === "zh-ecliptic-ring") { rT.rotation.set(Math.PI / 2 + 0.62, 0.4, 0.41); }
        grp.add(rT);
        for (var tk = 0; tk < 12; tk++) {
          var ta = (tk / 12) * Math.PI * 2;
          var peg = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.08, 0.03), matGold);
          if (pid === "zh-horizon-ring") peg.position.set(Math.cos(ta) * rSize, 0.04, Math.sin(ta) * rSize);
          else peg.position.set(Math.cos(ta) * rSize, Math.sin(ta) * rSize, 0);
          rT.add(peg);
        }
      } else if (pid === "zh-polar-axis-gears") {
        var axle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.65, 12), mat);
        axle.rotation.z = 0.62;
        grp.add(axle);
        if (ARCH) {
          var g1 = ARCH.createGearWheel(THREE, { teeth: 24, outerR: 0.42, material: mat });
          g1.rotation.x = Math.PI / 2; g1.position.set(-0.55, -0.45, 0);
          var g2 = ARCH.createGearWheel(THREE, { teeth: 14, outerR: 0.25, material: matGold });
          g2.rotation.x = Math.PI / 2; g2.position.set(0.10, -0.45, 0);
          grp.add(g1, g2);
        }
      } else if (pid === "zh-central-celestial-sphere") {
        var earthC = new THREE.Mesh(new THREE.SphereGeometry(0.28, 20, 18), mat);
        var tube = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.85, 12), matGold);
        tube.rotation.z = 0.72;
        grp.add(earthC, tube);
      }

    // =========================================================================
    // MODEL 5: SOUTH-POINTING CHARIOT — 7 DIFFERENTIAL GEAR LAYERS
    // =========================================================================
    } else if (id === "south-pointing-chariot-3d") {
      if (pid === "sp-chariot-chassis") {
        var bed = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.14, 1.45), mat);
        var poleL = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 1.45, 8), mat);
        poleL.rotation.x = Math.PI / 2; poleL.position.set(-0.42, 0, 1.25);
        var poleR = poleL.clone(); poleR.position.x = 0.42;
        var yoke = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.05, 8), matGold);
        yoke.rotation.z = Math.PI / 2; yoke.position.set(0, 0.02, 1.92);
        grp.add(bed, poleL, poleR, yoke);
      } else if (pid === "sp-left-right-wheels") {
        var ax = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 2.15, 12), matDark);
        ax.rotation.z = Math.PI / 2; grp.add(ax);
        [-0.98, 0.98].forEach(function (wx) {
          var rimW2 = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.055, 10, 32), mat);
          rimW2.rotation.y = Math.PI / 2; rimW2.position.x = wx;
          grp.add(rimW2);
          for (var spk = 0; spk < 12; spk++) {
            var sa = (spk / 12) * Math.PI * 2;
            var spMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.024, 1.38, 6), matDark);
            spMesh.position.x = wx; spMesh.rotation.x = sa;
            grp.add(spMesh);
          }
        });
      } else if (pid === "sp-wheel-pinion-gears" || pid === "sp-differential-cage") {
        if (ARCH) {
          var gearL = ARCH.createGearWheel(THREE, { teeth: 18, outerR: 0.36, material: mat });
          gearL.rotation.y = Math.PI / 2; gearL.position.x = -0.62;
          var gearR = ARCH.createGearWheel(THREE, { teeth: 18, outerR: 0.36, material: mat });
          gearR.rotation.y = Math.PI / 2; gearR.position.x = 0.62;
          var gearMid = ARCH.createGearWheel(THREE, { teeth: 22, outerR: 0.44, material: matGold });
          gearMid.rotation.x = Math.PI / 2;
          grp.add(gearL, gearR, gearMid);
        }
      } else if (pid === "sp-wooden-pavilion-box") {
        var boxBody = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.72, 1.05), mat);
        grp.add(boxBody);
        if (ARCH) {
          var pTop = ARCH.createCurvedRoof(THREE, { style: "wudian", w: 1.25, d: 1.12, h: 0.36, tileKind: "tile", feiyanLift: 0.12 });
          pTop.position.y = 0.36;
          grp.add(pTop);
        }
      } else if (pid === "sp-vertical-pointer-shaft") {
        var spind = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.045, 1.35, 12), mat);
        var thrust = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.08, 16), matGold);
        thrust.position.y = -0.25;
        grp.add(spind, thrust);
      } else if (pid === "sp-immortal-pointer-figure") {
        var robe = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.22, 0.65, 12), matRed);
        var figHead = new THREE.Mesh(new THREE.SphereGeometry(0.10, 12, 12), matGold);
        figHead.position.y = 0.42;
        var arm = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.56, 8), matGold);
        arm.rotation.x = Math.PI / 2;
        arm.position.set(0.08, 0.22, 0.28);
        grp.add(robe, figHead, arm);
      }

    // =========================================================================
    // MODEL 6: HOUMUWU DING PIECE-MOLD FOUNDRY — 7 LAYERS
    // =========================================================================
    } else if (id === "houmuwu-ding-piece-mold-3d") {
      if (pid === "hm-rammed-casting-pit") {
        var pit = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.26, 2.8), mat);
        var sprue = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.05, 8, 24), matGold);
        sprue.rotation.x = Math.PI / 2; sprue.position.y = 0.16;
        grp.add(pit, sprue);
      } else if (pid === "hm-inner-clay-core") {
        var coreM = new THREE.Mesh(new THREE.BoxGeometry(1.52, 0.88, 1.04), mat);
        grp.add(coreM);
      } else if (pid === "hm-bronze-chaplets") {
        [[-0.82, -0.58], [0.82, -0.58], [-0.82, 0.58], [0.82, 0.58], [0, -0.60], [0, 0.60]].forEach(function (cp) {
          var sh = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.06), mat);
          sh.position.set(cp[0], 0, cp[1]);
          grp.add(sh);
        });
      } else if (pid === "hm-four-outer-molds") {
        var mF = new THREE.Mesh(new THREE.BoxGeometry(1.96, 1.04, 0.26), mat); mF.position.z = 0.85;
        var mB = new THREE.Mesh(new THREE.BoxGeometry(1.96, 1.04, 0.26), mat); mB.position.z = -0.85;
        var mL = new THREE.Mesh(new THREE.BoxGeometry(0.26, 1.04, 1.44), mat); mL.position.x = -1.06;
        var mR = new THREE.Mesh(new THREE.BoxGeometry(0.26, 1.04, 1.44), mat); mR.position.x = 1.06;
        grp.add(mF, mB, mL, mR);
      } else if (pid === "hm-bronze-vessel-cast") {
        var dingWall = new THREE.Mesh(new THREE.BoxGeometry(1.76, 0.96, 1.24), mat);
        var dingRim = new THREE.Mesh(new THREE.BoxGeometry(1.90, 0.10, 1.38), matGold);
        dingRim.position.y = 0.50;
        grp.add(dingWall, dingRim);
        [-0.78, 0.78].forEach(function (ex) {
          var ear = new THREE.Mesh(new THREE.TorusGeometry(0.20, 0.06, 10, 20, Math.PI), matGold);
          ear.rotation.y = Math.PI / 2; ear.position.set(ex, 0.56, 0);
          grp.add(ear);
        });
      } else if (pid === "hm-four-leg-molds") {
        [[-0.65, -0.45], [0.65, -0.45], [-0.65, 0.45], [0.65, 0.45]].forEach(function (lp) {
          var legC = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.14, 0.86, 14), mat);
          legC.position.set(lp[0], 0, lp[1]);
          grp.add(legC);
        });
      } else if (pid === "hm-separate-ear-molds") {
        [-0.86, 0.86].forEach(function (ex) {
          var em = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.48, 0.62), mat);
          em.position.set(ex, 0, 0);
          grp.add(em);
        });
      }

    // =========================================================================
    // MODEL 7: RU WARE NARCISSUS BASIN (SONG) — 7 CERAMIC LAYERS
    // =========================================================================
    } else if (id === "ru-ware-narcissus-basin-3d") {
      if (pid === "ru-ash-grey-body" || pid === "ru-tianqing-glaze") {
        var rScale = pid === "ru-tianqing-glaze" ? 1.03 : 0.98;
        var bPts = [
          new THREE.Vector2(0.01, -0.28), new THREE.Vector2(0.88, -0.28),
          new THREE.Vector2(1.06, -0.18), new THREE.Vector2(1.16, 0.12),
          new THREE.Vector2(1.22, 0.28), new THREE.Vector2(1.12, 0.28),
          new THREE.Vector2(0.98, -0.14), new THREE.Vector2(0.01, -0.14)
        ];
        var basin = new THREE.Mesh(new THREE.LatheGeometry(bPts, 48), mat);
        basin.scale.set(1.28 * rScale, rScale, 0.90 * rScale);
        grp.add(basin);
      } else if (pid === "ru-ice-crackle-layer") {
        var crBand = new THREE.Mesh(new THREE.TorusGeometry(1.18, 0.032, 10, 48), mat);
        crBand.rotation.x = Math.PI / 2;
        crBand.scale.set(1.28, 0.90, 1);
        grp.add(crBand);
      } else if (pid === "ru-flared-rim-lip") {
        var lip = new THREE.Mesh(new THREE.TorusGeometry(1.20, 0.055, 12, 48), mat);
        lip.rotation.x = Math.PI / 2;
        lip.scale.set(1.28, 0.90, 1);
        grp.add(lip);
      } else if (pid === "ru-four-cloud-feet") {
        [[-0.95, -0.62], [0.95, -0.62], [-0.95, 0.62], [0.95, 0.62]].forEach(function (fp) {
          var foot = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.10, 0.22, 12), mat);
          foot.position.set(fp[0], 0, fp[1]);
          grp.add(foot);
        });
      } else if (pid === "ru-sesame-spur-marks") {
        for (i = 0; i < 6; i++) {
          a = (i / 6) * Math.PI * 2;
          var spur = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.14, 8), mat);
          spur.position.set(Math.cos(a) * 0.68, 0, Math.sin(a) * 0.48);
          grp.add(spur);
        }
      } else if (pid === "ru-kiln-sagger-pad") {
        var sag = new THREE.Mesh(new THREE.CylinderGeometry(1.65, 1.72, 0.28, 36), mat);
        var sagRim = new THREE.Mesh(new THREE.TorusGeometry(1.64, 0.08, 10, 36), mat);
        sagRim.rotation.x = Math.PI / 2; sagRim.position.y = 0.14;
        grp.add(sag, sagRim);
      }

    // =========================================================================
    // MODEL 8: NANJING YUNJIN DRAWLOOM (云锦花楼织机) — 7 TEXTILE LAYERS
    // =========================================================================
    } else if (id === "nanjing-yunjin-drawloom-3d") {
      if (pid === "yj-main-timber-frame") {
        [[-1.1, -0.65], [1.1, -0.65], [-1.1, 0.65], [1.1, 0.65]].forEach(function (fp) {
          var p = new THREE.Mesh(new THREE.BoxGeometry(0.11, 2.2, 0.11), mat);
          p.position.set(fp[0], 0.2, fp[1]);
          grp.add(p);
        });
        [-0.65, 0.65].forEach(function (z) {
          var topR = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.10, 0.10), mat);
          topR.position.set(0, 1.25, z);
          var botR = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.10, 0.10), mat);
          botR.position.set(0, -0.75, z);
          grp.add(topR, botR);
        });
      } else if (pid === "yj-warp-cloth-beams") {
        var rearB = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.4, 16), mat);
        rearB.rotation.x = Math.PI / 2; rearB.position.x = -1.05;
        var frontB = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.4, 16), matGold);
        frontB.rotation.x = Math.PI / 2; frontB.position.x = 1.05;
        var clothPlane = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.02, 1.08), mat);
        grp.add(rearB, frontB, clothPlane);
      } else if (pid === "yj-upper-drawboy-tower") {
        var tBench = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.08, 0.95), mat);
        tBench.position.y = 0.22;
        [-0.45, 0.45].forEach(function (z) {
          var postU = new THREE.Mesh(new THREE.BoxGeometry(0.09, 1.05, 0.09), mat);
          postU.position.set(0, 0.45, z);
          grp.add(postU);
        });
        grp.add(tBench);
      } else if (pid === "yj-jacquard-pattern-harness") {
        for (var hCord = -4; hCord <= 4; hCord++) {
          var cord = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.45, 6), mat);
          cord.position.set(-0.15, 0, hCord * 0.11);
          grp.add(cord);
        }
      } else if (pid === "yj-heddle-reed-beater") {
        var bFrame = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.65, 1.25), mat);
        bFrame.position.x = 0.35;
        grp.add(bFrame);
      } else if (pid === "yj-lower-treadles-bench") {
        var wBench = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.08, 1.1), mat);
        wBench.position.set(1.2, 0.15, 0);
        grp.add(wBench);
        for (var tr = -2; tr <= 2; tr++) {
          var ped = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.05, 0.09), matDark);
          ped.position.set(0.3, -0.25, tr * 0.16);
          ped.rotation.z = -0.18;
          grp.add(ped);
        }
      } else if (pid === "yj-gold-brocade-shuttles") {
        [-0.28, 0, 0.28].forEach(function (sz) {
          var shut = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.42, 8), mat);
          shut.rotation.x = Math.PI / 2;
          shut.position.set(0.1, 0, sz);
          grp.add(shut);
        });
      }

    // =========================================================================
    // MODEL 9: CHENGQILOU FUJIAN TULOU (1709) — 7 CONCENTRIC LAYERS
    // =========================================================================
    } else if (id === "chengqilou-fujian-tulou-3d") {
      if (pid === "tl-granite-foundation") {
        var ringBase = new THREE.Mesh(new THREE.CylinderGeometry(2.58, 2.66, 0.26, 48, 1, false, Math.PI * 0.5, Math.PI * 1.5), mat);
        var centerPav = new THREE.Mesh(new THREE.CylinderGeometry(2.35, 2.35, 0.06, 48), matMarble);
        grp.add(ringBase, centerPav);
      } else if (pid === "tl-outer-rammed-earth-wall") {
        var earthO = new THREE.Mesh(new THREE.CylinderGeometry(2.38, 2.52, 1.55, 48, 1, true, Math.PI * 0.5, Math.PI * 1.5), mat);
        earthO.material.side = THREE.DoubleSide;
        var earthI = new THREE.Mesh(new THREE.CylinderGeometry(2.12, 2.18, 1.52, 48, 1, true, Math.PI * 0.5, Math.PI * 1.5), mat);
        earthI.material.side = THREE.DoubleSide;
        grp.add(earthO, earthI);
      } else if (pid === "tl-outer-timber-corridors") {
        [-0.45, -0.05, 0.35, 0.75].forEach(function (cy) {
          var corridor = new THREE.Mesh(new THREE.RingGeometry(1.62, 2.12, 40, 1, Math.PI * 0.5, Math.PI * 1.5), mat);
          corridor.rotation.x = -Math.PI / 2; corridor.rotation.z = Math.PI * 0.5;
          corridor.material.side = THREE.DoubleSide; corridor.position.y = cy;
          grp.add(corridor);
        });
      } else if (pid === "tl-ring2-inner-apartments") {
        var r2Wall = new THREE.Mesh(new THREE.CylinderGeometry(1.42, 1.46, 0.96, 36, 1, true, Math.PI * 0.5, Math.PI * 1.5), mat);
        r2Wall.material.side = THREE.DoubleSide;
        var r2Roof = new THREE.Mesh(new THREE.CylinderGeometry(1.62, 1.24, 0.28, 36, 1, true, Math.PI * 0.5, Math.PI * 1.5), matDark);
        r2Roof.material.side = THREE.DoubleSide; r2Roof.position.y = 0.56;
        grp.add(r2Wall, r2Roof);
      } else if (pid === "tl-ring3-library-school") {
        var r3Wall = new THREE.Mesh(new THREE.CylinderGeometry(0.92, 0.95, 0.68, 32, 1, true, Math.PI * 0.5, Math.PI * 1.5), mat);
        r3Wall.material.side = THREE.DoubleSide;
        grp.add(r3Wall);
      } else if (pid === "tl-ring4-ancestral-hall") {
        if (ARCH) {
          var zHall = ARCH.createPalaceHall(THREE, { w: 0.72, d: 0.64, baseH: 0.12, bodyH: 0.42, roofH: 0.34, baysX: 3, baysZ: 2, tileKind: "slateTile" });
          grp.add(zHall);
        }
      } else if (pid === "tl-yinyang-tile-roof") {
        var tRoof = new THREE.Mesh(new THREE.CylinderGeometry(2.74, 1.88, 0.44, 48, 1, true, Math.PI * 0.5, Math.PI * 1.5), mat);
        tRoof.material.side = THREE.DoubleSide;
        grp.add(tRoof);
      }

    // =========================================================================
    // MODEL 10: TIANTAN HUANQIU VS HUE NAM GIAO RITUAL AXIS — 7 LAYERS
    // =========================================================================
    } else if (id === "tiantan-vs-namgiao-ritual-axis-3d") {
      if (pid === "cmp-dual-axis-ground") {
        var gGround = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.14, 3.4), mat);
        var divLine = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.17, 3.2), matGold);
        grp.add(gGround, divLine);
      } else if (pid === "cmp-beijing-three-marble-tiers") {
        [1.35, 0.96, 0.62].forEach(function (tr, tI) {
          var disc = new THREE.Mesh(new THREE.CylinderGeometry(tr, tr * 1.04, 0.18, 36), mat);
          disc.position.set(-1.62, tI * 0.19, 0);
          grp.add(disc);
        });
      } else if (pid === "cmp-beijing-nine-multiples") {
        if (ARCH) {
          [1.32, 0.94, 0.60].forEach(function (tr, tI) {
            var ringB = ARCH.createMarbleBalustrade(THREE, { sides: 18, radius: tr, railH: 0.10 });
            ringB.position.set(-1.62, 0.10 + tI * 0.19, 0);
            grp.add(ringB);
          });
        }
      } else if (pid === "cmp-beijing-round-square-walls") {
        var sqW = ARCH ? ARCH.createMarbleBalustrade(THREE, { w: 2.85, d: 2.85, railH: 0.24, color: 0x821C1C }) : new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.08, 8, 4), mat);
        sqW.position.set(-1.62, 0, 0);
        grp.add(sqW);
      } else if (pid === "cmp-hue-lower-middle-square") {
        var ngLower = new THREE.Mesh(new THREE.BoxGeometry(2.55, 0.18, 2.55), mat);
        ngLower.position.set(1.62, 0, 0);
        var ngMid = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.20, 1.88), mat);
        ngMid.position.set(1.62, 0.19, 0);
        var ngRamp = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.34, 0.48), mat);
        ngRamp.position.set(1.62, 0.16, 1.25); ngRamp.rotation.x = 0.45;
        grp.add(ngLower, ngMid, ngRamp);
      } else if (pid === "cmp-hue-top-circular-altar") {
        var ngTop = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.76, 0.22, 32), mat);
        ngTop.position.set(1.62, 0.22, 0);
        if (ARCH) {
          var blueCanopy = ARCH.createCurvedRoof(THREE, { style: "cuanjian", sides: 8, radius: 0.68, h: 0.38, tileKind: "cobaltTile", feiyanLift: 0.12 });
          blueCanopy.position.set(1.62, 0.56, 0);
          grp.add(blueCanopy);
        }
        grp.add(ngTop);
      } else if (pid === "cmp-hue-trai-cung-axis") {
        if (ARCH) {
          var traiCung = ARCH.createPalaceHall(THREE, { w: 1.05, d: 0.62, baseH: 0.10, bodyH: 0.28, roofH: 0.24, baysX: 3, baysZ: 2, tileKind: "tile" });
          traiCung.position.set(1.62, 0.0, -1.18);
          grp.add(traiCung);
        }
      }
    }

    // Safe fallback if a layer wasn't matched above
    if (grp.children.length === 0) {
      var wF = parseNumsAfter(ds, "w", 1) || 1.4;
      var hF = parseNumsAfter(ds, "h", 1) || 0.5;
      var dF = parseNumsAfter(ds, "d", 1) || 1.1;
      grp.add(new THREE.Mesh(new THREE.BoxGeometry(Math.min(3.2, wF), Math.min(2.0, hF), Math.min(2.8, dF)), mat));
    }

    grp.traverse(function (o) {
      if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
    });

    var basePos = new THREE.Vector3(
      Math.max(-4, Math.min(4, pos[0] || 0)),
      Math.max(-1, Math.min(5.5, (pos[1] || lIdx * 0.55) - 1.2)),
      Math.max(-4, Math.min(4, pos[2] || 0))
    );
    grp.userData.basePos = basePos.clone();
    grp.userData.explodeOffset = Array.isArray(layer.explodeOffset) ? layer.explodeOffset : [0, lIdx * 0.45, 0];
    grp.position.copy(basePos);
    grp.rotation.set(rot[0] || 0, rot[1] || 0, rot[2] || 0);
    return grp;
  }

  function applyExplodeOffsets(root, ratio) {
    if (!root) return;
    root.children.forEach(function (child) {
      if (!child.userData || !child.userData.basePos) return;
      var b = child.userData.basePos;
      var o = child.userData.explodeOffset || [0, 0, 0];
      child.position.set(
        b.x + (o[0] || 0) * ratio,
        b.y + (o[1] || 0) * ratio,
        b.z + (o[2] || 0) * ratio
      );
    });
  }

  function initMountedCanvasIfAny() {
    var mount = document.getElementById("cce-v12-explode-3d-canvas");
    if (!mount || typeof window.THREE === "undefined") return;
    var specs = getSpecs();
    if (!specs.length) return;
    var spec = specs[activeModelIdx % specs.length];

    dispose();
    ensureMgr().register("v12-explode-3d", dispose);

    var THREE = window.THREE;
    var PBR = window.CCE_3D_PBR;
    var ARCH = window.CCE_3D_ARCH;
    var w = Math.max(320, mount.clientWidth || 720);
    var h = Math.max(320, mount.clientHeight || 420);
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    if (PBR) PBR.configureRenderer(THREE, renderer, { exposure: 1.10 });
    else {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      if ("outputEncoding" in renderer && THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
    }
    renderer.setSize(w, h);
    mount.innerHTML = "";
    mount.appendChild(renderer.domElement);

    var scene = new THREE.Scene();
    if (PBR) PBR.applyStudioEnvironment(THREE, renderer, scene, "warm");

    var preset = (spec.cameraPresets && spec.cameraPresets[activePresetIdx]) || (spec.cameraPresets && spec.cameraPresets[0]) || { pos: [6.4, 4.2, 7.2], target: [0, 1.2, 0] };
    var targetY = (preset.target && typeof preset.target[1] === "number") ? Math.max(0.2, preset.target[1] - 0.8) : 0.8;
    var camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    var pPos = preset.pos || [6.4, 4.2, 7.2];
    camera.position.set(pPos[0], pPos[1], pPos[2]);

    scene.add(new THREE.HemisphereLight(0xfff5e4, 0x241e18, 0.72));
    var keyLight = new THREE.DirectionalLight(0xffeed4, 1.25);
    keyLight.position.set(6, 10, 7);
    if (PBR && PBR.tuneShadowLight) PBR.tuneShadowLight(keyLight, 6.5);
    scene.add(keyLight);
    var rimLight = new THREE.DirectionalLight(0x88b4c8, 0.52);
    rimLight.position.set(-7, 4, -6);
    scene.add(rimLight);

    var root = new THREE.Group();
    if (ARCH && typeof ARCH.createCourtyardStage === "function") {
      var stg = ARCH.createCourtyardStage(THREE, { radius: 3.45 });
      stg.position.y = -1.55;
      scene.add(stg);
    } else if (PBR && typeof PBR.createMuseumPedestal === "function") {
      var ped = PBR.createMuseumPedestal(THREE, 3.3, 0.24);
      ped.position.y = -1.55;
      scene.add(ped);
    }

    var layers = Array.isArray(spec.layers) ? spec.layers : [];
    for (var i = 0; i < layers.length; i++) {
      var lGrp = buildLayerGroup(THREE, spec, layers[i], i, i === activeLayerIdx);
      root.add(lGrp);
    }
    applyExplodeOffsets(root, explodePct / 100);
    scene.add(root);

    var drag = { down: false, x: 0, y: 0, theta: Math.atan2(pPos[0], pPos[2]), phi: 0.42, radius: Math.max(4.5, Math.min(14, Math.hypot(pPos[0], pPos[1], pPos[2]))) };
    var updateCam = function () {
      camera.position.set(
        drag.radius * Math.sin(drag.theta) * Math.cos(drag.phi),
        targetY + drag.radius * Math.sin(drag.phi),
        drag.radius * Math.cos(drag.theta) * Math.cos(drag.phi)
      );
      camera.lookAt(0, targetY, 0);
    };
    updateCam();

    var domEl = renderer.domElement;
    var onDown = function (e) { drag.down = true; drag.x = e.clientX; drag.y = e.clientY; };
    var onMove = function (e) {
      if (!drag.down) return;
      drag.theta -= (e.clientX - drag.x) * 0.008;
      drag.phi = Math.max(-0.4, Math.min(1.15, drag.phi + (e.clientY - drag.y) * 0.006));
      drag.x = e.clientX; drag.y = e.clientY;
      updateCam();
    };
    var onUp = function () { drag.down = false; };
    var onWheel = function (e) {
      e.preventDefault();
      drag.radius = Math.max(3.5, Math.min(15, drag.radius + (e.deltaY > 0 ? 0.5 : -0.5)));
      updateCam();
    };
    domEl.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    domEl.addEventListener("wheel", onWheel, { passive: false });

    var ro = null;
    if (typeof window.ResizeObserver === "function") {
      ro = new window.ResizeObserver(function () {
        if (!rt || !mount.clientWidth) return;
        var nw = mount.clientWidth;
        var nh = mount.clientHeight || 420;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      });
      ro.observe(mount);
    }

    rt = {
      renderer: renderer,
      scene: scene,
      camera: camera,
      root: root,
      ro: ro,
      rafId: 0,
      cleanup: function () {
        domEl.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        domEl.removeEventListener("wheel", onWheel);
      }
    };

    function loop() {
      if (!rt) return;
      if (autoSpin && !drag.down) {
        drag.theta += 0.0032;
        updateCam();
      }
      renderer.render(scene, camera);
      rt.rafId = requestAnimationFrame(loop);
    }
    loop();
  }

  function renderPanel(enM) {
    var specs = getSpecs();
    if (!specs.length) {
      return (
        '<div class="card" style="padding:1.25rem;">' +
        '  <strong>' + (enM ? "Loading 10 Procedural PBR Explode Models..." : "Đang tải 10 mô hình PBR giải phẫu tách lớp 3D...") + '</strong>' +
        '</div>'
      );
    }
    var idx = activeModelIdx % specs.length;
    var spec = specs[idx];
    var layers = Array.isArray(spec.layers) ? spec.layers : [];
    var lIdx = Math.max(0, Math.min(layers.length - 1, activeLayerIdx));
    var presets = Array.isArray(spec.cameraPresets) ? spec.cameraPresets : [];

    return (
      '<div id="cce-v12-explode-3d-shell">' +
      '  <div class="filter-bar" style="margin-bottom:0.75rem;">' +
      specs.map(function (s, i) {
        return '<button type="button" class="filter-pill ' + (i === idx ? "active" : "") + '" data-v12-3d-model="' + i + '" style="font-size:0.74rem;">' + (i + 1) + ". " + esc(enM ? s.titleEn : s.titleVi) + "</button>";
      }).join("") +
      '  </div>' +
      '  <div class="grid grid-2" style="gap:1rem;align-items:start;">' +
      '    <div>' +
      '      <div id="cce-v12-explode-3d-canvas" style="width:100%;height:420px;border:1px solid var(--hairline);border-radius:var(--radius-md);background:radial-gradient(circle at 50% 35%, #2a241d 0%, #141210 100%);cursor:grab;" aria-label="' + esc(enM ? spec.titleEn : spec.titleVi) + '"></div>' +
      '      <div style="display:flex;align-items:center;gap:0.65rem;flex-wrap:wrap;margin-top:0.7rem;padding:0.65rem 0.85rem;background:var(--bg-surface);border:1px solid var(--hairline);">' +
      '        <label for="v12-3d-explode-range" style="font-size:0.8rem;font-weight:700;">' + (enM ? "Explode Layers:" : "Tách lớp giải phẫu:") + '</label>' +
      '        <input id="v12-3d-explode-range" type="range" min="0" max="100" value="' + explodePct + '" style="flex:1;min-width:140px;accent-color:var(--imperial-red);" />' +
      '        <span id="v12-3d-explode-val" class="badge badge-gold">' + explodePct + '%</span>' +
      '        <button type="button" class="btn btn-secondary btn-sm" data-v12-3d-spin="1">' + (autoSpin ? (enM ? "Pause spin" : "Tạm dừng xoay") : (enM ? "Spin 360" : "Xoay 360°")) + '</button>' +
      '      </div>' +
      (presets.length ? (
        '      <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-top:0.5rem;">' +
        presets.map(function (pr, pi) {
          return '<button type="button" class="btn btn-sm ' + (pi === activePresetIdx ? "btn-primary" : "btn-secondary") + '" data-v12-3d-preset="' + pi + '">' + esc(enM ? pr.labelEn : pr.labelVi) + '</button>';
        }).join("") +
        '      </div>'
      ) : "") +
      '    </div>' +
      '    <div style="display:flex;flex-direction:column;gap:0.65rem;">' +
      '      <div class="flashcard-layer" style="margin:0;">' +
      '        <div class="editorial-kicker" style="color:var(--imperial-red);">' + esc(enM ? spec.eraEn : spec.eraVi) + ' · <span class="hanzi">' + esc(spec.titleZh) + '</span></div>' +
      '        <h3 style="margin:0.2rem 0 0.35rem;font-size:1.12rem;">' + esc(enM ? spec.titleEn : spec.titleVi) + '</h3>' +
      '        <div style="font-size:0.79rem;color:var(--text-muted);margin-bottom:0.4rem;">' + esc(spec.dimensionsReal || "") + '</div>' +
      '        <p style="margin:0;font-size:0.84rem;line-height:1.55;color:var(--text-secondary);">' + esc(enM ? spec.learningHighlightEn : spec.learningHighlightVi) + '</p>' +
      '      </div>' +
      '      <div class="editorial-kicker" style="color:var(--jade-green);margin:0.2rem 0 0;">' + (enM ? "7 Structural / Mechanical Layers (Click to Highlight)" : "7 Lớp Kết cấu / Cơ khí Giải phẫu (Chọn để soi sáng)") + '</div>' +
      '      <div style="display:flex;flex-direction:column;gap:0.35rem;">' +
      layers.map(function (ly, li) {
        var on = li === lIdx;
        return (
          '<button type="button" data-v12-3d-layer="' + li + '" style="text-align:left;padding:0.5rem 0.7rem;border:1px solid ' + (on ? "var(--imperial-red)" : "var(--hairline)") + ';background:' + (on ? "var(--bg-accent-soft,rgba(130,28,28,0.08))" : "var(--bg-surface)") + ';color:var(--ink-primary);cursor:pointer;border-radius:2px;">' +
          '  <div style="display:flex;justify-content:space-between;gap:0.5rem;font-size:0.83rem;font-weight:700;">' +
          '    <span>0' + (li + 1) + '. ' + esc(enM ? ly.nameEn : ly.nameVi) + '</span>' +
          '    <span class="hanzi" style="font-weight:400;color:var(--text-muted);">' + esc(ly.nameZh || "") + '</span>' +
          '  </div>' +
          (on ? '<div style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.3rem;line-height:1.5;">' + esc(enM ? ly.mechanicsNoteEn : ly.mechanicsNoteVi) + '</div>' : "") +
          '</button>'
        );
      }).join("") +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
  }

  function bindEvents() {
    if (window._cceV123dBound || typeof document === "undefined") return;
    window._cceV123dBound = true;
    document.addEventListener("click", function (e) {
      var enM = Boolean(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en");
      var mBtn = e.target && e.target.closest ? e.target.closest("[data-v12-3d-model]") : null;
      if (mBtn) {
        activeModelIdx = parseInt(mBtn.getAttribute("data-v12-3d-model"), 10) || 0;
        activeLayerIdx = 0;
        activePresetIdx = 0;
        var sh = document.getElementById("cce-v12-explode-3d-shell");
        if (sh) sh.outerHTML = renderPanel(enM);
        initMountedCanvasIfAny();
        return;
      }
      var lBtn = e.target && e.target.closest ? e.target.closest("[data-v12-3d-layer]") : null;
      if (lBtn) {
        activeLayerIdx = parseInt(lBtn.getAttribute("data-v12-3d-layer"), 10) || 0;
        var sh2 = document.getElementById("cce-v12-explode-3d-shell");
        if (sh2) sh2.outerHTML = renderPanel(enM);
        initMountedCanvasIfAny();
        return;
      }
      var pBtn = e.target && e.target.closest ? e.target.closest("[data-v12-3d-preset]") : null;
      if (pBtn) {
        activePresetIdx = parseInt(pBtn.getAttribute("data-v12-3d-preset"), 10) || 0;
        if (activePresetIdx === 2) explodePct = 85;
        else if (activePresetIdx === 0) explodePct = 20;
        var sh3 = document.getElementById("cce-v12-explode-3d-shell");
        if (sh3) sh3.outerHTML = renderPanel(enM);
        initMountedCanvasIfAny();
        return;
      }
      var sBtn = e.target && e.target.closest ? e.target.closest("[data-v12-3d-spin]") : null;
      if (sBtn) {
        autoSpin = !autoSpin;
        sBtn.textContent = autoSpin ? (enM ? "Pause spin" : "Tạm dừng xoay") : (enM ? "Spin 360" : "Xoay 360°");
      }
    });
    document.addEventListener("input", function (e) {
      if (e.target && e.target.id === "v12-3d-explode-range") {
        explodePct = parseInt(e.target.value, 10) || 0;
        var lbl = document.getElementById("v12-3d-explode-val");
        if (lbl) lbl.textContent = explodePct + "%";
        if (rt && rt.root) applyExplodeOffsets(rt.root, explodePct / 100);
      }
    });
  }
  bindEvents();

  window.CCE_3D_V12_EXPLODE = {
    renderPanel: renderPanel,
    initMountedCanvasIfAny: initMountedCanvasIfAny,
    dispose: dispose
  };
})();
