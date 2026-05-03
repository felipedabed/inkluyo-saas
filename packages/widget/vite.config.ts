import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "InkluyoWidget",
      formats: ["iife", "es"],
      fileName: (format) => `widget.${format}.js`,
    },
    minify: mode === "production",
    sourcemap: mode !== "production",
    rollupOptions: {
      // No external deps — widget must be fully self-contained
      external: [],
    },
    // Target modern-ish browsers; we can polyfill if needed later
    target: "es2018",
    outDir: "dist",
    emptyOutDir: true,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
}));
