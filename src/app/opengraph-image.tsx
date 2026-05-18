import { ImageResponse } from "next/og";

export const alt =
  "Vinayak Kumar, applied AI and full-stack engineer turning prototypes into production AI product systems.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050507",
          color: "#F7F2FF",
          padding: "58px 64px",
          border: "18px solid #7C4DFF",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 24,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span>VINAYAK KUMAR</span>
          <span>Applied AI / Full-stack Engineer</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 132,
              letterSpacing: -5,
              lineHeight: 0.9,
            }}
          >
            Vinayak Kumar
          </div>
          <div
            style={{
              color: "#C7B4FF",
              fontSize: 94,
              fontStyle: "italic",
              letterSpacing: -2,
              lineHeight: 0.95,
            }}
          >
            prototype to production.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            fontFamily: "monospace",
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>Next.js</span>
          <span>React Native</span>
          <span>LangChain</span>
          <span>RAG</span>
          <span>Vinayak1337</span>
        </div>
      </div>
    ),
    size,
  );
}
