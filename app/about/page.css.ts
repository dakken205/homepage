import { style, globalStyle, keyframes } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const backgroundRotation = keyframes({
  "0%": {
    backgroundPosition: "50% 0%",
  },
  "12.5%": {
    backgroundPosition: "75% 25%",
  },
  "25%": {
    backgroundPosition: "100% 50%",
  },
  "37.5%": {
    backgroundPosition: "75% 75%",
  },
  "50%": {
    backgroundPosition: "50% 100%",
  },
  "62.5%": {
    backgroundPosition: "25% 75%",
  },
  "75%": {
    backgroundPosition: "0% 50%",
  },
  "87.5%": {
    backgroundPosition: "25% 25%",
  },
  "100%": {
    backgroundPosition: "50% 0%",
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
  color: "#ededed",
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
});

export const backgroundGradient = style({
  backgroundSize: "200% 200%",
  backgroundImage:
    "radial-gradient(farthest-corner at 0% 60%, #010630 0%, transparent 100%), radial-gradient(farthest-corner at 50% 10%, #300101 0%, transparent 100%), radial-gradient(farthest-corner at 80% 60%, #302D01 0%, transparent 100%)",
  animation: `${backgroundRotation} 20s linear infinite`,
});

// Results Part

export const resultsRoot = style({
  maxWidth: "812px",
  margin: "0 auto",
  padding: "48px 24px",
  color: vars.geist.foreground,
});

export const resultsTitle = style({
  color: vars.accents[7],
  margin: "40px 0",
});

export const results = style({
  borderLeft: `1px solid ${vars.accents[2]}`,
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
  color: vars.accents[5],
  animation: `${fadeIn} .3s ease-in-out forwards`,
  "@media": {
    "screen and (max-width: 768px)": {
      borderBottom: `1px solid ${vars.accents[2]}`,
      marginBottom: "24px",
    },
  },
});

export const resultItemDate = style({
  color: vars.accents[5],
  fontSize: "14px",
});

export const resultItemTitle = style({
  color: vars.accents[5],
  fontSize: "1.8rem",
  fontWeight: "700",
  lineHeight: "2.5rem",
  marginBottom: "15px",
});

export const informationRoot = resultsRoot;
export const informationTitle = resultsTitle;

export const informationTable = style({
  width: "100%",
  borderCollapse: "collapse",
});

globalStyle(`${informationTable} th`, {
  color: vars.accents[5],
  textAlign: "center",
  padding: "12px",
  borderBottom: `1px solid ${vars.accents[2]}`,
});

globalStyle(`${informationTable} td`, {
  color: vars.accents[5],
  textAlign: "left",
  padding: "12px",
  borderBottom: `1px solid ${vars.accents[2]}`,
});
