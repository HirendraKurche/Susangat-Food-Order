import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'production' 
          ? 'https://susangat-food-del-backend.onrender.com'
          : 'http://localhost:3000',
        changeOrigin: true,
        secure: true
      }
    }
  },
  build: {
    outDir: 'dist'
  }
})
