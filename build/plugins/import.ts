import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
export function setupAutoImportPlugin() {
  const plugins = [
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      dts: path.resolve(process.cwd(), 'typings/app/auto-imports.d.ts'),
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: path.resolve(process.cwd(), 'typings/app/components.d.ts'),
      directoryAsNamespace: true,
    }),
  ]
  return plugins
}
