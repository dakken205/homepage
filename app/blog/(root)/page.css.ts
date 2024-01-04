import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

export const blog = style({
  width: "100%",
  maxWidth: "1216px",
  margin: "60px auto 60px",
  padding: "0 24px",
});

export const blogRoot = style({
  width: "100%",
  textAlign: "center",
});

export const blogTitle = style({
  fontSize: "2rem",
  fontWeight: "550",
  lineHeight: "2.5rem",
  textAlign: "left",
});

globalStyle(`${blogTitle} span`, {
  fontWeight: 650,
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
  boxShadow: `0 0 0 1px ${vars.ds.gray[200]},
              0px 1px 2px ${vars.ds.gray[300]}`,
});

export const stack = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "12px",
});

export const date = style({
  color: vars.ds.gray[900],
  fontSize: "0.875rem",
  lineHeight: "1.5rem",
  fontWeight: "400",
  textAlign: "left",
});

export const title = style({
  fontSize: "1.25rem",
  fontWeight: "550",
  lineHeight: "2rem",
  textAlign: "left",
  width: "fit-content",
  minHeight: "4rem",
  padding: "12px 0",
  transition: "color 0.2s ease",
});

globalStyle(`${title}:hover`, {
  color: vars.geist.foreground,
});

export const prose = style({
  height: "8rem",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5rem",
  textAlign: "left",
  marginTop: "12px",
  overflow: "hidden",
  backgroundColor: "initial !important",
  "@media": {
    "(prefers-color-scheme: dark)": {
      fontWeight: "250",
    },
  },
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
  color: vars.ds.gray[900],
  background: vars.ds.gray[100],
  height: "36px",
  fontSize: "14px",
  fontWeight: "500",
  alignItems: "center",
  borderRadius: "6px",
  transitionProperty: "background, color",
  transitionDuration: ".2s",
  cursor: "pointer",
});

globalStyle(`${readMore}:hover`, {
  color: vars.ds.gray[1000],
  background: vars.ds.gray[200],
  textDecoration: "none",
});
