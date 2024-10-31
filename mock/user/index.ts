// test.ts

import type { MockMethod } from 'vite-plugin-mock'
import { Apis, commonRes } from '../_common'

export default [
  {
    url: `${Apis.USER}/login`,
    method: 'post',
    response: ({ query, body }: any) => {
      console.log('body:', body)
      console.log('query:', query)
      return commonRes({ token: 12314 })
    },
  },
] as MockMethod[]
