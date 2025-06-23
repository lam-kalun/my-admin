import { defineConfig } from 'vite'
import { setupVitePlugins } from './build/plugins'
import { fileURLToPath, URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: setupVitePlugins(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
