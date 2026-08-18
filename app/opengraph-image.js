import { ImageResponse } from "next/og";

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
          background: "linear-gradient(135deg, #0e5c3f 0%, #146b47 55%, #c6f135 100%)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ color: "#c6f135", fontSize: 32, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase" }}>
          GoodLuck Scrap
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 0.95, maxWidth: 920 }}>
            Scrap metal buying and recycling in Saudi Arabia
          </div>
          <div style={{ color: "#f0e7d6", fontSize: 34, lineHeight: 1.25, maxWidth: 840 }}>
            Collection, clearance, and industrial surplus support for working sites.
          </div>
        </div>
      </div>
    ),
    size
  );
}
