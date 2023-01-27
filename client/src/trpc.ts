import { AppRouter } from "../../server/index";
import { createTRPCSolid } from "solid-trpc";
import { httpBatchLink } from "@trpc/client";
import { QueryClient } from "@tanstack/solid-query";

export const trpc = createTRPCSolid<AppRouter>();
export const client = trpc.createClient({
  links: [
    httpBatchLink({
      url: "/",
    }),
  ],
});
export const queryClient = new QueryClient();