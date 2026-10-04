import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
const bgImg = "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/bg.avif";
const handsImg = "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/hands.avif";
const ribbonImg = "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/ribbon.avif";
const lambImg = "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/lamb.avif";
const petalsImg = "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/petals.avif";
const starsImg = "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/stars.avif";
import "../../styles/page-preloader.css";

interface PagePreloaderProps {
  isLoading: boolean;
}

export function PagePreloader({ isLoading }: PagePreloaderProps) {
  const [visible, setVisible] = useState(isLoading);
  const [fading, setFading] = useState(false);
  const strokeRef = useRef<SVGPathElement>(null);
  const completeRef = useRef<SVGRectElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // 1. Ribbon stroke animation powered by GSAP (aligned with Home page PaintedReveal)
  useEffect(() => {
    if (!visible) return;
    const stroke = strokeRef.current;
    const complete = completeRef.current;
    if (!stroke || !complete) return;

    // Reset initial state: ribbon stroke masked out, fill hidden
    gsap.set(stroke, {
      attr: { "stroke-dasharray": "1000 1000", "stroke-dashoffset": 1000 },
      opacity: 1,
    });
    gsap.set(complete, { opacity: 0 });

    const tl = gsap.timeline({ repeat: -1 });
    timelineRef.current = tl;

    // Draw ribbon from left to right along curve (1.3s)
    tl.to(stroke, {
      attr: { "stroke-dashoffset": 0 },
      duration: 1.35,
      ease: "power2.out",
    });

    // Seamlessly fade in complete texture mask at end of stroke
    tl.to(complete, { opacity: 1, duration: 0.15, ease: "none" }, "-=0.15");

    // Hold and display with gentle breathing presence (1.2s)
    tl.to({}, { duration: 1.2 });

    // If still waiting on route content, smoothly loop
    tl.to([stroke, complete], {
      opacity: 0,
      duration: 0.45,
      ease: "power1.in",
    });

    tl.set(stroke, {
      attr: { "stroke-dashoffset": 1000 },
      opacity: 1,
    });

    return () => {
      tl.kill();
      timelineRef.current = null;
    };
  }, [visible]);

  // 2. Lifecycle: Fade out smoothly when page is ready
  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setFading(false);
    } else {
      setFading(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setFading(false);
      }, 420);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      className={`page-preloader ${fading ? "page-preloader--fading" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="page-preloader__stage">
        {/* Layer 1: Full-bleed watercolor background */}
        <img
          src={bgImg}
          alt=""
          className="page-preloader__layer page-preloader__layer--bg"
          aria-hidden="true"
        />

        {/* Layer 2: Supporting hands */}
        <img
          src={handsImg}
          alt=""
          className="page-preloader__layer page-preloader__layer--hands"
          aria-hidden="true"
        />

        {/* Layer 3: Pink ribbon with GSAP SVG Mask reveal */}
        <div className="page-preloader__layer page-preloader__layer--ribbon">
          <svg
            className="page-preloader__ribbon-svg"
            viewBox="0 0 1264 711"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <mask
                id="preloader-ribbon-mask"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1264"
                height="711"
              >
                <path
                  ref={strokeRef}
                  className="page-preloader__ribbon-stroke"
                  d="M -20 585 C 200 575, 380 535, 435 430 C 430 260, 510 110, 660 105 C 790 110, 845 220, 820 340 C 780 420, 690 455, 630 460 C 700 480, 820 485, 960 470 C 1070 455, 1170 435, 1284 415"
                  fill="none"
                  stroke="white"
                  strokeWidth="215"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength="1000"
                />
                <rect
                  ref={completeRef}
                  className="page-preloader__ribbon-complete"
                  width="1264"
                  height="711"
                  fill="white"
                />
              </mask>
            </defs>
            <image
              href={ribbonImg}
              width="1264"
              height="711"
              preserveAspectRatio="none"
              mask="url(#preloader-ribbon-mask)"
            />
          </svg>
        </div>

        {/* Layer 4: Lamb mascot */}
        <img
          src={lambImg}
          alt=""
          className="page-preloader__layer page-preloader__layer--lamb"
          aria-hidden="true"
        />

        {/* Layer 5: Floating petals */}
        <img
          src={petalsImg}
          alt=""
          className="page-preloader__layer page-preloader__layer--petals"
          aria-hidden="true"
        />

        {/* Layer 6: Twinkling stars */}
        <img
          src={starsImg}
          alt=""
          className="page-preloader__layer page-preloader__layer--stars"
          aria-hidden="true"
        />

        {/* Layer 7: Animated Loading text & bouncing dots */}
        <div className="page-preloader__caption">
          <span className="page-preloader__word">loading</span>
          <span className="page-preloader__dots">
            <span className="dot dot--1">.</span>
            <span className="dot dot--2">.</span>
            <span className="dot dot--3">.</span>
          </span>
        </div>
      </div>
    </div>
  );
}
