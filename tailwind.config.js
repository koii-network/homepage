module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Sora", "sans-serif"],
    },

    extend: {
      colors: {
        mint: "#5ED9D1",
        lightmint: "#BEF0ED",
        "faux-azure-mist": "#ECFFFE",
        koiiblue: "#171753",
      },
    },
  },
  plugins: [],
};
