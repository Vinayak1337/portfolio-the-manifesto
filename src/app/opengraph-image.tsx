import { ImageResponse } from "next/og";

export const alt =
  "Vinayak Kumar, React and Next.js software engineer building frontend-heavy full-stack product systems.";
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
          background: "#dfe5d8",
          color: "#13251e",
          padding: "50px 58px",
          border: "16px solid #13251e",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 21,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span>VINAYAK KUMAR</span>
          <span>NEW DELHI · IST</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 112,
              letterSpacing: -4,
              lineHeight: 0.88,
            }}
          >
            Vinayak Kumar,
          </div>
          <div
            style={{
              color: "#9f4f38",
              fontSize: 82,
              letterSpacing: -2,
              lineHeight: 0.98,
            }}
          >
            software engineer
          </div>
          <div
            style={{
              fontSize: 82,
              letterSpacing: -2,
              lineHeight: 0.98,
            }}
          >
            building product systems.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "monospace",
            fontSize: 20,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", gap: 20 }}>
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Applied AI</span>
          </div>
          <span style={{ color: "#9f4f38" }}>VINAYAK1337.ME</span>
        </div>
      </div>
    ),
    size,
  );
}
