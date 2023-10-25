import { style, globalStyle } from "@vanilla-extract/css";

export const textGradient = style({
  background: "linear-gradient(180deg, #fff, #adadad)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const homeRoot = style({});

export const introRoot = style({
  width: "100%",
  minHeight: "500px",
  maxWidth: "calc(1234px + 56px * 2)",
  textAlign: "center",
  margin: "80px auto",
  padding: "0 24px",
  overflow: "hidden",
  isolation: "isolate",
});

export const introTitle = style({
  fontWeight: "800",
  fontSize: "max(48px, min(5vw, 76px))",
  lineHeight: "1",
  padding: "24px",
});

export const introSubtitle = style({
  color: "#888",
  fontSize: "max(15px, min(2vw, 20px))",
  lineHeight: "1.8",
  fontWeight: "400",
  padding: "40px 10px",
});

globalStyle(`${introSubtitle} strong`, {
  fontWeight: "500",
  color: "#fafafa",
});

export const introButtons = style({
  display: "flex",
  justifyContent: "center",
  height: "48px",
});

export const introButtonBase = style({
  display: "flex",
  fontSize: "1rem",
  width: "8rem",
  lineHeight: "1.5rem",
  borderRadius: "8px",
  fontWeight: "500",
  padding: "0 12px",
  margin: "0 8px",
  boxShadow: "0 0 0 1px transparent",
  maxWidth: "100%",
  alignItems: "center",
  justifyContent: "center",
  transitionProperty: "border-color, background, color, transform, box-shadow",
  transitionDuration: ".15s",
  transitionTimingFunction: "ease",
  cursor: "pointer",
  userSelect: "none",
});

export const introWhiteButton = style({
  backgroundColor: "#fff",
  color: "#000",
  selectors: {
    "&:hover": {
      backgroundColor: "#ededed",
    },
  },
});

export const introBlackButton = style({
  backgroundColor: "#000",
  color: "#fff",
  border: "1px solid hsla(0,0%, 100%, .14)",
  selectors: {
    "&:hover": {
      backgroundColor: "#0a0a0a",
    },
  },
});

export const departmentsRoot = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 16px 96px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const departmentsTitle = style({
  width: "100%",
  marginBottom: "24px",
  textAlign: "center",
  fontSize: "32px",
  lineHeight: "1.25",
  fontWeight: "700",
  color: "#fafafa",
});

export const departmentsSubtitle = style({
  width: "100%",
  maxWidth: "930px",
  textAlign: "center",
  fontSize: "16px",
  lineHeight: "1.7",
  fontWeight: "400",
  color: "#888",
});

export const departmentsGrid = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "16px",
  marginTop: "48px",
});

export const featureCard = style({
  minHeight: "380px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #333",
  transitionProperty: "border-color, background",
  transitionDuration: ".15s",
});

export const featureCardTitle = style({
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "32px",
  color: "#fff",
});

export const featureCardSubtitle = style({
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#888",
});
