// tailwind.config.js
module.exports = {
    future: {},
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/styles/**/*.css",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
            '2xl': '1900px',
        },
        fontFamily: {
            sans: ['Frank Ruhl Libre', 'serif'],
            sansSerif: ['Libre Franklin', 'sans-serif'],
        },
        fontSizes: {
            'xs': '0.75rem',
            'sm': '0.875rem',
            'lg': '1.25rem',
            'xl': '1.75remrem',
            '2xl': '2.25rem',
            '3xl': '3rem',
            '4xl': '3.5rem',
            '5xl': '4rem',
        },
        colors: {
            'white': '#fff',
            'grey': '#D3D1CB',
            'salmon': '#fa8072',
        },
    },
    variants: {},
    plugins: [],
}