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
      lg: "1024px",
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
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out 1",
      },
      backgroundImage: {
        "benefits-background-xl":
          "url('/images/founders/benefit-background-xl.svg')",
        "benefits-background": "url('/images/founders/benefit-background.svg')",
        sea: "url('/images/founders/sea.svg')",
        "sea-lg": "url('/images/founders/sea-lg.svg')",
        products: "url('/images/founders/products-background.svg')",
        "products-xl": "url('/images/founders/products-background-xl.svg')",
        sky: "linear-gradient(180deg, #ECFFFE 0%, #BEF0ED 58.58%, #BEF0ED 100%)",
      },
      transitionDuration: {
        1300: "1300ms",
      },
      height: {
        50: "12.5rem",
        100: "25rem",
        328: "82rem",
        350: "87.5rem",
        368: "92rem",
      },
      width: {
        50: "12.5rem",
        62: "15.5rem",
        350: "87.5rem",
      },
      spacing: {
        4.4: "18.5px",
        7: "1.75rem",
        26.2: "6.55rem",
        27: "6.68rem",
        31.8: "7.95rem",
        66: "16.5rem",
        68: "17rem",
        85: "21.25rem",
        90: "22.5rem",
        105: "26.25rem",
        106: "26.5rem",
        112.5: "28.125rem",
        115: "28.75rem",
        120: "30rem",
        134.5: "33.625rem",
        165: "41.25rem",
        166: "41.5rem",
        172: "43rem",
        188: "47rem",
        228: "57rem",
        238: "59.5rem",
        250: "62.5rem",
        258: "64.5rem",
        288: "72rem",
        367: "91.75rem",
        392: "98rem",
        396: "99rem",
        428: "107rem",
      },
      colors: {
        fontMain: "#171753",
        "dark-blue": "#171753",
        darkmint: "#237B75",
        mint: "#5ED9D1",
        midmint: "#23ABA2",
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
        darkpurple: "#353570",
        "dark-green": "#087980",
        "benefit-shadow": "#e3e0eb",
      },
      boxShadow: {
        benefit: "0 0 300px 50px #e3e0eb",
      },
      dropShadow: {
        "3xl": "0px 8px 6px rgba(0, 0, 0, 0.45)",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            transform: "translateY(25%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
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
