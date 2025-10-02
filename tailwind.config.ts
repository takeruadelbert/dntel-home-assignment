import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0055CC',
                error: '#FF5630',
                gray900: '#1E293B',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            fontSize: {
                xs: ['13px', {lineHeight: '18px', letterSpacing: '-0.01em'}],
                sm: ['15px', {lineHeight: '20px', letterSpacing: '0em'}],
                base: ['17px', {lineHeight: '24px', letterSpacing: '0.02em'}],
            },
            spacing: {
                4.5: '18px',
                5.5: '22px',
            },
        },
    },
    plugins: [],
}
export default config;
