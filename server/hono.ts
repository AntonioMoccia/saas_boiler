import { Hono } from "hono";

import { events } from "./events";

export const app = new Hono().basePath("/api");

app.route("/", events);

app.get("/", (c) => {
  return c.json({ message: "Welcome to the API root!" });
});
