import { style, globalStyle } from "@vanilla-extract/css";

export const success = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "clamp(320px, 100%, 600px)",
  marginTop: "80px",
  padding: "0 12px",
});

export const successTitle = style({
  fontSize: "32px",
  padding: "24px",
});

globalStyle(`${success} p`, {
  color: "hsla(0,0%, 63% ,1)",
  fontSize: "0.875rem",
  letterSpacing: "initial",
  fontWeight: "400",
  lineHeight: "1.5rem",
});
