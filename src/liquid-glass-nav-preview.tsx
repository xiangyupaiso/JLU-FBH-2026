import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./containers/App/App.tsx";
import "./styles/circure-nav-liquid-glass-preview.css";

document.documentElement.classList.add("liquid-glass-preview");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
