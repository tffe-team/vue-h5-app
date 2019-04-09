import {listApi} from '@/constants/api'
import axiosInstance from '@/interceptors/axios'
import {QueryInfo} from '@/constants/variableType'

export const getList = (data: QueryInfo, callback: any) => {
  axiosInstance({
    method: 'post',
    url: listApi.getlist,
    data: data
  }).then((res: any) => {
    callback(res)
  })
}
