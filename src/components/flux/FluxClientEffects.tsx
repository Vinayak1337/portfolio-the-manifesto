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

function ScrollCursor({ reducedMotion }: Readonly<{ reducedMotion: boolean }>) {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = globalThis.matchMedia("(pointer: fine)");
    const update = () => setEnabled(!reducedMotion && media.matches && globalThis.innerWidth > 980);

    update();
    media.addEventListener("change", update);
    globalThis.addEventListener("resize", update);

    return () => {
      media.removeEventListener("change", update);
      globalThis.removeEventListener("resize", update);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let mouseX = globalThis.innerWidth / 2;
    let mouseY = globalThis.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const hoverTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "a, button, [role='button'], .chapter-card, .work-row, .rail-card, .exp-item, .tbl-row",
      ),
    );
    const magneticTargets = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));

    if (!dot || !ring) {
      return;
    }

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      raf = globalThis.requestAnimationFrame(tick);
    };

    const onPointerMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    const enter = () => {
      ring.classList.add("hover");
      dot.classList.add("hover");
    };
    const leave = () => {
      ring.classList.remove("hover");
      dot.classList.remove("hover");
    };
    const onMagneticMove = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) * 0.18;
      const y = (event.clientY - (rect.top + rect.height / 2)) * 0.18;
      target.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onMagneticLeave = (event: MouseEvent) => {
      (event.currentTarget as HTMLElement).style.transform = "";
    };

    globalThis.addEventListener("mousemove", onPointerMove);
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", enter);
      target.addEventListener("mouseleave", leave);
    });
    magneticTargets.forEach((target) => {
      target.addEventListener("mousemove", onMagneticMove);
      target.addEventListener("mouseleave", onMagneticLeave);
    });
    raf = globalThis.requestAnimationFrame(tick);

    return () => {
      globalThis.cancelAnimationFrame(raf);
      globalThis.removeEventListener("mousemove", onPointerMove);
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", enter);
        target.removeEventListener("mouseleave", leave);
      });
      magneticTargets.forEach((target) => {
        target.removeEventListener("mousemove", onMagneticMove);
        target.removeEventListener("mouseleave", onMagneticLeave);
      });
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div aria-hidden="true" className="cursor-ring" ref={ringRef} />
      <div aria-hidden="true" className="cursor-dot" ref={dotRef} />
    </>
  );
}

