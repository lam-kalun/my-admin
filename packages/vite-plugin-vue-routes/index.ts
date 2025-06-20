import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'child_process'
import { debounce } from 'es-toolkit'
import {
  generateRoutesTree,
  generateRouteString,
  generateRouteNameType,
  collectRouteNames,
  parseExitsRouteFile,
} from './utils'

import type { Plugin } from 'vite'
import type { Option, RouterMap } from './types'
export function vitePluginRoutes(option: Option): Plugin {
  const { entry, output, typeDir } = option
  const root = process.cwd()
  const viewsDir = path.resolve(root, entry)
  const outputPath = path.resolve(root, output)
  const typesDir = path.resolve(root, typeDir)
  let routerMap = new Map<string, RouterMap>()

  function generateFiles() {
    routerMap.clear()
    routerMap = parseExitsRouteFile(outputPath)
    const routes = generateRoutesTree(viewsDir, viewsDir)
    const routeContent = generateRouteString(routes, routerMap)
    fs.writeFileSync(outputPath, routeContent, 'utf-8')
    // 生成路由名称类型定义
    const routeNames = collectRouteNames(routes)
    const typeContent = generateRouteNameType(routeNames)
    fs.writeFileSync(typesDir, typeContent, 'utf-8')
    execSync(`npx prettier --write ${outputPath} ${typesDir}`)
  }

  const debouncedGenerateRoutes = debounce(generateFiles, 300)

  const watcher = fs.watch(viewsDir, { recursive: true }, (eventType) => {
    if (eventType === 'rename') {
      console.log('监听到文件变化，重新生成路由...')
      debouncedGenerateRoutes()
    }
  })

  return {
    name: 'vite-plugin-vue-routes',
    enforce: 'pre',
    buildStart() {
      generateFiles()
    },
    buildEnd() {
      watcher.close()
    },
  }
}
