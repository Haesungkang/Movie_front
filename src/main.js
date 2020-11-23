import Vue from 'vue'
import VueGlide from 'vue-glide-js'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueGlide)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
