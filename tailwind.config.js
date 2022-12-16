/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      fontFamily: {
        title: ['Asap Condensed', 'cursive'], // It should be used for titles.
        subtitle: ['Nunito', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        // It should be used for subheadings, long texts and quotes, and should be quotations, highlighting.
      },
      colors: {
        embie: {
          orange: {
            DEFAULT: '#EA492E',
            50: '#FFFFFF',
            100: '#FDEAE7',
            200: '#F8C2B9',
            300: '#F39A8B',
            400: '#EF715C',
            500: '#EA492E',
            600: '#D03015',
            700: '#A22510',
            800: '#731B0C',
            900: '#451007',
          },
          blue: {
            light: {
              DEFAULT: '#60A1E2',
              50: '#FBFDFE',
              100: '#EAF3FB',
              200: '#E1EDFA',
              300: '#B6D4F2',
              400: '#8BBAEA',
              500: '#60A1E2',
              600: '#3587DA',
              700: '#226EBA',
              800: '#1A548F',
              900: '#123B64',
            },
            dark: {
              DEFAULT: '#161644',
              50: '#6F6FD0',
              100: '#5C5CCA',
              200: '#3B3BB8',
              300: '#2F2F91',
              400: '#22226B',
              500: '#161644',
              600: '#0A0A1D',
              700: '#000000',
              800: '#000000',
              900: '#000000',
            },
          },
          yellow: {
            DEFAULT: '#FFAF23',
            50: '#FFFFFF',
            100: '#FFF9EF',
            200: '#FFE7BC',
            300: '#FFD489',
            400: '#FFC256',
            500: '#FFAF23',
            600: '#EF9800',
            700: '#BC7800',
            800: '#895700',
            900: '#563700',
          },
        },
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.65rem',
      '7xl': '4.3rem',
    },
  },
  plugins: [],
};
