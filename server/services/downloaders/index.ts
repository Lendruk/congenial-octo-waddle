import { router } from "../../trpc";
import { movieRouter } from "./movies";

export const downloaderRouter = router({
  movies: movieRouter,
});
