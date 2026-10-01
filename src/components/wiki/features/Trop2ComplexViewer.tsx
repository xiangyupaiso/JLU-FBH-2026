import { useEffect, useRef, useState, useCallback } from "react";
import trop2Pdb from "../../../assets/structures/trop2-ctl1.pdb?raw";
import { TROP2_COMPLEX_DATA } from "../../../data/trop2ComplexData";
import "../../../styles/trop2-complex-viewer.css";

type ActiveSegment = "all" | "epitope" | "alpha1" | "alpha2" | "pocket";

/**
 * 100% Local & iGEM-Compliant Loader for Mol* Viewer
 * Guarantees zero external network requests and offline closed loop.
 */
function loadLocalMolstar(): Promise<any> {
  if (typeof window !== "undefined" && window.molstar) {
    return Promise.resolve(window.molstar);
  }
  return new Promise((resolve, reject) => {
    const baseUrl = import.meta.env.BASE_URL || "/";
    const prefix = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";

    if (!document.querySelector("link[data-molstar-css]")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `${prefix}vendor/molstar/molstar.css`;
      link.setAttribute("data-molstar-css", "true");
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      "script[data-molstar-js]"
    );
    if (existingScript) {
      if (window.molstar) resolve(window.molstar);
      else {
        existingScript.addEventListener("load", () => {
          if (window.molstar) resolve(window.molstar);
          else reject(new Error("Mol* script loaded but window.molstar is undefined"));
        });
        existingScript.addEventListener("error", reject);
      }
      return;
    }

    const script = document.createElement("script");
    script.src = `${prefix}vendor/molstar/molstar.js`;
    script.setAttribute("data-molstar-js", "true");
    script.async = true;
    script.onload = () => {
      if (window.molstar) resolve(window.molstar);
      else reject(new Error("Mol* script loaded but window.molstar is undefined"));
    };
    script.onerror = () =>
      reject(new Error(`Failed to load local Mol* script from ${script.src}`));
    document.head.appendChild(script);
  });
}

