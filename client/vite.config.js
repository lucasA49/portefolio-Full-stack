import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  root: __dirname,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api/projet': {
        target: process.env.VITE_API_URL || 'http://localhost:3000', // Remplacer env par process.env
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
