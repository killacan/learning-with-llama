/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: '#062f4f',
        posy: '#813772',
        embers: '#B82601'
      }
    },
  },
  plugins: [],
};

module.exports = config;
