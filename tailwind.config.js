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
        fontMain: "#171753",
        "dark-blue": "#171753",
        mint: "#5ED9D1",
        lightmint: "#BEF0ED",
        "turquoise-light": "#BEF0ED",
        "faux-azure-mist": "#ECFFFE",
        "titanium-white": "#E5E5E5",
        gold: "#FFC78F",
        koiiblue: "#171753",
      },
    },
  },
  plugins: [],
};
