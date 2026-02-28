import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inria: ['var(--font-inria)', 'sans-serif'],
        arapey: ['var(--font-arapey)', 'serif'],
      },
      keyframes: {
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        liquidWave: {
          '0%, 100%': { transform: 'translateY(0) scaleY(1) scaleX(1)', filter: 'blur(0px)' },
          '25%': { transform: 'translateY(-2px) scaleY(1.02) scaleX(0.98)', filter: 'blur(0px)' },
          '50%': { transform: 'translateY(-4px) scaleY(1.05) scaleX(0.96)', filter: 'blur(0px)' },
          '75%': { transform: 'translateY(-2px) scaleY(1.02) scaleX(0.98)', filter: 'blur(0px)' },
        },
        liquidDistort: {
          '0%, 100%': { transform: 'translateX(0) translateY(0) rotate(0deg)', borderRadius: '0%' },
          '25%': { transform: 'translateX(2px) translateY(-1px) rotate(0.5deg)', borderRadius: '2%' },
          '50%': { transform: 'translateX(-2px) translateY(-2px) rotate(-0.5deg)', borderRadius: '3%' },
          '75%': { transform: 'translateX(1px) translateY(-1px) rotate(0.3deg)', borderRadius: '2%' },
        },
      },
      animation: {
        marquee: 'marqueeScroll 30s linear infinite',
        liquidEffect: 'liquidWave 2s ease-in-out infinite, liquidDistort 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
