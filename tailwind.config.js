/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    colors: {
      "light-white": "#F0F1F3",
      white: "#fff",
      blue: "#0E243B",
      yellow: "#EEC85B",
    },
    extend: {
      fontSize: {
        16: "16px",
        24: "24px",
        42: "42px",
        56: "56px",
      },
    },
  },
  plugins: [],
};
