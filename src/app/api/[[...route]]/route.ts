import { clerkMiddleware } from "@hono/clerk-auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import accounts from "./accounts";
import categories from "./categories";
import plaid from "./plaid";
import subscriptions from "./subscriptions";
import summary from "./summary";
import transactions from "./transactions";

export const runtime = "nodejs";

const app = new Hono().basePath("/api");
app.use("*", clerkMiddleware());

const routes = app
  .route("/summary", summary)
  .route("/accounts", accounts)
  .route("/categories", categories)
  .route("/transactions", transactions)
  .route("/plaid", plaid)
  .route("/subscriptions", subscriptions);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
