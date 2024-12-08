import { clerkMiddleware } from "@hono/clerk-auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");
app.use("*", clerkMiddleware());

export const GET = handle(app);
export const POST = handle(app);
