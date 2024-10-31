// 服务器选项

export function useServer(viteEnv: ViteEnv) {
  return {
    cors: true,
    port: viteEnv.VITE_PORT,
    proxy: {
      '/dev': {
        target: 'http://www.xxx.com',
        changeOrigin: true,
        // 前缀重写
        rewrite: (path: string) => path.replace(/^\/dev/, '/api'),
      },
    },
  }
}
