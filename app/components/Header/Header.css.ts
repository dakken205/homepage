import { style } from "@vanilla-extract/css";

export const header = style({
  position: "sticky",
  top: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  zIndex: "1000",
  padding: "0 24px",
  height: "64px",
  boxShadow: "inset 0 -1px 0 0 #333",
  backdropFilter: "saturate(180%) blur(5px)",
});

export const navbar = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  maxWidth: "1400px",
});

export const stack = style({
  marginRight: "20px",
});

export const navbarLinks = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "24px",
  fontSize: "14px",
  color: "#888",
});

export const navbarLink = style({
  transition: "color 0.15s ease",
  selectors: {
    "&:hover": {
      color: "#fff",
    },
  },
});
