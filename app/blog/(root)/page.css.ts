import { style, globalStyle } from "@vanilla-extract/css";

export const blog = style({
  width: "100%",
  maxWidth: "1216px",
  margin: "60px auto 60px",
  padding: "0 24px",
});

export const blogRoot = style({
  width: "100%",
  color: "hsla(0,0%, 93% ,1)",
  textAlign: "center",
});

export const text = style({
  color: "hsla(0,0%, 93% ,1)",
  fontSize: "2rem",
  fontWeight: "700",
  lineHeight: "2.5rem",
  textAlign: "left",
});

export const posts = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "16px",
  marginTop: "48px",
});

export const post = style({
  display: "flex",
  width: "100%",
  gap: "16px",
  flexDirection: "column",
  padding: "12px",
  borderRadius: "12px",
  boxShadow:
    "0 0 0 1px hsla(0, 0%, 100%, .145) ,0px 1px 2px rgba(0, 0, 0, .16)",
});

export const stack = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "12px",
});

export const date = style({
  color: "hsla(0,0%, 63%, 1)",
  fontSize: "0.875rem",
  lineHeight: "1.5rem",
  fontWeight: "400",
  textAlign: "left",
});

export const title = style({
  color: "hsla(0,0%, 93%, 1)",
  fontSize: "1.25rem",
  fontWeight: "600",
  lineHeight: "2rem",
  textAlign: "left",
  width: "fit-content",
  minHeight: "4rem",
  padding: "12px 0",
  transition: "color 0.2s ease",
});

globalStyle(`${title}:hover`, {
  color: "hsla(0,0%, 100%, 1)",
});

export const prose = style({
  color: "hsla(0,0%, 93%, 1)",
  height: "8rem",
  fontSize: "0.9rem",
  fontWeight: "250",
  lineHeight: "1.5rem",
  textAlign: "left",
  marginTop: "12px",
  overflow: "hidden",

  backgroundColor: "initial !important",
});

globalStyle(`${prose} :not(p:nth-of-type(1), p:nth-of-type(2))`, {
  display: "none",
});

globalStyle(`${prose} p:nth-of-type(1) > *, ${prose} p:nth-of-type(2) > *`, {
  display: "block",
});

export const readMore = style({
  display: "flex",
  justifyContent: "center",
  height: "36px",
  background: "hsla(0,0%, 10% ,1)",
  color: "hsla(0,0%, 63% ,1)",
  fontSize: "14px",
  fontWeight: "500",
  alignItems: "center",
  borderRadius: "6px",
  transitionProperty: "background, color",
  transitionDuration: ".2s",
  cursor: "pointer",
});

globalStyle(`${readMore}:hover`, {
  color: "hsla(0,0%, 93% ,1)",
  background: "hsla(0,0%, 12%, 1)",
  textDecoration: "none",
});
