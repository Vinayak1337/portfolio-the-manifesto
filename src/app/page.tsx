import type { Metadata } from "next";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Experience } from "@/components/home/Experience";
import { Hero } from "@/components/home/Hero";
import { OpenSource } from "@/components/home/OpenSource";
import { Statement } from "@/components/home/Statement";
import { WorkCarousel } from "@/components/home/WorkCarousel";
import { WorkIndex } from "@/components/home/WorkIndex";
import { Navbar } from "@/components/navigation/Navbar";
import { Marquee } from "@/components/shared/Marquee";
import { FluxClientEffects } from "@/components/flux/FluxClientEffects";
import {
  FluxAboutMap,
  FluxContactIllustration,
  FluxExperienceIllustration,
  FluxHeroIllustration,
  FluxLedgerIllustration,
  FluxProjectGlyph,
  FluxRailIllustration,
  FluxStatementIllustration,
} from "@/components/flux/FluxIllustrations";
import {
  aboutParagraphs,
  experience,
  highlights,
  homeHero,
  jsonLd,
  ledgerProjects,
  marqueeTech,
  navigationLinks,
  openSourceContributions,
  person,
  railProjects,
  site,
  statement,
} from "@/constants/portfolio";

export const metadata: Metadata = {
  title: { absolute: site.name },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vinayak Kumar, React and Next.js software engineer building frontend-heavy full-stack product systems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/twitter-image"],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="manifesto-root illustrated-root has-custom-cursor variant-flux variant-atlas"
        data-about-active="web"
        data-flux-root
        id="main"
      >
        <a className="skip-link" href="#work">
          Skip to work
        </a>
        <FluxClientEffects />
        <Navbar links={navigationLinks} />
        <Hero
          eyebrow={homeHero.eyebrow}
          illustration={<FluxHeroIllustration />}
          signals={homeHero.signals}
          summary={homeHero.summary}
          titleTokens={homeHero.titleTokens}
        />
        <Marquee items={marqueeTech} />
        <Statement
          caption={statement.caption}
          headline={statement.headline}
          illustration={<FluxStatementIllustration />}
        />
        <WorkCarousel
          illustration={<FluxRailIllustration />}
          projects={railProjects}
          renderProjectGlyph={(project, index) => (
            <FluxProjectGlyph project={project} index={index} />
          )}
        />
        <WorkIndex
          illustration={<FluxLedgerIllustration />}
          projects={ledgerProjects}
          startIndex={railProjects.length + 1}
        />
        <About
          art={<FluxAboutMap />}
          highlights={highlights}
          paragraphs={aboutParagraphs}
        />
        <Experience
          experience={experience}
          illustration={<FluxExperienceIllustration />}
        />
        <OpenSource contributions={openSourceContributions} />
        <Contact illustration={<FluxContactIllustration />} person={person} />
      </main>
    </>
  );
}
