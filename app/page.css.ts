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
  margin: "clamp(20px, 5rem, 80px) auto clamp(20px, 7rem, 120px)",
  padding: "0 24px",
  overflow: "hidden",
  isolation: "isolate",
});

export const introHeader = style({
  padding: "32px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "16px 0",
    },
    "screen and (max-width: 480px)": {
      padding: "0px 0",
    },
  },
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

export const visionRoot = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 16px 96px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

export const departmentsRoot = style({
  background: "linear-gradient(180deg, #000 30%, #111 50%, #111 100%)",
  borderBottom: "1px solid #333",
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
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
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
  border: "1px solid #333",
  transitionProperty: "border-color, background",
  transitionDuration: ".15s",
});

export const activityCardMini = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "24px",
  borderRadius: "12px",
  border: "1px solid #333",
  transitionProperty: "border-color, background",
  transitionDuration: ".15s",
});

export const activityCardTitle = style({
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "32px",
  color: "#fff",
});

export const activityCardSubtitle = style({
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#888",
});

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
  margin: "48px 0",
  color: "#888",
});

globalStyle(`${features} li`, {
  margin: "5px 0",
});

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
  color: "#fafafa",
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
      width: "100%",
      height: "100%",
      background: "linear-gradient(transparent 0%, #000 120%)",
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
