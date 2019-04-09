import 'babel-polyfill'
import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

FastClick.prototype.onTouchEnd = function(event: any) {
  if (event.target.hasAttribute('type') && event.target.getAttribute('type') === 'text') {
    event.preventDefault()
    return false
  }
}
const fastclick: any = FastClick
fastclick.attach(document.body)
// 合并svg
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
const req = require.context('./assets/svg', false, /\.svg$/)
requireAll(req)
new Vue({
  store,
  router,
  render: (h: any) => h(App),
}).$mount('#app')
