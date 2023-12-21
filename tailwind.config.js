/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.ttml", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#54a0f3",
        greenPrimary: "#006d69",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
