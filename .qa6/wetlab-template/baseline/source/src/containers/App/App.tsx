import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/circure-tokens.css";
import "../../styles/circure-nav.css";
import "../../styles/circure-search.css";
import "../../styles/circure-back-to-top.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";
import { BackToTop } from "../../components/BackToTop";

const WET_LAB_ROUTES = new Set([
  "/experiments",
  "/notebook",
  "/measurement",
  "/alternative-platform",
  "/safety-and-security",
  "/protocol",
]);

const DRY_LAB_ROUTES = new Set(["/model", "/software", "/hardware", "/games"]);

// The whole Engagement nav group now renders through the shared reader-route
// template on one palette.
const ENGAGEMENT_ROUTES = new Set([
  "/entrepreneurship",
  "/human-practices",
  "/education",
  "/inclusivity",
  "/sustainability",
]);

// Modules that render the reusable reader-route shell (own hero, mat, sidebar
// and closing prompt) instead of the default Header + Bootstrap container.
// Wet Lab keeps its own skin; Project, Dry Lab and Engagement run on the shared
// abstract template with a per-module palette.
const ROUTE_READER_ROUTES = new Set([
  ...WET_LAB_ROUTES,
  ...DRY_LAB_ROUTES,
  ...ENGAGEMENT_ROUTES,
  "/description",
  "/engineering",
  "/results",
  "/contribution",
  "/team",
]);

const App = () => {
  const { pathname, hash } = useLocation();
  const pathMapping = getPathMapping();
  const currentPath =
    pathname.split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`).pop() ||
    "/";
  const isWetLabRoute = WET_LAB_ROUTES.has(currentPath);
  const isRouteReader = ROUTE_READER_ROUTES.has(currentPath);

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  // Route changes start a fresh page timeline. Keep hash navigation intact: the
  // page motion hooks resolve the hash after the new content has mounted.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Header and PageContent */}
      <Routes>
        {Object.entries(pathMapping).map(
          ([path, { title, lead, component: Component }]) => (
            <Route
              key={path}
              path={path}
              element={
                ROUTE_READER_ROUTES.has(path) ? (
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
          ),
        )}
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

      <BackToTop />

      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      <Footer
        variant={isWetLabRoute ? "wet-lab" : isRouteReader ? "route" : undefined}
      />
    </>
  );
};

export default App;
