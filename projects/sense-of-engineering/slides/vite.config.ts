import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/sense-of-engineering/slides/",
  plugins: [react()],
  resolve: {
    alias: {
      "@lectures/shared/theme": path.resolve(
        __dirname,
        "../../../packages/shared/src/theme/tokens.css"
      ),
    },
  },
});
