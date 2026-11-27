// ============================================================================
// CHINESE CULTURE EXPLORER — Lightweight Contextual Feedback Modal
// Feedback-only submission (UI/content/image/3D errata); zero developer Q&A.
// ============================================================================
(function () {
  "use strict";

  var STORAGE_KEY = "cce_v10_feedback_log";
  var st = {
    open: false,
    cat: "image_3d",
    contextLabel: "",
    message: "",
    contact: "",
    submittedReceipt: ""
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function isEn() {
    try {
      return window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en";
    } catch (_e) {
      return false;
    }
  }

  function loadHistory() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_e) {
      return [];
    }
  }

  function saveEntry(entry) {
    try {
      var arr = loadHistory();
      arr.unshift(entry);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr.slice(0, 20)));
    } catch (_e) {}
  }

  function ensureHost() {
    var host = document.getElementById("cce-v10-feedback-host");
    if (!host && typeof document !== "undefined" && document.body) {
      host = document.createElement("div");
      host.id = "cce-v10-feedback-host";
      document.body.appendChild(host);
    }
    return host;
  }

  function render() {
    var host = ensureHost();
    if (!host) return;
    if (!st.open) {
      host.innerHTML = "";
      return;
    }
    var enM = isEn();
    var cats = [
      { id: "ui_ux", vi: "Góp ý giao diện và trải nghiệm đọc", en: "UI & reading experience suggestion" },
      { id: "content_errata", vi: "Đính chính nội dung, chữ Hán hoặc Hán–Việt", en: "Content, Hanzi or historical errata" },
      { id: "image_3d", vi: "Báo lỗi hình ảnh, mô hình 3D hoặc hiển thị", en: "Image mismatch, 3D viewer or display issue" }
    ];
    var urlCtx = "";
    try {
      urlCtx = window.location.pathname + window.location.search;
    } catch (_e) {}

    host.innerHTML =
      '<div class="v10-feedback-backdrop" data-v10-fb-act="backdrop" role="dialog" aria-modal="true" aria-labelledby="v10-fb-title">' +
      '  <div class="v10-feedback-dialog">' +
      '    <span class="v10-filigree-corner is-tl"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2 22V2h20M7 18V7h11"/></svg></span>' +
      '    <span class="v10-filigree-corner is-tr"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2 22V2h20M7 18V7h11"/></svg></span>' +
      '    <span class="v10-filigree-corner is-bl"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2 22V2h20M7 18V7h11"/></svg></span>' +
      '    <span class="v10-filigree-corner is-br"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2 22V2h20M7 18V7h11"/></svg></span>' +
      '    <button type="button" class="v10-fb-close-orb" data-v10-fb-act="close" aria-label="' + (enM ? "Close feedback form" : "Đóng hộp góp ý") + '">' +
      '      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
      '    </button>' +
      '    <div style="margin-bottom:0.75rem;">' +
      '      <div class="editorial-kicker" style="color:#821C1C;">' + (enM ? "READER FEEDBACK" : "ĐÓNG GÓP Ý KIẾN") + '</div>' +
      '      <h2 id="v10-fb-title" style="margin:0.15rem 0 0;font-size:1.22rem;font-family:var(--font-editorial);">' + (enM ? "Send feedback or report a visual error" : "Góp ý cải thiện hoặc báo lỗi hiển thị") + '</h2>' +
      '    </div>' +
      (st.submittedReceipt ? (
        '    <div class="epistemic-box" style="border-left:4px solid var(--jade-green);">' +
        '      <strong>' + (enM ? "Feedback recorded" : "Đã ghi nhận đóng góp ý kiến") + ' (' + esc(st.submittedReceipt) + ')</strong>' +
        '      <p style="margin:0.4rem 0 0;font-size:0.86rem;">' + (enM ? "Thank you for helping improve accuracy across articles, photography, and 3D viewers." : "Cảm ơn bạn đã góp phần rà soát độ chính xác về hình ảnh, 3D và tư liệu chữ Hán trên trang.") + '</p>' +
        '      <div style="margin-top:0.85rem;display:flex;gap:0.5rem;">' +
        '        <button type="button" class="btn btn-primary btn-sm" data-v10-fb-act="reset">' + (enM ? "Send another note" : "Gửi thêm góp ý khác") + '</button>' +
        '        <button type="button" class="btn btn-secondary btn-sm" data-v10-fb-act="close">' + (enM ? "Close" : "Đóng") + '</button>' +
        '      </div>' +
        '    </div>'
      ) : (
        '    <form id="cce-v10-feedback-form" style="display:grid;gap:0.75rem;">' +
        (st.contextLabel || urlCtx ? (
          '<div style="font-size:0.78rem;padding:0.45rem 0.6rem;background:var(--bg-surface);border:1px solid var(--hairline);">' +
          '  <strong>' + (enM ? "Target page:" : "Vị trí đang góp ý:") + '</strong> <code>' + esc(urlCtx) + '</code>' +
          (st.contextLabel ? '<br><strong>' + (enM ? "Item:" : "Mục cụ thể:") + '</strong> ' + esc(st.contextLabel) : "") +
          '</div>'
        ) : "") +
        '      <div>' +
        '        <label for="v10-fb-cat" style="display:block;font-size:0.82rem;font-weight:700;margin-bottom:0.25rem;">' + (enM ? "Category" : "Nhóm góp ý") + '</label>' +
        '        <select id="v10-fb-cat" name="category" class="form-input" style="width:100%;font-size:0.86rem;">' +
        cats.map(function (c) {
          return '<option value="' + c.id + '"' + (st.cat === c.id ? " selected" : "") + '>' + esc(enM ? c.en : c.vi) + '</option>';
        }).join("") +
        '        </select>' +
        '      </div>' +
        '      <div>' +
        '        <label for="v10-fb-msg" style="display:block;font-size:0.82rem;font-weight:700;margin-bottom:0.25rem;">' + (enM ? "Details" : "Nội dung đóng góp ý kiến") + '</label>' +
        '        <textarea id="v10-fb-msg" name="message" rows="4" required class="form-input" style="width:100%;font-size:0.86rem;" placeholder="' + esc(enM ? "Describe what should be improved or fixed..." : "Mô tả ngắn gọn điểm cần sửa ảnh, 3D, câu chữ hoặc bố cục...") + '">' + esc(st.message) + '</textarea>' +
        '      </div>' +
        '      <div>' +
        '        <label for="v10-fb-contact" style="display:block;font-size:0.82rem;font-weight:700;margin-bottom:0.25rem;">' + (enM ? "Optional contact (name or email)" : "Tên hoặc email liên hệ (không bắt buộc)") + '</label>' +
        '        <input id="v10-fb-contact" name="contact" type="text" class="form-input" style="width:100%;font-size:0.86rem;" value="' + esc(st.contact) + '" placeholder="' + esc(enM ? "Optional" : "Có thể bỏ trống nếu gửi ẩn danh") + '" />' +
        '      </div>' +
        '      <div style="display:flex;justify-content:flex-end;gap:0.5rem;">' +
        '        <button type="button" class="btn btn-secondary btn-sm" data-v10-fb-act="close">' + (enM ? "Cancel" : "Hủy") + '</button>' +
        '        <button type="submit" class="btn btn-primary btn-sm">' + (enM ? "Submit feedback" : "Gửi góp ý") + '</button>' +
        '      </div>' +
        '    </form>'
      )) +
      '  </div>' +
      '</div>';
  }

  function open(opts) {
    var o = opts || {};
    st.open = true;
    st.cat = o.category || "image_3d";
    st.contextLabel = o.context || "";
    st.submittedReceipt = "";
    render();
    setTimeout(function () {
      var ta = document.getElementById("v10-fb-msg");
      if (ta) ta.focus();
    }, 20);
  }

  function close() {
    st.open = false;
    render();
  }

  function handleSubmit(formEl) {
    var catEl = formEl.querySelector("#v10-fb-cat");
    var msgEl = formEl.querySelector("#v10-fb-msg");
    var cntEl = formEl.querySelector("#v10-fb-contact");
    var cat = catEl ? catEl.value : "image_3d";
    var msg = msgEl ? msgEl.value.trim() : "";
    var cnt = cntEl ? cntEl.value.trim() : "";
    if (!msg) return;

    var receipt = "#CCE-FB-" + String(Date.now()).slice(-6);
    var urlCtx = "";
    try { urlCtx = window.location.pathname + window.location.search; } catch (_e) {}

    saveEntry({
      receipt: receipt,
      category: cat,
      context: st.contextLabel,
      url: urlCtx,
      message: msg,
      contact: cnt,
      createdAt: new Date().toISOString()
    });

    try {
      var isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      if (!isLocal && window.location.protocol.indexOf("http") === 0) {
        fetch("/api/feedback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            receipt: receipt,
            category: cat,
            context: st.contextLabel,
            url: urlCtx,
            message: msg,
            contact: cnt
          })
        }).catch(function () {});
        var fd = new URLSearchParams();
        fd.append("form-name", "cce-feedback");
        fd.append("category", cat);
        fd.append("context", st.contextLabel);
        fd.append("url", urlCtx);
        fd.append("message", msg);
        fd.append("contact", cnt);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: fd.toString()
        }).catch(function () {});
      }
    } catch (_e) {}

    st.message = "";
    st.submittedReceipt = receipt;
    render();
  }

  if (typeof document !== "undefined") {
    document.addEventListener("click", function (e) {
      var openBtn = e.target && e.target.closest ? e.target.closest("[data-v10-feedback-open]") : null;
      if (openBtn) {
        e.preventDefault();
        open({
          context: openBtn.getAttribute("data-v10-feedback-context") || openBtn.getAttribute("data-v10-feedback-entity") || "",
          category: openBtn.getAttribute("data-v10-feedback-cat") || "image_3d"
        });
        return;
      }
      var actBtn = e.target && e.target.closest ? e.target.closest("[data-v10-fb-act]") : null;
      if (actBtn) {
        var act = actBtn.getAttribute("data-v10-fb-act");
        if (act === "close" || (act === "backdrop" && e.target === actBtn)) {
          close();
        } else if (act === "reset") {
          st.submittedReceipt = "";
          render();
        }
      }
    });

    document.addEventListener("submit", function (e) {
      if (e.target && e.target.id === "cce-v10-feedback-form") {
        e.preventDefault();
        handleSubmit(e.target);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && st.open) {
        close();
      }
    });
  }

  window.CCE_V10_FEEDBACK = {
    open: open,
    close: close,
    getHistory: loadHistory
  };
})();
