import type { Metadata } from "next";
import { About } from "@/components/home/About";
import { Chapters } from "@/components/home/Chapters";
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
  FluxChapterIllustration,
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
  chapters,
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
  title: site.name,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.description,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
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
        className="manifesto-root illustrated-root has-custom-cursor variant-flux"
        data-about-active="web"
        data-flux-root
        id="main"
      >
        <a className="skip-link" href="#work">
          Skip to work
        </a>
        <FluxClientEffects />
        <div aria-hidden="true" className="grain" />
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
        <Chapters chapters={chapters} renderIllustration={FluxChapterIllustration} />
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
        <Marquee items={["RAG", "Agents", "Evals", "Commerce", "Ed-tech"]} variant="reverse" />
        <Contact illustration={<FluxContactIllustration />} person={person} />
      </main>
    </>
  );
}
