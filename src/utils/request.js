import axios from 'axios'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // responseType: 'arraybuffer',
  // timeout: 2000,
  withCredentials: true // 带上cookie
})
// 请求拦截器
request.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    // config.headers.hfaj = store.getters.token
  }
  return config
}, (error) => {
  return Promise.error(error)
})
// 响应拦截器
request.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    return Promise.reject(error.response)
  }

)
export default request
