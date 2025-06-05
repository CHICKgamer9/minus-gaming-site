/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  './src/app/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    fontFamily: {
      playfair: 'var(--font-playfair)',
    },
  },
};
export const plugins = [];
