import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/demo-aplicaciones/colegio-contadores-chimborazo/',
  server: {
    port: parseInt(process.env.PORT) || 5175,
    strictPort: false,
  },
})
