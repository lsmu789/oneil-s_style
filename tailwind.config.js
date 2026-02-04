/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Added .jsx to content for Tailwind JIT
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
