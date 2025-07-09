import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "https://diefbell-grabcad.github.io/gh-spa-test/" : "http://localhost:5173/",
  build: {
    outDir: 'docs/',
  },
  plugins: [react()],
})
