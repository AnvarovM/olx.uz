module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          muted: "var(--color-muted)",
          darkPrimary: "var(--color-dark-primary)",
          darkSecondary: "var(--color-dark-secondary)",
      },
      fontFamily: {
        poppins: ['Roboto', 'Monda', 'sans-serif'] 
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@mertasan/tailwindcss-variables")],
};
