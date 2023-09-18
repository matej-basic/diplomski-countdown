import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'xl': '1rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '3.25rem',
      '5xl': '4rem',
      '6xl': '5rem',
      '7xl': '6.5rem',
      '8xl': '8rem',
      '9xl': '10rem',
      '10xl': '12rem',
      '11xl': '14rem',
      '12xl': '16rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],

  daisyui : {
    themes: ["dark"]
  },
}
export default config
