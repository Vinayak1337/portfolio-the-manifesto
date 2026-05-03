export type ProjectCategory =
  | "AI"
  | "WORK"
  | "INTERN"
  | "OSS"
  | "FREELANCE"
  | "PERSONAL";

export type Project = {
  id: string;
  index: string;
  name: string;
  company: string;
  year: string;
  role: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  link: string | null;
  blurb: string;
  outcome?: string;
};

export type Experience = {
  title: string;
  company: string;
  date: string;
  bullets: string[];
};

export const site = {
  name: "Vinayak Kumar - The Manifesto",
  url: "https://vinayak1337.me",
  description:
    "Vinayak Kumar is an AI full-stack engineer in New Delhi who turns AI prototypes into product systems with RAG, workflow UX, analytics, auth, billing, and deployment.",
};

export const person = {
  name: "Vinayak Kumar",
  roleShort: "AI Full-Stack Engineer",
  roleLong:
    "AI full-stack engineer working end-to-end on retrieval pipelines, workflow UX, analytics, auth, billing, deployment, and the web and mobile surfaces around them.",
  location: "New Delhi, India",
  email: "vinayak111kumar@gmail.com",
  github: "Vinayak1337",
  githubUrl: "https://github.com/Vinayak1337",
  linkedin: "Vinayak1337",
  linkedinUrl: "https://linkedin.com/in/Vinayak1337",
  website: "vinayak1337.me",
  resume: "/Vinayak_Kumar_Resume.pdf",
  yearsShipping: 5,
  shippingSince: 2021,
};

export const seoKeywords = [
  "Vinayak Kumar AI full-stack engineer",
  "AI full-stack engineer India",
  "AI product engineer New Delhi",
  "LangChain RAG engineer",
  "agentic RAG developer",
  "Next.js engineer",
  "React Native engineer",
  "TypeScript product engineer",
  "Node.js MongoDB engineer",
  "PostHog analytics engineer",
  "Shopify GraphQL developer",
];

export const marqueeTech = [
  "Next.js",
  "React Native",
  "LangChain",
  "RAG",
  "Shopify",
  "MongoDB",
  "TypeScript",
  "PostHog",
];

export const chapters = [
  {
    number: "01",
    label: "The Premise",
    headline: "Three-plus professional years across AI products, ed-tech, commerce, and internal tools.",
    emphasis: "AI products",
    copy: [
      "The throughline is product engineering: RAG flows users can inspect, dashboards teams can act on, mobile surfaces children can navigate, and CMS workflows non-technical admins can operate.",
      "What I care about: retrieval with visible evidence, state that does not collapse under product complexity, analytics that explain friction, and code teammates can read months later.",
    ],
  },
  {
    number: "02",
    label: "The Method",
    headline: "Full-stack because AI products need more than a model.",
    emphasis: "more than a model",
    copy: [
      "I build the product layer around AI: retrieval, adaptive workflows, app state, permissions, payments, credits, analytics events, deployment paths, and the interfaces that make the system usable.",
      "Next.js App Router, React Native, Node, Prisma, MongoDB, Postgres, LangChain, and Flowise are tools. The discipline is shipping small, measuring friction, and making the next iteration obvious.",
    ],
  },
  {
    number: "03",
    label: "The Outcome",
    headline: "Outcomes that hold up.",
    emphasis: "hold up.",
    copy: [
      "Immibot replaced a static intake with an agentic RAG flow — country-specific adapters, eligibility scoring, guest sessions that cut onboarding friction by about 40%.",
      "BPIT moved from a separate admin panel to inline click-to-edit on rendered pages, persisted via MongoDB. wonderLearn rebuilt its commerce and learning surfaces on Next.js + Shopify GraphQL.",
    ],
  },
];

