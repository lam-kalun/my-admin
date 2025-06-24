import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'

import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

async function bootstrap() {
  const app = createApp(App)
  await setupRouter(app)
  app.mount('#app')
}

bootstrap()
