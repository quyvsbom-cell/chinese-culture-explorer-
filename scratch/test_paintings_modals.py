# -*- coding: utf-8 -*-
"""
Modals for Masterpieces of Chinese Traditional Painting
"""

MODALS_JS = r'''
  // ==========================================================================
  // Painting Modals: Detail Modal, Compare Modal, and Fullscreen Deep-Zoom
  // ==========================================================================

  function renderPaintingDetailModal() {
    if (!ui.activePaintingId) return "";
    const list = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    const p = list.find((item) => item.id === ui.activePaintingId);
    if (!p) return "";

    const fav = Store.isBookmarked("painting", p.id);
    const tab = ui.paintingDetailTab || "historical";

    return `
      <div class="modal-backdrop open" data-action="close-painting-backdrop" style="z-index:220;">
        <div class="painting-detail-modal-stage" role="dialog" aria-modal="true" aria-label="${escapeHtml(p.titleVi)}">
          <!-- TOP HEADER BAR -->
          <div class="painting-detail-header">
            <div>
              <div style="display:flex;gap:0.45rem;align-items:center;flex-wrap:wrap;margin-bottom:0.25rem;">
                <span class="badge badge-gold">${p.dynasty.nameVi}</span>
                <span class="badge badge-red">${p.genreLabel}</span>
                <span class="painting-attribution-tag">${escapeHtml(p.attribution.split("—")[0].trim())}</span>
              </div>
              <h2 style="font-family:var(--font-editorial);font-size:1.75rem;margin:0;line-height:1.2;">
                ${p.titleVi}
                <span class="hanzi" style="color:var(--imperial-red);margin-left:0.5rem;font-size:1.45rem;">${p.titleZh}</span>
                <span class="pinyin" style="font-size:0.9rem;font-weight:normal;color:var(--text-muted);">(${p.pinyin})</span>
              </h2>
              <div style="font-size:0.84rem;color:var(--text-muted);">${escapeHtml(p.titleEn)} • 🏛️ ${p.museum}</div>
            </div>

            <div style="display:flex;gap:0.45rem;align-items:center;">
              <button type="button" class="btn btn-secondary btn-sm" data-action="open-painting-zoom" data-id="${p.id}" title="Phóng to tranh toàn màn hình">
                🔍 Phóng to (Deep Zoom)
              </button>
              <button type="button" class="btn btn-gold btn-sm" data-action="compare-with-this" data-id="${p.id}" title="Đặt bức này vào bàn so sánh đối chiếu">
                ⚖️ So sánh đối chiếu
              </button>
              <button type="button" class="btn ${fav ? "btn-jade" : "btn-secondary"} btn-sm" data-action="toggle-bookmark" data-type="painting" data-id="${p.id}" data-title="${escapeHtml(p.titleVi)}">
                ${fav ? "♥ Đã lưu" : "♡ Lưu tranh"}
              </button>
              <button type="button" class="modal-close-btn" data-action="close-painting-detail" aria-label="Đóng hồ sơ kiệt tác">✕</button>
            </div>
          </div>

          <!-- MODAL BODY: 2 COLUMNS -->
          <div class="painting-detail-body">
            <!-- LEFT COLUMN: ARTWORK VIEWER & TECHNICAL METADATA -->
            <div>
              <div class="painting-image-stage" id="painting-zoom-canvas-box">
                <img
                  src="${p.image}"
                  alt="${escapeHtml(p.titleVi)}"
                  id="painting-modal-img"
                  style="transform: scale(${ui.paintingZoomScale || 1});"
                  onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'"
                />
                <div class="painting-stage-controls">
                  <button type="button" class="btn btn-secondary btn-sm" data-action="zoom-step-in" title="Phóng to">+</button>
                  <button type="button" class="btn btn-secondary btn-sm" data-action="zoom-step-out" title="Thu nhỏ">-</button>
                  <button type="button" class="btn btn-secondary btn-sm" data-action="zoom-step-reset" title="Tỷ lệ 100%">1:1</button>
                  <button type="button" class="btn btn-primary btn-sm" data-action="open-painting-zoom" data-id="${p.id}" title="Toàn màn hình">⛶</button>
                </div>
              </div>

              <!-- ATTRIBUTION CALLOUT BOX -->
              <div class="card" style="margin-top:1rem;padding:0.9rem 1rem;background:var(--bg-accent-soft);border:1px solid var(--border-red);">
                <div style="font-size:0.8rem;font-weight:700;color:var(--cinnabar-red);margin-bottom:0.25rem;">
                  TÌNH TRẠNG QUY THUỘC & GIÁM ĐỊNH BẢO TÀNG:
                </div>
                <div style="font-size:0.84rem;color:var(--text-secondary);line-height:1.5;">
                  ${p.attribution}
                </div>
              </div>

              <!-- TECHNICAL SPECS TABLE -->
              <div class="card" style="margin-top:1rem;padding:1rem;">
                <h4 style="font-family:var(--font-editorial);font-size:1.1rem;margin-bottom:0.6rem;">Thông số & Giám định Hiện vật</h4>
                <table style="width:100%;font-size:0.82rem;border-collapse:collapse;">
                  <tbody>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);width:38%;"><strong>Họa sĩ:</strong></td>
                      <td style="padding:0.35rem 0;"><strong>${p.artist.nameVi}</strong> (${p.artist.nameZh} • ${p.artist.pinyin})</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>Trường phái:</strong></td>
                      <td style="padding:0.35rem 0;">${p.artist.school}</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>Triều đại / Thời kỳ:</strong></td>
                      <td style="padding:0.35rem 0;">${p.dynasty.nameVi} (${p.dynasty.nameZh})</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>Niên đại sáng tác:</strong></td>
                      <td style="padding:0.35rem 0;">${p.creationDate}</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>Thể loại hội họa:</strong></td>
                      <td style="padding:0.35rem 0;">${p.genreLabel}</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>Chất liệu & Kỹ thuật:</strong></td>
                      <td style="padding:0.35rem 0;">${p.material}</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>Kích thước thực tế:</strong></td>
                      <td style="padding:0.35rem 0;">${p.dimensions}</td>
                    </tr>
                    <tr>
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>Bảo tàng lưu giữ:</strong></td>
                      <td style="padding:0.35rem 0;">${p.museum}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- HISTORICAL CRITIQUE QUOTE CARD -->
              <div class="card" style="margin-top:1rem;padding:1rem;border-left:3px solid var(--imperial-red);">
                <div style="font-size:0.75rem;font-weight:700;color:var(--imperial-red);margin-bottom:0.35rem;">
                  LỜI PHÊ BÌNH CỔ ĐIỂN (历代画论典评):
                </div>
                <div style="font-family:var(--font-hanzi-serif);font-size:0.95rem;color:var(--text-primary);margin-bottom:0.35rem;line-height:1.6;">
                  “${p.featuredQuote.zh}”
                </div>
                <div style="font-size:0.84rem;color:var(--text-secondary);font-style:italic;line-height:1.5;">
                  “${p.featuredQuote.vi}”
                </div>
                <div style="text-align:right;font-size:0.75rem;color:var(--text-muted);margin-top:0.4rem;">
                  — ${p.featuredQuote.author} • <em>${p.featuredQuote.source}</em>
                </div>
              </div>
            </div>

            <!-- RIGHT COLUMN: 9-DIMENSIONAL SCHOLARLY ANALYSIS TABS -->
            <div>
              <div class="analysis-tabstrip">
                <button type="button" class="analysis-tab-btn ${tab === "historical" ? "active" : ""}" data-action="set-painting-tab" data-tab="historical">
                  1. Lịch sử & Họa sĩ
                </button>
                <button type="button" class="analysis-tab-btn ${tab === "aesthetics" ? "active" : ""}" data-action="set-painting-tab" data-tab="aesthetics">
                  2. Bố cục & Bút pháp
                </button>
                <button type="button" class="analysis-tab-btn ${tab === "philosophy" ? "active" : ""}" data-action="set-painting-tab" data-tab="philosophy">
                  3. Tam viễn & Triết học
                </button>
                <button type="button" class="analysis-tab-btn ${tab === "scholarly" ? "active" : ""}" data-action="set-painting-tab" data-tab="scholarly">
                  4. Giám định & Trích dẫn
                </button>
              </div>

              <div class="analysis-panel-box">
                ${tab === "historical" ? `
                  <div class="analysis-item-row">
                    <strong>1. Historical Background — Bối cảnh Lịch sử:</strong>
                    <p style="margin:0;">${p.analysis.historicalBackground}</p>
                  </div>
                  <div class="analysis-item-row">
                    <strong>2. Artist Biography — Tiểu sử & Hành trạng Họa sĩ:</strong>
                    <p style="margin:0 0 0.5rem;">${p.artist.bio}</p>
                    <p style="margin:0;">${p.analysis.artistBiography}</p>
                  </div>
                  <div class="analysis-item-row" style="margin-bottom:0;">
                    <strong>3. Provenance History — Lịch sử Lưu truyền & Sưu tập:</strong>
                    <p style="margin:0;">Bảo vật từng qua tay giám định và đóng ấn ngự lãm của các hoàng gia, hiện được bảo tồn nghiêm ngặt tại ${p.museum}.</p>
                  </div>
                ` : tab === "aesthetics" ? `
                  <div class="analysis-item-row">
                    <strong>4. Artistic Composition — Bố cục Mỹ học:</strong>
                    <p style="margin:0;">${p.analysis.artisticComposition}</p>
                  </div>
                  <div class="analysis-item-row">
                    <strong>5. Brushwork — Kỹ thuật Cọ vẽ & Bút pháp:</strong>
                    <p style="margin:0;">${p.analysis.brushwork}</p>
                  </div>
                  <div class="analysis-item-row" style="margin-bottom:0;">
                    <strong>6. Ink and Color — Kỹ thuật Dùng mực & Màu sắc Khoáng chất:</strong>
                    <p style="margin:0;">${p.analysis.inkAndColor}</p>
                  </div>
                ` : tab === "philosophy" ? `
                  <div class="analysis-item-row">
                    <strong>7. Spatial Perspective — Không gian & Phối cảnh (Tam viễn):</strong>
                    <p style="margin:0;">${p.analysis.spatialPerspective}</p>
                  </div>
                  <div class="analysis-item-row">
                    <strong>8. Symbolism — Biểu tượng Văn hóa & Ngụ ý:</strong>
                    <p style="margin:0;">${p.analysis.symbolism}</p>
                  </div>
                  <div class="analysis-item-row">
                    <strong>9. Philosophical Meaning — Ý nghĩa Triết học Đạo–Nho–Thiền:</strong>
                    <p style="margin:0;">${p.analysis.philosophicalMeaning}</p>
                  </div>
                  <div class="analysis-item-row" style="margin-bottom:0;">
                    <strong>10. Artistic Legacy — Di sản & Ảnh hưởng Nghệ thuật:</strong>
                    <p style="margin:0;">${p.analysis.artisticLegacy}</p>
                  </div>
                ` : `
                  <div class="analysis-item-row">
                    <strong>Scholarly Consensus — Đồng thuận Giới Nghiên cứu Mỹ thuật:</strong>
                    <p style="margin:0;">${p.scholarlyResearch.scholarlyConsensus}</p>
                  </div>
                  <div class="analysis-item-row">
                    <strong>Debated Issues — Những Tranh luận Học thuật về Niên đại / Tác giả:</strong>
                    <p style="margin:0;">${p.scholarlyResearch.debatedIssues}</p>
                  </div>
                  <div class="analysis-item-row">
                    <strong>Comparative Context — Đối chiếu với Tác phẩm Cùng Thời kỳ:</strong>
                    <p style="margin:0;">${p.scholarlyResearch.comparativeContext}</p>
                  </div>
                  <div class="analysis-item-row" style="margin-bottom:0;">
                    <strong>Academic Citations — Tài liệu Tham khảo & Trích dẫn Học thuật:</strong>
                    <ul style="margin:0.4rem 0 0.75rem 1.25rem;padding:0;font-size:0.8rem;color:var(--text-secondary);">
                      ${(p.scholarlyResearch.academicCitations || []).map((cite) => `<li>${cite}</li>`).join("")}
                    </ul>
                    <div style="background:var(--bg-secondary);padding:0.75rem;border-radius:var(--radius-sm);font-size:0.78rem;">
                      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.35rem;">
                        <strong>Định dạng trích dẫn Chicago / APA:</strong>
                        <button type="button" class="btn btn-ghost btn-sm" style="font-size:0.74rem;" data-action="copy-citation" data-text="${escapeHtml(`${p.artist.nameVi} (${p.artist.nameZh}). 《${p.titleZh}》 (${p.titleVi} / ${p.titleEn}). ${p.creationDate}. ${p.museum}. CCE Academic Digital Museum.`)}">
                          📋 Sao chép Trích dẫn
                        </button>
                      </div>
                      <div style="font-family:var(--font-mono);font-size:0.74rem;color:var(--text-primary);word-break:break-word;">
                        ${p.artist.nameVi} (${p.artist.nameZh}). 《${p.titleZh}》 (${p.titleVi} / ${p.titleEn}). ${p.creationDate}. ${p.museum}. CCE Academic Digital Museum.
                      </div>
                    </div>
                  </div>
                `}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderPaintingCompareModal() {
    if (!ui.paintingCompareOpen) return "";
    const list = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    const left = list.find((item) => item.id === ui.paintingCompareLeftId) || list[0];
    const right = list.find((item) => item.id === ui.paintingCompareRightId) || list[1];

    return `
      <div class="modal-backdrop open" data-action="close-compare-backdrop" style="z-index:230;">
        <div class="modal-panel" style="max-width:1320px;max-height:92vh;display:flex;flex-direction:column;padding:0;" role="dialog" aria-modal="true" aria-label="So sánh Đối chiếu Kiệt tác">
          <div style="padding:1rem 1.5rem;background:var(--bg-elevated);border-bottom:1px solid var(--border-medium);display:flex;justify-content:space-between;align-items:center;gap:1rem;">
            <div>
              <h3 style="font-family:var(--font-editorial);font-size:1.5rem;margin:0;">
                Ma Trận Đối Chiếu Kiệt Tác Quốc Họa (Side-by-Side Art Comparison)
              </h3>
              <p style="font-size:0.82rem;color:var(--text-muted);margin:0;">
                Đặt song song 2 danh tác để so sánh kỹ thuật bút pháp, cách dùng mực, không gian tam viễn và ý niệm triết học.
              </p>
            </div>
            <button type="button" class="modal-close-btn" data-action="close-painting-compare">✕</button>
          </div>

          <div class="painting-compare-grid">
            <!-- LEFT ARTWORK COLUMN -->
            <div class="compare-card-col">
              <div style="margin-bottom:0.75rem;">
                <label style="font-size:0.79rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">KIỆT TÁC THỨ NHẤT (VẾ TRÁI):</label>
                <select class="form-select" data-action="select-compare-left" style="font-weight:600;">
                  ${list.map((item) => `
                    <option value="${item.id}" ${item.id === left.id ? "selected" : ""}>
                      ${item.titleVi} (${item.titleZh}) — ${item.artist.nameVi} [${item.dynasty.nameVi}]
                    </option>
                  `).join("")}
                </select>
              </div>

              <div style="height:260px;background:#141413;border-radius:var(--radius-md);overflow:hidden;margin-bottom:1rem;display:flex;align-items:center;justify-content:center;">
                <img src="${left.image}" alt="${escapeHtml(left.titleVi)}" style="max-width:100%;max-height:100%;object-fit:contain;" onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'" />
              </div>

              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.75rem;">
                <span class="badge badge-gold">${left.dynasty.nameVi}</span>
                <span class="badge badge-red">${left.genreLabel}</span>
                <span class="painting-attribution-tag">${escapeHtml(left.attribution.split("—")[0].trim())}</span>
              </div>

              <h4 style="font-family:var(--font-editorial);font-size:1.35rem;margin:0 0 0.2rem;">${left.titleVi} <span class="hanzi" style="color:var(--imperial-red);">${left.titleZh}</span></h4>
              <div style="font-size:0.84rem;color:var(--text-secondary);margin-bottom:0.75rem;">
                <strong>${left.artist.nameVi} (${left.artist.nameZh})</strong> • ${left.creationDate} • ${left.dimensions} • 🏛️ ${left.museum}
              </div>

              <div class="analysis-panel-box" style="font-size:0.84rem;">
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">Bút pháp & Cọ vẽ:</strong>
                  <p style="margin:0.2rem 0 0;">${left.analysis.brushwork}</p>
                </div>
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">Mực & Màu sắc:</strong>
                  <p style="margin:0.2rem 0 0;">${left.analysis.inkAndColor}</p>
                </div>
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">Không gian & Tam viễn:</strong>
                  <p style="margin:0.2rem 0 0;">${left.analysis.spatialPerspective}</p>
                </div>
                <div>
                  <strong style="color:var(--imperial-red);">Ý nghĩa Triết học:</strong>
                  <p style="margin:0.2rem 0 0;">${left.analysis.philosophicalMeaning}</p>
                </div>
              </div>
            </div>

            <!-- RIGHT ARTWORK COLUMN -->
            <div class="compare-card-col">
              <div style="margin-bottom:0.75rem;">
                <label style="font-size:0.79rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">KIỆT TÁC THỨ HAI (VẾ PHẢI):</label>
                <select class="form-select" data-action="select-compare-right" style="font-weight:600;">
                  ${list.map((item) => `
                    <option value="${item.id}" ${item.id === right.id ? "selected" : ""}>
                      ${item.titleVi} (${item.titleZh}) — ${item.artist.nameVi} [${item.dynasty.nameVi}]
                    </option>
                  `).join("")}
                </select>
              </div>

              <div style="height:260px;background:#141413;border-radius:var(--radius-md);overflow:hidden;margin-bottom:1rem;display:flex;align-items:center;justify-content:center;">
                <img src="${right.image}" alt="${escapeHtml(right.titleVi)}" style="max-width:100%;max-height:100%;object-fit:contain;" onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'" />
              </div>

              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.75rem;">
                <span class="badge badge-gold">${right.dynasty.nameVi}</span>
                <span class="badge badge-red">${right.genreLabel}</span>
                <span class="painting-attribution-tag">${escapeHtml(right.attribution.split("—")[0].trim())}</span>
              </div>

              <h4 style="font-family:var(--font-editorial);font-size:1.35rem;margin:0 0 0.2rem;">${right.titleVi} <span class="hanzi" style="color:var(--imperial-red);">${right.titleZh}</span></h4>
              <div style="font-size:0.84rem;color:var(--text-secondary);margin-bottom:0.75rem;">
                <strong>${right.artist.nameVi} (${right.artist.nameZh})</strong> • ${right.creationDate} • ${right.dimensions} • 🏛️ ${right.museum}
              </div>

              <div class="analysis-panel-box" style="font-size:0.84rem;">
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">Bút pháp & Cọ vẽ:</strong>
                  <p style="margin:0.2rem 0 0;">${right.analysis.brushwork}</p>
                </div>
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">Mực & Màu sắc:</strong>
                  <p style="margin:0.2rem 0 0;">${right.analysis.inkAndColor}</p>
                </div>
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">Không gian & Tam viễn:</strong>
                  <p style="margin:0.2rem 0 0;">${right.analysis.spatialPerspective}</p>
                </div>
                <div>
                  <strong style="color:var(--imperial-red);">Ý nghĩa Triết học:</strong>
                  <p style="margin:0.2rem 0 0;">${right.analysis.philosophicalMeaning}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderPaintingZoomModal() {
    if (!ui.paintingZoomOpen) return "";
    const list = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    const p = list.find((item) => item.id === (ui.activePaintingId || ui.paintingZoomId)) || list[0];
    if (!p) return "";

    return `
      <div class="lightbox-backdrop" data-action="close-painting-zoom" role="dialog" aria-modal="true" aria-label="Phóng to kiệt tác ${escapeHtml(p.titleVi)}">
        <div class="lightbox-stage" style="max-width:1380px;width:96%;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:0.75rem;">
            <div>
              <strong style="font-family:var(--font-editorial);font-size:1.35rem;color:#F7F4ED;">
                ${p.titleVi} <span class="hanzi" style="color:#B99A62;">${p.titleZh}</span>
              </strong>
              <div style="font-size:0.8rem;color:rgba(247,244,237,0.72);">
                ${p.artist.nameVi} (${p.artist.nameZh}) • ${p.dynasty.nameVi} • 🏛️ ${p.museum}
              </div>
            </div>
            <div style="display:flex;gap:0.4rem;align-items:center;">
              <button type="button" class="btn btn-secondary btn-sm" data-action="zoom-step-in" style="color:#202020;">+ Phóng to</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="zoom-step-out" style="color:#202020;">- Thu nhỏ</button>
              <button type="button" class="btn btn-primary btn-sm" data-action="close-painting-zoom">✕ Đóng Fullscreen</button>
            </div>
          </div>
          <div style="background:#0a0a09;border-radius:var(--radius-lg);padding:1rem;max-height:80vh;overflow:auto;text-align:center;position:relative;">
            <img
              src="${p.image}"
              alt="${escapeHtml(p.titleVi)}"
              style="max-width:none;width:${(ui.paintingZoomScale || 1) * 100}%;object-fit:contain;display:inline-block;transition:width 0.2s ease;"
              onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'"
            />
          </div>
        </div>
      </div>
    `;
  }
'''

print("Modals JS preview ready, length:", len(MODALS_JS))
