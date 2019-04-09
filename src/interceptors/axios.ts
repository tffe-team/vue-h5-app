import axios from 'axios'
let axiosInstance: any = {
}
axiosInstance = axios.create({
  timeout: 20000,
  maxContentLength: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use((config: any) => {
  if (config.method.toLowerCase() === 'get') {
    config.params = config.data
  }
  const requestConfig = Object.assign({
    responseType: 'json'
  }, config)
  return requestConfig
}, (error: any) => {
  console.error('服务器异常')
  return Promise.reject(error.message)
})

axiosInstance.interceptors.response.use((response: any) => {
  const data = response.data
  return data
}, (error: any) => {
  console.error('服务器异常')
  return Promise.reject(error)
})
export default axiosInstance
