import type { Project } from "@/constants/portfolio";

export function FluxProjectGlyph({
  index,
  project,
}: Readonly<{
  index: number;
  project: Project;
}>) {
  return (
    <span
      className={`project-glyph flux-project-glyph flux-project-${project.category.toLowerCase()}`}
      data-exhibit={(index + 1).toString().padStart(2, "0")}
      aria-hidden="true"
    >
      <svg viewBox="0 0 96 96" aria-hidden="true" focusable="false">
        <rect x="18" y="18" width="60" height="60" className="flux-glyph-box" />
        <rect x="24" y="24" width="48" height="48" className="flux-glyph-box-inner" />
        <path d="M48 18v60M18 48h60" />
        <text x="48" y="52" textAnchor="middle">
          {(index + 1).toString().padStart(2, "0")}
        </text>
      </svg>
    </span>
  );
}

export function FluxHeroIllustration() {
  return (
    <div className="illo illo-hero flux-hero-scene" data-draw data-illo aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id="flux-hero-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="flux-hero-orbits">
          <ellipse cx="720" cy="450" rx="400" ry="200" />
          <ellipse cx="720" cy="450" rx="350" ry="175" />
          <ellipse cx="720" cy="450" rx="300" ry="150" />
          <ellipse cx="720" cy="450" rx="150" ry="400" transform="rotate(45 720 450)" />
          <ellipse cx="720" cy="450" rx="150" ry="400" transform="rotate(-45 720 450)" />
          <circle cx="720" cy="450" r="120" filter="url(#flux-hero-glow)" />
        </g>
        <g className="flux-nodes">
          <path d="M320 250L720 450L1120 250M720 450V800" />
          <circle cx="320" cy="250" r="10" filter="url(#flux-hero-glow)" />
          <circle cx="1120" cy="250" r="10" filter="url(#flux-hero-glow)" />
          <circle cx="720" cy="800" r="10" filter="url(#flux-hero-glow)" />
        </g>
      </svg>
    </div>
  );
}

export function FluxStatementIllustration() {
  return (
    <div
      className="illo illo-statement flux-statement-system"
      data-draw
      data-illo
      aria-hidden="true"
    >
      <svg viewBox="0 0 1280 780" aria-hidden="true" focusable="false">
        <g className="flux-statement-plane">
          <rect x="340" y="190" width="600" height="400" />
          <rect x="380" y="230" width="520" height="320" />
          <line x1="640" y1="190" x2="640" y2="590" />
          <line x1="340" y1="390" x2="940" y2="390" />
        </g>
      </svg>
    </div>
  );
}

export function FluxChapterIllustration(index: number) {
  const illustrations = [
    <svg viewBox="0 0 440 360" aria-hidden="true" focusable="false" key="flux-premise">
      <g className="flux-chapter-spin">
        <rect x="120" y="80" width="200" height="200" />
        <rect x="140" y="100" width="160" height="160" className="illo-accent" />
        <rect x="160" y="120" width="120" height="120" />
      </g>
    </svg>,
    <svg viewBox="0 0 440 360" aria-hidden="true" focusable="false" key="flux-method">
      <g className="flux-chapter-drift">
        <path d="M100 180Q220 50 340 180T100 180" className="illo-accent" />
        <path d="M100 180Q220 310 340 180" />
        <circle cx="220" cy="180" r="40" />
        <circle cx="220" cy="180" r="8" className="flux-glow" />
      </g>
    </svg>,
    <svg viewBox="0 0 440 360" aria-hidden="true" focusable="false" key="flux-outcome">
      <g className="flux-chapter-scale">
        <circle cx="220" cy="180" r="100" />
        <circle cx="220" cy="180" r="80" className="illo-accent" />
        <circle cx="220" cy="180" r="60" />
        <circle cx="220" cy="180" r="20" className="flux-glow" />
      </g>
    </svg>,
  ];

  return (
    <div className="illo illo-chapter flux-chapter-illo" data-draw data-illo aria-hidden="true">
      {illustrations[index]}
    </div>
  );
}

export function FluxRailIllustration() {
  return (
    <div className="illo illo-rail flux-rail-flux" data-draw data-illo aria-hidden="true">
      <svg viewBox="0 0 1740 640" aria-hidden="true" focusable="false">
        <g className="flux-rail-drift">
          <path d="M0 320h1740" />
          <path d="M0 220h1740" />
          <path d="M0 420h1740" />
          <rect x="200" y="270" width="100" height="100" transform="rotate(45 250 320)" />
          <rect x="600" y="270" width="100" height="100" transform="rotate(45 650 320)" />
          <rect x="1000" y="270" width="100" height="100" transform="rotate(45 1050 320)" />
          <rect x="1400" y="270" width="100" height="100" transform="rotate(45 1450 320)" />
        </g>
      </svg>
    </div>
  );
}

export function FluxLedgerIllustration() {
  return (
    <div className="illo illo-ledger flux-ledger-map" data-draw data-illo aria-hidden="true">
      <svg viewBox="0 0 760 760" aria-hidden="true" focusable="false">
        <rect x="180" y="180" width="400" height="400" />
        <rect x="230" y="230" width="300" height="300" />
        <rect x="280" y="280" width="200" height="200" className="illo-accent" />
        <line x1="380" y1="0" x2="380" y2="760" />
        <line x1="0" y1="380" x2="760" y2="380" />
      </svg>
    </div>
  );
}

