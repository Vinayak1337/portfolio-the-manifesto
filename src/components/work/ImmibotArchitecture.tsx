export function ImmibotArchitecture() {
  return (
    <>
      <svg
        className="immibot-architecture-svg immibot-architecture-wide-svg"
        viewBox="0 0 1100 570"
        role="img"
        focusable="false"
        aria-labelledby="immibot-architecture-title immibot-architecture-desc"
      >
        <title id="immibot-architecture-title">Immibot architecture evolution</title>
        <desc id="immibot-architecture-desc">
          Two horizontal system maps distinguish the historically shipped 2024 Flowise
          architecture from the current Perplexity official-source search architecture.
        </desc>
        <defs>
          <marker id="immibot-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0 8 4 0 8Z" fill="currentColor" />
          </marker>
          <linearGradient id="immibot-flow" x1="0" x2="1">
            <stop offset="0" stopColor="#9f4f38" />
            <stop offset="1" stopColor="#d18462" />
          </linearGradient>
        </defs>

        <g className="immibot-architecture-grid" aria-hidden="true">
          <path d="M40 70H1060M40 210H1060M40 350H1060M40 490H1060" />
          <path d="M130 35V535M340 35V535M550 35V535M760 35V535M970 35V535" />
        </g>

        <g className="immibot-architecture-labels">
          <text x="50" y="55">2024 · FLOWISE ERA · HISTORICALLY SHIPPED</text>
          <text x="50" y="335">CURRENT · PERPLEXITY ERA</text>
        </g>

        <g className="immibot-architecture-connectors" fill="none" stroke="url(#immibot-flow)" strokeWidth="2" markerEnd="url(#immibot-arrow)">
          <path d="M210 145H260" />
          <path d="M420 145H470" />
          <path d="M630 145H680" />
          <path d="M840 145H890" />
          <path d="M210 425H260" />
          <path d="M420 425H470" />
          <path d="M630 425H680" />
          <path d="M840 425H890" />
        </g>

        <g className="immibot-era-history">
          <g className="immibot-architecture-node"><rect x="50" y="90" width="160" height="110" rx="3" /><text x="67" y="118">01</text><text x="67" y="147" className="node-title">Session</text><text x="67" y="171">profile + context</text></g>
          <g className="immibot-architecture-node"><rect x="260" y="90" width="160" height="110" rx="3" /><text x="277" y="118">02</text><text x="277" y="147" className="node-title">Mode route</text><text x="277" y="171">Advisor / Search</text></g>
          <g className="immibot-architecture-node"><rect x="470" y="90" width="160" height="110" rx="3" /><text x="487" y="118">03</text><text x="487" y="147" className="node-title">Flowise</text><text x="487" y="171">distinct chatflows</text></g>
          <g className="immibot-architecture-node"><rect x="680" y="90" width="160" height="110" rx="3" /><text x="697" y="118">04</text><text x="697" y="147" className="node-title">Product tools</text><text x="697" y="171">tracking · FSW</text></g>
          <g className="immibot-architecture-node"><rect x="890" y="90" width="160" height="110" rx="3" /><text x="907" y="118">05</text><text x="907" y="147" className="node-title">Persist</text><text x="907" y="171">progress + answer</text></g>
        </g>

        <g className="immibot-migration">
          <path d="M550 218V303" />
          <text x="570" y="258">PROVIDER MIGRATION</text>
          <text x="570" y="278">FLOWISE → PERPLEXITY</text>
        </g>

        <g className="immibot-era-current">
          <g className="immibot-architecture-node"><rect x="50" y="370" width="160" height="110" rx="3" /><text x="67" y="398">01</text><text x="67" y="427" className="node-title">Identity</text><text x="67" y="451">guest / Clerk</text></g>
          <g className="immibot-architecture-node"><rect x="260" y="370" width="160" height="110" rx="3" /><text x="277" y="398">02</text><text x="277" y="427" className="node-title">Country config</text><text x="277" y="451">CA · US · AU</text></g>
          <g className="immibot-architecture-node"><rect x="470" y="370" width="160" height="110" rx="3" /><text x="487" y="398">03</text><text x="487" y="427" className="node-title">Sonar search</text><text x="487" y="451">official domains</text></g>
          <g className="immibot-architecture-node"><rect x="680" y="370" width="160" height="110" rx="3" /><text x="697" y="398">04</text><text x="697" y="427" className="node-title">Stream</text><text x="697" y="451">answer + citations</text></g>
          <g className="immibot-architecture-node"><rect x="890" y="370" width="160" height="110" rx="3" /><text x="907" y="398">05</text><text x="907" y="427" className="node-title">Persist</text><text x="907" y="451">Prisma / Postgres</text></g>
        </g>

        <g className="immibot-architecture-footnote">
          <text x="550" y="535" textAnchor="middle">SHARED PRODUCT LAYERS · AUTH · HISTORY · ADMIN · CREDITS · ANALYTICS</text>
        </g>
      </svg>

      <svg
        className="immibot-architecture-svg immibot-architecture-mobile-svg"
        viewBox="0 0 360 1020"
        role="img"
        focusable="false"
        aria-labelledby="immibot-architecture-mobile-title immibot-architecture-mobile-desc"
      >
        <title id="immibot-architecture-mobile-title">Immibot mobile architecture evolution</title>
        <desc id="immibot-architecture-mobile-desc">A vertical comparison of the historical Flowise system and current Perplexity system.</desc>
        <defs>
          <marker id="immibot-mobile-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 8 4 0 8Z" fill="currentColor" /></marker>
        </defs>

        <g className="immibot-architecture-labels"><text x="20" y="28">2024 · FLOWISE ERA · HISTORICALLY SHIPPED</text></g>
        <g className="immibot-era-history">
          <g className="immibot-architecture-node"><rect x="20" y="50" width="320" height="88" rx="3" /><text x="38" y="78">01</text><text x="38" y="106" className="node-title">Advisor / Search routing</text><text x="38" y="126">profile context → distinct chatflow</text></g>
          <g className="immibot-architecture-node"><rect x="20" y="164" width="320" height="88" rx="3" /><text x="38" y="192">02</text><text x="38" y="220" className="node-title">Flowise tools</text><text x="38" y="240">follow-ups · tracking · orientation · FSW</text></g>
          <g className="immibot-architecture-node"><rect x="20" y="278" width="320" height="88" rx="3" /><text x="38" y="306">03</text><text x="38" y="334" className="node-title">Persisted result</text><text x="38" y="354">progress · recommendation · answer</text></g>
        </g>
        <g className="immibot-architecture-connectors" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#immibot-mobile-arrow)"><path d="M180 138V164" /><path d="M180 252V278" /></g>

        <g className="immibot-migration"><path d="M180 382V438" /><text x="200" y="410">PROVIDER MIGRATION</text></g>

        <g className="immibot-architecture-labels"><text x="20" y="474">CURRENT · PERPLEXITY ERA</text></g>
        <g className="immibot-era-current">
          <g className="immibot-architecture-node"><rect x="20" y="496" width="320" height="88" rx="3" /><text x="38" y="524">01</text><text x="38" y="552" className="node-title">Guest / Clerk identity</text><text x="38" y="572">country and conversation context</text></g>
          <g className="immibot-architecture-node"><rect x="20" y="610" width="320" height="88" rx="3" /><text x="38" y="638">02</text><text x="38" y="666" className="node-title">Perplexity Sonar</text><text x="38" y="686">official government domains</text></g>
          <g className="immibot-architecture-node"><rect x="20" y="724" width="320" height="88" rx="3" /><text x="38" y="752">03</text><text x="38" y="780" className="node-title">Stream + citations</text><text x="38" y="800">inspectable answer in the live UI</text></g>
          <g className="immibot-architecture-node"><rect x="20" y="838" width="320" height="88" rx="3" /><text x="38" y="866">04</text><text x="38" y="894" className="node-title">Prisma / PostgreSQL</text><text x="38" y="914">messages · sources · account continuity</text></g>
        </g>
        <g className="immibot-architecture-connectors" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#immibot-mobile-arrow)"><path d="M180 584V610" /><path d="M180 698V724" /><path d="M180 812V838" /></g>
        <g className="immibot-architecture-footnote"><text x="180" y="975" textAnchor="middle">SHARED PRODUCT LAYERS SURVIVED THE MIGRATION</text></g>
      </svg>
    </>
  );
}
