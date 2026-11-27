import { getUser } from "@netlify/identity";
import { getStore } from "@netlify/blobs";
import type { Config, Context } from "@netlify/functions";

/**
 * Cloud persistence for authenticated reader state (SM-2 notebook, bookmarks, settings).
 * Returns clean HTTP 200 { authenticated: false, state: null } when unauthenticated so
 * anonymous visitors never trigger HTTP 404 console noise.
 */
export default async (req: Request, _context: Context) => {
  try {
    const user = await getUser();
    if (!user) {
      return Response.json(
        { ok: true, authenticated: false, state: null },
        { status: 200, headers: { "cache-control": "no-store" } }
      );
    }

    const store = getStore("cce-reader-state");
    const key = `user-${user.id}`;

    if (req.method === "GET") {
      const saved = await store.get(key, { type: "json" }).catch(() => null);
      return Response.json(
        { ok: true, authenticated: true, state: saved || null },
        { status: 200, headers: { "cache-control": "no-store" } }
      );
    }

    if (req.method === "POST" || req.method === "PUT") {
      const payload = await req.json().catch(() => null);
      if (!payload || typeof payload !== "object") {
        return Response.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
      }
      await store.setJSON(key, {
        ...payload,
        uid: user.id,
        savedAt: Date.now()
      });
      return Response.json(
        { ok: true, authenticated: true, savedAt: Date.now() },
        { status: 200, headers: { "cache-control": "no-store" } }
      );
    }

    return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
  } catch (err) {
    return Response.json(
      { ok: true, authenticated: false, state: null, fallback: true, note: String(err) },
      { status: 200, headers: { "cache-control": "no-store" } }
    );
  }
};

export const config: Config = {
  path: "/api/state",
  method: ["GET", "POST", "PUT"]
};
