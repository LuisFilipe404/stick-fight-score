/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#020923",
        gray: {
          1: "#54504B",
          2: "#A2A2A2",
        },
        cardbackground: "#1C2236",
        red: "#C13A39",
        redhover: "#7F2120",
      },
    },
  },
  plugins: [],
};
