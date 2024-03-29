import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

const config = {
  host: "0.0.0.0",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      plugins: [["@swc/plugin-emotion", {}]],
    }),
    TanStackRouterVite(),
  ],
  server: {
    host: config.host,
  },
  esbuild: {
    jsx: "automatic",
  },
});
