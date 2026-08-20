export function ImmibotArchitecture() {
  return (
    <>
      <svg
      className="immibot-architecture-svg immibot-architecture-wide-svg"
      viewBox="0 0 1100 500"
      role="img"
      focusable="false"
      aria-labelledby="immibot-architecture-title immibot-architecture-desc"
    >
      <title id="immibot-architecture-title">Immibot workflow architecture</title>
      <desc id="immibot-architecture-desc">
        A public-safe architecture map connecting the session layer, adaptive intake,
        retrieval and source links, document validation, eligibility scoring, and persisted
        history through a country and domain adapter boundary.
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
        <path d="M40 80H1060M40 160H1060M40 240H1060M40 320H1060M40 400H1060" />
        <path d="M120 40V460M280 40V460M440 40V460M600 40V460M760 40V460M920 40V460" />
      </g>

      <g className="immibot-architecture-connectors" fill="none" stroke="url(#immibot-flow)" strokeWidth="2" markerEnd="url(#immibot-arrow)">
        <path d="M191 149H248" />
        <path d="M373 149H430" />
        <path d="M555 149H612" />
        <path d="M737 149H794" />
        <path d="M919 149H1010V270H910" />
        <path d="M825 325H735" />
        <path d="M645 325H555" />
        <path d="M465 325H375" />
        <path d="M285 325H195" />
      </g>

      <g className="immibot-architecture-labels">
        <text x="52" y="65">PUBLIC-SAFE SYSTEM MAP · NO INTERNAL PROMPTS OR DATA</text>
        <text x="550" y="54" textAnchor="middle">COUNTRY / DOMAIN ADAPTER BOUNDARY</text>
      </g>

      <g className="immibot-architecture-adapter" aria-label="Country and domain adapter boundary">
        <rect x="40" y="88" width="151" height="122" rx="3" />
        <text x="58" y="116">01</text>
        <text x="58" y="145" className="node-title">Session layer</text>
        <text x="58" y="168">guest → account</text>
        <text x="58" y="188">Clerk · history transfer</text>
      </g>
      <g className="immibot-architecture-node">
        <rect x="248" y="88" width="125" height="122" rx="3" />
        <text x="264" y="116">02</text>
        <text x="264" y="145" className="node-title">Intake</text>
        <text x="264" y="168">adaptive questions</text>
        <text x="264" y="188">profile context</text>
      </g>
      <g className="immibot-architecture-node">
        <rect x="430" y="88" width="125" height="122" rx="3" />
        <text x="446" y="116">03</text>
        <text x="446" y="145" className="node-title">Retrieve</text>
        <text x="446" y="168">web / indexed sources</text>
        <text x="446" y="188">official links</text>
      </g>
      <g className="immibot-architecture-node">
        <rect x="612" y="88" width="125" height="122" rx="3" />
        <text x="628" y="116">04</text>
        <text x="628" y="145" className="node-title">Validate</text>
        <text x="628" y="168">document checks</text>
        <text x="628" y="188">structured signals</text>
      </g>
      <g className="immibot-architecture-node">
        <rect x="794" y="88" width="125" height="122" rx="3" />
        <text x="810" y="116">05</text>
        <text x="810" y="145" className="node-title">Score</text>
        <text x="810" y="168">eligibility signals</text>
        <text x="810" y="188">recommendations</text>
      </g>

      <g className="immibot-architecture-adapter immibot-architecture-adapter-wide" aria-label="Adapter boundary">
        <rect x="195" y="270" width="630" height="110" rx="3" />
        <text x="220" y="300">ADAPTER INTERFACE</text>
        <text x="220" y="327" className="node-title">Country rules × domain questions × retrieval sources</text>
        <text x="220" y="353">Extend the workflow without rewriting the conversation, persistence, or account layers.</text>
      </g>

      <g className="immibot-architecture-node">
        <rect x="40" y="270" width="155" height="110" rx="3" />
        <text x="58" y="300">06</text>
        <text x="58" y="327" className="node-title">Persist</text>
        <text x="58" y="350">history + messages</text>
      </g>
      <g className="immibot-architecture-node">
        <rect x="910" y="270" width="150" height="110" rx="3" />
        <text x="928" y="300">07</text>
        <text x="928" y="327" className="node-title">Respond</text>
        <text x="928" y="350">chat + sources</text>
      </g>

      <g className="immibot-architecture-footnote">
        <text x="550" y="438" textAnchor="middle">ANSWER STREAM · OFFICIAL-SOURCE LINKS</text>
      </g>
      </svg>
      <svg
      className="immibot-architecture-svg immibot-architecture-mobile-svg"
      viewBox="0 0 360 840"
      role="img"
      focusable="false"
      aria-labelledby="immibot-architecture-mobile-title immibot-architecture-mobile-desc"
    >
      <title id="immibot-architecture-mobile-title">Immibot mobile workflow architecture</title>
      <desc id="immibot-architecture-mobile-desc">
        A vertical mobile map of guest entry, adaptive intake, source-linked retrieval,
        document and eligibility analysis, persisted history, and the adapter boundary.
      </desc>
      <defs>
        <marker id="immibot-mobile-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 8 4 0 8Z" fill="currentColor" />
        </marker>
        <linearGradient id="immibot-mobile-flow" x1="0" x2="1">
          <stop offset="0" stopColor="#9f4f38" />
          <stop offset="1" stopColor="#d18462" />
        </linearGradient>
      </defs>
      <g className="immibot-architecture-labels">
        <text x="20" y="28">MOBILE WORKFLOW MAP</text>
        <text x="20" y="48">GUEST → ACCOUNT · SHARED PRODUCT LAYERS</text>
      </g>
      <g className="immibot-architecture-connectors" fill="none" stroke="url(#immibot-mobile-flow)" strokeWidth="2" markerEnd="url(#immibot-mobile-arrow)">
        <path d="M180 145V175" />
        <path d="M180 255V285" />
        <path d="M180 365V395" />
        <path d="M180 475V505" />
        <path d="M180 585V615" />
      </g>
      <g className="immibot-architecture-adapter">
        <rect x="20" y="70" width="320" height="75" rx="3" />
        <text x="36" y="92">01</text>
        <text x="36" y="116" className="node-title">Session layer</text>
        <text x="36" y="136">guest entry · history transfer</text>
      </g>
      <g className="immibot-architecture-node">
        <rect x="20" y="180" width="320" height="75" rx="3" />
        <text x="36" y="202">02</text>
        <text x="36" y="226" className="node-title">Adaptive intake</text>
        <text x="36" y="246">country + domain questions</text>
      </g>
      <g className="immibot-architecture-node">
        <rect x="20" y="290" width="320" height="75" rx="3" />
        <text x="36" y="312">03</text>
        <text x="36" y="336" className="node-title">Retrieve</text>
        <text x="36" y="356">answer stream · official-source links</text>
      </g>
      <g className="immibot-architecture-node">
        <rect x="20" y="400" width="320" height="75" rx="3" />
        <text x="36" y="422">04</text>
        <text x="36" y="446" className="node-title">Analyze</text>
        <text x="36" y="466">document checks · eligibility signals</text>
      </g>
      <g className="immibot-architecture-node">
        <rect x="20" y="510" width="320" height="75" rx="3" />
        <text x="36" y="532">05</text>
        <text x="36" y="556" className="node-title">Recommend + persist</text>
        <text x="36" y="576">next steps · history + messages</text>
      </g>
      <g className="immibot-architecture-adapter immibot-architecture-adapter-wide">
        <rect x="20" y="620" width="320" height="170" rx="3" />
        <text x="36" y="646">ADAPTER INTERFACE</text>
        <text x="36" y="677" className="node-title">Country rules × domain questions</text>
        <text x="36" y="701" className="node-title">× retrieval sources</text>
        <text x="36" y="731">Extend without rewriting</text>
        <text x="36" y="751">conversation, persistence,</text>
        <text x="36" y="771">or account layers.</text>
      </g>
      </svg>
    </>
  );
}
