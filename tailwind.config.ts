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
        // Design tokens - mapped from CSS variables
        primary: {
          50: 'var(--token-color-primary-50)',
          100: 'var(--token-color-primary-100)',
          200: 'var(--token-color-primary-200)',
          300: 'var(--token-color-primary-300)',
          400: 'var(--token-color-primary-400)',
          500: 'var(--token-color-primary-500)',
          600: 'var(--token-color-primary-600)',
          700: 'var(--token-color-primary-700)',
          800: 'var(--token-color-primary-800)',
          900: 'var(--token-color-primary-900)',
          950: 'var(--token-color-primary-950)',
        },
        accent: {
          50: 'var(--token-color-accent-50)',
          100: 'var(--token-color-accent-100)',
          200: 'var(--token-color-accent-200)',
          300: 'var(--token-color-accent-300)',
          400: 'var(--token-color-accent-400)',
          500: 'var(--token-color-accent-500)',
          600: 'var(--token-color-accent-600)',
          700: 'var(--token-color-accent-700)',
          800: 'var(--token-color-accent-800)',
          900: 'var(--token-color-accent-900)',
        },
        background: {
          DEFAULT: 'var(--token-color-background-default)',
          secondary: 'var(--token-color-background-secondary)',
          tertiary: 'var(--token-color-background-tertiary)',
        },
        text: {
          primary: 'var(--token-color-text-primary)',
          secondary: 'var(--token-color-text-secondary)',
          tertiary: 'var(--token-color-text-tertiary)',
          inverse: 'var(--token-color-text-inverse)',
        },
        border: {
          DEFAULT: 'var(--token-color-border-default)',
          hover: 'var(--token-color-border-hover)',
          focus: 'var(--token-color-border-focus)',
        },
        // Legacy support
        foreground: 'var(--foreground)',
      },
      spacing: {
        'token-xs': 'var(--token-spacing-xs)',
        'token-sm': 'var(--token-spacing-sm)',
        'token-md': 'var(--token-spacing-md)',
        'token-lg': 'var(--token-spacing-lg)',
        'token-xl': 'var(--token-spacing-xl)',
        'token-2xl': 'var(--token-spacing-2xl)',
        'token-3xl': 'var(--token-spacing-3xl)',
        'token-4xl': 'var(--token-spacing-4xl)',
      },
      borderRadius: {
        'token-none': 'var(--token-radius-none)',
        'token-sm': 'var(--token-radius-sm)',
        'token-md': 'var(--token-radius-md)',
        'token-lg': 'var(--token-radius-lg)',
        'token-xl': 'var(--token-radius-xl)',
        'token-2xl': 'var(--token-radius-2xl)',
        'token-full': 'var(--token-radius-full)',
      },
      transitionDuration: {
        'token-fast': 'var(--token-transition-duration-fast)',
        'token-normal': 'var(--token-transition-duration-normal)',
        'token-slow': 'var(--token-transition-duration-slow)',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'smooth-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
export default config

