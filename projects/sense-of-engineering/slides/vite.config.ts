import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import path from "path";

export default defineConfig({
  base: "/sense-of-engineering/slides/",
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@lectures/shared": path.resolve(
        __dirname,
        "../../../packages/shared/src"
      ),
    },
  },
});
