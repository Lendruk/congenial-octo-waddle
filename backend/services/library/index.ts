import { publicProcedure, router } from "../../trpc";

export const libraryRouter = router({ 
  test: publicProcedure.query(() => 'test')
});