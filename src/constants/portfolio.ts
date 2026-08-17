import { homeGridProjectIds } from "./archive-grid";
import { mainProjectIds, portfolioGridProjects } from "./project-grid";

export type ProjectCategory =
  | "AI"
  | "WORK"
  | "INTERN"
  | "OSS"
  | "FREELANCE"
  | "PERSONAL";

export type Project = Readonly<{
  id: string;
  index: string;
  name: string;
  company: string;
  year: string;
  role: string;
  category: ProjectCategory;
  tags: readonly string[];
  image: string;
  link: string | null;
  links?: readonly ProjectLink[];
  blurb: string;
  outcome?: string;
}>;

export type ProjectLink = Readonly<{
  label: string;
  href: string;
}>;

export type Experience = Readonly<{
  title: string;
  company: string;
  date: string;
  bullets: readonly string[];
}>;

export type OpenSourceContribution = Readonly<{
  project: string;
  org: string;
  summary: string;
  proof: string;
  links: readonly ProjectLink[];
}>;

export type NavLink = Readonly<{
  label: string;
  href: string;
  external?: boolean;
}>;

export const site = {
  name: "Vinayak Kumar - React / Next.js Software Engineer",
  url: "https://vinayak1337.me",
  description:
    "Product-minded React, Next.js, and TypeScript software engineer in New Delhi building frontend-heavy full-stack products, dashboards, CMS workflows, and AI features.",
};

export const person = {
  name: "Vinayak Kumar",
  roleShort: "Software Engineer / Full-stack",
  roleLong:
    "Software engineer working end-to-end across React, Next.js, TypeScript, product UX, APIs, analytics, auth, billing, deployment, and applied AI workflows.",
  location: "New Delhi, India",
  email: "vinayak111kumar@gmail.com",
  github: "Vinayak1337",
  githubUrl: "https://github.com/Vinayak1337",
  linkedin: "Vinayak1337",
  linkedinUrl: "https://linkedin.com/in/Vinayak1337",
  website: "vinayak1337.me",
  resume: "/Vinayak_Kumar_Resume.pdf",
  yearsShipping: 6,
  shippingSince: 2020,
};

export const seoKeywords = [
  "Vinayak Kumar",
  "Vinayak Kumar portfolio",
  "Vinayak1337",
  "Vinayak Relics",
  "React Software Engineer",
  "Next.js Software Engineer",
  "Frontend Software Engineer",
  "Full-stack Software Engineer",
  "Product Engineer",
  "Product Engineer India",
  "Frontend Product Engineer",
  "Software Engineer India",
  "Frontend Engineer India",
  "Full-stack Engineer India",
  "React Developer India",
  "Next.js Developer India",
  "TypeScript Developer India",
  "Software Engineering Intern India",
  "Full-stack Internship India",
  "React Next.js portfolio",
  "Relics Discord engineer",
  "Applied AI Full-stack Engineer",
  "Applied AI Engineer",
  "AI Engineer",
  "AI Fullstack Developer",
  "AI Full-Stack Engineer",
  "AI full-stack engineer India",
  "AI product engineer New Delhi",
  "LangChain RAG engineer",
  "agentic RAG developer",
  "RAG product engineer",
  "Next.js engineer",
  "React Native engineer",
  "TypeScript product engineer",
  "Node.js MongoDB engineer",
  "PostHog analytics engineer",
  "Shopify GraphQL developer",
];

export const navigationLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Archive", href: "/archive" },
  { label: "Resume", href: person.resume, external: true },
];

export const archiveNavigationLinks: NavLink[] = [
  { label: "Portfolio", href: "/" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: person.resume, external: true },
];

export const marqueeTech = [
  "React Native",
  "Node.js",
  "Prisma",
  "MongoDB",
  "LangChain",
  "Flowise",
  "Shopify GraphQL",
  "PostHog",
];

export const marqueeDomains = [
  "RAG workflows",
  "CMS editing",
  "Commerce",
  "Mobile learning",
  "Analytics",
  "Open source",
];

export const marqueeArchiveTech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "React Native",
  "LangChain",
  "MongoDB",
  "PostHog",
];

