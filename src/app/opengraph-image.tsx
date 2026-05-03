import { ImageResponse } from "next/og";

export const alt =
  "Vinayak Kumar, AI full-stack engineer turning AI prototypes into production product systems.";
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
          background: "#F2EDE4",
          color: "#0A0908",
          padding: "58px 64px",
          border: "18px solid #0A0908",
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
          <span>AI Full-Stack Engineer</span>
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
              color: "#B95D1F",
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
          <span>TypeScript</span>
        </div>
      </div>
    ),
    size,
  );
}
