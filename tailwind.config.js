/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero": "url('/background/bg-home.jpg')",
        "arrival-left": "url('/arrival/left.jpg')",
        "arrival-right": "url('/arrival/right.jpg')",
      },
    },
  },
  plugins: [],
}
