// 默认前缀
export enum Apis {
  HOME = '/api/home',
  USER = '/api/user',
}

// 公共返回
export function commonRes(data: any) {
  return {
    code: 200,
    data,
    message: '请求成功',
  }
}
