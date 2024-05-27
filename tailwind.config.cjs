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
    fontSize: {
<<<<<<< HEAD
      breadcrumb_buttontext_mobil_xxs: "10px",
      cart_mobil_xs: "12px",
      mobil_sm: "14px",
      mobil_md: "16px",
      mobil_lg: "18px",
      mobil_xl: "20px",
      mobil_2xl: "24px",
      mobil_3xl: "26px",
      mobil_4xl: "32px",
=======
      breadcrumbbuttontextmobilxxs: "10px",
      cartmobilxs: ["12px"],
      mobilsm: ["14px"],
      mobilmd: ["16px"],
      mobillg: ["18px"],
      mobilxl: ["20px"],
      mobil2xl: ["24px"],
      mobil3xl: ["26px"],
      mobil4xl: ["32px"],
>>>>>>> edit-v2

      xxs: "10px",
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "26px",
      "4xl": "34px",
      "5xl": "40px",
      "6xl": "60px",
      "7xl": "80px",
    },

    fontFamily: {
      display: ["Lora"],
      body: ["Arial"],
    },
  },

  theme: {
    spacing: {
      1: "1px",
      2: "2px",
      3: "4px",
      4: "6px",
      5: "8px",
      6: "10px",
      7: "12px",
      8: "14px",
      9: "16px",
      10: "20px",
      11: "24px",
      12: "28px",
      13: "30px",
      14: "36px",
      15: "40px",
      16: "44px",
      17: "48px",
      18: "56px",
      19: "64px",
      20: "80px",
      21: "96px",
      22: "112px",
      23: "128px",
      24: "144px",
      25: "160px",
      26: "176px",
      27: "192px",
      28: "208px",
      29: "224px",
      30: "240px",
      31: "256px",
      32: "288px",
      33: "320px",
      34: "384px",
    },

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

        text: {
          primary: "#F0F0F0",
          secondary: "#FBBA08",
          tertiary: "#E0C56A",
          special: "#141613",
        },

        text_btn: {
          primary: "#20221F",
          secondary: "#F0F0F0",
        },

        text_card: {
          price: "#B5B3B0",
        },

        dropShadow: {
          custom: "0 10px 2px rgba(32, 34, 31, 1)",
        },
      },
    },
  },
};
