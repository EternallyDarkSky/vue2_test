import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css' ;

import {plug} from "./components/plugin.js"
Vue.use(plug)  // plug插件导入路由插件

import router from "./router/router"

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
