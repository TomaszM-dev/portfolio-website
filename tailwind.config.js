module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg: "#020202",
      text2: "#545353",
      bg2: "#1b1a1a",
      red: "#ff0000",
      // black: "#000",
      text1: "#d1d1d1",
    },
    screens: {
      sm: "640px",
      md: "768px",
      xmd: "980px",
      lg: "1124px",

      xl: "1300px",
      "2xl": "1536px",
    },

    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(17rem,1fr))",
        bestS: "repeat(auto-fit,minmax(14rem,1fr))",
      },
    },
  },
};
