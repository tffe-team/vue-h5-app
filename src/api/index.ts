import {helloWordApi} from '@/constants/api'
import axiosInstance from '@/interceptors/axios'

export const sayHello = (data: object, callback: any) => {
  axiosInstance({
    method: 'post',
    url: helloWordApi.helloWord,
    data: data
  }).then((res: any) => {
    callback(res)
  })
}
