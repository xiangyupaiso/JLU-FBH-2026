import { useState } from "react";
import type { StakeholderProfile } from "../../../data/sustainabilityData";
import "../../../styles/sustainability-page.css";
import { PatientChatDialog } from "./PatientChatDialog";

const FIELD_DEFINITIONS = [
  { key: "relevantStakeholder", label: "Relevant Stakeholder" },
  { key: "whyEngaged", label: "Why We Engaged" },
  { key: "feedback", label: "Stakeholder Feedback" },
  { key: "incorporated", label: "Feedback Incorporated" },
  { key: "improvement", label: "Project Improvement" },
] as const;

export function StakeholderProfileCard({
  profile,
}: {
  profile: StakeholderProfile;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="sust-profile-card">
      <header className="sust-profile-card__head">
        <span className="sust-profile-card__monogram" aria-hidden="true">
          {profile.name.charAt(0)}
        </span>
        <div>
          <h3 className="sust-profile-card__name">{profile.name}</h3>
          <p className="sust-profile-card__role">
            {profile.role}
            {profile.organization ? ` · ${profile.organization}` : ""}
          </p>
        </div>
      </header>

      <dl className="sust-profile-card__fields">
        {FIELD_DEFINITIONS.map(({ key, label }) => (
          <div className="sust-profile-card__field" key={key}>
            <dt>{label}</dt>
            <dd>{profile[key]}</dd>
          </div>
        ))}
      </dl>

      <p className="sust-profile-card__sdg">{profile.sdgAddressed}</p>

      {profile.detailedInterview.length > 0 && (
        <details
          className="sust-profile-card__more"
          open={open}
          onToggle={(e) => setOpen(e.currentTarget.open)}
        >
          <summary>
            <span>Click more · 详细访谈记录</span>
            <span className="sust-profile-card__more-icon" aria-hidden="true" />
          </summary>
          <div className="sust-profile-card__more-body">
            <div className="sust-profile-card__more-inner">
              {open && profile.id === "tnbc-patients" && <PatientChatDialog />}
              {profile.detailedInterview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </details>
      )}
    </article>
  );
}
