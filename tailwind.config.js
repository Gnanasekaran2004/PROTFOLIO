/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#0d1117',
          950: '#060810',
        },
        navy: {
          900: '#0a0f1e',
          800: '#0f1629',
          700: '#151e36',
          600: '#1a2742',
          500: '#1e2d4f',
        },
        violet: {
          DEFAULT: '#7c3aed',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        emerald: {
          DEFAULT: '#10b981',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        gold: {
          DEFAULT: '#f59e0b',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(258,100%,56%,0.15) 0, transparent 50%), radial-gradient(at 80% 0%, hsla(172,100%,36%,0.12) 0, transparent 50%), radial-gradient(at 0% 50%, hsla(258,100%,56%,0.08) 0, transparent 50%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'border-spin': 'border-spin 4s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'border-spin': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(124, 58, 237, 0.4)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.4)',
        'glow-gold': '0 0 20px rgba(245, 158, 11, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
