import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
//import { worker } from "./mocks/browsers.ts";
import { GlobalStyle } from "./global.ts";

async function enableMocking() {
  if (import.meta.env.VITE_NODE_ENV !== "development") {
    console.log("!")
    return;
  }
  return;
  //return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <GlobalStyle />
      <App />
    </StrictMode>
  );
});
