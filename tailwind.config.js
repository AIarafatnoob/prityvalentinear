/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Quicksand', 'sans-serif'],
                script: ['Damion', 'cursive'],
                handwriting: ['Caveat', 'cursive'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                }
            }
        },
    },
    plugins: [],
}
