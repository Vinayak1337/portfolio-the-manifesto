"use client";

import { useEffect, useRef, useState } from "react";

const streamPaths = [
  "M-80 210C210 90 410 130 640 276C906 446 1118 438 1520 176",
  "M-80 384C210 286 424 278 674 396C946 524 1168 500 1520 314",
  "M-80 568C232 434 488 440 742 574C1008 714 1226 660 1520 504",
];

const nodePoints = [
  [238, 214],
  [560, 334],
  [860, 288],
  [1156, 436],
  [1328, 220],
];

const interactiveSelector =
  "a, button, [role='button'], .chapter-card, .work-row, .rail-card, .exp-item, .tbl-row";

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function useFinePointer(reducedMotion: boolean) {
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const media = globalThis.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(!reducedMotion && media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [reducedMotion]);

  return finePointer;
}

function FluxAtmosphere({ reducedMotion }: Readonly<{ reducedMotion: boolean }>) {
  return (
    <div
      aria-hidden="true"
      className="flux-atmosphere"
      data-reduced-motion={reducedMotion ? "true" : undefined}
    >
      <svg className="flux-atmosphere-svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <radialGradient id="flux-node-fill">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.86" />
            <stop offset="0.45" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="flux-atmosphere-orbits">
          <ellipse cx="742" cy="414" rx="430" ry="136" />
          <ellipse cx="742" cy="414" rx="430" ry="136" transform="rotate(34 742 414)" />
          <ellipse cx="742" cy="414" rx="430" ry="136" transform="rotate(-34 742 414)" />
        </g>
        <g className="flux-atmosphere-streams">
          {streamPaths.map((path, index) => (
            <path
              className="flux-atmosphere-stream"
              d={path}
              key={path}
              style={{ animationDelay: `${index * -2.8}s` }}
            />
          ))}
        </g>
        <g className="flux-atmosphere-nodes">
          {nodePoints.map(([cx, cy], index) => (
            <g key={`${cx}-${cy}`} style={{ animationDelay: `${index * -0.9}s` }}>
              <circle cx={cx} cy={cy} r="34" />
              <circle cx={cx} cy={cy} r="5" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

type ElementMetric = Readonly<{ top: number; height: number; bottom: number }>;
type MagneticMetric = Readonly<{
  left: number;
  top: number;
  width: number;
  height: number;
  fixed: boolean;
}>;

export function FluxClientEffects() {
  const reducedMotion = useReducedMotion();
  const finePointer = useFinePointer(reducedMotion);
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("manifesto-mounted", "manifesto-illustrated", "variant-flux");

    return () => {
      document.body.classList.remove(
        "manifesto-mounted",
        "manifesto-illustrated",
        "manifesto-dark",
        "variant-flux",
      );
      document.documentElement.classList.remove("is-scrolling");
    };
  }, []);

  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-draw]"),
    );

    if (reducedMotion) {
      revealTargets.forEach((target) => target.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-in");
        });
      },
      { threshold: 0.18 },
    );
    revealTargets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, [reducedMotion]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-flux-root]");
    if (!root) return;

    const pinSection = document.querySelector<HTMLElement>("[data-pin-section]");
    const giant = document.querySelector<HTMLElement>("[data-pin-giant]");
    const railSection = document.querySelector<HTMLElement>("[data-rail-section]");
    const railTrack = document.querySelector<HTMLElement>("[data-rail-track]");
    const railBar = document.querySelector<HTMLElement>("[data-rail-bar]");
    const railNumber = document.querySelector<HTMLElement>("[data-rail-number]");
    const aboutSection = document.querySelector<HTMLElement>("[data-about-section]");
    const atmosphereSvg = document.querySelector<SVGElement>(".flux-atmosphere-svg");
    const heroIllustration = document.querySelector<HTMLElement>(".flux-hero-scene");
    const statementIllustration = document.querySelector<HTMLElement>(".flux-statement-system");
    const railIllustration = document.querySelector<HTMLElement>(".flux-rail-flux");
    const archiveIllustration = document.querySelector<HTMLElement>(".flux-archive-vault");
    const heroSvg = heroIllustration?.querySelector<SVGElement>(":scope > svg") ?? null;
    const heroOrbits = heroIllustration?.querySelector<SVGGElement>(".flux-hero-orbits") ?? null;
    const heroNodes = heroIllustration?.querySelector<SVGGElement>(".flux-nodes") ?? null;
    const statementPlane = statementIllustration?.querySelector<SVGGElement>(
      ".flux-statement-plane",
    ) ?? null;
    const railDrift = railIllustration?.querySelector<SVGGElement>(".flux-rail-drift") ?? null;
    const archiveStackBack = archiveIllustration?.querySelector<SVGGElement>(
      ".archive-vault-stack-back",
    ) ?? null;
    const archiveStackMid = archiveIllustration?.querySelector<SVGGElement>(
      ".archive-vault-stack-mid",
    ) ?? null;
    const archiveStackFront = archiveIllustration?.querySelector<SVGGElement>(
      ".archive-vault-stack-front",
    ) ?? null;
    const archiveManifest = archiveIllustration?.querySelector<SVGGElement>(
      ".archive-vault-manifest",
    ) ?? null;
    const illustrationTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-illo]"),
    ).filter(
      (target) =>
        !target.classList.contains("illo-contact") &&
        !target.classList.contains("flux-archive-vault"),
    );
    const wedgeTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-wedge]"));
    const magneticTargets = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));
    const railCards = railTrack
      ? Array.from(railTrack.querySelectorAll<HTMLElement>(".rail-card"))
      : [];
    const railImages = railCards.map((card) => card.querySelector<HTMLElement>(".rail-cover img"));
    const spotlightSection = document.querySelector<HTMLElement>("[data-about-spotlight]");
    const spotlightEntries = Array.from(
      document.querySelectorAll<HTMLElement>("[data-about-entry]"),
    );
    const expList = document.querySelector<HTMLElement>("[data-exp-list]");
    const expItems = Array.from(document.querySelectorAll<HTMLElement>("[data-exp-item]"));
    const contactSection = document.querySelector<HTMLElement>("[data-contact-section]");
    const contactChars = Array.from(
      contactSection?.querySelectorAll<HTMLElement>("[data-char]") ?? [],
    );
    const railCount = Number(railSection?.dataset.railCount ?? 1);
    const lastNumericValues = new WeakMap<HTMLElement, Map<string, number>>();
    const lastStyleValues = new WeakMap<Element, Map<string, string>>();
    const magneticRects = new Map<HTMLElement, MagneticMetric>();

    let viewportWidth = globalThis.innerWidth;
    let viewportHeight = globalThis.innerHeight;
    let documentMax = 1;
    let pinMetric: ElementMetric | null = null;
    let railMetric: ElementMetric | null = null;
    let aboutMetric: ElementMetric | null = null;
    let illustrationMetrics: Array<Readonly<{ target: HTMLElement; metric: ElementMetric }>> = [];
    let wedgeMetrics: Array<Readonly<{ target: HTMLElement; metric: ElementMetric }>> = [];
    let railTravel = 0;
    let railTrackX = 0;
    let railCardCenters: number[] = [];
    let railActiveIndex = 1;
    let spotlightMetric: ElementMetric | null = null;
    let spotlightMetrics: ElementMetric[] = [];
    let activeSpotlight: HTMLElement | null = null;
    let expMetric: ElementMetric | null = null;
    let expItemTops: number[] = [];
    let contactMetric: ElementMetric | null = null;
    let contactCharCenters: Array<Readonly<{ x: number; y: number }>> = [];
    let contactPointerActive = false;
    let frame = 0;
    let resizeTimer: ReturnType<typeof globalThis.setTimeout> | undefined;
    let scrollY = globalThis.scrollY;
    let previousScrollY = scrollY;
    let scrollVelocity = 0;
    let lastScrollAt = -Infinity;
    let pointerX = viewportWidth / 2;
    let pointerY = viewportHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let lastPointerAt = -Infinity;
    let scrollDirty = true;
    let wasScrolling = false;
    let pointerDirty = finePointer;
    let scrollingClassActive = false;
    let hoveredInteractive: Element | null = null;
    let activeMagnetic: HTMLElement | null = null;
    let aboutActiveState = document.body.classList.contains("manifesto-dark");
    let atmospherePointerX = 0;
    let atmospherePointerY = 0;
    let atmosphereVelocity = 0;
    let archivePointerX = 0;
    let archivePointerY = 0;
    let archiveVelocity = 0;

    const clamp = (value: number) => Math.max(0, Math.min(1, value));
    const clampVelocity = (value: number) => Math.max(-1, Math.min(1, value));
    const metricFor = (element: HTMLElement | null): ElementMetric | null => {
      if (!element) return null;
      const rect = element.getBoundingClientRect();
      const top = rect.top + globalThis.scrollY;
      return { top, height: rect.height, bottom: top + rect.height };
    };
    const progressFor = (metric: ElementMetric | null) =>
      metric ? clamp((scrollY - metric.top) / Math.max(1, metric.height - viewportHeight)) : 0;
    const isNearViewport = (metric: ElementMetric | null, margin = viewportHeight * 0.18) =>
      Boolean(
        metric && metric.bottom >= scrollY - margin && metric.top <= scrollY + viewportHeight + margin,
      );
    const writeStyle = (target: HTMLElement | SVGElement | null, property: string, value: string) => {
      if (!target) return;
      let values = lastStyleValues.get(target);
      if (!values) {
        values = new Map();
        lastStyleValues.set(target, values);
      }
      if (values.get(property) === value) return;
      values.set(property, value);
      target.style.setProperty(property, value);
    };
    const writeNumber = (
      target: HTMLElement | null,
      property: string,
      value: number,
      format: (next: number) => string = String,
      epsilon = 0.001,
    ) => {
      if (!target) return;
      let values = lastNumericValues.get(target);
      if (!values) {
        values = new Map();
        lastNumericValues.set(target, values);
      }
      const previous = values.get(property);
      if (previous !== undefined && Math.abs(previous - value) <= epsilon) return;
      values.set(property, value);
      target.style.setProperty(property, format(value));
    };

    const updateAtmosphereTransform = () => {
      writeStyle(
        atmosphereSvg,
        "transform",
        `translate3d(${atmospherePointerX * -0.32}px, ${atmospherePointerY * -0.32}px, 0) rotate(${atmosphereVelocity * 1.5}deg)`,
      );
    };

    const updateArchiveTransform = () => {
      writeStyle(
        archiveIllustration,
        "transform",
        `translate3d(${archivePointerX * 0.28}px, ${archivePointerY * 0.28}px, 0) skewY(${archiveVelocity * 1.2}deg)`,
      );
    };

    const measureLayout = () => {
      viewportWidth = globalThis.innerWidth;
      viewportHeight = globalThis.innerHeight;
      const compact = viewportWidth <= 980;

      if (railSection && railTrack) {
        if (compact) {
          railSection.style.removeProperty("--rail-section-height");
          railTravel = 0;
        } else {
          const cards = Array.from(railTrack.querySelectorAll<HTMLElement>(".rail-card"));
          const firstCard = cards[0];
          const lastCard = cards.at(-1);
          // Keep the first and last cards on the same editorial axis. `:last-of-type`
          // is unsafe here because the rail mixes article wrappers and direct anchors;
          // it used to stop the travel calculation before the final card.
          railTravel = firstCard && lastCard
            ? Math.max(
                0,
                lastCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left,
              )
            : 0;
          // Give each card a readable scroll beat. The old 0.55 factor made the
          // sticky viewport release while the card copy was still below its edge.
          const scrollDistance = Math.max(viewportHeight * 1.25, railTravel * 0.62);
          railSection.style.setProperty(
            "--rail-section-height",
            `${Math.ceil(viewportHeight + scrollDistance)}px`,
          );
        }
      }

      // Card centres with the track at rest, so each frame can derive positions
      // from the track offset instead of reading layout per card.
      railCardCenters = railCards.map((card) => {
        const rect = card.getBoundingClientRect();
        return rect.left + rect.width / 2 - railTrackX;
      });
      spotlightMetric = metricFor(spotlightSection);
      spotlightMetrics = spotlightEntries.flatMap((entry) => {
        const metric = metricFor(entry);
        return metric ? [metric] : [];
      });
      expMetric = metricFor(expList);
      expItemTops = expItems.map((item) => metricFor(item)?.top ?? 0);
      contactMetric = metricFor(contactSection);
      contactCharCenters = contactChars.map((char) => {
        const rect = char.getBoundingClientRect();
        const style = char.style.transform;
        // Letters may be mid-displacement; the offset is small enough to ignore
        // unless a transform is present, in which case measure without it.
        if (style) char.style.transform = "";
        const clean = style ? char.getBoundingClientRect() : rect;
        if (style) char.style.transform = style;
        return {
          x: clean.left + clean.width / 2 + globalThis.scrollX,
          y: clean.top + clean.height / 2 + globalThis.scrollY,
        };
      });

      pinMetric = metricFor(pinSection);
      railMetric = metricFor(railSection);
      aboutMetric = metricFor(aboutSection);
      illustrationMetrics = illustrationTargets.flatMap((target) => {
        const metric = metricFor(target);
        return metric ? [{ target, metric }] : [];
      });
      wedgeMetrics = wedgeTargets.flatMap((target) => {
        const metric = metricFor(target);
        return metric ? [{ target, metric }] : [];
      });
      magneticRects.clear();
      magneticTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        let ancestor: HTMLElement | null = target;
        let fixed = false;
        while (ancestor) {
          if (getComputedStyle(ancestor).position === "fixed") {
            fixed = true;
            break;
          }
          ancestor = ancestor.parentElement;
        }
        magneticRects.set(target, {
          left: rect.left + (fixed ? 0 : globalThis.scrollX),
          top: rect.top + (fixed ? 0 : globalThis.scrollY),
          width: rect.width,
          height: rect.height,
          fixed,
        });
      });
      documentMax = Math.max(1, document.documentElement.scrollHeight - viewportHeight);
      scrollDirty = true;
      pointerDirty = finePointer;
    };

    const updateScrollEffects = (now: number) => {
      const pageProgress = scrollY / documentMax;
      const scrollDelta = scrollY - previousScrollY;
      previousScrollY = scrollY;
      scrollVelocity += (scrollDelta - scrollVelocity) * 0.28;
      if (now - lastScrollAt >= 200) scrollVelocity = 0;

      const normalizedVelocity = clampVelocity(scrollVelocity / 120);
      atmosphereVelocity = normalizedVelocity;
      archiveVelocity = normalizedVelocity;
      updateAtmosphereTransform();
      updateArchiveTransform();
      if (isNearViewport(pinMetric)) {
        writeStyle(
          statementPlane,
          "transform",
          `rotateX(60deg) rotateZ(${normalizedVelocity * 45}deg) scale(0.8)`,
        );
      }
      if (scrollBarRef.current) {
        writeStyle(scrollBarRef.current, "transform", `scaleX(${pageProgress})`);
      }

      const pinProgress = progressFor(pinMetric);
      const compact = viewportWidth <= 980;
      const mobile = viewportWidth <= 640;
      // Scale is capped so the pinned statement can never overrun the fixed nav
      // or its own caption (previously grew to ~1.7x and collided with both).
      const pinScale = mobile
        ? 0.9 + pinProgress * 0.1
        : compact
          ? 0.88 + pinProgress * 0.14
          : 0.84 + pinProgress * 0.22;
      writeStyle(
        giant,
        "transform",
        `translate3d(0, 0, 0) scale(${pinScale})`,
      );
      writeNumber(giant, "--statement-p", pinProgress, (value) => value.toFixed(4));

      const railProgress = compact ? 0 : progressFor(railMetric);
      const railMoving = !reducedMotion && !compact;
      railTrackX = railMoving ? -railTravel * railProgress : 0;
      if (railTrack) {
        const skew = railMoving && isNearViewport(railMetric) ? normalizedVelocity * -2.4 : 0;
        writeStyle(
          railTrack,
          "transform",
          `translate3d(${railTrackX}px, 0, 0) skewX(${skew.toFixed(3)}deg)`,
        );
      }
      writeStyle(railBar, "transform", `scaleX(${railProgress})`);

      const viewportCenter = viewportWidth / 2;
      let nextActive = 1;
      let closest = Infinity;
      railCardCenters.forEach((restCenter, index) => {
        const center = restCenter + railTrackX;
        const distance = Math.abs(center - viewportCenter);
        if (distance < closest) {
          closest = distance;
          nextActive = index + 1;
        }
        if (railMoving && isNearViewport(railMetric)) {
          // Screenshots drift against the card for a window-into-depth feel.
          const offset = Math.max(-1, Math.min(1, (center - viewportCenter) / viewportWidth));
          writeStyle(
            railImages[index],
            "transform",
            `translate3d(${(offset * -34).toFixed(2)}px, 0, 0) scale(1.14)`,
          );
        } else if (!railMoving) {
          writeStyle(railImages[index], "transform", "");
        }
      });
      if (!railCardCenters.length) {
        nextActive = Math.min(railCount, Math.max(1, Math.floor(railProgress * railCount) + 1));
      }
      if (railNumber && nextActive !== railActiveIndex) {
        const direction = nextActive > railActiveIndex ? 1 : -1;
        railActiveIndex = nextActive;
        railNumber.textContent = nextActive.toString().padStart(2, "0");
        if (!reducedMotion) {
          railNumber.animate(
            [
              { transform: `translateY(${direction * 70}%)`, opacity: 0 },
              { transform: "translateY(0)", opacity: 1 },
            ],
            { duration: 520, easing: "cubic-bezier(0.19, 1, 0.22, 1)" },
          );
        }
      }

      const aboutActive = Boolean(
        aboutMetric &&
          aboutMetric.top - scrollY < viewportHeight * 0.42 &&
          aboutMetric.bottom - scrollY > viewportHeight * 0.58,
      );
      if (aboutActive !== aboutActiveState) {
        aboutActiveState = aboutActive;
        document.body.classList.toggle("manifesto-dark", aboutActive);
      }

      illustrationMetrics.forEach(({ target, metric }) => {
        if (!isNearViewport(metric)) return;
        const progress = clamp(
          (viewportHeight - (metric.top - scrollY)) / (viewportHeight + metric.height),
        );
        const drift = (progress - 0.5) * 56;
        const rotate = (progress - 0.5) * 9;
        const scale = 0.985 + progress * 0.045;

        if (target === railIllustration) {
          writeStyle(
            target,
            "transform",
            `translate3d(${railProgress * -120}px, ${drift}px, 0)`,
          );
          writeStyle(railDrift, "transform", `translateX(${railProgress * -200}px)`);
          return;
        }

        writeStyle(
          target,
          "transform",
          `translate3d(0, ${drift}px, 0) rotate(${rotate}deg) scale(${scale})`,
        );
        if (target.classList.contains("flux-chapter-illo")) {
          writeStyle(
            target.querySelector<SVGGElement>(".flux-chapter-spin"),
            "transform",
            `rotate(${progress * 360}deg)`,
          );
          writeStyle(
            target.querySelector<SVGGElement>(".flux-chapter-drift"),
            "transform",
            `translateY(${-drift}px)`,
          );
          writeStyle(
            target.querySelector<SVGGElement>(".flux-chapter-scale"),
            "transform",
            `scale(${1 + progress * 0.5})`,
          );
        }
      });

      if (isNearViewport(spotlightMetric)) {
        const spotlightY = scrollY + viewportHeight * 0.5;
        let nextSpotlight: HTMLElement | null = null;
        let spotlightDistance = Infinity;
        spotlightMetrics.forEach((metric, index) => {
          const distance = Math.abs(metric.top + metric.height / 2 - spotlightY);
          if (distance < spotlightDistance) {
            spotlightDistance = distance;
            nextSpotlight = spotlightEntries[index];
          }
        });
        if (nextSpotlight !== activeSpotlight) {
          activeSpotlight?.removeAttribute("data-active");
          activeSpotlight = nextSpotlight;
          (activeSpotlight as HTMLElement | null)?.setAttribute("data-active", "");
        }
      }

      if (expMetric && isNearViewport(expMetric)) {
        const expLine = scrollY + viewportHeight * 0.55;
        writeNumber(
          expList,
          "--exp-p",
          clamp((expLine - expMetric.top) / Math.max(1, expMetric.height)),
          (value) => value.toFixed(4),
        );
        expItems.forEach((item, index) => {
          const passed = expItemTops[index] <= expLine;
          if (item.hasAttribute("data-passed") !== passed) {
            item.toggleAttribute("data-passed", passed);
          }
        });
      }

      if (contactPointerActive || isNearViewport(contactMetric, 0)) updateContactLetters();

      const focusY = scrollY + viewportHeight * 0.48;
      let activeWedge: string | undefined;
      let activeWedgeDistance = Infinity;
      wedgeMetrics.forEach(({ target, metric }) => {
        if (metric.bottom <= scrollY || metric.top >= scrollY + viewportHeight) return;
        const distance = Math.abs(metric.top + metric.height / 2 - focusY);
        if (distance >= activeWedgeDistance) return;
        activeWedgeDistance = distance;
        activeWedge = target.dataset.wedge;
      });
      if (activeWedge && root.dataset.aboutActive !== activeWedge) {
        root.dataset.aboutActive = activeWedge;
      }
    };

    const updateContactLetters = () => {
      if (!finePointer || !contactChars.length) return;
      const near = isNearViewport(contactMetric, 0) && lastPointerAt > -Infinity;
      let anyActive = false;
      const radius = Math.max(140, viewportWidth * 0.12);
      contactChars.forEach((char, index) => {
        const center = contactCharCenters[index];
        if (!near || !center) {
          writeStyle(char, "transform", "");
          return;
        }
        const dx = center.x - globalThis.scrollX - pointerX;
        const dy = center.y - scrollY - pointerY;
        const distance = Math.hypot(dx, dy);
        if (distance >= radius) {
          writeStyle(char, "transform", "");
          return;
        }
        anyActive = true;
        const force = (1 - distance / radius) ** 2;
        const push = force * 26;
        const unitX = distance ? dx / distance : 0;
        const unitY = distance ? dy / distance : -1;
        writeStyle(
          char,
          "transform",
          `translate3d(${(unitX * push).toFixed(2)}px, ${(unitY * push).toFixed(2)}px, 0) rotate(${(unitX * force * 10).toFixed(2)}deg)`,
        );
      });
      contactPointerActive = anyActive;
    };

    const updatePointerEffects = () => {
      if (!finePointer) return;
      const normalizedX = pointerX / viewportWidth;
      const normalizedY = pointerY / viewportHeight;
      const x = (normalizedX - 0.5) * 34;
      const y = (normalizedY - 0.5) * 34;
      atmospherePointerX = x;
      atmospherePointerY = y;
      archivePointerX = x;
      archivePointerY = y;
      updateAtmosphereTransform();
      updateArchiveTransform();
      updateContactLetters();
      writeStyle(heroSvg, "transform", `translate3d(${x}px, ${y}px, 0)`);
      writeStyle(heroOrbits, "transform", `translate(${x * 1.5}px, ${y * 1.5}px)`);
      writeStyle(heroNodes, "transform", `translate(${x * -2}px, ${y * -2}px)`);
      writeStyle(
        archiveStackBack,
        "transform",
        `translate3d(${x * -0.18}px, ${y * -0.18}px, 0)`,
      );
      writeStyle(
        archiveStackMid,
        "transform",
        `translate3d(${x * 0.18}px, ${y * 0.18}px, 0)`,
      );
      writeStyle(
        archiveStackFront,
        "transform",
        `translate3d(${x * 0.34}px, ${y * 0.34}px, 0)`,
      );
      writeStyle(
        archiveManifest,
        "transform",
        `translate3d(${x * -0.28}px, ${y * -0.28}px, 0)`,
      );
    };

    const schedule = () => {
      if (!frame) frame = globalThis.requestAnimationFrame(tick);
    };

    const tick = (now: number) => {
      frame = 0;
      const scrolling = now - lastScrollAt < 200;
      if (scrolling !== scrollingClassActive) {
        scrollingClassActive = scrolling;
        document.documentElement.classList.toggle("is-scrolling", scrolling);
      }
      if (scrollDirty || scrolling || wasScrolling) {
        updateScrollEffects(now);
        scrollDirty = false;
      }
      wasScrolling = scrolling;
      if (pointerDirty) {
        updatePointerEffects();
        pointerDirty = false;
      }

      let cursorMoving = false;
      if (finePointer && ringRef.current && dotRef.current) {
        ringX += (pointerX - ringX) * 0.18;
        ringY += (pointerY - ringY) * 0.18;
        cursorMoving = Math.abs(pointerX - ringX) > 0.1 || Math.abs(pointerY - ringY) > 0.1;
        ringRef.current.style.transform =
          `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        dotRef.current.style.transform =
          `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
      }

      if (cursorMoving || scrolling || now - lastPointerAt < 200) schedule();
    };

    const onScroll = () => {
      scrollY = globalThis.scrollY;
      lastScrollAt = performance.now();
      scrollDirty = true;
      schedule();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      lastPointerAt = performance.now();
      pointerDirty = true;

      const eventTarget = event.target instanceof Element ? event.target : null;
      const interactive = eventTarget?.closest(interactiveSelector) ?? null;
      if (interactive !== hoveredInteractive) {
        hoveredInteractive = interactive;
        ringRef.current?.classList.toggle("hover", Boolean(interactive));
        dotRef.current?.classList.toggle("hover", Boolean(interactive));
      }

      const magnetic = eventTarget?.closest<HTMLElement>(".magnetic") ?? null;
      if (activeMagnetic && activeMagnetic !== magnetic) activeMagnetic.style.transform = "";
      activeMagnetic = magnetic;
      const rect = magnetic ? magneticRects.get(magnetic) : null;
      if (magnetic && rect) {
        const centerX = rect.left - (rect.fixed ? 0 : globalThis.scrollX) + rect.width / 2;
        const centerY = rect.top - (rect.fixed ? 0 : globalThis.scrollY) + rect.height / 2;
        const x = (event.clientX - centerX) * 0.18;
        const y = (event.clientY - centerY) * 0.18;
        magnetic.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      const row = eventTarget?.closest<HTMLElement>("[data-work-row]");
      const previewId = row?.dataset.projectId;
      const preview = previewId
        ? document.querySelector<HTMLElement>(`[data-work-preview="${previewId}"]`)
        : null;
      if (preview) {
        writeNumber(preview, "--preview-x", event.clientX + 200, (value) => `${value}px`, 0.5);
        writeNumber(preview, "--preview-y", event.clientY, (value) => `${value}px`, 0.5);
      }
      schedule();
    };

    const onPointerLeave = () => {
      lastPointerAt = -Infinity;
      pointerDirty = true;
      schedule();
      hoveredInteractive = null;
      ringRef.current?.classList.remove("hover");
      dotRef.current?.classList.remove("hover");
      if (activeMagnetic) activeMagnetic.style.transform = "";
      activeMagnetic = null;
    };

    // The rail moves with page scroll, so a keyboard user tabbing to a card that
    // is translated off-screen would lose sight of their focus. Scroll the page
    // to the point where that card sits in the middle of the viewport.
    const onRailFocus = (event: FocusEvent) => {
      if (!railMetric || railTravel <= 0 || viewportWidth <= 980) return;
      const target = event.target instanceof HTMLElement ? event.target : null;
      if (!target?.matches(":focus-visible")) return;
      const card = target.closest<HTMLElement>(".rail-card");
      const index = card ? railCards.indexOf(card) : -1;
      if (index < 0) return;
      const progress = clamp((railCardCenters[index] - viewportWidth / 2) / railTravel);
      const top = railMetric.top + progress * Math.max(1, railMetric.height - viewportHeight);
      if (Math.abs(top - globalThis.scrollY) < 4) return;
      globalThis.scrollTo({ behavior: reducedMotion ? "instant" : "smooth", top });
    };

    const onResize = () => {
      globalThis.clearTimeout(resizeTimer);
      resizeTimer = globalThis.setTimeout(() => {
        measureLayout();
        schedule();
      }, 100);
    };

    measureLayout();
    schedule();
    globalThis.addEventListener("scroll", onScroll, { passive: true });
    globalThis.addEventListener("resize", onResize);
    railTrack?.addEventListener("focusin", onRailFocus);
    if (finePointer) {
      globalThis.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      if (frame) globalThis.cancelAnimationFrame(frame);
      globalThis.clearTimeout(resizeTimer);
      globalThis.removeEventListener("scroll", onScroll);
      globalThis.removeEventListener("resize", onResize);
      railTrack?.removeEventListener("focusin", onRailFocus);
      globalThis.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.documentElement.classList.remove("is-scrolling");
      if (activeMagnetic) activeMagnetic.style.transform = "";
    };
  }, [finePointer, reducedMotion]);

  useEffect(() => {
    let cancelPending: (() => void) | undefined;

    const targetTop = (hash: string) => {
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      if (!id) return 0;
      const target = document.getElementById(id);
      if (!target) return null;
      // Land flush under the fixed nav, whatever height it wraps to.
      const navOffset =
        document.querySelector(".nav")?.getBoundingClientRect().bottom ??
        (globalThis.innerWidth <= 640 ? 104 : 92);
      return Math.max(0, target.getBoundingClientRect().top + globalThis.scrollY - navOffset);
    };

    // One smooth glide per click. Long jumps skip most of the distance first so
    // the page does not race through every pinned section on the way, and a
    // single instant correction runs after the scroll settles if late layout
    // (images, fonts) moved the target.
    const glideTo = (hash: string, smooth: boolean) => {
      cancelPending?.();
      const top = targetTop(hash);
      if (top === null) return;

      if (!smooth) {
        globalThis.scrollTo({ behavior: "instant", top });
        const timer = globalThis.setTimeout(() => {
          const settled = targetTop(hash);
          if (settled !== null && Math.abs(settled - globalThis.scrollY) > 2) {
            globalThis.scrollTo({ behavior: "instant", top: settled });
          }
        }, 400);
        cancelPending = () => globalThis.clearTimeout(timer);
        return;
      }

      const distance = top - globalThis.scrollY;
      const runway = globalThis.innerHeight * 1.2;
      if (Math.abs(distance) > runway * 2) {
        globalThis.scrollTo({
          behavior: "instant",
          top: top - Math.sign(distance) * runway,
        });
      }
      globalThis.scrollTo({ behavior: "smooth", top });

      const startedAt = performance.now();
      const onEnd = () => {
        // The instant pre-jump also emits scrollend; wait for the glide's own.
        if (performance.now() - startedAt < 250 && Math.abs(globalThis.scrollY - top) > 2) {
          globalThis.addEventListener("scrollend", onEnd, { once: true });
          return;
        }
        cancelPending?.();
        const settled = targetTop(hash);
        if (settled !== null && Math.abs(settled - globalThis.scrollY) > 2) {
          globalThis.scrollTo({ behavior: "instant", top: settled });
        }
      };
      const fallback = globalThis.setTimeout(onEnd, 1600);
      globalThis.addEventListener("scrollend", onEnd, { once: true });
      cancelPending = () => {
        globalThis.clearTimeout(fallback);
        globalThis.removeEventListener("scrollend", onEnd);
        cancelPending = undefined;
      };
    };

    // Capture phase so this runs before next/link's handler; preventing the
    // default stops the router from turning an in-page jump into a navigation
    // (which also fired a full-page view transition mid-scroll).
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      const href = anchor?.getAttribute("href");
      if (!anchor || !href || anchor.target === "_blank") return;

      const url = new URL(href, globalThis.location.href);
      const isSamePage =
        url.origin === globalThis.location.origin &&
        url.pathname === globalThis.location.pathname &&
        url.search === globalThis.location.search;
      if (!isSamePage) return;

      event.preventDefault();
      if (url.hash !== globalThis.location.hash) {
        globalThis.history.pushState(null, "", url.hash || url.pathname);
      }
      glideTo(url.hash, !reducedMotion);
    };

    const onPopState = () => glideTo(globalThis.location.hash, !reducedMotion);

    document.addEventListener("click", onClick, true);
    globalThis.addEventListener("popstate", onPopState);
    if (globalThis.location.hash) glideTo(globalThis.location.hash, false);
    const clearInitial = () => cancelPending?.();

    return () => {
      clearInitial?.();
      document.removeEventListener("click", onClick, true);
      globalThis.removeEventListener("popstate", onPopState);
    };
  }, [reducedMotion]);

  return (
    <>
      <div className="scroll-progress" ref={scrollBarRef} />
      <FluxAtmosphere reducedMotion={reducedMotion} />
      {finePointer ? (
        <>
          <div aria-hidden="true" className="cursor-ring" ref={ringRef} />
          <div aria-hidden="true" className="cursor-dot" ref={dotRef} />
        </>
      ) : null}
    </>
  );
}