export function Trop2ComplexViewer() {
  const figureRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const structureRef = useRef<any>(null);
  const epitopeCompRef = useRef<any>(null);
  const pocketCompRef = useRef<any>(null);
  const alpha1CompRef = useRef<any>(null);
  const alpha2CompRef = useRef<any>(null);
  const surfaceReprRef = useRef<any>(null);
  const isSurfaceUpdatingRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);
  const overlayRef = useRef<SVGSVGElement>(null);
  const contactRefs = useRef<(SVGGElement | null)[]>([]);
  const cameraSubsRef = useRef<{ unsubscribe: () => void }[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPolarContacts, setShowPolarContacts] = useState(true);
  const [showSurface, setShowSurface] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<ActiveSegment>("all");

  const showPolarContactsRef = useRef(true);

  useEffect(() => {
    showPolarContactsRef.current = showPolarContacts;
  }, [showPolarContacts]);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  // Project the polar contacts from the 3D camera straight onto the SVG lines.
  // Writes DOM attributes imperatively so camera motion never re-renders React.
  const updateProjections = useCallback(() => {
    if (!showPolarContactsRef.current) return;
    const svg = overlayRef.current;
    const canvas3d = viewerRef.current?.plugin?.canvas3d;
    if (!svg || !canvas3d) return;

    const camera = canvas3d.camera;
    const { x: vx, y: vy, width, height } = camera.viewport;
    if (!width || !height) return;

    // camera.project already returns window coordinates in drawing-buffer pixels
    // (origin bottom-left), so the viewBox maps them onto CSS pixels at any DPR.
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    const v = [0, 0, 0, 0];
    const project = (pos: [number, number, number]) => {
      v[0] = pos[0];
      v[1] = pos[1];
      v[2] = pos[2];
      camera.project(v, v);
      const x = v[0] - vx;
      const y = height - (v[1] - vy);
      const visible = v[2] > 0 && v[2] < 1 && x >= 0 && x <= width && y >= 0 && y <= height;
      return { x, y, visible };
    };

    TROP2_COMPLEX_DATA.polarContacts.forEach((contact, i) => {
      const group = contactRefs.current[i];
      if (!group) return;
      const p1 = project(contact.start);
      const p2 = project(contact.end);
      for (const line of Array.from(group.children)) {
        line.setAttribute("x1", String(p1.x));
        line.setAttribute("y1", String(p1.y));
        line.setAttribute("x2", String(p2.x));
        line.setAttribute("y2", String(p2.y));
      }
      group.setAttribute("visibility", p1.visible || p2.visible ? "visible" : "hidden");
    });
  }, []);

  // RequestAnimationFrame throttled projection updater (at most one DOM write per frame)
  const scheduleUpdateProjections = useCallback(() => {
    if (!showPolarContactsRef.current) return;
    if (rafIdRef.current !== null) return;
    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null;
      updateProjections();
    });
  }, [updateProjections]);

  // Re-run projection on layer toggle
  useEffect(() => {
    if (showPolarContacts) {
      scheduleUpdateProjections();
    }
  }, [showPolarContacts, scheduleUpdateProjections]);

  // Initialize Mol*
  useEffect(() => {
    let isMounted = true;

    loadLocalMolstar()
      .then(async (molstar) => {
        if (!isMounted || !containerRef.current) return;

        // Cleanup existing viewer
        if (viewerRef.current) {
          try {
            viewerRef.current.dispose();
          } catch {
            /* ignore */
          }
        }

        // Initialize high-fidelity Mol* viewer with internal debug controls completely disabled
        const viewer = await molstar.Viewer.create(containerRef.current, {
          layoutIsExpanded: false,
          layoutShowControls: false,
          layoutShowRemoteState: false,
          layoutShowSequence: false,
          layoutShowLog: false,
          layoutShowLeftPanel: false,
          collapseLeftPanel: true,
          collapseRightPanel: true,
          disableAntialiasing: false,
          // Mol* multiplies pixelScale by devicePixelRatio; 1 already renders at native DPR.
          pixelScale: 1,
          viewportShowReset: false,
          viewportShowScreenshotControls: false,
          viewportShowControls: false,
          viewportShowExpand: false,
          viewportShowToggleFullscreen: false,
          viewportShowSettings: false,
          viewportShowSelectionMode: false,
          viewportShowAnimation: false,
          viewportShowTrajectoryControls: false,
          viewportBackgroundColor: isDarkMode ? "#0b0f19" : "#f8fafc",
        });

        if (!isMounted) {
          viewer.dispose();
          return;
        }

        viewerRef.current = viewer;
        const plugin = viewer.plugin;

        // Ensure internal config turns off all default buttons that cause heavy panel mounts
        if (plugin?.config && window.molstar?.PluginConfig?.Viewport) {
          const V = window.molstar.PluginConfig.Viewport;
          plugin.config.set(V.ShowReset, false);
          plugin.config.set(V.ShowControls, false);
          plugin.config.set(V.ShowSettings, false);
          plugin.config.set(V.ShowScreenshotControls, false);
          plugin.config.set(V.ShowExpand, false);
          plugin.config.set(V.ShowToggleFullscreen, false);
          plugin.config.set(V.ShowSelectionMode, false);
          plugin.config.set(V.ShowAnimation, false);
          plugin.config.set(V.ShowTrajectoryControls, false);
          if (V.ShowIllumination) plugin.config.set(V.ShowIllumination, false);
          if (V.ShowXR) plugin.config.set(V.ShowXR, "never");
        }

        // SSAO, ambient contact shadows, and silhouette outline (opaque geometry only,
        // so the transparent surface does not pay for extra depth passes)
        if (plugin.canvas3d) {
          plugin.canvas3d.setProps({
            postprocessing: {
              outline: {
                name: "on",
                params: {
                  scale: 1,
                  color: 0x000000,
                  threshold: 0.33,
                  includeTransparent: false,
                },
              },
              occlusion: {
                name: "on",
                params: {
                  multiScale: { name: "off", params: {} },
                  radius: 5,
                  bias: 0.8,
                  blurKernelSize: 15,
                  blurDepthBias: 0.5,
                  samples: 32,
                  resolutionScale: 0.75,
                  color: 0x000000,
                  transparentThreshold: 0.4,
                },
              },
            },
            renderer: {
              backgroundColor: isDarkMode ? 0x0b0f19 : 0xf8fafc,
            },
          });
        }

        // Parse structure directly to control representations cleanly
        const data = await plugin.builders.data.rawData({
          data: trop2Pdb,
          label: "Trop2-CTL1 Complex",
        });
        const trajectory = await plugin.builders.structure.parseTrajectory(data, "pdb");
        const model = await plugin.builders.structure.createModel(trajectory);
        const structure = await plugin.builders.structure.createStructure(model);
        structureRef.current = structure;

        // 1. MHC Heavy Chain (A) & β2M (B): Soft Lavender Cartoon Ribbon
        // Kept opaque: a transparent cartoon pushes most of the scene through the
        // OIT transparency pass and the SSAO transparent-depth pass every frame.
        const mhcComp = await plugin.builders.structure.tryCreateComponent(
          structure,
          {
            type: {
              name: "script",
              params: { language: "pymol", expression: "chain A or chain B" },
            },
            label: "MHC Heavy Chain & β2M",
          },
          "mhc-backbone"
        );
        if (mhcComp) {
          await plugin.builders.structure.representation.addRepresentation(mhcComp, {
            type: "cartoon",
            color: "uniform",
            colorParams: { value: 0xc7d2fe },
          });
        }

        // 2. Trop2-CTL1 Epitope (Chain C, 9-mer SVCWCVNSV): Vibrant Cyan Ball-and-Stick
        const epitopeComp = await plugin.builders.structure.tryCreateComponent(
          structure,
          {
            type: {
              name: "script",
              params: { language: "pymol", expression: "chain C" },
            },
            label: "Trop2-CTL1 Epitope (Chain C)",
          },
          "trop2-epitope"
        );
        epitopeCompRef.current = epitopeComp;
        if (epitopeComp) {
          await plugin.builders.structure.representation.addRepresentation(epitopeComp, {
            type: "ball-and-stick",
            color: "uniform",
            colorParams: { value: 0x00e5ff },
            typeParams: { sizeFactor: 0.28 },
          });
        }

        // 3. MHC Groove 13 Key Anchor Residues: Deep Royal Blue Ball-and-Stick
        const pocketResStr = TROP2_COMPLEX_DATA.pocketResiduesChainA.join("+");
        const pocketComp = await plugin.builders.structure.tryCreateComponent(
          structure,
          {
            type: {
              name: "script",
              params: { language: "pymol", expression: `chain A and resi ${pocketResStr}` },
            },
            label: "MHC Groove Pocket Anchors",
          },
          "pocket-anchors"
        );
        pocketCompRef.current = pocketComp;
        if (pocketComp) {
          await plugin.builders.structure.representation.addRepresentation(pocketComp, {
            type: "ball-and-stick",
            color: "uniform",
            colorParams: { value: 0x1d4ed8 },
            typeParams: { sizeFactor: 0.22 },
          });
        }

        // 4. α1 Helix (Chain A, residues 50-85)
        const a1Comp = await plugin.builders.structure.tryCreateComponent(
          structure,
          {
            type: {
              name: "script",
              params: { language: "pymol", expression: "chain A and resi 50-85" },
            },
            label: "MHC α1-Helix",
          },
          "alpha1-helix"
        );
        alpha1CompRef.current = a1Comp;

        // 5. α2 Helix (Chain A, residues 138-175)
        const a2Comp = await plugin.builders.structure.tryCreateComponent(
          structure,
          {
            type: {
              name: "script",
              params: { language: "pymol", expression: "chain A and resi 138-175" },
            },
            label: "MHC α2-Helix",
          },
          "alpha2-helix"
        );
        alpha2CompRef.current = a2Comp;

        // Reset camera to focus on epitope cleft
        if (plugin.canvas3d) {
          plugin.managers.camera.reset(void 0, 0);
          // Camera moves and canvas resizes (e.g. fullscreen) both re-project the overlay
          cameraSubsRef.current = [
            plugin.canvas3d.camera.stateChanged.subscribe(scheduleUpdateProjections),
            plugin.canvas3d.resized.subscribe(scheduleUpdateProjections),
          ];
        }

        scheduleUpdateProjections();
        setIsLoading(false);
      })
      .catch((err: unknown) => {
        if (!isMounted) return;
        const msg = err instanceof Error ? err.message : "Failed to load 3D visualizer";
        console.error("Mol* initialization error:", err);
        setError(msg);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
      cameraSubsRef.current.forEach((sub) => sub.unsubscribe());
      cameraSubsRef.current = [];
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (viewerRef.current) {
        try {
          viewerRef.current.dispose();
          viewerRef.current = null;
        } catch {
          /* ignore */
        }
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle Reset View
  const handleResetView = useCallback(() => {
    setActiveSegment("all");
    const viewer = viewerRef.current;
    if (viewer?.plugin?.managers?.camera) {
      viewer.plugin.managers.camera.reset(void 0, 600);
      scheduleUpdateProjections();
    }
  }, [scheduleUpdateProjections]);

  // Handle Peptide Surface Toggle (Clean create/delete, zero accumulation, guarded against race conditions)
  const handleToggleSurface = useCallback(async () => {
    if (isSurfaceUpdatingRef.current) return;
    const viewer = viewerRef.current;
    const plugin = viewer?.plugin;
    const epitopeComp = epitopeCompRef.current;
    if (!plugin || !epitopeComp) return;

    isSurfaceUpdatingRef.current = true;
    const next = !showSurface;
    setShowSurface(next);

    try {
      if (next) {
        if (!surfaceReprRef.current) {
          surfaceReprRef.current =
            await plugin.builders.structure.representation.addRepresentation(epitopeComp, {
              type: "molecular-surface",
              color: "uniform",
              colorParams: { value: 0x38bdf8 },
              typeParams: { alpha: 0.45, ignoreHydrogens: true },
            });
        }
      } else {
        if (surfaceReprRef.current) {
          await plugin.state.data.build().delete(surfaceReprRef.current.ref).commit();
          surfaceReprRef.current = null;
        }
      }
    } catch {
      /* ignore */
    } finally {
      isSurfaceUpdatingRef.current = false;
    }
  }, [showSurface]);

  // Handle Theme Toggle
  const handleToggleTheme = useCallback(() => {
    const viewer = viewerRef.current;
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (viewer?.plugin?.canvas3d) {
      viewer.plugin.canvas3d.setProps({
        renderer: {
          backgroundColor: nextDark ? 0x0b0f19 : 0xf8fafc,
        },
      });
      scheduleUpdateProjections();
    }
  }, [isDarkMode, scheduleUpdateProjections]);

  // Handle Fullscreen Toggle
  const handleToggleFullscreen = useCallback(() => {
    if (!figureRef.current) return;
    if (!document.fullscreenElement) {
      figureRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  // Handle Segment Click Focus & Highlight (instantaneous native sphere focus, zero lag)
  const handleFocusSegment = useCallback(
    (target: ActiveSegment) => {
      setActiveSegment(target);
      const viewer = viewerRef.current;
      const plugin = viewer?.plugin;
      if (!plugin?.canvas3d) return;

      if (target === "all") {
        plugin.managers.camera.reset(void 0, 600);
        return;
      }

      let compCell: any = null;
      if (target === "epitope") compCell = epitopeCompRef.current;
      else if (target === "pocket") compCell = pocketCompRef.current;
      else if (target === "alpha1") compCell = alpha1CompRef.current;
      else if (target === "alpha2") compCell = alpha2CompRef.current;

      const sphere = compCell?.cell?.obj?.data?.boundary?.sphere;
      if (sphere && plugin.managers.camera.focusSphere) {
        plugin.managers.camera.focusSphere(sphere, { durationMs: 600 });
      } else {
        plugin.managers.camera.reset(void 0, 600);
      }
    },
    []
  );

  return (
    <figure ref={figureRef} className="trop2-viewer-card" aria-labelledby="trop2-viewer-title">
      <header className="trop2-viewer-header">
        <div className="trop2-viewer-header__titles">
          <span className="trop2-viewer-header__badge">
            Fig. M-01 / Interactive 3D Complex
          </span>
          <h3 className="trop2-viewer-header__title" id="trop2-viewer-title">
            Structural Confirmation of Trop2-CTL1 (SVCWCVNSV) in HLA-A*02:01 / B2M
          </h3>
        </div>
      </header>

      {/* Segment Quick-Focus Pill Strip */}
      <div className="trop2-viewer-pills" role="navigation" aria-label="Segment Focus Bar">
        <span className="trop2-viewer-toolbar__label">Segment Focus:</span>
        <div className="trop2-viewer-pills__group">
          <button
            type="button"
            className={`trop2-viewer-pill ${activeSegment === "all" ? "is-active" : ""}`}
            onClick={() => handleFocusSegment("all")}
          >
            Full Complex
          </button>
          <button
            type="button"
            className={`trop2-viewer-pill trop2-viewer-pill--cyan ${
              activeSegment === "epitope" ? "is-active" : ""
            }`}
            onClick={() => handleFocusSegment("epitope")}
          >
            Trop2-CTL1 (Epitope)
          </button>
          <button
            type="button"
            className={`trop2-viewer-pill ${activeSegment === "alpha1" ? "is-active" : ""}`}
            onClick={() => handleFocusSegment("alpha1")}
          >
            MHC α1-Helix
          </button>
          <button
            type="button"
            className={`trop2-viewer-pill ${activeSegment === "alpha2" ? "is-active" : ""}`}
            onClick={() => handleFocusSegment("alpha2")}
          >
            MHC α2-Helix
          </button>
          <button
            type="button"
            className={`trop2-viewer-pill trop2-viewer-pill--blue ${
              activeSegment === "pocket" ? "is-active" : ""
            }`}
            onClick={() => handleFocusSegment("pocket")}
          >
            13 Pocket Anchors
          </button>
        </div>
      </div>

      {/* Dedicated Academic Control Strip */}
      <div className="trop2-viewer-toolbar" role="toolbar" aria-label="3D Visualization Controls">
        <div className="trop2-viewer-toolbar__section">
          <span className="trop2-viewer-toolbar__label">Navigation</span>
          <div className="trop2-viewer-toolbar__group">
            <button
              type="button"
              className="trop2-viewer-btn"
              onClick={handleResetView}
              title="Reset to default camera orientation"
            >
              Reset View
            </button>
          </div>
        </div>

        <div className="trop2-viewer-toolbar__section">
          <span className="trop2-viewer-toolbar__label">Display Layers</span>
          <div className="trop2-viewer-toolbar__group">
            <button
              type="button"
              className={`trop2-viewer-btn ${showPolarContacts ? "is-active" : ""}`}
              onClick={() => setShowPolarContacts((prev) => !prev)}
              title="Toggle 17 polar contact pairs (yellow dashed lines)"
            >
              <i className="trop2-viewer-btn__dot" aria-hidden="true" />
              Polar Contacts ({TROP2_COMPLEX_DATA.statistics.polarContactsCount})
            </button>
            <button
              type="button"
              className={`trop2-viewer-btn ${showSurface ? "is-active" : ""}`}
              onClick={handleToggleSurface}
              title="Toggle peptide solvent-accessible surface"
            >
              <i className="trop2-viewer-btn__dot" aria-hidden="true" />
              Peptide Surface
            </button>
          </div>
        </div>

        <div className="trop2-viewer-toolbar__section">
          <span className="trop2-viewer-toolbar__label">Viewport</span>
          <div className="trop2-viewer-toolbar__group">
            <button
              type="button"
              className="trop2-viewer-btn"
              onClick={handleToggleTheme}
              title="Toggle viewport background between dark slate and light paper"
            >
              Theme: {isDarkMode ? "Dark" : "Light"}
            </button>
            <button
              type="button"
              className={`trop2-viewer-btn ${isFullscreen ? "is-active" : ""}`}
              onClick={handleToggleFullscreen}
              title="Toggle fullscreen view"
            >
              {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`trop2-viewer-stage ${!isDarkMode ? "trop2-viewer-stage--light" : ""}`}
      >
        {isLoading && (
          <div className="trop2-viewer-loading">
            <div className="trop2-viewer-spinner" />
            <span>Loading Mol* 3D complex (6,098 atoms)...</span>
          </div>
        )}

        {error && (
          <div className="trop2-viewer-loading">
            <span style={{ color: "#ef4444" }}>Error: {error}</span>
          </div>
        )}

        {/* Mol* Target Canvas (native cursor: keeps the global sheep cursor off the WebGL stage) */}
        <div ref={containerRef} className="trop2-viewer-canvas" data-native-cursor />

        {/* 2D Vector Projection Overlay for Polar Contacts. Line coordinates are
            written by updateProjections; React only mounts the elements. */}
        <svg
          ref={overlayRef}
          className="trop2-viewer-svg-overlay"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {showPolarContacts &&
            TROP2_COMPLEX_DATA.polarContacts.map((_, i) => (
              <g
                key={`contact-${i}`}
                ref={(el) => {
                  contactRefs.current[i] = el;
                }}
                visibility="hidden"
              >
                {/* Wide faint stroke stands in for a per-frame drop-shadow filter */}
                <line
                  stroke="rgba(250, 204, 21, 0.25)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                <line
                  stroke="#facc15"
                  strokeWidth="1.8"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                  opacity="0.95"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            ))}
        </svg>

        <div className="trop2-viewer-hint">
          <span>Left-click: Rotate • Right-click: Pan • Scroll: Zoom • Click residue: Focus & highlight</span>
        </div>
      </div>

      <figcaption className="trop2-viewer-footer">
        <p className="trop2-viewer-caption">
          <strong>Figure M-01: Mol* rotatable 3D model of target-epitope complex.</strong> Reconstructed
          from PyMOL source session (<code>Trop2-CTL1.pse</code>). The HLA-A*02:01 heavy chain (Chain A)
          and β2-microglobulin (Chain B) are rendered in lavender cartoon ribbons.
          The Trop2-derived 9-mer CTL1 epitope (<strong>{TROP2_COMPLEX_DATA.epitopeSequence}</strong>, Chain C) is
          anchored in the MHC groove and displayed as prominent cyan sticks. Royal blue sticks
          delineate the 13 essential pocket anchoring residues (Tyr7, Glu63, Lys66, His70, Asp77, Tyr84,
          Tyr99, Thr143, Lys146, Trp147, Gln155, Tyr159, Tyr171). Yellow dashed lines trace the 17
          polar interaction contacts that stabilize the core epitope within the cleft.
        </p>

        {/* Visual Legend */}
        <div className="trop2-viewer-legend">
          <div className="trop2-viewer-legend__item">
            <span className="trop2-viewer-legend__dot trop2-viewer-legend__dot--cyan" />
            <span>Trop2-CTL1 Peptide (<code>{TROP2_COMPLEX_DATA.epitopeSequence}</code>)</span>
          </div>
          <div className="trop2-viewer-legend__item">
            <span className="trop2-viewer-legend__dot trop2-viewer-legend__dot--blue" />
            <span>13 MHC Pocket Contact Residues (Sticks)</span>
          </div>
          <div className="trop2-viewer-legend__item">
            <span className="trop2-viewer-legend__dot trop2-viewer-legend__dot--lavender" />
            <span>HLA-A*02:01 &amp; β2M Backbone (Cartoon)</span>
          </div>
          <div className="trop2-viewer-legend__item">
            <span className="trop2-viewer-legend__dot trop2-viewer-legend__dot--yellow" />
            <span>17 Polar Interactions (Dashed Lines)</span>
          </div>
        </div>

        {/* Numeric Statistics Chips */}
        <div className="trop2-viewer-stats">
          <div className="trop2-viewer-stat">
            <span className="trop2-viewer-stat__label">Target Epitope</span>
            <span className="trop2-viewer-stat__val">SVCWCVNSV</span>
          </div>
          <div className="trop2-viewer-stat">
            <span className="trop2-viewer-stat__label">Pocket Anchor Residues</span>
            <span className="trop2-viewer-stat__val">13 Residues</span>
          </div>
          <div className="trop2-viewer-stat">
            <span className="trop2-viewer-stat__label">Polar Contacts / H-Bonds</span>
            <span className="trop2-viewer-stat__val">17 Pairs</span>
          </div>
          <div className="trop2-viewer-stat">
            <span className="trop2-viewer-stat__label">Atomic Coordinate Set</span>
            <span className="trop2-viewer-stat__val">6,098 Atoms</span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