export const homeHero = {
  eyebrow: "NEW DELHI · IST",
  titleTokens: [
    { text: "Vinayak Kumar," },
    { text: "software engineer", emphasis: true },
    { text: "building software since 2020." },
  ],
  summary:
    "I build frontend-heavy full-stack products with React, Next.js, and TypeScript: dashboards, CMS workflows, commerce and ed-tech surfaces, APIs, analytics, and applied AI features where they improve the workflow.",
  signals: [
    "React / Next.js / TypeScript",
    "Product systems / applied AI",
  ],
};

export const statement = {
  headline: "I ship product systems\nthat move from\nprototype to production.",
  caption: "REACT · NEXT.JS · TYPESCRIPT · NODE · RAG · ANALYTICS",
};

export const chapters = [
  {
    number: "01",
    label: "THE PREMISE",
    headline: "Make complex work feel obvious.",
    emphasis: "complex work feel obvious.",
    copy: [
      "Dashboards, CMS workflows, commerce, mobile learning, and AI-assisted tools are the visible layer.",
      "Behind them: state, APIs, auth, persistence, analytics, and deployment that keep the next action clear.",
    ],
  },
  {
    number: "02",
    label: "THE METHOD",
    headline: "Own the whole loop.",
    emphasis: "whole loop.",
    copy: [
      "Work across interface, app state, permissions, payments, retrieval, and the edge cases between them.",
      "Guest history merges into an account. Admins edit pages in place. Teachers see progress by student or cohort.",
    ],
  },
  {
    number: "03",
    label: "THE PROOF",
    headline: "Ship proof, not promises.",
    emphasis: "proof, not promises.",
    copy: [
      "Immibot moved from static intake to an adaptive retrieval workflow with eligibility scoring, guest sessions, and persisted history.",
      "Wonderhood Lighthouse performance moved 35→90+ and Ionic→React Native. BPIT gained inline CMS workflows.",
    ],
  },
];

export const about = {
  headline: "Software engineer. Full-stack product systems with applied AI depth.",
  paragraphs: [
    "React-first product engineer in New Delhi, pursuing B.Tech CSE at GGSIPU.",
    "In 2025 I led a three-person BPIT Tech Team build from scratch with inline content editing, analytics, and Vercel previews.",
    "RemoteHire / Immibot: retrieval, adaptive questions, eligibility scoring, guest sessions, persisted history, and credit merge.",
    "Wonderhood: Shopify GraphQL commerce, an Ionic→React Native migration, and teacher reporting by cohort and student.",
    "Open source: Checkstyle, Express codemod, and Jenkins plugins.",
  ],
};

export const highlights = [
  { stat: "3+", label: "professional years" },
  { stat: "2020", label: "programming since" },
  { stat: "Relics", label: "leadership + bot builds" },
  { stat: "2025", label: "led BPIT site build (team of 3)" },
];

