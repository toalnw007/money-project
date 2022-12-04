import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {

      '/api': {
        target: 'http://146.190.93.206:8075/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }

    }
  }
});