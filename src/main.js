import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/index'
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.material.blue.light.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bootstrapVue from 'bootstrap-vue'

Vue.use(bootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
