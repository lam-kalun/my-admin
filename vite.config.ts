import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugins } from './build/plugins'
import { fileURLToPath, URL } from 'url'

export default defineConfig(({ mode }) =>{
  const viteEnv = loadEnv(mode, process.cwd(), '') as unknown as ImportMetaEnv
  return {
    base: viteEnv.VITE_BASE_URL,
    plugins: setupVitePlugins(),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
