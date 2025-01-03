/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mansalva: ["Mansalva", "serif"],
        palanquin_park: ["Palanquin Dark", "serif"],
        montserrat: ["Montserrat", "serif"],
      },
      colors: {
        primary: "#325437",
        secondary: "#a7bb89",
        des_gray: "#555555",
        description: "#4E5651",
        background: "#fcfaee",
        // primary: "#ff9933",
        // description: "#ff9933",
        // background: "#fcfaee",
        // secondaryBg: "#f2efdf",
      },
    },
  },
  plugins: [],
};
