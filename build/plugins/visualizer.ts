// 代码分析
import { visualizer } from 'rollup-plugin-visualizer'

export function visualizerPlugin() {
  return visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
  })
}
