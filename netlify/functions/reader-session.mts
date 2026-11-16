import { getUser } from "@netlify/identity";
import type { Config, Context } from "@netlify/functions";

/**
 * Verifies the active Netlify Identity (Google OAuth / Member) JWT session
 * for protected scholarly reading features and returns sanitized reader profile claims.
 */
export default async (req: Request, context: Context) => {
  const user = await getUser();
  if (!user) {
    return Response.json(
      { authenticated: false, user: null, error: "Authentication required" },
      { status: 401, headers: { "cache-control": "no-store" } }
    );
  }

  return Response.json(
    {
      authenticated: true,
      user: {
        id: user.id,
        email: user.email ?? null,
        fullName:
          (user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name)) ||
          user.email ||
          "Thành viên",
        avatarUrl: (user.user_metadata && user.user_metadata.avatar_url) || null,
        provider: (user.app_metadata && user.app_metadata.provider) || "google",
        roles: user.roles || []
      }
    },
    { status: 200, headers: { "cache-control": "no-store" } }
  );
};

export const config: Config = {
  path: "/api/reader-session",
  method: ["GET"]
};
