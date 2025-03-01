import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [svgr(), react(), envCompatible()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          secure: false,
          ws: true,
        },
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: "index.html",
        },
      },
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
};
