import { defineConfig } from 'vite'
import { setupVitePlugins } from './build/plugins'

// https://vite.dev/config/
export default defineConfig({
  plugins: setupVitePlugins(),
})
