import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/shared/Glyphs";
import { ImmibotArchitecture } from "@/components/work/ImmibotArchitecture";
import "./immibot.css";

export const metadata: Metadata = {
  title: "Immibot | Full-Stack Applied AI Case Study",
  description:
    "Immibot case study: a full-stack generative AI and RAG immigration workflow with adaptive intake, cited retrieval, document validation, eligibility scoring, and account continuity.",
  alternates: { canonical: "/work/immibot" },
  openGraph: {
    title: "Immibot | Full-Stack Applied AI Case Study",
    description:
      "Immibot case study: a full-stack generative AI and RAG immigration workflow with adaptive intake, cited retrieval, document validation, eligibility scoring, and account continuity.",
    url: "/work/immibot",
    type: "article",
    images: [
      {
        url: "/assets/immibot.webp",
        width: 1600,
        height: 1041,
        alt: "Immibot applied AI workflow case study by Vinayak Kumar, Full-Stack Engineer.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Immibot | Full-Stack Applied AI Case Study",
    description:
      "Immibot: a full-stack generative AI and RAG immigration workflow built with Next.js and TypeScript.",
    images: ["/assets/immibot.webp"],
  },
};

const workflow = [
  {
    index: "01",
    title: "Guest entry",
    body: "A visitor could start in one click. The guest session gave the workflow enough continuity to be useful before account creation.",
    signal: "low-friction start",
  },
  {
    index: "02",
    title: "Adaptive questions",
    body: "Questions followed the selected country and domain instead of forcing every person through the same static intake form.",
    signal: "context-aware intake",
  },
  {
    index: "03",
    title: "Retrieval + sources",
    body: "The agentic retrieval workflow paired an answer stream with official-source links so a response could be inspected, not just trusted on tone.",
    signal: "evidence beside answer",
  },
  {
    index: "04",
    title: "Validation + scoring",
    body: "Document checks and eligibility signals turned a conversation into a structured recommendation surface with visible limitations.",
    signal: "structured decision support",
  },
  {
    index: "05",
    title: "History + account continuity",
    body: "Persisted history moved from the guest session into the Clerk account so users did not have to restart the workflow after signup.",
    signal: "continuity after signup",
  },
];

const modes = ["Search", "Advice", "Document workflow", "Eligibility"];
const stack = [
  "Next.js / TypeScript",
  "LangChain / Flowise",
  "Prisma / SQL",
  "Clerk / Stripe",
  "PostHog",
  "Vercel / PWA",
];

export default function ImmibotCaseStudy() {
  return (
    <main className="immibot-page">
      <a className="immibot-skip" href="#immibot-content">
        Skip to case study
      </a>

      <header className="immibot-nav">
        <Link className="immibot-mark" href="/" aria-label="Vinayak Kumar home">
          VK / 2026
        </Link>
        <nav aria-label="Case study navigation">
          <Link href="/#work">Selected systems</Link>
          <Link href="/archive">Archive</Link>
        </nav>
      </header>

      <div id="immibot-content">
        <section className="immibot-hero" aria-labelledby="immibot-title">
          <div className="immibot-hero-copy">
            <p className="immibot-kicker"><span>01</span> SYSTEMS DOSSIER · REMOTEHIRE · 2024</p>
            <h1 id="immibot-title">Immibot<span className="immibot-title-mark">.</span></h1>
            <p className="immibot-deck">
              An AI immigration assistant shaped as a workflow, not a one-shot chat box:
              ask only what the next decision needs, retrieve evidence, validate documents,
              and keep the user&apos;s context intact.
            </p>
            <div className="immibot-hero-actions">
              <Link href="/archive">Archive / all work <ArrowIcon /></Link>
            </div>
            <div className="immibot-hero-meta" aria-label="Immibot project details">
              <div><span>Role</span><strong>Full-Stack Engineer</strong></div>
              <div><span>Company</span><strong>RemoteHire</strong></div>
              <div><span>Surface</span><strong>AI · RAG · SaaS</strong></div>
            </div>
          </div>
          <figure className="immibot-hero-visual">
            <div className="immibot-image-frame">
              <span className="immibot-image-index">PUBLIC INTERFACE CAPTURE / 01</span>
              <Image
                src="/assets/immibot.webp"
                alt="Immibot landing interface with country choices for Canada, the USA, and Australia, an immigration question field, and common question cards."
                width={1600}
                height={1041}
                priority
                sizes="(max-width: 800px) 100vw, 58vw"
              />
            </div>
            <figcaption>
              The public-safe visual proof shows the entry point: a country-aware prompt
              before the workflow branches into questions and evidence.
            </figcaption>
          </figure>
        </section>

        <section className="immibot-intro immibot-section" aria-labelledby="problem-title">
          <div className="immibot-section-label"><span>02</span><span>THE PROBLEM</span></div>
          <div className="immibot-intro-grid">
            <h2 id="problem-title">The hard part was keeping a complicated path legible.</h2>
            <div className="immibot-copy-stack">
              <p>
                Immigration questions are high-context. A useful answer depends on country,
                intent, profile details, documents, and changing source material. The product
                challenge was to make that complexity feel like a sequence of clear next steps.
              </p>
              <p>
                I re-architected Immibot around a modular workflow: guest entry, adaptive
                questions, source-linked retrieval, document validation, eligibility scoring,
                recommendations, and history that could move into an account.
              </p>
              <p className="immibot-note">The system provides guidance and workflow software, not legal advice or a guarantee of eligibility.</p>
            </div>
          </div>
        </section>

        <section className="immibot-workflow immibot-section" aria-labelledby="workflow-title">
          <div className="immibot-section-label"><span>03</span><span>THE WALKTHROUGH</span></div>
          <div className="immibot-heading-row">
            <h2 id="workflow-title">One conversation, several dependable hand-offs.</h2>
            <p>From first question to saved recommendation.</p>
          </div>
          <ol className="immibot-workflow-list">
            {workflow.map((step) => (
              <li className="immibot-workflow-item" key={step.index}>
                <span className="immibot-step-number">{step.index}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
                <span className="immibot-step-signal">{step.signal}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="immibot-architecture-section immibot-section" aria-labelledby="architecture-title">
          <div className="immibot-section-label"><span>04</span><span>THE ENGINEERING</span></div>
          <div className="immibot-heading-row">
            <h2 id="architecture-title">Adapters kept the product extensible.</h2>
            <p>Country and domain logic could evolve without forking the whole experience.</p>
          </div>
          <div className="immibot-architecture-card">
            <ImmibotArchitecture />
          </div>
          <div className="immibot-architecture-caption">
            <p>
              <strong>Why this mattered.</strong> The conversation, persistence, account, and
              billing layers stayed shared while country rules, domain questions, and source
              adapters remained replaceable. That was the seam I protected as the system grew.
            </p>
            <div className="immibot-mode-list" aria-label="Immibot workflow modes">
              {modes.map((mode) => <span key={mode}>{mode}</span>)}
            </div>
          </div>
          <div className="immibot-engineering-note">
            <h3>My ownership</h3>
            <p>
              I worked across Next.js, TypeScript, client state, API boundaries, Prisma/SQL
              persistence, Clerk auth, Stripe billing, PostHog analytics, and PWA deployment.
              The engineering tradeoff was to keep adapters and source links visible while the
              workflow grew.
            </p>
            <p className="immibot-tech-line">Stack: {stack.join(" · ")}</p>
          </div>
        </section>

        <section className="immibot-outcome-section immibot-section" aria-labelledby="outcome-title">
          <div className="immibot-section-label"><span>05</span><span>THE OUTCOME</span></div>
          <div className="immibot-outcome-grid">
            <div className="immibot-metric-card">
              <span className="immibot-metric-value">GUEST → ACCOUNT</span>
              <p>Guest entry and account continuity made the workflow usable before and after signup.</p>
              <small>Product outcome · context carried forward</small>
            </div>
            <div className="immibot-copy-stack">
              <h2 id="outcome-title">The product became a continuity system.</h2>
              <p>
                The recommendation was only one moment. The stronger product behavior was what
                happened around it: a guest could explore, return to persisted history, create
                an account, and carry forward context instead of restarting the workflow.
              </p>
              <p>
                I also unified client state through Context API and useReducer, then added PostHog
                instrumentation for cohort and session analysis. The tradeoff was deliberate:
                invest in a stable workflow boundary before adding more intelligence to it.
              </p>
              <p className="immibot-boundary-note">
                <strong>Public-safe boundary.</strong> This page names shipped responsibilities,
                user-facing behavior, and listed technologies only; it does not publish applicant
                data, private prompts, proprietary rules, provider secrets, or customer information.
                Immibot is guidance/workflow software, not legal advice.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="immibot-footer">
        <Link href="/#work"><ArrowIcon direction="left" /> Back to selected systems</Link>
        <span>Immibot / RemoteHire · 2024</span>
        <Link href="/archive">Browse the archive <ArrowIcon /></Link>
      </footer>
    </main>
  );
}
