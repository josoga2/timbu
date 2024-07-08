/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "timbu-black": "#3E3B3B",
        "timbu-green": "#18A86B",
        "timbu-white": "#FFFFFF",
        "timbu-red": "#EA5252",
        "timbu-blue": "#3A56ED",
        "timbu-yellow": "#FAA527",
      },
    },
  },
  plugins: [],
}