export const about = {
  headline: "AI full-stack engineer. Product systems, not demos.",
  paragraphs: [
    "I'm an AI full-stack engineer in New Delhi with 3+ years of professional product engineering experience since 2021 across Next.js, React Native, Node, LangChain, and analytics-heavy systems.",
    "Currently pursuing B.Tech in Computer Science & Engineering at GGSIPU while contributing to BPIT Tech Team, where I lead the college-site rebuild on Next.js App Router with inline click-to-edit CMS workflows.",
    "At RemoteHire, I re-architected Immibot: an AI immigration assistant with LangChain, Flowise, agentic RAG, weighted eligibility scoring, Clerk, Stripe, and PostHog session analytics.",
    "At wonderHood, I spent 2.5 years across React, Next.js, and React Native: Shopify GraphQL commerce, a kids' learning app migrated from Ionic to React Native, and a teacher dashboard with cohort reporting.",
  ],
};

export const highlights = [
  { stat: "3+", label: "professional years" },
  { stat: "2021", label: "shipping software since" },
  { stat: "~40%", label: "Immibot onboarding cut" },
];

export const experience: Experience[] = [
  {
    title: "Full-Stack Developer",
    company: "BPIT Tech Team",
    date: "Jun 2025 - Present",
    bullets: [
      "Leading a team of 3 on a legacy PHP to Next.js App Router, TypeScript, and Tailwind rebuild of the BPIT website.",
      "Built an inline click-to-edit CMS so admins can update text, links, and images directly on rendered sections, persisted via MongoDB.",
      "Modeled department and page content into reusable schemas so new sections stay consistent without a separate admin product.",
      "Added PostHog analytics, dynamic metadata, structured data, optimized routing, and Vercel preview deployments so content and SEO changes are reviewable before release.",
    ],
  },
  {
    title: "Senior Full-Stack Engineer",
    company: "RemoteHire",
    date: "Feb 2024 - Nov 2024",
    bullets: [
      "Re-architected Immibot, an AI immigration assistant, with modular country and domain adapters.",
      "Launched one-click guest sessions with history and credit merge, cutting onboarding time by about 40 percent.",
      "Built multi-mode chat and an agentic RAG pipeline with LangChain and Flowise for search, advice, document validation, and eligibility scoring.",
      "Unified app state through Context API and useReducer, then shipped PostHog plus session/video analytics for cohort analysis.",
      "Integrated Next.js, TypeScript, shadcn/ui, Tailwind, Clerk, Stripe, Prisma, Vercel, and PWA support.",
    ],
  },
  {
    title: "Software Developer I",
    company: "wonderHood",
    date: "Nov 2021 - Feb 2024",
    bullets: [
      "Owned web and mobile initiatives across React, Next.js, React Native, Ionic, and Expo, growing scope from individual contributor to SD-1.",
      "Rebuilt the e-commerce and content site with Shopify GraphQL, SDK flows, blogs, articles, courses, toys, and cart functionality.",
      "Migrated the platform to Next.js using ISR, SSG, SSR, and CSR, improving Lighthouse performance from 20-40 percent to 90+.",
      "Led the Ionic to React Native migration with child-centric UI, custom video players, game players, progress capture, and resume states.",
      "Converted MyLearning into a teacher dashboard with React, Vite, TypeScript, analytics, cohort filtering, and per-student reporting.",
    ],
  },
  {
    title: "MERN Intern (Acting Tech Lead)",
    company: "Possibillion Technologies",
    date: "Sep 2021 - Nov 2021",
    bullets: [
      "Led 4 interns and shipped 3 MVPs in 3 months across tourism, social, and video slideshow products.",
      "Built landing pages, admin panels, and REST backends with React, Express, MongoDB, Socket.io, Swagger, S3, and FFmpeg.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "immibot",
    index: "01",
    name: "Immibot",
    company: "RemoteHire",
    year: "2024",
    role: "Senior Fullstack",
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
    image: "/assets/immibot.png",
    link: "https://nextjsapp-immibot.vercel.app",
    blurb:
      "AI immigration assistant with modular country adapters, agentic RAG, adaptive questioning, and weighted eligibility scoring.",
    outcome: "Cut onboarding friction by ~40% with guest sessions, credit merge, adaptive RAG, and eligibility scoring.",
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
    outcome: "Runs sensitive screening signals locally in-browser instead of sending camera frames to a backend.",
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
    image: "/assets/storefront.svg",
    link: "https://github.com/Vinayak1337/StoreFrontNextjs",
    blurb:
      "Billing and inventory app with item organization, order creation, analytics, secure sessions, and Bluetooth thermal printing.",
    outcome: "Turns shop operations into one workflow: inventory, orders, analytics, and receipt printing.",
  },
  {
    id: "bpit",
    index: "04",
    name: "BPIT Website",
    company: "BPIT Tech Team",
    year: "2025",
    role: "Tech Lead",
    category: "WORK",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "PostHog"],
    image: "/assets/bpit.png",
    link: "https://bpit-site-redesign.vercel.app/",
    blurb:
      "Legacy PHP to Next.js rebuild with an inline click-to-edit CMS for live content updates.",
    outcome: "Replaced a separate admin-panel model with direct inline editing on rendered college pages.",
  },
  {
    id: "wonderlearn",
    index: "05",
    name: "wonderLearn",
    company: "wonderHood",
    year: "2023",
    role: "SD-1",
    category: "WORK",
    tags: ["Next.js", "Tailwind", "Shopify", "GraphQL", "TypeScript"],
    image: "/assets/wonderlearn.png",
    link: "https://thewonderlearn.com/",
    blurb:
      "Ed-tech hub with blogs, school resources, and a Shopify GraphQL-backed toy store, migrated from a static React build to Next.js with ISR and SSG.",
    outcome: "Moved commerce and content from a static React build to a faster Next.js surface with Shopify GraphQL.",
  },
  {
    id: "wonderlearn-app",
    index: "06",
    name: "wonderLearn App",
    company: "wonderHood",
    year: "2023",
    role: "SD-1",
    category: "WORK",
    tags: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Redux Saga"],
    image: "/assets/wonderlearn-app.png",
    link: "https://wonderlearn.app.link/app",
    blurb:
      "Mobile app for kids aged 2-6 with games, videos, custom players, and resume states after an Ionic to React Native rewrite.",
    outcome: "Rebuilt the kids' learning app in React Native with custom media, games, progress, and resume states.",
  },
  {
    id: "mylearning",
    index: "05",
    name: "MyLearning",
    company: "wonderHood",
    year: "2023",
    role: "SD-1",
    category: "WORK",
    tags: ["React", "Vite", "TypeScript", "Redux Toolkit", "Tailwind"],
    image: "/assets/mylearning.png",
    link: "https://mylearning.thewonderlearn.com/",
    blurb:
      "Teacher dashboard for classroom rosters, per-student video watch percentage, game scores, and module completion.",
  },
  {
    id: "wonderhood",
    index: "06",
    name: "wonderHood",
    company: "wonderHood",
    year: "2022",
    role: "SD-1",
    category: "WORK",
    tags: ["React", "SASS", "Shopify", "Redux Toolkit", "Redux Saga"],
    image: "/assets/wonderhood.png",
    link: "https://wonderhood.in/",
    blurb:
      "Parent-facing landing page and education journey surface for the wonderLearn ecosystem.",
  },
  {
    id: "dating-landing",
    index: "07",
    name: "Dating App - Landing",
    company: "Possibillion",
    year: "2021",
    role: "MERN Intern",
    category: "INTERN",
    tags: ["React", "SASS", "TypeScript"],
    image: "/assets/dating-landing.png",
    link: "https://dating-app-website.netlify.app/",
    blurb:
      "Landing page for coffee-shop partners and app downloads, shipped during the Possibillion internship.",
  },
  {
    id: "dating-admin",
    index: "08",
    name: "Dating App - Admin",
    company: "Possibillion",
    year: "2021",
    role: "MERN Intern",
    category: "INTERN",
    tags: ["React", "SASS", "Redux"],
    image: "/assets/dating-admin.png",
    link: "https://dating-app-admin-site.netlify.app",
    blurb:
      "Admin panel for managing coffee-shop partners, requests, and app users.",
  },
  {
    id: "dating-backend",
    index: "09",
    name: "Dating App - Backend",
    company: "Possibillion",
    year: "2021",
    role: "MERN Intern",
    category: "INTERN",
    tags: ["Node", "Express", "MongoDB", "Socket.io", "Swagger"],
    image: "/assets/dating-backend.png",
    link: "https://dating-app-server-gdjw.onrender.com/docs",
    blurb:
      "Node backend plus Socket.io for realtime social features, documented with Swagger.",
  },
  {
    id: "levtours-landing",
    index: "10",
    name: "LevTours - Landing",
    company: "Possibillion",
    year: "2021",
    role: "MERN Intern",
    category: "INTERN",
    tags: ["React", "SASS", "Redux", "TypeScript"],
    image: "/assets/levtours-landing.png",
    link: "https://levtours.netlify.app/",
    blurb:
      "Tourism platform landing page for rooms, travel blogs, and curated experiences.",
  },
  {
    id: "levtours-admin",
    index: "11",
    name: "LevTours - Admin",
    company: "Possibillion",
    year: "2021",
    role: "MERN Intern",
    category: "INTERN",
    tags: ["React", "SASS", "Redux"],
    image: "/assets/levtours-admin.png",
    link: "https://levtours-admin-panel.netlify.app",
    blurb:
      "Admin dashboard for bookings, blogs, coupons, and bulk imports.",
  },
  {
    id: "levtours-backend",
    index: "12",
    name: "LevTours - Backend",
    company: "Possibillion",
    year: "2021",
    role: "MERN Intern",
    category: "INTERN",
    tags: ["Node", "Express", "MongoDB", "Swagger"],
    image: "/assets/levtours-backend.png",
    link: "https://levtours-server.onrender.com/docs",
    blurb: "Node backend for the LevTours booking and content ecosystem.",
  },
  {
    id: "firework-fe",
    index: "13",
    name: "Firework - Frontend",
    company: "Possibillion",
    year: "2021",
    role: "MERN Intern",
    category: "INTERN",
    tags: ["React", "SASS", "Redux"],
    image: "/assets/firework-frontend.png",
    link: "https://firework-website.netlify.app/",
    blurb:
      "Frontend for uploading images and videos with captions plus realtime upload progress.",
  },
  {
    id: "firework-be",
    index: "14",
    name: "Firework - Backend",
    company: "Possibillion",
    year: "2021",
    role: "MERN Intern",
    category: "INTERN",
    tags: ["Node", "Express", "MongoDB", "FFmpeg", "S3"],
    image: "/assets/firework-backend.png",
    link: null,
    blurb:
      "Node backend that overlays captions with FFmpeg and stores output through MongoDB and S3.",
  },
  {
    id: "relics-audit",
    index: "15",
    name: "Relics Audit",
    company: "Open Source",
    year: "2023",
    role: "Maintainer",
    category: "OSS",
    tags: ["Discord.js", "Node", "MongoDB"],
    image: "/assets/relics-audit.png",
    link: "https://github.com/Vinayak1337/RelicsAudit",
    blurb:
      "Discord bot for real-time club monitoring, verification, and ladder tracking for the Relics organization.",
  },
  {
    id: "relics-general",
    index: "16",
    name: "Relics General",
    company: "Open Source",
    year: "2023",
    role: "Maintainer",
    category: "OSS",
    tags: ["Discord.js", "Node", "MongoDB"],
    image: "/assets/relics-general.png",
    link: "https://github.com/Vinayak1337/relics-general-bot",
    blurb:
      "Modmail, role management, cross-server announcements, and utility commands for Discord communities.",
  },
  {
    id: "relics-banhammer",
    index: "17",
    name: "Relics Ban Hammer",
    company: "Open Source",
    year: "2023",
    role: "Maintainer",
    category: "OSS",
    tags: ["Discord.js", "Node"],
    image: "/assets/relics-banhammer.png",
    link: "https://github.com/Vinayak1337/RelicsBanHammer",
    blurb: "Moderation bot for chain bans and unbans across multiple servers.",
  },
  {
    id: "tourney",
    index: "18",
    name: "Tourney Ticketeer",
    company: "Open Source",
    year: "2022",
    role: "Maintainer",
    category: "OSS",
    tags: ["Discord.js", "Node"],
    image: "/assets/tourney.png",
    link: "https://github.com/Vinayak1337/TourneyTicketeer/",
    blurb:
      "Discord bot for tournament payment ticketing, payment methods, logs, and role assignment.",
  },
  {
    id: "pdfy",
    index: "19",
    name: "Pdfy",
    company: "Freelance",
    year: "2023",
    role: "Freelance",
    category: "FREELANCE",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/assets/pdfsplitter.png",
    link: "https://pdfy.vercel.app/",
    blurb:
      "Upload a PDF, view pages, edit metadata on a split-screen interface, and export CSV or modified PDFs.",
  },
  {
    id: "pdfsplit",
    index: "20",
    name: "PDF Splitter",
    company: "Freelance",
    year: "2022",
    role: "Freelance",
    category: "FREELANCE",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    image: "/assets/pdfsplitter.png",
    link: "https://pdf-splitter.vercel.app/",
    blurb:
      "Tool for hand-picking pages or range-selecting pages and downloading split PDFs.",
  },
  {
    id: "cadillacs",
    index: "21",
    name: "Cadillacs Backend",
    company: "Freelance",
    year: "2022",
    role: "Freelance",
    category: "FREELANCE",
    tags: ["Node", "Express", "MongoDB", "Swagger", "JWT"],
    image: "/assets/cadillacs.png",
    link: "https://cadillacs-server.onrender.com/docs/",
    blurb:
      "REST APIs with admin and community routes, JWT auth, and Swagger documentation.",
  },
  {
    id: "face-fe",
    index: "22",
    name: "Face Recognition - Frontend",
    company: "Personal",
    year: "2021",
    role: "Personal",
    category: "PERSONAL",
    tags: ["React", "SASS", "Redux"],
    image: "/assets/face-frontend.png",
    link: "https://face-recognition-ht5h.netlify.app/",
    blurb:
      "Upload images, detect faces, and track image uploads through a dashboard.",
  },
  {
    id: "face-be",
    index: "23",
    name: "Face Recognition - Backend",
    company: "Personal",
    year: "2021",
    role: "Personal",
    category: "PERSONAL",
    tags: ["Node", "Express", "MongoDB"],
    image: "/assets/face-backend.png",
    link: null,
    blurb: "Auth, image storage, and Clarifai API integration.",
  },
  {
    id: "picmash-fe",
    index: "24",
    name: "Picmash - Frontend",
    company: "Personal",
    year: "2020",
    role: "Personal",
    category: "PERSONAL",
    tags: ["React", "CSS", "JavaScript"],
    image: "/assets/picmash-frontend.png",
    link: "https://picmash-app.netlify.app/",
    blurb: "Social media prototype built during college.",
  },
  {
    id: "picmash-be",
    index: "25",
    name: "Picmash - Backend",
    company: "Personal",
    year: "2020",
    role: "Personal",
    category: "PERSONAL",
    tags: ["Node", "Express", "MongoDB"],
    image: "/assets/picmash-backend.png",
    link: null,
    blurb: "Auth, posts, and image storage for a social media prototype.",
  },
  {
    id: "crwn",
    index: "26",
    name: "Crwn Clothing",
    company: "Personal",
    year: "2021",
    role: "Personal",
    category: "PERSONAL",
    tags: ["React", "Redux", "Firebase", "Stripe", "GraphQL"],
    image: "/assets/crwn.png",
    link: "https://crwn-clothing-pwa.netlify.app/",
    blurb: "E-commerce PWA with Google auth, cart, and Stripe checkout.",
  },
  {
    id: "robo",
    index: "27",
    name: "Monster Rolodex",
    company: "Personal",
    year: "2020",
    role: "Personal",
    category: "PERSONAL",
    tags: ["React", "CSS", "TypeScript"],
    image: "/assets/robo.png",
    link: "https://monsters-rolodex-webapp.netlify.app/",
    blurb: "Early React project with a filterable directory interface.",
  },
];

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
    sameAs: [person.githubUrl, person.linkedinUrl],
    knowsAbout: seoKeywords,
    alumniOf: [
      "Ambedkar Institute of Technology",
    ],
    affiliation: [
      {
        "@type": "CollegeOrUniversity",
        name: "Guru Gobind Singh Indraprastha University",
        description: "Current B.Tech in Computer Science & Engineering program, 2024-2027",
      },
      {
        "@type": "Organization",
        name: "BPIT Tech Team",
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
      name: "Vinayak Kumar AI Full-Stack Engineer Portfolio",
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
    ...projects.slice(0, 6).map((project) => ({
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
