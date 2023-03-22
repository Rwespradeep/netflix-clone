import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/api': 'http://localhost:8080'          //if my request starts with "/api" it should go to 8080end point
    }
  },

  plugins: [react()],
})
