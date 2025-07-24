/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./components/*.js", "./functions/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          600: '#ea580c',
          900: '#7c2d12'
        },
        secondary: {
          100: '#fee2e2',
          500: '#dc2626',
          600: '#b91c1c'
        },
        accent: {
          500: '#34d399',
          600: '#059669'
        },
        danger: {
          500: '#dc2626',
          600: '#b91c1c'
        },
        warning: {
          500: '#fbbf24',
          600: '#f59e42'
        },
        surface: '#fff7ed',
        glass: 'rgba(255,255,255,0.7)',
        darkglass: 'rgba(124,45,18,0.7)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(249, 115, 22, 0.18)',
        glow: '0 0 0 4px #f9731633',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at top left, #f97316 0%, #dc2626 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(254,226,226,0.7) 100%)',
        'gradient-dark': 'linear-gradient(135deg, #7c2d12 0%, #f97316 100%)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    }
  },
  plugins: [],
} 