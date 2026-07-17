import { useEffect, useRef, useState } from "react";
import { Inspirations, InspirationLink } from "../components/Inspirations";
import "./home.css";

/* ===== SVG ICONS (replaces lucide-react without new deps) ===== */
function IconGlobe({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconArrowRight({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function IconArrowUpRight({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconTwitter({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

/* ===== REVEAL ANIMATION HOOK (replaces framer-motion useInView) ===== */
function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}

/* ===== HERO VIDEO WITH SEAMLESS LOOP FADE ===== */
function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const fade = (
      target: number,
      duration = 500,
      onDone?: () => void,
    ) => {
      const start = performance.now();
      const from = parseFloat(video.style.opacity || "0");

      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        video.style.opacity = String(from + (target - from) * p);
        if (p < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else if (onDone) {
          onDone();
        }
      };

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(step);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {
        // autoplay blocked
      });
      fade(1, 500);
    };

    const handleTimeUpdate = () => {
      if (video.duration && video.duration - video.currentTime <= 0.55) {
        fade(0, 500);
      }
    };

    const handleEnded = () => {
      fade(0, 500, () => {
        setTimeout(() => {
          video.currentTime = 0;
          video.play().catch(() => {
            // autoplay blocked
          });
          fade(1, 500);
        }, 100);
      });
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="home-hero-video"
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
      muted
      autoPlay
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}

/* ===== SECTION COMPONENTS ===== */
function HeroSection() {
  const teamName = import.meta.env.VITE_TEAM_NAME;

  return (
    <section className="home-hero home-section">
      <HeroVideo />
      <div className="home-hero-overlay" aria-hidden="true" />

      <div className="home-hero-content">
        <h1 className="home-hero-title font-serif">
          {teamName || "iGEM"} <em>then all</em>
        </h1>

        <form
          className="home-email-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="home-email-input-wrap liquid-glass">
            <input
              type="email"
              className="home-email-input"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
            <button type="submit" className="home-email-submit" aria-label="Subscribe">
              <IconArrowRight size={20} />
            </button>
          </div>
        </form>

        <p className="home-hero-subtitle">
          Stay updated with the latest news and insights. Subscribe to our
          newsletter today and never miss out on exciting updates.
        </p>

        <a href="#/description" className="home-hero-cta liquid-glass">
          Explore Our Project
        </a>
      </div>

      <div className="home-hero-socials">
        <a
          href="https://igem.org"
          target="_blank"
          rel="noreferrer"
          className="home-social-btn liquid-glass"
          aria-label="iGEM Website"
        >
          <IconGlobe size={20} />
        </a>
        <a
          href="https://instagram.com/igem"
          target="_blank"
          rel="noreferrer"
          className="home-social-btn liquid-glass"
          aria-label="Instagram"
        >
          <IconInstagram size={20} />
        </a>
        <a
          href="https://x.com/igem"
          target="_blank"
          rel="noreferrer"
          className="home-social-btn liquid-glass"
          aria-label="Twitter"
        >
          <IconTwitter size={20} />
        </a>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="home-about home-section">
      <div className="container">
        <div className={`home-reveal ${visible ? "home-visible" : ""}`}>
          <p className="home-label">About Us</p>
        </div>
        <h2
          className={`home-about-title font-serif ${visible ? "home-visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <em>Building your wiki</em> for minds that then create, build, and
          inspire.
        </h2>
      </div>
    </section>
  );
}

function FeaturedVideoSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="home-featured home-section">
      <div className="container">
        <div className={`home-video-card ${visible ? "home-visible" : ""}`}>
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          <div className="home-video-gradient" aria-hidden="true" />

          <div className="home-video-overlay">
            <div className="home-video-card-inner liquid-glass">
              <p className="home-label">Our Approach</p>
              <p>
                We believe in the power of curiosity-driven exploration. Every
                project starts with a question, and every answer opens a new
                door to innovation. Start your journey by reviewing the
                essential iGEM guidelines and medal criteria.
              </p>
            </div>
            <a
              href="https://teams.igem.org/go/deliverables/wiki"
              target="_blank"
              rel="noreferrer"
              className="home-video-btn liquid-glass"
            >
              Explore more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="home-philosophy home-section">
      <div className="container">
        <h2
          className={`home-philosophy-title font-serif home-reveal ${visible ? "home-visible" : ""}`}
        >
          Innovation <em>then x</em> Vision
        </h2>

        <div className="row g-4 g-md-5 align-items-center">
          <div className="col-md-6">
            <div
              className={`home-philosophy-video home-reveal-left ${visible ? "home-visible" : ""}`}
            >
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div
              className={`home-philosophy-text home-reveal-right ${visible ? "home-visible" : ""}`}
              style={{ transitionDelay: "0.15s" }}
            >
              <div>
                <p className="home-label">Choose your space</p>
                <p>
                  Clearly define your project goals, methodology, and expected
                  outcomes in a clear and concise manner. Show your progress by
                  regularly updating your wiki with experiments, results, and
                  reflections.
                </p>
              </div>

              <div className="home-philosophy-divider" aria-hidden="true" />

              <div>
                <p className="home-label">Shape the future</p>
                <p>
                  Engage your global audience with accessible language,
                  document your Human Practices and Safety considerations, and
                  highlight collaborations that amplify your impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  const cards = [
    {
      tag: "Strategy",
      title: "Research & Insight",
      desc: "Dig deep into iGEM competition rules, medal criteria, project awards, and special awards to surface the insights that drive meaningful, lasting success.",
      video:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
      link: "https://competition.igem.org/judging/awards/medals",
    },
    {
      tag: "Craft",
      title: "Design & Execution",
      desc: "From concept to launch, obsess over clear navigation, accessibility, media optimization, and early documentation to deliver a wiki that feels effortless.",
      video:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
      link: "https://teams.igem.org/go/deliverables/wiki",
    },
  ];

  return (
    <section ref={ref} className="home-services home-section">
      <div className="container">
        <div
          className={`home-services-header home-reveal ${visible ? "home-visible" : ""}`}
        >
          <h2 className="home-services-title">What we do</h2>
          <span className="home-label d-none d-md-block">Our services</span>
        </div>

        <div className="row g-4 g-md-4">
          {cards.map((card, index) => (
            <div key={card.title} className="col-md-6">
              <a
                href={card.link}
                target="_blank"
                rel="noreferrer"
                className={`home-service-card liquid-glass text-decoration-none d-block home-reveal ${visible ? "home-visible" : ""}`}
                style={{ transitionDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className="home-service-media">
                  <video
                    src={card.video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                  />
                </div>
                <div className="home-service-body">
                  <div className="home-service-meta">
                    <span className="home-service-tag">{card.tag}</span>
                    <span className="home-service-icon liquid-glass">
                      <IconArrowUpRight size={18} />
                    </span>
                  </div>
                  <h3 className="home-service-card-title">{card.title}</h3>
                  <p className="home-service-card-desc">{card.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WikiGuidesSection() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="home-wiki-sections home-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div
              className={`home-wiki-card liquid-glass home-reveal ${visible ? "home-visible" : ""}`}
            >
              <h3>Tips for Success</h3>
              <ul>
                <li>
                  <b>Clearly Define Your Project</b>: Explain your project&apos;s
                  goals, methodology, and expected outcomes in a clear and
                  concise manner.
                </li>
                <li>
                  <b>Show Your Progress</b>: Regularly update your wiki with
                  your team&apos;s progress, experiments, and results.
                </li>
                <li>
                  <b>Engage Your Audience</b>: Consider your global audience and
                  use language that is accessible to everyone.
                </li>
                <li>
                  <b>Human Practices &amp; Safety</b>: Thoroughly document your
                  team&apos;s human practices activities and safety
                  considerations.
                </li>
                <li>
                  <b>Collaborate &amp; Share</b>: Highlight collaborations with
                  other teams and institutions.
                </li>
                <li>
                  <b>Have Fun and Learn!</b> iGEM is a unique opportunity to
                  learn, grow, and contribute to synthetic biology.
                </li>
              </ul>
            </div>
          </div>

          <Inspirations inspirationLinkList={inspirationLinks} />
        </div>
      </div>
    </section>
  );
}

const inspirationLinks: InspirationLink[] = [
  { year: 2025, teamName: "Brno Czech Republic", pageName: "" },
  { year: 2025, teamName: "McGill", pageName: "" },
  { year: 2025, teamName: "GreatBay-SCIE", pageName: "" },
  { year: 2025, teamName: "EPFL", pageName: "" },
  { year: 2025, teamName: "Heidelberg", pageName: "" },
  { year: 2025, teamName: "Uprize-I", pageName: "" },
  { year: 2025, teamName: "IZJU-China", pageName: "" },
  { year: 2025, teamName: "Marburg", pageName: "" },
  { year: 2025, teamName: "Munich", pageName: "" },
  { year: 2025, teamName: "WageningenUR", pageName: "" },
];

/* ===== MAIN HOME PAGE ===== */
export function Home() {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
      <WikiGuidesSection />
    </>
  );
}
