/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          500: "#010101",
          400: "#141613",
          300: "#20221F",
          200: "#474946",
          100: "#F0F0F0",
          50: "#B5B3B0",
        },

        yellow: {
          200: "#FBBA08",
          100: "#E0C56A",
        },

        red: {
          500: "#80362D",
        },

        base: {
          primary: "#141613",
        },

        card: {
          stroke: "#F0F0F0",
          primary: "#20221F",
          secondary: "#E0C56A",
        },

        processbar: {
          primary: "#80362D",
          secondary: "#010101",
        },

        btn: {
          primary: "#FBBA08",
          primaryhover: "#E0C56A",
          secondary: "#20221F",
          secondaryhover: "#474946",
        },
      },
    },
  },
};
