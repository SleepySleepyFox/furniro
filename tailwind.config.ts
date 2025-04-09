import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/HeroBG.svg')",
        'furniro-furniture': "url(/FurniroFurniture_bg.png)",
        'shop-header': "url(/ShopBG.svg)",
        'radial': "radial-gradient(var(--tw-gradient-stops, <value>))"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#B88E2F",
        primary_h: "#3A3A3A",
        secondary: "#FCF8F3",
        tertiary: "#F9F1E7"
      },

      screens: {
        'sm+': "530px",
        
        'lg+': "1440px",
      },

      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%) right-[-100%]' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-out',
        slideOut: 'slideOut 0.3s ease-in',
      },
    },
  },
  plugins: [],
} satisfies Config;
