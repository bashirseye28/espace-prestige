import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      se: '320px',      // iPhone SE / extra small
      xs: '375px',      // iPhone XR / 12 Mini
      sm: '640px',      // small tablets / phones
      md: '768px',      // tablets (iPad)
      lg: '1024px',     // desktops
      xl: '1280px',     // large desktops
      '2xl': '1536px',  // extra-large
    },
    extend: {
      colors: {
        primary: '#5F2C91',      // Violet Royal
        accent: '#8F5FBF',       // Orchidée
        lavender: '#E7D9F4',     // Lavande claire
        text: '#222222',         // Texte principal
        muted: '#6B7280',        // Texte secondaire
        background: '#FFFFFF',   // Fond
        card: '#F8F9FA',         // Cartes claires
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 14px rgba(0, 0, 0, 0.08)',
        soft: '0 2px 8px rgba(0, 0, 0, 0.05)',
        medium: '0 6px 24px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        'section': '5rem',
        'section-sm': '3rem',
      },
      maxWidth: {
        'hero-text': '42rem', // ~672px
      },
    },
  },
  plugins: [],
}

export default config