import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

let hebrewFontData: Buffer | null = null;

async function loadHebrewFont() {
  if (!hebrewFontData) {
    hebrewFontData = await readFile(
      join(process.cwd(), "assets/fonts/Alef-Bold.ttf"),
    );
  }
  return hebrewFontData;
}

type OgCardOptions = {
  eyebrowLabel: string;
  eyebrowColor?: string;
  title: string;
  description: string;
  footerLeft: string;
  footerRight: string;
  dir?: "ltr" | "rtl";
  titleFontSize?: number;
};

function OgCard({
  eyebrowLabel,
  eyebrowColor = "#5b51c9",
  title,
  description,
  footerLeft,
  footerRight,
  dir = "ltr",
  titleFontSize = 64,
}: OgCardOptions) {
  return (
    <div
      dir={dir}
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
        fontFamily: dir === "rtl" ? "Alef" : "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          flexDirection: dir === "rtl" ? "row-reverse" : "row",
        }}
      >
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
            color: eyebrowColor,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 0,
            textTransform: dir === "rtl" ? "none" : "uppercase",
          }}
        >
          {eyebrowLabel}
        </div>
        <div
          style={{
            fontSize: title.length > 60 ? titleFontSize - 10 : titleFontSize,
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
          flexDirection: dir === "rtl" ? "row-reverse" : "row",
        }}
      >
        <span>{footerLeft}</span>
        <span>{footerRight}</span>
      </div>
    </div>
  );
}

export async function renderOgImage(options: OgCardOptions) {
  if (options.dir === "rtl") {
    const fontData = await loadHebrewFont();
    return new ImageResponse(<OgCard {...options} />, {
      ...OG_SIZE,
      fonts: [
        {
          name: "Alef",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    });
  }

  return new ImageResponse(<OgCard {...options} />, OG_SIZE);
}
