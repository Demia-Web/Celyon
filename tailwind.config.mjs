/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        bianco: "#FFFFFF",
        nero: "#282828",
        blu: "#0029CC",
        action: {
          100: "#ADC7E9",
          200: "#7B99CF",
          300: "#556EB3",
          400: "#908DC4"
        },
        grigio: {
          50: "#FFFFFF",
          100: "#DDDDDD",
          200: "#8E8E8E"
        }
      }
    }
  },
  plugins: []
};
