import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: process.env.VITE_BASE_URL ?? "/sense-of-engineering/slides/",
  plugins: [react()],
});
