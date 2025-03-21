import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./global.ts";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <GlobalStyle />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)