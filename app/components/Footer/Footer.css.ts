import { style } from "@vanilla-extract/css";

export const footer = style({
  padding: "36px 24px",
  width: "100%",
  minHeight: "400px",
});

export const wrapper = style({
  width: "1248px",
  margin: "0 auto",
});

export const footerGrid = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

export const stack = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flex: "inherit",
  gap: "16px",
});

export const copyright = style({
  lineHeight: "20px",
  fontSize: "14px",
  color: "#888",
});

export const socials = style({
  display: "flex",
  gap: "12px",
});

export const socialIcon = style({
  color: "#888",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      color: "#fff",
    },
  },
});
