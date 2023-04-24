// @ts-check

const defaultTheme = require("tailwindcss/defaultTheme")

/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter var",
          "system-ui",
          "sans-serif",
          ...defaultTheme.fontFamily.sans
        ]
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
}
