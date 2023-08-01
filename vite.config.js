import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as packageJson from "./package.json";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/components/"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "components/index.js"),
      name: "map-component",
      formats: ["es", "umd"],
      fileName: (format) => `map-component.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.devDependencies)],
    },
  },
});
