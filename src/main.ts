import 'babel-polyfill'
import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'
// import fastclick from 'fastclick'

// 合并svg
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext)
const req = require.context('./assets/svg', false, /\.svg$/)
requireAll(req)
// fastclick.attach(document.body)
new Vue({
  store,
  router,
  render: (h: any) => h(App),
}).$mount('#app')
