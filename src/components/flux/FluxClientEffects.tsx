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
          <pattern id="flux-atmosphere-grid" width="88" height="88" patternUnits="userSpaceOnUse">
            <path d="M88 0H0V88" />
            <path d="M44 0V88M0 44H88" className="flux-atmosphere-grid-sub" />
          </pattern>
          <radialGradient id="flux-node-fill">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.86" />
            <stop offset="0.45" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect
          className="flux-atmosphere-grid-rect"
          width="1440"
          height="900"
          fill="url(#flux-atmosphere-grid)"
        />
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
      <div className="flux-field flux-field-a" />
      <div className="flux-field flux-field-b" />
    </div>
  );
}

type ElementMetric = Readonly<{ top: number; height: number; bottom: number }>;

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
        "reveal-ready",
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
      document.body.classList.remove("reveal-ready");
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
    document.body.classList.add("reveal-ready");

    const revealFallback = globalThis.setTimeout(() => {
      const observerHasResponded = revealTargets.some((target) =>
        target.classList.contains("is-in"),
      );
      if (!observerHasResponded) document.body.classList.remove("reveal-ready");
    }, 1500);

    return () => {
      globalThis.clearTimeout(revealFallback);
      document.body.classList.remove("reveal-ready");
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
    const atmosphere = document.querySelector<HTMLElement>(".flux-atmosphere");
    const heroIllustration = document.querySelector<HTMLElement>(".flux-hero-scene");
    const statementIllustration = document.querySelector<HTMLElement>(".flux-statement-system");
    const railIllustration = document.querySelector<HTMLElement>(".flux-rail-flux");
    const archiveIllustration = document.querySelector<HTMLElement>(".flux-archive-vault");
    const illustrationTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-illo]"),
    ).filter((target) => !target.classList.contains("illo-contact"));
    const wedgeTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-wedge]"));
    const magneticTargets = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));
    const railCount = Number(railSection?.dataset.railCount ?? 1);
    const lastNumericValues = new WeakMap<HTMLElement, Map<string, number>>();
    const magneticRects = new Map<HTMLElement, DOMRect>();

    let viewportWidth = globalThis.innerWidth;
    let viewportHeight = globalThis.innerHeight;
    let documentMax = 1;
    let pinMetric: ElementMetric | null = null;
    let railMetric: ElementMetric | null = null;
    let aboutMetric: ElementMetric | null = null;
    let illustrationMetrics: Array<Readonly<{ target: HTMLElement; metric: ElementMetric }>> = [];
    let wedgeMetrics: Array<Readonly<{ target: HTMLElement; metric: ElementMetric }>> = [];
    let railTravel = 0;
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
    let hoveredInteractive: Element | null = null;
    let activeMagnetic: HTMLElement | null = null;

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

    const measureLayout = () => {
      viewportWidth = globalThis.innerWidth;
      viewportHeight = globalThis.innerHeight;
      const compact = viewportWidth <= 980;

      if (railSection && railTrack) {
        if (compact) {
          railSection.style.removeProperty("--rail-section-height");
          railTravel = 0;
        } else {
          const lastCard = railTrack.querySelector<HTMLElement>(".rail-card:last-of-type");
          const lastCardRight = lastCard
            ? lastCard.offsetLeft + lastCard.offsetWidth
            : railTrack.scrollWidth;
          railTravel = Math.max(0, lastCardRight - viewportWidth + 32);
          const scrollDistance = Math.max(viewportHeight, railTravel * 0.55);
          railSection.style.setProperty(
            "--rail-section-height",
            `${Math.ceil(viewportHeight + scrollDistance)}px`,
          );
        }
      }

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
      magneticTargets.forEach((target) => magneticRects.set(target, target.getBoundingClientRect()));
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
      writeNumber(atmosphere, "--page-progress", pageProgress);
      writeNumber(atmosphere, "--scroll-velocity", normalizedVelocity);
      writeNumber(statementIllustration, "--scroll-velocity", normalizedVelocity);
      writeNumber(archiveIllustration, "--scroll-velocity", normalizedVelocity);
      if (scrollBarRef.current) {
        writeNumber(
          scrollBarRef.current,
          "--progress-scale",
          pageProgress,
          (value) => String(value),
        );
      }

      const pinProgress = progressFor(pinMetric);
      const compact = viewportWidth <= 980;
      const mobile = viewportWidth <= 640;
      writeNumber(
        giant,
        "--pin-scale",
        mobile
          ? 0.86 + pinProgress * 0.16
          : compact
            ? 0.82 + pinProgress * 0.3
            : 0.6 + pinProgress * 1.1,
      );

      const railProgress = compact ? 0 : progressFor(railMetric);
      if (railTrack) {
        writeNumber(
          railTrack,
          "--rail-offset",
          reducedMotion || compact ? 0 : -railTravel * railProgress,
          (value) => `${value}px`,
          0.25,
        );
      }
      writeNumber(railBar, "--rail-bar-scale", railProgress);
      writeNumber(railIllustration, "--rail-progress", railProgress);
      if (railNumber) {
        const activeIndex = Math.min(
          railCount,
          Math.max(1, Math.floor(railProgress * railCount) + 1),
        );
        const label = activeIndex.toString().padStart(2, "0");
        if (railNumber.textContent !== label) railNumber.textContent = label;
      }

      const aboutActive = Boolean(
        aboutMetric &&
          aboutMetric.top - scrollY < viewportHeight * 0.42 &&
          aboutMetric.bottom - scrollY > viewportHeight * 0.58,
      );
      document.body.classList.toggle("manifesto-dark", aboutActive);

      illustrationMetrics.forEach(({ target, metric }) => {
        const progress = clamp(
          (viewportHeight - (metric.top - scrollY)) / (viewportHeight + metric.height),
        );
        writeNumber(target, "--illo-progress", progress);
        writeNumber(target, "--illo-drift", (progress - 0.5) * 56, (value) => `${value}px`, 0.1);
        writeNumber(target, "--illo-rotate", (progress - 0.5) * 9, (value) => `${value}deg`, 0.05);
      });

      const focusY = scrollY + viewportHeight * 0.48;
      const activeWedge = wedgeMetrics
        .filter(({ metric }) => metric.bottom > scrollY && metric.top < scrollY + viewportHeight)
        .sort(
          (a, b) =>
            Math.abs(a.metric.top + a.metric.height / 2 - focusY) -
            Math.abs(b.metric.top + b.metric.height / 2 - focusY),
        )[0]?.target.dataset.wedge;
      if (activeWedge && root.dataset.aboutActive !== activeWedge) {
        root.dataset.aboutActive = activeWedge;
      }
    };

    const updatePointerEffects = () => {
      if (!finePointer) return;
      const normalizedX = pointerX / viewportWidth;
      const normalizedY = pointerY / viewportHeight;
      const x = (normalizedX - 0.5) * 34;
      const y = (normalizedY - 0.5) * 34;
      [atmosphere, heroIllustration, archiveIllustration].forEach((target) => {
        writeNumber(target, "--pointer-x", x, (value) => `${value}px`, 0.1);
        writeNumber(target, "--pointer-y", y, (value) => `${value}px`, 0.1);
      });
    };

    const schedule = () => {
      if (!frame) frame = globalThis.requestAnimationFrame(tick);
    };

    const tick = (now: number) => {
      frame = 0;
      const scrolling = now - lastScrollAt < 200;
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
        const x = (event.clientX - (rect.left + rect.width / 2)) * 0.18;
        const y = (event.clientY - (rect.top + rect.height / 2)) * 0.18;
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
      hoveredInteractive = null;
      ringRef.current?.classList.remove("hover");
      dotRef.current?.classList.remove("hover");
      if (activeMagnetic) activeMagnetic.style.transform = "";
      activeMagnetic = null;
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
    if (finePointer) {
      globalThis.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      if (frame) globalThis.cancelAnimationFrame(frame);
      globalThis.clearTimeout(resizeTimer);
      globalThis.removeEventListener("scroll", onScroll);
      globalThis.removeEventListener("resize", onResize);
      globalThis.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      if (activeMagnetic) activeMagnetic.style.transform = "";
    };
  }, [finePointer, reducedMotion]);

  useEffect(() => {
    const scrollToHash = (hash: string, behavior: ScrollBehavior) => {
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      const navOffset = globalThis.innerWidth <= 640 ? 104 : 92;
      const top = target.getBoundingClientRect().top + globalThis.scrollY - navOffset;
      globalThis.scrollTo({ behavior, top: Math.max(0, top) });
    };

    const settleHashScroll = (hash: string, firstBehavior: ScrollBehavior = "smooth") => {
      const timers = [0, 160, 420].map((delay, index) =>
        globalThis.setTimeout(
          () => scrollToHash(hash, index === 0 ? firstBehavior : "auto"),
          delay,
        ),
      );
      return () => timers.forEach((timer) => globalThis.clearTimeout(timer));
    };

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      const href = anchor?.getAttribute("href");
      if (!href) return;

      const url = new URL(href, globalThis.location.href);
      const isSamePage =
        url.origin === globalThis.location.origin &&
        url.pathname === globalThis.location.pathname &&
        Boolean(url.hash);
      if (!isSamePage) return;

      event.preventDefault();
      globalThis.history.pushState(null, "", url.hash);
      settleHashScroll(url.hash, reducedMotion ? "auto" : "smooth");
    };

    const onHashChange = () => {
      if (globalThis.location.hash) {
        settleHashScroll(globalThis.location.hash, reducedMotion ? "auto" : "smooth");
      }
    };

    document.addEventListener("click", onClick);
    globalThis.addEventListener("hashchange", onHashChange);
    const clearInitial = globalThis.location.hash
      ? settleHashScroll(globalThis.location.hash, "auto")
      : undefined;

    return () => {
      clearInitial?.();
      document.removeEventListener("click", onClick);
      globalThis.removeEventListener("hashchange", onHashChange);
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
