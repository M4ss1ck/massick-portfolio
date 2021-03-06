module.exports = {
  //important: true,
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25vh",
      "1/2": "50vh",
      "3/4": "75vh",
      full: "100vh",
    },
    fontFamily: {
      montserrat: ["Montserrat, sans-serif"],
      rammetto: ["Rammetto One, cursive"],
      merriweather: ["Merriweather, serif"],
    },
    extend: {
      screens: {
        xxs: "320px",
        xs: "475px",
      },
      maxWidth: {
        pantalla: "100vw",
      },
      colors: {
        primario: "#058ED9",
        secundario: "#0E9735", //#049e2a
        terciario: "#a72772",
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.gray.300"),
              '[class~="lead"]': { color: theme("colors.gray.400") },
              a: { color: theme("colors.gray.500"), textDecoration: "none" },
              strong: { color: theme("colors.gray.300") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.gray.400"),
                borderLeftColor: theme("colors.gray.200"),
              },
              h1: { color: theme("colors.secundario") },
              h2: { color: theme("colors.secundario") },
              h3: { color: theme("colors.secundario") },
              h4: { color: theme("colors.secundario") },
              th: { color: theme("colors.gray.600") },
              code: { color: theme("colors.gray.500") },
              "a code": { color: theme("colors.gray.500") },
              pre: {
                color: theme("colors.gray.400"),
                backgroundColor: theme("colors.gray.800"),
                textShadow: "none",
              },
              code: {
                color: theme("colors.gray.400"),
                backgroundColor: theme("colors.gray.800"),
                textShadow: "none",
              },
              thead: {
                color: theme("colors.gray.500"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") },
              ".token.operator": { background: "none !important" },
            },
          },
        }
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
}
