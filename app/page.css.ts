import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const textGradient = style({
  background: vars.text.gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const homeRoot = style({});

export const introRoot = style({
  width: "100%",
  minHeight: "500px",
  maxWidth: "calc(1234px + 56px * 2)",
  textAlign: "center",
  margin: "0 auto clamp(20px, 7rem, 120px)",
  padding: "0 24px",
  overflow: "hidden",
  isolation: "isolate",
});

export const introHeader = style({
  height: "clamp(20px, 5rem, 80px)",
});

export const introTitle = style({
  fontWeight: "800",
  fontSize: "max(48px, min(5vw, 76px))",
  lineHeight: "1",
  padding: "24px",
  whiteSpace: "pre-wrap",
  wordBreak: "keep-all",
});

export const introSubtitle = style({
  color: vars.accents[5],
  fontSize: "max(15px, min(2vw, 20px))",
  lineHeight: "1.8",
  fontWeight: "400",
  padding: "40px 10px",
});

globalStyle(`${introSubtitle} strong`, {
  color: vars.accents[8],
  fontWeight: "500",
});

export const introButtons = style({
  display: "flex",
  justifyContent: "center",
  height: "96px",
});

export const introButtonBase = style({
  display: "flex",
  fontSize: "1rem",
  width: "8rem",
  height: "48px",
  lineHeight: "1.5rem",
  borderRadius: "8px",
  fontWeight: "500",
  padding: "0 12px",
  margin: "auto 8px",
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
  backgroundColor: vars.geist.foreground,
  color: vars.geist.background,
  selectors: {
    "&:hover": {
      backgroundColor: vars.accents[7],
    },
  },
});

export const introBlackButton = style({
  backgroundColor: vars.geist.background,
  color: vars.geist.foreground,
  border: `1px solid ${vars.accents[2]}`,
  selectors: {
    "&:hover": {
      backgroundColor: vars.accents[1],
    },
  },
});

// Department Part

export const departmentsRoot = style({
  background: `linear-gradient(180deg,
                               ${vars.geist.background} 30%,
                               ${vars.accents[1]} 50%,
                               ${vars.accents[1]} 100%)`,
  borderBottom: `1px solid ${vars.accents[2]}`,
  padding: "0 16px 96px",
});

export const department = style({
  maxWidth: "1200px",
  margin: "0 auto",
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
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "16px",
  marginTop: "48px",
});

export const activityCard = style({
  minHeight: "380px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "24px",
  borderRadius: "12px",
  border: `1px solid ${vars.accents[2]}`,

  transitionProperty: "border-color, background",
  transitionDuration: ".15s",
});

export const activityCardMini = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "24px",
  borderRadius: "12px",
  border: `1px solid ${vars.accents[2]}`,
  transitionProperty: "border-color, background",
  transitionDuration: ".15s",
});

export const activityCardTitle = style({
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "32px",
  color: vars.geist.foreground,
});

export const activityCardSubtitle = style({
  fontSize: "14px",
  lineHeight: "1.5",
  color: vars.accents[5],
});

// Department Part End

// Features Part

export const featuresRoot = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "96px 16px",
});

export const featuresMain = style({});

export const featuresTitle = style({
  fontSize: "32px",
});

export const features = style({
  color: vars.accents[5],
  margin: "48px 0",
});

globalStyle(`${features} li`, {
  margin: "5px 0",
});

// Features Part End

// Promotion Part

export const promotionRoot = style({
  maxWidth: "1500px",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "60px 16px 96px",
  overflow: "hidden",
});

export const promotionTitle = style({
  width: "100%",
  marginBottom: "48px",
  textAlign: "center",
  fontSize: "32px",
  lineHeight: "1.25",
  fontWeight: "700",
});

export const promotions = style({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  position: "relative",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      width: "100vw",
      height: "100%",
      background: `linear-gradient(transparent 0%, ${vars.geist.background} 120%)`,
      zIndex: "2",
    },
  },
});

export const promotionsStack = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const promotionCard = style({
  borderRadius: "6px",
  overflow: "hidden",
});

// Promotion Part End
