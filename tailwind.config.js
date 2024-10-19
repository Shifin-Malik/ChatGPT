const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    // Define custom border widths
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    // Custom color palette
    colors: {
      ...colors,
      primary: '#202123', // dark gray for the main background
      primaryText: '#eaeaea', // light gray for main text
      secondaryText: '#a1a1aa', // gray for secondary text
      accent: '#10a37f', // teal green for accents and buttons
      buttonBackground: '#10a37f', // teal green for button backgrounds
      buttonHover: '#0e8468', // darker teal green for hover effect
      info: "#3b82f6", // lighter blue for informational messages
      success: "#22c55e", // light green for success
      warning: "#facc15", // yellow for warnings
      error: "#ef4444", // bright red for errors
    },
    // Custom font family
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
    },
    extend: {
      // Extend aspect ratio utility
      aspectRatio: {
        "3/4": "3 / 4",
      },
      // Define custom animations
      animation: {
        marquee: "marquee 36s linear infinite",
        marquee2: "marquee2 36s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      // Custom container padding
      container: {
        padding: {
          DEFAULT: "0",
        },
      },
    },
  },
});
