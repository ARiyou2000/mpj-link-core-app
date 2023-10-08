import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-YekanBakh)", ...fontFamily.sans],
        faNum: [
          "var(--font-yekan_bakh_faNum)",
          "var(--font-yekan_bakh)",
          "YekanBakhTry",
          ...fontFamily.sans,
        ],
      },
      colors: {
        black: "#000000",
        milkwhite: "#F4F4F4",
        red: "#D04848",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        card: "1.5625rem",
      },
      borderWidth: {
        "1": "0.0625rem",
        "1.5": "0.09375rem",
        "4": "0.25rem",
      },
      ringWidth: {
        "1": "0.0625rem",
        "1.5": "0.09375rem",
      },
      spacing: {
        "1pxr": "0.0625rem",
      },
      dropShadow: {
        active: [
          "4px -4px 4px rgba(255, 255, 255, 0.20)",
          "-4px -4px 4px rgba(255, 255, 255, 0.20)",
          "-4px 4px 4px rgba(255, 255, 255, 0.20)",
          "4px 4px 4px rgba(255, 255, 255, 0.20)",
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "shine-to-left": {
          to: {
            "background-position-x": "200%",
          },
        },
        "shine-to-right": {
          to: {
            "background-position-x": "-200%",
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        rotateBack: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        "loading-to-left": "2.5s shine-to-left linear infinite",
        "loading-to-right": "2.5s shine-to-right linear infinite",
        rotate: "1s rotate linear infinite",
        rotateBack: "1s rotateBack linear infinite",
      },
      backgroundImage: {
        "loading-to-left":
          "linear-gradient(70deg, #475569FF 8%, #8291A5F0 18%, #475569FF 40%)",
        "loading-to-right":
          "linear-gradient(110deg, #475569FF 8%, #8291A5F0 18%, #475569FF 40%)",
      },
      transitionDuration: {
        "1500": "1500ms",
        "2000": "2000ms",
        "2500": "2500ms",
        "3000": "3000ms",
      },
      backgroundSize: {
        loading: "200% 100%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
