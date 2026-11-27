/* ============================================================================
 * CHINESE CULTURE EXPLORER V10.4 — Curatorial Dossiers, Atlas & Quiz Views Bridge
 * Powers deep museum dossiers (199/199), Quoc Hoa colophon dossiers (72/72),
 * 34-Province Vietnam Logistics & Itineraries, 12 Study Paths & 830 Bilingual MCQs.
 * Pure ES5 IIFE — CSS variables only (Light/Dark/Sepia AAA), zero UI emojis.
 * ============================================================================ */
(function () {
  "use strict";

  var state = {
    quizPack: "all",
    quizQuery: "",
    quizIdx: 0,
    quizPicked: {},
    museumQuizPicked: {},
    paintingQuizPicked: {},
    hydratingPacks: {},
    hydratedPacks: {}
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function requestHydrate(bundleId, modalOnly) {
    if (!window.CCE_LAZY || typeof window.CCE_LAZY.ensureBundle !== "function") return;
    if (state.hydratingPacks[bundleId] || state.hydratedPacks[bundleId]) return;
    state.hydratingPacks[bundleId] = true;
    window.CCE_LAZY.ensureBundle(bundleId).then(function () {
      state.hydratingPacks[bundleId] = false;
      state.hydratedPacks[bundleId] = true;
      if (modalOnly && typeof window.CCE_RENDER_MODALS === "function") {
        window.CCE_RENDER_MODALS();
      } else if (typeof window.CCE_PATCH_MAIN === "function") {
        window.CCE_PATCH_MAIN();
      } else if (typeof window.CCE_RENDER === "function") {
        window.CCE_RENDER();
      }
    }).catch(function () {
      state.hydratingPacks[bundleId] = false;
    });
  }

  function boxStyle(accent) {
    return (
      "margin-top:1.15rem;padding:1.05rem 1.2rem;background:var(--bg-surface,#F3EFE6);" +
      "color:var(--ink-primary,#1A1918);border:1px solid var(--hairline,rgba(26,25,24,0.14));" +
      "border-top:3px solid " + (accent || "var(--imperial-red,#9E2A2B)") + ";border-radius:3px;"
    );
  }

  function cardStyle() {
    return (
      "padding:0.75rem 0.9rem;background:var(--bg-paper,#FAF7F2);" +
      "color:var(--ink-primary,#1A1918);border:1px solid var(--hairline,rgba(26,25,24,0.14));" +
      "border-radius:2px;margin-bottom:0.65rem;"
    );
  }

  function renderCuratorialQuizBlock(quizItem, keyPrefix, enM, storeMap) {
    if (!quizItem || !quizItem.questionVi || !Array.isArray(quizItem.options)) return "";
    var pickedId = storeMap[keyPrefix];
    var qText = enM && quizItem.questionEn ? quizItem.questionEn : quizItem.questionVi;
    var expText = enM && quizItem.explanationEn ? quizItem.explanationEn : quizItem.explanationVi;
    var optsHtml = quizItem.options.map(function (opt) {
      var isPicked = pickedId === opt.id;
      var isRight = opt.id === quizItem.correctOptionId;
      var border = "1px solid var(--hairline)";
      var bg = "var(--bg-paper)";
      if (pickedId) {
        if (isRight) {
          border = "1px solid var(--jade-green,#1B4D3E)";
          bg = "rgba(27,77,62,0.12)";
        } else if (isPicked) {
          border = "1px solid var(--imperial-red,#9E2A2B)";
          bg = "rgba(158,42,43,0.12)";
        }
      }
      var label = enM && opt.textEn ? opt.textEn : opt.textVi;
      return (
        '<button type="button" data-v104-mini-quiz="' + esc(keyPrefix) + '" data-v104-opt="' + esc(opt.id) + '" ' +
        'style="display:block;width:100%;text-align:left;padding:0.55rem 0.75rem;margin-bottom:0.4rem;' +
        'border:' + border + ';background:' + bg + ';color:var(--ink-primary);border-radius:2px;cursor:pointer;font-size:0.86rem;">' +
        '<strong>' + esc(String(opt.id || "").toUpperCase()) + '.</strong> ' + esc(label) +
        "</button>"
      );
    }).join("");

    return (
      '<div style="' + cardStyle() + 'border-left:3px solid var(--antique-gold,#A6844E);">' +
      '  <div class="editorial-kicker" style="color:var(--antique-gold,#A6844E);margin-bottom:0.25rem;">' +
      (enM ? "CURATORIAL CHECK" : "KIỂM TRA GIÁM TUYỂN") + "</div>" +
      '  <div style="font-weight:700;margin-bottom:0.6rem;font-size:0.9rem;">' + esc(qText) + "</div>" +
      optsHtml +
      (pickedId && expText
        ? '<div style="margin-top:0.5rem;padding:0.55rem 0.7rem;background:var(--bg-surface);border-left:3px solid var(--jade-green);font-size:0.83rem;color:var(--text-secondary);"><strong>' +
          (enM ? "Curatorial Note: " : "Giải thích giám tuyển: ") + "</strong>" + esc(expText) + "</div>"
        : "") +
      "</div>"
    );
  }

  function renderArtifactDeepDossier(art, enM) {
    if (!art) return "";
    var dos = art.v104Dossier || (typeof window.CCE_GET_MUSEUM_DOSSIER === "function" ? window.CCE_GET_MUSEUM_DOSSIER(art) : null);
    if (!dos) {
      if (typeof window.CCE_GET_MUSEUM_DOSSIER !== "function") {
        requestHydrate("v104-museum-pack", true);
        return (
          '<div style="' + boxStyle() + '">' +
          '  <div class="editorial-kicker">' + (enM ? "CURATORIAL ARCHIVE" : "HỒ SƠ GIÁM TUYỂN BẢO TÀNG") + "</div>" +
          '  <p style="margin:0.4rem 0 0;font-size:0.85rem;color:var(--text-secondary);">' +
          (enM ? "Loading extended excavation and conservation dossier..." : "Đang tải hồ sơ khai quật và bảo tồn chuyên sâu...") +
          "</p></div>"
        );
      }
      return "";
    }

    var sections = [
      { k: enM ? "Classification & Status" : "Phân hạng Quốc bảo", v: dos.gradeOrStatusVi },
      { k: enM ? "Provenance & Archaeological Discovery" : "Nguồn gốc & Khai quật Khảo cổ", v: dos.provenanceAndDiscoveryVi || dos.provenanceAndExcavationVi },
      { k: enM ? "Materials, Dimensions & Craftsmanship" : "Chất liệu, Kích thước & Kỹ nghệ Chế tác", v: dos.materialsDimensionsAndCraftVi || dos.dimensionsAndMaterialVi },
      { k: enM ? "Iconography & Inscription Decoding" : "Giải mã Hoa văn & Minh văn", v: dos.iconographyAndInscriptionDecodingVi || dos.iconographyAndInscriptionVi },
      { k: enM ? "Historical Significance & Conservation" : "Ý nghĩa Lịch sử & Bảo tồn Khoa học", v: dos.scientificAndConservationNotesVi || dos.historicalSignificanceVi },
      { k: enM ? "Sino–Vietnamese Comparative Lens" : "Đối chiếu Văn hiến Việt – Trung", v: dos.sinoVietnamComparativeVi },
      { k: enM ? "Museum Viewing Guide" : "Gợi ý Quan sát Tại Bảo tàng", v: dos.galleryViewingTipsVi }
    ];

    var quizHtml = "";
    if (Array.isArray(dos.curatorialQuiz) && dos.curatorialQuiz.length) {
      quizHtml = renderCuratorialQuizBlock(
        dos.curatorialQuiz[0],
        "museum:" + String(art.id || dos.slug || "item"),
        enM,
        state.museumQuizPicked
      );
    }

    var v12HsBox = "";
    var hsAll = window.CCE_V12_HOTSPOTS;
    if (hsAll && Array.isArray(hsAll.treasures15)) {
      var aidLow = String(art.id || "").toLowerCase();
      var hMatch = hsAll.treasures15.filter(function (x) {
        return x.slug === aidLow || aidLow.indexOf(x.slug) >= 0 || x.slug.indexOf(aidLow) >= 0;
      })[0];
      if (hMatch) {
        v12HsBox = (
          '<div style="' + cardStyle() + 'border-left:3px solid var(--jade-green);">' +
          '  <strong style="display:block;font-size:0.84rem;color:var(--jade-green);margin-bottom:0.25rem;">' +
          (enM ? "Alloys, Inscriptions & 3.2x Inspection Hotspots" : "Hợp kim/Chất liệu, Minh văn & Điểm soi 3.2x") + "</strong>" +
          (hMatch.mineralPigmentsOrAlloy ? '<div style="font-size:0.82rem;margin-bottom:0.3rem;"><strong>' + (enM ? "Material: " : "Chế tác: ") + "</strong>" + esc(hMatch.mineralPigmentsOrAlloy) + "</div>" : "") +
          (hMatch.sealsAndInscriptions ? '<div style="font-size:0.82rem;margin-bottom:0.35rem;"><strong>' + (enM ? "Inscriptions: " : "Minh văn: ") + "</strong>" + esc(hMatch.sealsAndInscriptions) + "</div>" : "") +
          (Array.isArray(hMatch.zoomHotspots) ? hMatch.zoomHotspots.map(function (zh, zi) {
            return '<div style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.25rem;"><strong>#' + (zi + 1) + " " + esc(enM ? zh.titleEn : zh.titleVi) + ":</strong> " + esc(enM ? zh.detailEn : zh.detailVi) + "</div>";
          }).join("") : "") +
          "</div>"
        );
      }
    }

    return (
      '<section id="v104-museum-deep-dossier" style="' + boxStyle("var(--imperial-red)") + '">' +
      '  <div class="editorial-kicker" style="color:var(--imperial-red);margin-bottom:0.25rem;">' +
      (enM ? "CURATORIAL DEEP DOSSIER · NATIONAL ARCHIVE" : "HỒ SƠ GIÁM TUYỂN CHUYÊN SÂU · TƯ LIỆU BẢO TÀNG") +
      "  </div>" +
      '  <h3 style="margin:0 0 0.75rem;font-size:1.08rem;">' +
      esc(enM ? (art.nameEn || art.nameVi) : art.nameVi) +
      (art.nameZh ? ' <span class="hanzi" style="font-weight:400;color:var(--text-muted);">' + esc(art.nameZh) + "</span>" : "") +
      "  </h3>" +
      sections.filter(function (s) { return Boolean(s.v); }).map(function (s) {
        return (
          '<div style="' + cardStyle() + '">' +
          '  <strong style="display:block;font-size:0.84rem;color:var(--imperial-red);margin-bottom:0.25rem;">' + esc(s.k) + "</strong>" +
          '  <div style="font-size:0.86rem;line-height:1.62;color:var(--text-secondary);">' + esc(s.v) + "</div>" +
          "</div>"
        );
      }).join("") +
      v12HsBox +
      quizHtml +
      "</section>"
    );
  }

  function renderPaintingDeepDossier(p, enM) {
    if (!p) return "";
    var dos = typeof window.CCE_GET_QUOCHOA_DOSSIER === "function" ? window.CCE_GET_QUOCHOA_DOSSIER(p) : null;
    if (!dos) {
      if (typeof window.CCE_GET_QUOCHOA_DOSSIER !== "function") {
        requestHydrate("v104-paintings-pack", true);
        return (
          '<div style="' + boxStyle("var(--antique-gold)") + '">' +
          '  <div class="editorial-kicker">' + (enM ? "CONNOISSEURSHIP & COLOPHON DOSSIER" : "HỒ SƠ ĐỀ BẠT, ẤN TRIỆN & BÚT PHÁP") + "</div>" +
          '  <p style="margin:0.4rem 0 0;font-size:0.85rem;color:var(--text-secondary);">' +
          (enM ? "Loading 72-masterpiece colophon and brushwork dossier..." : "Đang tải hồ sơ ấn triện, đề bạt và giải phẫu bút pháp 72 Quốc họa...") +
          "</p></div>"
        );
      }
      return "";
    }

    var blocks = [
      { k: enM ? "Brushwork & Ink Anatomy" : "Giải phẫu Bút pháp & Mặc pháp", v: dos.brushworkAndInkAnatomyVi },
      { k: enM ? "Composition & Spatial Geometry" : "Bố cục & Hình học Không gian", v: dos.compositionAndSpatialGeometryVi },
      { k: enM ? "Colophons, Imperial Seals & Provenance" : "Đề bạt (Hậu bạt), Ấn triện & Phả hệ Lưu truyền", v: dos.colophonsSealsAndProvenanceVi },
      { k: enM ? "Cultural Philosophy & Aesthetics" : "Triết học & Mỹ học Văn nhân", v: dos.culturalPhilosophyAndAestheticsVi },
      { k: enM ? "Sino–Vietnamese Art Dialogue" : "Đối thoại Mỹ thuật Việt – Trung", v: dos.sinoVietnamArtDialogueVi }
    ];

    var zonesHtml = "";
    if (Array.isArray(dos.keyVisualDetailsToInspect) && dos.keyVisualDetailsToInspect.length) {
      zonesHtml = (
        '<div style="' + cardStyle() + '">' +
        '  <strong style="display:block;font-size:0.84rem;color:var(--jade-green);margin-bottom:0.45rem;">' +
        (enM ? "Key Visual Zones to Inspect" : "Các vùng chi tiết cần soi trên cuộn tranh") + "</strong>" +
        dos.keyVisualDetailsToInspect.map(function (z) {
          return (
            '<div style="padding:0.45rem 0.6rem;border-left:2px solid var(--antique-gold,#A6844E);margin-bottom:0.4rem;background:var(--bg-surface);">' +
            '  <div style="font-weight:700;font-size:0.84rem;">' + esc(z.zoneVi) + "</div>" +
            '  <div style="font-size:0.82rem;color:var(--text-secondary);line-height:1.5;">' + esc(z.detailVi) + "</div>" +
            "</div>"
          );
        }).join("") +
        "</div>"
      );
    }

    var quizHtml = dos.curatorialQuiz
      ? renderCuratorialQuizBlock(dos.curatorialQuiz, "painting:" + String(p.id || dos.slug), enM, state.paintingQuizPicked)
      : "";

    var pHsBox = "";
    var hsP = window.CCE_V12_HOTSPOTS;
    if (hsP && Array.isArray(hsP.paintings15)) {
      var pidLow = String(p.id || dos.slug || "").toLowerCase();
      var pMatch = hsP.paintings15.filter(function (x) {
        return x.slug === pidLow || pidLow.indexOf(x.slug) >= 0 || x.slug.indexOf(pidLow) >= 0;
      })[0];
      if (pMatch) {
        pHsBox = (
          '<div style="' + cardStyle() + 'border-left:3px solid var(--imperial-red);">' +
          '  <strong style="display:block;font-size:0.84rem;color:var(--imperial-red);margin-bottom:0.25rem;">' +
          (enM ? "Mineral Pigments, Seals & 3.2x Zoom Markers" : "Khoáng sắc Đan thanh, Ấn giám & Điểm soi 3.2x") + "</strong>" +
          (pMatch.mineralPigmentsOrAlloy ? '<div style="font-size:0.82rem;margin-bottom:0.3rem;"><strong>' + (enM ? "Pigments: " : "Sắc tố: ") + "</strong>" + esc(pMatch.mineralPigmentsOrAlloy) + "</div>" : "") +
          (pMatch.sealsAndInscriptions ? '<div style="font-size:0.82rem;margin-bottom:0.35rem;"><strong>' + (enM ? "Seals: " : "Ấn triện: ") + "</strong>" + esc(pMatch.sealsAndInscriptions) + "</div>" : "") +
          (Array.isArray(pMatch.zoomHotspots) ? pMatch.zoomHotspots.map(function (zh, zi) {
            return '<div style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.25rem;"><strong>#' + (zi + 1) + " " + esc(enM ? zh.titleEn : zh.titleVi) + ":</strong> " + esc(enM ? zh.detailEn : zh.detailVi) + "</div>";
          }).join("") : "") +
          "</div>"
        );
      }
    }

    return (
      '<section id="v104-painting-deep-dossier" style="' + boxStyle("var(--antique-gold,#A6844E)") + '">' +
      '  <div class="editorial-kicker" style="color:var(--antique-gold,#A6844E);margin-bottom:0.25rem;">' +
      (enM ? "72 MASTERPIECES ARCHIVE · SEALS & COLOPHONS" : "HỒ SƠ GIÁM ĐỊNH 72 QUỐC HỌA · ẤN TRIỆN & ĐỀ BẠT") + "</div>" +
      (dos.formatAndDimensionsVi || dos.currentMuseumVi
        ? '<div style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.75rem;">' +
          (dos.formatAndDimensionsVi ? '<span><strong>' + (enM ? "Format:" : "Quy cách:") + "</strong> " + esc(dos.formatAndDimensionsVi) + "</span>" : "") +
          (dos.currentMuseumVi ? ' · <span><strong>' + (enM ? "Holding:" : "Lưu giữ:") + "</strong> " + esc(dos.currentMuseumVi) + "</span>" : "") +
          "</div>"
        : "") +
      blocks.filter(function (b) { return Boolean(b.v); }).map(function (b) {
        return (
          '<div style="' + cardStyle() + '">' +
          '  <strong style="display:block;font-size:0.84rem;color:var(--imperial-red);margin-bottom:0.25rem;">' + esc(b.k) + "</strong>" +
          '  <div style="font-size:0.86rem;line-height:1.62;color:var(--text-secondary);">' + esc(b.v) + "</div>" +
          "</div>"
        );
      }).join("") +
      zonesHtml +
      pHsBox +
      quizHtml +
      "</section>"
    );
  }

  function renderProvinceMasterAtlas(prov, enM) {
    if (!prov) return "";
    var atlas = typeof window.CCE_GET_PROVINCE_ATLAS === "function" ? window.CCE_GET_PROVINCE_ATLAS(prov) : null;
    if (!atlas) {
      if (typeof window.CCE_GET_PROVINCE_ATLAS !== "function") {
        requestHydrate("v104-provinces-pack", false);
        return (
          '<div style="' + boxStyle("var(--jade-green)") + '">' +
          '  <div class="editorial-kicker">' + (enM ? "PROVINCIAL MASTER ATLAS & VIETNAM LOGISTICS" : "HỒ SƠ TỔNG HỢP 34 TỈNH & LOGISTICS VIỆT NAM") + "</div>" +
          '  <p style="margin:0.35rem 0 0;font-size:0.85rem;color:var(--text-secondary);">' +
          (enM ? "Loading 5-day cultural itinerary and Vietnam travel logistics..." : "Đang tải lịch trình 5 ngày và cẩm nang di chuyển từ Việt Nam...") +
          "</p></div>"
        );
      }
      return "";
    }

    var sitesHtml = "";
    if (Array.isArray(atlas.flagshipMuseumsAndSites) && atlas.flagshipMuseumsAndSites.length) {
      sitesHtml = (
        '<div style="' + cardStyle() + '">' +
        '  <strong style="display:block;font-size:0.84rem;color:var(--imperial-red);margin-bottom:0.45rem;">' +
        (enM ? "Flagship Museums & Heritage Sites" : "Bảo tàng & Di sản Trọng điểm") + "</strong>" +
        '  <div class="grid grid-2" style="gap:0.5rem;">' +
        atlas.flagshipMuseumsAndSites.map(function (st) {
          return (
            '<div style="padding:0.55rem 0.7rem;background:var(--bg-surface);border:1px solid var(--hairline);border-radius:2px;">' +
            '  <div style="font-weight:700;font-size:0.84rem;">' + esc(st.nameVi) + "</div>" +
            '  <div style="font-size:0.75rem;color:var(--jade-green);margin-bottom:0.2rem;">' + esc(st.cityVi) + "</div>" +
            '  <div style="font-size:0.8rem;color:var(--text-secondary);line-height:1.48;">' + esc(st.highlightVi) + "</div>" +
            "</div>"
          );
        }).join("") +
        "  </div></div>"
      );
    }

    var items = [
      { k: enM ? "Historical & Geo-Cultural Identity" : "Căn tính Lịch sử & Địa văn hóa", v: atlas.historicalIdentityVi },
      { k: enM ? "Architectural & Craft Signature" : "Dấu ấn Kiến trúc & Thủ công Mỹ nghệ", v: atlas.architecturalAndCraftSignatureVi },
      { k: enM ? "Culinary & Intangible Heritage Profile" : "Ẩm thực Bản địa & Di sản Phi vật thể", v: atlas.culinaryAndIntangibleProfileVi },
      { k: enM ? "Recommended 3–5 Day Cultural Itinerary" : "Lịch trình Văn hóa 3–5 Ngày Đề xuất", v: atlas.recommendedItineraryVi },
      { k: enM ? "Vietnam Flights, 12306 HSR, Best Season & WeChat Booking" : "Hành trang Thực địa Việt Nam (Đường bay, 12306, Mùa đẹp & WeChat)", v: atlas.vietnameseLogisticsAndSeasonVi }
    ];

    var hsrBox = "";
    var fa = window.CCE_V12_FIELD_ATLAS;
    if (fa && Array.isArray(fa.hsrHubs34)) {
      var hMatch = fa.hsrHubs34.filter(function (h) { return h.provinceId === prov.id; })[0];
      if (hMatch) {
        hsrBox = (
          '<div style="' + cardStyle() + 'border-left:3px solid var(--imperial-red);">' +
          '  <strong style="display:block;font-size:0.84rem;color:var(--imperial-red);margin-bottom:0.25rem;">' +
          (enM ? "12306 High-Speed Rail, Airport & 240h Transit Protocol" : "Ga Cao Tốc 12306, Sân Bay & Quy Chuẩn Quá Cảnh 240 Giờ") + "</strong>" +
          '  <div style="font-size:0.84rem;line-height:1.58;color:var(--text-secondary);">' +
          '    <div><strong>' + (enM ? "Main HSR Hub: " : "Ga chính 12306: ") + '</strong><span class="hanzi">' + esc(hMatch.mainHsrStationZh) + "</span> (" + esc(hMatch.mainHsrStationPinyin) + ")</div>" +
          '    <div><strong>' + (enM ? "Airport: " : "Sân bay: ") + "</strong>" + esc(hMatch.airportCodeAndNameZh) + "</div>" +
          '    <div><strong>' + (enM ? "Corridors: " : "Tuyến nối: ") + "</strong>" + esc(enM ? hMatch.corridorConnectionsEn : hMatch.corridorConnectionsVi) + "</div>" +
          '    <div><strong>' + (enM ? "Metro/QR: " : "Thanh toán tàu điện: ") + "</strong>" + esc(enM ? hMatch.metroPaymentTipEn : hMatch.metroPaymentTipVi) + "</div>" +
          '    <div><strong>' + (enM ? "240h Visa: " : "Quá cảnh 240h: ") + "</strong>" + esc(enM ? hMatch.portEntry240hEn : hMatch.portEntry240hVi) + "</div>" +
          '    <div><strong>' + (enM ? "Museum Booking: " : "Đặt vé bảo tàng: ") + "</strong>" + esc(enM ? hMatch.mustVisitMuseumBookingEn : hMatch.mustVisitMuseumBookingVi) + "</div>" +
          "  </div>" +
          "</div>"
        );
      }
    }

    return (
      '<section id="v104-province-master-atlas" style="' + boxStyle("var(--jade-green,#1B4D3E)") + 'margin-bottom:1.15rem;">' +
      '  <div class="editorial-kicker" style="color:var(--jade-green);margin-bottom:0.25rem;">' +
      (enM ? "MASTER PROVINCIAL ATLAS · 34 PROVINCES" : "ĐỊA VĂN HÓA CHUYÊN SÂU & HÀNH TRANG VIỆT NAM · 34 TỈNH") + "</div>" +
      '  <h4 style="margin:0 0 0.75rem;font-size:1.05rem;">' +
      esc(enM ? (atlas.nameEn || atlas.nameVi) : atlas.nameVi) +
      ' <span class="hanzi" style="font-weight:400;color:var(--text-muted);">' + esc(atlas.nameZh) + "</span>" +
      (atlas.capitalOrHubVi ? ' · <span style="font-size:0.84rem;font-weight:500;color:var(--text-muted);">' + esc(atlas.capitalOrHubVi) + "</span>" : "") +
      "  </h4>" +
      items.filter(function (x) { return Boolean(x.v); }).map(function (x) {
        return (
          '<div style="' + cardStyle() + '">' +
          '  <strong style="display:block;font-size:0.84rem;color:var(--jade-green);margin-bottom:0.25rem;">' + esc(x.k) + "</strong>" +
          '  <div style="font-size:0.85rem;line-height:1.6;color:var(--text-secondary);">' + esc(x.v) + "</div>" +
          "</div>"
        );
      }).join("") +
      hsrBox +
      sitesHtml +
      "</section>"
    );
  }

  function getFilteredQuiz830() {
    var raw = window.CCE_MASTER_QUIZ_830;
    if (!Array.isArray(raw)) return [];
    var pk = state.quizPack || "all";
    var q = String(state.quizQuery || "").trim().toLowerCase();
    return raw.filter(function (item) {
      if (pk !== "all" && item.pack !== pk) return false;
      if (!q) return true;
      var hay = [
        item.monographId || "",
        item.qVi || "",
        item.qEn || "",
        item.explanationVi || "",
        item.explanationEn || ""
      ].join(" ").toLowerCase();
      return hay.indexOf(q) >= 0;
    });
  }

  function renderMasterQuiz830Arena(enM) {
    var raw = window.CCE_MASTER_QUIZ_830;
    if (!window.CCE_STUDY_PATHS_12) requestHydrate("v104-quiz-pack", false);
    if (!window.CCE_V12_B2B_QUIZ) requestHydrate("v12-b2b-quiz-pack", false);
    if (!Array.isArray(raw) || raw.length === 0) {
      return (
        '<section id="v104-quiz-830-arena" style="' + boxStyle("var(--imperial-red)") + 'margin-bottom:1.75rem;">' +
        '  <div class="editorial-kicker" style="color:var(--imperial-red);">' +
        (enM ? "1,000 BILINGUAL ASSESSMENT BANK · LOADING" : "NGÂN HÀNG 1.000 CÂU HỎI SONG NGỮ · ĐANG TẢI") + "</div>" +
        '  <h3 style="margin:0.35rem 0;">' + (enM ? "Loading 1,000 curated bilingual MCQs..." : "Đang nạp ngân hàng 1.000 câu hỏi trắc nghiệm học thuật Việt – Anh...") + "</h3>" +
        '  <p style="margin:0;font-size:0.85rem;color:var(--text-secondary);">' +
        (enM ? "The interactive deck will appear automatically once the assessment bundle is ready." : "Bộ đề tương tác sẽ hiển thị ngay khi gói dữ liệu hoàn tất tải.") + "</p></section>"
      );
    }

    var packsMap = {};
    for (var i = 0; i < raw.length; i++) {
      if (raw[i] && raw[i].pack) packsMap[raw[i].pack] = true;
    }
    var packs = Object.keys(packsMap);
    var filtered = getFilteredQuiz830();
    var idx = filtered.length ? Math.max(0, Math.min(state.quizIdx, filtered.length - 1)) : 0;
    state.quizIdx = idx;
    var cur = filtered[idx] || null;

    var answeredCount = 0;
    var correctCount = 0;
    for (var j = 0; j < raw.length; j++) {
      var ans = state.quizPicked[raw[j].id];
      if (ans !== undefined) {
        answeredCount++;
        if (ans === raw[j].correctIndex) correctCount++;
      }
    }

    var curPicked = cur ? state.quizPicked[cur.id] : undefined;
    var opts = cur ? (enM && Array.isArray(cur.optionsEn) ? cur.optionsEn : cur.optionsVi) : [];
    var qPrompt = cur ? (enM && cur.qEn ? cur.qEn : cur.qVi) : "";
    var qExp = cur ? (enM && cur.explanationEn ? cur.explanationEn : cur.explanationVi) : "";

    return (
      '<section id="v104-quiz-830-arena" style="' + boxStyle("var(--imperial-red)") + 'margin-bottom:2rem;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' +
      (enM ? ("BILINGUAL MASTERY ASSESSMENT BANK · " + raw.length + " MCQS") : ("NGÂN HÀNG TRẮC NGHIỆM CHUYÊN SÂU SONG NGỮ · " + raw.length + " CÂU HỎI")) + "</div>" +
      '      <h3 style="margin:0.2rem 0 0;font-family:var(--font-editorial);font-size:1.38rem;">' +
      (enM ? "Curated Verification Bank (Monographs, Law, Science, Classics)" : "Kiểm Tra Kiến Thức Theo Chuyên Luận (Sử – Triết – Mỹ thuật – Pháp chế)") + "</h3>" +
      "    </div>" +
      '    <div style="font-family:var(--font-mono);font-size:0.82rem;padding:0.35rem 0.7rem;background:var(--bg-paper);border:1px solid var(--hairline);">' +
      (enM ? "Answered: " : "Đã làm: ") + answeredCount + "/" + raw.length + " · " +
      (enM ? "Correct: " : "Đúng: ") + '<strong style="color:var(--jade-green);">' + correctCount + "</strong>" +
      "    </div>" +
      "  </div>" +
      '  <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-bottom:0.9rem;">' +
      '    <select id="v104-quiz-pack-select" class="form-select" style="max-width:220px;font-size:0.84rem;" aria-label="' + (enM ? "Filter question pack" : "Lọc theo bộ chuyên đề") + '">' +
      '      <option value="all"' + (state.quizPack === "all" ? " selected" : "") + ">" + (enM ? "All Packs (" + raw.length + ")" : "Tất cả bộ đề (" + raw.length + ")") + "</option>" +
      packs.map(function (pk) {
        return '<option value="' + esc(pk) + '"' + (state.quizPack === pk ? " selected" : "") + ">" + esc(pk) + "</option>";
      }).join("") +
      "    </select>" +
      '    <input id="v104-quiz-search-input" type="text" class="form-input" value="' + esc(state.quizQuery) + '" placeholder="' + (enM ? "Search topic, figure, monograph ID..." : "Tìm theo chủ đề, nhân vật, tên chuyên luận...") + '" style="flex:1;min-width:210px;font-size:0.84rem;" />' +
      "  </div>" +
      (cur ? (
        '<div style="' + cardStyle() + '">' +
        '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.55rem;font-size:0.78rem;color:var(--text-muted);">' +
        '    <span><strong>' + esc(cur.pack || "V10.4") + "</strong> · " + (enM ? "Question " : "Câu ") + (idx + 1) + " / " + filtered.length + "</span>" +
        (cur.monographId ? '<button type="button" class="btn btn-ghost btn-sm" data-action="open-article" data-id="' + esc(cur.monographId) + '" style="font-size:0.76rem;padding:0.15rem 0.45rem;">' + (enM ? "Open Monograph →" : "Mở chuyên luận gốc →") + "</button>" : "") +
        "  </div>" +
        '  <div style="font-weight:700;font-size:0.96rem;line-height:1.55;margin-bottom:0.75rem;">' + esc(qPrompt) + "</div>" +
        opts.map(function (opText, oIdx) {
          var isPicked = curPicked === oIdx;
          var isRight = oIdx === cur.correctIndex;
          var border = "1px solid var(--hairline)";
          var bg = "var(--bg-surface)";
          if (curPicked !== undefined) {
            if (isRight) {
              border = "1px solid var(--jade-green,#1B4D3E)";
              bg = "rgba(27,77,62,0.14)";
            } else if (isPicked) {
              border = "1px solid var(--imperial-red,#9E2A2B)";
              bg = "rgba(158,42,43,0.14)";
            }
          }
          return (
            '<button type="button" data-v104-quiz-answer="' + oIdx + '" ' +
            'style="display:block;width:100%;text-align:left;padding:0.6rem 0.85rem;margin-bottom:0.45rem;' +
            'border:' + border + ';background:' + bg + ';color:var(--ink-primary);border-radius:2px;cursor:pointer;font-size:0.88rem;line-height:1.48;">' +
            '<strong>' + String.fromCharCode(65 + oIdx) + ".</strong> " + esc(opText) +
            "</button>"
          );
        }).join("") +
        (curPicked !== undefined && qExp ? (
          '<div style="margin-top:0.6rem;padding:0.65rem 0.85rem;background:var(--bg-surface);border-left:3px solid var(--jade-green);font-size:0.84rem;color:var(--text-secondary);line-height:1.58;">' +
          '  <strong style="color:var(--jade-green);">' + (enM ? "Explanation: " : "Giải thích: ") + "</strong>" + esc(qExp) +
          "</div>"
        ) : "") +
        '  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.8rem;gap:0.5rem;">' +
        '    <button type="button" class="btn btn-secondary btn-sm" data-v104-quiz-step="-1" ' + (idx === 0 ? "disabled" : "") + ">" + (enM ? "← Previous" : "← Câu trước") + "</button>" +
        '    <button type="button" class="btn btn-primary btn-sm" data-v104-quiz-step="1" ' + (idx >= filtered.length - 1 ? "disabled" : "") + ">" + (enM ? "Next Question →" : "Câu tiếp theo →") + "</button>" +
        "  </div>" +
        "</div>"
      ) : (
        '<div style="' + cardStyle() + '">' + (enM ? "No matching questions found." : "Không tìm thấy câu hỏi phù hợp bộ lọc.") + "</div>"
      )) +
      "</section>"
    );
  }

  function renderStudyPaths12(enM) {
    var paths = window.CCE_STUDY_PATHS_12;
    if (!Array.isArray(paths) || !paths.length) {
      requestHydrate("v104-quiz-pack", false);
      return "";
    }
    return (
      '<section id="v104-study-paths-12" style="margin-top:2rem;">' +
      '  <div class="editorial-kicker" style="color:var(--jade-green);margin-bottom:0.25rem;">' +
      (enM ? "CURATED THEMATIC STUDY PATHS · 12 TRACKS" : "12 LỘ TRÌNH CHUYÊN SÂU LIÊN NGÀNH") + "</div>" +
      '  <h3 style="font-family:var(--font-editorial);font-size:1.48rem;margin:0 0 1rem;">' +
      (enM ? "12 Structured Tracks Across Philosophy, Art & Field Geography" : "12 Tuyến Khảo Cứu Liên Kết Triết học – Mỹ thuật – Địa văn hóa") + "</h3>" +
      '  <div class="grid grid-2" style="gap:0.9rem;">' +
      paths.map(function (pt, idx) {
        var cats = Array.isArray(pt.categories) ? pt.categories : [];
        var provs = Array.isArray(pt.provinceCodes) ? pt.provinceCodes : [];
        return (
          '<article style="' + cardStyle() + 'border-top:3px solid var(--jade-green);padding:0.95rem 1.05rem;">' +
          '  <div style="font-family:var(--font-mono);font-size:0.74rem;color:var(--jade-green);margin-bottom:0.2rem;">TRACK ' +
          String(idx + 1).padStart(2, "0") + (provs.length ? " · " + esc(provs.slice(0, 5).join(" · ")) : "") + "</div>" +
          '  <h4 style="margin:0 0 0.4rem;font-size:1.02rem;">' + esc(enM && pt.titleEn ? pt.titleEn : pt.titleVi) + "</h4>" +
          '  <p style="margin:0 0 0.7rem;font-size:0.84rem;line-height:1.55;color:var(--text-secondary);">' + esc(pt.descriptionVi || "") + "</p>" +
          '  <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">' +
          cats.map(function (c) {
            return '<button type="button" class="btn btn-secondary btn-sm" style="font-size:0.75rem;" data-action="nav" data-page="' + esc(c) + '">' + esc(c) + " →</button>";
          }).join("") +
          "  </div>" +
          "</article>"
        );
      }).join("") +
      "  </div>" +
      "</section>"
    );
  }

  function bindEvents() {
    if (window._v104ViewsBound || typeof document === "undefined") return;
    window._v104ViewsBound = true;

    document.addEventListener("click", function (e) {
      var mq = e.target && e.target.closest ? e.target.closest("[data-v104-mini-quiz]") : null;
      if (mq) {
        var key = mq.getAttribute("data-v104-mini-quiz");
        var opt = mq.getAttribute("data-v104-opt");
        if (key && key.indexOf("museum:") === 0) state.museumQuizPicked[key] = opt;
        else if (key) state.paintingQuizPicked[key] = opt;
        if (typeof window.CCE_RENDER_MODALS === "function") window.CCE_RENDER_MODALS();
        return;
      }

      var ans = e.target && e.target.closest ? e.target.closest("[data-v104-quiz-answer]") : null;
      if (ans) {
        var list = getFilteredQuiz830();
        var item = list[state.quizIdx];
        if (item) {
          state.quizPicked[item.id] = parseInt(ans.getAttribute("data-v104-quiz-answer"), 10);
          var slot = document.getElementById("v104-quiz-830-arena");
          if (slot && slot.parentNode) {
            var enM = window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en";
            slot.outerHTML = renderMasterQuiz830Arena(enM);
          }
        }
        return;
      }

      var step = e.target && e.target.closest ? e.target.closest("[data-v104-quiz-step]") : null;
      if (step) {
        var dir = parseInt(step.getAttribute("data-v104-quiz-step"), 10) || 1;
        var items = getFilteredQuiz830();
        state.quizIdx = Math.max(0, Math.min(items.length - 1, state.quizIdx + dir));
        var box = document.getElementById("v104-quiz-830-arena");
        if (box) {
          var isEn = window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en";
          box.outerHTML = renderMasterQuiz830Arena(isEn);
        }
      }
    });

    document.addEventListener("change", function (e) {
      if (e.target && e.target.id === "v104-quiz-pack-select") {
        state.quizPack = e.target.value || "all";
        state.quizIdx = 0;
        var box = document.getElementById("v104-quiz-830-arena");
        if (box) {
          var isEn = window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en";
          box.outerHTML = renderMasterQuiz830Arena(isEn);
        }
      }
    });

    document.addEventListener("input", function (e) {
      if (e.target && e.target.id === "v104-quiz-search-input") {
        state.quizQuery = e.target.value || "";
        state.quizIdx = 0;
        var box = document.getElementById("v104-quiz-830-arena");
        if (box) {
          var isEn = window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en";
          var val = e.target.value;
          box.outerHTML = renderMasterQuiz830Arena(isEn);
          var refocused = document.getElementById("v104-quiz-search-input");
          if (refocused) {
            refocused.value = val;
            refocused.focus();
          }
        }
      }
    });
  }
  bindEvents();

  window.CCE_V104_VIEWS = {
    version: "10.4",
    renderArtifactDeepDossier: renderArtifactDeepDossier,
    renderPaintingDeepDossier: renderPaintingDeepDossier,
    renderProvinceMasterAtlas: renderProvinceMasterAtlas,
    renderMasterQuiz830Arena: renderMasterQuiz830Arena,
    renderStudyPaths12: renderStudyPaths12
  };
})();
