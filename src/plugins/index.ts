import type { App } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/stores'

export default {
  install(app: App<Element>) {
    setupRouter(app)
    setupStore(app)
  },
}
