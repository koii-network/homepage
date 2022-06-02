module.exports = {
  mode: "jit",
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
        "dark-blue": "#171753",
        mint: "#5ED9D1",
        "turquoise-light": "#BEF0ED",
        "faux-azure-mist": "#ECFFFE",
        "titanium-white": "#E5E5E5",
        koiiblue: "#171753",
      },
    },
  },
  plugins: [],
};
