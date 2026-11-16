# -*- coding: utf-8 -*-
"""
Generate and test the JavaScript implementation of Paintings Exhibition View
"""

PAINTINGS_JS = r'''
  // ==========================================================================
  // MASTERPIECES OF CHINESE TRADITIONAL PAINTING (中国国画经典 • 数字艺术博物馆)
  // Curated Exhibition of 54 Monumental Masterpieces across 7 Dynastic Eras & 9 Genres
  // ==========================================================================

  function getFilteredPaintings() {
    const list = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    const q = normalizeText(ui.paintingsQuery || "");
    const era = ui.paintingsEraFilter || "all";
    const genre = ui.paintingsGenreFilter || "all";
    const museum = ui.paintingsMuseumFilter || "all";
    const attr = ui.paintingsAttributionFilter || "all";

    return list.filter((p) => {
      if (era !== "all" && p.eraId !== era) return false;
      if (genre !== "all" && !(p.genres || [p.genreId]).includes(genre)) return false;
      if (museum !== "all" && !p.museum.includes(museum)) return false;
      if (attr !== "all" && !p.attribution.includes(attr)) return false;

      if (!q) return true;
      const matchFields = [
        p.titleVi,
        p.titleZh,
        p.pinyin,
        p.titleEn,
        p.artist.nameVi,
        p.artist.nameZh,
        p.artist.pinyin,
        p.material,
        p.museum,
        p.genreLabel,
        p.attribution,
        p.analysis.historicalBackground,
        p.analysis.brushwork,
        p.analysis.philosophicalMeaning
      ];
      return matchFields.some((f) => f && normalizeText(f).includes(q));
    }).sort((a, b) => {
      if (ui.paintingsSort === "title") return a.titleVi.localeCompare(b.titleVi, "vi");
      if (ui.paintingsSort === "artist") return a.artist.nameVi.localeCompare(b.artist.nameVi, "vi");
      // Default chronological by index in master dataset
      return list.indexOf(a) - list.indexOf(b);
    });
  }

  function renderPaintingsGridContent() {
    const filtered = getFilteredPaintings();
    if (!filtered.length) {
      return `
        <div class="card" style="text-align:center;padding:3rem 1.5rem;grid-column:1/-1;">
          <div style="font-size:2.4rem;margin-bottom:0.75rem;">🎨</div>
          <h3 style="font-family:var(--font-editorial);font-size:1.5rem;margin-bottom:0.5rem;">Không tìm thấy kiệt tác phù hợp</h3>
          <p style="color:var(--text-muted);max-width:520px;margin:0 auto 1.25rem;">
            Hãy thử tìm bằng từ khóa khác (ví dụ: Lạc Thần, Khê Sơn, Tảo Xuân, Phú Xuân, 范宽, Tề Bạch Thạch) hoặc xóa bộ lọc để chiêm ngưỡng toàn bộ 54 kiệt tác.
          </p>
          <button type="button" class="btn btn-secondary btn-sm" data-action="clear-paintings-filters">✕ Xóa bộ lọc Quốc họa</button>
        </div>
      `;
    }

    if (ui.paintingsViewMode === "list") {
      return `
        <div style="grid-column:1/-1;display:flex;flex-direction:column;gap:0.75rem;">
          ${filtered.map((p) => {
            const fav = Store.isBookmarked("painting", p.id);
            return `
              <div class="card" style="display:flex;gap:1.25rem;align-items:center;padding:1rem;flex-wrap:wrap;">
                <div style="width:140px;height:95px;border-radius:var(--radius-md);overflow:hidden;background:#1b1b19;cursor:pointer;flex-shrink:0;" data-action="open-painting-detail" data-id="${p.id}">
                  <img src="${p.image}" alt="${escapeHtml(p.titleVi)}" style="width:100%;height:100%;object-fit:cover;" onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'" />
                </div>
                <div style="flex:1;min-width:240px;">
                  <div style="display:flex;gap:0.4rem;align-items:center;margin-bottom:0.25rem;flex-wrap:wrap;">
                    <span class="painting-card-title-zh" style="font-size:1.1rem;margin:0;">${p.titleZh}</span>
                    <span class="pinyin" style="font-size:0.8rem;">(${p.pinyin})</span>
                    <span class="badge badge-gold" style="font-size:0.7rem;">${p.dynasty.nameVi}</span>
                    <span class="painting-attribution-tag" style="font-size:0.68rem;">${escapeHtml(p.attribution.split("—")[0].trim())}</span>
                  </div>
                  <strong style="font-family:var(--font-editorial);font-size:1.05rem;display:block;">${p.titleVi} • ${escapeHtml(p.titleEn)}</strong>
                  <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:0.25rem;">
                    <strong>${p.artist.nameVi} (${p.artist.nameZh})</strong> • ${p.creationDate} • ${p.material} • ${p.dimensions}
                  </div>
                  <div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.2rem;">🏛️ ${p.museum}</div>
                </div>
                <div style="display:flex;gap:0.4rem;align-items:center;">
                  <button type="button" class="btn btn-primary btn-sm" data-action="open-painting-detail" data-id="${p.id}">Khảo cứu (9 Chiều)</button>
                  <button type="button" class="btn btn-secondary btn-sm" data-action="open-painting-zoom" data-id="${p.id}">🔍 Phóng to</button>
                  <button type="button" class="btn ${fav ? "btn-jade" : "btn-ghost"} btn-sm" data-action="toggle-bookmark" data-type="painting" data-id="${p.id}" data-title="${escapeHtml(p.titleVi)}" title="Lưu kiệt tác">
                    ${fav ? "♥" : "♡"}
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      `;
    }

    return filtered.map((p) => {
      const fav = Store.isBookmarked("painting", p.id);
      return `
        <article class="painting-card fade-in-up" data-painting-id="${p.id}">
          <div class="painting-card-thumb-wrap" data-action="open-painting-detail" data-id="${p.id}" title="Nhấn để xem phân tích học thuật 9 chiều kích">
            <img src="${p.image}" alt="${escapeHtml(p.titleVi)} - ${p.titleZh}" loading="lazy" onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'" />
            <div class="painting-card-badge-row">
              <span class="badge badge-gold">${p.dynasty.nameVi}</span>
              <span class="painting-attribution-tag">${escapeHtml(p.attribution.split("—")[0].trim())}</span>
            </div>
          </div>

          <div class="painting-card-body">
            <div class="painting-card-title-zh">${p.titleZh} <span class="pinyin" style="font-size:0.82rem;font-weight:normal;">(${p.pinyin})</span></div>
            <h3 class="painting-card-title-vi">${p.titleVi}</h3>
            <div class="painting-card-title-en">${escapeHtml(p.titleEn)}</div>

            <div class="painting-card-meta">
              <div><strong>Họa sĩ:</strong> ${p.artist.nameVi} <span class="hanzi">(${p.artist.nameZh})</span></div>
              <div><strong>Niên đại:</strong> ${p.creationDate}</div>
              <div><strong>Thể loại:</strong> ${p.genreLabel}</div>
              <div><strong>Bảo tàng:</strong> ${escapeHtml(p.museum.split("•")[0].trim())}</div>
            </div>

            <div class="painting-card-quote">
              “${escapeHtml(p.featuredQuote.vi.slice(0, 115))}...”
              <div style="text-align:right;font-size:0.72rem;color:var(--text-muted);margin-top:0.2rem;">— ${p.featuredQuote.author}</div>
            </div>

            <div class="painting-card-actions">
              <button type="button" class="btn btn-primary btn-sm" style="flex:1;" data-action="open-painting-detail" data-id="${p.id}">
                Khảo cứu chi tiết
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="open-painting-zoom" data-id="${p.id}" title="Phóng to tranh độ phân giải cao">
                🔍
              </button>
              <button type="button" class="btn ${fav ? "btn-jade" : "btn-secondary"} btn-sm" data-action="toggle-bookmark" data-type="painting" data-id="${p.id}" data-title="${escapeHtml(p.titleVi)}" title="Lưu vào bộ sưu tập cá nhân">
                ${fav ? "♥" : "♡"}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderPaintingsPage() {
    const data = window.CCE_PAINTINGS || {};
    const eras = data.eras || [];
    const genres = data.genres || [];
    const comparisons = data.comparisons || [];
    const museums = data.museums || [];
    const filtered = getFilteredPaintings();

    return `
      <!-- EXHIBITION HERO SECTION -->
      <section class="paintings-hero">
        <div class="container">
          <div class="paintings-hero-content">
            <div class="paintings-kicker">
              <span>🏛️ Triển lãm Đặc sắc • 数字艺术博物馆</span>
            </div>
            <h1 class="paintings-title-main">
              Kiệt Tác Quốc Họa Trung Hoa
              <span class="paintings-title-zh">中国国画经典 • 千年流变</span>
            </h1>
            <p class="paintings-lead">
              Hơn một thiên niên kỷ hội họa cổ điển phương Đông từ Ngụy–Tấn qua Tùy–Đường, đỉnh cao Ngũ Đại–Tống, sự thăng hoa của Văn nhân họa triều Nguyên, Minh, Thanh cho đến kỷ nguyên hiện đại. Khảo cứu toàn diện 54 kiệt tác lưu giữ tại các bảo tàng hàng đầu thế giới với hệ thống phân tích 9 chiều kích mỹ học, bút pháp, thủy mặc và triết lý Đông phương.
            </p>
            <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
              <button type="button" class="btn btn-primary" data-action="scroll-to-paintings">
                ${ICONS.compass} Khám phá 54 Kiệt tác
              </button>
              <button type="button" class="btn btn-gold" data-action="open-paintings-compare">
                ⚖️ So sánh Đối chiếu (Side-by-side)
              </button>
              <button type="button" class="btn btn-secondary" data-action="nav" data-page="museum">
                ${ICONS.museum} Bảo tàng Số Di sản
              </button>
            </div>

            <div class="paintings-hero-stats">
              <div class="paintings-stat-card">
                <strong>54</strong>
                <span>Đại Danh Tác Toàn Bích</span>
              </div>
              <div class="paintings-stat-card">
                <strong>7</strong>
                <span>Kỷ Nguyên Lịch Sử</span>
              </div>
              <div class="paintings-stat-card">
                <strong>9</strong>
                <span>Dòng Hội Họa Truyền Thống</span>
              </div>
              <div class="paintings-stat-card">
                <strong>10</strong>
                <span>Bảo Tàng Sở Hữu Hàng Đầu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- INTERACTIVE DYNASTY TIMELINE RIBBON -->
      <section class="page-section" style="padding-top:1.5rem;padding-bottom:1.5rem;">
        <div class="container">
          <div class="timeline-strip-container">
            <div class="timeline-strip-header">
              <div>
                <strong style="font-family:var(--font-editorial);font-size:1.15rem;">Tiến trình Lịch sử Hội họa (7 Kỷ nguyên)</strong>
                <span style="font-size:0.8rem;color:var(--text-muted);margin-left:0.5rem;">Nhấn vào từng thời kỳ để lọc kiệt tác tương ứng</span>
              </div>
              <button type="button" class="btn btn-ghost btn-sm ${ui.paintingsEraFilter === "all" ? "active" : ""}" data-action="filter-painting-era" data-era="all">
                Xem tất cả thời kỳ
              </button>
            </div>

            <div class="timeline-ribbon">
              ${eras.map((era) => `
                <button
                  type="button"
                  class="timeline-era-btn ${ui.paintingsEraFilter === era.id ? "active" : ""}"
                  data-action="filter-painting-era"
                  data-era="${era.id}"
                >
                  <span class="era-zh">${era.nameZh}</span>
                  <span class="era-vi">${era.nameVi}</span>
                  <span class="era-span">${era.timeSpan}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      </section>

      <!-- MASTERPIECES EXHIBITION SECTION -->
      <section class="page-section" id="paintings-collection-anchor">
        <div class="container">
          <!-- 9 TRADITIONAL GENRES BAR -->
          <div style="margin-bottom:1.25rem;">
            <div style="font-size:0.84rem;font-weight:600;color:var(--text-muted);margin-bottom:0.5rem;">
              PHÂN LOẠI 9 DÒNG HỘI HỌA TRUYỀN THỐNG (九大绘画流派):
            </div>
            <div class="paintings-genres-bar">
              <button
                type="button"
                class="filter-pill ${ui.paintingsGenreFilter === "all" ? "active" : ""}"
                data-action="filter-painting-genre"
                data-genre="all"
              >
                Tất cả dòng họa (全部)
              </button>
              ${genres.map((g) => `
                <button
                  type="button"
                  class="filter-pill ${ui.paintingsGenreFilter === g.id ? "active" : ""}"
                  data-action="filter-painting-genre"
                  data-genre="${g.id}"
                  title="${escapeHtml(g.desc)}"
                >
                  ${g.nameVi} <span class="hanzi">(${g.nameZh})</span>
                </button>
              `).join("")}
            </div>
          </div>

          <!-- SEARCH & FILTER TOOLBAR -->
          <div class="card" style="margin-bottom:1.5rem;padding:1.1rem 1.25rem;">
            <div class="grid grid-2" style="gap:1rem;align-items:end;margin-bottom:0.85rem;">
              <div>
                <label for="paintings-search-input" style="font-size:0.84rem;font-weight:600;display:block;margin-bottom:0.35rem;">
                  Tra cứu Kiệt tác / Họa sĩ / Bảo tàng / Thể loại
                </label>
                <input
                  type="text"
                  id="paintings-search-input"
                  class="form-input"
                  data-action="paintings-search-input"
                  value="${escapeHtml(ui.paintingsQuery)}"
                  placeholder="vd: Lạc Thần, Khê Sơn, Tảo Xuân, 范宽, Phú Xuân, Bát Đại Sơn Nhân, Tề Bạch Thạch, Cố Cung..."
                  autocomplete="off"
                />
              </div>

              <div style="display:flex;gap:0.6rem;flex-wrap:wrap;align-items:end;">
                <div style="flex:1;min-width:140px;">
                  <label for="paintings-museum-select" style="font-size:0.82rem;font-weight:600;display:block;margin-bottom:0.35rem;">Bảo tàng lưu giữ</label>
                  <select id="paintings-museum-select" class="form-select" data-action="filter-painting-museum" style="font-size:0.82rem;">
                    <option value="all" ${ui.paintingsMuseumFilter === "all" ? "selected" : ""}>Tất cả Bảo tàng</option>
                    <option value="故宫博物院" ${ui.paintingsMuseumFilter === "故宫博物院" ? "selected" : ""}>Cố Cung Bắc Kinh</option>
                    <option value="台北故宫" ${ui.paintingsMuseumFilter === "台北故宫" ? "selected" : ""}>Cố Cung Đài Bắc</option>
                    <option value="上海博物馆" ${ui.paintingsMuseumFilter === "上海博物馆" ? "selected" : ""}>Bảo tàng Thượng Hải</option>
                    <option value="辽宁省博物馆" ${ui.paintingsMuseumFilter === "辽宁省博物馆" ? "selected" : ""}>Bảo tàng Liêu Ninh</option>
                    <option value="南京博物院" ${ui.paintingsMuseumFilter === "南京博物院" ? "selected" : ""}>Bảo tàng Nam Kinh</option>
                    <option value="中国美术馆" ${ui.paintingsMuseumFilter === "中国美术馆" ? "selected" : ""}>Mỹ thuật Trung Quốc</option>
                    <option value="Boston" ${ui.paintingsMuseumFilter === "Boston" ? "selected" : ""}>MFA Boston (Mỹ)</option>
                    <option value="Metropolitan" ${ui.paintingsMuseumFilter === "Metropolitan" ? "selected" : ""}>The Met (New York)</option>
                    <option value="东京国立" ${ui.paintingsMuseumFilter === "东京国立" ? "selected" : ""}>Quốc lập Tokyo</option>
                  </select>
                </div>

                <div style="flex:1;min-width:140px;">
                  <label for="paintings-attr-select" style="font-size:0.82rem;font-weight:600;display:block;margin-bottom:0.35rem;">Tình trạng quy thuộc</label>
                  <select id="paintings-attr-select" class="form-select" data-action="filter-painting-attr" style="font-size:0.82rem;">
                    <option value="all" ${ui.paintingsAttributionFilter === "all" ? "selected" : ""}>Tất cả Tình trạng</option>
                    <option value="真迹" ${ui.paintingsAttributionFilter === "真迹" ? "selected" : ""}>Chân tích (真迹)</option>
                    <option value="宋摹本" ${ui.paintingsAttributionFilter === "宋摹本" ? "selected" : ""}>Tống triều mô bản (宋摹本)</option>
                    <option value="唐摹本" ${ui.paintingsAttributionFilter === "唐摹本" ? "selected" : ""}>Đường triều lâm bản (唐摹本)</option>
                    <option value="传" ${ui.paintingsAttributionFilter === "传" ? "selected" : ""}>Truyền thế bản (传世本)</option>
                  </select>
                </div>

                <div style="display:flex;gap:0.3rem;">
                  <button type="button" class="btn ${ui.paintingsViewMode === "grid" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-paintings-view" data-mode="grid">⊞ Lưới</button>
                  <button type="button" class="btn ${ui.paintingsViewMode === "list" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-paintings-view" data-mode="list">☰ Danh sách</button>
                </div>
              </div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;font-size:0.84rem;color:var(--text-muted);border-top:1px solid var(--border-subtle);padding-top:0.6rem;">
              <div>
                Đang hiển thị <strong>${filtered.length}</strong> / 54 kiệt tác quốc bảo.
                ${(ui.paintingsEraFilter !== "all" || ui.paintingsGenreFilter !== "all" || ui.paintingsMuseumFilter !== "all" || ui.paintingsAttributionFilter !== "all" || ui.paintingsQuery)
                  ? `<button type="button" class="btn btn-ghost btn-sm" style="color:var(--imperial-red);margin-left:0.5rem;" data-action="clear-paintings-filters">✕ Xóa bộ lọc</button>`
                  : ""}
              </div>
              <div style="display:flex;align-items:center;gap:0.4rem;">
                <span>Sắp xếp:</span>
                <select class="form-select" style="font-size:0.79rem;padding:0.2rem 0.5rem;" data-action="set-paintings-sort">
                  <option value="chronological" ${ui.paintingsSort === "chronological" ? "selected" : ""}>Niên đại lịch sử</option>
                  <option value="title" ${ui.paintingsSort === "title" ? "selected" : ""}>Tên tác phẩm (A-Z)</option>
                  <option value="artist" ${ui.paintingsSort === "artist" ? "selected" : ""}>Họa sĩ (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- MASTERPIECES GRID CONTAINER -->
          <div class="paintings-grid" id="paintings-grid-slot">
            ${renderPaintingsGridContent()}
          </div>

          <!-- CURATED SIDE-BY-SIDE COMPARISONS SECTION -->
          <div class="card" style="margin-top:2.5rem;margin-bottom:2rem;padding:1.5rem;background:var(--bg-elevated);border:1px solid var(--border-gold);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:0.75rem;">
              <div>
                <div class="editorial-kicker">Mỹ học Đối chiếu • 对照分析</div>
                <h3 style="font-family:var(--font-editorial);font-size:1.6rem;margin:0.2rem 0;">5 Chuyên đề So sánh Kiệt tác Kinh điển</h3>
                <p style="font-size:0.88rem;color:var(--text-secondary);margin:0;">
                  Đặt song song 2 kiệt tác để giải mã bước chuyển mình của bút pháp, màu sắc và mỹ học không gian qua từng thời kỳ.
                </p>
              </div>
              <button type="button" class="btn btn-gold btn-sm" data-action="open-paintings-compare">
                Mở Ma trận Đối chiếu Tùy chọn ⇋
              </button>
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1rem;">
              ${comparisons.map((cmp) => `
                <div class="flashcard-layer" style="display:flex;flex-direction:column;justify-content:space-between;">
                  <div>
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
                      <span class="badge badge-gold" style="font-size:0.7rem;">${cmp.titleZh}</span>
                    </div>
                    <strong style="font-size:0.95rem;display:block;margin-bottom:0.45rem;color:var(--text-primary);">${cmp.titleVi}</strong>
                    <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.5;margin-bottom:0.75rem;">${cmp.perspective}</p>
                  </div>
                  <button type="button" class="btn btn-secondary btn-sm" data-action="launch-comparison" data-left="${cmp.leftId}" data-right="${cmp.rightId}">
                    So sánh 2 bức này ➔
                  </button>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- MUSEUM PARTNERS & METHODOLOGY MANIFESTO -->
          <div class="grid grid-2" style="gap:1.5rem;margin-top:2rem;">
            <div class="card" style="padding:1.35rem;">
              <div class="editorial-kicker">Nguồn gốc & Bảo tàng • 馆藏归属</div>
              <h4 style="font-family:var(--font-editorial);font-size:1.25rem;margin-bottom:0.75rem;">10 Bảo tàng Lưu giữ Kiệt tác</h4>
              <div style="display:flex;flex-direction:column;gap:0.6rem;max-height:280px;overflow-y:auto;">
                ${museums.map((m) => `
                  <div style="border-bottom:1px solid var(--border-subtle);padding-bottom:0.45rem;">
                    <div style="display:flex;justify-content:space-between;align-items:baseline;">
                      <strong style="font-size:0.86rem;color:var(--imperial-red);">${m.nameZh}</strong>
                      <span style="font-size:0.75rem;color:var(--text-muted);">${m.city}</span>
                    </div>
                    <div style="font-size:0.82rem;font-weight:600;">${m.nameVi}</div>
                    <div style="font-size:0.77rem;color:var(--text-secondary);">${m.description}</div>
                  </div>
                `).join("")}
              </div>
            </div>

            <div class="card" style="padding:1.35rem;">
              <div class="editorial-kicker">Giám định Học thuật • 审定标准</div>
              <h4 style="font-family:var(--font-editorial);font-size:1.25rem;margin-bottom:0.75rem;">Quy tắc Phân định Tình trạng Quy thuộc</h4>
              <p style="font-size:0.84rem;color:var(--text-secondary);line-height:1.6;margin-bottom:0.75rem;">
                Tuân thủ nghiêm ngặt nguyên tắc liêm chính học thuật và giám định bảo tàng quốc tế: Không tự nhận bản sao thành bản gốc. Phân định rành mạch 5 cấp độ quy thuộc:
              </p>
              <div style="display:flex;flex-direction:column;gap:0.45rem;">
                ${(data.attributionGuide || []).map((ag) => `
                  <div style="padding:0.45rem 0.6rem;background:var(--bg-elevated);border-radius:var(--radius-sm);font-size:0.8rem;">
                    <strong>${ag.type}</strong> (${ag.labelZh}):
                    <span style="color:var(--text-secondary);">${ag.desc}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
'''

print("Paintings JS preview ready, length:", len(PAINTINGS_JS))