export const experience: Experience[] = [
  {
    title: "Full-Stack Engineer",
    company: "RemoteHire",
    date: "Feb 2024 - Nov 2024",
    bullets: [
      "Re-architected Immibot, an AI immigration assistant, with modular country and domain adapters.",
      "Launched one-click guest sessions with persisted history and credit merge so trial users could move into accounts without losing context.",
      "Built multi-mode chat and an agentic RAG pipeline with LangChain and Flowise for search, advice, document validation, and eligibility scoring.",
      "Unified app state through Context API and useReducer, then shipped PostHog plus session/video analytics for cohort analysis.",
      "Integrated Next.js, TypeScript, shadcn/ui, Tailwind, Clerk, Stripe, Prisma, Vercel, and PWA support.",
    ],
  },
  {
    title: "Software Developer I",
    company: "Wonderhood",
    date: "Nov 2021 - Feb 2024",
    bullets: [
      "Owned web and mobile initiatives across React, Next.js, React Native, Ionic, and Expo, growing scope from individual contributor to SD-1.",
      "Rebuilt the e-commerce and content site with Shopify GraphQL, SDK flows, blogs, articles, courses, toys, and cart functionality.",
      "Migrated the platform to Next.js using ISR, SSG, SSR, and CSR, improving Lighthouse performance from 35 to 90+.",
      "Led the Ionic to React Native migration with child-centric UI, custom video players, game players, progress capture, and resume states.",
      "Converted MyLearning into a teacher dashboard with React, Vite, TypeScript, analytics, cohort filtering, and per-student reporting.",
    ],
  },
  {
    title: "MERN Stack Intern",
    company: "Possibillion Technologies",
    date: "Sep 2021 - Nov 2021",
    bullets: [
      "Led 4 interns and shipped 3 MVPs in 3 months across tourism, social, and video slideshow products.",
      "Built landing pages, admin panels, and REST backends with React, Express, MongoDB, Socket.io, Swagger, S3, and FFmpeg.",
    ],
  },
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: "checkstyle/checkstyle",
    org: "Java static-analysis tool · 8k+ stars",
    summary:
      "Specified all default properties for SuppressionCommentFilter, and fixed LineLength violation-comment placement in Javadoc.",
    proof: "Static-analysis defaults and Javadoc linting",
    links: [
      {
        label: "PR #20455",
        href: "https://github.com/checkstyle/checkstyle/pull/20455",
      },
      {
        label: "PR #19832",
        href: "https://github.com/checkstyle/checkstyle/pull/19832",
      },
    ],
  },
  {
    project: "expressjs/codemod",
    org: "Official Express org · v5 migration tooling",
    summary:
      "Updated package.json handling in the Express v5 migration recipe so framework upgrades preserve package metadata correctly.",
    proof: "Express v5 migration recipe",
    links: [
      {
        label: "PR #143",
        href: "https://github.com/expressjs/codemod/pull/143",
      },
    ],
  },
  {
    project: "jenkinsci/azure-ad-plugin",
    org: "Jenkins plugin · authentication workflow",
    summary:
      "Fixed sign-in when the Referer header is missing in the Jenkins Azure AD authentication flow.",
    proof: "Missing-Referer sign-in fix",
    links: [
      {
        label: "PR #803",
        href: "https://github.com/jenkinsci/azure-ad-plugin/pull/803",
      },
    ],
  },
];

