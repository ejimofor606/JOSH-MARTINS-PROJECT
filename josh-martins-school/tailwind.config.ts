import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          600: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#EAB308',
          500: '#EAB308',
        },
        accent: {
          DEFAULT: '#10B981',
        },
        slate: {
          900: '#0F172A',
          700: '#374151',
          100: '#F3F4F6',
        },
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#DC2626',
      },
      borderRadius: {
        xl: '12px',
        lg: '8px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(2, 8, 23, 0.06)',
      }
    },
  },
  plugins: [],
}
export default config