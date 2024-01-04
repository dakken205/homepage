import { globalStyle } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  maxWidth: "100vw",
  overflowX: "hidden",
});

globalStyle("body", {
  height: "100dvh",
  color: vars.text.color,
  background: vars.geist.background,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("ul, ol", {
  listStyle: "none",
});
