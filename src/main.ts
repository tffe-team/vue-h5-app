import 'babel-polyfill'
import Vue from 'vue'
import FastClick from 'fastclick'
import App from '@/App.vue'
import router from './router'
import store from './store'
import {
  fixedAndroidInput,
  fixedIosInputBlur,
  isNeedFastClick
} from '@/common/js/utils'

if (isNeedFastClick()) {
  const fastclick: any = FastClick
  fastclick.attach(document.body)
}

// 合并svg
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
const req = require.context('./assets/svg', false, /\.svg$/)
requireAll(req)
new Vue({
  store,
  router,
  render: (h: any) => h(App),
  mounted () {
    fixedAndroidInput()
    fixedIosInputBlur()
  }
}).$mount('#app')