export function FluxClientEffects() {
  const reducedMotion = useReducedMotion();
  const scrollBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("manifesto-mounted", "manifesto-illustrated", "variant-flux");

    return () => {
      document.body.classList.remove(
        "manifesto-mounted",
        "manifesto-illustrated",
        "manifesto-dark",
        "variant-flux",
      );
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
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
          }
        });
      },
      { threshold: 0.18 },
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-flux-root]");
    const pinSection = document.querySelector<HTMLElement>("[data-pin-section]");
    const giant = document.querySelector<HTMLElement>("[data-pin-giant]");
    const railSection = document.querySelector<HTMLElement>("[data-rail-section]");
    const railTrack = document.querySelector<HTMLElement>("[data-rail-track]");
    const railBar = document.querySelector<HTMLElement>("[data-rail-bar]");
    const railNumber = document.querySelector<HTMLElement>("[data-rail-number]");
    const aboutSection = document.querySelector<HTMLElement>("[data-about-section]");
    const illustrationTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-illo]"),
    ).filter((target) => !target.classList.contains("illo-contact"));
    const railCount = Number(railSection?.dataset.railCount ?? 1);
    const clamp = (value: number) => Math.max(0, Math.min(1, value));
    const clampVelocity = (value: number) => Math.max(-1, Math.min(1, value));
    let frame = 0;
    let lastScrollY = globalThis.scrollY;
    let scrollVelocity = 0;

    const progressFor = (section: HTMLElement | null) => {
      if (!section) {
        return 0;
      }

      const rect = section.getBoundingClientRect();
      const total = Math.max(1, section.offsetHeight - globalThis.innerHeight);

      return clamp(-rect.top / total);
    };

    const getRailTravel = () => {
      if (!railSection || !railTrack) {
        return 0;
      }

      if (globalThis.innerWidth <= 980) {
        railSection.style.removeProperty("--rail-section-height");
        return 0;
      }

      const railCards = Array.from(railTrack.querySelectorAll<HTMLElement>(".rail-card"));
      const lastCard = railCards.at(-1);
      const lastCardRight = lastCard
        ? lastCard.offsetLeft + lastCard.offsetWidth
        : railTrack.scrollWidth;
      const endGutter = 32;
      const trackWidth = Math.max(0, lastCardRight - globalThis.innerWidth + endGutter);
      const scrollDistance = Math.max(globalThis.innerHeight, trackWidth * 0.55);
      railSection.style.setProperty(
        "--rail-section-height",
        `${Math.ceil(globalThis.innerHeight + scrollDistance)}px`,
      );

      return trackWidth;
    };

    const update = () => {
      frame = 0;
      const docMax = Math.max(1, document.documentElement.scrollHeight - globalThis.innerHeight);
      const pageProgress = globalThis.scrollY / docMax;
      const scrollDelta = globalThis.scrollY - lastScrollY;
      lastScrollY = globalThis.scrollY;
      scrollVelocity += (scrollDelta - scrollVelocity) * 0.28;

      root?.style.setProperty("--page-progress", String(pageProgress));
      root?.style.setProperty("--scroll-velocity", String(clampVelocity(scrollVelocity / 120)));

      if (scrollBarRef.current) {
        scrollBarRef.current.style.transform = `scaleX(${pageProgress})`;
      }

      const pinProgress = progressFor(pinSection);
      const compactLayout = globalThis.innerWidth <= 980;
      const mobileLayout = globalThis.innerWidth <= 640;
      root?.style.setProperty("--pin-progress", String(pinProgress));
      giant?.style.setProperty(
        "--pin-scale",
        String(
          mobileLayout
            ? 0.86 + pinProgress * 0.16
            : compactLayout
              ? 0.82 + pinProgress * 0.3
              : 0.6 + pinProgress * 1.1,
        ),
      );

      const trackWidth = getRailTravel();
      const railProgress = compactLayout ? 0 : progressFor(railSection);

      if (railTrack) {
        railTrack.style.transform = reducedMotion || compactLayout
          ? "translateX(0)"
          : `translateX(${-trackWidth * railProgress}px)`;
      }
      if (railBar) {
        railBar.style.width = `${railProgress * 100}%`;
      }
      if (railNumber) {
        const activeIndex = Math.min(
          railCount,
          Math.max(1, Math.floor(railProgress * railCount) + 1),
        );
        railNumber.textContent = activeIndex.toString().padStart(2, "0");
      }

      root?.style.setProperty("--rail-progress", String(railProgress));

      const aboutRect = aboutSection?.getBoundingClientRect();
      const inAbout = Boolean(
        aboutRect &&
          aboutRect.top < globalThis.innerHeight * 0.42 &&
          aboutRect.bottom > globalThis.innerHeight * 0.58,
      );
      document.body.classList.toggle("manifesto-dark", inAbout);

      illustrationTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const progress = clamp(
          (globalThis.innerHeight - rect.top) / (globalThis.innerHeight + rect.height),
        );
        target.style.setProperty("--illo-progress", String(progress));
        target.style.setProperty("--illo-drift", `${(progress - 0.5) * 56}px`);
        target.style.setProperty("--illo-rotate", `${(progress - 0.5) * 9}deg`);
      });
    };

    const triggerUpdate = () => {
      if (!frame) {
        frame = globalThis.requestAnimationFrame(update);
      }
    };

    triggerUpdate();
    globalThis.addEventListener("scroll", triggerUpdate, { passive: true });
    globalThis.addEventListener("resize", triggerUpdate);

    return () => {
      if (frame) {
        globalThis.cancelAnimationFrame(frame);
      }
      globalThis.removeEventListener("scroll", triggerUpdate);
      globalThis.removeEventListener("resize", triggerUpdate);
    };
  }, [reducedMotion]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-flux-root]");

    if (reducedMotion || !root || !globalThis.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let frame = 0;
    let pointerX = 0.5;
    let pointerY = 0.5;

    const update = () => {
      frame = 0;
      root.style.setProperty("--pointer-x", `${(pointerX - 0.5) * 34}px`);
      root.style.setProperty("--pointer-y", `${(pointerY - 0.5) * 34}px`);
      root.style.setProperty("--pointer-nx", String(pointerX));
      root.style.setProperty("--pointer-ny", String(pointerY));
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX / globalThis.innerWidth;
      pointerY = event.clientY / globalThis.innerHeight;

      if (!frame) {
        frame = globalThis.requestAnimationFrame(update);
      }
    };

    globalThis.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      if (frame) {
        globalThis.cancelAnimationFrame(frame);
      }
      globalThis.removeEventListener("pointermove", onPointerMove);
    };
  }, [reducedMotion]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-flux-root]");
    const wedgeTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-wedge]"));

    if (!root || wedgeTargets.length === 0) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const focusY = globalThis.innerHeight * 0.48;
      const active = wedgeTargets
        .map((target) => {
          const rect = target.getBoundingClientRect();
          const center = rect.top + rect.height / 2;

          return {
            distance: Math.abs(center - focusY),
            isVisible: rect.bottom > 0 && rect.top < globalThis.innerHeight,
            wedge: target.dataset.wedge,
          };
        })
        .filter((target) => target.isVisible && target.wedge)
        .sort((a, b) => a.distance - b.distance)[0]?.wedge;

      if (active) {
        root.dataset.aboutActive = active;
      }
    };

    const triggerUpdate = () => {
      if (!frame) {
        frame = globalThis.requestAnimationFrame(update);
      }
    };

    triggerUpdate();
    globalThis.addEventListener("scroll", triggerUpdate, { passive: true });
    globalThis.addEventListener("resize", triggerUpdate);

    return () => {
      if (frame) {
        globalThis.cancelAnimationFrame(frame);
      }
      globalThis.removeEventListener("scroll", triggerUpdate);
      globalThis.removeEventListener("resize", triggerUpdate);
    };
  }, []);

  useEffect(() => {
    const rows = Array.from(document.querySelectorAll<HTMLElement>("[data-work-row]"));

    const movePreview = (event: MouseEvent) => {
      const row = event.currentTarget as HTMLElement;
      const previewId = row.dataset.projectId;
      const preview = previewId
        ? document.querySelector<HTMLElement>(`[data-work-preview="${previewId}"]`)
        : null;

      if (!preview) {
        return;
      }

      preview.style.left = `${event.clientX + 200}px`;
      preview.style.top = `${event.clientY}px`;
    };

    rows.forEach((row) => row.addEventListener("mousemove", movePreview));

    return () => rows.forEach((row) => row.removeEventListener("mousemove", movePreview));
  }, []);

  useEffect(() => {
    const scrollToHash = (hash: string, behavior: ScrollBehavior) => {
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      const target = id ? document.getElementById(id) : null;

      if (!target) {
        return;
      }

      const navOffset = globalThis.innerWidth <= 640 ? 104 : 92;
      const top = target.getBoundingClientRect().top + globalThis.scrollY - navOffset;

      globalThis.scrollTo({
        behavior,
        top: Math.max(0, top),
      });
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
      if (!(event.target instanceof Element)) {
        return;
      }

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      const href = anchor?.getAttribute("href");

      if (!href) {
        return;
      }

      const url = new URL(href, globalThis.location.href);
      const isSamePage =
        url.origin === globalThis.location.origin &&
        url.pathname === globalThis.location.pathname &&
        Boolean(url.hash);

      if (!isSamePage) {
        return;
      }

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
      <ScrollCursor reducedMotion={reducedMotion} />
    </>
  );
}
