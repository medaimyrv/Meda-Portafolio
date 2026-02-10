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
        // Paleta femenina + IA futurista
        primary: {
          pink: '#EC4899',
          'pink-light': '#F472B6',
          purple: '#8B5CF6',
          'purple-light': '#A855F7',
          cyan: '#06B6D4',
          'cyan-light': '#22D3EE',
        },
        dark: {
          DEFAULT: '#0F0F1A',
          lighter: '#1A1A2E',
          card: '#16162A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 50%, #06B6D4 100%)',
        'gradient-glow': 'linear-gradient(135deg, rgba(236,72,153,0.5) 0%, rgba(139,92,246,0.5) 50%, rgba(6,182,212,0.5) 100%)',
      },
      boxShadow: {
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-multi': '0 0 30px rgba(236, 72, 153, 0.3), 0 0 60px rgba(139, 92, 246, 0.2), 0 0 90px rgba(6, 182, 212, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
