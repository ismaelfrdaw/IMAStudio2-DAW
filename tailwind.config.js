/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#F37021", // Vibrant Orange
        "secondary": "#8E9196", // Medium Gray
        "charcoal": "#2D2D2D", // Dark Charcoal
        "background-light": "#F9FAFB",
        "background-dark": "#121212",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      }
    },
  },
  plugins: [],
}
