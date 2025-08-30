import type { Config } from 'tailwindcss'
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./styles/**/*.{css}", "./pages/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
} satisfies Config
