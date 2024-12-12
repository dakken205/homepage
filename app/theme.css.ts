import {
  globalStyle,
  createGlobalThemeContract,
  assignVars,
} from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  geist: {
    foreground: "--geist-foreground",
    background: "--geist-background",
  },
  text: {
    gradient: "--text-gradient",
    color: "--text-color",
  },
  hovered: {
    backgroundColor: "--hovered-background-color",
  },
  accents: {
    1: "--accents-1",
    2: "--accents-2",
    3: "--accents-3",
    4: "--accents-4",
    5: "--accents-5",
    6: "--accents-6",
    7: "--accents-7",
    8: "--accents-8",
  },
  ds: {
    gray: {
      100: "--ds-gray-100",
      200: "--ds-gray-200",
      300: "--ds-gray-300",
      400: "--ds-gray-400",
      500: "--ds-gray-500",
      600: "--ds-gray-600",
      700: "--ds-gray-700",
      800: "--ds-gray-800",
      900: "--ds-gray-900",
      1000: "--ds-gray-1000",
    },
  },
});

export const theme = globalStyle(":root", {
  "@media": {
    // "screen and (prefers-color-scheme: light)": {
    //   vars: assignVars(vars, {
    //     geist: {
    //       foreground: "#000",
    //       background: "#fff",
    //     },
    //     text: {
    //       color: "#171717",
    //       gradient: "linear-gradient(180deg, #555, #000)",
    //     },
    //     hovered: { backgroundColor: "#ededed" },
    //     accents: {
    //       1: "#fafafa",
    //       2: "#eaeaea",
    //       3: "#999",
    //       4: "#888",
    //       5: "#666",
    //       6: "#444",
    //       7: "#333",
    //       8: "#111",
    //     },
    //     ds: {
    //       gray: {
    //         100: "hsl(0, 0%, 95%)",
    //         200: "hsl(0, 0%, 92%)",
    //         300: "hsl(0, 0%, 90%)",
    //         400: "hsl(0, 0%, 92%)",
    //         500: "hsl(0, 0%, 79%)",
    //         600: "hsl(0, 0%, 66%)",
    //         700: "hsl(0, 0%, 56%)",
    //         800: "hsl(0, 0%, 49%)",
    //         900: "hsl(0, 0%, 39%)",
    //         1000: "hsl(0, 0%, 9%)",
    //       },
    //     },
    //   }),
    // },
    screen: {
      vars: assignVars(vars, {
        geist: {
          foreground: "#fff",
          background: "#000",
        },
        text: {
          color: "#ededed",
          gradient: "linear-gradient(180deg, #fff, #adadad)",
        },
        hovered: {
          backgroundColor: "#0a0a0a",
        },
        accents: {
          8: "#fafafa",
          7: "#eaeaea",
          6: "#999",
          5: "#888",
          4: "#666",
          3: "#444",
          2: "#333",
          1: "#111",
        },
        ds: {
          gray: {
            100: "hsl(0, 0%, 10%)",
            200: "hsl(0, 0%, 12%)",
            300: "hsl(0, 0%, 16%)",
            400: "hsl(0, 0%, 18%)",
            500: "hsl(0, 0%, 27%)",
            600: "hsl(0, 0%, 53%)",
            700: "hsl(0, 0%, 56%)",
            800: "hsl(0, 0%, 49%)",
            900: "hsl(0, 0%, 64%)",
            1000: "hsl(0, 0%, 93%)",
          },
        },
      }),
    },
  },
});
