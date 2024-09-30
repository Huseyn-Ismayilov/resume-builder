import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      maxWidth: {
        '1/3': '33.3333%'
      },
      fontFamily: {
        display: " '__Inter_aaf875', '__Inter_Fallback_aaf875'"
      },
      colors: {
        main: '#ebebeb'
      }
    }
  },
  darkMode: ['selector', '[theme-mode="dark"]'],
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            primary: {
              DEFAULT: 'black',
              foreground: 'black'
            }
          }
        }
      }
    })
  ]
}
export default config
