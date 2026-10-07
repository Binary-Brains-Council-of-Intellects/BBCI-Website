/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bbci: {
          indigo: '#2E2F81',       // Deep Indigo - "1"s, authority, structure
          'indigo-light': '#3B3D9D',
          'indigo-dark': '#1F2058',
          teal: '#4F6D78',         // Slate Teal - Left brain, analytical
          'teal-light': '#638491',
          'teal-dark': '#384E56',
          magenta: '#EE4A7F',      // Magenta - Right brain, creative/network
          'magenta-light': '#F26F9A',
          'magenta-dark': '#C73262',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          'text-primary': '#0F172A',
          'text-secondary': '#475569',
          'text-muted': '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgb(15 23 42 / 0.05), 0 1px 2px -1px rgb(15 23 42 / 0.05)',
        'elevated': '0 10px 25px -5px rgb(46 47 129 / 0.08), 0 8px 10px -6px rgb(46 47 129 / 0.04)',
        'card-hover': '0 14px 30px -10px rgb(46 47 129 / 0.12), 0 4px 6px -4px rgb(46 47 129 / 0.04)',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        bbci: {
          "primary": "#2E2F81",
          "secondary": "#4F6D78",
          "accent": "#EE4A7F",
          "neutral": "#0F172A",
          "base-100": "#FFFFFF",
          "base-200": "#F8FAFC",
          "base-300": "#F1F5F9",
          "info": "#4F6D78",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
      },
      "light",
    ],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
  },
}
