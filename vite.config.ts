import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth/v1': {
        target: 'http://107.23.248.208:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
