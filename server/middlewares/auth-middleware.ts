import { auth } from "@/lib/auth";

export const authMiddleware = async (c: any, next: any) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) {
    c.set("user", null);
    c.set("session", null);
    c.json({
        error: "Unauthorized",
    })
    await next();
    return;
  }
  c.set("user", session.user);
  c.set("session", session.session);
  await next();
};
