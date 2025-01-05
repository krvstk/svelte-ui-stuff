/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            borderRadius: {
                '4xl': '2rem',
                '5xl': '3rem',
                '6xl': '4rem',
            },
            flexBasis: {
              '35%': '35%',
              '65%': '65%',
            },
            spacing: {
                'custom-container-width': '600px',
                'custom-container-height': '400px',
                'to-do-width': '300px',
                'to-do-height': '500px',
            },
            colors: {
                'website-font-color-primary': '#ffffff',
                'website-font-color-secondary': '#ffffff',
                'website-font-color-ternary': '#ffffff',
            },
            fontSize: {
                'catch-phrase-size': '5rem',
                'catch-phrase-size-md': '8.5rem',
                'catch-phrase-size-lg': '10rem',
            },
            lineHeight: {
                'catch-phrase-lh': '5rem',
                'catch-phrase-lh-md': '8.5rem',
                'catch-phrase-lh-lg': '10rem',
            },
            width: {
                '1px': '1px',
            },
            height: {
                '1px': '1px',
                '75%': '75%',
            },
            writingMode: {
                'vertical-lr': 'vertical-lr',
            }
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            garamond: ['Garamond', 'serif'],
        },
        backgroundImage: {
            'hover-gradient': 'radial-gradient(100% 75% at 49% 103%, #071F73DB 0%, #030C24B3 67%),' +
                'radial-gradient(100% 75% at 48% 95%, #1434ADB3 1%, #011334B5 31%),' +
                'radial-gradient(100% 100% at 47% 115%, #1434ADFF 0%, #071237FF 30%);',
            'main-gradient': 'linear-gradient(191deg, #82B4F91A 1%, #82B4F942 10%, #82B4F94F 12%, #FFFFFF08 32%),' +
                'radial-gradient(55% 25% at 86% 39%, #EA00FF1C 0%, #EA00FF17 17%, #EA00FF1C 29%, #EA00FF1A 42%, #FF07C100 100%),' +
                'linear-gradient(27deg, #FFFFFFFF 0%, #A7C3E8FF 100%)',
            'main-website-pic': 'url(/green-dress.png)',
            'detail-one-website-pic': 'url(/green-dress-2.png)',
            'detail-two-website-pic': 'url(/green-dress-3.png)',
        },
    },
    plugins: [
        function ({addUtilities}) {
            const newUtilities = {
                '.vertical-lr': {
                    writingMode: 'vertical-lr',
                }
            };
            addUtilities(newUtilities);
        }],
}

