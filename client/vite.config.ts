import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid()],
  server: { cors: true, host: "localhost", port: 4000 },
});
