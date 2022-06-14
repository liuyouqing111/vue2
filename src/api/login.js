// 登录的接口
import request from '@/utils/request'
export const login = (params) => {
  return request.get('/login', {
    params
  })
}
