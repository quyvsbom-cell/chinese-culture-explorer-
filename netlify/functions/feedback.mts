import { getStore } from "@netlify/blobs";
import type { Config, Context } from "@netlify/functions";

/**
 * Stores reader feedback (UI/content/image/3D errata only; zero Q&A) into Netlify Blobs.
 */
export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await req.json().catch(() => null) as Record<string, unknown> | null;
    if (!body || typeof body !== "object") {
      return Response.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }
    if (body.botField) {
      return Response.json({ ok: true, receiptId: "#CCE-FB-IGNORED" }, { status: 200 });
    }

    const message = String(body.message || "").trim();
    if (message.length < 3 || message.length > 2500) {
      return Response.json({ ok: false, error: "Feedback message length out of bounds" }, { status: 400 });
    }

    const receiptId = String(body.receipt || ("#CCE-FB-" + String(Date.now()).slice(-6)));
    const entry = {
      receiptId,
      category: String(body.category || "ui_ux").slice(0, 40),
      context: String(body.context || "").slice(0, 240),
      url: String(body.url || "/").slice(0, 240),
      message,
      contact: String(body.contact || "").slice(0, 120),
      createdAt: new Date().toISOString()
    };

    try {
      const store = getStore("cce-reader-feedback");
      const key = `${Date.now()}-${receiptId.replace(/[^A-Za-z0-9-]/g, "")}`;
      await store.setJSON(key, entry);
    } catch (_blobErr) {
      // Allow graceful receipt response even if Blobs binding is unavailable locally
    }

    return Response.json({ ok: true, receiptId }, { status: 200, headers: { "cache-control": "no-store" } });
  } catch (err) {
    return Response.json({ ok: false, error: String(err) }, { status: 500 });
  }
};

export const config: Config = {
  path: "/api/feedback",
  method: ["POST"]
};
