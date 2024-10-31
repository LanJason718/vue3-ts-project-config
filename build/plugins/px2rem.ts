// px => rem

import { px2rem } from 'vite-plugin-px2rem'

export function px2remPlugin() {
  return px2rem({
    width: 750,
    rootFontSize: 16,
  })
}
