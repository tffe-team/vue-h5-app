import * as types from './mutation-types'

const mutations = {
  [types.HELLO_WORD](state: any, sayHello: string) {
   state.sayHello = sayHello
  }
}
export default mutations
