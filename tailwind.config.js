/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#FF993C',
                secondary: '#FFB800',
                grey: '#1E0D03',
                bgColor: '#F9F6F4',
            },
        },
    },
    plugins: [],
}
