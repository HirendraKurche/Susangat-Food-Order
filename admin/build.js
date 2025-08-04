import { build } from 'vite'
import react from '@vitejs/plugin-react'

async function buildApp() {
  try {
    await build({
      plugins: [react()],
      build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'terser'
      }
    })
    console.log('Build completed successfully!')
  } catch (error) {
    console.error('Build failed:', error)
    process.exit(1)
  }
}

buildApp()