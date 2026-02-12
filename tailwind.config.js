export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-green": "#495E57",
                "primary-yellow": "#F4CE14",
                "secondary-orange": "#EE9972",
                "secondary-peach": "#FBDABB",
                "highlight-gray": "#EDEFEE",
                "highlight-dark": "#333333",
            },
            fontFamily: {
                markazi: ["Markazi Text", "serif"],
                karla: ["Karla", "sans-serif"],
            },
        },
    },
    plugins: [],
}
