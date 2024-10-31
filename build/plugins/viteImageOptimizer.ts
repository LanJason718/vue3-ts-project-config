// 打包时图片压缩
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export function viteImageOptimizerPlugin() {
  return ViteImageOptimizer({
    png: {
      quality: 80,
    },
    jpeg: {
      quality: 80,
    },
    jpg: {
      quality: 80,
    },
  })
}
