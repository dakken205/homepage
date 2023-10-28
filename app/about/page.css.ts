import { style, globalStyle, keyframes } from "@vanilla-extract/css";

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

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

export const resultsRoot = style({
  maxWidth: "812px",
  margin: "0 auto",
  padding: "48px 24px",
});

export const resultsTitle = style({
  color: "#ededed",
  margin: "40px 0",
});

export const results = style({
  borderLeft: "1px solid #333",
  paddingLeft: "43px",
  "@media": {
    "screen and (max-width: 768px)": {
      paddingLeft: "0",
      borderLeft: "none",
    },
  },
});

export const resultItem = style({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "56px",
  gap: "12px",
  opacity: 0,
  color: "#ededed",
  animation: `${fadeIn} .3s ease-in-out forwards`,
  "@media": {
    "screen and (max-width: 768px)": {
      borderBottom: "1px solid #333",
      marginBottom: "24px",
    },
  },
});

export const resultItemDate = style({
  color: "#888888",
  fontSize: "14px",
});

export const resultItemTitle = style({
  color: "#ededed",
  fontSize: "1.8rem",
  fontWeight: "700",
  lineHeight: "2.5rem",
  marginBottom: "15px",
});
