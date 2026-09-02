export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(108, 99, 255, 0.25)',
        'glow-lg': '0 30px 100px rgba(108, 99, 255, 0.35)',
        'glow-primary': '0 25px 50px rgba(108, 99, 255, 0.30)',
        'glow-accent': '0 25px 50px rgba(0, 194, 255, 0.25)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(108,99,255,0.24), transparent 35%), radial-gradient(circle at right, rgba(0,194,255,0.17), transparent 30%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        shopora: {
          primary: '#6C63FF',
          secondary: '#8B5CF6',
          accent: '#00C2FF',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
