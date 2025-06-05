// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/vihasreddy58/MyPortfolio', // replace with your actual GitHub repo name
})
