import '@/assets/css/tailwind.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
import VueHighlightJS from 'vue-highlightjs'
 
// Tell Vue.js to use vue-highlightjs

Vue.config.productionTip = false

Vue.use(VueCompositionApi);
Vue.use(VueHighlightJS)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
