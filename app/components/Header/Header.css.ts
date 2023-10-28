import { style, keyframes } from "@vanilla-extract/css";

const crossDown = keyframes({
  "0%": { transform: "rotate(0deg) translate(0px, 0px)" },
  "100%": { transform: "rotate(45deg) translate(.4px, -4.8px)" },
});

const crossDownReverse = keyframes({
  "0%": { transform: "rotate(45deg) translate(.4px, -4.8px)" },
  "100%": { transform: "rotate(0deg) translate(0px, 0px)" },
});

const crossUp = keyframes({
  "0%": { transform: "rotate(0deg) translateY(0px)" },
  "100%": { transform: "rotate(-45deg) translateY(4.5px)" },
});

const crossUpReverse = keyframes({
  "0%": { transform: "rotate(-45deg) translateY(4.5px)" },
  "100%": { transform: "rotate(0deg) translateY(0px)" },
});

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

export const navbarTextLinks = style({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  fontSize: "14px",
  color: "#888",
  "@media": {
    "screen and (max-width: 748px)": {
      display: "none",
    },
  },
});

export const menuButton = style({
  height: "100%",
  width: "36px",
  border: "none",
  background: "transparent",
  outline: "none",
  "@media": {
    "screen and (min-width: 748px)": {
      display: "none",
    },
  },
});

export const menuToggle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "36px",
  width: "36px",
  cursor: "pointer",
  gap: "8px",
  selectors: {
    "&::before": {
      content: " ",
      backgroundColor: "#fff",
      height: "1.5px",
      width: "22px",
    },
    "&::after": {
      content: " ",
      backgroundColor: "#fff",
      height: "1.5px",
      width: "22px",
    },
  },
});

export const menuToggleOpen = style({
  selectors: {
    "&::before": {
      animation: `${crossDown} 0.15s ease forwards`,
      transformOrigin: "0 0",
    },
    "&::after": {
      animation: `${crossUp} 0.15s ease forwards`,
      transformOrigin: "0 0",
    },
  },
});

export const menuToggleClose = style({
  selectors: {
    "&::before": {
      animation: `${crossDownReverse} 0.15s ease forwards`,
      transformOrigin: "0 0",
    },
    "&::after": {
      animation: `${crossUpReverse} 0.15s ease forwards`,
      transformOrigin: "0 0",
    },
  },
});

export const current = style({
  color: "#fff",
  selectors: {
    "&:hover": {
      color: "#fff",
    },
  },
});

export const menu = style({
  position: "fixed",
  top: "64px",
  backgroundColor: "#000",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "calc(100vh - 64px)",
  padding: "24px",
  zIndex: "10",
});

export const menuLinks = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  fontSize: "14px",
  color: "#696969",
});
