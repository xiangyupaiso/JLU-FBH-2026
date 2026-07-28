import { Link } from "react-router-dom";
import "./WikiNextRecord.css";

interface WikiNextRecordProps {
  path: string;
  label: string;
  title: string;
}

export function WikiNextRecord({ path, label, title }: WikiNextRecordProps) {
  return (
    <section className="wiki-next wiki-next--record" data-wiki-reveal>
      <div className="wiki-next__copy">
        <h2>{title}</h2>
        <p>
          Continue to <strong>{label}</strong>.
        </p>
      </div>

      <Link
        className="wiki-next__action"
        to={path}
        aria-label={`Continue to ${label}`}
      >
        <span>Next page</span>
        <strong>{label}</strong>
        <b aria-hidden="true">↗</b>
      </Link>
    </section>
  );
}
