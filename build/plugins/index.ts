import vue from '@vitejs/plugin-vue'

import { setupAutoImportPlugin } from './import'
import { setupRouter } from './router'
import { setupUnocssPlugin } from './unocss'


export function setupVitePlugins() {
  return [
    vue(),
    ...setupAutoImportPlugin(),
    setupRouter(),
    setupUnocssPlugin(),
  ]
}