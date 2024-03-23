/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      regular: ["Ubuntu Regular"],
      medium: ["Ubuntu Medium"],
      bolder: ["Ubuntu Bold"],
    },
  },
  plugins: [],
};
