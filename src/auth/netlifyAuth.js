// ============================================================================
// Netlify Identity Authentication & Google OAuth Gate Controller
// Uses modern @netlify/identity SDK via ES Module CDN with graceful localhost
// preview & dashboard-provisioning diagnostics.
// ============================================================================

window.CCE_AUTH = (function () {
  const DASHBOARD_IDENTITY_URL = "https://app.netlify.com/projects/chinese-culture-explorer/identity";
  const LOCAL_PREVIEW_KEY = "cce_local_preview_google_user_v1";
  const OAUTH_RETURN_PATH_KEY = "cce_oauth_return_path_v1";
  const CDN_IDENTITY_URLS = [
    "https://cdn.jsdelivr.net/npm/@netlify/identity@2.0.1/+esm",
    "https://esm.sh/@netlify/identity@2.0.1"
  ];

  const isLocalHost =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.protocol === "file:");

  let sdk = null;
  let currentUser = null;
  let settings = null;
  let status = isLocalHost ? "local_dev" : "initializing"; // "initializing" | "ready" | "identity_disabled" | "local_dev" | "error"
  let lastError = null;
  let initialized = false;
  let initPromise = null;
  const listeners = new Set();

  async function loadIdentitySdk() {
    let lastErr = null;
    for (const url of CDN_IDENTITY_URLS) {
      try {
        const mod = await import(url);
        if (mod && typeof mod.getSettings === "function" && typeof mod.oauthLogin === "function") {
          return mod;
        }
      } catch (err) {
        lastErr = err;
      }
    }
    throw lastErr || new Error("Unable to load @netlify/identity@2.0.1");
  }

  function readLocalPreviewUser() {
    if (!isLocalHost) return null;
    try {
      const raw = sessionStorage.getItem(LOCAL_PREVIEW_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function notify() {
    listeners.forEach((fn) => {
      try {
        fn(getPublicState());
      } catch {
        // ignore listener errors
      }
    });
  }

  function sanitizeUser(u) {
    if (!u) return null;
    const meta = u.userMetadata || u.user_metadata || {};
    const appMeta = u.appMetadata || u.app_metadata || {};
    return {
      id: u.id || "local-preview",
      email: u.email || "",
      fullName: u.name || meta.full_name || meta.name || u.email || "Thành viên Google",
      avatarUrl: u.pictureUrl || meta.avatar_url || "",
      provider: u.provider || appMeta.provider || "google",
      roles: Array.isArray(u.roles) ? u.roles : (Array.isArray(appMeta.roles) ? appMeta.roles : []),
      isLocalDemo: Boolean(u.isLocalDemo)
    };
  }

  function getPublicState() {
    const active = currentUser || readLocalPreviewUser();
    return {
      initialized,
      status,
      isLocalHost,
      authenticated: Boolean(active),
      user: sanitizeUser(active),
      settings,
      providers: getAvailableProviders(),
      lastError,
      dashboardUrl: DASHBOARD_IDENTITY_URL
    };
  }

  function getAvailableProviders() {
    const map = (settings && (settings.providers || settings.external)) || null;
    if (!map) return [];
    return ["google", "github", "gitlab", "bitbucket"].filter((k) => Boolean(map[k]));
  }

  function restorePostOAuthPath() {
    try {
      const retPath = sessionStorage.getItem(OAUTH_RETURN_PATH_KEY);
      sessionStorage.removeItem(OAUTH_RETURN_PATH_KEY);
      if (retPath && retPath.startsWith("/") && !retPath.startsWith("//") && retPath !== window.location.pathname + window.location.search) {
        window.history.replaceState(null, "", retPath);
        window.dispatchEvent(new PopStateEvent("popstate"));
      }
    } catch {
      // ignore navigation restore errors
    }
  }

  async function runInit() {
    if (isLocalHost) {
      currentUser = readLocalPreviewUser();
      status = "local_dev";
      initialized = true;
      notify();
      return getPublicState();
    }

    try {
      const rawHash = window.location.hash || "";
      if (/error_description=/.test(rawHash)) {
        try {
          lastError = new URLSearchParams(rawHash.replace(/^#/, "")).get("error_description") || "OAuth cancelled";
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
        } catch {}
        restorePostOAuthPath();
      }

      sdk = await loadIdentitySdk();

      if (typeof sdk.onAuthChange === "function") {
        sdk.onAuthChange((_event, user) => {
          currentUser = user || null;
          notify();
        });
      }

      let callbackHandled = false;
      if (typeof sdk.handleAuthCallback === "function") {
        try {
          const cbResult = await sdk.handleAuthCallback();
          if (cbResult && cbResult.user) {
            currentUser = cbResult.user;
            callbackHandled = true;
          }
        } catch (cbErr) {
          lastError = String((cbErr && cbErr.message) || cbErr || "");
        }
      }

      if (typeof sdk.getSettings === "function") {
        try {
          settings = await sdk.getSettings();
        } catch (sErr) {
          settings = null;
          lastError = String((sErr && sErr.message) || "Identity chưa được bật trên Netlify Dashboard");
        }
      }

      if (!currentUser && typeof sdk.getUser === "function") {
        try {
          const existing = await sdk.getUser();
          if (existing) currentUser = existing;
        } catch {
          // ignore unauthenticated state
        }
      }

      if (callbackHandled) {
        restorePostOAuthPath();
      }

      if (!settings) {
        status = "identity_disabled";
      } else {
        status = "ready";
      }
    } catch (err) {
      status = "identity_disabled";
      lastError = String((err && err.message) || err || "Unable to connect Netlify Identity");
    }

    initialized = true;
    notify();
    return getPublicState();
  }

  function init() {
    if (!initPromise) {
      initPromise = runInit();
    }
    return initPromise;
  }

  async function signInWithOAuth(provider) {
    lastError = null;
    if (isLocalHost) {
      const demoUser = {
        id: "local-google-preview",
        email: "docgia.demo@gmail.com",
        user_metadata: { full_name: "Độc giả Google (Localhost Preview)" },
        app_metadata: { provider: provider || "google" },
        isLocalDemo: true
      };
      try {
        sessionStorage.setItem(LOCAL_PREVIEW_KEY, JSON.stringify(demoUser));
      } catch {
        // ignore storage restrictions
      }
      currentUser = demoUser;
      notify();
      return { ok: true, mode: "local_demo" };
    }

    if (!initialized) {
      try {
        await init();
      } catch {}
    }

    if (!sdk || status === "identity_disabled") {
      return {
        ok: false,
        code: "identity_disabled",
        dashboardUrl: DASHBOARD_IDENTITY_URL
      };
    }

    const providers = getAvailableProviders();
    if (!providers.includes(provider)) {
      return {
        ok: false,
        code: "provider_not_enabled",
        provider,
        dashboardUrl: `${DASHBOARD_IDENTITY_URL}?tab=registration#external-providers`
      };
    }

    try {
      sessionStorage.setItem(OAUTH_RETURN_PATH_KEY, window.location.pathname + window.location.search);
    } catch {
      // ignore storage errors
    }

    try {
      await sdk.oauthLogin(provider);
      return { ok: true, redirecting: true };
    } catch (err) {
      const msg = String((err && err.message) || err || "");
      if (/redirecting to oauth/i.test(msg)) {
        return { ok: true, redirecting: true };
      }
      lastError = msg || "OAuth sign-in error";
      notify();
      return { ok: false, code: "oauth_failed", error: lastError, dashboardUrl: DASHBOARD_IDENTITY_URL };
    }
  }

  async function signOut() {
    if (isLocalHost) {
      try {
        sessionStorage.removeItem(LOCAL_PREVIEW_KEY);
      } catch {
        // ignore
      }
      currentUser = null;
      notify();
      return;
    }

    try {
      if (sdk && typeof sdk.logout === "function") {
        await sdk.logout();
      }
    } catch {
      // clear local view regardless
    }
    currentUser = null;
    notify();
  }

  return {
    init,
    getState: getPublicState,
    isAuthenticated() {
      return Boolean(currentUser || readLocalPreviewUser());
    },
    getUser() {
      return sanitizeUser(currentUser || readLocalPreviewUser());
    },
    getStatus() {
      return status;
    },
    getAvailableProviders,
    signInWithGoogle() {
      return signInWithOAuth("google");
    },
    signInWithOAuth,
    signOut,
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    }
  };
})();
