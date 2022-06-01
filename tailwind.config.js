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
        mint: "#5ED9D1",
        lightmint: "#BEF0ED",
        "faux-azure-mist": "#ECFFFE",
        "titanium-white": "#E5E5E5",
      },
    },
  },
  plugins: [],
};
