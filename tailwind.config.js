/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01499A",
        secondary: "#828282",
        gray1: "#333333",
        gray3: "#828282",
      },
      boxShadow: {
        cardShadow: "0px 16px 22px 0px rgba(1, 73, 154, 0.1)",
      },
    },
  },
  plugins: [],
};
