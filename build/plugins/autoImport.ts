// 自动引入和组件自动注册

import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export function autoComponentsPlugin() {
  return [
    AutoImport({
      resolvers: [ElementPlusResolver()],
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'pinia', 'vue-router'],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
}
