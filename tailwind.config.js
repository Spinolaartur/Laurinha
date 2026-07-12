/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFBF7",
          100: "#FAF6EF",
          200: "#F3EBDD",
          300: "#E8DCC8",
        },
        wine: {
          50: "#F9F3F4",
          100: "#F0E4E6",
          200: "#DFC5CA",
          300: "#C99BA4",
          400: "#B07480",
          500: "#8F4F5C",
          600: "#733D48",
          700: "#5C3139",
          800: "#45252C",
          900: "#2E191E",
        },
        gold: {
          300: "#E8D5A8",
          400: "#D4B978",
          500: "#C4A05A",
        },
        charcoal: {
          700: "#3D3835",
          800: "#2A2624",
          900: "#1A1817",
          950: "#0F0E0D",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        shimmer: "shimmer 8s ease-in-out infinite",
        "float-slow": "floatSlow 14s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(10px)" },
        },
      },
      boxShadow: {
        soft: "0 4px 24px -12px rgba(69, 37, 44, 0.14)",
        elegant: "0 28px 70px -30px rgba(69, 37, 44, 0.32)",
        "glow-gold": "0 0 50px -14px rgba(196, 160, 90, 0.4)",
      },
      letterSpacing: {
        luxe: "0.28em",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(196, 160, 90, 0.12) 0%, transparent 70%)",
        "section-glow":
          "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(143, 79, 92, 0.08) 0%, transparent 70%)",
        "body-glow":
          "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(196, 160, 90, 0.07) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 100% 100%, rgba(143, 79, 92, 0.06) 0%, transparent 60%)",
        "body-glow-dark":
          "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(196, 160, 90, 0.06) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 100% 100%, rgba(143, 79, 92, 0.1) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};
