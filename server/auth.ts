import {Hono} from 'hono'
import {authServer} from '@/lib/auth-server'
import { cors } from "hono/cors";

export const authRoute = new Hono()

authRoute.use(
	"/*", // or replace with "*" to enable cors for all routes
	cors({
		origin: "http://localhost:3000", // replace with your origin
		allowHeaders: ["Content-Type", "Authorization"],
		allowMethods: ["POST", "GET", "OPTIONS"],
		exposeHeaders: ["Content-Length"],
		maxAge: 600,
		credentials: true,
	}),
);

authRoute.on(["POST", "GET"], "/*", (c) => {
	return authServer.handler(c.req.raw);
});
