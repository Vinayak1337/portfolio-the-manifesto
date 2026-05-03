"use client";

import Image from "next/image";
import type { CSSProperties, ElementType, MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import {
  about,
  chapters,
  experience,
  highlights,
  marqueeTech,
  person,
  projects,
} from "@/data/portfolio";

type WordToken = {
  text: string;
  emphasis?: boolean;
};

const railProjects = projects
  .filter((project) => ["AI", "WORK", "PERSONAL", "FREELANCE", "OSS"].includes(project.category))
  .slice(0, 10);

const ledgerProjects = projects
  .filter((project) => ["AI", "WORK", "PERSONAL", "FREELANCE", "OSS"].includes(project.category))
  .slice(0, 14);

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function splitTokens(tokens: WordToken[]) {
  return tokens.flatMap((token) =>
    token.text.split(" ").map((word) => ({ text: word, emphasis: token.emphasis })),
  );
}

function SplitText({
  as: Tag = "h2",
  className,
  id,
  tokens,
  reveal = true,
}: {
  as?: ElementType;
  className: string;
  id?: string;
  tokens: WordToken[];
  reveal?: boolean;
}) {
  const words = splitTokens(tokens);

  return (
    <Tag
      className={`split ${className}`}
      data-reveal={reveal ? "" : undefined}
      id={id}
    >
      {words.map((word, index) => (
        <span key={`${word.text}-${index}`}>
          <span
            className="word"
            style={{ "--i": index } as CSSProperties}
          >
            <span>
              {word.emphasis ? <em>{word.text}</em> : word.text}
            </span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}

function ScrollCursor({ reducedMotion }: { reducedMotion: boolean }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const hoverTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "a, button, [role='button'], .chapter-card, .work-row, .rail-card, .exp-item",
      ),
    );
    const magneticTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".magnetic"),
    );

    if (!dot || !ring) {
      return;
    }

    const onPointerMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      raf = window.requestAnimationFrame(tick);
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

    window.addEventListener("mousemove", onPointerMove);
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", enter);
      target.addEventListener("mouseleave", leave);
    });
    magneticTargets.forEach((target) => {
      target.addEventListener("mousemove", onMagneticMove);
      target.addEventListener("mouseleave", onMagneticLeave);
    });
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onPointerMove);
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", enter);
        target.removeEventListener("mouseleave", leave);
      });
      magneticTargets.forEach((target) => {
        target.removeEventListener("mousemove", onMagneticMove);
        target.removeEventListener("mouseleave", onMagneticLeave);
      });
    };
  }, [reducedMotion]);

  return (
    <>
      <div aria-hidden="true" className="cursor-ring" ref={ringRef} />
      <div aria-hidden="true" className="cursor-dot" ref={dotRef} />
    </>
  );
}

