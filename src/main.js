import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueGlide)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
