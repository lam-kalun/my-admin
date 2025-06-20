import vue from '@vitejs/plugin-vue'

import { setupAutoImportPlugin } from './import'
// import { setupRouter } from './router'


export function setupVitePlugins() {
  return [
    vue(),
    ...setupAutoImportPlugin(),
    // setupRouter(),
  ]
}