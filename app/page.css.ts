import { style, globalStyle } from "@vanilla-extract/css";

export const homeRoot = style({});

export const introRoot = style({
  width: "100%",
  maxWidth: "calc(1234px + 56px * 2)",
  textAlign: "center",
  margin: "80px auto",
  padding: "0 56px",
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
  padding: "40px 32px",
  width: "calc(100% - 1% * 2)",
  left: "1%",
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
