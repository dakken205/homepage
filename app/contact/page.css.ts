import { style, globalStyle } from "@vanilla-extract/css";

export const contact = style({
  padding: "0 80px 110px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const contactTitle = style({
  marginTop: "70px",
  fontSize: "64px",
});

export const contactSubtitle = style({
  marginTop: "14px",
  fontSize: "24px",
  lineHeight: "34px",
});

export const formContainer = style({
  width: "clamp(320px, 100%, 600px)",
  marginTop: "30px",
});

export const form = style({
  width: "100%",
  padding: "32px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

export const stack = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flex: "initial",
});

export const label = style({
  display: "block",
  fontSize: "13px",
  color: "hsla(0,0% ,63% ,1)",
  marginBottom: "8px",
  cursor: "text",
});

export const input = style({
  fontSize: "100%",
  width: "100%",
  height: "40px",
  minWidth: "0",
  borderRadius: "6px",
  border: "none",
  padding: "0 12px",
  background: "#0a0a0a",
  color: "#fff",
  lineHeight: "normal",
  order: "1",
  outline: "none",
  transition: "border-color .15s, box-shadow .15s",
  selectors: {
    "&:hover": {
      boxShadow: "0 0 0 1px hsla(0,0%, 33% ,1)",
    },
    "&:focus": {
      borderColor: "hsla(0,0%, 80% ,1)",
      boxShadow: "0 0 0 1px hsla(0,0%, 63% ,1)",
    },
  },
});

export const textarea = style({
  height: "120px",
  resize: "none",
});

export const button = style({
  height: "40px",
  width: "164px",
  background: "hsla(0,0%, 10% ,1)",
  color: "hsla(0,0%, 56% ,1)",
  borderRadius: "6px",
  fontSize: "0.875rem",
  fontWeight: "500",
  padding: "0 12px",
  justifyContent: "center",
  alignItems: "center",
  transitionProperty: "border-color, background, color, transform, box-shadow",
  transitionDuration: ".15s",
  transitionTimingFunction: "ease",
  outline: "none",
  border: "0",
  textDecoration: "none",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      background: "hsla(0,0%, 20% ,1)",
      boxShadow: "0 0 0 1px hsla(0,0%, 63% ,1)",
    },
    "&:focus": {
      borderColor: "hsla(0,0%, 80% ,1)",
      boxShadow: "0 0 0 1px hsla(0,0%, 63% ,1)",
    },
  },
});

export const privacyText = style({
  textAlign: "center",
  color: "hsla(0,0%, 63% ,1)",
  fontSize: "0.875rem",
  letterSpacing: "initial",
  fontWeight: "400",
  lineHeight: "1.5rem",
});

globalStyle(`${privacyText} a`, {
  color: "hsla(0,0%, 80% ,1)",
});
