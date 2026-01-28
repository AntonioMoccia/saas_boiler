import { Hono } from "hono";

import { events } from "@/server/events";
import {authRoute} from '@/server/auth'

import {authMiddleware} from '@/server/middlewares/auth-middleware'

const app = new Hono().basePath("/api")

const routes = app
.get("/", (c) => {
  return c.json({ message: "Welcome to the API root!" });
})
.route("/auth", authRoute)
.route("/events", events)

export default app 
export type AppType = typeof  routes

