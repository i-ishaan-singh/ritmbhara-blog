import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'rt-server/public' // Replace with your desired folder name
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    proxy: {
      '/data': {
        target: 'http://127.0.0.1:9711/',
        changeOrigin: true,
        secure: false,      
        ws: true,
      },
    }
  }
})
