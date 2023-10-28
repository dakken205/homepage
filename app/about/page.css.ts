import { style, globalStyle } from "@vanilla-extract/css";

export const aboutRoot = style({});

export const visionRoot = style({
  minHeight: "calc(100vh - 64px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  padding: "48px 12px",
  gap: "16px",
  borderBottom: "1px solid #333",
});

export const eyebrow = style({
  letterSpacing: ".2rem",
  fontSize: ".9rem",
  color: "#0070f3",
});

export const visionTitle = style({
  textAlign: "center",
  maxWidth: "24ch",
  lineHeight: "1.1em",
  fontWeight: "700",
  fontSize: "2.5rem",
  marginBottom: "1.5rem",
  color: "#ededed",
});

export const visionText = style({
  maxWidth: "1000px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "0 24px",
});

globalStyle(`${visionText} p`, {
  fontSize: "1rem",
  lineHeight: "2rem",
  color: "#ededed",
});

export const visionSignature = style({
  maxWidth: "1000px",
  marginTop: "3rem",
  flexDirection: "row",
  textAlign: "right",
});

globalStyle(`${visionSignature} span`, {
  margin: "0 1rem",
  fontSize: "2rem",
  color: "#ededed",
});
