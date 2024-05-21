/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        spacing: {
          '1': '1px',
          '2': '2px',
          '3': '4px',
          '4': '6px',
          '5': '8px',
          '6': '10px',
          '7': '12px',
          '8': '14px',
          '9': '16px',
          '10': '20px',
          '11': '24px',
          '12': '28px',
          '13': '30px',
          '14': '36px',
          '15': '40px',
          '16': '44px',
          '17': '48px',
          '18': '56px',
          '19': '64px',
          '20': '80px',
          '21': '96px',
          '22': '112px',
          '23': '128px',
          '24': '144px',
          '25': '160px',
          '26': '176px',
          '27': '192px',
          '28': '208px',
          '29': '224px',
          '30': '240px',
          '31': '256px',
          '32': '288px',
          '33': '320px',
          '34': '384px',
         
        }
      }
  };