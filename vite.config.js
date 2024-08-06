import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  cacheDir: '.cache',
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      buildDirectory: '.build',
      ignoredRouteFiles: ["**/.*"],
    })],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
});
