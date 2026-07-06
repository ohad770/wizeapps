import { ImageResponse } from "next/og";
import { resources } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type OpenGraphImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  const title = resource?.title ?? "WizeApps resources";
  const description =
    resource?.description ??
    "Practical guides for better software decisions before you build.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#111111",
          padding: "74px",
          border: "28px solid #f1f0fc",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              background: "#7F77DD",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            W
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            <span>WizeApps</span>
            <span style={{ color: "#5b51c9", fontSize: 18 }}>
              Practical software decisions
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#5b51c9",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 0,
              textTransform: "uppercase",
            }}
          >
            Resource guide
          </div>
          <div
            style={{
              fontSize: title.length > 60 ? 54 : 64,
              lineHeight: 1.04,
              fontWeight: 800,
              maxWidth: 940,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#555555",
              fontSize: 28,
              lineHeight: 1.35,
              maxWidth: 930,
            }}
          >
            {description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#777777",
            fontSize: 20,
          }}
        >
          <span>wizeapps.agency/resources</span>
          <span>{resource?.readTime ?? "Guide"}</span>
        </div>
      </div>
    ),
    size,
  );
}
