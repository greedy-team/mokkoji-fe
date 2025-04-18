/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string;
  readonly VITE_HOST_URL: string;
  readonly VITE_API_URL: string;
  readonly VITE_AMPLITUDE_API_KEY: string;
  // 다른 환경 변수들에 대한 타입 정의...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
