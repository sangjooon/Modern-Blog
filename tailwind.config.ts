import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#1e3a8a",
          foreground: "#ffffff",
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#bae0ff",
          300: "#7cc8ff",
          400: "#36acff",
          500: "#0891ff",
          600: "#0070f3",
          700: "#0056d6",
          800: "#0043a8",
          900: "#1e3a8a",
          // 다크 모드 전용 색상
          dark: {
            50: "#0f1419",
            100: "#1a202c",
            200: "#2d3748",
            300: "#4a5568",
            400: "#718096",
            500: "#a0aec0",
            600: "#cbd5e0",
            700: "#e2e8f0",
            800: "#f7fafc",
            900: "#ffffff",
          },
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            lineHeight: "1.7",
            h1: {
              color: "#1e3a8a",
              fontWeight: "700",
              letterSpacing: "-0.025em",
            },
            h2: {
              color: "#1e3a8a",
              fontWeight: "600",
              letterSpacing: "-0.025em",
            },
            h3: {
              color: "#1e3a8a",
              fontWeight: "600",
            },
            a: {
              color: "#0070f3",
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                textDecoration: "underline",
                color: "#0056d6",
              },
            },
            code: {
              backgroundColor: "#f8fafc",
              color: "#1e293b",
              padding: "0.25rem 0.375rem",
              borderRadius: "0.375rem",
              fontSize: "0.875em",
              fontWeight: "500",
              border: "1px solid #e2e8f0",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        invert: {
          css: {
            "--tw-prose-body": "#d1d5db",
            "--tw-prose-headings": "#f9fafb",
            "--tw-prose-lead": "#9ca3af",
            "--tw-prose-links": "#60a5fa",
            "--tw-prose-bold": "#f9fafb",
            "--tw-prose-counters": "#9ca3af",
            "--tw-prose-bullets": "#6b7280",
            "--tw-prose-hr": "#374151",
            "--tw-prose-quotes": "#f3f4f6",
            "--tw-prose-quote-borders": "#374151",
            "--tw-prose-captions": "#9ca3af",
            "--tw-prose-code": "#f9fafb",
            "--tw-prose-pre-code": "#d1d5db",
            "--tw-prose-pre-bg": "#1f2937",
            "--tw-prose-th-borders": "#374151",
            "--tw-prose-td-borders": "#2d3748",
            color: "#d1d5db",
            h1: {
              color: "#f9fafb",
            },
            h2: {
              color: "#f9fafb",
            },
            h3: {
              color: "#f9fafb",
            },
            a: {
              color: "#60a5fa",
              "&:hover": {
                color: "#93c5fd",
              },
            },
            code: {
              backgroundColor: "#374151",
              color: "#f9fafb",
              border: "1px solid #4b5563",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

export default config
