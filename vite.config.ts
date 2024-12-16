import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Cambia el puerto si es necesario
    proxy: {
      '/api': {
        target: process.env.VITE_REACT_APP_API_URI || 'http://localhost:5000', // Redirigir al backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

