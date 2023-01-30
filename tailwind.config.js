module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "728px",
      lg: "1440px",
      xl: "1440px",
      "2xl": "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "5rem",
        "2xl": "18rem",
      },
    },
    fontFamily: {
      sans: ["Sora", "sans-serif"],
    },
    extend: {
      transitionDuration: {
        1300: "1300ms",
      },
      colors: {
        fontMain: "#171753",
        "dark-blue": "#171753",
        darkmint: "#237B75",
        mint: "#5ED9D1",
        lightmint: "#BEF0ED",
        "turquoise-light": "#BEF0ED",
        "faux-azure-mist": "#ECFFFE",
        "titanium-white": "#E5E5E5",
        gold: "#FFC78F",
        koiiblue: "#171753",
        koiiorange: "#FFC78F",
        koiipurple: "#4D3D8D",
        koiipurpledark: "#353570",
        "fish-yellow": "#FFC78F",
        purple: "#4D3D8D",
        "dark-green": "#087980",
      },
      dropShadow: {
        "3xl": "0px 10px 6px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        identity: {
          "0%, 30%, 50%, 100%": { opacity: 0.2 },
          "10%": { opacity: 1 },
        },
        creativity: {
          "0%, 50%, 100%": { opacity: 0.2 },
          "80%": { opacity: 1 },
        },
        content: {
          "0%, 20%, 80%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
        rewards: {
          "0%, 10%, 70%, 100%": { opacity: 0.2 },
          "30%": { opacity: 1 },
        },
        attention: {
          "0%, 40%, 100%": { opacity: 0.2 },
          "70%": { opacity: 1 },
        },
        guy: {
          "0%, 33%, 100%": { opacity: 0 },
          "3%, 31%": { opacity: 1 },
        },
        guitar: {
          "0%, 32%, 67%, 100%": { opacity: 0 },
          "35%, 64%": { opacity: 1 },
        },
        paint: {
          "0%, 66%, 100%": { opacity: 0 },
          "68%, 97%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
