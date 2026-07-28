import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/circure-tokens.css"; // overrides Bootstrap base with CirCure tokens
import "../../styles/circure-nav.css"; // global site-header / mega-menu styles
import "../../styles/circure-footer.css"; // global brand footer / final team reveal
import "../../styles/circure-back-to-top.css"; // global floating return-to-top control
import "../../styles/wiki-disclosures.css"; // shared theme-aware accordion language
import { Route, Routes, useLocation } from "react-router-dom";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";
import { BackToTop } from "../../components/BackToTop";
import { Home } from "../../contents";

const App = () => {
  const pathMapping = getPathMapping();
  const { pathname } = useLocation();
  const teamSlug = stringToSlug(import.meta.env.VITE_TEAM_NAME);
  const currentPath = pathname.split(`/${teamSlug}`).pop() || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Header and PageContent */}
      <Routes>
        {/* Home is full-bleed: bypass Header + container so the story-nav
            chapters can render edge-to-edge with their own scroll-driven
            geometry. Navbar stays on top; Footer still renders below to
            keep the mandatory license + gitlab.igem.org block visible. */}
        <Route path="/" element={<Home />} />
        {Object.entries(pathMapping)
          .filter(([path]) => path !== "/")
          .map(([path, { title, lead, layout, component: Component }]) => (
            <Route
              key={path}
              path={path}
              element={
                layout === "immersive" ? (
                  <Component />
                ) : (
                  <>
                    <Header title={title || ""} lead={lead || ""} />
                    <div className="container">
                      <Component />
                    </div>
                  </>
                )
              }
            />
          ))}
        <Route
          path="*"
          element={
            <>
              <Header
                title="Not Found"
                lead="The requested URL was not found on this server."
              />
              <NotFound />
            </>
          }
        />
      </Routes>

      {/* Footer */}
      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
