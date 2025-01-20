/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#141414",
        second: "#111111",
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)',
        'custom-gradient': 'linear-gradient(to right, #19547b, #ffd89b)',
      },
    },
  },
  plugins: [],
};
