/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blue_gradient: "linear-gradient(0deg, #2c46a7, #3757c4)"
      },
      backgroundColor: {
        black: "#262b32",
        white_transparent: "rgba(255,255,255,.97)",
        black_transparent: "rgba(255,255,255,.08)",
        soft_primary: "rgb(224 233 250 / var(--tw-bg-opacity))"
      },
      colors: {
        offwhite: "#cacaca",
        black: "#262b32",
        blue: "#3f78e0",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        // center: true,
        padding: '2rem',
        screens: {
          lg: '1280px',
          xl: '1280px',
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
};