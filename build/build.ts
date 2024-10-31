// 打包选项

import type { BuildOptions } from 'vite'

export function useBuild(viteEnv: ViteEnv): BuildOptions {
  const { VITE_CHECK } = viteEnv
  return {
    chunkSizeWarningLimit: 1000, // 消除打包大小超过500kb警告
    minify: 'terser', // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
    terserOptions: {
      compress: {
        // keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        // drop_console: true, // 生产环境去除 console
        // drop_debugger: true, // 生产环境去除 debugger
        // pure_funcs: ['console.log'], // 移除 console.log
      },
      format: {
        comments: false, // 删除注释
      },
    },
    rollupOptions: {
      output: {
        // 每个node_modules模块分成一个js文件
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            return VITE_CHECK
              ? id.toString().split('node_modules/.pnpm/')[1].split('/')[0].toString()
              : 'vendor'
          }
          return undefined
        },
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'js/[name].[hash].js',
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'js/[name].[hash].js',
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: (assetInfo: any) => {
          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]
          if (
          // eslint-disable-next-line regexp/no-unused-capturing-group
            /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
          ) {
            extType = 'media'
          }
          // eslint-disable-next-line regexp/no-unused-capturing-group
          else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
            extType = 'img'
          }
          // eslint-disable-next-line regexp/no-unused-capturing-group
          else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'fonts'
          }
          return `${extType}/[name].[hash].[ext]`
        },
      },
    },
  }
}
