import * as types from './mutation-types'
import { ActionTree, Action } from 'vuex'
import {sayHello} from '@/api'

const setHelloInfo: Action<object, object> = ({commit}, params) => {
  return new Promise((resolve, reject) => {
    sayHello(params, (res: any) => {
      if (+res.status === 0) {
        commit(types.HELLO_WORD, res.text)
        resolve(res.data)
      } else {
        reject(res.msg)
      }
    })
  })
}

const actions: ActionTree<object, object> = {
  setHelloInfo
}
export default actions
