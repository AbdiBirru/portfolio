import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "AbdiBuilds — Full-Stack Developer";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#06060f" }}>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700 }}>
          <span style={{ color: "#f5f5fa" }}>Abdi</span>
          <span style={{ backgroundImage: "linear-gradient(135deg, #a855f7, #6366f1, #22d3ee)", backgroundClip: "text", color: "transparent" }}>Builds</span>
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#9797ab", marginTop: 16 }}>Full-Stack Developer</div>
      </div>
    ),
    { ...size }
  );
}
