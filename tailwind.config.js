/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          "altOverpass": ['alt-overpass', 'sans-serif'],
          "altUbuntu": ['alt-ubuntu', 'sans-serif']
        },
        colors: {
          // Custom Colors
          "altLightRed": "hsl(356, 100%, 66%)",
          "altVeryLightRed": "hsl(355, 100%, 74%)",
          "altVeryDarkBlue": "hsl(208, 49%, 24%)",
          "altGrayishBlue": "hsl(240, 2%, 79%)",
          "altDarkGrayishBlue": "hsl(207, 13%, 34%)",
          "altDarkBlackBlue": "hsl(240, 10%, 16%)",
          "altGradientRed": "hsl(13, 100%, 72%)",
          "altGradientLightRed": "hsl(353, 100%, 62%)",
          "altGradientGray": "hsl(237, 17%, 21%)",
          "altGradientDarkBlue": "hsl(237, 23%, 32%)"
        },
        backgroundImage: {
          "desktopImg": "linear-gradient(to bottom right, #ff8f70 10%, #ff3d54 90%), url(/assets/images/bg-pattern-intro-desktop.svg)",
          "mobileImg": "linear-gradient(#ff8f70,#ff3d54), url(/assets/images/bg-pattern-intro-mobile.svg)",
          "secOneBgImgDesk": "url(/assets/images/illustration-editor-desktop.svg)",
          "secOneBgImgMob": "url(/assets/images/illustration-editor-mobile.svg)",
          "patternCircles": "url(/assets/images/bg-pattern-circles.svg)",
          "phoneImg": "url(/assets/images/illustration-phones.svg)",
          "laptopImgDesk": "url(/assets/images/illustration-laptop-desktop.svg)",
          "laptopImgMob": "url(/assets/images/illustration-laptop-mobile.svg)"
        }
      },
    },
    plugins: [],
  }
  
  