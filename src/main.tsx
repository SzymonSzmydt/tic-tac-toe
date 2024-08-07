import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Normalize } from "styled-normalize";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Normalize />
    <App />
  </StrictMode>
);
