/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#EB6126",
        secondary: "#ff9c01",
      },
      boxShadow: {
        "3xl": "box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
