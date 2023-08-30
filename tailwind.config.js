/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#0B0C10',
        'custom-gray1': '#1F2833',
        'custom-gray2': '#C5C6C7',
        'custom-blue1': '#66FCF1',
        'custom-blue2': '#45A29E'
      },
  },
  },
  plugins: [],
}