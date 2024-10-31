// 自动重启
import ViteRestart from 'vite-plugin-restart'

export function viteRestartPlugin() {
  return ViteRestart({
    restart: ['*.config.[jt]s', '**/config/*.[jt]s', '*.[cm]js'],
  })
}
