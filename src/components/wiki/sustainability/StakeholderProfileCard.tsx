import { useState } from "react";
import type {
  StakeholderFieldRow,
  StakeholderProfile,
} from "../../../data/sustainabilityData";
import "../../../styles/sustainability-page.css";
import { PatientChatDialog } from "./PatientChatDialog";

const pad = (n: number) => String(Math.max(1, n)).padStart(2, "0");

/** 调研走访卡片（field）的内容行：优先使用显式 fieldRows，否则由标准五字段推导。 */
function resolveFieldRows(
  profile: StakeholderProfile,
): StakeholderFieldRow[] {
  if (profile.fieldRows?.length) return [...profile.fieldRows];

  const rows: StakeholderFieldRow[] = [];
  if (profile.relevantStakeholder) {
    rows.push({ label: "对象", paragraphs: [profile.relevantStakeholder] });
  }
  if (profile.whyEngaged) {
    rows.push({ label: "原因", paragraphs: [profile.whyEngaged] });
  }
  if (profile.feedback) {
    rows.push({ label: "反馈", paragraphs: [profile.feedback] });
  }
  const change: string[] = [];
  if (profile.incorporated) change.push(profile.incorporated);
  if (profile.improvement) change.push(profile.improvement);
  if (change.length) rows.push({ label: "改变", paragraphs: change });
  return rows;
}

function Expanded({
  profile,
  open,
}: {
  profile: StakeholderProfile;
  open: boolean;
}) {
  return (
    <>
      {open && profile.id === "tnbc-patients" && <PatientChatDialog />}
      {profile.detailedInterview.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
}

function InterviewCard({
  profile,
  ordinal,
}: {
  profile: StakeholderProfile;
  ordinal: number;
}) {
  const [open, setOpen] = useState(false);
  const roleLine = profile.role
    ? profile.organization
      ? `${profile.role} · ${profile.organization}`
      : profile.role
    : profile.organization;

  return (
    <article className="sust-stake-card sust-stake-card--interview">
      <p className="sust-stake-card__code">INT-{pad(ordinal)} · 访谈</p>

      <header className="sust-stake-card__head">
        <h3 className="sust-stake-card__name">{profile.name}</h3>
        {roleLine ? <p className="sust-stake-card__role">{roleLine}</p> : null}
      </header>

      <div className="sust-stake-card__context">
        {profile.relevantStakeholder && <p>{profile.relevantStakeholder}</p>}
        {profile.whyEngaged && (
          <p>
            <span className="sust-stake-card__runin">WHY WE ENGAGED</span>
            {profile.whyEngaged}
          </p>
        )}
      </div>

      {profile.feedback && (
        <blockquote className="sust-stake-card__quote">
          {profile.feedback}
        </blockquote>
      )}

      <div className="sust-stake-card__revision">
        <p className="sust-stake-card__revision-body">
          <span className="sust-stake-card__runin">项目修订</span>
          {profile.incorporated}
        </p>
        {profile.improvement && (
          <p className="sust-stake-card__improvement">{profile.improvement}</p>
        )}
      </div>

      {profile.detailedInterview.length > 0 && (
        <details
          className="sust-stake-card__more"
          open={open}
          onToggle={(e) => setOpen(e.currentTarget.open)}
        >
          <summary className="sust-stake-card__summary">
            <span className="sust-stake-card__sdg">{profile.sdgAddressed}</span>
            <span className="sust-stake-card__toggle">阅读完整访谈</span>
          </summary>
          <div className="sust-stake-card__more-body">
            <div className="sust-stake-card__more-inner">
              <Expanded profile={profile} open={open} />
            </div>
          </div>
        </details>
      )}
    </article>
  );
}

function FieldCard({
  profile,
  ordinal,
}: {
  profile: StakeholderProfile;
  ordinal: number;
}) {
  const [open, setOpen] = useState(false);
  const rows = resolveFieldRows(profile);
  const roleLine = profile.role
    ? profile.organization
      ? `${profile.role} · ${profile.organization}`
      : profile.role
    : profile.organization;

  return (
    <article className="sust-stake-card sust-stake-card--field">
      <div className="sust-stake-card__body">
        <aside className="sust-stake-card__aside">
          <div>
            <h3 className="sust-stake-card__name">{profile.name}</h3>
            {roleLine ? (
              <p className="sust-stake-card__role">{roleLine}</p>
            ) : null}
          </div>
          <p className="sust-stake-card__code">FIELD-{pad(ordinal)} · 调研</p>
        </aside>

        <div className="sust-stake-card__main">
          {rows.map((row) => (
            <div
              className={`sust-stake-card__row${
                row.label === "反馈" ? " sust-stake-card__row--feedback" : ""
              }`}
              key={row.label}
            >
              <span className="sust-stake-card__row-label">{row.label}</span>
              <div className="sust-stake-card__row-body">
                {row.paragraphs.map((paragraph, index) => (
                  <p
                    className={
                      row.label === "改变"
                        ? "sust-stake-card__row-arrow"
                        : undefined
                    }
                    key={index}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {profile.detailedInterview.length > 0 && (
        <details
          className="sust-stake-card__more"
          open={open}
          onToggle={(e) => setOpen(e.currentTarget.open)}
        >
          <summary className="sust-stake-card__summary">
            <span className="sust-stake-card__sdg">{profile.sdgAddressed}</span>
            <span className="sust-stake-card__toggle">查看调研记录</span>
          </summary>
          <div className="sust-stake-card__more-body">
            <div className="sust-stake-card__more-inner">
              <Expanded profile={profile} open={open} />
            </div>
          </div>
        </details>
      )}
    </article>
  );
}

export function StakeholderProfileCard({
  profile,
  ordinal = 1,
}: {
  profile: StakeholderProfile;
  ordinal?: number;
}) {
  return profile.variant === "field" ? (
    <FieldCard profile={profile} ordinal={ordinal} />
  ) : (
    <InterviewCard profile={profile} ordinal={ordinal} />
  );
}
