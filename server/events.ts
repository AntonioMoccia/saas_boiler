import { Hono } from "hono";
import { authMiddleware } from "./middlewares/auth-middleware";


export const events = new Hono().basePath("/events").use("*", authMiddleware);

 
events.get("/", (c) => {
  return c.json({ message: "Welcome to the Events API!" });
});
