// ============================================================================
// Netlify Identity Authentication & Google OAuth Gate Controller
// Uses modern @netlify/identity SDK via ES Module CDN with graceful localhost
// preview & dashboard-provisioning diagnostics.
// ============================================================================

window.CCE_AUTH = (function () {
  const DASHBOARD_IDENTITY_URL = "https://app.netlify.com/projects/chinese-culture-explorer/identity";
  const LOCAL_PREVIEW_KEY = "cce_local_preview_google_user_v1";
  const CDN_IDENTITY_URL = "https://esm.sh/@netlify/identity@1.0.1";

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
  const listeners = new Set();

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
    const meta = u.user_metadata || {};
    const appMeta = u.app_metadata || {};
    return {
      id: u.id || "local-preview",
      email: u.email || "",
      fullName: meta.full_name || meta.name || u.email || "Thành viên Google",
      avatarUrl: meta.avatar_url || "",
      provider: appMeta.provider || "google",
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
    if (!settings || !settings.external) return [];
    const ext = settings.external;
    return ["google", "github", "gitlab", "bitbucket"].filter((k) => Boolean(ext[k]));
  }

  async function init() {
    if (isLocalHost) {
      currentUser = readLocalPreviewUser();
      status = "local_dev";
      initialized = true;
      notify();
      return getPublicState();
    }

    try {
      sdk = await import(CDN_IDENTITY_URL);
      if (typeof sdk.handleAuthCallback === "function") {
        const cbResult = await sdk.handleAuthCallback();
        if (cbResult && cbResult.user) {
          currentUser = cbResult.user;
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
      if (typeof sdk.getUser === "function") {
        try {
          const existing = await sdk.getUser();
          if (existing) currentUser = existing;
        } catch {
          // ignore unauthenticated state
        }
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
      await sdk.oauthLogin(provider);
      return { ok: true };
    } catch (err) {
      lastError = String((err && err.message) || err || "OAuth sign-in error");
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
