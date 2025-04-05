import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import { cartographer } from "@replit/vite-plugin-cartographer";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";


export default defineConfig({
  plugins: [
    react(),
    // runtimeErrorOverlay(),
    themePlugin(),
    cartographer(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
base: "/please",
});