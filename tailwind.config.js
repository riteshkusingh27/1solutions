/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'Segoe UI', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        night: '#f6f8ff',
        midnight: '#eef2ff',
        primary: '#2563eb',
        teal: '#06b6d4',
        amber: '#f59e0b',
        pink: '#f472b6',
        mint: '#22d3ee',
        snow: '#0f172a',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
        glow: 'linear-gradient(120deg, #7c3aed 0%, #0ea5e9 50%, #ec4899 100%)',
      },
      backgroundSize: {
        grid: '24px 24px',
      },
      boxShadow: {
        neon: '0 16px 60px rgba(37, 99, 235, 0.25)',
        card: '0 12px 36px rgba(15, 23, 42, 0.12)',
      },
      dropShadow: {
        glow: '0 0 24px rgba(14,165,233,0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        rise: 'rise 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
