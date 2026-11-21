/* CHINESE CULTURE EXPLORER — Offline-First PWA Service Worker (cce-v3.0)
 * Strategy:
 * - Never intercept /api/* or /.netlify/*
 * - Network-First for HTML navigations so users/bots always see latest deploy
 * - Stale-While-Revalidate for JS, CSS, GeoJSON, and fonts
 * - Bounded Cache-First for viewed images
 */

const CACHE_VERSION = "cce-v3.0";
const SHELL_CACHE = CACHE_VERSION + "-shell";
const MEDIA_CACHE = CACHE_VERSION + "-media";
const MAX_MEDIA_ENTRIES = 160;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) =>
      cache.addAll(["/", "/manifest.json", "/assets/images/brand/favicon.svg"]).catch(() => {})
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.indexOf(CACHE_VERSION) !== 0)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

async function trimMediaCache() {
  try {
    const cache = await caches.open(MEDIA_CACHE);
    const keys = await cache.keys();
    if (keys.length > MAX_MEDIA_ENTRIES) {
      const toDelete = keys.slice(0, keys.length - MAX_MEDIA_ENTRIES);
      await Promise.all(toDelete.map((k) => cache.delete(k)));
    }
  } catch {
    // ignore storage pressure errors
  }
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/.netlify/")) return;

  // HTML / SPA navigation -> Network-First (never lock stale index.html)
  const accept = req.headers.get("accept") || "";
  if (req.mode === "navigate" || accept.includes("text/html")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const copy = res.clone();
            caches.open(SHELL_CACHE).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(req).then((m) => m || caches.match("/")))
    );
    return;
  }

  // Images -> Cache-First with size cap
  if (url.pathname.startsWith("/assets/images/")) {
    event.respondWith(
      caches.open(MEDIA_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          if (cached) return cached;
          return fetch(req).then((res) => {
            if (res && res.status === 200) {
              cache.put(req, res.clone()).then(trimMediaCache).catch(() => {});
            }
            return res;
          });
        })
      )
    );
    return;
  }

  // JS, CSS, JSON -> Stale-While-Revalidate
  event.respondWith(
    caches.open(SHELL_CACHE).then((cache) =>
      cache.match(req).then((cached) => {
        const netPromise = fetch(req)
          .then((res) => {
            if (res && res.status === 200) {
              cache.put(req, res.clone()).catch(() => {});
            }
            return res;
          })
          .catch(() => cached);
        return cached || netPromise;
      })
    )
  );
});