export function FluxAboutMap() {
  const nodes = [
    { key: "web", x: 300, y: 250, label: "WEB" },
    { key: "mobile", x: 600, y: 250, label: "MOBILE" },
    { key: "ai", x: 300, y: 470, label: "AI" },
    { key: "data", x: 600, y: 470, label: "DATA" },
  ];

  return (
    <div className="illo illo-about flux-about-map" data-draw data-illo aria-hidden="true">
      <svg viewBox="0 0 900 720" aria-hidden="true" focusable="false">
        <path d="M300 250L600 250L600 470L300 470Z" />
        <path d="M300 250L600 470M600 250L300 470" />
        {nodes.map((node) => (
          <g className="flux-about-node" data-node={node.key} key={node.key}>
            <circle cx={node.x} cy={node.y} r="44" />
            <text x={node.x} y={node.y + 5} textAnchor="middle">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function FluxExperienceIllustration() {
  return (
    <div
      className="illo illo-experience flux-experience-stream"
      data-draw
      data-illo
      aria-hidden="true"
    >
      <svg viewBox="0 0 560 1040" aria-hidden="true" focusable="false">
        <path d="M280 100L280 940" />
        <path d="M200 100Q360 520 200 940" className="illo-accent" />
        <path d="M360 100Q200 520 360 940" />
        <rect x="240" y="200" width="80" height="80" transform="rotate(45 280 240)" />
        <rect x="240" y="480" width="80" height="80" transform="rotate(45 280 520)" />
        <rect x="240" y="760" width="80" height="80" transform="rotate(45 280 800)" />
      </svg>
    </div>
  );
}

export function FluxContactIllustration() {
  return (
    <div className="illo illo-contact flux-contact-grid" data-draw data-illo aria-hidden="true">
      <svg viewBox="0 0 1120 720" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="flux-contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0L0 0L0 40" />
          </pattern>
        </defs>
        <rect width="1120" height="720" fill="url(#flux-contact-grid)" />
        <circle cx="560" cy="360" r="150" className="illo-accent" />
        <circle cx="560" cy="360" r="140" />
        <circle cx="560" cy="360" r="40" className="flux-glow" />
      </svg>
    </div>
  );
}

export function FluxArchiveHeroIllustration() {
  return (
    <div
      className="flux-archive-hero-illo flux-archive-vault"
      data-draw
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1040 760"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="archive-vault-pane" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.04" />
            <stop offset="0.55" stopColor="currentColor" stopOpacity="0.24" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="archive-vault-scan" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="currentColor" stopOpacity="0" />
            <stop offset="0.5" stopColor="currentColor" stopOpacity="0.52" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="archive-vault-node">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.72" />
            <stop offset="0.48" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="archive-vault-backplane">
          <path d="M92 92H984M92 176H984M92 260H984M92 344H984M92 428H984M92 512H984M92 596H984" />
          <path d="M174 56V680M318 56V680M462 56V680M606 56V680M750 56V680M894 56V680" />
          <path d="M126 648L984 92M126 92L984 648" />
        </g>

        <g className="archive-vault-spine">
          <path d="M164 110V646" />
          <path d="M132 144H196M132 236H196M132 328H196M132 420H196M132 512H196M132 604H196" />
          <text x="88" y="152">01</text>
          <text x="88" y="336">25</text>
          <text x="88" y="612">68</text>
        </g>

        <g className="archive-vault-stack archive-vault-stack-back">
          <path d="M300 134L726 82L900 180L454 242Z" />
          <path d="M344 160L706 116M402 198L786 142M472 224L842 172" />
          <text x="340" y="112">CASE STUDY LAYER</text>
        </g>

        <g className="archive-vault-stack archive-vault-stack-mid">
          <path d="M242 260L720 184L932 310L420 404Z" />
          <path d="M298 284L690 224M354 326L790 252M416 368L862 290" />
          <path className="illo-accent" d="M726 184L932 310M420 404L932 310" />
          <text x="286" y="246">STRONG INDEX / 25</text>
        </g>

        <g className="archive-vault-stack archive-vault-stack-front">
          <path d="M202 414L678 322L930 496L388 620Z" />
          <path d="M250 440L642 364M306 484L738 392M366 526L830 432M426 568L874 474" />
          <path className="illo-accent" d="M202 414L388 620M678 322L930 496M388 620L930 496" />
          <text x="248" y="674">LONG TAIL / 43</text>
        </g>

        <g className="archive-vault-scan">
          <path d="M178 360L942 236" />
          <path d="M178 396L942 272" />
        </g>

        <g className="archive-vault-manifest">
          <path d="M704 94H960V612H704z" />
          <path d="M734 150H910M734 196H884M734 242H934M734 288H868M734 380H920M734 426H892M734 472H944M734 518H864" />
          <path className="illo-accent" d="M704 334H960" />
          <text x="734" y="118">IDX.068</text>
          <text x="734" y="360">FILTERED</text>
        </g>

        <g className="archive-vault-nodes">
          <path className="illo-accent" d="M164 236L420 404L704 334M164 512L388 620L704 472" />
          <circle cx="164" cy="236" r="24" />
          <circle cx="420" cy="404" r="18" />
          <circle cx="704" cy="334" r="14" />
          <circle cx="164" cy="512" r="18" />
          <circle cx="388" cy="620" r="22" />
          <circle cx="704" cy="472" r="14" />
        </g>
      </svg>
    </div>
  );
}
