import { style, globalStyle } from "@vanilla-extract/css";

export const detailRoot = style({
  margin: "0 auto",
  maxWidth: "768px",
});

export const detailBack = style({
  display: "flex",
  height: "30px",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  color: "#888",
  marginBottom: "64px",
  width: "fit-content",
  transition: "color 0.15s ease",
});

globalStyle(`${detailBack}:hover`, {
  color: "#eaeaea",
});

export const date = style({
  color: "hsla(0, 0%, 63%, 1)",
  fontSize: "0.875rem",
  lineHeight: "1rem",
  fontWeight: "400",
  textAlign: "left",
});

export const title = style({
  color: "hsla(0,0%, 93%, 1)",
  fontSize: "clamp(28px, 5vw, 48px)",
  lineHeight: "1.2",
  fontWeight: "700",
  margin: "24px 0 48px",
});

export const authors = style({
  margin: "0.75rem 0 2rem",
  padding: "0 48px 1rem 0",
  borderBottom: "1px solid hsla(0, 0%, 18%, 1)",
});

export const prose = style({});
