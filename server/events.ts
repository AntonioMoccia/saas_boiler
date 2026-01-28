import { Hono } from "hono";
import { authMiddleware } from "@/server/middlewares/auth-middleware";

export const events = new Hono();

events.get("/", authMiddleware, (c) => {
  return c.json({ message: "Welcome to the Events API!" });
});
