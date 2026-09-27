import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import ProjectPreviewApp from "./ProjectPreviewApp";
import "../styles/circure-tokens.css";
import "../styles/wiki-rebuild.css";
import "../styles/wiki-features.css";
import "../styles/wetlab-editorial.css";
import "../styles/dry-lab-calm.css";
import "./project-preview.css";

const previewPage = new URLSearchParams(window.location.search).get("page");
const initialRoute = previewPage ? `/${previewPage}` : "/description";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MemoryRouter initialEntries={[initialRoute]}>
      <ProjectPreviewApp />
    </MemoryRouter>
  </React.StrictMode>,
);
