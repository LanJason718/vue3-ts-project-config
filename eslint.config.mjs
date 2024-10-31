import antfu from '@antfu/eslint-config'

export default antfu({
  // @stylistic/eslint-plugin-plus
  stylistic: true,
  // eslint-plugin-format
  formatters: true,
  // unocss 检测&格式化
  unocss: true,
  // vue的eslint配置
  vue: true,
  // 保存删除未引入的代码
  // isInEditor: false,
  // 自定义规则
  rules: {
    'no-console': 'off',
  },
  // 9x版本 忽略文件这种配置方式 废弃掉eslintignore
  ignores: [
    '*.sh',
    'node_modules',
    '*.woff',
    '*.ttf',
    '.idea',
    '/public',
    '.husky',
    '.local',
    '/bin',
    'Dockerfile',
    'commitlint.config.cjs',
  ],
})
