import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'
import 'swiper/css/swiper.css'

Vue.prototype.$http = axios

import './components/commons/component'
// import Vue from 'vue'

import store from './store'

import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
