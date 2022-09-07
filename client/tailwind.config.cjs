/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Rubik",
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: "#222831",
        },
        light_dark: {
          DEFAULT: "#393E46",
        },
        teal: {
          DEFAULT: "#00ADB5",
        },
        violet: "#2B076E",
        white: "#EEEEEE",
      },
      boxShadow: {
        primary: "0px 20px 200px rgba(57, 23, 119, 0.05)",
      },
    },
  },
  plugins: [],
};
