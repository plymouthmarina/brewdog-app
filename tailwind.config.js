/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            primary: {
                DEFAULT: 'var(--color-primary-main)',
                light: 'var(--color-primary-light)',
                dark: 'var(--color-primary-dark)'
            },
            secondary: {
                DEFAULT: 'var(--color-secondary-main)',
                light: 'var(--color-secondary-light)',
                dark: 'var(--color-secondary-dark)'
            },
            tertiary: {
                DEFAULT: 'var(--color-tertiary-main)',
                light: 'var(--color-tertiary-light)',
                dark: 'var(--color-tertiary-dark)'
            }
        },
        extend: {},
    },
    plugins: [],
}
