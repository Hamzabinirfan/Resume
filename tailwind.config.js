/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#a855f7",
          pink:   "#ec4899",
          orange: "#fb923c",
        },
        dark: {
          DEFAULT: "#0a0a0f",
          100:    "#111118",
          200:    "#1a1a24",
          300:    "#22222f",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":   "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #fb923c 100%)",
        "brand-gradient-r": "linear-gradient(to right, #a855f7, #ec4899, #fb923c)",
      },
      animation: {
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        }
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(168, 85, 247, 0.15)",
        "glow-pink":   "0 0 40px rgba(236, 72, 153, 0.15)",
      }
    },
  },
  plugins: [],
}
