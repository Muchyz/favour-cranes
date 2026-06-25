/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0E2A47",
        brandred: "#E32227",
        sky: "#1C8FD6",
        offwhite: "#F4F6F8",
        slate: "#2B3440",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
