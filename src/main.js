import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import setRem from '@/utils/rem'
import './premission'
import '@/style/index.scss'

setRem() // 开启rem适配

Vue.config.productionTip = false

// 批量注册公共组件
const requireComponent = require.context('./components', false, /\.vue$/)
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^\.\//, '').replace(/\.vue/, '')
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
