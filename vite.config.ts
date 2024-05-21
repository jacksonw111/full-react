import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
//({ command, mode, isSsrBuild, isPreview })
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: loadEnv(mode, process.cwd()).VITE_APP_BASE_API,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/coze": {
        target: loadEnv(mode, process.cwd()).VITE_COZE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/coze/, ""),
      },
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
}));
