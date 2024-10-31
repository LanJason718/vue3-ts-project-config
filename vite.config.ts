import { fileURLToPath, URL } from 'node:url'
import { type ConfigEnv, defineConfig, loadEnv, type UserConfig } from 'vite'

// 自动引入样式
import { useBuild } from './build/build'
import { usePlugins } from './build/plugins'
import { useServer } from './build/server'
import { wrapperEnv } from './build/utils'

// https://vite.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  // 模式
  const isBuild = command === 'build'
  // 获取当前文件夹地址 current working directory
  // eslint-disable-next-line node/prefer-global/process
  const root = process.cwd()
  // 读取包含VITE_开头的环境变量
  const env = loadEnv(mode, root)
  // 环境变量值转换
  const viteEnv = wrapperEnv(env)

  return {
    plugins: usePlugins(isBuild, viteEnv),
    build: useBuild(viteEnv),
    server: useServer(viteEnv),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        // 定义全局 SCSS 变量 预加载
        scss: {
          javascriptEnabled: true,
          api: 'modern-compiler',
          additionalData: `
            @use "@/styles/variables.scss" as *;
            @use "@/styles/mixin.scss" as *;`,
        },
      },
    },
  }
})
