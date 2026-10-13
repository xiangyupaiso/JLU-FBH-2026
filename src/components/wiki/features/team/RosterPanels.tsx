/* eslint-disable react-refresh/only-export-components */
import {
  useId,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X } from "lucide-react";
import { gsap } from "gsap";
import { rosterAssets } from "../../../../data/team/rosterAssets";
import {
  rosterCollections,
  rosterEpigraph,
  type RosterCollection,
  type RosterMember,
} from "../../../../data/team/rosterPage";
import { renderInlineFormatting } from "../../proseInline";
import "../../../../styles/features/roster-panels.css";

const groups = rosterCollections.filter(
  (collection) => collection.kind === "group",
);
const firstGroupIndex = rosterCollections.findIndex(
  (collection) => collection.kind === "group",
);

export function RosterOpening() {
  return (
    <figure className="roster-opening">
      <div className="roster-opening__photo">
        <img
          src={rosterAssets["team-photo"]}
          alt="The CirCure team together"
          fetchPriority="high"
        />
      </div>
      <figcaption>
        <strong>{rosterEpigraph}</strong>
      </figcaption>
    </figure>
  );
}

function PersonCard({
  member,
  onOpen,
}: {
  member: RosterMember;
  onOpen?: (member: RosterMember, trigger: HTMLButtonElement) => void;
}) {
  const isLead = member.role.includes("Lead");
  const content = (
    <>
      <span className="roster-person__photo">
        <img
          src={rosterAssets[member.image]}
          alt={member.name}
          loading="lazy"
          decoding="async"
        />
        {onOpen ? (
          <span className="roster-person__open" aria-hidden="true">
            <ArrowUpRight size={18} />
          </span>
        ) : null}
      </span>
      <span className="roster-person__name">{member.name}</span>
      <span className="roster-person__role">{member.role}</span>
    </>
  );
  return onOpen ? (
    <button
      className={`roster-person${isLead ? " roster-person--lead" : ""}`}
      type="button"
      aria-label={`Meet ${member.name}, ${member.role}`}
      aria-haspopup="dialog"
      onClick={(event) => onOpen(member, event.currentTarget)}
    >
      {content}
    </button>
  ) : (
    <div className="roster-person roster-person--teacher">{content}</div>
  );
}

function TeacherSection({ collection }: { collection: RosterCollection }) {
  return (
    <section
      className="roster-collection"
      aria-labelledby={`roster-${collection.id}`}
    >
      <h3 id={`roster-${collection.id}`}>{collection.title}</h3>
      <div
        className={`roster-people roster-people--teachers${collection.members.length === 4 ? " roster-people--four" : ""}`}
      >
        {collection.members.map((member) => (
          <PersonCard member={member} key={member.id} />
        ))}
      </div>
    </section>
  );
}

