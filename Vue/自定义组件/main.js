import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import store from './store'
import filters from './utils/filter.js'
import derectives from './utils/derective.js'
import urls from './https/urls.js'
import * as api from './https/api.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon' // icon
import 'default-passive-events'
import * as message from './utils/message'

import cyButton from './components/Button'
Vue.prototype.$msg = message
// Vue.prototype.$store = store
Vue.prototype.$get = api.get
Vue.prototype.$post = api.post
Vue.prototype.$url = urls
Vue.use(ElementUI)
Vue.use(cyButton)
// 注册全局filter
for (let key in filters) {
  Vue.filter(key, filters[key])
}
for (let key in derectives) {
  Vue.directive(key, derectives[key])
}
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
