import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";
import { PortfolioProvider } from "./context/PortfolioContext.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </HashRouter>
  </StrictMode>,
);
