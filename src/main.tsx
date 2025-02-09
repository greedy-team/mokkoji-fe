import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { worker } from "./mocks/browsers.ts";

async function enableMocking() {
  if (import.meta.env.VITE_NODE_ENV !== "development") {
    return;
  }

  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
