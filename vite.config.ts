import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from https://<owner>.github.io/gods-universe/ in GitHub Actions;
  // keep the root base for local dev and previews.
  base: process.env.GITHUB_ACTIONS ? '/gods-universe/' : '/',
})
