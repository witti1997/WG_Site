/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/pages/*.{js,jsx,ts,tsx}",
  "./src/components/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors: {
        headerColor: "#6f5f87",
        subheaderColor: "#8391A3",
      }
    },
  },
  plugins: [],
}

