import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

export const alt = `${portfolioData.name} — ${portfolioData.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0407 0%, #020617 60%, #000 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#dc143c",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            color: "#f1f5f9",
            fontSize: 110,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: 28,
          }}
        >
          {portfolioData.name}
        </div>
        <div
          style={{
            display: "flex",
            color: "#94a3b8",
            fontSize: 36,
            fontWeight: 400,
            marginBottom: 48,
          }}
        >
          {portfolioData.role}
        </div>
        <div
          style={{
            display: "flex",
            width: 96,
            height: 4,
            background: "#dc143c",
            marginBottom: 48,
          }}
        />
        <div style={{ display: "flex", color: "#64748b", fontSize: 28 }}>
          kenney-personal.vercel.app
        </div>
      </div>
    ),
    size
  );
}
