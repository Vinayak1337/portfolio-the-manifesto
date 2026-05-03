---
title: Portfolio Content and UI Audit
owner: Vinayak Kumar
positioning: AI Full-Stack Engineer
review_lenses:
  - senior software engineer
  - product designer
  - recruiter / HR screening behavior
last_reviewed: 2026-04-29
---

# Content and UI Audit

This audit reviews the live manifesto portfolio as a senior-level AI full-stack portfolio for someone with 3+ years of professional experience. The goal is to remove filler, reduce credibility gaps, and make the page easier for recruiters and engineering managers to trust quickly.

## Implementation Status

2026-05-03: The first review pass addressed the highest-priority findings: the pinned manifesto thesis was rewritten around prototype-to-production AI product delivery, the professional-experience metric now says 3+ years, Autism Detection App and StoreFront were added to the featured homepage work, and GGSIPU is represented as current education instead of alumni status.

## Highest-Priority Content Issues

### 1. The manifesto statement is too abstract

Current section:

> Most AI products fail at the seams between model, product, and data.
> I work on the seams.

Issue: This sounds editorial, but not specific enough for a senior portfolio. It also repeats "seams", which weakens the statement. A recruiter or hiring manager should understand the practical value immediately: AI product engineering, RAG quality, UX, analytics, reliability, and shipping.

Better direction:

- "I ship AI products that survive real users, messy data, and business constraints."
- "I build AI products where retrieval, UX, analytics, and engineering discipline meet."
- "I turn AI prototypes into product systems people can use, measure, and trust."
- "I build the product layer around AI: retrieval, workflows, interfaces, payments, auth, and analytics."

Recommendation: Replace the second big-text section with a sharper proof-led thesis, not a vague manifesto line.

### 2. "5y production engineering" creates a credibility gap

Current stat:

> 5y production engineering

Issue: The resume supports 3+ years of professional software experience, with earlier building/projects before that. Saying "5y production engineering" can look inflated if a recruiter compares it against the job dates.

Better direction:

- "3+ years professional"
- "Since 2021 shipping software"
- "2021-present building products"
- "3+ years professional, 5 years building"

Recommendation: Keep both truths, but label them precisely.

### 3. The page underuses the strongest AI proof

The resume mentions Autism Detection App and StoreFront, but the site does not surface them in the project list. These are stronger for the current "AI full-stack engineer" positioning than many early 2020 personal projects.

Issue: The portfolio claims AI specialization, but the visible work rail is BPIT, Immibot, wonderLearn, wonderLearn App, MyLearning, and wonderHood. Only Immibot is clearly AI. BPIT is impressive product engineering, but the AI claim needs more proof density.

Recommendation:

- Add Autism Detection App as a featured AI case study if it is presentable.
- Add StoreFront as a product engineering case study if it is presentable.
- Move older tutorial-style personal projects into an archive, not the main work narrative.

### 4. The work ledger is too broad for a senior portfolio

The ledger lists 27 projects, including early personal projects like Monster Rolodex, Picmash, Face Recognition, Crwn Clothing, and split frontend/backend entries.

Issue: A long list can accidentally lower perceived seniority. Recruiters scan for signal. Too many small or tutorial-like projects make the portfolio feel junior even if the top work is strong.

Recommendation:

- Keep the main ledger to 8-12 strong entries.
- Move the rest to "Archive" or "Early work".
- Combine frontend/backend pairs into one product entry unless the backend is independently impressive.
- Add "case study depth" for 3 flagship projects instead of showing every artifact equally.

### 5. The about section is factual but not senior enough

Current heading:

> Full-stack by training. AI-focused by 2024.

Issue: "by training" feels weak. It undersells actual professional work. The about copy also misses the current B.Tech context the user explicitly wants included.

Better direction:

- "AI full-stack engineer with 3+ years shipping web, mobile, and RAG products."
- "I build the product layer around AI systems: retrieval, interfaces, workflow logic, analytics, auth, payments, and deployment."
- Include: "Currently pursuing B.Tech in CSE at GGSIPU while contributing to BPIT Tech Team."

Recommendation: Rewrite about as a concise credibility block, not a biography paragraph stack.

### 6. Some bullets use generic verbs

Generic or low-signal phrases:

- "Developed reusable schemas and modular components..."
- "Integrated Next.js, TypeScript, shadcn/ui..."
- "Parent-facing landing page..."
- "Early React project..."
- "Social media prototype built during college."

