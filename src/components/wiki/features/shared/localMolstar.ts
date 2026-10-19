type MolstarGlobal = NonNullable<Window["molstar"]>;

let pending: Promise<MolstarGlobal> | undefined;

/** One local runtime shared by the Model and Software viewers. */
export function loadLocalMolstar(): Promise<MolstarGlobal> {
  if (window.molstar) return Promise.resolve(window.molstar);
  if (pending) return pending;

  pending = new Promise<MolstarGlobal>((resolve, reject) => {
    const base = import.meta.env.BASE_URL;
    if (!document.querySelector("link[data-molstar-css]")) {
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = `${base}vendor/molstar/molstar.css`;
      css.dataset.molstarCss = "true";
      document.head.appendChild(css);
    }

    const script = document.createElement("script");
    script.src = `${base}vendor/molstar/molstar.js`;
    script.dataset.molstarJs = "true";
    script.async = true;
    const timer = window.setTimeout(() => fail(), 30_000);
    const fail = () => {
      window.clearTimeout(timer);
      script.remove();
      reject(new Error("The 3D viewer could not be loaded. Please try again."));
    };
    script.onload = () => {
      window.clearTimeout(timer);
      if (window.molstar) resolve(window.molstar);
      else fail();
    };
    script.onerror = fail;
    document.head.appendChild(script);
  }).catch((error: unknown) => {
    pending = undefined;
    throw error;
  });
  return pending;
}
