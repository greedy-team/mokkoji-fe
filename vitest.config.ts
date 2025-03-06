import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom", 
    setupFiles: "src/setupTests.ts", 
    alias: {
      "@": resolve(__dirname, "./src"), // '@'를 src 폴더로 설정(vite.config와 일치)
    },
  },
});