/*
 * Accordion animation adapted from React Bits:
 * https://github.com/DavidHDev/react-bits/blob/main/src/content/Components/AccordionGallery/AccordionGallery.jsx
 *
 * MIT + Commons Clause License Condition v1.0
 * Copyright (c) 2026 David Haz
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, and distribute the Software as part of an
 * application, website, or product, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * Commons Clause Restriction: You may use this Software, including for any
 * commercial purpose, so long as you do not sell, sublicense, or redistribute
 * the components themselves-whether alone, in a bundle, or as a ported version.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function GroupGallery({
  onOpen,
}: {
  onOpen: (member: RosterMember, trigger: HTMLButtonElement) => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // The member grid follows the gallery once its motion has mostly settled, so
  // mounting a new set of portraits never competes with the accordion frames.
  const [shownIndex, setShownIndex] = useState(0);
  const id = useId();
  const galleryRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const firstRun = useRef(true);
  const group = groups[shownIndex];
  const roles = [...new Set(group.members.map((member) => member.role))];

  useLayoutEffect(() => {
    const root = galleryRef.current;
    if (!root) return;
    const panels = tabRefs.current.filter(
      (node): node is HTMLButtonElement => !!node,
    );
    const media = Array.from(
      root.querySelectorAll<HTMLElement>(".roster-gallery__media"),
    );
    const photos = media.map((item) => item.querySelector("img")!);
    const labels = panels.map(
      (panel) => panel.querySelector(".roster-gallery__label")!,
    );
    const strips = panels.map(
      (panel) => panel.querySelector(".roster-gallery__strip")!,
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timeline: gsap.core.Timeline | undefined;
    let measuredWidth = 0;
    let resizeFrame = 0;
    const animated = !firstRun.current && !reducedMotion.matches;
    const reveal = window.setTimeout(
      () => setShownIndex(selectedIndex),
      animated ? 300 : 0,
    );

    // Adapted from React Bits AccordionGallery's GSAP timeline and media drift.
    // Absolute panels contain layout work inside the gallery; media keep their
    // natural aspect ratio and a stable, permanently composited raster, so a
    // transition never re-rasterises the photographs.
    const applyLayout = (animate: boolean) => {
      const width = root.clientWidth;
      if (!width) return;
      measuredWidth = width;
      const vertical = width < 540;
      const gap = vertical ? 8 : 12;
      const aspect =
        photos[selectedIndex].naturalWidth /
          photos[selectedIndex].naturalHeight || 4 / 3;
      const height = vertical
        ? width / aspect
        : Math.max(100, Math.min(460, (width - gap * 4 - 52 * 4) / aspect));
      const activeSize = vertical ? height : height * aspect;
      const stripSize = vertical ? 48 : (width - gap * 4 - activeSize) / 4;
      const galleryHeight = vertical ? height + 4 * (stripSize + gap) : height;
      root.style.height = `${galleryHeight}px`;
      root.dataset.orientation = vertical ? "vertical" : "horizontal";
      root.setAttribute(
        "aria-orientation",
        vertical ? "vertical" : "horizontal",
      );
      timeline?.kill();
      const duration = animate && !reducedMotion.matches ? 0.6 : 0;
      timeline = gsap.timeline({
        defaults: { duration, ease: "power3.out", overwrite: "auto" },
      });
      let offset = 0;
      panels.forEach((panel, index) => {
        const isActive = index === selectedIndex;
        const size = isActive ? activeSize : stripSize;
        const photoAspect =
          photos[index].naturalWidth / photos[index].naturalHeight || 4 / 3;
        const drift = Math.max(-1.5, Math.min(1.5, selectedIndex - index));
        gsap.set(media[index], {
          width: vertical ? width : height * photoAspect,
          height: vertical ? width / photoAspect : height,
        });
        timeline!.to(
          panel,
          {
            x: vertical ? 0 : offset,
            y: vertical ? offset : 0,
            width: vertical ? width : size,
            height: vertical ? size : height,
            rotateY: vertical || isActive ? 0 : index < selectedIndex ? 6 : -6,
          },
          0,
        );
        timeline!.to(
          media[index],
          {
            xPercent: -50,
            yPercent: -50,
            x: vertical || isActive ? 0 : drift * 18,
          },
          0,
        );
        // Only one caption is ever legible: the outgoing text leaves while its
        // panel is still wide, the incoming text arrives once there is room.
        timeline!.to(
          labels[index],
          isActive
            ? { opacity: 1, x: 0, duration: duration * 0.7, delay: duration * 0.3 }
            : { opacity: 0, x: -14, duration: duration * 0.25 },
          0,
        );
        timeline!.to(
          strips[index],
          isActive
            ? { opacity: 0, duration: duration * 0.2 }
            : { opacity: 1, duration: duration * 0.5, delay: duration * 0.4 },
          0,
        );
        offset += size + gap;
      });
    };
    applyLayout(animated);
    firstRun.current = false;
    const observer = new ResizeObserver(([entry]) => {
      if (Math.abs(entry.contentRect.width - measuredWidth) < 1) return;
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => applyLayout(false));
    });
    const onReady = () => applyLayout(false);
    observer.observe(root);
    reducedMotion.addEventListener("change", onReady);
    photos.forEach((photo) => photo.addEventListener("load", onReady));
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", onReady);
      photos.forEach((photo) => photo.removeEventListener("load", onReady));
      cancelAnimationFrame(resizeFrame);
      window.clearTimeout(reveal);
      timeline?.kill();
    };
  }, [selectedIndex]);
  const selectWithKeyboard = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % groups.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index + groups.length - 1) % groups.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = groups.length - 1;
    else return;
    event.preventDefault();
    setSelectedIndex(next);
    tabRefs.current[next]?.focus({ preventScroll: true });
  };

  return (
    <section
      className="roster-collection roster-groups"
      aria-labelledby={`${id}-heading`}
    >
      <h3 id={`${id}-heading`}>Meet Our Groups</h3>
      <div
        className="roster-gallery"
        ref={galleryRef}
        role="tablist"
        aria-label="Team groups"
      >
        {groups.map((item, index) => (
          <button
            type="button"
            role="tab"
            key={item.id}
            id={`${id}-tab-${item.id}`}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            aria-selected={index === selectedIndex}
            aria-controls={`${id}-members`}
            tabIndex={index === selectedIndex ? 0 : -1}
            className={`roster-gallery__item${index === selectedIndex ? " is-selected" : ""}`}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={(event) => selectWithKeyboard(event, index)}
          >
            <span className="roster-gallery__frame">
              <span className="roster-gallery__media">
                <img
                  src={rosterAssets[item.image!]}
                  alt={`${item.title} group photo`}
                  loading="lazy"
                  draggable={false}
                />
              </span>
            </span>
            <span className="roster-gallery__label">
              <span className="roster-gallery__bar" aria-hidden="true" />
              {item.title}
            </span>
            <span className="roster-gallery__strip" aria-hidden="true">
              {item.title}
            </span>
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${id}-members`}
        aria-labelledby={`${id}-tab-${group.id}`}
        tabIndex={0}
        className="roster-group-members"
      >
        <div key={group.id} className="roster-group-members__content">
          <h3>{group.title}</h3>
          <div className="roster-role-groups">
            {roles.map((role) => {
              const members = group.members.filter(
                (member) => member.role === role,
              );
              const label =
                role === "Team Member"
                  ? "Team Members"
                  : role === "Group Lead" && members.length > 1
                    ? "Group Leads"
                    : role;
              return (
                <section
                  className={`roster-role-group${roles.length > 2 && members.length === 1 ? " roster-role-group--paired-lead" : ""}`}
                  key={role}
                >
                  {roles.length > 1 ? <h4>{label}</h4> : null}
                  <div className="roster-people">
                    {members.map((member) => (
                      <PersonCard
                        key={member.id}
                        member={member}
                        onOpen={onOpen}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RosterPanels() {
  const [active, setActive] = useState<RosterMember | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const openMember = useCallback(
    (member: RosterMember, trigger: HTMLButtonElement) => {
      opener.current = trigger;
      setActive(member);
    },
    [],
  );

  return (
    <Dialog.Root
      open={active !== null}
      onOpenChange={(open) => {
        if (!open) setActive(null);
      }}
    >
      <div className="roster-panels">
        {rosterCollections.map((collection, index) => {
          if (collection.kind === "group")
            return index === firstGroupIndex ? (
              <GroupGallery key="groups" onOpen={openMember} />
            ) : null;
          if (collection.kind === "teachers")
            return (
              <TeacherSection key={collection.id} collection={collection} />
            );
          // Advisors have individual profiles but no group photograph in the manuscript.
          return (
            <section
              className="roster-collection"
              key={collection.id}
              aria-labelledby={`roster-${collection.id}`}
            >
              <h3 id={`roster-${collection.id}`}>{collection.title}</h3>
              <div className="roster-people">
                {collection.members.map((member) => (
                  <PersonCard
                    member={member}
                    key={member.id}
                    onOpen={openMember}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="roster-dialog-overlay" />
        <Dialog.Content
          className="roster-dialog"
          aria-describedby={undefined}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            opener.current?.focus({ preventScroll: true });
          }}
        >
          {active ? (
            <>
              <Dialog.Close
                className="roster-dialog__close"
                aria-label="Close profile"
              >
                <X size={22} />
              </Dialog.Close>
              <div className="roster-dialog__portrait">
                <img src={rosterAssets[active.image]} alt={active.name} />
                <p>{active.role}</p>
              </div>
              <div className="roster-dialog__body">
                <Dialog.Title className="roster-dialog__title">
                  {active.name}
                </Dialog.Title>
                <p className="roster-dialog__tagline">
                  {renderInlineFormatting(active.tagline ?? "")}
                </p>
                <div className="roster-dialog__bio">
                  {active.bio?.map((paragraph, index) => (
                    <p key={index}>{renderInlineFormatting(paragraph)}</p>
                  ))}
                </div>
              </div>
              {active.quote ? (
                <blockquote className="roster-dialog__quote">
                  {active.quote.split("\n").map((line, index) =>
                    line.startsWith("—") || line.startsWith("--") ? (
                      <cite key={index} className="roster-dialog__cite">
                        {renderInlineFormatting(line)}
                      </cite>
                    ) : (
                      <span key={index} className="roster-dialog__quote-text">
                        {renderInlineFormatting(line)}
                      </span>
                    ),
                  )}
                </blockquote>
              ) : null}
            </>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function rosterFeatures(): Record<string, ReactNode> {
  return { roster: <RosterPanels /> };
}
