import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : 'http://localhost:3000'

import Vuelidate from 'vuelidate'
// import VeeValidate, { Validator } from 'vee-validate'
// import './local'

// import Chinese from 'vee-validate/dist/locale/zh_CN'

Vue.use(Vuelidate)

// Vue.use(VeeValidate)
// Validator.localize('zh_CN', Chinese)
// const validator = new Validator()
// validator.localize('zh_CN')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
