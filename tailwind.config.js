/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#0B3C5D',
        'sky-blue': '#328CC1',
        'gold': '#D9B310',
        'ivory': '#1D2731',
      },
      textColor: {
        'custom-blue': '#0B3C5D',
        'sky-blue': '#328CC1',
        'gold': '#D9B310',
        'ivory': '#1D2731',
      },
  },
  },
  plugins: [],
}