export const projectCatalog: Project[] = [
  {
    id: "immibot",
    index: "01",
    name: "Immibot",
    company: "RemoteHire",
    year: "2024",
    role: "Full-Stack Engineer",
    category: "WORK",
    tags: [
      "Next.js",
      "TypeScript",
      "LangChain",
      "Flowise",
      "Prisma",
      "Stripe",
      "Clerk",
    ],
    image: "/assets/immibot.webp",
    link: "https://nextjsapp-immibot.vercel.app",
    blurb:
      "AI immigration assistant with modular country adapters, agentic RAG, adaptive questioning, and weighted eligibility scoring.",
    outcome:
      "An AI immigration advisor that helps applicants understand eligibility, compare pathways, and turn vague questions into structured next steps.",
  },
  {
    id: "autism-detection",
    index: "02",
    name: "Autism Detection App",
    company: "Personal",
    year: "2024",
    role: "AI Product Engineer",
    category: "AI",
    tags: ["Next.js", "TypeScript", "TensorFlow.js", "BlazeFace", "Clerk"],
    image: "/assets/autism-detection.svg",
    link: "https://github.com/Vinayak1337/autism-detector",
    blurb:
      "Privacy-first browser screening prototype with local eye tracking, face detection, metric analysis, and heuristic risk bands.",
    outcome:
      "A browser-based screening prototype exploring how visual attention and behavior signals could support early autism risk assessment.",
  },
  {
    id: "storefront",
    index: "03",
    name: "StoreFront",
    company: "Personal",
    year: "2024",
    role: "Product Engineer",
    category: "PERSONAL",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Thermal Print"],
    image: "/assets/storefront-dashboard.webp",
    link: "https://github.com/Vinayak1337/StoreFrontNextjs",
    blurb:
      "Billing and inventory app with item organization, order creation, analytics, secure sessions, and Bluetooth thermal printing.",
    outcome:
      "A shop operations system that helps small retailers manage orders, inventory, analytics, and receipts from one dashboard.",
  },
  {
    id: "bpit",
    index: "04",
    name: "BPIT Website",
    company: "BPIT Tech Team",
    year: "2025",
    role: "Tech Lead / Institutional Project",
    category: "PERSONAL",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "PostHog"],
    image: "/assets/bpit.webp",
    link: "https://bpit-site-redesign.vercel.app/",
    blurb:
      "Official college tech team site built from scratch with an inline click-to-edit CMS for live content updates.",
    outcome:
      "A 2025 institutional project where I led a 3-person build for department publishing, live-page content editing, analytics, and Vercel previews.",
  },
  {
    id: "training-placement",
    index: "05",
    name: "T&P Dashboard",
    company: "BPIT Demo",
    year: "2025",
    role: "Full-stack Engineer",
    category: "PERSONAL",
    tags: ["Next.js", "TypeScript", "Prisma", "Neon", "NextAuth"],
    image: "/assets/training-placement-dashboard.webp",
    link: "https://github.com/Vinayak1337/training-and-placement-bpit",
    blurb:
      "Training and placement dashboard with coordinator and student flows, role-based access, placement drives, applications, and resume uploads.",
    outcome:
      "A demo placement operations system that shows student records, drive management, application status, and placement analytics in one dashboard.",
  },
  {
    id: "wonderlearn",
    index: "06",
    name: "wonderLearn",
    company: "Wonderhood",
    year: "2023",
    role: "SD-1",
    category: "WORK",
    tags: ["Next.js", "Tailwind", "Shopify", "GraphQL", "TypeScript"],
    image: "/assets/wonderlearn.webp",
    link: "https://thewonderlearn.com/",
    blurb:
      "Ed-tech hub with blogs, school resources, and a Shopify GraphQL-backed toy store, migrated from a static React build to Next.js with ISR and SSG.",
    outcome:
      "An ed-tech commerce site that helps parents discover learning programs, toys, articles, and app-led activities for young children.",
  },
  {
    id: "wonderlearn-app",
    index: "07",
    name: "wonderLearn App",
    company: "Wonderhood",
    year: "2023",
    role: "SD-1",
    category: "WORK",
    tags: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Redux Saga"],
    image: "/assets/wonderlearn-app.webp",
    link: "https://wonderlearn.app.link/app",
    blurb:
      "Mobile app for kids aged 2-6 with games, videos, custom players, and resume states after an Ionic to React Native rewrite.",
    outcome:
      "A kids' learning app for guided videos, games, and activities with parent-safe navigation and progress continuity.",
  },
  {
    id: "mylearning",
    index: "08",
    name: "MyLearning",
    company: "Wonderhood",
    year: "2023",
    role: "SD-1",
    category: "WORK",
    tags: ["React", "Vite", "TypeScript", "Redux Toolkit", "Tailwind"],
    image: "/assets/mylearning.webp",
    link: "https://mylearning.thewonderlearn.com/",
    blurb:
      "Teacher dashboard for classroom rosters, per-student video watch percentage, game scores, and module completion.",
    outcome:
      "A classroom learning dashboard that helps teachers track student activity, course progress, assessment reports, and learning outcomes.",
  },
  {
    id: "wonderhood",
    index: "09",
    name: "Wonderhood",
    company: "Wonderhood",
    year: "2022",
    role: "SD-1",
    category: "WORK",
    tags: ["React", "SASS", "Shopify", "Redux Toolkit", "Redux Saga"],
    image: "/assets/wonderhood.webp",
    link: "https://wonderhood.in/",
    blurb:
      "Parent-facing landing page and education journey surface for the wonderLearn ecosystem.",
    outcome:
      "A parent-facing education platform that explains the learning journey and converts interest into app downloads, plans, and purchases.",
  },
  {
    id: "dating-landing",
    index: "10",
    name: "Dating App - Landing",
    company: "Possibillion",
    year: "2021",
    role: "MERN Stack Intern",
    category: "INTERN",
    tags: ["React", "SASS", "TypeScript"],
    image: "/assets/dating-landing.webp",
    link: "https://dating-app-website.netlify.app/",
    blurb:
      "Landing page for coffee-shop partners and app downloads, shipped during the Possibillion internship.",
  },
  {
    id: "dating-admin",
    index: "11",
    name: "Dating App - Admin",
    company: "Possibillion",
    year: "2021",
    role: "MERN Stack Intern",
    category: "INTERN",
    tags: ["React", "SASS", "Redux"],
    image: "/assets/dating-admin.webp",
    link: "https://dating-app-admin-site.netlify.app",
    blurb:
      "Admin panel for managing coffee-shop partners, requests, and app users.",
  },
  {
    id: "dating-backend",
    index: "12",
    name: "Dating App - Backend",
    company: "Possibillion",
    year: "2021",
    role: "MERN Stack Intern",
    category: "INTERN",
    tags: ["Node", "Express", "MongoDB", "Socket.io", "Swagger"],
    image: "/assets/dating-backend.webp",
    link: "https://dating-app-server-gdjw.onrender.com/docs",
    blurb:
      "Node backend plus Socket.io for realtime social features, documented with Swagger.",
  },
  {
    id: "levtours-landing",
    index: "13",
    name: "LevTours - Landing",
    company: "Possibillion",
    year: "2021",
    role: "MERN Stack Intern",
    category: "INTERN",
    tags: ["React", "SASS", "Redux", "TypeScript"],
    image: "/assets/levtours-landing.webp",
    link: "https://levtours.netlify.app/",
    blurb:
      "Tourism platform landing page for rooms, travel blogs, and curated experiences.",
  },
  {
    id: "levtours-admin",
    index: "14",
    name: "LevTours - Admin",
    company: "Possibillion",
    year: "2021",
    role: "MERN Stack Intern",
    category: "INTERN",
    tags: ["React", "SASS", "Redux"],
    image: "/assets/levtours-admin.webp",
    link: "https://levtours-admin-panel.netlify.app",
    blurb:
      "Admin dashboard for bookings, blogs, coupons, and bulk imports.",
  },
  {
    id: "levtours-backend",
    index: "15",
    name: "LevTours - Backend",
    company: "Possibillion",
    year: "2021",
    role: "MERN Stack Intern",
    category: "INTERN",
    tags: ["Node", "Express", "MongoDB", "Swagger"],
    image: "/assets/levtours-backend.webp",
    link: "https://levtours-server.onrender.com/docs",
    blurb: "Node backend for the LevTours booking and content ecosystem.",
  },
  {
    id: "firework-fe",
    index: "16",
    name: "Firework - Frontend",
    company: "Possibillion",
    year: "2021",
    role: "MERN Stack Intern",
    category: "INTERN",
    tags: ["React", "SASS", "Redux"],
    image: "/assets/firework-frontend.webp",
    link: "https://firework-website.netlify.app/",
    blurb:
      "Frontend for uploading images and videos with captions plus realtime upload progress.",
  },
  {
    id: "firework-be",
    index: "17",
    name: "Firework - Backend",
    company: "Possibillion",
    year: "2021",
    role: "MERN Stack Intern",
    category: "INTERN",
    tags: ["Node", "Express", "MongoDB", "FFmpeg", "S3"],
    image: "/assets/firework-backend.webp",
    link: null,
    blurb:
      "Node backend that overlays captions with FFmpeg and stores output through MongoDB and S3.",
  },
  {
    id: "relics-audit",
    index: "18",
    name: "Relics Audit",
    company: "Open Source",
    year: "2020",
    role: "Maintainer",
    category: "OSS",
    tags: ["Discord.js", "Node", "MongoDB"],
    image: "/assets/relics-audit.webp",
    link: "https://github.com/Vinayak1337/RelicsAudit",
    blurb:
      "Discord bot for real-time club monitoring, verification, and ladder tracking for the Relics organization.",
    outcome:
      "A Discord operations system that helps gaming communities monitor clubs, rankings, rewards, and player activity at scale.",
  },
  {
    id: "relics-general",
    index: "19",
    name: "Relics General",
    company: "Open Source",
    year: "2020",
    role: "Maintainer",
    category: "OSS",
    tags: ["Discord.js", "Node", "MongoDB"],
    image: "/assets/relics-general.webp",
    link: "https://github.com/Vinayak1337/relics-general-bot",
    blurb:
      "Modmail, role management, cross-server announcements, and utility commands for Discord communities.",
    outcome:
      "A community management bot that helps Discord teams handle support, announcements, roles, moderation, and day-to-day operations.",
  },
  {
    id: "relics-banhammer",
    index: "20",
    name: "Relics Ban Hammer",
    company: "Open Source",
    year: "2020",
    role: "Maintainer",
    category: "OSS",
    tags: ["Discord.js", "Node"],
    image: "/assets/relics-banhammer.webp",
    link: "https://github.com/Vinayak1337/RelicsBanHammer",
    blurb: "Moderation bot for chain bans and unbans across multiple servers.",
  },
  {
    id: "tourney",
    index: "21",
    name: "Tourney Ticketeer",
    company: "Open Source",
    year: "2020",
    role: "Maintainer",
    category: "OSS",
    tags: ["Discord.js", "Node"],
    image: "/assets/tourney.webp",
    link: "https://github.com/Vinayak1337/TourneyTicketeer/",
    blurb:
      "Discord bot for tournament payment ticketing, payment methods, logs, and role assignment.",
  },
  {
    id: "pdfy",
    index: "22",
    name: "Pdfy",
    company: "Freelance",
    year: "2023",
    role: "Freelance",
    category: "FREELANCE",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/assets/pdfsplitter.webp",
    link: "https://pdfy.vercel.app/",
    blurb:
      "Upload a PDF, view pages, edit metadata on a split-screen interface, and export CSV or modified PDFs.",
  },
  {
    id: "pdfsplit",
    index: "23",
    name: "PDF Splitter",
    company: "Freelance",
    year: "2022",
    role: "Freelance",
    category: "FREELANCE",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    image: "/assets/pdfsplitter.webp",
    link: "https://pdf-splitter.vercel.app/",
    blurb:
      "Tool for hand-picking pages or range-selecting pages and downloading split PDFs.",
  },
  {
    id: "cadillacs",
    index: "24",
    name: "Cadillacs Backend",
    company: "Freelance",
    year: "2022",
    role: "Freelance",
    category: "FREELANCE",
    tags: ["Node", "Express", "MongoDB", "Swagger", "JWT"],
    image: "/assets/cadillacs.webp",
    link: "https://cadillacs-server.onrender.com/docs/",
    blurb:
      "REST APIs with admin and community routes, JWT auth, and Swagger documentation.",
  },
  {
    id: "face-fe",
    index: "25",
    name: "Face Recognition - Frontend",
    company: "Personal",
    year: "2021",
    role: "Personal",
    category: "PERSONAL",
    tags: ["React", "SASS", "Redux"],
    image: "/assets/face-frontend.webp",
    link: "https://face-recognition-ht5h.netlify.app/",
    blurb:
      "Upload images, detect faces, and track image uploads through a dashboard.",
  },
  {
    id: "face-be",
    index: "26",
    name: "Face Recognition - Backend",
    company: "Personal",
    year: "2021",
    role: "Personal",
    category: "PERSONAL",
    tags: ["Node", "Express", "MongoDB"],
    image: "/assets/face-backend.webp",
    link: null,
    blurb: "Auth, image storage, and Clarifai API integration.",
  },
  {
    id: "picmash-fe",
    index: "27",
    name: "Picmash - Frontend",
    company: "Personal",
    year: "2020",
    role: "Personal",
    category: "PERSONAL",
    tags: ["React", "CSS", "JavaScript"],
    image: "/assets/picmash-frontend.webp",
    link: "https://picmash-app.netlify.app/",
    blurb: "Social media prototype built during college.",
  },
  {
    id: "picmash-be",
    index: "28",
    name: "Picmash - Backend",
    company: "Personal",
    year: "2020",
    role: "Personal",
    category: "PERSONAL",
    tags: ["Node", "Express", "MongoDB"],
    image: "/assets/picmash-backend.webp",
    link: null,
    blurb: "Auth, posts, and image storage for a social media prototype.",
  },
  {
    id: "crwn",
    index: "29",
    name: "Crwn Clothing",
    company: "Personal",
    year: "2021",
    role: "Personal",
    category: "PERSONAL",
    tags: ["React", "Redux", "Firebase", "Stripe", "GraphQL"],
    image: "/assets/crwn.webp",
    link: "https://crwn-clothing-pwa.netlify.app/",
    blurb: "E-commerce PWA with Google auth, cart, and Stripe checkout.",
  },
  {
    id: "robo",
    index: "30",
    name: "Monster Rolodex",
    company: "Personal",
    year: "2020",
    role: "Personal",
    category: "PERSONAL",
    tags: ["React", "CSS", "TypeScript"],
    image: "/assets/robo.webp",
    link: "https://monsters-rolodex-webapp.netlify.app/",
    blurb: "Early React project with a filterable directory interface.",
  },
];

