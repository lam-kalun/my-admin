import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

export function setPinia(app: App) {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
}