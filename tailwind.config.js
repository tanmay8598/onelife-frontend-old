/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: "var(--font-pacifico)",
        poppins: "var(--font-poppins)",
      },
      colors: {
        red: {
          DEFAULT: "#8F0000",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          DEFAULT: "#f69626",
        },
        blue: {
          DEFAULT: "#00B8FF",
        },
        yellow: {
          DEFAULT: "#FFC700",
        },
        bgLight: {
          DEFAULT: "#F2F2F2",
        },
        darkBlue: {
          DEFAULT: "#021a58",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/travel-slide-01.jpg')",
        "bg-img-2": "url('/travel-slide-02.jpg')",
        "bg-img-3": "url('/travel-slide-03.jpg')",
        "bg-img-4": "url('/travel-slide-04.jpg')",
        "uae-visa":
          "linear-gradient(to right, rgba(1,1,1,1) ,20%, rgba(0, 0, 0, 0) 50%), url('/uae-passport.png')",
        // "uae-visa": "url('/uae-passport.png')",
        "uae-activities":
          "linear-gradient(to right, rgba(1,1,1,1) ,20%, rgba(0, 0, 0, 0) 50%), url('/activities.png')",
        // "uae-activities": "url('/activities.png')",
        "uae-holidays":
          "linear-gradient(to right, rgba(1,1,1,1) ,20%, rgba(0, 0, 0, 0) 50%), url('/holidays.png')",
        // "uae-holidays": "url('/holidays.png')",
        "section1-video": "url('/section/section1-video.png')",
        "section2-bg": "url('/section/bg-img-11.jpg')",
        "landing-bg": "url('/section/landing-bg.png')",
        "visa-bg": "url('/visaHero.png')",
        "visa-schengen": "url('/visa/schengen.png')",
        "visa-usa": "url('/visa/usa.png')",
        "visa-uk": "url('/visa/uk.png')",
        "visa-ca": "url('/visa/ca.png')",
        "visa-eg": "url('/visa/eg.png')",
        "visa-au": "url('/visa/au.png')",
        "visa-tu": "url('/visa/tu.png')",
        "activity-bg": "url('/activity/image.png')",
        "holiday-dubai": "url('/holiday/dubai.png')",
        "holiday-baku": "url('/holiday/baku.png')",
        "holiday-germany": "url('/holiday/germany.png')",
        "holiday-india": "url('/holiday/india.png')",
        "holiday-japan": "url('/holiday/japan.png')",
        "holiday-malaysia": "url('/holiday/malaysia.png')",
        "holiday-switzerland": "url('/holiday/switzerland.png')",
        "holiday-bg": "url('/holiday/holiday-bg.png')",
        "b2b-bg": "url('/b2b/bg.png')",
        "home-bg1-mobile": "url('/home/bg1.png')",
        "home-bg1":
          "linear-gradient(to right, rgba(1,1,1,1) ,30%, rgba(0, 0, 0, 0) 50%), url('/home/bg1.png')",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
    },
  },

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
});
