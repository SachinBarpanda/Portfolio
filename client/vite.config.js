import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VITE_APP_BASE_URL from './urls'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api': {
        target: VITE_APP_BASE_URL,
        changeOrigin: true,
      },
    }
  }
})