Issue: These are accurate but low-value. They state implementation, not impact or complexity.

Recommendation: Use one of four patterns per bullet:

- Problem -> action -> measurable result
- Constraint -> decision -> tradeoff
- System component -> responsibility -> outcome
- User workflow -> before/after

## UI and Storytelling Issues

### 1. The second section is a big text-only pause

The large pinned statement is visually bold, but it does not earn its scroll time. It delays the proof without adding enough content.

Recommendation: Either make it a sharper one-line thesis or replace it with a "How I ship AI products" section showing 4 capabilities:

- retrieval and RAG quality
- product UX and state
- auth, billing, deployment
- analytics and iteration

### 2. The scroll has dead-air moments

The live preview shows blank space during transitions, especially moving from manifesto statement into work and into the dark/about region.

Issue: Editorial whitespace is fine, but long empty states feel like broken loading during a hiring review.

Recommendation: Reduce pinned section heights or add visible transition anchors so each scroll movement reveals new information.

### 3. The experience section can enter clipped under the fixed nav

During live scroll, an experience title appeared clipped at the top of the viewport. This makes the page feel less controlled.

Recommendation: Add scroll-margin and stronger top padding for anchor/section boundaries, or tune sticky/pinned section exits.

### 4. The hero is visually strong but slightly under-specific

Current hero:

> Vinayak Kumar, AI full-stack engineer building since 2021.

Issue: Good SEO phrase, but "building since 2021" is softer than the value proposition. It says duration, not senior-level strength.

Better direction:

- "Vinayak Kumar, AI full-stack engineer shipping RAG, web, and mobile products."
- "Vinayak Kumar, AI full-stack engineer for product teams turning prototypes into systems."

Recommendation: Keep "AI full-stack engineer" in the H1, but make the supporting line carry the product promise.

### 5. Project cards show screenshots but not enough outcomes

The horizontal work rail looks good, but the cards mostly show tech tags. Senior viewers need outcomes, ownership, and constraints.

Recommendation: Add one compact outcome line per rail card:

- BPIT: "Replaced admin-panel editing with inline CMS workflows."
- Immibot: "Cut onboarding friction by roughly 40% with guest sessions and credit merge."
- wonderLearn: "Moved performance from 20-40 to 90+ Lighthouse."

## SEO and Hiring Signal Issues

### 1. SEO metadata is strong, but visible content needs matching density

The metadata says AI full-stack, RAG, LangChain, Next.js, React Native, and product analytics. The visible page should repeat those naturally through case-study proof, not keyword stuffing.

Recommendation: Add visible proof phrases near top and project sections:

- "agentic RAG"
- "eligibility scoring"
- "adaptive questioning"
- "cited retrieval"
- "PostHog session analytics"
- "Next.js App Router"
- "React Native migration"

### 2. JSON-LD alumni status may be premature

The structured data currently lists GGSIPU under `alumniOf`, but the user is currently pursuing B.Tech from 2024-2027.

Recommendation: Avoid implying graduation from GGSIPU until complete. Use visible education copy instead, or model it as current education if adding richer schema later.

## Recommended Section Overhaul

Recommended structure:

1. Hero: name, AI full-stack position, one concrete product promise.
2. Proof strip: 3+ years professional, RAG/product systems, React Native/Next.js, measurable outcomes.
3. Thesis: "I ship AI products that..." with a sharper phrase chosen later.
4. Capability grid: RAG, product UX, full-stack infrastructure, analytics.
5. Featured work: 3 case studies with problem, role, stack, outcome.
6. Work archive: compact, filtered list of older/supporting projects.
7. About: current B.Tech, BPIT Tech Team, professional trajectory.
8. Experience: resume-grade bullets, no filler.
9. Contact.

## Cursor Fix Applied

The custom cursor was updated so the ring stays frosted/liquid-glass on both cream and black surfaces. The dot/ring now switch light/dark treatment based on the surface underneath instead of becoming pitch black on light backgrounds. Hover targets include anchors, buttons, role buttons, cards, work rows, rail cards, and experience items.

## Verification

- Live preview reviewed at `http://127.0.0.1:3000`.
- `npm run lint` passed.
- `npm run build` passed.
- Prior Lighthouse production audit after fixes: Performance 97, Accessibility 100, Best Practices 100, SEO 100.
