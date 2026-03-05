import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    host: '0.0.0.0',
    open: false,
  },
})
// Deploy trigger 2026年 3月 5日 星期四 17时21分41秒 CST