export const projects: Project[] = portfolioGridProjects;

export const featuredProjectCategories: ProjectCategory[] = [
  "AI",
  "WORK",
  "PERSONAL",
  "FREELANCE",
  "OSS",
  "INTERN",
];

export const railProjects = mainProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => Boolean(project));

export const ledgerProjects = homeGridProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => Boolean(project));

export const aboutWedges = ["web", "mobile", "ai", "data"] as const;

export type AboutWedge = (typeof aboutWedges)[number];

export const aboutParagraphs = about.paragraphs.map((paragraph, index) => ({
  number: String(index + 1).padStart(2, "0"),
  label: ["ORIGIN / NOW", "LEAD / PROOF", "RECENT", "BEFORE", "OPEN SOURCE"][index],
  text: paragraph,
  wedge: aboutWedges[index % aboutWedges.length],
}));

export const skills = {
  Languages: ["TypeScript", "JavaScript", "HTML", "CSS", "SASS", "Java", "C++"],
  Frontend: [
    "React",
    "Next.js",
    "React Native",
    "Tailwind",
    "shadcn/ui",
    "Redux",
    "Ionic",
    "Expo",
  ],
  Backend: [
    "Node.js",
    "Express",
    "LangChain",
    "Flowise",
    "Prisma",
    "MongoDB",
    "Socket.io",
    "FFmpeg",
    "REST",
    "GraphQL",
  ],
  Cloud: [
    "Vercel",
    "AWS S3",
    "AWS Amplify",
    "Firebase",
    "Stripe",
    "Clerk",
    "JWT",
    "Git",
  ],
  Analytics: ["PostHog", "Mixpanel", "Chart.js"],
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: person.name,
      url: site.url,
      image: `${site.url}/opengraph-image`,
      jobTitle: person.roleShort,
      email: `mailto:${person.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
      sameAs: [person.githubUrl, person.linkedinUrl, site.url],
      knowsAbout: seoKeywords,
      alumniOf: ["Ambedkar Institute of Technology"],
      affiliation: [
        {
          "@type": "CollegeOrUniversity",
          name: "Guru Gobind Singh Indraprastha University",
          description:
            "Current B.Tech in Computer Science & Engineering program, 2024-2027",
        },
        {
          "@type": "Organization",
          name: "Vinayak Relics",
          url: person.githubUrl,
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      description: site.description,
      publisher: {
        "@id": `${site.url}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      name: "Vinayak Kumar Software Engineer / Full-stack Portfolio",
      url: site.url,
      description: site.description,
      mainEntity: {
        "@id": `${site.url}/#person`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: site.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Work",
          item: `${site.url}/#work`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About",
          item: `${site.url}/#about`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contact",
          item: `${site.url}/#contact`,
        },
      ],
    },
    ...railProjects.slice(0, 6).map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
      creator: {
        "@id": `${site.url}/#person`,
      },
      description: project.blurb,
      url: project.link ?? site.url,
      image: `${site.url}${project.image}`,
      keywords: project.tags.join(", "),
      dateCreated: project.year,
    })),
  ],
} as const;
