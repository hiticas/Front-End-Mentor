/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        gray500: "hsl(0, 0%, 42%)",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      boxShadow: {
        shadow1: "8px 8px",
      },
    },
  },
  plugins: [],
};
