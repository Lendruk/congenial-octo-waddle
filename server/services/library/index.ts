import { publicProcedure, router } from "../../trpc";

export const libraryRouter = router({ 
  [""]: publicProcedure.query(() => 'library')
});