/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aeos-bg': '#09090B',
        'aeos-surface': '#18181B',
        'aeos-border': '#27272A',
        'aeos-blue': '#0A84FF',
        'aeos-blue-dim': '#0A84FF20',
        'aeos-red': '#FF3B30',
        'aeos-red-dim': '#FF3B3020',
        'aeos-gold': '#FFD60A',
        'aeos-purple': '#BF5AF2',
        'aeos-green': '#30D158',
        'aeos-muted': '#71717A',
        'aeos-text': '#FAFAFA',
        'aeos-subtext': '#A1A1AA',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'glow-red': 'glowRed 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowRed: {
          '0%': { boxShadow: '0 0 5px #FF3B3060, 0 0 10px #FF3B3030' },
          '100%': { boxShadow: '0 0 15px #FF3B3090, 0 0 30px #FF3B3060' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
