import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/shared/Glyphs";
import { ImmibotArchitecture } from "@/components/work/ImmibotArchitecture";
import "./immibot.css";

export const metadata: Metadata = {
  title: "Immibot | Full-Stack Applied AI Case Study",
  description:
    "Immibot case study: streamed official-source immigration search, persisted citations, guest-to-account continuity, and historically shipped Flowise Advisor and FSW workflows.",
  alternates: { canonical: "/work/immibot" },
  openGraph: {
    title: "Immibot | Full-Stack Applied AI Case Study",
    description:
      "Immibot case study: streamed official-source immigration search, persisted citations, guest-to-account continuity, and historically shipped Flowise Advisor and FSW workflows.",
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
      "Immibot: a full-stack immigration research product spanning Perplexity search and historically shipped Flowise workflows.",
    images: ["/assets/immibot.webp"],
  },
};

const currentWorkflow = [
  {
    index: "01",
    title: "Guest entry",
    body: "A visitor could start in one click. The guest session gave the workflow enough continuity to be useful before account creation.",
    signal: "low-friction start",
  },
  {
    index: "02",
    title: "Country selection",
    body: "The selected destination configures the prompt and the official government domains allowed for research.",
    signal: "Canada · USA · Australia",
  },
  {
    index: "03",
    title: "Official-source search",
    body: "Perplexity Sonar researches restricted government sources and returns inspectable links with the answer.",
    signal: "evidence beside answer",
  },
  {
    index: "04",
    title: "Stream + persist",
    body: "The response reaches the UI incrementally while messages and numbered citations are stored through Prisma.",
    signal: "responsive and durable",
  },
  {
    index: "05",
    title: "History + account continuity",
    body: "Persisted history moved from the guest session into the Clerk account so users did not have to restart the workflow after signup.",
    signal: "continuity after signup",
  },
];

const modes = ["Current · Perplexity", "Historical · Flowise", "FSW", "Guest → account"];
const stack = [
  "Next.js / TypeScript",
  "Perplexity Sonar / Flowise",
  "Prisma / PostgreSQL",
  "Clerk / Stripe credits",
  "PostHog",
  "Azure Blob / Vercel",
];

const productSystems = [
  ["01", "Admin model", "Programs, rules, provinces, users, professionals"],
  ["02", "Documents", "Azure-backed uploads, persistence, notifications"],
  ["03", "Consultation", "Dynamic Cal.com/live-chat CTAs and feedback"],
  ["04", "Instrumentation", "Chat, CTA, feedback and document events"],
] as const;

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
              An immigration research product that evolved across two shipped architectures:
              Flowise-based Advisor and eligibility workflows, followed by streamed Perplexity
              search grounded in official government sources.
            </p>
            <div className="immibot-hero-actions">
              <a href="https://immibot.vercel.app/" target="_blank" rel="noreferrer">
                Open live product <ArrowIcon />
              </a>
              <Link href="/archive">Archive / all work <ArrowIcon /></Link>
            </div>
            <div className="immibot-hero-meta" aria-label="Immibot project details">
              <div><span>Role</span><strong>Full-Stack Engineer</strong></div>
              <div><span>Company</span><strong>RemoteHire</strong></div>
              <div><span>Surface</span><strong>Applied AI · Full Stack · SaaS</strong></div>
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
                I owned the product layers around two generations of Immibot: the original
                Flowise Advisor/Search, tracking, orientation, and FSW workflows, and the later
                Perplexity-powered official-source search experience with persisted citations
                and guest-to-account continuity.
              </p>
              <p className="immibot-note">The system provides guidance and workflow software, not legal advice or a guarantee of eligibility.</p>
            </div>
          </div>
        </section>

        <section className="immibot-workflow immibot-section" aria-labelledby="workflow-title">
          <div className="immibot-section-label"><span>03</span><span>THE WALKTHROUGH</span></div>
          <div className="immibot-heading-row">
            <h2 id="workflow-title">The current product path.</h2>
            <p>From first question to an inspectable, saved answer.</p>
          </div>
          <ol className="immibot-workflow-list">
            {currentWorkflow.map((step) => (
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
          <div className="immibot-history-note">
            <span>HISTORICALLY SHIPPED · 2024</span>
            <h3>Advisor/Search selection → Flowise chatflow → follow-ups and progress tracking → orientation/FSW tools → persisted recommendation</h3>
            <p>These workflows were production-integrated before the provider migration. They are presented as shipped history, not as the current Perplexity runtime.</p>
          </div>
        </section>

        <section className="immibot-architecture-section immibot-section" aria-labelledby="architecture-title">
          <div className="immibot-section-label"><span>04</span><span>THE ENGINEERING</span></div>
          <div className="immibot-heading-row">
            <h2 id="architecture-title">Two architectures. One product history.</h2>
            <p>The migration changed the intelligence layer without erasing the systems shipped before it.</p>
          </div>
          <div className="immibot-architecture-card">
            <ImmibotArchitecture />
          </div>
          <div className="immibot-architecture-caption">
            <p>
              <strong>Why this mattered.</strong> The 2024 Flowise system used distinct Advisor,
              Search, follow-up, tracking, orientation, and FSW paths. The current system uses
              Perplexity Sonar for country-aware official-source research while retaining the
              surrounding session, persistence, account, and product layers.
            </p>
            <div className="immibot-mode-list" aria-label="Immibot workflow modes">
              {modes.map((mode) => <span key={mode}>{mode}</span>)}
            </div>
          </div>
          <div className="immibot-engineering-note">
            <h3>My ownership</h3>
            <p>
              I owned the majority of implementation across chat APIs, streaming UI, guest and
              authenticated sessions, Prisma persistence, administration, Clerk auth, document
              uploads, product analytics, payment credits, and deployment. A repository audit
              attributes about 88.5% of tracked source lines and 415 of 638 master-branch commits
              to my identities.
            </p>
            <p className="immibot-tech-line">Stack: {stack.join(" · ")}</p>
          </div>
        </section>

        <section className="immibot-stream-section immibot-section" aria-labelledby="systems-title">
          <div className="immibot-section-label"><span>05</span><span>BEYOND THE ANSWER STREAM</span></div>
          <div className="immibot-stream-grid">
            <div>
              <h2 id="systems-title">The product around the model.</h2>
              <p>
                Immibot was not only a chat endpoint. The surrounding product covered identity,
                administration, documents, consultation hand-offs, credits, and instrumentation.
              </p>
            </div>
            <div className="immibot-stream-card">
              {productSystems.map(([index, title, detail]) => (
                <div className="immibot-stream-row" key={index}>
                  <span>{index}</span>
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </div>
              ))}
              <div className="immibot-stream-result">Full-stack product ownership · not a wrapper</div>
            </div>
          </div>
        </section>

        <section className="immibot-outcome-section immibot-section" aria-labelledby="outcome-title">
          <div className="immibot-section-label"><span>06</span><span>THE OUTCOME</span></div>
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
                I instrumented chat, response, feedback, consultation CTA, document, and
                application events through PostHog while preserving conversation continuity
                across guest and authenticated sessions.
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
