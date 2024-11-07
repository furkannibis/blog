import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Partial<Config> = {
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                'reveal': {
                    '0%': { opacity: '0', filter: 'brightness(1) blur(15px)', scale: '1.0125' },
                    '10%': { opacity: '1', filter: 'brightness(1.25) blur(10px)' },
                    '100%': { opacity: '1', filter: 'brightness(1) blur(0)', scale: '1' },
                },
                'moveHorizontal': {
                    '0%': {
                        transform: 'translateX(-50%) translateY(-10%)',
                    },
                    '50%': {
                        transform: 'translateX(50%) translateY(10%)',
                    },
                    '100%': {
                        transform: 'translateX(-50%) translateY(-10%)',
                    },
                },
                'moveInCircle': {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '50%': {
                        transform: 'rotate(180deg)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                    },
                },
                'moveVertical': {
                    '0%': {
                        transform: 'translateY(-50%)',
                    },
                    '50%': {
                        transform: 'translateY(50%)',
                    },
                    '100%': {
                        transform: 'translateY(-50%)',
                    },
                },
                'gradient-1': {
                    '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg) scale(1)' },
                    '33%': { transform: 'translate(20%, 20%) rotate(180deg) scale(1.1)' },
                    '66%': { transform: 'translate(-20%, 10%) rotate(-180deg) scale(0.9)' },
                },
                'gradient-2': {
                    '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg) scale(1)' },
                    '33%': { transform: 'translate(-30%, 15%) rotate(-180deg) scale(1.15)' },
                    '66%': { transform: 'translate(25%, -20%) rotate(180deg) scale(0.85)' },
                },
                'gradient-3': {
                    '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg) scale(1)' },
                    '33%': { transform: 'translate(25%, -25%) rotate(90deg) scale(1.2)' },
                    '66%': { transform: 'translate(-15%, 20%) rotate(-90deg) scale(0.8)' },
                },
                'gradient-4': {
                    '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg) scale(1)' },
                    '33%': { transform: 'translate(-25%, 25%) rotate(-90deg) scale(1.1)' },
                    '66%': { transform: 'translate(15%, -20%) rotate(90deg) scale(0.9)' },
                },
                'gradient-5': {
                    '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg) scale(1)' },
                    '33%': { transform: 'translate(30%, 10%) rotate(180deg) scale(1.15)' },
                    '66%': { transform: 'translate(-20%, -15%) rotate(-180deg) scale(0.85)' },
                },
                'gradient-6': {
                    '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg) scale(1)' },
                    '33%': { transform: 'translate(-20%, -15%) rotate(90deg) scale(1.2)' },
                    '66%': { transform: 'translate(15%, 25%) rotate(-90deg) scale(0.8)' },
                },
                'gradient-7': {
                    '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg) scale(1)' },
                    '33%': { transform: 'translate(25%, -20%) rotate(-180deg) scale(1.1)' },
                    '66%': { transform: 'translate(-30%, 10%) rotate(180deg) scale(0.9)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'shake': 'shake 0.1s ease-in-out',
                'infinite-scroll': 'infinite-scroll 10s linear infinite',
                'fade-up-gentle': 'fade-up-gentle 0.5s ease-out',
                'shrink-in-height-fast': 'shrink-in-height 0.5s ease-in-out infinite',
                'shrink-in-height-slow': 'shrink-in-height 2s ease-in-out infinite',
                'shrink-in-height-medium': 'shrink-in-height 1s ease-in-out infinite',
                'reveal': 'reveal 0.5s ease-in-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'fade-in-down': 'fade-in-down 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
                'first': 'moveVertical 30s ease infinite',
                'second': 'moveInCircle 20s reverse infinite',
                'third': 'moveInCircle 40s linear infinite',
                'fourth': 'moveHorizontal 40s ease infinite',
                'fifth': 'moveInCircle 20s ease infinite',
                'gradient-1': 'gradient-1 20s ease infinite',
                'gradient-2': 'gradient-2 20s ease infinite',
                'gradient-3': 'gradient-3 20s ease infinite',
                'gradient-4': 'gradient-4 20s ease infinite',
                'gradient-5': 'gradient-5 20s ease infinite',
                'gradient-6': 'gradient-6 20s ease infinite',
                'gradient-7': 'gradient-7 20s ease infinite',
            },
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-body': "theme('colors.foreground / 90%')",
                        '--tw-prose-headings': "theme('colors.foreground')",
                        '--tw-prose-lead': "theme('colors.foreground')",
                        '--tw-prose-links': "theme('colors.foreground')",
                        '--tw-prose-bold': "theme('colors.foreground')",
                        '--tw-prose-counters': "theme('colors.muted.foreground')",
                        '--tw-prose-bullets': "theme('colors.muted.foreground')",
                        '--tw-prose-hr': "theme('colors.border')",
                        '--tw-prose-quotes': "theme('colors.foreground')",
                        '--tw-prose-quote-borders': "theme('colors.border')",
                        '--tw-prose-captions': "theme('colors.foreground')",
                        '--tw-prose-th-borders': "theme('colors.border')",
                        '--tw-prose-td-borders': "theme('colors.border')",
                        '--tw-prose-code': "theme('colors.foreground')",
                        '--tw-prose-kbd': "theme('colors.foreground')",
                        '--tw-prose-kbd-shadows': "theme('colors.primary.DEFAULT / 50%')",
                        '--tw-prose-pre-bg': false,
                        '--tw-prose-pre-code': false,

                        'maxWidth': 'none',

                        'img': {
                            margin: '0 auto',
                        },

                        'kbd': {
                            boxShadow: '0 0 0 1px var(--tw-prose-kbd-shadows),0 3px 0 var(--tw-prose-kbd-shadows)',
                        },

                        'code': {
                            padding: '2px 4px',
                            fontSize: '13px',
                            borderRadius: '6px',
                            background: "theme('colors.secondary.DEFAULT / 50%')",
                            border: '1px solid hsl(var(--border))',
                        },

                        'ul': {
                            listStylePosition: 'inside',
                            paddingLeft: '0',
                        },

                        'pre code': false,
                        'pre code::after': false,
                        'pre code::before': false,
                        'code::after': false,
                        'code::before': false,
                    },
                },
            },
            boxShadow: {
                'feature-card': '0 -1px 3px 0 rgb(0 0 0 / 0.05)',
                'feature-card-dark': '0 0 0 1px rgb(255 255 255 / 0.06), 0 -1px rgb(255 255 255 / 0.1)',
            },
        },
    },
    plugins: [typography, animate],
}

export default config
