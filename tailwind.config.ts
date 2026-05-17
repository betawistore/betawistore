import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 20px rgba(34, 211, 238, 0.35)'
      }
    }
  },
  plugins: []
} satisfies Config;

