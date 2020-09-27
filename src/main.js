import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { i18n } from './plugins/i18n.js'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
