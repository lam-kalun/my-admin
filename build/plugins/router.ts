import { vitePluginRoutes } from '../../packages/vite-plugin-vue-routes'

export function setupRouter() {
  return vitePluginRoutes({
    entry: 'src/views',
    output: 'src/router/routers.ts',
    typeDir: 'typings/common/vite-plugin-routes.d.ts'
  })
}