import * as types from './mutation-types'

const mutations = {
  [types.LIST](state: any, list: any[]) {
   state.list = list
  }
}
export default mutations
