import Vue from 'vue'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueGlide)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
