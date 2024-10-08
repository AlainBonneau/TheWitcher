/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Cible bien tes fichiers React ici
    "./node_modules/@nextui-org/theme/dist/**/*.{js,mjs,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
