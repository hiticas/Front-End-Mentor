/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        green: "hsl(75, 94%, 57%)",
        white: "hsl(0, 0%, 100%)",
        gray700: "hsl(0, 0%, 20%)",
        gray800: "hsl(0, 0%, 12%)",
        gray900: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
