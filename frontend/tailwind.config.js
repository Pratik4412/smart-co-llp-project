/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },

        secondary: {
          DEFAULT: "var(--secondary-color)",
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
        },

        white: "var(--white)",
        black: "var(--black)",

        gray: {
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
        },

        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        info: "var(--info)",

        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          dark: "var(--bg-dark)",
        },

        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          onPrimary: "var(--text-on-primary)",
          onDark: "var(--text-on-dark)",
        },

        border: {
          light: "var(--border-light)",
          medium: "var(--border-medium)",
          dark: "var(--border-dark)",
        },
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
      fontFamily: {
        heading: ["var(--heading)"],
        para: ["var(--para)"],
      },

      boxShadow: {
        sm: `0 1px 2px var(--shadow-sm)`,
        md: `0 4px 6px var(--shadow-md)`,
        lg: `0 10px 15px var(--shadow-lg)`,
        xl: `0 20px 25px var(--shadow-xl)`,
      },
    },
  },
  plugins: [],
};
