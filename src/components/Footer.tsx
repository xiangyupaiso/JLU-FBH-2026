import { stringToSlug } from "../utils";
import { Link } from "react-router-dom";
import { homeDestinations } from "../data/homeDestinations";

export function Footer({ variant }: { variant?: "route" }) {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer
      className={`pt-5 pb-5 footer py-5 mt-5 bg-dark text-white${
        variant === "route" ? " circure-footer footer--route" : ""
      }`}
    >
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-7 col-xs-12">
            <h4 className="mb-3">CirCure</h4>
            <p>
              {teamName} · iGEM {teamYear}
            </p>
            <p>One Platform. More Possibilities.</p>
          </div>
          <div className="col-lg-5 col-xs-12">
            <h4 className="mt-lg-0 mt-sm-3">Explore</h4>
            <nav aria-label="Footer chapters">
              <ul className="list-unstyled row g-2 mt-3">
                {homeDestinations.map(({ key, label, path }) => (
                  <li className="col-6" key={key}>
                    <Link
                      to={path}
                      className="d-inline-flex align-items-center py-2"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <hr />
        {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
        <div className="row mt-4">
          <div className="col">
            <p className="mb-0">
              <small>
                © {teamYear} - Content on this site is licensed under a{" "}
                <a
                  className="subfoot"
                  href="https://creativecommons.org/licenses/by/4.0/"
                  rel="license"
                >
                  Creative Commons Attribution 4.0 International license
                </a>
                .
              </small>
            </p>
            <p>
              <small>
                The repository used to create this website is available at{" "}
                <a href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}>
                  gitlab.igem.org/{teamYear}/{teamSlug}
                </a>
                .
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
