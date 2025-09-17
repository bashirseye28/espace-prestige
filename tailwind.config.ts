import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5F2C91',      // Royal Violet
        accent: '#8F5FBF',       // Orchid / Pink
        lavender: '#E7D9F4',     // Light Lavender
        text: '#222222',         // Charcoal
        muted: '#6B7280',        // Soft Grey
        background: '#FFFFFF',   // White
        card: '#F8F9FA',         // Light Card
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 14px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config