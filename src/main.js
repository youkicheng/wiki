import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Utils from './lib/utils.js'


Vue.use(ElementUI)
Vue.use(Utils)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
