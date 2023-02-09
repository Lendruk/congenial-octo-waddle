import { AppRouter } from "../../server/index";
import { createTRPCSolid } from "solid-trpc";
import { httpBatchLink } from "@trpc/client";
import { QueryClient } from "@tanstack/solid-query";

export const trpc = createTRPCSolid<AppRouter>();
export const client = trpc.createClient({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
  ],
});
export const queryClient = new QueryClient();
