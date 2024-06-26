/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '780px',
      lg: '1024px',
    },
    extend: {
      colors: {
        primaryLight: '#FFF',
        secondaryLight: '#F87171',
        primaryDark: '#002072',
        secondaryDark: '#747474',
        tertiaryDark: '#047abc',
        primaryAccent: '#0039a6',
        secondaryAccent: '#ff5a00',
        tertiaryAccent: 'hsl(192, 100%, 45%, .7)',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
