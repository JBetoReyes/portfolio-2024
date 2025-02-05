import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const platform = process.env.PLATFROM

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: platform === 'github-actions' ? '/portfolio-2024/' : '/'
})
