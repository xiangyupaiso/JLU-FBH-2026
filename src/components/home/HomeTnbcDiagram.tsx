import outline from "../../assets/home/tnbc-cell/outline.webp";
import cytoplasm from "../../assets/home/tnbc-cell/cytoplasm.webp";
import nucleus from "../../assets/home/tnbc-cell/nucleus.webp";
import markers from "../../assets/home/tnbc-cell/markers.webp";
import negativeUpper from "../../assets/home/tnbc-cell/negative-upper.webp";
import negativeMiddle from "../../assets/home/tnbc-cell/negative-middle.webp";
import negativeLower from "../../assets/home/tnbc-cell/negative-lower.webp";

const layers = [
  { name: "outline", src: outline },
  { name: "cytoplasm", src: cytoplasm },
  { name: "nucleus", src: nucleus },
  { name: "markers", src: markers },
  { name: "negative-upper", src: negativeUpper },
  { name: "negative-middle", src: negativeMiddle },
  { name: "negative-lower", src: negativeLower },
] as const;

export function HomeTnbcDiagram() {
  return (
    <figure
      className="tnbc-diagram"
      role="img"
      aria-label="Conceptual cell illustration with three crossed-out marker symbols, representing the three negative test results in TNBC."
    >
      {layers.map(({ name, src }) => (
        <img
          key={name}
          src={src}
          className="tnbc-diagram__layer"
          data-tnbc-layer={name}
          alt=""
          aria-hidden="true"
          width="1000"
          height="1000"
          decoding="async"
          draggable={false}
        />
      ))}
    </figure>
  );
}
