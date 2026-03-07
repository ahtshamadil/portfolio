import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ahtsham Adil - Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050508 0%, #111827 50%, #050508 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent glow orbs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#7c3aed",
              marginBottom: 24,
              fontFamily: "monospace",
            }}
          >
            {"<AA />"}
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              background: "linear-gradient(135deg, #7c3aed, #00d4ff)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Ahtsham Adil
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 28,
              color: "#9ca3af",
              marginBottom: 32,
            }}
          >
            Full Stack Web Developer
          </div>

          {/* Tech pills */}
          <div
            style={{
              display: "flex",
              gap: 12,
            }}
          >
            {["React", "Node.js", "MongoDB", "TypeScript", "AWS"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 999,
                    border: "1px solid rgba(124,58,237,0.3)",
                    color: "#a78bfa",
                    fontSize: 16,
                    background: "rgba(124,58,237,0.1)",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #7c3aed, #00d4ff)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
