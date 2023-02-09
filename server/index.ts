import * as trpc from "@trpc/server";
import { libraryRouter } from "./services/library";
import { mergeRouters, publicProcedure, router } from "./trpc";

import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { createContext } from "./context";
import cors from "@fastify/cors";

const appRouter = router({
  greeting: publicProcedure.query(() => "hello tRPC v10!"),
  library: libraryRouter,
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;

const server = fastify({
  maxParamLength: 5000,
});

(async () => {
  try {
    await server.register(fastifyTRPCPlugin, {
      prefix: "/",
      trpcOptions: { router: appRouter, createContext },
    });

    server.register(cors, {
      origin: ["http://localhost:4000"],
    });
    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log("Server now listening on port 3000");
  } catch (err) {
    server.log.error(err);
  }
})();