function Marquee({ variant = "default" }: { variant?: "default" | "reverse" }) {
  const items =
    variant === "reverse"
      ? ["RAG", "Agents", "Evals", "Commerce", "Ed-tech"]
      : marqueeTech;

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className={`marquee-track ${variant === "reverse" ? "reverse" : ""}`}>
        {[0, 1].map((set) => (
          <span className="marquee-item" key={set}>
            {items.map((item) => (
              <span className="marquee-chip" key={`${set}-${item}`}>
                <em>{item}</em>
                <span className="dot" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

function externalLinkProps(href: string | null) {
  if (!href) {
    return {
      href: "#contact",
      target: undefined,
      rel: undefined,
    };
  }

  return {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

export default function Manifesto() {
  const reducedMotion = useReducedMotion();
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const pinTypeRef = useRef<HTMLElement>(null);
  const giantRef = useRef<HTMLDivElement>(null);
  const railSectionRef = useRef<HTMLElement>(null);
  const railTrackRef = useRef<HTMLDivElement>(null);
  const railBarRef = useRef<HTMLDivElement>(null);
  const railNumberRef = useRef<HTMLSpanElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.classList.add("manifesto-mounted");

    return () => {
      document.body.classList.remove("manifesto-mounted", "manifesto-dark");
    };
  }, []);

  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
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
    const progressFor = (section: HTMLElement | null) => {
      if (!section) {
        return 0;
      }

      const rect = section.getBoundingClientRect();
      const total = Math.max(1, section.offsetHeight - window.innerHeight);

      return Math.max(0, Math.min(1, -rect.top / total));
    };

    const onScroll = () => {
      const docMax = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const pageProgress = window.scrollY / docMax;

      if (scrollBarRef.current) {
        scrollBarRef.current.style.transform = `scaleX(${pageProgress})`;
      }

      const pinProgress = progressFor(pinTypeRef.current);

      if (giantRef.current) {
        giantRef.current.style.setProperty(
          "--pin-scale",
          String(0.6 + pinProgress * 1.1),
        );
      }

      const railProgress = progressFor(railSectionRef.current);
      const track = railTrackRef.current;

      if (track) {
        const trackWidth = Math.max(
          0,
          track.scrollWidth - window.innerWidth + 64,
        );
        track.style.transform = reducedMotion
          ? "translateX(0)"
          : `translateX(${-trackWidth * railProgress}px)`;
      }

      if (railBarRef.current) {
        railBarRef.current.style.width = `${railProgress * 100}%`;
      }

      if (railNumberRef.current) {
        const activeIndex = Math.min(
          railProjects.length,
          Math.max(1, Math.round(railProgress * railProjects.length) + 1),
        );
        railNumberRef.current.textContent = activeIndex
          .toString()
          .padStart(2, "0");
      }

      const aboutRect = aboutRef.current?.getBoundingClientRect();
      const inAbout =
        Boolean(aboutRect) &&
        aboutRect!.top < window.innerHeight * 0.42 &&
        aboutRect!.bottom > window.innerHeight * 0.58;
      document.body.classList.toggle("manifesto-dark", inAbout);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion]);

  const onWorkPreviewMove = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    projectId: string,
  ) => {
    const preview = document.getElementById(`preview-${projectId}`);

    if (!preview) {
      return;
    }

    preview.style.left = `${event.clientX + 200}px`;
    preview.style.top = `${event.clientY}px`;
  };

  return (
    <main className="manifesto-root has-custom-cursor" id="main">
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <div className="scroll-progress" ref={scrollBarRef} />
      <div aria-hidden="true" className="grain" />
      <ScrollCursor reducedMotion={reducedMotion} />

      <nav className="nav" aria-label="Primary navigation">
        <a className="mark magnetic" href="#main" aria-label="Vinayak Kumar home">
          VK / 2026
        </a>
        <ul>
          <li>
            <a className="magnetic" href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="magnetic" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="magnetic" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a
              className="magnetic"
              href={person.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-meta">
          <span>NEW DELHI · IST</span>
        </div>
        <SplitText
          as="h1"
          className="hero-title"
          id="hero-title"
          reveal={false}
          tokens={[
            { text: "Vinayak Kumar," },
            { text: "AI full-stack engineer", emphasis: true },
            { text: "building since 2021." },
          ]}
        />
        <div className="hero-sub" data-reveal>
          <p>
            I work on AI products end-to-end — RAG pipelines, agent workflows,
            the web and mobile surfaces around them, and the analytics that
            prove they work.
          </p>
          <div className="hero-scroll" aria-hidden="true">
            scroll <span>↓</span>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="pin-type" ref={pinTypeRef} aria-label="Manifesto statement">
        <div className="pin">
          <div className="giant" ref={giantRef}>
            I ship AI products
            <br />
            that move from
            <br />
            prototype to <em>production.</em>
          </div>
          <div className="sub-caption" aria-hidden="true">
            RAG · UX · AUTH · BILLING · ANALYTICS · DEPLOYMENT
          </div>
        </div>
      </section>

      <section className="chapter-stack" aria-label="Manifesto chapters">
        <div className="chapter-track">
          {chapters.map((chapter) => (
            <article className="chapter-card" data-reveal key={chapter.number}>
              <div>
                <div className="chapter-number">{chapter.number}</div>
                <div className="chapter-label">{chapter.label}</div>
              </div>
              <div>
                <h2>
                  {chapter.headline.split(chapter.emphasis)[0]}
                  <em>{chapter.emphasis}</em>
                  {chapter.headline.split(chapter.emphasis)[1]}
                </h2>
                {chapter.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="rail-sec"
        id="work"
        ref={railSectionRef}
        aria-labelledby="work-rail-title"
      >
        <div className="pin">
          <div className="rail-head">
            <SplitText
              as="h2"
              id="work-rail-title"
              className="rail-title"
              tokens={[{ text: "Selected" }, { text: "systems.", emphasis: true }]}
            />
            <div className="rail-counter" aria-live="polite">
              <span className="big" ref={railNumberRef}>
                01
              </span>
              / {railProjects.length.toString().padStart(2, "0")} - SCROLL
            </div>
          </div>

          <div className="rail-track" ref={railTrackRef}>
            {railProjects.map((project, index) => {
              const link = externalLinkProps(project.link);

              return (
                <a className="rail-card" key={project.id} {...link}>
                  <div className="rail-cover">
                    <span className="project-tag">{project.category}</span>
                    <Image
                      src={project.image}
                      alt={`${project.name} project screenshot`}
                      fill
                      sizes="(max-width: 768px) 82vw, 540px"
                      priority={index === 0}
                    />
                  </div>
                  <div className="rail-foot">
                    <span>{project.company}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.outcome ?? project.tags.slice(0, 4).join(" / ")}</p>
                </a>
              );
            })}
          </div>

          <div className="rail-progress" aria-hidden="true">
            <div ref={railBarRef} />
          </div>
        </div>
      </section>

      <section className="work-section" aria-labelledby="work-index-title">
        <div className="work-header">
          <SplitText
            as="h2"
            id="work-index-title"
            className="work-title"
            tokens={[{ text: "All" }, { text: "work.", emphasis: true }]}
          />
          <p>selected work, by year</p>
        </div>
        <div className="work-list">
          {ledgerProjects.map((project, index) => {
            const link = externalLinkProps(project.link);
            const displayIndex = (index + 1).toString().padStart(2, "0");

            return (
              <a
                className="work-row"
                key={project.id}
                onMouseMove={(event) => onWorkPreviewMove(event, project.id)}
                {...link}
              >
                <span className="work-num">{displayIndex}</span>
                <span className="work-name">{project.name}</span>
                <span className="work-tags">{project.tags.slice(0, 4).join(" / ")}</span>
                <span className="work-year">{`'${project.year.slice(2)}`}</span>
                <span className="work-arrow" aria-hidden="true">
                  →
                </span>
                <Image
                  className="work-preview"
                  id={`preview-${project.id}`}
                  src={project.image}
                  alt=""
                  width={380}
                  height={270}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
      </section>

      <section className="about-sec" id="about" ref={aboutRef} aria-labelledby="about-title">
        <div className="about-grid">
          <div>
            <span className="section-tag" data-reveal>
              About
            </span>
            <SplitText
              as="h2"
              id="about-title"
              className="about-title"
              tokens={[
                { text: "Product systems." },
                { text: "AI-focused", emphasis: true },
                { text: "full-stack." },
              ]}
            />
          </div>
          <div>
            {about.paragraphs.map((paragraph) => (
              <p data-reveal key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="stats" data-reveal>
              {highlights.map((highlight) => (
                <div key={highlight.label}>
                  <div className="stat-number">{highlight.stat}</div>
                  <div className="stat-label">{highlight.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="exp-sec" aria-labelledby="experience-title">
        <SplitText
          as="h2"
          id="experience-title"
          className="experience-title"
          tokens={[
            { text: "Where I've" },
            { text: "worked.", emphasis: true },
          ]}
        />
        <div className="exp-list">
          {experience.map((item) => (
            <article className="exp-item" key={`${item.company}-${item.date}`}>
              <div className="exp-date">{item.date}</div>
              <div className="exp-body">
                <h3>{item.title}</h3>
                <div className="exp-company">@ {item.company}</div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Marquee variant="reverse" />

      <section className="contact-sec" id="contact" aria-labelledby="contact-title">
        <span className="section-tag">Contact</span>
        <SplitText
          as="h2"
          id="contact-title"
          className="contact-title"
          tokens={[
            { text: "Have something" },
            { text: "worth building?", emphasis: true },
          ]}
        />
        <div className="contact-row">
          <a className="email magnetic" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <div className="contact-links">
            <a href={person.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={person.linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={person.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a href="/archive">Archive ↗</a>
          </div>
        </div>
        <div className="footer-meta">
          <span>© 2026 Vinayak Kumar</span>
          <span>New Delhi · IST (UTC+5:30)</span>
        </div>
      </section>
    </main>
  );
}
