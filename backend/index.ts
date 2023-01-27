import * as trpc from '@trpc/server';
import { libraryRouter } from './services/library';
import { publicProcedure, router } from './trpc';
 
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import { createContext } from './context';

const appRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
  library: libraryRouter,
});
 
// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;

const server = fastify({
  maxParamLength: 5000,
});
server.register(fastifyTRPCPlugin, {
  prefix: '/',
  trpcOptions: { router: appRouter, createContext },
});
(async () => {
  try {
    await server.listen({ port: 3000 });
    console.log("Server now listening on port 3000");
  } catch (err) {
    server.log.error(err);
  }
})();