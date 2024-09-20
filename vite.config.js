import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This config will allow for testing of components using Vite Test
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/tests/setup.js',
  },
  // This is the port that will run the page when starting the server 
  server: {
    port: 3000,
    open: true,
  },
})
