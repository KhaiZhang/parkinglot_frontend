import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import constant from './components/constant.vue'

Vue.prototype.CONSTANT = constant;

Vue.use(VueRouter)

Vue.use(Vuex)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
