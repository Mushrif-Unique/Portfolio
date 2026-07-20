/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        bg: ({ opacityValue }) => opacityValue ? `rgb(var(--bg) / ${opacityValue})` : 'rgb(var(--bg))',
        surface: ({ opacityValue }) => opacityValue ? `rgb(var(--surface) / ${opacityValue})` : 'rgb(var(--surface))',
        'surface-2': ({ opacityValue }) => opacityValue ? `rgb(var(--surface-2) / ${opacityValue})` : 'rgb(var(--surface-2))',
        border: ({ opacityValue }) => opacityValue ? `rgb(var(--border) / ${opacityValue})` : 'rgb(var(--border))',
        ink: ({ opacityValue }) => opacityValue ? `rgb(var(--ink) / ${opacityValue})` : 'rgb(var(--ink))',
        muted: ({ opacityValue }) => opacityValue ? `rgb(var(--muted) / ${opacityValue})` : 'rgb(var(--muted))',
        accent: ({ opacityValue }) => opacityValue ? `rgb(var(--accent) / ${opacityValue})` : 'rgb(var(--accent))',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
        gridMove: 'gridMove 8s linear infinite',
      },
    },
  },
  plugins: [],
};
