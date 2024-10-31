import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules: Record<string, any> = import.meta.glob('../mock/**/*.ts', {
  eager: true,
})
const mockModules: any[] = []

Object.entries(modules).forEach(([key, value]) => {
  ;/_/.test(key) || mockModules.push(...value.default)
})

export function setupProdMockServer(mockAll: boolean) {
  // 如果mockAll为true，则全部启用，否则只启用不包含isConnected的mock接口
  createProdMockServer(mockAll ? mockModules : mockModules.filter(item => !item.isConnected))
}
