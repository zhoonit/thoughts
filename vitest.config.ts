import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["packages/**/tests/**/*.test.{ts,tsx}"],
    globals: true,
  },
});
