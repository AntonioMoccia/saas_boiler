import { authServer } from "@/lib/auth-server";

export const authMiddleware = async (c: any, next: any) => {
  const session = await authServer.api.getSession({ headers: c.req.raw.headers });
  console.log("Session auth mid", session);
  if (!session) {
    c.set("user", null);
    c.set("session", null);
    c.json({
      error: "Unauthorized",
    });
    c.status(401);
    return c.json({ error: "Unauthorized" });
  }
  c.set("user", session.user);
  c.set("session", session.session);
  await next();
};
