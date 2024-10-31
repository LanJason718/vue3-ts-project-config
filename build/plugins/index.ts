// 插件配置 总入口

import vue from '@vitejs/plugin-vue'
import { autoComponentsPlugin } from './autoImport'
import { useMock } from './mock'
import { px2remPlugin } from './px2rem'
import { unoCssPlugin } from './unoCss'
import { visualizerPlugin } from './visualizer'
import { vitecompressionPlugin } from './vitecompression'
import { viteImageOptimizerPlugin } from './viteImageOptimizer'
import { viteRestartPlugin } from './viteRestart'
import { vueDevToolsPlugin } from './vueDevTools'

export function usePlugins(isBuild: boolean, viteEnv: ViteEnv) {
  const { VITE_OPEN_GIZP, VITE_OPEN_VISUALIZER, VITE_OPEN_MOCK, VITE_MOCK_ALL } = viteEnv
  const plugins = [vue()]
  // 开发环境&加载的插件
  plugins.push(...autoComponentsPlugin())
  plugins.push(px2remPlugin())
  plugins.push(unoCssPlugin())
  // 是否使用mock
  VITE_OPEN_MOCK && plugins.push(useMock(VITE_MOCK_ALL))

  // 生产环境需要
  if (isBuild) {
    plugins.push(viteImageOptimizerPlugin())
    VITE_OPEN_GIZP && plugins.push(vitecompressionPlugin())
    VITE_OPEN_VISUALIZER && plugins.push(visualizerPlugin())
  }// 开发需要
  else {
    plugins.push(vueDevToolsPlugin())
    plugins.push(viteRestartPlugin())
  }

  return plugins
}
