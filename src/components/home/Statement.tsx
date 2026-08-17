import type { ReactNode } from "react";

export function Statement({
  caption,
  headline,
  illustration,
}: Readonly<{
  caption: string;
  headline: string;
  illustration: ReactNode;
}>) {
  const lines = headline.split("\n");

  return (
    <section className="pin-type" data-pin-section aria-label="Manifesto statement">
      <div className="pin">
        {illustration}
        <div className="statement-marker" aria-hidden="true">
          01 / OPERATING PRINCIPLE
        </div>
        <div className="giant" data-pin-giant>
          {lines.slice(0, -1).map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
          <span>
            prototype <em>→ production.</em>
          </span>
        </div>
        <div className="sub-caption" aria-hidden="true">
          {caption}
        </div>
      </div>
    </section>
  );
}
