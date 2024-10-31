import { viteMockServe } from 'vite-plugin-mock'

export function useMock(mockAll: boolean) {
  return viteMockServe({
    mockPath: 'mock', // 指向mock下的文件 自动读取所有文件里面的所有接口
    ignore: /^_/, // 忽略下划线开头的文件
    watchFiles: true, // 监听文件内容变更   默认true
    localEnabled: true, // 开发环境开启mock
    prodEnabled: true, // 生产环境开启mock
    logger: true, // 默认true
    // injectCode相对路径是相对于src/main.ts
    injectCode: `
        import { setupProdMockServer } from '../mock/_mockProdServer';
        setupProdMockServer(${mockAll});
      `,
    // injectFile 把injectCode自动注入src/main.ts里面 不用手写注入代码
    // injectFile: resolve('src/main.ts'),
  })
}
