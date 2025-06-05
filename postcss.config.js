/** @type {import('postcss').Config} */
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss(),
    require('autoprefixer'),
  ],
};
