/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        navy: {
          50: "#f0f3f9",
          100: "#dbe2ef",
          200: "#b8c6df",
          300: "#8ba4c9",
          400: "#5d7cad",
          500: "#3d5d91",
          600: "#2d4676",
          700: "#23385f",
          800: "#1b2b4b",
          900: "#121d33",
          950: "#0a111f",
        },
        cream: "#f8f9fc",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "swing": "swing 4s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "spin-slow": "spin 20s linear infinite",
        "pulse-ring": "pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        swing: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "80%, 100%": { transform: "scale(2.4)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(30, 58, 138, 0.15)",
        card: "0 4px 24px -6px rgba(30, 58, 138, 0.12)",
        glow: "0 0 40px rgba(59, 130, 246, 0.25)",
      },
    },
  },
  plugins: [],
};
