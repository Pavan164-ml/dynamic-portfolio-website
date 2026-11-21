import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/dynamic-portfolio-website/",
  build: {
    outDir: "dist",
    assetsDir: "",
    sourcemap: false,
  },
});
