import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './scss/main.scss'
import { Plugin } from 'vue-fragment'
import vClickOutside from 'v-click-outside'

Vue.config.productionTip = false

Vue.use(Plugin)
Vue.use(vClickOutside)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
