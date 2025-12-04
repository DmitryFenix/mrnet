import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        orange: {
          DEFAULT: '#FF6B35',
          light: '#FF8C5A',
          dark: '#E55A2B',
        },
        teal: {
          DEFAULT: '#00D4AA',
          light: '#33DDBA',
          dark: '#00B894',
        },
      },
      backgroundImage: {
        'gradient-orange-teal': 'linear-gradient(135deg, #FF6B35 0%, #00D4AA 100%)',
      },
    },
  },
  plugins: [],
}
export default config

