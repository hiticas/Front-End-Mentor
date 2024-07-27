/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "hsl(237, 63%, 64%)",
        lightpurple: "hsl(236, 72%, 79%)",
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
