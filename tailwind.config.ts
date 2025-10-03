import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#23A8EB',
                secondary: '#E98E34',
                primaryBg: '#EBF9FE',
                secondaryBg: '#FCF8CA',
                pagination: '#1A6444',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            fontSize: {
                xs: ['12px', {lineHeight: '18px', letterSpacing: '-0.01em'}],
                sm: ['14px', {lineHeight: '20px', letterSpacing: '0em'}],
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
