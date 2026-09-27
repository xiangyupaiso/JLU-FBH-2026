import {
  useCallback,
  useId,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import ringImage from "../../assets/home/story/scene-1-layer-4.webp";
import targetImage from "../../assets/home/story/scene-2-layer-6.webp";
import { useAntigenDrag } from "../../hooks/useAntigenDrag";
import "../../styles/home-antigen-switch.css";

const antigens = [
  {
    name: "A",
    color: "#a65370",
    matrix: ".36 0 0 0 .35 0 .38 0 0 .13 0 0 .38 0 .22 0 0 0 1 0",
  },
  {
    name: "B",
    color: "#63784f",
    matrix: ".32 0 0 0 .23 0 .38 0 0 .32 0 0 .34 0 .20 0 0 0 1 0",
  },
  {
    name: "C",
    color: "#7c699f",
    matrix: ".34 0 0 0 .27 0 .36 0 0 .24 0 0 .42 0 .39 0 0 0 1 0",
  },
] as const;

export function HomeAntigenSwitch() {
  const root = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const id = useId().replace(/:/g, "");
  const slotId = id + "-slot";
  const backboneId = id + "-backbone";
  const filterUrl = (index: number) => "url(#" + id + "-antigen-" + index + ")";
  const antigen = antigens[selected];
  const handleSelect = useCallback((index: number) => {
    setSelected(index);
    setHasInteracted(true);
  }, []);
  useAntigenDrag(root, handleSelect);

  return (
    <div
      ref={root}
      className="home-antigen-switch"
      data-guidance={!hasInteracted}
      data-selected-filter={filterUrl(selected)}
      style={{ "--selected-color": antigen.color } as CSSProperties}
    >
      <div className="home-antigen-switch__content">
        <div className="home-antigen-switch__diagram">
          <div className="home-antigen-switch__rna" data-antigen-ring>
            <svg
              viewBox="0 0 300 300"
              role="img"
              aria-label="Shared circRNA backbone with a replaceable antigen-encoding sequence"
            >
              <defs>
                <clipPath id={slotId}>
                  <path d="M150 150 L65 -40 L235 -40 Z" />
                </clipPath>
                <mask id={backboneId}>
                  <rect width="300" height="300" fill="white" />
                  <path d="M150 150 L65 -40 L235 -40 Z" fill="black" />
                </mask>
                {antigens.map((item, index) => (
                  <filter
                    key={item.name}
                    id={id + "-antigen-" + index}
                    colorInterpolationFilters="sRGB"
                  >
                    <feColorMatrix type="matrix" values={item.matrix} />
                  </filter>
                ))}
              </defs>
              <image
                href={ringImage}
                width="300"
                height="300"
                preserveAspectRatio="none"
                mask={"url(#" + backboneId + ")"}
              />
              <g data-antigen-installed>
                <image
                  href={ringImage}
                  width="300"
                  height="300"
                  preserveAspectRatio="none"
                  clipPath={"url(#" + slotId + ")"}
                  filter={filterUrl(selected)}
                />
              </g>
              <path
                className="home-antigen-switch__guide"
                d="M84 15 Q150 -13 216 15"
              />
            </svg>
            <span className="home-antigen-switch__center" aria-hidden="true">
              circRNA
            </span>
          </div>
          <svg
            className="home-antigen-switch__arrow"
            viewBox="0 0 126 38"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 22 C34 7 69 32 113 18 M99 7 L116 18 L101 32"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="home-antigen-switch__target">
            <svg
              viewBox="0 0 450 410"
              role="img"
              aria-label={"Illustrative tumor target " + antigen.name}
            >
              <image
                href={targetImage}
                width="450"
                height="410"
                filter={filterUrl(selected)}
              />
            </svg>
            <div className="home-antigen-switch__target-label">
              Target {antigen.name}
            </div>
          </div>
        </div>
        <div
          className="home-antigen-switch__options"
          role="group"
          aria-label="Drag an antigen sequence to the top of the ring, or select it"
        >
          <span className="home-antigen-switch__hint" aria-hidden="true">
            <span>↖</span> Drag to swap
          </span>
          {antigens.map((item, index) => (
            <button
              key={item.name}
              className="home-antigen-switch__option"
              type="button"
              data-antigen-option={index}
              data-filter={filterUrl(index)}
              data-color={item.color}
              aria-pressed={selected === index}
              aria-label={"Use antigen sequence " + item.name}
              style={{ "--option-color": item.color } as CSSProperties}
            >
              <svg viewBox="80 0 140 65" aria-hidden="true">
                <image
                  href={ringImage}
                  width="300"
                  height="300"
                  preserveAspectRatio="none"
                  clipPath={"url(#" + slotId + ")"}
                  filter={filterUrl(index)}
                />
              </svg>
              <span>Antigen {item.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div
        className="home-antigen-switch__ghost"
        data-antigen-ghost
        hidden
        aria-hidden="true"
      >
        <svg viewBox="80 0 140 65">
          <image
            href={ringImage}
            width="300"
            height="300"
            preserveAspectRatio="none"
            clipPath={"url(#" + slotId + ")"}
          />
        </svg>
      </div>
      <p className="story-sr-only" role="status" aria-live="polite">
        Antigen {antigen.name} selected. Illustrative target {antigen.name}.
      </p>
    </div>
  );
}
