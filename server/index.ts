import { libraryRouter } from "./services/library";
import { publicProcedure, router } from "./trpc";

import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { createContext } from "./context";
import cors from "@fastify/cors";
import { downloaderRouter } from "./services/downloaders";

const appRouter = router({
  greeting: publicProcedure.query(() => "hello tRPC v10!"),
  library: libraryRouter,
  downloader: downloaderRouter,
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;

const server = fastify({
  maxParamLength: 5000,
});

(async () => {
  try {
    await server.register(cors, {
      origin: (origin, cb) => {
        const hostname = new URL(origin).hostname;
        if (hostname === "localhost") {
          //  Request from localhost will pass
          cb(null, true);
          return;
        }
        // Generate an error on other origins, disabling access
        cb(new Error("Not allowed"), false);
      },
    });

    await server.register(fastifyTRPCPlugin, {
      prefix: "/",
      trpcOptions: { router: appRouter, createContext },
    });

    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log("Server now listening on port 3000");
  } catch (err) {
    server.log.error(err);
  }
})();
